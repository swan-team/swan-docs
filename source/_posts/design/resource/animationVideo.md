---
title: animation-video 设计资源制作
header: design
nav: resource
sidebar: uikit
---

AFX是智能小程序提供的一种可支持透明背景的动画播放能力，帮助开发者实现更为沉浸、丰富的动画效果。开发文档说明详见[透明视频AFX](https://smartprogram.baidu.com/docs/develop/component/animation-video/)。

<video width="100%" muted autoplay="autoplay" loop="loop"  src="https://b.bdstatic.com/miniapp/animation-video-demo.m4v">
你的浏览器不支持该视频播放
</video>

## 透明视频AFX优质特性

 1.	可支持透明背景动画，实现沉浸式的动画效果展现。
 2.	视频文件体积较小，有利于提升小程序性能。
 3.	动画播放流畅，实现还原度高。

## 透明视频设计资源示例

如下所示，透明视频组件的视频源是一个格式为 mp4 的视频，它的左侧为动画的 alpha 通道信息，右侧为动画rgb 通道信息，左右两侧动画同步播放。

<video width="100%" muted autoplay="autoplay" loop="loop"  src="https://b.bdstatic.com/miniapp/animation-video.mp4">
你的浏览器不支持该视频播放
</video>


## 制作透明视频AFX的步骤
### 步骤一：在After Effects里完成动画设计
在After Effects里进行动画设计，请注意图层中尽量不要出现“混合模式”。

<div class="m-doc-custom-img">
	<div >
		<img src="https://b.bdstatic.com/miniapp/animation-video-two.png">
	</div>
</div>


### 步骤二：导入合成
在AE里新建一个合成，将设计完成的动画导入到此合成中，注意：合成帧速率设置为不大于60FPS，分辨率不可大于800x800px，如需较大尺寸，后续可由开发人员根据场景进行等比扩大适配。

1. 创建合成文件；
2. 合成动画效果示意。

<div class="m-doc-custom-img">
	<div >
		<img src="https://b.bdstatic.com/miniapp/animation-video-three.png">
	</div>
</div>


### 步骤三：将合成输出为序列帧
将合成输出为PNG序列帧，通道为RGB+Alpha，命名方式需为纯数字，第一帧为0，例：0、1、2…

<div class="m-doc-custom-img">
	<div >
		<img src="https://b.bdstatic.com/miniapp/animation-video-four.png">
	</div>
</div>



### 步骤四：使用“AFX Creator”软件转化为MP4视频
下载“AFX Creator”软件并进行安装，[点击下载](https://b.bdstatic.com/searchbox/icms/searchbox/zip/AFXCreator.zip)
将导出的序列帧文件夹拖拽到此软件中，并将序列帧转化为MP4视频。注意：帧速率设置需与AE中的合成帧速率一致，视频质量为默认值。

### 步骤五：将生成的MP4视频提供给开发人员
最后将生成的MP4视频提供给开发人员，由开发人员使用透明视频AFX组件能力进行下一步开发，开发文档说明详见[animation-video 透明视频动画](https://smartprogram.baidu.com/docs/develop/component/animation-video/)。
