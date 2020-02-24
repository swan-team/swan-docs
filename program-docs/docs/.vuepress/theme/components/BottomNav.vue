<template>
    <div class="bottom-nav">
        <div v-if="left && Object.keys(left).length" class="bottom-nav-left">
            <router-link :to="left.link">
                <img class="bottom-nav-left-icon" src="../assets/images/prev.png">
                {{left.text}}
            </router-link>
        </div>
        <div v-if="right && Object.keys(right).length" class="bottom-nav-right">
            <router-link :to="right.link">
                {{right.text}}
                <img class="bottom-nav-right-icon" src="../assets/images/next.png">
            </router-link>
        </div>
    </div>
</template>

<style lang="less">
    @import '../assets/less/components/bottom-nav.less';
</style>

<script>
export default {
    props: {
        bottomNavItems: {
            'type': Object,
            'default': {}
        }
    },
    computed: {
        left() {
            return this.bottomNavItems.left;
        },
        right() {
            return this.bottomNavItems.right;
        }
    }
};
</script>