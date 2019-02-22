/**
 * 初始化首页
 * @description
 * 1，动画初始化
 * 2，移动和pc的事件绑定
 */
(function(win, doc, $){
    var home = {
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
        start: function () {
            this.initAnimation();
            this.pcAddEvent();
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
        }
    };

    $(doc).ready(function () {
        home.start();
    });
})(window, document, window.$);
