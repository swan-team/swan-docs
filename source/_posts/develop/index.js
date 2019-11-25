const glob = require('glob');
const fs = require('fs');
let allCount = 0;
glob("component/*.md", {}, function (er, files) {
// glob("API/**/*.md", {}, function (er, files) {
    files.forEach((file) => {
        fs.readFile(file, 'utf-8', function (err, content) {
            console.log('content:::', content);
            // 正则，匹配```与```之间的内容
            let regx = /```css([\s\S]*)```/;
            let res = regx.exec(content);
            if (res) {
                // 如果匹配到，就算一下有多少换行
                console.log('res :::', res[1].split('\n').length);
                // 加一下
                allCount += res[1].split('\n').length;
                console.log(allCount);
            }
        });
    });
});
