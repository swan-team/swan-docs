---
title: 快速开始
header: develop
nav: devtools
sidebar: quick-start
---

智能小程序提供了自动化 SDK，旨在为开发者提供对小程序进行自动化测试的能力。

## 主要功能
智能小程序自动化 SDK 主要包含以下功能：

- 可以控制小程序跳转到指定页面
- 可以获取小程序页面数据
- 可以获取小程序页面元素信息
- 可以调用 swan 对象上任意接口
- ...

## 运行环境
- 安装 Node.js 并且版本大于 8.0
- 基础库版本为 3.40.0 及以上
- [开发者工具](https://smartprogram.baidu.com/docs/develop/devtools/history/) 版本为 2.22.0 及以上
- 开发者工具已登录且具有项目 appid 的开发权限（也可选择使用[测试号](https://smartprogram.baidu.com/docs/develop/tutorial/testapp/)）

## 安装
使用智能小程序自动化 SDK，直接执行以下命令：

```
npm i swan-automator --save-dev
```

## 使用
引入 SDK 编写控制脚本，参考以下示例：

```js
const automator = require('swan-automator');

(async () => {
    const smartProgram = await automator.launch({
        cliPath: 'path/to/cli',
        projectPath: 'path/to/project'
    });

    const page = await smartProgram.reLaunch('/pages/component/component');
    await page.waitFor(500);
    const element = await page.$('.item');
    console.log(await element.attribute('class'));
    await element.tap();
    await page.waitFor(200);
    console.log(await element.attribute('class'));

    await smartProgram.close();
})();
```

最后执行 `node path/to/script` 即可看到输出结果。

关于 SDK 提供的接口，更多详细用法可以参考 [Automator](../automator/connect/)、[SmartProgram](../smartprogram/pageStack/)、[Page](../page/path/)、[Element](../element/tagName/)。