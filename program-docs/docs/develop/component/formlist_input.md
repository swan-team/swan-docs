---
title: input 输入框
header: develop
nav: component
sidebar: formlist_input
webUrl: https://qft12m.smartapps.cn/subPackages/componentPackage/pages/input/input
---

**解释**：输入框，v3.105.0 开始支持[同层渲染](https://smartprogram.baidu.com/docs/develop/component/native/)。

##  属性说明

|属性名 |类型  |默认值  | 必填 |说明|Web 态说明|
|:---- | :---- | :---- |:---- |:---- |:---- |
| value | String  | | 否 |输入框的初始内容。若要动态设置输入框内容，需设置 `value="{= value =}"`(注: 若要取键盘输入后的value请通过bindinput获取)|-|
| type | String  |text  | 否 |input 的类型|-|
| password | Boolean  | false  | 否 |是否是密码类型|-|
| placeholder | String  |   | 否 |输入框为空时占位符|-|
|placeholder-style| String  |  | 否 | placeholder 的样式|-|
|placeholder-class |  String |input-placeholder  | 否 |placeholder 的样式类|-|
| disabled | Boolean  | false  | 否 |是否禁用|-|
| maxlength | Number  | 140 | 否 |最大输入长度，设置为 -1 的时候不限制最大长度|-|
|cursor-spacing |Number	  |0  | 否 |指定光标与键盘的距离，单位 px。 当键盘弹出时， 如果需要页面上滑才能完整显示input组件, 那么此时光标与键盘的距离为设定的cursor-spacing值； 如果input组件处于屏幕上方，键盘弹出时不会挡住input， 则忽略该属性。|受限于设备系统，暂不支持|
| focus |Boolean	  | false | 否 |获取焦点，调起键盘。<br> 开发者工具暂不支持自动获取焦点|-|
|confirm-type|String  | done | 否 |设置键盘右下角按钮的文字|暂不支持|
|confirm-hold | Boolean  | false | 否 |点击键盘右下角按钮时是否保持键盘不收起|-|
|cursor	 | Number  |  | 否 |指定 focus 时的光标位置<br>开发者工具暂不支持|-|
|selection-start | Number | -1 | 否 | 光标起始位置，自动聚焦时有效，需与 selection-end 搭配使用|-|
|selection-end | Number | -1 | 否 | 光标结束位置，自动聚焦时有效，需与 selection-start 搭配使用 |-|
|adjust-position | Boolean | true | 否 | 键盘弹起时，是否自动上推页面 |-|
| bindinput | EventHandle  |   | 否 |当键盘输入时，触发 input 事件，event.detail = {value, cursor, keyCode}，keyCode为键值。 |-|
| bindfocus | EventHandle  |  | 否 |输入框聚焦时触发，event.detail = {value: value, height: height}, height为键盘高度|-|
|bindblur	|EventHandle	  | | 否 |输入框失去焦点时触发，event.detail = {value: value}|-|
| bindconfirm |EventHandle	  |  | 否 |点击完成按钮时触发，event.detail = {value: value}|-|


###  type 有效值

|值|说明 |
|:---- | :---- |
| text |文本输入键盘 |
| number |数字输入键盘 |
| idcard |身份证输入键盘 |
| digit |带小数点的数字键盘 |

###  confirm-type 有效值

|值|说明 |
|:---- | :---- |
| send |键盘右下角按钮为 “发送”|
|search |键盘右下角按钮为 “搜索” |
| next |键盘右下角按钮为 “下一个”|
| go |键盘右下角按钮为 “前往” |
| done |键盘右下角按钮为 “完成” |

## 示例

<a href="swanide://fragment/8e8ece4c70230c03924783848ac18cd71577360565180" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/input.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>


 

###  代码示例1 - 基础用法 ：

<a href="swanide://fragment/06c050eeb63c8b030a17e943866a8c6c1575286848934" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果
</a>

 

:::codeTab
```swan

<view class="wrap">
    <view class="card-area">
        <view class="top-description border-bottom">基础用法</view>
        <input class="ipt" placeholder="请在此输入标题"/>
    </view>
</view>
```
:::
###  代码示例2 - 自定义输入控制 ：

<a href="swanide://fragment/fc1fbbb8468b3234cf05e50ba0d7c4831575286992595" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果
</a>

 

:::codeTab
```swan

<view class="wrap">
    <view class="card-area">
        <view class="top-description border-bottom">自定义输入控制</view>
        <view class="list-area border-bottom">
            <view class="list-item-key-4">自动聚焦</view>
            <view class="list-item-value">
                <input bindfocus="bindKeyfocus" selection-start="3" placeholder="focus='true'" selection-end="7" focus={{true}} confirm-hold="false" confirm-type="send"/>
            </view>
        </view>

        <view class="list-area border-bottom">
            <view class="list-item-key-4">控制长度</view>
            <view class="list-item-value">
                <input cursor='100' bindblur="bindKeyblur"  bindconfirm="bindKeyconfirm" placeholder="maxlength='10'" maxlength="10"/>
            </view>
        </view>

        <view class="list-area border-bottom">
            <view class="list-item-key-4">禁用</view>
            <view class="list-item-value">
                <input disabled="true" placeholder="disabled='true'"/>
            </view>
        </view>

        <view class="list-area">
            <view class="list-item-key-4">带有内容</view>
            <view class="list-item-value">
                <input value="value='{= value =}'"/>
            </view>
        </view>
    </view>
</view>
```
 

```js
Page({
    data: {
        inputValue: '',
        autoFocus: true,
        value: '初始value值'
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
            title: '普通input失焦事件',
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
:::

###  代码示例3 - type 有效值 ：

<a href="swanide://fragment/fc1fbbb8468b3234cf05e50ba0d7c4831575286992595" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果
</a>

 

:::codeTab
```swan

<view class="wrap">
    <view class="card-area">
        <view class="top-description border-bottom">自定义输入内容</view>
        <view class="list-area border-bottom">
            <view class="list-item-key-4">文本</view>
            <view class="list-item-value">
                <input type="text" placeholder="type='text'" />
            </view>
        </view>

        <view class="list-area border-bottom">
            <view class="list-item-key-4">数字</view>
            <view class="list-item-value">
                <input type="number" placeholder="type='number'" />
            </view>
        </view>

        <view class="list-area border-bottom">
            <view class="list-item-key-4">身份证</view>
            <view class="list-item-value">
                <input type="idcard" adjust-position="{{true}}" placeholder="type='idcard'" />
            </view>
        </view>

        <view class="list-area">
            <view class="list-item-key-4">小数</view>
            <view class="list-item-value">
            <input type="digit" placeholder="type='digit'"/>
            </view>
        </view>
    </view>

    <view class="card-area">
        <view class="top-description border-bottom">
            <view>自定义占位符颜色</view>
            <view>placeholder-style=color:"#3388FF"</view>
        </view>
        <input class="ipt" placeholder-class="placeholder" placeholder-style="color:#3388FF" placeholder="请在此输入" />
    </view>
</view>
```
:::
### 代码示例4 - bindinput实时获取input输入值 ：

<a href="swanide://fragment/aef77cb4643dcca1cec67fcf0feac9741575287321184" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果
</a>

 

:::codeTab
```swan
<view class="wrap">
    <view class="card-area">
        <view class="top-description">
            <view>实时获取输入值</view>
            <view>bindinput="bindKeyInput"</view>
        </view>
        <view class="textarea">{{inputValue}}</view>
        <input class="ipt" bindinput="bindKeyInput" placeholder="请在此输入内容" />
    </view>
</view>
```

 

```js
Page({
    bindKeyInput: function (e) {
        this.setData({
            inputValue: e.detail.value
        });
    }
});
```
:::

### 代码示例5 - input做业务搜索框 ：

<a href="swanide://fragment/c917bbec61dcc59cbb58b5571a1f3cdb1575190961501" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果
</a>

 

:::codeTab
```swan
<view class="wrap">
    <!-- 搜索框 -->
    <view class="search">
        <view class="search-box">
            <view class="search-icon"></view>
            <input class="search-input"
                style="max-width:70%;"
                type="text"
                focus="{{focus}}"
                placeholder="搜索内容"
                value="{=value=}"
                placeholder-class="searchholder"
                bindfocus="searchFocus"
                bindinput="searchInput"
                bindconfirm="searchConfirm"
                confirm-type="search"
                bindblur="searchBlur"/>
                <block s-if="focus">
                    <block s-if="value">
                        <button class="search-input-clear" hover-class="search-clear-hover" bindtap="searchClear"></button>
                    </block>
                    <view class="{{value ? 'search-deep' : 'search-sear'}}" bindtap="searchConfirm">搜索</view>
                </block>
        </view>
    </view>

    <!-- 输入框占位 -->
    <view style="height:0.52rem;"></view>

    <!-- 搜索结果 -->
    <view s-if="hasResult" class="search-result">
        <view>
            <view class="empty-icon"></view>
            <view class="empty-msg">搜索结果内容</view>
        </view>
    </view>

    <!-- 搜索无结果 -->
    <view s-if="!hasResult && showEmptyResult" class="empty-result">
        <view>
            <view class="empty-icon"></view>
            <view class="empty-msg">暂无相关内容</view>
        </view>
    </view>
</view>
```
 

```js
Page({
    data: {
        value: '',
        focus: true,
        hasResult: false,
        showEmptyResult: false,
        blur: true
    },
    searchFocus(e) {
        this.setData({
            focus: true
        });
    },
    searchInput(e) {
        const value = e.detail.value;
        this.setData({
            value,
            hasResult: false,
            showEmptyResult: false
        });
        if (!value) {
            this.resetResult();
            return false;
        }

        if (value.length === 1 && /[a-zA-Z]/.test(value)) {
            this.resetResult();
            return false;
        }
    },
    searchConfirm(e) {
        const value = this.getData('value').replace(/\s/gi, '');
        if (value) {
            this.setData({
                showEmptyResult: true
            });
        }
    },
    searchBlur(e) {
        this.setData({
            focus: false
        });
    },
    searchClear() {
        this.setData({
            value: '',
            hasResult: false,
            showEmptyResult: false
        });
    }
});
```
:::


##  Bug & Tip

* Tip：confirm-type 的最终表现与手机输入法本身的实现有关，部分安卓系统输入法和第三方输入法可能不支持或不完全支持。
* Tip：input 组件是一个原生组件，字体是系统字体，所以无法设置 font-family。
* Tip：在 input 聚焦期间，避免使用 css 动画。
* Bug：placeholder 的样式暂时只支持设置 font-size、font-weight、color 。
* Bug：在 iOS 端键盘弹起时会出现组件 bindtap 不生效的问题（部分场景，如：IM 聊天场景中的固定在页面底部的文本框与发送按钮），建议先使用 bindtouchstart 代替 bindtap。
* Tip：暂不支持 bindinput 处理函数直接 return 一个字符串。
* Tip：v3.105.0 起 input 支持同层渲染，更多请参考[原生组件](https://smartprogram.baidu.com/docs/develop/component/native/)。
