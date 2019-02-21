### removeUserStorage

小游戏可以通过本接口删除已经上报到百度的 key-value 数据

**请求地址：**

```js
POST http://inner.openapi.baidu.com
```

**参数：**

|参数|类型|默认值|是否必填|说明|
|-|-|-|-|-|
|access_token|string||是|接口调用凭证，根据该参数解析 appId|
|swanId|string||是|用户唯一标识符|
|key|Object||是|要删除的数据 key 列表|

**返回值：**

|属性|类型|说明|
|-|-|-|
|errno|number|错误码|
|errmsg|string|错误信息|

**errno 的合法值：**

|值|说明|
|-|-|
|0|请求成功|
|-1|系统繁忙，此时请开发者稍候再试|
|110|access_token 不合法|
|111|access_token 已经过期，需要重新申请|
|2001|参数缺失|
|2002|uid & cuid 都为空|
|87020|内部请求失败|


**示例代码：**

```js
http://inner.openapi.baidu.com/rpc/2.0/smartapp/game/removeuserstorage?access_token=24.9d857e2cb7d136933e9a55e49c73e299.2592000.1538053013.282335-11423799
```