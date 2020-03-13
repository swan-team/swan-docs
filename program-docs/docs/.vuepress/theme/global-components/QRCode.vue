<template>
    <div class="qr-code">
        <div class="qr-code-text" v-if="!isPc">
            请<span class="qr-code-text-botton" @click="clickHandle">点击这里</span>预览效果，或扫描下图二维码
        </div>
        <div class="qr-code-image">
            <div class="qr-code-image-content">
                <qr-code-vue :value="value" :size="size" level="H"></qr-code-vue>
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
import Qs from 'qs';
import {isPc} from '../utils/get-device';

let invokeParams = {};

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
            size: 120,
            isPc: true
        };
    },
    mounted() {
        this.isPc = isPc();
    },
    computed: {
        value() {
            const {
                prefix: urlPrefix,
                query: urlQuery
            } = this.parseUrl(this.url);

            const {
                prefix: purePath,
                query: pathQuery
            } = this.parseUrl(urlQuery.path);

            const pathQueryWithFr = {...pathQuery, fr: 'docs'};
            const finalPathString = this.stringifyQuery(purePath, pathQueryWithFr);

            Object.assign(invokeParams, {
                appKey: urlQuery.appKey,
                path: purePath,
                query: pathQueryWithFr
            });

            return this.stringifyQuery(urlPrefix, {
                ...urlQuery,
                path: finalPathString
            });
        }
    },
    methods: {
        // 解析传入的url
        parseUrl(url) {
            const [prefix, queryString] = url.split('?');
            return {
                prefix,
                query: Qs.parse(queryString)
            };
        },
        stringifyQuery(path, query) {
            return `${path}?${Qs.stringify(query)}`;
        },
        clickHandle() {
            // H5打开小程序
            window.swanInvoke({
                appKey: invokeParams.appKey,
                path: invokeParams.path,
                query: {
                    ...invokeParams.query,
                    fr: 'docs'
                }
            });
        }
    }
};
</script>