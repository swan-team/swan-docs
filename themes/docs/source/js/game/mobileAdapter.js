/**
* @file adapter.js
* @author liuliang18
*/

// navbar
$('.mobile-navbar-selected').on('click', function () {
    $(this).find('img').toggleClass('img-arrow-close');
    $('.p-navbar-menu ul').toggleClass('mobile-navbar-selected-list-show');
});
// sidebar & mask
$('.p-navbar-header').on('click', function () {
    $('.p-sidebar-mask').addClass('p-sidebar-mask-show');
    $('.p-sidebar').addClass('p-sidebar-show');
    $('.p-sidebar-mask').on('click', function () {
        $(this).removeClass('p-sidebar-mask-show');
        $('.p-sidebar').removeClass('p-sidebar-show');
    });
});
