---
title: 页面配置
header: develop
nav: tutorial
sidebar: page_conf
---


小程序页面可以使用.json文件来对本页面的窗口表现进行配置。

> 页面的配置只能设置 app.json 中部分 window 配置项的内容，页面中配置项会覆盖 app.json 的 window 中相同的配置项。

### 配置示例

```js
{
  "navigationBarBackgroundColor": "#ffffff",
  "navigationBarTextStyle": "black",
  "navigationBarTitleText": "智能小程序接口功能演示",
  "backgroundColor": "#eeeeee",
  "backgroundTextStyle": "light"
}
```

### 页面配置项列表


|属性|类型|默认值|描述|最低版本|
|----|----|----|----|
|navigationBarBackgroundColor|HexColor|#000000|导航栏背景颜色，如 `#000000`||
|navigationBarTextStyle|String|white|导航栏标题颜色，仅支持 black / white||
|navigationBarTitleText|String|--|导航栏标题文字内容||
|backgroundColor|HexColor|#ffffff|窗口的背景色||
|backgroundTextStyle|String|dark|下拉 loading 的样式，仅支持 dark / light||
|enablePullDownRefresh|Boolean|false|是否全局开启下拉刷新。详见 <a href="https://smartprogram.baidu.com/docs/develop/framework/app_service_page/#%E5%88%9D%E5%A7%8B%E5%8C%96%E6%95%B0%E6%8D%AE/">Page.onPullDownRefresh</a>。||
|onReachBottomDistance|Number|50|页面上拉触底事件触发时距页面底部距离，单位为px。详见<a href="https://smartprogram.baidu.com/docs/develop/framework/app_service_page/#%E5%88%9D%E5%A7%8B%E5%8C%96%E6%95%B0%E6%8D%AE/">Page.onReachBottom</a>。||

<!-- |navigationStyle|String|default|导航栏样式，仅支持以下值：default(默认样式) custom(自定义导航栏)，只保留右上角胶囊按钮，在页面级配置优先级高于全局配置|<a href="https://smartprogram.baidu.com/docs/develop/tutorial/compatibility/">手百版本11.1.0</a>|

**说明**:
* 页面的.json只能设置 window 相关的配置项，以决定本页面的窗口表现，所以无需写 window 这个键。
* navigationStyle 可支持独立页面配置，做低版本兼容时，通过 <a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/#getSystemInfo">swan.getSystemInfo</a> 或者 <a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/#getSystemInfoSync">swan.getSystemInfoSync</a> 获取手百版本号进行兼容判断。 -->

