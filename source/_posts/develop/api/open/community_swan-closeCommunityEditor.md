---
title: swan.closeCommunityEditor
header: develop
nav: api
sidebar: community_swan-closeCommunityEditor
---
 

**解释**： 关闭原生全屏内容发布器

**方法参数**：Object object

**emojiPath 参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success  |  Function  | 否 | |发布成功的回调函数|
|fail  |  Function  | 否 | |发布失败的回调函数|
|complete  |  Function  | 否 | |接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：

<a href="swanide://fragment/063a4b74f84b571ffff57f805a1f15d41563779692092" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
swan.openCommunityEditor({
    contentPlaceholder: '在这里编辑正文',
    titlePlaceholder: '在这里编辑标题',
    moduleList: ['image', 'title', 'emoji'],
    imgParame: {
        maxNum: 3,
        ratio: 0.5
    },
    navBarTitleText: '原生全屏内容发布器',
    emojiPath: '../../emojidata',
    success: res => {
        console.log('openCommunityEditor success', res);
        swan.showToast({
            title: '关闭原生全屏内容发布器'
        });
        swan.closeCommunityEditor();
    },
    fail: err => {
        console.log('openCommunityEditor fail', err);
    }
})
```