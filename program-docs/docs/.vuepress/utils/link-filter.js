/**
 * @file 处理link规范
 * @author wulinfei
 */

// 处理链接，保证其前后均有/
const filterLink = link => {
    const retStart = link.match('^\/', link);
    const retEnd = link.match('\/$', link);
    const hasHash = link.indexOf('#') > -1;
    if (!retStart) {
        link = `/${link}`;
    }
    if (!retEnd && !hasHash) {
        link = `${link}/`;
    }
    return link;
};

// 获取导航链接，如果导航不存在link，则找其子项第一项的链接
const findLink = item => {
    if (item.link) {
        return item.link;
    }
    const sidebar = item.sidebar;
    if (sidebar && sidebar[0].link) {
        return sidebar[0].link;
    }
    return findLink(sidebar[0]);
};


const filterNavData = navs => {
    navs.forEach(item => {
        if (item.sidebar) {
            item.link = item.link ? filterLink(item.link) : undefined;
            filterNavData(item.sidebar);
        } else {
            item.link = item.link ? filterLink(item.link) : undefined;
        }
    });
    return navs;
};

module.exports = {
    filterLink,
    filterNavData,
    findLink
};
