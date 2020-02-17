---
title: swan.onAccelerometerChange
header: develop
nav: api
sidebar: swan-onAccelerometerChange
webUrl: https://qft12m.smartapps.cn/subPackages/apiPackage/pages/getAccelerometer/getAccelerometer
---


 

**解释**：监听加速度数据，频率依赖 [swan.startAccelerometer](https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-startAccelerometer/) 传递的interval，默认 5 次/秒。接口调用后会自动开始监听，可使用 swan.stopAccelerometer 停止监听。

 
## 方法参数 

Function callback

###  `callback`参数说明  

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|x |Number |是| |X 轴|
|y |Number |是| |Y 轴|
|z |Number |是| |Z 轴|
## 示例

<a href="swanide://fragment/0ed5fe5e4d0957055cd7669fd83612731569478872196" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/getGravity.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>



 

###  代码示例 



* 在 js 文件中

```javascript

    onReady() {
        this.position = {
            x: 151,
            y: 151,
            vx: 0,
            vy: 0,
            ax: 0,
            ay: 0
        };
        let self = this;
        swan.onAccelerometerChange(function (res) {
            self.setData({
                x: res.x.toFixed(2),
                y: res.y.toFixed(2),
                z: res.z.toFixed(2)
            });
            self.position.ax = Math.sin(res.x * Math.PI / 2);
            self.position.ay = -Math.sin(res.y * Math.PI / 2);

        });

    }
```
 
##  错误码
###  Android

|错误码|说明|
|:--|:--|
|1001|执行失败   |

###  iOS

|错误码|说明|
|:--|:--|
|202|解析失败，请检查参数是否正确      |
|1001|设备不支持否正确      |
