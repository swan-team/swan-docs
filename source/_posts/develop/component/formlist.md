---
title: 表单组件
header: develop
nav: component
sidebar: formlist
---


## button


**解释**： 按钮

|属性名 |类型  |默认值  |说明|
|---- | ---- | ---- |---- |
|size|String | default  |大小|
| type | String | default |类型|
| plain | Boolean  |false |按钮是否镂空，背景色透明。|
|form-type |String  | - |用于`<form/>`组件，点击分别会触发`<form/>`组件的  submit/reset 事件。|
|open-type | String | -|百度 App开放能力，比如分享、获取用户信息等等。|
|hover-class |String  |button-hover |点击态。指定按钮按下去的样式类。当  hover-class="none"  时，没有点击态效果。 button-hover 默认为{background-color: rgba(0, 0, 0, 0.1); opacity: 0.7;}。|
| hover-stop-propagation|Boolean|false |指定是否阻止本节点的祖先节点出现点击态。|
|hover-start-time | Number |20  |按住后多久出现点击态，单位毫秒。|
|hover-stay-time|Number | 70  |手指松开后点击态保留时间，单位毫秒。|
| bindgetuserinfo |Handler | - |用户点击该按钮时，会返回获取到的用户信息，从返回参数的 detail 中获取到的值，和 swan.getUserInfo 一样的。和 open-type 搭配使用， 使用时机： open-type="getUserInfo"。|
|disabled|Boolean|false|是否禁用|
|loading|Boolean|false|名称前是否带有loading图标|
|bindgetphonenumber|Handler|-|获取用户手机号回调。和 open-type 搭配使用， 使用时机： open-type=”getPhoneNumber”。具体申请方法请见：<a href="https://smartprogram.baidu.com/docs/develop/component/formlist/#获取用户手机号权限申请">获取用户手机号权限申请</a>。|
|bindopensetting|Handler|-|		在打开授权设置页后回调，使用时机：`open-type="openSetting"`。|
<!-- |lang|String	|en	|指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。	open-type="getUserInfo"。|
|bindcontact|Handler|-|		客服消息回调，使用时机：open-type="contact"。|

-->

**size有效值：**

|值 |说明|
|---- |---- |
| default |默认大小 |
| mini   |小尺寸 |


**type有效值：**

|值 |说明|
|---- |---- |
|primary	|蓝色|
| default |白色|
| warn |红色|

**open-type有效值：**

|值 |说明|
|---- |---- |
|contact|	打开客服会话。|
|share |触发用户分享，使用前建议先阅读 <a href="https://smartprogram.baidu.com/docs/develop/api/open_share/">swan.onShareAppMessage</a> 用。|
| getUserInfo |获取用户信息，可以从 bindgetuserinfo 回调中获取到用户信息，参考<a href="https://smartprogram.baidu.com/docs/develop/api/open_log/#用户数据的签名验证和加解密/">用户数据的签名验证和加解密</a>对用户数据进行处理。|
| getPhoneNumber |获取用户手机号，可以从 bindgetphonenumber 回调中获取到用户信息，参考<a href="https://smartprogram.baidu.com/docs/develop/api/open_log/#用户数据的签名验证和加解密/">用户数据的签名验证和加解密</a>对用户数据进行处理。<br>1. 非个人开发者可申请；<br>2. 审核通过后，进入小程序首页,在左侧导航栏单击“设置>开发设置”。下拉页面，在“获取用户手机号权限申请”中单击“申请开通”。|
|openSetting|	打开授权设置页|





**示例**：
<!-- <a href="swanide://fragment/81370643e0e8f39a56bfde69f120f5091548066208458" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a> -->
```css
/** button.css **/
/** 修改 button 点击态样式**/
.button-hover {
    background-color: green;
}
/** 添加自定义 button 点击态样式类**/
.other-button-hover {
    background-color: blue;
}

```

```xml
<!-- button.swan-->
<button type="default" size="mini" disabled="true" hover-class="other-button-hover">我是 button </button>
```


## 获取用户手机号权限申请

审核过后，可通过如下操作获取用户手机号权限：
1、在页面左侧导航栏，单击“设置-开发设置”；
2、下拉页面，可见“获取用户手机号申请”，单击“申请开通”；
3、在弹出的页面填写如下信息，点击提交。

![图片](../../../img/introduction/register/register-14.png)


## checkbox

**解释**： 多选项目


|属性名 |类型  |默认值  |说明|
|---- | ---- | ---- |---- |
|value | String  |-|`<checkbox/>`标识，选中时触发`<checkbox-group/>`的 change 事件，并携带`<checkbox/>`的 value|
|disabled|Boolean| false| 是否禁用|
|checked|Boolean | false| 当前是否选中，可用来设置默认选中|
|color| Color|- | checkbox 的颜色，同 CSS 的 color|


示例：
<!-- <a href="swanide://fragment/78b63afcadb30a4071508be700c5b5171548066839061" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a> -->
```xml
<!-- checkbox.swan -->
<form bind:submit="formSubmit">
    <checkbox-group bind:change="checkboxChange" name="citylist">
        <view class="checkbox" s-for="item in items">
            <checkbox value="{{item.value}}" checked="{{item.checked}}">{{item.text}}</checkbox>
        </view>
        <view class="checkbox">
            <checkbox value="red" color="red">我是红色的</checkbox>
        </view>
        <view class="checkbox">
            <checkbox value="disabled" disabled>我不可用</checkbox>
        </view>
    </checkbox-group>
    <button formType="submit">提交</button>
    <button formType="reset">重置</button>
</form>

```


```javascript
// checkbox.js
Page({
    data: {
        items: [
            {
                value: 'China',
                text: '中国'
            },
            {
                value: 'US',
                text: '美国'
            },
            {
                value: 'Britain',
                text: '英国',
                checked: true
            }
        ]
    },
    checkboxChange(e) {
        console.log(e.detail);
    },
    formSubmit(e) {
        // todo someThing
    }
});

```
### checkbox-group

<div class="notice">解释： </div>多项选择器
<div></div>

**内部由多个 checkbox 组成**

|属性名 |类型  |默认值  |说明|
|---- | ---- | ---- |---- |
|bindchange | EventHandle  |-|`<checkbox-group/>`中选中项发生改变时触发 change 事件，detail = {value:[选中的checkbox的value的数组]}|

## form

<div class="notice">解释： </div>表单
<div></div>

将组件内的用户输入的`<switch/>   <input/>   <checkbox/>   <slider/>   <radio/>   <picker/>`提交。

当点击`<form/>`表单中 form-type 为 submit 的`<button/>`组件时，会将表单组件中的 value 值进行提交，需要在表单组件中加上 name 来作为 key。

|属性名 |类型 |说明|最低版本|
|-----|---- |---- |----|
| bindsubmit | EventHandle    |携带 form 中的数据触发 submit 事件，`event.detail = {value : {'name': 'value'}}	`|-|
| bindreset | EventHandle   |表单重置时会触发 reset 事件|-|
|report-submit|Boolean|是否返回 formId ，默认为false。|1.12|


示例：
<!-- <a href="swanide://fragment/ae55c117fd32f76e6287a4d1754c7aa01548068500546" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a> -->

```xml
<form bindsubmit="formSubmitHandle" bindreset="formReset" report-submit>
    <view class="btn-area">
    <view class="section-title">input输入框</view>
    <input name="input" placeholder="please input here~~~" />
    </view>
    <view class="btn">
        <button class="form-button" form-type="submit">提交</button>
        <button class="form-button" form-type="reset">重置</button>
    </view>
</form>
```

```javascript
Page({
    formSubmitHandle: function(e) {
      console.log('form表单submit：', e.detail.value);
      console.log('form表单submit：', e.detail.formId);
    },
    formReset: function() {
        console.log('form表单reset')
    }
});
```

## input

**解释**：输入框

|属性名 |类型  |默认值  |说明|
|---- | ---- | ---- |---- |
| value | String  |-|输入框的初始内容。若要动态设置输入框内容，需设置 `value="{= value =}"`|
| type | String  |text  |input 的类型|
| password | Boolean  | false  |是否是密码类型|
| placeholder | String  |-  |输入框为空时占位符|
|placeholder-style| String  | - | placeholder 的样式|
|placeholder-class |  String |input-placeholder  |placeholder 的样式类|
| disabled | Boolean  | false  |是否禁用|
| maxlength | Number  | 140 |最大输入长度，设置为 -1 的时候不限制最大长度|
|cursor-spacing |Number	  |0  |指定光标与键盘的距离，单位 px 。取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离|
| focus |Boolean	  | false |获取焦点	|
|confirm-type|String  | done |设置键盘右下角按钮的文字|
|confirm-hold | Boolean  | false |点击键盘右下角按钮时是否保持键盘不收起|
|cursor	 | Number  |- |指定 focus 时的光标位置|
|selection-start | Number | -1 | 光标起始位置，自动聚集时有效，需与 selection-end 搭配使用 <font color="#4183c4">百度 APP 10.10 以上</font>|
|selection-end | Number | -1 | 光标结束位置，自动聚集时有效，需与 selection-start 搭配使用 <font color="#4183c4">百度 APP 10.10 以上</font>|
|adjust-position | Boolean | true | 键盘弹起时，是否自动上推页面 <font color="#4183c4">百度 APP 10.10 以上</font>|
| bindinput | EventHandle  | - |当键盘输入时，触发 input 事件，event.detail = {value, cursor}，处理函数可以直接 return 一个字符串，将替换输入框的内容。|
| bindfocus | EventHandle  | -|输入框聚焦时触发，event.detail = {value: value}|
|bindblur	|EventHandle	  |- |输入框失去焦点时触发，event.detail = {value: value}|
| bindconfirm |EventHandle	  | -|点击完成按钮时触发，event.detail = {value: value}|


**type 有效值：**

|值|说明 |
|---- | ---- |
| text |文本输入键盘 |
| number |数字输入键盘 |
| digit |带小数点的数字键盘 |

**confirm-type 有效值：**

|值|说明 |
|---- | ---- |
| send |右下角按钮为 “发送”|
|search |右下角按钮为 “搜索” |
| next |右下角按钮为 “下一个”|
| go |右下角按钮为 “前往” |
| done |右下角按钮为 “完成” |

**示例**：
<!-- <a href="swanide://fragment/96f998d76928f1aba4cf4dfd66271dfe1548067130957" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果
</a> -->
```xml
<!-- input.swan -->
<view class="section">
    <input value="{=value=}" maxlength="20" placeholder="最大输入长度20" />
</view>

```
**说明：**
* confirm-type 的最终表现与手机输入法本身的实现有关，部分安卓系统输入法和第三方输入法可能不支持或不完全支持；
* input 组件是一个原生组件，字体是系统字体，所以无法设置 font-family；
* 在 input 聚焦期间，避免使用 css 动画。
* placeholder 的样式暂时只支持设置 font-size、font-weight、color 。

## label

**解释**： 使用 for 属性找到对应的 id（必须写for），当点击时，就会触发对应的控件。

for 优先级高于内部控件，内部有多个控件的时候默认触发第一个控件。

目前可以绑定的控件有：`'<button/>`、 `<checkbox/>`、 `<radio/>`、`<switch/>`。
<div></div>

|属性名|类型|说明|
|-----|--- |--- |
|for|String|绑定控件的 id|
**示例**：
<!-- <a href="swanide://fragment/95eca5f691f984f4c480416e0059c1d71540395356" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a> -->

```
<view class="section">
    <label>
        选项一label
        <checkbox>选项一</checkbox>
    </label>

    <checkbox id="checkbox-id">选项二</checkbox>
    <label for="checkbox-id">
        选项二label
    </label>
</view>
```

## picker

<div class="notice">解释： </div>选择器
<div></div>

从底部弹起的滚动选择器。现支持五种选择器，通过 mode 来区分，分别是时间选择器、日期选择器、普通选择器、多列选择器以及省市区选择器，默认是普通选择器。

<notice>时间选择器：mode = time</notice>

|属性名 |类型  |默认值  |说明|
|---- | ---- | ---- |---- |
| value | String  |- |表示选中的时间，格式为 "hh:mm"|
| start | String  | - |表示有效时间范围的开始，字符串格式为 "hh:mm"|
| end | String  |- |表示有效时间范围的结束，字符串格式为 "hh:mm"|
|bindchange| EventHandle |-|value 改变时触发 change 事件，event.detail = {value: value}|
| disabled | Boolean | false |是否禁用|
|bindcancel|	EventHandle|-|		取消选择或点遮罩层收起 picker 时触发|

<notice>日期选择器：mode = date</notice>

|属性名 |类型  |默认值  |说明|
|---- | ---- | ---- |---- |
| value | String | 当前日期|表示选中的日期，格式为 "YYYY-MM-DD"|
| start | String | -|表示有效日期范围的开始，字符串格式为 "YYYY-MM-DD"|
| end | String |- |表示有效日期范围的结束，字符串格式为 "YYYY-MM-DD"|
| fields | String | day |有效值 year、 month、 day，表示选择器的粒度|
| bindchange | EventHandle | - |value 改变时触发 change 事件，event.detail = {value: value}|
| disabled | Boolean  | false |是否禁用|
|bindcancel	|EventHandle|-|		取消选择时触发|

<notice>普通选择器：mode = selector</notice>

|属性名 |类型  |默认值  |说明|
|---- | ---- | ---- |---- |
| range | Array/Array.<object> |[]|mode 为 selector 或 multiSelector 时，range 有效|
| range-key | String |- |当 range 是一个 Array.<object> 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容|
| value | Number | 0 |value 的值表示选择了 range 中的第几个（下标从 0 开始）|
| bindchange | EventHandle |-|value 改变时触发 change 事件，event.detail = {value: value}|
| disabled | Boolean  | false |是否禁用|
| title | String | -| 选择器标题（仅安卓有效）默认值为 "设置" |
|bindcancel|EventHandle |-|取消选择或点击遮罩层收起 picker 时触发。|

<notice>多列选择器：mode = multiSelector</notice>

|属性名 |类型  |默认值  |说明|
|---- | ---- | ---- |---- |
| range | 二维 Array/Array.<object> |[]|mode 为 selector 或 multiSelector 时，range 有效。二维数组，长度表示多少列，数组的每项表示每列的数据，如[["a","b"], ["c","d"]]|
| range-key | String |- |当 range 是一个二维 Array.<object> 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容|
| value | Array | [ ] |value 每一项的值表示选择了 range 对应项中的第几个（下标从 0 开始）|
| bindcolumnchange | EventHandle |-|某一列的值改变时触发 columnchange 事件，event.detail = {column: column, value: value}，column 的值表示改变了第几列（下标从0开始），value 的值表示变更值的下标|
| bindchange | EventHandle |-|value 改变时触发 change 事件，event.detail = {value: value}|
| disabled | Boolean  | false |是否禁用|
| title | String |- | 选择器标题（仅安卓有效）默认值为 "设置" |
|bindcancel|	EventHandle|-|		取消选择时触发|

<notice>省市区选择器：mode = region</notice>

|属性名 |类型  |默认值  |说明|
|---- | ---- | ---- |---- |
| value | Array | [] |表示选中的省市区，默认选中每一列的第一个值|
| custom-item | String |-|可为每一列的顶部添加一个自定义的项|
| bindchange | EventHandle |-|value 改变时触发 change 事件，event.detail = {value: value}|
| disabled | Boolean  | false |是否禁用|
| title | String | -| 选择器标题（仅安卓有效）默认值为 "设置" |
|bindcancel|	EventHandle|-|		取消选择时触发|

<notice>fields 有效值</notice>

|值 |说明 |
|---- | ---- |
|year |选择器粒度为年 |
|month |选择器粒度为月份|
|day |选择器粒度为天|

**示例**：
<!-- <a href="swanide://fragment/6c3b4418ea1963aae604f3ffe3d5d3b81548066758143" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a> -->
```xml
<view class="section">
    <view class="section-title">时间选择器</view>
    <picker mode="time" value="{{time}}" start="11:11" end="23:11" bindchange="bindTimeChange">
        <view class="picker">
            当前选择: {{time}}
        </view>
    </picker>
</view>
<view class="section">
    <view class="section-title">单列选择器</view>
    <picker mode="selector" value="{{index}}" range="{{array}}" bind:change="selectorChange" title="普通选择器">
        <view class="picker">
            当前选择: {{array[index]}}
        </view>
    </picker>
</view>
<view class="section">
    <view class="section-title">多列选择器</view>
    <picker mode="multiSelector" bindchange="bindMultiPickerChange" bindcolumnchange="bindMultiPickerColumnChange" value="{{multiIndex}}" range="{{multiArray}}" title="多列选择器">
        <view class="picker">
            当前选择：{{multiArray[0][multiIndex[0]]}}，{{multiArray[1][multiIndex[1]]}}，{{multiArray[2][multiIndex[2]]}}
        </view>
    </picker>
</view>
<view class="section">
    <view class="section-title">地区选择器</view>
    <picker mode="region" bindchange="regionChange" custom-item="{{customItem}}" title="省市区选择器">
        <view class="picker">
            当前选择：{{regionData[0]}} {{regionData[1]}} {{regionData[2]}}
        </view>
    </picker>
</view>
```

```javascript
Page({
    data: {
        time: '12:12',
        index: 1,
        array: ['科目一', '科目二', '科目三', '科目四'],
        multiIndex: [0, 0, 0],
        multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
        regionData: ['全部', '全部', '全部'],
        customItem: '全部'
    },
    bindTimeChange: function(e) {
        console.log('picker-time changed，值为', e.detail.value)
        this.setData({
            time: e.detail.value
        })
    },
    selectorChange: function (e) {
        console.log('picker-selector changed，值为', e.detail.value)
        this.setData(
            'index', e.detail.value
        );
    },

    bindMultiPickerChange: function (e) {
        console.log('picker-multiSelector changed，值为', e.detail.value)
        this.setData(
            'multiIndex', e.detail.value
        );
    },

    bindMultiPickerColumnChange: function (e) {
        console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
        var data = {
            multiArray: this.getData('multiArray'),
            multiIndex: this.getData('multiIndex')
        };
        data.multiIndex[e.detail.column] = e.detail.value;
        switch (e.detail.column) {
            case 0:
                switch (data.multiIndex[0]) {
                    case 0:
                        data.multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
                        data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
                        break;
                    case 1:
                        data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
                        data.multiArray[2] = ['鲫鱼', '带鱼'];
                        break;
                }
                data.multiIndex[1] = 0;
                data.multiIndex[2] = 0;
                break;
            case 1:
                switch (data.multiIndex[0]) {
                    case 0:
                        switch (data.multiIndex[1]) {
                            case 0:
                                data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
                                break;
                            case 1:
                                data.multiArray[2] = ['蛔虫'];
                                break;
                            case 2:
                                data.multiArray[2] = ['蚂蚁', '蚂蟥'];
                                break;
                            case 3:
                                data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓'];
                                break;
                            case 4:
                                data.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
                                break;
                        }
                        break;
                    case 1:
                        switch (data.multiIndex[1]) {
                            case 0:
                                data.multiArray[2] = ['鲫鱼', '带鱼'];
                                break;
                            case 1:
                                data.multiArray[2] = ['青蛙', '娃娃鱼'];
                                break;
                            case 2:
                                data.multiArray[2] = ['蜥蜴', '龟', '壁虎'];
                                break;
                        }
                        break;
                }
                data.multiIndex[2] = 0;
                break;
        }
        this.setData('multiArray', data.multiArray);
        this.setData('multiIndex', data.multiIndex);
    },

    regionChange: function (e) {
        this.setData(
            'regionData', e.detail.value
        );
        console.log('picker-time changed，值为', e.detail.value)
    }

});
```

## picker-view

<div class="notice">解释： </div>嵌入页面的滚动选择器
<div></div>

|属性名 |类型  |说明|
|---- | ---- |---- |
| value |NumberArray  |数组中的数字依次表示 picker-view 内的 picker-view-colume 选择的第几项（下标从 0 开始），数字大于 picker-view-column 可选项长度时，选择最后一项。|
|indicator-style | String |设置选择器中间选中框的样式|
|indicator-class | String |设置选择器中间选中框的类名|
|mask-style | String |设置蒙层的样式 |
|mask-class | String |设置蒙层的类名|
| bindchange | EventHandle |当滚动选择，value 改变时触发 change 事件，event.detail = {value: value}；value 为数组，表示 picker-view 内的 picker-view-column 当前选择的是第几项（下标从 0 开始）|


**说明**: 

其中只可放置`<picker-view-column/>`组件，其他节点不会显示。

<notice>picker-view-column</notice>

<div class="notice">解释： </div>仅可放置于`<picker-view />`中，其孩子节点的高度会自动设置成与 picker-view 的选中框的高度一致。<div></div>


## radio

**解释**： 单选项目

| 属性名 | 类型 | 默认值 | 说明 |
| ---- | ---- | ---- | ---- |
| value | String | &nbsp; | &lt;radio/&gt; 标识。当该 &lt;radio/&gt; 选中时，&lt;radio-group/&gt; 的 change 事件会携带 &lt;radio/&gt; 的 value |
| checked | Boolean | false | 当前是否选中 |
| disabled | Boolean | false | 是否禁用 |
| color | Color | &nbsp; | radio 的颜色，同 CSS 的 color |

**示例**： 
<!-- <a href="swanide://fragment/a6506042f44f66d158d733ceb336504e1540395739" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a> -->
```xml
<radio-group bindchange="radioChange">
    <label s-for="item in items">
        <radio value="{{item.name}}"
            checked="{{item.checked}}"
            disabled="{{item.disabled}}"
            color="#ff0000" />
        {{item.value}}
    </label>
</radio-group>
```

```javascript
Page({
    data: {
        items: [
            {name: 'USA', value: '美国'},
            {name: 'CHN', value: '中国', checked: true},
            {name: 'BRA', value: '巴西'},
            {name: 'JPN', value: '日本'},
            {name: 'ENG', value: '英国', disabled: true},
            {name: 'TUR', value: '法国'}
        ]
    },
    radioChange: function(e) {
        console.log('radio发生change事件，携带value值为：', e.detail.value);
    }
});
```
### radio-group

<div class="notice">解释： </div>单项选择
<div></div>

<notice>内部由多个 &lt;radio/&gt; 组成</notice>

| 属性名 | 类型 | 默认值 | 说明 |
| ---- | ---- | ---- | ---- |
| bindchange | EventHandle | &nbsp; | &lt;radio-group/&gt; 中的选中项发生变化时触发 change 事件，event.detail = {value: 选中项 radio 的 value} |

## slider

**解释：**滑动选择器

**属性说明：**

|属性名 |类型  |默认值  |说明|
|---- | ---- | ---- |---- |
| min | Number  | 0  |最小值|
| max | Number  |100  |最大值|
| step |Number  |1 |步长，取值必须大于 0，并且可被 (max - min) 整除|
| disabled | Boolean |false  |是否禁用|
| value | Number  |0 |当前取值|
| backgroundColor | Color  |#cccccc  |背景条的颜色|
| block-size | Number  |24 |滑块的大小，取值范围为 12 - 28|
| block-color | Color  |#ffffff |滑块的颜色|
| activeColor | Color  |#3c76ff |已选择的颜色|
|show-value |Boolean  |false |是否显示当前 value|
|bindchange | EventHandle  |-|完成一次拖动后触发的事件，event.detail = {value: value}|
|bindchanging |EventHandle |-  |拖动过程中触发的事件，event.detail = {value: value}|

**示例：**
<!-- <a href="swanide://fragment/5236c0d2b60c7f3fa5ba5434388248671548066651713" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a> -->


```xml
<!--- slider.swan --->
<p>default</p>
<slider></slider>
<br/>
<slider value="50"></slider>
<br/>

<p>disabled</p>
<slider disabled></slider>
<slider disabled value="50" step="20" showValue></slider>
<br/>

<p>swan-slider-demo</p>
<slider showValue></slider>
<br/>

<slider showValue max="2000" min="200" step="50"></slider>
<br/>
<p>value=100 小于 min: 200</p>
<slider showValue max="2000" min="200" step="50" value="100"></slider>
<p>value=3000 大于于 max: 2000</p>
<slider showValue max="2000" min="200" step="50" value="3000"></slider>
<br/>


<p>step: 20</p>
<slider step="20" showValue></slider>
<br/>
<slider step="20" showValue value="20"></slider>

<p>color</p>
<slider step="20" showValue value="20" backgroundColor="red"></slider>
<slider step="20" showValue value="20" backgroundColor="red" activeColor="green"></slider>

<p>event</p>
<slider bind:change="sliderChange" bind:changing="sliderChanging" showValue></slider>

```


```javascript
// slider.js
Page({
    data: {
        zztest: 'hzz780'
    },
    sliderChange: e ={
        console.log('sliderChange', e, e.detail);
    },
    sliderChanging: e ={
        console.log('sliderChanging', e, e.detail);
    }
});

```

## switch

**解释**： 开关选择器

|属性名 |类型  |默认值  |说明|
|---- | ---- | ---- |---- |
|checked| Boolean| false| 是否选中|
|type| String| switch| 样式，有效值：switch,checkbox|
|color| Color| \#09bb07| switch 的颜色，同 CSS 的 color|
|disabled|	Boolean|	false|	是否禁用|
|bindchange | EventHandle  |-|checked 改变时触发 change 事件，event.detail={ checked:true}|


**示例**：
<!-- <a href="swanide://fragment/429b88b3cb4862e1392395536a2ffd941540395596" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果 </a> -->
```xml
<!-- swith.swan -->
<form bind:submit="formSubmit">
    <switch name="switch1" type="checkbox" checked="false"></switch>
    <switch name="switch2" color="red"></switch>
    <switch name="switch3" checked></switch>
    <switch name="switch4" checked="true"></switch>
    <switch name="switch5" bind:change="changeEvent"></switch>
    <button formType="submit">提交</button>
    <button formType="reset">重置</button>
</form>

```


```javascript
// switch.js
changeEvent: e ={
    console.log('change', e);
},
formSubmit: e ={
    console.log('submit', e);
}

```

**说明**: 
switch 类型切换时在 IOS 自带振动反馈，可在系统设置 -声音与触感 -系统触感反馈中关闭。
<div></div>


## textarea

**解释**：多行输入框。

|属性名|类型|默认值|说明|
|----|----|----|----|
|value|String|-|输入框的内容，若要动态设置输入框内容，需设置 `value="{= value =}"`。|
|placeholder|String|-|输入框为空时占位符|
|placeholder-style|String|-|指定 placeholder 的样式|
|placeholder-class|String|textarea-placeholder|指定 placeholder 的样式类|
|disabled|Boolean|false|是否禁用|
|maxlength|Number|140|最大输入长度，设置为 -1 的时候不限制最大长度|
|auto-height|Boolean|false|是否自动增高，设置auto-height时，style.height不生效|
|bindfocus|EventHandle|-|输入框聚焦时触发，event.detail = { value, height }，height|
|bindblur|EventHandle|-|输入框失去焦点时触发，event.detail = {value, cursor}|
|bindlinechange|EventHandle|-|输入框行数变化时调用，event.detail = {height: 0, heightRpx: 0, lineCount: 0}|
|bindinput|EventHandle|-|当键盘输入时，触发 input 事件，event.detail = {value, cursor}， bindinput 处理函数的返回值并不会反映到 textarea 上|
|bindconfirm|EventHandle|-|点击完成时， 触发 confirm 事件，event.detail = {value: value}|
|cursor|Number|-1|指定focus时的光标位置 <font color="#4183c4">10.8.5 以上</font>|
|auto-focus|Boolean|false|自动聚焦，拉起键盘 <font color="#4183c4">10.8.5 以上</font>|
|focus|Boolean|false|获取焦点 <font color="#4183c4">10.8.5 以上</font>|
|fixed|Boolean|false|如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true <font color="#4183c4">10.8.5 以上</font>|
|cursor-spacing|Number|0|指定光标与键盘的距离，单位 px 。取 textarea 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离 <font color="#4183c4">10.8.5 以上</font>|
|show-confirm-bar|Boolean|true|是否显示键盘上方带有”完成“按钮那一栏。  <font color="#4183c4">10.8.5 以上</font>|
|selection-start|Number|-1|光标起始位置，自动聚集时有效，需与selection-end搭配使用 <font color="#4183c4">10.8.5 以上</font>|
|selection-end|Number|-1|光标结束位置，自动聚集时有效，需与selection-start搭配使用 <font color="#4183c4">10.8.5 以上</font>|
|adjust-position|Boolean|true|键盘弹起时，是否自动上推页面 <font color="#4183c4">10.8.5 以上</font>|

**示例代码**：
<!-- <a href="swanide://fragment/ecb898c32b2c234043c55e7b67664deb1540395947" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a> -->
```html
<!--textarea.swan-->
<view class="section">
    <textarea placeholder="自动变高"
        auto-height
        bindinput="bindInput"
        bindfocus="bindFocus"
        bindblur="bindBlur"
        bindlinechange="bindLinechange" />
</view>
<view class="section">
    <textarea placeholder="placeholder颜色是红色的" placeholder-style="color:red;"  />
</view>
```

```javascript
//textarea.js
Page({
    data: {
        height: 20,
        focus: false
    },
    bindFocus(e) {
        console.log('focus - e:', e);
        swan.showToast({
            'title': `focus - ${e.detail.value}`
        });
    },
    bindInput(e) {
        console.log('input - e:', e);
        swan.showToast({
            'title': `input - ${e.detail.value}`
        });
    },
    bindLinechange(e) {
        console.log('linechange - e:', e);
        swan.showToast({
            'title': `linechange - ${e.detail.value}`
        });
    },
    bindBlur(e) {
        console.log('blur - e:', e);
        swan.showToast({
            'title': `blur - ${e.detail.value}`
        });
    }
});
```
**说明**：
* textarea 的 blur 事件会晚于页面上的 tap 事件，如果需要在 button 的点击事件获取 textarea，可以使用 form 的 bindsubmit。
* 不建议在多行文本上对用户的输入进行修改，所以 textarea 的 bindinput 处理函数并不会将返回值反映到 textarea 上。
