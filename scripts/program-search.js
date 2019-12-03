/**
 * @file Generate programsearch JSON 生成小程序专用的搜索json文件
 * @author Zhang Wenli <wulinfei@baidu.com>
 */

const fs = require('fs');
const {BOARD_MAP, TAG_MAP} = require('./utils/constant');

/* global hexo */
hexo.extend.generator.register('programSearch', function (locals) {
    const config = this.config;
    const searchConfig = config.search;
    let searchfield = searchConfig.field;

    let posts;
    let pages;
    // 递归生成搜索结果面包屑
    let resBreadCrumbs = [];

    if (searchfield.trim() !== '') {
        searchfield = searchfield.trim();
        if (searchfield === 'post') {
            posts = locals.posts.sort('-date');
        }
        else if (searchfield === 'page') {
            pages = locals.pages;
        }
        else {
            posts = locals.posts.sort('-date');
            pages = locals.pages;
        }
    }
    else {
        posts = locals.posts.sort('-date');
    }

    let res = [];
    let index = 0;

    [posts, pages].forEach(function (posts) {
        if (posts) {
            posts.each(function (post) {
                if (post.draft) {
                    return;
                }

                const tmpPost = {};
                if (post.title) {
                    tmpPost.title = post.title;
                }
                if (post.path) {
                    tmpPost.url = config.root + post.path;
                }
                if (post._content) {
                    tmpPost.content = post.more ? replaceHtml(post.more) : includeMarkdown(post._content);
                }
                if (post.nav) {
                    tmpPost.tagName = TAG_MAP[post.nav] || '';
                } else {
                    tmpPost.tagName = '';
                }
                if (post.header) {
                    tmpPost.boardName = BOARD_MAP[post.header] || '';
                } else {
                    tmpPost.boardName = '';
                }
                if (post.categoryName) {
                    tmpPost.categoryName = post.categoryName;
                }
                if (post.tags && post.tags.length > 0) {
                    const tags = [];
                    const tagIndex = 0;
                    const setName = function (tag) {
                        tags[tagIndex] = tag.name;
                    };
                    post.tags.each(setName);
                    tmpPost.tags = tags;
                }
                if (post.categories && post.categories.length > 0) {
                    const categories = [];
                    const catIndex = 0;
                    const setName = function (cate) {
                        categories[catIndex] = cate.name;
                    };
                    post.categories.each(setName);
                    tmpPost.categories = categories;
                }
                tmpPost.breadCrumbs = [tmpPost.title + ',' + tmpPost.url.slice(5)];
                res[index] = tmpPost;
                index += 1;
            });
        }
    });
    resBreadCrumbs = resBreadCrumbs.map(function (item) {
        item.breadCrumbs = item.breadCrumbs.filter(function (item) {
            return item !== 'undefined,undefined';
        });
        item.breadCrumbs.push(item.text + ',' + item.link);
        return {
            breadCrumbs: item.breadCrumbs,
            title: item.text,
            url: '/docs' + item.link,
            isNav: true
        };
    });
    res = [...resBreadCrumbs, ...res];
    // 删除小游戏文档
    res = res.filter(function (item) {
        return item.url.indexOf('/docs/game/') === -1;
    });
    const json = JSON.stringify([...res]);

    return {
        path: 'programSearch.json',
        data: json
    };
});

function includeMarkdown(content) {
    // Find path in content
    const regExp = new RegExp('<!-- md (.*?) -->');
    let match = regExp.exec(content);

    // Find all includes
    while (match && match.length > 1) {
        const path = (match && match.length > 1) ? match[1] : '';

        // Read content of included file
        const file = fs.readFileSync('source/_posts/' + path, 'utf8');

        // Replace including tag
        const replaceRegExp = new RegExp(`<!-- md ${path} -->`, 'g');
        content = content.replace(replaceRegExp, file);

        // Find next include
        match = regExp.exec(content);
    }
    return content;
}

// 去除所有html标签 转为纯文本
function replaceHtml(str) {
    str = str.replace(/(\r\n|\n)/g, '')               // 换行
    .replace(/\s/g, '')                              // 空格
    .replace(/<!--.*?\/-->/g, '')                   // 注释
    .replace(/<pre.*?\/pre>/g, '')                 // 去掉代码片段
    .replace(/<[^>]+>/g, '');                     // html标签

    return str;
}