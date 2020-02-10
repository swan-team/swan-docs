---
title: 调试与发布
header: develop
nav: tutorial
sidebar: publish
---

## 调试

### 开发者工具调试

> 具体调试方法请参考<a href="https://smartprogram.baidu.com/docs/develop/devtools/smartappdebug_function_monitor/">调试</a>章节。

### Chrome 浏览器调试

> 对于正在开发中或者审核中的小程序，可使用 Chrome 进行 inspect 调试。

**调试方法**：

1. adb 连接手机至电脑，打开 chrome 浏览器，打开 chrome://inspect 。
2. 打开需调试的小程序，单击“关于”，进入“启动 Inspect 页面”。

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/2020010.png">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/202002.png">
    </div>   
</div>

3. Inspect 分为强化启动和普通启动。您可根据需要选择不同的启动方式，对小程序进行调试。

    * 强化启动：重启小程序
    * 普通启动：热启动

## 预览

当点击预览按钮时，开发者工具会对当前项目进行编译，然后制作压缩包上传到服务器，并生成小程序和 web 小程序的预览二维码，用百度app扫码后可以看到相应页面。

![图片](../../../img/tool/工具14.png)

## 发布

当点击发布按钮时，开发者工具会对当前项目进行编译，然后制作压缩包上传到服务器，上传成功后，可以在智能小程序官网的开发管理一栏看到提交的相关信息。

![图片](../../../img/tool/工具07.png)