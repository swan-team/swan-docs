(function (win, doc, $) {
    var header = {
        screenWidth: win.innerWidth,
        scheme: 'baiduboxapp://swan/4fecoAqgCIUtzIyA4FAPgoyrc4oUc25c/?_baiduboxapp=%7B%22from%22%3A%22%22%2C%22ext%22%3A%7B%7D%7D&callback=_bdbox_js_275&upgrade=0',
<<<<<<< HEAD
        start: function () {
=======
        start: function() {
>>>>>>> merge_0222
            this.mobileAddEvent();
            this.initTooltip();
        },
        addNavList: function (name, list) {
            var content = list.reduce(function (total, currentValue) {
                return total + '<ul class="m-doc-header-nav-list-item">' +
<<<<<<< HEAD
                    '<a class="m-doc-header-nav-list-link" href="' + currentValue.link + '">' + currentValue.label + '</a>' +
                    '</ul>';
            }, '');
            $('.' + name).tooltipster({
                animation: 'fade',
                interactive: true,
                delay: '200',
                side: ['bottom'],
                trigger: 'hover',
                content: content,
                contentAsHTML: true
            });
=======
                    '<a class="m-doc-header-nav-list-link" href="/docs' + currentValue.link + '">' + currentValue.text + '</a>' +
                    '</ul>';
            }, '');
            var url = win.location.href;
            if (url.includes('/docs/game/')) {
                var gameListHeader = ['.introduction-group', '.develop-group', '.data-group'];
                gameListHeader.forEach(element => {
                    $(element).addClass('game');
                });
                $('.' + name).tooltipster({
                    animation: 'fade',
                    interactive: true,
                    delay: '200',
                    side: ['bottom'],
                    trigger: 'hover',
                    content: content,
                    contentAsHTML: true
                });
            }
>>>>>>> merge_0222
            $('.' + name).on('mouseenter', function () {
                setTimeout(function () {
                    $('.' + name).addClass(name + '-hover');
                    $('.tooltipster-base').on('mouseenter', function () {
                        setTimeout(function () {
                            $('.' + name).addClass(name + '-hover');
                        }, 0);
                    });
                    $('.tooltipster-base').on('touchstart', function () {
                        setTimeout(function () {
                            $('.' + name).addClass(name + '-hover');
                        }, 0);
                    });
                    $('.tooltipster-base').on('mouseleave', function () {
                        $('.' + name).removeClass(name + '-hover');
                    });
                    $('.tooltipster-base').on('touchleave', function () {
                        $('.' + name).removeClass(name + '-hover');
                    });
                }, 201);
            });
            $('.' + name).on('mouseleave', function () {
                $('.' + name).removeClass(name + '-hover');
            });
        },
        initTooltip: function () {
            var params = [
                {
                    tab: 'introduction',
<<<<<<< HEAD
                    list: [{ 'link': '/#', 'label': '小程序介绍' }, { 'link': '/#', 'label': '小游戏介绍' }]
                },
                {
                    tab: 'develop',
                    list: [{ 'link': '/#', 'label': '小程序开发' }, { 'link': '/#', 'label': '小游戏开发' }]
                },
                {
                    tab: 'data',
                    list: [{ 'link': '/#', 'label': '小程序数据' }, { 'link': '/#', 'label': '小游戏数据' }]
                }
            ]
            var _this = this;
            params.forEach(function (item) {
                _this.addNavList(item.tab, item.list);
=======
                    list: [{ 'link': '/docs/introduction/register/', 'label': '小程序介绍' },
                        { 'link': '/docs/game/introduction/prerare/enter_application/', 'label': '小游戏介绍' }]
                },
                {
                    tab: 'develop',
                    list: [{ 'link': '/docs/develop/tutorial/codedir/', 'label': '小程序开发' },
                        { 'link': '/docs/game/api/openApi/authorize/', 'label': '小游戏开发' }]
                },
                {
                    tab: 'data',
                    list: [{ 'link': '/docs/data/concept/', 'label': '小程序数据' },
                        { 'link': '/docs/game/data/feature/concept/', 'label': '小游戏数据' }]
                }
            ]
            var _this = this;
            headerNavs.forEach(function (item) {
                if (item.children) {
                    _this.addNavList(item.name, item.children);
                }
>>>>>>> merge_0222
            });
        },
        mobileAddEvent: function () {
            var _this = this;
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
            $(doc).on('touchstart', '.m-hp-demo', function () {
                caseInvoke(_this.scheme);
            });
            if (this.screenWidth <= 768) {
                var before = $('.m-doc-content-layout').scrollTop();
                $('.m-doc-content-layout').on('scroll', throttle(function () {
                    var after = $('.m-doc-content-layout').scrollTop();
                    if (before < after && after > 60) {
                        $('header').hide()
                    } else {
                        $('header').show()
                    }
                    before = after;
                }, 300));
            }
        }
    };
    $(doc).ready(function () {
        header.start();
    });
<<<<<<< HEAD
})(window, document, window.$); 
=======
})(window, document, window.$);
>>>>>>> merge_0222
