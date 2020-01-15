---
title: swan.setClipboardData
header: develop
nav: api
sidebar: swan-setClipboardData
---

 

**解释**：设置系统剪贴板的内容

 
## 方法参数 

Object object

###  `object` 参数说明  

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|data  |  String  |是  | | 需要设置的内容|
|success |Function  |  否  | | 接口调用成功的回调函数|
|fail  | Function  |  否  | | 接口调用失败的回调函数|
|complete   | Function   | 否  | | 接口调用结束的回调函数（调用成功、失败都会执行）|
## 示例

 

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/clipboardData.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>




### 图片示例
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/setClipboardData.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

###  代码示例1 ：

<a href="swanide://fragment/ea39eea822a594a02b300d528c37da981574214762675" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    setClipboardData() {
        swan.setClipboardData({
            data: 'xxxxxx',
            success: () => {
                swan.showToast({
                    title: '设置成功'
                });
            },
            fail: err => {
                swan.showToast({
                    title: '设置失败'
                });
                console.log('setClipboardData fail', err);
            }
        });
    }
});
```
###  代码示例2 - 此api可实现一键复制的业务场景 ：

<a href="swanide://fragment/af0a3af2c7b2fcb5b4483791b64bb08d1575142881928" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    data: {
        url: ''
    },
    onShow() {
        swan.request({
            url: 'https://sfc.baidu.com/shopping/nianhuo/bimai',
            header: {
                'content-type': 'application/json'
            },
            method: 'POST',
            dataType: 'json',
            responseType: 'text',
            data: {
                key: 'value'
            },
            success: res => {
                this.setData('url', res.data.data.goodsList.goods[0].title)
            },
            fail: err => {
                console.log('错误码：' + err.errCode);
                console.log('错误信息：' + err.errMsg);
            }
        });
    },
    setClipboardData() {  
        swan.setClipboardData({
            data: this.getData('url'),
            success: () => {
                swan.showToast({
                    title: '一键复制成功',
                    icon: 'none'
                });
            },
            fail: err => {
                swan.showToast({
                    title: '一键复制失败',
                    icon: 'none'
                });
                console.log('setClipboardData fail', err);
            }
        });
    }
});
``` 
##  错误码
###  Android

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |

###  iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |

