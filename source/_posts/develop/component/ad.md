---
title: 广告组件
header: develop
nav: component
sidebar: ad
---

## ad

**解释**：广告组件，按照<a href="https://smartprogram.baidu.com/docs/introduction/adopen/">流量主开通指引</a>中的操作获取广告组件代码。



**属性说明：**

|属性名 |类型  |默认值  |说明|
|---- | ---- | ---- |---- |
|appid|string|none|小程序应用 ID|
|apid|string|none|小程序广告位 ID|
|type|string|none|广告类型：banner/feed ，需和百青藤平台上的代码位类型相匹配。|

* banner 

    **获取代码示例**：

    ```
    <ad appid="275104941" apid="6113075" class="ad" type="banner" </ad>;
    ```
    **示例 1**:

    ```
    <view class="ad-container">
    <div style="background-color: #fff">
    <ad appid="275104941" apid="6113075" class="ad" type="banner" </ad>;
    </div>
    </view>
    .ad-container {
        width: 100%;
    height: auto;
    }

    ```
* feed 

    **获取信息流广告代码示例**：
    ```
    <ad appid="275104976" apid="6115465" class="ad" type="feed" </ad>;
    ```


    **示例 2**:

    ```
    <view class="ad-container">
    <div style="background-color: #fff">
    <ad appid="275104976" apid="6115465" class="ad" type="feed" </ad>;
    </div>
    </view>
    .ad-container {
        width: 100%;
    height: auto;
    }

    ```