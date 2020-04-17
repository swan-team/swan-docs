/**
 * @file 加载导航
 * @author wulinfei
 */

const path = require('path');
const yaml = require('js-yaml');
const fs = require('fs');
const linkLoader = require('./link-filter');

/**
 * 获取导航数据
 */
const getNavData = () => {
    try {
        const navPath = path.join(__dirname, '../../../nav/nav.yml');
        const navOriginData = yaml.safeLoad(fs.readFileSync(navPath, 'utf8'));
        return navOriginData.map(navItem => {
            return {
                text: navItem.text,
                name: navItem.name,
                license: navItem.license,
                link: navItem.link ? linkLoader.filterLink(navItem.link) : '',
                nav: linkLoader.filterNavData(navItem.nav)
            };
        });
    }
    catch (e) {
        throw Error(`yml转换失败 ${e}`);
    }
};


/**
 * 导航面包屑数据 && 导航中所有项
 */

const getAllListData = () => {
    const navData = getNavData();
    const resultBreadCrumbs = [];
    let navList = {};
    navData.map(nav => {
        const link = `/docs${nav.link}`;
        nav.breadCrumbs = [{
            link: link || '',
            name: nav.text || ''
        }];
        navList[link] = link;
        resultBreadCrumbs.push(nav);
        const getSidebarBread = (navs, navBreadCrumbs) => {
            navs.map(item => {
                const link = `/docs${linkLoader.findLink(item)}`;
                const navData = item.text && link ? [{
                    link: link || '',
                    name: item.text || ''
                }] : [];
                item.breadCrumbs = [...navBreadCrumbs, ...navData];
                navList[link] = link;
                resultBreadCrumbs.push(item);
                if (item.sidebar) {
                    getSidebarBread(item.sidebar, item.breadCrumbs);
                }
            });
            return navs;
        };
        return getSidebarBread(nav.nav, nav.breadCrumbs);
    });
    return {
        resultBreadCrumbs,
        navList
    };
};

const allListData = getAllListData();


module.exports = {
    getNavData,
    breadCrumbsData: allListData.resultBreadCrumbs,
    navList: allListData.navList
};
