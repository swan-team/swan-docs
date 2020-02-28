---
title: swan.ai.logoClassify
header: develop
nav: api
sidebar:  classify_swan-ai-logoClassify
# webUrl: https://qft12m.smartapps.cn/api/logoClassify/logoClassify
---

  

**解释**：用于检测和识别图片中的品牌 LOGO 信息。即对于输入的一张图片（可正常解码，且长宽比适宜），输出图片中 LOGO 的名称、位置和置信度。 当效果欠佳时，可以建立子库（在控制台创建应用并申请建库）并通过调用 logo 入口接口完成自定义 logo 入库，提高识别效果。



## 方法参数 

Object object

### `object`参数说明 ：

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|image|	String|是| - |图像资源地址|
|custom_lib	|Boolean	|否|	-|是否只检索用户子库，true则只检索用户子库，false(默认)为检索底库+用户子库。|
|success |Function    |否 | |      接口调用成功的回调函数|
|fail |   Function|    否  | |     接口调用失败的回调函数|
|complete  |  Function  |  否   | |    接口调用结束的回调函数（调用成功、失败都会执行）|

### success 返回参数说明 ：

|参数 |类型 | 说明  |
|---- | ---- | ---- |
|log_id|	Number|	唯一的log id，用于问题定位。|
|result_num|	Number|	识别结果数，标识返回结果数目。|
|result|	Array|	返回结果数组，每一项为一个识别出的logo。|


### result 返回值说明 

|参数名 | 参数类型 |说明  |
|:---|:---|:---|:---|
|type|     Number| type=0 为1千种高优商标识别结果；type=1 为2万类logo库的结果；其它type为自定义logo库结果。|
|name|     String| 识别的品牌名称|
|probability|     Number| 分类结果置信度（0--1.0）|
|location|	Object|	位置信息（左起像素位置、上起像素位置、像素宽、像素高）|

### location 返回值说明 

|参数名 | 参数类型 |说明  |
|:---|:---|:---|:---|
|left|	Number|	左起像素位置|
|top|		Number|	上起像素位置|
|width|	Number|	像素宽|
|height|	Number|	像素高|

## 示例

<a href="swanide://fragment/ef85d60db823f65d8a8bde35b613b4271581335376758" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/logoClassify.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/logoClassify.jpeg">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

 

### 代码示例 


```js
Page({
    logoClassify() {
        swan.chooseImage({
            success: res => {
                let image = res.tempFilePaths[0];
                // AI系列的api有宿主使用限制,只可在百度App中使用,建议使用时加一层判断防止代码报未知错误
                let host = swan.getSystemInfoSync().host;
                if (host === 'baiduboxapp') {
                    swan.ai.logoClassify({
                        image,
                        custom_lib: false,
                        success: res => {
                            console.log('dishClassify res', res.result);
                        },
                        fail: err => {
                            console.log('dishClassify err', err);
                        }
                    });
                }
                else {
                    swan.showToast({
                        title: '此api目前仅可在百度App上使用',
                        icon: 'none'
                    });
                }
            }
        });
    }
});
```

### 返回值示例 ：
```json
{
    "log_id": $log_id,
    "result_num": 1,
    "result": [
        {
            "type": 0,
            "name": "百度",
            "probability": 0.99999850988388,
            "location": {
                "width": 160,
                "top": 88,
                "left": 201,
                "height": 165
            }
        }
    ]
}
```
