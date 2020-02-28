---
title: swan.ai.plantClassify
header: develop
nav: api
sidebar:  classify_swan-ai-plantClassify
# webUrl: https://qft12m.smartapps.cn/api/plantClassify/plantClassify
---

  

**解释**：该请求用于识别一张图片，即对于输入的一张图片（可正常解码，且长宽比较合适），输出植物识别结果。


 
## 方法参数 

Object object

### `object`参数说明 ：

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|image|	String|是| - |图像资源地址|
|success |Function    |否 | |      接口调用成功的回调函数|
|fail |   Function|    否  | |     接口调用失败的回调函数|
|complete  |  Function  |  否   | |    接口调用结束的回调函数（调用成功、失败都会执行）|

### success 返回参数说明 

|参数 |类型 | 说明  |
|---- | ---- | ---- |
|log_id|	Number|	唯一的log id，用于问题定位。|
|result| Array|	识别结果数组|

### result 返回值说明 

|参数名 | 参数类型 |说明  |
|---|---|---|
|name| String|	植物名称，示例：吉娃莲。|
|score	|Number|	置信度，示例：0.5321。|


## 示例

<a href="swanide://fragment/b1bb08a3758ab15024f1af2148d41d2c1581335626529" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a> 

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/plantClassify.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/plantClassify.jpeg">
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
    plantClassify() {
        swan.chooseImage({
            success: res => {
                let image = res.tempFilePaths[0];
                // AI系列的api有宿主使用限制,只可在百度App中使用,建议使用时加一层判断防止代码报未知错误
                let host = swan.getSystemInfoSync().host;
                if (host === 'baiduboxapp') {
                    swan.ai.plantClassify({
                        image,
                        success: res => {
                            console.log('plantClassify res', res.result);
                        },
                        fail: err => {
                            console.log('plantClassify err', err);
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
    "result": [
        {
            "score": 0.33590477705002,
            "name": "荷花"
        },
        {
            "score": 0.16884732246399,
            "name": "莲花池"
        },
        {
            "score": 0.13957330584526,
            "name": "莲花"
        },
        {
            "score": 0.038642730563879,
            "name": "夏日荷花"
        },
        {
            "score": 0.037120133638382,
            "name": "荷花池"
        }
    ]
}
```
