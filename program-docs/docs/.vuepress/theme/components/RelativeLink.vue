<template>
    <div class="relative-link" id="relative-link" v-show="showRelativeLink">
        <div class="relative-link-title">
            相关链接
        </div>
        <div class="relative-link-list">
            <ul>
                <li v-for="(item, index) in relativeLinks">
                    <a :href="getItemPath(item)"
                    @mousedown="relativeClick(item)"
                    target="_blank"
                    >
                    {{ item.title }}
                    <span class="relative-link-list-item-elite" v-if="item.isElite">精</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="relative-link-more" v-if="hasLoadMore" @click="loadMoreRelative">
            加载更多
            <img src="../assets/images/arrow-relative.png">
        </div>
    </div>
</template>

<style lang="less">
    @import '../assets/less/components/relative-link.less';
</style>

<script>
/* globals _hmt */
import {Url} from '../utils/api';
import {get} from '../utils/request';

export default {
    data() {
        return {
            relativeLinks: [],
            loadCount: 1,
            origin: 'https://smartprogram.baidu.com',
            recordTotal: 0,
            relativeLinkIsInView: false
        };
    },
    watch: {
        $route(to, from) {
            this.getRelativeLinks().then(res => {
                this.relativeLinks = res;
            });
        },
        relativeLinkIsInView(newValue, oldValue) {
            if (this.showRelativeLink && newValue && newValue === !oldValue) {
                _hmt.push(['_trackEvent', '文档相关链接', '展示']);
            }
        }
    },
    computed: {
        showRelativeLink() {
            return this.relativeLinks && this.relativeLinks.length > 0;
        },
        hasLoadMore() {
            return this.recordTotal > 5 && this.relativeLinks.length < this.recordTotal;
        }
    },
    mounted() {
        this.getRelativeLinks().then(res => {
            this.relativeLinks = res;
        });
        // 监听滚动事件
        window.addEventListener('scroll', this.setRelativeLinkIsInVIew);
    },
    methods: {
        getRelativeLinks(pageNo) {
            const params = {
                title: this.$page.frontmatter.title,
                pageNo: pageNo || 1
            };
            return get(Url.searchRelativeUrl, params).then(res => {
                this.recordTotal = res.data.pageInfo.recordTotal;
                return res.data.topicList || [];
            }).catch(() => {});
        },
        addRelativeLinks(pageNo) {
            this.getRelativeLinks(pageNo).then(res => {
                this.relativeLinks = [...this.relativeLinks, ...res];
            }).catch(() => {});
        },
        loadMoreRelative() {
            this.loadCount = this.loadCount + 1;
            this.addRelativeLinks(this.loadCount);
        },
        clearData() {
            this.relativeLinks = [];
            this.loadCount = 1;
        },
        getItemPath(item) {
            if (item.topicType === 3) {
                return `${this.origin}/forum/issue/show/${item.issueId}`;
            }
            return `${this.origin}/forum/topic/show/${item.topicId}`;
        },
        relativeReport(urlKey) {
            const params = {
                urlType: 'topic',
                urlKey,
                source: 'docs',
                module: 'docrelation'
            };
            return get(Url.relativeReportUrl, params).catch(() => {});
        },
        relativeClick(item) {
            const urlKey = item.topicId + '';
            this.relativeReport(urlKey);
        },
        isInViewPortOfOne(el) {
            // viewPortHeight 兼容所有浏览器写法
            const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight 
            const offsetTop = el.offsetTop;
            const scrollTop = document.documentElement.scrollTop;
            const top = offsetTop - scrollTop;
            // 这里有个+100是为了提前加载+ 100
            return top <= viewPortHeight + 100;
        },
        setRelativeLinkIsInVIew() {
            const relative = document.getElementById('relative-link');
            this.relativeLinkIsInView = this.isInViewPortOfOne(relative);
        }
    }
};
</script>