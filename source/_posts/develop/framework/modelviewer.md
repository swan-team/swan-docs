---
title: modelviewer 动态库-Beta
header: develop
nav: framework
sidebar: modelviewer
---

modelviewer 动态库提供了在小程序中展示 3D 模型功能，底层基于 [Hydreigon](https://vr.baidu.com/vrtech/hydreigon/index/) 实现

## 使用方法
### 1. 在项目中引用动态库
使用动态库的方法参见[小程序文档：使用动态库](https://smartprogram.baidu.com/docs/develop/framework/dynamiclib_use/)，在 `app.json` 中增添一项 `dynamicLib`，与 `pages` 同级。
```json
"dynamicLib": {
    "myModelviewer": {
        "provider": "modelviewer"
    }
},
```
### 2. 在使用到模型组件的页面配置动态库
在每个使用到模型组件的页面，配置 `*.json` 文件如：
```json
{
    "usingSwanComponents": {
        "modelviewer": "dynamicLib://myDynamicLib/modelviewer"
    }
}
```
### 3. 编写 `*.swan` 文件
```html
<modelviewer option="{{ option }}" style="width: 100%; height: 500px; display: block"></modelviewer>
```
这是一种最基本的配置方式。`style` 也可以在 `*.css` 中声明，需要保证 `<modelviewer>` 是有宽度和高度的。`option` 在 `*.js` 中绑定到页面的 data 中：
```js
const option = ...;
Page({
    data: {
        option: option
    }
});
```
其中，option 是一个模型展示配置项，定义了模型应该如何展示，示例如下：
```js
option = {
    "autoStart": true,
    "parent": "body",
    "backgroundImage": "https://bj.bcebos.com/v1/hydreigon-dev/sdk-dev/dist/assets/bg.jpg",
    "camera": {
        "fov": "65",
        "position": [
            0,
            0,
            0
        ],
        "near": 1,
        "far": 10000
    },
    "scenes": [
        {
            "pano": {
                "url": "https://bj.bcebos.com/v1/hydreigon-dev/sdk-dev/dist/assets/model/bio/skybox.jpg",
                "radius": 800,
                "rotation": 0,
                "position": [0, 0, -0]
            },
            "scale": 1,
            "animationSettings": {
                "111": {
                    "startAt": 0,
                    "duration": 3.6
                }
            },
            "lights": [
                {
                    "type": "AmbientLight",
                    "params": {
                        "color": 16777215,
                        "intensity": 1
                    }
                },
                {
                    "type": "DirectionalLight",
                    "params": {
                        "color": 16777215,
                        "intensity": 1,
                        "position": [
                            1,
                            1,
                            1
                        ]
                    }
                },
                {
                    "type": "SpotLight",
                    "params": {
                        "color": 16777215,
                        "intensity": 1,
                        "position": [
                            1,
                            1,
                            1
                        ],
                        "distance": 0,
                        "angle": 1.57,
                        "penumbra": 0.5,
                        "decay": 1
                    }
                }
            ],
            "backgroundImage": "https://bj.bcebos.com/v1/hydreigon-dev/sdk-dev/dist/assets/bg.jpg",
            "autoPlayAnimation": "111",
            "showLabels": false,
            "url": "https://hydreigon-publish.bj.bcebos.com/swan-hydreigon/model/new_robot/scene.gltf",
            "bg": "https://bj.bcebos.com/v1/hydreigon-dev/sdk-dev/dist/assets/bg.jpg",
            "offset": [
                0,
                -25,
                0
            ],
            "hotspots": [
                {
                    "text": "右上臂",
                    "position": [
                        -0.7,
                        1.2,
                        0
                    ],
                    "parentName": "右上臂",
                    "events": {
                        "click": {
                            "type": "highlight",
                            "color": [
                                0.096,
                                0.359,
                                0.757
                            ],
                            "duration": 1000,
                            "times": 3
                        }
                    }
                },
                {
                    "text": "左下臂",
                    "position": [
                        0.7,
                        0.6,
                        0
                    ],
                    "parentName": "左下臂",
                    "events": {
                        "click": {
                            "type": "highlight",
                            "color": [
                                0.096,
                                0.359,
                                0.757
                            ],
                            "duration": 1000,
                            "times": 3
                        }
                    }
                },
                {
                    "text": "膝盖",
                    "position": [
                        0,
                        0.5,
                        0
                    ],
                    "parentName": "膝盖",
                    "events": {
                        "click": {
                            "type": "highlight",
                            "color": [
                                0.096,
                                0.359,
                                0.757
                            ],
                            "duration": 1000,
                            "times": 3
                        }
                    }
                }
            ]
        }
    ]
};
```
## 动态库配置文件详细说明

## 动态库属性列表
`<modelviewer>` 上支持的属性包括：

| 属性名称 | 类型 | 说明 |
|---------|-----|-----|
| option | `Object` | 配置项，参见上方参数说明列表 |

### 总配置

| 属性名称 | 必填 | 默认值 | 说明 |
|---------|-----|-----|---------|
| autoStart | 否 | true | 是否 |
| parent | 否 | "body" | 父级容器的dom元素匹配css表达式 |
| backgroundImage | 否 | "" | 设置全局2D背景图，该背景图设置全局有效，可被scene的配置覆盖 |
| camera | 否 |  | 设置相机配置参数，具体设置请看camera配置表 |
| scenes | 是 |  | 设置场景配置参数，可以配置任意数量的场景，可以通过热点进行场景切换。所有的场景只会在用到时加载自己所需资源。且在切换为新场景时，旧场景不会被销毁，从而再次进入旧场景则可以直接展示，无需用户等待。 |

### 相机配置

| 属性名称 | 必填 | 默认值           | 说明               |
| -------- | ---- | ---------------- | ------------------ |
| fov      | 否   | 65               | 调整透视相机fov    |
| position | 否   | {x: 0, y:0, z:0} | 相机初始位置坐标   |
| near     | 否   | 1                | 调整相机近截面距离 |
|          | 否   | 10000            | 调整相机远截面距离 |

### 场景配置

场景是一个数组，每个数组元素都是独立的场景

| 属性名称          | 必填 | 默认值           | 说明                                                         |
| ----------------- | ---- | ---------------- | ------------------------------------------------------------ |
| pano              | 否   | null             | 全景图设置。该全景图会出现在场景里面，会覆盖2D背景图。详细配置参见<u>全景设置</u>。 |
| scale             | 否   | 1                | 模型缩放。                                                   |
| animations        | 否   | null             | 用于额外修改模型动画默认参数的配置。详见<u>动画配置</u>      |
| lights            | 否   | null             | 用于设置光照，是个数组，可以配置任意数量和不同类型的光照。如果不配置则会SDK默认添加一组光照。详见<u>光照配置</u> |
| backgroundImage   | 否   | null             | 图片的url。用于设置该场景的2D背景图，该设置填写之后会覆盖全局配置 |
| autoPlayAnimation | 否   | null             | 是否进入该场景之后自动播放某个名称的动画                     |
| showLabels        | 否   | false            | 是否进入该场景后自动显示所有热点                             |
| url               | 是   |                  | 模型的url。为了提高展示性能以及缩短用户的等待时间，SDK只支持gltf和glb格式。并且推荐开发者的模型进行draco编码压缩。 |
| offset            | 否   | {x: 0, y:0, z:0} | 模型默认位置的偏移量。由于绝大部分情况模型建模的原点在模型的底部，从而在展示的时候总是偏向于上方。为了更好的用户体验通常需要模型居中展示，通过次参数进行调整 |
| hotspots          | 否   | []               | 可以配置任意数量的热点进行一些交互操作。具体的参数设置参见<u>热点配置表</u> |

### 全景设置

| 属性名称 | 必填 | 默认值     | 说明                                           |
| -------- | ---- | ---------- | ---------------------------------------------- |
| url      | 否   | ""         | 如果设置则会创建球面全景图                     |
| radius   | 否   | 800        | 设置全景图球体的半径                           |
| rotation | 否   | 0          | 全景图球体在y轴上的旋转弧度                    |
| position | 否   | [0, 0, -0] | 全景图的位置偏移，数组长度为3，对应x，y，z坐标 |

### 动画设置

动画配置为键值对形式，通常情况无需配置，只有对某些动画需要额外处理的时候才需要配置。其中key为某个动画的名称，其value值说明如下

| 属性名称 | 必填 | 默认值   | 说明 |
| -------- | ---- | -------- | ---- |
| startAt  | 否   | 0        |      |
| duration | 否   | Infinity |      |


### 光照设置

光照设置是个数组，可以设置点锥形源，平行光，环境光。不同的光有不同的配置参数。如下所示：

#### 锥形光：

| 属性名称         | 必填 | 默认值    | 说明                                                         |
| ---------------- | ---- | --------- | ------------------------------------------------------------ |
| type             | 是   | SpotLight | type必须为SpotLight                                          |
| params.color     | 否   | 0xffffff  | 颜色值，可以为数字，也可以为#开头的字符串，如“#FFFFFF”，也可以为颜色英文名称，如"white" |
| params.intensity | 否   | 1         | 光照强度                                                     |
| params.position  | 否   | [1, 1, 1] | 光源的位置，数组长度为3，对应x，y，z坐标                     |
| distance         | 否   | 0         | 光的最远照射距离，0表示无穷远                                |
| angle            | 否   | 1.57      | 设置锥角弧度大小                                             |
| decay            | 否    | 1         | 衰减率。离光越远，光照强度越弱。1为不衰减。取值为0到1之间    |

#### 平行光：

| 属性名称         | 必填 | 默认值           | 说明                                                         |
| ---------------- | ---- | ---------------- | ------------------------------------------------------------ |
| type             | 是   | DirectionalLight | type必须为DirectionalLight                                   |
| params.color     | 否   | 0xffffff         | 颜色值，可以为数字，也可以为#开头的字符串，如“#FFFFFF”，也可以为颜色英文名称，如"white" |
| params.intensity | 否   | 1                | 光照强度                                                     |
| params.position  | 否   | [1, 1, 1]        | 光源的位置，数组长度为3，对应x，y，z坐标                     |

#### 环境光：

| 属性名称         | 必填 | 默认值           | 说明                                                         |
| ---------------- | ---- | ---------------- | ------------------------------------------------------------ |
| type             | 是   | DirectionalLight | type必须为AmbientLight                                       |
| params.color     | 否   | 0xffffff         | 颜色值，可以为数字，也可以为#开头的字符串，如“#FFFFFF”，也可以为颜色英文名称，如"white" |
| params.intensity | 否   | 1                | 光照强度                                                     |

### 热点配置

热点目前支持2种交互操作，一种是模型部位的高亮。一种是场景的切换跳转。整个的热点配置是个数组，数组的每个元素对应一个热点。热点是dom元素而非WebGL绘制，因此热点始终会比模型的层级更高。具体配置如下。

| 属性名称              | 必填 | 默认值   | 说明                                                         |
| --------------------- | ---- | -------- | ------------------------------------------------------------ |
| text                  | 是   |          | 用于热点显示的文本                                           |
| position              | 是   |          | 热点相对于3D场景挂载的模型节点的位置，数组长度为3，对应x，y，z坐标 |
| parentName            | 是   |          | 热点所挂载的模型节点的网格或组的名称                         |
| events                | 是   | {}       | 用于配置热点的交互。如果是{}则不会出现任何交互操作           |
| events.click          | 否   |          | events可以设置一些交互操作名称，例如click，则交互操作在click事件触发。 |
| events.click.type     | 是   |          | 取值为highlight或者jump，分别对应模型高度操作以及场景跳转操作。 |
| events.click.color    | 否   | [1,1,1]  | 模型高亮的颜色，采用的是和着色器的颜色取值，必须是0到1之间的数字 |
| events.click.duration | 否   | 1000     | 模型高亮是一种呼吸灯的忽明忽暗效果，这个是亮变暗的时间       |
| events.click.times    | 否   | Infinity | 呼吸灯高亮次数                                               |
