/**
 * 初始化首页
 * @author jingxiangzheng
 * @description
 * 1，动画初始化
 * 2，移动和pc的事件绑定
 * @update 2018-07-04
 */
(function(win, doc, $){
    var homePage = {
        animationList:{
            doc:[
                {
                    animationData: "dev"
                },
                {
                    animationData: "example"
                },
                {
                    animationData: "compass"
                }
            ],
            resource:[
                {
                    animationData: "tool"
                },
                {
                    animationData: "guide"
                },
                {
                    animationData: "doc"
                }
            ]
        },
        scheme: 'baiduboxapp://swan/4fecoAqgCIUtzIyA4FAPgoyrc4oUc25c/?_baiduboxapp=%7B%22from%22%3A%22%22%2C%22ext%22%3A%7B%7D%7D&callback=_bdbox_js_275&upgrade=0',
        screenWidth: win.innerWidth,
        init: function () {
            this.mobileAddEvent();
            this.initAnimation();
            this.pcAddEvent();            
        },
        caseInvoke: function(scheme) {
            if (isPc()) {
                return;
            }
            if (isBox()) {
                // 手百
                isIOS() ? smartAppIosInvoke(scheme) : smartAppAndroidInvoke(scheme);
            } else {
                // 非手百
                /*eslint-disable fecs-camelcase*/
                var openbox = window.OpenBox({
                    url: location.href
                });
                /*eslint-disable fecs-camelcase*/
                openbox.open();
            }
        },
        // 初始化lottie的动画
        initAnimation: function(){
            for (var i in this.animationList){
                for (var index = 0; index < this.animationList[i].length; index++){
                    var item = this.animationList[i][index];
                    var ele = i == 'doc'? $('.m-hp-document .m-hp-icon') :$('.m-hp-resource .m-hp-icon');
                    this.animationList[i][index] = bodymovin.loadAnimation({
                        container: ele[index],
                        renderer: 'svg',
                        loop: false,
                        autoplay: false,
                        path: 'lottieData/' + item.animationData + '.json'
                    })
                }
            }
        },
        // pc绑定鼠标滑入&滑出lottie效果
        pcAddEvent: function(){
            var _this = this;
            $('.m-hp-item').on({
                mouseenter: function(e){
                    var index = $(this).index();
                    var parent = $(this).closest('div');
                    var animationData = parent.hasClass('m-hp-resource') ? _this.animationList.resource : _this.animationList.doc;
                    animationData[index].setDirection(1);
                    $(this).find('.m-hp-icon').addClass('on');
                    animationData[index].play();
                },
                mouseleave: function(e){
                    var index = $(this).index();
                    var parent = $(this).closest('div');
                    var animationData = parent.hasClass('m-hp-resource') ? _this.animationList.resource : _this.animationList.doc;
                    animationData[index].setDirection(-1);
                    $(this).find('.m-hp-icon').removeClass('on');
                    animationData[index].play();
                }
            });
        },
        throttle: function  (fn, delay, wait) {
            var timer = null;
            var start = null;
            return function() {
                var now = +new Date();
                var ctx = this;
                var args = arguments;
                if (!start) {
                    start = now;
                }
                if (now - start > wait) {
                    timer && clearTimeout(timer);
                    start = now;
                    fn.apply(ctx, args);
                } else {
                    timer && clearTimeout(timer);
                    timer = setTimeout(function() {
                        fn.apply(ctx, args);
                    }, (delay ? delay : 300));
                }
            };
        },
        //头部的移动端
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
            $(document).on('touchstart', '.m-hp-demo', function(){
                _this.caseInvoke(_this.scheme);
            });
            if (this.screenWidth <= 768) {
                var before = $('.m-doc-content-layout').scrollTop();
                $('.m-doc-content-layout').on('scroll', this.throttle(function() {
                    var after = $('.m-doc-content-layout').scrollTop();
                    if (before < after && after > 60) {
                        $('header').hide()
                    } else {
                        $('header').show()
                    }
                    before = after;
                }, 300, 300));
            }
        }
    };

    $(doc).ready(function () {
        homePage.init();
    });
})(window, document, window.Zepto);
