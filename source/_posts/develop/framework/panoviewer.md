---
title: panoviewer 动态库-Beta
header: develop
nav: framework
sidebar: panoviewer
---



panoviewer 动态库提供了在小程序中播放全景图的方法，底层基于百度 webVR SDK [Hydreigon](https://vr.baidu.com/vrtech/hydreigon/index/) 实现。

## 使用方法

### 1. 在项目中引用动态库

使用动态库的方法参见[小程序文档：使用动态库](https://smartprogram.baidu.com/docs/develop/framework/dynamiclib_use/)，在 `app.json` 中增添一项 `dynamicLib`，与 `pages` 同级。

```json
"dynamicLib": {
    "myDynamicLib": {
        "provider": "panoviewer"
    }
},
```

### 2. 在使用到组件的页面配置动态库

在每个使用到图表组件的页面，配置 `*.json` 文件如：

```json
{
    "usingSwanComponents": {
        "panoviewer": "dynamicLib://myDynamicLib/panoviewer"
    }
}
```

### 3. 编写 `*.swan` 文件

```html
<panoviewer options="{{ options }}" style="width: 100%; height: 100%; display: block"></panoviewer>
```

这是一种最基本的配置方式。`style` 也可以在 `*.css` 中声明，需要保证 `<panoviewer>` 是有宽度和高度的。`options` 在 `*.js` 中绑定到页面的 data 中：

```js
const options = ...;

Page({
    data: {
        options: options
    }
});
```

其中，options 是配置项，定义了全景图的物料资源地址和渲染交互配置，一个典型的配置如下所示：

```js
options = {
    "image": "https://xxx.com/.../xxx.jpg",
    "smallPlanet": 3000,
    "config": {
        "projectionType": "equirectangular"
    }
};
```

## 动态库属性列表

`<panoviewer>` 上支持的属性包括：

| 属性名称 | 类型 | 说明 |
|---------|-----|-----|
| options | Object | 配置项 |

### 关键配置项说明

| 配置项名称 | 类型 | 说明 |
|---------|-----|-----|
| image | Object/string | 投影模式对应的资源配置 |
| projectionType | string | 投影模式名称 |
| smallPlanet | number | 小行星动画时长，如果未设置则表示无动画 |

## 投影模式

动态库支持多种投影模式，包括球形、立方体、[EAC](https://blog.google/products/google-ar-vr/bringing-pixels-front-and-center-vr-video/)、手机全景、分级分块，投影模式对应的名称如下表：

| 投影模式 | 名称 |
|---------|-----|
| 球形 | equirectangular |
| 立方体 | cubemap |
| EAC | cubestrip |
| 手机全景 | panorama |
| 分级分块 | multires |

除分级分块模式外，其他模式的image字段为资源url，分级分块模式的image参数是切片脚本生成的配置，说明如下：

| 配置项名称 | 类型 | 说明 |
|---------|-----|-----|
| basePath | string | 分块图的根目录 |
| path | string | 分块图的格式化方式 |
| fallbackPath | string | 缩略图路径 |
| extension | string | 图像格式 |
| tileResolution | string | 分块size |
| maxLevel | number | 最大级别 |
| cubeResolution | number | 立方体单面size |

示例配置如下
```js
{
    image: {
        basePath:
            "https://hydreigon-publish.cdn.bcebos.com/swan-hydreigon/pano/lujiazui-4k/",
        path: "/%l/%s%y_%x",
        fallbackPath: "/fallback/%s",
        extension: "jpg",
        tileResolution: 512,
        maxLevel: 3,
        cubeResolution: 1304
    },
    config: {
        projectionType: "multires"
    }
}
```
