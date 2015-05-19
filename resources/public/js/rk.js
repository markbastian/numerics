if(typeof Math.imul == "undefined" || (Math.imul(0xffffffff,5) == 0)) {
    Math.imul = function (a, b) {
        var ah  = (a >>> 16) & 0xffff;
        var al = a & 0xffff;
        var bh  = (b >>> 16) & 0xffff;
        var bl = b & 0xffff;
        // the shift by 0 fixes the sign on the high part
        // the final |0 converts the unsigned value into a signed value
        return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
    }
}


;(function(){
var h, aa = this;
function ba(a, b) {
  var c = a.split("."), d = aa;
  c[0] in d || !d.execScript || d.execScript("var " + c[0]);
  for (var e;c.length && (e = c.shift());) {
    c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b;
  }
}
function r(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
var ca = "closure_uid_" + (1E9 * Math.random() >>> 0), da = 0;
function ea(a) {
  return Array.prototype.join.call(arguments, "");
}
;function ga(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function ha(a, b) {
  null != a && this.append.apply(this, arguments);
}
h = ha.prototype;
h.xa = "";
h.set = function(a) {
  this.xa = "" + a;
};
h.append = function(a, b, c) {
  this.xa += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.xa += arguments[d];
    }
  }
  return this;
};
h.clear = function() {
  this.xa = "";
};
h.toString = function() {
  return this.xa;
};
if ("undefined" === typeof ia) {
  var ia = function() {
    throw Error("No *print-fn* fn set for evaluation environment");
  }
}
var ka = null;
if ("undefined" === typeof la) {
  var la = null
}
function na() {
  return new oa(null, 5, [pa, !0, qa, !0, sa, !1, ta, !1, ua, null], null);
}
function v(a) {
  return null != a && !1 !== a;
}
function va(a) {
  return a instanceof Array;
}
function wa(a) {
  return v(a) ? !1 : !0;
}
function x(a, b) {
  return a[r(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function z(a, b) {
  var c = null == b ? null : b.constructor, c = v(v(c) ? c.ub : c) ? c.tb : r(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function ya(a) {
  var b = a.tb;
  return v(b) ? b : "" + A(a);
}
var Aa = "undefined" !== typeof Symbol && "function" === r(Symbol) ? Symbol.iterator : "@@iterator";
function Ba(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var Ca = {}, Ea = {}, Fa = function Fa(b) {
  if (b ? b.O : b) {
    return b.O(b);
  }
  var c;
  c = Fa[r(null == b ? null : b)];
  if (!c && (c = Fa._, !c)) {
    throw z("ICounted.-count", b);
  }
  return c.call(null, b);
}, Ha = function Ha(b, c) {
  if (b ? b.F : b) {
    return b.F(b, c);
  }
  var d;
  d = Ha[r(null == b ? null : b)];
  if (!d && (d = Ha._, !d)) {
    throw z("ICollection.-conj", b);
  }
  return d.call(null, b, c);
}, Ia = {}, B = function B() {
  switch(arguments.length) {
    case 2:
      return B.a(arguments[0], arguments[1]);
    case 3:
      return B.e(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
B.a = function(a, b) {
  if (a ? a.w : a) {
    return a.w(a, b);
  }
  var c;
  c = B[r(null == a ? null : a)];
  if (!c && (c = B._, !c)) {
    throw z("IIndexed.-nth", a);
  }
  return c.call(null, a, b);
};
B.e = function(a, b, c) {
  if (a ? a.T : a) {
    return a.T(a, b, c);
  }
  var d;
  d = B[r(null == a ? null : a)];
  if (!d && (d = B._, !d)) {
    throw z("IIndexed.-nth", a);
  }
  return d.call(null, a, b, c);
};
B.o = 3;
var Ja = {}, F = function F(b) {
  if (b ? b.N : b) {
    return b.N(b);
  }
  var c;
  c = F[r(null == b ? null : b)];
  if (!c && (c = F._, !c)) {
    throw z("ISeq.-first", b);
  }
  return c.call(null, b);
}, H = function H(b) {
  if (b ? b.S : b) {
    return b.S(b);
  }
  var c;
  c = H[r(null == b ? null : b)];
  if (!c && (c = H._, !c)) {
    throw z("ISeq.-rest", b);
  }
  return c.call(null, b);
}, La = {}, Ma = {}, Na = function Na() {
  switch(arguments.length) {
    case 2:
      return Na.a(arguments[0], arguments[1]);
    case 3:
      return Na.e(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
Na.a = function(a, b) {
  if (a ? a.K : a) {
    return a.K(a, b);
  }
  var c;
  c = Na[r(null == a ? null : a)];
  if (!c && (c = Na._, !c)) {
    throw z("ILookup.-lookup", a);
  }
  return c.call(null, a, b);
};
Na.e = function(a, b, c) {
  if (a ? a.A : a) {
    return a.A(a, b, c);
  }
  var d;
  d = Na[r(null == a ? null : a)];
  if (!d && (d = Na._, !d)) {
    throw z("ILookup.-lookup", a);
  }
  return d.call(null, a, b, c);
};
Na.o = 3;
var Oa = function Oa(b, c, d) {
  if (b ? b.Ea : b) {
    return b.Ea(b, c, d);
  }
  var e;
  e = Oa[r(null == b ? null : b)];
  if (!e && (e = Oa._, !e)) {
    throw z("IAssociative.-assoc", b);
  }
  return e.call(null, b, c, d);
}, Qa = {}, Ra = {}, Sa = function Sa(b) {
  if (b ? b.Va : b) {
    return b.Va();
  }
  var c;
  c = Sa[r(null == b ? null : b)];
  if (!c && (c = Sa._, !c)) {
    throw z("IMapEntry.-key", b);
  }
  return c.call(null, b);
}, Ta = function Ta(b) {
  if (b ? b.Wa : b) {
    return b.Wa();
  }
  var c;
  c = Ta[r(null == b ? null : b)];
  if (!c && (c = Ta._, !c)) {
    throw z("IMapEntry.-val", b);
  }
  return c.call(null, b);
}, Ua = {}, Va = function Va(b, c, d) {
  if (b ? b.Xa : b) {
    return b.Xa(b, c, d);
  }
  var e;
  e = Va[r(null == b ? null : b)];
  if (!e && (e = Va._, !e)) {
    throw z("IVector.-assoc-n", b);
  }
  return e.call(null, b, c, d);
}, Wa = function Wa(b) {
  if (b ? b.gb : b) {
    return b.state;
  }
  var c;
  c = Wa[r(null == b ? null : b)];
  if (!c && (c = Wa._, !c)) {
    throw z("IDeref.-deref", b);
  }
  return c.call(null, b);
}, Ya = {}, Za = function Za(b) {
  if (b ? b.D : b) {
    return b.D(b);
  }
  var c;
  c = Za[r(null == b ? null : b)];
  if (!c && (c = Za._, !c)) {
    throw z("IMeta.-meta", b);
  }
  return c.call(null, b);
}, $a = {}, ab = function ab(b, c) {
  if (b ? b.I : b) {
    return b.I(b, c);
  }
  var d;
  d = ab[r(null == b ? null : b)];
  if (!d && (d = ab._, !d)) {
    throw z("IWithMeta.-with-meta", b);
  }
  return d.call(null, b, c);
}, cb = {}, db = function db() {
  switch(arguments.length) {
    case 2:
      return db.a(arguments[0], arguments[1]);
    case 3:
      return db.e(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
db.a = function(a, b) {
  if (a ? a.L : a) {
    return a.L(a, b);
  }
  var c;
  c = db[r(null == a ? null : a)];
  if (!c && (c = db._, !c)) {
    throw z("IReduce.-reduce", a);
  }
  return c.call(null, a, b);
};
db.e = function(a, b, c) {
  if (a ? a.M : a) {
    return a.M(a, b, c);
  }
  var d;
  d = db[r(null == a ? null : a)];
  if (!d && (d = db._, !d)) {
    throw z("IReduce.-reduce", a);
  }
  return d.call(null, a, b, c);
};
db.o = 3;
var eb = function eb(b, c) {
  if (b ? b.m : b) {
    return b.m(b, c);
  }
  var d;
  d = eb[r(null == b ? null : b)];
  if (!d && (d = eb._, !d)) {
    throw z("IEquiv.-equiv", b);
  }
  return d.call(null, b, c);
}, fb = function fb(b) {
  if (b ? b.v : b) {
    return b.v(b);
  }
  var c;
  c = fb[r(null == b ? null : b)];
  if (!c && (c = fb._, !c)) {
    throw z("IHash.-hash", b);
  }
  return c.call(null, b);
}, gb = {}, hb = function hb(b) {
  if (b ? b.H : b) {
    return b.H(b);
  }
  var c;
  c = hb[r(null == b ? null : b)];
  if (!c && (c = hb._, !c)) {
    throw z("ISeqable.-seq", b);
  }
  return c.call(null, b);
}, ib = {}, I = function I(b, c) {
  if (b ? b.bb : b) {
    return b.bb(0, c);
  }
  var d;
  d = I[r(null == b ? null : b)];
  if (!d && (d = I._, !d)) {
    throw z("IWriter.-write", b);
  }
  return d.call(null, b, c);
}, jb = {}, kb = function kb(b, c, d) {
  if (b ? b.t : b) {
    return b.t(b, c, d);
  }
  var e;
  e = kb[r(null == b ? null : b)];
  if (!e && (e = kb._, !e)) {
    throw z("IPrintWithWriter.-pr-writer", b);
  }
  return e.call(null, b, c, d);
}, lb = function lb(b, c, d) {
  if (b ? b.ab : b) {
    return b.ab(0, c, d);
  }
  var e;
  e = lb[r(null == b ? null : b)];
  if (!e && (e = lb._, !e)) {
    throw z("IWatchable.-notify-watches", b);
  }
  return e.call(null, b, c, d);
}, nb = function nb(b) {
  if (b ? b.Fa : b) {
    return b.Fa(b);
  }
  var c;
  c = nb[r(null == b ? null : b)];
  if (!c && (c = nb._, !c)) {
    throw z("IEditableCollection.-as-transient", b);
  }
  return c.call(null, b);
}, ob = function ob(b, c) {
  if (b ? b.Na : b) {
    return b.Na(b, c);
  }
  var d;
  d = ob[r(null == b ? null : b)];
  if (!d && (d = ob._, !d)) {
    throw z("ITransientCollection.-conj!", b);
  }
  return d.call(null, b, c);
}, pb = function pb(b) {
  if (b ? b.Oa : b) {
    return b.Oa(b);
  }
  var c;
  c = pb[r(null == b ? null : b)];
  if (!c && (c = pb._, !c)) {
    throw z("ITransientCollection.-persistent!", b);
  }
  return c.call(null, b);
}, qb = function qb(b, c, d) {
  if (b ? b.Ha : b) {
    return b.Ha(b, c, d);
  }
  var e;
  e = qb[r(null == b ? null : b)];
  if (!e && (e = qb._, !e)) {
    throw z("ITransientAssociative.-assoc!", b);
  }
  return e.call(null, b, c, d);
}, rb = function rb(b, c, d) {
  if (b ? b.$a : b) {
    return b.$a(0, c, d);
  }
  var e;
  e = rb[r(null == b ? null : b)];
  if (!e && (e = rb._, !e)) {
    throw z("ITransientVector.-assoc-n!", b);
  }
  return e.call(null, b, c, d);
}, sb = function sb(b) {
  if (b ? b.Ya : b) {
    return b.Ya();
  }
  var c;
  c = sb[r(null == b ? null : b)];
  if (!c && (c = sb._, !c)) {
    throw z("IChunk.-drop-first", b);
  }
  return c.call(null, b);
}, tb = function tb(b) {
  if (b ? b.Ta : b) {
    return b.Ta(b);
  }
  var c;
  c = tb[r(null == b ? null : b)];
  if (!c && (c = tb._, !c)) {
    throw z("IChunkedSeq.-chunked-first", b);
  }
  return c.call(null, b);
}, ub = function ub(b) {
  if (b ? b.Ua : b) {
    return b.Ua(b);
  }
  var c;
  c = ub[r(null == b ? null : b)];
  if (!c && (c = ub._, !c)) {
    throw z("IChunkedSeq.-chunked-rest", b);
  }
  return c.call(null, b);
}, vb = function vb(b) {
  if (b ? b.Sa : b) {
    return b.Sa(b);
  }
  var c;
  c = vb[r(null == b ? null : b)];
  if (!c && (c = vb._, !c)) {
    throw z("IChunkedNext.-chunked-next", b);
  }
  return c.call(null, b);
}, wb = function wb(b, c) {
  if (b ? b.ob : b) {
    return b.ob(b, c);
  }
  var d;
  d = wb[r(null == b ? null : b)];
  if (!d && (d = wb._, !d)) {
    throw z("IReset.-reset!", b);
  }
  return d.call(null, b, c);
}, xb = function xb() {
  switch(arguments.length) {
    case 2:
      return xb.a(arguments[0], arguments[1]);
    case 3:
      return xb.e(arguments[0], arguments[1], arguments[2]);
    case 4:
      return xb.p(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return xb.C(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
xb.a = function(a, b) {
  if (a ? a.pb : a) {
    return a.pb(a, b);
  }
  var c;
  c = xb[r(null == a ? null : a)];
  if (!c && (c = xb._, !c)) {
    throw z("ISwap.-swap!", a);
  }
  return c.call(null, a, b);
};
xb.e = function(a, b, c) {
  if (a ? a.qb : a) {
    return a.qb(a, b, c);
  }
  var d;
  d = xb[r(null == a ? null : a)];
  if (!d && (d = xb._, !d)) {
    throw z("ISwap.-swap!", a);
  }
  return d.call(null, a, b, c);
};
xb.p = function(a, b, c, d) {
  if (a ? a.rb : a) {
    return a.rb(a, b, c, d);
  }
  var e;
  e = xb[r(null == a ? null : a)];
  if (!e && (e = xb._, !e)) {
    throw z("ISwap.-swap!", a);
  }
  return e.call(null, a, b, c, d);
};
xb.C = function(a, b, c, d, e) {
  if (a ? a.sb : a) {
    return a.sb(a, b, c, d, e);
  }
  var f;
  f = xb[r(null == a ? null : a)];
  if (!f && (f = xb._, !f)) {
    throw z("ISwap.-swap!", a);
  }
  return f.call(null, a, b, c, d, e);
};
xb.o = 5;
var zb = function zb(b) {
  if (b ? b.Ga : b) {
    return b.Ga(b);
  }
  var c;
  c = zb[r(null == b ? null : b)];
  if (!c && (c = zb._, !c)) {
    throw z("IIterable.-iterator", b);
  }
  return c.call(null, b);
};
function Ab(a) {
  this.vb = a;
  this.r = 0;
  this.g = 1073741824;
}
Ab.prototype.bb = function(a, b) {
  return this.vb.append(b);
};
function Bb(a) {
  var b = new ha;
  a.t(null, new Ab(b), na());
  return "" + A(b);
}
var Cb = "undefined" !== typeof Math.imul && 0 !== (Math.imul.a ? Math.imul.a(4294967295, 5) : Math.imul.call(null, 4294967295, 5)) ? function(a, b) {
  return Math.imul.a ? Math.imul.a(a, b) : Math.imul.call(null, a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function Db(a) {
  a = Cb(a | 0, -862048943);
  return Cb(a << 15 | a >>> -15, 461845907);
}
function Eb(a, b) {
  var c = (a | 0) ^ (b | 0);
  return Cb(c << 13 | c >>> -13, 5) + -430675100 | 0;
}
function Fb(a, b) {
  var c = (a | 0) ^ b, c = Cb(c ^ c >>> 16, -2048144789), c = Cb(c ^ c >>> 13, -1028477387);
  return c ^ c >>> 16;
}
function Gb(a) {
  var b;
  a: {
    b = 1;
    for (var c = 0;;) {
      if (b < a.length) {
        var d = b + 2, c = Eb(c, Db(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
  }
  b = 1 === (a.length & 1) ? b ^ Db(a.charCodeAt(a.length - 1)) : b;
  return Fb(b, Cb(2, a.length));
}
var Hb = {}, Ib = 0;
function Jb(a) {
  255 < Ib && (Hb = {}, Ib = 0);
  var b = Hb[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = Cb(31, d) + a.charCodeAt(c), c = e
            } else {
              b = d;
              break a;
            }
          }
        } else {
          b = 0;
        }
      } else {
        b = 0;
      }
    }
    Hb[a] = b;
    Ib += 1;
  }
  return a = b;
}
function Kb(a) {
  a && (a.g & 4194304 || a.zb) ? a = a.v(null) : "number" === typeof a ? a = (Math.floor.b ? Math.floor.b(a) : Math.floor.call(null, a)) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = Jb(a), 0 !== a && (a = Db(a), a = Eb(0, a), a = Fb(a, 4))) : a = a instanceof Date ? a.valueOf() : null == a ? 0 : fb(a);
  return a;
}
function Lb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function Mb(a, b, c, d, e) {
  this.Ja = a;
  this.name = b;
  this.wa = c;
  this.Aa = d;
  this.U = e;
  this.g = 2154168321;
  this.r = 4096;
}
h = Mb.prototype;
h.t = function(a, b) {
  return I(b, this.wa);
};
h.v = function() {
  var a = this.Aa;
  return null != a ? a : this.Aa = a = Lb(Gb(this.name), Jb(this.Ja));
};
h.I = function(a, b) {
  return new Mb(this.Ja, this.name, this.wa, this.Aa, b);
};
h.D = function() {
  return this.U;
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Na.e(c, this, null);
      case 3:
        return Na.e(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return Na.e(c, this, null);
  };
  a.e = function(a, c, d) {
    return Na.e(c, this, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ba(b)));
};
h.b = function(a) {
  return Na.e(a, this, null);
};
h.a = function(a, b) {
  return Na.e(a, this, b);
};
h.m = function(a, b) {
  return b instanceof Mb ? this.wa === b.wa : !1;
};
h.toString = function() {
  return this.wa;
};
h.equiv = function(a) {
  return this.m(null, a);
};
function J(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.g & 8388608 || a.Ab)) {
    return a.H(null);
  }
  if (va(a) || "string" === typeof a) {
    return 0 === a.length ? null : new K(a, 0);
  }
  if (x(gb, a)) {
    return hb(a);
  }
  throw Error([A(a), A(" is not ISeqable")].join(""));
}
function L(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.g & 64 || a.Ma)) {
    return a.N(null);
  }
  a = J(a);
  return null == a ? null : F(a);
}
function M(a) {
  return null != a ? a && (a.g & 64 || a.Ma) ? a.S(null) : (a = J(a)) ? H(a) : Nb : Nb;
}
function N(a) {
  return null == a ? null : a && (a.g & 128 || a.La) ? a.Q(null) : J(M(a));
}
var O = function O() {
  switch(arguments.length) {
    case 1:
      return O.b(arguments[0]);
    case 2:
      return O.a(arguments[0], arguments[1]);
    default:
      return O.h(arguments[0], arguments[1], new K(Array.prototype.slice.call(arguments, 2), 0));
  }
};
O.b = function() {
  return!0;
};
O.a = function(a, b) {
  return null == a ? null == b : a === b || eb(a, b);
};
O.h = function(a, b, c) {
  for (;;) {
    if (O.a(a, b)) {
      if (N(c)) {
        a = b, b = L(c), c = N(c);
      } else {
        return O.a(b, L(c));
      }
    } else {
      return!1;
    }
  }
};
O.n = function(a) {
  var b = L(a), c = N(a);
  a = L(c);
  c = N(c);
  return O.h(b, a, c);
};
O.o = 2;
function Pb(a) {
  this.q = a;
}
Pb.prototype.next = function() {
  if (null != this.q) {
    var a = L(this.q);
    this.q = N(this.q);
    return{done:!1, value:a};
  }
  return{done:!0, value:null};
};
function Qb(a) {
  return new Pb(J(a));
}
function Rb(a, b) {
  var c = Db(a), c = Eb(0, c);
  return Fb(c, b);
}
function Sb(a) {
  var b = 0, c = 1;
  for (a = J(a);;) {
    if (null != a) {
      b += 1, c = Cb(31, c) + Kb(L(a)) | 0, a = N(a);
    } else {
      return Rb(c, b);
    }
  }
}
var Tb = Rb(1, 0);
function Ub(a) {
  var b = 0, c = 0;
  for (a = J(a);;) {
    if (null != a) {
      b += 1, c = c + Kb(L(a)) | 0, a = N(a);
    } else {
      return Rb(c, b);
    }
  }
}
var Vb = Rb(0, 0);
Ea["null"] = !0;
Fa["null"] = function() {
  return 0;
};
Date.prototype.m = function(a, b) {
  return b instanceof Date && this.valueOf() === b.valueOf();
};
eb.number = function(a, b) {
  return a === b;
};
Ya["function"] = !0;
Za["function"] = function() {
  return null;
};
Ca["function"] = !0;
fb._ = function(a) {
  return a[ca] || (a[ca] = ++da);
};
function Wb(a) {
  return a + 1;
}
function P(a) {
  return Wa(a);
}
function Xb(a, b) {
  var c = Fa(a);
  if (0 === c) {
    return b.l ? b.l() : b.call(null);
  }
  for (var d = B.a(a, 0), e = 1;;) {
    if (e < c) {
      var f = B.a(a, e), d = b.a ? b.a(d, f) : b.call(null, d, f), e = e + 1
    } else {
      return d;
    }
  }
}
function Yb(a, b, c) {
  var d = Fa(a), e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = B.a(a, c), e = b.a ? b.a(e, f) : b.call(null, e, f);
      c += 1;
    } else {
      return e;
    }
  }
}
function $b(a, b) {
  var c = a.length;
  if (0 === a.length) {
    return b.l ? b.l() : b.call(null);
  }
  for (var d = a[0], e = 1;;) {
    if (e < c) {
      var f = a[e], d = b.a ? b.a(d, f) : b.call(null, d, f), e = e + 1
    } else {
      return d;
    }
  }
}
function ac(a, b, c) {
  var d = a.length, e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = a[c], e = b.a ? b.a(e, f) : b.call(null, e, f);
      c += 1;
    } else {
      return e;
    }
  }
}
function bc(a, b, c, d) {
  for (var e = a.length;;) {
    if (d < e) {
      var f = a[d];
      c = b.a ? b.a(c, f) : b.call(null, c, f);
      d += 1;
    } else {
      return c;
    }
  }
}
function cc(a) {
  return a ? a.g & 2 || a.fb ? !0 : a.g ? !1 : x(Ea, a) : x(Ea, a);
}
function dc(a, b) {
  this.c = a;
  this.i = b;
}
dc.prototype.Pa = function() {
  return this.i < this.c.length;
};
dc.prototype.next = function() {
  var a = this.c[this.i];
  this.i += 1;
  return a;
};
function K(a, b) {
  this.c = a;
  this.i = b;
  this.g = 166199550;
  this.r = 8192;
}
h = K.prototype;
h.toString = function() {
  return Bb(this);
};
h.equiv = function(a) {
  return this.m(null, a);
};
h.w = function(a, b) {
  var c = b + this.i;
  return c < this.c.length ? this.c[c] : null;
};
h.T = function(a, b, c) {
  a = b + this.i;
  return a < this.c.length ? this.c[a] : c;
};
h.Ga = function() {
  return new dc(this.c, this.i);
};
h.Q = function() {
  return this.i + 1 < this.c.length ? new K(this.c, this.i + 1) : null;
};
h.O = function() {
  return this.c.length - this.i;
};
h.v = function() {
  return Sb(this);
};
h.m = function(a, b) {
  return ec.a ? ec.a(this, b) : ec.call(null, this, b);
};
h.L = function(a, b) {
  return bc(this.c, b, this.c[this.i], this.i + 1);
};
h.M = function(a, b, c) {
  return bc(this.c, b, c, this.i);
};
h.N = function() {
  return this.c[this.i];
};
h.S = function() {
  return this.i + 1 < this.c.length ? new K(this.c, this.i + 1) : Nb;
};
h.H = function() {
  return this;
};
h.F = function(a, b) {
  return Q.a ? Q.a(b, this) : Q.call(null, b, this);
};
K.prototype[Aa] = function() {
  return Qb(this);
};
function fc(a, b) {
  return b < a.length ? new K(a, b) : null;
}
function gc() {
  switch(arguments.length) {
    case 1:
      return fc(arguments[0], 0);
    case 2:
      return fc(arguments[0], arguments[1]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function hc(a) {
  return L(N(a));
}
eb._ = function(a, b) {
  return a === b;
};
var ic = function ic() {
  switch(arguments.length) {
    case 0:
      return ic.l();
    case 1:
      return ic.b(arguments[0]);
    case 2:
      return ic.a(arguments[0], arguments[1]);
    default:
      return ic.h(arguments[0], arguments[1], new K(Array.prototype.slice.call(arguments, 2), 0));
  }
};
ic.l = function() {
  return jc;
};
ic.b = function(a) {
  return a;
};
ic.a = function(a, b) {
  return null != a ? Ha(a, b) : Ha(Nb, b);
};
ic.h = function(a, b, c) {
  for (;;) {
    if (v(c)) {
      a = ic.a(a, b), b = L(c), c = N(c);
    } else {
      return ic.a(a, b);
    }
  }
};
ic.n = function(a) {
  var b = L(a), c = N(a);
  a = L(c);
  c = N(c);
  return ic.h(b, a, c);
};
ic.o = 2;
function T(a) {
  if (null != a) {
    if (a && (a.g & 2 || a.fb)) {
      a = a.O(null);
    } else {
      if (va(a)) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (x(Ea, a)) {
            a = Fa(a);
          } else {
            a: {
              a = J(a);
              for (var b = 0;;) {
                if (cc(a)) {
                  a = b + Fa(a);
                  break a;
                }
                a = N(a);
                b += 1;
              }
            }
          }
        }
      }
    }
  } else {
    a = 0;
  }
  return a;
}
function kc(a, b) {
  for (var c = null;;) {
    if (null == a) {
      return c;
    }
    if (0 === b) {
      return J(a) ? L(a) : c;
    }
    var d = a;
    if (d ? d.g & 16 || d.ib || (d.g ? 0 : x(Ia, d)) : x(Ia, d)) {
      return B.e(a, b, c);
    }
    if (J(a)) {
      var d = N(a), e = b - 1;
      a = d;
      b = e;
    } else {
      return c;
    }
  }
}
function U(a, b) {
  if ("number" !== typeof b) {
    throw Error("index argument to nth must be a number.");
  }
  if (null == a) {
    return null;
  }
  if (a && (a.g & 16 || a.ib)) {
    return a.T(null, b, null);
  }
  if (va(a) || "string" === typeof a) {
    return b < a.length ? a[b] : null;
  }
  if (x(Ia, a)) {
    return B.a(a, b);
  }
  if (a ? a.g & 64 || a.Ma || (a.g ? 0 : x(Ja, a)) : x(Ja, a)) {
    return kc(a, b);
  }
  throw Error([A("nth not supported on this type "), A(ya(null == a ? null : a.constructor))].join(""));
}
function lc(a, b) {
  return null == a ? null : a && (a.g & 256 || a.Za) ? a.K(null, b) : va(a) ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : x(Ma, a) ? Na.a(a, b) : null;
}
function mc(a, b, c) {
  return null != a ? a && (a.g & 256 || a.Za) ? a.A(null, b, c) : va(a) ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : x(Ma, a) ? Na.e(a, b, c) : c : c;
}
var nc = function nc() {
  switch(arguments.length) {
    case 3:
      return nc.e(arguments[0], arguments[1], arguments[2]);
    default:
      return nc.h(arguments[0], arguments[1], arguments[2], new K(Array.prototype.slice.call(arguments, 3), 0));
  }
};
nc.e = function(a, b, c) {
  if (null != a) {
    a = Oa(a, b, c);
  } else {
    a: {
      a = [b];
      c = [c];
      b = a.length;
      var d = 0, e;
      for (e = nb(oc);;) {
        if (d < b) {
          var f = d + 1;
          e = e.Ha(null, a[d], c[d]);
          d = f;
        } else {
          a = pb(e);
          break a;
        }
      }
    }
  }
  return a;
};
nc.h = function(a, b, c, d) {
  for (;;) {
    if (a = nc.e(a, b, c), v(d)) {
      b = L(d), c = hc(d), d = N(N(d));
    } else {
      return a;
    }
  }
};
nc.n = function(a) {
  var b = L(a), c = N(a);
  a = L(c);
  var d = N(c), c = L(d), d = N(d);
  return nc.h(b, a, c, d);
};
nc.o = 3;
function pc(a) {
  var b = "function" == r(a);
  return v(b) ? b : a ? v(v(null) ? null : a.eb) ? !0 : a.Fb ? !1 : x(Ca, a) : x(Ca, a);
}
function qc(a, b) {
  this.d = a;
  this.k = b;
  this.r = 0;
  this.g = 393217;
}
h = qc.prototype;
h.call = function() {
  function a(a, b, c, d, e, f, g, k, l, m, n, p, q, u, w, t, D, C, y, G, E, R) {
    a = this.d;
    return rc.Ka ? rc.Ka(a, b, c, d, e, f, g, k, l, m, n, p, q, u, w, t, D, C, y, G, E, R) : rc.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, u, w, t, D, C, y, G, E, R);
  }
  function b(a, b, c, d, e, f, g, k, l, m, n, p, q, u, w, t, D, C, y, G, E) {
    a = this;
    return a.d.ma ? a.d.ma(b, c, d, e, f, g, k, l, m, n, p, q, u, w, t, D, C, y, G, E) : a.d.call(null, b, c, d, e, f, g, k, l, m, n, p, q, u, w, t, D, C, y, G, E);
  }
  function c(a, b, c, d, e, f, g, k, l, m, n, p, q, u, w, t, D, C, y, G) {
    a = this;
    return a.d.la ? a.d.la(b, c, d, e, f, g, k, l, m, n, p, q, u, w, t, D, C, y, G) : a.d.call(null, b, c, d, e, f, g, k, l, m, n, p, q, u, w, t, D, C, y, G);
  }
  function d(a, b, c, d, e, f, g, k, l, m, n, p, q, u, w, t, D, C, y) {
    a = this;
    return a.d.ka ? a.d.ka(b, c, d, e, f, g, k, l, m, n, p, q, u, w, t, D, C, y) : a.d.call(null, b, c, d, e, f, g, k, l, m, n, p, q, u, w, t, D, C, y);
  }
  function e(a, b, c, d, e, f, g, k, l, m, n, p, q, u, w, t, D, C) {
    a = this;
    return a.d.ja ? a.d.ja(b, c, d, e, f, g, k, l, m, n, p, q, u, w, t, D, C) : a.d.call(null, b, c, d, e, f, g, k, l, m, n, p, q, u, w, t, D, C);
  }
  function f(a, b, c, d, e, f, g, k, l, m, n, p, q, u, w, t, D) {
    a = this;
    return a.d.ia ? a.d.ia(b, c, d, e, f, g, k, l, m, n, p, q, u, w, t, D) : a.d.call(null, b, c, d, e, f, g, k, l, m, n, p, q, u, w, t, D);
  }
  function g(a, b, c, d, e, f, g, k, l, m, n, p, q, u, w, t) {
    a = this;
    return a.d.ha ? a.d.ha(b, c, d, e, f, g, k, l, m, n, p, q, u, w, t) : a.d.call(null, b, c, d, e, f, g, k, l, m, n, p, q, u, w, t);
  }
  function k(a, b, c, d, e, f, g, k, l, m, n, p, q, u, w) {
    a = this;
    return a.d.ga ? a.d.ga(b, c, d, e, f, g, k, l, m, n, p, q, u, w) : a.d.call(null, b, c, d, e, f, g, k, l, m, n, p, q, u, w);
  }
  function l(a, b, c, d, e, f, g, k, l, m, n, p, q, u) {
    a = this;
    return a.d.fa ? a.d.fa(b, c, d, e, f, g, k, l, m, n, p, q, u) : a.d.call(null, b, c, d, e, f, g, k, l, m, n, p, q, u);
  }
  function m(a, b, c, d, e, f, g, k, l, m, n, p, q) {
    a = this;
    return a.d.ea ? a.d.ea(b, c, d, e, f, g, k, l, m, n, p, q) : a.d.call(null, b, c, d, e, f, g, k, l, m, n, p, q);
  }
  function n(a, b, c, d, e, f, g, k, l, m, n, p) {
    a = this;
    return a.d.da ? a.d.da(b, c, d, e, f, g, k, l, m, n, p) : a.d.call(null, b, c, d, e, f, g, k, l, m, n, p);
  }
  function p(a, b, c, d, e, f, g, k, l, m, n) {
    a = this;
    return a.d.ca ? a.d.ca(b, c, d, e, f, g, k, l, m, n) : a.d.call(null, b, c, d, e, f, g, k, l, m, n);
  }
  function q(a, b, c, d, e, f, g, k, l, m) {
    a = this;
    return a.d.pa ? a.d.pa(b, c, d, e, f, g, k, l, m) : a.d.call(null, b, c, d, e, f, g, k, l, m);
  }
  function u(a, b, c, d, e, f, g, k, l) {
    a = this;
    return a.d.oa ? a.d.oa(b, c, d, e, f, g, k, l) : a.d.call(null, b, c, d, e, f, g, k, l);
  }
  function w(a, b, c, d, e, f, g, k) {
    a = this;
    return a.d.na ? a.d.na(b, c, d, e, f, g, k) : a.d.call(null, b, c, d, e, f, g, k);
  }
  function t(a, b, c, d, e, f, g) {
    a = this;
    return a.d.Y ? a.d.Y(b, c, d, e, f, g) : a.d.call(null, b, c, d, e, f, g);
  }
  function C(a, b, c, d, e, f) {
    a = this;
    return a.d.C ? a.d.C(b, c, d, e, f) : a.d.call(null, b, c, d, e, f);
  }
  function D(a, b, c, d, e) {
    a = this;
    return a.d.p ? a.d.p(b, c, d, e) : a.d.call(null, b, c, d, e);
  }
  function G(a, b, c, d) {
    a = this;
    return a.d.e ? a.d.e(b, c, d) : a.d.call(null, b, c, d);
  }
  function E(a, b, c) {
    a = this;
    return a.d.a ? a.d.a(b, c) : a.d.call(null, b, c);
  }
  function S(a, b) {
    a = this;
    return a.d.b ? a.d.b(b) : a.d.call(null, b);
  }
  function R(a) {
    a = this;
    return a.d.l ? a.d.l() : a.d.call(null);
  }
  var y = null, y = function(y, fa, ja, ma, ra, xa, za, Da, Ga, Ka, Pa, Xa, bb, mb, yb, Ob, Zb, xc, cd, Ad, ve, tf) {
    switch(arguments.length) {
      case 1:
        return R.call(this, y);
      case 2:
        return S.call(this, y, fa);
      case 3:
        return E.call(this, y, fa, ja);
      case 4:
        return G.call(this, y, fa, ja, ma);
      case 5:
        return D.call(this, y, fa, ja, ma, ra);
      case 6:
        return C.call(this, y, fa, ja, ma, ra, xa);
      case 7:
        return t.call(this, y, fa, ja, ma, ra, xa, za);
      case 8:
        return w.call(this, y, fa, ja, ma, ra, xa, za, Da);
      case 9:
        return u.call(this, y, fa, ja, ma, ra, xa, za, Da, Ga);
      case 10:
        return q.call(this, y, fa, ja, ma, ra, xa, za, Da, Ga, Ka);
      case 11:
        return p.call(this, y, fa, ja, ma, ra, xa, za, Da, Ga, Ka, Pa);
      case 12:
        return n.call(this, y, fa, ja, ma, ra, xa, za, Da, Ga, Ka, Pa, Xa);
      case 13:
        return m.call(this, y, fa, ja, ma, ra, xa, za, Da, Ga, Ka, Pa, Xa, bb);
      case 14:
        return l.call(this, y, fa, ja, ma, ra, xa, za, Da, Ga, Ka, Pa, Xa, bb, mb);
      case 15:
        return k.call(this, y, fa, ja, ma, ra, xa, za, Da, Ga, Ka, Pa, Xa, bb, mb, yb);
      case 16:
        return g.call(this, y, fa, ja, ma, ra, xa, za, Da, Ga, Ka, Pa, Xa, bb, mb, yb, Ob);
      case 17:
        return f.call(this, y, fa, ja, ma, ra, xa, za, Da, Ga, Ka, Pa, Xa, bb, mb, yb, Ob, Zb);
      case 18:
        return e.call(this, y, fa, ja, ma, ra, xa, za, Da, Ga, Ka, Pa, Xa, bb, mb, yb, Ob, Zb, xc);
      case 19:
        return d.call(this, y, fa, ja, ma, ra, xa, za, Da, Ga, Ka, Pa, Xa, bb, mb, yb, Ob, Zb, xc, cd);
      case 20:
        return c.call(this, y, fa, ja, ma, ra, xa, za, Da, Ga, Ka, Pa, Xa, bb, mb, yb, Ob, Zb, xc, cd, Ad);
      case 21:
        return b.call(this, y, fa, ja, ma, ra, xa, za, Da, Ga, Ka, Pa, Xa, bb, mb, yb, Ob, Zb, xc, cd, Ad, ve);
      case 22:
        return a.call(this, y, fa, ja, ma, ra, xa, za, Da, Ga, Ka, Pa, Xa, bb, mb, yb, Ob, Zb, xc, cd, Ad, ve, tf);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  y.b = R;
  y.a = S;
  y.e = E;
  y.p = G;
  y.C = D;
  y.Y = C;
  y.na = t;
  y.oa = w;
  y.pa = u;
  y.ca = q;
  y.da = p;
  y.ea = n;
  y.fa = m;
  y.ga = l;
  y.ha = k;
  y.ia = g;
  y.ja = f;
  y.ka = e;
  y.la = d;
  y.ma = c;
  y.hb = b;
  y.Ka = a;
  return y;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ba(b)));
};
h.l = function() {
  return this.d.l ? this.d.l() : this.d.call(null);
};
h.b = function(a) {
  return this.d.b ? this.d.b(a) : this.d.call(null, a);
};
h.a = function(a, b) {
  return this.d.a ? this.d.a(a, b) : this.d.call(null, a, b);
};
h.e = function(a, b, c) {
  return this.d.e ? this.d.e(a, b, c) : this.d.call(null, a, b, c);
};
h.p = function(a, b, c, d) {
  return this.d.p ? this.d.p(a, b, c, d) : this.d.call(null, a, b, c, d);
};
h.C = function(a, b, c, d, e) {
  return this.d.C ? this.d.C(a, b, c, d, e) : this.d.call(null, a, b, c, d, e);
};
h.Y = function(a, b, c, d, e, f) {
  return this.d.Y ? this.d.Y(a, b, c, d, e, f) : this.d.call(null, a, b, c, d, e, f);
};
h.na = function(a, b, c, d, e, f, g) {
  return this.d.na ? this.d.na(a, b, c, d, e, f, g) : this.d.call(null, a, b, c, d, e, f, g);
};
h.oa = function(a, b, c, d, e, f, g, k) {
  return this.d.oa ? this.d.oa(a, b, c, d, e, f, g, k) : this.d.call(null, a, b, c, d, e, f, g, k);
};
h.pa = function(a, b, c, d, e, f, g, k, l) {
  return this.d.pa ? this.d.pa(a, b, c, d, e, f, g, k, l) : this.d.call(null, a, b, c, d, e, f, g, k, l);
};
h.ca = function(a, b, c, d, e, f, g, k, l, m) {
  return this.d.ca ? this.d.ca(a, b, c, d, e, f, g, k, l, m) : this.d.call(null, a, b, c, d, e, f, g, k, l, m);
};
h.da = function(a, b, c, d, e, f, g, k, l, m, n) {
  return this.d.da ? this.d.da(a, b, c, d, e, f, g, k, l, m, n) : this.d.call(null, a, b, c, d, e, f, g, k, l, m, n);
};
h.ea = function(a, b, c, d, e, f, g, k, l, m, n, p) {
  return this.d.ea ? this.d.ea(a, b, c, d, e, f, g, k, l, m, n, p) : this.d.call(null, a, b, c, d, e, f, g, k, l, m, n, p);
};
h.fa = function(a, b, c, d, e, f, g, k, l, m, n, p, q) {
  return this.d.fa ? this.d.fa(a, b, c, d, e, f, g, k, l, m, n, p, q) : this.d.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q);
};
h.ga = function(a, b, c, d, e, f, g, k, l, m, n, p, q, u) {
  return this.d.ga ? this.d.ga(a, b, c, d, e, f, g, k, l, m, n, p, q, u) : this.d.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, u);
};
h.ha = function(a, b, c, d, e, f, g, k, l, m, n, p, q, u, w) {
  return this.d.ha ? this.d.ha(a, b, c, d, e, f, g, k, l, m, n, p, q, u, w) : this.d.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, u, w);
};
h.ia = function(a, b, c, d, e, f, g, k, l, m, n, p, q, u, w, t) {
  return this.d.ia ? this.d.ia(a, b, c, d, e, f, g, k, l, m, n, p, q, u, w, t) : this.d.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, u, w, t);
};
h.ja = function(a, b, c, d, e, f, g, k, l, m, n, p, q, u, w, t, C) {
  return this.d.ja ? this.d.ja(a, b, c, d, e, f, g, k, l, m, n, p, q, u, w, t, C) : this.d.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, u, w, t, C);
};
h.ka = function(a, b, c, d, e, f, g, k, l, m, n, p, q, u, w, t, C, D) {
  return this.d.ka ? this.d.ka(a, b, c, d, e, f, g, k, l, m, n, p, q, u, w, t, C, D) : this.d.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, u, w, t, C, D);
};
h.la = function(a, b, c, d, e, f, g, k, l, m, n, p, q, u, w, t, C, D, G) {
  return this.d.la ? this.d.la(a, b, c, d, e, f, g, k, l, m, n, p, q, u, w, t, C, D, G) : this.d.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, u, w, t, C, D, G);
};
h.ma = function(a, b, c, d, e, f, g, k, l, m, n, p, q, u, w, t, C, D, G, E) {
  return this.d.ma ? this.d.ma(a, b, c, d, e, f, g, k, l, m, n, p, q, u, w, t, C, D, G, E) : this.d.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, u, w, t, C, D, G, E);
};
h.hb = function(a, b, c, d, e, f, g, k, l, m, n, p, q, u, w, t, C, D, G, E, S) {
  var R = this.d;
  return rc.Ka ? rc.Ka(R, a, b, c, d, e, f, g, k, l, m, n, p, q, u, w, t, C, D, G, E, S) : rc.call(null, R, a, b, c, d, e, f, g, k, l, m, n, p, q, u, w, t, C, D, G, E, S);
};
h.eb = !0;
h.I = function(a, b) {
  return new qc(this.d, b);
};
h.D = function() {
  return this.k;
};
function sc(a) {
  var b = null != a;
  return(b ? a ? a.g & 131072 || a.lb || (a.g ? 0 : x(Ya, a)) : x(Ya, a) : b) ? Za(a) : null;
}
function tc(a) {
  return null == a ? !1 : a ? a.g & 1024 || a.jb ? !0 : a.g ? !1 : x(Qa, a) : x(Qa, a);
}
function uc(a) {
  return a ? a.g & 16384 || a.Cb ? !0 : a.g ? !1 : x(Ua, a) : x(Ua, a);
}
function vc(a) {
  return a ? a.r & 512 || a.xb ? !0 : !1 : !1;
}
function wc(a) {
  var b = [];
  ga(a, function(a, b) {
    return function(a, c) {
      return b.push(c);
    };
  }(a, b));
  return b;
}
function yc(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, --e, b += 1;
  }
}
var zc = {};
function Ac(a) {
  return null == a ? !1 : a ? a.g & 64 || a.Ma ? !0 : a.g ? !1 : x(Ja, a) : x(Ja, a);
}
function Bc(a) {
  return v(a) ? !0 : !1;
}
function Cc(a, b) {
  var c = J(b);
  if (c) {
    var d = L(c), c = N(c);
    return Dc ? Dc(a, d, c) : Ec.call(null, a, d, c);
  }
  return a.l ? a.l() : a.call(null);
}
function Fc(a, b, c) {
  for (c = J(c);;) {
    if (c) {
      var d = L(c);
      b = a.a ? a.a(b, d) : a.call(null, b, d);
      c = N(c);
    } else {
      return b;
    }
  }
}
function Ec() {
  switch(arguments.length) {
    case 2:
      return Gc(arguments[0], arguments[1]);
    case 3:
      return Dc(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function Gc(a, b) {
  return b && (b.g & 524288 || b.nb) ? b.L(null, a) : va(b) ? $b(b, a) : "string" === typeof b ? $b(b, a) : x(cb, b) ? db.a(b, a) : Cc(a, b);
}
function Dc(a, b, c) {
  return c && (c.g & 524288 || c.nb) ? c.M(null, a, b) : va(c) ? ac(c, a, b) : "string" === typeof c ? ac(c, a, b) : x(cb, c) ? db.e(c, a, b) : Fc(a, b, c);
}
function Hc(a) {
  return a;
}
var Ic = function Ic() {
  switch(arguments.length) {
    case 0:
      return Ic.l();
    case 1:
      return Ic.b(arguments[0]);
    case 2:
      return Ic.a(arguments[0], arguments[1]);
    default:
      return Ic.h(arguments[0], arguments[1], new K(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Ic.l = function() {
  return 0;
};
Ic.b = function(a) {
  return a;
};
Ic.a = function(a, b) {
  return a + b;
};
Ic.h = function(a, b, c) {
  return Dc(Ic, a + b, c);
};
Ic.n = function(a) {
  var b = L(a), c = N(a);
  a = L(c);
  c = N(c);
  return Ic.h(b, a, c);
};
Ic.o = 2;
var Jc = function Jc() {
  switch(arguments.length) {
    case 1:
      return Jc.b(arguments[0]);
    case 2:
      return Jc.a(arguments[0], arguments[1]);
    default:
      return Jc.h(arguments[0], arguments[1], new K(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Jc.b = function(a) {
  return-a;
};
Jc.a = function(a, b) {
  return a - b;
};
Jc.h = function(a, b, c) {
  return Dc(Jc, a - b, c);
};
Jc.n = function(a) {
  var b = L(a), c = N(a);
  a = L(c);
  c = N(c);
  return Jc.h(b, a, c);
};
Jc.o = 2;
var Kc = function Kc() {
  switch(arguments.length) {
    case 0:
      return Kc.l();
    case 1:
      return Kc.b(arguments[0]);
    case 2:
      return Kc.a(arguments[0], arguments[1]);
    default:
      return Kc.h(arguments[0], arguments[1], new K(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Kc.l = function() {
  return 1;
};
Kc.b = function(a) {
  return a;
};
Kc.a = function(a, b) {
  return a * b;
};
Kc.h = function(a, b, c) {
  return Dc(Kc, a * b, c);
};
Kc.n = function(a) {
  var b = L(a), c = N(a);
  a = L(c);
  c = N(c);
  return Kc.h(b, a, c);
};
Kc.o = 2;
function Lc(a) {
  return a - 1;
}
var Mc = function Mc() {
  switch(arguments.length) {
    case 1:
      return Mc.b(arguments[0]);
    case 2:
      return Mc.a(arguments[0], arguments[1]);
    default:
      return Mc.h(arguments[0], arguments[1], new K(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Mc.b = function(a) {
  return a;
};
Mc.a = function(a, b) {
  return a > b ? a : b;
};
Mc.h = function(a, b, c) {
  return Dc(Mc, a > b ? a : b, c);
};
Mc.n = function(a) {
  var b = L(a), c = N(a);
  a = L(c);
  c = N(c);
  return Mc.h(b, a, c);
};
Mc.o = 2;
function Nc(a) {
  a = (a - a % 2) / 2;
  return 0 <= a ? Math.floor.b ? Math.floor.b(a) : Math.floor.call(null, a) : Math.ceil.b ? Math.ceil.b(a) : Math.ceil.call(null, a);
}
function Oc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
function Pc(a) {
  var b = 1;
  for (a = J(a);;) {
    if (a && 0 < b) {
      --b, a = N(a);
    } else {
      return a;
    }
  }
}
var A = function A() {
  switch(arguments.length) {
    case 0:
      return A.l();
    case 1:
      return A.b(arguments[0]);
    default:
      return A.h(arguments[0], new K(Array.prototype.slice.call(arguments, 1), 0));
  }
};
A.l = function() {
  return "";
};
A.b = function(a) {
  return null == a ? "" : ea(a);
};
A.h = function(a, b) {
  for (var c = new ha("" + A(a)), d = b;;) {
    if (v(d)) {
      c = c.append("" + A(L(d))), d = N(d);
    } else {
      return c.toString();
    }
  }
};
A.n = function(a) {
  var b = L(a);
  a = N(a);
  return A.h(b, a);
};
A.o = 1;
function ec(a, b) {
  var c;
  if (b ? b.g & 16777216 || b.Bb || (b.g ? 0 : x(ib, b)) : x(ib, b)) {
    if (cc(a) && cc(b) && T(a) !== T(b)) {
      c = !1;
    } else {
      a: {
        c = J(a);
        for (var d = J(b);;) {
          if (null == c) {
            c = null == d;
            break a;
          }
          if (null != d && O.a(L(c), L(d))) {
            c = N(c), d = N(d);
          } else {
            c = !1;
            break a;
          }
        }
      }
    }
  } else {
    c = null;
  }
  return Bc(c);
}
function Qc(a, b, c, d, e) {
  this.k = a;
  this.first = b;
  this.ra = c;
  this.count = d;
  this.j = e;
  this.g = 65937646;
  this.r = 8192;
}
h = Qc.prototype;
h.toString = function() {
  return Bb(this);
};
h.equiv = function(a) {
  return this.m(null, a);
};
h.D = function() {
  return this.k;
};
h.Q = function() {
  return 1 === this.count ? null : this.ra;
};
h.O = function() {
  return this.count;
};
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Sb(this);
};
h.m = function(a, b) {
  return ec(this, b);
};
h.L = function(a, b) {
  return Cc(b, this);
};
h.M = function(a, b, c) {
  return Fc(b, c, this);
};
h.N = function() {
  return this.first;
};
h.S = function() {
  return 1 === this.count ? Nb : this.ra;
};
h.H = function() {
  return this;
};
h.I = function(a, b) {
  return new Qc(b, this.first, this.ra, this.count, this.j);
};
h.F = function(a, b) {
  return new Qc(this.k, b, this, this.count + 1, null);
};
Qc.prototype[Aa] = function() {
  return Qb(this);
};
function Rc(a) {
  this.k = a;
  this.g = 65937614;
  this.r = 8192;
}
h = Rc.prototype;
h.toString = function() {
  return Bb(this);
};
h.equiv = function(a) {
  return this.m(null, a);
};
h.D = function() {
  return this.k;
};
h.Q = function() {
  return null;
};
h.O = function() {
  return 0;
};
h.v = function() {
  return Tb;
};
h.m = function(a, b) {
  return ec(this, b);
};
h.L = function(a, b) {
  return Cc(b, this);
};
h.M = function(a, b, c) {
  return Fc(b, c, this);
};
h.N = function() {
  return null;
};
h.S = function() {
  return Nb;
};
h.H = function() {
  return null;
};
h.I = function(a, b) {
  return new Rc(b);
};
h.F = function(a, b) {
  return new Qc(this.k, b, null, 1, null);
};
var Nb = new Rc(null);
Rc.prototype[Aa] = function() {
  return Qb(this);
};
function Sc() {
  a: {
    var a = 0 < arguments.length ? new K(Array.prototype.slice.call(arguments, 0), 0) : null, b;
    if (a instanceof K && 0 === a.i) {
      b = a.c;
    } else {
      b: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.N(null)), a = a.Q(null);
          } else {
            break b;
          }
        }
      }
    }
    for (var a = b.length, c = Nb;;) {
      if (0 < a) {
        var d = a - 1, c = c.F(null, b[a - 1]), a = d
      } else {
        break a;
      }
    }
  }
  return c;
}
function Tc(a, b, c, d) {
  this.k = a;
  this.first = b;
  this.ra = c;
  this.j = d;
  this.g = 65929452;
  this.r = 8192;
}
h = Tc.prototype;
h.toString = function() {
  return Bb(this);
};
h.equiv = function(a) {
  return this.m(null, a);
};
h.D = function() {
  return this.k;
};
h.Q = function() {
  return null == this.ra ? null : J(this.ra);
};
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Sb(this);
};
h.m = function(a, b) {
  return ec(this, b);
};
h.L = function(a, b) {
  return Cc(b, this);
};
h.M = function(a, b, c) {
  return Fc(b, c, this);
};
h.N = function() {
  return this.first;
};
h.S = function() {
  return null == this.ra ? Nb : this.ra;
};
h.H = function() {
  return this;
};
h.I = function(a, b) {
  return new Tc(b, this.first, this.ra, this.j);
};
h.F = function(a, b) {
  return new Tc(null, b, this, this.j);
};
Tc.prototype[Aa] = function() {
  return Qb(this);
};
function Q(a, b) {
  var c = null == b;
  return(c ? c : b && (b.g & 64 || b.Ma)) ? new Tc(null, a, b, null) : new Tc(null, a, J(b), null);
}
function V(a, b, c, d) {
  this.Ja = a;
  this.name = b;
  this.ua = c;
  this.Aa = d;
  this.g = 2153775105;
  this.r = 4096;
}
h = V.prototype;
h.t = function(a, b) {
  return I(b, [A(":"), A(this.ua)].join(""));
};
h.v = function() {
  var a = this.Aa;
  return null != a ? a : this.Aa = a = Lb(Gb(this.name), Jb(this.Ja)) + 2654435769 | 0;
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return lc(c, this);
      case 3:
        return mc(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return lc(c, this);
  };
  a.e = function(a, c, d) {
    return mc(c, this, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ba(b)));
};
h.b = function(a) {
  return lc(a, this);
};
h.a = function(a, b) {
  return mc(a, this, b);
};
h.m = function(a, b) {
  return b instanceof V ? this.ua === b.ua : !1;
};
h.toString = function() {
  return[A(":"), A(this.ua)].join("");
};
h.equiv = function(a) {
  return this.m(null, a);
};
var Uc = function Uc() {
  switch(arguments.length) {
    case 1:
      return Uc.b(arguments[0]);
    case 2:
      return Uc.a(arguments[0], arguments[1]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
Uc.b = function(a) {
  if (a instanceof V) {
    return a;
  }
  if (a instanceof Mb) {
    var b;
    if (a && (a.r & 4096 || a.mb)) {
      b = a.Ja;
    } else {
      throw Error([A("Doesn't support namespace: "), A(a)].join(""));
    }
    return new V(b, Vc.b ? Vc.b(a) : Vc.call(null, a), a.wa, null);
  }
  return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new V(b[0], b[1], a, null) : new V(null, b[0], a, null)) : null;
};
Uc.a = function(a, b) {
  return new V(a, b, [A(v(a) ? [A(a), A("/")].join("") : null), A(b)].join(""), null);
};
Uc.o = 2;
function Wc(a, b, c, d) {
  this.k = a;
  this.Ca = b;
  this.q = c;
  this.j = d;
  this.r = 0;
  this.g = 32374988;
}
h = Wc.prototype;
h.toString = function() {
  return Bb(this);
};
h.equiv = function(a) {
  return this.m(null, a);
};
function Xc(a) {
  null != a.Ca && (a.q = a.Ca.l ? a.Ca.l() : a.Ca.call(null), a.Ca = null);
  return a.q;
}
h.D = function() {
  return this.k;
};
h.Q = function() {
  hb(this);
  return null == this.q ? null : N(this.q);
};
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Sb(this);
};
h.m = function(a, b) {
  return ec(this, b);
};
h.L = function(a, b) {
  return Cc(b, this);
};
h.M = function(a, b, c) {
  return Fc(b, c, this);
};
h.N = function() {
  hb(this);
  return null == this.q ? null : L(this.q);
};
h.S = function() {
  hb(this);
  return null != this.q ? M(this.q) : Nb;
};
h.H = function() {
  Xc(this);
  if (null == this.q) {
    return null;
  }
  for (var a = this.q;;) {
    if (a instanceof Wc) {
      a = Xc(a);
    } else {
      return this.q = a, J(this.q);
    }
  }
};
h.I = function(a, b) {
  return new Wc(b, this.Ca, this.q, this.j);
};
h.F = function(a, b) {
  return Q(b, this);
};
Wc.prototype[Aa] = function() {
  return Qb(this);
};
function Yc(a, b) {
  this.Ra = a;
  this.end = b;
  this.r = 0;
  this.g = 2;
}
Yc.prototype.O = function() {
  return this.end;
};
Yc.prototype.add = function(a) {
  this.Ra[this.end] = a;
  return this.end += 1;
};
Yc.prototype.u = function() {
  var a = new Zc(this.Ra, 0, this.end);
  this.Ra = null;
  return a;
};
function $c(a) {
  return new Yc(Array(a), 0);
}
function Zc(a, b, c) {
  this.c = a;
  this.J = b;
  this.end = c;
  this.r = 0;
  this.g = 524306;
}
h = Zc.prototype;
h.L = function(a, b) {
  return bc(this.c, b, this.c[this.J], this.J + 1);
};
h.M = function(a, b, c) {
  return bc(this.c, b, c, this.J);
};
h.Ya = function() {
  if (this.J === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Zc(this.c, this.J + 1, this.end);
};
h.w = function(a, b) {
  return this.c[this.J + b];
};
h.T = function(a, b, c) {
  return 0 <= b && b < this.end - this.J ? this.c[this.J + b] : c;
};
h.O = function() {
  return this.end - this.J;
};
function ad(a, b, c, d) {
  this.u = a;
  this.aa = b;
  this.k = c;
  this.j = d;
  this.g = 31850732;
  this.r = 1536;
}
h = ad.prototype;
h.toString = function() {
  return Bb(this);
};
h.equiv = function(a) {
  return this.m(null, a);
};
h.D = function() {
  return this.k;
};
h.Q = function() {
  if (1 < Fa(this.u)) {
    return new ad(sb(this.u), this.aa, this.k, null);
  }
  var a = hb(this.aa);
  return null == a ? null : a;
};
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Sb(this);
};
h.m = function(a, b) {
  return ec(this, b);
};
h.N = function() {
  return B.a(this.u, 0);
};
h.S = function() {
  return 1 < Fa(this.u) ? new ad(sb(this.u), this.aa, this.k, null) : null == this.aa ? Nb : this.aa;
};
h.H = function() {
  return this;
};
h.Ta = function() {
  return this.u;
};
h.Ua = function() {
  return null == this.aa ? Nb : this.aa;
};
h.I = function(a, b) {
  return new ad(this.u, this.aa, b, this.j);
};
h.F = function(a, b) {
  return Q(b, this);
};
h.Sa = function() {
  return null == this.aa ? null : this.aa;
};
ad.prototype[Aa] = function() {
  return Qb(this);
};
function bd(a, b) {
  return 0 === Fa(a) ? b : new ad(a, b, null, null);
}
function dd(a, b) {
  a.add(b);
}
function ed(a) {
  for (var b = [];;) {
    if (J(a)) {
      b.push(L(a)), a = N(a);
    } else {
      return b;
    }
  }
}
function fd(a, b) {
  if (cc(a)) {
    return T(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && J(c)) {
      c = N(c), --d, e += 1;
    } else {
      return e;
    }
  }
}
var gd = function gd(b) {
  return null == b ? null : null == N(b) ? J(L(b)) : Q(L(b), gd(N(b)));
}, hd = function hd() {
  switch(arguments.length) {
    case 0:
      return hd.l();
    case 1:
      return hd.b(arguments[0]);
    case 2:
      return hd.a(arguments[0], arguments[1]);
    default:
      return hd.h(arguments[0], arguments[1], new K(Array.prototype.slice.call(arguments, 2), 0));
  }
};
hd.l = function() {
  return nb(jc);
};
hd.b = function(a) {
  return a;
};
hd.a = function(a, b) {
  return ob(a, b);
};
hd.h = function(a, b, c) {
  for (;;) {
    if (a = ob(a, b), v(c)) {
      b = L(c), c = N(c);
    } else {
      return a;
    }
  }
};
hd.n = function(a) {
  var b = L(a), c = N(a);
  a = L(c);
  c = N(c);
  return hd.h(b, a, c);
};
hd.o = 2;
function id(a, b, c) {
  var d = J(c);
  if (0 === b) {
    return a.l ? a.l() : a.call(null);
  }
  c = F(d);
  var e = H(d);
  if (1 === b) {
    return a.b ? a.b(c) : a.b ? a.b(c) : a.call(null, c);
  }
  var d = F(e), f = H(e);
  if (2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d);
  }
  var e = F(f), g = H(f);
  if (3 === b) {
    return a.e ? a.e(c, d, e) : a.e ? a.e(c, d, e) : a.call(null, c, d, e);
  }
  var f = F(g), k = H(g);
  if (4 === b) {
    return a.p ? a.p(c, d, e, f) : a.p ? a.p(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var g = F(k), l = H(k);
  if (5 === b) {
    return a.C ? a.C(c, d, e, f, g) : a.C ? a.C(c, d, e, f, g) : a.call(null, c, d, e, f, g);
  }
  var k = F(l), m = H(l);
  if (6 === b) {
    return a.Y ? a.Y(c, d, e, f, g, k) : a.Y ? a.Y(c, d, e, f, g, k) : a.call(null, c, d, e, f, g, k);
  }
  var l = F(m), n = H(m);
  if (7 === b) {
    return a.na ? a.na(c, d, e, f, g, k, l) : a.na ? a.na(c, d, e, f, g, k, l) : a.call(null, c, d, e, f, g, k, l);
  }
  var m = F(n), p = H(n);
  if (8 === b) {
    return a.oa ? a.oa(c, d, e, f, g, k, l, m) : a.oa ? a.oa(c, d, e, f, g, k, l, m) : a.call(null, c, d, e, f, g, k, l, m);
  }
  var n = F(p), q = H(p);
  if (9 === b) {
    return a.pa ? a.pa(c, d, e, f, g, k, l, m, n) : a.pa ? a.pa(c, d, e, f, g, k, l, m, n) : a.call(null, c, d, e, f, g, k, l, m, n);
  }
  var p = F(q), u = H(q);
  if (10 === b) {
    return a.ca ? a.ca(c, d, e, f, g, k, l, m, n, p) : a.ca ? a.ca(c, d, e, f, g, k, l, m, n, p) : a.call(null, c, d, e, f, g, k, l, m, n, p);
  }
  var q = F(u), w = H(u);
  if (11 === b) {
    return a.da ? a.da(c, d, e, f, g, k, l, m, n, p, q) : a.da ? a.da(c, d, e, f, g, k, l, m, n, p, q) : a.call(null, c, d, e, f, g, k, l, m, n, p, q);
  }
  var u = F(w), t = H(w);
  if (12 === b) {
    return a.ea ? a.ea(c, d, e, f, g, k, l, m, n, p, q, u) : a.ea ? a.ea(c, d, e, f, g, k, l, m, n, p, q, u) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, u);
  }
  var w = F(t), C = H(t);
  if (13 === b) {
    return a.fa ? a.fa(c, d, e, f, g, k, l, m, n, p, q, u, w) : a.fa ? a.fa(c, d, e, f, g, k, l, m, n, p, q, u, w) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, u, w);
  }
  var t = F(C), D = H(C);
  if (14 === b) {
    return a.ga ? a.ga(c, d, e, f, g, k, l, m, n, p, q, u, w, t) : a.ga ? a.ga(c, d, e, f, g, k, l, m, n, p, q, u, w, t) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, u, w, t);
  }
  var C = F(D), G = H(D);
  if (15 === b) {
    return a.ha ? a.ha(c, d, e, f, g, k, l, m, n, p, q, u, w, t, C) : a.ha ? a.ha(c, d, e, f, g, k, l, m, n, p, q, u, w, t, C) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, u, w, t, C);
  }
  var D = F(G), E = H(G);
  if (16 === b) {
    return a.ia ? a.ia(c, d, e, f, g, k, l, m, n, p, q, u, w, t, C, D) : a.ia ? a.ia(c, d, e, f, g, k, l, m, n, p, q, u, w, t, C, D) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, u, w, t, C, D);
  }
  var G = F(E), S = H(E);
  if (17 === b) {
    return a.ja ? a.ja(c, d, e, f, g, k, l, m, n, p, q, u, w, t, C, D, G) : a.ja ? a.ja(c, d, e, f, g, k, l, m, n, p, q, u, w, t, C, D, G) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, u, w, t, C, D, G);
  }
  var E = F(S), R = H(S);
  if (18 === b) {
    return a.ka ? a.ka(c, d, e, f, g, k, l, m, n, p, q, u, w, t, C, D, G, E) : a.ka ? a.ka(c, d, e, f, g, k, l, m, n, p, q, u, w, t, C, D, G, E) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, u, w, t, C, D, G, E);
  }
  S = F(R);
  R = H(R);
  if (19 === b) {
    return a.la ? a.la(c, d, e, f, g, k, l, m, n, p, q, u, w, t, C, D, G, E, S) : a.la ? a.la(c, d, e, f, g, k, l, m, n, p, q, u, w, t, C, D, G, E, S) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, u, w, t, C, D, G, E, S);
  }
  var y = F(R);
  H(R);
  if (20 === b) {
    return a.ma ? a.ma(c, d, e, f, g, k, l, m, n, p, q, u, w, t, C, D, G, E, S, y) : a.ma ? a.ma(c, d, e, f, g, k, l, m, n, p, q, u, w, t, C, D, G, E, S, y) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, u, w, t, C, D, G, E, S, y);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
function rc() {
  switch(arguments.length) {
    case 2:
      return jd(arguments[0], arguments[1]);
    case 3:
      return kd(arguments[0], arguments[1], arguments[2]);
    case 4:
      var a;
      a = arguments[0];
      var b = Q(arguments[1], Q(arguments[2], arguments[3])), c = a.o;
      if (a.n) {
        var d = fd(b, c + 1);
        a = d <= c ? id(a, d, b) : a.n(b);
      } else {
        a = a.apply(a, ed(b));
      }
      return a;
    case 5:
      return ld(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      return md(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], new K(Array.prototype.slice.call(arguments, 5), 0));
  }
}
function jd(a, b) {
  var c = a.o;
  if (a.n) {
    var d = fd(b, c + 1);
    return d <= c ? id(a, d, b) : a.n(b);
  }
  return a.apply(a, ed(b));
}
function kd(a, b, c) {
  b = Q(b, c);
  c = a.o;
  if (a.n) {
    var d = fd(b, c + 1);
    return d <= c ? id(a, d, b) : a.n(b);
  }
  return a.apply(a, ed(b));
}
function ld(a, b, c, d, e) {
  b = Q(b, Q(c, Q(d, e)));
  c = a.o;
  return a.n ? (d = fd(b, c + 1), d <= c ? id(a, d, b) : a.n(b)) : a.apply(a, ed(b));
}
function md(a, b, c, d, e, f) {
  b = Q(b, Q(c, Q(d, Q(e, gd(f)))));
  c = a.o;
  return a.n ? (d = fd(b, c + 1), d <= c ? id(a, d, b) : a.n(b)) : a.apply(a, ed(b));
}
function nd(a, b) {
  for (;;) {
    if (null == J(b)) {
      return!0;
    }
    var c;
    c = L(b);
    c = a.b ? a.b(c) : a.call(null, c);
    if (v(c)) {
      c = a;
      var d = N(b);
      a = c;
      b = d;
    } else {
      return!1;
    }
  }
}
function od(a) {
  var b = pd;
  return function d(a, f) {
    return new Wc(null, function() {
      var g = J(f);
      if (g) {
        if (vc(g)) {
          for (var k = tb(g), l = T(k), m = $c(l), n = 0;;) {
            if (n < l) {
              dd(m, function() {
                var d = a + n, f = B.a(k, n);
                return b.a ? b.a(d, f) : b.call(null, d, f);
              }()), n += 1;
            } else {
              break;
            }
          }
          return bd(m.u(), d(a + l, ub(g)));
        }
        return Q(function() {
          var d = L(g);
          return b.a ? b.a(a, d) : b.call(null, a, d);
        }(), d(a + 1, M(g)));
      }
      return null;
    }, null, null);
  }(0, a);
}
function qd(a, b, c, d) {
  this.state = a;
  this.k = b;
  this.wb = c;
  this.cb = d;
  this.g = 6455296;
  this.r = 16386;
}
h = qd.prototype;
h.v = function() {
  return this[ca] || (this[ca] = ++da);
};
h.ab = function(a, b, c) {
  for (var d = J(this.cb), e = null, f = 0, g = 0;;) {
    if (g < f) {
      a = e.w(null, g);
      var k = U(a, 0);
      a = U(a, 1);
      var l = b, m = c;
      a.p ? a.p(k, this, l, m) : a.call(null, k, this, l, m);
      g += 1;
    } else {
      if (a = J(d)) {
        d = a, vc(d) ? (e = tb(d), d = ub(d), a = e, f = T(e), e = a) : (a = L(d), k = U(a, 0), a = U(a, 1), e = k, f = b, g = c, a.p ? a.p(e, this, f, g) : a.call(null, e, this, f, g), d = N(d), e = null, f = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
h.D = function() {
  return this.k;
};
h.gb = function() {
  return this.state;
};
h.m = function(a, b) {
  return this === b;
};
h.equiv = function(a) {
  return this.m(null, a);
};
function rd() {
  switch(arguments.length) {
    case 1:
      return sd(arguments[0]);
    default:
      var a = arguments[0], b = new K(Array.prototype.slice.call(arguments, 1), 0), c = Ac(b) ? jd(td, b) : b, b = lc(c, ud), c = lc(c, sa);
      return new qd(a, c, b, null);
  }
}
function sd(a) {
  return new qd(a, null, null, null);
}
function vd(a, b) {
  if (a instanceof qd) {
    var c = a.wb;
    if (null != c && !v(c.b ? c.b(b) : c.call(null, b))) {
      throw Error([A("Assert failed: "), A("Validator rejected reference state"), A("\n"), A(function() {
        var a = Sc(new Mb(null, "validate", "validate", 1439230700, null), new Mb(null, "new-value", "new-value", -1567397401, null));
        return wd.b ? wd.b(a) : wd.call(null, a);
      }())].join(""));
    }
    c = a.state;
    a.state = b;
    null != a.cb && lb(a, c, b);
    return b;
  }
  return wb(a, b);
}
var xd = function xd() {
  switch(arguments.length) {
    case 2:
      return xd.a(arguments[0], arguments[1]);
    case 3:
      return xd.e(arguments[0], arguments[1], arguments[2]);
    case 4:
      return xd.p(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return xd.h(arguments[0], arguments[1], arguments[2], arguments[3], new K(Array.prototype.slice.call(arguments, 4), 0));
  }
};
xd.a = function(a, b) {
  var c;
  a instanceof qd ? (c = a.state, c = b.b ? b.b(c) : b.call(null, c), c = vd(a, c)) : c = xb.a(a, b);
  return c;
};
xd.e = function(a, b, c) {
  if (a instanceof qd) {
    var d = a.state;
    b = b.a ? b.a(d, c) : b.call(null, d, c);
    a = vd(a, b);
  } else {
    a = xb.e(a, b, c);
  }
  return a;
};
xd.p = function(a, b, c, d) {
  if (a instanceof qd) {
    var e = a.state;
    b = b.e ? b.e(e, c, d) : b.call(null, e, c, d);
    a = vd(a, b);
  } else {
    a = xb.p(a, b, c, d);
  }
  return a;
};
xd.h = function(a, b, c, d, e) {
  return a instanceof qd ? vd(a, ld(b, a.state, c, d, e)) : xb.C(a, b, c, d, e);
};
xd.n = function(a) {
  var b = L(a), c = N(a);
  a = L(c);
  var d = N(c), c = L(d), e = N(d), d = L(e), e = N(e);
  return xd.h(b, a, c, d, e);
};
xd.o = 4;
var W = function W() {
  switch(arguments.length) {
    case 1:
      return W.b(arguments[0]);
    case 2:
      return W.a(arguments[0], arguments[1]);
    case 3:
      return W.e(arguments[0], arguments[1], arguments[2]);
    case 4:
      return W.p(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return W.h(arguments[0], arguments[1], arguments[2], arguments[3], new K(Array.prototype.slice.call(arguments, 4), 0));
  }
};
W.b = function(a) {
  return function(b) {
    return function() {
      function c(c, d) {
        var e = a.b ? a.b(d) : a.call(null, d);
        return b.a ? b.a(c, e) : b.call(null, c, e);
      }
      function d(a) {
        return b.b ? b.b(a) : b.call(null, a);
      }
      function e() {
        return b.l ? b.l() : b.call(null);
      }
      var f = null, g = function() {
        function c(a, b, e) {
          var f = null;
          if (2 < arguments.length) {
            for (var f = 0, g = Array(arguments.length - 2);f < g.length;) {
              g[f] = arguments[f + 2], ++f;
            }
            f = new K(g, 0);
          }
          return d.call(this, a, b, f);
        }
        function d(c, e, f) {
          e = kd(a, e, f);
          return b.a ? b.a(c, e) : b.call(null, c, e);
        }
        c.o = 2;
        c.n = function(a) {
          var b = L(a);
          a = N(a);
          var c = L(a);
          a = M(a);
          return d(b, c, a);
        };
        c.h = d;
        return c;
      }(), f = function(a, b, f) {
        switch(arguments.length) {
          case 0:
            return e.call(this);
          case 1:
            return d.call(this, a);
          case 2:
            return c.call(this, a, b);
          default:
            var n = null;
            if (2 < arguments.length) {
              for (var n = 0, p = Array(arguments.length - 2);n < p.length;) {
                p[n] = arguments[n + 2], ++n;
              }
              n = new K(p, 0);
            }
            return g.h(a, b, n);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      f.o = 2;
      f.n = g.n;
      f.l = e;
      f.b = d;
      f.a = c;
      f.h = g.h;
      return f;
    }();
  };
};
W.a = function(a, b) {
  return new Wc(null, function() {
    var c = J(b);
    if (c) {
      if (vc(c)) {
        for (var d = tb(c), e = T(d), f = $c(e), g = 0;;) {
          if (g < e) {
            dd(f, function() {
              var b = B.a(d, g);
              return a.b ? a.b(b) : a.call(null, b);
            }()), g += 1;
          } else {
            break;
          }
        }
        return bd(f.u(), W.a(a, ub(c)));
      }
      return Q(function() {
        var b = L(c);
        return a.b ? a.b(b) : a.call(null, b);
      }(), W.a(a, M(c)));
    }
    return null;
  }, null, null);
};
W.e = function(a, b, c) {
  return new Wc(null, function() {
    var d = J(b), e = J(c);
    if (d && e) {
      var f = Q, g;
      g = L(d);
      var k = L(e);
      g = a.a ? a.a(g, k) : a.call(null, g, k);
      d = f(g, W.e(a, M(d), M(e)));
    } else {
      d = null;
    }
    return d;
  }, null, null);
};
W.p = function(a, b, c, d) {
  return new Wc(null, function() {
    var e = J(b), f = J(c), g = J(d);
    if (e && f && g) {
      var k = Q, l;
      l = L(e);
      var m = L(f), n = L(g);
      l = a.e ? a.e(l, m, n) : a.call(null, l, m, n);
      e = k(l, W.p(a, M(e), M(f), M(g)));
    } else {
      e = null;
    }
    return e;
  }, null, null);
};
W.h = function(a, b, c, d, e) {
  var f = function k(a) {
    return new Wc(null, function() {
      var b = W.a(J, a);
      return nd(Hc, b) ? Q(W.a(L, b), k(W.a(M, b))) : null;
    }, null, null);
  };
  return W.a(function() {
    return function(b) {
      return jd(a, b);
    };
  }(f), f(ic.h(e, d, gc([c, b], 0))));
};
W.n = function(a) {
  var b = L(a), c = N(a);
  a = L(c);
  var d = N(c), c = L(d), e = N(d), d = L(e), e = N(e);
  return W.h(b, a, c, d, e);
};
W.o = 4;
function yd(a, b) {
  return new Wc(null, function() {
    if (0 < a) {
      var c = J(b);
      return c ? Q(L(c), yd(a - 1, M(c))) : null;
    }
    return null;
  }, null, null);
}
function zd(a) {
  return new Wc(null, function() {
    return Q(a, zd(a));
  }, null, null);
}
var Bd = function Bd(b, c) {
  return Q(c, new Wc(null, function() {
    return Bd(b, b.b ? b.b(c) : b.call(null, c));
  }, null, null));
};
function Cd(a, b) {
  var c;
  if (null != a) {
    if (a && (a.r & 4 || a.yb)) {
      c = Dc(ob, nb(a), b);
      c = pb(c);
      var d = sc(a);
      c = pc(c) && !(c ? c.g & 262144 || c.Db || (c.g ? 0 : x($a, c)) : x($a, c)) ? new qc(c, d) : null == c ? null : ab(c, d);
    } else {
      c = Dc(Ha, a, b);
    }
  } else {
    c = Dc(ic, Nb, b);
  }
  return c;
}
function Dd(a, b) {
  var c;
  a: {
    c = zc;
    for (var d = a, e = J(b);;) {
      if (e) {
        var f = d;
        if (f ? f.g & 256 || f.Za || (f.g ? 0 : x(Ma, f)) : x(Ma, f)) {
          d = mc(d, L(e), c);
          if (c === d) {
            c = null;
            break a;
          }
          e = N(e);
        } else {
          c = null;
          break a;
        }
      } else {
        c = d;
        break a;
      }
    }
  }
  return c;
}
var Ed = function Ed() {
  switch(arguments.length) {
    case 3:
      return Ed.e(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Ed.p(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Ed.C(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    case 6:
      return Ed.Y(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    default:
      return Ed.h(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], new K(Array.prototype.slice.call(arguments, 6), 0));
  }
};
Ed.e = function(a, b, c) {
  return nc.e(a, b, function() {
    var d = lc(a, b);
    return c.b ? c.b(d) : c.call(null, d);
  }());
};
Ed.p = function(a, b, c, d) {
  return nc.e(a, b, function() {
    var e = lc(a, b);
    return c.a ? c.a(e, d) : c.call(null, e, d);
  }());
};
Ed.C = function(a, b, c, d, e) {
  return nc.e(a, b, function() {
    var f = lc(a, b);
    return c.e ? c.e(f, d, e) : c.call(null, f, d, e);
  }());
};
Ed.Y = function(a, b, c, d, e, f) {
  return nc.e(a, b, function() {
    var g = lc(a, b);
    return c.p ? c.p(g, d, e, f) : c.call(null, g, d, e, f);
  }());
};
Ed.h = function(a, b, c, d, e, f, g) {
  return nc.e(a, b, md(c, lc(a, b), d, e, f, gc([g], 0)));
};
Ed.n = function(a) {
  var b = L(a), c = N(a);
  a = L(c);
  var d = N(c), c = L(d), e = N(d), d = L(e), f = N(e), e = L(f), g = N(f), f = L(g), g = N(g);
  return Ed.h(b, a, c, d, e, f, g);
};
Ed.o = 6;
function Fd(a, b) {
  this.s = a;
  this.c = b;
}
function Gd(a) {
  return new Fd(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function Hd(a) {
  a = a.f;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function Id(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = Gd(a);
    d.c[0] = c;
    c = d;
    b -= 5;
  }
}
var Jd = function Jd(b, c, d, e) {
  var f = new Fd(d.s, Ba(d.c)), g = b.f - 1 >>> c & 31;
  5 === c ? f.c[g] = e : (d = d.c[g], b = null != d ? Jd(b, c - 5, d, e) : Id(null, c - 5, e), f.c[g] = b);
  return f;
};
function Kd(a, b) {
  throw Error([A("No item "), A(a), A(" in vector of length "), A(b)].join(""));
}
function Ld(a, b) {
  if (b >= Hd(a)) {
    return a.R;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.c[b >>> d & 31], d = e
    } else {
      return c.c;
    }
  }
}
function Md(a, b) {
  return 0 <= b && b < a.f ? Ld(a, b) : Kd(b, a.f);
}
var Nd = function Nd(b, c, d, e, f) {
  var g = new Fd(d.s, Ba(d.c));
  if (0 === c) {
    g.c[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = Nd(b, c - 5, d.c[k], e, f);
    g.c[k] = b;
  }
  return g;
};
function Od(a, b, c, d, e, f) {
  this.i = a;
  this.Qa = b;
  this.c = c;
  this.sa = d;
  this.start = e;
  this.end = f;
}
Od.prototype.Pa = function() {
  return this.i < this.end;
};
Od.prototype.next = function() {
  32 === this.i - this.Qa && (this.c = Ld(this.sa, this.i), this.Qa += 32);
  var a = this.c[this.i & 31];
  this.i += 1;
  return a;
};
function X(a, b, c, d, e, f) {
  this.k = a;
  this.f = b;
  this.shift = c;
  this.root = d;
  this.R = e;
  this.j = f;
  this.g = 167668511;
  this.r = 8196;
}
h = X.prototype;
h.toString = function() {
  return Bb(this);
};
h.equiv = function(a) {
  return this.m(null, a);
};
h.K = function(a, b) {
  return Na.e(this, b, null);
};
h.A = function(a, b, c) {
  return "number" === typeof b ? B.e(this, b, c) : c;
};
h.w = function(a, b) {
  return Md(this, b)[b & 31];
};
h.T = function(a, b, c) {
  return 0 <= b && b < this.f ? Ld(this, b)[b & 31] : c;
};
h.Xa = function(a, b, c) {
  if (0 <= b && b < this.f) {
    return Hd(this) <= b ? (a = Ba(this.R), a[b & 31] = c, new X(this.k, this.f, this.shift, this.root, a, null)) : new X(this.k, this.f, this.shift, Nd(this, this.shift, this.root, b, c), this.R, null);
  }
  if (b === this.f) {
    return Ha(this, c);
  }
  throw Error([A("Index "), A(b), A(" out of bounds  [0,"), A(this.f), A("]")].join(""));
};
h.Ga = function() {
  var a = this.f;
  return new Od(0, 0, 0 < T(this) ? Ld(this, 0) : null, this, 0, a);
};
h.D = function() {
  return this.k;
};
h.O = function() {
  return this.f;
};
h.Va = function() {
  return B.a(this, 0);
};
h.Wa = function() {
  return B.a(this, 1);
};
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Sb(this);
};
h.m = function(a, b) {
  if (b instanceof X) {
    if (this.f === T(b)) {
      for (var c = zb(this), d = zb(b);;) {
        if (v(c.Pa())) {
          var e = c.next(), f = d.next();
          if (!O.a(e, f)) {
            return!1;
          }
        } else {
          return!0;
        }
      }
    } else {
      return!1;
    }
  } else {
    return ec(this, b);
  }
};
h.Fa = function() {
  var a = this;
  return new Pd(a.f, a.shift, function() {
    var b = a.root;
    return Qd.b ? Qd.b(b) : Qd.call(null, b);
  }(), function() {
    var b = a.R;
    return Rd.b ? Rd.b(b) : Rd.call(null, b);
  }());
};
h.L = function(a, b) {
  return Xb(this, b);
};
h.M = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.f) {
      var e = Ld(this, a);
      c = e.length;
      a: {
        for (var f = 0;;) {
          if (f < c) {
            var g = e[f], d = b.a ? b.a(d, g) : b.call(null, d, g), f = f + 1
          } else {
            e = d;
            break a;
          }
        }
      }
      a += c;
      d = e;
    } else {
      return d;
    }
  }
};
h.Ea = function(a, b, c) {
  if ("number" === typeof b) {
    return Va(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
h.H = function() {
  if (0 === this.f) {
    return null;
  }
  if (32 >= this.f) {
    return new K(this.R, 0);
  }
  var a;
  a: {
    a = this.root;
    for (var b = this.shift;;) {
      if (0 < b) {
        b -= 5, a = a.c[0];
      } else {
        a = a.c;
        break a;
      }
    }
  }
  return Sd ? Sd(this, a, 0, 0) : Td.call(null, this, a, 0, 0);
};
h.I = function(a, b) {
  return new X(b, this.f, this.shift, this.root, this.R, this.j);
};
h.F = function(a, b) {
  if (32 > this.f - Hd(this)) {
    for (var c = this.R.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.R[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new X(this.k, this.f + 1, this.shift, this.root, d, null);
  }
  c = (d = this.f >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = Gd(null), d.c[0] = this.root, e = Id(null, this.shift, new Fd(null, this.R)), d.c[1] = e) : d = Jd(this, this.shift, this.root, new Fd(null, this.R));
  return new X(this.k, this.f + 1, c, d, [b], null);
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.w(null, c);
      case 3:
        return this.T(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.w(null, c);
  };
  a.e = function(a, c, d) {
    return this.T(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ba(b)));
};
h.b = function(a) {
  return this.w(null, a);
};
h.a = function(a, b) {
  return this.T(null, a, b);
};
var Y = new Fd(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), jc = new X(null, 0, 5, Y, [], Tb);
function Ud(a) {
  var b = a.length;
  if (32 > b) {
    return new X(null, b, 5, Y, a, null);
  }
  for (var c = 32, d = (new X(null, 32, 5, Y, a.slice(0, 32), null)).Fa(null);;) {
    if (c < b) {
      var e = c + 1, d = hd.a(d, a[c]), c = e
    } else {
      return pb(d);
    }
  }
}
X.prototype[Aa] = function() {
  return Qb(this);
};
function Vd(a) {
  return va(a) ? Ud(a) : pb(Dc(ob, nb(jc), a));
}
var pd = function pd() {
  return pd.h(0 < arguments.length ? new K(Array.prototype.slice.call(arguments, 0), 0) : null);
};
pd.h = function(a) {
  return a instanceof K && 0 === a.i ? Ud(a.c) : Vd(a);
};
pd.o = 0;
pd.n = function(a) {
  return pd.h(J(a));
};
function Wd(a, b, c, d, e, f) {
  this.W = a;
  this.qa = b;
  this.i = c;
  this.J = d;
  this.k = e;
  this.j = f;
  this.g = 32375020;
  this.r = 1536;
}
h = Wd.prototype;
h.toString = function() {
  return Bb(this);
};
h.equiv = function(a) {
  return this.m(null, a);
};
h.D = function() {
  return this.k;
};
h.Q = function() {
  if (this.J + 1 < this.qa.length) {
    var a;
    a = this.W;
    var b = this.qa, c = this.i, d = this.J + 1;
    a = Sd ? Sd(a, b, c, d) : Td.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return vb(this);
};
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Sb(this);
};
h.m = function(a, b) {
  return ec(this, b);
};
h.L = function(a, b) {
  var c;
  c = this.W;
  var d = this.i + this.J, e = T(this.W);
  c = Xd ? Xd(c, d, e) : Yd.call(null, c, d, e);
  return Xb(c, b);
};
h.M = function(a, b, c) {
  a = this.W;
  var d = this.i + this.J, e = T(this.W);
  a = Xd ? Xd(a, d, e) : Yd.call(null, a, d, e);
  return Yb(a, b, c);
};
h.N = function() {
  return this.qa[this.J];
};
h.S = function() {
  if (this.J + 1 < this.qa.length) {
    var a;
    a = this.W;
    var b = this.qa, c = this.i, d = this.J + 1;
    a = Sd ? Sd(a, b, c, d) : Td.call(null, a, b, c, d);
    return null == a ? Nb : a;
  }
  return ub(this);
};
h.H = function() {
  return this;
};
h.Ta = function() {
  var a = this.qa;
  return new Zc(a, this.J, a.length);
};
h.Ua = function() {
  var a = this.i + this.qa.length;
  if (a < Fa(this.W)) {
    var b = this.W, c = Ld(this.W, a);
    return Sd ? Sd(b, c, a, 0) : Td.call(null, b, c, a, 0);
  }
  return Nb;
};
h.I = function(a, b) {
  var c = this.W, d = this.qa, e = this.i, f = this.J;
  return Zd ? Zd(c, d, e, f, b) : Td.call(null, c, d, e, f, b);
};
h.F = function(a, b) {
  return Q(b, this);
};
h.Sa = function() {
  var a = this.i + this.qa.length;
  if (a < Fa(this.W)) {
    var b = this.W, c = Ld(this.W, a);
    return Sd ? Sd(b, c, a, 0) : Td.call(null, b, c, a, 0);
  }
  return null;
};
Wd.prototype[Aa] = function() {
  return Qb(this);
};
function Td() {
  switch(arguments.length) {
    case 3:
      var a = arguments[0], b = arguments[1], c = arguments[2];
      return new Wd(a, Md(a, b), b, c, null, null);
    case 4:
      return Sd(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Zd(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function Sd(a, b, c, d) {
  return new Wd(a, b, c, d, null, null);
}
function Zd(a, b, c, d, e) {
  return new Wd(a, b, c, d, e, null);
}
function $d(a, b, c, d, e) {
  this.k = a;
  this.sa = b;
  this.start = c;
  this.end = d;
  this.j = e;
  this.g = 167666463;
  this.r = 8192;
}
h = $d.prototype;
h.toString = function() {
  return Bb(this);
};
h.equiv = function(a) {
  return this.m(null, a);
};
h.K = function(a, b) {
  return Na.e(this, b, null);
};
h.A = function(a, b, c) {
  return "number" === typeof b ? B.e(this, b, c) : c;
};
h.w = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Kd(b, this.end - this.start) : B.a(this.sa, this.start + b);
};
h.T = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : B.e(this.sa, this.start + b, c);
};
h.Xa = function(a, b, c) {
  var d = this.start + b;
  a = this.k;
  c = nc.e(this.sa, d, c);
  b = this.start;
  var e = this.end, d = d + 1, d = e > d ? e : d;
  return ae.C ? ae.C(a, c, b, d, null) : ae.call(null, a, c, b, d, null);
};
h.D = function() {
  return this.k;
};
h.O = function() {
  return this.end - this.start;
};
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Sb(this);
};
h.m = function(a, b) {
  return ec(this, b);
};
h.L = function(a, b) {
  return Xb(this, b);
};
h.M = function(a, b, c) {
  return Yb(this, b, c);
};
h.Ea = function(a, b, c) {
  if ("number" === typeof b) {
    return Va(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
h.H = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : Q(B.a(a.sa, e), new Wc(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
h.I = function(a, b) {
  var c = this.sa, d = this.start, e = this.end, f = this.j;
  return ae.C ? ae.C(b, c, d, e, f) : ae.call(null, b, c, d, e, f);
};
h.F = function(a, b) {
  var c = this.k, d = Va(this.sa, this.end, b), e = this.start, f = this.end + 1;
  return ae.C ? ae.C(c, d, e, f, null) : ae.call(null, c, d, e, f, null);
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.w(null, c);
      case 3:
        return this.T(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.w(null, c);
  };
  a.e = function(a, c, d) {
    return this.T(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ba(b)));
};
h.b = function(a) {
  return this.w(null, a);
};
h.a = function(a, b) {
  return this.T(null, a, b);
};
$d.prototype[Aa] = function() {
  return Qb(this);
};
function ae(a, b, c, d, e) {
  for (;;) {
    if (b instanceof $d) {
      c = b.start + c, d = b.start + d, b = b.sa;
    } else {
      var f = T(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new $d(a, b, c, d, e);
    }
  }
}
function Yd() {
  switch(arguments.length) {
    case 2:
      var a = arguments[0];
      return Xd(a, arguments[1], T(a));
    case 3:
      return Xd(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function Xd(a, b, c) {
  return ae(null, a, b, c, null);
}
function be(a, b) {
  return a === b.s ? b : new Fd(a, Ba(b.c));
}
function Qd(a) {
  return new Fd({}, Ba(a.c));
}
function Rd(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  yc(a, 0, b, 0, a.length);
  return b;
}
var ce = function ce(b, c, d, e) {
  d = be(b.root.s, d);
  var f = b.f - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var g = d.c[f];
    b = null != g ? ce(b, c - 5, g, e) : Id(b.root.s, c - 5, e);
  }
  d.c[f] = b;
  return d;
};
function Pd(a, b, c, d) {
  this.f = a;
  this.shift = b;
  this.root = c;
  this.R = d;
  this.g = 275;
  this.r = 88;
}
h = Pd.prototype;
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.A(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.K(null, c);
  };
  a.e = function(a, c, d) {
    return this.A(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ba(b)));
};
h.b = function(a) {
  return this.K(null, a);
};
h.a = function(a, b) {
  return this.A(null, a, b);
};
h.K = function(a, b) {
  return Na.e(this, b, null);
};
h.A = function(a, b, c) {
  return "number" === typeof b ? B.e(this, b, c) : c;
};
h.w = function(a, b) {
  if (this.root.s) {
    return Md(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
h.T = function(a, b, c) {
  return 0 <= b && b < this.f ? B.a(this, b) : c;
};
h.O = function() {
  if (this.root.s) {
    return this.f;
  }
  throw Error("count after persistent!");
};
h.$a = function(a, b, c) {
  var d = this;
  if (d.root.s) {
    if (0 <= b && b < d.f) {
      return Hd(this) <= b ? d.R[b & 31] = c : (a = function() {
        return function f(a, k) {
          var l = be(d.root.s, k);
          if (0 === a) {
            l.c[b & 31] = c;
          } else {
            var m = b >>> a & 31, n = f(a - 5, l.c[m]);
            l.c[m] = n;
          }
          return l;
        };
      }(this).call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.f) {
      return ob(this, c);
    }
    throw Error([A("Index "), A(b), A(" out of bounds for TransientVector of length"), A(d.f)].join(""));
  }
  throw Error("assoc! after persistent!");
};
h.Ha = function(a, b, c) {
  if ("number" === typeof b) {
    return rb(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
h.Na = function(a, b) {
  if (this.root.s) {
    if (32 > this.f - Hd(this)) {
      this.R[this.f & 31] = b;
    } else {
      var c = new Fd(this.root.s, this.R), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.R = d;
      if (this.f >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = Id(this.root.s, this.shift, c);
        this.root = new Fd(this.root.s, d);
        this.shift = e;
      } else {
        this.root = ce(this, this.shift, this.root, c);
      }
    }
    this.f += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
h.Oa = function() {
  if (this.root.s) {
    this.root.s = null;
    var a = this.f - Hd(this), b = Array(a);
    yc(this.R, 0, b, 0, a);
    return new X(null, this.f, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function de() {
  this.r = 0;
  this.g = 2097152;
}
de.prototype.m = function() {
  return!1;
};
de.prototype.equiv = function(a) {
  return this.m(null, a);
};
var ee = new de;
function fe(a, b) {
  return Bc(tc(b) ? T(a) === T(b) ? nd(Hc, W.a(function(a) {
    return O.a(mc(b, L(a), ee), hc(a));
  }, a)) : null : null);
}
function ge(a) {
  this.q = a;
}
ge.prototype.next = function() {
  if (null != this.q) {
    var a = L(this.q), b = U(a, 0), a = U(a, 1);
    this.q = N(this.q);
    return{done:!1, value:[b, a]};
  }
  return{done:!0, value:null};
};
function he(a) {
  return new ge(J(a));
}
function ie(a, b) {
  var c;
  if (b instanceof V) {
    a: {
      c = a.length;
      for (var d = b.ua, e = 0;;) {
        if (c <= e) {
          c = -1;
          break a;
        }
        var f = a[e];
        if (f instanceof V && d === f.ua) {
          c = e;
          break a;
        }
        e += 2;
      }
    }
  } else {
    if (c = "string" == typeof b, v(v(c) ? c : "number" === typeof b)) {
      a: {
        for (c = a.length, d = 0;;) {
          if (c <= d) {
            c = -1;
            break a;
          }
          if (b === a[d]) {
            c = d;
            break a;
          }
          d += 2;
        }
      }
    } else {
      if (b instanceof Mb) {
        a: {
          for (c = a.length, d = b.wa, e = 0;;) {
            if (c <= e) {
              c = -1;
              break a;
            }
            f = a[e];
            if (f instanceof Mb && d === f.wa) {
              c = e;
              break a;
            }
            e += 2;
          }
        }
      } else {
        if (null == b) {
          a: {
            for (c = a.length, d = 0;;) {
              if (c <= d) {
                c = -1;
                break a;
              }
              if (null == a[d]) {
                c = d;
                break a;
              }
              d += 2;
            }
          }
        } else {
          a: {
            for (c = a.length, d = 0;;) {
              if (c <= d) {
                c = -1;
                break a;
              }
              if (O.a(b, a[d])) {
                c = d;
                break a;
              }
              d += 2;
            }
          }
        }
      }
    }
  }
  return c;
}
function je(a, b, c) {
  this.c = a;
  this.i = b;
  this.U = c;
  this.r = 0;
  this.g = 32374990;
}
h = je.prototype;
h.toString = function() {
  return Bb(this);
};
h.equiv = function(a) {
  return this.m(null, a);
};
h.D = function() {
  return this.U;
};
h.Q = function() {
  return this.i < this.c.length - 2 ? new je(this.c, this.i + 2, this.U) : null;
};
h.O = function() {
  return(this.c.length - this.i) / 2;
};
h.v = function() {
  return Sb(this);
};
h.m = function(a, b) {
  return ec(this, b);
};
h.L = function(a, b) {
  return Cc(b, this);
};
h.M = function(a, b, c) {
  return Fc(b, c, this);
};
h.N = function() {
  return new X(null, 2, 5, Y, [this.c[this.i], this.c[this.i + 1]], null);
};
h.S = function() {
  return this.i < this.c.length - 2 ? new je(this.c, this.i + 2, this.U) : Nb;
};
h.H = function() {
  return this;
};
h.I = function(a, b) {
  return new je(this.c, this.i, b);
};
h.F = function(a, b) {
  return Q(b, this);
};
je.prototype[Aa] = function() {
  return Qb(this);
};
function ke(a, b, c) {
  this.c = a;
  this.i = b;
  this.f = c;
}
ke.prototype.Pa = function() {
  return this.i < this.f;
};
ke.prototype.next = function() {
  var a = new X(null, 2, 5, Y, [this.c[this.i], this.c[this.i + 1]], null);
  this.i += 2;
  return a;
};
function oa(a, b, c, d) {
  this.k = a;
  this.f = b;
  this.c = c;
  this.j = d;
  this.g = 16647951;
  this.r = 8196;
}
h = oa.prototype;
h.toString = function() {
  return Bb(this);
};
h.equiv = function(a) {
  return this.m(null, a);
};
h.keys = function() {
  return Qb(le.b ? le.b(this) : le.call(null, this));
};
h.entries = function() {
  return he(J(this));
};
h.values = function() {
  return Qb(me.b ? me.b(this) : me.call(null, this));
};
h.has = function(a) {
  return mc(this, a, zc) === zc ? !1 : !0;
};
h.get = function(a, b) {
  return this.A(null, a, b);
};
h.forEach = function(a) {
  for (var b = J(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.w(null, e), g = U(f, 0), f = U(f, 1);
      a.a ? a.a(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = J(b)) {
        vc(b) ? (c = tb(b), b = ub(b), g = c, d = T(c), c = g) : (c = L(b), g = U(c, 0), c = f = U(c, 1), a.a ? a.a(c, g) : a.call(null, c, g), b = N(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
h.K = function(a, b) {
  return Na.e(this, b, null);
};
h.A = function(a, b, c) {
  a = ie(this.c, b);
  return-1 === a ? c : this.c[a + 1];
};
h.Ga = function() {
  return new ke(this.c, 0, 2 * this.f);
};
h.D = function() {
  return this.k;
};
h.O = function() {
  return this.f;
};
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Ub(this);
};
h.m = function(a, b) {
  if (b && (b.g & 1024 || b.jb)) {
    var c = this.c.length;
    if (this.f === b.O(null)) {
      for (var d = 0;;) {
        if (d < c) {
          var e = b.A(null, this.c[d], zc);
          if (e !== zc) {
            if (O.a(this.c[d + 1], e)) {
              d += 2;
            } else {
              return!1;
            }
          } else {
            return!1;
          }
        } else {
          return!0;
        }
      }
    } else {
      return!1;
    }
  } else {
    return fe(this, b);
  }
};
h.Fa = function() {
  return new ne({}, this.c.length, Ba(this.c));
};
h.L = function(a, b) {
  return Cc(b, this);
};
h.M = function(a, b, c) {
  return Fc(b, c, this);
};
h.Ea = function(a, b, c) {
  a = ie(this.c, b);
  if (-1 === a) {
    if (this.f < oe) {
      a = this.c;
      for (var d = a.length, e = Array(d + 2), f = 0;;) {
        if (f < d) {
          e[f] = a[f], f += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new oa(this.k, this.f + 1, e, null);
    }
    return ab(Oa(Cd(oc, this), b, c), this.k);
  }
  if (c === this.c[a + 1]) {
    return this;
  }
  b = Ba(this.c);
  b[a + 1] = c;
  return new oa(this.k, this.f, b, null);
};
h.H = function() {
  var a = this.c;
  return 0 <= a.length - 2 ? new je(a, 0, null) : null;
};
h.I = function(a, b) {
  return new oa(b, this.f, this.c, this.j);
};
h.F = function(a, b) {
  if (uc(b)) {
    return Oa(this, B.a(b, 0), B.a(b, 1));
  }
  for (var c = this, d = J(b);;) {
    if (null == d) {
      return c;
    }
    var e = L(d);
    if (uc(e)) {
      c = Oa(c, B.a(e, 0), B.a(e, 1)), d = N(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.A(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.K(null, c);
  };
  a.e = function(a, c, d) {
    return this.A(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ba(b)));
};
h.b = function(a) {
  return this.K(null, a);
};
h.a = function(a, b) {
  return this.A(null, a, b);
};
var oe = 8;
oa.prototype[Aa] = function() {
  return Qb(this);
};
function ne(a, b, c) {
  this.Ba = a;
  this.Da = b;
  this.c = c;
  this.r = 56;
  this.g = 258;
}
h = ne.prototype;
h.Ha = function(a, b, c) {
  if (v(this.Ba)) {
    a = ie(this.c, b);
    if (-1 === a) {
      if (this.Da + 2 <= 2 * oe) {
        return this.Da += 2, this.c.push(b), this.c.push(c), this;
      }
      a = this.Da;
      var d = this.c;
      a = pe.a ? pe.a(a, d) : pe.call(null, a, d);
      return qb(a, b, c);
    }
    c !== this.c[a + 1] && (this.c[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
h.Na = function(a, b) {
  if (v(this.Ba)) {
    if (b ? b.g & 2048 || b.kb || (b.g ? 0 : x(Ra, b)) : x(Ra, b)) {
      return qb(this, qe.b ? qe.b(b) : qe.call(null, b), re.b ? re.b(b) : re.call(null, b));
    }
    for (var c = J(b), d = this;;) {
      var e = L(c);
      if (v(e)) {
        var f = e, c = N(c), d = qb(d, function() {
          var a = f;
          return qe.b ? qe.b(a) : qe.call(null, a);
        }(), function() {
          var a = f;
          return re.b ? re.b(a) : re.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
h.Oa = function() {
  if (v(this.Ba)) {
    return this.Ba = !1, new oa(null, Nc(this.Da), this.c, null);
  }
  throw Error("persistent! called twice");
};
h.K = function(a, b) {
  return Na.e(this, b, null);
};
h.A = function(a, b, c) {
  if (v(this.Ba)) {
    return a = ie(this.c, b), -1 === a ? c : this.c[a + 1];
  }
  throw Error("lookup after persistent!");
};
h.O = function() {
  if (v(this.Ba)) {
    return Nc(this.Da);
  }
  throw Error("count after persistent!");
};
function pe(a, b) {
  for (var c = nb(oc), d = 0;;) {
    if (d < a) {
      c = qb(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function se() {
  this.ba = !1;
}
function te(a, b) {
  return a === b ? !0 : a === b || a instanceof V && b instanceof V && a.ua === b.ua ? !0 : O.a(a, b);
}
function ue(a, b, c) {
  a = Ba(a);
  a[b] = c;
  return a;
}
function we(a, b, c, d) {
  a = a.ya(b);
  a.c[c] = d;
  return a;
}
function xe(a, b, c) {
  this.s = a;
  this.B = b;
  this.c = c;
}
h = xe.prototype;
h.ya = function(a) {
  if (a === this.s) {
    return this;
  }
  var b = Oc(this.B), c = Array(0 > b ? 4 : 2 * (b + 1));
  yc(this.c, 0, c, 0, 2 * b);
  return new xe(a, this.B, c);
};
h.Ia = function() {
  var a = this.c;
  return ye ? ye(a) : ze.call(null, a);
};
h.za = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.B & e)) {
    return d;
  }
  var f = Oc(this.B & e - 1), e = this.c[2 * f], f = this.c[2 * f + 1];
  return null == e ? f.za(a + 5, b, c, d) : te(c, e) ? f : d;
};
h.$ = function(a, b, c, d, e, f) {
  var g = 1 << (c >>> b & 31), k = Oc(this.B & g - 1);
  if (0 === (this.B & g)) {
    var l = Oc(this.B);
    if (2 * l < this.c.length) {
      a = this.ya(a);
      b = a.c;
      f.ba = !0;
      a: {
        for (c = 2 * (l - k), f = 2 * k + (c - 1), l = 2 * (k + 1) + (c - 1);;) {
          if (0 === c) {
            break a;
          }
          b[l] = b[f];
          --l;
          --c;
          --f;
        }
      }
      b[2 * k] = d;
      b[2 * k + 1] = e;
      a.B |= g;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = Ae.$(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.B >>> d & 1) && (k[d] = null != this.c[e] ? Ae.$(a, b + 5, Kb(this.c[e]), this.c[e], this.c[e + 1], f) : this.c[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new Be(a, l + 1, k);
    }
    b = Array(2 * (l + 4));
    yc(this.c, 0, b, 0, 2 * k);
    b[2 * k] = d;
    b[2 * k + 1] = e;
    yc(this.c, 2 * k, b, 2 * (k + 1), 2 * (l - k));
    f.ba = !0;
    a = this.ya(a);
    a.c = b;
    a.B |= g;
    return a;
  }
  l = this.c[2 * k];
  g = this.c[2 * k + 1];
  if (null == l) {
    return l = g.$(a, b + 5, c, d, e, f), l === g ? this : we(this, a, 2 * k + 1, l);
  }
  if (te(d, l)) {
    return e === g ? this : we(this, a, 2 * k + 1, e);
  }
  f.ba = !0;
  f = b + 5;
  d = Ce ? Ce(a, f, l, g, c, d, e) : De.call(null, a, f, l, g, c, d, e);
  e = 2 * k;
  k = 2 * k + 1;
  a = this.ya(a);
  a.c[e] = null;
  a.c[k] = d;
  return a;
};
h.Z = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), g = Oc(this.B & f - 1);
  if (0 === (this.B & f)) {
    var k = Oc(this.B);
    if (16 <= k) {
      g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      g[b >>> a & 31] = Ae.Z(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.B >>> c & 1) && (g[c] = null != this.c[d] ? Ae.Z(a + 5, Kb(this.c[d]), this.c[d], this.c[d + 1], e) : this.c[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new Be(null, k + 1, g);
    }
    a = Array(2 * (k + 1));
    yc(this.c, 0, a, 0, 2 * g);
    a[2 * g] = c;
    a[2 * g + 1] = d;
    yc(this.c, 2 * g, a, 2 * (g + 1), 2 * (k - g));
    e.ba = !0;
    return new xe(null, this.B | f, a);
  }
  var l = this.c[2 * g], f = this.c[2 * g + 1];
  if (null == l) {
    return k = f.Z(a + 5, b, c, d, e), k === f ? this : new xe(null, this.B, ue(this.c, 2 * g + 1, k));
  }
  if (te(c, l)) {
    return d === f ? this : new xe(null, this.B, ue(this.c, 2 * g + 1, d));
  }
  e.ba = !0;
  e = this.B;
  k = this.c;
  a += 5;
  a = Ee ? Ee(a, l, f, b, c, d) : De.call(null, a, l, f, b, c, d);
  c = 2 * g;
  g = 2 * g + 1;
  d = Ba(k);
  d[c] = null;
  d[g] = a;
  return new xe(null, e, d);
};
var Ae = new xe(null, 0, []);
function Be(a, b, c) {
  this.s = a;
  this.f = b;
  this.c = c;
}
h = Be.prototype;
h.ya = function(a) {
  return a === this.s ? this : new Be(a, this.f, Ba(this.c));
};
h.Ia = function() {
  var a = this.c;
  return Fe ? Fe(a) : Ge.call(null, a);
};
h.za = function(a, b, c, d) {
  var e = this.c[b >>> a & 31];
  return null != e ? e.za(a + 5, b, c, d) : d;
};
h.$ = function(a, b, c, d, e, f) {
  var g = c >>> b & 31, k = this.c[g];
  if (null == k) {
    return a = we(this, a, g, Ae.$(a, b + 5, c, d, e, f)), a.f += 1, a;
  }
  b = k.$(a, b + 5, c, d, e, f);
  return b === k ? this : we(this, a, g, b);
};
h.Z = function(a, b, c, d, e) {
  var f = b >>> a & 31, g = this.c[f];
  if (null == g) {
    return new Be(null, this.f + 1, ue(this.c, f, Ae.Z(a + 5, b, c, d, e)));
  }
  a = g.Z(a + 5, b, c, d, e);
  return a === g ? this : new Be(null, this.f, ue(this.c, f, a));
};
function He(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (te(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function Ie(a, b, c, d) {
  this.s = a;
  this.ta = b;
  this.f = c;
  this.c = d;
}
h = Ie.prototype;
h.ya = function(a) {
  if (a === this.s) {
    return this;
  }
  var b = Array(2 * (this.f + 1));
  yc(this.c, 0, b, 0, 2 * this.f);
  return new Ie(a, this.ta, this.f, b);
};
h.Ia = function() {
  var a = this.c;
  return ye ? ye(a) : ze.call(null, a);
};
h.za = function(a, b, c, d) {
  a = He(this.c, this.f, c);
  return 0 > a ? d : te(c, this.c[a]) ? this.c[a + 1] : d;
};
h.$ = function(a, b, c, d, e, f) {
  if (c === this.ta) {
    b = He(this.c, this.f, d);
    if (-1 === b) {
      if (this.c.length > 2 * this.f) {
        return b = 2 * this.f, c = 2 * this.f + 1, a = this.ya(a), a.c[b] = d, a.c[c] = e, f.ba = !0, a.f += 1, a;
      }
      c = this.c.length;
      b = Array(c + 2);
      yc(this.c, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.ba = !0;
      d = this.f + 1;
      a === this.s ? (this.c = b, this.f = d, a = this) : a = new Ie(this.s, this.ta, d, b);
      return a;
    }
    return this.c[b + 1] === e ? this : we(this, a, b + 1, e);
  }
  return(new xe(a, 1 << (this.ta >>> b & 31), [null, this, null, null])).$(a, b, c, d, e, f);
};
h.Z = function(a, b, c, d, e) {
  return b === this.ta ? (a = He(this.c, this.f, c), -1 === a ? (a = 2 * this.f, b = Array(a + 2), yc(this.c, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.ba = !0, new Ie(null, this.ta, this.f + 1, b)) : O.a(this.c[a], d) ? this : new Ie(null, this.ta, this.f, ue(this.c, a + 1, d))) : (new xe(null, 1 << (this.ta >>> a & 31), [null, this])).Z(a, b, c, d, e);
};
function De() {
  switch(arguments.length) {
    case 6:
      return Ee(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    case 7:
      return Ce(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function Ee(a, b, c, d, e, f) {
  var g = Kb(b);
  if (g === d) {
    return new Ie(null, g, 2, [b, c, e, f]);
  }
  var k = new se;
  return Ae.Z(a, g, b, c, k).Z(a, d, e, f, k);
}
function Ce(a, b, c, d, e, f, g) {
  var k = Kb(c);
  if (k === e) {
    return new Ie(null, k, 2, [c, d, f, g]);
  }
  var l = new se;
  return Ae.$(a, b, k, c, d, l).$(a, b, e, f, g, l);
}
function Je(a, b, c, d, e) {
  this.k = a;
  this.va = b;
  this.i = c;
  this.q = d;
  this.j = e;
  this.r = 0;
  this.g = 32374860;
}
h = Je.prototype;
h.toString = function() {
  return Bb(this);
};
h.equiv = function(a) {
  return this.m(null, a);
};
h.D = function() {
  return this.k;
};
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Sb(this);
};
h.m = function(a, b) {
  return ec(this, b);
};
h.L = function(a, b) {
  return Cc(b, this);
};
h.M = function(a, b, c) {
  return Fc(b, c, this);
};
h.N = function() {
  return null == this.q ? new X(null, 2, 5, Y, [this.va[this.i], this.va[this.i + 1]], null) : L(this.q);
};
h.S = function() {
  if (null == this.q) {
    var a = this.va, b = this.i + 2;
    return Ke ? Ke(a, b, null) : ze.call(null, a, b, null);
  }
  var a = this.va, b = this.i, c = N(this.q);
  return Ke ? Ke(a, b, c) : ze.call(null, a, b, c);
};
h.H = function() {
  return this;
};
h.I = function(a, b) {
  return new Je(b, this.va, this.i, this.q, this.j);
};
h.F = function(a, b) {
  return Q(b, this);
};
Je.prototype[Aa] = function() {
  return Qb(this);
};
function ze() {
  switch(arguments.length) {
    case 1:
      return ye(arguments[0]);
    case 3:
      return Ke(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function ye(a) {
  return Ke(a, 0, null);
}
function Ke(a, b, c) {
  if (null == c) {
    for (c = a.length;;) {
      if (b < c) {
        if (null != a[b]) {
          return new Je(null, a, b, null, null);
        }
        var d = a[b + 1];
        if (v(d) && (d = d.Ia(), v(d))) {
          return new Je(null, a, b + 2, d, null);
        }
        b += 2;
      } else {
        return null;
      }
    }
  } else {
    return new Je(null, a, b, c, null);
  }
}
function Le(a, b, c, d, e) {
  this.k = a;
  this.va = b;
  this.i = c;
  this.q = d;
  this.j = e;
  this.r = 0;
  this.g = 32374860;
}
h = Le.prototype;
h.toString = function() {
  return Bb(this);
};
h.equiv = function(a) {
  return this.m(null, a);
};
h.D = function() {
  return this.k;
};
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Sb(this);
};
h.m = function(a, b) {
  return ec(this, b);
};
h.L = function(a, b) {
  return Cc(b, this);
};
h.M = function(a, b, c) {
  return Fc(b, c, this);
};
h.N = function() {
  return L(this.q);
};
h.S = function() {
  var a = this.va, b = this.i, c = N(this.q);
  return Me ? Me(null, a, b, c) : Ge.call(null, null, a, b, c);
};
h.H = function() {
  return this;
};
h.I = function(a, b) {
  return new Le(b, this.va, this.i, this.q, this.j);
};
h.F = function(a, b) {
  return Q(b, this);
};
Le.prototype[Aa] = function() {
  return Qb(this);
};
function Ge() {
  switch(arguments.length) {
    case 1:
      return Fe(arguments[0]);
    case 4:
      return Me(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function Fe(a) {
  return Me(null, a, 0, null);
}
function Me(a, b, c, d) {
  if (null == d) {
    for (d = b.length;;) {
      if (c < d) {
        var e = b[c];
        if (v(e) && (e = e.Ia(), v(e))) {
          return new Le(a, b, c + 1, e, null);
        }
        c += 1;
      } else {
        return null;
      }
    }
  } else {
    return new Le(a, b, c, d, null);
  }
}
function Ne(a, b, c, d, e, f) {
  this.k = a;
  this.f = b;
  this.root = c;
  this.V = d;
  this.X = e;
  this.j = f;
  this.g = 16123663;
  this.r = 8196;
}
h = Ne.prototype;
h.toString = function() {
  return Bb(this);
};
h.equiv = function(a) {
  return this.m(null, a);
};
h.keys = function() {
  return Qb(le.b ? le.b(this) : le.call(null, this));
};
h.entries = function() {
  return he(J(this));
};
h.values = function() {
  return Qb(me.b ? me.b(this) : me.call(null, this));
};
h.has = function(a) {
  return mc(this, a, zc) === zc ? !1 : !0;
};
h.get = function(a, b) {
  return this.A(null, a, b);
};
h.forEach = function(a) {
  for (var b = J(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.w(null, e), g = U(f, 0), f = U(f, 1);
      a.a ? a.a(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = J(b)) {
        vc(b) ? (c = tb(b), b = ub(b), g = c, d = T(c), c = g) : (c = L(b), g = U(c, 0), c = f = U(c, 1), a.a ? a.a(c, g) : a.call(null, c, g), b = N(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
h.K = function(a, b) {
  return Na.e(this, b, null);
};
h.A = function(a, b, c) {
  return null == b ? this.V ? this.X : c : null == this.root ? c : this.root.za(0, Kb(b), b, c);
};
h.D = function() {
  return this.k;
};
h.O = function() {
  return this.f;
};
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Ub(this);
};
h.m = function(a, b) {
  return fe(this, b);
};
h.Fa = function() {
  return new Oe({}, this.root, this.f, this.V, this.X);
};
h.Ea = function(a, b, c) {
  if (null == b) {
    return this.V && c === this.X ? this : new Ne(this.k, this.V ? this.f : this.f + 1, this.root, !0, c, null);
  }
  a = new se;
  b = (null == this.root ? Ae : this.root).Z(0, Kb(b), b, c, a);
  return b === this.root ? this : new Ne(this.k, a.ba ? this.f + 1 : this.f, b, this.V, this.X, null);
};
h.H = function() {
  if (0 < this.f) {
    var a = null != this.root ? this.root.Ia() : null;
    return this.V ? Q(new X(null, 2, 5, Y, [null, this.X], null), a) : a;
  }
  return null;
};
h.I = function(a, b) {
  return new Ne(b, this.f, this.root, this.V, this.X, this.j);
};
h.F = function(a, b) {
  if (uc(b)) {
    return Oa(this, B.a(b, 0), B.a(b, 1));
  }
  for (var c = this, d = J(b);;) {
    if (null == d) {
      return c;
    }
    var e = L(d);
    if (uc(e)) {
      c = Oa(c, B.a(e, 0), B.a(e, 1)), d = N(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.A(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.K(null, c);
  };
  a.e = function(a, c, d) {
    return this.A(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ba(b)));
};
h.b = function(a) {
  return this.K(null, a);
};
h.a = function(a, b) {
  return this.A(null, a, b);
};
var oc = new Ne(null, 0, null, !1, null, Vb);
Ne.prototype[Aa] = function() {
  return Qb(this);
};
function Oe(a, b, c, d, e) {
  this.s = a;
  this.root = b;
  this.count = c;
  this.V = d;
  this.X = e;
  this.r = 56;
  this.g = 258;
}
h = Oe.prototype;
h.Ha = function(a, b, c) {
  return Pe(this, b, c);
};
h.Na = function(a, b) {
  return Qe(this, b);
};
h.Oa = function() {
  var a;
  if (this.s) {
    this.s = null, a = new Ne(null, this.count, this.root, this.V, this.X, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
h.K = function(a, b) {
  return null == b ? this.V ? this.X : null : null == this.root ? null : this.root.za(0, Kb(b), b);
};
h.A = function(a, b, c) {
  return null == b ? this.V ? this.X : c : null == this.root ? c : this.root.za(0, Kb(b), b, c);
};
h.O = function() {
  if (this.s) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function Qe(a, b) {
  if (a.s) {
    if (b ? b.g & 2048 || b.kb || (b.g ? 0 : x(Ra, b)) : x(Ra, b)) {
      return Pe(a, qe.b ? qe.b(b) : qe.call(null, b), re.b ? re.b(b) : re.call(null, b));
    }
    for (var c = J(b), d = a;;) {
      var e = L(c);
      if (v(e)) {
        var f = e, c = N(c), d = Pe(d, function() {
          var a = f;
          return qe.b ? qe.b(a) : qe.call(null, a);
        }(), function() {
          var a = f;
          return re.b ? re.b(a) : re.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent");
  }
}
function Pe(a, b, c) {
  if (a.s) {
    if (null == b) {
      a.X !== c && (a.X = c), a.V || (a.count += 1, a.V = !0);
    } else {
      var d = new se;
      b = (null == a.root ? Ae : a.root).$(a.s, 0, Kb(b), b, c, d);
      b !== a.root && (a.root = b);
      d.ba && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
var td = function td() {
  return td.h(0 < arguments.length ? new K(Array.prototype.slice.call(arguments, 0), 0) : null);
};
td.h = function(a) {
  for (var b = J(a), c = nb(oc);;) {
    if (b) {
      a = N(N(b));
      var d = L(b), b = hc(b), c = qb(c, d, b), b = a;
    } else {
      return pb(c);
    }
  }
};
td.o = 0;
td.n = function(a) {
  return td.h(J(a));
};
function Re(a, b) {
  this.P = a;
  this.U = b;
  this.r = 0;
  this.g = 32374988;
}
h = Re.prototype;
h.toString = function() {
  return Bb(this);
};
h.equiv = function(a) {
  return this.m(null, a);
};
h.D = function() {
  return this.U;
};
h.Q = function() {
  var a = this.P, a = (a ? a.g & 128 || a.La || (a.g ? 0 : x(La, a)) : x(La, a)) ? this.P.Q(null) : N(this.P);
  return null == a ? null : new Re(a, this.U);
};
h.v = function() {
  return Sb(this);
};
h.m = function(a, b) {
  return ec(this, b);
};
h.L = function(a, b) {
  return Cc(b, this);
};
h.M = function(a, b, c) {
  return Fc(b, c, this);
};
h.N = function() {
  return this.P.N(null).Va();
};
h.S = function() {
  var a = this.P, a = (a ? a.g & 128 || a.La || (a.g ? 0 : x(La, a)) : x(La, a)) ? this.P.Q(null) : N(this.P);
  return null != a ? new Re(a, this.U) : Nb;
};
h.H = function() {
  return this;
};
h.I = function(a, b) {
  return new Re(this.P, b);
};
h.F = function(a, b) {
  return Q(b, this);
};
Re.prototype[Aa] = function() {
  return Qb(this);
};
function le(a) {
  return(a = J(a)) ? new Re(a, null) : null;
}
function qe(a) {
  return Sa(a);
}
function Se(a, b) {
  this.P = a;
  this.U = b;
  this.r = 0;
  this.g = 32374988;
}
h = Se.prototype;
h.toString = function() {
  return Bb(this);
};
h.equiv = function(a) {
  return this.m(null, a);
};
h.D = function() {
  return this.U;
};
h.Q = function() {
  var a = this.P, a = (a ? a.g & 128 || a.La || (a.g ? 0 : x(La, a)) : x(La, a)) ? this.P.Q(null) : N(this.P);
  return null == a ? null : new Se(a, this.U);
};
h.v = function() {
  return Sb(this);
};
h.m = function(a, b) {
  return ec(this, b);
};
h.L = function(a, b) {
  return Cc(b, this);
};
h.M = function(a, b, c) {
  return Fc(b, c, this);
};
h.N = function() {
  return this.P.N(null).Wa();
};
h.S = function() {
  var a = this.P, a = (a ? a.g & 128 || a.La || (a.g ? 0 : x(La, a)) : x(La, a)) ? this.P.Q(null) : N(this.P);
  return null != a ? new Se(a, this.U) : Nb;
};
h.H = function() {
  return this;
};
h.I = function(a, b) {
  return new Se(this.P, b);
};
h.F = function(a, b) {
  return Q(b, this);
};
Se.prototype[Aa] = function() {
  return Qb(this);
};
function me(a) {
  return(a = J(a)) ? new Se(a, null) : null;
}
function re(a) {
  return Ta(a);
}
function Vc(a) {
  if (a && (a.r & 4096 || a.mb)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([A("Doesn't support name: "), A(a)].join(""));
}
var Te = function Te() {
  switch(arguments.length) {
    case 2:
      return Te.a(arguments[0], arguments[1]);
    case 3:
      return Te.e(arguments[0], arguments[1], arguments[2]);
    default:
      return Te.h(arguments[0], arguments[1], arguments[2], new K(Array.prototype.slice.call(arguments, 3), 0));
  }
};
Te.a = function(a, b) {
  return b;
};
Te.e = function(a, b, c) {
  return(a.b ? a.b(b) : a.call(null, b)) > (a.b ? a.b(c) : a.call(null, c)) ? b : c;
};
Te.h = function(a, b, c, d) {
  return Dc(function(b, c) {
    return Te.e(a, b, c);
  }, Te.e(a, b, c), d);
};
Te.n = function(a) {
  var b = L(a), c = N(a);
  a = L(c);
  var d = N(c), c = L(d), d = N(d);
  return Te.h(b, a, c, d);
};
Te.o = 3;
function Ue(a, b, c) {
  this.i = a;
  this.end = b;
  this.step = c;
}
Ue.prototype.Pa = function() {
  return 0 < this.step ? this.i < this.end : this.i > this.end;
};
Ue.prototype.next = function() {
  var a = this.i;
  this.i += this.step;
  return a;
};
function Ve(a, b, c, d, e) {
  this.k = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.j = e;
  this.g = 32375006;
  this.r = 8192;
}
h = Ve.prototype;
h.toString = function() {
  return Bb(this);
};
h.equiv = function(a) {
  return this.m(null, a);
};
h.w = function(a, b) {
  if (b < Fa(this)) {
    return this.start + b * this.step;
  }
  if (this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
h.T = function(a, b, c) {
  return b < Fa(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c;
};
h.Ga = function() {
  return new Ue(this.start, this.end, this.step);
};
h.D = function() {
  return this.k;
};
h.Q = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new Ve(this.k, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new Ve(this.k, this.start + this.step, this.end, this.step, null) : null;
};
h.O = function() {
  if (wa(hb(this))) {
    return 0;
  }
  var a = (this.end - this.start) / this.step;
  return Math.ceil.b ? Math.ceil.b(a) : Math.ceil.call(null, a);
};
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Sb(this);
};
h.m = function(a, b) {
  return ec(this, b);
};
h.L = function(a, b) {
  return Xb(this, b);
};
h.M = function(a, b, c) {
  for (a = this.start;;) {
    if (0 < this.step ? a < this.end : a > this.end) {
      var d = a;
      c = b.a ? b.a(c, d) : b.call(null, c, d);
      a += this.step;
    } else {
      return c;
    }
  }
};
h.N = function() {
  return null == hb(this) ? null : this.start;
};
h.S = function() {
  return null != hb(this) ? new Ve(this.k, this.start + this.step, this.end, this.step, null) : Nb;
};
h.H = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
h.I = function(a, b) {
  return new Ve(b, this.start, this.end, this.step, this.j);
};
h.F = function(a, b) {
  return Q(b, this);
};
Ve.prototype[Aa] = function() {
  return Qb(this);
};
function We(a) {
  return new Ve(null, 0, a, 1, null);
}
var Xe = function Xe() {
  switch(arguments.length) {
    case 1:
      return Xe.b(arguments[0]);
    case 2:
      return Xe.a(arguments[0], arguments[1]);
    case 3:
      return Xe.e(arguments[0], arguments[1], arguments[2]);
    default:
      return Xe.h(arguments[0], arguments[1], arguments[2], new K(Array.prototype.slice.call(arguments, 3), 0));
  }
};
Xe.b = function(a) {
  return function() {
    function b(b, c, d) {
      return new X(null, 1, 5, Y, [a.e ? a.e(b, c, d) : a.call(null, b, c, d)], null);
    }
    function c(b, c) {
      return new X(null, 1, 5, Y, [a.a ? a.a(b, c) : a.call(null, b, c)], null);
    }
    function d(b) {
      return new X(null, 1, 5, Y, [a.b ? a.b(b) : a.call(null, b)], null);
    }
    function e() {
      return new X(null, 1, 5, Y, [a.l ? a.l() : a.call(null)], null);
    }
    var f = null, g = function() {
      function b(a, d, e, f) {
        var g = null;
        if (3 < arguments.length) {
          for (var g = 0, k = Array(arguments.length - 3);g < k.length;) {
            k[g] = arguments[g + 3], ++g;
          }
          g = new K(k, 0);
        }
        return c.call(this, a, d, e, g);
      }
      function c(b, d, e, f) {
        return new X(null, 1, 5, Y, [ld(a, b, d, e, f)], null);
      }
      b.o = 3;
      b.n = function(a) {
        var b = L(a);
        a = N(a);
        var d = L(a);
        a = N(a);
        var e = L(a);
        a = M(a);
        return c(b, d, e, a);
      };
      b.h = c;
      return b;
    }(), f = function(a, f, m, n) {
      switch(arguments.length) {
        case 0:
          return e.call(this);
        case 1:
          return d.call(this, a);
        case 2:
          return c.call(this, a, f);
        case 3:
          return b.call(this, a, f, m);
        default:
          var p = null;
          if (3 < arguments.length) {
            for (var p = 0, q = Array(arguments.length - 3);p < q.length;) {
              q[p] = arguments[p + 3], ++p;
            }
            p = new K(q, 0);
          }
          return g.h(a, f, m, p);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    f.o = 3;
    f.n = g.n;
    f.l = e;
    f.b = d;
    f.a = c;
    f.e = b;
    f.h = g.h;
    return f;
  }();
};
Xe.a = function(a, b) {
  return function() {
    function c(c, d, e) {
      return new X(null, 2, 5, Y, [a.e ? a.e(c, d, e) : a.call(null, c, d, e), b.e ? b.e(c, d, e) : b.call(null, c, d, e)], null);
    }
    function d(c, d) {
      return new X(null, 2, 5, Y, [a.a ? a.a(c, d) : a.call(null, c, d), b.a ? b.a(c, d) : b.call(null, c, d)], null);
    }
    function e(c) {
      return new X(null, 2, 5, Y, [a.b ? a.b(c) : a.call(null, c), b.b ? b.b(c) : b.call(null, c)], null);
    }
    function f() {
      return new X(null, 2, 5, Y, [a.l ? a.l() : a.call(null), b.l ? b.l() : b.call(null)], null);
    }
    var g = null, k = function() {
      function c(a, b, e, f) {
        var g = null;
        if (3 < arguments.length) {
          for (var g = 0, k = Array(arguments.length - 3);g < k.length;) {
            k[g] = arguments[g + 3], ++g;
          }
          g = new K(k, 0);
        }
        return d.call(this, a, b, e, g);
      }
      function d(c, e, f, g) {
        return new X(null, 2, 5, Y, [ld(a, c, e, f, g), ld(b, c, e, f, g)], null);
      }
      c.o = 3;
      c.n = function(a) {
        var b = L(a);
        a = N(a);
        var c = L(a);
        a = N(a);
        var e = L(a);
        a = M(a);
        return d(b, c, e, a);
      };
      c.h = d;
      return c;
    }(), g = function(a, b, g, p) {
      switch(arguments.length) {
        case 0:
          return f.call(this);
        case 1:
          return e.call(this, a);
        case 2:
          return d.call(this, a, b);
        case 3:
          return c.call(this, a, b, g);
        default:
          var q = null;
          if (3 < arguments.length) {
            for (var q = 0, u = Array(arguments.length - 3);q < u.length;) {
              u[q] = arguments[q + 3], ++q;
            }
            q = new K(u, 0);
          }
          return k.h(a, b, g, q);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    g.o = 3;
    g.n = k.n;
    g.l = f;
    g.b = e;
    g.a = d;
    g.e = c;
    g.h = k.h;
    return g;
  }();
};
Xe.e = function(a, b, c) {
  return function() {
    function d(d, e, f) {
      return new X(null, 3, 5, Y, [a.e ? a.e(d, e, f) : a.call(null, d, e, f), b.e ? b.e(d, e, f) : b.call(null, d, e, f), c.e ? c.e(d, e, f) : c.call(null, d, e, f)], null);
    }
    function e(d, e) {
      return new X(null, 3, 5, Y, [a.a ? a.a(d, e) : a.call(null, d, e), b.a ? b.a(d, e) : b.call(null, d, e), c.a ? c.a(d, e) : c.call(null, d, e)], null);
    }
    function f(d) {
      return new X(null, 3, 5, Y, [a.b ? a.b(d) : a.call(null, d), b.b ? b.b(d) : b.call(null, d), c.b ? c.b(d) : c.call(null, d)], null);
    }
    function g() {
      return new X(null, 3, 5, Y, [a.l ? a.l() : a.call(null), b.l ? b.l() : b.call(null), c.l ? c.l() : c.call(null)], null);
    }
    var k = null, l = function() {
      function d(a, b, c, f) {
        var g = null;
        if (3 < arguments.length) {
          for (var g = 0, k = Array(arguments.length - 3);g < k.length;) {
            k[g] = arguments[g + 3], ++g;
          }
          g = new K(k, 0);
        }
        return e.call(this, a, b, c, g);
      }
      function e(d, f, g, k) {
        return new X(null, 3, 5, Y, [ld(a, d, f, g, k), ld(b, d, f, g, k), ld(c, d, f, g, k)], null);
      }
      d.o = 3;
      d.n = function(a) {
        var b = L(a);
        a = N(a);
        var c = L(a);
        a = N(a);
        var d = L(a);
        a = M(a);
        return e(b, c, d, a);
      };
      d.h = e;
      return d;
    }(), k = function(a, b, c, k) {
      switch(arguments.length) {
        case 0:
          return g.call(this);
        case 1:
          return f.call(this, a);
        case 2:
          return e.call(this, a, b);
        case 3:
          return d.call(this, a, b, c);
        default:
          var u = null;
          if (3 < arguments.length) {
            for (var u = 0, w = Array(arguments.length - 3);u < w.length;) {
              w[u] = arguments[u + 3], ++u;
            }
            u = new K(w, 0);
          }
          return l.h(a, b, c, u);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    k.o = 3;
    k.n = l.n;
    k.l = g;
    k.b = f;
    k.a = e;
    k.e = d;
    k.h = l.h;
    return k;
  }();
};
Xe.h = function(a, b, c, d) {
  return function(a) {
    return function() {
      function b(c, d, f) {
        return Dc(function() {
          return function(a, b) {
            return ic.a(a, b.e ? b.e(c, d, f) : b.call(null, c, d, f));
          };
        }(a), jc, a);
      }
      function c(b, d) {
        return Dc(function() {
          return function(a, c) {
            return ic.a(a, c.a ? c.a(b, d) : c.call(null, b, d));
          };
        }(a), jc, a);
      }
      function d(b) {
        return Dc(function() {
          return function(a, c) {
            return ic.a(a, c.b ? c.b(b) : c.call(null, b));
          };
        }(a), jc, a);
      }
      function l() {
        return Dc(function() {
          return function(a, b) {
            return ic.a(a, b.l ? b.l() : b.call(null));
          };
        }(a), jc, a);
      }
      var m = null, n = function() {
        function b(a, d, e, f) {
          var g = null;
          if (3 < arguments.length) {
            for (var g = 0, k = Array(arguments.length - 3);g < k.length;) {
              k[g] = arguments[g + 3], ++g;
            }
            g = new K(k, 0);
          }
          return c.call(this, a, d, e, g);
        }
        function c(b, d, f, g) {
          return Dc(function() {
            return function(a, c) {
              return ic.a(a, ld(c, b, d, f, g));
            };
          }(a), jc, a);
        }
        b.o = 3;
        b.n = function(a) {
          var b = L(a);
          a = N(a);
          var d = L(a);
          a = N(a);
          var e = L(a);
          a = M(a);
          return c(b, d, e, a);
        };
        b.h = c;
        return b;
      }(), m = function(a, e, m, w) {
        switch(arguments.length) {
          case 0:
            return l.call(this);
          case 1:
            return d.call(this, a);
          case 2:
            return c.call(this, a, e);
          case 3:
            return b.call(this, a, e, m);
          default:
            var t = null;
            if (3 < arguments.length) {
              for (var t = 0, C = Array(arguments.length - 3);t < C.length;) {
                C[t] = arguments[t + 3], ++t;
              }
              t = new K(C, 0);
            }
            return n.h(a, e, m, t);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      m.o = 3;
      m.n = n.n;
      m.l = l;
      m.b = d;
      m.a = c;
      m.e = b;
      m.h = n.h;
      return m;
    }();
  }(Q(a, Q(b, Q(c, d))));
};
Xe.n = function(a) {
  var b = L(a), c = N(a);
  a = L(c);
  var d = N(c), c = L(d), d = N(d);
  return Xe.h(b, a, c, d);
};
Xe.o = 3;
function Ye(a, b, c, d, e, f, g) {
  var k = ka;
  ka = null == ka ? null : ka - 1;
  try {
    if (null != ka && 0 > ka) {
      return I(a, "#");
    }
    I(a, c);
    if (0 === ua.b(f)) {
      J(g) && I(a, function() {
        var a = Ze.b(f);
        return v(a) ? a : "...";
      }());
    } else {
      if (J(g)) {
        var l = L(g);
        b.e ? b.e(l, a, f) : b.call(null, l, a, f);
      }
      for (var m = N(g), n = ua.b(f) - 1;;) {
        if (!m || null != n && 0 === n) {
          J(m) && 0 === n && (I(a, d), I(a, function() {
            var a = Ze.b(f);
            return v(a) ? a : "...";
          }()));
          break;
        } else {
          I(a, d);
          var p = L(m);
          c = a;
          g = f;
          b.e ? b.e(p, c, g) : b.call(null, p, c, g);
          var q = N(m);
          c = n - 1;
          m = q;
          n = c;
        }
      }
    }
    return I(a, e);
  } finally {
    ka = k;
  }
}
function $e(a, b) {
  for (var c = J(b), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.w(null, f);
      I(a, g);
      f += 1;
    } else {
      if (c = J(c)) {
        d = c, vc(d) ? (c = tb(d), e = ub(d), d = c, g = T(c), c = e, e = g) : (g = L(d), I(a, g), c = N(d), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
}
var af = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function bf(a) {
  return[A('"'), A(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return af[a];
  })), A('"')].join("");
}
function cf(a, b, c) {
  if (null == a) {
    return I(b, "nil");
  }
  if (void 0 === a) {
    return I(b, "#\x3cundefined\x3e");
  }
  if (v(function() {
    var b = lc(c, sa);
    return v(b) ? (b = a ? a.g & 131072 || a.lb ? !0 : a.g ? !1 : x(Ya, a) : x(Ya, a)) ? sc(a) : b : b;
  }())) {
    I(b, "^");
    var d = sc(a);
    Z.e ? Z.e(d, b, c) : Z.call(null, d, b, c);
    I(b, " ");
  }
  return null == a ? I(b, "nil") : a.ub ? a.Eb(a, b, c) : a && (a.g & 2147483648 || a.G) ? a.t(null, b, c) : (null == a ? null : a.constructor) === Boolean || "number" === typeof a ? I(b, "" + A(a)) : null != a && a.constructor === Object ? (I(b, "#js "), d = W.a(function(b) {
    return new X(null, 2, 5, Y, [Uc.b(b), a[b]], null);
  }, wc(a)), df.p ? df.p(d, Z, b, c) : df.call(null, d, Z, b, c)) : va(a) ? Ye(b, Z, "#js [", " ", "]", c, a) : v("string" == typeof a) ? v(qa.b(c)) ? I(b, bf(a)) : I(b, a) : pc(a) ? $e(b, gc(["#\x3c", "" + A(a), "\x3e"], 0)) : a instanceof Date ? (d = function(a, b) {
    for (var c = "" + A(a);;) {
      if (T(c) < b) {
        c = [A("0"), A(c)].join("");
      } else {
        return c;
      }
    }
  }, $e(b, gc(['#inst "', "" + A(a.getUTCFullYear()), "-", d(a.getUTCMonth() + 1, 2), "-", d(a.getUTCDate(), 2), "T", d(a.getUTCHours(), 2), ":", d(a.getUTCMinutes(), 2), ":", d(a.getUTCSeconds(), 2), ".", d(a.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : v(a instanceof RegExp) ? $e(b, gc(['#"', a.source, '"'], 0)) : (a ? a.g & 2147483648 || a.G || (a.g ? 0 : x(jb, a)) : x(jb, a)) ? kb(a, b, c) : $e(b, gc(["#\x3c", "" + A(a), "\x3e"], 0));
}
function Z(a, b, c) {
  var d = ef.b(c);
  return v(d) ? (c = nc.e(c, ff, cf), d.e ? d.e(a, b, c) : d.call(null, a, b, c)) : cf(a, b, c);
}
function gf(a) {
  var b = na();
  if (null == a || wa(J(a))) {
    b = "";
  } else {
    var c = A, d = new ha;
    a: {
      var e = new Ab(d);
      Z(L(a), e, b);
      a = J(N(a));
      for (var f = null, g = 0, k = 0;;) {
        if (k < g) {
          var l = f.w(null, k);
          I(e, " ");
          Z(l, e, b);
          k += 1;
        } else {
          if (a = J(a)) {
            f = a, vc(f) ? (a = tb(f), g = ub(f), f = a, l = T(a), a = g, g = l) : (l = L(f), I(e, " "), Z(l, e, b), a = N(f), f = null, g = 0), k = 0;
          } else {
            break a;
          }
        }
      }
    }
    b = "" + c(d);
  }
  return b;
}
function wd() {
  return gf(0 < arguments.length ? new K(Array.prototype.slice.call(arguments, 0), 0) : null);
}
function hf(a) {
  a = gf(a);
  ia.b ? ia.b(a) : ia.call(null);
  v(!0) && (a = na(), ia.b ? ia.b("\n") : ia.call(null), lc(a, pa));
}
function df(a, b, c, d) {
  return Ye(c, function(a, c, d) {
    var k = Sa(a);
    b.e ? b.e(k, c, d) : b.call(null, k, c, d);
    I(c, " ");
    a = Ta(a);
    return b.e ? b.e(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, J(a));
}
K.prototype.G = !0;
K.prototype.t = function(a, b, c) {
  return Ye(b, Z, "(", " ", ")", c, this);
};
Wc.prototype.G = !0;
Wc.prototype.t = function(a, b, c) {
  return Ye(b, Z, "(", " ", ")", c, this);
};
Je.prototype.G = !0;
Je.prototype.t = function(a, b, c) {
  return Ye(b, Z, "(", " ", ")", c, this);
};
je.prototype.G = !0;
je.prototype.t = function(a, b, c) {
  return Ye(b, Z, "(", " ", ")", c, this);
};
Wd.prototype.G = !0;
Wd.prototype.t = function(a, b, c) {
  return Ye(b, Z, "(", " ", ")", c, this);
};
Tc.prototype.G = !0;
Tc.prototype.t = function(a, b, c) {
  return Ye(b, Z, "(", " ", ")", c, this);
};
Ne.prototype.G = !0;
Ne.prototype.t = function(a, b, c) {
  return df(this, Z, b, c);
};
Le.prototype.G = !0;
Le.prototype.t = function(a, b, c) {
  return Ye(b, Z, "(", " ", ")", c, this);
};
$d.prototype.G = !0;
$d.prototype.t = function(a, b, c) {
  return Ye(b, Z, "[", " ", "]", c, this);
};
ad.prototype.G = !0;
ad.prototype.t = function(a, b, c) {
  return Ye(b, Z, "(", " ", ")", c, this);
};
qd.prototype.G = !0;
qd.prototype.t = function(a, b, c) {
  I(b, "#\x3cAtom: ");
  Z(this.state, b, c);
  return I(b, "\x3e");
};
Se.prototype.G = !0;
Se.prototype.t = function(a, b, c) {
  return Ye(b, Z, "(", " ", ")", c, this);
};
X.prototype.G = !0;
X.prototype.t = function(a, b, c) {
  return Ye(b, Z, "[", " ", "]", c, this);
};
Rc.prototype.G = !0;
Rc.prototype.t = function(a, b) {
  return I(b, "()");
};
oa.prototype.G = !0;
oa.prototype.t = function(a, b, c) {
  return df(this, Z, b, c);
};
Ve.prototype.G = !0;
Ve.prototype.t = function(a, b, c) {
  return Ye(b, Z, "(", " ", ")", c, this);
};
Re.prototype.G = !0;
Re.prototype.t = function(a, b, c) {
  return Ye(b, Z, "(", " ", ")", c, this);
};
Qc.prototype.G = !0;
Qc.prototype.t = function(a, b, c) {
  return Ye(b, Z, "(", " ", ")", c, this);
};
var sa = new V(null, "meta", "meta", 1499536964), ta = new V(null, "dup", "dup", 556298533), jf = new V(null, "else", "else", -1508377146), ud = new V(null, "validator", "validator", -1966190681), kf = new V(null, "time", "time", 1385887882), lf = new V(null, "state", "state", -1988618099), ff = new V(null, "fallback-impl", "fallback-impl", -1501286995), pa = new V(null, "flush-on-newline", "flush-on-newline", -151457939), mf = new V(null, "theta", "theta", -427510258), qa = new V(null, "readably", 
"readably", 1129599760), Ze = new V(null, "more-marker", "more-marker", -14717935), nf = new V(null, "c", "c", -1763192079), ua = new V(null, "print-length", "print-length", 1931866356), of = new V(null, "b", "b", 1482224470), pf = new V(null, "thrust", "thrust", 651754168), ef = new V(null, "alt-impl", "alt-impl", 670969595), qf = new V(null, "a", "a", -2123407586);
var rf = new X(null, 4, 5, Y, [new X(null, 4, 5, Y, [1, 2.4, 3.2, 4], null), new X(null, 4, 5, Y, [.5, 1.2, 5.4, .3], null), new X(null, 4, 5, Y, [.4, 2, .4, 5.4], null), new X(null, 4, 5, Y, [.4, 3.2, 1.2, 5.6], null)], null), sf = new X(null, 4, 5, Y, [new X(null, 2, 5, Y, [1.1, 2.1], null), new X(null, 2, 5, Y, [9.4, 4.3], null), new X(null, 2, 5, Y, [1.2, 5.6], null), new X(null, 2, 5, Y, [6.4, 1.4], null)], null);
function uf(a, b) {
  Vd(function() {
    return function d(e) {
      return new Wc(null, function() {
        for (;;) {
          var f = J(e);
          if (f) {
            var g = f;
            if (vc(g)) {
              var k = tb(g), l = T(k), m = $c(l);
              return function() {
                for (var d = 0;;) {
                  if (d < l) {
                    var e = B.a(k, d);
                    dd(m, Vd(function() {
                      return function(d, e, f, g, k, l, m) {
                        return function R(n) {
                          return new Wc(null, function(d, e, f, g, k, l, m) {
                            return function() {
                              for (;;) {
                                var p = J(n);
                                if (p) {
                                  var q = p;
                                  if (vc(q)) {
                                    var u = tb(q), t = T(u), w = $c(t);
                                    return function() {
                                      for (var n = 0;;) {
                                        if (n < t) {
                                          var y = B.a(u, n);
                                          dd(w, Gc(Ic, W.e(Kc, W.a(function(a, b, d) {
                                            return function(a) {
                                              return a.b ? a.b(d) : a.call(null, d);
                                            };
                                          }(n, d, y, u, t, w, q, p, e, f, g, k, l, m), b), a.b ? a.b(e) : a.call(null, e))));
                                          n += 1;
                                        } else {
                                          return!0;
                                        }
                                      }
                                    }() ? bd(w.u(), R(ub(q))) : bd(w.u(), null);
                                  }
                                  var D = L(q);
                                  return Q(Gc(Ic, W.e(Kc, W.a(function(a, b) {
                                    return function(a) {
                                      return a.b ? a.b(b) : a.call(null, b);
                                    };
                                  }(d, D, q, p, e, f, g, k, l, m), b), a.b ? a.b(e) : a.call(null, e))), R(M(q)));
                                }
                                return null;
                              }
                            };
                          }(d, e, f, g, k, l, m), null, null);
                        };
                      }(d, e, k, l, m, g, f)(We(T(function() {
                        var a = e;
                        return b.b ? b.b(a) : b.call(null, a);
                      }())));
                    }()));
                    d += 1;
                  } else {
                    return!0;
                  }
                }
              }() ? bd(m.u(), d(ub(g))) : bd(m.u(), null);
            }
            var n = L(g);
            return Q(Vd(function() {
              return function(d, e, f) {
                return function t(g) {
                  return new Wc(null, function(d, e, f) {
                    return function() {
                      for (;;) {
                        var k = J(g);
                        if (k) {
                          var l = k;
                          if (vc(l)) {
                            var m = tb(l), n = T(m), p = $c(n);
                            return function() {
                              for (var g = 0;;) {
                                if (g < n) {
                                  var q = B.a(m, g);
                                  dd(p, Gc(Ic, W.e(Kc, W.a(function(a, b) {
                                    return function(a) {
                                      return a.b ? a.b(b) : a.call(null, b);
                                    };
                                  }(g, q, m, n, p, l, k, d, e, f), b), a.b ? a.b(d) : a.call(null, d))));
                                  g += 1;
                                } else {
                                  return!0;
                                }
                              }
                            }() ? bd(p.u(), t(ub(l))) : bd(p.u(), null);
                          }
                          var q = L(l);
                          return Q(Gc(Ic, W.e(Kc, W.a(function(a) {
                            return function(b) {
                              return b.b ? b.b(a) : b.call(null, a);
                            };
                          }(q, l, k, d, e, f), b), a.b ? a.b(d) : a.call(null, d))), t(M(l)));
                        }
                        return null;
                      }
                    };
                  }(d, e, f), null, null);
                };
              }(n, g, f)(We(T(function() {
                var a = n;
                return b.b ? b.b(a) : b.call(null, a);
              }())));
            }()), d(M(g)));
          }
          return null;
        }
      }, null, null);
    }(We(T(a)));
  }());
}
function vf(a) {
  Vd(function() {
    return function c(d) {
      return new Wc(null, function() {
        for (;;) {
          var e = J(d);
          if (e) {
            var f = e;
            if (vc(f)) {
              var g = tb(f), k = T(g), l = $c(k);
              return function() {
                for (var c = 0;;) {
                  if (c < k) {
                    var d = B.a(g, c);
                    dd(l, Vd(function() {
                      return function(c, d, e, f, g, k, l) {
                        return function S(m) {
                          return new Wc(null, function(c, d) {
                            return function() {
                              for (;;) {
                                var c = J(m);
                                if (c) {
                                  if (vc(c)) {
                                    var e = tb(c), f = T(e), g = $c(f);
                                    return function() {
                                      for (var c = 0;;) {
                                        if (c < f) {
                                          var k = B.a(e, c);
                                          dd(g, function() {
                                            var a = Dd(rf, new X(null, 2, 5, Y, [d, k], null));
                                            return v(a) ? a : 0;
                                          }() + function() {
                                            var c = Dd(a, new X(null, 2, 5, Y, [d, k], null));
                                            return v(c) ? c : 0;
                                          }());
                                          c += 1;
                                        } else {
                                          return!0;
                                        }
                                      }
                                    }() ? bd(g.u(), S(ub(c))) : bd(g.u(), null);
                                  }
                                  var k = L(c);
                                  return Q(function() {
                                    var a = Dd(rf, new X(null, 2, 5, Y, [d, k], null));
                                    return v(a) ? a : 0;
                                  }() + function() {
                                    var c = Dd(a, new X(null, 2, 5, Y, [d, k], null));
                                    return v(c) ? c : 0;
                                  }(), S(M(c)));
                                }
                                return null;
                              }
                            };
                          }(c, d, e, f, g, k, l), null, null);
                        };
                      }(c, d, g, k, l, f, e)(We(T(function() {
                        var a = d;
                        return rf.b ? rf.b(a) : rf.call(null, a);
                      }())));
                    }()));
                    c += 1;
                  } else {
                    return!0;
                  }
                }
              }() ? bd(l.u(), c(ub(f))) : bd(l.u(), null);
            }
            var m = L(f);
            return Q(Vd(function() {
              return function(c, d, e) {
                return function w(f) {
                  return new Wc(null, function(c) {
                    return function() {
                      for (;;) {
                        var d = J(f);
                        if (d) {
                          if (vc(d)) {
                            var e = tb(d), g = T(e), k = $c(g);
                            return function() {
                              for (var d = 0;;) {
                                if (d < g) {
                                  var f = B.a(e, d);
                                  dd(k, function() {
                                    var a = Dd(rf, new X(null, 2, 5, Y, [c, f], null));
                                    return v(a) ? a : 0;
                                  }() + function() {
                                    var d = Dd(a, new X(null, 2, 5, Y, [c, f], null));
                                    return v(d) ? d : 0;
                                  }());
                                  d += 1;
                                } else {
                                  return!0;
                                }
                              }
                            }() ? bd(k.u(), w(ub(d))) : bd(k.u(), null);
                          }
                          var l = L(d);
                          return Q(function() {
                            var a = Dd(rf, new X(null, 2, 5, Y, [c, l], null));
                            return v(a) ? a : 0;
                          }() + function() {
                            var d = Dd(a, new X(null, 2, 5, Y, [c, l], null));
                            return v(d) ? d : 0;
                          }(), w(M(d)));
                        }
                        return null;
                      }
                    };
                  }(c, d, e), null, null);
                };
              }(m, f, e)(We(T(function() {
                var a = m;
                return rf.b ? rf.b(a) : rf.call(null, a);
              }())));
            }()), c(M(f)));
          }
          return null;
        }
      }, null, null);
    }(We(T(rf)));
  }());
}
uf(rf, sf);
vf(rf);
vf(sf);
uf(new X(null, 1, 5, Y, [new X(null, 4, 5, Y, [0, 0, 0, 0], null)], null), new X(null, 4, 5, Y, [new X(null, 1, 5, Y, [0], null), new X(null, 1, 5, Y, [0], null), new X(null, 1, 5, Y, [0], null), new X(null, 1, 5, Y, [0], null)], null));
function wf(a, b, c, d, e, f) {
  var g = U(b, 0), k = Pc(b);
  b = W.a(function() {
    return function(a) {
      return c * Gc(Ic, W.e(Kc, d, a));
    };
  }(b, g, k), f);
  return jd(Xe, a).call(null, Cd(new X(null, 1, 5, Y, [g + c * e], null), W.e(Ic, k, b)));
}
function xf(a, b, c, d) {
  var e = U(b, 0), f = Pc(b);
  a = W.a(function() {
    return function(a) {
      return Gc(Ic, W.e(Kc, d, a));
    };
  }(b, e, f), a);
  return Cd(new X(null, 1, 5, Y, [e + c], null), W.e(function() {
    return function(a, b) {
      return a * c + b;
    };
  }(a, b, e, f), a, f));
}
function yf(a, b, c) {
  var d = zf, e = Ac(d) ? jd(td, d) : d, d = lc(e, of);
  a: {
    for (var e = Ac(e) ? jd(td, e) : e, f = lc(e, nf), g = lc(e, qf), e = T(a), e = yd(e, zd(jc));;) {
      if (wa(L(f))) {
        break a;
      }
      e = W.e(ic, e, wf(a, b, c, L(g), L(f), e));
      g = M(g);
      f = M(f);
    }
  }
  return xf(e, b, c, d);
}
;var zf = new oa(null, 3, [nf, new X(null, 4, 5, Y, [0, .5, .5, 1], null), qf, new X(null, 4, 5, Y, [jc, new X(null, 1, 5, Y, [.5], null), new X(null, 2, 5, Y, [0, .5], null), new X(null, 3, 5, Y, [0, 0, 1], null)], null), of, new X(null, 4, 5, Y, [1 / 6, 1 / 3, 1 / 3, 1 / 6], null)], null);
function Af(a, b, c, d, e, f) {
  a = new X(null, 3, 5, Y, [0, a, b], null);
  b = function() {
    return function(a) {
      U(a, 0);
      var b = U(a, 1);
      a = U(a, 2);
      return c * b - d * b * a;
    };
  }(.05, a);
  return yd(300, Bd(function(a, b, c, d) {
    return function(b) {
      return yf(new X(null, 2, 5, Y, [c, d], null), b, a);
    };
  }(.05, a, b, function() {
    return function(a) {
      U(a, 0);
      var b = U(a, 1);
      a = U(a, 2);
      return e * b * a - f * a;
    };
  }(.05, a, b)), a));
}
ba("numerics.canvasui.init", function(a) {
  return window.onload = v(function() {
    var a = document;
    return v(a) ? document.getElementById : a;
  }()) ? function() {
    for (var b = document.getElementById("prey-population-slider"), c = document.getElementById("predator-population-slider"), d = document.getElementById("reproduction-rate-slider"), e = document.getElementById("predation-rate-slider"), f = document.getElementById("growth-rate-slider"), g = document.getElementById("death-rate-slider"), k = function(b, c, d, e, f, g) {
      return function() {
        var k = Af(b.value / b.max * 3 + 1, c.value / c.max * 3 + 1, d.value / d.max * 3, e.value / e.max * 3, f.value / f.max * 3, g.value / g.max * 3), t = a.getContext("2d");
        t.fillStyle = "#000000";
        t.fillRect(0, 0, a.width, a.height);
        t.strokeStyle = "#333333";
        a: {
          for (var C = a.width, D = a.height, G = J(new Ve(null, 0, 10, 1, null)), E = null, S = 0, R = 0;;) {
            if (R < S) {
              var y = E.w(null, R);
              t.beginPath();
              t.moveTo(0, D / 10 * y);
              t.lineTo(C, D / 10 * y);
              t.moveTo(C / 10 * y, 0);
              t.lineTo(C / 10 * y, D);
              t.stroke();
              R += 1;
            } else {
              if (G = J(G)) {
                E = G, vc(E) ? (G = tb(E), S = ub(E), E = G, y = T(G), G = S, S = y) : (y = L(E), t.beginPath(), t.moveTo(0, D / 10 * y), t.lineTo(C, D / 10 * y), t.moveTo(C / 10 * y, 0), t.lineTo(C / 10 * y, D), t.stroke(), G = N(E), E = null, S = 0), R = 0;
              } else {
                break a;
              }
            }
          }
        }
        t.strokeStyle = "#00FF00";
        t.beginPath();
        a: {
          for (C = a.width, D = a.height, E = L(k), U(E, 0), G = U(E, 1), E = U(E, 2), t.moveTo(C * G / 10, D - D * E / 10), k = J(M(k)), E = null, S = y = 0;;) {
            if (S < y) {
              R = E.w(null, S), U(R, 0), G = U(R, 1), R = U(R, 2), t.lineTo(C * G / 10, D - D * R / 10), S += 1;
            } else {
              if (k = J(k)) {
                vc(k) ? (E = tb(k), k = ub(k), G = E, y = T(E), E = G) : (E = L(k), U(E, 0), G = U(E, 1), R = U(E, 2), t.lineTo(C * G / 10, D - D * R / 10), k = N(k), E = null, y = 0), S = 0;
              } else {
                break a;
              }
            }
          }
        }
        t.stroke();
        return t;
      };
    }(b, c, d, e, f, g), b = J(new X(null, 6, 5, Y, [b, c, d, e, f, g], null)), c = null, e = d = 0;;) {
      if (e < d) {
        c.w(null, e).oninput = k, e += 1;
      } else {
        if (b = J(b)) {
          c = b, vc(c) ? (b = tb(c), e = ub(c), c = b, d = T(b), b = e) : (L(c).oninput = k, b = N(c), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return k();
  }() : null;
});
var Bf, Cf = new oa(null, 2, [mf, 0, pf, 0], null);
Bf = sd ? sd(Cf) : rd.call(null, Cf);
function Df(a, b) {
  var c = Ac(b) ? jd(td, b) : b, d = lc(c, lf), e = a.width, f = a.height, g = a.getContext("2d");
  g.fillStyle = "000000";
  g.fillRect(0, 0, a.width, a.height);
  g = a.getContext("2d");
  g.fillStyle = "00FF00";
  g.strokeStyle = "FFFFFF";
  g.save();
  g.translate(0, f);
  g.scale(1, -1);
  g.scale(e / 200, f / 200);
  g.translate(100, -0);
  g.translate(d.b ? d.b(1) : d.call(null, 1), d.b ? d.b(2) : d.call(null, 2));
  c = Ac(c) ? jd(td, c) : c;
  lc(c, lf);
  g.save();
  g.rotate((P.b ? P.b(Bf) : P.call(null, Bf)).call(null, mf) * Math.PI / 180);
  g.strokeStyle = "FFFFFF";
  g.beginPath();
  g.moveTo(-3, -5);
  g.lineTo(0, 5);
  g.lineTo(3, -5);
  g.lineTo(-3, -5);
  g.stroke();
  c = Ac(c) ? jd(td, c) : c;
  lc(c, lf);
  0 < (P.b ? P.b(Bf) : P.call(null, Bf)).call(null, pf) && (g.strokeStyle = "FF0000", g.beginPath(), g.moveTo(-3, 5), g.lineTo(0, -5), g.lineTo(3, 5), g.lineTo(-3, 5), g.stroke());
  g.restore();
  g.save();
  g.scale(1, -1);
  g.fillText("" + A((P.b ? P.b(Bf) : P.call(null, Bf)).call(null, mf)), 0, 0);
  g.restore();
  g.restore();
  return g;
}
function Ef(a) {
  U(a, 0);
  U(a, 1);
  U(a, 2);
  var b = U(a, 3);
  U(a, 4);
  return b;
}
function Ff(a) {
  U(a, 0);
  U(a, 1);
  U(a, 2);
  U(a, 3);
  return U(a, 4);
}
function Gf(a) {
  U(a, 0);
  U(a, 1);
  U(a, 2);
  U(a, 3);
  U(a, 4);
  a = (P.b ? P.b(Bf) : P.call(null, Bf)).call(null, mf) * Math.PI / -180;
  return(Math.sin.b ? Math.sin.b(a) : Math.sin.call(null, a)) * (P.b ? P.b(Bf) : P.call(null, Bf)).call(null, pf);
}
function Hf(a) {
  U(a, 0);
  U(a, 1);
  U(a, 2);
  U(a, 3);
  U(a, 4);
  a = (P.b ? P.b(Bf) : P.call(null, Bf)).call(null, mf) * Math.PI / -180;
  return-9.81 + (Math.cos.b ? Math.cos.b(a) : Math.cos.call(null, a)) * (P.b ? P.b(Bf) : P.call(null, Bf)).call(null, pf);
}
ba("numerics.lunarlander.init", function(a) {
  return window.onload = function() {
    var b = function() {
      var a = new oa(null, 2, [lf, new X(null, 5, 5, Y, [0, 0, 200, 0, 0], null), kf, (new Date).getTime()], null);
      return sd ? sd(a) : rd.call(null, a);
    }();
    Df(a, P.b ? P.b(b) : P.call(null, b));
    setInterval(function(b) {
      return function() {
        var d = (new Date).getTime(), e = .001 * (d - (P.b ? P.b(b) : P.call(null, b)).call(null, kf)), e = yf(new X(null, 4, 5, Y, [Ef, Ff, Gf, Hf], null), (P.b ? P.b(b) : P.call(null, b)).call(null, lf), e), d = new oa(null, 2, [lf, e, kf, d], null);
        vd.a ? vd.a(b, d) : vd.call(null, b, d);
        return Df(a, P.b ? P.b(b) : P.call(null, b));
      };
    }(b), 1);
    document.onkeydown = function(a) {
      return function(b) {
        var e = b.keyCode;
        if (O.a(jf, e)) {
          return null;
        }
        if (O.a(32, e)) {
          return xd.p(Bf, nc, pf, 100);
        }
        if (O.a(100, e) || O.a(39, e)) {
          return xd.p(Bf, Ed, mf, function() {
            return function(a) {
              return((a - 10) % 360 + 360) % 360;
            };
          }(e, a));
        }
        if (O.a(97, e) || O.a(37, e)) {
          return xd.p(Bf, Ed, mf, function() {
            return function(a) {
              return((a + 10) % 360 + 360) % 360;
            };
          }(e, a));
        }
        throw Error([A("No matching clause: "), A(b.keyCode)].join(""));
      };
    }(b);
    return document.onkeyup = function() {
      return function(a) {
        var b = a.keyCode;
        if (O.a(jf, b)) {
          return null;
        }
        if (O.a(32, b)) {
          return xd.p(Bf, nc, pf, 0);
        }
        throw Error([A("No matching clause: "), A(a.keyCode)].join(""));
      };
    }(b);
  }();
});
function If(a, b) {
  return jd(Mc, W.e(function(a, b) {
    var e = a - b;
    return Math.abs.b ? Math.abs.b(e) : Math.abs.call(null, e);
  }, a, b));
}
function Jf(a, b, c) {
  return Vd(W.e(function(a, b) {
    return a + c * (b - a);
  }, a, b));
}
function Kf(a) {
  var b = Vd(W.a(function(a) {
    return Math.round.b ? Math.round.b(a) : Math.round.call(null, a);
  }, a));
  a = W.e(function() {
    return function(a, b) {
      var c = a - b;
      return Math.abs.b ? Math.abs.b(c) : Math.abs.call(null, c);
    };
  }(b), b, a);
  a = L(kd(Te, hc, od(a)));
  var c = -(Gc(Ic, b) - (b.b ? b.b(a) : b.call(null, a)));
  return nc.e(b, a, c);
}
function Lf(a) {
  for (var b = new X(null, 3, 5, Y, [0, 5, -5], null), c = If(b, a), d = 1, e = new X(null, 1, 5, Y, [b], null);;) {
    if (c < d) {
      return e;
    }
    var f = d + 1, e = ic.a(e, Kf(Jf(b, a, d / c))), d = f;
  }
}
var Mf, Nf = new X(null, 2, 5, Y, [0, 0], null), Of = U(Nf, 0), Pf = U(Nf, 1), Qf = Xe.h(Wb, Wb, Hc, gc([Lc, Lc, Hc], 0)).call(null, Of), Rf = Xe.h(Lc, Hc, Wb, gc([Wb, Hc, Lc], 0)).call(null, Pf), Sf = W.a(Jc, W.e(Ic, Qf, Rf));
Mf = W.p(pd, Qf, Rf, Sf);
hf(gc([Mf], 0));
hf(gc([If(new X(null, 3, 5, Y, [0, 9, -9], null), new X(null, 3, 5, Y, [3, 4, -7], null))], 0));
hf(gc([Lf(new X(null, 3, 5, Y, [-5, 2, 3], null))], 0));
hf(gc([If(new X(null, 3, 5, Y, [0, 5, -5], null), new X(null, 3, 5, Y, [0, 5, -5], null))], 0));
hf(gc([Lf(new X(null, 3, 5, Y, [0, 5, -5], null))], 0));

})();
