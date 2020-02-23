<template>
    <div class="m-doc-sidebar" id="doc-sidebar">
        <!-- <div class="m-doc-sidebar-nav-wrapper"> -->
            <ul :class="`m-doc-sidebar-menu-0`"
                v-for="(menuItem, index) in sidebarNavItems"
                :key="index">
                <sidebar-tree
                    :model="menuItem"
                    :menu-index="menuIndex"
                    :init-child-close="initChildClose(index)"
                    @changeSidebarItem="sidebarItemHandle">
                </sidebar-tree>
            </ul>
        <!-- </div> -->
    </div>
</template>

<style lang="less">
   @import '../assets/less/components/sidebar.less';
</style>

<script>
import SidebarTree from './SidebarTree';
import {
    getInitSubIndex
} from '../utils/get-init-data';
import $ from 'jquery';

export default {
    props: {
        sidebarNavItems: {
            'type': Array,
            'default': []
        },
        close: {
            'type': Boolean
        }
    },
    components: {
        'sidebar-tree': SidebarTree
    },
    data() {
        return {
            menuIndex: 1
        };
    },
    mounted() {
        // 导航初始定位
        setTimeout(() => {
            const selectedNav = $('.router-link-active')[0];
            if (selectedNav) {
                const top = selectedNav.getBoundingClientRect().top - 190;
                const sidebar = document.getElementById('sidebar');
                sidebar.scrollTo({
                    top,
                    behavior: 'smooth'
                });
            }
        }, 200);
    },
    computed: {
        sidebarItemIndex() {
            return getInitSubIndex(this.sidebarNavItems, this.$route.path);
        }
    },
    methods: {
        sidebarItemHandle() {
            this.$emit('sidebarItemHandle');
        },
        initChildClose(index) {
            return this.close
                && index !== this.sidebarItemIndex;
        }
    }
};
</script>