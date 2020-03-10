---
title: AFX 透明视频
header: design
nav: foundation
sidebar: uikit
---

AFX 透明视频是一种可支持透明背景的动画播放能力，帮助开发者实现更为沉浸、丰富的动画效果。

开发文档说明详见[animation-video 透明视频动画](https://smartprogram.baidu.com/docs/develop/component/animation-video/)。

## 透明视频 AFX 优质特性
 1.	可支持透明背景动画，实现沉浸式的动画效果展现。
 2.	视频文件体积较小，有利于提升小程序性能。
 3.	动画播放流畅，实现还原度高。

<video width="100%" muted autoplay="autoplay" loop="loop"  src="https://b.bdstatic.com/miniapp/animation-video-demo.m4v">
你的浏览器不支持该视频播放
</video>

## 透明视频设计资源示例

如下所示，透明视频组件的视频源是一个格式为 mp4 的视频，它的左侧为动画的 alpha 通道信息，右侧为动画rgb 通道信息，左右两侧动画同步播放。

<video width="100%" muted autoplay="autoplay" loop="loop"  src="https://b.bdstatic.com/miniapp/animation-video-source.m4v">
你的浏览器不支持该视频播放
</video>


## 制作透明视频 AFX 的步骤
### 步骤一：在After Effects里完成动画设计
在 After Effects 里进行动画设计，请注意图层中尽量不要出现“混合模式”。

<video width="100%" muted autoplay="autoplay" loop="loop"  src="https://b.bdstatic.com/miniapp/animation-video-demo.m4v">
你的浏览器不支持该视频播放
</video>


### 步骤二：导入合成
在AE里新建一个合成，将设计完成的动画导入到此合成中，注意：合成帧速率不可大于 60FPS，分辨率不可大于 800x800px，如需较大尺寸，后续可由开发人员根据场景进行等比扩大适配。

<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct"><img src="https://b.bdstatic.com/miniapp/animation-video-step2.png"><p class="m-doc-custom-examples-text">1. 创建合成文件；
		2. 合成动画效果示意。</p>
	</div>
</div>


### 步骤三：将合成输出为序列帧
将合成输出为PNG序列帧，通道为 RGB+Alpha，命名方式需为纯数字，第一帧为0，例：0、1、2…

<div class="m-doc-custom-img">
	<div ><img src="https://b.bdstatic.com/miniapp/animation-video-step3.png">
	</div>
</div>



### 步骤四：使用“AFX Creator”软件转化为MP4视频
下载“AFX Creator”软件并进行安装。（[点击下载](https://b.bdstatic.com/searchbox/icms/searchbox/zip/AFXCreator.zip)）
将导出的序列帧文件夹拖拽到此软件中，并将序列帧转化为MP4视频。注意：帧速率设置需与AE中的合成帧速率一致，视频质量为默认值。

<div class="m-doc-custom-img">
	<div >
		<img src="https://b.bdstatic.com/miniapp/animation-video-step4.png">
	</div>
</div>


### 步骤五：将生成的MP4视频提供给开发人员
最后将生成的MP4视频提供给开发人员，由开发人员使用透明视频AFX组件能力进行下一步开发。
开发文档说明详见[animation-video 透明视频动画](https://smartprogram.baidu.com/docs/develop/component/animation-video/)

