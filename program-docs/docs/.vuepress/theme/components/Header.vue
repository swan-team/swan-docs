<template>
    <div class="doc-header">
        <!-- pc头部 -->
        <div class="doc-header-container">
            <!-- logo -->
            <div class="doc-header-navbar">
                <a class="doc-header-navbar-logo"
                    :href="smartProgram"
                    target="_self">
                    <img src="../assets/images/logo.png" alt="智能小程序">
                </a>
                <span class="doc-header-navbar-line"></span>
                <a class="doc-header-navbar-des"
                    :href="smartDocs"
                    target="_self">
                    <img src="../assets/images/logo_docs.png" alt="开发者文档">
                </a>
            </div>
            <!-- 头部导航 -->
            <div class="doc-header-topnav">
                <ul>
                    <li v-for="item, index in headerNavItems"
                        :key="item.link"
                        :class="{'doc-header-topnav-item-active' : activeIndex === index}">
                        <router-link
                        :to="item.link"
                        @click.native="targetNavItem(index)">
                            {{item.text}}
                        </router-link>
                    </li>
                    <li class="doc-header-topnav-other" v-for="item in headerNavOther" :key="item.link">
                        <a target="_blank"
                        :href="item.link">
                            {{item.text}}
                        </a>
                    </li>
                    <search-box></search-box>
                </ul>
            </div>
        </div>
        <!-- 外部链接 -->
        <div class="doc-header-other">
            <a v-for="item in docNavOther"
                :key="item.link"
                :href="item.link"
                target="_blank"
                class="doc-header-other-item">
                {{item.text}}
            </a>
        </div>
        
        <!-- 移动端头部 -->
        <div class="doc-header-mobile">
            <!-- 左侧一级导航选择区域 -->
            <div class="doc-header-mobile-left">
                <div class="doc-header-mobile-logo">
                    <img src="../assets/images/logo-mobile.png" alt="智能小程序">
                </div>
                <div class="doc-header-mobile-selected" v-if="!mobileSearchActive" @click="mobileNavToggle">
                    <span>{{activeName}}</span>
                    <img :class="{'doc-header-mobile-selected-img': true, 'doc-header-mobile-selected-img-open' : mobileNavOpen}"
                        src="../assets/images/mobile-select.png">
                </div>
            </div>
             <!-- 右侧菜单区域 -->
            <div :class="{'doc-header-mobile-right': true, 'doc-header-mobile-right-active' : mobileSearchActive}">
                <!-- 展示菜单 -->
                <div class="doc-header-mobile-menu" v-if="!mobileSearchActive" @click="mobileSidebarToggle">
                    <img v-if="mobileSidebarShow" src="../assets/images/mobile-close.png">
                    <img v-else src="../assets/images/head-menu-mobile.png">
                </div>

                <!-- 移动端搜索框 -->
                <search-box
                @changeSearchActive="changeSearchActive"></search-box>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    @import '../assets/less/components/header.less';
</style>

<script>
import SearchBox from './search/SearchBox';
export default {
    components: {
        'search-box': SearchBox
    },
    props: {
        headerNavItems: {
            'type': Array,
            'default': []
        },
        activeIndex: {
            'type': Number,
            'default': 0
        },
        mobileNavOpen: {
            'type': Boolean,
            'default': false
        },
        mobileSidebarShow: {
            'type': Boolean,
            'default': false
        }
    },
    data() {
        return {
            mobileSearchActive: false
        };
    },
    computed: {
        smartDocs() {
            return this.$site.themeConfig.nav.smartDocs;
        },
        docNavOther() {
            return this.$site.themeConfig.nav.navOther;
        },
        smartProgram() {
            return this.$site.themeConfig.nav.smartProgram;
        },
        headerNavOther() {
            return this.$site.themeConfig.headerNavOther;
        },
        activeName() {
            return this.headerNavItems[this.activeIndex].text;
        }
    },
    methods: {
        targetNavItem(index) {
            this.$emit('targetNavItem', index);
        },
        mobileNavToggle() {
            this.$emit('mobileNavToggle');
        },
        mobileSidebarToggle() {
            this.$emit('mobileSidebarToggle');
        },
        changeSearchActive(searchStatus) {
            this.mobileSearchActive = searchStatus;
        }
    }
};
</script>