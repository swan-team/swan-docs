---
title: picker 底部弹起的滚动选择器
header: develop
nav: component
sidebar: formlist_picker 
---



**解释：** 从底部弹起的滚动选择器。现支持五种选择器，通过 mode 来区分，分别是时间选择器、日期选择器、普通选择器、多列选择器以及省市区选择器，默认是普通选择器。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/picker.png"  class="demo-qrcode-image" />

**属性说明**：

|属性|类型|默认值|必填|说明|
|--- |---|---|---|---|
|mode|String|selector|否|选择器类型|
|disabled|Boolean|false|否|是否禁用|
|bindcancel|EventHandle||否|取消选择或点击遮罩层收起 picker 时触发|

> 除去上述通用属性外，针对不同的mode，picker组件还提供有其他不同的属性，详细介绍见下。

**mode的有效值**

|值|说明|
|---|---|
|selector|普通选择器|
|time|时间选择器|
|date|日期选择器|
|multiSelector|多列选择器|
|region|省市区选择器|

<notice>普通选择器：mode = selector</notice>

|属性名 |类型  |默认值  |说明|
|---- | ---- | ---- |---- |
| range | Array &#124; ` Array.<object> ` |[]|mode 为 selector 或 multiSelector 时，range 有效|
| range-key | String |  |当 range 是一个 ` Array.<object> ` 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容|
| value | Number | 0 |value 的值表示选择了 range 中的第几个（下标从 0 开始）|
| bindchange | EventHandle | |value 改变时触发 change 事件，event.detail = {value: value}|
| title | String |  | 选择器标题（仅安卓有效）默认值为 "设置" |


<notice>时间选择器：mode = time</notice>

|属性名 |类型  |默认值  |说明|
|---- | ---- | ---- |---- |
| value | String  |  |表示选中的时间，格式为 "hh:mm"|
| start | String  |   |表示有效时间范围的开始，字符串格式为 "hh:mm"|
| end | String  | |表示有效时间范围的结束，字符串格式为 "hh:mm"|
|bindchange| EventHandle | |value 改变时触发 change 事件，event.detail = {value: value}|

<notice>日期选择器：mode = date</notice>

|属性名 |类型  |默认值  |说明|
|---- | ---- | ---- |---- |
| value | String | 当前日期|表示选中的日期，格式为 "YYYY-MM-DD"|
| start | String |  |表示有效日期范围的开始，字符串格式为 "YYYY-MM-DD"|
| end | String |  |表示有效日期范围的结束，字符串格式为 "YYYY-MM-DD"|
| fields | String | day |有效值 year、 month、 day，表示选择器的粒度|
| bindchange | EventHandle |   |value 改变时触发 change 事件，event.detail = {value: value}|

<div style="font-style: italic"> fields有效值：</div>

| 值 | 说明 |
| ---- | ---- |
| year | 选择器粒度为年 |
| month | 选择器粒度为月份 |
| day | 选择器粒度为天 |

<notice>多列选择器：mode = multiSelector</notice>

|属性名 |类型  |默认值  |说明|
|---- | ---- | ---- |---- |
| range | 二维 Array &#124; ` Array.<object> ` |[]|mode 为 selector 或 multiSelector 时，range 有效。二维数组，长度表示多少列，数组的每项表示每列的数据，如[["a","b"], ["c","d"]]|
| range-key | String |  |当 range 是一个二维 ` Array.<object> ` 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容|
| value | Array | [ ] |value 每一项的值表示选择了 range 对应项中的第几个（下标从 0 开始）|
| bindcolumnchange | EventHandle | |某一列的值改变时触发 columnchange 事件，event.detail = {column: column, value: value}，column 的值表示改变了第几列（下标从0开始），value 的值表示变更值的下标|
| bindchange | EventHandle | |value 改变时触发 change 事件，event.detail = {value: value}|
| title | String | | 选择器标题（仅安卓有效）默认值为 "设置" |

<notice>省市区选择器：mode = region</notice>

|属性名 |类型  |默认值  |说明|
|---- | ---- | ---- |---- |
| value | Array | [] |表示选中的省市区，默认选中每一列的第一个值|
| custom-item | String | |可为每一列的顶部添加一个自定义的项|
| bindchange | EventHandle | |value 改变时触发 change 事件，event.detail = {value}， 暂不支持统计用区划代码（code）、邮政编码（postcode）。|
| title | String |  | 选择器标题（仅安卓有效）默认值为 "设置" |


 

**示例**：
<a href="swanide://fragment/4e627d1fb5e3167c46e736956cd1e8581565503520142" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="wrap">
    <view class="title">时间选择</view>
    <form>
        <label class="section" for="section1">
            <picker id="section1" mode="time" value="{{time}}" start="1:01" end="22:59" bind:change="timeChange" disabled="false" bindcancel="cancel">
                <view class="picker">
                    <text class='chooseItem'>当前选择:</text>{{time}}
                </view>
            </picker>
        </label>
    </form>
    <view class="title">日期选择</view>
    <form>
        <label class="section date-section" for="section2">
            <picker id="section2" mode="date" value="{{dateDay}}" bind:change="dateChangeDay" fields="day" bindcancel="cancel">
                <view>
                    <text class='chooseItem'>当前选择:</text>{{dateDay}}
                </view>
            </picker>
        </label>
    </form>
    <view class="title">多列选择器</view>
    <form>
        <label class="section date-section" for="section3">
            <picker mode="multiSelector" bindchange="bindMultiPickerChange" bindcolumnchange="bindMultiPickerColumnChange" value="{{multiIndex}}" range="{{multiArray}}" title="多列选择器">
                <view class="picker">
                   <text class='chooseItem'>当前选择:</text>{{multiArray[0][multiIndex[0]]}} {{multiArray[1][multiIndex[1]]}} {{multiArray[2][multiIndex[2]]}}
                </view>
            </picker>
        </label>
        <label class="section" for="section4">
            <picker id="section4" mode="date" value="{{dateYear}}" bind:change="dateChangeYear" fields="year" bindcancel="cancel">
                <view>
                    <text class='chooseItem'>当前选择:</text>{{dateYear}}
                </view>
            </picker>
        </label>
    </form>
    <view class="title">地区选择</view>
    <form>
        <label class="section" for="section5">
            <picker id="section5" mode="region" bind:change="regionChange" custom-item="{{customItem}}" title="地区选择器" bindcancel="cancel">
                <view class="picker">
                    <text class='chooseItem'>当前选择:</text>{{regionData[0]}} {{regionData[1]}} {{regionData[2]}}
                </view>
            </picker>
        </label>
    </form>
</view>
```
* 在 js 文件中

```javascript
Page({
    data: {
        time: '12:12',
        dateDay: '2018-01-05',
        dateMonth: '2018-01',
        dateYear: '2018',
        regionData: ['全部', '全部', '全部'],
        customItem: '全部',
        multiIndex: [0, 0, 0],
        multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
    },
    timeChange(e) {
        console.log('picker-time changed，值为', e.detail.value);
        this.setData('time', e.detail.value);
    },
    dateChangeDay(e) {
        console.log('picker-date changed，值为', e.detail.value);
        this.setData(
            'dateDay', e.detail.value
        );
    },
    dateChangeMonth(e) {
        console.log('picker-date changed，值为', e.detail.value);
        this.setData(
            'dateMonth', e.detail.value
        );
    },
    dateChangeYear(e) {
        console.log('picker-date changed，值为', e.detail.value);
        this.setData(
            'dateYear', e.detail.value
        );
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
});
```