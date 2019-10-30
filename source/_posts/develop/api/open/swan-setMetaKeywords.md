---
title: swan.setMetaKeywords
header: develop
nav: api
sidebar: swan-setMetaKeywords
---
 

> 不推荐使用。

**解释**： 设置 web 版小程序 keywords meta 信息。此方法为 web 版小程序专用方法，使用前需判断方法是否存在。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
| content |  String  |是 | | 需要设置的 keywords 内容|
|success |Function  |  否  | | 接口调用成功的回调函数|
|fail  | Function  |  否 || 接口调用失败的回调函数|
|complete   | Function   | 否 || 接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：

<a href="swanide://fragment/6bd9438e46899f7bb13a676cf457256f1559045708714" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="setMetaKeywords">setMetaKeywords</button>
</view>
```

* 在 js 文件中

```js
Page({
    onShow() {
        swan.setMetaKeywords({
            content: '小程序, 关键字',
            success: res => {
                console.log('setMetaKeywords success', res);
            },
            fail: err => {
                console.log('setMetaKeywords fail', err);
            }
        });
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}
```


