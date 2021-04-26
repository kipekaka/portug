(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var q;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function t(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
t("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.h=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var fa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ha;
if("function"==typeof Object.setPrototypeOf)ha=Object.setPrototypeOf;else{var ia;a:{var ja={a:!0},ka={};try{ka.__proto__=ja;ia=ka.a;break a}catch(a){}ia=!1}ha=ia?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var la=ha;
function ma(a,b){a.prototype=fa(b.prototype);a.prototype.constructor=a;if(la)la(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.D=b.prototype}
function na(){this.o=!1;this.l=null;this.j=void 0;this.h=1;this.m=this.s=0;this.B=this.i=null}
function oa(a){if(a.o)throw new TypeError("Generator is already running");a.o=!0}
na.prototype.v=function(a){this.j=a};
function pa(a,b){a.i={fa:b,ga:!0};a.h=a.s||a.m}
na.prototype.return=function(a){this.i={return:a};this.h=this.m};
function x(a,b,c){a.h=c;return{value:b}}
na.prototype.u=function(a){this.h=a};
function qa(a,b,c){a.s=b;void 0!=c&&(a.m=c)}
function ra(a){a.s=0;var b=a.i.fa;a.i=null;return b}
function sa(a){a.B=[a.i];a.s=0;a.m=0}
function ta(a){var b=a.B.splice(0)[0];(b=a.i=a.i||b)?b.ga?a.h=a.s||a.m:void 0!=b.u&&a.m<b.u?(a.h=b.u,a.i=null):a.h=a.m:a.h=0}
function ua(a){this.h=new na;this.i=a}
function va(a,b){oa(a.h);var c=a.h.l;if(c)return wa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return xa(a)}
function wa(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.o=!1,e;var f=e.value}catch(g){return a.h.l=null,pa(a.h,g),xa(a)}a.h.l=null;d.call(a.h,f);return xa(a)}
function xa(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.o=!1,{value:b.value,done:!1}}catch(c){a.h.j=void 0,pa(a.h,c)}a.h.o=!1;if(a.h.i){b=a.h.i;a.h.i=null;if(b.ga)throw b.fa;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function ya(a){this.next=function(b){oa(a.h);a.h.l?b=wa(a,a.h.l.next,b,a.h.v):(a.h.v(b),b=xa(a));return b};
this.throw=function(b){oa(a.h);a.h.l?b=wa(a,a.h.l["throw"],b,a.h.v):(pa(a.h,b),b=xa(a));return b};
this.return=function(b){return va(a,b)};
this[Symbol.iterator]=function(){return this}}
function z(a,b){b=new ya(new ua(b));la&&a.prototype&&la(b,a.prototype);return b}
t("Reflect.setPrototypeOf",function(a){return a?a:la?function(b,c){try{return la(b,c),!0}catch(d){return!1}}:null});
function za(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=za(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=za(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
t("Object.setPrototypeOf",function(a){return a||la});
function A(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var Ba="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)A(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Ba});
t("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.o=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.S),reject:g(this.m)}};
b.prototype.S=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.Z(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.N(g):this.s(g)}};
b.prototype.N=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.ma(h,g):this.s(g)};
b.prototype.m=function(g){this.v(2,g)};
b.prototype.s=function(g){this.v(1,g)};
b.prototype.v=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.Y();this.B()};
b.prototype.Y=function(){var g=this;e(function(){if(g.J()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.J=function(){if(this.o)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.B=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.Z=function(g){var h=this.l();g.U(h.resolve,h.reject)};
b.prototype.ma=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,p){return"function"==typeof r?function(v){try{l(r(v))}catch(w){m(w)}}:p}
var l,m,n=new b(function(r,p){l=r;m=p});
this.U(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.U=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.o=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).U(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(v){return function(w){r[v]=w;p--;0==p&&l(r)}}
var r=[],p=0;do r.push(void 0),p++,d(k.value).U(n(r.length-1),m),k=h.next();while(!k.done)})};
return b});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==za(this,b,"includes").indexOf(b,c||0)}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)A(b,d)&&c.push([d,b[d]]);return c}});
t("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!A(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!A(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&A(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&A(k,g)&&A(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&A(k,g)&&A(k[g],this.h)?delete k[g][this.h]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return ea(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.i[l];if(m&&A(h.i,l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,A:n}}return{id:l,list:m,index:-1,A:void 0}}
function e(h){this.i={};this.h=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.i[l.id]=[]);l.A?l.A.value=k:(l.A={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.A),this.h.previous.next=l.A,this.h.previous=l.A,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.A&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.i[h.id],h.A.previous.next=h.A.next,h.A.next.previous=h.A.previous,h.A.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.i={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).A};
e.prototype.get=function(h){return(h=d(this,h).A)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
t("Set",function(a){function b(c){this.h=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
function Ca(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Ca(this,function(b,c){return[b,c]})}});
t("Array.prototype.keys",function(a){return a?a:function(){return Ca(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Ca(this,function(b,c){return c})}});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
t("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
var B=this||self;function C(a,b){a=a.split(".");b=b||B;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Da(){}
function Ea(a){var b=typeof a;b="object"!=b?b:a?Array.isArray(a)?"array":b:"null";return"array"==b||"object"==b&&"number"==typeof a.length}
function F(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Fa(a){return Object.prototype.hasOwnProperty.call(a,Ga)&&a[Ga]||(a[Ga]=++Ha)}
var Ga="closure_uid_"+(1E9*Math.random()>>>0),Ha=0;function Ia(a,b,c){return a.call.apply(a.bind,arguments)}
function Ja(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ka(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ka=Ia:Ka=Ja;return Ka.apply(null,arguments)}
function G(a,b){a=a.split(".");var c=B;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function H(a,b){function c(){}
c.prototype=b.prototype;a.D=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Qa=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function La(a){return a}
;function Ma(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Ma);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b&&(this.pa=b)}
H(Ma,Error);Ma.prototype.name="CustomError";function Na(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function Oa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Pa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},I=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Qa=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
I(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Ra(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function Sa(a,b){b=Pa(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function Ta(a){return Array.prototype.concat.apply([],arguments)}
function Ua(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Va(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ea(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Wa(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Xa(a){var b=Ya,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Za(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function $a(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=$a(a[c]);return b}
var ab="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ab.length;f++)c=ab[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var cb;var db=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},eb=/&/g,fb=/</g,gb=/>/g,hb=/"/g,ib=/'/g,jb=/\x00/g,kb=/[\x00&<>"']/;var lb;a:{var mb=B.navigator;if(mb){var nb=mb.userAgent;if(nb){lb=nb;break a}}lb=""}function K(a){return-1!=lb.indexOf(a)}
;function ob(a){this.h=pb===pb?a:""}
ob.prototype.toString=function(){return this.h.toString()};
var pb={};var qb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function rb(a){return a?decodeURI(a):a}
function sb(a){return rb(a.match(qb)[3]||null)}
function tb(a){var b=a.match(qb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function ub(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)ub(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function vb(a){var b=[],c;for(c in a)ub(c,a[c],b);return b.join("&")}
var wb=/#|$/;function xb(a,b){var c=a.search(wb);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}
;function L(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function yb(){return K("iPhone")&&!K("iPod")&&!K("iPad")}
;function zb(a){zb[" "](a);return a}
zb[" "]=Da;var Ab=K("Opera"),Bb=K("Trident")||K("MSIE"),Cb=K("Edge"),Db=K("Gecko")&&!(-1!=lb.toLowerCase().indexOf("webkit")&&!K("Edge"))&&!(K("Trident")||K("MSIE"))&&!K("Edge"),Eb=-1!=lb.toLowerCase().indexOf("webkit")&&!K("Edge");function Fb(){var a=B.document;return a?a.documentMode:void 0}
var Gb;a:{var Hb="",Ib=function(){var a=lb;if(Db)return/rv:([^\);]+)(\)|;)/.exec(a);if(Cb)return/Edge\/([\d\.]+)/.exec(a);if(Bb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Eb)return/WebKit\/(\S+)/.exec(a);if(Ab)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Ib&&(Hb=Ib?Ib[1]:"");if(Bb){var Jb=Fb();if(null!=Jb&&Jb>parseFloat(Hb)){Gb=String(Jb);break a}}Gb=Hb}var Kb=Gb,Lb;if(B.document&&Bb){var Mb=Fb();Lb=Mb?Mb:parseInt(Kb,10)||void 0}else Lb=void 0;var Nb=Lb;var Ob=yb()||K("iPod"),Pb=K("iPad"),Qb=K("Safari")&&!((K("Chrome")||K("CriOS"))&&!K("Edge")||K("Coast")||K("Opera")||K("Edge")||K("Edg/")||K("OPR")||K("Firefox")||K("FxiOS")||K("Silk")||K("Android"))&&!(yb()||K("iPad")||K("iPod"));var Rb={},Sb=null;var M=window;function Tb(a,b){this.width=a;this.height=b}
q=Tb.prototype;q.clone=function(){return new Tb(this.width,this.height)};
q.aspectRatio=function(){return this.width/this.height};
q.isEmpty=function(){return!(this.width*this.height)};
q.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
q.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
q.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ub(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Vb(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Wb(a){var b=Xb;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Yb(){var a=[];Wb(function(b){a.push(b)});
return a}
var Xb={Da:"allow-forms",Ea:"allow-modals",Fa:"allow-orientation-lock",Ga:"allow-pointer-lock",Ha:"allow-popups",Ia:"allow-popups-to-escape-sandbox",Ja:"allow-presentation",Ka:"allow-same-origin",La:"allow-scripts",Ma:"allow-top-navigation",Na:"allow-top-navigation-by-user-activation"},Zb=Oa(function(){return Yb()});
function $b(){var a=Ub(),b={};I(Zb(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;var ac=(new Date).getTime();function bc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function cc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var r=g,p=0;64>p;p+=4)r[p/4]=n[p]<<24|n[p+1]<<16|n[p+2]<<8|n[p+3];for(p=16;80>p;p++)n=r[p-3]^r[p-8]^r[p-14]^r[p-16],r[p]=(n<<1|n>>>31)&4294967295;n=e[0];var v=e[1],w=e[2],y=e[3],Y=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var J=y^v&(w^y);var D=1518500249}else J=v^w^y,D=1859775393;else 60>p?(J=v&w|y&(v|w),D=2400959708):(J=v^w^y,D=3395469782);J=((n<<5|n>>>27)&4294967295)+J+Y+D+r[p]&4294967295;Y=y;y=w;w=(v<<30|v>>>2)&4294967295;v=n;n=J}e[0]=e[0]+n&4294967295;e[1]=e[1]+v&4294967295;e[2]=
e[2]+w&4294967295;e[3]=e[3]+y&4294967295;e[4]=e[4]+Y&4294967295}
function c(n,r){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var p=[],v=0,w=n.length;v<w;++v)p.push(n.charCodeAt(v));n=p}r||(r=n.length);p=0;if(0==l)for(;p+64<r;)b(n.slice(p,p+64)),p+=64,m+=64;for(;p<r;)if(f[l++]=n[p++],m++,64==l)for(l=0,b(f);p+64<r;)b(n.slice(p,p+64)),p+=64,m+=64}
function d(){var n=[],r=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=r&255,r>>>=8;b(f);for(p=r=0;5>p;p++)for(var v=24;0<=v;v-=8)n[r++]=e[p]>>v&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,qa:function(){for(var n=d(),r="",p=0;p<n.length;p++)r+="0123456789ABCDEF".charAt(Math.floor(n[p]/16))+"0123456789ABCDEF".charAt(n[p]%16);return r}}}
;function dc(a,b,c){var d=String(B.location.href);return d&&a&&b?[b,ec(bc(d),a,c||null)].join(" "):null}
function ec(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],I(d,function(h){e.push(h)}),fc(e.join(" "));
var f=[],g=[];I(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];I(d,function(h){e.push(h)});
a=fc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function fc(a){var b=cc();b.update(a);return b.qa().toLowerCase()}
;var gc={};function hc(a){this.h=a||{cookie:""}}
q=hc.prototype;q.isEnabled=function(){if(!B.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{aa:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
q.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Va;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.aa}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.h.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
q.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=db(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
q.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{aa:0,path:b,domain:c});return d};
q.isEmpty=function(){return!this.h.cookie};
q.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=db(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var ic=new hc("undefined"==typeof document?null:document);function jc(a){return!!gc.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function kc(a,b,c,d){(a=B[a])||(a=(new hc(document)).get(b));return a?dc(a,c,d):null}
function lc(a){var b=void 0===b?!1:b;var c=bc(String(B.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=B.__SAPISID||B.__APISID||B.__3PSAPISID||B.__OVERRIDE_SID;jc(e)&&(f=f||B.__1PSAPISID);if(f)e=!0;else{var g=new hc(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID");jc(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?B.__SAPISID:B.__APISID,e||(e=new hc(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?dc(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&jc(b)&&((b=kc("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=kc("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function mc(){this.h=[];this.i=-1}
mc.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.h[a]!=b&&(this.h[a]=b,this.i=-1)};
mc.prototype.get=function(a){return!!this.h[a]};
function nc(a){-1==a.i&&(a.i=Qa(a.h,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.i}
;function oc(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
oc.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function pc(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var qc;function rc(){var a=B.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!K("Presto")&&(a=function(){var e=Ub();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ka(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!K("Trident")&&!K("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.da;c.da=null;e()}};
return function(e){d.next={da:e};d=d.next;b.port2.postMessage(0)}}return function(e){B.setTimeout(e,0)}}
;function sc(a){B.setTimeout(function(){throw a;},0)}
;function tc(){this.i=this.h=null}
tc.prototype.add=function(a,b){var c=uc.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
tc.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var uc=new oc(function(){return new vc},function(a){return a.reset()});
function vc(){this.next=this.scope=this.h=null}
vc.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
vc.prototype.reset=function(){this.next=this.scope=this.h=null};function wc(a,b){xc||yc();zc||(xc(),zc=!0);Ac.add(a,b)}
var xc;function yc(){if(B.Promise&&B.Promise.resolve){var a=B.Promise.resolve(void 0);xc=function(){a.then(Bc)}}else xc=function(){var b=Bc;
"function"!==typeof B.setImmediate||B.Window&&B.Window.prototype&&!K("Edge")&&B.Window.prototype.setImmediate==B.setImmediate?(qc||(qc=rc()),qc(b)):B.setImmediate(b)}}
var zc=!1,Ac=new tc;function Bc(){for(var a;a=Ac.remove();){try{a.h.call(a.scope)}catch(b){sc(b)}pc(uc,a)}zc=!1}
;function Cc(){this.i=-1}
;function Dc(){this.i=64;this.h=[];this.s=[];this.o=[];this.l=[];this.l[0]=128;for(var a=1;a<this.i;++a)this.l[a]=0;this.m=this.j=0;this.reset()}
H(Dc,Cc);Dc.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.m=this.j=0};
function Ec(a,b,c){c||(c=0);var d=a.o;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Dc.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.i,d=0,e=this.s,f=this.j;d<b;){if(0==f)for(;d<=c;)Ec(this,a,d),d+=this.i;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.i){Ec(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.i){Ec(this,e);f=0;break}}this.j=f;this.m+=b}};
Dc.prototype.digest=function(){var a=[],b=8*this.m;56>this.j?this.update(this.l,56-this.j):this.update(this.l,this.i-(this.j-56));for(var c=this.i-1;56<=c;c--)this.s[c]=b&255,b/=256;Ec(this,this.s);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Fc(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||B.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Gc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Hc[c])c=Hc[c];else{c=String(c);if(!Hc[c]){var f=/function\s+([^\(]+)/m.exec(c);Hc[c]=f?f[1]:"[Anonymous]"}c=Hc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Gc(a,b){b||(b={});b[Ic(a)]=!0;var c=a.stack||"";(a=a.pa)&&!b[Ic(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Gc(a,b));return c}
function Ic(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Hc={};function Jc(){this.m=this.m;this.s=this.s}
Jc.prototype.m=!1;Jc.prototype.dispose=function(){this.m||(this.m=!0,this.O())};
Jc.prototype.O=function(){if(this.s)for(;this.s.length;)this.s.shift()()};var Kc="StopIteration"in B?B.StopIteration:{message:"StopIteration",stack:""};function Lc(){}
Lc.prototype.next=function(){throw Kc;};
Lc.prototype.G=function(){return this};
function Mc(a){if(a instanceof Lc)return a;if("function"==typeof a.G)return a.G(!1);if(Ea(a)){var b=0,c=new Lc;c.next=function(){for(;;){if(b>=a.length)throw Kc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Nc(a,b){if(Ea(a))try{I(a,b,void 0)}catch(c){if(c!==Kc)throw c;}else{a=Mc(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Kc)throw c;}}}
function Oc(a){if(Ea(a))return Ua(a);a=Mc(a);var b=[];Nc(a,function(c){b.push(c)});
return b}
;function Pc(a,b){this.i={};this.h=[];this.l=this.j=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Pc)for(c=Qc(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Qc(a){Rc(a);return a.h.concat()}
q=Pc.prototype;q.equals=function(a,b){if(this===a)return!0;if(this.j!=a.j)return!1;b=b||Sc;Rc(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Sc(a,b){return a===b}
q.isEmpty=function(){return 0==this.j};
q.clear=function(){this.i={};this.l=this.j=this.h.length=0};
q.remove=function(a){return Object.prototype.hasOwnProperty.call(this.i,a)?(delete this.i[a],this.j--,this.l++,this.h.length>2*this.j&&Rc(this),!0):!1};
function Rc(a){if(a.j!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Object.prototype.hasOwnProperty.call(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.j!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Object.prototype.hasOwnProperty.call(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
q.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.i,a)?this.i[a]:b};
q.set=function(a,b){Object.prototype.hasOwnProperty.call(this.i,a)||(this.j++,this.h.push(a),this.l++);this.i[a]=b};
q.forEach=function(a,b){for(var c=Qc(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
q.clone=function(){return new Pc(this)};
q.G=function(a){Rc(this);var b=0,c=this.l,d=this,e=new Lc;e.next=function(){if(c!=d.l)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)throw Kc;var f=d.h[b++];return a?f:d.i[f]};
return e};var Tc=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{B.addEventListener("test",Da,b),B.removeEventListener("test",Da,b)}catch(c){}return a}();function Uc(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Uc.prototype.stopPropagation=function(){this.j=!0};
Uc.prototype.preventDefault=function(){this.defaultPrevented=!0};function Vc(a,b){Uc.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
H(Vc,Uc);var Wc={2:"touch",3:"pen",4:"mouse"};
Vc.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Db){a:{try{zb(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Wc[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&Vc.D.preventDefault.call(this)};
Vc.prototype.stopPropagation=function(){Vc.D.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Vc.prototype.preventDefault=function(){Vc.D.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Xc="closure_listenable_"+(1E6*Math.random()|0);var Yc=0;function Zc(a,b,c,d,e){this.listener=a;this.h=null;this.src=b;this.type=c;this.capture=!!d;this.W=e;this.key=++Yc;this.P=this.T=!1}
function $c(a){a.P=!0;a.listener=null;a.h=null;a.src=null;a.W=null}
;function ad(a){this.src=a;this.listeners={};this.h=0}
ad.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=bd(a,b,d,e);-1<g?(b=a[g],c||(b.T=!1)):(b=new Zc(b,this.src,f,!!d,e),b.T=c,a.push(b));return b};
ad.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=bd(e,b,c,d);return-1<b?($c(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function cd(a,b){var c=b.type;c in a.listeners&&Sa(a.listeners[c],b)&&($c(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function bd(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.P&&f.listener==b&&f.capture==!!c&&f.W==d)return e}return-1}
;var dd="closure_lm_"+(1E6*Math.random()|0),ed={},fd=0;function gd(a,b,c,d,e){if(d&&d.once)hd(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)gd(a,b[f],c,d,e);else c=id(c),a&&a[Xc]?jd(a,b,c,F(d)?!!d.capture:!!d,e):kd(a,b,c,!1,d,e)}
function kd(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=F(e)?!!e.capture:!!e,h=ld(a);h||(a[dd]=h=new ad(a));c=h.add(b,c,d,g,f);if(!c.h){d=md();c.h=d;d.src=a;d.listener=c;if(a.addEventListener)Tc||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(nd(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");fd++}}
function md(){function a(c){return b.call(a.src,a.listener,c)}
var b=od;return a}
function hd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)hd(a,b[f],c,d,e);else c=id(c),a&&a[Xc]?a.i.add(String(b),c,!0,F(d)?!!d.capture:!!d,e):kd(a,b,c,!0,d,e)}
function pd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)pd(a,b[f],c,d,e);else(d=F(d)?!!d.capture:!!d,c=id(c),a&&a[Xc])?a.i.remove(String(b),c,d,e):a&&(a=ld(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=bd(b,c,d,e)),(c=-1<a?b[a]:null)&&qd(c))}
function qd(a){if("number"!==typeof a&&a&&!a.P){var b=a.src;if(b&&b[Xc])cd(b.i,a);else{var c=a.type,d=a.h;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(nd(c),d):b.addListener&&b.removeListener&&b.removeListener(d);fd--;(c=ld(b))?(cd(c,a),0==c.h&&(c.src=null,b[dd]=null)):$c(a)}}}
function nd(a){return a in ed?ed[a]:ed[a]="on"+a}
function od(a,b){if(a.P)a=!0;else{b=new Vc(b,this);var c=a.listener,d=a.W||a.src;a.T&&qd(a);a=c.call(d,b)}return a}
function ld(a){a=a[dd];return a instanceof ad?a:null}
var rd="__closure_events_fn_"+(1E9*Math.random()>>>0);function id(a){if("function"===typeof a)return a;a[rd]||(a[rd]=function(b){return a.handleEvent(b)});
return a[rd]}
;function N(){Jc.call(this);this.i=new ad(this);this.Z=this;this.J=null}
H(N,Jc);N.prototype[Xc]=!0;N.prototype.addEventListener=function(a,b,c,d){gd(this,a,b,c,d)};
N.prototype.removeEventListener=function(a,b,c,d){pd(this,a,b,c,d)};
function O(a,b){var c=a.J;if(c){var d=[];for(var e=1;c;c=c.J)d.push(c),++e}a=a.Z;c=b.type||b;"string"===typeof b?b=new Uc(b,a):b instanceof Uc?b.target=b.target||a:(e=b,b=new Uc(c,a),bb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=sd(g,c,!0,b)&&e}b.j||(g=b.h=a,e=sd(g,c,!0,b)&&e,b.j||(e=sd(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=sd(g,c,!1,b)&&e}
N.prototype.O=function(){N.D.O.call(this);if(this.i){var a=this.i,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,$c(d[e]);delete a.listeners[c];a.h--}}this.J=null};
function jd(a,b,c,d,e){a.i.add(String(b),c,!1,d,e)}
function sd(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.P&&g.capture==c){var h=g.listener,k=g.W||g.src;g.T&&cd(a.i,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;var td=B.JSON.stringify;function ud(a){this.h=0;this.o=void 0;this.l=this.i=this.j=null;this.m=this.s=!1;if(a!=Da)try{var b=this;a.call(void 0,function(c){vd(b,2,c)},function(c){vd(b,3,c)})}catch(c){vd(this,3,c)}}
function wd(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
wd.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var xd=new oc(function(){return new wd},function(a){a.reset()});
function yd(a,b,c){var d=xd.get();d.i=a;d.onRejected=b;d.context=c;return d}
ud.prototype.then=function(a,b,c){return zd(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
ud.prototype.$goog_Thenable=!0;ud.prototype.cancel=function(a){if(0==this.h){var b=new Ad(a);wc(function(){Bd(this,b)},this)}};
function Bd(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Bd(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Cd(c),Dd(c,e,3,b)))}a.j=null}else vd(a,3,b)}
function Ed(a,b){a.i||2!=a.h&&3!=a.h||Fd(a);a.l?a.l.next=b:a.i=b;a.l=b}
function zd(a,b,c,d){var e=yd(null,null,null);e.h=new ud(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Ad?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;Ed(a,e);return e.h}
ud.prototype.B=function(a){this.h=0;vd(this,2,a)};
ud.prototype.J=function(a){this.h=0;vd(this,3,a)};
function vd(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.B,f=a.J;if(d instanceof ud){Ed(d,yd(e||Da,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(F(d))try{var k=d.then;if("function"===typeof k){Gd(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.o=c,a.h=b,a.j=null,Fd(a),3!=b||c instanceof Ad||Hd(a,c))}}
function Gd(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Fd(a){a.s||(a.s=!0,wc(a.v,a))}
function Cd(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
ud.prototype.v=function(){for(var a;a=Cd(this);)Dd(this,a,this.h,this.o);this.s=!1};
function Dd(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,Id(b,c,d);else try{b.j?b.i.call(b.context):Id(b,c,d)}catch(e){Jd.call(null,e)}pc(xd,b)}
function Id(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Hd(a,b){a.m=!0;wc(function(){a.m&&Jd.call(null,b)})}
var Jd=sc;function Ad(a){Ma.call(this,a)}
H(Ad,Ma);Ad.prototype.name="cancel";function P(a){Jc.call(this);this.o=1;this.j=[];this.l=0;this.h=[];this.i={};this.v=!!a}
H(P,Jc);q=P.prototype;q.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.o;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.o=e+3;d.push(e);return e};
function Kd(a,b,c){var d=Ld;if(a=d.i[a]){var e=d.h;(a=Ra(a,function(f){return e[f+1]==b&&e[f+2]==c}))&&d.R(a)}}
q.R=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.l?(this.j.push(a),this.h[a+1]=Da):(c&&Sa(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
q.M=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.v)for(e=0;e<c.length;e++){var g=c[e];Md(this.h[g+1],this.h[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.R(c)}}return 0!=e}return!1};
function Md(a,b,c){wc(function(){a.apply(b,c)})}
q.clear=function(a){if(a){var b=this.i[a];b&&(I(b,this.R,this),delete this.i[a])}else this.h.length=0,this.i={}};
q.O=function(){P.D.O.call(this);this.clear();this.j.length=0};function Nd(a){this.h=a}
Nd.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,td(b))};
Nd.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Nd.prototype.remove=function(a){this.h.remove(a)};function Od(a){this.h=a}
H(Od,Nd);function Pd(a){this.data=a}
function Qd(a){return void 0===a||a instanceof Pd?a:new Pd(a)}
Od.prototype.set=function(a,b){Od.D.set.call(this,a,Qd(b))};
Od.prototype.i=function(a){a=Od.D.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Od.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Rd(a){this.h=a}
H(Rd,Od);Rd.prototype.set=function(a,b,c){if(b=Qd(b)){if(c){if(c<Date.now()){Rd.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Rd.D.set.call(this,a,b)};
Rd.prototype.i=function(a){var b=Rd.D.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Rd.prototype.remove.call(this,a);else return b}};function Sd(){}
;function Td(){}
H(Td,Sd);Td.prototype.clear=function(){var a=Oc(this.G(!0)),b=this;I(a,function(c){b.remove(c)})};function Ud(a){this.h=a}
H(Ud,Td);q=Ud.prototype;q.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
q.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
q.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
q.remove=function(a){this.h.removeItem(a)};
q.G=function(a){var b=0,c=this.h,d=new Lc;d.next=function(){if(b>=c.length)throw Kc;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
q.clear=function(){this.h.clear()};
q.key=function(a){return this.h.key(a)};function Vd(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
H(Vd,Ud);function Wd(a,b){this.i=a;this.h=null;if(Bb&&!(9<=Number(Nb))){Xd||(Xd=new Pc);this.h=Xd.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Xd.set(a,this.h));try{this.h.load(this.i)}catch(c){this.h=null}}}
H(Wd,Td);var Yd={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Xd=null;function Zd(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Yd[b]})}
q=Wd.prototype;q.isAvailable=function(){return!!this.h};
q.set=function(a,b){this.h.setAttribute(Zd(a),b);$d(this)};
q.get=function(a){a=this.h.getAttribute(Zd(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
q.remove=function(a){this.h.removeAttribute(Zd(a));$d(this)};
q.G=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Lc;d.next=function(){if(b>=c.length)throw Kc;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
q.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);$d(this)};
function $d(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function ae(a,b){this.i=a;this.h=b+"::"}
H(ae,Td);ae.prototype.set=function(a,b){this.i.set(this.h+a,b)};
ae.prototype.get=function(a){return this.i.get(this.h+a)};
ae.prototype.remove=function(a){this.i.remove(this.h+a)};
ae.prototype.G=function(a){var b=this.i.G(!0),c=this,d=new Lc;d.next=function(){for(var e=b.next();e.substr(0,c.h.length)!=c.h;)e=b.next();return a?e.substr(c.h.length):c.i.get(e)};
return d};var be=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};G("yt.config_",be);function ce(a){var b=arguments;1<b.length?be[b[0]]=b[1]:1===b.length&&Object.assign(be,b[0])}
function Q(a,b){return a in be?be[a]:b}
;var de=[];function ee(a){de.forEach(function(b){return b(a)})}
function fe(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){ge(b)}}:a}
function ge(a){var b=C("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=Q("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),ce("ERRORS",b));ee(a)}
function he(a){var b=C("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=Q("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),ce("ERRORS",b))}
;var ie=0;G("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++ie});var je={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function ke(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in je||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
ke.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
ke.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
ke.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Ya=B.ytEventsEventsListeners||{};G("ytEventsEventsListeners",Ya);var le=B.ytEventsEventsCounter||{count:0};G("ytEventsEventsCounter",le);
function me(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Xa(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=F(e[4])&&F(d)&&Za(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function ne(a){a&&("string"==typeof a&&(a=[a]),I(a,function(b){if(b in Ya){var c=Ya[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?oe()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Ya[b]}}))}
var oe=Oa(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function pe(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=me(a,b,c,d);if(!e){e=++le.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new ke(h);if(!Vb(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new ke(h);
h.currentTarget=a;return c.call(a,h)};
g=fe(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),oe()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Ya[e]=[a,b,c,g,d]}}}
;function qe(a,b){"function"===typeof a&&(a=fe(a));return window.setTimeout(a,b)}
function re(a){"function"===typeof a&&(a=fe(a));return window.setInterval(a,250)}
;var se=/^[\w.]*$/,te={q:!0,search_query:!0};function ue(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=ve(f[0]||""),h=ve(f[1]||"");g in c?Array.isArray(c[g])?Va(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(n){var k=n,l=f[0],m=String(ue);k.args=[{key:l,value:f[1],query:a,method:we==m?"unchanged":m}];te.hasOwnProperty(l)||he(k)}}return c}
var we=String(ue);function xe(a){var b=[];Wa(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];I(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function ye(a){"?"==a.charAt(0)&&(a=a.substr(1));return ue(a,"&")}
function ze(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=ye(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=vb(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.substr(0,f),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function Ae(a){if(!b)var b=window.location.href;var c=a.match(qb)[1]||null,d=sb(a);c&&d?(a=a.match(qb),b=b.match(qb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?sb(b)==d&&(Number(b.match(qb)[4]||null)||null)==(Number(a.match(qb)[4]||null)||null):!0;return a}
function ve(a){return a&&a.match(se)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function R(a){a=Be(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Ce(a,b){a=Be(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Be(a){var b=Q("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:Q("EXPERIMENT_FLAGS",{})[a]}
;function De(){}
function Ee(a,b){return Fe(a,0,b)}
function Ge(a,b){return Fe(a,1,b)}
function He(a,b){Fe(a,2,b)}
;function Ie(){De.apply(this,arguments)}
ma(Ie,De);function Fe(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):qe(a,c||0)}
function Je(a){if(void 0===a||!Number.isNaN(Number(a))){var b=C("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}}
Ie.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};Ie.h||(Ie.h=new Ie);function Ke(a){var b=Le;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=ac;e.flash="0";a:{try{var f=b.h.top.location.href}catch(E){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?M:g;try{var h=g.history.length}catch(E){h=0}e.u_his=h;e.u_java=!!M.navigator&&"unknown"!==typeof M.navigator.javaEnabled&&!!M.navigator.javaEnabled&&M.navigator.javaEnabled();M.screen&&(e.u_h=M.screen.height,e.u_w=M.screen.width,
e.u_ah=M.screen.availHeight,e.u_aw=M.screen.availWidth,e.u_cd=M.screen.colorDepth);M.navigator&&M.navigator.plugins&&(e.u_nplug=M.navigator.plugins.length);M.navigator&&M.navigator.mimeTypes&&(e.u_nmime=M.navigator.mimeTypes.length);h=b.h;try{var k=h.screenX;var l=h.screenY}catch(E){}try{var m=h.outerWidth;var n=h.outerHeight}catch(E){}try{var r=h.innerWidth;var p=h.innerHeight}catch(E){}try{var v=h.screenLeft;var w=h.screenTop}catch(E){}try{r=h.innerWidth,p=h.innerHeight}catch(E){}try{var y=h.screen.availWidth;
var Y=h.screen.availTop}catch(E){}k=[v,w,k,l,y,Y,m,n,r,p];l=b.h.top;try{var J=(l||window).document,D="CSS1Compat"==J.compatMode?J.documentElement:J.body;var T=(new Tb(D.clientWidth,D.clientHeight)).round()}catch(E){T=new Tb(-12245933,-12245933)}J=T;T={};D=new mc;B.SVGElement&&B.document.createElementNS&&D.set(0);l=$b();l["allow-top-navigation-by-user-activation"]&&D.set(1);l["allow-popups-to-escape-sandbox"]&&D.set(2);B.crypto&&B.crypto.subtle&&D.set(3);B.TextDecoder&&B.TextEncoder&&D.set(4);D=nc(D);
T.bc=D;T.bih=J.height;T.biw=J.width;T.brdim=k.join();b=b.i;b=(T.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,T.wgl=!!M.WebGLRenderingContext,T);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Le=new function(){var a=window.document;this.h=window;this.i=a};
G("yt.ads_.signals_.getAdSignalsString",function(a){return xe(Ke(a))});var Me="XMLHttpRequest"in B?function(){return new XMLHttpRequest}:null;
function Ne(){if(!Me)return null;var a=Me();return"open"in a?a:null}
;var Oe={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},
Pe="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url".split(" "),Qe=!1;
function Re(a,b){b=void 0===b?{}:b;var c=Ae(a),d=R("web_ajax_ignore_global_headers_if_set"),e;for(e in Oe){var f=Q(Oe[e]);!f||!c&&sb(a)||d&&void 0!==b[e]||(b[e]=f)}if(c||!sb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!sb(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!sb(a))b["X-YouTube-Ad-Signals"]=xe(Ke(void 0));return b}
function Se(a){var b=window.location.search,c=sb(a);R("debug_handle_relative_url_for_query_forward_killswitch")||c||!Ae(a)||(c=document.location.hostname);var d=rb(a.match(qb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=ye(b),f={};I(Pe,function(g){e[g]&&(f[g]=e[g])});
return ze(a,f||{},!1)}
function Te(a,b){var c=b.format||"JSON";a=Ue(a,b);var d=Ve(a,b),e=!1,f=We(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,n=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||n||r)m=Xe(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=
!!m}m=m||{};n=b.context||B;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=qe(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||B,f))},b.timeout)}}
function Ue(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=Q("XSRF_FIELD_NAME",void 0);if(b=b.urlParams)b[c]&&delete b[c],a=ze(a,b||{},!0);return a}
function Ve(a,b){var c=Q("XSRF_FIELD_NAME",void 0),d=Q("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=Q("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||sb(a)&&!b.withCredentials&&sb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=ye(e),bb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):vb(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=
!1;break a}f=!0}a=!f}!Qe&&a&&"POST"!=b.method&&(Qe=!0,ge(Error("AJAX request with postData should use POST")));return e}
function Xe(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,he(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Ye(a):null)e={},I(a.getElementsByTagName("*"),function(g){e[g.tagName]=Ze(g)})}d&&$e(e);
return e}
function $e(a){if(F(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];if(void 0===cb){var e=null;var f=B.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:La,createScript:La,createScriptURL:La})}catch(g){B.console&&B.console.error(g.message)}cb=e}else cb=e}d=(e=cb)?e.createHTML(d):d;a[c]=new ob(d)}else $e(a[b])}}
function Ye(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Ze(a){var b="";I(a.childNodes,function(c){b+=c.nodeValue});
return b}
function We(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&fe(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Ne();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;R("debug_forward_web_query_parameters")&&(a=Se(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Re(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var af=Ob||Pb;var bf={},cf=0;function df(a,b,c){c=void 0===c?"":c;if(ef(a,c))b&&b();else if(c=void 0===c?"":c,a)if(c)We(a,b,"POST",c,void 0);else if(Q("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))We(a,b,"GET","",void 0);else{b:{try{var d=new Na({url:a});if(d.j&&d.i||d.l){var e=rb(a.match(qb)[5]||null);var f=!(!e||!e.endsWith("/aclk")||"1"!==xb(a,"ri"));break b}}catch(g){}f=!1}f?ef(a)?(b&&b(),f=!0):f=!1:f=!1;f||ff(a,b)}}
function ef(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function ff(a,b){var c=new Image,d=""+cf++;bf[d]=c;c.onload=c.onerror=function(){b&&bf[d]&&b();delete bf[d]};
c.src=a}
;var gf=B.ytPubsubPubsubInstance||new P,hf=B.ytPubsubPubsubSubscribedKeys||{},jf=B.ytPubsubPubsubTopicToKeys||{},kf=B.ytPubsubPubsubIsSynchronous||{};P.prototype.subscribe=P.prototype.subscribe;P.prototype.unsubscribeByKey=P.prototype.R;P.prototype.publish=P.prototype.M;P.prototype.clear=P.prototype.clear;G("ytPubsubPubsubInstance",gf);G("ytPubsubPubsubTopicToKeys",jf);G("ytPubsubPubsubIsSynchronous",kf);G("ytPubsubPubsubSubscribedKeys",hf);var lf=window,S=lf.ytcsi&&lf.ytcsi.now?lf.ytcsi.now:lf.performance&&lf.performance.timing&&lf.performance.now&&lf.performance.timing.navigationStart?function(){return lf.performance.timing.navigationStart+lf.performance.now()}:function(){return(new Date).getTime()};var mf=Ce("initial_gel_batch_timeout",1E3),nf=Math.pow(2,16)-1,of=null,pf=0,qf=void 0,rf=0,sf=0,tf=0,uf=!0,vf=B.ytLoggingTransportGELQueue_||new Map;G("ytLoggingTransportGELQueue_",vf);var wf=B.ytLoggingTransportTokensToCttTargetIds_||{};G("ytLoggingTransportTokensToCttTargetIds_",wf);
function xf(a,b){if("log_event"===a.endpoint){var c="";a.V?c="visitorOnlyApprovedKey":a.F&&(wf[a.F.token]=yf(a.F),c=a.F.token);var d=vf.get(c)||[];vf.set(c,d);d.push(a.payload);b&&(qf=new b);a=Ce("tvhtml5_logging_max_batch")||Ce("web_logging_max_batch")||100;b=S();d.length>=a?zf({writeThenSend:!0}):10<=b-tf&&(Af(),tf=b)}}
function Bf(a,b){if("log_event"===a.endpoint){var c="";a.V?c="visitorOnlyApprovedKey":a.F&&(wf[a.F.token]=yf(a.F),c=a.F.token);var d=new Map;d.set(c,[a.payload]);b&&(qf=new b);return new ud(function(e){qf&&qf.isReady()?Cf(d,e,{bypassNetworkless:!0}):e()})}}
function zf(a){a=void 0===a?{}:a;new ud(function(b){window.clearTimeout(rf);window.clearTimeout(sf);sf=0;qf&&qf.isReady()?(Cf(vf,b,a),vf.clear()):(Af(),b())})}
function Af(){R("web_gel_timeout_cap")&&!sf&&(sf=qe(function(){zf({writeThenSend:!0})},6E4));
window.clearTimeout(rf);var a=Q("LOGGING_BATCH_TIMEOUT",Ce("web_gel_debounce_ms",1E4));R("shorten_initial_gel_batch_timeout")&&uf&&(a=mf);rf=qe(function(){zf({writeThenSend:!0})},a)}
function Cf(a,b,c){var d=qf;c=void 0===c?{}:c;var e=Math.round(S()),f=a.size;a=u(a);for(var g=a.next();!g.done;g=a.next()){var h=u(g.value);g=h.next().value;var k=h.next().value;h=$a({context:Df(d.h||Ef())});h.events=k;(k=wf[g])&&Ff(h,g,k);delete wf[g];g="visitorOnlyApprovedKey"===g;Gf(h,e,g);R("send_beacon_before_gel")&&window.navigator&&window.navigator.sendBeacon&&!c.writeThenSend&&df("/generate_204");Hf(d,"log_event",h,{retry:!0,onSuccess:function(){f--;f||b();pf=Math.round(S()-e)},
onError:function(){f--;f||b()},
ja:c,V:g});uf=!1}}
function Gf(a,b,c){a.requestTimeMs=String(b);R("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=Q("EVENT_ID",void 0))&&((c=Q("BATCH_CLIENT_COUNTER",void 0)||0)||(c=Math.floor(Math.random()*nf/2)),c++,c>nf&&(c=1),ce("BATCH_CLIENT_COUNTER",c),b={serializedEventId:b,clientCounter:String(c)},a.serializedClientEventId=b,of&&pf&&R("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:of,roundtripMs:String(pf)}),of=b,pf=0)}
function Ff(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function yf(a){var b={};a.videoId?b.videoId=a.videoId:a.playlistId&&(b.playlistId=a.playlistId);return b}
;var If=B.ytLoggingGelSequenceIdObj_||{};G("ytLoggingGelSequenceIdObj_",If);function Jf(){if(!B.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return B.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":B.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":B.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":B.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;G("ytglobal.prefsUserPrefsPrefs_",C("ytglobal.prefsUserPrefsPrefs_")||{});var Kf={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Lf={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Mf(){var a=B.navigator;return a?a.connection:void 0}
;function Nf(){return"INNERTUBE_API_KEY"in be&&"INNERTUBE_API_VERSION"in be}
function Ef(){return{innertubeApiKey:Q("INNERTUBE_API_KEY",void 0),innertubeApiVersion:Q("INNERTUBE_API_VERSION",void 0),sa:Q("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),ta:Q("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:Q("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),wa:Q("INNERTUBE_CONTEXT_HL",void 0),va:Q("INNERTUBE_CONTEXT_GL",void 0),xa:Q("INNERTUBE_HOST_OVERRIDE",void 0)||"",za:!!Q("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),ya:!!Q("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:Q("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function Df(a){var b={client:{hl:a.wa,gl:a.va,clientName:a.ta,clientVersion:a.innertubeContextClientVersion,configInfo:a.sa}},c=B.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=Q("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=Q("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=Q("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});
f=b.client.clientName;if("WEB"===f||"MWEB"===f||1===f||2===f){if(!R("web_include_display_mode_killswitch")){var g;b.client.mainAppWebInfo=null!=(g=b.client.mainAppWebInfo)?g:{};b.client.mainAppWebInfo.webDisplayMode=Jf()}}else if(g=b.client.clientName,("WEB_REMIX"===g||76===g)&&!R("music_web_display_mode_killswitch")){var h;b.client.ia=null!=(h=b.client.ia)?h:{};b.client.ia.webDisplayMode=Jf()}a.appInstallData&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);
Q("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(b.user={onBehalfOfUser:Q("DELEGATED_SESSION_ID")});a:{if(h=Mf()){a=Kf[h.type||"unknown"]||"CONN_UNKNOWN";h=Kf[h.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===a&&"CONN_UNKNOWN"!==h&&(a=h);if("CONN_UNKNOWN"!==a)break a;if("CONN_UNKNOWN"!==h){a=h;break a}}a=void 0}a&&(b.client.connectionType=a);R("web_log_effective_connection_type")&&(a=Mf(),a=null!==a&&void 0!==a&&a.effectiveType?Lf.hasOwnProperty(a.effectiveType)?Lf[a.effectiveType]:
"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,a&&(b.client.effectiveConnectionType=a));a=Object;h=a.assign;g=b.client;f={};e=u(Object.entries(ye(Q("DEVICE",""))));for(c=e.next();!c.done;c=e.next())d=u(c.value),c=d.next().value,d=d.next().value,"cbrand"===c?f.deviceMake=d:"cmodel"===c?f.deviceModel=d:"cbr"===c?f.browserName=d:"cbrver"===c?f.browserVersion=d:"cos"===c?f.osName=d:"cosver"===c?f.osVersion=d:"cplatform"===c&&(f.platform=d);b.client=h.call(a,g,f);return b}
function Of(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||Q("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Pa||Q("AUTHORIZATION"))||(a?b="Bearer "+C("gapi.auth.getToken")().Oa:b=lc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=Q("SESSION_INDEX",0),R("pageid_as_header_web")&&(d["X-Goog-PageId"]=Q("DELEGATED_SESSION_ID")));return d}
;function Pf(a){a=Object.assign({},a);delete a.Authorization;var b=lc();if(b){var c=new Dc;c.update(Q("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Ea(b);void 0===c&&(c=0);if(!Sb){Sb={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));Rb[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===Sb[k]&&(Sb[k]=h)}}}c=Rb[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],m=(f=e+1<b.length)?
b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|m>>4;m=(m&15)<<2|k>>6;k&=63;g||(k=64,f||(m=64));d.push(c[h],c[l],c[m]||"",c[k]||"")}a.hash=d.join("")}return a}
;function Qf(a){var b=new Vd;(b=b.isAvailable()?a?new ae(b,a):b:null)||(a=new Wd(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Rd(a):null;this.i=document.domain||window.location.hostname}
Qf.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(td(b))}catch(f){return}else e=escape(b);b=this.i;ic.set(""+a,e,{aa:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
Qf.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=ic.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Qf.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;ic.remove(""+a,"/",void 0===b?"youtube.com":b)};var Rf;function Sf(){Rf||(Rf=new Qf("yt.innertube"));return Rf}
function Tf(a,b,c,d){if(d)return null;d=Sf().get("nextId",!0)||1;var e=Sf().get("requests",!0)||{};e[d]={method:a,request:b,authState:Pf(c),requestTime:Math.round(S())};Sf().set("nextId",d+1,86400,!0);Sf().set("requests",e,86400,!0);return d}
function Uf(a){var b=Sf().get("requests",!0)||{};delete b[a];Sf().set("requests",b,86400,!0)}
function Vf(a){var b=Sf().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(S())-d.requestTime)){var e=d.authState,f=Pf(Of(!1));Za(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(S())),Hf(a,d.method,e,{}));delete b[c]}}Sf().set("requests",b,86400,!0)}}
;var Wf=C("ytPubsub2Pubsub2Instance")||new P;P.prototype.subscribe=P.prototype.subscribe;P.prototype.unsubscribeByKey=P.prototype.R;P.prototype.publish=P.prototype.M;P.prototype.clear=P.prototype.clear;G("ytPubsub2Pubsub2Instance",Wf);G("ytPubsub2Pubsub2SubscribedKeys",C("ytPubsub2Pubsub2SubscribedKeys")||{});G("ytPubsub2Pubsub2TopicToKeys",C("ytPubsub2Pubsub2TopicToKeys")||{});G("ytPubsub2Pubsub2IsAsync",C("ytPubsub2Pubsub2IsAsync")||{});G("ytPubsub2Pubsub2SkipSubKey",null);var Xf=[],Yf=!1;function Zf(a,b){Yf||(Xf.push({type:"EVENT",eventType:a,payload:b}),10<Xf.length&&Xf.shift())}
;var $f=function(){var a;return function(){a||(a=new Qf("ytidb"));return a}}();
function ag(){var a;return null===(a=$f())||void 0===a?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
function bg(a,b,c){this.h=void 0===a?!1:a;this.failureMessage=b;this.j=c;(a=ag())||(a={createdTimestampMs:S(),isSupported:this.h,resultCount:0,hasSucceededOnce:this.h});this.i=a;var d;if(cg()){var e;this.i.isSupported===this.h?e=Object.assign(Object.assign({},this.i),{resultCount:this.i.resultCount+1}):e={isSupported:this.h,resultCount:1,createdTimestampMs:S(),hasSucceededOnce:this.i.hasSucceededOnce||this.h};null===(d=$f())||void 0===d?void 0:d.set("LAST_RESULT_ENTRY_KEY",e,2592E3,!0)}}
function dg(a,b){return new bg(!1,a instanceof Error?a.message:"",void 0===b?!1:b)}
bg.prototype.isSupported=function(){return this.h};
bg.prototype.log=function(){cg()&&Zf("IS_SUPPORTED_COMPLETED",{isSupported:this.h,lastIsSupported:this.i.isSupported,failureMessage:this.failureMessage,sameResultCount:this.i.resultCount,sameResultDurationMs:Math.floor(S()-this.i.createdTimestampMs),canDetectDataOnFailure:this.j})};
function cg(){var a;return!!(R("ytidb_analyze_is_supported")&&(null===(a=$f())||void 0===a?0:a.h))}
;function eg(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);d=[];var e=d.concat;if(!(c instanceof Array)){c=u(c);for(var f,g=[];!(f=c.next()).done;)g.push(f.value);c=g}this.args=e.call(d,c)}
ma(eg,Error);function fg(a){return a.substr(0,a.indexOf(":"))||a}
;var gg={},hg=(gg.AUTH_INVALID="No user identifier specified.",gg.EXPLICIT_ABORT="Transaction was explicitly aborted.",gg.IDB_NOT_SUPPORTED="IndexedDB is not supported.",gg.MISSING_OBJECT_STORE="Object store not created.",gg.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",gg.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",gg.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",gg.EXECUTE_TRANSACTION_ON_CLOSED_DB=
"Can't start a transaction on a closed database",gg),ig={},jg=(ig.AUTH_INVALID="ERROR",ig.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",ig.EXPLICIT_ABORT="IGNORED",ig.IDB_NOT_SUPPORTED="ERROR",ig.MISSING_OBJECT_STORE="ERROR",ig.QUOTA_EXCEEDED="WARNING",ig.QUOTA_MAYBE_EXCEEDED="WARNING",ig.UNKNOWN_ABORT="WARNING",ig),kg={},lg=(kg.AUTH_INVALID=!1,kg.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,kg.EXPLICIT_ABORT=!1,kg.IDB_NOT_SUPPORTED=!1,kg.MISSING_OBJECT_STORE=!1,kg.QUOTA_EXCEEDED=!1,kg.QUOTA_MAYBE_EXCEEDED=!0,
kg.UNKNOWN_ABORT=!0,kg);function U(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?hg[a]:c;d=void 0===d?jg[a]:d;e=void 0===e?lg[a]:e;eg.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,U.prototype)}
ma(U,eg);function mg(a){U.call(this,"MISSING_OBJECT_STORE",{Ta:a},hg.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,mg.prototype)}
ma(mg,U);var ng=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function og(a,b,c){b=fg(b);var d=a instanceof Error?a:Error("Unexpected error: "+a);if(d instanceof U)return d;if("QuotaExceededError"===d.name)return new U("QUOTA_EXCEEDED",{objectStoreNames:c,dbName:b});if(Qb&&"UnknownError"===d.name)return new U("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:c,dbName:b});if("InvalidStateError"===d.name&&ng.some(function(e){return d.message.includes(e)}))return new U("EXECUTE_TRANSACTION_ON_CLOSED_DB",{objectStoreNames:c,
dbName:b});if("AbortError"===d.name)return new U("UNKNOWN_ABORT",{objectStoreNames:c,dbName:b},d.message);d.args=[{name:"IdbError",Ua:d.name,dbName:b,objectStoreNames:c}];d.level="WARNING";return d}
;function pg(a){if(!a)throw Error();throw a;}
function qg(a){return a}
function V(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.i=a;this.state={status:"PENDING"};this.h=[];this.onRejected=[];try{this.i(c,b)}catch(e){b(e)}}
V.all=function(a){return new V(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={L:0};f.L<a.length;f={L:f.L},++f.L)rg(V.resolve(a[f.L]).then(function(g){return function(h){d[g.L]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})})};
V.resolve=function(a){return new V(function(b,c){a instanceof V?a.then(b,c):b(a)})};
V.reject=function(a){return new V(function(b,c){c(a)})};
V.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:qg,e=null!==b&&void 0!==b?b:pg;return new V(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){sg(c,c,d,f,g)}),c.onRejected.push(function(){tg(c,c,e,f,g)})):"FULFILLED"===c.state.status?sg(c,c,d,f,g):"REJECTED"===c.state.status&&tg(c,c,e,f,g)})};
function rg(a,b){a.then(void 0,b)}
function sg(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof V?ug(a,b,f,d,e):d(f)}catch(g){e(g)}}
function tg(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof V?ug(a,b,f,d,e):d(f)}catch(g){e(g)}}
function ug(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof V?ug(a,b,f,d,e):d(f)},function(f){e(f)})}
;function vg(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function wg(a){return new Promise(function(b,c){vg(a,b,c)})}
function W(a){return new V(function(b,c){vg(a,b,c)})}
;function xg(a,b){return new V(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function yg(a){return new Promise(function(b){He(function(){b()},a)})}
function zg(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(S());this.i=!1}
q=zg.prototype;q.add=function(a,b,c){return Ag(this,[a],{mode:"readwrite",K:!0},function(d){return Bg(d,a).add(b,c)})};
q.clear=function(a){return Ag(this,[a],{mode:"readwrite",K:!0},function(b){return Bg(b,a).clear()})};
q.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
q.count=function(a,b){return Ag(this,[a],{mode:"readonly",K:!0},function(c){return Bg(c,a).count(b)})};
q.delete=function(a,b){return Ag(this,[a],{mode:"readwrite",K:!0},function(c){return Bg(c,a).delete(b)})};
q.get=function(a,b){return Ag(this,[a],{mode:"readonly",K:!0},function(c){return Bg(c,a).get(b)})};
function Ag(a,b,c,d){return L(a,function f(){var g=this,h,k,l,m,n,r,p,v,w,y,Y,J,D,T;return z(f,function(E){switch(E.h){case 1:var Aa={mode:"readonly",K:!1};"string"===typeof c?Aa.mode=c:Aa=c;h=Aa;g.transactionCount++;k=R("ytidb_transaction_exponential_backoff_retries");l=h.K?Ce("ytidb_transaction_try_count",1):1;m=500;n=0;case 2:if(r){E.u(3);break}n++;p=Math.round(S());qa(E,4);v=g.h.transaction(b,h.mode);Aa=new Cg(v);Aa=Dg(Aa,d);return x(E,Aa,6);case 6:return w=E.j,y=Math.round(S()),Eg(g,p,y,n,void 0,
b.join(),h),E.return(w);case 4:Y=ra(E);J=Math.round(S());D=og(Y,g.h.name,b.join());if((T=D instanceof U&&!D.h)||n>=l){Eg(g,p,J,n,D,b.join(),h);r=D;E.u(2);break}if(!k){E.u(2);break}return x(E,yg(m),9);case 9:m*=2;E.u(2);break;case 3:return E.return(Promise.reject(r))}})})}
function Eg(a,b,c,d,e,f,g){b=c-b;e?(e instanceof U&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Zf("QUOTA_EXCEEDED",{dbName:fg(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof U&&"UNKNOWN_ABORT"===e.type&&(Zf("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c-a.j}),a.i=!0),Fg(a,!1,d,f,b),Yf||(Xf.push({type:"ERROR",payload:e}),10<Xf.length&&Xf.shift())):
Fg(a,!0,d,f,b)}
function Fg(a,b,c,d,e){Zf("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c})}
function Gg(a){this.h=a}
q=Gg.prototype;q.add=function(a,b){return W(this.h.add(a,b))};
q.clear=function(){return W(this.h.clear()).then(function(){})};
q.count=function(a){return W(this.h.count(a))};
function Hg(a,b){return Ig(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
q.delete=function(a){return a instanceof IDBKeyRange?Hg(this,a):W(this.h.delete(a))};
q.get=function(a){return W(this.h.get(a))};
q.index=function(a){return new Jg(this.h.index(a))};
q.getName=function(){return this.h.name};
function Ig(a,b,c){a=a.h.openCursor(b.query,b.direction);return Kg(a).then(function(d){return xg(d,c)})}
function Cg(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=U;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Dg(a,b){var c=new Promise(function(d,e){rg(b(a).then(function(f){a.commit();d(f)}),e)});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
Cg.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new U("EXPLICIT_ABORT");};
Cg.prototype.commit=function(){var a=this.h;a.commit&&!this.aborted&&a.commit()};
function Bg(a,b){b=a.h.objectStore(b);var c=a.i.get(b);c||(c=new Gg(b),a.i.set(b,c));return c}
function Jg(a){this.h=a}
Jg.prototype.count=function(a){return W(this.h.count(a))};
Jg.prototype.delete=function(a){return Lg(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
Jg.prototype.get=function(a){return W(this.h.get(a))};
Jg.prototype.getKey=function(a){return W(this.h.getKey(a))};
function Lg(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Kg(a).then(function(d){return xg(d,c)})}
function Mg(a,b){this.request=a;this.cursor=b}
function Kg(a){return W(a).then(function(b){return null===b?null:new Mg(a,b)})}
q=Mg.prototype;q.advance=function(a){this.cursor.advance(a);return Kg(this.request)};
q.continue=function(a){this.cursor.continue(a);return Kg(this.request)};
q.delete=function(){return W(this.cursor.delete()).then(function(){})};
q.getKey=function(){return this.cursor.key};
q.update=function(a){return W(this.cursor.update(a))};function Ng(a,b,c){return L(this,function e(){var f,g,h,k,l,m,n,r,p,v;return z(e,function(w){if(1==w.h)return f=self.indexedDB.open(a,b),g=c,h=g.blocked,k=g.blocking,l=g.Ca,m=g.upgrade,n=g.closed,p=function(){r||(r=new zg(f.result,{closed:n}));return r},f.addEventListener("upgradeneeded",function(y){if(null===y.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");y.dataLoss&&"none"!==y.dataLoss&&Zf("IDB_DATA_CORRUPTED",{reason:y.dataLossMessage||"unknown reason",dbName:fg(a)});var Y=p(),J=new Cg(f.transaction);m&&m(Y,y.oldVersion,y.newVersion,J)}),h&&f.addEventListener("blocked",function(){h()}),x(w,wg(f),2);
v=w.j;k&&v.addEventListener("versionchange",function(){k(p())});
v.addEventListener("close",function(){Zf("IDB_UNEXPECTEDLY_CLOSED",{dbName:fg(a),dbVersion:v.version});l&&l()});
return w.return(p())})})}
function Og(a,b){b=void 0===b?{}:b;return L(this,function d(){var e,f,g;return z(d,function(h){e=self.indexedDB.deleteDatabase(a);f=b;(g=f.blocked)&&e.addEventListener("blocked",function(){g()});
return x(h,wg(e),0)})})}
;function Pg(a){this.name="YtIdbMeta";this.options=a;this.i=!1}
function Qg(a,b,c){c=void 0===c?{}:c;c=void 0===c?{}:c;return Ng(a,b,c)}
Pg.prototype.delete=function(a){a=void 0===a?{}:a;return Og(this.name,a)};
Pg.prototype.open=function(){var a=this;if(!this.h){var b,c=function(){a.h===b&&(a.h=void 0)},d={blocking:function(f){f.close()},
closed:c,Ca:c,upgrade:this.options.upgrade},e=function(){return L(a,function g(){var h=this,k,l,m;return z(g,function(n){switch(n.h){case 1:return qa(n,2),x(n,Qg(h.name,h.options.version,d),4);case 4:k=n.j;a:{var r=u(Object.keys(h.options.Ba));for(var p=r.next();!p.done;p=r.next())if(p=p.value,!k.h.objectStoreNames.contains(p)){r=p;break a}r=void 0}l=r;if(void 0===l){n.u(5);break}if(h.i){n.u(6);break}h.i=!0;return x(n,h.delete(),7);case 7:return n.return(e());case 6:throw new mg(l);case 5:return n.return(k);
case 2:m=ra(n);if(m instanceof DOMException?"VersionError"===m.name:"DOMError"in self&&m instanceof DOMError?"VersionError"===m.name:m instanceof Object&&"message"in m&&"An attempt was made to open a database using a lower version than the existing version."===m.message)return n.return(Qg(h.name,void 0,Object.assign(Object.assign({},d),{upgrade:void 0})));c();throw m;}})})};
this.h=b=e()}return this.h};var Rg=new Pg({Ba:{databases:!0},upgrade:function(a,b){1>b&&a.h.createObjectStore("databases",{keyPath:"actualName"})}});
function Sg(a){return L(this,function c(){var d;return z(c,function(e){if(1==e.h)return x(e,Rg.open(),2);d=e.j;return e.return(Ag(d,["databases"],{K:!0,mode:"readwrite"},function(f){var g=Bg(f,"databases");return g.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier||a.clearDataOnAuthChange!==h.clearDataOnAuthChange:1)return W(g.h.put(a,void 0)).then(function(){})})}))})})}
function Tg(){return L(this,function b(){var c;return z(b,function(d){if(1==d.h)return x(d,Rg.open(),2);c=d.j;return d.return(c.delete("databases","yt-idb-test-do-not-use"))})})}
function Ug(){return L(this,function b(){var c,d;return z(b,function(e){if(1==e.h)return x(e,Rg.open(),2);if(3!=e.h)return c=e.j,x(e,c.count("databases"),3);d=e.j;return e.return(0<d)})})}
;var Vg;
function Wg(){return L(this,function b(){var c,d,e,f,g;return z(b,function(h){switch(h.h){case 1:if(R("ytidb_is_supported_cache_success_result")&&(c=ag(),null===c||void 0===c?0:c.hasSucceededOnce))return h.return(new bg(!0));var k;if(k=af)k=/WebKit\/([0-9]+)/.exec(lb),k=!!(k&&600<=parseInt(k[1],10));k&&(k=/WebKit\/([0-9]+)/.exec(lb),k=!(k&&602<=parseInt(k[1],10)));if(k)return h.return(dg(Error("YtIdb is not supported on iOS 8 or 9")));if(Cb)return h.return(dg(Error("YtIdb is not supported on Edge")));try{if(d=
self,!(d.indexedDB&&d.IDBIndex&&d.IDBKeyRange&&d.IDBObjectStore))return h.return(dg(Error("Non-prefixed indexedDB APIs are missing")))}catch(l){return h.return(dg(l))}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return h.return(dg(Error("IDBTransaction.prototype.objectStoreNames is missing")));qa(h,2);e={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return x(h,Sg(e),4);case 4:return x(h,Tg(),5);case 5:return h.return(new bg(!0));
case 2:f=ra(h);if(!cg()){h.u(6);break}qa(h,7);return x(h,Ug(),9);case 9:return g=h.j,h.return(dg(f,g));case 7:return ra(h),h.return(dg(f));case 6:return h.return(dg(f))}})})}
function Xg(){if(void 0!==Vg)return Vg;Yf=!0;return Vg=Wg().then(function(a){Yf=!1;a.log();return a.isSupported()})}
;var Yg;function Zg(){Yg||(Yg=new Qf("yt.offline"));return Yg}
function $g(){if(R("offline_error_handling")){var a=Zg().get("errors",!0);if(a){for(var b in a)if(a[b]){var c=new eg(b,"sent via offline_errors");c.name=a[b].name;c.stack=a[b].stack;c.level=a[b].level;ge(c)}Zg().set("errors",{},2592E3,!0)}}}
;var ah=Ce("network_polling_interval",3E4);function bh(){N.call(this);this.S=0;this.o=this.j=!1;this.v=0;this.l=this.N=!1;this.h=ch();this.l=R("validate_network_status");dh(this);eh(this)}
ma(bh,N);function fh(a,b){a.j=!0;if(void 0===b?0:b)a.S||gh(a)}
function ch(){var a=window.navigator.onLine;return void 0===a?!0:a}
function eh(a){window.addEventListener("online",function(){return L(a,function c(){var d=this;return z(c,function(e){if(1==e.h)return d.l?x(e,hh(d),2):(d.h=!0,d.j&&O(d,"ytnetworkstatus-online"),e.u(2));ih(d);d.N&&$g();e.h=0})})})}
function dh(a){window.addEventListener("offline",function(){return L(a,function c(){var d=this;return z(c,function(e){if(1==e.h)return d.l?x(e,hh(d),2):(d.h=!1,d.j&&O(d,"ytnetworkstatus-offline"),e.u(2));ih(d);e.h=0})})})}
function gh(a){a.S=Ee(function(){return L(a,function c(){var d=this;return z(c,function(e){if(1==e.h){if(R("trigger_nsm_validation_checks_with_nwl")&&!d.h)return x(e,hh(d),3);if(ch()){if(!1!==d.h)return e.u(3);d.o=!0;d.v=S();return d.j?d.l?x(e,hh(d),11):(d.h=!0,O(d,"ytnetworkstatus-online"),e.u(11)):e.u(11)}if(!0!==d.h)return e.u(3);d.o=!0;d.v=S();return d.j?d.l?x(e,hh(d),3):(d.h=!1,O(d,"ytnetworkstatus-offline"),e.u(3)):e.u(3)}if(3!=e.h)return d.N&&$g(),e.u(3);gh(d);e.h=0})})},ah)}
function ih(a){a.o&&(he(new eg("NetworkStatusManager state did not match poll",S()-a.v)),a.o=!1)}
function hh(a){return a.B?a.B:a.B=new Promise(function(b){return L(a,function d(){var e,f,g,h=this;return z(d,function(k){switch(k.h){case 1:return e=new AbortController,f=e.signal,g=!1,qa(k,2,3),h.Y=Ge(function(){e.abort()},2E4),x(k,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:sa(k);h.B=void 0;Je(h.Y);g!==h.h&&(h.h=g,h.h&&h.j?O(h,"ytnetworkstatus-online"):h.j&&O(h,"ytnetworkstatus-offline"));b(g);ta(k);break;case 2:ra(k),g=!1,k.u(3)}})})})}
;function jh(a){a=void 0===a?{}:a;N.call(this);var b=this;this.j=this.o=0;bh.h||(bh.h=new bh);this.h=bh.h;fh(this.h,a.ra);a.Aa&&(this.h.N=!0);a.X?(this.X=a.X,jd(this.h,"ytnetworkstatus-online",function(){kh(b,"publicytnetworkstatus-online")}),jd(this.h,"ytnetworkstatus-offline",function(){kh(b,"publicytnetworkstatus-offline")})):(jd(this.h,"ytnetworkstatus-online",function(){O(b,"publicytnetworkstatus-online")}),jd(this.h,"ytnetworkstatus-offline",function(){O(b,"publicytnetworkstatus-offline")}))}
ma(jh,N);function lh(){mh||(mh=new jh({Aa:!0,ra:R("trigger_nsm_validation_checks_with_nwl")}));var a=mh.h;a.l||a.h===ch()||he(new eg("NetworkStatusManager isOnline does not match window status"))}
function kh(a,b){a.X?a.j?(Je(a.o),a.o=Ge(function(){a.l!==b&&(O(a,b),a.l=b,a.j=S())},a.X-(S()-a.j))):(O(a,b),a.l=b,a.j=S()):O(a,b)}
;var mh;function nh(a,b){b=void 0===b?{}:b;R("skip_is_supported_killswitch")?Xg().then(function(){lh();oh(a,b)}):(lh(),oh(a,b))}
function ph(a,b){b=void 0===b?{}:b;R("skip_is_supported_killswitch")?Xg().then(function(){oh(a,b)}):oh(a,b)}
function oh(a,b){if(R("networkless_with_beacon")){var c=["method","postBody"];if(Object.keys(b).length>c.length)var d=!0;else{d=0;c=u(c);for(var e=c.next();!e.done;e=c.next())b.hasOwnProperty(e.value)&&d++;d=Object.keys(b).length!==d}d?Te(a,b):df(a,void 0,b.postBody)}else Te(a,b)}
;function qh(a){var b=this;this.h=null;a?this.h=a:Nf()&&(this.h=Ef());Ee(function(){Vf(b)},5E3)}
qh.prototype.isReady=function(){!this.h&&Nf()&&(this.h=Ef());return!!this.h};
function Hf(a,b,c,d){!Q("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&he(new eg("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new eg("innertube xhrclient not ready",b,c,d);ge(e);throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",postParams:c,postBodyFormat:"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(n,r){if(d.onSuccess)d.onSuccess(r)},
onFetchSuccess:function(n){if(d.onSuccess)d.onSuccess(n)},
onError:function(n,r){if(d.onError)d.onError(r)},
onFetchError:function(n){if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.h.xa)&&(g=e);var h=a.h.za||!1,k=Of(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.h.innertubeApiVersion+"/"+b;var l={alt:"json"};a.h.ya&&f.headers.Authorization||(l.key=a.h.innertubeApiKey);var m=ze(""+g+e,l||{},!0);(function(n){n=void 0===n?!1:n;var r;if(d.retry&&"www.youtube-nocookie.com"!=g&&(n||(r=Tf(b,c,k,h)),r)){var p=f.onSuccess,v=f.onFetchSuccess;f.onSuccess=function(w,
y){Uf(r);p(w,y)};
c.onFetchSuccess=function(w,y){Uf(r);v(w,y)}}try{n&&d.retry&&!d.ja.bypassNetworkless?(f.method="POST",!d.ja.writeThenSend&&R("nwl_send_fast_on_unload")?ph(m,f):nh(m,f)):(f.method="POST",f.postParams||(f.postParams={}),Te(m,f))}catch(w){if("InvalidAccessError"==w.name)r&&(Uf(r),r=0),he(Error("An extension is blocking network request."));
else throw w;}r&&Ee(function(){Vf(a)},5E3)})(!1)}
;function rh(a,b){var c=void 0===c?{}:c;var d=qh;Q("ytLoggingEventsDefaultDisabled",!1)&&qh==qh&&(d=null);c=void 0===c?{}:c;var e={},f=Math.round(c.timestamp||S());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=C("_lact",window);a=null==a?-1:Math.max(Date.now()-a,0);e.context={lastActivityMs:String(c.timestamp||!isFinite(a)?-1:a)};R("log_sequence_info_on_gel_web")&&c.la&&(a=e.context,b=c.la,If[b]=b in If?If[b]+1:0,a.sequence={index:If[b],groupKey:b},c.Ra&&delete If[c.la]);(c.Wa?Bf:xf)({endpoint:"log_event",
payload:e,F:c.F,V:c.V},d)}
;var sh=[{ha:function(a){return"Cannot read property '"+a.key+"'"},
ba:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{ha:function(a){return"Cannot call '"+a.key+"'"},
ba:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}}];var uh={I:[],H:[{oa:th,weight:500}]};function th(a){a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function vh(){this.H=[];this.I=[]}
var wh;function xh(){if(!wh){var a=wh=new vh;a.I.length=0;a.H.length=0;uh.I&&a.I.push.apply(a.I,uh.I);uh.H&&a.H.push.apply(a.H,uh.H)}return wh}
;var yh=new P;function zh(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Ah(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Ah(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Ah(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Ah(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Bh(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Ch(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=zh(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?Ch(f+".ve",g,h,k):0;d+=f;d+=Ch(e,a[e],b,c);if(500<d)break}}else c[b]=Dh(a),d+=c[b].length;else c[b]=Dh(a),d+=c[b].length;return d}
function Ch(a,b,c,d){c+="."+a;a=Dh(b);d[c]=a;return c.length+a.length}
function Dh(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;var Eh=new Set,Fh=0,Gh=0,Hh=0,Ih=[],Jh=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];var Kh={};function Lh(a){return Kh[a]||(Kh[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Mh={},Nh=[],Ld=new P,Oh={};function Ph(){for(var a=u(Nh),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Qh(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Lh(b)]:a.getAttribute("data-"+b):null;return c}
function Rh(a,b){for(var c=1;c<arguments.length;++c);Ld.M.apply(Ld,arguments)}
;function Sh(a){this.j=this.h=!1;this.i=a||{};a=document.getElementById("www-widgetapi-script");if(this.h=!!("https:"===document.location.protocol||a&&0===a.src.indexOf("https:"))){a=[this.i,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}}
function X(a,b){a=[a.i,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function Th(a,b,c){Uh||(Uh={},pe(window,"message",function(d){a:{if(d.origin===X(a,"host")||d.origin===X(a,"host").toString().replace(/^http:/,"https:")){try{var e=JSON.parse(d.data)}catch(f){e=void 0;break a}a.j=!0;a.h||0!==d.origin.indexOf("https:")||(a.h=!0);if(d=Uh[e.id])d.o=!0,d.o&&(I(d.s,d.sendMessage,d),d.s.length=0),d.ca(e)}e=void 0}return e}));
Uh[c]=b}
var Uh=null;function Z(a,b,c){this.m=this.h=this.i=null;this.j=0;this.o=!1;this.s=[];this.l=null;this.B={};if(!a)throw Error("YouTube player element ID required.");this.id=Fa(this);this.v=c;this.setup(a,b)}
q=Z.prototype;q.setSize=function(a,b){this.h.width=a.toString();this.h.height=b.toString();return this};
q.na=function(){return this.h};
q.ca=function(a){Vh(this,a.event,a)};
q.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.l.subscribe(a,c);Wh(this,a);return this};
function Xh(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.v===b[0]&&Wh(a,c)}}
q.destroy=function(){this.h&&this.h.id&&(Mh[this.h.id]=null);var a=this.l;a&&"function"==typeof a.dispose&&a.dispose();if(this.m){a=this.h;var b=a.parentNode;b&&b.replaceChild(this.m,a)}else(a=this.h)&&a.parentNode&&a.parentNode.removeChild(a);Uh&&(Uh[this.id]=null);this.i=null;a=this.h;for(var c in Ya)Ya[c][0]==a&&ne(c);this.m=this.h=null};
q.ea=function(){return{}};
function Yh(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.o?a.sendMessage(b):a.s.push(b)}
function Vh(a,b,c){a.l.m||(c={target:a,data:c},a.l.M(b,c),Rh(a.v+"."+b,c))}
function Zh(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+X(a.i,"title"));(b=X(a.i,"width"))&&c.setAttribute("width",b.toString());(b=X(a.i,"height"))&&c.setAttribute("height",
b.toString());var g=a.ea();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&I(["debugjs","debugcss"],function(h){var k=xb(window.location.href,h);null!==k&&(g[h]=k)});
window.yt_embedsTokenValue&&(g.embedsTokenValue=encodeURIComponent(window.yt_embedsTokenValue),delete window.yt_embedsTokenValue);c.src=X(a.i,"host")+("/embed/"+X(a.i,"videoId"))+"?"+vb(g);return c}
q.ka=function(){this.h&&this.h.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.j)};
function $h(a){Th(a.i,a,a.id);a.j=re(a.ka.bind(a));pe(a.h,"load",function(){window.clearInterval(a.j);a.j=re(a.ka.bind(a))})}
q.setup=function(a,b){var c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?tb(a.src):"https://www.youtube.com"),this.i=new Sh(b),c||(b=Zh(this,a),this.m=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.h=a,this.h.id||(this.h.id="widget"+Fa(this.h)),Mh[this.h.id]=this,window.postMessage){this.l=new P;$h(this);b=X(this.i,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in Oh)Oh.hasOwnProperty(e)&&
Xh(this,e)}};
function Wh(a,b){a.B[b]||(a.B[b]=!0,Yh(a,"addEventListener",[b]))}
q.sendMessage=function(a){a.id=this.id;a.channel="widget";a=td(a);var b=this.i;var c=tb(this.h.src||"");b=0===c.indexOf("https:")?[c]:b.h?[c.replace("http:","https:")]:b.j?[c]:[c,c.replace("http:","https:")];if(this.h.contentWindow)for(c=0;c<b.length;c++)try{this.h.contentWindow.postMessage(a,b[c])}catch(y){if(y.name&&"SyntaxError"===y.name){if(!(y.message&&0<y.message.indexOf("target origin ''"))){var d=void 0,e=y;d=void 0===d?{}:d;d.name=Q("INNERTUBE_CONTEXT_CLIENT_NAME",1);d.version=Q("INNERTUBE_CONTEXT_CLIENT_VERSION",
void 0);var f=d||{};d="WARNING";d=void 0===d?"ERROR":d;if(e){e.hasOwnProperty("level")&&e.level&&(d=e.level);if(R("console_log_js_exceptions")){var g=e,h=[];h.push("Name: "+g.name);h.push("Message: "+g.message);g.hasOwnProperty("params")&&h.push("Error Params: "+JSON.stringify(g.params));g.hasOwnProperty("args")&&h.push("Error args: "+JSON.stringify(g.args));h.push("File name: "+g.fileName);h.push("Stacktrace: "+g.stack);window.console.log(h.join("\n"),g)}if(!(5<=Fh)){g=void 0;var k=f,l=Fc(e);f=l.message||
"Unknown Error";h=l.name||"UnknownError";var m=l.stack||e.i||"Not available";if(m.startsWith(h+": "+f)){var n=m.split("\n");n.shift();m=n.join("\n")}n=l.lineNumber||"Not available";l=l.fileName||"Not available";var r=0;if(e.hasOwnProperty("args")&&e.args&&e.args.length)for(g=0;g<e.args.length&&!(r=Bh(e.args[g],"params."+g,k,r),500<=r);g++);else if(e.hasOwnProperty("params")&&e.params){var p=e.params;if("object"===typeof e.params)for(g in p){if(p[g]){var v="params."+g,w=Dh(p[g]);k[v]=w;r+=v.length+
w.length;if(500<r)break}}else k.params=Dh(p)}if(Ih.length)for(g=0;g<Ih.length&&!(r=Bh(Ih[g],"params.context."+g,k,r),500<=r);g++);navigator.vendor&&!k.hasOwnProperty("vendor")&&(k["device.vendor"]=navigator.vendor);g={message:f,name:h,lineNumber:n,fileName:l,stack:m,params:k,sampleWeight:1};f=Number(e.columnNumber);isNaN(f)||(g.lineNumber=g.lineNumber+":"+f);if("IGNORED"===e.level)e=0;else a:{e=xh();f=u(e.I);for(h=f.next();!h.done;h=f.next())if(h=h.value,g.message&&g.message.match(h.Sa)){e=h.weight;
break a}e=u(e.H);for(f=e.next();!f.done;f=e.next())if(f=f.value,f.oa(g)){e=f.weight;break a}e=1}g.sampleWeight=e;e=g;g=u(sh);for(f=g.next();!f.done;f=g.next())if(f=f.value,f.ba[e.name])for(n=u(f.ba[e.name]),h=n.next();!h.done;h=n.next())if(l=h.value,h=e.message.match(l.regexp)){e.params["params.error.original"]=h[0];n=l.groups;l={};for(m=0;m<n.length;m++)l[n[m]]=h[m+1],e.params["params.error."+n[m]]=h[m+1];e.message=f.ha(l);break}e.params||(e.params={});g=xh();e.params["params.errorServiceSignature"]=
"msg="+g.I.length+"&cb="+g.H.length;e.params["params.serviceWorker"]="false";B.document&&B.document.querySelectorAll&&(e.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));window.yterr&&"function"===typeof window.yterr&&window.yterr(e);if(0!==e.sampleWeight&&!Eh.has(e.message)){"ERROR"===d?(yh.M("handleError",e),R("record_app_crashed_web")&&0===Hh&&1===e.sampleWeight&&(Hh++,rh("appCrashed",{appCrashType:"APP_CRASH_TYPE_BREAKPAD"})),Gh++):"WARNING"===d&&yh.M("handleWarning",
e);if(R("kevlar_gel_error_routing")){g=d;h=e;b:{f=u(Jh);for(n=f.next();!n.done;n=f.next())if((l=lb)&&0<=l.toLowerCase().indexOf(n.value.toLowerCase())){f=!0;break b}f=!1}if(f)f=void 0;else{n={stackTrace:h.stack};h.fileName&&(n.filename=h.fileName);f=h.lineNumber&&h.lineNumber.split?h.lineNumber.split(":"):[];0!==f.length&&(1!==f.length||isNaN(Number(f[0]))?2!==f.length||isNaN(Number(f[0]))||isNaN(Number(f[1]))||(n.lineNumber=Number(f[0]),n.columnNumber=Number(f[1])):n.lineNumber=Number(f[0]));f={level:"ERROR_LEVEL_UNKNOWN",
message:h.message,errorClassName:h.name,sampleWeight:h.sampleWeight};"ERROR"===g?f.level="ERROR_LEVEL_ERROR":"WARNING"===g&&(f.level="ERROR_LEVEL_WARNNING");n={isObfuscated:!0,browserStackInfo:n};l={pageUrl:window.location.href,kvPairs:[]};Q("FEXP_EXPERIMENTS")&&(l.experimentIds=Q("FEXP_EXPERIMENTS"));if(h=h.params)for(m=u(Object.keys(h)),k=m.next();!k.done;k=m.next())k=k.value,l.kvPairs.push({key:"client."+k,value:String(h[k])});h=Q("SERVER_NAME",void 0);m=Q("SERVER_VERSION",void 0);h&&m&&(l.kvPairs.push({key:"server.name",
value:h}),l.kvPairs.push({key:"server.version",value:m}));f={errorMetadata:l,stackTrace:n,logMessage:f}}f&&(rh("clientError",f),("ERROR"===g||R("errors_flush_gel_always_killswitch"))&&zf())}if(!R("suppress_error_204_logging")){f=e;g=f.params||{};d={urlParams:{a:"logerror",t:"jserror",type:f.name,msg:f.message.substr(0,250),line:f.lineNumber,level:d,"client.name":g.name},postParams:{url:Q("PAGE_NAME",window.location.href),file:f.fileName},method:"POST"};g.version&&(d["client.version"]=g.version);if(d.postParams){f.stack&&
(d.postParams.stack=f.stack);f=u(Object.keys(g));for(h=f.next();!h.done;h=f.next())h=h.value,d.postParams["client."+h]=g[h];if(g=Q("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(f=u(Object.keys(g)),h=f.next();!h.done;h=f.next())h=h.value,d.postParams[h]=g[h];g=Q("SERVER_NAME",void 0);f=Q("SERVER_VERSION",void 0);g&&f&&(d.postParams["server.name"]=g,d.postParams["server.version"]=f)}Te(Q("ECATCHER_REPORT_HOST","")+"/error_204",d)}Eh.add(e.message);Fh++}}}}}else throw y;}else console&&console.warn&&
console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function ai(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function bi(a){return 0===a.search("get")||0===a.search("is")}
;function ci(a,b){Z.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.C={};this.playerInfo={}}
ma(ci,Z);q=ci.prototype;q.ea=function(){var a=X(this.i,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=X(this.i,"embedConfig")){if(F(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
q.ca=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(F(a))for(var c in a)a.hasOwnProperty(c)&&(this.C[c]=a[c]);break;case "infoDelivery":di(this,a);break;case "initialDelivery":F(a)&&(window.clearInterval(this.j),this.playerInfo={},this.C={},ei(this,a.apiInterface),di(this,a));break;default:Vh(this,b,a)}};
function di(a,b){if(F(b))for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c])}
function ei(a,b){I(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:ai(c)?this[c]=function(){this.playerInfo={};
this.C={};Yh(this,c,arguments);return this}:bi(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){Yh(this,c,arguments);
return this})},a)}
q.getVideoEmbedCode=function(){var a=X(this.i,"host")+("/embed/"+X(this.i,"videoId")),b=Number(X(this.i,"width")),c=Number(X(this.i,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);kb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(eb,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(fb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(gb,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(hb,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(ib,"&#39;")),-1!=a.indexOf("\x00")&&
(a=a.replace(jb,"&#0;")));return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'};
q.getOptions=function(a){return this.C.namespaces?a?this.C[a]?this.C[a].options||[]:[]:this.C.namespaces||[]:[]};
q.getOption=function(a,b){if(this.C.namespaces&&a&&b&&this.C[a])return this.C[a][b]};
function fi(a){if("iframe"!==a.tagName.toLowerCase()){var b=Qh(a,"videoid");b&&(b={videoId:b,width:Qh(a,"width"),height:Qh(a,"height")},new ci(a,b))}}
;G("YT.PlayerState.UNSTARTED",-1);G("YT.PlayerState.ENDED",0);G("YT.PlayerState.PLAYING",1);G("YT.PlayerState.PAUSED",2);G("YT.PlayerState.BUFFERING",3);G("YT.PlayerState.CUED",5);G("YT.get",function(a){return Mh[a]});
G("YT.scan",Ph);G("YT.subscribe",function(a,b,c){Ld.subscribe(a,b,c);Oh[a]=!0;for(var d in Mh)Mh.hasOwnProperty(d)&&Xh(Mh[d],a)});
G("YT.unsubscribe",function(a,b,c){Kd(a,b,c)});
G("YT.Player",ci);Z.prototype.destroy=Z.prototype.destroy;Z.prototype.setSize=Z.prototype.setSize;Z.prototype.getIframe=Z.prototype.na;Z.prototype.addEventListener=Z.prototype.addEventListener;ci.prototype.getVideoEmbedCode=ci.prototype.getVideoEmbedCode;ci.prototype.getOptions=ci.prototype.getOptions;ci.prototype.getOption=ci.prototype.getOption;
Nh.push(function(a){var b=a;b||(b=document);a=Ua(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=Pa(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=Ua(b);I(Ta(a,b),fi)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Ph();var gi=B.onYTReady;gi&&gi();var hi=B.onYouTubeIframeAPIReady;hi&&hi();var ii=B.onYouTubePlayerAPIReady;ii&&ii();}).call(this);
