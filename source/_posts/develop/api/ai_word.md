---
title: 词法分析
header: develop
nav: api
sidebar: ai_word
---


##  nlpLexerCustom
> 词法分析，最低支持版本 3.20.11 。
### 参数

|参数名 | 参数类型 | 是否必填 | 说明 | 
|---|---|---|---|
|text | string| 是 | 待分析文本| 
|success | Function | 否 | 接口调用成功后的回调函数 | 
|fail | Function | 否 | 接口调用失败的回调函数 | 
|complete|	Function|	否	|接口调用结束的回调函数（调用成功、失败都会执行）|

### 示例代码
```js
swan.ai.nlpLexerCustom({
    text: '百度是一家高科技公司',
    success(res) {
        console.log('success', res);
    }
});
```