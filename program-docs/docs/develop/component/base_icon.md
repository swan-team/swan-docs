---
title: icon 图标
header: develop
nav: component
sidebar: base_icon
webUrl: https://qft12m.smartapps.cn/component/icon/icon
---

**解释**： 图标

##  属性说明 

|属性名|类型  |默认值  | 必填 |说明|
|:---- |: ---- | :--- | :---- |:---- | 
|type |String  | | 是 |生效的值：success, info, warn, waiting, success_no_circle, clear, search, personal, setting, top, close, cancel, download, checkboxSelected, radioSelected, radioUnselect, loadingGrey|
|size | Number  |23 | 否 |icon 的大小，单位是 px|
|color | Color |   | 否 |icon 的颜色，同 css 的 color|

###  type 有效值  

| 值 | 说明 |
|:---- |: ---- |  
| success | 成功图标 |
| info | 消息图标 |
| warn | 警告图标 |
| waiting | 等待图标 |
| success_no_circle | 无圆形边框成功图标 |
| clear | 删除图标 |
| search | 搜索图标 |
| personal | 人物图标 |
| setting | 设置图标 |
| top | 回到顶部图标 |
| close | 关闭图标 |
| cancel | 取消图标 |
| download | 下载图标 |
| checkboxSelected | 复选框选中图标 |
| radioSelected | 单选框选中图标 |
| radioUnselect | 单选框未选中图标 |
| loadingGrey | loading图标 |

## 示例

<a href="swanide://fragment/2862c151ac430c745783b1a1696204b41577360560694" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/icon.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

 

### 代码示例 1： 自定义icon类型
:::codeTab
```swan
<view class="wrap">
    <view class="card-area">
        <view class="top-description border-bottom">自定义icon类型</view>
        <view class="icon-area">
            <view class="icon-item" s-for="type in types.smallDefault">
                <icon type="{{type}}"/>
                <view class="icon-text"> {{type}}</view>
            </view>
        </view>
    </view>
</view>
```
```js
Page({
    data: {
        types: {
            smallDefault: ['success', 'info', 'warn', 'waiting',
            'success_no_circle', 'clear', 'search', 'personal',
            'setting', 'top', 'close', 'cancel', 'download',
            'checkboxSelected', 'radioSelected', 'radioUnselect']
        }
    }
});
```

```css
.icon-area {
    margin-top: .15rem;
}

.icon-item {
    display: inline-block;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: .8rem;
    height: .95rem;
    margin: .07rem;
}

.icon-text {
    margin-top: .15rem;
    width: .8rem;
    word-break: break-all;
}
```
:::

### 代码示例 2： 自定义icon大小

:::codeTab
```swan
<view class="wrap">
    <view class="card-area">
        <view class="top-description border-bottom">自定义icon大小</view>
        <view class="icon-area">
            <view s-for="size in sizes" class="icon-item">
                <icon type="success" size="{{size}}"/>
                <view class="icon-text">{{size}}px</view>
            </view>
        </view>
    </view>
</view>
```

```js
Page({
    data: {
        colors: [
            '#333', '#666', '#999', '#3C76FF', '#F7534F'
        ]
    }
});
```

```css
.icon-area {
    margin-top: .15rem;
}

.icon-item {
    display: inline-block;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: .8rem;
    height: .95rem;
    margin: .07rem;
}

.icon-text {
    margin-top: .15rem;
    width: .8rem;
    word-break: break-all;
}
```
:::


### 代码示例 3： 自定义icon颜色

:::codeTab
```swan
<view class="wrap">
    <view class="card-area">
        <view class="top-description border-bottom">自定义icon颜色</view>
        <view class="icon-area">
            <view class="icon-item" s-for="color in colors">
                <icon type="success" size="25" color="{{color}}" class="icon-color" />
                <view class="icon-text">{{color}}</view>
            </view>
        </view>
    </view>
</view>
```

```js
Page({
    data: {
        sizes: [
            40, 35, 30, 25
        ]
    }
});
```

```css
.icon-area {
    margin-top: .15rem;
}

.icon-item {
    display: inline-block;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: .8rem;
    height: .95rem;
    margin: .07rem;
}

.icon-text {
    margin-top: .15rem;
    width: .8rem;
    word-break: break-all;
}
```
:::