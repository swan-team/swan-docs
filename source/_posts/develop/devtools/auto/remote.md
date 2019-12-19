---
title: 真机自动化
header: develop
nav: devtools
sidebar: remote
---


小程序自动化除了能够控制开发者工具中的小程序模拟器，也支持通过预览控制真机，以达到在真机上进行自动化测试的目的。

## 运行环境

- 确保目标机器上的基础库版本为 3.40.0 及以上
- 确保开发者工具登录的帐号有项目的开发权限
- 确保电脑和手机处于同一局域网

此外，需通过以下步骤开启真机的开源宿主调试功能：

1. 使用百度 App 扫描以下二维码，打开 `BAT测试框架小程序`
![BAT测试框架小程序线上版](https://b.bdstatic.com/searchbox/icms/searchbox/img/bat-qrcode.png)
2. 打开小程序中的“加载 cts 性能测试”、“域名校验豁免”、“请求不校验https”开关（如下图）后，重启百度 App
![BAT测试框架小程序截图](https://b.bdstatic.com/searchbox/icms/searchbox/img/bat-shot.png)

## 使用方式

在编写完测试用例并且在工具模拟器上测试成功之后，假如想要在真机上跑自动化，可以通过以下方法实现。

在测试脚本开头使用 [`smartProgram.remote`](../smartprogram/remote) 接口启动工具的真机调试功能，调用成功后脚本会在控制台打印二维码。使用目标机器扫码成功连接后，脚本会继续在真机上执行下去。

如果出现无法在控制台打印二维码的情况，请注意查看工具中预览是否正常。

## 示例代码

``` javascript
describe('index', () => {
    let smartProgram;
    let page;

    beforeAll(async () => {
        smartProgram = await automator.launch({
            projectPath: 'path/to/project'
        });
        await smartProgrma.remote();
        page = await smartProgram.reLaunch('/pages/component/component');
        await page.waitFor(500);
    }, 30000);

    afterAll(async () => {
        await smartProgram.close();
    });

    it('text', async () => {
        const text = await page.$('text');
        expect(text.tagName).toBe('text');
        expect(await text.text()).toContain('搜索组件和接口');
    });
});
```