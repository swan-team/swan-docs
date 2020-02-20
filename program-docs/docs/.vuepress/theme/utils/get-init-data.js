/**
 * @file 获取初始状态值
 * @author wulinfei
 */

/**
 * 获取导航列表的所有项，生成为一个平级数组
 *
 * @param {Array} navList 需要获取的列表
 * @return {Array} 处理好的数组
 */
export const getNavList = navList => {
    let navListArr = [];
    const getNavListFn = list => {
        list.forEach(item => {
            navListArr.push(item);
            if (item.sidebar) {
                const navList = item.sidebar;
                getNavListFn(navList);
            }
        });
    };

    getNavListFn(navList);
    return navListArr;
};

/**
 * 获取侧边栏所有的项的长度
 *
 * @param {Array} sidebarList 侧边栏列表
 * @return {number} 侧边栏列表长度
 */
export const getSidebarLen = sidebarList => getNavList(sidebarList).length;

/**
 * 获取不包含sidebar的列表
 *
 * @param {Array} list 需要排序的列表
 * @return {Array} 已经排好序的列表
 */
export const getNavOrderList = list => {
    let navOrderList = [];
    const orderList = list => {
        list.forEach(item => {
            if (item.sidebar) {
                const sidebarList = item.sidebar;
                orderList(sidebarList);
            }
            else {
                navOrderList.push(item);
            }
        });
    };
    orderList(list);
    return navOrderList;
};

/**
 * 获取初始态选中heder的索引
 *
 * @param {Array} headerList 头部导航list
 * @param {string} headerName 当前页的头部名称
 * @return {number} 初始态header索引
 */
export const getInitHeaderIndex = (headerList, headerName) => {
    const headerIndex = headerList.findIndex(item => item.name === headerName);
    if (headerIndex > -1) {
        return headerIndex;
    }
    return 0;
};

/**
 * 获取初始态选中的二级导航索引
 *
 * @param {Array} subList 二级导航列表
 * @param {string} link 当前页的link
 * @return {number} 初始态subnav的索引
 */
export const getInitSubIndex = (subList, link) => {
    const subIndexArr = subList.map((subItem, index) => {
        if (subItem && subItem.link === link) {
            return index;
        }
        else if (subItem.sidebar && subItem.sidebar.length > 0) {
            const sidebarList = getNavList(subItem.sidebar);
            const initSubIndex = sidebarList.findIndex(sidebarItem => sidebarItem.link === link);
            if (initSubIndex > -1) {
                return index;
            }
            return -1;
        }
        return -1;
    });
    const initSubIndex = subIndexArr.filter(item => item > -1);
    return initSubIndex[0] || -1;
};

