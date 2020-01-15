---
title: 关注组件
header: develop
nav: component-content
sidebar: follow
---



**解释：** 内容/用户关注组件。开发者可在小程序内配置关注组件，实现用户对内容和用户的关注，可嵌套在原生组件内，自定义选择组件的样式和动效。

**属性说明：**

|属性名 | 类型 | 必填 | 默认值 |说明 |
|---|---|---|---|---|
|mode|String|否|text|关注按钮模式，有三种选择。icon: 仅有图标; text: 文字版本; mixture: 图标文字结合|
|background-color|String|否|blue|当且仅当mode为text时有以下4种按钮颜色可选:blue; white; opacity; none。当且仅当mode为icon时有以下2种按钮颜色可选:blue; white;|
|is-followed|Boolean|是|false|关注的状态|
|follow-text|Array|否|['关注', '已关注']|关注按钮上的文案|
|is-show-toast|Boolean|否|true|关注后的结果反馈是否弹出toast提示|
|toast-text|Array|否|['关注成功', '已取消关注']|toast文案，默认为关注成功、已取消关注|
|bind:follow|EventHandle|||点击按钮事件|

## 示例
<a href="swanide://fragment/6a2a2a4dc684732c95ca871c88acb7f61579074426749" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验
<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/subPackages_extensionsPackage_follow_follow.png"  class="demo-qrcode-image" />

### 代码示例

安装组件：
```    
npm install @smt-ui/content-component
```

在 页面json 文件中：
```
{
    "navigationBarTitleText": "标题",
    "usingComponents": {
        "c-follow": "@smt-ui/content-component/src/follow"
    }
}
```

在 swan 文件中：

```
<view>关注</view>
<view class="con-demo">
    <c-follow
        is-followed="{{isFollowed1}}"
        bind:follow="onFollow1">
    </c-follow>

    <c-follow
        background-color="white"
        follow-text="{{followText}}"
        is-followed="{{isFollowed2}}"
        bind:follow="onFollow2">
    </c-follow>

    <c-follow
        background-color="opacity"
        follow-text="{{followText2}}"
        is-followed="{{isFollowed4}}"
        bind:follow="onFollow4">
    </c-follow>

    <c-follow
        background-color="none"
        follow-text="{{followText}}"
        is-followed="{{isFollowed3}}"
        bind:follow="onFollow3">
    </c-follow>
</view>

<view class="con-demo">
    <c-follow
        mode="icon"
        background-color="white"
        is-followed="{{isFollowed5}}"
        bind:follow="onFollow5">
    </c-follow>

    <c-follow
        mode="icon"
        is-followed="{{isFollowed6}}"
        bind:follow="onFollow6">
    </c-follow>
</view>

<view class="con-demo">
    <c-follow
        mode="mixture"
        is-followed="{{isFollowed}}"
        bind:follow="onFollow">
    </c-follow>
</view>
```

在 js 文件中：

```
Page({
    data: {
        isFollowed: true,
        followText: ['关注', '取消关注'],
        followText2: ['关注', '已经取消关注']
    },
    onFollow() {
        let isFollowed = this.data.isFollowed;
        this.setData('isFollowed', !isFollowed);
    },
    onFollow1() {
        let isFollowed = this.data.isFollowed1;
        this.setData('isFollowed1', !isFollowed);
    },
    onFollow2() {
        let isFollowed = this.data.isFollowed2;
        this.setData('isFollowed2', !isFollowed);
    },
    onFollow3() {
        let isFollowed = this.data.isFollowed3;
        this.setData('isFollowed3', !isFollowed);
    },
    onFollow4() {
        let isFollowed = this.data.isFollowed4;
        this.setData('isFollowed4', !isFollowed);
    },
    onFollow5() {
        let isFollowed = this.data.isFollowed5;
        this.setData('isFollowed5', !isFollowed);
    },
    onFollow6() {
        let isFollowed = this.data.isFollowed6;
        this.setData('isFollowed6', !isFollowed);
    }
});
```


在 css 文件中：
```
.con-demo {
    display: flex;
    height: 80px;
    align-items: center;
    justify-content: space-around;
    background: #666;
    height: 50px;
}
```

