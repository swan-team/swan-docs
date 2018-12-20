---
title: 资源下载
header: design
nav: showcase
sidebar: arzoo
---

“长隆AR动物园”是一款动物园游览与动物科普相结合的智能小程序。运用百度的AR技术还原动物模型，用户在虚拟的三维环境中给动物喂食，与动物互动，形成看、听、玩一体的科普场景。让用户通过逼真的互动体验获取多维认知，在娱乐中学习科普知识。

本文将从信息架构、交互流程、色彩系统、LOGO设计、动效设计5个层面介绍这款智能小程序的设计过程。
![长隆动物园](../../../img/design/showcase/arzoo-1.png)

## 信息架构

#### 多维度匹配用户诉求
长隆AR动物园的产品目标是让用户体验小程序的AR能力，主要功能为：AR识图、AR虚拟现实、AR导航。因此，操作流程的设计需要结合游览动物园的真实场景，让用户从看、找、逛 3种维度体验智能小程序的AR能力。

<div class="m-doc-custom-examples-correct">
	<img src="../../../img/design/showcase/arzoo-2.png"><p class="m-doc-custom-examples-text">1. [看：查看动物]  通过动物科普+虚拟现实能力还原动物模型，对动物产生立体认知，吸引用户去园区看真实的动物；
2. [找：查看地图] 使用地图的AR导航能力链接线上/线下科普场景，最终通过AR虚拟现实能力了解动物，虚拟互动；
3. [逛：观赏动物] 通过园区科普展板，使用AR识图+虚拟现实能力与动物轻松互动，强化认知。</p>
</div>
<div class="m-doc-custom-examples-correct">
	<img src="../../../img/design/showcase/arzoo-3.png"><p class="m-doc-custom-examples-text">体验维度结构图</p>
</div>

#### 选择合适的信息架构
为了更好的将产品目标与用户的诉求维度匹配，对长隆AR动物园的核心内容进行3个维度的划分：
1. [看]  AR动物集合，为方便用户快速浏览和体验，将动物集合设置在首页；
2. [找]  园区AR地图，查看地图属于用户主动触发需求，放在第二tab；
3. [逛]  AR智能相机，作为小程序特色功能放置在TAB中间位置以强化展示。

小程序要同时满足不同维度的用户诉求，功能入口需为并列关系。因此小程序信息架构采用“底TAB + 流式布局”的T字型结构，方便用户能够在不同诉求间切换，快速体验智能小程序的AR能力。
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/showcase/arzoo-4.png"><p class="m-doc-custom-examples-text">1.T字形架构；
2.长隆AR动物园。</p>
	</div>

## 使用流程

#### 铺设流畅的使用流程
“长隆AR动物园”是一款动物园游览与动物科普相结合的智能小程序，让用户在游玩过程中获取科普知识。因此，要以科普为中转场景进行使用流程设计，让用户在看、找、逛多维度下都能轻松进入科普场景（线上/线下），再通过小程序的AR能力虚拟现实，获取多维科普认知。
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/showcase/arzoo-5.png"><p class="m-doc-custom-examples-text">1.动物科普（动物详情页）路径；
2.线下科普（园区展板）路径。</p>
	</div>

#### 使用合适的基础组件
AR科普（动物详情）页使用 scroll-view 组件的横向滑动属性，无需反复退出/进入动物详情页，通过左右滑动即可快速切换动物页面来获取更多动物的相关科普，缩短用户操作路径。
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/showcase/arzoo-6.png"><p class="m-doc-custom-examples-text">1.快速切换动物页面；
2.动物页面效果图。</p>
	</div>

地图页使用 view 组件的缩放及跟手属性，结合切片和分层加载技术，实现静态园区图片能够跟随手势展示不同容量信息的交互能力。
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/showcase/arzoo-7.png"><p class="m-doc-custom-examples-text">1.图片切割；
2.左：信息聚合态，右：信息展开态。</p>
	</div>

## 颜色系统

#### 视觉风格定位
长隆AR动物园是一款寓教于乐的小程序，目标用户是低龄的K12人群 & 亲子人群，在设计中需要遵循用户的思维，参考真实动物园世界中用户的行为和需求。设计风格上能让用户有亲近自然，得到科普，放松身心的感受。
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/showcase/arzoo-8.png"><p class="m-doc-custom-examples-text">长隆动物园实景图</p>
	</div>

结合风格的推导分析，将长隆AR动物园的视觉风格确定为以绿色为主色系的“清新自然丛林“风格。
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/showcase/arzoo-9.png"><p class="m-doc-custom-examples-text">清新自然丛林风格的定位</p>
	</div>

#### 色彩系统运用
长隆动物园首页共有30张动物卡片，设计师希望每张卡片代表一种动物，有其独特的性格色彩。考虑到页面色彩的统一性，我们建立了色环，选取同一色彩明度、饱和的色环范围。运用了视觉设计中的对比、亲密性原则，使用丰富但有规律的色彩，让页面更加生动有趣。
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/showcase/arzoo-10.png">
	</div>
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/showcase/arzoo-11.png"><p class="m-doc-custom-examples-text">AR动物的色彩运用</p>
	</div>

## 打造有识别度的LOGO

LOGO的使用要注意长隆动物园的LOGO形态与智能小程序要求的圆形轮廓的融合，设计切图时预留固定的出血量以确保LOGO的可识别性。
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/showcase/arzoo-12.png">
	</div>

## 情感化的亮点设计

#### 带呼吸动效的AR入口
入口不是固定在页面内的某个位置，而是根据动物的特点动态变化。打破传统、木讷的按钮样式，为AR入口设计情感化的呼吸动效，增强按钮的代入感和互动性。

<video src="../../../img/design/showcase/动效.mp4" width="40%" controls="controls">
你的浏览器不支持该视频播放
</video>
<p class="m-doc-custom-examples-text">呼吸动效示例</p>


## 总结

以上是智能小程序“长隆AR动物园”的设计思考，更多细节设计可使用百度APP扫描下图二维码进行体验。
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/showcase/arzoo-14.png">
	</div>






