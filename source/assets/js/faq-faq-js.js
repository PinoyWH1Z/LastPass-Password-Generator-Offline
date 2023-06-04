(window.webpackJsonp = window.webpackJsonp || [
]).push([[32],
{
  580: function (e, t, n) {
    'use strict';
    function r(e) {
      return (r = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e
      }
       : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
      }) (e)
    }
    function o(e) {
      return function (e) {
        if (Array.isArray(e)) return i(e)
      }(e) || function (e) {
        if ('undefined' != typeof Symbol && null != e[Symbol.iterator] || null != e['@@iterator']) return Array.from(e)
      }(e) || function (e, t) {
        if (!e) return;
        if ('string' == typeof e) return i(e, t);
        var n = Object.prototype.toString.call(e).slice(8, - 1);
        'Object' === n && e.constructor && (n = e.constructor.name);
        if ('Map' === n || 'Set' === n) return Array.from(e);
        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
      }(e) || function () {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
      }()
    }
    function i(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r
    }
    function a(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || !1,
        o.configurable = !0,
        'value' in o && (o.writable = !0),
        Object.defineProperty(e, (i = o.key, a = void 0, a = function (e, t) {
          if ('object' !== r(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var o = n.call(e, t || 'default');
            if ('object' !== r(o)) return o;
            throw new TypeError('@@toPrimitive must return a primitive value.')
          }
          return ('string' === t ? String : Number) (e)
        }(i, 'string'), 'symbol' === r(a) ? a : String(a)), o)
      }
      var i,
      a
    }
    n(11),
    n(9),
    n(8),
    n(12),
    n(40),
    n(32),
    n(25),
    Object.defineProperty(t, '__esModule', {
      value: !0
    }),
    t.default = void 0,
    n(10),
    n(18);
    var l = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }(this, e),
        this.elements = {
          header: o(document.querySelectorAll('.lp-faq__header')),
          sections: o(document.querySelectorAll('.lp-faq__content'))
        },
        this.handleCollapse()
      }
      var t,
      n,
      r;
      return t = e,
      (n = [
        {
          key: 'handleCollapse',
          value: function () {
            var e = this;
            this.elements.header.forEach((function (t) {
              t.addEventListener('click', (function () {
                var n = t,
                r = n.nextElementSibling;
                n.classList.contains('expand') ? e.collapse(r) : e.expand(r)
              }))
            }))
          }
        },
        {
          key: 'expand',
          value: function (e) {
            e.previousElementSibling.classList.add('expand')
          }
        },
        {
          key: 'collapse',
          value: function (e) {
            e.previousElementSibling.classList.remove('expand')
          }
        }
      ]) && a(t.prototype, n),
      r && a(t, r),
      Object.defineProperty(t, 'prototype', {
        writable: !1
      }),
      e
    }();
    t.default = l
  }
}
]);
