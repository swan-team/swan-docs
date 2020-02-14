<template>
    <div class="footer">
        <div class="footer-license" v-if="license && license.link && license.name">
            <span>版权声明：</span>
            <a :href="license.link">{{ license.name }}</a>
        </div>
    </div>
</template>

<style lang="less">
    @import '../assets/less/components/footer.less';
</style>

<script>
export default {
    props: {
        license: {
            'type': Object,
            'default': {}
        }
    }
};
</script>