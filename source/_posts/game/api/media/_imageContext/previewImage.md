### swan.previewImage()

预览图片。

```js
swan.previewImage(opts)
```

**参数值：**

|属性|类型|是否必填|描述|
|-|-|-|-|
|current|string|否|当前显示图片的链接，不填则默认为 urls 的第一张|
|urls|Array.<`string`>|是|需要预览的图片链接列表|
|success|function|否|接口调用成功的回调函数|
|fail|function|否|接口调用失败的回调函数|
|complete|function|否|接口调用完成的回调函数（接口成功、失败都会执行）|

**示例：**

```js
const current = 'https://lvyou.baidu.com/static/qianfan/lvyou/kingkong/pics/aaa.png';
const urls = [
    'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png',
    'https://lvyou.baidu.com/static/qianfan/lvyou/kingkong/pics/aaa.png',
    'https://www.baidu.com/img/bd_logo1.png'
];
swan.previewImage({
    current,
    urls,
    success: function () {
        console.log('接口执行成功');
    },
    fail: function () {
        console.log('接口执行失败');
    },
    complete: function () {
        console.log('接口执行完成');
    }
});
```

**注意：**

暂不支持预览本地文件。