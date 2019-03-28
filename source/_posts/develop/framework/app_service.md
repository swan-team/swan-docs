---
title: 逻辑层
header: develop
nav: framework
sidebar: app_service
---

智能小程序的逻辑层使用 JavaScript 编写。
逻辑层将数据进行处理后发送给视图层，同时接受视图层的反馈。
在 JavaScript 的基础上，我们提供了一些框架方法。
1、提供了 [App](#注册程序) 和 [Page](#注册页面) 方法
2、提供了 getApp 和 getCurrentPages 方法，分别用来获取 App 实例和当前页面栈
3、提供了丰富的 API ，如扫一扫，ocrIdCard 等智能小程序能力
4、每个页面有独立的 [作用域](#文件作用域) ，并提供 [模块化](#模块化)
5、框架本身并非运行在浏览器中，所以 JavaScript 在 Web 中的一些能力都无法使用，如 document , window 等
6、开发者写的所有代码，最终会被打包成一份 JavaScript ，并在智能小程序启动时运行，直到智能小程序销毁。

详细内容请参看<a href="https://smartprogram.baidu.com/docs/develop/framework/app-service_register/">注册程序</a>、<a href="https://smartprogram.baidu.com/docs/develop/framework/app-service_page/">注册页面</a>、<a href="https://smartprogram.baidu.com/docs/develop/framework/app-service_getcurrentpages//">页面路由</a>。



