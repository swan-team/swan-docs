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
        screenHeight: win.innerHeight,
        screenWidth: win.innerWidth,
        frame: 1000 / 60,
        start: function () {
            this.addEvent();
            this.mobileAddEvent();
            this.initCrumbs();
            this.initToc();
            this.initHiddenbar();
            this.initSidebar();
            // this.initH2();
            // this.initCustom();
        },
        initSidebar: function () {
            var sidebarData = localSidebar.getLocal(window.localData.headerName);
            var sidebar = $('.m-doc-sidebar-nav-wrapper');

            if (sidebarData) {
                for (var name in sidebarData) {
                    if (sidebarData.hasOwnProperty(name)) {
                        (sidebarData[name] === false) &&  sidebar.find('[data-name="'+ name +'"]').removeClass('m-doc-sidebar-nav-selected');
                    }
                }
            }
            
            sidebar.show();
            // 定位到当前sidebar
            var wrapperT = sidebar.find('ul').position().top;
            var selectedT = $('.m-doc-sidebar-selected').position().top;
            var scrollT = selectedT - wrapperT;
            scrollT > 44 && sidebar.scrollTop(selectedT - wrapperT)

        },
        /**
         * 部分页面需要在侧边栏隐藏
         * @description 配置在_config.yml中，增加sidebarIgnore:list
         * @author jingxiangzheng@baidu.com
         */
        initHiddenbar: function(){
            var sidebarIgnore = window.localData.sidebarIgnore;
            sidebarIgnore = sidebarIgnore.split(',');
            for (var i = 0; i < sidebarIgnore.length; i ++){
                var href = '/docs' + sidebarIgnore[i] + '/';
                $('.m-doc-sidebar-nav-wrapper a[href="' + href + '"]')
                    .hide()
                    .parent('li')
                    .hide();
                $('#article-main-content a[href= "'+ href +'"]').hide();
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
                    fn.apply(ctx, args)
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
                previous = options.leading === false ? 0 : +new Date();;
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

            if ($('.toc-level-2 .toc-text').length > 0) {
                $('.m-doc-crumbs-wrapper').find('span').eq(1).text($('.toc-level-2 .toc-text').eq(0).text());
            } else {
                $('.m-doc-crumbs-wrapper').find('span').eq(1).hide();
            }

            if ($('.toc-level-2').eq(0).find('.toc-level-3 .toc-text').length > 0) {
                $('.m-doc-crumbs-wrapper').find('span').eq(2).text($('.toc-level-3 .toc-text').eq(0).text());
            } else {
                $('.m-doc-crumbs-wrapper').find('span').eq(2).hide();
            }
        },

        addEvent: function () {
            var ctx = this;
            var before = $('.m-doc-content-layout').scrollTop();

            $('.m-doc-sidebar-list').on('click', function () {
                var parent = $(this).parent('li');
                parent.hasClass('m-doc-sidebar-nav-selected')
                ? parent.removeClass('m-doc-sidebar-nav-selected')
                : parent.addClass('m-doc-sidebar-nav-selected');

                var sidebarData = localSidebar.getLocal(window.localData.headerName);
                if (sidebarData) {
                    sidebarData[parent.data('name')] = parent.hasClass('m-doc-sidebar-nav-selected');
                    localSidebar.setLocal(window.localData.headerName, sidebarData);
                }
            });
            // 面包屑导航切换
            $('.m-doc-content-layout').on('scroll', this.throttle(function () {
                var backTop = $('.m-doc-menu-top');

                if (ctx.screenHeight > $(this).scrollTop()) {
                    backTop.removeClass('m-doc-menu-top-show');
                } else {
                    backTop.addClass('m-doc-menu-top-show'); 
                }
            }))
            // 右侧导航跟随
            .on('scroll', function () {
                var h2 = $('article').find('h2');
                var h3 = $('article').find('h3');
                var scrollTop = $(this).scrollTop();
                var tocH2 = $('.toc-wrap').find('.toc-level-2');
                var tocH3 = $('.toc-wrap').find('.toc-level-3');
                h2.each(function (index) {
                    var h2Top = $(this)[0].offsetTop - scrollTop;

                    if (h2Top <= 60) {
                        tocH2.each(function (andex) {
                            tocH2.eq(andex).removeClass('toc-level-2-on');
                            tocH2.eq(andex).removeClass('toc-level-2-select');
                        });
                        
                        tocH2.eq(index).addClass('toc-level-2-select');
                        if (tocH2.eq(index).find('.toc-level-3').length === 0) {
                            tocH2.eq(index).addClass('toc-level-2-on');
                            $('.m-doc-crumbs-wrapper').find('span').eq(2).hide();
                            tocH3.removeClass('toc-level-3-on');
                        }
                        
                        $('.m-doc-crumbs-wrapper').find('span').eq(1).text($('.toc-level-2-select .toc-text').eq(0).text());
                    }

                });
                h3.each(function (index) {
                    var h3Top = $(this)[0].offsetTop - scrollTop;

                    if (h3Top <= 60) {
                        tocH3.each(function (andex) {
                            tocH3.eq(andex).removeClass('toc-level-3-on');
                        });

                        tocH3.eq(index).addClass('toc-level-3-on');
                        $('.m-doc-crumbs-wrapper').find('span').eq(2).text($('.toc-level-3-on .toc-text').text()).show();
                    }
                });
            });
            if (this.screenWidth > 768) {
                $('.m-doc-content-layout').on('scroll', this.throttle(function () {
                    var after = $('.m-doc-content-layout').scrollTop();
                    if (after > ctx.screenHeight) {
                        if (before < after) {
                            if (!$('header').hasClass('m-doc-header-hide')) {
                                $('header').addClass('m-doc-header-hide');
                            } else if (!$('header').hasClass('m-doc-header-show')) {
                                $('header').addClass('m-doc-header-show');
                            }

                            $('header').addClass('m-doc-header-show-crumbs');
                        } else {
                            if ($('header').hasClass('m-doc-header-show')) {
                                $('header').removeClass('m-doc-header-show');
                            } else if ($('header').hasClass('m-doc-header-hide')) {
                                $('header').removeClass('m-doc-header-hide');
                            }

                            $('header').removeClass('m-doc-header-show-crumbs');
                        }
                    } else {
                        if ($('header').hasClass('m-doc-header-show')) {
                            $('header').removeClass('m-doc-header-show');
                        } else if ($('header').hasClass('m-doc-header-hide')) {
                            $('header').removeClass('m-doc-header-hide');
                        }

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
                    $('.toc-wrap').removeClass('toc-wrap-show');
                } else {
                    $(this).addClass('m-doc-menu-toc-close');
                    $('.toc-wrap').addClass('toc-wrap-show');
                }
            });
            $(win).on('resize', function () {
                ctx.initToc();
                //ctx.initCrumbs();
            });
        },
        initToc: function () {
            if ($('.toc-wrap .toc-level-2 ').length === 0) {
                $('.m-doc-menu-toc').hide();
            }
            var maxHeight = this.screenHeight
                - (+$('.m-doc-menu-wrapper').css('height').replace('px', ''))
                - (+$('.m-doc-menu-wrapper').css('bottom').replace('px', ''))
                - (+$('header').css('height').replace('px', ''))
                - 50;
            var tocWrap = $('.toc-wrap');
            tocWrap.css('maxHeight', (maxHeight + 'px'));
            
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
        mobileAddEvent: function () {

            $('.m-mobile-doc-level1').on('click', function () {
                $(this).hasClass('m-mobile-level1-list-show')
                ? $(this).removeClass('m-mobile-level1-list-show')
                : $(this).addClass('m-mobile-level1-list-show');
            });
            $('.m-doc-nav-btn').on('click', function () {
                $('.m-doc-sidebar-mask').addClass('m-doc-sidebar-mask-show');
                $('.m-doc-sidebar-nav-wrapper').addClass('m-doc-sidebar-nav-wrapper-show');
            });
            $('.m-doc-sidebar-mask').on('click', function () {
                $('.m-doc-sidebar-mask').removeClass('m-doc-sidebar-mask-show');
                $('.m-doc-sidebar-nav-wrapper').removeClass('m-doc-sidebar-nav-wrapper-show');
            });
            $('.m-doc-sidebar-mask').on('touchmove', function (e) {
                e.preventDefault();
            });
            $('.m-mobile-doc-header-list-mask').on('click', function (e) {
                $('.m-mobile-doc-level1').removeClass('m-mobile-level1-list-show');
                e.stopPropagation();
            });
            if (this.screenWidth <= 768) {
                var before = $('.m-doc-content-layout').scrollTop();
                $('.m-doc-content-layout').on('scroll', this.throttle(function() {
                    var after = $('.m-doc-content-layout').scrollTop();
                    if (before < after && after > 60) {
                        $('header').addClass('m-doc-header-hide');
                    } else {
                        $('header').removeClass('m-doc-header-hide');
                    }
                    before = after;
                }, 350));
            }

        },
        initH2: function () {
            var articleEntey = $('.article-entry');
            var H2 = articleEntey.find('h2');
            H2.append('<span class="m-doc-content-h2-toggle"></span>')
            var articleElems = articleEntey.children();
            var H2andSiblings = [];
            for (var i = 0; i < articleElems.length; i++) {
                if (articleElems[i].tagName === 'H2') {
                    H2andSiblings[H2andSiblings.length] = [];
                    H2andSiblings[H2andSiblings.length - 1].push(articleElems[i]);
                } else {
                    H2andSiblings[H2andSiblings.length - 1].push(articleElems[i]);
                }
            }
            var h2Toggle = $('.m-doc-content-h2-toggle');

            h2Toggle.each(function (index) {
                h2Toggle.eq(index).on('click', function () {
                    var Siblings = H2andSiblings[index];
                    if ($(this).hasClass('m-doc-content-h2-toggle-close')) {
                        $(this).removeClass('m-doc-content-h2-toggle-close');
                        for (var i = 1; i < Siblings.length; i++) {
                            $(Siblings[i]).removeClass('m-doc-content-hide');
                        }
                    } else {
                        $(this).addClass('m-doc-content-h2-toggle-close');
                        for (var i = 1; i < Siblings.length; i++) {
                            $(Siblings[i]).addClass('m-doc-content-hide');
                        }
                    }
                });
            })
        }
    };

    $(doc).ready(function () {
        docs.start();
    });
})(window, document, window.Zepto);
