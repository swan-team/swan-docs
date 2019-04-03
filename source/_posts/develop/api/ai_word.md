---
title: 词法分析
header: develop
nav: api
sidebar: ai_word
---


##  swan.ai.nlpLexerCustom


>基础库 3.20.11 开始支持，低版本需做兼容处理。

**解释**：词法分析，提供分词、词性标注、专名识别三大功能。


**方法参数：**Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|text | string| 是 |-| 待分析文本| 
|success | Function | 否 |-| 接口调用成功后的回调函数 | 
|fail | Function | 否 |-| 接口调用失败的回调函数 | 
|complete|	Function|	否	|-|接口调用结束的回调函数（调用成功、失败都会执行）|

**返回参数说明**

|参数名 | 参数类型 | 说明 |  
|---|---|---|
|text | string| 原始单条请求文本| 
|items | Array| 词汇数组，每个元素对应结果中的一个词。| 

**items 参数说明**

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



**示例代码**
```js
swan.ai.nlpLexerCustom({
    text: '百度是一家高科技公司',
    success(res) {
        console.log('success', res);
    }
});
```

**返回示例**

```
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
