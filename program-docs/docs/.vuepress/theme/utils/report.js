/**
 * @file 打点上报Server
 * @author wulinfei
 */

import {get} from './request';
import {Url} from './api';

/**
 * 搜索打点上报
 * @param {Object} params 打点的参数
 * @param {string} params.word 搜索词
 * @param {string} params.source 搜索来源
 * @param {string} params.module 搜索类型 index: 主搜索 category: sug 搜索
 * @param {string} params.countType 事件类型 query: 展示 click: 点击
 * @return {Promise} 打点请求
 */

export const searchReport = params => {
    params.source = params.source || 'docs';
    return get(Url.searchReportUrl, params).catch(() => {});
};
