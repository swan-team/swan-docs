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
                res[index] = tmpPost;
                index += 1;
            });
        }
    });

    const json = JSON.stringify(res);

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
