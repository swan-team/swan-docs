/**
 * @file 判断设备环境
 * @author wulinfei
 */

export const isPc = () => {
    const reg = /Android|webOS|iPhone|SymbianOS|Windows Phone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return !(reg.test(navigator.userAgent));
};

export const isIOS = () => {
    const reg = /webOS|iPhone|iPad|iPod/i;
    return reg.test(navigator.userAgent);
};

export const isBox = () => {
    return / baiduboxapp\//i.test(navigator.userAgent);
};
