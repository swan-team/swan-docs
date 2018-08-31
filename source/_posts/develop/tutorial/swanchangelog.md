---
title: SWAN 历史更新日志
header: develop
nav: tutorial
sidebar: swanjsChangelog
---

### 1.11版本日志更新
|版本号|更新日期|更新内容|
|----|----|----|
|1.11.12|2018.08.22|**BugFix**<p>修复text组件不支持\n换行的问题，修复自定义组件methods-bug，增加selectComponent方法。|
|1.11.8|2018.08.15|**BugFix**<p>修复 video 组件嵌套在 template 使用时，getFirstParentComponentId 方法为 undefined 的 bug。|
|1.11.5|2018.08.14|**New**<p>**·** 新增cover-view/cover-image/video/live-player组件更新时的 diff 策略;<p>**·** 框架流程异常 trace-log 增加用户点击轨迹;<p>**·** cover-image 支持直接嵌套在其它原生组件中;<p>**·** 新增所有组件的 longtap 事件;<p>**·** 新增filter过滤器功能。<p>**BugFix** <p>**·** 修复生命周期不抛出异常问题;<p>**·** 修复 label 不能绑定tap事件，以及for属性设置不存在id时控制台会报错的bug;<p>**·** 修复createQuerySelect API在scroll-view中获取节点信息失败的 bug;<p>**·** 修复input组件在获得焦点的情况下设置文本颜色不生效的 bug;<p>**·** 修复 cover-view 高度单位为 % 时，其内部组件高度渲染异常的 bug;<p>**·** 修复 longpress 事件需要在 touchend 后触发的问题;<p>**·** 修复 chooseAddress，安卓端返回参数不一致的问题。|
|1.11.2|2018.08.09|**BugFix**<p>修复组件id不能通过变量设置为0的问题。|
|1.11.1|2018.08.07|**New**<p>**·** setData数据流性能优化;<p>**·** video支持hidden属性；<p>**·**a d 组件打点增加滚动监控 。<p>**BugFix** <p>**·** 修复 textarea 组件在 auto-height 为 true ，且在内联样式中设置高度时，高度自适应不生效的 bug; <p>**·** 修复track-log组件不发请求bug; <p>**·** 修复image组件报错BUG; <p>**·** 修复自定义组件属性变更不触发master中变更bug; <p>**·** 修复 第一次切换tab时onTabItemTap生命周期回调回参为undefined 的bug; <p>**·** 修复swan-events文件引用bug。|


### 1.10版本日志更新
|版本号|更新日期|更新内容|
|----|----|----|
|1.10.14|2018.08.02|**New**<p>增加框架全流程事件,性能&trace-log。<p>**Breaking Change**<p>删除body默认高度100。<p>**BugFix**<p>修复 redirect 后切换tab-slave白屏问题。|
|1.10.13|2018.07.31|**New**<p> **·** 新增canIUse；<p>**·** 新增 track-log组件;<p>**·** 新增自定义组件的支持。<p>**BugFix**<p>**·** 修复 input 组件设置 margin 属性导致闪动的问题;<p>**·** 修复 picker-view 组件动态设置value 视图没更新的问题。|
|1.10.8|2018.07.26|**New**<p>新增 API：getExtConfig、 getExtConfigSync、 navigateToSmartProgram、 navigateBackSmartProgram。<p>**BugFix**<p>**·** 修复 cover-view 组件在 android 端出现双 padding 的 bug；<p>**·** 修复 点击 label 组件不能默认触发第一个控件的问题，对 label 的 for 属性优化；<p>**·** 修复 swiper 横竖向嵌套使用滑动异常问题。|
|1.10.7 |2018.07.25|**New**<p>**·** image 支持设置 background-position；<p>**·** audio 样式更新。<p>**BugFix**<p>**·** 修复 radio-group 不存在时，radio 出现 relatedGroup is undefined 的 bug；<p>**·** 修复 picker 的 start 或者 end 设置为空时，百度 app 崩溃的 bug；<p>**·** 修复 text 不能重新渲染的问题。|
|1.10.3|2018.07.19|**New**<p>scroll-view 支持横竖向滑动 支持动态设置scrollTop。**BugFix**<p>**·** 修复 组件中 disabled 属性不生效的 bug；<p>**·** 修复 组件在 initData 时 id 为 undefined 的 bug；<p>**·** 修复 连续调用某些 API （例：request、downloadFile、uploadFile 等）时 之前的调用无法收到结果的 bug；<p>**·** 修复 组件在 initData 时 id 为 undefined 的 bug；<p>**·**修复 二次进入小程序时 闪屏 的 bug。|
|1.10.1 |2018.07.17|**New**<p> text 添加space属性 支持显示连续空格。<p>**BugFix**<p> 修复 showModal中 title 和 content 传值为 boolean 类型时 iOS 崩溃的 bug。|
|1.10.0|2018.07.13|**New**<p>**·** video、live-player 支持全屏切换；<p>**·** input 支持 selection-start、selection-end、adjust-position 属性。<p>**·**BugFix<p>**·** 修复原生组件中 rgba 颜色不生效的 bug；<p>**·** 修复 input 偶现的重影 bug。|


### 1.9版本日志更新
|版本号|更新日期|更新内容|
|----|----|----|
|1.9.6|2018.07.20|**BugFix**<p> 修复 coverview 组件在 android 端出现的 双padding 的 bug。|
|1.9.4|2018.07.13|**BugFix**<p> 修复原生组件中 rgba 颜色不生效的 bug。|
|1.9.3|2018.07.12|**BugFix**<p>**·** 修复 iOS 下滚动回弹导致 scroll-view 抖动的 bug；<p>**·** 修复 input、textarea 位置计算错误的 bug；<p>**·** 修复 textarea 设置自定义样式后，auto-height 属性不生效的 bug。|
|1.9.2|2018.07.11|**New**<p>**·** video 支持 showPlayBtn、showCenterPlayBtn、showMuteBtn 属性；<p>**·** cover-image 支持 bindload、binderror 事件。|
|1.9.1|2018.07.10|**New**<p>innerAudioContext 支持取消监听。<p>**BugFix**<p>修复 createAnimation 当动画参数为浮点数、负数时，动画不生效的 bug。|


<!-- 1.11
----

### 1.11.9 (2018.08.17)

[BugFix] 修复 动态修改自定义组件 property值 不生效的 bug
[BugFix] 修复 picker 组件再次选择会变成 全部 的 bug
[BugFix] 修复 navigator 组件默认样式展示不正确的 bug

### 1.11.8 (2018.08.15)

[BugFix] 修复 video 组件嵌套在 template 使用时，getFirstParentComponentId 方法为 undefined 的 bug

### 1.11.5 (2018.08.14)

[New] 新增cover-view/cover-image/video/live-player组件更新时的 diff 策略
[New] 框架流程异常 trace-log 增加用户点击轨迹
[New] cover-image 支持直接嵌套在其它原生组件中
[New] 新增所有组件的 longtap 事件
[New] 新增filter过滤器功能
[BugFix] 修复生命周期不抛出异常问题
[BugFix] 修复 label 不能绑定tap事件，以及for属性设置不存在id时控制台会报错的bug
[BugFix] 修复createQuerySelect API在scroll-view中获取节点信息失败的 bug
[BugFix] 修复input组件在获得焦点的情况下设置文本颜色不生效的 bug
[BugFix] 修复 cover-view 高度单位为 % 时，其内部组件高度渲染异常的 bug
[BugFix] 修复 longpress 事件需要在 touchend 后触发的问题
[BugFix] 修复 chooseAddress，安卓端返回参数不一致的问题

### 1.11.2 (2018.08.09)

[BugFix] 修复组件id不能通过变量设置为0的问题

### 1.11.1 (2018.08.07)

[New] setData数据流 性能优化
[New] video支持hidden属
[New] ad 组件打点增加滚动监控
[BugFix] 修复 textarea 组件在 auto-height 为 true ，且在内联样式中设置高度时，高度自适应不生效的 bug
[BugFix] 修复track-log组件不发请求bug
[BugFix] 修复image组件报错BUG
[BugFix] 修复自定义组件属性变更不触发master中变更bug
[BugFix] 修复 第一次切换tab时onTabItemTap生命周期回调回参为undefined 的bug
[BugFix] 修复swan-events文件引用bug

1.10
----
### 1.10.17 (2018.08.16)

[New] innerAudioContext update 逻辑优化
[BugFix] 修复白屏误报的 bug
[BugFix] 修复自定义组件的 bug
[BugFix] AI 接口二期优化

### 1.10.15 (2018.08.09)

[BugFix] 修复组件 id 不能通过变量设置为 0 的 bug
[BugFix] 修复 textarea 组件在 auto-height 为 true ，且在内联样式中设置高度时，高度自适应不生效的 bug

### 1.10.14 (2018.08.02)

[Breaking Change] 删除body默认高度100
[New] 增加框架全流程事件,性能&trace-log
[BugFix] 修复 redirect 后切换tab-slave白屏问题

### 1.10.13 (2018.07.31)

[New] canIUse
[New] 新增 track-log组件
[New] 新增自定义组件的支持
[BugFix] 修复 input 组件设置 margin 属性导致闪动的问题
[BugFix] 修复 picker-view 组件动态设置value 视图没更新的问题

### 1.10.8 (2018.07.26)

[New] 新增 API：getExtConfig、 getExtConfigSync、 navigateToSmartProgram、 navigateBackSmartProgram
[BugFix] 修复 cover-view 组件在 android 端出现双 padding 的 bug
[BugFix] 修复 点击 label 组件不能默认触发第一个控件的问题，对 label 的 for 属性优化
[BugFix] 修复 swiper 横竖向嵌套使用滑动异常问题

### 1.10.7 (2018.07.25)

[New] image 支持设置 background-position
[New] audio 样式更新
[BugFix] 修复 radio-group 不存在时，radio 出现 relatedGroup is undefined 的 bug
[BugFix] 修复 picker 的 start 或者 end 设置为空时，百度 app 崩溃的 bug
[BugFix] 修复 text 不能重新渲染的问题

### 1.10.3 (2018.07.19)

[New] scroll-view 支持横竖向滑动 支持动态设置scrollTop
[BugFix] 修复 组件中 disabled 属性不生效的 bug
[BugFix] 修复 组件在 initData 时 id 为 undefined 的 bug
[BugFix] 修复 连续调用某些 API （例：request、downloadFile、uploadFile 等）时 之前的调用无法收到结果的 bug
[BugFix] 修复 组件在 initData 时 id 为 undefined 的 bug
[BugFix] 修复 二次进入小程序时 闪屏 的 bug

### 1.10.1 (2018.07.17)

[New] text 添加space属性 支持显示连续空格
[BugFix] 修复 showModal中 title 和 content 传值为 boolean 类型时 iOS 崩溃的 bug

### 1.10.0 (2018.07.13)

[New] video、live-player 支持全屏切换
[New] input 支持 selection-start、selection-end、adjust-position 属性
[BugFix] 修复原生组件中 rgba 颜色不生效的 bug
[BugFix] 修复 input 偶现的重影 bug

1.9
----

### 1.9.6 (2018.07.20)

[BugFix] 修复 coverview 组件在 android 端出现的 双padding 的 bug

### 1.9.4 (2018.07.13)

[BugFix] 修复原生组件中 rgba 颜色不生效的 bug

### 1.9.3 (2018.07.12)

[BugFix] 修复 iOS 下滚动回弹导致 scroll-view 抖动的 bug
[BugFix] 修复 input、textarea 位置计算错误的 bug
[BugFix] 修复 textarea 设置自定义样式后，auto-height 属性不生效的 bug

### 1.9.2 (2018.07.11)

[New] video 支持 showPlayBtn、showCenterPlayBtn、showMuteBtn 属性
[New] cover-image 支持 bindload、binderror 事件

### 1.9.1 (2018.07.10)

[New] innerAudioContext 支持取消监听
[BugFix] 修复 createAnimation 当动画参数为浮点数、负数时，动画不生效的 bug -->
