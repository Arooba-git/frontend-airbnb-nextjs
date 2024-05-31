(function(){'use strict';var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=da(this);function v(a,b){if(b)a:{var c=ea;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
v("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.g=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.g};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
v("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ha(a){return a.raw=a}
function w(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function x(a){if(!(a instanceof Array)){a=w(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ja(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ka="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ja(d,e)&&(a[e]=d[e])}return a};
v("Object.assign",function(a){return a||ka});
var la="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ma=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=la(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),na;
if("function"==typeof Object.setPrototypeOf)na=Object.setPrototypeOf;else{var oa;a:{var pa={a:!0},qa={};try{qa.__proto__=pa;oa=qa.a;break a}catch(a){}oa=!1}na=oa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ra=na;
function y(a,b){a.prototype=la(b.prototype);a.prototype.constructor=a;if(ra)ra(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Fa=b.prototype}
function sa(){this.u=!1;this.m=null;this.l=void 0;this.g=1;this.s=this.o=0;this.B=this.i=null}
function ta(a){if(a.u)throw new TypeError("Generator is already running");a.u=!0}
sa.prototype.A=function(a){this.l=a};
function ua(a,b){a.i={Pd:b,je:!0};a.g=a.o||a.s}
sa.prototype.return=function(a){this.i={return:a};this.g=this.s};
function A(a,b,c){a.g=c;return{value:b}}
sa.prototype.O=function(a){this.g=a};
function va(a,b,c){a.o=b;void 0!=c&&(a.s=c)}
function wa(a){a.o=0;var b=a.i.Pd;a.i=null;return b}
function xa(a){var b=a.B.splice(0)[0];(b=a.i=a.i||b)?b.je?a.g=a.o||a.s:void 0!=b.O&&a.s<b.O?(a.g=b.O,a.i=null):a.g=a.s:a.g=0}
function ya(a){this.g=new sa;this.l=a}
function za(a,b){ta(a.g);var c=a.g.m;if(c)return Aa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);
a.g.return(b);return Ba(a)}
function Aa(a,b,c,d){try{var e=b.call(a.g.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.u=!1,e;var f=e.value}catch(g){return a.g.m=null,ua(a.g,g),Ba(a)}a.g.m=null;d.call(a.g,f);return Ba(a)}
function Ba(a){for(;a.g.g;)try{var b=a.l(a.g);if(b)return a.g.u=!1,{value:b.value,done:!1}}catch(c){a.g.l=void 0,ua(a.g,c)}a.g.u=!1;if(a.g.i){b=a.g.i;a.g.i=null;if(b.je)throw b.Pd;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ca(a){this.next=function(b){ta(a.g);a.g.m?b=Aa(a,a.g.m.next,b,a.g.A):(a.g.A(b),b=Ba(a));return b};
this.throw=function(b){ta(a.g);a.g.m?b=Aa(a,a.g.m["throw"],b,a.g.A):(ua(a.g,b),b=Ba(a));return b};
this.return=function(b){return za(a,b)};
this[Symbol.iterator]=function(){return this}}
function Da(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function B(a){return Da(new Ca(new ya(a)))}
function Ea(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
v("Reflect",function(a){return a?a:{}});
v("Reflect.construct",function(){return ma});
v("Reflect.setPrototypeOf",function(a){return a?a:ra?function(b,c){try{return ra(b,c),!0}catch(d){return!1}}:null});
v("Promise",function(a){function b(g){this.g=0;this.i=void 0;this.l=[];this.u=!1;var h=this.m();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.g=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.l=function(g){if(null==this.g){this.g=[];var h=this;this.i(function(){h.o()})}this.g.push(g)};
var e=ea.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.o=function(){for(;this.g&&this.g.length;){var g=this.g;this.g=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.m(l)}}}this.g=null};
c.prototype.m=function(g){this.i(function(){throw g;})};
b.prototype.m=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.H),reject:g(this.o)}};
b.prototype.H=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.J(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.F(g):this.s(g)}};
b.prototype.F=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}"function"==typeof h?this.K(h,g):this.s(g)};
b.prototype.o=function(g){this.A(2,g)};
b.prototype.s=function(g){this.A(1,g)};
b.prototype.A=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.i=h;2===this.g&&this.I();this.B()};
b.prototype.I=function(){var g=this;e(function(){if(g.D()){var h=ea.console;"undefined"!==typeof h&&h.error(g.i)}},1)};
b.prototype.D=function(){if(this.u)return!1;var g=ea.CustomEvent,h=ea.Event,k=ea.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=ea.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.i;return k(g)};
b.prototype.B=function(){if(null!=this.l){for(var g=0;g<this.l.length;++g)f.l(this.l[g]);this.l=null}};
var f=new c;b.prototype.J=function(g){var h=this.m();g.fc(h.resolve,h.reject)};
b.prototype.K=function(g,h){var k=this.m();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,q){return"function"==typeof r?function(t){try{l(r(t))}catch(u){m(u)}}:q}
var l,m,p=new b(function(r,q){l=r;m=q});
this.fc(k(g,l),k(h,m));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.fc=function(g,h){function k(){switch(l.g){case 1:g(l.i);break;case 2:h(l.i);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;null==this.l?f.l(k):this.l.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=w(g),m=l.next();!m.done;m=l.next())d(m.value).fc(h,k)})};
b.all=function(g){var h=w(g),k=h.next();return k.done?d([]):new b(function(l,m){function p(t){return function(u){r[t]=u;q--;0==q&&l(r)}}
var r=[],q=0;do r.push(void 0),q++,d(k.value).fc(p(r.length-1),m),k=h.next();while(!k.done)})};
return b});
v("Object.setPrototypeOf",function(a){return a||ra});
v("WeakMap",function(a){function b(k){this.g=(h+=Math.random()+1).toString();if(k){k=w(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ja(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ja(k,g))throw Error("WeakMap key fail: "+k);k[g][this.g]=l;return this};
b.prototype.get=function(k){return d(k)&&ja(k,g)?k[g][this.g]:void 0};
b.prototype.has=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.g)};
b.prototype.delete=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.g)?delete k[g][this.g]:!1};
return b});
v("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return fa(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&ja(h[0],l))for(h=0;h<m.length;h++){var p=m[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:m,index:h,entry:p}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=w(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(w([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Fa(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
v("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Fa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
function Ga(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
v("Array.prototype.entries",function(a){return a?a:function(){return Ga(this,function(b,c){return[b,c]})}});
v("Array.prototype.keys",function(a){return a?a:function(){return Ga(this,function(b){return b})}});
v("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Fa(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
v("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
v("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
v("Set",function(a){function b(c){this.g=new Map;if(c){c=w(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(w([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.g.forEach(function(f){return c.call(d,f,f,e)})};
return b});
v("Array.prototype.values",function(a){return a?a:function(){return Ga(this,function(b,c){return c})}});
v("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
v("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
v("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
v("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||Infinity===b||-Infinity===b||0===b)return b;var c=Math.floor(Math.abs(b));return 0>b?-c:c}});
v("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push(b[d]);return c}});
v("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
v("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
v("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Fa(this,b,"includes").indexOf(b,c||0)}});
v("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
v("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
v("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push([d,b[d]]);return c}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var C=this||self;function Ha(a){var b=D("CLOSURE_FLAGS");a=b&&b[a];return null!=a?a:!1}
function D(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ia(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ja(a){var b=Ia(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ka(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function La(a,b,c){return a.call.apply(a.bind,arguments)}
function Ma(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function F(a,b,c){F=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?La:Ma;return F.apply(null,arguments)}
function G(){return Date.now()}
function H(a,b){a=a.split(".");var c=C;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function I(a,b){function c(){}
c.prototype=b.prototype;a.Fa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Nh=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Na(a){return a}
;function Oa(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Oa);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
I(Oa,Error);Oa.prototype.name="CustomError";function Pa(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.m=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){try{var c=decodeURIComponent(this.g[1])}catch(d){c=null}this.l=c}}
;var Qa=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Ra(a,b){return a<b?-1:a>b?1:0}
;/*

 SPDX-License-Identifier: Apache-2.0
*/
function Sa(a){return{valueOf:a}.valueOf()}
;var Ta;function Ua(){if(void 0===Ta){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Na,createScript:Na,createScriptURL:Na})}catch(c){C.console&&C.console.error(c.message)}Ta=a}else Ta=a}return Ta}
;function Va(a){this.g=a}
Va.prototype.toString=function(){return this.g+""};
function Ya(a){if(a instanceof Va&&a.constructor===Va)return a.g;Ia(a);return"type_error:TrustedResourceUrl"}
var Za={};function $a(a){var b=Ua();a=b?b.createScriptURL(a):a;return new Va(a,Za)}
;function ab(a){this.g=a}
ab.prototype.toString=function(){return this.g};
var bb=new ab("about:invalid#zClosurez");function cb(a){this.og=a}
function db(a){return new cb(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var eb=[db("data"),db("http"),db("https"),db("mailto"),db("ftp"),new cb(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function fb(a){for(var b=Ea.apply(1,arguments),c=[a[0]],d=0;d<b.length;d++)c.push(String(b[d])),c.push(a[d+1]);return new ab(c.join(""))}
var gb=Sa(function(){return"function"===typeof URL}),hb=["data:",
"http:","https:","mailto:","ftp:"],lb=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;function mb(a){if(a instanceof ab)if(a instanceof ab)a=a.g;else throw Error("");else a=lb.test(a)?a:void 0;return a}
;function nb(a,b){b=mb(b);void 0!==b&&(a.href=b)}
;var ob=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},pb=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},qb=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g="string"===typeof a?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];
b.call(c,k,h,a)&&(e[f++]=k)}return e};
function rb(a,b){b=ob(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function sb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ja(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function tb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function ub(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=ub(a[c]);return b}
var vb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function wb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<vb.length;f++)c=vb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
function xb(a){var b=arguments.length;if(1==b&&Array.isArray(arguments[0]))return xb.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c}
;var yb={};function zb(a){this.g=a}
zb.prototype.toString=function(){return this.g.toString()};
function Ab(a){if(a instanceof zb&&a.constructor===zb)return a.g;Ia(a);return"type_error:SafeHtml"}
function Bb(a){var b=Ua();a=b?b.createHTML(a):a;return new zb(a,yb)}
;function Cb(a,b){if(1===a.nodeType){var c=a.tagName;if("SCRIPT"===c||"STYLE"===c)throw Error("");}a.innerHTML=Ab(b)}
;function Db(){throw Error("unknown trace type");}
;function Eb(a,b){a.src=Ya(b);var c,d;(c=(b=null==(d=(c=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:d.call(c,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;function Fb(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function Gb(a){return decodeURIComponent(a.replace(/\+/g," "))}
;var Hb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ib(a){return a?decodeURI(a):a}
function Jb(a){return Ib(a.match(Hb)[3]||null)}
function Kb(a){var b=a.match(Hb);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function Lb(a){var b=a.indexOf("#");return 0>b?a:a.slice(0,b)}
function Mb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Mb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Nb(a){var b=[],c;for(c in a)Mb(c,a[c],b);return b.join("&")}
function Ob(a,b){b=Nb(b);if(b){var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function Pb(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var Qb=/#|$/,Rb=/[?&]($|#)/;function Sb(){this.ab=this.ab;this.m=this.m}
Sb.prototype.ab=!1;Sb.prototype.dispose=function(){this.ab||(this.ab=!0,this.Ba())};
Sb.prototype.addOnDisposeCallback=function(a,b){this.ab?void 0!==b?a.call(b):a():(this.m||(this.m=[]),this.m.push(void 0!==b?F(a,b):a))};
Sb.prototype.Ba=function(){if(this.m)for(;this.m.length;)this.m.shift()()};function Tb(a,b){this.type=a;this.g=this.target=b;this.defaultPrevented=this.i=!1}
Tb.prototype.stopPropagation=function(){this.i=!0};
Tb.prototype.preventDefault=function(){this.defaultPrevented=!0};var Ub=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();var Vb=Ha(610401301),Wb=Ha(188588736);function Xb(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Yb,Zb=C.navigator;Yb=Zb?Zb.userAgentData||null:null;function $b(a){return Vb?Yb?Yb.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function J(a){return-1!=Xb().indexOf(a)}
;function ac(){return Vb?!!Yb&&0<Yb.brands.length:!1}
function bc(){return ac()?!1:J("Opera")}
function cc(){return ac()?!1:J("Trident")||J("MSIE")}
function dc(){return ac()?$b("Microsoft Edge"):J("Edg/")}
function ec(){return J("Safari")&&!(fc()||(ac()?0:J("Coast"))||bc()||(ac()?0:J("Edge"))||dc()||(ac()?$b("Opera"):J("OPR"))||J("Firefox")||J("FxiOS")||J("Silk")||J("Android"))}
function fc(){return ac()?$b("Chromium"):(J("Chrome")||J("CriOS"))&&!(ac()?0:J("Edge"))||J("Silk")}
function gc(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(d){return d in b})]||""}}
function hc(){var a=Xb();if(cc()){var b=/rv: *([\d\.]*)/.exec(a);if(b&&b[1])a=b[1];else{b="";var c=/MSIE +([\d\.]+)/.exec(a);if(c&&c[1])if(a=/Trident\/(\d.\d)/.exec(a),"7.0"==c[1])if(a&&a[1])switch(a[1]){case "4.0":b="8.0";break;case "5.0":b="9.0";break;case "6.0":b="10.0";break;case "7.0":b="11.0"}else b="7.0";else b=c[1];a=b}return a}c=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");b=[];for(var d;d=c.exec(a);)b.push([d[1],d[2],d[3]||void 0]);a=gc(b);return bc()?a(["Version","Opera"]):
(ac()?0:J("Edge"))?a(["Edge"]):dc()?a(["Edg"]):J("Silk")?a(["Silk"]):fc()?a(["Chrome","CriOS","HeadlessChrome"]):(a=b[2])&&a[1]||""}
;function ic(){return J("Gecko")&&!(-1!=Xb().toLowerCase().indexOf("webkit")&&!J("Edge"))&&!(J("Trident")||J("MSIE"))&&!J("Edge")}
;function jc(){return Vb&&Yb&&Yb.platform?"Android"===Yb.platform:J("Android")}
function kc(){return J("iPhone")&&!J("iPod")&&!J("iPad")}
;function lc(a){lc[" "](a);return a}
lc[" "]=function(){};var mc=cc(),nc=J("Edge"),oc=ic(),pc=jc();function qc(a,b){Tb.call(this,a?a.type:"");this.relatedTarget=this.g=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.l=null;a&&this.init(a,b)}
I(qc,Tb);var rc={2:"touch",3:"pen",4:"mouse"};
qc.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.g=b;if(b=a.relatedTarget){if(oc){a:{try{lc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:rc[a.pointerType]||"";this.state=a.state;this.l=a;a.defaultPrevented&&qc.Fa.preventDefault.call(this)};
qc.prototype.stopPropagation=function(){qc.Fa.stopPropagation.call(this);this.l.stopPropagation?this.l.stopPropagation():this.l.cancelBubble=!0};
qc.prototype.preventDefault=function(){qc.Fa.preventDefault.call(this);var a=this.l;a.preventDefault?a.preventDefault():a.returnValue=!1};var sc="closure_listenable_"+(1E6*Math.random()|0);var tc=0;function uc(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.oc=e;this.key=++tc;this.Ub=this.ec=!1}
function vc(a){a.Ub=!0;a.listener=null;a.proxy=null;a.src=null;a.oc=null}
;function wc(a){this.src=a;this.listeners={};this.g=0}
wc.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.g++);var g=xc(a,b,d,e);-1<g?(b=a[g],c||(b.ec=!1)):(b=new uc(b,this.src,f,!!d,e),b.ec=c,a.push(b));return b};
wc.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=xc(e,b,c,d);return-1<b?(vc(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.g--),!0):!1};
function yc(a,b){var c=b.type;c in a.listeners&&rb(a.listeners[c],b)&&(vc(b),0==a.listeners[c].length&&(delete a.listeners[c],a.g--))}
function xc(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Ub&&f.listener==b&&f.capture==!!c&&f.oc==d)return e}return-1}
;var zc="closure_lm_"+(1E6*Math.random()|0),Ac={},Bc=0;function Cc(a,b,c,d,e){if(d&&d.once)Dc(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Cc(a,b[f],c,d,e);else c=Ec(c),a&&a[sc]?a.ra(b,c,Ka(d)?!!d.capture:!!d,e):Fc(a,b,c,!1,d,e)}
function Fc(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ka(e)?!!e.capture:!!e,h=Gc(a);h||(a[zc]=h=new wc(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Ic();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Ub||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Jc(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Bc++}}
function Ic(){function a(c){return b.call(a.src,a.listener,c)}
var b=Kc;return a}
function Dc(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Dc(a,b[f],c,d,e);else c=Ec(c),a&&a[sc]?a.g.add(String(b),c,!0,Ka(d)?!!d.capture:!!d,e):Fc(a,b,c,!0,d,e)}
function Lc(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Lc(a,b[f],c,d,e);else(d=Ka(d)?!!d.capture:!!d,c=Ec(c),a&&a[sc])?a.g.remove(String(b),c,d,e):a&&(a=Gc(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=xc(b,c,d,e)),(c=-1<a?b[a]:null)&&Mc(c))}
function Mc(a){if("number"!==typeof a&&a&&!a.Ub){var b=a.src;if(b&&b[sc])yc(b.g,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Jc(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Bc--;(c=Gc(b))?(yc(c,a),0==c.g&&(c.src=null,b[zc]=null)):vc(a)}}}
function Jc(a){return a in Ac?Ac[a]:Ac[a]="on"+a}
function Kc(a,b){if(a.Ub)a=!0;else{b=new qc(b,this);var c=a.listener,d=a.oc||a.src;a.ec&&Mc(a);a=c.call(d,b)}return a}
function Gc(a){a=a[zc];return a instanceof wc?a:null}
var Nc="__closure_events_fn_"+(1E9*Math.random()>>>0);function Ec(a){if("function"===typeof a)return a;a[Nc]||(a[Nc]=function(b){return a.handleEvent(b)});
return a[Nc]}
;function Oc(){Sb.call(this);this.g=new wc(this);this.B=this;this.u=null}
I(Oc,Sb);Oc.prototype[sc]=!0;Oc.prototype.addEventListener=function(a,b,c,d){Cc(this,a,b,c,d)};
Oc.prototype.removeEventListener=function(a,b,c,d){Lc(this,a,b,c,d)};
function Pc(a,b){var c=a.u;if(c){var d=[];for(var e=1;c;c=c.u)d.push(c),++e}a=a.B;c=b.type||b;"string"===typeof b?b=new Tb(b,a):b instanceof Tb?b.target=b.target||a:(e=b,b=new Tb(c,a),wb(b,e));e=!0;if(d)for(var f=d.length-1;!b.i&&0<=f;f--){var g=b.g=d[f];e=Qc(g,c,!0,b)&&e}b.i||(g=b.g=a,e=Qc(g,c,!0,b)&&e,b.i||(e=Qc(g,c,!1,b)&&e));if(d)for(f=0;!b.i&&f<d.length;f++)g=b.g=d[f],e=Qc(g,c,!1,b)&&e}
Oc.prototype.Ba=function(){Oc.Fa.Ba.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,vc(d[e]);delete a.listeners[c];a.g--}}this.u=null};
Oc.prototype.ra=function(a,b,c,d){return this.g.add(String(a),b,!1,c,d)};
function Qc(a,b,c,d){b=a.g.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Ub&&g.capture==c){var h=g.listener,k=g.oc||g.src;g.ec&&yc(a.g,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Rc(a,b){this.i=a;this.m=b;this.l=0;this.g=null}
Rc.prototype.get=function(){if(0<this.l){this.l--;var a=this.g;this.g=a.next;a.next=null}else a=this.i();return a};
function Sc(a,b){a.m(b);100>a.l&&(a.l++,b.next=a.g,a.g=b)}
;function Tc(){}
;function Uc(){var a=Vc;return document.createRange().createContextualFragment(Ab(Bb(a[0])))}
;function Wc(a,b){var c=b.createRange();c.selectNode(b.body);a=Bb(a);return c.createContextualFragment(Ab(a))}
;function Xc(a){a=a.nodeName;return"string"===typeof a?a:"FORM"}
function Yc(a){a=a.nodeType;return 1===a||"number"!==typeof a}
;var Zc="ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" "),
$c=[["A",new Map([["href",{ja:2}]])],["AREA",new Map([["href",{ja:2}]])],["LINK",new Map([["href",{ja:2,conditions:new Map([["rel",new Set("alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" "))]])}]])],["SOURCE",new Map([["src",{ja:1}],["srcset",{ja:1}]])],["IMG",new Map([["src",{ja:1}],["srcset",{ja:1}]])],["VIDEO",new Map([["src",{ja:1}]])],["AUDIO",new Map([["src",{ja:1}]])]],ad="title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked color cols colspan controls datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden ismap label lang loop max maxlength media minlength min multiple muted nonce open placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type valign value width wrap itemscope itemtype itemid itemprop itemref".split(" "),
bd=[["dir",{ja:3,conditions:Sa(function(){return new Map([["dir",new Set(["auto","ltr","rtl"])]])})}],
["async",{ja:3,conditions:Sa(function(){return new Map([["async",new Set(["async"])]])})}],
["cite",{ja:2}],["loading",{ja:3,conditions:Sa(function(){return new Map([["loading",new Set(["eager","lazy"])]])})}],
["poster",{ja:2}],["target",{ja:3,conditions:Sa(function(){return new Map([["target",new Set(["_self","_blank"])]])})}]],cd=new function(){var a=new Set(ad),b=new Map(bd),c=new Map($c);
this.l=new Set(Zc);this.g=c;this.i=a;this.m=b};function dd(){this.g=cd}
function ed(a,b){var c=document.implementation.createHTMLDocument("");a=fd(a,b,c);c=c.body;c.appendChild(a);c=(new XMLSerializer).serializeToString(c);c=c.slice(c.indexOf(">")+1,c.lastIndexOf("</"));return Bb(c)}
function fd(a,b,c){b=Wc(b,c);b=document.createTreeWalker(b,5,function(h){if(3===h.nodeType)h=1;else if(Yc(h))if(h=Xc(h),null===h)h=2;else{var k=a.g;h="FORM"!==h&&(k.l.has(h)||k.g.has(h))?1:2}else h=2;return h},!1);
for(var d=b.nextNode(),e=c.createDocumentFragment(),f=e;null!==d;){var g=void 0;if(3===d.nodeType)g=document.createTextNode(d.data);else if(Yc(d))g=gd(a,d,c);else throw Error("");f.appendChild(g);if(d=b.firstChild())f=g;else for(;!(d=b.nextSibling())&&(d=b.parentNode());)f=f.parentNode}return e}
function gd(a,b,c){var d=Xc(b);c=c.createElement(d);b=b.attributes;for(var e=w(b),f=e.next();!f.done;f=e.next()){var g=f.value;f=g.name;g=g.value;var h=a.g;var k=h.g.get(d);h=(null==k?0:k.has(f))?k.get(f):h.i.has(f)?{ja:1}:(h=h.m.get(f))?h:{ja:0};a:{if(k=h.conditions){k=w(k);for(var l=k.next();!l.done;l=k.next()){var m=w(l.value);l=m.next().value;m=m.next().value;var p=void 0;if((l=null==(p=b.getNamedItem(l))?void 0:p.value)&&!m.has(l)){k=!1;break a}}}k=!0}if(k)switch(h.ja){case 1:hd(c,f,g);break;
case 2:a:if(h=void 0,gb){try{h=new URL(g)}catch(r){h="https:";break a}h=h.protocol}else b:{h=document.createElement("a");try{h.href=g}catch(r){h=void 0;break b}h=h.protocol;h=":"===h||""===h?"https:":h}hd(c,f,void 0!==h&&-1!==hb.indexOf(h.toLowerCase())?g:"about:invalid#zClosurez");break;case 3:hd(c,f,g.toLowerCase());break;case 4:hd(c,f,g)}}return c}
function hd(a,b,c){a.setAttribute(b,c)}
var id=Sa(function(){return new dd});function jd(a){var b=a.split(/\?|#/),c=/\?/.test(a)?"?"+b[1]:"";return{path:b[0],params:c,hash:/#/.test(a)?"#"+(c?b[2]:b[1]):""}}
function kd(a){var b=Ea.apply(1,arguments);if(0===b.length)return $a(a[0]);for(var c=a[0],d=0;d<b.length;d++)c+=encodeURIComponent(b[d])+a[d+1];return $a(c)}
function ld(a,b){a=jd(Ya(a).toString());var c=a.params,d=c.length?"&":"?";b.forEach(function(e,f){e=e instanceof Array?e:[e];for(var g=0;g<e.length;g++){var h=e[g];null!==h&&void 0!==h&&(c+=d+encodeURIComponent(f)+"="+encodeURIComponent(String(h)),d="&")}});
return $a(a.path+c+a.hash)}
;function md(a,b){this.width=a;this.height=b}
n=md.prototype;n.clone=function(){return new md(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function nd(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
;function od(a){"function"!==typeof C.setImmediate||C.Window&&C.Window.prototype&&C.Window.prototype.setImmediate==C.setImmediate?(pd||(pd=qd()),pd(a)):C.setImmediate(a)}
var pd;function qd(){var a=C.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!J("Presto")&&(a=function(){var e=nd("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=F(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Kd;c.Kd=null;e()}};
return function(e){d.next={Kd:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function rd(a){C.setTimeout(function(){throw a;},0)}
;function sd(){this.l=this.g=null}
sd.prototype.add=function(a,b){var c=td.get();c.set(a,b);this.l?this.l.next=c:this.g=c;this.l=c};
sd.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.l=null),a.next=null);return a};
var td=new Rc(function(){return new ud},function(a){return a.reset()});
function ud(){this.next=this.scope=this.g=null}
ud.prototype.set=function(a,b){this.g=a;this.scope=b;this.next=null};
ud.prototype.reset=function(){this.next=this.scope=this.g=null};var vd,wd=!1,xd=new sd;function yd(a,b){vd||zd();wd||(vd(),wd=!0);xd.add(a,b)}
function zd(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);vd=function(){a.then(Ad)}}else vd=function(){od(Ad)}}
function Ad(){for(var a;a=xd.remove();){try{a.g.call(a.scope)}catch(b){rd(b)}Sc(td,a)}wd=!1}
;function Bd(a){this.g=0;this.u=void 0;this.m=this.l=this.i=null;this.o=this.s=!1;if(a!=Tc)try{var b=this;a.call(void 0,function(c){Cd(b,2,c)},function(c){Cd(b,3,c)})}catch(c){Cd(this,3,c)}}
function Dd(){this.next=this.context=this.l=this.i=this.g=null;this.m=!1}
Dd.prototype.reset=function(){this.context=this.l=this.i=this.g=null;this.m=!1};
var Ed=new Rc(function(){return new Dd},function(a){a.reset()});
function Fd(a,b,c){var d=Ed.get();d.i=a;d.l=b;d.context=c;return d}
Bd.prototype.then=function(a,b,c){return Gd(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Bd.prototype.$goog_Thenable=!0;Bd.prototype.cancel=function(a){if(0==this.g){var b=new Hd(a);yd(function(){Id(this,b)},this)}};
function Id(a,b){if(0==a.g)if(a.i){var c=a.i;if(c.l){for(var d=0,e=null,f=null,g=c.l;g&&(g.m||(d++,g.g==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.g&&1==d?Id(c,b):(f?(d=f,d.next==c.m&&(c.m=d),d.next=d.next.next):Jd(c),Kd(c,e,3,b)))}a.i=null}else Cd(a,3,b)}
function Ld(a,b){a.l||2!=a.g&&3!=a.g||Md(a);a.m?a.m.next=b:a.l=b;a.m=b}
function Gd(a,b,c,d){var e=Fd(null,null,null);e.g=new Bd(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.l=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Hd?g(h):f(k)}catch(l){g(l)}}:g});
e.g.i=a;Ld(a,e);return e.g}
Bd.prototype.B=function(a){this.g=0;Cd(this,2,a)};
Bd.prototype.D=function(a){this.g=0;Cd(this,3,a)};
function Cd(a,b,c){if(0==a.g){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;a:{var d=c,e=a.B,f=a.D;if(d instanceof Bd){Ld(d,Fd(e||Tc,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ka(d))try{var k=d.then;if("function"===typeof k){Nd(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.u=c,a.g=b,a.i=null,Md(a),3!=b||c instanceof Hd||Od(a,c))}}
function Nd(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Md(a){a.s||(a.s=!0,yd(a.A,a))}
function Jd(a){var b=null;a.l&&(b=a.l,a.l=b.next,b.next=null);a.l||(a.m=null);return b}
Bd.prototype.A=function(){for(var a;a=Jd(this);)Kd(this,a,this.g,this.u);this.s=!1};
function Kd(a,b,c,d){if(3==c&&b.l&&!b.m)for(;a&&a.o;a=a.i)a.o=!1;if(b.g)b.g.i=null,Pd(b,c,d);else try{b.m?b.i.call(b.context):Pd(b,c,d)}catch(e){Qd.call(null,e)}Sc(Ed,b)}
function Pd(a,b,c){2==b?a.i.call(a.context,c):a.l&&a.l.call(a.context,c)}
function Od(a,b){a.o=!0;yd(function(){a.o&&Qd.call(null,b)})}
var Qd=rd;function Hd(a){Oa.call(this,a)}
I(Hd,Oa);Hd.prototype.name="cancel";function Rd(a,b){Oc.call(this);this.i=a||1;this.l=b||C;this.o=F(this.Yg,this);this.s=G()}
I(Rd,Oc);n=Rd.prototype;n.enabled=!1;n.La=null;n.Yg=function(){if(this.enabled){var a=G()-this.s;0<a&&a<.8*this.i?this.La=this.l.setTimeout(this.o,this.i-a):(this.La&&(this.l.clearTimeout(this.La),this.La=null),Pc(this,"tick"),this.enabled&&(Sd(this),this.start()))}};
n.start=function(){this.enabled=!0;this.La||(this.La=this.l.setTimeout(this.o,this.i),this.s=G())};
function Sd(a){a.enabled=!1;a.La&&(a.l.clearTimeout(a.La),a.La=null)}
n.Ba=function(){Rd.Fa.Ba.call(this);Sd(this);delete this.l};var Td=kc()||J("iPod"),Ud=J("iPad");!J("Android")||fc();fc();var Vd=ec()&&!(kc()||J("iPad")||J("iPod"));var Wd={},Xd=null;
function Yd(a,b){Ja(a);void 0===b&&(b=0);if(!Xd){Xd={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Wd[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Xd[h]&&(Xd[h]=g)}}}b=Wd[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Zd="undefined"!==typeof Uint8Array,$d=!mc&&"function"===typeof btoa;function ae(){return"function"===typeof BigInt}
;var be=0,ce=0;function de(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);b&&(c=w(ee(c,a)),b=c.next().value,a=c.next().value,c=b);be=c>>>0;ce=a>>>0}
function fe(a,b){b>>>=0;a>>>=0;if(2097151>=b)var c=""+(4294967296*b+a);else ae()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+6777216*c+6710656*b,c+=8147497*b,b*=2,1E7<=a&&(c+=Math.floor(a/1E7),a%=1E7),1E7<=c&&(b+=Math.floor(c/1E7),c%=1E7),c=b+ge(c)+ge(a));return c}
function ge(a){a=String(a);return"0000000".slice(a.length)+a}
function he(){var a=be,b=ce;b&2147483648?ae()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=w(ee(a,b)),a=b.next().value,b=b.next().value,a="-"+fe(a,b)):a=fe(a,b);return a}
function ee(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function ie(a){return"function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():a}
var je=ie(),ke=ie("0di"),le=ie("2ex");Math.max.apply(Math,x(Object.values({zh:1,xh:2,wh:4,Ch:8,Bh:16,Ah:32,rh:64,Eh:128,vh:256,uh:512,yh:1024,sh:2048,Dh:4096,th:8192})));var me=je?function(a,b){a[je]|=b}:function(a,b){void 0!==a.Da?a.Da|=b:Object.defineProperties(a,{Da:{value:b,
configurable:!0,writable:!0,enumerable:!1}})},ne=je?function(a,b){a[je]&=~b}:function(a,b){void 0!==a.Da&&(a.Da&=~b)};
function oe(a,b,c){return c?a|b:a&~b}
var pe=je?function(a){return a[je]|0}:function(a){return a.Da|0},qe=je?function(a){return a[je]}:function(a){return a.Da},re=je?function(a,b){a[je]=b;
return a}:function(a,b){void 0!==a.Da?a.Da=b:Object.defineProperties(a,{Da:{value:b,
configurable:!0,writable:!0,enumerable:!1}});return a};
function se(a){me(a,34);return a}
function te(a,b){re(b,(a|0)&-14591)}
function ue(a,b){re(b,(a|34)&-14557)}
function ve(a){a=a>>14&1023;return 0===a?536870912:a}
;var we={},xe={};function ye(a){return!(!a||"object"!==typeof a||a.tg!==xe)}
function ze(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Ae;function Be(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=pe(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;re(a,d|1);return!0}
var Ce,De=[];re(De,55);Ce=Object.freeze(De);function Ee(a){if(a&2)throw Error();}
function Fe(a,b,c){this.i=0;this.g=a;this.l=b;this.m=c}
Fe.prototype.next=function(){if(this.i<this.g.length){var a=this.g[this.i++];return{done:!1,value:this.l?this.l.call(this.m,a):a}}return{done:!0,value:void 0}};
Fe.prototype[Symbol.iterator]=function(){return new Fe(this.g,this.l,this.m)};
Object.freeze(new function(){});
Object.freeze(new function(){});var Ge;function He(a){a=Error(a);Fb(a,"warning");return a}
;function Ie(a){return a.displayName||a.name||"unknown type name"}
var Je=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Ke(a){var b=typeof a;return"number"===b?Number.isFinite(a):"string"!==b?!1:Je.test(a)}
function Le(a){if(null!=a){var b=!!b;if(!Ke(a))throw He("int64");"string"===typeof a?a=Me(a):b?(Ke(a),a=Math.trunc(a),Number.isSafeInteger(a)?a=String(a):(b=String(a),Ne(b)?a=b:(de(a),a=he()))):a=Oe(a)}return a}
function Ne(a){return"-"===a[0]?20>a.length?!0:20===a.length&&-922337<Number(a.substring(0,7)):19>a.length?!0:19===a.length&&922337>Number(a.substring(0,6))}
function Oe(a){Ke(a);a=Math.trunc(a);if(!Number.isSafeInteger(a)){de(a);var b=be,c=ce;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,0==b&&(c=c+1>>>0);b=4294967296*c+(b>>>0);a=a?-b:b}return a}
function Me(a){Ke(a);var b=Math.trunc(Number(a));if(Number.isSafeInteger(b))return String(b);b=a.indexOf(".");-1!==b&&(a=a.substring(0,b));if(!Ne(a)){if(16>a.length)de(Number(a));else if(ae())a=BigInt(a),be=Number(a&BigInt(4294967295))>>>0,ce=Number(a>>BigInt(32)&BigInt(4294967295));else{b=+("-"===a[0]);ce=be=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),ce*=1E6,be=1E6*be+d,4294967296<=be&&(ce+=Math.trunc(be/4294967296),ce>>>=0,be>>>=0);b&&(b=w(ee(be,ce)),a=b.next().value,
b=b.next().value,be=a,ce=b)}a=he()}return a}
function Pe(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function Qe(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Ie(b)+" but got "+(a&&Ie(a.constructor)));return a}
function Re(a,b,c,d){if(null!=a&&"object"===typeof a&&a.gd===we)return a;if(!Array.isArray(a))return c?d&2?(a=b[ke])?b=a:(a=new b,se(a.M),b=b[ke]=a):b=new b:b=void 0,b;var e=c=pe(a);0===e&&(e|=d&32);e|=d&2;e!==c&&re(a,e);return new b(a)}
;var Se;
function K(a,b,c){null==a&&(a=Se);Se=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error("narr");d=pe(a);if(d&2048)throw Error("farr");if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error("mid");a:{c=a;var e=c.length;if(e){var f=e-1;if(ze(c[f])){d|=256;b=f-(+!!(d&512)-1);if(1024<=b)throw Error("pvtlmt");d=d&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,e-(+!!(d&512)-1));if(1024<b)throw Error("spvt");d=d&-16760833|(b&1023)<<
14}}}re(a,d);return a}
;var Te=function(){try{var a=function(){return ma(Map,[],this.constructor)};
y(a,Map);lc(new a);return!1}catch(b){return!0}}();
function Ue(){this.g=new Map}
n=Ue.prototype;n.get=function(a){return this.g.get(a)};
n.set=function(a,b){this.g.set(a,b);this.size=this.g.size;return this};
n.delete=function(a){a=this.g.delete(a);this.size=this.g.size;return a};
n.clear=function(){this.g.clear();this.size=this.g.size};
n.has=function(a){return this.g.has(a)};
n.entries=function(){return this.g.entries()};
n.keys=function(){return this.g.keys()};
n.values=function(){return this.g.values()};
n.forEach=function(a,b){return this.g.forEach(a,b)};
Ue.prototype[Symbol.iterator]=function(){return this.entries()};
var Ve=function(){function a(){return ma(Map,[],this.constructor)}
if(Te)return Object.setPrototypeOf(Ue.prototype,Map.prototype),Object.defineProperties(Ue.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Ue;y(a,Map);return a}();
function We(a){return a}
function Xe(a,b,c,d){c=void 0===c?We:c;d=void 0===d?We:d;var e=Ve.call(this)||this;var f=pe(a);f|=64;re(a,f);e.Yb=f;e.Hc=b;e.Qb=c;e.Ad=e.Hc?Ye:d;for(var g=0;g<a.length;g++){var h=a[g],k=c(h[0],!1,!0),l=h[1];b?void 0===l&&(l=null):l=d(h[1],!1,!0,void 0,void 0,f);Ve.prototype.set.call(e,k,l)}return e}
y(Xe,Ve);function Ze(a){if(a.Yb&2)throw Error("Cannot mutate an immutable Map");}
function $e(a,b){b=void 0===b?af:b;if(0!==a.size)return bf(a,b)}
function bf(a,b){b=void 0===b?af:b;var c=[];a=Ve.prototype.entries.call(a);for(var d;!(d=a.next()).done;)d=d.value,d[0]=b(d[0]),d[1]=b(d[1]),c.push(d);return c}
n=Xe.prototype;n.clear=function(){Ze(this);Ve.prototype.clear.call(this)};
n.delete=function(a){Ze(this);return Ve.prototype.delete.call(this,this.Qb(a,!0,!1))};
n.entries=function(){var a=Array.from(Ve.prototype.keys.call(this));return new Fe(a,cf,this)};
n.keys=function(){return Ve.prototype.keys.call(this)};
n.values=function(){var a=Array.from(Ve.prototype.keys.call(this));return new Fe(a,Xe.prototype.get,this)};
n.forEach=function(a,b){var c=this;Ve.prototype.forEach.call(this,function(d,e){a.call(b,c.get(e),e,c)})};
n.set=function(a,b){Ze(this);a=this.Qb(a,!0,!1);return null==a?this:null==b?(Ve.prototype.delete.call(this,a),this):Ve.prototype.set.call(this,a,this.Ad(b,!0,!0,this.Hc,!1,this.Yb))};
n.has=function(a){return Ve.prototype.has.call(this,this.Qb(a,!1,!1))};
n.get=function(a){a=this.Qb(a,!1,!1);var b=Ve.prototype.get.call(this,a);if(void 0!==b){var c=this.Hc;return c?(c=this.Ad(b,!1,!0,c,this.Ph,this.Yb),c!==b&&Ve.prototype.set.call(this,a,c),c):b}};
Xe.prototype[Symbol.iterator]=function(){return this.entries()};
Xe.prototype.toJSON=void 0;Xe.prototype.tg=xe;function Ye(a,b,c,d,e,f){b&&Qe(a,d);a=Re(a,d,c,f);e&&(a=df(a));f&2&&pe(a.M);return a}
function af(a){return a}
function cf(a){return[a,this.get(a)]}
;function ef(a,b){return ff(b)}
function ff(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(Be(a,void 0,0))return}else{if(Zd&&null!=a&&a instanceof Uint8Array){if($d){for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else a=Yd(a);return a}if(a instanceof Xe)return $e(a)}}return a}
;function gf(a,b,c){a=Array.prototype.slice.call(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function hf(a,b,c,d,e){if(null!=a){if(Array.isArray(a))a=Be(a,void 0,0)?void 0:e&&pe(a)&2?a:jf(a,b,c,void 0!==d,e);else if(ze(a)){var f={},g;for(g in a)f[g]=hf(a[g],b,c,d,e);a=f}else a=b(a,d);return a}}
function jf(a,b,c,d,e){var f=d||c?pe(a):0;d=d?!!(f&32):void 0;a=Array.prototype.slice.call(a);for(var g=0;g<a.length;g++)a[g]=hf(a[g],b,c,d,e);c&&c(f,a);return a}
function kf(a){return hf(a,lf,void 0,void 0,!1)}
function lf(a){return a.gd===we?a.toJSON():a instanceof Xe?$e(a,kf):ff(a)}
;function mf(a,b,c){c=void 0===c?ue:c;if(null!=a){if(Zd&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=pe(a);d&2||(b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16))),a=b?re(a,(d|34)&-12293):jf(a,mf,d&4?ue:c,!0,!0));return a}a.gd===we?(c=a.M,d=qe(c),a=d&2?a:nf(a,c,d,!0)):a instanceof Xe&&!(a.Yb&2)&&(c=se(bf(a,mf)),a=new Xe(c,a.Hc,a.Qb,a.Ad));return a}}
function nf(a,b,c,d){a=a.constructor;b=of(b,c,d);pe(b);Se=b;b=new a(b);Se=void 0;return b}
function of(a,b,c){var d=c||b&2?ue:te,e=!!(b&32);a=gf(a,b,function(f){return mf(f,e,d)});
me(a,32|(c?2:0));return a}
function df(a){var b=a.M,c=qe(b);return c&2?nf(a,b,c,!1):a}
;function pf(a,b){a=a.M;return qf(a,qe(a),b)}
function rf(a,b,c,d){b=d+(+!!(b&512)-1);if(!(0>b||b>=a.length||b>=c))return a[b]}
function qf(a,b,c,d){if(-1===c)return null;var e=ve(b);if(c>=e){if(b&256)return a[a.length-1][c]}else{var f=a.length;if(d&&b&256&&(d=a[f-1][c],null!=d)){if(rf(a,b,e,c)&&null!=le){var g;a=null!=(g=Ge)?g:Ge={};g=a[le]||0;4<=g||(a[le]=g+1,g=Error(),Fb(g,"incident"),rd(g))}return d}return rf(a,b,e,c)}}
function sf(a,b,c){var d=a.M,e=qe(d);Ee(e);tf(d,e,b,c);return a}
function tf(a,b,c,d,e){ze(d);var f=ve(b);if(c>=f||e){var g=b;if(b&256)e=a[a.length-1];else{if(null==d)return g;e=a[f+(+!!(b&512)-1)]={};g|=256}e[c]=d;c<f&&(a[c+(+!!(b&512)-1)]=void 0);g!==b&&re(a,g);return g}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function uf(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function vf(a,b,c,d){a=a.M;var e=qe(a);Ee(e);(c=wf(a,e,c))&&c!==b&&null!=d&&(e=tf(a,e,c));tf(a,e,b,d)}
function wf(a,b,c){for(var d=0,e=0;e<c.length;e++){var f=c[e];null!=qf(a,b,f)&&(0!==d&&(b=tf(a,b,d)),d=f)}return d}
function xf(a,b,c){var d=void 0===d?!1:d;var e=a.M;var f=qe(e),g=qf(e,f,c,d);b=Re(g,b,!1,f);b!==g&&null!=b&&tf(e,f,c,b,d);e=b;if(null==e)return e;a=a.M;f=qe(a);f&2||(g=df(e),g!==e&&(e=g,tf(a,f,c,e,d)));return e}
function yf(a,b,c,d){null!=d?Qe(d,b):d=void 0;return sf(a,c,d)}
function zf(a,b){a=oe(a,2,!!(2&b));a=oe(a,32,!0);return a=oe(a,2048,!1)}
function Af(a,b){var c=!0;32&b&&c||(a=oe(a,32,!1));return a}
function Bf(a,b,c,d){a=a.M;var e=qe(a);Ee(e);var f,g=!!(2&e),h=g?1:2;f&&(f=!g);g=qf(a,e,b);g=Array.isArray(g)?g:Ce;var k=pe(g),l=!!(4&k);if(!l){var m=k;0===m&&(m=zf(m,e));m=oe(m,1,!0);k=g;var p=e,r=!!(2&m);r&&(p=oe(p,2,!0));for(var q=!r,t=!0,u=0,z=0;u<k.length;u++){var E=Re(k[u],c,!1,p);if(E instanceof c){if(!r){var S=!!(pe(E.M)&2);q&&(q=!S);t&&(t=S)}k[z++]=E}}z<u&&(k.length=z);m=oe(m,4,!0);m=oe(m,16,t);m=oe(m,8,q);re(k,m);r&&Object.freeze(k);k=m}if(f&&!(8&k||!g.length&&(1===h||4===h&&32&k))){uf(k)&&
(g=Array.prototype.slice.call(g),k=zf(k,e),e=tf(a,e,b,g));f=g;for(m=0;m<f.length;m++)p=f[m],r=df(p),p!==r&&(f[m]=r);k=oe(k,8,!0);k=oe(k,16,!f.length);re(f,k)}uf(k)||(f=k,(m=1===h||4===h&&!!(32&k))?(p=!!(32&k),k=oe(k,!g.length||16&k&&(!l||p)?2:2048,!0)):k=Af(k,e),k!==f&&re(g,k),m&&Object.freeze(g));2===h&&uf(k)&&(g=Array.prototype.slice.call(g),k=zf(k,e),k=Af(k,e),re(g,k),tf(a,e,b,g));b=g;c=null!=d?Qe(d,c):new c;b.push(c);pe(c.M)&2?ne(b,8):ne(b,16)}
function Cf(a,b){var c=0;c=void 0===c?0:c;a=pf(a,b);a=null==a?a:Number.isFinite(a)?a|0:void 0;return null!=a?a:c}
function Df(a,b){var c=a.M;b=wf(c,qe(c),Ef)===b?b:-1;a=pf(a,b);return null==a||"string"===typeof a?a:void 0}
function L(a,b,c){return sf(a,b,Pe(c))}
function Ff(a,b,c){if(null!=c){if(!Number.isFinite(c))throw He("enum");c|=0}return sf(a,b,c)}
;function M(a,b,c){this.M=K(a,b,c)}
M.prototype.toJSON=function(){if(Ae)var a=Gf(this,this.M,!1);else a=jf(this.M,lf,void 0,void 0,!1),a=Gf(this,a,!0);return a};
M.prototype.clone=function(){var a=this.M;return nf(this,a,qe(a),!1)};
M.prototype.gd=we;M.prototype.toString=function(){return Gf(this,this.M,!1).toString()};
function Gf(a,b,c){var d=Wb?void 0:a.constructor.hb;var e=qe(c?a.M:b);a=b.length;if(!a)return b;var f;if(ze(c=b[a-1])){a:{var g=c;var h={},k=!1,l;for(l in g){var m=g[l];if(Array.isArray(m)){var p=m;if(Be(m,d,+l)||ye(m)&&0===m.size)m=null;m!=p&&(k=!0)}null!=m?h[l]=m:k=!0}if(k){for(var r in h){g=h;break a}g=null}}g!=c&&(f=!0);a--}for(l=+!!(e&512)-1;0<a;a--){r=a-1;c=b[r];r-=l;if(!(null==c||Be(c,d,r)||ye(c)&&0===c.size))break;var q=!0}if(!f&&!q)return b;b=Array.prototype.slice.call(b,0,a);g&&b.push(g);
return b}
;var Hf=window;function If(){return Vb&&Yb?Yb.mobile:!(Vb&&Yb?!Yb.mobile&&(J("iPad")||J("Android")||J("Silk")):J("iPad")||J("Android")&&!J("Mobile")||J("Silk"))&&(J("iPod")||J("iPhone")||J("Android")||J("IEMobile"))}
;function Jf(a){var b=Kf;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Lf(){var a=[];Jf(function(b){a.push(b)});
return a}
var Kf={gh:"allow-forms",hh:"allow-modals",ih:"allow-orientation-lock",jh:"allow-pointer-lock",kh:"allow-popups",lh:"allow-popups-to-escape-sandbox",mh:"allow-presentation",nh:"allow-same-origin",oh:"allow-scripts",ph:"allow-top-navigation",qh:"allow-top-navigation-by-user-activation"},Mf=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){return Lf()});
function Nf(){var a=Of(),b={};pb(Mf(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Of(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Pf(){var a=document.body||document.documentElement;a:{var b=9==a.nodeType?a:a.ownerDocument||a.document;if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,null))){b=b.direction||b.getPropertyValue("direction")||"";break a}b=""}return b||(a.currentStyle?a.currentStyle.direction:null)||a.style&&a.style.direction}
;var Qf=(new Date).getTime();function Rf(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";0===a.indexOf("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Sf(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(p){for(var r=g,q=0;64>q;q+=4)r[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;80>q;q++)p=r[q-3]^r[q-8]^r[q-14]^r[q-16],r[q]=(p<<1|p>>>31)&4294967295;p=e[0];var t=e[1],u=e[2],z=e[3],E=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var S=z^t&(u^z);var ia=1518500249}else S=t^u^z,ia=1859775393;else 60>q?(S=t&u|z&(t|u),ia=2400959708):(S=t^u^z,ia=3395469782);S=((p<<5|p>>>27)&4294967295)+S+E+ia+r[q]&4294967295;E=z;z=u;u=(t<<30|t>>>2)&4294967295;t=p;p=S}e[0]=e[0]+p&4294967295;e[1]=e[1]+t&4294967295;
e[2]=e[2]+u&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+E&4294967295}
function c(p,r){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var q=[],t=0,u=p.length;t<u;++t)q.push(p.charCodeAt(t));p=q}r||(r=p.length);q=0;if(0==l)for(;q+64<r;)b(p.slice(q,q+64)),q+=64,m+=64;for(;q<r;)if(f[l++]=p[q++],m++,64==l)for(l=0,b(f);q+64<r;)b(p.slice(q,q+64)),q+=64,m+=64}
function d(){var p=[],r=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=r&255,r>>>=8;b(f);for(q=r=0;5>q;q++)for(var t=24;0<=t;t-=8)p[r++]=e[q]>>t&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,ef:function(){for(var p=d(),r="",q=0;q<p.length;q++)r+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return r}}}
;function Tf(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,Uf(Rf(d),a,c||null)].join(" "):null}
function Uf(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],pb(d,function(h){e.push(h)}),Vf(e.join(" "));
var f=[],g=[];pb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];pb(d,function(h){e.push(h)});
a=Vf(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Vf(a){var b=Sf();b.update(a);return b.ef().toLowerCase()}
;var Wf={};function Xf(a){this.g=a||{cookie:""}}
n=Xf.prototype;n.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(this.g.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{ed:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
n.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.ui;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.ed}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.g.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
n.get=function(a,b){for(var c=a+"=",d=(this.g.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Qa(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{ed:0,path:b,domain:c});return d};
n.clear=function(){for(var a=(this.g.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Qa(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Yf=new Xf("undefined"==typeof document?null:document);function Zf(a){return!!Wf.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function $f(a){a=void 0===a?!1:a;var b=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;Zf(a)&&(b=b||C.__1PSAPISID);if(b)return!0;if("undefined"!==typeof document){var c=new Xf(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID");Zf(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function ag(a,b,c,d){(a=C[a])||"undefined"===typeof document||(a=(new Xf(document)).get(b));return a?Tf(a,c,d):null}
function bg(a){var b=void 0===b?!1:b;var c=Rf(String(C.location.href)),d=[];if($f(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?C.__SAPISID:C.__APISID;e||"undefined"===typeof document||(e=new Xf(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?Tf(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Zf(b)&&((b=ag("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=ag("__3PSAPISID","__Secure-3PAPISID",
"SAPISID3PHASH",a))&&d.push(a))}return 0==d.length?null:d.join(" ")}
;function cg(a){Oc.call(this);var b=this;this.A=this.i=0;this.Ea=null!=a?a:{Ha:function(e,f){return setTimeout(e,f)},
xa:function(e){clearTimeout(e)}};
var c,d;this.l=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.o=function(){return B(function(e){return A(e,dg(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.A||eg(this)}
y(cg,Oc);function fg(){var a=gg;cg.g||(cg.g=new cg(a));return cg.g}
cg.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Ea.xa(this.A);delete cg.g};
cg.prototype.ya=function(){return this.l};
function eg(a){a.A=a.Ea.Ha(function(){var b;return B(function(c){if(1==c.g)return a.l?(null==(b=window.navigator)?0:b.onLine)?c.O(3):A(c,dg(a),3):A(c,dg(a),3);eg(a);c.g=0})},3E4)}
function dg(a,b){return a.s?a.s:a.s=new Promise(function(c){var d,e,f,g;return B(function(h){switch(h.g){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,va(h,2,3),d&&(a.i=a.Ea.Ha(function(){d.abort()},b||2E4)),A(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.B=[h.i];h.o=0;h.s=0;a.s=void 0;a.i&&(a.Ea.xa(a.i),a.i=0);g!==a.l&&(a.l=g,a.l?Pc(a,"networkstatus-online"):Pc(a,"networkstatus-offline"));c(g);xa(h);break;case 2:wa(h),g=!1,h.O(3)}})})}
;var hg=/^[6-9]$/,ig=/<\/?(?:b|em)>/gi;function jg(a){this.g=a}
var kg=new jg({});function lg(a){a=mg(a);return Bb(a)}
function ng(a){a=mg(a);return $a(a)}
function mg(a){return null===a?"null":void 0===a?"undefined":a}
;function og(a,b,c,d,e,f){this.A=a instanceof zb?a:lg(a);this.g=b;this.u=c;this.s=d;this.i=e;this.m=f||kg;this.o=!1;switch(this.s){case 0:case 32:case 38:case 400:case 407:case 35:case 33:case 41:case 34:case 44:case 45:case 40:case 46:case 56:case 30:case 94:case 92:case 93:case 411:case 410:case 71:this.o=!0}}
og.prototype.getHtml=function(){return Ab(this.A).toString()};
og.prototype.l=function(){return this.u};
og.prototype.getType=function(){return this.s};var pg=/^\s/,qg=/\s+/,rg=/\s+/g,sg=/^\s+|\s+$/g,tg=/^\s+$/,ug=/<[^>]*>/g,vg=/&nbsp;/g,wg=/&#x3000;/g,xg=[/&/g,/&amp;/g,/</g,/&lt;/g,/>/g,/&gt;/g,/"/g,/&quot;/g,/'/g,/&#39;/g,/{/g,/&#123;/g],yg=document.getElementsByTagName("head")[0],zg=0,Ag=1;function Bg(a){var b={};if(a)for(var c=0;c<a.length;++c)b[a[c]]=!0;return b}
function Cg(a,b){function c(){return b}
void 0===b&&(b=a);return{Ob:c,Yd:function(){return a},
zf:c,bi:function(){return a<b},
equals:function(d){return d&&a==d.Yd()&&b==d.zf()}}}
function Dg(a,b,c,d){if(null==b||""===b){if(!d)return;b=""}c.push(a+"="+encodeURIComponent(String(b)))}
function Eg(a,b){var c=[],d;for(d in a)Dg(d,a[d],c,b);return c.join("&")}
function Fg(a){var b={},c=Math.max(a.indexOf("?"),a.indexOf("#"));a=a.substr(c+1);if(0<=c&&a){c=a.split("&");a=0;for(var d;a<c.length;++a)if(d=c[a])d=d.split("="),b[d[0]]=d[1]||""}return b}
function Gg(a){return!!a&&!tg.test(a)}
function Hg(a){for(var b=xg.length,c=0;c<b;c+=2)a=a.replace(xg[c],xg[c+1].source);return a}
function Ig(a){for(var b=xg.length,c=0;c<b;c+=2)a=a.replace(xg[c+1],xg[c].source);a=a.replace(vg," ");return a.replace(wg,"\u3000")}
function Jg(a,b){return a&&(-1<a.indexOf(" ")||qg.test(a))?(a=a.replace(rg," "),a.replace(b?sg:pg,"")):a}
function Kg(a,b,c){c&&(a=a.toLowerCase(),b=b.toLowerCase());return b.length<=a.length&&a.substring(0,b.length)==b}
function Lg(){}
function Mg(a){var b=Ng;if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;c<d;++c)if(b[c]===a)return c;return-1}
function Og(){return 0}
function Pg(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Qg(a,b){a+="";b.length&&(a+="i"+b.join("i"),a+="k"+(-1!=ob(b,173)?14:1));return a}
;function Rg(a,b,c){this.g=a;this.J=b;this.D=c||"";this.u=(zg++).toString(36);this.B=this.g.toLowerCase();this.l=Jg(this.B);this.F={};this.A={};this.o=this.I=this.m=!1;this.H=1}
Rg.prototype.getId=function(){return this.u};
function Sg(a){a=parseInt(a.u,36);return isNaN(a)?-1:a}
function Tg(a,b,c,d){a.m||(a.F[b]=c,d&&(a.A[b]=c))}
;function Ug(a,b,c,d,e,f){this.l=a;this.g=b;this.i=c;this.o=d;this.m=e;this.u=f;this.s=!0;this.g?this.g.length&&33==this.g[0].getType()&&(this.m=this.s=!1):this.g=[];this.i||(this.i=kg)}
Ug.prototype.getType=function(){return this.s};function Vg(){}
Vg.prototype.Dd=function(){};
Vg.prototype.redirect=function(){};
Vg.prototype.Cd=function(){return""};
Vg.prototype.me=function(){};function Wg(){this.l={};this.g={}}
Wg.prototype.set=function(a,b){this.l[a]=b};
Wg.prototype.has=function(a){return!!this.l[a]};
function Xg(a,b,c){b in a.g||(a.g[b]=[]);a.g[b].push(c)}
;function Yg(a,b,c,d,e,f){this.s=a;this.A=b;this.B=c;this.o=d;this.i=e;this.config_=f;this.u={};this.m={};this.g=[];this.l=!1;a=this.A;c=a.l;for(var g in c)if(d=g,b=c[d])this.u[d]=b,this.g.push(b);a=a.g;for(g in a){d=g;b=a[d];c=d;d=b;e=this.m[c]||[];for(f=0;f<d.length;++f)if(b=d[f])e.push(b),this.g.push(b);this.m[c]=e}this.g.sort(Zg);for(g=0;a=this.g[g++];)a.sa(this.B,this.o);this.s.me(this.o);this.o.Ye();for(g=0;a=this.g[g++];)a.P(this);for(g=0;a=this.g[g++];)a.ga(this.config_);for(g=0;a=this.g[g++];)a.nb(this.config_);
for(g=0;a=this.g[g++];)a.R(this.config_);this.l=!0}
function $g(a){if(a.l){for(var b=0,c;c=a.g[b++];)c.Ga();a.l=!1}}
Yg.prototype.isActive=function(){return this.l};
Yg.prototype.get=function(a){return this.u[a]};
function ah(a,b){return a.m[b]||[]}
function Zg(a,b){a=Mg(a.getType());b=Mg(b.getType());return 0>a?1:0>b?-1:a-b}
var Ng=[127,551,149,134,494,123,121,126,553,118,115,128,160,173,119,116,152,153,129,120,374,124,158,155,131,130,147,570,141,143,138,144,139,140,135,136];function N(a){this.l=a}
n=N.prototype;n.sa=function(){};
n.P=function(){};
n.ga=function(){};
n.nb=function(){};
n.R=function(){};
n.getType=function(){return this.l};
n.Ga=function(){};function bh(){this.l=149;this.g={};this.i=0}
y(bh,N);n=bh.prototype;n.P=function(a){this.A=a.get(127)};
n.R=function(a){if(a.connectionType==this.qb()){this.config_=a;var b=this.A.i,c="https:"==document.location.protocol;this.s=b.protocol||"http"+(c?"s":"")+"://";this.o=b.host||"clients1."+a.ic;this.u=b.Ac;this.m=b.He}};
n.Ga=function(){ch(this);this.i=0};
n.Fe=function(a,b,c){dh(this,a.getId(),a.g,b,c);return!0};
n.qb=function(){return 1};
n.Tc=function(){return this.i};
n.Pc=function(a){var b=this.g[a];b&&(eh(b),delete this.g[a])};
function dh(a,b,c,d,e){a.config_.Od||ch(a);var f=new XMLHttpRequest;c=a.s+a.o+a.u+"?"+(a.m?a.m+"&":"")+(d?d+"&":"")+"q="+encodeURIComponent(c)+"&xhr=t&xssi=t";f.open("GET",c,!0);f.withCredentials=!0;a.config_.visitorData&&f.setRequestHeader("X-Goog-Visitor-Id",a.config_.visitorData);f.onreadystatechange=function(){if(4==f.readyState){switch(f.status){case 403:a.i=1E3;break;case 302:case 500:case 502:case 503:++a.i;break;case 200:var g=f.responseText;0==g.lastIndexOf(")]}'\n",0)&&(g=g.substring(5));
e(JSON.parse(g));default:a.i=0}a.Pc(b)}};
a.g[b]=f;f.send(null)}
function ch(a){for(var b in a.g)eh(a.g[b]);a.g={}}
function eh(a){a.onreadystatechange=Lg;var b=a.readyState;0!=b&&4!=b&&a.abort()}
;var fh;function gh(){this.l=153}
y(gh,N);function hh(a,b){a.length&&b.push({getType:function(){return 507},
position:2})}
;function ih(a){this.o=a}
ih.prototype.getType=function(){return this.o};
ih.prototype.s=function(){return!0};function jh(a){this.l=152;this.D=a}
I(jh,N);jh.prototype.Ab=Lg;var kh=cc(),lh;if(lh=kh){for(var mh=hc(),nh=0,oh=Qa(String(mh)).split("."),ph=Qa("10").split("."),qh=Math.max(oh.length,ph.length),rh=0;0==nh&&rh<qh;rh++){var sh=oh[rh]||"",th=ph[rh]||"";do{var uh=/(\d*)(\D*)(.*)/.exec(sh)||["","","",""],vh=/(\d*)(\D*)(.*)/.exec(th)||["","","",""];if(0==uh[0].length&&0==vh[0].length)break;nh=Ra(0==uh[1].length?0:parseInt(uh[1],10),0==vh[1].length?0:parseInt(vh[1],10))||Ra(0==uh[2].length,0==vh[2].length)||Ra(uh[2],vh[2]);sh=uh[3];th=vh[3]}while(0==nh)}lh=0<=nh}
var wh=lh,xh=ic();xh&&hc();var yh=bc(),zh=-1!=Xb().toLowerCase().indexOf("webkit")&&!J("Edge");ec();var Ah=fc(),Bh=If()&&ec(),Ch=jc(),Dh=Vb&&Yb&&Yb.platform?"macOS"===Yb.platform:J("Macintosh"),Eh=If();var Fh;xb("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));function Gh(a,b){b?a.setAttribute("role",b):a.removeAttribute("role")}
function Hh(a,b,c){Array.isArray(c)&&(c=c.join(" "));var d="aria-"+b;""===c||void 0==c?(Fh||(c={},Fh=(c.atomic=!1,c.autocomplete="none",c.dropeffect="none",c.haspopup=!1,c.live="off",c.multiline=!1,c.multiselectable=!1,c.orientation="vertical",c.readonly=!1,c.relevant="additions text",c.required=!1,c.sort="none",c.busy=!1,c.disabled=!1,c.hidden=!1,c.invalid="false",c)),c=Fh,b in c?a.setAttribute(d,c[b]):a.removeAttribute(d)):a.setAttribute(d,c)}
function Ih(a){var b=a.getAttribute("aria-activedescendant");return(9==a.nodeType?a:a.ownerDocument||a.document).getElementById(null==b||void 0==b?"":String(b))}
function Jh(a,b){var c="";b&&(c=b.id);Hh(a,"activedescendant",c)}
;var Kh=void 0!=document.documentElement.style.opacity,Lh={rtl:"right",ltr:"left"};function Mh(a,b){try{if(a.setSelectionRange)a.setSelectionRange(b,b);else if(a.createTextRange){var c=a.createTextRange();c.collapse(!0);c.moveStart("character",b);c.select()}}catch(d){}}
function Nh(a){for(var b=0,c=0;a;){b+=a.offsetTop;c+=a.offsetLeft;try{a=a.offsetParent}catch(d){a=null}}return{Ec:b,Ta:c}}
function Oh(a){try{return Ph(a).activeElement==a}catch(b){}return!1}
function O(a,b){a=document.createElement(a);b&&(a.className=b);return a}
function P(a){return O("div",a)}
function Qh(a,b){a.innerHTML!=b&&Cb(a,lg(b))}
function Rh(a,b){a.dir!=b&&(a.dir=b,a.style.textAlign=Lh[b])}
function Sh(a){a&&(a.preventDefault&&a.preventDefault(),a.returnValue=!1);return!1}
function Th(a){if(a=a||window.event)a.stopPropagation&&a.stopPropagation(),a.cancelBubble=a.cancel=!0;return Sh(a)}
function Uh(a){var b=O("a");nb(b,"#ifl");b.className="sbsb_i sbqs_b";a.appendChild(b);return b}
function Vh(a){var b=a||window;a=b.document;var c=b.innerWidth;b=b.innerHeight;if(!c){var d=a.documentElement;d&&(c=d.clientWidth,b=d.clientHeight);c||(c=a.body.clientWidth,b=a.body.clientHeight)}return{Oe:c,de:b}}
function Ph(a){return a?a.ownerDocument||a.document:window.document}
function Wh(a){return a?(a=Ph(a),a.defaultView||a.parentWindow):window}
function Xh(){return Kh?"opacity":"filter"}
function Yh(a){return Kh?a+"":"alpha(opacity="+Math.floor(100*a)+")"}
;function Zh(){this.o=507;$h(this)}
y(Zh,ih);Zh.prototype.g=function(){return this.i};
function ai(a,b,c,d){$h(a,c,d);Cb(a.l,ed(id,b))}
function $h(a,b,c){a.i=P("sbfl_a");a.l=P("sbfl_b");a.l.onclick=function(){c&&c.openReportForm&&c.openReportForm(b)};
a.i.appendChild(a.l)}
;var bi=[30,35,33,41],ci=[39,10,21];function di(a,b){jh.call(this,507);this.m=a;this.g=b}
y(di,jh);di.prototype.P=function(a){this.i=a.get(128)};
di.prototype.sa=function(a,b){b.addRule(".sbfl_a","font-size:12px;font-style:italic;color:#777;margin:-5px -18px -5px 0");b.addRule(".sbsb_c[dir=ltr] .sbfl_a","text-align:right");b.addRule(".sbsb_c[dir=rtl] .sbfl_a","text-align:left");b.addRule(".sbfl_a:hover","color:#333;cursor:pointer");b.addRule(".sbfl_b","background:rgba(255,255,255,.9)")};
di.prototype.Ib=function(){return new Zh};
function ei(a){return a.map(function(b){return{label:b.g}})}
di.prototype.Bb=function(a,b){a=qb(this.i.m,function(c){a:if(0<=bi.indexOf(c.getType()))c=!1;else{c=c.i||[];for(var d=w(ci),e=d.next();!e.done;e=d.next())if(0<=c.indexOf(e.value)){c=!1;break a}c=!0}return c},this);
0<a.length?(ai(b,this.m,ei(a),this.g),b.g().style.display=""):b.g().style.display="none"};var Vc=ha(['<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.16667 14.1667H7.50001V6.66667H9.16667V14.1667ZM12.5 6.66667H10.8333V14.1667H12.5V6.66667ZM15.8333 3.33333V4.16667H15V17.5H5.00001V4.16667H4.16667V3.33333H7.50001V2.5H12.5V3.33333H15.8333ZM14.1667 4.16667H5.83334V16.6667H14.1667V4.16667Z" fill="#030303"/></svg>']),fi=ha(["#ps"]);
function gi(a,b,c,d,e,f,g){this.o=35;this.X=b;this.W=c;this.H=d;this.D=e;this.J=f;this.Y=g;this.B=!0;this.A=!1;this.i=P("sbpqs_d");this.u=P();this.K=O("span","sbpqs_a");this.J&&(this.l=O("a"),nb(this.l,fb(fi)),this.l.className="sbsb_i",this.I=P("fr sbpqs_b"),this.u.appendChild(this.I),this.I.appendChild(this.l),this.m=P("sbpqs_c"),Cb(this.m,ed(id,this.Y)),Gh(this.m,"alert"));this.u.appendChild(this.K);this.i.appendChild(this.u);this.m&&this.i.appendChild(this.m)}
y(gi,ih);gi.prototype.g=function(){return this.i};
gi.prototype.s=function(){return this.B};
function hi(a,b,c,d,e){a.A=!1;a.B=!0;a.ca=c;a.F=d;a.u.style.display="";Cb(a.K,ed(id,b));a.J&&(a.m.style.display="none",b=Uc(),a.l.textContent="",a.l.appendChild(b),a.l.onclick=function(f){ii(a,f)},a.l.title=e)}
function ii(a,b){a.A=!0;ji(a.X,a.ca,function(){a.A&&(ki(a.W),a.i.onmouseover=a.i.onmouseout=a.i.onclick=null,a.u.style.display="none",a.m.style.display="",a.D.i==a.F&&li(a.H),a.D.g==a.F&&(mi(a.D),ni(a.H)),a.B=!1)});
Th(b)}
;function oi(){jh.call(this,35)}
y(oi,jh);n=oi.prototype;n.sa=function(a,b){b.addRule(".sbpqs_a","color:#52188c");b.addRule(".sbdd_a[dir=ltr] .sbpqs_a","padding-right:8px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_a","padding-left:8px");b.addRule(".sbpqs_c","color:#666;line-height:22px")};
n.P=function(a){this.g=a.get(123);this.i=a.get(118);this.m=a.get(189);this.u=a.get(127);this.B=a.get(128)};
n.ga=function(a){this.R(a)};
n.R=function(a){this.A=a.vd;this.s=a.qd;this.o=a.pd};
n.Ib=function(){return new gi(this.u,this.m,this.g,this.i,this.B,this.A,this.o)};
n.Bb=function(a,b){hi(b,a.getHtml(),a.g,a.l(),this.s)};
n.Ab=function(a,b,c){pi(c,b.g,1)};function qi(a,b,c,d,e,f,g,h){this.o=35;this.X=b;this.W=c;this.H=d;this.D=e;this.J=g;this.Y=h;this.B=!0;this.A=!1;this.l=P("sbpqs_d");this.m=P();this.K=O("span","sbpqs_a");this.J&&(this.u=O("a"),nb(this.u,"#ps"),this.u.className="sbsb_i",this.I=P("fr sbpqs_b"),this.m.appendChild(this.I),this.I.appendChild(this.u),this.i=P("sbpqs_c"),Cb(this.i,ed(id,this.Y)),Gh(this.i,"alert"));this.m.appendChild(this.K);this.l.appendChild(this.m);this.i&&this.l.appendChild(this.i)}
y(qi,ih);qi.prototype.g=function(){return this.l};
qi.prototype.s=function(){return this.B};
qi.prototype.ea=function(a){this.A=!0;ji(this.X,this.ca,F(this.na,this));return Th(a)};
qi.prototype.na=function(){this.A&&(ki(this.W),this.l.onmouseover=this.l.onmouseout=this.l.onclick=null,this.m.style.display="none",this.i.style.display="",this.D.i==this.F&&li(this.H),this.D.g==this.F&&(mi(this.D),ni(this.H)),this.B=!1)};function ri(){jh.call(this,35)}
y(ri,jh);n=ri.prototype;n.sa=function(a,b){b.addRule(".sbpqs_a","color:#52188c");b.addRule(".sbdd_a[dir=ltr] .sbpqs_a","padding-right:8px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_a","padding-left:8px");b.addRule(".sbdd_a[dir=ltr] .sbpqs_b","padding-right:3px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_b","padding-left:3px");b.addRule(".sbpqs_c","color:#666;line-height:22px")};
n.P=function(a){this.g=a.get(123);this.i=a.get(118);this.m=a.get(189);this.u=a.get(127);this.B=a.get(128)};
n.ga=function(a){this.R(a)};
n.R=function(a){this.A=a.vd;this.s=a.qd;this.o=a.pd};
n.Ib=function(a){return new qi(this.u,this.m,this.g,this.i,this.B,a,this.A,this.o)};
n.Bb=function(a,b){var c=a.getHtml(),d=a.g;a=a.l();var e=this.s;b.A=!1;b.B=!0;b.ca=d;b.F=a;b.m.style.display="";Cb(b.K,ed(id,c));b.J&&(b.i.style.display="none",Cb(b.u,ed(id,e)),b.u.onclick=F(b.ea,b))};
n.Ab=function(a,b,c){pi(c,b.g,1)};function si(){this.l=134;this.i={}}
y(si,N);n=si.prototype;n.P=function(a){this.m=a.i.getId()};
n.ga=function(){"google"in window||(window.google={});"sbox"in window.google||(window.google.sbox={});window.google.sbox["d"+this.m]=F(this.Te,this)};
n.R=function(a){this.A=ng("//"+(a.rd||"clients1."+a.ic)+"/complete/deleteitems");this.s=a.zd;this.o=a.authuser;this.u=a.clientName};
n.Ga=function(){ti(this)};
function ti(a){a.g&&(ui.removeChild(a.g),a.g=null)}
n.Te=function(a){ti(this);a=a[0];var b=this.i[a];b&&(delete this.i[a],b())};
var ui=yg;function vi(){this.l=189}
y(vi,N);vi.prototype.P=function(a){this.g=a.get(134);this.i=a.get(123);this.s=a.get(118);this.A=a.get(553)};
vi.prototype.ga=function(a){this.o=a.uf};
vi.prototype.R=function(a){this.m=a.zd;this.u=!(!this.g||!this.m);this.o&&(a=this.s.g?3E3:0,window.setTimeout(F(this.B,this),a),this.o=!1)};
function ji(a,b,c){a=a.g;a.i[b]=c;c=new Map;"1"===Fg(window.location.search).ssl_dbg&&c.set("ssl_dbg","1");c.set("delq",b);c.set("client",a.u);c.set("callback","google.sbox.d"+a.m);b=a.A;c.set("tok",a.s);a.o&&c.set("authuser",a.o);a.g=O("script");b=ld(b,c);Eb(a.g,b);ui.appendChild(a.g)}
vi.prototype.B=function(){var a=wi(this.A,"",void 0,void 0,!0);xi(this.i,a);yi(this.i)};function zi(){this.l=156}
y(zi,N);zi.prototype.P=function(a){this.m=a.get(189)};
zi.prototype.i=function(a){var b=this.m,c={};b.u&&(c.tok=b.m);"1"===Fg(window.location.search).ssl_dbg&&(c.ssl_dbg="1");for(var d in c)Tg(a,d,c[d]);return 1};
zi.prototype.g=function(){return 12};function Ai(a){this.l=156;this.o=a;this.m=null}
I(Ai,N);Ai.prototype.i=function(a){var b=1,c=a.D;a=Gg(a.g);var d="focus"==c||"input"==c;c=this.o.SEARCHBOX_INPUT_AUTOFOCUS&&"mousedown"==c&&this.m&&!this.m.isVisible();a||!d&&!c||(b=2);return b};
Ai.prototype.g=function(){return 2};
Ai.prototype.P=function(a){this.m=a.get(128)};function Bi(){this.l=157}
y(Bi,N);function Ci(){this.l=156}
y(Ci,N);Ci.prototype.i=function(a){var b=Fg(Gb(window.location.href));b.v&&Tg(a,"video_id",b.v,!0);return 1};
Ci.prototype.g=function(){return 24};function Di(a,b,c){this.l=598;this.I=b;this.A=c;this.s="";this.i=a;this.u=!1}
y(Di,N);Di.prototype.P=function(a){this.F=a.get(553);this.g=a.get(128);this.D=a.get(118);this.B=a.get(150)};
Di.prototype.ga=function(a){this.m=a.od;this.H=a.rf};
function Ei(a,b){a.s=b;a.F.ud(a.s)}
function Fi(a){if(!a.I||a.g.isVisible())return!1;var b=a.D.g;if(!b||0==b.length)return!1;if(b!=a.m)return"always"==a.A&&a.g&&a.g.m&&0<a.g.m.length&&Gi(a.g),!1;if(a.i&&a.i.getRefinementsTuple){var c=a.i.getRefinementsTuple();if(c){var d=c[0];"ClearBySearchbox"==d?a.o=[]:"FromSearchResponse"==d&&a.u&&(a.o=c[1],a.u=!1)}}if(!a.o||0>=a.o.length)return a.g&&a.g.m&&0<a.g.m.length?(Gi(a.g),!1):"always"==a.A||"fallback"==a.A;c=[];for(var e=d=0;e<a.o.length&&!(c.length>=a.H);++e){var f=a.o[e];f&&0<f.length&&
c.push(new og(a.B.bold(b,f),f,d++,0,[71],null))}0<c.length&&Hi(a.g,c,!1);return!1}
;function Ii(){this.l=156}
y(Ii,N);Ii.prototype.P=function(a){this.m=a.get(598)};
Ii.prototype.i=function(a){var b=this.m,c;a:{if(b.i&&b.i.getPreviousQuery&&(c=b.i.getPreviousQuery()))break a;c=null}var d;d=(d=Fg(Gb(window.location.href)))?(d=d.search_query||d.q)&&d==b.m:!1;c&&c!=b.m?(b.u=!0,b.m=c,Ei(b,c)):d||""==b.s?d&&""==b.s&&Ei(b,b.m):Ei(b,"");return"mousedown"!=a.D&&"focus"!=a.D||!Fi(this.m)?1:2};
Ii.prototype.g=function(){return 46};function Ki(){this.l=149;this.i=yg;this.g={}}
y(Ki,N);n=Ki.prototype;n.P=function(a){this.D=a.get(127);this.u=a.i.getId()};
n.ga=function(){"google"in window||(window.google={});"sbox"in window.google||(window.google.sbox={})};
n.R=function(a){this.config_=a;a.connectionType==this.qb()&&(a=this.D.i,this.s=a.protocol,this.o=a.host,this.B=a.Ac,this.A=a.He,this.F="https:"==document.location.protocol,Li(this,F(this.Ue,this)),(new Image).src=this.s+this.o+"/generate_204")};
n.Ga=function(){Li(this,null);Mi(this)};
n.Fe=function(a,b,c,d){c=a.getId();var e=a.g;this.config_.Od||Mi(this);b=this.s+this.o+this.B+"?"+(this.A?this.A+"&":"")+(b?b+"&":"");a=[];Dg("q",e,a,!0);this.config_.Ne||Dg("callback","google.sbox.p"+this.u,a);if(this.F){e="";for(var f=4+Math.floor(32*Math.random()),g,h=0;h<f;++h)g=.3>Math.random()?48+Math.floor(10*Math.random()):(.5<Math.random()?65:97)+Math.floor(26*Math.random()),e+=String.fromCharCode(g);Dg("gs_gbg",e,a)}e=O("script");this.config_.pg&&e.setAttribute("nonce",this.config_.pg);
Eb(e,ng(b+a.join("&")));e.charset="utf-8";this.g[c]=e;this.m=d;this.i.appendChild(e);return!0};
n.qb=function(){return 0};
n.Tc=function(){return 0};
n.Pc=function(a){var b=this.g[a];b&&(this.i.removeChild(b),delete this.g[a])};
function Mi(a){for(var b in a.g)a.i.removeChild(a.g[b]);a.g={};a.m=null}
n.Ue=function(a){this.m&&this.m(a)};
function Li(a,b){b||(b=Lg);var c=window.google;a.config_.Ne?c.ac.h=b:c.sbox["p"+a.u]=b}
;function Ni(){this.l=115;this.o={}}
y(Ni,N);n=Ni.prototype;n.P=function(a){this.m=a.get(116);if(a=ah(a,154))for(var b,c=0;b=a[c++];)this.o[Oi]=b};
n.R=function(){this.g=!1};
n.Ga=function(){Pi(this)};
n.isVisible=function(){return this.g};
n.getHeight=function(){return this.g?this.m.getHeight():0};
function Pi(a){if(a.g){var b=a.m;b.B=0;Qi(b.o.m,!1);Ri(b.K,!1);Ri(b.i,!1);Si(b,b.W);Ti(b.F,9);a.g=!1}}
var Ui={ee:"left",lg:!0,pb:null,marginWidth:0};function Vi(){this.l=118}
y(Vi,N);n=Vi.prototype;n.P=function(a){this.m=a.get(119);this.A=a.get(130);this.X=a.get(145);this.s=a.get(117);this.I=a.get(123);this.B=a.get(374);this.F=a.get(121);this.Y=a.get(553);this.i=a.get(128);this.J=a.get(139);this.ca=a.get(173);this.ea=ah(a,160)};
n.ga=function(a){this.config_=a;this.g=this.o=this.m.g.value||""};
n.R=function(a){this.config_=a;this.D=this.K=!1;Wi(this)};
function Xi(a){var b={};Ti(a.s,11,b);!b.cancel&&a.config_.Wf&&od(function(){var c=a.i;yi(c.D);Yi(c)})}
function Zi(a,b){if(0==a.config_.Dc||2==a.config_.Dc||3==a.config_.Dc&&!a.o&&!b)return!1;a:{if($i(a.i)&&(null!=a.i.i?b=aj(a.i):(b=a.i,b=$i(b)?b.m[0]:null),b.o))break a;b=null}var c;if(c=b){if(c=b=b.g)c=a.o,c=!(c||b?c&&b&&c.toLowerCase()==b.toLowerCase():1);c?(a.o=a.g,Kg(b,a.g,!0)&&(b=a.g+b.substr(a.g.length)),bj(a,b,Cg(b.length),"",!0),cj(a,b,!0),c=!0):c=!1}return c?(a.B.add(8),!0):!1}
function bj(a,b,c,d,e){a.config_.hf&&!a.i.isVisible()&&"mousedown"==d&&dj(a.i,c,d);var f=!1,g=!1;if(b!=a.g||"onremovechip"==d)Kg(d,"key")?a.B.add(1):"paste"==d&&a.B.add(2),f=!0,ej(a,b),Ti(a.s,1,{Xb:d,pb:a.u}),g=G(),a.H||(a.H=g),a.W=g,Gg(b)&&(e=!0),g=!0;b=wi(a.Y,b,c,d);switch(b.H){case 3:b.o=!0;case 2:e=!0;break;case 4:e=!1}e?(f&&(f=a.i,f.s&&!f.A&&(f.A=window.setTimeout(F(f.clear,f),f.config_.Xf))),a.K&&Tg(b,"gs_is",1),xi(a.I,b)):g&&(a.i.clear(),yi(a.I));Ti(a.s,2,{Xb:d})}
function ni(a){a=a.m;if(!a.u)try{a.g.focus(),a.u=!0,fj(a)}catch(b){}}
function gj(a,b){ej(a,b);hj(a.m);Ti(a.s,4,{pb:a.u,input:b})}
function li(a){a.g!=a.o&&ej(a,a.o);Ti(a.s,5,{input:a.o,Ug:a.i.m,pb:a.u});hj(a.m)}
n.getHeight=function(){return this.m.getHeight()};
function ij(a){if(a.ca){if(a.config_.Wc)return!0;for(var b=0,c;c=a.ea[b++];)if(c.isEnabled())return!0}return!1}
n.clear=function(){this.g&&(ej(this,""),this.m.clear(),Ti(this.s,1),Ti(this.s,16),this.i.clear())};
function jj(a,b){var c=a.m.s.Ob();a.u==b?$i(a.i)&&c==a.g.length&&(null!=a.i.i?a.config_.mc&&!a.config_.Na&&pi(a.F,aj(a.i).g,6):a.config_.le&&Zi(a,!0)):a.A&&0==c&&a.A.g()}
function kj(a){var b=a.m.s.Ob();return a.config_.Na&&$i(a.i)&&null!=a.i.i&&b===a.g.length}
function cj(a,b,c){a.g=b||"";Wi(a);hj(a.m);c||Ti(a.s,4,{pb:a.u,input:a.g})}
function Wi(a){var b=lj(a.X,a.g);if(b!=a.u){var c=a.m;c.o&&(c.o.dir=b);c.g.dir=b;c.B&&(c.B.dir=b);if(c.Cb){c=c.g;var d=0,e=c.style;"INPUT"!=c.nodeName&&(d+=1);e.left=e.right="";e["rtl"==b?"right":"left"]=d+"px"}a.u=b}}
function ej(a,b){a.g=a.o=b||"";Wi(a)}
;function mj(){this.l=128}
y(mj,N);n=mj.prototype;n.P=function(a){this.o=a.get(129);this.K=a.get(145);this.I=a.get(115);this.D=a.get(123);this.u=a.get(118);this.ca=a.get(147);this.W=ah(a,153);this.Y=a.get(553);this.H=a.get(184);this.ea=a.get(157)};
n.ga=function(){this.W.sort(Og)};
n.R=function(a){this.config_=a;this.i=this.g=null;this.s=this.F=!1;this.X=!0;this.B="";this.J=0};
n.Ga=function(){this.A&&(window.clearTimeout(this.A),this.A=null);this.m=null;Yi(this)};
function Hi(a,b,c){var d=a.H&&a.H.i(b);a.clear();a.m=b;var e=$i(a)?b[0].g:a.u.o;a:{var f=e;if(a.K.g){for(var g=!1,h=!1,k=0,l;k<f.length;++k)if(l=f.charAt(k),!nj.test(l)&&(oj.test(l)?h=!0:g=!0,h&&g)){f=!0;break a}f=!1}else f=!0}f&&(e=a.u.o);a.B=lj(a.K,e);if(a.config_.Fg&&$i(a)&&c&&!Eh){a.F=!0;c=a.o;if(c.o){c.F=a.B;pj(c);e=!1;for(f=0;g=b[f++];)qj(c,g)&&(e=!0);c=e}else c=!1;e=b[0].m.g.a||"";e=Ig(e);b=a.ca;f=0;e&&(b.g||rj(b),sj(b),e in b.m?f=b.m[e]:(Qh(b.g,Hg(e)),b.m[e]=f=b.g.offsetWidth,Qh(b.g,"")));
a.J=f}else{a.F=!1;b=a.o;if(a.F||!a.config_.Qg&&!$i(a))c=[];else{c=[];e=[];for(f=0;a.W[f++]&&!hh(a.m,e););(f=e?e.length:0)&&(f-=tj(e,c,0));for(g=0;g<a.m.length;++g)c.push(a.m[g]);f&&(f-=tj(e,c,1));a.config_.Tf&&c.push(1);f&&(f-=tj(e,c,2));f&&tj(e,c,3);a.config_.be&&c.push(2);a.ea&&1<c.length&&5==c[0].getType()&&c.splice(1,0,3)}if(b.o){b.F=a.B;pj(b);e=!1;for(f=0;g=c[f++];)if(1==g)g=b,g.B?g.B.style.display="":(h=O("li"),k=h.style,k.position="relative",k.textAlign="center",k.whiteSpace="nowrap",h.dir=
g.H,g.i=P(),g.i.className="sbsb_g",g.config_.be&&(g.i.style.paddingBottom="1px"),uj(g,g.config_.Ng,g.i,13),g.config_.Sf?uj(g,g.config_.Rd,g.i,8):g.config_.Uf&&uj(g,g.config_.Og,g.i,14),h.appendChild(g.i),h.onmousedown=F(g.nd,g),h.className=g.config_.Cc,g.B=h),g.g.appendChild(g.B);else if(2==g)if(g=b,g.A)g.A.style.display="";else{h=P("sbsb_j "+g.config_.Cc);k=O("a");k.id="sbsb_f";nb(k,"http://www.google.com/support/websearch/bin/answer.py?hl="+g.config_.ad+"&answer=106230");var m=g.config_.qg;l={Gg:!0};
l=void 0===l?{}:l;m instanceof zb?l=m:(m=String(m).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;"),l.oi&&(m=m.replace(/(^|[\r\n\t ]) /g,"$1&#160;")),l.Gg&&(m=m.replace(/(\r\n|\n|\r)/g,"<br>")),l.ri&&(m=m.replace(/(\t+)/g,'<span style="white-space:pre">$1</span>')),l=Bb(m));Cb(k,l);h.appendChild(k);h.onmousedown=F(g.nd,g);g.A=h;g.o.appendChild(g.A)}else 3==g?(g=b,h=g.ca.pop(),h||(h=O("li"),Hh(h,"hidden",!0),h.l=!0,k=O("div","sbsb_e"),h.appendChild(k)),
g.g.appendChild(h)):qj(b,g)&&(e=!0);c=e}else c=!1;a.J=0}d&&(a.i=a.H.l(),vj(a,a.H.g()));c?Gi(a):a.clear()}
function vj(a,b){if(a.g!=b){var c=a.g;a.g=b;wj(a,c)}}
n.De=function(){if($i(this))if(this.s){var a=this.g;this.g==this.m.length-1?this.i=this.g=null:null==this.g?this.g=0:++this.g;this.i=this.g;xj(this,a,F(this.De,this))}else Gi(this)};
n.Ee=function(){if($i(this))if(this.s){var a=this.g;this.m&&0!=this.g?null==this.g?this.g=this.m.length-1:--this.g:this.i=this.g=null;this.i=this.g;xj(this,a,F(this.Ee,this))}else Gi(this)};
n.isVisible=function(){return this.s};
n.isEnabled=function(){return this.X};
function aj(a){return null!=a.i?a.m[a.i]:null}
function $i(a){return!(!a.m||!a.m.length)}
function Gi(a){if(!a.s){a:{var b=a.I,c=Oi;if(c in b.o){if(b.i){if(c==Oi)break a;Pi(b);b.i.i.s=!1}b.i=b.o[c];c=b.m;b=b.i;b!=c.u&&(c.u=b,b=b.g.o,c.I?b!=c.I&&c.s.replaceChild(b,c.I):c.s.appendChild(b),c.I=b)}}c=a.I;if(!c.g){b=c.m;var d=Pg(Ui);if(c.i){var e=c.i.i;d.pb=e.B;d.marginWidth=e.J;var f=e.config_.Vg;f||(f="rtl"==e.B?"right":"left");d.ee=f}Si(b,d.pb||b.W);e=d.marginWidth;b.X!=e&&(f=b.H.style,e?(f.width=e+"px",f.height="1px"):f.height="",b.X=e);b.ea=d.lg;b.ca=d.ee;Qi(b.o.m,!0);Ri(b.K,!0);Ri(b.i,
!0);Ti(b.F,14);b.Fd();c.g=!0}a.s=!0}}
function Yi(a){a.s&&(a.A&&(window.clearTimeout(a.A),a.A=null),Pi(a.I),a.s=!1)}
n.clear=function(){Yi(this);this.m=null;this.F=!1;null!=this.g&&yj(this.o,this.g);this.i=this.g=null;this.o.clear()};
function mi(a){null!=a.g&&yj(a.o,a.g);a.i=a.g=null}
function dj(a,b,c){if($i(a))Gi(a);else{var d=a.u.o;d&&(b=wi(a.Y,d,b||a.u.m.s,c),xi(a.D,b))}}
function tj(a,b,c){for(var d=0,e=0,f;e<a.length;++e)(f=a[e])&&f.position==c&&(3==c?f.la&&f.la(b)&&++d:(b.push(f),++d));return d}
function xj(a,b,c){var d;(d=null==a.g)||(d=(d=a.o.m[a.g])?d.s():!1);d?(wj(a,b),b=a.o,c=a.g,c=void 0===c?null:c,null===c?b.u.removeAttribute("aria-activedescendant"):(c=b.m[c])&&c.s()&&(c=c.g(),b.config_.Na&&(c=c.querySelector('[role="gridcell"]')),c&&Jh(b.u,c)),null==a.g?li(a.u):(b=a.m[a.g],b.getType(),cj(a.u,b.g))):(yj(a.o,b),c())}
function wj(a,b){null!=b&&yj(a.o,b);null!=a.g&&(b=a.o,(a=b.m[a.g])&&a.s()&&zj(a.g().parentNode,b.X))}
var Oi=Ag++;function Aj(){this.l=154}
y(Aj,N);Aj.prototype.P=function(a){this.i=a.get(128);this.g=a.get(129)};function Bj(){this.l=145;this.g=oj.test("x")}
y(Bj,N);Bj.prototype.sa=function(a){this.i=a.nc()};
function lj(a,b){var c=a.i;a.g&&(oj.test(b)?c="ltr":nj.test(b)||(c="rtl"));return c}
var nj=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$"),oj=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*(?:\\d[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])");function Cj(){this.l=117;this.i=[];this.g={Se:1}}
y(Cj,N);function Q(a,b,c,d,e,f){var g=Dj(a,b);g||(g={},a.i.push({element:b,Of:g}));var h=g[c];h||(h=g[c]=[],a=Ej(a,c,b.Se?window:Wh(b),h),"string"!==typeof c?b[c]=a:b.addEventListener?b.addEventListener(c,a,!1):b["on"+c]=a);h.push({kg:!!f,dd:!1,priority:e||0,process:d});h.sort(Fj);d.qf=c}
function Gj(a,b,c){if(a=Dj(a,b))if(a=a[c.qf])for(var d=0;b=a[d++];)if(b.process==c){b.dd=!0;break}}
function Ti(a,b,c){c=c||{};(a=a.g[b])&&a(c,c.Xb)}
Cj.prototype.ra=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)};
function Ej(a,b,c,d){return F(function(e,f){if(d.length){if(!e){e={};var g=c.event;g&&(g.keyCode&&(e.keyCode=g.keyCode),e.jg=!0)}e.Xb=f||b;f=e;for(var h,k,l=0;g=d[l++];)g.dd?k=!0:h||(g.kg?Hj(g,f):h=g.process(f));if(k)for(k=0;h=d[k];)h.dd?d.splice(k,1):++k;if(e.sc)return delete e.sc,e.jg&&(e=c.event||e),Th(e),e.returnValue=!1}},a)}
function Dj(a,b){for(var c,d=0;d<a.i.length;++d)if(c=a.i[d],c.element==b)return c.Of;return null}
function Hj(a,b){od(function(){a.process(b)})}
function Fj(a,b){return b.priority-a.priority}
;function Ij(){this.l=494;this.g={};this.o=this.u=0;this.i=-1;this.m=0;this.s={}}
y(Ij,N);Ij.prototype.R=function(){this.reset()};
Ij.prototype.reset=function(){this.g={};this.o=this.u=0;this.i=-1;this.m=0;this.s={}};function Jj(){this.l=374}
y(Jj,N);Jj.prototype.R=function(){this.reset()};
Jj.prototype.add=function(a){this.g||(this.g={});this.g[a]=!0};
Jj.prototype.reset=function(){this.g={}};function Kj(){this.l=120;this.D=-1}
y(Kj,N);Kj.prototype.P=function(a){this.H=a.get(191);this.g=a.get(123);this.m=a.get(118);this.A=a.get(374);this.i=a.get(494);this.B=a.get(126);this.o=a.get(128);this.F=ah(a,311)};
Kj.prototype.ga=function(a){this.u=a.sg};
Kj.prototype.R=function(a){this.config_=a;this.reset()};
function Lj(a,b){var c=a.m.o;var d=[];d[27]=64;d[0]=Mj(a.config_.clientName);d[28]=Mj(a.config_.requestIdentifier);d[1]=void 0==b?"":b+"";b=a.A;var e=[];for(f in b.g)e.push(parseInt(f,10));d[26]=e.join("j");var f="";null!=a.o.i?f=a.o.i+"":(b=a.B.i,(10<=b.s||3<=b.u.Tc())&&(f="o"));d[2]=f;f="";if(b=a.o.m){for(var g=e=0,h;h=b[g++];){h=Qg(h.getType(),h.i||[]);if(h!=k){1<e&&(f+="l"+e);f+=(k?"j":"")+h;e=0;var k=h}++e}1<e&&(f+="l"+e)}d[3]=f;k="";f=a.o.m;b=a.i.s;if(f)for(e=0;g=f[e++];){var l=Qg(g.getType(),
g.i||[]);l in b&&delete b[l]}if(b)for(l in b)k+=(k?"j":"")+l;d[35]=k;l=a.i.i;d[33]=-1<l?String(l):"";d[4]=Math.max(a.m.H-a.s,0);d[5]=Math.max(a.m.W-a.s,0);d[6]=a.D;d[7]=G()-a.s;d[18]=Math.max(a.m.na-a.s,0);d[8]=a.g.Db;k=a.g;k=(l=k.i)?k.g.m:0;d[25]=l?"1"+(a.config_.lf?"a":"")+(a.config_.Md?"c":""):"";d[10]=k;l=a.g;d[11]=l.i?l.g.o:0;d[12]=a.g.na;f=a.g;l=f.ca;k=f.Y;f=f.ea;d[9]=l;d[22]=k;d[17]=f;d[13]=a.g.Cb;d[14]=a.g.H;d[15]=a.g.J;l=a.g;k=[];for(b=e=0;b<=Nj;++b)f=l.I[b],0==f?e++:(e=1==e?"0j":1<e?b+"-":
"",k.push(e+f),e=0);d[16]=k.join("j");d[36]=a.g.K;l=0;for(var m in a.i.g)l++;d[30]=l;d[31]=a.i.u;d[32]=a.i.o;d[19]=Mj(a.config_.xd);m=a.i;k=a.B.g;l=!1;k&&(l=k.i.g.e||"");k=0;l?(k|=1,1<m.m&&(k|=2)):0<m.m&&(k|=2);m=k;d[20]=0==m?"":m+"";for(m=0;l=a.F[m++];)k=l.l(),Oj[k]&&(d[k]=void 0==d[k]?Mj(l.g()):"");d=d.join(".").replace(Pj,"");if(a.H&&a.u){m=c+d;b:{l=a.u;k=[];if(l)for(e=b=f=0;e<l.length;++e){g=l.charCodeAt(e);if(32>g||127<g||!Qj[g-32]){l=[];break b}f<<=6;f|=Qj[g-32]-1;b+=6;8<=b&&(k.push(f>>b-8&
255),b-=8)}l=k}f=l;l={};l.chain=Array(4);l.buffer=Array(4);l.fh=Array(4);l.padding=Array(64);l.padding[0]=128;for(k=1;64>k;++k)l.padding[k]=0;Rj(l);k=Array(64);64<f.length&&(Rj(l),Sj(l,f),f=Tj(l));for(b=0;b<f.length;++b)k[b]=f[b]^92;for(b=f.length;64>b;++b)k[b]=92;Rj(l);for(b=0;64>b;++b)l.buffer[b]=k[b]^106;Uj(l,l.buffer);l.total=64;Sj(l,Vj(m));m=Tj(l);Rj(l);Uj(l,k);l.total=64;Sj(l,m);m=Tj(l);m=m.slice(0,8);"string"===typeof m&&(m=Vj(m));l="";if(m){k=m.length;for(e=b=f=0;k--;)for(b<<=8,b|=m[e++],
f+=8;6<=f;)l+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b>>f-6&63),f-=6;f&&(l+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b<<8>>f+8-6&63))}m=l}else m="";c={oq:c,gs_l:d+"."+m};a.config_.mg&&(c.q=a.m.g);return c}
Kj.prototype.reset=function(){this.s=G();++this.D;var a=this.m;a.H=0;a.W=0;a.na=0;this.A.reset();a=this.g;if(a.i){var b=a.g;b.m=0;b.o=0}a.Db=0;a.s=0;a.na=0;a.ca=0;a.Y=0;a.ea=0;a.Cb=0;a.H=0;a.J=0;a.K=0;a.I=[];for(b=0;b<=Nj;++b)a.I[b]=0;for(a=0;b=this.F[a++];)b.reset();this.i.reset()};
function Mj(a){return a?a.replace(Wj,"-"):""}
var Pj=/\.+$/,Wj=/\./g,Oj=Bg([23]);function Xj(){this.l=121}
y(Xj,N);Xj.prototype.sa=function(a){this.m=a.Vd()};
Xj.prototype.P=function(a){this.g=a.get(347);this.s=a.get(130);this.F=a.get(117);this.A=a.get(123);this.o=a.get(118);this.H=a.get(120);this.I=a.get(128);this.B=a.get(139);this.u=a.s;this.D=ah(a,294)};
Xj.prototype.R=function(a){this.config_=a};
function pi(a,b,c){if(a.D){for(var d=!1,e=0,f;f=a.D[e++];)2==f.g(b,c)&&(d=!0);if(d)return}if(Gg(b)||a.config_.lb||a.s&&a.s.lb()){if(hg.test(c)){if(a.m&&!a.i){d=a.m;b:{if(e=d.getElementsByTagName("input"))for(var g=0;f=e[g++];)if("btnI"==f.name&&"submit"!=f.type.toLowerCase()){e=f;break b}e=null}e?d=null:(e=O("input"),e.type="hidden",e.name="btnI",e.value="1",d.appendChild(e),d=e);a.i=d}}else a.i&&(a.m.removeChild(a.i),a.i=null);a.g&&a.config_.Qc&&Yj(a.g,c);a.u.Dd(c);Zj(a);Ti(a.F,12,{query:b})}}
Xj.prototype.redirect=function(a){this.g&&this.config_.Qc&&Yj(this.g);this.u.redirect(a);Zj(this)};
function Zj(a){yi(a.A);a.A.o=null;a.H.reset();a.I.clear();if(a.o.o!=a.o.g){var b=a.o;b.o=b.g}a.B&&a.B.clear()}
;function ak(){this.l=553}
y(ak,N);ak.prototype.P=function(a){this.g=ah(a,156);a.get(126)};
ak.prototype.ga=function(){this.g.sort(bk)};
ak.prototype.R=function(a){this.config_=a;this.i=a.od};
ak.prototype.ud=function(a){this.i=a};
function wi(a,b,c,d,e){b=new Rg(b,c||Cg(b.length),d||"");c=1;if(a.g){d=0;for(var f;f=a.g[d++];)f=f.i(b),f>c&&(c=f)}b.H=c;null!=a.config_.Nc&&Tg(b,"ds",a.config_.Nc,!0);null!=a.config_.Ge&&Tg(b,"swl",a.config_.Ge,!0);Tg(b,"pq",a.i,!0);e&&!b.m&&(b.I=!0);b.m||(b.s=G(),"cp"in b.A||(a=b.J.Ob(),Tg(b,"cp",a,!0)),Tg(b,"gs_id",b.u),b.i=Eg(b.A)+":"+b.B,b.m=!0);return b}
function bk(a,b){return a.g()-b.g()}
;function ck(){this.l=123;this.A=!1;this.F=-1}
y(ck,N);n=ck.prototype;n.P=function(a){this.g=a.get(133);this.W=a.get(130);this.Ic=a.get(118);this.Jc=a.get(120);this.X=a.get(494);this.Ze=a.get(124);this.Eb=a.get(125);this.Fb=a.get(230);this.Kc=a.get(127)};
n.R=function(a){this.u=this.Kc.g;this.config_=a;this.A=!0;this.m={};this.D=0;this.Ve=a.vf;this.We=a.ag;this.Ya=-1;this.i=this.config_.enableCaching&&!!this.g};
n.Ga=function(){this.A=!1;dk(this);this.m=this.o=null;yi(this)};
function xi(a,b){if(!(!a.A||a.We||a.W&&a.W.l())){var c=!0,d=Sg(b);d>a.F&&(a.F=d);++a.Db;a.X.g[b.getId()]=!0;Gg(a.Ic.g)||Gg(b.g)||(d=a.X,d.i=Math.max(d.i,0));d=G();for(var e in a.m)2500<d-a.m[e].s&&ek(a,e);a.i&&(e=a.g.get(b))&&((c=a.Ve||b.I)&&a.config_.bg&&(b.o=!0),a.Eb.process(e),e.o&&++a.na,a.o=null);c&&(a.o=b,a.B||a.te())}}
function yi(a){a.Ya=a.F}
function ki(a){if(a.i){a=a.g;for(var b in a.i)for(var c=a.i[b].g,d,e=0;d=c[e++];)if(35==d.getType()){delete a.i[b];break}for(b=0;b<a.g.length;++b)a.g[b].reset()}}
function fk(a,b){return F(function(c){this.Ed(c,b)},a)}
n.te=function(){dk(this);if(!(2<this.u.Tc())){var a=this.o;this.o=null;if(a){var b=[],c=a.F;if(c)for(var d in c)Dg(d,c[d],b);b=this.u.Fe(a,b.join("&"),fk(this,a),F(this.Ed,this));a.o||(++this.ca,b?(this.m[a.getId()]=a,++this.s):++this.Y);a=100;b=(this.s-2)/2;for(c=1;c++<=b;)a*=2;a<this.D&&(a=this.D);this.B=window.setTimeout(F(this.te,this),a)}}};
function dk(a){null!=a.B&&(window.clearTimeout(a.B),a.B=null)}
function ek(a,b){a.u.Pc(b);delete a.m[b];a.s&&--a.s}
n.Ed=function(a,b){if(this.A){if(!b&&(b=this.m[(a[2]||{}).j],!b))return;if(!b.o){var c=this.Ze;var d=b,e=a[0],f=a[1],g={};if(a=a[2])for(var h in a){var k=a[h];h in c.g&&(k=c.g[h].parse(k));g[h]=k}h=k=a=!1;for(var l,m=0;l=f[m++];)if(33==(l[1]||0)?k=!0:a=!0,k&&a){h=!0;break}a=0;k=[];for(m=0;l=f[m++];){var p=l[1]||0;if(!h||33!=p){var r=l[0];c.m&&(r=c.i.bold(e.toLowerCase(),Ig(r).replace(ug,"")));var q=k,t=q.push,u=Ig(r).replace(ug,""),z=a++,E=l[3];t.call(q,new og(r,u,z,p,l[2]||[],E?new jg(E):kg))}}c=
new Ug(d,k,new jg(g),!1,!0,!1);this.Fb&&(c=ed(this.Fb,c));if(this.i)for(d=this.g,e=c,(e.g&&e.g[0]||""!=e.l.g)&&e&&e.m&&(d.i[e.l.i]=e),f=0;f<d.g.length;++f)d.g[f].update(e);Sg(b)<=this.Ya?!b||b.g||c.o||(this.K=G()-b.s):(++this.ea,this.Eb.process(c)||++this.Cb,this.D=c.i.g.d||0,b&&(ek(this,b.getId()),d=b.s,d=G()-d,b.g?(this.J+=d,this.H=Math.max(d,this.H),++this.I[d>gk?Nj:hk[Math.floor(d/100)]]):this.K=d));c&&(b=c.i.g.q||"")&&(this.Jc.u=b)}}};
var hk=[0,1,2,3,4,5,5,6,6,6,7,7,7,7,7,8,8,8,8,8],Nj=hk[hk.length-1]+1,gk=100*hk.length-1;function ik(){this.l=124;this.g={}}
y(ik,N);ik.prototype.P=function(a){this.i=a.get(150);if(a=ah(a,158))for(var b,c=0;b=a[c++];)this.g[b.Yh()]=b};
ik.prototype.R=function(a){this.m=a.Vc};function jk(){this.l=125}
y(jk,N);jk.prototype.P=function(a){this.o=a.get(117);this.u=a.get(118);this.s=a.get(494);this.g=ah(a,122);this.i=a.get(126);this.m=a.get(128);this.g.sort(kk)};
jk.prototype.process=function(a){var b=a,c=this.u.g.toLowerCase(),d=this.i.g;c=Jg(c);var e=b.l;b=e?e.l:Jg(b.l.g.toLowerCase());var f=(d=d?d.l:null)?d.l:"";e=1==(0==c.indexOf(b)?0==c.indexOf(f)?d&&d.getId()==e.getId()?0:b.length>=f.length?1:-1:1:-1);c=-1!=e;if(e){if(this.g)for(e=0;b=this.g[e++];)a=b.l(a);d=this.i.g=a;a=d.l.g;e=d.g;this.m.isEnabled()&&(b=0==d.getType(),Hi(this.m,e,b));b=this.s;var g=d.l;f=g.getId();if(f in b.g){var h=d.g.length;0<h&&(Gg(g.g)||(b.i=h),g=g.s,g=G()-g,b.o+=g,++b.u);d.i.g.e&&
++b.m;delete b.g[f]}d=d.g;for(g=0;f=d[g++];)h=f.getType(),b.s[Qg(h,f.i||[])]=!0;Ti(this.o,3,{input:a,Ug:e})}return c};
function kk(a,b){return a.g()-b.g()}
;function lk(){this.l=126}
y(lk,N);lk.prototype.P=function(a){this.i=a.get(123)};
lk.prototype.R=function(){this.g=null};var mk=["expflags","plugin"];function nk(){this.l=127;this.m={}}
y(nk,N);nk.prototype.P=function(a){a=ah(a,149);for(var b,c=0;b=a[c++];)this.m[b.qb()]=b};
nk.prototype.R=function(a){var b="https:"==document.location.protocol,c=[];Dg("client",a.clientName,c);Dg("hl",a.ad,c);Dg("gl",a.Je,c);Dg("sugexp",a.xd,c);Dg("gs_rn",64,c);Dg("gs_ri",a.requestIdentifier,c);var d=Fg(a.url||C.location.href);mk.filter(function(e){return d.hasOwnProperty(e)}).forEach(function(e){return c.push(e+"="+d[e])});
a.authuser&&Dg("authuser",a.authuser,c);this.i={protocol:"http"+(b?"s":"")+"://",host:a.rd||"clients1."+a.ic,Ac:a.Ac||"/complete/search",He:c.length?c.join("&"):""};this.g&&this.g.qb()==a.connectionType||(this.g=this.m[a.connectionType])};function ok(){this.l=191}
y(ok,N);function Vj(a){for(var b=[],c=0,d=0;d<a.length;++d){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}
function Rj(a){a.chain[0]=1732584193;a.chain[1]=4023233417;a.chain[2]=2562383102;a.chain[3]=271733878;a.cc=a.total=0}
function Uj(a,b){for(var c=a.fh,d=0;64>d;d+=4)c[d/4]=b[d]|b[d+1]<<8|b[d+2]<<16|b[d+3]<<24;var e=a.chain[0];b=a.chain[1];d=a.chain[2];for(var f=a.chain[3],g,h,k,l=0;64>l;++l)16>l?(g=f^b&(d^f),h=l):32>l?(g=d^f&(b^d),h=5*l+1&15):48>l?(g=b^d^f,h=3*l+5&15):(g=d^(b|~f),h=7*l&15),k=f,f=d,d=b,e=e+g+pk[l]+c[h]&4294967295,g=qk[l],b=b+((e<<g|e>>>32-g)&4294967295)&4294967295,e=k;a.chain[0]=a.chain[0]+e&4294967295;a.chain[1]=a.chain[1]+b&4294967295;a.chain[2]=a.chain[2]+d&4294967295;a.chain[3]=a.chain[3]+f&4294967295}
function Sj(a,b,c){c||(c=b.length);a.total+=c;for(var d=0;d<c;++d)a.buffer[a.cc++]=b[d],64==a.cc&&(Uj(a,a.buffer),a.cc=0)}
function Tj(a){var b=Array(16),c=8*a.total,d=a.cc;Sj(a,a.padding,56>d?56-d:64-(d-56));for(var e=56;64>e;++e)a.buffer[e]=c&255,c>>>=8;Uj(a,a.buffer);for(e=d=0;4>e;++e)for(c=0;32>c;c+=8)b[d++]=a.chain[e]>>c&255;return b}
var Qj=[0,0,0,0,0,0,0,0,0,0,0,0,0,63,0,0,53,54,55,56,57,58,59,60,61,62,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,0,0,0,0,64,0,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,0,0,0,0,0],qk=[7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21],pk=[3614090360,3905402710,606105819,3250441966,4118548399,1200080426,
2821735955,4249261313,1770035416,2336552879,4294925233,2304563134,1804603682,4254626195,2792965006,1236535329,4129170786,3225465664,643717713,3921069994,3593408605,38016083,3634488961,3889429448,568446438,3275163606,4107603335,1163531501,2850285829,4243563512,1735328473,2368359562,4294588738,2272392833,1839030562,4259657740,2763975236,1272893353,4139469664,3200236656,681279174,3936430074,3572445317,76029189,3654602809,3873151461,530742520,3299628645,4096336452,1126891415,2878612391,4237533241,1700485571,
2399980690,4293915773,2240044497,1873313359,4264355552,2734768916,1309151649,4149444226,3174756917,718787259,3951481745];function rk(){this.l=150}
I(rk,N);
rk.prototype.bold=function(a,b){b=Hg(b.replace(ig,""));a=Hg(Jg(a,!0));if(Kg(b,a))return a+"<b>"+b.substr(a.length)+"</b>";for(var c="",d=[],e=b.length-1,f=0,g=-1,h;h=b.charAt(f);++f)" "==h||"\t"==h?c.length&&(d.push({t:c,Vb:g,e:f+1}),c="",g=-1):(c+=h,-1==g?g=f:f==e&&d.push({t:c,Vb:g,e:f+1}));a=a.split(/\s+/);f={};for(c=0;e=a[c++];)f[e]=1;g=-1;a=[];h=d.length-1;for(c=0;e=d[c];++c)f[e.t]?(e=-1==g,c==h?a.push({Vb:e?c:g,e:c}):e&&(g=c)):-1<g&&(a.push({Vb:g,e:c-1}),g=-1);if(!a.length)return"<b>"+b+"</b>";
c="";for(f=e=0;g=a[f];++f)(h=d[g.Vb].Vb)&&(c+="<b>"+b.substring(e,h-1)+"</b> "),e=d[g.e].e,c+=b.substring(h,e);e<b.length&&(c+="<b>"+b.substring(e)+"</b> ");return c};function sk(){this.l=146}
I(sk,N);function tk(a){JSON.parse('"\\u30'+a.split(",").join("\\u30")+'"')}
tk("02,0C,0D,01,FB,F2,A1,A3,A5,A7,A9,E3,E5,E7,C3,FC,A2,A4,A6,A8,AA,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CA,CB,CC,CD,CE,CF,D2,D5,D8,DB,DE,DF,E0,E1,E2,E4,E6,E8,E9,EA,EB,EC,ED,EF,F3,9B,9C");tk("F4__,AC,AE,B0,B2,B4,B6,B8,BA,BC,BE,C0,C2,C5,C7,C9_____,D0,D3,D6,D9,DC");tk("D1,D4,D7,DA,DD");tk("F4____,AC_,AE_,B0_,B2_,B4_,B6_,B8_,BA_,BC_,BE_,C0_,C2__,C5_,C7_,C9______,D0__,D3__,D6__,D9__,DC");tk("D1__,D4__,D7__,DA__,DD");tk("A6,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CF,D2,D5,D8,DB");tk("CF,D2,D5,D8,DB");function uk(){this.l=116;this.ea=!0;this.isDarkTheme=!!document.body.dataset.dt}
y(uk,N);n=uk.prototype;
n.sa=function(a,b){var c=this.isDarkTheme?"#202124":"#fff",d=this.isDarkTheme?"#3c4043":"#ccc",e=this.isDarkTheme?"#5f6368":"#d9d9d9";this.W=a.nc();b.addRule(".sbdd_a",(Eh?"margin-top:-1px;":"")+"z-index:989");b.addRule(".sbdd_a[dir=ltr] .fl, .sbdd_a[dir=rtl] .fr","float:left");b.addRule(".sbdd_a[dir=ltr] .fr, .sbdd_a[dir=rtl] .fl","float:right");Eh?b.addRule(".sbdd_b","background:"+c+";border:1px solid "+(d+";border-top-color:")+(e+";")+b.prefix("border-radius:0 0 3px 3px;")+"cursor:default"):b.addRule(".sbdd_b",
"background:"+c+";border:1px solid "+(d+";border-top-color:")+(e+";")+b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);")+"cursor:default");b.addRule(".sbdd_c","border:0;display:block;position:absolute;top:0;z-index:988")};
n.P=function(a){this.J=a.get(130);a.get(115);this.o=a.get(118);this.F=a.get(117);this.Y=a.i.getId()};
n.ga=function(a){this.config_=a};
n.nb=function(a){this.g=P();this.g.className="gstl_"+this.Y+" sbdd_a";Ri(this.g,!1);this.K=this.g;this.H=P("fl");this.g.appendChild(this.H);this.A=P();this.g.appendChild(this.A);this.s=P("sbdd_b");this.A.appendChild(this.s);this.na=P();this.A.appendChild(this.na);this.config_.ae&&(this.i=O("iframe","gstl_"+this.Y+" sbdd_c"),Ri(this.i,!1),(this.config_.Ia||document.body).appendChild(this.i));if(this.m=this.config_.jf)"number"===typeof this.m&&(this.m+=this.config_.kc[2],this.m-=vk(this)),wk(this,this.g,
this.m);xk(this);(a.Ia||document.body).appendChild(this.g);a=this.F;var b=F(this.Fd,this);Q(a,a.g,8,b)};
n.R=function(a){this.config_=a;this.g.style.position=a.Mb};
n.getHeight=function(){this.B||(this.B=this.s?Math.max(this.s.offsetHeight,0):0);return this.B};
n.Fd=function(){this.B=0;xk(this);if(this.i){var a=this.config_.Hd[0],b=this.i.style;"relative"!=this.config_.Mb&&(b.top=this.g.style.top,b.left=this.g.offsetLeft+this.H.offsetWidth+"px");b=this.i;a=this.getHeight()+a;b.style.height=Math.max(a,0)+"px";wk(this,this.i,this.s.offsetWidth)}this.u&&pj(this.u.g)};
function xk(a){var b,c;if(c=a.u)c=a.u.g,c=c.config_.Rf||c.H==c.F?c.Ya:null;var d=(b=c)?b.offsetWidth:yk(a.o.m);var e=a.m;c=vk(a);e?"string"===typeof e&&(e=null):a.X||!a.ea?a.A.style.display="inline-block":(a.A.style.display="",e=d+a.config_.kc[2]-c,wk(a,a.g,e));if("relative"!=a.config_.Mb){var f="rtl"==Pf()!=("rtl"==a.D),g=a.config_.Ia;var h={Ta:0,Ec:0};if(f||!g||g==document.body||a.config_.Td)h=Nh(a.o.m.F),b&&(h.Ta=Nh(b).Ta);b=h;h=e;e=a.config_.kc;g=e[1];e=e[0];e=b.Ec+a.o.getHeight()+e;if("right"==
a.ca){h="rtl"==Pf()!=("rtl"==a.D);var k=a.config_.Ia;g=-g;if(h||!k||k==document.body)g+=(Wh(a.g)||window).document.documentElement.clientWidth-d-b.Ta;d=g;h=e;b=void 0}else b=b.Ta+g,"center"==a.ca&&h&&(b+=(d-h)/2),h=e,d=void 0;e={Ta:0,Ec:0};"absolute"==a.config_.Mb&&a.config_.Ia&&a.config_.Ia!=document.body&&(f||a.config_.Td)&&(e=Nh(a.config_.Ia));g=a.g.style;g.top=h-e.Ec+"px";g.left=g.right="";void 0!=b?g.left=b+c-e.Ta+"px":(b=0,a.config_.Ia&&f&&(b=document.body.clientWidth-(e.Ta+a.config_.Ia.offsetWidth)),
g.right=d+c-b+"px")}}
function wk(a,b,c){"number"===typeof c?0<c&&(a.config_.eh?b.style.width=c+"px":b.style.minWidth=c+"px"):b.style.width=c}
function Ri(a,b){a&&(a.style.display=b?"":"none")}
function Si(a,b){if(a.D!=b){a.D=b;var c=a.config_.Ia;c&&c!=document.body&&(c.style.textAlign="rtl"==b?"right":"left");Rh(a.g,b)}}
function vk(a){return a.J&&a.J.i()&&(a=a.o.m.B.offsetWidth,"number"===typeof a)?a:0}
;function zk(){this.l=119;this.W=!1;this.s=Cg(0);this.ca=-1;this.ea=!1;this.isDarkTheme=!!document.body.dataset.dt}
y(zk,N);n=zk.prototype;
n.sa=function(a,b){var c=this.isDarkTheme?"#202124":"#fff";this.D=a;this.g=a.Uc();Gh(this.g,"combobox");Hh(this.g,"haspopup",!1);Hh(this.g,"autocomplete","list");this.Ic=a.nc();a.Lc()||(b.addRule(".sbib_a","background:"+c+";"+b.prefix("box-sizing:border-box;")),a=Dh&&zh||kh?6:5,b.addRule(".sbib_b",b.prefix("box-sizing:border-box;")+"height:100%;overflow:hidden;padding:"+a+"px 9px 0"),b.addRule(".sbib_c[dir=ltr]","float:right"),b.addRule(".sbib_c[dir=rtl]","float:left"),b.addRule(".sbib_d",b.prefix("box-sizing:border-box;")+
"height:100%;unicode-bidi:embed;white-space:nowrap"),b.addRule(".sbib_d[dir=ltr]","float:left"),b.addRule(".sbib_d[dir=rtl]","float:right"),wh&&b.addRule(".sbib_a input::-ms-clear","display: none"),b.addRule(".sbib_a,.sbib_c","vertical-align:top"))};
n.P=function(a){this.i=a.get(118);this.m=a.get(117);this.X=a.get(128);this.I=a.get(173);this.Cb=!!a.get(136);this.Jc=a.i.getId()};
n.ga=function(a){this.config_=a;this.J=a.Pb;this.K=a.ig;this.Kc=a.Nd;this.u=Oh(this.g);this.Gc();var b=this;kh&&Q(this.m,this.g,"beforedeactivate",function(c){b.ea&&(b.ea=!1,c.sc=!0)},10);
a=(kc()||J("iPad")||J("iPod"))&&Ah;xh&&Ak(this);(Bh||a)&&Bk(this);this.F=this.g};
n.nb=function(a){var b=!!a.pf[130];if(this.Cb||ij(this.i)||b||a.wf)(this.A=this.D.get("gs_id"))?(b&&(this.B=this.D.get("sb_chc")),this.o=this.D.get("sb_ifc")):(this.A=P("gstl_"+this.Jc+" sbib_a"),a=this.A.style,this.K&&(a.width=this.K+"px"),this.J&&(a.height=this.J+"px"),a=this.g.style,a.border="none",a.padding=yh||kh?"0 1px":"0",a.margin="0",a.height="auto",a.width="100%",this.g.className=this.config_.Zc,b&&(this.B=P("sbib_d"),this.B.id=this.D.getId("sb_chc"),this.A.appendChild(this.B)),ij(this.i)&&
this.I&&(this.I.g.className+=" sbib_c",b=this.I,a=this.Ic,b.s!=a&&(b.g.dir=b.s=a),this.A.appendChild(this.I.g)),this.o=P("sbib_b"),this.o.id=this.D.getId("sb_ifc"),this.A.appendChild(this.o),Ck(this,this.A,this.o)),this.config_.td&&this.g&&this.o&&(this.g.removeAttribute("role"),Gh(this.o,"combobox"),this.g.removeAttribute("aria-haspopup"),Hh(this.o,"haspopup",!0)),this.config_.Na&&this.g&&(b=this.D.getId("sbsg"),Hh(this.g,"controls",b),this.config_.td&&this.o?(Hh(this.o,"haspopup","grid"),Hh(this.o,
"owns",b)):Hh(this.g,"haspopup","grid")),this.config_.Rg||this.config_.ff||Dk(this,this.A),this.F=this.A;this.Kc&&(b=F(this.re,this),Q(this.m,this.g,"blur",b,10),b=F(this.Ae,this),Q(this.m,this.g,"focus",b,10),this.Fb=!0);b=this.m;a=F(this.Nf,this);Q(b,b.g,8,a);Ek(this)};
n.R=function(a){this.config_=a;this.g.setAttribute("autocomplete","off");this.g.setAttribute("spellcheck",!1);this.g.style.outline=a.ne?"":"none";this.Db=this.g.value;this.Fb&&this.Ae();Fk(this)};
n.Ga=function(){this.Fb&&this.re();Gk(this)};
function Ck(a,b,c){Gk(a);c||(c=b);a.g.parentNode.replaceChild(b,a.g);c.appendChild(a.g);a.u&&a.config_.Ig&&(kh||xh?od(function(){a.g.focus();Mh(a.g,a.s.Ob())}):a.g.focus());
Fk(a)}
n.getHeight=function(){var a=this.F?this.F.offsetHeight:0;this.J>a&&(a=this.J);return a};
function yk(a){return a.K?a.K:a.F?a.F.offsetWidth:0}
n.select=function(){this.g.select();this.Gc()};
function hj(a){Ch&&(a.g.value="");a.g.value=a.i.g;Ch&&(a.g.value=a.g.value);fj(a)}
function Hk(a){a.u&&(a.g.blur(),a.u=!1)}
n.clear=function(){this.g.value=""};
function fj(a){if(a.u){var b=a.g.value.length;a.s=Cg(b);Mh(a.g,b)}}
function Dk(a,b){Q(a.m,b,"mouseup",function(){a.g.focus()})}
function Ek(a){function b(e){Q(a.m,a.g,e,F(a.ye,a),10,c)}
Q(a.m,a.g,"keydown",F(a.Lf,a));(yh||a.config_.cf)&&Q(a.m,a.g,"keypress",F(a.Mf,a));Q(a.m,a.g,"select",F(a.Gc,a),10);var c=!1;b("mousedown");b("keyup");b("keypress");c=!0;b("mouseup");b("keydown");b("focus");b("blur");b("cut");b("paste");b("input");var d=F(a.If,a);Q(a.m,a.g,"compositionstart",d);Q(a.m,a.g,"compositionend",d)}
n.If=function(a){a=a.type;"compositionstart"==a?(a=this.i,1!=a.D&&(a.D=!0)):"compositionend"==a&&(a=this.i,0!=a.D&&(a.D=!1))};
n.Lf=function(a){var b=a.keyCode;this.ca=b;var c=(zh||xh)&&(38==b||40==b)&&$i(this.X),d=13==b,e=27==b;this.Y=!1;9!=b||a.shiftKey||(this.Y=Zi(this.i));if(d){(b=aj(this.X))&&b.getType();var f=this;od(function(){var g=f.X,h=a.shiftKey?4:3;null!=g.i&&aj(g).getType();g=g.u;pi(g.F,g.g,h)})}if(c||d||e||this.Y)a.sc=!0};
n.Mf=function(a){var b=a.keyCode,c=9==b&&this.Y;if(13==b||27==b||c)a.sc=!0};
n.ye=function(a){if(!this.Eb){var b=a.Xb;if(!(b.indexOf("key")||a.ctrlKey||a.altKey||a.shiftKey||a.metaKey))a:if(a=a.keyCode,"keypress"!=b){var c=38==a||40==a;if("keydown"==b){var d=this.i;var e=229==a;(d.K=e)&&d.B.add(4);if(c)break a}else if(d=a!=this.ca,this.ca=-1,!c||d)break a;switch(a){case 27:a=this.i;a.config_.Mg?pi(a.F,a.g,5):(a.i.isVisible()?(c=a.i,yi(c.D),Yi(c)):Hk(a.m),li(a));break;case 37:a=this.i;jj(a,"rtl");if(kj(a)&&(c=a.i,null!==c.i&&(a=c.o,(c=Ik(a,c.i))&&!(1>=c.length))))for(d=Ih(a.u),
e=1;e<c.length;e++)c[e].id===d.id&&Jh(a.u,c[e-1]);break;case 39:a=this.i;jj(a,"ltr");if(kj(a)&&(c=a.i,null!==c.i&&(a=c.o,c=Ik(a,c.i))))for(d=Ih(a.u),e=0;e<c.length-1;e++)c[e].id===d.id&&Jh(a.u,c[e+1]);break;case 38:this.i.i.Ee();break;case 40:a=this.i;c=this.s;$i(a.i)?a.i.De():dj(a.i,c);break;case 46:a=this.i;a.g&&this.s.Yd()==a.g.length&&(a.J&&a.J.clear(),a.config_.Lg&&pi(a.F,a.g,2));break;case 8:a=this.i,a.A&&0==this.s.Ob()&&a.A.g()}}this.Gc();bj(this.i,this.g.value,this.s,b)}};
n.Hf=function(){this.u=!0;Ti(this.i.s,10)};
n.Ff=function(){this.u=!1;Xi(this.i)};
function Fk(a){a.W||(a.W=!0,a.Ya=F(a.Hf,a),Q(a.m,a.g,"focus",a.Ya,99),a.na=F(a.Ff,a),Q(a.m,a.g,"blur",a.na,99))}
function Gk(a){a.W&&(a.W=!1,Gj(a.m,a.g,a.Ya),Gj(a.m,a.g,a.na))}
n.Ae=function(){this.H||(this.H=new Rd(this.config_.Eg||50),this.H.ra("tick",this.Dg,void 0,this),this.H.start())};
n.re=function(){this.H&&(Sd(this.H),this.H=null)};
n.Dg=function(){this.ye({Xb:"polling"})};
n.Nf=function(){if(xh){var a=this.g,b=document.createEvent("KeyboardEvent");b.initKeyEvent&&(b.initKeyEvent("keypress",!0,!0,null,!1,!1,!0,!1,27,0),a.dispatchEvent(b))}};
n.Gc=function(){if(this.u){a:{var a=this.g;try{if("selectionStart"in a){var b=a.selectionStart;var c=a.selectionEnd}else{var d=a.createTextRange(),e=Ph(a).selection.createRange();d.inRange(e)&&(d.setEndPoint("EndToStart",e),b=d.text.length,d.setEndPoint("EndToEnd",e),c=d.text.length)}if(void 0!==b){var f=Cg(b,c);break a}}catch(g){}f=null}f&&(this.s=f)}};
function Ak(a){var b;a.m.ra(window,"pagehide",function(){a.Eb=!0;b=a.g.value});
a.m.ra(window,"pageshow",function(c){a.Eb=!1;(c.persisted||void 0!==b)&&gj(a.i,b)})}
function Bk(a){a.m.ra(window,"pageshow",function(b){b.persisted&&a.Db&&gj(a.i,a.Db)})}
function Qi(a,b){a.config_.td&&a.o?Hh(a.o,"expanded",b):Hh(a.g,"haspopup",b);b||a.g.removeAttribute("aria-activedescendant")}
;function Jk(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Kk(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Lk(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Jk(a).match(/\S+/g)||[],b=0<=ob(a,b));return b}
function zj(a,b){if(a.classList)a.classList.add(b);else if(!Lk(a,b)){var c=Jk(a);Kk(a,c+(0<c.length?" "+b:b))}}
function Mk(a,b){a.classList?a.classList.remove(b):Lk(a,b)&&Kk(a,Array.prototype.filter.call(a.classList?a.classList:Jk(a).match(/\S+/g)||[],function(c){return c!=b}).join(" "))}
;function Nk(){this.l=129;this.J={};this.W=[];this.Y=[];this.ca=[];this.m=[];this.ea=0;this.isDarkTheme=!!document.body.dataset.dt}
y(Nk,N);n=Nk.prototype;
n.sa=function(a,b){var c=this.isDarkTheme?"#202124":"#fff";this.K=a;this.u=a.Uc();this.H=a.nc();Eh||b.addRule(".sbsb_a","background:"+c);b.addRule(".sbsb_b","list-style-type:none;margin:0;padding:0");Eh||b.addRule(".sbsb_c","line-height:22px;overflow:hidden;padding:0 10px");b.addRule(".sbsb_d","background:#eee");b.addRule(".sbsb_e","height:1px;background-color:#e5e5e5");b.addRule("#sbsb_f","font-size:11px;color:#36c;text-decoration:none");b.addRule("#sbsb_f:hover","font-size:11px;color:#36c;text-decoration:underline");b.addRule(".sbsb_g",
"text-align:center;padding:8px 0 7px;position:relative");b.addRule(".sbsb_h","font-size:15px;height:28px;margin:0.2em"+(zh?";-webkit-appearance:button":""));b.addRule(".sbsb_i","font-size:13px;color:#36c;text-decoration:none;line-height:100%");b.addRule(".sbsb_i:hover","text-decoration:underline");b.addRule(".sbsb_j","padding-top:1px 0 2px 0;font-size:11px");b.addRule(".sbdd_a[dir=ltr] .sbsb_j","padding-right:4px;text-align:right");b.addRule(".sbdd_a[dir=rtl] .sbsb_j","padding-left:4px;text-align:left");
Eh&&(b.addRule(".sbsb_c[dir=ltr] .sbsb_k","padding:10px 3px 11px 8px"),b.addRule(".sbsb_c[dir=rtl] .sbsb_k","padding:10px 8px 11px 3px"))};
n.P=function(a){this.D=a.get(128);this.s=a.get(118);this.I=a.get(121);a=ah(a,152);var b={};if(a)for(var c,d=0;c=a[d++];)b[c.D]=c;this.na=b};
n.ga=function(a){this.config_=a};
n.nb=function(a){this.o=P();a.Na?(this.g=P("sbsb_b"),Gh(this.g,"grid"),this.g.id=this.K.getId("sbsg")):(this.g=O("ul","sbsb_b"),Gh(this.g,"listbox"));this.o.appendChild(this.g)};
n.R=function(a){this.config_=a;var b=a.xe;b&&(this.Ya=this.K.Ud(b));this.o.className=a.Wg||"sbsb_a";this.X=a.Tg||"sbsb_d"};
function Ik(a,b){if(a.config_.Na&&(a=a.m[b]))return a.g().parentNode.querySelectorAll("[role=gridcell]")}
function yj(a,b){(b=a.m[b])&&Mk(b.g().parentNode,a.X)}
n.clear=function(){for(var a,b,c;c=this.W.pop();)a=c.getType(),(b=this.J[a])||(b=this.J[a]=[]),b.push(c),a=c.g(),a.parentNode.removeChild(a);for(;a=this.g.firstChild;)a=this.g.removeChild(a),a.l?this.ca.push(a):a!=this.B&&a!=this.A&&this.Y.push(a);this.B&&(this.B.style.display="none");this.A&&(this.A.style.display="none");this.m=[]};
function qj(a,b){var c=b.getType(),d=a.na[c];if(!d)return!1;(c=(c=a.J[c])&&c.pop())||(c=Ok(a,d));d.Bb(b,c);a.W.push(c);var e=c.g();if(a.config_.Na)for(var f=e.querySelectorAll('[role="gridcell"]'),g=0;g<f.length;g++)f[g].id=e.id+("x"+g);f=Pk(a);f.appendChild(e);if(void 0!==b.l){a.m.push(c);g=a.F;var h=b.l();a.config_.Yf&&(e.onmouseover=function(){vj(a.D,h)},e.onmouseout=function(){mi(a.D)});
var k=c.g();k.onclick=function(l){Hk(a.s.m);b.o&&cj(a.s,b.g);mi(a.D);var m=a.D;m.i=m.g=h;l=l||Wh(k).event;d.Ab(l,b,a.I)}}else g=a.H;
Rh(f,g);return!0}
function Ok(a,b){b=b.Ib(a.I);var c=b.g();zj(c,"sbse");c.id="sbse"+a.ea;(c=b.g())&&!a.config_.Na&&Gh(c,"option");a.ea++;return b}
function uj(a,b,c,d){var e=O("input");e.type="button";e.value=Ig(b);e.onclick=function(){pi(a.I,a.s.g,d)};
if(a.config_.Qf){b="lsb";var f=O("span");var g=O("span");f.className="ds";g.className="lsbb";f.appendChild(g);g.appendChild(e)}else b="sbsb_h",f=e;e.className=b;c.appendChild(f)}
function Pk(a){var b=a.Y.pop();if(b)return a.g.appendChild(b),b;a.config_.Na?(b=P(),Gh(b,"row")):(b=O("li"),Gh(b,"presentation"));b.className="sbsb_c "+a.config_.Cc;b.onmousedown=F(a.nd,a);a.g.appendChild(b);return b}
n.nd=function(a){a=a||Wh(this.o).event;a.stopPropagation?(a.stopPropagation(),window.Polymer&&window.Polymer.Element&&a.preventDefault()):kh&&!yh&&(this.s.m.ea=!0);return!1};
function pj(a){if(a.i){var b=0,c=a.s.m.B;c&&(b=c.offsetWidth);c=a.i;a=yk(a.s.m)-b-3;0<a&&(c.style.width=a+"px")}}
;function Qk(){this.l=147}
I(Qk,N);Qk.prototype.sa=function(a){this.u=a.Vd()||document.body};
Qk.prototype.ga=function(a){this.config_=a};
Qk.prototype.getHeight=function(){this.g||rj(this);sj(this);this.i||(Qh(this.g,"|"),this.i=this.g.offsetHeight);return this.i};
function rj(a){var b=P(a.config_.Zc),c=b.style;c.background="transparent";c.color="#000";c.padding=0;c.position="absolute";c.whiteSpace="pre";a.g=b;a.g.style.visibility="hidden";a.u.appendChild(a.g)}
function sj(a){var b=G();if(!a.o||a.o+3E3<b){a.o=b;b=a.g;var c=Wh(b);b=(b=c.getComputedStyle?c.getComputedStyle(b,""):b.currentStyle)?b.fontSize:null;a.s&&b==a.s||(a.m={},a.i=null,a.s=b)}}
;function Rk(){Wg.call(this);this.set(191,new ok);this.set(150,new rk);this.set(146,new sk);this.set(147,new Qk);Xg(this,149,new Ki);this.set(145,new Bj);this.set(117,new Cj);this.set(494,new Ij);this.set(374,new Jj);this.set(120,new Kj);this.set(121,new Xj);this.set(553,new ak);this.set(124,new ik);this.set(125,new jk);this.set(123,new ck);this.set(126,new lk);this.set(127,new nk);this.set(115,new Ni);this.set(118,new Vi);this.set(128,new mj);Xg(this,154,new Aj);this.set(116,new uk);this.set(119,
new zk);this.set(129,new Nk)}
y(Rk,Wg);function Sk(){this.l=347;this.i=[];this.m=0}
y(Sk,N);Sk.prototype.P=function(a){this.o=a.get(120)};
Sk.prototype.R=function(a){this.s="//"+(a.rg||"www."+a.ic)+"/gen_204?";this.g=a.Sg||{}};
function Yj(a,b){b=Lj(a.o,b);for(var c in a.g)c in b||(b[c]=a.g[c]);c=Eg(b,!0);Tk(a,a.s+c)}
function Tk(a,b){var c=new Image,d=a.m,e=a.i;c.onerror=c.onload=c.onabort=function(){try{delete e[d]}catch(f){}};
a.i[a.m++]=c;c.src=b}
;function Uk(){this.l=151;this.g=!0;this.i={}}
y(Uk,N);n=Uk.prototype;n.P=function(a){this.m=a.get(150)};
n.ga=function(){this.s=Bg([0])};
n.R=function(a){this.o=a.Vc;this.g=a.Md};
n.Ga=function(){this.g=!1};
n.update=function(a){if(this.g){var b=a.g;if(b.length){var c=a.l.l;a:{var d=Number.MAX_VALUE;for(var e,f=0;e=b[f++];){if(!this.s[e.getType()]){d=-1;break a}e=e.g;d=Math.min(e.length,d)}}if(-1!=d){var g=b[0].g;if(Kg(g,c,!0))for(f=c.length+1;f<=d;){c=null;for(e=0;g=b[e++];){g=g.g;if(f>g.length)return;g=g.substr(0,f);if(!c)c=g;else if(c!=g)return}this.i[c]=a;++f}}}}};
n.get=function(a){if(this.g){var b=this.i[a.l];if(b){for(var c=a.B,d=a.l,e=b.i,f=this.o||!e.g.k,g=[],h,k,l=b.g,m,p=0;m=l[p++];)k=m.g,h=f?this.m.bold(c,k):Hg(k),g.push(new og(h,k,m.l(),m.getType(),m.i||[],m.m));delete this.i[d];return new Ug(a,g,e,!0,b.m,!1)}}return null};
n.reset=function(){this.i={}};function Vk(){this.l=133;this.i={};this.g=[];this.o=this.m=0}
y(Vk,N);Vk.prototype.P=function(a){this.g=ah(a,151);this.g.sort(Wk)};
Vk.prototype.R=function(){this.o=this.m=0};
Vk.prototype.get=function(a){var b=this.i[a.i];if(b)++this.m;else if(this.g)for(var c=0;c<this.g.length;++c)if(b=this.g[c].get(a)){b&&b.m&&(this.i[b.l.i]=b);++this.o;break}return b?new Ug(a,b.g,b.i,b.o,b.m,b.u):null};
Vk.prototype.has=function(a){return!!this.i[a.i]};
function Wk(){return 0}
;function Xk(a){this.l=a;this.g=new RegExp("(?:^|\\s+)"+a+"(?:$|\\s+)")}
function Yk(a,b){b&&!a.g.test(b.className)&&(b.className+=" "+a.l)}
function Zk(a,b){b&&(b.className=b.className.replace(a.g," "))}
;function $k(){this.l=570;this.m=!1}
I($k,N);n=$k.prototype;n.sa=function(a){this.u=a};
n.P=function(a){this.s=a.get(117);this.A=a.get(118)};
n.ga=function(a){var b=a.Nb;if(this.g=b?this.u.Ud(b):null){b=this.s;var c=F(this.Gf,this);Q(b,b.g,10,c);b=this.s;c=F(this.Ef,this);Q(b,b.g,11,c);Q(this.s,this.g,"mouseover",F(this.Kf,this));Q(this.s,this.g,"mouseout",F(this.Jf,this));a.Sc&&(this.o=new Xk(a.Sc));a.Rc&&(this.i=new Xk(a.Rc))}};
n.R=function(){this.m=!0;this.g&&this.A.m.u&&this.i&&Yk(this.i,this.g)};
n.Ga=function(){this.m=!1;this.g&&(this.o&&Zk(this.o,this.g),this.i&&Zk(this.i,this.g))};
n.Kf=function(){this.m&&this.o&&Yk(this.o,this.g)};
n.Jf=function(){this.m&&this.o&&Zk(this.o,this.g)};
n.Gf=function(){this.m&&this.i&&Yk(this.i,this.g)};
n.Ef=function(){this.m&&this.i&&Zk(this.i,this.g)};var al=ha(["//www.google.com/textinputassistant/","/","_tia.js"]);function bl(){this.l=160}
I(bl,N);n=bl.prototype;n.sa=function(a,b){this.m=a;a.Lc()||(b.addRule(".gsok_a","background:url(data:image/gif;base64,R0lGODlhEwALAKECAAAAABISEv///////yH5BAEKAAIALAAAAAATAAsAAAIdDI6pZ+suQJyy0ocV3bbm33EcCArmiUYk1qxAUAAAOw==) no-repeat center;display:inline-block;height:11px;line-height:0;width:19px"),b.addRule(".gsok_a img","border:none;visibility:hidden"))};
n.P=function(a){this.s=a.get(374);this.u=a.get(128)};
n.ga=function(a){this.o=!!a.pc;this.A=a.pe;this.D=a.vc;this.H=a.Bg;this.F=a.Ag};
n.nb=function(){(this.i=this.m.get("gs_ok"))?this.g=this.i.firstChild:(this.g=O("img"),this.g.src=this.A+"/tia.png",this.i=O("span","gsok_a gsst_e"),this.i.id=this.m.getId("gs_ok"),this.i.appendChild(this.g));this.g.ds=F(this.gf,this);this.g.setAttribute("tia_field_name",this.m.Uc().name);this.g.setAttribute("tia_disable_swap",!0)};
n.R=function(a){a.Wc&&(this.o=!!a.pc);this.g.setAttribute("tia_property",a.qe)};
n.isEnabled=function(){return this.o};
n.Xd=function(){return{tooltip:this.F}};
n.Gd=function(a){if(!this.B){a=nd("SCRIPT");var b=kd(al,this.H,this.D);Eb(a,b);document.body.appendChild(a);this.B=!0;this.s.add(3)}else if(this.g.onclick)this.g.onclick(a);return!1};
n.gf=function(){var a=this.u;yi(a.D);Yi(a)};
var cl=Ag++;var dl=ha(["#"]);function el(){this.l=173;this.m={}}
y(el,N);n=el.prototype;
n.sa=function(a,b){this.o=a;a.Lc()||(b.addRule(".gsst_a","display:inline-block"),b.addRule(".gsst_a","cursor:pointer;padding:0 4px"),b.addRule(".gsst_a:hover","text-decoration:none!important"),b.addRule(".gsst_b","font-size:16px;padding:0 2px;position:relative;"+b.prefix("user-select:none;")+"white-space:nowrap"),b.addRule(".gsst_e","vertical-align:middle;"+(Xh()+":"+Yh(.6)+";")),b.addRule(".gsst_a:hover .gsst_e,.gsst_a:focus .gsst_e",Xh()+":"+Yh(.8)+";"),b.addRule(".gsst_a:active .gsst_e",Xh()+":"+
Yh(1)+";"))};
n.P=function(a){this.u=a.get(118);this.i=ah(a,160)};
n.ga=function(a){this.A=a.Wc;this.i.sort(fl)};
n.nb=function(a){this.g=this.o.get("gs_st");if(!this.g){this.g=P("gsst_b");this.g.id=this.o.getId("gs_st");if(a=a.Pb)this.g.style.lineHeight=a+"px";gl(this)}hl(this)};
n.R=function(){if(this.A)for(var a=0,b;b=this.i[a++];){var c=!!this.m[cl];if(b.isEnabled()!=c){for(;this.g.hasChildNodes();)this.g.removeChild(this.g.lastChild);gl(this);hl(this);break}}};
function fl(){return 0}
function gl(a){for(var b,c=0,d;d=a.i[c++];)if(d.isEnabled()){b=!0;var e=O("a","gsst_a");il(a,e,d);e.appendChild(d.i);a.g.appendChild(e)}a.g.style.display=b?"":"none"}
function hl(a){a.m={};for(var b=0,c;c=a.i[b++];)if(c.isEnabled()){var d=cl,e=c.i.parentNode;e.onclick=F(c.Gd,c);a.m[d]=e;c.Xd&&(c=c.Xd(),c.fi&&(d=a.m[d])&&d.style&&(d.style.visibility="hidden"),d=c.tooltip)&&(e.title=d)}}
function il(a,b,c){nb(b,fb(dl));b.addEventListener("click",function(){return!1});
yh&&(b.tabIndex=0);b.onkeydown=function(d){d=d||window.event;var e=d.keyCode;if(13==e||32==e)c.Gd(d),ni(a.u),Th(d)}}
Ag++;function jl(){this.o=33;this.l=P();this.l.className="gspr_a"}
I(jl,ih);jl.prototype.g=function(){return this.l};function kl(){jh.call(this,33)}
y(kl,jh);kl.prototype.sa=function(a,b){b.addRule(".gspr_a","padding-right:1px")};
kl.prototype.Ib=function(){return new jl};
kl.prototype.Bb=function(a,b){Cb(b.l,ed(id,a.m.g.b||""))};
kl.prototype.Ab=function(a,b,c){pi(c,b.g,1)};function ll(a,b){this.o=0;this.u=a;this.D=b;this.m=P();this.l=P("sbqs_a");this.m.appendChild(this.l);this.B=P("sbqs_c");this.m.appendChild(this.B)}
y(ll,ih);ll.prototype.g=function(){return this.m};
function ml(a,b,c,d){Cb(a.B,lg(b));a.A=c;d&&!a.i&&(a.i=Uh(a.l),a.i.onclick=F(function(e){Hk(this.u.m);cj(this.u,this.A);pi(this.D,this.A,9);return Th(e)},a));
d?(Cb(a.i,lg(d+" &raquo;")),a.l.style.display="",Hh(a.l,"hidden",!0)):a.i&&(a.l.style.display="none")}
;function nl(){jh.call(this,0)}
I(nl,jh);n=nl.prototype;n.sa=function(a,b){b.addRule(".sbsb_c[dir=ltr] .sbqs_a","float:right");b.addRule(".sbsb_c[dir=rtl] .sbqs_a","float:left");b.addRule(".sbqs_b","visibility:hidden");b.addRule(".sbsb_d .sbqs_b","visibility:visible");b.addRule(".sbsb_c[dir=ltr] .sbqs_b","padding-left:5px;");b.addRule(".sbsb_c[dir=rtl] .sbqs_b","padding-right:5px;");b.addRule(".sbqs_c","word-wrap:break-word")};
n.P=function(a){this.g=a.get(118)};
n.R=function(a){this.i=a.Qd?a.Rd:""};
n.Ib=function(a){return new ll(this.g,a)};
n.Bb=function(a,b){ml(b,a.getHtml(),a.g,this.i)};
n.Ab=function(a,b,c){pi(c,b.g,1)};function ol(a){Rk.call(this);Xg(this,149,new bh);this.set(347,new Sk);this.set(133,new Vk);Xg(this,151,new Uk);this.set(570,new $k);this.set(134,new si);this.set(189,new vi);Xg(this,156,new zi);a.ENABLE_DELETE_ICON?Xg(this,152,new oi):Xg(this,152,new ri);Xg(this,152,new kl);Xg(this,152,new nl);this.set(173,new el);Xg(this,160,new bl);this.set(157,new Bi);Xg(this,156,new Ci);"zero-prefix"==a.SEARCHBOX_BEHAVIOR_EXPERIMENT&&Xg(this,156,new Ai(a));var b=a.SBOX_STRINGS||{};a.SEARCHBOX_REPORTING&&a.SEARCHBOX_COMPONENT&&
b.SBOX_REPORT_SUGGESTIONS&&(Xg(this,153,new gh),Xg(this,152,new di(b.SBOX_REPORT_SUGGESTIONS,a.SEARCHBOX_COMPONENT)));a.SEARCHBOX_COMPONENT&&(this.set(598,new Di(a.SEARCHBOX_COMPONENT,a.SEARCHBOX_ENABLE_REFINEMENT_SUGGEST,a.SEARCHBOX_ZERO_TYPING_SUGGEST_USE_REGULAR_SUGGEST)),Xg(this,156,new Ii))}
y(ol,Rk);function pl(){return{yf:function(){return{clientName:"hp",requestIdentifier:"hp",ic:"google.com",Je:"",ad:"en",Nc:"",od:"",videoId:"",zd:"",authuser:0,sg:"",Ei:"",Ge:null,xd:"",Od:!1,rd:"",Ac:"",connectionType:0,transport:null,Ne:!1,ti:!1,ag:!1,enableCaching:!0,rf:10,Xh:10,lf:!0,Md:!0,Th:!1,vf:!1,mg:!1,ng:!1,ii:!1,Wf:!0,hf:!1,Xf:500,Wc:!1,Pf:!0,ci:!0,xi:!1,pc:!1,vc:"",pe:"//www.google.com/textinputassistant",qe:"",Bg:7,Zh:!1,ai:!1,Tf:!1,Sf:!0,Uf:!1,be:!1,Na:!1,Mg:!1,Lg:!1,Dc:1,le:!0,mc:!1,Qd:!1,Nd:!1,
Eg:10,Vc:!1,Ig:!0,Ia:document.body,Vf:!0,Ke:null,pf:{},Wh:{},si:0,wf:!1,bg:!0,lb:!1,uf:!1,Qg:!1,zi:null,mf:!1,rg:null,Sg:null,Qc:!1,Yf:!0,td:!1,cf:!1,Bi:1,ne:!1,Ng:"Search",Rd:"I'm  Feeling Lucky",Og:"",qg:"Learn more",qd:"Remove",pd:"This search was removed from your Web History",di:"",Sh:"Did you mean:",Ag:"",vi:"",Hi:"Search by voice",Gi:'Listening for "Ok Google"',Fi:'Say "Ok Google"',Rh:"Clear Search",Pb:0,ig:0,Zc:"",Cc:"",hi:!1,Mb:"absolute",Qf:!1,ae:!1,xe:null,Rf:!0,kc:[0,0,0],jf:null,Vg:null,
Hd:[0],vd:!0,Me:"",Wg:"",Tg:"",Nb:null,Sc:"",Rc:"",Qh:1,eh:!1,Td:!1,ki:0,Rg:!1,ff:!1,Uh:!1,Fg:!0}}}}
;function ql(a,b,c,d,e){var f=xh?"-moz-":kh?"-ms-":yh?"-o-":zh?"-webkit-":"",g=".gstl_"+d,h=new RegExp("(\\.("+e.join("|")+")\\b)"),k=[];return{addRule:function(l,m){if(b){if(c){l=l.split(",");for(var p=[],r=0,q;q=l[r++];)q=h.test(q)?q.replace(h,g+"$1"):g+" "+q,p.push(q);l=p.join(",")}k.push(l,"{",m,"}")}},
Ye:function(){if(b&&k.length){b=!1;var l=O("style");l.setAttribute("type","text/css");(a||yg).appendChild(l);var m=k.join("");k=null;l.styleSheet?l.styleSheet.cssText=m:l.appendChild(document.createTextNode(m))}},
prefix:function(l,m){var p=l+(m||"");f&&(p+=m?l+f+m:f+l);return p}}}
;function rl(a,b,c,d){this.i=a;this.I=b;this.F=c;this.H=d;this.l=-1;this.D=!1}
n=rl.prototype;n.install=function(a){if(!this.D){a=sl(a);0>this.l&&(this.l=tl(a));var b=Ph(this.i),c=ul(this),d=!!b.getElementById("gs_id"+this.l),e=this,f=["gssb_c","gssb_k","sbdd_a","sbdd_c","sbib_a"];a.Me&&f.push(a.Me);f=ql(a.Ke,a.Vf,a.mf,this.l,f);this.A=a.lb;this.g=new Yg(this.F,this.H,{Lc:function(){return d},
get:function(g){return b.getElementById(g+e.l)},
Ud:function(g){return b.getElementById(g)},
Vd:function(){return e.I},
nc:function(){return c},
getId:function(g){return g+e.l},
Uc:function(){return e.i}},f,this,a);
this.g.get(347);this.u=this.g.get(130);this.g.get(115);this.m=this.g.get(117);this.g.get(123);this.g.get(135);this.J=this.g.get(118);this.Y=this.g.get(119);this.K=this.g.get(374);this.o=this.g.get(120);this.g.get(189);this.W=this.g.get(553);this.g.get(419);this.g.get(126);this.g.get(128);this.g.get(139);this.X=this.g.get(121);a=Wh(this.i);this.s=Vh(a);this.B=F(this.Kg,this);this.m.ra(a,"resize",this.B);this.D=!0}};
n.isActive=function(){return!!this.g&&this.g.isActive()};
function vl(a,b){function c(d){pi(a.X,a.J.g,12);return Sh(d)}
a.m.ra(b,"keyup",function(d){13!=d.keyCode&&32!=d.keyCode||c(d)});
a.m.ra(b,"click",c)}
n.getId=function(){return this.l};
n.lb=function(){return this.A||!!this.u&&this.u.lb()};
n.ud=function(a){this.W.ud(a)};
function tl(a){a=Wh(a.Ke||yg);void 0==a.nextSearchboxId&&(a.nextSearchboxId=50);return a.nextSearchboxId++}
function ul(a){if(a.i)for(a=a.i;a=a.parentNode;){var b=a.dir;if(b)return b}return"ltr"}
function sl(a){a=Pg(a);var b=a.vc;b?a.vc=b.toLowerCase():a.pc=!1;a.mc&&!a.Qd&&(a.mc=!1);Ah||(a.ng=!1);return a}
n.Kg=function(){var a=Vh(Wh(this.i));if(a.Oe!=this.s.Oe||a.de!=this.s.de)this.s=a,Ti(this.m,8)};function wl(){this.B="sbhcn";this.A="sbfcn";this.D="gsfi";this.i="gsfs";this.u=function(){return!0};
H("ytvoicesearchloggingparams",F(this.Af,this))}
y(wl,Vg);n=wl.prototype;n.Af=function(){this.g.K.add(6);return Lj(this.g.o,15)};
n.Dd=function(a){Hk(this.g.Y);this.u(Lj(this.g.o,a))&&this.l.submit()};
n.redirect=function(a){this.J(this.Cd(a))};
n.Cd=function(a){var b=0<=a.indexOf("?")?"&":"?",c=Lj(this.g.o);var d=this.g;c||(c=Lj(d.o));d=Eg(c);return a+b+d};
n.me=function(a){if(this.o||this.m){if(22<this.s){var b=(this.s-22)/2;a.addRule(".sbsb_c","padding:"+b+"px 24px "+b+"px 10px")}else a.addRule(".sbsb_c","padding:4px 24px 4px 10px");this.K?a.addRule(".sbsb_a","padding: 16px 0 0"):a.addRule(".sbsb_a","padding: 16px 0");a.addRule(".sbdd_b","border-top: 0");a.addRule(".sbib_a","background:transparent");a.addRule(".sbib_b","padding: 0")}b='background: no-repeat url("data:image/svg+xml;base64, '+window.btoa('<svg fill="#030303" xmlns="http://www.w3.org/2000/svg"><path d="M12.475 14.1253L8.3333 11.5587V5.83366H9.99997V10.6337L13.3583 12.7087L12.475 14.1253ZM18.3333 10.0003C18.3333 14.592 14.5916 18.3337 9.99997 18.3337C5.4083 18.3337 1.66663 14.592 1.66663 10.0003H2.49997C2.49997 14.1337 5.86663 17.5003 9.99997 17.5003C14.1333 17.5003 17.5 14.1337 17.5 10.0003C17.5 5.86699 14.1333 2.50033 9.99997 2.50033C7.34163 2.50033 4.9333 3.86699 3.56663 6.15033C3.47497 6.30033 3.3833 6.45866 3.3083 6.61699C3.29997 6.63366 3.29163 6.65033 3.2833 6.66699H6.66663V7.50033H1.6333V2.50033H2.46663V6.45033C2.49997 6.37533 2.52497 6.30866 2.5583 6.24199C2.64997 6.05866 2.74997 5.89199 2.84997 5.71699C4.34997 3.21699 7.09163 1.66699 9.99997 1.66699C14.5916 1.66699 18.3333 5.40866 18.3333 10.0003Z"/></svg>')+
'");';a.addRule(".sbpqs_a","display: flex; align-items:center; white-space: pre;");a.addRule(".sbpqs_a:before",b);b=this.I?'<svg fill="fillColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11ZM16.2961 16.9961C14.8853 18.2431 13.031 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 13.0274 18.2458 14.8786 17.0028 16.2885L20.5583 19.8441L20.9119 20.1976L20.2048 20.9047L19.8512 20.5512L16.2961 16.9961Z"/>\n</svg>':
'<svg fill="fillColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.3917 16.8083L12.7333 12.15C13.625 11.125 14.1667 9.79167 14.1667 8.33333C14.1667 5.10833 11.5583 2.5 8.33333 2.5C5.10833 2.5 2.5 5.10833 2.5 8.33333C2.5 11.5583 5.10833 14.1667 8.33333 14.1667C9.79167 14.1667 11.125 13.625 12.15 12.7417L16.8083 17.4L17.3917 16.8083ZM8.33333 13.3333C5.575 13.3333 3.33333 11.0917 3.33333 8.33333C3.33333 5.575 5.575 3.33333 8.33333 3.33333C11.0917 3.33333 13.3333 5.575 13.3333 8.33333C13.3333 11.0917 11.0917 13.3333 8.33333 13.3333Z"/></svg>';
var c='background: no-repeat url("data:image/svg+xml;base64,'+window.btoa(b.replace("fillColor","#030303"))+'");';a.addRule(".sbqs_c","display: flex; align-items:center; white-space: pre;");a.addRule(".sbqs_c:before",c);c='background: no-repeat url("data:image/svg+xml;base64, '+window.btoa('<svg fill="#f1f1f1" xmlns="http://www.w3.org/2000/svg"><path d="M12.475 14.1253L8.3333 11.5587V5.83366H9.99997V10.6337L13.3583 12.7087L12.475 14.1253ZM18.3333 10.0003C18.3333 14.592 14.5916 18.3337 9.99997 18.3337C5.4083 18.3337 1.66663 14.592 1.66663 10.0003H2.49997C2.49997 14.1337 5.86663 17.5003 9.99997 17.5003C14.1333 17.5003 17.5 14.1337 17.5 10.0003C17.5 5.86699 14.1333 2.50033 9.99997 2.50033C7.34163 2.50033 4.9333 3.86699 3.56663 6.15033C3.47497 6.30033 3.3833 6.45866 3.3083 6.61699C3.29997 6.63366 3.29163 6.65033 3.2833 6.66699H6.66663V7.50033H1.6333V2.50033H2.46663V6.45033C2.49997 6.37533 2.52497 6.30866 2.5583 6.24199C2.64997 6.05866 2.74997 5.89199 2.84997 5.71699C4.34997 3.21699 7.09163 1.66699 9.99997 1.66699C14.5916 1.66699 18.3333 5.40866 18.3333 10.0003Z"/></svg>')+
'");';a.addRule("html[dark] .sbpqs_a:before",c);b='background: no-repeat url("data:image/svg+xml;base64, '+window.btoa(b.replace("fillColor","#f1f1f1"))+'");';a.addRule("html[dark] .sbqs_c:before",b);a.addRule(".sbpqs_a:before",'height: 20px; width: 20px; content: " ";');a.addRule(".sbqs_c:before",'height: 20px; width: 20px; content: " ";');a.addRule(".sbpqs_c","display: flex; align-items:center; margin-left: 34px;");a.addRule(".sbsb_c[dir=rtl] .sbpqs_c","margin-right: 34px;");a.addRule(".sbsb_c",
"line-height: 32px;");a.addRule(".sbpqs_c","line-height: 32px;");a.addRule(".sbsb_a","padding: 16px 0 8px");a.addRule(".sbfl_a","margin:-5px -18px -9px 0");a.addRule("."+this.i,"font-size:1.6rem;color:#222");a.addRule(".sbdd_c","z-index:2010");a.addRule(".sbdd_a","z-index:2021");a.addRule(".sbib_a","background:transparent; width: 100%; flex: 1;");a.addRule("ytd-masthead[dark] .gsst_e","filter: invert(100%)");a.addRule(".sbpqs_a","color: #030303");a.addRule(".sbqs_c b","font-weight:500");a.addRule(".sbpqs_a b",
"font-weight: 500");a.addRule("html[dark] .sbqs_c b","font-weight: 600");a.addRule("html[dark] .sbpqs_a b","font-weight: 600");a.addRule(".sbsb_c[dir=ltr]","padding: 0px 24px 0px 16px;");a.addRule(".sbsb_c[dir=rtl]","padding: 0px 16px 0px 24px;");a.addRule(".sbdd_b","border-radius: 12px;");a.addRule(".sbsb_a","border-radius: 12px;");a.addRule(".sbsb_c[dir=ltr] .sbpqs_a:before","margin-right: 14px;");a.addRule(".sbsb_c[dir=ltr] .sbqs_c:before","margin-right: 14px;");a.addRule(".sbsb_c[dir=rtl] .sbpqs_a:before",
"margin-left: 14px;");a.addRule(".sbsb_c[dir=rtl] .sbqs_c:before","margin-left: 14px;");a.addRule(".sbfl_a","margin:-5px -10px -9px 0");this.H&&(a.addRule(".sbsb_c","padding:0px 12px 0px 16px"),a.addRule(".sbpqs_b","display: flex; align-items: center; height: 32px;"));this.F&&(a.addRule(".sbpqs_b","display: none"),a.addRule(".sbsb_d .sbpqs_b","display: flex; align-items: center; height: 32px;"));a.addRule("html[dark] .sbsb_a","background: var(--yt-spec-raised-background);");a.addRule("html[dark] .sbdd_b",
"border: none; background: none; box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.15);");a.addRule("html[dark] .sbsb_i","color: var(--yt-spec-call-to-action)");a.addRule("html[dark] .sbsb_d","background: var(--yt-spec-additive-background);");a.addRule(".sbfl_b","background: none; color: var(--yt-spec-text-secondary);");a.addRule("html[dark] .sbfl_a:hover","color: var(--yt-spec-text-primary);");a.addRule("html[dark] .sbpqs_a","color: var(--yt-spec-text-primary);");a.addRule("html[dark] .sbqs_c","color: var(--yt-spec-text-primary);");
a.addRule("html[dark] .sbse","color: var(--yt-spec-text-primary);")};
n.install=function(a,b,c,d,e,f,g){this.l=a;this.J=f;g&&(this.u=g);f=pl().yf();f.clientName="youtube";f.requestIdentifier="youtube";f.Nc="yt";f.ad=d.REQUEST_LANGUAGE;f.Je=d.REQUEST_DOMAIN;f.Pf=!1;f.Dc=0;f.le=!1;f.mc=!1;f.ne=!1;f.Vc=!0;f.Zc=this.D;f.Cc=this.i;f.Sc=this.B;f.Rc=this.A;f.gi=!0;f.pc=d.HAS_ON_SCREEN_KEYBOARD;f.vc=d.REQUEST_LANGUAGE;f.pe="//www.gstatic.com/inputtools/images";f.qe="youtube";f.Qc=!0;f.Mb="fixed";this.o=d.IS_POLYMER;this.m=d.IS_FUSION;this.K=d.SEARCHBOX_REPORTING;this.s=d.SEARCHBOX_TAP_TARGET_EXPERIMENT;
this.H=d.ENABLE_DELETE_ICON;this.F=d.ENABLE_DELETE_ICON_HOVER;this.I=d.ENABLE_PROMINENT_SEARCH_ICON;f.rd="suggestqueries-clients6.youtube.com";d.PQ&&(f.od=d.PQ);f.zd=d.PSUGGEST_TOKEN;f.authuser=d.SESSION_INDEX;f.pd=e.SUGGESTION_DISMISSED_LABEL;f.qd=e.SUGGESTION_DISMISS_LABEL;f.vd=!d.HIDE_REMOVE_LINK;f.Ai=Bg([0,33,35]);this.o?(f.Nb="search-container",f.Pb=24):this.m?(f.Nb="masthead-search",f.Pb=24):(f.Nb="masthead-search-terms",f.Pb=30);bc()||(f.ae=!0);f.xe=f.Nb;e=this.l.offsetHeight;f.kc=[e+(56-e)/
2-40+4,0,0];e=[0];cc()&&"8.0"==hc()&&(e[0]=-1);f.Hd=e;(e=d.REQUEST_LANGUAGE)?(e=e.toLowerCase(),e="zh-tw"==e||"zh-cn"==e||"ja"==e||"ko"==e):e=!1;e&&(f.Nd=!0);if(e=d.SUGG_EXP_ID)f.xd=e;d.SEND_VISITOR_DATA&&(f.connectionType=1);d.SEND_VISITOR_DATA&&"VISITOR_DATA"in d&&(f.visitorData=d.VISITOR_DATA);if(this.g){a=this.g;b=f;c=Wh(a.i);d=a.B;c.removeEventListener?c.removeEventListener("resize",d,!1):c.detachEvent("onresize",d);$g(a.g);b=sl(b);a.A=b.lb;a=a.g;$g(a);for(c=0;d=a.g[c++];)d.R(b);a.l=!0}else d=
new ol(d),this.g=new rl(b,a,this,d),this.g.install(f),c&&(vl(this.g,c),c.onclick=null)};function xl(){this.data=[];this.g=-1}
xl.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.g=-1)};
xl.prototype.get=function(a){return!!this.data[a]};
function yl(a){-1===a.g&&(a.g=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.g}
;function zl(){this.blockSize=-1}
;function Al(){this.blockSize=-1;this.blockSize=64;this.g=[];this.o=[];this.s=[];this.i=[];this.i[0]=128;for(var a=1;a<this.blockSize;++a)this.i[a]=0;this.m=this.l=0;this.reset()}
I(Al,zl);Al.prototype.reset=function(){this.g[0]=1732584193;this.g[1]=4023233417;this.g[2]=2562383102;this.g[3]=271733878;this.g[4]=3285377520;this.m=this.l=0};
function Bl(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.g[0];c=a.g[1];var g=a.g[2],h=a.g[3],k=a.g[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.g[0]=a.g[0]+b&4294967295;a.g[1]=a.g[1]+c&4294967295;a.g[2]=a.g[2]+g&4294967295;a.g[3]=a.g[3]+h&4294967295;a.g[4]=a.g[4]+k&4294967295}
Al.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.l;d<b;){if(0==f)for(;d<=c;)Bl(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Bl(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Bl(this,e);f=0;break}}this.l=f;this.m+=b}};
Al.prototype.digest=function(){var a=[],b=8*this.m;56>this.l?this.update(this.i,56-this.l):this.update(this.i,this.blockSize-(this.l-56));for(var c=this.blockSize-1;56<=c;c--)this.o[c]=b&255,b/=256;Bl(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.g[c]>>d&255,++b;return a};function Cl(){}
Cl.prototype.next=function(){return Dl};
var Dl={done:!0,value:void 0};Cl.prototype.kb=function(){return this};function El(a){if(a instanceof Fl||a instanceof Gl||a instanceof Hl)return a;if("function"==typeof a.next)return new Fl(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Fl(function(){return a[Symbol.iterator]()});
if("function"==typeof a.kb)return new Fl(function(){return a.kb()});
throw Error("Not an iterator or iterable.");}
function Fl(a){this.g=a}
Fl.prototype.kb=function(){return new Gl(this.g())};
Fl.prototype[Symbol.iterator]=function(){return new Hl(this.g())};
Fl.prototype.l=function(){return new Hl(this.g())};
function Gl(a){this.g=a}
y(Gl,Cl);Gl.prototype.next=function(){return this.g.next()};
Gl.prototype[Symbol.iterator]=function(){return new Hl(this.g)};
Gl.prototype.l=function(){return new Hl(this.g)};
function Hl(a){Fl.call(this,function(){return a});
this.i=a}
y(Hl,Fl);Hl.prototype.next=function(){return this.i.next()};function Il(a){var b=[];Jl(new Kl,a,b);return b.join("")}
function Kl(){}
function Jl(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Jl(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Ll(d,c),c.push(":"),Jl(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Ll(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Ml={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Nl=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Ll(a,b){b.push('"',a.replace(Nl,function(c){var d=Ml[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Ml[c]=d);return d}),'"')}
;function Ol(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function R(a){Sb.call(this);this.s=1;this.i=[];this.o=0;this.g=[];this.l={};this.u=!!a}
I(R,Sb);n=R.prototype;n.subscribe=function(a,b,c){var d=this.l[a];d||(d=this.l[a]=[]);var e=this.s;this.g[e]=a;this.g[e+1]=b;this.g[e+2]=c;this.s=e+3;d.push(e);return e};
n.Fc=function(a){var b=this.g[a];if(b){var c=this.l[b];0!=this.o?(this.i.push(a),this.g[a+1]=function(){}):(c&&rb(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
n.ue=function(a,b){var c=this.l[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.u)for(e=0;e<c.length;e++){var g=c[e];Pl(this.g[g+1],this.g[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.ab;e++)g=c[e],this.g[g+1].apply(this.g[g+2],d)}finally{if(this.o--,0<this.i.length&&0==this.o)for(;c=this.i.pop();)this.Fc(c)}}return 0!=e}return!1};
function Pl(a,b,c){yd(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.l[a];b&&(b.forEach(this.Fc,this),delete this.l[a])}else this.g.length=0,this.l={}};
n.Ba=function(){R.Fa.Ba.call(this);this.clear();this.i.length=0};function Ql(a){this.g=a}
Ql.prototype.set=function(a,b){void 0===b?this.g.remove(a):this.g.set(a,Il(b))};
Ql.prototype.get=function(a){try{var b=this.g.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Ql.prototype.remove=function(a){this.g.remove(a)};function Rl(a){this.g=a}
I(Rl,Ql);function Sl(a){this.data=a}
function Tl(a){return void 0===a||a instanceof Sl?a:new Sl(a)}
Rl.prototype.set=function(a,b){Rl.Fa.set.call(this,a,Tl(b))};
Rl.prototype.l=function(a){a=Rl.Fa.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Rl.prototype.get=function(a){if(a=this.l(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Ul(a){this.g=a}
I(Ul,Rl);Ul.prototype.set=function(a,b,c){if(b=Tl(b)){if(c){if(c<G()){Ul.prototype.remove.call(this,a);return}b.expiration=c}b.creation=G()}Ul.Fa.set.call(this,a,b)};
Ul.prototype.l=function(a){var b=Ul.Fa.l.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<G()||c&&c>G())Ul.prototype.remove.call(this,a);else return b}};function Vl(){}
;function Wl(){}
I(Wl,Vl);Wl.prototype[Symbol.iterator]=function(){return El(this.kb(!0)).l()};
Wl.prototype.clear=function(){var a=Array.from(this);a=w(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Xl(a){this.g=a;this.l=null}
I(Xl,Wl);n=Xl.prototype;n.set=function(a,b){Yl(this);try{this.g.setItem(a,b)}catch(c){if(0==this.g.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){Yl(this);a=this.g.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){Yl(this);this.g.removeItem(a)};
n.kb=function(a){Yl(this);var b=0,c=this.g,d=new Cl;d.next=function(){if(b>=c.length)return Dl;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
n.clear=function(){Yl(this);this.g.clear()};
n.key=function(a){Yl(this);return this.g.key(a)};
function Yl(a){if(null==a.g)throw Error("Storage mechanism: Storage unavailable");var b;(null!=(b=a.l)?b:a.l=Zl(a.g))||rd(Error("Storage mechanism: Storage unavailable"))}
function Zl(a){if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return b instanceof DOMException&&("QuotaExceededError"===b.name||22===b.code||1014===b.code||"NS_ERROR_DOM_QUOTA_REACHED"===b.name)&&a&&0!==a.length}}
;function $l(){var a=null;try{a=C.localStorage||null}catch(b){}Xl.call(this,a)}
I($l,Xl);function am(a,b){this.l=a;this.g=b+"::"}
I(am,Wl);am.prototype.set=function(a,b){this.l.set(this.g+a,b)};
am.prototype.get=function(a){return this.l.get(this.g+a)};
am.prototype.remove=function(a){this.l.remove(this.g+a)};
am.prototype.kb=function(a){var b=this.l[Symbol.iterator](),c=this,d=new Cl;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.g.length)!=c.g;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.g.length):c.l.get(e),done:!1}};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var T={},bm="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;T.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
T.wd=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var cm={mb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Sd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},dm={mb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Sd:function(a){return[].concat.apply([],a)}};
T.Pg=function(){bm?(T.jb=Uint8Array,T.Ka=Uint16Array,T.Re=Int32Array,T.assign(T,cm)):(T.jb=Array,T.Ka=Array,T.Re=Array,T.assign(T,dm))};
T.Pg();var em=!0;try{new Uint8Array(1)}catch(a){em=!1}
function fm(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new T.jb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var gm={};gm=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var hm={},im,jm=[],km=0;256>km;km++){im=km;for(var lm=0;8>lm;lm++)im=im&1?3988292384^im>>>1:im>>>1;jm[km]=im}hm=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^jm[(a^b[d])&255];return a^-1};var mm={};mm={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function nm(a){for(var b=a.length;0<=--b;)a[b]=0}
var om=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],pm=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],qm=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],rm=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],sm=Array(576);nm(sm);var tm=Array(60);nm(tm);var um=Array(512);nm(um);var vm=Array(256);nm(vm);var wm=Array(29);nm(wm);var xm=Array(30);nm(xm);function ym(a,b,c,d,e){this.Ie=a;this.tf=b;this.sf=c;this.kf=d;this.xg=e;this.ce=a&&a.length}
var zm,Am,Bm;function Cm(a,b){this.Ld=a;this.wb=0;this.Ua=b}
function Dm(a,b){a.ba[a.pending++]=b&255;a.ba[a.pending++]=b>>>8&255}
function Em(a,b,c){a.ha>16-c?(a.pa|=b<<a.ha&65535,Dm(a,a.pa),a.pa=b>>16-a.ha,a.ha+=c-16):(a.pa|=b<<a.ha&65535,a.ha+=c)}
function Fm(a,b,c){Em(a,c[2*b],c[2*b+1])}
function Gm(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function Hm(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=Gm(d[e]++,e))}
function Im(a){var b;for(b=0;286>b;b++)a.ta[2*b]=0;for(b=0;30>b;b++)a.bb[2*b]=0;for(b=0;19>b;b++)a.ka[2*b]=0;a.ta[512]=1;a.Ra=a.zb=0;a.za=a.matches=0}
function Jm(a){8<a.ha?Dm(a,a.pa):0<a.ha&&(a.ba[a.pending++]=a.pa);a.pa=0;a.ha=0}
function Km(a,b,c){Jm(a);Dm(a,c);Dm(a,~c);T.mb(a.ba,a.window,b,c,a.pending);a.pending+=c}
function Lm(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Mm(a,b,c){for(var d=a.da[c],e=c<<1;e<=a.Qa;){e<a.Qa&&Lm(b,a.da[e+1],a.da[e],a.depth)&&e++;if(Lm(b,d,a.da[e],a.depth))break;a.da[c]=a.da[e];c=e;e<<=1}a.da[c]=d}
function Nm(a,b,c){var d=0;if(0!==a.za){do{var e=a.ba[a.Jb+2*d]<<8|a.ba[a.Jb+2*d+1];var f=a.ba[a.cd+d];d++;if(0===e)Fm(a,f,b);else{var g=vm[f];Fm(a,g+256+1,b);var h=om[g];0!==h&&(f-=wm[g],Em(a,f,h));e--;g=256>e?um[e]:um[256+(e>>>7)];Fm(a,g,c);h=pm[g];0!==h&&(e-=xm[g],Em(a,e,h))}}while(d<a.za)}Fm(a,256,b)}
function Om(a,b){var c=b.Ld,d=b.Ua.Ie,e=b.Ua.ce,f=b.Ua.kf,g,h=-1;a.Qa=0;a.sb=573;for(g=0;g<f;g++)0!==c[2*g]?(a.da[++a.Qa]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.Qa;){var k=a.da[++a.Qa]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.Ra--;e&&(a.zb-=d[2*k+1])}b.wb=h;for(g=a.Qa>>1;1<=g;g--)Mm(a,c,g);k=f;do g=a.da[1],a.da[1]=a.da[a.Qa--],Mm(a,c,1),d=a.da[1],a.da[--a.sb]=g,a.da[--a.sb]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.da[1]=k++,Mm(a,c,1);while(2<=
a.Qa);a.da[--a.sb]=a.da[1];g=b.Ld;k=b.wb;d=b.Ua.Ie;e=b.Ua.ce;f=b.Ua.tf;var l=b.Ua.sf,m=b.Ua.xg,p,r=0;for(p=0;15>=p;p++)a.Ma[p]=0;g[2*a.da[a.sb]+1]=0;for(b=a.sb+1;573>b;b++){var q=a.da[b];p=g[2*g[2*q+1]+1]+1;p>m&&(p=m,r++);g[2*q+1]=p;if(!(q>k)){a.Ma[p]++;var t=0;q>=l&&(t=f[q-l]);var u=g[2*q];a.Ra+=u*(p+t);e&&(a.zb+=u*(d[2*q+1]+t))}}if(0!==r){do{for(p=m-1;0===a.Ma[p];)p--;a.Ma[p]--;a.Ma[p+1]+=2;a.Ma[m]--;r-=2}while(0<r);for(p=m;0!==p;p--)for(q=a.Ma[p];0!==q;)d=a.da[--b],d>k||(g[2*d+1]!==p&&(a.Ra+=(p-
g[2*d+1])*g[2*d],g[2*d+1]=p),q--)}Hm(c,h,a.Ma)}
function Pm(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.ka[2*l]+=g:0!==l?(l!==e&&a.ka[2*l]++,a.ka[32]++):10>=g?a.ka[34]++:a.ka[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Qm(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do Fm(a,l,a.ka);while(0!==--g)}else 0!==l?(l!==e&&(Fm(a,l,a.ka),g--),Fm(a,16,a.ka),Em(a,g-3,2)):10>=g?(Fm(a,17,a.ka),Em(a,g-3,3)):(Fm(a,18,a.ka),Em(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function Rm(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.ta[2*c])return 0;if(0!==a.ta[18]||0!==a.ta[20]||0!==a.ta[26])return 1;for(c=32;256>c;c++)if(0!==a.ta[2*c])return 1;return 0}
var Sm=!1;function Tm(a,b,c){a.ba[a.Jb+2*a.za]=b>>>8&255;a.ba[a.Jb+2*a.za+1]=b&255;a.ba[a.cd+a.za]=c&255;a.za++;0===b?a.ta[2*c]++:(a.matches++,b--,a.ta[2*(vm[c]+256+1)]++,a.bb[2*(256>b?um[b]:um[256+(b>>>7)])]++);return a.za===a.Sb-1}
;function Um(a,b){a.msg=mm[b];return b}
function Vm(a){for(var b=a.length;0<=--b;)a[b]=0}
function Wm(a){var b=a.state,c=b.pending;c>a.U&&(c=a.U);0!==c&&(T.mb(a.output,b.ba,b.Tb,c,a.xb),a.xb+=c,b.Tb+=c,a.yd+=c,a.U-=c,b.pending-=c,0===b.pending&&(b.Tb=0))}
function Xm(a,b){var c=0<=a.va?a.va:-1,d=a.C-a.va,e=0;if(0<a.level){2===a.S.Oc&&(a.S.Oc=Rm(a));Om(a,a.uc);Om(a,a.jc);Pm(a,a.ta,a.uc.wb);Pm(a,a.bb,a.jc.wb);Om(a,a.Id);for(e=18;3<=e&&0===a.ka[2*rm[e]+1];e--);a.Ra+=3*(e+1)+14;var f=a.Ra+3+7>>>3;var g=a.zb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)Em(a,b?1:0,3),Km(a,c,d);else if(4===a.strategy||g===f)Em(a,2+(b?1:0),3),Nm(a,sm,tm);else{Em(a,4+(b?1:0),3);c=a.uc.wb+1;d=a.jc.wb+1;e+=1;Em(a,c-257,5);Em(a,d-1,5);Em(a,e-4,4);for(f=0;f<e;f++)Em(a,a.ka[2*
rm[f]+1],3);Qm(a,a.ta,c-1);Qm(a,a.bb,d-1);Nm(a,a.ta,a.bb)}Im(a);b&&Jm(a);a.va=a.C;Wm(a.S)}
function U(a,b){a.ba[a.pending++]=b}
function Ym(a,b){a.ba[a.pending++]=b>>>8&255;a.ba[a.pending++]=b&255}
function Zm(a,b){var c=a.ke,d=a.C,e=a.wa,f=a.oe,g=a.C>a.ma-262?a.C-(a.ma-262):0,h=a.window,k=a.Wa,l=a.Ja,m=a.C+258,p=h[d+e-1],r=h[d+e];a.wa>=a.Zd&&(c>>=2);f>a.G&&(f=a.G);do{var q=b;if(h[q+e]===r&&h[q+e-1]===p&&h[q]===h[d]&&h[++q]===h[d+1]){d+=2;for(q++;h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&d<m;);q=258-(m-d);d=m-258;if(q>e){a.vb=b;e=q;if(q>=f)break;p=h[d+e-1];r=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.G?e:a.G}
function $m(a){var b=a.ma,c;do{var d=a.Pe-a.G-a.C;if(a.C>=b+(b-262)){T.mb(a.window,a.window,b,b,0);a.vb-=b;a.C-=b;a.va-=b;var e=c=a.qc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ja[--e],a.Ja[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.S.oa)break;e=a.S;c=a.window;f=a.C+a.G;var g=e.oa;g>d&&(g=d);0===g?c=0:(e.oa-=g,T.mb(c,e.input,e.gb,g,f),1===e.state.wrap?e.N=gm(e.N,c,g,f):2===e.state.wrap&&(e.N=hm(e.N,c,g,f)),e.gb+=g,e.ib+=g,c=g);a.G+=c;if(3<=a.G+a.la)for(d=a.C-a.la,a.T=a.window[d],
a.T=(a.T<<a.Pa^a.window[d+1])&a.Oa;a.la&&!(a.T=(a.T<<a.Pa^a.window[d+3-1])&a.Oa,a.Ja[d&a.Wa]=a.head[a.T],a.head[a.T]=d,d++,a.la--,3>a.G+a.la););}while(262>a.G&&0!==a.S.oa)}
function an(a,b){for(var c;;){if(262>a.G){$m(a);if(262>a.G&&0===b)return 1;if(0===a.G)break}c=0;3<=a.G&&(a.T=(a.T<<a.Pa^a.window[a.C+3-1])&a.Oa,c=a.Ja[a.C&a.Wa]=a.head[a.T],a.head[a.T]=a.C);0!==c&&a.C-c<=a.ma-262&&(a.V=Zm(a,c));if(3<=a.V)if(c=Tm(a,a.C-a.vb,a.V-3),a.G-=a.V,a.V<=a.fd&&3<=a.G){a.V--;do a.C++,a.T=(a.T<<a.Pa^a.window[a.C+3-1])&a.Oa,a.Ja[a.C&a.Wa]=a.head[a.T],a.head[a.T]=a.C;while(0!==--a.V);a.C++}else a.C+=a.V,a.V=0,a.T=a.window[a.C],a.T=(a.T<<a.Pa^a.window[a.C+1])&a.Oa;else c=Tm(a,0,
a.window[a.C]),a.G--,a.C++;if(c&&(Xm(a,!1),0===a.S.U))return 1}a.la=2>a.C?a.C:2;return 4===b?(Xm(a,!0),0===a.S.U?3:4):a.za&&(Xm(a,!1),0===a.S.U)?1:2}
function bn(a,b){for(var c,d;;){if(262>a.G){$m(a);if(262>a.G&&0===b)return 1;if(0===a.G)break}c=0;3<=a.G&&(a.T=(a.T<<a.Pa^a.window[a.C+3-1])&a.Oa,c=a.Ja[a.C&a.Wa]=a.head[a.T],a.head[a.T]=a.C);a.wa=a.V;a.se=a.vb;a.V=2;0!==c&&a.wa<a.fd&&a.C-c<=a.ma-262&&(a.V=Zm(a,c),5>=a.V&&(1===a.strategy||3===a.V&&4096<a.C-a.vb)&&(a.V=2));if(3<=a.wa&&a.V<=a.wa){d=a.C+a.G-3;c=Tm(a,a.C-1-a.se,a.wa-3);a.G-=a.wa-1;a.wa-=2;do++a.C<=d&&(a.T=(a.T<<a.Pa^a.window[a.C+3-1])&a.Oa,a.Ja[a.C&a.Wa]=a.head[a.T],a.head[a.T]=a.C);
while(0!==--a.wa);a.eb=0;a.V=2;a.C++;if(c&&(Xm(a,!1),0===a.S.U))return 1}else if(a.eb){if((c=Tm(a,0,a.window[a.C-1]))&&Xm(a,!1),a.C++,a.G--,0===a.S.U)return 1}else a.eb=1,a.C++,a.G--}a.eb&&(Tm(a,0,a.window[a.C-1]),a.eb=0);a.la=2>a.C?a.C:2;return 4===b?(Xm(a,!0),0===a.S.U?3:4):a.za&&(Xm(a,!1),0===a.S.U)?1:2}
function cn(a,b){for(var c,d,e,f=a.window;;){if(258>=a.G){$m(a);if(258>=a.G&&0===b)return 1;if(0===a.G)break}a.V=0;if(3<=a.G&&0<a.C&&(d=a.C-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.C+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.V=258-(e-d);a.V>a.G&&(a.V=a.G)}3<=a.V?(c=Tm(a,1,a.V-3),a.G-=a.V,a.C+=a.V,a.V=0):(c=Tm(a,0,a.window[a.C]),a.G--,a.C++);if(c&&(Xm(a,!1),0===a.S.U))return 1}a.la=0;return 4===b?(Xm(a,!0),0===a.S.U?3:4):
a.za&&(Xm(a,!1),0===a.S.U)?1:2}
function dn(a,b){for(var c;;){if(0===a.G&&($m(a),0===a.G)){if(0===b)return 1;break}a.V=0;c=Tm(a,0,a.window[a.C]);a.G--;a.C++;if(c&&(Xm(a,!1),0===a.S.U))return 1}a.la=0;return 4===b?(Xm(a,!0),0===a.S.U?3:4):a.za&&(Xm(a,!1),0===a.S.U)?1:2}
function en(a,b,c,d,e){this.Cf=a;this.wg=b;this.zg=c;this.vg=d;this.xf=e}
var fn;fn=[new en(0,0,0,0,function(a,b){var c=65535;for(c>a.Aa-5&&(c=a.Aa-5);;){if(1>=a.G){$m(a);if(0===a.G&&0===b)return 1;if(0===a.G)break}a.C+=a.G;a.G=0;var d=a.va+c;if(0===a.C||a.C>=d)if(a.G=a.C-d,a.C=d,Xm(a,!1),0===a.S.U)return 1;if(a.C-a.va>=a.ma-262&&(Xm(a,!1),0===a.S.U))return 1}a.la=0;if(4===b)return Xm(a,!0),0===a.S.U?3:4;a.C>a.va&&Xm(a,!1);return 1}),
new en(4,4,8,4,an),new en(4,5,16,8,an),new en(4,6,32,32,an),new en(4,4,16,16,bn),new en(8,16,32,32,bn),new en(8,16,128,128,bn),new en(8,32,128,256,bn),new en(32,128,258,1024,bn),new en(32,258,258,4096,bn)];
function gn(){this.S=null;this.status=0;this.ba=null;this.wrap=this.pending=this.Tb=this.Aa=0;this.L=null;this.Ca=0;this.method=8;this.tb=-1;this.Wa=this.Bd=this.ma=0;this.window=null;this.Pe=0;this.head=this.Ja=null;this.oe=this.Zd=this.strategy=this.level=this.fd=this.ke=this.wa=this.G=this.vb=this.C=this.eb=this.se=this.V=this.va=this.Pa=this.Oa=this.Xc=this.qc=this.T=0;this.ta=new T.Ka(1146);this.bb=new T.Ka(122);this.ka=new T.Ka(78);Vm(this.ta);Vm(this.bb);Vm(this.ka);this.Id=this.jc=this.uc=
null;this.Ma=new T.Ka(16);this.da=new T.Ka(573);Vm(this.da);this.sb=this.Qa=0;this.depth=new T.Ka(573);Vm(this.depth);this.ha=this.pa=this.la=this.matches=this.zb=this.Ra=this.Jb=this.za=this.Sb=this.cd=0}
function hn(a,b){if(!a||!a.state||5<b||0>b)return a?Um(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.oa||666===c.status&&4!==b)return Um(a,0===a.U?-5:-2);c.S=a;var d=c.tb;c.tb=b;if(42===c.status)if(2===c.wrap)a.N=0,U(c,31),U(c,139),U(c,8),c.L?(U(c,(c.L.text?1:0)+(c.L.Sa?2:0)+(c.L.extra?4:0)+(c.L.name?8:0)+(c.L.comment?16:0)),U(c,c.L.time&255),U(c,c.L.time>>8&255),U(c,c.L.time>>16&255),U(c,c.L.time>>24&255),U(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),U(c,c.L.mi&255),c.L.extra&&c.L.extra.length&&
(U(c,c.L.extra.length&255),U(c,c.L.extra.length>>8&255)),c.L.Sa&&(a.N=hm(a.N,c.ba,c.pending,0)),c.Ca=0,c.status=69):(U(c,0),U(c,0),U(c,0),U(c,0),U(c,0),U(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),U(c,3),c.status=113);else{var e=8+(c.Bd-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.C&&(e|=32);c.status=113;Ym(c,e+(31-e%31));0!==c.C&&(Ym(c,a.N>>>16),Ym(c,a.N&65535));a.N=1}if(69===c.status)if(c.L.extra){for(e=c.pending;c.Ca<(c.L.extra.length&65535)&&(c.pending!==c.Aa||
(c.L.Sa&&c.pending>e&&(a.N=hm(a.N,c.ba,c.pending-e,e)),Wm(a),e=c.pending,c.pending!==c.Aa));)U(c,c.L.extra[c.Ca]&255),c.Ca++;c.L.Sa&&c.pending>e&&(a.N=hm(a.N,c.ba,c.pending-e,e));c.Ca===c.L.extra.length&&(c.Ca=0,c.status=73)}else c.status=73;if(73===c.status)if(c.L.name){e=c.pending;do{if(c.pending===c.Aa&&(c.L.Sa&&c.pending>e&&(a.N=hm(a.N,c.ba,c.pending-e,e)),Wm(a),e=c.pending,c.pending===c.Aa)){var f=1;break}f=c.Ca<c.L.name.length?c.L.name.charCodeAt(c.Ca++)&255:0;U(c,f)}while(0!==f);c.L.Sa&&c.pending>
e&&(a.N=hm(a.N,c.ba,c.pending-e,e));0===f&&(c.Ca=0,c.status=91)}else c.status=91;if(91===c.status)if(c.L.comment){e=c.pending;do{if(c.pending===c.Aa&&(c.L.Sa&&c.pending>e&&(a.N=hm(a.N,c.ba,c.pending-e,e)),Wm(a),e=c.pending,c.pending===c.Aa)){f=1;break}f=c.Ca<c.L.comment.length?c.L.comment.charCodeAt(c.Ca++)&255:0;U(c,f)}while(0!==f);c.L.Sa&&c.pending>e&&(a.N=hm(a.N,c.ba,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.L.Sa?(c.pending+2>c.Aa&&Wm(a),c.pending+2<=c.Aa&&(U(c,
a.N&255),U(c,a.N>>8&255),a.N=0,c.status=113)):c.status=113);if(0!==c.pending){if(Wm(a),0===a.U)return c.tb=-1,0}else if(0===a.oa&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return Um(a,-5);if(666===c.status&&0!==a.oa)return Um(a,-5);if(0!==a.oa||0!==c.G||0!==b&&666!==c.status){d=2===c.strategy?dn(c,b):3===c.strategy?cn(c,b):fn[c.level].xf(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.U&&(c.tb=-1),0;if(2===d&&(1===b?(Em(c,2,3),Fm(c,256,sm),16===c.ha?(Dm(c,c.pa),c.pa=0,c.ha=0):8<=c.ha&&
(c.ba[c.pending++]=c.pa&255,c.pa>>=8,c.ha-=8)):5!==b&&(Em(c,0,3),Km(c,0,0),3===b&&(Vm(c.head),0===c.G&&(c.C=0,c.va=0,c.la=0))),Wm(a),0===a.U))return c.tb=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(U(c,a.N&255),U(c,a.N>>8&255),U(c,a.N>>16&255),U(c,a.N>>24&255),U(c,a.ib&255),U(c,a.ib>>8&255),U(c,a.ib>>16&255),U(c,a.ib>>24&255)):(Ym(c,a.N>>>16),Ym(c,a.N&65535));Wm(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var jn={};jn=function(){this.input=null;this.ib=this.oa=this.gb=0;this.output=null;this.yd=this.U=this.xb=0;this.msg="";this.state=null;this.Oc=2;this.N=0};var kn=Object.prototype.toString;
function ln(a){if(!(this instanceof ln))return new ln(a);a=this.options=T.assign({level:-1,method:8,chunkSize:16384,Xa:15,yg:8,strategy:0,Va:""},a||{});a.raw&&0<a.Xa?a.Xa=-a.Xa:a.Df&&0<a.Xa&&16>a.Xa&&(a.Xa+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.S=new jn;this.S.U=0;var b=this.S;var c=a.level,d=a.method,e=a.Xa,f=a.yg,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=Um(b,-2);else{8===e&&(e=9);var k=new gn;
b.state=k;k.S=b;k.wrap=h;k.L=null;k.Bd=e;k.ma=1<<k.Bd;k.Wa=k.ma-1;k.Xc=f+7;k.qc=1<<k.Xc;k.Oa=k.qc-1;k.Pa=~~((k.Xc+3-1)/3);k.window=new T.jb(2*k.ma);k.head=new T.Ka(k.qc);k.Ja=new T.Ka(k.ma);k.Sb=1<<f+6;k.Aa=4*k.Sb;k.ba=new T.jb(k.Aa);k.Jb=1*k.Sb;k.cd=3*k.Sb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.ib=b.yd=0;b.Oc=2;c=b.state;c.pending=0;c.Tb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.N=2===c.wrap?0:1;c.tb=0;if(!Sm){d=Array(16);for(f=g=0;28>f;f++)for(wm[f]=g,e=0;e<1<<om[f];e++)vm[g++]=
f;vm[g-1]=f;for(f=g=0;16>f;f++)for(xm[f]=g,e=0;e<1<<pm[f];e++)um[g++]=f;for(g>>=7;30>f;f++)for(xm[f]=g<<7,e=0;e<1<<pm[f]-7;e++)um[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)sm[2*e+1]=8,e++,d[8]++;for(;255>=e;)sm[2*e+1]=9,e++,d[9]++;for(;279>=e;)sm[2*e+1]=7,e++,d[7]++;for(;287>=e;)sm[2*e+1]=8,e++,d[8]++;Hm(sm,287,d);for(e=0;30>e;e++)tm[2*e+1]=5,tm[2*e]=Gm(e,5);zm=new ym(sm,om,257,286,15);Am=new ym(tm,pm,0,30,15);Bm=new ym([],qm,0,19,7);Sm=!0}c.uc=new Cm(c.ta,zm);c.jc=new Cm(c.bb,Am);c.Id=
new Cm(c.ka,Bm);c.pa=0;c.ha=0;Im(c);c=0}else c=Um(b,-2);0===c&&(b=b.state,b.Pe=2*b.ma,Vm(b.head),b.fd=fn[b.level].wg,b.Zd=fn[b.level].Cf,b.oe=fn[b.level].zg,b.ke=fn[b.level].vg,b.C=0,b.va=0,b.G=0,b.la=0,b.V=b.wa=2,b.eb=0,b.T=0);b=c}}else b=-2;if(0!==b)throw Error(mm[b]);a.header&&(b=this.S)&&b.state&&2===b.state.wrap&&(b.state.L=a.header);if(a.Kb){var l;"string"===typeof a.Kb?l=fm(a.Kb):"[object ArrayBuffer]"===kn.call(a.Kb)?l=new Uint8Array(a.Kb):l=a.Kb;a=this.S;f=l;g=f.length;if(a&&a.state)if(l=
a.state,b=l.wrap,2===b||1===b&&42!==l.status||l.G)b=-2;else{1===b&&(a.N=gm(a.N,f,g,0));l.wrap=0;g>=l.ma&&(0===b&&(Vm(l.head),l.C=0,l.va=0,l.la=0),c=new T.jb(l.ma),T.mb(c,f,g-l.ma,l.ma,0),f=c,g=l.ma);c=a.oa;d=a.gb;e=a.input;a.oa=g;a.gb=0;a.input=f;for($m(l);3<=l.G;){f=l.C;g=l.G-2;do l.T=(l.T<<l.Pa^l.window[f+3-1])&l.Oa,l.Ja[f&l.Wa]=l.head[l.T],l.head[l.T]=f,f++;while(--g);l.C=f;l.G=2;$m(l)}l.C+=l.G;l.va=l.C;l.la=l.G;l.G=0;l.V=l.wa=2;l.eb=0;a.gb=d;a.input=e;a.oa=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(mm[b]);
this.Kh=!0}}
ln.prototype.push=function(a,b){var c=this.S,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=fm(a):"[object ArrayBuffer]"===kn.call(a)?c.input=new Uint8Array(a):c.input=a;c.gb=0;c.oa=c.input.length;do{0===c.U&&(c.output=new T.jb(d),c.xb=0,c.U=d);a=hn(c,e);if(1!==a&&0!==a)return mn(this,a),this.ended=!0,!1;if(0===c.U||0===c.oa&&(4===e||2===e))if("string"===this.options.Va){var f=T.wd(c.output,c.xb);b=f;f=f.length;if(65537>f&&(b.subarray&&em||!b.subarray))b=
String.fromCharCode.apply(null,T.wd(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=T.wd(c.output,c.xb),this.chunks.push(b)}while((0<c.oa||0===c.U)&&1!==a);if(4===e)return(c=this.S)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=Um(c,-2):(c.state=null,a=113===d?Um(c,-3):0)):a=-2,mn(this,a),this.ended=!0,0===a;2===e&&(mn(this,0),c.U=0);return!0};
function mn(a,b){0===b&&(a.result="string"===a.options.Va?a.chunks.join(""):T.Sd(a.chunks));a.chunks=[];a.err=b;a.msg=a.S.msg}
;function nn(a){this.name=a}
;var on=new nn("rawColdConfigGroup");var pn=new nn("rawHotConfigGroup");function qn(a){this.M=K(a)}
y(qn,M);qn.prototype.g=function(a){L(this,5,a)};function rn(a){this.M=K(a)}
y(rn,M);function sn(a){this.M=K(a)}
y(sn,M);sn.hb=[2];function tn(a){this.M=K(a)}
y(tn,M);tn.prototype.qb=function(){return Cf(this,61)};
tn.prototype.getPlayerType=function(){return Cf(this,36)};
tn.prototype.setHomeGroupInfo=function(a){return yf(this,sn,81,a)};
tn.hb=[9,66,32,86,100,101];function un(a){this.M=K(a)}
y(un,M);var vn=[2,3,4,5,6];function wn(a){this.M=K(a)}
y(wn,M);wn.hb=[15,26,28];function xn(a){this.M=K(a)}
y(xn,M);xn.hb=[5];function yn(a){this.M=K(a)}
y(yn,M);function zn(a){this.M=K(a)}
y(zn,M);zn.prototype.setSafetyMode=function(a){return Ff(this,5,a)};
zn.hb=[12];function An(a){this.M=K(a)}
y(An,M);An.hb=[12];var Bn={Jh:"WEB_DISPLAY_MODE_UNKNOWN",Fh:"WEB_DISPLAY_MODE_BROWSER",Hh:"WEB_DISPLAY_MODE_MINIMAL_UI",Ih:"WEB_DISPLAY_MODE_STANDALONE",Gh:"WEB_DISPLAY_MODE_FULLSCREEN"};function Cn(a){this.M=K(a)}
y(Cn,M);function Dn(a){this.M=K(a)}
y(Dn,M);Dn.prototype.l=function(){var a=void 0===a?0:a;var b=pf(this,2);if(null!=b)if(Ke(b)){var c;"number"===typeof b?c=Oe(b):c=Me(b);b=c}else b=void 0;return null!=b?b:a};function En(a){this.M=K(a)}
y(En,M);function Fn(a){this.M=K(a,497)}
y(Fn,M);
var Gn=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,
355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,399,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458,469,471,473,474,480,481,482,484,485,486,491,495,496];function Hn(a){this.M=K(a)}
y(Hn,M);function In(a){this.M=K(a)}
y(In,M);In.prototype.getPlaylistId=function(){return Df(this,2)};
var Ef=[1,2];function Jn(a){this.M=K(a)}
y(Jn,M);Jn.hb=[3];var Kn=C.window,Ln,Mn,Nn=(null==Kn?void 0:null==(Ln=Kn.yt)?void 0:Ln.config_)||(null==Kn?void 0:null==(Mn=Kn.ytcfg)?void 0:Mn.data_)||{};H("yt.config_",Nn);function On(){var a=arguments;1<a.length?Nn[a[0]]=a[1]:1===a.length&&Object.assign(Nn,a[0])}
function V(a,b){return a in Nn?Nn[a]:b}
;var Pn={};function Qn(){return Pn.clicktracking||(Pn.clicktracking="clicktracking".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function W(a){a=Rn(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Sn(a,b){a=Rn(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Rn(a){return V("EXPERIMENT_FLAGS",{})[a]}
function Tn(){for(var a=[],b=V("EXPERIMENTS_FORCED_FLAGS",{}),c=w(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=V("EXPERIMENT_FLAGS",{});d=w(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&void 0===b[e]&&a.push({key:e,value:String(c[e])});return a}
;function Un(a,b,c,d){Yf.set(""+a,b,{ed:c,path:"/",domain:void 0===d?"youtube.com":d,secure:!1})}
;var Vn=[];function Wn(a){Vn.forEach(function(b){return b(a)})}
function Xn(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Yn(b)}}:a}
function Yn(a){var b=D("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=V("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),On("ERRORS",b));Wn(a)}
function Zn(a,b,c,d,e){var f=D("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=V("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),On("ERRORS",f))}
;var $n=/^[\w.]*$/,ao={q:!0,search_query:!0};function bo(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1===f.length&&f[0]||2===f.length)try{var g=co(f[0]||""),h=co(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?sb(k,h):c[g]=[k,h]}else c[g]=h}catch(r){var l=r,m=f[0],p=String(bo);l.args=[{key:m,value:f[1],query:a,method:eo===p?"unchanged":p}];ao.hasOwnProperty(m)||Zn(l)}}return c}
var eo=String(bo);function fo(a){var b=[];tb(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];pb(c,function(f){""==f?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function go(a){"?"===a.charAt(0)&&(a=a.substring(1));return bo(a,"&")}
function ho(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=go(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return Ob(a,e)+d}
function io(a){if(!b)var b=window.location.href;var c=a.match(Hb)[1]||null,d=Jb(a);c&&d?(a=a.match(Hb),b=b.match(Hb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Jb(b)===d&&(Number(b.match(Hb)[4]||null)||null)===(Number(a.match(Hb)[4]||null)||null):!0;return a}
function co(a){return a&&a.match($n)?a:Gb(a)}
;var jo=Td||Ud;function ko(a){var b=Xb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var lo=Date.now().toString();function mo(a){var b=no;a=void 0===a?D("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Qf;e.flash="0";a:{try{var f=b.g.top.location.href}catch(ib){f=2;break a}f=f?f===b.l.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Hf:g;try{var h=g.history.length}catch(ib){h=0}e.u_his=h;var k;e.u_h=null==(k=Hf.screen)?void 0:k.height;var l;e.u_w=null==(l=Hf.screen)?void 0:l.width;var m;e.u_ah=null==(m=Hf.screen)?void 0:m.availHeight;var p;e.u_aw=
null==(p=Hf.screen)?void 0:p.availWidth;var r;e.u_cd=null==(r=Hf.screen)?void 0:r.colorDepth}catch(ib){}h=b.g;try{var q=h.screenX;var t=h.screenY}catch(ib){}try{var u=h.outerWidth;var z=h.outerHeight}catch(ib){}try{var E=h.innerWidth;var S=h.innerHeight}catch(ib){}try{var ia=h.screenLeft;var ca=h.screenTop}catch(ib){}try{E=h.innerWidth,S=h.innerHeight}catch(ib){}try{var jb=h.screen.availWidth;var Ji=h.screen.availTop}catch(ib){}q=[ia,ca,q,t,jb,Ji,u,z,E,S];t=b.g.top;try{var Hc=(t||window).document,
kb="CSS1Compat"==Hc.compatMode?Hc.documentElement:Hc.body;var Wa=(new md(kb.clientWidth,kb.clientHeight)).round()}catch(ib){Wa=new md(-12245933,-12245933)}Hc=Wa;Wa={};var Xa=void 0===Xa?C:Xa;kb=new xl;"SVGElement"in Xa&&"createElementNS"in Xa.document&&kb.set(0);t=Nf();t["allow-top-navigation-by-user-activation"]&&kb.set(1);t["allow-popups-to-escape-sandbox"]&&kb.set(2);Xa.crypto&&Xa.crypto.subtle&&kb.set(3);"TextDecoder"in Xa&&"TextEncoder"in Xa&&kb.set(4);Xa=yl(kb);Wa.bc=Xa;Wa.bih=Hc.height;Wa.biw=
Hc.width;Wa.brdim=q.join();b=b.l;b=(Wa.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,Wa.wgl=!!Hf.WebGLRenderingContext,Wa);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var no=new function(){var a=window.document;this.g=window;this.l=a};
H("yt.ads_.signals_.getAdSignalsString",function(a){return fo(mo(a))});G();var oo="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function po(){if(!oo)return null;var a=oo();return"open"in a?a:null}
;function qo(a,b){"function"===typeof a&&(a=Xn(a));return window.setTimeout(a,b)}
;var ro="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");x(ro);var so={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},to="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(x(ro)),uo=!1;
function vo(a,b,c,d,e,f,g,h){function k(){4===(l&&"readyState"in l?l.readyState:0)&&b&&Xn(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;h=void 0===h?!1:h;var l=po();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;W("debug_forward_web_query_parameters")&&(a=wo(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"===c&&(void 0===window.FormData||!(d instanceof FormData));if(e=xo(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"===m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{l.setAttributionReporting(a)}catch(p){Zn(p)}}l.send(d);return l}
function xo(a,b){b=void 0===b?{}:b;var c=io(a),d=W("web_ajax_ignore_global_headers_if_set"),e;for(e in so){var f=V(so[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=V("VISITOR_DATA"));!f||!c&&Jb(a)||d&&void 0!==b[e]||"TVHTML5_UNPLUGGED"===V("INNERTUBE_CLIENT_NAME")&&g||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!Jb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Jb(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&
(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&Jb(a)||(b["X-YouTube-Ad-Signals"]=fo(mo()));return b}
function yo(a,b){b.method="POST";b.postParams||(b.postParams={});return zo(a,b)}
function zo(a,b){var c=b.format||"JSON";a=Ao(a,b);var d=Bo(a,b),e=!1,f=Co(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,p=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||p||r)m=Do(a,c,k,b.convertToSafeHtml);l&&(l=Eo(c,k,m));m=m||{};p=b.context||C;l?b.onSuccess&&b.onSuccess.call(p,k,m):b.onError&&b.onError.call(p,k,m);b.onFinish&&
b.onFinish.call(p,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=qo(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function Ao(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=V("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=ho(a,b||{},!0);return a}
function Bo(a,b){var c=V("XSRF_FIELD_NAME"),d=V("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=V("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Jb(a)&&!b.withCredentials&&Jb(a)!==document.location.hostname||"POST"!==b.method||h&&"application/x-www-form-urlencoded"!==h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(W("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=go(e),wb(e,f),e=b.postBodyFormat&&"JSON"===b.postBodyFormat?
JSON.stringify(e):Nb(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=!1;break a}f=!0}a=!f}!uo&&a&&"POST"!==b.method&&(uo=!0,Yn(Error("AJAX request with postData should use POST")));return e}
function Do(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Zn(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Fo(a):null)e={},pb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Go(g)})}d&&Ho(e);
return e}
function Ho(a){if(Ka(a))for(var b in a){var c;(c="html_content"===b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Bb(a[b]);a[c]=d}else Ho(a[b])}}
function Eo(a,b,c){if(b&&204===b.status)return!0;switch(a){case "JSON":return!!c;case "XML":return 0===Number(c&&c.return_code);case "RAW":return!0;default:return!!c}}
function Fo(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Go(a){var b="";pb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function wo(a){var b=window.location.search,c=Jb(a);W("debug_handle_relative_url_for_query_forward_killswitch")||!c&&io(a)&&(c=document.location.hostname);var d=Ib(a.match(Hb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=go(b),f={};pb(to,function(g){e[g]&&(f[g]=e[g])});
return ho(a,f||{},!1)}
var Co=vo;function Io(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Jo(){}
;function Ko(a){switch(a){case "DESKTOP":return 1;case "UNKNOWN_PLATFORM":return 0;case "TV":return 2;case "GAME_CONSOLE":return 3;case "MOBILE":return 4;case "TABLET":return 5}}
;H("ytglobal.prefsUserPrefsPrefs_",D("ytglobal.prefsUserPrefsPrefs_")||{});var Lo={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Mo={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_WIRED:30,CONN_INVALID:31},No={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Oo={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Po(){var a=C.navigator;return a?a.connection:void 0}
;function Qo(a){var b=Ea.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(x(b))}
y(Qo,Error);function Ro(){try{return So(),!0}catch(a){return!1}}
function So(){if(void 0!==V("DATASYNC_ID"))return V("DATASYNC_ID");throw new Qo("Datasync ID not set","unknown");}
;function To(){}
function Uo(a,b){return gg.Za(a,0,b)}
To.prototype.Ha=function(a,b){return this.Za(a,1,b)};
To.prototype.Gb=function(a){var b=D("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Vo=Sn("web_emulated_idle_callback_delay",300),Wo=1E3/60-3,Xo=[8,5,4,3,2,1,0];
function Yo(a){a=void 0===a?{}:a;Sb.call(this);this.l=[];this.i={};this.I=this.g=0;this.H=this.s=!1;this.B=[];this.D=this.J=!1;for(var b=w(Xo),c=b.next();!c.done;c=b.next())this.l[c.value]=[];this.o=0;this.na=a.timeout||1;this.A=Wo;this.u=0;this.K=this.Cg.bind(this);this.ea=this.Zg.bind(this);this.X=this.Xe.bind(this);this.Y=this.Zf.bind(this);this.ca=this.Hg.bind(this);this.W=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!W("disable_scheduler_requestIdleCallback");(this.F=!1!==a.useRaf&&
!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.K)}
y(Yo,Sb);n=Yo.prototype;n.Gb=function(a){var b=G();Zo(a);a=G()-b;this.s||(this.A-=a)};
n.Za=function(a,b,c){++this.I;if(10===b)return this.Gb(a),this.I;var d=this.I;this.i[d]=a;this.s&&!c?this.B.push({id:d,priority:b}):(this.l[b].push(d),this.H||this.s||(0!==this.g&&$o(this)!==this.u&&ap(this),this.start()));return d};
n.xa=function(a){delete this.i[a]};
function bp(a){a.B.length=0;for(var b=5;0<=b;b--)a.l[b].length=0;a.l[8].length=0;a.i={};ap(a)}
function $o(a){if(a.l[8].length){if(a.D)return 4;if(!document.hidden&&a.F)return 3}for(var b=5;b>=a.o;b--)if(0<a.l[b].length)return 0<b?!document.hidden&&a.F?3:2:1;return 0}
function cp(a){var b=D("yt.logging.errors.log");b&&b(a)}
function Zo(a){try{a()}catch(b){cp(b)}}
function dp(a){for(var b=w(Xo),c=b.next();!c.done;c=b.next())if(a.l[c.value].length)return!0;return!1}
n.Zf=function(a){var b=void 0;a&&(b=a.timeRemaining());this.J=!0;ep(this,b);this.J=!1};
n.Zg=function(){ep(this)};
n.Xe=function(){fp(this)};
n.Hg=function(a){this.D=!0;var b=$o(this);4===b&&b!==this.u&&(ap(this),this.start());ep(this,void 0,a);this.D=!1};
n.Cg=function(){document.hidden||fp(this);this.g&&(ap(this),this.start())};
function fp(a){ap(a);a.s=!0;for(var b=G(),c=a.l[8];c.length;){var d=c.shift(),e=a.i[d];delete a.i[d];e&&Zo(e)}gp(a);a.s=!1;dp(a)&&a.start();b=G()-b;a.A-=b}
function gp(a){for(var b=0,c=a.B.length;b<c;b++){var d=a.B[b];a.l[d.priority].push(d.id)}a.B.length=0}
function ep(a,b,c){a.D&&4===a.u&&a.g||ap(a);a.s=!0;b=G()+(b||a.A);for(var d=a.l[5];d.length;){var e=d.shift(),f=a.i[e];delete a.i[e];if(f)try{f(c)}catch(l){cp(l)}}for(d=a.l[4];d.length;)c=d.shift(),e=a.i[c],delete a.i[c],e&&Zo(e);d=a.J?0:1;d=a.o>d?a.o:d;if(!(G()>=b)){do{a:{c=a;e=d;for(f=3;f>=e;f--)for(var g=c.l[f];g.length;){var h=g.shift(),k=c.i[h];delete c.i[h];if(k){c=k;break a}}c=null}c&&Zo(c)}while(c&&G()<b)}a.s=!1;gp(a);a.A=Wo;dp(a)&&a.start()}
n.start=function(){this.H=!1;if(0===this.g)switch(this.u=$o(this),this.u){case 1:var a=this.Y;this.g=this.W?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Vo);break;case 2:this.g=window.setTimeout(this.ea,this.na);break;case 3:this.g=window.requestAnimationFrame(this.ca);break;case 4:this.g=window.setTimeout(this.X,0)}};
function ap(a){if(a.g){switch(a.u){case 1:var b=a.g;a.W?window.cancelIdleCallback(b):window.clearTimeout(b);break;case 2:case 4:window.clearTimeout(a.g);break;case 3:window.cancelAnimationFrame(a.g)}a.g=0}}
n.Ba=function(){bp(this);ap(this);this.F&&document.removeEventListener("visibilitychange",this.K);Sb.prototype.Ba.call(this)};var hp=D("yt.scheduler.instance.timerIdMap_")||{},ip=Sn("kevlar_tuner_scheduler_soft_state_timer_ms",800),jp=0,kp=0;function lp(){var a=D("ytglobal.schedulerInstanceInstance_");if(!a||a.ab)a=new Yo(V("scheduler")||{}),H("ytglobal.schedulerInstanceInstance_",a);return a}
function mp(){np();var a=D("ytglobal.schedulerInstanceInstance_");a&&(a&&"function"==typeof a.dispose&&a.dispose(),H("ytglobal.schedulerInstanceInstance_",null))}
function np(){bp(lp());for(var a in hp)hp.hasOwnProperty(a)&&delete hp[Number(a)]}
function op(a,b,c){if(!c)return c=void 0===c,-lp().Za(a,b,c);var d=window.setTimeout(function(){var e=lp().Za(a,b);hp[d]=e},c);
return d}
function pp(a){lp().Gb(a)}
function qp(a){var b=lp();if(0>a)b.xa(-a);else{var c=hp[a];c?(b.xa(c),delete hp[a]):window.clearTimeout(a)}}
function rp(){sp()}
function sp(){window.clearTimeout(jp);lp().start()}
function tp(){var a=lp();ap(a);a.H=!0;window.clearTimeout(jp);jp=window.setTimeout(rp,ip)}
function up(){window.clearTimeout(kp);kp=window.setTimeout(function(){vp(0)},ip)}
function vp(a){up();var b=lp();b.o=a;b.start()}
function wp(a){up();var b=lp();b.o>a&&(b.o=a,b.start())}
function xp(){window.clearTimeout(kp);var a=lp();a.o=0;a.start()}
;function yp(){To.apply(this,arguments)}
y(yp,To);function zp(){yp.g||(yp.g=new yp);return yp.g}
yp.prototype.Za=function(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=D("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):qo(a,c||0)};
yp.prototype.xa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=D("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
yp.prototype.start=function(){var a=D("yt.scheduler.instance.start");a&&a()};
var gg=zp();
W("web_scheduler_auto_init")&&!D("yt.scheduler.initialized")&&(H("yt.scheduler.instance.dispose",mp),H("yt.scheduler.instance.addJob",op),H("yt.scheduler.instance.addImmediateJob",pp),H("yt.scheduler.instance.cancelJob",qp),H("yt.scheduler.instance.cancelAllJobs",np),H("yt.scheduler.instance.start",sp),H("yt.scheduler.instance.pause",tp),H("yt.scheduler.instance.setPriorityThreshold",vp),H("yt.scheduler.instance.enablePriorityThreshold",wp),H("yt.scheduler.instance.clearPriorityThreshold",xp),H("yt.scheduler.initialized",
!0));function Ap(a){var b=new $l;this.g=(a=(b.l=Zl(b.g))?a?new am(b,a):b:null)?new Ul(a):null;this.l=document.domain||window.location.hostname}
Ap.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.g)try{this.g.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Il(b))}catch(f){return}else e=escape(b);Un(a,e,c,this.l)};
Ap.prototype.get=function(a,b){var c=void 0,d=!this.g;if(!d)try{c=this.g.get(a)}catch(e){d=!0}if(d&&(c=Yf.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Ap.prototype.remove=function(a){this.g&&this.g.remove(a);var b=this.l;Yf.remove(""+a,"/",void 0===b?"youtube.com":b)};var Bp=function(){var a;return function(){a||(a=new Ap("ytidb"));return a}}();
function Cp(){var a;return null==(a=Bp())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Dp=[],Ep=!1;function Fp(a){Ep||(Dp.push({type:"ERROR",payload:a}),10<Dp.length&&Dp.shift())}
function Gp(a,b){Ep||(Dp.push({type:"EVENT",eventType:a,payload:b}),10<Dp.length&&Dp.shift())}
;function Hp(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Ip(a){return a.substr(0,a.indexOf(":"))||a}
;var Jp={},Kp=(Jp.AUTH_INVALID="No user identifier specified.",Jp.EXPLICIT_ABORT="Transaction was explicitly aborted.",Jp.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Jp.MISSING_INDEX="Index not created.",Jp.MISSING_OBJECT_STORES="Object stores not created.",Jp.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Jp.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Jp.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Jp.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Jp.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Jp.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Jp.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Jp),Lp={},Mp=(Lp.AUTH_INVALID="ERROR",Lp.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Lp.EXPLICIT_ABORT="IGNORED",Lp.IDB_NOT_SUPPORTED="ERROR",Lp.MISSING_INDEX=
"WARNING",Lp.MISSING_OBJECT_STORES="ERROR",Lp.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Lp.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Lp.QUOTA_EXCEEDED="WARNING",Lp.QUOTA_MAYBE_EXCEEDED="WARNING",Lp.UNKNOWN_ABORT="WARNING",Lp.INCOMPATIBLE_DB_VERSION="WARNING",Lp),Np={},Op=(Np.AUTH_INVALID=!1,Np.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Np.EXPLICIT_ABORT=!1,Np.IDB_NOT_SUPPORTED=!1,Np.MISSING_INDEX=!1,Np.MISSING_OBJECT_STORES=!1,Np.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Np.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Np.QUOTA_EXCEEDED=!1,Np.QUOTA_MAYBE_EXCEEDED=!0,Np.UNKNOWN_ABORT=!0,Np.INCOMPATIBLE_DB_VERSION=!1,Np);function X(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Kp[a]:c;d=void 0===d?Mp[a]:d;e=void 0===e?Op[a]:e;Qo.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.g=e;Object.setPrototypeOf(this,X.prototype)}
y(X,Qo);function Pp(a,b){X.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Kp.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Pp.prototype)}
y(Pp,X);function Qp(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Qp.prototype)}
y(Qp,Error);var Rp=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Sp(a,b,c,d){b=Ip(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof X)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new X("QUOTA_EXCEEDED",a);if(Vd&&"UnknownError"===e.name)return new X("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Qp)return new X("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Rp.some(function(f){return e.message.includes(f)}))return new X("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new X("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",li:e.name})];e.level="WARNING";return e}
function Tp(a,b,c){var d=Cp();return new X("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Up(a){if(!a)throw Error();throw a;}
function Vp(a){return a}
function Wp(a){this.g=a}
function Xp(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=w(d.l);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=w(d.g);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.g=[];this.l=[];a=a.g;try{a(c,b)}catch(e){b(e)}}
Xp.resolve=function(a){return new Xp(new Wp(function(b,c){a instanceof Xp?a.then(b,c):b(a)}))};
Xp.reject=function(a){return new Xp(new Wp(function(b,c){c(a)}))};
Xp.prototype.then=function(a,b){var c=this,d=null!=a?a:Vp,e=null!=b?b:Up;return new Xp(new Wp(function(f,g){"PENDING"===c.state.status?(c.g.push(function(){Yp(c,c,d,f,g)}),c.l.push(function(){Zp(c,c,e,f,g)})):"FULFILLED"===c.state.status?Yp(c,c,d,f,g):"REJECTED"===c.state.status&&Zp(c,c,e,f,g)}))};
function $p(a,b){a.then(void 0,b)}
function Yp(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Xp?aq(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Zp(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Xp?aq(a,b,f,d,e):d(f)}catch(g){e(g)}}
function aq(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Xp?aq(a,b,f,d,e):d(f)},function(f){e(f)})}
;function bq(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function cq(a){return new Promise(function(b,c){bq(a,b,c)})}
function dq(a){return new Xp(new Wp(function(b,c){bq(a,b,c)}))}
;function eq(a,b){return new Xp(new Wp(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var fq=window,Y=fq.ytcsi&&fq.ytcsi.now?fq.ytcsi.now:fq.performance&&fq.performance.timing&&fq.performance.now&&fq.performance.timing.navigationStart?function(){return fq.performance.timing.navigationStart+fq.performance.now()}:function(){return(new Date).getTime()};function gq(a,b){this.g=a;this.options=b;this.transactionCount=0;this.i=Math.round(Y());this.l=!1}
n=gq.prototype;n.add=function(a,b,c){return hq(this,[a],{mode:"readwrite",qa:!0},function(d){return d.objectStore(a).add(b,c)})};
n.clear=function(a){return hq(this,[a],{mode:"readwrite",qa:!0},function(b){return b.objectStore(a).clear()})};
n.close=function(){this.g.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
function iq(a,b,c){a=a.g.createObjectStore(b,c);return new jq(a)}
n.delete=function(a,b){return hq(this,[a],{mode:"readwrite",qa:!0},function(c){return c.objectStore(a).delete(b)})};
n.get=function(a,b){return hq(this,[a],{mode:"readonly",qa:!0},function(c){return c.objectStore(a).get(b)})};
function kq(a,b,c){return hq(a,[b],{mode:"readwrite",qa:!0},function(d){d=d.objectStore(b);return dq(d.g.put(c,void 0))})}
n.objectStoreNames=function(){return Array.from(this.g.objectStoreNames)};
function hq(a,b,c,d){var e,f,g,h,k,l,m,p,r,q,t,u;return B(function(z){switch(z.g){case 1:var E={mode:"readonly",qa:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?E.mode=c:Object.assign(E,c);e=E;a.transactionCount++;f=e.qa?3:1;g=0;case 2:if(h){z.O(4);break}g++;k=Math.round(Y());va(z,5);l=a.g.transaction(b,e.mode);E=new lq(l);E=mq(E,d);return A(z,E,7);case 7:return m=z.l,p=Math.round(Y()),nq(a,k,p,g,void 0,b.join(),e),z.return(m);case 5:r=wa(z);q=Math.round(Y());t=Sp(r,a.g.name,b.join(),
a.g.version);if((u=t instanceof X&&!t.g)||g>=f)nq(a,k,q,g,t,b.join(),e),h=t;z.O(2);break;case 4:return z.return(Promise.reject(h))}})}
function nq(a,b,c,d,e,f,g){b=c-b;e?(e instanceof X&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Gp("QUOTA_EXCEEDED",{dbName:Ip(a.g.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof X&&"UNKNOWN_ABORT"===e.type&&(c-=a.i,0>c&&c>=Math.pow(2,31)&&(c=0),Gp("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.l=!0),oq(a,!1,d,f,b,g.tag),Fp(e)):oq(a,!0,d,f,b,g.tag)}
function oq(a,b,c,d,e,f){Gp("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.l,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
n.getName=function(){return this.g.name};
function jq(a){this.g=a}
n=jq.prototype;n.add=function(a,b){return dq(this.g.add(a,b))};
n.autoIncrement=function(){return this.g.autoIncrement};
n.clear=function(){return dq(this.g.clear()).then(function(){})};
function pq(a,b,c){a.g.createIndex(b,c,{unique:!1})}
function qq(a,b){return rq(a,{query:b},function(c){return c.delete().then(function(){return sq(c)})}).then(function(){})}
n.delete=function(a){return a instanceof IDBKeyRange?qq(this,a):dq(this.g.delete(a))};
n.get=function(a){return dq(this.g.get(a))};
n.index=function(a){try{return new tq(this.g.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Qp(a,this.g.name);throw b;}};
n.getName=function(){return this.g.name};
n.keyPath=function(){return this.g.keyPath};
function rq(a,b,c){a=a.g.openCursor(b.query,b.direction);return uq(a).then(function(d){return eq(d,c)})}
function lq(a){var b=this;this.g=a;this.i=new Map;this.l=!1;this.done=new Promise(function(c,d){b.g.addEventListener("complete",function(){c()});
b.g.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.g.error)});
b.g.addEventListener("abort",function(){var e=b.g.error;if(e)d(e);else if(!b.l){e=X;for(var f=b.g.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.g.db.name,mode:b.g.mode});d(e)}})})}
function mq(a,b){var c=new Promise(function(d,e){try{$p(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return w(d).next().value})}
lq.prototype.abort=function(){this.g.abort();this.l=!0;throw new X("EXPLICIT_ABORT");};
lq.prototype.objectStore=function(a){a=this.g.objectStore(a);var b=this.i.get(a);b||(b=new jq(a),this.i.set(a,b));return b};
function tq(a){this.g=a}
tq.prototype.delete=function(a){return vq(this,{query:a},function(b){return b.delete().then(function(){return sq(b)})})};
tq.prototype.get=function(a){return dq(this.g.get(a))};
tq.prototype.keyPath=function(){return this.g.keyPath};
tq.prototype.unique=function(){return this.g.unique};
function vq(a,b,c){a=a.g.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return uq(a).then(function(d){return eq(d,c)})}
function wq(a,b){this.request=a;this.cursor=b}
function uq(a){return dq(a).then(function(b){return b?new wq(a,b):null})}
function sq(a){a.cursor.continue(void 0);return uq(a.request)}
wq.prototype.delete=function(){return dq(this.cursor.delete()).then(function(){})};
wq.prototype.update=function(a){return dq(this.cursor.update(a))};function xq(a,b,c){return new Promise(function(d,e){function f(){r||(r=new gq(g.result,{closed:p}));return r}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.af,k=c.bf,l=c.Xg,m=c.upgrade,p=c.closed,r;g.addEventListener("upgradeneeded",function(q){try{if(null===q.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");q.dataLoss&&"none"!==q.dataLoss&&Gp("IDB_DATA_CORRUPTED",{reason:q.dataLossMessage||"unknown reason",dbName:Ip(a)});var t=f(),u=new lq(g.transaction);m&&
m(t,function(z){return q.oldVersion<z&&q.newVersion>=z},u);
u.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var q=g.result;k&&q.addEventListener("versionchange",function(){k(f())});
q.addEventListener("close",function(){Gp("IDB_UNEXPECTEDLY_CLOSED",{dbName:Ip(a),dbVersion:q.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function yq(a,b,c){c=void 0===c?{}:c;return xq(a,b,c)}
function zq(a,b){b=void 0===b?{}:b;var c,d,e,f;return B(function(g){if(1==g.g)return va(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.af)&&c.addEventListener("blocked",function(){e()}),A(g,cq(c),4);
if(2!=g.g)g.g=0,g.o=0;else throw f=wa(g),Sp(f,a,"",-1);})}
;function Aq(a,b){this.name=a;this.options=b;this.i=!0;this.o=this.m=0}
Aq.prototype.l=function(a,b,c){c=void 0===c?{}:c;return yq(a,b,c)};
Aq.prototype.delete=function(a){a=void 0===a?{}:a;return zq(this.name,a)};
function Bq(a,b){return new X("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Cq(a,b){if(!b)throw Tp("openWithToken",Ip(a.name));return Dq(a)}
function Dq(a){function b(){var f,g,h,k,l,m,p,r,q,t;return B(function(u){switch(u.g){case 1:return g=null!=(f=Error().stack)?f:"",va(u,2),A(u,a.l(a.name,a.options.version,d),4);case 4:for(var z=h=u.l,E=a.options,S=[],ia=w(Object.keys(E.yb)),ca=ia.next();!ca.done;ca=ia.next()){ca=ca.value;var jb=E.yb[ca],Ji=void 0===jb.Jg?Number.MAX_VALUE:jb.Jg;!(z.g.version>=jb.Hb)||z.g.version>=Ji||z.g.objectStoreNames.contains(ca)||S.push(ca)}k=S;if(0===k.length){u.O(5);break}l=Object.keys(a.options.yb);m=h.objectStoreNames();
if(a.o<Sn("ytidb_reopen_db_retries",0))return a.o++,h.close(),Fp(new X("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),u.return(b());if(!(a.m<Sn("ytidb_remake_db_retries",1))){u.O(6);break}a.m++;return A(u,a.delete(),7);case 7:return Fp(new X("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),u.return(b());case 6:throw new Pp(m,l);case 5:return u.return(h);case 2:p=wa(u);if(p instanceof DOMException?
"VersionError"!==p.name:"DOMError"in self&&p instanceof DOMError?"VersionError"!==p.name:!(p instanceof Object&&"message"in p)||"An attempt was made to open a database using a lower version than the existing version."!==p.message){u.O(8);break}return A(u,a.l(a.name,void 0,Object.assign({},d,{upgrade:void 0})),9);case 9:r=u.l;q=r.g.version;if(void 0!==a.options.version&&q>a.options.version+1)throw r.close(),a.i=!1,Bq(a,q);return u.return(r);case 8:throw c(),p instanceof Error&&!W("ytidb_async_stack_killswitch")&&
(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),Sp(p,a.name,"",null!=(t=a.options.version)?t:-1);}})}
function c(){a.g===e&&(a.g=void 0)}
if(!a.i)throw Bq(a);if(a.g)return a.g;var d={bf:function(f){f.close()},
closed:c,Xg:c,upgrade:a.options.upgrade};var e=b();a.g=e;return a.g}
;var Eq=new Aq("YtIdbMeta",{yb:{databases:{Hb:1}},upgrade:function(a,b){b(1)&&iq(a,"databases",{keyPath:"actualName"})}});
function Fq(a,b){var c;return B(function(d){if(1==d.g)return A(d,Cq(Eq,b),2);c=d.l;return d.return(hq(c,["databases"],{qa:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return dq(f.g.put(a,void 0)).then(function(){})})}))})}
function Gq(a,b){var c;return B(function(d){if(1==d.g)return a?A(d,Cq(Eq,b),2):d.return();c=d.l;return d.return(c.delete("databases",a))})}
function Hq(a,b){var c,d;return B(function(e){return 1==e.g?(c=[],A(e,Cq(Eq,b),2)):3!=e.g?(d=e.l,A(e,hq(d,["databases"],{qa:!0,mode:"readonly"},function(f){c.length=0;return rq(f.objectStore("databases"),{},function(g){a(g.cursor.value)&&c.push(g.cursor.value);return sq(g)})}),3)):e.return(c)})}
function Iq(a){return Hq(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var Jq,Kq=new function(){}(new function(){});
function Lq(){var a,b,c,d;return B(function(e){switch(e.g){case 1:a=Cp();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=jo)f=/WebKit\/([0-9]+)/.exec(Xb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Xb()),f=!(f&&602<=parseInt(f[1],10)));if(f||nc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
va(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return A(e,Fq(d,Kq),4);case 4:return A(e,Gq("yt-idb-test-do-not-use",Kq),5);case 5:return e.return(!0);case 2:return wa(e),e.return(!1)}})}
function Mq(){if(void 0!==Jq)return Jq;Ep=!0;return Jq=Lq().then(function(a){Ep=!1;var b;if(null!=(b=Bp())&&b.g){var c;b={hasSucceededOnce:(null==(c=Cp())?void 0:c.hasSucceededOnce)||a};var d;null==(d=Bp())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Nq(){return D("ytglobal.idbToken_")||void 0}
function Oq(){var a=Nq();return a?Promise.resolve(a):Mq().then(function(b){(b=b?Kq:void 0)&&H("ytglobal.idbToken_",b);return b})}
;new Ol;function Pq(a){if(!Ro())throw a=new X("AUTH_INVALID",{dbName:a}),Fp(a),a;var b=So();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Qq(a,b,c,d){var e,f,g,h,k,l;return B(function(m){switch(m.g){case 1:return f=null!=(e=Error().stack)?e:"",A(m,Oq(),2);case 2:g=m.l;if(!g)throw h=Tp("openDbImpl",a,b),W("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Fp(h),h;Hp(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Pq(a);va(m,3);return A(m,Fq(k,g),5);case 5:return A(m,yq(k.actualName,b,d),6);case 6:return m.return(m.l);case 3:return l=wa(m),va(m,7),A(m,Gq(k.actualName,g),9);case 9:m.g=
8;m.o=0;break;case 7:wa(m);case 8:throw l;}})}
function Rq(a,b,c){c=void 0===c?{}:c;return Qq(a,b,!1,c)}
function Sq(a,b,c){c=void 0===c?{}:c;return Qq(a,b,!0,c)}
function Tq(a,b){b=void 0===b?{}:b;var c,d;return B(function(e){if(1==e.g)return A(e,Oq(),2);if(3!=e.g){c=e.l;if(!c)return e.return();Hp(a);d=Pq(a);return A(e,zq(d.actualName,b),3)}return A(e,Gq(d.actualName,c),0)})}
function Uq(a,b,c){a=a.map(function(d){return B(function(e){return 1==e.g?A(e,zq(d.actualName,b),2):A(e,Gq(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Vq(){var a=void 0===a?{}:a;var b,c;return B(function(d){if(1==d.g)return A(d,Oq(),2);if(3!=d.g){b=d.l;if(!b)return d.return();Hp("LogsDatabaseV2");return A(d,Iq(b),3)}c=d.l;return A(d,Uq(c,a,b),0)})}
function Wq(a,b){b=void 0===b?{}:b;var c;return B(function(d){if(1==d.g)return A(d,Oq(),2);if(3!=d.g){c=d.l;if(!c)return d.return();Hp(a);return A(d,zq(a,b),3)}return A(d,Gq(a,c),0)})}
;function Xq(a,b){Aq.call(this,a,b);this.options=b;Hp(a)}
y(Xq,Aq);function Yq(a,b){var c;return function(){c||(c=new Xq(a,b));return c}}
Xq.prototype.l=function(a,b,c){c=void 0===c?{}:c;return(this.options.shared?Sq:Rq)(a,b,Object.assign({},c))};
Xq.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.shared?Wq:Tq)(this.name,a)};
function Zq(a,b){return Yq(a,b)}
;var $q={},ar=Zq("ytGcfConfig",{yb:($q.coldConfigStore={Hb:1},$q.hotConfigStore={Hb:1},$q),shared:!1,upgrade:function(a,b){b(1)&&(pq(iq(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),pq(iq(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function br(a){return Cq(ar(),a)}
function cr(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:return d={config:a,hashData:b,timestamp:Y()},A(g,br(c),2);case 2:return e=g.l,A(g,e.clear("hotConfigStore"),3);case 3:return A(g,kq(e,"hotConfigStore",d),4);case 4:return f=g.l,g.return(f)}})}
function dr(a,b,c,d){var e,f,g;return B(function(h){switch(h.g){case 1:return e={config:a,hashData:b,configData:c,timestamp:Y()},A(h,br(d),2);case 2:return f=h.l,A(h,f.clear("coldConfigStore"),3);case 3:return A(h,kq(f,"coldConfigStore",e),4);case 4:return g=h.l,h.return(g)}})}
function er(a){var b,c;return B(function(d){return 1==d.g?A(d,br(a),2):3!=d.g?(b=d.l,c=void 0,A(d,hq(b,["coldConfigStore"],{mode:"readwrite",qa:!0},function(e){return vq(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.cursor.value})}),3)):d.return(c)})}
function fr(a){var b,c;return B(function(d){return 1==d.g?A(d,br(a),2):3!=d.g?(b=d.l,c=void 0,A(d,hq(b,["hotConfigStore"],{mode:"readwrite",qa:!0},function(e){return vq(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.cursor.value})}),3)):d.return(c)})}
;function gr(){Sb.call(this);this.l=[];this.g=[];var a=D("yt.gcf.config.hotUpdateCallbacks");a?(this.l=[].concat(x(a)),this.g=a):(this.g=[],H("yt.gcf.config.hotUpdateCallbacks",this.g))}
y(gr,Sb);gr.prototype.Ba=function(){for(var a=w(this.l),b=a.next();!b.done;b=a.next()){var c=this.g;b=c.indexOf(b.value);0<=b&&c.splice(b,1)}this.l.length=0;Sb.prototype.Ba.call(this)};function hr(){this.l=0;this.i=new gr}
function ir(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:if(!W("start_client_gcf")){g.O(0);break}c&&(a.m=c,H("yt.gcf.config.hotConfigGroup",a.m||null));a.g(b);d=Nq();if(!d){g.O(3);break}if(c){g.O(4);break}return A(g,fr(d),5);case 5:e=g.l,c=null==(f=e)?void 0:f.config;case 4:return A(g,cr(c,b,d),3);case 3:if(c)for(var h=c,k=w(a.i.g),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.g=0}})}
function jr(a,b,c){var d,e,f,g;return B(function(h){if(1==h.g){if(!W("start_client_gcf"))return h.O(0);a.coldHashData=b;H("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Nq())?c?h.O(4):A(h,er(d),5):h.O(0)}4!=h.g&&(e=h.l,c=null==(f=e)?void 0:f.config);if(!c)return h.O(0);g=c.configData;return A(h,dr(c,b,g,d),0)})}
hr.prototype.g=function(a){this.hotHashData=a;H("yt.gcf.config.hotHashData",this.hotHashData||null)};function kr(){return"INNERTUBE_API_KEY"in Nn&&"INNERTUBE_API_VERSION"in Nn}
function lr(){return{cg:V("INNERTUBE_API_KEY"),dg:V("INNERTUBE_API_VERSION"),Yc:V("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),fe:V("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),eg:V("INNERTUBE_CONTEXT_CLIENT_NAME",1),ge:V("INNERTUBE_CONTEXT_CLIENT_VERSION"),ie:V("INNERTUBE_CONTEXT_HL"),he:V("INNERTUBE_CONTEXT_GL"),fg:V("INNERTUBE_HOST_OVERRIDE")||"",hg:!!V("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),gg:!!V("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",!1),appInstallData:V("SERIALIZED_CLIENT_CONFIG_DATA")}}
function mr(a){var b={client:{hl:a.ie,gl:a.he,clientName:a.fe,clientVersion:a.ge,configInfo:a.Yc}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=V("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=Tn();0<c.length&&(b.request={internalExperimentFlags:c});nr(a,void 0,b);or(void 0,b);pr(void 0,b);qr(a,void 0,b);rr(void 0,b);W("start_client_gcf")&&sr(void 0,b);V("DELEGATED_SESSION_ID")&&!W("pageid_as_header_web")&&
(b.user={onBehalfOfUser:V("DELEGATED_SESSION_ID")});!W("fill_delegate_context_in_gel_killswitch")&&(a=V("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;c=a.assign;for(var d=b.client,e={},f=w(Object.entries(go(V("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=w(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=
h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function nr(a,b,c){a=a.fe;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=xf(b,rn,96)||new rn;var d=Io();d=Object.keys(Bn).indexOf(d);d=-1===d?null:d;null!==d&&Ff(c,3,d);yf(b,rn,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=Io())}
function or(a,b){var c=D("yt.embedded_player.embed_url");c&&(a?(b=xf(a,xn,7)||new xn,L(b,4,c),yf(a,xn,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function pr(a,b){var c;if(W("web_log_memory_total_kbytes")&&(null==(c=C.navigator)?0:c.deviceMemory)){var d;c=null==(d=C.navigator)?void 0:d.deviceMemory;a?sf(a,95,Le(1E6*c)):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function qr(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=xf(b,qn,62))?d:new qn;L(c,6,a.appInstallData);yf(b,qn,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function rr(a,b){a:{var c=Po();if(c){var d=Lo[c.type||"unknown"]||"CONN_UNKNOWN";c=Lo[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?Ff(a,61,Mo[d]):b&&(b.client.connectionType=d));W("web_log_effective_connection_type")&&(d=Po(),d=null!=d&&d.effectiveType?Oo.hasOwnProperty(d.effectiveType)?Oo[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?Ff(a,94,No[d]):
b&&(b.client.effectiveConnectionType=d)))}
function tr(a,b,c){c=void 0===c?{}:c;var d={};V("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":V("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||V("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.Mh||V("AUTHORIZATION");if(!b)if(a)b="Bearer "+D("gapi.auth.getToken")().Lh;else{Jo.g||(Jo.g=new Jo);a={};c=[];"SESSION_ID"in Nn&&c.push({key:"u",value:V("SESSION_ID")});if(c=bg(c))a.Authorization=c,c=void 0,void 0===c&&(c=Number(V("SESSION_INDEX",0)),c=isNaN(c)?0:c),
W("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Nn||(a["X-Origin"]=window.location.origin),"DELEGATED_SESSION_ID"in Nn&&(a["X-Goog-PageId"]=V("DELEGATED_SESSION_ID"));W("pageid_as_header_web")||delete a["X-Goog-PageId"];d=Object.assign({},d,a)}b&&(d.Authorization=b);return d}
function sr(a,b){if(!hr.g){var c=new hr;hr.g=c}c=hr.g;var d=Y()-c.l;if(0!==c.l&&d<Sn("send_config_hash_timer"))c=void 0;else{d=D("yt.gcf.config.coldConfigData");var e=D("yt.gcf.config.hotHashData"),f=D("yt.gcf.config.coldHashData");d&&e&&f&&(c.l=Y());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(d=e.coldConfigData,c=e.coldHashData,e=e.hotHashData,a){var g;b=null!=(g=xf(a,qn,62))?g:new qn;g=L(b,1,d);L(g,3,c).g(e);yf(a,qn,62,b)}else b&&(b.client.configInfo=b.client.configInfo||{},d&&(b.client.configInfo.coldConfigData=
d),c&&(b.client.configInfo.coldHashData=c),e&&(b.client.configInfo.hotHashData=e))}
;var ur="undefined"!==typeof TextEncoder?new TextEncoder:null,vr=ur?function(a){return ur.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};var wr=D("ytPubsub2Pubsub2Instance")||new R;R.prototype.subscribe=R.prototype.subscribe;R.prototype.unsubscribeByKey=R.prototype.Fc;R.prototype.publish=R.prototype.ue;R.prototype.clear=R.prototype.clear;H("ytPubsub2Pubsub2Instance",wr);H("ytPubsub2Pubsub2SubscribedKeys",D("ytPubsub2Pubsub2SubscribedKeys")||{});H("ytPubsub2Pubsub2TopicToKeys",D("ytPubsub2Pubsub2TopicToKeys")||{});H("ytPubsub2Pubsub2IsAsync",D("ytPubsub2Pubsub2IsAsync")||{});H("ytPubsub2Pubsub2SkipSubKey",null);function xr(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&(a={Di:a,Ci:b},(b=D("ytPubsub2Pubsub2Instance"))&&b.publish.call(b,"meta_logging_csi_event".toString(),"meta_logging_csi_event",a))}
;var yr=void 0,zr=void 0;function Ar(){if(!zr){var a=V("WORKER_SERIALIZATION_URL");zr=a?(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)?$a(a):null:null}return zr||void 0}
function Br(){var a=Ar();yr||void 0===a||(yr=new Worker(Ya(a),void 0));return yr}
;var Cr=Sn("max_body_size_to_compress",5E5),Dr=Sn("min_body_size_to_compress",500),Er=!0,Fr=0,Gr=0,Hr=Sn("compression_performance_threshold_lr",250),Ir=Sn("slow_compressions_before_abandon_count",4),Jr=!1,Kr=new Map,Lr=1,Mr=!0;function Nr(){if("function"===typeof Worker&&Ar()&&!Jr){var a=function(c){c=c.data;if("gzippedGelBatch"===c.op){var d=Kr.get(c.key);d&&(Or(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Kr.delete(c.key))}},b=Br();
b&&(b.addEventListener("message",a),b.onerror=function(){Kr.clear()},Jr=!0)}}
function Pr(a,b,c,d,e){e=void 0===e?!1:e;var f={startTime:Y(),ticks:{},infos:{}};if(Er)try{try{var g=(new Blob(b.split(""))).size}catch(m){Zn(m),g=null}if(null!=g&&(g>Cr||g<Dr))d(a,c);else{if(W("gzip_gel_with_worker")&&(W("initial_gzip_use_main_thread")&&!Mr||!W("initial_gzip_use_main_thread"))){Jr||Nr();var h=Br();if(h&&!e){Kr.set(Lr,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Lr});Lr++;return}}var k=vr(b);b=(b=void 0,{});b.Df=!0;var l=new ln(b);
l.push(k,!0);if(l.err)throw l.msg||mm[l.err];Or(l.result,f,a,c,d)}}catch(m){Zn(m),d(a,c)}else d(a,c)}
function Or(a,b,c,d,e){Mr=!1;var f=Y();b.ticks.gelc=f;Gr++;W("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Hr&&(Fr++,W("abandon_compression_after_N_slow_zips")?Gr===Sn("compression_disable_point")&&Fr>Ir&&(Er=!1):Er=!1);W("gel_compression_csi_killswitch")||!W("log_gel_compression_latency")&&!W("log_gel_compression_latency_lr")||xr("gel_compression",b,{sampleRate:.1});d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
;function Qr(a){a=Object.assign({},a);delete a.Authorization;var b=bg();if(b){var c=new Al;c.update(V("INNERTUBE_API_KEY"));c.update(b);a.hash=Yd(c.digest(),3)}return a}
;var Rr;function Sr(){Rr||(Rr=new Ap("yt.innertube"));return Rr}
function Tr(a,b,c,d){if(d)return null;d=Sr().get("nextId",!0)||1;var e=Sr().get("requests",!0)||{};e[d]={method:a,request:b,authState:Qr(c),requestTime:Math.round(Y())};Sr().set("nextId",d+1,86400,!0);Sr().set("requests",e,86400,!0);return d}
function Ur(a){var b=Sr().get("requests",!0)||{};delete b[a];Sr().set("requests",b,86400,!0)}
function Vr(a){var b=Sr().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Y())-d.requestTime)){var e=d.authState;var f=Qr(tr(!1));a:{var g=void 0,h=void 0;for(h in e)if(!(h in f)||e[h]!==f[h]){e=!1;break a}for(g in f)if(!(g in e)){e=!1;break a}e=!0}e&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Y())),Wr(a,d.method,e,{}));delete b[c]}}Sr().set("requests",b,86400,!0)}}
;function Xr(a){this.dc=this.g=!1;this.potentialEsfErrorCounter=this.l=0;this.handleError=function(){};
this.rb=function(){};
this.now=Date.now;this.Lb=!1;var b;this.Le=null!=(b=a.Le)?b:100;var c;this.Ce=null!=(c=a.Ce)?c:1;var d;this.ze=null!=(d=a.ze)?d:2592E6;var e;this.we=null!=(e=a.we)?e:12E4;var f;this.Be=null!=(f=a.Be)?f:5E3;var g;this.Z=null!=(g=a.Z)?g:void 0;this.lc=!!a.lc;var h;this.hc=null!=(h=a.hc)?h:.1;var k;this.xc=null!=(k=a.xc)?k:10;a.handleError&&(this.handleError=a.handleError);a.rb&&(this.rb=a.rb);a.Lb&&(this.Lb=a.Lb);a.dc&&(this.dc=a.dc);this.aa=a.aa;this.Ea=a.Ea;this.fa=a.fa;this.ia=a.ia;this.sendFn=a.sendFn;
this.md=a.md;this.jd=a.jd;Yr(this)&&(!this.aa||this.aa("networkless_logging"))&&Zr(this)}
function Zr(a){Yr(a)&&!a.Lb&&(a.g=!0,a.lc&&Math.random()<=a.hc&&a.fa.df(a.Z),$r(a),a.ia.ya()&&a.Wb(),a.ia.ra(a.md,a.Wb.bind(a)),a.ia.ra(a.jd,a.Jd.bind(a)))}
n=Xr.prototype;n.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(Yr(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.fa.set(d,this.Z).then(function(e){d.id=e;c.ia.ya()&&as(c,d)}).catch(function(e){as(c,d);
bs(c,e)})}else this.sendFn(a,b)};
n.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(Yr(this)&&this.g){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.aa&&this.aa("nwl_skip_retry")&&(e.skipRetry=c);if(this.ia.ya()||this.aa&&this.aa("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return B(function(k){if(1==k.g)return A(k,d.fa.set(e,d.Z).catch(function(l){bs(d,l)}),2);
f(g,h);k.g=0})}}this.sendFn(a,b,e.skipRetry)}else this.fa.set(e,this.Z).catch(function(g){d.sendFn(a,b,e.skipRetry);
bs(d,g)})}else this.sendFn(a,b,this.aa&&this.aa("nwl_skip_retry")&&c)};
n.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(Yr(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.fa.ob(d.id,c.Z):e=!0;c.ia.fb&&c.aa&&c.aa("vss_network_hint")&&c.ia.fb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.fa.set(d,this.Z).then(function(g){d.id=g;e&&c.fa.ob(d.id,c.Z)}).catch(function(g){bs(c,g)})}else this.sendFn(a,b,void 0,!0)};
n.Wb=function(){var a=this;if(!Yr(this))throw Error("IndexedDB is not supported: throttleSend");this.l||(this.l=this.Ea.Ha(function(){var b;return B(function(c){if(1==c.g)return A(c,a.fa.Wd("NEW",a.Z),2);if(3!=c.g)return b=c.l,b?A(c,as(a,b),3):(a.Jd(),c.return());a.l&&(a.l=0,a.Wb());c.g=0})},this.Le))};
n.Jd=function(){this.Ea.xa(this.l);this.l=0};
function as(a,b){var c;return B(function(d){switch(d.g){case 1:if(!Yr(a))throw Error("IndexedDB is not supported: immediateSend");if(void 0===b.id){d.O(2);break}return A(d,a.fa.ug(b.id,a.Z),3);case 3:(c=d.l)||a.rb(Error("The request cannot be found in the database."));case 2:if(cs(a,b,a.ze)){d.O(4);break}a.rb(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){d.O(5);break}return A(d,a.fa.ob(b.id,a.Z),5);case 5:return d.return();case 4:b.skipRetry||(b=ds(a,b));if(!b){d.O(0);
break}if(!b.skipRetry||void 0===b.id){d.O(8);break}return A(d,a.fa.ob(b.id,a.Z),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.g=0}})}
function ds(a,b){if(!Yr(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return B(function(m){switch(m.g){case 1:g=es(f);(h=fs(f))&&a.aa&&a.aa("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.aa&&a.aa("nwl_consider_error_code")&&g||a.aa&&!a.aa("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.xc)){m.O(2);break}if(!a.ia.Bc){m.O(3);break}return A(m,a.ia.Bc(),3);case 3:if(a.ia.ya()){m.O(2);break}c(e,f);if(!a.aa||!a.aa("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:
k.id)){m.O(6);break}return A(m,a.fa.sd(b.id,a.Z,!1),6);case 6:return m.return();case 2:if(a.aa&&a.aa("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.xc)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){m.O(8);break}return b.sendCount<a.Ce?A(m,a.fa.sd(b.id,a.Z,!0,h?!1:void 0),12):A(m,a.fa.ob(b.id,a.Z),8);case 12:a.Ea.Ha(function(){a.ia.ya()&&a.Wb()},a.Be);
case 8:c(e,f),m.g=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return B(function(h){if(1==h.g)return void 0===(null==(g=b)?void 0:g.id)?h.O(2):A(h,a.fa.ob(b.id,a.Z),2);a.ia.fb&&a.aa&&a.aa("vss_network_hint")&&a.ia.fb(!0);d(e,f);h.g=0})};
return b}
function cs(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function $r(a){if(!Yr(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.fa.Wd("QUEUED",a.Z).then(function(b){b&&!cs(a,b,a.we)?a.Ea.Ha(function(){return B(function(c){if(1==c.g)return void 0===b.id?c.O(2):A(c,a.fa.sd(b.id,a.Z),2);$r(a);c.g=0})}):a.ia.ya()&&a.Wb()})}
function bs(a,b){a.Qe&&!a.ia.ya()?a.Qe(b):a.handleError(b)}
function Yr(a){return!!a.Z||a.dc}
function es(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function fs(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var gs;
function hs(){if(gs)return gs();var a={};gs=Zq("LogsDatabaseV2",{yb:(a.LogsRequestsStore={Hb:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&iq(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.g.indexNames.contains("newRequest")&&d.g.deleteIndex("newRequest"),pq(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.g.objectStoreNames.contains("sapisid")&&b.g.deleteObjectStore("sapisid");c(9)&&b.g.objectStoreNames.contains("SWHealthLog")&&b.g.deleteObjectStore("SWHealthLog")},
version:9});return gs()}
;function is(a){return Cq(hs(),a)}
function js(a,b){var c,d,e,f;return B(function(g){if(1==g.g)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},A(g,is(b),2);if(3!=g.g)return d=g.l,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:V("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),A(g,kq(d,"LogsRequestsStore",e),3);f=g.l;c.ticks.tc=Y();ks(c);return g.return(f)})}
function ls(a,b){var c,d,e,f,g,h,k,l;return B(function(m){if(1==m.g)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},A(m,is(b),2);if(3!=m.g)return d=m.l,e=V("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,Y()],h=IDBKeyRange.bound(f,g),k="prev",W("use_fifo_for_networkless")&&(k="next"),l=void 0,A(m,hq(d,["LogsRequestsStore"],{mode:"readwrite",qa:!0},function(p){return vq(p.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},function(r){r.cursor.value&&
(l=r.cursor.value,"NEW"===a&&(l.status="QUEUED",r.update(l)))})}),3);
c.ticks.tc=Y();ks(c);return m.return(l)})}
function ms(a,b){var c;return B(function(d){if(1==d.g)return A(d,is(b),2);c=d.l;return d.return(hq(c,["LogsRequestsStore"],{mode:"readwrite",qa:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",dq(f.g.put(g,void 0)).then(function(){return g})})}))})}
function ns(a,b,c,d){c=void 0===c?!0:c;var e;return B(function(f){if(1==f.g)return A(f,is(b),2);e=f.l;return f.return(hq(e,["LogsRequestsStore"],{mode:"readwrite",qa:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),dq(h.g.put(k,void 0)).then(function(){return k})):Xp.resolve(void 0)})}))})}
function os(a,b){var c;return B(function(d){if(1==d.g)return A(d,is(b),2);c=d.l;return d.return(c.delete("LogsRequestsStore",a))})}
function ps(a){var b,c;return B(function(d){if(1==d.g)return A(d,is(a),2);b=d.l;c=Y()-2592E6;return A(d,hq(b,["LogsRequestsStore"],{mode:"readwrite",qa:!0},function(e){return rq(e.objectStore("LogsRequestsStore"),{},function(f){if(f.cursor.value.timestamp<=c)return f.delete().then(function(){return sq(f)})})}),0)})}
function qs(){B(function(a){return A(a,Vq(),0)})}
function ks(a){W("nwl_csi_killswitch")||xr("networkless_performance",a,{sampleRate:1})}
;var rs={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,
mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,
kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,
dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,
tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,
tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496};var ss={},ts=Zq("ServiceWorkerLogsDatabase",{yb:(ss.SWHealthLog={Hb:1},ss),shared:!0,upgrade:function(a,b){b(1)&&pq(iq(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function us(a){return Cq(ts(),a)}
function vs(a){var b,c;B(function(d){if(1==d.g)return A(d,us(a),2);b=d.l;c=Y()-2592E6;return A(d,hq(b,["SWHealthLog"],{mode:"readwrite",qa:!0},function(e){return rq(e.objectStore("SWHealthLog"),{},function(f){if(f.cursor.value.timestamp<=c)return f.delete().then(function(){return sq(f)})})}),0)})}
function ws(a){var b;return B(function(c){if(1==c.g)return A(c,us(a),2);b=c.l;return A(c,b.clear("SWHealthLog"),0)})}
;var xs={},ys=0;function zs(a){var b=new Image,c=""+ys++;xs[c]=b;b.onload=b.onerror=function(){delete xs[c]};
b.src=a}
;var As;function Bs(){As||(As=new Ap("yt.offline"));return As}
function Cs(a){if(W("offline_error_handling")){var b=Bs().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Bs().set("errors",b,2592E3,!0)}}
;function Ds(){this.g=new Map;this.l=!1}
function Es(){if(!Ds.g){var a=D("yt.networkRequestMonitor.instance")||new Ds;H("yt.networkRequestMonitor.instance",a);Ds.g=a}return Ds.g}
Ds.prototype.requestComplete=function(a,b){b&&(this.l=!0);a=this.removeParams(a);this.g.get(a)||this.g.set(a,b)};
Ds.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.g.get(a))?!1:!1===a&&this.l?!0:null};
Ds.prototype.removeParams=function(a){return a.split("?")[0]};
Ds.prototype.removeParams=Ds.prototype.removeParams;Ds.prototype.isEndpointCFR=Ds.prototype.isEndpointCFR;Ds.prototype.requestComplete=Ds.prototype.requestComplete;Ds.getInstance=Es;function Z(){Oc.call(this);var a=this;this.i=!1;this.l=fg();this.l.ra("networkstatus-online",function(){if(a.i&&W("offline_error_handling")){var b=Bs().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new Qo(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Yn(d)}Bs().set("errors",{},2592E3,!0)}}})}
y(Z,Oc);function Fs(){if(!Z.g){var a=D("yt.networkStatusManager.instance")||new Z;H("yt.networkStatusManager.instance",a);Z.g=a}return Z.g}
n=Z.prototype;n.ya=function(){return this.l.ya()};
n.fb=function(a){this.l.l=a};
n.Bf=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
n.nf=function(){this.i=!0};
n.ra=function(a,b){return this.l.ra(a,b)};
n.Bc=function(a){a=dg(this.l,a);a.then(function(b){W("use_cfr_monitor")&&Es().requestComplete("generate_204",b)});
return a};
Z.prototype.sendNetworkCheckRequest=Z.prototype.Bc;Z.prototype.listen=Z.prototype.ra;Z.prototype.enableErrorFlushing=Z.prototype.nf;Z.prototype.getWindowStatus=Z.prototype.Bf;Z.prototype.networkStatusHint=Z.prototype.fb;Z.prototype.isNetworkAvailable=Z.prototype.ya;Z.getInstance=Fs;function Gs(a){a=void 0===a?{}:a;Oc.call(this);var b=this;this.l=this.s=0;this.i=Fs();var c=D("yt.networkStatusManager.instance.listen").bind(this.i);c&&(a.zc?(this.zc=a.zc,c("networkstatus-online",function(){Hs(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Hs(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Pc(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Pc(b,"publicytnetworkstatus-offline")})))}
y(Gs,Oc);Gs.prototype.ya=function(){var a=D("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.i)():!0};
Gs.prototype.fb=function(a){var b=D("yt.networkStatusManager.instance.networkStatusHint").bind(this.i);b&&b(a)};
Gs.prototype.Bc=function(a){var b=this,c;return B(function(d){c=D("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.i);return W("skip_network_check_if_cfr")&&Es().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.fb((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.ya())})):c?d.return(c(a)):d.return(!0)})};
function Hs(a,b){a.zc?a.l?(gg.xa(a.s),a.s=gg.Ha(function(){a.o!==b&&(Pc(a,b),a.o=b,a.l=Y())},a.zc-(Y()-a.l))):(Pc(a,b),a.o=b,a.l=Y()):Pc(a,b)}
;var Is;function Js(){var a=Xr.call;Is||(Is=new Gs({ji:!0,Vh:!0}));a.call(Xr,this,{fa:{df:ps,ob:os,Wd:ls,ug:ms,sd:ns,set:js},ia:Is,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;Zn(new Qo(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else Yn(b)},
rb:Zn,sendFn:Ks,now:Y,Qe:Cs,Ea:zp(),md:"publicytnetworkstatus-online",jd:"publicytnetworkstatus-offline",lc:!0,hc:.1,xc:Sn("potential_esf_error_limit",10),aa:W,Lb:!(Ro()&&"www.youtube-nocookie.com"!==Jb(document.location.toString()))});this.i=new Ol;W("networkless_immediately_drop_all_requests")&&qs();Wq("LogsDatabaseV2")}
y(Js,Xr);function Ls(){var a=D("yt.networklessRequestController.instance");a||(a=new Js,H("yt.networklessRequestController.instance",a),W("networkless_logging")&&Oq().then(function(b){a.Z=b;Zr(a);a.i.resolve();a.lc&&Math.random()<=a.hc&&a.Z&&vs(a.Z);W("networkless_immediately_drop_sw_health_store")&&Ms(a)}));
return a}
Js.prototype.writeThenSend=function(a,b){b||(b={});b=Ns(a,b);Ro()||(this.g=!1);Xr.prototype.writeThenSend.call(this,a,b)};
Js.prototype.sendThenWrite=function(a,b,c){b||(b={});b=Ns(a,b);Ro()||(this.g=!1);Xr.prototype.sendThenWrite.call(this,a,b,c)};
Js.prototype.sendAndWrite=function(a,b){b||(b={});b=Ns(a,b);Ro()||(this.g=!1);Xr.prototype.sendAndWrite.call(this,a,b)};
Js.prototype.awaitInitialization=function(){return this.i.promise};
function Ms(a){var b;B(function(c){if(!a.Z)throw b=Tp("clearSWHealthLogsDb"),b;return c.return(ws(a.Z).catch(function(d){a.handleError(d)}))})}
function Ks(a,b,c,d){d=void 0===d?!1:d;b=W("web_fp_via_jspb")?Object.assign({},b):b;W("use_cfr_monitor")&&Os(a,b);if(W("use_request_time_ms_header"))b.headers&&io(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));else{var e;if(null==(e=b.postParams)?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(Y())}if(c&&0===Object.keys(b).length){var f=void 0===f?"":f;var g=void 0===g?!1:g;var h=void 0===h?!1:h;if(a)if(f)vo(a,void 0,"POST",f,void 0);else if(V("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)vo(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new Pa({url:a});if(k.i&&k.l||k.m){var l=Ib(a.match(Hb)[5]||null),m;if(!(m=!l||!l.endsWith("/aclk"))){var p=a.search(Qb),r=Pb(a,0,"ri",p);if(0>r)var q=null;else{var t=a.indexOf("&",r);if(0>t||t>p)t=p;q=Gb(a.slice(r+3,-1!==t?t:0))}m="1"!==q}var u=!m;break b}}catch(E){}u=!1}if(u){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var z=!0;break b}}catch(E){}z=!1}c=z?!0:!1}else c=!1;c||zs(a)}}else b.compress?
b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),Pr(a,b.postBody,b,zo,d)):Pr(a,JSON.stringify(b.postParams),b,yo,d):zo(a,b)}
function Ns(a,b){W("use_event_time_ms_header")&&io(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(Y())));return b}
function Os(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Es().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Es().requestComplete(a,!0);d(e,f)}}
;var Ps=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1};H("ytNetworklessLoggingInitializationOptions",Ps);function Qs(a){var b=this;this.config_=null;a?this.config_=a:kr()&&(this.config_=lr());Uo(function(){Vr(b)},5E3)}
Qs.prototype.isReady=function(){!this.config_&&kr()&&(this.config_=lr());return!!this.config_};
function Wr(a,b,c,d){function e(t){t=void 0===t?!1:t;var u;if(d.retry&&"www.youtube-nocookie.com"!=h&&(t||W("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(u=Tr(b,c,l,k)),u)){var z=g.onSuccess,E=g.onFetchSuccess;g.onSuccess=function(ca,jb){Ur(u);z(ca,jb)};
c.onFetchSuccess=function(ca,jb){Ur(u);E(ca,jb)}}try{if(t&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Ls().writeThenSend(q,g):Ls().sendAndWrite(q,g);
else if(d.compress){var S=!d.networklessOptions.writeThenSend;if(g.postBody){var ia=g.postBody;"string"!==typeof ia&&(ia=JSON.stringify(g.postBody));Pr(q,ia,g,zo,S)}else Pr(q,JSON.stringify(g.postParams),g,yo,S)}else W("web_all_payloads_via_jspb")?zo(q,g):yo(q,g)}catch(ca){if("InvalidAccessError"===ca.name)u&&(Ur(u),u=0),Zn(Error("An extension is blocking network request."));else throw ca;}u&&Uo(function(){Vr(a)},5E3)}
!V("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Zn(new Qo("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Qo("innertube xhrclient not ready",b,c,d);Yn(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(t,u){if(d.onSuccess)d.onSuccess(u)},
onFetchSuccess:function(t){if(d.onSuccess)d.onSuccess(t)},
onError:function(t,u){if(d.onError)d.onError(u)},
onFetchError:function(t){if(d.onError)d.onError(t)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.fg)&&(h=f);var k=a.config_.hg||!1,l=tr(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.dg+"/"+b,p={alt:"json"},r=a.config_.gg&&f;r=r&&f.startsWith("Bearer");r||(p.key=a.config_.cg);var q=ho(""+h+m,p||{},!0);D("ytNetworklessLoggingInitializationOptions")&&
Ps.isNwlInitialized?Mq().then(function(t){e(t)}):e(!1)}
;var Rs=0;H("ytDomDomGetNextId",D("ytDomDomGetNextId")||function(){return++Rs});H("ytEventsEventsListeners",C.ytEventsEventsListeners||{});H("ytEventsEventsCounter",C.ytEventsEventsCounter||{count:0});function Ss(){var a=D("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var Ts=C.ytPubsubPubsubInstance||new R,Us=C.ytPubsubPubsubSubscribedKeys||{},Vs=C.ytPubsubPubsubTopicToKeys||{},Ws=C.ytPubsubPubsubIsSynchronous||{};R.prototype.subscribe=R.prototype.subscribe;R.prototype.unsubscribeByKey=R.prototype.Fc;R.prototype.publish=R.prototype.ue;R.prototype.clear=R.prototype.clear;H("ytPubsubPubsubInstance",Ts);H("ytPubsubPubsubTopicToKeys",Vs);H("ytPubsubPubsubIsSynchronous",Ws);H("ytPubsubPubsubSubscribedKeys",Us);var Xs=Symbol("injectionDeps");function Ys(){this.key=hr}
function Zs(){this.l=new Map;this.g=new Map}
Zs.prototype.resolve=function(a){return a instanceof Ys?$s(this,a.key,[],!0):$s(this,a,[])};
function $s(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.g.has(b))return a.g.get(b);if(!a.l.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.l.get(b);c.push(b);if(void 0!==d.dh)var e=d.dh;else if(d.bh)e=d[Xs]?at(a,d[Xs],c):[],e=d.bh.apply(d,x(e));else if(d.ah){e=d.ah;var f=e[Xs]?at(a,e[Xs],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(x(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.yi||a.g.set(b,e);return e}
function at(a,b,c){return b?b.map(function(d){return d instanceof Ys?$s(a,d.key,c,!0):$s(a,d,c)}):[]}
;var bt;function ct(){bt||(bt=new Zs);return bt}
;var dt=window;function et(){var a,b;return"h5vcc"in dt&&(null==(a=dt.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=dt.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in dt&&dt.performance.mark&&dt.performance.measure?2:0}
function ft(a){switch(et()){case 1:dt.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:dt.performance.mark(a+"-start");break;case 0:break;default:Db()}}
function gt(a){switch(et()){case 1:dt.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";dt.performance.mark(c);dt.performance.measure(a,b,c);break;case 0:break;default:Db()}}
;var ht=W("web_enable_lifecycle_monitoring")&&0!==et(),it=W("web_enable_lifecycle_monitoring");function jt(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?zp():d;this.m=c;this.l=d;this.i=new Ol;this.g=a;for(a={cb:0};a.cb<this.g.length;a={wc:void 0,cb:a.cb},a.cb++)a.wc=this.g[a.cb],c=function(e){return function(){e.wc.bd();b.g[e.cb].yc=!0;b.g.every(function(f){return!0===f.yc})&&b.i.resolve()}}(a),d=this.l.Za(c,kt(this,a.wc)),this.g[a.cb]=Object.assign({},a.wc,{bd:c,
jobId:d})}
function lt(a){var b=Array.from(a.g.keys()).sort(function(d,e){return kt(a,a.g[e])-kt(a,a.g[d])});
b=w(b);for(var c=b.next();!c.done;c=b.next())c=a.g[c.value],void 0===c.jobId||c.yc||(a.l.xa(c.jobId),a.l.Za(c.bd,10))}
jt.prototype.cancel=function(){for(var a=w(this.g),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.yc||this.l.xa(b.jobId),b.yc=!0;this.i.resolve()};
function kt(a,b){var c;return null!=(c=b.priority)?c:a.m}
;function mt(a){this.state=a;this.i=[];this.o=void 0;this.u={};ht&&ft(this.state)}
mt.prototype.install=function(a){this.i.push(a);return this};
function nt(a){ht&&gt(a.state);var b=a.transitions.find(function(d){return Array.isArray(d.from)?d.from.find(function(e){return e===a.state&&"none"===d.Va}):d.from===a.state&&"none"===d.Va});
if(b){a.l&&(lt(a.l),a.l=void 0);it&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to 'none'"),console.log("with message: ",void 0),console.groupEnd());a.state="none";ht&&ft(a.state);b=b.action.bind(a);var c=a.i.filter(function(d){return d.none}).map(function(d){return d.none});
b(ot(a,c),void 0)}else throw Error("no transition specified from "+a.state+" to none");}
function ot(a,b){var c=b.filter(function(e){return 10===pt(a,e)}),d=b.filter(function(e){return 10!==pt(a,e)});
return a.u.wi?function(){var e=Ea.apply(0,arguments);return B(function(f){if(1==f.g)return A(f,a.D.apply(a,[c].concat(x(e))),2);a.s.apply(a,[d].concat(x(e)));f.g=0})}:function(){var e=Ea.apply(0,arguments);
a.F.apply(a,[c].concat(x(e)));a.s.apply(a,[d].concat(x(e)))}}
mt.prototype.F=function(a){for(var b=Ea.apply(1,arguments),c=zp(),d=w(a),e=d.next(),f={};!e.done;f={Rb:void 0},e=d.next())f.Rb=e.value,c.Gb(function(g){return function(){qt(g.Rb.name);g.Rb.Mc.apply(g.Rb,x(b));rt(g.Rb.name)}}(f))};
mt.prototype.D=function(a){var b=Ea.apply(1,arguments),c,d,e,f,g;return B(function(h){1==h.g&&(c=zp(),d=w(a),e=d.next(),f={});if(3!=h.g){if(e.done)return h.O(0);f.ub=e.value;f.Zb=void 0;g=function(k){return function(){qt(k.ub.name);var l=k.ub.Mc.apply(k.ub,x(b));"function"===typeof(null==l?void 0:l.then)?k.Zb=l.then(function(){rt(k.ub.name)}):rt(k.ub.name)}}(f);
c.Gb(g);return f.Zb?A(h,f.Zb,3):h.O(3)}f={ub:void 0,Zb:void 0};e=d.next();return h.O(2)})};
mt.prototype.s=function(a){var b=Ea.apply(1,arguments),c=this,d=a.map(function(e){return{bd:function(){qt(e.name);e.Mc.apply(e,x(b));rt(e.name)},
priority:pt(c,e)}});
d.length&&(this.l=new jt(d))};
function pt(a,b){var c,d;return null!=(d=null!=(c=a.o)?c:b.priority)?d:0}
function qt(a){ht&&a&&ft(a)}
function rt(a){ht&&a&&gt(a)}
ea.Object.defineProperties(mt.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function st(a){mt.call(this,void 0===a?"none":a);this.g=null;this.o=10;this.transitions=[{from:"none",Va:"application_navigating",action:this.A},{from:"application_navigating",Va:"none",action:this.B},{from:"application_navigating",Va:"application_navigating",action:function(){}},
{from:"none",Va:"none",action:function(){}}]}
var tt;y(st,mt);st.prototype.A=function(a,b){var c=this;this.g=Uo(function(){"application_navigating"===c.m&&nt(c)},5E3);
a(null==b?void 0:b.event)};
st.prototype.B=function(a,b){this.g&&(gg.xa(this.g),this.g=null);a(null==b?void 0:b.event)};
function ut(){tt||(tt=new st);return tt}
;var vt=[];H("yt.logging.transport.getScrapedGelPayloads",function(){return vt});function wt(){this.store={};this.g={}}
wt.prototype.storePayload=function(a,b){a=xt(a);this.store[a]?this.store[a].push(b):(this.g={},this.store[a]=[b]);return a};
wt.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=zt(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,x(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,x(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,x(this.smartExtractMatchingEntries(a))));return c};
wt.prototype.extractMatchingEntries=function(a){a=zt(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,x(this.store[a[c]])),delete this.store[a[c]]);return b};
wt.prototype.getSequenceCount=function(a){a=zt(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function zt(a,b){var c=xt(b);if(a.g[c])return a.g[c];var d=Object.keys(a.store)||[];if(1>=d.length&&xt(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(At(b.auth,g[0])){var h=b.isJspb;At(void 0===h?"undefined":h?"true":"false",g[1])&&At(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),At(h,g[3])&&e.push(d[f]))}}return a.g[c]=e}
function At(a,b){return void 0===a||"undefined"===a?!0:a===b}
wt.prototype.getSequenceCount=wt.prototype.getSequenceCount;wt.prototype.extractMatchingEntries=wt.prototype.extractMatchingEntries;wt.prototype.smartExtractMatchingEntries=wt.prototype.smartExtractMatchingEntries;wt.prototype.storePayload=wt.prototype.storePayload;function xt(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;var Bt=Sn("initial_gel_batch_timeout",2E3),Ct=Sn("gel_queue_timeout_max_ms",6E4),Dt=Math.pow(2,16)-1,Et=Sn("gel_min_batch_size",5),Ft=void 0;function Gt(){this.m=this.g=this.l=0;this.i=!1}
var Ht=new Gt,It=new Gt,Jt=new Gt,Kt=new Gt,Lt,Mt=!0,Nt=1,Ot=new Map,Pt=C.ytLoggingTransportTokensToCttTargetIds_||{};H("ytLoggingTransportTokensToCttTargetIds_",Pt);var Qt=C.ytLoggingTransportTokensToJspbCttTargetIds_||{};H("ytLoggingTransportTokensToJspbCttTargetIds_",Qt);var Rt={};function St(){var a=D("yt.logging.ims");a||(a=new wt,H("yt.logging.ims",a));return a}
function Tt(a,b){if("log_event"===a.endpoint){Ut(a);var c=Vt(a),d=Wt(a.payload)||"",e=Xt(d),f=200;if(e){if(!1===e.enabled&&!W("web_payload_policy_disabled_killswitch"))return;f=Yt(e.tier);if(400===f){Zt(a,b);return}}Rt[c]=!0;e={cttAuthInfo:c,isJspb:!1,tier:f};St().storePayload(e,a.payload);$t(b,c,!1,e,au(d))}}
function bu(a,b,c){if("log_event"===b.endpoint){Ut(void 0,b);var d=Vt(b,!0),e=Xt(a),f=200;if(e){if(!1===e.enabled&&!W("web_payload_policy_disabled_killswitch"))return;f=Yt(e.tier);if(400===f){cu(a,b,c);return}}Rt[d]=!0;e={cttAuthInfo:d,isJspb:!0,tier:f};St().storePayload(e,b.payload.toJSON());$t(c,d,!0,e,au(a))}}
function $t(a,b,c,d,e){function f(){du(W("flush_only_full_queue")?b:void 0,c,d.tier)}
c=void 0===c?!1:c;e=void 0===e?!1:e;a&&(Ft=new a);a=Sn("tvhtml5_logging_max_batch_ads_fork")||Sn("web_logging_max_batch")||100;var g=Y(),h=eu(c,d.tier),k=h.m;e&&(h.i=!0);e=0;d&&(e=St().getSequenceCount(d));1E3<=e?f():e>=a?Lt||(Lt=fu(function(){f();Lt=void 0},0)):10<=g-k&&(gu(c,d.tier),h.m=g)}
function Zt(a,b){if("log_event"===a.endpoint){Ut(a);var c=Vt(a),d=new Map;d.set(c,[a.payload]);var e=Wt(a.payload)||"";b&&(Ft=new b);return new Bd(function(f,g){Ft&&Ft.isReady()?hu(d,Ft,f,g,{bypassNetworkless:!0},!0,au(e)):f()})}}
function cu(a,b,c){if("log_event"===b.endpoint){Ut(void 0,b);var d=Vt(b,!0),e=new Map;e.set(d,[b.payload.toJSON()]);c&&(Ft=new c);return new Bd(function(f){Ft&&Ft.isReady()?iu(e,Ft,f,{bypassNetworkless:!0},!0,au(a)):f()})}}
function Vt(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new In;c.videoId?vf(d,1,Ef,Pe(c.videoId)):c.playlistId&&vf(d,2,Ef,Pe(c.playlistId));Qt[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Pt[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function du(a,b,c){var d={writeThenSend:!0};d=void 0===d?{}:d;b=void 0===b?!1:b;new Bd(function(e,f){var g=eu(b,c),h=g.i;g.i=!1;ju(g.l);ju(g.g);g.g=0;Ft&&Ft.isReady()?void 0===c&&W("enable_web_tiered_gel")?ku(e,f,d,a,b,300,h):ku(e,f,d,a,b,c,h):(gu(b,c),e())})}
function ku(a,b,c,d,e,f,g){var h=Ft;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;g=void 0===g?!1:g;var k=new Map,l=new Map,m={isJspb:e,cttAuthInfo:d,tier:f},p={isJspb:e,cttAuthInfo:d};if(void 0!==d)e?(b=W("enable_web_tiered_gel")?St().smartExtractMatchingEntries({keys:[m,p],sizeLimit:1E3}):St().extractMatchingEntries(p),k.set(d,b),iu(k,h,a,c,!1,g)):(k=W("enable_web_tiered_gel")?St().smartExtractMatchingEntries({keys:[m,p],sizeLimit:1E3}):St().extractMatchingEntries(p),l.set(d,k),hu(l,h,
a,b,c,!1,g));else if(e){b=w(Object.keys(Rt));for(l=b.next();!l.done;l=b.next())l=l.value,f=W("enable_web_tiered_gel")?St().smartExtractMatchingEntries({keys:[m,p],sizeLimit:1E3}):St().extractMatchingEntries({isJspb:!0,cttAuthInfo:l}),0<f.length&&k.set(l,f),(W("web_fp_via_jspb_and_json")&&c.writeThenSend||!W("web_fp_via_jspb_and_json"))&&delete Rt[l];iu(k,h,a,c,!1,g)}else{k=w(Object.keys(Rt));for(m=k.next();!m.done;m=k.next())m=m.value,p=W("enable_web_tiered_gel")?St().smartExtractMatchingEntries({keys:[{isJspb:!1,
cttAuthInfo:m,tier:f},{isJspb:!1,cttAuthInfo:m}],sizeLimit:1E3}):St().extractMatchingEntries({isJspb:!1,cttAuthInfo:m}),0<p.length&&l.set(m,p),(W("web_fp_via_jspb_and_json")&&c.writeThenSend||!W("web_fp_via_jspb_and_json"))&&delete Rt[m];hu(l,h,a,b,c,!1,g)}}
function gu(a,b){function c(){du(void 0,a,b)}
a=void 0===a?!1:a;b=void 0===b?200:b;var d=eu(a,b),e=d===Kt||d===Jt?5E3:Ct;W("web_gel_timeout_cap")&&!d.g&&(e=fu(function(){c()},e),d.g=e);
ju(d.l);e=V("LOGGING_BATCH_TIMEOUT",Sn("web_gel_debounce_ms",1E4));W("shorten_initial_gel_batch_timeout")&&Mt&&(e=Bt);e=fu(function(){0<Sn("gel_min_batch_size")?St().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=Et&&c():c()},e);
d.l=e}
function hu(a,b,c,d,e,f,g){e=void 0===e?{}:e;var h=Math.round(Y()),k=a.size,l=lu(g);a=w(a);var m=a.next();for(g={};!m.done;g={hd:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,ld:void 0,kd:void 0},m=a.next()){var p=w(m.value);m=p.next().value;p=p.next().value;g.batchRequest=ub({context:mr(b.config_||lr())});if(!Ja(p)&&!W("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=p;(p=Pt[m])&&mu(g.batchRequest,m,p);delete Pt[m];g.dangerousLogToVisitorSession="visitorOnlyApprovedKey"===
m;nu(g.batchRequest,h,g.dangerousLogToVisitorSession);ou(e);g.ld=function(r){W("start_client_gcf")&&gg.Ha(function(){return B(function(q){return A(q,pu(r),0)})});
k--;k||c()};
g.hd=0;g.kd=function(r){return function(){r.hd++;if(e.bypassNetworkless&&1===r.hd)try{Wr(b,l,r.batchRequest,qu({writeThenSend:!0},r.dangerousLogToVisitorSession,r.ld,r.kd,f)),Mt=!1}catch(q){Yn(q),d()}k--;k||c()}}(g);
try{Wr(b,l,g.batchRequest,qu(e,g.dangerousLogToVisitorSession,g.ld,g.kd,f)),Mt=!1}catch(r){Yn(r),d()}}}
function iu(a,b,c,d,e,f){d=void 0===d?{}:d;var g=Math.round(Y()),h={value:a.size},k=new Map([].concat(x(a)));k=w(k);for(var l=k.next();!l.done;l=k.next()){var m=w(l.value).next().value,p=a.get(m);l=new Jn;var r=b.config_||lr(),q=new An,t=new tn;L(t,1,r.ie);L(t,2,r.he);Ff(t,16,r.eg);L(t,17,r.ge);if(r.Yc){var u=r.Yc,z=new qn;u.coldConfigData&&L(z,1,u.coldConfigData);u.appInstallData&&L(z,6,u.appInstallData);u.coldHashData&&L(z,3,u.coldHashData);u.hotHashData&&z.g(u.hotHashData);yf(t,qn,62,z)}if((u=
C.devicePixelRatio)&&1!=u){if(null!=u&&"number"!==typeof u)throw Error("Value of float/double field must be a number, found "+typeof u+": "+u);sf(t,65,u)}u=V("EXPERIMENTS_TOKEN","");""!==u&&L(t,54,u);u=Tn();if(0<u.length){z=new wn;for(var E=0;E<u.length;E++){var S=new un;L(S,1,u[E].key);vf(S,2,vn,Pe(u[E].value));Bf(z,15,un,S)}yf(q,wn,5,z)}nr(r,t);or(q);pr(t);qr(r,t);rr(t);W("start_client_gcf")&&sr(t);V("DELEGATED_SESSION_ID")&&!W("pageid_as_header_web")&&(r=new zn,L(r,3,V("DELEGATED_SESSION_ID")));
!W("fill_delegate_context_in_gel_killswitch")&&(u=V("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(z=xf(q,zn,3)||new zn,r=q,u=L(z,18,u),yf(r,zn,3,u));r=t;u=w(Object.entries(go(V("DEVICE",""))));for(z=u.next();!z.done;z=u.next())E=w(z.value),z=E.next().value,E=E.next().value,"cbrand"===z?L(r,12,E):"cmodel"===z?L(r,13,E):"cbr"===z?L(r,87,E):"cbrver"===z?L(r,88,E):"cos"===z?L(r,18,E):"cosver"===z?L(r,19,E):"cplatform"===z&&Ff(r,42,Ko(E));yf(q,tn,1,t);yf(l,An,1,q);if(t=Qt[m])a:{if(Df(t,1))q=1;
else if(t.getPlaylistId())q=2;else break a;yf(l,In,4,t);t=xf(l,An,1)||new An;r=xf(t,zn,3)||new zn;u=new yn;L(u,2,m);Ff(u,1,q);Bf(r,12,yn,u);yf(t,zn,3,r)}delete Qt[m];m="visitorOnlyApprovedKey"===m;ru()||sf(l,2,Le(g));!m&&(q=V("EVENT_ID"))&&(t=su(),r=new Hn,L(r,1,q),sf(r,2,Le(t)),yf(l,Hn,5,r));ou(d);if(W("jspb_serialize_with_worker")&&(q=Br())&&d.writeThenSend){Ot.set(Nt,{client:b,resolve:c,networklessOptions:d,isIsolated:e,useVSSEndpoint:f,dangerousLogToVisitorSession:m,requestsOutstanding:h});q.postMessage({op:"gelBatchToSerialize",
batchRequest:l.toJSON(),clientEvents:p,key:Nt});Nt++;break}if(p){q=[];for(t=0;t<p.length;t++)try{q.push(new Fn(p[t]))}catch(ca){Yn(new Qo("Transport failed to deserialize "+String(p[t])))}p=q}else p=[];p=w(p);for(q=p.next();!q.done;q=p.next())Bf(l,3,Fn,q.value);p={startTime:Y(),ticks:{},infos:{}};Ae=!0;try{var ia=JSON.stringify(l.toJSON(),ef)}finally{Ae=!1}p.ticks.geljspc=Y();W("log_jspb_serialize_latency")&&xr("gel_jspb_serialize",p,{sampleRate:.1});tu(ia,b,c,d,e,f,m,h)}}
function tu(a,b,c,d,e,f,g,h){d=void 0===d?{}:d;h=void 0===h?{value:0}:h;f=lu(f);d=qu(d,g,function(k){W("start_client_gcf")&&gg.Ha(function(){return B(function(l){return A(l,pu(k),0)})});
h.value--;h.value||c()},function(){h.value--;
h.value||c()},e);
d.headers["Content-Type"]="application/json+protobuf";d.postBodyFormat="JSPB";d.postBody=a;Wr(b,f,"",d);Mt=!1}
function ou(a){W("always_send_and_write")&&(a.writeThenSend=!1)}
function qu(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Oh:!!e,headers:{},postBodyFormat:"",postBody:"",compress:W("compress_gel")||W("compress_gel_lr")};ru()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));return a}
function nu(a,b,c){ru()||(a.requestTimeMs=String(b));W("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=V("EVENT_ID"))&&(c=su(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function su(){var a=V("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Dt/2));a++;a>Dt&&(a=1);On("BATCH_CLIENT_COUNTER",a);return a}
function mu(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Ut(a,b){if(!D("yt.logging.transport.enableScrapingForTest")){var c=Rn("il_payload_scraping");if("enable_il_payload_scraping"===(void 0!==c?String(c):""))vt=[],H("yt.logging.transport.enableScrapingForTest",!0),H("yt.logging.transport.scrapedPayloadsForTesting",vt),H("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),H("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
H("yt.logging.transport.scrapeClientEvent",!0);else return}c=D("yt.logging.transport.scrapedPayloadsForTesting");var d=D("yt.logging.transport.payloadToScrape");b&&(b=D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);b=D("yt.logging.transport.scrapeClientEvent");if(d&&1<=d.length)for(var e=0;e<d.length;e++)if(a&&a.payload[d[e]])if(b)c.push(a.payload);else{var f=void 0;c.push((null==(f=a)?void 0:f.payload)[d[e]])}H("yt.logging.transport.scrapedPayloadsForTesting",
c)}
function ru(){return W("use_request_time_ms_header")||W("lr_use_request_time_ms_header")}
function fu(a,b){return!1===W("transport_use_scheduler")?qo(a,b):W("logging_avoid_blocking_during_navigation")||W("lr_logging_avoid_blocking_during_navigation")?Uo(function(){if("none"===ut().m)a();else{var c={};ut().install((c.none={Mc:a},c))}},b):Uo(a,b)}
function ju(a){W("transport_use_scheduler")?gg.xa(a):window.clearTimeout(a)}
function pu(a){var b,c,d,e,f,g,h,k,l,m;return B(function(p){if(1==p.g){d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup;var r=d?d[pn.name]:void 0;e=r;g=null==(f=d)?void 0:f.hotHashData;r=d?d[on.name]:void 0;h=r;l=null==(k=d)?void 0:k.coldHashData;return(m=ct().resolve(new Ys))?g?e?A(p,ir(m,g,e),2):A(p,ir(m,g),2):p.O(2):p.return()}return l?h?A(p,jr(m,l,h),0):A(p,jr(m,l),0):p.O(0)})}
function eu(a,b){b=void 0===b?200:b;return a?300===b?Kt:It:300===b?Jt:Ht}
function Xt(a){if(W("enable_web_tiered_gel")){a=rs[a||""];var b,c;if(null==ct().resolve(new Ys))var d=void 0;else{var e=null!=(d=D("yt.gcf.config.hotConfigGroup"))?d:V("RAW_HOT_CONFIG_GROUP");d=null==e?void 0:null==(b=e.loggingHotConfig)?void 0:null==(c=b.eventLoggingConfig)?void 0:c.payloadPolicies}if(b=d)for(c=0;c<b.length;c++)if(b[c].payloadNumber===a)return b[c]}}
function Wt(a){a=Object.keys(a);a=w(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,rs[b])return b}
function Yt(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
function au(a){return"gelDebuggingEvent"===a}
function lu(a){return(void 0===a?0:a)&&W("vss_through_gel_video_stats")?"video_stats":"log_event"}
;var uu=C.ytLoggingGelSequenceIdObj_||{};H("ytLoggingGelSequenceIdObj_",uu);function vu(a){uu[a]=a in uu?uu[a]+1:0;return uu[a]}
;var wu=[];var xu=C.ytLoggingGelSequenceIdObj_||{};H("ytLoggingGelSequenceIdObj_",xu);var yu=C.ytLoggingDocDocumentNonce_;
if(!yu){var zu;a:{if(window.crypto&&window.crypto.getRandomValues)try{var Au=Array(16),Bu=new Uint8Array(16);window.crypto.getRandomValues(Bu);for(var Cu=0;Cu<Au.length;Cu++)Au[Cu]=Bu[Cu];zu=Au;break a}catch(a){}for(var Du=Array(16),Eu=0;16>Eu;Eu++){for(var Fu=Date.now(),Gu=0;Gu<Fu%23;Gu++)Du[Eu]=Math.random();Du[Eu]=Math.floor(256*Math.random())}if(lo)for(var Hu=1,Iu=0;Iu<lo.length;Iu++)Du[Hu%16]=Du[Hu%16]^Du[(Hu-1)%16]/4^lo.charCodeAt(Iu),Hu++;zu=Du}for(var Ju=zu,Ku=[],Lu=0;Lu<Ju.length;Lu++)Ku.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(Ju[Lu]&
63));yu=Ku.join("");H("ytLoggingDocDocumentNonce_",yu)}var Mu=yu;function Nu(a){return V("client-screen-nonce-store",{})[void 0===a?0:a]}
function Ou(a,b){b=void 0===b?0:b;var c=V("client-screen-nonce-store");c||(c={},On("client-screen-nonce-store",c));c[b]=a}
function Pu(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
H("yt_logging_screen.getRootVeType",function(a){return V(Pu(void 0===a?0:a))});
function Qu(){var a=V("csn-to-ctt-auth-info");a||(a={},On("csn-to-ctt-auth-info",a));return a}
function Ru(a){a=Nu(void 0===a?0:a);if(!a&&!V("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
H("yt_logging_screen.getCurrentCsn",Ru);function Su(a,b,c){var d=Qu();(c=Ru(c))&&delete d[c];b&&(d[a]=b)}
H("yt_logging_screen.getCttAuthInfo",function(a){return Qu()[a]});
H("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==Nu(c)||b!==V(Pu(c)))if(Su(a,d,c),Ou(a,c),On(Pu(c),b),b=function(){setTimeout(function(){if(a)if(W("web_time_via_jspb")){var e=new Cn;L(e,1,Mu);L(e,2,a);var f=W("jspb_sparse_encoded_pivot")?new Fn([{}]):new Fn;null!=e?Qe(e,Cn):e=void 0;vf(f,111,Gn,e);var g=void 0;g=void 0===g?{}:g;e=!1;V("ytLoggingEventsDefaultDisabled",!1)&&(e=!0);e=e?null:Qs;g=void 0===g?{}:g;var h=Math.round(g.timestamp||Y());sf(f,1,Le(h<Number.MAX_SAFE_INTEGER?
h:0));h=new En;if(g.lact)sf(h,1,Le(isFinite(g.lact)?g.lact:-1));else if(g.timestamp)sf(h,1,Le(-1));else{var k=Ss();sf(h,1,Le(isFinite(k)?k:-1))}if(g.sequenceGroup&&!W("web_gel_sequence_info_killswitch")){k=g.sequenceGroup;var l=vu(k),m=new Dn;sf(m,2,Le(l));L(m,1,k);yf(h,Dn,3,m);g.endOfSequence&&delete xu[g.sequenceGroup]}yf(f,En,33,h);(g.sendIsolatedPayload?cu:bu)("foregroundHeartbeatScreenAssociated",{endpoint:"log_event",payload:f,cttAuthInfo:g.cttAuthInfo,dangerousLogToVisitorSession:g.dangerousLogToVisitorSession},
e)}else h={clientDocumentNonce:Mu,clientScreenNonce:a},e=void 0===e?{}:e,f=Qs,V("ytLoggingEventsDefaultDisabled",!1)&&Qs===Qs&&(f=null),W("web_all_payloads_via_jspb")?(e.timestamp||(e.lact=Ss(),e.timestamp=Y()),wu.push({ni:"foregroundHeartbeatScreenAssociated",payload:h,options:e})):(e=void 0===e?{}:e,g={},k=Math.round(e.timestamp||Y()),g.eventTimeMs=k<Number.MAX_SAFE_INTEGER?k:0,g.foregroundHeartbeatScreenAssociated=h,h=Ss(),g.context={lastActivityMs:String(e.timestamp||!isFinite(h)?-1:h)},e.sequenceGroup&&
!W("web_gel_sequence_info_killswitch")&&(h=g.context,k=e.sequenceGroup,k={index:vu(k),groupKey:k},h.sequence=k,e.endOfSequence&&delete uu[e.sequenceGroup]),(e.sendIsolatedPayload?Zt:Tt)({endpoint:"log_event",payload:g,cttAuthInfo:e.cttAuthInfo,dangerousLogToVisitorSession:e.dangerousLogToVisitorSession},f))},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});var Tu="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function Uu(a,b){var c=void 0===c?!0:c;var d=V("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=Jb(window.location.href);e&&d.push(e);e=Jb(a);if(0<=ob(d,e)||!e&&0==a.lastIndexOf("/",0))if(d=document.createElement("a"),nb(d,a),a=d.href)if(a=Kb(a),a=Lb(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Ru()},b)),f){var f=parseInt(f,10);isFinite(f)&&0<f&&Vu(a,b,f)}else Vu(a,b)}
function Vu(a,b,c){a=Wu(a);b=b?Nb(b):"";c=c||5;($f()||(Td||Ud)&&ko("applewebkit")&&!ko("version")&&(!ko("safari")||ko("gsa/"))||pc&&ko("version/")||!V("EOM_VISITOR_DATA"))&&Un(a,b,c)}
function Wu(a){var b=a;a=w(Tu);for(var c=a.next();!c.done;c=a.next()){for(var d=c.value,e=b.search(Qb),f=0,g=[];0<=(c=Pb(b,f,d,e));)g.push(b.substring(f,c)),f=Math.min(b.indexOf("&",c)+1||e,e);g.push(b.slice(f));b=g.join("").replace(Rb,"$1")}for(c=a=0;c<b.length;++c)a=31*a+b.charCodeAt(c)>>>0;return"ST-"+a.toString(36)}
;new R;function Xu(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return("WEB"===V("INNERTUBE_CLIENT_NAME")||"WEB_CREATOR"===V("INNERTUBE_CLIENT_NAME"))&&a}
;function Yu(a,b){b=b?{feature:b}:{};var c=V("EVENT_ID");c&&(b.ei=c,c=((c=document.getElementById("masthead-search"))?c.dataset?c.dataset[Qn()]:c.getAttribute("data-clicktracking"):null)||"",b.ved=c,Uu(a,b));b=D("yt.window.navigate");try{b(a)}catch(h){var d=void 0===d?{}:d;var e=void 0===e?"":e;var f=void 0===f?window:f;a=Ob(a,d);V("LOGGED_IN",!0)&&Xu()&&(d=V("VALID_SESSION_TEMPDATA_DOMAINS",[]),(b=Jb(window.location.href))&&d.push(b),b=Jb(a),0<=ob(d,b)||!b&&0==a.lastIndexOf("/",0)?(d=Kb(a),(d=Lb(d))?
(d=Wu(d),d=(d=Yf.get(""+d,void 0)||null)?go(d):{}):d=null):d=null,null==d&&(d={}),b=d,c=void 0,Xu()?(c||(c=V("LOGIN_INFO")),c?(b.session_logininfo=c,b=!0):b=!1):b=!1,b&&Uu(a,d));e=a+e;var g=void 0===g?eb:g;a:if(g=void 0===g?eb:g,e instanceof ab)g=e;else{for(a=0;a<g.length;++a)if(d=g[a],d instanceof cb&&d.og(e)){g=new ab(e);break a}g=void 0}f=f.location;g=mb(g||bb);void 0!==g&&(f.href=g)}}
;H("searchbox.yt.install",function(a,b,c,d,e,f,g){fh||(fh=new wl);fh.install(a,b,c,d,e,f,g)});
H("yt.www.masthead.searchbox.initPolymer",function(a,b,c,d){var e=gg.Ha;if(a&&e){var f=V("SBOX_SETTINGS"),g=V("SBOX_LABELS");f&&g&&(a=D("searchbox.yt.install")(a,b,c,f,g,Yu,d))&&e(a,100)}});}).call(this);
