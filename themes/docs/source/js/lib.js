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