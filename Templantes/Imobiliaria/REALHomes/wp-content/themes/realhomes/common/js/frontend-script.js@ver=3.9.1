(function ($) {

    "use strict";

    $(document).ready(function () {

        /*-----------------------------------------------------------------*/
        /* Currency Switcher
        /*-----------------------------------------------------------------*/
        var currencySwitcherList = $('ul#currency-switcher-list');
        if (currencySwitcherList.length > 0) {     // if currency switcher exists

            var currencySwitcherForm = $('#currency-switcher-form');
            var currencySwitcherOptions = {
                success: function (ajax_response, statusText, xhr, $form) {
                    var response = $.parseJSON(ajax_response);
                    if (response.success) {
                        window.location.reload();
                    } else {
                        console.log(response);
                    }
                }
            };

            $('#currency-switcher-list > li').on('click', function (event) {
                currencySwitcherList.fadeOut(200);
                $('.rh_wrapper_currency_switcher').removeClass('open');
                $('#currency-switcher').removeClass('parent_open');
                // get selected currency code
                var selectedCurrencyCode = $(this).data('currency-code');

                if (selectedCurrencyCode) {
                    $('#selected-currency .currency_text').html(selectedCurrencyCode);
                    $('#selected-currency i').attr('class','currency-flag currency-flag-'+ selectedCurrencyCode.toLowerCase());
                    $('#switch-to-currency').val(selectedCurrencyCode);           // set new currency code
                    currencySwitcherForm.ajaxSubmit(currencySwitcherOptions);    // submit ajax form to update currency code cookie
                }
            });
            $('body').on('click','#currency-switcher' ,function (e) {
                $('.rh_wrapper_currency_switcher').toggleClass('parent_open');
                $(this).toggleClass('open');
                if($(this).hasClass('open')){
                    currencySwitcherList.fadeIn(200);
                }else{
                    currencySwitcherList.fadeOut(200);
                }

                e.stopPropagation();
            });

            $('html').on('click',function () {
                $('.rh_wrapper_currency_switcher').removeClass('parent_open');
                $('html #currency-switcher').removeClass('open');
                currencySwitcherList.fadeOut(200);
            });

        }

        /*-----------------------------------------------------------------*/
        /* Language Switcher
        /*-----------------------------------------------------------------*/

        $('body').on('click','.inspiry-language',function (e) {

            if($('.inspiry-language-switcher').find('.rh_languages_available').children('.inspiry-language').length > 0){

            $('.rh_wrapper_language_switcher').toggleClass('parent_open');
            $(this).toggleClass('open');
            if($(this).hasClass('open')){
                $('.rh_languages_available').fadeIn(200);
            }else{
                $('.rh_languages_available').fadeOut(200);
            }
            }

            e.stopPropagation();
        });

        $('html').on('click',function () {
            $('.rh_wrapper_language_switcher').removeClass('parent_open');
            $('html .inspiry-language').removeClass('open');
            $('.rh_languages_available').fadeOut(200);
        });



    });
})(jQuery);