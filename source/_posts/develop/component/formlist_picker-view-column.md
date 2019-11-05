---
title: picker-view-column 滚动选择器子项
header: develop
nav: component
sidebar: formlist_picker-view-column
---
 

**解释**：  可嵌页面的滚动选择器子项。仅可放置于`<picker-view />`中，其孩子节点的高度会自动设置成与 picker-view 的选中框的高度一致。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/picker-view.png"  class="demo-qrcode-image" />

**示例**：
<a href="swanide://fragment/3c91ac3d1d08ec0d7e5dd4033498dd311565503521188" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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



