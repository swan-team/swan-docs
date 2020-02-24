<template>
    <li class="m-doc-sidebar-tree">
        <span
        @click="toggle"
        :class="{'m-doc-sidebar-item-active' : isSelected}"
        v-if="model.text">
            <router-link v-if="hasLink" @click.native="changeSidebarItem" :to="itemLink">
                {{model.text}}
            </router-link>
            <span v-else>{{model.text}}</span>
            <img v-if="showOpenImg"
                src="../assets/images/arrow.png"
                class="icon"
                :class="[openStatus ? 'sidebar-item-open': 'sidebar-item' ]"
                :alt="model.text">
        </span>
        <ul :class="`m-doc-sidebar-menu-${menuIndex}`" v-if="hasChild && showChild">
            <sidebar-tree
                v-for="(item,index) in model.sidebar"
                :model="item"
                :key="index"
                :menu-index="classIndex"
                :init-child-close="false"
                @changeSidebarItem="changeSidebarItem">
            </sidebar-tree>
        </ul>
    </li>
</template>

<style lang="less">
    @import '../assets/less/components/sidebar-tree.less';
</style>

<script>
    /* globals _hmt */
    import {findLink} from '../utils/link-loader';
    import {getNavList} from '../utils/get-init-data';
    export default {
        name: 'sidebar-tree',
        props: {
            model: {
                'type': Object,
                'default': {}
            },
            menuIndex: {
                'type': Number,
                'default': 1
            },
            initChildClose: {
                'type': Boolean,
                'default': false
            }
        },
        data() {
            return {
                openStatus: false
            };
        },
        mounted() {
            this.openStatus = !this.initChildClose;
        },
        watch: {
            initChildClose: {
                deep: true,
                handler(newValue, oldValue) {
                    this.openStatus = !newValue;
                }
            }
        },
        computed: {
            hasChild() {
                return this.model && this.model.sidebar && this.model.sidebar.length;
            },
            showOpenImg() {
                return this.hasChild && this.menuIndex === 1;
            },
            classIndex() {
                return this.menuIndex + 1;
            },
            isSelected() {
                return this.$route.path === this.model.link;
            },
            itemLink() {
                return findLink(this.model);
            },
            hasLink() {
                return this.itemLink && !this.showOpenImg;
            },
            // 是否展示子目录
            showChild() {
                return this.openStatus || !this.model.text;
            }
        },
        methods: {
            toggle() {
                if (this.hasChild && this.menuIndex === 1) {
                    this.openStatus = !this.openStatus;

                    _hmt.push(['_trackEvent', '侧边一级导航', '点击']);
                }
            },
            changeSidebarItem() {
                this.$emit('changeSidebarItem');
            }
        }
    };
</script>
