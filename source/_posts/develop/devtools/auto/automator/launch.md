---
title: automator.launch
header: develop
nav: devtools
sidebar: launch
---


**解释**：启动并连接开发者工具。

```ts
automator.launch(options: Object): Promise<SmartProgram>
```

**`options`参数说明：**

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|cliPath| String|否|- |开发者工具命令行工具绝对路径|
|projectPath| String|是|- |项目绝对路径|
|timeout| Number|否|- |启动最长等待时间|
|port| Number|否|- |WebSocket 端口号|

cliPath 未设置时将会按顺序从以下几个位置尝试寻找：

Mac：`/Applications/百度开发和工具.app/Contents/MacOS/cli`; `/Applications/百度开发和工具-rc.app/Contents/MacOS/cli`
Win：`${home}/AppData/Local/Programs/swan-ide-gui/cli.bat`; `C:/Program Files/swan-ide-gui/cli.bat`; `${home}/AppData/Local/Programs/swan-ide-gui-rc/cli.bat`; `C:/Program Files/swan-ide-gui-rc/cli.bat`

**示例代码：**

```js
const automator = require('swan-automator');
automator.launch({
    cliPath: 'path/to/cli',
    projectPath: 'path/to/project'
}).then(smartProgram => {
    // do sth
});
```