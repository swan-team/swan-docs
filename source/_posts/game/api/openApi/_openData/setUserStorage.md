### setUserStorage

上报用户数据的后台**接口**，小游戏可以通过本接口上报 key-value 数据到用户的 CloudStorage。

**请求地址：**

```js
POST http://inner.openapi.baidu.com
```

**参数：**

|属性|类型|默认值|是否必填|说明|
|-|-|-|-|-|
|access_token|string||是|接口调用凭证，[获取 access_token 方法](/develop/serverapi/power_exp/)|
|swanId|string||是|用户唯一标识符|
|kv_list|Object||是|要上报的数据|

**返回值：**

|参数|类型|说明|
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
|4000|数据库更新失败|
|87020|内部请求失败|
|87016|由于某个 key-value 长度超过限制而上报失败。|
|87018|由于用户存储的 key-value 对数量超过限制而上报失败|
|87019|由于某个 key 长度超过限制而上报失败|

**示例代码：**

```js
// 仅为示例，请使用自己真实有效的 access_token 等 query 参数
http://inner.openapi.baidu.com/rpc/2.0/smartapp/game/setuserstorage?access_token=24.9d857e2cb7d136933e9a55e49c73e299.2592000.1538053013.282335-11423799
```

**托管数据的限制：**

如果在上报数据时触发这些限制，设置数据会失败并且会收到带错误码的返回包。

1. 每个 swanId 所标识的百度用户，在游戏当中的托管的数据不能超过 128 个 key-value 对。
2. 上报的 key-value 列表当中每一项的 key+value 长度都不能超过 1024 个字节。
3. 上报的 key-value 列表当中每一个 key 长度都不能超过 128 字节。
