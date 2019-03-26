### swan.saveImageToPhotosAlbum()

> 基础库 swan-game.js 1.5.2 版本开始支持。

保存图片到系统相册，需要用户授权。

```js
swan.saveImageToPhotosAlbum(opts)
```

**opts 对象属性说明：**

|属性|类型|是否必填|描述|
|-|-|-|-|
|filePath|string|是|图片文件路径，可以是临时文件路径也可以是永久文件路径，不支持网络图片路径|
|success|function|否|接口调用成功的回调函数|
|fail|function|否|接口调用失败的回调函数|
|complete|function|否|接口调用完成的回调函数（接口成功、失败都会执行）|

**示例：**

```js
swan.saveImageToPhotosAlbum({
    filePath: '/xxx/xxx.jpg',
    success: function (res) {
        console.log(res);
    },
    fail: function (err) {
        console.log('错误码：' + err.errCode);
        console.log('错误信息：' + err.errMsg);
    }
});
```