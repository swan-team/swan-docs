const glob = require('glob');
const fs = require('fs');

glob("develop/api/**/*.md", {}, function (er, files) {
    let allCount = 0;
    console.log('test');
    files.forEach((file) => {
        // console.log(file);
        fs.readFile(file, 'utf-8', function (err, content) {
            console.log('content:::', content);
            // 正则，匹配```与```之间的内容
            let regx = /```([\s\S]*)```/;

            let res = regx.exec(content);
            if (res) {
                // 如果匹配到，就算一下有多少换行
                console.log('res :::', res[1].split('\n').length);
                // 加一下
                allCount += res[1].split('\n').length;
            }
        });
    });
});
