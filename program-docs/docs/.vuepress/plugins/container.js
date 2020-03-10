/**
 * @file container.js
 * @description 文档内容组件
 * @author wulinfei
 */

module.exports = {
    plugins: [
        // 代码块Tab
        ['container', {
            type: 'codeTab',
            defaultTitle: '',
            before: info => `<CodeTab>${info}`,
            after: '</CodeTab>'
        }],
        // 二维码
        ['container', {
            type: 'qrcode',
            defaultTitle: '',
            before: info => `<QRCode ${info}>`,
            after: '</QRCode>'
        }],
        // 提示中的error 用于bug等 红色
        ['container', {
            type: 'errorTip',
            defaultTitle: 'Bug'
        }],
        // 提示中的info 用于tip等 绿色
        ['container', {
            type: 'infoTip',
            defaultTitle: 'Tip'
        }],
        // 打开开发者工具
        ['container', {
            type: 'openIde',
            before: info => `<OpenIde ${info}>`,
            after: '</OpenIde>'
        }],
        // 设计指南
        ['container', {
            type: 'design',
            defaultTitle: '设计指南'
        }]
    ]
};
