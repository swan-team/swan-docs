---
title: 组件面板
header: develop
nav: devtools
sidebar: components_panel
---

> 此功能在 2.25.0 之后版本可用。

为了方便开发者快速找到需要的组件，并快速查看组件的属性、事件、样式、demo、文档等信息，开发者工具集成了组件面板。

组件面板可通过编辑器右上角按钮打开。

![打开组件面板](https://b.bdstatic.com/searchbox/icms/searchbox/img/devtools_components-panel-open.png)

打开面板后可看到基础组件和扩展组件列表。

![组件列表](https://b.bdstatic.com/searchbox/icms/searchbox/img/devtools_components-panel-list.png)

## 基础组件

基础组件为智能小程序框架提供的组件。[组件列表](/develop/component/component/)。

在列表中选中组件后，下方会展示当前组件的二维码，文档入口信息。用百度 APP 扫码可查看当前组件的 demo。

![选中组件](https://b.bdstatic.com/searchbox/icms/searchbox/img/devtools_components-panel-qrcode.png)

点击查看文档即可查看当前组件的文档。

![查看文档](https://b.bdstatic.com/searchbox/icms/searchbox/img/devtools_components-panel-docs.png)

### 组件代码插入

在编辑器中打开 swan 文件，点击插入按钮，即可插入组件的代码。插入代码位置为编辑器中光标所在位置，若光标在组件的标签中，则会插入到光标所在组件的内部。如果光标所在位置为自闭合组件，就在组件后插入代码。

![插入代码](https://b.bdstatic.com/searchbox/icms/searchbox/img/devtools_components-panel-insert.png)

### 组件编辑

在编辑器中选中鼠标选中组件后，可在组件面板下方直接编辑组件。可编辑的内容有属性，事件，样式。在编辑面板中的修改会实时同步到编辑器中。

![edit](https://b.bdstatic.com/searchbox/icms/searchbox/img/devtools_components-panel-edit.png)

## 扩展组件

扩展组件为智能小程序官方提供的 [smart-ui](/develop/extended/ui_component/info/)，是一套开发、设计风格统一的智能小程序扩展组件库，由百度智能小程序官方设计团队和智能小程序团队为小程序量身设计，以增强开发者开发体验。

组件通过 npm 管理，包名为 `@smt-ui/component`

> 扩展组件使用 npm 管理依赖，需要系统中装有 [Node.js](https://nodejs.org/en/download/) 环境。并将编译模式选择为 `依赖分析`

![编译模式](https://b.bdstatic.com/searchbox/icms/searchbox/img/devtools_components-panel-compile.png)

首次插入扩展组件时，开发者工具会自动为小程序创建 package.json 文件，添加并安装 `@smt-ui/component` 依赖。如果当前环境变量中无 npm 命令，则会安装组件库失败。

### 图标组件

开发者工具为扩展组件 `smt-icon` 提供了可视化编辑面板。方便用户直接选择图标。如果你在小程序官方示例中看到了图标，想使用又不知道图标的名字，来这里找就可以了。

![icon](https://b.bdstatic.com/searchbox/icms/searchbox/img/devtools_components-panel-icon.png)
