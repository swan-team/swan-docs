/**
 * @file 配置文件
 * @author wulinfei
 */

const router = require('./plugins/router.js');
const navLoader = require('./utils/nav-loader');
const preWrapper = require('./plugins/code-pre-wapper');
const search = require('./plugins/gen-search');
const path = require('path');

module.exports = {
    base: '/docs/',
    title: '百度智能小程序文档',
    head: [
        ['link', {rel: 'shortcut icon', href: 'https://www.baidu.com/favicon.ico', type: 'image/x-icon'}],
        ['link', {rel: 'dns-prefetch', href: '//smartprogram.baidu.com'}]
    ],
    port: 4000,
    dest: 'output/miniappdocs-program',
    cache: false,
    shouldPrefetch: () => false,
    extraWatchFiles: [
        '../nav/nav.yml'
    ],
    themeConfig: {
        navData: navLoader.getNavData(),
        nav: {
            navOther: [
                {text: '服务市场', link: 'https://smartprogram.baidu.com/developer/servicemarket.html'}
            ],
            smartDocs: 'https://smartprogram.baidu.com/docs/',
            smartProgram: 'https://smartprogram.baidu.com/developer/index.html'
        },
        headerNavOther: [
            {text: '社区', link: 'https://smartprogram.baidu.com/forum/'}
        ]
    },
    plugins: [
        router,
        search,
        ['vuepress-plugin-smooth-scroll', false],
        ['vuepress-plugin-container', {
            type: 'codeTab',
            defaultTitle: '',
            before: info => `<CodeTab>${info}`,
            after: '</CodeTab>'
        }],
        ['vuepress-plugin-container', {
            type: 'qrcode',
            defaultTitle: '',
            before: info => `<QRCode ${info}>`,
            after: '</QRCode>'
        }]
    ],
    patterns: [],
    extendMarkdown: md => {
        // Convert '\n' in paragraphs into <br>
        md.set({breaks: true});
        md.use(require('./plugins/md-loader'), md);
        md.use(require('markdown-it-task-checkbox'), {
            disabled: false,
            ulClass: 'task-list',
            liClass: 'task-list-item'
        });

    },
    chainMarkdown(config) {
        config.plugin('pre-wrapper').use(preWrapper);
    },
    devServer: {
        disableHostCheck: true,
        proxy: {
            '/forum/api/*': {
                target: 'http://cp01-lizhiguang.epc.baidu.com:8014',
                ws: true,
                changeOrigin: true
            }
        }
    }
};



