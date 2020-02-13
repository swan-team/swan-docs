---
title: 转换px为rpx
header: develop
nav: devtools
sidebar: editor_rpx
---

 

rpx作为小程序常用页面自适应解决方案，在智能小程序中同样支持。

**rpx（responsive pixel）:** 可以根据屏幕宽度进行自适应，规定屏幕宽为750rpx。如在 iPhone6 上，屏幕宽度为375px，共有750个物理像素，则750rpx = 375px = 750物理像素，1rpx = 0.5px = 1物理像素。

**px到rpx的转换公式：** `rpx = px * 750 / 设计稿宽度;`

在实际使用时，px与rpx之间的转换相当繁琐，为提高开发者效率，css 文件编辑会帮助开发者将px转换为rpx，并给出实时的提示。 

开发者可在设置-编辑设置-设计稿宽度中设置rpx转换基准宽度，默认为1242px。

![](../../../img/tool/editor-setting.png)

![](../../../img/tool/px2rpx转换.gif)