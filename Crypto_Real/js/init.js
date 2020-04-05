var bb = {
    post: function(url, params, jsonp) {
        $.ajax({
            type: "POST",
            url: bb.restUrl(url),
            data: params,
            dataType: 'json',
            error: function(jqXHR, textStatus, e) {
                bb.msg(e, 'error');
            },
            success: function(data) {
                if(data.error) {
                    bb.msg(data.error.message, 'error');
                } else {
                    if(typeof jsonp === 'function') {
                        return jsonp(data.result);
                    } else if(window.hasOwnProperty('console')) {
                        console.log(data.result);
                    }
                }
            }
        });
    },
    get: function(url, params, jsonp) {
        $.ajax({
            type: "GET",
            url: bb.restUrl(url),
            data: params,
            dataType: 'json',
            error: function(jqXHR, textStatus, e) {
                bb.msg(e, 'error');
            },
            success: function(data) {
                if(data.error) {
                    bb.msg(data.error.message, 'error');
                } else {
                    if(typeof jsonp === 'function') {
                        return jsonp(data.result);
                    } else if(window.hasOwnProperty('console')) {
                        console.log(data.result);
                    }
                }
            }
        });
    },
    restUrl: function(url) {
        return $('meta[property="bb:client_area"]').attr("content") + 'api/' + url;
    },
    url: function(url) {
        return $('meta[property="bb:client_area"]').attr("content") + url;
    },
    msg: function(txt, type) {
        if($('#messages') && type == 'info') {
            $('#messages .info').remove();
            var msg = $('<p class="message-box info">').html(txt);
            $('#messages').append(msg);
        } else if($('#messages') && type == 'ok') {
            $('#messages .success').remove();
            var msg = $('<p class="message-box ok">').html(txt);
            $('#messages').append(msg);
        } else if(type == 'error' && $('.bb-popup:visible').length) {
            var msg = $('<p class="message-box error">').html(txt);
            $('.bb-popup:visible .message-box').remove();
            $('.bb-popup:visible form').prepend(msg);
        } else if(type == 'error') {
            $('#messages').html('');
            var msg = $('<p class="message-box error">').html(txt);
            $('#messages').append(msg);
        } else {
            alert(txt);
        }
    },
    reload: function() {
        window.location.href=window.location.href
    },
    redirect: function(url) {
        if(url === undefined) {
            window.location = $('meta[property="bb:url"]').attr("content");
        } else {
            window.location = url;
        }
    },
    currency: function(price, rate, title, multiply) {
        price = parseFloat(price) * parseFloat(rate);
        if(multiply !== undefined) {
            price = price * multiply;
        }
        return price.toFixed(2) + " " + title;
    },
    apiForm: function() {
        $("form.api_form, form.api-form").bind('submit', function(){
            var redirect = $(this).attr('data-api-redirect');
            var jsonp = $(this).attr('data-api-jsonp');
            var msg = $(this).attr('data-api-msg');
            var reload = $(this).attr('data-api-reload');
            var url = $(this).attr('action');
            if($(this).attr('data-api-url')) {
                url = $(this).attr('data-api-url');
            }
            bb.post(
                url,
                $(this).serialize(),
                function(result) {
                    if(reload !== undefined) {
                        bb.reload();
                        return;
                    }
                    if(redirect !== undefined) {
                        bb.redirect(redirect);
                        return;
                    }
                    if(msg !== undefined) {
                        bb.msg(msg);
                        return;
                    }
                    if(jsonp !== undefined && window.hasOwnProperty(jsonp)) {
                        return window[jsonp](result);
                    }
                }
            );
            return false;
        });
    },
    apiLink: function() {
        $("a.api, a.api-link").bind('click', function(){
            var redirect = $(this).attr('data-api-redirect');
            var reload = $(this).attr('data-api-reload');
            var msg = $(this).attr('data-api-msg');
            var jsonp = $(this).attr('data-api-jsonp');
            bb.get(
                $(this).attr('href'),
                {},
                function(result) {
                    if(msg !== undefined) {
                        bb.msg(msg);
                        return;
                    }
                    if(reload !== undefined) {
                        bb.reload();
                        return;
                    }
                    if(jsonp !== undefined && window.hasOwnProperty(jsonp)) {
                        return window[jsonp](result);
                    }
                    bb.redirect(redirect);
                }
            );
            return false;
        });
    },
    apiMsgForm: function() {
        $('form.api_msg, form.api-msg').bind('submit', function(){
            var redirect = $(this).attr('data-api-redirect');
            var jsonp = $(this).attr('data-api-jsonp');
            var msg = $(this).attr('data-api-msg');
            var reload = $(this).attr('data-api-reload');
            var display = $(this).attr('data-api-display');
            bb.post(
                $(this).attr('action'),
                $(this).serialize(),
                function(result) {
                    $('#messages').html('');
                    msg = result.message||msg||'Success';
                    if (display.indexOf('now') != -1) bb.msg(msg, 'ok');
                    if (display.indexOf('later') != -1) bb.cookieCreate('message', JSON.stringify({'msg':msg, 'type':'ok'}), 1);
                    if (reload != null) bb.reload();
                    if (redirect != null) bb.redirect(redirect);

                }
            );
            return false;
        });
    },
    MenuAutoActive: function() {
        var matches = $('ul.main li a').filter(function() {
            return document.location.href == this.href;
        });
        matches.parents('li').addClass('active');
    },
    cookieCreate: function (name,value,days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
            var expires = "; expires="+date.toGMTString();
        }
        else var expires = "";
        document.cookie = name+"="+value+expires+"; path=/";
    },
    cookieRead: function (name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    },
    CurrencySelector: function() {
        $("select.currency_selector").bind('change', function(){
            bb.post(
                'guest/cart/set_currency',
                {currency: $(this).val()},
                function(result) {
                    bb.reload();
                }
            );
            return false;
        });
    },
    LanguageSelector: function() {

        $("select.language_selector").bind('change', function(){
            bb.cookieCreate('BBLANG', $(this).val(), 7);
            bb.reload();
            return false;
        }).val(bb.cookieRead('BBLANG'));
    },
    openPopup: function(id) {
        var popup = $(id);
        var ha = location.href.split('/');
        ha.pop();
        if (ha.pop() == 'manage') history.pushState({}, 'title', id);
        $('.bb-popup:visible').fadeOut(100);
        popup.show().center();
        $('body').append('<div id="mask"></div>');
        $('#mask').fadeIn(300);
        return false;
    },
    checkPhone: function(e) {
        var a = [];
        var k = e.which;

        for (i = 48; i < 58; i++)
            a.push(i);

        if (!(a.indexOf(k)>=0))
            e.preventDefault();
    },
    doLogin: function(form) {
        var btn = $(form).find('button[type="submit"]');
        bb.post(
            'guest/client/login',
            $(form).serialize(),
            function() {
                btn.text('Redirecting ...');
                if($(form).find('input[name="forward"]').length > 0) {
                    bb.redirect($(form).find('input[name="forward"]').val());
                } else {
                    bb.redirect(bb.url('client'));
                }
            }
        );
        return false;
    },
    doResetPassword: function(form) {
        bb.post(
            'guest/client/reset_password',
            $(form).serialize(),
            function(result) {
                alert('Password reset confirmation email was sent. Check your mail box.');
            }
        );
        return false;
    },
    doLogout: function() {
        bb.post(
            'client/profile/logout',
            {},
            function(result) {
                bb.redirect();
            }
        );
        return false;
    },
    doRegister: function(form) {
        bb.post(
            'guest/servicevpsme/create_client',
            $(form).serialize(),
            function() {
                if($(form).find('input[name="forward"]').length > 0) {
                    bb.redirect($(form).find('input[name="forward"]').val());
                } else {
                    bb.redirect(bb.url('client'));
                }
            }
        );
        return false;
    },
    doChangePassword: function(form) {
        bb.post(
            'client/profile/change_password',
            $(form).serialize(),
            function() { bb.msg('Password changed'); }
        );
        return false;
    },
    doUpdateProfile: function(form) {
        bb.post(
            'client/profile/update',
            $(form).serialize(),
            function() { bb.msg('Profile updated', 'info'); }
        );
        return false;
    },
    doSupportTicket: function(form) {
        bb.post(
            'client/support/ticket_create',
            $(form).serialize(),
            function(result) {
                bb.redirect(bb.url('support/ticket') + '/' + result);
            }
        );
        return false;
    },
    doVpsCommand: function(form, cmd, msg) {
        $(form).siblings('.process-loader').show();
        $(form).hide();
        bb.post(
            'client/servicevpsme/'+cmd,
            $(form).serialize(),
            function(result) {
                $(form).siblings('.process-loader').hide();
                $(form).siblings('.process-close').show();
                $(form).siblings('.process-msg').html(msg).show();
            }
        );
        return false;
    },
    doVpsCommand2: function(form, cmd, msg) {
        $(form).siblings('.process-loader').show();
        $(form).hide();
        $.ajax({
            type: "POST",
            url: bb.restUrl('client/servicevpsme/'+cmd),
            data: $(form).serialize(),
            dataType: 'json',
            error: function(jqXHR, textStatus, e) {
                bb.msg(e, 'error');
            },
            success: function(data) {
                    $(form).siblings('.process-loader').hide();
                    $(form).siblings('.process-close').show();
                    if(data.error) {
                        $(form).siblings('.process-msg').html(data.error.message).show();
                    } else {
                    $(form).siblings('.process-msg').html(msg).show();
                }
            }
        });
        return false;
    },
    doVpsReboot: function(form) {
        return this.doVpsCommand2(form, 'reboot', 'Your VPS server was restarted!');
    },
    doVpsStart: function(form) {
        return this.doVpsCommand2(form, 'boot', 'Your VPS server was started!');
    },
    doVpsStop: function(form) {
        return this.doVpsCommand2(form, 'shutdown', 'Your VPS server was stopped!');
    },
    doVpsRootPasswordChange: function(form) {
        return this.doVpsCommand2(form, 'set_root_password', 'Your VPS server root password was changed!');
    },
    doVpsHostnameChange: function(form) {
        return this.doVpsCommand2(form, 'set_hostname', 'Your VPS server hostname was changed!');
    },
    doVpsReverseIpsChange: function(form) {
        return this.doVpsCommand2(form, 'set_reverse_ips', 'Your VPS server reverse IPs were changed!');
    },
    doVpsOsChange: function(form) {
        return this.doVpsCommand2(form, 'rebuild', 'Your VPS server operating system was changed!');
    },
    doVpsCreateSnapshot: function(form) {
        return this.doVpsCommand2(form, 'createSnapshot', 'Snapshot was created');
    },
    doVpsRestoreSnapshot: function(form) {
        return this.doVpsCommand2(form, 'restoreSnapshot', 'Your snapshot was restored');
    },
    doVpsEnableDiskQuota: function(form) {
        return this.doVpsCommand2(form, 'enableDiskQuota', 'Disk quota was enabled');
    },
    doVpsDisableDiskQuota: function(form) {
        return this.doVpsCommand2(form, 'disableDiskQuota', 'Disk quota was disabled');
    },
    doVpsEnableIpNat: function(form) {
        return this.doVpsCommand2(form, 'enableIpNat', 'IP NAT was enabled');
    },
    doVpsDisableIpNat: function(form) {
        return this.doVpsCommand2(form, 'disableIpNat', 'IP NAT was disabled');
    },
    doEnableTunTapAdapter: function(form) {
        return this.doVpsCommand2(form, 'enableTunTapAdapter', 'TUN/TAP adapter was enabled');
    },
    doDisableTunTapAdapter: function(form) {
        return this.doVpsCommand2(form, 'disableTunTapAdapter', 'TUN/TAP adapter was disabled');
    },
    doResetFirewall: function(form) {
        return this.doVpsCommand2(form, 'resetFirewall', 'Firewall was reset');
    },
    doEnableRecoveryMode: function(form) {
        return this.doVpsCommand2(form, 'enableRecoveryMode', 'Recovery mode was enabled');
    },
    addPortMap: function(form) {
        var cButton = $(form).siblings('.process-close').find('input.close');
        if (!cButton.hasClass('reload')) {
            cButton.on('click', function(){setTimeout(function(){location.reload();}, 100);});
            cButton.addClass('reload');
        }
        return this.doVpsCommand2(form, 'add_portmap', 'Port was successfully added!');
    },
    removePortMap: function(form, order_id, name) {
        $(form).siblings('.process-loader').show();
        var cButton = $(form).siblings('.process-close').find('input.close');
        if (!cButton.hasClass('reload')) {
            cButton.on('click', function(){setTimeout(function(){location.reload();}, 100);});
            cButton.addClass('reload');
        }
        $(form).hide();
        $.ajax({
            type: "POST",
            url: bb.restUrl('client/servicevpsme/delete_portmap'),
            data: 'order_id='+order_id+'&name='+name,
            dataType: 'json',
            error: function(jqXHR, textStatus, e) {
                bb.msg(e, 'error');
            },
            success: function(data) {
                $(form).siblings('.process-loader').hide();
                $(form).siblings('.process-close').show();
                if(data.error) {
                    $(form).siblings('.process-msg').html(data.error.message).show();
                } else {
                    $(form).siblings('.process-msg').html('Port was successfully deleted!').show();
                }
            }
        });
        return false;
    },
    doVpsRequestCancelation: function(form) {
        bb.post(
            'client/servicevpsme/request_cancelation',
            $(form).serialize(),
            function(result) {
                bb.redirect('/support/ticket/' + result);
            }
        );
        return false;
    },
    doVpsAutoCancelation: function(form) {
        var f = $(form).find('input[name=agree]');
        if(f.attr('checked') != 'checked') return false;

        bb.post(
            'client/servicevpsme/cancel',
            $(form).serialize(),
            function(result) {
                bb.reload();
            }
        );
        return false;
    },
    doVpsRequestUpgrade: function(form) {
        bb.post(
            'client/servicevpsme/request_upgrade',
            $(form).serialize(),
            function(result) {
                bb.redirect('/support/ticket/' + result);
            }
        );
        return false;
    },
    doForumTopicReply: function(form) {
        bb.post(
            'client/forum/post_message',
            $(form).serialize(),
            function(result) {
                bb.redirect(bb.url($(form).find('input[name="redirect"]').val()));
            }
        );
        return false;
    },
    doForumTopicReplyAsAdmin: function(form) {
        bb.post(
            'admin/forum/message_create',
            $(form).serialize(),
            function(result) {
                bb.reload();
            }
        );
        return false;
    },
    doPayInvoice: function(form) {
        bb.post(
            'guest/invoice/payment',
            $(form).serialize(),
            function(result) {
                $('#pgr').html(result.result);
                $('#pay-now-button').text('Redirecting');
            }
        );
        return false;
    },
    autoPopup: function() {
        var data = location.href.split('#');
        if (!data[1]) return;
        if ($('#'+data[1])[0] != undefined) {
            this.openPopup('#'+data[1]);
        } else {
            $('#ooo').remove();
            $('body').append('<div id="ooo"></div>');
            var uri = 'servicevpsme/';
            $('#ooo').load($('a[href*="/'+data[1]+'?id="]').attr('href'), null, function(){
                $('.bb-popup:visible').fadeOut(100);
                $('#ooo .bb-popup').center().show();
                $('body').append('<div id="mask"></div>');
                $('#mask').fadeIn(300);
            });

        }
        if ($.scrollTo) $.scrollTo('0px', 0);

    },
    cookieMsg: function()
    {
        var msg = bb.cookieRead('message');
        if (msg) {
            var mobj = $.parseJSON(msg);
            bb.msg(mobj.msg, mobj.type);
            bb.cookieCreate('message', '', -1);
        }
    }
}

jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
        $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
        $(window).scrollLeft()) + "px");
    return this;
}

$(document).ready(function() {

    // global ajax
    $('.loading').ajaxStart(function() {
        $(this).show();
    }).ajaxStop(function() {
        $(this).hide();
    });

    //global links
	if($("a.api, a.api-link").length){bb.apiLink();}
	if($("form.api_form, form.api-form").length){bb.apiForm();}
	if($("form.api_msg, form.api-msg").length){bb.apiMsgForm();}


    //popups
	$('a.bb-popup-load').click(function() {
        $('#ooo').remove();
        $('body').append('<div id="ooo"></div>');
        var url = $(this).attr('href');
        $('#ooo').load(url, null, function(){
            $('.bb-popup:visible').fadeOut(100);
            $('#ooo .bb-popup').center().show();
            $('body').append('<div id="mask"></div>');
            $('#mask').fadeIn(300);
            history.pushState({}, '', '#'+url.split('/').pop().split('?')[0]);
        });

        return false;
    });

	$('a.bb-popup-open').click(function() {
        return bb.openPopup($(this).attr('href'));
	});
	
	// When clicking on the button close or the mask layer the popup closed
	$('body').delegate('#mask, .bb-popup .close', 'click', function() {
        if ($('.contactf #recaptcha_widget').length == 0){
            $('#firstCaptcha').html($('#recaptcha_widget').clone(true,true));
            $('#secondCaptcha').empty();

        }
        $('#mask , .bb-popup').fadeOut(300 , function() {
            $('#mask').remove();
            history.pushState({}, '', location.href.split('#')[0]);
        });
        return false;
	});

    if (window.location.pathname == '/get-support'){
        $('#bb-popup-register #recaptcha_widget').before('<div id="secondCaptcha"></div>');
        $('#bb-popup-register #recaptcha_widget').remove();
    }

    $('.register-button').on('click', function (){
        $('#secondCaptcha').html($('#recaptcha_widget').clone(true,true));
        if ($('#firstCaptcha').length == 0)
            $('.contactf #recaptcha_widget').before('<div id="firstCaptcha"></div>')
        $('.contactf #recaptcha_widget').remove();
    });

    bb.autoPopup();
    bb.cookieMsg();

    $('input[name=phone]').keypress(bb.checkPhone);

});