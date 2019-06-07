jQuery(document).ready(function($) {

    "use strict";

    if ( typeof propertySubmit !== "undefined" ) {

        var removeQueryStringParameters = function ( url ) {
            if ( url.indexOf ('?') >= 0 ) {
                var urlParts = url.split('?');
                return urlParts[0];
            }
            return url;
        };

        var ajaxURL = removeQueryStringParameters( propertySubmit.ajaxURL );
        var uploadNonce = propertySubmit.uploadNonce;
        var fileTypeTitle = propertySubmit.fileTypeTitle;

        /* Apply jquery ui sortable on gallery items */
        $( "#gallery-thumbs-container" ).sortable({
            revert: 100,
            placeholder: "sortable-placeholder",
            cursor: "move"
        });

        /* initialize uploader */
        var uploaderArguments = {
            browse_button: 'select-images',          // this can be an id of a DOM element or the DOM element itself
            file_data_name: 'inspiry_upload_file',
            drop_element: 'drag-and-drop',
            url: ajaxURL + "?action=ajax_img_upload&nonce=" + uploadNonce,
            filters: {
                mime_types : [
                    { title : fileTypeTitle, extensions : "jpg,jpeg,gif,png" }
                ],
                max_file_size: '10000kb',
                prevent_duplicates: true
            },
        };

        // require gallery images field to upload at least one image
        $( '.submit-field-wrapper input[type=submit]' ).on( 'click', function(){
            if ( ! $( '#gallery-thumbs-container' ).has( "div" ).length ) {
                $( '#drag-and-drop' ).css( 'border-color', 'red' );
            }
        });

        var uploader = new plupload.Uploader( uploaderArguments );
        uploader.init();

        uploader.bind('FilesAdded', function(up, files) {
            var currentImages = $('.gallery-thumb').length;

            var getMaxfiles = $('.rh_drag_and_drop_wrapper').data('max-images');

            var totalFiles = currentImages + up.files.length;

            if( totalFiles > getMaxfiles ){

                up.splice(up.settings.totalFiles);

                $('.rh_max_files_limit_message').addClass('show');


                return false;

            }else{
                $('.rh_max_files_limit_message').removeClass('show');
            }

        });

        $('#select-images').click(function(event){
            event.preventDefault();
            event.stopPropagation();
            uploader.start();

            $( '#drag-and-drop' ).css( 'border-color', '#dfdfdf' );
        });

        /* Run after adding file */
        uploader.bind('FilesAdded', function(up, files) {
            var html = '';
            var galleryThumb = "";
            plupload.each(files, function(file) {
                galleryThumb += '<div id="holder-' + file.id + '" class="gallery-thumb">' + '' + '</div>';
            });
            document.getElementById('gallery-thumbs-container').innerHTML += galleryThumb;
            up.refresh();
            uploader.start();
        });

        /* Run during upload */
        uploader.bind('UploadProgress', function(up, file) {
            document.getElementById( "holder-" + file.id ).innerHTML = '<span>' + file.percent + "%</span>";
        });

        /* In case of error */
        uploader.bind('Error', function( up, err ) {
            document.getElementById('errors-log').innerHTML += "<br/>" + "Error #" + err.code + ": " + err.message;
        });

        /* If files are uploaded successfully */
        uploader.bind('FileUploaded', function ( up, file, ajax_response ) {
            var response = $.parseJSON( ajax_response.response );

            if ( response.success ) {

                document.getElementById('errors-log').innerHTML = "";
                var galleryThumbHtml = '<img src="' + response.url + '" alt="" />' +
                '<a class="remove-image" data-property-id="' + 0 + '"  data-attachment-id="' + response.attachment_id + '" href="#remove-image" ><i class="fa fa-trash-o"></i></a>' +
                '<a class="mark-featured" data-property-id="' + 0 + '"  data-attachment-id="' + response.attachment_id + '" href="#mark-featured" ><i class="fa fa-star-o"></i></a>' +
                '<input type="hidden" class="gallery-image-id" name="gallery_image_ids[]" value="' + response.attachment_id + '"/>' +
                '<span class="loader"><i class="fa fa-spinner fa-spin"></i></span>';

                document.getElementById( "holder-" + file.id ).innerHTML = galleryThumbHtml;

                bindThumbnailEvents();  // bind click event with newly added gallery thumb
            } else {
                // log response object
                console.log ( response );
                document.getElementById( "holder-" + file.id ).remove();
                document.getElementById('errors-log').innerHTML = response.reason;
            }
        });

        uploader.bind('FilesAdded', function(up, files) {
            var numItems = $('.gallery-thumb').length;
            var maxfiles = $('.rh_drag_and_drop_wrapper').data('max-images');

            $('.limit_left .uploaded').text(numItems);
            if(numItems >= maxfiles){
                $('.rh_drag_and_drop_wrapper').addClass('hide');
                $('.rh_max_file_limit_message').removeClass('hide');
            }
        });

        /* Bind thumbnails events with newly added gallery thumbs */
        var bindThumbnailEvents = function () {

            // unbind previous events
            $('a.remove-image').unbind('click');
            $('a.mark-featured').unbind('click');

            // Mark as featured
            $('a.mark-featured').click(function(event){

                event.preventDefault();

                var $this = $( this );
                var starIcon = $this.find( 'i');

                if ( starIcon.hasClass( 'fa-star-o' ) ) {   // if not already featured

                    $('.gallery-thumb .featured-img-id').remove();      // remove featured image id field from all the gallery thumbs
                    $('.gallery-thumb .mark-featured i').removeClass( 'fa-star').addClass( 'fa-star-o' );   // replace any full star with empty star

                    var $this = $( this );
                    var input = $this.siblings( '.gallery-image-id' );      //  get the gallery image id field in current gallery thumb
                    var featured_input = input.clone().removeClass( 'gallery-image-id' ).addClass( 'featured-img-id' ).attr( 'name', 'featured_image_id' );     // duplicate, remove class, add class and rename to full fill featured image id needs

                    $this.closest( '.gallery-thumb' ).append( featured_input );     // append the cloned ( featured image id ) input to current gallery thumb
                    starIcon.removeClass( 'fa-star-o' ).addClass( 'fa-star' );      // replace empty star with full star

                }

            }); // end of mark as featured click event


            // Remove gallery images
            $('a.remove-image').click(function(event){

                event.preventDefault();
                var $this = $(this);
                var gallery_thumb = $this.closest('.gallery-thumb');
                var loader = $this.siblings('.loader');

                loader.show();

                var removal_request = $.ajax({
                    url: ajaxURL,
                    type: "POST",
                    data: {
                        property_id : $this.data('property-id'),
                        attachment_id : $this.data('attachment-id'),
                        action : "remove_gallery_image",
                        nonce : uploadNonce
                    },
                    dataType: "html"
                });

				removal_request.done( function( response ) {
					var result = $.parseJSON( response );
					if( result.attachment_removed ) {
						uploader.removeFile( gallery_thumb );
						gallery_thumb.remove();

                        $('.rh_drag_and_drop_wrapper').removeClass('hide');
                        $('.rh_max_file_limit_message').addClass('hide');
                        var numItems = $('.gallery-thumb').length;
                        $('.limit_left .uploaded').text(numItems);
					} else {
						document.getElementById( 'errors-log' ).innerHTML += "<br/>" + "Error : Failed to remove attachment";
					}
				} );

                removal_request.fail(function( jqXHR, textStatus ) {
                    alert( "Request failed: " + textStatus );
                });

                uploader.splice();

            });  // end of remove gallery thumb click event

        };  // end of bind thumbnail events

        bindThumbnailEvents(); // run it first time - required for property edit page


        /**************************************************************
         Floor Plans Related Script
         **************************************************************/
        var floorPlanImageUploader = function ($button) {

            var $button = $button || 'inspiry-file-select';
            var $this = $("#" + $button);
            var $parent = $this.parents(".inspiry-group-clone");
            var $errorsLog = $parent.find(".errors-log");
            var floorPlanUploader = new plupload.Uploader({
                browse_button:  $button, // this can be an id of a DOM element or the DOM element itself
                file_data_name: 'inspiry_upload_file',
                multi_selection: false,
                url: ajaxURL + "?action=ajax_img_upload&size=full&nonce=" + uploadNonce,
                filters: {
                    mime_types: [
                        {title: fileTypeTitle, extensions: "jpg,jpeg,gif,png"}
                    ],
                    max_file_size: '10000kb',
                    prevent_duplicates: true
                }
            });

            floorPlanUploader.init();

            floorPlanUploader.bind('FilesAdded', function(up, files) {
                up.refresh();
                floorPlanUploader.start();
            });

            floorPlanUploader.bind('UploadProgress', function(up, file) {
                $parent.find(".inspiry-btn-group").addClass('uploading-in-progress');
            });

            floorPlanUploader.bind('Error', function( up, err ) {
                $errorsLog.html("Error #" + err.code + ": " + err.message);
            });

            floorPlanUploader.bind('FileUploaded', function ( up, file, ajax_response ) {
                var response = $.parseJSON( ajax_response.response );
                if ( response.success ) {
                    $errorsLog.html("");
                    $parent.find(".inspiry-file-input").attr('value', response.url );
                    $parent.find(".inspiry-btn-group").addClass('show-remove-btn').removeClass('uploading-in-progress');
                    $parent.find(".inspiry-file-remove").removeClass('hidden');
                } else {
                    console.log ( response );
                    $parent.find(".inspiry-btn-group").removeClass('uploading-in-progress');
                    $errorsLog.html(response.reason);
                }
            });
        };

        var bindFloorPlanEvents = function () {
            var $inspiryCloneGroups = $(".inspiry-group-clone");

            $.each($inspiryCloneGroups, function( index, value ) {
                var browseButton = $(value).find('.inspiry-file-select').attr("id");
                floorPlanImageUploader(browseButton);
            });
        };

        bindFloorPlanEvents();

        $(document).on("click", ".inspiry-file-remove", function ( event ) {
            event.preventDefault();
            var $this = $( this );
            var $parent = $this.parents(".inspiry-group-clone");
            $parent.find(".inspiry-file-input").attr('value', '');
            $parent.find(".inspiry-file-remove").addClass('hidden');
            $parent.find(".inspiry-btn-group").removeClass('show-remove-btn');
        });

        var floorPlanGroupLabels = $("#floor-plan-group-labels");
        $(document).on("click", "#inspiry-add-clone", function (event) {
            event.preventDefault();

            var inspiryCloneGroup = $(".inspiry-group-clone");
            var inspiryLastCloneGroup = inspiryCloneGroup.last().data('floor-plan');
            var inspiryNewFloorPlanIndex = inspiryLastCloneGroup + 1;
            var inspiryAddClone = '<div class="inspiry-clone inspiry-group-clone" data-floor-plan="' + inspiryNewFloorPlanIndex + '">' +
                    '<div class="inspiry-row">' +
                        '<div class="inspiry-column-md-6">' +
                            '<div class="inspiry-field">' +
                            '<label for="inspiry_floor_plan_name_' + inspiryNewFloorPlanIndex + '">' + floorPlanGroupLabels.data("name") + '</label>' +
                            '<input type="text" id="inspiry_floor_plan_name_' + inspiryNewFloorPlanIndex + '" name="inspiry_floor_plans[' + inspiryNewFloorPlanIndex + '][inspiry_floor_plan_name]">' +
                            '</div>' +
                            '<div class="inspiry-field">' +
                            '<label for="inspiry_floor_plan_descr_' + inspiryNewFloorPlanIndex + '">' + floorPlanGroupLabels.data("description") + '</label>' +
                            '<textarea id="inspiry_floor_plan_descr_' + inspiryNewFloorPlanIndex + '" class="inspiry-textarea" name="inspiry_floor_plans[' + inspiryNewFloorPlanIndex + '][inspiry_floor_plan_descr]"></textarea>' +
                            '</div>' +
                        '</div>' +
                        '<div class="inspiry-column-md-6">' +
                            '<div class="inspiry-row">' +
                                '<div class="inspiry-column-6">' +
                                '<div class="inspiry-field">' +
                                '<label for="inspiry_floor_plan_price_' + inspiryNewFloorPlanIndex + '">' + floorPlanGroupLabels.data("price") + '</label>' +
                                '<input type="text" id="inspiry_floor_plan_price_' + inspiryNewFloorPlanIndex + '" name="inspiry_floor_plans[' + inspiryNewFloorPlanIndex + '][inspiry_floor_plan_price]">' +
                                '</div>' +
                                '</div>' +
                                '<div class="inspiry-column-6">' +
                                '<div class="inspiry-field">' +
                                '<label for="inspiry_floor_plan_price_postfix_' + inspiryNewFloorPlanIndex + '">' + floorPlanGroupLabels.data("price-postfix") + '</label>' +
                                '<input type="text" id="inspiry_floor_plan_price_postfix_' + inspiryNewFloorPlanIndex + '" name="inspiry_floor_plans[' + inspiryNewFloorPlanIndex + '][inspiry_floor_plan_price_postfix]">' +
                                '</div>' +
                                '</div>' +
                                '<div class="inspiry-column-6">' +
                                '<div class="inspiry-field">' +
                                '<label for="inspiry_floor_plan_size_' + inspiryNewFloorPlanIndex + '">' + floorPlanGroupLabels.data("size") + '</label>' +
                                '<input type="text" id="inspiry_floor_plan_size_' + inspiryNewFloorPlanIndex + '" name="inspiry_floor_plans[' + inspiryNewFloorPlanIndex + '][inspiry_floor_plan_size]">' +
                                '</div>' +
                                '</div>' +
                                '<div class="inspiry-column-6">' +
                                '<div class="inspiry-field">' +
                                '<label for="inspiry_floor_plan_size_postfix_' + inspiryNewFloorPlanIndex + '">' + floorPlanGroupLabels.data("size-postfix") + '</label>' +
                                '<input type="text" id="inspiry_floor_plan_size_postfix_' + inspiryNewFloorPlanIndex + '" name="inspiry_floor_plans[' + inspiryNewFloorPlanIndex + '][inspiry_floor_plan_size_postfix]">' +
                                '</div>' +
                                '</div>' +
                                '<div class="inspiry-column-6">' +
                                '<div class="inspiry-field">' +
                                '<label for="inspiry_floor_plan_bedrooms_' + inspiryNewFloorPlanIndex + '">' + floorPlanGroupLabels.data("bedrooms") + '</label>' +
                                '<input type="text" id="inspiry_floor_plan_bedrooms_' + inspiryNewFloorPlanIndex + '" name="inspiry_floor_plans[' + inspiryNewFloorPlanIndex + '][inspiry_floor_plan_bedrooms]">' +
                                '</div>' +
                                '</div>' +
                                '<div class="inspiry-column-6">' +
                                '<div class="inspiry-field">' +
                                '<label for="inspiry_floor_plan_bathrooms_' + inspiryNewFloorPlanIndex + '">' + floorPlanGroupLabels.data("bathrooms") + '</label>' +
                                '<input type="text" id="inspiry_floor_plan_bathrooms_' + inspiryNewFloorPlanIndex + '" name="inspiry_floor_plans[' + inspiryNewFloorPlanIndex + '][inspiry_floor_plan_bathrooms]">' +
                                '</div>' +
                                '</div>' +
                                '<div class="inspiry-column-12">' +
                                '<div class="inspiry-field inspiry-file-input-wrapper">' +
                                '<label>' + floorPlanGroupLabels.data("image") + '</label>' +
                                '<div class="inspiry-btn-group clearfix">' +
                                '<input type="text" class="inspiry-file-input" name="inspiry_floor_plans[' + inspiryNewFloorPlanIndex + '][inspiry_floor_plan_image]">' +
                                '<a href="#" id="inspiry-file-select-' + inspiryNewFloorPlanIndex + '" class="inspiry-file-select real-btn">' + floorPlanGroupLabels.data("select-button") + '</a>' +
                                '<a href="#" id="inspiry-file-remove-' + inspiryNewFloorPlanIndex + '" class="inspiry-file-remove real-btn hidden">' + floorPlanGroupLabels.data("remove-button") + '</a>' +
                                '</div>' +
                                '<p class="description">' + floorPlanGroupLabels.data("image-description") + '</p>' +
                                '<div class="errors-log"></div>' +
                                '</div>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<a href="#" class="inspiry-remove-clone"><i class="dashicons dashicons-minus"></i></a>' +
                '</div>';

            $('#inspiry-floor-plans-container').append(inspiryAddClone);

            bindFloorPlanEvents();
        });

        $(document).on("click", ".inspiry-remove-clone", function ( event ) {
            event.preventDefault();
            var $this = $( this );
            $this.closest( '.inspiry-group-clone' ).remove();
        });
    } // validate localized data


    /**************************************************************
     Validate Submit Property Form
     **************************************************************/
    if( jQuery().validate ){
        $('#submit-property-form').validate({
            rules: {
                bedrooms: {
                    number: true
                },
                bathrooms: {
                    number: true
                },
                garages: {
                    number: true
                },
                price: {
                    number: true
                },
                size: {
                    number: true
                }
            }
        });
    }


    /**************************************************************
     Apply jquery ui sortable on additional details
     **************************************************************/
    $( "#inspiry-additional-details-container" ).sortable({
        revert: 100,
        placeholder: "detail-placeholder",
        handle: ".sort-detail",
        cursor: "move"
    });

    $( '.add-detail' ).click(function( event ){
        event.preventDefault();
        var newInspiryDetail = '<div class="inspiry-detail inputs clearfix">' +
            '<div class="inspiry-detail-control"><span class="sort-detail fa fa-bars"></span></div>' +
            '<div class="inspiry-detail-title"><input type="text" name="detail-titles[]" /></div>' +
            '<div class="inspiry-detail-value"><input type="text" name="detail-values[]" /></div>' +
            '<div class="inspiry-detail-control"><a class="remove-detail" href="#"><span class="fa fa-times"></span></a></div>' +
            '</div>';

        $( '#inspiry-additional-details-container').append( newInspiryDetail );
        bindAdditionalDetailsEvents();
    });

    function bindAdditionalDetailsEvents(){
        /* Bind click event to remove detail icon button */
        $( '.remove-detail').click(function( event ){
            event.preventDefault();
            var $this = $( this );
            $this.closest( '.inspiry-detail' ).remove();
        });
    }

    bindAdditionalDetailsEvents();


    /**************************************************************
     Check if IE9 - As image upload not works in ie9
     **************************************************************/
    var ie = (function(){

        var undef,
            v = 3,
            div = document.createElement('div'),
            all = div.getElementsByTagName('i');

        while (
            div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
                all[0]
            );

        return v > 4 ? v : undef;

    }());
    if ( ie <= 9 ) {
        $('#submit-property-form').before( '<div class="ie9-message"><i class="fa fa-info-circle"></i>&nbsp; <strong>Current browser is not fully supported:</strong> Please update your browser or use a different one to enjoy all features on this page. </div>' );
    }
});
