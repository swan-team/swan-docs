/**
 * @file Generate a tabel content JSON for navbar
 * @author Zhang Wenli <zhangwenli01@baidu.com>
 */

/* global hexo */
hexo.extend.generator.register('table-content', function (locals) {
    const result = [];

    locals.posts.forEach(page => {
        if (page.path.indexOf('api/render/CanvasRenderingContext2D/') === -1
            && page.categoryName === 'api' || page.categoryName === 'tutorials'
        ) {
            result.push({
                path: this.config.root + page.path,
                headings: getHeadings(page.content)
            });
        }
    });

    return {
        path: 'table-content.json',
        data: JSON.stringify(result)
    };
});

/**
 * Get h3 headings with href
 *
 * @param {string} content HTML content
 * @return {Object[]} array of headings with href and title
 */
function getHeadings(content) {
    const headings = [];
    const lines = content.split('\n');
    lines.forEach(line => {
        if (line) {
            let trimed = line.trim();
            const h3Index = trimed.indexOf('<h3 ');
            if (h3Index > -1) {
                trimed = trimed.substr(h3Index);
                headings.push({
                    href: getMatchedResult(trimed, 'href="', '"'),
                    title: getMatchedResult(trimed, 'title="', '"')
                });
            }
        }
    });
    return headings;
}

/**
 * Get the content between prefix and suffix
 *
 * @param {string} str string to match
 * @param {string} prefix before content
 * @param {string} suffix after content
 * @return {string} matched result
 */
function getMatchedResult(str, prefix, suffix) {
    const regExp = new RegExp(`${prefix}(.*?)${suffix}`);
    const match = regExp.exec(str);
    return (match && match.length > 1) ? match[1] : '';
}
