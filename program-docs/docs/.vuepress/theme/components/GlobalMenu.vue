<template>
    <div class="global-menu">
        <div v-if="iframeSrc" :class="{'global-menu-simulator': true, 'global-menu-simulator-fixed': simulatorFixed}">
            <web-simulator :iframe-src="iframeSrc"></web-simulator>
        </div>
        <div :class="{'global-menu-botton': true, 'global-menu-botton-webview' : iframeSrc}">
            <back-to-top class="global-menu-botton-item"></back-to-top>
            <div class="global-menu-botton-item feedback" @mouseenter="setMenuAtive" @mouseleave="outMenuAtive">
                <span @click="feedbackClick" >
                    <span v-if="menuActive" class="global-menu-botton-item-font">反&nbsp;馈<br>问&nbsp;题</span>
                    <img v-else alt="智能小程序反馈" src="../assets/images/feedback.png">
                </span>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    @import '../assets/less/common/global-menu.less';
</style>

<script>
/* globals _hmt */
import BackToTop from './BackToTop';
import WebSimulator from './WebSimulator';
export default {
    components: {
        'back-to-top': BackToTop,
        'web-simulator': WebSimulator
    },
    props: {
        iframeSrc: {
            'type': String
        },
        simulatorFixed: {
            'type': Boolean
        }
    },
    data() {
        return {
            menuActive: false
        };
    },
    computed: {
        feedbackLink() {
            const url = 'https://smartprogram.baidu.com/forum/topic/add';
            const param = `boardId=1&tagId=8&docsLink=https://smartprogram.baidu.com/docs${this.$page.path}`;
            return `${url}?${param}`;
        }
    },
    methods: {
        setMenuAtive() {
            this.menuActive = true;
        },
        outMenuAtive() {
            this.menuActive = false;
        },
        feedbackClick() {
            _hmt.push(['_trackEvent', '问题反馈', '点击']);
            window.open(this.feedbackLink, '_blank');
            return;
        }
    }
};
</script>