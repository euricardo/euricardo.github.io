<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-126969522-2"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'UA-126969522-2');
        </script>
        <meta charset="utf-8">
        <title>PullOuts</title>
        <meta name="description" content="Turn any content block into a slick pullout widget.">
        <meta name="author" content="Max Chirkov">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="google-code-prettify/prettify.css" type="text/css" rel="stylesheet" />
        <script type="text/javascript" src="google-code-prettify/prettify.js"></script>
        <link href="bootstrap/css/bootstrap.css" rel="stylesheet">
        <link href="bootstrap/css/bootstrap-responsive.css" rel="stylesheet">
        <link rel="stylesheet" href="pullouts/admin/js/farbtastic/farbtastic.css" type="text/css" />
        <link rel="stylesheet" href="pullouts/css/admin_widgets.css">
    <style type="text/css">
    body {
        padding-top: 60px;
        padding-bottom: 40px;
        background-image: url(images/grid-18px-masked.png);
        background-repeat: repeat-x;
        background-position: 0 40px;
    }
    .subhead {
        padding-bottom: 0;
        margin-bottom: 9px;
    }
    .jumbotron h1 {
        margin-bottom: 9px;
        font-size: 81px;
        font-weight: bold;
        letter-spacing: -1px;
        line-height: 1;
    }
    .subhead h1 {
        font-size: 54px;
    }
    .jumbotron p {
        margin-bottom: 18px;
        font-weight: 300;
    }
    .jumbotron .btn-large {
        font-size: 20px;
        font-weight: normal;
        padding: 14px 24px;
        margin-right: 10px;
        -webkit-border-radius: 6px;
        -moz-border-radius: 6px;
        border-radius: 6px;
        }
    body { min-height: 1000px; }
    .code-generator-button, #options-result { text-align: center; }
    .color-picker {
        position: absolute;
        z-index: 999;
        margin-left: 14%;
        margin-top: -22px;
    }
    .color-picker div { border: none!important; }
    .pow-accordion .ui-accordion-header { height: 28px; font-size: 14px; }
    .pow-accordion .ui-accordion-content { padding-top: 15px!important; }
    .pullouts { z-index: 1100; }
    .navbar-fixed-top .brand {
        padding-right: 0;
        padding-left: 0;
        margin-left: 20px;
        float: right;
        font-weight: bold;
        color: black;
        text-shadow: 0 1px 0 rgba(255, 255, 255, .1), 0 0 30px rgba(255, 255, 255, .125);
        -webkit-transition: all .2s linear;
        -moz-transition: all .2s linear;
        transition: all .2s linear;
    }
    li.L0, li.L1, li.L2, li.L3, li.L5, li.L6, li.L7, li.L8 {
        list-style-type: decimal;
    }
    #pullout-widget-1 { visibility: hidden; }
    #pullouts #pullout-widget-1 { visibility: visible;  }
    </style>
    </head>
    <body id="overview" onload="prettyPrint()">
        <div class="navbar navbar-fixed-top">
            <div class="navbar-inner">
                <div class="container">
                    <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="brand" href="index.html">PullOuts</a>
                    <div class="nav-collapse collapse">
                        <ul class="nav">
                            <li><a href="index.html">Overview</a></li>
                            <li><a href="codegen.php">Code Generator</a></li>
                            <li><a href="doc.php">Instructions</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="hero-unit">
                <h1>PullOuts <small>Turn any content block into a slick & elegant pullout widget</small></h1>
                <p>PullOuts is a stand-alone script based on a popular WordPress plugin - "<a href="https://codecanyon.net/item/pullout-widgets-for-wordpress/1810209" title="Pullout Widgets Plugins for WordPress">PullOut Widgets</a>", and can be used on any website that supports HTML and JavaScript.</p>
                <div class="jumbotron" style="float: right; margin-top: -20px;">
                    <a class="btn btn-primary btn-large" 
href="http://codecanyon.net/item/pullouts-jquery-slideout-widgets/2680810?ref=SimpleRealty">Buy PullOuts for 
$10</a>
                    <div style="text-align: center; color: #888; font-weight: bold;">Free updates and support</div>
                </div>
            </div>

            <div class="row">
                <div id="instructions" class="span8 offset2">
                    <div class="page-header">
                        <h2>Installation</h2>
                    </div>
                    <p>The PullOuts script comes with detailed documentation describing all options of the plugin.</p>
                    <h3>Step 1</h3>
                    <p>After unzipping the file that you downloaded from CodeCanyon, rename the new folder to <code>pullouts</code> and copy it to the root folder of your website.</p>
                    <div class="alert alert-info"><strong>Heads up!</strong> If you upload it to a different folder, then you'll have to adjust paths of the embedded scripts in step 2 accordingly.</div>
                    <p>Sub-folders <code>pullouts/admin</code> and <code>pullouts/documentation</code> are for your personal use and don't have to be uploaded to your website.</p>
                    <h3>Step 2</h3>
                    <p>Copy and paste the following code at the bottom of your HTML page, just before the closing <code>&lt;/body&gt;</code> tag:
<pre class="prettyprint linenums">
&lt;link rel="stylesheet" href="/pullouts/css/pullouts.css"&gt;
&lt;script type='text/javascript' src='/pullouts/js/my-pullout-widgets.js'&gt;&lt;/script&gt;
&lt;script type='text/javascript' src='//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js'>&lt;/script&gt;
&lt;script type='text/javascript' src='//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js'&gt;&lt;/script&gt;
&lt;script type='text/javascript' src='/pullouts/js/lib/jquery.appear-1.1.1.min.js'&gt;&lt;/script&gt;
&lt;script type='text/javascript' src='/pullouts/js/pullouts.min.js'>&lt;/script&gt;
</pre>
                    <div class="alert alert-info"><strong>Heads up!</strong> If you already have jQuery and/or jQuery UI libraries loaded, you can remove lines #3 and #4 respectively.</div>
                    </p>

                    <h3>Step 3</h3>
                    <p>Go to Code Generator (<code>pullouts/admin/</code>), enter the desiret settings for your new pullout widget and generate the code. Copy the newly generated code into <code>/pullouts/js/my-pullout-widgets.js</code> file and save it. Now you should have a functional pullout widget on your page.</p>

                    <h4>Note:</h4>
                    <p>PullOuts Code Generator generates settings for 1 widget at the time and looks like this:</p>
<pre class="prettyprint linenums">
var powVars = { "widget-id": {..settings here..} };
</pre>
<p>
If you wish to setup multiple widgets, you need to add all settings into the same powVars array separating them with comma, like this:
</p>
<pre class="prettyprint linenums">
var powVars = {
    "widget-id-1": {..settings here..}, // notice the trailing comma
    "widget-id-2": {..settings here..},
};
</pre>

<h3>Turn PullOuts Off for Mobile Devices</h3>
<p><code>pullouts.js</code> contains 2 boolean (true/false) variables that are responsible for hiding/displaying PullOut widgets on mobile devices.</p>
<pre class="prettyprint linenums">
var pow_display_on_mobile = false;
var pow_hide_content_on_mobile = true
</pre>
<p><code>pow_display_on_mobile</code> - when set to TRUE, PullOuts will be displayed on all devices, including mobile.<br/>
<cpde>pow_hide_content_on_mobile</code> - this variable only works, when <code>pow_display_on_mobile</code> is set to FALSE. When PullOuts are disabled, your HTML content within PullOut widgets will be visible on the page, as part of regular content. If you wish to hide it, set <code>pow_hide_content_on_mobile</code> to TRUE. If you wish to display the content - set this variable to FALSE.</p>

<p>By default PullOuts are turned Off on Mobile devices. To turn them on follow these steps:</p>
<ol>
    <li>Edit pullouts.js</li>
    <li>At the top of the code change variable pow_display_on_mobile to TRUE.</li>
    <li>Save the file.</li>
    <li>Optionally, you can use http://closure-compiler.appspot.com/home to minify the JS code, and then save it as pullouts.min.js.</li>
</ol>
                </div>
            </div>
        </div>
            <hr />
        <div class="span8 offset2">
            <footer>
                <p>&copy; Copyright 2019 by <a href="http://simplewidgets.net" title="Simple Widgets">SimpleWidgets.net</a> All rights reserved.</p>
            </footer>
        </div>
<!-- BEGIN: REQUIRED PULLOUTS Scripts -->

    <!-- jQuery Libraries - if you have jQuery 1.6 or later, you don't need to load this -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <!-- if you already have jQuery UI 1.8 or later, you don't have to load jquery-ui.min.js -->
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
    <script type="text/javascript" src="pullouts/js/lib/jquery.appear-1.1.1.min.js"></script>
<!-- END: REQUIRED PULLOUTS Scripts -->

<!-- Below are Pullouts administrative scripts, which should not be in the front end of your site -->
    <script type="text/javascript" src="pullouts/admin/js/farbtastic/farbtastic.js"></script>
    <script type="text/javascript" src="pullouts/js/admin_widgets.js"></script>


<!-- Below is my custom stuff that makes this DEMO page work -->
    <script type="text/javascript" src="pullouts/admin/js/form2js/form2js.js"></script>
    <script type="text/javascript" src="pullouts/admin/js/form2js/js2form.js"></script>
    <script type="text/javascript" src="pullouts/admin/js/form2js/jquery.toObject.js"></script>
    <script type="text/javascript" src="pullouts/admin/js/form2js/json2.js"></script>



        <script type="text/javascript">
        jQuery(document).ready(function(){
            var id = jQuery('#pullout_widget_id').val();
            var default_id = 'pullout-widget-1';
            if(id == ''){
                jQuery('#pullout_widget_id').val(default_id);
            }
            jQuery('#pullout_widget_id').focusin(function(){
                id = jQuery('#pullout_widget_id').val();
                if(id == default_id){
                    jQuery(this).val('');
                }
            });
            jQuery('#pullout_widget_id').focusout(function(){
                id = jQuery('#pullout_widget_id').val();
                if(id == '' || id == ' '){
                    jQuery(this).val(default_id);
                }
            });

            jQuery('#generate-code').click(function() {
                id = jQuery('#pullout_widget_id').val();
                if(id == '' || id == ' '){
                    alert('Widget ID can not be empty!');
                    jQuery('#pullout_widget_id').wrap('<div class="control-group error"><span class="help-inline">Widget ID can not be empty: </span></div>');
                }

                var pullout_widget_id = jQuery('#pullout_widget_id').val();
                var formData = jQuery('#options-form').toObject({mode: 'all'});
                var obj = {};
                obj[pullout_widget_id] = formData[0];
                if( jQuery('#minify-pow').is(':checked') ){
                    var options = JSON.stringify(obj, null);
                    jQuery('#options-object').val('var powVars=' + options + ';');
                }else{
                    var options = JSON.stringify(obj, null, '\t');
                    jQuery('#options-object').val('var powVars= \n' + options + ';');
                }
                return false;
            });

        });

        function populateForm()
        {
            powVars = false;
            var data = document.getElementById('options-object').value;
            eval(data);
            if(!powVars){
                alert('Insert "powVars" JSON object into the textfield.')
                jQuery('#options-object').wrap('<div class="control-group error"></div>');
            }
            for( i in powVars ){
                jQuery('#pullout_widget_id').val(i);
                var form_data = powVars[i];
            }
            js2form(document.getElementById('options-form'), form_data);
        }
        </script>
    </body>
</html>