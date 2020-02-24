/**
 * @file 公用函数
 * @author wulinfei
 */


/**
 * 替换markdown中的图片地址
 * @param {String} content 需要处理的markdown内容
 */

const replaceMarkDownImg = content => {
    const markdownImgRegx = /(.*?)(\/img\/(.*?)\.(png|jpg|gif|jpeg|mov|mp4))/g;
    const basePath = 'https://smartprogram.baidu.com/docs';
    return content.replace(markdownImgRegx, (all, host, path) => {
        if (/\:\/\//.test(host)) {
            return all;
        }
        return `${basePath}${path}`;
    });
};

/**
 * 替换掉 <font color=#777 12px>
 * @param {String} content 需要处理的markdown内容
 */

const replaceFontError = content => {
    const errorFontRegx = /(<font.*?color\=)(.*?)\s(.*?px)(.*?\/font>)/g;

    return content.replace(errorFontRegx, (all, prefix, color, err, end) =>{
        return `${prefix}${color}${end}`;
    });
};

/**
 * 处理错误的 markdown 写法
 * @param {String} content 需要处理的markdown内容
 */

const replaceErrorMd = content => {
    const errorTableRegx = /(<table.*?style\=[\'\"]margin-top\:\s*-(.*?)px;[\'\"][^>]*>)/g;
    const errorFontRegx = /(<font.*?color\=)(.*?)\s(.*?px)(.*?\/font>)/g;
    const tableSplit = /\s*:?\s*-+\s*:?\|/g;
    const errorNotice = /(<\/?)(notice)(>)/g;
    const relativeMdPath = /(\()(\.\.\/)((\.\.\/)*.*?\/\))/g;
    // 支持<p>标签未闭合
    return content.split('<p>').map((paragraph, index) => {
        if (index === 0) {
            return paragraph;
        }
        else if (paragraph.indexOf('</p>') === -1) {
            return '<br>' + paragraph;
        }
        return '<p>' + paragraph;
    }).join('')
    // 去除table错误标签
    .replace(errorTableRegx, '\n')
    // 去除font错误标签
    .replace(errorFontRegx, (all, prefix, color, err, end) => {
        return `${prefix}${color}${end}`;
    })
    .replace(tableSplit, all => {
        return all.replace(/\s/g, '');
    })
    // 将notice便签转为strong
    .replace(errorNotice, (all, start, tagContent, end) => {
        return `${start}strong${end}`;
    })
    // 对齐线上，去掉相对路径前的../
    .replace(relativeMdPath, (all, start, overPath, end) => {
        return `${start}${end}`;
    });
};


/**
 * 替换html中的图片地址
 * @param {String} content 需要处理的markdown内容
 */

const replaceRelativeImg = content => {
    const basePath = 'https://smartprogram.baidu.com/docs';
    const imageRegx = /(<[img|video].*?src\=[\'\"])(.*?)(\/img\/(.*?)\.(png|jpg|gif|jpeg|mov|mp4)[\'\"][^>]*>)/g;
    return content.replace(imageRegx, (all, prefix, host, suffix) => {
        if (/\:\/\//.test(host)) {
            return all;
        }
        return `${prefix}${basePath}${suffix}`;
    });
};

/**
 * 处理href，在绝对路径前加上docs，对齐线上
 * @param {String} content 需要处理的markdown内容
 */

const replaceHref = content => {
    const filterHref = /(<a href\=[\'\"])(.*?)([\'\"][^>]*>)/g;
    const relativeRegx = /http[s]*.*|\/\/.*/g;
    const absoluteRegx = /^\s*\//g;
    return content
        .replace(filterHref, (all, start, href, end) => {
            href = href.replace('\\', '/');
            if (!relativeRegx.test(href) && absoluteRegx.test(href)) {
                const result = `/docs${href}`;
                return `${start}${result}${end}`;
            }
            return all;
        });
};


/**
 * markdown处理html
 * @param {String} content 需要处理的markdown内容
 */

const replaceHtml = content => {
    const relativeContent = replaceRelativeImg(content);
    const hrefContent = replaceHref(relativeContent);
    return hrefContent;
};


module.exports = {
    replaceRelativeImg,
    replaceMarkDownImg,
    replaceFontError,
    replaceErrorMd,
    replaceHtml
};
