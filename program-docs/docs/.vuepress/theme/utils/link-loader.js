/**
 * @file 处理链接
 * @author wulinfei
 */


// 获取导航链接，如果导航不存在link，则找其子项第一项的链接
export const findLink = item => {
    if (item.link) {
        return item.link;
    }
    const sidebar = item.sidebar;
    if (sidebar && sidebar[0].link) {
        return sidebar[0].link;
    }
    return findLink(sidebar[0]);
};
