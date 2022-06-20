/*
 * @Author: gandli
 * @Date: 2022-06-20 16:26:20
 * @LastEditTime: 2022-06-20 16:26:27
 * @LastEditors: gandli
 * @Description: 
 * @FilePath: \logseq\journals\类与模块 1.js
 */
function inherit(p) {
  if (p == null) throw TypeError();
  if (Object.create) {
    return Object.create(p);
  }
  var t = typeof p;
  if (t !== "object" && t !== "function") throw TypeError();

  function f() {}
  f.prototype = p;
  return new f();
}

function range(from, to) {
  var r = inherit(range.methods);

  r.from = from;
  r.to = to;

  return r
}

range.methods = {
  includes: function (x) {
    return this.from <= x && x <= this.to;
  },

  foreach: function (f) {
    for (var i = Math.ceil(this.from); i <= this.to; i++) {
      f(i);
    }
  },

  toString: function () {
    return "(" + this.from + "..." + this.to + ")";
  },
}

var r = range(1, 10);
r.includes(2);
r.foreach(console.log);
console.log(r);
