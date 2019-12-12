---
title: automator.connect
header: develop
nav: devtools
sidebar: connect
---

**解释**：连接开发者工具。

```ts
automator.connect(options: Object): Promise<SmartProgram>
```

**`options`参数说明：**

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|wsEndpoint| String|是|- |开发者工具 WebSocket 地址|

开发者工具开启自动化功能可以通过命令行调用。

--auto <projectPath>：打开指定项目并开启自动化功能。

--auto-port <port>：指定自动化监听端口。

```js
cli --auto /Users/username/demo --auto-port 9420
```

**示例代码：**

```ts
const automator = require('swan-automator');
automator.connect({
    wsEndpoint: 'ws://localhost:9420'
}).then(smartProgram => {
    // do sth
});
```