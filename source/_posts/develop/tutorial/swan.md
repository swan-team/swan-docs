---
title: SWAN 模板
header: develop
nav: tutorial
sidebar: swan
---


在web编程里面，采用的一般组合是: HTML + CSS + JS，其中`HTML`是用来描述当前页面的结构，`CSS`用来描述页面的样式，`JS`用来处理页面和用户的交互。

同理，在小程序中也有同样的角色，其中`SWAN`类比于`HTML`的角色。在初始化的工程中，我们打开`pages/index/index.swan`，将会看到以下的内容:

```xml
<!-- index.swan -->
<view class="container">
    <view class="logo">
    </view>
    <view class="userinfo">
        <button class="userinfo-login-btn" s-if="{{!hasUserInfo && canIUse}}" open-type="getUserInfo" bindgetuserinfo="getUserInfo"> 获取头像昵称 </button>
        <view s-else class="userinfo-message">
        <image class="userinfo-avatar" src="{{userInfo.avatarUrl}}"></image>
        <text class="userinfo-nickname">{{userInfo.nickName}}</text>
        </view>
    </view>
</view>
```

和`HTML`非常相似，`SWAN`由标签、属性等构成。但是也有很多不一样的地方，我们来仔细介绍一下：

- 标签名字区别

在web中写`HTML`的时候，经常会用到的标签是`div`、`p`、`span`，开发者在写一个页面的时候可以根据这些基础的标签组合出不一样的组件，例如地图、轮播图等。考虑到开发者都习惯于使用多个单标签来组合成一个个功能模块，智能小程序官方则帮开发者做了这一系列的组件封装，例如`view`、`swiper`。

从以上例子可以看出，智能小程序的`SWAN`用的标签是`view`、 `button`、`swiper` 等，这些标签就是小程序给开发者包装好的基本能力，除此之外，我们还提供了地图、视频、音频等组件能力。

- 新增一些属性指令，例如`s-if`

在web开发中，我们大多数情况下会通过`JS`直接操作`DOM` ，用以处理用户的交互并更新视图。例如，用户点击某个按钮的时候，JS 会记录一些状态到`JS`变量里边，同时通过 DOM API 操控 DOM 的属性或者行为，进而引起界面一些变化。当项目越来越大的时候，我们的代码会充斥着非常多的界面交互逻辑和程序的各种状态变量，这显然不是一个很好的开发模式，为了解决此类问题，`MVVM`的开发模式（例如 React, Vue）就应运而生了，该类框架提倡把视图和逻辑分离。逻辑层进行逻辑处理，将处理的结果反馈给视图层，视图层进而更新视图。

智能小程序SWAN框架也是用到了这个思路，例如我们想使用变量存储一个字符串，需要将其显示到视图上时，需要进行的步骤如下：

1.写一个SWAN模板，视图渲染

```xml
<text>{{msg}}</text>
```

2.在逻辑层将数据进行设置

```js
this.setData({ msg: "Hello World" });
```

然后你就可以在视图上，看到`Hello World`字样了。

通过`SWAN`的语法把一个变量绑定到界面上，我们称为数据绑定。仅仅通过数据绑定还不够完整的描述状态和界面的关系，还需要`if/else`、`for`等控制能力，在小程序里边，这些控制能力都用`s-`开头的属性来表达，我们称之为一些指令。

更详细的文档可以参考 [SWAN](==TODO==)




