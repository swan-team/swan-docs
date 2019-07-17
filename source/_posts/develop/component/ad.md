---
title: 广告组件
header: develop
nav: component
sidebar: ad
---

## ad

**解释**：广告组件，按照<a href="https://smartprogram.baidu.com/docs/introduction/adopen/">流量主开通指引</a>中的操作获取广告组件代码。



**属性说明**：

|属性名 |类型  |默认值  |必填|说明|
|---- | ---- | ---- |---- |---- |
|appid|string| |是|小程序应用 ID|
|apid|string| |是|小程序广告位 ID|
|type|string|feed|否|广告类型：banner/feed ，需和百青藤平台上的代码位类型相匹配。|

**type 有效值:**:

| 值 | 说明 |
|--- |----- |
| banner | 横幅类型 |
| feed | 流式类型 |

**示例**：
<a href="swanide://fragment/887f2bc9c844abf188eeefc57d2aa0b21559048217250" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* banner

    **获取代码示例**：

    ```
    <ad appid="275104941" apid="6113075" class="ad" type="banner"> </ad>;
    ```
    **示例 1**:

    ```
    <view class="ad-container">
    <div style="background-color: #fff">
    <ad appid="275104941" apid="6113075" class="ad" type="banner"> </ad>;
    </div>
    </view>
    .ad-container {
        width: 100%;
    height: auto;
    }

    ```

    **说明**：
    1. 从百青藤获取的代码，是`<ad></ad>`标签组件，把这段代码，嵌入到页面中你需要展现广告的位置处，然后给他一些样式就可以，样式控制只能到`<ad>`这一层，内部的展示效果对小程序的开发者来说没有权限。
    2. banner样式的背景色默认透明，建议开发者自定义背景色。通过（`div style="background-color: #fff"`）自行定义。其中`#fff`代表白色，可以根据广告场景自行修改参数。

* feed

    **获取信息流广告代码示例**：
    ```
    <ad appid="275104976" apid="6115465" class="ad" type="feed"> </ad>;
    ```


    **示例 2**:

    ```
    <view class="ad-container">
    <div style="background-color: #fff">
    <ad appid="275104976" apid="6115465" class="ad" type="feed"> </ad>;
    </div>
    </view>
    .ad-container {
        width: 100%;
    height: auto;
    }

    ```

  **Bug & Tip**：

  * 从百青藤获取的代码，是ad组件，把这段代码，嵌入到页面中你需要展现广告的位置处，然后给他一些样式就可以，样式控制只能到ad这一层，内部的展示效果对小程序的开发者来说没有权限。
  * banner 样式的背景色默认透明，建议开发者自定义背景色。通过（`div style="background-color: #fff"`）自行定义。其中`#fff`代表白色，可以根据广告场景自行修改参数。
  * 信息流广告可在百青藤平台配置四种样式：大图、多图、左图右文、右图左文。