---
title: swan.ai.textReview
header: develop
nav: api
sidebar: text_swan-ai-textReview
---



**解释**：运用业界领先的深度学习技术，判断一段文本内容是否符合网络发文规范，实现自动化、智能化的文本审核。



## 方法参数

Object object

### `object`参数说明 ：

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|content | String | 是  | | 待审核文本，UTF-8，不可为空，不超过20000字节。 |
|success |Function    |否 | |      接口调用成功的回调函数|
|fail |   Function|    否  | |     接口调用失败的回调函数|
|complete  |  Function  |  否   | |    接口调用结束的回调函数（调用成功、失败都会执行）|

### success 返回参数说明 

|参数 | 类型 | 说明  |
|:---- |:---- |:---- |
|log_id | Number |唯一的log id，用于问题定位。|
|result| Object| 审核结果详情 |

### result 返回参数说明 

|参数 | 类型 | 说明  |
|:---- |:---- |:---- |
| spam  |  Number  |请求中是否包含违禁，0表示非违禁，1表示违禁，2表示建议人工复审 。|
|reject |  Array  | 审核未通过的类别列表与详情 |
|review | Array | 待人工复审的类别列表与详情 |
|pass |  Array  | 审核通过的类别列表与详情 |

### reject/pass/review 返回值说明 

|参数 | 类型 | 说明  |
|:---- |:---- |:---- |
|label | Number | 请求中的违禁类型 |
|score | Number | 违禁检测分，范围 0~1，数值从低到高代表风险程度的高低 。|
|hit | Array | 违禁类型对应命中的违禁词集合，可能为空 。|

### 违禁labels类型说明 ：

|值 | 说明  |
|---- | ---- |
|1 |暴恐违禁|
|2 |文本色情|
|3 |政治敏感|
|4 |恶意推广|
|5 |低俗辱骂|

## 示例

 
<a href="swanide://fragment/54968a2300bdceb92aa80c0e3f8bdbac1581328359072" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/textReview.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/textReview.gif">
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
    textReview() {
        // AI系列的api有宿主使用限制,只可在百度App中使用,建议使用时加一层判断防止代码报未知错误
        let host = swan.getSystemInfoSync().host;
        if (host === 'baiduboxapp') {
            swan.ai.textReview({
                content: '',
                success: res => {
                  console.log('textReview res', res.result.spam); // 0 表示审核通过
                },
                fail: err => {
                  console.log('textReview err', err);
                }
            })
        }
        else {
          swan.showToast({
              title: '此api目前仅可在百度App上使用',
              icon: 'none'
          });
        }
    }
});
```

### 返回值示例 ：
```json
{
  "result": {
    "spam": 0,
      "reject": [],
      "review": [],
      "pass": [
          {"label":1,"score":0.3,"hit":[]},
          {"label":2,"score":0.33,"hit":[]},
          {"label":3,"score":0.2,"hit":[]},
          {"label":4,"score":0.31,"hit":[]},
          {"label":5,"score":0.19,"hit":[]},
      ]
  },
  "log_id": $log_id
}
```


