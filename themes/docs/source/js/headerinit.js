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
