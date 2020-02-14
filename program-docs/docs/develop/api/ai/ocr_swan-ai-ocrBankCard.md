---
title: swan.ai.ocrBankCard
header: develop
nav: api
sidebar: ocr_swan-ai-ocrBankCard
---

 

**解释**：识别银行卡并返回卡号、发卡行和卡片类型。

 
## 方法参数

Object object

### `object`参数说明 ：

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|image | String | 是   |- | 图像资源地址|
|success |Function    |否 | |      接口调用成功的回调函数|
|fail |   Function|    否  | |     接口调用失败的回调函数|
|complete  |  Function  |  否   | |    接口调用结束的回调函数（调用成功、失败都会执行）|

### success 返回参数说明 ：

|参数 | 类型 | 说明  |
|:---- |:---- |:---- |
|log_id | Number |请求标识码，随机数，唯一。|
|result | Object |返回结果|

### result 返回值说明 

|参数名 | 参数类型 |说明  |
|:---|:---|:---|:---|
|bank_card_number  |  String  |银行卡卡号 |
|bank_name |String | 银行名，不能识别时为空 。|
|bank_card_type | Number | 银行卡类型，0: 不能识别; 1: 借记卡; 2: 信用卡 。|

## 示例

<a href="swanide://fragment/e4049df2498a67bc35436694b4505bd81581327527167" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/ocrBankCard.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>


### 图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/ocrBankCard.gif">
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
    ocrBankCard() {
        swan.chooseImage({
            success: res => {
                let image = res.tempFilePaths[0];
                // AI系列的api有宿主使用限制,只可在百度App中使用,建议使用时加一层判断防止代码报未知错误
                let host = swan.getSystemInfoSync().host;
                if (host === 'baiduboxapp') {
                    swan.ai.ocrBankCard({
                        image, // 暂不支持识别网络图片
                        success: res => {
                            console.log('ocrBankCard res', res.result);
                        }，
                        fail: err => {
                            console.log('ocrBankCard err', err);
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
    "result": {
        "bank_card_number": "622500000000000",
        "bank_name": "招商银行",
        "bank_card_type": 1
    }
}
```