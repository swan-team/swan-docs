### swan.getUserInfo()

>注意：请不要将游戏的首帧（首屏）渲染操作放在回调函数中，详情参考： [登录、授权、获取用户信息接口使用规范](/game/tutorials/open_api/first-frame-rule/)

该接口只能在开放数据域下调用，通过 swanId 批量获取用户信息，无需用户授权。

```js
swan.getUserInfo(opts);
```

**参数值：**

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|opts|Object|{}|是|调用该方法时，要传入的对象参数|
|opts.swanIdList|Array.<`string`\>|[]|否|要获取信息的用户的 swanId 数组，如果要获取当前用户的信息，则将该属性值设为 `['selfSwanId']` 即可|
|opts.success|function| |否|接口调用成功的回调函数|
|opts.fail|function| |否|接口调用失败的回调函数|
|opts.complete|function| |否|接口调用完成的回调函数（接口调用成功、失败都会执行）|

`success` 回调函数：

形如 `function (res) {...}`, 其中：

|属性|类型|描述|
|-|-|-|
|res|Object|回调函数参数对象|
|res.data|Array.<`Object`\>|用户信息列表|

`res.data[0]` 的结构：

|属性|类型|描述|
|-|-|-|
|nickname|string|用户名|
|avatarUrl|string|用户头像|
|gender|string|性别|


**示例：**

```js
swan.getUserInfo({
    swanIdList: ['selfSwanId', 'mVMFstGRGOhjaVwejKX6-do0wN'],
    success: res => console.log('success', res.data),
    fail: res => console.log(res)
});
```
