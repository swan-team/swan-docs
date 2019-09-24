### swan.saveImageToPhotosAlbum()

> 基础库 swan-game.js 1.5.2 版本开始支持。

保存图片到系统相册，需要用户授权。

```js
swan.saveImageToPhotosAlbum(opts)
```

**opts 对象属性说明：**

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|
|opts|Object|-|是|调用该方法时，要传入的对象参数|
|opts.filePath|string|-|是|图片文件路径，可以是临时文件路径也可以是永久文件路径，不支持网络图片路径|
|opts.success|function|-|否|接口调用成功的回调函数|
|opts.fail|function|-|否|接口调用失败的回调函数|
|opts.complete|function|-|否|接口调用完成的回调函数（接口成功、失败都会执行）|

**示例：**

```js
swan.saveImageToPhotosAlbum({
    filePath: '/xxx/xxx.jpg',
    success: res => {
        console.log(res);
    },
    fail: err => {
        console.log('错误码：' + err.errCode);
        console.log('错误信息：' + err.errMsg);
    }
});
```