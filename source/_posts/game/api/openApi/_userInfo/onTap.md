### userInfoButton.onTap()

userInfoButton 对象上的方法，用于监听用户信息按钮的点击事件。

```js
userInfoButton.onTap(callback)
```
**参数值**：

|参数|类型|描述|
|-|-|-|
|callback|function|监听事件的回调函数|

`callback` 回调参数：

形如 `function (res) {...}`，其中：

|属性|类型|描述|
|-|-|-|
|res|Object|回调返回对象|
|res.swanid|string|用户使用智能小程序时的标识符，开发者可以通过 swanid 来区分用户的唯一性|
|res.userInfo|Object|用户信息对象|
|res.data|string|包括敏感数据在内的完整用户信息的加密数据|
|res.iv|string|加密算法的初始向量|

`res.userInfo` 对象属性说明：

|属性|类型|描述|
|-|-|-|
|avatarUrl|string|用户头像|
|city|string|用户所在城市|
|country|string|用户所在国家|
|gender|number|用户性别：值为1时是男性，值为2时是女性|
|nickName|string|用户名|
|province|string|用户所在省份|
|language|string|展示用户信息所用的语言|

**示例**：

```js
let button = swan.createUserInfoButton({
    type: 'text',
    text: '获取用户信息',
    style: {
        top: 0,
        left: 50,
        width: 150,
        height: 50,
        lineHeight: 50,
        borderWidth: 2,
        borderColor: '#000000',
        backgroundColor: '#EEEEEE',
        textAlign: 'center',
        fontSize: 16,
        borderRadius: 4
    }
})
button.onTap(res => {
    let { userInfo, data, iv, swanid } = res;
    console.log(userInfo, data, iv, swanid);
})
```