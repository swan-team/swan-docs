/**
 * @file markdown解析
 * @author wulinfei
 */

const utils = require('../utils/tools');

module.exports = md => {
    // 给table外包一层，用于小屏幕样式滚动
    md.renderer.rules['table_open'] = () => {
        return '<div class="table-wrap">\n<table>\n';
    };
    md.renderer.rules['table_close'] = () => {
        return '</table>\n</div class="table-wrap">\n';
    };
    // 图片替换为网络地址
    md.renderer.rules.image = (...args) => {
        const [tokens, idx, options, env, slf] = args;
        const token = tokens[idx];
        const imageSrc = token.attrs[token.attrIndex('src')][1];
        token.attrs[token.attrIndex('src')][1] = utils.replaceMarkDownImg(imageSrc);
        token.attrs[token.attrIndex('alt')][1] = slf.renderInlineAsText(token.children, options, env);
        return slf.renderToken(tokens, idx, options);
    };
    md.renderer.rules['html_block'] = (...args) => {
        const [tokens, idx] = args;
        const token = tokens[idx];
        const content = token.content;
        return utils.replaceHtml(content);
    };
    md.renderer.rules['html_inline'] = (...args) => {
        const [tokens, idx] = args;
        const token = tokens[idx];
        const content = token.content;
        return utils.replaceHtml(content);
    };
    // md错误语法过滤
    md.core.ruler.before('block', 'replace', state => {
        const filterResult = utils.replaceErrorMd(state.src);
        state.src = filterResult;
    });
};
