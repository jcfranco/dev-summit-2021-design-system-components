System.register(["./p-56d0a65e.system.js"],(function(r){"use strict";var t,e,n,o,u;return{setters:[function(r){t=r.i;e=r.b;n=r.c;o=r.r;u=r.f}],execute:function(){r("f",Tr);var a=r("i",Array.isArray);function c(r){return r}var i="[object AsyncFunction]",f="[object Function]",b="[object GeneratorFunction]",l="[object Proxy]";function v(r){if(!t(r)){return false}var n=e(r);return n==f||n==b||n==i||n==l}var y=9007199254740991;var j=/^(?:0|[1-9]\d*)$/;function p(r,t){var e=typeof r;t=t==null?y:t;return!!t&&(e=="number"||e!="symbol"&&j.test(r))&&(r>-1&&r%1==0&&r<t)}var s=9007199254740991;function d(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=s}function m(r){return r!=null&&d(r.length)&&!v(r)}var A=Object.prototype;function h(r){var t=r&&r.constructor,e=typeof t=="function"&&t.prototype||A;return r===e}function g(r,t){var e=-1,n=Array(r);while(++e<r){n[e]=t(e)}return n}var O="[object Arguments]";function w(r){return n(r)&&e(r)==O}var F=Object.prototype;var x=F.hasOwnProperty;var T=F.propertyIsEnumerable;var B=w(function(){return arguments}())?w:function(r){return n(r)&&x.call(r,"callee")&&!T.call(r,"callee")};function I(){return false}var P=typeof r=="object"&&r&&!r.nodeType&&r;var S=P&&typeof module=="object"&&module&&!module.nodeType&&module;var U=S&&S.exports===P;var E=U?o.Buffer:undefined;var k=E?E.isBuffer:undefined;var q=k||I;var D="[object Arguments]",M="[object Array]",C="[object Boolean]",G="[object Date]",L="[object Error]",N="[object Function]",R="[object Map]",V="[object Number]",W="[object Object]",$="[object RegExp]",z="[object Set]",H="[object String]",J="[object WeakMap]";var K="[object ArrayBuffer]",Q="[object DataView]",X="[object Float32Array]",Y="[object Float64Array]",Z="[object Int8Array]",_="[object Int16Array]",rr="[object Int32Array]",tr="[object Uint8Array]",er="[object Uint8ClampedArray]",nr="[object Uint16Array]",or="[object Uint32Array]";var ur={};ur[X]=ur[Y]=ur[Z]=ur[_]=ur[rr]=ur[tr]=ur[er]=ur[nr]=ur[or]=true;ur[D]=ur[M]=ur[K]=ur[C]=ur[Q]=ur[G]=ur[L]=ur[N]=ur[R]=ur[V]=ur[W]=ur[$]=ur[z]=ur[H]=ur[J]=false;function ar(r){return n(r)&&d(r.length)&&!!ur[e(r)]}function cr(r){return function(t){return r(t)}}var ir=typeof r=="object"&&r&&!r.nodeType&&r;var fr=ir&&typeof module=="object"&&module&&!module.nodeType&&module;var br=fr&&fr.exports===ir;var lr=br&&u.process;var vr=function(){try{var r=fr&&fr.require&&fr.require("util").types;if(r){return r}return lr&&lr.binding&&lr.binding("util")}catch(t){}}();var yr=vr&&vr.isTypedArray;var jr=yr?cr(yr):ar;var pr=Object.prototype;var sr=pr.hasOwnProperty;function dr(r,t){var e=a(r),n=!e&&B(r),o=!e&&!n&&q(r),u=!e&&!n&&!o&&jr(r),c=e||n||o||u,i=c?g(r.length,String):[],f=i.length;for(var b in r){if((t||sr.call(r,b))&&!(c&&(b=="length"||o&&(b=="offset"||b=="parent")||u&&(b=="buffer"||b=="byteLength"||b=="byteOffset")||p(b,f)))){i.push(b)}}return i}function mr(r){var t=[];if(r!=null){for(var e in Object(r)){t.push(e)}}return t}var Ar=Object.prototype;var hr=Ar.hasOwnProperty;function gr(r){if(!t(r)){return mr(r)}var e=h(r),n=[];for(var o in r){if(!(o=="constructor"&&(e||!hr.call(r,o)))){n.push(o)}}return n}function Or(r){return m(r)?dr(r,true):gr(r)}function wr(r){return function(t,e,n){var o=-1,u=Object(t),a=n(t),c=a.length;while(c--){var i=a[r?c:++o];if(e(u[i],i,u)===false){break}}return t}}var Fr=wr();function xr(r){return typeof r=="function"?r:c}function Tr(r,t){return r==null?r:Fr(r,xr(t),Or)}}}}));