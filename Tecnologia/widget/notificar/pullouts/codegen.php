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
                <div id="code-generator" class="span8 offset2">
                    <div class="page-header">
                        <h2>PullOuts Code Generator</h2>
                    </div>
                    <form id="options-form" class="form-horizontal">
                        <div class="well" style="text-align: center"><h3>Enter Your Widget CSS ID:</h3> <input class="input-xlarge focused" type='text' id="pullout_widget_id"></div>
                            <div id="pow-options" class="pow-accordion" role="tablist">

                                <h3><a href="codegen.php#">Positioning</a></h3>
                                <div>
                                    <div class="control-group">
                                        <label class="control-label" for="pow_side" title="Screen Side">Screen Side</label>
                                        <div class="controls">
                                            <select class="pow_option" id="pow_side" name="position.side">
                                                <option value="left">Left</option>
                                                <option value="right">Right</option>
                                                <option value="top">Top</option>
                                                <option value="bottom">Bottom</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <label class="control-label" for="pow_anchor" title="Position on the Side">Position on the Side</label>
                                        <div class="controls">
                                            <input class="pow_option" id="pow_anchor" name="position.anchor" type="hidden" value="0">
                                            <input class="pow_option" id="pow_distance" name="position.distance" type="text" value="30%"> <small class="help-block">Examples: 30% or 300px.</small>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <label class="control-label" for="pow_scroll" title="Scroll with Page">Scroll with Page</label>
                                        <div class="controls">
                                            <input type="checkbox" class="pow_option" id="pow_scroll" name="position.scroll" value="1"><br><small class="help-block">By default all pullouts have fixed positions. Bottom widgets do not scroll.</small>
                                        </div>
                                    </div>
                                </div>


                            <h3><a href="codegen.php#">Behavior</a></h3>
                            <div>
                                <div class="control-group">
                                    <label class="control-label" for="pow_show_on" title="Show">Show/Slide Out</label>
                                    <div class="controls">
                                        <select class="pow_option" id="pow_show_on" name="style.show_on">
                                            <option value="click">on Click</option>
                                            <option value="mouseover">on Mouse Over</option>
                                            <option value="appear_once">Once - when Element Appears on Screen</option>
                                            <option value="appear">Always - when Element Appears on Screen</option>
                                            <option value="timer_once">Once - After X Seconds</option>
                                            <option value="timer">Always - After X Seconds</option>
                                            <option value="n_pages_once">Once - After Visiting X Pages</option>
                                            <option value="n_pages">Always - After Visiting X Pages</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="control-group pow_element" style="display: none; ">
                                    <label class="control-label" for="pow_element" title="Element ID/Class">Element ID/Class</label>
                                    <div class="controls">
                                        <input class="pow_option" id="pow_element" name="behavior.element" type="text">
                                        <small class="help-block">Element ID/Class should be entered like in CSS: #my_id or .my_class.</small>
                                    </div>
                                </div>
                                <div class="control-group pow_timer" style="display: none; ">
                                    <label class="control-label" for="pow_timer" title="Set Timer">Set Timer</label>
                                    <div class="controls">
                                        <input class="pow_option" id="pow_timer" name="behavior.timer" type="text">
                                    </div>
                                </div>
                                <div class="control-group pow_n_pages" style="display: none; ">
                                    <label class="control-label" for="pow_n_pages" title="Number of Pages">Number of Pages</label>
                                    <div class="controls">
                                        <input class="pow_option" id="pow_n_pages" name="behavior.n_pages" type="text">
                                    </div>
                                </div>
                                <div class="control-group">
                                    <label class="control-label" for="pow_easing" title="Easing Effect">Easing Effect</label>
                                    <div class="controls">
                                        <select class="pow_option" id="pow_easing" name="behavior.easing">
                                            <option value="linear">linear</option>
                                            <option value="swing">swing</option>
                                            <option value="easeInQuad">easeInQuad</option>
                                            <option value="easeOutQuad">easeOutQuad</option>
                                            <option value="easeInOutQuad">easeInOutQuad</option>
                                            <option value="easeInCubic">easeInCubic</option>
                                            <option value="easeOutCubic">easeOutCubic</option>
                                            <option value="easeInOutCubic">easeInOutCubic</option>
                                            <option value="easeInQuart">easeInQuart</option>
                                            <option value="easeOutQuart">easeOutQuart</option>
                                            <option value="easeInOutQuart">easeInOutQuart</option>
                                            <option value="easeInQuint">easeInQuint</option>
                                            <option value="easeOutQuint">easeOutQuint</option>
                                            <option value="easeInOutQuint">easeInOutQuint</option>
                                            <option value="easeInSine">easeInSine</option>
                                            <option value="easeOutSine">easeOutSine</option>
                                            <option value="easeInOutSine">easeInOutSine</option>
                                            <option value="easeInExpo">easeInExpo</option>
                                            <option value="easeOutExpo">easeOutExpo</option>
                                            <option value="easeInOutExpo">easeInOutExpo</option>
                                            <option value="easeInCirc">easeInCirc</option>
                                            <option value="easeOutCirc">easeOutCirc</option>
                                            <option value="easeInOutCirc">easeInOutCirc</option>
                                            <option value="easeInElastic">easeInElastic</option>
                                            <option value="easeOutElastic">easeOutElastic</option>
                                            <option value="easeInOutElastic">easeInOutElastic</option>
                                            <option value="easeInBack">easeInBack</option>
                                            <option value="easeOutBack">easeOutBack</option>
                                            <option value="easeInOutBack">easeInOutBack</option>
                                            <option value="easeInBounce">easeInBounce</option>
                                             selected='selected'<option value="easeOutBounce" selected="selected">easeOutBounce</option>
                                            <option value="easeInOutBounce">easeInOutBounce</option>
                                        </select>
                                        <small class="help-block">"Easing" is a sliding effect. <a href="http://jqueryui.com/demos/effect/easing.html" target="_blank">View this demo</a> to see all effects in action.</small>
                                    </div>
                                </div>
                                <div class="control-group">
                                    <label class="control-label" for="pow_speed" title="Sliding Speed">Sliding Speed</label>
                                    <div class="controls">
                                        <input type="text" class="pow_option" id="pow_speed" name="style.speed" style="display:inline-block; width: 25%" value="1450">
                                        <small class="help-inline">milli seconds</small>
                                    </div>
                                </div>
                            </div>


                            <h3><a href="codegen.php#">Style</a></h3>
                            <div>
                                <div class="control-group">
                                    <label class="control-label" for="pow_width" title="Widget Width">Widget Width</label>
                                    <div class="controls">
                                        <input class="pow_option" id="pow_width" name="style.width" type="text" value="260">px
                                    </div>
                                </div>
                                <div class="control-group">
                                    <label class="control-label" for="pow_color" title="Background Color">Background Color</label>
                                    <div class="controls">
                                        <input class="pow_option pow_color" id="pow_color" name="style.color" type="text" value="#">
                                    </div>
                                </div>
                                <div class="color-picker">
                                    <div style="position: relative; display: block; border: 1px solid #ccc;" id="colorpicker-pow_color"></div>
                                </div>
                                <div class="control-group">
                                    <label class="control-label" for="pow_border_color" title="Border Color">Border Color</label>
                                    <div class="controls">
                                        <input class="pow_option pow_color" id="pow_border_color" name="style.border_color" type="text" value=
                                    "#">
                                    </div>
                                </div>
                                <div class="color-picker">
                                    <div id="colorpicker-pow_border_color"></div>
                                </div>
                                <div class="control-group">
                                    <label class="control-label" for="pow_text_color" title="Text Color">Text Color</label>
                                    <div class="controls">
                                        <input class="pow_option pow_color" id="pow_text_color" name="style.text_color" type="text" value="#">
                                    </div>
                                </div>
                                <div class="color-picker">
                                    <div id="colorpicker-pow_text_color"></div>
                                </div>
                                <div class="control-group">
                                    <label class="control-label" for="pow_link_color" title="Link Color">Link Color</label>
                                    <div class="controls">
                                        <input class="pow_option pow_color" id="pow_link_color" name="style.link_color" type="text" value="#">
                                    </div>
                                </div>
                                <div class="color-picker">
                                    <div id="colorpicker-pow_link_color"></div>
                                </div>

                                <div class="control-group">
                                    <label class="control-label" title="Trim Styles">Trim Styles</label>
                                    <div class="controls">
                                        <label class="checkbox">
                                        <input type="checkbox" class="pow_option" id="pow_rounded_corners" name="style.rounded" value="1" > Rounded Corners</label> <label class="checkbox"><input type="checkbox" class="pow_option" id="pow_borders" name="style.borders" value="1"> Borders</label>
                                    </div>
                                </div>
                            </div>

                            <h3><a href="codegen.php#">PullOut Tab</a></h3>
                            <div>
                                <div class="control-group">
                                    <label class="control-label" for="pow_tab_offset" title="Tab Offset">Tab Offset</label>
                                    <div class="controls">
                                        <input style="width: 80px" size="5" type="text" class="pow_option" id="pow_tab_offset" name="style.tab_offset">
                                        <select style="width: 80px" name="style.tab_offset_type" class="pow_option" id="pow_tab_offset_type">
                                            <option value="%">%</option>
                                            <option value="px">px</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="control-group">
                                    <label class="control-label" for="pow_rotate" title="Vertical Tab">Vertical Tab</label>
                                    <div class="controls">
                                        <input type="checkbox" class="pow_option" id="pow_rotate" name="style.rotate" value="1">
                                        <small class="help-block">Diplays tab vertically along the side of the screen. Left and right sides only.</small>
                                    </div>
                                </div>
                                <div class="control-group">
                                    <label class="control-label" for="pow_icon" title="Tab Icon">Tab Icon</label>
                                    <div class="controls">
                                        <input class="pow_option" id="pow_icon" name="style.icon" type="hidden">
                                        <span class="pow_icon_preview"></span><div class="pow_icons_wrap"><div id="icons" class="pow_icons"><div rel="pow_icon" id="0_0" style="position: absolute; top: 0px; left: 0px;" class="pow_icon"></div><div rel="pow_icon" id="0_1" style="position: absolute; top: 36px; left: 0px;" class="pow_icon"></div><div rel="pow_icon" id="0_2" style="position: absolute; top: 72px; left: 0px;" class="pow_icon"></div><div rel="pow_icon" id="0_3" style="position: absolute; top: 108px; left: 0px;" class="pow_icon"></div><div rel="pow_icon" id="0_4" style="position: absolute; top: 144px; left: 0px;" class="pow_icon"></div><div rel="pow_icon" id="0_5" style="position: absolute; top: 180px; left: 0px;" class="pow_icon"></div><div rel="pow_icon" id="0_6" style="position: absolute; top: 216px; left: 0px;" class="pow_icon"></div><div rel="pow_icon" id="0_7" style="position: absolute; top: 252px; left: 0px;" class="pow_icon"></div><div rel="pow_icon" id="0_8" style="position: absolute; top: 288px; left: 0px;" class="pow_icon"></div><div rel="pow_icon" id="0_9" style="position: absolute; top: 324px; left: 0px;" class="pow_icon"></div><div rel="pow_icon" id="0_10" style="position: absolute; top: 360px; left: 0px;" class="pow_icon"></div><div rel="pow_icon" id="0_11" style="position: absolute; top: 396px; left: 0px;" class="pow_icon"></div><div rel="pow_icon" id="0_12" style="position: absolute; top: 432px; left: 0px;" class="pow_icon"></div><div rel="pow_icon" id="0_13" style="position: absolute; top: 468px; left: 0px;" class="pow_icon"></div><div rel="pow_icon" id="0_14" style="position: absolute; top: 504px; left: 0px;" class="pow_icon"></div><div rel="pow_icon" id="0_15" style="position: absolute; top: 540px; left: 0px;" class="pow_icon"></div><div rel="pow_icon" id="0_16" style="position: absolute; top: 576px; left: 0px;" class="pow_icon"></div><div rel="pow_icon" id="0_17" style="position: absolute; top: 612px; left: 0px;" class="pow_icon"></div><div rel="pow_icon" id="0_18" style="position: absolute; top: 648px; left: 0px;" class="pow_icon"></div><div rel="pow_icon" id="0_19" style="position: absolute; top: 684px; left: 0px;" class="pow_icon"></div><div rel="pow_icon" id="0_20" style="position: absolute; top: 720px; left: 0px;" class="pow_icon"></div><div rel="pow_icon" id="0_21" style="position: absolute; top: 756px; left: 0px;" class="pow_icon"></div><div rel="pow_icon" id="0_22" style="position: absolute; top: 792px; left: 0px;" class="pow_icon"></div><div rel="pow_icon" id="0_23" style="position: absolute; top: 828px; left: 0px;" class="pow_icon"></div><div rel="pow_icon" id="0_24" style="position: absolute; top: 864px; left: 0px;" class="pow_icon"></div><div rel="pow_icon" id="0_25" style="position: absolute; top: 900px; left: 0px;" class="pow_icon"></div><div rel="pow_icon" id="0_26" style="position: absolute; top: 936px; left: 0px;" class="pow_icon"></div><div rel="pow_icon" id="0_27" style="position: absolute; top: 972px; left: 0px;" class="pow_icon"></div><div rel="pow_icon" id="0_28" style="position: absolute; top: 1008px; left: 0px;" class="pow_icon"></div><div rel="pow_icon" id="1_0" style="position: absolute; top: 0px; left: 36px;" class="pow_icon"></div><div rel="pow_icon" id="1_1" style="position: absolute; top: 36px; left: 36px;" class="pow_icon"></div><div rel="pow_icon" id="1_2" style="position: absolute; top: 72px; left: 36px;" class="pow_icon"></div><div rel="pow_icon" id="1_3" style="position: absolute; top: 108px; left: 36px;" class="pow_icon"></div><div rel="pow_icon" id="1_4" style="position: absolute; top: 144px; left: 36px;" class="pow_icon"></div><div rel="pow_icon" id="1_5" style="position: absolute; top: 180px; left: 36px;" class="pow_icon"></div><div rel="pow_icon" id="1_6" style="position: absolute; top: 216px; left: 36px;" class="pow_icon"></div><div rel="pow_icon" id="1_7" style="position: absolute; top: 252px; left: 36px;" class="pow_icon"></div><div rel="pow_icon" id="1_8" style="position: absolute; top: 288px; left: 36px;" class="pow_icon"></div><div rel="pow_icon" id="1_9" style="position: absolute; top: 324px; left: 36px;" class="pow_icon"></div><div rel="pow_icon" id="1_10" style="position: absolute; top: 360px; left: 36px;" class="pow_icon"></div><div rel="pow_icon" id="1_11" style="position: absolute; top: 396px; left: 36px;" class="pow_icon"></div><div rel="pow_icon" id="1_12" style="position: absolute; top: 432px; left: 36px;" class="pow_icon"></div><div rel="pow_icon" id="1_13" style="position: absolute; top: 468px; left: 36px;" class="pow_icon"></div><div rel="pow_icon" id="1_14" style="position: absolute; top: 504px; left: 36px;" class="pow_icon"></div><div rel="pow_icon" id="1_15" style="position: absolute; top: 540px; left: 36px;" class="pow_icon"></div><div rel="pow_icon" id="1_16" style="position: absolute; top: 576px; left: 36px;" class="pow_icon"></div><div rel="pow_icon" id="1_17" style="position: absolute; top: 612px; left: 36px;" class="pow_icon pow_icon_selected"></div><div rel="pow_icon" id="1_18" style="position: absolute; top: 648px; left: 36px;" class="pow_icon"></div><div rel="pow_icon" id="1_19" style="position: absolute; top: 684px; left: 36px;" class="pow_icon"></div><div rel="pow_icon" id="1_20" style="position: absolute; top: 720px; left: 36px;" class="pow_icon"></div><div rel="pow_icon" id="1_21" style="position: absolute; top: 756px; left: 36px;" class="pow_icon"></div><div rel="pow_icon" id="1_22" style="position: absolute; top: 792px; left: 36px;" class="pow_icon"></div><div rel="pow_icon" id="1_23" style="position: absolute; top: 828px; left: 36px;" class="pow_icon"></div><div rel="pow_icon" id="1_24" style="position: absolute; top: 864px; left: 36px;" class="pow_icon"></div><div rel="pow_icon" id="1_25" style="position: absolute; top: 900px; left: 36px;" class="pow_icon"></div><div rel="pow_icon" id="1_26" style="position: absolute; top: 936px; left: 36px;" class="pow_icon"></div><div rel="pow_icon" id="1_27" style="position: absolute; top: 972px; left: 36px;" class="pow_icon"></div><div rel="pow_icon" id="1_28" style="position: absolute; top: 1008px; left: 36px;" class="pow_icon"></div><div rel="pow_icon" id="2_0" style="position: absolute; top: 0px; left: 72px;" class="pow_icon"></div><div rel="pow_icon" id="2_1" style="position: absolute; top: 36px; left: 72px;" class="pow_icon"></div><div rel="pow_icon" id="2_2" style="position: absolute; top: 72px; left: 72px;" class="pow_icon"></div><div rel="pow_icon" id="2_3" style="position: absolute; top: 108px; left: 72px;" class="pow_icon"></div><div rel="pow_icon" id="2_4" style="position: absolute; top: 144px; left: 72px;" class="pow_icon"></div><div rel="pow_icon" id="2_5" style="position: absolute; top: 180px; left: 72px;" class="pow_icon"></div><div rel="pow_icon" id="2_6" style="position: absolute; top: 216px; left: 72px;" class="pow_icon"></div><div rel="pow_icon" id="2_7" style="position: absolute; top: 252px; left: 72px;" class="pow_icon"></div><div rel="pow_icon" id="2_8" style="position: absolute; top: 288px; left: 72px;" class="pow_icon"></div><div rel="pow_icon" id="2_9" style="position: absolute; top: 324px; left: 72px;" class="pow_icon"></div><div rel="pow_icon" id="2_10" style="position: absolute; top: 360px; left: 72px;" class="pow_icon"></div><div rel="pow_icon" id="2_11" style="position: absolute; top: 396px; left: 72px;" class="pow_icon"></div><div rel="pow_icon" id="2_12" style="position: absolute; top: 432px; left: 72px;" class="pow_icon"></div><div rel="pow_icon" id="2_13" style="position: absolute; top: 468px; left: 72px;" class="pow_icon"></div><div rel="pow_icon" id="2_14" style="position: absolute; top: 504px; left: 72px;" class="pow_icon"></div><div rel="pow_icon" id="2_15" style="position: absolute; top: 540px; left: 72px;" class="pow_icon"></div><div rel="pow_icon" id="2_16" style="position: absolute; top: 576px; left: 72px;" class="pow_icon"></div><div rel="pow_icon" id="2_17" style="position: absolute; top: 612px; left: 72px;" class="pow_icon"></div><div rel="pow_icon" id="2_18" style="position: absolute; top: 648px; left: 72px;" class="pow_icon"></div><div rel="pow_icon" id="2_19" style="position: absolute; top: 684px; left: 72px;" class="pow_icon"></div><div rel="pow_icon" id="2_20" style="position: absolute; top: 720px; left: 72px;" class="pow_icon"></div><div rel="pow_icon" id="2_21" style="position: absolute; top: 756px; left: 72px;" class="pow_icon"></div><div rel="pow_icon" id="2_22" style="position: absolute; top: 792px; left: 72px;" class="pow_icon"></div><div rel="pow_icon" id="2_23" style="position: absolute; top: 828px; left: 72px;" class="pow_icon"></div><div rel="pow_icon" id="2_24" style="position: absolute; top: 864px; left: 72px;" class="pow_icon"></div><div rel="pow_icon" id="2_25" style="position: absolute; top: 900px; left: 72px;" class="pow_icon"></div><div rel="pow_icon" id="2_26" style="position: absolute; top: 936px; left: 72px;" class="pow_icon"></div><div rel="pow_icon" id="2_27" style="position: absolute; top: 972px; left: 72px;" class="pow_icon"></div><div rel="pow_icon" id="2_28" style="position: absolute; top: 1008px; left: 72px;" class="pow_icon"></div><div rel="pow_icon" id="3_0" style="position: absolute; top: 0px; left: 108px;" class="pow_icon"></div><div rel="pow_icon" id="3_1" style="position: absolute; top: 36px; left: 108px;" class="pow_icon"></div><div rel="pow_icon" id="3_2" style="position: absolute; top: 72px; left: 108px;" class="pow_icon"></div><div rel="pow_icon" id="3_3" style="position: absolute; top: 108px; left: 108px;" class="pow_icon"></div><div rel="pow_icon" id="3_4" style="position: absolute; top: 144px; left: 108px;" class="pow_icon"></div><div rel="pow_icon" id="3_5" style="position: absolute; top: 180px; left: 108px;" class="pow_icon"></div><div rel="pow_icon" id="3_6" style="position: absolute; top: 216px; left: 108px;" class="pow_icon"></div><div rel="pow_icon" id="3_7" style="position: absolute; top: 252px; left: 108px;" class="pow_icon"></div><div rel="pow_icon" id="3_8" style="position: absolute; top: 288px; left: 108px;" class="pow_icon"></div><div rel="pow_icon" id="3_9" style="position: absolute; top: 324px; left: 108px;" class="pow_icon"></div><div rel="pow_icon" id="3_10" style="position: absolute; top: 360px; left: 108px;" class="pow_icon"></div><div rel="pow_icon" id="3_11" style="position: absolute; top: 396px; left: 108px;" class="pow_icon"></div><div rel="pow_icon" id="3_12" style="position: absolute; top: 432px; left: 108px;" class="pow_icon"></div><div rel="pow_icon" id="3_13" style="position: absolute; top: 468px; left: 108px;" class="pow_icon"></div><div rel="pow_icon" id="3_14" style="position: absolute; top: 504px; left: 108px;" class="pow_icon"></div><div rel="pow_icon" id="3_15" style="position: absolute; top: 540px; left: 108px;" class="pow_icon"></div><div rel="pow_icon" id="3_16" style="position: absolute; top: 576px; left: 108px;" class="pow_icon"></div><div rel="pow_icon" id="3_17" style="position: absolute; top: 612px; left: 108px;" class="pow_icon"></div><div rel="pow_icon" id="3_18" style="position: absolute; top: 648px; left: 108px;" class="pow_icon"></div><div rel="pow_icon" id="3_19" style="position: absolute; top: 684px; left: 108px;" class="pow_icon"></div><div rel="pow_icon" id="3_20" style="position: absolute; top: 720px; left: 108px;" class="pow_icon"></div><div rel="pow_icon" id="3_21" style="position: absolute; top: 756px; left: 108px;" class="pow_icon"></div><div rel="pow_icon" id="3_22" style="position: absolute; top: 792px; left: 108px;" class="pow_icon"></div><div rel="pow_icon" id="3_23" style="position: absolute; top: 828px; left: 108px;" class="pow_icon"></div><div rel="pow_icon" id="3_24" style="position: absolute; top: 864px; left: 108px;" class="pow_icon"></div><div rel="pow_icon" id="3_25" style="position: absolute; top: 900px; left: 108px;" class="pow_icon"></div><div rel="pow_icon" id="3_26" style="position: absolute; top: 936px; left: 108px;" class="pow_icon"></div><div rel="pow_icon" id="3_27" style="position: absolute; top: 972px; left: 108px;" class="pow_icon"></div><div rel="pow_icon" id="3_28" style="position: absolute; top: 1008px; left: 108px;" class="pow_icon"></div><div rel="pow_icon" id="4_0" style="position: absolute; top: 0px; left: 144px;" class="pow_icon"></div><div rel="pow_icon" id="4_1" style="position: absolute; top: 36px; left: 144px;" class="pow_icon"></div><div rel="pow_icon" id="4_2" style="position: absolute; top: 72px; left: 144px;" class="pow_icon"></div><div rel="pow_icon" id="4_3" style="position: absolute; top: 108px; left: 144px;" class="pow_icon"></div><div rel="pow_icon" id="4_4" style="position: absolute; top: 144px; left: 144px;" class="pow_icon"></div><div rel="pow_icon" id="4_5" style="position: absolute; top: 180px; left: 144px;" class="pow_icon"></div><div rel="pow_icon" id="4_6" style="position: absolute; top: 216px; left: 144px;" class="pow_icon"></div><div rel="pow_icon" id="4_7" style="position: absolute; top: 252px; left: 144px;" class="pow_icon"></div><div rel="pow_icon" id="4_8" style="position: absolute; top: 288px; left: 144px;" class="pow_icon"></div><div rel="pow_icon" id="4_9" style="position: absolute; top: 324px; left: 144px;" class="pow_icon"></div><div rel="pow_icon" id="4_10" style="position: absolute; top: 360px; left: 144px;" class="pow_icon"></div><div rel="pow_icon" id="4_11" style="position: absolute; top: 396px; left: 144px;" class="pow_icon"></div><div rel="pow_icon" id="4_12" style="position: absolute; top: 432px; left: 144px;" class="pow_icon"></div><div rel="pow_icon" id="4_13" style="position: absolute; top: 468px; left: 144px;" class="pow_icon"></div><div rel="pow_icon" id="4_14" style="position: absolute; top: 504px; left: 144px;" class="pow_icon"></div><div rel="pow_icon" id="4_15" style="position: absolute; top: 540px; left: 144px;" class="pow_icon"></div><div rel="pow_icon" id="4_16" style="position: absolute; top: 576px; left: 144px;" class="pow_icon"></div><div rel="pow_icon" id="4_17" style="position: absolute; top: 612px; left: 144px;" class="pow_icon"></div><div rel="pow_icon" id="4_18" style="position: absolute; top: 648px; left: 144px;" class="pow_icon"></div><div rel="pow_icon" id="4_19" style="position: absolute; top: 684px; left: 144px;" class="pow_icon"></div><div rel="pow_icon" id="4_20" style="position: absolute; top: 720px; left: 144px;" class="pow_icon"></div><div rel="pow_icon" id="4_21" style="position: absolute; top: 756px; left: 144px;" class="pow_icon"></div><div rel="pow_icon" id="4_22" style="position: absolute; top: 792px; left: 144px;" class="pow_icon"></div><div rel="pow_icon" id="4_23" style="position: absolute; top: 828px; left: 144px;" class="pow_icon"></div><div rel="pow_icon" id="4_24" style="position: absolute; top: 864px; left: 144px;" class="pow_icon"></div><div rel="pow_icon" id="4_25" style="position: absolute; top: 900px; left: 144px;" class="pow_icon"></div><div rel="pow_icon" id="4_26" style="position: absolute; top: 936px; left: 144px;" class="pow_icon"></div><div rel="pow_icon" id="4_27" style="position: absolute; top: 972px; left: 144px;" class="pow_icon"></div><div rel="pow_icon" id="4_28" style="position: absolute; top: 1008px; left: 144px;" class="pow_icon"></div><div rel="pow_icon" id="5_0" style="position: absolute; top: 0px; left: 180px;" class="pow_icon"></div><div rel="pow_icon" id="5_1" style="position: absolute; top: 36px; left: 180px;" class="pow_icon"></div><div rel="pow_icon" id="5_2" style="position: absolute; top: 72px; left: 180px;" class="pow_icon"></div><div rel="pow_icon" id="5_3" style="position: absolute; top: 108px; left: 180px;" class="pow_icon"></div><div rel="pow_icon" id="5_4" style="position: absolute; top: 144px; left: 180px;" class="pow_icon"></div><div rel="pow_icon" id="5_5" style="position: absolute; top: 180px; left: 180px;" class="pow_icon"></div><div rel="pow_icon" id="5_6" style="position: absolute; top: 216px; left: 180px;" class="pow_icon"></div><div rel="pow_icon" id="5_7" style="position: absolute; top: 252px; left: 180px;" class="pow_icon"></div><div rel="pow_icon" id="5_8" style="position: absolute; top: 288px; left: 180px;" class="pow_icon"></div><div rel="pow_icon" id="5_9" style="position: absolute; top: 324px; left: 180px;" class="pow_icon"></div><div rel="pow_icon" id="5_10" style="position: absolute; top: 360px; left: 180px;" class="pow_icon"></div><div rel="pow_icon" id="5_11" style="position: absolute; top: 396px; left: 180px;" class="pow_icon"></div><div rel="pow_icon" id="5_12" style="position: absolute; top: 432px; left: 180px;" class="pow_icon"></div><div rel="pow_icon" id="5_13" style="position: absolute; top: 468px; left: 180px;" class="pow_icon"></div><div rel="pow_icon" id="5_14" style="position: absolute; top: 504px; left: 180px;" class="pow_icon"></div><div rel="pow_icon" id="5_15" style="position: absolute; top: 540px; left: 180px;" class="pow_icon"></div><div rel="pow_icon" id="5_16" style="position: absolute; top: 576px; left: 180px;" class="pow_icon"></div><div rel="pow_icon" id="5_17" style="position: absolute; top: 612px; left: 180px;" class="pow_icon"></div><div rel="pow_icon" id="5_18" style="position: absolute; top: 648px; left: 180px;" class="pow_icon"></div><div rel="pow_icon" id="5_19" style="position: absolute; top: 684px; left: 180px;" class="pow_icon"></div><div rel="pow_icon" id="5_20" style="position: absolute; top: 720px; left: 180px;" class="pow_icon"></div><div rel="pow_icon" id="5_21" style="position: absolute; top: 756px; left: 180px;" class="pow_icon"></div><div rel="pow_icon" id="5_22" style="position: absolute; top: 792px; left: 180px;" class="pow_icon"></div><div rel="pow_icon" id="5_23" style="position: absolute; top: 828px; left: 180px;" class="pow_icon"></div><div rel="pow_icon" id="5_24" style="position: absolute; top: 864px; left: 180px;" class="pow_icon"></div><div rel="pow_icon" id="5_25" style="position: absolute; top: 900px; left: 180px;" class="pow_icon"></div><div rel="pow_icon" id="5_26" style="position: absolute; top: 936px; left: 180px;" class="pow_icon"></div><div rel="pow_icon" id="5_27" style="position: absolute; top: 972px; left: 180px;" class="pow_icon"></div><div rel="pow_icon" id="5_28" style="position: absolute; top: 1008px; left: 180px;" class="pow_icon"></div><div rel="pow_icon" id="6_0" style="position: absolute; top: 0px; left: 216px;" class="pow_icon"></div><div rel="pow_icon" id="6_1" style="position: absolute; top: 36px; left: 216px;" class="pow_icon"></div><div rel="pow_icon" id="6_2" style="position: absolute; top: 72px; left: 216px;" class="pow_icon"></div><div rel="pow_icon" id="6_3" style="position: absolute; top: 108px; left: 216px;" class="pow_icon"></div><div rel="pow_icon" id="6_4" style="position: absolute; top: 144px; left: 216px;" class="pow_icon"></div><div rel="pow_icon" id="6_5" style="position: absolute; top: 180px; left: 216px;" class="pow_icon"></div><div rel="pow_icon" id="6_6" style="position: absolute; top: 216px; left: 216px;" class="pow_icon"></div><div rel="pow_icon" id="6_7" style="position: absolute; top: 252px; left: 216px;" class="pow_icon"></div><div rel="pow_icon" id="6_8" style="position: absolute; top: 288px; left: 216px;" class="pow_icon"></div><div rel="pow_icon" id="6_9" style="position: absolute; top: 324px; left: 216px;" class="pow_icon"></div><div rel="pow_icon" id="6_10" style="position: absolute; top: 360px; left: 216px;" class="pow_icon"></div><div rel="pow_icon" id="6_11" style="position: absolute; top: 396px; left: 216px;" class="pow_icon"></div><div rel="pow_icon" id="6_12" style="position: absolute; top: 432px; left: 216px;" class="pow_icon"></div><div rel="pow_icon" id="6_13" style="position: absolute; top: 468px; left: 216px;" class="pow_icon"></div><div rel="pow_icon" id="6_14" style="position: absolute; top: 504px; left: 216px;" class="pow_icon"></div><div rel="pow_icon" id="6_15" style="position: absolute; top: 540px; left: 216px;" class="pow_icon"></div><div rel="pow_icon" id="6_16" style="position: absolute; top: 576px; left: 216px;" class="pow_icon"></div><div rel="pow_icon" id="6_17" style="position: absolute; top: 612px; left: 216px;" class="pow_icon"></div><div rel="pow_icon" id="6_18" style="position: absolute; top: 648px; left: 216px;" class="pow_icon"></div><div rel="pow_icon" id="6_19" style="position: absolute; top: 684px; left: 216px;" class="pow_icon"></div><div rel="pow_icon" id="6_20" style="position: absolute; top: 720px; left: 216px;" class="pow_icon"></div><div rel="pow_icon" id="6_21" style="position: absolute; top: 756px; left: 216px;" class="pow_icon"></div><div rel="pow_icon" id="6_22" style="position: absolute; top: 792px; left: 216px;" class="pow_icon"></div><div rel="pow_icon" id="6_23" style="position: absolute; top: 828px; left: 216px;" class="pow_icon"></div><div rel="pow_icon" id="6_24" style="position: absolute; top: 864px; left: 216px;" class="pow_icon"></div><div rel="pow_icon" id="6_25" style="position: absolute; top: 900px; left: 216px;" class="pow_icon"></div><div rel="pow_icon" id="6_26" style="position: absolute; top: 936px; left: 216px;" class="pow_icon"></div><div rel="pow_icon" id="6_27" style="position: absolute; top: 972px; left: 216px;" class="pow_icon"></div><div rel="pow_icon" id="6_28" style="position: absolute; top: 1008px; left: 216px;" class="pow_icon"></div><div rel="pow_icon" id="7_0" style="position: absolute; top: 0px; left: 252px;" class="pow_icon"></div><div rel="pow_icon" id="7_1" style="position: absolute; top: 36px; left: 252px;" class="pow_icon"></div><div rel="pow_icon" id="7_2" style="position: absolute; top: 72px; left: 252px;" class="pow_icon"></div><div rel="pow_icon" id="7_3" style="position: absolute; top: 108px; left: 252px;" class="pow_icon"></div><div rel="pow_icon" id="7_4" style="position: absolute; top: 144px; left: 252px;" class="pow_icon"></div><div rel="pow_icon" id="7_5" style="position: absolute; top: 180px; left: 252px;" class="pow_icon"></div><div rel="pow_icon" id="7_6" style="position: absolute; top: 216px; left: 252px;" class="pow_icon"></div><div rel="pow_icon" id="7_7" style="position: absolute; top: 252px; left: 252px;" class="pow_icon"></div><div rel="pow_icon" id="7_8" style="position: absolute; top: 288px; left: 252px;" class="pow_icon"></div><div rel="pow_icon" id="7_9" style="position: absolute; top: 324px; left: 252px;" class="pow_icon"></div><div rel="pow_icon" id="7_10" style="position: absolute; top: 360px; left: 252px;" class="pow_icon"></div><div rel="pow_icon" id="7_11" style="position: absolute; top: 396px; left: 252px;" class="pow_icon"></div><div rel="pow_icon" id="7_12" style="position: absolute; top: 432px; left: 252px;" class="pow_icon"></div><div rel="pow_icon" id="7_13" style="position: absolute; top: 468px; left: 252px;" class="pow_icon"></div><div rel="pow_icon" id="7_14" style="position: absolute; top: 504px; left: 252px;" class="pow_icon"></div><div rel="pow_icon" id="7_15" style="position: absolute; top: 540px; left: 252px;" class="pow_icon"></div><div rel="pow_icon" id="7_16" style="position: absolute; top: 576px; left: 252px;" class="pow_icon"></div><div rel="pow_icon" id="7_17" style="position: absolute; top: 612px; left: 252px;" class="pow_icon"></div><div rel="pow_icon" id="7_18" style="position: absolute; top: 648px; left: 252px;" class="pow_icon"></div><div rel="pow_icon" id="7_19" style="position: absolute; top: 684px; left: 252px;" class="pow_icon"></div><div rel="pow_icon" id="7_20" style="position: absolute; top: 720px; left: 252px;" class="pow_icon"></div><div rel="pow_icon" id="7_21" style="position: absolute; top: 756px; left: 252px;" class="pow_icon"></div><div rel="pow_icon" id="7_22" style="position: absolute; top: 792px; left: 252px;" class="pow_icon"></div><div rel="pow_icon" id="7_23" style="position: absolute; top: 828px; left: 252px;" class="pow_icon"></div><div rel="pow_icon" id="7_24" style="position: absolute; top: 864px; left: 252px;" class="pow_icon"></div><div rel="pow_icon" id="7_25" style="position: absolute; top: 900px; left: 252px;" class="pow_icon"></div><div rel="pow_icon" id="7_26" style="position: absolute; top: 936px; left: 252px;" class="pow_icon"></div><div rel="pow_icon" id="7_27" style="position: absolute; top: 972px; left: 252px;" class="pow_icon"></div><div rel="pow_icon" id="7_28" style="position: absolute; top: 1008px; left: 252px;" class="pow_icon"></div><div rel="pow_icon" id="8_0" style="position: absolute; top: 0px; left: 288px;" class="pow_icon"></div><div rel="pow_icon" id="8_1" style="position: absolute; top: 36px; left: 288px;" class="pow_icon"></div><div rel="pow_icon" id="8_2" style="position: absolute; top: 72px; left: 288px;" class="pow_icon"></div><div rel="pow_icon" id="8_3" style="position: absolute; top: 108px; left: 288px;" class="pow_icon"></div><div rel="pow_icon" id="8_4" style="position: absolute; top: 144px; left: 288px;" class="pow_icon"></div><div rel="pow_icon" id="8_5" style="position: absolute; top: 180px; left: 288px;" class="pow_icon"></div><div rel="pow_icon" id="8_6" style="position: absolute; top: 216px; left: 288px;" class="pow_icon"></div><div rel="pow_icon" id="8_7" style="position: absolute; top: 252px; left: 288px;" class="pow_icon"></div><div rel="pow_icon" id="8_8" style="position: absolute; top: 288px; left: 288px;" class="pow_icon"></div><div rel="pow_icon" id="8_9" style="position: absolute; top: 324px; left: 288px;" class="pow_icon"></div><div rel="pow_icon" id="8_10" style="position: absolute; top: 360px; left: 288px;" class="pow_icon"></div><div rel="pow_icon" id="8_11" style="position: absolute; top: 396px; left: 288px;" class="pow_icon"></div><div rel="pow_icon" id="8_12" style="position: absolute; top: 432px; left: 288px;" class="pow_icon"></div><div rel="pow_icon" id="8_13" style="position: absolute; top: 468px; left: 288px;" class="pow_icon"></div><div rel="pow_icon" id="8_14" style="position: absolute; top: 504px; left: 288px;" class="pow_icon"></div><div rel="pow_icon" id="8_15" style="position: absolute; top: 540px; left: 288px;" class="pow_icon"></div><div rel="pow_icon" id="8_16" style="position: absolute; top: 576px; left: 288px;" class="pow_icon"></div><div rel="pow_icon" id="8_17" style="position: absolute; top: 612px; left: 288px;" class="pow_icon"></div><div rel="pow_icon" id="8_18" style="position: absolute; top: 648px; left: 288px;" class="pow_icon"></div><div rel="pow_icon" id="8_19" style="position: absolute; top: 684px; left: 288px;" class="pow_icon"></div><div rel="pow_icon" id="8_20" style="position: absolute; top: 720px; left: 288px;" class="pow_icon"></div><div rel="pow_icon" id="8_21" style="position: absolute; top: 756px; left: 288px;" class="pow_icon"></div><div rel="pow_icon" id="8_22" style="position: absolute; top: 792px; left: 288px;" class="pow_icon"></div><div rel="pow_icon" id="8_23" style="position: absolute; top: 828px; left: 288px;" class="pow_icon"></div><div rel="pow_icon" id="8_24" style="position: absolute; top: 864px; left: 288px;" class="pow_icon"></div><div rel="pow_icon" id="8_25" style="position: absolute; top: 900px; left: 288px;" class="pow_icon"></div><div rel="pow_icon" id="8_26" style="position: absolute; top: 936px; left: 288px;" class="pow_icon"></div><div rel="pow_icon" id="8_27" style="position: absolute; top: 972px; left: 288px;" class="pow_icon"></div><div rel="pow_icon" id="8_28" style="position: absolute; top: 1008px; left: 288px;" class="pow_icon"></div><div rel="pow_icon" id="9_0" style="position: absolute; top: 0px; left: 324px;" class="pow_icon"></div><div rel="pow_icon" id="9_1" style="position: absolute; top: 36px; left: 324px;" class="pow_icon"></div><div rel="pow_icon" id="9_2" style="position: absolute; top: 72px; left: 324px;" class="pow_icon"></div><div rel="pow_icon" id="9_3" style="position: absolute; top: 108px; left: 324px;" class="pow_icon"></div><div rel="pow_icon" id="9_4" style="position: absolute; top: 144px; left: 324px;" class="pow_icon"></div><div rel="pow_icon" id="9_5" style="position: absolute; top: 180px; left: 324px;" class="pow_icon"></div><div rel="pow_icon" id="9_6" style="position: absolute; top: 216px; left: 324px;" class="pow_icon"></div><div rel="pow_icon" id="9_7" style="position: absolute; top: 252px; left: 324px;" class="pow_icon"></div><div rel="pow_icon" id="9_8" style="position: absolute; top: 288px; left: 324px;" class="pow_icon"></div><div rel="pow_icon" id="9_9" style="position: absolute; top: 324px; left: 324px;" class="pow_icon"></div><div rel="pow_icon" id="9_10" style="position: absolute; top: 360px; left: 324px;" class="pow_icon"></div><div rel="pow_icon" id="9_11" style="position: absolute; top: 396px; left: 324px;" class="pow_icon"></div><div rel="pow_icon" id="9_12" style="position: absolute; top: 432px; left: 324px;" class="pow_icon"></div><div rel="pow_icon" id="9_13" style="position: absolute; top: 468px; left: 324px;" class="pow_icon"></div><div rel="pow_icon" id="9_14" style="position: absolute; top: 504px; left: 324px;" class="pow_icon"></div><div rel="pow_icon" id="9_15" style="position: absolute; top: 540px; left: 324px;" class="pow_icon"></div><div rel="pow_icon" id="9_16" style="position: absolute; top: 576px; left: 324px;" class="pow_icon"></div><div rel="pow_icon" id="9_17" style="position: absolute; top: 612px; left: 324px;" class="pow_icon"></div><div rel="pow_icon" id="9_18" style="position: absolute; top: 648px; left: 324px;" class="pow_icon"></div><div rel="pow_icon" id="9_19" style="position: absolute; top: 684px; left: 324px;" class="pow_icon"></div><div rel="pow_icon" id="9_20" style="position: absolute; top: 720px; left: 324px;" class="pow_icon"></div><div rel="pow_icon" id="9_21" style="position: absolute; top: 756px; left: 324px;" class="pow_icon"></div><div rel="pow_icon" id="9_22" style="position: absolute; top: 792px; left: 324px;" class="pow_icon"></div><div rel="pow_icon" id="9_23" style="position: absolute; top: 828px; left: 324px;" class="pow_icon"></div><div rel="pow_icon" id="9_24" style="position: absolute; top: 864px; left: 324px;" class="pow_icon"></div><div rel="pow_icon" id="9_25" style="position: absolute; top: 900px; left: 324px;" class="pow_icon"></div><div rel="pow_icon" id="9_26" style="position: absolute; top: 936px; left: 324px;" class="pow_icon"></div><div rel="pow_icon" id="9_27" style="position: absolute; top: 972px; left: 324px;" class="pow_icon"></div><div rel="pow_icon" id="9_28" style="position: absolute; top: 1008px; left: 324px;" class="pow_icon"></div></div></div>
                                    </div>
                                    <div class="control-group">
                                        <label class="control-label" for="pow_open_label" title="" open"="" label"="">"Open" Label</label>
                                        <div class="controls">
                                            <input class="pow_option" id="pow_open_label" name="style.open_label" type="text">
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <label class="control-label" for="pow_close_label" title="" close"="" label"="">"Close" Label</label>
                                        <div class="controls">
                                            <input class="pow_option" id="pow_close_label" name="style.close_label" type="text">
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <label class="control-label" for="pow_no_label" title="Hide Text Label">Hide Text Label</label>
                                        <div class="controls">
                                            <input type="checkbox" class="pow_option" id="pow_no_label" name="style.no_label" value="1"><small class="help-block">In case you wish to display icon only.</small>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </form>

                    <p class="code-generator-button"><input type="checkbox" id="minify-pow" /> Minify Code Output<br /><a id="generate-code" class="btn btn-primary btn-large">Generate Code</a></p>
                    <p id="options-result"><textarea id="options-object" style="width:610px" rows="7"></textarea></p>
                    <span class="help-block">To import settings back into the form paste "powVars" JSON object into the textarea field and click "Populate Form" button below.</span>
                    <p class="code-generator-button"><a class="btn btn-secondary btn-large" onclick="populateForm()">Populate Form</a></p>
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