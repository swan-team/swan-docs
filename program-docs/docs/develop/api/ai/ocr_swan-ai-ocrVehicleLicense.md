---
title: swan.ai.ocrVehicleLicense
header: develop
nav: api
sidebar: ocr_swan-ai-ocrVehicleLicense
# webUrl: https://qft12m.smartapps.cn/subPackages/apiPackage/pages/ocrVehicleLicense/ocrVehicleLicense
---



**解释** ：对机动车行驶证正本所有关键字段进行识别。

 
## 方法参数 

Object object

### `object`参数说明 ：

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|image | String | 是   |- | 图像资源地址|
|detect_direction |Boolean | 否   | | 是否检测图像旋转，可检验图像的选装方向和旋转角度。<p>  ·  true：检测旋转角度并矫正识别。针对摆放情况不可控制的情况建议本参数置为true；<p>  ·   false:不检测旋转角度，默认不检测。|
|accuracy	 | String   |否 |- | normal 使用快速服务，1200ms左右时延；缺省或其它值使用高精度服务，1600ms左右时延。|
|success |Function    |否 | |      接口调用成功的回调函数|
|fail |   Function|    否  | |     接口调用失败的回调函数|
|complete  |  Function  |  否   | |    接口调用结束的回调函数（调用成功、失败都会执行）|

###  success 返回参数说明 ：

|参数 | 类型 | 说明  |
|:---- |:---- |:---- |
|log_id | Number |唯一的log id，用于问题定位。|
| words_result_num  |  Number  |识别结果数，表示words_result的元素个数。 |
|words_result |  Object  | 识别结果 |

###  words_result 返回值说明 

|参数名 | 参数类型 |说明  |
|:---|:---|:---|:---|
| 品牌型号 | Object | 品牌型号|
| 发证日期 | Object | 发证日期|
| 使用性质 | Object | 使用性质|
| 发动机号码 | Object | 发动机号码|
| 号牌号码 | Object | 号牌号码|
| 所有人 | Object | 所有人|
| 住址 | Object | 住址|
| 注册日期 | Object | 注册日期|
| 车辆识别代号 | Object | 车辆识别代号|
| 车辆类型 | Object | 车辆类型|

###  品牌型号、发证日期、使用性质、发动机号码、号牌号码、所有人、住址、注册日期、车辆识别代号、车辆类型 返回值说明 

|参数名 | 参数类型 |说明  |
|:---|:---|:---|:---|
|words | String | 识别结果字符串 |


## 示例

 
<a href="swanide://fragment/0a5cfee4dcbf3a6259d593f65af375791581328164814" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_ocrVehicleLicense.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/ocrVehicleLicense.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/ocrVehicleLicense.jpeg">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div> 

### 代码示例 


```js
Page({
    ocrVehicleLicense() {
        swan.chooseImage({
            success: res => {
                let image = res.tempFilePaths[0];
                // AI系列的api有宿主使用限制,只可在百度App中使用,建议使用时加一层判断防止代码报未知错误
                let host = swan.getSystemInfoSync().host;
                if (host === 'baiduboxapp') {
                    swan.ai.ocrVehicleLicense({
                        image, // 暂不支持识别网络图片
                        detect_direction: true,
                        accuracy: normal
                        success: res => {
                            console.log('ocrVehicleLicense res', res.words_result);
                        },
                        fail: err => {
                            console.log('ocrVehicleLicense err', err);
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

### 返回值示例  
```json
{
    "log_id": $log_id,
    "direction": 0,
    "words_result_num": 10,
    "words_result": {
        "品牌型号": {
            "words": "保时捷GT37182RUCRE"
        },
        "发证日期": {
            "words": "20160104"
        },
        "使用性质": {
            "words": "非营运"
        },
        "发动机号码": {
            "words": "20832"
        },
        "号牌号码": {
            "words": "苏A001"
        },
        "所有人": {
            "words": "圆圆"
        },
        "住址": {
            "words": "南京市江宁区弘景大道"
        },
        "注册日期": {
            "words": "20160104"
        },
        "车辆识别代号": {
            "words": "HCE58"
        },
        "车辆类型": {
            "words": "小型轿车"
        }
    }
}
}
```


