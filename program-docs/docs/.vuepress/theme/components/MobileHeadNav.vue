<template>
    <div class="mobile-header-nav">
        <ul>
            <li v-for="(item, index) in headerNavItems"
                :key="index"
                :class="{'mobile-header-nav-item-active' : activeIndex === index}">
                <router-link
                    :to="item.link"
                    @click.native="targetNavItem(index)">
                    {{item.text}}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<style lang="less">
    @import '../assets/less/components/mobile-head-nav.less';
</style>

<script>
export default {
    props: {
        headerNavItems: {
            'type': Array,
            'default': []
        },
        activeIndex: {
            'type': Number,
            'default': 0
        }
    },
    methods: {
        targetNavItem(index) {
            this.$emit('targetNavItem', index);
        }
    }
};
</script>