/**
 * @file link
 * @author zhanfang (zhanfang@baidu.com)
 */

'use strict';
var path = require('path');
var cheerio = require('cheerio');

/* global hexo */
hexo.extend.filter.register('after_post_render', function (data) {
    var config = hexo.config;

    // var toprocess = ["excerpt", "more", "content"];
    var toprocess = ['content'];
    for (var i = 0; i < toprocess.length; i++) {
        var key = toprocess[i];

        var $ = cheerio.load(data[key], {
            ignoreWhitespace: false,
            xmlMode: false,
            lowerCaseTags: false,
            decodeEntities: true 
        });

        $('img').each(function () {
            if ($(this).attr('src')) {
                // For windows style path, we replace '\' to '/'.
                var src = $(this)
                    .attr('src')
                    .replace('\\', '/');

                if (!/http[s]*.*|\/\/.*/.test(src) && /^\s*\//.test(src)) {
                    var result = path.join(config.root, src);
                    $(this).attr('src', result);
                    console.info && console.info('update image from', src, ' -> ', result);
                }
            }
            else {
                console.info && console.info('no src attr, skipped...');
            }
        });

        $('a').each(function () {
            if ($(this).attr('href')) {
                // For windows style path, we replace '\' to '/'.
                var href = $(this)
                    .attr('href')
                    .replace('\\', '/');

                if (!/http[s]*.*|\/\/.*/.test(href) && /^\s*\//.test(href)) {
                    var result = path.join(config.root, href);
                    $(this).attr('href', result);
                    console.info && console.info('update link from', href, ' -> ', result);
                }
            }
            else {
                console.info && console.info('no src attr, skipped...');
            }
        });

        data[key] = $.html();
    }
});
