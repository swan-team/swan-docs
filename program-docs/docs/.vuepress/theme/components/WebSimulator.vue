<template>
    <div class="web-simulator">
        <div class="web-simulator-iframe">
            <!-- <div class="web-simulator-iframe-mask">
                {{title}}
            </div> -->
            <!-- <img class="web-simulator-iframe-status" src="../assets/images/status.png"> -->
            <iframe
            ref="iframe"
            @mouseenter="disableScrollEvent"
            @mouseleave="enableScrollEvent">
            </iframe>
        </div>
    </div>
</template>

<style lang="less">
    @import '../assets/less/common/global-menu.less';
</style>

<script>

export default {
    props: {
        iframeSrc: {
            'type': String,
            'default': ''
        }
    },
    mounted() {
        this.replaceIframeSrc();
    },
    watch: {
        // 监听 实时更新iframe的src，防止iframe的影响history
        iframeSrc() {
            this.replaceIframeSrc();
        }
    },
    computed: {
        title() {
            return this.$page.frontmatter.title;
        }
    },
    methods: {
        // 禁止页面滚动
        disableScrollEvent() {
            document.documentElement.style.overflow = 'hidden';
        },
        // 允许页面滚动
        enableScrollEvent() {
            document.documentElement.style.overflow = 'auto';
        },
        // 替换iframe的src
        replaceIframeSrc() {
            this.$refs.iframe.contentWindow.location.replace(this.iframeSrc);
        }
    }
};
</script>