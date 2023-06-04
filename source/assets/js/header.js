(window.webpackJsonp = window.webpackJsonp || [
]).push([[10],
{
  213: function (e, t, n) {
    'use strict';
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
    t.HeaderNav = void 0,
    n(84),
    n(142),
    n(10),
    n(18);
    var a = s(n(45)),
    r = s(n(603));
    function s(e) {
      return e && e.__esModule ? e : {
      default:
        e
      }
    }
    function o(e) {
      return (o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e
      }
       : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
      }) (e)
    }
    function l(e, t) {
      var n = 'undefined' != typeof Symbol && e[Symbol.iterator] || e['@@iterator'];
      if (!n) {
        if (Array.isArray(e) || (n = c(e)) || t && e && 'number' == typeof e.length) {
          n && (e = n);
          var a = 0,
          r = function () {
          };
          return {
            s: r,
            n: function () {
              return a >= e.length ? {
                done: !0
              }
               : {
                done: !1,
                value: e[a++]
              }
            },
            e: function (e) {
              throw e
            },
            f: r
          }
        }
        throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
      }
      var s,
      o = !0,
      l = !1;
      return {
        s: function () {
          n = n.call(e)
        },
        n: function () {
          var e = n.next();
          return o = e.done,
          e
        },
        e: function (e) {
          l = !0,
          s = e
        },
        f: function () {
          try {
            o || null == n.return || n.return()
          } finally {
            if (l) throw s
          }
        }
      }
    }
    function i(e) {
      return function (e) {
        if (Array.isArray(e)) return u(e)
      }(e) || function (e) {
        if ('undefined' != typeof Symbol && null != e[Symbol.iterator] || null != e['@@iterator']) return Array.from(e)
      }(e) || c(e) || function () {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
      }()
    }
    function c(e, t) {
      if (e) {
        if ('string' == typeof e) return u(e, t);
        var n = Object.prototype.toString.call(e).slice(8, - 1);
        return 'Object' === n && e.constructor && (n = e.constructor.name),
        'Map' === n || 'Set' === n ? Array.from(e) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(e, t) : void 0
      }
    }
    function u(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
      return a
    }
    function m(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1,
        a.configurable = !0,
        'value' in a && (a.writable = !0),
        Object.defineProperty(e, (r = a.key, s = void 0, s = function (e, t) {
          if ('object' !== o(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var a = n.call(e, t || 'default');
            if ('object' !== o(a)) return a;
            throw new TypeError('@@toPrimitive must return a primitive value.')
          }
          return ('string' === t ? String : Number) (e)
        }(r, 'string'), 'symbol' === o(s) ? s : String(s)), a)
      }
      var r,
      s
    }
    var v = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }(this, e);
        var t = document.querySelector('.lp-header__logo-img');
        t && t.setAttribute('src', r.default);
        var n = {
          icon: document.querySelector('.lp-header__mobile-menu'),
          headerTabs: i(document.querySelectorAll('.lp-header-menu-list__item')),
          drawer: document.querySelector('.lp-header-menu'),
          navSubTabs: i(document.querySelectorAll('.nav-sub-tab')),
          subMegaMenus: i(document.querySelectorAll('.mega-menu__tabs-menu')),
          body: document.querySelector('body')
        },
        s = this;
        0 !== n.headerTabs.length && (s.toggleDrawer(n), s.checkForExtension(), window.addEventListener('resize', a.default.debounce((function (e) {
          var t = e.target.outerWidth;
          s.reset(n, t)
        }), 400)));
        var o = document.querySelector('.lp-header');
        o && o.setAttribute('id', 'HEADER')
      }
      var t,
      n,
      s;
      return t = e,
      (n = [
        {
          key: 'toggleDrawer',
          value: function (e) {
            var t = e.icon,
            n = e.drawer,
            a = e.navSubTabs,
            r = e.subMegaMenus,
            s = e.headerTabs;
            window.innerWidth <= 1299 ? n.style.top = '-12000px' : this.resetMenusAndTabs(e);
            var o,
            c = l(s);
            try {
              var u = function () {
                var e = o.value;
                e.addEventListener('click', (function (t) {
                  var n = t.target.getElementsByClassName('menu-wrapper') [0];
                  window.innerWidth > 1299 && !n || (n.classList.contains('menu-wrapper--hide-element') ? (e.className += ' header-tab__selected', n.classList.remove('menu-wrapper--hide-element')) : (e.classList.remove('header-tab__selected'), n.className += ' menu-wrapper--hide-element'))
                })),
                e.addEventListener('mouseenter', (function () {
                  var t = e.getElementsByClassName('menu-wrapper') [0];
                  window.innerWidth < 1299 || t && t.classList.remove('menu-wrapper--hide-element')
                })),
                e.addEventListener('mouseleave', (function () {
                  var t = e.getElementsByClassName('menu-wrapper') [0];
                  window.innerWidth < 1299 || t && (t.className += ' menu-wrapper--hide-element')
                }))
              };
              for (c.s(); !(o = c.n()).done; ) u()
            } catch (e) {
              c.e(e)
            } finally {
              c.f()
            }
            if (t.addEventListener('click', (function () {
              t.classList.toggle('lp-header__mobile-menu--open'),
              '-12000px' === n.style.top || 0 === n.style.top.length ? n.style.top = '58px' : n.style.top = '-12000px'
            })), a.length > 0) {
              var m,
              v = l(a);
              try {
                var d = function () {
                  var e = m.value;
                  e.addEventListener('mouseover', (function () {
                    var t = e.getElementsByClassName('nav-sub-tab__icon') [0];
                    t.classList.remove('icon-off'),
                    t.className += ' icon-on'
                  })),
                  e.addEventListener('mouseout', (function () {
                    if (!e.classList.contains('nav-sub-tab--open')) {
                      var t = e.getElementsByClassName('nav-sub-tab__icon') [0];
                      t.classList.remove('icon-on'),
                      t.className += ' icon-off'
                    }
                  })),
                  e.addEventListener('click', (function () {
                    var t = e.parentElement.querySelector('.nav-sub-tab--open');
                    t && t.classList.remove('nav-sub-tab--open');
                    var n = e.parentElement.querySelector('.nav-sub-tab--selected');
                    n && (n.classList.remove('icon-on'), n.className += ' icon-off', n.classList.remove('nav-sub-tab--selected'));
                    var a = e.parentElement.querySelector('.nav-sub-tab--selected-text');
                    a && a.classList.remove('nav-sub-tab--selected-text');
                    var s = document.querySelector('.nav-sub-tab--selected-text');
                    if (s && s.classList.remove('nav-sub-tab--selected-text'), t != e) {
                      var o = e.getElementsByClassName('nav-sub-tab__icon') [0];
                      o.className += ' nav-sub-tab--selected',
                      o.classList.remove('icon-off'),
                      o.className += ' icon-on',
                      e.querySelector('.nav-sub-tab__text').className += ' nav-sub-tab--selected-text'
                    }
                    var l = i(e.classList).find((function (e) {
                      return e.indexOf('index') > - 1
                    })).split('-') [1];
                    if (window.innerWidth <= 1299) {
                      var c = r.find((function (e) {
                        return !e.classList.contains('mega-menu__tabs-menu--hide-element')
                      })),
                      u = document.querySelector('.nav-sub-tab--open');
                      if (u && u.classList.remove('nav-sub-tab--open'), c && (c.className += ' mega-menu__tabs-menu--hide-element'), t != e) for (var m = 0, v = i(e.parentElement.parentElement.children); m < v.length; m++) {
                        var d = v[m];
                        d.classList.contains('index-' + l) && d.classList.remove('mega-menu__tabs-menu--hide-element')
                      }
                    } else for (var f = 0, b = i(e.parentElement.parentElement.children); f < b.length; f++) {
                      var y = b[f];
                      y.classList.contains('mega-menu__tabs-menu--hide-element') || y.classList.contains('mega-menu__tabs') || (y.className += ' mega-menu__tabs-menu--hide-element'),
                      y.classList.contains('index-' + l) && y.classList.remove('mega-menu__tabs-menu--hide-element')
                    }
                    t != e && (e.className += ' nav-sub-tab--open')
                  }), !0)
                };
                for (v.s(); !(m = v.n()).done; ) d()
              } catch (e) {
                v.e(e)
              } finally {
                v.f()
              }
            }
          }
        },
        {
          key: 'reset',
          value: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = e.body,
            a = e.subMegaMenus,
            r = e.navSubTabs,
            s = e.drawer,
            o = e.headerTabs,
            i = document.getElementsByClassName('nav-sub-tab--open');
            if (i) {
              var c,
              u = l(i);
              try {
                for (u.s(); !(c = u.n()).done; ) {
                  var m = c.value;
                  m.classList.remove('nav-sub-tab--open')
                }
              } catch (e) {
                u.e(e)
              } finally {
                u.f()
              }
            }
            var v = document.getElementsByClassName('nav-sub-tab--selected');
            if (v) {
              var d,
              f = l(v);
              try {
                for (f.s(); !(d = f.n()).done; ) {
                  var b = d.value;
                  b.classList.remove('icon-on'),
                  b.className += ' icon-off',
                  b.classList.remove('nav-sub-tab--selected')
                }
              } catch (e) {
                f.e(e)
              } finally {
                f.f()
              }
            }
            var y = document.getElementsByClassName('nav-sub-tab--selected-text');
            if (y) {
              var p,
              h = l(y);
              try {
                for (h.s(); !(p = h.n()).done; ) {
                  var g = p.value;
                  g.classList.remove('nav-sub-tab--selected-text')
                }
              } catch (e) {
                h.e(e)
              } finally {
                h.f()
              }
            }
            var _,
            w = l(a);
            try {
              for (w.s(); !(_ = w.n()).done; ) {
                var L = _.value;
                L.className += ' mega-menu__tabs-menu--hide-element'
              }
            } catch (e) {
              w.e(e)
            } finally {
              w.f()
            }
            if (t >= 1200 || !1 === t) {
              s.style.top = '',
              n.style.overflow && (n.style.overflow = '');
              var E,
              S = document.getElementsByClassName('menu-wrapper'),
              N = l(S);
              try {
                for (N.s(); !(E = N.n()).done; ) {
                  var x = E.value;
                  x.className += ' menu-wrapper--hide-element'
                }
              } catch (e) {
                N.e(e)
              } finally {
                N.f()
              }
              this.resetMenusAndTabs(e)
            } else {
              var A,
              k = l(o);
              try {
                for (k.s(); !(A = k.n()).done; ) {
                  var q = A.value;
                  q.classList.remove('header-tab__selected')
                }
              } catch (e) {
                k.e(e)
              } finally {
                k.f()
              }
              var C,
              T = l(r);
              try {
                for (T.s(); !(C = T.n()).done; ) {
                  var M = C.value;
                  M.classList.remove('nav-sub-tab--open');
                  var B,
                  j = M.getElementsByClassName('nav-sub-tab__icon'),
                  O = l(j);
                  try {
                    for (O.s(); !(B = O.n()).done; ) {
                      var W = B.value;
                      W.classList.remove('icon-on'),
                      W.className += ' icon-off',
                      W.classList.remove('nav-sub-tab--selected')
                    }
                  } catch (e) {
                    O.e(e)
                  } finally {
                    O.f()
                  }
                }
              } catch (e) {
                T.e(e)
              } finally {
                T.f()
              }
            }
          }
        },
        {
          key: 'resetMenusAndTabs',
          value: function (e) {
            var t,
            n = e.subMegaMenus,
            a = e.navSubTabs,
            r = l(n);
            try {
              for (r.s(); !(t = r.n()).done; ) {
                var s = t.value;
                s.classList.contains('index-0') && s.classList.remove('mega-menu__tabs-menu--hide-element')
              }
            } catch (e) {
              r.e(e)
            } finally {
              r.f()
            }
            var o,
            i = l(a);
            try {
              for (i.s(); !(o = i.n()).done; ) {
                var c = o.value;
                c.classList.contains('index-0') && (c.className += ' nav-sub-tab--open')
              }
            } catch (e) {
              i.e(e)
            } finally {
              i.f()
            }
            if (a.length > 0) {
              var u = a[0].getElementsByClassName('nav-sub-tab__icon') [0];
              u.classList.remove('icon-off'),
              u.className += ' icon-on',
              u.className += ' nav-sub-tab--selected'
            }
          }
        },
        {
          key: 'checkForExtension',
          value: function () {
            if (a.default.isChrome()) {
              var e = '',
              t = document.querySelector('.cdlogin');
              null != t && t.setAttribute('data-gadimension', '24'),
              fetch('chrome-extension://'.concat('hdokiejnpimakedhajhdlcegeplioahd').concat('/images/icon48.png')).then((function (n) {
                if (!n.ok) throw n;
                e = 'true',
                t.setAttribute('data-customdimension', e)
              })).catch((function () {
                e = 'false',
                t.setAttribute('data-customdimension', e)
              }))
            }
          }
        }
      ]) && m(t.prototype, n),
      s && m(t, s),
      Object.defineProperty(t, 'prototype', {
        writable: !1
      }),
      e
    }();
    t.HeaderNav = v
  },
  603: function (e, t) {
    e.exports = '/assets/images/cdn/header-logo.svg'
  }
}
]);
