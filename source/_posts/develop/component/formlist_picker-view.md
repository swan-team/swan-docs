---
title: picker-view 滚动选择器
header: develop
nav: component
sidebar: formlist_picker-view
---
 

**解释**： 可嵌页面的滚动选择器

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/picker-view.png"  class="demo-qrcode-image" />

**属性说明**

|属性名 |类型  |默认值|必填|说明|
|---- | ---- |---- |---- |---- |
| value |`Array.<number>` |[]|否|数组中的数字依次表示 picker-view 内的 picker-view-colume 选择的第几项（下标从 0 开始），数字大于 picker-view-column 可选项长度时，选择最后一项。|
|indicator-style | String ||否|设置选择器中间选中框的样式|
|indicator-class | String ||否|设置选择器中间选中框的类名|
|mask-style | String ||否|设置蒙层的样式 |
|mask-class | String ||否|设置蒙层的类名|
| bindchange | EventHandle ||否|当滚动选择，value 改变时触发 change 事件，event.detail = {value: value}；value 为数组，表示 picker-view 内的 picker-view-column 当前选择的是第几项（下标从 0 开始）|

**图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/picker-view.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**


参见[picker-view-column](https://smartprogram.baidu.com/docs/develop/component/formlist_picker-view-column/)示例内容。

**Bug & Tip**:

其中只可放置`<picker-view-column/>`组件，其他节点不会显示。