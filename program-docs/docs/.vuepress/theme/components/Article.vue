<template>
    <div>
        <article class="article">
            <div class="article-title" v-if="title">
                <h1>{{title}}</h1>
                <span class="article-title-bg"></span>
                <div class="article-title-menu">
                    <!-- 编辑文档&hover冒泡 -->
                    <div class="article-title-menu-edit">
                        <div v-if="editActive"  class="article-title-menu-edit-msg">
                            编辑文档
                        </div>
                        <a class="article-title-menu-edit"
                            :href="gitLink"
                            target="_blank"
                            @mouseover="setEditActive"
                            @mouseout="outEditActive">
                            <img v-if="editActive" src="../assets/images/edit-active.png" >
                            <img v-else src="../assets/images/edit.png" >
                        </a>
                    </div>
                </div>
            </div>
            <Content/>
        </article>
    </div>
</template>

<style lang="less">
    @import '../assets/less/components/article.less';
</style>

<script>
export default {
    data() {
        return {
            editActive: false
        };
    },
    computed: {
        title() {
            return this.$page.frontmatter.title;
        },
        gitLink() {
            const prefixPath = 'https://github.com/swan-team/swan-docs/tree/master/program-docs/docs/';
            return `${prefixPath}${this.$page.relativePath}`;
        }
    },
    methods: {
        setEditActive() {
            this.editActive = true;
        },
        outEditActive() {
            this.editActive = false;
        }
    }
}
</script>