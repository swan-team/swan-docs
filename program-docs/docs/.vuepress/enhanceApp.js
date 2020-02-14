/**
 * @file 客户端应用的增强
 * @author wulinfei
 */

const VueClipboard = require('vue-clipboard2');

const hashRegx = /^#(\d)/;
export default ({Vue, router}) => {
    // 代码片段支持复制
    Vue.use(VueClipboard);

    // 支持平滑滚动
    router.options.scrollBehavior = (to, from, savedPosition) => {
        if (savedPosition) {
            return window.scrollTo({
                top: savedPosition.y,
                behavior: 'smooth'
            });
        }
        else if (to.hash) {
            // 将数字开头的hash前加上 _ 
            const hashId = to.hash.replace(hashRegx, '#_$1').toLowerCase();

            const targetElement = document.querySelector(hashId);
            if (targetElement) {
                return window.scrollTo({
                    top: getElementPosition(targetElement).y - 120,
                    behavior: 'smooth'
                });
            }
            return false;
        }
        else {
            return window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };
};

function getElementPosition(el) {
    const docEl = document.documentElement;
    const docRect = docEl.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    return {
        x: elRect.left - docRect.left,
        y: elRect.top - docRect.top
    };
}