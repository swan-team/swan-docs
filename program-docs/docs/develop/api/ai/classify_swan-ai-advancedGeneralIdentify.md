---
title: swan.ai.advancedGeneralIdentify
header: develop
nav: api
sidebar:  classify_swan-ai-advancedGeneralIdentify
---




**解释** ：通用物体及场景识别，即对于输入的一张图片（可正常解码，且长宽比适宜），输出图片中的多个物体及场景标签。

 
## 方法参数 
Object object

### `object`参数说明 ：

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|image|	String|是| - |图像资源地址|
|success |Function    |否 | |      接口调用成功的回调函数|
|fail |   Function|    否  | |     接口调用失败的回调函数|
|complete  |  Function  |  否   | |    接口调用结束的回调函数（调用成功、失败都会执行）|

### success 返回参数说明 :

|参数 |类型 | 说明  |
|---- | ---- | ---- |
|log_id|	Number|	唯一的log id，用于问题定位。|
|result_num|	Number|	返回结果数目，及result数组中的元素个数。|
|result|	Array|	标签结果数组|

### result 返回值说明 

|参数名 | 参数类型 |说明  |
|:---|:---|:---|:---|
|keyword|	String|	图片中的物体或场景名称|
|score|Number	|置信度，0-1|
|root|	String|	识别结果的上层标签，有部分钱币、动漫、烟酒等tag无上层标签。|

## 示例

<a href="swanide://fragment/c2ab942b5e6b9ac02739a7e70ec298c11569500914210" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/advancedGeneralIdentify.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/advancedGeneralIdentify.jpeg">
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
    advancedGeneralIdentify() {
        swan.chooseImage({
            success: res => {
                let image = res.tempFilePaths[0];
                // AI系列的api有宿主使用限制,只可在百度App中使用,建议使用时加一层判断防止代码报未知错误
                let host = swan.getSystemInfoSync().host;
                if (host === 'baiduboxapp') {
                    swan.ai.advancedGeneralIdentify({
                        image, // 暂不支持识别网络图片
                        success: res => {
                            console.log('advancedGeneralIdentify res', res.result);
                        },
                        fail: err => {
                            console.log('advancedGeneralIdentify err', err);
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
        })
    }
});
```

### 返回值示例 ：
```json
{
    "log_id": $log_id,
    "result_num": 5,
    "result": [
        {
            "score": 0.371429,
            "root": "",
            "keyword": "Shop BGM & J-Clef 카페이야기 Vol.7 (商店音乐 & J-Clef 咖啡故事 Vol.7)"
        },
        {
            "score": 0.25045,
            "root": "商品-容器",
            "keyword": "水壶"
        },
        {
            "score": 0.169905,
            "root": "商品-生活用品",
            "keyword": "功夫茶具"
        },
        {
            "score": 0.095448,
            "root": "交通工具-汽车",
            "keyword": "汽车"
        },
        {
            "score": 0.019755,
            "root": "商品-食物",
            "keyword": "咖啡"
        }
    ]
}
```

