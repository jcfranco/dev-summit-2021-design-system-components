System.register([],(function(e){"use strict";return{execute:function(){e({a:j,b:y,c:g,d:P,i:x});var t=e("f",typeof global=="object"&&global&&global.Object===Object&&global);var n=typeof self=="object"&&self&&self.Object===Object&&self;var r=e("r",t||n||Function("return this")());var i=e("S",r.Symbol);var u=Object.prototype;var f=u.hasOwnProperty;var a=u.toString;var o=i?i.toStringTag:undefined;function c(e){var t=f.call(e,o),n=e[o];try{e[o]=undefined;var r=true}catch(u){}var i=a.call(e);if(r){if(t){e[o]=n}else{delete e[o]}}return i}var l=Object.prototype;var v=l.toString;function d(e){return v.call(e)}var s="[object Null]",b="[object Undefined]";var p=i?i.toStringTag:undefined;function y(e){if(e==null){return e===undefined?b:s}return p&&p in Object(e)?c(e):d(e)}function g(e){return e!=null&&typeof e=="object"}var m="[object Symbol]";function j(e){return typeof e=="symbol"||g(e)&&y(e)==m}var h=/\s/;function O(e){var t=e.length;while(t--&&h.test(e.charAt(t))){}return t}var T=/^\s+/;function S(e){return e?e.slice(0,O(e)+1).replace(T,""):e}function x(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var w=0/0;var $=/^[-+]0x[0-9a-f]+$/i;var E=/^0b[01]+$/i;var M=/^0o[0-7]+$/i;var W=parseInt;function A(e){if(typeof e=="number"){return e}if(j(e)){return w}if(x(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=x(t)?t+"":t}if(typeof e!="string"){return e===0?e:+e}e=S(e);var n=E.test(e);return n||M.test(e)?W(e.slice(2),n?2:8):$.test(e)?w:+e}var D=function(){return r.Date.now()};var F="Expected a function";var I=Math.max,N=Math.min;function P(e,t,n){var r,i,u,f,a,o,c=0,l=false,v=false,d=true;if(typeof e!="function"){throw new TypeError(F)}t=A(t)||0;if(x(n)){l=!!n.leading;v="maxWait"in n;u=v?I(A(n.maxWait)||0,t):u;d="trailing"in n?!!n.trailing:d}function s(t){var n=r,u=i;r=i=undefined;c=t;f=e.apply(u,n);return f}function b(e){c=e;a=setTimeout(g,t);return l?s(e):f}function p(e){var n=e-o,r=e-c,i=t-n;return v?N(i,u-r):i}function y(e){var n=e-o,r=e-c;return o===undefined||n>=t||n<0||v&&r>=u}function g(){var e=D();if(y(e)){return m(e)}a=setTimeout(g,p(e))}function m(e){a=undefined;if(d&&r){return s(e)}r=i=undefined;return f}function j(){if(a!==undefined){clearTimeout(a)}c=0;r=o=i=a=undefined}function h(){return a===undefined?f:m(D())}function O(){var e=D(),n=y(e);r=arguments;i=this;o=e;if(n){if(a===undefined){return b(o)}if(v){clearTimeout(a);a=setTimeout(g,t);return s(o)}}if(a===undefined){a=setTimeout(g,t)}return f}O.cancel=j;O.flush=h;return O}}}}));