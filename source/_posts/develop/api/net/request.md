---
title: swan.request
header: develop
nav: api
sidebar: request
---

 

**解释**：发起网络请求，请参考[使用注意事项](https://smartprogram.baidu.com/docs/develop/api/net/net_rule/)进行开发。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/request.png"  class="demo-qrcode-image" />

**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|最低支持版本|
|---- | ---- | ---- | ----|----|----|
|url |String | 是   | |    开发者服务器接口地址| |
|data  |  Object/String  | 否  | | 请求的参数| |
|header | Object | 否    | |   设置请求的 header，header 中不能设置 Referer。| |
|method | String | 否  | GET （大写）|有效值：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE/CONNECT(仅 Andriod 支持)。| |
|dataType   | String | 否  | json  | 有效值：string,json。 如果设为 json，会尝试对返回的数据做一次 JSON.parse 。| |
|responseType   | String | 否  | text  | 设置响应的数据类型, 有效值：text、arraybuffer。|1.11.20|
|success |Function    |否 | |      收到开发者服务成功返回的回调函数。| |
|fail |   Function|    否  | |     接口调用失败的回调函数。| |
|complete  |  Function  |  否   | |    接口调用结束的回调函数（调用成功、失败都会执行）。| ||


**success 返回参数说明**：


|参数 | 类型 | 说明  |
|---- | ---- | ---- |
|data  |  Object/String  | 开发者服务器返回的数据|
|statusCode | Number | 开发者服务器返回的 HTTP 状态码|
|header | Object | 开发者服务器返回的 HTTP Response Header|


**fail 返回参数说明**：

* Andriod 

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法&nbsp;&nbsp;|
|1001|执行失败|

* iOS 

|错误码|说明|
|--|--|
|202|解析失败，请检查调起协议是否合法|
|errorCode为4|URL无效| 

#### **data 数据说明**：

最终发送给服务器的数据都是 String 类型，如果传入的 data 不是 String 类型，会被转换成 String 。转换规则如下：
1、对于 GET 方法的数据，会将数据转换成 query string（encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...）；
2、对于 POST 方法且 header['content-type'] 为 application/json 的数据，会对数据进行 JSON 序列化；
3、对于 POST 方法且 header['content-type'] 为 application/x-www-form-urlencoded 的数据，会将数据转换成 query string （encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...）。

**图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/request.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例1 - post的header['content-type'] 为 application/json**：
 
<a href="swanide://fragment/b1c6cd798117428ccb4683c12edfe5051573992468342" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<button bindtap="request">点击请求数据</button>
```

* 在 js 文件中

```js
Page({
    data: { },
    request() {
        swan.request({
            url: 'https://sfc.baidu.com/shopping/nianhuo/bimai',
            header: {
                'content-type': 'application/json'
            },
            method: 'POST',
            dataType: 'json',
            responseType: 'text',
            data: {
                key: 'value'
            },
            success: res => {
                console.log(res.data);
            },
            fail: err => {
                console.log('错误码：' + err.errCode);
                console.log('错误信息：' + err.errMsg);
            }
        });
    }
});
```

**代码示例2 - post的header['content-type'] 为 application/x-www-form-urlencoded**：
 
<a href="swanide://fragment/238d903105a27ead9347e7a78491979d1575441394601" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<button bindtap="request">点击请求数据</button>
```

* 在 js 文件中

```js
Page({
    data: { },
    request() {
        swan.request({
            url: 'https://sfc.baidu.com/shopping/nianhuo/bimai',
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            method: 'POST',
            dataType: 'json',
            responseType: 'text',
            data: {
                key: 'value'
            },
            success: res => {
                console.log(res.data);
            },
            fail: err => {
                console.log('错误码：' + err.errCode);
                console.log('错误信息：' + err.errMsg);
            }
        });
    }
});
```

**代码示例3 - post的header中携带cookie**：
 
<a href="swanide://fragment/9f33e070432787925131f55e8cdbad0d1576323297996" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<button bindtap="request">点击请求数据</button>
```

* 在 js 文件中

```js
Page({
    data: { },
    request() {
        let cuid = '';
        swan.request({
            url: 'https://sfc.baidu.com/shopping/nianhuo/bimai',
            header: {
                'content-type': 'application/x-www-form-urlencoded',
                'cookie': 'BAIDUCUID=' + cuid
            },
            method: 'POST',
            dataType: 'json',
            responseType: 'text',
            data: {
                key: 'value'
            },
            success: res => {
                console.log(res.data);
            },
            fail: err => {
                console.log('错误码：' + err.errCode);
                console.log('错误信息：' + err.errMsg);
            }
        });
    }
});
```

**代码示例4 - post的dataType为string**：
 
<a href="swanide://fragment/c1d2a9d6e654e688b5560b0932d2784e1575441611330" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<button bindtap="request">点击请求数据</button>
```

* 在 js 文件中

```js
Page({
    data: { },
    request() {
        swan.request({
            url: 'https://sfc.baidu.com/shopping/nianhuo/bimai',
            header: {
                'content-type': 'application/json'
            },
            method: 'POST',
            dataType: 'string',
            responseType: 'text',
            data: {
                key: 'value'
            },
            success: res => {
                console.log(res.data);
            },
            fail: err => {
                console.log('错误码：' + err.errCode);
                console.log('错误信息：' + err.errMsg);
            }
        });
    }
});
```

**代码示例5 - post的data为string**：
 
<a href="swanide://fragment/8bcef88f7b2552027fa0b59ac6ea231a1575442423461" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<button bindtap="request">点击请求数据</button>
```

* 在 js 文件中

```js
Page({
    data: {
        loading: false
    },
    request() {
        this.setData('loading', true);
        swan.request({
            url: 'https://sfc.baidu.com/shopping/nianhuo/bimai',
            header: {
                'content-type': 'application/json'
            },
            method: 'POST',
            dataType: 'json',
            responseType: 'text',
            data: '美食酒水',
            success: res => {
                console.log('request success', res);
                swan.showModal({
                    title: '请求到的数据',
                    content: JSON.stringify(res.data.data),
                    showCancel: false
                });
            },
            fail: err => {
                swan.showToast({
                    title: JSON.stringify(err)
                });
                console.log('request fail', err);
            },
            complete: () => {
                this.setData('loading', false);
                console.log('request complete');
            }
        });
    }
});

```

**代码示例6 - post的responseType为arraybuffer**：
 
<a href="swanide://fragment/c97a64395a631f0cb2cb141203d0803b1575442201289" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<button bindtap="request">点击请求数据</button>
```

* 在 js 文件中

```js
Page({
    data: { },
    request() {
        swan.request({
            url: 'https://sfc.baidu.com/shopping/nianhuo/bimai',
            header: {
                'content-type': 'application/json'
            },
            method: 'POST',
            dataType: 'arraybuffer',// 一般会将返回数据转化为BASE64编码格式
            responseType: 'text',
            data: {
                key: 'value'
            },
            success: res => {
                console.log(res.data);
            },
            fail: err => {
                console.log('错误码：' + err.errCode);
                console.log('错误信息：' + err.errMsg);
            }
        });
    }
});
```

**代码示例7 - get请求**：
 
<a href="swanide://fragment/b5e29a69ab7d1fead7844bf393406f8d1574929147853" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<button bindtap="request">点击请求数据</button>
```

* 在 js 文件中

```js
Page({
    data: { },
    request() {
        swan.request({
            url: 'https://apis.baidu.com/heweather/weather/free?city=beijing',
            method: 'GET', 
            success: res => {
                console.log('request success', res);
                swan.showModal({
                    title: '请求到的数据',
                    content: JSON.stringify(res),
                    showCancel: false
                });
            },
            fail: err => {
                swan.showToast({
                    title: JSON.stringify(err)
                });
                console.log('request fail', err);
            },
            complete: () => {
                this.setData('loading', false);
                console.log('request complete');
            }
        });
    }
});
```

**代码示例8 - promise写法保障request的请求顺序**：

<a href="swanide://fragment/bf43efd15ae91588292ba1286286db1d1574349912843" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

**在 js 文件中**

```js
Page({
    data: { },
    onLoad() {
        this.requestTask = new Promise((resolve, reject) => {
            const requestHandler = swan.request({
                url: '开发者服务器地址',
                header: {
                    'content-type': 'application/json'
                },
                method: 'POST',
                dataType: 'json',
                responseType: 'text',
                data: {
                    key: 'value'
                },
                success: res => {
                    this.setData('data', res.data);
                    resolve();
                },
                fail: err => {
                    console.log('错误码：' + err.errCode);
                    console.log('错误信息：' + err.errMsg);
                }
            })
        });
    },
    onShow() {
        this.requestTask.then(requestData => {
            let res = this.getData('data');
            swan.setPageInfo({
                title: res.title,
                keywords: res.keywords,
                description: res.description,
                articleTitle: res.articleTitle,
                releaseDate: res.releaseDate,
                image: res.image,
                video: res.video,
                visit: res.visit,
                likes: '75',
                comments: '13',
                collects: '23',
                shares: '8',
                followers: '35',
                success: res => {
                    console.log('setPageInfo success');
                },
                fail: err => {
                    console.log('setPageInfo fail', err);
                }
            })
        })
    }
});
```

**代码示例9 - post的method为PUT**：
 
<a href="swanide://fragment/adc8307fb683e4513aed1371de2b09551575467162358" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<button bindtap="request">点击请求数据</button>
```

* 在 js 文件中

```js
Page({
    data: { },
    request() {
        swan.request({
            url: 'https://sfc.baidu.com/shopping/nianhuo/bimai',
            header: {
                'content-type': 'application/json'
            },
            method: 'PUT',
            dataType: 'json',
            responseType: 'text',
            data: {
                key: 'value'
            },
            success: res => {
                console.log(res.data);
            },
            fail: err => {
                console.log('错误码：' + err.errCode);
                console.log('错误信息：' + err.errMsg);
            }
        });
    }
});
```

**代码示例10 - post的method为DELETE**：
 
<a href="swanide://fragment/f1bdb32e95587b2ed2293f262b380e5d1575539783630" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<button bindtap="request">点击请求数据</button>
```

* 在 js 文件中

```js
Page({
    data: { },
    request() {
        swan.request({
            url: 'https://sfc.baidu.com/shopping/nianhuo/bimai',
            header: {
                'content-type': 'application/json'
            },
            method: 'DELETE',
            dataType: 'json',
            responseType: 'text',
            data: {
                key: 'value'
            },
            success: res => {
                console.log(res.data);
            },
            fail: err => {
                console.log('错误码：' + err.errCode);
                console.log('错误信息：' + err.errMsg);
            }
        });
    }
});
```

**代码示例11 - post的method为HEAD**：
 
<a href="swanide://fragment/804df7647a7adc20c246cd76de4214b71575539832230" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<button bindtap="request">点击请求数据</button>
```

* 在 js 文件中

```js
Page({
    data: { },
    request() {
        swan.request({
            url: 'https://sfc.baidu.com/shopping/nianhuo/bimai',
            header: {
                'content-type': 'application/json'
            },
            method: 'HEAD',
            dataType: 'json',
            responseType: 'text',
            data: {
                key: 'value'
            },
            success: res => {
                console.log(res.data);
            },
            fail: err => {
                console.log('错误码：' + err.errCode);
                console.log('错误信息：' + err.errMsg);
            }
        });
    }
});
```

**代码示例12 - post的method为OPTIONS**：
 
<a href="swanide://fragment/7352a72b7ca6c19e5366bc287d4da49f1575539911628" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<button bindtap="request">点击请求数据</button>
```

* 在 js 文件中

```js
Page({
    data: { },
    request() {
        swan.request({
            url: 'https://sfc.baidu.com/shopping/nianhuo/bimai',
            header: {
                'content-type': 'application/json'
            },
            method: 'OPTIONS',
            dataType: 'json',
            responseType: 'text',
            data: {
                key: 'value'
            },
            success: res => {
                console.log(res.data);
            },
            fail: err => {
                console.log('错误码：' + err.errCode);
                console.log('错误信息：' + err.errMsg);
            }
        });
    }
});
```
**返回值**：

返回一个 requestTask 对象，通过 requestTask，可中断请求任务。

