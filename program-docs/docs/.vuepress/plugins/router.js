/**
 * @file 路由映射，将产出生成为index.html的形式，对齐hexo
 * @author wulinfei
 */

const path = require('path');
const globby = require('globby');

const sourceDir = path.join(__dirname, '../../');

const routers = globby.sync(['**/*.md', '!README.md'], {cwd: sourceDir});

const routersMap = routers.map(item => {
    const router = `/${item.substring(0, item.length - 3)}/`;
    return {
        path: router,
        filePath: path.resolve(__dirname, `../../${item}`)
    };
});

// routersMap.push({path: '/index/', filePath: path.resolve(__dirname, '../../README.md')});
// routersMap.push({path: '/', filePath: path.resolve(__dirname, '../../README.md')});

module.exports = {
    additionalPages: routersMap
};

