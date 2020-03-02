<template>
    <div class="qr-code">
        <div class="qr-code-text">
            请<span class="qr-code-text-botton" @click="clickHandle">点击这里</span>预览效果，或扫描下图二维码
        </div>
        <div class="qr-code-image">
            <div class="qr-code-image-content">
                <qr-code-vue :value="url" :size="size" level="H"></qr-code-vue>
                <img src="../assets/images/qrcode-logo.png" alt="百度智能小程序">
            </div>
            <div class="qr-code-image-text">
                <span>请使用百度APP扫码</span>
            </div>
        </div>
    </div>
</template>

<style lang="less">
     @import '../assets/less/common/qr-code.less';
</style>

<script>
import QrcodeVue from 'qrcode.vue';

export default {
    components: {
        'qr-code-vue': QrcodeVue
    },
    props: {
        url: {
            'type': String
        }
    },
    data() {
        return {
            size: 120
        };
    },
    methods: {
        // 解析传入的url
        parseUrl() {
            const url = this.url.slice(this.url.indexOf('?') + 1);
            return this.parseQuery(url);
        },
        // 解析参数为Object形式
        parseQuery(queryString = '') {
            return queryString.split('&').reduce((acc, cur) => {
                const [key, value] = cur.split('=');
                acc[key] = value;
                return acc;
            }, {});
        },
        // 解析path和path后带的参数
        parsePathWithQuery(pathWithQuery) {
            pathWithQuery = decodeURIComponent(pathWithQuery);
            const [path, queryString] = pathWithQuery.split('?');
            return {
                path,
                query: this.parseQuery(queryString)
            };
        },
        clickHandle() {
            const urlInfo = this.parseUrl();
            const {path, query} = this.parsePathWithQuery(urlInfo.path);
            // H5打开小程序
            window.swanInvoke({
                appKey: urlInfo.appKey,
                path,
                query: {
                    ...query,
                    fr: 'docs'
                }
            });
        }
    }
};
</script>