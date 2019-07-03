---
title: JS 逻辑交互
header: develop
nav: tutorial
sidebar: js
---


在一个应用程序中还需要处理大量的用户交互，例如：响应用户的输入、处理用户的点击事件等。在智能小程序里，我们可以通过编写 JS 脚本文件来处理用户的操作。以下为一个点击的例子：

点击`button`按钮的时候，我们希望界面上显示`"Hello World"`，那么我们需要的简单步骤为：

- 在模板中的`button`上声明一个属性`bindtap`，它的属性值是一个事件名`onTap`。

```xml
<view>{{ msg }}</view>
<button bindtap="onTap">点我</button>
```

- 在 JS 文件里边声明一个`onTap`方法，用来响应这次点击操作。

```js
Page({
  onTap() {
    this.setData({ msg: "Hello World" });
  }
});
```

响应用户的操作就是这么简单，更详细的事件可以参考文档 [SWAN - 事件](==TODO==) 。

此外你还可以在 JS 中调用小程序提供的丰富的 API，利用这些 API 可以很方便的调起宿主（例如百度App）提供的能力，例如获取用户信息、本地存储、百度支付等。在前面的生成的初始化工程中的`pages/index/index`页面，该页面的逻辑层就调用了 `swan.getUserInfo`获取百度用户的头像和昵称，最后通过 setData 把获取到的信息显示到界面上。
更多 API 可以参考文档 [小程序的API](==TODO==) 。

通过这个章节，我们了解了小程序涉及到的文件类型以及对应的模块作用，在下一讲中，我们把这一讲所涉及到的文件通过 “智能小程序的框架” 让整体连贯起来。