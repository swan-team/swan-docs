---
title: open-data 开放数据
header: develop
nav: component
sidebar: open
---



**解释：**用于展示百度 App 开放的数据。


**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/open-data.png"  class="demo-qrcode-image" />

## **属性说明**


| 属性名 | 类型     | 默认值  | 必填 |说明              |
| --- | ------ | ---- | --------------- |---- |
| type | String | | 是 |开放数据类型 |

### **type 有效值:**

| 值 | 说明 |
|--- |----- |
| userNickName | 用户昵称 |
| userAvatarUrl | 用户头像 |
| userGender | 用户性别 |

## 示例

### **图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="../../../img/component/open-data.png">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src="">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src="">
    </div>
</div>

### **代码示例**

<a href="swanide://fragment/e98cfa76e01e4b38ab712a7942c6b32b1565510599988" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="open-data">
    <view class="avatar">
        <open-data class="avatar-img" type="userAvatarUrl"></open-data>
    </view>
    <view class="section">
        <view class="sec">
            <view class="sec_left">昵称</view>
            <view class="sec_right">
                <open-data class="sec_left" type="userNickName"></open-data>
            </view>
        </view>
        <view class="sec">
            <view class="sec_left">性别</view>
            <view class="sec_right">
                <open-data class="sec_left" type="userGender"></open-data>
            </view>
        </view>
    </view>
</view>
```





