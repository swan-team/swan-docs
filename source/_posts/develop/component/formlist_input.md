---
title: input 输入框
header: develop
nav: component
sidebar: formlist_input
---

**解释**：输入框，客户端创建的[原生组件](https://smartprogram.baidu.com/docs/develop/component/native/)，使用时请注意相关限制。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/input.png"  class="demo-qrcode-image" />

**属性说明**：

|属性名 |类型  |默认值  | 必填 |说明|最低支持版本|
|---- | ---- | ---- |---- |---- |---- |
| value | String  | | 否 |输入框的初始内容。若要动态设置输入框内容，需设置 `value="{= value =}"`| |
| type | String  |text  | 否 |input 的类型| |
| password | Boolean  | false  | 否 |是否是密码类型| |
| placeholder | String  |   | 否 |输入框为空时占位符| |
|placeholder-style| String  |  | 否 | placeholder 的样式| |
|placeholder-class |  String |input-placeholder  | 否 |placeholder 的样式类| |
| disabled | Boolean  | false  | 否 |是否禁用| |
| maxlength | Number  | 140 | 否 |最大输入长度，设置为 -1 的时候不限制最大长度| |
|cursor-spacing |Number	  |0  | 否 |指定光标与键盘的距离，单位 px。 当键盘弹出时， 如果需要页面上滑才能完整显示input组件, 那么此时光标与键盘的距离为设定的cursor-spacing值； 如果input组件处于屏幕上方，键盘弹出时不会挡住input， 则忽略该属性。| |
| focus |Boolean	  | false | 否 |获取焦点，调起键盘| |
|confirm-type|String  | done | 否 |设置键盘右下角按钮的文字| |
|confirm-hold | Boolean  | false | 否 |点击键盘右下角按钮时是否保持键盘不收起| |
|cursor	 | Number  |  | 否 |指定 focus 时的光标位置| |
|selection-start | Number | -1 | 否 | 光标起始位置，自动聚集时有效，需与 selection-end 搭配使用|1.10.0|
|selection-end | Number | -1 | 否 | 光标结束位置，自动聚集时有效，需与 selection-start 搭配使用 |1.10.0|
|adjust-position | Boolean | true | 否 | 键盘弹起时，是否自动上推页面 |1.10.0|
| bindinput | EventHandle  |   | 否 |当键盘输入时，触发 input 事件，event.detail = {value, cursor, keyCode}，keyCode为键值。 | |
| bindfocus | EventHandle  |  | 否 |输入框聚焦时触发，event.detail = {value: value, height: height}, height为键盘高度| |
|bindblur	|EventHandle	  | | 否 |输入框失去焦点时触发，event.detail = {value: value}| |
| bindconfirm |EventHandle	  |  | 否 |点击完成按钮时触发，event.detail = {value: value}| |


**type 有效值**：

|值|说明 |
|---- | ---- |
| text |文本输入键盘 |
| number |数字输入键盘 |
| idcard |身份证输入键盘 |
| digit |带小数点的数字键盘 |

**confirm-type 有效值**：

|值|说明 |
|---- | ---- |
| send |键盘右下角按钮为 “发送”|
|search |键盘右下角按钮为 “搜索” |
| next |键盘右下角按钮为 “下一个”|
| go |键盘右下角按钮为 “前往” |
| done |键盘右下角按钮为 “完成” |

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/input.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：

<a href="swanide://fragment/1c64feb864d9378d6e69bec6ab1b21671565503514247" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果
</a>

* 在 swan 文件中

```xml

<view class="section">
    <view class="title">可以自动聚焦的input</view>
    <input class="ipt" placeholder="将会获取焦点" bindfocus="bindKeyfocus" selection-start="3" selection-end="7" focus="autoFocus" confirm-hold="false" confirm-type="send"/>
</view>
<view class="section">
    <view class="title">普通input</view>
    <input class="ipt" cursor='10' bindblur="bindKeyblur"  bindconfirm="bindKeyconfirm" placeholder="这是一个普通输入框"/>
</view>

<view class="section">
    <view class="title">控制最大输入长度的input</view>
    <input class="ipt" maxlength="10" placeholder="最大输入长度为10" />
</view>
<view class="section">
    <view class="title">实时获取输入值：{{inputValue}}</view>
    <input class="ipt" bindinput="bindKeyInput" placeholder="输入同步到view中" maxlength="19"/>
</view>

<view class="section">
    <view class="title">数字输入的input</view>
    <input class="ipt" type="number" placeholder="这是一个数字输入框" />
</view>
<view class="section">
    <view class="title">密码输入的input</view>
    <input class="ipt" password placeholder="这是一个密码输入框" />
</view>
<view class="section">
    <view class="title">带小数点的input</view>
    <input class="ipt" type="digit" placeholder="带小数点的数字键盘"/>
</view>
<view class="section">
    <view class="title">身份证输入的input</view>
    <input class="ipt" type="idcard" adjust-position="true" placeholder="身份证输入键盘" />
</view>
<view class="section" >
    <view class="title">控制占位符颜色的input</view>
    <input class="ipt" placeholder-class="placeholder" placeholder-style="color:#6895FF" placeholder="占位符字体是蓝色的" />
</view>
<view class="section" style="padding-bottom: .2rem;">
    <view class="title">禁止使用input</view>
    <input class="ipt" disabled/>
</view>
```
* 在 js 文件中

```javascript
Page({
    data: {
        inputValue: '',
        autoFocus: true
    },
    onShow(){
        this.setData({
            autoFocus: true
        });
    },
    bindButtonTap: function () {
        this.setData({
            focus: true
        });
    },
    bindKeyInput: function (e) {
        this.setData({
            inputValue: e.detail.value
        });
    },
    bindKeyfocus: function (e){
        console.log(e.detail);
    },
    bindKeyblur: function (e){
        swan.showToast({
            title: '普通input失焦时间',
            icon: 'none'
        });
    },
    bindKeycomfirm: function (e){
        swan.showToast({
            title: '点击确定',
            icon: 'none'
        });
    }
});
```

**Bug & Tip**：

* confirm-type 的最终表现与手机输入法本身的实现有关，部分安卓系统输入法和第三方输入法可能不支持或不完全支持。
* input 组件是一个原生组件，字体是系统字体，所以无法设置 font-family。
* 在 input 聚焦期间，避免使用 css 动画。
* placeholder 的样式暂时只支持设置 font-size、font-weight、color 。
* 在 iOS 端键盘弹起时会出现组件 bindtap 不生效的问题（部分场景，如：IM 聊天场景中的固定在页面底部的文本框与发送按钮），建议先使用 bindtouchstart 代替 bindtap。
* 暂不支持 bindinput 处理函数直接 return 一个字符串。
