/**
 * @file 常量
 * @author wulinfei <wulinfei@baidu.com>
 */

// 文档boardName映射关系
const BOARD_MAP = {
    'data': '数据',
    'design': '设计',
    'develop': '开发',
    'introduction': '介绍',
    'operations': '运营'
};

// 文档tagName
const TAG_MAP = {
    // 介绍
    'book': '',
    // 设计
    'component': '常用组件',
    'foundation': '设计规范',
    'overview': '概览',
    'principle': '设计原则',
    'resource': '设计资源',
    'story': '设计故事',
    // 开发
    'api': 'api',
    'appendix': '附录',
    'cloud': '云开发',
    'component': '组件',
    'devtools': '工具',
    'extended': '扩展',
    'faq': '常见问题',
    'framework': '框架',
    'fuctionlist': '介绍',
    'function': '功能开发',
    'serverapi': '服务端API',
    'simple': '',
    'swan': '基础库版本信息',
    'third': '第三方接入',
    'tutorial': '快速入门'
};

module.exports = {
    BOARD_MAP,
    TAG_MAP
};