---
title: 组件列表
header: develop
nav: component
sidebar: component
---


> 小程序中禁止使用script/link/iframe标签。


|组件名称 | 解释 |
|---- | ---- |
|<a href="/develop/component/view_view/">view</a>  | 视图容器，相当于 html 中的 div ，可将页面分割为独立的、不同的部分。如果需要使用滚动视图，请使用 [scroll-view](/develop/component/view_scroll-view/)。 |
|<a href="/develop/component/view_scroll-view/">scroll-view</a>| 可滚动视图区域，可实现横向滚动和竖向滚动。使用竖向滚动时，需要给定一个固定高度，可以通过css来设置height。 |
|<a href="/develop/component/view_swiper/">swiper</a> |滑块视图容器。内部只允许使用&lt;swiper-item&gt;组件描述滑块内容，否则会导致未定义的行为。 |
|<a href="/develop/component/view_swiper-item/">swiper-item</a> |滑块视图容器子项，仅可放置在&lt;swiper&gt;组件中，宽高自动设置为100%。 |
|<a href="/develop/component/view_movable-view/">movable-view</a>|可移动的视图容器，在页面中可以拖拽滑动。movable-view必须在[movable-area](https://smartprogram.baidu.com/docs/develop/component/view_movable-area/)组件中，并且必须是直接子节点，否则不能移动。|
|<a href="/develop/component/view_movable-area/">movable-area</a>|可移动视图区域，movable-view 的可移动区域|
|<a href="/develop/component/view_cover-view/">cover-view</a>| 文本视图，覆盖在原生组件之上，只支持嵌套cover-view、cover-image组件。|
|<a href="/develop/component/view_cover-image/">cover-image</a>|图片视图，覆盖在原生组件之上可覆盖的原生组件同 cover-view，支持嵌套在 cover-view 里。|
|<a href="/develop/component/base_text/">text</a>|文本，放置文本的元素。|
|<a href="/develop/component/base_icon/">icon</a>|图标，放置图标的元素。|
|<a href="/develop/component/base_progress/">progress</a>|进度条|
|<a href="/develop/component/base_rich-text/">rich-text</a>|富文本，nodes 属性推荐使用 Array 类型，由于组件会将 String 类型转换为 Array 类型，因而性能会有所下降。|
|<a href="/develop/component/base_animation-view-Lottie/">animation-view</a>|Lottie动画组件，客户端创建的[原生组件](https://smartprogram.baidu.com/docs/develop/component/native/)，使用时请注意相关限制。|
|<a href="/develop/component/base_animation-video/">animation-video</a>|为智能小程序提供了将特定视频资源渲染为透明背景动效的能力，可以帮助开发者低成本实现更为沉浸，丰富的动画效果。|
|<a href="/develop/component/formlist_button/">button</a>|按钮|
|<a href="/develop/component/formlist_form/">form</a>|表单，将 form 组件内的用户输入的`<switch/> <input/> <checkbox/> <slider/> <radio/> <picker/>`提交。当点击`<form/>`表单中 form-type 为 submit 的 `<button/>`组件时，会将表单组件中的 value 值进行提交，需要在表单组件中加上 name 来作为 key。|
|<a href="/develop/component/formlist_label/">label</a>|表单组件标签，为鼠标用户改进表单的可用性。使用 for 属性找到对应的 id（必须写for），当点击时，就会触发对应的控件。|
|<a href="/develop/component/formlist_input/">input</a>|输入框，v3.105.0 开始支持[同层渲染](https://smartprogram.baidu.com/docs/develop/component/native/)。|
|<a href="/develop/component/formlist_textarea/">textarea</a>| 多行输入框，客户端创建的[原生组件](https://smartprogram.baidu.com/docs/develop/component/native/)，不支持嵌套在其它组件中使用。|
|<a href="/develop/component/formlist_checkbox/">checkbox</a>|多选项目|
|<a href="/develop/component/formlist_checkbox-group/">checkbox-group</a>|多选项目组，内部由多个 checkbox 组成。|
|<a href="/develop/component/formlist_radio/">radio</a>|单选项目|
|<a href="/develop/component/formlist_radio-group/">radio-group</a>|单选项目组，内部由多个radio组成。|
|<a href="/develop/component/formlist_switch/">switch</a>|开关选择器|
|<a href="/develop/component/formlist_slider/">slider</a>| 滑动选择器|
|<a href="/develop/component/formlist_picker-view/">picker-view</a>|可嵌页面的滚动选择器|
|<a href="/develop/component/formlist_picker-view-column/">picker-view-column</a>|可嵌页面的滚动选择器子项，仅可放置于<picker-view />中，其孩子节点的高度会自动设置成与 picker-view 的选中框的高度一致。|
|<a href="/develop/component/formlist_picker/">picker</a>|底部弹起的滚动选择器|
|<a href="/develop/component/nav/">navigator</a>|页面导航，控制小程序的跳转，既可在当前小程序内部进行跳转，也可跳转至其他小程序。|
|<a href="/develop/component/tabs/">tabs</a>|标签栏，用于让用户在不同的视图中进行切换。|
|<a href="/develop/component/tab-item/">tab-item</a>|标签栏子项，配合 tabs 一起使用，展示标签栏栏内单个 tab 内容|
|<a href="/develop/component/media_image/">image</a>|图片，image 组件默认宽度 300px、高度 225px。|
|<a href="/develop/component/media_audio/">audio</a>|音频|
|<a href="/develop/component/media_video/">video</a>|视频，v3.70.0 开始支持[同层渲染](https://smartprogram.baidu.com/docs/develop/component/native/)。|
|<a href="/develop/component/media_camera/">camera</a>|相机，使用该组件需通过[获取用户权限设置](https://smartprogram.baidu.com/docs/develop/api/open/authorize_set/)申请授权后方可对用户发起授权申请，可在[需授权接口列表](https://smartprogram.baidu.com/docs/develop/api/open/authorize_list/)中查看相关错误码信息。|
|<a href="/develop/component/media_ar-camera/">ar-camera</a>|AR 相机，在 [DuMixAR 内容开放平台](https://dumix.baidu.com/content#/)提交并上线AR项目后（选择“百度App-相机”渠道）获取到AR Key、AR Type，可配置展现。|
|<a href="/develop/component/media_live-player/">live-player</a>|实时视频播放器，客户端创建的[原生组件](https://smartprogram.baidu.com/docs/develop/component/native/)，使用时请注意相关限制。|
|<a href="/develop/component/map/">map</a>|地图，客户端创建的[原生组件](https://smartprogram.baidu.com/docs/develop/component/native/)，使用时请注意相关限制。|
|<a href="/develop/component/canvas/">canvas</a>|画布，一个矩形区域，开发者可以在页面上绘制图形。canvas 拥有多种绘制路径、矩形、图形、字符以及添加图像的方法。|
|<a href="/develop/component/open/">open-data</a>|开放数据，用于展示百度 App 开放的数据。|
|<a href="/develop/component/open_web-view/">web-view</a>|网页容器，web-view 组件是一个可以用来承载网页的容器，会自动铺满整个智能小程序页面。|
|<a href="/develop/component/ad/">ad</a>|广告组件，按照<a href="https://smartprogram.baidu.com/docs/introduction/adopen/">流量主开通指引</a>中的操作获取广告组件代码。|