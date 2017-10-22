jQuery(function ($) {
    'use strict';
    $('.search').keyup(function () {
        var filter = $(this).val();
        $('a[data-title]').each(function (index, elem) {
            if ($(elem).attr('data-title').search(filter) < 0) {
                $(elem).addClass('hidden');
            } else {
                $(elem).removeClass('hidden');
            }
        });
    });
});