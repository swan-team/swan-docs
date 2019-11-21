---
title: swan.setTabBarItem
header: develop
nav: api
sidebar: tabbar_swan-setTabBarItem
---

 

**解释**：动态设置 tabBar 某一项的内容

**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|index |Number  |是| | tabBar的哪一项，从左边算起。|
|text |String  |否| |tab 上按钮文字|
|iconPath |String |否| | 图片绝对路径，icon 大小限制为 40KB，建议尺寸为 81px * 81px，当 position 为 top 时，此参数无效，不支持网络图片。|
|selectedIconPath |String |否| | 选中时的图片的绝对路径，icon 大小限制为 40KB，建议尺寸为 81px * 81px ，当`position`为 top 时，此参数无效。|
|success| Function |   否 | |  接口调用成功的回调函数|
|fail   | Function  |  否  | | 接口调用失败的回调函数|
|complete  |  Function  |  否 | |  接口调用结束的回调函数（调用成功、失败都会执行）|


**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/settabbaritem.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：

<a href="swanide://fragment/8b445d78cbdabc8066c1dbec707dbefd1574138075367" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="setTabBarStyle">setTabBarStyle</button>
</view>
```

* 在 js 文件中

```js
Page({
    setTabBarItem() {
        swan.setTabBarItem({
            index: 0,
            text: '替换文本',
            iconPath: '/images/API_normal.png',
            selectedIconPath: '/images/API_selected.png',
            success: function () {
                console.log('setTabBarItem success');
            },
            fail: function (err) {
                console.log('setTabBarItem fail', err);
            }
        });
    }
});
```


#### 错误码

* Andriod 

|错误码|说明|
|--|--|
|1001|执行失败 |

* iOS 

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。|
|1002|超过icon文件最大值|


