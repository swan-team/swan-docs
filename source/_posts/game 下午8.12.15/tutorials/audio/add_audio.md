
---
title: 如何添加音频
layout: gamedoc
categoryName: tutorials
topic: audio
priority: 09-01
---

音频是游戏不可或缺的一部分，合理地使用可以使游戏如虎添翼。

### 基本流程

通常来说，音频的使用流程如下：

1. 创建音频实例，一般来说一个音频文件对应一个实例：

```js
const ctx = swan.createInnerAudioContext();
```

2. 修改 `ctx` 属性，详见 [API](/game/api/media/audio/)：

```js
ctx.loop = true;
ctx.src = 'xxx.mp3';
```

3. 监听事件：

```js
ctx.onStop(function() {
    console.log('audio stopped');
});
```

4. 播放音频：

如果 `ctx` 没有设置 `autoplay`，则需要调用 `ctx.play()` 播放，否则音频资源加载后将自动播放：

```js
ctx.play();
```

5. 不再需要音频资源时，将其释放：

```js
ctx.destroy();
ctx = null;
```

详细的方法请参见[音频 API](/game/api/media/audio/)。



### 典型使用场景

#### 全部静音

如果想实现一键将所有音频静音，建议使用一个音频管理器负责所有音频实例的管理。

```js
class AudioManager {
    constructor(audioNames) {
        this.audios = [];
        for (let i = 0; i < audioNames.length; ++i) {
            const name = audioNames[i];
            const ctx = swan.createInnerAudioContext();
            ctx.src = name + '.mp3';
            this.audios.push(ctx);
        }
    }

    muteAll() {
        this.setVolume(0);
    }

    unmuteAll() {
        this.setVolume(1);
    }

    setVolume(volume) {
        for (let i = 0; i < this.audios.length; ++i) {
            this.audios[i].volume = volume;
        }
    }
}
```

#### 背景音乐

我们通常希望背景音乐在加载后就自动播放，并且不断循环，这样的典型场景可以用以下方式实现：

```js
const bgCtx = swan.createInnerAudioContext();

bgCtx.loop = true;
bgCtx.autoplay = true;
bgCtx.src = 'xxx.mp3';
```

#### 音效

音效的特殊性在于，它往往会触发多次，并且可能在上一次播放结束前又需要触发一次。默认情况下，在一个音频结束播放（可以通过 `ctx.onEnded` 获得该时机）前，如果再次调用 `ctx.play()` 是不会有任何效果的，因为当前已经在播放状态了。

以下是一种实现随时触发多次音效（multishot）的方式：

```js
class MultishotAudio {
    constructor(audioPath) {
        this.audioPath = audioPath;
        this.ctxArr = [];
    }

    play() {
        for (let i = 0; i < this.ctxArr.length; ++i) {
            if (this.ctxArr[i]._isEnded) {
                // Play with previous resource
                this.ctxArr[i].play();
                return;
            }
        }

        // No pool for new sound effect, append one
        const ctx = this._createEffectCtx();
        this.ctxArr.push(ctx);
        ctx.play();
    }

    _createEffectCtx() {
        const ctx = swan.createInnerAudioContext();

        // _isEnded is used for multishot sound effect
        ctx._isEnded = false;
        ctx.onEnded(() => {
            ctx._isEnded = true;
        });

        ctx.src = this.audioPath;
        return ctx;
    }
}
```

更多信息请参见[音频 API](/api/media/audio/)。

