/**
 * @file 判断设备环境
 * @author wulinfei
 */

const userAgentInfo = navigator.userAgent;

export const isPc = () => {
    const reg = /Android|webOS|iPhone|SymbianOS|Windows Phone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return !(reg.test(userAgentInfo));
};

export const isIOS = () => {
    const reg = /webOS|iPhone|iPad|iPod/i;
    return reg.test(userAgentInfo);
};

export const isBox = () => {
    return / baiduboxapp\//i.test(userAgentInfo);
};

export const userDevice = {
    isPc: isPc(),
    isIOS: isIOS(),
    isBox: isBox()
};

