---
title: 逻辑层
header: develop
nav: framework
sidebar: app_service
---

智能小程序的逻辑层使用 JavaScript 编写。
逻辑层将数据进行处理后发送给视图层，同时接受视图层的反馈。
在 JavaScript 的基础上，我们提供了一些框架方法。
1、提供了 [App](https://smartprogram.baidu.com/docs/develop/framework/app_service_register/#App/) 和 [Page](https://smartprogram.baidu.com/docs/develop/framework/app_service_page/#Page/) 方法
2、提供了 [getApp](https://smartprogram.baidu.com/docs/develop/framework/app_service_register/#getApp/) 和 [getCurrentPages](https://smartprogram.baidu.com/docs/develop/framework/app_service_getcurrentpages/#getCurrentPages/) 方法，分别用来获取 App 实例和当前页面栈
3、每个页面有独立的 [文件作用域](https://smartprogram.baidu.com/docs/develop/framework/app_service_getcurrentpages/#%E6%96%87%E4%BB%B6%E4%BD%9C%E7%94%A8%E5%9F%9F/) ，并提供 [模块化](https://smartprogram.baidu.com/docs/develop/framework/app_service_getcurrentpages/#%E6%A8%A1%E5%9D%97%E5%8C%96/)
4、框架本身并非运行在浏览器中，所以 JavaScript 在 Web 中的一些能力都无法使用，如 document , window 等
5、开发者写的所有代码，最终会被打包成一份 JavaScript ，并在智能小程序启动时运行，直到智能小程序销毁。

详细内容请参看<a href="https://smartprogram.baidu.com/docs/develop/framework/app_service_register/">注册程序</a>、<a href="https://smartprogram.baidu.com/docs/develop/framework/app_service_page/">注册页面</a>、<a href="https://smartprogram.baidu.com/docs/develop/framework/app_service_getcurrentpages/">页面路由</a>。



