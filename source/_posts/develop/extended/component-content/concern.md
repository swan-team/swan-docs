---
title: 关注组件
header: develop
nav: extended
sidebar: concern
---



**解释：** 内容/用户关注组件。开发者可在小程序内配置关注组件，实现用户对内容和用户的关注，可嵌套在原生组件内，自定义选择组件的样式和动效。

**属性说明：**

|属性名 | 类型 | 必填 | 默认值 |说明 |
|---|---|---|---|---|
|mode|String|否|text|关注按钮模式，有三种选择。icon: 仅有图标; text: 文字版本; mixture: 图表文字结合|
|background-color|String|否|blue|当且仅当mode为text时有以下4种按钮颜色可选:blue; white; opacity; none。当且仅当mode为icon时有以下2种按钮颜色可选:blue; white;|
|is-concerned|Boolean|是|false|关注的状态|
|concern-text|Array|否|['关注', '已关注']|关注按钮上的文案|
|is-show-toast|Boolean|否|true|关注后的结果反馈是否弹出toast提示|
|toast-text|Array|否|['关注成功', '已取消关注']|toast文案，默认为关注成功、已取消关注|


**代码示例**

安装组件：
```    
npm install @smt-ui/content-component
```

在 页面json 文件中：
```
{
    "navigationBarTitleText": "标题",
    "usingComponents": {
        "c-concern": "@smt-ui/content-component/src/concern"
    }
}
```

在 swan 文件中：

```
<view>关注</view>
<view class="con-demo">
    <c-concern
        is-concerned="{{isConcerned1}}"
        bind:concern="onConcern1">
    </c-concern>

    <c-concern
        background-color="white"
        concern-text="{{concernText}}"
        is-concerned="{{isConcerned2}}"
        bind:concern="onConcern2">
    </c-concern>

    <c-concern
        background-color="opacity"
        concern-text="{{concernText2}}"
        is-concerned="{{isConcerned4}}"
        bind:concern="onConcern4">
    </c-concern>

    <c-concern
        background-color="none"
        concern-text="{{concernText}}"
        is-concerned="{{isConcerned3}}"
        bind:concern="onConcern3">
    </c-concern>
</view>

<view class="con-demo">
    <c-concern
        mode="icon"
        background-color="white"
        is-concerned="{{isConcerned5}}"
        bind:concern="onConcern5">
    </c-concern>

    <c-concern
        mode="icon"
        is-concerned="{{isConcerned6}}"
        bind:concern="onConcern6">
    </c-concern>
</view>

<view class="con-demo">
    <c-concern
        mode="mixture"
        is-concerned="{{isConcerned}}"
        bind:concern="onConcern">
    </c-concern>
</view>
```

在 js 文件中：

```
Page({
    data: {
        isConcerned: true,
        concernText: ['关注', '取消关注'],
        concernText2: ['关注', '已经取消关注']
    },
    onConcern() {
        let isConcerned = this.data.isConcerned;
        this.setData('isConcerned', !isConcerned);
    },
    onConcern1() {
        let isConcerned = this.data.isConcerned1;
        this.setData('isConcerned1', !isConcerned);
    },
    onConcern2() {
        let isConcerned = this.data.isConcerned2;
        this.setData('isConcerned2', !isConcerned);
    },
    onConcern3() {
        let isConcerned = this.data.isConcerned3;
        this.setData('isConcerned3', !isConcerned);
    },
    onConcern4() {
        let isConcerned = this.data.isConcerned4;
        this.setData('isConcerned4', !isConcerned);
    },
    onConcern5() {
        let isConcerned = this.data.isConcerned5;
        this.setData('isConcerned5', !isConcerned);
    },
    onConcern6() {
        let isConcerned = this.data.isConcerned6;
        this.setData('isConcerned6', !isConcerned);
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

