/**
 * @file code代码重新包装
 * @author wulinfei
 */

const extensionLanguageMap = {
    swan: 'markup',
    md: 'markdown',
    ts: 'typescript',
    py: 'python',
    sh: 'bash',
    yml: 'yaml'
};

const getLangExtension = exlang => {
    const lowerlang = exlang.toLowerCase();
    return extensionLanguageMap[lowerlang] || lowerlang;
};

module.exports = md => {
    const fence = md.renderer.rules.fence;
    md.renderer.rules.fence = (...args) => {
        const [tokens, idx] = args;
        const token = tokens[idx];
        const rawlang = token.info.trim();
        token.info = getLangExtension(rawlang);
        const tabName = rawlang.toUpperCase() || 'TEXT';
        const rawCode = fence(...args);
        return `<!--beforebegin--><CodeTabContent name="${tabName}">`
        + `<!--afterbegin-->${rawCode}<!--beforeend--></CodeTabContent><!--afterend-->`;
    };
};
