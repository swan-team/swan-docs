---
title: onShareAppMessage
header: develop
nav: api
sidebar: share_onShareAppMessage
# webUrl: https://qft12m.smartapps.cn/api/onShareAppMessage/onShareAppMessage
---

**解释**：页面的事件处理函数，用户点击右上角转发。


详情参见<a href="https://smartprogram.baidu.com/docs/develop/framework/app_service_pagefunction/">页面相关事件处理函数</a>。
## 示例
<a href="swanide://fragment/8e19207d8c8601731ca387ec93c582071575144140249" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 代码示例 1

* 在 swan 文件中

```xml
<view class="wrap">
    <view class="card-area">
        <view class="tip-week">发送内容（以下字段可自由适配）</view>
        <view class="list-area">
            <view class="list-item-key-4">标题</view>
            <input class="list-item-value" bindinput="dataInput" data-type="title" value="{{shareData.title}}" type="text" placeholder="请输入key"/>
        </view>
        <view class="list-area">
            <view class="list-item-key-4">内容</view>
            <input class="list-item-value" bindinput="dataInput" data-type="content" value="{{shareData.content}}" type="text" placeholder="请输入key"/>
        </view>
        <view class="list-area">
            <view class="list-item-key-4">跳转页面</view>
            <input class="list-item-value" bindinput="dataInput" data-type="path" value="{{shareData.path}}" type="text" placeholder="请输入key"/>
        </view>
        <button type="primary" open-type="share" hover-stop-propagation="true">点击打开分享面板</button>
        <view class="tip-week">点击右上角菜单或者点击button转发给好友</view>
    </view>
</view>
```
* 在 js 文件中

```js
Page({
    data: {
        shareData: {
            title: '小程序标题',
            content: '世界很复杂，百度更懂你',
            path: '/pages/onShareAppMessage/onShareAppMessage'
        }
    },

    onShareAppMessage() {
        return this.data.shareData;
    },

    dataInput(e) {
        let type = e.currentTarget.dataset.type;
        let dataInput = e.detail.value;
        switch (type) {
            case 'title':
                let title = 'shareData.title';
                this.setData({
                    [title]: dataInput
                });
                break;
            case 'content':
                let content = 'shareData.content';
                this.setData({
                    [content]: dataInput
                });
                break;
            case 'path':
                let path = 'shareData.path';
                this.setData({
                    [path]: dataInput
                });
                break;
        }
    }
});
```

### 代码示例 2 - 小程序内所有页面都使用一个分享信息，并携带参数

* 在 app.js 文件中

```js
!function () {
    var PageTmp = Page;
    Page = function (pageConfig) {
        pageConfig = Object.assign({
            onShareAppMessage: function () {
                // 与getCurrentPages()连用，回流到分享页面
                let path = getCurrentPages()[1].uri;
                return {
                    title: '智能小程序官方示例',
                    content: '百度智能小程序官方示例，展示已支持的接口能力及组件',
                    path: path + '?key=value'
                };
            }
        }, pageConfig);
        PageTmp(pageConfig);
    };
}();

```
