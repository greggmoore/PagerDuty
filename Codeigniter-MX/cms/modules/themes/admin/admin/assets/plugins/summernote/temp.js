/*! Summernote v0.6.16 | (c) 2013-2015 Alan Hong and other contributors | MIT license */ ! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(window.jQuery)
}(function(a) {
    Array.prototype.reduce || (Array.prototype.reduce = function(a) {
        var b, c = Object(this),
            d = c.length >>> 0,
            e = 0;
        if (2 === arguments.length) b = arguments[1];
        else {
            for (; d > e && !(e in c);) e++;
            if (e >= d) throw new TypeError("Reduce of empty array with no initial value");
            b = c[e++]
        }
        for (; d > e; e++) e in c && (b = a(b, c[e], e, c));
        return b
    }), "function" != typeof Array.prototype.filter && (Array.prototype.filter = function(a) {
        for (var b = Object(this), c = b.length >>> 0, d = [], e = arguments.length >= 2 ? arguments[1] : void 0, f = 0; c > f; f++)
            if (f in b) {
                var g = b[f];
                a.call(e, g, f, b) && d.push(g)
            }
        return d
    }), Array.prototype.map || (Array.prototype.map = function(a, b) {
        var c, d, e;
        if (null === this) throw new TypeError(" this is null or not defined");
        var f = Object(this),
            g = f.length >>> 0;
        if ("function" != typeof a) throw new TypeError(a + " is not a function");
        for (arguments.length > 1 && (c = b), d = new Array(g), e = 0; g > e;) {
            var h, i;
            e in f && (h = f[e], i = a.call(c, h, e, f), d[e] = i), e++
        }
        return d
    });
    var b, c = "function" == typeof define && define.amd,
        d = function(b) {
            var c = "Comic Sans MS" === b ? "Courier New" : "Comic Sans MS",
                d = a("<div>").css({
                    position: "absolute",
                    left: "-9999px",
                    top: "-9999px",
                    fontSize: "200px"
                }).text("mmmmmmmmmwwwwwww").appendTo(document.body),
                e = d.css("fontFamily", c).width(),
                f = d.css("fontFamily", b + "," + c).width();
            return d.remove(), e !== f
        },
        e = navigator.userAgent,
        f = /MSIE|Trident/i.test(e);
    if (f) {
        var g = /MSIE (\d+[.]\d+)/.exec(e);
        g && (b = parseFloat(g[1])), g = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(e), g && (b = parseFloat(g[1]))
    }
    var h, i = {
            isMac: navigator.appVersion.indexOf("Mac") > -1,
            isMSIE: f,
            isFF: /firefox/i.test(e),
            isWebkit: /webkit/i.test(e),
            isSafari: /safari/i.test(e),
            browserVersion: b,
            jqueryVersion: parseFloat(a.fn.jquery),
            isSupportAmd: c,
            hasCodeMirror: c ? require.specified("CodeMirror") : !!window.CodeMirror,
            isFontInstalled: d,
            isW3CRangeSupport: !!document.createRange
        },
        j = function() {
            var b = function(a) {
                    return function(b) {
                        return a === b
                    }
                },
                c = function(a, b) {
                    return a === b
                },
                d = function(a) {
                    return function(b, c) {
                        return b[a] === c[a]
                    }
                },
                e = function() {
                    return !0
                },
                f = function() {
                    return !1
                },
                g = function(a) {
                    return function() {
                        return !a.apply(a, arguments)
                    }
                },
                h = function(a, b) {
                    return function(c) {
                        return a(c) && b(c)
                    }
                },
                i = function(a) {
                    return a
                },
                j = 0,
                k = function(a) {
                    var b = ++j + "";
                    return a ? a + b : b
                },
                l = function(b) {
                    var c = a(document);
                    return {
                        top: b.top + c.scrollTop(),
                        left: b.left + c.scrollLeft(),
                        width: b.right - b.left,
                        height: b.bottom - b.top
                    }
                },
                m = function(a) {
                    var b = {};
                    for (var c in a) a.hasOwnProperty(c) && (b[a[c]] = c);
                    return b
                },
                n = function(a, b) {
                    return b = b || "", b + a.split(".").map(function(a) {
                        return a.substring(0, 1).toUpperCase() + a.substring(1)
                    }).join("")
                };
            return {
                eq: b,
                eq2: c,
                peq2: d,
                ok: e,
                fail: f,
                self: i,
                not: g,
                and: h,
                uniqueId: k,
                rect2bnd: l,
                invertObject: m,
                namespaceToCamel: n
            }
        }(),
        k = function() {
            var b = function(a) {
                    return a[0]
                },
                c = function(a) {
                    return a[a.length - 1]
                },
                d = function(a) {
                    return a.slice(0, a.length - 1)
                },
                e = function(a) {
                    return a.slice(1)
                },
                f = function(a, b) {
                    for (var c = 0, d = a.length; d > c; c++) {
                        var e = a[c];
                        if (b(e)) return e
                    }
                },
                g = function(a, b) {
                    for (var c = 0, d = a.length; d > c; c++)
                        if (!b(a[c])) return !1;
                    return !0
                },
                h = function(b, c) {
                    return a.inArray(c, b)
                },
                i = function(a, b) {
                    return -1 !== h(a, b)
                },
                k = function(a, b) {
                    return b = b || j.self, a.reduce(function(a, c) {
                        return a + b(c)
                    }, 0)
                },
                l = function(a) {
                    for (var b = [], c = -1, d = a.length; ++c < d;) b[c] = a[c];
                    return b
                },
                m = function(a, d) {
                    if (!a.length) return [];
                    var f = e(a);
                    return f.reduce(function(a, b) {
                        var e = c(a);
                        return d(c(e), b) ? e[e.length] = b : a[a.length] = [b], a
                    }, [
                        [b(a)]
                    ])
                },
                n = function(a) {
                    for (var b = [], c = 0, d = a.length; d > c; c++) a[c] && b.push(a[c]);
                    return b
                },
                o = function(a) {
                    for (var b = [], c = 0, d = a.length; d > c; c++) i(b, a[c]) || b.push(a[c]);
                    return b
                },
                p = function(a, b) {
                    var c = h(a, b);
                    return -1 === c ? null : a[c + 1]
                },
                q = function(a, b) {
                    var c = h(a, b);
                    return -1 === c ? null : a[c - 1]
                };
            return {
                head: b,
                last: c,
                initial: d,
                tail: e,
                prev: q,
                next: p,
                find: f,
                contains: i,
                all: g,
                sum: k,
                from: l,
                clusterBy: m,
                compact: n,
                unique: o
            }
        }(),
        l = String.fromCharCode(160),
        m = "\ufeff",
        n = function() {
            var b = function(b) {
                    return b && a(b).hasClass("note-editable")
                },
                c = function(b) {
                    return b && a(b).hasClass("note-control-sizing")
                },
                d = function(b) {
                    var c;
                    if (b.hasClass("note-air-editor")) {
                        var d = k.last(b.attr("id").split("-"));
                        return c = function(b) {
                            return function() {
                                return a(b + d)
                            }
                        }, {
                            editor: function() {
                                return b
                            },
                            holder: function() {
                                return b.data("holder")
                            },
                            editable: function() {
                                return b
                            },
                            popover: c("#note-popover-"),
                            handle: c("#note-handle-"),
                            dialog: c("#note-dialog-")
                        }
                    }
                    c = function(a, c) {
                        return c = c || b,
                            function() {
                                return c.find(a)
                            }
                    };
                    var e = b.data("options"),
                        f = e && e.dialogsInBody ? a(document.body) : null;
                    return {
                        editor: function() {
                            return b
                        },
                        holder: function() {
                            return b.data("holder")
                        },
                        dropzone: c(".note-dropzone"),
                        toolbar: c(".note-toolbar"),
                        editable: c(".note-editable"),
                        codable: c(".note-codable"),
                        statusbar: c(".note-statusbar"),
                        popover: c(".note-popover"),
                        handle: c(".note-handle"),
                        dialog: c(".note-dialog", f)
                    }
                },
                e = function(b) {
                    var c = a(b).closest(".note-editor, .note-air-editor, .note-air-layout");
                    if (!c.length) return null;
                    var e;
                    return e = c.is(".note-editor, .note-air-editor") ? c : a("#note-editor-" + k.last(c.attr("id").split("-"))), d(e)
                },
                f = function(a) {
                    return a = a.toUpperCase(),
                        function(b) {
                            return b && b.nodeName.toUpperCase() === a
                        }
                },
                g = function(a) {
                    return a && 3 === a.nodeType
                },
                h = function(a) {
                    return a && /^BR|^IMG|^HR|^IFRAME|^BUTTON/.test(a.nodeName.toUpperCase())
                },
                o = function(a) {
                    return b(a) ? !1 : a && /^DIV|^P|^LI|^H[1-7]/.test(a.nodeName.toUpperCase())
                },
                p = f("LI"),
                q = function(a) {
                    return o(a) && !p(a)
                },
                r = f("TABLE"),
                s = function(a) {
                    return !(x(a) || t(a) || u(a) || o(a) || r(a) || w(a))
                },
                t = function(a) {
                    return a && /^UL|^OL/.test(a.nodeName.toUpperCase())
                },
                u = f("HR"),
                v = function(a) {
                    return a && /^TD|^TH/.test(a.nodeName.toUpperCase())
                },
                w = f("BLOCKQUOTE"),
                x = function(a) {
                    return v(a) || w(a) || b(a)
                },
                y = f("A"),
                z = function(a) {
                    return s(a) && !!I(a, o)
                },
                A = function(a) {
                    return s(a) && !I(a, o)
                },
                B = f("BODY"),
                C = function(a, b) {
                    return a.nextSibling === b || a.previousSibling === b
                },
                D = function(a, b) {
                    b = b || j.ok;
                    var c = [];
                    return a.previousSibling && b(a.previousSibling) && c.push(a.previousSibling), c.push(a), a.nextSibling && b(a.nextSibling) && c.push(a.nextSibling), c
                },
                E = i.isMSIE && i.browserVersion < 11 ? "&nbsp;" : "<br>",
                F = function(a) {
                    return g(a) ? a.nodeValue.length : a.childNodes.length
                },
                G = function(a) {
                    var b = F(a);
                    return 0 === b ? !0 : g(a) || 1 !== b || a.innerHTML !== E ? k.all(a.childNodes, g) && "" === a.innerHTML ? !0 : !1 : !0
                },
                H = function(a) {
                    h(a) || F(a) || (a.innerHTML = E)
                },
                I = function(a, c) {
                    for (; a;) {
                        if (c(a)) return a;
                        if (b(a)) break;
                        a = a.parentNode
                    }
                    return null
                },
                J = function(a, c) {
                    for (a = a.parentNode; a && 1 === F(a);) {
                        if (c(a)) return a;
                        if (b(a)) break;
                        a = a.parentNode
                    }
                    return null
                },
                K = function(a, c) {
                    c = c || j.fail;
                    var d = [];
                    return I(a, function(a) {
                        return b(a) || d.push(a), c(a)
                    }), d
                },
                L = function(a, b) {
                    var c = K(a);
                    return k.last(c.filter(b))
                },
                M = function(b, c) {
                    for (var d = K(b), e = c; e; e = e.parentNode)
                        if (a.inArray(e, d) > -1) return e;
                    return null
                },
                N = function(a, b) {
                    b = b || j.fail;
                    for (var c = []; a && !b(a);) c.push(a), a = a.previousSibling;
                    return c
                },
                O = function(a, b) {
                    b = b || j.fail;
                    for (var c = []; a && !b(a);) c.push(a), a = a.nextSibling;
                    return c
                },
                P = function(a, b) {
                    var c = [];
                    return b = b || j.ok,
                        function d(e) {
                            a !== e && b(e) && c.push(e);
                            for (var f = 0, g = e.childNodes.length; g > f; f++) d(e.childNodes[f])
                        }(a), c
                },
                Q = function(b, c) {
                    var d = b.parentNode,
                        e = a("<" + c + ">")[0];
                    return d.insertBefore(e, b), e.appendChild(b), e
                },
                R = function(a, b) {
                    var c = b.nextSibling,
                        d = b.parentNode;
                    return c ? d.insertBefore(a, c) : d.appendChild(a), a
                },
                S = function(b, c) {
                    return a.each(c, function(a, c) {
                        b.appendChild(c)
                    }), b
                },
                T = function(a) {
                    return 0 === a.offset
                },
                U = function(a) {
                    return a.offset === F(a.node)
                },
                V = function(a) {
                    return T(a) || U(a)
                },
                W = function(a, b) {
                    for (; a && a !== b;) {
                        if (0 !== $(a)) return !1;
                        a = a.parentNode
                    }
                    return !0
                },
                X = function(a, b) {
                    for (; a && a !== b;) {
                        if ($(a) !== F(a.parentNode) - 1) return !1;
                        a = a.parentNode
                    }
                    return !0
                },
                Y = function(a, b) {
                    return T(a) && W(a.node, b)
                },
                Z = function(a, b) {
                    return U(a) && X(a.node, b)
                },
                $ = function(a) {
                    for (var b = 0; a = a.previousSibling;) b += 1;
                    return b
                },
                _ = function(a) {
                    return !!(a && a.childNodes && a.childNodes.length)
                },
                aa = function(a, c) {
                    var d, e;
                    if (0 === a.offset) {
                        if (b(a.node)) return null;
                        d = a.node.parentNode, e = $(a.node)
                    } else _(a.node) ? (d = a.node.childNodes[a.offset - 1], e = F(d)) : (d = a.node, e = c ? 0 : a.offset - 1);
                    return {
                        node: d,
                        offset: e
                    }
                },
                ba = function(a, c) {
                    var d, e;
                    if (F(a.node) === a.offset) {
                        if (b(a.node)) return null;
                        d = a.node.parentNode, e = $(a.node) + 1
                    } else _(a.node) ? (d = a.node.childNodes[a.offset], e = 0) : (d = a.node, e = c ? F(a.node) : a.offset + 1);
                    return {
                        node: d,
                        offset: e
                    }
                },
                ca = function(a, b) {
                    return a.node === b.node && a.offset === b.offset
                },
                da = function(a) {
                    if (g(a.node) || !_(a.node) || G(a.node)) return !0;
                    var b = a.node.childNodes[a.offset - 1],
                        c = a.node.childNodes[a.offset];
                    return b && !h(b) || c && !h(c) ? !1 : !0
                },
                ea = function(a, b) {
                    for (; a;) {
                        if (b(a)) return a;
                        a = aa(a)
                    }
                    return null
                },
                fa = function(a, b) {
                    for (; a;) {
                        if (b(a)) return a;
                        a = ba(a)
                    }
                    return null
                },
                ga = function(a) {
                    if (!g(a.node)) return !1;
                    var b = a.node.nodeValue.charAt(a.offset - 1);
                    return b && " " !== b && b !== l
                },
                ha = function(a, b, c, d) {
                    for (var e = a; e && (c(e), !ca(e, b));) {
                        var f = d && a.node !== e.node && b.node !== e.node;
                        e = ba(e, f)
                    }
                },
                ia = function(a, b) {
                    var c = K(b, j.eq(a));
                    return c.map($).reverse()
                },
                ja = function(a, b) {
                    for (var c = a, d = 0, e = b.length; e > d; d++) c = c.childNodes.length <= b[d] ? c.childNodes[c.childNodes.length - 1] : c.childNodes[b[d]];
                    return c
                },
                ka = function(a, b) {
                    var c = b && b.isSkipPaddingBlankHTML,
                        d = b && b.isNotSplitEdgePoint;
                    if (V(a) && (g(a.node) || d)) {
                        if (T(a)) return a.node;
                        if (U(a)) return a.node.nextSibling
                    }
                    if (g(a.node)) return a.node.splitText(a.offset);
                    var e = a.node.childNodes[a.offset],
                        f = R(a.node.cloneNode(!1), a.node);
                    return S(f, O(e)), c || (H(a.node), H(f)), f
                },
                la = function(a, b, c) {
                    var d = K(b.node, j.eq(a));
                    return d.length ? 1 === d.length ? ka(b, c) : d.reduce(function(a, d) {
                        return a === b.node && (a = ka(b, c)), ka({
                            node: d,
                            offset: a ? n.position(a) : F(d)
                        }, c)
                    }) : null
                },
                ma = function(a, b) {
                    var c, d, e = b ? o : x,
                        f = K(a.node, e),
                        g = k.last(f) || a.node;
                    e(g) ? (c = f[f.length - 2], d = g) : (c = g, d = c.parentNode);
                    var h = c && la(c, a, {
                        isSkipPaddingBlankHTML: b,
                        isNotSplitEdgePoint: b
                    });
                    return h || d !== a.node || (h = a.node.childNodes[a.offset]), {
                        rightNode: h,
                        container: d
                    }
                },
                na = function(a) {
                    return document.createElement(a)
                },
                oa = function(a) {
                    return document.createTextNode(a)
                },
                pa = function(a, b) {
                    if (a && a.parentNode) {
                        if (a.removeNode) return a.removeNode(b);
                        var c = a.parentNode;
                        if (!b) {
                            var d, e, f = [];
                            for (d = 0, e = a.childNodes.length; e > d; d++) f.push(a.childNodes[d]);
                            for (d = 0, e = f.length; e > d; d++) c.insertBefore(f[d], a)
                        }
                        c.removeChild(a)
                    }
                },
                qa = function(a, c) {
                    for (; a && !b(a) && c(a);) {
                        var d = a.parentNode;
                        pa(a), a = d
                    }
                },
                ra = function(a, b) {
                    if (a.nodeName.toUpperCase() === b.toUpperCase()) return a;
                    var c = na(b);
                    return a.style.cssText && (c.style.cssText = a.style.cssText), S(c, k.from(a.childNodes)), R(c, a), pa(a), c
                },
                sa = f("TEXTAREA"),
                ta = function(a, b) {
                    var c = sa(a[0]) ? a.val() : a.html();
                    return b ? c.replace(/[\n\r]/g, "") : c
                },
                ua = function(b, c) {
                    var d = ta(b);
                    if (c) {
                        var e = /<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g;
                        d = d.replace(e, function(a, b, c) {
                            c = c.toUpperCase();
                            var d = /^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(c) && !!b,
                                e = /^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(c);
                            return a + (d || e ? "\n" : "")
                        }), d = a.trim(d)
                    }
                    return d
                };
            return {
                NBSP_CHAR: l,
                ZERO_WIDTH_NBSP_CHAR: m,
                blank: E,
                emptyPara: "<p>" + E + "</p>",
                makePredByNodeName: f,
                isEditable: b,
                isControlSizing: c,
                buildLayoutInfo: d,
                makeLayoutInfo: e,
                isText: g,
                isVoid: h,
                isPara: o,
                isPurePara: q,
                isInline: s,
                isBlock: j.not(s),
                isBodyInline: A,
                isBody: B,
                isParaInline: z,
                isList: t,
                isTable: r,
                isCell: v,
                isBlockquote: w,
                isBodyContainer: x,
                isAnchor: y,
                isDiv: f("DIV"),
                isLi: p,
                isBR: f("BR"),
                isSpan: f("SPAN"),
                isB: f("B"),
                isU: f("U"),
                isS: f("S"),
                isI: f("I"),
                isImg: f("IMG"),
                isTextarea: sa,
                isEmpty: G,
                isEmptyAnchor: j.and(y, G),
                isClosestSibling: C,
                withClosestSiblings: D,
                nodeLength: F,
                isLeftEdgePoint: T,
                isRightEdgePoint: U,
                isEdgePoint: V,
                isLeftEdgeOf: W,
                isRightEdgeOf: X,
                isLeftEdgePointOf: Y,
                isRightEdgePointOf: Z,
                prevPoint: aa,
                nextPoint: ba,
                isSamePoint: ca,
                isVisiblePoint: da,
                prevPointUntil: ea,
                nextPointUntil: fa,
                isCharPoint: ga,
                walkPoint: ha,
                ancestor: I,
                singleChildAncestor: J,
                listAncestor: K,
                lastAncestor: L,
                listNext: O,
                listPrev: N,
                listDescendant: P,
                commonAncestor: M,
                wrap: Q,
                insertAfter: R,
                appendChildNodes: S,
                position: $,
                hasChildren: _,
                makeOffsetPath: ia,
                fromOffsetPath: ja,
                splitTree: la,
                splitPoint: ma,
                create: na,
                createText: oa,
                remove: pa,
                removeWhile: qa,
                replace: ra,
                html: ua,
                value: ta
            }
        }(),
        o = function() {
            var b = function(a, b) {
                    var c, d, e = a.parentElement(),
                        f = document.body.createTextRange(),
                        g = k.from(e.childNodes);
                    for (c = 0; c < g.length; c++)
                        if (!n.isText(g[c])) {
                            if (f.moveToElementText(g[c]), f.compareEndPoints("StartToStart", a) >= 0) break;
                            d = g[c]
                        }
                    if (0 !== c && n.isText(g[c - 1])) {
                        var h = document.body.createTextRange(),
                            i = null;
                        h.moveToElementText(d || e), h.collapse(!d), i = d ? d.nextSibling : e.firstChild;
                        var j = a.duplicate();
                        j.setEndPoint("StartToStart", h);
                        for (var l = j.text.replace(/[\r\n]/g, "").length; l > i.nodeValue.length && i.nextSibling;) l -= i.nodeValue.length, i = i.nextSibling;
                        i.nodeValue;
                        b && i.nextSibling && n.isText(i.nextSibling) && l === i.nodeValue.length && (l -= i.nodeValue.length, i = i.nextSibling), e = i, c = l
                    }
                    return {
                        cont: e,
                        offset: c
                    }
                },
                c = function(a) {
                    var b = function(a, c) {
                            var d, e;
                            if (n.isText(a)) {
                                var f = n.listPrev(a, j.not(n.isText)),
                                    g = k.last(f).previousSibling;
                                d = g || a.parentNode, c += k.sum(k.tail(f), n.nodeLength), e = !g
                            } else {
                                if (d = a.childNodes[c] || a, n.isText(d)) return b(d, 0);
                                c = 0, e = !1
                            }
                            return {
                                node: d,
                                collapseToStart: e,
                                offset: c
                            }
                        },
                        c = document.body.createTextRange(),
                        d = b(a.node, a.offset);
                    return c.moveToElementText(d.node), c.collapse(d.collapseToStart), c.moveStart("character", d.offset), c
                },
                d = function(b, e, f, g) {
                    this.sc = b, this.so = e, this.ec = f, this.eo = g;
                    var h = function() {
                        if (i.isW3CRangeSupport) {
                            var a = document.createRange();
                            return a.setStart(b, e), a.setEnd(f, g), a
                        }
                        var d = c({
                            node: b,
                            offset: e
                        });
                        return d.setEndPoint("EndToEnd", c({
                            node: f,
                            offset: g
                        })), d
                    };
                    this.getPoints = function() {
                        return {
                            sc: b,
                            so: e,
                            ec: f,
                            eo: g
                        }
                    }, this.getStartPoint = function() {
                        return {
                            node: b,
                            offset: e
                        }
                    }, this.getEndPoint = function() {
                        return {
                            node: f,
                            offset: g
                        }
                    }, this.select = function() {
                        var a = h();
                        if (i.isW3CRangeSupport) {
                            var b = document.getSelection();
                            b.rangeCount > 0 && b.removeAllRanges(), b.addRange(a)
                        } else a.select();
                        return this
                    }, this.normalize = function() {
                        var a = function(a, b) {
                                if (n.isVisiblePoint(a) && !n.isEdgePoint(a) || n.isVisiblePoint(a) && n.isRightEdgePoint(a) && !b || n.isVisiblePoint(a) && n.isLeftEdgePoint(a) && b || n.isVisiblePoint(a) && n.isBlock(a.node) && n.isEmpty(a.node)) return a;
                                var c = n.ancestor(a.node, n.isBlock);
                                if ((n.isLeftEdgePointOf(a, c) || n.isVoid(n.prevPoint(a).node)) && !b || (n.isRightEdgePointOf(a, c) || n.isVoid(n.nextPoint(a).node)) && b) {
                                    if (n.isVisiblePoint(a)) return a;
                                    b = !b
                                }
                                var d = b ? n.nextPointUntil(n.nextPoint(a), n.isVisiblePoint) : n.prevPointUntil(n.prevPoint(a), n.isVisiblePoint);
                                return d || a
                            },
                            b = a(this.getEndPoint(), !1),
                            c = this.isCollapsed() ? b : a(this.getStartPoint(), !0);
                        return new d(c.node, c.offset, b.node, b.offset)
                    }, this.nodes = function(a, b) {
                        a = a || j.ok;
                        var c = b && b.includeAncestor,
                            d = b && b.fullyContains,
                            e = this.getStartPoint(),
                            f = this.getEndPoint(),
                            g = [],
                            h = [];
                        return n.walkPoint(e, f, function(b) {
                            if (!n.isEditable(b.node)) {
                                var e;
                                d ? (n.isLeftEdgePoint(b) && h.push(b.node), n.isRightEdgePoint(b) && k.contains(h, b.node) && (e = b.node)) : e = c ? n.ancestor(b.node, a) : b.node, e && a(e) && g.push(e)
                            }
                        }, !0), k.unique(g)
                    }, this.commonAncestor = function() {
                        return n.commonAncestor(b, f)
                    }, this.expand = function(a) {
                        var c = n.ancestor(b, a),
                            h = n.ancestor(f, a);
                        if (!c && !h) return new d(b, e, f, g);
                        var i = this.getPoints();
                        return c && (i.sc = c, i.so = 0), h && (i.ec = h, i.eo = n.nodeLength(h)), new d(i.sc, i.so, i.ec, i.eo)
                    }, this.collapse = function(a) {
                        return a ? new d(b, e, b, e) : new d(f, g, f, g)
                    }, this.splitText = function() {
                        var a = b === f,
                            c = this.getPoints();
                        return n.isText(f) && !n.isEdgePoint(this.getEndPoint()) && f.splitText(g), n.isText(b) && !n.isEdgePoint(this.getStartPoint()) && (c.sc = b.splitText(e), c.so = 0, a && (c.ec = c.sc, c.eo = g - e)), new d(c.sc, c.so, c.ec, c.eo)
                    }, this.deleteContents = function() {
                        if (this.isCollapsed()) return this;
                        var b = this.splitText(),
                            c = b.nodes(null, {
                                fullyContains: !0
                            }),
                            e = n.prevPointUntil(b.getStartPoint(), function(a) {
                                return !k.contains(c, a.node)
                            }),
                            f = [];
                        return a.each(c, function(a, b) {
                            var c = b.parentNode;
                            e.node !== c && 1 === n.nodeLength(c) && f.push(c), n.remove(b, !1)
                        }), a.each(f, function(a, b) {
                            n.remove(b, !1)
                        }), new d(e.node, e.offset, e.node, e.offset).normalize()
                    };
                    var l = function(a) {
                        return function() {
                            var c = n.ancestor(b, a);
                            return !!c && c === n.ancestor(f, a)
                        }
                    };
                    this.isOnEditable = l(n.isEditable), this.isOnList = l(n.isList), this.isOnAnchor = l(n.isAnchor), this.isOnCell = l(n.isCell), this.isLeftEdgeOf = function(a) {
                        if (!n.isLeftEdgePoint(this.getStartPoint())) return !1;
                        var b = n.ancestor(this.sc, a);
                        return b && n.isLeftEdgeOf(this.sc, b)
                    }, this.isCollapsed = function() {
                        return b === f && e === g
                    }, this.wrapBodyInlineWithPara = function() {
                        if (n.isBodyContainer(b) && n.isEmpty(b)) return b.innerHTML = n.emptyPara, new d(b.firstChild, 0, b.firstChild, 0);
                        var a = this.normalize();
                        if (n.isParaInline(b) || n.isPara(b)) return a;
                        var c;
                        if (n.isInline(a.sc)) {
                            var e = n.listAncestor(a.sc, j.not(n.isInline));
                            c = k.last(e), n.isInline(c) || (c = e[e.length - 2] || a.sc.childNodes[a.so])
                        } else c = a.sc.childNodes[a.so > 0 ? a.so - 1 : 0];
                        var f = n.listPrev(c, n.isParaInline).reverse();
                        if (f = f.concat(n.listNext(c.nextSibling, n.isParaInline)), f.length) {
                            var g = n.wrap(k.head(f), "p");
                            n.appendChildNodes(g, k.tail(f))
                        }
                        return this.normalize()
                    }, this.insertNode = function(a) {
                        var b = this.wrapBodyInlineWithPara().deleteContents(),
                            c = n.splitPoint(b.getStartPoint(), n.isInline(a));
                        return c.rightNode ? c.rightNode.parentNode.insertBefore(a, c.rightNode) : c.container.appendChild(a), a
                    }, this.pasteHTML = function(b) {
                        var c = a("<div></div>").html(b)[0],
                            d = k.from(c.childNodes),
                            e = this.wrapBodyInlineWithPara().deleteContents();
                        return d.reverse().map(function(a) {
                            return e.insertNode(a)
                        }).reverse()
                    }, this.toString = function() {
                        var a = h();
                        return i.isW3CRangeSupport ? a.toString() : a.text
                    }, this.getWordRange = function(a) {
                        var b = this.getEndPoint();
                        if (!n.isCharPoint(b)) return this;
                        var c = n.prevPointUntil(b, function(a) {
                            return !n.isCharPoint(a)
                        });
                        return a && (b = n.nextPointUntil(b, function(a) {
                            return !n.isCharPoint(a)
                        })), new d(c.node, c.offset, b.node, b.offset)
                    }, this.bookmark = function(a) {
                        return {
                            s: {
                                path: n.makeOffsetPath(a, b),
                                offset: e
                            },
                            e: {
                                path: n.makeOffsetPath(a, f),
                                offset: g
                            }
                        }
                    }, this.paraBookmark = function(a) {
                        return {
                            s: {
                                path: k.tail(n.makeOffsetPath(k.head(a), b)),
                                offset: e
                            },
                            e: {
                                path: k.tail(n.makeOffsetPath(k.last(a), f)),
                                offset: g
                            }
                        }
                    }, this.getClientRects = function() {
                        var a = h();
                        return a.getClientRects()
                    }
                };
            return {
                create: function(a, c, e, f) {
                    if (arguments.length) 2 === arguments.length && (e = a, f = c);
                    else if (i.isW3CRangeSupport) {
                        var g = document.getSelection();
                        if (!g || 0 === g.rangeCount) return null;
                        if (n.isBody(g.anchorNode)) return null;
                        var h = g.getRangeAt(0);
                        a = h.startContainer, c = h.startOffset, e = h.endContainer, f = h.endOffset
                    } else {
                        var j = document.selection.createRange(),
                            k = j.duplicate();
                        k.collapse(!1);
                        var l = j;
                        l.collapse(!0);
                        var m = b(l, !0),
                            o = b(k, !1);
                        n.isText(m.node) && n.isLeftEdgePoint(m) && n.isTextNode(o.node) && n.isRightEdgePoint(o) && o.node.nextSibling === m.node && (m = o), a = m.cont, c = m.offset, e = o.cont, f = o.offset
                    }
                    return new d(a, c, e, f)
                },
                createFromNode: function(a) {
                    var b = a,
                        c = 0,
                        d = a,
                        e = n.nodeLength(d);
                    return n.isVoid(b) && (c = n.listPrev(b).length - 1, b = b.parentNode), n.isBR(d) ? (e = n.listPrev(d).length - 1, d = d.parentNode) : n.isVoid(d) && (e = n.listPrev(d).length, d = d.parentNode), this.create(b, c, d, e)
                },
                createFromNodeBefore: function(a) {
                    return this.createFromNode(a).collapse(!0)
                },
                createFromNodeAfter: function(a) {
                    return this.createFromNode(a).collapse()
                },
                createFromBookmark: function(a, b) {
                    var c = n.fromOffsetPath(a, b.s.path),
                        e = b.s.offset,
                        f = n.fromOffsetPath(a, b.e.path),
                        g = b.e.offset;
                    return new d(c, e, f, g)
                },
                createFromParaBookmark: function(a, b) {
                    var c = a.s.offset,
                        e = a.e.offset,
                        f = n.fromOffsetPath(k.head(b), a.s.path),
                        g = n.fromOffsetPath(k.last(b), a.e.path);
                    return new d(f, c, g, e)
                }
            }
        }(),
        p = {
            version: "0.6.16",
            options: {
                width: null,
                height: null,
                minHeight: null,
                maxHeight: null,
                focus: !1,
                tabsize: 4,
                styleWithSpan: !0,
                disableLinkTarget: !1,
                disableDragAndDrop: !1,
                disableResizeEditor: !1,
                disableResizeImage: !1,
                shortcuts: !0,
                textareaAutoSync: !0,
                placeholder: !1,
                prettifyHtml: !0,
                iconPrefix: "fa fa-",
                icons: {
                    font: {
                        bold: "bold",
                        italic: "italic",
                        underline: "underline",
                        clear: "eraser",
                        height: "text-height",
                        strikethrough: "strikethrough",
                        superscript: "superscript",
                        subscript: "subscript"
                    },
                    image: {
                        image: "picture-o",
                        floatLeft: "align-left",
                        floatRight: "align-right",
                        floatNone: "align-justify",
                        shapeRounded: "square",
                        shapeCircle: "circle-o",
                        shapeThumbnail: "picture-o",
                        shapeNone: "times",
                        remove: "trash-o"
                    },
                    link: {
                        link: "link",
                        unlink: "unlink",
                        edit: "edit"
                    },
                    table: {
                        table: "table"
                    },
                    hr: {
                        insert: "minus"
                    },
                    style: {
                        style: "magic"
                    },
                    lists: {
                        unordered: "list-ul",
                        ordered: "list-ol"
                    },
                    options: {
                        help: "question",
                        fullscreen: "arrows-alt",
                        codeview: "code"
                    },
                    paragraph: {
                        paragraph: "align-left",
                        outdent: "outdent",
                        indent: "indent",
                        left: "align-left",
                        center: "align-center",
                        right: "align-right",
                        justify: "align-justify"
                    },
                    color: {
                        recent: "font"
                    },
                    history: {
                        undo: "undo",
                        redo: "repeat"
                    },
                    misc: {
                        check: "check"
                    }
                },
                dialogsInBody: !1,
                codemirror: {
                    mode: "text/html",
                    htmlMode: !0,
                    lineNumbers: !0
                },
                lang: "en-US",
                direction: null,
                toolbar: [
                    ["style", ["style"]],
                    ["font", ["bold", "italic", "underline", "clear"]],
                    ["fontname", ["fontname"]],
                    ["fontsize", ["fontsize"]],
                    ["color", ["color"]],
                    ["para", ["ul", "ol", "paragraph"]],
                    ["height", ["height"]],
                    ["table", ["table"]],
                    ["insert", ["link", "picture", "hr"]],
                    ["view", ["fullscreen", "codeview"]],
                    ["help", ["help"]]
                ],
                plugin: {},
                airMode: !1,
                airPopover: [
                    ["color", ["color"]],
                    ["font", ["bold", "underline", "clear"]],
                    ["para", ["ul", "paragraph"]],
                    ["table", ["table"]],
                    ["insert", ["link", "picture"]]
                ],
                styleTags: ["p", "blockquote", "pre", "h1", "h2", "h3", "h4", "h5", "h6"],
                defaultFontName: "Helvetica Neue",
                fontNames: ["Arial", "Arial Black", "Comic Sans MS", "Courier New", "Helvetica Neue", "Helvetica", "Impact", "Lucida Grande", "Tahoma", "Times New Roman", "Verdana"],
                fontNamesIgnoreCheck: [],
                fontSizes: ["8", "9", "10", "11", "12", "14", "18", "24", "36"],
                colors: [
                    ["#000000", "#424242", "#636363", "#9C9C94", "#CEC6CE", "#EFEFEF", "#F7F7F7", "#FFFFFF"],
                    ["#FF0000", "#FF9C00", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#9C00FF", "#FF00FF"],
                    ["#F7C6CE", "#FFE7CE", "#FFEFC6", "#D6EFD6", "#CEDEE7", "#CEE7F7", "#D6D6E7", "#E7D6DE"],
                    ["#E79C9C", "#FFC69C", "#FFE79C", "#B5D6A5", "#A5C6CE", "#9CC6EF", "#B5A5D6", "#D6A5BD"],
                    ["#E76363", "#F7AD6B", "#FFD663", "#94BD7B", "#73A5AD", "#6BADDE", "#8C7BC6", "#C67BA5"],
                    ["#CE0000", "#E79439", "#EFC631", "#6BA54A", "#4A7B8C", "#3984C6", "#634AA5", "#A54A7B"],
                    ["#9C0000", "#B56308", "#BD9400", "#397B21", "#104A5A", "#085294", "#311873", "#731842"],
                    ["#630000", "#7B3900", "#846300", "#295218", "#083139", "#003163", "#21104A", "#4A1031"]
                ],
                lineHeights: ["1.0", "1.2", "1.4", "1.5", "1.6", "1.8", "2.0", "3.0"],
                insertTableMaxSize: {
                    col: 10,
                    row: 10
                },
                maximumImageFileSize: null,
                oninit: null,
                onfocus: null,
                onblur: null,
                onenter: null,
                onkeyup: null,
                onkeydown: null,
                onImageUpload: null,
                onImageUploadError: null,
                onMediaDelete: null,
                onToolbarClick: null,
                onsubmit: null,
                onCreateLink: function(a) {
                    return -1 !== a.indexOf("@") && -1 === a.indexOf(":") && (a = "mailto:" + a), a
                },
                keyMap: {
                    pc: {
                        ENTER: "insertParagraph",
                        "CTRL+Z": "undo",
                        "CTRL+Y": "redo",
                        TAB: "tab",
                        "SHIFT+TAB": "untab",
                        "CTRL+B": "bold",
                        "CTRL+I": "italic",
                        "CTRL+U": "underline",
                        "CTRL+SHIFT+S": "strikethrough",
                        "CTRL+BACKSLASH": "removeFormat",
                        "CTRL+SHIFT+L": "justifyLeft",
                        "CTRL+SHIFT+E": "justifyCenter",
                        "CTRL+SHIFT+R": "justifyRight",
                        "CTRL+SHIFT+J": "justifyFull",
                        "CTRL+SHIFT+NUM7": "insertUnorderedList",
                        "CTRL+SHIFT+NUM8": "insertOrderedList",
                        "CTRL+LEFTBRACKET": "outdent",
                        "CTRL+RIGHTBRACKET": "indent",
                        "CTRL+NUM0": "formatPara",
                        "CTRL+NUM1": "formatH1",
                        "CTRL+NUM2": "formatH2",
                        "CTRL+NUM3": "formatH3",
                        "CTRL+NUM4": "formatH4",
                        "CTRL+NUM5": "formatH5",
                        "CTRL+NUM6": "formatH6",
                        "CTRL+ENTER": "insertHorizontalRule",
                        "CTRL+K": "showLinkDialog"
                    },
                    mac: {
                        ENTER: "insertParagraph",
                        "CMD+Z": "undo",
                        "CMD+SHIFT+Z": "redo",
                        TAB: "tab",
                        "SHIFT+TAB": "untab",
                        "CMD+B": "bold",
                        "CMD+I": "italic",
                        "CMD+U": "underline",
                        "CMD+SHIFT+S": "strikethrough",
                        "CMD+BACKSLASH": "removeFormat",
                        "CMD+SHIFT+L": "justifyLeft",
                        "CMD+SHIFT+E": "justifyCenter",
                        "CMD+SHIFT+R": "justifyRight",
                        "CMD+SHIFT+J": "justifyFull",
                        "CMD+SHIFT+NUM7": "insertUnorderedList",
                        "CMD+SHIFT+NUM8": "insertOrderedList",
                        "CMD+LEFTBRACKET": "outdent",
                        "CMD+RIGHTBRACKET": "indent",
                        "CMD+NUM0": "formatPara",
                        "CMD+NUM1": "formatH1",
                        "CMD+NUM2": "formatH2",
                        "CMD+NUM3": "formatH3",
                        "CMD+NUM4": "formatH4",
                        "CMD+NUM5": "formatH5",
                        "CMD+NUM6": "formatH6",
                        "CMD+ENTER": "insertHorizontalRule",
                        "CMD+K": "showLinkDialog"
                    }
                }
            },
            lang: {
                "en-US": {
                    font: {
                        bold: "Bold",
                        italic: "Italic",
                        underline: "Underline",
                        clear: "Remove Font Style",
                        height: "Line Height",
                        name: "Font Family",
                        strikethrough: "Strikethrough",
                        subscript: "Subscript",
                        superscript: "Superscript",
                        size: "Font Size"
                    },
                    image: {
                        image: "Picture",
                        insert: "Insert Image",
                        resizeFull: "Resize Full",
                        resizeHalf: "Resize Half",
                        resizeQuarter: "Resize Quarter",
                        floatLeft: "Float Left",
                        floatRight: "Float Right",
                        floatNone: "Float None",
                        shapeRounded: "Shape: Rounded",
                        shapeCircle: "Shape: Circle",
                        shapeThumbnail: "Shape: Thumbnail",
                        shapeNone: "Shape: None",
                        dragImageHere: "Drag image or text here",
                        dropImage: "Drop image or Text",
                        selectFromFiles: "Select from files",
                        maximumFileSize: "Maximum file size",
                        maximumFileSizeError: "Maximum file size exceeded.",
                        url: "Image URL",
                        remove: "Remove Image"
                    },
                    link: {
                        link: "Link",
                        insert: "Insert Link",
                        unlink: "Unlink",
                        edit: "Edit",
                        textToDisplay: "Text to display",
                        url: "To what URL should this link go?",
                        openInNewWindow: "Open in new window"
                    },
                    table: {
                        table: "Table"
                    },
                    hr: {
                        insert: "Insert Horizontal Rule"
                    },
                    style: {
                        style: "Style",
                        normal: "Normal",
                        blockquote: "Quote",
                        pre: "Code",
                        h1: "Header 1",
                        h2: "Header 2",
                        h3: "Header 3",
                        h4: "Header 4",
                        h5: "Header 5",
                        h6: "Header 6"
                    },
                    lists: {
                        unordered: "Unordered list",
                        ordered: "Ordered list"
                    },
                    options: {
                        help: "Help",
                        fullscreen: "Full Screen",
                        codeview: "Code View"
                    },
                    paragraph: {
                        paragraph: "Paragraph",
                        outdent: "Outdent",
                        indent: "Indent",
                        left: "Align left",
                        center: "Align center",
                        right: "Align right",
                        justify: "Justify full"
                    },
                    color: {
                        recent: "Recent Color",
                        more: "More Color",
                        background: "Background Color",
                        foreground: "Foreground Color",
                        transparent: "Transparent",
                        setTransparent: "Set transparent",
                        reset: "Reset",
                        resetToDefault: "Reset to default"
                    },
                    shortcut: {
                        shortcuts: "Keyboard shortcuts",
                        close: "Close",
                        textFormatting: "Text formatting",
                        action: "Action",
                        paragraphFormatting: "Paragraph formatting",
                        documentStyle: "Document Style",
                        extraKeys: "Extra keys"
                    },
                    history: {
                        undo: "Undo",
                        redo: "Redo"
                    }
                }
            }
        },
        q = function() {
            var b = function(b) {
                    return a.Deferred(function(c) {
                        a.extend(new FileReader, {
                            onload: function(a) {
                                var b = a.target.result;
                                c.resolve(b)
                            },
                            onerror: function() {
                                c.reject(this)
                            }
                        }).readAsDataURL(b)
                    }).promise()
                },
                c = function(b, c) {
                    return a.Deferred(function(d) {
                        var e = a("<img>");
                        e.one("load", function() {
                            e.off("error abort"), d.resolve(e)
                        }).one("error abort", function() {
                            e.off("load").detach(), d.reject(e)
                        }).css({
                            display: "none"
                        }).appendTo(document.body).attr({
                            src: b,
                            "data-filename": c
                        })
                    }).promise()
                };
            return {
                readFileAsDataURL: b,
                createImage: c
            }
        }(),
        r = function() {
            var a = {
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                SPACE: 32,
                NUM0: 48,
                NUM1: 49,
                NUM2: 50,
                NUM3: 51,
                NUM4: 52,
                NUM5: 53,
                NUM6: 54,
                NUM7: 55,
                NUM8: 56,
                B: 66,
                E: 69,
                I: 73,
                J: 74,
                K: 75,
                L: 76,
                R: 82,
                S: 83,
                U: 85,
                V: 86,
                Y: 89,
                Z: 90,
                SLASH: 191,
                LEFTBRACKET: 219,
                BACKSLASH: 220,
                RIGHTBRACKET: 221
            };
            return {
                isEdit: function(a) {
                    return k.contains([8, 9, 13, 32], a)
                },
                isMove: function(a) {
                    return k.contains([37, 38, 39, 40], a)
                },
                nameFromCode: j.invertObject(a),
                code: a
            }
        }(),
        s = function(a) {
            var b = [],
                c = -1,
                d = a[0],
                e = function() {
                    var b = o.create(),
                        c = {
                            s: {
                                path: [],
                                offset: 0
                            },
                            e: {
                                path: [],
                                offset: 0
                            }
                        };
                    return {
                        contents: a.html(),
                        bookmark: b ? b.bookmark(d) : c
                    }
                },
                f = function(b) {
                    null !== b.contents && a.html(b.contents), null !== b.bookmark && o.createFromBookmark(d, b.bookmark).select()
                };
            this.undo = function() {
                a.html() !== b[c].contents && this.recordUndo(), c > 0 && (c--, f(b[c]))
            }, this.redo = function() {
                b.length - 1 > c && (c++, f(b[c]))
            }, this.recordUndo = function() {
                c++, b.length > c && (b = b.slice(0, c)), b.push(e())
            }, this.recordUndo()
        },
        t = function() {
            var b = function(b, c) {
                if (i.jqueryVersion < 1.9) {
                    var d = {};
                    return a.each(c, function(a, c) {
                        d[c] = b.css(c)
                    }), d
                }
                return b.css.call(b, c)
            };
            this.fromNode = function(a) {
                var c = ["font-family", "font-size", "text-align", "list-style-type", "line-height"],
                    d = b(a, c) || {};
                return d["font-size"] = parseInt(d["font-size"], 10), d
            }, this.stylePara = function(b, c) {
                a.each(b.nodes(n.isPara, {
                    includeAncestor: !0
                }), function(b, d) {
                    a(d).css(c)
                })
            }, this.styleNodes = function(b, c) {
                b = b.splitText();
                var d = c && c.nodeName || "SPAN",
                    e = !(!c || !c.expandClosestSibling),
                    f = !(!c || !c.onlyPartialContains);
                if (b.isCollapsed()) return [b.insertNode(n.create(d))];
                var g = n.makePredByNodeName(d),
                    h = b.nodes(n.isText, {
                        fullyContains: !0
                    }).map(function(a) {
                        return n.singleChildAncestor(a, g) || n.wrap(a, d)
                    });
                if (e) {
                    if (f) {
                        var i = b.nodes();
                        g = j.and(g, function(a) {
                            return k.contains(i, a)
                        })
                    }
                    return h.map(function(b) {
                        var c = n.withClosestSiblings(b, g),
                            d = k.head(c),
                            e = k.tail(c);
                        return a.each(e, function(a, b) {
                            n.appendChildNodes(d, b.childNodes), n.remove(b)
                        }), k.head(c)
                    })
                }
                return h
            }, this.current = function(b) {
                var c = a(n.isText(b.sc) ? b.sc.parentNode : b.sc),
                    d = this.fromNode(c);
                if (d["font-bold"] = document.queryCommandState("bold") ? "bold" : "normal", d["font-italic"] = document.queryCommandState("italic") ? "italic" : "normal", d["font-underline"] = document.queryCommandState("underline") ? "underline" : "normal", d["font-strikethrough"] = document.queryCommandState("strikeThrough") ? "strikethrough" : "normal", d["font-superscript"] = document.queryCommandState("superscript") ? "superscript" : "normal", d["font-subscript"] = document.queryCommandState("subscript") ? "subscript" : "normal", b.isOnList()) {
                    var e = ["circle", "disc", "disc-leading-zero", "square"],
                        f = a.inArray(d["list-style-type"], e) > -1;
                    d["list-style"] = f ? "unordered" : "ordered"
                } else d["list-style"] = "none";
                var g = n.ancestor(b.sc, n.isPara);
                if (g && g.style["line-height"]) d["line-height"] = g.style.lineHeight;
                else {
                    var h = parseInt(d["line-height"], 10) / parseInt(d["font-size"], 10);
                    d["line-height"] = h.toFixed(1)
                }
                return d.anchor = b.isOnAnchor() && n.ancestor(b.sc, n.isAnchor), d.ancestors = n.listAncestor(b.sc, n.isEditable), d.range = b, d
            }
        },
        u = function() {
            this.insertOrderedList = function() {
                this.toggleList("OL")
            }, this.insertUnorderedList = function() {
                this.toggleList("UL")
            }, this.indent = function() {
                var b = this,
                    c = o.create().wrapBodyInlineWithPara(),
                    d = c.nodes(n.isPara, {
                        includeAncestor: !0
                    }),
                    e = k.clusterBy(d, j.peq2("parentNode"));
                a.each(e, function(c, d) {
                    var e = k.head(d);
                    n.isLi(e) ? b.wrapList(d, e.parentNode.nodeName) : a.each(d, function(b, c) {
                        a(c).css("marginLeft", function(a, b) {
                            return (parseInt(b, 10) || 0) + 25
                        })
                    })
                }), c.select()
            }, this.outdent = function() {
                var b = this,
                    c = o.create().wrapBodyInlineWithPara(),
                    d = c.nodes(n.isPara, {
                        includeAncestor: !0
                    }),
                    e = k.clusterBy(d, j.peq2("parentNode"));
                a.each(e, function(c, d) {
                    var e = k.head(d);
                    n.isLi(e) ? b.releaseList([d]) : a.each(d, function(b, c) {
                        a(c).css("marginLeft", function(a, b) {
                            return b = parseInt(b, 10) || 0, b > 25 ? b - 25 : ""
                        })
                    })
                }), c.select()
            }, this.toggleList = function(b) {
                var c = this,
                    d = o.create().wrapBodyInlineWithPara(),
                    e = d.nodes(n.isPara, {
                        includeAncestor: !0
                    }),
                    f = d.paraBookmark(e),
                    g = k.clusterBy(e, j.peq2("parentNode"));
                if (k.find(e, n.isPurePara)) {
                    var h = [];
                    a.each(g, function(a, d) {
                        h = h.concat(c.wrapList(d, b))
                    }), e = h
                } else {
                    var i = d.nodes(n.isList, {
                        includeAncestor: !0
                    }).filter(function(c) {
                        return !a.nodeName(c, b)
                    });
                    i.length ? a.each(i, function(a, c) {
                        n.replace(c, b)
                    }) : e = this.releaseList(g, !0)
                }
                o.createFromParaBookmark(f, e).select()
            }, this.wrapList = function(a, b) {
                var c = k.head(a),
                    d = k.last(a),
                    e = n.isList(c.previousSibling) && c.previousSibling,
                    f = n.isList(d.nextSibling) && d.nextSibling,
                    g = e || n.insertAfter(n.create(b || "UL"), d);
                return a = a.map(function(a) {
                    return n.isPurePara(a) ? n.replace(a, "LI") : a
                }), n.appendChildNodes(g, a), f && (n.appendChildNodes(g, k.from(f.childNodes)), n.remove(f)), a
            }, this.releaseList = function(b, c) {
                var d = [];
                return a.each(b, function(b, e) {
                    var f = k.head(e),
                        g = k.last(e),
                        h = c ? n.lastAncestor(f, n.isList) : f.parentNode,
                        i = h.childNodes.length > 1 ? n.splitTree(h, {
                            node: g.parentNode,
                            offset: n.position(g) + 1
                        }, {
                            isSkipPaddingBlankHTML: !0
                        }) : null,
                        j = n.splitTree(h, {
                            node: f.parentNode,
                            offset: n.position(f)
                        }, {
                            isSkipPaddingBlankHTML: !0
                        });
                    e = c ? n.listDescendant(j, n.isLi) : k.from(j.childNodes).filter(n.isLi), (c || !n.isList(h.parentNode)) && (e = e.map(function(a) {
                        return n.replace(a, "P")
                    })), a.each(k.from(e).reverse(), function(a, b) {
                        n.insertAfter(b, h)
                    });
                    var l = k.compact([h, j, i]);
                    a.each(l, function(b, c) {
                        var d = [c].concat(n.listDescendant(c, n.isList));
                        a.each(d.reverse(), function(a, b) {
                            n.nodeLength(b) || n.remove(b, !0)
                        })
                    }), d = d.concat(e)
                }), d
            }
        },
        v = function() {
            var b = new u;
            this.insertTab = function(a, b, c) {
                var d = n.createText(new Array(c + 1).join(n.NBSP_CHAR));
                b = b.deleteContents(), b.insertNode(d, !0), b = o.create(d, c), b.select()
            }, this.insertParagraph = function() {
                var c = o.create();
                c = c.deleteContents(), c = c.wrapBodyInlineWithPara();
                var d, e = n.ancestor(c.sc, n.isPara);
                if (e) {
                    if (n.isEmpty(e) && n.isLi(e)) return void b.toggleList(e.parentNode.nodeName);
                    d = n.splitTree(e, c.getStartPoint());
                    var f = n.listDescendant(e, n.isEmptyAnchor);
                    f = f.concat(n.listDescendant(d, n.isEmptyAnchor)), a.each(f, function(a, b) {
                        n.remove(b)
                    })
                } else {
                    var g = c.sc.childNodes[c.so];
                    d = a(n.emptyPara)[0], g ? c.sc.insertBefore(d, g) : c.sc.appendChild(d)
                }
                o.create(d, 0).normalize().select()
            }
        },
        w = function() {
            this.tab = function(a, b) {
                var c = n.ancestor(a.commonAncestor(), n.isCell),
                    d = n.ancestor(c, n.isTable),
                    e = n.listDescendant(d, n.isCell),
                    f = k[b ? "prev" : "next"](e, c);
                f && o.create(f, 0).select()
            }, this.createTable = function(b, c) {
                for (var d, e = [], f = 0; b > f; f++) e.push("<td>" + n.blank + "</td>");
                d = e.join("");
                for (var g, h = [], i = 0; c > i; i++) h.push("<tr>" + d + "</tr>");
                return g = h.join(""), a('<table class="table table-bordered">' + g + "</table>")[0]
            }
        },
        x = "bogus",
        y = function(b) {
            var c = this,
                d = new t,
                e = new w,
                f = new v,
                g = new u;
            this.createRange = function(a) {
                return this.focus(a), o.create()
            }, this.saveRange = function(a, b) {
                this.focus(a), a.data("range", o.create()), b && o.create().collapse().select()
            }, this.saveNode = function(a) {
                for (var b = [], c = 0, d = a[0].childNodes.length; d > c; c++) b.push(a[0].childNodes[c]);
                a.data("childNodes", b)
            }, this.restoreRange = function(a) {
                var b = a.data("range");
                b && (b.select(), this.focus(a))
            }, this.restoreNode = function(a) {
                a.html("");
                for (var b = a.data("childNodes"), c = 0, d = b.length; d > c; c++) a[0].appendChild(b[c])
            }, this.currentStyle = function(a) {
                var b = o.create(),
                    c = b && b.isOnEditable() ? d.current(b.normalize()) : {};
                return n.isImg(a) && (c.image = a), c
            }, this.styleFromNode = function(a) {
                return d.fromNode(a)
            };
            var h = function(a) {
                    var c = n.makeLayoutInfo(a).holder();
                    b.bindCustomEvent(c, a.data("callbacks"), "before.command")(a.html(), a)
                },
                j = function(a) {
                    var c = n.makeLayoutInfo(a).holder();
                    b.bindCustomEvent(c, a.data("callbacks"), "change")(a.html(), a)
                };
            this.undo = function(a) {
                h(a), a.data("NoteHistory").undo(), j(a)
            }, this.redo = function(a) {
                h(a), a.data("NoteHistory").redo(), j(a)
            };
            for (var l = this.beforeCommand = function(a) {
                    h(a), c.focus(a)
                }, m = this.afterCommand = function(a, b) {
                    a.data("NoteHistory").recordUndo(), b || j(a)
                }, p = ["bold", "italic", "underline", "strikethrough", "superscript", "subscript", "justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "formatBlock", "removeFormat", "backColor", "foreColor", "fontName"], r = 0, s = p.length; s > r; r++) this[p[r]] = function(a) {
                return function(b, c) {
                    l(b), document.execCommand(a, !1, c), m(b, !0)
                }
            }(p[r]);
            this.tab = function(a, b) {
                var c = this.createRange(a);
                c.isCollapsed() && c.isOnCell() ? e.tab(c) : (l(a), f.insertTab(a, c, b.tabsize), m(a))
            }, this.untab = function(a) {
                var b = this.createRange(a);
                b.isCollapsed() && b.isOnCell() && e.tab(b, !0)
            }, this.insertParagraph = function(a) {
                l(a), f.insertParagraph(a), m(a)
            }, this.insertOrderedList = function(a) {
                l(a), g.insertOrderedList(a), m(a)
            }, this.insertUnorderedList = function(a) {
                l(a), g.insertUnorderedList(a), m(a)
            }, this.indent = function(a) {
                l(a), g.indent(a), m(a)
            }, this.outdent = function(a) {
                l(a), g.outdent(a), m(a)
            }, this.insertImage = function(a, c, d) {
                q.createImage(c, d).then(function(b) {
                    l(a), b.css({
                        display: "",
                        width: Math.min(a.width(), b.width())
                    }), o.create().insertNode(b[0]), o.createFromNodeAfter(b[0]).select(), m(a)
                }).fail(function() {
                    var c = n.makeLayoutInfo(a).holder();
                    b.bindCustomEvent(c, a.data("callbacks"), "image.upload.error")()
                })
            }, this.insertNode = function(a, b) {
                l(a), o.create().insertNode(b), o.createFromNodeAfter(b).select(), m(a)
            }, this.insertText = function(a, b) {
                l(a);
                var c = o.create().insertNode(n.createText(b));
                o.create(c, n.nodeLength(c)).select(), m(a)
            }, this.pasteHTML = function(a, b) {
                l(a);
                var c = o.create().pasteHTML(b);
                o.createFromNodeAfter(k.last(c)).select(), m(a)
            }, this.formatBlock = function(a, b) {
                l(a), b = i.isMSIE ? "<" + b + ">" : b, document.execCommand("FormatBlock", !1, b), m(a)
            }, this.formatPara = function(a) {
                l(a), this.formatBlock(a, "P"), m(a)
            };
            for (var r = 1; 6 >= r; r++) this["formatH" + r] = function(a) {
                return function(b) {
                    this.formatBlock(b, "H" + a)
                }
            }(r);
            this.fontSize = function(b, c) {
                var e = o.create();
                if (e.isCollapsed()) {
                    var f = d.styleNodes(e),
                        g = k.head(f);
                    a(f).css({
                        "font-size": c + "px"
                    }), g && !n.nodeLength(g) && (g.innerHTML = n.ZERO_WIDTH_NBSP_CHAR, o.createFromNodeAfter(g.firstChild).select(), b.data(x, g))
                } else l(b), a(d.styleNodes(e)).css({
                    "font-size": c + "px"
                }), m(b)
            }, this.insertHorizontalRule = function(b) {
                l(b);
                var c = o.create(),
                    d = c.insertNode(a("<HR/>")[0]);
                d.nextSibling && o.create(d.nextSibling, 0).normalize().select(), m(b)
            }, this.removeBogus = function(a) {
                var b = a.data(x);
                if (b) {
                    var c = k.find(k.from(b.childNodes), n.isText),
                        d = c.nodeValue.indexOf(n.ZERO_WIDTH_NBSP_CHAR); - 1 !== d && c.deleteData(d, 1), n.isEmpty(b) && n.remove(b), a.removeData(x)
                }
            }, this.lineHeight = function(a, b) {
                l(a), d.stylePara(o.create(), {
                    lineHeight: b
                }), m(a)
            }, this.unlink = function(a) {
                var b = this.createRange(a);
                if (b.isOnAnchor()) {
                    var c = n.ancestor(b.sc, n.isAnchor);
                    b = o.createFromNode(c), b.select(), l(a), document.execCommand("unlink"), m(a)
                }
            }, this.createLink = function(b, c, e) {
                var f = c.url,
                    g = c.text,
                    h = c.isNewWindow,
                    i = c.range || this.createRange(b),
                    j = i.toString() !== g;
                e = e || n.makeLayoutInfo(b).editor().data("options"), l(b), e.onCreateLink && (f = e.onCreateLink(f));
                var p = [];
                if (j) {
                    var q = i.insertNode(a("<A>" + g + "</A>")[0]);
                    p.push(q)
                } else p = d.styleNodes(i, {
                    nodeName: "A",
                    expandClosestSibling: !0,
                    onlyPartialContains: !0
                });
                a.each(p, function(b, c) {
                    a(c).attr("href", f), h ? a(c).attr("target", "_blank") : a(c).removeAttr("target")
                });
                var r = o.createFromNodeBefore(k.head(p)),
                    s = r.getStartPoint(),
                    t = o.createFromNodeAfter(k.last(p)),
                    u = t.getEndPoint();
                o.create(s.node, s.offset, u.node, u.offset).select(), m(b)
            }, this.getLinkInfo = function(b) {
                this.focus(b);
                var c = o.create().expand(n.isAnchor),
                    d = a(k.head(c.nodes(n.isAnchor)));
                return {
                    range: c,
                    text: c.toString(),
                    isNewWindow: d.length ? "_blank" === d.attr("target") : !1,
                    url: d.length ? d.attr("href") : ""
                }
            }, this.color = function(a, b) {
                var c = JSON.parse(b),
                    d = c.foreColor,
                    e = c.backColor;
                l(a), d && document.execCommand("foreColor", !1, d), e && document.execCommand("backColor", !1, e), m(a)
            }, this.insertTable = function(a, b) {
                var c = b.split("x");
                l(a);
                var d = o.create().deleteContents();
                d.insertNode(e.createTable(c[0], c[1])), m(a)
            }, this.floatMe = function(a, b, c) {
                l(a), c.removeClass("pull-left pull-right"), b && "none" !== b && c.addClass("pull-" + b), c.css("float", b), m(a)
            }, this.imageShape = function(a, b, c) {
                l(a), c.removeClass("img-rounded img-circle img-thumbnail"), b && c.addClass(b), m(a)
            }, this.resize = function(a, b, c) {
                l(a), c.css({
                    width: 100 * b + "%",
                    height: ""
                }), m(a)
            }, this.resizeTo = function(a, b, c) {
                var d;
                if (c) {
                    var e = a.y / a.x,
                        f = b.data("ratio");
                    d = {
                        width: f > e ? a.x : a.y / f,
                        height: f > e ? a.x * f : a.y
                    }
                } else d = {
                    width: a.x,
                    height: a.y
                };
                b.css(d)
            }, this.removeMedia = function(c, d, e) {
                l(c), e.detach(), b.bindCustomEvent(a(), c.data("callbacks"), "media.delete")(e, c), m(c)
            }, this.focus = function(a) {
                a.focus(), i.isFF && !o.create().isOnEditable() && o.createFromNode(a[0]).normalize().collapse().select()
            }, this.isEmpty = function(a) {
                return n.isEmpty(a[0]) || n.emptyPara === a.html()
            }
        },
        z = function() {
            this.update = function(b, c) {
                var d = function(b, c) {
                        b.find(".dropdown-menu li a").each(function() {
                            var b = a(this).data("value") + "" == c + "";
                            this.className = b ? "checked" : ""
                        })
                    },
                    e = function(a, c) {
                        var d = b.find(a);
                        d.toggleClass("active", c())
                    };
                if (c.image) {
                    var f = a(c.image);
                    e('button[data-event="imageShape"][data-value="img-rounded"]', function() {
                        return f.hasClass("img-rounded")
                    }), e('button[data-event="imageShape"][data-value="img-circle"]', function() {
                        return f.hasClass("img-circle")
                    }), e('button[data-event="imageShape"][data-value="img-thumbnail"]', function() {
                        return f.hasClass("img-thumbnail")
                    }), e('button[data-event="imageShape"]:not([data-value])', function() {
                        return !f.is(".img-rounded, .img-circle, .img-thumbnail")
                    });
                    var g = f.css("float");
                    e('button[data-event="floatMe"][data-value="left"]', function() {
                        return "left" === g
                    }), e('button[data-event="floatMe"][data-value="right"]', function() {
                        return "right" === g
                    }), e('button[data-event="floatMe"][data-value="none"]', function() {
                        return "left" !== g && "right" !== g
                    });
                    var h = f.attr("style");
                    return e('button[data-event="resize"][data-value="1"]', function() {
                        return !!/(^|\s)(max-)?width\s*:\s*100%/.test(h)
                    }), e('button[data-event="resize"][data-value="0.5"]', function() {
                        return !!/(^|\s)(max-)?width\s*:\s*50%/.test(h)
                    }), void e('button[data-event="resize"][data-value="0.25"]', function() {
                        return !!/(^|\s)(max-)?width\s*:\s*25%/.test(h)
                    })
                }
                var j = b.find(".note-fontname");
                if (j.length) {
                    var k = c["font-family"];
                    if (k) {
                        for (var l = k.split(","), m = 0, n = l.length; n > m && (k = l[m].replace(/[\'\"]/g, "").replace(/\s+$/, "").replace(/^\s+/, ""), !i.isFontInstalled(k)); m++);
                        j.find(".note-current-fontname").text(k), d(j, k)
                    }
                }
                var o = b.find(".note-fontsize");
                o.find(".note-current-fontsize").text(c["font-size"]), d(o, parseFloat(c["font-size"]));
                var p = b.find(".note-height");
                d(p, parseFloat(c["line-height"])), e('button[data-event="bold"]', function() {
                    return "bold" === c["font-bold"]
                }), e('button[data-event="italic"]', function() {
                    return "italic" === c["font-italic"]
                }), e('button[data-event="underline"]', function() {
                    return "underline" === c["font-underline"]
                }), e('button[data-event="strikethrough"]', function() {
                    return "strikethrough" === c["font-strikethrough"]
                }), e('button[data-event="superscript"]', function() {
                    return "superscript" === c["font-superscript"]
                }), e('button[data-event="subscript"]', function() {
                    return "subscript" === c["font-subscript"]
                }), e('button[data-event="justifyLeft"]', function() {
                    return "left" === c["text-align"] || "start" === c["text-align"]
                }), e('button[data-event="justifyCenter"]', function() {
                    return "center" === c["text-align"]
                }), e('button[data-event="justifyRight"]', function() {
                    return "right" === c["text-align"]
                }), e('button[data-event="justifyFull"]', function() {
                    return "justify" === c["text-align"]
                }), e('button[data-event="insertUnorderedList"]', function() {
                    return "unordered" === c["list-style"]
                }), e('button[data-event="insertOrderedList"]', function() {
                    return "ordered" === c["list-style"]
                })
            }, this.updateRecentColor = function(b, c, d) {
                var e = a(b).closest(".note-color"),
                    f = e.find(".note-recent-color"),
                    g = JSON.parse(f.attr("data-value"));
                g[c] = d, f.attr("data-value", JSON.stringify(g));
                var h = "backColor" === c ? "background-color" : "color";
                f.find("i").css(h, d)
            }
        },
        A = function() {
            var a = new z;
            this.update = function(b, c) {
                a.update(b, c)
            }, this.updateRecentColor = function(b, c, d) {
                a.updateRecentColor(b, c, d)
            }, this.activate = function(a) {
                a.find("button").not('button[data-event="codeview"]').removeClass("disabled")
            }, this.deactivate = function(a) {
                a.find("button").not('button[data-event="codeview"]').addClass("disabled")
            }, this.updateFullscreen = function(a, b) {
                var c = a.find('button[data-event="fullscreen"]');
                c.toggleClass("active", b)
            }, this.updateCodeview = function(a, b) {
                var c = a.find('button[data-event="codeview"]');
                c.toggleClass("active", b), b ? this.deactivate(a) : this.activate(a)
            }, this.get = function(a, b) {
                var c = n.makeLayoutInfo(a).toolbar();
                return c.find("[data-name=" + b + "]")
            }, this.setButtonState = function(a, b, c) {
                c = c === !1 ? !1 : !0;
                var d = this.get(a, b);
                d.toggleClass("active", c)
            }
        },
        B = 24,
        C = function() {
            var b = a(document);
            this.attach = function(a, b) {
                b.disableResizeEditor || a.statusbar().on("mousedown", c)
            };
            var c = function(a) {
                a.preventDefault(), a.stopPropagation();
                var c = n.makeLayoutInfo(a.target).editable(),
                    d = c.offset().top - b.scrollTop(),
                    e = n.makeLayoutInfo(a.currentTarget || a.target),
                    f = e.editor().data("options");
                b.on("mousemove", function(a) {
                    var b = a.clientY - (d + B);
                    b = f.minHeight > 0 ? Math.max(b, f.minHeight) : b, b = f.maxHeight > 0 ? Math.min(b, f.maxHeight) : b, c.height(b)
                }).one("mouseup", function() {
                    b.off("mousemove")
                })
            }
        },
        D = function() {
            var b = new z,
                c = function(b, c) {
                    var d = c && c.isAirMode,
                        e = c && c.isLeftTop,
                        f = a(b),
                        g = d ? f.offset() : f.position(),
                        h = e ? 0 : f.outerHeight(!0);
                    return {
                        left: g.left,
                        top: g.top + h
                    }
                },
                d = function(a, b) {
                    a.css({
                        display: "block",
                        left: b.left,
                        top: b.top
                    })
                },
                e = 20;
            this.update = function(f, g, h) {
                b.update(f, g);
                var i = f.find(".note-link-popover");
                if (g.anchor) {
                    var l = i.find("a"),
                        m = a(g.anchor).attr("href"),
                        n = a(g.anchor).attr("target");
                    l.attr("href", m).html(m), n ? l.attr("target", "_blank") : l.removeAttr("target"), d(i, c(g.anchor, {
                        isAirMode: h
                    }))
                } else i.hide();
                var o = f.find(".note-image-popover");
                g.image ? d(o, c(g.image, {
                    isAirMode: h,
                    isLeftTop: !0
                })) : o.hide();
                var p = f.find(".note-air-popover");
                if (h && g.range && !g.range.isCollapsed()) {
                    var q = k.last(g.range.getClientRects());
                    if (q) {
                        var r = j.rect2bnd(q);
                        d(p, {
                            left: Math.max(r.left + r.width / 2 - e, 0),
                            top: r.top + r.height
                        })
                    }
                } else p.hide()
            }, this.updateRecentColor = function(a, b, c) {
                a.updateRecentColor(a, b, c)
            }, this.hide = function(a) {
                a.children().hide()
            }
        },
        E = function(b) {
            var c = a(document),
                d = function(d) {
                    if (n.isControlSizing(d.target)) {
                        d.preventDefault(), d.stopPropagation();
                        var e = n.makeLayoutInfo(d.target),
                            f = e.handle(),
                            g = e.popover(),
                            h = e.editable(),
                            i = e.editor(),
                            j = f.find(".note-control-selection").data("target"),
                            k = a(j),
                            l = k.offset(),
                            m = c.scrollTop(),
                            o = i.data("options").airMode;
                        c.on("mousemove", function(a) {
                            b.invoke("editor.resizeTo", {
                                x: a.clientX - l.left,
                                y: a.clientY - (l.top - m)
                            }, k, !a.shiftKey), b.invoke("handle.update", f, {
                                image: j
                            }, o), b.invoke("popover.update", g, {
                                image: j
                            }, o)
                        }).one("mouseup", function() {
                            c.off("mousemove"), b.invoke("editor.afterCommand", h)
                        }), k.data("ratio") || k.data("ratio", k.height() / k.width())
                    }
                };
            this.attach = function(a) {
                a.handle().on("mousedown", d)
            }, this.update = function(b, c, d) {
                var e = b.find(".note-control-selection");
                if (c.image) {
                    var f = a(c.image),
                        g = d ? f.offset() : f.position(),
                        h = {
                            w: f.outerWidth(!0),
                            h: f.outerHeight(!0)
                        };
                    e.css({
                        display: "block",
                        left: g.left,
                        top: g.top,
                        width: h.w,
                        height: h.h
                    }).data("target", c.image);
                    var i = h.w + "x" + h.h;
                    e.find(".note-control-selection-info").text(i)
                } else e.hide()
            }, this.hide = function(a) {
                a.children().hide()
            }
        },
        F = function(b) {
            var c = a(window),
                d = a("html, body");
            this.toggle = function(a) {
                var e = a.editor(),
                    f = a.toolbar(),
                    g = a.editable(),
                    h = a.codable(),
                    i = function(a) {
                        g.css("height", a.h), h.css("height", a.h), h.data("cmeditor") && h.data("cmeditor").setsize(null, a.h)
                    };
                e.toggleClass("fullscreen");
                var j = e.hasClass("fullscreen");
                j ? (g.data("orgheight", g.css("height")), c.on("resize", function() {
                    i({
                        h: c.height() - f.outerHeight()
                    })
                }).trigger("resize"), d.css("overflow", "hidden")) : (c.off("resize"), i({
                    h: g.data("orgheight")
                }), d.css("overflow", "visible")), b.invoke("toolbar.updateFullscreen", f, j)
            }
        };
    i.hasCodeMirror && (i.isSupportAmd ? require(["CodeMirror"], function(a) {
        h = a
    }) : h = window.CodeMirror);
    var G = function(a) {
            this.sync = function(b) {
                var c = a.invoke("codeview.isActivated", b);
                c && i.hasCodeMirror && b.codable().data("cmEditor").save()
            }, this.isActivated = function(a) {
                var b = a.editor();
                return b.hasClass("codeview")
            }, this.toggle = function(a) {
                this.isActivated(a) ? this.deactivate(a) : this.activate(a)
            }, this.activate = function(b) {
                var c = b.editor(),
                    d = b.toolbar(),
                    e = b.editable(),
                    f = b.codable(),
                    g = b.popover(),
                    j = b.handle(),
                    k = c.data("options");
                if (f.val(n.html(e, k.prettifyHtml)), f.height(e.height()), a.invoke("toolbar.updateCodeview", d, !0), a.invoke("popover.hide", g), a.invoke("handle.hide", j), c.addClass("codeview"), f.focus(), i.hasCodeMirror) {
                    var l = h.fromTextArea(f[0], k.codemirror);
                    if (k.codemirror.tern) {
                        var m = new h.TernServer(k.codemirror.tern);
                        l.ternServer = m, l.on("cursorActivity", function(a) {
                            m.updateArgHints(a)
                        })
                    }
                    l.setSize(null, e.outerHeight()), f.data("cmEditor", l)
                }
            }, this.deactivate = function(b) {
                var c = b.holder(),
                    d = b.editor(),
                    e = b.toolbar(),
                    f = b.editable(),
                    g = b.codable(),
                    h = d.data("options");
                if (i.hasCodeMirror) {
                    var j = g.data("cmEditor");
                    g.val(j.getValue()), j.toTextArea()
                }
                var k = n.value(g, h.prettifyHtml) || n.emptyPara,
                    l = f.html() !== k;
                f.html(k), f.height(h.height ? g.height() : "auto"), d.removeClass("codeview"), l && a.bindCustomEvent(c, f.data("callbacks"), "change")(f.html(), f), f.focus(), a.invoke("toolbar.updateCodeview", e, !1)
            }
        },
        H = function(b) {
            var c = a(document);
            this.attach = function(a, b) {
                b.airMode || b.disableDragAndDrop ? c.on("drop", function(a) {
                    a.preventDefault()
                }) : this.attachDragAndDropEvent(a, b)
            }, this.attachDragAndDropEvent = function(d, e) {
                var f = a(),
                    g = d.editor(),
                    h = d.dropzone(),
                    i = h.find(".note-dropzone-message");
                c.on("dragenter", function(a) {
                    var c = b.invoke("codeview.isActivated", d),
                        j = g.width() > 0 && g.height() > 0;
                    c || f.length || !j || (g.addClass("dragover"), h.width(g.width()), h.height(g.height()), i.text(e.langInfo.image.dragImageHere)), f = f.add(a.target)
                }).on("dragleave", function(a) {
                    f = f.not(a.target), f.length || g.removeClass("dragover")
                }).on("drop", function() {
                    f = a(), g.removeClass("dragover")
                }), h.on("dragenter", function() {
                    h.addClass("hover"), i.text(e.langInfo.image.dropImage)
                }).on("dragleave", function() {
                    h.removeClass("hover"), i.text(e.langInfo.image.dragImageHere)
                }), h.on("drop", function(c) {
                    var d = c.originalEvent.dataTransfer,
                        e = n.makeLayoutInfo(c.currentTarget || c.target);
                    if (d && d.files && d.files.length) c.preventDefault(), e.editable().focus(), b.insertImages(e, d.files);
                    else
                        for (var f = function() {
                                e.holder().summernote("insertNode", this)
                            }, g = 0, h = d.types.length; h > g; g++) {
                            var i = d.types[g],
                                j = d.getData(i);
                            i.toLowerCase().indexOf("text") > -1 ? e.holder().summernote("pasteHTML", j) : a(j).each(f)
                        }
                }).on("dragover", !1)
            }
        },
        I = function(b) {
            var c;
            this.attach = function(f) {
                i.isMSIE && i.browserVersion > 10 || i.isFF ? (c = a("<div />").attr("contenteditable", !0).css({
                    position: "absolute",
                    left: -1e5,
                    opacity: 0
                }), f.editable().on("keydown", function(a) {
                    a.ctrlKey && a.keyCode === r.code.V && (b.invoke("saveRange", f.editable()), c.focus(), setTimeout(function() {
                        d(f)
                    }, 0))
                }), f.editable().before(c)) : f.editable().on("paste", e)
            };
            var d = function(d) {
                    var e = d.editable(),
                        f = c[0].firstChild;
                    if (n.isImg(f)) {
                        for (var g = f.src, h = atob(g.split(",")[1]), i = new Uint8Array(h.length), j = 0; j < h.length; j++) i[j] = h.charCodeAt(j);
                        var k = new Blob([i], {
                            type: "image/png"
                        });
                        k.name = "clipboard.png", b.invoke("restoreRange", e), b.invoke("focus", e), b.insertImages(d, [k])
                    } else {
                        var l = a("<div />").html(c.html()).html();
                        b.invoke("restoreRange", e), b.invoke("focus", e), l && b.invoke("pasteHTML", e, l)
                    }
                    c.empty()
                },
                e = function(a) {
                    var c = a.originalEvent.clipboardData,
                        d = n.makeLayoutInfo(a.currentTarget || a.target),
                        e = d.editable();
                    if (c && c.items && c.items.length) {
                        var f = k.head(c.items);
                        "file" === f.kind && -1 !== f.type.indexOf("image/") && b.insertImages(d, [f.getAsFile()]), b.invoke("editor.afterCommand", e)
                    }
                }
        },
        J = function(b) {
            var c = function(a, b) {
                    a.toggleClass("disabled", !b), a.attr("disabled", !b)
                },
                d = function(a, b) {
                    a.on("keypress", function(a) {
                        a.keyCode === r.code.ENTER && b.trigger("click")
                    })
                };
            this.showLinkDialog = function(b, e, f) {
                return a.Deferred(function(a) {
                    var b = e.find(".note-link-dialog"),
                        g = b.find(".note-link-text"),
                        h = b.find(".note-link-url"),
                        i = b.find(".note-link-btn"),
                        j = b.find("input[type=checkbox]");
                    b.one("shown.bs.modal", function() {
                        g.val(f.text), g.on("input", function() {
                            c(i, g.val() && h.val()), f.text = g.val()
                        }), f.url || (f.url = f.text || "http://", c(i, f.text)), h.on("input", function() {
                            c(i, g.val() && h.val()), f.text || g.val(h.val())
                        }).val(f.url).trigger("focus").trigger("select"), d(h, i), d(g, i), j.prop("checked", f.isNewWindow), i.one("click", function(c) {
                            c.preventDefault(), a.resolve({
                                range: f.range,
                                url: h.val(),
                                text: g.val(),
                                isNewWindow: j.is(":checked")
                            }), b.modal("hide")
                        })
                    }).one("hidden.bs.modal", function() {
                        g.off("input keypress"), h.off("input keypress"), i.off("click"), "pending" === a.state() && a.reject()
                    }).modal("show")
                }).promise()
            }, this.show = function(a) {
                var c = a.editor(),
                    d = a.dialog(),
                    e = a.editable(),
                    f = a.popover(),
                    g = b.invoke("editor.getLinkInfo", e),
                    h = c.data("options");
                b.invoke("editor.saveRange", e), this.showLinkDialog(e, d, g).then(function(a) {
                    b.invoke("editor.restoreRange", e), b.invoke("editor.createLink", e, a, h), b.invoke("popover.hide", f)
                }).fail(function() {
                    b.invoke("editor.restoreRange", e)
                })
            }
        },
        K = function(b) {
            var c = function(a, b) {
                    a.toggleClass("disabled", !b), a.attr("disabled", !b)
                },
                d = function(a, b) {
                    a.on("keypress", function(a) {
                        a.keyCode === r.code.ENTER && b.trigger("click")
                    })
                };
            this.show = function(a) {
                var c = a.dialog(),
                    d = a.editable();
                b.invoke("editor.saveRange", d), this.showImageDialog(d, c).then(function(c) {
                    b.invoke("editor.restoreRange", d), "string" == typeof c ? b.invoke("editor.insertImage", d, c) : b.insertImages(a, c)
                }).fail(function() {
                    b.invoke("editor.restoreRange", d)
                })
            }, this.showImageDialog = function(b, e) {
                return a.Deferred(function(a) {
                    var b = e.find(".note-image-dialog"),
                        f = e.find(".note-image-input"),
                        g = e.find(".note-image-url"),
                        h = e.find(".note-image-btn");
                    b.one("shown.bs.modal", function() {
                        f.replaceWith(f.clone().on("change", function() {
                            a.resolve(this.files || this.value), b.modal("hide")
                        }).val("")), h.click(function(c) {
                            c.preventDefault(), a.resolve(g.val()), b.modal("hide")
                        }), g.on("keyup paste", function(a) {
                            var b;
                            b = "paste" === a.type ? a.originalEvent.clipboardData.getData("text") : g.val(), c(h, b)
                        }).val("").trigger("focus"), d(g, h)
                    }).one("hidden.bs.modal", function() {
                        f.off("change"), g.off("keyup paste keypress"), h.off("click"), "pending" === a.state() && a.reject()
                    }).modal("show")
                })
            }
        },
        L = function(b) {
            this.showHelpDialog = function(b, c) {
                return a.Deferred(function(a) {
                    var b = c.find(".note-help-dialog");
                    b.one("hidden.bs.modal", function() {
                        a.resolve()
                    }).modal("show")
                }).promise()
            }, this.show = function(a) {
                var c = a.dialog(),
                    d = a.editable();
                b.invoke("editor.saveRange", d, !0), this.showHelpDialog(d, c).then(function() {
                    b.invoke("editor.restoreRange", d)
                })
            }
        },
        M = function() {
            var b = this,
                c = this.modules = {
                    editor: new y(this),
                    toolbar: new A(this),
                    statusbar: new C(this),
                    popover: new D(this),
                    handle: new E(this),
                    fullscreen: new F(this),
                    codeview: new G(this),
                    dragAndDrop: new H(this),
                    clipboard: new I(this),
                    linkDialog: new J(this),
                    imageDialog: new K(this),
                    helpDialog: new L(this)
                };
            this.invoke = function() {
                var a = k.head(k.from(arguments)),
                    b = k.tail(k.from(arguments)),
                    c = a.split("."),
                    d = c.length > 1,
                    e = d && k.head(c),
                    f = d ? k.last(c) : k.head(c),
                    g = this.getModule(e),
                    h = g[f];
                return h && h.apply(g, b)
            }, this.getModule = function(a) {
                return this.modules[a] || this.modules.editor
            };
            var d = this.bindCustomEvent = function(a, b, c) {
                return function() {
                    var d = b[j.namespaceToCamel(c, "on")];
                    return d && d.apply(a[0], arguments), a.trigger("summernote." + c, arguments)
                }
            };
            this.insertImages = function(b, e) {
                var f = b.editor(),
                    g = b.editable(),
                    h = b.holder(),
                    i = g.data("callbacks"),
                    j = f.data("options");
                i.onImageUpload ? d(h, i, "image.upload")(e) : a.each(e, function(a, b) {
                    var e = b.name;
                    j.maximumImageFileSize && j.maximumImageFileSize < b.size ? d(h, i, "image.upload.error")(j.langInfo.image.maximumFileSizeError) : q.readFileAsDataURL(b).then(function(a) {
                        c.editor.insertImage(g, a, e)
                    }).fail(function() {
                        d(h, i, "image.upload.error")(j.langInfo.image.maximumFileSizeError)
                    })
                })
            };
            var e = {
                    showLinkDialog: function(a) {
                        c.linkDialog.show(a)
                    },
                    showImageDialog: function(a) {
                        c.imageDialog.show(a)
                    },
                    showHelpDialog: function(a) {
                        c.helpDialog.show(a)
                    },
                    fullscreen: function(a) {
                        c.fullscreen.toggle(a)
                    },
                    codeview: function(a) {
                        c.codeview.toggle(a)
                    }
                },
                f = function(a) {
                    n.isImg(a.target) && a.preventDefault()
                },
                g = function(a) {
                    var b = n.makeLayoutInfo(a.currentTarget || a.target);
                    c.editor.removeBogus(b.editable()), h(a)
                };
            this.updateStyleInfo = function(a, b) {
                if (a) {
                    var d = b.editor().data("options").airMode;
                    d || c.toolbar.update(b.toolbar(), a), c.popover.update(b.popover(), a, d), c.handle.update(b.handle(), a, d)
                }
            };
            var h = function(a) {
                    var d = a.target;
                    setTimeout(function() {
                        var a = n.makeLayoutInfo(d),
                            e = c.editor.currentStyle(d);
                        b.updateStyleInfo(e, a)
                    }, 0)
                },
                l = function(a) {
                    var b = n.makeLayoutInfo(a.currentTarget || a.target);
                    c.popover.hide(b.popover()), c.handle.hide(b.handle())
                },
                m = function(b) {
                    var c = a(b.target).closest("[data-event]");
                    c.length && b.preventDefault()
                },
                o = function(b) {
                    var d = a(b.target).closest("[data-event]");
                    if (d.length) {
                        var f, g = d.attr("data-event"),
                            i = d.attr("data-value"),
                            j = d.attr("data-hide"),
                            l = n.makeLayoutInfo(b.target);
                        if (-1 !== a.inArray(g, ["resize", "floatMe", "removeMedia", "imageShape"])) {
                            var m = l.handle().find(".note-control-selection");
                            f = a(m.data("target"))
                        }
                        if (j && d.parents(".popover").hide(), a.isFunction(a.summernote.pluginEvents[g])) a.summernote.pluginEvents[g](b, c.editor, l, i);
                        else if (c.editor[g]) {
                            var o = l.editable();
                            o.focus(), c.editor[g](o, i, f), b.preventDefault()
                        } else e[g] && (e[g].call(this, l), b.preventDefault());
                        if (-1 !== a.inArray(g, ["backColor", "foreColor"])) {
                            var p = l.editor().data("options", p),
                                q = p.airMode ? c.popover : c.toolbar;
                            q.updateRecentColor(k.head(d), g, i)
                        }
                        h(b)
                    }
                },
                p = 18,
                t = function(b, c) {
                    var d, e = a(b.target.parentNode),
                        f = e.next(),
                        g = e.find(".note-dimension-picker-mousecatcher"),
                        h = e.find(".note-dimension-picker-highlighted"),
                        i = e.find(".note-dimension-picker-unhighlighted");
                    if (void 0 === b.offsetX) {
                        var j = a(b.target).offset();
                        d = {
                            x: b.pageX - j.left,
                            y: b.pageY - j.top
                        }
                    } else d = {
                        x: b.offsetX,
                        y: b.offsetY
                    };
                    var k = {
                        c: Math.ceil(d.x / p) || 1,
                        r: Math.ceil(d.y / p) || 1
                    };
                    h.css({
                        width: k.c + "em",
                        height: k.r + "em"
                    }), g.attr("data-value", k.c + "x" + k.r), 3 < k.c && k.c < c.insertTableMaxSize.col && i.css({
                        width: k.c + 1 + "em"
                    }), 3 < k.r && k.r < c.insertTableMaxSize.row && i.css({
                        height: k.r + 1 + "em"
                    }), f.html(k.c + " x " + k.r)
                };
            this.bindKeyMap = function(b, d) {
                var f = b.editor(),
                    g = b.editable();
                g.on("keydown", function(h) {
                    var i = [];
                    h.metaKey && i.push("CMD"), h.ctrlKey && !h.altKey && i.push("CTRL"), h.shiftKey && i.push("SHIFT");
                    var j = r.nameFromCode[h.keyCode];
                    j && i.push(j);
                    var k, l = i.join("+"),
                        m = d[l];
                    if (m) {
                        if (k = a.summernote.pluginEvents[l], a.isFunction(k) && k(h, c.editor, b)) return !1;
                        k = a.summernote.pluginEvents[m], a.isFunction(k) ? k(h, c.editor, b) : c.editor[m] ? (c.editor[m](g, f.data("options")), h.preventDefault()) : e[m] && (e[m].call(this, b), h.preventDefault())
                    } else r.isEdit(h.keyCode) && c.editor.afterCommand(g)
                })
            }, this.attach = function(a, b) {
                b.shortcuts && this.bindKeyMap(a, b.keyMap[i.isMac ? "mac" : "pc"]), a.editable().on("mousedown", f), a.editable().on("keyup mouseup", g), a.editable().on("scroll", l), c.clipboard.attach(a, b), c.handle.attach(a, b), a.popover().on("click", o), a.popover().on("mousedown", m), c.dragAndDrop.attach(a, b), b.airMode || (a.toolbar().on("click", o), a.toolbar().on("mousedown", m), c.statusbar.attach(a, b));
                var d = b.airMode ? a.popover() : a.toolbar(),
                    e = d.find(".note-dimension-picker-mousecatcher");
                e.css({
                    width: b.insertTableMaxSize.col + "em",
                    height: b.insertTableMaxSize.row + "em"
                }).on("mousemove", function(a) {
                    t(a, b)
                }), a.editor().data("options", b), i.isMSIE || setTimeout(function() {
                    document.execCommand("styleWithCSS", 0, b.styleWithSpan)
                }, 0);
                var h = new s(a.editable());
                a.editable().data("NoteHistory", h), a.editable().data("callbacks", {
                    onInit: b.onInit,
                    onFocus: b.onFocus,
                    onBlur: b.onBlur,
                    onKeydown: b.onKeydown,
                    onKeyup: b.onKeyup,
                    onMousedown: b.onMousedown,
                    onEnter: b.onEnter,
                    onPaste: b.onPaste,
                    onBeforeCommand: b.onBeforeCommand,
                    onChange: b.onChange,
                    onImageUpload: b.onImageUpload,
                    onImageUploadError: b.onImageUploadError,
                    onMediaDelete: b.onMediaDelete,
                    onToolbarClick: b.onToolbarClick
                });
                var j = c.editor.styleFromNode(a.editable());
                this.updateStyleInfo(j, a)
            }, this.attachCustomEvent = function(b, c) {
                var e = b.holder(),
                    f = b.editable(),
                    g = f.data("callbacks");
                f.focus(d(e, g, "focus")), f.blur(d(e, g, "blur")), f.keydown(function(a) {
                    a.keyCode === r.code.ENTER && d(e, g, "enter").call(this, a), d(e, g, "keydown").call(this, a)
                }), f.keyup(d(e, g, "keyup")), f.on("mousedown", d(e, g, "mousedown")), f.on("mouseup", d(e, g, "mouseup")), f.on("scroll", d(e, g, "scroll")), f.on("paste", d(e, g, "paste"));
                var h = i.isMSIE ? "DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted" : "input";
                f.on(h, function() {
                    d(e, g, "change")(f.html(), f)
                }), c.airMode || (b.toolbar().click(d(e, g, "toolbar.click")), b.popover().click(d(e, g, "popover.click"))), n.isTextarea(k.head(e)) && e.closest("form").submit(function(a) {
                    b.holder().val(b.holder().code()), d(e, g, "submit").call(this, a, e.code())
                }), n.isTextarea(k.head(e)) && c.textareaAutoSync && e.on("summernote.change", function() {
                    b.holder().val(b.holder().code())
                }), d(e, g, "init")(b);
                for (var j = 0, l = a.summernote.plugins.length; l > j; j++) a.isFunction(a.summernote.plugins[j].init) && a.summernote.plugins[j].init(b)
            }, this.detach = function(a, b) {
                a.holder().off(), a.editable().off(), a.popover().off(), a.handle().off(), a.dialog().off(), b.airMode || (a.dropzone().off(), a.toolbar().off(), a.statusbar().off())
            }
        },
        N = function() {
            var b = function(a, b) {
                    var c = b.event,
                        d = b.value,
                        e = b.title,
                        f = b.className,
                        g = b.dropdown,
                        h = b.hide;
                    return (g ? '<div class="btn-group' + (f ? " " + f : "") + '">' : "") + '<button type="button" class="btn btn-default btn-sm' + (!g && f ? " " + f : "") + (g ? " dropdown-toggle" : "") + '"' + (g ? ' data-toggle="dropdown"' : "") + (e ? ' title="' + e + '"' : "") + (c ? ' data-event="' + c + '"' : "") + (d ? " data-value='" + d + "'" : "") + (h ? " data-hide='" + h + "'" : "") + ' tabindex="-1">' + a + (g ? ' <span class="caret"></span>' : "") + "</button>" + (g || "") + (g ? "</div>" : "")
                },
                c = function(a, c) {
                    var d = '<i class="' + a + '"></i>';
                    return b(d, c)
                },
                d = function(b, c) {
                    var d = a('<div class="' + b + ' popover bottom in" style="display: none;"><div class="arrow"></div><div class="popover-content"></div></div>');
                    return d.find(".popover-content").append(c), d
                },
                e = function(a, b, c, d) {
                    return '<div class="' + a + ' modal" aria-hidden="false"><div class="modal-dialog"><div class="modal-content">' + (b ? '<div class="modal-header"><button type="button" class="close" aria-hidden="true" tabindex="-1">&times;</button><h4 class="modal-title">' + b + "</h4></div>" : "") + '<div class="modal-body">' + c + "</div>" + (d ? '<div class="modal-footer">' + d + "</div>" : "") + "</div></div></div>"
                },
                f = function(a, b, c) {
                    var d = "dropdown-menu" + (b ? " " + b : "");
                    return c = c || "ul", a instanceof Array && (a = a.join("")), "<" + c + ' class="' + d + '">' + a + "</" + c + ">"
                },
                g = {
                    picture: function(a, b) {
                        return c(b.iconPrefix + b.icons.image.image, {
                            event: "showImageDialog",
                            title: a.image.image,
                            hide: !0
                        })
                    },
                    link: function(a, b) {
                        return c(b.iconPrefix + b.icons.link.link, {
                            event: "showLinkDialog",
                            title: a.link.link,
                            hide: !0
                        })
                    },
                    table: function(a, b) {
                        var d = ['<div class="note-dimension-picker">', '<div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"></div>', '<div class="note-dimension-picker-highlighted"></div>', '<div class="note-dimension-picker-unhighlighted"></div>', "</div>", '<div class="note-dimension-display"> 1 x 1 </div>'];
                        return c(b.iconPrefix + b.icons.table.table, {
                            title: a.table.table,
                            dropdown: f(d, "note-table")
                        })
                    },
                    style: function(a, b) {
                        var d = b.styleTags.reduce(function(b, c) {
                            var d = a.style["p" === c ? "normal" : c];
                            return b + '<li><a data-event="formatBlock" href="#" data-value="' + c + '">' + ("p" === c || "pre" === c ? d : "<" + c + ">" + d + "</" + c + ">") + "</a></li>"
                        }, "");
                        return c(b.iconPrefix + b.icons.style.style, {
                            title: a.style.style,
                            dropdown: f(d)
                        })
                    },
                    fontname: function(a, c) {
                        var d = [],
                            e = c.fontNames.reduce(function(a, b) {
                                return i.isFontInstalled(b) || k.contains(c.fontNamesIgnoreCheck, b) ? (d.push(b), a + '<li><a data-event="fontName" href="#" data-value="' + b + '" style="font-family:\'' + b + '\'"><i class="' + c.iconPrefix + c.icons.misc.check + '"></i> ' + b + "</a></li>") : a
                            }, ""),
                            g = i.isFontInstalled(c.defaultFontName),
                            h = g ? c.defaultFontName : d[0],
                            j = '<span class="note-current-fontname">' + h + "</span>";
                        return b(j, {
                            title: a.font.name,
                            className: "note-fontname",
                            dropdown: f(e, "note-check")
                        })
                    },
                    fontsize: function(a, c) {
                        var d = c.fontSizes.reduce(function(a, b) {
                                return a + '<li><a data-event="fontSize" href="#" data-value="' + b + '"><i class="' + c.iconPrefix + c.icons.misc.check + '"></i> ' + b + "</a></li>"
                            }, ""),
                            e = '<span class="note-current-fontsize">11</span>';
                        return b(e, {
                            title: a.font.size,
                            className: "note-fontsize",
                            dropdown: f(d, "note-check")
                        })
                    },
                    color: function(a, c) {
                        var d = '<i class="' + c.iconPrefix + c.icons.color.recent + '" style="color:black;background-color:yellow;"></i>',
                            e = b(d, {
                                className: "note-recent-color",
                                title: a.color.recent,
                                event: "color",
                                value: '{"backColor":"yellow"}'
                            }),
                            g = ['<li><div class="btn-group">', '<div class="note-palette-title">' + a.color.background + "</div>", '<div class="note-color-reset" data-event="backColor"', ' data-value="inherit" title="' + a.color.transparent + '">' + a.color.setTransparent + "</div>", '<div class="note-color-palette" data-target-event="backColor"></div>', '</div><div class="btn-group">', '<div class="note-palette-title">' + a.color.foreground + "</div>", '<div class="note-color-reset" data-event="foreColor" data-value="inherit" title="' + a.color.reset + '">', a.color.resetToDefault, "</div>", '<div class="note-color-palette" data-target-event="foreColor"></div>', "</div></li>"],
                            h = b("", {
                                title: a.color.more,
                                dropdown: f(g)
                            });
                        return e + h
                    },
                    bold: function(a, b) {
                        return c(b.iconPrefix + b.icons.font.bold, {
                            event: "bold",
                            title: a.font.bold
                        })
                    },
                    italic: function(a, b) {
                        return c(b.iconPrefix + b.icons.font.italic, {
                            event: "italic",
                            title: a.font.italic
                        })
                    },
                    underline: function(a, b) {
                        return c(b.iconPrefix + b.icons.font.underline, {
                            event: "underline",
                            title: a.font.underline
                        })
                    },
                    strikethrough: function(a, b) {
                        return c(b.iconPrefix + b.icons.font.strikethrough, {
                            event: "strikethrough",
                            title: a.font.strikethrough
                        })
                    },
                    superscript: function(a, b) {
                        return c(b.iconPrefix + b.icons.font.superscript, {
                            event: "superscript",
                            title: a.font.superscript
                        })
                    },
                    subscript: function(a, b) {
                        return c(b.iconPrefix + b.icons.font.subscript, {
                            event: "subscript",
                            title: a.font.subscript
                        })
                    },
                    clear: function(a, b) {
                        return c(b.iconPrefix + b.icons.font.clear, {
                            event: "removeFormat",
                            title: a.font.clear
                        })
                    },
                    ul: function(a, b) {
                        return c(b.iconPrefix + b.icons.lists.unordered, {
                            event: "insertUnorderedList",
                            title: a.lists.unordered
                        })
                    },
                    ol: function(a, b) {
                        return c(b.iconPrefix + b.icons.lists.ordered, {
                            event: "insertOrderedList",
                            title: a.lists.ordered
                        })
                    },
                    paragraph: function(a, b) {
                        var d = c(b.iconPrefix + b.icons.paragraph.left, {
                                title: a.paragraph.left,
                                event: "justifyLeft"
                            }),
                            e = c(b.iconPrefix + b.icons.paragraph.center, {
                                title: a.paragraph.center,
                                event: "justifyCenter"
                            }),
                            g = c(b.iconPrefix + b.icons.paragraph.right, {
                                title: a.paragraph.right,
                                event: "justifyRight"
                            }),
                            h = c(b.iconPrefix + b.icons.paragraph.justify, {
                                title: a.paragraph.justify,
                                event: "justifyFull"
                            }),
                            i = c(b.iconPrefix + b.icons.paragraph.outdent, {
                                title: a.paragraph.outdent,
                                event: "outdent"
                            }),
                            j = c(b.iconPrefix + b.icons.paragraph.indent, {
                                title: a.paragraph.indent,
                                event: "indent"
                            }),
                            k = ['<div class="note-align btn-group">', d + e + g + h, '</div><div class="note-list btn-group">', j + i, "</div>"];
                        return c(b.iconPrefix + b.icons.paragraph.paragraph, {
                            title: a.paragraph.paragraph,
                            dropdown: f(k, "", "div")
                        })
                    },
                    height: function(a, b) {
                        var d = b.lineHeights.reduce(function(a, c) {
                            return a + '<li><a data-event="lineHeight" href="#" data-value="' + parseFloat(c) + '"><i class="' + b.iconPrefix + b.icons.misc.check + '"></i> ' + c + "</a></li>"
                        }, "");
                        return c(b.iconPrefix + b.icons.font.height, {
                            title: a.font.height,
                            dropdown: f(d, "note-check")
                        })
                    },
                    help: function(a, b) {
                        return c(b.iconPrefix + b.icons.options.help, {
                            event: "showHelpDialog",
                            title: a.options.help,
                            hide: !0
                        })
                    },
                    fullscreen: function(a, b) {
                        return c(b.iconPrefix + b.icons.options.fullscreen, {
                            event: "fullscreen",
                            title: a.options.fullscreen
                        })
                    },
                    codeview: function(a, b) {
                        return c(b.iconPrefix + b.icons.options.codeview, {
                            event: "codeview",
                            title: a.options.codeview
                        })
                    },
                    undo: function(a, b) {
                        return c(b.iconPrefix + b.icons.history.undo, {
                            event: "undo",
                            title: a.history.undo
                        })
                    },
                    redo: function(a, b) {
                        return c(b.iconPrefix + b.icons.history.redo, {
                            event: "redo",
                            title: a.history.redo
                        })
                    },
                    hr: function(a, b) {
                        return c(b.iconPrefix + b.icons.hr.insert, {
                            event: "insertHorizontalRule",
                            title: a.hr.insert
                        })
                    }
                },
                h = function(e, f) {
                    var h = function() {
                            var a = c(f.iconPrefix + f.icons.link.edit, {
                                    title: e.link.edit,
                                    event: "showLinkDialog",
                                    hide: !0
                                }),
                                b = c(f.iconPrefix + f.icons.link.unlink, {
                                    title: e.link.unlink,
                                    event: "unlink"
                                }),
                                g = '<a href="http://www.google.com" target="_blank">www.google.com</a>&nbsp;&nbsp;<div class="note-insert btn-group">' + a + b + "</div>";
                            return d("note-link-popover", g)
                        },
                        i = function() {
                            var a = b('<span class="note-fontsize-10">100%</span>', {
                                    title: e.image.resizeFull,
                                    event: "resize",
                                    value: "1"
                                }),
                                g = b('<span class="note-fontsize-10">50%</span>', {
                                    title: e.image.resizeHalf,
                                    event: "resize",
                                    value: "0.5"
                                }),
                                h = b('<span class="note-fontsize-10">25%</span>', {
                                    title: e.image.resizeQuarter,
                                    event: "resize",
                                    value: "0.25"
                                }),
                                i = c(f.iconPrefix + f.icons.image.floatLeft, {
                                    title: e.image.floatLeft,
                                    event: "floatMe",
                                    value: "left"
                                }),
                                j = c(f.iconPrefix + f.icons.image.floatRight, {
                                    title: e.image.floatRight,
                                    event: "floatMe",
                                    value: "right"
                                }),
                                k = c(f.iconPrefix + f.icons.image.floatNone, {
                                    title: e.image.floatNone,
                                    event: "floatMe",
                                    value: "none"
                                }),
                                l = c(f.iconPrefix + f.icons.image.shapeRounded, {
                                    title: e.image.shapeRounded,
                                    event: "imageShape",
                                    value: "img-rounded"
                                }),
                                m = c(f.iconPrefix + f.icons.image.shapeCircle, {
                                    title: e.image.shapeCircle,
                                    event: "imageShape",
                                    value: "img-circle"
                                }),
                                n = c(f.iconPrefix + f.icons.image.shapeThumbnail, {
                                    title: e.image.shapeThumbnail,
                                    event: "imageShape",
                                    value: "img-thumbnail"
                                }),
                                o = c(f.iconPrefix + f.icons.image.shapeNone, {
                                    title: e.image.shapeNone,
                                    event: "imageShape",
                                    value: ""
                                }),
                                p = c(f.iconPrefix + f.icons.image.remove, {
                                    title: e.image.remove,
                                    event: "removeMedia",
                                    value: "none"
                                }),
                                q = (f.disableResizeImage ? "" : '<div class="btn-group">' + a + g + h + "</div>") + '<div class="btn-group">' + i + j + k + '</div><br><div class="btn-group">' + l + m + n + o + '</div><div class="btn-group">' + p + "</div>";
                            return d("note-image-popover", q)
                        },
                        j = function() {
                            for (var b = a("<div />"), c = 0, h = f.airPopover.length; h > c; c++) {
                                for (var i = f.airPopover[c], j = a('<div class="note-' + i[0] + ' btn-group">'), k = 0, l = i[1].length; l > k; k++) {
                                    var m = a(g[i[1][k]](e, f));
                                    m.attr("data-name", i[1][k]), j.append(m)
                                }
                                b.append(j)
                            }
                            return d("note-air-popover", b.children())
                        },
                        k = a('<div class="note-popover" />');
                    return k.append(h()), k.append(i()), f.airMode && k.append(j()), k
                },
                l = function(a) {
                    return '<div class="note-handle"><div class="note-control-selection"><div class="note-control-selection-bg"></div><div class="note-control-holder note-control-nw"></div><div class="note-control-holder note-control-ne"></div><div class="note-control-holder note-control-sw"></div><div class="' + (a.disableResizeImage ? "note-control-holder" : "note-control-sizing") + ' note-control-se"></div>' + (a.disableResizeImage ? "" : '<div class="note-control-selection-info"></div>') + "</div></div>"
                },
                m = function(a, b) {
                    var c = "note-shortcut-col col-xs-6 note-shortcut-",
                        d = [];
                    for (var e in b) b.hasOwnProperty(e) && d.push('<div class="' + c + 'key">' + b[e].kbd + '</div><div class="' + c + 'name">' + b[e].text + "</div>");
                    return '<div class="note-shortcut-row row"><div class="' + c + 'title col-xs-offset-6">' + a + '</div></div><div class="note-shortcut-row row">' + d.join('</div><div class="note-shortcut-row row">') + "</div>"
                },
                o = function(a) {
                    var b = [{
                        kbd: "⌘ + B",
                        text: a.font.bold
                    }, {
                        kbd: "⌘ + I",
                        text: a.font.italic
                    }, {
                        kbd: "⌘ + U",
                        text: a.font.underline
                    }, {
                        kbd: "⌘ + \\",
                        text: a.font.clear
                    }];
                    return m(a.shortcut.textFormatting, b)
                },
                p = function(a) {
                    var b = [{
                        kbd: "⌘ + Z",
                        text: a.history.undo
                    }, {
                        kbd: "⌘ + ⇧ + Z",
                        text: a.history.redo
                    }, {
                        kbd: "⌘ + ]",
                        text: a.paragraph.indent
                    }, {
                        kbd: "⌘ + [",
                        text: a.paragraph.outdent
                    }, {
                        kbd: "⌘ + ENTER",
                        text: a.hr.insert
                    }];
                    return m(a.shortcut.action, b)
                },
                q = function(a) {
                    var b = [{
                        kbd: "⌘ + ⇧ + L",
                        text: a.paragraph.left
                    }, {
                        kbd: "⌘ + ⇧ + E",
                        text: a.paragraph.center
                    }, {
                        kbd: "⌘ + ⇧ + R",
                        text: a.paragraph.right
                    }, {
                        kbd: "⌘ + ⇧ + J",
                        text: a.paragraph.justify
                    }, {
                        kbd: "⌘ + ⇧ + NUM7",
                        text: a.lists.ordered
                    }, {
                        kbd: "⌘ + ⇧ + NUM8",
                        text: a.lists.unordered
                    }];
                    return m(a.shortcut.paragraphFormatting, b)
                },
                r = function(a) {
                    var b = [{
                        kbd: "⌘ + NUM0",
                        text: a.style.normal
                    }, {
                        kbd: "⌘ + NUM1",
                        text: a.style.h1
                    }, {
                        kbd: "⌘ + NUM2",
                        text: a.style.h2
                    }, {
                        kbd: "⌘ + NUM3",
                        text: a.style.h3
                    }, {
                        kbd: "⌘ + NUM4",
                        text: a.style.h4
                    }, {
                        kbd: "⌘ + NUM5",
                        text: a.style.h5
                    }, {
                        kbd: "⌘ + NUM6",
                        text: a.style.h6
                    }];
                    return m(a.shortcut.documentStyle, b)
                },
                s = function(a, b) {
                    var c = b.extraKeys,
                        d = [];
                    for (var e in c) c.hasOwnProperty(e) && d.push({
                        kbd: e,
                        text: c[e]
                    });
                    return m(a.shortcut.extraKeys, d)
                },
                t = function(a, b) {
                    var c = 'class="note-shortcut note-shortcut-col col-sm-6 col-xs-12"',
                        d = ["<div " + c + ">" + p(a, b) + "</div><div " + c + ">" + o(a, b) + "</div>", "<div " + c + ">" + r(a, b) + "</div><div " + c + ">" + q(a, b) + "</div>"];
                    return b.extraKeys && d.push("<div " + c + ">" + s(a, b) + "</div>"), '<div class="note-shortcut-row row">' + d.join('</div><div class="note-shortcut-row row">') + "</div>"
                },
                u = function(a) {
                    return a.replace(/⌘/g, "Ctrl").replace(/⇧/g, "Shift")
                },
                v = {
                    image: function(a, b) {
                        var c = "";
                        if (b.maximumImageFileSize) {
                            var d = Math.floor(Math.log(b.maximumImageFileSize) / Math.log(1024)),
                                f = 1 * (b.maximumImageFileSize / Math.pow(1024, d)).toFixed(2) + " " + " KMGTP" [d] + "B";
                            c = "<small>" + a.image.maximumFileSize + " : " + f + "</small>"
                        }
                        var g = '<div class="form-group row note-group-select-from-files"><label>' + a.image.selectFromFiles + '</label><input class="note-image-input form-control" type="file" name="files" accept="image/*" multiple="multiple" />' + c + '</div><div class="form-group row"><label>' + a.image.url + '</label><input class="note-image-url form-control col-md-12" type="text" /></div>',
                            h = '<button href="#" class="btn btn-primary note-image-btn disabled" disabled>' + a.image.insert + "</button>";
                        return e("note-image-dialog", a.image.insert, g, h)
                    },
                    link: function(a, b) {
                        var c = '<div class="form-group row"><label>' + a.link.textToDisplay + '</label><input class="note-link-text form-control col-md-12" type="text" /></div><div class="form-group row"><label>' + a.link.url + '</label><input class="note-link-url form-control col-md-12" type="text" value="http://" /></div>' + (b.disableLinkTarget ? "" : '<div class="checkbox"><label><input type="checkbox" checked> ' + a.link.openInNewWindow + "</label></div>"),
                            d = '<button href="#" class="btn btn-primary note-link-btn disabled" disabled>' + a.link.insert + "</button>";
                        return e("note-link-dialog", a.link.insert, c, d)
                    },
                    help: function(a, b) {
                        var c = '<a class="modal-close pull-right" aria-hidden="true" tabindex="-1">' + a.shortcut.close + '</a><div class="title">' + a.shortcut.shortcuts + "</div>" + (i.isMac ? t(a, b) : u(t(a, b))) + '<p class="text-center"><a href="//summernote.org/" target="_blank">Summernote 0.6.16</a> · <a href="//github.com/summernote/summernote" target="_blank">Project</a> · <a href="//github.com/summernote/summernote/issues" target="_blank">Issues</a></p>';
                        return e("note-help-dialog", "", c, "")
                    }
                },
                w = function(b, c) {
                    var d = "";
                    return a.each(v, function(a, e) {
                        d += e(b, c)
                    }), '<div class="note-dialog">' + d + "</div>"
                },
                x = function() {
                    return '<div class="note-resizebar"><div class="note-icon-bar"></div><div class="note-icon-bar"></div><div class="note-icon-bar"></div></div>'
                },
                y = function(a) {
                    return i.isMac && (a = a.replace("CMD", "⌘").replace("SHIFT", "⇧")), a.replace("BACKSLASH", "\\").replace("SLASH", "/").replace("LEFTBRACKET", "[").replace("RIGHTBRACKET", "]")
                },
                z = function(b, c, d) {
                    var e = j.invertObject(c),
                        f = b.find("button");
                    f.each(function(b, c) {
                        var d = a(c),
                            f = e[d.data("event")];
                        f && d.attr("title", function(a, b) {
                            return b + " (" + y(f) + ")"
                        })
                    }).tooltip({
                        container: "body",
                        trigger: "hover",
                        placement: d || "top"
                    }).on("click", function() {
                        a(this).tooltip("hide")
                    })
                },
                A = function(b, c) {
                    var d = c.colors;
                    b.find(".note-color-palette").each(function() {
                        for (var b = a(this), c = b.attr("data-target-event"), e = [], f = 0, g = d.length; g > f; f++) {
                            for (var h = d[f], i = [], j = 0, k = h.length; k > j; j++) {
                                var l = h[j];
                                i.push(['<button type="button" class="note-color-btn" style="background-color:', l, ';" data-event="', c, '" data-value="', l, '" title="', l, '" data-toggle="button" tabindex="-1"></button>'].join(""))
                            }
                            e.push('<div class="note-color-row">' + i.join("") + "</div>")
                        }
                        b.html(e.join(""))
                    })
                };
            this.createLayoutByAirMode = function(b, c) {
                var d = c.langInfo,
                    e = c.keyMap[i.isMac ? "mac" : "pc"],
                    f = j.uniqueId();
                b.addClass("note-air-editor note-editable panel-body"), b.attr({
                    id: "note-editor-" + f,
                    contentEditable: !0
                });
                var g = document.body,
                    k = a(h(d, c));
                k.addClass("note-air-layout"), k.attr("id", "note-popover-" + f), k.appendTo(g), z(k, e), A(k, c);
                var m = a(l(c));
                m.addClass("note-air-layout"), m.attr("id", "note-handle-" + f), m.appendTo(g);
                var n = a(w(d, c));
                n.addClass("note-air-layout"), n.attr("id", "note-dialog-" + f), n.find("button.close, a.modal-close").click(function() {
                    a(this).closest(".modal").modal("hide")
                }), n.appendTo(g)
            }, this.createLayoutByFrame = function(b, c) {
                var d = c.langInfo,
                    e = a('<div class="note-editor panel panel-default" />');
                c.width && e.width(c.width), c.height > 0 && a('<div class="note-statusbar">' + (c.disableResizeEditor ? "" : x()) + "</div>").prependTo(e);
                var f = a('<div class="note-editing-area" />'),
                    j = !b.is(":disabled"),
                    k = a('<div class="note-editable panel-body" contentEditable="' + j + '"></div>').prependTo(f);
                c.height && k.height(c.height), c.direction && k.attr("dir", c.direction);
                var m = b.attr("placeholder") || c.placeholder;
                m && k.attr("data-placeholder", m), k.html(n.html(b) || n.emptyPara), a('<textarea class="note-codable"></textarea>').prependTo(f);
                var o = a(h(d, c)).prependTo(f);
                A(o, c), z(o, D), a(l(c)).prependTo(f), f.prependTo(e);
                for (var p = a('<div class="note-toolbar panel-heading" />'), q = 0, r = c.toolbar.length; r > q; q++) {
                    for (var s = c.toolbar[q][0], t = c.toolbar[q][1], u = a('<div class="note-' + s + ' btn-group" />'), v = 0, y = t.length; y > v; v++) {
                        var B = g[t[v]];
                        if (a.isFunction(B)) {
                            var C = a(B(d, c));
                            C.attr("data-name", t[v]), u.append(C)
                        }
                    }
                    p.append(u)
                }
                var D = c.keyMap[i.isMac ? "mac" : "pc"];
                A(p, c), z(p, D, "bottom"), p.prependTo(e), a('<div class="note-dropzone"><div class="note-dropzone-message"></div></div>').prependTo(e);
                var E = c.dialogsInBody ? a(document.body) : e,
                    F = a(w(d, c)).prependTo(E);
                F.find("button.close, a.modal-close").click(function() {
                    a(this).closest(".modal").modal("hide")
                }), e.insertAfter(b), b.hide()
            }, this.hasNoteEditor = function(a) {
                return this.noteEditorFromHolder(a).length > 0
            }, this.noteEditorFromHolder = function(b) {
                return b.hasClass("note-air-editor") ? b : b.next().hasClass("note-editor") ? b.next() : a()
            }, this.createLayout = function(a, b) {
                b.airMode ? this.createLayoutByAirMode(a, b) : this.createLayoutByFrame(a, b)
            }, this.layoutInfoFromHolder = function(a) {
                var b = this.noteEditorFromHolder(a);
                if (b.length) return b.data("holder", a), n.buildLayoutInfo(b)
            }, this.removeLayout = function(a, b, c) {
                c.airMode ? (a.removeClass("note-air-editor note-editable").removeAttr("id contentEditable"), b.popover().remove(), b.handle().remove(), b.dialog().remove()) : (a.html(b.editable().html()), c.dialogsInBody && b.dialog().remove(), b.editor().remove(), a.show())
            }, this.getTemplate = function() {
                return {
                    button: b,
                    iconButton: c,
                    dialog: e
                }
            }, this.addButtonInfo = function(a, b) {
                g[a] = b
            }, this.addDialogInfo = function(a, b) {
                v[a] = b
            }
        };
    a.summernote = a.summernote || {}, a.extend(a.summernote, p);
    var O = new N,
        P = new M;
    a.extend(a.summernote, {
        renderer: O,
        eventHandler: P,
        core: {
            agent: i,
            list: k,
            dom: n,
            range: o
        },
        pluginEvents: {},
        plugins: []
    }), a.summernote.addPlugin = function(b) {
        a.summernote.plugins.push(b), b.buttons && a.each(b.buttons, function(a, b) {
            O.addButtonInfo(a, b)
        }), b.dialogs && a.each(b.dialogs, function(a, b) {
            O.addDialogInfo(a, b)
        }), b.events && a.each(b.events, function(b, c) {
            a.summernote.pluginEvents[b] = c
        }), b.langs && a.each(b.langs, function(b, c) {
            a.summernote.lang[b] && a.extend(a.summernote.lang[b], c)
        }), b.options && a.extend(a.summernote.options, b.options)
    }, a.fn.extend({
        summernote: function() {
            var b = a.type(k.head(arguments)),
                c = "string" === b,
                d = "object" === b,
                e = d ? k.head(arguments) : {};
            if (e = a.extend({}, a.summernote.options, e), e.icons = a.extend({}, a.summernote.options.icons, e.icons), e.langInfo = a.extend(!0, {}, a.summernote.lang["en-US"], a.summernote.lang[e.lang]), !c && d)
                for (var f = 0, g = a.summernote.plugins.length; g > f; f++) {
                    var h = a.summernote.plugins[f];
                    e.plugin[h.name] && (a.summernote.plugins[f] = a.extend(!0, h, e.plugin[h.name]))
                }
            this.each(function(b, c) {
                var d = a(c);
                if (!O.hasNoteEditor(d)) {
                    O.createLayout(d, e);
                    var f = O.layoutInfoFromHolder(d);
                    d.data("layoutInfo", f), P.attach(f, e), P.attachCustomEvent(f, e)
                }
            });
            var i = this.first();
            if (i.length) {
                var j = O.layoutInfoFromHolder(i);
                if (c) {
                    var l = k.head(k.from(arguments)),
                        m = k.tail(k.from(arguments)),
                        n = [l, j.editable()].concat(m);
                    return P.invoke.apply(P, n)
                }
                e.focus && j.editable().focus()
            }
            return this
        },
        code: function(b) {
            if (void 0 === b) {
                var c = this.first();
                if (!c.length) return;
                var d = O.layoutInfoFromHolder(c),
                    e = d && d.editable();
                if (e && e.length) {
                    var f = P.invoke("codeview.isActivated", d);
                    return P.invoke("codeview.sync", d), f ? d.codable().val() : d.editable().html()
                }
                return n.value(c)
            }
            return this.each(function(c, d) {
                var e = O.layoutInfoFromHolder(a(d)),
                    f = e && e.editable();
                f && f.html(b)
            }), this
        },
        destroy: function() {
            return this.each(function(b, c) {
                var d = a(c);
                if (O.hasNoteEditor(d)) {
                    var e = O.layoutInfoFromHolder(d),
                        f = e.editor().data("options");
                    P.detach(e, f), O.removeLayout(d, e, f)
                }
            }), this
        }
    })
});