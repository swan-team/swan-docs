/**
 * @file 生成search.json，用于搜索
 * @author wulinfei
 */

const md = require('@vuepress/markdown');
const fs = require('fs-extra');
const path = require('path');
const markdown = md();
const {
    BOARD_MAP,
    TAG_MAP,
    BOARD_URL_MAP,
    META_KEYWORDS
} = require('../utils/constant');
// 面包屑数据
const {
    breadCrumbsData,
    navList
} = require('../utils/nav-loader');
// 写入的数据
const programSearchData = [];
// 输出路径
let destDir = '';

// 正则匹配
const containerRex = /:::.*?\n/g;
const commentRex = /<!--.*?-->/g;
const codeRex = /<pre.*?\/pre>/g;
const tagRex = /<[^>]+>/g;
const enterRex = /\n/g;
const titleRex = /#/g;

/**
 * 格式化md内容 取纯文本
 *
 * @param {string} content 页面的原始内容
 * @return {string} 页面纯文本内容
 */
const replaceRex = content => {
    return content.replace(containerRex, '') // 去掉:::
    .replace(enterRex, ' ') // 去掉换行，要在去掉代码片段之前
    .replace(commentRex, '') // 去掉注释
    .replace(codeRex, '') // 去掉代码片段
    .replace(tagRex, '') // html标签
    .replace(titleRex, ''); // title前的#
};


module.exports = {
    extendPageData({frontmatter, relativePath, _strippedContent, path, _context}) {

        // fork from vuepress
        const loader = Object.create(this);
        const pageContent = _strippedContent || '';
        const {html} = markdown.render(pageContent, {loader, frontmatter, relativePath}) || '';
        const link = `/docs${path}`;

        destDir = _context.outDir;

        frontmatter.metaTitle = `${frontmatter.title} - ${_context.siteConfig.title}`;

        // 获取纯文本内容
        const content = replaceRex(html);

        // 设置页面的meta
        frontmatter.meta = [{
            name: 'description',
            content: content
        }, {
            name: 'keywords',
            content: `${META_KEYWORDS},${frontmatter.title}`
        }, {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0'
        }];
        
        // 默认的面包屑数据
        const defaultBreadCrumbs = [
            {
                name: BOARD_MAP[frontmatter.header],
                link: BOARD_URL_MAP[frontmatter.header]
            },
            {
                name: frontmatter.title,
                link
            }
        ];

        const pageBreadCrumbs = breadCrumbsData.filter(item => {
            return item.link === path;
        })[0] || {breadCrumbs: defaultBreadCrumbs};

        // 板块名
        const boardName = BOARD_MAP[frontmatter.header] || '';
        // 标签名
        const tagName = TAG_MAP[frontmatter.nav]
                        || (pageBreadCrumbs.breadCrumbs && pageBreadCrumbs.breadCrumbs[1] ? pageBreadCrumbs.breadCrumbs[1].name : boardName);
        const data = {
            title: frontmatter.title,
            url: link,
            content,
            boardName,
            tagName,
            breadCrumbs: pageBreadCrumbs.breadCrumbs
        };

        // 排除 不在导航栏的文档
        if (navList[link]) {
            programSearchData.push(data);
        }
    },

    // 生成文件时候调用，生成搜索json，只对build生效
    async generated() {
        // 写入文件
        const filePath = path.join(destDir, 'programSearch.json');
        fs.writeJSON(filePath, programSearchData, err => {
            if (err) {
                throw Error('生成搜索json失败!!!', err);
            }
        });
    }
};
