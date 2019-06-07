(function ($) {

    "use strict";

    $(document).ready(function () {
        /*-----------------------------------------------------------------------------------*/
        /* Compare Properties
         /*-----------------------------------------------------------------------------------*/

        // Add class if container has properties
        function addClassForChildren() {
            var compare_properties_number = $('.rh_compare .rh_compare__carousel > div').length;
            if (compare_properties_number !== 0) {
                $('.rh_wrapper_properties_compare').addClass('rh_has_compare_children');
            } else {
                $('.rh_wrapper_properties_compare').removeClass('rh_has_compare_children');
            }
            if (!$('.rh_wrapper_properties_compare').hasClass('rh_has_compare_children')) {
                $('.rh_wrapper_properties_compare').removeClass('rh_compare_open');
                $('.rh_fixed_side_bar_compare').fadeOut(0);
            }

        }

        $('html').on('click', '.rh_floating_compare_button', function (e) {

            $('.rh_wrapper_properties_compare').toggleClass('rh_compare_open');
            if ($('.rh_wrapper_properties_compare').hasClass('rh_compare_open')) {
                $('.rh_fixed_side_bar_compare').fadeIn(200);
            } else {
                $('.rh_fixed_side_bar_compare').fadeOut(200);
            }
            e.stopPropagation();
        });

        addClassForChildren();

// Inject HTML in floating Compare count
        function floatCompareCount() {
            var getDivCount = $('body .rh_compare .rh_compare__carousel > div').length;
            $('.rh_wrapper_properties_compare .rh_compare_count').html(' ( ' + getDivCount + '/4 ) ');
        }

        floatCompareCount();

// Notification for exceeding more than 4 properties
        function compare_action_notification() {
            const $rh_compare_action_notification = $('#rh_compare_action_notification');
            $rh_compare_action_notification.addClass("show");

            setTimeout(function () {
                $rh_compare_action_notification.removeClass("show");
            }, 6000);
        }

//Inject Property HTML in Compare View
        function injectCompareHtml(img, id, url, width, height, title, titleUrl) {

            $('.rh_compare__carousel').append(
                '<div class="rh_compare__slide">' +
                '<div class="rh_compare__slide_img">' +
                '<div class="rh_compare_img_inner">' +
                '<a target="_blank" href="' + titleUrl + '"><img src="' + img + '" width="' + width + '" height=" ' + height + '" ></a>' +
                '<a class="rh_compare__remove" data-property-id=" ' + id + ' " href=" ' + url + ' " ><i class="fa"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" style="fill:none;stroke-linejoin:round;stroke-width:2;stroke:currentColor">' +
                '<line x1="18" x2="6" y1="6" y2="18"/>' +
                '<line x1="6" x2="18" y1="6" y2="18"/>' +
                '</svg></i></a>' +
                '</div>' +
                '<a target="_blank" href="' + titleUrl + '" class="rh_compare_view_title">' + title + '</a>' +
                '</div>' +
                '</div>'
            );
        }

// Match the ids of properties in all section that are added to compare
        function matchAddedId() {
            var dataArray = [];
            $('.rh_compare__carousel > div').each(function () {
                var thisData = $(this).find('.rh_compare__remove').data('property-id');
                dataArray.push(parseInt(thisData));
            });

            $('span.add-to-compare-span').each(function () {
                var thisSpanData = $(this).data('button-id');
                if ($.inArray(thisSpanData, dataArray) !== -1) {

                    $(this).find('.compare-placeholder').removeClass('hide');
                    $(this).find('a.rh_trigger_compare').addClass('hide');
                } else {
                    $(this).find('.compare-placeholder').addClass('hide');
                    $(this).find('a.rh_trigger_compare').removeClass('hide');
                }
            });
        }


        /*-----------------------------------------------------------------------------------*/
        /* Add to compare
         /*-----------------------------------------------------------------------------------*/
        $('body').on('click', 'a.rh_trigger_compare', function (e) {
            e.preventDefault();

            var slides_number = $('.rh_compare__carousel .rh_compare__slide').length;

            if (slides_number > 3) {
                var remove_last_check = 1;
                $('.rh_compare__carousel .rh_compare__slide:nth-child(1) a.rh_compare__remove').trigger("click", [$(this), remove_last_check]);
                compare_action_notification();

            } else {
                var compare_placeholder = $(this).parent().find('.compare-placeholder');
                var compare_link = $(this); // Add to compare link.
                var button_title = $(this).parent().data('button-title');
                var title_url = $(this).parent().data('button-url');

                var classicIconATC = $(this).find('.rh_classic_icon_atc');
                classicIconATC.addClass('fa-spin');

                var add_compare_request = $.ajax({
                    url: $(compare_link).attr('href'),
                    type: "POST",
                    data: {
                        property_id: $(compare_link).data('property-id'),
                        action: "inspiry_add_to_compare"
                    },
                    dataType: "json"
                });

                add_compare_request.done(function (response) {
                    if (response.success) {
                        injectCompareHtml(response.img, response.property_id, response.ajaxURL, response.img_width, response.img_height, button_title, title_url);

                        matchAddedId();
                        addClassForChildren();
                        $('.rh_compare_count').fadeOut(200, function () {
                            floatCompareCount();
                        });
                        $('.rh_compare_count').fadeIn(200);

                        classicIconATC.removeClass('fa-spin');

                    } else {
                        console.log(response.message);
                        classicIconATC.removeClass('fa-spin');
                    }
                });

                add_compare_request.fail(function (jqXHR, textStatus) {
                    console.log("Request Failed: " + textStatus);
                });
            }


        });

        /*-----------------------------------------------------------------------------------*/
        /* Remove from compare
         /*-----------------------------------------------------------------------------------*/
        $('body').on('click', 'a.rh_compare__remove', function (event, add_compare_target, remove_last) {
            event.preventDefault();
            var current_link = $(this);
            var cross = $(this).find('i');
            var plus = $(add_compare_target).find('i');

            cross.addClass('fa-spin');
            plus.addClass('fa-spin');

            $.when(
                $.ajax({
                    url: current_link.attr('href'),
                    type: "POST",
                    data: {
                        property_id: current_link.data('property-id'),
                        action: "inspiry_remove_from_compare"
                    },
                    dataType: "json"
                })
                    .done(function (response) {
                        cross.removeClass('fa-spin');
                        if (response.success) {

                            current_link.parents('div.rh_compare__slide').remove();
                            var property_item = $('span.add-to-compare-span *[data-property-id="' + response.property_id + '"]').parent();
                            property_item.find('span.compare-placeholder').addClass('hide');
                            $('span.add-to-compare-span *[data-property-id="' + response.property_id + '"]').removeClass('hide').delay(200).show();
                            var compare_properties_number = $('.rh_compare .rh_compare__carousel > div').length;

                            $('.rh_compare_count').fadeOut(200, function () {
                                floatCompareCount();
                            });

                            matchAddedId();

                            addClassForChildren();

                        } else {
                            console.log(response.message);
                        }
                    })
                    .fail(function (jqXHR, textStatus) {
                        console.log("Request Failed: " + textStatus);
                    }))
                .then(function (response) {

                    if (remove_last) {
                        var compare_link = $(add_compare_target);
                        var compare_placeholder = $(add_compare_target).parent().find('.compare-placeholder');
                        var button_title = $(add_compare_target).parent().data('button-title');
                        var title_url = $(add_compare_target).parent().data('button-url');

                        var classicIconATC = $(this).find('.rh_classic_icon_atc');
                        classicIconATC.addClass('fa-spin');

                        var add_compare_request = $.ajax({
                            url: $(compare_link).attr('href'),
                            type: "POST",
                            data: {
                                property_id: $(compare_link).data('property-id'),
                                action: "inspiry_add_to_compare"
                            },
                            dataType: "json"
                        });

                        add_compare_request.done(function (response) {
                            plus.removeClass('fa-spin');
                            if (response.success) {
                                injectCompareHtml(response.img, response.property_id, response.ajaxURL, response.img_width, response.img_height, button_title, title_url);

                                floatCompareCount();

                                matchAddedId();
                                classicIconATC.removeClass('fa-spin');

                            } else {
                                console.log(response.message);
                                classicIconATC.removeClass('fa-spin');
                            }
                        });
                    }
                    $('.rh_compare_count').fadeIn(200);

                });

        });


    });
})(jQuery);