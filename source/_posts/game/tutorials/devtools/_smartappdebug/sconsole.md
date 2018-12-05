
### sConsole

在真机上，如果想查看 [console](/api/debug/console/) API 输出的日志内容和额外的调试信息，有两种方法：
1. 在代码中调用 [setEnableDebug](/api/debug/setEnableDebug/) 方法开启调试功能。
2. 点击屏幕右上角【更多】按钮打开的菜单里选择【关于】，若是开发版和审核版小游戏，可以看到 sConsole 的按钮，点击按钮开启调试功能。

首次打开调试，小游戏鉴权成功后会提示退出，重新打开后右下角会出现一个 sConsole 的按钮，点击按钮可以打开日志面板。

下图为小游戏 sConsole:

![图片](/img/game/tutorials/tool/sconsole.png)


#### sConsole 使用说明

由于实现机制的限制，开发者在调用`console`API打印日志内容时，`sConsole`支持所有类型的展示，但对于`JSON`无法表示的数据类型以及无法转化`JSON`字符串的情况，`sConsole`做了以下处理:
- 循环引用对象：`&lt;Circular&gt;`
- `&lt;Function&gt;`
- `&lt;Undefined&gt;`
- `&lt;ArrayBuffer: byteLength=10&gt;`
- `&lt;Infinity&gt;`
- `&lt;Symbol&gt;`
- ...

**注：打印结构过于复杂的日志内容可能会带来额外的性能消耗，非调试环境下请尽量避免**