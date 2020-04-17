<template>
    <div class="sub-nav-container">
        <ul>
            <li v-for="item, index in subNavItems">
                <router-link
                :class="{'sub-nav-item-active' : (activeIndex === index)}"
                :to="item.link || '/index/'"
                @click.native="changeNavItem(index)">
                    {{item.text}}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<style lang="less">
@import '../assets/less/components/sub-nav.less';
</style>

<script>
export default {
    props: {
        subNavItems: {
            'type': Array,
            'default': []
        },
        activeIndex: {
            'type': Number,
            'default': 0
        }
    },
    methods: {
        changeNavItem(index) {
            this.$emit('changeNavItem', index);
        }
    }
};
</script>