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
|:---- |: ---- | :---- |: ----|:----|
|wsEndpoint| String|是|- |开发者工具 WebSocket 地址|

有两种方式可以启动开发者工具并开启自动化功能。

> 1、通过命令行工具并指定自动化参数的方式

命令行工具所在位置：
macOS: `<安装路径>/Contents/MacOS/cli`
Windows: `<安装路径>/cli.bat`

需要指定的参数如下：
`--auto <projectPath>`：打开指定项目并开启自动化功能。
`--auto-port <port>`：指定自动化监听端口。

```shell
# cliPath 需要替换成命令行工具的完整路径
cliPath --auto /Users/username/demo --auto-port 9420
```

> 2、通过 [automator.launch](./launch/) API。

**示例代码：**

```ts
const automator = require('swan-automator');
automator.connect({
    wsEndpoint: 'ws://localhost:9420'
}).then(smartProgram => {
    // do sth
});
```