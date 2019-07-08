function searchFunc(path, searchId, contentId) {
    $.ajax({
        url: path,
        dataType: 'json',
        success: function (datas) {
            // remove gamedoc
            datas = datas.filter(function(item) {
                    return item.url.indexOf('/docs/game/') === -1;
                });
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
                if($(e.target).hasClass('reset-search-btn')) {
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
            $input.addEventListener('keydown', function(e){
                var e = e || event;
                if (e.keyCode === 13) {
                    e.returnValue = false; 
                    e.preventDefault();
                }
            })
           
            $input.addEventListener('input', function () {
                var $this = this;
                setTimeout(function () {
                    if (!flag) {
                        return;
                    }
                    var str = '<ul class="search-result-list">';
                    var keywords = $this.value.trim().toLowerCase().split(/\s+/);
                    var matchCount = 0;
                    $resultContent.innerHTML = '';
                    if ($this.value.trim().length <= 0) {
                        toggleArticleContent(true);
                        return;
                    }
                    datas.forEach(function (data) {
                        var isMatch = true;
                        if (!data.title || data.title.trim() === '') {
                            // data.title = 'Untitled';
                            return false;
                        }
                        var data_title = data.title.trim().toLowerCase();
                        var content = data.content || '';
                        var data_content = content.trim().replace(/<[^>]+>/g, "").toLowerCase();
                        var data_url = data.url;
                        var index_title = -1;
                        var index_content = -1;
                        var first_occur = -1;
                        // only match artiles with not empty contents
                        if (data.isNav) {
                            keywords.forEach(function (keyword, i) {
                                index_title = data_title.indexOf(keyword);
                                if (index_title < 0) {
                                    isMatch = false;
                                }
                                else {
                                    // isMatch = true;
                                    if (index_title < 0) {
                                        index_title = 0;
                                    }
                                    if (i === 0) {
                                        first_occur = index_title;
                                    }
                                }
                            });
                        }
                        else if (data_content !== '') {
                            keywords.forEach(function (keyword, i) {
                                index_title = data_title.indexOf(keyword);
                                index_content = data_content.indexOf(keyword);

                                if (index_title < 0 && index_content < 0) {
                                    isMatch = false;
                                } else {
                                    if (index_content < 0) {
                                        index_content = 0;
                                    }
                                    if (i === 0) {
                                        first_occur = index_content;
                                    }
                                }
                            });
                        } else {
                            isMatch = false;
                        }
                        if (isMatch) {
                            matchCount++;
                            str += '<li><h3><a href="javascript:void(0);" onclick=handleResultAClick("' + data_url + '/","' + keywords + '") class="search-result-title">' + data_title + '</a></h3>';
                            var content = data.content ? data.content.trim().replace(/<[^>]+>/g, '') : '';
                            // 面包屑数据
                            var data_breadcrumb = data.breadCrumbs.map(item => {
                                let [title, url] = item.split(',');
                                return '<span class="breadcrumb_item"><a href="/docs' + url + '/" target="_blank">' + title + '</a><span class="arrow-right">&gt;</span></span>';
                            }).join('');
                            if (first_occur >= 0) {
                                var match_content = content && this.replaceMarkdown(content);
                                // highlight all keywords
                                keywords.forEach(function (keyword) {
                                    var reg = new RegExp(keyword, 'gi');
                                    match_content = match_content.replace(reg, function (str) {
                                        return '<em class="search-keyword">' + str + '</em>';
                                    })
                                });

                                str += '<p class="search-result">' + match_content + '</p>';
                                str += '<div class="search-result-bread-crumb">' + data_breadcrumb + '</div>';
                            }
                            str += '</li>';
                        }
                    });
                    str += '</ul>';
                    var title = matchCount ? '<h1>找到<em>' + keywords + '</em>相关内容' + matchCount + '个</h1>' : '<h1 class="empty-title">没有找到<em>' + keywords + '</em>相关内容</h1>';
                    str = title + str;
                    toggleArticleContent(false);
                    $resultContent.innerHTML = str;
                }, 0);
            });

        }
    });
}
// 处理点击结果，keywords高亮展示
function handleResultAClick (url, keywords) {
    if (!keywords.length) {
        return;
    }
    window.localStorage.setItem('keywords', keywords);
    window.open(url);
}
// 替换当前匹配的markdown内容，取第一句话
function replaceMarkdown(str) {
    str = str.replace(/(\r\n|\n)/g, '')                          // 全局匹配换行                                               //全局匹配换行
    .replace(/\s/g, '')                                          // 全局匹配空字符
    .replace(/(<\w+?)\s(?:\s*\w*?\s*=\s*'.+?')*?\s*?(>)/g, '$1$2') // 去除标签属性
    .replace(/\!\[[\s\S]*?\]\([\s\S]*?\)/g, '')                  // 全局匹配图片
    .replace(/\[[\s\S]*?\]\([\s\S]*?\)/g, '')                    // 全局匹配连接
    .replace(/(\*)(.*?)(\*)/g, '')                               // 全局匹配强调
    .replace(/`{1,2}[^`](.*?)`{1,2}/g, '')                       // 全局匹配内联代码块
    .replace(/```([\s\S]*?)```[\s]*/g, '')                       // 全局匹配代码块
    .replace(/[\s]*[-\*\+]+(.*)/g, '')                           // 全局匹配无序列表
    .replace(/[\s]*[0-9]+\.(.*)/g, '')                           // 全局匹配有序列表
    .replace(/(\|-{1,})+\|/g, '')                                // 全局匹配表格内容
    .replace(/(\|.*?)+/g, '')                                    // 全局匹配表头内容
    .replace(/(#+)/g, '')                                        // 全局匹配标题
    .replace(/(>+)/g, '');                                        // 全局匹配摘要
    const firstPeriodIndex = str.indexOf('。') + 1;
    return str.slice(0, firstPeriodIndex ? firstPeriodIndex : str.length);
}
