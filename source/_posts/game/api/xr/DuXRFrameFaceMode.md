---
title: DuXRFrameFaceMode
layout: gamedoc
topic: xr
categoryName: api
priority: 10-04
---

> 从 [基础库 1.10.3](/game/tutorials/version/releaseLog/) 开始支持

人脸模式的帧对象。调用 [DuXRSessionFrameMode#getFrame](/game/api/xr/DuXRSessionFaceMode/#getFrame) 返回。

通过该对象你可以获取到相机的变换矩阵以及当前画面中帧检测到的人脸对象（[DuXRFace](/game/api/xr/DuXRFace/)）


**代码示例：**
```js
function update() {
    // 每次更新的时候获取当前帧的对象
    const frame = xrSession.getFrame();
    // 获取当前帧检测到的人脸
    const face = frame.getUpdatedTrackableFaces()[0];
    if (face) { // 判断是否检测到人脸
        // 处理人脸数据
    }
}
```

### getViewMatrix()

获取当前帧三维相机（三维渲染中的相机概念，非手机上的物理相机）的**视图变换**矩阵，在需要绘制人脸画面上绘制三维模型的时候会有用。一般和 [getProjectionMatrix](/game/api/xr/DuXRFrameFaceMode/#getProjectionMatrix) 一起使用

返回一个 4x4 长度的 Float32Array。你可以将该矩阵数据应用到像 THREE.js 这样的 3D 库的相机对象中。

THREE.js 的代码示例：

```js
// 获得视图变换矩阵
const viewMatrixArr = frame.getViewMatrix();
// 防止相机的矩阵被自动更新了，只使用 frame 提供的数据
camera.matrixAutoUpdate = false;
// 应用返回的 Float32Array，camera 是一个 THREE.PerspectiveCamera 对象
camera.matrix.fromArray(viewMatrixArr);
// 因为 THREE.js 中对象的 matrix 是该物体的变换矩阵，如果数据源是相机的视图变换还需要求逆矩阵
camera.matrix.getInverse(camera.matrix);

// 获得投影变换矩阵
const projectionMatrixArr = frame.getProjectionMatrix();
camera.projectionMatrix.fromArray(projectionMatrixArr);
// 同时需要更新 camera 的 projectionMatrixInverse 属性
camera.projectionMatrixInverse.getInverse(camera.projectionMatrix);
```

> **注：** 目前该矩阵固定为单位矩阵，所以也可以忽略不用，但是我们不能保证后面是否会不再用单位矩阵。

### getProjectionMatrix()

获取当前帧三维相机（三维渲染中的相机概念，非手机上的物理相机）的**投影变换**矩阵。

返回一个 4x4 长度的 Float32Array。你可以将该矩阵数据应用到像 THREE.js 这样的 3D 库的相机对象中。


> **注：** 当前算法使用的投影参数为：fov: 55.766, aspect: 9/16, near: 4, far: 300 你也可以根据这几个参数构建投影矩阵。

### getUpdatedTrackableFaces()

返回当前相机中检测到的人脸对象（[DuXRFace](/game/api/xr/DuXRFace/)）数组。

目前等的人脸算法只支持单人脸的检测，因此你只需要取数组的第一项就可以了，参考上面的示例代码。如果数组长度为 0 的话则是无法检测到人脸。

具体所有人脸相关的数据见 [DuXRFace](/game/api/xr/DuXRFace/) 的接口文档。