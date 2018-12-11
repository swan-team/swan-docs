function smartAppIosInvoke(scheme) {
    var elem = document.createElement('iframe');
    var body = document.body || document.getElementsByTagName('body')[0];
    elem.style.display = 'none';
    elem.src = scheme;
    body.appendChild(elem);
    setTimeout(function () {
        body.removeChild(elem);
        elem = null;
    }, 0);
}
function smartAppAndroidInvoke(scheme) {
    var androidJsBridge = window.Bdbox_android_jsbridge;
    if (androidJsBridge && androidJsBridge.dispatch) {
        androidJsBridge.dispatch(scheme);
    } else {
        var re = window.prompt('BdboxApp:' + JSON.stringify({
            obj: 'Bdbox_android_jsbridge',
            func: 'dispatch',
            args: [scheme]
        }));
        return re;
    }
}
function isPc() {
    var userAgentInfo = navigator.userAgent;
    var reg = /Android|webOS|iPhone|SymbianOS|Windows Phone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return !(reg.test(userAgentInfo));
}
function isIOS() {
    var userAgentInfo = navigator.userAgent;
    var reg = /webOS|iPhone|iPad|iPod/i;
    return reg.test(userAgentInfo);
}
function isBox(){
    var ua = navigator.userAgent;
    return / baiduboxapp\//i.test(ua);
}
function caseInvoke(scheme) {
    if (isPc()) {
        return;
    }
    if (isBox()) {
        // 手百
        isIOS() ? smartAppIosInvoke(scheme) : smartAppAndroidInvoke(scheme);
    } else {
        // 非手百
        /*eslint-disable fecs-camelcase*/
        var openbox = window.OpenBox({
            url: location.href
        });
        /*eslint-disable fecs-camelcase*/
        openbox.open();
    }
}
// function throttle(fn, delay, wait) {
//     var timer = null;
//     var start = null;
//     return function () {
//         var now = +new Date();
//         var ctx = this;
//         var args = arguments;
//         if (!start) {
//             start = now;
//         }
//         if (now - start > wait) {
//             timer && clearTimeout(timer);
//             start = now;
//             fn.apply(ctx, args);
//         } else {
//             timer && clearTimeout(timer);
//             timer = setTimeout(function () {
//                 fn.apply(ctx, args);
//             }, (delay ? delay : 300));
//         }
//     };
// }
function throttle (func, wait, options) {
    var context, args, result;
    var wait = wait || 1000;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function () {
        previous = options.leading === false ? 0 : +new Date();;
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
    };
    return function () {
        var now = +new Date();
        if (!previous && options.leading === false) {
            previous = now;
        }
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
            if (!timeout) context = args = null;

        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
}
function debounce (fn, delay) {
    var timer;
    return function () {
        var ctx = this;
        var args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(ctx, args)
        }, (delay ? delay : 300));
    };
}
function __webdomainTransHandler__(e) {
    var el = document.getElementById('webdomain-trans-tools');
    var appkey = el.querySelector('.webdomain-trans-input').value.replace(/^\s+|\s+$/g, '');
    var ret = el.querySelector('.webdomain-trans-result');
    var html = '<span style="color: red">你输入的appkey不合法</span>';
    if (/^\w+$/.test(appkey) && appkey.length === 32) {
        var prefix = appkey.replace(/[A-Z]/g, function (word) {
            return word.toLocaleLowerCase() + '-';
        });
        var id = 't' + ~new Date;
        var url = 'https://' + prefix + '.smartapps.cn';
        html = url + '<a class="copy-btn" id="' + id + '" onclick="__showToast__(\'toast-' + id + '\')" href="javascript:;" data-clipboard-text="' + url + '">复制</a> <span class="wd-toast" style="display: none" id="toast-' + id + '">已复制</span>';
        new ClipboardJS('#' + id);
    }
    ret.innerHTML = '转换结果：' + html;
}

function __showToast__(id) {
    document.getElementById(id).style.display = 'inline';
    setTimeout(function () {
        document.getElementById(id).style.display = 'none';
    }, 2000);
}