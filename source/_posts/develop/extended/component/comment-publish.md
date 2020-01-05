---
title: 扩展组件
header: develop
nav: component 
sidebar: comment-publish
---

## 半屏发布器组件

**解释：** 社区半屏发布器组件


**属性说明**

|属性名 |类型  |默认值  |说明|
|---- | ---- | ---- |---- |
|contentPlaceholder | String | 请输入内容 | 内容提示占位文案 |
|moduleList | Array |  | 显示模块list |
|emojiPath | String |  |设置自定义表情配置路径（NA版支持，降级版不支持）|
|foucs | Boolean | false |true代表调起，false则不调起(NA版不支持，降级版支持)|
|requestUrl | String |  |由于小程序图片预览只能是http或https，所以上传图片需要先上传到服务器，如果isUpLoadImg未true，则必填(NA版不支持，降级版支持)|
|params | Object |  |上传图片需要传的参数(NA版不支持，降级版支持)|
|bind:browseMode | EventHandle |  | 当输入框失焦后会触发事件(NA版不支持，降级版支持) |
|bind:relaseComment | EventHandle |  | 点击发表按钮时触发的事件 |
|bind:previewImage | EventHandle |  | 点击输入框中已经上传的图片时触发的事件(NA版不支持，降级版支持) |

**代码示例**

<a href="swanide://fragment/0f4da3bed2865dd1fc596bd7119a947f1567665768064" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```
npm install swan-solution-components-comment-publisher@1.1.7
```

```
{
    "navigationBarTitleText": "标题",
    "usingComponents": {
        "comment-publish": "swan-solution-components-comment-publisher"
    }
}
```

```
<comment-publish></comment-publish>
```
