---
title: picker-view 滚动选择器
header: develop
nav: component
sidebar: formlist_picker-view
---
 

**解释**：可嵌页面的滚动选择器

##  属性说明 

|属性名 |类型  |默认值|必填|说明|
|:---- |: ---- |:---- |:---- |:---- |
| value |`Array.<number>` |[]|否|数组中的数字依次表示 picker-view 内的 picker-view-colume 选择的第几项（下标从 0 开始），数字大于 picker-view-column 可选项长度时，选择最后一项。|
|indicator-style | String ||否|设置选择器中间选中框的样式|
|indicator-class | String ||否|设置选择器中间选中框的类名|
|mask-style | String ||否|设置蒙层的样式 |
|mask-class | String ||否|设置蒙层的类名|
| bindchange | EventHandle ||否|当滚动选择，value 改变时触发 change 事件，event.detail = {value: value}；value 为数组，表示 picker-view 内的 picker-view-column 当前选择的是第几项（下标从 0 开始）|


## 示例

<a href="swanide://fragment/8625f259847325d9dc3fd74a91e61e2c1577360625726" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/picker-view.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>



###  图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/searchbox/icms/searchbox/images/picker-view.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

###  代码示例 

* 在 swan 文件中

```xml
<view class="wrap">
    <view class="page-body">
    <view class="selected-date">{{year}}年{{month}}月{{day}}日</view>
    <picker-view  indicator-style ="color: #74fa7d" mask-class="maskStyle" style="width: 100%; height: 300px;" value="{{value}}" bindchange="bindChange">
        <picker-view-column>
            <view s-for="item in years" class="item">{{item}}年</view>
        </picker-view-column>
        <picker-view-column>
            <view s-for="item in months" class="item">{{item}}月</view>
        </picker-view-column>
        <picker-view-column>
            <view s-for="item in days" class="item">{{item}}日</view>
        </picker-view-column>
    </picker-view>
  </view>
</view>
```

* 在 js 文件中

```js
const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1990; i <= date.getFullYear(); i++) {
    years.push(i)
}

for (let i = 1; i <= 12; i++) {
    months.push(i)
}

for (let i = 1; i <= 31; i++) {
    days.push(i)
}

Page({
    data: {
        years,
        year: date.getFullYear(),
        months,
        month: 2,
        days,
        day: 2,
        value: [9999, 1, 1],
        isDaytime: true,
    },
    bindChange(e) {
        const val = e.detail.value
        this.setData({
            year: this.data.years[val[0]],
            month: this.data.months[val[1]],
            day: this.data.days[val[2]],
            isDaytime: !val[3]
        })
    }
});
```


##  Bug & Tip 

Tip：其中只可放置`<picker-view-column/>`组件，其他节点不会显示。
