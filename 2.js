function getCookie(e) {
    return document.cookie.length > 0 && (begin = document.cookie.indexOf(e + "="),
    -1 != begin) ? (begin += e.length + 1,
    end = document.cookie.indexOf(";", begin),
    -1 == end && (end = document.cookie.length),
    unescape(document.cookie.substring(begin, end))) : null
}
function setCookie(e, t, i, n) {
    var s = new Date;
    s.setTime(s.getTime() + 24 * i * 3600 * 1e3),
    document.cookie = e + "=" + escape(t) + (null == i ? "" : "; expires=" + s.toGMTString() + (null == n ? "" : ";path=" + n))
}
function deleteCookie(e, t, i) {
    getCookie(e) && (document.cookie = e + "=" + (t ? "; path=" + t : "") + (i ? "; domain=" + i : "") + "; expires=Thu, 01-Jan-70 00:00:01 GMT")
}
/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, (function(e, t) {
    "use strict";
    var i = []
      , n = e.document
      , s = Object.getPrototypeOf
      , o = i.slice
      , a = i.concat
      , r = i.push
      , l = i.indexOf
      , c = {}
      , u = c.toString
      , h = c.hasOwnProperty
      , d = h.toString
      , p = d.call(Object)
      , f = {};
    function m(e, t) {
        var i = (t = t || n).createElement("script");
        i.text = e,
        t.head.appendChild(i).parentNode.removeChild(i)
    }
    var g = "3.1.1"
      , v = function(e, t) {
        return new v.fn.init(e,t)
    }
      , _ = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , b = /^-ms-/
      , y = /-([a-z])/g
      , w = function(e, t) {
        return t.toUpperCase()
    };
    function x(e) {
        var t = !!e && "length"in e && e.length
          , i = v.type(e);
        return "function" !== i && !v.isWindow(e) && ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    v.fn = v.prototype = {
        jquery: g,
        constructor: v,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = v.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return v.each(this, e)
        },
        map: function(e) {
            return this.pushStack(v.map(this, (function(t, i) {
                return e.call(t, i, t)
            }
            )))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , i = +e + (e < 0 ? t : 0);
            return this.pushStack(i >= 0 && i < t ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: r,
        sort: i.sort,
        splice: i.splice
    },
    v.extend = v.fn.extend = function() {
        var e, t, i, n, s, o, a = arguments[0] || {}, r = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof a && (c = a,
        a = arguments[r] || {},
        r++),
        "object" == typeof a || v.isFunction(a) || (a = {}),
        r === l && (a = this,
        r--); r < l; r++)
            if (null != (e = arguments[r]))
                for (t in e)
                    i = a[t],
                    a !== (n = e[t]) && (c && n && (v.isPlainObject(n) || (s = v.isArray(n))) ? (s ? (s = !1,
                    o = i && v.isArray(i) ? i : []) : o = i && v.isPlainObject(i) ? i : {},
                    a[t] = v.extend(c, o, n)) : void 0 !== n && (a[t] = n));
        return a
    }
    ,
    v.extend({
        expando: "jQuery" + (g + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === v.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = v.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function(e) {
            var t, i;
            return !(!e || "[object Object]" !== u.call(e) || (t = s(e)) && (i = h.call(t, "constructor") && t.constructor,
            "function" != typeof i || d.call(i) !== p))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[u.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            m(e)
        },
        camelCase: function(e) {
            return e.replace(b, "ms-").replace(y, w)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var i, n = 0;
            if (x(e))
                for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++)
                    ;
            else
                for (n in e)
                    if (!1 === t.call(e[n], n, e[n]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(_, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (x(Object(e)) ? v.merge(i, "string" == typeof e ? [e] : e) : r.call(i, e)),
            i
        },
        inArray: function(e, t, i) {
            return null == t ? -1 : l.call(t, e, i)
        },
        merge: function(e, t) {
            for (var i = +t.length, n = 0, s = e.length; n < i; n++)
                e[s++] = t[n];
            return e.length = s,
            e
        },
        grep: function(e, t, i) {
            for (var n = [], s = 0, o = e.length, a = !i; s < o; s++)
                !t(e[s], s) !== a && n.push(e[s]);
            return n
        },
        map: function(e, t, i) {
            var n, s, o = 0, r = [];
            if (x(e))
                for (n = e.length; o < n; o++)
                    null != (s = t(e[o], o, i)) && r.push(s);
            else
                for (o in e)
                    null != (s = t(e[o], o, i)) && r.push(s);
            return a.apply([], r)
        },
        guid: 1,
        proxy: function(e, t) {
            var i, n, s;
            if ("string" == typeof t && (i = e[t],
            t = e,
            e = i),
            v.isFunction(e))
                return n = o.call(arguments, 2),
                s = function() {
                    return e.apply(t || this, n.concat(o.call(arguments)))
                }
                ,
                s.guid = e.guid = e.guid || v.guid++,
                s
        },
        now: Date.now,
        support: f
    }),
    "function" == typeof Symbol && (v.fn[Symbol.iterator] = i[Symbol.iterator]),
    v.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    }
    ));
    var C = function(e) {
        var t, i, n, s, o, a, r, l, c, u, h, d, p, f, m, g, v, _, b, y = "sizzle" + 1 * new Date, w = e.document, x = 0, C = 0, k = ae(), S = ae(), D = ae(), T = function(e, t) {
            return e === t && (h = !0),
            0
        }, $ = {}.hasOwnProperty, I = [], P = I.pop, A = I.push, E = I.push, M = I.slice, O = function(e, t) {
            for (var i = 0, n = e.length; i < n; i++)
                if (e[i] === t)
                    return i;
            return -1
        }, N = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", H = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", F = "\\[" + L + "*(" + H + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + L + "*\\]", B = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)", R = new RegExp(L + "+","g"), z = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$","g"), j = new RegExp("^" + L + "*," + L + "*"), W = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), q = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]","g"), U = new RegExp(B), V = new RegExp("^" + H + "$"), Y = {
            ID: new RegExp("^#(" + H + ")"),
            CLASS: new RegExp("^\\.(" + H + ")"),
            TAG: new RegExp("^(" + H + "|[*])"),
            ATTR: new RegExp("^" + F),
            PSEUDO: new RegExp("^" + B),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)","i"),
            bool: new RegExp("^(?:" + N + ")$","i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)","i")
        }, X = /^(?:input|select|textarea|button)$/i, K = /^h\d$/i, G = /^[^{]+\{\s*\[native \w/, Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Z = /[+~]/, J = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)","ig"), ee = function(e, t, i) {
            var n = "0x" + t - 65536;
            return n != n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
        }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, ne = function() {
            d()
        }, se = _e((function(e) {
            return !0 === e.disabled && ("form"in e || "label"in e)
        }
        ), {
            dir: "parentNode",
            next: "legend"
        });
        try {
            E.apply(I = M.call(w.childNodes), w.childNodes),
            I[w.childNodes.length].nodeType
        } catch (e) {
            E = {
                apply: I.length ? function(e, t) {
                    A.apply(e, M.call(t))
                }
                : function(e, t) {
                    for (var i = e.length, n = 0; e[i++] = t[n++]; )
                        ;
                    e.length = i - 1
                }
            }
        }
        function oe(e, t, n, s) {
            var o, r, c, u, h, f, v, _ = t && t.ownerDocument, x = t ? t.nodeType : 9;
            if (n = n || [],
            "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x)
                return n;
            if (!s && ((t ? t.ownerDocument || t : w) !== p && d(t),
            t = t || p,
            m)) {
                if (11 !== x && (h = Q.exec(e)))
                    if (o = h[1]) {
                        if (9 === x) {
                            if (!(c = t.getElementById(o)))
                                return n;
                            if (c.id === o)
                                return n.push(c),
                                n
                        } else if (_ && (c = _.getElementById(o)) && b(t, c) && c.id === o)
                            return n.push(c),
                            n
                    } else {
                        if (h[2])
                            return E.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((o = h[3]) && i.getElementsByClassName && t.getElementsByClassName)
                            return E.apply(n, t.getElementsByClassName(o)),
                            n
                    }
                if (i.qsa && !D[e + " "] && (!g || !g.test(e))) {
                    if (1 !== x)
                        _ = t,
                        v = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((u = t.getAttribute("id")) ? u = u.replace(te, ie) : t.setAttribute("id", u = y),
                        r = (f = a(e)).length; r--; )
                            f[r] = "#" + u + " " + ve(f[r]);
                        v = f.join(","),
                        _ = Z.test(e) && me(t.parentNode) || t
                    }
                    if (v)
                        try {
                            return E.apply(n, _.querySelectorAll(v)),
                            n
                        } catch (e) {} finally {
                            u === y && t.removeAttribute("id")
                        }
                }
            }
            return l(e.replace(z, "$1"), t, n, s)
        }
        function ae() {
            var e = [];
            return function t(i, s) {
                return e.push(i + " ") > n.cacheLength && delete t[e.shift()],
                t[i + " "] = s
            }
        }
        function re(e) {
            return e[y] = !0,
            e
        }
        function le(e) {
            var t = p.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function ce(e, t) {
            for (var i = e.split("|"), s = i.length; s--; )
                n.attrHandle[i[s]] = t
        }
        function ue(e, t) {
            var i = t && e
              , n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (n)
                return n;
            if (i)
                for (; i = i.nextSibling; )
                    if (i === t)
                        return -1;
            return e ? 1 : -1
        }
        function he(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }
        function de(e) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === e
            }
        }
        function pe(e) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label"in t && t.disabled === e
            }
        }
        function fe(e) {
            return re((function(t) {
                return t = +t,
                re((function(i, n) {
                    for (var s, o = e([], i.length, t), a = o.length; a--; )
                        i[s = o[a]] && (i[s] = !(n[s] = i[s]))
                }
                ))
            }
            ))
        }
        function me(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in i = oe.support = {},
        o = oe.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        d = oe.setDocument = function(e) {
            var t, s, a = e ? e.ownerDocument || e : w;
            return a !== p && 9 === a.nodeType && a.documentElement ? (f = (p = a).documentElement,
            m = !o(p),
            w !== p && (s = p.defaultView) && s.top !== s && (s.addEventListener ? s.addEventListener("unload", ne, !1) : s.attachEvent && s.attachEvent("onunload", ne)),
            i.attributes = le((function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }
            )),
            i.getElementsByTagName = le((function(e) {
                return e.appendChild(p.createComment("")),
                !e.getElementsByTagName("*").length
            }
            )),
            i.getElementsByClassName = G.test(p.getElementsByClassName),
            i.getById = le((function(e) {
                return f.appendChild(e).id = y,
                !p.getElementsByName || !p.getElementsByName(y).length
            }
            )),
            i.getById ? (n.filter.ID = function(e) {
                var t = e.replace(J, ee);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            n.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && m) {
                    var i = t.getElementById(e);
                    return i ? [i] : []
                }
            }
            ) : (n.filter.ID = function(e) {
                var t = e.replace(J, ee);
                return function(e) {
                    var i = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return i && i.value === t
                }
            }
            ,
            n.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && m) {
                    var i, n, s, o = t.getElementById(e);
                    if (o) {
                        if ((i = o.getAttributeNode("id")) && i.value === e)
                            return [o];
                        for (s = t.getElementsByName(e),
                        n = 0; o = s[n++]; )
                            if ((i = o.getAttributeNode("id")) && i.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            n.find.TAG = i.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : i.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var i, n = [], s = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; i = o[s++]; )
                        1 === i.nodeType && n.push(i);
                    return n
                }
                return o
            }
            ,
            n.find.CLASS = i.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && m)
                    return t.getElementsByClassName(e)
            }
            ,
            v = [],
            g = [],
            (i.qsa = G.test(p.querySelectorAll)) && (le((function(e) {
                f.appendChild(e).innerHTML = "<a id='" + y + "'></a><select id='" + y + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + L + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || g.push("\\[" + L + "*(?:value|" + N + ")"),
                e.querySelectorAll("[id~=" + y + "-]").length || g.push("~="),
                e.querySelectorAll(":checked").length || g.push(":checked"),
                e.querySelectorAll("a#" + y + "+*").length || g.push(".#.+[+~]")
            }
            )),
            le((function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = p.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && g.push("name" + L + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"),
                f.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                g.push(",.*:")
            }
            ))),
            (i.matchesSelector = G.test(_ = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && le((function(e) {
                i.disconnectedMatch = _.call(e, "*"),
                _.call(e, "[s!='']:x"),
                v.push("!=", B)
            }
            )),
            g = g.length && new RegExp(g.join("|")),
            v = v.length && new RegExp(v.join("|")),
            t = G.test(f.compareDocumentPosition),
            b = t || G.test(f.contains) ? function(e, t) {
                var i = 9 === e.nodeType ? e.documentElement : e
                  , n = t && t.parentNode;
                return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            T = t ? function(e, t) {
                if (e === t)
                    return h = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !i.sortDetached && t.compareDocumentPosition(e) === n ? e === p || e.ownerDocument === w && b(w, e) ? -1 : t === p || t.ownerDocument === w && b(w, t) ? 1 : u ? O(u, e) - O(u, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return h = !0,
                    0;
                var i, n = 0, s = e.parentNode, o = t.parentNode, a = [e], r = [t];
                if (!s || !o)
                    return e === p ? -1 : t === p ? 1 : s ? -1 : o ? 1 : u ? O(u, e) - O(u, t) : 0;
                if (s === o)
                    return ue(e, t);
                for (i = e; i = i.parentNode; )
                    a.unshift(i);
                for (i = t; i = i.parentNode; )
                    r.unshift(i);
                for (; a[n] === r[n]; )
                    n++;
                return n ? ue(a[n], r[n]) : a[n] === w ? -1 : r[n] === w ? 1 : 0
            }
            ,
            p) : p
        }
        ,
        oe.matches = function(e, t) {
            return oe(e, null, null, t)
        }
        ,
        oe.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== p && d(e),
            t = t.replace(q, "='$1']"),
            i.matchesSelector && m && !D[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t)))
                try {
                    var n = _.call(e, t);
                    if (n || i.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {}
            return oe(t, p, null, [e]).length > 0
        }
        ,
        oe.contains = function(e, t) {
            return (e.ownerDocument || e) !== p && d(e),
            b(e, t)
        }
        ,
        oe.attr = function(e, t) {
            (e.ownerDocument || e) !== p && d(e);
            var s = n.attrHandle[t.toLowerCase()]
              , o = s && $.call(n.attrHandle, t.toLowerCase()) ? s(e, t, !m) : void 0;
            return void 0 !== o ? o : i.attributes || !m ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }
        ,
        oe.escape = function(e) {
            return (e + "").replace(te, ie)
        }
        ,
        oe.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        oe.uniqueSort = function(e) {
            var t, n = [], s = 0, o = 0;
            if (h = !i.detectDuplicates,
            u = !i.sortStable && e.slice(0),
            e.sort(T),
            h) {
                for (; t = e[o++]; )
                    t === e[o] && (s = n.push(o));
                for (; s--; )
                    e.splice(n[s], 1)
            }
            return u = null,
            e
        }
        ,
        s = oe.getText = function(e) {
            var t, i = "", n = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        i += s(e)
                } else if (3 === o || 4 === o)
                    return e.nodeValue
            } else
                for (; t = e[n++]; )
                    i += s(t);
            return i
        }
        ,
        n = oe.selectors = {
            cacheLength: 50,
            createPseudo: re,
            match: Y,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(J, ee),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(J, ee),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, i = !e[6] && e[2];
                    return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && U.test(i) && (t = a(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t),
                    e[2] = i.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(J, ee).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = k[e + " "];
                    return t || (t = new RegExp("(^|" + L + ")" + e + "(" + L + "|$)")) && k(e, (function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    }
                    ))
                },
                ATTR: function(e, t, i) {
                    return function(n) {
                        var s = oe.attr(n, e);
                        return null == s ? "!=" === t : !t || (s += "",
                        "=" === t ? s === i : "!=" === t ? s !== i : "^=" === t ? i && 0 === s.indexOf(i) : "*=" === t ? i && s.indexOf(i) > -1 : "$=" === t ? i && s.slice(-i.length) === i : "~=" === t ? (" " + s.replace(R, " ") + " ").indexOf(i) > -1 : "|=" === t && (s === i || s.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(e, t, i, n, s) {
                    var o = "nth" !== e.slice(0, 3)
                      , a = "last" !== e.slice(-4)
                      , r = "of-type" === t;
                    return 1 === n && 0 === s ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, i, l) {
                        var c, u, h, d, p, f, m = o !== a ? "nextSibling" : "previousSibling", g = t.parentNode, v = r && t.nodeName.toLowerCase(), _ = !l && !r, b = !1;
                        if (g) {
                            if (o) {
                                for (; m; ) {
                                    for (d = t; d = d[m]; )
                                        if (r ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)
                                            return !1;
                                    f = m = "only" === e && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [a ? g.firstChild : g.lastChild],
                            a && _) {
                                for (b = (p = (c = (u = (h = (d = g)[y] || (d[y] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[e] || [])[0] === x && c[1]) && c[2],
                                d = p && g.childNodes[p]; d = ++p && d && d[m] || (b = p = 0) || f.pop(); )
                                    if (1 === d.nodeType && ++b && d === t) {
                                        u[e] = [x, p, b];
                                        break
                                    }
                            } else if (_ && (b = p = (c = (u = (h = (d = t)[y] || (d[y] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[e] || [])[0] === x && c[1]),
                            !1 === b)
                                for (; (d = ++p && d && d[m] || (b = p = 0) || f.pop()) && ((r ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (_ && ((u = (h = d[y] || (d[y] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[e] = [x, b]),
                                d !== t)); )
                                    ;
                            return (b -= s) === n || b % n == 0 && b / n >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var i, s = n.pseudos[e] || n.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return s[y] ? s(t) : s.length > 1 ? (i = [e, e, "", t],
                    n.setFilters.hasOwnProperty(e.toLowerCase()) ? re((function(e, i) {
                        for (var n, o = s(e, t), a = o.length; a--; )
                            e[n = O(e, o[a])] = !(i[n] = o[a])
                    }
                    )) : function(e) {
                        return s(e, 0, i)
                    }
                    ) : s
                }
            },
            pseudos: {
                not: re((function(e) {
                    var t = []
                      , i = []
                      , n = r(e.replace(z, "$1"));
                    return n[y] ? re((function(e, t, i, s) {
                        for (var o, a = n(e, null, s, []), r = e.length; r--; )
                            (o = a[r]) && (e[r] = !(t[r] = o))
                    }
                    )) : function(e, s, o) {
                        return t[0] = e,
                        n(t, null, o, i),
                        t[0] = null,
                        !i.pop()
                    }
                }
                )),
                has: re((function(e) {
                    return function(t) {
                        return oe(e, t).length > 0
                    }
                }
                )),
                contains: re((function(e) {
                    return e = e.replace(J, ee),
                    function(t) {
                        return (t.textContent || t.innerText || s(t)).indexOf(e) > -1
                    }
                }
                )),
                lang: re((function(e) {
                    return V.test(e || "") || oe.error("unsupported lang: " + e),
                    e = e.replace(J, ee).toLowerCase(),
                    function(t) {
                        var i;
                        do {
                            if (i = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }
                )),
                target: function(t) {
                    var i = e.location && e.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(e) {
                    return e === f
                },
                focus: function(e) {
                    return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: pe(!1),
                disabled: pe(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !n.pseudos.empty(e)
                },
                header: function(e) {
                    return K.test(e.nodeName)
                },
                input: function(e) {
                    return X.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: fe((function() {
                    return [0]
                }
                )),
                last: fe((function(e, t) {
                    return [t - 1]
                }
                )),
                eq: fe((function(e, t, i) {
                    return [i < 0 ? i + t : i]
                }
                )),
                even: fe((function(e, t) {
                    for (var i = 0; i < t; i += 2)
                        e.push(i);
                    return e
                }
                )),
                odd: fe((function(e, t) {
                    for (var i = 1; i < t; i += 2)
                        e.push(i);
                    return e
                }
                )),
                lt: fe((function(e, t, i) {
                    for (var n = i < 0 ? i + t : i; --n >= 0; )
                        e.push(n);
                    return e
                }
                )),
                gt: fe((function(e, t, i) {
                    for (var n = i < 0 ? i + t : i; ++n < t; )
                        e.push(n);
                    return e
                }
                ))
            }
        },
        n.pseudos.nth = n.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            n.pseudos[t] = he(t);
        for (t in {
            submit: !0,
            reset: !0
        })
            n.pseudos[t] = de(t);
        function ge() {}
        function ve(e) {
            for (var t = 0, i = e.length, n = ""; t < i; t++)
                n += e[t].value;
            return n
        }
        function _e(e, t, i) {
            var n = t.dir
              , s = t.next
              , o = s || n
              , a = i && "parentNode" === o
              , r = C++;
            return t.first ? function(t, i, s) {
                for (; t = t[n]; )
                    if (1 === t.nodeType || a)
                        return e(t, i, s);
                return !1
            }
            : function(t, i, l) {
                var c, u, h, d = [x, r];
                if (l) {
                    for (; t = t[n]; )
                        if ((1 === t.nodeType || a) && e(t, i, l))
                            return !0
                } else
                    for (; t = t[n]; )
                        if (1 === t.nodeType || a)
                            if (u = (h = t[y] || (t[y] = {}))[t.uniqueID] || (h[t.uniqueID] = {}),
                            s && s === t.nodeName.toLowerCase())
                                t = t[n] || t;
                            else {
                                if ((c = u[o]) && c[0] === x && c[1] === r)
                                    return d[2] = c[2];
                                if (u[o] = d,
                                d[2] = e(t, i, l))
                                    return !0
                            }
                return !1
            }
        }
        function be(e) {
            return e.length > 1 ? function(t, i, n) {
                for (var s = e.length; s--; )
                    if (!e[s](t, i, n))
                        return !1;
                return !0
            }
            : e[0]
        }
        function ye(e, t, i, n, s) {
            for (var o, a = [], r = 0, l = e.length, c = null != t; r < l; r++)
                (o = e[r]) && (i && !i(o, n, s) || (a.push(o),
                c && t.push(r)));
            return a
        }
        function we(e, t, i, n, s, o) {
            return n && !n[y] && (n = we(n)),
            s && !s[y] && (s = we(s, o)),
            re((function(o, a, r, l) {
                var c, u, h, d = [], p = [], f = a.length, m = o || function(e, t, i) {
                    for (var n = 0, s = t.length; n < s; n++)
                        oe(e, t[n], i);
                    return i
                }(t || "*", r.nodeType ? [r] : r, []), g = !e || !o && t ? m : ye(m, d, e, r, l), v = i ? s || (o ? e : f || n) ? [] : a : g;
                if (i && i(g, v, r, l),
                n)
                    for (c = ye(v, p),
                    n(c, [], r, l),
                    u = c.length; u--; )
                        (h = c[u]) && (v[p[u]] = !(g[p[u]] = h));
                if (o) {
                    if (s || e) {
                        if (s) {
                            for (c = [],
                            u = v.length; u--; )
                                (h = v[u]) && c.push(g[u] = h);
                            s(null, v = [], c, l)
                        }
                        for (u = v.length; u--; )
                            (h = v[u]) && (c = s ? O(o, h) : d[u]) > -1 && (o[c] = !(a[c] = h))
                    }
                } else
                    v = ye(v === a ? v.splice(f, v.length) : v),
                    s ? s(null, a, v, l) : E.apply(a, v)
            }
            ))
        }
        function xe(e) {
            for (var t, i, s, o = e.length, a = n.relative[e[0].type], r = a || n.relative[" "], l = a ? 1 : 0, u = _e((function(e) {
                return e === t
            }
            ), r, !0), h = _e((function(e) {
                return O(t, e) > -1
            }
            ), r, !0), d = [function(e, i, n) {
                var s = !a && (n || i !== c) || ((t = i).nodeType ? u(e, i, n) : h(e, i, n));
                return t = null,
                s
            }
            ]; l < o; l++)
                if (i = n.relative[e[l].type])
                    d = [_e(be(d), i)];
                else {
                    if ((i = n.filter[e[l].type].apply(null, e[l].matches))[y]) {
                        for (s = ++l; s < o && !n.relative[e[s].type]; s++)
                            ;
                        return we(l > 1 && be(d), l > 1 && ve(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(z, "$1"), i, l < s && xe(e.slice(l, s)), s < o && xe(e = e.slice(s)), s < o && ve(e))
                    }
                    d.push(i)
                }
            return be(d)
        }
        function Ce(e, t) {
            var i = t.length > 0
              , s = e.length > 0
              , o = function(o, a, r, l, u) {
                var h, f, g, v = 0, _ = "0", b = o && [], y = [], w = c, C = o || s && n.find.TAG("*", u), k = x += null == w ? 1 : Math.random() || .1, S = C.length;
                for (u && (c = a === p || a || u); _ !== S && null != (h = C[_]); _++) {
                    if (s && h) {
                        for (f = 0,
                        a || h.ownerDocument === p || (d(h),
                        r = !m); g = e[f++]; )
                            if (g(h, a || p, r)) {
                                l.push(h);
                                break
                            }
                        u && (x = k)
                    }
                    i && ((h = !g && h) && v--,
                    o && b.push(h))
                }
                if (v += _,
                i && _ !== v) {
                    for (f = 0; g = t[f++]; )
                        g(b, y, a, r);
                    if (o) {
                        if (v > 0)
                            for (; _--; )
                                b[_] || y[_] || (y[_] = P.call(l));
                        y = ye(y)
                    }
                    E.apply(l, y),
                    u && !o && y.length > 0 && v + t.length > 1 && oe.uniqueSort(l)
                }
                return u && (x = k,
                c = w),
                b
            };
            return i ? re(o) : o
        }
        return ge.prototype = n.filters = n.pseudos,
        n.setFilters = new ge,
        a = oe.tokenize = function(e, t) {
            var i, s, o, a, r, l, c, u = S[e + " "];
            if (u)
                return t ? 0 : u.slice(0);
            for (r = e,
            l = [],
            c = n.preFilter; r; ) {
                for (a in i && !(s = j.exec(r)) || (s && (r = r.slice(s[0].length) || r),
                l.push(o = [])),
                i = !1,
                (s = W.exec(r)) && (i = s.shift(),
                o.push({
                    value: i,
                    type: s[0].replace(z, " ")
                }),
                r = r.slice(i.length)),
                n.filter)
                    !(s = Y[a].exec(r)) || c[a] && !(s = c[a](s)) || (i = s.shift(),
                    o.push({
                        value: i,
                        type: a,
                        matches: s
                    }),
                    r = r.slice(i.length));
                if (!i)
                    break
            }
            return t ? r.length : r ? oe.error(e) : S(e, l).slice(0)
        }
        ,
        r = oe.compile = function(e, t) {
            var i, n = [], s = [], o = D[e + " "];
            if (!o) {
                for (t || (t = a(e)),
                i = t.length; i--; )
                    (o = xe(t[i]))[y] ? n.push(o) : s.push(o);
                (o = D(e, Ce(s, n))).selector = e
            }
            return o
        }
        ,
        l = oe.select = function(e, t, i, s) {
            var o, l, c, u, h, d = "function" == typeof e && e, p = !s && a(e = d.selector || e);
            if (i = i || [],
            1 === p.length) {
                if ((l = p[0] = p[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && m && n.relative[l[1].type]) {
                    if (!(t = (n.find.ID(c.matches[0].replace(J, ee), t) || [])[0]))
                        return i;
                    d && (t = t.parentNode),
                    e = e.slice(l.shift().value.length)
                }
                for (o = Y.needsContext.test(e) ? 0 : l.length; o-- && (c = l[o],
                !n.relative[u = c.type]); )
                    if ((h = n.find[u]) && (s = h(c.matches[0].replace(J, ee), Z.test(l[0].type) && me(t.parentNode) || t))) {
                        if (l.splice(o, 1),
                        !(e = s.length && ve(l)))
                            return E.apply(i, s),
                            i;
                        break
                    }
            }
            return (d || r(e, p))(s, t, !m, i, !t || Z.test(e) && me(t.parentNode) || t),
            i
        }
        ,
        i.sortStable = y.split("").sort(T).join("") === y,
        i.detectDuplicates = !!h,
        d(),
        i.sortDetached = le((function(e) {
            return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
        }
        )),
        le((function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }
        )) || ce("type|href|height|width", (function(e, t, i) {
            if (!i)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }
        )),
        i.attributes && le((function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }
        )) || ce("value", (function(e, t, i) {
            if (!i && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }
        )),
        le((function(e) {
            return null == e.getAttribute("disabled")
        }
        )) || ce(N, (function(e, t, i) {
            var n;
            if (!i)
                return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }
        )),
        oe
    }(e);
    v.find = C,
    v.expr = C.selectors,
    v.expr[":"] = v.expr.pseudos,
    v.uniqueSort = v.unique = C.uniqueSort,
    v.text = C.getText,
    v.isXMLDoc = C.isXML,
    v.contains = C.contains,
    v.escapeSelector = C.escape;
    var k = function(e, t, i) {
        for (var n = [], s = void 0 !== i; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (s && v(e).is(i))
                    break;
                n.push(e)
            }
        return n
    }
      , S = function(e, t) {
        for (var i = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && i.push(e);
        return i
    }
      , D = v.expr.match.needsContext
      , T = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
      , $ = /^.[^:#\[\.,]*$/;
    function I(e, t, i) {
        return v.isFunction(t) ? v.grep(e, (function(e, n) {
            return !!t.call(e, n, e) !== i
        }
        )) : t.nodeType ? v.grep(e, (function(e) {
            return e === t !== i
        }
        )) : "string" != typeof t ? v.grep(e, (function(e) {
            return l.call(t, e) > -1 !== i
        }
        )) : $.test(t) ? v.filter(t, e, i) : (t = v.filter(t, e),
        v.grep(e, (function(e) {
            return l.call(t, e) > -1 !== i && 1 === e.nodeType
        }
        )))
    }
    v.filter = function(e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"),
        1 === t.length && 1 === n.nodeType ? v.find.matchesSelector(n, e) ? [n] : [] : v.find.matches(e, v.grep(t, (function(e) {
            return 1 === e.nodeType
        }
        )))
    }
    ,
    v.fn.extend({
        find: function(e) {
            var t, i, n = this.length, s = this;
            if ("string" != typeof e)
                return this.pushStack(v(e).filter((function() {
                    for (t = 0; t < n; t++)
                        if (v.contains(s[t], this))
                            return !0
                }
                )));
            for (i = this.pushStack([]),
            t = 0; t < n; t++)
                v.find(e, s[t], i);
            return n > 1 ? v.uniqueSort(i) : i
        },
        filter: function(e) {
            return this.pushStack(I(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(I(this, e || [], !0))
        },
        is: function(e) {
            return !!I(this, "string" == typeof e && D.test(e) ? v(e) : e || [], !1).length
        }
    });
    var P, A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, E = v.fn.init = function(e, t, i) {
        var s, o;
        if (!e)
            return this;
        if (i = i || P,
        "string" == typeof e) {
            if (!(s = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : A.exec(e)) || !s[1] && t)
                return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
            if (s[1]) {
                if (t = t instanceof v ? t[0] : t,
                v.merge(this, v.parseHTML(s[1], t && t.nodeType ? t.ownerDocument || t : n, !0)),
                T.test(s[1]) && v.isPlainObject(t))
                    for (s in t)
                        v.isFunction(this[s]) ? this[s](t[s]) : this.attr(s, t[s]);
                return this
            }
            return (o = n.getElementById(s[2])) && (this[0] = o,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : v.isFunction(e) ? void 0 !== i.ready ? i.ready(e) : e(v) : v.makeArray(e, this)
    }
    ;
    E.prototype = v.fn,
    P = v(n);
    var M = /^(?:parents|prev(?:Until|All))/
      , O = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function N(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    v.fn.extend({
        has: function(e) {
            var t = v(e, this)
              , i = t.length;
            return this.filter((function() {
                for (var e = 0; e < i; e++)
                    if (v.contains(this, t[e]))
                        return !0
            }
            ))
        },
        closest: function(e, t) {
            var i, n = 0, s = this.length, o = [], a = "string" != typeof e && v(e);
            if (!D.test(e))
                for (; n < s; n++)
                    for (i = this[n]; i && i !== t; i = i.parentNode)
                        if (i.nodeType < 11 && (a ? a.index(i) > -1 : 1 === i.nodeType && v.find.matchesSelector(i, e))) {
                            o.push(i);
                            break
                        }
            return this.pushStack(o.length > 1 ? v.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? l.call(v(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(v.uniqueSort(v.merge(this.get(), v(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    v.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return k(e, "parentNode")
        },
        parentsUntil: function(e, t, i) {
            return k(e, "parentNode", i)
        },
        next: function(e) {
            return N(e, "nextSibling")
        },
        prev: function(e) {
            return N(e, "previousSibling")
        },
        nextAll: function(e) {
            return k(e, "nextSibling")
        },
        prevAll: function(e) {
            return k(e, "previousSibling")
        },
        nextUntil: function(e, t, i) {
            return k(e, "nextSibling", i)
        },
        prevUntil: function(e, t, i) {
            return k(e, "previousSibling", i)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || v.merge([], e.childNodes)
        }
    }, (function(e, t) {
        v.fn[e] = function(i, n) {
            var s = v.map(this, t, i);
            return "Until" !== e.slice(-5) && (n = i),
            n && "string" == typeof n && (s = v.filter(n, s)),
            this.length > 1 && (O[e] || v.uniqueSort(s),
            M.test(e) && s.reverse()),
            this.pushStack(s)
        }
    }
    ));
    var L = /[^\x20\t\r\n\f]+/g;
    function H(e) {
        return e
    }
    function F(e) {
        throw e
    }
    function B(e, t, i) {
        var n;
        try {
            e && v.isFunction(n = e.promise) ? n.call(e).done(t).fail(i) : e && v.isFunction(n = e.then) ? n.call(e, t, i) : t.call(void 0, e)
        } catch (e) {
            i.call(void 0, e)
        }
    }
    v.Callbacks = function(e) {
        e = "string" == typeof e ? function(e) {
            var t = {};
            return v.each(e.match(L) || [], (function(e, i) {
                t[i] = !0
            }
            )),
            t
        }(e) : v.extend({}, e);
        var t, i, n, s, o = [], a = [], r = -1, l = function() {
            for (s = e.once,
            n = t = !0; a.length; r = -1)
                for (i = a.shift(); ++r < o.length; )
                    !1 === o[r].apply(i[0], i[1]) && e.stopOnFalse && (r = o.length,
                    i = !1);
            e.memory || (i = !1),
            t = !1,
            s && (o = i ? [] : "")
        }, c = {
            add: function() {
                return o && (i && !t && (r = o.length - 1,
                a.push(i)),
                function t(i) {
                    v.each(i, (function(i, n) {
                        v.isFunction(n) ? e.unique && c.has(n) || o.push(n) : n && n.length && "string" !== v.type(n) && t(n)
                    }
                    ))
                }(arguments),
                i && !t && l()),
                this
            },
            remove: function() {
                return v.each(arguments, (function(e, t) {
                    for (var i; (i = v.inArray(t, o, i)) > -1; )
                        o.splice(i, 1),
                        i <= r && r--
                }
                )),
                this
            },
            has: function(e) {
                return e ? v.inArray(e, o) > -1 : o.length > 0
            },
            empty: function() {
                return o && (o = []),
                this
            },
            disable: function() {
                return s = a = [],
                o = i = "",
                this
            },
            disabled: function() {
                return !o
            },
            lock: function() {
                return s = a = [],
                i || t || (o = i = ""),
                this
            },
            locked: function() {
                return !!s
            },
            fireWith: function(e, i) {
                return s || (i = [e, (i = i || []).slice ? i.slice() : i],
                a.push(i),
                t || l()),
                this
            },
            fire: function() {
                return c.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!n
            }
        };
        return c
    }
    ,
    v.extend({
        Deferred: function(t) {
            var i = [["notify", "progress", v.Callbacks("memory"), v.Callbacks("memory"), 2], ["resolve", "done", v.Callbacks("once memory"), v.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", v.Callbacks("once memory"), v.Callbacks("once memory"), 1, "rejected"]]
              , n = "pending"
              , s = {
                state: function() {
                    return n
                },
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return s.then(null, e)
                },
                pipe: function() {
                    var e = arguments;
                    return v.Deferred((function(t) {
                        v.each(i, (function(i, n) {
                            var s = v.isFunction(e[n[4]]) && e[n[4]];
                            o[n[1]]((function() {
                                var e = s && s.apply(this, arguments);
                                e && v.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[n[0] + "With"](this, s ? [e] : arguments)
                            }
                            ))
                        }
                        )),
                        e = null
                    }
                    )).promise()
                },
                then: function(t, n, s) {
                    var o = 0;
                    function a(t, i, n, s) {
                        return function() {
                            var r = this
                              , l = arguments
                              , c = function() {
                                var e, c;
                                if (!(t < o)) {
                                    if ((e = n.apply(r, l)) === i.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    c = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    v.isFunction(c) ? s ? c.call(e, a(o, i, H, s), a(o, i, F, s)) : (o++,
                                    c.call(e, a(o, i, H, s), a(o, i, F, s), a(o, i, H, i.notifyWith))) : (n !== H && (r = void 0,
                                    l = [e]),
                                    (s || i.resolveWith)(r, l))
                                }
                            }
                              , u = s ? c : function() {
                                try {
                                    c()
                                } catch (e) {
                                    v.Deferred.exceptionHook && v.Deferred.exceptionHook(e, u.stackTrace),
                                    t + 1 >= o && (n !== F && (r = void 0,
                                    l = [e]),
                                    i.rejectWith(r, l))
                                }
                            }
                            ;
                            t ? u() : (v.Deferred.getStackHook && (u.stackTrace = v.Deferred.getStackHook()),
                            e.setTimeout(u))
                        }
                    }
                    return v.Deferred((function(e) {
                        i[0][3].add(a(0, e, v.isFunction(s) ? s : H, e.notifyWith)),
                        i[1][3].add(a(0, e, v.isFunction(t) ? t : H)),
                        i[2][3].add(a(0, e, v.isFunction(n) ? n : F))
                    }
                    )).promise()
                },
                promise: function(e) {
                    return null != e ? v.extend(e, s) : s
                }
            }
              , o = {};
            return v.each(i, (function(e, t) {
                var a = t[2]
                  , r = t[5];
                s[t[1]] = a.add,
                r && a.add((function() {
                    n = r
                }
                ), i[3 - e][2].disable, i[0][2].lock),
                a.add(t[3].fire),
                o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments),
                    this
                }
                ,
                o[t[0] + "With"] = a.fireWith
            }
            )),
            s.promise(o),
            t && t.call(o, o),
            o
        },
        when: function(e) {
            var t = arguments.length
              , i = t
              , n = Array(i)
              , s = o.call(arguments)
              , a = v.Deferred()
              , r = function(e) {
                return function(i) {
                    n[e] = this,
                    s[e] = arguments.length > 1 ? o.call(arguments) : i,
                    --t || a.resolveWith(n, s)
                }
            };
            if (t <= 1 && (B(e, a.done(r(i)).resolve, a.reject),
            "pending" === a.state() || v.isFunction(s[i] && s[i].then)))
                return a.then();
            for (; i--; )
                B(s[i], r(i), a.reject);
            return a.promise()
        }
    });
    var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    v.Deferred.exceptionHook = function(t, i) {
        e.console && e.console.warn && t && R.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i)
    }
    ,
    v.readyException = function(t) {
        e.setTimeout((function() {
            throw t
        }
        ))
    }
    ;
    var z = v.Deferred();
    function j() {
        n.removeEventListener("DOMContentLoaded", j),
        e.removeEventListener("load", j),
        v.ready()
    }
    v.fn.ready = function(e) {
        return z.then(e).catch((function(e) {
            v.readyException(e)
        }
        )),
        this
    }
    ,
    v.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? v.readyWait++ : v.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --v.readyWait : v.isReady) || (v.isReady = !0,
            !0 !== e && --v.readyWait > 0 || z.resolveWith(n, [v]))
        }
    }),
    v.ready.then = z.then,
    "complete" === n.readyState || "loading" !== n.readyState && !n.documentElement.doScroll ? e.setTimeout(v.ready) : (n.addEventListener("DOMContentLoaded", j),
    e.addEventListener("load", j));
    var W = function(e, t, i, n, s, o, a) {
        var r = 0
          , l = e.length
          , c = null == i;
        if ("object" === v.type(i))
            for (r in s = !0,
            i)
                W(e, t, r, i[r], !0, o, a);
        else if (void 0 !== n && (s = !0,
        v.isFunction(n) || (a = !0),
        c && (a ? (t.call(e, n),
        t = null) : (c = t,
        t = function(e, t, i) {
            return c.call(v(e), i)
        }
        )),
        t))
            for (; r < l; r++)
                t(e[r], i, a ? n : n.call(e[r], r, t(e[r], i)));
        return s ? e : c ? t.call(e) : l ? t(e[0], i) : o
    }
      , q = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function U() {
        this.expando = v.expando + U.uid++
    }
    U.uid = 1,
    U.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            q(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, i) {
            var n, s = this.cache(e);
            if ("string" == typeof t)
                s[v.camelCase(t)] = i;
            else
                for (n in t)
                    s[v.camelCase(n)] = t[n];
            return s
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][v.camelCase(t)]
        },
        access: function(e, t, i) {
            return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i),
            void 0 !== i ? i : t)
        },
        remove: function(e, t) {
            var i, n = e[this.expando];
            if (void 0 !== n) {
                if (void 0 !== t) {
                    v.isArray(t) ? t = t.map(v.camelCase) : t = (t = v.camelCase(t))in n ? [t] : t.match(L) || [],
                    i = t.length;
                    for (; i--; )
                        delete n[t[i]]
                }
                (void 0 === t || v.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !v.isEmptyObject(t)
        }
    };
    var V = new U
      , Y = new U
      , X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , K = /[A-Z]/g;
    function G(e, t, i) {
        var n;
        if (void 0 === i && 1 === e.nodeType)
            if (n = "data-" + t.replace(K, "-$&").toLowerCase(),
            "string" == typeof (i = e.getAttribute(n))) {
                try {
                    i = function(e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : X.test(e) ? JSON.parse(e) : e)
                    }(i)
                } catch (e) {}
                Y.set(e, t, i)
            } else
                i = void 0;
        return i
    }
    v.extend({
        hasData: function(e) {
            return Y.hasData(e) || V.hasData(e)
        },
        data: function(e, t, i) {
            return Y.access(e, t, i)
        },
        removeData: function(e, t) {
            Y.remove(e, t)
        },
        _data: function(e, t, i) {
            return V.access(e, t, i)
        },
        _removeData: function(e, t) {
            V.remove(e, t)
        }
    }),
    v.fn.extend({
        data: function(e, t) {
            var i, n, s, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (s = Y.get(o),
                1 === o.nodeType && !V.get(o, "hasDataAttrs"))) {
                    for (i = a.length; i--; )
                        a[i] && (0 === (n = a[i].name).indexOf("data-") && (n = v.camelCase(n.slice(5)),
                        G(o, n, s[n])));
                    V.set(o, "hasDataAttrs", !0)
                }
                return s
            }
            return "object" == typeof e ? this.each((function() {
                Y.set(this, e)
            }
            )) : W(this, (function(t) {
                var i;
                if (o && void 0 === t) {
                    if (void 0 !== (i = Y.get(o, e)))
                        return i;
                    if (void 0 !== (i = G(o, e)))
                        return i
                } else
                    this.each((function() {
                        Y.set(this, e, t)
                    }
                    ))
            }
            ), null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each((function() {
                Y.remove(this, e)
            }
            ))
        }
    }),
    v.extend({
        queue: function(e, t, i) {
            var n;
            if (e)
                return t = (t || "fx") + "queue",
                n = V.get(e, t),
                i && (!n || v.isArray(i) ? n = V.access(e, t, v.makeArray(i)) : n.push(i)),
                n || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var i = v.queue(e, t)
              , n = i.length
              , s = i.shift()
              , o = v._queueHooks(e, t);
            "inprogress" === s && (s = i.shift(),
            n--),
            s && ("fx" === t && i.unshift("inprogress"),
            delete o.stop,
            s.call(e, (function() {
                v.dequeue(e, t)
            }
            ), o)),
            !n && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var i = t + "queueHooks";
            return V.get(e, i) || V.access(e, i, {
                empty: v.Callbacks("once memory").add((function() {
                    V.remove(e, [t + "queue", i])
                }
                ))
            })
        }
    }),
    v.fn.extend({
        queue: function(e, t) {
            var i = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            i--),
            arguments.length < i ? v.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                var i = v.queue(this, e, t);
                v._queueHooks(this, e),
                "fx" === e && "inprogress" !== i[0] && v.dequeue(this, e)
            }
            ))
        },
        dequeue: function(e) {
            return this.each((function() {
                v.dequeue(this, e)
            }
            ))
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var i, n = 1, s = v.Deferred(), o = this, a = this.length, r = function() {
                --n || s.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; a--; )
                (i = V.get(o[a], e + "queueHooks")) && i.empty && (n++,
                i.empty.add(r));
            return r(),
            s.promise(t)
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , Z = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$","i")
      , J = ["Top", "Right", "Bottom", "Left"]
      , ee = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && v.contains(e.ownerDocument, e) && "none" === v.css(e, "display")
    }
      , te = function(e, t, i, n) {
        var s, o, a = {};
        for (o in t)
            a[o] = e.style[o],
            e.style[o] = t[o];
        for (o in s = i.apply(e, n || []),
        t)
            e.style[o] = a[o];
        return s
    };
    function ie(e, t, i, n) {
        var s, o = 1, a = 20, r = n ? function() {
            return n.cur()
        }
        : function() {
            return v.css(e, t, "")
        }
        , l = r(), c = i && i[3] || (v.cssNumber[t] ? "" : "px"), u = (v.cssNumber[t] || "px" !== c && +l) && Z.exec(v.css(e, t));
        if (u && u[3] !== c) {
            c = c || u[3],
            i = i || [],
            u = +l || 1;
            do {
                u /= o = o || ".5",
                v.style(e, t, u + c)
            } while (o !== (o = r() / l) && 1 !== o && --a)
        }
        return i && (u = +u || +l || 0,
        s = i[1] ? u + (i[1] + 1) * i[2] : +i[2],
        n && (n.unit = c,
        n.start = u,
        n.end = s)),
        s
    }
    var ne = {};
    function se(e) {
        var t, i = e.ownerDocument, n = e.nodeName, s = ne[n];
        return s || (t = i.body.appendChild(i.createElement(n)),
        s = v.css(t, "display"),
        t.parentNode.removeChild(t),
        "none" === s && (s = "block"),
        ne[n] = s,
        s)
    }
    function oe(e, t) {
        for (var i, n, s = [], o = 0, a = e.length; o < a; o++)
            (n = e[o]).style && (i = n.style.display,
            t ? ("none" === i && (s[o] = V.get(n, "display") || null,
            s[o] || (n.style.display = "")),
            "" === n.style.display && ee(n) && (s[o] = se(n))) : "none" !== i && (s[o] = "none",
            V.set(n, "display", i)));
        for (o = 0; o < a; o++)
            null != s[o] && (e[o].style.display = s[o]);
        return e
    }
    v.fn.extend({
        show: function() {
            return oe(this, !0)
        },
        hide: function() {
            return oe(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                ee(this) ? v(this).show() : v(this).hide()
            }
            ))
        }
    });
    var ae = /^(?:checkbox|radio)$/i
      , re = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
      , le = /^$|\/(?:java|ecma)script/i
      , ce = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function ue(e, t) {
        var i;
        return i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && v.nodeName(e, t) ? v.merge([e], i) : i
    }
    function he(e, t) {
        for (var i = 0, n = e.length; i < n; i++)
            V.set(e[i], "globalEval", !t || V.get(t[i], "globalEval"))
    }
    ce.optgroup = ce.option,
    ce.tbody = ce.tfoot = ce.colgroup = ce.caption = ce.thead,
    ce.th = ce.td;
    var de = /<|&#?\w+;/;
    function pe(e, t, i, n, s) {
        for (var o, a, r, l, c, u, h = t.createDocumentFragment(), d = [], p = 0, f = e.length; p < f; p++)
            if ((o = e[p]) || 0 === o)
                if ("object" === v.type(o))
                    v.merge(d, o.nodeType ? [o] : o);
                else if (de.test(o)) {
                    for (a = a || h.appendChild(t.createElement("div")),
                    r = (re.exec(o) || ["", ""])[1].toLowerCase(),
                    l = ce[r] || ce._default,
                    a.innerHTML = l[1] + v.htmlPrefilter(o) + l[2],
                    u = l[0]; u--; )
                        a = a.lastChild;
                    v.merge(d, a.childNodes),
                    (a = h.firstChild).textContent = ""
                } else
                    d.push(t.createTextNode(o));
        for (h.textContent = "",
        p = 0; o = d[p++]; )
            if (n && v.inArray(o, n) > -1)
                s && s.push(o);
            else if (c = v.contains(o.ownerDocument, o),
            a = ue(h.appendChild(o), "script"),
            c && he(a),
            i)
                for (u = 0; o = a[u++]; )
                    le.test(o.type || "") && i.push(o);
        return h
    }
    !function() {
        var e = n.createDocumentFragment().appendChild(n.createElement("div"))
          , t = n.createElement("input");
        t.setAttribute("type", "radio"),
        t.setAttribute("checked", "checked"),
        t.setAttribute("name", "t"),
        e.appendChild(t),
        f.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
        e.innerHTML = "<textarea>x</textarea>",
        f.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var fe = n.documentElement
      , me = /^key/
      , ge = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , ve = /^([^.]*)(?:\.(.+)|)/;
    function _e() {
        return !0
    }
    function be() {
        return !1
    }
    function ye() {
        try {
            return n.activeElement
        } catch (e) {}
    }
    function we(e, t, i, n, s, o) {
        var a, r;
        if ("object" == typeof t) {
            for (r in "string" != typeof i && (n = n || i,
            i = void 0),
            t)
                we(e, r, i, n, t[r], o);
            return e
        }
        if (null == n && null == s ? (s = i,
        n = i = void 0) : null == s && ("string" == typeof i ? (s = n,
        n = void 0) : (s = n,
        n = i,
        i = void 0)),
        !1 === s)
            s = be;
        else if (!s)
            return e;
        return 1 === o && (a = s,
        s = function(e) {
            return v().off(e),
            a.apply(this, arguments)
        }
        ,
        s.guid = a.guid || (a.guid = v.guid++)),
        e.each((function() {
            v.event.add(this, t, s, n, i)
        }
        ))
    }
    v.event = {
        global: {},
        add: function(e, t, i, n, s) {
            var o, a, r, l, c, u, h, d, p, f, m, g = V.get(e);
            if (g)
                for (i.handler && (i = (o = i).handler,
                s = o.selector),
                s && v.find.matchesSelector(fe, s),
                i.guid || (i.guid = v.guid++),
                (l = g.events) || (l = g.events = {}),
                (a = g.handle) || (a = g.handle = function(t) {
                    return void 0 !== v && v.event.triggered !== t.type ? v.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                c = (t = (t || "").match(L) || [""]).length; c--; )
                    p = m = (r = ve.exec(t[c]) || [])[1],
                    f = (r[2] || "").split(".").sort(),
                    p && (h = v.event.special[p] || {},
                    p = (s ? h.delegateType : h.bindType) || p,
                    h = v.event.special[p] || {},
                    u = v.extend({
                        type: p,
                        origType: m,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: s,
                        needsContext: s && v.expr.match.needsContext.test(s),
                        namespace: f.join(".")
                    }, o),
                    (d = l[p]) || ((d = l[p] = []).delegateCount = 0,
                    h.setup && !1 !== h.setup.call(e, n, f, a) || e.addEventListener && e.addEventListener(p, a)),
                    h.add && (h.add.call(e, u),
                    u.handler.guid || (u.handler.guid = i.guid)),
                    s ? d.splice(d.delegateCount++, 0, u) : d.push(u),
                    v.event.global[p] = !0)
        },
        remove: function(e, t, i, n, s) {
            var o, a, r, l, c, u, h, d, p, f, m, g = V.hasData(e) && V.get(e);
            if (g && (l = g.events)) {
                for (c = (t = (t || "").match(L) || [""]).length; c--; )
                    if (p = m = (r = ve.exec(t[c]) || [])[1],
                    f = (r[2] || "").split(".").sort(),
                    p) {
                        for (h = v.event.special[p] || {},
                        d = l[p = (n ? h.delegateType : h.bindType) || p] || [],
                        r = r[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = d.length; o--; )
                            u = d[o],
                            !s && m !== u.origType || i && i.guid !== u.guid || r && !r.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (d.splice(o, 1),
                            u.selector && d.delegateCount--,
                            h.remove && h.remove.call(e, u));
                        a && !d.length && (h.teardown && !1 !== h.teardown.call(e, f, g.handle) || v.removeEvent(e, p, g.handle),
                        delete l[p])
                    } else
                        for (p in l)
                            v.event.remove(e, p + t[c], i, n, !0);
                v.isEmptyObject(l) && V.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, i, n, s, o, a, r = v.event.fix(e), l = new Array(arguments.length), c = (V.get(this, "events") || {})[r.type] || [], u = v.event.special[r.type] || {};
            for (l[0] = r,
            t = 1; t < arguments.length; t++)
                l[t] = arguments[t];
            if (r.delegateTarget = this,
            !u.preDispatch || !1 !== u.preDispatch.call(this, r)) {
                for (a = v.event.handlers.call(this, r, c),
                t = 0; (s = a[t++]) && !r.isPropagationStopped(); )
                    for (r.currentTarget = s.elem,
                    i = 0; (o = s.handlers[i++]) && !r.isImmediatePropagationStopped(); )
                        r.rnamespace && !r.rnamespace.test(o.namespace) || (r.handleObj = o,
                        r.data = o.data,
                        void 0 !== (n = ((v.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, l)) && !1 === (r.result = n) && (r.preventDefault(),
                        r.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, r),
                r.result
            }
        },
        handlers: function(e, t) {
            var i, n, s, o, a, r = [], l = t.delegateCount, c = e.target;
            if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (o = [],
                        a = {},
                        i = 0; i < l; i++)
                            void 0 === a[s = (n = t[i]).selector + " "] && (a[s] = n.needsContext ? v(s, this).index(c) > -1 : v.find(s, this, null, [c]).length),
                            a[s] && o.push(n);
                        o.length && r.push({
                            elem: c,
                            handlers: o
                        })
                    }
            return c = this,
            l < t.length && r.push({
                elem: c,
                handlers: t.slice(l)
            }),
            r
        },
        addProp: function(e, t) {
            Object.defineProperty(v.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: v.isFunction(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[v.expando] ? e : new v.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ye() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === ye() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && v.nodeName(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(e) {
                    return v.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    v.removeEvent = function(e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i)
    }
    ,
    v.Event = function(e, t) {
        return this instanceof v.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? _e : be,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && v.extend(this, t),
        this.timeStamp = e && e.timeStamp || v.now(),
        void (this[v.expando] = !0)) : new v.Event(e,t)
    }
    ,
    v.Event.prototype = {
        constructor: v.Event,
        isDefaultPrevented: be,
        isPropagationStopped: be,
        isImmediatePropagationStopped: be,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = _e,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = _e,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = _e,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    v.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && me.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ge.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, v.event.addProp),
    v.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function(e, t) {
        v.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var i, n = this, s = e.relatedTarget, o = e.handleObj;
                return s && (s === n || v.contains(n, s)) || (e.type = o.origType,
                i = o.handler.apply(this, arguments),
                e.type = t),
                i
            }
        }
    }
    )),
    v.fn.extend({
        on: function(e, t, i, n) {
            return we(this, e, t, i, n)
        },
        one: function(e, t, i, n) {
            return we(this, e, t, i, n, 1)
        },
        off: function(e, t, i) {
            var n, s;
            if (e && e.preventDefault && e.handleObj)
                return n = e.handleObj,
                v(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler),
                this;
            if ("object" == typeof e) {
                for (s in e)
                    this.off(s, t, e[s]);
                return this
            }
            return !1 !== t && "function" != typeof t || (i = t,
            t = void 0),
            !1 === i && (i = be),
            this.each((function() {
                v.event.remove(this, e, i, t)
            }
            ))
        }
    });
    var xe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , Ce = /<script|<style|<link/i
      , ke = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Se = /^true\/(.*)/
      , De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Te(e, t) {
        return v.nodeName(e, "table") && v.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") && e.getElementsByTagName("tbody")[0] || e
    }
    function $e(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function Ie(e) {
        var t = Se.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function Pe(e, t) {
        var i, n, s, o, a, r, l, c;
        if (1 === t.nodeType) {
            if (V.hasData(e) && (o = V.access(e),
            a = V.set(t, o),
            c = o.events))
                for (s in delete a.handle,
                a.events = {},
                c)
                    for (i = 0,
                    n = c[s].length; i < n; i++)
                        v.event.add(t, s, c[s][i]);
            Y.hasData(e) && (r = Y.access(e),
            l = v.extend({}, r),
            Y.set(t, l))
        }
    }
    function Ae(e, t) {
        var i = t.nodeName.toLowerCase();
        "input" === i && ae.test(e.type) ? t.checked = e.checked : "input" !== i && "textarea" !== i || (t.defaultValue = e.defaultValue)
    }
    function Ee(e, t, i, n) {
        t = a.apply([], t);
        var s, o, r, l, c, u, h = 0, d = e.length, p = d - 1, g = t[0], _ = v.isFunction(g);
        if (_ || d > 1 && "string" == typeof g && !f.checkClone && ke.test(g))
            return e.each((function(s) {
                var o = e.eq(s);
                _ && (t[0] = g.call(this, s, o.html())),
                Ee(o, t, i, n)
            }
            ));
        if (d && (o = (s = pe(t, e[0].ownerDocument, !1, e, n)).firstChild,
        1 === s.childNodes.length && (s = o),
        o || n)) {
            for (l = (r = v.map(ue(s, "script"), $e)).length; h < d; h++)
                c = s,
                h !== p && (c = v.clone(c, !0, !0),
                l && v.merge(r, ue(c, "script"))),
                i.call(e[h], c, h);
            if (l)
                for (u = r[r.length - 1].ownerDocument,
                v.map(r, Ie),
                h = 0; h < l; h++)
                    c = r[h],
                    le.test(c.type || "") && !V.access(c, "globalEval") && v.contains(u, c) && (c.src ? v._evalUrl && v._evalUrl(c.src) : m(c.textContent.replace(De, ""), u))
        }
        return e
    }
    function Me(e, t, i) {
        for (var n, s = t ? v.filter(t, e) : e, o = 0; null != (n = s[o]); o++)
            i || 1 !== n.nodeType || v.cleanData(ue(n)),
            n.parentNode && (i && v.contains(n.ownerDocument, n) && he(ue(n, "script")),
            n.parentNode.removeChild(n));
        return e
    }
    v.extend({
        htmlPrefilter: function(e) {
            return e.replace(xe, "<$1></$2>")
        },
        clone: function(e, t, i) {
            var n, s, o, a, r = e.cloneNode(!0), l = v.contains(e.ownerDocument, e);
            if (!(f.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || v.isXMLDoc(e)))
                for (a = ue(r),
                n = 0,
                s = (o = ue(e)).length; n < s; n++)
                    Ae(o[n], a[n]);
            if (t)
                if (i)
                    for (o = o || ue(e),
                    a = a || ue(r),
                    n = 0,
                    s = o.length; n < s; n++)
                        Pe(o[n], a[n]);
                else
                    Pe(e, r);
            return (a = ue(r, "script")).length > 0 && he(a, !l && ue(e, "script")),
            r
        },
        cleanData: function(e) {
            for (var t, i, n, s = v.event.special, o = 0; void 0 !== (i = e[o]); o++)
                if (q(i)) {
                    if (t = i[V.expando]) {
                        if (t.events)
                            for (n in t.events)
                                s[n] ? v.event.remove(i, n) : v.removeEvent(i, n, t.handle);
                        i[V.expando] = void 0
                    }
                    i[Y.expando] && (i[Y.expando] = void 0)
                }
        }
    }),
    v.fn.extend({
        detach: function(e) {
            return Me(this, e, !0)
        },
        remove: function(e) {
            return Me(this, e)
        },
        text: function(e) {
            return W(this, (function(e) {
                return void 0 === e ? v.text(this) : this.empty().each((function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                }
                ))
            }
            ), null, e, arguments.length)
        },
        append: function() {
            return Ee(this, arguments, (function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Te(this, e).appendChild(e)
            }
            ))
        },
        prepend: function() {
            return Ee(this, arguments, (function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Te(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            }
            ))
        },
        before: function() {
            return Ee(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            }
            ))
        },
        after: function() {
            return Ee(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            }
            ))
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (v.cleanData(ue(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map((function() {
                return v.clone(this, e, t)
            }
            ))
        },
        html: function(e) {
            return W(this, (function(e) {
                var t = this[0] || {}
                  , i = 0
                  , n = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Ce.test(e) && !ce[(re.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = v.htmlPrefilter(e);
                    try {
                        for (; i < n; i++)
                            1 === (t = this[i] || {}).nodeType && (v.cleanData(ue(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }
            ), null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Ee(this, arguments, (function(t) {
                var i = this.parentNode;
                v.inArray(this, e) < 0 && (v.cleanData(ue(this)),
                i && i.replaceChild(t, this))
            }
            ), e)
        }
    }),
    v.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function(e, t) {
        v.fn[e] = function(e) {
            for (var i, n = [], s = v(e), o = s.length - 1, a = 0; a <= o; a++)
                i = a === o ? this : this.clone(!0),
                v(s[a])[t](i),
                r.apply(n, i.get());
            return this.pushStack(n)
        }
    }
    ));
    var Oe = /^margin/
      , Ne = new RegExp("^(" + Q + ")(?!px)[a-z%]+$","i")
      , Le = function(t) {
        var i = t.ownerDocument.defaultView;
        return i && i.opener || (i = e),
        i.getComputedStyle(t)
    };
    function He(e, t, i) {
        var n, s, o, a, r = e.style;
        return (i = i || Le(e)) && ("" !== (a = i.getPropertyValue(t) || i[t]) || v.contains(e.ownerDocument, e) || (a = v.style(e, t)),
        !f.pixelMarginRight() && Ne.test(a) && Oe.test(t) && (n = r.width,
        s = r.minWidth,
        o = r.maxWidth,
        r.minWidth = r.maxWidth = r.width = a,
        a = i.width,
        r.width = n,
        r.minWidth = s,
        r.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function Fe(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    !function() {
        function t() {
            if (l) {
                l.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                l.innerHTML = "",
                fe.appendChild(r);
                var t = e.getComputedStyle(l);
                i = "1%" !== t.top,
                a = "2px" === t.marginLeft,
                s = "4px" === t.width,
                l.style.marginRight = "50%",
                o = "4px" === t.marginRight,
                fe.removeChild(r),
                l = null
            }
        }
        var i, s, o, a, r = n.createElement("div"), l = n.createElement("div");
        l.style && (l.style.backgroundClip = "content-box",
        l.cloneNode(!0).style.backgroundClip = "",
        f.clearCloneStyle = "content-box" === l.style.backgroundClip,
        r.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
        r.appendChild(l),
        v.extend(f, {
            pixelPosition: function() {
                return t(),
                i
            },
            boxSizingReliable: function() {
                return t(),
                s
            },
            pixelMarginRight: function() {
                return t(),
                o
            },
            reliableMarginLeft: function() {
                return t(),
                a
            }
        }))
    }();
    var Be = /^(none|table(?!-c[ea]).+)/
      , Re = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , ze = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , je = ["Webkit", "Moz", "ms"]
      , We = n.createElement("div").style;
    function qe(e) {
        if (e in We)
            return e;
        for (var t = e[0].toUpperCase() + e.slice(1), i = je.length; i--; )
            if ((e = je[i] + t)in We)
                return e
    }
    function Ue(e, t, i) {
        var n = Z.exec(t);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
    }
    function Ve(e, t, i, n, s) {
        var o, a = 0;
        for (o = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2)
            "margin" === i && (a += v.css(e, i + J[o], !0, s)),
            n ? ("content" === i && (a -= v.css(e, "padding" + J[o], !0, s)),
            "margin" !== i && (a -= v.css(e, "border" + J[o] + "Width", !0, s))) : (a += v.css(e, "padding" + J[o], !0, s),
            "padding" !== i && (a += v.css(e, "border" + J[o] + "Width", !0, s)));
        return a
    }
    function Ye(e, t, i) {
        var n, s = !0, o = Le(e), a = "border-box" === v.css(e, "boxSizing", !1, o);
        if (e.getClientRects().length && (n = e.getBoundingClientRect()[t]),
        n <= 0 || null == n) {
            if (((n = He(e, t, o)) < 0 || null == n) && (n = e.style[t]),
            Ne.test(n))
                return n;
            s = a && (f.boxSizingReliable() || n === e.style[t]),
            n = parseFloat(n) || 0
        }
        return n + Ve(e, t, i || (a ? "border" : "content"), s, o) + "px"
    }
    function Xe(e, t, i, n, s) {
        return new Xe.prototype.init(e,t,i,n,s)
    }
    v.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var i = He(e, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var s, o, a, r = v.camelCase(t), l = e.style;
                return t = v.cssProps[r] || (v.cssProps[r] = qe(r) || r),
                a = v.cssHooks[t] || v.cssHooks[r],
                void 0 === i ? a && "get"in a && void 0 !== (s = a.get(e, !1, n)) ? s : l[t] : ("string" === (o = typeof i) && (s = Z.exec(i)) && s[1] && (i = ie(e, t, s),
                o = "number"),
                void (null != i && i == i && ("number" === o && (i += s && s[3] || (v.cssNumber[r] ? "" : "px")),
                f.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (i = a.set(e, i, n)) || (l[t] = i))))
            }
        },
        css: function(e, t, i, n) {
            var s, o, a, r = v.camelCase(t);
            return t = v.cssProps[r] || (v.cssProps[r] = qe(r) || r),
            (a = v.cssHooks[t] || v.cssHooks[r]) && "get"in a && (s = a.get(e, !0, i)),
            void 0 === s && (s = He(e, t, n)),
            "normal" === s && t in ze && (s = ze[t]),
            "" === i || i ? (o = parseFloat(s),
            !0 === i || isFinite(o) ? o || 0 : s) : s
        }
    }),
    v.each(["height", "width"], (function(e, t) {
        v.cssHooks[t] = {
            get: function(e, i, n) {
                if (i)
                    return !Be.test(v.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ye(e, t, n) : te(e, Re, (function() {
                        return Ye(e, t, n)
                    }
                    ))
            },
            set: function(e, i, n) {
                var s, o = n && Le(e), a = n && Ve(e, t, n, "border-box" === v.css(e, "boxSizing", !1, o), o);
                return a && (s = Z.exec(i)) && "px" !== (s[3] || "px") && (e.style[t] = i,
                i = v.css(e, t)),
                Ue(0, i, a)
            }
        }
    }
    )),
    v.cssHooks.marginLeft = Fe(f.reliableMarginLeft, (function(e, t) {
        if (t)
            return (parseFloat(He(e, "marginLeft")) || e.getBoundingClientRect().left - te(e, {
                marginLeft: 0
            }, (function() {
                return e.getBoundingClientRect().left
            }
            ))) + "px"
    }
    )),
    v.each({
        margin: "",
        padding: "",
        border: "Width"
    }, (function(e, t) {
        v.cssHooks[e + t] = {
            expand: function(i) {
                for (var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++)
                    s[e + J[n] + t] = o[n] || o[n - 2] || o[0];
                return s
            }
        },
        Oe.test(e) || (v.cssHooks[e + t].set = Ue)
    }
    )),
    v.fn.extend({
        css: function(e, t) {
            return W(this, (function(e, t, i) {
                var n, s, o = {}, a = 0;
                if (v.isArray(t)) {
                    for (n = Le(e),
                    s = t.length; a < s; a++)
                        o[t[a]] = v.css(e, t[a], !1, n);
                    return o
                }
                return void 0 !== i ? v.style(e, t, i) : v.css(e, t)
            }
            ), e, t, arguments.length > 1)
        }
    }),
    v.Tween = Xe,
    Xe.prototype = {
        constructor: Xe,
        init: function(e, t, i, n, s, o) {
            this.elem = e,
            this.prop = i,
            this.easing = s || v.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = n,
            this.unit = o || (v.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var e = Xe.propHooks[this.prop];
            return e && e.get ? e.get(this) : Xe.propHooks._default.get(this)
        },
        run: function(e) {
            var t, i = Xe.propHooks[this.prop];
            return this.options.duration ? this.pos = t = v.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            i && i.set ? i.set(this) : Xe.propHooks._default.set(this),
            this
        }
    },
    Xe.prototype.init.prototype = Xe.prototype,
    Xe.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = v.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                v.fx.step[e.prop] ? v.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[v.cssProps[e.prop]] && !v.cssHooks[e.prop] ? e.elem[e.prop] = e.now : v.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    Xe.propHooks.scrollTop = Xe.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    v.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    v.fx = Xe.prototype.init,
    v.fx.step = {};
    var Ke, Ge, Qe = /^(?:toggle|show|hide)$/, Ze = /queueHooks$/;
    function Je() {
        Ge && (e.requestAnimationFrame(Je),
        v.fx.tick())
    }
    function et() {
        return e.setTimeout((function() {
            Ke = void 0
        }
        )),
        Ke = v.now()
    }
    function tt(e, t) {
        var i, n = 0, s = {
            height: e
        };
        for (t = t ? 1 : 0; n < 4; n += 2 - t)
            s["margin" + (i = J[n])] = s["padding" + i] = e;
        return t && (s.opacity = s.width = e),
        s
    }
    function it(e, t, i) {
        for (var n, s = (nt.tweeners[t] || []).concat(nt.tweeners["*"]), o = 0, a = s.length; o < a; o++)
            if (n = s[o].call(i, t, e))
                return n
    }
    function nt(e, t, i) {
        var n, s, o = 0, a = nt.prefilters.length, r = v.Deferred().always((function() {
            delete l.elem
        }
        )), l = function() {
            if (s)
                return !1;
            for (var t = Ke || et(), i = Math.max(0, c.startTime + c.duration - t), n = 1 - (i / c.duration || 0), o = 0, a = c.tweens.length; o < a; o++)
                c.tweens[o].run(n);
            return r.notifyWith(e, [c, n, i]),
            n < 1 && a ? i : (r.resolveWith(e, [c]),
            !1)
        }, c = r.promise({
            elem: e,
            props: v.extend({}, t),
            opts: v.extend(!0, {
                specialEasing: {},
                easing: v.easing._default
            }, i),
            originalProperties: t,
            originalOptions: i,
            startTime: Ke || et(),
            duration: i.duration,
            tweens: [],
            createTween: function(t, i) {
                var n = v.Tween(e, c.opts, t, i, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(n),
                n
            },
            stop: function(t) {
                var i = 0
                  , n = t ? c.tweens.length : 0;
                if (s)
                    return this;
                for (s = !0; i < n; i++)
                    c.tweens[i].run(1);
                return t ? (r.notifyWith(e, [c, 1, 0]),
                r.resolveWith(e, [c, t])) : r.rejectWith(e, [c, t]),
                this
            }
        }), u = c.props;
        for (function(e, t) {
            var i, n, s, o, a;
            for (i in e)
                if (s = t[n = v.camelCase(i)],
                o = e[i],
                v.isArray(o) && (s = o[1],
                o = e[i] = o[0]),
                i !== n && (e[n] = o,
                delete e[i]),
                (a = v.cssHooks[n]) && "expand"in a)
                    for (i in o = a.expand(o),
                    delete e[n],
                    o)
                        i in e || (e[i] = o[i],
                        t[i] = s);
                else
                    t[n] = s
        }(u, c.opts.specialEasing); o < a; o++)
            if (n = nt.prefilters[o].call(c, e, u, c.opts))
                return v.isFunction(n.stop) && (v._queueHooks(c.elem, c.opts.queue).stop = v.proxy(n.stop, n)),
                n;
        return v.map(u, it, c),
        v.isFunction(c.opts.start) && c.opts.start.call(e, c),
        v.fx.timer(v.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })),
        c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    v.Animation = v.extend(nt, {
        tweeners: {
            "*": [function(e, t) {
                var i = this.createTween(e, t);
                return ie(i.elem, e, Z.exec(t), i),
                i
            }
            ]
        },
        tweener: function(e, t) {
            v.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.match(L);
            for (var i, n = 0, s = e.length; n < s; n++)
                i = e[n],
                nt.tweeners[i] = nt.tweeners[i] || [],
                nt.tweeners[i].unshift(t)
        },
        prefilters: [function(e, t, i) {
            var n, s, o, a, r, l, c, u, h = "width"in t || "height"in t, d = this, p = {}, f = e.style, m = e.nodeType && ee(e), g = V.get(e, "fxshow");
            for (n in i.queue || (null == (a = v._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            r = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || r()
            }
            ),
            a.unqueued++,
            d.always((function() {
                d.always((function() {
                    a.unqueued--,
                    v.queue(e, "fx").length || a.empty.fire()
                }
                ))
            }
            ))),
            t)
                if (s = t[n],
                Qe.test(s)) {
                    if (delete t[n],
                    o = o || "toggle" === s,
                    s === (m ? "hide" : "show")) {
                        if ("show" !== s || !g || void 0 === g[n])
                            continue;
                        m = !0
                    }
                    p[n] = g && g[n] || v.style(e, n)
                }
            if ((l = !v.isEmptyObject(t)) || !v.isEmptyObject(p))
                for (n in h && 1 === e.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY],
                null == (c = g && g.display) && (c = V.get(e, "display")),
                "none" === (u = v.css(e, "display")) && (c ? u = c : (oe([e], !0),
                c = e.style.display || c,
                u = v.css(e, "display"),
                oe([e]))),
                ("inline" === u || "inline-block" === u && null != c) && "none" === v.css(e, "float") && (l || (d.done((function() {
                    f.display = c
                }
                )),
                null == c && (u = f.display,
                c = "none" === u ? "" : u)),
                f.display = "inline-block")),
                i.overflow && (f.overflow = "hidden",
                d.always((function() {
                    f.overflow = i.overflow[0],
                    f.overflowX = i.overflow[1],
                    f.overflowY = i.overflow[2]
                }
                ))),
                l = !1,
                p)
                    l || (g ? "hidden"in g && (m = g.hidden) : g = V.access(e, "fxshow", {
                        display: c
                    }),
                    o && (g.hidden = !m),
                    m && oe([e], !0),
                    d.done((function() {
                        for (n in m || oe([e]),
                        V.remove(e, "fxshow"),
                        p)
                            v.style(e, n, p[n])
                    }
                    ))),
                    l = it(m ? g[n] : 0, n, d),
                    n in g || (g[n] = l.start,
                    m && (l.end = l.start,
                    l.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? nt.prefilters.unshift(e) : nt.prefilters.push(e)
        }
    }),
    v.speed = function(e, t, i) {
        var s = e && "object" == typeof e ? v.extend({}, e) : {
            complete: i || !i && t || v.isFunction(e) && e,
            duration: e,
            easing: i && t || t && !v.isFunction(t) && t
        };
        return v.fx.off || n.hidden ? s.duration = 0 : "number" != typeof s.duration && (s.duration in v.fx.speeds ? s.duration = v.fx.speeds[s.duration] : s.duration = v.fx.speeds._default),
        null != s.queue && !0 !== s.queue || (s.queue = "fx"),
        s.old = s.complete,
        s.complete = function() {
            v.isFunction(s.old) && s.old.call(this),
            s.queue && v.dequeue(this, s.queue)
        }
        ,
        s
    }
    ,
    v.fn.extend({
        fadeTo: function(e, t, i, n) {
            return this.filter(ee).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, i, n)
        },
        animate: function(e, t, i, n) {
            var s = v.isEmptyObject(e)
              , o = v.speed(t, i, n)
              , a = function() {
                var t = nt(this, v.extend({}, e), o);
                (s || V.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            s || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, t, i) {
            var n = function(e) {
                var t = e.stop;
                delete e.stop,
                t(i)
            };
            return "string" != typeof e && (i = t,
            t = e,
            e = void 0),
            t && !1 !== e && this.queue(e || "fx", []),
            this.each((function() {
                var t = !0
                  , s = null != e && e + "queueHooks"
                  , o = v.timers
                  , a = V.get(this);
                if (s)
                    a[s] && a[s].stop && n(a[s]);
                else
                    for (s in a)
                        a[s] && a[s].stop && Ze.test(s) && n(a[s]);
                for (s = o.length; s--; )
                    o[s].elem !== this || null != e && o[s].queue !== e || (o[s].anim.stop(i),
                    t = !1,
                    o.splice(s, 1));
                !t && i || v.dequeue(this, e)
            }
            ))
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"),
            this.each((function() {
                var t, i = V.get(this), n = i[e + "queue"], s = i[e + "queueHooks"], o = v.timers, a = n ? n.length : 0;
                for (i.finish = !0,
                v.queue(this, e, []),
                s && s.stop && s.stop.call(this, !0),
                t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; t < a; t++)
                    n[t] && n[t].finish && n[t].finish.call(this);
                delete i.finish
            }
            ))
        }
    }),
    v.each(["toggle", "show", "hide"], (function(e, t) {
        var i = v.fn[t];
        v.fn[t] = function(e, n, s) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(tt(t, !0), e, n, s)
        }
    }
    )),
    v.each({
        slideDown: tt("show"),
        slideUp: tt("hide"),
        slideToggle: tt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, (function(e, t) {
        v.fn[e] = function(e, i, n) {
            return this.animate(t, e, i, n)
        }
    }
    )),
    v.timers = [],
    v.fx.tick = function() {
        var e, t = 0, i = v.timers;
        for (Ke = v.now(); t < i.length; t++)
            (e = i[t])() || i[t] !== e || i.splice(t--, 1);
        i.length || v.fx.stop(),
        Ke = void 0
    }
    ,
    v.fx.timer = function(e) {
        v.timers.push(e),
        e() ? v.fx.start() : v.timers.pop()
    }
    ,
    v.fx.interval = 13,
    v.fx.start = function() {
        Ge || (Ge = e.requestAnimationFrame ? e.requestAnimationFrame(Je) : e.setInterval(v.fx.tick, v.fx.interval))
    }
    ,
    v.fx.stop = function() {
        e.cancelAnimationFrame ? e.cancelAnimationFrame(Ge) : e.clearInterval(Ge),
        Ge = null
    }
    ,
    v.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    v.fn.delay = function(t, i) {
        return t = v.fx && v.fx.speeds[t] || t,
        i = i || "fx",
        this.queue(i, (function(i, n) {
            var s = e.setTimeout(i, t);
            n.stop = function() {
                e.clearTimeout(s)
            }
        }
        ))
    }
    ,
    function() {
        var e = n.createElement("input")
          , t = n.createElement("select").appendChild(n.createElement("option"));
        e.type = "checkbox",
        f.checkOn = "" !== e.value,
        f.optSelected = t.selected,
        (e = n.createElement("input")).value = "t",
        e.type = "radio",
        f.radioValue = "t" === e.value
    }();
    var st, ot = v.expr.attrHandle;
    v.fn.extend({
        attr: function(e, t) {
            return W(this, v.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each((function() {
                v.removeAttr(this, e)
            }
            ))
        }
    }),
    v.extend({
        attr: function(e, t, i) {
            var n, s, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === e.getAttribute ? v.prop(e, t, i) : (1 === o && v.isXMLDoc(e) || (s = v.attrHooks[t.toLowerCase()] || (v.expr.match.bool.test(t) ? st : void 0)),
                void 0 !== i ? null === i ? void v.removeAttr(e, t) : s && "set"in s && void 0 !== (n = s.set(e, i, t)) ? n : (e.setAttribute(t, i + ""),
                i) : s && "get"in s && null !== (n = s.get(e, t)) ? n : null == (n = v.find.attr(e, t)) ? void 0 : n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!f.radioValue && "radio" === t && v.nodeName(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t),
                        i && (e.value = i),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var i, n = 0, s = t && t.match(L);
            if (s && 1 === e.nodeType)
                for (; i = s[n++]; )
                    e.removeAttribute(i)
        }
    }),
    st = {
        set: function(e, t, i) {
            return !1 === t ? v.removeAttr(e, i) : e.setAttribute(i, i),
            i
        }
    },
    v.each(v.expr.match.bool.source.match(/\w+/g), (function(e, t) {
        var i = ot[t] || v.find.attr;
        ot[t] = function(e, t, n) {
            var s, o, a = t.toLowerCase();
            return n || (o = ot[a],
            ot[a] = s,
            s = null != i(e, t, n) ? a : null,
            ot[a] = o),
            s
        }
    }
    ));
    var at = /^(?:input|select|textarea|button)$/i
      , rt = /^(?:a|area)$/i;
    function lt(e) {
        return (e.match(L) || []).join(" ")
    }
    function ct(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    v.fn.extend({
        prop: function(e, t) {
            return W(this, v.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each((function() {
                delete this[v.propFix[e] || e]
            }
            ))
        }
    }),
    v.extend({
        prop: function(e, t, i) {
            var n, s, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && v.isXMLDoc(e) || (t = v.propFix[t] || t,
                s = v.propHooks[t]),
                void 0 !== i ? s && "set"in s && void 0 !== (n = s.set(e, i, t)) ? n : e[t] = i : s && "get"in s && null !== (n = s.get(e, t)) ? n : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = v.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : at.test(e.nodeName) || rt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    f.optSelected || (v.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    v.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
        v.propFix[this.toLowerCase()] = this
    }
    )),
    v.fn.extend({
        addClass: function(e) {
            var t, i, n, s, o, a, r, l = 0;
            if (v.isFunction(e))
                return this.each((function(t) {
                    v(this).addClass(e.call(this, t, ct(this)))
                }
                ));
            if ("string" == typeof e && e)
                for (t = e.match(L) || []; i = this[l++]; )
                    if (s = ct(i),
                    n = 1 === i.nodeType && " " + lt(s) + " ") {
                        for (a = 0; o = t[a++]; )
                            n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                        s !== (r = lt(n)) && i.setAttribute("class", r)
                    }
            return this
        },
        removeClass: function(e) {
            var t, i, n, s, o, a, r, l = 0;
            if (v.isFunction(e))
                return this.each((function(t) {
                    v(this).removeClass(e.call(this, t, ct(this)))
                }
                ));
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(L) || []; i = this[l++]; )
                    if (s = ct(i),
                    n = 1 === i.nodeType && " " + lt(s) + " ") {
                        for (a = 0; o = t[a++]; )
                            for (; n.indexOf(" " + o + " ") > -1; )
                                n = n.replace(" " + o + " ", " ");
                        s !== (r = lt(n)) && i.setAttribute("class", r)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var i = typeof e;
            return "boolean" == typeof t && "string" === i ? t ? this.addClass(e) : this.removeClass(e) : v.isFunction(e) ? this.each((function(i) {
                v(this).toggleClass(e.call(this, i, ct(this), t), t)
            }
            )) : this.each((function() {
                var t, n, s, o;
                if ("string" === i)
                    for (n = 0,
                    s = v(this),
                    o = e.match(L) || []; t = o[n++]; )
                        s.hasClass(t) ? s.removeClass(t) : s.addClass(t);
                else
                    void 0 !== e && "boolean" !== i || ((t = ct(this)) && V.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : V.get(this, "__className__") || ""))
            }
            ))
        },
        hasClass: function(e) {
            var t, i, n = 0;
            for (t = " " + e + " "; i = this[n++]; )
                if (1 === i.nodeType && (" " + lt(ct(i)) + " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    });
    var ut = /\r/g;
    v.fn.extend({
        val: function(e) {
            var t, i, n, s = this[0];
            return arguments.length ? (n = v.isFunction(e),
            this.each((function(i) {
                var s;
                1 === this.nodeType && (null == (s = n ? e.call(this, i, v(this).val()) : e) ? s = "" : "number" == typeof s ? s += "" : v.isArray(s) && (s = v.map(s, (function(e) {
                    return null == e ? "" : e + ""
                }
                ))),
                (t = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, s, "value") || (this.value = s))
            }
            ))) : s ? (t = v.valHooks[s.type] || v.valHooks[s.nodeName.toLowerCase()]) && "get"in t && void 0 !== (i = t.get(s, "value")) ? i : "string" == typeof (i = s.value) ? i.replace(ut, "") : null == i ? "" : i : void 0
        }
    }),
    v.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = v.find.attr(e, "value");
                    return null != t ? t : lt(v.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, i, n, s = e.options, o = e.selectedIndex, a = "select-one" === e.type, r = a ? null : [], l = a ? o + 1 : s.length;
                    for (n = o < 0 ? l : a ? o : 0; n < l; n++)
                        if (((i = s[n]).selected || n === o) && !i.disabled && (!i.parentNode.disabled || !v.nodeName(i.parentNode, "optgroup"))) {
                            if (t = v(i).val(),
                            a)
                                return t;
                            r.push(t)
                        }
                    return r
                },
                set: function(e, t) {
                    for (var i, n, s = e.options, o = v.makeArray(t), a = s.length; a--; )
                        ((n = s[a]).selected = v.inArray(v.valHooks.option.get(n), o) > -1) && (i = !0);
                    return i || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    v.each(["radio", "checkbox"], (function() {
        v.valHooks[this] = {
            set: function(e, t) {
                if (v.isArray(t))
                    return e.checked = v.inArray(v(e).val(), t) > -1
            }
        },
        f.checkOn || (v.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }
    ));
    var ht = /^(?:focusinfocus|focusoutblur)$/;
    v.extend(v.event, {
        trigger: function(t, i, s, o) {
            var a, r, l, c, u, d, p, f = [s || n], m = h.call(t, "type") ? t.type : t, g = h.call(t, "namespace") ? t.namespace.split(".") : [];
            if (r = l = s = s || n,
            3 !== s.nodeType && 8 !== s.nodeType && !ht.test(m + v.event.triggered) && (m.indexOf(".") > -1 && (g = m.split("."),
            m = g.shift(),
            g.sort()),
            u = m.indexOf(":") < 0 && "on" + m,
            (t = t[v.expando] ? t : new v.Event(m,"object" == typeof t && t)).isTrigger = o ? 2 : 3,
            t.namespace = g.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = s),
            i = null == i ? [t] : v.makeArray(i, [t]),
            p = v.event.special[m] || {},
            o || !p.trigger || !1 !== p.trigger.apply(s, i))) {
                if (!o && !p.noBubble && !v.isWindow(s)) {
                    for (c = p.delegateType || m,
                    ht.test(c + m) || (r = r.parentNode); r; r = r.parentNode)
                        f.push(r),
                        l = r;
                    l === (s.ownerDocument || n) && f.push(l.defaultView || l.parentWindow || e)
                }
                for (a = 0; (r = f[a++]) && !t.isPropagationStopped(); )
                    t.type = a > 1 ? c : p.bindType || m,
                    (d = (V.get(r, "events") || {})[t.type] && V.get(r, "handle")) && d.apply(r, i),
                    (d = u && r[u]) && d.apply && q(r) && (t.result = d.apply(r, i),
                    !1 === t.result && t.preventDefault());
                return t.type = m,
                o || t.isDefaultPrevented() || p._default && !1 !== p._default.apply(f.pop(), i) || !q(s) || u && v.isFunction(s[m]) && !v.isWindow(s) && ((l = s[u]) && (s[u] = null),
                v.event.triggered = m,
                s[m](),
                v.event.triggered = void 0,
                l && (s[u] = l)),
                t.result
            }
        },
        simulate: function(e, t, i) {
            var n = v.extend(new v.Event, i, {
                type: e,
                isSimulated: !0
            });
            v.event.trigger(n, null, t)
        }
    }),
    v.fn.extend({
        trigger: function(e, t) {
            return this.each((function() {
                v.event.trigger(e, t, this)
            }
            ))
        },
        triggerHandler: function(e, t) {
            var i = this[0];
            if (i)
                return v.event.trigger(e, t, i, !0)
        }
    }),
    v.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
        v.fn[t] = function(e, i) {
            return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
        }
    }
    )),
    v.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    f.focusin = "onfocusin"in e,
    f.focusin || v.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(e, t) {
        var i = function(e) {
            v.event.simulate(t, e.target, v.event.fix(e))
        };
        v.event.special[t] = {
            setup: function() {
                var n = this.ownerDocument || this
                  , s = V.access(n, t);
                s || n.addEventListener(e, i, !0),
                V.access(n, t, (s || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this
                  , s = V.access(n, t) - 1;
                s ? V.access(n, t, s) : (n.removeEventListener(e, i, !0),
                V.remove(n, t))
            }
        }
    }
    ));
    var dt = e.location
      , pt = v.now()
      , ft = /\?/;
    v.parseXML = function(t) {
        var i;
        if (!t || "string" != typeof t)
            return null;
        try {
            i = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            i = void 0
        }
        return i && !i.getElementsByTagName("parsererror").length || v.error("Invalid XML: " + t),
        i
    }
    ;
    var mt = /\[\]$/
      , gt = /\r?\n/g
      , vt = /^(?:submit|button|image|reset|file)$/i
      , _t = /^(?:input|select|textarea|keygen)/i;
    function bt(e, t, i, n) {
        var s;
        if (v.isArray(t))
            v.each(t, (function(t, s) {
                i || mt.test(e) ? n(e, s) : bt(e + "[" + ("object" == typeof s && null != s ? t : "") + "]", s, i, n)
            }
            ));
        else if (i || "object" !== v.type(t))
            n(e, t);
        else
            for (s in t)
                bt(e + "[" + s + "]", t[s], i, n)
    }
    v.param = function(e, t) {
        var i, n = [], s = function(e, t) {
            var i = v.isFunction(t) ? t() : t;
            n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i)
        };
        if (v.isArray(e) || e.jquery && !v.isPlainObject(e))
            v.each(e, (function() {
                s(this.name, this.value)
            }
            ));
        else
            for (i in e)
                bt(i, e[i], t, s);
        return n.join("&")
    }
    ,
    v.fn.extend({
        serialize: function() {
            return v.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map((function() {
                var e = v.prop(this, "elements");
                return e ? v.makeArray(e) : this
            }
            )).filter((function() {
                var e = this.type;
                return this.name && !v(this).is(":disabled") && _t.test(this.nodeName) && !vt.test(e) && (this.checked || !ae.test(e))
            }
            )).map((function(e, t) {
                var i = v(this).val();
                return null == i ? null : v.isArray(i) ? v.map(i, (function(e) {
                    return {
                        name: t.name,
                        value: e.replace(gt, "\r\n")
                    }
                }
                )) : {
                    name: t.name,
                    value: i.replace(gt, "\r\n")
                }
            }
            )).get()
        }
    });
    var yt = /%20/g
      , wt = /#.*$/
      , xt = /([?&])_=[^&]*/
      , Ct = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , kt = /^(?:GET|HEAD)$/
      , St = /^\/\//
      , Dt = {}
      , Tt = {}
      , $t = "*/".concat("*")
      , It = n.createElement("a");
    function Pt(e) {
        return function(t, i) {
            "string" != typeof t && (i = t,
            t = "*");
            var n, s = 0, o = t.toLowerCase().match(L) || [];
            if (v.isFunction(i))
                for (; n = o[s++]; )
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
        }
    }
    function At(e, t, i, n) {
        var s = {}
          , o = e === Tt;
        function a(r) {
            var l;
            return s[r] = !0,
            v.each(e[r] || [], (function(e, r) {
                var c = r(t, i, n);
                return "string" != typeof c || o || s[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c),
                a(c),
                !1)
            }
            )),
            l
        }
        return a(t.dataTypes[0]) || !s["*"] && a("*")
    }
    function Et(e, t) {
        var i, n, s = v.ajaxSettings.flatOptions || {};
        for (i in t)
            void 0 !== t[i] && ((s[i] ? e : n || (n = {}))[i] = t[i]);
        return n && v.extend(!0, e, n),
        e
    }
    It.href = dt.href,
    v.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: dt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(dt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": v.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Et(Et(e, v.ajaxSettings), t) : Et(v.ajaxSettings, e)
        },
        ajaxPrefilter: Pt(Dt),
        ajaxTransport: Pt(Tt),
        ajax: function(t, i) {
            "object" == typeof t && (i = t,
            t = void 0),
            i = i || {};
            var s, o, a, r, l, c, u, h, d, p, f = v.ajaxSetup({}, i), m = f.context || f, g = f.context && (m.nodeType || m.jquery) ? v(m) : v.event, _ = v.Deferred(), b = v.Callbacks("once memory"), y = f.statusCode || {}, w = {}, x = {}, C = "canceled", k = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (u) {
                        if (!r)
                            for (r = {}; t = Ct.exec(a); )
                                r[t[1].toLowerCase()] = t[2];
                        t = r[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return u ? a : null
                },
                setRequestHeader: function(e, t) {
                    return null == u && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e,
                    w[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == u && (f.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (u)
                            k.always(e[k.status]);
                        else
                            for (t in e)
                                y[t] = [y[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || C;
                    return s && s.abort(t),
                    S(0, t),
                    this
                }
            };
            if (_.promise(k),
            f.url = ((t || f.url || dt.href) + "").replace(St, dt.protocol + "//"),
            f.type = i.method || i.type || f.method || f.type,
            f.dataTypes = (f.dataType || "*").toLowerCase().match(L) || [""],
            null == f.crossDomain) {
                c = n.createElement("a");
                try {
                    c.href = f.url,
                    c.href = c.href,
                    f.crossDomain = It.protocol + "//" + It.host != c.protocol + "//" + c.host
                } catch (e) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = v.param(f.data, f.traditional)),
            At(Dt, f, i, k),
            u)
                return k;
            for (d in (h = v.event && f.global) && 0 == v.active++ && v.event.trigger("ajaxStart"),
            f.type = f.type.toUpperCase(),
            f.hasContent = !kt.test(f.type),
            o = f.url.replace(wt, ""),
            f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(yt, "+")) : (p = f.url.slice(o.length),
            f.data && (o += (ft.test(o) ? "&" : "?") + f.data,
            delete f.data),
            !1 === f.cache && (o = o.replace(xt, "$1"),
            p = (ft.test(o) ? "&" : "?") + "_=" + pt++ + p),
            f.url = o + p),
            f.ifModified && (v.lastModified[o] && k.setRequestHeader("If-Modified-Since", v.lastModified[o]),
            v.etag[o] && k.setRequestHeader("If-None-Match", v.etag[o])),
            (f.data && f.hasContent && !1 !== f.contentType || i.contentType) && k.setRequestHeader("Content-Type", f.contentType),
            k.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : f.accepts["*"]),
            f.headers)
                k.setRequestHeader(d, f.headers[d]);
            if (f.beforeSend && (!1 === f.beforeSend.call(m, k, f) || u))
                return k.abort();
            if (C = "abort",
            b.add(f.complete),
            k.done(f.success),
            k.fail(f.error),
            s = At(Tt, f, i, k)) {
                if (k.readyState = 1,
                h && g.trigger("ajaxSend", [k, f]),
                u)
                    return k;
                f.async && f.timeout > 0 && (l = e.setTimeout((function() {
                    k.abort("timeout")
                }
                ), f.timeout));
                try {
                    u = !1,
                    s.send(w, S)
                } catch (e) {
                    if (u)
                        throw e;
                    S(-1, e)
                }
            } else
                S(-1, "No Transport");
            function S(t, i, n, r) {
                var c, d, p, w, x, C = i;
                u || (u = !0,
                l && e.clearTimeout(l),
                s = void 0,
                a = r || "",
                k.readyState = t > 0 ? 4 : 0,
                c = t >= 200 && t < 300 || 304 === t,
                n && (w = function(e, t, i) {
                    for (var n, s, o, a, r = e.contents, l = e.dataTypes; "*" === l[0]; )
                        l.shift(),
                        void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (n)
                        for (s in r)
                            if (r[s] && r[s].test(n)) {
                                l.unshift(s);
                                break
                            }
                    if (l[0]in i)
                        o = l[0];
                    else {
                        for (s in i) {
                            if (!l[0] || e.converters[s + " " + l[0]]) {
                                o = s;
                                break
                            }
                            a || (a = s)
                        }
                        o = o || a
                    }
                    if (o)
                        return o !== l[0] && l.unshift(o),
                        i[o]
                }(f, k, n)),
                w = function(e, t, i, n) {
                    var s, o, a, r, l, c = {}, u = e.dataTypes.slice();
                    if (u[1])
                        for (a in e.converters)
                            c[a.toLowerCase()] = e.converters[a];
                    for (o = u.shift(); o; )
                        if (e.responseFields[o] && (i[e.responseFields[o]] = t),
                        !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        l = o,
                        o = u.shift())
                            if ("*" === o)
                                o = l;
                            else if ("*" !== l && l !== o) {
                                if (!(a = c[l + " " + o] || c["* " + o]))
                                    for (s in c)
                                        if ((r = s.split(" "))[1] === o && (a = c[l + " " + r[0]] || c["* " + r[0]])) {
                                            !0 === a ? a = c[s] : !0 !== c[s] && (o = r[0],
                                            u.unshift(r[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e.throws)
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + l + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(f, w, k, c),
                c ? (f.ifModified && ((x = k.getResponseHeader("Last-Modified")) && (v.lastModified[o] = x),
                (x = k.getResponseHeader("etag")) && (v.etag[o] = x)),
                204 === t || "HEAD" === f.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = w.state,
                d = w.data,
                c = !(p = w.error))) : (p = C,
                !t && C || (C = "error",
                t < 0 && (t = 0))),
                k.status = t,
                k.statusText = (i || C) + "",
                c ? _.resolveWith(m, [d, C, k]) : _.rejectWith(m, [k, C, p]),
                k.statusCode(y),
                y = void 0,
                h && g.trigger(c ? "ajaxSuccess" : "ajaxError", [k, f, c ? d : p]),
                b.fireWith(m, [k, C]),
                h && (g.trigger("ajaxComplete", [k, f]),
                --v.active || v.event.trigger("ajaxStop")))
            }
            return k
        },
        getJSON: function(e, t, i) {
            return v.get(e, t, i, "json")
        },
        getScript: function(e, t) {
            return v.get(e, void 0, t, "script")
        }
    }),
    v.each(["get", "post"], (function(e, t) {
        v[t] = function(e, i, n, s) {
            return v.isFunction(i) && (s = s || n,
            n = i,
            i = void 0),
            v.ajax(v.extend({
                url: e,
                type: t,
                dataType: s,
                data: i,
                success: n
            }, v.isPlainObject(e) && e))
        }
    }
    )),
    v._evalUrl = function(e) {
        return v.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    v.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (v.isFunction(e) && (e = e.call(this[0])),
            t = v(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map((function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }
            )).append(this)),
            this
        },
        wrapInner: function(e) {
            return v.isFunction(e) ? this.each((function(t) {
                v(this).wrapInner(e.call(this, t))
            }
            )) : this.each((function() {
                var t = v(this)
                  , i = t.contents();
                i.length ? i.wrapAll(e) : t.append(e)
            }
            ))
        },
        wrap: function(e) {
            var t = v.isFunction(e);
            return this.each((function(i) {
                v(this).wrapAll(t ? e.call(this, i) : e)
            }
            ))
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each((function() {
                v(this).replaceWith(this.childNodes)
            }
            )),
            this
        }
    }),
    v.expr.pseudos.hidden = function(e) {
        return !v.expr.pseudos.visible(e)
    }
    ,
    v.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    v.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Mt = {
        0: 200,
        1223: 204
    }
      , Ot = v.ajaxSettings.xhr();
    f.cors = !!Ot && "withCredentials"in Ot,
    f.ajax = Ot = !!Ot,
    v.ajaxTransport((function(t) {
        var i, n;
        if (f.cors || Ot && !t.crossDomain)
            return {
                send: function(s, o) {
                    var a, r = t.xhr();
                    if (r.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (a in t.xhrFields)
                            r[a] = t.xhrFields[a];
                    for (a in t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType),
                    t.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest"),
                    s)
                        r.setRequestHeader(a, s[a]);
                    i = function(e) {
                        return function() {
                            i && (i = n = r.onload = r.onerror = r.onabort = r.onreadystatechange = null,
                            "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? o(0, "error") : o(r.status, r.statusText) : o(Mt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }
                    ,
                    r.onload = i(),
                    n = r.onerror = i("error"),
                    void 0 !== r.onabort ? r.onabort = n : r.onreadystatechange = function() {
                        4 === r.readyState && e.setTimeout((function() {
                            i && n()
                        }
                        ))
                    }
                    ,
                    i = i("abort");
                    try {
                        r.send(t.hasContent && t.data || null)
                    } catch (e) {
                        if (i)
                            throw e
                    }
                },
                abort: function() {
                    i && i()
                }
            }
    }
    )),
    v.ajaxPrefilter((function(e) {
        e.crossDomain && (e.contents.script = !1)
    }
    )),
    v.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return v.globalEval(e),
                e
            }
        }
    }),
    v.ajaxPrefilter("script", (function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }
    )),
    v.ajaxTransport("script", (function(e) {
        var t, i;
        if (e.crossDomain)
            return {
                send: function(s, o) {
                    t = v("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", i = function(e) {
                        t.remove(),
                        i = null,
                        e && o("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    n.head.appendChild(t[0])
                },
                abort: function() {
                    i && i()
                }
            }
    }
    ));
    var Nt = []
      , Lt = /(=)\?(?=&|$)|\?\?/;
    function Ht(e) {
        return v.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    v.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Nt.pop() || v.expando + "_" + pt++;
            return this[e] = !0,
            e
        }
    }),
    v.ajaxPrefilter("json jsonp", (function(t, i, n) {
        var s, o, a, r = !1 !== t.jsonp && (Lt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Lt.test(t.data) && "data");
        if (r || "jsonp" === t.dataTypes[0])
            return s = t.jsonpCallback = v.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            r ? t[r] = t[r].replace(Lt, "$1" + s) : !1 !== t.jsonp && (t.url += (ft.test(t.url) ? "&" : "?") + t.jsonp + "=" + s),
            t.converters["script json"] = function() {
                return a || v.error(s + " was not called"),
                a[0]
            }
            ,
            t.dataTypes[0] = "json",
            o = e[s],
            e[s] = function() {
                a = arguments
            }
            ,
            n.always((function() {
                void 0 === o ? v(e).removeProp(s) : e[s] = o,
                t[s] && (t.jsonpCallback = i.jsonpCallback,
                Nt.push(s)),
                a && v.isFunction(o) && o(a[0]),
                a = o = void 0
            }
            )),
            "script"
    }
    )),
    f.createHTMLDocument = function() {
        var e = n.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>",
        2 === e.childNodes.length
    }(),
    v.parseHTML = function(e, t, i) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (i = t,
        t = !1),
        t || (f.createHTMLDocument ? ((s = (t = n.implementation.createHTMLDocument("")).createElement("base")).href = n.location.href,
        t.head.appendChild(s)) : t = n),
        a = !i && [],
        (o = T.exec(e)) ? [t.createElement(o[1])] : (o = pe([e], t, a),
        a && a.length && v(a).remove(),
        v.merge([], o.childNodes)));
        var s, o, a
    }
    ,
    v.fn.load = function(e, t, i) {
        var n, s, o, a = this, r = e.indexOf(" ");
        return r > -1 && (n = lt(e.slice(r)),
        e = e.slice(0, r)),
        v.isFunction(t) ? (i = t,
        t = void 0) : t && "object" == typeof t && (s = "POST"),
        a.length > 0 && v.ajax({
            url: e,
            type: s || "GET",
            dataType: "html",
            data: t
        }).done((function(e) {
            o = arguments,
            a.html(n ? v("<div>").append(v.parseHTML(e)).find(n) : e)
        }
        )).always(i && function(e, t) {
            a.each((function() {
                i.apply(this, o || [e.responseText, t, e])
            }
            ))
        }
        ),
        this
    }
    ,
    v.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
        v.fn[t] = function(e) {
            return this.on(t, e)
        }
    }
    )),
    v.expr.pseudos.animated = function(e) {
        return v.grep(v.timers, (function(t) {
            return e === t.elem
        }
        )).length
    }
    ,
    v.offset = {
        setOffset: function(e, t, i) {
            var n, s, o, a, r, l, c = v.css(e, "position"), u = v(e), h = {};
            "static" === c && (e.style.position = "relative"),
            r = u.offset(),
            o = v.css(e, "top"),
            l = v.css(e, "left"),
            ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (a = (n = u.position()).top,
            s = n.left) : (a = parseFloat(o) || 0,
            s = parseFloat(l) || 0),
            v.isFunction(t) && (t = t.call(e, i, v.extend({}, r))),
            null != t.top && (h.top = t.top - r.top + a),
            null != t.left && (h.left = t.left - r.left + s),
            "using"in t ? t.using.call(e, h) : u.css(h)
        }
    },
    v.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each((function(t) {
                    v.offset.setOffset(this, e, t)
                }
                ));
            var t, i, n, s, o = this[0];
            return o ? o.getClientRects().length ? (n = o.getBoundingClientRect()).width || n.height ? (i = Ht(s = o.ownerDocument),
            t = s.documentElement,
            {
                top: n.top + i.pageYOffset - t.clientTop,
                left: n.left + i.pageXOffset - t.clientLeft
            }) : n : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, i = this[0], n = {
                    top: 0,
                    left: 0
                };
                return "fixed" === v.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                v.nodeName(e[0], "html") || (n = e.offset()),
                n = {
                    top: n.top + v.css(e[0], "borderTopWidth", !0),
                    left: n.left + v.css(e[0], "borderLeftWidth", !0)
                }),
                {
                    top: t.top - n.top - v.css(i, "marginTop", !0),
                    left: t.left - n.left - v.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map((function() {
                for (var e = this.offsetParent; e && "static" === v.css(e, "position"); )
                    e = e.offsetParent;
                return e || fe
            }
            ))
        }
    }),
    v.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, (function(e, t) {
        var i = "pageYOffset" === t;
        v.fn[e] = function(n) {
            return W(this, (function(e, n, s) {
                var o = Ht(e);
                return void 0 === s ? o ? o[t] : e[n] : void (o ? o.scrollTo(i ? o.pageXOffset : s, i ? s : o.pageYOffset) : e[n] = s)
            }
            ), e, n, arguments.length)
        }
    }
    )),
    v.each(["top", "left"], (function(e, t) {
        v.cssHooks[t] = Fe(f.pixelPosition, (function(e, i) {
            if (i)
                return i = He(e, t),
                Ne.test(i) ? v(e).position()[t] + "px" : i
        }
        ))
    }
    )),
    v.each({
        Height: "height",
        Width: "width"
    }, (function(e, t) {
        v.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, (function(i, n) {
            v.fn[n] = function(s, o) {
                var a = arguments.length && (i || "boolean" != typeof s)
                  , r = i || (!0 === s || !0 === o ? "margin" : "border");
                return W(this, (function(t, i, s) {
                    var o;
                    return v.isWindow(t) ? 0 === n.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                    Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === s ? v.css(t, i, r) : v.style(t, i, s, r)
                }
                ), t, a ? s : void 0, a)
            }
        }
        ))
    }
    )),
    v.fn.extend({
        bind: function(e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function(e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        }
    }),
    v.parseJSON = JSON.parse,
    "function" == typeof define && define.amd && define("jquery", [], (function() {
        return v
    }
    ));
    var Ft = e.jQuery
      , Bt = e.$;
    return v.noConflict = function(t) {
        return e.$ === v && (e.$ = Bt),
        t && e.jQuery === v && (e.jQuery = Ft),
        v
    }
    ,
    t || (e.jQuery = e.$ = v),
    v
}
)),
/*! jQuery UI - v1.12.1 - 2016-09-14
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}((function(e) {
    e.ui = e.ui || {};
    e.ui.version = "1.12.1";
    /*!
 * jQuery UI Widget 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    var t, i = 0, n = Array.prototype.slice;
    e.cleanData = (t = e.cleanData,
    function(i) {
        var n, s, o;
        for (o = 0; null != (s = i[o]); o++)
            try {
                (n = e._data(s, "events")) && n.remove && e(s).triggerHandler("remove")
            } catch (e) {}
        t(i)
    }
    ),
    e.widget = function(t, i, n) {
        var s, o, a, r = {}, l = t.split(".")[0], c = l + "-" + (t = t.split(".")[1]);
        return n || (n = i,
        i = e.Widget),
        e.isArray(n) && (n = e.extend.apply(null, [{}].concat(n))),
        e.expr[":"][c.toLowerCase()] = function(t) {
            return !!e.data(t, c)
        }
        ,
        e[l] = e[l] || {},
        s = e[l][t],
        o = e[l][t] = function(e, t) {
            if (!this._createWidget)
                return new o(e,t);
            arguments.length && this._createWidget(e, t)
        }
        ,
        e.extend(o, s, {
            version: n.version,
            _proto: e.extend({}, n),
            _childConstructors: []
        }),
        (a = new i).options = e.widget.extend({}, a.options),
        e.each(n, (function(t, n) {
            e.isFunction(n) ? r[t] = function() {
                function e() {
                    return i.prototype[t].apply(this, arguments)
                }
                function s(e) {
                    return i.prototype[t].apply(this, e)
                }
                return function() {
                    var t, i = this._super, o = this._superApply;
                    return this._super = e,
                    this._superApply = s,
                    t = n.apply(this, arguments),
                    this._super = i,
                    this._superApply = o,
                    t
                }
            }() : r[t] = n
        }
        )),
        o.prototype = e.widget.extend(a, {
            widgetEventPrefix: s && a.widgetEventPrefix || t
        }, r, {
            constructor: o,
            namespace: l,
            widgetName: t,
            widgetFullName: c
        }),
        s ? (e.each(s._childConstructors, (function(t, i) {
            var n = i.prototype;
            e.widget(n.namespace + "." + n.widgetName, o, i._proto)
        }
        )),
        delete s._childConstructors) : i._childConstructors.push(o),
        e.widget.bridge(t, o),
        o
    }
    ,
    e.widget.extend = function(t) {
        for (var i, s, o = n.call(arguments, 1), a = 0, r = o.length; a < r; a++)
            for (i in o[a])
                s = o[a][i],
                o[a].hasOwnProperty(i) && void 0 !== s && (e.isPlainObject(s) ? t[i] = e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({}, s) : t[i] = s);
        return t
    }
    ,
    e.widget.bridge = function(t, i) {
        var s = i.prototype.widgetFullName || t;
        e.fn[t] = function(o) {
            var a = "string" == typeof o
              , r = n.call(arguments, 1)
              , l = this;
            return a ? this.length || "instance" !== o ? this.each((function() {
                var i, n = e.data(this, s);
                return "instance" === o ? (l = n,
                !1) : n ? e.isFunction(n[o]) && "_" !== o.charAt(0) ? (i = n[o].apply(n, r)) !== n && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i,
                !1) : void 0 : e.error("no such method '" + o + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + o + "'")
            }
            )) : l = void 0 : (r.length && (o = e.widget.extend.apply(null, [o].concat(r))),
            this.each((function() {
                var t = e.data(this, s);
                t ? (t.option(o || {}),
                t._init && t._init()) : e.data(this, s, new i(o,this))
            }
            ))),
            l
        }
    }
    ,
    e.Widget = function() {}
    ,
    e.Widget._childConstructors = [],
    e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {},
            disabled: !1,
            create: null
        },
        _createWidget: function(t, n) {
            n = e(n || this.defaultElement || this)[0],
            this.element = e(n),
            this.uuid = i++,
            this.eventNamespace = "." + this.widgetName + this.uuid,
            this.bindings = e(),
            this.hoverable = e(),
            this.focusable = e(),
            this.classesElementLookup = {},
            n !== this && (e.data(n, this.widgetFullName, this),
            this._on(!0, this.element, {
                remove: function(e) {
                    e.target === n && this.destroy()
                }
            }),
            this.document = e(n.style ? n.ownerDocument : n.document || n),
            this.window = e(this.document[0].defaultView || this.document[0].parentWindow)),
            this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t),
            this._create(),
            this.options.disabled && this._setOptionDisabled(this.options.disabled),
            this._trigger("create", null, this._getCreateEventData()),
            this._init()
        },
        _getCreateOptions: function() {
            return {}
        },
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            var t = this;
            this._destroy(),
            e.each(this.classesElementLookup, (function(e, i) {
                t._removeClass(i, e)
            }
            )),
            this.element.off(this.eventNamespace).removeData(this.widgetFullName),
            this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
            this.bindings.off(this.eventNamespace)
        },
        _destroy: e.noop,
        widget: function() {
            return this.element
        },
        option: function(t, i) {
            var n, s, o, a = t;
            if (0 === arguments.length)
                return e.widget.extend({}, this.options);
            if ("string" == typeof t)
                if (a = {},
                n = t.split("."),
                t = n.shift(),
                n.length) {
                    for (s = a[t] = e.widget.extend({}, this.options[t]),
                    o = 0; o < n.length - 1; o++)
                        s[n[o]] = s[n[o]] || {},
                        s = s[n[o]];
                    if (t = n.pop(),
                    1 === arguments.length)
                        return void 0 === s[t] ? null : s[t];
                    s[t] = i
                } else {
                    if (1 === arguments.length)
                        return void 0 === this.options[t] ? null : this.options[t];
                    a[t] = i
                }
            return this._setOptions(a),
            this
        },
        _setOptions: function(e) {
            var t;
            for (t in e)
                this._setOption(t, e[t]);
            return this
        },
        _setOption: function(e, t) {
            return "classes" === e && this._setOptionClasses(t),
            this.options[e] = t,
            "disabled" === e && this._setOptionDisabled(t),
            this
        },
        _setOptionClasses: function(t) {
            var i, n, s;
            for (i in t)
                s = this.classesElementLookup[i],
                t[i] !== this.options.classes[i] && s && s.length && (n = e(s.get()),
                this._removeClass(s, i),
                n.addClass(this._classes({
                    element: n,
                    keys: i,
                    classes: t,
                    add: !0
                })))
        },
        _setOptionDisabled: function(e) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!e),
            e && (this._removeClass(this.hoverable, null, "ui-state-hover"),
            this._removeClass(this.focusable, null, "ui-state-focus"))
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _classes: function(t) {
            var i = []
              , n = this;
            function s(s, o) {
                var a, r;
                for (r = 0; r < s.length; r++)
                    a = n.classesElementLookup[s[r]] || e(),
                    a = t.add ? e(e.unique(a.get().concat(t.element.get()))) : e(a.not(t.element).get()),
                    n.classesElementLookup[s[r]] = a,
                    i.push(s[r]),
                    o && t.classes[s[r]] && i.push(t.classes[s[r]])
            }
            return t = e.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, t),
            this._on(t.element, {
                remove: "_untrackClassesElement"
            }),
            t.keys && s(t.keys.match(/\S+/g) || [], !0),
            t.extra && s(t.extra.match(/\S+/g) || []),
            i.join(" ")
        },
        _untrackClassesElement: function(t) {
            var i = this;
            e.each(i.classesElementLookup, (function(n, s) {
                -1 !== e.inArray(t.target, s) && (i.classesElementLookup[n] = e(s.not(t.target).get()))
            }
            ))
        },
        _removeClass: function(e, t, i) {
            return this._toggleClass(e, t, i, !1)
        },
        _addClass: function(e, t, i) {
            return this._toggleClass(e, t, i, !0)
        },
        _toggleClass: function(e, t, i, n) {
            n = "boolean" == typeof n ? n : i;
            var s = "string" == typeof e || null === e
              , o = {
                extra: s ? t : i,
                keys: s ? e : t,
                element: s ? this.element : e,
                add: n
            };
            return o.element.toggleClass(this._classes(o), n),
            this
        },
        _on: function(t, i, n) {
            var s, o = this;
            "boolean" != typeof t && (n = i,
            i = t,
            t = !1),
            n ? (i = s = e(i),
            this.bindings = this.bindings.add(i)) : (n = i,
            i = this.element,
            s = this.widget()),
            e.each(n, (function(n, a) {
                function r() {
                    if (t || !0 !== o.options.disabled && !e(this).hasClass("ui-state-disabled"))
                        return ("string" == typeof a ? o[a] : a).apply(o, arguments)
                }
                "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || e.guid++);
                var l = n.match(/^([\w:-]*)\s*(.*)$/)
                  , c = l[1] + o.eventNamespace
                  , u = l[2];
                u ? s.on(c, u, r) : i.on(c, r)
            }
            ))
        },
        _off: function(t, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
            t.off(i).off(i),
            this.bindings = e(this.bindings.not(t).get()),
            this.focusable = e(this.focusable.not(t).get()),
            this.hoverable = e(this.hoverable.not(t).get())
        },
        _delay: function(e, t) {
            var i = this;
            return setTimeout((function() {
                return ("string" == typeof e ? i[e] : e).apply(i, arguments)
            }
            ), t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t),
            this._on(t, {
                mouseenter: function(t) {
                    this._addClass(e(t.currentTarget), null, "ui-state-hover")
                },
                mouseleave: function(t) {
                    this._removeClass(e(t.currentTarget), null, "ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t),
            this._on(t, {
                focusin: function(t) {
                    this._addClass(e(t.currentTarget), null, "ui-state-focus")
                },
                focusout: function(t) {
                    this._removeClass(e(t.currentTarget), null, "ui-state-focus")
                }
            })
        },
        _trigger: function(t, i, n) {
            var s, o, a = this.options[t];
            if (n = n || {},
            (i = e.Event(i)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(),
            i.target = this.element[0],
            o = i.originalEvent)
                for (s in o)
                    s in i || (i[s] = o[s]);
            return this.element.trigger(i, n),
            !(e.isFunction(a) && !1 === a.apply(this.element[0], [i].concat(n)) || i.isDefaultPrevented())
        }
    },
    e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, (function(t, i) {
        e.Widget.prototype["_" + t] = function(n, s, o) {
            var a;
            "string" == typeof s && (s = {
                effect: s
            });
            var r = s ? !0 === s || "number" == typeof s ? i : s.effect || i : t;
            "number" == typeof (s = s || {}) && (s = {
                duration: s
            }),
            a = !e.isEmptyObject(s),
            s.complete = o,
            s.delay && n.delay(s.delay),
            a && e.effects && e.effects.effect[r] ? n[t](s) : r !== t && n[r] ? n[r](s.duration, s.easing, o) : n.queue((function(i) {
                e(this)[t](),
                o && o.call(n[0]),
                i()
            }
            ))
        }
    }
    ));
    e.widget;
    /*!
 * jQuery UI Position 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
    !function() {
        var t, i = Math.max, n = Math.abs, s = /left|center|right/, o = /top|center|bottom/, a = /[\+\-]\d+(\.[\d]+)?%?/, r = /^\w+/, l = /%$/, c = e.fn.position;
        function u(e, t, i) {
            return [parseFloat(e[0]) * (l.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (l.test(e[1]) ? i / 100 : 1)]
        }
        function h(t, i) {
            return parseInt(e.css(t, i), 10) || 0
        }
        function d(t) {
            var i = t[0];
            return 9 === i.nodeType ? {
                width: t.width(),
                height: t.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : e.isWindow(i) ? {
                width: t.width(),
                height: t.height(),
                offset: {
                    top: t.scrollTop(),
                    left: t.scrollLeft()
                }
            } : i.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: i.pageY,
                    left: i.pageX
                }
            } : {
                width: t.outerWidth(),
                height: t.outerHeight(),
                offset: t.offset()
            }
        }
        e.position = {
            scrollbarWidth: function() {
                if (void 0 !== t)
                    return t;
                var i, n, s = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), o = s.children()[0];
                return e("body").append(s),
                i = o.offsetWidth,
                s.css("overflow", "scroll"),
                i === (n = o.offsetWidth) && (n = s[0].clientWidth),
                s.remove(),
                t = i - n
            },
            getScrollInfo: function(t) {
                var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x")
                  , n = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y")
                  , s = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth;
                return {
                    width: "scroll" === n || "auto" === n && t.height < t.element[0].scrollHeight ? e.position.scrollbarWidth() : 0,
                    height: s ? e.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(t) {
                var i = e(t || window)
                  , n = e.isWindow(i[0])
                  , s = !!i[0] && 9 === i[0].nodeType;
                return {
                    element: i,
                    isWindow: n,
                    isDocument: s,
                    offset: !n && !s ? e(t).offset() : {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: i.scrollLeft(),
                    scrollTop: i.scrollTop(),
                    width: i.outerWidth(),
                    height: i.outerHeight()
                }
            }
        },
        e.fn.position = function(t) {
            if (!t || !t.of)
                return c.apply(this, arguments);
            t = e.extend({}, t);
            var l, p, f, m, g, v, _ = e(t.of), b = e.position.getWithinInfo(t.within), y = e.position.getScrollInfo(b), w = (t.collision || "flip").split(" "), x = {};
            return v = d(_),
            _[0].preventDefault && (t.at = "left top"),
            p = v.width,
            f = v.height,
            m = v.offset,
            g = e.extend({}, m),
            e.each(["my", "at"], (function() {
                var e, i, n = (t[this] || "").split(" ");
                1 === n.length && (n = s.test(n[0]) ? n.concat(["center"]) : o.test(n[0]) ? ["center"].concat(n) : ["center", "center"]),
                n[0] = s.test(n[0]) ? n[0] : "center",
                n[1] = o.test(n[1]) ? n[1] : "center",
                e = a.exec(n[0]),
                i = a.exec(n[1]),
                x[this] = [e ? e[0] : 0, i ? i[0] : 0],
                t[this] = [r.exec(n[0])[0], r.exec(n[1])[0]]
            }
            )),
            1 === w.length && (w[1] = w[0]),
            "right" === t.at[0] ? g.left += p : "center" === t.at[0] && (g.left += p / 2),
            "bottom" === t.at[1] ? g.top += f : "center" === t.at[1] && (g.top += f / 2),
            l = u(x.at, p, f),
            g.left += l[0],
            g.top += l[1],
            this.each((function() {
                var s, o, a = e(this), r = a.outerWidth(), c = a.outerHeight(), d = h(this, "marginLeft"), v = h(this, "marginTop"), C = r + d + h(this, "marginRight") + y.width, k = c + v + h(this, "marginBottom") + y.height, S = e.extend({}, g), D = u(x.my, a.outerWidth(), a.outerHeight());
                "right" === t.my[0] ? S.left -= r : "center" === t.my[0] && (S.left -= r / 2),
                "bottom" === t.my[1] ? S.top -= c : "center" === t.my[1] && (S.top -= c / 2),
                S.left += D[0],
                S.top += D[1],
                s = {
                    marginLeft: d,
                    marginTop: v
                },
                e.each(["left", "top"], (function(i, n) {
                    e.ui.position[w[i]] && e.ui.position[w[i]][n](S, {
                        targetWidth: p,
                        targetHeight: f,
                        elemWidth: r,
                        elemHeight: c,
                        collisionPosition: s,
                        collisionWidth: C,
                        collisionHeight: k,
                        offset: [l[0] + D[0], l[1] + D[1]],
                        my: t.my,
                        at: t.at,
                        within: b,
                        elem: a
                    })
                }
                )),
                t.using && (o = function(e) {
                    var s = m.left - S.left
                      , o = s + p - r
                      , l = m.top - S.top
                      , u = l + f - c
                      , h = {
                        target: {
                            element: _,
                            left: m.left,
                            top: m.top,
                            width: p,
                            height: f
                        },
                        element: {
                            element: a,
                            left: S.left,
                            top: S.top,
                            width: r,
                            height: c
                        },
                        horizontal: o < 0 ? "left" : s > 0 ? "right" : "center",
                        vertical: u < 0 ? "top" : l > 0 ? "bottom" : "middle"
                    };
                    p < r && n(s + o) < p && (h.horizontal = "center"),
                    f < c && n(l + u) < f && (h.vertical = "middle"),
                    i(n(s), n(o)) > i(n(l), n(u)) ? h.important = "horizontal" : h.important = "vertical",
                    t.using.call(this, e, h)
                }
                ),
                a.offset(e.extend(S, {
                    using: o
                }))
            }
            ))
        }
        ,
        e.ui.position = {
            fit: {
                left: function(e, t) {
                    var n, s = t.within, o = s.isWindow ? s.scrollLeft : s.offset.left, a = s.width, r = e.left - t.collisionPosition.marginLeft, l = o - r, c = r + t.collisionWidth - a - o;
                    t.collisionWidth > a ? l > 0 && c <= 0 ? (n = e.left + l + t.collisionWidth - a - o,
                    e.left += l - n) : e.left = c > 0 && l <= 0 ? o : l > c ? o + a - t.collisionWidth : o : l > 0 ? e.left += l : c > 0 ? e.left -= c : e.left = i(e.left - r, e.left)
                },
                top: function(e, t) {
                    var n, s = t.within, o = s.isWindow ? s.scrollTop : s.offset.top, a = t.within.height, r = e.top - t.collisionPosition.marginTop, l = o - r, c = r + t.collisionHeight - a - o;
                    t.collisionHeight > a ? l > 0 && c <= 0 ? (n = e.top + l + t.collisionHeight - a - o,
                    e.top += l - n) : e.top = c > 0 && l <= 0 ? o : l > c ? o + a - t.collisionHeight : o : l > 0 ? e.top += l : c > 0 ? e.top -= c : e.top = i(e.top - r, e.top)
                }
            },
            flip: {
                left: function(e, t) {
                    var i, s, o = t.within, a = o.offset.left + o.scrollLeft, r = o.width, l = o.isWindow ? o.scrollLeft : o.offset.left, c = e.left - t.collisionPosition.marginLeft, u = c - l, h = c + t.collisionWidth - r - l, d = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0, p = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0, f = -2 * t.offset[0];
                    u < 0 ? ((i = e.left + d + p + f + t.collisionWidth - r - a) < 0 || i < n(u)) && (e.left += d + p + f) : h > 0 && ((s = e.left - t.collisionPosition.marginLeft + d + p + f - l) > 0 || n(s) < h) && (e.left += d + p + f)
                },
                top: function(e, t) {
                    var i, s, o = t.within, a = o.offset.top + o.scrollTop, r = o.height, l = o.isWindow ? o.scrollTop : o.offset.top, c = e.top - t.collisionPosition.marginTop, u = c - l, h = c + t.collisionHeight - r - l, d = "top" === t.my[1] ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0, p = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0, f = -2 * t.offset[1];
                    u < 0 ? ((s = e.top + d + p + f + t.collisionHeight - r - a) < 0 || s < n(u)) && (e.top += d + p + f) : h > 0 && ((i = e.top - t.collisionPosition.marginTop + d + p + f - l) > 0 || n(i) < h) && (e.top += d + p + f)
                }
            },
            flipfit: {
                left: function() {
                    e.ui.position.flip.left.apply(this, arguments),
                    e.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    e.ui.position.flip.top.apply(this, arguments),
                    e.ui.position.fit.top.apply(this, arguments)
                }
            }
        }
    }();
    e.ui.position,
    e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo((function(t) {
            return function(i) {
                return !!e.data(i, t)
            }
        }
        )) : function(t, i, n) {
            return !!e.data(t, n[3])
        }
    }),
    e.fn.extend({
        disableSelection: (s = "onselectstart"in document.createElement("div") ? "selectstart" : "mousedown",
        function() {
            return this.on(s + ".ui-disableSelection", (function(e) {
                e.preventDefault()
            }
            ))
        }
        ),
        enableSelection: function() {
            return this.off(".ui-disableSelection")
        }
    });
    /*!
 * jQuery UI :data 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    var s, o, a = "ui-effects-", r = "ui-effects-style", l = "ui-effects-animated", c = e;
    e.effects = {
        effect: {}
    },
    /*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
    function(e, t) {
        var i, n = /^([\-+])=\s*(\d+\.?\d*)/, s = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(e) {
                return [e[1], e[2], e[3], e[4]]
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(e) {
                return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(e) {
                return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(e) {
                return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(e) {
                return [e[1], e[2] / 100, e[3] / 100, e[4]]
            }
        }], o = e.Color = function(t, i, n, s) {
            return new e.Color.fn.parse(t,i,n,s)
        }
        , a = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        }, r = {
            byte: {
                floor: !0,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: !0
            }
        }, l = o.support = {}, c = e("<p>")[0], u = e.each;
        function h(e, t, i) {
            var n = r[t.type] || {};
            return null == e ? i || !t.def ? null : t.def : (e = n.floor ? ~~e : parseFloat(e),
            isNaN(e) ? t.def : n.mod ? (e + n.mod) % n.mod : 0 > e ? 0 : n.max < e ? n.max : e)
        }
        function d(t) {
            var n = o()
              , r = n._rgba = [];
            return t = t.toLowerCase(),
            u(s, (function(e, i) {
                var s, o = i.re.exec(t), l = o && i.parse(o), c = i.space || "rgba";
                if (l)
                    return s = n[c](l),
                    n[a[c].cache] = s[a[c].cache],
                    r = n._rgba = s._rgba,
                    !1
            }
            )),
            r.length ? ("0,0,0,0" === r.join() && e.extend(r, i.transparent),
            n) : i[t]
        }
        function p(e, t, i) {
            return 6 * (i = (i + 1) % 1) < 1 ? e + (t - e) * i * 6 : 2 * i < 1 ? t : 3 * i < 2 ? e + (t - e) * (2 / 3 - i) * 6 : e
        }
        c.style.cssText = "background-color:rgba(1,1,1,.5)",
        l.rgba = c.style.backgroundColor.indexOf("rgba") > -1,
        u(a, (function(e, t) {
            t.cache = "_" + e,
            t.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            }
        }
        )),
        o.fn = e.extend(o.prototype, {
            parse: function(n, s, r, l) {
                if (n === t)
                    return this._rgba = [null, null, null, null],
                    this;
                (n.jquery || n.nodeType) && (n = e(n).css(s),
                s = t);
                var c = this
                  , p = e.type(n)
                  , f = this._rgba = [];
                return s !== t && (n = [n, s, r, l],
                p = "array"),
                "string" === p ? this.parse(d(n) || i._default) : "array" === p ? (u(a.rgba.props, (function(e, t) {
                    f[t.idx] = h(n[t.idx], t)
                }
                )),
                this) : "object" === p ? (u(a, n instanceof o ? function(e, t) {
                    n[t.cache] && (c[t.cache] = n[t.cache].slice())
                }
                : function(t, i) {
                    var s = i.cache;
                    u(i.props, (function(e, t) {
                        if (!c[s] && i.to) {
                            if ("alpha" === e || null == n[e])
                                return;
                            c[s] = i.to(c._rgba)
                        }
                        c[s][t.idx] = h(n[e], t, !0)
                    }
                    )),
                    c[s] && e.inArray(null, c[s].slice(0, 3)) < 0 && (c[s][3] = 1,
                    i.from && (c._rgba = i.from(c[s])))
                }
                ),
                this) : void 0
            },
            is: function(e) {
                var t = o(e)
                  , i = !0
                  , n = this;
                return u(a, (function(e, s) {
                    var o, a = t[s.cache];
                    return a && (o = n[s.cache] || s.to && s.to(n._rgba) || [],
                    u(s.props, (function(e, t) {
                        if (null != a[t.idx])
                            return i = a[t.idx] === o[t.idx]
                    }
                    ))),
                    i
                }
                )),
                i
            },
            _space: function() {
                var e = []
                  , t = this;
                return u(a, (function(i, n) {
                    t[n.cache] && e.push(i)
                }
                )),
                e.pop()
            },
            transition: function(e, t) {
                var i = o(e)
                  , n = i._space()
                  , s = a[n]
                  , l = 0 === this.alpha() ? o("transparent") : this
                  , c = l[s.cache] || s.to(l._rgba)
                  , d = c.slice();
                return i = i[s.cache],
                u(s.props, (function(e, n) {
                    var s = n.idx
                      , o = c[s]
                      , a = i[s]
                      , l = r[n.type] || {};
                    null !== a && (null === o ? d[s] = a : (l.mod && (a - o > l.mod / 2 ? o += l.mod : o - a > l.mod / 2 && (o -= l.mod)),
                    d[s] = h((a - o) * t + o, n)))
                }
                )),
                this[n](d)
            },
            blend: function(t) {
                if (1 === this._rgba[3])
                    return this;
                var i = this._rgba.slice()
                  , n = i.pop()
                  , s = o(t)._rgba;
                return o(e.map(i, (function(e, t) {
                    return (1 - n) * s[t] + n * e
                }
                )))
            },
            toRgbaString: function() {
                var t = "rgba("
                  , i = e.map(this._rgba, (function(e, t) {
                    return null == e ? t > 2 ? 1 : 0 : e
                }
                ));
                return 1 === i[3] && (i.pop(),
                t = "rgb("),
                t + i.join() + ")"
            },
            toHslaString: function() {
                var t = "hsla("
                  , i = e.map(this.hsla(), (function(e, t) {
                    return null == e && (e = t > 2 ? 1 : 0),
                    t && t < 3 && (e = Math.round(100 * e) + "%"),
                    e
                }
                ));
                return 1 === i[3] && (i.pop(),
                t = "hsl("),
                t + i.join() + ")"
            },
            toHexString: function(t) {
                var i = this._rgba.slice()
                  , n = i.pop();
                return t && i.push(~~(255 * n)),
                "#" + e.map(i, (function(e) {
                    return 1 === (e = (e || 0).toString(16)).length ? "0" + e : e
                }
                )).join("")
            },
            toString: function() {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
            }
        }),
        o.fn.parse.prototype = o.fn,
        a.hsla.to = function(e) {
            if (null == e[0] || null == e[1] || null == e[2])
                return [null, null, null, e[3]];
            var t, i, n = e[0] / 255, s = e[1] / 255, o = e[2] / 255, a = e[3], r = Math.max(n, s, o), l = Math.min(n, s, o), c = r - l, u = r + l, h = .5 * u;
            return t = l === r ? 0 : n === r ? 60 * (s - o) / c + 360 : s === r ? 60 * (o - n) / c + 120 : 60 * (n - s) / c + 240,
            i = 0 === c ? 0 : h <= .5 ? c / u : c / (2 - u),
            [Math.round(t) % 360, i, h, null == a ? 1 : a]
        }
        ,
        a.hsla.from = function(e) {
            if (null == e[0] || null == e[1] || null == e[2])
                return [null, null, null, e[3]];
            var t = e[0] / 360
              , i = e[1]
              , n = e[2]
              , s = e[3]
              , o = n <= .5 ? n * (1 + i) : n + i - n * i
              , a = 2 * n - o;
            return [Math.round(255 * p(a, o, t + 1 / 3)), Math.round(255 * p(a, o, t)), Math.round(255 * p(a, o, t - 1 / 3)), s]
        }
        ,
        u(a, (function(i, s) {
            var a = s.props
              , r = s.cache
              , l = s.to
              , c = s.from;
            o.fn[i] = function(i) {
                if (l && !this[r] && (this[r] = l(this._rgba)),
                i === t)
                    return this[r].slice();
                var n, s = e.type(i), d = "array" === s || "object" === s ? i : arguments, p = this[r].slice();
                return u(a, (function(e, t) {
                    var i = d["object" === s ? e : t.idx];
                    null == i && (i = p[t.idx]),
                    p[t.idx] = h(i, t)
                }
                )),
                c ? ((n = o(c(p)))[r] = p,
                n) : o(p)
            }
            ,
            u(a, (function(t, s) {
                o.fn[t] || (o.fn[t] = function(o) {
                    var a, r = e.type(o), l = "alpha" === t ? this._hsla ? "hsla" : "rgba" : i, c = this[l](), u = c[s.idx];
                    return "undefined" === r ? u : ("function" === r && (o = o.call(this, u),
                    r = e.type(o)),
                    null == o && s.empty ? this : ("string" === r && (a = n.exec(o)) && (o = u + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1)),
                    c[s.idx] = o,
                    this[l](c)))
                }
                )
            }
            ))
        }
        )),
        o.hook = function(t) {
            var i = t.split(" ");
            u(i, (function(t, i) {
                e.cssHooks[i] = {
                    set: function(t, n) {
                        var s, a, r = "";
                        if ("transparent" !== n && ("string" !== e.type(n) || (s = d(n)))) {
                            if (n = o(s || n),
                            !l.rgba && 1 !== n._rgba[3]) {
                                for (a = "backgroundColor" === i ? t.parentNode : t; ("" === r || "transparent" === r) && a && a.style; )
                                    try {
                                        r = e.css(a, "backgroundColor"),
                                        a = a.parentNode
                                    } catch (e) {}
                                n = n.blend(r && "transparent" !== r ? r : "_default")
                            }
                            n = n.toRgbaString()
                        }
                        try {
                            t.style[i] = n
                        } catch (e) {}
                    }
                },
                e.fx.step[i] = function(t) {
                    t.colorInit || (t.start = o(t.elem, i),
                    t.end = o(t.end),
                    t.colorInit = !0),
                    e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos))
                }
            }
            ))
        }
        ,
        o.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"),
        e.cssHooks.borderColor = {
            expand: function(e) {
                var t = {};
                return u(["Top", "Right", "Bottom", "Left"], (function(i, n) {
                    t["border" + n + "Color"] = e
                }
                )),
                t
            }
        },
        i = e.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }(c),
    function() {
        var t = ["add", "remove", "toggle"]
          , i = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        function n(t) {
            var i, n, s = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle, o = {};
            if (s && s.length && s[0] && s[s[0]])
                for (n = s.length; n--; )
                    "string" == typeof s[i = s[n]] && (o[e.camelCase(i)] = s[i]);
            else
                for (i in s)
                    "string" == typeof s[i] && (o[i] = s[i]);
            return o
        }
        e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], (function(t, i) {
            e.fx.step[i] = function(e) {
                ("none" !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (c.style(e.elem, i, e.end),
                e.setAttr = !0)
            }
        }
        )),
        e.fn.addBack || (e.fn.addBack = function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
        ),
        e.effects.animateClass = function(s, o, a, r) {
            var l = e.speed(o, a, r);
            return this.queue((function() {
                var o, a = e(this), r = a.attr("class") || "", c = l.children ? a.find("*").addBack() : a;
                c = c.map((function() {
                    return {
                        el: e(this),
                        start: n(this)
                    }
                }
                )),
                (o = function() {
                    e.each(t, (function(e, t) {
                        s[t] && a[t + "Class"](s[t])
                    }
                    ))
                }
                )(),
                c = c.map((function() {
                    return this.end = n(this.el[0]),
                    this.diff = function(t, n) {
                        var s, o, a = {};
                        for (s in n)
                            o = n[s],
                            t[s] !== o && (i[s] || !e.fx.step[s] && isNaN(parseFloat(o)) || (a[s] = o));
                        return a
                    }(this.start, this.end),
                    this
                }
                )),
                a.attr("class", r),
                c = c.map((function() {
                    var t = this
                      , i = e.Deferred()
                      , n = e.extend({}, l, {
                        queue: !1,
                        complete: function() {
                            i.resolve(t)
                        }
                    });
                    return this.el.animate(this.diff, n),
                    i.promise()
                }
                )),
                e.when.apply(e, c.get()).done((function() {
                    o(),
                    e.each(arguments, (function() {
                        var t = this.el;
                        e.each(this.diff, (function(e) {
                            t.css(e, "")
                        }
                        ))
                    }
                    )),
                    l.complete.call(a[0])
                }
                ))
            }
            ))
        }
        ,
        e.fn.extend({
            addClass: function(t) {
                return function(i, n, s, o) {
                    return n ? e.effects.animateClass.call(this, {
                        add: i
                    }, n, s, o) : t.apply(this, arguments)
                }
            }(e.fn.addClass),
            removeClass: function(t) {
                return function(i, n, s, o) {
                    return arguments.length > 1 ? e.effects.animateClass.call(this, {
                        remove: i
                    }, n, s, o) : t.apply(this, arguments)
                }
            }(e.fn.removeClass),
            toggleClass: function(t) {
                return function(i, n, s, o, a) {
                    return "boolean" == typeof n || void 0 === n ? s ? e.effects.animateClass.call(this, n ? {
                        add: i
                    } : {
                        remove: i
                    }, s, o, a) : t.apply(this, arguments) : e.effects.animateClass.call(this, {
                        toggle: i
                    }, n, s, o)
                }
            }(e.fn.toggleClass),
            switchClass: function(t, i, n, s, o) {
                return e.effects.animateClass.call(this, {
                    add: i,
                    remove: t
                }, n, s, o)
            }
        })
    }(),
    function() {
        function t(t, i, n, s) {
            return e.isPlainObject(t) && (i = t,
            t = t.effect),
            t = {
                effect: t
            },
            null == i && (i = {}),
            e.isFunction(i) && (s = i,
            n = null,
            i = {}),
            ("number" == typeof i || e.fx.speeds[i]) && (s = n,
            n = i,
            i = {}),
            e.isFunction(n) && (s = n,
            n = null),
            i && e.extend(t, i),
            n = n || i.duration,
            t.duration = e.fx.off ? 0 : "number" == typeof n ? n : n in e.fx.speeds ? e.fx.speeds[n] : e.fx.speeds._default,
            t.complete = s || i.complete,
            t
        }
        function i(t) {
            return !(t && "number" != typeof t && !e.fx.speeds[t]) || ("string" == typeof t && !e.effects.effect[t] || (!!e.isFunction(t) || "object" == typeof t && !t.effect))
        }
        function n(e, t) {
            var i = t.outerWidth()
              , n = t.outerHeight()
              , s = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(e) || ["", 0, i, n, 0];
            return {
                top: parseFloat(s[1]) || 0,
                right: "auto" === s[2] ? i : parseFloat(s[2]),
                bottom: "auto" === s[3] ? n : parseFloat(s[3]),
                left: parseFloat(s[4]) || 0
            }
        }
        e.expr && e.expr.filters && e.expr.filters.animated && (e.expr.filters.animated = function(t) {
            return function(i) {
                return !!e(i).data(l) || t(i)
            }
        }(e.expr.filters.animated)),
        !1 !== e.uiBackCompat && e.extend(e.effects, {
            save: function(e, t) {
                for (var i = 0, n = t.length; i < n; i++)
                    null !== t[i] && e.data(a + t[i], e[0].style[t[i]])
            },
            restore: function(e, t) {
                for (var i, n = 0, s = t.length; n < s; n++)
                    null !== t[n] && (i = e.data(a + t[n]),
                    e.css(t[n], i))
            },
            setMode: function(e, t) {
                return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"),
                t
            },
            createWrapper: function(t) {
                if (t.parent().is(".ui-effects-wrapper"))
                    return t.parent();
                var i = {
                    width: t.outerWidth(!0),
                    height: t.outerHeight(!0),
                    float: t.css("float")
                }
                  , n = e("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                })
                  , s = {
                    width: t.width(),
                    height: t.height()
                }
                  , o = document.activeElement;
                try {
                    o.id
                } catch (e) {
                    o = document.body
                }
                return t.wrap(n),
                (t[0] === o || e.contains(t[0], o)) && e(o).trigger("focus"),
                n = t.parent(),
                "static" === t.css("position") ? (n.css({
                    position: "relative"
                }),
                t.css({
                    position: "relative"
                })) : (e.extend(i, {
                    position: t.css("position"),
                    zIndex: t.css("z-index")
                }),
                e.each(["top", "left", "bottom", "right"], (function(e, n) {
                    i[n] = t.css(n),
                    isNaN(parseInt(i[n], 10)) && (i[n] = "auto")
                }
                )),
                t.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })),
                t.css(s),
                n.css(i).show()
            },
            removeWrapper: function(t) {
                var i = document.activeElement;
                return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t),
                (t[0] === i || e.contains(t[0], i)) && e(i).trigger("focus")),
                t
            }
        }),
        e.extend(e.effects, {
            version: "1.12.1",
            define: function(t, i, n) {
                return n || (n = i,
                i = "effect"),
                e.effects.effect[t] = n,
                e.effects.effect[t].mode = i,
                n
            },
            scaledDimensions: function(e, t, i) {
                if (0 === t)
                    return {
                        height: 0,
                        width: 0,
                        outerHeight: 0,
                        outerWidth: 0
                    };
                var n = "horizontal" !== i ? (t || 100) / 100 : 1
                  , s = "vertical" !== i ? (t || 100) / 100 : 1;
                return {
                    height: e.height() * s,
                    width: e.width() * n,
                    outerHeight: e.outerHeight() * s,
                    outerWidth: e.outerWidth() * n
                }
            },
            clipToBox: function(e) {
                return {
                    width: e.clip.right - e.clip.left,
                    height: e.clip.bottom - e.clip.top,
                    left: e.clip.left,
                    top: e.clip.top
                }
            },
            unshift: function(e, t, i) {
                var n = e.queue();
                t > 1 && n.splice.apply(n, [1, 0].concat(n.splice(t, i))),
                e.dequeue()
            },
            saveStyle: function(e) {
                e.data(r, e[0].style.cssText)
            },
            restoreStyle: function(e) {
                e[0].style.cssText = e.data(r) || "",
                e.removeData(r)
            },
            mode: function(e, t) {
                var i = e.is(":hidden");
                return "toggle" === t && (t = i ? "show" : "hide"),
                (i ? "hide" === t : "show" === t) && (t = "none"),
                t
            },
            getBaseline: function(e, t) {
                var i, n;
                switch (e[0]) {
                case "top":
                    i = 0;
                    break;
                case "middle":
                    i = .5;
                    break;
                case "bottom":
                    i = 1;
                    break;
                default:
                    i = e[0] / t.height
                }
                switch (e[1]) {
                case "left":
                    n = 0;
                    break;
                case "center":
                    n = .5;
                    break;
                case "right":
                    n = 1;
                    break;
                default:
                    n = e[1] / t.width
                }
                return {
                    x: n,
                    y: i
                }
            },
            createPlaceholder: function(t) {
                var i, n = t.css("position"), s = t.position();
                return t.css({
                    marginTop: t.css("marginTop"),
                    marginBottom: t.css("marginBottom"),
                    marginLeft: t.css("marginLeft"),
                    marginRight: t.css("marginRight")
                }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()),
                /^(static|relative)/.test(n) && (n = "absolute",
                i = e("<" + t[0].nodeName + ">").insertAfter(t).css({
                    display: /^(inline|ruby)/.test(t.css("display")) ? "inline-block" : "block",
                    visibility: "hidden",
                    marginTop: t.css("marginTop"),
                    marginBottom: t.css("marginBottom"),
                    marginLeft: t.css("marginLeft"),
                    marginRight: t.css("marginRight"),
                    float: t.css("float")
                }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).addClass("ui-effects-placeholder"),
                t.data(a + "placeholder", i)),
                t.css({
                    position: n,
                    left: s.left,
                    top: s.top
                }),
                i
            },
            removePlaceholder: function(e) {
                var t = a + "placeholder"
                  , i = e.data(t);
                i && (i.remove(),
                e.removeData(t))
            },
            cleanUp: function(t) {
                e.effects.restoreStyle(t),
                e.effects.removePlaceholder(t)
            },
            setTransition: function(t, i, n, s) {
                return s = s || {},
                e.each(i, (function(e, i) {
                    var o = t.cssUnit(i);
                    o[0] > 0 && (s[i] = o[0] * n + o[1])
                }
                )),
                s
            }
        }),
        e.fn.extend({
            effect: function() {
                var i = t.apply(this, arguments)
                  , n = e.effects.effect[i.effect]
                  , s = n.mode
                  , o = i.queue
                  , a = o || "fx"
                  , r = i.complete
                  , c = i.mode
                  , u = []
                  , h = function(t) {
                    var i = e(this)
                      , n = e.effects.mode(i, c) || s;
                    i.data(l, !0),
                    u.push(n),
                    s && ("show" === n || n === s && "hide" === n) && i.show(),
                    s && "none" === n || e.effects.saveStyle(i),
                    e.isFunction(t) && t()
                };
                if (e.fx.off || !n)
                    return c ? this[c](i.duration, r) : this.each((function() {
                        r && r.call(this)
                    }
                    ));
                function d(t) {
                    var o = e(this);
                    function a() {
                        e.isFunction(r) && r.call(o[0]),
                        e.isFunction(t) && t()
                    }
                    i.mode = u.shift(),
                    !1 === e.uiBackCompat || s ? "none" === i.mode ? (o[c](),
                    a()) : n.call(o[0], i, (function() {
                        o.removeData(l),
                        e.effects.cleanUp(o),
                        "hide" === i.mode && o.hide(),
                        a()
                    }
                    )) : (o.is(":hidden") ? "hide" === c : "show" === c) ? (o[c](),
                    a()) : n.call(o[0], i, a)
                }
                return !1 === o ? this.each(h).each(d) : this.queue(a, h).queue(a, d)
            },
            show: function(e) {
                return function(n) {
                    if (i(n))
                        return e.apply(this, arguments);
                    var s = t.apply(this, arguments);
                    return s.mode = "show",
                    this.effect.call(this, s)
                }
            }(e.fn.show),
            hide: function(e) {
                return function(n) {
                    if (i(n))
                        return e.apply(this, arguments);
                    var s = t.apply(this, arguments);
                    return s.mode = "hide",
                    this.effect.call(this, s)
                }
            }(e.fn.hide),
            toggle: function(e) {
                return function(n) {
                    if (i(n) || "boolean" == typeof n)
                        return e.apply(this, arguments);
                    var s = t.apply(this, arguments);
                    return s.mode = "toggle",
                    this.effect.call(this, s)
                }
            }(e.fn.toggle),
            cssUnit: function(t) {
                var i = this.css(t)
                  , n = [];
                return e.each(["em", "px", "%", "pt"], (function(e, t) {
                    i.indexOf(t) > 0 && (n = [parseFloat(i), t])
                }
                )),
                n
            },
            cssClip: function(e) {
                return e ? this.css("clip", "rect(" + e.top + "px " + e.right + "px " + e.bottom + "px " + e.left + "px)") : n(this.css("clip"), this)
            },
            transfer: function(t, i) {
                var n = e(this)
                  , s = e(t.to)
                  , o = "fixed" === s.css("position")
                  , a = e("body")
                  , r = o ? a.scrollTop() : 0
                  , l = o ? a.scrollLeft() : 0
                  , c = s.offset()
                  , u = {
                    top: c.top - r,
                    left: c.left - l,
                    height: s.innerHeight(),
                    width: s.innerWidth()
                }
                  , h = n.offset()
                  , d = e("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(t.className).css({
                    top: h.top - r,
                    left: h.left - l,
                    height: n.innerHeight(),
                    width: n.innerWidth(),
                    position: o ? "fixed" : "absolute"
                }).animate(u, t.duration, t.easing, (function() {
                    d.remove(),
                    e.isFunction(i) && i()
                }
                ))
            }
        }),
        e.fx.step.clip = function(t) {
            t.clipInit || (t.start = e(t.elem).cssClip(),
            "string" == typeof t.end && (t.end = n(t.end, t.elem)),
            t.clipInit = !0),
            e(t.elem).cssClip({
                top: t.pos * (t.end.top - t.start.top) + t.start.top,
                right: t.pos * (t.end.right - t.start.right) + t.start.right,
                bottom: t.pos * (t.end.bottom - t.start.bottom) + t.start.bottom,
                left: t.pos * (t.end.left - t.start.left) + t.start.left
            })
        }
    }(),
    o = {},
    e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], (function(e, t) {
        o[t] = function(t) {
            return Math.pow(t, e + 2)
        }
    }
    )),
    e.extend(o, {
        Sine: function(e) {
            return 1 - Math.cos(e * Math.PI / 2)
        },
        Circ: function(e) {
            return 1 - Math.sqrt(1 - e * e)
        },
        Elastic: function(e) {
            return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
        },
        Back: function(e) {
            return e * e * (3 * e - 2)
        },
        Bounce: function(e) {
            for (var t, i = 4; e < ((t = Math.pow(2, --i)) - 1) / 11; )
                ;
            return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
        }
    }),
    e.each(o, (function(t, i) {
        e.easing["easeIn" + t] = i,
        e.easing["easeOut" + t] = function(e) {
            return 1 - i(1 - e)
        }
        ,
        e.easing["easeInOut" + t] = function(e) {
            return e < .5 ? i(2 * e) / 2 : 1 - i(-2 * e + 2) / 2
        }
    }
    ));
    e.effects,
    e.effects.define("blind", "hide", (function(t, i) {
        var n = {
            up: ["bottom", "top"],
            vertical: ["bottom", "top"],
            down: ["top", "bottom"],
            left: ["right", "left"],
            horizontal: ["right", "left"],
            right: ["left", "right"]
        }
          , s = e(this)
          , o = t.direction || "up"
          , a = s.cssClip()
          , r = {
            clip: e.extend({}, a)
        }
          , l = e.effects.createPlaceholder(s);
        r.clip[n[o][0]] = r.clip[n[o][1]],
        "show" === t.mode && (s.cssClip(r.clip),
        l && l.css(e.effects.clipToBox(r)),
        r.clip = a),
        l && l.animate(e.effects.clipToBox(r), t.duration, t.easing),
        s.animate(r, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: i
        })
    }
    )),
    e.effects.define("bounce", (function(t, i) {
        var n, s, o, a = e(this), r = t.mode, l = "hide" === r, c = "show" === r, u = t.direction || "up", h = t.distance, d = t.times || 5, p = 2 * d + (c || l ? 1 : 0), f = t.duration / p, m = t.easing, g = "up" === u || "down" === u ? "top" : "left", v = "up" === u || "left" === u, _ = 0, b = a.queue().length;
        for (e.effects.createPlaceholder(a),
        o = a.css(g),
        h || (h = a["top" === g ? "outerHeight" : "outerWidth"]() / 3),
        c && ((s = {
            opacity: 1
        })[g] = o,
        a.css("opacity", 0).css(g, v ? 2 * -h : 2 * h).animate(s, f, m)),
        l && (h /= Math.pow(2, d - 1)),
        (s = {})[g] = o; _ < d; _++)
            (n = {})[g] = (v ? "-=" : "+=") + h,
            a.animate(n, f, m).animate(s, f, m),
            h = l ? 2 * h : h / 2;
        l && ((n = {
            opacity: 0
        })[g] = (v ? "-=" : "+=") + h,
        a.animate(n, f, m)),
        a.queue(i),
        e.effects.unshift(a, b, p + 1)
    }
    )),
    e.effects.define("clip", "hide", (function(t, i) {
        var n, s = {}, o = e(this), a = t.direction || "vertical", r = "both" === a, l = r || "horizontal" === a, c = r || "vertical" === a;
        n = o.cssClip(),
        s.clip = {
            top: c ? (n.bottom - n.top) / 2 : n.top,
            right: l ? (n.right - n.left) / 2 : n.right,
            bottom: c ? (n.bottom - n.top) / 2 : n.bottom,
            left: l ? (n.right - n.left) / 2 : n.left
        },
        e.effects.createPlaceholder(o),
        "show" === t.mode && (o.cssClip(s.clip),
        s.clip = n),
        o.animate(s, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: i
        })
    }
    )),
    e.effects.define("drop", "hide", (function(t, i) {
        var n, s = e(this), o = "show" === t.mode, a = t.direction || "left", r = "up" === a || "down" === a ? "top" : "left", l = "up" === a || "left" === a ? "-=" : "+=", c = "+=" === l ? "-=" : "+=", u = {
            opacity: 0
        };
        e.effects.createPlaceholder(s),
        n = t.distance || s["top" === r ? "outerHeight" : "outerWidth"](!0) / 2,
        u[r] = l + n,
        o && (s.css(u),
        u[r] = c + n,
        u.opacity = 1),
        s.animate(u, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: i
        })
    }
    )),
    e.effects.define("explode", "hide", (function(t, i) {
        var n, s, o, a, r, l, c = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3, u = c, h = e(this), d = "show" === t.mode, p = h.show().css("visibility", "hidden").offset(), f = Math.ceil(h.outerWidth() / u), m = Math.ceil(h.outerHeight() / c), g = [];
        function v() {
            g.push(this),
            g.length === c * u && (h.css({
                visibility: "visible"
            }),
            e(g).remove(),
            i())
        }
        for (n = 0; n < c; n++)
            for (a = p.top + n * m,
            l = n - (c - 1) / 2,
            s = 0; s < u; s++)
                o = p.left + s * f,
                r = s - (u - 1) / 2,
                h.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -s * f,
                    top: -n * m
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: f,
                    height: m,
                    left: o + (d ? r * f : 0),
                    top: a + (d ? l * m : 0),
                    opacity: d ? 0 : 1
                }).animate({
                    left: o + (d ? 0 : r * f),
                    top: a + (d ? 0 : l * m),
                    opacity: d ? 1 : 0
                }, t.duration || 500, t.easing, v)
    }
    )),
    e.effects.define("fade", "toggle", (function(t, i) {
        var n = "show" === t.mode;
        e(this).css("opacity", n ? 0 : 1).animate({
            opacity: n ? 1 : 0
        }, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: i
        })
    }
    )),
    e.effects.define("fold", "hide", (function(t, i) {
        var n = e(this)
          , s = t.mode
          , o = "show" === s
          , a = "hide" === s
          , r = t.size || 15
          , l = /([0-9]+)%/.exec(r)
          , c = !!t.horizFirst ? ["right", "bottom"] : ["bottom", "right"]
          , u = t.duration / 2
          , h = e.effects.createPlaceholder(n)
          , d = n.cssClip()
          , p = {
            clip: e.extend({}, d)
        }
          , f = {
            clip: e.extend({}, d)
        }
          , m = [d[c[0]], d[c[1]]]
          , g = n.queue().length;
        l && (r = parseInt(l[1], 10) / 100 * m[a ? 0 : 1]),
        p.clip[c[0]] = r,
        f.clip[c[0]] = r,
        f.clip[c[1]] = 0,
        o && (n.cssClip(f.clip),
        h && h.css(e.effects.clipToBox(f)),
        f.clip = d),
        n.queue((function(i) {
            h && h.animate(e.effects.clipToBox(p), u, t.easing).animate(e.effects.clipToBox(f), u, t.easing),
            i()
        }
        )).animate(p, u, t.easing).animate(f, u, t.easing).queue(i),
        e.effects.unshift(n, g, 4)
    }
    )),
    e.effects.define("highlight", "show", (function(t, i) {
        var n = e(this)
          , s = {
            backgroundColor: n.css("backgroundColor")
        };
        "hide" === t.mode && (s.opacity = 0),
        e.effects.saveStyle(n),
        n.css({
            backgroundImage: "none",
            backgroundColor: t.color || "#ffff99"
        }).animate(s, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: i
        })
    }
    )),
    e.effects.define("size", (function(t, i) {
        var n, s, o, a = e(this), r = ["fontSize"], l = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], c = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], u = t.mode, h = "effect" !== u, d = t.scale || "both", p = t.origin || ["middle", "center"], f = a.css("position"), m = a.position(), g = e.effects.scaledDimensions(a), v = t.from || g, _ = t.to || e.effects.scaledDimensions(a, 0);
        e.effects.createPlaceholder(a),
        "show" === u && (o = v,
        v = _,
        _ = o),
        s = {
            from: {
                y: v.height / g.height,
                x: v.width / g.width
            },
            to: {
                y: _.height / g.height,
                x: _.width / g.width
            }
        },
        "box" !== d && "both" !== d || (s.from.y !== s.to.y && (v = e.effects.setTransition(a, l, s.from.y, v),
        _ = e.effects.setTransition(a, l, s.to.y, _)),
        s.from.x !== s.to.x && (v = e.effects.setTransition(a, c, s.from.x, v),
        _ = e.effects.setTransition(a, c, s.to.x, _))),
        "content" !== d && "both" !== d || s.from.y !== s.to.y && (v = e.effects.setTransition(a, r, s.from.y, v),
        _ = e.effects.setTransition(a, r, s.to.y, _)),
        p && (n = e.effects.getBaseline(p, g),
        v.top = (g.outerHeight - v.outerHeight) * n.y + m.top,
        v.left = (g.outerWidth - v.outerWidth) * n.x + m.left,
        _.top = (g.outerHeight - _.outerHeight) * n.y + m.top,
        _.left = (g.outerWidth - _.outerWidth) * n.x + m.left),
        a.css(v),
        "content" !== d && "both" !== d || (l = l.concat(["marginTop", "marginBottom"]).concat(r),
        c = c.concat(["marginLeft", "marginRight"]),
        a.find("*[width]").each((function() {
            var i = e(this)
              , n = e.effects.scaledDimensions(i)
              , o = {
                height: n.height * s.from.y,
                width: n.width * s.from.x,
                outerHeight: n.outerHeight * s.from.y,
                outerWidth: n.outerWidth * s.from.x
            }
              , a = {
                height: n.height * s.to.y,
                width: n.width * s.to.x,
                outerHeight: n.height * s.to.y,
                outerWidth: n.width * s.to.x
            };
            s.from.y !== s.to.y && (o = e.effects.setTransition(i, l, s.from.y, o),
            a = e.effects.setTransition(i, l, s.to.y, a)),
            s.from.x !== s.to.x && (o = e.effects.setTransition(i, c, s.from.x, o),
            a = e.effects.setTransition(i, c, s.to.x, a)),
            h && e.effects.saveStyle(i),
            i.css(o),
            i.animate(a, t.duration, t.easing, (function() {
                h && e.effects.restoreStyle(i)
            }
            ))
        }
        ))),
        a.animate(_, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                var t = a.offset();
                0 === _.opacity && a.css("opacity", v.opacity),
                h || (a.css("position", "static" === f ? "relative" : f).offset(t),
                e.effects.saveStyle(a)),
                i()
            }
        })
    }
    )),
    e.effects.define("scale", (function(t, i) {
        var n = e(this)
          , s = t.mode
          , o = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) || "effect" !== s ? 0 : 100)
          , a = e.extend(!0, {
            from: e.effects.scaledDimensions(n),
            to: e.effects.scaledDimensions(n, o, t.direction || "both"),
            origin: t.origin || ["middle", "center"]
        }, t);
        t.fade && (a.from.opacity = 1,
        a.to.opacity = 0),
        e.effects.effect.size.call(this, a, i)
    }
    )),
    e.effects.define("puff", "hide", (function(t, i) {
        var n = e.extend(!0, {}, t, {
            fade: !0,
            percent: parseInt(t.percent, 10) || 150
        });
        e.effects.effect.scale.call(this, n, i)
    }
    )),
    e.effects.define("pulsate", "show", (function(t, i) {
        var n = e(this)
          , s = t.mode
          , o = "show" === s
          , a = o || "hide" === s
          , r = 2 * (t.times || 5) + (a ? 1 : 0)
          , l = t.duration / r
          , c = 0
          , u = 1
          , h = n.queue().length;
        for (!o && n.is(":visible") || (n.css("opacity", 0).show(),
        c = 1); u < r; u++)
            n.animate({
                opacity: c
            }, l, t.easing),
            c = 1 - c;
        n.animate({
            opacity: c
        }, l, t.easing),
        n.queue(i),
        e.effects.unshift(n, h, r + 1)
    }
    )),
    e.effects.define("shake", (function(t, i) {
        var n = 1
          , s = e(this)
          , o = t.direction || "left"
          , a = t.distance || 20
          , r = t.times || 3
          , l = 2 * r + 1
          , c = Math.round(t.duration / l)
          , u = "up" === o || "down" === o ? "top" : "left"
          , h = "up" === o || "left" === o
          , d = {}
          , p = {}
          , f = {}
          , m = s.queue().length;
        for (e.effects.createPlaceholder(s),
        d[u] = (h ? "-=" : "+=") + a,
        p[u] = (h ? "+=" : "-=") + 2 * a,
        f[u] = (h ? "-=" : "+=") + 2 * a,
        s.animate(d, c, t.easing); n < r; n++)
            s.animate(p, c, t.easing).animate(f, c, t.easing);
        s.animate(p, c, t.easing).animate(d, c / 2, t.easing).queue(i),
        e.effects.unshift(s, m, l + 1)
    }
    )),
    e.effects.define("slide", "show", (function(t, i) {
        var n, s, o = e(this), a = {
            up: ["bottom", "top"],
            down: ["top", "bottom"],
            left: ["right", "left"],
            right: ["left", "right"]
        }, r = t.mode, l = t.direction || "left", c = "up" === l || "down" === l ? "top" : "left", u = "up" === l || "left" === l, h = t.distance || o["top" === c ? "outerHeight" : "outerWidth"](!0), d = {};
        e.effects.createPlaceholder(o),
        n = o.cssClip(),
        s = o.position()[c],
        d[c] = (u ? -1 : 1) * h + s,
        d.clip = o.cssClip(),
        d.clip[a[l][1]] = d.clip[a[l][0]],
        "show" === r && (o.cssClip(d.clip),
        o.css(c, d[c]),
        d.clip = n,
        d[c] = s),
        o.animate(d, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: i
        })
    }
    ));
    /*!
 * jQuery UI Effects Blind 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    !1 !== e.uiBackCompat && e.effects.define("transfer", (function(t, i) {
        e(this).transfer(t, i)
    }
    ));
    /*!
 * jQuery UI Focusable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    e.ui.focusable = function(t, i) {
        var n, s, o, a, r, l = t.nodeName.toLowerCase();
        return "area" === l ? (s = (n = t.parentNode).name,
        !(!t.href || !s || "map" !== n.nodeName.toLowerCase()) && ((o = e("img[usemap='#" + s + "']")).length > 0 && o.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(l) ? (a = !t.disabled) && (r = e(t).closest("fieldset")[0]) && (a = !r.disabled) : a = "a" === l && t.href || i,
        a && e(t).is(":visible") && function(e) {
            var t = e.css("visibility");
            for (; "inherit" === t; )
                t = (e = e.parent()).css("visibility");
            return "hidden" !== t
        }(e(t)))
    }
    ,
    e.extend(e.expr[":"], {
        focusable: function(t) {
            return e.ui.focusable(t, null != e.attr(t, "tabindex"))
        }
    });
    e.ui.focusable,
    e.fn.form = function() {
        return "string" == typeof this[0].form ? this.closest("form") : e(this[0].form)
    }
    ,
    e.ui.formResetMixin = {
        _formResetHandler: function() {
            var t = e(this);
            setTimeout((function() {
                var i = t.data("ui-form-reset-instances");
                e.each(i, (function() {
                    this.refresh()
                }
                ))
            }
            ))
        },
        _bindFormResetHandler: function() {
            if (this.form = this.element.form(),
            this.form.length) {
                var e = this.form.data("ui-form-reset-instances") || [];
                e.length || this.form.on("reset.ui-form-reset", this._formResetHandler),
                e.push(this),
                this.form.data("ui-form-reset-instances", e)
            }
        },
        _unbindFormResetHandler: function() {
            if (this.form.length) {
                var t = this.form.data("ui-form-reset-instances");
                t.splice(e.inArray(this, t), 1),
                t.length ? this.form.data("ui-form-reset-instances", t) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
            }
        }
    };
    /*!
 * jQuery UI Support for jQuery core 1.7.x 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */
    "1.7" === e.fn.jquery.substring(0, 3) && (e.each(["Width", "Height"], (function(t, i) {
        var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"]
          , s = i.toLowerCase()
          , o = {
            innerWidth: e.fn.innerWidth,
            innerHeight: e.fn.innerHeight,
            outerWidth: e.fn.outerWidth,
            outerHeight: e.fn.outerHeight
        };
        function a(t, i, s, o) {
            return e.each(n, (function() {
                i -= parseFloat(e.css(t, "padding" + this)) || 0,
                s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0),
                o && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
            }
            )),
            i
        }
        e.fn["inner" + i] = function(t) {
            return void 0 === t ? o["inner" + i].call(this) : this.each((function() {
                e(this).css(s, a(this, t) + "px")
            }
            ))
        }
        ,
        e.fn["outer" + i] = function(t, n) {
            return "number" != typeof t ? o["outer" + i].call(this, t) : this.each((function() {
                e(this).css(s, a(this, t, !0, n) + "px")
            }
            ))
        }
    }
    )),
    e.fn.addBack = function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
    );
    /*!
 * jQuery UI Keycode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    var u, h;
    e.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    },
    e.ui.escapeSelector = (u = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g,
    function(e) {
        return e.replace(u, "\\$1")
    }
    ),
    e.fn.labels = function() {
        var t, i, n, s, o;
        return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (s = this.eq(0).parents("label"),
        (n = this.attr("id")) && (o = (t = this.eq(0).parents().last()).add(t.length ? t.siblings() : this.siblings()),
        i = "label[for='" + e.ui.escapeSelector(n) + "']",
        s = s.add(o.find(i).addBack(i))),
        this.pushStack(s))
    }
    ,
    e.fn.scrollParent = function(t) {
        var i = this.css("position")
          , n = "absolute" === i
          , s = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/
          , o = this.parents().filter((function() {
            var t = e(this);
            return (!n || "static" !== t.css("position")) && s.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
        }
        )).eq(0);
        return "fixed" !== i && o.length ? o : e(this[0].ownerDocument || document)
    }
    ,
    e.extend(e.expr[":"], {
        tabbable: function(t) {
            var i = e.attr(t, "tabindex")
              , n = null != i;
            return (!n || i >= 0) && e.ui.focusable(t, n)
        }
    }),
    e.fn.extend({
        uniqueId: (h = 0,
        function() {
            return this.each((function() {
                this.id || (this.id = "ui-id-" + ++h)
            }
            ))
        }
        ),
        removeUniqueId: function() {
            return this.each((function() {
                /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
            }
            ))
        }
    }),
    e.widget("ui.accordion", {
        version: "1.12.1",
        options: {
            active: 0,
            animate: {},
            classes: {
                "ui-accordion-header": "ui-corner-top",
                "ui-accordion-header-collapsed": "ui-corner-all",
                "ui-accordion-content": "ui-corner-bottom"
            },
            collapsible: !1,
            event: "click",
            header: "> li > :first-child, > :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        hideProps: {
            borderTopWidth: "hide",
            borderBottomWidth: "hide",
            paddingTop: "hide",
            paddingBottom: "hide",
            height: "hide"
        },
        showProps: {
            borderTopWidth: "show",
            borderBottomWidth: "show",
            paddingTop: "show",
            paddingBottom: "show",
            height: "show"
        },
        _create: function() {
            var t = this.options;
            this.prevShow = this.prevHide = e(),
            this._addClass("ui-accordion", "ui-widget ui-helper-reset"),
            this.element.attr("role", "tablist"),
            t.collapsible || !1 !== t.active && null != t.active || (t.active = 0),
            this._processPanels(),
            t.active < 0 && (t.active += this.headers.length),
            this._refresh()
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : e()
            }
        },
        _createIcons: function() {
            var t, i, n = this.options.icons;
            n && (t = e("<span>"),
            this._addClass(t, "ui-accordion-header-icon", "ui-icon " + n.header),
            t.prependTo(this.headers),
            i = this.active.children(".ui-accordion-header-icon"),
            this._removeClass(i, n.header)._addClass(i, null, n.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
        },
        _destroyIcons: function() {
            this._removeClass(this.headers, "ui-accordion-icons"),
            this.headers.children(".ui-accordion-header-icon").remove()
        },
        _destroy: function() {
            var e;
            this.element.removeAttr("role"),
            this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(),
            this._destroyIcons(),
            e = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(),
            "content" !== this.options.heightStyle && e.css("height", "")
        },
        _setOption: function(e, t) {
            "active" !== e ? ("event" === e && (this.options.event && this._off(this.headers, this.options.event),
            this._setupEvents(t)),
            this._super(e, t),
            "collapsible" !== e || t || !1 !== this.options.active || this._activate(0),
            "icons" === e && (this._destroyIcons(),
            t && this._createIcons())) : this._activate(t)
        },
        _setOptionDisabled: function(e) {
            this._super(e),
            this.element.attr("aria-disabled", e),
            this._toggleClass(null, "ui-state-disabled", !!e),
            this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!e)
        },
        _keydown: function(t) {
            if (!t.altKey && !t.ctrlKey) {
                var i = e.ui.keyCode
                  , n = this.headers.length
                  , s = this.headers.index(t.target)
                  , o = !1;
                switch (t.keyCode) {
                case i.RIGHT:
                case i.DOWN:
                    o = this.headers[(s + 1) % n];
                    break;
                case i.LEFT:
                case i.UP:
                    o = this.headers[(s - 1 + n) % n];
                    break;
                case i.SPACE:
                case i.ENTER:
                    this._eventHandler(t);
                    break;
                case i.HOME:
                    o = this.headers[0];
                    break;
                case i.END:
                    o = this.headers[n - 1]
                }
                o && (e(t.target).attr("tabIndex", -1),
                e(o).attr("tabIndex", 0),
                e(o).trigger("focus"),
                t.preventDefault())
            }
        },
        _panelKeyDown: function(t) {
            t.keyCode === e.ui.keyCode.UP && t.ctrlKey && e(t.currentTarget).prev().trigger("focus")
        },
        refresh: function() {
            var t = this.options;
            this._processPanels(),
            !1 === t.active && !0 === t.collapsible || !this.headers.length ? (t.active = !1,
            this.active = e()) : !1 === t.active ? this._activate(0) : this.active.length && !e.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1,
            this.active = e()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active),
            this._destroyIcons(),
            this._refresh()
        },
        _processPanels: function() {
            var e = this.headers
              , t = this.panels;
            this.headers = this.element.find(this.options.header),
            this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"),
            this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(),
            this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"),
            t && (this._off(e.not(this.headers)),
            this._off(t.not(this.panels)))
        },
        _refresh: function() {
            var t, i = this.options, n = i.heightStyle, s = this.element.parent();
            this.active = this._findActive(i.active),
            this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"),
            this._addClass(this.active.next(), "ui-accordion-content-active"),
            this.active.next().show(),
            this.headers.attr("role", "tab").each((function() {
                var t = e(this)
                  , i = t.uniqueId().attr("id")
                  , n = t.next()
                  , s = n.uniqueId().attr("id");
                t.attr("aria-controls", s),
                n.attr("aria-labelledby", i)
            }
            )).next().attr("role", "tabpanel"),
            this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({
                "aria-hidden": "true"
            }).hide(),
            this.active.length ? this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }).next().attr({
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0),
            this._createIcons(),
            this._setupEvents(i.event),
            "fill" === n ? (t = s.height(),
            this.element.siblings(":visible").each((function() {
                var i = e(this)
                  , n = i.css("position");
                "absolute" !== n && "fixed" !== n && (t -= i.outerHeight(!0))
            }
            )),
            this.headers.each((function() {
                t -= e(this).outerHeight(!0)
            }
            )),
            this.headers.next().each((function() {
                e(this).height(Math.max(0, t - e(this).innerHeight() + e(this).height()))
            }
            )).css("overflow", "auto")) : "auto" === n && (t = 0,
            this.headers.next().each((function() {
                var i = e(this).is(":visible");
                i || e(this).show(),
                t = Math.max(t, e(this).css("height", "").height()),
                i || e(this).hide()
            }
            )).height(t))
        },
        _activate: function(t) {
            var i = this._findActive(t)[0];
            i !== this.active[0] && (i = i || this.active[0],
            this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: e.noop
            }))
        },
        _findActive: function(t) {
            return "number" == typeof t ? this.headers.eq(t) : e()
        },
        _setupEvents: function(t) {
            var i = {
                keydown: "_keydown"
            };
            t && e.each(t.split(" "), (function(e, t) {
                i[t] = "_eventHandler"
            }
            )),
            this._off(this.headers.add(this.headers.next())),
            this._on(this.headers, i),
            this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            }),
            this._hoverable(this.headers),
            this._focusable(this.headers)
        },
        _eventHandler: function(t) {
            var i, n, s = this.options, o = this.active, a = e(t.currentTarget), r = a[0] === o[0], l = r && s.collapsible, c = l ? e() : a.next(), u = o.next(), h = {
                oldHeader: o,
                oldPanel: u,
                newHeader: l ? e() : a,
                newPanel: c
            };
            t.preventDefault(),
            r && !s.collapsible || !1 === this._trigger("beforeActivate", t, h) || (s.active = !l && this.headers.index(a),
            this.active = r ? e() : a,
            this._toggle(h),
            this._removeClass(o, "ui-accordion-header-active", "ui-state-active"),
            s.icons && (i = o.children(".ui-accordion-header-icon"),
            this._removeClass(i, null, s.icons.activeHeader)._addClass(i, null, s.icons.header)),
            r || (this._removeClass(a, "ui-accordion-header-collapsed")._addClass(a, "ui-accordion-header-active", "ui-state-active"),
            s.icons && (n = a.children(".ui-accordion-header-icon"),
            this._removeClass(n, null, s.icons.header)._addClass(n, null, s.icons.activeHeader)),
            this._addClass(a.next(), "ui-accordion-content-active")))
        },
        _toggle: function(t) {
            var i = t.newPanel
              , n = this.prevShow.length ? this.prevShow : t.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0),
            this.prevShow = i,
            this.prevHide = n,
            this.options.animate ? this._animate(i, n, t) : (n.hide(),
            i.show(),
            this._toggleComplete(t)),
            n.attr({
                "aria-hidden": "true"
            }),
            n.prev().attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }),
            i.length && n.length ? n.prev().attr({
                tabIndex: -1,
                "aria-expanded": "false"
            }) : i.length && this.headers.filter((function() {
                return 0 === parseInt(e(this).attr("tabIndex"), 10)
            }
            )).attr("tabIndex", -1),
            i.attr("aria-hidden", "false").prev().attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _animate: function(e, t, i) {
            var n, s, o, a = this, r = 0, l = e.css("box-sizing"), c = e.length && (!t.length || e.index() < t.index()), u = this.options.animate || {}, h = c && u.down || u, d = function() {
                a._toggleComplete(i)
            };
            return "number" == typeof h && (o = h),
            "string" == typeof h && (s = h),
            s = s || h.easing || u.easing,
            o = o || h.duration || u.duration,
            t.length ? e.length ? (n = e.show().outerHeight(),
            t.animate(this.hideProps, {
                duration: o,
                easing: s,
                step: function(e, t) {
                    t.now = Math.round(e)
                }
            }),
            void e.hide().animate(this.showProps, {
                duration: o,
                easing: s,
                complete: d,
                step: function(e, i) {
                    i.now = Math.round(e),
                    "height" !== i.prop ? "content-box" === l && (r += i.now) : "content" !== a.options.heightStyle && (i.now = Math.round(n - t.outerHeight() - r),
                    r = 0)
                }
            })) : t.animate(this.hideProps, o, s, d) : e.animate(this.showProps, o, s, d)
        },
        _toggleComplete: function(e) {
            var t = e.oldPanel
              , i = t.prev();
            this._removeClass(t, "ui-accordion-content-active"),
            this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"),
            t.length && (t.parent()[0].className = t.parent()[0].className),
            this._trigger("activate", null, e)
        }
    }),
    e.ui.safeActiveElement = function(e) {
        var t;
        try {
            t = e.activeElement
        } catch (i) {
            t = e.body
        }
        return t || (t = e.body),
        t.nodeName || (t = e.body),
        t
    }
    ,
    e.widget("ui.menu", {
        version: "1.12.1",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-caret-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element,
            this.mouseHandled = !1,
            this.element.uniqueId().attr({
                role: this.options.role,
                tabIndex: 0
            }),
            this._addClass("ui-menu", "ui-widget ui-widget-content"),
            this._on({
                "mousedown .ui-menu-item": function(e) {
                    e.preventDefault()
                },
                "click .ui-menu-item": function(t) {
                    var i = e(t.target)
                      , n = e(e.ui.safeActiveElement(this.document[0]));
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(t),
                    t.isPropagationStopped() || (this.mouseHandled = !0),
                    i.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && n.closest(".ui-menu").length && (this.element.trigger("focus", [!0]),
                    this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(t) {
                    if (!this.previousFilter) {
                        var i = e(t.target).closest(".ui-menu-item")
                          , n = e(t.currentTarget);
                        i[0] === n[0] && (this._removeClass(n.siblings().children(".ui-state-active"), null, "ui-state-active"),
                        this.focus(t, n))
                    }
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(e, t) {
                    var i = this.active || this.element.find(this.options.items).eq(0);
                    t || this.focus(e, i)
                },
                blur: function(t) {
                    this._delay((function() {
                        !e.contains(this.element[0], e.ui.safeActiveElement(this.document[0])) && this.collapseAll(t)
                    }
                    ))
                },
                keydown: "_keydown"
            }),
            this.refresh(),
            this._on(this.document, {
                click: function(e) {
                    this._closeOnDocumentClick(e) && this.collapseAll(e),
                    this.mouseHandled = !1
                }
            })
        },
        _destroy: function() {
            var t = this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),
            t.children().each((function() {
                var t = e(this);
                t.data("ui-menu-submenu-caret") && t.remove()
            }
            ))
        },
        _keydown: function(t) {
            var i, n, s, o, a = !0;
            switch (t.keyCode) {
            case e.ui.keyCode.PAGE_UP:
                this.previousPage(t);
                break;
            case e.ui.keyCode.PAGE_DOWN:
                this.nextPage(t);
                break;
            case e.ui.keyCode.HOME:
                this._move("first", "first", t);
                break;
            case e.ui.keyCode.END:
                this._move("last", "last", t);
                break;
            case e.ui.keyCode.UP:
                this.previous(t);
                break;
            case e.ui.keyCode.DOWN:
                this.next(t);
                break;
            case e.ui.keyCode.LEFT:
                this.collapse(t);
                break;
            case e.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                break;
            case e.ui.keyCode.ENTER:
            case e.ui.keyCode.SPACE:
                this._activate(t);
                break;
            case e.ui.keyCode.ESCAPE:
                this.collapse(t);
                break;
            default:
                a = !1,
                n = this.previousFilter || "",
                o = !1,
                s = t.keyCode >= 96 && t.keyCode <= 105 ? (t.keyCode - 96).toString() : String.fromCharCode(t.keyCode),
                clearTimeout(this.filterTimer),
                s === n ? o = !0 : s = n + s,
                i = this._filterMenuItems(s),
                (i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i).length || (s = String.fromCharCode(t.keyCode),
                i = this._filterMenuItems(s)),
                i.length ? (this.focus(t, i),
                this.previousFilter = s,
                this.filterTimer = this._delay((function() {
                    delete this.previousFilter
                }
                ), 1e3)) : delete this.previousFilter
            }
            a && t.preventDefault()
        },
        _activate: function(e) {
            this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(e) : this.select(e))
        },
        refresh: function() {
            var t, i, n, s, o = this, a = this.options.icons.submenu, r = this.element.find(this.options.menus);
            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length),
            i = r.filter(":not(.ui-menu)").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each((function() {
                var t = e(this)
                  , i = t.prev()
                  , n = e("<span>").data("ui-menu-submenu-caret", !0);
                o._addClass(n, "ui-menu-icon", "ui-icon " + a),
                i.attr("aria-haspopup", "true").prepend(n),
                t.attr("aria-labelledby", i.attr("id"))
            }
            )),
            this._addClass(i, "ui-menu", "ui-widget ui-widget-content ui-front"),
            (t = r.add(this.element).find(this.options.items)).not(".ui-menu-item").each((function() {
                var t = e(this);
                o._isDivider(t) && o._addClass(t, "ui-menu-divider", "ui-widget-content")
            }
            )),
            s = (n = t.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            }),
            this._addClass(n, "ui-menu-item")._addClass(s, "ui-menu-item-wrapper"),
            t.filter(".ui-state-disabled").attr("aria-disabled", "true"),
            this.active && !e.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function(e, t) {
            if ("icons" === e) {
                var i = this.element.find(".ui-menu-icon");
                this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, t.submenu)
            }
            this._super(e, t)
        },
        _setOptionDisabled: function(e) {
            this._super(e),
            this.element.attr("aria-disabled", String(e)),
            this._toggleClass(null, "ui-state-disabled", !!e)
        },
        focus: function(e, t) {
            var i, n, s;
            this.blur(e, e && "focus" === e.type),
            this._scrollIntoView(t),
            this.active = t.first(),
            n = this.active.children(".ui-menu-item-wrapper"),
            this._addClass(n, null, "ui-state-active"),
            this.options.role && this.element.attr("aria-activedescendant", n.attr("id")),
            s = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),
            this._addClass(s, null, "ui-state-active"),
            e && "keydown" === e.type ? this._close() : this.timer = this._delay((function() {
                this._close()
            }
            ), this.delay),
            (i = t.children(".ui-menu")).length && e && /^mouse/.test(e.type) && this._startOpening(i),
            this.activeMenu = t.parent(),
            this._trigger("focus", e, {
                item: t
            })
        },
        _scrollIntoView: function(t) {
            var i, n, s, o, a, r;
            this._hasScroll() && (i = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0,
            n = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0,
            s = t.offset().top - this.activeMenu.offset().top - i - n,
            o = this.activeMenu.scrollTop(),
            a = this.activeMenu.height(),
            r = t.outerHeight(),
            s < 0 ? this.activeMenu.scrollTop(o + s) : s + r > a && this.activeMenu.scrollTop(o + s - a + r))
        },
        blur: function(e, t) {
            t || clearTimeout(this.timer),
            this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"),
            this._trigger("blur", e, {
                item: this.active
            }),
            this.active = null)
        },
        _startOpening: function(e) {
            clearTimeout(this.timer),
            "true" === e.attr("aria-hidden") && (this.timer = this._delay((function() {
                this._close(),
                this._open(e)
            }
            ), this.delay))
        },
        _open: function(t) {
            var i = e.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer),
            this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"),
            t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function(t, i) {
            clearTimeout(this.timer),
            this.timer = this._delay((function() {
                var n = i ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
                n.length || (n = this.element),
                this._close(n),
                this.blur(t),
                this._removeClass(n.find(".ui-state-active"), null, "ui-state-active"),
                this.activeMenu = n
            }
            ), this.delay)
        },
        _close: function(e) {
            e || (e = this.active ? this.active.parent() : this.element),
            e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
        },
        _closeOnDocumentClick: function(t) {
            return !e(t.target).closest(".ui-menu").length
        },
        _isDivider: function(e) {
            return !/[^\-\u2014\u2013\s]/.test(e.text())
        },
        collapse: function(e) {
            var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            t && t.length && (this._close(),
            this.focus(e, t))
        },
        expand: function(e) {
            var t = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            t && t.length && (this._open(t.parent()),
            this._delay((function() {
                this.focus(e, t)
            }
            )))
        },
        next: function(e) {
            this._move("next", "first", e)
        },
        previous: function(e) {
            this._move("prev", "last", e)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(e, t, i) {
            var n;
            this.active && (n = "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[e + "All"](".ui-menu-item").eq(0)),
            n && n.length && this.active || (n = this.activeMenu.find(this.options.items)[t]()),
            this.focus(i, n)
        },
        nextPage: function(t) {
            var i, n, s;
            this.active ? this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top,
            s = this.element.height(),
            this.active.nextAll(".ui-menu-item").each((function() {
                return (i = e(this)).offset().top - n - s < 0
            }
            )),
            this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())) : this.next(t)
        },
        previousPage: function(t) {
            var i, n, s;
            this.active ? this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top,
            s = this.element.height(),
            this.active.prevAll(".ui-menu-item").each((function() {
                return (i = e(this)).offset().top - n + s > 0
            }
            )),
            this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items).first())) : this.next(t)
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(t) {
            this.active = this.active || e(t.target).closest(".ui-menu-item");
            var i = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(t, !0),
            this._trigger("select", t, i)
        },
        _filterMenuItems: function(t) {
            var i = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
              , n = new RegExp("^" + i,"i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter((function() {
                return n.test(e.trim(e(this).children(".ui-menu-item-wrapper").text()))
            }
            ))
        }
    });
    /*!
 * jQuery UI Autocomplete 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    e.widget("ui.autocomplete", {
        version: "1.12.1",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var t, i, n, s = this.element[0].nodeName.toLowerCase(), o = "textarea" === s, a = "input" === s;
            this.isMultiLine = o || !a && this._isContentEditable(this.element),
            this.valueMethod = this.element[o || a ? "val" : "text"],
            this.isNewMenu = !0,
            this._addClass("ui-autocomplete-input"),
            this.element.attr("autocomplete", "off"),
            this._on(this.element, {
                keydown: function(s) {
                    if (this.element.prop("readOnly"))
                        return t = !0,
                        n = !0,
                        void (i = !0);
                    t = !1,
                    n = !1,
                    i = !1;
                    var o = e.ui.keyCode;
                    switch (s.keyCode) {
                    case o.PAGE_UP:
                        t = !0,
                        this._move("previousPage", s);
                        break;
                    case o.PAGE_DOWN:
                        t = !0,
                        this._move("nextPage", s);
                        break;
                    case o.UP:
                        t = !0,
                        this._keyEvent("previous", s);
                        break;
                    case o.DOWN:
                        t = !0,
                        this._keyEvent("next", s);
                        break;
                    case o.ENTER:
                        this.menu.active && (t = !0,
                        s.preventDefault(),
                        this.menu.select(s));
                        break;
                    case o.TAB:
                        this.menu.active && this.menu.select(s);
                        break;
                    case o.ESCAPE:
                        this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term),
                        this.close(s),
                        s.preventDefault());
                        break;
                    default:
                        i = !0,
                        this._searchTimeout(s)
                    }
                },
                keypress: function(n) {
                    if (t)
                        return t = !1,
                        void (this.isMultiLine && !this.menu.element.is(":visible") || n.preventDefault());
                    if (!i) {
                        var s = e.ui.keyCode;
                        switch (n.keyCode) {
                        case s.PAGE_UP:
                            this._move("previousPage", n);
                            break;
                        case s.PAGE_DOWN:
                            this._move("nextPage", n);
                            break;
                        case s.UP:
                            this._keyEvent("previous", n);
                            break;
                        case s.DOWN:
                            this._keyEvent("next", n)
                        }
                    }
                },
                input: function(e) {
                    if (n)
                        return n = !1,
                        void e.preventDefault();
                    this._searchTimeout(e)
                },
                focus: function() {
                    this.selectedItem = null,
                    this.previous = this._value()
                },
                blur: function(e) {
                    this.cancelBlur ? delete this.cancelBlur : (clearTimeout(this.searching),
                    this.close(e),
                    this._change(e))
                }
            }),
            this._initSource(),
            this.menu = e("<ul>").appendTo(this._appendTo()).menu({
                role: null
            }).hide().menu("instance"),
            this._addClass(this.menu.element, "ui-autocomplete", "ui-front"),
            this._on(this.menu.element, {
                mousedown: function(t) {
                    t.preventDefault(),
                    this.cancelBlur = !0,
                    this._delay((function() {
                        delete this.cancelBlur,
                        this.element[0] !== e.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
                    }
                    ))
                },
                menufocus: function(t, i) {
                    var n, s;
                    if (this.isNewMenu && (this.isNewMenu = !1,
                    t.originalEvent && /^mouse/.test(t.originalEvent.type)))
                        return this.menu.blur(),
                        void this.document.one("mousemove", (function() {
                            e(t.target).trigger(t.originalEvent)
                        }
                        ));
                    s = i.item.data("ui-autocomplete-item"),
                    !1 !== this._trigger("focus", t, {
                        item: s
                    }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(s.value),
                    (n = i.item.attr("aria-label") || s.value) && e.trim(n).length && (this.liveRegion.children().hide(),
                    e("<div>").text(n).appendTo(this.liveRegion))
                },
                menuselect: function(t, i) {
                    var n = i.item.data("ui-autocomplete-item")
                      , s = this.previous;
                    this.element[0] !== e.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"),
                    this.previous = s,
                    this._delay((function() {
                        this.previous = s,
                        this.selectedItem = n
                    }
                    ))),
                    !1 !== this._trigger("select", t, {
                        item: n
                    }) && this._value(n.value),
                    this.term = this._value(),
                    this.close(t),
                    this.selectedItem = n
                }
            }),
            this.liveRegion = e("<div>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body),
            this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"),
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching),
            this.element.removeAttr("autocomplete"),
            this.menu.element.remove(),
            this.liveRegion.remove()
        },
        _setOption: function(e, t) {
            this._super(e, t),
            "source" === e && this._initSource(),
            "appendTo" === e && this.menu.element.appendTo(this._appendTo()),
            "disabled" === e && t && this.xhr && this.xhr.abort()
        },
        _isEventTargetInWidget: function(t) {
            var i = this.menu.element[0];
            return t.target === this.element[0] || t.target === i || e.contains(i, t.target)
        },
        _closeOnClickOutside: function(e) {
            this._isEventTargetInWidget(e) || this.close()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)),
            t && t[0] || (t = this.element.closest(".ui-front, dialog")),
            t.length || (t = this.document[0].body),
            t
        },
        _initSource: function() {
            var t, i, n = this;
            e.isArray(this.options.source) ? (t = this.options.source,
            this.source = function(i, n) {
                n(e.ui.autocomplete.filter(t, i.term))
            }
            ) : "string" == typeof this.options.source ? (i = this.options.source,
            this.source = function(t, s) {
                n.xhr && n.xhr.abort(),
                n.xhr = e.ajax({
                    url: i,
                    data: t,
                    dataType: "json",
                    success: function(e) {
                        s(e)
                    },
                    error: function() {
                        s([])
                    }
                })
            }
            ) : this.source = this.options.source
        },
        _searchTimeout: function(e) {
            clearTimeout(this.searching),
            this.searching = this._delay((function() {
                var t = this.term === this._value()
                  , i = this.menu.element.is(":visible")
                  , n = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
                t && (!t || i || n) || (this.selectedItem = null,
                this.search(null, e))
            }
            ), this.options.delay)
        },
        search: function(e, t) {
            return e = null != e ? e : this._value(),
            this.term = this._value(),
            e.length < this.options.minLength ? this.close(t) : !1 !== this._trigger("search", t) ? this._search(e) : void 0
        },
        _search: function(e) {
            this.pending++,
            this._addClass("ui-autocomplete-loading"),
            this.cancelSearch = !1,
            this.source({
                term: e
            }, this._response())
        },
        _response: function() {
            var t = ++this.requestIndex;
            return e.proxy((function(e) {
                t === this.requestIndex && this.__response(e),
                this.pending--,
                this.pending || this._removeClass("ui-autocomplete-loading")
            }
            ), this)
        },
        __response: function(e) {
            e && (e = this._normalize(e)),
            this._trigger("response", null, {
                content: e
            }),
            !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e),
            this._trigger("open")) : this._close()
        },
        close: function(e) {
            this.cancelSearch = !0,
            this._close(e)
        },
        _close: function(e) {
            this._off(this.document, "mousedown"),
            this.menu.element.is(":visible") && (this.menu.element.hide(),
            this.menu.blur(),
            this.isNewMenu = !0,
            this._trigger("close", e))
        },
        _change: function(e) {
            this.previous !== this._value() && this._trigger("change", e, {
                item: this.selectedItem
            })
        },
        _normalize: function(t) {
            return t.length && t[0].label && t[0].value ? t : e.map(t, (function(t) {
                return "string" == typeof t ? {
                    label: t,
                    value: t
                } : e.extend({}, t, {
                    label: t.label || t.value,
                    value: t.value || t.label
                })
            }
            ))
        },
        _suggest: function(t) {
            var i = this.menu.element.empty();
            this._renderMenu(i, t),
            this.isNewMenu = !0,
            this.menu.refresh(),
            i.show(),
            this._resizeMenu(),
            i.position(e.extend({
                of: this.element
            }, this.options.position)),
            this.options.autoFocus && this.menu.next(),
            this._on(this.document, {
                mousedown: "_closeOnClickOutside"
            })
        },
        _resizeMenu: function() {
            var e = this.menu.element;
            e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(t, i) {
            var n = this;
            e.each(i, (function(e, i) {
                n._renderItemData(t, i)
            }
            ))
        },
        _renderItemData: function(e, t) {
            return this._renderItem(e, t).data("ui-autocomplete-item", t)
        },
        _renderItem: function(t, i) {
            return e("<li>").append(e("<div>").text(i.label)).appendTo(t)
        },
        _move: function(e, t) {
            if (this.menu.element.is(":visible"))
                return this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this.isMultiLine || this._value(this.term),
                void this.menu.blur()) : void this.menu[e](t);
            this.search(null, t)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(e, t) {
            this.isMultiLine && !this.menu.element.is(":visible") || (this._move(e, t),
            t.preventDefault())
        },
        _isContentEditable: function(e) {
            if (!e.length)
                return !1;
            var t = e.prop("contentEditable");
            return "inherit" === t ? this._isContentEditable(e.parent()) : "true" === t
        }
    }),
    e.extend(e.ui.autocomplete, {
        escapeRegex: function(e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(t, i) {
            var n = new RegExp(e.ui.autocomplete.escapeRegex(i),"i");
            return e.grep(t, (function(e) {
                return n.test(e.label || e.value || e)
            }
            ))
        }
    }),
    e.widget("ui.autocomplete", e.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(e) {
                    return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(t) {
            var i;
            this._superApply(arguments),
            this.options.disabled || this.cancelSearch || (i = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults,
            this.liveRegion.children().hide(),
            e("<div>").text(i).appendTo(this.liveRegion))
        }
    });
    e.ui.autocomplete;
    /*!
 * jQuery UI Controlgroup 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    var d = /ui-corner-([a-z]){2,6}/g;
    e.widget("ui.controlgroup", {
        version: "1.12.1",
        defaultElement: "<div>",
        options: {
            direction: "horizontal",
            disabled: null,
            onlyVisible: !0,
            items: {
                button: "input[type=button], input[type=submit], input[type=reset], button, a",
                controlgroupLabel: ".ui-controlgroup-label",
                checkboxradio: "input[type='checkbox'], input[type='radio']",
                selectmenu: "select",
                spinner: ".ui-spinner-input"
            }
        },
        _create: function() {
            this._enhance()
        },
        _enhance: function() {
            this.element.attr("role", "toolbar"),
            this.refresh()
        },
        _destroy: function() {
            this._callChildMethod("destroy"),
            this.childWidgets.removeData("ui-controlgroup-data"),
            this.element.removeAttr("role"),
            this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
        },
        _initWidgets: function() {
            var t = this
              , i = [];
            e.each(this.options.items, (function(n, s) {
                var o, a = {};
                if (s)
                    return "controlgroupLabel" === n ? ((o = t.element.find(s)).each((function() {
                        var t = e(this);
                        t.children(".ui-controlgroup-label-contents").length || t.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
                    }
                    )),
                    t._addClass(o, null, "ui-widget ui-widget-content ui-state-default"),
                    void (i = i.concat(o.get()))) : void (e.fn[n] && (a = t["_" + n + "Options"] ? t["_" + n + "Options"]("middle") : {
                        classes: {}
                    },
                    t.element.find(s).each((function() {
                        var s = e(this)
                          , o = s[n]("instance")
                          , r = e.widget.extend({}, a);
                        if ("button" !== n || !s.parent(".ui-spinner").length) {
                            o || (o = s[n]()[n]("instance")),
                            o && (r.classes = t._resolveClassesValues(r.classes, o)),
                            s[n](r);
                            var l = s[n]("widget");
                            e.data(l[0], "ui-controlgroup-data", o || s[n]("instance")),
                            i.push(l[0])
                        }
                    }
                    ))))
            }
            )),
            this.childWidgets = e(e.unique(i)),
            this._addClass(this.childWidgets, "ui-controlgroup-item")
        },
        _callChildMethod: function(t) {
            this.childWidgets.each((function() {
                var i = e(this).data("ui-controlgroup-data");
                i && i[t] && i[t]()
            }
            ))
        },
        _updateCornerClass: function(e, t) {
            var i = this._buildSimpleOptions(t, "label").classes.label;
            this._removeClass(e, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"),
            this._addClass(e, null, i)
        },
        _buildSimpleOptions: function(e, t) {
            var i = "vertical" === this.options.direction
              , n = {
                classes: {}
            };
            return n.classes[t] = {
                middle: "",
                first: "ui-corner-" + (i ? "top" : "left"),
                last: "ui-corner-" + (i ? "bottom" : "right"),
                only: "ui-corner-all"
            }[e],
            n
        },
        _spinnerOptions: function(e) {
            var t = this._buildSimpleOptions(e, "ui-spinner");
            return t.classes["ui-spinner-up"] = "",
            t.classes["ui-spinner-down"] = "",
            t
        },
        _buttonOptions: function(e) {
            return this._buildSimpleOptions(e, "ui-button")
        },
        _checkboxradioOptions: function(e) {
            return this._buildSimpleOptions(e, "ui-checkboxradio-label")
        },
        _selectmenuOptions: function(e) {
            var t = "vertical" === this.options.direction;
            return {
                width: !!t && "auto",
                classes: {
                    middle: {
                        "ui-selectmenu-button-open": "",
                        "ui-selectmenu-button-closed": ""
                    },
                    first: {
                        "ui-selectmenu-button-open": "ui-corner-" + (t ? "top" : "tl"),
                        "ui-selectmenu-button-closed": "ui-corner-" + (t ? "top" : "left")
                    },
                    last: {
                        "ui-selectmenu-button-open": t ? "" : "ui-corner-tr",
                        "ui-selectmenu-button-closed": "ui-corner-" + (t ? "bottom" : "right")
                    },
                    only: {
                        "ui-selectmenu-button-open": "ui-corner-top",
                        "ui-selectmenu-button-closed": "ui-corner-all"
                    }
                }[e]
            }
        },
        _resolveClassesValues: function(t, i) {
            var n = {};
            return e.each(t, (function(s) {
                var o = i.options.classes[s] || "";
                o = e.trim(o.replace(d, "")),
                n[s] = (o + " " + t[s]).replace(/\s+/g, " ")
            }
            )),
            n
        },
        _setOption: function(e, t) {
            "direction" === e && this._removeClass("ui-controlgroup-" + this.options.direction),
            this._super(e, t),
            "disabled" !== e ? this.refresh() : this._callChildMethod(t ? "disable" : "enable")
        },
        refresh: function() {
            var t, i = this;
            this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction),
            "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"),
            this._initWidgets(),
            t = this.childWidgets,
            this.options.onlyVisible && (t = t.filter(":visible")),
            t.length && (e.each(["first", "last"], (function(e, n) {
                var s = t[n]().data("ui-controlgroup-data");
                if (s && i["_" + s.widgetName + "Options"]) {
                    var o = i["_" + s.widgetName + "Options"](1 === t.length ? "only" : n);
                    o.classes = i._resolveClassesValues(o.classes, s),
                    s.element[s.widgetName](o)
                } else
                    i._updateCornerClass(t[n](), n)
            }
            )),
            this._callChildMethod("refresh"))
        }
    });
    /*!
 * jQuery UI Checkboxradio 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    e.widget("ui.checkboxradio", [e.ui.formResetMixin, {
        version: "1.12.1",
        options: {
            disabled: null,
            label: null,
            icon: !0,
            classes: {
                "ui-checkboxradio-label": "ui-corner-all",
                "ui-checkboxradio-icon": "ui-corner-all"
            }
        },
        _getCreateOptions: function() {
            var t, i, n = this, s = this._super() || {};
            return this._readType(),
            i = this.element.labels(),
            this.label = e(i[i.length - 1]),
            this.label.length || e.error("No label found for checkboxradio widget"),
            this.originalLabel = "",
            this.label.contents().not(this.element[0]).each((function() {
                n.originalLabel += 3 === this.nodeType ? e(this).text() : this.outerHTML
            }
            )),
            this.originalLabel && (s.label = this.originalLabel),
            null != (t = this.element[0].disabled) && (s.disabled = t),
            s
        },
        _create: function() {
            var e = this.element[0].checked;
            this._bindFormResetHandler(),
            null == this.options.disabled && (this.options.disabled = this.element[0].disabled),
            this._setOption("disabled", this.options.disabled),
            this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"),
            this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"),
            "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"),
            this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel),
            this._enhance(),
            e && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"),
            this.icon && this._addClass(this.icon, null, "ui-state-hover")),
            this._on({
                change: "_toggleClasses",
                focus: function() {
                    this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
                },
                blur: function() {
                    this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
                }
            })
        },
        _readType: function() {
            var t = this.element[0].nodeName.toLowerCase();
            this.type = this.element[0].type,
            "input" === t && /radio|checkbox/.test(this.type) || e.error("Can't create checkboxradio on element.nodeName=" + t + " and element.type=" + this.type)
        },
        _enhance: function() {
            this._updateIcon(this.element[0].checked)
        },
        widget: function() {
            return this.label
        },
        _getRadioGroup: function() {
            var t = this.element[0].name
              , i = "input[name='" + e.ui.escapeSelector(t) + "']";
            return t ? (this.form.length ? e(this.form[0].elements).filter(i) : e(i).filter((function() {
                return 0 === e(this).form().length
            }
            ))).not(this.element) : e([])
        },
        _toggleClasses: function() {
            var t = this.element[0].checked;
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t),
            this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", t)._toggleClass(this.icon, null, "ui-icon-blank", !t),
            "radio" === this.type && this._getRadioGroup().each((function() {
                var t = e(this).checkboxradio("instance");
                t && t._removeClass(t.label, "ui-checkboxradio-checked", "ui-state-active")
            }
            ))
        },
        _destroy: function() {
            this._unbindFormResetHandler(),
            this.icon && (this.icon.remove(),
            this.iconSpace.remove())
        },
        _setOption: function(e, t) {
            if ("label" !== e || t) {
                if (this._super(e, t),
                "disabled" === e)
                    return this._toggleClass(this.label, null, "ui-state-disabled", t),
                    void (this.element[0].disabled = t);
                this.refresh()
            }
        },
        _updateIcon: function(t) {
            var i = "ui-icon ui-icon-background ";
            this.options.icon ? (this.icon || (this.icon = e("<span>"),
            this.iconSpace = e("<span> </span>"),
            this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")),
            "checkbox" === this.type ? (i += t ? "ui-icon-check ui-state-checked" : "ui-icon-blank",
            this._removeClass(this.icon, null, t ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank",
            this._addClass(this.icon, "ui-checkboxradio-icon", i),
            t || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"),
            this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(),
            this.iconSpace.remove(),
            delete this.icon)
        },
        _updateLabel: function() {
            var e = this.label.contents().not(this.element[0]);
            this.icon && (e = e.not(this.icon[0])),
            this.iconSpace && (e = e.not(this.iconSpace[0])),
            e.remove(),
            this.label.append(this.options.label)
        },
        refresh: function() {
            var e = this.element[0].checked
              , t = this.element[0].disabled;
            this._updateIcon(e),
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e),
            null !== this.options.label && this._updateLabel(),
            t !== this.options.disabled && this._setOptions({
                disabled: t
            })
        }
    }]);
    e.ui.checkboxradio;
    /*!
 * jQuery UI Button 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    e.widget("ui.button", {
        version: "1.12.1",
        defaultElement: "<button>",
        options: {
            classes: {
                "ui-button": "ui-corner-all"
            },
            disabled: null,
            icon: null,
            iconPosition: "beginning",
            label: null,
            showLabel: !0
        },
        _getCreateOptions: function() {
            var e, t = this._super() || {};
            return this.isInput = this.element.is("input"),
            null != (e = this.element[0].disabled) && (t.disabled = e),
            this.originalLabel = this.isInput ? this.element.val() : this.element.html(),
            this.originalLabel && (t.label = this.originalLabel),
            t
        },
        _create: function() {
            !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0),
            null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1),
            this.hasTitle = !!this.element.attr("title"),
            this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)),
            this._addClass("ui-button", "ui-widget"),
            this._setOption("disabled", this.options.disabled),
            this._enhance(),
            this.element.is("a") && this._on({
                keyup: function(t) {
                    t.keyCode === e.ui.keyCode.SPACE && (t.preventDefault(),
                    this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
                }
            })
        },
        _enhance: function() {
            this.element.is("button") || this.element.attr("role", "button"),
            this.options.icon && (this._updateIcon("icon", this.options.icon),
            this._updateTooltip())
        },
        _updateTooltip: function() {
            this.title = this.element.attr("title"),
            this.options.showLabel || this.title || this.element.attr("title", this.options.label)
        },
        _updateIcon: function(t, i) {
            var n = "iconPosition" !== t
              , s = n ? this.options.iconPosition : i
              , o = "top" === s || "bottom" === s;
            this.icon ? n && this._removeClass(this.icon, null, this.options.icon) : (this.icon = e("<span>"),
            this._addClass(this.icon, "ui-button-icon", "ui-icon"),
            this.options.showLabel || this._addClass("ui-button-icon-only")),
            n && this._addClass(this.icon, null, i),
            this._attachIcon(s),
            o ? (this._addClass(this.icon, null, "ui-widget-icon-block"),
            this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = e("<span> </span>"),
            this._addClass(this.iconSpace, "ui-button-icon-space")),
            this._removeClass(this.icon, null, "ui-wiget-icon-block"),
            this._attachIconSpace(s))
        },
        _destroy: function() {
            this.element.removeAttr("role"),
            this.icon && this.icon.remove(),
            this.iconSpace && this.iconSpace.remove(),
            this.hasTitle || this.element.removeAttr("title")
        },
        _attachIconSpace: function(e) {
            this.icon[/^(?:end|bottom)/.test(e) ? "before" : "after"](this.iconSpace)
        },
        _attachIcon: function(e) {
            this.element[/^(?:end|bottom)/.test(e) ? "append" : "prepend"](this.icon)
        },
        _setOptions: function(e) {
            var t = void 0 === e.showLabel ? this.options.showLabel : e.showLabel
              , i = void 0 === e.icon ? this.options.icon : e.icon;
            t || i || (e.showLabel = !0),
            this._super(e)
        },
        _setOption: function(e, t) {
            "icon" === e && (t ? this._updateIcon(e, t) : this.icon && (this.icon.remove(),
            this.iconSpace && this.iconSpace.remove())),
            "iconPosition" === e && this._updateIcon(e, t),
            "showLabel" === e && (this._toggleClass("ui-button-icon-only", null, !t),
            this._updateTooltip()),
            "label" === e && (this.isInput ? this.element.val(t) : (this.element.html(t),
            this.icon && (this._attachIcon(this.options.iconPosition),
            this._attachIconSpace(this.options.iconPosition)))),
            this._super(e, t),
            "disabled" === e && (this._toggleClass(null, "ui-state-disabled", t),
            this.element[0].disabled = t,
            t && this.element.blur())
        },
        refresh: function() {
            var e = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
            e !== this.options.disabled && this._setOptions({
                disabled: e
            }),
            this._updateTooltip()
        }
    }),
    !1 !== e.uiBackCompat && (e.widget("ui.button", e.ui.button, {
        options: {
            text: !0,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text),
            !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel),
            this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary,
            this.options.iconPosition = "end"),
            this._super()
        },
        _setOption: function(e, t) {
            "text" !== e ? ("showLabel" === e && (this.options.text = t),
            "icon" === e && (this.options.icons.primary = t),
            "icons" === e && (t.primary ? (this._super("icon", t.primary),
            this._super("iconPosition", "beginning")) : t.secondary && (this._super("icon", t.secondary),
            this._super("iconPosition", "end"))),
            this._superApply(arguments)) : this._super("showLabel", t)
        }
    }),
    e.fn.button = function(t) {
        return function() {
            return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? t.apply(this, arguments) : (e.ui.checkboxradio || e.error("Checkboxradio widget missing"),
            0 === arguments.length ? this.checkboxradio({
                icon: !1
            }) : this.checkboxradio.apply(this, arguments))
        }
    }(e.fn.button),
    e.fn.buttonset = function() {
        return e.ui.controlgroup || e.error("Controlgroup widget missing"),
        "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {
            button: arguments[0].items
        }),
        this.controlgroup.apply(this, arguments))
    }
    );
    var p;
    /*!
 * jQuery UI Datepicker 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    e.ui.button;
    function f() {
        this._curInst = null,
        this._keyEvent = !1,
        this._disabledInputs = [],
        this._datepickerShowing = !1,
        this._inDialog = !1,
        this._mainDivId = "ui-datepicker-div",
        this._inlineClass = "ui-datepicker-inline",
        this._appendClass = "ui-datepicker-append",
        this._triggerClass = "ui-datepicker-trigger",
        this._dialogClass = "ui-datepicker-dialog",
        this._disableClass = "ui-datepicker-disabled",
        this._unselectableClass = "ui-datepicker-unselectable",
        this._currentClass = "ui-datepicker-current-day",
        this._dayOverClass = "ui-datepicker-days-cell-over",
        this.regional = [],
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yyyy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        },
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        },
        e.extend(this._defaults, this.regional[""]),
        this.regional.en = e.extend(!0, {}, this.regional[""]),
        this.regional["en-US"] = e.extend(!0, {}, this.regional.en),
        this.dpDiv = m(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }
    function m(t) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.on("mouseout", i, (function() {
            e(this).removeClass("ui-state-hover"),
            -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"),
            -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover")
        }
        )).on("mouseover", i, g)
    }
    function g() {
        e.datepicker._isDisabledDatepicker(p.inline ? p.dpDiv.parent()[0] : p.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),
        e(this).addClass("ui-state-hover"),
        -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"),
        -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover"))
    }
    function v(t, i) {
        for (var n in e.extend(t, i),
        i)
            null == i[n] && (t[n] = i[n]);
        return t
    }
    e.extend(e.ui, {
        datepicker: {
            version: "1.12.1"
        }
    }),
    e.extend(f.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(e) {
            return v(this._defaults, e || {}),
            this
        },
        _attachDatepicker: function(t, i) {
            var n, s, o;
            s = "div" === (n = t.nodeName.toLowerCase()) || "span" === n,
            t.id || (this.uuid += 1,
            t.id = "dp" + this.uuid),
            (o = this._newInst(e(t), s)).settings = e.extend({}, i || {}),
            "input" === n ? this._connectDatepicker(t, o) : s && this._inlineDatepicker(t, o)
        },
        _newInst: function(t, i) {
            return {
                id: t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? m(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(t, i) {
            var n = e(t);
            i.append = e([]),
            i.trigger = e([]),
            n.hasClass(this.markerClassName) || (this._attachments(n, i),
            n.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp),
            this._autoSize(i),
            e.data(t, "datepicker", i),
            i.settings.disabled && this._disableDatepicker(t))
        },
        _attachments: function(t, i) {
            var n, s, o, a = this._get(i, "appendText"), r = this._get(i, "isRTL");
            i.append && i.append.remove(),
            a && (i.append = e("<span class='" + this._appendClass + "'>" + a + "</span>"),
            t[r ? "before" : "after"](i.append)),
            t.off("focus", this._showDatepicker),
            i.trigger && i.trigger.remove(),
            "focus" !== (n = this._get(i, "showOn")) && "both" !== n || t.on("focus", this._showDatepicker),
            "button" !== n && "both" !== n || (s = this._get(i, "buttonText"),
            o = this._get(i, "buttonImage"),
            i.trigger = e(this._get(i, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
                src: o,
                alt: s,
                title: s
            }) : e("<button type='button'></button>").addClass(this._triggerClass).html(o ? e("<img/>").attr({
                src: o,
                alt: s,
                title: s
            }) : s)),
            t[r ? "before" : "after"](i.trigger),
            i.trigger.on("click", (function() {
                return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(),
                e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]),
                !1
            }
            )))
        },
        _autoSize: function(e) {
            if (this._get(e, "autoSize") && !e.inline) {
                var t, i, n, s, o = new Date(2009,11,20), a = this._get(e, "dateFormat");
                a.match(/[DM]/) && (t = function(e) {
                    for (i = 0,
                    n = 0,
                    s = 0; s < e.length; s++)
                        e[s].length > i && (i = e[s].length,
                        n = s);
                    return n
                }
                ,
                o.setMonth(t(this._get(e, a.match(/MM/) ? "monthNames" : "monthNamesShort"))),
                o.setDate(t(this._get(e, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())),
                e.input.attr("size", this._formatDate(e, o).length)
            }
        },
        _inlineDatepicker: function(t, i) {
            var n = e(t);
            n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(i.dpDiv),
            e.data(t, "datepicker", i),
            this._setDate(i, this._getDefaultDate(i), !0),
            this._updateDatepicker(i),
            this._updateAlternate(i),
            i.settings.disabled && this._disableDatepicker(t),
            i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(t, i, n, s, o) {
            var a, r, l, c, u, h = this._dialogInst;
            return h || (this.uuid += 1,
            a = "dp" + this.uuid,
            this._dialogInput = e("<input type='text' id='" + a + "' style='position: absolute; top: -100px; width: 0px;'/>"),
            this._dialogInput.on("keydown", this._doKeyDown),
            e("body").append(this._dialogInput),
            (h = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {},
            e.data(this._dialogInput[0], "datepicker", h)),
            v(h.settings, s || {}),
            i = i && i.constructor === Date ? this._formatDate(h, i) : i,
            this._dialogInput.val(i),
            this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null,
            this._pos || (r = document.documentElement.clientWidth,
            l = document.documentElement.clientHeight,
            c = document.documentElement.scrollLeft || document.body.scrollLeft,
            u = document.documentElement.scrollTop || document.body.scrollTop,
            this._pos = [r / 2 - 100 + c, l / 2 - 150 + u]),
            this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"),
            h.settings.onSelect = n,
            this._inDialog = !0,
            this.dpDiv.addClass(this._dialogClass),
            this._showDatepicker(this._dialogInput[0]),
            e.blockUI && e.blockUI(this.dpDiv),
            e.data(this._dialogInput[0], "datepicker", h),
            this
        },
        _destroyDatepicker: function(t) {
            var i, n = e(t), s = e.data(t, "datepicker");
            n.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(),
            e.removeData(t, "datepicker"),
            "input" === i ? (s.append.remove(),
            s.trigger.remove(),
            n.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : "div" !== i && "span" !== i || n.removeClass(this.markerClassName).empty(),
            p === s && (p = null))
        },
        _enableDatepicker: function(t) {
            var i, n, s = e(t), o = e.data(t, "datepicker");
            s.hasClass(this.markerClassName) && ("input" === (i = t.nodeName.toLowerCase()) ? (t.disabled = !1,
            o.trigger.filter("button").each((function() {
                this.disabled = !1
            }
            )).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : "div" !== i && "span" !== i || ((n = s.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"),
            n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)),
            this._disabledInputs = e.map(this._disabledInputs, (function(e) {
                return e === t ? null : e
            }
            )))
        },
        _disableDatepicker: function(t) {
            var i, n, s = e(t), o = e.data(t, "datepicker");
            s.hasClass(this.markerClassName) && ("input" === (i = t.nodeName.toLowerCase()) ? (t.disabled = !0,
            o.trigger.filter("button").each((function() {
                this.disabled = !0
            }
            )).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : "div" !== i && "span" !== i || ((n = s.children("." + this._inlineClass)).children().addClass("ui-state-disabled"),
            n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)),
            this._disabledInputs = e.map(this._disabledInputs, (function(e) {
                return e === t ? null : e
            }
            )),
            this._disabledInputs[this._disabledInputs.length] = t)
        },
        _isDisabledDatepicker: function(e) {
            if (!e)
                return !1;
            for (var t = 0; t < this._disabledInputs.length; t++)
                if (this._disabledInputs[t] === e)
                    return !0;
            return !1
        },
        _getInst: function(t) {
            try {
                return e.data(t, "datepicker")
            } catch (e) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(t, i, n) {
            var s, o, a, r, l = this._getInst(t);
            if (2 === arguments.length && "string" == typeof i)
                return "defaults" === i ? e.extend({}, e.datepicker._defaults) : l ? "all" === i ? e.extend({}, l.settings) : this._get(l, i) : null;
            s = i || {},
            "string" == typeof i && ((s = {})[i] = n),
            l && (this._curInst === l && this._hideDatepicker(),
            o = this._getDateDatepicker(t, !0),
            a = this._getMinMaxDate(l, "min"),
            r = this._getMinMaxDate(l, "max"),
            v(l.settings, s),
            null !== a && void 0 !== s.dateFormat && void 0 === s.minDate && (l.settings.minDate = this._formatDate(l, a)),
            null !== r && void 0 !== s.dateFormat && void 0 === s.maxDate && (l.settings.maxDate = this._formatDate(l, r)),
            "disabled"in s && (s.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)),
            this._attachments(e(t), l),
            this._autoSize(l),
            this._setDate(l, o),
            this._updateAlternate(l),
            this._updateDatepicker(l))
        },
        _changeDatepicker: function(e, t, i) {
            this._optionDatepicker(e, t, i)
        },
        _refreshDatepicker: function(e) {
            var t = this._getInst(e);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function(e, t) {
            var i = this._getInst(e);
            i && (this._setDate(i, t),
            this._updateDatepicker(i),
            this._updateAlternate(i))
        },
        _getDateDatepicker: function(e, t) {
            var i = this._getInst(e);
            return i && !i.inline && this._setDateFromField(i, t),
            i ? this._getDate(i) : null
        },
        _doKeyDown: function(t) {
            var i, n, s, o = e.datepicker._getInst(t.target), a = !0, r = o.dpDiv.is(".ui-datepicker-rtl");
            if (o._keyEvent = !0,
            e.datepicker._datepickerShowing)
                switch (t.keyCode) {
                case 9:
                    e.datepicker._hideDatepicker(),
                    a = !1;
                    break;
                case 13:
                    return (s = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", o.dpDiv))[0] && e.datepicker._selectDay(t.target, o.selectedMonth, o.selectedYear, s[0]),
                    (i = e.datepicker._get(o, "onSelect")) ? (n = e.datepicker._formatDate(o),
                    i.apply(o.input ? o.input[0] : null, [n, o])) : e.datepicker._hideDatepicker(),
                    !1;
                case 27:
                    e.datepicker._hideDatepicker();
                    break;
                case 33:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(o, "stepBigMonths") : -e.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 34:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(o, "stepBigMonths") : +e.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target),
                    a = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target),
                    a = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, r ? 1 : -1, "D"),
                    a = t.ctrlKey || t.metaKey,
                    t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(o, "stepBigMonths") : -e.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"),
                    a = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, r ? -1 : 1, "D"),
                    a = t.ctrlKey || t.metaKey,
                    t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(o, "stepBigMonths") : +e.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"),
                    a = t.ctrlKey || t.metaKey;
                    break;
                default:
                    a = !1
                }
            else
                36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : a = !1;
            a && (t.preventDefault(),
            t.stopPropagation())
        },
        _doKeyPress: function(t) {
            var i, n, s = e.datepicker._getInst(t.target);
            if (e.datepicker._get(s, "constrainInput"))
                return i = e.datepicker._possibleChars(e.datepicker._get(s, "dateFormat")),
                n = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode),
                t.ctrlKey || t.metaKey || n < " " || !i || i.indexOf(n) > -1
        },
        _doKeyUp: function(t) {
            var i = e.datepicker._getInst(t.target);
            if (i.input.val() !== i.lastVal)
                try {
                    e.datepicker.parseDate(e.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, e.datepicker._getFormatConfig(i)) && (e.datepicker._setDateFromField(i),
                    e.datepicker._updateAlternate(i),
                    e.datepicker._updateDatepicker(i))
                } catch (e) {}
            return !0
        },
        _showDatepicker: function(t) {
            var i, n, s, o, a, r, l;
            ("input" !== (t = t.target || t).nodeName.toLowerCase() && (t = e("input", t.parentNode)[0]),
            e.datepicker._isDisabledDatepicker(t) || e.datepicker._lastInput === t) || (i = e.datepicker._getInst(t),
            e.datepicker._curInst && e.datepicker._curInst !== i && (e.datepicker._curInst.dpDiv.stop(!0, !0),
            i && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])),
            !1 !== (s = (n = e.datepicker._get(i, "beforeShow")) ? n.apply(t, [t, i]) : {}) && (v(i.settings, s),
            i.lastVal = null,
            e.datepicker._lastInput = t,
            e.datepicker._setDateFromField(i),
            e.datepicker._inDialog && (t.value = ""),
            e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t),
            e.datepicker._pos[1] += t.offsetHeight),
            o = !1,
            e(t).parents().each((function() {
                return !(o |= "fixed" === e(this).css("position"))
            }
            )),
            a = {
                left: e.datepicker._pos[0],
                top: e.datepicker._pos[1]
            },
            e.datepicker._pos = null,
            i.dpDiv.empty(),
            i.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px"
            }),
            e.datepicker._updateDatepicker(i),
            a = e.datepicker._checkOffset(i, a, o),
            i.dpDiv.css({
                position: e.datepicker._inDialog && e.blockUI ? "static" : o ? "fixed" : "absolute",
                display: "none",
                left: a.left + "px",
                top: a.top + "px"
            }),
            i.inline || (r = e.datepicker._get(i, "showAnim"),
            l = e.datepicker._get(i, "duration"),
            i.dpDiv.css("z-index", function(e) {
                for (var t, i; e.length && e[0] !== document; ) {
                    if (("absolute" === (t = e.css("position")) || "relative" === t || "fixed" === t) && (i = parseInt(e.css("zIndex"), 10),
                    !isNaN(i) && 0 !== i))
                        return i;
                    e = e.parent()
                }
                return 0
            }(e(t)) + 1),
            e.datepicker._datepickerShowing = !0,
            e.effects && e.effects.effect[r] ? i.dpDiv.show(r, e.datepicker._get(i, "showOptions"), l) : i.dpDiv[r || "show"](r ? l : null),
            e.datepicker._shouldFocusInput(i) && i.input.trigger("focus"),
            e.datepicker._curInst = i)))
        },
        _updateDatepicker: function(t) {
            this.maxRows = 4,
            p = t,
            t.dpDiv.empty().append(this._generateHTML(t)),
            this._attachHandlers(t);
            var i, n = this._getNumberOfMonths(t), s = n[1], o = t.dpDiv.find("." + this._dayOverClass + " a");
            o.length > 0 && g.apply(o.get(0)),
            t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),
            s > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", 17 * s + "em"),
            t.dpDiv[(1 !== n[0] || 1 !== n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"),
            t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"),
            t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.trigger("focus"),
            t.yearshtml && (i = t.yearshtml,
            setTimeout((function() {
                i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),
                i = t.yearshtml = null
            }
            ), 0))
        },
        _shouldFocusInput: function(e) {
            return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
        },
        _checkOffset: function(t, i, n) {
            var s = t.dpDiv.outerWidth()
              , o = t.dpDiv.outerHeight()
              , a = t.input ? t.input.outerWidth() : 0
              , r = t.input ? t.input.outerHeight() : 0
              , l = document.documentElement.clientWidth + (n ? 0 : e(document).scrollLeft())
              , c = document.documentElement.clientHeight + (n ? 0 : e(document).scrollTop());
            return i.left -= this._get(t, "isRTL") ? s - a : 0,
            i.left -= n && i.left === t.input.offset().left ? e(document).scrollLeft() : 0,
            i.top -= n && i.top === t.input.offset().top + r ? e(document).scrollTop() : 0,
            i.left -= Math.min(i.left, i.left + s > l && l > s ? Math.abs(i.left + s - l) : 0),
            i.top -= Math.min(i.top, i.top + o > c && c > o ? Math.abs(o + r) : 0),
            i
        },
        _findPos: function(t) {
            for (var i, n = this._getInst(t), s = this._get(n, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t)); )
                t = t[s ? "previousSibling" : "nextSibling"];
            return [(i = e(t).offset()).left, i.top]
        },
        _hideDatepicker: function(t) {
            var i, n, s, o, a = this._curInst;
            !a || t && a !== e.data(t, "datepicker") || this._datepickerShowing && (i = this._get(a, "showAnim"),
            n = this._get(a, "duration"),
            s = function() {
                e.datepicker._tidyDialog(a)
            }
            ,
            e.effects && (e.effects.effect[i] || e.effects[i]) ? a.dpDiv.hide(i, e.datepicker._get(a, "showOptions"), n, s) : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? n : null, s),
            i || s(),
            this._datepickerShowing = !1,
            (o = this._get(a, "onClose")) && o.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]),
            this._lastInput = null,
            this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }),
            e.blockUI && (e.unblockUI(),
            e("body").append(this.dpDiv))),
            this._inDialog = !1)
        },
        _tidyDialog: function(e) {
            e.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(t) {
            if (e.datepicker._curInst) {
                var i = e(t.target)
                  , n = e.datepicker._getInst(i[0]);
                (i[0].id === e.datepicker._mainDivId || 0 !== i.parents("#" + e.datepicker._mainDivId).length || i.hasClass(e.datepicker.markerClassName) || i.closest("." + e.datepicker._triggerClass).length || !e.datepicker._datepickerShowing || e.datepicker._inDialog && e.blockUI) && (!i.hasClass(e.datepicker.markerClassName) || e.datepicker._curInst === n) || e.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(t, i, n) {
            var s = e(t)
              , o = this._getInst(s[0]);
            this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(o, i + ("M" === n ? this._get(o, "showCurrentAtPos") : 0), n),
            this._updateDatepicker(o))
        },
        _gotoToday: function(t) {
            var i, n = e(t), s = this._getInst(n[0]);
            this._get(s, "gotoCurrent") && s.currentDay ? (s.selectedDay = s.currentDay,
            s.drawMonth = s.selectedMonth = s.currentMonth,
            s.drawYear = s.selectedYear = s.currentYear) : (i = new Date,
            s.selectedDay = i.getDate(),
            s.drawMonth = s.selectedMonth = i.getMonth(),
            s.drawYear = s.selectedYear = i.getFullYear()),
            this._notifyChange(s),
            this._adjustDate(n)
        },
        _selectMonthYear: function(t, i, n) {
            var s = e(t)
              , o = this._getInst(s[0]);
            o["selected" + ("M" === n ? "Month" : "Year")] = o["draw" + ("M" === n ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10),
            this._notifyChange(o),
            this._adjustDate(s)
        },
        _selectDay: function(t, i, n, s) {
            var o, a = e(t);
            e(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || ((o = this._getInst(a[0])).selectedDay = o.currentDay = e("a", s).html(),
            o.selectedMonth = o.currentMonth = i,
            o.selectedYear = o.currentYear = n,
            this._selectDate(t, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
        },
        _clearDate: function(t) {
            var i = e(t);
            this._selectDate(i, "")
        },
        _selectDate: function(t, i) {
            var n, s = e(t), o = this._getInst(s[0]);
            i = null != i ? i : this._formatDate(o),
            o.input && o.input.val(i),
            this._updateAlternate(o),
            (n = this._get(o, "onSelect")) ? n.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"),
            o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(),
            this._lastInput = o.input[0],
            "object" != typeof o.input[0] && o.input.trigger("focus"),
            this._lastInput = null)
        },
        _updateAlternate: function(t) {
            var i, n, s, o = this._get(t, "altField");
            o && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"),
            n = this._getDate(t),
            s = this.formatDate(i, n, this._getFormatConfig(t)),
            e(o).val(s))
        },
        noWeekends: function(e) {
            var t = e.getDay();
            return [t > 0 && t < 6, ""]
        },
        iso8601Week: function(e) {
            var t, i = new Date(e.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)),
            t = i.getTime(),
            i.setMonth(0),
            i.setDate(1),
            Math.floor(Math.round((t - i) / 864e5) / 7) + 1
        },
        parseDate: function(t, i, n) {
            if (null == t || null == i)
                throw "Invalid arguments";
            if ("" === (i = "object" == typeof i ? i.toString() : i + ""))
                return null;
            var s, o, a, r, l = 0, c = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff, u = "string" != typeof c ? c : (new Date).getFullYear() % 100 + parseInt(c, 10), h = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort, d = (n ? n.dayNames : null) || this._defaults.dayNames, p = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort, f = (n ? n.monthNames : null) || this._defaults.monthNames, m = -1, g = -1, v = -1, _ = -1, b = !1, y = function(e) {
                var i = s + 1 < t.length && t.charAt(s + 1) === e;
                return i && s++,
                i
            }, w = function(e) {
                var t = y(e)
                  , n = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2
                  , s = new RegExp("^\\d{" + ("y" === e ? n : 1) + "," + n + "}")
                  , o = i.substring(l).match(s);
                if (!o)
                    throw "Missing number at position " + l;
                return l += o[0].length,
                parseInt(o[0], 10)
            }, x = function(t, n, s) {
                var o = -1
                  , a = e.map(y(t) ? s : n, (function(e, t) {
                    return [[t, e]]
                }
                )).sort((function(e, t) {
                    return -(e[1].length - t[1].length)
                }
                ));
                if (e.each(a, (function(e, t) {
                    var n = t[1];
                    if (i.substr(l, n.length).toLowerCase() === n.toLowerCase())
                        return o = t[0],
                        l += n.length,
                        !1
                }
                )),
                -1 !== o)
                    return o + 1;
                throw "Unknown name at position " + l
            }, C = function() {
                if (i.charAt(l) !== t.charAt(s))
                    throw "Unexpected literal at position " + l;
                l++
            };
            for (s = 0; s < t.length; s++)
                if (b)
                    "'" !== t.charAt(s) || y("'") ? C() : b = !1;
                else
                    switch (t.charAt(s)) {
                    case "d":
                        v = w("d");
                        break;
                    case "D":
                        x("D", h, d);
                        break;
                    case "o":
                        _ = w("o");
                        break;
                    case "m":
                        g = w("m");
                        break;
                    case "M":
                        g = x("M", p, f);
                        break;
                    case "y":
                        m = w("y");
                        break;
                    case "@":
                        m = (r = new Date(w("@"))).getFullYear(),
                        g = r.getMonth() + 1,
                        v = r.getDate();
                        break;
                    case "!":
                        m = (r = new Date((w("!") - this._ticksTo1970) / 1e4)).getFullYear(),
                        g = r.getMonth() + 1,
                        v = r.getDate();
                        break;
                    case "'":
                        y("'") ? C() : b = !0;
                        break;
                    default:
                        C()
                    }
            if (l < i.length && (a = i.substr(l),
            !/^\s+/.test(a)))
                throw "Extra/unparsed characters found in date: " + a;
            if (-1 === m ? m = (new Date).getFullYear() : m < 100 && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (m <= u ? 0 : -100)),
            _ > -1)
                for (g = 1,
                v = _; ; ) {
                    if (v <= (o = this._getDaysInMonth(m, g - 1)))
                        break;
                    g++,
                    v -= o
                }
            if ((r = this._daylightSavingAdjust(new Date(m,g - 1,v))).getFullYear() !== m || r.getMonth() + 1 !== g || r.getDate() !== v)
                throw "Invalid date";
            return r
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
        formatDate: function(e, t, i) {
            if (!t)
                return "";
            var n, s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, o = (i ? i.dayNames : null) || this._defaults.dayNames, a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, r = (i ? i.monthNames : null) || this._defaults.monthNames, l = function(t) {
                var i = n + 1 < e.length && e.charAt(n + 1) === t;
                return i && n++,
                i
            }, c = function(e, t, i) {
                var n = "" + t;
                if (l(e))
                    for (; n.length < i; )
                        n = "0" + n;
                return n
            }, u = function(e, t, i, n) {
                return l(e) ? n[t] : i[t]
            }, h = "", d = !1;
            if (t)
                for (n = 0; n < e.length; n++)
                    if (d)
                        "'" !== e.charAt(n) || l("'") ? h += e.charAt(n) : d = !1;
                    else
                        switch (e.charAt(n)) {
                        case "d":
                            h += c("d", t.getDate(), 2);
                            break;
                        case "D":
                            h += u("D", t.getDay(), s, o);
                            break;
                        case "o":
                            h += c("o", Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime() - new Date(t.getFullYear(),0,0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            h += c("m", t.getMonth() + 1, 2);
                            break;
                        case "M":
                            h += u("M", t.getMonth(), a, r);
                            break;
                        case "y":
                            h += l("y") ? t.getFullYear() : (t.getFullYear() % 100 < 10 ? "0" : "") + t.getFullYear() % 100;
                            break;
                        case "@":
                            h += t.getTime();
                            break;
                        case "!":
                            h += 1e4 * t.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            l("'") ? h += "'" : d = !0;
                            break;
                        default:
                            h += e.charAt(n)
                        }
            return h
        },
        _possibleChars: function(e) {
            var t, i = "", n = !1, s = function(i) {
                var n = t + 1 < e.length && e.charAt(t + 1) === i;
                return n && t++,
                n
            };
            for (t = 0; t < e.length; t++)
                if (n)
                    "'" !== e.charAt(t) || s("'") ? i += e.charAt(t) : n = !1;
                else
                    switch (e.charAt(t)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        s("'") ? i += "'" : n = !0;
                        break;
                    default:
                        i += e.charAt(t)
                    }
            return i
        },
        _get: function(e, t) {
            return void 0 !== e.settings[t] ? e.settings[t] : this._defaults[t]
        },
        _setDateFromField: function(e, t) {
            if (e.input.val() !== e.lastVal) {
                var i = this._get(e, "dateFormat")
                  , n = e.lastVal = e.input ? e.input.val() : null
                  , s = this._getDefaultDate(e)
                  , o = s
                  , a = this._getFormatConfig(e);
                try {
                    o = this.parseDate(i, n, a) || s
                } catch (e) {
                    n = t ? "" : n
                }
                e.selectedDay = o.getDate(),
                e.drawMonth = e.selectedMonth = o.getMonth(),
                e.drawYear = e.selectedYear = o.getFullYear(),
                e.currentDay = n ? o.getDate() : 0,
                e.currentMonth = n ? o.getMonth() : 0,
                e.currentYear = n ? o.getFullYear() : 0,
                this._adjustInstDate(e)
            }
        },
        _getDefaultDate: function(e) {
            return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
        },
        _determineDate: function(t, i, n) {
            var s = null == i || "" === i ? n : "string" == typeof i ? function(i) {
                try {
                    return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), i, e.datepicker._getFormatConfig(t))
                } catch (e) {}
                for (var n = (i.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, s = n.getFullYear(), o = n.getMonth(), a = n.getDate(), r = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = r.exec(i); l; ) {
                    switch (l[2] || "d") {
                    case "d":
                    case "D":
                        a += parseInt(l[1], 10);
                        break;
                    case "w":
                    case "W":
                        a += 7 * parseInt(l[1], 10);
                        break;
                    case "m":
                    case "M":
                        o += parseInt(l[1], 10),
                        a = Math.min(a, e.datepicker._getDaysInMonth(s, o));
                        break;
                    case "y":
                    case "Y":
                        s += parseInt(l[1], 10),
                        a = Math.min(a, e.datepicker._getDaysInMonth(s, o))
                    }
                    l = r.exec(i)
                }
                return new Date(s,o,a)
            }(i) : "number" == typeof i ? isNaN(i) ? n : function(e) {
                var t = new Date;
                return t.setDate(t.getDate() + e),
                t
            }(i) : new Date(i.getTime());
            return (s = s && "Invalid Date" === s.toString() ? n : s) && (s.setHours(0),
            s.setMinutes(0),
            s.setSeconds(0),
            s.setMilliseconds(0)),
            this._daylightSavingAdjust(s)
        },
        _daylightSavingAdjust: function(e) {
            return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0),
            e) : null
        },
        _setDate: function(e, t, i) {
            var n = !t
              , s = e.selectedMonth
              , o = e.selectedYear
              , a = this._restrictMinMax(e, this._determineDate(e, t, new Date));
            e.selectedDay = e.currentDay = a.getDate(),
            e.drawMonth = e.selectedMonth = e.currentMonth = a.getMonth(),
            e.drawYear = e.selectedYear = e.currentYear = a.getFullYear(),
            s === e.selectedMonth && o === e.selectedYear || i || this._notifyChange(e),
            this._adjustInstDate(e),
            e.input && e.input.val(n ? "" : this._formatDate(e))
        },
        _getDate: function(e) {
            return !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay))
        },
        _attachHandlers: function(t) {
            var i = this._get(t, "stepMonths")
              , n = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map((function() {
                var t = {
                    prev: function() {
                        e.datepicker._adjustDate(n, -i, "M")
                    },
                    next: function() {
                        e.datepicker._adjustDate(n, +i, "M")
                    },
                    hide: function() {
                        e.datepicker._hideDatepicker()
                    },
                    today: function() {
                        e.datepicker._gotoToday(n)
                    },
                    selectDay: function() {
                        return e.datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this),
                        !1
                    },
                    selectMonth: function() {
                        return e.datepicker._selectMonthYear(n, this, "M"),
                        !1
                    },
                    selectYear: function() {
                        return e.datepicker._selectMonthYear(n, this, "Y"),
                        !1
                    }
                };
                e(this).on(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
            }
            ))
        },
        _generateHTML: function(e) {
            var t, i, n, s, o, a, r, l, c, u, h, d, p, f, m, g, v, _, b, y, w, x, C, k, S, D, T, $, I, P, A, E, M, O, N, L, H, F, B, R = new Date, z = this._daylightSavingAdjust(new Date(R.getFullYear(),R.getMonth(),R.getDate())), j = this._get(e, "isRTL"), W = this._get(e, "showButtonPanel"), q = this._get(e, "hideIfNoPrevNext"), U = this._get(e, "navigationAsDateFormat"), V = this._getNumberOfMonths(e), Y = this._get(e, "showCurrentAtPos"), X = this._get(e, "stepMonths"), K = 1 !== V[0] || 1 !== V[1], G = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear,e.currentMonth,e.currentDay) : new Date(9999,9,9)), Q = this._getMinMaxDate(e, "min"), Z = this._getMinMaxDate(e, "max"), J = e.drawMonth - Y, ee = e.drawYear;
            if (J < 0 && (J += 12,
            ee--),
            Z)
                for (t = this._daylightSavingAdjust(new Date(Z.getFullYear(),Z.getMonth() - V[0] * V[1] + 1,Z.getDate())),
                t = Q && t < Q ? Q : t; this._daylightSavingAdjust(new Date(ee,J,1)) > t; )
                    --J < 0 && (J = 11,
                    ee--);
            for (e.drawMonth = J,
            e.drawYear = ee,
            i = this._get(e, "prevText"),
            i = U ? this.formatDate(i, this._daylightSavingAdjust(new Date(ee,J - X,1)), this._getFormatConfig(e)) : i,
            n = this._canAdjustMonth(e, -1, ee, J) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "e" : "w") + "'>" + i + "</span></a>" : q ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "e" : "w") + "'>" + i + "</span></a>",
            s = this._get(e, "nextText"),
            s = U ? this.formatDate(s, this._daylightSavingAdjust(new Date(ee,J + X,1)), this._getFormatConfig(e)) : s,
            o = this._canAdjustMonth(e, 1, ee, J) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "w" : "e") + "'>" + s + "</span></a>" : q ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "w" : "e") + "'>" + s + "</span></a>",
            a = this._get(e, "currentText"),
            r = this._get(e, "gotoCurrent") && e.currentDay ? G : z,
            a = U ? this.formatDate(a, r, this._getFormatConfig(e)) : a,
            l = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>",
            c = W ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (j ? l : "") + (this._isInRange(e, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (j ? "" : l) + "</div>" : "",
            u = parseInt(this._get(e, "firstDay"), 10),
            u = isNaN(u) ? 0 : u,
            h = this._get(e, "showWeek"),
            d = this._get(e, "dayNames"),
            p = this._get(e, "dayNamesMin"),
            f = this._get(e, "monthNames"),
            m = this._get(e, "monthNamesShort"),
            g = this._get(e, "beforeShowDay"),
            v = this._get(e, "showOtherMonths"),
            _ = this._get(e, "selectOtherMonths"),
            b = this._getDefaultDate(e),
            y = "",
            x = 0; x < V[0]; x++) {
                for (C = "",
                this.maxRows = 4,
                k = 0; k < V[1]; k++) {
                    if (S = this._daylightSavingAdjust(new Date(ee,J,e.selectedDay)),
                    D = " ui-corner-all",
                    T = "",
                    K) {
                        if (T += "<div class='ui-datepicker-group",
                        V[1] > 1)
                            switch (k) {
                            case 0:
                                T += " ui-datepicker-group-first",
                                D = " ui-corner-" + (j ? "right" : "left");
                                break;
                            case V[1] - 1:
                                T += " ui-datepicker-group-last",
                                D = " ui-corner-" + (j ? "left" : "right");
                                break;
                            default:
                                T += " ui-datepicker-group-middle",
                                D = ""
                            }
                        T += "'>"
                    }
                    for (T += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + D + "'>" + (/all|left/.test(D) && 0 === x ? j ? o : n : "") + (/all|right/.test(D) && 0 === x ? j ? n : o : "") + this._generateMonthYearHeader(e, J, ee, Q, Z, x > 0 || k > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead><tr>",
                    $ = h ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "",
                    w = 0; w < 7; w++)
                        $ += "<th scope='col'" + ((w + u + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[I = (w + u) % 7] + "'>" + p[I] + "</span></th>";
                    for (T += $ + "</tr></thead><tbody>",
                    P = this._getDaysInMonth(ee, J),
                    ee === e.selectedYear && J === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, P)),
                    A = (this._getFirstDayOfMonth(ee, J) - u + 7) % 7,
                    E = Math.ceil((A + P) / 7),
                    M = K && this.maxRows > E ? this.maxRows : E,
                    this.maxRows = M,
                    O = this._daylightSavingAdjust(new Date(ee,J,1 - A)),
                    N = 0; N < M; N++) {
                        for (T += "<tr>",
                        L = h ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(O) + "</td>" : "",
                        w = 0; w < 7; w++)
                            H = g ? g.apply(e.input ? e.input[0] : null, [O]) : [!0, ""],
                            B = (F = O.getMonth() !== J) && !_ || !H[0] || Q && O < Q || Z && O > Z,
                            L += "<td class='" + ((w + u + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (O.getTime() === S.getTime() && J === e.selectedMonth && e._keyEvent || b.getTime() === O.getTime() && b.getTime() === S.getTime() ? " " + this._dayOverClass : "") + (B ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !v ? "" : " " + H[1] + (O.getTime() === G.getTime() ? " " + this._currentClass : "") + (O.getTime() === z.getTime() ? " ui-datepicker-today" : "")) + "'" + (F && !v || !H[2] ? "" : " title='" + H[2].replace(/'/g, "&#39;") + "'") + (B ? "" : " data-handler='selectDay' data-event='click' data-month='" + O.getMonth() + "' data-year='" + O.getFullYear() + "'") + ">" + (F && !v ? "&#xa0;" : B ? "<span class='ui-state-default'>" + O.getDate() + "</span>" : "<a class='ui-state-default" + (O.getTime() === z.getTime() ? " ui-state-highlight" : "") + (O.getTime() === G.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + O.getDate() + "</a>") + "</td>",
                            O.setDate(O.getDate() + 1),
                            O = this._daylightSavingAdjust(O);
                        T += L + "</tr>"
                    }
                    ++J > 11 && (J = 0,
                    ee++),
                    C += T += "</tbody></table>" + (K ? "</div>" + (V[0] > 0 && k === V[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "")
                }
                y += C
            }
            return y += c,
            e._keyEvent = !1,
            y
        },
        _generateMonthYearHeader: function(e, t, i, n, s, o, a, r) {
            var l, c, u, h, d, p, f, m, g = this._get(e, "changeMonth"), v = this._get(e, "changeYear"), _ = this._get(e, "showMonthAfterYear"), b = "<div class='ui-datepicker-title'>", y = "";
            if (o || !g)
                y += "<span class='ui-datepicker-month'>" + a[t] + "</span>";
            else {
                for (l = n && n.getFullYear() === i,
                c = s && s.getFullYear() === i,
                y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",
                u = 0; u < 12; u++)
                    (!l || u >= n.getMonth()) && (!c || u <= s.getMonth()) && (y += "<option value='" + u + "'" + (u === t ? " selected='selected'" : "") + ">" + r[u] + "</option>");
                y += "</select>"
            }
            if (_ || (b += y + (!o && g && v ? "" : "&#xa0;")),
            !e.yearshtml)
                if (e.yearshtml = "",
                o || !v)
                    b += "<span class='ui-datepicker-year'>" + i + "</span>";
                else {
                    for (h = this._get(e, "yearRange").split(":"),
                    d = (new Date).getFullYear(),
                    p = function(e) {
                        var t = e.match(/c[+\-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? d + parseInt(e, 10) : parseInt(e, 10);
                        return isNaN(t) ? d : t
                    }
                    ,
                    f = p(h[0]),
                    m = Math.max(f, p(h[1] || "")),
                    f = n ? Math.max(f, n.getFullYear()) : f,
                    m = s ? Math.min(m, s.getFullYear()) : m,
                    e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; f <= m; f++)
                        e.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                    e.yearshtml += "</select>",
                    b += e.yearshtml,
                    e.yearshtml = null
                }
            return b += this._get(e, "yearSuffix"),
            _ && (b += (!o && g && v ? "" : "&#xa0;") + y),
            b += "</div>"
        },
        _adjustInstDate: function(e, t, i) {
            var n = e.selectedYear + ("Y" === i ? t : 0)
              , s = e.selectedMonth + ("M" === i ? t : 0)
              , o = Math.min(e.selectedDay, this._getDaysInMonth(n, s)) + ("D" === i ? t : 0)
              , a = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(n,s,o)));
            e.selectedDay = a.getDate(),
            e.drawMonth = e.selectedMonth = a.getMonth(),
            e.drawYear = e.selectedYear = a.getFullYear(),
            "M" !== i && "Y" !== i || this._notifyChange(e)
        },
        _restrictMinMax: function(e, t) {
            var i = this._getMinMaxDate(e, "min")
              , n = this._getMinMaxDate(e, "max")
              , s = i && t < i ? i : t;
            return n && s > n ? n : s
        },
        _notifyChange: function(e) {
            var t = this._get(e, "onChangeMonthYear");
            t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
        },
        _getNumberOfMonths: function(e) {
            var t = this._get(e, "numberOfMonths");
            return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
        },
        _getMinMaxDate: function(e, t) {
            return this._determineDate(e, this._get(e, t + "Date"), null)
        },
        _getDaysInMonth: function(e, t) {
            return 32 - this._daylightSavingAdjust(new Date(e,t,32)).getDate()
        },
        _getFirstDayOfMonth: function(e, t) {
            return new Date(e,t,1).getDay()
        },
        _canAdjustMonth: function(e, t, i, n) {
            var s = this._getNumberOfMonths(e)
              , o = this._daylightSavingAdjust(new Date(i,n + (t < 0 ? t : s[0] * s[1]),1));
            return t < 0 && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())),
            this._isInRange(e, o)
        },
        _isInRange: function(e, t) {
            var i, n, s = this._getMinMaxDate(e, "min"), o = this._getMinMaxDate(e, "max"), a = null, r = null, l = this._get(e, "yearRange");
            return l && (i = l.split(":"),
            n = (new Date).getFullYear(),
            a = parseInt(i[0], 10),
            r = parseInt(i[1], 10),
            i[0].match(/[+\-].*/) && (a += n),
            i[1].match(/[+\-].*/) && (r += n)),
            (!s || t.getTime() >= s.getTime()) && (!o || t.getTime() <= o.getTime()) && (!a || t.getFullYear() >= a) && (!r || t.getFullYear() <= r)
        },
        _getFormatConfig: function(e) {
            var t = this._get(e, "shortYearCutoff");
            return {
                shortYearCutoff: t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10),
                dayNamesShort: this._get(e, "dayNamesShort"),
                dayNames: this._get(e, "dayNames"),
                monthNamesShort: this._get(e, "monthNamesShort"),
                monthNames: this._get(e, "monthNames")
            }
        },
        _formatDate: function(e, t, i, n) {
            t || (e.currentDay = e.selectedDay,
            e.currentMonth = e.selectedMonth,
            e.currentYear = e.selectedYear);
            var s = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(n,i,t)) : this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));
            return this.formatDate(this._get(e, "dateFormat"), s, this._getFormatConfig(e))
        }
    }),
    e.fn.datepicker = function(t) {
        if (!this.length)
            return this;
        e.datepicker.initialized || (e(document).on("mousedown", e.datepicker._checkExternalClick),
        e.datepicker.initialized = !0),
        0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i)) : this.each((function() {
            "string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(i)) : e.datepicker._attachDatepicker(this, t)
        }
        )) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i))
    }
    ,
    e.datepicker = new f,
    e.datepicker.initialized = !1,
    e.datepicker.uuid = (new Date).getTime(),
    e.datepicker.version = "1.12.1";
    e.datepicker,
    e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var _ = !1;
    e(document).on("mouseup", (function() {
        _ = !1
    }
    ));
    e.widget("ui.mouse", {
        version: "1.12.1",
        options: {
            cancel: "input, textarea, button, select, option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.on("mousedown." + this.widgetName, (function(e) {
                return t._mouseDown(e)
            }
            )).on("click." + this.widgetName, (function(i) {
                if (!0 === e.data(i.target, t.widgetName + ".preventClickEvent"))
                    return e.removeData(i.target, t.widgetName + ".preventClickEvent"),
                    i.stopImmediatePropagation(),
                    !1
            }
            )),
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.off("." + this.widgetName),
            this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(t) {
            if (!_) {
                this._mouseMoved = !1,
                this._mouseStarted && this._mouseUp(t),
                this._mouseDownEvent = t;
                var i = this
                  , n = 1 === t.which
                  , s = !("string" != typeof this.options.cancel || !t.target.nodeName) && e(t.target).closest(this.options.cancel).length;
                return !(n && !s && this._mouseCapture(t)) || (this.mouseDelayMet = !this.options.delay,
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout((function() {
                    i.mouseDelayMet = !0
                }
                ), this.options.delay)),
                this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(t),
                !this._mouseStarted) ? (t.preventDefault(),
                !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"),
                this._mouseMoveDelegate = function(e) {
                    return i._mouseMove(e)
                }
                ,
                this._mouseUpDelegate = function(e) {
                    return i._mouseUp(e)
                }
                ,
                this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate),
                t.preventDefault(),
                _ = !0,
                !0))
            }
        },
        _mouseMove: function(t) {
            if (this._mouseMoved) {
                if (e.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button)
                    return this._mouseUp(t);
                if (!t.which)
                    if (t.originalEvent.altKey || t.originalEvent.ctrlKey || t.originalEvent.metaKey || t.originalEvent.shiftKey)
                        this.ignoreMissingWhich = !0;
                    else if (!this.ignoreMissingWhich)
                        return this._mouseUp(t)
            }
            return (t.which || t.button) && (this._mouseMoved = !0),
            this._mouseStarted ? (this._mouseDrag(t),
            t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, t),
            this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)),
            !this._mouseStarted)
        },
        _mouseUp: function(t) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted && (this._mouseStarted = !1,
            t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(t)),
            this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer),
            delete this._mouseDelayTimer),
            this.ignoreMissingWhich = !1,
            _ = !1,
            t.preventDefault()
        },
        _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    }),
    e.ui.plugin = {
        add: function(t, i, n) {
            var s, o = e.ui[t].prototype;
            for (s in n)
                o.plugins[s] = o.plugins[s] || [],
                o.plugins[s].push([i, n[s]])
        },
        call: function(e, t, i, n) {
            var s, o = e.plugins[t];
            if (o && (n || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
                for (s = 0; s < o.length; s++)
                    e.options[o[s][0]] && o[s][1].apply(e.element, i)
        }
    },
    e.ui.safeBlur = function(t) {
        t && "body" !== t.nodeName.toLowerCase() && e(t).trigger("blur")
    }
    ;
    /*!
 * jQuery UI Draggable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    e.widget("ui.draggable", e.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" === this.options.helper && this._setPositionRelative(),
            this.options.addClasses && this._addClass("ui-draggable"),
            this._setHandleClassName(),
            this._mouseInit()
        },
        _setOption: function(e, t) {
            this._super(e, t),
            "handle" === e && (this._removeHandleClassName(),
            this._setHandleClassName())
        },
        _destroy: function() {
            (this.helper || this.element).is(".ui-draggable-dragging") ? this.destroyOnClear = !0 : (this._removeHandleClassName(),
            this._mouseDestroy())
        },
        _mouseCapture: function(t) {
            var i = this.options;
            return !(this.helper || i.disabled || e(t.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(t),
            !!this.handle && (this._blurActiveElement(t),
            this._blockFrames(!0 === i.iframeFix ? "iframe" : i.iframeFix),
            !0))
        },
        _blockFrames: function(t) {
            this.iframeBlocks = this.document.find(t).map((function() {
                var t = e(this);
                return e("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]
            }
            ))
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(),
            delete this.iframeBlocks)
        },
        _blurActiveElement: function(t) {
            var i = e.ui.safeActiveElement(this.document[0]);
            e(t.target).closest(i).length || e.ui.safeBlur(i)
        },
        _mouseStart: function(t) {
            var i = this.options;
            return this.helper = this._createHelper(t),
            this._addClass(this.helper, "ui-draggable-dragging"),
            this._cacheHelperProportions(),
            e.ui.ddmanager && (e.ui.ddmanager.current = this),
            this._cacheMargins(),
            this.cssPosition = this.helper.css("position"),
            this.scrollParent = this.helper.scrollParent(!0),
            this.offsetParent = this.helper.offsetParent(),
            this.hasFixedAncestor = this.helper.parents().filter((function() {
                return "fixed" === e(this).css("position")
            }
            )).length > 0,
            this.positionAbs = this.element.offset(),
            this._refreshOffsets(t),
            this.originalPosition = this.position = this._generatePosition(t, !1),
            this.originalPageX = t.pageX,
            this.originalPageY = t.pageY,
            i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
            this._setContainment(),
            !1 === this._trigger("start", t) ? (this._clear(),
            !1) : (this._cacheHelperProportions(),
            e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t),
            this._mouseDrag(t, !0),
            e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t),
            !0)
        },
        _refreshOffsets: function(e) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            },
            this.offset.click = {
                left: e.pageX - this.offset.left,
                top: e.pageY - this.offset.top
            }
        },
        _mouseDrag: function(t, i) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()),
            this.position = this._generatePosition(t, !0),
            this.positionAbs = this._convertPositionTo("absolute"),
            !i) {
                var n = this._uiHash();
                if (!1 === this._trigger("drag", t, n))
                    return this._mouseUp(new e.Event("mouseup",t)),
                    !1;
                this.position = n.position
            }
            return this.helper[0].style.left = this.position.left + "px",
            this.helper[0].style.top = this.position.top + "px",
            e.ui.ddmanager && e.ui.ddmanager.drag(this, t),
            !1
        },
        _mouseStop: function(t) {
            var i = this
              , n = !1;
            return e.ui.ddmanager && !this.options.dropBehaviour && (n = e.ui.ddmanager.drop(this, t)),
            this.dropped && (n = this.dropped,
            this.dropped = !1),
            "invalid" === this.options.revert && !n || "valid" === this.options.revert && n || !0 === this.options.revert || e.isFunction(this.options.revert) && this.options.revert.call(this.element, n) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), (function() {
                !1 !== i._trigger("stop", t) && i._clear()
            }
            )) : !1 !== this._trigger("stop", t) && this._clear(),
            !1
        },
        _mouseUp: function(t) {
            return this._unblockFrames(),
            e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t),
            this.handleElement.is(t.target) && this.element.trigger("focus"),
            e.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new e.Event("mouseup",{
                target: this.element[0]
            })) : this._clear(),
            this
        },
        _getHandle: function(t) {
            return !this.options.handle || !!e(t.target).closest(this.element.find(this.options.handle)).length
        },
        _setHandleClassName: function() {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element,
            this._addClass(this.handleElement, "ui-draggable-handle")
        },
        _removeHandleClassName: function() {
            this._removeClass(this.handleElement, "ui-draggable-handle")
        },
        _createHelper: function(t) {
            var i = this.options
              , n = e.isFunction(i.helper)
              , s = n ? e(i.helper.apply(this.element[0], [t])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo),
            n && s[0] === this.element[0] && this._setPositionRelative(),
            s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"),
            s
        },
        _setPositionRelative: function() {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
        },
        _adjustOffsetFromHelper: function(t) {
            "string" == typeof t && (t = t.split(" ")),
            e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }),
            "left"in t && (this.offset.click.left = t.left + this.margins.left),
            "right"in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left),
            "top"in t && (this.offset.click.top = t.top + this.margins.top),
            "bottom"in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _isRootNode: function(e) {
            return /(html|body)/i.test(e.tagName) || e === this.document[0]
        },
        _getParentOffset: function() {
            var t = this.offsetParent.offset()
              , i = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== i && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(),
            t.top += this.scrollParent.scrollTop()),
            this._isRootNode(this.offsetParent[0]) && (t = {
                top: 0,
                left: 0
            }),
            {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" !== this.cssPosition)
                return {
                    top: 0,
                    left: 0
                };
            var e = this.element.position()
              , t = this._isRootNode(this.scrollParent[0]);
            return {
                top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()),
                left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft())
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t, i, n, s = this.options, o = this.document[0];
            this.relativeContainer = null,
            s.containment ? "window" !== s.containment ? "document" !== s.containment ? s.containment.constructor !== Array ? ("parent" === s.containment && (s.containment = this.helper[0].parentNode),
            (n = (i = e(s.containment))[0]) && (t = /(scroll|auto)/.test(i.css("overflow")),
            this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (t ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom],
            this.relativeContainer = i)) : this.containment = s.containment : this.containment = [0, 0, e(o).width() - this.helperProportions.width - this.margins.left, (e(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top] : this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top] : this.containment = null
        },
        _convertPositionTo: function(e, t) {
            t || (t = this.position);
            var i = "absolute" === e ? 1 : -1
              , n = this._isRootNode(this.scrollParent[0]);
            return {
                top: t.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : n ? 0 : this.offset.scroll.top) * i,
                left: t.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : n ? 0 : this.offset.scroll.left) * i
            }
        },
        _generatePosition: function(e, t) {
            var i, n, s, o, a = this.options, r = this._isRootNode(this.scrollParent[0]), l = e.pageX, c = e.pageY;
            return r && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }),
            t && (this.containment && (this.relativeContainer ? (n = this.relativeContainer.offset(),
            i = [this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top]) : i = this.containment,
            e.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left),
            e.pageY - this.offset.click.top < i[1] && (c = i[1] + this.offset.click.top),
            e.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left),
            e.pageY - this.offset.click.top > i[3] && (c = i[3] + this.offset.click.top)),
            a.grid && (s = a.grid[1] ? this.originalPageY + Math.round((c - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY,
            c = i ? s - this.offset.click.top >= i[1] || s - this.offset.click.top > i[3] ? s : s - this.offset.click.top >= i[1] ? s - a.grid[1] : s + a.grid[1] : s,
            o = a.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX,
            l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o),
            "y" === a.axis && (l = this.originalPageX),
            "x" === a.axis && (c = this.originalPageY)),
            {
                top: c - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
                left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this._removeClass(this.helper, "ui-draggable-dragging"),
            this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(),
            this.helper = null,
            this.cancelHelperRemoval = !1,
            this.destroyOnClear && this.destroy()
        },
        _trigger: function(t, i, n) {
            return n = n || this._uiHash(),
            e.ui.plugin.call(this, t, [i, n, this], !0),
            /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"),
            n.offset = this.positionAbs),
            e.Widget.prototype._trigger.call(this, t, i, n)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }),
    e.ui.plugin.add("draggable", "connectToSortable", {
        start: function(t, i, n) {
            var s = e.extend({}, i, {
                item: n.element
            });
            n.sortables = [],
            e(n.options.connectToSortable).each((function() {
                var i = e(this).sortable("instance");
                i && !i.options.disabled && (n.sortables.push(i),
                i.refreshPositions(),
                i._trigger("activate", t, s))
            }
            ))
        },
        stop: function(t, i, n) {
            var s = e.extend({}, i, {
                item: n.element
            });
            n.cancelHelperRemoval = !1,
            e.each(n.sortables, (function() {
                var e = this;
                e.isOver ? (e.isOver = 0,
                n.cancelHelperRemoval = !0,
                e.cancelHelperRemoval = !1,
                e._storedCSS = {
                    position: e.placeholder.css("position"),
                    top: e.placeholder.css("top"),
                    left: e.placeholder.css("left")
                },
                e._mouseStop(t),
                e.options.helper = e.options._helper) : (e.cancelHelperRemoval = !0,
                e._trigger("deactivate", t, s))
            }
            ))
        },
        drag: function(t, i, n) {
            e.each(n.sortables, (function() {
                var s = !1
                  , o = this;
                o.positionAbs = n.positionAbs,
                o.helperProportions = n.helperProportions,
                o.offset.click = n.offset.click,
                o._intersectsWith(o.containerCache) && (s = !0,
                e.each(n.sortables, (function() {
                    return this.positionAbs = n.positionAbs,
                    this.helperProportions = n.helperProportions,
                    this.offset.click = n.offset.click,
                    this !== o && this._intersectsWith(this.containerCache) && e.contains(o.element[0], this.element[0]) && (s = !1),
                    s
                }
                ))),
                s ? (o.isOver || (o.isOver = 1,
                n._parent = i.helper.parent(),
                o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0),
                o.options._helper = o.options.helper,
                o.options.helper = function() {
                    return i.helper[0]
                }
                ,
                t.target = o.currentItem[0],
                o._mouseCapture(t, !0),
                o._mouseStart(t, !0, !0),
                o.offset.click.top = n.offset.click.top,
                o.offset.click.left = n.offset.click.left,
                o.offset.parent.left -= n.offset.parent.left - o.offset.parent.left,
                o.offset.parent.top -= n.offset.parent.top - o.offset.parent.top,
                n._trigger("toSortable", t),
                n.dropped = o.element,
                e.each(n.sortables, (function() {
                    this.refreshPositions()
                }
                )),
                n.currentItem = n.element,
                o.fromOutside = n),
                o.currentItem && (o._mouseDrag(t),
                i.position = o.position)) : o.isOver && (o.isOver = 0,
                o.cancelHelperRemoval = !0,
                o.options._revert = o.options.revert,
                o.options.revert = !1,
                o._trigger("out", t, o._uiHash(o)),
                o._mouseStop(t, !0),
                o.options.revert = o.options._revert,
                o.options.helper = o.options._helper,
                o.placeholder && o.placeholder.remove(),
                i.helper.appendTo(n._parent),
                n._refreshOffsets(t),
                i.position = n._generatePosition(t, !0),
                n._trigger("fromSortable", t),
                n.dropped = !1,
                e.each(n.sortables, (function() {
                    this.refreshPositions()
                }
                )))
            }
            ))
        }
    }),
    e.ui.plugin.add("draggable", "cursor", {
        start: function(t, i, n) {
            var s = e("body")
              , o = n.options;
            s.css("cursor") && (o._cursor = s.css("cursor")),
            s.css("cursor", o.cursor)
        },
        stop: function(t, i, n) {
            var s = n.options;
            s._cursor && e("body").css("cursor", s._cursor)
        }
    }),
    e.ui.plugin.add("draggable", "opacity", {
        start: function(t, i, n) {
            var s = e(i.helper)
              , o = n.options;
            s.css("opacity") && (o._opacity = s.css("opacity")),
            s.css("opacity", o.opacity)
        },
        stop: function(t, i, n) {
            var s = n.options;
            s._opacity && e(i.helper).css("opacity", s._opacity)
        }
    }),
    e.ui.plugin.add("draggable", "scroll", {
        start: function(e, t, i) {
            i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)),
            i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
        },
        drag: function(t, i, n) {
            var s = n.options
              , o = !1
              , a = n.scrollParentNotHidden[0]
              , r = n.document[0];
            a !== r && "HTML" !== a.tagName ? (s.axis && "x" === s.axis || (n.overflowOffset.top + a.offsetHeight - t.pageY < s.scrollSensitivity ? a.scrollTop = o = a.scrollTop + s.scrollSpeed : t.pageY - n.overflowOffset.top < s.scrollSensitivity && (a.scrollTop = o = a.scrollTop - s.scrollSpeed)),
            s.axis && "y" === s.axis || (n.overflowOffset.left + a.offsetWidth - t.pageX < s.scrollSensitivity ? a.scrollLeft = o = a.scrollLeft + s.scrollSpeed : t.pageX - n.overflowOffset.left < s.scrollSensitivity && (a.scrollLeft = o = a.scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (t.pageY - e(r).scrollTop() < s.scrollSensitivity ? o = e(r).scrollTop(e(r).scrollTop() - s.scrollSpeed) : e(window).height() - (t.pageY - e(r).scrollTop()) < s.scrollSensitivity && (o = e(r).scrollTop(e(r).scrollTop() + s.scrollSpeed))),
            s.axis && "y" === s.axis || (t.pageX - e(r).scrollLeft() < s.scrollSensitivity ? o = e(r).scrollLeft(e(r).scrollLeft() - s.scrollSpeed) : e(window).width() - (t.pageX - e(r).scrollLeft()) < s.scrollSensitivity && (o = e(r).scrollLeft(e(r).scrollLeft() + s.scrollSpeed)))),
            !1 !== o && e.ui.ddmanager && !s.dropBehaviour && e.ui.ddmanager.prepareOffsets(n, t)
        }
    }),
    e.ui.plugin.add("draggable", "snap", {
        start: function(t, i, n) {
            var s = n.options;
            n.snapElements = [],
            e(s.snap.constructor !== String ? s.snap.items || ":data(ui-draggable)" : s.snap).each((function() {
                var t = e(this)
                  , i = t.offset();
                this !== n.element[0] && n.snapElements.push({
                    item: this,
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: i.top,
                    left: i.left
                })
            }
            ))
        },
        drag: function(t, i, n) {
            var s, o, a, r, l, c, u, h, d, p, f = n.options, m = f.snapTolerance, g = i.offset.left, v = g + n.helperProportions.width, _ = i.offset.top, b = _ + n.helperProportions.height;
            for (d = n.snapElements.length - 1; d >= 0; d--)
                c = (l = n.snapElements[d].left - n.margins.left) + n.snapElements[d].width,
                h = (u = n.snapElements[d].top - n.margins.top) + n.snapElements[d].height,
                v < l - m || g > c + m || b < u - m || _ > h + m || !e.contains(n.snapElements[d].item.ownerDocument, n.snapElements[d].item) ? (n.snapElements[d].snapping && n.options.snap.release && n.options.snap.release.call(n.element, t, e.extend(n._uiHash(), {
                    snapItem: n.snapElements[d].item
                })),
                n.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (s = Math.abs(u - b) <= m,
                o = Math.abs(h - _) <= m,
                a = Math.abs(l - v) <= m,
                r = Math.abs(c - g) <= m,
                s && (i.position.top = n._convertPositionTo("relative", {
                    top: u - n.helperProportions.height,
                    left: 0
                }).top),
                o && (i.position.top = n._convertPositionTo("relative", {
                    top: h,
                    left: 0
                }).top),
                a && (i.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: l - n.helperProportions.width
                }).left),
                r && (i.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: c
                }).left)),
                p = s || o || a || r,
                "outer" !== f.snapMode && (s = Math.abs(u - _) <= m,
                o = Math.abs(h - b) <= m,
                a = Math.abs(l - g) <= m,
                r = Math.abs(c - v) <= m,
                s && (i.position.top = n._convertPositionTo("relative", {
                    top: u,
                    left: 0
                }).top),
                o && (i.position.top = n._convertPositionTo("relative", {
                    top: h - n.helperProportions.height,
                    left: 0
                }).top),
                a && (i.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: l
                }).left),
                r && (i.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: c - n.helperProportions.width
                }).left)),
                !n.snapElements[d].snapping && (s || o || a || r || p) && n.options.snap.snap && n.options.snap.snap.call(n.element, t, e.extend(n._uiHash(), {
                    snapItem: n.snapElements[d].item
                })),
                n.snapElements[d].snapping = s || o || a || r || p)
        }
    }),
    e.ui.plugin.add("draggable", "stack", {
        start: function(t, i, n) {
            var s, o = n.options, a = e.makeArray(e(o.stack)).sort((function(t, i) {
                return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0)
            }
            ));
            a.length && (s = parseInt(e(a[0]).css("zIndex"), 10) || 0,
            e(a).each((function(t) {
                e(this).css("zIndex", s + t)
            }
            )),
            this.css("zIndex", s + a.length))
        }
    }),
    e.ui.plugin.add("draggable", "zIndex", {
        start: function(t, i, n) {
            var s = e(i.helper)
              , o = n.options;
            s.css("zIndex") && (o._zIndex = s.css("zIndex")),
            s.css("zIndex", o.zIndex)
        },
        stop: function(t, i, n) {
            var s = n.options;
            s._zIndex && e(i.helper).css("zIndex", s._zIndex)
        }
    });
    e.ui.draggable;
    /*!
 * jQuery UI Resizable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    e.widget("ui.resizable", e.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            classes: {
                "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
            },
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function(e) {
            return parseFloat(e) || 0
        },
        _isNumber: function(e) {
            return !isNaN(parseFloat(e))
        },
        _hasScroll: function(t, i) {
            if ("hidden" === e(t).css("overflow"))
                return !1;
            var n, s = i && "left" === i ? "scrollLeft" : "scrollTop";
            return t[s] > 0 || (t[s] = 1,
            n = t[s] > 0,
            t[s] = 0,
            n)
        },
        _create: function() {
            var t, i = this.options, n = this;
            this._addClass("ui-resizable"),
            e.extend(this, {
                _aspectRatio: !!i.aspectRatio,
                aspectRatio: i.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
            }),
            this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })),
            this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")),
            this.elementIsWrapper = !0,
            t = {
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom"),
                marginLeft: this.originalElement.css("marginLeft")
            },
            this.element.css(t),
            this.originalElement.css("margin", 0),
            this.originalResizeStyle = this.originalElement.css("resize"),
            this.originalElement.css("resize", "none"),
            this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })),
            this.originalElement.css(t),
            this._proportionallyResize()),
            this._setupHandles(),
            i.autoHide && e(this.element).on("mouseenter", (function() {
                i.disabled || (n._removeClass("ui-resizable-autohide"),
                n._handles.show())
            }
            )).on("mouseleave", (function() {
                i.disabled || n.resizing || (n._addClass("ui-resizable-autohide"),
                n._handles.hide())
            }
            )),
            this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var t, i = function(t) {
                e(t).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (i(this.element),
            t = this.element,
            this.originalElement.css({
                position: t.css("position"),
                width: t.outerWidth(),
                height: t.outerHeight(),
                top: t.css("top"),
                left: t.css("left")
            }).insertAfter(t),
            t.remove()),
            this.originalElement.css("resize", this.originalResizeStyle),
            i(this.originalElement),
            this
        },
        _setOption: function(e, t) {
            if (this._super(e, t),
            "handles" === e)
                this._removeHandles(),
                this._setupHandles()
        },
        _setupHandles: function() {
            var t, i, n, s, o, a = this.options, r = this;
            if (this.handles = a.handles || (e(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se"),
            this._handles = e(),
            this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"),
                n = this.handles.split(","),
                this.handles = {},
                i = 0; i < n.length; i++)
                    s = "ui-resizable-" + (t = e.trim(n[i])),
                    o = e("<div>"),
                    this._addClass(o, "ui-resizable-handle " + s),
                    o.css({
                        zIndex: a.zIndex
                    }),
                    this.handles[t] = ".ui-resizable-" + t,
                    this.element.append(o);
            this._renderAxis = function(t) {
                var i, n, s, o;
                for (i in t = t || this.element,
                this.handles)
                    this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = e(this.handles[i]),
                    this._on(this.handles[i], {
                        mousedown: r._mouseDown
                    })),
                    this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (n = e(this.handles[i], this.element),
                    o = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth(),
                    s = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""),
                    t.css(s, o),
                    this._proportionallyResize()),
                    this._handles = this._handles.add(this.handles[i])
            }
            ,
            this._renderAxis(this.element),
            this._handles = this._handles.add(this.element.find(".ui-resizable-handle")),
            this._handles.disableSelection(),
            this._handles.on("mouseover", (function() {
                r.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),
                r.axis = o && o[1] ? o[1] : "se")
            }
            )),
            a.autoHide && (this._handles.hide(),
            this._addClass("ui-resizable-autohide"))
        },
        _removeHandles: function() {
            this._handles.remove()
        },
        _mouseCapture: function(t) {
            var i, n, s = !1;
            for (i in this.handles)
                ((n = e(this.handles[i])[0]) === t.target || e.contains(n, t.target)) && (s = !0);
            return !this.options.disabled && s
        },
        _mouseStart: function(t) {
            var i, n, s, o = this.options, a = this.element;
            return this.resizing = !0,
            this._renderProxy(),
            i = this._num(this.helper.css("left")),
            n = this._num(this.helper.css("top")),
            o.containment && (i += e(o.containment).scrollLeft() || 0,
            n += e(o.containment).scrollTop() || 0),
            this.offset = this.helper.offset(),
            this.position = {
                left: i,
                top: n
            },
            this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: a.width(),
                height: a.height()
            },
            this.originalSize = this._helper ? {
                width: a.outerWidth(),
                height: a.outerHeight()
            } : {
                width: a.width(),
                height: a.height()
            },
            this.sizeDiff = {
                width: a.outerWidth() - a.width(),
                height: a.outerHeight() - a.height()
            },
            this.originalPosition = {
                left: i,
                top: n
            },
            this.originalMousePosition = {
                left: t.pageX,
                top: t.pageY
            },
            this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1,
            s = e(".ui-resizable-" + this.axis).css("cursor"),
            e("body").css("cursor", "auto" === s ? this.axis + "-resize" : s),
            this._addClass("ui-resizable-resizing"),
            this._propagate("start", t),
            !0
        },
        _mouseDrag: function(t) {
            var i, n, s = this.originalMousePosition, o = this.axis, a = t.pageX - s.left || 0, r = t.pageY - s.top || 0, l = this._change[o];
            return this._updatePrevProperties(),
            !!l && (i = l.apply(this, [t, a, r]),
            this._updateVirtualBoundaries(t.shiftKey),
            (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)),
            i = this._respectSize(i, t),
            this._updateCache(i),
            this._propagate("resize", t),
            n = this._applyChanges(),
            !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(),
            e.isEmptyObject(n) || (this._updatePrevProperties(),
            this._trigger("resize", t, this.ui()),
            this._applyChanges()),
            !1)
        },
        _mouseStop: function(t) {
            this.resizing = !1;
            var i, n, s, o, a, r, l, c = this.options, u = this;
            return this._helper && (s = (n = (i = this._proportionallyResizeElements).length && /textarea/i.test(i[0].nodeName)) && this._hasScroll(i[0], "left") ? 0 : u.sizeDiff.height,
            o = n ? 0 : u.sizeDiff.width,
            a = {
                width: u.helper.width() - o,
                height: u.helper.height() - s
            },
            r = parseFloat(u.element.css("left")) + (u.position.left - u.originalPosition.left) || null,
            l = parseFloat(u.element.css("top")) + (u.position.top - u.originalPosition.top) || null,
            c.animate || this.element.css(e.extend(a, {
                top: l,
                left: r
            })),
            u.helper.height(u.size.height),
            u.helper.width(u.size.width),
            this._helper && !c.animate && this._proportionallyResize()),
            e("body").css("cursor", "auto"),
            this._removeClass("ui-resizable-resizing"),
            this._propagate("stop", t),
            this._helper && this.helper.remove(),
            !1
        },
        _updatePrevProperties: function() {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            },
            this.prevSize = {
                width: this.size.width,
                height: this.size.height
            }
        },
        _applyChanges: function() {
            var e = {};
            return this.position.top !== this.prevPosition.top && (e.top = this.position.top + "px"),
            this.position.left !== this.prevPosition.left && (e.left = this.position.left + "px"),
            this.size.width !== this.prevSize.width && (e.width = this.size.width + "px"),
            this.size.height !== this.prevSize.height && (e.height = this.size.height + "px"),
            this.helper.css(e),
            e
        },
        _updateVirtualBoundaries: function(e) {
            var t, i, n, s, o, a = this.options;
            o = {
                minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
                maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
                minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
                maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0
            },
            (this._aspectRatio || e) && (t = o.minHeight * this.aspectRatio,
            n = o.minWidth / this.aspectRatio,
            i = o.maxHeight * this.aspectRatio,
            s = o.maxWidth / this.aspectRatio,
            t > o.minWidth && (o.minWidth = t),
            n > o.minHeight && (o.minHeight = n),
            i < o.maxWidth && (o.maxWidth = i),
            s < o.maxHeight && (o.maxHeight = s)),
            this._vBoundaries = o
        },
        _updateCache: function(e) {
            this.offset = this.helper.offset(),
            this._isNumber(e.left) && (this.position.left = e.left),
            this._isNumber(e.top) && (this.position.top = e.top),
            this._isNumber(e.height) && (this.size.height = e.height),
            this._isNumber(e.width) && (this.size.width = e.width)
        },
        _updateRatio: function(e) {
            var t = this.position
              , i = this.size
              , n = this.axis;
            return this._isNumber(e.height) ? e.width = e.height * this.aspectRatio : this._isNumber(e.width) && (e.height = e.width / this.aspectRatio),
            "sw" === n && (e.left = t.left + (i.width - e.width),
            e.top = null),
            "nw" === n && (e.top = t.top + (i.height - e.height),
            e.left = t.left + (i.width - e.width)),
            e
        },
        _respectSize: function(e) {
            var t = this._vBoundaries
              , i = this.axis
              , n = this._isNumber(e.width) && t.maxWidth && t.maxWidth < e.width
              , s = this._isNumber(e.height) && t.maxHeight && t.maxHeight < e.height
              , o = this._isNumber(e.width) && t.minWidth && t.minWidth > e.width
              , a = this._isNumber(e.height) && t.minHeight && t.minHeight > e.height
              , r = this.originalPosition.left + this.originalSize.width
              , l = this.originalPosition.top + this.originalSize.height
              , c = /sw|nw|w/.test(i)
              , u = /nw|ne|n/.test(i);
            return o && (e.width = t.minWidth),
            a && (e.height = t.minHeight),
            n && (e.width = t.maxWidth),
            s && (e.height = t.maxHeight),
            o && c && (e.left = r - t.minWidth),
            n && c && (e.left = r - t.maxWidth),
            a && u && (e.top = l - t.minHeight),
            s && u && (e.top = l - t.maxHeight),
            e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null) : e.top = null,
            e
        },
        _getPaddingPlusBorderDimensions: function(e) {
            for (var t = 0, i = [], n = [e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"), e.css("borderLeftWidth")], s = [e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft")]; t < 4; t++)
                i[t] = parseFloat(n[t]) || 0,
                i[t] += parseFloat(s[t]) || 0;
            return {
                height: i[0] + i[2],
                width: i[1] + i[3]
            }
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length)
                for (var e, t = 0, i = this.helper || this.element; t < this._proportionallyResizeElements.length; t++)
                    e = this._proportionallyResizeElements[t],
                    this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(e)),
                    e.css({
                        height: i.height() - this.outerDimensions.height || 0,
                        width: i.width() - this.outerDimensions.width || 0
                    })
        },
        _renderProxy: function() {
            var t = this.element
              , i = this.options;
            this.elementOffset = t.offset(),
            this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"),
            this._addClass(this.helper, this._helper),
            this.helper.css({
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
            }),
            this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(e, t) {
                return {
                    width: this.originalSize.width + t
                }
            },
            w: function(e, t) {
                var i = this.originalSize;
                return {
                    left: this.originalPosition.left + t,
                    width: i.width - t
                }
            },
            n: function(e, t, i) {
                var n = this.originalSize;
                return {
                    top: this.originalPosition.top + i,
                    height: n.height - i
                }
            },
            s: function(e, t, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(t, i, n) {
                return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, n]))
            },
            sw: function(t, i, n) {
                return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, n]))
            },
            ne: function(t, i, n) {
                return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, n]))
            },
            nw: function(t, i, n) {
                return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, n]))
            }
        },
        _propagate: function(t, i) {
            e.ui.plugin.call(this, t, [i, this.ui()]),
            "resize" !== t && this._trigger(t, i, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }),
    e.ui.plugin.add("resizable", "animate", {
        stop: function(t) {
            var i = e(this).resizable("instance")
              , n = i.options
              , s = i._proportionallyResizeElements
              , o = s.length && /textarea/i.test(s[0].nodeName)
              , a = o && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height
              , r = o ? 0 : i.sizeDiff.width
              , l = {
                width: i.size.width - r,
                height: i.size.height - a
            }
              , c = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null
              , u = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(e.extend(l, u && c ? {
                top: u,
                left: c
            } : {}), {
                duration: n.animateDuration,
                easing: n.animateEasing,
                step: function() {
                    var n = {
                        width: parseFloat(i.element.css("width")),
                        height: parseFloat(i.element.css("height")),
                        top: parseFloat(i.element.css("top")),
                        left: parseFloat(i.element.css("left"))
                    };
                    s && s.length && e(s[0]).css({
                        width: n.width,
                        height: n.height
                    }),
                    i._updateCache(n),
                    i._propagate("resize", t)
                }
            })
        }
    }),
    e.ui.plugin.add("resizable", "containment", {
        start: function() {
            var t, i, n, s, o, a, r, l = e(this).resizable("instance"), c = l.options, u = l.element, h = c.containment, d = h instanceof e ? h.get(0) : /parent/.test(h) ? u.parent().get(0) : h;
            d && (l.containerElement = e(d),
            /document/.test(h) || h === document ? (l.containerOffset = {
                left: 0,
                top: 0
            },
            l.containerPosition = {
                left: 0,
                top: 0
            },
            l.parentData = {
                element: e(document),
                left: 0,
                top: 0,
                width: e(document).width(),
                height: e(document).height() || document.body.parentNode.scrollHeight
            }) : (t = e(d),
            i = [],
            e(["Top", "Right", "Left", "Bottom"]).each((function(e, n) {
                i[e] = l._num(t.css("padding" + n))
            }
            )),
            l.containerOffset = t.offset(),
            l.containerPosition = t.position(),
            l.containerSize = {
                height: t.innerHeight() - i[3],
                width: t.innerWidth() - i[1]
            },
            n = l.containerOffset,
            s = l.containerSize.height,
            o = l.containerSize.width,
            a = l._hasScroll(d, "left") ? d.scrollWidth : o,
            r = l._hasScroll(d) ? d.scrollHeight : s,
            l.parentData = {
                element: d,
                left: n.left,
                top: n.top,
                width: a,
                height: r
            }))
        },
        resize: function(t) {
            var i, n, s, o, a = e(this).resizable("instance"), r = a.options, l = a.containerOffset, c = a.position, u = a._aspectRatio || t.shiftKey, h = {
                top: 0,
                left: 0
            }, d = a.containerElement, p = !0;
            d[0] !== document && /static/.test(d.css("position")) && (h = l),
            c.left < (a._helper ? l.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - l.left : a.position.left - h.left),
            u && (a.size.height = a.size.width / a.aspectRatio,
            p = !1),
            a.position.left = r.helper ? l.left : 0),
            c.top < (a._helper ? l.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - l.top : a.position.top),
            u && (a.size.width = a.size.height * a.aspectRatio,
            p = !1),
            a.position.top = a._helper ? l.top : 0),
            s = a.containerElement.get(0) === a.element.parent().get(0),
            o = /relative|absolute/.test(a.containerElement.css("position")),
            s && o ? (a.offset.left = a.parentData.left + a.position.left,
            a.offset.top = a.parentData.top + a.position.top) : (a.offset.left = a.element.offset().left,
            a.offset.top = a.element.offset().top),
            i = Math.abs(a.sizeDiff.width + (a._helper ? a.offset.left - h.left : a.offset.left - l.left)),
            n = Math.abs(a.sizeDiff.height + (a._helper ? a.offset.top - h.top : a.offset.top - l.top)),
            i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i,
            u && (a.size.height = a.size.width / a.aspectRatio,
            p = !1)),
            n + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - n,
            u && (a.size.width = a.size.height * a.aspectRatio,
            p = !1)),
            p || (a.position.left = a.prevPosition.left,
            a.position.top = a.prevPosition.top,
            a.size.width = a.prevSize.width,
            a.size.height = a.prevSize.height)
        },
        stop: function() {
            var t = e(this).resizable("instance")
              , i = t.options
              , n = t.containerOffset
              , s = t.containerPosition
              , o = t.containerElement
              , a = e(t.helper)
              , r = a.offset()
              , l = a.outerWidth() - t.sizeDiff.width
              , c = a.outerHeight() - t.sizeDiff.height;
            t._helper && !i.animate && /relative/.test(o.css("position")) && e(this).css({
                left: r.left - s.left - n.left,
                width: l,
                height: c
            }),
            t._helper && !i.animate && /static/.test(o.css("position")) && e(this).css({
                left: r.left - s.left - n.left,
                width: l,
                height: c
            })
        }
    }),
    e.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var t = e(this).resizable("instance").options;
            e(t.alsoResize).each((function() {
                var t = e(this);
                t.data("ui-resizable-alsoresize", {
                    width: parseFloat(t.width()),
                    height: parseFloat(t.height()),
                    left: parseFloat(t.css("left")),
                    top: parseFloat(t.css("top"))
                })
            }
            ))
        },
        resize: function(t, i) {
            var n = e(this).resizable("instance")
              , s = n.options
              , o = n.originalSize
              , a = n.originalPosition
              , r = {
                height: n.size.height - o.height || 0,
                width: n.size.width - o.width || 0,
                top: n.position.top - a.top || 0,
                left: n.position.left - a.left || 0
            };
            e(s.alsoResize).each((function() {
                var t = e(this)
                  , n = e(this).data("ui-resizable-alsoresize")
                  , s = {}
                  , o = t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                e.each(o, (function(e, t) {
                    var i = (n[t] || 0) + (r[t] || 0);
                    i && i >= 0 && (s[t] = i || null)
                }
                )),
                t.css(s)
            }
            ))
        },
        stop: function() {
            e(this).removeData("ui-resizable-alsoresize")
        }
    }),
    e.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var t = e(this).resizable("instance")
              , i = t.size;
            t.ghost = t.originalElement.clone(),
            t.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: i.height,
                width: i.width,
                margin: 0,
                left: 0,
                top: 0
            }),
            t._addClass(t.ghost, "ui-resizable-ghost"),
            !1 !== e.uiBackCompat && "string" == typeof t.options.ghost && t.ghost.addClass(this.options.ghost),
            t.ghost.appendTo(t.helper)
        },
        resize: function() {
            var t = e(this).resizable("instance");
            t.ghost && t.ghost.css({
                position: "relative",
                height: t.size.height,
                width: t.size.width
            })
        },
        stop: function() {
            var t = e(this).resizable("instance");
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }
    }),
    e.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var t, i = e(this).resizable("instance"), n = i.options, s = i.size, o = i.originalSize, a = i.originalPosition, r = i.axis, l = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid, c = l[0] || 1, u = l[1] || 1, h = Math.round((s.width - o.width) / c) * c, d = Math.round((s.height - o.height) / u) * u, p = o.width + h, f = o.height + d, m = n.maxWidth && n.maxWidth < p, g = n.maxHeight && n.maxHeight < f, v = n.minWidth && n.minWidth > p, _ = n.minHeight && n.minHeight > f;
            n.grid = l,
            v && (p += c),
            _ && (f += u),
            m && (p -= c),
            g && (f -= u),
            /^(se|s|e)$/.test(r) ? (i.size.width = p,
            i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p,
            i.size.height = f,
            i.position.top = a.top - d) : /^(sw)$/.test(r) ? (i.size.width = p,
            i.size.height = f,
            i.position.left = a.left - h) : ((f - u <= 0 || p - c <= 0) && (t = i._getPaddingPlusBorderDimensions(this)),
            f - u > 0 ? (i.size.height = f,
            i.position.top = a.top - d) : (f = u - t.height,
            i.size.height = f,
            i.position.top = a.top + o.height - f),
            p - c > 0 ? (i.size.width = p,
            i.position.left = a.left - h) : (p = c - t.width,
            i.size.width = p,
            i.position.left = a.left + o.width - p))
        }
    });
    e.ui.resizable;
    /*!
 * jQuery UI Dialog 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    e.widget("ui.dialog", {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            classes: {
                "ui-dialog": "ui-corner-all",
                "ui-dialog-titlebar": "ui-corner-all"
            },
            closeOnEscape: !0,
            closeText: "Close",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(t) {
                    var i = e(this).css(t).offset().top;
                    i < 0 && e(this).css("top", t.top - i)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        resizableRelatedOptions: {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            },
            this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            },
            this.originalTitle = this.element.attr("title"),
            null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle),
            this.options.disabled && (this.options.disabled = !1),
            this._createWrapper(),
            this.element.show().removeAttr("title").appendTo(this.uiDialog),
            this._addClass("ui-dialog-content", "ui-widget-content"),
            this._createTitlebar(),
            this._createButtonPane(),
            this.options.draggable && e.fn.draggable && this._makeDraggable(),
            this.options.resizable && e.fn.resizable && this._makeResizable(),
            this._isOpen = !1,
            this._trackFocus()
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t.jquery || t.nodeType) ? e(t) : this.document.find(t || "body").eq(0)
        },
        _destroy: function() {
            var e, t = this.originalPosition;
            this._untrackInstance(),
            this._destroyOverlay(),
            this.element.removeUniqueId().css(this.originalCss).detach(),
            this.uiDialog.remove(),
            this.originalTitle && this.element.attr("title", this.originalTitle),
            (e = t.parent.children().eq(t.index)).length && e[0] !== this.element[0] ? e.before(this.element) : t.parent.append(this.element)
        },
        widget: function() {
            return this.uiDialog
        },
        disable: e.noop,
        enable: e.noop,
        close: function(t) {
            var i = this;
            this._isOpen && !1 !== this._trigger("beforeClose", t) && (this._isOpen = !1,
            this._focusedElement = null,
            this._destroyOverlay(),
            this._untrackInstance(),
            this.opener.filter(":focusable").trigger("focus").length || e.ui.safeBlur(e.ui.safeActiveElement(this.document[0])),
            this._hide(this.uiDialog, this.options.hide, (function() {
                i._trigger("close", t)
            }
            )))
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function() {
            this._moveToTop()
        },
        _moveToTop: function(t, i) {
            var n = !1
              , s = this.uiDialog.siblings(".ui-front:visible").map((function() {
                return +e(this).css("z-index")
            }
            )).get()
              , o = Math.max.apply(null, s);
            return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1),
            n = !0),
            n && !i && this._trigger("focus", t),
            n
        },
        open: function() {
            var t = this;
            this._isOpen ? this._moveToTop() && this._focusTabbable() : (this._isOpen = !0,
            this.opener = e(e.ui.safeActiveElement(this.document[0])),
            this._size(),
            this._position(),
            this._createOverlay(),
            this._moveToTop(null, !0),
            this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1),
            this._show(this.uiDialog, this.options.show, (function() {
                t._focusTabbable(),
                t._trigger("focus")
            }
            )),
            this._makeFocusTarget(),
            this._trigger("open"))
        },
        _focusTabbable: function() {
            var e = this._focusedElement;
            e || (e = this.element.find("[autofocus]")),
            e.length || (e = this.element.find(":tabbable")),
            e.length || (e = this.uiDialogButtonPane.find(":tabbable")),
            e.length || (e = this.uiDialogTitlebarClose.filter(":tabbable")),
            e.length || (e = this.uiDialog),
            e.eq(0).trigger("focus")
        },
        _keepFocus: function(t) {
            function i() {
                var t = e.ui.safeActiveElement(this.document[0]);
                this.uiDialog[0] === t || e.contains(this.uiDialog[0], t) || this._focusTabbable()
            }
            t.preventDefault(),
            i.call(this),
            this._delay(i)
        },
        _createWrapper: function() {
            this.uiDialog = e("<div>").hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()),
            this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"),
            this._on(this.uiDialog, {
                keydown: function(t) {
                    if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === e.ui.keyCode.ESCAPE)
                        return t.preventDefault(),
                        void this.close(t);
                    if (t.keyCode === e.ui.keyCode.TAB && !t.isDefaultPrevented()) {
                        var i = this.uiDialog.find(":tabbable")
                          , n = i.filter(":first")
                          , s = i.filter(":last");
                        t.target !== s[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== n[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (this._delay((function() {
                            s.trigger("focus")
                        }
                        )),
                        t.preventDefault()) : (this._delay((function() {
                            n.trigger("focus")
                        }
                        )),
                        t.preventDefault())
                    }
                },
                mousedown: function(e) {
                    this._moveToTop(e) && this._focusTabbable()
                }
            }),
            this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function() {
            var t;
            this.uiDialogTitlebar = e("<div>"),
            this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"),
            this._on(this.uiDialogTitlebar, {
                mousedown: function(t) {
                    e(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
                }
            }),
            this.uiDialogTitlebarClose = e("<button type='button'></button>").button({
                label: e("<a>").text(this.options.closeText).html(),
                icon: "ui-icon-closethick",
                showLabel: !1
            }).appendTo(this.uiDialogTitlebar),
            this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"),
            this._on(this.uiDialogTitlebarClose, {
                click: function(e) {
                    e.preventDefault(),
                    this.close(e)
                }
            }),
            t = e("<span>").uniqueId().prependTo(this.uiDialogTitlebar),
            this._addClass(t, "ui-dialog-title"),
            this._title(t),
            this.uiDialogTitlebar.prependTo(this.uiDialog),
            this.uiDialog.attr({
                "aria-labelledby": t.attr("id")
            })
        },
        _title: function(e) {
            this.options.title ? e.text(this.options.title) : e.html("&#160;")
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = e("<div>"),
            this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"),
            this.uiButtonSet = e("<div>").appendTo(this.uiDialogButtonPane),
            this._addClass(this.uiButtonSet, "ui-dialog-buttonset"),
            this._createButtons()
        },
        _createButtons: function() {
            var t = this
              , i = this.options.buttons;
            this.uiDialogButtonPane.remove(),
            this.uiButtonSet.empty(),
            e.isEmptyObject(i) || e.isArray(i) && !i.length ? this._removeClass(this.uiDialog, "ui-dialog-buttons") : (e.each(i, (function(i, n) {
                var s, o;
                n = e.isFunction(n) ? {
                    click: n,
                    text: i
                } : n,
                n = e.extend({
                    type: "button"
                }, n),
                s = n.click,
                o = {
                    icon: n.icon,
                    iconPosition: n.iconPosition,
                    showLabel: n.showLabel,
                    icons: n.icons,
                    text: n.text
                },
                delete n.click,
                delete n.icon,
                delete n.iconPosition,
                delete n.showLabel,
                delete n.icons,
                "boolean" == typeof n.text && delete n.text,
                e("<button></button>", n).button(o).appendTo(t.uiButtonSet).on("click", (function() {
                    s.apply(t.element[0], arguments)
                }
                ))
            }
            )),
            this._addClass(this.uiDialog, "ui-dialog-buttons"),
            this.uiDialogButtonPane.appendTo(this.uiDialog))
        },
        _makeDraggable: function() {
            var t = this
              , i = this.options;
            function n(e) {
                return {
                    position: e.position,
                    offset: e.offset
                }
            }
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(i, s) {
                    t._addClass(e(this), "ui-dialog-dragging"),
                    t._blockFrames(),
                    t._trigger("dragStart", i, n(s))
                },
                drag: function(e, i) {
                    t._trigger("drag", e, n(i))
                },
                stop: function(s, o) {
                    var a = o.offset.left - t.document.scrollLeft()
                      , r = o.offset.top - t.document.scrollTop();
                    i.position = {
                        my: "left top",
                        at: "left" + (a >= 0 ? "+" : "") + a + " top" + (r >= 0 ? "+" : "") + r,
                        of: t.window
                    },
                    t._removeClass(e(this), "ui-dialog-dragging"),
                    t._unblockFrames(),
                    t._trigger("dragStop", s, n(o))
                }
            })
        },
        _makeResizable: function() {
            var t = this
              , i = this.options
              , n = i.resizable
              , s = this.uiDialog.css("position")
              , o = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
            function a(e) {
                return {
                    originalPosition: e.originalPosition,
                    originalSize: e.originalSize,
                    position: e.position,
                    size: e.size
                }
            }
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: i.maxWidth,
                maxHeight: i.maxHeight,
                minWidth: i.minWidth,
                minHeight: this._minHeight(),
                handles: o,
                start: function(i, n) {
                    t._addClass(e(this), "ui-dialog-resizing"),
                    t._blockFrames(),
                    t._trigger("resizeStart", i, a(n))
                },
                resize: function(e, i) {
                    t._trigger("resize", e, a(i))
                },
                stop: function(n, s) {
                    var o = t.uiDialog.offset()
                      , r = o.left - t.document.scrollLeft()
                      , l = o.top - t.document.scrollTop();
                    i.height = t.uiDialog.height(),
                    i.width = t.uiDialog.width(),
                    i.position = {
                        my: "left top",
                        at: "left" + (r >= 0 ? "+" : "") + r + " top" + (l >= 0 ? "+" : "") + l,
                        of: t.window
                    },
                    t._removeClass(e(this), "ui-dialog-resizing"),
                    t._unblockFrames(),
                    t._trigger("resizeStop", n, a(s))
                }
            }).css("position", s)
        },
        _trackFocus: function() {
            this._on(this.widget(), {
                focusin: function(t) {
                    this._makeFocusTarget(),
                    this._focusedElement = e(t.target)
                }
            })
        },
        _makeFocusTarget: function() {
            this._untrackInstance(),
            this._trackingInstances().unshift(this)
        },
        _untrackInstance: function() {
            var t = this._trackingInstances()
              , i = e.inArray(this, t);
            -1 !== i && t.splice(i, 1)
        },
        _trackingInstances: function() {
            var e = this.document.data("ui-dialog-instances");
            return e || (e = [],
            this.document.data("ui-dialog-instances", e)),
            e
        },
        _minHeight: function() {
            var e = this.options;
            return "auto" === e.height ? e.minHeight : Math.min(e.minHeight, e.height)
        },
        _position: function() {
            var e = this.uiDialog.is(":visible");
            e || this.uiDialog.show(),
            this.uiDialog.position(this.options.position),
            e || this.uiDialog.hide()
        },
        _setOptions: function(t) {
            var i = this
              , n = !1
              , s = {};
            e.each(t, (function(e, t) {
                i._setOption(e, t),
                e in i.sizeRelatedOptions && (n = !0),
                e in i.resizableRelatedOptions && (s[e] = t)
            }
            )),
            n && (this._size(),
            this._position()),
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", s)
        },
        _setOption: function(t, i) {
            var n, s, o = this.uiDialog;
            "disabled" !== t && (this._super(t, i),
            "appendTo" === t && this.uiDialog.appendTo(this._appendTo()),
            "buttons" === t && this._createButtons(),
            "closeText" === t && this.uiDialogTitlebarClose.button({
                label: e("<a>").text("" + this.options.closeText).html()
            }),
            "draggable" === t && ((n = o.is(":data(ui-draggable)")) && !i && o.draggable("destroy"),
            !n && i && this._makeDraggable()),
            "position" === t && this._position(),
            "resizable" === t && ((s = o.is(":data(ui-resizable)")) && !i && o.resizable("destroy"),
            s && "string" == typeof i && o.resizable("option", "handles", i),
            s || !1 === i || this._makeResizable()),
            "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function() {
            var e, t, i, n = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }),
            n.minWidth > n.width && (n.width = n.minWidth),
            e = this.uiDialog.css({
                height: "auto",
                width: n.width
            }).outerHeight(),
            t = Math.max(0, n.minHeight - e),
            i = "number" == typeof n.maxHeight ? Math.max(0, n.maxHeight - e) : "none",
            "auto" === n.height ? this.element.css({
                minHeight: t,
                maxHeight: i,
                height: "auto"
            }) : this.element.height(Math.max(0, n.height - e)),
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map((function() {
                var t = e(this);
                return e("<div>").css({
                    position: "absolute",
                    width: t.outerWidth(),
                    height: t.outerHeight()
                }).appendTo(t.parent()).offset(t.offset())[0]
            }
            ))
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(),
            delete this.iframeBlocks)
        },
        _allowInteraction: function(t) {
            return !!e(t.target).closest(".ui-dialog").length || !!e(t.target).closest(".ui-datepicker").length
        },
        _createOverlay: function() {
            if (this.options.modal) {
                var t = !0;
                this._delay((function() {
                    t = !1
                }
                )),
                this.document.data("ui-dialog-overlays") || this._on(this.document, {
                    focusin: function(e) {
                        t || this._allowInteraction(e) || (e.preventDefault(),
                        this._trackingInstances()[0]._focusTabbable())
                    }
                }),
                this.overlay = e("<div>").appendTo(this._appendTo()),
                this._addClass(this.overlay, null, "ui-widget-overlay ui-front"),
                this._on(this.overlay, {
                    mousedown: "_keepFocus"
                }),
                this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
            }
        },
        _destroyOverlay: function() {
            if (this.options.modal && this.overlay) {
                var e = this.document.data("ui-dialog-overlays") - 1;
                e ? this.document.data("ui-dialog-overlays", e) : (this._off(this.document, "focusin"),
                this.document.removeData("ui-dialog-overlays")),
                this.overlay.remove(),
                this.overlay = null
            }
        }
    }),
    !1 !== e.uiBackCompat && e.widget("ui.dialog", e.ui.dialog, {
        options: {
            dialogClass: ""
        },
        _createWrapper: function() {
            this._super(),
            this.uiDialog.addClass(this.options.dialogClass)
        },
        _setOption: function(e, t) {
            "dialogClass" === e && this.uiDialog.removeClass(this.options.dialogClass).addClass(t),
            this._superApply(arguments)
        }
    });
    e.ui.dialog;
    /*!
 * jQuery UI Droppable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    e.widget("ui.droppable", {
        version: "1.12.1",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            addClasses: !0,
            greedy: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var t, i = this.options, n = i.accept;
            this.isover = !1,
            this.isout = !0,
            this.accept = e.isFunction(n) ? n : function(e) {
                return e.is(n)
            }
            ,
            this.proportions = function() {
                if (!arguments.length)
                    return t || (t = {
                        width: this.element[0].offsetWidth,
                        height: this.element[0].offsetHeight
                    });
                t = arguments[0]
            }
            ,
            this._addToManager(i.scope),
            i.addClasses && this._addClass("ui-droppable")
        },
        _addToManager: function(t) {
            e.ui.ddmanager.droppables[t] = e.ui.ddmanager.droppables[t] || [],
            e.ui.ddmanager.droppables[t].push(this)
        },
        _splice: function(e) {
            for (var t = 0; t < e.length; t++)
                e[t] === this && e.splice(t, 1)
        },
        _destroy: function() {
            var t = e.ui.ddmanager.droppables[this.options.scope];
            this._splice(t)
        },
        _setOption: function(t, i) {
            if ("accept" === t)
                this.accept = e.isFunction(i) ? i : function(e) {
                    return e.is(i)
                }
                ;
            else if ("scope" === t) {
                var n = e.ui.ddmanager.droppables[this.options.scope];
                this._splice(n),
                this._addToManager(i)
            }
            this._super(t, i)
        },
        _activate: function(t) {
            var i = e.ui.ddmanager.current;
            this._addActiveClass(),
            i && this._trigger("activate", t, this.ui(i))
        },
        _deactivate: function(t) {
            var i = e.ui.ddmanager.current;
            this._removeActiveClass(),
            i && this._trigger("deactivate", t, this.ui(i))
        },
        _over: function(t) {
            var i = e.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(),
            this._trigger("over", t, this.ui(i)))
        },
        _out: function(t) {
            var i = e.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(),
            this._trigger("out", t, this.ui(i)))
        },
        _drop: function(t, i) {
            var n = i || e.ui.ddmanager.current
              , s = !1;
            return !(!n || (n.currentItem || n.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each((function() {
                var i = e(this).droppable("instance");
                if (i.options.greedy && !i.options.disabled && i.options.scope === n.options.scope && i.accept.call(i.element[0], n.currentItem || n.element) && b(n, e.extend(i, {
                    offset: i.element.offset()
                }), i.options.tolerance, t))
                    return s = !0,
                    !1
            }
            )),
            !s && (!!this.accept.call(this.element[0], n.currentItem || n.element) && (this._removeActiveClass(),
            this._removeHoverClass(),
            this._trigger("drop", t, this.ui(n)),
            this.element)))
        },
        ui: function(e) {
            return {
                draggable: e.currentItem || e.element,
                helper: e.helper,
                position: e.position,
                offset: e.positionAbs
            }
        },
        _addHoverClass: function() {
            this._addClass("ui-droppable-hover")
        },
        _removeHoverClass: function() {
            this._removeClass("ui-droppable-hover")
        },
        _addActiveClass: function() {
            this._addClass("ui-droppable-active")
        },
        _removeActiveClass: function() {
            this._removeClass("ui-droppable-active")
        }
    });
    var b = e.ui.intersect = function() {
        function e(e, t, i) {
            return e >= t && e < t + i
        }
        return function(t, i, n, s) {
            if (!i.offset)
                return !1;
            var o = (t.positionAbs || t.position.absolute).left + t.margins.left
              , a = (t.positionAbs || t.position.absolute).top + t.margins.top
              , r = o + t.helperProportions.width
              , l = a + t.helperProportions.height
              , c = i.offset.left
              , u = i.offset.top
              , h = c + i.proportions().width
              , d = u + i.proportions().height;
            switch (n) {
            case "fit":
                return c <= o && r <= h && u <= a && l <= d;
            case "intersect":
                return c < o + t.helperProportions.width / 2 && r - t.helperProportions.width / 2 < h && u < a + t.helperProportions.height / 2 && l - t.helperProportions.height / 2 < d;
            case "pointer":
                return e(s.pageY, u, i.proportions().height) && e(s.pageX, c, i.proportions().width);
            case "touch":
                return (a >= u && a <= d || l >= u && l <= d || a < u && l > d) && (o >= c && o <= h || r >= c && r <= h || o < c && r > h);
            default:
                return !1
            }
        }
    }();
    e.ui.ddmanager = {
        current: null,
        droppables: {
            default: []
        },
        prepareOffsets: function(t, i) {
            var n, s, o = e.ui.ddmanager.droppables[t.options.scope] || [], a = i ? i.type : null, r = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
            e: for (n = 0; n < o.length; n++)
                if (!(o[n].options.disabled || t && !o[n].accept.call(o[n].element[0], t.currentItem || t.element))) {
                    for (s = 0; s < r.length; s++)
                        if (r[s] === o[n].element[0]) {
                            o[n].proportions().height = 0;
                            continue e
                        }
                    o[n].visible = "none" !== o[n].element.css("display"),
                    o[n].visible && ("mousedown" === a && o[n]._activate.call(o[n], i),
                    o[n].offset = o[n].element.offset(),
                    o[n].proportions({
                        width: o[n].element[0].offsetWidth,
                        height: o[n].element[0].offsetHeight
                    }))
                }
        },
        drop: function(t, i) {
            var n = !1;
            return e.each((e.ui.ddmanager.droppables[t.options.scope] || []).slice(), (function() {
                this.options && (!this.options.disabled && this.visible && b(t, this, this.options.tolerance, i) && (n = this._drop.call(this, i) || n),
                !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0,
                this.isover = !1,
                this._deactivate.call(this, i)))
            }
            )),
            n
        },
        dragStart: function(t, i) {
            t.element.parentsUntil("body").on("scroll.droppable", (function() {
                t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
            }
            ))
        },
        drag: function(t, i) {
            t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, i),
            e.each(e.ui.ddmanager.droppables[t.options.scope] || [], (function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var n, s, o, a = b(t, this, this.options.tolerance, i), r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
                    r && (this.options.greedy && (s = this.options.scope,
                    (o = this.element.parents(":data(ui-droppable)").filter((function() {
                        return e(this).droppable("instance").options.scope === s
                    }
                    ))).length && ((n = e(o[0]).droppable("instance")).greedyChild = "isover" === r)),
                    n && "isover" === r && (n.isover = !1,
                    n.isout = !0,
                    n._out.call(n, i)),
                    this[r] = !0,
                    this["isout" === r ? "isover" : "isout"] = !1,
                    this["isover" === r ? "_over" : "_out"].call(this, i),
                    n && "isout" === r && (n.isout = !1,
                    n.isover = !0,
                    n._over.call(n, i)))
                }
            }
            ))
        },
        dragStop: function(t, i) {
            t.element.parentsUntil("body").off("scroll.droppable"),
            t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
        }
    },
    !1 !== e.uiBackCompat && e.widget("ui.droppable", e.ui.droppable, {
        options: {
            hoverClass: !1,
            activeClass: !1
        },
        _addActiveClass: function() {
            this._super(),
            this.options.activeClass && this.element.addClass(this.options.activeClass)
        },
        _removeActiveClass: function() {
            this._super(),
            this.options.activeClass && this.element.removeClass(this.options.activeClass)
        },
        _addHoverClass: function() {
            this._super(),
            this.options.hoverClass && this.element.addClass(this.options.hoverClass)
        },
        _removeHoverClass: function() {
            this._super(),
            this.options.hoverClass && this.element.removeClass(this.options.hoverClass)
        }
    });
    e.ui.droppable,
    e.widget("ui.progressbar", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-progressbar": "ui-corner-all",
                "ui-progressbar-value": "ui-corner-left",
                "ui-progressbar-complete": "ui-corner-right"
            },
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function() {
            this.oldValue = this.options.value = this._constrainedValue(),
            this.element.attr({
                role: "progressbar",
                "aria-valuemin": this.min
            }),
            this._addClass("ui-progressbar", "ui-widget ui-widget-content"),
            this.valueDiv = e("<div>").appendTo(this.element),
            this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"),
            this._refreshValue()
        },
        _destroy: function() {
            this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"),
            this.valueDiv.remove()
        },
        value: function(e) {
            if (void 0 === e)
                return this.options.value;
            this.options.value = this._constrainedValue(e),
            this._refreshValue()
        },
        _constrainedValue: function(e) {
            return void 0 === e && (e = this.options.value),
            this.indeterminate = !1 === e,
            "number" != typeof e && (e = 0),
            !this.indeterminate && Math.min(this.options.max, Math.max(this.min, e))
        },
        _setOptions: function(e) {
            var t = e.value;
            delete e.value,
            this._super(e),
            this.options.value = this._constrainedValue(t),
            this._refreshValue()
        },
        _setOption: function(e, t) {
            "max" === e && (t = Math.max(this.min, t)),
            this._super(e, t)
        },
        _setOptionDisabled: function(e) {
            this._super(e),
            this.element.attr("aria-disabled", e),
            this._toggleClass(null, "ui-state-disabled", !!e)
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function() {
            var t = this.options.value
              , i = this._percentage();
            this.valueDiv.toggle(this.indeterminate || t > this.min).width(i.toFixed(0) + "%"),
            this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, t === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate),
            this.indeterminate ? (this.element.removeAttr("aria-valuenow"),
            this.overlayDiv || (this.overlayDiv = e("<div>").appendTo(this.valueDiv),
            this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": t
            }),
            this.overlayDiv && (this.overlayDiv.remove(),
            this.overlayDiv = null)),
            this.oldValue !== t && (this.oldValue = t,
            this._trigger("change")),
            t === this.options.max && this._trigger("complete")
        }
    }),
    e.widget("ui.selectable", e.ui.mouse, {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var t = this;
            this._addClass("ui-selectable"),
            this.dragged = !1,
            this.refresh = function() {
                t.elementPos = e(t.element[0]).offset(),
                t.selectees = e(t.options.filter, t.element[0]),
                t._addClass(t.selectees, "ui-selectee"),
                t.selectees.each((function() {
                    var i = e(this)
                      , n = i.offset()
                      , s = {
                        left: n.left - t.elementPos.left,
                        top: n.top - t.elementPos.top
                    };
                    e.data(this, "selectable-item", {
                        element: this,
                        $element: i,
                        left: s.left,
                        top: s.top,
                        right: s.left + i.outerWidth(),
                        bottom: s.top + i.outerHeight(),
                        startselected: !1,
                        selected: i.hasClass("ui-selected"),
                        selecting: i.hasClass("ui-selecting"),
                        unselecting: i.hasClass("ui-unselecting")
                    })
                }
                ))
            }
            ,
            this.refresh(),
            this._mouseInit(),
            this.helper = e("<div>"),
            this._addClass(this.helper, "ui-selectable-helper")
        },
        _destroy: function() {
            this.selectees.removeData("selectable-item"),
            this._mouseDestroy()
        },
        _mouseStart: function(t) {
            var i = this
              , n = this.options;
            this.opos = [t.pageX, t.pageY],
            this.elementPos = e(this.element[0]).offset(),
            this.options.disabled || (this.selectees = e(n.filter, this.element[0]),
            this._trigger("start", t),
            e(n.appendTo).append(this.helper),
            this.helper.css({
                left: t.pageX,
                top: t.pageY,
                width: 0,
                height: 0
            }),
            n.autoRefresh && this.refresh(),
            this.selectees.filter(".ui-selected").each((function() {
                var n = e.data(this, "selectable-item");
                n.startselected = !0,
                t.metaKey || t.ctrlKey || (i._removeClass(n.$element, "ui-selected"),
                n.selected = !1,
                i._addClass(n.$element, "ui-unselecting"),
                n.unselecting = !0,
                i._trigger("unselecting", t, {
                    unselecting: n.element
                }))
            }
            )),
            e(t.target).parents().addBack().each((function() {
                var n, s = e.data(this, "selectable-item");
                if (s)
                    return n = !t.metaKey && !t.ctrlKey || !s.$element.hasClass("ui-selected"),
                    i._removeClass(s.$element, n ? "ui-unselecting" : "ui-selected")._addClass(s.$element, n ? "ui-selecting" : "ui-unselecting"),
                    s.unselecting = !n,
                    s.selecting = n,
                    s.selected = n,
                    n ? i._trigger("selecting", t, {
                        selecting: s.element
                    }) : i._trigger("unselecting", t, {
                        unselecting: s.element
                    }),
                    !1
            }
            )))
        },
        _mouseDrag: function(t) {
            if (this.dragged = !0,
            !this.options.disabled) {
                var i, n = this, s = this.options, o = this.opos[0], a = this.opos[1], r = t.pageX, l = t.pageY;
                return o > r && (i = r,
                r = o,
                o = i),
                a > l && (i = l,
                l = a,
                a = i),
                this.helper.css({
                    left: o,
                    top: a,
                    width: r - o,
                    height: l - a
                }),
                this.selectees.each((function() {
                    var i = e.data(this, "selectable-item")
                      , c = !1
                      , u = {};
                    i && i.element !== n.element[0] && (u.left = i.left + n.elementPos.left,
                    u.right = i.right + n.elementPos.left,
                    u.top = i.top + n.elementPos.top,
                    u.bottom = i.bottom + n.elementPos.top,
                    "touch" === s.tolerance ? c = !(u.left > r || u.right < o || u.top > l || u.bottom < a) : "fit" === s.tolerance && (c = u.left > o && u.right < r && u.top > a && u.bottom < l),
                    c ? (i.selected && (n._removeClass(i.$element, "ui-selected"),
                    i.selected = !1),
                    i.unselecting && (n._removeClass(i.$element, "ui-unselecting"),
                    i.unselecting = !1),
                    i.selecting || (n._addClass(i.$element, "ui-selecting"),
                    i.selecting = !0,
                    n._trigger("selecting", t, {
                        selecting: i.element
                    }))) : (i.selecting && ((t.metaKey || t.ctrlKey) && i.startselected ? (n._removeClass(i.$element, "ui-selecting"),
                    i.selecting = !1,
                    n._addClass(i.$element, "ui-selected"),
                    i.selected = !0) : (n._removeClass(i.$element, "ui-selecting"),
                    i.selecting = !1,
                    i.startselected && (n._addClass(i.$element, "ui-unselecting"),
                    i.unselecting = !0),
                    n._trigger("unselecting", t, {
                        unselecting: i.element
                    }))),
                    i.selected && (t.metaKey || t.ctrlKey || i.startselected || (n._removeClass(i.$element, "ui-selected"),
                    i.selected = !1,
                    n._addClass(i.$element, "ui-unselecting"),
                    i.unselecting = !0,
                    n._trigger("unselecting", t, {
                        unselecting: i.element
                    })))))
                }
                )),
                !1
            }
        },
        _mouseStop: function(t) {
            var i = this;
            return this.dragged = !1,
            e(".ui-unselecting", this.element[0]).each((function() {
                var n = e.data(this, "selectable-item");
                i._removeClass(n.$element, "ui-unselecting"),
                n.unselecting = !1,
                n.startselected = !1,
                i._trigger("unselected", t, {
                    unselected: n.element
                })
            }
            )),
            e(".ui-selecting", this.element[0]).each((function() {
                var n = e.data(this, "selectable-item");
                i._removeClass(n.$element, "ui-selecting")._addClass(n.$element, "ui-selected"),
                n.selecting = !1,
                n.selected = !0,
                n.startselected = !0,
                i._trigger("selected", t, {
                    selected: n.element
                })
            }
            )),
            this._trigger("stop", t),
            this.helper.remove(),
            !1
        }
    }),
    e.widget("ui.selectmenu", [e.ui.formResetMixin, {
        version: "1.12.1",
        defaultElement: "<select>",
        options: {
            appendTo: null,
            classes: {
                "ui-selectmenu-button-open": "ui-corner-top",
                "ui-selectmenu-button-closed": "ui-corner-all"
            },
            disabled: null,
            icons: {
                button: "ui-icon-triangle-1-s"
            },
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            width: !1,
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null
        },
        _create: function() {
            var t = this.element.uniqueId().attr("id");
            this.ids = {
                element: t,
                button: t + "-button",
                menu: t + "-menu"
            },
            this._drawButton(),
            this._drawMenu(),
            this._bindFormResetHandler(),
            this._rendered = !1,
            this.menuItems = e()
        },
        _drawButton: function() {
            var t, i = this, n = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
            this.labels = this.element.labels().attr("for", this.ids.button),
            this._on(this.labels, {
                click: function(e) {
                    this.button.focus(),
                    e.preventDefault()
                }
            }),
            this.element.hide(),
            this.button = e("<span>", {
                tabindex: this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true",
                title: this.element.attr("title")
            }).insertAfter(this.element),
            this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"),
            t = e("<span>").appendTo(this.button),
            this._addClass(t, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button),
            this.buttonItem = this._renderButtonItem(n).appendTo(this.button),
            !1 !== this.options.width && this._resizeButton(),
            this._on(this.button, this._buttonEvents),
            this.button.one("focusin", (function() {
                i._rendered || i._refreshMenu()
            }
            ))
        },
        _drawMenu: function() {
            var t = this;
            this.menu = e("<ul>", {
                "aria-hidden": "true",
                "aria-labelledby": this.ids.button,
                id: this.ids.menu
            }),
            this.menuWrap = e("<div>").append(this.menu),
            this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"),
            this.menuWrap.appendTo(this._appendTo()),
            this.menuInstance = this.menu.menu({
                classes: {
                    "ui-menu": "ui-corner-bottom"
                },
                role: "listbox",
                select: function(e, i) {
                    e.preventDefault(),
                    t._setSelection(),
                    t._select(i.item.data("ui-selectmenu-item"), e)
                },
                focus: function(e, i) {
                    var n = i.item.data("ui-selectmenu-item");
                    null != t.focusIndex && n.index !== t.focusIndex && (t._trigger("focus", e, {
                        item: n
                    }),
                    t.isOpen || t._select(n, e)),
                    t.focusIndex = n.index,
                    t.button.attr("aria-activedescendant", t.menuItems.eq(n.index).attr("id"))
                }
            }).menu("instance"),
            this.menuInstance._off(this.menu, "mouseleave"),
            this.menuInstance._closeOnDocumentClick = function() {
                return !1
            }
            ,
            this.menuInstance._isDivider = function() {
                return !1
            }
        },
        refresh: function() {
            this._refreshMenu(),
            this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})),
            null === this.options.width && this._resizeButton()
        },
        _refreshMenu: function() {
            var e, t = this.element.find("option");
            this.menu.empty(),
            this._parseOptions(t),
            this._renderMenu(this.menu, this.items),
            this.menuInstance.refresh(),
            this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"),
            this._rendered = !0,
            t.length && (e = this._getSelectedItem(),
            this.menuInstance.focus(null, e),
            this._setAria(e.data("ui-selectmenu-item")),
            this._setOption("disabled", this.element.prop("disabled")))
        },
        open: function(e) {
            this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"),
            this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(),
            this.menuItems.length && (this.isOpen = !0,
            this._toggleAttr(),
            this._resizeMenu(),
            this._position(),
            this._on(this.document, this._documentClick),
            this._trigger("open", e)))
        },
        _position: function() {
            this.menuWrap.position(e.extend({
                of: this.button
            }, this.options.position))
        },
        close: function(e) {
            this.isOpen && (this.isOpen = !1,
            this._toggleAttr(),
            this.range = null,
            this._off(this.document),
            this._trigger("close", e))
        },
        widget: function() {
            return this.button
        },
        menuWidget: function() {
            return this.menu
        },
        _renderButtonItem: function(t) {
            var i = e("<span>");
            return this._setText(i, t.label),
            this._addClass(i, "ui-selectmenu-text"),
            i
        },
        _renderMenu: function(t, i) {
            var n = this
              , s = "";
            e.each(i, (function(i, o) {
                var a;
                o.optgroup !== s && (a = e("<li>", {
                    text: o.optgroup
                }),
                n._addClass(a, "ui-selectmenu-optgroup", "ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")),
                a.appendTo(t),
                s = o.optgroup),
                n._renderItemData(t, o)
            }
            ))
        },
        _renderItemData: function(e, t) {
            return this._renderItem(e, t).data("ui-selectmenu-item", t)
        },
        _renderItem: function(t, i) {
            var n = e("<li>")
              , s = e("<div>", {
                title: i.element.attr("title")
            });
            return i.disabled && this._addClass(n, null, "ui-state-disabled"),
            this._setText(s, i.label),
            n.append(s).appendTo(t)
        },
        _setText: function(e, t) {
            t ? e.text(t) : e.html("&#160;")
        },
        _move: function(e, t) {
            var i, n, s = ".ui-menu-item";
            this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"),
            s += ":not(.ui-state-disabled)"),
            (n = "first" === e || "last" === e ? i["first" === e ? "prevAll" : "nextAll"](s).eq(-1) : i[e + "All"](s).eq(0)).length && this.menuInstance.focus(t, n)
        },
        _getSelectedItem: function() {
            return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
        },
        _toggle: function(e) {
            this[this.isOpen ? "close" : "open"](e)
        },
        _setSelection: function() {
            var e;
            this.range && (window.getSelection ? ((e = window.getSelection()).removeAllRanges(),
            e.addRange(this.range)) : this.range.select(),
            this.button.focus())
        },
        _documentClick: {
            mousedown: function(t) {
                this.isOpen && (e(t.target).closest(".ui-selectmenu-menu, #" + e.ui.escapeSelector(this.ids.button)).length || this.close(t))
            }
        },
        _buttonEvents: {
            mousedown: function() {
                var e;
                window.getSelection ? (e = window.getSelection()).rangeCount && (this.range = e.getRangeAt(0)) : this.range = document.selection.createRange()
            },
            click: function(e) {
                this._setSelection(),
                this._toggle(e)
            },
            keydown: function(t) {
                var i = !0;
                switch (t.keyCode) {
                case e.ui.keyCode.TAB:
                case e.ui.keyCode.ESCAPE:
                    this.close(t),
                    i = !1;
                    break;
                case e.ui.keyCode.ENTER:
                    this.isOpen && this._selectFocusedItem(t);
                    break;
                case e.ui.keyCode.UP:
                    t.altKey ? this._toggle(t) : this._move("prev", t);
                    break;
                case e.ui.keyCode.DOWN:
                    t.altKey ? this._toggle(t) : this._move("next", t);
                    break;
                case e.ui.keyCode.SPACE:
                    this.isOpen ? this._selectFocusedItem(t) : this._toggle(t);
                    break;
                case e.ui.keyCode.LEFT:
                    this._move("prev", t);
                    break;
                case e.ui.keyCode.RIGHT:
                    this._move("next", t);
                    break;
                case e.ui.keyCode.HOME:
                case e.ui.keyCode.PAGE_UP:
                    this._move("first", t);
                    break;
                case e.ui.keyCode.END:
                case e.ui.keyCode.PAGE_DOWN:
                    this._move("last", t);
                    break;
                default:
                    this.menu.trigger(t),
                    i = !1
                }
                i && t.preventDefault()
            }
        },
        _selectFocusedItem: function(e) {
            var t = this.menuItems.eq(this.focusIndex).parent("li");
            t.hasClass("ui-state-disabled") || this._select(t.data("ui-selectmenu-item"), e)
        },
        _select: function(e, t) {
            var i = this.element[0].selectedIndex;
            this.element[0].selectedIndex = e.index,
            this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(e)),
            this._setAria(e),
            this._trigger("select", t, {
                item: e
            }),
            e.index !== i && this._trigger("change", t, {
                item: e
            }),
            this.close(t)
        },
        _setAria: function(e) {
            var t = this.menuItems.eq(e.index).attr("id");
            this.button.attr({
                "aria-labelledby": t,
                "aria-activedescendant": t
            }),
            this.menu.attr("aria-activedescendant", t)
        },
        _setOption: function(e, t) {
            if ("icons" === e) {
                var i = this.button.find("span.ui-icon");
                this._removeClass(i, null, this.options.icons.button)._addClass(i, null, t.button)
            }
            this._super(e, t),
            "appendTo" === e && this.menuWrap.appendTo(this._appendTo()),
            "width" === e && this._resizeButton()
        },
        _setOptionDisabled: function(e) {
            this._super(e),
            this.menuInstance.option("disabled", e),
            this.button.attr("aria-disabled", e),
            this._toggleClass(this.button, null, "ui-state-disabled", e),
            this.element.prop("disabled", e),
            e ? (this.button.attr("tabindex", -1),
            this.close()) : this.button.attr("tabindex", 0)
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)),
            t && t[0] || (t = this.element.closest(".ui-front, dialog")),
            t.length || (t = this.document[0].body),
            t
        },
        _toggleAttr: function() {
            this.button.attr("aria-expanded", this.isOpen),
            this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen),
            this.menu.attr("aria-hidden", !this.isOpen)
        },
        _resizeButton: function() {
            var e = this.options.width;
            !1 !== e ? (null === e && (e = this.element.show().outerWidth(),
            this.element.hide()),
            this.button.outerWidth(e)) : this.button.css("width", "")
        },
        _resizeMenu: function() {
            this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
        },
        _getCreateOptions: function() {
            var e = this._super();
            return e.disabled = this.element.prop("disabled"),
            e
        },
        _parseOptions: function(t) {
            var i = this
              , n = [];
            t.each((function(t, s) {
                n.push(i._parseOption(e(s), t))
            }
            )),
            this.items = n
        },
        _parseOption: function(e, t) {
            var i = e.parent("optgroup");
            return {
                element: e,
                index: t,
                value: e.val(),
                label: e.text(),
                optgroup: i.attr("label") || "",
                disabled: i.prop("disabled") || e.prop("disabled")
            }
        },
        _destroy: function() {
            this._unbindFormResetHandler(),
            this.menuWrap.remove(),
            this.button.remove(),
            this.element.show(),
            this.element.removeUniqueId(),
            this.labels.attr("for", this.ids.element)
        }
    }]),
    e.widget("ui.slider", e.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            classes: {
                "ui-slider": "ui-corner-all",
                "ui-slider-handle": "ui-corner-all",
                "ui-slider-range": "ui-corner-all ui-widget-header"
            },
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function() {
            this._keySliding = !1,
            this._mouseSliding = !1,
            this._animateOff = !0,
            this._handleIndex = null,
            this._detectOrientation(),
            this._mouseInit(),
            this._calculateNewMax(),
            this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"),
            this._refresh(),
            this._animateOff = !1
        },
        _refresh: function() {
            this._createRange(),
            this._createHandles(),
            this._setupEvents(),
            this._refreshValue()
        },
        _createHandles: function() {
            var t, i, n = this.options, s = this.element.find(".ui-slider-handle"), o = [];
            for (i = n.values && n.values.length || 1,
            s.length > i && (s.slice(i).remove(),
            s = s.slice(0, i)),
            t = s.length; t < i; t++)
                o.push("<span tabindex='0'></span>");
            this.handles = s.add(e(o.join("")).appendTo(this.element)),
            this._addClass(this.handles, "ui-slider-handle", "ui-state-default"),
            this.handle = this.handles.eq(0),
            this.handles.each((function(t) {
                e(this).data("ui-slider-handle-index", t).attr("tabIndex", 0)
            }
            ))
        },
        _createRange: function() {
            var t = this.options;
            t.range ? (!0 === t.range && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]),
            this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"),
            this.range.css({
                left: "",
                bottom: ""
            })) : (this.range = e("<div>").appendTo(this.element),
            this._addClass(this.range, "ui-slider-range")),
            "min" !== t.range && "max" !== t.range || this._addClass(this.range, "ui-slider-range-" + t.range)) : (this.range && this.range.remove(),
            this.range = null)
        },
        _setupEvents: function() {
            this._off(this.handles),
            this._on(this.handles, this._handleEvents),
            this._hoverable(this.handles),
            this._focusable(this.handles)
        },
        _destroy: function() {
            this.handles.remove(),
            this.range && this.range.remove(),
            this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var i, n, s, o, a, r, l, c = this, u = this.options;
            return !u.disabled && (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            },
            this.elementOffset = this.element.offset(),
            i = {
                x: t.pageX,
                y: t.pageY
            },
            n = this._normValueFromMouse(i),
            s = this._valueMax() - this._valueMin() + 1,
            this.handles.each((function(t) {
                var i = Math.abs(n - c.values(t));
                (s > i || s === i && (t === c._lastChangedValue || c.values(t) === u.min)) && (s = i,
                o = e(this),
                a = t)
            }
            )),
            !1 !== this._start(t, a) && (this._mouseSliding = !0,
            this._handleIndex = a,
            this._addClass(o, null, "ui-state-active"),
            o.trigger("focus"),
            r = o.offset(),
            l = !e(t.target).parents().addBack().is(".ui-slider-handle"),
            this._clickOffset = l ? {
                left: 0,
                top: 0
            } : {
                left: t.pageX - r.left - o.width() / 2,
                top: t.pageY - r.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
            },
            this.handles.hasClass("ui-state-hover") || this._slide(t, a, n),
            this._animateOff = !0,
            !0))
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(e) {
            var t = {
                x: e.pageX,
                y: e.pageY
            }
              , i = this._normValueFromMouse(t);
            return this._slide(e, this._handleIndex, i),
            !1
        },
        _mouseStop: function(e) {
            return this._removeClass(this.handles, null, "ui-state-active"),
            this._mouseSliding = !1,
            this._stop(e, this._handleIndex),
            this._change(e, this._handleIndex),
            this._handleIndex = null,
            this._clickOffset = null,
            this._animateOff = !1,
            !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(e) {
            var t, i, n, s, o;
            return "horizontal" === this.orientation ? (t = this.elementSize.width,
            i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height,
            i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)),
            (n = i / t) > 1 && (n = 1),
            n < 0 && (n = 0),
            "vertical" === this.orientation && (n = 1 - n),
            s = this._valueMax() - this._valueMin(),
            o = this._valueMin() + n * s,
            this._trimAlignValue(o)
        },
        _uiHash: function(e, t, i) {
            var n = {
                handle: this.handles[e],
                handleIndex: e,
                value: void 0 !== t ? t : this.value()
            };
            return this._hasMultipleValues() && (n.value = void 0 !== t ? t : this.values(e),
            n.values = i || this.values()),
            n
        },
        _hasMultipleValues: function() {
            return this.options.values && this.options.values.length
        },
        _start: function(e, t) {
            return this._trigger("start", e, this._uiHash(t))
        },
        _slide: function(e, t, i) {
            var n, s = this.value(), o = this.values();
            this._hasMultipleValues() && (n = this.values(t ? 0 : 1),
            s = this.values(t),
            2 === this.options.values.length && !0 === this.options.range && (i = 0 === t ? Math.min(n, i) : Math.max(n, i)),
            o[t] = i),
            i !== s && !1 !== this._trigger("slide", e, this._uiHash(t, i, o)) && (this._hasMultipleValues() ? this.values(t, i) : this.value(i))
        },
        _stop: function(e, t) {
            this._trigger("stop", e, this._uiHash(t))
        },
        _change: function(e, t) {
            this._keySliding || this._mouseSliding || (this._lastChangedValue = t,
            this._trigger("change", e, this._uiHash(t)))
        },
        value: function(e) {
            return arguments.length ? (this.options.value = this._trimAlignValue(e),
            this._refreshValue(),
            void this._change(null, 0)) : this._value()
        },
        values: function(t, i) {
            var n, s, o;
            if (arguments.length > 1)
                return this.options.values[t] = this._trimAlignValue(i),
                this._refreshValue(),
                void this._change(null, t);
            if (!arguments.length)
                return this._values();
            if (!e.isArray(arguments[0]))
                return this._hasMultipleValues() ? this._values(t) : this.value();
            for (n = this.options.values,
            s = arguments[0],
            o = 0; o < n.length; o += 1)
                n[o] = this._trimAlignValue(s[o]),
                this._change(null, o);
            this._refreshValue()
        },
        _setOption: function(t, i) {
            var n, s = 0;
            switch ("range" === t && !0 === this.options.range && ("min" === i ? (this.options.value = this._values(0),
            this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1),
            this.options.values = null)),
            e.isArray(this.options.values) && (s = this.options.values.length),
            this._super(t, i),
            t) {
            case "orientation":
                this._detectOrientation(),
                this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation),
                this._refreshValue(),
                this.options.range && this._refreshRange(i),
                this.handles.css("horizontal" === i ? "bottom" : "left", "");
                break;
            case "value":
                this._animateOff = !0,
                this._refreshValue(),
                this._change(null, 0),
                this._animateOff = !1;
                break;
            case "values":
                for (this._animateOff = !0,
                this._refreshValue(),
                n = s - 1; n >= 0; n--)
                    this._change(null, n);
                this._animateOff = !1;
                break;
            case "step":
            case "min":
            case "max":
                this._animateOff = !0,
                this._calculateNewMax(),
                this._refreshValue(),
                this._animateOff = !1;
                break;
            case "range":
                this._animateOff = !0,
                this._refresh(),
                this._animateOff = !1
            }
        },
        _setOptionDisabled: function(e) {
            this._super(e),
            this._toggleClass(null, "ui-state-disabled", !!e)
        },
        _value: function() {
            var e = this.options.value;
            return e = this._trimAlignValue(e)
        },
        _values: function(e) {
            var t, i, n;
            if (arguments.length)
                return t = this.options.values[e],
                t = this._trimAlignValue(t);
            if (this._hasMultipleValues()) {
                for (i = this.options.values.slice(),
                n = 0; n < i.length; n += 1)
                    i[n] = this._trimAlignValue(i[n]);
                return i
            }
            return []
        },
        _trimAlignValue: function(e) {
            if (e <= this._valueMin())
                return this._valueMin();
            if (e >= this._valueMax())
                return this._valueMax();
            var t = this.options.step > 0 ? this.options.step : 1
              , i = (e - this._valueMin()) % t
              , n = e - i;
            return 2 * Math.abs(i) >= t && (n += i > 0 ? t : -t),
            parseFloat(n.toFixed(5))
        },
        _calculateNewMax: function() {
            var e = this.options.max
              , t = this._valueMin()
              , i = this.options.step;
            (e = Math.round((e - t) / i) * i + t) > this.options.max && (e -= i),
            this.max = parseFloat(e.toFixed(this._precision()))
        },
        _precision: function() {
            var e = this._precisionOf(this.options.step);
            return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))),
            e
        },
        _precisionOf: function(e) {
            var t = e.toString()
              , i = t.indexOf(".");
            return -1 === i ? 0 : t.length - i - 1
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.max
        },
        _refreshRange: function(e) {
            "vertical" === e && this.range.css({
                width: "",
                left: ""
            }),
            "horizontal" === e && this.range.css({
                height: "",
                bottom: ""
            })
        },
        _refreshValue: function() {
            var t, i, n, s, o, a = this.options.range, r = this.options, l = this, c = !this._animateOff && r.animate, u = {};
            this._hasMultipleValues() ? this.handles.each((function(n) {
                i = (l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100,
                u["horizontal" === l.orientation ? "left" : "bottom"] = i + "%",
                e(this).stop(1, 1)[c ? "animate" : "css"](u, r.animate),
                !0 === l.options.range && ("horizontal" === l.orientation ? (0 === n && l.range.stop(1, 1)[c ? "animate" : "css"]({
                    left: i + "%"
                }, r.animate),
                1 === n && l.range[c ? "animate" : "css"]({
                    width: i - t + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                })) : (0 === n && l.range.stop(1, 1)[c ? "animate" : "css"]({
                    bottom: i + "%"
                }, r.animate),
                1 === n && l.range[c ? "animate" : "css"]({
                    height: i - t + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                }))),
                t = i
            }
            )) : (n = this.value(),
            s = this._valueMin(),
            o = this._valueMax(),
            i = o !== s ? (n - s) / (o - s) * 100 : 0,
            u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%",
            this.handle.stop(1, 1)[c ? "animate" : "css"](u, r.animate),
            "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                width: i + "%"
            }, r.animate),
            "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                width: 100 - i + "%"
            }, r.animate),
            "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                height: i + "%"
            }, r.animate),
            "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                height: 100 - i + "%"
            }, r.animate))
        },
        _handleEvents: {
            keydown: function(t) {
                var i, n, s, o = e(t.target).data("ui-slider-handle-index");
                switch (t.keyCode) {
                case e.ui.keyCode.HOME:
                case e.ui.keyCode.END:
                case e.ui.keyCode.PAGE_UP:
                case e.ui.keyCode.PAGE_DOWN:
                case e.ui.keyCode.UP:
                case e.ui.keyCode.RIGHT:
                case e.ui.keyCode.DOWN:
                case e.ui.keyCode.LEFT:
                    if (t.preventDefault(),
                    !this._keySliding && (this._keySliding = !0,
                    this._addClass(e(t.target), null, "ui-state-active"),
                    !1 === this._start(t, o)))
                        return
                }
                switch (s = this.options.step,
                i = n = this._hasMultipleValues() ? this.values(o) : this.value(),
                t.keyCode) {
                case e.ui.keyCode.HOME:
                    n = this._valueMin();
                    break;
                case e.ui.keyCode.END:
                    n = this._valueMax();
                    break;
                case e.ui.keyCode.PAGE_UP:
                    n = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages);
                    break;
                case e.ui.keyCode.PAGE_DOWN:
                    n = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages);
                    break;
                case e.ui.keyCode.UP:
                case e.ui.keyCode.RIGHT:
                    if (i === this._valueMax())
                        return;
                    n = this._trimAlignValue(i + s);
                    break;
                case e.ui.keyCode.DOWN:
                case e.ui.keyCode.LEFT:
                    if (i === this._valueMin())
                        return;
                    n = this._trimAlignValue(i - s)
                }
                this._slide(t, o, n)
            },
            keyup: function(t) {
                var i = e(t.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1,
                this._stop(t, i),
                this._change(t, i),
                this._removeClass(e(t.target), null, "ui-state-active"))
            }
        }
    }),
    e.widget("ui.sortable", e.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function(e, t, i) {
            return e >= t && e < t + i
        },
        _isFloating: function(e) {
            return /left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display"))
        },
        _create: function() {
            this.containerCache = {},
            this._addClass("ui-sortable"),
            this.refresh(),
            this.offset = this.element.offset(),
            this._mouseInit(),
            this._setHandleClassName(),
            this.ready = !0
        },
        _setOption: function(e, t) {
            this._super(e, t),
            "handle" === e && this._setHandleClassName()
        },
        _setHandleClassName: function() {
            var t = this;
            this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"),
            e.each(this.items, (function() {
                t._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
            }
            ))
        },
        _destroy: function() {
            this._mouseDestroy();
            for (var e = this.items.length - 1; e >= 0; e--)
                this.items[e].item.removeData(this.widgetName + "-item");
            return this
        },
        _mouseCapture: function(t, i) {
            var n = null
              , s = !1
              , o = this;
            return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(t),
            e(t.target).parents().each((function() {
                if (e.data(this, o.widgetName + "-item") === o)
                    return n = e(this),
                    !1
            }
            )),
            e.data(t.target, o.widgetName + "-item") === o && (n = e(t.target)),
            !!n && (!(this.options.handle && !i && (e(this.options.handle, n).find("*").addBack().each((function() {
                this === t.target && (s = !0)
            }
            )),
            !s)) && (this.currentItem = n,
            this._removeCurrentsFromItems(),
            !0))))
        },
        _mouseStart: function(t, i, n) {
            var s, o, a = this.options;
            if (this.currentContainer = this,
            this.refreshPositions(),
            this.helper = this._createHelper(t),
            this._cacheHelperProportions(),
            this._cacheMargins(),
            this.scrollParent = this.helper.scrollParent(),
            this.offset = this.currentItem.offset(),
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            },
            e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }),
            this.helper.css("position", "absolute"),
            this.cssPosition = this.helper.css("position"),
            this.originalPosition = this._generatePosition(t),
            this.originalPageX = t.pageX,
            this.originalPageY = t.pageY,
            a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt),
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            },
            this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
            this._createPlaceholder(),
            a.containment && this._setContainment(),
            a.cursor && "auto" !== a.cursor && (o = this.document.find("body"),
            this.storedCursor = o.css("cursor"),
            o.css("cursor", a.cursor),
            this.storedStylesheet = e("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)),
            a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")),
            this.helper.css("opacity", a.opacity)),
            a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")),
            this.helper.css("zIndex", a.zIndex)),
            this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()),
            this._trigger("start", t, this._uiHash()),
            this._preserveHelperProportions || this._cacheHelperProportions(),
            !n)
                for (s = this.containers.length - 1; s >= 0; s--)
                    this.containers[s]._trigger("activate", t, this._uiHash(this));
            return e.ui.ddmanager && (e.ui.ddmanager.current = this),
            e.ui.ddmanager && !a.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t),
            this.dragging = !0,
            this._addClass(this.helper, "ui-sortable-helper"),
            this._mouseDrag(t),
            !0
        },
        _mouseDrag: function(t) {
            var i, n, s, o, a = this.options, r = !1;
            for (this.position = this._generatePosition(t),
            this.positionAbs = this._convertPositionTo("absolute"),
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
            this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : t.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed),
            this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : t.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (t.pageY - this.document.scrollTop() < a.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - a.scrollSpeed) : this.window.height() - (t.pageY - this.document.scrollTop()) < a.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + a.scrollSpeed)),
            t.pageX - this.document.scrollLeft() < a.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - a.scrollSpeed) : this.window.width() - (t.pageX - this.document.scrollLeft()) < a.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + a.scrollSpeed))),
            !1 !== r && e.ui.ddmanager && !a.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)),
            this.positionAbs = this._convertPositionTo("absolute"),
            this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"),
            this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"),
            i = this.items.length - 1; i >= 0; i--)
                if (s = (n = this.items[i]).item[0],
                (o = this._intersectsWithPointer(n)) && n.instance === this.currentContainer && !(s === this.currentItem[0] || this.placeholder[1 === o ? "next" : "prev"]()[0] === s || e.contains(this.placeholder[0], s) || "semi-dynamic" === this.options.type && e.contains(this.element[0], s))) {
                    if (this.direction = 1 === o ? "down" : "up",
                    "pointer" !== this.options.tolerance && !this._intersectsWithSides(n))
                        break;
                    this._rearrange(t, n),
                    this._trigger("change", t, this._uiHash());
                    break
                }
            return this._contactContainers(t),
            e.ui.ddmanager && e.ui.ddmanager.drag(this, t),
            this._trigger("sort", t, this._uiHash()),
            this.lastPositionAbs = this.positionAbs,
            !1
        },
        _mouseStop: function(t, i) {
            if (t) {
                if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t),
                this.options.revert) {
                    var n = this
                      , s = this.placeholder.offset()
                      , o = this.options.axis
                      , a = {};
                    o && "x" !== o || (a.left = s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)),
                    o && "y" !== o || (a.top = s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)),
                    this.reverting = !0,
                    e(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, (function() {
                        n._clear(t)
                    }
                    ))
                } else
                    this._clear(t, i);
                return !1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp(new e.Event("mouseup",{
                    target: null
                })),
                "original" === this.options.helper ? (this.currentItem.css(this._storedCSS),
                this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                for (var t = this.containers.length - 1; t >= 0; t--)
                    this.containers[t]._trigger("deactivate", null, this._uiHash(this)),
                    this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)),
                    this.containers[t].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(),
            e.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }),
            this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)),
            this
        },
        serialize: function(t) {
            var i = this._getItemsAsjQuery(t && t.connected)
              , n = [];
            return t = t || {},
            e(i).each((function() {
                var i = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                i && n.push((t.key || i[1] + "[]") + "=" + (t.key && t.expression ? i[1] : i[2]))
            }
            )),
            !n.length && t.key && n.push(t.key + "="),
            n.join("&")
        },
        toArray: function(t) {
            var i = this._getItemsAsjQuery(t && t.connected)
              , n = [];
            return t = t || {},
            i.each((function() {
                n.push(e(t.item || this).attr(t.attribute || "id") || "")
            }
            )),
            n
        },
        _intersectsWith: function(e) {
            var t = this.positionAbs.left
              , i = t + this.helperProportions.width
              , n = this.positionAbs.top
              , s = n + this.helperProportions.height
              , o = e.left
              , a = o + e.width
              , r = e.top
              , l = r + e.height
              , c = this.offset.click.top
              , u = this.offset.click.left
              , h = "x" === this.options.axis || n + c > r && n + c < l
              , d = "y" === this.options.axis || t + u > o && t + u < a
              , p = h && d;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? p : o < t + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < a && r < n + this.helperProportions.height / 2 && s - this.helperProportions.height / 2 < l
        },
        _intersectsWithPointer: function(e) {
            var t, i, n = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height), s = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width);
            return !(!n || !s) && (t = this._getDragVerticalDirection(),
            i = this._getDragHorizontalDirection(),
            this.floating ? "right" === i || "down" === t ? 2 : 1 : t && ("down" === t ? 2 : 1))
        },
        _intersectsWithSides: function(e) {
            var t = this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height)
              , i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width)
              , n = this._getDragVerticalDirection()
              , s = this._getDragHorizontalDirection();
            return this.floating && s ? "right" === s && i || "left" === s && !i : n && ("down" === n && t || "up" === n && !t)
        },
        _getDragVerticalDirection: function() {
            var e = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== e && (e > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var e = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== e && (e > 0 ? "right" : "left")
        },
        refresh: function(e) {
            return this._refreshItems(e),
            this._setHandleClassName(),
            this.refreshPositions(),
            this
        },
        _connectWith: function() {
            var e = this.options;
            return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith
        },
        _getItemsAsjQuery: function(t) {
            var i, n, s, o, a = [], r = [], l = this._connectWith();
            if (l && t)
                for (i = l.length - 1; i >= 0; i--)
                    for (n = (s = e(l[i], this.document[0])).length - 1; n >= 0; n--)
                        (o = e.data(s[n], this.widgetFullName)) && o !== this && !o.options.disabled && r.push([e.isFunction(o.options.items) ? o.options.items.call(o.element) : e(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
            function c() {
                a.push(this)
            }
            for (r.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]),
            i = r.length - 1; i >= 0; i--)
                r[i][0].each(c);
            return e(a)
        },
        _removeCurrentsFromItems: function() {
            var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = e.grep(this.items, (function(e) {
                for (var i = 0; i < t.length; i++)
                    if (t[i] === e.item[0])
                        return !1;
                return !0
            }
            ))
        },
        _refreshItems: function(t) {
            this.items = [],
            this.containers = [this];
            var i, n, s, o, a, r, l, c, u = this.items, h = [[e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                item: this.currentItem
            }) : e(this.options.items, this.element), this]], d = this._connectWith();
            if (d && this.ready)
                for (i = d.length - 1; i >= 0; i--)
                    for (n = (s = e(d[i], this.document[0])).length - 1; n >= 0; n--)
                        (o = e.data(s[n], this.widgetFullName)) && o !== this && !o.options.disabled && (h.push([e.isFunction(o.options.items) ? o.options.items.call(o.element[0], t, {
                            item: this.currentItem
                        }) : e(o.options.items, o.element), o]),
                        this.containers.push(o));
            for (i = h.length - 1; i >= 0; i--)
                for (a = h[i][1],
                n = 0,
                c = (r = h[i][0]).length; n < c; n++)
                    (l = e(r[n])).data(this.widgetName + "-item", a),
                    u.push({
                        item: l,
                        instance: a,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
        },
        refreshPositions: function(t) {
            var i, n, s, o;
            for (this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)),
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()),
            i = this.items.length - 1; i >= 0; i--)
                (n = this.items[i]).instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0] || (s = this.options.toleranceElement ? e(this.options.toleranceElement, n.item) : n.item,
                t || (n.width = s.outerWidth(),
                n.height = s.outerHeight()),
                o = s.offset(),
                n.left = o.left,
                n.top = o.top);
            if (this.options.custom && this.options.custom.refreshContainers)
                this.options.custom.refreshContainers.call(this);
            else
                for (i = this.containers.length - 1; i >= 0; i--)
                    o = this.containers[i].element.offset(),
                    this.containers[i].containerCache.left = o.left,
                    this.containers[i].containerCache.top = o.top,
                    this.containers[i].containerCache.width = this.containers[i].element.outerWidth(),
                    this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function(t) {
            var i, n = (t = t || this).options;
            n.placeholder && n.placeholder.constructor !== String || (i = n.placeholder,
            n.placeholder = {
                element: function() {
                    var n = t.currentItem[0].nodeName.toLowerCase()
                      , s = e("<" + n + ">", t.document[0]);
                    return t._addClass(s, "ui-sortable-placeholder", i || t.currentItem[0].className)._removeClass(s, "ui-sortable-helper"),
                    "tbody" === n ? t._createTrPlaceholder(t.currentItem.find("tr").eq(0), e("<tr>", t.document[0]).appendTo(s)) : "tr" === n ? t._createTrPlaceholder(t.currentItem, s) : "img" === n && s.attr("src", t.currentItem.attr("src")),
                    i || s.css("visibility", "hidden"),
                    s
                },
                update: function(e, s) {
                    i && !n.forcePlaceholderSize || (s.height() || s.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)),
                    s.width() || s.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
                }
            }),
            t.placeholder = e(n.placeholder.element.call(t.element, t.currentItem)),
            t.currentItem.after(t.placeholder),
            n.placeholder.update(t, t.placeholder)
        },
        _createTrPlaceholder: function(t, i) {
            var n = this;
            t.children().each((function() {
                e("<td>&#160;</td>", n.document[0]).attr("colspan", e(this).attr("colspan") || 1).appendTo(i)
            }
            ))
        },
        _contactContainers: function(t) {
            var i, n, s, o, a, r, l, c, u, h, d = null, p = null;
            for (i = this.containers.length - 1; i >= 0; i--)
                if (!e.contains(this.currentItem[0], this.containers[i].element[0]))
                    if (this._intersectsWith(this.containers[i].containerCache)) {
                        if (d && e.contains(this.containers[i].element[0], d.element[0]))
                            continue;
                        d = this.containers[i],
                        p = i
                    } else
                        this.containers[i].containerCache.over && (this.containers[i]._trigger("out", t, this._uiHash(this)),
                        this.containers[i].containerCache.over = 0);
            if (d)
                if (1 === this.containers.length)
                    this.containers[p].containerCache.over || (this.containers[p]._trigger("over", t, this._uiHash(this)),
                    this.containers[p].containerCache.over = 1);
                else {
                    for (s = 1e4,
                    o = null,
                    a = (u = d.floating || this._isFloating(this.currentItem)) ? "left" : "top",
                    r = u ? "width" : "height",
                    h = u ? "pageX" : "pageY",
                    n = this.items.length - 1; n >= 0; n--)
                        e.contains(this.containers[p].element[0], this.items[n].item[0]) && this.items[n].item[0] !== this.currentItem[0] && (l = this.items[n].item.offset()[a],
                        c = !1,
                        t[h] - l > this.items[n][r] / 2 && (c = !0),
                        Math.abs(t[h] - l) < s && (s = Math.abs(t[h] - l),
                        o = this.items[n],
                        this.direction = c ? "up" : "down"));
                    if (!o && !this.options.dropOnEmpty)
                        return;
                    if (this.currentContainer === this.containers[p])
                        return void (this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", t, this._uiHash()),
                        this.currentContainer.containerCache.over = 1));
                    o ? this._rearrange(t, o, null, !0) : this._rearrange(t, null, this.containers[p].element, !0),
                    this._trigger("change", t, this._uiHash()),
                    this.containers[p]._trigger("change", t, this._uiHash(this)),
                    this.currentContainer = this.containers[p],
                    this.options.placeholder.update(this.currentContainer, this.placeholder),
                    this.containers[p]._trigger("over", t, this._uiHash(this)),
                    this.containers[p].containerCache.over = 1
                }
        },
        _createHelper: function(t) {
            var i = this.options
              , n = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return n.parents("body").length || e("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]),
            n[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }),
            n[0].style.width && !i.forceHelperSize || n.width(this.currentItem.width()),
            n[0].style.height && !i.forceHelperSize || n.height(this.currentItem.height()),
            n
        },
        _adjustOffsetFromHelper: function(t) {
            "string" == typeof t && (t = t.split(" ")),
            e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }),
            "left"in t && (this.offset.click.left = t.left + this.margins.left),
            "right"in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left),
            "top"in t && (this.offset.click.top = t.top + this.margins.top),
            "bottom"in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(),
            t.top += this.scrollParent.scrollTop()),
            (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
                top: 0,
                left: 0
            }),
            {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var e = this.currentItem.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t, i, n, s = this.options;
            "parent" === s.containment && (s.containment = this.helper[0].parentNode),
            "document" !== s.containment && "window" !== s.containment || (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === s.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === s.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]),
            /^(document|window|parent)$/.test(s.containment) || (t = e(s.containment)[0],
            i = e(s.containment).offset(),
            n = "hidden" !== e(t).css("overflow"),
            this.containment = [i.left + (parseInt(e(t).css("borderLeftWidth"), 10) || 0) + (parseInt(e(t).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(e(t).css("borderTopWidth"), 10) || 0) + (parseInt(e(t).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (n ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(e(t).css("borderLeftWidth"), 10) || 0) - (parseInt(e(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (n ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(e(t).css("borderTopWidth"), 10) || 0) - (parseInt(e(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(t, i) {
            i || (i = this.position);
            var n = "absolute" === t ? 1 : -1
              , s = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent
              , o = /(html|body)/i.test(s[0].tagName);
            return {
                top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * n,
                left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * n
            }
        },
        _generatePosition: function(t) {
            var i, n, s = this.options, o = t.pageX, a = t.pageY, r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, l = /(html|body)/i.test(r[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()),
            this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left),
            t.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top),
            t.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left),
            t.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)),
            s.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / s.grid[1]) * s.grid[1],
            a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - s.grid[1] : i + s.grid[1] : i,
            n = this.originalPageX + Math.round((o - this.originalPageX) / s.grid[0]) * s.grid[0],
            o = this.containment ? n - this.offset.click.left >= this.containment[0] && n - this.offset.click.left <= this.containment[2] ? n : n - this.offset.click.left >= this.containment[0] ? n - s.grid[0] : n + s.grid[0] : n)),
            {
                top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : r.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : r.scrollLeft())
            }
        },
        _rearrange: function(e, t, i, n) {
            i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling),
            this.counter = this.counter ? ++this.counter : 1;
            var s = this.counter;
            this._delay((function() {
                s === this.counter && this.refreshPositions(!n)
            }
            ))
        },
        _clear: function(e, t) {
            this.reverting = !1;
            var i, n = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem),
            this._noFinalSort = null,
            this.helper[0] === this.currentItem[0]) {
                for (i in this._storedCSS)
                    "auto" !== this._storedCSS[i] && "static" !== this._storedCSS[i] || (this._storedCSS[i] = "");
                this.currentItem.css(this._storedCSS),
                this._removeClass(this.currentItem, "ui-sortable-helper")
            } else
                this.currentItem.show();
            function s(e, t, i) {
                return function(n) {
                    i._trigger(e, n, t._uiHash(t))
                }
            }
            for (this.fromOutside && !t && n.push((function(e) {
                this._trigger("receive", e, this._uiHash(this.fromOutside))
            }
            )),
            !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || n.push((function(e) {
                this._trigger("update", e, this._uiHash())
            }
            )),
            this !== this.currentContainer && (t || (n.push((function(e) {
                this._trigger("remove", e, this._uiHash())
            }
            )),
            n.push(function(e) {
                return function(t) {
                    e._trigger("receive", t, this._uiHash(this))
                }
            }
            .call(this, this.currentContainer)),
            n.push(function(e) {
                return function(t) {
                    e._trigger("update", t, this._uiHash(this))
                }
            }
            .call(this, this.currentContainer)))),
            i = this.containers.length - 1; i >= 0; i--)
                t || n.push(s("deactivate", this, this.containers[i])),
                this.containers[i].containerCache.over && (n.push(s("out", this, this.containers[i])),
                this.containers[i].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor),
            this.storedStylesheet.remove()),
            this._storedOpacity && this.helper.css("opacity", this._storedOpacity),
            this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex),
            this.dragging = !1,
            t || this._trigger("beforeStop", e, this._uiHash()),
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(),
            this.helper = null),
            !t) {
                for (i = 0; i < n.length; i++)
                    n[i].call(this, e);
                this._trigger("stop", e, this._uiHash())
            }
            return this.fromOutside = !1,
            !this.cancelHelperRemoval
        },
        _trigger: function() {
            !1 === e.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
        },
        _uiHash: function(t) {
            var i = t || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || e([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: t ? t.element : null
            }
        }
    });
    /*!
 * jQuery UI Progressbar 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    /*!
 * jQuery UI Spinner 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function y(e) {
        return function() {
            var t = this.element.val();
            e.apply(this, arguments),
            this._refresh(),
            t !== this.element.val() && this._trigger("change")
        }
    }
    e.widget("ui.spinner", {
        version: "1.12.1",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            classes: {
                "ui-spinner": "ui-corner-all",
                "ui-spinner-down": "ui-corner-br",
                "ui-spinner-up": "ui-corner-tr"
            },
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max),
            this._setOption("min", this.options.min),
            this._setOption("step", this.options.step),
            "" !== this.value() && this._value(this.element.val(), !0),
            this._draw(),
            this._on(this._events),
            this._refresh(),
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function() {
            var t = this._super()
              , i = this.element;
            return e.each(["min", "max", "step"], (function(e, n) {
                var s = i.attr(n);
                null != s && s.length && (t[n] = s)
            }
            )),
            t
        },
        _events: {
            keydown: function(e) {
                this._start(e) && this._keydown(e) && e.preventDefault()
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val()
            },
            blur: function(e) {
                this.cancelBlur ? delete this.cancelBlur : (this._stop(),
                this._refresh(),
                this.previous !== this.element.val() && this._trigger("change", e))
            },
            mousewheel: function(e, t) {
                if (t) {
                    if (!this.spinning && !this._start(e))
                        return !1;
                    this._spin((t > 0 ? 1 : -1) * this.options.step, e),
                    clearTimeout(this.mousewheelTimer),
                    this.mousewheelTimer = this._delay((function() {
                        this.spinning && this._stop(e)
                    }
                    ), 100),
                    e.preventDefault()
                }
            },
            "mousedown .ui-spinner-button": function(t) {
                var i;
                function n() {
                    this.element[0] === e.ui.safeActiveElement(this.document[0]) || (this.element.trigger("focus"),
                    this.previous = i,
                    this._delay((function() {
                        this.previous = i
                    }
                    )))
                }
                i = this.element[0] === e.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(),
                t.preventDefault(),
                n.call(this),
                this.cancelBlur = !0,
                this._delay((function() {
                    delete this.cancelBlur,
                    n.call(this)
                }
                )),
                !1 !== this._start(t) && this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(t) {
                if (e(t.currentTarget).hasClass("ui-state-active"))
                    return !1 !== this._start(t) && void this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _enhance: function() {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>")
        },
        _draw: function() {
            this._enhance(),
            this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"),
            this._addClass("ui-spinner-input"),
            this.element.attr("role", "spinbutton"),
            this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({
                classes: {
                    "ui-button": ""
                }
            }),
            this._removeClass(this.buttons, "ui-corner-all"),
            this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"),
            this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"),
            this.buttons.first().button({
                icon: this.options.icons.up,
                showLabel: !1
            }),
            this.buttons.last().button({
                icon: this.options.icons.down,
                showLabel: !1
            }),
            this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height())
        },
        _keydown: function(t) {
            var i = this.options
              , n = e.ui.keyCode;
            switch (t.keyCode) {
            case n.UP:
                return this._repeat(null, 1, t),
                !0;
            case n.DOWN:
                return this._repeat(null, -1, t),
                !0;
            case n.PAGE_UP:
                return this._repeat(null, i.page, t),
                !0;
            case n.PAGE_DOWN:
                return this._repeat(null, -i.page, t),
                !0
            }
            return !1
        },
        _start: function(e) {
            return !(!this.spinning && !1 === this._trigger("start", e)) && (this.counter || (this.counter = 1),
            this.spinning = !0,
            !0)
        },
        _repeat: function(e, t, i) {
            e = e || 500,
            clearTimeout(this.timer),
            this.timer = this._delay((function() {
                this._repeat(40, t, i)
            }
            ), e),
            this._spin(t * this.options.step, i)
        },
        _spin: function(e, t) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1),
            i = this._adjustValue(i + e * this._increment(this.counter)),
            this.spinning && !1 === this._trigger("spin", t, {
                value: i
            }) || (this._value(i),
            this.counter++)
        },
        _increment: function(t) {
            var i = this.options.incremental;
            return i ? e.isFunction(i) ? i(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1
        },
        _precision: function() {
            var e = this._precisionOf(this.options.step);
            return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))),
            e
        },
        _precisionOf: function(e) {
            var t = e.toString()
              , i = t.indexOf(".");
            return -1 === i ? 0 : t.length - i - 1
        },
        _adjustValue: function(e) {
            var t, i, n = this.options;
            return i = e - (t = null !== n.min ? n.min : 0),
            e = t + (i = Math.round(i / n.step) * n.step),
            e = parseFloat(e.toFixed(this._precision())),
            null !== n.max && e > n.max ? n.max : null !== n.min && e < n.min ? n.min : e
        },
        _stop: function(e) {
            this.spinning && (clearTimeout(this.timer),
            clearTimeout(this.mousewheelTimer),
            this.counter = 0,
            this.spinning = !1,
            this._trigger("stop", e))
        },
        _setOption: function(e, t) {
            var i, n, s;
            if ("culture" === e || "numberFormat" === e)
                return i = this._parse(this.element.val()),
                this.options[e] = t,
                void this.element.val(this._format(i));
            "max" !== e && "min" !== e && "step" !== e || "string" == typeof t && (t = this._parse(t)),
            "icons" === e && (n = this.buttons.first().find(".ui-icon"),
            this._removeClass(n, null, this.options.icons.up),
            this._addClass(n, null, t.up),
            s = this.buttons.last().find(".ui-icon"),
            this._removeClass(s, null, this.options.icons.down),
            this._addClass(s, null, t.down)),
            this._super(e, t)
        },
        _setOptionDisabled: function(e) {
            this._super(e),
            this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!e),
            this.element.prop("disabled", !!e),
            this.buttons.button(e ? "disable" : "enable")
        },
        _setOptions: y((function(e) {
            this._super(e)
        }
        )),
        _parse: function(e) {
            return "string" == typeof e && "" !== e && (e = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(e, 10, this.options.culture) : +e),
            "" === e || isNaN(e) ? null : e
        },
        _format: function(e) {
            return "" === e ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(e, this.options.numberFormat, this.options.culture) : e
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        isValid: function() {
            var e = this.value();
            return null !== e && e === this._adjustValue(e)
        },
        _value: function(e, t) {
            var i;
            "" !== e && null !== (i = this._parse(e)) && (t || (i = this._adjustValue(i)),
            e = this._format(i)),
            this.element.val(e),
            this._refresh()
        },
        _destroy: function() {
            this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"),
            this.uiSpinner.replaceWith(this.element)
        },
        stepUp: y((function(e) {
            this._stepUp(e)
        }
        )),
        _stepUp: function(e) {
            this._start() && (this._spin((e || 1) * this.options.step),
            this._stop())
        },
        stepDown: y((function(e) {
            this._stepDown(e)
        }
        )),
        _stepDown: function(e) {
            this._start() && (this._spin((e || 1) * -this.options.step),
            this._stop())
        },
        pageUp: y((function(e) {
            this._stepUp((e || 1) * this.options.page)
        }
        )),
        pageDown: y((function(e) {
            this._stepDown((e || 1) * this.options.page)
        }
        )),
        value: function(e) {
            if (!arguments.length)
                return this._parse(this.element.val());
            y(this._value).call(this, e)
        },
        widget: function() {
            return this.uiSpinner
        }
    }),
    !1 !== e.uiBackCompat && e.widget("ui.spinner", e.ui.spinner, {
        _enhance: function() {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
        },
        _uiSpinnerHtml: function() {
            return "<span>"
        },
        _buttonHtml: function() {
            return "<a></a><a></a>"
        }
    });
    var w;
    /*!
 * jQuery UI Tabs 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    e.ui.spinner;
    e.widget("ui.tabs", {
        version: "1.12.1",
        delay: 300,
        options: {
            active: null,
            classes: {
                "ui-tabs": "ui-corner-all",
                "ui-tabs-nav": "ui-corner-all",
                "ui-tabs-panel": "ui-corner-bottom",
                "ui-tabs-tab": "ui-corner-top"
            },
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: (w = /#.*$/,
        function(e) {
            var t, i;
            t = e.href.replace(w, ""),
            i = location.href.replace(w, "");
            try {
                t = decodeURIComponent(t)
            } catch (e) {}
            try {
                i = decodeURIComponent(i)
            } catch (e) {}
            return e.hash.length > 1 && t === i
        }
        ),
        _create: function() {
            var t = this
              , i = this.options;
            this.running = !1,
            this._addClass("ui-tabs", "ui-widget ui-widget-content"),
            this._toggleClass("ui-tabs-collapsible", null, i.collapsible),
            this._processTabs(),
            i.active = this._initialActive(),
            e.isArray(i.disabled) && (i.disabled = e.unique(i.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"), (function(e) {
                return t.tabs.index(e)
            }
            )))).sort()),
            !1 !== this.options.active && this.anchors.length ? this.active = this._findActive(i.active) : this.active = e(),
            this._refresh(),
            this.active.length && this.load(i.active)
        },
        _initialActive: function() {
            var t = this.options.active
              , i = this.options.collapsible
              , n = location.hash.substring(1);
            return null === t && (n && this.tabs.each((function(i, s) {
                if (e(s).attr("aria-controls") === n)
                    return t = i,
                    !1
            }
            )),
            null === t && (t = this.tabs.index(this.tabs.filter(".ui-tabs-active"))),
            null !== t && -1 !== t || (t = !!this.tabs.length && 0)),
            !1 !== t && -1 === (t = this.tabs.index(this.tabs.eq(t))) && (t = !i && 0),
            !i && !1 === t && this.anchors.length && (t = 0),
            t
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : e()
            }
        },
        _tabKeydown: function(t) {
            var i = e(e.ui.safeActiveElement(this.document[0])).closest("li")
              , n = this.tabs.index(i)
              , s = !0;
            if (!this._handlePageNav(t)) {
                switch (t.keyCode) {
                case e.ui.keyCode.RIGHT:
                case e.ui.keyCode.DOWN:
                    n++;
                    break;
                case e.ui.keyCode.UP:
                case e.ui.keyCode.LEFT:
                    s = !1,
                    n--;
                    break;
                case e.ui.keyCode.END:
                    n = this.anchors.length - 1;
                    break;
                case e.ui.keyCode.HOME:
                    n = 0;
                    break;
                case e.ui.keyCode.SPACE:
                    return t.preventDefault(),
                    clearTimeout(this.activating),
                    void this._activate(n);
                case e.ui.keyCode.ENTER:
                    return t.preventDefault(),
                    clearTimeout(this.activating),
                    void this._activate(n !== this.options.active && n);
                default:
                    return
                }
                t.preventDefault(),
                clearTimeout(this.activating),
                n = this._focusNextTab(n, s),
                t.ctrlKey || t.metaKey || (i.attr("aria-selected", "false"),
                this.tabs.eq(n).attr("aria-selected", "true"),
                this.activating = this._delay((function() {
                    this.option("active", n)
                }
                ), this.delay))
            }
        },
        _panelKeydown: function(t) {
            this._handlePageNav(t) || t.ctrlKey && t.keyCode === e.ui.keyCode.UP && (t.preventDefault(),
            this.active.trigger("focus"))
        },
        _handlePageNav: function(t) {
            return t.altKey && t.keyCode === e.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)),
            !0) : t.altKey && t.keyCode === e.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)),
            !0) : void 0
        },
        _findNextTab: function(t, i) {
            var n = this.tabs.length - 1;
            for (; -1 !== e.inArray((t > n && (t = 0),
            t < 0 && (t = n),
            t), this.options.disabled); )
                t = i ? t + 1 : t - 1;
            return t
        },
        _focusNextTab: function(e, t) {
            return e = this._findNextTab(e, t),
            this.tabs.eq(e).trigger("focus"),
            e
        },
        _setOption: function(e, t) {
            "active" !== e ? (this._super(e, t),
            "collapsible" === e && (this._toggleClass("ui-tabs-collapsible", null, t),
            t || !1 !== this.options.active || this._activate(0)),
            "event" === e && this._setupEvents(t),
            "heightStyle" === e && this._setupHeightStyle(t)) : this._activate(t)
        },
        _sanitizeSelector: function(e) {
            return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var t = this.options
              , i = this.tablist.children(":has(a[href])");
            t.disabled = e.map(i.filter(".ui-state-disabled"), (function(e) {
                return i.index(e)
            }
            )),
            this._processTabs(),
            !1 !== t.active && this.anchors.length ? this.active.length && !e.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1,
            this.active = e()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1,
            this.active = e()),
            this._refresh()
        },
        _refresh: function() {
            this._setOptionDisabled(this.options.disabled),
            this._setupEvents(this.options.event),
            this._setupHeightStyle(this.options.heightStyle),
            this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }),
            this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-hidden": "true"
            }),
            this.active.length ? (this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }),
            this._addClass(this.active, "ui-tabs-active", "ui-state-active"),
            this._getPanelForTab(this.active).show().attr({
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var t = this
              , i = this.tabs
              , n = this.anchors
              , s = this.panels;
            this.tablist = this._getList().attr("role", "tablist"),
            this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"),
            this.tablist.on("mousedown" + this.eventNamespace, "> li", (function(t) {
                e(this).is(".ui-state-disabled") && t.preventDefault()
            }
            )).on("focus" + this.eventNamespace, ".ui-tabs-anchor", (function() {
                e(this).closest("li").is(".ui-state-disabled") && this.blur()
            }
            )),
            this.tabs = this.tablist.find("> li:has(a[href])").attr({
                role: "tab",
                tabIndex: -1
            }),
            this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"),
            this.anchors = this.tabs.map((function() {
                return e("a", this)[0]
            }
            )).attr({
                role: "presentation",
                tabIndex: -1
            }),
            this._addClass(this.anchors, "ui-tabs-anchor"),
            this.panels = e(),
            this.anchors.each((function(i, n) {
                var s, o, a, r = e(n).uniqueId().attr("id"), l = e(n).closest("li"), c = l.attr("aria-controls");
                t._isLocal(n) ? (a = (s = n.hash).substring(1),
                o = t.element.find(t._sanitizeSelector(s))) : (s = "#" + (a = l.attr("aria-controls") || e({}).uniqueId()[0].id),
                (o = t.element.find(s)).length || (o = t._createPanel(a)).insertAfter(t.panels[i - 1] || t.tablist),
                o.attr("aria-live", "polite")),
                o.length && (t.panels = t.panels.add(o)),
                c && l.data("ui-tabs-aria-controls", c),
                l.attr({
                    "aria-controls": a,
                    "aria-labelledby": r
                }),
                o.attr("aria-labelledby", r)
            }
            )),
            this.panels.attr("role", "tabpanel"),
            this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"),
            i && (this._off(i.not(this.tabs)),
            this._off(n.not(this.anchors)),
            this._off(s.not(this.panels)))
        },
        _getList: function() {
            return this.tablist || this.element.find("ol, ul").eq(0)
        },
        _createPanel: function(t) {
            return e("<div>").attr("id", t).data("ui-tabs-destroy", !0)
        },
        _setOptionDisabled: function(t) {
            var i, n, s;
            for (e.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1),
            s = 0; n = this.tabs[s]; s++)
                i = e(n),
                !0 === t || -1 !== e.inArray(s, t) ? (i.attr("aria-disabled", "true"),
                this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"),
                this._removeClass(i, null, "ui-state-disabled"));
            this.options.disabled = t,
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === t)
        },
        _setupEvents: function(t) {
            var i = {};
            t && e.each(t.split(" "), (function(e, t) {
                i[t] = "_eventHandler"
            }
            )),
            this._off(this.anchors.add(this.tabs).add(this.panels)),
            this._on(!0, this.anchors, {
                click: function(e) {
                    e.preventDefault()
                }
            }),
            this._on(this.anchors, i),
            this._on(this.tabs, {
                keydown: "_tabKeydown"
            }),
            this._on(this.panels, {
                keydown: "_panelKeydown"
            }),
            this._focusable(this.tabs),
            this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(t) {
            var i, n = this.element.parent();
            "fill" === t ? (i = n.height(),
            i -= this.element.outerHeight() - this.element.height(),
            this.element.siblings(":visible").each((function() {
                var t = e(this)
                  , n = t.css("position");
                "absolute" !== n && "fixed" !== n && (i -= t.outerHeight(!0))
            }
            )),
            this.element.children().not(this.panels).each((function() {
                i -= e(this).outerHeight(!0)
            }
            )),
            this.panels.each((function() {
                e(this).height(Math.max(0, i - e(this).innerHeight() + e(this).height()))
            }
            )).css("overflow", "auto")) : "auto" === t && (i = 0,
            this.panels.each((function() {
                i = Math.max(i, e(this).height("").height())
            }
            )).height(i))
        },
        _eventHandler: function(t) {
            var i = this.options
              , n = this.active
              , s = e(t.currentTarget).closest("li")
              , o = s[0] === n[0]
              , a = o && i.collapsible
              , r = a ? e() : this._getPanelForTab(s)
              , l = n.length ? this._getPanelForTab(n) : e()
              , c = {
                oldTab: n,
                oldPanel: l,
                newTab: a ? e() : s,
                newPanel: r
            };
            t.preventDefault(),
            s.hasClass("ui-state-disabled") || s.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || !1 === this._trigger("beforeActivate", t, c) || (i.active = !a && this.tabs.index(s),
            this.active = o ? e() : s,
            this.xhr && this.xhr.abort(),
            l.length || r.length || e.error("jQuery UI Tabs: Mismatching fragment identifier."),
            r.length && this.load(this.tabs.index(s), t),
            this._toggle(t, c))
        },
        _toggle: function(t, i) {
            var n = this
              , s = i.newPanel
              , o = i.oldPanel;
            function a() {
                n.running = !1,
                n._trigger("activate", t, i)
            }
            function r() {
                n._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"),
                s.length && n.options.show ? n._show(s, n.options.show, a) : (s.show(),
                a())
            }
            this.running = !0,
            o.length && this.options.hide ? this._hide(o, this.options.hide, (function() {
                n._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"),
                r()
            }
            )) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"),
            o.hide(),
            r()),
            o.attr("aria-hidden", "true"),
            i.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }),
            s.length && o.length ? i.oldTab.attr("tabIndex", -1) : s.length && this.tabs.filter((function() {
                return 0 === e(this).attr("tabIndex")
            }
            )).attr("tabIndex", -1),
            s.attr("aria-hidden", "false"),
            i.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _activate: function(t) {
            var i, n = this._findActive(t);
            n[0] !== this.active[0] && (n.length || (n = this.active),
            i = n.find(".ui-tabs-anchor")[0],
            this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: e.noop
            }))
        },
        _findActive: function(t) {
            return !1 === t ? e() : this.tabs.eq(t)
        },
        _getIndex: function(t) {
            return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + e.ui.escapeSelector(t) + "']"))),
            t
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(),
            this.tablist.removeAttr("role").off(this.eventNamespace),
            this.anchors.removeAttr("role tabIndex").removeUniqueId(),
            this.tabs.add(this.panels).each((function() {
                e.data(this, "ui-tabs-destroy") ? e(this).remove() : e(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
            }
            )),
            this.tabs.each((function() {
                var t = e(this)
                  , i = t.data("ui-tabs-aria-controls");
                i ? t.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
            }
            )),
            this.panels.show(),
            "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(t) {
            var i = this.options.disabled;
            !1 !== i && (void 0 === t ? i = !1 : (t = this._getIndex(t),
            i = e.isArray(i) ? e.map(i, (function(e) {
                return e !== t ? e : null
            }
            )) : e.map(this.tabs, (function(e, i) {
                return i !== t ? i : null
            }
            ))),
            this._setOptionDisabled(i))
        },
        disable: function(t) {
            var i = this.options.disabled;
            if (!0 !== i) {
                if (void 0 === t)
                    i = !0;
                else {
                    if (t = this._getIndex(t),
                    -1 !== e.inArray(t, i))
                        return;
                    i = e.isArray(i) ? e.merge([t], i).sort() : [t]
                }
                this._setOptionDisabled(i)
            }
        },
        load: function(t, i) {
            t = this._getIndex(t);
            var n = this
              , s = this.tabs.eq(t)
              , o = s.find(".ui-tabs-anchor")
              , a = this._getPanelForTab(s)
              , r = {
                tab: s,
                panel: a
            }
              , l = function(e, t) {
                "abort" === t && n.panels.stop(!1, !0),
                n._removeClass(s, "ui-tabs-loading"),
                a.removeAttr("aria-busy"),
                e === n.xhr && delete n.xhr
            };
            this._isLocal(o[0]) || (this.xhr = e.ajax(this._ajaxSettings(o, i, r)),
            this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(s, "ui-tabs-loading"),
            a.attr("aria-busy", "true"),
            this.xhr.done((function(e, t, s) {
                setTimeout((function() {
                    a.html(e),
                    n._trigger("load", i, r),
                    l(s, t)
                }
                ), 1)
            }
            )).fail((function(e, t) {
                setTimeout((function() {
                    l(e, t)
                }
                ), 1)
            }
            ))))
        },
        _ajaxSettings: function(t, i, n) {
            var s = this;
            return {
                url: t.attr("href").replace(/#.*$/, ""),
                beforeSend: function(t, o) {
                    return s._trigger("beforeLoad", i, e.extend({
                        jqXHR: t,
                        ajaxSettings: o
                    }, n))
                }
            }
        },
        _getPanelForTab: function(t) {
            var i = e(t).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i))
        }
    }),
    !1 !== e.uiBackCompat && e.widget("ui.tabs", e.ui.tabs, {
        _processTabs: function() {
            this._superApply(arguments),
            this._addClass(this.tabs, "ui-tab")
        }
    });
    e.ui.tabs;
    /*!
 * jQuery UI Tooltip 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    e.widget("ui.tooltip", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-tooltip": "ui-corner-all ui-widget-shadow"
            },
            content: function() {
                var t = e(this).attr("title") || "";
                return e("<a>").text(t).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            track: !1,
            close: null,
            open: null
        },
        _addDescribedBy: function(t, i) {
            var n = (t.attr("aria-describedby") || "").split(/\s+/);
            n.push(i),
            t.data("ui-tooltip-id", i).attr("aria-describedby", e.trim(n.join(" ")))
        },
        _removeDescribedBy: function(t) {
            var i = t.data("ui-tooltip-id")
              , n = (t.attr("aria-describedby") || "").split(/\s+/)
              , s = e.inArray(i, n);
            -1 !== s && n.splice(s, 1),
            t.removeData("ui-tooltip-id"),
            (n = e.trim(n.join(" "))) ? t.attr("aria-describedby", n) : t.removeAttr("aria-describedby")
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            }),
            this.tooltips = {},
            this.parents = {},
            this.liveRegion = e("<div>").attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body),
            this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"),
            this.disabledTitles = e([])
        },
        _setOption: function(t, i) {
            var n = this;
            this._super(t, i),
            "content" === t && e.each(this.tooltips, (function(e, t) {
                n._updateContent(t.element)
            }
            ))
        },
        _setOptionDisabled: function(e) {
            this[e ? "_disable" : "_enable"]()
        },
        _disable: function() {
            var t = this;
            e.each(this.tooltips, (function(i, n) {
                var s = e.Event("blur");
                s.target = s.currentTarget = n.element[0],
                t.close(s, !0)
            }
            )),
            this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter((function() {
                var t = e(this);
                if (t.is("[title]"))
                    return t.data("ui-tooltip-title", t.attr("title")).removeAttr("title")
            }
            )))
        },
        _enable: function() {
            this.disabledTitles.each((function() {
                var t = e(this);
                t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
            }
            )),
            this.disabledTitles = e([])
        },
        open: function(t) {
            var i = this
              , n = e(t ? t.target : this.element).closest(this.options.items);
            n.length && !n.data("ui-tooltip-id") && (n.attr("title") && n.data("ui-tooltip-title", n.attr("title")),
            n.data("ui-tooltip-open", !0),
            t && "mouseover" === t.type && n.parents().each((function() {
                var t, n = e(this);
                n.data("ui-tooltip-open") && ((t = e.Event("blur")).target = t.currentTarget = this,
                i.close(t, !0)),
                n.attr("title") && (n.uniqueId(),
                i.parents[this.id] = {
                    element: this,
                    title: n.attr("title")
                },
                n.attr("title", ""))
            }
            )),
            this._registerCloseHandlers(t, n),
            this._updateContent(n, t))
        },
        _updateContent: function(e, t) {
            var i, n = this.options.content, s = this, o = t ? t.type : null;
            if ("string" == typeof n || n.nodeType || n.jquery)
                return this._open(t, e, n);
            (i = n.call(e[0], (function(i) {
                s._delay((function() {
                    e.data("ui-tooltip-open") && (t && (t.type = o),
                    this._open(t, e, i))
                }
                ))
            }
            ))) && this._open(t, e, i)
        },
        _open: function(t, i, n) {
            var s, o, a, r, l = e.extend({}, this.options.position);
            function c(e) {
                l.of = e,
                o.is(":hidden") || o.position(l)
            }
            n && ((s = this._find(i)) ? s.tooltip.find(".ui-tooltip-content").html(n) : (i.is("[title]") && (t && "mouseover" === t.type ? i.attr("title", "") : i.removeAttr("title")),
            s = this._tooltip(i),
            o = s.tooltip,
            this._addDescribedBy(i, o.attr("id")),
            o.find(".ui-tooltip-content").html(n),
            this.liveRegion.children().hide(),
            (r = e("<div>").html(o.find(".ui-tooltip-content").html())).removeAttr("name").find("[name]").removeAttr("name"),
            r.removeAttr("id").find("[id]").removeAttr("id"),
            r.appendTo(this.liveRegion),
            this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, {
                mousemove: c
            }),
            c(t)) : o.position(e.extend({
                of: i
            }, this.options.position)),
            o.hide(),
            this._show(o, this.options.show),
            this.options.track && this.options.show && this.options.show.delay && (a = this.delayedShow = setInterval((function() {
                o.is(":visible") && (c(l.of),
                clearInterval(a))
            }
            ), e.fx.interval)),
            this._trigger("open", t, {
                tooltip: o
            })))
        },
        _registerCloseHandlers: function(t, i) {
            var n = {
                keyup: function(t) {
                    if (t.keyCode === e.ui.keyCode.ESCAPE) {
                        var n = e.Event(t);
                        n.currentTarget = i[0],
                        this.close(n, !0)
                    }
                }
            };
            i[0] !== this.element[0] && (n.remove = function() {
                this._removeTooltip(this._find(i).tooltip)
            }
            ),
            t && "mouseover" !== t.type || (n.mouseleave = "close"),
            t && "focusin" !== t.type || (n.focusout = "close"),
            this._on(!0, i, n)
        },
        close: function(t) {
            var i, n = this, s = e(t ? t.currentTarget : this.element), o = this._find(s);
            o ? (i = o.tooltip,
            o.closing || (clearInterval(this.delayedShow),
            s.data("ui-tooltip-title") && !s.attr("title") && s.attr("title", s.data("ui-tooltip-title")),
            this._removeDescribedBy(s),
            o.hiding = !0,
            i.stop(!0),
            this._hide(i, this.options.hide, (function() {
                n._removeTooltip(e(this))
            }
            )),
            s.removeData("ui-tooltip-open"),
            this._off(s, "mouseleave focusout keyup"),
            s[0] !== this.element[0] && this._off(s, "remove"),
            this._off(this.document, "mousemove"),
            t && "mouseleave" === t.type && e.each(this.parents, (function(t, i) {
                e(i.element).attr("title", i.title),
                delete n.parents[t]
            }
            )),
            o.closing = !0,
            this._trigger("close", t, {
                tooltip: i
            }),
            o.hiding || (o.closing = !1))) : s.removeData("ui-tooltip-open")
        },
        _tooltip: function(t) {
            var i = e("<div>").attr("role", "tooltip")
              , n = e("<div>").appendTo(i)
              , s = i.uniqueId().attr("id");
            return this._addClass(n, "ui-tooltip-content"),
            this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"),
            i.appendTo(this._appendTo(t)),
            this.tooltips[s] = {
                element: t,
                tooltip: i
            }
        },
        _find: function(e) {
            var t = e.data("ui-tooltip-id");
            return t ? this.tooltips[t] : null
        },
        _removeTooltip: function(e) {
            e.remove(),
            delete this.tooltips[e.attr("id")]
        },
        _appendTo: function(e) {
            var t = e.closest(".ui-front, dialog");
            return t.length || (t = this.document[0].body),
            t
        },
        _destroy: function() {
            var t = this;
            e.each(this.tooltips, (function(i, n) {
                var s = e.Event("blur")
                  , o = n.element;
                s.target = s.currentTarget = o[0],
                t.close(s, !0),
                e("#" + i).remove(),
                o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")),
                o.removeData("ui-tooltip-title"))
            }
            )),
            this.liveRegion.remove()
        }
    }),
    !1 !== e.uiBackCompat && e.widget("ui.tooltip", e.ui.tooltip, {
        options: {
            tooltipClass: null
        },
        _tooltip: function() {
            var e = this._superApply(arguments);
            return this.options.tooltipClass && e.tooltip.addClass(this.options.tooltipClass),
            e
        }
    });
    e.ui.tooltip
}
)),
/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 */
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}((function(e) {
    var t, i, n = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], s = "onwheel"in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], o = Array.prototype.slice;
    if (e.event.fixHooks)
        for (var a = n.length; a; )
            e.event.fixHooks[n[--a]] = e.event.mouseHooks;
    var r = e.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var t = s.length; t; )
                    this.addEventListener(s[--t], l, !1);
            else
                this.onmousewheel = l;
            e.data(this, "mousewheel-line-height", r.getLineHeight(this)),
            e.data(this, "mousewheel-page-height", r.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var t = s.length; t; )
                    this.removeEventListener(s[--t], l, !1);
            else
                this.onmousewheel = null;
            e.removeData(this, "mousewheel-line-height"),
            e.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(t) {
            var i = e(t)
              , n = i["offsetParent"in e.fn ? "offsetParent" : "parent"]();
            return n.length || (n = e("body")),
            parseInt(n.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16
        },
        getPageHeight: function(t) {
            return e(t).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    function l(n) {
        var s = n || window.event
          , a = o.call(arguments, 1)
          , l = 0
          , h = 0
          , d = 0
          , p = 0
          , f = 0
          , m = 0;
        if ((n = e.event.fix(s)).type = "mousewheel",
        "detail"in s && (d = -1 * s.detail),
        "wheelDelta"in s && (d = s.wheelDelta),
        "wheelDeltaY"in s && (d = s.wheelDeltaY),
        "wheelDeltaX"in s && (h = -1 * s.wheelDeltaX),
        "axis"in s && s.axis === s.HORIZONTAL_AXIS && (h = -1 * d,
        d = 0),
        l = 0 === d ? h : d,
        "deltaY"in s && (l = d = -1 * s.deltaY),
        "deltaX"in s && (h = s.deltaX,
        0 === d && (l = -1 * h)),
        0 !== d || 0 !== h) {
            if (1 === s.deltaMode) {
                var g = e.data(this, "mousewheel-line-height");
                l *= g,
                d *= g,
                h *= g
            } else if (2 === s.deltaMode) {
                var v = e.data(this, "mousewheel-page-height");
                l *= v,
                d *= v,
                h *= v
            }
            if (p = Math.max(Math.abs(d), Math.abs(h)),
            (!i || p < i) && (i = p,
            u(s, p) && (i /= 40)),
            u(s, p) && (l /= 40,
            h /= 40,
            d /= 40),
            l = Math[l >= 1 ? "floor" : "ceil"](l / i),
            h = Math[h >= 1 ? "floor" : "ceil"](h / i),
            d = Math[d >= 1 ? "floor" : "ceil"](d / i),
            r.settings.normalizeOffset && this.getBoundingClientRect) {
                var _ = this.getBoundingClientRect();
                f = n.clientX - _.left,
                m = n.clientY - _.top
            }
            return n.deltaX = h,
            n.deltaY = d,
            n.deltaFactor = i,
            n.offsetX = f,
            n.offsetY = m,
            n.deltaMode = 0,
            a.unshift(n, l, h, d),
            t && clearTimeout(t),
            t = setTimeout(c, 200),
            (e.event.dispatch || e.event.handle).apply(this, a)
        }
    }
    function c() {
        i = null
    }
    function u(e, t) {
        return r.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
    }
    e.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function(e) {
            return this.unbind("mousewheel", e)
        }
    })
}
)),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e : e(jQuery, window, document)
}((function(e) {
    var t, i, n, s, o, a, r, l, c, u, h, d, p, f, m, g, v, _, b, y, w, x, C, k, S, D, T, $, I, P, A, E, M, O, N, L, H, F, B, R, z, j, W, q, U, V, Y, X, K, G, Q, Z, J, ee, te, ie, ne, se, oe, ae, re;
    oe = "function" == typeof define && define.amd,
    ae = "undefined" != typeof module && module.exports,
    re = "https:" == document.location.protocol ? "https:" : "http:",
    oe || (ae ? require("jquery-mousewheel")(e) : e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + re + "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E"))),
    i = "mCustomScrollbar",
    n = "mCS",
    s = ".mCustomScrollbar",
    o = {
        setTop: 0,
        setLeft: 0,
        axis: "y",
        scrollbarPosition: "inside",
        scrollInertia: 950,
        autoDraggerLength: !0,
        alwaysShowScrollbar: 0,
        snapOffset: 0,
        mouseWheel: {
            enable: !0,
            scrollAmount: "auto",
            axis: "y",
            deltaFactor: "auto",
            disableOver: ["select", "option", "keygen", "datalist", "textarea"]
        },
        scrollButtons: {
            scrollType: "stepless",
            scrollAmount: "auto"
        },
        keyboard: {
            enable: !0,
            scrollType: "stepless",
            scrollAmount: "auto"
        },
        contentTouchScroll: 25,
        documentTouchScroll: !0,
        advanced: {
            autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
            updateOnContentResize: !0,
            updateOnImageLoad: "auto",
            autoUpdateTimeout: 60
        },
        theme: "light",
        callbacks: {
            onTotalScrollOffset: 0,
            onTotalScrollBackOffset: 0,
            alwaysTriggerOffsets: !0
        }
    },
    a = 0,
    r = {},
    l = window.attachEvent && !window.addEventListener ? 1 : 0,
    c = !1,
    u = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
    h = {
        init: function(t) {
            t = e.extend(!0, {}, o, t);
            var i = d.call(this);
            if (t.live) {
                var l = t.liveSelector || this.selector || s
                  , c = e(l);
                if ("off" === t.live)
                    return void f(l);
                r[l] = setTimeout((function() {
                    c.mCustomScrollbar(t),
                    "once" === t.live && c.length && f(l)
                }
                ), 500)
            } else
                f(l);
            return t.setWidth = t.set_width ? t.set_width : t.setWidth,
            t.setHeight = t.set_height ? t.set_height : t.setHeight,
            t.axis = t.horizontalScroll ? "x" : m(t.axis),
            t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia,
            "object" != typeof t.mouseWheel && 1 == t.mouseWheel && (t.mouseWheel = {
                enable: !0,
                scrollAmount: "auto",
                axis: "y",
                preventDefault: !1,
                deltaFactor: "auto",
                normalizeDelta: !1,
                invert: !1
            }),
            t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount,
            t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta,
            t.scrollButtons.scrollType = g(t.scrollButtons.scrollType),
            p(t),
            e(i).each((function() {
                var i = e(this);
                if (!i.data(n)) {
                    i.data(n, {
                        idx: ++a,
                        opt: t,
                        scrollRatio: {
                            y: null,
                            x: null
                        },
                        overflowed: null,
                        contentReset: {
                            y: null,
                            x: null
                        },
                        bindEvents: !1,
                        tweenRunning: !1,
                        sequential: {},
                        langDir: i.css("direction"),
                        cbOffsets: null,
                        trigger: null,
                        poll: {
                            size: {
                                o: 0,
                                n: 0
                            },
                            img: {
                                o: 0,
                                n: 0
                            },
                            change: {
                                o: 0,
                                n: 0
                            }
                        }
                    });
                    var s = i.data(n)
                      , o = s.opt
                      , r = i.data("mcs-axis")
                      , l = i.data("mcs-scrollbar-position")
                      , c = i.data("mcs-theme");
                    r && (o.axis = r),
                    l && (o.scrollbarPosition = l),
                    c && (o.theme = c,
                    p(o)),
                    v.call(this),
                    s && o.callbacks.onCreate && "function" == typeof o.callbacks.onCreate && o.callbacks.onCreate.call(this),
                    e("#mCSB_" + s.idx + "_container img:not(." + u[2] + ")").addClass(u[2]),
                    h.update.call(null, i)
                }
            }
            ))
        },
        update: function(t, i) {
            var s = t || d.call(this);
            return e(s).each((function() {
                var t = e(this);
                if (t.data(n)) {
                    var s = t.data(n)
                      , o = s.opt
                      , a = e("#mCSB_" + s.idx + "_container")
                      , r = e("#mCSB_" + s.idx)
                      , l = [e("#mCSB_" + s.idx + "_dragger_vertical"), e("#mCSB_" + s.idx + "_dragger_horizontal")];
                    if (!a.length)
                        return;
                    s.tweenRunning && X(t),
                    i && s && o.callbacks.onBeforeUpdate && "function" == typeof o.callbacks.onBeforeUpdate && o.callbacks.onBeforeUpdate.call(this),
                    t.hasClass(u[3]) && t.removeClass(u[3]),
                    t.hasClass(u[4]) && t.removeClass(u[4]),
                    r.css("max-height", "none"),
                    r.height() !== t.height() && r.css("max-height", t.height()),
                    b.call(this),
                    "y" === o.axis || o.advanced.autoExpandHorizontalScroll || a.css("width", _(a)),
                    s.overflowed = k.call(this),
                    $.call(this),
                    o.autoDraggerLength && w.call(this),
                    x.call(this),
                    D.call(this);
                    var c = [Math.abs(a[0].offsetTop), Math.abs(a[0].offsetLeft)];
                    "x" !== o.axis && (s.overflowed[0] ? l[0].height() > l[0].parent().height() ? S.call(this) : (K(t, c[0].toString(), {
                        dir: "y",
                        dur: 0,
                        overwrite: "none"
                    }),
                    s.contentReset.y = null) : (S.call(this),
                    "y" === o.axis ? T.call(this) : "yx" === o.axis && s.overflowed[1] && K(t, c[1].toString(), {
                        dir: "x",
                        dur: 0,
                        overwrite: "none"
                    }))),
                    "y" !== o.axis && (s.overflowed[1] ? l[1].width() > l[1].parent().width() ? S.call(this) : (K(t, c[1].toString(), {
                        dir: "x",
                        dur: 0,
                        overwrite: "none"
                    }),
                    s.contentReset.x = null) : (S.call(this),
                    "x" === o.axis ? T.call(this) : "yx" === o.axis && s.overflowed[0] && K(t, c[0].toString(), {
                        dir: "y",
                        dur: 0,
                        overwrite: "none"
                    }))),
                    i && s && (2 === i && o.callbacks.onImageLoad && "function" == typeof o.callbacks.onImageLoad ? o.callbacks.onImageLoad.call(this) : 3 === i && o.callbacks.onSelectorChange && "function" == typeof o.callbacks.onSelectorChange ? o.callbacks.onSelectorChange.call(this) : o.callbacks.onUpdate && "function" == typeof o.callbacks.onUpdate && o.callbacks.onUpdate.call(this)),
                    V.call(this)
                }
            }
            ))
        },
        scrollTo: function(t, i) {
            if (void 0 !== t && null != t) {
                var s = d.call(this);
                return e(s).each((function() {
                    var s = e(this);
                    if (s.data(n)) {
                        var o = s.data(n)
                          , a = o.opt
                          , r = {
                            trigger: "external",
                            scrollInertia: a.scrollInertia,
                            scrollEasing: "mcsEaseInOut",
                            moveDragger: !1,
                            timeout: 60,
                            callbacks: !0,
                            onStart: !0,
                            onUpdate: !0,
                            onComplete: !0
                        }
                          , l = e.extend(!0, {}, r, i)
                          , c = q.call(this, t)
                          , u = l.scrollInertia > 0 && l.scrollInertia < 17 ? 17 : l.scrollInertia;
                        c[0] = U.call(this, c[0], "y"),
                        c[1] = U.call(this, c[1], "x"),
                        l.moveDragger && (c[0] *= o.scrollRatio.y,
                        c[1] *= o.scrollRatio.x),
                        l.dur = se() ? 0 : u,
                        setTimeout((function() {
                            null !== c[0] && void 0 !== c[0] && "x" !== a.axis && o.overflowed[0] && (l.dir = "y",
                            l.overwrite = "all",
                            K(s, c[0].toString(), l)),
                            null !== c[1] && void 0 !== c[1] && "y" !== a.axis && o.overflowed[1] && (l.dir = "x",
                            l.overwrite = "none",
                            K(s, c[1].toString(), l))
                        }
                        ), l.timeout)
                    }
                }
                ))
            }
        },
        stop: function() {
            var t = d.call(this);
            return e(t).each((function() {
                var t = e(this);
                t.data(n) && X(t)
            }
            ))
        },
        disable: function(t) {
            var i = d.call(this);
            return e(i).each((function() {
                var i = e(this);
                i.data(n) && (i.data(n),
                V.call(this, "remove"),
                T.call(this),
                t && S.call(this),
                $.call(this, !0),
                i.addClass(u[3]))
            }
            ))
        },
        destroy: function() {
            var t = d.call(this);
            return e(t).each((function() {
                var s = e(this);
                if (s.data(n)) {
                    var o = s.data(n)
                      , a = o.opt
                      , r = e("#mCSB_" + o.idx)
                      , l = e("#mCSB_" + o.idx + "_container")
                      , c = e(".mCSB_" + o.idx + "_scrollbar");
                    a.live && f(a.liveSelector || e(t).selector),
                    V.call(this, "remove"),
                    T.call(this),
                    S.call(this),
                    s.removeData(n),
                    J(this, "mcs"),
                    c.remove(),
                    l.find("img." + u[2]).removeClass(u[2]),
                    r.replaceWith(l.contents()),
                    s.removeClass(i + " _" + n + "_" + o.idx + " " + u[6] + " " + u[7] + " " + u[5] + " " + u[3]).addClass(u[4])
                }
            }
            ))
        }
    },
    d = function() {
        return "object" != typeof e(this) || e(this).length < 1 ? s : this
    }
    ,
    p = function(t) {
        var i = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"]
          , n = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"]
          , s = ["minimal", "minimal-dark"]
          , o = ["minimal", "minimal-dark"]
          , a = ["minimal", "minimal-dark"];
        t.autoDraggerLength = !(e.inArray(t.theme, i) > -1) && t.autoDraggerLength,
        t.autoExpandScrollbar = !(e.inArray(t.theme, n) > -1) && t.autoExpandScrollbar,
        t.scrollButtons.enable = !(e.inArray(t.theme, s) > -1) && t.scrollButtons.enable,
        t.autoHideScrollbar = e.inArray(t.theme, o) > -1 || t.autoHideScrollbar,
        t.scrollbarPosition = e.inArray(t.theme, a) > -1 ? "outside" : t.scrollbarPosition
    }
    ,
    f = function(e) {
        r[e] && (clearTimeout(r[e]),
        J(r, e))
    }
    ,
    m = function(e) {
        return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y"
    }
    ,
    g = function(e) {
        return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless"
    }
    ,
    v = function() {
        var t = e(this)
          , s = t.data(n)
          , o = s.opt
          , a = o.autoExpandScrollbar ? " " + u[1] + "_expand" : ""
          , r = ["<div id='mCSB_" + s.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + s.idx + "_scrollbar mCS-" + o.theme + " mCSB_scrollTools_vertical" + a + "'><div class='" + u[12] + "'><div id='mCSB_" + s.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + s.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + s.idx + "_scrollbar mCS-" + o.theme + " mCSB_scrollTools_horizontal" + a + "'><div class='" + u[12] + "'><div id='mCSB_" + s.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"]
          , l = "yx" === o.axis ? "mCSB_vertical_horizontal" : "x" === o.axis ? "mCSB_horizontal" : "mCSB_vertical"
          , c = "yx" === o.axis ? r[0] + r[1] : "x" === o.axis ? r[1] : r[0]
          , h = "yx" === o.axis ? "<div id='mCSB_" + s.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : ""
          , d = o.autoHideScrollbar ? " " + u[6] : ""
          , p = "x" !== o.axis && "rtl" === s.langDir ? " " + u[7] : "";
        o.setWidth && t.css("width", o.setWidth),
        o.setHeight && t.css("height", o.setHeight),
        o.setLeft = "y" !== o.axis && "rtl" === s.langDir ? "989999px" : o.setLeft,
        t.addClass(i + " _" + n + "_" + s.idx + d + p).wrapInner("<div id='mCSB_" + s.idx + "' class='mCustomScrollBox mCS-" + o.theme + " " + l + "'><div id='mCSB_" + s.idx + "_container' class='mCSB_container' style='position:relative; top:" + o.setTop + "; left:" + o.setLeft + ";' dir='" + s.langDir + "' /></div>");
        var f = e("#mCSB_" + s.idx)
          , m = e("#mCSB_" + s.idx + "_container");
        "y" === o.axis || o.advanced.autoExpandHorizontalScroll || m.css("width", _(m)),
        "outside" === o.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"),
        t.css("overflow", "visible"),
        f.addClass("mCSB_outside").after(c)) : (f.addClass("mCSB_inside").append(c),
        m.wrap(h)),
        y.call(this);
        var g = [e("#mCSB_" + s.idx + "_dragger_vertical"), e("#mCSB_" + s.idx + "_dragger_horizontal")];
        g[0].css("min-height", g[0].height()),
        g[1].css("min-width", g[1].width())
    }
    ,
    _ = function(t) {
        var i = [t[0].scrollWidth, Math.max.apply(Math, t.children().map((function() {
            return e(this).outerWidth(!0)
        }
        )).get())]
          , n = t.parent().width();
        return i[0] > n ? i[0] : i[1] > n ? i[1] : "100%"
    }
    ,
    b = function() {
        var t = e(this).data(n)
          , i = t.opt
          , s = e("#mCSB_" + t.idx + "_container");
        if (i.advanced.autoExpandHorizontalScroll && "y" !== i.axis) {
            s.css({
                width: "auto",
                "min-width": 0,
                "overflow-x": "scroll"
            });
            var o = Math.ceil(s[0].scrollWidth);
            3 === i.advanced.autoExpandHorizontalScroll || 2 !== i.advanced.autoExpandHorizontalScroll && o > s.parent().width() ? s.css({
                width: o,
                "min-width": "100%",
                "overflow-x": "inherit"
            }) : s.css({
                "overflow-x": "inherit",
                position: "absolute"
            }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                width: Math.ceil(s[0].getBoundingClientRect().right + .4) - Math.floor(s[0].getBoundingClientRect().left),
                "min-width": "100%",
                position: "relative"
            }).unwrap()
        }
    }
    ,
    y = function() {
        var t = e(this).data(n)
          , i = t.opt
          , s = e(".mCSB_" + t.idx + "_scrollbar:first")
          , o = ie(i.scrollButtons.tabindex) ? "tabindex='" + i.scrollButtons.tabindex + "'" : ""
          , a = ["<a href='#' class='" + u[13] + "' " + o + " />", "<a href='#' class='" + u[14] + "' " + o + " />", "<a href='#' class='" + u[15] + "' " + o + " />", "<a href='#' class='" + u[16] + "' " + o + " />"]
          , r = ["x" === i.axis ? a[2] : a[0], "x" === i.axis ? a[3] : a[1], a[2], a[3]];
        i.scrollButtons.enable && s.prepend(r[0]).append(r[1]).next(".mCSB_scrollTools").prepend(r[2]).append(r[3])
    }
    ,
    w = function() {
        var t = e(this).data(n)
          , i = e("#mCSB_" + t.idx)
          , s = e("#mCSB_" + t.idx + "_container")
          , o = [e("#mCSB_" + t.idx + "_dragger_vertical"), e("#mCSB_" + t.idx + "_dragger_horizontal")]
          , a = [i.height() / s.outerHeight(!1), i.width() / s.outerWidth(!1)]
          , r = [parseInt(o[0].css("min-height")), Math.round(a[0] * o[0].parent().height()), parseInt(o[1].css("min-width")), Math.round(a[1] * o[1].parent().width())]
          , c = l && r[1] < r[0] ? r[0] : r[1]
          , u = l && r[3] < r[2] ? r[2] : r[3];
        o[0].css({
            height: c,
            "max-height": o[0].parent().height() - 10
        }).find(".mCSB_dragger_bar").css({
            "line-height": r[0] + "px"
        }),
        o[1].css({
            width: u,
            "max-width": o[1].parent().width() - 10
        })
    }
    ,
    x = function() {
        var t = e(this).data(n)
          , i = e("#mCSB_" + t.idx)
          , s = e("#mCSB_" + t.idx + "_container")
          , o = [e("#mCSB_" + t.idx + "_dragger_vertical"), e("#mCSB_" + t.idx + "_dragger_horizontal")]
          , a = [s.outerHeight(!1) - i.height(), s.outerWidth(!1) - i.width()]
          , r = [a[0] / (o[0].parent().height() - o[0].height()), a[1] / (o[1].parent().width() - o[1].width())];
        t.scrollRatio = {
            y: r[0],
            x: r[1]
        }
    }
    ,
    C = function(e, t, i) {
        var n = i ? u[0] + "_expanded" : ""
          , s = e.closest(".mCSB_scrollTools");
        "active" === t ? (e.toggleClass(u[0] + " " + n),
        s.toggleClass(u[1]),
        e[0]._draggable = e[0]._draggable ? 0 : 1) : e[0]._draggable || ("hide" === t ? (e.removeClass(u[0]),
        s.removeClass(u[1])) : (e.addClass(u[0]),
        s.addClass(u[1])))
    }
    ,
    k = function() {
        var t = e(this).data(n)
          , i = e("#mCSB_" + t.idx)
          , s = e("#mCSB_" + t.idx + "_container")
          , o = null == t.overflowed ? s.height() : s.outerHeight(!1)
          , a = null == t.overflowed ? s.width() : s.outerWidth(!1)
          , r = s[0].scrollHeight
          , l = s[0].scrollWidth;
        return r > o && (o = r),
        l > a && (a = l),
        [o > i.height(), a > i.width()]
    }
    ,
    S = function() {
        var t = e(this)
          , i = t.data(n)
          , s = i.opt
          , o = e("#mCSB_" + i.idx)
          , a = e("#mCSB_" + i.idx + "_container")
          , r = [e("#mCSB_" + i.idx + "_dragger_vertical"), e("#mCSB_" + i.idx + "_dragger_horizontal")];
        if (X(t),
        ("x" !== s.axis && !i.overflowed[0] || "y" === s.axis && i.overflowed[0]) && (r[0].add(a).css("top", 0),
        K(t, "_resetY")),
        "y" !== s.axis && !i.overflowed[1] || "x" === s.axis && i.overflowed[1]) {
            var l = dx = 0;
            "rtl" === i.langDir && (l = o.width() - a.outerWidth(!1),
            dx = Math.abs(l / i.scrollRatio.x)),
            a.css("left", l),
            r[1].css("left", dx),
            K(t, "_resetX")
        }
    }
    ,
    D = function() {
        var t = e(this)
          , i = t.data(n)
          , s = i.opt;
        if (!i.bindEvents) {
            if (P.call(this),
            s.contentTouchScroll && A.call(this),
            E.call(this),
            s.mouseWheel.enable) {
                function o() {
                    a = setTimeout((function() {
                        e.event.special.mousewheel ? (clearTimeout(a),
                        M.call(t[0])) : o()
                    }
                    ), 100)
                }
                var a;
                o()
            }
            F.call(this),
            R.call(this),
            s.advanced.autoScrollOnFocus && B.call(this),
            s.scrollButtons.enable && z.call(this),
            s.keyboard.enable && j.call(this),
            i.bindEvents = !0
        }
    }
    ,
    T = function() {
        var t = e(this)
          , i = t.data(n)
          , s = i.opt
          , o = n + "_" + i.idx
          , a = ".mCSB_" + i.idx + "_scrollbar"
          , r = e("#mCSB_" + i.idx + ",#mCSB_" + i.idx + "_container,#mCSB_" + i.idx + "_container_wrapper," + a + " ." + u[12] + ",#mCSB_" + i.idx + "_dragger_vertical,#mCSB_" + i.idx + "_dragger_horizontal," + a + ">a")
          , l = e("#mCSB_" + i.idx + "_container");
        s.advanced.releaseDraggableSelectors && r.add(e(s.advanced.releaseDraggableSelectors)),
        s.advanced.extraDraggableSelectors && r.add(e(s.advanced.extraDraggableSelectors)),
        i.bindEvents && (e(document).add(e(!N() || top.document)).unbind("." + o),
        r.each((function() {
            e(this).unbind("." + o)
        }
        )),
        clearTimeout(t[0]._focusTimeout),
        J(t[0], "_focusTimeout"),
        clearTimeout(i.sequential.step),
        J(i.sequential, "step"),
        clearTimeout(l[0].onCompleteTimeout),
        J(l[0], "onCompleteTimeout"),
        i.bindEvents = !1)
    }
    ,
    $ = function(t) {
        var i = e(this)
          , s = i.data(n)
          , o = s.opt
          , a = e("#mCSB_" + s.idx + "_container_wrapper")
          , r = a.length ? a : e("#mCSB_" + s.idx + "_container")
          , l = [e("#mCSB_" + s.idx + "_scrollbar_vertical"), e("#mCSB_" + s.idx + "_scrollbar_horizontal")]
          , c = [l[0].find(".mCSB_dragger"), l[1].find(".mCSB_dragger")];
        "x" !== o.axis && (s.overflowed[0] && !t ? (l[0].add(c[0]).add(l[0].children("a")).css("display", "block"),
        r.removeClass(u[8] + " " + u[10])) : (o.alwaysShowScrollbar ? (2 !== o.alwaysShowScrollbar && c[0].css("display", "none"),
        r.removeClass(u[10])) : (l[0].css("display", "none"),
        r.addClass(u[10])),
        r.addClass(u[8]))),
        "y" !== o.axis && (s.overflowed[1] && !t ? (l[1].add(c[1]).add(l[1].children("a")).css("display", "block"),
        r.removeClass(u[9] + " " + u[11])) : (o.alwaysShowScrollbar ? (2 !== o.alwaysShowScrollbar && c[1].css("display", "none"),
        r.removeClass(u[11])) : (l[1].css("display", "none"),
        r.addClass(u[11])),
        r.addClass(u[9]))),
        s.overflowed[0] || s.overflowed[1] ? i.removeClass(u[5]) : i.addClass(u[5])
    }
    ,
    I = function(t) {
        var i = t.type
          , n = t.target.ownerDocument !== document && null !== frameElement ? [e(frameElement).offset().top, e(frameElement).offset().left] : null
          , s = N() && t.target.ownerDocument !== top.document && null !== frameElement ? [e(t.view.frameElement).offset().top, e(t.view.frameElement).offset().left] : [0, 0];
        switch (i) {
        case "pointerdown":
        case "MSPointerDown":
        case "pointermove":
        case "MSPointerMove":
        case "pointerup":
        case "MSPointerUp":
            return n ? [t.originalEvent.pageY - n[0] + s[0], t.originalEvent.pageX - n[1] + s[1], !1] : [t.originalEvent.pageY, t.originalEvent.pageX, !1];
        case "touchstart":
        case "touchmove":
        case "touchend":
            var o = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0]
              , a = t.originalEvent.touches.length || t.originalEvent.changedTouches.length;
            return t.target.ownerDocument !== document ? [o.screenY, o.screenX, a > 1] : [o.pageY, o.pageX, a > 1];
        default:
            return n ? [t.pageY - n[0] + s[0], t.pageX - n[1] + s[1], !1] : [t.pageY, t.pageX, !1]
        }
    }
    ,
    P = function() {
        var t, i, s, o = e(this), a = o.data(n), r = a.opt, u = n + "_" + a.idx, h = ["mCSB_" + a.idx + "_dragger_vertical", "mCSB_" + a.idx + "_dragger_horizontal"], d = e("#mCSB_" + a.idx + "_container"), p = e("#" + h[0] + ",#" + h[1]), f = r.advanced.releaseDraggableSelectors ? p.add(e(r.advanced.releaseDraggableSelectors)) : p, m = r.advanced.extraDraggableSelectors ? e(!N() || top.document).add(e(r.advanced.extraDraggableSelectors)) : e(!N() || top.document);
        function g(e, i, n, s) {
            if (d[0].idleTimer = r.scrollInertia < 233 ? 250 : 0,
            t.attr("id") === h[1])
                var l = "x"
                  , c = (t[0].offsetLeft - i + s) * a.scrollRatio.x;
            else
                l = "y",
                c = (t[0].offsetTop - e + n) * a.scrollRatio.y;
            K(o, c.toString(), {
                dir: l,
                drag: !0
            })
        }
        p.bind("contextmenu." + u, (function(e) {
            e.preventDefault()
        }
        )).bind("mousedown." + u + " touchstart." + u + " pointerdown." + u + " MSPointerDown." + u, (function(n) {
            if (n.stopImmediatePropagation(),
            n.preventDefault(),
            ee(n)) {
                c = !0,
                l && (document.onselectstart = function() {
                    return !1
                }
                ),
                L.call(d, !1),
                X(o);
                var a = (t = e(this)).offset()
                  , u = I(n)[0] - a.top
                  , h = I(n)[1] - a.left
                  , p = t.height() + a.top
                  , f = t.width() + a.left;
                u < p && u > 0 && h < f && h > 0 && (i = u,
                s = h),
                C(t, "active", r.autoExpandScrollbar)
            }
        }
        )).bind("touchmove." + u, (function(e) {
            e.stopImmediatePropagation(),
            e.preventDefault();
            var n = t.offset()
              , o = I(e)[0] - n.top
              , a = I(e)[1] - n.left;
            g(i, s, o, a)
        }
        )),
        e(document).add(m).bind("mousemove." + u + " pointermove." + u + " MSPointerMove." + u, (function(e) {
            if (t) {
                var n = t.offset()
                  , o = I(e)[0] - n.top
                  , a = I(e)[1] - n.left;
                if (i === o && s === a)
                    return;
                g(i, s, o, a)
            }
        }
        )).add(f).bind("mouseup." + u + " touchend." + u + " pointerup." + u + " MSPointerUp." + u, (function(e) {
            t && (C(t, "active", r.autoExpandScrollbar),
            t = null),
            c = !1,
            l && (document.onselectstart = null),
            L.call(d, !0)
        }
        ))
    }
    ,
    A = function() {
        var i, s, o, a, r, l, u, h, d, p, f, m, g, v, _ = e(this), b = _.data(n), y = b.opt, w = n + "_" + b.idx, x = e("#mCSB_" + b.idx), C = e("#mCSB_" + b.idx + "_container"), k = [e("#mCSB_" + b.idx + "_dragger_vertical"), e("#mCSB_" + b.idx + "_dragger_horizontal")], S = [], D = [], T = 0, $ = "yx" === y.axis ? "none" : "all", P = [], A = C.find("iframe"), E = ["touchstart." + w + " pointerdown." + w + " MSPointerDown." + w, "touchmove." + w + " pointermove." + w + " MSPointerMove." + w, "touchend." + w + " pointerup." + w + " MSPointerUp." + w], M = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;
        function O(e) {
            if (!te(e) || c || I(e)[2])
                t = 0;
            else {
                t = 1,
                g = 0,
                v = 0,
                i = 1,
                _.removeClass("mCS_touch_action");
                var n = C.offset();
                s = I(e)[0] - n.top,
                o = I(e)[1] - n.left,
                P = [I(e)[0], I(e)[1]]
            }
        }
        function L(e) {
            if (te(e) && !c && !I(e)[2] && (y.documentTouchScroll || e.preventDefault(),
            e.stopImmediatePropagation(),
            (!v || g) && i)) {
                u = Q();
                var t = x.offset()
                  , n = I(e)[0] - t.top
                  , a = I(e)[1] - t.left
                  , r = "mcsLinearOut";
                if (S.push(n),
                D.push(a),
                P[2] = Math.abs(I(e)[0] - P[0]),
                P[3] = Math.abs(I(e)[1] - P[1]),
                b.overflowed[0])
                    var l = k[0].parent().height() - k[0].height()
                      , h = s - n > 0 && n - s > -l * b.scrollRatio.y && (2 * P[3] < P[2] || "yx" === y.axis);
                if (b.overflowed[1])
                    var d = k[1].parent().width() - k[1].width()
                      , p = o - a > 0 && a - o > -d * b.scrollRatio.x && (2 * P[2] < P[3] || "yx" === y.axis);
                h || p ? (M || e.preventDefault(),
                g = 1) : (v = 1,
                _.addClass("mCS_touch_action")),
                M && e.preventDefault(),
                f = "yx" === y.axis ? [s - n, o - a] : "x" === y.axis ? [null, o - a] : [s - n, null],
                C[0].idleTimer = 250,
                b.overflowed[0] && R(f[0], T, r, "y", "all", !0),
                b.overflowed[1] && R(f[1], T, r, "x", $, !0)
            }
        }
        function H(e) {
            if (!te(e) || c || I(e)[2])
                t = 0;
            else {
                t = 1,
                e.stopImmediatePropagation(),
                X(_),
                l = Q();
                var i = x.offset();
                a = I(e)[0] - i.top,
                r = I(e)[1] - i.left,
                S = [],
                D = []
            }
        }
        function F(e) {
            if (te(e) && !c && !I(e)[2]) {
                i = 0,
                e.stopImmediatePropagation(),
                g = 0,
                v = 0,
                h = Q();
                var t = x.offset()
                  , n = I(e)[0] - t.top
                  , s = I(e)[1] - t.left;
                if (!(h - u > 30)) {
                    var o = "mcsEaseOut"
                      , _ = (p = 1e3 / (h - l)) < 2.5
                      , w = _ ? [S[S.length - 2], D[D.length - 2]] : [0, 0];
                    d = _ ? [n - w[0], s - w[1]] : [n - a, s - r];
                    var k = [Math.abs(d[0]), Math.abs(d[1])];
                    p = _ ? [Math.abs(d[0] / 4), Math.abs(d[1] / 4)] : [p, p];
                    var T = [Math.abs(C[0].offsetTop) - d[0] * B(k[0] / p[0], p[0]), Math.abs(C[0].offsetLeft) - d[1] * B(k[1] / p[1], p[1])];
                    f = "yx" === y.axis ? [T[0], T[1]] : "x" === y.axis ? [null, T[1]] : [T[0], null],
                    m = [4 * k[0] + y.scrollInertia, 4 * k[1] + y.scrollInertia];
                    var P = parseInt(y.contentTouchScroll) || 0;
                    f[0] = k[0] > P ? f[0] : 0,
                    f[1] = k[1] > P ? f[1] : 0,
                    b.overflowed[0] && R(f[0], m[0], o, "y", $, !1),
                    b.overflowed[1] && R(f[1], m[1], o, "x", $, !1)
                }
            }
        }
        function B(e, t) {
            var i = [1.5 * t, 2 * t, t / 1.5, t / 2];
            return e > 90 ? t > 4 ? i[0] : i[3] : e > 60 ? t > 3 ? i[3] : i[2] : e > 30 ? t > 8 ? i[1] : t > 6 ? i[0] : t > 4 ? t : i[2] : t > 8 ? t : i[3]
        }
        function R(e, t, i, n, s, o) {
            e && K(_, e.toString(), {
                dur: t,
                scrollEasing: i,
                dir: n,
                overwrite: s,
                drag: o
            })
        }
        C.bind(E[0], (function(e) {
            O(e)
        }
        )).bind(E[1], (function(e) {
            L(e)
        }
        )),
        x.bind(E[0], (function(e) {
            H(e)
        }
        )).bind(E[2], (function(e) {
            F(e)
        }
        )),
        A.length && A.each((function() {
            e(this).bind("load", (function() {
                N(this) && e(this.contentDocument || this.contentWindow.document).bind(E[0], (function(e) {
                    O(e),
                    H(e)
                }
                )).bind(E[1], (function(e) {
                    L(e)
                }
                )).bind(E[2], (function(e) {
                    F(e)
                }
                ))
            }
            ))
        }
        ))
    }
    ,
    E = function() {
        var i, s = e(this), o = s.data(n), a = o.opt, r = o.sequential, l = n + "_" + o.idx, u = e("#mCSB_" + o.idx + "_container"), h = u.parent();
        function d() {
            return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0
        }
        function p(e, t, n) {
            r.type = n && i ? "stepped" : "stepless",
            r.scrollAmount = 10,
            W(s, e, t, "mcsLinearOut", n ? 60 : null)
        }
        u.bind("mousedown." + l, (function(e) {
            t || i || (i = 1,
            c = !0)
        }
        )).add(document).bind("mousemove." + l, (function(e) {
            if (!t && i && d()) {
                var n = u.offset()
                  , s = I(e)[0] - n.top + u[0].offsetTop
                  , l = I(e)[1] - n.left + u[0].offsetLeft;
                s > 0 && s < h.height() && l > 0 && l < h.width() ? r.step && p("off", null, "stepped") : ("x" !== a.axis && o.overflowed[0] && (s < 0 ? p("on", 38) : s > h.height() && p("on", 40)),
                "y" !== a.axis && o.overflowed[1] && (l < 0 ? p("on", 37) : l > h.width() && p("on", 39)))
            }
        }
        )).bind("mouseup." + l + " dragend." + l, (function(e) {
            t || (i && (i = 0,
            p("off", null)),
            c = !1)
        }
        ))
    }
    ,
    M = function() {
        if (e(this).data(n)) {
            var t = e(this)
              , i = t.data(n)
              , s = i.opt
              , o = n + "_" + i.idx
              , a = e("#mCSB_" + i.idx)
              , r = [e("#mCSB_" + i.idx + "_dragger_vertical"), e("#mCSB_" + i.idx + "_dragger_horizontal")]
              , c = e("#mCSB_" + i.idx + "_container").find("iframe");
            c.length && c.each((function() {
                e(this).bind("load", (function() {
                    N(this) && e(this.contentDocument || this.contentWindow.document).bind("mousewheel." + o, (function(e, t) {
                        u(e, t)
                    }
                    ))
                }
                ))
            }
            )),
            a.bind("mousewheel." + o, (function(e, t) {
                u(e, t)
            }
            ))
        }
        function u(n, o) {
            if (X(t),
            !H(t, n.target)) {
                var c = "auto" !== s.mouseWheel.deltaFactor ? parseInt(s.mouseWheel.deltaFactor) : l && n.deltaFactor < 100 ? 100 : n.deltaFactor || 100
                  , u = s.scrollInertia;
                if ("x" === s.axis || "x" === s.mouseWheel.axis)
                    var h = "x"
                      , d = [Math.round(c * i.scrollRatio.x), parseInt(s.mouseWheel.scrollAmount)]
                      , p = "auto" !== s.mouseWheel.scrollAmount ? d[1] : d[0] >= a.width() ? .9 * a.width() : d[0]
                      , f = Math.abs(e("#mCSB_" + i.idx + "_container")[0].offsetLeft)
                      , m = r[1][0].offsetLeft
                      , g = r[1].parent().width() - r[1].width()
                      , v = "y" === s.mouseWheel.axis ? n.deltaY || o : n.deltaX;
                else
                    h = "y",
                    d = [Math.round(c * i.scrollRatio.y), parseInt(s.mouseWheel.scrollAmount)],
                    p = "auto" !== s.mouseWheel.scrollAmount ? d[1] : d[0] >= a.height() ? .9 * a.height() : d[0],
                    f = Math.abs(e("#mCSB_" + i.idx + "_container")[0].offsetTop),
                    m = r[0][0].offsetTop,
                    g = r[0].parent().height() - r[0].height(),
                    v = n.deltaY || o;
                "y" === h && !i.overflowed[0] || "x" === h && !i.overflowed[1] || ((s.mouseWheel.invert || n.webkitDirectionInvertedFromDevice) && (v = -v),
                s.mouseWheel.normalizeDelta && (v = v < 0 ? -1 : 1),
                (v > 0 && 0 !== m || v < 0 && m !== g || s.mouseWheel.preventDefault) && (n.stopImmediatePropagation(),
                n.preventDefault()),
                n.deltaFactor < 5 && !s.mouseWheel.normalizeDelta && (p = n.deltaFactor,
                u = 17),
                K(t, (f - v * p).toString(), {
                    dir: h,
                    dur: u
                }))
            }
        }
    }
    ,
    O = new Object,
    N = function(t) {
        var i = !1
          , n = !1
          , s = null;
        if (void 0 === t ? n = "#empty" : void 0 !== e(t).attr("id") && (n = e(t).attr("id")),
        !1 !== n && void 0 !== O[n])
            return O[n];
        if (t) {
            try {
                s = (t.contentDocument || t.contentWindow.document).body.innerHTML
            } catch (e) {}
            i = null !== s
        } else {
            try {
                s = top.document.body.innerHTML
            } catch (e) {}
            i = null !== s
        }
        return !1 !== n && (O[n] = i),
        i
    }
    ,
    L = function(e) {
        var t = this.find("iframe");
        if (t.length) {
            var i = e ? "auto" : "none";
            t.css("pointer-events", i)
        }
    }
    ,
    H = function(t, i) {
        var s = i.nodeName.toLowerCase()
          , o = t.data(n).opt.mouseWheel.disableOver
          , a = ["select", "textarea"];
        return e.inArray(s, o) > -1 && !(e.inArray(s, a) > -1 && !e(i).is(":focus"))
    }
    ,
    F = function() {
        var t, i = e(this), s = i.data(n), o = n + "_" + s.idx, a = e("#mCSB_" + s.idx + "_container"), r = a.parent();
        e(".mCSB_" + s.idx + "_scrollbar ." + u[12]).bind("mousedown." + o + " touchstart." + o + " pointerdown." + o + " MSPointerDown." + o, (function(i) {
            c = !0,
            e(i.target).hasClass("mCSB_dragger") || (t = 1)
        }
        )).bind("touchend." + o + " pointerup." + o + " MSPointerUp." + o, (function(e) {
            c = !1
        }
        )).bind("click." + o, (function(n) {
            if (t && (t = 0,
            e(n.target).hasClass(u[12]) || e(n.target).hasClass("mCSB_draggerRail"))) {
                X(i);
                var o = e(this)
                  , l = o.find(".mCSB_dragger");
                if (o.parent(".mCSB_scrollTools_horizontal").length > 0) {
                    if (!s.overflowed[1])
                        return;
                    var c = "x"
                      , h = n.pageX > l.offset().left ? -1 : 1
                      , d = Math.abs(a[0].offsetLeft) - h * (.9 * r.width())
                } else {
                    if (!s.overflowed[0])
                        return;
                    c = "y",
                    h = n.pageY > l.offset().top ? -1 : 1,
                    d = Math.abs(a[0].offsetTop) - h * (.9 * r.height())
                }
                K(i, d.toString(), {
                    dir: c,
                    scrollEasing: "mcsEaseInOut"
                })
            }
        }
        ))
    }
    ,
    B = function() {
        var t = e(this)
          , i = t.data(n)
          , s = i.opt
          , o = n + "_" + i.idx
          , a = e("#mCSB_" + i.idx + "_container")
          , r = a.parent();
        a.bind("focusin." + o, (function(i) {
            var n = e(document.activeElement)
              , o = a.find(".mCustomScrollBox").length
              , l = 0;
            n.is(s.advanced.autoScrollOnFocus) && (X(t),
            clearTimeout(t[0]._focusTimeout),
            t[0]._focusTimer = o ? (l + 17) * o : 0,
            t[0]._focusTimeout = setTimeout((function() {
                var e = [ne(n)[0], ne(n)[1]]
                  , i = [a[0].offsetTop, a[0].offsetLeft]
                  , o = [i[0] + e[0] >= 0 && i[0] + e[0] < r.height() - n.outerHeight(!1), i[1] + e[1] >= 0 && i[0] + e[1] < r.width() - n.outerWidth(!1)]
                  , c = "yx" !== s.axis || o[0] || o[1] ? "all" : "none";
                "x" === s.axis || o[0] || K(t, e[0].toString(), {
                    dir: "y",
                    scrollEasing: "mcsEaseInOut",
                    overwrite: c,
                    dur: l
                }),
                "y" === s.axis || o[1] || K(t, e[1].toString(), {
                    dir: "x",
                    scrollEasing: "mcsEaseInOut",
                    overwrite: c,
                    dur: l
                })
            }
            ), t[0]._focusTimer))
        }
        ))
    }
    ,
    R = function() {
        var t = e(this).data(n)
          , i = n + "_" + t.idx
          , s = e("#mCSB_" + t.idx + "_container").parent();
        s.bind("scroll." + i, (function(i) {
            0 === s.scrollTop() && 0 === s.scrollLeft() || e(".mCSB_" + t.idx + "_scrollbar").css("visibility", "hidden")
        }
        ))
    }
    ,
    z = function() {
        var t = e(this)
          , i = t.data(n)
          , s = i.opt
          , o = i.sequential
          , a = n + "_" + i.idx
          , r = ".mCSB_" + i.idx + "_scrollbar";
        e(r + ">a").bind("contextmenu." + a, (function(e) {
            e.preventDefault()
        }
        )).bind("mousedown." + a + " touchstart." + a + " pointerdown." + a + " MSPointerDown." + a + " mouseup." + a + " touchend." + a + " pointerup." + a + " MSPointerUp." + a + " mouseout." + a + " pointerout." + a + " MSPointerOut." + a + " click." + a, (function(n) {
            if (n.preventDefault(),
            ee(n)) {
                var a = e(this).attr("class");
                switch (o.type = s.scrollButtons.scrollType,
                n.type) {
                case "mousedown":
                case "touchstart":
                case "pointerdown":
                case "MSPointerDown":
                    if ("stepped" === o.type)
                        return;
                    c = !0,
                    i.tweenRunning = !1,
                    r("on", a);
                    break;
                case "mouseup":
                case "touchend":
                case "pointerup":
                case "MSPointerUp":
                case "mouseout":
                case "pointerout":
                case "MSPointerOut":
                    if ("stepped" === o.type)
                        return;
                    c = !1,
                    o.dir && r("off", a);
                    break;
                case "click":
                    if ("stepped" !== o.type || i.tweenRunning)
                        return;
                    r("on", a)
                }
            }
            function r(e, i) {
                o.scrollAmount = s.scrollButtons.scrollAmount,
                W(t, e, i)
            }
        }
        ))
    }
    ,
    j = function() {
        var t = e(this)
          , i = t.data(n)
          , s = i.opt
          , o = i.sequential
          , a = n + "_" + i.idx
          , r = e("#mCSB_" + i.idx)
          , l = e("#mCSB_" + i.idx + "_container")
          , c = l.parent()
          , u = "input,textarea,select,datalist,keygen,[contenteditable='true']"
          , h = l.find("iframe")
          , d = ["blur." + a + " keydown." + a + " keyup." + a];
        function p(n) {
            switch (n.type) {
            case "blur":
                i.tweenRunning && o.dir && f("off", null);
                break;
            case "keydown":
            case "keyup":
                var a = n.keyCode ? n.keyCode : n.which
                  , r = "on";
                if ("x" !== s.axis && (38 === a || 40 === a) || "y" !== s.axis && (37 === a || 39 === a)) {
                    if ((38 === a || 40 === a) && !i.overflowed[0] || (37 === a || 39 === a) && !i.overflowed[1])
                        return;
                    "keyup" === n.type && (r = "off"),
                    e(document.activeElement).is(u) || (n.preventDefault(),
                    n.stopImmediatePropagation(),
                    f(r, a))
                } else if (33 === a || 34 === a) {
                    if ((i.overflowed[0] || i.overflowed[1]) && (n.preventDefault(),
                    n.stopImmediatePropagation()),
                    "keyup" === n.type) {
                        X(t);
                        var h = 34 === a ? -1 : 1;
                        if ("x" === s.axis || "yx" === s.axis && i.overflowed[1] && !i.overflowed[0])
                            var d = "x"
                              , p = Math.abs(l[0].offsetLeft) - h * (.9 * c.width());
                        else
                            d = "y",
                            p = Math.abs(l[0].offsetTop) - h * (.9 * c.height());
                        K(t, p.toString(), {
                            dir: d,
                            scrollEasing: "mcsEaseInOut"
                        })
                    }
                } else
                    35 !== a && 36 !== a || e(document.activeElement).is(u) || ((i.overflowed[0] || i.overflowed[1]) && (n.preventDefault(),
                    n.stopImmediatePropagation()),
                    "keyup" !== n.type) || ("x" === s.axis || "yx" === s.axis && i.overflowed[1] && !i.overflowed[0] ? (d = "x",
                    p = 35 === a ? Math.abs(c.width() - l.outerWidth(!1)) : 0) : (d = "y",
                    p = 35 === a ? Math.abs(c.height() - l.outerHeight(!1)) : 0),
                    K(t, p.toString(), {
                        dir: d,
                        scrollEasing: "mcsEaseInOut"
                    }))
            }
            function f(e, n) {
                o.type = s.keyboard.scrollType,
                o.scrollAmount = s.keyboard.scrollAmount,
                "stepped" === o.type && i.tweenRunning || W(t, e, n)
            }
        }
        h.length && h.each((function() {
            e(this).bind("load", (function() {
                N(this) && e(this.contentDocument || this.contentWindow.document).bind(d[0], (function(e) {
                    p(e)
                }
                ))
            }
            ))
        }
        )),
        r.attr("tabindex", "0").bind(d[0], (function(e) {
            p(e)
        }
        ))
    }
    ,
    W = function(t, i, s, o, a) {
        var r = t.data(n)
          , l = r.opt
          , c = r.sequential
          , h = e("#mCSB_" + r.idx + "_container")
          , d = "stepped" === c.type
          , p = l.scrollInertia < 26 ? 26 : l.scrollInertia
          , f = l.scrollInertia < 1 ? 17 : l.scrollInertia;
        switch (i) {
        case "on":
            if (c.dir = [s === u[16] || s === u[15] || 39 === s || 37 === s ? "x" : "y", s === u[13] || s === u[15] || 38 === s || 37 === s ? -1 : 1],
            X(t),
            ie(s) && "stepped" === c.type)
                return;
            m(d);
            break;
        case "off":
            g(),
            (d || r.tweenRunning && c.dir) && m(!0)
        }
        function m(e) {
            l.snapAmount && (c.scrollAmount = l.snapAmount instanceof Array ? "x" === c.dir[0] ? l.snapAmount[1] : l.snapAmount[0] : l.snapAmount);
            var i = "stepped" !== c.type
              , n = a || (e ? i ? p / 1.5 : f : 1e3 / 60)
              , s = e ? i ? 7.5 : 40 : 2.5
              , u = [Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft)]
              , d = [r.scrollRatio.y > 10 ? 10 : r.scrollRatio.y, r.scrollRatio.x > 10 ? 10 : r.scrollRatio.x]
              , g = "x" === c.dir[0] ? u[1] + c.dir[1] * (d[1] * s) : u[0] + c.dir[1] * (d[0] * s)
              , v = "x" === c.dir[0] ? u[1] + c.dir[1] * parseInt(c.scrollAmount) : u[0] + c.dir[1] * parseInt(c.scrollAmount)
              , _ = "auto" !== c.scrollAmount ? v : g
              , b = o || (e ? i ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear")
              , y = !!e;
            e && n < 17 && (_ = "x" === c.dir[0] ? u[1] : u[0]),
            K(t, _.toString(), {
                dir: c.dir[0],
                scrollEasing: b,
                dur: n,
                onComplete: y
            }),
            e ? c.dir = !1 : (clearTimeout(c.step),
            c.step = setTimeout((function() {
                m()
            }
            ), n))
        }
        function g() {
            clearTimeout(c.step),
            J(c, "step"),
            X(t)
        }
    }
    ,
    q = function(t) {
        var i = e(this).data(n).opt
          , s = [];
        return "function" == typeof t && (t = t()),
        t instanceof Array ? s = t.length > 1 ? [t[0], t[1]] : "x" === i.axis ? [null, t[0]] : [t[0], null] : (s[0] = t.y ? t.y : t.x || "x" === i.axis ? null : t,
        s[1] = t.x ? t.x : t.y || "y" === i.axis ? null : t),
        "function" == typeof s[0] && (s[0] = s[0]()),
        "function" == typeof s[1] && (s[1] = s[1]()),
        s
    }
    ,
    U = function(t, i) {
        if (null != t && void 0 !== t) {
            var s = e(this)
              , o = s.data(n)
              , a = o.opt
              , r = e("#mCSB_" + o.idx + "_container")
              , l = r.parent()
              , c = typeof t;
            i || (i = "x" === a.axis ? "x" : "y");
            var u = "x" === i ? r.outerWidth(!1) - l.width() : r.outerHeight(!1) - l.height()
              , d = "x" === i ? r[0].offsetLeft : r[0].offsetTop
              , p = "x" === i ? "left" : "top";
            switch (c) {
            case "function":
                return t();
            case "object":
                if (!(m = t.jquery ? t : e(t)).length)
                    return;
                return "x" === i ? ne(m)[1] : ne(m)[0];
            case "string":
            case "number":
                if (ie(t))
                    return Math.abs(t);
                if (-1 !== t.indexOf("%"))
                    return Math.abs(u * parseInt(t) / 100);
                if (-1 !== t.indexOf("-="))
                    return Math.abs(d - parseInt(t.split("-=")[1]));
                if (-1 !== t.indexOf("+=")) {
                    var f = d + parseInt(t.split("+=")[1]);
                    return f >= 0 ? 0 : Math.abs(f)
                }
                if (-1 !== t.indexOf("px") && ie(t.split("px")[0]))
                    return Math.abs(t.split("px")[0]);
                if ("top" === t || "left" === t)
                    return 0;
                if ("bottom" === t)
                    return Math.abs(l.height() - r.outerHeight(!1));
                if ("right" === t)
                    return Math.abs(l.width() - r.outerWidth(!1));
                if ("first" === t || "last" === t) {
                    var m = r.find(":" + t);
                    return "x" === i ? ne(m)[1] : ne(m)[0]
                }
                return e(t).length ? "x" === i ? ne(e(t))[1] : ne(e(t))[0] : (r.css(p, t),
                void h.update.call(null, s[0]))
            }
        }
    }
    ,
    V = function(t) {
        var i = e(this)
          , s = i.data(n)
          , o = s.opt
          , a = e("#mCSB_" + s.idx + "_container");
        if (t)
            return clearTimeout(a[0].autoUpdate),
            void J(a[0], "autoUpdate");
        function r() {
            clearTimeout(a[0].autoUpdate),
            0 !== i.parents("html").length ? a[0].autoUpdate = setTimeout((function() {
                return o.advanced.updateOnSelectorChange && (s.poll.change.n = c(),
                s.poll.change.n !== s.poll.change.o) ? (s.poll.change.o = s.poll.change.n,
                void d(3)) : o.advanced.updateOnContentResize && (s.poll.size.n = i[0].scrollHeight + i[0].scrollWidth + a[0].offsetHeight + i[0].offsetHeight + i[0].offsetWidth,
                s.poll.size.n !== s.poll.size.o) ? (s.poll.size.o = s.poll.size.n,
                void d(1)) : !o.advanced.updateOnImageLoad || "auto" === o.advanced.updateOnImageLoad && "y" === o.axis || (s.poll.img.n = a.find("img").length,
                s.poll.img.n === s.poll.img.o) ? void ((o.advanced.updateOnSelectorChange || o.advanced.updateOnContentResize || o.advanced.updateOnImageLoad) && r()) : (s.poll.img.o = s.poll.img.n,
                void a.find("img").each((function() {
                    l(this)
                }
                )))
            }
            ), o.advanced.autoUpdateTimeout) : i = null
        }
        function l(t) {
            if (e(t).hasClass(u[2]))
                d();
            else {
                var i = new Image;
                i.onload = n(i, s),
                i.src = t.src
            }
            function n(e, t) {
                return function() {
                    return t.apply(e, arguments)
                }
            }
            function s() {
                this.onload = null,
                e(t).addClass(u[2]),
                d(2)
            }
        }
        function c() {
            !0 === o.advanced.updateOnSelectorChange && (o.advanced.updateOnSelectorChange = "*");
            var e = 0
              , t = a.find(o.advanced.updateOnSelectorChange);
            return o.advanced.updateOnSelectorChange && t.length > 0 && t.each((function() {
                e += this.offsetHeight + this.offsetWidth
            }
            )),
            e
        }
        function d(e) {
            clearTimeout(a[0].autoUpdate),
            h.update.call(null, i[0], e)
        }
        r()
    }
    ,
    Y = function(e, t, i) {
        return Math.round(e / t) * t - i
    }
    ,
    X = function(t) {
        var i = t.data(n);
        e("#mCSB_" + i.idx + "_container,#mCSB_" + i.idx + "_container_wrapper,#mCSB_" + i.idx + "_dragger_vertical,#mCSB_" + i.idx + "_dragger_horizontal").each((function() {
            Z.call(this)
        }
        ))
    }
    ,
    K = function(t, i, s) {
        var o = t.data(n)
          , a = o.opt
          , r = {
            trigger: "internal",
            dir: "y",
            scrollEasing: "mcsEaseOut",
            drag: !1,
            dur: a.scrollInertia,
            overwrite: "all",
            callbacks: !0,
            onStart: !0,
            onUpdate: !0,
            onComplete: !0
        }
          , l = [(s = e.extend(r, s)).dur, s.drag ? 0 : s.dur]
          , c = e("#mCSB_" + o.idx)
          , u = e("#mCSB_" + o.idx + "_container")
          , h = u.parent()
          , d = a.callbacks.onTotalScrollOffset ? q.call(t, a.callbacks.onTotalScrollOffset) : [0, 0]
          , p = a.callbacks.onTotalScrollBackOffset ? q.call(t, a.callbacks.onTotalScrollBackOffset) : [0, 0];
        if (o.trigger = s.trigger,
        0 === h.scrollTop() && 0 === h.scrollLeft() || (e(".mCSB_" + o.idx + "_scrollbar").css("visibility", "visible"),
        h.scrollTop(0).scrollLeft(0)),
        "_resetY" !== i || o.contentReset.y || (S("onOverflowYNone") && a.callbacks.onOverflowYNone.call(t[0]),
        o.contentReset.y = 1),
        "_resetX" !== i || o.contentReset.x || (S("onOverflowXNone") && a.callbacks.onOverflowXNone.call(t[0]),
        o.contentReset.x = 1),
        "_resetY" !== i && "_resetX" !== i) {
            if (!o.contentReset.y && t[0].mcs || !o.overflowed[0] || (S("onOverflowY") && a.callbacks.onOverflowY.call(t[0]),
            o.contentReset.x = null),
            !o.contentReset.x && t[0].mcs || !o.overflowed[1] || (S("onOverflowX") && a.callbacks.onOverflowX.call(t[0]),
            o.contentReset.x = null),
            a.snapAmount) {
                var f = a.snapAmount instanceof Array ? "x" === s.dir ? a.snapAmount[1] : a.snapAmount[0] : a.snapAmount;
                i = Y(i, f, a.snapOffset)
            }
            switch (s.dir) {
            case "x":
                var m = e("#mCSB_" + o.idx + "_dragger_horizontal")
                  , g = "left"
                  , v = u[0].offsetLeft
                  , _ = [c.width() - u.outerWidth(!1), m.parent().width() - m.width()]
                  , b = [i, 0 === i ? 0 : i / o.scrollRatio.x]
                  , y = d[1]
                  , w = p[1]
                  , x = y > 0 ? y / o.scrollRatio.x : 0
                  , k = w > 0 ? w / o.scrollRatio.x : 0;
                break;
            case "y":
                m = e("#mCSB_" + o.idx + "_dragger_vertical"),
                g = "top",
                v = u[0].offsetTop,
                _ = [c.height() - u.outerHeight(!1), m.parent().height() - m.height()],
                b = [i, 0 === i ? 0 : i / o.scrollRatio.y],
                y = d[0],
                w = p[0],
                x = y > 0 ? y / o.scrollRatio.y : 0,
                k = w > 0 ? w / o.scrollRatio.y : 0
            }
            b[1] < 0 || 0 === b[0] && 0 === b[1] ? b = [0, 0] : b[1] >= _[1] ? b = [_[0], _[1]] : b[0] = -b[0],
            t[0].mcs || (T(),
            S("onInit") && a.callbacks.onInit.call(t[0])),
            clearTimeout(u[0].onCompleteTimeout),
            G(m[0], g, Math.round(b[1]), l[1], s.scrollEasing),
            !o.tweenRunning && (0 === v && b[0] >= 0 || v === _[0] && b[0] <= _[0]) || G(u[0], g, Math.round(b[0]), l[0], s.scrollEasing, s.overwrite, {
                onStart: function() {
                    s.callbacks && s.onStart && !o.tweenRunning && (S("onScrollStart") && (T(),
                    a.callbacks.onScrollStart.call(t[0])),
                    o.tweenRunning = !0,
                    C(m),
                    o.cbOffsets = D())
                },
                onUpdate: function() {
                    s.callbacks && s.onUpdate && S("whileScrolling") && (T(),
                    a.callbacks.whileScrolling.call(t[0]))
                },
                onComplete: function() {
                    if (s.callbacks && s.onComplete) {
                        "yx" === a.axis && clearTimeout(u[0].onCompleteTimeout);
                        var e = u[0].idleTimer || 0;
                        u[0].onCompleteTimeout = setTimeout((function() {
                            S("onScroll") && (T(),
                            a.callbacks.onScroll.call(t[0])),
                            S("onTotalScroll") && b[1] >= _[1] - x && o.cbOffsets[0] && (T(),
                            a.callbacks.onTotalScroll.call(t[0])),
                            S("onTotalScrollBack") && b[1] <= k && o.cbOffsets[1] && (T(),
                            a.callbacks.onTotalScrollBack.call(t[0])),
                            o.tweenRunning = !1,
                            u[0].idleTimer = 0,
                            C(m, "hide")
                        }
                        ), e)
                    }
                }
            })
        }
        function S(e) {
            return o && a.callbacks[e] && "function" == typeof a.callbacks[e]
        }
        function D() {
            return [a.callbacks.alwaysTriggerOffsets || v >= _[0] + y, a.callbacks.alwaysTriggerOffsets || v <= -w]
        }
        function T() {
            var e = [u[0].offsetTop, u[0].offsetLeft]
              , i = [m[0].offsetTop, m[0].offsetLeft]
              , n = [u.outerHeight(!1), u.outerWidth(!1)]
              , o = [c.height(), c.width()];
            t[0].mcs = {
                content: u,
                top: e[0],
                left: e[1],
                draggerTop: i[0],
                draggerLeft: i[1],
                topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(n[0]) - o[0])),
                leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(n[1]) - o[1])),
                direction: s.dir
            }
        }
    }
    ,
    G = function(e, t, i, n, s, o, a) {
        e._mTween || (e._mTween = {
            top: {},
            left: {}
        });
        var r, l, c = (a = a || {}).onStart || function() {}
        , u = a.onUpdate || function() {}
        , h = a.onComplete || function() {}
        , d = Q(), p = 0, f = e.offsetTop, m = e.style, g = e._mTween[t];
        "left" === t && (f = e.offsetLeft);
        var v = i - f;
        function _() {
            g.stop || (p || c.call(),
            p = Q() - d,
            b(),
            p >= g.time && (g.time = p > g.time ? p + r - (p - g.time) : p + r - 1,
            g.time < p + 1 && (g.time = p + 1)),
            g.time < n ? g.id = l(_) : h.call())
        }
        function b() {
            n > 0 ? (g.currVal = x(g.time, f, v, n, s),
            m[t] = Math.round(g.currVal) + "px") : m[t] = i + "px",
            u.call()
        }
        function y() {
            r = 1e3 / 60,
            g.time = p + r,
            l = window.requestAnimationFrame ? window.requestAnimationFrame : function(e) {
                return b(),
                setTimeout(e, .01)
            }
            ,
            g.id = l(_)
        }
        function w() {
            null != g.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(g.id) : clearTimeout(g.id),
            g.id = null)
        }
        function x(e, t, i, n, s) {
            switch (s) {
            case "linear":
            case "mcsLinear":
                return i * e / n + t;
            case "mcsLinearOut":
                return e /= n,
                e--,
                i * Math.sqrt(1 - e * e) + t;
            case "easeInOutSmooth":
                return (e /= n / 2) < 1 ? i / 2 * e * e + t : -i / 2 * (--e * (e - 2) - 1) + t;
            case "easeInOutStrong":
                return (e /= n / 2) < 1 ? i / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--,
                i / 2 * (2 - Math.pow(2, -10 * e)) + t);
            case "easeInOut":
            case "mcsEaseInOut":
                return (e /= n / 2) < 1 ? i / 2 * e * e * e + t : i / 2 * ((e -= 2) * e * e + 2) + t;
            case "easeOutSmooth":
                return e /= n,
                -i * (--e * e * e * e - 1) + t;
            case "easeOutStrong":
                return i * (1 - Math.pow(2, -10 * e / n)) + t;
            default:
                var o = (e /= n) * e
                  , a = o * e;
                return t + i * (.499999999999997 * a * o + -2.5 * o * o + 5.5 * a + -6.5 * o + 4 * e)
            }
        }
        g.stop = 0,
        "none" !== o && w(),
        y()
    }
    ,
    Q = function() {
        return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
    }
    ,
    Z = function() {
        var e = this;
        e._mTween || (e._mTween = {
            top: {},
            left: {}
        });
        for (var t = ["top", "left"], i = 0; i < t.length; i++) {
            var n = t[i];
            e._mTween[n].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e._mTween[n].id) : clearTimeout(e._mTween[n].id),
            e._mTween[n].id = null,
            e._mTween[n].stop = 1)
        }
    }
    ,
    J = function(e, t) {
        try {
            delete e[t]
        } catch (i) {
            e[t] = null
        }
    }
    ,
    ee = function(e) {
        return !(e.which && 1 !== e.which)
    }
    ,
    te = function(e) {
        var t = e.originalEvent.pointerType;
        return !(t && "touch" !== t && 2 !== t)
    }
    ,
    ie = function(e) {
        return !isNaN(parseFloat(e)) && isFinite(e)
    }
    ,
    ne = function(e) {
        var t = e.parents(".mCSB_container");
        return [e.offset().top - t.offset().top, e.offset().left - t.offset().left]
    }
    ,
    se = function() {
        var e = t();
        return !!e && document[e];
        function t() {
            var e = ["webkit", "moz", "ms", "o"];
            if ("hidden"in document)
                return "hidden";
            for (var t = 0; t < e.length; t++)
                if (e[t] + "Hidden"in document)
                    return e[t] + "Hidden";
            return null
        }
    }
    ,
    e.fn[i] = function(t) {
        return h[t] ? h[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : h.init.apply(this, arguments)
    }
    ,
    e[i] = function(t) {
        return h[t] ? h[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : h.init.apply(this, arguments)
    }
    ,
    e[i].defaults = o,
    window[i] = !0,
    e(window).bind("load", (function() {
        e(s)[i](),
        e.extend(e.expr[":"], {
            mcsInView: e.expr[":"].mcsInView || function(t) {
                var i, n, s = e(t), o = s.parents(".mCSB_container");
                if (o.length)
                    return i = o.parent(),
                    (n = [o[0].offsetTop, o[0].offsetLeft])[0] + ne(s)[0] >= 0 && n[0] + ne(s)[0] < i.height() - s.outerHeight(!1) && n[1] + ne(s)[1] >= 0 && n[1] + ne(s)[1] < i.width() - s.outerWidth(!1)
            }
            ,
            mcsInSight: e.expr[":"].mcsInSight || function(t, i, n) {
                var s, o, a, r, l = e(t), c = l.parents(".mCSB_container"), u = "exact" === n[3] ? [[1, 0], [1, 0]] : [[.9, .1], [.6, .4]];
                if (c.length)
                    return s = [l.outerHeight(!1), l.outerWidth(!1)],
                    a = [c[0].offsetTop + ne(l)[0], c[0].offsetLeft + ne(l)[1]],
                    o = [c.parent()[0].offsetHeight, c.parent()[0].offsetWidth],
                    r = [s[0] < o[0] ? u[0] : u[1], s[1] < o[1] ? u[0] : u[1]],
                    a[0] - o[0] * r[0][0] < 0 && a[0] + s[0] - o[0] * r[0][1] >= 0 && a[1] - o[1] * r[1][0] < 0 && a[1] + s[1] - o[1] * r[1][1] >= 0
            }
            ,
            mcsOverflow: e.expr[":"].mcsOverflow || function(t) {
                var i = e(t).data(n);
                if (i)
                    return i.overflowed[0] || i.overflowed[1]
            }
        })
    }
    ))
}
)),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}((function(e) {
    var t = function() {
        if (e && e.fn && e.fn.select2 && e.fn.select2.amd)
            var t = e.fn.select2.amd;
        return function() {
            var e, i, n;
            t && t.requirejs || (t ? i = t : t = {},
            function(t) {
                function s(e, t) {
                    return b.call(e, t)
                }
                function o(e, t) {
                    var i, n, s, o, a, r, l, c, u, h, d, p = t && t.split("/"), f = v.map, m = f && f["*"] || {};
                    if (e && "." === e.charAt(0))
                        if (t) {
                            for (a = (e = e.split("/")).length - 1,
                            v.nodeIdCompat && w.test(e[a]) && (e[a] = e[a].replace(w, "")),
                            e = p.slice(0, p.length - 1).concat(e),
                            u = 0; u < e.length; u += 1)
                                if ("." === (d = e[u]))
                                    e.splice(u, 1),
                                    u -= 1;
                                else if (".." === d) {
                                    if (1 === u && (".." === e[2] || ".." === e[0]))
                                        break;
                                    u > 0 && (e.splice(u - 1, 2),
                                    u -= 2)
                                }
                            e = e.join("/")
                        } else
                            0 === e.indexOf("./") && (e = e.substring(2));
                    if ((p || m) && f) {
                        for (u = (i = e.split("/")).length; u > 0; u -= 1) {
                            if (n = i.slice(0, u).join("/"),
                            p)
                                for (h = p.length; h > 0; h -= 1)
                                    if ((s = f[p.slice(0, h).join("/")]) && (s = s[n])) {
                                        o = s,
                                        r = u;
                                        break
                                    }
                            if (o)
                                break;
                            !l && m && m[n] && (l = m[n],
                            c = u)
                        }
                        !o && l && (o = l,
                        r = c),
                        o && (i.splice(0, r, o),
                        e = i.join("/"))
                    }
                    return e
                }
                function a(e, i) {
                    return function() {
                        var n = y.call(arguments, 0);
                        return "string" != typeof n[0] && 1 === n.length && n.push(null),
                        d.apply(t, n.concat([e, i]))
                    }
                }
                function r(e) {
                    return function(t) {
                        m[e] = t
                    }
                }
                function l(e) {
                    if (s(g, e)) {
                        var i = g[e];
                        delete g[e],
                        _[e] = !0,
                        h.apply(t, i)
                    }
                    if (!s(m, e) && !s(_, e))
                        throw new Error("No " + e);
                    return m[e]
                }
                function c(e) {
                    var t, i = e ? e.indexOf("!") : -1;
                    return i > -1 && (t = e.substring(0, i),
                    e = e.substring(i + 1, e.length)),
                    [t, e]
                }
                function u(e) {
                    return function() {
                        return v && v.config && v.config[e] || {}
                    }
                }
                var h, d, p, f, m = {}, g = {}, v = {}, _ = {}, b = Object.prototype.hasOwnProperty, y = [].slice, w = /\.js$/;
                p = function(e, t) {
                    var i, n = c(e), s = n[0];
                    return e = n[1],
                    s && (i = l(s = o(s, t))),
                    s ? e = i && i.normalize ? i.normalize(e, function(e) {
                        return function(t) {
                            return o(t, e)
                        }
                    }(t)) : o(e, t) : (s = (n = c(e = o(e, t)))[0],
                    e = n[1],
                    s && (i = l(s))),
                    {
                        f: s ? s + "!" + e : e,
                        n: e,
                        pr: s,
                        p: i
                    }
                }
                ,
                f = {
                    require: function(e) {
                        return a(e)
                    },
                    exports: function(e) {
                        var t = m[e];
                        return void 0 !== t ? t : m[e] = {}
                    },
                    module: function(e) {
                        return {
                            id: e,
                            uri: "",
                            exports: m[e],
                            config: u(e)
                        }
                    }
                },
                h = function(e, i, n, o) {
                    var c, u, h, d, v, b, y = [], w = typeof n;
                    if (o = o || e,
                    "undefined" === w || "function" === w) {
                        for (i = !i.length && n.length ? ["require", "exports", "module"] : i,
                        v = 0; v < i.length; v += 1)
                            if ("require" === (u = (d = p(i[v], o)).f))
                                y[v] = f.require(e);
                            else if ("exports" === u)
                                y[v] = f.exports(e),
                                b = !0;
                            else if ("module" === u)
                                c = y[v] = f.module(e);
                            else if (s(m, u) || s(g, u) || s(_, u))
                                y[v] = l(u);
                            else {
                                if (!d.p)
                                    throw new Error(e + " missing " + u);
                                d.p.load(d.n, a(o, !0), r(u), {}),
                                y[v] = m[u]
                            }
                        h = n ? n.apply(m[e], y) : void 0,
                        e && (c && c.exports !== t && c.exports !== m[e] ? m[e] = c.exports : h === t && b || (m[e] = h))
                    } else
                        e && (m[e] = n)
                }
                ,
                e = i = d = function(e, i, n, s, o) {
                    if ("string" == typeof e)
                        return f[e] ? f[e](i) : l(p(e, i).f);
                    if (!e.splice) {
                        if ((v = e).deps && d(v.deps, v.callback),
                        !i)
                            return;
                        i.splice ? (e = i,
                        i = n,
                        n = null) : e = t
                    }
                    return i = i || function() {}
                    ,
                    "function" == typeof n && (n = s,
                    s = o),
                    s ? h(t, e, i, n) : setTimeout((function() {
                        h(t, e, i, n)
                    }
                    ), 4),
                    d
                }
                ,
                d.config = function(e) {
                    return d(e)
                }
                ,
                e._defined = m,
                n = function(e, t, i) {
                    if ("string" != typeof e)
                        throw new Error("See almond README: incorrect module build, no module name");
                    t.splice || (i = t,
                    t = []),
                    s(m, e) || s(g, e) || (g[e] = [e, t, i])
                }
                ,
                n.amd = {
                    jQuery: !0
                }
            }(),
            t.requirejs = e,
            t.require = i,
            t.define = n)
        }(),
        t.define("almond", (function() {}
        )),
        t.define("jquery", [], (function() {
            var t = e || $;
            return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),
            t
        }
        )),
        t.define("select2/utils", ["jquery"], (function(e) {
            function t(e) {
                var t = e.prototype
                  , i = [];
                for (var n in t) {
                    "function" == typeof t[n] && "constructor" !== n && i.push(n)
                }
                return i
            }
            var i = {
                Extend: function(e, t) {
                    function i() {
                        this.constructor = e
                    }
                    var n = {}.hasOwnProperty;
                    for (var s in t)
                        n.call(t, s) && (e[s] = t[s]);
                    return i.prototype = t.prototype,
                    e.prototype = new i,
                    e.__super__ = t.prototype,
                    e
                },
                Decorate: function(e, i) {
                    function n() {
                        var t = Array.prototype.unshift
                          , n = i.prototype.constructor.length
                          , s = e.prototype.constructor;
                        n > 0 && (t.call(arguments, e.prototype.constructor),
                        s = i.prototype.constructor),
                        s.apply(this, arguments)
                    }
                    var s = t(i)
                      , o = t(e);
                    i.displayName = e.displayName,
                    n.prototype = new function() {
                        this.constructor = n
                    }
                    ;
                    for (var a = 0; a < o.length; a++) {
                        var r = o[a];
                        n.prototype[r] = e.prototype[r]
                    }
                    for (var l = function(e) {
                        var t = function() {};
                        e in n.prototype && (t = n.prototype[e]);
                        var s = i.prototype[e];
                        return function() {
                            var e = Array.prototype.unshift;
                            return e.call(arguments, t),
                            s.apply(this, arguments)
                        }
                    }, c = 0; c < s.length; c++) {
                        var u = s[c];
                        n.prototype[u] = l(u)
                    }
                    return n
                }
            }
              , n = function() {
                this.listeners = {}
            };
            return n.prototype.on = function(e, t) {
                this.listeners = this.listeners || {},
                e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t]
            }
            ,
            n.prototype.trigger = function(e) {
                var t = Array.prototype.slice
                  , i = t.call(arguments, 1);
                this.listeners = this.listeners || {},
                null == i && (i = []),
                0 === i.length && i.push({}),
                i[0]._type = e,
                e in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)),
                "*"in this.listeners && this.invoke(this.listeners["*"], arguments)
            }
            ,
            n.prototype.invoke = function(e, t) {
                for (var i = 0, n = e.length; n > i; i++)
                    e[i].apply(this, t)
            }
            ,
            i.Observable = n,
            i.generateChars = function(e) {
                for (var t = "", i = 0; e > i; i++) {
                    t += Math.floor(36 * Math.random()).toString(36)
                }
                return t
            }
            ,
            i.bind = function(e, t) {
                return function() {
                    e.apply(t, arguments)
                }
            }
            ,
            i._convertData = function(e) {
                for (var t in e) {
                    var i = t.split("-")
                      , n = e;
                    if (1 !== i.length) {
                        for (var s = 0; s < i.length; s++) {
                            var o = i[s];
                            (o = o.substring(0, 1).toLowerCase() + o.substring(1))in n || (n[o] = {}),
                            s == i.length - 1 && (n[o] = e[t]),
                            n = n[o]
                        }
                        delete e[t]
                    }
                }
                return e
            }
            ,
            i.hasScroll = function(t, i) {
                var n = e(i)
                  , s = i.style.overflowX
                  , o = i.style.overflowY;
                return (s !== o || "hidden" !== o && "visible" !== o) && ("scroll" === s || "scroll" === o || (n.innerHeight() < i.scrollHeight || n.innerWidth() < i.scrollWidth))
            }
            ,
            i.escapeMarkup = function(e) {
                var t = {
                    "\\": "&#92;",
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#47;"
                };
                return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, (function(e) {
                    return t[e]
                }
                ))
            }
            ,
            i.appendMany = function(t, i) {
                if ("1.7" === e.fn.jquery.substr(0, 3)) {
                    var n = e();
                    e.map(i, (function(e) {
                        n = n.add(e)
                    }
                    )),
                    i = n
                }
                t.append(i)
            }
            ,
            i
        }
        )),
        t.define("select2/results", ["jquery", "./utils"], (function(e, t) {
            function i(e, t, n) {
                this.$element = e,
                this.data = n,
                this.options = t,
                i.__super__.constructor.call(this)
            }
            return t.Extend(i, t.Observable),
            i.prototype.render = function() {
                var t = e('<ul class="select2-results__options" role="tree"></ul>');
                return this.options.get("multiple") && t.attr("aria-multiselectable", "true"),
                this.$results = t,
                t
            }
            ,
            i.prototype.clear = function() {
                this.$results.empty()
            }
            ,
            i.prototype.displayMessage = function(t) {
                var i = this.options.get("escapeMarkup");
                this.clear(),
                this.hideLoading();
                var n = e('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>')
                  , s = this.options.get("translations").get(t.message);
                n.append(i(s(t.args))),
                n[0].className += " select2-results__message",
                this.$results.append(n)
            }
            ,
            i.prototype.hideMessages = function() {
                this.$results.find(".select2-results__message").remove()
            }
            ,
            i.prototype.append = function(e) {
                this.hideLoading();
                var t = [];
                if (null != e.results && 0 !== e.results.length) {
                    e.results = this.sort(e.results);
                    for (var i = 0; i < e.results.length; i++) {
                        var n = e.results[i]
                          , s = this.option(n);
                        t.push(s)
                    }
                    this.$results.append(t)
                } else
                    0 === this.$results.children().length && this.trigger("results:message", {
                        message: "noResults"
                    })
            }
            ,
            i.prototype.position = function(e, t) {
                t.find(".select2-results").append(e)
            }
            ,
            i.prototype.sort = function(e) {
                return this.options.get("sorter")(e)
            }
            ,
            i.prototype.highlightFirstItem = function() {
                var e = this.$results.find(".select2-results__option[aria-selected]")
                  , t = e.filter("[aria-selected=true]");
                t.length > 0 ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"),
                this.ensureHighlightVisible()
            }
            ,
            i.prototype.setClasses = function() {
                var t = this;
                this.data.current((function(i) {
                    var n = e.map(i, (function(e) {
                        return e.id.toString()
                    }
                    ));
                    t.$results.find(".select2-results__option[aria-selected]").each((function() {
                        var t = e(this)
                          , i = e.data(this, "data")
                          , s = "" + i.id;
                        null != i.element && i.element.selected || null == i.element && e.inArray(s, n) > -1 ? t.attr("aria-selected", "true") : t.attr("aria-selected", "false")
                    }
                    ))
                }
                ))
            }
            ,
            i.prototype.showLoading = function(e) {
                this.hideLoading();
                var t = {
                    disabled: !0,
                    loading: !0,
                    text: this.options.get("translations").get("searching")(e)
                }
                  , i = this.option(t);
                i.className += " loading-results",
                this.$results.prepend(i)
            }
            ,
            i.prototype.hideLoading = function() {
                this.$results.find(".loading-results").remove()
            }
            ,
            i.prototype.option = function(t) {
                var i = document.createElement("li");
                i.className = "select2-results__option";
                var n = {
                    role: "treeitem",
                    "aria-selected": "false"
                };
                for (var s in t.disabled && (delete n["aria-selected"],
                n["aria-disabled"] = "true"),
                null == t.id && delete n["aria-selected"],
                null != t._resultId && (i.id = t._resultId),
                t.title && (i.title = t.title),
                t.children && (n.role = "group",
                n["aria-label"] = t.text,
                delete n["aria-selected"]),
                n) {
                    var o = n[s];
                    i.setAttribute(s, o)
                }
                if (t.children) {
                    var a = e(i)
                      , r = document.createElement("strong");
                    r.className = "select2-results__group",
                    e(r),
                    this.template(t, r);
                    for (var l = [], c = 0; c < t.children.length; c++) {
                        var u = t.children[c]
                          , h = this.option(u);
                        l.push(h)
                    }
                    var d = e("<ul></ul>", {
                        class: "select2-results__options select2-results__options--nested"
                    });
                    d.append(l),
                    a.append(r),
                    a.append(d)
                } else
                    this.template(t, i);
                return e.data(i, "data", t),
                i
            }
            ,
            i.prototype.bind = function(t, i) {
                var n = this
                  , s = t.id + "-results";
                this.$results.attr("id", s),
                t.on("results:all", (function(e) {
                    n.clear(),
                    n.append(e.data),
                    t.isOpen() && (n.setClasses(),
                    n.highlightFirstItem())
                }
                )),
                t.on("results:append", (function(e) {
                    n.append(e.data),
                    t.isOpen() && n.setClasses()
                }
                )),
                t.on("query", (function(e) {
                    n.hideMessages(),
                    n.showLoading(e)
                }
                )),
                t.on("select", (function() {
                    t.isOpen() && (n.setClasses(),
                    n.highlightFirstItem())
                }
                )),
                t.on("unselect", (function() {
                    t.isOpen() && (n.setClasses(),
                    n.highlightFirstItem())
                }
                )),
                t.on("open", (function() {
                    n.$results.attr("aria-expanded", "true"),
                    n.$results.attr("aria-hidden", "false"),
                    n.setClasses(),
                    n.ensureHighlightVisible()
                }
                )),
                t.on("close", (function() {
                    n.$results.attr("aria-expanded", "false"),
                    n.$results.attr("aria-hidden", "true"),
                    n.$results.removeAttr("aria-activedescendant")
                }
                )),
                t.on("results:toggle", (function() {
                    var e = n.getHighlightedResults();
                    0 !== e.length && e.trigger("mouseup")
                }
                )),
                t.on("results:select", (function() {
                    var e = n.getHighlightedResults();
                    if (0 !== e.length) {
                        var t = e.data("data");
                        "true" == e.attr("aria-selected") ? n.trigger("close", {}) : n.trigger("select", {
                            data: t
                        })
                    }
                }
                )),
                t.on("results:previous", (function() {
                    var e = n.getHighlightedResults()
                      , t = n.$results.find("[aria-selected]")
                      , i = t.index(e);
                    if (0 !== i) {
                        var s = i - 1;
                        0 === e.length && (s = 0);
                        var o = t.eq(s);
                        o.trigger("mouseenter");
                        var a = n.$results.offset().top
                          , r = o.offset().top
                          , l = n.$results.scrollTop() + (r - a);
                        0 === s ? n.$results.scrollTop(0) : 0 > r - a && n.$results.scrollTop(l)
                    }
                }
                )),
                t.on("results:next", (function() {
                    var e = n.getHighlightedResults()
                      , t = n.$results.find("[aria-selected]")
                      , i = t.index(e) + 1;
                    if (!(i >= t.length)) {
                        var s = t.eq(i);
                        s.trigger("mouseenter");
                        var o = n.$results.offset().top + n.$results.outerHeight(!1)
                          , a = s.offset().top + s.outerHeight(!1)
                          , r = n.$results.scrollTop() + a - o;
                        0 === i ? n.$results.scrollTop(0) : a > o && n.$results.scrollTop(r)
                    }
                }
                )),
                t.on("results:focus", (function(e) {
                    e.element.addClass("select2-results__option--highlighted")
                }
                )),
                t.on("results:message", (function(e) {
                    n.displayMessage(e)
                }
                )),
                e.fn.mousewheel && this.$results.on("mousewheel", (function(e) {
                    var t = n.$results.scrollTop()
                      , i = n.$results.get(0).scrollHeight - t + e.deltaY
                      , s = e.deltaY > 0 && t - e.deltaY <= 0
                      , o = e.deltaY < 0 && i <= n.$results.height();
                    s ? (n.$results.scrollTop(0),
                    e.preventDefault(),
                    e.stopPropagation()) : o && (n.$results.scrollTop(n.$results.get(0).scrollHeight - n.$results.height()),
                    e.preventDefault(),
                    e.stopPropagation())
                }
                )),
                this.$results.on("mouseup", ".select2-results__option[aria-selected]", (function(t) {
                    var i = e(this)
                      , s = i.data("data");
                    return "true" === i.attr("aria-selected") ? void (n.options.get("multiple") ? n.trigger("unselect", {
                        originalEvent: t,
                        data: s
                    }) : n.trigger("close", {})) : void n.trigger("select", {
                        originalEvent: t,
                        data: s
                    })
                }
                )),
                this.$results.on("mouseenter", ".select2-results__option[aria-selected]", (function(t) {
                    var i = e(this).data("data");
                    n.getHighlightedResults().removeClass("select2-results__option--highlighted"),
                    n.trigger("results:focus", {
                        data: i,
                        element: e(this)
                    })
                }
                ))
            }
            ,
            i.prototype.getHighlightedResults = function() {
                return this.$results.find(".select2-results__option--highlighted")
            }
            ,
            i.prototype.destroy = function() {
                this.$results.remove()
            }
            ,
            i.prototype.ensureHighlightVisible = function() {
                var e = this.getHighlightedResults();
                if (0 !== e.length) {
                    var t = this.$results.find("[aria-selected]").index(e)
                      , i = this.$results.offset().top
                      , n = e.offset().top
                      , s = this.$results.scrollTop() + (n - i)
                      , o = n - i;
                    s -= 2 * e.outerHeight(!1),
                    2 >= t ? this.$results.scrollTop(0) : (o > this.$results.outerHeight() || 0 > o) && this.$results.scrollTop(s)
                }
            }
            ,
            i.prototype.template = function(t, i) {
                var n = this.options.get("templateResult")
                  , s = this.options.get("escapeMarkup")
                  , o = n(t, i);
                null == o ? i.style.display = "none" : "string" == typeof o ? i.innerHTML = s(o) : e(i).append(o)
            }
            ,
            i
        }
        )),
        t.define("select2/keys", [], (function() {
            return {
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                ESC: 27,
                SPACE: 32,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                END: 35,
                HOME: 36,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                DELETE: 46
            }
        }
        )),
        t.define("select2/selection/base", ["jquery", "../utils", "../keys"], (function(e, t, i) {
            function n(e, t) {
                this.$element = e,
                this.options = t,
                n.__super__.constructor.call(this)
            }
            return t.Extend(n, t.Observable),
            n.prototype.render = function() {
                var t = e('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                return this._tabindex = 0,
                null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")),
                t.attr("title", this.$element.attr("title")),
                t.attr("tabindex", this._tabindex),
                this.$selection = t,
                t
            }
            ,
            n.prototype.bind = function(e, t) {
                var n = this
                  , s = (e.id,
                e.id + "-results");
                this.container = e,
                this.$selection.on("focus", (function(e) {
                    n.trigger("focus", e)
                }
                )),
                this.$selection.on("blur", (function(e) {
                    n._handleBlur(e)
                }
                )),
                this.$selection.on("keydown", (function(e) {
                    n.trigger("keypress", e),
                    e.which === i.SPACE && e.preventDefault()
                }
                )),
                e.on("results:focus", (function(e) {
                    n.$selection.attr("aria-activedescendant", e.data._resultId)
                }
                )),
                e.on("selection:update", (function(e) {
                    n.update(e.data)
                }
                )),
                e.on("open", (function() {
                    n.$selection.attr("aria-expanded", "true"),
                    n.$selection.attr("aria-owns", s),
                    n._attachCloseHandler(e)
                }
                )),
                e.on("close", (function() {
                    n.$selection.attr("aria-expanded", "false"),
                    n.$selection.removeAttr("aria-activedescendant"),
                    n.$selection.removeAttr("aria-owns"),
                    n.$selection.focus(),
                    n._detachCloseHandler(e)
                }
                )),
                e.on("enable", (function() {
                    n.$selection.attr("tabindex", n._tabindex)
                }
                )),
                e.on("disable", (function() {
                    n.$selection.attr("tabindex", "-1")
                }
                ))
            }
            ,
            n.prototype._handleBlur = function(t) {
                var i = this;
                window.setTimeout((function() {
                    document.activeElement == i.$selection[0] || e.contains(i.$selection[0], document.activeElement) || i.trigger("blur", t)
                }
                ), 1)
            }
            ,
            n.prototype._attachCloseHandler = function(t) {
                e(document.body).on("mousedown.select2." + t.id, (function(t) {
                    var i = e(t.target).closest(".select2");
                    e(".select2.select2-container--open").each((function() {
                        var t = e(this);
                        this != i[0] && t.data("element").select2("close")
                    }
                    ))
                }
                ))
            }
            ,
            n.prototype._detachCloseHandler = function(t) {
                e(document.body).off("mousedown.select2." + t.id)
            }
            ,
            n.prototype.position = function(e, t) {
                t.find(".selection").append(e)
            }
            ,
            n.prototype.destroy = function() {
                this._detachCloseHandler(this.container)
            }
            ,
            n.prototype.update = function(e) {
                throw new Error("The `update` method must be defined in child classes.")
            }
            ,
            n
        }
        )),
        t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], (function(e, t, i, n) {
            function s() {
                s.__super__.constructor.apply(this, arguments)
            }
            return i.Extend(s, t),
            s.prototype.render = function() {
                var e = s.__super__.render.call(this);
                return e.addClass("select2-selection--single"),
                e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),
                e
            }
            ,
            s.prototype.bind = function(e, t) {
                var i = this;
                s.__super__.bind.apply(this, arguments);
                var n = e.id + "-container";
                this.$selection.find(".select2-selection__rendered").attr("id", n),
                this.$selection.attr("aria-labelledby", n),
                this.$selection.on("mousedown", (function(e) {
                    1 === e.which && i.trigger("toggle", {
                        originalEvent: e
                    })
                }
                )),
                this.$selection.on("focus", (function(e) {}
                )),
                this.$selection.on("blur", (function(e) {}
                )),
                e.on("focus", (function(t) {
                    e.isOpen() || i.$selection.focus()
                }
                )),
                e.on("selection:update", (function(e) {
                    i.update(e.data)
                }
                ))
            }
            ,
            s.prototype.clear = function() {
                this.$selection.find(".select2-selection__rendered").empty()
            }
            ,
            s.prototype.display = function(e, t) {
                var i = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(i(e, t))
            }
            ,
            s.prototype.selectionContainer = function() {
                return e("<span></span>")
            }
            ,
            s.prototype.update = function(e) {
                if (0 !== e.length) {
                    var t = e[0]
                      , i = this.$selection.find(".select2-selection__rendered")
                      , n = this.display(t, i);
                    i.empty().append(n),
                    i.prop("title", t.title || t.text)
                } else
                    this.clear()
            }
            ,
            s
        }
        )),
        t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], (function(e, t, i) {
            function n(e, t) {
                n.__super__.constructor.apply(this, arguments)
            }
            return i.Extend(n, t),
            n.prototype.render = function() {
                var e = n.__super__.render.call(this);
                return e.addClass("select2-selection--multiple"),
                e.html('<ul class="select2-selection__rendered"></ul>'),
                e
            }
            ,
            n.prototype.bind = function(t, i) {
                var s = this;
                n.__super__.bind.apply(this, arguments),
                this.$selection.on("click", (function(e) {
                    s.trigger("toggle", {
                        originalEvent: e
                    })
                }
                )),
                this.$selection.on("click", ".select2-selection__choice__remove", (function(t) {
                    if (!s.options.get("disabled")) {
                        var i = e(this).parent().data("data");
                        s.trigger("unselect", {
                            originalEvent: t,
                            data: i
                        })
                    }
                }
                ))
            }
            ,
            n.prototype.clear = function() {
                this.$selection.find(".select2-selection__rendered").empty()
            }
            ,
            n.prototype.display = function(e, t) {
                var i = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(i(e, t))
            }
            ,
            n.prototype.selectionContainer = function() {
                return e('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')
            }
            ,
            n.prototype.update = function(e) {
                if (this.clear(),
                0 !== e.length) {
                    for (var t = [], n = 0; n < e.length; n++) {
                        var s = e[n]
                          , o = this.selectionContainer()
                          , a = this.display(s, o);
                        o.append(a),
                        o.prop("title", s.title || s.text),
                        o.data("data", s),
                        t.push(o)
                    }
                    var r = this.$selection.find(".select2-selection__rendered");
                    i.appendMany(r, t)
                }
            }
            ,
            n
        }
        )),
        t.define("select2/selection/placeholder", ["../utils"], (function(e) {
            function t(e, t, i) {
                this.placeholder = this.normalizePlaceholder(i.get("placeholder")),
                e.call(this, t, i)
            }
            return t.prototype.normalizePlaceholder = function(e, t) {
                return "string" == typeof t && (t = {
                    id: "",
                    text: t
                }),
                t
            }
            ,
            t.prototype.createPlaceholder = function(e, t) {
                var i = this.selectionContainer();
                return i.html(this.display(t)),
                i.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),
                i
            }
            ,
            t.prototype.update = function(e, t) {
                var i = 1 == t.length && t[0].id != this.placeholder.id;
                if (t.length > 1 || i)
                    return e.call(this, t);
                this.clear();
                var n = this.createPlaceholder(this.placeholder);
                this.$selection.find(".select2-selection__rendered").append(n)
            }
            ,
            t
        }
        )),
        t.define("select2/selection/allowClear", ["jquery", "../keys"], (function(e, t) {
            function i() {}
            return i.prototype.bind = function(e, t, i) {
                var n = this;
                e.call(this, t, i),
                null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),
                this.$selection.on("mousedown", ".select2-selection__clear", (function(e) {
                    n._handleClear(e)
                }
                )),
                t.on("keypress", (function(e) {
                    n._handleKeyboardClear(e, t)
                }
                ))
            }
            ,
            i.prototype._handleClear = function(e, t) {
                if (!this.options.get("disabled")) {
                    var i = this.$selection.find(".select2-selection__clear");
                    if (0 !== i.length) {
                        t.stopPropagation();
                        for (var n = i.data("data"), s = 0; s < n.length; s++) {
                            var o = {
                                data: n[s]
                            };
                            if (this.trigger("unselect", o),
                            o.prevented)
                                return
                        }
                        this.$element.val(this.placeholder.id).trigger("change"),
                        this.trigger("toggle", {})
                    }
                }
            }
            ,
            i.prototype._handleKeyboardClear = function(e, i, n) {
                n.isOpen() || (i.which == t.DELETE || i.which == t.BACKSPACE) && this._handleClear(i)
            }
            ,
            i.prototype.update = function(t, i) {
                if (t.call(this, i),
                !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === i.length)) {
                    var n = e('<span class="select2-selection__clear">&times;</span>');
                    n.data("data", i),
                    this.$selection.find(".select2-selection__rendered").prepend(n)
                }
            }
            ,
            i
        }
        )),
        t.define("select2/selection/search", ["jquery", "../utils", "../keys"], (function(e, t, i) {
            function n(e, t, i) {
                e.call(this, t, i)
            }
            return n.prototype.render = function(t) {
                var i = e('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                this.$searchContainer = i,
                this.$search = i.find("input");
                var n = t.call(this);
                return this._transferTabIndex(),
                n
            }
            ,
            n.prototype.bind = function(e, t, n) {
                var s = this;
                e.call(this, t, n),
                t.on("open", (function() {
                    s.$search.trigger("focus")
                }
                )),
                t.on("close", (function() {
                    s.$search.val(""),
                    s.$search.removeAttr("aria-activedescendant"),
                    s.$search.trigger("focus")
                }
                )),
                t.on("enable", (function() {
                    s.$search.prop("disabled", !1),
                    s._transferTabIndex()
                }
                )),
                t.on("disable", (function() {
                    s.$search.prop("disabled", !0)
                }
                )),
                t.on("focus", (function(e) {
                    s.$search.trigger("focus")
                }
                )),
                t.on("results:focus", (function(e) {
                    s.$search.attr("aria-activedescendant", e.id)
                }
                )),
                this.$selection.on("focusin", ".select2-search--inline", (function(e) {
                    s.trigger("focus", e)
                }
                )),
                this.$selection.on("focusout", ".select2-search--inline", (function(e) {
                    s._handleBlur(e)
                }
                )),
                this.$selection.on("keydown", ".select2-search--inline", (function(e) {
                    if (e.stopPropagation(),
                    s.trigger("keypress", e),
                    s._keyUpPrevented = e.isDefaultPrevented(),
                    e.which === i.BACKSPACE && "" === s.$search.val()) {
                        var t = s.$searchContainer.prev(".select2-selection__choice");
                        if (t.length > 0) {
                            var n = t.data("data");
                            s.searchRemoveChoice(n),
                            e.preventDefault()
                        }
                    }
                }
                ));
                var o = document.documentMode
                  , a = o && 11 >= o;
                this.$selection.on("input.searchcheck", ".select2-search--inline", (function(e) {
                    return a ? void s.$selection.off("input.search input.searchcheck") : void s.$selection.off("keyup.search")
                }
                )),
                this.$selection.on("keyup.search input.search", ".select2-search--inline", (function(e) {
                    if (a && "input" === e.type)
                        s.$selection.off("input.search input.searchcheck");
                    else {
                        var t = e.which;
                        t != i.SHIFT && t != i.CTRL && t != i.ALT && t != i.TAB && s.handleSearch(e)
                    }
                }
                ))
            }
            ,
            n.prototype._transferTabIndex = function(e) {
                this.$search.attr("tabindex", this.$selection.attr("tabindex")),
                this.$selection.attr("tabindex", "-1")
            }
            ,
            n.prototype.createPlaceholder = function(e, t) {
                this.$search.attr("placeholder", t.text)
            }
            ,
            n.prototype.update = function(e, t) {
                var i = this.$search[0] == document.activeElement;
                this.$search.attr("placeholder", ""),
                e.call(this, t),
                this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),
                this.resizeSearch(),
                i && this.$search.focus()
            }
            ,
            n.prototype.handleSearch = function() {
                if (this.resizeSearch(),
                !this._keyUpPrevented) {
                    var e = this.$search.val();
                    this.trigger("query", {
                        term: e
                    })
                }
                this._keyUpPrevented = !1
            }
            ,
            n.prototype.searchRemoveChoice = function(e, t) {
                this.trigger("unselect", {
                    data: t
                }),
                this.$search.val(t.text),
                this.handleSearch()
            }
            ,
            n.prototype.resizeSearch = function() {
                this.$search.css("width", "25px");
                var e = "";
                "" !== this.$search.attr("placeholder") ? e = this.$selection.find(".select2-selection__rendered").innerWidth() : e = .75 * (this.$search.val().length + 1) + "em";
                this.$search.css("width", e)
            }
            ,
            n
        }
        )),
        t.define("select2/selection/eventRelay", ["jquery"], (function(e) {
            function t() {}
            return t.prototype.bind = function(t, i, n) {
                var s = this
                  , o = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"]
                  , a = ["opening", "closing", "selecting", "unselecting"];
                t.call(this, i, n),
                i.on("*", (function(t, i) {
                    if (-1 !== e.inArray(t, o)) {
                        i = i || {};
                        var n = e.Event("select2:" + t, {
                            params: i
                        });
                        s.$element.trigger(n),
                        -1 !== e.inArray(t, a) && (i.prevented = n.isDefaultPrevented())
                    }
                }
                ))
            }
            ,
            t
        }
        )),
        t.define("select2/translation", ["jquery", "require"], (function(e, t) {
            function i(e) {
                this.dict = e || {}
            }
            return i.prototype.all = function() {
                return this.dict
            }
            ,
            i.prototype.get = function(e) {
                return this.dict[e]
            }
            ,
            i.prototype.extend = function(t) {
                this.dict = e.extend({}, t.all(), this.dict)
            }
            ,
            i._cache = {},
            i.loadPath = function(e) {
                if (!(e in i._cache)) {
                    var n = t(e);
                    i._cache[e] = n
                }
                return new i(i._cache[e])
            }
            ,
            i
        }
        )),
        t.define("select2/diacritics", [], (function() {
            return {
                "Ⓐ": "A",
                "Ａ": "A",
                "À": "A",
                "Á": "A",
                "Â": "A",
                "Ầ": "A",
                "Ấ": "A",
                "Ẫ": "A",
                "Ẩ": "A",
                "Ã": "A",
                "Ā": "A",
                "Ă": "A",
                "Ằ": "A",
                "Ắ": "A",
                "Ẵ": "A",
                "Ẳ": "A",
                "Ȧ": "A",
                "Ǡ": "A",
                "Ä": "A",
                "Ǟ": "A",
                "Ả": "A",
                "Å": "A",
                "Ǻ": "A",
                "Ǎ": "A",
                "Ȁ": "A",
                "Ȃ": "A",
                "Ạ": "A",
                "Ậ": "A",
                "Ặ": "A",
                "Ḁ": "A",
                "Ą": "A",
                "Ⱥ": "A",
                "Ɐ": "A",
                "Ꜳ": "AA",
                "Æ": "AE",
                "Ǽ": "AE",
                "Ǣ": "AE",
                "Ꜵ": "AO",
                "Ꜷ": "AU",
                "Ꜹ": "AV",
                "Ꜻ": "AV",
                "Ꜽ": "AY",
                "Ⓑ": "B",
                "Ｂ": "B",
                "Ḃ": "B",
                "Ḅ": "B",
                "Ḇ": "B",
                "Ƀ": "B",
                "Ƃ": "B",
                "Ɓ": "B",
                "Ⓒ": "C",
                "Ｃ": "C",
                "Ć": "C",
                "Ĉ": "C",
                "Ċ": "C",
                "Č": "C",
                "Ç": "C",
                "Ḉ": "C",
                "Ƈ": "C",
                "Ȼ": "C",
                "Ꜿ": "C",
                "Ⓓ": "D",
                "Ｄ": "D",
                "Ḋ": "D",
                "Ď": "D",
                "Ḍ": "D",
                "Ḑ": "D",
                "Ḓ": "D",
                "Ḏ": "D",
                "Đ": "D",
                "Ƌ": "D",
                "Ɗ": "D",
                "Ɖ": "D",
                "Ꝺ": "D",
                "Ǳ": "DZ",
                "Ǆ": "DZ",
                "ǲ": "Dz",
                "ǅ": "Dz",
                "Ⓔ": "E",
                "Ｅ": "E",
                "È": "E",
                "É": "E",
                "Ê": "E",
                "Ề": "E",
                "Ế": "E",
                "Ễ": "E",
                "Ể": "E",
                "Ẽ": "E",
                "Ē": "E",
                "Ḕ": "E",
                "Ḗ": "E",
                "Ĕ": "E",
                "Ė": "E",
                "Ë": "E",
                "Ẻ": "E",
                "Ě": "E",
                "Ȅ": "E",
                "Ȇ": "E",
                "Ẹ": "E",
                "Ệ": "E",
                "Ȩ": "E",
                "Ḝ": "E",
                "Ę": "E",
                "Ḙ": "E",
                "Ḛ": "E",
                "Ɛ": "E",
                "Ǝ": "E",
                "Ⓕ": "F",
                "Ｆ": "F",
                "Ḟ": "F",
                "Ƒ": "F",
                "Ꝼ": "F",
                "Ⓖ": "G",
                "Ｇ": "G",
                "Ǵ": "G",
                "Ĝ": "G",
                "Ḡ": "G",
                "Ğ": "G",
                "Ġ": "G",
                "Ǧ": "G",
                "Ģ": "G",
                "Ǥ": "G",
                "Ɠ": "G",
                "Ꞡ": "G",
                "Ᵹ": "G",
                "Ꝿ": "G",
                "Ⓗ": "H",
                "Ｈ": "H",
                "Ĥ": "H",
                "Ḣ": "H",
                "Ḧ": "H",
                "Ȟ": "H",
                "Ḥ": "H",
                "Ḩ": "H",
                "Ḫ": "H",
                "Ħ": "H",
                "Ⱨ": "H",
                "Ⱶ": "H",
                "Ɥ": "H",
                "Ⓘ": "I",
                "Ｉ": "I",
                "Ì": "I",
                "Í": "I",
                "Î": "I",
                "Ĩ": "I",
                "Ī": "I",
                "Ĭ": "I",
                "İ": "I",
                "Ï": "I",
                "Ḯ": "I",
                "Ỉ": "I",
                "Ǐ": "I",
                "Ȉ": "I",
                "Ȋ": "I",
                "Ị": "I",
                "Į": "I",
                "Ḭ": "I",
                "Ɨ": "I",
                "Ⓙ": "J",
                "Ｊ": "J",
                "Ĵ": "J",
                "Ɉ": "J",
                "Ⓚ": "K",
                "Ｋ": "K",
                "Ḱ": "K",
                "Ǩ": "K",
                "Ḳ": "K",
                "Ķ": "K",
                "Ḵ": "K",
                "Ƙ": "K",
                "Ⱪ": "K",
                "Ꝁ": "K",
                "Ꝃ": "K",
                "Ꝅ": "K",
                "Ꞣ": "K",
                "Ⓛ": "L",
                "Ｌ": "L",
                "Ŀ": "L",
                "Ĺ": "L",
                "Ľ": "L",
                "Ḷ": "L",
                "Ḹ": "L",
                "Ļ": "L",
                "Ḽ": "L",
                "Ḻ": "L",
                "Ł": "L",
                "Ƚ": "L",
                "Ɫ": "L",
                "Ⱡ": "L",
                "Ꝉ": "L",
                "Ꝇ": "L",
                "Ꞁ": "L",
                "Ǉ": "LJ",
                "ǈ": "Lj",
                "Ⓜ": "M",
                "Ｍ": "M",
                "Ḿ": "M",
                "Ṁ": "M",
                "Ṃ": "M",
                "Ɱ": "M",
                "Ɯ": "M",
                "Ⓝ": "N",
                "Ｎ": "N",
                "Ǹ": "N",
                "Ń": "N",
                "Ñ": "N",
                "Ṅ": "N",
                "Ň": "N",
                "Ṇ": "N",
                "Ņ": "N",
                "Ṋ": "N",
                "Ṉ": "N",
                "Ƞ": "N",
                "Ɲ": "N",
                "Ꞑ": "N",
                "Ꞥ": "N",
                "Ǌ": "NJ",
                "ǋ": "Nj",
                "Ⓞ": "O",
                "Ｏ": "O",
                "Ò": "O",
                "Ó": "O",
                "Ô": "O",
                "Ồ": "O",
                "Ố": "O",
                "Ỗ": "O",
                "Ổ": "O",
                "Õ": "O",
                "Ṍ": "O",
                "Ȭ": "O",
                "Ṏ": "O",
                "Ō": "O",
                "Ṑ": "O",
                "Ṓ": "O",
                "Ŏ": "O",
                "Ȯ": "O",
                "Ȱ": "O",
                "Ö": "O",
                "Ȫ": "O",
                "Ỏ": "O",
                "Ő": "O",
                "Ǒ": "O",
                "Ȍ": "O",
                "Ȏ": "O",
                "Ơ": "O",
                "Ờ": "O",
                "Ớ": "O",
                "Ỡ": "O",
                "Ở": "O",
                "Ợ": "O",
                "Ọ": "O",
                "Ộ": "O",
                "Ǫ": "O",
                "Ǭ": "O",
                "Ø": "O",
                "Ǿ": "O",
                "Ɔ": "O",
                "Ɵ": "O",
                "Ꝋ": "O",
                "Ꝍ": "O",
                "Ƣ": "OI",
                "Ꝏ": "OO",
                "Ȣ": "OU",
                "Ⓟ": "P",
                "Ｐ": "P",
                "Ṕ": "P",
                "Ṗ": "P",
                "Ƥ": "P",
                "Ᵽ": "P",
                "Ꝑ": "P",
                "Ꝓ": "P",
                "Ꝕ": "P",
                "Ⓠ": "Q",
                "Ｑ": "Q",
                "Ꝗ": "Q",
                "Ꝙ": "Q",
                "Ɋ": "Q",
                "Ⓡ": "R",
                "Ｒ": "R",
                "Ŕ": "R",
                "Ṙ": "R",
                "Ř": "R",
                "Ȑ": "R",
                "Ȓ": "R",
                "Ṛ": "R",
                "Ṝ": "R",
                "Ŗ": "R",
                "Ṟ": "R",
                "Ɍ": "R",
                "Ɽ": "R",
                "Ꝛ": "R",
                "Ꞧ": "R",
                "Ꞃ": "R",
                "Ⓢ": "S",
                "Ｓ": "S",
                "ẞ": "S",
                "Ś": "S",
                "Ṥ": "S",
                "Ŝ": "S",
                "Ṡ": "S",
                "Š": "S",
                "Ṧ": "S",
                "Ṣ": "S",
                "Ṩ": "S",
                "Ș": "S",
                "Ş": "S",
                "Ȿ": "S",
                "Ꞩ": "S",
                "Ꞅ": "S",
                "Ⓣ": "T",
                "Ｔ": "T",
                "Ṫ": "T",
                "Ť": "T",
                "Ṭ": "T",
                "Ț": "T",
                "Ţ": "T",
                "Ṱ": "T",
                "Ṯ": "T",
                "Ŧ": "T",
                "Ƭ": "T",
                "Ʈ": "T",
                "Ⱦ": "T",
                "Ꞇ": "T",
                "Ꜩ": "TZ",
                "Ⓤ": "U",
                "Ｕ": "U",
                "Ù": "U",
                "Ú": "U",
                "Û": "U",
                "Ũ": "U",
                "Ṹ": "U",
                "Ū": "U",
                "Ṻ": "U",
                "Ŭ": "U",
                "Ü": "U",
                "Ǜ": "U",
                "Ǘ": "U",
                "Ǖ": "U",
                "Ǚ": "U",
                "Ủ": "U",
                "Ů": "U",
                "Ű": "U",
                "Ǔ": "U",
                "Ȕ": "U",
                "Ȗ": "U",
                "Ư": "U",
                "Ừ": "U",
                "Ứ": "U",
                "Ữ": "U",
                "Ử": "U",
                "Ự": "U",
                "Ụ": "U",
                "Ṳ": "U",
                "Ų": "U",
                "Ṷ": "U",
                "Ṵ": "U",
                "Ʉ": "U",
                "Ⓥ": "V",
                "Ｖ": "V",
                "Ṽ": "V",
                "Ṿ": "V",
                "Ʋ": "V",
                "Ꝟ": "V",
                "Ʌ": "V",
                "Ꝡ": "VY",
                "Ⓦ": "W",
                "Ｗ": "W",
                "Ẁ": "W",
                "Ẃ": "W",
                "Ŵ": "W",
                "Ẇ": "W",
                "Ẅ": "W",
                "Ẉ": "W",
                "Ⱳ": "W",
                "Ⓧ": "X",
                "Ｘ": "X",
                "Ẋ": "X",
                "Ẍ": "X",
                "Ⓨ": "Y",
                "Ｙ": "Y",
                "Ỳ": "Y",
                "Ý": "Y",
                "Ŷ": "Y",
                "Ỹ": "Y",
                "Ȳ": "Y",
                "Ẏ": "Y",
                "Ÿ": "Y",
                "Ỷ": "Y",
                "Ỵ": "Y",
                "Ƴ": "Y",
                "Ɏ": "Y",
                "Ỿ": "Y",
                "Ⓩ": "Z",
                "Ｚ": "Z",
                "Ź": "Z",
                "Ẑ": "Z",
                "Ż": "Z",
                "Ž": "Z",
                "Ẓ": "Z",
                "Ẕ": "Z",
                "Ƶ": "Z",
                "Ȥ": "Z",
                "Ɀ": "Z",
                "Ⱬ": "Z",
                "Ꝣ": "Z",
                "ⓐ": "a",
                "ａ": "a",
                "ẚ": "a",
                "à": "a",
                "á": "a",
                "â": "a",
                "ầ": "a",
                "ấ": "a",
                "ẫ": "a",
                "ẩ": "a",
                "ã": "a",
                "ā": "a",
                "ă": "a",
                "ằ": "a",
                "ắ": "a",
                "ẵ": "a",
                "ẳ": "a",
                "ȧ": "a",
                "ǡ": "a",
                "ä": "a",
                "ǟ": "a",
                "ả": "a",
                "å": "a",
                "ǻ": "a",
                "ǎ": "a",
                "ȁ": "a",
                "ȃ": "a",
                "ạ": "a",
                "ậ": "a",
                "ặ": "a",
                "ḁ": "a",
                "ą": "a",
                "ⱥ": "a",
                "ɐ": "a",
                "ꜳ": "aa",
                "æ": "ae",
                "ǽ": "ae",
                "ǣ": "ae",
                "ꜵ": "ao",
                "ꜷ": "au",
                "ꜹ": "av",
                "ꜻ": "av",
                "ꜽ": "ay",
                "ⓑ": "b",
                "ｂ": "b",
                "ḃ": "b",
                "ḅ": "b",
                "ḇ": "b",
                "ƀ": "b",
                "ƃ": "b",
                "ɓ": "b",
                "ⓒ": "c",
                "ｃ": "c",
                "ć": "c",
                "ĉ": "c",
                "ċ": "c",
                "č": "c",
                "ç": "c",
                "ḉ": "c",
                "ƈ": "c",
                "ȼ": "c",
                "ꜿ": "c",
                "ↄ": "c",
                "ⓓ": "d",
                "ｄ": "d",
                "ḋ": "d",
                "ď": "d",
                "ḍ": "d",
                "ḑ": "d",
                "ḓ": "d",
                "ḏ": "d",
                "đ": "d",
                "ƌ": "d",
                "ɖ": "d",
                "ɗ": "d",
                "ꝺ": "d",
                "ǳ": "dz",
                "ǆ": "dz",
                "ⓔ": "e",
                "ｅ": "e",
                "è": "e",
                "é": "e",
                "ê": "e",
                "ề": "e",
                "ế": "e",
                "ễ": "e",
                "ể": "e",
                "ẽ": "e",
                "ē": "e",
                "ḕ": "e",
                "ḗ": "e",
                "ĕ": "e",
                "ė": "e",
                "ë": "e",
                "ẻ": "e",
                "ě": "e",
                "ȅ": "e",
                "ȇ": "e",
                "ẹ": "e",
                "ệ": "e",
                "ȩ": "e",
                "ḝ": "e",
                "ę": "e",
                "ḙ": "e",
                "ḛ": "e",
                "ɇ": "e",
                "ɛ": "e",
                "ǝ": "e",
                "ⓕ": "f",
                "ｆ": "f",
                "ḟ": "f",
                "ƒ": "f",
                "ꝼ": "f",
                "ⓖ": "g",
                "ｇ": "g",
                "ǵ": "g",
                "ĝ": "g",
                "ḡ": "g",
                "ğ": "g",
                "ġ": "g",
                "ǧ": "g",
                "ģ": "g",
                "ǥ": "g",
                "ɠ": "g",
                "ꞡ": "g",
                "ᵹ": "g",
                "ꝿ": "g",
                "ⓗ": "h",
                "ｈ": "h",
                "ĥ": "h",
                "ḣ": "h",
                "ḧ": "h",
                "ȟ": "h",
                "ḥ": "h",
                "ḩ": "h",
                "ḫ": "h",
                "ẖ": "h",
                "ħ": "h",
                "ⱨ": "h",
                "ⱶ": "h",
                "ɥ": "h",
                "ƕ": "hv",
                "ⓘ": "i",
                "ｉ": "i",
                "ì": "i",
                "í": "i",
                "î": "i",
                "ĩ": "i",
                "ī": "i",
                "ĭ": "i",
                "ï": "i",
                "ḯ": "i",
                "ỉ": "i",
                "ǐ": "i",
                "ȉ": "i",
                "ȋ": "i",
                "ị": "i",
                "į": "i",
                "ḭ": "i",
                "ɨ": "i",
                "ı": "i",
                "ⓙ": "j",
                "ｊ": "j",
                "ĵ": "j",
                "ǰ": "j",
                "ɉ": "j",
                "ⓚ": "k",
                "ｋ": "k",
                "ḱ": "k",
                "ǩ": "k",
                "ḳ": "k",
                "ķ": "k",
                "ḵ": "k",
                "ƙ": "k",
                "ⱪ": "k",
                "ꝁ": "k",
                "ꝃ": "k",
                "ꝅ": "k",
                "ꞣ": "k",
                "ⓛ": "l",
                "ｌ": "l",
                "ŀ": "l",
                "ĺ": "l",
                "ľ": "l",
                "ḷ": "l",
                "ḹ": "l",
                "ļ": "l",
                "ḽ": "l",
                "ḻ": "l",
                "ſ": "l",
                "ł": "l",
                "ƚ": "l",
                "ɫ": "l",
                "ⱡ": "l",
                "ꝉ": "l",
                "ꞁ": "l",
                "ꝇ": "l",
                "ǉ": "lj",
                "ⓜ": "m",
                "ｍ": "m",
                "ḿ": "m",
                "ṁ": "m",
                "ṃ": "m",
                "ɱ": "m",
                "ɯ": "m",
                "ⓝ": "n",
                "ｎ": "n",
                "ǹ": "n",
                "ń": "n",
                "ñ": "n",
                "ṅ": "n",
                "ň": "n",
                "ṇ": "n",
                "ņ": "n",
                "ṋ": "n",
                "ṉ": "n",
                "ƞ": "n",
                "ɲ": "n",
                "ŉ": "n",
                "ꞑ": "n",
                "ꞥ": "n",
                "ǌ": "nj",
                "ⓞ": "o",
                "ｏ": "o",
                "ò": "o",
                "ó": "o",
                "ô": "o",
                "ồ": "o",
                "ố": "o",
                "ỗ": "o",
                "ổ": "o",
                "õ": "o",
                "ṍ": "o",
                "ȭ": "o",
                "ṏ": "o",
                "ō": "o",
                "ṑ": "o",
                "ṓ": "o",
                "ŏ": "o",
                "ȯ": "o",
                "ȱ": "o",
                "ö": "o",
                "ȫ": "o",
                "ỏ": "o",
                "ő": "o",
                "ǒ": "o",
                "ȍ": "o",
                "ȏ": "o",
                "ơ": "o",
                "ờ": "o",
                "ớ": "o",
                "ỡ": "o",
                "ở": "o",
                "ợ": "o",
                "ọ": "o",
                "ộ": "o",
                "ǫ": "o",
                "ǭ": "o",
                "ø": "o",
                "ǿ": "o",
                "ɔ": "o",
                "ꝋ": "o",
                "ꝍ": "o",
                "ɵ": "o",
                "ƣ": "oi",
                "ȣ": "ou",
                "ꝏ": "oo",
                "ⓟ": "p",
                "ｐ": "p",
                "ṕ": "p",
                "ṗ": "p",
                "ƥ": "p",
                "ᵽ": "p",
                "ꝑ": "p",
                "ꝓ": "p",
                "ꝕ": "p",
                "ⓠ": "q",
                "ｑ": "q",
                "ɋ": "q",
                "ꝗ": "q",
                "ꝙ": "q",
                "ⓡ": "r",
                "ｒ": "r",
                "ŕ": "r",
                "ṙ": "r",
                "ř": "r",
                "ȑ": "r",
                "ȓ": "r",
                "ṛ": "r",
                "ṝ": "r",
                "ŗ": "r",
                "ṟ": "r",
                "ɍ": "r",
                "ɽ": "r",
                "ꝛ": "r",
                "ꞧ": "r",
                "ꞃ": "r",
                "ⓢ": "s",
                "ｓ": "s",
                "ß": "s",
                "ś": "s",
                "ṥ": "s",
                "ŝ": "s",
                "ṡ": "s",
                "š": "s",
                "ṧ": "s",
                "ṣ": "s",
                "ṩ": "s",
                "ș": "s",
                "ş": "s",
                "ȿ": "s",
                "ꞩ": "s",
                "ꞅ": "s",
                "ẛ": "s",
                "ⓣ": "t",
                "ｔ": "t",
                "ṫ": "t",
                "ẗ": "t",
                "ť": "t",
                "ṭ": "t",
                "ț": "t",
                "ţ": "t",
                "ṱ": "t",
                "ṯ": "t",
                "ŧ": "t",
                "ƭ": "t",
                "ʈ": "t",
                "ⱦ": "t",
                "ꞇ": "t",
                "ꜩ": "tz",
                "ⓤ": "u",
                "ｕ": "u",
                "ù": "u",
                "ú": "u",
                "û": "u",
                "ũ": "u",
                "ṹ": "u",
                "ū": "u",
                "ṻ": "u",
                "ŭ": "u",
                "ü": "u",
                "ǜ": "u",
                "ǘ": "u",
                "ǖ": "u",
                "ǚ": "u",
                "ủ": "u",
                "ů": "u",
                "ű": "u",
                "ǔ": "u",
                "ȕ": "u",
                "ȗ": "u",
                "ư": "u",
                "ừ": "u",
                "ứ": "u",
                "ữ": "u",
                "ử": "u",
                "ự": "u",
                "ụ": "u",
                "ṳ": "u",
                "ų": "u",
                "ṷ": "u",
                "ṵ": "u",
                "ʉ": "u",
                "ⓥ": "v",
                "ｖ": "v",
                "ṽ": "v",
                "ṿ": "v",
                "ʋ": "v",
                "ꝟ": "v",
                "ʌ": "v",
                "ꝡ": "vy",
                "ⓦ": "w",
                "ｗ": "w",
                "ẁ": "w",
                "ẃ": "w",
                "ŵ": "w",
                "ẇ": "w",
                "ẅ": "w",
                "ẘ": "w",
                "ẉ": "w",
                "ⱳ": "w",
                "ⓧ": "x",
                "ｘ": "x",
                "ẋ": "x",
                "ẍ": "x",
                "ⓨ": "y",
                "ｙ": "y",
                "ỳ": "y",
                "ý": "y",
                "ŷ": "y",
                "ỹ": "y",
                "ȳ": "y",
                "ẏ": "y",
                "ÿ": "y",
                "ỷ": "y",
                "ẙ": "y",
                "ỵ": "y",
                "ƴ": "y",
                "ɏ": "y",
                "ỿ": "y",
                "ⓩ": "z",
                "ｚ": "z",
                "ź": "z",
                "ẑ": "z",
                "ż": "z",
                "ž": "z",
                "ẓ": "z",
                "ẕ": "z",
                "ƶ": "z",
                "ȥ": "z",
                "ɀ": "z",
                "ⱬ": "z",
                "ꝣ": "z",
                "Ά": "Α",
                "Έ": "Ε",
                "Ή": "Η",
                "Ί": "Ι",
                "Ϊ": "Ι",
                "Ό": "Ο",
                "Ύ": "Υ",
                "Ϋ": "Υ",
                "Ώ": "Ω",
                "ά": "α",
                "έ": "ε",
                "ή": "η",
                "ί": "ι",
                "ϊ": "ι",
                "ΐ": "ι",
                "ό": "ο",
                "ύ": "υ",
                "ϋ": "υ",
                "ΰ": "υ",
                "ω": "ω",
                "ς": "σ"
            }
        }
        )),
        t.define("select2/data/base", ["../utils"], (function(e) {
            function t(e, i) {
                t.__super__.constructor.call(this)
            }
            return e.Extend(t, e.Observable),
            t.prototype.current = function(e) {
                throw new Error("The `current` method must be defined in child classes.")
            }
            ,
            t.prototype.query = function(e, t) {
                throw new Error("The `query` method must be defined in child classes.")
            }
            ,
            t.prototype.bind = function(e, t) {}
            ,
            t.prototype.destroy = function() {}
            ,
            t.prototype.generateResultId = function(t, i) {
                var n = t.id + "-result-";
                return (n += e.generateChars(4)) + (null != i.id ? "-" + i.id.toString() : "-" + e.generateChars(4))
            }
            ,
            t
        }
        )),
        t.define("select2/data/select", ["./base", "../utils", "jquery"], (function(e, t, i) {
            function n(e, t) {
                this.$element = e,
                this.options = t,
                n.__super__.constructor.call(this)
            }
            return t.Extend(n, e),
            n.prototype.current = function(e) {
                var t = []
                  , n = this;
                this.$element.find(":selected").each((function() {
                    var e = i(this)
                      , s = n.item(e);
                    t.push(s)
                }
                )),
                e(t)
            }
            ,
            n.prototype.select = function(e) {
                var t = this;
                if (e.selected = !0,
                i(e.element).is("option"))
                    return e.element.selected = !0,
                    void this.$element.trigger("change");
                if (this.$element.prop("multiple"))
                    this.current((function(n) {
                        var s = [];
                        (e = [e]).push.apply(e, n);
                        for (var o = 0; o < e.length; o++) {
                            var a = e[o].id;
                            -1 === i.inArray(a, s) && s.push(a)
                        }
                        t.$element.val(s),
                        t.$element.trigger("change")
                    }
                    ));
                else {
                    var n = e.id;
                    this.$element.val(n),
                    this.$element.trigger("change")
                }
            }
            ,
            n.prototype.unselect = function(e) {
                var t = this;
                if (this.$element.prop("multiple"))
                    return e.selected = !1,
                    i(e.element).is("option") ? (e.element.selected = !1,
                    void this.$element.trigger("change")) : void this.current((function(n) {
                        for (var s = [], o = 0; o < n.length; o++) {
                            var a = n[o].id;
                            a !== e.id && -1 === i.inArray(a, s) && s.push(a)
                        }
                        t.$element.val(s),
                        t.$element.trigger("change")
                    }
                    ))
            }
            ,
            n.prototype.bind = function(e, t) {
                var i = this;
                this.container = e,
                e.on("select", (function(e) {
                    i.select(e.data)
                }
                )),
                e.on("unselect", (function(e) {
                    i.unselect(e.data)
                }
                ))
            }
            ,
            n.prototype.destroy = function() {
                this.$element.find("*").each((function() {
                    i.removeData(this, "data")
                }
                ))
            }
            ,
            n.prototype.query = function(e, t) {
                var n = []
                  , s = this;
                this.$element.children().each((function() {
                    var t = i(this);
                    if (t.is("option") || t.is("optgroup")) {
                        var o = s.item(t)
                          , a = s.matches(e, o);
                        null !== a && n.push(a)
                    }
                }
                )),
                t({
                    results: n
                })
            }
            ,
            n.prototype.addOptions = function(e) {
                t.appendMany(this.$element, e)
            }
            ,
            n.prototype.option = function(e) {
                var t;
                e.children ? (t = document.createElement("optgroup")).label = e.text : void 0 !== (t = document.createElement("option")).textContent ? t.textContent = e.text : t.innerText = e.text,
                e.id && (t.value = e.id),
                e.disabled && (t.disabled = !0),
                e.selected && (t.selected = !0),
                e.title && (t.title = e.title);
                var n = i(t)
                  , s = this._normalizeItem(e);
                return s.element = t,
                i.data(t, "data", s),
                n
            }
            ,
            n.prototype.item = function(e) {
                var t = {};
                if (null != (t = i.data(e[0], "data")))
                    return t;
                if (e.is("option"))
                    t = {
                        id: e.val(),
                        text: e.text(),
                        disabled: e.prop("disabled"),
                        selected: e.prop("selected"),
                        title: e.prop("title")
                    };
                else if (e.is("optgroup")) {
                    t = {
                        text: e.prop("label"),
                        children: [],
                        title: e.prop("title")
                    };
                    for (var n = e.children("option"), s = [], o = 0; o < n.length; o++) {
                        var a = i(n[o])
                          , r = this.item(a);
                        s.push(r)
                    }
                    t.children = s
                }
                return (t = this._normalizeItem(t)).element = e[0],
                i.data(e[0], "data", t),
                t
            }
            ,
            n.prototype._normalizeItem = function(e) {
                i.isPlainObject(e) || (e = {
                    id: e,
                    text: e
                });
                return null != (e = i.extend({}, {
                    text: ""
                }, e)).id && (e.id = e.id.toString()),
                null != e.text && (e.text = e.text.toString()),
                null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)),
                i.extend({}, {
                    selected: !1,
                    disabled: !1
                }, e)
            }
            ,
            n.prototype.matches = function(e, t) {
                return this.options.get("matcher")(e, t)
            }
            ,
            n
        }
        )),
        t.define("select2/data/array", ["./select", "../utils", "jquery"], (function(e, t, i) {
            function n(e, t) {
                var i = t.get("data") || [];
                n.__super__.constructor.call(this, e, t),
                this.addOptions(this.convertToOptions(i))
            }
            return t.Extend(n, e),
            n.prototype.select = function(e) {
                var t = this.$element.find("option").filter((function(t, i) {
                    return i.value == e.id.toString()
                }
                ));
                0 === t.length && (t = this.option(e),
                this.addOptions(t)),
                n.__super__.select.call(this, e)
            }
            ,
            n.prototype.convertToOptions = function(e) {
                function n(e) {
                    return function() {
                        return i(this).val() == e.id
                    }
                }
                for (var s = this, o = this.$element.find("option"), a = o.map((function() {
                    return s.item(i(this)).id
                }
                )).get(), r = [], l = 0; l < e.length; l++) {
                    var c = this._normalizeItem(e[l]);
                    if (i.inArray(c.id, a) >= 0) {
                        var u = o.filter(n(c))
                          , h = this.item(u)
                          , d = i.extend(!0, {}, c, h)
                          , p = this.option(d);
                        u.replaceWith(p)
                    } else {
                        var f = this.option(c);
                        if (c.children) {
                            var m = this.convertToOptions(c.children);
                            t.appendMany(f, m)
                        }
                        r.push(f)
                    }
                }
                return r
            }
            ,
            n
        }
        )),
        t.define("select2/data/ajax", ["./array", "../utils", "jquery"], (function(e, t, i) {
            function n(e, t) {
                this.ajaxOptions = this._applyDefaults(t.get("ajax")),
                null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults),
                n.__super__.constructor.call(this, e, t)
            }
            return t.Extend(n, e),
            n.prototype._applyDefaults = function(e) {
                var t = {
                    data: function(e) {
                        return i.extend({}, e, {
                            q: e.term
                        })
                    },
                    transport: function(e, t, n) {
                        var s = i.ajax(e);
                        return s.then(t),
                        s.fail(n),
                        s
                    }
                };
                return i.extend({}, t, e, !0)
            }
            ,
            n.prototype.processResults = function(e) {
                return e
            }
            ,
            n.prototype.query = function(e, t) {
                function n() {
                    var n = o.transport(o, (function(n) {
                        var o = s.processResults(n, e);
                        s.options.get("debug") && window.console && console.error && (o && o.results && i.isArray(o.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),
                        t(o)
                    }
                    ), (function() {
                        n.status && "0" === n.status || s.trigger("results:message", {
                            message: "errorLoading"
                        })
                    }
                    ));
                    s._request = n
                }
                var s = this;
                null != this._request && (i.isFunction(this._request.abort) && this._request.abort(),
                this._request = null);
                var o = i.extend({
                    type: "GET"
                }, this.ajaxOptions);
                "function" == typeof o.url && (o.url = o.url.call(this.$element, e)),
                "function" == typeof o.data && (o.data = o.data.call(this.$element, e)),
                this.ajaxOptions.delay && null != e.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout),
                this._queryTimeout = window.setTimeout(n, this.ajaxOptions.delay)) : n()
            }
            ,
            n
        }
        )),
        t.define("select2/data/tags", ["jquery"], (function(e) {
            function t(t, i, n) {
                var s = n.get("tags")
                  , o = n.get("createTag");
                void 0 !== o && (this.createTag = o);
                var a = n.get("insertTag");
                if (void 0 !== a && (this.insertTag = a),
                t.call(this, i, n),
                e.isArray(s))
                    for (var r = 0; r < s.length; r++) {
                        var l = s[r]
                          , c = this._normalizeItem(l)
                          , u = this.option(c);
                        this.$element.append(u)
                    }
            }
            return t.prototype.query = function(e, t, i) {
                var n = this;
                return this._removeOldTags(),
                null == t.term || null != t.page ? void e.call(this, t, i) : void e.call(this, t, (function e(s, o) {
                    for (var a = s.results, r = 0; r < a.length; r++) {
                        var l = a[r]
                          , c = null != l.children && !e({
                            results: l.children
                        }, !0);
                        if (l.text === t.term || c)
                            return !o && (s.data = a,
                            void i(s))
                    }
                    if (o)
                        return !0;
                    var u = n.createTag(t);
                    if (null != u) {
                        var h = n.option(u);
                        h.attr("data-select2-tag", !0),
                        n.addOptions([h]),
                        n.insertTag(a, u)
                    }
                    s.results = a,
                    i(s)
                }
                ))
            }
            ,
            t.prototype.createTag = function(t, i) {
                var n = e.trim(i.term);
                return "" === n ? null : {
                    id: n,
                    text: n
                }
            }
            ,
            t.prototype.insertTag = function(e, t, i) {
                t.unshift(i)
            }
            ,
            t.prototype._removeOldTags = function(t) {
                (this._lastTag,
                this.$element.find("option[data-select2-tag]")).each((function() {
                    this.selected || e(this).remove()
                }
                ))
            }
            ,
            t
        }
        )),
        t.define("select2/data/tokenizer", ["jquery"], (function(e) {
            function t(e, t, i) {
                var n = i.get("tokenizer");
                void 0 !== n && (this.tokenizer = n),
                e.call(this, t, i)
            }
            return t.prototype.bind = function(e, t, i) {
                e.call(this, t, i),
                this.$search = t.dropdown.$search || t.selection.$search || i.find(".select2-search__field")
            }
            ,
            t.prototype.query = function(t, i, n) {
                var s = this;
                i.term = i.term || "";
                var o = this.tokenizer(i, this.options, (function(t) {
                    var i = s._normalizeItem(t);
                    if (!s.$element.find("option").filter((function() {
                        return e(this).val() === i.id
                    }
                    )).length) {
                        var n = s.option(i);
                        n.attr("data-select2-tag", !0),
                        s._removeOldTags(),
                        s.addOptions([n])
                    }
                    !function(e) {
                        s.trigger("select", {
                            data: e
                        })
                    }(i)
                }
                ));
                o.term !== i.term && (this.$search.length && (this.$search.val(o.term),
                this.$search.focus()),
                i.term = o.term),
                t.call(this, i, n)
            }
            ,
            t.prototype.tokenizer = function(t, i, n, s) {
                for (var o = n.get("tokenSeparators") || [], a = i.term, r = 0, l = this.createTag || function(e) {
                    return {
                        id: e.term,
                        text: e.term
                    }
                }
                ; r < a.length; ) {
                    var c = a[r];
                    if (-1 !== e.inArray(c, o)) {
                        var u = a.substr(0, r)
                          , h = l(e.extend({}, i, {
                            term: u
                        }));
                        null != h ? (s(h),
                        a = a.substr(r + 1) || "",
                        r = 0) : r++
                    } else
                        r++
                }
                return {
                    term: a
                }
            }
            ,
            t
        }
        )),
        t.define("select2/data/minimumInputLength", [], (function() {
            function e(e, t, i) {
                this.minimumInputLength = i.get("minimumInputLength"),
                e.call(this, t, i)
            }
            return e.prototype.query = function(e, t, i) {
                return t.term = t.term || "",
                t.term.length < this.minimumInputLength ? void this.trigger("results:message", {
                    message: "inputTooShort",
                    args: {
                        minimum: this.minimumInputLength,
                        input: t.term,
                        params: t
                    }
                }) : void e.call(this, t, i)
            }
            ,
            e
        }
        )),
        t.define("select2/data/maximumInputLength", [], (function() {
            function e(e, t, i) {
                this.maximumInputLength = i.get("maximumInputLength"),
                e.call(this, t, i)
            }
            return e.prototype.query = function(e, t, i) {
                return t.term = t.term || "",
                this.maximumInputLength > 0 && t.term.length > this.maximumInputLength ? void this.trigger("results:message", {
                    message: "inputTooLong",
                    args: {
                        maximum: this.maximumInputLength,
                        input: t.term,
                        params: t
                    }
                }) : void e.call(this, t, i)
            }
            ,
            e
        }
        )),
        t.define("select2/data/maximumSelectionLength", [], (function() {
            function e(e, t, i) {
                this.maximumSelectionLength = i.get("maximumSelectionLength"),
                e.call(this, t, i)
            }
            return e.prototype.query = function(e, t, i) {
                var n = this;
                this.current((function(s) {
                    var o = null != s ? s.length : 0;
                    return n.maximumSelectionLength > 0 && o >= n.maximumSelectionLength ? void n.trigger("results:message", {
                        message: "maximumSelected",
                        args: {
                            maximum: n.maximumSelectionLength
                        }
                    }) : void e.call(n, t, i)
                }
                ))
            }
            ,
            e
        }
        )),
        t.define("select2/dropdown", ["jquery", "./utils"], (function(e, t) {
            function i(e, t) {
                this.$element = e,
                this.options = t,
                i.__super__.constructor.call(this)
            }
            return t.Extend(i, t.Observable),
            i.prototype.render = function() {
                var t = e('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                return t.attr("dir", this.options.get("dir")),
                this.$dropdown = t,
                t
            }
            ,
            i.prototype.bind = function() {}
            ,
            i.prototype.position = function(e, t) {}
            ,
            i.prototype.destroy = function() {
                this.$dropdown.remove()
            }
            ,
            i
        }
        )),
        t.define("select2/dropdown/search", ["jquery", "../utils"], (function(e, t) {
            function i() {}
            return i.prototype.render = function(t) {
                var i = t.call(this)
                  , n = e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
                return this.$searchContainer = n,
                this.$search = n.find("input"),
                i.prepend(n),
                i
            }
            ,
            i.prototype.bind = function(t, i, n) {
                var s = this;
                t.call(this, i, n),
                this.$search.on("keydown", (function(e) {
                    s.trigger("keypress", e),
                    s._keyUpPrevented = e.isDefaultPrevented()
                }
                )),
                this.$search.on("input", (function(t) {
                    e(this).off("keyup")
                }
                )),
                this.$search.on("keyup input", (function(e) {
                    s.handleSearch(e)
                }
                )),
                i.on("open", (function() {
                    s.$search.attr("tabindex", 0),
                    s.$search.focus(),
                    window.setTimeout((function() {
                        s.$search.focus()
                    }
                    ), 0)
                }
                )),
                i.on("close", (function() {
                    s.$search.attr("tabindex", -1),
                    s.$search.val("")
                }
                )),
                i.on("focus", (function() {
                    i.isOpen() && s.$search.focus()
                }
                )),
                i.on("results:all", (function(e) {
                    null != e.query.term && "" !== e.query.term || (s.showSearch(e) ? s.$searchContainer.removeClass("select2-search--hide") : s.$searchContainer.addClass("select2-search--hide"))
                }
                ))
            }
            ,
            i.prototype.handleSearch = function(e) {
                if (!this._keyUpPrevented) {
                    var t = this.$search.val();
                    this.trigger("query", {
                        term: t
                    })
                }
                this._keyUpPrevented = !1
            }
            ,
            i.prototype.showSearch = function(e, t) {
                return !0
            }
            ,
            i
        }
        )),
        t.define("select2/dropdown/hidePlaceholder", [], (function() {
            function e(e, t, i, n) {
                this.placeholder = this.normalizePlaceholder(i.get("placeholder")),
                e.call(this, t, i, n)
            }
            return e.prototype.append = function(e, t) {
                t.results = this.removePlaceholder(t.results),
                e.call(this, t)
            }
            ,
            e.prototype.normalizePlaceholder = function(e, t) {
                return "string" == typeof t && (t = {
                    id: "",
                    text: t
                }),
                t
            }
            ,
            e.prototype.removePlaceholder = function(e, t) {
                for (var i = t.slice(0), n = t.length - 1; n >= 0; n--) {
                    var s = t[n];
                    this.placeholder.id === s.id && i.splice(n, 1)
                }
                return i
            }
            ,
            e
        }
        )),
        t.define("select2/dropdown/infiniteScroll", ["jquery"], (function(e) {
            function t(e, t, i, n) {
                this.lastParams = {},
                e.call(this, t, i, n),
                this.$loadingMore = this.createLoadingMore(),
                this.loading = !1
            }
            return t.prototype.append = function(e, t) {
                this.$loadingMore.remove(),
                this.loading = !1,
                e.call(this, t),
                this.showLoadingMore(t) && this.$results.append(this.$loadingMore)
            }
            ,
            t.prototype.bind = function(t, i, n) {
                var s = this;
                t.call(this, i, n),
                i.on("query", (function(e) {
                    s.lastParams = e,
                    s.loading = !0
                }
                )),
                i.on("query:append", (function(e) {
                    s.lastParams = e,
                    s.loading = !0
                }
                )),
                this.$results.on("scroll", (function() {
                    var t = e.contains(document.documentElement, s.$loadingMore[0]);
                    !s.loading && t && (s.$results.offset().top + s.$results.outerHeight(!1) + 50 >= s.$loadingMore.offset().top + s.$loadingMore.outerHeight(!1) && s.loadMore())
                }
                ))
            }
            ,
            t.prototype.loadMore = function() {
                this.loading = !0;
                var t = e.extend({}, {
                    page: 1
                }, this.lastParams);
                t.page++,
                this.trigger("query:append", t)
            }
            ,
            t.prototype.showLoadingMore = function(e, t) {
                return t.pagination && t.pagination.more
            }
            ,
            t.prototype.createLoadingMore = function() {
                var t = e('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>')
                  , i = this.options.get("translations").get("loadingMore");
                return t.html(i(this.lastParams)),
                t
            }
            ,
            t
        }
        )),
        t.define("select2/dropdown/attachBody", ["jquery", "../utils"], (function(e, t) {
            function i(t, i, n) {
                this.$dropdownParent = n.get("dropdownParent") || e(document.body),
                t.call(this, i, n)
            }
            return i.prototype.bind = function(e, t, i) {
                var n = this
                  , s = !1;
                e.call(this, t, i),
                t.on("open", (function() {
                    n._showDropdown(),
                    n._attachPositioningHandler(t),
                    s || (s = !0,
                    t.on("results:all", (function() {
                        n._positionDropdown(),
                        n._resizeDropdown()
                    }
                    )),
                    t.on("results:append", (function() {
                        n._positionDropdown(),
                        n._resizeDropdown()
                    }
                    )))
                }
                )),
                t.on("close", (function() {
                    n._hideDropdown(),
                    n._detachPositioningHandler(t)
                }
                )),
                this.$dropdownContainer.on("mousedown", (function(e) {
                    e.stopPropagation()
                }
                ))
            }
            ,
            i.prototype.destroy = function(e) {
                e.call(this),
                this.$dropdownContainer.remove()
            }
            ,
            i.prototype.position = function(e, t, i) {
                t.attr("class", i.attr("class")),
                t.removeClass("select2"),
                t.addClass("select2-container--open"),
                t.css({
                    position: "absolute",
                    top: -999999
                }),
                this.$container = i
            }
            ,
            i.prototype.render = function(t) {
                var i = e("<span></span>")
                  , n = t.call(this);
                return i.append(n),
                this.$dropdownContainer = i,
                i
            }
            ,
            i.prototype._hideDropdown = function(e) {
                this.$dropdownContainer.detach()
            }
            ,
            i.prototype._attachPositioningHandler = function(i, n) {
                var s = this
                  , o = "scroll.select2." + n.id
                  , a = "resize.select2." + n.id
                  , r = "orientationchange.select2." + n.id
                  , l = this.$container.parents().filter(t.hasScroll);
                l.each((function() {
                    e(this).data("select2-scroll-position", {
                        x: e(this).scrollLeft(),
                        y: e(this).scrollTop()
                    })
                }
                )),
                l.on(o, (function(t) {
                    var i = e(this).data("select2-scroll-position");
                    e(this).scrollTop(i.y)
                }
                )),
                e(window).on(o + " " + a + " " + r, (function(e) {
                    s._positionDropdown(),
                    s._resizeDropdown()
                }
                ))
            }
            ,
            i.prototype._detachPositioningHandler = function(i, n) {
                var s = "scroll.select2." + n.id
                  , o = "resize.select2." + n.id
                  , a = "orientationchange.select2." + n.id;
                this.$container.parents().filter(t.hasScroll).off(s),
                e(window).off(s + " " + o + " " + a)
            }
            ,
            i.prototype._positionDropdown = function() {
                var t = e(window)
                  , i = this.$dropdown.hasClass("select2-dropdown--above")
                  , n = this.$dropdown.hasClass("select2-dropdown--below")
                  , s = null
                  , o = this.$container.offset();
                o.bottom = o.top + this.$container.outerHeight(!1);
                var a = {
                    height: this.$container.outerHeight(!1)
                };
                a.top = o.top,
                a.bottom = o.top + a.height;
                var r = this.$dropdown.outerHeight(!1)
                  , l = t.scrollTop()
                  , c = t.scrollTop() + t.height()
                  , u = l < o.top - r
                  , h = c > o.bottom + r
                  , d = {
                    left: o.left,
                    top: a.bottom
                }
                  , p = this.$dropdownParent;
                "static" === p.css("position") && (p = p.offsetParent());
                var f = p.offset();
                d.top -= f.top,
                d.left -= f.left,
                i || n || (s = "below"),
                h || !u || i ? !u && h && i && (s = "below") : s = "above",
                ("above" == s || i && "below" !== s) && (d.top = a.top - f.top - r),
                null != s && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + s),
                this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + s)),
                this.$dropdownContainer.css(d)
            }
            ,
            i.prototype._resizeDropdown = function() {
                var e = {
                    width: this.$container.outerWidth(!1) + "px"
                };
                this.options.get("dropdownAutoWidth") && (e.minWidth = e.width,
                e.position = "relative",
                e.width = "auto"),
                this.$dropdown.css(e)
            }
            ,
            i.prototype._showDropdown = function(e) {
                this.$dropdownContainer.appendTo(this.$dropdownParent),
                this._positionDropdown(),
                this._resizeDropdown()
            }
            ,
            i
        }
        )),
        t.define("select2/dropdown/minimumResultsForSearch", [], (function() {
            function e(t) {
                for (var i = 0, n = 0; n < t.length; n++) {
                    var s = t[n];
                    s.children ? i += e(s.children) : i++
                }
                return i
            }
            function t(e, t, i, n) {
                this.minimumResultsForSearch = i.get("minimumResultsForSearch"),
                this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0),
                e.call(this, t, i, n)
            }
            return t.prototype.showSearch = function(t, i) {
                return !(e(i.data.results) < this.minimumResultsForSearch) && t.call(this, i)
            }
            ,
            t
        }
        )),
        t.define("select2/dropdown/selectOnClose", [], (function() {
            function e() {}
            return e.prototype.bind = function(e, t, i) {
                var n = this;
                e.call(this, t, i),
                t.on("close", (function(e) {
                    n._handleSelectOnClose(e)
                }
                ))
            }
            ,
            e.prototype._handleSelectOnClose = function(e, t) {
                if (t && null != t.originalSelect2Event) {
                    var i = t.originalSelect2Event;
                    if ("select" === i._type || "unselect" === i._type)
                        return
                }
                var n = this.getHighlightedResults();
                if (!(n.length < 1)) {
                    var s = n.data("data");
                    null != s.element && s.element.selected || null == s.element && s.selected || this.trigger("select", {
                        data: s
                    })
                }
            }
            ,
            e
        }
        )),
        t.define("select2/dropdown/closeOnSelect", [], (function() {
            function e() {}
            return e.prototype.bind = function(e, t, i) {
                var n = this;
                e.call(this, t, i),
                t.on("select", (function(e) {
                    n._selectTriggered(e)
                }
                )),
                t.on("unselect", (function(e) {
                    n._selectTriggered(e)
                }
                ))
            }
            ,
            e.prototype._selectTriggered = function(e, t) {
                var i = t.originalEvent;
                i && i.ctrlKey || this.trigger("close", {
                    originalEvent: i,
                    originalSelect2Event: t
                })
            }
            ,
            e
        }
        )),
        t.define("select2/i18n/en", [], (function() {
            return {
                errorLoading: function() {
                    return "The results could not be loaded."
                },
                inputTooLong: function(e) {
                    var t = e.input.length - e.maximum
                      , i = "Please delete " + t + " character";
                    return 1 != t && (i += "s"),
                    i
                },
                inputTooShort: function(e) {
                    return "Please enter " + (e.minimum - e.input.length) + " or more characters"
                },
                loadingMore: function() {
                    return "Loading more results…"
                },
                maximumSelected: function(e) {
                    var t = "You can only select " + e.maximum + " item";
                    return 1 != e.maximum && (t += "s"),
                    t
                },
                noResults: function() {
                    return "No results found"
                },
                searching: function() {
                    return "Searching…"
                }
            }
        }
        )),
        t.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], (function(e, t, i, n, s, o, a, r, l, c, u, h, d, p, f, m, g, v, _, b, y, w, x, C, k, S, D, T, $) {
            function I() {
                this.reset()
            }
            return I.prototype.apply = function(h) {
                if (null == (h = e.extend(!0, {}, this.defaults, h)).dataAdapter) {
                    if (null != h.ajax ? h.dataAdapter = f : null != h.data ? h.dataAdapter = p : h.dataAdapter = d,
                    h.minimumInputLength > 0 && (h.dataAdapter = c.Decorate(h.dataAdapter, v)),
                    h.maximumInputLength > 0 && (h.dataAdapter = c.Decorate(h.dataAdapter, _)),
                    h.maximumSelectionLength > 0 && (h.dataAdapter = c.Decorate(h.dataAdapter, b)),
                    h.tags && (h.dataAdapter = c.Decorate(h.dataAdapter, m)),
                    (null != h.tokenSeparators || null != h.tokenizer) && (h.dataAdapter = c.Decorate(h.dataAdapter, g)),
                    null != h.query) {
                        var $ = t(h.amdBase + "compat/query");
                        h.dataAdapter = c.Decorate(h.dataAdapter, $)
                    }
                    if (null != h.initSelection) {
                        var I = t(h.amdBase + "compat/initSelection");
                        h.dataAdapter = c.Decorate(h.dataAdapter, I)
                    }
                }
                if (null == h.resultsAdapter && (h.resultsAdapter = i,
                null != h.ajax && (h.resultsAdapter = c.Decorate(h.resultsAdapter, C)),
                null != h.placeholder && (h.resultsAdapter = c.Decorate(h.resultsAdapter, x)),
                h.selectOnClose && (h.resultsAdapter = c.Decorate(h.resultsAdapter, D))),
                null == h.dropdownAdapter) {
                    if (h.multiple)
                        h.dropdownAdapter = y;
                    else {
                        var P = c.Decorate(y, w);
                        h.dropdownAdapter = P
                    }
                    if (0 !== h.minimumResultsForSearch && (h.dropdownAdapter = c.Decorate(h.dropdownAdapter, S)),
                    h.closeOnSelect && (h.dropdownAdapter = c.Decorate(h.dropdownAdapter, T)),
                    null != h.dropdownCssClass || null != h.dropdownCss || null != h.adaptDropdownCssClass) {
                        var A = t(h.amdBase + "compat/dropdownCss");
                        h.dropdownAdapter = c.Decorate(h.dropdownAdapter, A)
                    }
                    h.dropdownAdapter = c.Decorate(h.dropdownAdapter, k)
                }
                if (null == h.selectionAdapter) {
                    if (h.multiple ? h.selectionAdapter = s : h.selectionAdapter = n,
                    null != h.placeholder && (h.selectionAdapter = c.Decorate(h.selectionAdapter, o)),
                    h.allowClear && (h.selectionAdapter = c.Decorate(h.selectionAdapter, a)),
                    h.multiple && (h.selectionAdapter = c.Decorate(h.selectionAdapter, r)),
                    null != h.containerCssClass || null != h.containerCss || null != h.adaptContainerCssClass) {
                        var E = t(h.amdBase + "compat/containerCss");
                        h.selectionAdapter = c.Decorate(h.selectionAdapter, E)
                    }
                    h.selectionAdapter = c.Decorate(h.selectionAdapter, l)
                }
                if ("string" == typeof h.language)
                    if (h.language.indexOf("-") > 0) {
                        var M = h.language.split("-")[0];
                        h.language = [h.language, M]
                    } else
                        h.language = [h.language];
                if (e.isArray(h.language)) {
                    var O = new u;
                    h.language.push("en");
                    for (var N = h.language, L = 0; L < N.length; L++) {
                        var H = N[L]
                          , F = {};
                        try {
                            F = u.loadPath(H)
                        } catch (e) {
                            try {
                                H = this.defaults.amdLanguageBase + H,
                                F = u.loadPath(H)
                            } catch (e) {
                                h.debug && window.console && console.warn && console.warn('Select2: The language file for "' + H + '" could not be automatically loaded. A fallback will be used instead.');
                                continue
                            }
                        }
                        O.extend(F)
                    }
                    h.translations = O
                } else {
                    var B = u.loadPath(this.defaults.amdLanguageBase + "en")
                      , R = new u(h.language);
                    R.extend(B),
                    h.translations = R
                }
                return h
            }
            ,
            I.prototype.reset = function() {
                function t(e) {
                    return e.replace(/[^\u0000-\u007E]/g, (function(e) {
                        return h[e] || e
                    }
                    ))
                }
                this.defaults = {
                    amdBase: "./",
                    amdLanguageBase: "./i18n/",
                    closeOnSelect: !0,
                    debug: !1,
                    dropdownAutoWidth: !1,
                    escapeMarkup: c.escapeMarkup,
                    language: $,
                    matcher: function i(n, s) {
                        if ("" === e.trim(n.term))
                            return s;
                        if (s.children && s.children.length > 0) {
                            for (var o = e.extend(!0, {}, s), a = s.children.length - 1; a >= 0; a--) {
                                null == i(n, s.children[a]) && o.children.splice(a, 1)
                            }
                            return o.children.length > 0 ? o : i(n, o)
                        }
                        var r = t(s.text).toUpperCase()
                          , l = t(n.term).toUpperCase();
                        return r.indexOf(l) > -1 ? s : null
                    },
                    minimumInputLength: 0,
                    maximumInputLength: 0,
                    maximumSelectionLength: 0,
                    minimumResultsForSearch: 0,
                    selectOnClose: !1,
                    sorter: function(e) {
                        return e
                    },
                    templateResult: function(e) {
                        return e.text
                    },
                    templateSelection: function(e) {
                        return e.text
                    },
                    theme: "default",
                    width: "resolve"
                }
            }
            ,
            I.prototype.set = function(t, i) {
                var n = {};
                n[e.camelCase(t)] = i;
                var s = c._convertData(n);
                e.extend(this.defaults, s)
            }
            ,
            new I
        }
        )),
        t.define("select2/options", ["require", "jquery", "./defaults", "./utils"], (function(e, t, i, n) {
            function s(t, s) {
                if (this.options = t,
                null != s && this.fromElement(s),
                this.options = i.apply(this.options),
                s && s.is("input")) {
                    var o = e(this.get("amdBase") + "compat/inputData");
                    this.options.dataAdapter = n.Decorate(this.options.dataAdapter, o)
                }
            }
            return s.prototype.fromElement = function(e) {
                var i = ["select2"];
                null == this.options.multiple && (this.options.multiple = e.prop("multiple")),
                null == this.options.disabled && (this.options.disabled = e.prop("disabled")),
                null == this.options.language && (e.prop("lang") ? this.options.language = e.prop("lang").toLowerCase() : e.closest("[lang]").prop("lang") && (this.options.language = e.closest("[lang]").prop("lang"))),
                null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"),
                e.prop("disabled", this.options.disabled),
                e.prop("multiple", this.options.multiple),
                e.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),
                e.data("data", e.data("select2Tags")),
                e.data("tags", !0)),
                e.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),
                e.attr("ajax--url", e.data("ajaxUrl")),
                e.data("ajax--url", e.data("ajaxUrl")));
                var s;
                s = t.fn.jquery && "1." == t.fn.jquery.substr(0, 2) && e[0].dataset ? t.extend(!0, {}, e[0].dataset, e.data()) : e.data();
                var o = t.extend(!0, {}, s);
                for (var a in o = n._convertData(o))
                    t.inArray(a, i) > -1 || (t.isPlainObject(this.options[a]) ? t.extend(this.options[a], o[a]) : this.options[a] = o[a]);
                return this
            }
            ,
            s.prototype.get = function(e) {
                return this.options[e]
            }
            ,
            s.prototype.set = function(e, t) {
                this.options[e] = t
            }
            ,
            s
        }
        )),
        t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], (function(e, t, i, n) {
            var s = function(e, i) {
                null != e.data("select2") && e.data("select2").destroy(),
                this.$element = e,
                this.id = this._generateId(e),
                i = i || {},
                this.options = new t(i,e),
                s.__super__.constructor.call(this);
                var n = e.attr("tabindex") || 0;
                e.data("old-tabindex", n),
                e.attr("tabindex", "-1");
                var o = this.options.get("dataAdapter");
                this.dataAdapter = new o(e,this.options);
                var a = this.render();
                this._placeContainer(a);
                var r = this.options.get("selectionAdapter");
                this.selection = new r(e,this.options),
                this.$selection = this.selection.render(),
                this.selection.position(this.$selection, a);
                var l = this.options.get("dropdownAdapter");
                this.dropdown = new l(e,this.options),
                this.$dropdown = this.dropdown.render(),
                this.dropdown.position(this.$dropdown, a);
                var c = this.options.get("resultsAdapter");
                this.results = new c(e,this.options,this.dataAdapter),
                this.$results = this.results.render(),
                this.results.position(this.$results, this.$dropdown);
                var u = this;
                this._bindAdapters(),
                this._registerDomEvents(),
                this._registerDataEvents(),
                this._registerSelectionEvents(),
                this._registerDropdownEvents(),
                this._registerResultsEvents(),
                this._registerEvents(),
                this.dataAdapter.current((function(e) {
                    u.trigger("selection:update", {
                        data: e
                    })
                }
                )),
                e.addClass("select2-hidden-accessible"),
                e.attr("aria-hidden", "true"),
                this._syncAttributes(),
                e.data("select2", this)
            };
            return i.Extend(s, i.Observable),
            s.prototype._generateId = function(e) {
                return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + i.generateChars(2) : i.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "")
            }
            ,
            s.prototype._placeContainer = function(e) {
                e.insertAfter(this.$element);
                var t = this._resolveWidth(this.$element, this.options.get("width"));
                null != t && e.css("width", t)
            }
            ,
            s.prototype._resolveWidth = function(e, t) {
                var i = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                if ("resolve" == t) {
                    var n = this._resolveWidth(e, "style");
                    return null != n ? n : this._resolveWidth(e, "element")
                }
                if ("element" == t) {
                    var s = e.outerWidth(!1);
                    return 0 >= s ? "auto" : s + "px"
                }
                if ("style" == t) {
                    var o = e.attr("style");
                    if ("string" != typeof o)
                        return null;
                    for (var a = o.split(";"), r = 0, l = a.length; l > r; r += 1) {
                        var c = a[r].replace(/\s/g, "").match(i);
                        if (null !== c && c.length >= 1)
                            return c[1]
                    }
                    return null
                }
                return t
            }
            ,
            s.prototype._bindAdapters = function() {
                this.dataAdapter.bind(this, this.$container),
                this.selection.bind(this, this.$container),
                this.dropdown.bind(this, this.$container),
                this.results.bind(this, this.$container)
            }
            ,
            s.prototype._registerDomEvents = function() {
                var t = this;
                this.$element.on("change.select2", (function() {
                    t.dataAdapter.current((function(e) {
                        t.trigger("selection:update", {
                            data: e
                        })
                    }
                    ))
                }
                )),
                this.$element.on("focus.select2", (function(e) {
                    t.trigger("focus", e)
                }
                )),
                this._syncA = i.bind(this._syncAttributes, this),
                this._syncS = i.bind(this._syncSubtree, this),
                this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                var n = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                null != n ? (this._observer = new n((function(i) {
                    e.each(i, t._syncA),
                    e.each(i, t._syncS)
                }
                )),
                this._observer.observe(this.$element[0], {
                    attributes: !0,
                    childList: !0,
                    subtree: !1
                })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", t._syncA, !1),
                this.$element[0].addEventListener("DOMNodeInserted", t._syncS, !1),
                this.$element[0].addEventListener("DOMNodeRemoved", t._syncS, !1))
            }
            ,
            s.prototype._registerDataEvents = function() {
                var e = this;
                this.dataAdapter.on("*", (function(t, i) {
                    e.trigger(t, i)
                }
                ))
            }
            ,
            s.prototype._registerSelectionEvents = function() {
                var t = this
                  , i = ["toggle", "focus"];
                this.selection.on("toggle", (function() {
                    t.toggleDropdown()
                }
                )),
                this.selection.on("focus", (function(e) {
                    t.focus(e)
                }
                )),
                this.selection.on("*", (function(n, s) {
                    -1 === e.inArray(n, i) && t.trigger(n, s)
                }
                ))
            }
            ,
            s.prototype._registerDropdownEvents = function() {
                var e = this;
                this.dropdown.on("*", (function(t, i) {
                    e.trigger(t, i)
                }
                ))
            }
            ,
            s.prototype._registerResultsEvents = function() {
                var e = this;
                this.results.on("*", (function(t, i) {
                    e.trigger(t, i)
                }
                ))
            }
            ,
            s.prototype._registerEvents = function() {
                var e = this;
                this.on("open", (function() {
                    e.$container.addClass("select2-container--open")
                }
                )),
                this.on("close", (function() {
                    e.$container.removeClass("select2-container--open")
                }
                )),
                this.on("enable", (function() {
                    e.$container.removeClass("select2-container--disabled")
                }
                )),
                this.on("disable", (function() {
                    e.$container.addClass("select2-container--disabled")
                }
                )),
                this.on("blur", (function() {
                    e.$container.removeClass("select2-container--focus")
                }
                )),
                this.on("query", (function(t) {
                    e.isOpen() || e.trigger("open", {}),
                    this.dataAdapter.query(t, (function(i) {
                        e.trigger("results:all", {
                            data: i,
                            query: t
                        })
                    }
                    ))
                }
                )),
                this.on("query:append", (function(t) {
                    this.dataAdapter.query(t, (function(i) {
                        e.trigger("results:append", {
                            data: i,
                            query: t
                        })
                    }
                    ))
                }
                )),
                this.on("keypress", (function(t) {
                    var i = t.which;
                    e.isOpen() ? i === n.ESC || i === n.TAB || i === n.UP && t.altKey ? (e.close(),
                    t.preventDefault()) : i === n.ENTER ? (e.trigger("results:select", {}),
                    t.preventDefault()) : i === n.SPACE && t.ctrlKey ? (e.trigger("results:toggle", {}),
                    t.preventDefault()) : i === n.UP ? (e.trigger("results:previous", {}),
                    t.preventDefault()) : i === n.DOWN && (e.trigger("results:next", {}),
                    t.preventDefault()) : (i === n.ENTER || i === n.SPACE || i === n.DOWN && t.altKey) && (e.open(),
                    t.preventDefault())
                }
                ))
            }
            ,
            s.prototype._syncAttributes = function() {
                this.options.set("disabled", this.$element.prop("disabled")),
                this.options.get("disabled") ? (this.isOpen() && this.close(),
                this.trigger("disable", {})) : this.trigger("enable", {})
            }
            ,
            s.prototype._syncSubtree = function(e, t) {
                var i = !1
                  , n = this;
                if (!e || !e.target || "OPTION" === e.target.nodeName || "OPTGROUP" === e.target.nodeName) {
                    if (t)
                        if (t.addedNodes && t.addedNodes.length > 0)
                            for (var s = 0; s < t.addedNodes.length; s++) {
                                t.addedNodes[s].selected && (i = !0)
                            }
                        else
                            t.removedNodes && t.removedNodes.length > 0 && (i = !0);
                    else
                        i = !0;
                    i && this.dataAdapter.current((function(e) {
                        n.trigger("selection:update", {
                            data: e
                        })
                    }
                    ))
                }
            }
            ,
            s.prototype.trigger = function(e, t) {
                var i = s.__super__.trigger
                  , n = {
                    open: "opening",
                    close: "closing",
                    select: "selecting",
                    unselect: "unselecting"
                };
                if (void 0 === t && (t = {}),
                e in n) {
                    var o = n[e]
                      , a = {
                        prevented: !1,
                        name: e,
                        args: t
                    };
                    if (i.call(this, o, a),
                    a.prevented)
                        return void (t.prevented = !0)
                }
                i.call(this, e, t)
            }
            ,
            s.prototype.toggleDropdown = function() {
                this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
            }
            ,
            s.prototype.open = function() {
                this.isOpen() || this.trigger("query", {})
            }
            ,
            s.prototype.close = function() {
                this.isOpen() && this.trigger("close", {})
            }
            ,
            s.prototype.isOpen = function() {
                return this.$container.hasClass("select2-container--open")
            }
            ,
            s.prototype.hasFocus = function() {
                return this.$container.hasClass("select2-container--focus")
            }
            ,
            s.prototype.focus = function(e) {
                this.hasFocus() || (this.$container.addClass("select2-container--focus"),
                this.trigger("focus", {}))
            }
            ,
            s.prototype.enable = function(e) {
                this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),
                (null == e || 0 === e.length) && (e = [!0]);
                var t = !e[0];
                this.$element.prop("disabled", t)
            }
            ,
            s.prototype.data = function() {
                this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                var e = [];
                return this.dataAdapter.current((function(t) {
                    e = t
                }
                )),
                e
            }
            ,
            s.prototype.val = function(t) {
                if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),
                null == t || 0 === t.length)
                    return this.$element.val();
                var i = t[0];
                e.isArray(i) && (i = e.map(i, (function(e) {
                    return e.toString()
                }
                ))),
                this.$element.val(i).trigger("change")
            }
            ,
            s.prototype.destroy = function() {
                this.$container.remove(),
                this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA),
                null != this._observer ? (this._observer.disconnect(),
                this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1),
                this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1),
                this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)),
                this._syncA = null,
                this._syncS = null,
                this.$element.off(".select2"),
                this.$element.attr("tabindex", this.$element.data("old-tabindex")),
                this.$element.removeClass("select2-hidden-accessible"),
                this.$element.attr("aria-hidden", "false"),
                this.$element.removeData("select2"),
                this.dataAdapter.destroy(),
                this.selection.destroy(),
                this.dropdown.destroy(),
                this.results.destroy(),
                this.dataAdapter = null,
                this.selection = null,
                this.dropdown = null,
                this.results = null
            }
            ,
            s.prototype.render = function() {
                var t = e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                return t.attr("dir", this.options.get("dir")),
                this.$container = t,
                this.$container.addClass("select2-container--" + this.options.get("theme")),
                t.data("element", this.$element),
                t
            }
            ,
            s
        }
        )),
        t.define("jquery-mousewheel", ["jquery"], (function(e) {
            return e
        }
        )),
        t.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], (function(e, t, i, n) {
            if (null == e.fn.select2) {
                var s = ["open", "close", "destroy"];
                e.fn.select2 = function(t) {
                    if ("object" == typeof (t = t || {}))
                        return this.each((function() {
                            var n = e.extend(!0, {}, t);
                            new i(e(this),n)
                        }
                        )),
                        this;
                    if ("string" == typeof t) {
                        var n, o = Array.prototype.slice.call(arguments, 1);
                        return this.each((function() {
                            var i = e(this).data("select2");
                            null == i && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."),
                            n = i[t].apply(i, o)
                        }
                        )),
                        e.inArray(t, s) > -1 ? this : n
                    }
                    throw new Error("Invalid arguments for Select2: " + t)
                }
            }
            return null == e.fn.select2.defaults && (e.fn.select2.defaults = n),
            i
        }
        )),
        {
            define: t.define,
            require: t.require
        }
    }()
      , i = t.require("jquery.select2");
    return e.fn.select2.amd = t,
    i
}
)),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}((function(e) {
    e.extend(e.fn, {
        validate: function(t) {
            if (this.length) {
                var i = e.data(this[0], "validator");
                return i || (this.attr("novalidate", "novalidate"),
                i = new e.validator(t,this[0]),
                e.data(this[0], "validator", i),
                i.settings.onsubmit && (this.on("click.validate", ":submit", (function(t) {
                    i.settings.submitHandler && (i.submitButton = t.target),
                    e(this).hasClass("cancel") && (i.cancelSubmit = !0),
                    void 0 !== e(this).attr("formnovalidate") && (i.cancelSubmit = !0)
                }
                )),
                this.on("submit.validate", (function(t) {
                    function n() {
                        var n, s;
                        return !i.settings.submitHandler || (i.submitButton && (n = e("<input type='hidden'/>").attr("name", i.submitButton.name).val(e(i.submitButton).val()).appendTo(i.currentForm)),
                        s = i.settings.submitHandler.call(i, i.currentForm, t),
                        i.submitButton && n.remove(),
                        void 0 !== s && s)
                    }
                    return i.settings.debug && t.preventDefault(),
                    i.cancelSubmit ? (i.cancelSubmit = !1,
                    n()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0,
                    !1) : n() : (i.focusInvalid(),
                    !1)
                }
                ))),
                i)
            }
            t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
        },
        valid: function() {
            var t, i, n;
            return e(this[0]).is("form") ? t = this.validate().form() : (n = [],
            t = !0,
            i = e(this[0].form).validate(),
            this.each((function() {
                (t = i.element(this) && t) || (n = n.concat(i.errorList))
            }
            )),
            i.errorList = n),
            t
        },
        rules: function(t, i) {
            var n, s, o, a, r, l, c = this[0];
            if (null != c && null != c.form) {
                if (t)
                    switch (n = e.data(c.form, "validator").settings,
                    s = n.rules,
                    o = e.validator.staticRules(c),
                    t) {
                    case "add":
                        e.extend(o, e.validator.normalizeRule(i)),
                        delete o.messages,
                        s[c.name] = o,
                        i.messages && (n.messages[c.name] = e.extend(n.messages[c.name], i.messages));
                        break;
                    case "remove":
                        return i ? (l = {},
                        e.each(i.split(/\s/), (function(t, i) {
                            l[i] = o[i],
                            delete o[i],
                            "required" === i && e(c).removeAttr("aria-required")
                        }
                        )),
                        l) : (delete s[c.name],
                        o)
                    }
                return (a = e.validator.normalizeRules(e.extend({}, e.validator.classRules(c), e.validator.attributeRules(c), e.validator.dataRules(c), e.validator.staticRules(c)), c)).required && (r = a.required,
                delete a.required,
                a = e.extend({
                    required: r
                }, a),
                e(c).attr("aria-required", "true")),
                a.remote && (r = a.remote,
                delete a.remote,
                a = e.extend(a, {
                    remote: r
                })),
                a
            }
        }
    }),
    e.extend(e.expr.pseudos || e.expr[":"], {
        blank: function(t) {
            return !e.trim("" + e(t).val())
        },
        filled: function(t) {
            var i = e(t).val();
            return null !== i && !!e.trim("" + i)
        },
        unchecked: function(t) {
            return !e(t).prop("checked")
        }
    }),
    e.validator = function(t, i) {
        this.settings = e.extend(!0, {}, e.validator.defaults, t),
        this.currentForm = i,
        this.init()
    }
    ,
    e.validator.format = function(t, i) {
        return 1 === arguments.length ? function() {
            var i = e.makeArray(arguments);
            return i.unshift(t),
            e.validator.format.apply(this, i)
        }
        : (void 0 === i || (arguments.length > 2 && i.constructor !== Array && (i = e.makeArray(arguments).slice(1)),
        i.constructor !== Array && (i = [i]),
        e.each(i, (function(e, i) {
            t = t.replace(new RegExp("\\{" + e + "\\}","g"), (function() {
                return i
            }
            ))
        }
        ))),
        t)
    }
    ,
    e.extend(e.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: e([]),
            errorLabelContainer: e([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(e) {
                this.lastActive = e,
                this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass),
                this.hideThese(this.errorsFor(e)))
            },
            onfocusout: function(e) {
                this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
            },
            onkeyup: function(t, i) {
                9 === i.which && "" === this.elementValue(t) || -1 !== e.inArray(i.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (t.name in this.submitted || t.name in this.invalid) && this.element(t)
            },
            onclick: function(e) {
                e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
            },
            highlight: function(t, i, n) {
                "radio" === t.type ? this.findByName(t.name).addClass(i).removeClass(n) : e(t).addClass(i).removeClass(n)
            },
            unhighlight: function(t, i, n) {
                "radio" === t.type ? this.findByName(t.name).removeClass(i).addClass(n) : e(t).removeClass(i).addClass(n)
            }
        },
        setDefaults: function(t) {
            e.extend(e.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: e.validator.format("Please enter no more than {0} characters."),
            minlength: e.validator.format("Please enter at least {0} characters."),
            rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
            range: e.validator.format("Please enter a value between {0} and {1}."),
            max: e.validator.format("Please enter a value less than or equal to {0}."),
            min: e.validator.format("Please enter a value greater than or equal to {0}."),
            step: e.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function t(t) {
                    !this.form && this.hasAttribute("contenteditable") && (this.form = e(this).closest("form")[0]);
                    var i = e.data(this.form, "validator")
                      , n = "on" + t.type.replace(/^validate/, "")
                      , s = i.settings;
                    s[n] && !e(this).is(s.ignore) && s[n].call(i, this, t)
                }
                this.labelContainer = e(this.settings.errorLabelContainer),
                this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm),
                this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer),
                this.submitted = {},
                this.valueCache = {},
                this.pendingRequest = 0,
                this.pending = {},
                this.invalid = {},
                this.reset();
                var i, n = this.groups = {};
                e.each(this.settings.groups, (function(t, i) {
                    "string" == typeof i && (i = i.split(/\s/)),
                    e.each(i, (function(e, i) {
                        n[i] = t
                    }
                    ))
                }
                )),
                i = this.settings.rules,
                e.each(i, (function(t, n) {
                    i[t] = e.validator.normalizeRule(n)
                }
                )),
                e(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t),
                this.settings.invalidHandler && e(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler),
                e(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() {
                return this.checkForm(),
                e.extend(this.submitted, this.errorMap),
                this.invalid = e.extend({}, this.errorMap),
                this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]),
                this.showErrors(),
                this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++)
                    this.check(t[e]);
                return this.valid()
            },
            element: function(t) {
                var i, n, s = this.clean(t), o = this.validationTargetFor(s), a = this, r = !0;
                return void 0 === o ? delete this.invalid[s.name] : (this.prepareElement(o),
                this.currentElements = e(o),
                (n = this.groups[o.name]) && e.each(this.groups, (function(e, t) {
                    t === n && e !== o.name && ((s = a.validationTargetFor(a.clean(a.findByName(e)))) && s.name in a.invalid && (a.currentElements.push(s),
                    r = a.check(s) && r))
                }
                )),
                i = !1 !== this.check(o),
                r = r && i,
                this.invalid[o.name] = !i,
                this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                this.showErrors(),
                e(t).attr("aria-invalid", !i)),
                r
            },
            showErrors: function(t) {
                if (t) {
                    var i = this;
                    e.extend(this.errorMap, t),
                    this.errorList = e.map(this.errorMap, (function(e, t) {
                        return {
                            message: e,
                            element: i.findByName(t)[0]
                        }
                    }
                    )),
                    this.successList = e.grep(this.successList, (function(e) {
                        return !(e.name in t)
                    }
                    ))
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                e.fn.resetForm && e(this.currentForm).resetForm(),
                this.invalid = {},
                this.submitted = {},
                this.prepareForm(),
                this.hideErrors();
                var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(t)
            },
            resetElements: function(e) {
                var t;
                if (this.settings.unhighlight)
                    for (t = 0; e[t]; t++)
                        this.settings.unhighlight.call(this, e[t], this.settings.errorClass, ""),
                        this.findByName(e[t].name).removeClass(this.settings.validClass);
                else
                    e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(e) {
                var t, i = 0;
                for (t in e)
                    e[t] && i++;
                return i
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(e) {
                e.not(this.containers).text(""),
                this.addWrapper(e).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid)
                    try {
                        e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (e) {}
            },
            findLastActive: function() {
                var t = this.lastActive;
                return t && 1 === e.grep(this.errorList, (function(e) {
                    return e.element.name === t.name
                }
                )).length && t
            },
            elements: function() {
                var t = this
                  , i = {};
                return e(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter((function() {
                    var n = this.name || e(this).attr("name");
                    return !n && t.settings.debug && window.console && console.error("%o has no name assigned", this),
                    this.hasAttribute("contenteditable") && (this.form = e(this).closest("form")[0]),
                    !(n in i || !t.objectLength(e(this).rules()) || (i[n] = !0,
                    0))
                }
                ))
            },
            clean: function(t) {
                return e(t)[0]
            },
            errors: function() {
                var t = this.settings.errorClass.split(" ").join(".");
                return e(this.settings.errorElement + "." + t, this.errorContext)
            },
            resetInternals: function() {
                this.successList = [],
                this.errorList = [],
                this.errorMap = {},
                this.toShow = e([]),
                this.toHide = e([])
            },
            reset: function() {
                this.resetInternals(),
                this.currentElements = e([])
            },
            prepareForm: function() {
                this.reset(),
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(e) {
                this.reset(),
                this.toHide = this.errorsFor(e)
            },
            elementValue: function(t) {
                var i, n, s = e(t), o = t.type;
                return "radio" === o || "checkbox" === o ? this.findByName(t.name).filter(":checked").val() : "number" === o && void 0 !== t.validity ? t.validity.badInput ? "NaN" : s.val() : (i = t.hasAttribute("contenteditable") ? s.text() : s.val(),
                "file" === o ? "C:\\fakepath\\" === i.substr(0, 12) ? i.substr(12) : (n = i.lastIndexOf("/")) >= 0 ? i.substr(n + 1) : (n = i.lastIndexOf("\\")) >= 0 ? i.substr(n + 1) : i : "string" == typeof i ? i.replace(/\r/g, "") : i)
            },
            check: function(t) {
                t = this.validationTargetFor(this.clean(t));
                var i, n, s, o = e(t).rules(), a = e.map(o, (function(e, t) {
                    return t
                }
                )).length, r = !1, l = this.elementValue(t);
                if ("function" == typeof o.normalizer) {
                    if ("string" != typeof (l = o.normalizer.call(t, l)))
                        throw new TypeError("The normalizer should return a string value.");
                    delete o.normalizer
                }
                for (n in o) {
                    s = {
                        method: n,
                        parameters: o[n]
                    };
                    try {
                        if ("dependency-mismatch" === (i = e.validator.methods[n].call(this, l, t, s.parameters)) && 1 === a) {
                            r = !0;
                            continue
                        }
                        if (r = !1,
                        "pending" === i)
                            return void (this.toHide = this.toHide.not(this.errorsFor(t)));
                        if (!i)
                            return this.formatAndAdd(t, s),
                            !1
                    } catch (e) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + s.method + "' method.", e),
                        e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + s.method + "' method."),
                        e
                    }
                }
                if (!r)
                    return this.objectLength(o) && this.successList.push(t),
                    !0
            },
            customDataMessage: function(t, i) {
                return e(t).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || e(t).data("msg")
            },
            customMessage: function(e, t) {
                var i = this.settings.messages[e];
                return i && (i.constructor === String ? i : i[t])
            },
            findDefined: function() {
                for (var e = 0; e < arguments.length; e++)
                    if (void 0 !== arguments[e])
                        return arguments[e]
            },
            defaultMessage: function(t, i) {
                "string" == typeof i && (i = {
                    method: i
                });
                var n = this.findDefined(this.customMessage(t.name, i.method), this.customDataMessage(t, i.method), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[i.method], "<strong>Warning: No message defined for " + t.name + "</strong>")
                  , s = /\$?\{(\d+)\}/g;
                return "function" == typeof n ? n = n.call(this, i.parameters, t) : s.test(n) && (n = e.validator.format(n.replace(s, "{$1}"), i.parameters)),
                n
            },
            formatAndAdd: function(e, t) {
                var i = this.defaultMessage(e, t);
                this.errorList.push({
                    message: i,
                    element: e,
                    method: t.method
                }),
                this.errorMap[e.name] = i,
                this.submitted[e.name] = i
            },
            addWrapper: function(e) {
                return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))),
                e
            },
            defaultShowErrors: function() {
                var e, t, i;
                for (e = 0; this.errorList[e]; e++)
                    i = this.errorList[e],
                    this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass),
                    this.showLabel(i.element, i.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)),
                this.settings.success)
                    for (e = 0; this.successList[e]; e++)
                        this.showLabel(this.successList[e]);
                if (this.settings.unhighlight)
                    for (e = 0,
                    t = this.validElements(); t[e]; e++)
                        this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow),
                this.hideErrors(),
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return e(this.errorList).map((function() {
                    return this.element
                }
                ))
            },
            showLabel: function(t, i) {
                var n, s, o, a, r = this.errorsFor(t), l = this.idOrName(t), c = e(t).attr("aria-describedby");
                r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass),
                r.html(i)) : (n = r = e("<" + this.settings.errorElement + ">").attr("id", l + "-error").addClass(this.settings.errorClass).html(i || ""),
                this.settings.wrapper && (n = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()),
                this.labelContainer.length ? this.labelContainer.append(n) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, n, e(t)) : n.insertAfter(t),
                r.is("label") ? r.attr("for", l) : 0 === r.parents("label[for='" + this.escapeCssMeta(l) + "']").length && (o = r.attr("id"),
                c ? c.match(new RegExp("\\b" + this.escapeCssMeta(o) + "\\b")) || (c += " " + o) : c = o,
                e(t).attr("aria-describedby", c),
                (s = this.groups[t.name]) && (a = this,
                e.each(a.groups, (function(t, i) {
                    i === s && e("[name='" + a.escapeCssMeta(t) + "']", a.currentForm).attr("aria-describedby", r.attr("id"))
                }
                ))))),
                !i && this.settings.success && (r.text(""),
                "string" == typeof this.settings.success ? r.addClass(this.settings.success) : this.settings.success(r, t)),
                this.toShow = this.toShow.add(r)
            },
            errorsFor: function(t) {
                var i = this.escapeCssMeta(this.idOrName(t))
                  , n = e(t).attr("aria-describedby")
                  , s = "label[for='" + i + "'], label[for='" + i + "'] *";
                return n && (s = s + ", #" + this.escapeCssMeta(n).replace(/\s+/g, ", #")),
                this.errors().filter(s)
            },
            escapeCssMeta: function(e) {
                return e.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
            },
            idOrName: function(e) {
                return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
            },
            validationTargetFor: function(t) {
                return this.checkable(t) && (t = this.findByName(t.name)),
                e(t).not(this.settings.ignore)[0]
            },
            checkable: function(e) {
                return /radio|checkbox/i.test(e.type)
            },
            findByName: function(t) {
                return e(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']")
            },
            getLength: function(t, i) {
                switch (i.nodeName.toLowerCase()) {
                case "select":
                    return e("option:selected", i).length;
                case "input":
                    if (this.checkable(i))
                        return this.findByName(i.name).filter(":checked").length
                }
                return t.length
            },
            depend: function(e, t) {
                return !this.dependTypes[typeof e] || this.dependTypes[typeof e](e, t)
            },
            dependTypes: {
                boolean: function(e) {
                    return e
                },
                string: function(t, i) {
                    return !!e(t, i.form).length
                },
                function: function(e, t) {
                    return e(t)
                }
            },
            optional: function(t) {
                var i = this.elementValue(t);
                return !e.validator.methods.required.call(this, i, t) && "dependency-mismatch"
            },
            startRequest: function(t) {
                this.pending[t.name] || (this.pendingRequest++,
                e(t).addClass(this.settings.pendingClass),
                this.pending[t.name] = !0)
            },
            stopRequest: function(t, i) {
                this.pendingRequest--,
                this.pendingRequest < 0 && (this.pendingRequest = 0),
                delete this.pending[t.name],
                e(t).removeClass(this.settings.pendingClass),
                i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(),
                this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]),
                this.formSubmitted = !1)
            },
            previousValue: function(t, i) {
                return i = "string" == typeof i && i || "remote",
                e.data(t, "previousValue") || e.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, {
                        method: i
                    })
                })
            },
            destroy: function() {
                this.resetForm(),
                e(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(t, i) {
            t.constructor === String ? this.classRuleSettings[t] = i : e.extend(this.classRuleSettings, t)
        },
        classRules: function(t) {
            var i = {}
              , n = e(t).attr("class");
            return n && e.each(n.split(" "), (function() {
                this in e.validator.classRuleSettings && e.extend(i, e.validator.classRuleSettings[this])
            }
            )),
            i
        },
        normalizeAttributeRule: function(e, t, i, n) {
            /min|max|step/.test(i) && (null === t || /number|range|text/.test(t)) && (n = Number(n),
            isNaN(n) && (n = void 0)),
            n || 0 === n ? e[i] = n : t === i && "range" !== t && (e[i] = !0)
        },
        attributeRules: function(t) {
            var i, n, s = {}, o = e(t), a = t.getAttribute("type");
            for (i in e.validator.methods)
                "required" === i ? ("" === (n = t.getAttribute(i)) && (n = !0),
                n = !!n) : n = o.attr(i),
                this.normalizeAttributeRule(s, a, i, n);
            return s.maxlength && /-1|2147483647|524288/.test(s.maxlength) && delete s.maxlength,
            s
        },
        dataRules: function(t) {
            var i, n, s = {}, o = e(t), a = t.getAttribute("type");
            for (i in e.validator.methods)
                n = o.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()),
                this.normalizeAttributeRule(s, a, i, n);
            return s
        },
        staticRules: function(t) {
            var i = {}
              , n = e.data(t.form, "validator");
            return n.settings.rules && (i = e.validator.normalizeRule(n.settings.rules[t.name]) || {}),
            i
        },
        normalizeRules: function(t, i) {
            return e.each(t, (function(n, s) {
                if (!1 !== s) {
                    if (s.param || s.depends) {
                        var o = !0;
                        switch (typeof s.depends) {
                        case "string":
                            o = !!e(s.depends, i.form).length;
                            break;
                        case "function":
                            o = s.depends.call(i, i)
                        }
                        o ? t[n] = void 0 === s.param || s.param : (e.data(i.form, "validator").resetElements(e(i)),
                        delete t[n])
                    }
                } else
                    delete t[n]
            }
            )),
            e.each(t, (function(n, s) {
                t[n] = e.isFunction(s) && "normalizer" !== n ? s(i) : s
            }
            )),
            e.each(["minlength", "maxlength"], (function() {
                t[this] && (t[this] = Number(t[this]))
            }
            )),
            e.each(["rangelength", "range"], (function() {
                var i;
                t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (i = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/),
                t[this] = [Number(i[0]), Number(i[1])]))
            }
            )),
            e.validator.autoCreateRanges && (null != t.min && null != t.max && (t.range = [t.min, t.max],
            delete t.min,
            delete t.max),
            null != t.minlength && null != t.maxlength && (t.rangelength = [t.minlength, t.maxlength],
            delete t.minlength,
            delete t.maxlength)),
            t
        },
        normalizeRule: function(t) {
            if ("string" == typeof t) {
                var i = {};
                e.each(t.split(/\s/), (function() {
                    i[this] = !0
                }
                )),
                t = i
            }
            return t
        },
        addMethod: function(t, i, n) {
            e.validator.methods[t] = i,
            e.validator.messages[t] = void 0 !== n ? n : e.validator.messages[t],
            i.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t))
        },
        methods: {
            required: function(t, i, n) {
                if (!this.depend(n, i))
                    return "dependency-mismatch";
                if ("select" === i.nodeName.toLowerCase()) {
                    var s = e(i).val();
                    return s && s.length > 0
                }
                return this.checkable(i) ? this.getLength(t, i) > 0 : t.length > 0
            },
            email: function(e, t) {
                return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
            },
            url: function(e, t) {
                return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(e)
            },
            date: function(e, t) {
                return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString())
            },
            dateISO: function(e, t) {
                return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)
            },
            number: function(e, t) {
                return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
            },
            digits: function(e, t) {
                return this.optional(t) || /^\d+$/.test(e)
            },
            minlength: function(t, i, n) {
                var s = e.isArray(t) ? t.length : this.getLength(t, i);
                return this.optional(i) || s >= n
            },
            maxlength: function(t, i, n) {
                var s = e.isArray(t) ? t.length : this.getLength(t, i);
                return this.optional(i) || s <= n
            },
            rangelength: function(t, i, n) {
                var s = e.isArray(t) ? t.length : this.getLength(t, i);
                return this.optional(i) || s >= n[0] && s <= n[1]
            },
            min: function(e, t, i) {
                return this.optional(t) || e >= i
            },
            max: function(e, t, i) {
                return this.optional(t) || e <= i
            },
            range: function(e, t, i) {
                return this.optional(t) || e >= i[0] && e <= i[1]
            },
            step: function(t, i, n) {
                var s, o = e(i).attr("type"), a = "Step attribute on input type " + o + " is not supported.", r = new RegExp("\\b" + o + "\\b"), l = function(e) {
                    var t = ("" + e).match(/(?:\.(\d+))?$/);
                    return t && t[1] ? t[1].length : 0
                }, c = function(e) {
                    return Math.round(e * Math.pow(10, s))
                }, u = !0;
                if (o && !r.test(["text", "number", "range"].join()))
                    throw new Error(a);
                return s = l(n),
                (l(t) > s || c(t) % c(n) != 0) && (u = !1),
                this.optional(i) || u
            },
            equalTo: function(t, i, n) {
                var s = e(n);
                return this.settings.onfocusout && s.not(".validate-equalTo-blur").length && s.addClass("validate-equalTo-blur").on("blur.validate-equalTo", (function() {
                    e(i).valid()
                }
                )),
                t === s.val()
            },
            remote: function(t, i, n, s) {
                if (this.optional(i))
                    return "dependency-mismatch";
                s = "string" == typeof s && s || "remote";
                var o, a, r, l = this.previousValue(i, s);
                return this.settings.messages[i.name] || (this.settings.messages[i.name] = {}),
                l.originalMessage = l.originalMessage || this.settings.messages[i.name][s],
                this.settings.messages[i.name][s] = l.message,
                n = "string" == typeof n && {
                    url: n
                } || n,
                r = e.param(e.extend({
                    data: t
                }, n.data)),
                l.old === r ? l.valid : (l.old = r,
                o = this,
                this.startRequest(i),
                (a = {})[i.name] = t,
                e.ajax(e.extend(!0, {
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: a,
                    context: o.currentForm,
                    success: function(e) {
                        var n, a, r, c = !0 === e || "true" === e;
                        o.settings.messages[i.name][s] = l.originalMessage,
                        c ? (r = o.formSubmitted,
                        o.resetInternals(),
                        o.toHide = o.errorsFor(i),
                        o.formSubmitted = r,
                        o.successList.push(i),
                        o.invalid[i.name] = !1,
                        o.showErrors()) : (n = {},
                        a = e || o.defaultMessage(i, {
                            method: s,
                            parameters: t
                        }),
                        n[i.name] = l.message = a,
                        o.invalid[i.name] = !0,
                        o.showErrors(n)),
                        l.valid = c,
                        o.stopRequest(i, c)
                    }
                }, n)),
                "pending")
            }
        }
    });
    var t, i = {};
    return e.ajaxPrefilter ? e.ajaxPrefilter((function(e, t, n) {
        var s = e.port;
        "abort" === e.mode && (i[s] && i[s].abort(),
        i[s] = n)
    }
    )) : (t = e.ajax,
    e.ajax = function(n) {
        var s = ("mode"in n ? n : e.ajaxSettings).mode
          , o = ("port"in n ? n : e.ajaxSettings).port;
        return "abort" === s ? (i[o] && i[o].abort(),
        i[o] = t.apply(this, arguments),
        i[o]) : t.apply(this, arguments)
    }
    ),
    e
}
)),
window.console || (window.console = {
    info: function() {},
    warn: function() {},
    error: function() {},
    log: function() {}
});
var eSuite = {
    SearchWhoIsWhoAutocomplete: {
        enabled: !0
    },
    dialogId: "",
    dataFormat: {
        datepicker: {
            dateFormat: $.datepicker._defaults.dateFormat,
            dayNames: $.datepicker._defaults.dayNames,
            dayNamesShort: $.datepicker._defaults.dayNamesShort,
            dayNamesMin: $.datepicker._defaults.dayNamesMin,
            firstDay: $.datepicker._defaults.firstDay,
            monthNames: $.datepicker._defaults.monthNames,
            monthNamesShort: $.datepicker._defaults.monthNamesShort
        },
        numeric: {
            decimalSeparator: ".",
            groupSeparator: ","
        },
        setDatepickerDefaults: function(e) {
            this.datepicker = e,
            $.datepicker.setDefaults(e)
        },
        setNumericDefaults: function(e) {
            this.numeric = e
        },
        getNumericRegex: function() {
            return "," !== this.numeric.decimalSeparator || "." !== this.numeric.groupSeparator && "" != $.trim(this.numeric.groupSeparator) ? /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/ : /^-?(?:\d+|\d{1,3}(?:[\.\s]\d{3})+)?(?:,\d+)?$/
        }
    },
    hoursAndMinutesRegexRule: /^(([0-1]?[0-9])|([2][0-3]))(:?)([0-5][0-9])$/,
    init: function() {
        $("html").removeClass("no-js"),
        eSuite.setupAjaxPostsToAddAntiForgeryToken(),
        eSuite.dressTipsy(),
        eSuite.dressTextArea(),
        eSuite.dressFileUploadFields(),
        eSuite.dressCollapsibles(),
        eSuite.userBadgeFlyout.init(),
        eSuite.userTeamFlyout.init(),
        eSuite.dressFormValidation(),
        eSuite.dressHeaderSearch(),
        eSuite.dressHeaderSearchMVC(),
        eSuite.dressTodoNotificationHeader(),
        eSuite.dressPlaceholders(),
        eSuite.dressEllipsingBreadcrumbs(),
        eSuite.dressDocTimeLine(),
        eSuite.dressBrowseList(),
        eSuite.dressSearchTyping(),
        eSuite.dressPopup(),
        eSuite.dressTimestamps(),
        eSuite.dressInputReset(),
        eSuite.dressFlyoutScrollbar(),
        eSuite.dressCustomScrollbar(),
        eSuite.dressBreadcrumb(),
        eSuite.dressDatePicker(),
        eSuite.dressViewMore(),
        eSuite.dressPaging(),
        eSuite.dressSortOrder(),
        eSuite.dressFilter(),
        eSuite.dressAdvancedSearchAutocomplete(),
        eSuite.dressSelect2(),
        eSuite.fixIE()
    },
    openPopup: function(e, t) {
        this.popupOptions = t,
        this.dialogId = this.popupOptions.newDialogId;
        const i = this;
        $.ajax({
            url: e,
            type: "GET",
            cache: !1,
            success: function(e) {
                $(i.dialogId).html(e),
                i._onDialogLoaded()
            }
        })
    },
    _onDialogLoaded: function() {
        const e = this
          , t = $(e.dialogId).children();
        t.find('a[data-trigger="closeOverlay"]').on("click", (function(t) {
            e._closePopup()
        }
        )),
        t.showOverlay(),
        $("body").css({
            overflow: "hidden"
        }),
        this._dressPopup(t),
        this.popupOptions.isWizard && this._dressWizard(t),
        this.popupOptions.resetOnLoadAndClose && this._resetPopupModalFooter(),
        this.popupOptions.loadedCallback && this.popupOptions.loadedCallback()
    },
    _dressPopup: function(e) {
        const t = $("<a/>", {
            class: "close"
        }).appendTo($(".wizard-header", e));
        $("<i/>", {
            class: "icon-close tiny"
        }).appendTo(t);
        const i = this;
        t.on("click", (function(e) {
            i._closePopup()
        }
        ))
    },
    _dressWizard: function(e) {
        const t = $("<div/>", {
            class: "wizard-pager previous"
        }).prependTo(e)
          , i = $("<div/>", {
            class: "wizard-pager next"
        }).appendTo(e);
        e.data("current", 0),
        $(".modal-wrapper", e).each((function(s, o) {
            const a = s + 1
              , r = $(o);
            $(this).data("index", s);
            const l = $("<div/>", {
                text: a,
                class: "item color-" + s % 3
            })
              , c = l.clone();
            l.appendTo(i).data("index", s),
            c.prependTo(t).data("index", s),
            s >= e.data("current") && c.animate({
                width: "toggle"
            }, 0),
            s <= e.data("current") && l.animate({
                width: "toggle"
            }, 0),
            s !== e.data("current") && r.hide(),
            $("[data-move-wizard]", r).each((function() {
                $(this).on("click", (function(e) {
                    e.preventDefault(),
                    e.stopImmediatePropagation();
                    const t = s + parseInt($(this).data("move-wizard"));
                    (void 0 === $(this).data("validate") || ExecuteFunctionByName($(this).data("validate"), window)) && (n(t),
                    void 0 !== $(this).data("load") && ExecuteFunctionByName($(this).data("load"), window))
                }
                ))
            }
            ))
        }
        ));
        var n = function(t) {
            $(".modal-wrapper:visible", e).hide(),
            $(".modal-wrapper", e).eq(t).show(),
            $(".wizard-pager.previous .item").each((function() {
                $(this).data("index") >= t ? $(this).animate({
                    width: 0
                }, 350) : ($(this).show(),
                $(this).animate({
                    width: 30
                }, 350))
            }
            )),
            $(".wizard-pager.next .item").each((function() {
                $(this).data("index") <= t ? $(this).animate({
                    width: 0
                }, 350) : $(this).animate({
                    width: 30
                }, 350)
            }
            )),
            e.data("current", t)
        }
    },
    _closePopup: function() {
        const e = $(this.dialogId).children();
        e.hideOverlay(),
        e.remove(),
        $("body").css({
            overflow: "auto"
        }),
        this.popupOptions.resetOnLoadAndClose && this._resetPopupModalFooter(),
        this.popupOptions.closedCallback && this.popupOptions.closedCallback()
    },
    _resetPopupModalFooter: function() {
        const e = $(this.dialogId).children();
        $("form", e).length && $("form", e)[0].reset();
        const t = $("footer[data-dialog]", this.wizard);
        $("[class^=state-]", t).hide(),
        $(".state-1", t).show(),
        t.data("state", 1);
        const i = function() {
            let e = t.data("state");
            const i = ".state-" + e;
            e++;
            const n = ".state-" + e;
            t.data("state", e),
            $(i + ":not(" + n + "), " + n + ":not(" + i + ")", t).slideToggle()
        };
        $("a.next-state", t).off("click"),
        $("a.next-state", t).on("click", (function() {
            i()
        }
        )),
        $("select.next-state", t).off("change"),
        $("select.next-state", t).one("change", (function() {
            i()
        }
        ))
    },
    dressTipsy: function() {
        $('[data-type="tipsy"]').each((function() {
            const e = $(this).data("tipsy-css");
            let t;
            t = "" == $(this).data("tipsy-gravity") ? "s" : $(this).data("tipsy-gravity"),
            $(this).tipsy({
                gravity: t,
                html: !0,
                css: e,
                title: function() {
                    return $(this).children(".tipsy-html").html()
                }
            })
        }
        ))
    },
    dressTextArea: function() {
        $("textarea").each((function() {
            $(this).closest("div.element").addClass("multiline")
        }
        ))
    },
    dressAdvancedSearchAutocomplete: function() {
        $('[data-type="autocomplete"]').each((function() {
            let e = "even";
            $(this).autocomplete({
                source: $(this).attr("data-url"),
                select: function(e, t) {
                    let i = $(this).data("id");
                    return void 0 === i || ($(this).val(t.item.label),
                    i = $("#" + i),
                    i.val(t.item.value).trigger("change"),
                    !1)
                }
            }).autocomplete("instance")._renderItem = function(t, i) {
                if ($(t).addClass("legacy-page"),
                i.hasOwnProperty("label") && i.hasOwnProperty("group")) {
                    let e = !1;
                    t.find("lh").each((function(t) {
                        if ($(this).text() == i.group)
                            return e = !0,
                            !1
                    }
                    )),
                    e || t.append('<lh style="font-weight: bold">' + i.group)
                }
                return "even" == e ? (e = "odd",
                $('<li class="odd autocompleteitem"></li>').append("<a>" + i.label + "</a>").appendTo(t)) : (e = "even",
                $('<li class="even autocompleteitem"></li>').append("<a>" + i.label + "</a>").appendTo(t))
            }
        }
        ))
    },
    dressSelect2ForElement: function(e) {
        $(e).hasClass("aspNetDisabled") ? $(e).select2({
            disabled: !0,
            allowClear: !1,
            minimumResultsForSearch: 10,
            width: "element",
            templateResult: formatSelect2,
            templateSelection: formatSelect2
        }) : $(e).select2({
            allowClear: !1,
            minimumResultsForSearch: 10,
            width: "element",
            templateResult: formatSelect2,
            templateSelection: formatSelect2
        })
    },
    dressSelect2: function() {
        $("select.select2").exists() && $("select.select2").each((function() {
            eSuite.dressSelect2ForElement(this)
        }
        ))
    },
    dressFilter: function() {
        $(".mvcFilter").each((function() {
            const e = $(this).data("filter")
              , t = $(this).data("id");
            $(this).find("a.filterItem").click((function(i) {
                i.preventDefault(),
                $("#PostBackSource").val(e),
                $("#" + t).val($(this).data("id")),
                $("#SearchCatalogForm").exists() ? $("#SearchCatalogForm").submit() : $("#ePowerMenu").submit()
            }
            )),
            $(this).find("a.annotation").click((function(i) {
                i.preventDefault(),
                $("#PostBackSource").val(e),
                $("#" + t).val($(this).data("parent")),
                $("#SearchCatalogForm").exists() ? $("#SearchCatalogForm").submit() : $("#ePowerMenu").submit()
            }
            ))
        }
        ))
    },
    dressSortOrder: function() {
        $(".sortorderlink").exists() && ($(".sortorderlink, .sortorderlinks .activesortorder").click((function(e) {
            e.preventDefault(),
            $(".sortorderlinks").toggle(),
            $(".sortorderlink").toggleClass("expanded")
        }
        )),
        $(".sortorders").outOfBoundsClick((function() {
            $(".sortorderlinks").hide(),
            $(".sortorderlink").removeClass("expanded")
        }
        )),
        $(".sortorderlinks a.active").click((function(e) {
            e.preventDefault(),
            $("#PostBackSource").val("SortOrder"),
            $("#SortOrder").val($(this).attr("data-sort-order")),
            $("#SearchCatalogForm").exists() ? $("#SearchCatalogForm").submit() : $("#ePowerMenu").submit()
        }
        )))
    },
    dressFunctionSelector: function() {
        $(".functionSelectorlink").exists() && ($(".functionSelectorlink, .functionSelectorlinks .activefunctionselector").click((function(e) {
            e.preventDefault(),
            $(".functionSelectorlinks").toggle(),
            $(".functionSelectorlink").toggleClass("expanded")
        }
        )),
        $(".functionSelector").outOfBoundsClick((function() {
            $(".functionSelectorlinks").hide(),
            $(".functionSelectorlink").removeClass("expanded")
        }
        )),
        $(".functionSelectorlinks a.active").click((function(e) {
            e.preventDefault(),
            $("#PostBackSource").val("FunctionSelector"),
            $("#FunctionSelector").val($(this).attr("value")),
            document.forms[1].submit()
        }
        )))
    },
    dressPaging: function(e) {
        const t = $("div.js-pager");
        $("#MvcPagingPrevious", t).on("click", (function() {
            $("#PostBackSource").val("Paging"),
            $("#SearchCatalogForm").exists() ? ($("#PageIndex").val(parseInt($("#PageIndex").val()) - 1),
            null != e && (document.forms.SearchCatalogForm.action = e),
            $("#SearchCatalogForm").submit()) : $("#ePowerMenu").exists() && ($("#PageIndex").val(parseInt($("#PageIndex").val()) - 1),
            null != e && (document.forms.ePowerMenu.action = e),
            $("#ePowerMenu").submit())
        }
        )),
        $("#MvcPagingNext", t).on("click", (function() {
            $("#PostBackSource").val("Paging"),
            $("#SearchCatalogForm").exists() ? ($("#PageIndex").val(parseInt($("#PageIndex").val()) + 1),
            null != e && (document.forms.SearchCatalogForm.action = e),
            $("#SearchCatalogForm").submit()) : $("#ePowerMenu").exists() && ($("#PageIndex").val(parseInt($("#PageIndex").val()) + 1),
            null != e && (document.forms.ePowerMenu.action = e),
            $("#ePowerMenu").submit())
        }
        )),
        $("a.js-pager-link", t).each((function() {
            $(this).on("click", (function() {
                $("#PostBackSource").val("Paging"),
                $("#SearchCatalogForm").exists() ? ($("#PageIndex").val($(this).text()),
                null != e && (document.forms.SearchCatalogForm.action = e),
                $("#SearchCatalogForm").submit()) : $("#ePowerMenu").exists() && ($("#PageIndex").val($(this).text()),
                null != e && (document.forms1ePowerMenu.action = e),
                $("#ePowerMenu").submit())
            }
            ))
        }
        ))
    },
    dressViewMore: function() {
        $(".reveilMore").click((function(e) {
            e.preventDefault(),
            $(this).hide();
            const t = $(this).parents($(this).attr("data-scope")).first();
            $(".hiddenMore", t).fadeIn()
        }
        ))
    },
    dressDatePicker: function() {
        $(".datePicker").datepicker({
            showOtherMonths: !0,
            selectOtherMonths: !0,
            minDate: new Date,
            nextText: "",
            prevText: "",
            changeMonth: !0,
            changeYear: !0
        }),
        $(".datePicker").blur((function() {
            eSuite.getDateFromDatePicker(this) || $(this).val("")
        }
        ))
    },
    dressDatePickerWithoutMinDate: function() {
        $(".datePicker").datepicker({
            showOtherMonths: !0,
            selectOtherMonths: !0,
            nextText: "",
            prevText: "",
            changeMonth: !0,
            changeYear: !0
        }),
        $(".datePicker").blur((function() {
            eSuite.getDateFromDatePicker(this) || $(this).val("")
        }
        ))
    },
    dressFlyoutScrollbar: function() {
        $(".flyoutScrollContent").mCustomScrollbar({
            set_height: 300,
            scrollInertia: 0,
            advanced: {
                updateOnContentResize: !0
            }
        })
    },
    dressInputReset: function() {
        $(".resetAble input").keyup((function() {
            "" != $(this).val() ? $(this).parent().addClass("typed") : ($(this).parent().removeClass("typed"),
            0 == $(".mCSB_container ul li").length && $(".emptyText").length > 0 && $(".emptyText").show())
        }
        )),
        $(".resetAble .resetInput").on("click", (function(e) {
            e.preventDefault(),
            $(this).parent().find("input").val(""),
            $(this).parent().find("input").trigger("keyup"),
            $(this).parent().removeClass("typed"),
            0 == $(".mCSB_container ul li").length && $(".emptyText").length > 0 && $(".emptyText").show(),
            $(this).parent().find("input").blur()
        }
        ))
    },
    dressTimestamps: function() {
        $("abbr.timeago").timeago()
    },
    deleteNotification: function(e, t, i, n, s, o) {
        return $.ajax({
            url: formatUrl("PM/Document/DeleteNotification"),
            type: "POST",
            data: {
                relativeId: e,
                bbId: t,
                sectionId: i,
                logUserId: n,
                action: s
            },
            success: function(e) {
                $("#" + o).remove();
                const t = $("#numberOfNotifications").text() - 1;
                0 == t ? ($("#NotificationLi").html('<a href="javascript:;" class="empty"><span></span><i class="small icon-notification"></i></a>'),
                $("#NotificationFlyout").hide()) : $("#numberOfNotifications").html(t)
            }
        }),
        !1
    },
    dismissNotifications: function(e) {
        let t = $("#ePowerPage");
        return t.exists() || (t = $("#ePowerMenu")),
        $.ajax({
            url: formatUrl("PM/Document/DismissNotifications"),
            type: "POST",
            data: {
                relativeId: e
            },
            success: function(e) {
                $("#NotificationLi").html('<a href="javascript:;" class="empty"><span></span><i class="small icon-notification"></i></a>'),
                $(".notification").remove(),
                $("#NotificationFlyout").hide()
            }
        }),
        !1
    },
    dressAttPreview: function() {
        if ($("#embedDocumentContainer").length) {
            const e = $("#embedDocumentContainer").attr("data-url");
            if ("" != e) {
                let t = $(window).outerHeight() - 1 - Math.floor($('header[role="banner"]').outerHeight()) - Math.floor($('footer[role="contentinfo"]').outerHeight()) - Math.floor($(".contentRight .documentInfo").outerHeight()) - 2;
                detectIE() && (t -= 38);
                const i = {
                    height: t + "px"
                };
                PDFObject.embed(e, "#embedDocumentContainer", i)
            } else
                $("#embedDocumentContainer").html("")
        }
    },
    dressSearchTyping: function() {
        $("#main-content .browseList .listContainer").length && $("#main-content .browseList .listSearchBox input").on("keyup", (function() {
            $("#main-content .browseList .listContainer li").css("display", "none"),
            $("#main-content .browseList .listContainer").mCustomScrollbar("scrollTo", "top"),
            $searchValue = $(this).val();
            $('#main-content .browseList .listContainer li:icontains("' + $searchValue + '")').css("display", "block").length || "" === $searchValue ? $(".listContainer .emptyText").hide() : $(".listContainer .emptyText").fadeIn(),
            "" == $searchValue && $("#main-content .browseList .listContainer li").css("display", "block")
        }
        ))
    },
    dressBrowseList: function() {
        const e = $("#main-content .browseList .listContainer");
        e.length && (e.mCustomScrollbar({
            set_height: Math.floor($(window).outerHeight() - 1) - Math.floor($('header[role="banner"]').outerHeight()) - Math.floor($('footer[role="contentinfo"]').outerHeight()) - Math.floor($("#main-content .browseList .listSearchBox").outerHeight()),
            scrollInertia: 0,
            advanced: {
                updateOnContentResize: !0
            }
        }),
        $("#main-content .browseList .listContainer li").length && $(".listContainer .emptyText").hide(),
        $(window).on("resize.browselistScrollbar", (function() {
            $("#main-content .browseList .listContainer").height(Math.floor($(window).outerHeight() - 1) - Math.floor($('header[role="banner"]').outerHeight()) - Math.floor($('footer[role="contentinfo"]').outerHeight()) - Math.floor($("#main-content .browseList .listSearchBox").outerHeight())),
            $("#main-content .browseList .listContainer").mCustomScrollbar("update")
        }
        )))
    },
    dressDocTimeLine: function() {
        if ($("#documentListViewport").length) {
            ShowLoadingImage();
            const e = parseInt($("#timeList li.middle").text());
            $("#documentListViewport").documentTimeline({
                currentYear: e
            }),
            $("#timeline").timelineNavigation({
                currentYear: e,
                target: $("#documentListViewport")
            })
        }
    },
    dressPopup: function() {
        $('[data-trigger="showPopup"]').on("click.showpopup", (function(e) {
            if (e.preventDefault(),
            !("1" == $(this).data("savechanges") && "function" == typeof validateAndSavePage && validateAndSavePage() || $(this).hasClass("disabled")))
                if (null != $(this).attr("data-target-link")) {
                    const e = $(this).attr("data-target-link")
                      , t = $("#" + $(this).attr("data-target"));
                    $.ajax({
                        url: e,
                        type: "GET",
                        cache: !1,
                        success: function(e) {
                            t.show(),
                            t.html(e),
                            t.find(".modal").showOverlay()
                        }
                    })
                } else
                    $("#" + $(this).attr("data-target.modal")).exists() ? $("#" + $(this).attr("data-target") + ".modal").showOverlay() : $("#" + $(this).attr("data-target")).showOverlay()
        }
        )),
        $(".overlay").on("click.cancel", 'a[data-target="cancel"]', (function(e) {
            e.preventDefault(),
            $(this).parents(".overlay").hideOverlay()
        }
        ))
    },
    dressPlaceholders: function() {
        if (jQuery.support.placeholder = !1,
        test = document.createElement("input"),
        "placeholder"in test && (jQuery.support.placeholder = !0),
        !$.support.placeholder) {
            const e = document.activeElement;
            $(":text").focus((function() {
                null != $(this).attr("placeholder") && $(this).val() == $(this).attr("placeholder") && $(this).val("").removeClass("hasPlaceholder")
            }
            )).blur((function() {
                null == $(this).attr("placeholder") || "" != $(this).val() && $(this).val() != $(this).attr("placeholder") || $(this).val($(this).attr("placeholder")).addClass("hasPlaceholder")
            }
            )),
            $(":text").blur(),
            $(e).focus(),
            $("form").submit((function() {
                $(this).find(".hasPlaceholder").each((function() {
                    $(this).val() == $(this).attr("placeholder") && $(this).val("")
                }
                ))
            }
            ))
        }
    },
    dressHeaderSearchMVC: function() {
        if ($("#searchtextMVC").exists()) {
            $("#searchBarTrigger").on("click", (function() {
                $(".searchBarContainer").show("slide", {
                    direction: "right"
                }, 1e3),
                $("#searchBarTrigger").animate({
                    width: "0"
                }, 1e3, (function() {
                    $(this).css({
                        display: "none"
                    });
                    const e = $("header:first").width()
                      , t = $("#breadcrumbs ul li:last");
                    let i = 0;
                    t.siblings().each((function() {
                        i += $(this).width()
                    }
                    ));
                    let n = $("#modulesNav").width() + i + $("#userBadgeContainer").width() + 10;
                    $("body").hasClass("ie7") && (n = n - $("#userBadgeContainer").width() + $("#userBadge").width() + $(".searchBarContainer").width() + $("#searchBarTrigger").width() + 20),
                    t.width(e - n),
                    $("#searchtextMVC").focus()
                }
                ))
            }
            ));
            $("#searchtextMVC").autocomplete({
                source: function(e, t) {
                    if (eSuite.SearchWhoIsWhoAutocomplete.enabled) {
                        const t = $("#searchtextMVC").attr("data-url") + "GetAutoCompleteData";
                        $.ajax({
                            type: "get",
                            url: t,
                            data: {
                                username: removeInvalidCharacters(e.term)
                            },
                            success: function(e) {
                                $("#search-autocomplete").html(e)
                            }
                        })
                    }
                }
            }),
            $(".searchBarContainer .ui-autocomplete").width($(".searchBarContainer .ui-autocomplete").width() + 10),
            $(document).click((function(e) {
                $(e.target).hasClass("js-search-autocomplete") || $("#js-search-autocomplete").removeClass("search-autocomplete--open")
            }
            ))
        }
    },
    dressHeaderSearch: function() {
        if ($("#searchtext").exists()) {
            $(".searchBarTrigger").on("click", (function() {
                $(".searchBarContainer").show("slide", {
                    direction: "right"
                }, 1e3),
                $(".searchBarTrigger").animate({
                    width: "0"
                }, 1e3, (function() {
                    $(this).css({
                        display: "none"
                    });
                    const e = $("header:first").width()
                      , t = $("#breadcrumbs ul li:last");
                    let i = 0;
                    t.siblings().each((function() {
                        i += $(this).width()
                    }
                    ));
                    let n = $("#modulesNav").width() + i + $("#userBadgeContainer").width() + 10;
                    $("body").hasClass("ie7") && (n = n - $("#userBadgeContainer").width() + $("#userBadge").width() + $(".searchBarContainer").width() + $(".searchBarTrigger").width() + 20),
                    t.width(e - n),
                    $("#searchtext").focus()
                }
                ))
            }
            ));
            $("#searchtext").autocomplete({
                source: function(e, t) {
                    eSuite.SearchWhoIsWhoAutocomplete.enabled && $.ajax({
                        type: "GET",
                        url: "PA/WhoIsWho/GetAutoCompleteData",
                        data: {
                            username: removeInvalidCharacters(e.term)
                        },
                        success: function(e) {
                            $("#search-autocomplete").html(e)
                        }
                    })
                }
            }),
            $(".searchBarContainer .ui-autocomplete").width($(".searchBarContainer .ui-autocomplete").width() + 10)
        }
    },
    dressTodoNotificationHeader: function(e) {
        if ($(".notifications").exists()) {
            const e = $("#totalNumberOfTodos").val();
            $(".totalNumberOfTodos").append(e),
            $(".todoNotificationTrigger").click((function(e) {
                e.preventDefault();
                $("#todo-notification-header").load("Dashboard/GetHeaderTodosByPerson")
            }
            ))
        }
    },
    dressFileUploadFields() {
        $("#SaveUploadedPicture").click((e=>{
            e.preventDefault(),
            e.stopPropagation();
            const t = $("#ProfilePictureUpload").data("uploadData");
            t && t.submit()
        }
        )),
        $("#ProfilePictureUpload").fileupload({
            url: formatUrl("Image/SavePersonImage"),
            dataType: "json",
            pasteZone: null,
            dropZone: $(".modal .profile-picture"),
            autoUpload: !1,
            add(e, t) {
                $("#ProfilePictureUpload").data("uploadData", t);
                const i = new FileReader;
                e.preventDefault(),
                i.addEventListener("load", (()=>{
                    $("#avatar").attr("src", i.result)
                }
                ), !1),
                i.readAsDataURL(t.files[0])
            },
            done() {
                location.reload()
            }
        })
    },
    dressCollapsibles: function() {
        $('[data-rel="collapsibleContainer"]').each((function() {
            const e = $(this)
              , t = e.find(".collapsibleSwitch").first()
              , i = e.find(".collapsibleContent").first()
              , n = function() {
                i.is(":visible") ? t.addClass("collapsibleContentVisible").removeClass("collapsibleContentHidden") : t.removeClass("collapsibleContentVisible").addClass("collapsibleContentHidden")
            };
            t.hasClass("collapsibleContentVisible") || t.hasClass("collapsibleContentHidden") || i.hide(),
            n(),
            t.on("click", (function(e) {
                e.preventDefault(),
                i.slideToggle("fast", (function() {
                    n()
                }
                ))
            }
            ))
        }
        ))
    },
    dressFormValidation: function() {
        const e = $('[data-validation="enabled"]')
          , t = {
            rules: {},
            messages: {},
            errorPlacement: function(e, t) {
                $(t).siblings(".errorLabel").length <= 0 && t.after($('<div class="errorLabel" />').append(e))
            },
            highlight: function(e) {
                $(e).siblings(".errorLabel").show(),
                $(e).siblings(".requiredLabel").hide()
            },
            unhighlight: function(e) {
                $(e).siblings(".errorLabel").hide(),
                $(e).siblings(".requiredLabel").show()
            },
            submitHandler: function() {
                eSuite.toggleLoadingIndicator(!0),
                e.trigger("validateSuccess"),
                $.ajax({
                    url: e.attr("action"),
                    type: e.attr("method"),
                    data: e.serialize(),
                    success: function(t) {
                        eSuite.toggleLoadingIndicator(!1),
                        1 == t.status ? (e.trigger("statusSuccess"),
                        e.showMessage("success", e.data("message-success"), !0),
                        e.find(":input").not(":button, :submit, :reset, :hidden").val("").removeAttr("checked").removeAttr("selected")) : (e.trigger("statusFailed"),
                        e.showMessage("error", e.data("message-error"), !0))
                    }
                })
            },
            invalidHandler: function() {
                e.trigger("validateFailed"),
                e.showMessage("error", e.data("message-error"), !0)
            }
        };
        e.find("input, textarea").each((function() {
            const i = {}
              , n = {};
            "required" == jQuery(this).attr("required") && (i.required = !0,
            n.required = e.data("message-required")),
            jQuery(this).attr("data-equalto") && (i.equalTo = "#" + jQuery(this).attr("data-equalto"),
            n.equalTo = e.data("message-equal")),
            t.rules[jQuery(this).attr("name")] = i,
            t.messages[jQuery(this).attr("name")] = n
        }
        )),
        e.validate(t),
        $.validator.methods.date = function(e, t) {
            if (this.optional(t))
                return !0;
            try {
                return null != $.datepicker.parseDate(eSuite.dataFormat.datepicker.dateFormat, e)
            } catch (e) {
                return !1
            }
        }
        ,
        $.validator.methods.number = function(e, t) {
            if (this.optional(t))
                return !0;
            const i = $(t).attr("data-sign");
            let n = e;
            return i && (n = n.substr(i.length)),
            eSuite.dataFormat.getNumericRegex().test(n)
        }
        ,
        $.validator.methods.required = function(e, t, i) {
            if (!this.depend(i, t))
                return "dependency-mismatch";
            if ("select" === t.nodeName.toLowerCase()) {
                const e = $(t).val();
                return e && e.length > 0
            }
            if (this.checkable(t))
                return this.getLength(e, t) > 0;
            const n = $(t).attr("data-sign");
            return n && (e = e.substr(n.length)),
            $.trim(e).length > 0
        }
    },
    dressEllipsingBreadcrumbs: function() {
        const e = $("#breadcrumbs ul li:last");
        let t = 0;
        e.siblings().each((function() {
            t += $(this).width()
        }
        ));
        let i = $("#modulesNav").width() + t + $("#userBadgeContainer").width() + 10;
        $("body").hasClass("ie7") && (i = i - $("#userBadgeContainer").width() + $("#userBadge").width() + $(".searchBarContainer").width() + $("#searchBarTrigger").width() + 20);
        const n = $("header:first").width();
        e.width(n - i),
        $(window).resize((function() {
            const e = $("header:first").width();
            let i = $("#modulesNav").width() + t + $("#userBadgeContainer").width() + 10;
            $("body").hasClass("ie7") && (i = i - $("#userBadgeContainer").width() + $("#userBadge").width() + $(".searchBarContainer").width() + $("#searchBarTrigger").width() + 20);
            $("#breadcrumbs ul li:last").width(e - i)
        }
        ))
    },
    dressCustomScrollbar: function() {
        $("#documentListViewport").length && ($("#documentListViewport").mCustomScrollbar({
            set_height: Math.max(250, $(window).height() - $("#timeline").get(0).getBoundingClientRect().bottom - 95),
            scrollInertia: 0,
            advanced: {
                updateOnContentResize: !0
            },
            scrollButtons: {
                enable: !0
            }
        }),
        $(window).resize((function(e) {
            $("#documentListViewport").css({
                height: Math.max(250, $(window).height() - $("#timeline").get(0).getBoundingClientRect().bottom - 95)
            }),
            $("#documentListViewport").mCustomScrollbar("update")
        }
        )),
        $("#documentListViewport").mCustomScrollbar("update")),
        $(".documentValidationBlock").length && ($(".documentValidationBlock").mCustomScrollbar({
            set_height: Math.max(250, $(window).height() - $(".documenttemplateSteps").get(0).getBoundingClientRect().bottom - $(".documentTemplateStepActionBlock").outerHeight() - 200),
            scrollInertia: 0,
            advanced: {
                updateOnContentResize: !0
            },
            scrollButtons: {
                enable: !0
            }
        }),
        $(window).resize((function(e) {
            $(".documentValidationBlock").css({
                height: Math.max(250, $(window).height() - $(".documenttemplateSteps").get(0).getBoundingClientRect().bottom - $(".documentTemplateStepActionBlock").outerHeight() - 200)
            }),
            $(".documentValidationBlock").mCustomScrollbar("update")
        }
        )),
        $(".documentValidationBlock").mCustomScrollbar("update")),
        $(".popupContent").length && $(".popupContent").mCustomScrollbar({
            set_height: 500,
            scrollInertia: 0,
            advanced: {
                updateOnContentResize: !0
            },
            scrollButtons: {
                enable: !0
            }
        })
    },
    dressBreadcrumb: function() {
        $("#breadcrumb").exists() && ($("#detailcontainer").css("padding-top", "66px"),
        $(".error").css("margin-top", "66px"),
        $(".error").css("margin-bottom", "-50px"),
        $("#training_approvalconfigurationoverview_searchresult").css("padding-top", "66px"),
        $("#jobcompetenceprofiler_competencedictionaryperiods_searchcontainer").css("padding-top", "66px"),
        $(".detailbox").each((function() {
            $(this).hasClass("removepadding") || $(this).css("padding-top", "66px")
        }
        )))
    },
    formatUrl: function(e) {
        return "undefined" != typeof baseUrl ? ("/" == e.substring(0, 1) && (e = e.substring(1)),
        baseUrl + e) : e
    },
    getDateFromDatePicker: function(e) {
        e = $(e);
        const t = eSuite.dataFormat.datepicker.dateFormat
          , i = e.val();
        try {
            return $.datepicker.parseDate(t, i)
        } catch (e) {
            return null
        }
    },
    duplicateGridPaginationOnTop: function(e) {
        const t = $("#" + e)
          , i = t.data("kendoGrid");
        t.find(".k-pager-wrap").attr("id");
        let n;
        i.topPager || (n = $("<div/>", {
            id: e + "_pagerTop",
            class: "k-pager-wrap k-grid-pager pagerTop"
        }).insertBefore(t.find("table:first")).css("border-bottom", "1px solid #e1e8eb"),
        i.topPager = new kendo.ui.Pager(n,$.extend({}, i.options.pageable, {
            dataSource: i.dataSource
        })),
        i.options.pagerId = e + "_pagerTop",
        i.topPager.refresh())
    },
    htmlEncode: function(e) {
        return $("<div/>").text(e).html()
    },
    htmlEncodeDataInputs: function() {
        $("[data-encode-input]").each((function(e, t) {
            $(this).val(eSuite.htmlEncode($(this).val()))
        }
        ))
    },
    _parseTimeDuration: function(e) {
        const t = {
            Valid: !1,
            Value: null
        };
        if (0 === (e = e.replace("-", "")).length)
            return t.Valid = !0,
            t;
        const i = e.indexOf(":");
        let n, s, o = !1, a = !1;
        if (-1 === i || i === e.length - 1)
            n = i === e.length - 1 ? e.substr(0, e.length - 1) : e,
            o = isNaN(n),
            o ? t.Valid = !1 : (t.Valid = !0,
            t.Value = n + ":00");
        else {
            n = e.substr(0, i),
            s = e.substr(e.length - (e.length - i - 1)),
            a = isNaN(s),
            o = isNaN(n);
            const r = !a && s < 60
              , l = s.length <= 2;
            a && o || !r || !l ? t.Valid = !1 : (1 === s.length && s < 6 && (s += "0"),
            t.Value = n + ":" + s,
            t.Valid = !0)
        }
        return t
    },
    fixIE: function() {
        const e = detectIE();
        7 !== e && 9 !== e || $("button[formaction]").click((function(e) {
            const t = $(this).attr("formaction")
              , i = $(this).attr("formmethod")
              , n = $(this).attr("formenctype");
            if ($("form").exists()) {
                const e = $("form")[0];
                null != e && (e.action = t,
                e.method = i,
                e.enctype = n)
            }
        }
        ))
    },
    dressAddExpenseDropdownButton: function() {
        $(".dropdown-button-container.js-btn-dropdown").click((function() {
            $(this).find(".js-dropdown-button-items").addClass("show")
        }
        )),
        window.onclick = function(e) {
            if (!$(e.target).hasClass("js-btn-dropdown-click-area")) {
                const e = document.getElementsByClassName("js-dropdown-button-items");
                let t;
                for (t = 0; t < e.length; t++) {
                    const i = e[t];
                    i.classList.contains("show") && i.classList.remove("show")
                }
            }
        }
    },
    setupAjaxPostsToAddAntiForgeryToken: function() {
        let e = $("#AjaxAntiForgeryToken");
        e.exists() || (e = $("#ePowerMenu"));
        let t = $('input[name="__RequestVerificationToken"]', e).val();
        t && 0 !== t.length || (t = $("[name=__RequestVerificationToken]").val());
        const i = new RegExp("^(?:[a-z]+:)?//","i");
        $(document).ajaxSend((function(e, n, s) {
            "POST" !== s.type && "PUT" !== s.type && "DELETE" !== s.type || s.hasContent && void 0 !== t && !i.test(s.url) && n.setRequestHeader("__RequestVerificationToken", encodeURIComponent(t))
        }
        ))
    },
    hoursAndMinutesOnChange: function(e) {
        const t = this.value();
        eSuite.hoursAndMinutesRegexRule.test(t) ? e.sender.element.parent().removeClass("validation-error") : e.sender.element.parent().addClass("validation-error")
    },
    hoursAndMinutesIsValid: function(e, t) {
        const i = eSuite.hoursAndMinutesRegexRule.test(e);
        return i ? t.removeClass("validation-error") : t.addClass("validation-error"),
        i
    }
};
function formatUrl(e) {
    return eSuite.formatUrl(e)
}
function searchWhoIsWho() {
    let e;
    eSuite.SearchWhoIsWhoAutocomplete.enabled = !1,
    e = $("#searchtext").exists() ? "PA/WhoIsWho/Index/" + removeInvalidCharacters(document.getElementById("searchtext").value) : $("#searchtextMVC").attr("data-url") + "Index/" + removeInvalidCharacters(document.getElementById("searchtextMVC").value),
    window.location.href = e
}
function EnterKeyDownForWhoIsWho(e) {
    13 == (e || window.event).keyCode && ($("form").bind("keydown", (function(e) {
        return !1
    }
    )),
    $("form").bind("keypress", (function(e) {
        return !1
    }
    )),
    $("form").bind("keyup", (function(e) {
        return !1
    }
    )),
    searchWhoIsWho())
}
function EnterKeyDownForDefaultSearch(e) {
    const t = e || window.event;
    13 == t.keyCode && (t.preventDefault(),
    PostbackDefaultSearch())
}
function PostbackDefaultSearch() {
    $("#PostBackSource").val("DefaultSearch"),
    $("#searchbox").val(eSuite.htmlEncode($("#searchbox").val())),
    $("#SearchCatalogForm").exists() ? $("#SearchCatalogForm").submit() : $("#ePowerMenu").submit()
}
function PostbackAdvancedSearch() {
    $("#PostBackSource").val("AdvancedSearch")
}
function ShowLoadingImage() {
    if ($("#loadimg").exists()) {
        const e = $("#loadimg");
        let t;
        e.hide(),
        $(document).ajaxStart((function() {
            t && clearTimeout(t),
            t = setTimeout((function() {
                e.show()
            }
            ), 1e3)
        }
        )),
        $(document).ajaxStop((function() {
            clearTimeout(t),
            e.hide()
        }
        ))
    }
}
function SwitchCompetences(e) {
    const t = $(e).closest("#jobdescriptioncompetences");
    t.exists() && (ShowLoadingImage(),
    t.load($(e).attr("data-url")))
}
function ShowAllCompetenceLevels(e) {
    const t = $(e).closest("li");
    t.exists() && t.addClass("showAllLevels")
}
function ShowRequiredCompetenceLevel(e) {
    const t = $(e).closest("li");
    t.exists() && t.removeClass("showAllLevels")
}
function ShowJobDescription(e, t) {
    $(".js-print").removeClass("hidden"),
    $(".js-export").removeClass("hidden"),
    $(".js-view-jobdescription").addClass("hidden");
    const i = $(".banner__left", ".banner");
    if ($(".banner__logo, .back-button", i).hide(),
    $(".js-back-jobdescription", i).exists())
        $(".js-back-jobdescription", i).show();
    else {
        const e = $('<div class="back-button js-back-jobdescription"><a href="#" class="back-button__cta js-back-button"><i class="epoi epoi-arrow-left-barred" aria-hidden="true"></i></a><div class="back-button__content js-banner__content"><h1 class="back-button__title js-banner__initial-title">' + t + "</h1></div></div>");
        $(".js-back-button", e).on("click", (function(e) {
            e.preventDefault(),
            HideJobDescription()
        }
        )),
        i.append(e)
    }
    $(".jobdescriptionhide").each((function() {
        $(this).hide()
    }
    )),
    $("#jobdescription").show(),
    $("#jobdescription").children("div").load(e),
    $(".overviewbuttonbar").hide()
}
function HideJobDescription() {
    $(".js-print").addClass("hidden"),
    $(".js-export").addClass("hidden"),
    $(".js-view-jobdescription").removeClass("hidden");
    const e = $(".banner__left", ".banner");
    $(".banner__logo, .back-button", e).show(),
    $(".js-back-jobdescription", e).hide(),
    $("#jobdescription").hide(),
    $("#jobdescription").children("div").html(""),
    $(".jobdescriptionhide").each((function() {
        $(this).show()
    }
    )),
    $(".overviewbuttonbar").show()
}
function MvcCompetenceToggleLevels(e, t, i) {
    const n = $(e).parent();
    if (n.exists()) {
        n.removeClass(t),
        n.addClass(i);
        const e = $(".modal-header").outerHeight()
          , s = $(".modal-wrapper").outerHeight()
          , o = $(".modal.visible").outerHeight() - $(".modal.visible").css("padding-top").replace("px", "") - $(".modal.visible").css("padding-bottom").replace("px", "");
        $(".modal-content").height((s > o ? o : s) - e - $(".modal.visible").css("padding-bottom").replace("px", ""))
    }
}
function ChangePassword() {
    let e = !0;
    return "" === $("#CurrentPassword").val() ? ($("#PasswordCurrentRequired").show(),
    e = !1) : $("#PasswordCurrentRequired").hide(),
    "" === $("#NewPassword").val() ? ($("#PasswordNewRequired").show(),
    e = !1) : $("#PasswordNewRequired").hide(),
    "" === $("#ConfirmNewPassword").val() ? ($("#PasswordConfirmRequired").show(),
    e = !1) : $("#PasswordConfirmRequired").hide(),
    e && $("#CurrentPassword").val() === $("#NewPassword").val() ? ($("#PasswordCurrentSameAsNew").show(),
    e = !1) : $("#PasswordCurrentSameAsNew").hide(),
    e && $("#ConfirmNewPassword").val() !== $("#NewPassword").val() ? ($("#PasswordNewNotSameAsConfirm").show(),
    e = !1) : $("#PasswordNewNotSameAsConfirm").hide(),
    e && ($("#SettingsPassword .error").hide(),
    $.ajax({
        url: formatUrl("Account/ChangePassword"),
        type: "POST",
        data: {
            CurrentPassword: $("#CurrentPassword").val(),
            NewPassword: $("#NewPassword").val()
        },
        success: function() {
            $("#PasswordNoChange").hide();
            const e = document.querySelector('[data-modal-target="password"]');
            e.classList.remove("modal--is-open"),
            $("input[type=password]", e).val("")
        },
        error: function() {
            $("#PasswordNoChange").show()
        }
    })),
    !1
}
function ResetChangePasswordModal() {
    $("#CurrentPassword").val(""),
    $("#NewPassword").val(""),
    $("#ConfirmNewPassword").val(""),
    $("#PasswordCurrentRequired").hide(),
    $("#PasswordNewRequired").hide(),
    $("#PasswordConfirmRequired").hide(),
    $("#PasswordCurrentSameAsNew").hide(),
    $("#PasswordNewNotSameAsConfirm").hide(),
    $("#PasswordNoChange").hide()
}
eSuite.pageUrl = {
    errorGeneric: "Errors",
    errorInsufficientRights: "Errors?error=InsufficientRights"
},
eSuite.userBadgeFlyout = {
    $DOMContainer: null,
    $flyout: null,
    $trigger: null,
    init: function() {
        eSuite.userBadgeFlyout.$DOMContainer = $("#userBadgeContainer"),
        eSuite.userBadgeFlyout.$DOMContainer.length > 0 && (eSuite.userBadgeFlyout.$flyout = eSuite.userBadgeFlyout.$DOMContainer.find("#userBadgeSettingsFlyout"),
        eSuite.userBadgeFlyout.$trigger = eSuite.userBadgeFlyout.$DOMContainer.find('[data-trigger="userBadgeFlyoutToggle"]'),
        eSuite.userBadgeFlyout.dressFlyoutToggle(),
        eSuite.userBadgeFlyout.dressOutOfBoundsClick())
    },
    dressFlyoutToggle: function() {
        eSuite.userBadgeFlyout.$trigger.on("click", (function(e) {
            e.preventDefault(),
            eSuite.userBadgeFlyout.$flyout.toggle()
        }
        ))
    },
    dressOutOfBoundsClick: function() {
        $().add(eSuite.userBadgeFlyout.$flyout).add(eSuite.userBadgeFlyout.$trigger).outOfBoundsClick((function() {
            eSuite.userBadgeFlyout.$flyout.hide()
        }
        ))
    }
},
eSuite.userTeamFlyout = {
    $DOMContainer: null,
    $flyout: null,
    $trigger: null,
    init: function() {
        eSuite.userTeamFlyout.$DOMContainer = $(".searchBarContainer"),
        eSuite.userTeamFlyout.$DOMContainer.length > 0 && (eSuite.userTeamFlyout.$flyout = eSuite.userTeamFlyout.$DOMContainer.find(".userTeamFlyout"),
        eSuite.userTeamFlyout.$trigger = eSuite.userTeamFlyout.$DOMContainer.find('[data-trigger="userTeamFlyoutToggle"]'),
        eSuite.userTeamFlyout.dressFlyoutToggle(),
        eSuite.userTeamFlyout.dressOutOfBoundsClick())
    },
    dressFlyoutToggle: function() {
        eSuite.userTeamFlyout.$trigger.on("click", (function(e) {
            e.preventDefault(),
            eSuite.userTeamFlyout.$flyout.toggle()
        }
        ))
    },
    dressOutOfBoundsClick: function() {
        $().add(eSuite.userTeamFlyout.$flyout).add(eSuite.userTeamFlyout.$trigger).outOfBoundsClick((function() {
            eSuite.userTeamFlyout.$flyout.hide()
        }
        ))
    }
},
$(document).ready((function(e) {
    eSuite.init()
}
)),
$.expr[":"].icontains = function(e, t, i, n) {
    return (e.textContent || e.innerText || jQuery(e).text() || "").toLowerCase().indexOf(i[3].toLowerCase()) >= 0
}
,
$.fn.extend({
    outOfBoundsClick: function(e) {
        const t = $(this);
        let i = !1;
        t.bind({
            mouseenter: function(e) {
                i = !0
            },
            mouseleave: function(e) {
                i = !1
            }
        }),
        $("body").on("click", (function(n) {
            const s = $(n.target);
            !i && t.has(s).length <= 0 && e()
        }
        ))
    },
    showMessage: function(e, t, i) {
        const n = $(this)
          , s = $('<a class="close" href="javascript:;"><i class="icon-close"></i></a>')
          , o = $('<div class="message ' + e + '"><p>' + t + "</p></div>").append(s);
        i && n.children(".message").remove(),
        n.prepend(o),
        s.on("click", (function(e) {
            e.preventDefault(),
            o.slideToggle("fast", (function() {
                o.remove()
            }
            ))
        }
        )),
        s.focus()
    },
    showOverlay: function() {
        const e = $(this).not("script");
        e.css({
            opacity: 0,
            display: "block"
        }),
        e.css({
            "margin-left": "-" + e.width() / 2 + "px",
            "margin-top": "-" + e.height() / 2 + "px"
        }),
        e.css({
            "margin-left": "-" + e.width() / 2 + "px",
            "margin-top": "-" + e.height() / 2 + "px"
        }),
        e.css({
            opacity: 1,
            display: "none"
        }),
        e.hasClass("noResize") && e.css("width", e.width() + "px"),
        $("section.overlay").hide(),
        $("#overlayBg").fadeIn("fast"),
        e.fadeIn("fast", (function() {
            if (e.hasClass("notClosable") || e.data("initiated") || e.find('a[data-trigger="closeOverlay"]').on("click", (function(t) {
                t.preventDefault(),
                e.hideOverlay()
            }
            )),
            e.addClass("visible"),
            e.data("initiated", !0),
            $(".modal-content", e).exists() && $(".modal-wrapper", e).exists()) {
                const t = $(".modal-header", e).outerHeight() || $("header", e).outerHeight() || 0
                  , i = $(".modal-footer", e).outerHeight() || $("footer", e).outerHeight() || 0
                  , n = $(".modal-wrapper", e).outerHeight()
                  , s = $(".modal.visible").outerHeight() - $(".modal.visible").css("padding-top").replace("px", "") - $(".modal.visible").css("padding-bottom").replace("px", "");
                $(".modal-content", e).height((n > s ? s : n) - t - i - $(".modal.visible").css("padding-bottom").replace("px", "")),
                $(".modal-content", e).mCustomScrollbar({
                    advanced: {
                        updateOnContentResize: !0
                    }
                })
            }
        }
        ))
    },
    hideOverlay: function() {
        const e = $(this);
        $("#overlayBg").fadeOut("fast"),
        e.fadeOut("fast"),
        e.removeClass("visible")
    }
}),
jQuery.fn.exists = function() {
    return jQuery(this).length > 0
}
,
function(e, t) {
    e.DocumentTimeline = function(t, i) {
        this.$container = e(i),
        this._init(t)
    }
    ,
    e.DocumentTimeline.defaults = {
        numberCols: 3,
        collapsible: !0,
        currentYear: (new Date).getFullYear()
    },
    e.DocumentTimeline.prototype = {
        _init: function(t) {
            this.options = e.extend(!0, {}, e.DocumentTimeline.defaults, t || {}),
            this.fillDataYear(this.options.currentYear, null)
        },
        _setColsWidth: function(e) {
            this._calculateWidthPercentage();
            const t = this._percentageString(this.options.widthPercentage);
            this.$headers.css("width", t)
        },
        _setListColsWidth: function(e) {
            this._percentageString(this.options.widthPercentage),
            this._percentageString(this.options.widthPercentage * this.options.numberCols - 1)
        },
        _dressList: function(t) {
            for (i = 0; i < t.length; i++) {
                const n = e(t).find(".documentStatusContainer .documentStatusBar");
                for (i = 0; i < n.length; i++)
                    this._setListColsWidth(e(n[i])),
                    this._placeBlocks(e(n[i]))
            }
            for (i = 0; i < t.length; i++)
                this.options.collapsible && this.setCollapsible(e(t[i]))
        },
        _calculateWidthPercentage: function() {
            this.options.widthPercentage = Math.floor(100 / this.options.numberCols)
        },
        _placeBlocks: function(t) {
            const i = this;
            t.find(".documentStatusBarFiller").length && t.find(".documentStatusBarFiller").each((function() {
                const t = e(this)
                  , n = t.attr("data-col")
                  , s = n - 1 >= i.options.numberCols ? i.options.numberCols - 1 : n - 1;
                i._percentageString(i.options.widthPercentage * s);
                let o = i._percentageString(i.options.widthPercentage * s + i.options.widthPercentage);
                i.options.widthPercentage * s + i.options.widthPercentage > 95 && (o = "100%"),
                (isNaN(i.options.widthPercentage * s + i.options.widthPercentage) || i.options.widthPercentage * s + i.options.widthPercentage < 3) && t.addClass("noPoint"),
                t.css("width", o)
            }
            ))
        },
        _percentageString: function(e) {
            return e + "%"
        },
        setCollapsible: function(t) {
            const i = t.find("li li:has(ul) .collapsible .profileRef");
            i.length && i.each((function() {
                const t = e(this);
                e("<a>", {
                    href: "javascript:;",
                    text: "",
                    class: "collapser",
                    click: function(i) {
                        i.preventDefault(),
                        t.closest("li").children("ul").children("li").slideToggle((function() {
                            e("#documentListViewport").mCustomScrollbar("update")
                        }
                        )),
                        e(this).toggleClass("open")
                    }
                }).appendTo(t)
            }
            ))
        },
        fillDataYear: function(i, n) {
            e.ajax({
                type: "GET",
                url: "GetDocumentsByYear",
                cache: !1,
                data: {
                    year: i
                },
                dataType: "json",
                success: e.proxy((function(i) {
                    list = i.DocumentList,
                    steps = i.Steps,
                    listFR = i.DocumentListFR,
                    listPR = i.DocumentListPR,
                    null != i.Steps && (this.options.numberCols = i.Steps.length),
                    this._calculateWidthPercentage();
                    const s = this._percentageString(this.options.widthPercentage);
                    if (list != t) {
                        for (var o in e("#documentListContainerHeader div.h3Container").remove(),
                        e("#documentListContainerHeader").append('<div class="h3Container"></div>'),
                        i.StepNames)
                            e("#documentListContainerHeader div.h3Container").append('<h3 style="width:' + s + ';">' + i.StepNames[o] + "</h3>");
                        e("div.noresult").hide(),
                        e("#documentListContainerHeader").show(),
                        e("#documentListContainer").show();
                        var a = e("<div>", {
                            class: "documentList"
                        });
                        (r = e("<ul />", {
                            class: "list"
                        })).append(this._getHTMLObjectFromObject(list, 0)),
                        a.append(r),
                        e("#documentListContainer").append(a),
                        this._dressList(r)
                    } else {
                        if (null !== listFR && 0 !== listFR.length || null !== listPR && 0 !== listPR.length)
                            if (e("div.noresult").hide(),
                            listFR.length > 0)
                                for (var o in e("#documentListContainerHeaderFR div.h3Container").remove(),
                                e("#documentListContainerHeaderFR").append('<div class="h3Container"></div>'),
                                i.StepNames)
                                    e("#documentListContainerHeaderFR div.h3Container").append('<h3 style="width:' + s + ';">' + i.StepNames[o] + "</h3>");
                            else
                                for (var o in e("#documentListContainerHeaderPR div.h3Container").remove(),
                                e("#documentListContainerHeaderPR").append('<div class="h3Container"></div>'),
                                i.StepNames)
                                    e("#documentListContainerHeaderPR div.h3Container").append('<h3 style="width:' + s + ';">' + i.StepNames[o] + "</h3>");
                        else
                            e("div.noresult").show();
                        e("#documentListContainerHeader").hide(),
                        e("#documentListContainer").hide()
                    }
                    if (null === listFR || 0 === listFR.length)
                        e("#documentListContainerHeaderFR").hide(),
                        e("#documentListContainerFR").hide();
                    else {
                        e("#documentListContainerHeaderFR").show(),
                        e("#documentListContainerFR").show(),
                        e("#documentListContainerHeaderFR h2").html(i.FunctionalReviewerRole);
                        a = e("<div>", {
                            class: "documentList"
                        });
                        (r = e("<ul />", {
                            class: "list"
                        })).append(this._getHTMLObjectFromObjects(listFR)),
                        a.append(r),
                        e("#documentListContainerFR").append(a),
                        this._dressList(r)
                    }
                    if (null === listPR || 0 === listPR.length)
                        e("#documentListContainerHeaderPR").hide(),
                        e("#documentListContainerPR").hide();
                    else {
                        e("#documentListContainerHeaderPR").show(),
                        e("#documentListContainerPR").show(),
                        e("#documentListContainerHeaderPR h2").html(i.ProjectReviewerRole);
                        var r;
                        a = e("<div>", {
                            class: "documentList"
                        });
                        (r = e("<ul />", {
                            class: "list"
                        })).append(this._getHTMLObjectFromObjects(listPR)),
                        a.append(r),
                        e("#documentListContainerPR").append(a),
                        this._dressList(r)
                    }
                    this.$lists = e.extend(!0, this.$lists, this.$container.find(".documentList")),
                    this.$headers = this.$container.find("#documentListContainerHeader .h3Container h3"),
                    this.$blocks = this.$container.find(".documentList .documentStatusContainer .statusBlock"),
                    this.$statusBars = this.$container.find(".documentList .documentStatusContainer .documentStatusBar"),
                    this._setColsWidth(),
                    this._dressList(this.$lists),
                    null != n && n._enableButtons(),
                    e("#documentListViewport").mCustomScrollbar("update")
                }
                ), this)
            })
        },
        _getHTMLObjectFromObject: function(i, n) {
            const s = e("<li />", n > 1 ? {
                class: "collapsed"
            } : {});
            if (0 == i.Documents.length) {
                var o = e("<div />", {
                    class: i.HasChildren ? "liContainer collapsible" : "liContainer"
                })
                  , a = (c > 0 ? "<div>" : '<p class="image"><img src="' + i.ProfilePicture + '" alt="ProfilePicture" ' + (0 == n ? 'class="image-avatar js-avatar"' : 'class="image-avatar"') + "/></p><div>" + i.Person) + "</div><div><span>&nbsp;</span></div>"
                  , r = e("<div />", {
                    class: "profileRef",
                    html: a
                })
                  , l = e("<div />", {
                    class: "documentStatusContainer",
                    html: '<div class="documentStatusBar"><div class="documentStatusBarFiller"></div></div><div class="statusBlock"></div>'
                });
                s.append(o.append(r).append(l))
            } else
                for (var c in i.Documents) {
                    if (i.Documents[c].ShowCreateLink) {
                        o = e("<div />", {
                            class: i.HasChildren && 0 == c ? "liContainer collapsible" : "liContainer"
                        }),
                        a = (c > 0 ? "<div>" : '<span class="name" title="' + i.Person + '"><p class="image"><img src="' + i.ProfilePicture + '" alt="ProfilePicture" ' + (0 == n ? 'class="image-avatar js-avatar"' : 'class="image-avatar"') + "/></p><div>" + i.Person) + "</div></span><div><span></span></div>",
                        r = e("<div />", {
                            class: "profileRef",
                            html: a
                        });
                        var u = '<a class="createdocument" title="' + i.Documents[c].Text + '" onclick="PostAntiforgeryLink(\'' + i.Documents[c].Link + "');\"><span>" + i.Documents[c].Text + "</span></a>";
                        l = e("<div />", {
                            class: "documentStatusContainer",
                            html: '<div class="documentStatusBar"><div class="documentStatusBarFiller ' + i.Documents[c].Category + '" data-col="' + this.getProgress(i.Documents[c].Progress) + '"><a href="' + i.Documents[c].Link + '">' + u + "</a></div></div>"
                        })
                    } else
                        o = e("<div />", {
                            class: i.HasChildren && 0 == c ? "liContainer collapsible" : "liContainer"
                        }),
                        a = (c > 0 ? "<div>" : '<span class="name" title="' + i.Person + '"><p class="image"><img src="' + i.ProfilePicture + '" alt="ProfilePicture" ' + (0 == n ? 'class="image-avatar js-avatar"' : 'class="image-avatar"') + "/></p><div>" + i.Person) + '</div></span><div><span title="' + i.Documents[c].Job + '">' + i.Documents[c].Job + "</span></div>",
                        r = e("<div />", {
                            class: "profileRef",
                            html: a
                        }),
                        u = '<div class="iconsHolder">' + (i.Documents[c].Alert ? '<i class="tiny icon-alert-dark"></i>' : "") + (i.Documents[c].Waiting ? '<i class="tiny icon-waiting"></i>' : "") + (i.Documents[c].Updated ? '<i class="tiny icon-updated-dark"></i>' : "") + "</div><span>" + i.Documents[c].Text + "</span>",
                        l = e("<div />", {
                            class: "documentStatusContainer",
                            html: (i.Documents[c].ManagerFinished ? '<i class="tiny icon-check"></i>' : "") + '<div class="documentStatusBar"><div class="documentStatusBarFiller ' + i.Documents[c].Category + '" data-col="' + this.getProgress(i.Documents[c].Progress) + '"><a href="' + i.Documents[c].Link + '" title="' + i.Documents[c].Text + '">' + u + "</a></div></div>"
                        });
                    s.append(o.append(r).append(l))
                }
            if (i.Team !== t && i.Team.length) {
                const t = e("<ul />");
                for (var c in i.Team)
                    s.append(t.append(this._getHTMLObjectFromObject(i.Team[c], n + 1)))
            }
            return s
        },
        _getHTMLObjectFromObjects: function(t) {
            const i = e("<li />");
            for (const l in t) {
                if (t[l].Documents[0].ShowAcceptDecline)
                    var n = e("<div />", {
                        class: "liContainer"
                    })
                      , s = '<span class="name" title="' + t[l].Person + '"><p class="image"><img src="' + t[l].ProfilePicture + '" alt="ProfilePicture" class="image-avatar" /></p><div>' + t[l].Person + '</div></span><div><span title="' + t[l].Documents[0].Job + '">' + t[l].Documents[0].Job + "</span></div>"
                      , o = e("<div />", {
                        class: "profileRef",
                        html: s
                    })
                      , a = t[l].Documents[0].Text
                      , r = e("<div />", {
                        class: "documentStatusContainer",
                        html: '<div class="documentStatusBar">' + a + "</div>"
                    });
                else
                    n = e("<div />", {
                        class: "liContainer"
                    }),
                    s = '<span class="name" title="' + t[l].Person + '"><p class="image"><img src="' + t[l].ProfilePicture + '" alt="ProfilePicture" class="image-avatar" /></p><div>' + t[l].Person + '</div></span><div><span title="' + t[l].Documents[0].Job + '">' + t[l].Documents[0].Job + "</span></div>",
                    o = e("<div />", {
                        class: "profileRef",
                        html: s
                    }),
                    a = (t[l].Documents[0].Updated ? '<span class="ribbon"></span>' : "") + " <span>" + t[l].Documents[0].Text + "</span>" + (t[l].Documents[0].Alert ? '<span class="alert"></span>' : "") + (t[l].Documents[0].Waiting ? '<span class="waiting"></span>' : ""),
                    r = e("<div />", {
                        class: "documentStatusContainer",
                        html: '<div class="documentStatusBar"><div class="documentStatusBarFiller ' + t[l].Documents[0].Category + '" data-col="' + this.getProgress(t[l].Documents[0].Progress) + '"><a href="' + t[l].Documents[0].Link + '" title="' + t[l].Documents[0].Text + '">' + a + "</a></div></div>"
                    });
                i.append(n.append(o).append(r))
            }
            return i
        },
        getProgress: function(e) {
            for (let t = 0; t < steps.length; t++)
                if (e == steps[t])
                    return t + 1
        },
        next: function(t, i) {
            for (let t = 0; t < this.$lists.length; t++)
                e(this.$lists[t]).animate({
                    width: "toggle"
                }),
                e(this.$lists[t]).remove();
            this.$lists.splice(0, 1),
            this.fillDataYear(t, i)
        },
        previous: function(t, i) {
            for (let t = 0; t < this.$lists.length; t++)
                e(this.$lists[t]).remove();
            this.$lists.splice(1, 0),
            this.fillDataYear(t, i)
        }
    },
    e.fn.documentTimeline = function(t) {
        if ("string" == typeof t) {
            const i = Array.prototype.slice.call(arguments, 1);
            this.each((function() {
                const n = e.data(this, "documentTimeline");
                n ? e.isFunction(n[t]) && "_" !== t.charAt(0) ? n[t].apply(n, i) : logError("no such method '" + t + "' for documentTimeline instance") : logError("cannot call methods on documentTimeline prior to initialization; attempted to call method '" + t + "'")
            }
            ))
        } else
            this.each((function() {
                e.data(this, "documentTimeline") || e.data(this, "documentTimeline", new e.DocumentTimeline(t,this))
            }
            ))
    }
}(jQuery),
function(e, t) {
    e.TimelineNavigation = function(t, i) {
        this.$container = e(i),
        this._init(t)
    }
    ,
    e.TimelineNavigation.defaults = {
        numberLinks: 3,
        animated: !0,
        currentYear: (new Date).getFullYear(),
        middleAttributes: {
            color: "#fff",
            backgroundColor: "#427594"
        },
        notMiddleAttributes: {
            color: "#000",
            backgroundColor: "#ECF1F4"
        }
    },
    e.TimelineNavigation.prototype = {
        _init: function(t) {
            this.options = e.extend(!0, {}, e.TimelineNavigation.defaults, t || {}),
            this.$buttons = e.extend(!0, this.$buttons, this.$container.find(".timelineButton a")),
            this.$blocks = e.extend(!0, this.$blocks, this.$container.find("#timeList li")),
            this.$target = e.extend(!0, this.$target, e("#documentListViewport")),
            this._dressTimelineButtons()
        },
        _dressTimelineButtons: function() {
            const t = this;
            this.$buttons.length && this.$buttons.on("click.navigationButton", (function(i) {
                e(this).data("noClick") || (i.preventDefault(),
                t.$buttons.data("noClick", !0),
                t.changeYear(e(this).attr("data-target")))
            }
            ))
        },
        _enableButtons: function() {
            this.$buttons.length && this.$buttons.data("noClick", !1)
        },
        changeYear: function(t) {
            this.$blocks[this.$blocks.length - 1];
            const i = Math.round(this.$blocks.length / 2) - 1;
            if (removeIndex = 0,
            addIndex = 0,
            nextMiddleIndex = 0,
            insertYear = this.options.currentYear - (i + 1),
            _self = this,
            "previous" == t)
                nextMiddleIndex = i - 1,
                this.options.currentYear -= 1,
                removeIndex = this.$blocks.length - 1,
                _self.$target.documentTimeline("previous", this.options.currentYear, this);
            else {
                if ("next" != t)
                    return console.log("this button does not invoke a proper method"),
                    this;
                addIndex = this.$blocks.length - 1,
                nextMiddleIndex = i + 1,
                insertYear = this.options.currentYear + i + 1,
                this.options.currentYear += 1,
                _self.$target.documentTimeline("next", this.options.currentYear, this)
            }
            const n = e("<li />", {
                text: insertYear,
                style: "display: none; width:" + (Math.floor(.16666666 * e(this.$container).find(".timelineContainer").width()) - 2) + "px;"
            });
            e(this.$blocks[removeIndex]).animate({
                width: "toggle"
            }, (function() {
                e(this).remove()
            }
            )),
            0 == addIndex ? this.$container.find("#timeList").prepend(n[0]) : this.$container.find("#timeList").append(n[0]),
            n.animate({
                width: "toggle"
            }),
            e(this.$blocks[i]).removeClass("middle"),
            e(this.$blocks[nextMiddleIndex]).addClass("middle"),
            this.$blocks.splice(removeIndex, 1),
            this.$blocks.splice(addIndex, 0, n[0])
        }
    },
    e.fn.timelineNavigation = function(t) {
        if ("string" == typeof t) {
            const i = Array.prototype.slice.call(arguments, 1);
            this.each((function() {
                const n = e.data(this, "timelineNavigation");
                n ? e.isFunction(n[t]) && "_" !== t.charAt(0) ? n[t].apply(n, i) : logError("no such method '" + t + "' for hoverdir instance") : logError("cannot call methods on timelineNavigation prior to initialization; attempted to call method '" + t + "'")
            }
            ))
        } else
            this.each((function() {
                e.data(this, "timelineNavigation") || e.data(this, "timelineNavigation", new e.TimelineNavigation(t,this))
            }
            ))
    }
}(jQuery),
function(e) {
    e.fn.equalHeights = function(t, i) {
        return tallest = t || 0,
        this.each((function() {
            e(this).height() > tallest && (tallest = e(this).height())
        }
        )),
        i && tallest > i && (tallest = i),
        this.each((function() {
            e(this).height(tallest).css("overflow", "none")
        }
        ))
    }
}(jQuery),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(window.jQuery)
}((function(e) {
    "use strict";
    let t = 0;
    e.ajaxTransport("iframe", (function(i) {
        if (i.async && ("POST" === i.type || "GET" === i.type)) {
            let n, s;
            return {
                send: function(o, a) {
                    n = e('<form style="display:none;"></form>'),
                    n.attr("accept-charset", i.formAcceptCharset),
                    s = e('<iframe src="javascript:false;" name="iframe-transport-' + (t += 1) + '"></iframe>').bind("load", (function() {
                        let t;
                        const o = e.isArray(i.paramName) ? i.paramName : [i.paramName];
                        s.unbind("load").bind("load", (function() {
                            let t;
                            try {
                                if (t = s.contents(),
                                !t.length || !t[0].firstChild)
                                    throw new Error
                            } catch (e) {
                                t = void 0
                            }
                            a(200, "success", {
                                iframe: t
                            }),
                            e('<iframe src="javascript:false;"></iframe>').appendTo(n),
                            n.remove()
                        }
                        )),
                        n.prop("target", s.prop("name")).prop("action", i.url).prop("method", i.type),
                        i.formData && e.each(i.formData, (function(t, i) {
                            e('<input type="hidden"/>').prop("name", i.name).val(i.value).appendTo(n)
                        }
                        )),
                        i.fileInput && i.fileInput.length && "POST" === i.type && (t = i.fileInput.clone(),
                        i.fileInput.after((function(e) {
                            return t[e]
                        }
                        )),
                        i.paramName && i.fileInput.each((function(t) {
                            e(this).prop("name", o[t] || i.paramName)
                        }
                        )),
                        n.append(i.fileInput).prop("enctype", "multipart/form-data").prop("encoding", "multipart/form-data")),
                        n.submit(),
                        t && t.length && i.fileInput.each((function(i, n) {
                            const s = e(t[i]);
                            e(n).prop("name", s.prop("name")),
                            s.replaceWith(n)
                        }
                        ))
                    }
                    )),
                    n.append(s).appendTo(document.body)
                },
                abort: function() {
                    s && s.unbind("load").prop("src", "javascript".concat(":false;")),
                    n && n.remove()
                }
            }
        }
    }
    )),
    e.ajaxSetup({
        converters: {
            "iframe text": function(t) {
                return e(t[0].body).text()
            },
            "iframe json": function(t) {
                return e.parseJSON(e(t[0].body).text())
            },
            "iframe html": function(t) {
                return e(t[0].body).html()
            },
            "iframe script": function(t) {
                return e.globalEval(e(t[0].body).text())
            }
        }
    })
}
)),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery", "jquery.ui.widget"], e) : e(window.jQuery)
}((function(e) {
    "use strict";
    e.support.xhrFileUpload = !(!window.XMLHttpRequestUpload || !window.FileReader),
    e.support.xhrFormDataFileUpload = !!window.FormData,
    e.widget("blueimp.fileupload", {
        options: {
            namespace: void 0,
            dropZone: e(document),
            pasteZone: e(document),
            fileInput: void 0,
            replaceFileInput: !0,
            paramName: void 0,
            singleFileUploads: !0,
            limitMultiFileUploads: void 0,
            sequentialUploads: !1,
            limitConcurrentUploads: void 0,
            forceIframeTransport: !1,
            redirect: void 0,
            redirectParamName: void 0,
            postMessage: void 0,
            multipart: !0,
            maxChunkSize: void 0,
            uploadedBytes: void 0,
            recalculateProgress: !0,
            progressInterval: 100,
            bitrateInterval: 500,
            formData: function(e) {
                return e.serializeArray()
            },
            add: function(e, t) {
                t.submit()
            },
            processData: !1,
            contentType: !1,
            cache: !1
        },
        _refreshOptionsList: ["namespace", "fileInput", "dropZone", "pasteZone", "multipart", "forceIframeTransport"],
        _BitrateTimer: function() {
            this.timestamp = +new Date,
            this.loaded = 0,
            this.bitrate = 0,
            this.getBitrate = function(e, t, i) {
                const n = e - this.timestamp;
                return (!this.bitrate || !i || n > i) && (this.bitrate = (t - this.loaded) * (1e3 / n) * 8,
                this.loaded = t,
                this.timestamp = e),
                this.bitrate
            }
        },
        _isXHRUpload: function(t) {
            return !t.forceIframeTransport && (!t.multipart && e.support.xhrFileUpload || e.support.xhrFormDataFileUpload)
        },
        _getFormData: function(t) {
            let i;
            return "function" == typeof t.formData ? t.formData(t.form) : e.isArray(t.formData) ? t.formData : t.formData ? (i = [],
            e.each(t.formData, (function(e, t) {
                i.push({
                    name: e,
                    value: t
                })
            }
            )),
            i) : []
        },
        _getTotal: function(t) {
            let i = 0;
            return e.each(t, (function(e, t) {
                i += t.size || 1
            }
            )),
            i
        },
        _onProgress: function(e, t) {
            if (e.lengthComputable) {
                const i = +new Date;
                let n, s;
                if (t._time && t.progressInterval && i - t._time < t.progressInterval && e.loaded !== e.total)
                    return;
                t._time = i,
                n = t.total || this._getTotal(t.files),
                s = parseInt(e.loaded / e.total * (t.chunkSize || n), 10) + (t.uploadedBytes || 0),
                this._loaded += s - (t.loaded || t.uploadedBytes || 0),
                t.lengthComputable = !0,
                t.loaded = s,
                t.total = n,
                t.bitrate = t._bitrateTimer.getBitrate(i, s, t.bitrateInterval),
                this._trigger("progress", e, t),
                this._trigger("progressall", e, {
                    lengthComputable: !0,
                    loaded: this._loaded,
                    total: this._total,
                    bitrate: this._bitrateTimer.getBitrate(i, this._loaded, t.bitrateInterval)
                })
            }
        },
        _initProgressListener: function(t) {
            const i = this
              , n = t.xhr ? t.xhr() : e.ajaxSettings.xhr();
            n.upload && (e(n.upload).bind("progress", (function(e) {
                const n = e.originalEvent;
                e.lengthComputable = n.lengthComputable,
                e.loaded = n.loaded,
                e.total = n.total,
                i._onProgress(e, t)
            }
            )),
            t.xhr = function() {
                return n
            }
            )
        },
        _initXHRData: function(t) {
            let i;
            const n = t.files[0]
              , s = t.multipart || !e.support.xhrFileUpload
              , o = t.paramName[0];
            s && !t.blob || (t.headers = e.extend(t.headers, {
                "X-File-Name": n.name,
                "X-File-Type": n.type,
                "X-File-Size": n.size
            }),
            t.blob ? s || (t.contentType = "application/octet-stream",
            t.data = t.blob) : (t.contentType = n.type,
            t.data = n)),
            s && e.support.xhrFormDataFileUpload && (t.postMessage ? (i = this._getFormData(t),
            t.blob ? i.push({
                name: o,
                value: t.blob
            }) : e.each(t.files, (function(e, n) {
                i.push({
                    name: t.paramName[e] || o,
                    value: n
                })
            }
            ))) : (t.formData instanceof FormData ? i = t.formData : (i = new FormData,
            e.each(this._getFormData(t), (function(e, t) {
                i.append(t.name, t.value)
            }
            ))),
            t.blob ? i.append(o, t.blob, n.name) : e.each(t.files, (function(e, n) {
                n instanceof Blob && i.append(t.paramName[e] || o, n, n.name)
            }
            ))),
            t.data = i),
            t.blob = null
        },
        _initIframeSettings: function(t) {
            t.dataType = "iframe " + (t.dataType || ""),
            t.formData = this._getFormData(t),
            t.redirect && e("<a></a>").prop("href", t.url).prop("host") !== location.host && t.formData.push({
                name: t.redirectParamName || "redirect",
                value: t.redirect
            })
        },
        _initDataSettings: function(e) {
            this._isXHRUpload(e) ? (this._chunkedUpload(e, !0) || (e.data || this._initXHRData(e),
            this._initProgressListener(e)),
            e.postMessage && (e.dataType = "postmessage " + (e.dataType || ""))) : this._initIframeSettings(e, "iframe")
        },
        _getParamName: function(t) {
            const i = e(t.fileInput);
            let n = t.paramName;
            return n ? e.isArray(n) || (n = [n]) : (n = [],
            i.each((function() {
                const t = e(this)
                  , i = t.prop("name") || "files[]";
                let s = (t.prop("files") || [1]).length;
                for (; s; )
                    n.push(i),
                    s -= 1
            }
            )),
            n.length || (n = [i.prop("name") || "files[]"])),
            n
        },
        _initFormSettings: function(t) {
            t.form && t.form.length || (t.form = e(t.fileInput.prop("form")),
            t.form.length || (t.form = e(this.options.fileInput.prop("form")))),
            t.paramName = this._getParamName(t),
            t.url || (t.url = t.form.prop("action") || location.href),
            t.type = (t.type || t.form.prop("method") || "").toUpperCase(),
            "POST" !== t.type && "PUT" !== t.type && (t.type = "POST"),
            t.formAcceptCharset || (t.formAcceptCharset = t.form.attr("accept-charset"))
        },
        _getAJAXSettings: function(t) {
            const i = e.extend({}, this.options, t);
            return this._initFormSettings(i),
            this._initDataSettings(i),
            i
        },
        _enhancePromise: function(e) {
            return e.success = e.done,
            e.error = e.fail,
            e.complete = e.always,
            e
        },
        _getXHRPromise: function(t, i, n) {
            const s = e.Deferred()
              , o = s.promise();
            return i = i || this.options.context || o,
            !0 === t ? s.resolveWith(i, n) : !1 === t && s.rejectWith(i, n),
            o.abort = s.promise,
            this._enhancePromise(o)
        },
        _chunkedUpload: function(t, i) {
            const n = this
              , s = t.files[0]
              , o = s.size
              , a = t.uploadedBytes = t.uploadedBytes || 0
              , r = t.maxChunkSize || o
              , l = s.slice || s.webkitSlice || s.mozSlice;
            let c, u, h, d;
            return !(!(this._isXHRUpload(t) && l && (a || r < o)) || t.data) && (!!i || (a >= o ? (s.error = "Uploaded bytes exceed file size",
            this._getXHRPromise(!1, t.context, [null, "error", s.error])) : (u = Math.ceil((o - a) / r),
            c = function(i) {
                return i ? c(i -= 1).pipe((function() {
                    const o = e.extend({}, t);
                    return o.blob = l.call(s, a + i * r, a + (i + 1) * r),
                    o.chunkIndex = i,
                    o.chunksNumber = u,
                    o.chunkSize = o.blob.size,
                    n._initXHRData(o),
                    n._initProgressListener(o),
                    h = (e.ajax(o) || n._getXHRPromise(!1, o.context)).done((function() {
                        o.loaded || n._onProgress(e.Event("progress", {
                            lengthComputable: !0,
                            loaded: o.chunkSize,
                            total: o.chunkSize
                        }), o),
                        t.uploadedBytes = o.uploadedBytes += o.chunkSize
                    }
                    )),
                    h
                }
                )) : n._getXHRPromise(!0, t.context)
            }
            ,
            d = c(u),
            d.abort = function() {
                return h.abort()
            }
            ,
            this._enhancePromise(d))))
        },
        _beforeSend: function(e, t) {
            0 === this._active && (this._trigger("start"),
            this._bitrateTimer = new this._BitrateTimer),
            this._active += 1,
            this._loaded += t.uploadedBytes || 0,
            this._total += this._getTotal(t.files)
        },
        _onDone: function(t, i, n, s) {
            this._isXHRUpload(s) || this._onProgress(e.Event("progress", {
                lengthComputable: !0,
                loaded: 1,
                total: 1
            }), s),
            s.result = t,
            s.textStatus = i,
            s.jqXHR = n,
            this._trigger("done", null, s)
        },
        _onFail: function(e, t, i, n) {
            n.jqXHR = e,
            n.textStatus = t,
            n.errorThrown = i,
            this._trigger("fail", null, n),
            n.recalculateProgress && (this._loaded -= n.loaded || n.uploadedBytes || 0,
            this._total -= n.total || this._getTotal(n.files))
        },
        _onAlways: function(e, t, i, n) {
            this._active -= 1,
            n.textStatus = t,
            i && i.always ? (n.jqXHR = i,
            n.result = e) : (n.jqXHR = e,
            n.errorThrown = i),
            this._trigger("always", null, n),
            0 === this._active && (this._trigger("stop"),
            this._loaded = this._total = 0,
            this._bitrateTimer = null)
        },
        _onSend: function(t, i) {
            const n = this;
            let s, o, a;
            const r = n._getAJAXSettings(i)
              , l = function(i, o) {
                return n._sending += 1,
                r._bitrateTimer = new n._BitrateTimer,
                s = s || (!1 !== i && !1 !== n._trigger("send", t, r) && (n._chunkedUpload(r) || e.ajax(r)) || n._getXHRPromise(!1, r.context, o)).done((function(e, t, i) {
                    n._onDone(e, t, i, r)
                }
                )).fail((function(e, t, i) {
                    n._onFail(e, t, i, r)
                }
                )).always((function(e, t, i) {
                    if (n._sending -= 1,
                    n._onAlways(e, t, i, r),
                    r.limitConcurrentUploads && r.limitConcurrentUploads > n._sending) {
                        let e, t = n._slots.shift();
                        for (; t; ) {
                            if (e = t.state ? "pending" === t.state() : !t.isRejected(),
                            e) {
                                t.resolve();
                                break
                            }
                            t = n._slots.shift()
                        }
                    }
                }
                )),
                s
            };
            return this._beforeSend(t, r),
            this.options.sequentialUploads || this.options.limitConcurrentUploads && this.options.limitConcurrentUploads <= this._sending ? (this.options.limitConcurrentUploads > 1 ? (o = e.Deferred(),
            this._slots.push(o),
            a = o.pipe(l)) : a = this._sequence = this._sequence.pipe(l, l),
            a.abort = function() {
                const e = [void 0, "abort", "abort"];
                return s ? s.abort() : (o && o.rejectWith(a, e),
                l(!1, e))
            }
            ,
            this._enhancePromise(a)) : l()
        },
        _onAdd: function(t, i) {
            const n = this;
            let s = !0;
            const o = e.extend({}, this.options, i)
              , a = o.limitMultiFileUploads
              , r = this._getParamName(o);
            let l, c, u, h;
            if ((o.singleFileUploads || a) && this._isXHRUpload(o))
                if (!o.singleFileUploads && a)
                    for (u = [],
                    l = [],
                    h = 0; h < i.files.length; h += a)
                        u.push(i.files.slice(h, h + a)),
                        c = r.slice(h, h + a),
                        c.length || (c = r),
                        l.push(c);
                else
                    l = r;
            else
                u = [i.files],
                l = [r];
            return i.originalFiles = i.files,
            e.each(u || i.files, (function(o, a) {
                const r = e.extend({}, i);
                return r.files = u ? a : [a],
                r.paramName = l[o],
                r.submit = function() {
                    return r.jqXHR = this.jqXHR = !1 !== n._trigger("submit", t, this) && n._onSend(t, this),
                    this.jqXHR
                }
                ,
                s = n._trigger("add", t, r)
            }
            )),
            s
        },
        _replaceFileInput: function(t) {
            const i = t.clone(!0);
            e("<form></form>").append(i)[0].reset(),
            t.after(i).detach(),
            e.cleanData(t.unbind("remove")),
            this.options.fileInput = this.options.fileInput.map((function(e, n) {
                return n === t[0] ? i[0] : n
            }
            )),
            t[0] === this.element[0] && (this.element = i)
        },
        _handleFileTreeEntry: function(t, i) {
            const n = this
              , s = e.Deferred()
              , o = function(e) {
                e && !e.entry && (e.entry = t),
                s.resolve([e])
            };
            let a;
            return i = i || "",
            t.isFile ? t._file ? (t._file.relativePath = i,
            s.resolve(t._file)) : t.file((function(e) {
                e.relativePath = i,
                s.resolve(e)
            }
            ), o) : t.isDirectory ? (a = t.createReader(),
            a.readEntries((function(e) {
                n._handleFileTreeEntries(e, i + t.name + "/").done((function(e) {
                    s.resolve(e)
                }
                )).fail(o)
            }
            ), o)) : s.resolve([]),
            s.promise()
        },
        _handleFileTreeEntries: function(t, i) {
            const n = this;
            return e.when.apply(e, e.map(t, (function(e) {
                return n._handleFileTreeEntry(e, i)
            }
            ))).pipe((function() {
                return Array.prototype.concat.apply([], arguments)
            }
            ))
        },
        _getDroppedFiles: function(t) {
            const i = (t = t || {}).items;
            return i && i.length && (i[0].webkitGetAsEntry || i[0].getAsEntry) ? this._handleFileTreeEntries(e.map(i, (function(e) {
                let t;
                return e.webkitGetAsEntry ? (t = e.webkitGetAsEntry(),
                t._file = e.getAsFile(),
                t) : e.getAsEntry()
            }
            ))) : e.Deferred().resolve(e.makeArray(t.files)).promise()
        },
        _getSingleFileInputFiles: function(t) {
            const i = (t = e(t)).prop("webkitEntries") || t.prop("entries");
            let n, s;
            if (i && i.length)
                return this._handleFileTreeEntries(i);
            if (n = e.makeArray(t.prop("files")),
            !n.length) {
                if (s = t.prop("value"),
                !s)
                    return e.Deferred().resolve([]).promise();
                n = [{
                    name: s.replace(/^.*\\/, "")
                }]
            }
            return e.Deferred().resolve(n).promise()
        },
        _getFileInputFiles: function(t) {
            return t instanceof e && 1 !== t.length ? e.when.apply(e, e.map(t, this._getSingleFileInputFiles)).pipe((function() {
                return Array.prototype.concat.apply([], arguments)
            }
            )) : this._getSingleFileInputFiles(t)
        },
        _onChange: function(t) {
            const i = t.data.fileupload
              , n = {
                fileInput: e(t.target),
                form: e(t.target.form)
            };
            i._getFileInputFiles(n.fileInput).always((function(e) {
                n.files = e,
                i.options.replaceFileInput && i._replaceFileInput(n.fileInput),
                !1 !== i._trigger("change", t, n) && i._onAdd(t, n)
            }
            ))
        },
        _onPaste: function(t) {
            const i = t.data.fileupload
              , n = t.originalEvent.clipboardData
              , s = n && n.items || []
              , o = {
                files: []
            };
            if (e.each(s, (function(e, t) {
                const i = t.getAsFile && t.getAsFile();
                i && o.files.push(i)
            }
            )),
            !1 === i._trigger("paste", t, o) || !1 === i._onAdd(t, o))
                return !1
        },
        _onDrop: function(e) {
            e.preventDefault();
            const t = e.data.fileupload
              , i = e.dataTransfer = e.originalEvent.dataTransfer
              , n = {};
            t._getDroppedFiles(i).always((function(i) {
                n.files = i,
                !1 !== t._trigger("drop", e, n) && t._onAdd(e, n)
            }
            ))
        },
        _onDragOver: function(e) {
            const t = e.data.fileupload
              , i = e.dataTransfer = e.originalEvent.dataTransfer;
            if (!1 === t._trigger("dragover", e))
                return !1;
            i && (i.dropEffect = "copy"),
            e.preventDefault()
        },
        _initEventHandlers: function() {
            const e = this.options.namespace;
            this._isXHRUpload(this.options) && (this.options.dropZone.bind("dragover." + e, {
                fileupload: this
            }, this._onDragOver).bind("drop." + e, {
                fileupload: this
            }, this._onDrop),
            this.options.pasteZone.bind("paste." + e, {
                fileupload: this
            }, this._onPaste)),
            this.options.fileInput.bind("change." + e, {
                fileupload: this
            }, this._onChange)
        },
        _destroyEventHandlers: function() {
            const e = this.options.namespace;
            this.options.dropZone.unbind("dragover." + e, this._onDragOver).unbind("drop." + e, this._onDrop),
            this.options.pasteZone.unbind("paste." + e, this._onPaste),
            this.options.fileInput.unbind("change." + e, this._onChange)
        },
        _setOption: function(t, i) {
            const n = -1 !== e.inArray(t, this._refreshOptionsList);
            n && this._destroyEventHandlers(),
            e.Widget.prototype._setOption.call(this, t, i),
            n && (this._initSpecialOptions(),
            this._initEventHandlers())
        },
        _initSpecialOptions: function() {
            const t = this.options;
            void 0 === t.fileInput ? t.fileInput = this.element.is('input[type="file"]') ? this.element : this.element.find('input[type="file"]') : t.fileInput instanceof e || (t.fileInput = e(t.fileInput)),
            t.dropZone instanceof e || (t.dropZone = e(t.dropZone)),
            t.pasteZone instanceof e || (t.pasteZone = e(t.pasteZone))
        },
        _create: function() {
            const t = this.options;
            e.extend(t, e(this.element[0].cloneNode(!1)).data()),
            t.namespace = t.namespace || this.widgetName,
            this._initSpecialOptions(),
            this._slots = [],
            this._sequence = this._getXHRPromise(!0),
            this._sending = this._active = this._loaded = this._total = 0,
            this._initEventHandlers()
        },
        destroy: function() {
            this._destroyEventHandlers(),
            e.Widget.prototype.destroy.call(this)
        },
        enable: function() {
            let t = !1;
            this.options.disabled && (t = !0),
            e.Widget.prototype.enable.call(this),
            t && this._initEventHandlers()
        },
        disable: function() {
            this.options.disabled || this._destroyEventHandlers(),
            e.Widget.prototype.disable.call(this)
        },
        add: function(t) {
            const i = this;
            t && !this.options.disabled && (t.fileInput && !t.files ? this._getFileInputFiles(t.fileInput).always((function(e) {
                t.files = e,
                i._onAdd(null, t)
            }
            )) : (t.files = e.makeArray(t.files),
            this._onAdd(null, t)))
        },
        send: function(t) {
            if (t && !this.options.disabled) {
                if (t.fileInput && !t.files) {
                    const i = this
                      , n = e.Deferred()
                      , s = n.promise();
                    let o, a;
                    return s.abort = function() {
                        return a = !0,
                        o ? o.abort() : (n.reject(null, "abort", "abort"),
                        s)
                    }
                    ,
                    this._getFileInputFiles(t.fileInput).always((function(e) {
                        a || (t.files = e,
                        o = i._onSend(null, t).then((function(e, t, i) {
                            n.resolve(e, t, i)
                        }
                        ), (function(e, t, i) {
                            n.reject(e, t, i)
                        }
                        )))
                    }
                    )),
                    this._enhancePromise(s)
                }
                if (t.files = e.makeArray(t.files),
                t.files.length)
                    return this._onSend(null, t)
            }
            return this._getXHRPromise(!1, t && t.context)
        }
    })
}
)),
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 *
 * Requires: 1.2.2+
 */
function(e) {
    function t(t) {
        const i = t || window.event
          , n = [].slice.call(arguments, 1);
        let s = 0;
        let o = 0
          , a = 0;
        return (t = e.event.fix(i)).type = "mousewheel",
        i.wheelDelta && (s = i.wheelDelta / 120),
        i.detail && (s = -i.detail / 3),
        a = s,
        void 0 !== i.axis && i.axis === i.HORIZONTAL_AXIS && (a = 0,
        o = -1 * s),
        void 0 !== i.wheelDeltaY && (a = i.wheelDeltaY / 120),
        void 0 !== i.wheelDeltaX && (o = -1 * i.wheelDeltaX / 120),
        n.unshift(t, s, o, a),
        (e.event.dispatch || e.event.handle).apply(this, n)
    }
    const i = ["DOMMouseScroll", "mousewheel"];
    if (e.event.fixHooks)
        for (let t = i.length; t; )
            e.event.fixHooks[i[--t]] = e.event.mouseHooks;
    e.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener)
                for (let e = i.length; e; )
                    this.addEventListener(i[--e], t, !1);
            else
                this.onmousewheel = t
        },
        teardown: function() {
            if (this.removeEventListener)
                for (let e = i.length; e; )
                    this.removeEventListener(i[--e], t, !1);
            else
                this.onmousewheel = null
        }
    },
    e.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function(e) {
            return this.unbind("mousewheel", e)
        }
    })
}(jQuery),
jQuery.cookie = function(e, t, i) {
    if (void 0 === t) {
        let t = null;
        if (document.cookie && "" != document.cookie) {
            const i = document.cookie.split(";");
            for (let n = 0; n < i.length; n++) {
                const s = jQuery.trim(i[n]);
                if (s.substring(0, e.length + 1) == e + "=") {
                    t = decodeURIComponent(s.substring(e.length + 1));
                    break
                }
            }
        }
        return t
    }
    {
        i = i || {},
        null === t && (t = "",
        i.expires = -1);
        let n = "";
        if (i.expires && ("number" == typeof i.expires || i.expires.toUTCString)) {
            let e;
            "number" == typeof i.expires ? (e = new Date,
            e.setTime(e.getTime() + 24 * i.expires * 60 * 60 * 1e3)) : e = i.expires,
            n = "; expires=" + e.toUTCString()
        }
        const s = i.path ? "; path=" + i.path : ""
          , o = i.domain ? "; domain=" + i.domain : ""
          , a = i.secure ? "; secure" : "";
        document.cookie = [e, "=", encodeURIComponent(t), n, s, o, a].join("")
    }
}
;
const iOSVersion = getiOSVersion();
function getiOSVersion() {
    const e = window.navigator.userAgent
      , t = e.indexOf("OS ");
    return (e.indexOf("iPhone") > -1 || e.indexOf("iPad") > -1) && t > -1 ? window.Number(e.substr(t + 3, 3).replace("_", ".")) : 0
}
/**
 * Timeago is a jQuery plugin that makes it easy to support automatically
 * updating fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago").
 *
 * @name timeago
 * @version 1.0.2
 * @requires jQuery v1.2.3+
 * @author Ryan McGeary
 * @license MIT License - http://www.opensource.org/licenses/mit-license.php
 *
 * For usage and examples, visit:
 * http://timeago.yarp.com/
 *
 * Copyright (c) 2008-2013, Ryan McGeary (ryan -[at]- mcgeary [*dot*] org)
 */
function ExecuteFunctionByName(e, t) {
    const i = [].slice.call(arguments).splice(2)
      , n = e.split(".")
      , s = n.pop();
    for (let e = 0; e < n.length; e++)
        t = t[n[e]];
    return t[s].apply(this, i)
}
function ValidateInputWithPlaceholder(e, t) {
    return "" === e.val() || !t && e.val() == e.attr("placeholder") ? (e.addClass("validation-error"),
    !1) : (e.removeClass("validation-error"),
    !0)
}
function ValidateSelect2WithPlaceholder(e, t, i) {
    return "" === e.val() || "-1" === e.val() || !i && e.val() == e.attr("placeholder") ? (t.addClass("validation-error"),
    !1) : (t.removeClass("validation-error"),
    !0)
}
function formatSelect2(e) {
    return null == e || null != e.text && "" != e.text ? e.text : $("<span>&nbsp;</span>")
}
function InitToggleSearchExtra() {
    "hidden" == $("#ToggleExtra").data("status") && $(".searchelement.extra").toggle(),
    $("#ToggleExtra").click((function(e) {
        return e.preventDefault(),
        "hidden" == $(this).data("status") ? ($(this).data("status", "show"),
        $(this).find("i").removeClass("icon-right"),
        $(this).find("i").addClass("icon-up")) : ($(this).data("status", "hidden"),
        $(this).find("i").removeClass("icon-up"),
        $(this).find("i").addClass("icon-right")),
        $("div.searchelement.extra").toggle(),
        !1
    }
    ))
}
function getBrowserWebkit() {
    return /webkit/.test(navigator.userAgent.toLowerCase())
}
function noscript(e) {
    const t = $(e.bold());
    return t.find("script").remove(),
    t.html()
}
function removeInvalidCharacters(e) {
    return null === e ? null : e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace("<", "")).replace(">", "")).replace("*", "")).replace("%", "")).replace(":", "")).replace("&", "")).replace("\\", "")).replace('"', "")).replace("/", "")
}
function convertValues(e) {
    const t = {};
    if ("" != e) {
        e = $.isArray(e) ? e : [e];
        for (let i = 0; i < e.length; i++)
            t["values[" + i + "]"] = e[i]
    }
    return t
}
function detectIE() {
    const e = window.navigator.userAgent
      , t = e.indexOf("MSIE ");
    if (t > 0)
        return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
    if (e.indexOf("Trident/") > 0) {
        const t = e.indexOf("rv:");
        return parseInt(e.substring(t + 3, e.indexOf(".", t)), 10)
    }
    const i = e.indexOf("Edge/");
    return i > 0 && parseInt(e.substring(i + 5, e.indexOf(".", i)), 10)
}
iOSVersion >= 6 && function(e) {
    const t = {}
      , i = {}
      , n = e.setTimeout
      , s = e.setInterval
      , o = e.clearTimeout
      , a = e.clearInterval;
    if (!e.addEventListener)
        return !1;
    function r(t, i, n) {
        let o, a = n[0];
        const r = t === s;
        return n[0] = function() {
            a && (a.apply(e, arguments),
            r || (delete i[o],
            a = null))
        }
        ,
        o = t.apply(e, n),
        i[o] = {
            args: n,
            created: Date.now(),
            cb: a,
            id: o
        },
        o
    }
    function l(t, i, n, o, a) {
        const r = n[o];
        if (!r)
            return;
        const l = t === s;
        if (i(r.id),
        !l) {
            let e = r.args[1]
              , t = Date.now() - r.created;
            t < 0 && (t = 0),
            e -= t,
            e < 0 && (e = 0),
            r.args[1] = e
        }
        r.args[0] = function() {
            r.cb && (r.cb.apply(e, arguments),
            l || (delete n[o],
            r.cb = null))
        }
        ,
        r.created = Date.now(),
        r.id = t.apply(e, r.args)
    }
    e.setTimeout = function() {
        return r(n, t, arguments)
    }
    ,
    e.setInterval = function() {
        return r(s, i, arguments)
    }
    ,
    e.clearTimeout = function(e) {
        const i = t[e];
        i && (delete t[e],
        o(i.id))
    }
    ,
    e.clearInterval = function(e) {
        const t = i[e];
        t && (delete i[e],
        a(t.id))
    }
    ;
    let c = e;
    for (; c.location != c.parent.location; )
        c = c.parent;
    c.addEventListener("scroll", (function() {
        let e;
        for (e in t)
            l(n, o, t, e);
        for (e in i)
            l(s, a, i, e)
    }
    ))
}(window),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}((function(e) {
    e.timeago = function(t) {
        return t instanceof Date ? n(t) : n("string" == typeof t ? e.timeago.parse(t) : "number" == typeof t ? new Date(t) : e.timeago.datetime(t))
    }
    ;
    const t = e.timeago;
    function i() {
        const i = function(i) {
            if (!(i = e(i)).data("timeago")) {
                i.data("timeago", {
                    datetime: t.datetime(i)
                });
                const n = e.trim(i.text());
                !(n.length > 0) || t.isTime(i) && i.attr("title") || i.attr("title", n)
            }
            return i.data("timeago")
        }(this);
        return isNaN(i.datetime) || e(this).text(n(i.datetime)),
        this
    }
    function n(e) {
        return t.inWords(function(e) {
            return (new Date).getTime() - e.getTime()
        }(e))
    }
    e.extend(e.timeago, {
        settings: {
            refreshMillis: 0,
            allowFuture: !1,
            main: {
                wordSeparator: " ",
                numbers: []
            },
            strings: {}
        },
        inWords(t) {
            let i = JSON.parse(sessionStorage.getItem("resources/timeAgo"));
            null === i && e.ajax({
                type: "GET",
                async: !1,
                dataType: "json",
                traditional: !0,
                url: formatUrl("cache/timeagoresources"),
                success(e) {
                    sessionStorage.setItem("resources/timeAgo", JSON.stringify(e)),
                    i = e
                },
                error(e) {
                    console.log(e)
                }
            });
            const n = this.settings.main;
            let s = i.prefixAgo
              , o = i.suffixAgo;
            this.settings.allowFuture && t < 0 && (s = i.prefixFromNow,
            o = i.suffixFromNow);
            const a = Math.abs(t) / 1e3
              , r = a / 60
              , l = r / 60
              , c = l / 24
              , u = c / 365;
            function h(i, s) {
                const o = e.isFunction(i) ? i(s, t) : i
                  , a = n.numbers && n.numbers[s] || s;
                return o.replace(/%d/i, a)
            }
            const d = a < 45 && h(i.seconds, Math.round(a)) || a < 90 && h(i.minute, 1) || r < 45 && h(i.minutes, Math.round(r)) || r < 90 && h(i.hour, 1) || l < 24 && h(i.hours, Math.round(l)) || l < 42 && h(i.day, 1) || c < 30 && h(i.days, Math.round(c)) || c < 45 && h(i.month, 1) || c < 365 && h(i.months, Math.round(c / 30)) || u < 1.5 && h(i.year, 1) || h(i.years, Math.round(u))
              , p = n.wordSeparator || "";
            return e.trim([s, d, o].join(p))
        },
        parse: function(t) {
            let i = e.trim(t);
            return i = i.replace(/\.\d+/, ""),
            i = i.replace(/-/, "/").replace(/-/, "/"),
            i = i.replace(/T/, " ").replace(/Z/, " UTC"),
            i = i.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"),
            new Date(i)
        },
        datetime: function(i) {
            const n = t.isTime(i) ? e(i).attr("datetime") : e(i).attr("title");
            return t.parse(n)
        },
        isTime: function(t) {
            return "time" === e(t).get(0).tagName.toLowerCase()
        }
    }),
    e.fn.timeago = function() {
        const e = this;
        e.each(i);
        const n = t.settings;
        return n.refreshMillis > 0 && setInterval((function() {
            e.each(i)
        }
        ), n.refreshMillis),
        e
    }
    ,
    document.createElement("abbr"),
    document.createElement("time")
}
)),
function(e) {
    function t(e) {
        (e.attr("title") || "string" != typeof e.attr("original-title")) && e.attr("original-title", e.attr("title") || "").removeAttr("title")
    }
    function i(i, n) {
        this.$element = e(i),
        this.options = n,
        this.enabled = !0,
        t(this.$element)
    }
    i.prototype = {
        show: function() {
            const t = this.getTitle();
            if (t && this.enabled) {
                const i = this.tip();
                i.find(".tipsy-inner")[this.options.html ? "html" : "text"](t),
                "" == this.options.css ? i[0].className = "legacy-page tipsy" : i[0].className = "legacy-page tipsy " + this.options.css,
                i.remove().css({
                    top: 0,
                    left: 0,
                    visibility: "hidden",
                    display: "block"
                }).appendTo(document.body);
                const n = e.extend({}, this.$element.offset(), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                })
                  , s = i[0].offsetWidth
                  , o = i[0].offsetHeight
                  , a = "function" == typeof this.options.gravity ? this.options.gravity.call(this.$element[0]) : this.options.gravity;
                let r;
                switch (a.charAt(0)) {
                case "n":
                    r = {
                        top: n.top + n.height + this.options.offset,
                        left: n.left + n.width / 2 - s / 2
                    };
                    break;
                case "s":
                    r = {
                        top: n.top - o - this.options.offset,
                        left: n.left + n.width / 2 - s / 2
                    };
                    break;
                case "e":
                    r = {
                        top: n.top + n.height / 2 - o / 2,
                        left: n.left - s - this.options.offset
                    };
                    break;
                case "w":
                    r = {
                        top: n.top + n.height / 2 - o / 2,
                        left: n.left + n.width + this.options.offset
                    }
                }
                2 == a.length && ("w" == a.charAt(1) ? r.left = n.left + n.width / 2 - 15 : r.left = n.left + n.width / 2 - s + 15),
                i.css(r).addClass("tipsy-" + a),
                this.options.fade ? i.stop().css({
                    opacity: 0,
                    display: "block",
                    visibility: "visible"
                }).animate({
                    opacity: this.options.opacity
                }) : i.css({
                    visibility: "visible",
                    opacity: this.options.opacity
                })
            }
        },
        hide: function() {
            this.options.fade ? this.tip().stop().fadeOut((function() {
                e(this).remove()
            }
            )) : this.tip().remove()
        },
        getTitle: function() {
            const e = this.$element;
            var i, n = this.options;
            return t(e),
            "string" == typeof (n = this.options).title ? i = e.attr("title" == n.title ? "original-title" : n.title) : "function" == typeof n.title && (i = n.title.call(e[0])),
            (i = ("" + i).replace(/(^\s*|\s*$)/, "")) || n.fallback
        },
        tip: function() {
            return this.$tip || ("" == this.options.css ? this.$tip = e('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"/></div>') : this.$tip = e('<div class="tipsy ' + this.options.css + '"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"/></div>')),
            this.$tip
        },
        validate: function() {
            this.$element[0].parentNode || (this.hide(),
            this.$element = null,
            this.options = null)
        },
        enable: function() {
            this.enabled = !0
        },
        disable: function() {
            this.enabled = !1
        },
        toggleEnabled: function() {
            this.enabled = !this.enabled
        }
    },
    e.fn.tipsy = function(t) {
        if (!0 === t)
            return this.data("tipsy");
        if ("string" == typeof t)
            return this.data("tipsy")[t]();
        function n(n) {
            let s = e.data(n, "tipsy");
            return s || (s = new i(n,e.fn.tipsy.elementOptions(n, t)),
            e.data(n, "tipsy", s)),
            s
        }
        if ((t = e.extend({}, e.fn.tipsy.defaults, t)).live || this.each((function() {
            n(this)
        }
        )),
        "manual" != t.trigger) {
            const e = t.live ? "live" : "bind"
              , i = "hover" == t.trigger ? "mouseenter" : "focus"
              , s = "hover" == t.trigger ? "mouseleave" : "blur";
            this[e](i, (function() {
                const e = n(this);
                e.hoverState = "in",
                0 == t.delayIn ? e.show() : setTimeout((function() {
                    "in" == e.hoverState && e.show()
                }
                ), t.delayIn)
            }
            ))[e](s, (function() {
                const e = n(this);
                e.hoverState = "out",
                0 == t.delayOut ? e.hide() : setTimeout((function() {
                    "out" == e.hoverState && e.hide()
                }
                ), t.delayOut)
            }
            ))
        }
        return this
    }
    ,
    e.fn.tipsy.defaults = {
        delayIn: 0,
        delayOut: 0,
        fade: !1,
        fallback: "",
        gravity: "n",
        html: !1,
        live: !1,
        offset: 0,
        opacity: 1,
        title: "title",
        trigger: "hover",
        css: ""
    },
    e.fn.tipsy.elementOptions = function(t, i) {
        return e.metadata ? e.extend({}, i, e(t).metadata()) : i
    }
    ,
    e.fn.tipsy.autoNS = function() {
        return e(this).offset().top > e(document).scrollTop() + e(window).height() / 2 ? "s" : "n"
    }
    ,
    e.fn.tipsy.autoWE = function() {
        return e(this).offset().left > e(document).scrollLeft() + e(window).width() / 2 ? "e" : "w"
    }
}(jQuery),
jQuery.fn.preventDoubleSubmission = function() {
    return $(this).on("submit", (function(e) {
        const t = $(this);
        !0 === t.data("submitted") ? e.preventDefault() : t.data("submitted", !0)
    }
    )),
    this
}
,
function(e) {
    e.widget("custom.combobox", {
        options: {
            url: "",
            customClass: "",
            name: ""
        },
        _create: function() {
            this.wrapper = e("<span>").addClass("custom-combobox").insertAfter(this.element),
            this.element.hide(),
            this._createAutocomplete(),
            this._createShowAllButton()
        },
        _createAutocomplete: function() {
            this.input = e("<input>").appendTo(this.wrapper).attr("title", "").attr("id", "value_" + this.options.name).addClass("custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left").autocomplete({
                delay: 0,
                minLength: 0,
                source: e.proxy(this, "_source"),
                select: function(t, i) {
                    i.item && (e(this).val(i.item.label),
                    e(this)[0].attributes.id = i.item.id)
                }
            }).tooltip({
                tooltipClass: "ui-state-highlight"
            }),
            this.input.id = "value_" + this.options.name,
            this.input[0].attributes.id = null,
            this._on(this.input, {
                autocompleteselect: function(e, t) {
                    this._trigger("select", e, {
                        ui: t
                    })
                }
            }),
            this._on(this.input, {
                focusout: function(t) {
                    const i = e(this)[0].input[0].value;
                    i && 0 !== i.length || (e(this)[0].input[0].attributes.id = null)
                }
            })
        },
        _createShowAllButton: function() {
            const t = this.input;
            let i = !1;
            e("<a>").attr("tabIndex", -1).attr("title", "Show All Items").tooltip().appendTo(this.wrapper).button({
                icons: {
                    primary: "ui-icon-triangle-1-s"
                },
                text: !1
            }).removeClass("ui-corner-all").addClass("custom-combobox-toggle ui-corner-right").mousedown((function() {
                i = t.autocomplete("widget").is(":visible")
            }
            )).click((function() {
                t.focus(),
                i || t.autocomplete("search")
            }
            ))
        },
        _source: function(t, i) {
            e.get(this.options.url, {
                term: t.term
            }, (function(e) {
                i(e)
            }
            ))
        },
        _destroy: function() {
            this.wrapper.remove(),
            this.element.show()
        }
    })
}(jQuery),
function(e) {
    e.fn.goTo = function() {
        return e(this).offset().top + e(this).height() > e("#footerBackground").offset().top && e("html, body").animate({
            scrollTop: e(this).offset().top + e(this).height() - e("#footerBackground").offset().top
        }, "fast"),
        this
    }
    ,
    e.fn.size = function() {
        return console.error("jquery size method is deprecated"),
        this.lenght
    }
}(jQuery),
String.Format || (String.Format = function(e) {
    const t = Array.prototype.slice.call(arguments, 1);
    return e.replace(/{(\d+)}/g, (function(e, i) {
        return void 0 !== t[i] ? t[i] : e
    }
    ))
}
);
const secondLeftMenu = {
    init: function() {
        $(".admin-left-menu-container").children().length > 0 || ($(".admin-left-menu-container").hide(),
        $(".admin-area-container--content").attr("class", "admin-area-container--content col--12-12 full-width-admin-area-container"),
        $(".span--5-6.span--1-1--s").attr("class", "span--1-1 span--1-1--s legacy-page")),
        this.changeHeight()
    },
    changeHeight: function() {
        const e = {
            banner: 0,
            userimpersonation: 0
        }
          , t = document.querySelector(".banner");
        t && (e.banner = t.offsetHeight);
        const i = document.querySelector(".user-impersonation");
        i && (e.userimpersonation = i.offsetHeight);
        const n = document.querySelector(".admin-left-menu-container");
        n && (n.style.minHeight = "calc(100vh - " + e.banner + "px - " + e.userimpersonation + "px)")
    }
};
window.addEventListener("load", (()=>{
    const e = document.querySelectorAll(".profile__languages a");
    e && e.forEach((e=>{
        e.addEventListener("click", (()=>{
            localStorage.clear(),
            sessionStorage.clear()
        }
        ))
    }
    ))
}
));
var NS4 = document.layers
  , IE4 = document.all
  , ver4 = NS4 || IE4
  , isMac = -1 != navigator.appVersion.indexOf("Mac");
function ShowPopUp(e, t, i, n) {
    window.open(e, "title", "height=" + n + ",width=" + i + ",toolbar=no,directories=no,status=yes,menubar=no,scrollbars=1,resizable=yes")
}
function EnableDiv(e) {
    document.getElementById(e).style.display = ""
}
function DisableDiv(e) {
    document.getElementById(e).style.display = "none"
}
function GetQueryVariable(e) {
    for (var t = window.location.search.substring(1).split("&"), i = 0; i < t.length; i++) {
        var n = t[i].split("=");
        if (n[0] == e)
            return n[1]
    }
    return null
}
function ourConfirm(e, t, i, n, s) {
    return IE4 ? (i = 0 == i ? 0 : 2,
    n = 0 == n ? 0 : 1,
    retVal = MakeMsgBox(e, t, i, 4, n, s),
    retVal = 6 == retVal) : retVal = confirm(t),
    retVal
}
function changeClass(e, t) {
    identity = document.getElementById(e),
    identity.className = t
}
function toggleSearchForm(e, t) {
    null != (e = document.getElementById(e)) && (e.value = t,
    "hide" == t ? (changeClass("searchform", "hide"),
    changeClass("expandlink", "show"),
    changeClass("collapselink", "hide")) : (changeClass("searchform", "show"),
    changeClass("expandlink", "hide"),
    changeClass("collapselink", "show")))
}
function addLoadEvent(e) {
    var t = window.onload;
    "function" != typeof window.onload ? window.onload = e : window.onload = function() {
        t(),
        e()
    }
}
function UnfreezeScreen() {
    var e = document.getElementById("FreezePane")
      , t = document.getElementById("SavingLabel");
    e && (e.className = "FreezePaneOff"),
    t && (t.style.display = "none")
}
function FreezeScreen(e) {
    var t = !0;
    if ("undefined" != typeof Page_Validators)
        for (var i = 0; i <= Page_Validators.length - 1 && (CustomValidatorValidate(Page_Validators[i]),
        (null != e || null != Page_Validators[i].validationGroup) && e != Page_Validators[i].validationGroup || (t = Page_Validators[i].isvalid)); i++)
            ;
    t && ShowFreezer()
}
function ShowFreezer() {
    scroll(0, 0),
    $("#FreezePane").addClass("FreezePaneOn"),
    $("#SavingLabel").show()
}
function FreezeScreenTimer() {
    FreezeScreen(),
    window.setTimeout((function() {
        CheckStatus()
    }
    ), 1e3)
}
function CheckStatus() {
    "complete" === document.readyState || "interactive" === document.readyState ? UnfreezeScreen() : window.setTimeout((function() {
        CheckStatus()
    }
    ), 1e3)
}
function ClearErrorMessages() {
    document.getElementById("MessageLabel") && (document.getElementById("MessageLabel").style.display = "none")
}
function SetFreezeLabel(e) {
    document.getElementById("SavingLabel").innerHTML = e
}
function ToggleTranslations(e, t, i) {
    "hide" == document.getElementById(e).className ? (document.getElementById(t).className = "show",
    document.getElementById(i).className = "hide",
    document.getElementById(e).className = "show") : (document.getElementById(t).className = "hide",
    document.getElementById(i).className = "show",
    document.getElementById(e).className = "hide")
}
function SetFreezeLabelDynamic(e) {
    $("#SavingLabel").exists() || $("body").append('<div class="legacy-page"><div id="FreezePane" class="FreezePaneOff"><span id="SavingLabel" style="display: none" /></div></div>'),
    $("#SavingLabel").text(e)
}
function CustomValidatorValidate(e) {
    e.isvalid = !0,
    void 0 !== e.enabled && 0 == e.enabled || "function" == typeof e.evaluationfunction && (e.isvalid = e.evaluationfunction(e))
}
function IsNumeric(e) {
    var t, n = !0;
    for ("" == e && (n = !1),
    i = 0; i < e.length && 1 == n; i++)
        t = e.charAt(i),
        -1 == "0123456789.".indexOf(t) && (n = !1);
    return n
}
function GetInnerText(e) {
    return null != e.innerText ? e.innerText : e.textContent
}
function SetInnerText(e, t) {
    null != e.innerText ? e.innerText = t : e.textContent = t
}
function GetForm() {
    var e = document.ePowerPage;
    return null == e && (e = document.forms.ePowerPage),
    e
}
function CopyToPlainText(e, t) {
    var i = document.getElementById(e)
      , n = $find(t);
    i.value = n.get_html()
}
function EnterKeyDown(e, t) {
    13 == (t || window.event).keyCode && ($("form").bind("keydown", (function(e) {
        return !1
    }
    )),
    $("form").bind("keypress", (function(e) {
        return !1
    }
    )),
    $("form").bind("keyup", (function(e) {
        return !1
    }
    )),
    __doPostBack(e, ""))
}
function getInternetExplorerVersion() {
    var e = -1;
    if ("Microsoft Internet Explorer" == navigator.appName) {
        var t = navigator.userAgent;
        null != new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(t) && (e = parseFloat(RegExp.$1))
    }
    return e
}
function expandPMMenuItem(e, t) {
    var i = $(e).parent();
    return i.hasClass("selectedactivedocumentsleftmenu") ? ("undefined" == typeof baseUrl ? i.find("img.doc").attr("src", "images/rightArrow.png") : i.find("img.doc").attr("src", baseUrl + "/images/rightArrow.png"),
    i.attr("class", "node1 activedocumentsleftmenu"),
    $("ul#doc" + t).attr("class", "node2 closed")) : ("undefined" == typeof baseUrl ? i.find("img.doc").attr("src", "images/downArrow.png") : i.find("img.doc").attr("src", baseUrl + "/images/downArrow.png"),
    i.attr("class", "node1 selectedactivedocumentsleftmenu"),
    $("ul#doc" + t).attr("class", "node2 open")),
    !1
}
function getParameterByName(e) {
    e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(window.location.search);
    return null == t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
}
function CloseActionConfirmationOverlay(e, t) {
    $(e).closest(".overlay").hideOverlay(),
    SetFreezeLabelDynamic(t),
    FreezeScreen()
}
function SanitizeInput(e) {
    return "" != e && (e = e.replace(new RegExp("[<>]+","g"), "")),
    e
}
function PostAntiforgeryLink(e) {
    var t = $("#ePowerMenu");
    t.exists() || (t = $("#AjaxAntiForgeryToken"));
    var i = $('input[name="__RequestVerificationToken"]', t).val();
    $.ajax({
        url: e,
        type: "POST",
        data: {
            __RequestVerificationToken: i
        },
        success: function(e) {
            null != e.redirect ? window.location = e.redirect : null != e.ErrorMessage && $("#content").prepend('<div class="error"><span>' + e.ErrorMessage + "</span></div>")
        }
    })
}
var _originalFireDefaultButton = window.WebForm_FireDefaultButton;
function MyFireDefaultButton(e, t) {
    var i = e.target || e.srcElement;
    return !!(13 != e.keyCode || i && "textarea" == i.tagName.toLowerCase()) || _originalFireDefaultButton.apply(this, arguments)
}
function ClientChangedHandler(e, t) {
    void 0 !== setSaveChanges && setSaveChanges(1)
}
function OnSelectionChangedHandler(e, t) {
    e.attachEventHandler("onkeyup", (function(t) {
        void 0 !== setSaveChanges && (setSaveChanges(1),
        (0,
        e._saveContentDelegate)())
    }
    ))
}
function HasSelectedItems(e, t) {
    for (var i = !1, n = $find(e), s = 0; s < n.get_masterTableView().get_dataItems().length; s++) {
        var o = n.get_masterTableView().get_dataItems()[s].get_cell(t);
        if (null != o)
            for (var a = 0; a < o.childNodes.length; a++)
                if ("checkbox" == o.childNodes[a].type) {
                    i = o.childNodes[a].checked;
                    break
                }
        if (i)
            break
    }
    return i
}
function HasDetailTableSelectedItems(e, t) {
    for (var i = !1, n = $find(e), s = 0; s < n.get_detailTables().length; s++)
        for (var o = 0; o < n.get_detailTables()[s].get_dataItems().length; o++) {
            var a = n.get_detailTables()[s].get_dataItems()[o].get_cell(t);
            if (null != a)
                for (var r = 0; r < a.childNodes.length; r++)
                    if ("checkbox" == a.childNodes[r].type) {
                        i = a.childNodes[r].checked;
                        break
                    }
            if (i)
                return !0
        }
    return !1
}
function GetSelectedIds(e, t) {
    var i = ""
      , n = $find(e).get_masterTableView();
    null == t && (t = "ID");
    for (var s = 0; s < n.get_dataItems().length; s++) {
        var o = n.get_dataItems()[s].get_cell("TemplateColumnCheckbox");
        if (null != o) {
            for (var a = null, r = 0; r < o.childNodes.length; r++)
                if ("checkbox" == o.childNodes[r].type) {
                    a = o.childNodes[r];
                    break
                }
            if (null != a && a.checked) {
                var l = n.get_dataItems()[s].get_cell(t).innerHTML;
                null != l && (i = "" == i ? l : i + "," + l)
            }
        }
    }
    return i
}
function GetSelectedIdsFromTree(e) {
    return GetSelectedIdsFromChildren($find(e).get_nodes())
}
function GetSelectedIdsFromChildren(e) {
    for (var t = "", i = "", n = 0; n < e.get_count(); n++)
        e.getNode(n).get_checked() && (t = "" == t ? e.getNode(n).get_value() : t + "," + e.getNode(n).get_value()),
        e.getNode(n).get_nodes().get_count() > 0 && (i = GetSelectedIdsFromChildren(e.getNode(n).get_nodes()),
        "" == t ? t = i : "" != i && (t = t + "," + i));
    return t
}
function setSelectedTab(e, t) {
    isNaN(t) || $find(e).get_allTabs()[Number(t)].select()
}
function GetRadWindow() {
    var e = null;
    return window.radWindow ? e = window.radWindow : window.frameElement.radWindow && (e = window.frameElement.radWindow),
    e
}
function GetRadWindowById(e) {
    var t, i;
    return $("div[id$='RadWindowManager']").each((function() {
        if (t = $find(jQuery(this)[0].id),
        null != (i = t.getWindowByName(e)))
            return !1
    }
    )),
    i
}
function AskConfirmationWindow(e, t, i, n) {
    var s = GetRadWindowById(e);
    s.set_title(t);
    var o = {};
    o.LabelName = i,
    o.Control = n,
    s.argument = o,
    s.show()
}
function AskCompetenceCategoryTreeConfirmationWindow(e, t, i, n) {
    var s = GetRadWindowById("AskConfirmationRadWindow");
    s.set_title(e);
    var o = {};
    o.LabelName = t,
    o.Action = i,
    o.ID = n,
    s.argument = o,
    s.show()
}
function AskConfirmation(e, t, i) {
    AskConfirmationWindow("AskConfirmationRadWindow", e, t, i)
}
function AskPersonConfirmation(e, t, i) {
    AskConfirmationWindow("AskPersonConfirmationRadWindow", e, t, i)
}
function AskCustomConfirmation(e, t, i, n) {
    AskConfirmationWindow(e, t, i, n)
}
function AskConfirmationCallback(e, t) {
    if ("Yes" == t.get_argument()) {
        var i = e.argument.Control;
        __doPostBack(i, "")
    } else
        UnfreezeScreen()
}
function AskPersonConfirmationCallback(e, t) {
    var i = e.argument.Control;
    "Yes" == t.get_argument() ? __doPostBack(i, "") : __doPostBack(i, "clear")
}
function AskArchivedQuestionCallback(e, t) {
    var i = e.argument.Control
      , n = "0";
    "Yes" == t.get_argument() && (n = "1"),
    __doPostBack(i, n)
}
function AskQuestionCallback(e, t) {
    var i = e.argument.Control
      , n = "0";
    "Yes" == t.get_argument() && (n = "1"),
    __doPostBack(i, n)
}
function AskConfirmationCallbackWithoutSaveChanges(e, t) {
    if ("Yes" == t.get_argument()) {
        setSaveChanges(0);
        var i = e.argument.Control;
        __doPostBack(i, "")
    } else
        UnfreezeScreen()
}
function PickList(e) {
    GetRadWindowById(e).show()
}
function PickListUrl(e, t) {
    var i = GetRadWindowById(e);
    i.setUrl(t),
    i.show()
}
function PickListUrlFromField(e, t, i) {
    var n = t
      , s = document.getElementById(i);
    "" != s.value && (n = n + "&IDs=" + s.value),
    PickListUrl(e, n)
}
function ShowTranslation() {
    GetRadWindowById("TranslationWindow").show()
}
function confirmation(e, t) {
    var i = GetRadWindowById("ConfirmationRadWindow");
    i.set_title(e),
    i.argument = t,
    i.show()
}
function ConfirmationCallback(e, t) {
    findhides()
}
function ShowReportValidationLog(e) {
    var t = GetRadWindowById("ReportValidationLogRadWindow");
    t.set_title(e),
    t.show()
}
function ShowDocumentValidationErrors(e) {
    var t = GetRadWindowById("DocumentValidationWindow");
    t.set_title(e),
    t.show()
}
function ReturnSelectedIDs(e) {
    var t = GetRadWindow()
      , i = {
        OneValue: !0
    };
    i.IDs = e,
    t.close(i)
}
function ReturnSelectedIDsAndCount(e) {
    var t = GetRadWindow()
      , i = {
        OneValue: !1
    };
    i.IDs = e,
    i.Count = e.split(",").length,
    t.close(i)
}
function ValidateDate(e, t) {
    var i = document.getElementById(e.id.replace("CustomValidator", "dateInput"));
    null != i.className && i.className.indexOf("riError") >= 0 ? t.IsValid = !1 : t.IsValid = !0
}
function SelectSingleItem(e, t) {
    var i = GetRadWindow()
      , n = {
        OneValue: !0
    };
    n.ID = e,
    n.Name = t,
    i.close(n)
}
function PostBackSelectedIndexChanged(e, t) {
    void 0 !== setSaveChanges && (setSaveChanges("0"),
    setCookie("ddl_dirtyset", "1", null))
}
function PostBackSelectedIndexChangedNoSaveChanges(e, t) {
    void 0 !== setSaveChanges && (setSaveChanges("0"),
    setCookie("ddl_dirtyset", "0", null))
}
function SelectedIndexChanged(e, t) {
    void 0 !== setSaveChanges && setSaveChanges("1")
}
function SelectedIndexChangedNoSaveChanges(e, t) {
    void 0 !== setSaveChanges && setSaveChanges("0")
}
function SaveSelectedNodes(e, t) {
    var i, n = t.get_node(), s = "";
    for (i = 0; i < n.get_treeView().get_allNodes().length; i++)
        null != n.get_treeView().get_allNodes()[i].get_parent().get_parent() && n.get_treeView().get_allNodes()[i].get_expanded() && (s += n.get_treeView().get_allNodes()[i].get_value() + "*");
    deleteCookie("mytreestate"),
    setCookie("mytreestate", s)
}
function CloseWindow() {
    GetRadWindow().close()
}
function RefreshParentPage() {
    var e = GetRadWindow();
    if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
        var t = e.BrowserWindow.document.createElement("a");
        t.href = e.BrowserWindow.location.href,
        e.BrowserWindow.document.body.appendChild(t),
        t.click()
    } else
        e.BrowserWindow.location.href = e.BrowserWindow.location.href
}
function UpdateAllChildren(e, t) {
    var i;
    for (i = 0; i < e.get_count(); i++)
        e.getNode(i).get_enabled() && (t ? e.getNode(i).check() : e.getNode(i).uncheck(),
        e.getNode(i).get_nodes().get_count() > 0 && UpdateAllChildren(e.getNode(i).get_nodes(), t))
}
function AfterCheck(e, t) {
    var i = t.get_node();
    UpdateAllChildren(i.get_nodes(), i.get_checked()),
    setSaveChanges(1)
}
function AfterClick(e, t) {
    var i = t.get_node();
    i.get_enabled() && (i.get_checked() ? i.uncheck() : i.check(),
    AfterCheck(i, t))
}
function CopyToEditor(e, t) {
    var i = document.getElementById(t);
    $find(e).set_html(i.value)
}
function ShowWindow(e, t) {
    var i = GetRadWindowById(e);
    i.set_title(t),
    i.show()
}
function PreventDuplicateAddingInAutocomplete(e, t) {
    for (var i = e.get_entries(), n = i.get_count(), s = 0; s < n; s++)
        if (i.getEntry(s).get_value() == t.get_entry().get_value())
            return void t.set_cancel(!0)
}
function CheckRootNode(e, t) {
    e.get_nodes().getNode(0).get_checkBoxElement().click(),
    void 0 !== setSaveChanges && (setSaveChanges("0"),
    deleteCookie("ddl_dirtyset"))
}
_originalFireDefaultButton && (window.WebForm_FireDefaultButton = window.MyFireDefaultButton),
"undefined" != typeof Sys && Sys.Application.notifyScriptLoaded();
var saveChangesObjectID = "__SAVECHANGES"
  , evaluationFormChanged = !1
  , errorMessage = "";
function setSaveChanges(e) {
    var t = document.getElementById(saveChangesObjectID);
    null != t && (t.value = e)
}
function getSaveChanges() {
    var e = document.getElementById(saveChangesObjectID)
      , t = null;
    return null != e && (t = e.value),
    t
}
function SaveChangesValueChanged() {
    void 0 !== setSaveChanges && setSaveChanges("1")
}
window.onbeforeunload = onBeforeUnload_Handler;
var saveButton, isValid = !0;
function onBeforeUnload_Handler() {
    return validateAndSavePage()
}
function ourPostBack(e, t) {
    var i = document.getElementById("__REFRESHSTAMP");
    if (void 0 !== i) {
        var n = Number(i.value);
        n++,
        i.value = n
    }
    var s = GetForm();
    s.__EVENTTARGET.value = e,
    s.__EVENTARGUMENT.value = t,
    setTimeout((function() {
        GetForm().submit()
    }
    ), 0)
}
function validateAndSavePage(e) {
    if (1 == getSaveChanges() && (setSaveChanges(0),
    "undefined" != typeof saveChangesText)) {
        if (navigator.userAgent.toLowerCase().match(/chrome|firefox/))
            return saveChangesText;
        if (ourConfirm("", saveChangesText, 0, 0, 0) && (e ? saveButton = e : (saveButton = getCookie("saveButton"),
        deleteCookie("saveButton")),
        saveButton)) {
            var t = '[name="' + saveButton + '"]';
            if ("true" == $(t).attr("data-ajaxButton"))
                return void $(t).click();
            if (Validate(),
            isValid) {
                var i = "";
                return i = getCookie("selectedTabIndex") ? "" : "doPostBack",
                void ourPostBack(saveButton, i)
            }
            setCookie("SaveChangesNotSaved", notSavedAlert, 1)
        }
    }
}
function Validate() {
    if ("undefined" != typeof Page_Validators)
        for (var e = 0; e <= Page_Validators.length - 1; e++)
            if (CustomValidatorValidate(Page_Validators[e]),
            !(isValid = Page_Validators[e].isvalid)) {
                SetErrorMessage(Page_Validators[e].errormessage);
                break
            }
}
function EvaluationChangedHandler() {
    evaluationFormChanged = !0
}
function IsEvaluationChanged() {
    return evaluationFormChanged
}
function SetErrorMessage(e) {
    document.getElementById("MessageLabel") && (document.getElementById("MessageLabel").innerText = e,
    document.getElementById("MessageLabel").style.display = "block")
}
function popupwindow(e, t, i, n, s, o) {
    void 0 !== n && "" != n || (n = "EPOWER");
    var a = n;
    void 0 === s && (s = 0),
    void 0 === o && (o = 0),
    params = "status=yes,location=no,scrollbars=yes,menubar=no,toolbars=no,resizable=no,width=" + t + ",height=" + i,
    void 0 !== s && (params = params + ",screenX=" + s + ",top=" + s),
    void 0 !== o && (params = params + ",screenY=" + o + ",left=" + o),
    window_handle = window.open(e, a, params),
    window_handle.focus()
}
function centerpopupwindow(e, t, i, n) {
    void 0 !== n && "" != n || (n = "EPOWER");
    var s = n
      , o = parseInt(screen.availWidth / 2 - t / 2)
      , a = parseInt(screen.availHeight / 2 - i / 2);
    params = "status=no,location=no,scrollbars=no,menubar=no,toolbars=no,resizable=no,width=" + t + ",height=" + i,
    void 0 !== a && (params = params + ",screenX=" + a + ",top=" + a),
    void 0 !== o && (params = params + ",screenY=" + o + ",left=" + o),
    window.open(e, s, params)
}
function popupfullscreen(e, t) {
    void 0 !== t && "" != t || (t = "EPOWER");
    var i = t
      , n = "status=yes, location=no, menubar=yes, toolbar=no, resizable=yes, top=0, left=0, width=" + screen.width + ", height=" + screen.height;
    window_handle = window.open(e, i, n),
    window_handle.focus()
}
var spotLightObject, spotLightFadeSpeed = 3e3, spotLightObjectID = "spotlight", started = !1;
function showClientSideSpotLight(e) {
    var t = getCookie("SaveChangesNotSaved");
    t && (spotLightObject = document.getElementById(spotLightObjectID)) && (currentclass = spotLightObject.className,
    newclass = currentclass.replace("spotlight", "spotlightAlert"),
    spotLightObject.className = newclass,
    e = t,
    deleteCookie("SaveChangesNotSaved")),
    e && showSpotLight(e)
}
function showClientSideErrorSpotLight(e) {
    e && ((spotLightObject = document.getElementById(spotLightObjectID)) && (currentclass = spotLightObject.className,
    newclass = currentclass.replace("spotlight", "spotlightAlert"),
    spotLightObject.className = newclass),
    showSpotLight(e))
}
function showSpotLight(e) {
    e && (started ? setTimeout((function() {
        showSpotLight(e)
    }
    ), 2 * spotLightFadeSpeed) : (started = !0,
    (spotLightObject = document.getElementById(spotLightObjectID)) && (spotLightObject.innerHTML = e,
    currentclass = spotLightObject.className,
    newclass = currentclass.replace("hide", "show"),
    spotLightObject.className = newclass,
    opacity(spotLightObjectID, 0, 100, spotLightFadeSpeed / 2),
    setTimeout((function() {
        opacity(spotLightObjectID, 100, 0, spotLightFadeSpeed / 2)
    }
    ), spotLightFadeSpeed / 2))))
}
function opacity(e, t, n, s) {
    var o = Math.round(s / 100)
      , a = 0;
    if (t > n)
        for (i = t; i >= n; i--)
            setTimeout((function() {
                changeOpac(i, e, !0)
            }
            ), a * o),
            a++;
    else if (t < n)
        for (i = t; i <= n; i++)
            setTimeout((function() {
                changeOpac(i, e, !1)
            }
            ), a * o),
            a++
}
function changeOpac(e, t, i) {
    var n = document.getElementById(t);
    n.style.opacity = e / 100,
    n.style.MozOpacity = e / 100,
    n.style.KhtmlOpacity = e / 100,
    n.style.filter = "alpha(opacity=" + e + ")",
    0 == e && i && (started = !1,
    n.className = n.className.replace("show", "hide"))
}
function shiftOpacity(e, t) {
    0 == document.getElementById(e).style.opacity ? opacity(e, 0, 100, t) : opacity(e, 100, 0, t)
}
function currentOpac(e, t, i) {
    var n = 100;
    document.getElementById(e).style.opacity < 100 && (n = 100 * document.getElementById(e).style.opacity),
    opacity(e, n, t, i)
}
