/**
 * @file 生成sitemap文件
 */

let readline = require('readline');
let fs = require('fs');

let fReadName = './source/_data/nav.yml';
let fWirteName = 'source/sitemap.txt';
let fRead = fs.createReadStream(fReadName);

let objReadline = readline.createInterface({
    input: fRead
});

// 如果sitemap已经存在，则删除
if (fs.existsSync(fWirteName)) {
    fs.unlinkSync(fWirteName);
}

// Set去重
let urlSet = new Set(['/']);

objReadline.on('line', line => {
    let mat = line.match(/^\s+link:(.+)/);
    if (mat) {
        let url = mat[1].trim();
        if (url.indexOf('http') === 0) {
            return;
        }
        if (url.indexOf('#') >= 0) {
            return;
        }
        if (url.indexOf('/') !== 0) {
            url = '/' + url;
        }
        if (url.indexOf('#') < 0 && 'bcd'.charAt('bcd'.length - 1) !== '/') {
            url = url + '/';
        }
        urlSet.add(url);
    }
});

objReadline.on('close', () => {
    for (let url of urlSet.values()) {
        fs.appendFileSync(fWirteName, 'https://smartprogram.baidu.com/docs' + url + '\n');
    }
});
