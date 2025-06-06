import {
  require_react
} from "./chunk-4SFRHSJ3.js";
import {
  __commonJS
} from "./chunk-EQCVQC35.js";

// node_modules/react-lazy-load-image-component/build/index.js
var require_build = __commonJS({
  "node_modules/react-lazy-load-image-component/build/index.js"(exports, module) {
    (() => {
      var e = { 296: (e2, t2, r2) => {
        var o2 = /^\s+|\s+$/g, n = /^[-+]0x[0-9a-f]+$/i, i = /^0b[01]+$/i, c = /^0o[0-7]+$/i, u = parseInt, s = "object" == typeof r2.g && r2.g && r2.g.Object === Object && r2.g, l = "object" == typeof self && self && self.Object === Object && self, a = s || l || Function("return this")(), f = Object.prototype.toString, p = Math.max, y = Math.min, b = function() {
          return a.Date.now();
        };
        function d(e3) {
          var t3 = typeof e3;
          return !!e3 && ("object" == t3 || "function" == t3);
        }
        function h(e3) {
          if ("number" == typeof e3) return e3;
          if (function(e4) {
            return "symbol" == typeof e4 || /* @__PURE__ */ function(e5) {
              return !!e5 && "object" == typeof e5;
            }(e4) && "[object Symbol]" == f.call(e4);
          }(e3)) return NaN;
          if (d(e3)) {
            var t3 = "function" == typeof e3.valueOf ? e3.valueOf() : e3;
            e3 = d(t3) ? t3 + "" : t3;
          }
          if ("string" != typeof e3) return 0 === e3 ? e3 : +e3;
          e3 = e3.replace(o2, "");
          var r3 = i.test(e3);
          return r3 || c.test(e3) ? u(e3.slice(2), r3 ? 2 : 8) : n.test(e3) ? NaN : +e3;
        }
        e2.exports = function(e3, t3, r3) {
          var o3, n2, i2, c2, u2, s2, l2 = 0, a2 = false, f2 = false, v = true;
          if ("function" != typeof e3) throw new TypeError("Expected a function");
          function m(t4) {
            var r4 = o3, i3 = n2;
            return o3 = n2 = void 0, l2 = t4, c2 = e3.apply(i3, r4);
          }
          function O(e4) {
            var r4 = e4 - s2;
            return void 0 === s2 || r4 >= t3 || r4 < 0 || f2 && e4 - l2 >= i2;
          }
          function w() {
            var e4 = b();
            if (O(e4)) return g(e4);
            u2 = setTimeout(w, function(e5) {
              var r4 = t3 - (e5 - s2);
              return f2 ? y(r4, i2 - (e5 - l2)) : r4;
            }(e4));
          }
          function g(e4) {
            return u2 = void 0, v && o3 ? m(e4) : (o3 = n2 = void 0, c2);
          }
          function P() {
            var e4 = b(), r4 = O(e4);
            if (o3 = arguments, n2 = this, s2 = e4, r4) {
              if (void 0 === u2) return function(e5) {
                return l2 = e5, u2 = setTimeout(w, t3), a2 ? m(e5) : c2;
              }(s2);
              if (f2) return u2 = setTimeout(w, t3), m(s2);
            }
            return void 0 === u2 && (u2 = setTimeout(w, t3)), c2;
          }
          return t3 = h(t3) || 0, d(r3) && (a2 = !!r3.leading, i2 = (f2 = "maxWait" in r3) ? p(h(r3.maxWait) || 0, t3) : i2, v = "trailing" in r3 ? !!r3.trailing : v), P.cancel = function() {
            void 0 !== u2 && clearTimeout(u2), l2 = 0, o3 = s2 = n2 = u2 = void 0;
          }, P.flush = function() {
            return void 0 === u2 ? c2 : g(b());
          }, P;
        };
      }, 96: (e2, t2, r2) => {
        var o2 = "Expected a function", n = NaN, i = "[object Symbol]", c = /^\s+|\s+$/g, u = /^[-+]0x[0-9a-f]+$/i, s = /^0b[01]+$/i, l = /^0o[0-7]+$/i, a = parseInt, f = "object" == typeof r2.g && r2.g && r2.g.Object === Object && r2.g, p = "object" == typeof self && self && self.Object === Object && self, y = f || p || Function("return this")(), b = Object.prototype.toString, d = Math.max, h = Math.min, v = function() {
          return y.Date.now();
        };
        function m(e3) {
          var t3 = typeof e3;
          return !!e3 && ("object" == t3 || "function" == t3);
        }
        function O(e3) {
          if ("number" == typeof e3) return e3;
          if (function(e4) {
            return "symbol" == typeof e4 || /* @__PURE__ */ function(e5) {
              return !!e5 && "object" == typeof e5;
            }(e4) && b.call(e4) == i;
          }(e3)) return n;
          if (m(e3)) {
            var t3 = "function" == typeof e3.valueOf ? e3.valueOf() : e3;
            e3 = m(t3) ? t3 + "" : t3;
          }
          if ("string" != typeof e3) return 0 === e3 ? e3 : +e3;
          e3 = e3.replace(c, "");
          var r3 = s.test(e3);
          return r3 || l.test(e3) ? a(e3.slice(2), r3 ? 2 : 8) : u.test(e3) ? n : +e3;
        }
        e2.exports = function(e3, t3, r3) {
          var n2 = true, i2 = true;
          if ("function" != typeof e3) throw new TypeError(o2);
          return m(r3) && (n2 = "leading" in r3 ? !!r3.leading : n2, i2 = "trailing" in r3 ? !!r3.trailing : i2), function(e4, t4, r4) {
            var n3, i3, c2, u2, s2, l2, a2 = 0, f2 = false, p2 = false, y2 = true;
            if ("function" != typeof e4) throw new TypeError(o2);
            function b2(t5) {
              var r5 = n3, o3 = i3;
              return n3 = i3 = void 0, a2 = t5, u2 = e4.apply(o3, r5);
            }
            function w(e5) {
              var r5 = e5 - l2;
              return void 0 === l2 || r5 >= t4 || r5 < 0 || p2 && e5 - a2 >= c2;
            }
            function g() {
              var e5 = v();
              if (w(e5)) return P(e5);
              s2 = setTimeout(g, function(e6) {
                var r5 = t4 - (e6 - l2);
                return p2 ? h(r5, c2 - (e6 - a2)) : r5;
              }(e5));
            }
            function P(e5) {
              return s2 = void 0, y2 && n3 ? b2(e5) : (n3 = i3 = void 0, u2);
            }
            function j() {
              var e5 = v(), r5 = w(e5);
              if (n3 = arguments, i3 = this, l2 = e5, r5) {
                if (void 0 === s2) return function(e6) {
                  return a2 = e6, s2 = setTimeout(g, t4), f2 ? b2(e6) : u2;
                }(l2);
                if (p2) return s2 = setTimeout(g, t4), b2(l2);
              }
              return void 0 === s2 && (s2 = setTimeout(g, t4)), u2;
            }
            return t4 = O(t4) || 0, m(r4) && (f2 = !!r4.leading, c2 = (p2 = "maxWait" in r4) ? d(O(r4.maxWait) || 0, t4) : c2, y2 = "trailing" in r4 ? !!r4.trailing : y2), j.cancel = function() {
              void 0 !== s2 && clearTimeout(s2), a2 = 0, n3 = l2 = i3 = s2 = void 0;
            }, j.flush = function() {
              return void 0 === s2 ? u2 : P(v());
            }, j;
          }(e3, t3, { leading: n2, maxWait: t3, trailing: i2 });
        };
      }, 703: (e2, t2, r2) => {
        "use strict";
        var o2 = r2(414);
        function n() {
        }
        function i() {
        }
        i.resetWarningCache = n, e2.exports = function() {
          function e3(e4, t4, r4, n2, i2, c) {
            if (c !== o2) {
              var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
              throw u.name = "Invariant Violation", u;
            }
          }
          function t3() {
            return e3;
          }
          e3.isRequired = e3;
          var r3 = { array: e3, bigint: e3, bool: e3, func: e3, number: e3, object: e3, string: e3, symbol: e3, any: e3, arrayOf: t3, element: e3, elementType: e3, instanceOf: t3, node: e3, objectOf: t3, oneOf: t3, oneOfType: t3, shape: t3, exact: t3, checkPropTypes: i, resetWarningCache: n };
          return r3.PropTypes = r3, r3;
        };
      }, 697: (e2, t2, r2) => {
        e2.exports = r2(703)();
      }, 414: (e2) => {
        "use strict";
        e2.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      } }, t = {};
      function r(o2) {
        var n = t[o2];
        if (void 0 !== n) return n.exports;
        var i = t[o2] = { exports: {} };
        return e[o2](i, i.exports, r), i.exports;
      }
      r.n = (e2) => {
        var t2 = e2 && e2.__esModule ? () => e2.default : () => e2;
        return r.d(t2, { a: t2 }), t2;
      }, r.d = (e2, t2) => {
        for (var o2 in t2) r.o(t2, o2) && !r.o(e2, o2) && Object.defineProperty(e2, o2, { enumerable: true, get: t2[o2] });
      }, r.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e2) {
          if ("object" == typeof window) return window;
        }
      }(), r.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), r.r = (e2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      };
      var o = {};
      (() => {
        "use strict";
        r.r(o), r.d(o, { LazyLoadComponent: () => Y, LazyLoadImage: () => ne, trackWindowScroll: () => D });
        const e2 = require_react();
        var t2 = r.n(e2), n = r(697);
        function i() {
          return "undefined" != typeof window && "IntersectionObserver" in window && "isIntersecting" in window.IntersectionObserverEntry.prototype;
        }
        function c(e3) {
          return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, c(e3);
        }
        function u(e3, t3) {
          var r2 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var o2 = Object.getOwnPropertySymbols(e3);
            t3 && (o2 = o2.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), r2.push.apply(r2, o2);
          }
          return r2;
        }
        function s(e3, t3, r2) {
          return (t3 = a(t3)) in e3 ? Object.defineProperty(e3, t3, { value: r2, enumerable: true, configurable: true, writable: true }) : e3[t3] = r2, e3;
        }
        function l(e3, t3) {
          for (var r2 = 0; r2 < t3.length; r2++) {
            var o2 = t3[r2];
            o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e3, a(o2.key), o2);
          }
        }
        function a(e3) {
          var t3 = function(e4, t4) {
            if ("object" !== c(e4) || null === e4) return e4;
            var r2 = e4[Symbol.toPrimitive];
            if (void 0 !== r2) {
              var o2 = r2.call(e4, "string");
              if ("object" !== c(o2)) return o2;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(e4);
          }(e3);
          return "symbol" === c(t3) ? t3 : String(t3);
        }
        function f(e3, t3) {
          return f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
            return e4.__proto__ = t4, e4;
          }, f(e3, t3);
        }
        function p(e3) {
          return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e4) {
            return e4.__proto__ || Object.getPrototypeOf(e4);
          }, p(e3);
        }
        var y = function(e3) {
          e3.forEach(function(e4) {
            e4.isIntersecting && e4.target.onVisible();
          });
        }, b = {}, d = function(e3) {
          !function(e4, t3) {
            if ("function" != typeof t3 && null !== t3) throw new TypeError("Super expression must either be null or a function");
            e4.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e4, writable: true, configurable: true } }), Object.defineProperty(e4, "prototype", { writable: false }), t3 && f(e4, t3);
          }(h2, e3);
          var r2, o2, n2, a2, d2 = (n2 = h2, a2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return false;
            if (Reflect.construct.sham) return false;
            if ("function" == typeof Proxy) return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, t3 = p(n2);
            if (a2) {
              var r3 = p(this).constructor;
              e4 = Reflect.construct(t3, arguments, r3);
            } else e4 = t3.apply(this, arguments);
            return function(e5, t4) {
              if (t4 && ("object" === c(t4) || "function" == typeof t4)) return t4;
              if (void 0 !== t4) throw new TypeError("Derived constructors may only return object or undefined");
              return function(e6) {
                if (void 0 === e6) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e6;
              }(e5);
            }(this, e4);
          });
          function h2(e4) {
            var t3;
            if (function(e5, t4) {
              if (!(e5 instanceof t4)) throw new TypeError("Cannot call a class as a function");
            }(this, h2), (t3 = d2.call(this, e4)).supportsObserver = !e4.scrollPosition && e4.useIntersectionObserver && i(), t3.supportsObserver) {
              var r3 = e4.threshold;
              t3.observer = function(e5) {
                return b[e5] = b[e5] || new IntersectionObserver(y, { rootMargin: e5 + "px" }), b[e5];
              }(r3);
            }
            return t3;
          }
          return r2 = h2, o2 = [{ key: "componentDidMount", value: function() {
            this.placeholder && this.observer && (this.placeholder.onVisible = this.props.onVisible, this.observer.observe(this.placeholder)), this.supportsObserver || this.updateVisibility();
          } }, { key: "componentWillUnmount", value: function() {
            this.observer && this.placeholder && this.observer.unobserve(this.placeholder);
          } }, { key: "componentDidUpdate", value: function() {
            this.supportsObserver || this.updateVisibility();
          } }, { key: "getPlaceholderBoundingBox", value: function() {
            var e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props.scrollPosition, t3 = this.placeholder.getBoundingClientRect(), r3 = this.placeholder.style, o3 = parseInt(r3.getPropertyValue("margin-left"), 10) || 0, n3 = parseInt(r3.getPropertyValue("margin-top"), 10) || 0;
            return { bottom: e4.y + t3.bottom + n3, left: e4.x + t3.left + o3, right: e4.x + t3.right + o3, top: e4.y + t3.top + n3 };
          } }, { key: "isPlaceholderInViewport", value: function() {
            if ("undefined" == typeof window || !this.placeholder) return false;
            var e4 = this.props, t3 = e4.scrollPosition, r3 = e4.threshold, o3 = this.getPlaceholderBoundingBox(t3), n3 = t3.y + window.innerHeight, i2 = t3.x, c2 = t3.x + window.innerWidth, u2 = t3.y;
            return Boolean(u2 - r3 <= o3.bottom && n3 + r3 >= o3.top && i2 - r3 <= o3.right && c2 + r3 >= o3.left);
          } }, { key: "updateVisibility", value: function() {
            this.isPlaceholderInViewport() && this.props.onVisible();
          } }, { key: "render", value: function() {
            var e4 = this, r3 = this.props, o3 = r3.className, n3 = r3.height, i2 = r3.placeholder, c2 = r3.style, l2 = r3.width;
            if (i2 && "function" != typeof i2.type) return t2().cloneElement(i2, { ref: function(t3) {
              return e4.placeholder = t3;
            } });
            var a3 = function(e5) {
              for (var t3 = 1; t3 < arguments.length; t3++) {
                var r4 = null != arguments[t3] ? arguments[t3] : {};
                t3 % 2 ? u(Object(r4), true).forEach(function(t4) {
                  s(e5, t4, r4[t4]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e5, Object.getOwnPropertyDescriptors(r4)) : u(Object(r4)).forEach(function(t4) {
                  Object.defineProperty(e5, t4, Object.getOwnPropertyDescriptor(r4, t4));
                });
              }
              return e5;
            }({ display: "inline-block" }, c2);
            return void 0 !== l2 && (a3.width = l2), void 0 !== n3 && (a3.height = n3), t2().createElement("span", { className: o3, ref: function(t3) {
              return e4.placeholder = t3;
            }, style: a3 }, i2);
          } }], o2 && l(r2.prototype, o2), Object.defineProperty(r2, "prototype", { writable: false }), h2;
        }(t2().Component);
        d.propTypes = { onVisible: n.PropTypes.func.isRequired, className: n.PropTypes.string, height: n.PropTypes.oneOfType([n.PropTypes.number, n.PropTypes.string]), placeholder: n.PropTypes.element, threshold: n.PropTypes.number, useIntersectionObserver: n.PropTypes.bool, scrollPosition: n.PropTypes.shape({ x: n.PropTypes.number.isRequired, y: n.PropTypes.number.isRequired }), width: n.PropTypes.oneOfType([n.PropTypes.number, n.PropTypes.string]) }, d.defaultProps = { className: "", placeholder: null, threshold: 100, useIntersectionObserver: true };
        const h = d;
        var v = r(296), m = r.n(v), O = r(96), w = r.n(O), g = function(e3) {
          var t3 = getComputedStyle(e3, null);
          return t3.getPropertyValue("overflow") + t3.getPropertyValue("overflow-y") + t3.getPropertyValue("overflow-x");
        };
        const P = function(e3) {
          if (!(e3 instanceof HTMLElement)) return window;
          for (var t3 = e3; t3 && t3 instanceof HTMLElement; ) {
            if (/(scroll|auto)/.test(g(t3))) return t3;
            t3 = t3.parentNode;
          }
          return window;
        };
        function j(e3) {
          return j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, j(e3);
        }
        var T = ["delayMethod", "delayTime"];
        function S() {
          return S = Object.assign ? Object.assign.bind() : function(e3) {
            for (var t3 = 1; t3 < arguments.length; t3++) {
              var r2 = arguments[t3];
              for (var o2 in r2) Object.prototype.hasOwnProperty.call(r2, o2) && (e3[o2] = r2[o2]);
            }
            return e3;
          }, S.apply(this, arguments);
        }
        function E(e3, t3) {
          for (var r2 = 0; r2 < t3.length; r2++) {
            var o2 = t3[r2];
            o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e3, (void 0, n2 = function(e4, t4) {
              if ("object" !== j(e4) || null === e4) return e4;
              var r3 = e4[Symbol.toPrimitive];
              if (void 0 !== r3) {
                var o3 = r3.call(e4, "string");
                if ("object" !== j(o3)) return o3;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e4);
            }(o2.key), "symbol" === j(n2) ? n2 : String(n2)), o2);
          }
          var n2;
        }
        function L(e3, t3) {
          return L = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
            return e4.__proto__ = t4, e4;
          }, L(e3, t3);
        }
        function _(e3, t3) {
          if (t3 && ("object" === j(t3) || "function" == typeof t3)) return t3;
          if (void 0 !== t3) throw new TypeError("Derived constructors may only return object or undefined");
          return I(e3);
        }
        function I(e3) {
          if (void 0 === e3) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e3;
        }
        function x(e3) {
          return x = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e4) {
            return e4.__proto__ || Object.getPrototypeOf(e4);
          }, x(e3);
        }
        var R = function() {
          return "undefined" == typeof window ? 0 : window.scrollX || window.pageXOffset;
        }, k = function() {
          return "undefined" == typeof window ? 0 : window.scrollY || window.pageYOffset;
        };
        const D = function(e3) {
          var r2 = function(r3) {
            !function(e4, t3) {
              if ("function" != typeof t3 && null !== t3) throw new TypeError("Super expression must either be null or a function");
              e4.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e4, writable: true, configurable: true } }), Object.defineProperty(e4, "prototype", { writable: false }), t3 && L(e4, t3);
            }(l2, r3);
            var o2, n2, c2, u2, s2 = (c2 = l2, u2 = function() {
              if ("undefined" == typeof Reflect || !Reflect.construct) return false;
              if (Reflect.construct.sham) return false;
              if ("function" == typeof Proxy) return true;
              try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                })), true;
              } catch (e4) {
                return false;
              }
            }(), function() {
              var e4, t3 = x(c2);
              if (u2) {
                var r4 = x(this).constructor;
                e4 = Reflect.construct(t3, arguments, r4);
              } else e4 = t3.apply(this, arguments);
              return _(this, e4);
            });
            function l2(e4) {
              var r4;
              if (function(e5, t3) {
                if (!(e5 instanceof t3)) throw new TypeError("Cannot call a class as a function");
              }(this, l2), (r4 = s2.call(this, e4)).useIntersectionObserver = e4.useIntersectionObserver && i(), r4.useIntersectionObserver) return _(r4);
              var o3 = r4.onChangeScroll.bind(I(r4));
              return "debounce" === e4.delayMethod ? r4.delayedScroll = m()(o3, e4.delayTime) : "throttle" === e4.delayMethod && (r4.delayedScroll = w()(o3, e4.delayTime)), r4.state = { scrollPosition: { x: R(), y: k() } }, r4.baseComponentRef = t2().createRef(), r4;
            }
            return o2 = l2, (n2 = [{ key: "componentDidMount", value: function() {
              this.addListeners();
            } }, { key: "componentWillUnmount", value: function() {
              this.removeListeners();
            } }, { key: "componentDidUpdate", value: function() {
              "undefined" == typeof window || this.useIntersectionObserver || P(this.baseComponentRef.current) !== this.scrollElement && (this.removeListeners(), this.addListeners());
            } }, { key: "addListeners", value: function() {
              "undefined" == typeof window || this.useIntersectionObserver || (this.scrollElement = P(this.baseComponentRef.current), this.scrollElement.addEventListener("scroll", this.delayedScroll, { passive: true }), window.addEventListener("resize", this.delayedScroll, { passive: true }), this.scrollElement !== window && window.addEventListener("scroll", this.delayedScroll, { passive: true }));
            } }, { key: "removeListeners", value: function() {
              "undefined" == typeof window || this.useIntersectionObserver || (this.scrollElement.removeEventListener("scroll", this.delayedScroll), window.removeEventListener("resize", this.delayedScroll), this.scrollElement !== window && window.removeEventListener("scroll", this.delayedScroll));
            } }, { key: "onChangeScroll", value: function() {
              this.useIntersectionObserver || this.setState({ scrollPosition: { x: R(), y: k() } });
            } }, { key: "render", value: function() {
              var r4 = this.props, o3 = (r4.delayMethod, r4.delayTime, function(e4, t3) {
                if (null == e4) return {};
                var r5, o4, n4 = function(e5, t4) {
                  if (null == e5) return {};
                  var r6, o5, n5 = {}, i3 = Object.keys(e5);
                  for (o5 = 0; o5 < i3.length; o5++) r6 = i3[o5], t4.indexOf(r6) >= 0 || (n5[r6] = e5[r6]);
                  return n5;
                }(e4, t3);
                if (Object.getOwnPropertySymbols) {
                  var i2 = Object.getOwnPropertySymbols(e4);
                  for (o4 = 0; o4 < i2.length; o4++) r5 = i2[o4], t3.indexOf(r5) >= 0 || Object.prototype.propertyIsEnumerable.call(e4, r5) && (n4[r5] = e4[r5]);
                }
                return n4;
              }(r4, T)), n3 = this.useIntersectionObserver ? null : this.state.scrollPosition;
              return t2().createElement(e3, S({ forwardRef: this.baseComponentRef, scrollPosition: n3 }, o3));
            } }]) && E(o2.prototype, n2), Object.defineProperty(o2, "prototype", { writable: false }), l2;
          }(t2().Component);
          return r2.propTypes = { delayMethod: n.PropTypes.oneOf(["debounce", "throttle"]), delayTime: n.PropTypes.number, useIntersectionObserver: n.PropTypes.bool }, r2.defaultProps = { delayMethod: "throttle", delayTime: 300, useIntersectionObserver: true }, r2;
        };
        function C(e3) {
          return C = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, C(e3);
        }
        function B(e3, t3) {
          for (var r2 = 0; r2 < t3.length; r2++) {
            var o2 = t3[r2];
            o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e3, (void 0, n2 = function(e4, t4) {
              if ("object" !== C(e4) || null === e4) return e4;
              var r3 = e4[Symbol.toPrimitive];
              if (void 0 !== r3) {
                var o3 = r3.call(e4, "string");
                if ("object" !== C(o3)) return o3;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e4);
            }(o2.key), "symbol" === C(n2) ? n2 : String(n2)), o2);
          }
          var n2;
        }
        function M(e3, t3) {
          return M = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
            return e4.__proto__ = t4, e4;
          }, M(e3, t3);
        }
        function N(e3) {
          return N = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e4) {
            return e4.__proto__ || Object.getPrototypeOf(e4);
          }, N(e3);
        }
        var V = function(e3) {
          !function(e4, t3) {
            if ("function" != typeof t3 && null !== t3) throw new TypeError("Super expression must either be null or a function");
            e4.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e4, writable: true, configurable: true } }), Object.defineProperty(e4, "prototype", { writable: false }), t3 && M(e4, t3);
          }(u2, e3);
          var r2, o2, n2, i2, c2 = (n2 = u2, i2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return false;
            if (Reflect.construct.sham) return false;
            if ("function" == typeof Proxy) return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, t3 = N(n2);
            if (i2) {
              var r3 = N(this).constructor;
              e4 = Reflect.construct(t3, arguments, r3);
            } else e4 = t3.apply(this, arguments);
            return function(e5, t4) {
              if (t4 && ("object" === C(t4) || "function" == typeof t4)) return t4;
              if (void 0 !== t4) throw new TypeError("Derived constructors may only return object or undefined");
              return function(e6) {
                if (void 0 === e6) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e6;
              }(e5);
            }(this, e4);
          });
          function u2(e4) {
            return function(e5, t3) {
              if (!(e5 instanceof t3)) throw new TypeError("Cannot call a class as a function");
            }(this, u2), c2.call(this, e4);
          }
          return r2 = u2, (o2 = [{ key: "render", value: function() {
            return t2().createElement(h, this.props);
          } }]) && B(r2.prototype, o2), Object.defineProperty(r2, "prototype", { writable: false }), u2;
        }(t2().Component);
        const W = D(V);
        function z(e3) {
          return z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, z(e3);
        }
        function $(e3, t3) {
          for (var r2 = 0; r2 < t3.length; r2++) {
            var o2 = t3[r2];
            o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e3, (void 0, n2 = function(e4, t4) {
              if ("object" !== z(e4) || null === e4) return e4;
              var r3 = e4[Symbol.toPrimitive];
              if (void 0 !== r3) {
                var o3 = r3.call(e4, "string");
                if ("object" !== z(o3)) return o3;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e4);
            }(o2.key), "symbol" === z(n2) ? n2 : String(n2)), o2);
          }
          var n2;
        }
        function U(e3, t3) {
          return U = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
            return e4.__proto__ = t4, e4;
          }, U(e3, t3);
        }
        function F(e3) {
          if (void 0 === e3) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e3;
        }
        function q(e3) {
          return q = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e4) {
            return e4.__proto__ || Object.getPrototypeOf(e4);
          }, q(e3);
        }
        var H = function(e3) {
          !function(e4, t3) {
            if ("function" != typeof t3 && null !== t3) throw new TypeError("Super expression must either be null or a function");
            e4.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e4, writable: true, configurable: true } }), Object.defineProperty(e4, "prototype", { writable: false }), t3 && U(e4, t3);
          }(s2, e3);
          var r2, o2, n2, c2, u2 = (n2 = s2, c2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return false;
            if (Reflect.construct.sham) return false;
            if ("function" == typeof Proxy) return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, t3 = q(n2);
            if (c2) {
              var r3 = q(this).constructor;
              e4 = Reflect.construct(t3, arguments, r3);
            } else e4 = t3.apply(this, arguments);
            return function(e5, t4) {
              if (t4 && ("object" === z(t4) || "function" == typeof t4)) return t4;
              if (void 0 !== t4) throw new TypeError("Derived constructors may only return object or undefined");
              return F(e5);
            }(this, e4);
          });
          function s2(e4) {
            var t3;
            !function(e5, t4) {
              if (!(e5 instanceof t4)) throw new TypeError("Cannot call a class as a function");
            }(this, s2), t3 = u2.call(this, e4);
            var r3 = e4.afterLoad, o3 = e4.beforeLoad, n3 = e4.scrollPosition, i2 = e4.visibleByDefault;
            return t3.state = { visible: i2 }, i2 && (o3(), r3()), t3.onVisible = t3.onVisible.bind(F(t3)), t3.isScrollTracked = Boolean(n3 && Number.isFinite(n3.x) && n3.x >= 0 && Number.isFinite(n3.y) && n3.y >= 0), t3;
          }
          return r2 = s2, (o2 = [{ key: "componentDidUpdate", value: function(e4, t3) {
            t3.visible !== this.state.visible && this.props.afterLoad();
          } }, { key: "onVisible", value: function() {
            this.props.beforeLoad(), this.setState({ visible: true });
          } }, { key: "render", value: function() {
            if (this.state.visible) return this.props.children;
            var e4 = this.props, r3 = e4.className, o3 = e4.delayMethod, n3 = e4.delayTime, c3 = e4.height, u3 = e4.placeholder, s3 = e4.scrollPosition, l2 = e4.style, a2 = e4.threshold, f2 = e4.useIntersectionObserver, p2 = e4.width;
            return this.isScrollTracked || f2 && i() ? t2().createElement(h, { className: r3, height: c3, onVisible: this.onVisible, placeholder: u3, scrollPosition: s3, style: l2, threshold: a2, useIntersectionObserver: f2, width: p2 }) : t2().createElement(W, { className: r3, delayMethod: o3, delayTime: n3, height: c3, onVisible: this.onVisible, placeholder: u3, style: l2, threshold: a2, width: p2 });
          } }]) && $(r2.prototype, o2), Object.defineProperty(r2, "prototype", { writable: false }), s2;
        }(t2().Component);
        H.propTypes = { afterLoad: n.PropTypes.func, beforeLoad: n.PropTypes.func, useIntersectionObserver: n.PropTypes.bool, visibleByDefault: n.PropTypes.bool }, H.defaultProps = { afterLoad: function() {
          return {};
        }, beforeLoad: function() {
          return {};
        }, useIntersectionObserver: true, visibleByDefault: false };
        const Y = H;
        function X(e3) {
          return X = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, X(e3);
        }
        var A = ["afterLoad", "beforeLoad", "delayMethod", "delayTime", "effect", "placeholder", "placeholderSrc", "scrollPosition", "threshold", "useIntersectionObserver", "visibleByDefault", "wrapperClassName", "wrapperProps"];
        function G(e3, t3) {
          var r2 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var o2 = Object.getOwnPropertySymbols(e3);
            t3 && (o2 = o2.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), r2.push.apply(r2, o2);
          }
          return r2;
        }
        function J(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var r2 = null != arguments[t3] ? arguments[t3] : {};
            t3 % 2 ? G(Object(r2), true).forEach(function(t4) {
              K(e3, t4, r2[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r2)) : G(Object(r2)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(r2, t4));
            });
          }
          return e3;
        }
        function K(e3, t3, r2) {
          return (t3 = ee(t3)) in e3 ? Object.defineProperty(e3, t3, { value: r2, enumerable: true, configurable: true, writable: true }) : e3[t3] = r2, e3;
        }
        function Q() {
          return Q = Object.assign ? Object.assign.bind() : function(e3) {
            for (var t3 = 1; t3 < arguments.length; t3++) {
              var r2 = arguments[t3];
              for (var o2 in r2) Object.prototype.hasOwnProperty.call(r2, o2) && (e3[o2] = r2[o2]);
            }
            return e3;
          }, Q.apply(this, arguments);
        }
        function Z(e3, t3) {
          for (var r2 = 0; r2 < t3.length; r2++) {
            var o2 = t3[r2];
            o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e3, ee(o2.key), o2);
          }
        }
        function ee(e3) {
          var t3 = function(e4, t4) {
            if ("object" !== X(e4) || null === e4) return e4;
            var r2 = e4[Symbol.toPrimitive];
            if (void 0 !== r2) {
              var o2 = r2.call(e4, "string");
              if ("object" !== X(o2)) return o2;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(e4);
          }(e3);
          return "symbol" === X(t3) ? t3 : String(t3);
        }
        function te(e3, t3) {
          return te = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
            return e4.__proto__ = t4, e4;
          }, te(e3, t3);
        }
        function re(e3) {
          return re = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e4) {
            return e4.__proto__ || Object.getPrototypeOf(e4);
          }, re(e3);
        }
        var oe = function(e3) {
          !function(e4, t3) {
            if ("function" != typeof t3 && null !== t3) throw new TypeError("Super expression must either be null or a function");
            e4.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e4, writable: true, configurable: true } }), Object.defineProperty(e4, "prototype", { writable: false }), t3 && te(e4, t3);
          }(u2, e3);
          var r2, o2, n2, i2, c2 = (n2 = u2, i2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return false;
            if (Reflect.construct.sham) return false;
            if ("function" == typeof Proxy) return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, t3 = re(n2);
            if (i2) {
              var r3 = re(this).constructor;
              e4 = Reflect.construct(t3, arguments, r3);
            } else e4 = t3.apply(this, arguments);
            return function(e5, t4) {
              if (t4 && ("object" === X(t4) || "function" == typeof t4)) return t4;
              if (void 0 !== t4) throw new TypeError("Derived constructors may only return object or undefined");
              return function(e6) {
                if (void 0 === e6) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e6;
              }(e5);
            }(this, e4);
          });
          function u2(e4) {
            var t3;
            return function(e5, t4) {
              if (!(e5 instanceof t4)) throw new TypeError("Cannot call a class as a function");
            }(this, u2), (t3 = c2.call(this, e4)).state = { loaded: false }, t3;
          }
          return r2 = u2, (o2 = [{ key: "onImageLoad", value: function() {
            var e4 = this;
            return this.state.loaded ? null : function(t3) {
              e4.props.onLoad(t3), e4.props.afterLoad(), e4.setState({ loaded: true });
            };
          } }, { key: "getImg", value: function() {
            var e4 = this.props, r3 = (e4.afterLoad, e4.beforeLoad, e4.delayMethod, e4.delayTime, e4.effect, e4.placeholder, e4.placeholderSrc, e4.scrollPosition, e4.threshold, e4.useIntersectionObserver, e4.visibleByDefault, e4.wrapperClassName, e4.wrapperProps, function(e5, t3) {
              if (null == e5) return {};
              var r4, o3, n3 = function(e6, t4) {
                if (null == e6) return {};
                var r5, o4, n4 = {}, i4 = Object.keys(e6);
                for (o4 = 0; o4 < i4.length; o4++) r5 = i4[o4], t4.indexOf(r5) >= 0 || (n4[r5] = e6[r5]);
                return n4;
              }(e5, t3);
              if (Object.getOwnPropertySymbols) {
                var i3 = Object.getOwnPropertySymbols(e5);
                for (o3 = 0; o3 < i3.length; o3++) r4 = i3[o3], t3.indexOf(r4) >= 0 || Object.prototype.propertyIsEnumerable.call(e5, r4) && (n3[r4] = e5[r4]);
              }
              return n3;
            }(e4, A));
            return t2().createElement("img", Q({}, r3, { onLoad: this.onImageLoad() }));
          } }, { key: "getLazyLoadImage", value: function() {
            var e4 = this.props, r3 = e4.beforeLoad, o3 = e4.className, n3 = e4.delayMethod, i3 = e4.delayTime, c3 = e4.height, u3 = e4.placeholder, s2 = e4.scrollPosition, l2 = e4.style, a2 = e4.threshold, f2 = e4.useIntersectionObserver, p2 = e4.visibleByDefault, y2 = e4.width;
            return t2().createElement(Y, { beforeLoad: r3, className: o3, delayMethod: n3, delayTime: i3, height: c3, placeholder: u3, scrollPosition: s2, style: l2, threshold: a2, useIntersectionObserver: f2, visibleByDefault: p2, width: y2 }, this.getImg());
          } }, { key: "getWrappedLazyLoadImage", value: function(e4) {
            var r3 = this.props, o3 = r3.effect, n3 = r3.height, i3 = r3.placeholderSrc, c3 = r3.width, u3 = r3.wrapperClassName, s2 = r3.wrapperProps, l2 = this.state.loaded, a2 = l2 ? " lazy-load-image-loaded" : "", f2 = l2 || !i3 ? {} : { backgroundImage: "url(".concat(i3, ")"), backgroundSize: "100% 100%" };
            return t2().createElement("span", Q({ className: u3 + " lazy-load-image-background " + o3 + a2, style: J(J({}, f2), {}, { color: "transparent", display: "inline-block", height: n3, width: c3 }) }, s2), e4);
          } }, { key: "render", value: function() {
            var e4 = this.props, t3 = e4.effect, r3 = e4.placeholderSrc, o3 = e4.visibleByDefault, n3 = e4.wrapperClassName, i3 = e4.wrapperProps, c3 = this.getLazyLoadImage();
            return (t3 || r3) && !o3 || n3 || i3 ? this.getWrappedLazyLoadImage(c3) : c3;
          } }]) && Z(r2.prototype, o2), Object.defineProperty(r2, "prototype", { writable: false }), u2;
        }(t2().Component);
        oe.propTypes = { onLoad: n.PropTypes.func, afterLoad: n.PropTypes.func, beforeLoad: n.PropTypes.func, delayMethod: n.PropTypes.string, delayTime: n.PropTypes.number, effect: n.PropTypes.string, placeholderSrc: n.PropTypes.string, threshold: n.PropTypes.number, useIntersectionObserver: n.PropTypes.bool, visibleByDefault: n.PropTypes.bool, wrapperClassName: n.PropTypes.string, wrapperProps: n.PropTypes.object }, oe.defaultProps = { onLoad: function() {
        }, afterLoad: function() {
          return {};
        }, beforeLoad: function() {
          return {};
        }, delayMethod: "throttle", delayTime: 300, effect: "", placeholderSrc: null, threshold: 100, useIntersectionObserver: true, visibleByDefault: false, wrapperClassName: "" };
        const ne = oe;
      })(), module.exports = o;
    })();
  }
});
export default require_build();
//# sourceMappingURL=react-lazy-load-image-component.js.map
