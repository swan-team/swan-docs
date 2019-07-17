---
title: 逻辑层
header: develop
nav: framework
sidebar: app_service
---

- 智能小程序的逻辑层使用 JavaScript 编写；
- 逻辑层将数据进行处理后发送给视图层，同时接受视图层的反馈。

在 JavaScript 的基础上，我们提供了一些框架方法，用以辅助开发者更容易的开发小程序。

**例如以下方法和功能说明:**

- 提供了 [App](https://smartprogram.baidu.com/docs/develop/framework/app_service_register/#App/) 和 [Page](https://smartprogram.baidu.com/docs/develop/framework/app_service_page/#Page/) 方法，分别用于注册小程序应用和每个页面；
- 提供了 [getApp](https://smartprogram.baidu.com/docs/develop/framework/app_service_register/#getApp/) 和 [getCurrentPages](https://smartprogram.baidu.com/docs/develop/framework/app_service_getcurrentpages/#getCurrentPages/) 方法，分别用来获取 App 实例和当前页面栈；
- 每个页面有独立的 [文件作用域](https://smartprogram.baidu.com/docs/develop/framework/app_service_getcurrentpages/#%E6%96%87%E4%BB%B6%E4%BD%9C%E7%94%A8%E5%9F%9F/) ，并提供 [模块化](https://smartprogram.baidu.com/docs/develop/framework/app_service_getcurrentpages/#%E6%A8%A1%E5%9D%97%E5%8C%96/)，使得开发者更容易进行代码封装并复用；
- 框架本身并非运行在浏览器中，所以 JavaScript 在 Web 中的一些能力都无法使用，如 document , window 等，这会使得小程序应用更接近原生；
- 开发者所编写的代码，最终会被编译打包成一份 JavaScript 文件，并在智能小程序启动时进行加载并运行，直到智能小程序销毁。

详细内容请参看<a href="https://smartprogram.baidu.com/docs/develop/framework/app_service_register/">小程序 App</a>、<a href="https://smartprogram.baidu.com/docs/develop/framework/app_service_page/">注册页面</a>、<a href="https://smartprogram.baidu.com/docs/develop/framework/app_service_getcurrentpages/">页面路由</a>。



