function qn() {

    function i(t) {
        this._element = t
    }
    var t = i.prototype;

    return t.show = function() {
            var n = this;

            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                    bn(this._element).hasClass(Nn) ||
                    bn(this._element).hasClass(On)))

            {

                var t, i, e = bn(this._element).closest(Hn)[0],
                    r = Fn.getSelectorFromElement(this._element);
                if (e) {
                    var o = "UL" === e.nodeName ? Rn : Ln;
                    i = (i = bn.makeArray(bn(e).find(o)))[i.length - 1]
                }
                var s = bn.Event(Dn.HIDE, {
                        relatedTarget: this._element
                    }),
                    a = bn.Event(Dn.SHOW, {
                        relatedTarget: i
                    });

                if (i && bn(i).trigger(s), bn(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented())

                {

                    r && (t = document.querySelector(r)),
                        this._activate(this._element, e);
                    var l = function() {
                        var t = bn.Event(Dn.HIDDEN, {
                                relatedTarget: n._element
                            }),
                            e = bn.Event(Dn.SHOWN, {
                                relatedTarget: i
                            });
                        bn(i).trigger(t), bn(n._element).trigger(e)
                    };
                    t ? this._activate(t, t.parentNode, l) : l()

                }
            }
        },
        t.dispose = function() {
            bn.removeData(this._element, Sn), this._element = null
        },
        t._activate = function(t, e, n) {

            var i = this,
                r = ("UL" === e.nodeName ? bn(e).find(Rn) : bn(e).children(Ln))[0],
                o = n && r && bn(r).hasClass(kn),
                s = function() {
                    return i._transitionComplete(t, r, n)
                };
            if (r && o) {
                var a = Fn.getTransitionDurationFromElement(r);
                bn(r).one(Fn.TRANSITION_END, s).emulateTransitionEnd(a)

            } else s()

        },

        t._transitionComplete = function(t, e, n) {

            if (e) {
                bn(e).removeClass(Pn + " " + Nn);
                var i = bn(e.parentNode).find(Un)[0];
                i && bn(i).removeClass(Nn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
            }

            if (bn(t).addClass(Nn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
                Fn.reflow(t), bn(t).addClass(Pn), t.parentNode && bn(t.parentNode).hasClass(wn)) {
                var r = bn(t).closest(jn)[0];
                if (r) {
                    var o = [].slice.call(r.querySelectorAll(Wn));
                    bn(o).addClass(Nn)
                }
                t.setAttribute("aria-expanded", !0)
            }

            n && n()
        },

        i._jQueryInterface = function(n) {
            s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }]), i
        }

}