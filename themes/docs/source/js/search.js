/**
 * @file 搜索框事件处理
 */

var origin = window.location.origin;
// 请求函数
var get = function (requestUrl, successFn, failFn) {
    try {
        $.ajax({
            url: requestUrl,
            dataType: 'json',
            type: 'GET',
            success: successFn,
            fail: failFn
        });
    }
    catch (err) {}
};

var searchReport = function (keyword, countType) {
    var requestUrl = '/forum/api/statistics_wordstatisticsadd';
    var params = 'word=' + keyword + '&source=docs&module=category&countType=' + countType;
    get(requestUrl + '?' + params);
};

var timer;
var debounce = function (fn, delay) {
    return function () {
        var ctx = this;
        var args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(ctx, args);
        }, (delay ? delay : 300));
    };
};

var navToSearch = function (keywords, tarckTag, scope) {
    scope = scope || 'devdocs';
    tarckTag = tarckTag || 'sug跳出点击';
    // 搜索跳转打点
    _hmt.push(['_trackEvent', tarckTag, '搜索跳转']);
    searchReport(keywords, 'click');
    var url = origin + '/forum/search?word=' + keywords + '&scope=' + scope + '&source=docs';
    window.open(url, '_blank');
};

var navToDocs = function (path, keywords, number, broadName) {
    var msg = number > 5 ? '位置大于5' : '位置小于5';
    _hmt.push(['_trackEvent', 'sug跳出点击', msg]);
    searchReport(keywords, 'click');
    _hmt.push(['_trackEvent', 'sug跳出点击位置', number]);
    window.open(path, '_blank');
};

var renderSearchSug = function (keywords, resData, docsIsEmpty, fourmIsEmpty) {
    var $topSug = $('#top-search-sug');
    var str = '';
    docsIsEmpty = docsIsEmpty || false;
    searchReport(keywords, 'query');
    _hmt.push(['_trackEvent', 'sug展示', '展示']);
    if (!docsIsEmpty) {
        str += '<div class="top-search-sug-result">';
        var listNumber = 0;
        resData.forEach(function (list) {
            var docList = list.docList || [];
            var listLen = docList.length;
            listNumber += listLen;
            str += '<div class="top-search-sug-item">'
                + '<div class="sug-item-broad-name">' + list.boardInfo.name + '</div>'
                + '<ul>';
            docList.forEach(function (item, itemIndex) {
                var path = origin + item.path;
                // 获取点击sug的位置
                var number = listNumber - listLen + itemIndex + 1;
                str += '<li>'
                    + '<div class="sug-item-container" onclick="navToDocs(\'' +  path + '\',\'' + keywords + '\', \'' + number + '\',\'' + list.boardInfo.name + '\')">'
                    + '<span class="sug-item-tag">' + item.tagInfo.name + '</span>'
                    + '<span class="sug-item-content">'
                    +     '<p class="sug-item-content-title">' + item.title + '</p>';
                if (item.description) {
                    str += '<p class="sug-item-content-des">' + item.description + '</p>';
                }
                str += '</span>'
                    + '</div>'
                    + '</li>';
            });
            str += '</ul>'
                + '</div>';
        });
        str += '</div>'
            +  ' <div class="top-search-sug-more">'
            +  '<span onclick="navToSearch(\'' + keywords + '\')">'
            +  '查看更多 >'
            +  '</span>'
            +  '</div>';
    }
    else if (docsIsEmpty && !fourmIsEmpty) {
        str += '<div class="top-search-sug-docs-empty">'
            +  '<span onclick="navToSearch(\'' + keywords + '\', \'' + 'sug无结果跳转至社区' + '\', \'' + 'devforum' + '\')">'
            +  '文档没有相关内容，查看社区搜索结果 >'
            +  '</span>'
            +  '</div>';
    }
    $topSug.html(str);
    $topSug.css({
        display: 'block'
    });
};

var getFourmSug = function (keywords) {
    get('/forum/api/search_category?word=' + keywords + '&scope=devforum', function (res) {
        if (res.data.length === 0) {
            renderSearchSug(keywords, [], true, true);
            return;
        }
        renderSearchSug(keywords, [], true, false);
    });
};

function searchFunc(searchId, contentId) {
    var $input = document.getElementById(searchId);
    var $inputPc = document.getElementById('local-search-input-pc');
    if (!$input || !$('#local-search-input').length) {
        return;
    }
    // 原有搜索逻辑不变
    $('#top-search-box').on('click', function (e) {
        if ($(e.target).hasClass('reset-search-btn')) {
            $('#top-search-box').removeClass('top-search-box-focus');
            return;
        }
        $('.m-doc-level1').css({
            'display': 'none'
        });
        $(this).addClass('top-search-box-focus');
        $input.focus();
        _hmt.push(['_trackEvent', '移动端搜索框', '点击']);
    });

    $($input).on('blur', function (e) {
        $('#top-search-box').removeClass('top-search-box-focus');
        $('.m-doc-level1').css({
            'display': 'block'
        });
    });

    // 保证输入事件结束后，才触发搜索
    var flag = true;
    $inputPc.addEventListener('compositionstart', function () {
        flag = false;
    });

    $inputPc.addEventListener('compositionend', function () {
        flag = true;
    });

    $inputPc.addEventListener('input', function (e) {
        var $this = this;
        debounce(function () {
            if (!flag) {
                return;
            }
            var keywords = $this.value.trim();
            if (keywords.length <= 0) {
                // renderSearchSug('', [], true, true);
                return;
            } else {
                get('/forum/api/search_category?word=' + keywords + '&scope=devdocs', function (res) {
                    var resData = res.data;
                    if (resData.length === 0) {
                        getFourmSug(keywords);
                        return;
                    }
                    renderSearchSug(keywords, resData, false, true);
                });
            }
        }, 500)();
    });

    $inputPc.addEventListener('blur', function () {
        setTimeout(() => {
            $('#top-search-sug').css({
                display: 'none'
            });
        }, 300);
    });

    $inputPc.addEventListener('focus', function (e) {
        // var keywords = e.target.value;
        _hmt.push(['_trackEvent', 'PC端搜索框', '点击']);
        $('#top-search-sug').css({
            display: 'block'
        });
        // if ($('.top-search-sug-item').length > 0) {
        //     searchReport(keywords, 'query');
        //     _hmt.push(['_trackEvent', 'sug展示', '展示']);
        // } else if ($('.top-search-sug-docs-empty').length > 0) {
        //     searchReport(keywords, 'query');
        //     _hmt.push(['_trackEvent', 'sug文档无结果，社区有结果', '展示']);
        // }
    });

    function keyEnter(e) {
        var e = e || event;
        var keywords = e.target.value;
        var keywordsFilter = keywords.trim();
        if (e.keyCode === 13) {
            e.returnValue = false;
            e.preventDefault();
            if (!keywords.length) {
                return;
            }
            navToSearch(keywordsFilter, '搜索框回车&点击触发搜索');
            $inputPc.blur();
        }
    }

    //阻止回车刷新页面
    $input.addEventListener('keydown', keyEnter);
    $inputPc.addEventListener('keydown', keyEnter);

    // 搜索图标点击
    $('#search-btn-pc').on('click', function () {
        var keywords = $inputPc.value;
        var keywordsFilter = keywords.trim();
        if (!keywords) {
            return;
        }
        navToSearch(keywordsFilter, '搜索框回车&点击触发搜索');
    });

}