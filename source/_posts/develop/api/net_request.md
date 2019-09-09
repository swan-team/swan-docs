---
title: 请求
header: develop
nav: api
sidebar: net_request
---

## swan.request

**解释**：发起网络请求，请参考[使用注意事项](http://smartprogram.baidu.com/docs/develop/api/net_rule/)进行开发。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/request.png"  class="demo-qrcode-image" />

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|最低支持版本|
|---- | ---- | ---- | ----|----|----|
|url |String | 是   |-|    开发者服务器接口地址|-|
|data  |  Object/String  | 否  |-| 请求的参数|-|
|header | Object | 否    |-|   设置请求的 header，header 中不能设置 Referer。|-|
|method | String | 否  | GET （大写）|有效值：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE/CONNECT(仅 Andriod 支持)。|-|
|dataType   | String | 否  | json  | 有效值：string,json。 如果设为 json，会尝试对返回的数据做一次 JSON.parse 。|-|
|responseType   | String | 否  | text  | 设置响应的数据类型, 合法值：text、arraybuffer。|1.11.20|
|success |Function    |否 |-|      收到开发者服务成功返回的回调函数。|-|
|fail |   Function|    否  |-|     接口调用失败的回调函数。|-|
|complete  |  Function  |  否   |-|    接口调用结束的回调函数（调用成功、失败都会执行）。|-|


**success 返回参数说明**：


|参数 | 类型 | 说明  |
|---- | ---- | ---- |
|data  |  Object/String  | 开发者服务器返回的数据|
|statusCode | Number | 开发者服务器返回的 HTTP 状态码|
|header | Object | 开发者服务器返回的 HTTP Response Header|

#### **data 数据说明**：

最终发送给服务器的数据都是 String 类型，如果传入的 data 不是 String 类型，会被转换成 String 。转换规则如下：
1、对于 GET 方法的数据，会将数据转换成 query string（encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...）；
2、对于 POST 方法且 header['content-type'] 为 application/json 的数据，会对数据进行 JSON 序列化；
3、对于 POST 方法且 header['content-type'] 为 application/x-www-form-urlencoded 的数据，会将数据转换成 query string （encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...）。


<a href="swanide://fragment/7ceecfa2db5da561e3f91a4bd35a8e241567708797326" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

**示例**


**在 js 文件中**

```js
swan.request({
    url: 'https://smartprogram.baidu.com/xxx', // 仅为示例，并非真实的接口地址
    header: {
        'content-type': 'application/json'
    },
    method: 'POST',
    dataType: 'JSON',
    responseType: 'text',
    data: {
        key: 'value'
    },
    success: function (res) {
        console.log(res.data);
    },
    fail: function (err) {
        console.log('错误码：' + err.errCode);
        console.log('错误信息：' + err.errMsg);
    }
});
```

**返回值**：

返回一个 RequestTask 对象，通过 RequestTask，可中断请求任务。

##  RequestTask

**方法列表**：

|方法 | 参数 | 说明  |
|---- | ---- | ---- |
|abort  |      | 中断请求任务 |

**示例**

```js
const RequestTask = swan.request({
    url: 'https://smartprogram.baidu.com/xxx', // 仅为示例，并非真实的接口地址
    header: {
        'content-type': 'application/json'
    },
    method: 'GET',
    dataType: 'JSON',
    responseType: 'text',
    success: function (res) {
        console.log(res.data)
    },
    fail: function (err) {
        console.log('错误码：' + err.errCode);
        console.log('错误信息：' + err.errMsg);
    }
});

//取消请求任务
RequestTask.abort();
```

**说明**
*  content-type 默认为 'application/json'；
*  url 中不能有端口。

<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法&nbsp;&nbsp;|
|1001|执行失败|

**iOS**

|错误码|说明|
|--|--|
|202|解析失败，请检查调起协议是否合法|
|errorCode为4|URL无效| -->