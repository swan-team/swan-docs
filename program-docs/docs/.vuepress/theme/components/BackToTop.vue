<template>
    <div class="back-to-top"
        v-if="show"
        @click="scrollToTop"
        @mouseenter="setMenuAtive"
        @mouseleave="outMenuAtive">
        <span v-if="menuActive" class="global-menu-botton-item-font">回&nbsp;到<br>顶&nbsp;部</span>
        <img v-else src="../assets/images/back-to-top.png">
    </div>
</template>

<script>
/* globals _hmt */
import debounce from 'lodash.debounce';

export default {
    data() {
        return {
            scrollTop: null,
            threshold: 300,
            menuActive: false
        };
    },
    computed: {
        show() {
            return this.scrollTop > this.threshold;
        }
    },
    mounted() {
        this.scrollTop = this.getScrollTop();
        window.addEventListener('scroll', debounce(() => {
            this.scrollTop = this.getScrollTop();
        }, 100));
    },
    methods: {
        getScrollTop() {
            return window.pageYOffset
                || document.documentElement.scrollTop
                || document.body.scrollTop || 0;
        },
        scrollToTop() {
            window.scrollTo({top: 0, behavior: 'smooth'});
            this.scrollTop = 0;
            this.menuActive = false;

            _hmt.push(['_trackEvent', '返回顶部', '点击']);
        },
        setMenuAtive() {
            this.menuActive = true;
        },
        outMenuAtive() {
            this.menuActive = false;
        }
    }

};
</script>