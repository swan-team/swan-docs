### swan.request()

发起网络请求。

```js
swan.request(opts)
```

**参数值：**

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|
|url|string||是|开发者服务器接口地址|
|data|Object<span class="vsplit"></span>string<span class="vsplit"></span>ArrayBuffer||否|请求的参数|
|header|Object||否|HTTP 请求的 Header，Header 中不能设置 Referer。`content-type` 默认为 `application/json`|
|method|string|GET（需大写）|否|HTTP 请求方法|
|dataType|string|json|否|返回的数据格式|
|responseType|string|text|否|响应的数据类型|
|success|function||否|接口调用成功的回调函数|
|fail|function||否|接口调用失败的回调函数|
|complete|function||否|接口调用完成的回调函数（接口成功、失败都会执行）|

method 合法值：

|属性|描述|
|-|-|
|OPTIONS|HTTP 请求 OPTIONS （iOS 暂不支持）|
|GET|HTTP 请求 GET|
|HEAD|HTTP 请求 HEAD|
|POST|HTTP 请求 POST|
|PUT|HTTP 请求 PUT|
|DELETE|HTTP 请求 DELETE|

dataType 合法值：

|属性|描述|
|-|-|
|json|返回的数据为 JSON，返回后会对返回的数据进行一次 JSON.parse|
|其他|不对返回的内容进行 JSON.parse|

responseType 合法值：

|属性|描述|
|-|-|
|text|响应的数据为文本|
|arraybuffer|响应的数据为 ArrayBuffer|

**返回值：**

`Object` 类型的对象：

|属性|类型|描述|
|-|-|-|
|RequestTask|Object|RequestTask 实例对象|

`success` 回调函数：

形如 `function (res) {...}`，其中：

|属性|类型|描述|
|-|-|-|
|res.data|Object<span class="vsplit"></span>String<span class="vsplit"></span>ArrayBuffer|开发者服务器返回的数据|
|res.statusCode|number|开发者服务器返回的 HTTP 状态码|
|res.header|Object|开发者服务器返回的 HTTP Response Header|


**注意：**

1、content-type 默认为 application/json。
2、url 中不能有端口配置。

