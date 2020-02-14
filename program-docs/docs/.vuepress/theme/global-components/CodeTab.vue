<template>
    <div class="code-tab">
        <div class="code-tab-head">
            <ul>
                <li v-for="tab in tabs" :class="{'code-tab-head-active' : tab.isActive}">
                    <span @click="selectTab(tab)"> {{tab.name}} </span>
                </li>
            </ul>
            <!-- <codetab-icon
            class="code-tab-head-icons"
            :active-name="activeName"
            ></codetab-icon> -->
        </div>
        <div class="code-tab-details">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="less">
    @import '../assets/less/common/code-tab.less';
</style>

<script>
import CodeTabIcon from './CodeTabIcon';
export default {
    components: {
        'codetab-icon': CodeTabIcon
    },
    data() {
        return {
            tabs: [],
            activeName: 'SWAN',
            copyActive: false
        };
    },
    mounted() {
        this.tabs = this.$children.map((item, index) => {
            const isFirstIndex = index === 0;
            item.isActive = isFirstIndex;
            item.moveContentIcon = true;
            return item;
        }).filter(item => !item.activeName);
    },
    computed: {
        codeContent() {
            if (this.$slots && this.$slots.default[0]) {
                const activeContent = this.$slots.default[0];
                return activeContent;
            }
            return '';
        }
    },
    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name === selectedTab.name);
                if (tab.isActive) {
                    this.activeName = tab.name;
                }
            });
        },
        setCpoyActive() {
            this.copyActive = true;
        },
        outCopyActive() {
            this.copyActive = false;
        }
    }
};
</script>