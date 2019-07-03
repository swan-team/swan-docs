---
title: 配置小程序
header: develop
nav: tutorial
sidebar: configure
---

## 全局配置
小程序根目录下的 app.json 文件用来对智能小程序进行全局配置，用以决定页面文件的路径、窗口表现、设置网络超时时间、设置多 tab 等。

完整配置项说明请参考小程序[全局配置](https://smartprogram.baidu.com/docs/develop/tutorial/process/)

以下是一个包含了部分常用配置选项的 app.json ：

```json
{
  "pages": [
    "pages/components/components",
    "pages/apis/apis"
  ],
  "window": {
    "navigationBarTitleText": "Demo"
  },
  "tabBar": {
    "list": [{
      "pagePath": "pages/components/components",
      "text": "组件"
    }, {
      "pagePath": "pages/apis/apis",
      "text": "API"
    }]
  },
  "networkTimeout": {
    "request": 10000,
    "downloadFile": 10000
  },
  "debug": true
}
```

完整配置项说明请参考小程序 [全局配置](https://smartprogram.baidu.com/docs/develop/tutorial/process/)

## 页面配置
每一个小程序页面也可以使用同名`.json`文件来对本页面的窗口表现进行配置，页面中配置项会覆盖`app.json`的`window`中相同的配置项。

完整配置项说明请参考小程序 [页面配置](https://smartprogram.baidu.com/docs/develop/tutorial/dev/#%E5%BC%80%E5%8F%91-json-%E6%96%87%E4%BB%B6/)

**示例：**

```json
{
  "navigationBarBackgroundColor": "#ffffff",
  "navigationBarTextStyle": "black",
  "navigationBarTitleText": "智能小程序接口功能演示",
  "backgroundColor": "#eeeeee",
  "backgroundTextStyle": "light"
}
```