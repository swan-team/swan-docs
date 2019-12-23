---
title: ECharts 动态库-Beta 
header: develop
nav: framework
sidebar: echarts
---

 
### 介绍

ECharts 动态库是智能小程序基于 [ECharts](http://echarts.apache.org/) 实现的图表动态库，提供了图表在小程序中的使用方法。如果在使用中碰到问题，可以在 [Github](https://github.com/baidu-smart-app/baidu-smart-app-echarts-demo/issues) 提问。

完整的示例程序参见：[demo](https://github.com/baidu-smart-app/baidu-smart-app-echarts-demo)。

## 使用方法

### 1. 在项目中引用动态库

参考[使用动态库](https://smartprogram.baidu.com/docs/develop/framework/dynamiclib_use/)中提供的方法，在 `app.json` 中增添一项 `dynamicLib`，与 `pages` 同级。

```json
"dynamicLib": {
    "echartsLib": {
        "provider": "echarts_4_4_0"
    }
},
```

`provider` 的值包含了 ECharts 的版本号，目前只支持 `"echarts_4_4_0"`，对应 ECharts 4.4.0 版本。

### 2. 在使用到图表组件的页面配置动态库

在每个使用到图表组件的页面，配置 `*.json` 文件如：

```json
{
    "usingSwanComponents": {
        "chart": "dynamicLib://echartsLib/chart"
    }
}
```

### 3. 编写 `*.swan` 文件

```html
<chart option="{{ option }}" style="width: 100%; height: 500px; display: block"></chart>
```

这是一种最基本的配置方式。
* `style` 也可以在 `*.css` 中声明，需要保证 `<chart>` 是有宽度和高度的。
* `option` 在 `*.js` 中绑定到页面的 data 中。

```js
const option = ...;

Page({
    data: {
        option: option
    }
});
```

其中，option 是一个图表配置项，定义了图表的内容和样式。由于本图表组件使用了 [ECharts](https://echarts.apache.org) 作为底层实现，所以这个 `option` 就对应 [ECharts 的配置项](https://echarts.apache.org/zh/option.html)。一个简单的折线图的配置项可能是这样的——

```js
option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
};
```

如果你不知道如何编写配置项，可以在 [Echarts 官网](https://echarts.apache.org/examples/zh/index.html)或 [Echarts 社区](https://gallery.echartsjs.com/)找到相似的例子，结合 [Echarts 配置项文档](https://echarts.apache.org/zh/option.html)模仿修改。

## 动态库属性列表

`<chart>` 上支持的属性包括：

| 属性名称 | 类型 | 说明 |
|---------|-----|-----|
| option | Object| 配置项，参见 [ECharts 配置项文档](https://echarts.apache.org/zh/option.html)。 |
| width | number、string| 可显式指定实例宽度，单位为像素。如果传入值为 `null/undefined/'auto'`，则表示自动取实例容器的宽度，参见 [echarts.init](https://echarts.apache.org/zh/api.html#echarts.init)。 |
| height | number、string | 可显式指定实例高度，单位为像素。如果传入值为 `null/undefined/'auto'`，则表示自动取实例容器的高度，参见 [echarts.init](https://echarts.apache.org/zh/api.html#echarts.init)。 |
| dpr | number| 设备像素比，默认取 [`swan.getSystemInfoSync().pixelRatio`](https://smartprogram.baidu.com/docs/develop/api/device_sys/)，参见 [echarts.init](https://echarts.apache.org/zh/api.html#echarts.init)。 |
| notMerge | boolean | 在更新配置项的时候，是否不跟之前设置的 `option` 合并，参见 [echartsInstance.setOption](https://echarts.apache.org/zh/api.html#echartsInstance.setOption)。 |
| maps | Object、Array&lt;Object&gt; | 如果是 `Object` 类型，则是包含 `name`（地图名称，相当于 [echarts.registerMap](https://echarts.apache.org/zh/api.html#echarts.registerMap) 接口中的 `mapName`）与 `geoJson`（GeoJson 格式的数据）的对象；如果是数组，则每一项都是包含 `name` 和 `geoJson` 的数组。具体的使用方法参见「地图」的例子。|
| action | string| 需要触发事件的时候，将这一属性设为 [ECharts 支持的属性名称](https://echarts.apache.org/zh/api.html#action)，参见“事件触发与监听”的例子。|
| toClear | boolean| 设为 `true` 时，相当于调用 [echartsInstance.clear](https://echarts.apache.org/zh/api.html#echartsInstance.clear)，清空当前实例，会移除实例中所有的组件和图表。|
| extensions | Array&lt;string&gt;| ECharts 扩展名称，目前只支持[字符云](https://github.com/ecomfe/echarts-wordcloud)（`'wordcloud'`）与[水球图](https://github.com/ecomfe/echarts-liquidfill)（`'liquidfill'`），注意都是小写。使用方法参见「字符云」和「水球图」的例子。 |

## 兼容性说明

以下说明 ECharts 的配置项和 API 与本动态库的差别。

### 配置项

本动态库支持绝大部分的 ECharts 配置，已知不支持的配置项包括： 
* [toolbox.feature.dataView](https://echarts.apache.org/zh/option.html#toolbox.feature.dataView)
* 回调函数类型的 formatter

### ECharts API 在动态库中的对应使用方法

ECharts 的 API 通过其他方式提供，开发者不能直接访问到全局变量 `echarts` 和图表实例。以下具体说明在 ECharts 的 API 在本动态库中对应的用法。

#### 全局方法

|方法|说明|
|---|---|
|[echarts.init](https://echarts.apache.org/zh/api.html#echarts.init)|开发者无需手动调用此方法，图表会在 DOM 节点 attach 的时候自动初始化图表。如果希望延迟初始化，参见「延迟加载图表」的例子。默认会采用 `<chart>` DOM 容器的大小作为图表大小，如果需要强制指定大小，可以通过 `width` 和 `height` 属性传递，参见「改变图表容器大小」的例子。|
|[echarts.connect](https://echarts.apache.org/zh/api.html#echarts.connect)|不支持图表联动。|
|[echarts.disconnect](https://echarts.apache.org/zh/api.html#echarts.disconnect)|不支持图表联动。|
|[echarts.dispose](https://echarts.apache.org/zh/api.html#echarts.dispose)|开发者无需手动调用此方法，图表会在图表容器 DOM 被移除的时候自动调用这个方法。|
|[echarts.getInstanceByDom](https://echarts.apache.org/zh/api.html#echarts.getInstanceByDom)|开发者无法访问到容器上的实例，需要通过属性的方式对图表进行操作。|
|[echarts.registerMap](https://echarts.apache.org/zh/api.html#echarts.registerMap)|在动态组件中，通过 `maps` 属性注册地图，具体方法参见「地图」的例子。|
|[echarts.getMap](https://echarts.apache.org/zh/api.html#echarts.getMap)|在动态组件中，如果需要获取此信息，请自行保存相关地图信息。|
|[echarts.registerTheme](https://echarts.apache.org/zh/api.html#echarts.registerTheme)|不支持注册主题，请提供配置项改变样式。|
|[echarts.graphic](https://echarts.apache.org/zh/api.html#echarts.graphic)|不支持图形相关帮助方法。|

#### 实例方法

|方法|说明|
|---|---|
|[echartsInstance.group](https://echarts.apache.org/zh/api.html#echartsInstance.group)|不支持图表联动。|
|[echartsInstance.setOption](https://echarts.apache.org/zh/api.html#echartsInstance.setOption)|修改 `option` 属性就相当于调用该方法，参数 `notMerge` 可以通过属性 `notMerge` 设置。|
|[echartsInstance.getWidth](https://echarts.apache.org/zh/api.html#echartsInstance.getWidth)|在动态组件中，如果需要获取此信息，请自行保存宽度信息。|
|[echartsInstance.getHeight](https://echarts.apache.org/zh/api.html#echartsInstance.getHeight)|在动态组件中，如果需要获取此信息，请自行保存高度信息。|
|[echartsInstance.getDom](https://echarts.apache.org/zh/api.html#echartsInstance.getDom)|不支持 DOM 操作。|
|[echartsInstance.getOption](https://echarts.apache.org/zh/api.html#echartsInstance.getOption)|在动态组件中，如果需要获取此信息，请自行保存配置项信息。|
|[echartsInstance.resize](https://echarts.apache.org/zh/api.html#echartsInstance.resize)|通过修改 `width` 或 `height` 属性实现该方法的调用，参见「改变图表容器大小」的例子。|
|[echartsInstance.dispatchAction](https://echarts.apache.org/zh/api.html#echartsInstance.dispatchAction)|通过修改 `action` 属性实现该方法的调用，参见「事件触发与监听」的例子。|
|[echartsInstance.on](https://echarts.apache.org/zh/api.html#echartsInstance.on)|通过 `bindxxx` 属性（其中 `xxx` 是 [ECharts 事件](https://echarts.apache.org/zh/api.html#events)的名称，注意都是小写）实现该方法的调用，参见「事件触发与监听」的例子。支持绝大部分 ECharts 的事件，不支持的包括：`dbclick`, `mousemove`, `mouseover`, `mouseout`, `globalout`, `contextmenu`。
|[echartsInstance.off](https://echarts.apache.org/zh/api.html#echartsInstance.off)|去除 `bindxxx` 属性即可。|
|[echartsInstance.convertToPixel](https://echarts.apache.org/zh/api.html#echartsInstance.convertToPixel)|不支持。|
|[echartsInstance.convertFromPixel](https://echarts.apache.org/zh/api.html#echartsInstance.convertFromPixel)|不支持。|
|[echartsInstance.containPixel](https://echarts.apache.org/zh/api.html#echartsInstance.containPixel)|不支持。|
|[echartsInstance.showLoading](https://echarts.apache.org/zh/api.html#echartsInstance.showLoading)|不支持。|
|[echartsInstance.hideLoading](https://echarts.apache.org/zh/api.html#echartsInstance.hideLoading)|不支持。|
|[echartsInstance.getDataURL](https://echarts.apache.org/zh/api.html#echartsInstance.getDataURL)|不支持。|
|[echartsInstance.getConnectedDataURL](https://echarts.apache.org/zh/api.html#echartsInstance.getConnectedDataURL)|不支持。|
|[echartsInstance.appendData](https://echarts.apache.org/zh/api.html#echartsInstance.appendData)|不支持。|
|[echartsInstance.clear](https://echarts.apache.org/zh/api.html#echartsInstance.clear)|通过将 `toClear` 属性设为 `true` 实现。|
|[echartsInstance.isDisposed](https://echarts.apache.org/zh/api.html#echartsInstance.isDisposed)|不支持。|
|[echartsInstance.dispose](https://echarts.apache.org/zh/api.html#echartsInstance.dispose)|开发者无需手动调用此方法，图表会在图表容器 DOM 被移除的时候自动调用这个方法。|

