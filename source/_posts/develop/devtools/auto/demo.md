---
title: 脚本示例
header: develop
nav: devtools
sidebar: demo
---

智能小程序自动化 SDK 本身不提供测试框架。这意味着你可以将它与市面上流行的任意 Node.js 测试框架结合使用，以此来达到编写小程序测试用例的目的。接下来将使用 [Jest](https://jestjs.io/) 测试框架来编写一个实际的小程序自动化测试。

## 测试对象

这里以小程序示例为测试对象，将 [小程序示例](https://smartprogram.baidu.com/docs/develop/tutorial/demo/) 的源码下载到本地，然后打开小程序开发者工具，将该项目导入进去。

## 初始化环境

新建文件夹 `test` 目录用于放置测试代码，执行以下命令安装依赖：

``` shell
npm i swan-automator jest --save-dev
```

按照 [快速开始](../quick-start) 中的使用说明安装符合要求的开发者工具版本并配置运行环境。

## 脚本编写

现在我们准备为小程序示例的组件首页编写测试用例，如下图所示：

![小程序组件示例](https://b.bdstatic.com/searchbox/icms/searchbox/img/demo-component.png)

创建测试文件 `test/component.spec.js` 后，首先要做的是：

1. 启动并连接工具
2. 重新启动小程序到组件首页
3. 断开连接并关闭工具

对应脚本如下：

``` javascript
const automator = require('@baidu/swan-automator');

describe('index', () => {
    let smartProgram;
    let page;

    beforeAll(async () => {
        smartProgram = await automator.launch({
            projectPath: 'path/to/swan-demo'
        });
        page = await smartProgram.reLaunch('/pages/component/component');
        await page.waitFor(500);
    }, 30000);

    afterAll(async () => {
        await smartProgram.close();
    });
});
```

> 开发者工具项目窗口启动及初次编译需要一定时长，Jest 默认 5 秒超时太短，需修改。

### 1. 测试搜索框文字

1. 通过 text 选择器获取目标元素
2. 目标元素应该是个 text 组件
3. 目标元素应该包含有“搜索组件和接口”的文本

对应脚本如下：

``` javascript
it('text', async () => {
    const text = await page.$('text');
    expect(text.tagName).toBe('text');
    expect(await text.text()).toContain('搜索组件和接口');
});
```

### 2. 测试列表项

1. 获取列表元素集合
2. 目标元素集的个数应该是 8 个
3. 第一个列表元素的标题应该是“视图窗器”

对应脚本如下：

``` javascript
it('items', async () => {
    const lists = await page.$$('.item');
    expect(lists.length).toBe(8);
    const list = await lists[0].$('.item-desc');
    expect(await list.text()).toBe('视图容器');
});
```

### 3. 测试列表项行为

1. 点击列表标题应该展示或隐藏子列表
2. 点击子列表项应该会跳转到指定页面

对应脚本如下：

``` javascript
it('item action', async () => {
    const className = 'item-close';
    const firstItem = await page.$('.item');
    expect(await firstItem.attribute('class')).toContain(className);
    await firstItem.tap();
    expect(await firstItem.attribute('class')).toEqual(expect.not.stringContaining(className));
    await firstItem.tap();
    expect(await firstItem.attribute('class')).toContain(className);

    await firstItem.tap();
    const subItem = await page.$('.sub-item');
    await subItem.tap();
    expect((await smartProgram.currentPage()).path).toBe('pages/view/view');
});
```

## 脚本执行

编写完脚本后直接执行以下脚本：

``` shell
npx jest test/component.spec.js
```

如果看到控制台输出以下信息，说明测试成功。

``` shell
 PASS  test/component.spec.js (23.384s)
  index
    ✓ text (82ms)
    ✓ items (34ms)
    ✓ item action (642ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        24.522s, estimated 33s
Ran all test suites matching /test\/component.spec.js/i.
```