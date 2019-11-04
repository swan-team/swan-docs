---
title: 组件
header: develop
nav: tutorial
sidebar: function_component
---



智能小程序中提供了丰富多样的组件，开发者可以在 .swan 文件中，使用预设好的组件，拼装完成自己的智能小程序的页面。

如：使用 slider 组件

```xml
<slider min="200" max="1500" value="{{switchDuration}}"></slider>
```

即可在页面上展示一个 slider 组件。

也可以在 slider 组件上绑定事件，在相应的组件事件发生时，得到回调与组件信息：

```xml
<slider min="200" max="1500" value="{{switchDuration}}" bind:change="changeSlider"></slider>
```

```js
Page({
	changeSwitchDuration: function () {
	    console.log('changeSwitchDuration');
	}
});
```
具体可以参考组件说明：https://smartprogram.baidu.com/docs/develop/tutorial/function_component/
