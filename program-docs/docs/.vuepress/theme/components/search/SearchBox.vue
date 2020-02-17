<template>
    <div class="doc-header-searchbox">
        <div class="doc-header-search">
            <!-- PC搜索input -->
            <div class="doc-header-search-box">
                <input type="text"
                class="doc-header-search-box-input"
                placeholder="搜索..."
                :maxlength="searchMaxLength"
                @input="getSearchSugList"
                @focus="sendFocusReport"
                @blur="searchInputBlur"
                @keyup.enter="navToSearch"
                v-model="searchWord">
                <img
                class="doc-header-search-box-icon"
                @click="navToSearch"
                src="../../assets/images/search-icon.png"
                alt="百度智能小程序搜索">
            </div>
            <!-- 搜索sug展示 -->
            <search-sug
            :sug-items="sugItems"
            :search-word="searchWord"
            :search-sug-show="searchSugShow"
            :forum-sug-exist="forumSugExist"></search-sug>
        </div>
        <!-- 移动端搜索box -->
        <div class="doc-header-mobile-search-box">
            <div class="doc-header-mobile-search-box-icon"
                @click="mobileSearchHandle"
                v-if="!mobileSearchActive">
                <img src="../../assets/images/search-icon-mobile.png">
            </div>
            <div v-else class="doc-header-mobile-search-box-content">
                <div class="doc-header-mobile-search-box-content-wapper">
                    <img
                    class="doc-header-mobile-search-box-content-wapper-icon"
                    @click="navToSearch"
                    src="../../assets/images/search-icon.png"
                    alt="百度智能小程序搜索">
                    <input type="text"
                        class="doc-header-mobile-search-box-content-wapper-input"
                        placeholder="搜索..."
                        :maxlength="searchMaxLength"
                        @input="getSearchSugList"
                        @focus="sendFocusReport('mobile')"
                        v-model="searchWord">
                </div>
                <span class="doc-header-mobile-search-box-content-cancel" @click="cancelMobileSearch">取消</span>
            </div>
        </div>
        <div v-if="mobileSearchActive" class="doc-header-mobile-search-sug">
            <!-- 搜索sug展示 -->
            <search-sug
            :sug-items="sugItems"
            :search-word="searchWord"
            :search-sug-show="searchSugShow"
            :forum-sug-exist="forumSugExist"></search-sug>
        </div>
    </div>
</template>

<style lang="less">
    @import '../../assets/less/components/search-box.less';
</style>

<script>
/* globals _hmt */
import {Url} from '../../utils/api';
import {get} from '../../utils/request';
import {searchReport} from '../../utils/report';
import debounce from 'lodash/debounce';
import SearchSug from './SearchSug';

export default {
    components: {
        'search-sug': SearchSug
    },
    data() {
        return {
            sugItems: [],
            searchWord: '',
            searchSugShow: false,
            forumSugExist: false,
            searchMaxLength: 38,
            origin: 'https://smartprogram.baidu.com',
            mobileSearchActive: false
        };
    },
    methods: {
        // 获取suglist
        getSearchSugList: debounce(function () {
            this.clearSearchResult();
            // sug展现次数统计
            _hmt.push(['_trackEvent', 'sug展示', '展示']);

            searchReport({
                word: this.searchWord,
                source: 'docs',
                module: 'category',
                countType: 'query'
            });

            if (this.searchWord) {
                return get(Url.searchSugUrl, {word: this.searchWord, scope: 'devdocs'}).then(res => {
                    this.sugItems = res.data || [];
                    this.searchSugShow = this.sugItems && this.sugItems.length > 0;
                    if (!this.searchSugShow) {
                        this.getforumSugStatus().then(res => {
                            this.forumSugExist = res;
                        });
                    }
                }).catch(() =>{});
            }
        }, 500),
        getforumSugStatus() {
            return get(Url.searchSugUrl, {word: this.searchWord, scope: 'devforum'}).then(res => {
                return res.data && res.data.length > 0;
            }).catch(() =>{});
        },
        sendFocusReport(param) {
            if (this.searchWord && this.searchWord.trim().length > 0) {
                if (this.sugItems && this.sugItems.length > 0) {
                    this.searchSugShow = true;
                    return;
                }
                this.getSearchSugList();
                // 点击搜索框次数埋点
                const device = param === 'mobile' ? '移动端' : 'PC端';
                _hmt.push(['_trackEvent', `${device}头部搜索框点击`, '点击']);
            }
        },
        searchInputBlur() {
            this.searchSugShow = false;
        },
        clearSearchResult() {
            this.forumSugExist = false;
            this.searchSugShow = false;
        },
        navToSearch() {
            // 回车&点击搜索图标进入搜索结果页
            _hmt.push(['_trackEvent', '搜索框回车&点击触发搜索', '触发']);

            // 跳转至搜索页
            const url = `${origin}/forum/search`;
            const param = `word=${this.searchWord.trim()}&scope=devdocs&source=docs`;
            window.open(`${url}?${param}`, '_blank');
            return;
        },
        mobileSearchHandle() {
            this.mobileSearchActive = true;
            this.$emit('changeSearchActive', true);
        },
        cancelMobileSearch() {
            this.mobileSearchActive = false;
            this.searchWord = '';
            this.$emit('changeSearchActive', false);
        }
    }
};
</script>