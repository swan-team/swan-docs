---
title: icon 图标
header: develop
nav: component
sidebar: base_icon
---

**解释**： 图标

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/icon.png"  class="demo-qrcode-image" />

**属性说明**:

|属性名|类型  |默认值  | 必填 |说明|
|---- | ---- | ---- | ---- |---- |
|type |String  | | 是 |生效的值：success, info, warn, waiting, success_no_circle, clear, search, personal, setting, top, close, cancel, download, checkboxSelected, radioSelected, radioUnselect, loadingGrey|
|size | Number  |23 | 否 |icon 的大小，单位是 px|
|color | Color |   | 否 |icon 的颜色，同 css 的 color|

**type 有效值**:

| 值 | 说明 |
| ---- | ---- |
| success | 成功图标 |
| info | 消息图标 |
| warn | 警告图标 |
| waiting | 等待图标 |
| success_no_circle | 无圆形边框成功图标 |
| clear | 删除图标 |
| search | 搜索图标 |
| personal | 人物图标 |
| setting | 设置图标 |
| top | 回到顶部图标 |
| close | 关闭图标 |
| cancel | 取消图标 |
| download | 下载图标 |
| checkboxSelected | 复选框选中图标 |
| radioSelected | 单选框选中图标 |
| radioUnselect | 单选框未选中图标 |
| loadingGrey | loading图标 |

**示例**：
<a href="swanide://fragment/e2162b6a873dffee7317e9f7ec2375271565503511850" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <view class="title">默认样式</view>
    <view class="group">
        <view>
            <icon s-for="type in types.smallDefault" type="{{type}}" class="small-default" />
        </view>
    </view>

    <view class="title">尺寸选择</view>
    <view class="group choose">
        <icon s-for="size in sizes" type="success" size="{{size}}" class="icon-size" />
    </view>

    <view class="title">颜色选择</view>
    <view class="group choose">
        <icon s-for="color in colors" type="success" size="40" color="{{color}}" class="icon-color" />
    </view>
</view>
```

* 在 js 文件中

```js
Page({
    data: {
        types: {
            smallDefault: ['success', 'info', 'warn', 'waiting',
            'success_no_circle', 'clear', 'search', 'personal',
            'setting', 'top', 'close', 'cancel', 'download',
            'checkboxSelected', 'radioSelected', 'radioUnselect']
        },
        colors: [
            '#333', '#666', '#999', '#3C76FF', '#F7534F'
        ],
        sizes: [
            40, 35, 30, 25
        ]
    }
});
```
