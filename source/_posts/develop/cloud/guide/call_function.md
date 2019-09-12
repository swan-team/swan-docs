---
title: 云函数使用示例：在小程序中调用云函数
header: develop
nav: cloud
sidebar: cloud_function_guide_call_function
---

# 云函数使用示例：在小程序中调用云函数

在本例中，我们会创建一个名为 sum 的函数，他可以接收一系列数字作为输入，并且将他们的和返回。

我们先创建一个 sum 函数，并且修改其中的 index.js 文件。本例中无需使用云开发SDK，因此没有做初始化等工作。

```js
	exports.main = (event, context) => {
	    if (Array.isArray(event['numbers'])) {
	        let sum = 0;
	        for (let i = 0; i < event['numbers'].length; i++) {
	            let n = parseInt(event['numbers'][i], 10);
	            sum += n;
	        }
	        return sum
	    } else {
	        throw new Error('no numbers');
	    }
	};
```

这个函数在 `event` 中接收一个 `numbers` 数组，并且将它们的和返回。

上传部署函数后，我们可以在云开发控制台中测试这个函数，可以使用以下内容作为测试输入：

```json
{
    "numbers": [1, 2, 3, 4]
}
```

可以看到该云函数能够正确返回结果。

在小程序中，通过以下方式调用这个云函数获取结果：

```js
swan.cloud.callFunction({
    // 云函数名称
    name: 'sum',
    // 传给云函数的参数
    data: {
        numbers: [1, 2, 3, 4]
    },
    success: function(res) {
        console.log(res.result)
    },
    fail: console.error
})
```