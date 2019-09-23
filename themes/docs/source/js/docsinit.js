/***针对失效链接的处理逻辑***/
!function(pathname){
    var urlMap = {
        '/docs/design/principle/':'/docs/design/overview/introduction/',
        '/docs/develop/component/media_live-player/':'/docs/develop/component/media/',
        '/docs/design/component/nav/':'/docs/design/component/topnav/',
        '/docs/develop/server/upstream/':'/docs/develop/web/detail/',
        '/docs/develop/api/open_feed/':'/docs/develop/api/open_feed/#submitresource/',
        '/docs/develop/server/power_exp/':'/docs/develop/server/power/#4-投放服务提交素材接口',
        '/docs/develop/flow/rank/':'/docs/introduction/rank/',
        '/docs/develop/devtools/uplog/':'/docs/develop/devtools/show_sur/',
        '/docs/develop/api/seo/':'/docs/develop/api/pageinfo/',
        '/docs/develop/tutorial/shine/':'/docs/develop/swan/shine/',
        '/docs/game/introduction/prerare/enter/':'/docsgame/introduction/prerare/enter_application/',
        '/docs/game/operations/service/service/':'/docs/game/operations/service/provision/',
        '/docs/game/operations/game/game/':'/docs/game/operations/game/special/',
        '/docs/game/tutorials/tutorials/tutorials/':'/docs/game/tutorials/howto/dev/',
        '/docs/game/tutorials/ad/index/': '/docs/game/tutorials/adTutorial/index/',
        '/docs/game/tutorials/ad/banner/': '/docs/game/tutorials/adTutorial/bannerDoc/',
        '/docs/game/tutorials/ad/rewardedVideo/': '/docs/game/tutorials/adTutorial/rewardedVideo/',
        '/docs/game/api/ad/swan.createBannerAd/': '/docs/game/api/adApi/swan.createBannerAd/',
        '/docs/game/api/ad/bannerAd/': '/docs/game/api/adApi/bannerDoc/',
        '/docs/game/api/ad/swan.createRewardedVideoAd/': '/docs/game/api/adApi/swan.createRewardedVideoAd/',
        '/docs/game/api/ad/rewardedVideoAd/': '/docs/game/api/adApi/rewardedVideoAd/',
        '/docs/game/api/ad/ad/': '/docs/game/api/adApi/swan.createBannerAd/',
        '/docs/develop/cloud-develop/introduction/':'/docs/develop/cloud/cloud_info/'
    };
    urlMap[pathname] && location.replace(urlMap[pathname]);
}(location.pathname);
(function(win, doc, $) {
    var localSidebar = function () {
        var noop = function () {};
        try {
            localStorage.setItem('_t', 1);
            localStorage.removeItem('_t');
            var _init = function () {
                if (localStorage.getItem('sidebar') === null) {
                    localStorage.setItem('sidebar', JSON.stringify({}));
                }
            };
            return {
                setLocal: function (key, value) {
                    _init();
                    var sidebar = JSON.parse(localStorage.getItem('sidebar'));
                    sidebar[key] = value;
                    localStorage.setItem('sidebar', JSON.stringify(sidebar));
                },
                getLocal: function (key) {
                    _init();
                    var sidebar = JSON.parse(localStorage.getItem('sidebar'));
                    if (!sidebar[key]) {
                        this.setLocal(key, window.localData.localData);
                        return window.localData.localData;
                    }
                    return sidebar[key];
                }
            };
        } catch (e) {
            return {
               setLocal: noop,
               getLocal: noop
            };
        }
    }();
    var docs = {
        schema: 'baiduboxapp://swan/4fecoAqgCIUtzIyA4FAPgoyrc4oUc25c/?_baiduboxapp=%7B%22from%22%3A%22%22%2C%22ext%22%3A%7B%7D%7D&callback=_bdbox_js_275&upgrade=0',
        screenHeight: win.innerHeight,
        screenWidth: win.innerWidth,
        frame: 1000 / 60,
        start: function () {
            // this.initHighlight();
            this.addEvent();
            this.initCrumbs();
            this.initToc();
            this.initHiddenbar();
            this.initSidebar();
            this.initH2();
            this.initList();
            this.initBottomPage();
            this.initInvokeDemo();
            // this.initCustom();
        },
        // initHighlight() {
        //     let keywords = window.localStorage.getItem('keywords');
        //     window.localStorage.removeItem('keywords');
        //     if (!keywords || !keywords.length) {
        //         return;
        //     }
        //     keywords = Array.isArray(keywords) ? keywords : [keywords];
        //     let content = $('.m-doc-content-layout').html();
        //     keywords.forEach(function (keyword, index) {
        //         var regExp = new RegExp(keyword, 'g');
        //         content = content.replace(regExp, "<mark class='marked_" + index + "'>" + keyword + "</mark>");
        //     });
        //     $('.m-doc-content-layout').html(content);
        // },
        initSidebar: function () {
            var ctx = this;
            var sidebarData = localSidebar.getLocal(window.localData.headerName);
            var sidebar = $('.m-doc-sidebar-nav-wrapper');
            if (sidebarData) {
                for (var name in sidebarData) {
                    if (sidebarData.hasOwnProperty(name)) {
                        (sidebarData[name] === false) &&  sidebar.find('[data-name="'+ name +'"]').removeClass('m-doc-nav-on');
                    }
                }
            }
            sidebar.show();
            // sidebar定位到当前页面，二级导航下的第一个页面sidebar不滚动
            var wrapperT = sidebar.find('ul').position().top;
            var sidebarSelected = $('.m-doc-sidebar-selected');
            var sidebarFirst = $('.m-doc-nav-on .m-doc-nav-children .m-doc-sidebar-on:first-child .m-doc-h1-children li:first-child a');
            var isFirst = false;
            sidebarFirst.each(function(index) {
                if ($('.m-doc-sidebar-selected a')[0] && sidebarFirst[index].href == $('.m-doc-sidebar-selected a')[0].href) {
                    isFirst = true;
                }
            });
            if (sidebarSelected.length !== 0
                && !isFirst) {
                var selectedT = sidebarSelected.position().top;
                var scrollT = selectedT - wrapperT;
                scrollT > 44 && sidebar.scrollTop(selectedT - wrapperT);
            }
            // 页面滚动到当前h3位置
            ctx.scrollToHash();
        },
        caseInvoke: function(scheme) {
            if (isPc()) {
                return;
            }
            if (isBox()) {
                // 百度 App
                isIOS() ? smartAppIosInvoke(scheme) : smartAppAndroidInvoke(scheme);
            } else {
                // 非百度 App
                /*eslint-disable fecs-camelcase*/
                var openbox = window.OpenBox({
                    url: location.href
                });
                /*eslint-disable fecs-camelcase*/
                openbox.open();
            }
        },
        initInvokeDemo: function() {
            if (isPc()) {
                $('.ispc').show();
                return;
            } else if (isBox()) {
                $('.isbox').show();
            } else {
                $('.ismobile').show();
            }
            var _this = this;
            var $demo = $('img[src= "../../img/demo/demo.png"]');
            var $closest = $demo.closest('div');
            var html1 = '<span style = "text-align: justify; word-break: normal;">请下载百度APP最新版本，扫描下图二维码体验智能小程序。</span>'
            + '<a href="http://searchbox.bj.bcebos.com/miniapp/miniappdemo/demo.zip" target="_blank" rel="noopener">'
            + '<br>下载小程序示例源码'
            + '</a>'
            + '<br>'
            + '<img src="../../img/demo/mob.png" alt="图片">'
            + '<img src="../../img/demo/comp.png" alt="图片">';
            var html2 = '<span style = "text-align: justify; word-break: normal;">请<a href = "javascript:;" class = "demo-invoker">点击这里</a>，或扫描下图二维码体验智能小程序。'
            + '<a href="http://searchbox.bj.bcebos.com/miniapp/miniappdemo/demo.zip" target="_blank" rel="noopener"></span>'
            + '<br>下载小程序示例源码'
            + '</a>'
            + '<br>'
            + '<img src="../../img/demo/box.png" alt="图片">'
            + '<img src="../../img/demo/comp.png" alt="图片">';
            var html = isBox() ? html2 : html1;
            $closest.html(html);
            $('.demo-invoker').click(function() {
                _this.caseInvoke(_this.schema);
                return false;
            });
        },
        initHiddenbar: function () {
            var sidebarIgnore = window.localData.sidebarIgnore;
            sidebarIgnore = sidebarIgnore.split(',');
            for (var i = 0; i < sidebarIgnore.length; i ++) {
                var href = '/docs' + sidebarIgnore[i] + '/';
                $('.m-doc-sidebar-nav-wrapper a[href="' + href + '"]')
                    .hide()
                    .parent('li')
                    .hide();
                $('#article-main-content a[href= "' + href + '"]').hide();
            }
        },
        initCustom: function () {
            var wrap = $('.m-doc-custom-examples');
            wrap.html(wrap.html().replace(/<br>/g, ''));
        },
        debounce: function (fn, delay) {
            var timer;
            return function () {
                var ctx = this;
                var args = arguments;
                clearTimeout(timer);
                timer = setTimeout(function () {
                    fn.apply(ctx, args);
                }, (delay ? delay : 300));
            };
        },
        throttle: function (func, wait, options) {
            var context, args, result;
            var wait = wait || 1000;
            var timeout = null;
            var previous = 0;
            if (!options) options = {};
            var later = function() {
                previous = options.leading === false ? 0 : +new Date();
                timeout = null;
                result = func.apply(context, args);
                if (!timeout) context = args = null;
            };
            return function() {
                var now = +new Date();
                if (!previous && options.leading === false) previous = now;
                var remaining = wait - (now - previous);
                context = this;
                args = arguments;
                if (remaining <= 0 || remaining > wait) {
                    if (timeout) {
                        clearTimeout(timeout);
                        timeout = null;
                    }
                    previous = now;
                    result = func.apply(context, args);
                    if (!timeout) context = args = null;
                } else if (!timeout && options.trailing !== false) {
                    timeout = setTimeout(later, remaining);
                }
                return result;
            };
        },
        initCrumbs: function () {
            var crumb = $('.m-doc-sidebar-selected').parents('.m-doc-sidebar-on').children('.m-doc-h1-list').children('div').html();
            if (!crumb) {
                crumb = $('.m-doc-sidebar-selected').parents('.m-doc-nav-on').children('.m-doc-nav-list').children('span').html();
            }
            $('.m-doc-crumbs-wrapper').find('span').eq(0).text(crumb);
            $('.m-doc-crumbs-wrapper').find('span').eq(1).text(doc.title.substr(0, doc.title.length - 4));
            if ($('.toc-level-2 .toc-text').length > 0) {
                $('.m-doc-crumbs-wrapper').find('span').eq(2).show();
                $('.m-doc-crumbs-wrapper').find('span').eq(2).text($('.toc-level-2 .toc-text').eq(0).text());
            } else {
                $('.m-doc-crumbs-wrapper').find('span').eq(2).hide();
            }
        },
        _scrollToAnchor: function (element) {
            setTimeout(function () {
                var href = element && element.href ? element.href : $(this)[0].href;
                href = decodeURIComponent(href);
                var tar = href.indexOf('#');
                href = tar > -1 ? href.substr(tar).replace('/', '') : '';
                var offsetTop = $(href).offset() ? $(href).offset().top : 0;
                var scrollTop = $('.m-doc-content-layout').scrollTop();
                var tarTop = offsetTop + scrollTop - 30;
                var diffTop = Math.abs(tarTop - scrollTop);
                var time = diffTop > 1800 ? 200 : 100;
                
                // 修复 当切换的两个元素offsetTop距离一致时 不会触发滚动事件，导航栏高亮不生效
                if(diffTop === 0) {
                    $('.m-doc-content-layout').scrollTo({toT: 0, durTime: time })
                }
                $('.m-doc-content-layout').scrollTo({toT: href ? tarTop : 0, durTime: time });
            }, 0);
        },
        addEvent: function () {
            var ctx = this;
            var before = $('.m-doc-content-layout').scrollTop();
            // 点击 二级导航折叠/展开/跳转
            $('.m-doc-nav-list').on('click', function () {
                var parent = $(this).parent('li');
                if (parent.hasClass('m-doc-nav-on')) {
                    parent.removeClass('m-doc-nav-on')
                } else {
                    if ($('.m-doc-header-nav-selected a').html() == '开发') {
                        $(this).parents('ul').children().removeClass('m-doc-nav-on');
                        $('.m-doc-sidebar-nav-wrapper').scrollTop(0);
                    }
                    parent.addClass('m-doc-nav-on');
                }
                var sidebarData = localSidebar.getLocal(window.localData.headerName);
                if (sidebarData) {
                    sidebarData[parent.data('name')] = parent.hasClass('m-doc-sidebar-nav-selected');
                    localSidebar.setLocal(window.localData.headerName, sidebarData);
                }
            });
            // 点击h1 折叠/展开
            $('.m-doc-h1-list').on('click', function () {
                var parent = $(this).parent('li');
                parent.hasClass('m-doc-sidebar-on')
                    ? parent.removeClass('m-doc-sidebar-on')
                    : parent.addClass('m-doc-sidebar-on');
                var sidebarData = localSidebar.getLocal(window.localData.headerName);
                if (sidebarData) {
                    sidebarData[parent.data('name')] = parent.hasClass('m-doc-sidebar-nav-selected');
                    localSidebar.setLocal(window.localData.headerName, sidebarData);
                }
            });

            function updateArticle($this, href) {
                if( href != '/docs/') {
                    $('.m-doc-sidebar-selected').removeClass('m-doc-sidebar-selected');
                    $this.parent('li').addClass('m-doc-sidebar-selected');
                    win.history.pushState(href, '', href);
                    ctx.getArticle(href, function() {
                        ctx._scrollToAnchor($this[0]);
                    });
                } else {
                    var href = $this.next('ul').children('li:first-child').children('a').attr('href');
                    var $this = $this.next('ul').children('li:first-child').children('a');
                    updateArticle($this, href);
                }
            }
            // 点击左侧标题，导航栏高亮显示 && 右侧文章更新
            $('.list-item').on('click', function(e) {
                e.preventDefault();
                var href = $(this).attr('href');
                updateArticle($(this), href);
            })
            // 点击右侧sidebar，禁止默认跳转，改为滑动到指定的元素位置
            $('.toc-wrap li a').on('click', ctx._scrollToAnchor);
            if (this.screenWidth > 768) {
                $('.m-doc-content-layout').on('scroll', throttle(function () {
                    var after = $('.m-doc-content-layout').scrollTop();
                    if (after > ctx.screenHeight) {
                        if (before < after) {
                            $('header').addClass('m-doc-header-show-crumbs');
                        } else {
                            $('header').removeClass('m-doc-header-show-crumbs');
                        }
                    } else {
                        $('header').removeClass('m-doc-header-show-crumbs');
                    }
                    before = after;
                }, 350));
            }
            $('.m-doc-menu-top').on('click', function () {
                var TIME = 500;
                var scrollWrap = $('.m-doc-content-layout');
                var scrollTop = scrollWrap.scrollTop();
                var everyLength = scrollTop / TIME * ctx.frame;
                function animat () {
                    scrollWrap.scrollTop(scrollWrap.scrollTop() - everyLength);
                    if (scrollWrap.scrollTop() !== 0) {
                        ctx.animation(animat);
                    }
                }
                ctx.animation(animat);
            });
            $('.m-doc-menu-toc').on('click', function () {
                if ($(this).hasClass('m-doc-menu-toc-close')) {
                    $(this).removeClass('m-doc-menu-toc-close');
                    $('.toc-wrap').animate({
                        height: 0,
                        width: 0
                    }, 100);
                } else {
                    $(this).addClass('m-doc-menu-toc-close');
                    $('.toc-wrap').height(0).animate({
                        height: ctx.tocHeight,
                        width: '230px'
                    }, 100);
                }
            });
            $(win).on('resize', function () {
                ctx.initToc();
            });
            $(win).on('popstate', function (e) {
                if (e.state) {
                    var href = e.state ? e.state : win.location.href;
                    $('.m-doc-sidebar-selected').removeClass('m-doc-sidebar-selected');
                    $('.m-doc-h2-list').filter(function() {
                        return href.indexOf($(this).attr('href')) > -1;
                    }).parent('li').addClass('m-doc-sidebar-selected');
                    ctx.getArticle(href, function() {
                        ctx.scrollToHash();
                    });
                }
            });
        },
        scrollToHash: function () {
            var _this = this;
            if (win.location.hash) {
                Array.prototype.some.call($('.m-doc-h2-children a'), function (element) {
                    if (element.href && element.href.indexOf(window.location.hash) > 0) {
                        $('.m-doc-sidebar-selected').removeClass('m-doc-sidebar-selected');
                        $(element).parent('li').addClass('m-doc-sidebar-selected');
                        _this._scrollToAnchor($(element)[0]);
                        return true;
                    }
                });
            }
        },
        getArticle: function (href, callback) {
            $('.reset-search-btn').click();
            var ctx = this;
            $.ajax({
                url: href,
                dataType: 'html',
                success: function (res) {
                    var $html = $($.parseHTML(res));
                    var article = $html.find('#article-main-content').html();
                    var docMenu = $html.find('#m-doc-menu-wrapper').html();
                    $('#article-main-content').html(article);
                    $('#m-doc-menu-wrapper').html(docMenu);
                    // $('.m-doc-content-layout').scrollTo({ toT: 0, durTime: 0 });
                    if ($('header').hasClass('m-doc-header-hide')) {
                        $('header').removeClass('m-doc-header-hide');
                    }
                    doc.title = $html.filter('title').html();
                    ctx.initCrumbs();
                    ctx.initH2();
                    ctx.initList();
                    ctx.initBottomPage();
                    ctx.initInvokeDemo();
                    if (callback) {
                        win.setTimeout(callback, 100);
                    }
                },
                error: function () {
                    win.location.href = href;
                }
            });
        },
        initToc: function () {
            if ($('.toc-wrap .toc-level-2 ').length === 0 && $('.toc-wrap .toc-level-3').length === 0) {
                $('.m-doc-menu-toc').hide();
            }
            var maxHeight = this.screenHeight
                - (+$('.m-doc-menu-wrapper').css('height').replace('px', ''))
                - (+$('.m-doc-menu-wrapper').css('bottom').replace('px', ''))
                - (+$('header').css('height').replace('px', ''))
                - 50;
            var tocWrap = $('.toc-wrap');
            tocWrap.css('maxHeight', (maxHeight + 'px'));
            this.tocHeight = $('.toc-wrap').height();
            tocWrap.find('.toc-level-1').children('.toc-link').remove();
            tocWrap.find('.toc-level-4').remove();
            tocWrap.find('.toc-level-5').remove();
            tocWrap.find('.toc-level-6').remove();
            // 第一条高亮
            if(tocWrap.find('.toc-level-2').eq(0).find('.toc-level-3').length > 0) {
                tocWrap.find('.toc-level-2').eq(0).find('.toc-level-3').eq(0).addClass('toc-level-3-on');
            } else {
                tocWrap.find('.toc-level-2').eq(0).addClass('toc-level-2-on');
            }
            if (win.innerWidth > 1590) {
                tocWrap
                .css('right', $('.m-doc-content-wrap')
                .css('margin-right'))
                .addClass('top-wrap-fixed');
            } else {
                tocWrap.css('right', '23px').removeClass('top-wrap-fixed');
                if ($('.m-doc-menu-toc').hasClass('m-doc-menu-toc-close')) {
                    $('.toc-wrap').addClass('toc-wrap-show');
                } else {
                    $('.toc-wrap').removeClass('toc-wrap-show');
                }
            }
        },
        rAF: function() {
            return (
                win.requestAnimationFrame            ||
                win.webkitRequestAnimationFrame      ||
                win.mozRequestAnimationFrame         ||
                win.oRequestAnimationFrame           ||
                function (callback) {
                    win.setTimeout(callback, ctx.frame);
                }
            );
        }(),
        animation: function (callback) {
            this.rAF.call(win, callback);
        },
        /**
         * @function 改造markdown生成的所有h2
         * @description 要求如下：
         * 1. 增加收起增加收起折叠按钮
         * 2. 效果为类似slideUp 和 slideDown
         * 故需要改造原本的h2及其对应内容相关的dom结构
         */
        initH2: function () {
            var articleEntey = $('.article-entry');
            var H2 = articleEntey.find('h2');
            H2.length || $('.m-doc-content-layout').css('visibility', 'visible');
            var articleElems = articleEntey.contents();
            // 1.为h2增加收起折叠内容的按钮，以及包裹的容器
            H2.append('<span class="m-doc-content-h2-toggle"><img src = "/docs/img/h2_arrow.png"/></span>')
              .wrap('<div class= "m-doc-content-item"></div>');
            var H2andSiblings = [];
            for (var i = 0; i < articleElems.length; i++) {
                if (articleElems[i].tagName === 'H2') {
                    H2andSiblings[H2andSiblings.length] = [];
                    H2andSiblings[H2andSiblings.length - 1].push(articleElems[i]);
                } else {
                    H2andSiblings[H2andSiblings.length - 1]
                    && H2andSiblings[H2andSiblings.length - 1].push(articleElems[i]);
                }
            }
            window.H2andSiblings = H2andSiblings;
            var h2Toggle = $('.m-doc-content-h2-toggle');
            h2Toggle.each(function (index) {
                var Siblings = H2andSiblings[index].slice(1);
                var h2InnerH = 0;
                // 2.把h2对应的内容用content-inner包裹起来
                var $h2Item = $(this).closest('.m-doc-content-item');
                $h2Item.append('<div class = "m-doc-content-inner"></div>');
                var $h2Inner = $h2Item.find('.m-doc-content-inner');
                $(Siblings).appendTo($h2Inner);
                // 解决抖动
                $('.m-doc-content-layout').css('visibility', 'visible');
                // 3.点击按钮收起折叠content-inner
                h2Toggle.eq(index).on('click', function () {
                    if ($(this).hasClass('m-doc-content-h2-toggle-close')) {
                        $(this).removeClass('m-doc-content-h2-toggle-close');
                        $h2Inner.animate({
                            height: h2InnerH
                        }, 'swing');
                    } else {
                        h2InnerH = $h2Inner.height();
                        $h2Inner.height(h2InnerH);
                        $(this).addClass('m-doc-content-h2-toggle-close');
                        $h2Inner.css('display', 'block').animate({
                            height: 0
                        }, 'swing');
                    }
                });
            });
        },
        /**
         * @function 如果嵌套的列表在三层或三层以上，第一层字号18px
         */
        initList: function () {
            $('.article .m-doc-content-inner>ol').each(function (element) {
                if ($(element).find('ol ol ol').length > 0) {
                    $(element).addClass('multilayer');
                }
            });
            // 场景值查看控制图片显示隐藏
            $('.show-scene-btn').on('click', function (e) {
                // console.log($(e.currentTarget).next(), $(this).attr('data-id'));
                $(e.currentTarget).next().css({
                    display: 'flex'
                });
            });
            $('.img-container').on('click', function (e) {
                e.stopPropagation();
                $(e.currentTarget).hide();
            });
        },
        /**
         * @function 监听点击上一页/下一页事件
         */
        initBottomPage: function () {
            var ctx = this;
            // 点击上一页/下一页
            $('.m-doc-bottomPage-wrapper a').on('click', function (e) {
                e.preventDefault();
                var href = $(this).attr('href');
                $('.m-doc-sidebar-selected').removeClass('m-doc-sidebar-selected');
                $('.m-doc-h2-list').filter(function () {
                    return $(this).attr('href') === href;
                }).parent('li').addClass('m-doc-sidebar-selected');
                win.history.pushState(href, '', href);
                ctx.getArticle(href);
            });
        }
    };
    $(doc).ready(function () {
        docs.start();
    });
})(window, document, window.$);
