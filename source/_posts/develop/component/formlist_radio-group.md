---
title: radio-group 单项选择器组
header: develop
nav: component
sidebar: formlist_radio-group
---


 

**解释**：单项选择器组，内部由多个radio组成。代码示例与 [radio](/develop/component/formlist_radio/) 相同。




**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/radio.png"  class="demo-qrcode-image" />

## **属性说明**

| 属性名 | 类型 | 默认值 | 必填 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| bindchange | EventHandle | &nbsp; | 否 | &lt;radio-group/&gt; 中的选中项发生变化时触发 change 事件，event.detail = {value: 选中项 radio 的 value} |

## 示例
### **图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/radio.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### **代码示例**

<a href="swanide://fragment/6e21eb27622b96b353930a5f18234e061565503524059" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="wrap">
    <view class="title">默认样式</view>
    <radio-group bindchange="radioChange" class="radio-group">
        <radio class="radio" checked>&nbsp;&nbsp;选中</radio>
        <radio class="radio" checked="false">&nbsp;&nbsp;未选中</radio>
        <radio class="radio" disabled>&nbsp;&nbsp;不可用</radio>
        <radio class="radio" color="#C3D1FF" checked>&nbsp;&nbsp;我是浅色的</radio>
    </radio-group>

    <view class="title">推荐示例</view>
    <view class="item-wrap">
        <radio-group bindchange="radioChange">
            <label s-for="item in items" class="radio-background-active" for="{{item.id}}">
                <view class="item">
                    <radio value="{{item.value}}" checked="{{item.checked}}" id="{{item.id}}">
                         &nbsp;&nbsp;{{item.text}}
                    </radio>
                </view>
            </label>
        </radio-group>
    </view>
</view>
```

* 在 js 文件中

```javascript
Page({
    data: {
        items: [
            {
                value: 'have',
                text: '选中选项',
                checked: true,
                id: 1
            },
            {
                value: 'have',
                text: '未选中选项',
                id: 2
            }
        ],
        result: []
    },

    radioChange: e => {
        console.log(e);
    },

    formSubmit: e => {
        console.log(e);
    }
});
```
