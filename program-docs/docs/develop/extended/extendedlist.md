---
title: 扩展功能列表
header: develop
nav: extended
sidebar: extendedlist
---

## smart-ui 组件

|组件名称|解释|
|:--|:--|
|[feed](https://smartprogram.baidu.com/docs/develop/extended/ui_component/smt-feed/)|信息流组件，可配置下拉刷新、列表加载、上滑加载功能，适用于列表信息展示，并可放置在页面的任何部分；组件包含手势下拉以及api调用两种使用方式。|
|[feed-item](https://smartprogram.baidu.com/docs/develop/extended/ui_component/smt-feed-item/)|信息流子项，包括左文右图、纯文本、上文下图、多图及视频模式。|
|[icon](https://smartprogram.baidu.com/docs/develop/extended/ui_component/smt-icon/)|包括天气、系统设置、互动社交、生活服务、书籍影音、政务服务、交通出行7个行业类别的图标。请扫描示例二维码查看图标全集。|
|[refresh](https://smartprogram.baidu.com/docs/develop/extended/ui_component/smt-refresh/)|可用于页面任意区域；使用时需自行添加下拉逻辑改变offset-y参数；smt-feed组件对smt-refresh进行了封装，支持手势交互和api调起刷新。|
|[spin](https://smartprogram.baidu.com/docs/develop/extended/ui_component/smt-spin/)|加载组件，可用于全屏和半屏。用于展示加载状态，点击加载、正在加载、加载完成、重新加载四种状态。|
|[page-status](https://smartprogram.baidu.com/docs/develop/extended/ui_component/smt-page-status/)|页面状态组件，可用于全屏和半屏。用于展示页面加载，页面异常-有操作、页面异常-无操作三种页面状态。|
|[navigation](https://smartprogram.baidu.com/docs/develop/extended/ui_component/smt-navigation/) |顶部导航bar可以自定义。|

## smart-ui 模板

|模板名称|解释|
|:--|:--|
|[图文详情页](https://smartprogram.baidu.com/docs/develop/extended/template/smt-detail-pages/)|图文详情页模板。你可以加载含有图片、文本、引用、标题等形式的内容。同时，图文详情页模板内置了回到顶端按钮与关注/取消关注按钮，支持点击作者跳转与图片查看器。图文详情页通常用来展示文章、帖子等内容的详情。|
|[信息流模板](https://smartprogram.baidu.com/docs/develop/extended/template/smt-feed-page/)|信息流模板：包含下拉刷新、加载、多种信息流子项（纯文本、左文右图、大图、多图及视频模式）。|
|[页面状态模板](https://smartprogram.baidu.com/docs/develop/extended/template/smt-status-page/)|页面状态模板，可通过配置theme主题选择不同的页面状态：loadingStatus加载中，noWifiStatus无网络，noContent暂无内容。|



## 工具类库

|名称|解释|
|:--|:--|
|[promisify](https://smartprogram.baidu.com/docs/develop/extended/lib/smt-promisify/)|smt-promisify 用于让 swan API 支持 Promise 方式调用。小程序中使用三方 npm 包方法，见 npm 使用说明。|
|[md5](https://smartprogram.baidu.com/docs/develop/extended/lib/smt-md5/)|加密算法。在小程序开发中，没有window的概念，导致市面上很多绑定DOM或者BOM的三方库无法使用，smt-md5是官方提供的md5和base64算法库。小程序种使用三方npm包方法，见npm使用说明。|
|[mobx](https://smartprogram.baidu.com/docs/develop/extended/lib/smt-mobx/)|连接器，在小程序开发中，总会遇到多页面需要使用同一数据的情况，从而产生了希望引入mobx、redux等数据状态管理框架的诉求。smt-mobx是小程序使用mobx的连接器，帮助开发者在小程序开发中使用mobx。mobx使用的是4.13.1版本。mobx官网，小程序中使用三方npm包方法，见npm使用说明。|
|[event-emitter](https://smartprogram.baidu.com/docs/develop/extended/lib/smt-observer/)|订阅发布器，在小程序开发中，总会遇到事件监听派发的需求，smt-event-emitter是一个订阅发布器。eventsEmitter可通过new EventsEmitter()创建返回。小程序中使用三方npm包方法，见npm使用说明。|
|[swanx](https://smartprogram.baidu.com/docs/develop/extended/lib/smt-swanx/)|数据状态管理|在小程序开发中，总会遇到多页面需要使用同一数据的情况，swanx是个轻量级数据管理工具，可以帮助开发者解决数据监听，多页面共用数据，子组件轻松获得父组件数据等功能。小程序中使用三方npm包方法，见npm使用说明。|
|[bdparse](https://smartprogram.baidu.com/docs/develop/extended/lib/bdparse/)|富文本解析器，智能小程序富文本解析工具bdParse，改造自wxparse，支持html转换成智能小程序富文本节点。|



## 扩展服务

|服务名称|解释|
|:--|:--|
|[半屏内容发布器带服务版](https://smartprogram.baidu.com/docs/develop/extended/component-content/commentpublish/)|支持开发者自定义配置选择原生框架发布器中的模块，此组件带服务版带后端服务，开发者接入各自平台的后端服务，同时自动接入百度互动消息推送。
|[点赞组件](https://smartprogram.baidu.com/docs/develop/extended/component-content/like/)|支持将用户对文章/评论的点赞行为同步给百度后端，实现对点赞对象(若此对象的文章/评论是在小程序内用评论组件生产)的消息通知。需要将点赞对象的文章/评论内容一起提交。|
|[关注组件](https://smartprogram.baidu.com/docs/develop/extended/component-content/follow/)|内容/用户关注组件。开发者可在小程序内配置关注组件，实现用户对内容和用户的关注，可嵌套在原生组件内，自定义选择组件的样式和动效。|
