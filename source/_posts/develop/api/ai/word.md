---
title: swan.ai.nlpLexerCustom
header: develop
nav: api
sidebar: word
---


   


>基础库 3.20.11 开始支持，低版本需做兼容处理。

**解释**：词法分析，提供分词、词性标注、专名识别三大功能。

 
## 方法参数

Object object

### `object`参数说明 

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|text | string| 是 | | 待分析文本| 
|success | Function | 否 | | 接口调用成功后的回调函数 | 
|fail | Function | 否 | | 接口调用失败的回调函数 | 
|complete|	Function|	否	| |接口调用结束的回调函数（调用成功、失败都会执行）|

### success 返回参数说明  

|参数名 | 参数类型 | 说明 |  
|---|---|---|
|log_id| Number|唯一的log id，用于问题定位。|
|text | string| 原始单条请求文本| 
|items | Array| 词汇数组，每个元素对应结果中的一个词。| 

### items 参数说明 

|参数名 | 参数类型 | 说明 |  
|---|---|---|
|item | string| 词汇的字符串| 
|ne | string| 命名实体类型，命名实体识别算法使用。词性标注算法中，此项为空串。| 
|pos | string| 词性，词性标注算法使用。命名实体识别算法中，此项为空串。| 
|byte_offset | number| 在text中的字节级offset（使用GBK编码）| 
|byte_length | number| 字节级length（使用GBK编码）| 
|uri | string| 链指到知识库的URI，只对命名实体有效。对于非命名实体和链接不到知识库的命名实体，此项为空串。| 
|formal | string|词汇的标准化表达，主要针对时间、数字单位，没有归一化表达的，此项为空串。| 
|basic_words | Array| 基本词成分| 
|loc_details | Array| 地址成分，非必需，仅对地址型命名实体有效，没有地址成分的，此项为空数组。| 

## 代码示例

<a href="swanide://fragment/395274968b17a001c80d19e65418103f1574672851842" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_nlpLexerCustom.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/nlpLexerCustom.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### 代码示例 



* 在 swan 文件中

```html
<view class="wrap">
    <view class="card-area">
        <view class="top-description border-bottom">识别内容</view>
        <view class="display-area">{{content}}</view>
    </view>
    <view s-if="{{hasResult}}" class="card-area bottom">
        <view class="top-description border-bottom">识别结果</view>
        <view s-if="{{sucResult}}">
             <view s-for="item in result" class="list-area border-bottom">
            <view class="list-item">
                <text class="list-item-key-6">词汇的字符串:</text>
            <text class="list-item-value">{{item.item}}</text>
            </view>
            <view class="list-item">
            <view class="list-item-key-6">命名实体类型:</view>
            <view class="list-item-value">{{item.ne !== '' ? item.ne : '暂无'}}</view>
            </view>
            <view class="list-item">
                <view class="list-item-key-6">词性:</view>
                <view class="list-item-value">{{item.pos !== '' ? item.pos : '暂无'}}</view>
            </view>
        </view>
        </view>
        <view s-else>
            <view class="result-area-fail">识别出错，请到控制台查看信息</view>
        </view>
    </view>
        <view class="swan-security-padding-bottom flex-button">
        <button type="primary" class="" bindtap="nlpLexerCustom">
            nlpLexerCustom
        </button>
    </view>
</view>
```

* 在 js 文件中

```javascript
Page({
    data: {
        content: '百度是一家高科技公司',
        result: '',
        hasResult: false,
        sucResult: false
    },
    nlpLexerCustom() {
        const text = this.getData('content');
        let that = this;
        swan.ai.nlpLexerCustom({
            text,
            success(res) {
                console.log('ai.nlpLexerCustom success', res);
                that.setData({
                    'result': res.items,
                    'sucResult': true
                })
            },
            fail(err) {
                console.log('ai.nlpLexerCustom fail', err);
                that.setData({
                    'sucResult': false
                })
            },
            complete() {
                that.setData('hasResult', true)
            }
        });
    }
});
```

### 返回示例 

```js
{
      "text":"百度是一家高科技公司",
      "items":[
         {
           "byte_length":4,
           "byte_offset":0,
           "formal":"",
           "item":"百度",
           "ne":"ORG",
           "pos":"",
           "uri":"",
           "loc_details":[ ],
           "basic_words":["百度"]
         },
         {
           "byte_length":2,
           "byte_offset":4,
           "formal":"",
           "item":"是",
           "ne":"",
           "pos":"v",
           "uri":"",
           "loc_details":[ ],
           "basic_words":["是"]
         },
         {
           "byte_length":4,
           "byte_offset":6,
           "formal":"",
           "item":"一家",
           "ne":"",
           "pos":"m",
           "uri":"",
           "loc_details":[ ],
           "basic_words":["一","家"]
         },
         {
           "byte_length":6,
           "byte_offset":10,
           "formal":"",
           "item":"高科技",
           "ne":"",
           "pos":"n",
           "uri":"",
           "loc_details":[ ],
           "basic_words":["高","科技"]
         },
         {
           "byte_length":4,
           "byte_offset":16,
           "formal":"",
           "item":"公司",
           "ne":"",
           "pos":"n",
           "uri":"",
           "loc_details":[ ],
           "basic_words":["公司"]
         }
      ]
}
```
