<template>
    <!-- <div> -->
        <div class="code-tab-icons">
            <div class="code-tab-icons-copy"
            @mouseover="setCpoyActive"
            @mouseout="outCopyActive"
            @click="copyCode">
                <div v-if="copyActive" class="code-tab-icons-copy-msg">
                    {{showCopyMsg ? copyMsg : hoverMsg}}
                </div>
                <img v-if="copyActive" src="../assets/images/copy-active.png">
                <img v-else src="../assets/images/copy.png">
            </div>
        </div>
    <!-- </div> -->
</template>

<style lang="less">
    @import '../assets/less/common/code-tab.less';
</style>

<script>
/* globals _hmt */
export default {
    props: {
        activeName: {
            'type': String,
            'default': 'JS'
        },
        copyStatus: {
            'type': Boolean,
            'default': true
        }
    },
    data() {
        return {
            copyActive: false,
            showCopyMsg: false
        };
    },
    computed: {
        hoverMsg() {
            // return `复制${this.activeName}代码`;
            return '复制代码';
        },
        copyMsg() {
            // return this.copyStatus ? `复制${this.activeName}成功` : `复制${this.activeName}失败`;
            return this.copyStatus ? '复制成功' : '复制失败';

        }
    },
    methods: {
        setCpoyActive() {
            this.copyActive = true;
        },
        outCopyActive() {
            this.showCopyMsg = false;
            this.copyActive = false;
        },
        copyCode() {
            this.showCopyMsg = true;
            _hmt.push(['_trackEvent', '复制代码', '点击']);
            this.$emit('copy');
        }
    }
}
</script>