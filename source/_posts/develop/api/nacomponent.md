---
title:  添加到我的小程序引导
header: develop
nav: api
sidebar: nacomponent
---

## swan.showFavoriteGuide

> 引导组件有统一的疲劳度，若用户未执行过添加操作，则3天内不再出现引导组件；若用户执行过添加操作，则引导组件对该用户将不再出现。最低支持版本 3.20.4 。

**解释**：支持在小程序内调起添加到我的小程序引导组件，引导用户添加到我的小程序。引导组件设计文档详见：<a href="http://smartprogram.baidu.com/docs/design/component/guide_add/">添加到我的小程序引导</a>。



**方法参数**：Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|type |String | 否 | bar| 引导组件类型，有效值： bar/bar-autohide/tip。 |
|content |String| 否 |bar: 一键添加到我的小程序；<br> bar-autohide: 一键添加到我的小程序；<br> tip: 添加到我的小程序，下次使用更方便。| 引导组件文字， bar和bar-autohide类型限制少于11个字符，tip类型少于18个字符，超过长度将截断显示。|
|success |Function  |  否 | -| 接口调用成功的回调|
|fail   | Function |   否  |-| 接口调用失败的回调函数|
|complete  |  Function |   否 | -| 接口调用结束的回调函数（调用成功、失败都会执行）|


**展现形式**：
目前添加到我的小程序引导组件支持以下两种类型，开发者可根据自身业务进行选择：

1. bar 浮层引导
    * 一直展现：用户点击引导组件旁边的关闭按钮才能关闭，点击添加按钮可直接添加到我的小程序。

    ![图片](../../../img/api/nacomponent/强引导.png)
    **示例代码 1**

        ```javascript
        swan.showFavoriteGuide({
            type: 'bar',
            content:'一键添加到我的小程序',
            success(res) {
                console.log('添加成功：', res);
            },
            fail(err) {
                console.log('添加失败：', err);
            }
        })
        ```
    * 自动消失：引导组件 5s 后自动消失，点击添加按钮可直接添加到我的小程序。

    ![图片](../../../img/api/nacomponent/中引导.png)
    **示例代码 2**

        ```javascript
        swan.showFavoriteGuide({
            type: 'bar-autohide',
            content:'一键添加到我的小程序',
            success(res) {
                console.log('添加成功：', res);
            },
            fail(err) {
                console.log('添加失败：', err);
            }
        })
        ```
2. tip 气泡引导：引导组件 5s 后自动消失，组件箭头指向小程序菜单。

    ![图片](../../../img/api/nacomponent/弱引导.png)
    **示例代码 3**

    ```javascript
    swan.showFavoriteGuide({
        type: 'tip',
        content:'一键添加到我的小程序',
        success(res) {
            console.log('添加成功：', res);
        },
        fail(err) {
            console.log('添加失败：', err);
        }
    })
    ```

用户通过引导添加组件“添加到我的小程序”后，可以在百度APP首页的智能小程序二楼“我的小程序”中看到它。
<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/design/component/guide_add/2.png">
	</div>
</div>


