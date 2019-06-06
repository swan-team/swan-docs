### InnerAudioContext

audio 上下文 innerAudioContext 实例对象。

**对象的属性列表：**

|属性|类型|是否只读|描述|
|-|-|-|-|
|src|string|否|音频的数据链接，用于直接播放。|
|startTime|number|否|开始播放的位置（单位：s），默认 0|
|autoplay|boolean|否|是否自动开始播放，默认 false|
|loop|boolean|否|是否循环播放，默认 false|
|duration|number|是|当前音频的长度（单位：s），只有在当前有合法的 src 时返回|
|currentTime|number|是|当前音频的播放位置（单位：s），只有在当前有合法的 src 时返回，时间不取整，结果保留不超过 6 位小数的浮点数或者整数|
|paused|boolean|是|当前是是否暂停或停止状态，true 表示暂停或停止，false 表示正在播放|
|buffered|number|是|音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲|
|volume|number|否|音量，范围 0~1，默认 1|
