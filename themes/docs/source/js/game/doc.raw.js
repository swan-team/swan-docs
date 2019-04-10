$(document).ready(function () {
    // 根据文档内容，增加左侧导航三级目录
    var containers = document.getElementsByClassName('p-content-wrap-article');
    for (var i = 0; i < containers.length; ++i) {
        updateNavbarLevel2();
        var isApi = location.pathname.indexOf('/api/') > -1;
        var isTutorials = location.pathname.indexOf('/tutorials/') > -1;
        if (isApi || isTutorials) {
            setNavbarLevel3ForApi(updateScroll);
        }
        else {
            updateScroll();
        }
    }

    // 左侧导航折叠开关
    $('.p-sidebar-item-wrapper').click(function () {
        $(this).find('.p-sidebar-toggle').toggleClass('fold');
        var isFolded = $(this).find('.p-sidebar-toggle').hasClass('fold');
        $(this).parent().children('ul')[isFolded ? 'hide' : 'show']();
    });
});


/**
 * 为 Canvas 以及除 API 外的页面添加三级目录到活跃二级目录
 */
function updateNavbarLevel2() {
    var isApi = location.pathname.indexOf('/api/') > 0;
    var isTutorials = location.pathname.indexOf('/tutorials/') > 0;
    var canvasPath = '/api/render/CanvasRenderingContext2D/';
    var isCanvas = location.pathname.indexOf(canvasPath) > -1;

    if (!isApi && !isTutorials) {
        // 移除非 API 页面的三级导航
        $('.p-sidebar-item-level1')
            .children('ul')
            .remove();
    }

    if (isCanvas || !(isApi || isTutorials)) {
        var $children = $('.p-content-wrap-article h3');
        var $activeNav = $('.p-sidebar-item-level1.is-active');

        var $navParent = $('<ul class="p-sidebar-list-level2"></ul>');
        for (var j = 0; j < $children.length; ++j) {
            var child = $children.get(j);

            var $el = $('<li class="p-sidebar-item p-sidebar-item-level2"></li>');
            var $link = $('<a href="#' + child.getAttribute('id') + '"></a>');
            $link.text(child.innerText);
            $link.click(function () {
                setTimeout(function () {
                    updateNavbarActive();
                });
            });
            $el.append($link);
            $navParent.append($el);
        }

        if ($children.length && $activeNav.length) {
            $activeNav.append($navParent);
        }
    }
    else if (isApi) {
        // 如果存在 canvas ctx 下的内容，就移除
        $('.p-sidebar-item-level1').filter(function () {
            return $(this).children('a').attr('data-url').indexOf(canvasPath) > -1;
        })
            .children('ul')
            .remove();
    }
}



/**
 * 根据页面地址改变左侧导航的高亮状态
 */
function updateNavbarActive() {
    var $allLevel1 = $('.p-sidebar-item-level1');
    $allLevel1.removeClass('is-active');
    $('.p-sidebar-item-level2').removeClass('is-active');

    var $activeLevel1 = $allLevel1
        .filter(function () {
            return $(this).children('a').attr('data-url') === location.pathname;
        })
        .addClass('is-active');

    $activeLevel1.find('.p-sidebar-item-level2')
        .filter(function () {
            var $a = $(this).children('a');
            var href = $a.attr('data-url') || $a.attr('href') || '';
            var hashId = href.indexOf('#');
            if (hashId > -1) {
                var hash = href.substr(hashId);
                return hash === decodeURIComponent(location.hash);
            }
            else {
                return false;
            }
        })
        .addClass('is-active');
}



/**
 * 导航栏滚动到活跃二级目录
 */
function updateScroll() {
    setTimeout(function () {
        updateNavbarActive();

        var padding = $('.p-sidebar-list').offset().top;

        var $panels = $('.p-sidebar-list');
        var panelCurrentTop = $panels.scrollTop();
        // 先滚动到最上面，用来计算位置
        $panels.scrollTop(0);
        // 计算活跃导航位置
        var $activeLevel1 = $('.p-sidebar-item-level1.is-active');
        // 如果活跃的二级导航是当前一级导航的第一个孩子，则定位到一级导航
        if ($activeLevel1.parent().children()[0] === $activeLevel1.get(0)) {
            $activeLevel1 = $activeLevel1.parents('.p-sidebar-item-level0');
        }
        if ($panels && $activeLevel1.length) {
            // 滚动左侧导航
            var parentTop = $activeLevel1.offset().top;
            var navbarTop = parentTop;
            var $activeLevel2 = $activeLevel1.find('.p-sidebar-item-level2.is-active');
            if ($activeLevel2.length) {
                // 如果三级高亮导航位于屏幕外，则定位到三级导航，而不是二级
                var childTop = $activeLevel2.offset().top;
                if (childTop - parentTop + padding + $activeLevel2.height()
                    > window.innerHeight
                ) {
                    navbarTop = childTop;
                }
            }
            scrollAnimation($panels, panelCurrentTop, navbarTop - padding);
        }

        updateContentScroll();
    });

    var animateHandlers = {};
    function scrollAnimation($target, currentTop, targetTop, duration) {
        duration = duration == undefined ? 200 : duration;

        var id = '#' + $target.attr('id') + '.' + $target.attr('class');
        var start = new Date().getTime();
        var stepTop = (targetTop - currentTop) / duration;

        var tick = function () {
            var elapsed = new Date().getTime() - start;
            $target.scrollTop(currentTop + stepTop * elapsed);

            if (elapsed < duration) {
                animateHandlers[id] = requestAnimationFrame(tick);
            }
            else {
                $target.scrollTop(targetTop);
                delete animateHandlers[id];
            }
        };
        tick();
    }
}

/**
 * 右侧内容滚动到相应位置
 */
function updateContentScroll() {
    var padding = 60;
    var $container = $('.p-content');
    $container.scrollTop(0);
    if (location.hash) {
        var $hash = $(decodeURIComponent(location.hash));
        $container.scrollTop($hash.offset().top - padding);
    }
}



/**
 * 改变右侧内容
 * @param {string} url 内容 URL
 */
function loadContent(url) {
    // 关闭搜索结果
    $('#article-main-content').css({
        display: 'block'
    });
    $('#article-search-result').css({
        display: 'none'
    });
    $('.reset-search-btn').click();

    if (isSamePage(url)) {
        // 地址只改变 hash 码，直接重定向不会导致加载新网页
        location.href = url;
        updateNavbarActive();
    }
    else {
        $.get(url, function (data, status) {
            if (status === 'success') {
                const htmlId = data.indexOf('<html');
                if (htmlId) {
                    data = data.substr(htmlId);
                }

                const containerName = '#article-main-content';
                const $container = $(containerName);
                const $content = $(data).find(containerName);
                $container.html($content.html());

                setTimeout(function () {
                    updateNavbarActive();
                    updateNavbarLevel2();
                    updateContentScroll();
                });
                // 只改变地址栏地址，不进行重定向
                window.history.pushState('', '', url);
            }
            else {
                // 失败，使用重定向
                location.href = url;
            }
        });
    }

    function isSamePage() {
        return url.indexOf(location.pathname) > -1;
    }
}



/**
 * 对 API 页面追加三级导航
 * @param {*} callback
 */
function setNavbarLevel3ForApi(callback) {
    $.getJSON(window._siteRoot + 'table-content.json', function (json) {
        $('.p-sidebar-item-level1').each(function (id, parent) {
            var parentLink = $(parent).children('a').attr('data-url');

            for (var i = 0; i < json.length; ++i) {
                if (parentLink.indexOf(json[i].path) > -1) {
                    // 找到三级目录
                    var children = json[i].headings;
                    var $childList = $('<ul class="p-sidebar-list-level2"></ul>');
                    for (var c = 0; c < children.length; ++c) {
                        var child = children[c];
                        var $child = $('<li class="p-sidebar-item p-sidebar-item-level2"></li>');
                        $child.html(`<a href="javascript:loadContent('${parentLink}${child.href}')" data-url="${parentLink}${child.href}">${child.title}</a>`);
                        $childList.append($child);
                    }
                    $(parent).append($childList);
                }
            }
        });

        if (typeof callback === 'function') {
            callback();
        }
    });
}
