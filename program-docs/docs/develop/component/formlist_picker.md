---
title: picker 底部弹起的滚动选择器
header: develop
nav: component
sidebar: formlist_picker
webUrl: https://qft12m.smartapps.cn/subPackages/componentPackage/pages/picker/picker
---



**解释**：从底部弹起的滚动选择器。现支持五种选择器，通过 mode 来区分，分别是时间选择器、日期选择器、普通选择器、多列选择器以及省市区选择器，默认是普通选择器。

##  属性说明 

|属性|类型|默认值|必填|说明|
|:--- |:---|:---|:---|:---|
|mode|String|selector|否|选择器类型|
|disabled|Boolean|false|否|是否禁用|
|bindcancel|EventHandle||否|取消选择或点击遮罩层收起 picker 时触发|

> 除去上述通用属性外，针对不同的mode，picker组件还提供有其他不同的属性，详细介绍见下。

###  mode的有效值 

|值|说明|
|:---|:---|
|selector|普通选择器|
|time|时间选择器|
|date|日期选择器|
|multiSelector|多列选择器|
|region|省市区选择器|

### 普通选择器：mode = selector 

|属性名 |类型  |默认值  |说明|
|:--- |:---|:---|:---|:---|
| range | Array &#124;  Array.&lt; object&gt;  |[]|mode 为 selector 或 multiSelector 时，range 有效|
| range-key | String |  |当 range 是一个 Array.&lt; object&gt; 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容|
| value | Number | 0 |value 的值表示选择了 range 中的第几个（下标从 0 开始）|
| bindchange | EventHandle | |value 改变时触发 change 事件，event.detail = {value: value}|
| title | String |  | 选择器标题（仅安卓有效）默认值为 "设置"; <font color="#4183c4">基础库 3.110.3 及以上废弃</font> |


### <notice>时间选择器：mode = time</notice>

|属性名 |类型  |默认值  |说明|
|:--- |:---|:---|:---|:---|
| value | String  |  |表示选中的时间，格式为 "hh:mm"|
| start | String  |   |表示有效时间范围的开始，字符串格式为 "hh:mm"|
| end | String  | |表示有效时间范围的结束，字符串格式为 "hh:mm"|
|bindchange| EventHandle | |value 改变时触发 change 事件，event.detail = {value: value}|

### <notice>日期选择器：mode = date</notice>

|属性名 |类型  |默认值  |说明|
|:--- |:---|:---|:---|:---|
| value | String | 当前日期|表示选中的日期，格式为 "YYYY-MM-DD"|
| start | String |  |表示有效日期范围的开始，字符串格式为 "YYYY-MM-DD"|
| end | String |  |表示有效日期范围的结束，字符串格式为 "YYYY-MM-DD"|
| fields | String | day |有效值 year、 month、 day，表示选择器的粒度|
| bindchange | EventHandle |   |value 改变时触发 change 事件，event.detail = {value: value}|

### fields有效值：

| 值 | 说明 |
| :---- |: ---- |
| year | 选择器粒度为年 |
| month | 选择器粒度为月份 |
| day | 选择器粒度为天 |


### <notice>多列选择器：mode = multiSelector</notice>

|属性名 |类型  |默认值  |说明|
|:--- |:---|:---|:---|:---|
| range | 二维 Array &#124; Array.&lt; object&gt;  |[]|mode 为 selector 或 multiSelector 时，range 有效。二维数组，长度表示多少列，数组的每项表示每列的数据，如[["a","b"], ["c","d"]]|
| range-key | String |  |当 range 是一个二维 Array.&lt; object&gt; 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容|
| value | Array | [ ] |value 每一项的值表示选择了 range 对应项中的第几个（下标从 0 开始）|
| bindcolumnchange | EventHandle | |某一列的值改变时触发 columnchange 事件，event.detail = {column: column, value: value}，column 的值表示改变了第几列（下标从0开始），value 的值表示变更值的下标|
| bindchange | EventHandle | |value 改变时触发 change 事件，event.detail = {value: value}|
| title | String | | 选择器标题（仅安卓有效）默认值为 "设置"; <font color="#4183c4">基础库 3.110.3 及以上废弃</font> |

### <notice>省市区选择器：mode = region</notice>

|属性名 |类型  |默认值  |说明|
|:--- |:---|:---|:---|:---|
| value | Array | [] |表示选中的省市区，默认选中每一列的第一个值|
| custom-item | String | |可为每一列的顶部添加一个自定义的项|
| bindchange | EventHandle | |value 改变时触发 change 事件，event.detail = {value}， 暂不支持统计用区划代码（code）、邮政编码（postcode）。|
| title | String |  | 选择器标题（仅安卓有效）默认值为 "设置"; <font color="#4183c4">基础库 3.110.3 及以上废弃</font> |


## 示例

<a href="swanide://fragment/e65d3e49c437693078e67f57238fbdd91577360624286" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/picker.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>


 

###  代码示例 1：普通选择器 

<a href="swanide://fragment/c16ae3b84a6ac40fefd4ddb0db99f3ce1572872865725" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="wrap">
    <view class="title">普通选择</view>
    <view class="section">
        <picker mode="selector" value="{{arrIndex}}" range="{{selector}}" bind:change="selectorChange"  bind:cancel="cancel">
            <view class="picker">
                <text class='chooseItem'>当前选择:</text>{{selector[arrIndex]}}
            </view>
        </picker>
    </view>
</view>
```
* 在 js 文件中

```javascript
Page({
    data: {
        arrIndex: 0,
        selector: ['React', 'Vue', 'AngularJS']
    },
    selectorChange(e) {
        console.log('picker-selector changed，值为', e.detail.value);
        this.setData('arrIndex', e.detail.value);
    },
    cancel() {
        swan.showToast({
            title: '用户取消选择',
            icon: 'none'
        });
    }
});
```

###  代码示例 2：时间选择器 

<a href="swanide://fragment/6d81c7bad0496d09ca8ffe7981c5c3bf1572872978396" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="wrap">
    <view class="title">时间选择</view>
    <view class="section">
        <picker mode="time" value="{{time}}" start="1:01" end="22:59" bind:change="timeChange" disabled="false" bind:cancel="cancel">
            <view class="picker">
                <text class='chooseItem'>当前选择:</text>{{time}}
            </view>
        </picker>
    </view>
</view>
```
* 在 js 文件中

```javascript
Page({
    data: {
        time: '12:12'
    },
    timeChange(e) {
        console.log('picker-time changed，值为', e.detail.value);
        this.setData(
            'time', e.detail.value
        );
    },
    cancel() {
        swan.showToast({
            title: '用户取消选择',
            icon: 'none'
        });
    }
});
```




###  代码示例 3 ：日期选择器

<a href="swanide://fragment/0f83f4c4024d8c279589f5bb594515b51572873363338" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="wrap">
    <view class="title">日期选择</view>
    <view class="section date-section">
        <picker mode="date" value="{{dateDay}}" bind:change="dateChangeDay" fields="day" bind:cancel="cancel">
            <view>
                <text class='chooseItem'>当前选择:</text>{{dateDay}}
            </view>
        </picker>
    </view>
</view>
```
* 在 js 文件中

```javascript
Page({
    data: {
        dateDay: '2018-01-05',
    },
    dateChangeDay(e) {
        console.log('picker-date changed，值为', e.detail.value);
        this.setData(
            'dateDay', e.detail.value
        );
    },
    cancel() {
        swan.showToast({
            title: '用户取消选择',
            icon: 'none'
        });
    }
});
```

###  代码示例 4 ：多列选择器

<a href="swanide://fragment/6521d8dc859cdee233d6e68b00a2b1301572873475056" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="wrap">
    <view class="title">多列选择器</view>
    <view class="section date-section">
        <picker mode="multiSelector" bindchange="bindMultiPickerChange" bindcolumnchange="bindMultiPickerColumnChange" value="{{multiIndex}}" range="{{multiArray}}" title="多列选择器">
            <view class="picker">
                <text class='chooseItem'>当前选择:</text>{{multiArray[0][multiIndex[0]]}} {{multiArray[1][multiIndex[1]]}} {{multiArray[2][multiIndex[2]]}}
            </view>
        </picker>
    </view>
</view>
```
* 在 js 文件中

```javascript
Page({
    data: {
        multiIndex: [0, 0, 0],
        multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']]
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
    }
});
```


###  代码示例 5 ：地区选择器

<a href="swanide://fragment/26a9c93186196d102d032ebcbfcf6df41572873584926" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="wrap">
    <view class="title">地区选择</view>
    <view class="section">
        <picker mode="region" bind:change="regionChange" custom-item="{{customItem}}" title="地区选择器" bind:cancel="cancel">
            <view class="picker">
                <text class='chooseItem'>当前选择:</text>{{regionData[0]}} {{regionData[1]}} {{regionData[2]}}
            </view>
        </picker>
    </view>
</view>
```
* 在 js 文件中

```javascript
Page({
    data: {
        regionData: ['全部', '全部', '全部'],
    },
    regionChange(e) {
        this.setData(
            'regionData', e.detail.value
        );
        console.log('picker-time changed，值为', e.detail.value);
    },
    cancel() {
        swan.showToast({
            title: '用户取消选择',
            icon: 'none'
        });
    },
});
```


##  Bug & Tip 

* Tip：基础库版本 11.15 以下：picker 组件在 iOS 系统中从底部弹出，在安卓系统中从中间弹出。

* Tip：基础库版本 11.15 及以上：picker 组件双端都是从底部弹出。
