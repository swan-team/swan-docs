/**
 * @file 生成sitemap文件
 */
const readline = require('readline');
const fs = require('fs');
const path = require('path');
const filterLink = require('../utils/link-filter').filterLink;
const fReadName = path.join(__dirname, '../../../nav/nav.yml');
const fWirteName = path.join(__dirname, '../../../../output/miniappdocs/sitemap.txt');
const fRead = fs.createReadStream(fReadName);
const objReadline = readline.createInterface({
    input: fRead
});

// 如果sitemap已经存在，则删除
if (fs.existsSync(fWirteName)) {
    fs.unlinkSync(fWirteName);
}

// Set去重
let urlSet = new Set(['/']);
objReadline.on('line', line => {
    const mat = line.match(/^\s+link:(.+)/);
    if (mat) {
        let url = mat[1].trim();
        if (url.indexOf('http') === 0) {
            return;
        }
        if (url.indexOf('#') >= 0) {
            return;
        }
        url = filterLink(url);
        urlSet.add(url);
    }
});

objReadline.on('close', () => {
    for (let url of urlSet.values()) {
        fs.appendFileSync(fWirteName, 'https://smartprogram.baidu.com/docs' + url + '\n');
    }
});