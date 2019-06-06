/**
 * Storm JavaScript plugins
 *
 * 1. jQuery Cookie
 * 2. hoverIntent
 * 3. Superfish
 * 4. Cufon
 * 5. Cufon font - Comfortaa Regular
 * 6. Cufon font - Comfortaa Bold
 * 7. ToggleVal
 * 8. jQuery Tweet
 * 9. jQuery BBQ
 * 10. jQuery hashchange event
 * 11. Image preloader
 * 12. Full screen background
 */

/**
 * jQuery Cookie plugin
 *
 * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

// TODO JsDoc

/**
 * Create a cookie with the given key and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String key The key of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given key.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String key The key of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function (key, value, options) {

    // key and at least value given, set cookie...
    if (arguments.length > 1 && String(value) !== "[object Object]") {
        options = jQuery.extend({}, options);

        if (value === null || value === undefined) {
            options.expires = -1;
        }

        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }

        value = String(value);

        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? value : encodeURIComponent(value),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join(''));
    }

    // key and possibly options given, get cookie...
    options = value || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};


;(function($){
	/* hoverIntent by Brian Cherne */
	$.fn.hoverIntent = function(f,g) {
		// default configuration options
		var cfg = {
			sensitivity: 7,
			interval: 100,
			timeout: 0
		};
		// override configuration options with user supplied object
		cfg = $.extend(cfg, g ? { over: f, out: g } : f );

		// instantiate variables
		// cX, cY = current X and Y position of mouse, updated by mousemove event
		// pX, pY = previous X and Y position of mouse, set by mouseover and polling interval
		var cX, cY, pX, pY;

		// A private function for getting mouse position
		var track = function(ev) {
			cX = ev.pageX;
			cY = ev.pageY;
		};

		// A private function for comparing current and previous mouse position
		var compare = function(ev,ob) {
			ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
			// compare mouse positions to see if they've crossed the threshold
			if ( ( Math.abs(pX-cX) + Math.abs(pY-cY) ) < cfg.sensitivity ) {
				$(ob).unbind("mousemove",track);
				// set hoverIntent state to true (so mouseOut can be called)
				ob.hoverIntent_s = 1;
				return cfg.over.apply(ob,[ev]);
			} else {
				// set previous coordinates for next time
				pX = cX; pY = cY;
				// use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
				ob.hoverIntent_t = setTimeout( function(){compare(ev, ob);} , cfg.interval );
			}
		};

		// A private function for delaying the mouseOut function
		var delay = function(ev,ob) {
			ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
			ob.hoverIntent_s = 0;
			return cfg.out.apply(ob,[ev]);
		};

		// A private function for handling mouse 'hovering'
		var handleHover = function(e) {
			// next three lines copied from jQuery.hover, ignore children onMouseOver/onMouseOut
			var p = (e.type == "mouseover" ? e.fromElement : e.toElement) || e.relatedTarget;
			while ( p && p != this ) { try { p = p.parentNode; } catch(e) { p = this; } }
			if ( p == this ) { return false; }

			// copy objects to be passed into t (required for event object to be passed in IE)
			var ev = jQuery.extend({},e);
			var ob = this;

			// cancel hoverIntent timer if it exists
			if (ob.hoverIntent_t) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); }

			// else e.type == "onmouseover"
			if (e.type == "mouseover") {
				// set "previous" X and Y position based on initial entry point
				pX = ev.pageX; pY = ev.pageY;
				// update "current" X and Y position based on mousemove
				$(ob).bind("mousemove",track);
				// start polling interval (self-calling timeout) to compare mouse coordinates over time
				if (ob.hoverIntent_s != 1) { ob.hoverIntent_t = setTimeout( function(){compare(ev,ob);} , cfg.interval );}

			// else e.type == "onmouseout"
			} else {
				// unbind expensive mousemove event
				$(ob).unbind("mousemove",track);
				// if hoverIntent state is true, then call the mouseOut function after the specified delay
				if (ob.hoverIntent_s == 1) { ob.hoverIntent_t = setTimeout( function(){delay(ev,ob);} , cfg.timeout );}
			}
		};

		// bind the function to the two event listeners
		return this.mouseover(handleHover).mouseout(handleHover);
	};

})(jQuery);


/*
 * Superfish v1.4.8 - jQuery menu widget
 * Copyright (c) 2008 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 *
 * CHANGELOG: http://users.tpg.com.au/j_birch/plugins/superfish/changelog.txt
 */

;(function($){
	$.fn.superfish = function(op){

		var sf = $.fn.superfish,
			c = sf.c,
			$arrow = $(['<span class="',c.arrowClass,'"></span>'].join('')),
			over = function(){
				var $$ = $(this), menu = getMenu($$);
				clearTimeout(menu.sfTimer);
				$$.showSuperfishUl().siblings().hideSuperfishUl();
			},
			out = function(){
				var $$ = $(this), menu = getMenu($$), o = sf.op;
				clearTimeout(menu.sfTimer);
				menu.sfTimer=setTimeout(function(){
					o.retainPath=($.inArray($$[0],o.$path)>-1);
					$$.hideSuperfishUl();
					if (o.$path.length && $$.parents(['li.',o.hoverClass].join('')).length<1){over.call(o.$path);}
				},o.delay);
			},
			getMenu = function($menu){
				var menu = $menu.parents(['ul.',c.menuClass,':first'].join(''))[0];
				sf.op = sf.o[menu.serial];
				return menu;
			},
			addArrow = function($a){ $a.addClass(c.anchorClass).append($arrow.clone()); };

		return this.each(function() {
			var s = this.serial = sf.o.length;
			var o = $.extend({},sf.defaults,op);
			o.$path = $('li.'+o.pathClass,this).slice(0,o.pathLevels).each(function(){
				$(this).addClass([o.hoverClass,c.bcClass].join(' '))
					.filter('li:has(ul)').removeClass(o.pathClass);
			});
			sf.o[s] = sf.op = o;

			$('li:has(ul)',this)[($.fn.hoverIntent && !o.disableHI) ? 'hoverIntent' : 'hover'](over,out).each(function() {
				if (o.autoArrows) addArrow( $('>a:first-child',this) );
			})
			.not('.'+c.bcClass)
				.hideSuperfishUl();

			var $a = $('a',this);
			$a.each(function(i){
				var $li = $a.eq(i).parents('li');
				$a.eq(i).focus(function(){over.call($li);}).blur(function(){out.call($li);});
			});
			o.onInit.call(this);

		}).each(function() {
			var menuClasses = [c.menuClass];
			if (sf.op.dropShadows  && !($.browser.msie && $.browser.version < 7)) menuClasses.push(c.shadowClass);
			$(this).addClass(menuClasses.join(' '));
		});
	};

	var sf = $.fn.superfish;
	sf.o = [];
	sf.op = {};
	sf.IE7fix = function(){
		var o = sf.op;
		if ($.browser.msie && $.browser.version > 6 && o.dropShadows && o.animation.opacity!=undefined)
			this.toggleClass(sf.c.shadowClass+'-off');
		};
	sf.c = {
		bcClass     : 'sf-breadcrumb',
		menuClass   : 'sf-js-enabled',
		anchorClass : 'sf-with-ul',
		arrowClass  : 'sf-sub-indicator',
		shadowClass : 'sf-shadow'
	};
	sf.defaults = {
		hoverClass	: 'sfHover',
		pathClass	: 'overideThisToUse',
		pathLevels	: 1,
		delay		: 800,
		animation	: {opacity:'show'},
		speed		: 'normal',
		autoArrows	: true,
		dropShadows : true,
		disableHI	: false,		// true disables hoverIntent detection
		onInit		: function(){}, // callback functions
		onBeforeShow: function(){},
		onShow		: function(){},
		onHide		: function(){}
	};
	$.fn.extend({
		hideSuperfishUl : function(){
			var o = sf.op,
				not = (o.retainPath===true) ? o.$path : '';
			o.retainPath = false;
			var $ul = $(['li.',o.hoverClass].join(''),this).add(this).not(not).removeClass(o.hoverClass)
					.find('>ul').hide().css('visibility','hidden');
			o.onHide.call($ul);
			return this;
		},
		showSuperfishUl : function(){
			var o = sf.op,
				sh = sf.c.shadowClass+'-off',
				$ul = this.addClass(o.hoverClass)
					.find('>ul:hidden').css('visibility','visible');
			sf.IE7fix.call($ul);
			o.onBeforeShow.call($ul);
			$ul.animate(o.animation,o.speed,function(){ sf.IE7fix.call($ul); o.onShow.call($ul); });
			return this;
		}
	});

})(jQuery);

/*
 * Copyright (c) 2009 Simo Kinnunen.
 * Licensed under the MIT license.
 *
 * @version 1.09i
 */
var Cufon=(function(){var m=function(){return m.replace.apply(null,arguments)};var x=m.DOM={ready:(function(){var C=false,E={loaded:1,complete:1};var B=[],D=function(){if(C){return}C=true;for(var F;F=B.shift();F()){}};if(document.addEventListener){document.addEventListener("DOMContentLoaded",D,false);window.addEventListener("pageshow",D,false)}if(!window.opera&&document.readyState){(function(){E[document.readyState]?D():setTimeout(arguments.callee,10)})()}if(document.readyState&&document.createStyleSheet){(function(){try{document.body.doScroll("left");D()}catch(F){setTimeout(arguments.callee,1)}})()}q(window,"load",D);return function(F){if(!arguments.length){D()}else{C?F():B.push(F)}}})(),root:function(){return document.documentElement||document.body}};var n=m.CSS={Size:function(C,B){this.value=parseFloat(C);this.unit=String(C).match(/[a-z%]*$/)[0]||"px";this.convert=function(D){return D/B*this.value};this.convertFrom=function(D){return D/this.value*B};this.toString=function(){return this.value+this.unit}},addClass:function(C,B){var D=C.className;C.className=D+(D&&" ")+B;return C},color:j(function(C){var B={};B.color=C.replace(/^rgba\((.*?),\s*([\d.]+)\)/,function(E,D,F){B.opacity=parseFloat(F);return"rgb("+D+")"});return B}),fontStretch:j(function(B){if(typeof B=="number"){return B}if(/%$/.test(B)){return parseFloat(B)/100}return{"ultra-condensed":0.5,"extra-condensed":0.625,condensed:0.75,"semi-condensed":0.875,"semi-expanded":1.125,expanded:1.25,"extra-expanded":1.5,"ultra-expanded":2}[B]||1}),getStyle:function(C){var B=document.defaultView;if(B&&B.getComputedStyle){return new a(B.getComputedStyle(C,null))}if(C.currentStyle){return new a(C.currentStyle)}return new a(C.style)},gradient:j(function(F){var G={id:F,type:F.match(/^-([a-z]+)-gradient\(/)[1],stops:[]},C=F.substr(F.indexOf("(")).match(/([\d.]+=)?(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)/ig);for(var E=0,B=C.length,D;E<B;++E){D=C[E].split("=",2).reverse();G.stops.push([D[1]||E/(B-1),D[0]])}return G}),quotedList:j(function(E){var D=[],C=/\s*((["'])([\s\S]*?[^\\])\2|[^,]+)\s*/g,B;while(B=C.exec(E)){D.push(B[3]||B[1])}return D}),recognizesMedia:j(function(G){var E=document.createElement("style"),D,C,B;E.type="text/css";E.media=G;try{E.appendChild(document.createTextNode("/**/"))}catch(F){}C=g("head")[0];C.insertBefore(E,C.firstChild);D=(E.sheet||E.styleSheet);B=D&&!D.disabled;C.removeChild(E);return B}),removeClass:function(D,C){var B=RegExp("(?:^|\\s+)"+C+"(?=\\s|$)","g");D.className=D.className.replace(B,"");return D},supports:function(D,C){var B=document.createElement("span").style;if(B[D]===undefined){return false}B[D]=C;return B[D]===C},textAlign:function(E,D,B,C){if(D.get("textAlign")=="right"){if(B>0){E=" "+E}}else{if(B<C-1){E+=" "}}return E},textShadow:j(function(F){if(F=="none"){return null}var E=[],G={},B,C=0;var D=/(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)|(-?[\d.]+[a-z%]*)|,/ig;while(B=D.exec(F)){if(B[0]==","){E.push(G);G={};C=0}else{if(B[1]){G.color=B[1]}else{G[["offX","offY","blur"][C++]]=B[2]}}}E.push(G);return E}),textTransform:(function(){var B={uppercase:function(C){return C.toUpperCase()},lowercase:function(C){return C.toLowerCase()},capitalize:function(C){return C.replace(/\b./g,function(D){return D.toUpperCase()})}};return function(E,D){var C=B[D.get("textTransform")];return C?C(E):E}})(),whiteSpace:(function(){var D={inline:1,"inline-block":1,"run-in":1};var C=/^\s+/,B=/\s+$/;return function(H,F,G,E){if(E){if(E.nodeName.toLowerCase()=="br"){H=H.replace(C,"")}}if(D[F.get("display")]){return H}if(!G.previousSibling){H=H.replace(C,"")}if(!G.nextSibling){H=H.replace(B,"")}return H}})()};n.ready=(function(){var B=!n.recognizesMedia("all"),E=false;var D=[],H=function(){B=true;for(var K;K=D.shift();K()){}};var I=g("link"),J=g("style");function C(K){return K.disabled||G(K.sheet,K.media||"screen")}function G(M,P){if(!n.recognizesMedia(P||"all")){return true}if(!M||M.disabled){return false}try{var Q=M.cssRules,O;if(Q){search:for(var L=0,K=Q.length;O=Q[L],L<K;++L){switch(O.type){case 2:break;case 3:if(!G(O.styleSheet,O.media.mediaText)){return false}break;default:break search}}}}catch(N){}return true}function F(){if(document.createStyleSheet){return true}var L,K;for(K=0;L=I[K];++K){if(L.rel.toLowerCase()=="stylesheet"&&!C(L)){return false}}for(K=0;L=J[K];++K){if(!C(L)){return false}}return true}x.ready(function(){if(!E){E=n.getStyle(document.body).isUsable()}if(B||(E&&F())){H()}else{setTimeout(arguments.callee,10)}});return function(K){if(B){K()}else{D.push(K)}}})();function s(D){var C=this.face=D.face,B={"\u0020":1,"\u00a0":1,"\u3000":1};this.glyphs=D.glyphs;this.w=D.w;this.baseSize=parseInt(C["units-per-em"],10);this.family=C["font-family"].toLowerCase();this.weight=C["font-weight"];this.style=C["font-style"]||"normal";this.viewBox=(function(){var F=C.bbox.split(/\s+/);var E={minX:parseInt(F[0],10),minY:parseInt(F[1],10),maxX:parseInt(F[2],10),maxY:parseInt(F[3],10)};E.width=E.maxX-E.minX;E.height=E.maxY-E.minY;E.toString=function(){return[this.minX,this.minY,this.width,this.height].join(" ")};return E})();this.ascent=-parseInt(C.ascent,10);this.descent=-parseInt(C.descent,10);this.height=-this.ascent+this.descent;this.spacing=function(L,N,E){var O=this.glyphs,M,K,G,P=[],F=0,J=-1,I=-1,H;while(H=L[++J]){M=O[H]||this.missingGlyph;if(!M){continue}if(K){F-=G=K[H]||0;P[I]-=G}F+=P[++I]=~~(M.w||this.w)+N+(B[H]?E:0);K=M.k}P.total=F;return P}}function f(){var C={},B={oblique:"italic",italic:"oblique"};this.add=function(D){(C[D.style]||(C[D.style]={}))[D.weight]=D};this.get=function(H,I){var G=C[H]||C[B[H]]||C.normal||C.italic||C.oblique;if(!G){return null}I={normal:400,bold:700}[I]||parseInt(I,10);if(G[I]){return G[I]}var E={1:1,99:0}[I%100],K=[],F,D;if(E===undefined){E=I>400}if(I==500){I=400}for(var J in G){if(!k(G,J)){continue}J=parseInt(J,10);if(!F||J<F){F=J}if(!D||J>D){D=J}K.push(J)}if(I<F){I=F}if(I>D){I=D}K.sort(function(M,L){return(E?(M>=I&&L>=I)?M<L:M>L:(M<=I&&L<=I)?M>L:M<L)?-1:1});return G[K[0]]}}function r(){function D(F,G){if(F.contains){return F.contains(G)}return F.compareDocumentPosition(G)&16}function B(G){var F=G.relatedTarget;if(!F||D(this,F)){return}C(this,G.type=="mouseover")}function E(F){C(this,F.type=="mouseenter")}function C(F,G){setTimeout(function(){var H=d.get(F).options;m.replace(F,G?h(H,H.hover):H,true)},10)}this.attach=function(F){if(F.onmouseenter===undefined){q(F,"mouseover",B);q(F,"mouseout",B)}else{q(F,"mouseenter",E);q(F,"mouseleave",E)}}}function u(){var C=[],D={};function B(H){var E=[],G;for(var F=0;G=H[F];++F){E[F]=C[D[G]]}return E}this.add=function(F,E){D[F]=C.push(E)-1};this.repeat=function(){var E=arguments.length?B(arguments):C,F;for(var G=0;F=E[G++];){m.replace(F[0],F[1],true)}}}function A(){var D={},B=0;function C(E){return E.cufid||(E.cufid=++B)}this.get=function(E){var F=C(E);return D[F]||(D[F]={})}}function a(B){var D={},C={};this.extend=function(E){for(var F in E){if(k(E,F)){D[F]=E[F]}}return this};this.get=function(E){return D[E]!=undefined?D[E]:B[E]};this.getSize=function(F,E){return C[F]||(C[F]=new n.Size(this.get(F),E))};this.isUsable=function(){return !!B}}function q(C,B,D){if(C.addEventListener){C.addEventListener(B,D,false)}else{if(C.attachEvent){C.attachEvent("on"+B,function(){return D.call(C,window.event)})}}}function v(C,B){var D=d.get(C);if(D.options){return C}if(B.hover&&B.hoverables[C.nodeName.toLowerCase()]){b.attach(C)}D.options=B;return C}function j(B){var C={};return function(D){if(!k(C,D)){C[D]=B.apply(null,arguments)}return C[D]}}function c(F,E){var B=n.quotedList(E.get("fontFamily").toLowerCase()),D;for(var C=0;D=B[C];++C){if(i[D]){return i[D].get(E.get("fontStyle"),E.get("fontWeight"))}}return null}function g(B){return document.getElementsByTagName(B)}function k(C,B){return C.hasOwnProperty(B)}function h(){var C={},B,F;for(var E=0,D=arguments.length;B=arguments[E],E<D;++E){for(F in B){if(k(B,F)){C[F]=B[F]}}}return C}function o(E,M,C,N,F,D){var K=document.createDocumentFragment(),H;if(M===""){return K}var L=N.separate;var I=M.split(p[L]),B=(L=="words");if(B&&t){if(/^\s/.test(M)){I.unshift("")}if(/\s$/.test(M)){I.push("")}}for(var J=0,G=I.length;J<G;++J){H=z[N.engine](E,B?n.textAlign(I[J],C,J,G):I[J],C,N,F,D,J<G-1);if(H){K.appendChild(H)}}return K}function l(D,M){var C=D.nodeName.toLowerCase();if(M.ignore[C]){return}var E=!M.textless[C];var B=n.getStyle(v(D,M)).extend(M);var F=c(D,B),G,K,I,H,L,J;if(!F){return}for(G=D.firstChild;G;G=I){K=G.nodeType;I=G.nextSibling;if(E&&K==3){if(H){H.appendData(G.data);D.removeChild(G)}else{H=G}if(I){continue}}if(H){D.replaceChild(o(F,n.whiteSpace(H.data,B,H,J),B,M,G,D),H);H=null}if(K==1){if(G.firstChild){if(G.nodeName.toLowerCase()=="cufon"){z[M.engine](F,null,B,M,G,D)}else{arguments.callee(G,M)}}J=G}}}var t=" ".split(/\s+/).length==0;var d=new A();var b=new r();var y=new u();var e=false;var z={},i={},w={autoDetect:false,engine:null,forceHitArea:false,hover:false,hoverables:{a:true},ignore:{applet:1,canvas:1,col:1,colgroup:1,head:1,iframe:1,map:1,optgroup:1,option:1,script:1,select:1,style:1,textarea:1,title:1,pre:1},printable:true,selector:(window.Sizzle||(window.jQuery&&function(B){return jQuery(B)})||(window.dojo&&dojo.query)||(window.Ext&&Ext.query)||(window.YAHOO&&YAHOO.util&&YAHOO.util.Selector&&YAHOO.util.Selector.query)||(window.$$&&function(B){return $$(B)})||(window.$&&function(B){return $(B)})||(document.querySelectorAll&&function(B){return document.querySelectorAll(B)})||g),separate:"words",textless:{dl:1,html:1,ol:1,table:1,tbody:1,thead:1,tfoot:1,tr:1,ul:1},textShadow:"none"};var p={words:/\s/.test("\u00a0")?/[^\S\u00a0]+/:/\s+/,characters:"",none:/^/};m.now=function(){x.ready();return m};m.refresh=function(){y.repeat.apply(y,arguments);return m};m.registerEngine=function(C,B){if(!B){return m}z[C]=B;return m.set("engine",C)};m.registerFont=function(D){if(!D){return m}var B=new s(D),C=B.family;if(!i[C]){i[C]=new f()}i[C].add(B);return m.set("fontFamily",'"'+C+'"')};m.replace=function(D,C,B){C=h(w,C);if(!C.engine){return m}if(!e){n.addClass(x.root(),"cufon-active cufon-loading");n.ready(function(){n.addClass(n.removeClass(x.root(),"cufon-loading"),"cufon-ready")});e=true}if(C.hover){C.forceHitArea=true}if(C.autoDetect){delete C.fontFamily}if(typeof C.textShadow=="string"){C.textShadow=n.textShadow(C.textShadow)}if(typeof C.color=="string"&&/^-/.test(C.color)){C.textGradient=n.gradient(C.color)}else{delete C.textGradient}if(!B){y.add(D,arguments)}if(D.nodeType||typeof D=="string"){D=[D]}n.ready(function(){for(var F=0,E=D.length;F<E;++F){var G=D[F];if(typeof G=="string"){m.replace(C.selector(G),C,true)}else{l(G,C)}}});return m};m.set=function(B,C){w[B]=C;return m};return m})();Cufon.registerEngine("vml",(function(){var e=document.namespaces;if(!e){return}e.add("cvml","urn:schemas-microsoft-com:vml");e=null;var b=document.createElement("cvml:shape");b.style.behavior="url(#default#VML)";if(!b.coordsize){return}b=null;var h=(document.documentMode||0)<8;document.write(('<style type="text/css">cufoncanvas{text-indent:0;}@media screen{cvml\\:shape,cvml\\:rect,cvml\\:fill,cvml\\:shadow{behavior:url(#default#VML);display:block;antialias:true;position:absolute;}cufoncanvas{position:absolute;text-align:left;}cufon{display:inline-block;position:relative;vertical-align:'+(h?"middle":"text-bottom")+";}cufon cufontext{position:absolute;left:-10000in;font-size:1px;}a cufon{cursor:pointer}}@media print{cufon cufoncanvas{display:none;}}</style>").replace(/;/g,"!important;"));function c(i,j){return a(i,/(?:em|ex|%)$|^[a-z-]+$/i.test(j)?"1em":j)}function a(l,m){if(m==="0"){return 0}if(/px$/i.test(m)){return parseFloat(m)}var k=l.style.left,j=l.runtimeStyle.left;l.runtimeStyle.left=l.currentStyle.left;l.style.left=m.replace("%","em");var i=l.style.pixelLeft;l.style.left=k;l.runtimeStyle.left=j;return i}function f(l,k,j,n){var i="computed"+n,m=k[i];if(isNaN(m)){m=k.get(n);k[i]=m=(m=="normal")?0:~~j.convertFrom(a(l,m))}return m}var g={};function d(p){var q=p.id;if(!g[q]){var n=p.stops,o=document.createElement("cvml:fill"),i=[];o.type="gradient";o.angle=180;o.focus="0";o.method="sigma";o.color=n[0][1];for(var m=1,l=n.length-1;m<l;++m){i.push(n[m][0]*100+"% "+n[m][1])}o.colors=i.join(",");o.color2=n[l][1];g[q]=o}return g[q]}return function(ac,G,Y,C,K,ad,W){var n=(G===null);if(n){G=K.alt}var I=ac.viewBox;var p=Y.computedFontSize||(Y.computedFontSize=new Cufon.CSS.Size(c(ad,Y.get("fontSize"))+"px",ac.baseSize));var y,q;if(n){y=K;q=K.firstChild}else{y=document.createElement("cufon");y.className="cufon cufon-vml";y.alt=G;q=document.createElement("cufoncanvas");y.appendChild(q);if(C.printable){var Z=document.createElement("cufontext");Z.appendChild(document.createTextNode(G));y.appendChild(Z)}if(!W){y.appendChild(document.createElement("cvml:shape"))}}var ai=y.style;var R=q.style;var l=p.convert(I.height),af=Math.ceil(l);var V=af/l;var P=V*Cufon.CSS.fontStretch(Y.get("fontStretch"));var U=I.minX,T=I.minY;R.height=af;R.top=Math.round(p.convert(T-ac.ascent));R.left=Math.round(p.convert(U));ai.height=p.convert(ac.height)+"px";var F=Y.get("color");var ag=Cufon.CSS.textTransform(G,Y).split("");var L=ac.spacing(ag,f(ad,Y,p,"letterSpacing"),f(ad,Y,p,"wordSpacing"));if(!L.length){return null}var k=L.total;var x=-U+k+(I.width-L[L.length-1]);var ah=p.convert(x*P),X=Math.round(ah);var O=x+","+I.height,m;var J="r"+O+"ns";var u=C.textGradient&&d(C.textGradient);var o=ac.glyphs,S=0;var H=C.textShadow;var ab=-1,aa=0,w;while(w=ag[++ab]){var D=o[ag[ab]]||ac.missingGlyph,v;if(!D){continue}if(n){v=q.childNodes[aa];while(v.firstChild){v.removeChild(v.firstChild)}}else{v=document.createElement("cvml:shape");q.appendChild(v)}v.stroked="f";v.coordsize=O;v.coordorigin=m=(U-S)+","+T;v.path=(D.d?"m"+D.d+"xe":"")+"m"+m+J;v.fillcolor=F;if(u){v.appendChild(u.cloneNode(false))}var ae=v.style;ae.width=X;ae.height=af;if(H){var s=H[0],r=H[1];var B=Cufon.CSS.color(s.color),z;var N=document.createElement("cvml:shadow");N.on="t";N.color=B.color;N.offset=s.offX+","+s.offY;if(r){z=Cufon.CSS.color(r.color);N.type="double";N.color2=z.color;N.offset2=r.offX+","+r.offY}N.opacity=B.opacity||(z&&z.opacity)||1;v.appendChild(N)}S+=L[aa++]}var M=v.nextSibling,t,A;if(C.forceHitArea){if(!M){M=document.createElement("cvml:rect");M.stroked="f";M.className="cufon-vml-cover";t=document.createElement("cvml:fill");t.opacity=0;M.appendChild(t);q.appendChild(M)}A=M.style;A.width=X;A.height=af}else{if(M){q.removeChild(M)}}ai.width=Math.max(Math.ceil(p.convert(k*P)),0);if(h){var Q=Y.computedYAdjust;if(Q===undefined){var E=Y.get("lineHeight");if(E=="normal"){E="1em"}else{if(!isNaN(E)){E+="em"}}Y.computedYAdjust=Q=0.5*(a(ad,E)-parseFloat(ai.height))}if(Q){ai.marginTop=Math.ceil(Q)+"px";ai.marginBottom=Q+"px"}}return y}})());Cufon.registerEngine("canvas",(function(){var b=document.createElement("canvas");if(!b||!b.getContext||!b.getContext.apply){return}b=null;var a=Cufon.CSS.supports("display","inline-block");var e=!a&&(document.compatMode=="BackCompat"||/frameset|transitional/i.test(document.doctype.publicId));var f=document.createElement("style");f.type="text/css";f.appendChild(document.createTextNode(("cufon{text-indent:0;}@media screen,projection{cufon{display:inline;display:inline-block;position:relative;vertical-align:middle;"+(e?"":"font-size:1px;line-height:1px;")+"}cufon cufontext{display:-moz-inline-box;display:inline-block;width:0;height:0;overflow:hidden;text-indent:-10000in;}"+(a?"cufon canvas{position:relative;}":"cufon canvas{position:absolute;}")+"}@media print{cufon{padding:0;}cufon canvas{display:none;}}").replace(/;/g,"!important;")));document.getElementsByTagName("head")[0].appendChild(f);function d(p,h){var n=0,m=0;var g=[],o=/([mrvxe])([^a-z]*)/g,k;generate:for(var j=0;k=o.exec(p);++j){var l=k[2].split(",");switch(k[1]){case"v":g[j]={m:"bezierCurveTo",a:[n+~~l[0],m+~~l[1],n+~~l[2],m+~~l[3],n+=~~l[4],m+=~~l[5]]};break;case"r":g[j]={m:"lineTo",a:[n+=~~l[0],m+=~~l[1]]};break;case"m":g[j]={m:"moveTo",a:[n=~~l[0],m=~~l[1]]};break;case"x":g[j]={m:"closePath"};break;case"e":break generate}h[g[j].m].apply(h,g[j].a)}return g}function c(m,k){for(var j=0,h=m.length;j<h;++j){var g=m[j];k[g.m].apply(k,g.a)}}return function(V,w,P,t,C,W){var k=(w===null);if(k){w=C.getAttribute("alt")}var A=V.viewBox;var m=P.getSize("fontSize",V.baseSize);var B=0,O=0,N=0,u=0;var z=t.textShadow,L=[];if(z){for(var U=z.length;U--;){var F=z[U];var K=m.convertFrom(parseFloat(F.offX));var I=m.convertFrom(parseFloat(F.offY));L[U]=[K,I];if(I<B){B=I}if(K>O){O=K}if(I>N){N=I}if(K<u){u=K}}}var Z=Cufon.CSS.textTransform(w,P).split("");var E=V.spacing(Z,~~m.convertFrom(parseFloat(P.get("letterSpacing"))||0),~~m.convertFrom(parseFloat(P.get("wordSpacing"))||0));if(!E.length){return null}var h=E.total;O+=A.width-E[E.length-1];u+=A.minX;var s,n;if(k){s=C;n=C.firstChild}else{s=document.createElement("cufon");s.className="cufon cufon-canvas";s.setAttribute("alt",w);n=document.createElement("canvas");s.appendChild(n);if(t.printable){var S=document.createElement("cufontext");S.appendChild(document.createTextNode(w));s.appendChild(S)}}var aa=s.style;var H=n.style;var j=m.convert(A.height);var Y=Math.ceil(j);var M=Y/j;var G=M*Cufon.CSS.fontStretch(P.get("fontStretch"));var J=h*G;var Q=Math.ceil(m.convert(J+O-u));var o=Math.ceil(m.convert(A.height-B+N));n.width=Q;n.height=o;H.width=Q+"px";H.height=o+"px";B+=A.minY;H.top=Math.round(m.convert(B-V.ascent))+"px";H.left=Math.round(m.convert(u))+"px";var r=Math.max(Math.ceil(m.convert(J)),0)+"px";if(a){aa.width=r;aa.height=m.convert(V.height)+"px"}else{aa.paddingLeft=r;aa.paddingBottom=(m.convert(V.height)-1)+"px"}var X=n.getContext("2d"),D=j/A.height;X.scale(D,D*M);X.translate(-u,-B);X.save();function T(){var x=V.glyphs,ab,l=-1,g=-1,y;X.scale(G,1);while(y=Z[++l]){var ab=x[Z[l]]||V.missingGlyph;if(!ab){continue}if(ab.d){X.beginPath();if(ab.code){c(ab.code,X)}else{ab.code=d("m"+ab.d,X)}X.fill()}X.translate(E[++g],0)}X.restore()}if(z){for(var U=z.length;U--;){var F=z[U];X.save();X.fillStyle=F.color;X.translate.apply(X,L[U]);T()}}var q=t.textGradient;if(q){var v=q.stops,p=X.createLinearGradient(0,A.minY,0,A.maxY);for(var U=0,R=v.length;U<R;++U){p.addColorStop.apply(p,v[U])}X.fillStyle=p}else{X.fillStyle=P.get("color")}T();return s}})());

/*!
 * The following copyright notice may not be removed under any circumstances.
 *
 * Copyright:
 * Copyright (c) 20.07.2010, Johan Aakerlund (aajohan@gmail.com), with Reserved
 * Font Name "Comfortaa". This Font Software is licensed under the SIL Open Font
 * License, Version 1.1. http://scripts.sil.org/OFL
 *
 * Manufacturer:
 * Johan Aakerlund
 *
 * Designer:
 * Johan Aakerlund - aajohan
 *
 * License information:
 * http://scripts.sil.org/OFL
 */
Cufon.registerFont({"w":178,"face":{"font-family":"Comfortaa","font-weight":400,"font-stretch":"normal","units-per-em":"360","panose-1":"2 15 6 3 7 0 0 6 0 3","ascent":"288","descent":"-72","bbox":"-14 -322.128 335.035 77.4317","underline-thickness":"26.3672","underline-position":"-24.9609","unicode-range":"U+0020-U+00FF"},"glyphs":{" ":{"w":89},"\u00a0":{"w":89},"!":{"d":"25,-242v3,-16,28,-15,28,1r0,168v-1,17,-29,14,-28,0r0,-169xm19,-18v0,-26,37,-20,37,-2v0,12,-5,20,-19,20v-9,0,-18,-6,-18,-18","w":89},"\"":{"d":"14,-260v0,-19,28,-16,27,-2v-4,41,0,56,-14,56v-13,-1,-13,-38,-13,-54xm57,-262v2,-12,25,-18,27,1v-6,42,0,52,-14,55v-14,-1,-9,-40,-13,-56","w":97},"#":{"d":"147,-170v16,-61,5,-75,28,-82v9,3,13,7,12,14v0,3,-4,26,-13,68v18,2,34,-7,37,13v-2,20,-24,11,-43,13r-6,34v17,0,42,-3,40,13v-3,20,-26,10,-46,12v-18,60,-3,78,-29,85v-8,-2,-12,-6,-12,-12r15,-73r-38,0v-5,4,-14,130,-42,73r14,-73v-17,-1,-31,6,-34,-13v-1,-14,24,-12,40,-12r7,-34v-16,0,-39,2,-37,-13v3,-20,22,-11,42,-13v17,-62,4,-78,28,-81v7,0,11,4,12,13r-13,68r38,0xm104,-144r-7,34r38,0r7,-34r-38,0","w":234},"$":{"d":"143,-224v-4,32,-28,1,-44,-5r0,81v67,17,74,126,0,144v1,15,0,36,-13,35v-28,-1,3,-36,-29,-34v-21,-8,-38,-18,-45,-36v6,-21,20,-15,32,2v10,7,20,9,28,10r0,-101v-64,-14,-65,-113,0,-126v0,-16,-2,-39,15,-36v13,-2,13,21,12,35v11,0,39,16,44,31xm72,-224v-32,14,-31,57,0,72r0,-72xm99,-118r0,90v38,-20,38,-69,0,-90"},"%":{"d":"18,-189v0,-32,23,-61,65,-63v31,-1,62,30,62,62v0,31,-24,63,-64,64v-32,1,-62,-26,-63,-63xm219,-250v10,-6,23,2,21,12v0,3,-9,15,-25,36r-151,199v-9,7,-23,0,-21,-11v0,-4,7,-13,19,-28xm90,-226v-25,-6,-46,10,-46,38v0,20,13,36,39,36v19,0,36,-14,36,-37v0,-18,-10,-32,-29,-37xm139,-61v0,-34,28,-64,63,-66v31,-2,63,25,63,65v0,31,-26,61,-64,62v-30,2,-62,-26,-62,-61xm165,-70v-6,23,10,42,38,44v41,2,51,-69,6,-75v-25,-3,-38,7,-44,31","w":283},"&":{"d":"36,-187v-9,-32,14,-64,53,-65v26,-1,51,20,53,55v1,20,-18,39,-34,55r57,57v12,-10,19,-27,36,-31v24,9,14,24,-10,43r-7,8v13,16,33,25,41,47v-16,33,-45,-15,-61,-28v-38,39,-36,42,-73,46v-33,3,-65,-29,-68,-69v-2,-26,23,-52,45,-73v-22,-20,-32,-35,-32,-45xm94,-224v-17,-4,-32,7,-32,27v0,9,9,21,26,35v29,-24,38,-44,6,-62xm88,-122v-27,26,-37,34,-37,55v0,19,13,36,39,39v19,2,40,-23,55,-37","w":256},"'":{"d":"16,-258v0,-19,29,-15,28,-2v-3,41,-2,56,-14,56v-13,0,-10,-39,-14,-54","w":60},"(":{"d":"120,-269v-41,99,-52,225,1,329v-9,23,-23,13,-33,-11v-42,-106,-41,-223,9,-325v5,-11,24,-3,23,7","w":133},")":{"d":"12,-265v7,-25,21,-19,32,8v42,107,40,227,-9,327v-10,6,-21,3,-23,-10v45,-99,52,-220,0,-325","w":133},"*":{"d":"92,-274v26,4,3,31,5,45v11,-8,43,-31,45,-3v1,16,-27,11,-45,11v12,9,47,32,16,44v-16,2,-15,-27,-22,-37v-5,13,-5,36,-21,37v-36,-12,11,-35,15,-44v-18,0,-47,6,-45,-13v4,-28,32,0,47,4v-3,-16,-20,-40,5,-44","w":180},"+":{"d":"77,-144v2,-20,-7,-52,15,-52v19,0,12,33,13,52v20,1,55,-6,53,14v-2,24,-30,11,-53,14v-1,20,6,55,-14,53v-24,-2,-11,-32,-14,-53v-22,-4,-53,12,-53,-15v0,-18,34,-12,53,-13"},",":{"d":"45,0v-35,-4,-34,-50,0,-50v26,0,27,19,28,39v1,25,-18,45,-43,53v-13,-4,-12,-21,6,-22v6,-4,14,-12,17,-22","w":97},"-":{"d":"12,-101v8,-26,55,-13,84,-13v7,0,11,5,13,14v-7,29,-56,8,-84,14v-8,0,-12,-5,-13,-15","w":117},"\u00ad":{"d":"12,-101v8,-26,55,-13,84,-13v7,0,11,5,13,14v-7,29,-56,8,-84,14v-8,0,-12,-5,-13,-15","w":117},".":{"d":"23,-24v-3,-27,44,-34,48,-2v1,14,-8,26,-24,26v-13,0,-22,-8,-24,-24","w":97},"\/":{"d":"98,-260v8,-12,31,-5,26,10v-57,164,-92,251,-98,266v-9,10,-23,7,-25,-8v0,-3,32,-93,97,-268","w":135},"0":{"d":"80,0v-86,1,-99,-144,-63,-215v14,-27,37,-38,61,-38v83,0,101,141,63,216v-13,26,-36,37,-61,37xm79,-227v-43,0,-56,60,-55,105v1,46,12,95,55,97v39,2,55,-47,55,-102v0,-42,-13,-100,-55,-100","w":173},"1":{"d":"7,-228v-5,-17,34,-19,49,-25v8,2,12,6,12,12r0,228v0,17,-26,16,-26,2r0,-211v-21,6,-30,13,-35,-6","w":99},"2":{"d":"0,-177v-2,-36,34,-75,76,-75v36,0,77,34,76,75v0,23,-13,44,-34,67r-74,84r99,0v7,0,11,5,12,13v-1,8,-5,13,-12,13r-129,0v-19,-6,-13,-16,0,-31r103,-118v22,-33,2,-76,-42,-77v-26,0,-48,19,-49,52v-4,15,-26,8,-26,-3","w":171},"3":{"d":"15,-186v-2,-33,25,-64,63,-66v52,-3,89,78,39,113v63,40,34,137,-42,139v-37,1,-73,-32,-75,-76v0,-6,5,-10,14,-12v7,0,12,4,12,13v0,23,21,47,51,49v47,3,70,-79,17,-96v-11,-3,-29,-3,-28,-17v0,-8,5,-12,17,-12v13,0,33,-19,33,-38v0,-18,-16,-37,-38,-37v-22,-5,-38,27,-40,46v-7,10,-24,2,-23,-6","w":167},"4":{"d":"118,-246v9,-10,27,-2,23,13r0,132v18,1,36,-6,39,13v2,14,-21,14,-39,13v-5,26,12,69,-13,75v-26,-6,-8,-50,-13,-75r-105,0v-13,-5,-13,-16,-3,-24v71,-92,106,-142,111,-147xm40,-101r75,0r0,-97","w":193},"5":{"d":"28,-67v12,56,99,52,102,-11v3,-46,-48,-58,-102,-52v-6,0,-10,-4,-12,-11r0,-98v-1,-6,9,-14,18,-11r102,0v16,1,18,26,-1,26r-92,0r0,67v68,-9,109,20,115,79v4,37,-35,78,-80,78v-38,0,-77,-32,-78,-78v7,-19,30,-16,28,11"},"6":{"d":"77,0v-59,4,-104,-77,-58,-126r71,-123v11,-6,19,-4,22,10v-7,21,-38,64,-49,89v48,-10,85,29,89,74v2,36,-35,73,-75,76xm28,-89v-7,35,12,61,48,63v25,2,48,-18,49,-50v1,-25,-17,-49,-50,-49v-22,0,-37,12,-47,36","w":167},"7":{"d":"18,-251r128,0v16,4,15,13,6,27r-125,221v-10,7,-23,0,-22,-12v-1,-1,44,-82,118,-210r-102,0v-18,-1,-17,-25,-3,-26","w":169},"8":{"d":"37,-142v-43,-32,-16,-111,42,-111v53,0,89,79,39,114v63,40,32,139,-44,139v-34,0,-74,-35,-74,-76v0,-26,12,-48,37,-66xm79,-152v20,1,37,-14,37,-37v0,-19,-12,-37,-38,-37v-45,0,-52,73,1,74xm124,-63v11,-33,-12,-61,-48,-63v-27,-2,-48,19,-50,50v-2,26,19,50,51,50v22,0,39,-13,47,-37","w":170},"9":{"d":"0,-177v-2,-37,32,-75,76,-75v59,0,93,74,52,130r-88,119v-9,7,-25,-1,-22,-10v6,-21,51,-67,62,-89v-41,7,-78,-32,-80,-75xm76,-226v-27,-2,-49,19,-50,52v-1,21,20,46,50,46v25,1,48,-20,48,-49v0,-25,-17,-47,-48,-49","w":170},":":{"d":"30,-146v0,-29,38,-27,43,-3v3,15,-5,23,-22,25v-15,-2,-21,-10,-21,-22xm52,-6v-31,-1,-25,-47,0,-44v25,0,30,41,0,44","w":97},";":{"d":"25,-141v0,-29,39,-29,44,-3v3,14,-6,22,-22,25v-15,-2,-22,-10,-22,-22xm46,-45v20,-4,28,9,28,34v0,22,-15,40,-43,46v-14,-1,-10,-21,1,-20v11,2,27,-15,20,-17v-28,-2,-32,-38,-6,-43","w":97},"\u037e":{"d":"25,-141v0,-29,39,-29,44,-3v3,14,-6,22,-22,25v-15,-2,-22,-10,-22,-22xm46,-45v20,-4,28,9,28,34v0,22,-15,40,-43,46v-14,-1,-10,-21,1,-20v11,2,27,-15,20,-17v-28,-2,-32,-38,-6,-43","w":97},"<":{"d":"144,-194v26,6,16,27,-8,36v-1,1,-25,17,-75,47v2,2,33,22,94,60v8,9,4,24,-10,24v-37,-18,-83,-51,-120,-72v-11,-14,-2,-20,15,-30v68,-41,101,-65,104,-65"},"=":{"d":"37,-146r108,0v7,0,11,5,13,14v-2,9,-6,13,-13,13r-108,0v-8,0,-12,-5,-13,-15v2,-8,6,-12,13,-12xm38,-88r106,0v19,0,16,28,1,27r-109,0v-16,-2,-16,-27,2,-27"},">":{"d":"123,-114v-68,-46,-91,-47,-99,-69v2,-9,6,-14,14,-14v22,15,136,71,125,85v0,7,-7,10,-17,16v-69,43,-104,66,-106,66v-26,-7,-15,-20,7,-35"},"?":{"d":"10,-177v0,-34,36,-75,77,-75v63,0,109,96,46,137v-20,13,-31,27,-31,49v0,18,-26,14,-26,2v-1,-34,15,-51,44,-74v36,-28,14,-87,-35,-88v-26,-1,-47,23,-50,54v-6,13,-25,6,-25,-5xm87,1v-24,-2,-22,-36,2,-36v8,0,17,6,17,19v-2,11,-9,17,-19,17","w":172},"@":{"d":"-1,-110v0,-84,79,-166,172,-166v82,0,166,79,164,167v-2,59,-23,97,-78,97v-27,0,-33,-8,-29,-31v-60,62,-163,21,-166,-68v-2,-47,42,-94,96,-96v47,-3,97,41,97,99r0,67v34,6,52,-30,52,-71v0,-67,-68,-137,-139,-137v-71,0,-141,60,-141,141v0,102,129,183,223,115v9,2,14,6,14,14v4,14,-60,38,-100,38v-85,0,-165,-82,-165,-169xm158,-179v-34,-1,-67,28,-69,69v-1,35,27,69,72,69v31,0,66,-30,66,-70v0,-34,-27,-66,-69,-68","w":354},"A":{"d":"86,-244v14,-14,22,-5,30,17r80,215v-6,19,-27,14,-30,-10r-29,-78r-78,0r-36,96v-9,8,-24,2,-23,-9xm70,-126r57,0r-29,-75","w":209,"k":{"\u00dd":31,"t":26,"j":33,"Y":31,"W":20,"V":33,"T":31}},"B":{"d":"113,-144v69,33,51,144,-31,144v-24,0,-72,10,-72,-13r0,-226v3,-24,38,-6,59,-13v47,-3,86,69,44,108xm36,-151v37,2,68,-2,68,-38v0,-29,-30,-41,-68,-36r0,74xm36,-26v51,3,92,-5,94,-50v2,-41,-43,-54,-94,-49r0,99","w":175,"k":{"j":40}},"C":{"d":"11,-126v0,-88,116,-167,199,-103v9,32,-21,18,-35,11v-69,-32,-132,25,-137,92v-5,71,89,130,158,81v11,0,17,5,16,14v3,12,-46,31,-77,31v-61,0,-124,-57,-124,-126","w":239,"k":{"\u00ff":11,"\u00fd":14,"y":20,"v":15,"j":45,"f":16}},"D":{"d":"192,-125v0,60,-56,128,-124,125v-21,-1,-57,8,-58,-13r0,-227v2,-22,34,-11,57,-13v62,-5,125,57,125,128xm166,-127v0,-60,-50,-108,-130,-100r0,201v75,9,130,-29,130,-101","w":210,"k":{"j":49,"T":25}},"E":{"d":"24,-253r136,0v8,0,13,4,14,14v-2,8,-7,12,-15,12r-122,0r0,90r90,0v13,0,17,23,1,26r-91,0r0,85r125,0v6,0,11,5,12,14v-2,8,-6,12,-12,12r-138,0v-8,-2,-13,-6,-13,-13r0,-227v1,-8,6,-13,13,-13","w":192,"k":{"\u00fd":19,"y":21,"v":16,"j":32}},"F":{"d":"22,-253r137,0v8,0,12,4,13,14v-2,8,-6,12,-14,12r-122,0r0,90r89,0v13,0,17,23,1,26r-90,0r0,98v-1,18,-26,15,-26,0r0,-227v1,-8,5,-13,12,-13","w":181,"k":{"\u00c6":50,"\u00c5":35,"\u00c4":32,"\u00c3":29,"\u00c2":32,"\u00c1":31,"\u00c0":32,"z":11,"j":39,"J":26,"A":32}},"G":{"d":"207,-221v-9,33,-45,-13,-80,-4v-42,-3,-93,49,-93,100v0,65,81,126,150,85r0,-60v-22,-3,-60,9,-61,-14v6,-24,49,-12,74,-12v7,0,12,4,12,12r0,74v-4,36,-51,38,-77,40v-61,5,-125,-56,-125,-126v0,-87,115,-166,196,-104v2,3,4,6,4,9","w":227,"k":{"j":35}},"H":{"d":"8,-237v-2,-21,25,-17,26,-4r0,105r125,0r0,-103v1,-9,5,-14,14,-13v8,1,12,6,12,12r0,229v0,6,-5,9,-13,11v-8,-2,-13,-6,-13,-13r0,-98r-125,0r0,99v-1,15,-26,17,-26,-1r0,-224","w":208,"k":{"j":28}},"I":{"d":"11,-242v-2,-19,27,-9,43,-13v19,1,16,28,1,27r-3,0r0,202v10,-1,13,2,16,13v-2,19,-26,11,-45,13v-18,-2,-13,-30,3,-26r0,-202v-10,1,-14,-4,-15,-14","w":94,"k":{"j":34}},"J":{"d":"87,-26v28,0,53,-19,53,-53r0,-162v3,-17,26,-16,26,1r0,162v5,69,-108,111,-146,41v-9,-16,-22,-51,2,-54v8,0,13,6,13,20v0,19,28,45,52,45","w":179,"k":{"j":25}},"K":{"d":"11,-239v1,-18,26,-15,26,-1r0,115v90,-85,113,-123,130,-124v19,7,12,18,-2,32r-82,82r94,116v-3,26,-18,19,-35,-2r-78,-95r-27,28r0,76v-1,15,-26,17,-26,-1r0,-226","w":195,"k":{"\u00ff":28,"\u00fd":25,"\u00c7":18,"y":12,"v":21,"j":32}},"L":{"d":"8,-237v-2,-21,25,-17,26,-4r0,215r108,0v7,0,12,5,13,14v-2,8,-7,12,-13,12r-121,0v-7,0,-11,-4,-13,-13r0,-224","w":175,"k":{"\u00ff":27,"\u00fd":23,"\u00dd":49,"\u00d6":33,"\u00d5":27,"\u00d4":32,"\u00d3":28,"\u00d2":29,"\u00c7":25,"y":25,"v":42,"j":39,"Y":54,"W":40,"V":49,"T":56,"Q":25,"O":29,"G":27,"C":29}},"M":{"d":"11,-237v3,-23,24,-18,28,3r84,188r92,-202v9,-8,23,-4,23,11r0,224v-1,18,-26,16,-26,1r-1,-165v-50,112,-75,169,-77,172v-15,12,-20,0,-30,-23r-68,-149r0,165v-1,15,-25,17,-25,-1r0,-224","w":261,"k":{"j":33}},"N":{"d":"7,-237v2,-21,23,-19,28,-1v5,3,60,78,147,187r0,-189v2,-17,25,-16,26,1r0,226v-7,21,-20,12,-37,-10r-138,-177r0,187v-1,14,-25,18,-26,-1r0,-223","w":232,"k":{"j":31}},"O":{"d":"7,-127v0,-61,58,-125,126,-125v61,0,126,55,126,126v0,62,-56,126,-128,126v-62,0,-124,-54,-124,-127xm133,-226v-50,-2,-100,42,-100,101v0,49,45,99,102,99v48,0,98,-46,98,-100v0,-50,-44,-99,-100,-100","w":280,"k":{"j":45,"T":19}},"P":{"d":"150,-182v1,55,-48,85,-116,76r0,94v-1,13,-26,18,-26,-1r0,-225v3,-30,46,-11,72,-15v31,-5,69,33,70,71xm124,-180v2,-39,-42,-52,-90,-47r0,95v49,3,87,-1,90,-48","w":169,"k":{"\u00c6":56,"\u00c5":41,"\u00c4":36,"\u00c3":37,"\u00c2":44,"\u00c1":43,"\u00c0":34,"j":43,"J":31,"A":40}},"Q":{"d":"8,-127v-2,-61,58,-125,126,-125v92,0,168,122,99,205v19,19,28,28,28,34v0,7,-4,11,-13,13v-5,2,-24,-20,-33,-29v-81,68,-204,10,-207,-98xm134,-226v-50,-1,-100,44,-100,101v0,73,100,133,163,77v-19,-23,-30,-27,-30,-38v9,-21,21,-13,36,6v5,4,7,10,13,13v46,-67,1,-158,-82,-159","w":281,"k":{"j":29,"T":24}},"R":{"d":"19,-252v67,-6,117,5,120,70v1,24,-15,48,-40,60v40,69,60,105,60,107v1,9,-4,14,-13,15v-6,0,-12,-9,-20,-23r-55,-93r-38,0r0,104v-1,15,-26,17,-26,-1r0,-224v1,-10,6,-15,12,-15xm112,-176v9,-41,-31,-56,-79,-51r0,85v41,1,70,3,79,-34","w":171,"k":{"j":26}},"S":{"d":"135,-220v-7,38,-32,-13,-57,-7v-40,-2,-52,66,-6,77v32,-2,73,41,73,76v0,68,-100,103,-138,41v-3,-9,4,-19,12,-18v13,2,32,33,54,26v21,1,46,-21,46,-52v0,-30,-35,-48,-65,-53v-63,-29,-44,-123,26,-123v22,0,43,11,55,33","w":162,"k":{"j":31}},"T":{"d":"18,-252r164,0v17,3,17,24,-3,25r-66,0r0,215v-1,15,-26,17,-26,-1r0,-214v-26,-4,-75,11,-80,-13v2,-8,5,-12,11,-12","w":215,"k":{"\u00ff":28,"\u00fd":30,"\u00fc":21,"\u00fb":31,"\u00fa":25,"\u00f9":14,"\u00f8":27,"\u00f6":27,"\u00f4":31,"\u00f3":28,"\u00f2":31,"\u00f0":31,"\u00ef":3,"\u00eb":42,"\u00ea":31,"\u00e9":42,"\u00e8":38,"\u00e7":49,"\u00e6":49,"\u00e5":20,"\u00e4":42,"\u00e2":31,"\u00e1":42,"\u00e0":38,"\u00d8":31,"\u00d6":31,"\u00d5":28,"\u00d4":27,"\u00d3":31,"\u00d2":27,"\u00c7":17,"\u00c6":49,"\u00c5":34,"\u00c4":31,"\u00c3":34,"\u00c2":28,"\u00c1":27,"\u00c0":30,"z":16,"y":26,"x":24,"w":20,"v":27,"u":20,"s":24,"r":17,"q":45,"p":43,"o":42,"n":32,"m":36,"j":47,"g":43,"f":33,"e":50,"d":42,"c":54,"a":49,"Q":29,"O":22,"J":47,"G":28,"C":33,"A":57}},"U":{"d":"97,0v-47,0,-90,-38,-90,-94r0,-143v-2,-21,25,-17,26,-4v5,86,-26,215,62,215v32,1,63,-25,63,-66r0,-147v1,-9,5,-14,14,-13v8,1,12,6,12,12r0,155v3,39,-42,85,-87,85","w":205,"k":{"j":33}},"V":{"d":"20,-253v7,0,11,10,18,28r66,173r73,-196v9,-9,22,-7,24,8r-84,227v-10,23,-22,13,-32,-13r-79,-215v0,-7,5,-12,14,-12","w":219,"k":{"\u00e7":23,"\u00c6":42,"\u00c5":41,"\u00c4":41,"\u00c3":41,"\u00c2":41,"\u00c1":41,"\u00c0":41,"j":47,"J":38,"A":41}},"W":{"d":"7,-240v6,-19,27,-15,28,8r51,171v34,-121,53,-183,55,-187v13,-10,24,-3,26,19v4,7,19,69,50,168r54,-185v6,-11,26,-5,23,7r-67,234v-14,12,-21,1,-27,-20r-49,-168r-54,187v-13,13,-22,6,-28,-19v-34,-131,-59,-202,-62,-215","w":312,"k":{"\u00c6":29,"\u00c5":33,"\u00c4":24,"\u00c3":28,"\u00c2":32,"\u00c1":28,"\u00c0":28,"j":39,"A":27}},"X":{"d":"6,-236v-4,-18,20,-24,26,-7r75,96r80,-104v11,-4,19,-1,21,12v-21,35,-60,78,-85,113v28,38,60,72,85,113v-4,17,-22,17,-28,0r-73,-93r-81,103v-8,7,-23,-1,-21,-12v13,-23,65,-83,85,-112v-55,-70,-83,-106,-84,-109","w":228,"k":{"\u00ff":20,"\u00fd":22,"\u00d5":19,"\u00d4":19,"\u00d2":19,"\u00c7":20,"y":18,"j":23,"G":25}},"Y":{"d":"96,-149v57,-70,53,-101,79,-103v21,12,8,21,-12,50r-54,80r0,107v0,20,-22,20,-26,4r0,-109v-9,-20,-61,-88,-76,-119v4,-18,22,-17,28,0","w":202,"k":{"\u00f8":28,"\u00f6":23,"\u00f4":23,"\u00f3":28,"\u00f2":28,"\u00f0":28,"\u00eb":23,"\u00ea":23,"\u00e9":28,"\u00e8":28,"\u00e7":30,"\u00e6":28,"\u00e5":17,"\u00e4":23,"\u00e2":23,"\u00e1":28,"\u00e0":28,"\u00c6":28,"\u00c5":28,"\u00c4":28,"\u00c3":28,"\u00c2":28,"\u00c1":28,"\u00c0":34,"s":23,"q":32,"p":30,"o":34,"j":35,"g":29,"e":28,"d":28,"c":28,"a":30,"J":34,"A":42}},"Z":{"d":"17,-253r180,0v17,6,12,17,-3,36r-148,191r150,0v18,0,15,27,0,26r-177,0v-7,0,-12,-5,-13,-14v41,-62,114,-149,162,-213r-149,0v-18,-1,-14,-26,-2,-26","w":223,"k":{"j":20}},"[":{"d":"43,-262v4,-31,49,-8,79,-16v16,4,19,22,2,28r-53,0r0,297v22,3,63,-9,64,14v-4,24,-53,9,-78,13v-9,-2,-14,-6,-14,-14r0,-322","w":136},"\\":{"d":"0,-258v1,-9,5,-14,14,-14v9,0,13,11,20,30v62,173,65,172,90,244v-11,24,-24,16,-35,-15v-51,-150,-85,-231,-89,-245","w":121},"]":{"d":"5,-264v0,-25,51,-8,78,-14v8,2,13,6,13,13r0,327v-5,22,-53,12,-78,12v-15,0,-19,-25,0,-28v15,3,34,0,51,1r0,-297v-22,-2,-64,8,-64,-14","w":133},"^":{"d":"8,-164v24,-32,49,-131,82,-68v25,48,42,58,41,70v0,7,-5,11,-15,12v-13,-2,-35,-49,-47,-63r-39,60v-11,6,-19,3,-22,-11","w":165},"_":{"d":"13,5r156,0v19,0,15,28,0,27r-156,0v-7,0,-12,-5,-13,-15v2,-8,7,-12,13,-12","w":168,"k":{"_":7}},"`":{"d":"90,-183v-10,-2,-81,-54,-40,-65v17,4,55,47,53,52v-2,9,-6,13,-13,13","w":132},"a":{"d":"7,-91v-2,-42,39,-88,90,-89v44,-2,90,37,90,92r0,76v1,13,-25,18,-25,2r0,-18v-55,59,-152,20,-155,-63xm97,-154v-31,-2,-63,25,-64,65v-1,32,25,63,67,63v30,0,62,-28,62,-65v0,-32,-27,-62,-65,-63","w":210,"k":{"\u00dd":52,"j":46,"Y":54,"T":62}},"b":{"d":"106,0v-49,3,-93,-40,-93,-96r0,-144v0,-6,5,-11,14,-12v8,2,12,6,12,12r0,86v54,-62,156,-12,156,63v0,44,-39,88,-89,91xm105,-156v-35,-2,-64,25,-66,66v-1,32,24,64,67,64v31,0,63,-25,63,-66v0,-31,-25,-63,-64,-64","w":216,"k":{"\u00dd":45,"j":35,"Y":52,"V":23,"T":49}},"c":{"d":"6,-90v0,-70,99,-123,153,-64v5,9,-1,21,-11,20v-8,-2,-34,-25,-54,-20v-31,-2,-59,26,-62,65v-3,49,70,86,110,45v10,-2,18,0,19,12v4,10,-39,32,-68,32v-40,0,-87,-44,-87,-90","w":182,"k":{"\u00dd":26,"j":30,"Y":26,"T":49}},"d":{"d":"6,-91v0,-71,100,-125,156,-64r-1,-85v2,-17,26,-14,26,-1r1,154v0,43,-47,94,-94,87v-40,4,-88,-44,-88,-91xm98,-156v-33,-2,-65,25,-66,66v-1,32,24,64,67,64v31,0,63,-25,63,-66v0,-31,-25,-63,-64,-64","w":210,"k":{"j":27}},"e":{"d":"6,-90v-2,-44,39,-89,89,-90v47,-2,92,38,91,95v-2,9,-5,13,-12,13r-139,0v9,38,58,58,101,36v9,2,11,6,11,14v0,11,-21,20,-52,22v-45,2,-87,-38,-89,-90xm159,-98v0,-23,-34,-62,-65,-55v-27,-2,-58,24,-61,55r126,0","w":204,"k":{"\u00dd":38,"j":40,"Y":43,"T":56}},"f":{"d":"50,-177v-3,-48,21,-78,71,-76v13,1,17,26,-2,26v-31,0,-45,15,-43,50v20,3,50,-10,51,14v0,18,-33,11,-51,12r1,139v0,13,-23,17,-27,1v3,-44,0,-94,1,-140v-19,-2,-45,8,-46,-14v0,-13,26,-13,45,-12","w":152,"k":{"\u00c6":24,"\u00c5":14,"\u00c4":14,"\u00c3":14,"\u00c2":14,"\u00c1":14,"\u00c0":22,"j":43,"J":31,"A":22}},"g":{"d":"7,-90v0,-44,40,-89,89,-89v50,0,89,47,89,107r0,79v2,28,-51,66,-89,66v-36,0,-75,-22,-87,-59v4,-15,24,-15,29,5v36,53,136,34,122,-46v-56,58,-153,13,-153,-63xm98,-154v-35,-2,-64,24,-66,65v-1,32,24,63,66,63v30,0,61,-25,62,-65v1,-30,-24,-61,-62,-63","w":212,"k":{"\u00dd":45,"Y":45,"T":50}},"h":{"d":"93,-155v-32,0,-54,22,-54,67r0,76v-1,14,-26,17,-26,0r0,-227v0,-17,26,-13,26,-2r0,81v50,-48,135,-12,135,55r0,93v-1,15,-25,17,-26,0v-3,-66,16,-143,-55,-143","w":197,"k":{"\u00dd":46,"j":35,"Y":46,"T":54}},"i":{"d":"18,-213v2,-19,29,-14,26,2v-1,13,-25,17,-26,-2xm18,-166v-2,-20,25,-16,26,-4r0,158v-1,14,-25,18,-26,-1r0,-153","w":75,"k":{"j":30}},"j":{"d":"77,-224v18,2,17,25,-1,26v-16,-4,-17,-23,1,-26xm77,-180v8,2,13,5,13,12v-7,101,35,240,-77,240v-15,0,-19,-26,1,-26v29,1,50,-20,50,-57r0,-157v0,-7,4,-11,13,-12","w":115},"k":{"d":"165,-168v-5,17,-84,58,-75,56r75,94v-4,28,-20,17,-37,-5r-60,-75r-28,18r0,68v-1,14,-26,17,-26,0r0,-228v0,-18,25,-13,26,-2r0,132v68,-42,94,-68,113,-72v7,0,11,5,12,14","w":185,"k":{"j":27,"T":44}},"l":{"d":"11,-236v-1,-20,25,-17,26,-4r0,214v24,-9,33,23,13,26v-18,-1,-39,6,-39,-13r0,-223","w":83,"k":{"j":27}},"m":{"d":"83,-151v-59,0,-46,80,-47,139v0,15,-25,17,-25,-1r0,-149v-2,-20,25,-17,25,-4r0,7v34,-29,78,-23,106,13v8,-15,30,-29,57,-31v35,-2,72,30,72,70r0,96v0,6,-5,9,-13,11v-8,-1,-12,-5,-12,-12v-5,-60,23,-138,-49,-139v-20,-1,-43,16,-43,43r0,95v0,19,-25,15,-25,1v-1,-60,12,-139,-46,-139","w":294,"k":{"\u00dd":40,"j":29,"Y":39,"T":46}},"n":{"d":"102,-154v-36,-1,-63,24,-63,73r0,69v-1,15,-25,17,-25,-1r0,-152v-2,-20,25,-17,25,-4r0,15v54,-56,148,-13,149,59r0,84v0,6,-4,10,-13,11v-8,-2,-12,-5,-12,-12v2,-70,7,-140,-61,-142","w":210,"k":{"\u00dd":39,"j":22,"Y":33,"T":39}},"o":{"d":"7,-89v0,-44,39,-90,89,-90v46,0,90,45,90,90v0,46,-38,89,-93,89v-39,0,-86,-44,-86,-89xm95,-153v-31,0,-61,25,-62,65v-1,32,26,61,65,62v31,1,61,-25,61,-65v0,-31,-28,-62,-64,-62","w":205,"k":{"\u00dd":40,"j":35,"Y":40,"T":45}},"p":{"d":"189,-90v0,69,-99,124,-153,62r0,90v-2,13,-26,16,-26,-2v0,-109,-28,-232,89,-239v45,-2,90,44,90,89xm99,-153v-32,0,-61,25,-63,64v-1,32,27,61,65,62v31,1,62,-25,62,-65v1,-30,-29,-61,-64,-61","w":206,"k":{"\u00dd":40,"j":32,"Y":40,"T":52}},"q":{"d":"8,-89v-1,-44,42,-89,89,-89v47,0,88,41,88,95r0,144v-1,19,-25,14,-25,2r0,-90v-54,60,-150,13,-152,-62xm160,-91v0,-79,-123,-81,-126,0v-1,36,25,64,65,65v31,1,61,-26,61,-65","w":207,"k":{"\u00dd":43,"Y":43,"V":21,"T":46}},"r":{"d":"136,-149v-50,-19,-93,6,-93,59r0,78v-1,15,-26,17,-26,-1r0,-153v-1,-19,26,-17,26,-4r0,15v19,-17,40,-26,62,-26v13,0,43,2,43,20v-1,8,-5,12,-12,12","w":162,"k":{"\u00c6":42,"j":30,"Z":35,"T":39,"J":41}},"s":{"d":"20,-91v-45,-35,11,-88,58,-88v30,0,61,14,72,47v-2,17,-24,15,-31,-3v-27,-28,-75,-21,-89,15v0,6,7,9,20,10v75,23,91,5,100,53v5,24,-38,58,-76,57v-26,-1,-61,-13,-69,-48v0,-6,4,-10,14,-11v12,4,35,38,58,32v18,0,39,-10,47,-30v0,-6,-4,-8,-12,-10v-58,-12,-89,-21,-92,-24","w":170,"k":{"\u00dd":36,"j":33,"Y":45,"T":41}},"t":{"d":"98,0v-37,4,-62,-16,-62,-53r0,-99v-15,2,-36,2,-34,-12v2,-17,17,-11,34,-12v4,-23,-11,-67,14,-68v25,5,7,45,12,68v19,3,42,-10,44,12v1,17,-25,12,-44,12v9,46,-28,132,38,127v6,0,10,4,11,13v-1,8,-6,12,-13,12","w":123,"k":{"j":25}},"u":{"d":"162,-25v-58,54,-152,16,-150,-69r0,-71v-2,-21,25,-17,26,-4r0,70v-1,46,23,71,62,73v32,2,62,-25,62,-65r0,-76v1,-20,26,-15,26,-1r0,157v0,6,-5,10,-14,11v-13,-2,-12,-11,-12,-25","w":208,"k":{"j":27,"T":44}},"v":{"d":"5,-166v6,-24,20,-16,31,7r57,116v41,-87,62,-132,65,-135v9,-7,23,1,22,10v-9,25,-60,127,-78,164v-16,11,-20,0,-30,-21v-42,-88,-65,-134,-67,-141","w":198,"k":{"\u00c6":35,"\u00c5":31,"\u00c4":28,"\u00c3":26,"\u00c2":27,"\u00c1":26,"\u00c0":27,"j":38,"Z":42,"T":44,"A":28}},"w":{"d":"165,-54v34,-80,25,-116,49,-123v9,2,13,6,13,13r-51,159v-14,11,-21,2,-28,-20r-32,-97r-38,116v-8,10,-20,7,-24,-6r-48,-152v2,-9,6,-13,13,-13v8,0,12,10,17,26r32,97v33,-87,25,-117,49,-123v8,0,11,7,15,21","w":248,"k":{"\u00dd":26,"j":39,"Y":23,"T":58}},"x":{"d":"80,-68v-42,48,-44,65,-61,68v-23,-12,-10,-20,12,-46r33,-42v-18,-26,-42,-47,-57,-76v2,-9,6,-13,13,-13v18,8,57,67,60,69v4,-4,21,-26,53,-66v8,-5,26,0,21,12v-5,14,-45,56,-58,74v39,50,59,66,58,76v-3,16,-23,15,-30,-3","w":170,"k":{"j":27,"T":37}},"y":{"d":"72,-53v41,-87,38,-118,60,-125v8,2,12,6,12,12r-92,223v-7,7,-24,1,-21,-10v0,-2,10,-25,28,-69r-58,-143v9,-21,21,-11,30,12v25,64,40,97,41,100","w":160,"k":{"\u00dd":10,"\u00c6":21,"\u00c5":15,"\u00c4":15,"\u00c3":15,"\u00c2":15,"\u00c1":15,"\u00c0":15,"j":32,"Z":21,"Y":17,"X":14,"T":54,"A":22}},"z":{"d":"7,-165v2,-11,9,-14,18,-12r118,-1v20,9,12,17,-3,35r-94,118r97,0v17,2,16,25,-1,25r-123,0v-7,0,-11,-5,-12,-14v24,-38,78,-99,108,-139r-97,1v-7,-3,-11,-7,-11,-13","k":{"\u00dd":26,"j":32,"Y":11,"T":53}},"{":{"d":"83,-241v-2,-29,25,-38,62,-38v17,0,20,24,2,26v-16,1,-38,-6,-38,13v0,42,9,93,-8,123v20,27,9,84,9,126v0,24,49,-3,49,25v0,14,-23,12,-38,12v-53,1,-37,-88,-37,-140v0,-19,-38,-2,-38,-24v0,-22,36,-3,37,-22r0,-101"},"|":{"d":"76,-271v1,-19,26,-17,26,-1r0,335v-3,14,-26,15,-26,-3r0,-331"},"}":{"d":"19,-264v0,-19,22,-12,39,-13v52,-2,36,84,36,135v0,20,39,1,36,26v-2,19,-42,-1,-37,28v-6,60,29,131,-62,131v-16,0,-15,-26,-1,-26v15,0,37,5,37,-11v0,-42,-9,-96,9,-124v-17,-30,-8,-81,-8,-123v0,-25,-49,4,-49,-23"},"~":{"d":"33,-128v0,-29,52,-27,74,-7v11,2,19,-1,28,-4v11,2,17,8,17,17v-2,23,-54,29,-75,7v-10,-5,-19,2,-29,3v-10,-2,-15,-8,-15,-16"},"\u00a1":{"d":"38,-217v2,-24,32,-18,34,0v0,20,-33,24,-34,0xm43,-176v0,-6,3,-11,12,-11v8,0,12,5,12,11r0,164v-1,8,-5,11,-13,11v-7,-1,-11,-5,-11,-11r0,-164","w":118},"\u00a2":{"d":"104,-176v22,-50,10,-64,34,-68v9,1,11,6,11,14r-20,60v21,10,31,18,31,26v-6,26,-22,4,-40,-2r-41,118v27,10,47,-6,70,-17v6,0,10,5,11,13v1,14,-57,44,-90,28v-17,41,-10,52,-28,56v-28,-15,-6,-18,6,-67v-74,-47,-38,-164,56,-161xm95,-151v-49,-6,-86,79,-38,111","w":194},"\u00a3":{"d":"43,-136v-38,-57,-20,-123,50,-123v21,0,45,11,55,35v-14,35,-32,-13,-59,-8v-45,9,-49,50,-15,96v20,1,55,-6,55,13v0,22,-28,10,-48,13v5,29,-7,51,-22,82r69,0v1,1,9,-24,18,-20v23,10,14,16,1,42v-28,10,-74,1,-109,4v-7,0,-11,-4,-13,-13v0,-2,8,-23,26,-61v5,-12,4,-20,4,-34v0,0,-42,3,-41,-13v2,-16,14,-13,29,-13","w":166},"\u00a4":{"d":"33,-169v4,-23,22,-17,34,-1v16,-9,35,-8,50,0v11,-18,32,-19,34,0v0,4,-5,11,-14,20v8,18,8,31,0,50v17,11,19,29,2,33v-10,2,-10,-6,-23,-14v-17,9,-30,9,-50,0v-11,17,-31,19,-33,0v0,-5,5,-11,14,-19v-8,-17,-8,-34,0,-51v-9,-8,-14,-13,-14,-18xm95,-150v-34,0,-38,43,-7,49v17,3,27,-7,28,-27v-3,-15,-10,-22,-21,-22"},"\u00a5":{"d":"12,-205v1,-15,54,-20,56,2v0,6,-4,10,-12,12v28,40,40,69,53,78r52,-79v-13,-5,-5,-25,6,-24v24,-5,54,8,28,26r-19,28v24,-6,40,18,16,25r-33,0r-19,28v22,2,62,-8,64,13v-4,24,-55,9,-82,13r0,71v1,13,-24,17,-28,2v0,-21,4,-54,-1,-73v-27,-4,-75,10,-81,-13v2,-21,43,-11,65,-13v-20,-35,-16,-25,-53,-28v-17,-1,-16,-25,3,-25r14,0v-17,-32,-21,-24,-29,-43","w":221},"\u00a6":{"d":"50,-270v0,-18,27,-17,27,-2r0,120v-1,14,-27,17,-27,-1r0,-117xm50,-54v-1,-21,27,-18,27,-4r0,122v-2,13,-26,16,-27,-3r0,-115","w":135},"\u00a7":{"d":"57,-135v-53,-36,-29,-120,39,-118v19,0,41,8,52,30v-10,33,-31,-14,-55,-8v-22,0,-41,13,-42,43v0,18,10,32,31,41v65,3,84,69,39,105v52,34,29,117,-37,117v-21,0,-43,-9,-54,-31v9,-29,34,14,54,9v22,1,39,-15,43,-41v5,-33,-39,-45,-65,-52v-38,-22,-39,-72,-5,-95xm95,-122v-21,-6,-39,9,-40,33v-1,17,14,33,37,33v15,0,30,-11,31,-33v0,-17,-9,-28,-28,-33"},"\u00a8":{"d":"37,-216v1,-20,29,-15,28,0v-1,20,-29,16,-28,0xm117,-216v1,-20,29,-15,28,0v-1,20,-29,16,-28,0","w":180},"\u00a9":{"d":"19,-126v0,-62,57,-127,127,-127v62,0,127,55,127,127v0,63,-54,124,-128,126v-62,2,-126,-59,-126,-126xm150,-234v-59,-2,-110,46,-112,109v-1,52,48,105,108,107v54,2,108,-48,108,-109v0,-51,-45,-105,-104,-107xm56,-126v-8,-72,114,-130,157,-56v-9,33,-41,-14,-66,-8v-32,-1,-62,25,-64,67v-2,48,70,86,111,43v10,-3,19,2,19,13v0,8,-12,19,-39,28v-63,21,-111,-26,-118,-87","w":294},"\u00aa":{"d":"86,-169v-30,27,-73,10,-77,-32v-4,-44,74,-65,88,-15v1,15,11,69,-11,56r0,-9xm23,-209v-11,39,53,55,62,15v4,-20,-8,-39,-31,-39v-14,0,-26,8,-31,24","w":113},"\u00ab":{"d":"64,-115v20,-23,22,-35,33,-22v4,8,-19,26,-36,51v25,28,37,44,37,47v-1,6,-4,7,-10,7v-2,-3,-26,-21,-45,-55v0,-3,7,-12,21,-28xm134,-31v-12,-5,-53,-55,-48,-58v29,-32,33,-50,49,-53v4,2,6,5,6,8r-37,48v24,30,37,38,37,48v-1,5,-3,7,-7,7","w":165},"\u00ac":{"d":"26,-132r125,0v26,5,13,48,13,74v0,6,-5,10,-14,12v-24,-4,-11,-36,-14,-59r-108,0v-19,0,-16,-27,-2,-27"},"\u00ae":{"d":"18,-127v0,-63,58,-127,128,-127v63,0,127,56,127,127v0,63,-54,127,-129,127v-62,0,-126,-60,-126,-127xm149,-235v-59,-2,-110,46,-112,109v-2,52,49,105,109,107v54,2,108,-47,108,-108v0,-51,-47,-106,-105,-108xm108,-214v47,-4,82,4,82,48v0,17,-10,31,-28,41r42,75v-9,14,-16,6,-25,-10r-35,-61r-26,0r0,70v0,12,-18,9,-18,1r0,-154v1,-6,3,-10,8,-10xm134,-138v47,5,50,-55,8,-58r-24,0r0,58r16,0","w":294},"\u00af":{"d":"-2,-312r148,0v18,0,14,27,1,27r-149,0v-7,0,-11,-5,-12,-15v2,-8,6,-12,12,-12","w":141},"\u00b0":{"d":"91,-204v0,-17,-14,-32,-31,-32v-17,0,-32,14,-32,32v0,18,14,31,32,31v17,0,31,-14,31,-31xm11,-205v0,-27,23,-48,49,-48v26,0,48,23,48,48v0,26,-23,49,-49,49v-27,0,-48,-22,-48,-49","w":118},"\u00b1":{"d":"79,-156v1,-22,-7,-53,15,-53v16,0,12,33,12,53v20,2,54,-7,53,15v-1,19,-32,10,-53,12v-3,22,9,52,-14,54v-19,2,-12,-32,-13,-54v-20,-2,-54,9,-54,-14v1,-18,34,-12,54,-13xm25,-50v-1,-9,9,-17,21,-14r100,-1v15,3,19,23,2,28r-111,0v-8,-3,-12,-7,-12,-13"},"\u00b2":{"d":"53,-235v-1,-17,16,-35,36,-35v31,-1,51,45,20,66r-35,40v17,3,45,-7,52,6v-1,4,-3,6,-6,6r-60,0v-9,-3,-7,-8,0,-14v16,-24,43,-38,52,-69v0,-13,-8,-22,-23,-23v-12,0,-23,9,-23,25v-2,7,-14,4,-13,-2"},"\u00b3":{"d":"58,-240v-1,-17,12,-30,30,-31v25,-3,43,36,19,54v29,19,16,65,-20,66v-17,1,-35,-15,-36,-37v1,-5,12,-8,12,1v0,26,45,32,48,1v2,-20,-20,-21,-29,-31v4,-10,24,-6,24,-24v0,-9,-7,-17,-18,-18v-17,-5,-16,36,-30,19"},"\u00b4":{"d":"39,-195v-4,-10,45,-53,52,-54v8,0,14,6,14,16v0,5,-12,16,-33,36v-10,10,-13,16,-21,15v-8,-1,-12,-6,-12,-13","w":156},"\u00b5":{"d":"108,-25v31,2,62,-25,62,-65r0,-76v1,-18,25,-14,25,-1r0,156v0,6,-4,11,-13,12v-14,-1,-10,-14,-13,-25v-36,34,-86,34,-123,-1r0,89v-2,13,-25,16,-25,-2r0,-226v-2,-20,25,-17,25,-4r0,70v-1,47,24,70,62,73","w":207},"\u00b6":{"d":"12,-192v-1,-29,23,-60,59,-60r81,0v18,2,15,25,-1,26r-2,0r0,213v0,19,-26,15,-26,1r0,-214r-24,0r0,213v-1,8,-6,13,-14,13v-8,-2,-12,-6,-12,-13v-2,-38,4,-84,-2,-118v-28,1,-58,-26,-59,-61","w":180},"\u00b7":{"d":"27,-111v0,-22,39,-29,42,-1v1,12,-7,22,-21,22v-11,0,-21,-7,-21,-21","w":89},"\u2219":{"d":"27,-111v0,-22,39,-29,42,-1v1,12,-7,22,-21,22v-11,0,-21,-7,-21,-21","w":89},"\u00b8":{"d":"102,44v2,-11,-19,-8,-18,-19v1,-15,-4,-30,12,-32v12,3,13,8,12,21v34,20,16,71,-29,62v-20,8,-29,-20,-10,-23v12,-1,34,4,33,-9","w":180},"\u00b9":{"d":"72,-263v-2,-8,16,-8,23,-12v4,1,6,3,6,6r0,107v0,8,-13,7,-13,1r0,-100v-10,3,-13,7,-16,-2"},"\u00ba":{"d":"31,-216v0,-27,11,-55,34,-55v24,0,34,30,34,58v0,23,-10,51,-34,51v-23,0,-34,-28,-34,-54xm65,-260v-33,2,-34,85,0,87v17,1,24,-21,24,-44v0,-18,-6,-44,-24,-43","w":126},"\u00bb":{"d":"85,-30v-17,-15,12,-21,32,-56v-24,-28,-37,-44,-37,-47v0,-6,4,-8,8,-8v9,5,53,54,47,58v-27,30,-33,50,-50,53xm45,-140v6,-2,51,56,47,55v0,3,-12,18,-36,46v-6,13,-17,13,-20,2v0,-7,30,-38,38,-49v-24,-30,-37,-37,-37,-47v0,-4,3,-6,8,-7","w":165},"\u00bc":{"d":"201,-251v8,-5,22,-1,21,11v-41,62,-63,83,-180,237v-9,7,-24,0,-21,-12v0,-3,9,-15,26,-36v95,-124,146,-191,154,-200xm28,-238v-1,-7,29,-21,36,-8r0,131v-3,8,-11,10,-15,2r0,-120v-8,2,-21,4,-21,-5xm196,-142v5,-7,12,-4,15,3v-2,25,0,54,-1,80v11,1,23,-4,23,9v-3,9,-12,7,-23,7v2,17,1,59,-15,35r0,-35r-59,0v-5,-1,-8,-4,-7,-10xm195,-114v-16,17,-27,37,-42,55r42,0r0,-55","w":258},"\u00bd":{"d":"199,-250v7,-7,22,-2,21,11v-41,62,-63,83,-180,236v-9,7,-24,0,-21,-12v0,-3,9,-15,26,-36v95,-124,146,-190,154,-199xm27,-237v-2,-8,28,-21,35,-8r0,130v-3,9,-11,11,-15,2r0,-120v-7,2,-20,6,-20,-4xm147,-9v1,-12,83,-75,70,-94v-5,-31,-45,-33,-54,-4v2,15,-11,19,-16,7v-1,-22,15,-41,42,-43v23,-1,45,15,44,46v-1,24,-45,60,-60,82v20,4,57,-10,62,8v-1,4,-3,6,-7,6r-73,0v-4,0,-7,-3,-8,-8","w":262},"\u00be":{"d":"56,-252v35,-12,60,40,31,64v34,23,21,79,-26,79v-21,1,-40,-16,-42,-44v4,-8,17,-9,17,8v9,33,54,25,55,-8v0,-13,-8,-22,-23,-27v-8,0,-12,-2,-12,-8v6,-14,29,-3,29,-31v0,-21,-38,-25,-42,-1v3,13,-14,14,-15,4v-1,-18,8,-29,28,-36xm216,-249v9,-5,20,-1,21,11v-41,62,-62,82,-179,235v-9,7,-24,0,-21,-12v0,-3,8,-14,25,-35v95,-123,146,-190,154,-199xm211,-141v5,-7,12,-4,15,3v-2,25,0,54,-1,80v11,1,22,-4,23,8v-3,9,-12,7,-23,7v2,17,1,59,-15,35r0,-35r-59,0v-5,-1,-8,-4,-7,-10xm210,-113v-16,17,-27,37,-42,55r42,0r0,-55","w":270},"\u00bf":{"d":"60,-171v2,-26,34,-25,37,0v-2,23,-35,23,-37,0xm81,62v-38,0,-77,-33,-76,-76v0,-29,14,-52,43,-69v12,-11,18,-26,18,-46v7,-12,25,-7,25,7v0,30,-16,50,-43,70v-37,27,-16,88,33,88v28,0,47,-19,50,-54v7,-13,25,-5,25,6v0,35,-34,74,-75,74","w":171},"\u00c0":{"d":"79,-287v-13,-8,-8,-28,6,-27v7,-1,54,47,22,52v-10,2,-13,-7,-28,-25xm87,-246v13,-15,21,-3,29,18r82,216v-8,20,-27,14,-30,-11r-30,-77r-78,0r-37,96v-9,9,-23,1,-23,-9xm99,-202v-12,23,-19,51,-29,76v19,-1,41,2,58,-1","w":214,"k":{"\u00ff":11,"\u00fd":22,"\u00dd":39,"v":24,"j":35,"Y":43,"W":21,"V":43,"T":37}},"\u00c1":{"d":"76,-274v-1,-2,20,-37,34,-39v9,3,14,6,13,14v-2,10,-38,63,-47,25xm87,-245v13,-15,21,-3,29,18r81,215v-7,19,-26,14,-30,-10r-30,-78r-77,0r-37,96v-9,9,-23,1,-23,-9xm99,-201v-12,23,-19,51,-29,75v18,-1,41,2,57,-1","w":213,"k":{"\u00ff":9,"\u00fd":11,"\u00dd":35,"j":36,"Y":42,"W":28,"V":35,"T":43}},"\u00c2":{"d":"83,-302v20,-27,45,13,51,30v-7,21,-23,12,-35,-7v-13,20,-27,28,-36,6v0,-4,7,-12,20,-29xm87,-245v13,-15,21,-3,29,18r81,215v-7,19,-26,14,-30,-10r-30,-78r-77,0r-37,96v-9,9,-23,1,-23,-9xm99,-201v-12,23,-19,51,-29,75v18,-1,41,2,57,-1","w":213,"k":{"\u00ff":9,"\u00fd":11,"\u00dd":35,"j":19,"Y":35,"W":21,"V":35,"T":38}},"\u00c3":{"d":"52,-281v4,-20,41,-21,61,-4v14,-2,33,-8,33,10v-4,20,-43,21,-61,3v-14,3,-32,7,-33,-9xm87,-245v13,-15,21,-3,29,18r81,215v-7,19,-26,14,-30,-10r-30,-78r-77,0r-37,96v-9,9,-23,1,-23,-9xm99,-201v-12,23,-19,51,-29,75v18,-1,41,2,57,-1","w":213,"k":{"\u00ff":10,"\u00fd":12,"\u00dd":36,"j":19,"Y":36,"W":14,"V":36,"T":36}},"\u00c4":{"d":"73,-270v-17,-2,-18,-26,1,-26v17,2,16,25,-1,26xm123,-270v-18,-2,-13,-28,2,-26v13,1,17,25,-2,26xm87,-245v13,-15,21,-3,29,18r81,215v-7,19,-26,14,-30,-10r-30,-78r-77,0r-37,96v-9,9,-23,1,-23,-9xm99,-201v-12,23,-19,51,-29,75v18,-1,41,2,57,-1","w":215,"k":{"\u00ff":12,"\u00fd":13,"\u00dd":37,"v":28,"j":28,"Y":37,"W":33,"V":37,"T":41}},"\u00c5":{"d":"107,-257v-21,7,-40,-10,-42,-33v0,-17,13,-32,35,-32v15,0,31,11,31,34v0,14,-7,26,-24,31xm86,-289v1,19,27,15,25,-1v-1,-16,-25,-14,-25,1xm87,-246v14,-13,21,-3,29,18r81,216v-6,19,-27,14,-30,-10r-30,-78r-77,0r-37,96v-9,9,-23,1,-23,-9xm99,-202v-12,23,-19,51,-29,76v18,-1,41,2,57,-1","w":214,"k":{"\u00ff":15,"\u00fd":16,"\u00dd":36,"v":29,"j":34,"Y":43,"W":32,"V":40,"T":39}},"\u00c6":{"d":"129,-248v29,-10,77,-1,113,-4v5,0,9,4,11,12v-2,9,-6,14,-13,14r-88,0r0,99v26,5,77,-13,80,15v0,7,-4,11,-12,11r-68,0r0,75r88,0v15,0,19,26,0,26r-101,0v-7,0,-11,-4,-13,-13r0,-88r-49,0r-54,97v-9,8,-22,4,-23,-10xm91,-127r35,0r0,-61","w":275,"k":{"j":36}},"\u00c7":{"d":"2,-128v0,-87,116,-165,194,-100v8,7,0,23,-9,21v-6,-1,-47,-22,-62,-19v-47,-3,-97,46,-97,98v0,69,89,129,155,80v11,0,17,4,17,13v3,11,-31,27,-64,30r0,13v41,26,14,76,-41,67v-16,-3,-12,-25,0,-25v14,-1,36,4,36,-10v0,-10,-20,-9,-20,-20r0,-25v-58,-5,-109,-66,-109,-123","w":245,"k":{"\u00ff":29,"\u00fd":36,"\u00ed":9,"\u00d6":16,"\u00d5":16,"\u00d4":16,"\u00d3":24,"\u00d2":16,"\u00d0":10,"\u00cf":13,"\u00ce":17,"\u00cd":18,"\u00cc":13,"\u00c7":18,"y":36,"w":21,"v":44,"t":23,"j":37,"f":27,"Q":16,"O":16,"G":24,"C":16}},"\u00c8":{"d":"58,-295v-12,-7,-9,-29,6,-27v7,-1,55,47,21,52v-10,1,-12,-7,-27,-25xm13,-252r136,0v8,0,12,4,13,14v-2,8,-7,12,-15,12r-121,0r0,90r89,-1v13,0,16,23,1,27v-28,-2,-60,0,-90,-1r0,85r125,0v6,0,10,5,11,14v-2,8,-6,12,-12,12r-137,0v-8,-2,-13,-6,-13,-13r0,-226v1,-8,6,-13,13,-13","w":182,"k":{"\u00fd":14,"y":13,"v":10,"j":32}},"\u00c9":{"d":"98,-308v-1,7,-40,65,-48,24v0,-3,6,-12,20,-28v6,-15,28,-10,28,4xm13,-252r136,0v8,0,12,4,13,14v-2,8,-7,12,-15,12r-121,0r0,90r89,-1v13,0,16,23,1,27v-28,-2,-60,0,-90,-1r0,85r125,0v6,0,10,5,11,14v-2,8,-6,12,-12,12r-137,0v-8,-2,-13,-6,-13,-13r0,-226v1,-8,6,-13,13,-13","k":{"\u00fd":9,"y":9,"j":32}},"\u00ca":{"d":"75,-313v19,-8,40,27,43,39v-8,23,-22,12,-36,-8v-13,20,-26,30,-35,8v-1,-11,8,-15,28,-39xm13,-252r136,0v8,0,12,4,13,14v-2,8,-7,12,-15,12r-121,0r0,90r89,-1v13,0,16,23,1,27v-28,-2,-60,0,-90,-1r0,85r125,0v6,0,10,5,11,14v-2,8,-6,12,-12,12r-137,0v-8,-2,-13,-6,-13,-13r0,-226v1,-8,6,-13,13,-13","k":{"\u00fd":9,"y":9,"j":31}},"\u00cb":{"d":"54,-274v-17,-2,-16,-26,2,-26v17,2,16,25,-2,26xm92,-286v0,-18,25,-20,26,0v0,6,-4,10,-13,12v-8,-1,-13,-5,-13,-12xm13,-252r136,0v8,0,12,4,13,14v-2,8,-7,12,-15,12r-121,0r0,90r89,-1v13,0,16,23,1,27v-28,-2,-60,0,-90,-1r0,85r125,0v6,0,10,5,11,14v-2,8,-6,12,-12,12r-137,0v-8,-2,-13,-6,-13,-13r0,-226v1,-8,6,-13,13,-13","w":180,"k":{"\u00fd":12,"y":15,"j":32}},"\u00cc":{"d":"59,-267v-12,-4,-57,-45,-21,-53v9,0,54,47,21,53xm19,-239v-1,-17,27,-10,43,-13v19,1,16,28,1,27r-3,0r0,199v10,-1,13,3,16,13v-1,20,-53,20,-57,0v3,-10,6,-14,16,-13r0,-199v-10,1,-14,-4,-16,-14","w":115,"k":{"j":50}},"\u00cd":{"d":"80,-308v-1,7,-40,67,-48,24v0,-3,7,-12,21,-28v6,-15,28,-8,27,4xm25,-240v-1,-15,26,-12,43,-12v20,0,14,29,-2,26r0,200v10,-1,12,3,15,13v-2,19,-25,12,-44,13v-18,-2,-13,-29,3,-26r0,-200v-10,1,-14,-4,-15,-14","w":115,"k":{"j":35}},"\u00ce":{"d":"18,-274v-1,-4,20,-42,37,-39v8,-2,56,47,20,51v-6,1,-15,-9,-22,-20v-10,13,-15,20,-23,20v-8,-1,-12,-5,-12,-12xm25,-240v0,-13,27,-13,44,-12v19,2,14,29,-2,26r0,200v10,-1,12,3,15,13v-1,19,-26,13,-44,13v-18,0,-14,-26,-1,-26r4,0r0,-200v-10,1,-16,-4,-16,-14","w":115,"k":{"j":36}},"\u00cf":{"d":"27,-270v-19,-1,-14,-29,1,-26v17,3,16,23,-1,26xm77,-270v-17,-2,-18,-26,1,-26v17,2,16,25,-1,26xm25,-239v-2,-17,27,-10,43,-13v19,2,14,30,-2,27r0,199v10,-1,12,3,15,13v-1,19,-26,12,-44,13v-18,-2,-13,-29,3,-26r0,-199v-10,1,-14,-4,-15,-14","w":115,"k":{"j":40}},"\u00d0":{"d":"208,-125v0,75,-69,139,-169,125v-6,0,-10,-4,-12,-12r0,-103v-24,6,-40,-20,-14,-26r14,0r0,-97v3,-23,32,-11,56,-13v62,-5,125,57,125,126xm182,-126v0,-60,-48,-107,-130,-100r0,85v22,3,62,-9,62,14v-5,23,-40,8,-62,12r0,89v76,8,130,-28,130,-100","w":224,"k":{"j":31}},"\u00d1":{"d":"53,-282v2,-21,41,-21,60,-4v13,-2,35,-9,33,10v-2,19,-42,21,-60,4v-12,-1,-35,7,-33,-10xm0,-239v3,-18,21,-17,28,-1r148,190r0,-190v2,-17,25,-16,26,1r0,226v-7,22,-20,12,-34,-6r-142,-181r0,188v-1,15,-26,17,-26,0r0,-227","w":226,"k":{"j":32}},"\u00d2":{"d":"102,-308v7,-19,20,-14,33,4v9,12,15,18,15,22v-8,22,-23,14,-35,-6v-8,-8,-13,-15,-13,-20xm0,-126v0,-62,58,-125,126,-125v60,0,125,56,125,126v0,61,-56,125,-127,125v-61,0,-124,-53,-124,-126xm126,-225v-50,-2,-100,44,-100,101v0,49,45,98,101,98v49,0,98,-45,98,-100v0,-50,-43,-98,-99,-99","w":267,"k":{"j":28,"T":24}},"\u00d3":{"d":"150,-308v0,0,-39,65,-47,25v0,-4,6,-13,19,-27v7,-17,27,-12,28,2xm0,-126v0,-62,58,-126,126,-126v60,0,126,57,126,127v0,62,-57,125,-128,125v-61,0,-124,-53,-124,-126xm126,-226v-51,-2,-100,44,-100,102v0,49,45,98,102,98v48,0,98,-46,98,-100v0,-50,-44,-98,-100,-100","w":269,"k":{"j":30,"T":23}},"\u00d4":{"d":"110,-308v20,-27,44,13,50,30v-7,24,-21,11,-35,-7v-13,21,-28,30,-36,6v0,-4,9,-13,21,-29xm0,-126v0,-62,58,-125,126,-125v60,0,125,56,125,126v0,61,-56,125,-127,125v-61,0,-124,-53,-124,-126xm126,-225v-50,-2,-100,44,-100,101v0,49,45,98,101,98v49,0,98,-45,98,-100v0,-50,-43,-98,-99,-99","w":267,"k":{"j":33,"T":19}},"\u00d5":{"d":"78,-294v6,-38,56,3,80,-9v9,2,13,6,13,13v-2,20,-42,23,-59,5v-13,-2,-33,8,-34,-9xm0,-126v0,-62,58,-125,126,-125v60,0,125,56,125,126v0,61,-56,125,-127,125v-61,0,-124,-53,-124,-126xm126,-225v-50,-2,-100,44,-100,101v0,49,45,98,101,98v49,0,98,-45,98,-100v0,-50,-43,-98,-99,-99","w":268,"k":{"j":30,"T":24}},"\u00d6":{"d":"75,-289v1,-13,25,-17,26,2v-2,21,-29,15,-26,-2xm150,-289v1,-13,25,-17,26,2v-2,21,-30,15,-26,-2xm0,-126v0,-62,58,-126,126,-126v60,0,126,57,126,127v0,62,-57,125,-128,125v-61,0,-124,-53,-124,-126xm126,-226v-51,-2,-100,44,-100,102v0,49,45,98,102,98v48,0,98,-46,98,-100v0,-50,-44,-98,-100,-100","w":270,"k":{"\u00dd":17,"j":34,"Y":19,"T":26}},"\u00d7":{"d":"123,-165v37,6,18,30,-8,53v21,21,28,25,29,36v-12,36,-35,2,-53,-13v-20,20,-25,30,-38,29v-34,-13,3,-39,15,-53v-21,-24,-30,-25,-29,-37v11,-34,37,-4,52,14v19,-19,29,-29,32,-29"},"\u00d8":{"d":"29,-45v-69,-80,-6,-205,96,-206v31,0,61,12,87,35v19,-19,25,-28,33,-27v21,9,13,21,-6,36r-11,10v60,83,-3,197,-104,197v-27,0,-53,-9,-77,-27v-23,21,-23,26,-35,27v-20,-8,-13,-22,10,-38v0,-1,3,-4,7,-7xm193,-199v-64,-58,-167,-12,-167,75v0,23,7,43,22,61xm66,-45v82,65,204,-40,143,-134","w":274,"k":{"j":31}},"\u00d9":{"d":"99,-268v-7,1,-57,-44,-21,-52v6,-1,57,45,21,52xm90,0v-48,0,-91,-38,-90,-94r0,-144v0,-18,26,-15,26,-2r0,141v-1,46,23,71,62,73v31,2,62,-25,62,-65r0,-147v1,-18,26,-15,26,-1r0,154v3,39,-41,85,-86,85","w":193,"k":{"j":30}},"\u00da":{"d":"65,-280v-3,-7,38,-64,47,-26v0,7,-39,60,-47,26xm90,0v-48,0,-91,-38,-90,-94r0,-144v0,-18,26,-15,26,-2r0,141v-1,46,23,71,62,73v31,2,62,-25,62,-65r0,-147v1,-18,26,-15,26,-1r0,154v3,39,-41,85,-86,85","w":194,"k":{"j":28}},"\u00db":{"d":"126,-277v-8,26,-25,7,-36,-6v-16,16,-9,19,-24,19v-22,-11,-9,-21,12,-45v11,-13,26,-7,38,15v7,7,10,13,10,17xm90,0v-47,0,-90,-38,-90,-94r0,-145v0,-18,26,-14,26,-2v5,86,-26,215,62,215v32,1,63,-25,63,-66r0,-147v1,-9,5,-14,14,-13v8,1,12,6,12,12r0,155v3,39,-42,85,-87,85","w":197,"k":{"j":31}},"\u00dc":{"d":"63,-271v-17,-2,-18,-26,1,-26v17,2,16,25,-1,26xm100,-283v0,-11,6,-15,15,-14v13,1,17,25,-2,26v-8,-2,-13,-6,-13,-12xm90,0v-47,0,-90,-38,-90,-94r0,-145v0,-18,26,-14,26,-2v5,86,-26,215,62,215v32,1,63,-25,63,-66r0,-147v1,-9,5,-14,14,-13v8,1,12,6,12,12r0,155v3,39,-42,85,-87,85","w":198,"k":{"j":33}},"\u00dd":{"d":"119,-303v0,7,-39,66,-48,25v0,-3,7,-13,21,-29v6,-14,28,-9,27,4xm89,-149v55,-73,53,-99,78,-103v22,11,9,21,-11,50r-54,80r0,107v0,20,-22,20,-26,4r0,-109v-9,-20,-61,-88,-76,-119v3,-18,22,-17,28,0","w":194,"k":{"\u00f8":32,"\u00f6":28,"\u00f4":25,"\u00f3":31,"\u00f2":32,"\u00f0":29,"\u00eb":26,"\u00ea":26,"\u00e9":36,"\u00e8":31,"\u00e7":33,"\u00e6":35,"\u00e5":22,"\u00e4":28,"\u00e2":29,"\u00e1":33,"\u00e0":31,"\u00c6":33,"\u00c5":33,"\u00c4":35,"\u00c3":35,"\u00c2":40,"\u00c1":36,"\u00c0":35,"s":22,"q":31,"p":33,"o":32,"j":35,"g":33,"e":35,"d":36,"c":32,"a":32,"J":37,"A":36}},"\u00de":{"d":"30,-192v73,-3,137,-3,141,67v2,32,-33,64,-69,64r-72,0v-4,22,11,59,-14,61v-7,0,-10,-4,-12,-13r0,-225v-2,-20,25,-16,26,-4r0,50xm144,-119v11,-54,-60,-49,-114,-47r0,79v48,-4,105,16,114,-32","w":193,"k":{"\u00dd":33,"\u00c6":28,"j":51,"Z":33,"Y":33,"X":30,"T":49}},"\u00df":{"d":"4,-179v0,-39,24,-70,70,-71v45,-1,85,58,54,105v-3,22,45,48,38,81v6,57,-87,89,-118,36v5,-39,32,2,53,2v20,0,37,-14,39,-40v2,-23,-42,-51,-38,-75v-2,-10,11,-28,11,-46v0,-18,-18,-38,-42,-38v-24,0,-42,19,-42,51r0,161v-1,14,-25,17,-25,-1r0,-165","w":186,"k":{"\u00dd":16,"j":34,"Y":19,"T":15}},"\u00e0":{"d":"110,-194v-10,-4,-52,-40,-23,-49v12,-4,26,19,35,37v0,7,-3,10,-12,12xm5,-88v-2,-44,38,-86,88,-88v43,-2,88,37,88,90r0,74v1,13,-25,17,-25,2r0,-17v-53,57,-147,20,-151,-61xm93,-151v-32,-2,-61,25,-63,64v-1,31,26,61,65,62v29,1,61,-28,61,-63v0,-32,-26,-61,-63,-63","w":201,"k":{"\u00dd":37,"j":26,"Y":39,"T":27}},"\u00e1":{"d":"117,-232v-1,10,-37,62,-45,25v0,-4,7,-13,20,-28v6,-15,26,-8,25,3xm0,-88v-2,-44,38,-86,88,-88v43,-2,88,37,88,90r0,74v0,12,-25,17,-25,2r0,-17v-53,57,-147,20,-151,-61xm88,-151v-32,-2,-61,25,-63,64v-1,31,25,61,65,62v29,1,61,-28,61,-63v0,-32,-26,-61,-63,-63","w":195,"k":{"\u00dd":21,"j":32,"Y":22,"T":18}},"\u00e2":{"d":"53,-207v-1,-4,26,-40,36,-38v11,0,54,46,21,51v-7,1,-13,-9,-22,-19v-8,13,-16,19,-22,19v-9,-2,-13,-6,-13,-13xm0,-89v-2,-43,37,-85,88,-87v43,-1,88,35,88,90r0,74v1,13,-22,16,-25,2r1,-17v-54,57,-149,19,-152,-62xm88,-151v-31,0,-62,24,-63,63v-1,32,26,62,66,63v28,1,60,-27,60,-64v0,-32,-24,-62,-63,-62","w":200,"k":{"\u00dd":30,"j":36,"Y":35,"V":15,"T":38}},"\u00e3":{"d":"47,-221v5,-28,44,-13,65,-5v10,-6,27,-4,26,9v-4,25,-47,15,-66,4v-9,4,-26,4,-25,-8xm0,-89v-1,-43,38,-87,89,-88v44,-1,88,37,88,90r0,75v1,13,-22,17,-25,2r1,-17v-54,57,-150,20,-153,-62xm89,-152v-32,-1,-62,25,-64,64v-1,32,26,61,66,63v29,1,61,-28,61,-64v0,-32,-26,-61,-63,-63","w":197,"k":{"j":32}},"\u00e4":{"d":"63,-194v-16,-2,-17,-25,1,-25v17,2,16,24,-1,25xm100,-205v0,-11,5,-15,14,-14v12,1,17,25,-2,25v-8,0,-12,-5,-12,-11xm0,-89v-2,-43,37,-85,88,-87v43,-1,88,35,88,90r0,74v1,13,-22,16,-25,2r1,-17v-54,57,-149,19,-152,-62xm88,-151v-31,0,-62,24,-63,63v-1,32,26,62,66,63v28,1,60,-27,60,-64v0,-32,-24,-62,-63,-62","w":199,"k":{"\u00dd":27,"j":34,"Y":31,"V":19,"T":51}},"\u00e5":{"d":"85,-254v37,-9,55,53,13,63v-21,4,-38,-6,-39,-32v0,-15,8,-27,26,-31xm91,-234v-17,-1,-14,24,-2,24v9,0,13,-3,14,-12v-1,-8,-5,-12,-12,-12xm0,-89v-2,-43,37,-85,88,-87v43,-1,88,35,88,90r0,74v1,13,-22,16,-25,2r1,-17v-54,57,-149,19,-152,-62xm88,-151v-31,0,-62,24,-63,63v-1,32,26,62,66,63v28,1,60,-27,60,-64v0,-32,-24,-62,-63,-62","w":198,"k":{"\u00dd":21,"j":33,"Y":20,"V":17,"T":20}},"\u00e6":{"d":"0,-89v-2,-43,37,-87,88,-87v31,0,56,14,76,43v14,-23,39,-42,75,-43v44,-1,89,38,88,93v-1,8,-6,12,-13,12r-134,1v10,38,57,56,97,34v9,2,13,6,13,13v3,12,-26,23,-52,23v-22,0,-43,-8,-62,-26v6,21,-16,37,-25,16r1,-18v-54,57,-149,20,-152,-61xm88,-152v-32,-2,-61,25,-63,64v-1,31,24,62,66,62v28,0,60,-28,60,-63v1,-32,-26,-61,-63,-63xm300,-96v2,-22,-33,-58,-61,-54v-27,-3,-59,24,-61,54r122,0","w":344,"k":{"\u00dd":45,"j":34,"Y":40,"T":40}},"\u00e7":{"d":"2,-88v-6,-68,96,-119,148,-62v5,9,-1,21,-10,20v-7,-2,-33,-25,-53,-20v-30,-2,-57,26,-60,63v-3,48,68,85,107,44v10,-3,17,0,18,12v3,9,-28,27,-54,30r0,9v40,26,13,74,-41,65v-17,-3,-12,-24,1,-24v14,0,35,4,34,-11v2,-9,-19,-8,-19,-19r0,-20v-35,-5,-76,-48,-71,-87","w":173,"k":{"\u00dd":30,"Y":33,"T":44}},"\u00e8":{"d":"104,-193v-11,-4,-51,-41,-22,-50v10,-4,27,20,35,38v0,7,-4,11,-13,12xm0,-88v-2,-43,38,-88,88,-88v45,0,89,36,88,92v-2,9,-5,13,-12,13r-136,0v9,38,57,57,99,35v9,2,12,6,12,14v0,11,-21,20,-51,22v-44,3,-86,-38,-88,-88xm150,-96v-1,-24,-33,-61,-64,-54v-28,-2,-56,25,-60,54r124,0","w":198,"k":{"\u00dd":37,"j":33,"Y":31,"V":13,"T":37}},"\u00e9":{"d":"117,-231v-1,10,-38,62,-45,25v0,-4,6,-13,19,-28v6,-14,26,-9,26,3xm0,-88v-2,-43,38,-88,88,-88v45,0,89,36,88,92v-2,9,-5,13,-12,13r-136,0v9,38,57,57,99,35v9,2,12,6,12,14v0,11,-21,20,-51,22v-44,3,-86,-38,-88,-88xm150,-96v-1,-24,-33,-61,-64,-54v-28,-2,-56,25,-60,54r124,0","w":196,"k":{"\u00dd":19,"j":33,"Y":21,"T":23}},"\u00ea":{"d":"53,-207v-1,-4,26,-40,36,-38v11,0,54,46,21,51v-7,1,-13,-9,-22,-19v-8,13,-16,19,-22,19v-9,-2,-13,-6,-13,-13xm0,-88v-2,-43,38,-88,88,-88v45,0,89,36,88,92v-2,9,-5,13,-12,13r-136,0v9,38,57,57,99,35v9,2,12,6,12,14v0,11,-21,20,-51,22v-44,3,-86,-38,-88,-88xm150,-96v-1,-24,-33,-61,-64,-54v-28,-2,-56,25,-60,54r124,0","w":201,"k":{"\u00dd":29,"j":34,"Y":29,"V":18,"T":36}},"\u00eb":{"d":"63,-193v-16,-2,-18,-25,1,-25v18,1,16,24,-1,25xm100,-205v0,-10,5,-14,14,-13v13,2,16,23,-2,25v-8,-1,-12,-6,-12,-12xm0,-88v-2,-43,39,-87,87,-88v46,-1,89,37,89,93v-2,9,-5,12,-12,12r-136,0v9,38,55,57,99,36v9,2,11,5,11,13v0,11,-21,20,-51,22v-44,3,-85,-38,-87,-88xm150,-96v-1,-23,-34,-61,-65,-54v-28,-2,-54,25,-59,54r124,0","w":197,"k":{"\u00dd":15,"j":33,"Y":25,"T":33}},"\u00ec":{"d":"47,-186v-11,-4,-52,-41,-23,-50v11,-4,29,19,36,38v0,7,-4,10,-13,12xm29,-162v-1,-20,25,-15,25,-3r0,153v-1,15,-25,17,-25,-1r0,-149","w":90,"k":{"j":46}},"\u00ed":{"d":"67,-226v0,12,-38,63,-46,26v-2,-2,20,-36,33,-38v9,2,13,6,13,12xm29,-162v-2,-20,25,-17,25,-4r0,154v-1,15,-25,17,-25,-1r0,-149","w":90,"k":{"j":39}},"\u00ee":{"d":"75,-199v-9,25,-22,10,-35,-6v-8,13,-16,19,-22,19v-23,-10,-12,-19,5,-39v18,-35,45,12,52,26xm28,-163v-2,-20,25,-17,25,-4r0,155v-1,15,-25,17,-25,-1r0,-150","w":90,"k":{"j":30}},"\u00ef":{"d":"16,-198v-16,-2,-17,-26,1,-26v17,2,16,25,-1,26xm53,-210v1,-10,5,-15,14,-14v13,1,17,26,-2,26v-8,0,-12,-6,-12,-12xm29,-162v-2,-20,25,-17,25,-4r0,154v-1,15,-25,17,-25,-1r0,-149","w":90,"k":{"j":32,"T":-3}},"\u00f0":{"d":"0,-88v0,-49,46,-97,106,-87r-13,-21v-18,11,-22,16,-31,15v-16,-5,-12,-25,9,-31r8,-5v-12,-12,-8,-27,7,-28v4,0,9,5,15,14v19,-12,25,-16,32,-16v23,13,9,24,-18,38v20,39,58,68,61,121v2,45,-37,88,-91,88v-39,0,-85,-44,-85,-88xm88,-151v-32,0,-61,24,-62,64v-1,32,25,61,64,61v30,0,61,-26,61,-64v1,-27,-29,-61,-63,-61","w":196,"k":{"j":35}},"\u00f1":{"d":"45,-223v7,-27,44,-12,65,-4v10,-6,27,-4,26,9v-2,19,-41,21,-58,5v-13,-1,-33,6,-33,-10xm86,-150v-34,0,-61,24,-61,71r0,67v-1,15,-25,17,-25,-1r0,-148v-2,-20,25,-17,25,-4r0,14v53,-55,146,-11,146,58r0,82v0,6,-4,10,-13,11v-8,-1,-12,-5,-12,-12v1,-67,9,-137,-60,-138","w":194,"k":{"j":33}},"\u00f2":{"d":"105,-195v-11,-4,-52,-41,-23,-50v11,-4,28,20,36,38v0,7,-4,11,-13,12xm0,-88v0,-44,41,-88,88,-88v45,0,88,43,88,88v0,45,-37,88,-91,88v-39,0,-85,-44,-85,-88xm88,-151v-32,0,-61,24,-62,64v-1,32,25,61,64,61v30,0,60,-26,61,-64v1,-31,-28,-61,-63,-61","w":196,"k":{"\u00dd":30,"j":42,"Y":30,"T":20}},"\u00f3":{"d":"117,-232v-1,10,-37,62,-45,25v0,-4,7,-13,20,-28v6,-15,26,-8,25,3xm0,-88v0,-43,41,-88,88,-88v43,0,88,44,88,88v0,44,-37,88,-91,88v-40,0,-85,-43,-85,-88xm87,-150v-32,-1,-60,24,-61,64v-1,30,25,60,64,60v30,0,60,-24,60,-64v0,-31,-29,-60,-63,-60","w":196,"k":{"\u00dd":19,"j":38,"Y":28,"T":20}},"\u00f4":{"d":"53,-206v0,-3,21,-37,35,-37v10,0,54,44,22,50v-7,2,-14,-10,-23,-19v-8,13,-15,19,-21,19v-9,-2,-13,-6,-13,-13xm0,-88v0,-43,41,-88,88,-88v43,0,88,44,88,88v0,44,-37,88,-91,88v-40,0,-85,-43,-85,-88xm87,-150v-32,-1,-60,24,-61,64v-1,30,25,60,64,60v30,0,60,-24,60,-64v0,-31,-29,-60,-63,-60","w":196,"k":{"\u00dd":24,"j":39,"Y":24,"T":30}},"\u00f5":{"d":"46,-220v6,-28,44,-14,65,-5v10,-6,27,-4,26,9v-2,19,-41,21,-57,5v-12,-2,-33,7,-34,-9xm0,-88v0,-44,41,-88,88,-88v45,0,88,43,88,88v0,45,-37,88,-91,88v-39,0,-85,-44,-85,-88xm88,-151v-32,0,-61,24,-62,64v-1,32,25,61,64,61v30,0,60,-26,61,-64v1,-31,-28,-61,-63,-61","w":196,"k":{"j":34,"T":15}},"\u00f6":{"d":"63,-193v-16,-2,-17,-25,1,-25v17,2,16,24,-1,25xm99,-204v0,-10,6,-15,14,-14v12,1,17,25,-2,25v-8,0,-12,-5,-12,-11xm0,-88v0,-43,41,-88,88,-88v43,0,88,44,88,88v0,44,-37,88,-91,88v-40,0,-85,-43,-85,-88xm87,-150v-32,-1,-60,24,-61,64v-1,30,25,60,64,60v30,0,60,-24,60,-64v0,-31,-29,-60,-63,-60","w":195,"k":{"\u00dd":21,"j":40,"Y":23,"T":40}},"\u00f7":{"d":"74,-180v2,-26,38,-24,38,1v-1,26,-40,21,-38,-1xm40,-141r107,0v17,3,18,28,0,28r-108,0v-17,-2,-19,-28,1,-28xm93,-54v-27,-4,-25,-37,1,-39v20,1,27,37,-1,39"},"\u00f8":{"d":"26,-36v-58,-73,39,-180,120,-123v14,-19,29,-29,36,-5v0,3,-6,11,-18,22v47,55,7,143,-71,142v-16,0,-33,-6,-50,-18v-10,12,-15,18,-23,17v-17,-6,-12,-21,6,-35xm128,-141v-50,-35,-120,31,-84,87xm61,-36v55,39,125,-31,85,-88","w":205,"k":{"j":33,"T":29}},"\u00f9":{"d":"105,-194v-10,-4,-53,-41,-23,-50v12,-4,27,20,36,38v0,7,-4,11,-13,12xm146,-24v-56,52,-147,15,-146,-67r0,-70v-2,-20,25,-17,25,-4r0,69v-1,45,23,69,60,71v30,2,61,-25,61,-64r0,-74v1,-18,25,-14,25,-1r0,153v0,6,-4,10,-13,11v-13,-1,-12,-11,-12,-24","w":194,"k":{"\u00dd":17,"j":35,"Y":17,"T":34}},"\u00fa":{"d":"118,-234v0,12,-38,63,-46,26v-2,-2,20,-36,33,-38v9,2,13,6,13,12xm147,-25v-56,53,-148,17,-147,-67r0,-70v-2,-20,25,-17,25,-4r0,69v-1,46,23,70,61,72v30,2,61,-25,61,-64r0,-75v0,-19,25,-13,25,-1r0,154v0,6,-5,9,-13,11v-13,-1,-12,-12,-12,-25","w":194,"k":{"\u00dd":11,"j":34,"Y":11,"T":16}},"\u00fb":{"d":"124,-208v-8,25,-24,10,-36,-7v-8,13,-15,20,-21,20v-23,-10,-11,-18,5,-39v16,-21,24,-15,40,6v8,9,12,16,12,20xm147,-25v-55,54,-148,15,-147,-67r0,-71v-2,-20,25,-17,25,-4r0,70v-1,46,24,69,61,72v30,3,61,-25,61,-64r0,-76v1,-19,26,-13,26,0r0,154v0,6,-5,9,-13,11v-13,-2,-14,-11,-13,-25","w":195,"k":{"\u00dd":12,"j":36,"Y":12,"T":24}},"\u00fc":{"d":"63,-194v-16,-2,-17,-25,1,-25v17,2,16,24,-1,25xm100,-205v1,-10,5,-15,14,-14v12,1,17,25,-2,25v-8,0,-12,-5,-12,-11xm146,-24v-56,52,-147,15,-146,-67r0,-70v-2,-20,25,-17,25,-4r0,68v-1,46,23,69,61,72v30,1,60,-25,60,-64r0,-74v1,-18,25,-14,25,-1r0,153v0,6,-4,10,-13,11v-13,-1,-12,-11,-12,-24","w":194,"k":{"\u00dd":17,"j":39,"Y":17,"T":38}},"\u00fd":{"d":"121,-235v0,10,-38,65,-45,25v0,-4,6,-13,19,-28v6,-14,26,-9,26,3xm78,-48v45,-87,40,-126,63,-131v9,2,13,6,13,13r-97,234v-7,7,-24,1,-21,-10r29,-73r-62,-150v10,-23,22,-12,32,13v25,67,42,101,43,104","w":174,"k":{"\u00c6":22,"\u00c5":22,"\u00c4":20,"\u00c3":20,"\u00c2":22,"\u00c1":20,"\u00c0":24,"j":40,"A":23}},"\u00fe":{"d":"179,-88v0,69,-98,122,-152,62r0,89v-3,14,-25,15,-25,-3r0,-291v-1,-19,24,-16,25,-4r0,85v54,-60,152,-10,152,62xm90,-151v-32,0,-61,24,-62,64v-1,32,25,61,64,61v30,0,61,-24,61,-64v0,-30,-28,-61,-63,-61","w":198,"k":{"\u00dd":43,"j":44,"Y":45,"T":44}},"\u00ff":{"d":"54,-193v-17,-2,-18,-25,1,-25v17,2,16,24,-1,25xm90,-205v0,-16,24,-19,25,0v0,6,-4,10,-13,12v-8,-1,-12,-6,-12,-12xm76,-46v45,-87,40,-125,63,-130v9,2,13,6,13,13r-97,233v-6,7,-25,1,-21,-10r29,-73r-61,-149v10,-23,21,-12,31,13v25,67,42,100,43,103","w":174,"k":{"\u00dd":15,"\u00c6":25,"\u00c5":17,"\u00c4":22,"\u00c3":21,"\u00c2":22,"\u00c1":18,"\u00c0":21,"j":40,"Z":23,"Y":11,"X":10,"T":29,"A":22}}}});
/*!
 * The following copyright notice may not be removed under any circumstances.
 *
 * Copyright:
 * Copyright (c) 20.07.2010, Johan Aakerlund (aajohan@gmail.com), with Reserved
 * Font Name "Comfortaa". This Font Software is licensed under the SIL Open Font
 * License, Version 1.1. http://scripts.sil.org/OFL
 *
 * Manufacturer:
 * Johan Aakerlund
 *
 * Designer:
 * Johan Aakerlund - aajohan
 *
 * License information:
 * http://scripts.sil.org/OFL
 */
Cufon.registerFont({"w":178,"face":{"font-family":"Comfortaa","font-weight":700,"font-stretch":"expanded","units-per-em":"360","panose-1":"2 15 8 3 0 0 0 6 0 3","ascent":"288","descent":"-72","x-height":"5","cap-height":"5","bbox":"-14 -327.102 346.033 82.1482","underline-thickness":"26.3672","underline-position":"-24.9609","unicode-range":"U+0020-U+00FF"},"glyphs":{" ":{"w":89},"\u00a0":{"w":89},"!":{"d":"25,-243v2,-22,38,-21,38,1r0,169v-2,25,-38,20,-38,0r0,-170xm19,-18v0,-33,47,-27,47,-2v0,15,-6,25,-24,25v-12,0,-23,-7,-23,-23","w":89},"\"":{"d":"14,-260v0,-26,40,-21,38,-2v-4,44,-3,60,-19,61v-19,1,-19,-39,-19,-59xm57,-262v2,-21,34,-23,38,1v-9,47,1,60,-20,60v-19,1,-14,-42,-18,-61","w":97},"#":{"d":"148,-175v17,-61,2,-75,33,-82v33,18,11,24,4,82v20,-2,33,-2,37,18v-2,22,-22,18,-44,18r-5,23v20,-1,41,1,39,19v-3,28,-21,16,-46,18v-18,62,-2,76,-34,85v-35,-11,-3,-57,-3,-85r-31,0v-8,30,-2,90,-30,85v-37,-7,-5,-67,-5,-85v-32,9,-47,-31,-15,-37r23,0r5,-23v-19,2,-37,-3,-36,-19v3,-26,21,-15,43,-17v17,-62,5,-78,32,-81v33,6,7,56,5,81r28,0xm113,-139r-4,23r27,0r5,-23r-28,0","w":234},"$":{"d":"109,-37v25,-15,25,-57,0,-71r0,71xm72,-216v-19,7,-18,48,0,56r0,-56xm154,-224v0,30,-32,18,-45,2r0,70v31,9,55,41,55,76v0,35,-18,61,-55,76v2,19,-3,39,-18,37v-19,-3,-20,-16,-19,-37v-26,5,-52,-18,-60,-39v2,-12,9,-19,19,-19v8,-2,30,28,41,26r0,-93v-30,-10,-49,-35,-49,-70v0,-28,24,-53,49,-65v-9,-33,30,-53,37,-18r0,18v9,-1,41,21,45,36"},"%":{"d":"14,-193v-1,-34,26,-66,71,-68v32,-2,67,33,67,68v0,35,-27,66,-69,69v-35,2,-68,-29,-69,-69xm220,-253v12,-11,33,-1,30,15v-48,78,-122,164,-177,240v-14,7,-33,0,-30,-16v0,-5,8,-15,20,-31xm91,-224v-21,-6,-38,8,-40,32v-2,35,59,44,64,6v3,-21,-5,-32,-24,-38xm144,-59v-3,-37,30,-70,69,-72v33,-2,67,28,68,71v1,33,-28,67,-70,67v-32,0,-64,-30,-67,-66xm218,-94v-39,-9,-53,55,-15,63v23,5,42,-6,42,-32v0,-15,-9,-27,-27,-31","w":283},"&":{"d":"93,-115v-24,25,-32,28,-32,48v0,37,55,47,75,9r7,-7xm93,-169v24,-20,31,-36,5,-50v-31,0,-33,33,-5,50xm91,-257v60,-6,83,86,29,115r50,50v11,-15,45,-49,55,-10v2,7,-15,22,-28,36v12,17,35,24,38,49v-14,43,-48,-8,-65,-21v-37,36,-35,40,-74,43v-36,2,-72,-30,-73,-74v-1,-26,20,-51,43,-73v-27,-30,-31,-24,-32,-57v-1,-28,22,-55,57,-58","w":256},"'":{"d":"16,-258v1,-26,40,-21,38,-2v-4,46,-3,61,-18,62v-19,2,-16,-41,-20,-60","w":60},"(":{"d":"97,-279v11,-13,37,-6,34,13v-46,98,-50,222,0,326v-8,30,-36,23,-42,-9v-46,-105,-42,-226,8,-330","w":133},")":{"d":"13,-263v-3,-15,6,-24,20,-24v9,0,13,10,21,28v45,108,42,230,-10,332v-14,10,-30,6,-32,-14v45,-97,52,-218,1,-322","w":133},"*":{"d":"137,-190v-4,28,-39,20,-40,-7v2,28,-40,33,-40,5v0,-8,8,-17,20,-23v-35,9,-53,-31,-18,-38v5,0,13,5,24,13v-6,-16,-10,-36,14,-39v23,4,21,23,13,39v11,-14,43,-18,43,8v0,13,-18,20,-36,17v8,7,22,10,20,25","w":180},"+":{"d":"77,-149v0,0,-4,-56,20,-53v22,-2,18,31,18,53v24,0,56,-3,54,20v-3,30,-27,15,-54,18v0,23,4,56,-20,54v-26,-3,-16,-30,-18,-54v-25,-2,-51,9,-53,-20v-2,-19,31,-19,53,-18"},",":{"d":"21,32v-2,-16,23,-14,29,-27v-42,-4,-41,-60,0,-60v29,0,33,18,33,44v0,28,-20,50,-48,58v-8,0,-13,-5,-14,-15","w":97},"-":{"d":"12,-105v7,-33,56,-18,89,-18v10,0,16,7,19,20v-7,33,-56,18,-89,18v-11,0,-17,-6,-19,-20","w":117},"\u00ad":{"d":"12,-105v7,-33,56,-18,89,-18v10,0,16,7,19,20v-7,33,-56,18,-89,18v-11,0,-17,-6,-19,-20","w":117},".":{"d":"23,-24v-2,-34,55,-41,59,-3v1,18,-9,31,-30,32v-16,0,-28,-9,-29,-29","w":97},"\/":{"d":"99,-263v12,-16,42,-7,35,13v-56,164,-92,254,-98,269v-12,13,-33,11,-35,-11v1,-4,33,-95,98,-271","w":135},"0":{"d":"85,5v-90,3,-106,-148,-67,-223v15,-29,40,-40,66,-40v86,0,106,144,67,223v-14,29,-40,40,-66,40xm84,-222v-40,0,-51,58,-50,100v1,43,9,89,50,91v36,1,50,-45,50,-96v0,-39,-12,-95,-50,-95","w":173},"1":{"d":"7,-227v-6,-21,34,-26,55,-31v11,2,16,8,16,17r0,229v0,24,-36,20,-36,1r0,-203v-19,6,-30,5,-35,-13","w":99},"2":{"d":"0,-177v0,-39,38,-79,81,-81v39,-2,83,37,82,81v0,25,-15,45,-36,70r-66,76r88,0v9,0,16,7,17,19v-2,12,-8,17,-18,17r-129,0v-23,-5,-20,-22,-4,-40r103,-117v19,-28,3,-68,-38,-68v-23,0,-40,19,-44,47v-3,22,-36,15,-36,-4","w":171},"3":{"d":"15,-186v-2,-36,28,-67,68,-71v54,-5,96,80,48,118v60,41,27,144,-51,144v-39,0,-80,-33,-80,-81v0,-20,36,-24,36,1v0,56,85,58,89,2v2,-29,-20,-46,-50,-49v-16,-11,-11,-34,14,-34v36,0,35,-61,-6,-65v-32,-4,-24,50,-50,51v-12,-3,-18,-8,-18,-16","w":167},"4":{"d":"119,-249v12,-15,37,-5,32,17r0,126v20,0,36,-4,39,17v2,17,-17,22,-39,19v-5,28,14,75,-19,75v-31,0,-12,-47,-17,-75r-101,1v-16,-6,-19,-24,-6,-34v70,-91,107,-140,111,-146xm56,-106r59,0r0,-76","w":193},"5":{"d":"39,-68v10,50,89,47,91,-10v1,-41,-47,-52,-96,-47v-9,0,-15,-5,-18,-15r0,-99v-1,-8,10,-21,24,-17r101,0v21,0,25,38,0,38r-88,0r0,56v67,-9,110,23,115,84v3,40,-37,83,-85,83v-41,0,-81,-36,-83,-84v7,-25,42,-21,39,11"},"6":{"d":"38,-88v-6,32,10,55,43,57v23,2,43,-16,44,-45v1,-23,-16,-43,-45,-44v-19,0,-33,11,-42,32xm82,5v-61,0,-111,-82,-62,-134r72,-124v14,-10,27,-5,31,13v-5,19,-35,62,-46,84v44,-5,83,35,85,80v2,39,-35,81,-80,81","w":167},"7":{"d":"119,-220r-94,0v-25,0,-19,-36,-1,-36r128,0v20,4,20,18,10,35r-126,221v-13,11,-33,1,-31,-15v1,-5,39,-74,114,-205","w":169},"8":{"d":"34,-142v-40,-36,-12,-116,50,-116v54,0,95,79,47,118v62,42,28,145,-52,145v-37,0,-80,-37,-79,-81v0,-28,12,-50,34,-66xm53,-198v-7,23,7,37,31,41v33,5,46,-57,7,-63v-19,-4,-33,4,-38,22xm125,-64v9,-31,-11,-54,-43,-57v-23,-2,-44,15,-45,45v0,24,16,45,45,45v20,0,36,-10,43,-33","w":170},"9":{"d":"124,-177v0,-55,-84,-59,-87,-3v-2,25,14,45,44,47v22,1,43,-17,43,-44xm81,-258v62,-4,100,80,56,140r-88,119v-13,9,-34,0,-31,-14v4,-19,44,-62,58,-83v-38,-1,-74,-36,-76,-81v-2,-40,36,-79,81,-81","w":170},":":{"d":"30,-146v0,-35,48,-36,54,-4v3,18,-7,29,-28,32v-18,-3,-26,-12,-26,-28xm57,-1v-39,0,-30,-58,0,-54v34,2,36,50,0,54","w":97},";":{"d":"25,-142v0,-35,48,-34,54,-3v3,17,-6,28,-27,31v-18,-3,-27,-12,-27,-28xm51,-51v24,-2,33,12,33,40v0,24,-16,45,-48,51v-21,-1,-16,-32,2,-30r20,-6v-35,-3,-39,-46,-7,-55","w":97},"\u037e":{"d":"25,-142v0,-35,48,-34,54,-3v3,17,-6,28,-27,31v-18,-3,-27,-12,-27,-28xm51,-51v24,-2,33,12,33,40v0,24,-16,45,-48,51v-21,-1,-16,-32,2,-30r20,-6v-35,-3,-39,-46,-7,-55","w":97},"<":{"d":"75,-110v3,1,32,20,89,55v11,13,7,32,-13,33v-39,-17,-86,-52,-124,-73v-15,-17,-4,-27,16,-39v69,-41,103,-65,107,-65v31,7,24,35,-5,45v-1,1,-24,16,-70,44"},"=":{"d":"43,-152r107,0v10,0,16,7,19,20v-3,12,-10,18,-19,18r-107,0v-11,0,-17,-6,-19,-20v3,-12,10,-18,19,-18xm43,-93r107,0v27,0,21,38,0,38r-109,0v-21,-1,-24,-38,2,-38"},">":{"d":"118,-114v-66,-45,-86,-41,-94,-69v15,-35,27,-19,64,6v60,40,86,35,86,65v0,9,-8,14,-20,21v-75,44,-98,67,-112,66v-29,-8,-21,-34,7,-45"},"?":{"d":"10,-177v0,-38,39,-80,83,-80v39,0,80,39,80,82v0,24,-11,45,-32,64v-19,10,-29,25,-29,45v1,25,-36,19,-36,2v0,-35,16,-54,46,-78v33,-26,12,-77,-31,-79v-24,-2,-44,23,-46,51v-9,18,-35,9,-35,-7xm92,6v-32,0,-28,-46,3,-46v11,0,22,8,22,25v-3,14,-11,21,-25,21","w":172},"@":{"d":"163,-174v-31,-1,-62,25,-63,64v-1,32,25,63,66,63v29,0,61,-28,61,-64v0,-32,-26,-62,-64,-63xm346,-109v-2,62,-26,102,-84,102v-24,0,-36,-4,-35,-24v-62,54,-165,6,-165,-80v0,-50,43,-99,101,-101v50,-2,103,42,102,104r0,63v28,1,42,-31,42,-67v0,-65,-65,-131,-134,-131v-68,0,-135,57,-135,135v0,97,121,177,212,111v14,-3,26,7,25,18v5,18,-63,44,-106,44v-87,0,-170,-86,-170,-175v0,-86,82,-171,177,-171v84,0,172,82,170,172","w":354},"A":{"d":"125,-131r-22,-56r-20,56r42,0xm87,-247v17,-18,29,-7,39,19r81,216v-6,24,-37,22,-40,-9r-29,-73r-70,0r-35,93v-12,12,-35,5,-33,-13","w":209,"k":{"\u00dd":31,"t":26,"j":33,"Y":31,"W":20,"V":33,"T":31}},"B":{"d":"117,-145v67,35,46,150,-39,150v-28,0,-78,11,-78,-18r0,-226v3,-33,36,-13,64,-18v48,-8,92,70,53,112xm36,-156v33,2,58,-4,59,-33v1,-25,-28,-34,-59,-31r0,64xm36,-31v46,3,84,-4,84,-45v0,-37,-39,-49,-84,-44r0,89","w":165,"k":{"j":40}},"C":{"d":"0,-126v0,-94,123,-175,208,-106v9,15,3,32,-17,31v-60,-47,-154,-4,-154,75v0,68,87,124,152,76v15,0,24,7,23,19v3,15,-48,36,-82,36v-63,0,-130,-59,-130,-131","w":228,"k":{"\u00ff":11,"\u00fd":14,"y":20,"v":15,"j":45,"f":16}},"D":{"d":"193,-125v0,64,-60,131,-130,130v-24,-1,-63,7,-63,-18r0,-227v2,-12,6,-18,13,-18r0,-2v13,3,34,3,49,1v65,-3,131,61,131,134xm157,-127v0,-54,-45,-102,-120,-95r0,191v69,8,120,-30,120,-96","w":200,"k":{"j":49,"T":25}},"E":{"d":"13,-260v42,4,97,2,141,1v11,0,17,7,19,20v-2,11,-9,18,-20,18r-116,0r0,79v35,6,93,-18,101,17v-1,34,-65,14,-101,19r0,75r120,0v9,0,14,6,16,19v-3,11,-9,17,-17,17r-139,0v-12,-2,-17,-8,-17,-18r0,-227v2,-12,6,-18,13,-18r0,-2","w":181,"k":{"\u00fd":19,"y":21,"v":16,"j":32}},"F":{"d":"13,-260v42,4,97,2,141,1v11,0,17,7,19,20v-2,11,-9,18,-20,18r-116,0r0,79v35,6,93,-18,101,17v-1,34,-65,14,-101,19r0,94v-2,25,-37,20,-37,-1r0,-227v2,-12,6,-18,13,-18r0,-2","w":168,"k":{"\u00c6":50,"\u00c5":35,"\u00c4":32,"\u00c3":29,"\u00c2":32,"\u00c1":31,"\u00c0":32,"z":11,"j":39,"J":26,"A":32}},"G":{"d":"210,-221v-8,41,-50,-6,-85,1v-40,-3,-88,47,-88,95v0,61,74,119,139,82r0,-52v-24,-1,-63,7,-60,-19v3,-31,50,-12,79,-17v31,2,18,60,18,91v0,41,-54,43,-83,45v-63,5,-130,-58,-130,-131v0,-92,120,-175,205,-108v3,4,5,9,5,13","w":219,"k":{"j":35}},"H":{"d":"0,-238v1,-14,7,-20,20,-19v11,1,16,8,16,16r0,99r115,0r0,-98v0,-24,36,-20,36,0r0,229v0,9,-6,15,-19,16v-11,-2,-17,-8,-17,-18r0,-93r-115,0r0,94v-1,21,-36,23,-36,-1r0,-225","w":193,"k":{"j":28}},"I":{"d":"11,-242v-3,-21,28,-18,48,-18v25,0,23,38,1,37r3,0r0,192r-2,0v9,0,17,6,17,19v0,24,-27,16,-50,17v-26,1,-16,-39,-2,-36r0,-192r2,0v-11,0,-16,-6,-17,-19","w":94,"k":{"j":34}},"J":{"d":"37,-71v0,50,94,56,94,-8r0,-163v3,-21,37,-23,37,1r0,163v2,42,-36,83,-86,83v-39,0,-82,-38,-82,-84v4,-13,8,-19,19,-18v12,0,18,9,18,26","w":171,"k":{"j":25}},"K":{"d":"4,-239v-1,-26,36,-20,36,-1r0,102v86,-81,105,-115,125,-116v24,6,18,24,1,41r-78,79r92,113v1,32,-29,34,-44,3r-74,-90r-22,22v-6,33,17,91,-19,91v-10,0,-17,-6,-17,-18r0,-226","w":188,"k":{"\u00ff":28,"\u00fd":25,"\u00c7":18,"y":12,"v":21,"j":32}},"L":{"d":"0,-238v1,-14,7,-20,20,-19v11,1,16,8,16,16r0,210r104,0v10,0,16,6,18,19v-3,11,-9,17,-18,17r-122,0v-10,0,-18,-6,-18,-18r0,-225","w":167,"k":{"\u00ff":27,"\u00fd":23,"\u00dd":49,"\u00d6":33,"\u00d5":27,"\u00d4":32,"\u00d3":28,"\u00d2":29,"\u00c7":25,"y":25,"v":42,"j":39,"Y":54,"W":40,"V":49,"T":56,"Q":25,"O":29,"G":27,"C":29}},"M":{"d":"47,-154r0,142v-1,21,-35,24,-36,-1r0,-224v2,-28,35,-27,38,1r81,180v1,-5,64,-149,86,-195v11,-12,33,-7,32,14r0,224v0,25,-37,21,-36,1r0,-142v-44,99,-67,150,-69,153v-20,14,-27,2,-39,-25","w":261,"k":{"j":33}},"N":{"d":"175,-66r0,-174v3,-22,37,-24,37,0r0,227v-6,26,-33,22,-47,-7r-129,-165r0,172v0,9,-5,18,-18,18v-10,0,-18,-6,-18,-18r0,-224v1,-26,31,-26,38,-4v6,7,52,65,137,175","w":225,"k":{"j":31}},"O":{"d":"0,-127v-2,-64,60,-131,131,-131v63,0,132,58,132,132v0,65,-57,131,-133,131v-65,0,-127,-58,-130,-132xm131,-221v-47,-1,-95,41,-95,96v0,46,43,94,97,94v46,0,93,-43,93,-95v0,-48,-41,-94,-95,-95","w":270,"k":{"j":45,"T":19}},"P":{"d":"153,-182v1,55,-48,90,-116,81r0,89v-1,21,-37,24,-37,-1r0,-225v1,-34,48,-16,77,-20v35,-4,76,34,76,76xm116,-180v2,-34,-37,-46,-79,-41r0,84v43,2,77,0,79,-43","w":161,"k":{"\u00c6":56,"\u00c5":41,"\u00c4":36,"\u00c3":37,"\u00c2":44,"\u00c1":43,"\u00c0":34,"j":43,"J":31,"A":40}},"Q":{"d":"36,-125v0,66,90,125,150,77v-17,-22,-27,-23,-27,-39v10,-36,39,-6,53,12v40,-65,-6,-145,-81,-146v-47,-1,-95,41,-95,96xm131,-258v92,0,176,125,106,210v18,18,26,28,26,35v0,9,-6,15,-18,18v-7,3,-22,-17,-34,-26v-84,65,-208,2,-211,-106v-2,-64,60,-131,131,-131","w":272,"k":{"j":29,"T":24}},"R":{"d":"142,-185v1,29,-12,49,-38,65v39,67,58,103,58,105v-4,28,-33,25,-43,-5r-53,-91r-29,0r0,99v-1,21,-37,24,-37,-1r0,-225v1,-33,44,-17,72,-20v33,-3,68,32,70,73xm105,-177v7,-34,-26,-49,-68,-45r0,75v35,1,60,2,68,-30","w":164,"k":{"j":26}},"S":{"d":"52,-125v-68,-32,-49,-133,27,-133v24,0,54,11,61,42v0,9,-6,14,-18,16v-10,1,-25,-27,-45,-22v-16,0,-30,15,-31,35v0,15,9,25,27,32v34,-2,82,45,77,81v5,72,-109,111,-148,43v-7,-12,4,-26,16,-25v14,1,32,32,55,25v19,1,40,-18,40,-46v0,-28,-34,-43,-61,-48","w":156,"k":{"j":31}},"T":{"d":"17,-258r164,0v23,3,24,37,-3,37r-61,0r0,209v-1,21,-36,23,-36,-1r0,-208v-29,-3,-80,11,-81,-19v3,-12,9,-18,17,-18","w":208,"k":{"\u00ff":28,"\u00fd":30,"\u00fc":21,"\u00fb":31,"\u00fa":25,"\u00f9":14,"\u00f8":27,"\u00f6":27,"\u00f4":31,"\u00f3":28,"\u00f2":31,"\u00f0":31,"\u00ef":3,"\u00eb":42,"\u00ea":31,"\u00e9":42,"\u00e8":38,"\u00e7":49,"\u00e6":49,"\u00e5":20,"\u00e4":42,"\u00e2":31,"\u00e1":42,"\u00e0":38,"\u00d8":31,"\u00d6":31,"\u00d5":28,"\u00d4":27,"\u00d3":31,"\u00d2":27,"\u00c7":17,"\u00c6":49,"\u00c5":34,"\u00c4":31,"\u00c3":34,"\u00c2":28,"\u00c1":27,"\u00c0":30,"z":16,"y":26,"x":24,"w":20,"v":27,"u":20,"s":24,"r":17,"q":45,"p":43,"o":42,"n":32,"m":36,"j":47,"g":43,"f":33,"e":50,"d":42,"c":54,"a":49,"Q":29,"O":22,"J":47,"G":28,"C":33,"A":57}},"U":{"d":"103,5v-50,0,-97,-40,-96,-99r0,-144v1,-14,7,-20,20,-19v11,1,16,8,16,16v6,83,-26,209,58,210v30,1,57,-25,57,-61r0,-148v0,-24,36,-20,36,0r0,155v4,42,-44,90,-91,90","w":205,"k":{"j":33}},"V":{"d":"103,-66r69,-185v12,-14,32,-9,34,12r-84,227v-9,27,-38,21,-43,-12r-79,-217v0,-10,6,-18,19,-18v10,0,15,12,23,32","w":213,"k":{"\u00e7":23,"\u00c6":42,"\u00c5":41,"\u00c4":41,"\u00c3":41,"\u00c2":41,"\u00c1":41,"\u00c0":41,"j":47,"J":38,"A":41}},"W":{"d":"149,-175r-49,171v-15,17,-30,9,-38,-20v-33,-130,-59,-202,-62,-216v6,-27,31,-23,39,6r45,156v32,-111,48,-169,51,-173v15,-14,34,-7,36,21v3,8,18,59,44,152r50,-171v9,-17,38,-8,33,11r-68,236v-17,15,-29,4,-37,-22","w":305,"k":{"\u00c6":29,"\u00c5":33,"\u00c4":24,"\u00c3":28,"\u00c2":32,"\u00c1":28,"\u00c0":28,"j":39,"A":27}},"X":{"d":"1,-234v-5,-25,26,-33,36,-12r70,90r77,-99v14,-7,27,-2,29,16v-17,35,-60,79,-83,113v26,40,62,69,83,114v-3,23,-30,22,-37,2r-69,-87r-77,98v-13,10,-33,0,-30,-16v12,-23,64,-83,84,-112v-54,-68,-81,-103,-83,-107","w":223,"k":{"\u00ff":20,"\u00fd":22,"\u00d5":19,"\u00d4":19,"\u00d2":19,"\u00c7":20,"y":18,"j":23,"G":25}},"Y":{"d":"94,-158v54,-71,49,-94,79,-99v26,11,14,25,-7,57r-53,80r0,106v-2,25,-31,26,-37,4r0,-110v-24,-41,-55,-75,-76,-119v4,-24,31,-24,38,-3","w":195,"k":{"\u00f8":28,"\u00f6":23,"\u00f4":23,"\u00f3":28,"\u00f2":28,"\u00f0":28,"\u00eb":23,"\u00ea":23,"\u00e9":28,"\u00e8":28,"\u00e7":30,"\u00e6":28,"\u00e5":17,"\u00e4":23,"\u00e2":23,"\u00e1":28,"\u00e0":28,"\u00c6":28,"\u00c5":28,"\u00c4":28,"\u00c3":28,"\u00c2":28,"\u00c1":28,"\u00c0":34,"s":23,"q":32,"p":30,"o":34,"j":35,"g":29,"e":28,"d":28,"c":28,"a":30,"J":34,"A":42}},"Z":{"d":"17,-258r179,0v21,5,22,27,1,44r-141,183r140,0v12,2,18,8,17,19v-1,12,-8,17,-18,17r-177,0v-10,0,-16,-6,-18,-19v38,-62,111,-145,157,-207r-139,0v-26,-1,-19,-37,-1,-37","w":217,"k":{"j":20}},"[":{"d":"56,-284v27,9,88,-13,89,21v1,23,-38,18,-64,18r0,287v24,1,65,-7,64,19v-2,30,-54,16,-83,19v-13,-2,-19,-10,-19,-20r0,-322v0,-16,9,-17,13,-22","w":136},"\\":{"d":"0,-258v2,-13,8,-19,20,-19v12,0,17,12,25,34r90,245v-3,14,-9,20,-22,19v-10,0,-15,-12,-23,-33v-53,-150,-86,-231,-90,-246","w":121},"]":{"d":"5,-264v0,-30,53,-13,84,-19v12,3,18,9,18,18r0,327v-2,28,-55,18,-84,18v-21,0,-26,-34,0,-39v13,2,31,0,46,1r0,-287v-25,0,-64,6,-64,-19","w":133},"^":{"d":"65,-255v39,-10,77,94,76,93v0,10,-6,15,-19,17v-14,1,-36,-43,-48,-58r-35,54v-31,10,-38,-15,-16,-44v28,-37,39,-60,42,-62","w":165},"_":{"d":"19,0r156,0v13,2,18,8,17,20v-1,11,-8,17,-17,17r-156,0v-11,0,-17,-7,-19,-20v3,-11,10,-17,19,-17","w":168,"k":{"_":7}},"`":{"d":"95,-177v-14,-3,-92,-62,-41,-76v22,2,62,51,60,57v-3,12,-9,19,-19,19","w":132},"a":{"d":"95,-149v-29,-1,-58,24,-59,60v-1,30,24,58,62,58v27,0,56,-25,56,-60v0,-29,-23,-57,-59,-58xm95,-185v47,-1,99,39,95,97v-2,33,16,93,-18,93v-9,0,-18,-7,-18,-20v-57,49,-154,5,-154,-76v0,-45,40,-93,95,-94","w":211,"k":{"\u00dd":52,"j":43,"Y":54,"T":62}},"b":{"d":"106,5v-51,2,-98,-43,-98,-101r0,-144v0,-10,6,-17,19,-17v32,6,11,59,17,91v56,-53,156,2,156,75v0,47,-40,94,-94,96xm105,-151v-31,-2,-59,23,-61,61v-1,30,23,59,62,59v28,0,58,-24,58,-61v0,-29,-24,-57,-59,-59","w":211,"k":{"\u00dd":45,"j":35,"Y":52,"V":23,"T":49}},"c":{"d":"0,-90v0,-75,106,-132,163,-68v8,14,-1,30,-16,29v-8,0,-34,-24,-53,-20v-28,-2,-56,24,-58,60v-3,47,67,80,103,40v14,-5,25,1,27,17v4,12,-42,37,-74,37v-43,0,-92,-46,-92,-95","w":176,"k":{"\u00dd":26,"j":30,"Y":26,"T":49}},"d":{"d":"0,-91v0,-71,98,-129,156,-75v4,-31,-15,-90,19,-91v11,2,17,8,17,16r0,154v0,46,-49,99,-99,92v-43,3,-93,-47,-93,-96xm98,-151v-32,-2,-60,23,-62,61v-1,29,23,58,62,59v28,1,58,-24,58,-61v0,-29,-23,-57,-58,-59","w":204,"k":{"j":27}},"e":{"d":"0,-90v-2,-47,42,-94,95,-95v50,-2,98,41,96,100v0,12,-8,18,-18,18r-132,0v7,27,55,48,89,26v15,0,22,7,22,19v0,14,-22,24,-57,27v-46,2,-93,-39,-95,-95xm153,-103v-2,-16,-34,-53,-60,-45v-24,-3,-50,22,-55,45r115,0","w":198,"k":{"\u00dd":38,"j":40,"Y":43,"T":56}},"f":{"d":"45,-182v-2,-48,24,-79,76,-76v20,1,24,34,-1,37v-26,-3,-41,9,-38,39v24,2,50,-8,51,19v1,18,-30,18,-51,17r0,134v0,20,-32,23,-37,1v3,-43,0,-90,1,-135v-23,-1,-44,6,-46,-19v-1,-15,23,-19,45,-17","w":147,"k":{"\u00c6":24,"\u00c5":14,"\u00c4":14,"\u00c3":14,"\u00c2":14,"\u00c1":14,"\u00c0":22,"j":43,"J":31,"A":22}},"g":{"d":"1,-90v0,-47,44,-95,95,-95v52,-1,94,49,94,113r0,79v2,29,-53,71,-94,71v-37,0,-82,-22,-92,-64v3,-22,32,-23,38,2v30,44,117,35,112,-31v-57,51,-153,0,-153,-75xm97,-149v-32,-2,-59,21,-60,60v-1,29,22,58,61,58v28,0,56,-22,56,-60v0,-28,-23,-56,-57,-58","w":201,"k":{"\u00dd":45,"Y":45,"T":50}},"h":{"d":"94,-150v-28,0,-52,21,-49,62v-6,33,17,93,-19,93v-9,0,-15,-5,-18,-16r0,-228v0,-24,37,-21,37,-2r0,70v51,-41,135,0,135,66r0,93v0,20,-34,24,-36,1v-4,-62,17,-139,-50,-139","w":193,"k":{"\u00dd":46,"j":35,"Y":46,"T":54}},"i":{"d":"18,-213v0,-25,36,-20,36,-2v0,13,-3,21,-18,21v-9,0,-15,-7,-18,-19xm18,-166v-2,-26,36,-23,36,-4r0,158v0,9,-5,17,-18,17v-10,0,-18,-6,-18,-18r0,-153","w":75,"k":{"j":30}},"j":{"d":"100,-5v1,44,-31,81,-82,82v-10,0,-18,-6,-18,-19v0,-10,6,-18,19,-18v27,0,45,-17,45,-51r0,-157v0,-10,7,-16,19,-18v12,2,17,9,17,18r0,163xm82,-230v24,3,25,35,-1,37v-23,-5,-24,-32,1,-37","w":115},"k":{"d":"176,-168v-3,20,-79,56,-73,57r72,91v-2,36,-24,28,-46,0r-57,-71r-22,14v-5,30,16,79,-19,82v-9,0,-14,-5,-17,-16r0,-229v-1,-26,36,-20,36,-2r0,122v63,-39,86,-67,108,-67v10,0,16,6,18,19","w":185,"k":{"j":27,"T":44}},"l":{"d":"11,-237v1,-14,7,-20,20,-19v11,1,17,8,17,16r0,209v15,-1,25,2,25,19v0,22,-23,16,-44,17v-10,0,-18,-6,-18,-18r0,-224","w":83,"k":{"j":27}},"m":{"d":"89,-146v-56,0,-40,79,-42,134v-1,20,-36,24,-36,0r0,-150v-1,-22,30,-27,36,-9v28,-20,80,-12,99,16v5,-10,32,-26,58,-27v37,-3,77,31,77,75r0,96v0,9,-6,15,-18,16v-11,-2,-17,-7,-17,-17v0,-56,24,-133,-44,-134v-18,-1,-38,15,-38,38r0,96v-1,25,-35,19,-35,0v0,-55,13,-134,-40,-134","w":303,"k":{"\u00dd":40,"j":29,"Y":39,"T":46}},"n":{"d":"107,-148v-33,0,-59,21,-57,67v-6,31,16,86,-19,86v-10,0,-17,-6,-17,-18r0,-152v-2,-26,36,-23,36,-4r0,3v55,-48,149,1,149,71r0,84v0,9,-7,15,-19,16v-32,-6,-14,-59,-17,-91v-3,-35,-18,-62,-56,-62","w":210,"k":{"\u00dd":39,"j":22,"Y":33,"T":39}},"o":{"d":"0,-89v0,-47,43,-95,95,-95v47,0,94,47,94,95v0,49,-41,94,-98,94v-42,0,-91,-46,-91,-94xm153,-91v0,-73,-112,-74,-116,0v-2,32,23,59,60,60v28,1,56,-23,56,-60","w":195,"k":{"\u00dd":40,"j":35,"Y":40,"T":45}},"p":{"d":"199,-90v0,69,-96,126,-153,74v-6,34,16,87,-18,94v-9,0,-15,-5,-18,-17r0,-145v0,-55,34,-96,95,-101v47,-4,94,47,94,95xm104,-148v-29,0,-56,22,-57,59v-1,29,24,57,60,57v28,0,55,-24,56,-60v1,-27,-26,-56,-59,-56","w":206,"k":{"\u00dd":40,"j":32,"Y":40,"T":52}},"q":{"d":"4,-89v0,-47,43,-94,94,-94v50,0,94,44,94,100r0,144v-2,25,-36,20,-36,2r0,-78v-57,51,-152,0,-152,-74xm97,-146v-28,0,-56,21,-57,58v0,29,23,57,59,57v27,1,56,-23,56,-60v0,-27,-26,-55,-58,-55","w":202,"k":{"\u00dd":43,"Y":43,"V":21,"T":46}},"r":{"d":"141,-144v-48,-15,-82,4,-87,54v-4,34,17,95,-19,95v-10,0,-18,-6,-18,-18r0,-153v-1,-28,40,-24,37,-1v15,-13,34,-20,57,-20v16,1,48,6,48,26v0,11,-8,17,-18,17","w":162,"k":{"\u00c6":42,"j":30,"Z":35,"T":39,"J":41}},"s":{"d":"82,-32v16,0,32,-9,42,-25v0,-2,-2,-5,-7,-5v-87,-24,-102,-7,-113,-59v-6,-26,42,-63,79,-63v32,0,58,14,77,44v5,29,-29,34,-40,9v-23,-23,-66,-22,-79,11v64,25,117,9,120,63v1,27,-40,64,-81,62v-29,-1,-75,-15,-75,-53v0,-9,6,-16,19,-17v14,2,32,40,58,33","w":170,"k":{"\u00dd":36,"j":33,"Y":45,"T":41}},"t":{"d":"101,5v-39,4,-67,-16,-67,-58r0,-93v-18,2,-35,-4,-34,-18v3,-22,14,-17,34,-17v2,-26,-9,-72,19,-69v29,3,13,42,17,69v22,1,41,-7,44,17v2,18,-22,20,-44,18v8,42,-25,120,33,116v9,0,15,6,16,18v-2,11,-8,17,-18,17","w":121,"k":{"j":25}},"u":{"d":"105,-31v29,2,55,-24,57,-60v2,-33,-13,-92,19,-95v11,3,17,9,17,18r0,157v0,9,-7,15,-19,16v-12,-2,-18,-7,-17,-19v-62,47,-155,3,-150,-80v2,-32,-13,-89,19,-92v33,7,13,55,18,87v-2,44,21,66,56,68","w":208,"k":{"j":27,"T":44}},"v":{"d":"0,-165v5,-31,27,-24,41,4r52,106v38,-81,59,-123,62,-126v12,-10,34,-1,30,13v-7,27,-60,129,-78,167v-19,14,-27,3,-39,-22v-41,-88,-65,-134,-68,-142","w":193,"k":{"\u00c6":35,"\u00c5":31,"\u00c4":28,"\u00c3":26,"\u00c2":27,"\u00c1":26,"\u00c0":27,"j":38,"Z":42,"T":44,"A":28}},"w":{"d":"116,-105r-33,102v-9,14,-29,9,-34,-7r-49,-154v9,-30,29,-22,40,11r27,83v21,-68,33,-103,35,-106v15,-14,27,-5,35,19r28,87v20,-64,32,-100,34,-105v11,-16,34,-4,33,12r-52,161v-18,15,-28,4,-37,-22","w":242,"k":{"\u00dd":26,"j":39,"Y":23,"T":58}},"x":{"d":"18,-182v19,0,56,63,61,66v6,-7,21,-29,49,-61v8,-10,35,-1,30,15v-4,12,-44,56,-56,74v38,49,57,65,56,76v-2,21,-31,22,-40,0r-39,-48v-41,46,-40,60,-61,65v-30,-10,-15,-26,8,-55r30,-38v-18,-26,-43,-45,-56,-76v2,-12,8,-18,18,-18","w":163,"k":{"j":27,"T":37}},"y":{"d":"80,-67v29,-71,45,-108,47,-111v11,-10,32,-2,30,13r-94,226v-10,9,-33,1,-29,-14v0,-2,9,-25,27,-69r-58,-144v9,-26,30,-19,40,11v24,68,29,68,37,88","w":162,"k":{"\u00dd":10,"\u00c6":21,"\u00c5":15,"\u00c4":15,"\u00c3":15,"\u00c2":15,"\u00c1":15,"\u00c0":15,"j":32,"Z":21,"Y":17,"X":14,"T":54,"A":22}},"z":{"d":"12,-184v39,4,89,2,130,1v26,9,18,22,0,44r-86,108r86,0v23,2,23,36,0,36r-124,0v-31,-11,-15,-26,10,-58r75,-94v-34,-4,-97,14,-103,-18v1,-13,9,-14,12,-19","w":172,"k":{"\u00dd":26,"j":32,"Y":11,"T":53}},"{":{"d":"83,-241v-1,-32,28,-44,67,-44v22,0,29,34,3,37v-12,2,-33,-6,-33,8v0,41,8,92,-7,122v16,30,3,86,7,127v7,14,55,-6,50,25v2,18,-24,17,-44,17v-57,0,-40,-88,-42,-145v-7,-10,-41,-2,-38,-24v3,-23,24,-13,37,-22r0,-101"},"|":{"d":"76,-272v0,-26,37,-21,37,0r0,335v-2,19,-37,25,-37,-2r0,-333"},"}":{"d":"19,-264v0,-23,22,-19,44,-19v19,0,41,12,41,39r0,102v4,12,43,1,36,26v1,13,-15,17,-31,16v-4,0,-5,4,-5,12v-5,65,27,146,-68,136v-25,-2,-19,-37,0,-36v10,-2,30,5,31,-6v3,-41,-8,-96,8,-124v-15,-29,-4,-83,-7,-123v-8,-15,-49,8,-49,-23"},"~":{"d":"33,-128v2,-34,57,-34,82,-12v10,2,17,-2,25,-4v15,3,22,10,22,22v0,28,-59,37,-82,12v-10,-3,-17,3,-27,3v-13,-3,-20,-10,-20,-21"},"\u00a1":{"d":"38,-217v3,-30,44,-28,44,-1v0,13,-7,23,-22,23v-12,0,-20,-7,-22,-22xm43,-176v0,-9,6,-15,18,-16v11,2,16,7,16,16r0,164v-2,11,-7,18,-18,17v-11,-1,-16,-8,-16,-17r0,-164","w":118},"\u00a2":{"d":"93,-145v-38,-1,-68,65,-34,96xm106,-181v22,-51,10,-63,37,-68v37,10,0,52,-3,76v20,10,31,18,31,30v-7,23,-23,21,-42,4r-38,108v28,5,37,-11,63,-19v9,0,15,6,17,18v3,16,-56,48,-92,34v-16,40,-10,50,-32,55v-34,-17,-14,-20,0,-70v-77,-49,-27,-177,59,-168","w":194},"\u00a3":{"d":"171,-34v0,1,-12,39,-28,38r-100,0v-10,0,-18,-7,-18,-19v0,-3,9,-24,27,-63v4,-9,3,-16,3,-26v-20,1,-44,0,-41,-19v2,-15,11,-19,26,-18v-37,-56,-12,-123,58,-123v23,0,50,11,60,40v-3,12,-9,19,-19,19v-12,1,-25,-26,-45,-22v-40,8,-43,46,-11,86v23,0,59,-5,56,19v-3,24,-24,17,-47,18v1,26,-6,39,-19,71v19,-1,43,2,60,-1v-1,-8,11,-21,19,-19v12,3,19,9,19,19","w":166},"\u00a4":{"d":"99,-144v-25,0,-29,33,-5,38v14,3,22,-6,22,-21v-3,-11,-8,-17,-17,-17xm121,-74v-15,7,-32,7,-48,0v-10,20,-41,15,-40,-7v0,-7,5,-14,13,-21v-7,-14,-6,-34,0,-48v-20,-10,-15,-40,7,-39v6,0,12,4,20,12v12,-7,36,-6,48,0v12,-19,40,-14,40,7v0,6,-3,13,-12,21v7,15,7,33,-1,48v21,11,14,41,-7,40v-4,0,-11,-4,-20,-13"},"\u00a5":{"d":"95,-78v-29,-3,-81,10,-83,-18v-1,-23,37,-17,61,-18v-7,-10,-10,-16,-10,-18v-22,1,-51,3,-51,-18v0,-12,10,-19,25,-18r-12,-19v-18,-8,-18,-34,5,-34v23,0,47,-6,49,18v0,9,-4,13,-10,15v32,50,32,50,44,67v34,-45,42,-67,52,-66v-18,-7,-11,-35,7,-34v22,1,42,-4,44,18v-2,12,-20,23,-25,35v27,-2,32,36,6,36r-30,0r-12,18v23,1,60,-6,59,18v-1,32,-51,13,-81,18v-5,31,15,80,-19,83v-32,3,-15,-51,-19,-83","w":221},"\u00a6":{"d":"50,-271v0,-25,38,-21,37,-1r0,120v0,9,-6,16,-19,17v-10,0,-18,-6,-18,-18r0,-118xm50,-54v-2,-28,37,-24,37,-4r0,122v-2,20,-37,22,-37,-3r0,-115","w":135},"\u00a7":{"d":"53,-136v-50,-37,-22,-126,48,-122v21,1,48,9,57,35v-10,40,-34,-3,-59,-3v-38,0,-53,62,-11,73v65,3,89,71,47,110v49,37,22,125,-45,123v-23,-1,-50,-10,-60,-36v0,-9,6,-17,17,-17v9,0,27,25,43,21v43,2,51,-71,6,-75v-61,-5,-83,-76,-43,-109xm99,-117v-17,-5,-32,7,-33,28v-2,29,52,42,57,6v3,-19,-6,-29,-24,-34"},"\u00a8":{"d":"37,-217v0,-26,41,-19,39,1v-1,13,-9,19,-20,19v-13,0,-19,-9,-19,-20xm117,-217v0,-26,40,-20,38,1v-1,13,-8,19,-19,19v-13,0,-19,-9,-19,-20","w":180},"\u00a9":{"d":"19,-126v0,-62,57,-127,127,-127v62,0,127,55,127,127v0,63,-54,124,-128,126v-62,2,-126,-59,-126,-126xm150,-234v-59,-2,-110,46,-112,109v-1,52,48,105,108,107v54,2,108,-48,108,-109v0,-51,-45,-105,-104,-107xm56,-126v-8,-72,114,-130,157,-56v-9,33,-41,-14,-66,-8v-32,-1,-62,25,-64,67v-2,48,70,86,111,43v10,-3,19,2,19,13v0,8,-12,19,-39,28v-63,21,-111,-26,-118,-87","w":294},"\u00aa":{"d":"86,-159v-30,21,-77,-1,-77,-42v0,-25,18,-48,53,-50v39,-2,52,42,48,89v-2,13,-18,15,-24,3xm34,-208v-5,18,5,31,27,33v24,2,36,-43,6,-51v-16,-4,-28,2,-33,18","w":113},"\u00ab":{"d":"139,-26v-15,-5,-60,-57,-53,-65v31,-35,33,-53,55,-56v26,20,2,21,-25,61v23,31,36,33,36,49v-2,8,-6,11,-13,11xm44,-81v-3,-15,51,-94,64,-56v4,10,-15,21,-35,50v24,27,36,43,36,48v-3,10,-7,14,-18,13v-5,-4,-21,-22,-47,-55","w":165},"\u00ac":{"d":"31,-137r126,0v31,4,13,50,17,79v1,9,-7,17,-20,17v-26,0,-16,-33,-18,-58r-103,0v-26,0,-22,-39,-2,-38"},"\u00ae":{"d":"18,-127v0,-63,58,-127,128,-127v63,0,127,56,127,127v0,63,-54,127,-129,127v-62,0,-126,-60,-126,-127xm149,-235v-59,-2,-110,46,-112,109v-2,52,49,105,109,107v54,2,108,-47,108,-108v0,-51,-47,-106,-105,-108xm108,-214v47,-4,82,4,82,48v0,17,-10,31,-28,41r42,75v-9,14,-16,6,-25,-10r-35,-61r-26,0r0,70v0,12,-18,9,-18,1r0,-154v1,-6,3,-10,8,-10xm134,-138v47,5,50,-55,8,-58r-24,0r0,58r16,0","w":294},"\u00af":{"d":"3,-317r149,0v12,2,18,8,17,20v-1,11,-8,17,-17,17r-149,0v-10,0,-15,-7,-17,-20v3,-11,8,-17,17,-17","w":141},"\u00b0":{"d":"91,-204v0,-14,-12,-26,-26,-26v-14,0,-26,11,-26,26v0,14,12,26,26,26v14,0,26,-12,26,-26xm11,-205v0,-29,25,-54,54,-54v28,0,54,26,54,54v0,29,-25,55,-54,55v-30,0,-54,-25,-54,-55","w":118},"\u00b1":{"d":"79,-161v0,-26,-4,-58,21,-53v19,-1,17,30,16,53v23,0,57,-4,54,20v2,20,-31,19,-54,18v-2,25,10,50,-18,53v-22,3,-20,-27,-19,-53v-23,0,-54,3,-54,-20v0,-21,32,-18,54,-18xm42,-31v-27,-7,-20,-38,9,-38r101,-1v24,5,24,32,2,39v-35,-2,-76,-2,-112,0"},"\u00b2":{"d":"53,-235v-2,-19,18,-40,41,-40v37,0,57,50,24,75r-27,31v17,3,44,-8,46,11v-6,22,-48,6,-72,11v-13,-3,-14,-14,-4,-23v16,-22,40,-37,51,-65v2,-20,-30,-23,-35,-5v3,18,-23,22,-24,5"},"\u00b3":{"d":"58,-240v-2,-19,16,-34,36,-37v26,-3,47,39,27,59v27,21,9,72,-29,72v-20,0,-41,-17,-41,-42v0,-6,4,-9,12,-11v18,2,6,33,30,30v16,2,27,-29,6,-35v-17,0,-25,-25,-3,-25v3,1,12,-5,10,-12v1,-7,-6,-12,-13,-13v-15,-1,-7,28,-24,25v-7,-2,-11,-6,-11,-11"},"\u00b4":{"d":"39,-195v2,-16,76,-97,76,-38v0,6,-12,18,-33,39v-12,11,-16,18,-26,17v-12,-1,-17,-8,-17,-18","w":156},"\u00b5":{"d":"113,-30v29,2,54,-24,57,-60v2,-32,-14,-91,19,-94v11,3,17,8,17,17r0,156v0,9,-7,16,-19,17v-12,-2,-18,-8,-17,-20v-31,26,-84,28,-113,1v-6,34,16,86,-18,94v-10,0,-18,-7,-18,-19r0,-227v-2,-26,37,-21,36,-3r0,70v-2,44,21,66,56,68","w":207},"\u00b6":{"d":"12,-192v-1,-32,26,-64,64,-66v33,6,97,-16,99,20v0,9,-5,15,-15,17r0,208v0,25,-37,21,-37,1r0,-209r-14,0r0,209v-2,12,-8,18,-19,17v-12,-1,-17,-8,-17,-18r0,-113v-29,2,-60,-30,-61,-66","w":180},"\u00b7":{"d":"27,-110v-2,-29,48,-37,52,-3v1,16,-7,27,-26,28v-14,0,-25,-8,-26,-25","w":89},"\u2219":{"d":"27,-110v-2,-29,48,-37,52,-3v1,16,-7,27,-26,28v-14,0,-25,-8,-26,-25","w":89},"\u00b8":{"d":"102,44v-2,-7,-21,-9,-18,-19v0,-20,-2,-35,18,-37v14,3,17,9,16,23v36,22,17,80,-34,70v-15,3,-27,-5,-26,-18v2,-24,29,-11,44,-19","w":180},"\u00b9":{"d":"72,-263v-2,-13,18,-13,29,-17v7,2,10,5,10,11r0,107v0,15,-23,13,-23,1r0,-92v-8,3,-13,-1,-16,-10"},"\u00ba":{"d":"31,-216v0,-30,13,-61,39,-61v27,0,40,33,40,64v0,25,-13,57,-40,57v-26,0,-39,-31,-39,-60xm71,-255v-27,2,-28,75,0,77v23,0,27,-74,0,-77","w":126},"\u00bb":{"d":"50,-146v9,-2,55,60,52,61v0,4,-11,20,-36,49v-8,17,-28,14,-30,-1v0,-6,28,-36,36,-48v-22,-29,-35,-35,-35,-48v0,-7,5,-11,13,-13xm93,-146v13,4,60,57,52,65v-30,32,-33,54,-56,56v-22,-19,-1,-23,27,-60v-24,-27,-36,-43,-36,-48v2,-9,6,-13,13,-13","w":165},"\u00bc":{"d":"202,-255v13,-9,30,-4,31,15v-41,68,-63,84,-182,241v-13,9,-33,0,-30,-16v0,-4,10,-17,27,-39v96,-124,146,-192,154,-201xm28,-238v0,-15,39,-29,46,-9r0,133v-4,15,-20,16,-25,2r0,-115v-11,3,-21,-3,-21,-11xm195,-99r-26,35r26,0r0,-35xm197,-145v8,-12,24,-5,24,13r0,68v24,-8,29,26,9,26r-9,0v0,17,3,44,-13,43v-20,-2,-11,-24,-13,-43v-23,-4,-68,12,-66,-17","w":258},"\u00bd":{"d":"200,-254v13,-9,29,-3,30,15v0,5,-9,15,-23,34r-158,206v-13,9,-33,0,-30,-16v58,-86,192,-251,181,-239xm36,-225v-21,-16,-1,-28,23,-31v8,-1,17,9,13,21r1,121v-5,14,-20,16,-26,3r0,-115xm181,-146v30,-11,62,8,62,49v0,22,-39,56,-54,76v20,2,58,-8,56,14v-9,26,-57,6,-85,12v-27,-14,-5,-22,21,-55v28,-36,39,-31,36,-53v-3,-26,-37,-26,-44,-3v3,19,-21,25,-26,7v0,-22,10,-39,34,-47","w":262},"\u00be":{"d":"28,-165v26,-4,13,42,41,36v24,2,32,-46,4,-46v-11,0,-17,-4,-17,-14v0,-19,30,-4,29,-30v0,-14,-28,-19,-31,0v0,11,-6,16,-15,15v-8,-1,-11,-6,-11,-13v0,-21,15,-38,42,-41v31,-5,55,46,31,70v31,25,16,86,-35,84v-25,5,-63,-37,-38,-61xm217,-253v13,-9,29,-3,31,15v0,5,-10,15,-24,34r-157,205v-13,9,-33,0,-30,-16v57,-87,191,-250,180,-238xm210,-98r-26,34r26,0r0,-34xm212,-144v9,-12,24,-5,24,13r0,67v13,-1,20,1,22,15v-4,11,-10,11,-22,11v0,18,3,45,-14,43v-18,-3,-10,-25,-12,-43v-23,-4,-68,12,-66,-17","w":270},"\u00bf":{"d":"60,-171v2,-31,46,-33,47,0v-3,30,-44,30,-47,0xm86,67v-42,0,-81,-36,-81,-81v0,-31,16,-54,45,-73v12,-8,16,-25,16,-44v9,-18,35,-11,35,9v0,32,-17,53,-45,74v-32,24,-12,79,30,79v25,0,44,-17,45,-51v11,-18,36,-8,36,8v0,36,-37,79,-81,79","w":171},"\u00c0":{"d":"81,-287v-16,-10,-9,-38,9,-36v14,-2,65,58,22,63v-12,1,-15,-8,-31,-27xm126,-132r-22,-56r-21,56r43,0xm88,-249v17,-18,29,-7,39,19r81,218v0,9,-6,16,-19,17v-11,0,-14,-9,-21,-26r-29,-74r-70,0r-36,94v-12,12,-35,4,-33,-13","w":214,"k":{"\u00ff":11,"\u00fd":22,"\u00dd":39,"v":24,"j":35,"Y":43,"W":21,"V":43,"T":37}},"\u00c1":{"d":"76,-277v-1,-7,21,-44,40,-44v13,0,18,7,17,19v-2,16,-46,72,-57,25xm125,-131r-21,-56r-21,56r42,0xm87,-248v16,-18,29,-7,39,19r81,217v0,9,-5,17,-18,17v-11,0,-16,-10,-22,-26r-28,-74r-70,0r-36,94v-12,12,-35,4,-33,-13","w":213,"k":{"\u00ff":9,"\u00fd":11,"\u00dd":35,"j":36,"Y":42,"W":28,"V":35,"T":43}},"\u00c2":{"d":"102,-318v16,-4,39,30,43,44v-5,25,-29,23,-41,2v-13,21,-35,23,-41,-2v-1,-4,23,-43,39,-44xm125,-131r-21,-56r-21,56r42,0xm87,-248v16,-18,29,-7,39,19r81,217v0,9,-5,17,-18,17v-11,0,-16,-10,-22,-26r-28,-74r-70,0r-36,94v-12,12,-35,4,-33,-13","w":213,"k":{"\u00ff":9,"\u00fd":11,"\u00dd":35,"j":19,"Y":35,"W":21,"V":35,"T":38}},"\u00c3":{"d":"52,-288v2,-29,51,-25,71,-9v13,-7,34,-3,33,15v-2,24,-49,28,-67,8v-15,6,-38,3,-37,-14xm125,-131r-21,-56r-21,56r42,0xm87,-248v16,-18,29,-7,39,19r81,217v0,9,-5,17,-18,17v-11,0,-16,-10,-22,-26r-28,-74r-70,0r-36,94v-12,12,-35,4,-33,-13","w":213,"k":{"\u00ff":10,"\u00fd":12,"\u00dd":36,"j":19,"Y":36,"W":14,"V":36,"T":36}},"\u00c4":{"d":"78,-270v-25,-2,-24,-38,2,-37v23,2,23,36,-2,37xm111,-287v0,-26,34,-28,36,-1v0,9,-6,15,-18,18v-12,-2,-18,-8,-18,-17xm125,-131r-21,-56r-21,56r42,0xm87,-248v16,-18,29,-7,39,19r81,217v0,9,-5,17,-18,17v-11,0,-16,-10,-22,-26r-28,-74r-70,0r-36,94v-12,12,-35,4,-33,-13","w":215,"k":{"\u00ff":12,"\u00fd":13,"\u00dd":37,"v":28,"j":28,"Y":37,"W":33,"V":37,"T":41}},"\u00c5":{"d":"112,-260v-21,9,-42,-10,-43,-34v-2,-36,62,-47,68,-7v3,22,-5,33,-25,41xm93,-293v1,14,22,12,20,-1v-1,-13,-19,-12,-20,1xm125,-131r-21,-57r-21,57r42,0xm88,-248v17,-19,29,-8,39,19r81,217v-6,25,-36,21,-40,-9r-29,-74r-70,0r-36,94v-12,12,-35,4,-33,-13","w":214,"k":{"\u00ff":15,"\u00fd":16,"\u00dd":36,"v":29,"j":34,"Y":43,"W":32,"V":40,"T":39}},"\u00c6":{"d":"130,-252v28,-15,79,-2,117,-6v8,0,14,6,17,18v-7,36,-66,13,-102,19r0,89v29,4,82,-13,81,20v-2,27,-53,14,-81,17r0,64r84,0v21,2,23,36,-1,36r-101,0v-32,-4,-13,-67,-18,-100r-41,0r-53,94v-13,11,-30,7,-32,-13v20,-45,99,-179,130,-238xm105,-132r21,0r0,-36","w":275,"k":{"j":36}},"\u00c7":{"d":"2,-128v-8,-91,123,-173,203,-104v12,10,1,33,-13,31v-7,-1,-44,-23,-61,-19v-43,-4,-92,43,-92,92v0,67,84,123,147,75v14,-3,25,5,24,18v2,14,-27,29,-63,35r0,5v38,24,18,85,-36,75v-16,3,-29,-4,-27,-19v2,-20,20,-16,40,-16v5,0,7,-2,7,-5v-12,-7,-26,-15,-20,-40v-56,-6,-115,-72,-109,-128","w":245,"k":{"\u00ff":29,"\u00fd":36,"\u00ed":9,"\u00d6":16,"\u00d5":16,"\u00d4":16,"\u00d3":24,"\u00d2":16,"\u00d0":10,"\u00cf":13,"\u00ce":17,"\u00cd":18,"\u00cc":13,"\u00c7":18,"y":36,"w":21,"v":44,"t":23,"j":37,"f":27,"Q":16,"O":16,"G":24,"C":16}},"\u00c8":{"d":"59,-291v-16,-10,-8,-38,10,-36v14,-2,65,60,19,63v-6,0,-16,-9,-29,-27xm13,-259v41,4,97,2,140,1v11,0,18,7,20,20v-2,11,-9,17,-20,17r-117,0r0,79v35,6,93,-17,101,18v-1,32,-65,13,-101,18r0,75r120,0v9,0,15,6,17,19v-3,11,-10,17,-18,17r-138,0v-12,-2,-17,-8,-17,-18r0,-226v2,-12,6,-18,13,-18r0,-2","w":182,"k":{"\u00fd":14,"y":13,"v":10,"j":32}},"\u00c9":{"d":"50,-283v-1,-3,24,-45,40,-44v12,1,18,9,18,19v0,13,-48,76,-58,25xm13,-259v41,4,97,2,140,1v11,0,18,7,20,20v-2,11,-9,17,-20,17r-117,0r0,79v35,6,93,-17,101,18v-1,32,-65,13,-101,18r0,75r120,0v9,0,15,6,17,19v-3,11,-10,17,-18,17r-138,0v-12,-2,-17,-8,-17,-18r0,-226v2,-12,6,-18,13,-18r0,-2","k":{"\u00fd":9,"y":9,"j":32}},"\u00ca":{"d":"78,-321v24,-12,48,28,51,44v-6,24,-29,21,-41,0v-11,20,-36,24,-41,0v-3,-13,10,-18,31,-44xm13,-259v41,4,97,2,140,1v11,0,18,7,20,20v-2,11,-9,17,-20,17r-117,0r0,79v35,6,93,-17,101,18v-1,32,-65,13,-101,18r0,75r120,0v9,0,15,6,17,19v-3,11,-10,17,-18,17r-138,0v-12,-2,-17,-8,-17,-18r0,-226v2,-12,6,-18,13,-18r0,-2","k":{"\u00fd":9,"y":9,"j":31}},"\u00cb":{"d":"60,-268v-25,-2,-24,-38,2,-37v23,3,21,36,-2,37xm92,-286v1,-25,35,-26,37,0v0,9,-7,15,-19,18v-12,-2,-18,-9,-18,-18xm13,-259v41,4,97,2,140,1v11,0,18,7,20,20v-2,11,-9,17,-20,17r-117,0r0,79v35,6,93,-17,101,18v-1,32,-65,13,-101,18r0,75r120,0v9,0,15,6,17,19v-3,11,-10,17,-18,17r-138,0v-12,-2,-17,-8,-17,-18r0,-226v2,-12,6,-18,13,-18r0,-2","w":180,"k":{"\u00fd":12,"y":15,"j":32}},"\u00cc":{"d":"64,-262v-18,-4,-65,-55,-21,-63v17,0,65,58,21,63xm19,-239v-2,-20,29,-18,49,-18v25,0,21,38,0,37r3,0r-1,189v9,0,16,6,16,19v0,24,-27,16,-49,17v-27,1,-17,-39,-2,-36r0,-189r2,0v-11,0,-17,-6,-18,-19","w":115,"k":{"j":50}},"\u00cd":{"d":"32,-283v-1,-3,24,-45,40,-44v12,1,18,9,18,19v-1,13,-48,75,-58,25xm25,-239v-3,-21,28,-19,48,-19v27,0,22,38,1,38r2,0r-1,189v9,0,17,7,17,19v0,24,-27,17,-50,17v-27,0,-16,-38,-2,-36r0,-189r3,0v-11,0,-17,-6,-18,-19","w":115,"k":{"j":35}},"\u00ce":{"d":"25,-239v-2,-20,29,-19,49,-19v25,0,21,38,1,38r2,0r-1,189v9,0,16,7,16,19v0,24,-27,17,-49,17v-28,0,-17,-38,-2,-36r0,-189r2,0v-11,0,-17,-6,-18,-19xm18,-278v0,-5,22,-48,43,-44v15,-2,64,58,20,62v-7,0,-14,-6,-22,-17v-10,22,-39,22,-41,-1","w":115,"k":{"j":36}},"\u00cf":{"d":"33,-265v-27,-1,-21,-39,1,-36v22,3,22,34,-1,36xm64,-283v-1,-12,7,-18,20,-18v24,0,22,35,-2,36v-12,-2,-18,-8,-18,-18xm25,-239v-3,-20,28,-18,48,-18v25,0,22,38,1,37r2,0r-1,189v9,0,16,6,16,19v0,24,-27,16,-49,17v-26,1,-16,-39,-2,-36r0,-189r3,0v-11,0,-17,-6,-18,-19","w":115,"k":{"j":40}},"\u00d0":{"d":"218,-125v0,77,-70,130,-174,130v-9,0,-14,-5,-17,-16r0,-99v-29,6,-39,-32,-10,-36r10,0r0,-93v2,-29,36,-15,61,-18v64,-6,130,60,130,132xm182,-126v0,-55,-42,-100,-119,-94r0,74v24,1,64,-8,62,19v-3,27,-37,14,-62,17r0,79v69,7,119,-29,119,-95","w":224,"k":{"j":31}},"\u00d1":{"d":"157,-277v-1,28,-52,27,-71,9v-14,7,-34,2,-33,-15v2,-25,47,-27,67,-8v15,-6,38,-4,37,14xm176,-65r0,-175v2,-23,37,-23,37,0r0,228v-7,27,-27,17,-44,-4r-133,-169r0,173v0,20,-36,24,-36,1r0,-229v3,-22,30,-23,38,-3","w":226,"k":{"j":32}},"\u00d2":{"d":"142,-263v-16,3,-65,-61,-19,-62v17,2,60,57,19,62xm0,-126v0,-65,61,-130,131,-130v63,0,130,58,130,131v0,65,-57,130,-132,130v-64,0,-129,-56,-129,-131xm131,-220v-47,-1,-95,41,-95,96v0,46,43,93,97,93v45,0,92,-43,92,-95v0,-47,-41,-93,-94,-94","w":267,"k":{"j":28,"T":24}},"\u00d3":{"d":"103,-282v0,-6,23,-46,40,-44v12,2,18,9,18,18v2,9,-58,75,-58,26xm0,-126v0,-65,60,-131,131,-131v63,0,131,59,131,132v0,65,-58,130,-132,130v-64,0,-130,-55,-130,-131xm131,-220v-47,-1,-95,41,-95,96v0,46,43,93,97,93v46,0,93,-44,93,-95v0,-47,-41,-93,-95,-94","w":269,"k":{"j":30,"T":23}},"\u00d4":{"d":"0,-126v0,-65,61,-130,131,-130v63,0,130,58,130,131v0,65,-57,130,-132,130v-64,0,-129,-56,-129,-131xm131,-220v-47,-1,-95,41,-95,96v0,46,43,93,97,93v45,0,92,-43,92,-95v0,-47,-41,-93,-94,-94xm128,-324v16,-4,40,30,43,45v-5,23,-29,22,-41,1v-13,21,-35,23,-41,-2v-1,-4,23,-43,39,-44","w":267,"k":{"j":33,"T":19}},"\u00d5":{"d":"78,-294v2,-32,49,-25,71,-10v13,-7,34,-1,33,14v-2,27,-51,25,-72,9v-13,7,-33,2,-32,-13xm0,-126v0,-65,61,-130,131,-130v63,0,130,58,130,131v0,65,-57,130,-132,130v-64,0,-129,-56,-129,-131xm131,-220v-47,-1,-95,41,-95,96v0,46,43,93,97,93v45,0,92,-43,92,-95v0,-47,-41,-93,-94,-94","w":268,"k":{"j":30,"T":24}},"\u00d6":{"d":"75,-289v3,-20,34,-22,37,2v-2,28,-41,20,-37,-2xm150,-289v3,-20,37,-23,37,2v0,26,-37,21,-37,2r0,-4xm0,-126v0,-65,60,-131,131,-131v63,0,131,59,131,132v0,65,-58,130,-132,130v-64,0,-130,-55,-130,-131xm131,-220v-47,-1,-95,41,-95,96v0,46,43,93,97,93v46,0,93,-44,93,-95v0,-47,-41,-93,-95,-94","w":270,"k":{"\u00dd":17,"j":34,"Y":19,"T":26}},"\u00d7":{"d":"127,-112v21,20,27,23,28,36v-11,40,-40,18,-58,-6v-18,20,-24,28,-40,27v-36,-11,-11,-44,9,-57v-20,-21,-30,-25,-27,-38v8,-36,40,-18,57,7v22,-20,23,-31,39,-27v30,7,22,36,-8,58"},"\u00d8":{"d":"80,-45v77,51,180,-36,134,-126xm190,-199v-60,-51,-154,-4,-154,75v0,22,6,40,18,54xm240,-196v57,85,-8,202,-111,201v-28,0,-53,-8,-76,-25v-21,18,-24,27,-35,25v-25,-5,-22,-30,5,-46v0,-1,2,-3,4,-5v-68,-83,0,-212,104,-210v33,0,61,11,86,33v18,-18,25,-25,34,-25v35,11,7,39,-11,52","w":274,"k":{"j":31}},"\u00d9":{"d":"104,-262v-13,-1,-66,-54,-21,-63v13,-1,67,56,21,63xm95,5v-50,0,-95,-40,-95,-99r0,-145v0,-25,36,-20,36,-1r0,141v-1,43,22,66,57,68v29,2,57,-22,57,-60r0,-148v1,-25,38,-19,37,0r0,154v4,42,-45,90,-92,90","w":193,"k":{"j":30}},"\u00da":{"d":"82,-308v10,-23,40,-21,41,2v0,8,-27,45,-40,44v-27,-9,-22,-26,-1,-46xm95,5v-50,0,-95,-40,-95,-99r0,-145v0,-25,36,-20,36,-1r0,141v-1,43,22,66,57,68v29,2,57,-22,57,-60r0,-148v1,-25,38,-19,37,0r0,154v4,42,-45,90,-92,90","w":194,"k":{"j":28}},"\u00db":{"d":"96,5v-50,0,-97,-40,-96,-99r0,-146v0,-24,36,-20,36,-1v0,83,-26,209,58,210v30,1,57,-25,57,-61r0,-148v0,-24,36,-20,36,0r0,155v4,42,-44,90,-91,90xm96,-275v-14,11,-10,17,-24,16v-28,-8,-19,-29,6,-52v10,-17,35,-11,47,14v19,13,12,40,-8,38v-7,0,-14,-5,-21,-16","w":197,"k":{"j":31}},"\u00dc":{"d":"68,-266v-25,-2,-24,-38,2,-37v23,3,21,36,-2,37xm100,-283v1,-25,35,-28,37,-1v0,9,-7,15,-19,18v-12,-2,-18,-8,-18,-17xm96,5v-50,0,-97,-40,-96,-99r0,-146v0,-24,36,-20,36,-1v0,83,-26,209,58,210v30,1,57,-25,57,-61r0,-148v0,-24,36,-20,36,0r0,155v4,42,-44,90,-91,90","w":198,"k":{"j":33}},"\u00dd":{"d":"71,-278v-1,-3,23,-45,41,-43v12,1,18,8,18,18v0,13,-48,76,-59,25xm94,-158v54,-71,49,-94,79,-99v26,11,14,25,-7,57r-53,80r0,106v-2,25,-31,26,-37,4r0,-110v-24,-41,-55,-75,-76,-119v4,-24,31,-24,38,-3","w":194,"k":{"\u00f8":32,"\u00f6":28,"\u00f4":25,"\u00f3":31,"\u00f2":32,"\u00f0":29,"\u00eb":26,"\u00ea":26,"\u00e9":36,"\u00e8":31,"\u00e7":33,"\u00e6":35,"\u00e5":22,"\u00e4":28,"\u00e2":29,"\u00e1":33,"\u00e0":31,"\u00c6":33,"\u00c5":33,"\u00c4":35,"\u00c3":35,"\u00c2":40,"\u00c1":36,"\u00c0":35,"s":22,"q":31,"p":33,"o":32,"j":35,"g":33,"e":35,"d":36,"c":32,"a":32,"J":37,"A":36}},"\u00de":{"d":"181,-128v2,39,-31,74,-74,73r-67,0v-3,26,10,59,-19,60v-10,0,-17,-6,-17,-18r0,-225v-3,-27,36,-23,36,-4r0,44v74,-3,137,-1,141,70xm144,-120v10,-48,-56,-42,-104,-41r0,69v43,-4,96,15,104,-28","w":193,"k":{"\u00dd":33,"\u00c6":28,"j":51,"Z":33,"Y":33,"X":30,"T":49}},"\u00df":{"d":"79,-256v47,-1,93,61,60,112v-2,21,45,49,37,80v6,61,-94,97,-128,38v0,-16,7,-24,19,-24v11,0,25,19,40,19v18,0,32,-12,33,-35v2,-23,-43,-51,-38,-75v-2,-9,11,-27,11,-46v0,-15,-16,-32,-37,-33v-22,-1,-36,18,-36,47r0,160v-1,20,-36,24,-36,-1v0,-101,-34,-239,75,-242","w":186,"k":{"\u00dd":16,"j":34,"Y":19,"T":15}},"\u00e0":{"d":"110,-188v-16,-5,-62,-50,-23,-61v14,-4,33,23,41,43v0,9,-6,16,-18,18xm93,-145v-29,-1,-56,22,-57,58v-1,29,22,57,60,57v25,0,55,-26,55,-58v0,-28,-24,-56,-58,-57xm93,-181v45,-1,97,39,93,95v-2,33,16,91,-18,91v-8,0,-17,-6,-17,-19v-56,47,-151,4,-151,-74v0,-46,40,-92,93,-93","w":196,"k":{"\u00dd":37,"j":26,"Y":39,"T":27}},"\u00e1":{"d":"128,-232v-1,17,-47,73,-56,25v-1,-3,21,-42,38,-42v12,3,18,8,18,17xm93,-145v-29,-1,-56,22,-57,58v-1,29,22,57,60,57v25,0,55,-26,55,-58v0,-28,-24,-56,-58,-57xm93,-181v45,-1,97,39,93,95v-2,33,16,91,-18,91v-8,0,-17,-6,-17,-19v-56,47,-151,4,-151,-74v0,-46,40,-92,93,-93","w":195,"k":{"\u00dd":21,"j":32,"Y":22,"T":18}},"\u00e2":{"d":"94,-146v-30,-1,-57,22,-58,58v-1,29,23,57,60,58v25,1,55,-26,55,-59v0,-28,-23,-56,-57,-57xm94,-182v45,-1,97,39,93,96v-2,33,16,85,-18,91v-8,0,-20,-8,-17,-19v-57,47,-152,5,-152,-75v0,-46,40,-92,94,-93xm53,-207v1,-7,23,-44,42,-43v17,2,62,57,20,61v-7,0,-13,-5,-21,-16v-11,22,-39,20,-41,-2","w":200,"k":{"\u00dd":30,"j":36,"Y":35,"V":15,"T":38}},"\u00e3":{"d":"47,-221v2,-30,47,-24,69,-10v13,-7,32,-2,32,14v0,23,-46,30,-65,10v-15,5,-38,3,-36,-14xm94,-147v-29,-1,-57,23,-58,59v-1,30,24,57,61,58v27,1,55,-26,55,-59v0,-29,-25,-56,-58,-58xm94,-182v47,-1,92,39,94,95v-6,33,17,92,-19,92v-9,0,-17,-7,-17,-20v-56,49,-152,6,-152,-74v0,-46,40,-91,94,-93","w":197,"k":{"j":32}},"\u00e4":{"d":"68,-189v-24,-2,-23,-36,2,-35v23,3,21,34,-2,35xm100,-205v0,-25,34,-26,36,-1v0,9,-6,15,-18,18v-12,-2,-18,-8,-18,-17xm94,-146v-30,-1,-57,22,-58,58v-1,29,23,57,60,58v25,1,55,-26,55,-59v0,-28,-23,-56,-57,-57xm94,-182v45,-1,97,39,93,96v-2,33,16,85,-18,91v-8,0,-20,-8,-17,-19v-57,47,-152,5,-152,-75v0,-46,40,-92,94,-93","w":199,"k":{"\u00dd":27,"j":34,"Y":31,"V":19,"T":51}},"\u00e5":{"d":"89,-259v45,-11,64,63,15,73v-24,5,-45,-7,-45,-37v0,-17,9,-31,30,-36xm97,-231v-14,-1,-12,18,-3,18v7,1,11,-2,12,-9v-1,-6,-4,-9,-9,-9xm94,-146v-30,-1,-57,22,-58,58v-1,29,23,57,60,58v25,1,55,-26,55,-59v0,-28,-23,-56,-57,-57xm94,-182v45,-1,97,39,93,96v-2,33,16,85,-18,91v-8,0,-20,-8,-17,-19v-57,47,-152,5,-152,-75v0,-46,40,-92,94,-93","w":198,"k":{"\u00dd":21,"j":33,"Y":20,"V":17,"T":20}},"\u00e6":{"d":"300,-101v-7,-41,-81,-65,-105,-16v-5,9,-7,14,-7,16r112,0xm93,-146v-28,-1,-56,22,-57,58v-1,29,22,57,60,57v26,0,55,-25,55,-58v0,-28,-24,-57,-58,-57xm192,-65v13,32,54,43,90,24v12,3,18,9,18,18v1,32,-94,38,-114,9v3,20,-30,28,-35,5r0,-6v-56,49,-151,5,-151,-74v0,-46,40,-92,93,-93v31,0,57,13,76,39v13,-21,42,-37,76,-38v47,-2,96,40,92,99v-1,11,-7,17,-17,17r-128,0","w":344,"k":{"\u00dd":45,"j":34,"Y":40,"T":40}},"\u00e7":{"d":"2,-88v-5,-73,102,-126,158,-65v7,13,-1,30,-15,28v-9,0,-33,-24,-53,-19v-27,-2,-53,24,-55,57v-3,45,64,79,100,39v14,-3,25,1,26,17v3,12,-28,27,-54,36v37,23,17,84,-36,73v-15,3,-27,-5,-27,-18v0,-26,34,-9,46,-22v-12,-6,-24,-13,-19,-35v-32,-5,-77,-53,-71,-91","w":173,"k":{"\u00dd":30,"Y":33,"T":44}},"\u00e8":{"d":"110,-187v-16,-3,-61,-50,-24,-61v16,-4,34,23,42,43v0,10,-6,16,-18,18xm0,-88v-2,-46,41,-93,93,-94v48,-1,97,39,94,99v-1,12,-8,17,-18,17r-128,0v7,27,53,49,86,25v15,0,22,7,22,19v0,14,-22,25,-56,27v-47,2,-91,-39,-93,-93xm150,-101v-2,-15,-33,-52,-59,-44v-23,-3,-47,22,-53,44r112,0","w":198,"k":{"\u00dd":37,"j":33,"Y":31,"V":13,"T":37}},"\u00e9":{"d":"128,-231v-1,16,-48,73,-56,25v-1,-4,22,-42,38,-43v12,3,18,9,18,18xm0,-88v-2,-46,41,-93,93,-94v48,-1,97,39,94,99v-1,12,-8,17,-18,17r-128,0v7,27,53,49,86,25v15,0,22,7,22,19v0,14,-22,25,-56,27v-47,2,-91,-39,-93,-93xm150,-101v-2,-15,-33,-52,-59,-44v-23,-3,-47,22,-53,44r112,0","w":196,"k":{"\u00dd":19,"j":33,"Y":21,"T":23}},"\u00ea":{"d":"0,-88v-2,-46,41,-93,93,-94v48,-1,97,39,94,99v-1,12,-8,17,-18,17r-128,0v7,27,53,49,86,25v15,0,22,7,22,19v0,14,-22,25,-56,27v-47,2,-91,-39,-93,-93xm150,-101v-2,-15,-33,-52,-59,-44v-23,-3,-47,22,-53,44r112,0xm53,-207v1,-7,23,-44,42,-43v17,2,62,57,20,61v-7,0,-13,-5,-21,-16v-11,22,-39,20,-41,-2","w":201,"k":{"\u00dd":29,"j":34,"Y":29,"V":18,"T":36}},"\u00eb":{"d":"68,-192v-23,-2,-23,-35,2,-35v23,3,21,34,-2,35xm100,-208v-1,-25,34,-26,35,-1v0,9,-6,15,-18,18v-12,-2,-17,-8,-17,-17xm0,-88v-2,-46,40,-93,93,-93v48,0,94,39,94,98v0,12,-8,18,-18,18r-128,0v8,26,54,47,86,24v15,0,22,7,22,19v0,14,-22,25,-56,27v-46,2,-91,-39,-93,-93xm150,-101v-3,-15,-34,-51,-59,-43v-23,-3,-49,20,-53,43r112,0","w":197,"k":{"\u00dd":15,"j":33,"Y":25,"T":33}},"\u00ec":{"d":"54,-186v-17,-5,-61,-50,-23,-61v14,-4,33,23,41,43v0,10,-6,16,-18,18xm29,-162v-2,-27,37,-22,36,-3r0,153v-1,19,-36,25,-36,0r0,-150","w":90,"k":{"j":46}},"\u00ed":{"d":"78,-229v-1,17,-48,73,-57,25v-1,-4,23,-43,39,-43v12,3,18,9,18,18xm29,-163v-2,-26,37,-21,36,-3r0,154v-1,20,-36,25,-36,0r0,-151","w":90,"k":{"j":39}},"\u00ee":{"d":"28,-163v-2,-26,36,-23,36,-4r0,155v0,20,-36,24,-36,0r0,-151xm44,-246v16,-2,39,32,42,44v-5,25,-28,23,-40,2v-11,22,-39,20,-41,-2v-1,-7,25,-43,39,-44","w":90,"k":{"j":30}},"\u00ef":{"d":"21,-193v-24,-3,-23,-36,2,-36v23,3,21,34,-2,36xm53,-210v1,-25,34,-26,35,0v0,9,-6,14,-18,17v-12,-2,-17,-8,-17,-17xm29,-163v-2,-26,37,-21,36,-3r0,154v-1,19,-36,25,-36,0r0,-151","w":90,"k":{"j":32,"T":-3}},"\u00f0":{"d":"102,-181v-3,-11,-12,-4,-18,0v6,-1,12,-1,18,0xm93,-145v-28,0,-56,21,-57,58v0,29,23,56,59,56v27,1,56,-23,56,-59v0,-26,-26,-55,-58,-55xm0,-88v0,-37,26,-76,63,-88v-20,-11,-9,-36,14,-43v-11,-13,-2,-34,15,-31v6,0,11,4,16,12v17,-9,23,-14,31,-14v28,11,18,32,-12,45v20,37,57,67,60,119v2,47,-41,93,-97,93v-41,0,-90,-46,-90,-93","w":196,"k":{"j":35}},"\u00f1":{"d":"45,-223v4,-30,48,-23,70,-9v13,-7,33,-1,31,14v-1,28,-49,23,-70,9v-14,6,-33,1,-31,-14xm91,-145v-31,0,-57,22,-55,66v-5,30,15,84,-18,84v-9,0,-18,-5,-18,-17r0,-150v-2,-26,37,-21,36,-3r0,2v54,-46,146,2,146,70r0,82v0,9,-7,15,-19,16v-32,-6,-14,-58,-17,-89v-3,-35,-18,-60,-55,-61","w":194,"k":{"j":33}},"\u00f2":{"d":"111,-189v-16,-4,-63,-50,-24,-61v13,-4,35,22,41,43v0,10,-5,16,-17,18xm0,-88v0,-46,43,-94,94,-94v46,0,93,46,93,94v0,47,-41,93,-97,93v-41,0,-90,-46,-90,-93xm93,-145v-28,0,-56,21,-57,58v0,29,23,56,59,56v27,1,56,-23,56,-59v0,-27,-25,-55,-58,-55","w":196,"k":{"\u00dd":30,"j":42,"Y":30,"T":20}},"\u00f3":{"d":"128,-232v-1,17,-47,73,-56,25v-1,-3,21,-42,38,-42v12,3,18,8,18,17xm0,-88v0,-46,43,-93,93,-93v47,0,93,46,93,93v0,47,-40,93,-96,93v-41,0,-90,-46,-90,-93xm92,-145v-28,0,-55,22,-56,59v-1,28,23,55,59,55v27,0,55,-23,55,-59v0,-28,-26,-55,-58,-55","w":196,"k":{"\u00dd":19,"j":38,"Y":28,"T":20}},"\u00f4":{"d":"0,-88v0,-46,43,-93,93,-93v47,0,93,46,93,93v0,47,-40,93,-96,93v-41,0,-90,-46,-90,-93xm92,-145v-28,0,-55,22,-56,59v-1,28,23,55,59,55v27,0,55,-23,55,-59v0,-28,-26,-55,-58,-55xm91,-249v17,-3,39,31,42,44v-5,24,-28,21,-40,1v-11,22,-38,19,-40,-2v-1,-7,24,-41,38,-43","w":196,"k":{"\u00dd":24,"j":39,"Y":24,"T":30}},"\u00f5":{"d":"46,-220v2,-31,48,-23,70,-10v13,-7,33,0,32,14v-2,28,-49,25,-70,9v-13,7,-33,2,-32,-13xm0,-88v0,-46,43,-94,94,-94v46,0,93,46,93,94v0,47,-41,93,-97,93v-41,0,-90,-46,-90,-93xm93,-145v-28,0,-56,21,-57,58v0,29,23,56,59,56v27,1,56,-23,56,-59v0,-27,-25,-55,-58,-55","w":196,"k":{"j":34,"T":15}},"\u00f6":{"d":"68,-188v-23,-2,-23,-35,2,-35v23,3,21,34,-2,35xm99,-204v0,-25,35,-26,36,-1v0,9,-6,15,-18,18v-12,-2,-18,-8,-18,-17xm0,-88v0,-46,43,-93,93,-93v47,0,93,46,93,93v0,47,-40,93,-96,93v-41,0,-90,-46,-90,-93xm92,-145v-28,0,-55,22,-56,59v-1,28,23,55,59,55v27,0,55,-23,55,-59v0,-28,-26,-55,-58,-55","w":195,"k":{"\u00dd":21,"j":40,"Y":23,"T":40}},"\u00f7":{"d":"74,-180v2,-34,50,-30,49,2v-2,32,-51,27,-49,-2xm44,-146r108,0v24,2,26,38,1,38r-109,0v-24,-2,-25,-38,0,-38xm98,-49v-33,-5,-32,-49,1,-49v13,0,24,9,24,26v0,12,-9,19,-25,23"},"\u00f8":{"d":"124,-140v-44,-19,-97,23,-75,77xm73,-37v48,27,104,-27,77,-79xm23,-37v-57,-74,43,-184,126,-129v14,-20,36,-26,42,1v0,5,-5,13,-16,23v45,59,1,149,-78,147v-17,0,-34,-5,-49,-16v-15,20,-35,24,-41,-3v0,-5,6,-13,16,-23","w":204,"k":{"j":33,"T":29}},"\u00f9":{"d":"110,-189v-16,-3,-62,-50,-23,-60v14,-4,35,21,41,43v0,10,-6,15,-18,17xm91,-30v28,2,52,-24,55,-59v3,-32,-13,-90,19,-92v11,3,16,8,16,17r0,153v0,9,-6,15,-18,16v-12,-2,-18,-7,-17,-19v-59,47,-151,4,-146,-77v2,-32,-13,-88,19,-90v32,6,12,54,17,85v-1,42,21,64,55,66","w":194,"k":{"\u00dd":17,"j":35,"Y":17,"T":34}},"\u00fa":{"d":"129,-234v-1,18,-47,71,-57,26v-1,-3,23,-42,39,-43v12,3,18,8,18,17xm91,-30v28,2,53,-24,56,-59v3,-32,-13,-90,18,-93v11,3,17,8,17,17r0,154v0,9,-6,15,-18,16v-12,-2,-18,-7,-17,-19v-60,47,-152,4,-147,-78v2,-32,-13,-88,19,-90v32,6,17,54,17,85v0,43,21,64,55,67","w":194,"k":{"\u00dd":11,"j":34,"Y":11,"T":16}},"\u00fb":{"d":"92,-31v28,1,55,-21,55,-58v0,-32,-13,-91,19,-94v11,3,17,9,17,18r0,154v0,9,-7,15,-19,16v-12,-2,-18,-7,-17,-19v-59,48,-151,2,-147,-78v2,-32,-13,-88,19,-91v32,7,17,54,17,86v0,43,21,64,56,66xm92,-252v17,-2,39,31,42,44v-5,25,-28,22,-40,1v-10,23,-38,21,-40,-1v-1,-7,24,-42,38,-44","w":195,"k":{"\u00dd":12,"j":36,"Y":12,"T":24}},"\u00fc":{"d":"91,-30v28,2,52,-24,55,-59v3,-32,-13,-90,19,-92v11,3,17,8,17,17r0,153v0,9,-7,15,-19,16v-11,-2,-17,-7,-17,-18v-60,45,-151,3,-146,-78v2,-31,-13,-88,19,-90v32,6,11,53,17,84v-1,44,21,65,55,67xm100,-205v1,-25,34,-26,35,0v0,9,-6,14,-18,17v-12,-2,-17,-8,-17,-17xm68,-188v-23,-3,-24,-36,2,-36v23,3,21,34,-2,36","w":194,"k":{"\u00dd":17,"j":39,"Y":17,"T":38}},"\u00fd":{"d":"132,-235v0,17,-48,73,-56,25v-1,-3,23,-41,38,-42v12,3,18,8,18,17xm84,-62v31,-75,48,-114,50,-117v11,-12,33,0,31,13r-99,238v-10,10,-34,1,-30,-14v0,-2,9,-27,28,-73r-61,-151v10,-29,30,-17,42,12","w":174,"k":{"\u00c6":22,"\u00c5":22,"\u00c4":20,"\u00c3":20,"\u00c2":22,"\u00c1":20,"\u00c0":24,"j":40,"A":23}},"\u00fe":{"d":"189,-88v9,68,-94,124,-152,74v-6,33,16,85,-17,93v-10,0,-18,-6,-18,-18r0,-292v-2,-26,35,-22,35,-4r0,73v56,-50,158,2,152,74xm95,-146v-28,0,-56,22,-57,59v0,29,24,56,60,56v27,1,55,-23,55,-59v0,-27,-26,-56,-58,-56","w":198,"k":{"\u00dd":43,"j":44,"Y":45,"T":44}},"\u00ff":{"d":"59,-188v-25,-2,-24,-35,2,-35v23,3,21,34,-2,35xm90,-205v1,-24,35,-25,36,0v0,9,-6,14,-18,17v-12,-2,-18,-8,-18,-17xm82,-59v31,-75,47,-114,49,-117v11,-12,33,-1,31,13v-1,4,-19,58,-63,157v-27,60,-20,78,-47,85v-13,-4,-19,-8,-18,-19v0,-2,9,-26,28,-72r-60,-151v10,-29,29,-17,41,12","w":174,"k":{"\u00dd":15,"\u00c6":25,"\u00c5":17,"\u00c4":22,"\u00c3":21,"\u00c2":22,"\u00c1":18,"\u00c0":21,"j":40,"Z":23,"Y":11,"X":10,"T":29,"A":22}}}});

/* -------------------------------------------------- *
 * ToggleVal 3.0
 * Updated: 01/15/2010
 * -------------------------------------------------- *
 * Author: Aaron Kuzemchak
 * URL: http://aaronkuzemchak.com/
 * Copyright: 2008-2010 Aaron Kuzemchak
 * License: MIT License
** -------------------------------------------------- */

;(function($) {
	// main plugin function
	$.fn.toggleVal = function(theOptions) {
		// check whether we want real options, or to destroy functionality
		if(!theOptions || typeof theOptions == 'object') {
			theOptions = $.extend({}, $.fn.toggleVal.defaults, theOptions);
		}
		else if(typeof theOptions == 'string' && theOptions.toLowerCase() == 'destroy') {
			var destroy = true;
		}

		return this.each(function() {
			// unbind everything if we're destroying, and stop executing the script
			if(destroy) {
				$(this).unbind('focus.toggleval').unbind('blur.toggleval').removeData('defText');
				return false;
			}

			// define our variables
			var defText = '';

			// let's populate the field, if not default
			switch(theOptions.populateFrom) {
				case 'title':
					if($(this).attr('title')) {
						defText = $(this).attr('title');
						$(this).val(defText);
					}
					break;
				case 'label':
					if($(this).attr('id')) {
						defText = $('label[for="' + $(this).attr('id') + '"]').text();
						$(this).val(defText);
					}
					break;
				case 'custom':
					defText = theOptions.text;
					$(this).val(defText);
					break;
				default:
					defText = $(this).val();
			}

			// let's give this field a special class, so we can identify it later
			// also, we'll give it a data attribute, which will help jQuery remember what the default value is
			$(this).addClass('toggleval').data('defText', defText);

			// now that fields are populated, let's remove the labels if applicable
			if(theOptions.removeLabels == true && $(this).attr('id')) {
				$('label[for="' + $(this).attr('id') + '"]').remove();
			}

			// on to the good stuff... the focus and blur actions
			$(this).bind('focus.toggleval', function() {
				if($(this).val() == $(this).data('defText')) { $(this).val(''); }

				// add the focusClass, remove changedClass
				$(this).addClass(theOptions.focusClass);
			}).bind('blur.toggleval', function() {
				if($(this).val() == '' && !theOptions.sticky) { $(this).val($(this).data('defText')); }

				// remove focusClass, add changedClass if, well, different
				$(this).removeClass(theOptions.focusClass);
				if($(this).val() != '' && $(this).val() != $(this).data('defText')) { $(this).addClass(theOptions.changedClass); }
					else { $(this).removeClass(theOptions.changedClass); }
			});
		});
	};

	// default options
	$.fn.toggleVal.defaults = {
		focusClass: 'tv-focused', // class during focus
		changedClass: 'tv-changed', // class after focus
		populateFrom: 'default', // choose from: default, label, custom, or title
		text: null, // text to use in conjunction with populateFrom: custom
		removeLabels: false, // remove labels associated with the fields
		sticky: false // if true, default text won't reappear
	};

	// create custom selectors
	// :toggleval for affected elements
	// :changed for changed elements
	$.extend($.expr[':'], {
		toggleval: function(elem) {
			return $(elem).data('defText') || false;
		},
		changed: function(elem) {
			if($(elem).data('defText') && $(elem).val() != $(elem).data('defText')) {
				return true;
			}
			return false;
		}
	});
})(jQuery);

// jquery.tweet.js - See http://tweet.seaofclouds.com/ or https://github.com/seaofclouds/tweet for more info
// Copyright (c) 2008-2012 Todd Matthews & Steve Purcell - fork https://github.com/kaptinlin/tweet
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){a.fn.tweet=function(b){function e(a,b){if("string"==typeof a){var c=a;for(var d in b){var e=b[d];c=c.split("{"+d+"}").join(null===e?"":e)}return c}return a(b)}function f(b,c){return function(){var d=[];return this.each(function(){d.push(this.replace(b,c))}),a(d)}}function g(a){return a.replace(/</g,"&lt;").replace(/>/g,"^&gt;")}function h(a,b){return a.replace(d,function(a){for(var c=/^[a-z]+:/i.test(a)?a:"http://"+a,d=a,e=0;e<b.length;++e){var f=b[e];if(f.url===c&&f.expanded_url){c=f.expanded_url,d=f.display_url;break}}return'<a href="'+g(c)+'">'+g(d)+"</a>"})}function i(a){return Date.parse(a.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i,"$1,$2$4$3"))}function j(a){var b=function(a){return parseInt(a,10)},c=new Date,d=b((c.getTime()-a)/1e3);return 1>d&&(d=0),{days:b(d/86400),hours:b(d/3600),minutes:b(d/60),seconds:b(d)}}function k(a){return a.days>2?c.days_ago_text.replace(/%d/,a.days):a.hours>24?c.a_day_ago_text:a.hours>2?c.hours_ago_text.replace(/%d/,a.hours):a.minutes>45?c.a_hours_ago_text:a.minutes>2?c.minutes_ago_text.replace(/%d/,a.minute):a.seconds>1?c.seconds_ago_text.replace(/%d/,a.seconds):c.just_now_text}function l(a){return a.match(/^(@([A-Za-z0-9-_]+)) .*/i)?c.auto_join_text_reply:a.match(d)?c.auto_join_text_url:a.match(/^((\w+ed)|just) .*/im)?c.auto_join_text_ed:a.match(/^(\w*ing) .*/i)?c.auto_join_text_ing:c.auto_join_text_default}function m(){var a=null===c.fetch?c.count:c.fetch,b="&include_entities=1";if(c.list)return c.twitter_api_proxy_url+"?type=list&owner_screen_name="+c.username[0]+"&list_id="+c.list_id+"&slug="+c.list+"&page="+c.page+"&count="+a+"&include_rts="+(c.retweets?"&include_rts=1":"")+b;if(c.favorites)return c.twitter_api_proxy_url+"?type=favorites&screen_name="+c.username[0]+"&page="+c.page+"&count="+a+b;if(null===c.query&&1===c.username.length)return c.twitter_api_proxy_url+"?type=usertimeline&screen_name="+c.username[0]+"&count="+a+(c.retweets?"&include_rts=1":"")+"&page="+c.page+b;var d=c.query||"from:"+c.username.join(" OR from:");return c.twitter_api_proxy_url+"?type=search&q="+encodeURIComponent(d)+"&count="+a+"&page="+c.page+b}function n(a,b){return b?"user"in a?a.user.profile_image_url_https:n(a,!1).replace(/^http:\/\/[a-z0-9]{1,3}\.twimg\.com\//,"https://s3.amazonaws.com/twitter_production/"):a.profile_image_url||a.user.profile_image_url}function o(b){var d={};return d.item=b,d.source=b.source,d.screen_name=b.from_user||b.user.screen_name,d.name=b.from_user_name||b.user.name,d.retweet="undefined"!=typeof b.retweeted_status,d.tweet_time=i(b.created_at),d.join_text="auto"===c.join_text?l(b.text):c.join_text,d.tweet_id=b.id_str,d.twitter_base="http://"+c.twitter_url+"/",d.user_url=d.twitter_base+d.screen_name,d.tweet_url=d.user_url+"/status/"+d.tweet_id,d.reply_url=d.twitter_base+"intent/tweet?in_reply_to="+d.tweet_id,d.retweet_url=d.twitter_base+"intent/retweet?tweet_id="+d.tweet_id,d.favorite_url=d.twitter_base+"intent/favorite?tweet_id="+d.tweet_id,d.retweeted_screen_name=d.retweet&&b.retweeted_status.user.screen_name,d.tweet_relative_time=k(j(d.tweet_time)),d.entities=b.entities?(b.entities.urls||[]).concat(b.entities.media||[]):[],d.tweet_raw_text=d.retweet?"RT @"+d.retweeted_screen_name+" "+b.retweeted_status.text:b.text,d.tweet_text=a([h(d.tweet_raw_text,d.entities)]).linkUser().linkHash()[0],d.retweeted_tweet_text=a([h(b.text,d.entities)]).linkUser().linkHash()[0],d.tweet_text_fancy=a([d.tweet_text]).makeHeart()[0],d.avatar_size=c.avatar_size,d.avatar_url=n(d.retweet?b.retweeted_status:b,"https:"===document.location.protocol),d.avatar_screen_name=d.retweet?d.retweeted_screen_name:d.screen_name,d.avatar_profile_url=d.twitter_base+d.avatar_screen_name,d.user=e('<a class="tweet_user" href="{user_url}">{screen_name}</a>',d),d.join=c.join_text?e('<span class="tweet_join">{join_text}</span>',d):"",d.avatar=d.avatar_size?e('<a class="tweet_avatar" href="{avatar_profile_url}"><img src="{avatar_url}" height="{avatar_size}" width="{avatar_size}" alt="{avatar_screen_name}\'s avatar" title="{avatar_screen_name}\'s avatar" border="0"/></a>',d):"",d.time=e('<span class="tweet_time"><a href="{tweet_url}" title="view tweet on twitter">{tweet_relative_time}</a></span>',d),d.text=e('<span class="tweet_text">{tweet_text_fancy}</span>',d),d.retweeted_text=e('<span class="tweet_text">{retweeted_tweet_text}</span>',d),d.reply_action=e('<a class="tweet_action tweet_reply" href="{reply_url}">reply</a>',d),d.retweet_action=e('<a class="tweet_action tweet_retweet" href="{retweet_url}">retweet</a>',d),d.favorite_action=e('<a class="tweet_action tweet_favorite" href="{favorite_url}">favorite</a>',d),d}function p(b,d){var f=a('<ul class="tweet_list">');f.append(a.map(d,function(a){return"<li>"+e(c.template,a)+"</li>"}).join("")).children("li:first").addClass("tweet_first").end().children("li:odd").addClass("tweet_even").end().children("li:even").addClass("tweet_odd"),a(b).empty().append(f),c.intro_text&&f.before('<p class="tweet_intro">'+c.intro_text+"</p>"),c.outro_text&&f.after('<p class="tweet_outro">'+c.outro_text+"</p>"),a(b).trigger("loaded").trigger(0===d.length?"empty":"full"),c.refresh_interval&&window.setTimeout(function(){a(b).trigger("tweet:load")},1e3*c.refresh_interval)}function q(b){var d=a('<p class="loading">'+c.loading_text+"</p>");c.loading_text&&a(b).not(":has(.tweet_list)").empty().append(d),a.getJSON(m(),function(d){if(d.errors&&a.isArray(d.errors))return a.each(d.errors,function(a,b){console.info(b)}),void 0;var e=a.map(d.statuses||d,o);e=a.grep(e,c.filter).sort(c.comparator).slice(0,c.count),a(b).trigger("tweet:retrieved",[e])})}var c=a.extend({twitter_api_proxy_url:null,username:null,list:null,list_id:null,favorites:!1,query:null,avatar_size:null,count:3,fetch:null,page:1,retweets:!0,intro_text:null,outro_text:null,join_text:null,auto_join_text_default:" I said, ",auto_join_text_ed:" I ",auto_join_text_ing:" I am ",auto_join_text_reply:" I replied to ",auto_join_text_url:" I was looking at ",loading_text:"loading tweets...",refresh_interval:null,twitter_url:"twitter.com",template:"{avatar}{time}{join} {text}",comparator:function(a,b){return b.tweet_time-a.tweet_time},filter:function(){return!0},just_now_text:"just now",seconds_ago_text:"about %d seconds ago",a_minutes_ago_text:"about a minute ago",minutes_ago_text:"about %d minutes ago",a_hours_ago_text:"about an hour ago",hours_ago_text:"about %d hours ago",a_day_ago_text:"about a day ago",days_ago_text:"about %d days ago",view_text:"view tweet on twitter"},b),d=/\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\xab\xbb\u201c\u201d\u2018\u2019]))/gi;return a.extend({tweet:{t:e}}),a.fn.extend({linkUser:f(/(^|[\W])@(\w+)/gi,'$1<span class="at">@</span><a href="http://'+c.twitter_url+'/$2">$2</a>'),linkHash:f(/(?:^| )[\#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi,' <a href="https://'+c.twitter_url+"/search?q=%23$1&src=hash&lang=all"+(c.username&&1===c.username.length&&!c.list?"&from="+c.username.join("%2BOR%2B"):"")+'" class="tweet_hashtag">#$1</a>'),makeHeart:f(/(&lt;)+[3]/gi,"<tt class='heart'>&#x2665;</tt>")}),this.each(function(b,d){c.username&&"string"==typeof c.username&&(c.username=[c.username]),a(d).unbind("tweet:render").unbind("tweet:retrieved").unbind("tweet:load").bind({"tweet:load":function(){q(d)},"tweet:retrieved":function(b,c){a(d).trigger("tweet:render",[c])},"tweet:render":function(b,c){p(a(d),c)}}).trigger("tweet:load")})}});

/*
 * jQuery BBQ: Back Button & Query Library - v1.2.1 - 2/17/2010
 * http://benalman.com/projects/jquery-bbq-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
;(function($,p){var i,m=Array.prototype.slice,r=decodeURIComponent,a=$.param,c,l,v,b=$.bbq=$.bbq||{},q,u,j,e=$.event.special,d="hashchange",A="querystring",D="fragment",y="elemUrlAttr",g="location",k="href",t="src",x=/^.*\?|#.*$/g,w=/^.*\#/,h,C={};function E(F){return typeof F==="string"}function B(G){var F=m.call(arguments,1);return function(){return G.apply(this,F.concat(m.call(arguments)))}}function n(F){return F.replace(/^[^#]*#?(.*)$/,"$1")}function o(F){return F.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/,"$1")}function f(H,M,F,I,G){var O,L,K,N,J;if(I!==i){K=F.match(H?/^([^#]*)\#?(.*)$/:/^([^#?]*)\??([^#]*)(#?.*)/);J=K[3]||"";if(G===2&&E(I)){L=I.replace(H?w:x,"")}else{N=l(K[2]);I=E(I)?l[H?D:A](I):I;L=G===2?I:G===1?$.extend({},I,N):$.extend({},N,I);L=a(L);if(H){L=L.replace(h,r)}}O=K[1]+(H?"#":L||!K[1]?"?":"")+L+J}else{O=M(F!==i?F:p[g][k])}return O}a[A]=B(f,0,o);a[D]=c=B(f,1,n);c.noEscape=function(G){G=G||"";var F=$.map(G.split(""),encodeURIComponent);h=new RegExp(F.join("|"),"g")};c.noEscape(",/");$.deparam=l=function(I,F){var H={},G={"true":!0,"false":!1,"null":null};$.each(I.replace(/\+/g," ").split("&"),function(L,Q){var K=Q.split("="),P=r(K[0]),J,O=H,M=0,R=P.split("]["),N=R.length-1;if(/\[/.test(R[0])&&/\]$/.test(R[N])){R[N]=R[N].replace(/\]$/,"");R=R.shift().split("[").concat(R);N=R.length-1}else{N=0}if(K.length===2){J=r(K[1]);if(F){J=J&&!isNaN(J)?+J:J==="undefined"?i:G[J]!==i?G[J]:J}if(N){for(;M<=N;M++){P=R[M]===""?O.length:R[M];O=O[P]=M<N?O[P]||(R[M+1]&&isNaN(R[M+1])?{}:[]):J}}else{if($.isArray(H[P])){H[P].push(J)}else{if(H[P]!==i){H[P]=[H[P],J]}else{H[P]=J}}}}else{if(P){H[P]=F?i:""}}});return H};function z(H,F,G){if(F===i||typeof F==="boolean"){G=F;F=a[H?D:A]()}else{F=E(F)?F.replace(H?w:x,""):F}return l(F,G)}l[A]=B(z,0);l[D]=v=B(z,1);$[y]||($[y]=function(F){return $.extend(C,F)})({a:k,base:k,iframe:t,img:t,input:t,form:"action",link:k,script:t});j=$[y];function s(I,G,H,F){if(!E(H)&&typeof H!=="object"){F=H;H=G;G=i}return this.each(function(){var L=$(this),J=G||j()[(this.nodeName||"").toLowerCase()]||"",K=J&&L.attr(J)||"";L.attr(J,a[I](K,H,F))})}$.fn[A]=B(s,A);$.fn[D]=B(s,D);b.pushState=q=function(I,F){if(E(I)&&/^#/.test(I)&&F===i){F=2}var H=I!==i,G=c(p[g][k],H?I:{},H?F:2);p[g][k]=G+(/#/.test(G)?"":"#")};b.getState=u=function(F,G){return F===i||typeof F==="boolean"?v(F):v(G)[F]};b.removeState=function(F){var G={};if(F!==i){G=u();$.each($.isArray(F)?F:arguments,function(I,H){delete G[H]})}q(G,2)};e[d]=$.extend(e[d],{add:function(F){var H;function G(J){var I=J[D]=c();J.getState=function(K,L){return K===i||typeof K==="boolean"?l(I,K):l(I,L)[K]};H.apply(this,arguments)}if($.isFunction(F)){H=F;return G}else{H=F.handler;F.handler=G}}})})(jQuery,this);

/*
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,e,b){var c="hashchange",h=document,f,g=$.event.special,i=h.documentMode,d="on"+c in e&&(i===b||i>7);function a(j){j=j||location.href;return"#"+j.replace(/^[^#]*#?(.*)$/,"$1")}$.fn[c]=function(j){return j?this.bind(c,j):this.trigger(c)};$.fn[c].delay=50;g[c]=$.extend(g[c],{setup:function(){if(d){return false}$(f.start)},teardown:function(){if(d){return false}$(f.stop)}});f=(function(){var j={},p,m=a(),k=function(q){return q},l=k,o=k;j.start=function(){p||n()};j.stop=function(){p&&clearTimeout(p);p=b};function n(){var r=a(),q=o(m);if(r!==m){l(m=r,q);$(e).trigger(c)}else{if(q!==m){location.href=location.href.replace(/#.*/,"")+q}}p=setTimeout(n,$.fn[c].delay)}$.browser.msie&&!d&&(function(){var q,r;j.start=function(){if(!q){r=$.fn[c].src;r=r&&r+a();q=$('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){r||l(a());n()}).attr("src",r||"javascript:0").insertAfter("body")[0].contentWindow;h.onpropertychange=function(){try{if(event.propertyName==="title"){q.document.title=h.title}}catch(s){}}}};j.stop=k;o=function(){return a(q.location.href)};l=function(v,s){var u=q.document,t=$.fn[c].domain;if(v!==s){u.title=h.title;u.open();t&&u.write('<script>document.domain="'+t+'"<\/script>');u.close();q.location.hash=v}}})();return j})()})(jQuery,this);

/*
 * Global image preloader
 *
 * Copyright 2011 ThemeCatcher.net
 * All rights reserved
 *
 */
window.preloadedImages = [];
window.preload = function (images) {
	for (var i in images) {
		var elem = document.createElement('img');
		elem.src = images[i];
		window.preloadedImages.push(elem);
	}
};

/*
 * Full Screen Background v2.0.3 (5 Aug 2013)
 *
 * Copyright 2011-2013 ThemeCatcher
 *
 * All rights reserved
 */
(function ($, window) {
    'use strict';
    // Default settings
    var defaults = {
        speed: 2000,                        // Speed of the transition between background images, in milliseconds 1000 = 1 second
        transition: 'fade',                 // The transition animation. 'fade', 'fadeOutFadeIn', 'slideDown', 'slideRight', 'slideUp', 'slideLeft', 'carouselRight', 'carouselLeft'
        position: 'fixed',                  // Whether the background is positioned absolute or fixed
        fitLandscape: false,                // If landscape images should be locked to 100% width
        fitPortrait: true,                  // If portrait images should be locked to 100% height
        fitAlways: false,                   // Don't crop images at all
        positionX: 'center',                // Where to position the image on the X axis. 'left', 'center', 'right'
        positionY: 'center',                // Where to position the image on the Y axis. 'top', 'center', 'bottom'
        easing: 'swing',                    // The easing function to use when transitioning
        controlsSelector: '#fs-controls',   // The jQuery selector of the element to append the controls to
        contentSelector: '#outside',		// The jQuery selector of the part of the page to hide in full screen mode
        hideSpeed: 1000,                    // Speed that the website is hidden at, when activating full screen mode, in milliseconds
        showSpeed: 1000,                    // Speed that the website is shown at, when closing full screen mode, in milliseconds
        controlSpeed: 500,                  // Speed that the controls fades in, in full screen mode, in milliseconds
        fadeIE: false,                      // Whether or not to fade the website in IE 7,8
        save: true,                         // Whether or not to save the current background across pages
        slideshow: true,                    // Whether or not to use the slideshow functionality
        slideshowAuto: true,                // Whether or not to start the slideshow automatically
        slideshowSpeed: 4000,               // How long the slideshow stays on one image, in milliseconds
        random: false,                      // Whether the images should be displayed in random order, forces save = false
        keyboard: true,                     // Whether or not to use the keyboard controls, left arrow, right arrow and esc key
        captionPosition: 'center bottom',   // The default caption position
        alwaysShowCaptions: false,          // Always show the captions
        captionSpeed: 600,                  // The speed of the caption fade animation
        bullets: true,                      // Dislay bullet navigation
        lowQuality: false,                  // Turns on lower quality but higher performance transitions
        errorBackground: '',                // Path to the background image shown if there is an error loading an image
        breaker: false,                     // Display breaker image
        breakerOnMax: false,                // Display breaker image in maximise mode
        onInit: false,                      // Callback before the first image is shown
        onLoad: false,                      // Callback when the current image starts loading
        onComplete: false,                  // Callback when the current image has completely loaded
        captionEnhancement: function () {}  // Caption enhancement function e.g. replace Cufon
    },

    // Wrappers & captions
    $outer,
    $stage,
    $captionOuter,
    $caption,
    $breaker,

    // Full screen controls
    $controlsWrap,
    $controls,
    $prev,
    $play,
    $next,
    $loadingWrap,
    $loading,
    $closeWrap,
    $close,
    $bullets,

    // Template background controls
    $fsControls,
    $fsPrev,
    $fsPlay,
    $fsNext,
    $fsMax,

    // Window & body
    $window,
    $body,

    // Misc
    isIE = !$.support.opacity,
    cookiePlugin,
    backgrounds,
    total,
    imageCache = [],
    bodyOverflow,
    currentIndex = 0,
    animating = false,
    settings,
    fullscreen,
    captionXPositions = ['left', 'center', 'right'],
    captionYPositions = ['top', 'center', 'bottom'],
    isMaximised = false,
    slideshowTimeout,
    slideshowStarted = false;

    /**
     * Load the image with the given index
     *
     * @param int index The index of the image to load.
     * @param function callback Callback function to call when loading is finished.
     */
    function load(index, callback) {
        if (backgrounds[index] !== undefined && imageCache[index] === undefined) {
            imageCache[index] = true;

            var $image = $('<img/>'),
            errorLoading = false;

            $image.load(function () {
                $image.unbind('load');

                setTimeout(function () {
                    setImageData($image);
                    resizeImages();

                    if (typeof callback === 'function') {
                        callback();
                    }
                }, 1); // Chrome will sometimes report a 0 by 0 size if there isn't pause in execution
            })
            .bind('error', function () {
                if (!errorLoading && settings.errorBackground) {
                    $image.attr('src', settings.errorBackground);
                }
                errorLoading = true;
            });

            setTimeout(function () {
                $image.attr('src', backgrounds[index].image);
                $('div', $stage).eq(index).append($image);
            }, 1); // Opera 10.6+ will sometimes load the src before the onload function is set, so wait 1ms
        }
    }

    /**
     * Get the index of the next image
     *
     * @return int
     */
    function getNextIndex() {
        return (currentIndex === (total - 1)) ? 0 : currentIndex + 1;
    }

    /**
     * Get the index of the prev image
     *
     * @return int
     */
    function getPrevIndex() {
        return (currentIndex === 0) ? total - 1 : currentIndex - 1;
    }

    /**
     * Return a random value from the given array
     *
     * @param array array
     * @return array
     */
    function random(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    /**
     * Randomly shuffle a given array
     *
     * @param array array
     * @return array
     */
    function shuffle(array)
    {
        var tmp, current, top = array.length;

        if(top) {
            while(--top) {
                current = Math.floor(Math.random() * (top + 1));
                tmp = array[current];
                array[current] = array[top];
                array[top] = tmp;
            }
        }

        return array;
    }

    /**
     * Trigger the given event and call callback
     *
     * @param string event
     * @param function callback
     */
    function trigger(event, callback) {
        if (typeof callback === 'function') {
            callback.call();
        }
        $outer.trigger(event);
    }

    /**
     * Get a cookie
     *
     * @param string key The key of the cookie.
     */
    function getCookie(key)
    {
        if (cookiePlugin) {
            return $.cookie(key);
        }
    }

    /**
     * Set a cookie
     *
     * @param string key The key of the cookie.
     * @param string value The value of the cookie.
     * @param object options An object literal containing key/value pairs to provide optional cookie attributes.
     */
    function setCookie(key, value, options) {
        if (cookiePlugin) {
            $.cookie(key, value, options);
        }
    }

    fullscreen = $.fullscreen = function (options) {
        settings = $.extend({}, defaults, options || {});

        backgrounds = settings.backgrounds;
        total = backgrounds.length;

        if (!total) {
            return;
        }

        for (var i = 0; i < total; i++) {
            if (typeof backgrounds[i] === 'string') {
                backgrounds[i] = { image: backgrounds[i] };
            }
        }

        if (settings.random) {
            backgrounds = shuffle(backgrounds);
            settings.save = false;
        }

        if (typeof settings.backgroundIndex === 'number') {
            currentIndex = settings.backgroundIndex;
            settings.save = false;
        }

        if (isIE && !settings.fadeIE) {
            settings.hideSpeed = 0;
            settings.showSpeed = 0;
            settings.controlSpeed = 0;
        }

        init();
    };

    /**
     * Intialisation
     *
     * Sets up the HTML elements and JavaScript bindings then loads
     * the first image.
     */
    function init() {
        // Cache some common vars
        $window = $(window);
        $body = $('body');
        cookiePlugin = !!$.cookie;

        // Create the div structure
        $outer = $('<div class="fullscreen-outer"></div>').append(
            $stage = $('<div class="fullscreen-stage"></div>'),
            $breaker = $('<div class="fullscreen-breaker"/>'),
            $captionOuter = $('<div class="fullscreen-caption-outer"></div>').append(
                $('<div class="fullscreen-caption-helper"></div>').append(
                    $caption = $('<div class="fullscreen-caption"></div>')
                )
            )
        );

        $controlsWrap = $('<div class="fullscreen-controls-outer"></div>').append(
            $controls = $('<div class="fullscreen-controls"></div>').append(
                $prev = $('<div class="fullscreen-prev"></div>'),
                $play = $('<div class="fullscreen-play"></div>'),
                $next = $('<div class="fullscreen-next"></div>')
            ),
            $loadingWrap = $('<div class="fullscreen-loading-wrap"></div>').append(
                $loading = $('<div class="fullscreen-loading"></div>')
            ),
            $closeWrap = $('<div class="fullscreen-close-wrap"></div>').append(
                $close = $('<div class="fullscreen-close"></div>')
            )
        );

        $fsControls = $('<div class="fs-controls"></div>').append(
            $fsPrev = $('<div class="fs-prev"></div>'),
            $fsPlay = $('<div class="fs-play"></div>'),
            $fsNext = $('<div class="fs-next"></div>'),
            $fsMax = $('<div class="fs-max"></div>')
        );

        for (var i = 0; i < total; i++) {
            $stage.append('<div class="fullscreen-slide"/>');
        }

        if (settings.position === 'absolute') {
            $body.addClass('fs-absolute');
        } else {
            $body.addClass('fs-fixed');
        }

        // Put the controls on the page
        if (settings.controlsSelector) {
            $(settings.controlsSelector).append($fsControls);
        }

        $body.addClass('fullscreen-background fullscreen-mode-normal').prepend($outer).append($controlsWrap);

        if (total > 1) {
            $controls.add($fsPrev).add($fsNext).show();

            // Bullets functionality
            if (settings.bullets) {
                $bullets = $('<div class="fullscreen-bullets"/>');

                for (var j = 0; j < total; j++) {
                    var title = backgrounds[j].title || '';
                    $('<div class="fullscreen-bullet">' + j + '</div>').data('index', j).attr('title', title).appendTo($bullets);
                }

                $('.fullscreen-bullet', $bullets).click(function () {
                    fullscreen.go($(this).data('index'));
                    return false;
                });

                $controls.append($bullets);
            }

            // Slideshow functionality
            if (settings.slideshow) {
                if (getCookie('fullscreenSlideshow') === 'start') {
                    fullscreen.start();
                } else if (getCookie('fullscreenSlideshow') === 'stop') {
                    fullscreen.stop();
                } else {
                    if (settings.slideshowAuto) {
                        fullscreen.start();
                    } else {
                        fullscreen.stop();
                    }
                }

                $play.add($fsPlay).show();
                $controlsWrap.add($fsControls).addClass('fs-slideshow');
            }
        } else {
            $controlsWrap.add($fsControls).addClass('fs-single');
            settings.slideshow = false;
        }

        // Bind the prev button to load the previous image
        $prev.add($fsPrev).click(function () {
            fullscreen.prev();
            return false;
        });

        // Bind the next button to load the next image
        $next.add($fsNext).click(function () {
            fullscreen.next();
            return false;
        });

        // Bind the maximise buttons to enter maximise mode
        $fsMax.click(fullscreen.max);

        // Bind the close button to close it
        $closeWrap.click(fullscreen.close);

        // Save the current body overflow value
        bodyOverflow = $body.css('overflow');

        if (settings.save) {
            // Check for the saved background cookie to override the default
            var savedBackground = parseInt(getCookie('fullscreenSavedBackground'), 10);
            for(var k = 0; k < total; k++) {
                if (k === savedBackground) {
                    currentIndex = k;
                    break;
                }
            }
        }

        trigger('fullscreenInit', settings.onInit);

        // Preload the previous image
        if (total > 2) {
            load(getPrevIndex());
        }

        // Load the current image then do the first transition
        var loadingTimeout = setTimeout(function () { $controlsWrap.add($fsControls).addClass('fs-load'); }, 200);

        load(currentIndex, function () {
            clearTimeout(loadingTimeout);
            $controlsWrap.add($fsControls).removeClass('fs-load');

            // Put the breaker on the page
            if (settings.breaker) {
                $breaker.fadeIn('slow');
            }

            // Bind the resize funtion when the window is resized
            $window.resize($.isFunction($.throttle) ? $.throttle(100, resizeImages) : resizeImages);

            // Do the first transition
            doTransition();
        });

        // Preload the next image
        if (total > 1) {
            load(getNextIndex());
        }
    }

    /**
     * Resize the images
     *
     * @param function callback Called after the resize is complete
     */
    function resizeImages() {
        var windowWidth = $stage.width(),
        windowHeight = $stage.height(),
        windowRatio = windowHeight / windowWidth;

        $('img', $stage).each(function () {
            var $image = $(this),
            imageRatio = $image.data('imageRatio'),
            css = {};

            if (windowRatio > imageRatio) {
                // Window is more "portrait" than the image
                if (settings.fitAlways) {
                    $image.width(windowWidth).height(windowWidth * imageRatio);
                } else {
                    if (imageRatio <= 1 && settings.fitLandscape) {
                        $image.width(windowWidth).height(windowWidth * imageRatio);
                    } else {
                        $image.height(windowHeight).width(windowHeight / imageRatio);
                    }
                }
            } else {
                // Window is more "landscape" than the image
                if (settings.fitAlways) {
                    $image.height(windowHeight).width(windowHeight / imageRatio);
                } else {
                    if (imageRatio > 1 && settings.fitPortrait) {
                        $image.height(windowHeight).width(windowHeight / imageRatio);
                    } else {
                        $image.width(windowWidth).height(windowWidth * imageRatio);
                    }
                }
            }

            switch (settings.positionX) {
                case 'left':
                    css.left = 0;
                    css.right = 'auto';
                    break;
                case 'right':
                    css.left = 'auto';
                    css.right = 0;
                    break;
                default:
                case 'center':
                    css.left = ((windowWidth - $image.width()) / 2) + 'px';
                    css.right = 'auto';
                    break;
            }

            switch (settings.positionY) {
                case 'top':
                    css.top = 0;
                    css.bottom = 'auto';
                    break;
                case 'bottom':
                    css.top = 'auto';
                    css.bottom = 0;
                    break;
                default:
                case 'center':
                    css.top = ((windowHeight - $image.height()) / 2) + 'px';
                    css.bottom = 'auto';
                    break;
            }

            $image.css(css);
        });
    }

    /**
     * Save the image data to use later
     *
     * @param object $image The jQuery object of the image.
     */
    function setImageData($image) {
        var imageWidth = $image.width(),
        imageHeight = $image.height();

        $image.data({
            imageWidth: imageWidth,
            imageHeight: imageHeight,
            imageRatio: imageHeight / imageWidth
        });
    }

    /**
     * Do the transtion animation
     *
     * @param boolean reverse Reverse the transition animation.
     */
    function doTransition (reverse) {
        trigger('fullscreenLoad', settings.onLoad);
        animating = true;

        $controlsWrap.add($fsControls).addClass('fs-animating');
        $('.fs-prev-slide', $stage).removeClass('fs-prev-slide');

        var $currentSlide = $('.fs-current-slide', $stage).removeClass('fs-current-slide').addClass('fs-prev-slide'),
        $nextSlide = $('div:eq(' + currentIndex + ')', $stage);

        // Preload the next image in the direction we are going
        if (!reverse) {
            load(getNextIndex());
        } else {
            load(getPrevIndex());
        }

        setActiveBullet();

        if (settings.save) {
            setCookie('fullscreenSavedBackground', currentIndex, {expires: 365});
        }

        // Hide captions before transitioning
        if (settings.alwaysShowCaptions || isMaximised) {
            $captionOuter.stop().animate({opacity: 0}, settings.captionSpeed, function () {
                $captionOuter.hide();
            });
        }

        $nextSlide.css('visibility', 'hidden').addClass('fs-current-slide');

        if (settings.lowQuality) {
            $stage.addClass('fullscreen-low');
        }

        switch (settings.transition) {
            case 'none':
                $nextSlide.css('visibility', 'visible'); doneTransition();
                break;
            default:
            case 'fade':
                $nextSlide.animate({ opacity: 0 }, 0).css('visibility', 'visible').animate({ opacity: 1 }, settings.speed, settings.easing, function () {
                    $currentSlide.css('visibility', 'hidden'); /* Prevent deterioration of the transition in Chrome */
                    doneTransition();
                });
                break;
            case 'fadeOutFadeIn':
                var fadeIn = function () {
                    $nextSlide.animate({ opacity: 0 }, 0).css('visibility', 'visible').animate({ opacity: 1 }, settings.speed, settings.easing, doneTransition);
                };

                if ($currentSlide.length) {
                    $currentSlide.animate({opacity: 0}, settings.speed, settings.easing, fadeIn);
                } else {
                    fadeIn();
                }
                break;
            case 'slideDown':
                if (!reverse) {
                    $nextSlide.animate({ top: -$stage.height() }, 0).css('visibility', 'visible').animate({ top: 0 }, settings.speed, settings.easing, doneTransition);
                } else {
                    $nextSlide.animate({ top: $stage.height() }, 0).css('visibility', 'visible').animate({ top: 0 }, settings.speed, settings.easing, doneTransition);
                }
                break;
            case 'slideRight':
                if (!reverse) {
                    $nextSlide.animate({ left: $stage.width() }, 0).css('visibility', 'visible').animate({ left: 0 }, settings.speed, settings.easing, doneTransition);
                } else {
                    $nextSlide.animate({ left: -$stage.width() }, 0).css('visibility', 'visible').animate({ left: 0 }, settings.speed, settings.easing, doneTransition);
                }
                break;
            case 'slideUp':
                if (!reverse) {
                    $nextSlide.animate({ top: $stage.height() }, 0).css('visibility', 'visible').animate({ top: 0 }, settings.speed, settings.easing, doneTransition);
                } else {
                    $nextSlide.animate({ top: -$stage.height() }, 0).css('visibility', 'visible').animate({ top: 0 }, settings.speed, settings.easing, doneTransition);
                }
                break;
            case 'slideLeft':
                if (!reverse) {
                    $nextSlide.animate({ left: -$stage.width() }, 0).css('visibility', 'visible').animate({ left: 0 }, settings.speed, settings.easing, doneTransition);
                } else {
                    $nextSlide.animate({ left: $stage.width() }, 0).css('visibility', 'visible').animate({ left: 0 }, settings.speed, settings.easing, doneTransition);
                }
                break;
            case 'carouselRight':
                if (!reverse) {
                    $nextSlide.animate({ left: $stage.width() }, 0).css('visibility', 'visible').animate({ left: 0 }, settings.speed, settings.easing, doneTransition);
                    $currentSlide.animate({ left: -$stage.width() }, settings.speed, settings.easing);
                } else {
                    $nextSlide.animate({ left: -$stage.width() }, 0).css('visibility', 'visible').animate({ left: 0 }, settings.speed, settings.easing, doneTransition);
                    $currentSlide.animate({ left: 0 }, 0).animate({left: $stage.width()}, settings.speed, settings.easing);
                }
                break;
            case 'carouselLeft':
                if (!reverse) {
                    $nextSlide.animate({ left: -$stage.width() }, 0).css('visibility', 'visible').animate({ left: 0 }, settings.speed, settings.easing, doneTransition);
                    $currentSlide.animate({left: $stage.width()}, settings.speed, settings.easing);
                } else {
                    $nextSlide.animate({ left: $stage.width() }, 0).css('visibility', 'visible').animate({ left: 0 }, settings.speed, settings.easing, doneTransition);
                    $currentSlide.animate({ left: 0 }, 0).animate({left: -$stage.width()}, settings.speed, settings.easing);
                }
                break;
        }
    }

    /**
     * Actions to run when the transition animation is complete
     */
    function doneTransition() {
        animating = false;

        if (settings.lowQuality) {
            $stage.removeClass('fullscreen-low');
        }

        var caption = backgrounds[currentIndex].caption || '',
        captionPosition = backgrounds[currentIndex].captionPosition || settings.captionPosition;

        if (captionPosition === 'random') {
            captionPosition = random(captionXPositions) + ' ' + random(captionYPositions);
        }

        if (caption) {
            $caption.html(caption);
            settings.captionEnhancement.call($captionOuter);
            $captionOuter.attr('class', 'fullscreen-caption-outer') // Remove any previous caption position class
                         .addClass('fs-position-' + captionPosition.split(' ').join('-'));

            if (settings.alwaysShowCaptions || isMaximised) {
                $captionOuter.stop(true, true).show().animate({opacity: 1}, settings.captionSpeed);
            }
        } else {
            $caption.html('');
        }

        $controlsWrap.add($fsControls).removeClass('fs-animating');

        trigger('fullscreenComplete', settings.onComplete);
    }

    /**
     * Set the active bullet
     */
    function setActiveBullet() {
        if (settings.bullets && total > 1) {
            $bullets.children().removeClass('active-bullet').eq(currentIndex).addClass('active-bullet');
        }
    }

    /**
     * Go to full screen mode
     */
    fullscreen.max = function () {
        $body.css('overflow', 'hidden');

        if (!settings.breakerOnMax) {
            $breaker.fadeOut(settings.hideSpeed);
        }

        $(settings.contentSelector).fadeOut(settings.hideSpeed).hide(0, function () {
            isMaximised = true;
            $body.removeClass('fullscreen-mode-normal').addClass('fullscreen-mode-full');
            $controlsWrap.fadeIn(settings.controlSpeed).show(0, function () {
                if (settings.keyboard) {
                    $(document).bind('keydown.fullscreen', function (e) {
                        if (e.keyCode === 27) {
                            e.preventDefault();
                            fullscreen.close();
                        }
                    });
                }
            });

            if(!animating && $caption.html()) {
                $captionOuter.show().animate({opacity: 1}, settings.captionSpeed);
            }

            if (settings.keyboard) {
                $(document).bind('keydown.fullscreen', function (e) {
                    if (e.keyCode === 37) {
                        e.preventDefault();
                        fullscreen.prev();
                    } else if (e.keyCode === 39) {
                        e.preventDefault();
                        fullscreen.next();
                    }
                });
            }
        });

        $window.resize();
    };

    /**
     * Exit from full screen mode
     */
    fullscreen.close = function () {
        $(document).unbind('keydown.fullscreen');
        $controlsWrap.stop(true, true).hide();
        if (!settings.alwaysShowCaptions) {
            $captionOuter.stop(true, true).hide().css({ opacity: 0 });
        }
        isMaximised = false;

        $(settings.contentSelector).fadeIn(settings.showSpeed);

        if (settings.breaker) {
            $breaker.fadeIn(settings.showSpeed);
        }

        $body.removeClass('fullscreen-mode-full').addClass('fullscreen-mode-normal').css('overflow', bodyOverflow);

        $window.resize();
    };

    /**
     * Load the next image
     */
    fullscreen.next = function () {
        if (animating) {
            return false;
        }

        currentIndex = getNextIndex();
        doTransition();
    };

    /**
     * Load the previous image
     */
    fullscreen.prev = function () {
        if (animating) {
            return false;
        }

        currentIndex = getPrevIndex();
        doTransition(true);
    };

    /**
     * Load the image at the given index
     */
    fullscreen.go = function (index) {
        if (animating || currentIndex === index) {
            return false;
        }

        if (index > currentIndex) {
            currentIndex = index;

            // Make sure this image is loaded
            if (imageCache[currentIndex] === undefined) {
                load(currentIndex, doTransition);
            } else {
                doTransition();
            }
        } else {
            currentIndex = index;

            // Make sure this image is loaded
            if (imageCache[currentIndex] === undefined) {
                load(currentIndex, function () {
                    doTransition(true);
                });
            } else {
                doTransition();
            }
        }
    };

    /**
     * Start the slideshow
     */
    fullscreen.start = function () {
        if (settings.slideshow && !slideshowStarted) {
            slideshowStarted = true;

            $outer.bind('fullscreenComplete', function () {
                slideshowTimeout = setTimeout(fullscreen.next, settings.slideshowSpeed);
            }).bind('fullscreenLoad', function () {
                clearTimeout(slideshowTimeout);
            });

            $play
                .removeClass('fullscreen-play')
                .addClass('fullscreen-pause')
                .add($fsPlay)
                .unbind('click')
                .one('click', function () {
                    setCookie('fullscreenSlideshow', 'stop');
                    fullscreen.stop();
                });
            $fsPlay
                .removeClass('fs-play')
                .addClass('fs-pause');

            slideshowTimeout = setTimeout(fullscreen.next, settings.slideshowSpeed);
        }
    };

    /**
     * Stop the slideshow
     */
    fullscreen.stop = function () {
        if (settings.slideshow) {
            clearTimeout(slideshowTimeout);

            $outer.unbind('fullscreenLoad fullscreenComplete');

            $play
                .removeClass('fullscreen-pause')
                .addClass('fullscreen-play')
                .add($fsPlay)
                .unbind('click')
                .one('click', function () {
                    setCookie('fullscreenSlideshow', 'start');
                    fullscreen.start();
                });
            $fsPlay
                .removeClass('fs-pause')
                .addClass('fs-play');

            slideshowStarted = false;
        }
    };
})(jQuery, window);

/*! Smooth Scroll - v1.4.9 - 2013-01-21
* https://github.com/kswedberg/jquery-smooth-scroll
* Copyright (c) 2013 Karl Swedberg; Licensed MIT */
(function(e){function s(e){return e.replace(/(:|\.)/g,"\\$1")}var t="1.4.9",n={exclude:[],excludeWithin:[],offset:0,direction:"top",scrollElement:null,scrollTarget:null,beforeScroll:function(){},afterScroll:function(){},easing:"swing",speed:400,autoCoefficent:2},r=function(t){var n=[],r=!1,i=t.dir&&t.dir=="left"?"scrollLeft":"scrollTop";return this.each(function(){if(this==document||this==window)return;var t=e(this);t[i]()>0?n.push(this):(t[i](1),r=t[i]()>0,r&&n.push(this),t[i](0))}),n.length||this.each(function(e){this.nodeName==="BODY"&&(n=[this])}),t.el==="first"&&n.length>1&&(n=[n[0]]),n},i="ontouchend"in document;e.fn.extend({scrollable:function(e){var t=r.call(this,{dir:e});return this.pushStack(t)},firstScrollable:function(e){var t=r.call(this,{el:"first",dir:e});return this.pushStack(t)},smoothScroll:function(t){t=t||{};var n=e.extend({},e.fn.smoothScroll.defaults,t),r=e.smoothScroll.filterPath(location.pathname);return this.unbind("click.smoothscroll").bind("click.smoothscroll",function(t){var i=this,o=e(this),u=n.exclude,a=n.excludeWithin,f=0,l=0,c=!0,h={},p=location.hostname===i.hostname||!i.hostname,d=n.scrollTarget||(e.smoothScroll.filterPath(i.pathname)||r)===r,v=s(i.hash);if(!n.scrollTarget&&(!p||!d||!v))c=!1;else{while(c&&f<u.length)o.is(s(u[f++]))&&(c=!1);while(c&&l<a.length)o.closest(a[l++]).length&&(c=!1)}c&&(t.preventDefault(),e.extend(h,n,{scrollTarget:n.scrollTarget||v,link:i}),e.smoothScroll(h))}),this}}),e.smoothScroll=function(t,n){var r,i,s,o,u=0,a="offset",f="scrollTop",l={},c={},h=[];typeof t=="number"?(r=e.fn.smoothScroll.defaults,s=t):(r=e.extend({},e.fn.smoothScroll.defaults,t||{}),r.scrollElement&&(a="position",r.scrollElement.css("position")=="static"&&r.scrollElement.css("position","relative"))),r=e.extend({link:null},r),f=r.direction=="left"?"scrollLeft":f,r.scrollElement?(i=r.scrollElement,u=i[f]()):i=e("html, body").firstScrollable(),r.beforeScroll.call(i,r),s=typeof t=="number"?t:n||e(r.scrollTarget)[a]()&&e(r.scrollTarget)[a]()[r.direction]||0,l[f]=s+u+r.offset,o=r.speed,o==="auto"&&(o=l[f]||i.scrollTop(),o/=r.autoCoefficent),c={duration:o,easing:r.easing,complete:function(){r.afterScroll.call(r.link,r)}},r.step&&(c.step=r.step),i.length?i.stop().animate(l,c):r.afterScroll.call(r.link,r)},e.smoothScroll.version=t,e.smoothScroll.filterPath=function(e){return e.replace(/^\//,"").replace(/(index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},e.fn.smoothScroll.defaults=n})(jQuery);