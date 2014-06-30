'use strict';

$(document).ready(
    function() {
        var questionForm = $('#question_form');

        questionForm.validationEngine({
            promptPosition : 'centerRight',
            binded: false,
            scroll: false
        });

        questionForm.submit(
            function(event) {
                event.preventDefault();

                if (!questionForm.validationEngine('validate')) {
                    return;
                }

                $.ajax({
                    url: '/faq',
                    type: 'POST',
                    data: questionForm.serialize()
                }).done(
                    function() {
                        $('#question_modal').modal('hide');
                        alertify.success('Message sent successfully!');
                    }
                ).error(
                    function() {
                        alertify.error('An error occurred. Please try again.');
                    }
                );
            }
        );
    }
);
