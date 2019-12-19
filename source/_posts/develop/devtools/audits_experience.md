---
title: 体验
header: develop
nav: devtools
sidebar: audits_experience
---

<div style="display:none;">
1. 开启惯性滚动
惯性滚动会使滚动比较顺畅，在安卓下默认有惯性滚动，而在 iOS 下需要额外设置 -webkit-overflow-scrolling: touch 的样式
**得分条件： css 内带有 overflow: scroll 的元素，在 iOS 下需要设置 -webkit-overflow-scrolling: touch样式 **
</div>

1. 避免使用 :active 伪类来实现点击态
使用 css :active 伪类来实现点击态，很容易触发，并且滚动或滑动时点击态不会消失，体验较差。建议使用小程序内置组件的 hover-* 属性来实现
**得分条件：不使用 :active 伪类，并使用 hover-class 替换 :active**

2. 保持图片大小比例
图片若没有按原图宽高比例显示，可能导致图片歪曲，不美观，甚至导致用户识别困难。可根据情况设置 image 组件的 mode 属性，以保持原图宽高比。
**得分条件：显示的高/宽与原图的高/宽不超过 10%**

3. 可点击元素的响应区域
我们应该合理地设置好可点击元素的响应区域大小，如果过小会导致用户很难点中，体验很差。
**得分条件：可点击元素的宽高都不小于 20px**

4. 合理的颜色搭配
文字颜色与背景色需要搭配得当，适宜的颜色对比度可以让用户更好地阅读，提升小程序的用户体验。
判断标准：
对于较大字体（font-size >= 24px，或同时满足font-size >= 19px与font-weight >= 700），文字颜色和背景颜色的对比度不小于 1.2
其他字体，文字颜色和背景颜色的对比度不小于 1.25

