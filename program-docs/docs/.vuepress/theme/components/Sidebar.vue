<template>
    <div class="m-doc-sidebar">
        <!-- <div class="m-doc-sidebar-nav-wrapper"> -->
            <ul :class="`m-doc-sidebar-menu-0`"
                v-for="(menuItem, index) in sidebarNavItems"
                :key="index">
                <sidebar-tree
                    :model="menuItem"
                    :menu-index="menuIndex"
                    :init-child-close="close"
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
// import {
//     getInitSubIndex
// } from '../utils/get-init-data';

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
    // computed: {
    //     sidebarItemIndex() {
    //         return getInitSubIndex(this.sidebarNavItems, this.$route.path);
    //     }
    // },
    methods: {
        sidebarItemHandle() {
            this.$emit('sidebarItemHandle');
        }
    }
};
</script>