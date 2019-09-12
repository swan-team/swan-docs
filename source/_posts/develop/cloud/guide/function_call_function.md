---
title: 云函数使用示例：在云函数中调用另一个云函数
header: develop
nav: cloud
sidebar: cloud_function_guide_function_call_function
---

# 云函数使用示例：在云函数中调用另一个云函数

在云函数中，可以使用 swan-server-sdk 来访问当前环境中的其他资源，包括调用另一个云函数。在本例中，你会创建两个函数：sum 和 call_sum，然后在小程序端调用 call_sum 函数，call_sum 函数会调用 sum 函数获取结果，最终返回给小程序端。

需要注意的是，这里的调用是同步调用。也就是说，第二个函数的执行时间会全部计算到第一个函数的执行时间内。实际使用时，需要注意设置合理的函数超时时间。

我们先创建一个 sum 函数。

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

我们再创建一个 call_sum 函数。

```js
	const cloud = require('swan-server-sdk');
	
	exports.main = async (event, context) => {
	    cloud.init(context);
	
	    let resp = await cloud.callFunction({
	        name: 'sum',
	        data: {
	            numbers: [1, 2, 3, 4]
	        }
	    });
	 
	    console.log(resp);
	 
	    return 'sum: ' + resp.result
	};
```

要注意 package.json 中要有 swan-server-sdk 的依赖。

```json
	"dependencies": {
	  "swan-server-sdk": "latest"
	}
```

手动安装依赖：

	npm install

将这两个函数都部署到云开发后，可以在小程序中调用 call_sum 函数，正常的话可以看到返回结果。

	sum: 10
