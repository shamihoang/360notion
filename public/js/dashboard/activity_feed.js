'use strict';

function toggleFBox(id) {
    $('.fb-container').addClass('hidden');
    $(id).removeClass('hidden');
}

$(document).ready(
    function() {
        var widgetButtons = $('.share-widget-types a');
        widgetButtons.click(
            function() {
                widgetButtons.filter('.active').removeClass('active');
                $(this).addClass('active');
                toggleFBox($(this).attr('data-open'));
            }
        );

        $('.remove-icon-upload').click(
            function() {
                $(this).closest('.upload-file').remove();
            }
        );
    }
);
