---
title: 欢迎开发智能小程序
header: develop
nav: fuctionlist
sidebar: list
---
 

欢迎使用百度智能小程序，本文档为您提供[快速入门](https://smartprogram.baidu.com/docs/develop/tutorial/demo/)、[框架](https://smartprogram.baidu.com/docs/develop/framework/app_service/)、[组件](http://smartprogram.baidu.com/docs/develop/component/componetlist/)、[API](https://smartprogram.baidu.com/docs/develop/api/apilist/)、[服务端 API](https://smartprogram.baidu.com/docs/develop/serverapi/open_feed/) 、[工具](https://smartprogram.baidu.com/docs/develop/devtools/show_sur/)、[第三方平台](https://smartprogram.baidu.com/docs/third/pro/)等详细的文档的介绍。
如果您在使用过程中有任何疑问，欢迎及时[反馈](https://zhiqiu.baidu.com/imcswebchat/chat/html/message.html?id=797&token=8cvemmp5o16moo61t5t0h06hagggkffl&domainID=smartapp)。

> 对于有其它小程序开发经验的开发者，我们还提供了其它[开发解决方案](https://smartprogram.baidu.com/docs/develop/tutorial/move/)。

### 具体功能开发介绍

* [web 化开发](https://smartprogram.baidu.com/docs/develop/function/webintroduction/)
* [支付功能开发](https://smartprogram.baidu.com/docs/develop/function/invoke_process/)
* [数据缓存](https://smartprogram.baidu.com/docs/develop/api/storage_save/)
* [导航](https://smartprogram.baidu.com/docs/develop/function/navigation/)
* [打开小程序](https://smartprogram.baidu.com/docs/develop/function/opensmartprogram/)

## 架构概述

智能小程序基本开发思路类似于前端开发，并增强调用大量端能力，性能体验优于普通 Web 。上层架构基于 JS 开发，可以辅助开发者进行良好的开发。

智能小程序为开发者提供了 MVVM 的开发方式。JS 状态的变更引起视图的变化，视图的变更也可以反馈到逻辑层的状态中，开发者开发更加方便。

## 目录结构

工程的工作目录中包含以下文件：

```
|____app.css
|____app.json
|____project.swan.json
|____pages
|       |____detail
|       |        |____detail.css
|       |        |____detail.swan
|       |        |____detail.js
|       |____index
|       |        |____index.js
|       |        |____index.swan
|       |        |____index.css
|____app.js
```

我们看到以下几类的文件：
1、 .json 为后缀的 JSON 配置文件，这个文件配置了 SWAN 智能小程序所有页面的路径和界面展现样式等；
2、 .swan 结尾的 SWAN 模板文件，这个文件是用来描述当前这个页面的文件结构，类似于网页中的 HTML 文件；
3、 .css 结尾的 CSS 样式文件，描述页面样式；
4、 .js 结尾的 JS 文件，处理这个页面和用户的交互。




