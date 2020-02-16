<template>
    <div class="doc-header-search-sug">
        <div class="doc-header-search-sug-result" v-if="showSug">
            <div v-for="(itemList, boardIndex) in sugItems" class="doc-header-search-sug-result-item">
                <div class="doc-header-search-sug-result-item-name">
                    {{itemList.boardInfo.name}}
                </div>
                <ul>
                    <li v-for="(item, itemIndex) in itemList.docList">
                        <div class="doc-header-search-sug-result-item-container"
                            @mousedown="navToDocs(item, itemIndex, boardIndex)">
                            <span class="doc-header-search-sug-result-item-tag">{{item.tagInfo.name}}</span>
                            <div class="doc-header-search-sug-result-item-content">
                                <p class="doc-header-search-sug-result-item-content-title"
                                    v-html="item.title">
                                </p>
                                <p v-if="item.description"
                                    class="doc-header-search-sug-result-item-content-des"
                                    v-html="item.description">
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="doc-header-search-sug-more" @mousedown="navToSearch('devdocs')" v-if="showSug">
            <span>
                查看更多 >
            </span>
        </div>
        <div v-if="showToForum" class="doc-header-search-sug-fourm" @mousedown="navToSearch('devforum')">
            <span>
                文档没有相关内容，查看社区搜索结果 >
            </span>
        </div>
    </div>
</template>

<style lang="less">
    @import '../../assets/less/components/search-box.less';
</style>

<script>
/* globals _hmt */
import {searchReport} from '../../utils/report';

export default {
    props: {
        sugItems: {
            'type': Array,
            'default': []
        },
        searchWord: {
            'type': String,
            'default': ''
        },
        forumSugExist: {
            'type': Boolean,
            'default': false
        },
        searchSugShow: {
            'type': Boolean,
            'default': false
        }
    },
    data() {
        return {
            origin: 'https://smartprogram.baidu.com'
        };
    },
    computed: {
        showSug() {
            return this.searchSugShow
                && this.sugItems.length > 0
                && this.searchWord;
        },
        showToForum() {
            return this.forumSugExist
                && this.sugItems.length <= 0
                && this.searchWord;
        }
    },
    methods: {
        // 求取数组项之和
        sum(arr) {
            return arr.reduce((prev, curr) => prev + curr);
        },
        // 获取点击sug的索引
        getSugClickIndex(boardIndex, itemIndex) {
            const sugDataItemLen = this.sugItems.map(item => {
                if (!item.docList) {
                    return 0;
                }
                return item.docList.length;
            });
            const clickTopicList = sugDataItemLen.slice(0, boardIndex);
            const prevIndexSum = boardIndex > 0 ? this.sum(clickTopicList) : 0;

            return prevIndexSum + itemIndex + 1;
        },
        // 跳转至搜索页
        navToSearch(scope) {
            _hmt.push(['_trackEvent', 'sug跳出点击', '点击']);

            searchReport({
                word: this.searchWord,
                source: 'docs',
                module: 'category',
                countType: 'click'
            });

            const url = `${origin}/forum/search`;
            const scopeParam = scope || 'devdocs';
            const param = `word=${this.searchWord.trim()}&scope=${scopeParam}&source=docs`;
            window.open(`${url}?${param}`, '_blank');
            return;
        },
        navToDocs(doc, itemIndex, boardIndex) {

            const sugClickIndex = this.getSugClickIndex(boardIndex, itemIndex);
            const msg = sugClickIndex > 5 ? '位置大于5' : '位置小于5';

            _hmt.push(['_trackEvent', 'sug跳出点击', msg]);

            _hmt.push(['_trackEvent', 'sug跳出点击位置', sugClickIndex]);

            searchReport({
                word: this.searchWord,
                source: 'docs',
                module: 'category',
                countType: 'click'
            });

            const path = doc.path;
            window.open(`${origin}${path}`, '_blank');
            return;
        }
    }
};
</script>