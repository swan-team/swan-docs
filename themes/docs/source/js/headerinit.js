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

        '/docs/game/introduction/prerare/enter/':'/docs/game/introduction/prerare/enter_application/',
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
    };
    urlMap[pathname] && location.replace(urlMap[pathname]);
}(location.pathname);

(function (win, doc, $) {
    var header = {
        screenWidth: win.innerWidth,
        scheme: 'baiduboxapp://swan/4fecoAqgCIUtzIyA4FAPgoyrc4oUc25c/?_baiduboxapp=%7B%22from%22%3A%22%22%2C%22ext%22%3A%7B%7D%7D&callback=_bdbox_js_275&upgrade=0',
        start: function () {
            this.mobileAddEvent();
            if (location.href.indexOf('/docs/game/') === -1) {
                // 下拉菜单入口，暂时屏蔽
                // this.initTooltip();
            }
        },
        addNavList: function (name, list) {
            var content = list.reduce(function (total, currentValue) {
                return total + '<ul class="m-doc-header-nav-list-item">' +
                    '<a class="m-doc-header-nav-list-link" href="/docs' + currentValue.link + '">' + currentValue.text + '</a>' +
                    '</ul>';
            }, '');
            $('.' + name).addClass('game');
            $('.' + name).tooltipster({
                animation: 'fade',
                interactive: true,
                delay: '200',
                side: ['bottom'],
                trigger: 'hover',
                content: content,
                contentAsHTML: true
            });
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
            var _this = this;
            headerNavs.forEach(function (item) {
                if (item.children) {
                    _this.addNavList(item.name, item.children);
                }
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
})(window, document, window.$);
