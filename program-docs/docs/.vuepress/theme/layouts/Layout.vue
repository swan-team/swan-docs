<template>
    <div class="container">
        <!-- 头部 -->
        <div class="header-container">
            <!-- 头部导航 -->
            <doc-header class="header-nav"
            @targetNavItem="changeHeaderNavItem"
            @mobileNavToggle="mobileNavToggle"
            @mobileSidebarToggle="changeMobileSidebar"
            :mobile-nav-open="mobileNavOpen"
            :mobile-sidebar-show="mobileSidebarShow"
            :header-nav-items="headerNav"
            :active-index="headerNavIndex"></doc-header>
            <!-- 二级导航 -->
            <sub-nav 
            :class="{
                'sub-nav': true,
                'sub-nav-fixed': fixedNav,
                'sub-nav-show': mobileSidebarShow
            }"
            v-if="subNav.length && subNavIsShow && !mobileNavOpen"
            @changeNavItem="changeSubNavItem"
            :sub-nav-items="subNav"
            :active-index="subNavIndex">
            </sub-nav>
        </div>

        <!-- 侧边导航 -->
        <sidebar
        v-if="sidebarIsShow"
        :class="{
            'page-container-sidebar': true,
            'page-container-sidebar-fixed': fixedNav,
            'page-container-sidebar-top' : subNavIsShow,
            'page-container-sidebar-mobile-show': mobileSidebarShow
        }"
        id="sidebar"
        :sidebar-nav-items="sidebarNav"
        :close="sidebarNarIsClose"
        @sidebarItemHandle="sidebarItemHandle">
        </sidebar>

        <!-- 主内容 -->
        <div
        :class="{
            'page-container': true,
            'page-container-top' : subNavIsShow,
            'page-container-right': iframeSrc
        }">
            <div class="page-container-content">
                <!-- 内容文章 -->
                <doc-article class="page-container-content-article"></doc-article>
                <div class="page-container-content-bottom">
                    <!-- 底部导航 -->
                    <bottom-nav id="bottom" class="page-container-bottom-nav" :bottom-nav-items="bottomNav"></bottom-nav>
                    <!-- 页脚 -->
                    <doc-footer :license="license"></doc-footer>
                </div>
            </div>
        </div>

        <!-- 全局右侧 -->
        <global-menu :iframe-src="iframeSrc"></global-menu>

        <!-- 移动端导航列表 -->
        <mobile-head-list
        v-if="mobileNavOpen"
        @targetNavItem="changeMobileHeadNavItem"
        :header-nav-items="headerNav"
        :active-index="headerNavIndex"></mobile-head-list>
        
    </div>
</template>

<style lang="less">
    @import '../assets/less/common/common.less';
</style>

<script>
/* globals _hmt */
import Header from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';
import BottomNav from '../components/BottomNav.vue';
import SubNav from '../components/SubNav.vue';
import Article from '../components/Article.vue';
import MobileHeadNav from '../components/MobileHeadNav.vue';
import GlobalMenu from '../components/GlobalMenu.vue';
import Footer from '../components/Footer.vue';
import {
    getNavOrderList,
    getInitHeaderIndex,
    getInitSubIndex
} from '../utils/get-init-data';
import {findLink} from '../utils/link-loader';
import 'prismjs/themes/prism.css';
import '../assets/less/common/custom.css';
import $ from 'jquery';

export default {
    components: {
        'doc-header': Header,
        'sidebar': Sidebar,
        'bottom-nav': BottomNav,
        'sub-nav': SubNav,
        'doc-article': Article,
        'mobile-head-list': MobileHeadNav,
        'global-menu': GlobalMenu,
        'doc-footer': Footer
    },
    data() {
        return {
            mobileNavOpen: false,
            mobileSidebarShow: false,
            scrollTop: 0
        };
    },
    mounted() {
        // 监听滚动事件
        $(window).on('scroll', this.setScrollTop);

        // 对齐线上，给md中的元素绑定事件 todo: 改成自定义组件 @wulinfei
        $('.show-scene-btn').on('click', function (e) {
            $(e.currentTarget).next().css({
                display: 'flex'
            });
        });
        $('.img-container').on('click', function (e) {
            e.stopPropagation();
            $(e.currentTarget).hide();
        });
    },
    destroyed() {
        $(window).off('scroll', this.setScrollTop);
    },
    computed: {
        headerNavIndex() {
            const currentPageHeader = this.$page.frontmatter.header;
            return getInitHeaderIndex(this.headerNav, currentPageHeader);
        },
        subNavIndex() {
            if (this.subNavIsShow) {
                return getInitSubIndex(this.subNav, this.$route.path);
            }
            return 0;
        },
        navData() {
            return this.$site.themeConfig.navData;
        },
        // 二级导航是否显示
        subNavIsShow() {
            return this.headerNavIndex === 0 || this.headerNavIndex === 2;
        },
        // 侧边栏是否展开
        sidebarNarIsClose() {
            if (this.subNavIsShow) {
                return this.subNav[this.subNavIndex].close;
            }
            return this.subNav.close;
        },
        // 导航排序
        navOrderList() {
            return getNavOrderList(this.sidebarNav);
        },
        // 头部导航
        headerNav() {
            return this.navData.map(item => {
                return {
                    text: item.text,
                    link: item.link,
                    name: item.name,
                    close: item.close,
                    license: item.license,
                    nav: item.nav
                };
            });
        },
        // 二级导航
        subNav() {
            return this.navData[this.headerNavIndex].nav.map(item => {
                const link = findLink(item);
                const close = item.close === true;
                return {
                    text: item.text,
                    link,
                    close,
                    sidebar: item.sidebar,
                    showSubNav: item.showSubNav
                };
            });
        },
        // 侧导航
        sidebarNav() {
            if (this.subNavIsShow) {
                return this.subNav[this.subNavIndex].sidebar;
            }
            return this.subNav;
        },
        // 底部导航
        bottomNav() {
            const currentPage = this.$page;
            let left = {};
            let right = {};
            this.navOrderList.forEach((item, index) => {
                if (item.link === currentPage.path) {
                    left = index > 0 ? this.navOrderList[index - 1] : {};
                    right = (index < this.navOrderList.length - 1) ? this.navOrderList[index + 1] : {};
                }
            });
            return {left, right};
        },
        sidebarIsShow() {
            return !this.mobileNavOpen;
        },
        // 导航是否固定定位
        fixedNav() {
            return this.scrollTop > 59;
        },
        iframeSrc() {
            const isSimulator = this.$page.frontmatter.webUrl;
            // 测试参数
            const params = 'fr=docWeb';
            // const isSimulator = 'https://qft12m.smartapps.cn/subPackages/apiPackage/pages/modal/modal';
            return isSimulator ? `${isSimulator}?${params}` : '';
        },
        // 版权声明
        license() {
            return this.navData[this.headerNavIndex].license || {};
        }
    },
    methods: {
        // 侧边栏回到顶部
        sidebarScrollToTop() {
            const sidebar = document.getElementById('sidebar');
            sidebar.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
        changeHeaderNavItem(index) {
            this.sidebarScrollToTop();

            _hmt.push(['_trackEvent', '头部二级导航', '点击']);
        },
        changeSubNavItem(index) {
            this.sidebarScrollToTop();

            _hmt.push(['_trackEvent', '头部二级导航', '点击']);
        },
        // 移动端头部展示的导航点击
        mobileNavToggle() {
            this.mobileNavOpen = !this.mobileNavOpen;
            this.mobileSidebarShow = false;
        },
        // 点击移动端一级导航列表
        changeMobileHeadNavItem(index) {
            this.mobileNavOpen = false;
        },
        // 移动端头部菜单点击
        changeMobileSidebar() {
            this.mobileSidebarShow = !this.mobileSidebarShow;
            this.mobileNavOpen = false;
        },
        // 移动端侧导航点击
        sidebarItemHandle() {
            this.mobileSidebarShow = false;
        },
        getScrollTop() {
            return window.pageYOffset
                || document.documentElement.scrollTop
                || document.body.scrollTop || 0;
        },
        setScrollTop() {
            this.scrollTop = this.getScrollTop();
        }
    }
};
</script>