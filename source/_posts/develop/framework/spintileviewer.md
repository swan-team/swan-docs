---
title: spintileviewer 动态库—Beta
header: develop
nav: framework
sidebar: spintileviewer
---
 

spintileviewer 动态库提供了在小程序中播放 3D 环物的方法，底层基于百度 webVR SDK [Hydreigon](https://vr.baidu.com/vrtech/hydreigon/index/) 实现。

## 使用方法

### 1. 在项目中引用动态库

使用动态库的方法参见[小程序文档：使用动态库](https://smartprogram.baidu.com/docs/develop/framework/dynamiclib_use/)，在 `app.json` 中增添一项 `dynamicLib`，与 `pages` 同级。

```json
"dynamicLib": {
    "myDynamicLib": {
        "provider": "spintileviewer"
    }
},
```

### 2. 在使用到组件的页面配置动态库

在每个使用到图表组件的页面，配置 `*.json` 文件如：

```json
{
    "usingSwanComponents": {
        "spintileviewer": "dynamicLib://myDynamicLib/spintileviewer"
    }
}
```

### 3. 编写 `*.swan` 文件

```html
<spintileviewer options="{{ options }}" style="width: 100%; height: 100%; display: block"></spintileviewer>
```

这是一种最基本的配置方式。`style` 也可以在 `*.css` 中声明，需要保证 `<spintileviewer>` 是有宽度和高度的。`options` 在 `*.js` 中绑定到页面的 data 中：

```js
const options = ...;

Page({
    data: {
        options: options
    }
});
```

其中，options 是配置项，定义了3D环物的物料资源地址和渲染交互配置，一个典型的配置如下所示：

```js
options = {
    "spin": {
        "thumb": "https://xxx.com/.../thumb.jpg",
        "crossLongitude": false,
        "reversalY": true,
        "reversalX": true,
        "initColRow": [
            0,
            0
        ],
        "rowCount": 1,
        "colCount": 30,
        "imageUrl": [
            [
                "https://xxx.com/.../00.jpg"
            ]
        ],
        "scaleType": "inside"
    },
    "tile": {
        "scaleType": "inside",
        "width": 1350,
        "enableUrlCORSOrigin": true,
        "height": 1620,
        "tileSize": 254
    },
    "tileSources": [
        [
            "https://xxx.com/.../00_00_files/",
            ...
        ]
    ],

    "backgroundColor": "#565656",
    "initColRow": [
        0,
        0
    ]
};
```

动态库也支持链接方式传递配置，如果是跨域访问，需要配置跨域访问CORS规则。使用方法如下：

```html
<spintileviewer config="{{ config }}" style="width: 100%; height: 100%; display: block"></spintileviewer>
```

参考配置文件url：http://hydreigon-dev.cdn.bcebos.com/demo/assets/panamera_256/external/closed/config.json

动态库默认仅支持核心的 3D 环物渲染（多视角分级分块）和交互（拖拽缩放），也可以通过设置```defaultui=true```来显示默认的控件，支持PC和移动端的适配，支持功能包括：热点、缩放按钮、复位按钮、全屏按钮、二维码等，配置文件是在无UI配置项的基础上增加了相关字段，一个典型的有UI配置如下：

```js
options = {
  "ver": 1,
  "scenes": [
    {
      "sceneName": "scene_01",
      "sceneType": "spin",
      "thumb": "https://xxx.com/.../thumb.jpg",
      "spinImages": [
        [
          "https://xxx.com/.../00.jpg"
        ]
      ],
      "tileSources": [
        [
          "https://xxx.com/.../00_00_files/",
          ...
        ]
      ],
      "colCount": 32,
      "rowCount": 1,
      "initColRow": [
        0,
        0
      ],
      "scaleType": "inside",
      "tileSize": 254,
      "minLevel": 9,
      "width": 8256,
      "height": 5504
    }
  ],
  "hotspotsInfo": [
    {
      "className": "info",
      "id": "adsasasd",
      "popup": {
        "describe": "正文显示，纯正文情况。测试测试测试测试测试测试测试测试",
        "img": "",
        "title": "超长标题chb超长标题chb超长标题chb超长标题chb超长标题chb超长标题chb超长标题chb超长标题chb超长标题chb超长标题chb超长标题chb超长标题chb超长标题chb",
        "href": "http://www.baidu.com"
      },
      "tip": "车头561564126514651653165"
    },
    ...
  ],
  "hotspotsPos": {
    "scene_01": {
      "00_00": [
        {
          "id": "adsa55sasd",
          "x": 0.65,
          "y": 0.2
        },
        ...
    }
  },
  "guideListFilter": "global",
  "guideList": [
    {
      "scene": "scene_01",
      "view": "01_00",
      "id": "adsasasd"
    },
    ...
  ]
}
```
参考[含 UI 配置文件](https://hydreigon-publish.cdn.bcebos.com/swan-hydreigon/spin/origin-vrloading-cdn.json)

## 动态库属性列表

`<spintileviewer>` 上支持的属性包括：

| 属性名称 | 类型 | 说明 |
|---------|-----|-----|
| options | Object | 配置项 |
| config | string | 配置项链接 |
| defaultui | boolean | 是否显示默认控件 |

### 关键配置项说明

| 配置项名称 | 类型 | 说明 |
|---------|-----|-----|
| thumb | string | 缩略图url |
| spinImages | array | 环视图url二维数组，第一维表示行，第二维表示列 |
| tileSources | array | 分块图目录url二维数组，第一维表示行，第二维表示列 |
| colCount | number | 列数 |
| rowCount | number | 行数 |
| initColRow | array | 初始视角 |
| scaleType | string | 图像适配类型，inside表示留白，crop表示裁切 |
| tileSize | number | 分块size |
| width | number | 图像原始宽 |
| height | number | 图像原始高 |

