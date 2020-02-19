/**
 * @file 替换废弃的url，不经过编译，不能使用ES6
 * @author wulinfei
 */

!(function (url) {
    // 放置被删除的页面映射
    var urlMap = {
        // '/docs/develop/cloud/cloud_info/': '/docs/develop/cloud/cloud_essentials/'
    };
    if (!window._swanIde) {
        urlMap[url] && location.replace(urlMap[url]);
        !url.match('\/$') && !url.match('\.html$') && location.replace(url + '/');
    }
})(location.pathname);