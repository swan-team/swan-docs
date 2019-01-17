---
title: 调试工具
header: develop
nav: devtools
sidebar: smartappdebug_tool
---



调试工具分为 6大功能模块：Swan、Sources、Network、Console、Storage、App data、Sensors。

## Swan panel

Swan panel 用于帮助开发者查看真实的页面结构以及对应的 css 属性，同时可以通过修改对应 css 属性，在模拟器中实时看到修改的情况（仅为实时预览，无法保存到文件）。通过调试模块左上角的选择器，还可以快速定位页面中组件对应的 swan 代码。

![图片](../../../img/tool/工具15.png)

## Sources panel
Sources panel 用于显示当前项目的脚本代码文件，智能小程序框架会对脚本文件进行打包编译的工作，因此在 Sources panel 中开发者看到的文件是经过处理之后的脚本文件。

![图片](../../../img/tool/工具16.png)

## Network panel

Network Panel 中展示了 request 和 socket 的请求情况。

![图片](../../../img/tool/工具17.png)

注：uploadFile 、downloadFile暂时不支持在 Network Panel 中查看

## Console panel

开发者可以在此输入和调试代码, 程序中的 console 信息也会在 Console panel 中提示。

![图片](../../../img/tool/工具18.png)

## Storage panel

Storage panel 用于显示当前项目使用 swan.setStorage 或者 swan.setStorageSync 后的数据存储情况。

可以直接在 Storage panel 上对数据进行删除（按 delete 键）、新增、修改。

![图片](../../../img/tool/工具19.png)

## App data panel
用于显示当前项目运行时智能小程序 AppData 具体数据，实时地反映项目数据情况，可以在此处编辑数据，并及时地反馈到界面上。


![图片](../../../img/tool/工具20.png)

## Sensors panel
用于设置地理信息、陀螺仪、指南针数据，调用相关 API 时会读取在这里设置好的数据。

![图片](../../../img/tool/工具21.png)
