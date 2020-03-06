<template>
    <div class="open-ide" v-if="isPc">
        <div class="open-ide-loading" v-if="showLoading">
            <p class="open-ide-loading-title">
                正在打开开发者工具...
            </p>
            <p class="open-ide-loading-ask">
                没有安装开发者工具？
                <router-link to="/develop/devtools/history/">点此下载</router-link>
            </p>
        </div>
        <div class="open-ide-button">
            <a class="open-ide-button-link"
                :href="url"
                title="在开发者工具中预览效果"
                @click="openIdeHandle">
                在开发者工具中打开
            </a>
        </div>
    </div>
</template>

<style lang="less">
    @import '../assets/less/common/plugin-container.less';
</style>

<script>
import {isPc} from '../utils/get-device';

export default {
    props: {
        url: {
            'type': String
        }
    },
    data() {
        return {
            showLoading: false,
            isPc: true
        };
    },
    mounted() {
        this.isPc = isPc();
    },
    methods: {
        // 点击打开开发者工具，显示loading效果。3s后消失
        openIdeHandle() {
            this.showLoading = true;
            setTimeout(() => {
                this.showLoading = false;
            }, 3000);
        }
    }
};
</script>