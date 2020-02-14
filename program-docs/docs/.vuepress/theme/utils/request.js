/**
 * @file request.js
 * @description 请求函数
 */

import axios from 'axios';
import Qs from 'qs';

export const get = (url, params) => {
    return axios.get(url + '?' + Qs.stringify(params, {arrayFormat: 'indices'}))
        .then(res => res.data);
};
