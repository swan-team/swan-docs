function searchFunc(searchId, contentId) {
    var $resultContent = document.getElementById(contentId);
    var $input = document.getElementById(searchId);
    if (!$input || !$('#local-search-input').length) {
        return;
    }

    function toggleArticleContent(isShown) {
        var isToggle = typeof isShown === 'undefined';
        var resultStatus, articleStatus;
        if (isToggle) {
            var currentStatus = $('#article-main-content').css('display');
            resultStatus = currentStatus;
            articleStatus = currentStatus === 'block' ? 'none' : 'block';
        } else {
            articleStatus = isShown ? 'block' : 'none';
            resultStatus = isShown ? 'none' : 'block';
        }
        $('#article-main-content').css({
            display: articleStatus
        });
        $($resultContent).css({
            display: resultStatus
        });
    }
    $('#top-search-box').on('click', function (e) {
        console.log(222)
        if ($(e.target).hasClass('reset-search-btn')) {
            toggleArticleContent(true);
            $('#top-search-box').removeClass('top-search-box-focus');
            return;
        }
        $(this).addClass('top-search-box-focus');
        $input.focus();
    });

    $($input).on('blur', function () {
        $(this).val() || $('#top-search-box').removeClass('top-search-box-focus');
    });

    var flag = true;
    $input.addEventListener('compositionstart', function () {
        flag = false;
    });

    $input.addEventListener('compositionend', function () {
        flag = true;
    });
    //阻止回车刷新页面
    $input.addEventListener('keydown', function (e) {
        var e = e || event;
        if (e.keyCode === 13) {
            e.returnValue = false;
            e.preventDefault();
            // 搜索跳转打点
            _hmt.push(['_trackEvent', 'search', '搜索跳转', e.target.value]);
            window.open(`${window.location.origin}/forum/search?word=${e.target.value}&scope=devdocs`, '_blank');
        }
    })
}