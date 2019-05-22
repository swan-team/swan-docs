### userInfoButton.offTap()

userInfoButton 对象上的方法，用于取消监听用户信息按钮的点击事件。

```js
userInfoButton.offTap(callback)
```
**参数值**：

|参数|类型|描述|
|-|-|-|
|callback|function|监听事件的回调函数|

**示例**：

```js
let button = swan.createUserInfoButton({
    type: 'text',
    text: '获取用户信息',
    style: {
        top: 0,
        left: 50,
        width: 50,
        height: 50,
        lineHeight: 50,
        borderWidth: 2,
        borderColor: '#000000',
        backgroundColor: '#EEEEEE',
        color: '#000000',
        textAlign: 'center',
        fontSize: 16,
        borderRadius: 4
    }
})
button.onTap(tapEvent);
button.offTap(tapEvent);

function tapEvent(res) {
    console.log(res)
}
```