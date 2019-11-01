---
title: swiper 滑块视图容器
header: develop
nav: component
sidebar: view_swiper
---



**解释**：滑块视图容器。内部只允许使用`<swiper-item>`组件描述滑块内容，否则会导致未定义的行为。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/swiper.png"  class="demo-qrcode-image" />

**属性说明**：

|属性名 |类型  |默认值  | 必填 |说明|最低版本|
|---- | ---- | ---- |---- |---- |
|indicator-dots | Boolean  |  false  | 否 |是否显示面板指示点|- |
|indicator-color| Color  | rgba(0, 0, 0, .3) | 否 |指示点颜色| |
|indicator-active-color| Color | #333 | 否 |当前选中的指示点颜色| |
|autoplay |Boolean  | false | 否 |是否自动切换| |
|current|Number |0 | 否 |当前所在页面的 index| |
|current-item-id|String|| 否 |当前所在滑块的 item-id，不能与 current 被同时指定|1.11 <p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|interval | Number | 5000 | 否 |自动切换时间间隔，单位ms|- |
|duration| Number |500 | 否 |滑动动画时长，单位ms|- |
|circular| Boolean |false | 否 |是否采用衔接滑动| |
|vertical | Boolean  | false  | 否 |滑动方向是否为纵向|- |
|previous-margin|String|`"0px"`| 否 |前边距，可用于露出前一项的一小部分，支持px和rpx|1.11<p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|next-margin|String|`"0px"`| 否 |后边距，可用于露出后一项的一小部分，支持px和rpx|1.11<p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|display-multiple-items|Number|1| 否 |同时显示的滑块数量|1.11<p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|bindchange | EventHandle |  | 否 |current 改变时会触发 change 事件，event.detail = {current: current, source: source}|- |
|bindanimationfinish|EventHandle| | 否 |动画结束时会触发 animationfinish 事件，event.detail 同上|1.11<p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|

**change 事件 source 返回值**

change事件中的source字段，表示触发change事件的原因，可能值如下：

|值 |说明|
|---- | ---- |
| autoplay | 自动播放导致的swiper切换 |
| touch | 用户划动导致的swiper切换 |
| "" | 其他原因将返回空字符串 |

**图片示例**：

参见[swiper-item](https://smartprogram.baidu.com/docs/develop/component/view_swiper-item/)示例内容。

**代码示例**：

参见[swiper-item](https://smartprogram.baidu.com/docs/develop/component/view_swiper-item/)示例内容。

**Bug & Tip**：

* 如果在 bindchange 的事件回调函数中使用 setData 改变 current 值，则会导致 setData 被重复调用，因而通常情况下请在改变 current 值前检测 source 字段来判断是否是由于用户触摸引起的。
* 其中只可放置 swiper-item 组件，否则会导致未定义的行为。
