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
|projectPath| String|是|- |项目绝对路径|
|cliPath| String|否|- |开发者工具命令行工具绝对路径，安装时使用默认安装路径的情况下无须指定|
|timeout| Number|否|40 * 1000|启动最长等待时间（ms）|
|port| Number|否|- |指定 WebSocket 端口号|

cliPath 未指定时将会按顺序从以下位置尝试寻找：

macOS：
> 1. 正式版工具: /Applications/百度开发者工具.app/Contents/MacOS/cli
> 2. rc 版工具: /Applications/百度开发者工具-rc.app/Contents/MacOS/cli

Windows：
> 1. 正式版工具 + 仅为当前用户安装: ${home}/AppData/Local/Programs/swan-ide-gui/cli.bat
> 2. 正式版工具 + 为所有用户安装: C:/Program Files/swan-ide-gui/cli.bat
> 3. rc 版工具 + 仅为当前用户安装: ${home}/AppData/Local/Programs/swan-ide-gui-rc/cli.bat
> 4. rc 版工具 + 为所有用户安装: C:/Program Files/swan-ide-gui-rc/cli.bat

**示例代码：**

```js
const automator = require('swan-automator');
automator.launch({
    cliPath: 'path/to/cli', // 工具安装时使用默认安装路径的情况下无须指定
    projectPath: 'path/to/project'
}).then(smartProgram => {
    // do sth
});
```