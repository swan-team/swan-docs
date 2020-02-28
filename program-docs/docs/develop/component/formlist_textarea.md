---
title: textarea 多行输入框
header: develop
nav: component
sidebar: formlist_textarea
webUrl: https://qft12m.smartapps.cn/component/textarea/textarea
---





**解释**：多行输入框。客户端创建的[原生组件](https://smartprogram.baidu.com/docs/develop/component/native/)，不支持嵌套在其它组件中使用。

##  属性说明

|属性名|类型|默认值|必填|说明|最低支持版本|
|:----|:----|:----|:----|:----|:----|
|value|String| |否|输入框的内容，若要动态设置输入框内容，需设置 `value="{= value =}"`(注: 若要取键盘输入后的value请通过bindinput获取)|-|
|disabled|Boolean|false|否|是否禁用|-|
|maxlength|Number|140|否|最大输入长度，设置为 -1 的时候不限制最大长度|-|
|placeholder|String| |否|输入框为空时占位符|-|
|placeholder-style|String| |否|指定 placeholder 的样式|-|
|placeholder-class|String||否|指定 placeholder 的样式类|-|
|auto-height|Boolean|false|否|是否自动增高，设置auto-height时，style.height不生效|-|
|cursor|Number|-1|否|指定focus时的光标位置|-|
|auto-focus|Boolean|false|否|自动聚焦，调起键盘。| -|
|confirm-type|String|default|否|设置键盘右下角按钮的文字。|3.70.53<p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|confirm-hold|Boolean|false|否|点击键盘右下角按钮时是否保持键盘不收起| 3.130.1<p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|focus|Boolean|false|否|获取焦点，调起键盘|-|
|fixed|Boolean|false|否|如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true |-|
|cursor-spacing|Number|0|否|指定光标与键盘的距离，单位 px 。取 textarea 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离 |-|
|show-confirm-bar|Boolean|true|否|是否显示键盘上方带有”完成“按钮那一栏。  |-|
|selection-start|Number|-1|否|光标起始位置，自动聚焦时有效，需与selection-end搭配使用 |-|
|selection-end|Number|-1|否|光标结束位置，自动聚焦时有效，需与selection-start搭配使用|-|
|adjust-position|Boolean|true|否|键盘弹起时，是否自动上推页面| -|
|bindfocus|EventHandle| |否|输入框聚焦时触发，event.detail = { value, height }，height为键盘高度|-|
|bindblur|EventHandle| |否|输入框失去焦点时触发，event.detail = {value, cursor}|-|
|bindlinechange|EventHandle| |否|输入框行数变化时调用，event.detail = {height: 0, heightRpx: 0, lineCount: 0, lineHeight: 0}|-|
|bindinput|EventHandle| |否|当键盘输入时，触发 input 事件，event.detail = {value, cursor}， bindinput 处理函数的返回值并不会反映到 textarea 上|-|
|bindconfirm|EventHandle| |否|点击完成时， 触发 confirm 事件，event.detail = {value: value}|-|

###  confirm-type 有效值

| 值 | 说明 |
|:--- |:--- |
| default | 原生键盘状态，输入状态下右下角按钮为“确认”，可将用户正在输入的文字填充至输入框，未输入状态下右下角按钮为“换行”，用户点击后可手动换行 |
| done | 右下角按钮为“完成”，点击会触发bindconfirm事件 |
| send | 右下角按钮为“发送”，点击会触发bindconfirm事件 |
| search | 右下角按钮为“搜索”，点击会触发bindconfirm事件 |
| next | 右下角按钮为“下一步”，点击会触发bindconfirm事件 |
| go | 右下角按钮为“前往”，点击会触发bindconfirm事件 |

## 示例

<a href="swanide://fragment/8a9bcb008fb8027e49c32c4ad644602a1577360690062" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/textarea.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>



 

###  代码示例 1：输入区高度自适应

 <a href="swanide://fragment/f8d28d8c07536e7651ac3993b84afb741575401349267" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

 

:::codeTab
```swan
<view class="wrap">
    <view class="description">输入区高度自适应</view>
    <textarea auto-height maxlength="-1" bindinput="bindInput"/>
</view>
```

 

```js
Page({
    data: {
        height: 1,
        focus: true
    },
    bindfocus(e) {
        console.log('focus - e:', e);
    },
    bindInput(e) {
        console.log('input - e:', e);
    },
    bindLineChange(e) {
        console.log('linechange - e:', e);
    },
    bindblur(e) {
        console.log('blur - e:', e);
    },
    bindConfirm(e){
        console.log('confirm - e:', e);
    }
});

```
:::
###  代码示例 2： 受控聚焦

 <a href="swanide://fragment/4d35f3e24c2abccf95c01b962d9724051575985791570" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

 

:::codeTab
```swan
<view class="wrap">
    <view class="description">受控聚焦</view>
    <textarea style="height: 3em"
                maxlength="-1"
                disabled="{{false}}"
                auto-focus="{{true}}"
                placeholder="我会出现滚动条~"
                placeholder-class="plh"
                cursor="-1"
                confirm-type="send"
                confirm-hold="{{false}}"
                fixed="{{true}}"
                focus="{{focus}}"
                cursor-spacing="20"
                show-confirm-bar="{{true}}"
                selection-start="-1"
                selection-end="-1"
                adjust-position="{{true}}"
                bindfocus="bindFocus"
                bindblur="bindBlur"
                bindlinechange="bindLineChange"
                bindinput="bindInput"
                bindconfirm="bindConfirm"
                />
    <button type="primary" bind:tap="bindFocusTap">聚焦</button>
</view>
```

 

```js
Page({
    data: {
        height: 1,
        focus: true
    },
    onHide() {
        getApp().globalData.openParams = ''
    },
    bindFocusTap() {
        this.setData('focus', true);
    },
    bindfocus(e) {
        console.log('focus - e:', e);
    },
    bindInput(e) {
        console.log('input - e:', e);
    },
    bindLineChange(e) {
        console.log('linechange - e:', e);
    },
    bindblur(e) {
        console.log('blur - e:', e);
    },
    bindConfirm(e){
        console.log('confirm - e:', e);
    }
});
```
:::

##  Bug & Tip
* Tip：textarea 的 blur 事件会晚于页面上的 tap 事件，如果需要在 button 的点击事件获取 textarea，可以使用 form 的 bindsubmit。
* Tip：不建议在多行文本上对用户的输入进行修改，所以 textarea 的 bindinput 处理函数并不会将返回值反映到 textarea 上。
* Tip：请使用cover-view组件在 textarea 组件上开发遮罩层。

