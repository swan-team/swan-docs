/**
 * @file Generate search JSON
 * @author Zhang Wenli <zhangwenli01@baidu.com>
 */

const fs = require('fs');

/* global hexo */
hexo.extend.generator.register('search', function (locals) {
    const config = this.config;
    const searchConfig = config.search;
    let searchfield = searchConfig.field;

    let posts;
    let pages;
    let navs = locals.data.nav;
    // 递归生成搜索结果面包屑
    let resBreadCrumbs = [];

    // 将侧边栏数据加入搜索结果
    navs.forEach(function (nav) {
        nav.nav.forEach(function (nav) {
            generateNavItem(nav);
        });
    });

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

    const res = [];
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
                    tmpPost.content = includeMarkdown(post._content);
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

    function generateNavItem(navItem) {
        if (navItem.sidebar) {
            generateNav(navItem.sidebar, [navItem.text + ',' + navItem.link], 0);
        }
        else {
            navItem.breadCrumbs = [navItem.text + ',' + navItem.link];
            resBreadCrumbs.push(navItem);
        }
    }
    function generateNav(nav, breadCrumbs, index) {
        index++;
        nav.forEach(function (na) {
            if (na.sidebar) {
                const temp = breadCrumbs.slice(0, index);
                temp.push(na.text + ',' + na.link);
                generateNav(na.sidebar, temp, index);
            }
            else {
                na.breadCrumbs = breadCrumbs.slice(0);
                resBreadCrumbs.push(na);
            }
        });
    }
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
    const json = JSON.stringify([...resBreadCrumbs, ...res]);

    return {
        path: searchConfig.path,
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
