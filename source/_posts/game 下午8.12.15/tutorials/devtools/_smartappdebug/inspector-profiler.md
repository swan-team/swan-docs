
### 性能调优

当遇到小游戏运行卡顿、长期运行发生崩溃等问题时，真机“性能调优”工具可能能帮到一些忙，有助于定位到导致性能瓶颈的代码。

目前“性能调优”工具提供了：

+ CPU Profiler 面板
    + 时间线上的火焰图：当运行卡顿时，可以帮助发现 **哪些帧** 中 **哪些代码** 耗去了过多时间。
    + 函数耗时汇总：帮助宏观发现总体耗时过大的代码。
+ Memory 面板
    + Snapshot：观察某些时间节点的 JS Heap 的情况，以及比较出增减，判断占用内存过大的数据/对象。

**使用条件**

+ 目前只支持 Android，且须 11.3 或以上版本的百度 APP。
+ 使用时需要手机和开发者工具所在 PC 机在 **同一局域网内**。


#### 性能调优工具启动方式

+ 保证手机和开发者工具所在 PC 机在同一局域网内。
+ 开发者工具 **登陆** 后，会出现“性能调优”按钮（如下图）。
+ 点开“性能调优”按钮，会对当前小游戏工程进行编译并出现二维码。
+ 用手机上百度 APP 扫码，小游戏启动，同时开发者工具会自动弹出“性能调优”窗口（如下图）。

如果遇到问题，请参考 **真机调试常见问题解答**（因为他们实际同属一套实现）。

![图片](/img/game/tutorials/tool/inspector-profiler01.png)

#### 游戏运行卡顿的性能调优

游戏卡顿的原因有非常多，本“性能调优”工具可能帮助发现的情况，可以有下面这些：


**在一些帧内的 JS 代码执行时间过长，或者 GC 时间过长**

通过 CPU Profile 的火焰图可能发现成为瓶颈的代码：

![图片](/img/game/tutorials/tool/inspector-profiler02.png)

![图片](/img/game/tutorials/tool/inspector-profiler03.png)

并且结果可以保存下来，传给别人一起分析。

![图片](/img/game/tutorials/tool/inspector-profiler05.png)

**宏观发现一些 JS 逻辑执行耗时过多**

![图片](/img/game/tutorials/tool/inspector-profiler04.png)


**内存占用越来越大时，发现哪些对象没有及时释放**

可以使用的方法有：

+ 使用 Memory 面板获取当前 JS Heap 的快照（Snapshot1）（这个过程有些慢，须耐心等待）。
+ 游戏运行一段时间后，再次获取 JS Heap 的快照（Snapshot2）。
+ 在 Snapshot2 上选择 Comparison，和 Snapshot1 对比（如下图），能够看出对象的增减。

![图片](/img/game/tutorials/tool/inspector-profiler06.png)

![图片](/img/game/tutorials/tool/inspector-profiler07.png)

注意：

+ 在 Snapshot 中使用 Class Filter 时，挂在全局的 Class 才能被找到。
+ JS Heap 并不反应本游戏所占用的所有内存空间。维护在 JS Heap 之外的对象（例如 Canvas、Image、Audio 等）所占用的空间并不能被反应出来。
