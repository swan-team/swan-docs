/**
* @file search.js
* @author caixiaowen
*/

function searchFunc(path, searchId, contentId, marked) {
    $.ajax({
        url: path,
        dataType: 'json',
        success(pages) {
            // 将 API 放在搜索结果最开始的地方
            pages.sort(function (a, b) {
                return a.categoryName === 'api' ? -1 : 1;
            });

            let $input = document.getElementById(searchId);
            if (!$input) {
                return;
            }
            let $resultContent = document.getElementById(contentId);
            if (!$('#local-search-input').length) {
                return;
            }
            $('#top-search-box').on('click', function (e) {
                if ($(e.target).hasClass('reset-search-btn')) {
                    $($input).trigger('input');
                    $('#top-search-box').removeClass('top-search-box-focus');
                    return;
                }
                $(this).addClass('top-search-box-focus');
                $input.focus();
            });

            $($input).on('blur', function () {
                $(this).val() || $('#top-search-box').removeClass('top-search-box-focus');
            });

            let flag = true;
            $input.addEventListener('compositionstart', function () {
                flag = false;
            });

            $input.addEventListener('compositionend', function () {
                flag = true;
            });
            // 阻止回车刷新页面
            $input.addEventListener('keydown', function (event) {
                if (event.keyCode === 13) {
                    event.returnValue = false;
                    event.preventDefault();
                }
            });
            $input.addEventListener('input', function () {
                let $this = this;
                setTimeout(function () {
                    if (!flag) {
                        return;
                    }

                    let searchResultList = '<ul class="search-result-list">';
                    let keywords = $this.value.trim().split(/\s+/);
                    $resultContent.innerHTML = '';
                    if ($this.value.trim().length <= 0) {
                        $('#article-main-content').css({
                            display: 'block'
                        });
                        $($resultContent).css({
                            display: 'none'
                        });
                        return;
                    }

                    let matchCount = 0;
                    pages.forEach(page => {
                        let isMatch = false;
                        let isTitleMatch = false;
                        if (!page.title || page.title.trim() === '') {
                            return;
                        }
                        if (!page.content) {
                            page.content = '';
                        }

                        const mdTitle = page.title.trim();
                        const mdContent = page.content.trim().replace(/<[^>]+>/g, '');

                        const wrappedTitle = wrap(keywords, mdTitle);
                        let htmlTitle;
                        if (wrappedTitle) {
                            htmlTitle = marked(wrappedTitle);
                            isMatch = true;
                            isTitleMatch = true;
                        }
                        else {
                            htmlTitle = marked(mdTitle);
                        }

                        // Only match artiles with not empty contents
                        let htmlContent = '';
                        let isTitleDetailFound = false;
                        let needsH3Detail = false;
                        if (mdContent) {
                            const mdContentLines = mdContent.split('\n');
                            let displayMdContentLines = [];

                            for (var j = 0; j < mdContentLines.length; ++j) {
                                const trimed = mdContentLines[j].trim();
                                const line = wrap(keywords, mdContentLines[j]);
                                if (line) {
                                    // Remove | in tables, and # in headings
                                    const mdLine = line.replace(/[#|`]/g, ' ').trim();
                                    const displayLine = searchContentMarked(mdLine);
                                    if (displayLine !== '' && displayLine !== '<p></p>\n') {
                                        // needsH3Detail = false;

                                        displayMdContentLines.push(displayLine);
                                        isMatch = true;

                                        if (trimed.indexOf('### ') === 0) {
                                            // 为 <h3> 结果增加信息
                                            console.log('needs');
                                            needsH3Detail = true;
                                        }

                                        if (displayMdContentLines.length > 10) {
                                            break;
                                        }
                                    }
                                }
                                else if (trimed && trimed.indexOf('```') !== 0) {
                                    // 为搜索 API 结果增加信息
                                    if (isTitleMatch && !isTitleDetailFound) {
                                        // h2
                                        const content = `<p class="search-title-detail">${trimed}</p>`;
                                        displayMdContentLines.unshift(content);
                                        isTitleDetailFound = true;
                                    }
                                    else if (needsH3Detail) {
                                        const content = `<p class="search-h3-detail">${trimed}</p>`;
                                        displayMdContentLines[displayMdContentLines.length - 1] += content;
                                        needsH3Detail = false;
                                    }
                                }
                            }

                            htmlContent = displayMdContentLines.join('<div class="search-split"></div>');
                        }

                        if (isMatch) {
                            matchCount++;
                            searchResultList += `
                                <li>
                                    <h3>
                                        <a class="search-result-title" target="_blank" href="${page.url}">
                                            ${htmlTitle}
                                        </a>
                                    </h3>
                                    <div class="search-result">
                                        ${htmlContent}
                                    </div>
                                </li>`;
                        }
                    });
                    searchResultList += '</ul>';
                    let title;
                    if (matchCount) {
                        title = '<h1>找到<em>' + keywords + '</em>相关文件' + matchCount + '个</h1>';
                    }
                    else {
                        title = '<h1 class="empty-title">没有找到<em>' + keywords + '</em>相关内容</h1>';
                    }
                    searchResultList = title + searchResultList;
                    $('#article-main-content').css({
                        display: 'none'
                    });

                    $($resultContent)
                        .css({
                            display: 'block'
                        })
                        .scrollTop(0);
                    $resultContent.innerHTML = searchResultList;
                }, 0);
            });

        }
    });

    /**
     * Wrap md text with <em></em> node
     *
     * @param {string[]} keywords keywords to match
     * @param {string} md text content
     * @return {string} md wrapped with <em></em>, if no match, null is returned
     */
    function wrap(keywords, md) {
        let matchedCnt = 0;
        for (let i = 0; i < keywords.length; ++i) {
            const keyword = keywords[i];

            // Remove link in markdown
            md = String(md).replace(/(?:__|[*#])|\[(.*?)\]\(.*?\)/gm, '$1');

            if (md.toLowerCase().indexOf(keyword.toLowerCase()) >= 0) {
                ++matchedCnt;
                const wrapped = '<em class="search-keyword">$1</em>';
                const re = new RegExp(`(${keyword})`, 'gi');
                md = md.replace(re, wrapped);
            }
        }
        if (matchedCnt > 0) {
            return md;
        }
        else {
            return null;
        }
    }

    /**
     * Make content to be markdown
     *
     * @param {string} mdContent content text
     * @return {string} markdown text
     */
    function searchContentMarked(mdContent) {
        const renderer = new marked.Renderer();

        const ignores = ['code', 'codespan', 'blockquote', 'table', 'tablerow', 'tablecell', 'img'];
        ignores.forEach(name => {
            renderer[name] = function (text) {
                return text;
            };
        });

        let result = marked(mdContent, {
            renderer: renderer
        });

        return result;
    }
}
