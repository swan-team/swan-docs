---
title: SelectorQuery.select 
header: develop
nav: api
sidebar: query_SelectorQuery-select 
---

 

**解释**： 在当前页面下选择第一个匹配选择器 selector 的节点，返回一个 NodesRef 对象实例，可以用于获取节点信息。

**方法参数**：String selector

**返回值**：nodesRef

selector 类似于 CSS 的选择器，但仅支持下列语法。

1、ID 选择器：#the-id
2、class 选择器（可以连续指定多个）：.a-class.another-class
3、子元素选择器：.the-parent > .the-child
4、后代选择器：.the-ancestor .the-descendant
5、多选择器的并集：#a-node, .some-other-nodes
<!-- 跨自定义组件的后代选择器：.the-ancestor >>> .the-descendant -->
