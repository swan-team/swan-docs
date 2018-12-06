---
title: 历史更新日志
header: develop
nav: tutorial
sidebar: swanchangelog
---

## 2.15版本日志更新

|版本号|更新日期|更新内容|
|----|----|----|
|2.15.7|2018.12.03|**BugFix**<p>**·**修复 input 组件在失焦后，开发者设置 focus 属性不生效的问题 ；<p>**·**修复ios下scroll-view组件的弹性运动和webview的scroll事件冲突而导致组件无法滑动的问题 。|
|2.15.5|2018.11.30|**Breaking Change** <p>button type为primary和warn去掉边框。 <p>**BugFix**<p>修复slider backgroundColor设置transparent无效的问题。|

## 2.10版本日志更新

|版本号|更新日期|更新内容|
|----|----|----|
|2.10.15|2018.12.03|**BugFix**<p>**·**修复 input 组件在失焦后，开发者设置 focus 属性不生效的问题 ；<p>**·**修复ios下scroll-view组件的弹性运动和webview的scroll事件冲突而导致组件无法滑动的问题 。|
|2.10.14|2018.11.30|**Breaking Change** <p>button type为primary和warn去掉边框。 <p>**BugFix**<p> 修复slider backgroundColor设置transparent无效的问题。|
|2.10.11|2018.11.27|**New**<p>新增 API：getEnvInfoSync|
|2.10.9|2018.11.22|**New**<p>**·** image 加载增加 catch；<p>**·** animation step方法支持链式调用；<p>**·** video 组件 ios h5占位图增加poster。<p>**Breaking Change** <p>**·** extension 路径优化，通用端能力注册；<p>**·** button组件type为primary和warn时去掉黑框描边；<p>**·** video组件使用s-if显示视频时发送两次open优化为发一次；<p>**·** video组件android去掉针对10.8.5低版本patch。<p>**BugFix**<p>**·** 修复appOnshow和pageOnload乱序bug；<p>**·** 修复onPageNotFound；<p>**·** video组件android上去掉所有手势后绑定bindpaly等非touch事件滑动视频页面不能滑动的bug。|
|2.10.7|2018.11.20|**New**<p>**·**自定义组件新增内置方法groupSetData；<p>**·**app onShow新增展现来源entryType及调起协议appURL。<p>**Breaking Change** <p>**·**分享自定义白名单更新；<p>**·** swiper 组件前后边距支持rpx ；<p>**·** 登录、支付相关API时长打点。<p>**BugFix**<p>**·** 自定义组件setData通知页面更新优化；<p>**·** 修复分享onShareAppMessage(e)中from参数嵌套了两层的错误；<p>**·**修复onPageNotFound兼容性问题；<p>**·** 修复setStorageSync 存入值为0时 取出结果不符的问题；<p>**·** scroll-view兼容安卓下拉刷新冲突。|

## 2.5版本日志更新

|版本号|更新日期|更新内容|
|----|----|----|
|2.5.24|2018.12.03|**BugFix**<p>**·**修复 input 组件在失焦后，开发者设置 focus 属性不生效的问题 ；<p>**·**修复ios下scroll-view组件的弹性运动和webview的scroll事件冲突而导致组件无法滑动的问题 。|
|2.5.23|2018.11.30|**Breaking Change** <p>button type为primary和warn去掉边框。 <p>**BugFix**<p> 修复slider backgroundColor设置transparent无效的问题。|
|2.5.20|2018.11.27|**New**<p>新增 API：getEnvInfoSync|
|2.5.17|2018.11.22|**New**<p>**·** image加载增加catch；<p>**·** animation step方法支持链式调用。<p>**Breaking Change** <p>**·** button组件type为primary和warn时去掉黑框描边；<p>**·** video组件ios h5占位图增加poster；<p>**·** android去掉针对10.8.5低版本patch。<p>**BugFix**<p>**·** 修复appOnshow和pageOnload乱序bug；<p>**·**  android上去掉所有手势后绑定bindpaly等非touch事件滑动视频页面不能滑动的bug。|
|2.5.15|2018.11.20|**New**<p>自定义组件新增内置方法groupSetData。<p>**Breaking Change** <p>**·**分享自定义白名单更新；<p>**·** swiper 组件前后边距支持rpx ；<p>**·** 登录、支付相关API时长打点。<p>**BugFix**<p>**·** 自定义组件setData通知页面更新优化；<p>**·** 修复分享onShareAppMessage(e)中from参数嵌套了两层的错误。|
|2.5.13|2018.11.14|**Bugfix** <p>**·**修复 picker 组件的 title 属性设置为空字符串时，在 android 端显示为 “true” 的问题；<p>**·**修复 picker-view 组件在自定义组件中无法动态修改值的问题；<p>**·**修复 slider 组件父元素为relative定位时滑动定位出错的问题；<p>**·**修改 MapContext.includePoints padding 默认值。|
|2.5.8|2018.11.9|**BugFix** <p>**·**修复 ios 端键盘弹起时，偶现 tap 事件不被触发的问题； <p>**·**修复 textarea 组件的 NA 视图位置渲染异常的问题；<p>**·**swiper兼容图片lazyload；<p>**·** ad组件使用tap；<p>**·**web化，工具bug修复；<p>**·** canvas中嵌套button样式修复；<p>**·** canIuse 功能补全。|
|2.5.3|2018.11.5|**New**<p>**·** 自定义组件新增内置方法createSelectorQuery, createIntersectionObserver；<p>**·** template模版支持filter过滤器。<p>**Breaking Change** <p>getVoiceRecognizer 由单例修改为多例。<p>**BugFix** <p>**·**修复组件创建、API 调用时序问题；<p>**·**修复 input 组件修改 placeholder-class 后，样式未生效的问题。|
|2.5.2|2018.11.2|**New**<p>增加自定义组件property的类型默认值。|

## 2.0版本日志更新

|版本号|更新日期|更新内容|
|----|----|----|
|2.0.33|2018.12.03|**BugFix**<p>**·**修复 input 组件在失焦后，开发者设置 focus 属性不生效的问题 ；<p>**·**修复ios下scroll-view组件的弹性运动和webview的scroll事件冲突而导致组件无法滑动的问题 。|
|2.0.32|2018.11.30|**Breaking Change** <p>button type为primary和warn去掉边框。 <p>**BugFix**<p> 修复slider backgroundColor设置transparent无效的问题。|
|2.0.28|2018.11.27|**New**<p>新增 API：getEnvInfoSync|
|2.0.25|2018.11.22|**New**<p>**·** image加载增加catch；<p>**·** animation step方法支持链式调用。<p>**Breaking Change** <p>**·** button组件type为primary和warn时去掉黑框描边；<p>**·** video组件ios h5占位图增加poster；<p>**·** android去掉针对10.8.5低版本patch。<p>**BugFix**<p>**·** 修复appOnshow和pageOnload乱序bug；<p>**·**  android上去掉所有手势后绑定bindpaly等非touch事件滑动视频页面不能滑动的bug。|
|2.0.23|2018.11.20|**New**<p>自定义组件新增内置方法groupSetData。<p>**Breaking Change** <p>**·**分享自定义白名单更新；<p>**·** swiper 组件前后边距支持rpx 。<p>**BugFix**<p>**·** 自定义组件setData通知页面更新优化；<p>**·** 修复分享onShareAppMessage(e)中from参数嵌套了两层的错误。|
|2.0.22|2018.11.13|**Bugfix** <p>**·**修复 picker 组件的 title 属性设置为空字符串时，在 android 端显示为 “true” 的问题；<p>**·**修复 picker-view 组件在自定义组件中无法动态修改值的问题；<p>**·**修复 slider 组件父元素为relative定位时滑动定位出错的问题。|
|2.0.18|2018.11.9|**New**<p>template支持filter。<p> **BugFix** <p>**·**修复 ios 端键盘弹起时，偶现 tap 事件不被触发的问题	；<p>**·**swiper兼容图片lazyload；<p>**·**ad组件使用tap。|
|2.0.15|2018.11.5|**New**<p> 自定义组件新增内置方法createSelectorQuery, createIntersectionObserver。<p>**BugFix** <p>**·**修复组件创建、API 调用时序问题；<p>**·**修复 input 组件修改 placeholder-class 后，样式未生效的问题。|
|2.0.13|2018.11.2|**New**<p>**·** cover-view/cover-image 组件支持设置 fixed 属性 ；<p>**·**  cover-image 组件支持使用本地图片；<p>**·** map新增属性，scroll-view支持enable-back-to-top属性，navigator支持target、appId、exit等属性。 <p>**Breaking Change** <p>webview组件分享回传给开发者当前URL。 <p>**BugFix** <p>**·**修复 input 组件修改 placeholder-class 后，样式未生效的问题。|
|2.0.12|2018.10.31|**Breaking Change** <p>**·**分包预下载功能优化； <p>**·**组件生命周期析构移除监听器。<p> **BugFix** <p>**·**修复自定义组件引用其他自定义组件小概率失败的问题；<p>**·** 修复生命周期onLaunch,onShow参数值path,query,scene,refereInfo等缺失的问题；<p>**·**修复配置 shareUrl 后分享到个人中心无法打开的问题； <p>**·**修复同步 API 调用导致的重复打点问题；<p>**·**修复 cover-view 组件设置 display: inline-block 不生效的问题。|
|2.0.3|2018.10.24|**New**<p>**·**新增分包预下载;<p>**·**自定义组件triggerEvent方法新增detail字段;<p>**·**分享自定义链接白名单更新;<p>**·**button、checkbox、audio、radio、label、switch、navigator、webview、video、live-player 组件对开发者传入的字段进行校验。<p>**Breaking Change** <p>**·**自定义组件扁平化改造;<p>**·** botton组件中使用boxjs代替swan获取userinfo；<p>**·**getPhoneNumber从swan中移除；<p>**·**小程序语音API；<p>**·**更改API名称、属性名称；<p>**·**openBdboxWebview API更改属性名称；<p>**·**canvas、form、icon、image、picker-view、picker、scroll-view、view、ar-camera、camera、movable-area、movable-view、progress、slider、text 组件对开发者传入的字段进行矫正。<p> **BugFix** <p>**·**修复picker安卓中不设置默认值省市区无效问题；<p>**·**修复image组件动态改变mode属性，样式没有跟着变化的问题;<p>**·**修复自定义组件selectquery实例上下文中的component字段缺失问题;<p>**·**修复自定义组件中使用selectquery不能通过class选择dom的问题;<p>**·**修复原生组件设置边框后，hide 属性不生效的问题;<p>**·**IntersectionObserver.disconnect 工具报错;<p>**·**自定义组件中使用 IntersectionObserver 不能通过 class 选择 dom 的问题;<p>**·**修复自定义组件传参为false时，不会更改组件内该属性值问题。|
|2.0.2|2018.10.22|**New**<p>**·** 分享 ICON 优化；<p>**·** button组件支持调起客服；<p>**·** getImageInfo 支持相对路径和网络图片。|
<!-- <p>**·** 新增 API getVoiceManger； -->

## 1.13版本日志更新

|版本号|更新日期|更新内容|
|----|----|----|
|1.13.43|2018.11.22|**New**<p>**·** button组件type为primary和warn时去掉黑框描边；<p>**·** video组件ios h5占位图增加poster；<p>**·** android去掉针对10.8.5低版本patch。<p>**BugFix**<p>**·** android上去掉所有手势后绑定bindpaly等非touch事件滑动视频页面不能滑动的bug。|
|1.13.41|2018.11.20|**New**<p>自定义组件新增内置方法groupSetData; <p>**BugFix**<p>**·** 自定义组件setData通知页面更新优化；<p>**·** 修复分享onShareAppMessage(e)中from参数嵌套了两层的错误。|
|1.13.40|2018.11.13|**Bugfix** <p>**·**修复 picker 组件的 title 属性设置为空字符串时，在 android 端显示为 “true” 的问题；<p>**·**修复 picker-view 组件在自定义组件中无法动态修改值的问题；<p>**·**修复 slider 组件父元素为relative定位时滑动定位出错的问题。|
|1.13.35|2018.11.9|**BugFix** <p>**·**修复 ios 端键盘弹起时，偶现 tap 事件不被触发的问题	；<p>**·**swiper兼容图片lazyload；<p>**·**ad组件使用tap。|
|1.13.34|2018.11.5|**New**<p> 自定义组件新增内置方法createSelectorQuery, createIntersectionObserver。<p>**BugFix** <p>**·**修复 input 组件修改 placeholder-class 后，样式未生效的问题。|
|1.13.33|2018.10.31|**BugFix**<p>**·** 修复生命周期onLaunch,onShow参数值path,query,scene,refereInfo等缺失的问题；<p>**·**修复配置 shareUrl 后分享到个人中心无法打开的问题；<p>**·**修复同步 API 调用导致的重复打点问题；<p>**·**修复 cover-view 组件设置 display: inline-block 不生效的问题。|
|1.13.27|2018.10.24|**New**<p>**·**自定义组件triggerEvent方法新增detail字段；<p>**·**app.js拆分逻辑上线；<p>**·**自定义组件新增功能：this访问支持id、is、dataset、新增lifetimes、新增pageLifetimes、支持外部样式类、支持全局样式类、新增hasBehavior、内置 behaviors支持 swan://form-field、swan://component-export、新增自定义组件扩展、 新增behaviors功能。<p>**Breaking Change**<p>**·**picker安卓中不设置默认值省市区无效问题；<p>**·**分享自定义链接白名单更新。<p>**BugFix**<p>**·**修复image组件动态改变mode属性，样式没有跟着变化的问题；<p>**·**修复自定义组件selectquery实例上下文中的component字段缺失问题；<p>**·**修复自定义组件中使用selectquery不能通过class选择dom的问题；<p>**·**修复原生组件设置边框后，hide 属性不生效问题；<p>**·**修复 IntersectionObserver.disconnect 工具报错问题；<p>**·**修复自定义组件中使用 IntersectionObserver 不能通过 class 选择 dom 的问题；<p>**·**修复自定义组件传参为false时，不会更改组件内该属性值的问题。|
|1.13.26|2018.10.20|**BugFix**<p>**·** 修复input组件的bindfocus无法触发的问题。|
|1.13.21|2018.10.18|**New**<p>**·** 新增 API createIntersectionObserver；<p>**·** 获取的场景值scene统一变为8位；<p>**BugFix**<p>**·** picker组件安卓中支持设置title；<p>**·** 修复map组件bindtap事件不生效问题；<p>**·** 修复swiper组件重复设置current值不生效的问题；<p>**·** 修复自定义组件中observer触发多次的问题；<p>**·** 修复input组件value属性双向绑定不生效的问题。|
|1.13.17|2018.10.10|**BugFix**<p>**·** 修复picker不设置customitem字段导致省市区查询异常的问题；<p>**·** 修复子组件同时设置disable和hoverStopPropagation为true时父组件还被hover的问题；<p>**·** 修复横向和横竖向混合滚动设置了双向绑定后，混合滚动失效的问题；<p>**·** 修复scroll-view设置scroll-y=“{{false}}”还能竖向滑动的问题；<p>**·** 修正scroll-view事件触发时序，顺序为bindscroll、bindscrolltoupper、bindscrolltolower。|
|1.13.7|2018.09.21|**New**<p>**·**button组件支持设置openType为openSetting；<p>**·**input 组件支持设置身份证输入键盘。<p>**Breaking Change**<p>**·**兼容cover-view，cover-image未创建成功立刻移除的场景;<p>**·**swiper兼容客户端下拉刷新；<p>**·**slider组件重构，使用computed梳理冗余代码。<p>**BugFix**<p>video传唯一id，修复视频闪动问题。|
|1.13.4|2018.09.17|**New**<p>**·** 新增API：isLoginSync、preloadSubPackage、getUpdateManager;<p>**·** showToast新增mask、image属性;<p>**·** createLivePlayerContext新增pause、resume属性;<p>**·** 新增调起广告落地页能力。 <p>**Breaking Change**<p>**·** showToast icon默认值由none改为success;<p>**·** live-player、video、map、camera、ARCamera、webview事件参数补齐;<p>**·** iPhoneX适配。|

## 1.12版本日志更新
|版本号|更新日期|更新内容|
|----|----|----|
|1.12.43|2018.11.9|**BugFix**<p>解除低版本自定义组件循环依赖的报错。|
|1.12.42|2018.10.31|**BugFix**<p>修复 cover-view 组件设置 display: inline-block 不生效的问题。|
|1.12.39|2018.10.24|**New**<p> 自定义组件triggerEvent方法新增detail字段。<p> **Breaking Change**<p>分享自定义链接白名单更新。<p>**BugFix**<p> 修复原生组件设置边框后，hide 属性不生效的 bug。|
|1.12.36|2018.10.18|**New**<p>**·** 获取的场景值scene统一变为8位；<p>**BugFix**<p>**·** 修复map组件bindtap事件不生效问题；<p>**·** 修复swiper组件重复设置current值不生效的问题；<p>**·** 修复自定义组件中observer触发多次的问题；<p>**·** 修复input组件value属性双向绑定不生效的问题。|
|1.12.34|2018.10.10|**BugFix**<p>**·** 修复横向和横竖向混合滚动设置了双向绑定后，混合滚动失效的问题；<p>**·** 修复scroll-view设置scroll-y=“{{false}}”还能竖向滑动的问题；<p>**·** 修正scroll-view事件触发时序，顺序为bindscroll、bindscrolltoupper、bindscrolltolower。|
|1.12.28|2018.09.21|**Breaking Change**<p>swiper兼容客户端下拉刷新|
|1.12.25|2018.09.14|**New**<p>Android 开放微博分享渠道; <p>**Breaking Change**<p>checkbox样式。 <p>**BugFix**<p>修复 textarea 组件 padding 渲染异常的 bug。|
|1.12.18|2018.09.12|**New**<p>**·** moveable-view 添加通用的手势behaviors; <p>**·** 新增动态 rpx;<p>**·** 增加打开广告落地页功能。 <p>**Breaking Change**<p>文本长度超出 input 组件的可容纳范围时，默认不显示省略号，直接截断文本。 <p>**BugFix**<p>**·** 修复 video android 点击穿透问题;<p>**·** 修复 button 组件iOS9下分享兼容性问题。|
|1.12.14|2018.09.06|**New**<p> **·** 新增 mask 组件; <p>**·** 新增 button 组件支持 getphonenumber ；<p>**·** 添加动画结束事件。<p>**BugFix**<p>**·** 修复swiper bug;<p>**·** 修复h5 catch事件问题;<p>**·** 修复pageScrollTo设置duration为0，body上方留白问题|。
|1.12.9|2018.09.4|<p>**New**<p> **·** html增加高度100%；<p> **·** picker-view支持动态修改数据；<p> **·** request新增responseType属性。<p>**BugFix**<p> **·** 修复 input 组件外层设置 display: flex 后，组件渲染异常的 bug；<p> **·** 修复 audio 组件 的 poster 值为空时，组件渲染异常的 bug；<p> **·** 修复 H5、NA 事件解决多指点击触发多个 tap 事件问题；<p> **·** 修复 picker-view 动态修改数据滑动异常问题；<p> **·** 修复设置 button 为disable未置灰的问题。|
|1.12.7|2018.09.1|**New**<p>**·** H5长按事件支持捕获、冒泡；<p>**·** H5 组件添加transitionend/animationstart/animationiteration/animationend 事件；<p>**·** H5 组件只绑定一个捕获事件不生效。<p>**BugFix**<p>**·** 修复分享面板调起时回调 success 的问题；<p> **·** 修复 video 切换视频从中间播放的问题；<p> **·** 修复 camera 组件 hidden 属性切换，由隐藏变展示不能再出现的问题；<p> **·** 修复了搜索结果页跳转后，调用 switchTab 的 bug；<p> **·** 修复 setData 后 audio 组件音频暂停播放的 bug；<p> **·** 修复 cover-view 组件 padding 渲染异常的 bug；<p> **·** 修复搜索二级页面，switchTab 报错的问题；<p> **·** 修复allowcrossorigin 方法没挂上的问题。|
|1.12.2|2018.08.2|**New**<p>音频 seek 方法支持 number 参数。<p>**BugFix**<p> **·** 修复H5手势事件多手指同时点击触发多次事件问题；<p> **·** 修复rich-text组件nodes属性传字符串，不能设置class和style等属性问题。|

## 1.11版本日志更新

|版本号|更新日期|更新内容|
|----|----|----|
|1.11.31|2018.10.10|**BugFix**<p>修复低版本自定义组件class不生效的bug。|
|1.11.29|2018.9.21|**New**<p>升级统计sdk版本，clkid改成从调起协议中提取。|
|1.11.25|2018.09.14|**New**<p>**·**  Android 开放微博分享渠道;<p>**·** 新增video点击穿透h5按钮。<p>**Breaking Change**<p>checkbox样式。 <p>**BugFix**<p>修复 自定义组件第一次不触发observer问题，及observer第二个参数不为oldValue问题。|
|1.11.22|2018.09.12|**New**<p>**·** 新增动态rpx;<p>**·** 增加打开广告落地页功能 <p>**Breaking Change**<p>文本长度超出 input 组件的可容纳范围时，默认不显示省略号，直接截断文本 <p>**BugFix**<p>**·** 修复video  android点击穿透问题;<p>**·** 修复button组件iOS9下分享兼容性问题。|
|1.11.21|2018.09.06|**New**<p> **·** 新增mask组件;<p>**·** 添加动画结束事件;<p>**Breaking Change**<p>**·** 广告组件去除位置信息 <p>**BugFix**<p>**·** 修复swiper bug;<p>**·** 修复h5 catch事件问题;<p>**·** 修复pageScrollTo设置duration为0，body上方会留白问题|
|1.11.20|2018.09.4|**New**<p> **·** html增加高度100%。<p> **·** picker-view支持动态修改数据。<p>request新增responseType属性<p>**BugFix**<p> **·** 修复 input 组件外层设置 display: flex 后，组件渲染异常的 bug。<p> **·** 修复 audio 组件 的 poster 值为空时，组件渲染异常的 bug。<p> **·** 修复H5、NA事件解决多指点击触发多个tap事件问题。<p> **·** 修复picker-view动态修改数据滑动异常问题。<p> **·** 修复设置button为disable未置灰的问题。|
|1.11.12|2018.08.22|**BugFix**<p>修复text组件不支持\n换行的问题，修复自定义组件methods-bug，增加selectComponent方法。|
|1.11.8|2018.08.15|**BugFix**<p>修复 video 组件嵌套在 template 使用时，getFirstParentComponentId 方法为 undefined 的 bug。|
|1.11.5|2018.08.14|**New**<p>**·** 新增cover-view/cover-image/video/live-player组件更新时的 diff 策略;<p>**·** 框架流程异常 trace-log 增加用户点击轨迹;<p>**·** cover-image 支持直接嵌套在其它原生组件中;<p>**·** 新增所有组件的 longtap 事件;<p>**·** 新增filter过滤器功能。<p>**BugFix** <p>**·** 修复生命周期不抛出异常问题;<p>**·** 修复 label 不能绑定tap事件，以及for属性设置不存在id时控制台会报错的bug;<p>**·** 修复createQuerySelect API在scroll-view中获取节点信息失败的 bug;<p>**·** 修复input组件在获得焦点的情况下设置文本颜色不生效的 bug;<p>**·** 修复 cover-view 高度单位为 % 时，其内部组件高度渲染异常的 bug;<p>**·** 修复 longpress 事件需要在 touchend 后触发的问题;<p>**·** 修复 chooseAddress，安卓端返回参数不一致的问题。|
|1.11.2|2018.08.09|**BugFix**<p>修复组件id不能通过变量设置为0的问题。|
|1.11.1|2018.08.07|**New**<p>**·** setData数据流性能优化;<p>**·** video支持hidden属性；<p>**·**a d 组件打点增加滚动监控 。<p>**BugFix** <p>**·** 修复 textarea 组件在 auto-height 为 true ，且在内联样式中设置高度时，高度自适应不生效的 bug; <p>**·** 修复track-log组件不发请求bug; <p>**·** 修复image组件报错BUG; <p>**·** 修复自定义组件属性变更不触发master中变更bug; <p>**·** 修复 第一次切换tab时onTabItemTap生命周期回调回参为undefined 的bug; <p>**·** 修复swan-events文件引用bug。|

## 1.10版本日志更新
|版本号|更新日期|更新内容|
|----|----|----|
|1.10.37|2018.10.10|**BugFix**<p>修复低版本自定义组件class不生效的bug。|
|1.10.32|2018.09.14|**New**<p>Android 开放微博分享渠道。|
|1.10.29|2018.09.12|<p>**Breaking Change**<p>文本长度超出 input 组件的可容纳范围时，默认不显示省略号，直接截断文本 <p>**BugFix**<p>**·** 修复video  android点击穿透问题;<p>**·** 修复button组件iOS9下分享兼容性问题。|
|1.10.28|2018.09.06|**New**<p>***·** 增加mask组件。<p>**BugFix**<p>**·** 修复pageScrollTo设置duration为0，body上方会留白问题;<p>**·** 兼容安卓4.4系统步行导航会强退问题。|
|1.10.27|2018.09.04|**New**<p>html增加高度100%。<p>**BugFix**<p> **·** 修复 input 组件外层设置 display: flex 后，组件渲染异常的 bug。<p> **·** 修复 audio 组件 的 poster 值为空时，组件渲染异常的 bug。|
|1.10.14|2018.08.02|**New**<p>增加框架全流程事件,性能&trace-log。<p>**Breaking Change**<p>删除body默认高度100。<p>**BugFix**<p>修复 redirect 后切换tab-slave白屏问题。|
|1.10.13|2018.07.31|**New**<p> **·** 新增canIUse；<p>**·** 新增 track-log组件;<p>**·** 新增自定义组件的支持。<p>**BugFix**<p>**·** 修复 input 组件设置 margin 属性导致闪动的问题;<p>**·** 修复 picker-view 组件动态设置value 视图没更新的问题。|
|1.10.8|2018.07.26|**New**<p>新增 API：getExtConfig、 getExtConfigSync、 navigateToSmartProgram、 navigateBackSmartProgram。<p>**BugFix**<p>**·** 修复 cover-view 组件在 android 端出现双 padding 的 bug；<p>**·** 修复 点击 label 组件不能默认触发第一个控件的问题，对 label 的 for 属性优化；<p>**·** 修复 swiper 横竖向嵌套使用滑动异常问题。|
|1.10.7 |2018.07.25|**New**<p>**·** image 支持设置 background-position；<p>**·** audio 样式更新。<p>**BugFix**<p>**·** 修复 radio-group 不存在时，radio 出现 relatedGroup is undefined 的 bug；<p>**·** 修复 picker 的 start 或者 end 设置为空时，百度 app 崩溃的 bug；<p>**·** 修复 text 不能重新渲染的问题。|
|1.10.3|2018.07.19|**New**<p>scroll-view 支持横竖向滑动 支持动态设置scrollTop。<p>**BugFix**<p>**·** 修复 组件中 disabled 属性不生效的 bug；<p>**·** 修复 组件在 initData 时 id 为 undefined 的 bug；<p>**·** 修复 连续调用某些 API （例：request、downloadFile、uploadFile 等）时 之前的调用无法收到结果的 bug；<p>**·** 修复 组件在 initData 时 id 为 undefined 的 bug；<p>**·**修复 二次进入小程序时 闪屏 的 bug。|
|1.10.1 |2018.07.17|**New**<p> text 添加space属性 支持显示连续空格。<p>**BugFix**<p> 修复 showModal中 title 和 content 传值为 boolean 类型时 iOS 崩溃的 bug。|
|1.10.0|2018.07.13|**New**<p>**·** video、live-player 支持全屏切换；<p>**·** input 支持 selection-start、selection-end、adjust-position 属性。<p>**·**BugFix<p>**·** 修复原生组件中 rgba 颜色不生效的 bug；<p>**·** 修复 input 偶现的重影 bug。|

<!-- ## 1.9版本日志更新
|版本号|更新日期|更新内容|
|----|----|----|
|1.9.6|2018.07.20|**BugFix**<p> 修复 coverview 组件在 android 端出现的 双padding 的 bug。|
|1.9.4|2018.07.13|**BugFix**<p> 修复原生组件中 rgba 颜色不生效的 bug。|
|1.9.3|2018.07.12|**BugFix**<p>**·** 修复 iOS 下滚动回弹导致 scroll-view 抖动的 bug；<p>**·** 修复 input、textarea 位置计算错误的 bug；<p>**·** 修复 textarea 设置自定义样式后，auto-height 属性不生效的 bug。|
|1.9.2|2018.07.11|**New**<p>**·** video 支持 showPlayBtn、showCenterPlayBtn、showMuteBtn 属性；<p>**·** cover-image 支持 bindload、binderror 事件。|
|1.9.1|2018.07.10|**New**<p>innerAudioContext 支持取消监听。<p>**BugFix**<p>修复 createAnimation 当动画参数为浮点数、负数时，动画不生效的 bug。| -->
