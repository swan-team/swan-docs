---
title: Animation
header: develop
nav: api
sidebar: createanimation_Animation
---
 
 
**解释**：动画实例可以调用以下方法来描述动画，调用结束后会返回自身，支持链式调用的写法。

 
普通样式：

|属性|参数|说明|
|----|----|----|
|opacity|value|透明度，参数范围 0~1|
|backgroundColor|color|颜色值|
|width|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值。|
|height|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值。|
|top|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值。|
|left|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值。|
|bottom|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值。|
|right|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值。|

#### 动画队列
调用动画操作方法后要调用 step() 来表示一组动画完成，可以在一组动画中调用任意多个动画方法，一组动画中的所有动画会同时开始，一组动画完成后才会进行下一组动画。
## 示例

 
### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/Animation.png
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/createAnimation.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

###  代码示例1 - 动画队列 

<a href="swanide://fragment/c1cd19f4bd6c53b0c272aa1d2bce10481557729887965" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <view class="anim" bindtap="startToAnimate" animation="{{animationData}}"></view>
</view>
```

* 在 js 文件中

```js
Page({
    data: {
        animationData: {}
    },
    startToAnimate() {
        const animation = swan.createAnimation();
        animation.rotate(90).translateY(10).step();
        animation.rotate(-90).translateY(-10).step();
        this.setData({
            animationData: animation.export()
        });
    }
});
```

###  代码示例2 - 动画样式设置 

<a href="swanide://fragment/2fb5684d1d02b0b2b389174ea0a1136b1575537062260" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <view class="anim" bindtap="startToAnimate" animation="{{animationData}}"></view>
</view>
```

* 在 js 文件中

```js
Page({
    data: {
        animationData: {}
    },
    startToAnimate() {
        const animation = swan.createAnimation({
            transformOrigin: "50% 50%",
            duration: 1000,
            timingFunction: "linear",
            delay: 0
        });
        animation.opacity(0.5);
        animation.backgroundColor('#DC143C');
        animation.rotate(90).translateY(10).step();
        animation.rotate(-90).translateY(-10).step();
        this.setData({
            animationData: animation.export()
        });
        console.log('createAnimation', animation);
    }
});
```


###  代码示例3 - 动画宽高设置 

<a href="swanide://fragment/933d1f771edd2968879fe952d832da341575537199303" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <view class="anim" bindtap="startToAnimate" animation="{{animationData}}"></view>
</view>
```

* 在 js 文件中

```js
Page({
    data: {
        animationData: {}
    },
    startToAnimate() {
        const animation = swan.createAnimation({
            transformOrigin: "50% 50%",
            duration: 1000,
            timingFunction: "linear",
            delay: 0
        });
        animation.opacity(0.5);
        animation.backgroundColor('#DC143C');
        animation.width('20px');
        animation.height('70px');
        animation.top('40px');
        animation.left('90px');
        animation.bottom('60px');
        animation.right('80px');
        animation.rotate(90).translateY(10).step();
        animation.rotate(-90).translateY(-10).step();
        this.setData({
            animationData: animation.export()
        });
        console.log('createAnimation', animation);
    }
});
```

###  代码示例5 - 底部弹窗自定义动画（css控制） 

<a href="swanide://fragment/93e40bd1926b5672c061e84492503a2a1575816747690" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<button bindtap='showshadow' type="primary">点击显示底部弹框</button>
 
<view class='content {{click? "showContent": "hideContent"}} {{option? "open": "close"}}' hover-stop-propagation='true'>
    <!-- 内容 -->
    <view class='content-top' s-for="item in list">
      {{item}}
    </view>
</view>

```

* 在 js 文件中

```js
Page({
    data: {
        click: false, //是否显示弹窗内容
        option: false, //是否显示弹窗或关闭弹窗的操作动画
        list: ['列表一','列表二','列表三','列表四']
    },
    showshadow() {
        let that = this;
        if (!that.data.click) {
            that.setData({
                click: true,
            })
        }
        if (that.data.option) {
            that.setData({
                option: false,
            })
            // 关闭显示弹窗动画的内容，若不设则点击任何地方，都会出现弹窗
            setTimeout(() => {
                that.setData({
                    click: false,
                })
            }, 500)
        } else {
            that.setData({
                option: true
            })
        }
    }
});
```

* 在 css 文件中

```css
.content {
  width: 100%;
  position: absolute;
  bottom: 0;
  box-shadow: 0 0 10rpx #333;
  height: 0;
  z-index: 999;
  font-size: 16px;
}
 
.showContent {
  display: block;
}
 
.hideContent {
  display: none;
}
 
/* 弹出或关闭动画来动态设置内容高度 */
 
@keyframes slideContentUp {
  from {
    height: 0;
  }
 
  to {
    height: 800rpx;
  }
}
 
@keyframes slideContentDown {
  from {
    height: 800rpx;
  }
 
  to {
    height: 0;
  }
}
 
/* 显示或关闭内容时动画 */
 
.open {
  animation: slideContentUp 0.5s ease-in both;
}
 
.close {
  animation: slideContentDown 0.5s ease-in both;
}
```


###  代码示例6 - 底部弹窗自定义动画（API控制） 

<a href="swanide://fragment/8a843dcdf2f4e31945b4af996c2e3e381575816832551" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button bindtap='showshadow' type="primary">点击显示底部弹框</button>
    <!-- 遮罩层 -->
    <view class="shadow" s-if="{{chooseSize}}" bindtap='hideModal'></view>
    <!-- 上滑高度 -->
    <view class='choosen' s-if="{{chooseSize}}" animation='{{animationData}}'>
    <!-- 内容 -->
    <view class='content-top' s-for="item in list">
        {{item}}
    </view>
</view>
```

* 在 js 文件中

```js
Page({
    data:{
        chooseSize: false,
        list: ['列表一','列表二','列表三','列表四']
    },
    showshadow:function(e){
        if (this.data.chooseSize == false) {
            this.chooseSezi()
        } else {
            this.hideModal()
        }
    },
    chooseSezi() {
        var that = this;
        // 创建一个动画实例
        var animation = swan.createAnimation({
            transformOrigin: "50% 50%",
            duration: 1000,
            timingFunction: "ease",
            delay: 0
        })
  
        animation.translateY(1000).step()
        that.setData({
            animationData: animation.export(),
            chooseSize: true
        })
        // 设置setTimeout来改变y轴偏移量，实现有感觉的滑动 滑动时间
        setTimeout(function () {
            animation.translateY(0).step()
            that.setData({
                animationData: animation.export(),
                clearcart: false
            })
        }, 100)
    },
    // 隐藏
    hideModal: function (e) {
        var that = this;
        var animation = swan.createAnimation({
            transformOrigin: "50% 50%",
            duration: 1000,
            timingFunction: "ease",
            delay: 0
        })

        animation.translateY(700).step()
        that.setData({
            animationData: animation.export()
        })
        setTimeout(function () {
            animation.translateY(0).step()
            that.setData({
                animationData: animation.export(),
                chooseSize: false
            })
        }, 500)
    }
});
```

###  代码示例7 - 弹出菜单特效的实现 

<a href="swanide://fragment/b80823a3c8127277935d521b04b69fe31575826980941" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view>
    <image src="/images/ai.png" class="img" animation="{{animFavor}}"></image>
    <image src="/images/basecontent.png" class="img" animation="{{animShare}}"></image>
    <image src="/images/canvas.png" class="img" animation="{{animWrite}}"></image>
    <image src="/images/interface.png" class="img-plus" animation="{{animPlus}}" bindtap="isPoping"></image>
</view>
```

* 在 js 文件中

```js
Page({
    data: {
        isPopping: false,
        animPlus: {},
        animFavor: {},
        animShare: {},
        animWrite: {},
    },
    isPoping () {
        if (this.data.isPopping) {
            this.pop();
            this.setData({
                isPopping: false
            })
        } else {
            this.back();
            this.setData({
                isPopping: true
            })
        }
    },
    pop () {
        var animationPlus = swan.createAnimation({
            duration: 500,
            timingFunction: 'ease-out'
        })
        var animFavor = swan.createAnimation({
            duration: 500,
            timingFunction: 'ease-out'
        })
        var animShare = swan.createAnimation({
            duration: 500,
            timingFunction: 'ease-out'
        })
        var animWrite = swan.createAnimation({
            duration: 500,
            timingFunction: 'ease-out'
        })
        animationPlus.rotateZ(180).step();
        animFavor.translate(-100, -100).rotateZ(180).opacity(1).step();
        animShare.translate(-140, 0).rotateZ(180).opacity(1).step();
        animWrite.translate(-100, 100).rotateZ(180).opacity(1).step();
        this.setData({
            animPlus: animationPlus.export(),
            animFavor: animFavor.export(),
            animShare: animShare.export(),
            animWrite: animWrite.export(),
        })
    },
    back() {
        var animationPlus = swan.createAnimation({
            duration: 500,
            timingFunction: 'ease-out'
        })
        var animFavor = swan.createAnimation({
            duration: 500,
            timingFunction: 'ease-out'
        })
        var animShare = swan.createAnimation({
            duration: 500,
            timingFunction: 'ease-out'
        })
        var animWrite = swan.createAnimation({
            duration: 500,
            timingFunction: 'ease-out'
        })
        animationPlus.rotateZ(0).step();
        animFavor.translate(0, 0).rotateZ(0).opacity(0).step();
        animShare.translate(0, 0).rotateZ(0).opacity(0).step();
        animWrite.translate(0, 0).rotateZ(0).opacity(0).step();
        this.setData({
            animPlus: animationPlus.export(),
            animFavor: animFavor.export(),
            animShare: animShare.export(),
            animWrite: animWrite.export(),
        })
    }
})
```




