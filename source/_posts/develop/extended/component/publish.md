---
title: 全屏发布器组件
header: develop
nav: extended
sidebar: publish
---



**解释：** 社区全屏发布器组件，不含发布服务，只含有发布界面


**属性说明**

|属性名 |类型  |默认值  |说明|
|---- | ---- | ---- |---- |
|title | String |  '' | 发布器进入后，标题栏展示的默认标题 |
|title-place-holder| String | '' | 发布器中的标题placeholder |
|title-limit | Number | 20 | 标题的最大字数限制 |
|title-min-limit | Number | -1 | 标题的最小字数限制 |
|content | String | '' | 发布器内容编辑部分，初始的内容 |
|content-place-holder | String | '' |发布器中的内容placeholder|
|content-limit | Number | 120 | 内容发布的最大字数限制 |
|content-min-limit | Number | -1 | 内容发布的最小字数限制 |
|picture-list | Array | [] |展示在用户的图片区的所有图片的列表|
|picture-limit | Number | 9 |展示在内容下方的图片的数量限制|
|picture-select-limit | Number | 9 | 用户从相册选择图片的时候，最多选择图片数量的限制 |
|show-picture-tips | Boolean | false |在图片区域下方，是否展示提示|
|picture-size-limit | Number | 1e7 |当选择多个图片时，其中最大的是否超过了此值，单位B|
|picture-size-limit | Number | 1e7 |当选择多个图片时，其中最大的是否超过了此值，单位B|
|bind:chooseImage| EventHandle | | 点击+号之后，用户选择完成图片的回调（返回临时地址，需要调用组件的人自行上传，再填充pictureList） |
|bind:delImage | EventHandle |  | 点击图片右上角的删除按钮后，会直接删除图片，并通知删除的索引|
|bind:publish | EventHandle |  | 点击提交按钮后，会回调给使用组件者|

**代码示例**

<a href="swanide://fragment/0fdfa7e3dbb1373489906e74a4ba32fb1565689497911" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```
npm install swan-solution-components-publish@1.2.17
```

```
{
    "navigationBarTitleText": "标题",
    "usingComponents": {
        "publish": "swan-solution-components-publish"
    }
}
```

```
<publish></publish>
```
