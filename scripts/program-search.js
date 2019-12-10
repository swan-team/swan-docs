/**
 * @file Generate programsearch JSON 生成小程序专用的搜索json文件
 * @author wulinfei <wulinfei@baidu.com>
 */

const fs = require('fs');
const {
    BOARD_MAP,
    TAG_MAP,
    BOARD_URL_MAP
} = require('./utils/constant');

// 处理nav.yml文件的link，标准化，使首尾均有/
// todo: nav.yml的link格式统一@wenlixiu
const filterLink = link => {
    const retStart = link.match('^\/', link);
    const retEnd = link.match('\/$', link);
    if (!retStart) {
        link = `/${link}`;
    }
    if (!retEnd) {
        link = `${link}/`;
    }
    return '/docs' + link;
};

// 获取导航链接，如果导航不存在link，则找其sidebar第一项的链接
const findLink = navItem => {
    if (navItem.link) {
        return filterLink(navItem.link);
    }
    const sidebar = navItem.sidebar;
    if (sidebar && sidebar[0].link) {
        return filterLink(sidebar[0].link);
    }
    return findLink(sidebar[0]);
};
/* global hexo */
hexo.extend.generator.register('programSearch', function (locals) {
    const config = this.config;
    const searchConfig = config.search;

    let navs = locals.data.nav;
    // 最终生成的面包屑数据
    let resBreadCrumbs = [];
    // 递归生成搜索结果面包屑
    navs.forEach(function (nav) {
        if (nav.link) {
            nav.breadCrumbs = [{name: nav.text, link: nav.link}];
            resBreadCrumbs.push(nav);
        }
        nav.nav.forEach(function (nav) {
            generateNavItem(nav);
        });
    });
    // 生成面包屑数据二级导航
    function generateNavItem(navItem) {
        const link = findLink(navItem);
        navItem.breadCrumbs = [{
            name: navItem.text,
            link
        }];
        resBreadCrumbs.push(navItem);
        if (navItem.sidebar) {
            generateNav(navItem.sidebar, [{
                name: navItem.text,
                link
            }], 0);
        }
    }

    // 生成面包屑数据三级导航
    function generateNav(nav, breadCrumbs, index) {
        index++;
        nav.forEach(function (na) {
            na.breadCrumbs = breadCrumbs.slice(0);
            resBreadCrumbs.push(na);
            if (na.sidebar) {
                const link = findLink(na);
                const temp = breadCrumbs.slice(0, index);
                temp.push({
                    name: na.text,
                    link
                });
                generateNav(na.sidebar, temp, index);
            }
        });
    }

    const navList = {};

    resBreadCrumbs = resBreadCrumbs.map(function (item) {
        //  保证面包屑数据中 text和link均存在
        item.breadCrumbs = item.breadCrumbs.filter(function (subitem) {
            return subitem.name && subitem.link;
        });

        const itemLink = findLink(item);

        item.breadCrumbs.push({
            name: item.text,
            link: itemLink
        });

        // 去掉链接中包含#号的文档，其余的保存在navList中
        if (itemLink.indexOf('#') === -1) {
            navList[itemLink] = itemLink;
        }

        return {
            breadCrumbs: item.breadCrumbs,
            title: item.text,
            url: itemLink,
            name: item.name
        };
    });

    let searchfield = searchConfig.field;
    let posts;
    let pages;
    if (searchfield.trim() !== '') {
        searchfield = searchfield.trim();
        if (searchfield === 'post') {
            posts = locals.posts.sort('-date');
        } else if (searchfield === 'page') {
            pages = locals.pages;
        } else {
            posts = locals.posts.sort('-date');
            pages = locals.pages;
        }
    } else {
        posts = locals.posts.sort('-date');
    }

    // 过滤掉不存在侧边栏的文档，保证搜索数据干净
    posts = posts.filter(function (post) {
        const postPath = config.root + post.path;
        return navList[postPath];
    });

    let res = [];

    [posts, pages].forEach(function (posts) {
        if (posts) {
            posts.each(function (post) {
                if (post.draft) {
                    return;
                }
                const tmpPost = {};
                tmpPost.title = post.title || '';
                tmpPost.url = post.path ? (config.root + post.path) : '';
                tmpPost.boardName = BOARD_MAP[post.header] || '';
                if (post._content) {
                    tmpPost.content = post.more ? replaceHtml(post.more) : includeMarkdown(post._content);
                }
                const tmpPostBreadCrumbs = resBreadCrumbs.filter(function (item) {
                    // 保证该页面的url存在nav.yml文件中 且 name与sidebar对应
                    // todo: name与sidebar一一对应 @wenlixiu
                    return (item.url === tmpPost.url) && (item.name === post.sidebar);
                });
                // 如果不存在breadCrumbs，则默认将本身链接作为breadCrumbs
                tmpPost.breadCrumbs = tmpPostBreadCrumbs.length > 0 ? tmpPostBreadCrumbs[0].breadCrumbs : [{
                    name: tmpPost.title,
                    link: tmpPost.url
                }];
                // 添加该文章对应的BOARD
                tmpPost.breadCrumbs.unshift({
                    name: BOARD_MAP[post.header],
                    link: BOARD_URL_MAP[post.header]
                });
                // 文章的tagName，若不存在，默认取面包屑第二项
                tmpPost.tagName = TAG_MAP[post.nav] || (tmpPost.breadCrumbs[1].name || tmpPost.boardName);
                res.push(tmpPost);
            });
        }
    });

    // 删除小游戏文档
    res = res.filter(function (item) {
        return item.url.indexOf('/docs/game/') === -1;
    });
    const json = JSON.stringify(res);

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
    str = str.replace(/<!--.*?\/-->/g, '') // 注释
        .replace(/<pre.*?\/pre>/g, '') // 去掉代码片段
        .replace(/<[^>]+>/g, ''); // html标签

    return str;
}