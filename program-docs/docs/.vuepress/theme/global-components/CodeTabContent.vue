<template>
    <div class="code-tab-content" v-show="isActive">
        <div v-if="showContentIcon"
            :class="{'code-tab-content-icons': true, 'code-tab-content-icons-move': moveContentIcon}">
            <codetab-icon
            :active-name="name"
            :code-content="codeContent"
            @copy="copyCode"
            :copy-status="copyStatus"></codetab-icon>
        </div>
        <slot></slot>
    </div>
</template>

<script>
import CodeTabIcon from './CodeTabIcon';
export default {
    components: {
        'codetab-icon': CodeTabIcon
    },
    props: {
        name: {
            'type': String,
            'required': true
        }
    },
    data() {
        return {
            isActive: true,
            showContentIcon: true,
            moveContentIcon: false,
            copyStatus: true
        };
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
        copyCode() {
            const content = this.codeContent.elm.innerText;
            this.$copyText(content).then(() => {
                this.copyStatus = true;
            }, () => {
                this.copyStatus = false;
            });
        }
    }
};

</script>