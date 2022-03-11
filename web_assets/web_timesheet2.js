typeof window.console=="undefined"&&(window.console={log:function(){}}),function(
a,b){function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)
b[a[c]]=!0;return b}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace
(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0
:d==="false"?!1:d==="null"?null:f.isNumeric(d)?+d:j.test(d)?f.parseJSON(d):d}catch(
g){}f.data(a,c,d)}else d=b}return d}function m(a){for(var b in a){if(b==="data"&&
f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function n(a,b,c
){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data
(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data
(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function J(){return!1}function K(){return!0
}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function T(a,b
,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a)
;return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof 
b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f
.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,
b)>=0===c})}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement
)while(b.length)c.createElement(b.pop());return c}function ib(a,b){return f.nodeName
(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement
("tbody")):a}function jb(a,b){if(b.nodeType!==1||!f.hasData(a))return;var c,d,e,g=
f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i
)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c,i[c][d])}h.data&&(h.data=f.extend(
{},h.data))}function kb(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.
clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase
(),c==="object"?b.outerHTML=a.outerHTML:c!=="input"||a.type!=="checkbox"&&a.type!=="radio"?
c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=
a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=
b.checked=a.checked),b.value!==a.value&&(b.value=a.value)),b.removeAttribute(f.expando
),b.removeAttribute("_submit_attached"),b.removeAttribute("_change_attached")}function lb
(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*")
:typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function mb(a)
{if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function nb(
a){var b=(a.nodeName||"").toLowerCase();b==="input"?mb(a):b!=="script"&&typeof a.
getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),mb)}function ob
(a){var b=c.createElement("div");return hb.appendChild(b),b.innerHTML=a.outerHTML
,b.firstChild}function Bb(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=
b==="width"?1:0,g=4;if(d>0){if(c!=="border")for(;e<g;e+=2)c||(d-=parseFloat(f.css
(a,"padding"+xb[e]))||0),c==="margin"?d+=parseFloat(f.css(a,c+xb[e]))||0:d-=parseFloat
(f.css(a,"border"+xb[e]+"Width"))||0;return d+"px"}d=yb(a,b);if(d<0||d==null)d=a.
style[b];if(tb.test(d))return d;d=parseFloat(d)||0;if(c)for(;e<g;e+=2)d+=parseFloat
(f.css(a,"padding"+xb[e]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+xb[e
]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+xb[e]))||0);return d+"px"}
function Yb(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction
(c)){var d=b.toLowerCase().split(Ob),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/
.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function Zb
(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=
a===Sb,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c
.dataTypes.unshift(l),l=Zb(a,c,d,e,l,g)));return(k||!l)&&!g["*"]&&(l=Zb(a,c,d,e,"*"
,g)),l}function $b(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==
b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function _b(a,b,c,d){if(f.isArray
(b))f.each(b,function(b,e){c||Db.test(a)?d(a,e):_b(a+"["+(typeof e=="object"?b:""
)+"]",e,c,d)});else if(!c&&f.type(b)==="object")for(var e in b)_b(a+"["+e+"]",b[e
],c,d);else d(a,b)}function ac(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields
,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a
.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test
(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters
[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j)return j!==f[0]&&f.unshift(j),d[j]}function bc
(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d
.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof 
h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(
l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ")
;if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}
}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c)
:p(o(c)))}}return c}function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic
(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function rc(){return setTimeout
(sc,0),qc=f.now()}function sc(){qc=b}function tc(a,b){var c={};return f.each(pc.concat
.apply([],pc.slice(0,b)),function(){c[this]=a}),c}function uc(a){if(!jc[a]){var b=
c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""
){kc||(kc=c.createElement("iframe"),kc.frameBorder=kc.width=kc.height=0),b.appendChild
(kc);if(!lc||!kc.createElement)lc=(kc.contentWindow||kc.contentDocument).document
,lc.write((f.support.boxModel?"<!doctype html>":"")+"<html><body>"),lc.close();d=
lc.createElement(a),lc.body.appendChild(d),e=f.css(d,"display"),b.removeChild(kc)
}jc[a]=e}return jc[a]}function yc(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||
a.parentWindow:!1}var c=a.document,d=a.navigator,e=a.location,f=function(){function J
(){if(e.isReady)return;try{c.documentElement.doScroll("left")}catch(a){setTimeout
(J,1);return}e.ready()}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery
,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/
,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g
,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/
,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/
,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype
.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype
.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};return e.fn=e.prototype=
{constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType)return this
.context=this[0]=a,this.length=1,this;if(a==="body"&&!d&&c.body)return this.context=
c,this[0]=c.body,this.selector=a,this.length=1,this;if(typeof a=="string"){a.charAt
(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?g=[null,a,null]:g=i.exec(a);if(
g&&(g[1]||!d)){if(g[1])return d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=
m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0))
:a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(
j.fragment):j.fragment).childNodes),e.merge(this,a);h=c.getElementById(g[2]);if(h&&
h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}return this
.context=c,this.selector=a,this}return!d||d.jquery?(d||f).find(a):this.constructor
(d).find(a)}return e.isFunction(a)?f.ready(a):(a.selector!==b&&(this.selector=a.selector
,this.context=a.context),e.makeArray(a,this))},selector:"",jquery:"1.7.2",length:0
,size:function(){return this.length},toArray:function(){return F.call(this,0)},get
:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack
:function(a,b,c){var d=this.constructor();return e.isArray(a)?E.apply(d,a):e.merge
(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+
(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(
a,b){return e.each(this,a,b)},ready:function(a){return e.bindReady(),A.add(a),this
},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(
){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this
.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(
a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(
){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice
},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments
[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},
j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++
)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject
(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d
:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(
b){return a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f),e},isReady:!1,readyWait:1
,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--
e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0
;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready"
).off("ready")}},bindReady:function(){if(A)return;A=e.Callbacks("once memory");if(
c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener
("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent
){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;
try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}},isFunction
:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e
.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(
a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String
(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||
a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!
D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;
for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1
;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof 
b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse
(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+
b))();e.error("Invalid JSON: "+b)},parseXML:function(c){if(typeof c!="string"||!c
)return null;var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml"
)):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g
){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length
)&&e.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&j.test
(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a
.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName
.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===
b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(
;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f]
)===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?
function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":a.toString
().replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=
e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(
a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H
.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===
a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number"
)for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];return a
.length=d,a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++
)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0
,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||
e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in 
a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy
:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b
;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments
)))};return g.guid=a.guid=a.guid||g.guid||e.guid++,g},access:function(a,c,d,f,g,h
,i){var j,k=d==null,l=0,m=a.length;if(d&&typeof d=="object"){for(l in d)e.access(
a,c,l,d[l],1,h,f);g=1}else if(f!==b){j=i===b&&e.isFunction(f),k&&(j?(j=c,c=function(
a,b,c){return j.call(e(a),c)}):(c.call(a,f),c=null));if(c)for(;l<m;l++)c(a[l],d,j?
f.call(a[l],l,c(a[l],d)):f,i);g=1}return g?a:k?c.call(a):m?c(a[0],d):h},now:function(
){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(
a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser
:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init
(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=
a,a.sub=this.sub,a.fn.init=function(d,f){return f&&f instanceof e&&!(f instanceof 
a)&&(f=a(f)),e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a
},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split
(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&
(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser
.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?
B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&
(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e
.ready())}),e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i
,j,k,l,m,n=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g
),h==="array"?n(g):h==="function"&&(!a.unique||!p.has(g))&&c.push(g)},o=function(
b,f){f=f||[],e=!a.memory||[b,f],i=!0,j=!0,m=k||0,k=0,l=c.length;for(;c&&m<l;m++)if(
c[m].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}j=!1,c&&(a.once?e===!0?p.disable(
):c=[]:d&&d.length&&(e=d.shift(),p.fireWith(e[0],e[1])))},p={add:function(){if(c)
{var a=c.length;n(arguments),j?l=c.length:e&&e!==!0&&(k=a,o(e[0],e[1]))}return this
},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0
;f<c.length;f++)if(b[d]===c[f]){j&&f<=l&&(l--,f<=m&&m--),c.splice(f--,1);if(a.unique
)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===
c[b])return!0}return!1},empty:function(){return c=[],this},disable:function(){return c=
d=e=b,this},disabled:function(){return!c},lock:function(){return d=b,(!e||e===!0)&&
p.disable(),this},locked:function(){return!d},fireWith:function(b,c){return d&&(j?
a.once||d.push([b,c]):(!a.once||!e)&&o(b,c)),this},fire:function(){return p.fireWith
(this,arguments),this},fired:function(){return!!i}};return p};var i=[].slice;f.extend
({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"
),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add
,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected
:c.fired,then:function(a,b,c){return i.done(a).fail(b).progress(c),this},always:function(
){return i.done.apply(i,arguments).fail.apply(i,arguments),this},pipe:function(a,
b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress
:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){
g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d
.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise
:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise(
{}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;return i.done(function(
){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock)
,a&&a.call(i,i),i},when:function(a){function l(a){return function(c){b[a]=arguments
.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}function m(a){return function(
b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}var b=i.call(
arguments,0),c=0,d=b.length,e=new Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise
)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction
(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}
else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,
g,h,i,j,k,l,m,n,o,p=c.createElement("div"),q=c.documentElement;p.setAttribute("className"
,"t"),p.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>"
,d=p.getElementsByTagName("*"),e=p.getElementsByTagName("a")[0];if(!d||!d.length||!
e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option"))
,i=p.getElementsByTagName("input")[0],b={leadingWhitespace:p.firstChild.nodeType===3
,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName
("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute
("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat
,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:p.className!=="t",
enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode
(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles
:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1
,reliableMarginRight:!0,pixelMargin:!0},f.boxModel=b.boxModel=c.compatMode==="CSS1Compat"
,i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!
h.disabled;try{delete p.test}catch(r){b.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&
p.fireEvent&&(p.attachEvent("onclick",function(){b.noCloneEvent=!1}),p.cloneNode(!0
).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type"
,"radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),i.setAttribute
("name","t"),p.appendChild(i),j=c.createDocumentFragment(),j.appendChild(p.lastChild
),b.checkClone=j.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.
checked,j.removeChild(i),j.appendChild(p);if(p.attachEvent)for(n in{submit:1,change
:1,focusin:1})m="on"+n,o=m in p,o||(p.setAttribute(m,"return;"),o=typeof p[m]=="function"
),b[n+"Bubbles"]=o;return j.removeChild(p),j=g=h=p=i=null,f(function(){var d,e,g,
h,i,j,l,m,n,q,r,s,t,u=c.getElementsByTagName("body")[0];if(!u)return;m=1,t="padding:0;margin:0;border:"
,r="position:absolute;top:0;left:0;width:1px;height:1px;",s=t+"0;visibility:hidden;"
,n="style='"+r+t+"5px solid #000;",q="<div "+n+"display:block;'><div style='"+t+"0;display:block;overflow:hidden;'></div></div>"+"<table "+
n+"' cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",d=c.createElement
("div"),d.style.cssText=s+"width:0;height:0;position:static;top:0;margin-top:"+m+"px"
,u.insertBefore(d,u.firstChild),p=c.createElement("div"),d.appendChild(p),p.innerHTML="<table><tr><td style='"+
t+"0;display:none'></td><td>t</td></tr></table>",k=p.getElementsByTagName("td"),o=
k[0].offsetHeight===0,k[0].style.display="",k[1].style.display="none",b.reliableHiddenOffsets=
o&&k[0].offsetHeight===0,a.getComputedStyle&&(p.innerHTML="",l=c.createElement("div"
),l.style.width="0",l.style.marginRight="0",p.style.width="2px",p.appendChild(l),
b.reliableMarginRight=(parseInt((a.getComputedStyle(l,null)||{marginRight:0}).marginRight
,10)||0)===0),typeof p.style.zoom!="undefined"&&(p.innerHTML="",p.style.width=p.style
.padding="1px",p.style.border=0,p.style.overflow="hidden",p.style.display="inline"
,p.style.zoom=1,b.inlineBlockNeedsLayout=p.offsetWidth===3,p.style.display="block"
,p.style.overflow="visible",p.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=
p.offsetWidth!==3),p.style.cssText=r+s,p.innerHTML=q,e=p.firstChild,g=e.firstChild
,i=e.nextSibling.firstChild.firstChild,j={doesNotAddBorder:g.offsetTop!==5,doesAddBorderForTableAndCells
:i.offsetTop===5},g.style.position="fixed",g.style.top="20px",j.fixedPosition=g.offsetTop===20||
g.offsetTop===15,g.style.position=g.style.top="",e.style.overflow="hidden",e.style
.position="relative",j.subtractsBorderForOverflowNotVisible=g.offsetTop===-5,j.doesNotIncludeMarginInBodyOffset=
u.offsetTop!==m,a.getComputedStyle&&(p.style.marginTop="1%",b.pixelMargin=(a.getComputedStyle
(p,null)||{marginTop:0}).marginTop!=="1%"),typeof d.style.zoom!="undefined"&&(d.style
.zoom=1),u.removeChild(d),l=p=d=null,f.extend(b,j)}),b}();var j=/^(?:\{.*\}|\[.*\])$/
,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random
()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
,applet:!0},hasData:function(a){return a=a.nodeType?f.cache[a[f.expando]]:a[f.expando
],!!a&&!m(a)},data:function(a,c,d,e){if(!f.acceptData(a))return;var g,h,i,j=f.expando
,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";
if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[
n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function"
)e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);return g=h=m[n],e||(h.data||
(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d),o&&!h[c]?g.events:(k?(i=h[c],i==
null&&(i=h[f.camelCase(c)])):i=h,i)},removeData:function(a,b,c){if(!f.acceptData(
a))return;var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;
if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in 
d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject
)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!
j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?
a.removeAttribute(h):a[h]=null)},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData
:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&
a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e
,g,h,i,j=this[0],k=0,m=null;if(a===b){if(this.length){m=f.data(j);if(j.nodeType===1&&!
f._data(j,"parsedAttrs")){g=j.attributes;for(i=g.length;k<i;k++)h=g[k].name,h.indexOf
("data-")===0&&(h=f.camelCase(h.substring(5)),l(j,h,m[h]));f._data(j,"parsedAttrs"
,!0)}}return m}return typeof a=="object"?this.each(function(){f.data(this,a)}):(d=
a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",f.access(this,function(c){if(c===
b)return m=this.triggerHandler("getData"+e,[d[0]]),m===b&&j&&(m=f.data(j,a),m=l(j
,a,m)),m===b&&d[1]?this.data(d[0]):m;d[1]=c,this.each(function(){var b=f(this);b.
triggerHandler("setData"+e,d),f.data(this,a,c),b.triggerHandler("changeData"+e,d)
})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(
function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx"
)+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,
b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,
e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a)return b=
(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c
)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift
(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data
(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,
b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){var d=2
;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?f.queue(this[0],a
):c===b?this:this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&
f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this
,a)})},delay:function(a,b){return a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx",this.queue
(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue
:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--
h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(
),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data
(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks
("once memory"),!0))h++,l.add(m);return m(),d.promise(c)}});var o=/[\n\t\r]/g,p=/\s+/
,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i
,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i
,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access
(this,f.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(
){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,f.prop,a,b,arguments
.length>1)},removeProp:function(a){return a=f.propFix[a]||a,this.each(function(){
try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i
;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this
.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++
){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+
e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" "
);e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;
if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b
,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=
this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" "
).replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=
f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof 
a,d=typeof b=="boolean";return f.isFunction(a)?this.each(function(c){f(this).toggleClass
(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e
,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass"
:"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data
(this,"__className__",this.className),this.className=this.className||a===!1?"":f.
_data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this
.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace
(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];if(!
arguments.length){if(g)return c=f.valHooks[g.type]||f.valHooks[g.nodeName.toLowerCase
()],c&&"get"in c&&(d=c.get(g,"value"))!==b?d:(d=g.value,typeof d=="string"?d.replace
(q,""):d==null?"":d);return}return e=f.isFunction(a),this.each(function(d){var g=
f(this),h;if(this.nodeType!==1)return;e?h=a.call(this,d,g.val()):h=a,h==null?h=""
:typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":
a+""})),c=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()];if(!c||!
("set"in c)||c.set(this,h,"value")===b)this.value=h})}}),f.extend({valHooks:{option
:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}}
,select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one"
;if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&
(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode
.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push
(b)}}return j&&!h.length&&i.length?f(i[g]).val():h},set:function(a,b){var c=f.makeArray
(b);return f(a).find("option").each(function(){this.selected=f.inArray(f(this).val
(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{val:!0,css:!0,html:!0,text
:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType
;if(!a||j===3||j===8||j===2)return;if(e&&c in f.attrFn)return f(a)[c](d);if(typeof 
a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.
toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr
(a,c);return}return h&&"set"in h&&i&&(g=h.set(a,d,c))!==b?g:(a.setAttribute(c,""+
d),d)}return h&&"get"in h&&i&&(g=h.get(a,c))!==null?g:(g=a.getAttribute(c),g===null?
b:g)},removeAttr:function(a,b){var c,d,e,g,h,i=0;if(b&&a.nodeType===1){d=b.toLowerCase
().split(p),g=d.length;for(;i<g;i++)e=d[i],e&&(c=f.propFix[e]||e,h=u.test(e),h||f
.attr(a,e,""),a.removeAttribute(v?e:c),h&&c in a&&(a[c]=!1))}},attrHooks:{type:{set
:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed"
);else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value
;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return w&&
f.nodeName(a,"button")?w.get(a,b):b in a?a.value:null},set:function(a,b,c){if(w&&
f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex"
,readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing
:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap
:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(
a,c,d){var e,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;return h=i!==1||!
f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]),d!==b?g&&"set"in g&&(e=g.set
(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]},propHooks:{tabIndex
:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt
(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.
tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof 
e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:
function(a,b,c){var d;return b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&
(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},v||(y={name:!0,id:!0,coords:!0},
w=f.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(y
[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode
(d);return e||(e=c.createAttribute(d),a.setAttributeNode(e)),e.nodeValue=b+""}},f
.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks
[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"
),c}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"
),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"
],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute
(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(
a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+
b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{
get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode
.selectedIndex),null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support
.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a
){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"
],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray
(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i
,A=/^([^\.]*)?(?:\.(.+))?$/,B=/(?:^|\s)hover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/
,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=
function(a){var b=F.exec(a);return b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new 
RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)")),b},H=function(a,b){var c=a.attributes||{};return(!
b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||
b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:
a.replace(B,"mouseenter$1 mouseleave$1")};f.event={add:function(a,c,d,e,g){var h,
i,j,k,l,m,n,o,p,q,r,s;if(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))
return;d.handler&&(p=d,d=p.handler,g=p.selector),d.guid||(d.guid=f.guid++),j=h.events
,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f=="undefined"||!!
a&&f.event.triggered===a.type?b:f.event.dispatch.apply(i.elem,arguments)},i.elem=
a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=
(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType
)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid
:d.guid,selector:g,quick:g&&G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[
],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.
addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call
(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):
r.push(o),f.event.global[m]=!0}a=null},global:{},remove:function(a,b,c,d,e){var g=
f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!g||!(o=g.events))return;b=f.
trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i
[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[
j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+
l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)
s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||
d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--
,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown
.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=
g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))},customEvent:{getData
:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.
nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered
))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."
),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;
c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0
,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+
i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache
;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0)
;return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c
),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p
.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+
h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&
r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped
();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"
),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault
();return c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.
ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[
h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],
n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n)),c.result
}return},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events"
)||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!
c.namespace,i=f.event.special[c.type]||{},j=[],k,l,m,n,o,p,q,r,s,t,u;g[0]=c,c.delegateTarget=
this;if(i.preDispatch&&i.preDispatch.call(this,c)===!1)return;if(e&&(!c.button||c
.type!=="click")){n=f(this),n.context=this.ownerDocument||this;for(m=c.target;m!=
this;m=m.parentNode||this)if(m.disabled!==!0){p={},r=[],n[0]=m;for(k=0;k<e;k++)s=
d[k],t=s.selector,p[t]===b&&(p[t]=s.quick?H(m,s.quick):n.is(t)),p[t]&&r.push(s);r
.length&&j.push({elem:m,matches:r})}}d.length>e&&j.push({elem:this,matches:d.slice
(e)});for(k=0;k<j.length&&!c.isPropagationStopped();k++){q=j[k],c.currentTarget=q
.elem;for(l=0;l<q.matches.length&&!c.isImmediatePropagationStopped();l++){s=q.matches
[l];if(h||!c.namespace&&!s.namespace||c.namespace_re&&c.namespace_re.test(s.namespace
))c.data=s.data,c.handleObj=s,o=((f.event.special[s.origType]||{}).handle||s.handler
).apply(q.elem,g),o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation
()))}}return i.postDispatch&&i.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which"
.split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter
:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode
),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement"
.split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;return a.pageX==
null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,
a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0
),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0
)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==
b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[f.expando])return a;var d
,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props
;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];return a.target||(a.target=g.srcElement||
c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=
a.ctrlKey),h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble
:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{
setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(
a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b
,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.
event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault
()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(
a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&
a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new 
f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=
a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault(
)?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this
[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=
K;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1
},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent
;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation
:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented
:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover"
,mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType
:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!
d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.
type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(
){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit"
,function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form
:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){a._submit_bubble=!0
}),d._submit_attached=!0)})},postDispatch:function(a){a._submit_bubble&&(delete a
._submit_bubble,this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode
,a,!0))},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this
,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(
){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event
.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&
(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!
a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1
}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName
)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!
a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b.
_change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||
a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply
(this,arguments)},teardown:function(){return f.event.remove(this,"._change"),z.test
(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"
},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0
)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown
:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a
,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(i in 
a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof 
c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;return g===1&&
(h=e,e=function(a){return f().off(a),h.apply(this,arguments)},e.guid=h.guid||(h.guid=
f.guid++)),this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d
){return this.on(a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj
){var e=a.handleObj;return f(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace
:e.origType,e.selector,e.handler),this}if(typeof a=="object"){for(var g in a)this
.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&
(d=J),this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this
.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,
b,c){return f(this.context).on(a,this.selector,b,c),this},die:function(a,b){return f
(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this
.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"
):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger
(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,
this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(
c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;return f._data(this,"lastToggle"+
a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b
.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter
(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu"
.split(" "),function(a,b){f.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments
.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(
b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event
.mouseHooks)}),function(){function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++)
{var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!
g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}
}function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1
;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j
.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0
){k=j;break}}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g
,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,
h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){return i=!1,0});var m=function(
b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof 
b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec("")
,i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&
p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[
w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift())
,j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match
.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)
[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length!==1||w[0]!=="~"&&
w[0]!=="+"||!d.parentNode?d:d.parentNode,v),j=n.expr?m.filter(n.expr,n.set):n.set
,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q=""
,r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call
(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;
k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j
[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e
);return l&&(m(l,h,e,f),m.uniqueSort(e)),e};m.uniqueSort=function(a){if(u){h=i,a.
sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},
m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){
return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)
return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(
a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(
j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}return d||
(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]),{set
:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0
]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a
))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\"
)continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=
i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^
i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o
.match[h],"");if(!g)return[];break}}if(a===q){if(g!=null)break;m.error(a)}q=a}return s
},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a
)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9||d===11
){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string"
)return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(
d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c))
;return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/
,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/
,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/
,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/
,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(
a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}
},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&
(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling
)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter
(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test
(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName
.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===
b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!
l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,
b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),
g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!
c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b
){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]
);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c
.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined"
)return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+
a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&
(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[
g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a
[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error
(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a
[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2
]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);return a[0]=e++,a},ATTR:function(
a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");return!f&&o.attrMap[g]&&(a[1]=o.attrMap
[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" "),a},PSEUDO
:function(b,c,d,e,f){if(b[1]==="not"){if(!((a.exec(b[3])||"").length>1||/^\w/.test
(b[3]))){var g=m.filter(b[3],c,d,!0^f);return d||e.push.apply(e,g),!1}b[3]=m(b[3]
,null,null,c)}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b
},POS:function(a){return a.unshift(!0),a}},filters:{enabled:function(a){return a.
disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked
:function(a){return a.checked===!0},selected:function(a){return a.parentNode&&a.parentNode
.selectedIndex,a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(
a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(
a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=
a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},
radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox
:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file
:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password
:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit
:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===
a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.
type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button"
)&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===
a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test
(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters
:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1}
,even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(
a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c
[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d
){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||
a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=
g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c
,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling
)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling
)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0
;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=
l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}return j=a.nodeIndex-e,c===0?
j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id"
)===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName
.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"
))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle
[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==
null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?
(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr
(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1
},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=
o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new 
RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp
(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));o.match.globalPOS=
p;var s=function(a,b){return a=Array.prototype.slice.call(a,0),b?(b.push.apply(b,
a),b):a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType
}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype
.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push
(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?
u=function(a,b){return a===b?(h=!0,0):!a.compareDocumentPosition||!b.compareDocumentPosition?
a.compareDocumentPosition?-1:1:a.compareDocumentPosition(b)&4?-1:1}:(u=function(a
,b){if(a===b)return h=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b
.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v
(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(
j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e
[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(
a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling
}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime
(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild
),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!
d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&
e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof 
a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&
c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement
("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&
(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=
[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>"
,a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute
("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),
a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__"
;b.innerHTML="<p class='TEST'></p>";if(b.querySelectorAll&&b.querySelectorAll(".TEST"
).length===0)return;m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/
.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName
(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName
(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3
]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3
])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&
e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode
,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=
e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(
r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a
[e];b=null}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||
a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"
),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=
function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(
e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&
a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}
}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>"
;if(!a.getElementsByClassName||a.getElementsByClassName("e").length===0)return;a.
lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order
.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!
c)return b.getElementsByClassName(a[1])},a=null}(),c.documentElement.contains?m.contains=
function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?
m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(
){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?
b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;
while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative
[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.
attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr
.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains
}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=
Array.prototype.slice,Q=f.expr.match.globalPOS,R={children:!0,contents:!0,next:!0
,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f
(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0
});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length
,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]
){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(
function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not
:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this
.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?
Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter
(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1
;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector
:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?
f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index
(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||
g===b||g.nodeType===11)break}}return c=c.length>1?f.unique(c):c,this.pushStack(c,"closest"
,a)},index:function(a){return a?typeof a=="string"?f.inArray(this[0],f(a)):f.inArray
(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:
function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=
f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf
:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=
a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a
,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next
:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling"
)},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f
.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling"
,c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(
a){return f.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return f
.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||
a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(
c,d){var e=f.map(this,b,c);return L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter
(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&
(e=e.reverse()),this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter
:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?f.find.matchesSelector(
b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(
g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g)
,g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++
e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&
a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
,W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig
,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ab=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i
,cb=new RegExp("<(?:"+V+")[\\s/>]","i"),db=/checked\s*(?:[^=]|=\s*.checked.)/i,eb=/\/(java|ecma)script/i
,fb=/^\s*<!(?:\[CDATA\[|\-\-)/,gb={option:[1,"<select multiple='multiple'>","</select>"
],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>"
,"</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>"
,"</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},hb=U(c);gb.
optgroup=gb.option,gb.tbody=gb.tfoot=gb.colgroup=gb.caption=gb.thead,gb.th=gb.td,
f.support.htmlSerialize||(gb._default=[1,"div<div>","</div>"]),f.fn.extend({text:
function(a){return f.access(this,function(a){return a===b?f.text(this):this.empty
().append((this[0]&&this[0].ownerDocument||c).createTextNode(a))},null,a,arguments
.length)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this
).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone
(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(
a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this
},wrapInner:function(a){return f.isFunction(a)?this.each(function(b){f(this).wrapInner
(a.call(this,b))}):this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll
(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(
c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().
each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end
()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&
this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(
a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(
this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode
.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);return a.push
.apply(a,this.toArray()),this.pushStack(a,"before",arguments)}},after:function(){
if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this
.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack
(this,"after",arguments);return a.push.apply(a,f.clean(arguments)),a}},remove:function(
a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&
(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode
.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++
){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild
(b.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a
:b,this.map(function(){return f.clone(this,a,b)})},html:function(a){return f.access
(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?
c.innerHTML.replace(W,""):null;if(typeof a=="string"&&!ab.test(a)&&(f.support.leadingWhitespace||!
X.test(a))&&!gb[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>"
);try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(f.cleanData(c.getElementsByTagName
("*")),c.innerHTML=a);c=0}catch(g){}}c&&this.empty().append(a)},null,a,arguments.
length)},replaceWith:function(a){return this[0]&&this[0].parentNode?f.isFunction(
a)?this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))
}):(typeof a!="string"&&(a=f(a).detach()),this.each(function(){var b=this.nextSibling
,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})):this.length?
this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a)
{return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f
.support.checkClone&&arguments.length===3&&typeof j=="string"&&db.test(j))return this
.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each
(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(
this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes
.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes
.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0
,m=this.length,n=m-1;l<m;l++)d.call(c?ib(this[l],g):this[l],e.cacheable||m>1&&l<n?
f.clone(h,!0,!0):h)}k.length&&f.each(k,function(a,b){b.src?f.ajax({type:"GET",global
:!1,url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b
.innerHTML||"").replace(fb,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)})
}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];return b&&b[0]&&
(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof 
j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!
db.test(j))&&(f.support.html5Clone||!cb.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&
(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1
),{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend"
,insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b
){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&
g.nodeType===11&&g.childNodes.length===1&&e.length===1)return e[b](this[0]),this;
for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](
j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(
a,b,c){var d,e,g,h=f.support.html5Clone||f.isXMLDoc(a)||!cb.test("<"+a.nodeName+">"
)?a.cloneNode(!0):ob(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&
(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){kb(a,h),d=lb(a),e=lb(h);for(g=0
;d[g];++g)e[g]&&kb(d[g],e[g])}if(b){jb(a,h);if(c){d=lb(a),e=lb(h);for(g=0;d[g];++
g)jb(d[g],e[g])}}return d=e=null,h},clean:function(a,b,d,e){var g,h,i,j=[];b=b||c
,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||
c);for(var k=0,l;(l=a[k])!=null;k++){typeof l=="number"&&(l+="");if(!l)continue;if(typeof 
l=="string")if(!_.test(l))l=b.createTextNode(l);else{l=l.replace(Y,"<$1></$2>");var m=
(Z.exec(l)||["",""])[1].toLowerCase(),n=gb[m]||gb._default,o=n[0],p=b.createElement
("div"),q=hb.childNodes,r;b===c?hb.appendChild(p):U(b).appendChild(p),p.innerHTML=
n[1]+l+n[2];while(o--)p=p.lastChild;if(!f.support.tbody){var s=$.test(l),t=m==="table"&&!
s?p.firstChild&&p.firstChild.childNodes:n[1]==="<table>"&&!s?p.childNodes:[];for(
i=t.length-1;i>=0;--i)f.nodeName(t[i],"tbody")&&!t[i].childNodes.length&&t[i].parentNode
.removeChild(t[i])}!f.support.leadingWhitespace&&X.test(l)&&p.insertBefore(b.createTextNode
(X.exec(l)[0]),p.firstChild),l=p.childNodes,p&&(p.parentNode.removeChild(p),q.length>0&&
(r=q[q.length-1],r&&r.parentNode&&r.parentNode.removeChild(r)))}var u;if(!f.support
.appendChecked)if(l[0]&&typeof (u=l.length)=="number")for(i=0;i<u;i++)nb(l[i]);else nb
(l);l.nodeType?j.push(l):j=f.merge(j,l)}if(d){g=function(a){return!a.type||eb.test
(a.type)};for(k=0;j[k];k++){h=j[k];if(e&&f.nodeName(h,"script")&&(!h.type||eb.test
(h.type)))e.push(h.parentNode?h.parentNode.removeChild(h):h);else{if(h.nodeType===1
){var v=f.grep(h.getElementsByTagName("script"),g);j.splice.apply(j,[k+1,0].concat
(v))}d.appendChild(h)}}}return j},cleanData:function(a){var b,c,d=f.cache,e=f.event
.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&
f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events
){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&
(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f
.expando),delete d[c]}}}});var pb=/alpha\([^)]*\)/i,qb=/opacity=([^)]*)/,rb=/([A-Z]|^ms)/g
,sb=/^[\-+]?(?:\d*\.)?\d+$/i,tb=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,ub=/^([\-+])=([\-+.\de]+)/
,vb=/^margin/,wb={position:"absolute",visibility:"hidden",display:"block"},xb=["Top"
,"Right","Bottom","Left"],yb,zb,Ab;f.fn.css=function(a,c){return f.access(this,function(
a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)},a,c,arguments.length>1)},f.extend(
{cssHooks:{opacity:{get:function(a,b){if(b){var c=yb(a,"opacity");return c===""?"1"
:c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0
,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat"
:"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.
style)return;var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||
i;if(d===b)return k&&"get"in k&&(g=k.get(a,!1,e))!==b?g:j[c];h=typeof d,h==="string"&&
(g=ub.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||
h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in 
k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}},css:function(a,c,d){var e,g;c=f.camelCase
(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in 
g&&(e=g.get(a,!0,d))!==b)return e;if(yb)return yb(a,c)},swap:function(a,b,c){var d=
{},e,f;for(f in b)d[f]=a.style[f],a.style[f]=b[f];e=c.call(a);for(f in b)a.style[
f]=d[f];return e}}),f.curCSS=f.css,c.defaultView&&c.defaultView.getComputedStyle&&
(zb=function(a,b){var c,d,e,g,h=a.style;return b=b.replace(rb,"-$1").toLowerCase(
),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue
(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b))),!f.
support.pixelMargin&&e&&vb.test(b)&&tb.test(c)&&(g=h.width,h.width=c,c=e.width,h.
width=g),c}),c.documentElement.currentStyle&&(Ab=function(a,b){var c,d,e,f=a.currentStyle&&
a.currentStyle[b],g=a.style;return f==null&&g&&(e=g[b])&&(f=e),tb.test(f)&&(c=g.left
,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left
),g.left=b==="fontSize"?"1em":f,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=
d)),f===""?"auto":f}),yb=zb||Ab,f.each(["height","width"],function(a,b){f.cssHooks
[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0?Bb(a,b,d):f.swap(a,wb,function(
){return Bb(a,b,d)})},set:function(a,b){return sb.test(b)?b+"px":b}}}),f.support.
opacity||(f.cssHooks.opacity={get:function(a,b){return qb.test((b&&a.currentStyle?
a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""}
,set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+
b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(pb,""
))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=pb.test(g)?g
.replace(pb,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks
.marginRight={get:function(a,b){return f.swap(a,{display:"inline-block"},function(
){return b?yb(a,"margin-right"):a.style.marginRight})}})}),f.expr&&f.expr.filters&&
(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&
c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"
))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)})
,f.each({margin:"",padding:"",border:"Width"},function(a,b){f.cssHooks[a+b]={expand
:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+
xb[d]+b]=e[d]||e[d-2]||e[0];return f}}});var Cb=/%20/g,Db=/\[\]$/,Eb=/\r?\n/g,Fb=/#.*$/
,Gb=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,Hb=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i
,Ib=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,Jb=/^(?:GET|HEAD)$/
,Kb=/^\/\//,Lb=/\?/,Mb=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,Nb=/^(?:select|textarea)/i
,Ob=/\s+/,Pb=/([?&])_=[^&]*/,Qb=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
Rb=f.fn.load,Sb={},Tb={},Ub,Vb,Wb=["*/"]+["*"];try{Ub=e.href}catch(Xb){Ub=c.createElement
("a"),Ub.href="",Ub=Ub.href}Vb=Qb.exec(Ub.toLowerCase())||[],f.fn.extend({load:function(
a,c,d){if(typeof a!="string"&&Rb)return Rb.apply(this,arguments);if(!this.length)
return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e
)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings
.traditional),h="POST"));var i=this;return f.ajax({url:a,type:h,dataType:"html",data
:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){
c=a}),i.html(g?f("<div>").append(c.replace(Mb,"")).find(g):c)),d&&i.each(d,[c,b,a
])}}),this},serialize:function(){return f.param(this.serializeArray())},serializeArray
:function(){return this.map(function(){return this.elements?f.makeArray(this.elements
):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||Nb.test
(this.nodeName)||Hb.test(this.type))}).map(function(a,b){var c=f(this).val();return c==
null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(Eb
,"\r\n")}}):{name:b.name,value:c.replace(Eb,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend"
.split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get"
,"post"],function(a,c){f[c]=function(a,d,e,g){return f.isFunction(d)&&(g=g||e,e=d
,d=b),f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(
a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json"
)},ajaxSetup:function(a,b){return b?$b(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),$b
(a,b),a},ajaxSettings:{url:Ub,isLocal:Ib.test(Vb[1]),global:!0,type:"GET",contentType
:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts
:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript"
,"*":Wb},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML"
,text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.
parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Yb
(Sb),ajaxTransport:Yb(Tb),ajax:function(a,c){function w(a,c,l,m){if(s===2)return;
s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?ac(d,v,
l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"
))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified"
,o=!0;else try{r=bc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;
if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e
,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success"
:"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--
f.active||f.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d=
f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event
,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p
,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase
();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?
n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=Gb.exec
(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType
:function(a){return s||(d.mimeType=a),this},abort:function(a){return a=a||"abort"
,p&&p.abort(a),w(0,a),this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=
i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=
a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(Fb,"").replace
(Kb,Vb[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(Ob),d.crossDomain==
null&&(r=Qb.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==Vb[1]&&r[2]==Vb[2
]&&(r[3]||(r[1]==="http:"?80:443))==(Vb[3]||(Vb[1]==="http:"?80:443)))),d.data&&d
.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),Zb(
Sb,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!
Jb.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent)
{d.data&&(d.url+=(Lb.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1
){var x=f.now(),y=d.url.replace(Pb,"$1_="+x);d.url=y+(y===d.url?(Lb.test(d.url)?"&"
:"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader
("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader
("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match"
,f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]
]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+Wb+"; q=0.01":""):d.accepts
["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(!d.beforeSend||d.
beforeSend.call(e,v,d)!==!1&&s!==2){for(u in{success:1,error:1,complete:1})v[u](d
[u]);p=Zb(Tb,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend"
,[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout
));try{s=1,p.send(l,w)}catch(z){if(!(s<2))throw z;w(-1,z)}}return v}return v.abort
(),!1},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length
]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional
);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,
this.value)});else for(var g in a)_b(g,a[g],c,e);return d.join("&").replace(Cb,"+"
)}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),dc=/(\=)\?(&|$)|\?\?/i
;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++
}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=typeof b.data=="string"&&/^application\/x\-www\-form\-urlencoded/
.test(b.contentType);if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(dc.test(b.url)||
e&&dc.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback
():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";return b.jsonp!==!1&&(j=
j.replace(dc,l),b.url===j&&(e&&(k=k.replace(dc,l)),b.data===k&&(j+=(/\?/.test(j)?"&"
:"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(
){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){
return g||f.error(h+" was not called"),g[0]},b.dataTypes[0]="json","script"}}),f.
ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a)
{return f.globalEval(a),a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(
a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",
function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||
c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async"
,a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=
function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=
d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success"
)},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ec=
a.ActiveXObject?function(){for(var a in gc)gc[a](0,1)}:!1,fc=0,gc;f.ajaxSettings.
xhr=a.ActiveXObject?function(){return!this.isLocal&&hc()||ic()}:hc,function(a){f.
extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr(
)),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors)
{var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url
,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in 
c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType
(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest"
);try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||
null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=
f.noop,ec&&delete gc[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders
(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n);try{m.text=h.responseText
}catch(a){}try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200
:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?
d():(i=++fc,ec&&(gc||(gc={},f(a).unload(ec)),gc[i]=d),h.onreadystatechange=d)},abort
:function(){d&&d(0,1)}}}});var jc={},kc,lc,mc=/^(?:toggle|show|hide)$/,nc=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i
,oc,pc=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width"
,"marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],qc;f.fn.extend
({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(tc("show",3),a,b,c
);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data
(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),(e===""&&f.css(d,"display")==="none"||!
f.contains(d.ownerDocument.documentElement,d))&&f._data(d,"olddisplay",uc(d.nodeName
)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none"
)d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(
a||a===0)return this.animate(tc("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<
h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay"
)&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none"
);return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean"
;return f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||
d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()
}):this.animate(tc("toggle",3),a,b,c),this},fadeTo:function(a,b,c,d){return this.
filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate
:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),
c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o,p,q;b.animatedProperties=
{};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]);if((k=f.cssHooks[g
])&&"expand"in k){l=k.expand(a[g]),delete a[g];for(i in l)i in a||(a[i]=l[i])}}for(
g in a){h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties
[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!
d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.
style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&
f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||uc(this.nodeName
)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&
(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],mc.test(h)?
(q=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),q?(f._data(this,"toggle"+
i,q==="show"?"hide":"show"),j[q]()):j[h]()):(m=nc.exec(h),n=j.cur(),m?(o=parseFloat
(m[2]),p=m[3]||(f.cssNumber[i]?"":"px"),p!=="px"&&(f.style(this,i,(o||1)+p),n=(o||1
)/j.cur()*n,f.style(this,i,n+p)),m[1]&&(o=(m[1]==="-="?-1:1)*o+n),j.custom(n,o,p)
):j.custom(n,h,""));return!0}var e=f.speed(b,c,d);return f.isEmptyObject(a)?this.
each(e.complete,[!1]):(a=f.extend({},a),e.queue===!1?this.each(g):this.queue(e.queue
,g))},stop:function(a,c,d){return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this
.queue(a||"fx",[]),this.each(function(){function h(a,b,c){var e=b[c];f.removeData
(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(
a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g
[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||
e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue
(this,a)})}}),f.each({slideDown:tc("show",1),slideUp:tc("hide",1),slideToggle:tc("toggle"
,1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"
}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend
({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!
c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=
f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.
speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx"
;return d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this
),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)},d},easing:{linear:function(
a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+.5}},timers:[],fx:function(
a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype=
{update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this
),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this
.prop]==null||!!this.elem.style&&this.elem.style[this.prop]!=null){var a,b=f.css(
this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a}return this
.elem[this.prop]},custom:function(a,c,d){function h(a){return e.step(a)}var e=this
,g=f.fx;this.startTime=qc||rc(),this.end=c,this.now=this.start=a,this.pos=this.state=0
,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue
,h.elem=this.elem,h.saveState=function(){f._data(e.elem,"fxshow"+e.prop)===b&&(e.
options.hide?f._data(e.elem,"fxshow"+e.prop,e.start):e.options.show&&f._data(e.elem
,"fxshow"+e.prop,e.end))},h()&&f.timers.push(h)&&!oc&&(oc=setInterval(g.tick,g.interval
))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig
[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom
(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur
()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this
.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this
.custom(this.cur(),0)},step:function(a){var b,c,d,e=qc||rc(),g=!0,h=this.elem,i=this
.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1
,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i
.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&
f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f
(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b])
,f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1
,d.call(h))}return!1}return i.duration==Infinity?this.now=e:(c=e-this.startTime,this
.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state
,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update
(),!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=
b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(
){clearInterval(oc),oc=null},speeds:{slow:600,fast:200,_default:400},step:{opacity
:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&
a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now
}}}),f.each(pc.concat.apply([],pc),function(a,b){b.indexOf("margin")&&(f.fx.step[
b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)})}),f.expr&&f.expr.filters&&
(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===
b.elem}).length});var vc,wc=/^t(?:able|d|h)$/i,xc=/^(?:body|html)$/i;"getBoundingClientRect"in 
c.documentElement?vc=function(a,b,c,d){try{d=a.getBoundingClientRect()}catch(e){}
if(!d||!f.contains(c,a))return d?{top:d.top,left:d.left}:{top:0,left:0};var g=b.body
,h=yc(b),i=c.clientTop||g.clientTop||0,j=c.clientLeft||g.clientLeft||0,k=h.pageYOffset||
f.support.boxModel&&c.scrollTop||g.scrollTop,l=h.pageXOffset||f.support.boxModel&&
c.scrollLeft||g.scrollLeft,m=d.top+k-i,n=d.left+l-j;return{top:m,left:n}}:vc=function(
a,b,c){var d,e=a.offsetParent,g=a,h=b.body,i=b.defaultView,j=i?i.getComputedStyle
(a,null):a.currentStyle,k=a.offsetTop,l=a.offsetLeft;while((a=a.parentNode)&&a!==
h&&a!==c){if(f.support.fixedPosition&&j.position==="fixed")break;d=i?i.getComputedStyle
(a,null):a.currentStyle,k-=a.scrollTop,l-=a.scrollLeft,a===e&&(k+=a.offsetTop,l+=
a.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!
wc.test(a.nodeName))&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth
)||0),g=e,e=a.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"&&
(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),j=d}if(j
.position==="relative"||j.position==="static")k+=h.offsetTop,l+=h.offsetLeft;return f
.support.fixedPosition&&j.position==="fixed"&&(k+=Math.max(c.scrollTop,h.scrollTop
),l+=Math.max(c.scrollLeft,h.scrollLeft)),{top:k,left:l}},f.fn.offset=function(a)
{if(arguments.length)return a===b?this:this.each(function(b){f.offset.setOffset(this
,a,b)});var c=this[0],d=c&&c.ownerDocument;return d?c===d.body?f.offset.bodyOffset
(c):vc(c,d,d.documentElement):null},f.offset={bodyOffset:function(a){var b=a.offsetTop
,c=a.offsetLeft;return f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat
(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0),{top:b,left:c}
},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative"
);var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed"
)&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(
m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=
null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.
using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null
;var a=this[0],b=this.offsetParent(),c=this.offset(),d=xc.test(b[0].nodeName)?{top
:0,left:0}:b.offset();return c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat
(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=
parseFloat(f.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}
},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body
;while(a&&!xc.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a
})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/
.test(c);f.fn[a]=function(e){return f.access(this,function(a,e,g){var h=yc(a);if(
g===b)return h?c in h?h[c]:f.support.boxModel&&h.document.documentElement[e]||h.document
.body[e]:a[e];h?h.scrollTo(d?f(h).scrollLeft():g,d?g:f(h).scrollTop()):a[e]=g},a,
e,arguments.length,null)}}),f.each({Height:"height",Width:"width"},function(a,c){
var d="client"+a,e="scroll"+a,g="offset"+a;f.fn["inner"+a]=function(){var a=this[0
];return a?a.style?parseFloat(f.css(a,c,"padding")):this[c]():null},f.fn["outer"+
a]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,c,a?"margin":"border"
)):this[c]():null},f.fn[c]=function(a){return f.access(this,function(a,c,h){var i
,j,k,l;if(f.isWindow(a))return i=a.document,j=i.documentElement[d],f.support.boxModel&&
j||i.body&&i.body[d]||j;if(a.nodeType===9)return i=a.documentElement,i[d]>=i[e]?i
[d]:Math.max(a.body[e],i[e],a.body[g],i[g]);if(h===b)return k=f.css(a,c),l=parseFloat
(k),f.isNumeric(l)?l:k;f(a).css(c,h)},c,a,arguments.length,null)}}),a.jQuery=a.$=
f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(
){return f})}(window),function(){var a=this,b=a._,c={},d=Array.prototype,e=Object
.prototype,f=Function.prototype,g=d.push,h=d.slice,i=d.concat,j=e.toString,k=e.hasOwnProperty
,l=d.forEach,m=d.map,n=d.reduce,o=d.reduceRight,p=d.filter,q=d.every,r=d.some,s=d
.indexOf,t=d.lastIndexOf,u=Array.isArray,v=Object.keys,w=f.bind,x=function(a){if(
a instanceof x)return a;if(!(this instanceof x))return new x(a);this._wrapped=a};typeof 
exports!="undefined"?(typeof module!="undefined"&&module.exports&&(exports=module
.exports=x),exports._=x):a._=x,x.VERSION="1.4.3";var y=x.each=x.forEach=function(
a,b,d){if(a==null)return;if(l&&a.forEach===l)a.forEach(b,d);else if(a.length===+a
.length){for(var e=0,f=a.length;e<f;e++)if(b.call(d,a[e],e,a)===c)return}else for(
var g in a)if(x.has(a,g)&&b.call(d,a[g],g,a)===c)return};x.map=x.collect=function(
a,b,c){var d=[];return a==null?d:m&&a.map===m?a.map(b,c):(y(a,function(a,e,f){d[d
.length]=b.call(c,a,e,f)}),d)};var z="Reduce of empty array with no initial value"
;x.reduce=x.foldl=x.inject=function(a,b,c,d){var e=arguments.length>2;a==null&&(a=
[]);if(n&&a.reduce===n)return d&&(b=x.bind(b,d)),e?a.reduce(b,c):a.reduce(b);y(a,
function(a,f,g){e?c=b.call(d,c,a,f,g):(c=a,e=!0)});if(!e)throw new TypeError(z);return c
},x.reduceRight=x.foldr=function(a,b,c,d){var e=arguments.length>2;a==null&&(a=[]
);if(o&&a.reduceRight===o)return d&&(b=x.bind(b,d)),e?a.reduceRight(b,c):a.reduceRight
(b);var f=a.length;if(f!==+f){var g=x.keys(a);f=g.length}y(a,function(h,i,j){i=g?
g[--f]:--f,e?c=b.call(d,c,a[i],i,j):(c=a[i],e=!0)});if(!e)throw new TypeError(z);
return c},x.find=x.detect=function(a,b,c){var d;return A(a,function(a,e,f){if(b.call
(c,a,e,f))return d=a,!0}),d},x.filter=x.select=function(a,b,c){var d=[];return a==
null?d:p&&a.filter===p?a.filter(b,c):(y(a,function(a,e,f){b.call(c,a,e,f)&&(d[d.length
]=a)}),d)},x.reject=function(a,b,c){return x.filter(a,function(a,d,e){return!b.call
(c,a,d,e)},c)},x.every=x.all=function(a,b,d){b||(b=x.identity);var e=!0;return a==
null?e:q&&a.every===q?a.every(b,d):(y(a,function(a,f,g){if(!(e=e&&b.call(d,a,f,g)
))return c}),!!e)};var A=x.some=x.any=function(a,b,d){b||(b=x.identity);var e=!1;
return a==null?e:r&&a.some===r?a.some(b,d):(y(a,function(a,f,g){if(e||(e=b.call(d
,a,f,g)))return c}),!!e)};x.contains=x.include=function(a,b){return a==null?!1:s&&
a.indexOf===s?a.indexOf(b)!=-1:A(a,function(a){return a===b})},x.invoke=function(
a,b){var c=h.call(arguments,2);return x.map(a,function(a){return(x.isFunction(b)?
b:a[b]).apply(a,c)})},x.pluck=function(a,b){return x.map(a,function(a){return a[b
]})},x.where=function(a,b){return x.isEmpty(b)?[]:x.filter(a,function(a){for(var c in 
b)if(b[c]!==a[c])return!1;return!0})},x.max=function(a,b,c){if(!b&&x.isArray(a)&&
a[0]===+a[0]&&a.length<65535)return Math.max.apply(Math,a);if(!b&&x.isEmpty(a))return-
Infinity;var d={computed:-Infinity,value:-Infinity};return y(a,function(a,e,f){var g=
b?b.call(c,a,e,f):a;g>=d.computed&&(d={value:a,computed:g})}),d.value},x.min=function(
a,b,c){if(!b&&x.isArray(a)&&a[0]===+a[0]&&a.length<65535)return Math.min.apply(Math
,a);if(!b&&x.isEmpty(a))return Infinity;var d={computed:Infinity,value:Infinity};
return y(a,function(a,e,f){var g=b?b.call(c,a,e,f):a;g<d.computed&&(d={value:a,computed
:g})}),d.value},x.shuffle=function(a){var b,c=0,d=[];return y(a,function(a){b=x.random
(c++),d[c-1]=d[b],d[b]=a}),d};var B=function(a){return x.isFunction(a)?a:function(
b){return b[a]}};x.sortBy=function(a,b,c){var d=B(b);return x.pluck(x.map(a,function(
a,b,e){return{value:a,index:b,criteria:d.call(c,a,b,e)}}).sort(function(a,b){var c=
a.criteria,d=b.criteria;if(c!==d){if(c>d||c===void 0)return 1;if(c<d||d===void 0)
return-1}return a.index<b.index?-1:1}),"value")};var C=function(a,b,c,d){var e={}
,f=B(b||x.identity);return y(a,function(b,g){var h=f.call(c,b,g,a);d(e,h,b)}),e};
x.groupBy=function(a,b,c){return C(a,b,c,function(a,b,c){(x.has(a,b)?a[b]:a[b]=[]
).push(c)})},x.countBy=function(a,b,c){return C(a,b,c,function(a,b){x.has(a,b)||(
a[b]=0),a[b]++})},x.sortedIndex=function(a,b,c,d){c=c==null?x.identity:B(c);var e=
c.call(d,b),f=0,g=a.length;while(f<g){var h=f+g>>>1;c.call(d,a[h])<e?f=h+1:g=h}return f
},x.toArray=function(a){return a?x.isArray(a)?h.call(a):a.length===+a.length?x.map
(a,x.identity):x.values(a):[]},x.size=function(a){return a==null?0:a.length===+a.
length?a.length:x.keys(a).length},x.first=x.head=x.take=function(a,b,c){return a==
null?void 0:b!=null&&!c?h.call(a,0,b):a[0]},x.initial=function(a,b,c){return h.call
(a,0,a.length-(b==null||c?1:b))},x.last=function(a,b,c){return a==null?void 0:b!=
null&&!c?h.call(a,Math.max(a.length-b,0)):a[a.length-1]},x.rest=x.tail=x.drop=function(
a,b,c){return h.call(a,b==null||c?1:b)},x.compact=function(a){return x.filter(a,x
.identity)};var D=function(a,b,c){return y(a,function(a){x.isArray(a)?b?g.apply(c
,a):D(a,b,c):c.push(a)}),c};x.flatten=function(a,b){return D(a,b,[])},x.without=function(
a){return x.difference(a,h.call(arguments,1))},x.uniq=x.unique=function(a,b,c,d){
x.isFunction(b)&&(d=c,c=b,b=!1);var e=c?x.map(a,c,d):a,f=[],g=[];return y(e,function(
c,d){if(b?!d||g[g.length-1]!==c:!x.contains(g,c))g.push(c),f.push(a[d])}),f},x.union=
function(){return x.uniq(i.apply(d,arguments))},x.intersection=function(a){var b=
h.call(arguments,1);return x.filter(x.uniq(a),function(a){return x.every(b,function(
b){return x.indexOf(b,a)>=0})})},x.difference=function(a){var b=i.apply(d,h.call(
arguments,1));return x.filter(a,function(a){return!x.contains(b,a)})},x.zip=function(
){var a=h.call(arguments),b=x.max(x.pluck(a,"length")),c=new Array(b);for(var d=0
;d<b;d++)c[d]=x.pluck(a,""+d);return c},x.object=function(a,b){if(a==null)return{
};var c={};for(var d=0,e=a.length;d<e;d++)b?c[a[d]]=b[d]:c[a[d][0]]=a[d][1];return c
},x.indexOf=function(a,b,c){if(a==null)return-1;var d=0,e=a.length;if(c){if(typeof 
c!="number")return d=x.sortedIndex(a,b),a[d]===b?d:-1;d=c<0?Math.max(0,e+c):c}if(
s&&a.indexOf===s)return a.indexOf(b,c);for(;d<e;d++)if(a[d]===b)return d;return-1
},x.lastIndexOf=function(a,b,c){if(a==null)return-1;var d=c!=null;if(t&&a.lastIndexOf===
t)return d?a.lastIndexOf(b,c):a.lastIndexOf(b);var e=d?c:a.length;while(e--)if(a[
e]===b)return e;return-1},x.range=function(a,b,c){arguments.length<=1&&(b=a||0,a=0
),c=arguments[2]||1;var d=Math.max(Math.ceil((b-a)/c),0),e=0,f=new Array(d);while(
e<d)f[e++]=a,a+=c;return f};var E=function(){};x.bind=function(a,b){var c,d;if(a.
bind===w&&w)return w.apply(a,h.call(arguments,1));if(!x.isFunction(a))throw new TypeError
;return c=h.call(arguments,2),d=function(){if(this instanceof d){E.prototype=a.prototype
;var e=new E;E.prototype=null;var f=a.apply(e,c.concat(h.call(arguments)));return Object
(f)===f?f:e}return a.apply(b,c.concat(h.call(arguments)))}},x.bindAll=function(a)
{var b=h.call(arguments,1);return b.length==0&&(b=x.functions(a)),y(b,function(b)
{a[b]=x.bind(a[b],a)}),a},x.memoize=function(a,b){var c={};return b||(b=x.identity
),function(){var d=b.apply(this,arguments);return x.has(c,d)?c[d]:c[d]=a.apply(this
,arguments)}},x.delay=function(a,b){var c=h.call(arguments,2);return setTimeout(function(
){return a.apply(null,c)},b)},x.defer=function(a){return x.delay.apply(x,[a,1].concat
(h.call(arguments,1)))},x.throttle=function(a,b){var c,d,e,f,g=0,h=function(){g=new 
Date,e=null,f=a.apply(c,d)};return function(){var i=new Date,j=b-(i-g);return c=this
,d=arguments,j<=0?(clearTimeout(e),e=null,g=i,f=a.apply(c,d)):e||(e=setTimeout(h,
j)),f}},x.debounce=function(a,b,c){var d,e;return function(){var f=this,g=arguments
,h=function(){d=null,c||(e=a.apply(f,g))},i=c&&!d;return clearTimeout(d),d=setTimeout
(h,b),i&&(e=a.apply(f,g)),e}},x.once=function(a){var b=!1,c;return function(){return b?
c:(b=!0,c=a.apply(this,arguments),a=null,c)}},x.wrap=function(a,b){return function(
){var c=[a];return g.apply(c,arguments),b.apply(this,c)}},x.compose=function(){var a=
arguments;return function(){var b=arguments;for(var c=a.length-1;c>=0;c--)b=[a[c]
.apply(this,b)];return b[0]}},x.after=function(a,b){return a<=0?b():function(){if(--
a<1)return b.apply(this,arguments)}},x.keys=v||function(a){if(a!==Object(a))throw new 
TypeError("Invalid object");var b=[];for(var c in a)x.has(a,c)&&(b[b.length]=c);return b
},x.values=function(a){var b=[];for(var c in a)x.has(a,c)&&b.push(a[c]);return b}
,x.pairs=function(a){var b=[];for(var c in a)x.has(a,c)&&b.push([c,a[c]]);return b
},x.invert=function(a){var b={};for(var c in a)x.has(a,c)&&(b[a[c]]=c);return b},
x.functions=x.methods=function(a){var b=[];for(var c in a)x.isFunction(a[c])&&b.push
(c);return b.sort()},x.extend=function(a){return y(h.call(arguments,1),function(b
){if(b)for(var c in b)a[c]=b[c]}),a},x.pick=function(a){var b={},c=i.apply(d,h.call
(arguments,1));return y(c,function(c){c in a&&(b[c]=a[c])}),b},x.omit=function(a)
{var b={},c=i.apply(d,h.call(arguments,1));for(var e in a)x.contains(c,e)||(b[e]=
a[e]);return b},x.defaults=function(a){return y(h.call(arguments,1),function(b){if(
b)for(var c in b)a[c]==null&&(a[c]=b[c])}),a},x.clone=function(a){return x.isObject
(a)?x.isArray(a)?a.slice():x.extend({},a):a},x.tap=function(a,b){return b(a),a};var F=
function(a,b,c,d){if(a===b)return a!==0||1/a==1/b;if(a==null||b==null)return a===
b;a instanceof x&&(a=a._wrapped),b instanceof x&&(b=b._wrapped);var e=j.call(a);if(
e!=j.call(b))return!1;switch(e){case"[object String]":return a==String(b);case"[object Number]"
:return a!=+a?b!=+b:a==0?1/a==1/b:a==+b;case"[object Date]":case"[object Boolean]"
:return+a==+b;case"[object RegExp]":return a.source==b.source&&a.global==b.global&&
a.multiline==b.multiline&&a.ignoreCase==b.ignoreCase}if(typeof a!="object"||typeof 
b!="object")return!1;var f=c.length;while(f--)if(c[f]==a)return d[f]==b;c.push(a)
,d.push(b);var g=0,h=!0;if(e=="[object Array]"){g=a.length,h=g==b.length;if(h)while(
g--)if(!(h=F(a[g],b[g],c,d)))break}else{var i=a.constructor,k=b.constructor;if(i!==
k&&!(x.isFunction(i)&&i instanceof i&&x.isFunction(k)&&k instanceof k))return!1;for(
var l in a)if(x.has(a,l)){g++;if(!(h=x.has(b,l)&&F(a[l],b[l],c,d)))break}if(h){for(
l in b)if(x.has(b,l)&&!(g--))break;h=!g}}return c.pop(),d.pop(),h};x.isEqual=function(
a,b){return F(a,b,[],[])},x.isEmpty=function(a){if(a==null)return!0;if(x.isArray(
a)||x.isString(a))return a.length===0;for(var b in a)if(x.has(a,b))return!1;return!0
},x.isElement=function(a){return!!a&&a.nodeType===1},x.isArray=u||function(a){return j
.call(a)=="[object Array]"},x.isObject=function(a){return a===Object(a)},y(["Arguments"
,"Function","String","Number","Date","RegExp"],function(a){x["is"+a]=function(b){
return j.call(b)=="[object "+a+"]"}}),x.isArguments(arguments)||(x.isArguments=function(
a){return!!a&&!!x.has(a,"callee")}),typeof /./!="function"&&(x.isFunction=function(
a){return typeof a=="function"}),x.isFinite=function(a){return isFinite(a)&&!isNaN
(parseFloat(a))},x.isNaN=function(a){return x.isNumber(a)&&a!=+a},x.isBoolean=function(
a){return a===!0||a===!1||j.call(a)=="[object Boolean]"},x.isNull=function(a){return a===
null},x.isUndefined=function(a){return a===void 0},x.has=function(a,b){return k.call
(a,b)},x.noConflict=function(){return a._=b,this},x.identity=function(a){return a
},x.times=function(a,b,c){var d=Array(a);for(var e=0;e<a;e++)d[e]=b.call(c,e);return d
},x.random=function(a,b){return b==null&&(b=a,a=0),a+(0|Math.random()*(b-a+1))};var G=
{escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"
}};G.unescape=x.invert(G.escape);var H={escape:new RegExp("["+x.keys(G.escape).join
("")+"]","g"),unescape:new RegExp("("+x.keys(G.unescape).join("|")+")","g")};x.each
(["escape","unescape"],function(a){x[a]=function(b){return b==null?"":(""+b).replace
(H[a],function(b){return G[a][b]})}}),x.result=function(a,b){if(a==null)return null
;var c=a[b];return x.isFunction(c)?c.call(a):c},x.mixin=function(a){y(x.functions
(a),function(b){var c=x[b]=a[b];x.prototype[b]=function(){var a=[this._wrapped];return g
.apply(a,arguments),M.call(this,c.apply(x,a))}})};var I=0;x.uniqueId=function(a){
var b=""+ ++I;return a?a+b:b},x.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate
:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var J=/(.)^/,K={"'":"'","\\":"\\","\r"
:"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},L=/\\|'|\r|\n|\t|\u2028|\u2029/g
;x.template=function(a,b,c){c=x.defaults({},c,x.templateSettings);var d=new RegExp
([(c.escape||J).source,(c.interpolate||J).source,(c.evaluate||J).source].join("|"
)+"|$","g"),e=0,f="__p+='";a.replace(d,function(b,c,d,g,h){return f+=a.slice(e,h)
.replace(L,function(a){return"\\"+K[a]}),c&&(f+="'+\n((__t=("+c+"))==null?'':_.escape(__t))+\n'"
),d&&(f+="'+\n((__t=("+d+"))==null?'':__t)+\n'"),g&&(f+="';\n"+g+"\n__p+='"),e=h+
b.length,b}),f+="';\n",c.variable||(f="with(obj||{}){\n"+f+"}\n"),f="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+
f+"return __p;\n";try{var g=new Function(c.variable||"obj","_",f)}catch(h){throw h
.source=f,h}if(b)return g(b,x);var i=function(a){return g.call(this,a,x)};return i
.source="function("+(c.variable||"obj")+"){\n"+f+"}",i},x.chain=function(a){return x
(a).chain()};var M=function(a){return this._chain?x(a).chain():a};x.mixin(x),y(["pop"
,"push","reverse","shift","sort","splice","unshift"],function(a){var b=d[a];x.prototype
[a]=function(){var c=this._wrapped;return b.apply(c,arguments),(a=="shift"||a=="splice"
)&&c.length===0&&delete c[0],M.call(this,c)}}),y(["concat","join","slice"],function(
a){var b=d[a];x.prototype[a]=function(){return M.call(this,b.apply(this._wrapped,
arguments))}}),x.extend(x.prototype,{chain:function(){return this._chain=!0,this}
,value:function(){return this._wrapped}})}.call(this),function(){var a=this,b=a.Backbone
,c=[],d=c.push,e=c.slice,f=c.splice,g;typeof exports!="undefined"?g=exports:g=a.Backbone=
{},g.VERSION="0.9.9";var h=a._;!h&&typeof require!="undefined"&&(h=require("underscore"
)),g.$=a.jQuery||a.Zepto||a.ender,g.noConflict=function(){return a.Backbone=b,this
},g.emulateHTTP=!1,g.emulateJSON=!1;var i=/\s+/,j=function(a,b,c,d){if(!c)return!0
;if(typeof c=="object")for(var e in c)a[b].apply(a,[e,c[e]].concat(d));else{if(!i
.test(c))return!0;var f=c.split(i);for(var g=0,h=f.length;g<h;g++)a[b].apply(a,[f
[g]].concat(d))}},k=function(a,b,c){var d,e=-1,f=b.length;switch(c.length){case 0
:while(++e<f)(d=b[e]).callback.call(d.ctx);return;case 1:while(++e<f)(d=b[e]).callback
.call(d.ctx,c[0]);return;case 2:while(++e<f)(d=b[e]).callback.call(d.ctx,c[0],c[1
]);return;case 3:while(++e<f)(d=b[e]).callback.call(d.ctx,c[0],c[1],c[2]);return;
default:while(++e<f)(d=b[e]).callback.apply(d.ctx,c)}},l=g.Events={on:function(a,
b,c){if(!j(this,"on",a,[b,c])||!b)return this;this._events||(this._events={});var d=
this._events[a]||(this._events[a]=[]);return d.push({callback:b,context:c,ctx:c||
this}),this},once:function(a,b,c){if(!j(this,"once",a,[b,c])||!b)return this;var d=
this,e=h.once(function(){d.off(a,e),b.apply(this,arguments)});return e._callback=
b,this.on(a,e,c),this},off:function(a,b,c){var d,e,f,g,i,k,l,m;if(!this._events||!
j(this,"off",a,[b,c]))return this;if(!a&&!b&&!c)return this._events={},this;g=a?[
a]:h.keys(this._events);for(i=0,k=g.length;i<k;i++){a=g[i];if(d=this._events[a]){
f=[];if(b||c)for(l=0,m=d.length;l<m;l++)e=d[l],(b&&b!==(e.callback._callback||e.callback
)||c&&c!==e.context)&&f.push(e);this._events[a]=f}}return this},trigger:function(
a){if(!this._events)return this;var b=e.call(arguments,1);if(!j(this,"trigger",a,
b))return this;var c=this._events[a],d=this._events.all;return c&&k(this,c,b),d&&
k(this,d,arguments),this},listenTo:function(a,b,c){var d=this._listeners||(this._listeners=
{}),e=a._listenerId||(a._listenerId=h.uniqueId("l"));return d[e]=a,a.on(b,c||this
,this),this},stopListening:function(a,b,c){var d=this._listeners;if(!d)return;if(
a)a.off(b,c,this),!b&&!c&&delete d[a._listenerId];else{for(var e in d)d[e].off(null
,null,this);this._listeners={}}return this}};l.bind=l.on,l.unbind=l.off,h.extend(
g,l);var m=g.Model=function(a,b){var c,d=a||{};this.cid=h.uniqueId("c"),this.changed=
{},this.attributes={},this._changes=[],b&&b.collection&&(this.collection=b.collection
),b&&b.parse&&(d=this.parse(d)),(c=h.result(this,"defaults"))&&h.defaults(d,c),this
.set(d,{silent:!0}),this._currentAttributes=h.clone(this.attributes),this._previousAttributes=
h.clone(this.attributes),this.initialize.apply(this,arguments)};h.extend(m.prototype
,l,{changed:null,idAttribute:"id",initialize:function(){},toJSON:function(a){return h
.clone(this.attributes)},sync:function(){return g.sync.apply(this,arguments)},get
:function(a){return this.attributes[a]},escape:function(a){return h.escape(this.get
(a))},has:function(a){return this.get(a)!=null},set:function(a,b,c){var d,e;if(a==
null)return this;h.isObject(a)?(e=a,c=b):(e={})[a]=b;var f=c&&c.silent,g=c&&c.unset
;if(!this._validate(e,c))return!1;this.idAttribute in e&&(this.id=e[this.idAttribute
]);var i=this.attributes;for(d in e)b=e[d],g?delete i[d]:i[d]=b,this._changes.push
(d,b);return this._hasComputed=!1,f||this.change(c),this},unset:function(a,b){return this
.set(a,void 0,h.extend({},b,{unset:!0}))},clear:function(a){var b={};for(var c in 
this.attributes)b[c]=void 0;return this.set(b,h.extend({},a,{unset:!0}))},fetch:function(
a){a=a?h.clone(a):{},a.parse===void 0&&(a.parse=!0);var b=this,c=a.success;return a
.success=function(d,e,f){if(!b.set(b.parse(d),a))return!1;c&&c(b,d,a)},this.sync("read"
,this,a)},save:function(a,b,c){var d,e,f;a==null||h.isObject(a)?(d=a,c=b):a!=null&&
((d={})[a]=b),c=c?h.clone(c):{};if(c.wait){if(d&&!this._validate(d,c))return!1;e=
h.clone(this.attributes)}var g=h.extend({},c,{silent:!0});if(d&&!this.set(d,c.wait?
g:c))return!1;if(!d&&!this._validate(null,c))return!1;var i=this,j=c.success;c.success=
function(a,b,e){f=!0;var g=i.parse(a);c.wait&&(g=h.extend(d||{},g));if(!i.set(g,c
))return!1;j&&j(i,a,c)};var k=this.isNew()?"create":c.patch?"patch":"update";k=="patch"&&
(c.attrs=d);var l=this.sync(k,this,c);return!f&&c.wait&&(this.clear(g),this.set(e
,g)),l},destroy:function(a){a=a?h.clone(a):{};var b=this,c=a.success,d=function()
{b.trigger("destroy",b,b.collection,a)};a.success=function(e){(a.wait||b.isNew())&&
d(),c&&c(b,e,a)};if(this.isNew())return a.success(),!1;var e=this.sync("delete",this
,a);return a.wait||d(),e},url:function(){var a=h.result(this,"urlRoot")||h.result
(this.collection,"url")||F();return this.isNew()?a:a+(a.charAt(a.length-1)==="/"?""
:"/")+encodeURIComponent(this.id)},parse:function(a){return a},clone:function(){return new 
this.constructor(this.attributes)},isNew:function(){return this.id==null},change:
function(a){var b=this._changing;this._changing=!0;var c=this._computeChanges(!0)
;this._pending=!!c.length;for(var d=c.length-2;d>=0;d-=2)this.trigger("change:"+c
[d],this,c[d+1],a);if(b)return this;while(this._pending)this._pending=!1,this.trigger
("change",this,a),this._previousAttributes=h.clone(this.attributes);return this._changing=!1
,this},hasChanged:function(a){return this._hasComputed||this._computeChanges(),a==
null?!h.isEmpty(this.changed):h.has(this.changed,a)},changedAttributes:function(a
){if(!a)return this.hasChanged()?h.clone(this.changed):!1;var b,c=!1,d=this._previousAttributes
;for(var e in a){if(h.isEqual(d[e],b=a[e]))continue;(c||(c={}))[e]=b}return c},_computeChanges
:function(a){this.changed={};var b={},c=[],d=this._currentAttributes,e=this._changes
;for(var f=e.length-2;f>=0;f-=2){var g=e[f],h=e[f+1];if(b[g])continue;b[g]=!0;if(
d[g]!==h){this.changed[g]=h;if(!a)continue;c.push(g,h),d[g]=h}}return a&&(this._changes=
[]),this._hasComputed=!0,c},previous:function(a){return a==null||!this._previousAttributes?
null:this._previousAttributes[a]},previousAttributes:function(){return h.clone(this
._previousAttributes)},_validate:function(a,b){if(!this.validate)return!0;a=h.extend
({},this.attributes,a);var c=this.validate(a,b);return c?(b&&b.error&&b.error(this
,c,b),this.trigger("error",this,c,b),!1):!0}});var n=g.Collection=function(a,b){b||
(b={}),b.model&&(this.model=b.model),b.comparator!==void 0&&(this.comparator=b.comparator
),this._reset(),this.initialize.apply(this,arguments),a&&this.reset(a,h.extend({silent
:!0},b))};h.extend(n.prototype,l,{model:m,initialize:function(){},toJSON:function(
a){return this.map(function(b){return b.toJSON(a)})},sync:function(){return g.sync
.apply(this,arguments)},add:function(a,b){var c,e,g,i,j,k,l=b&&b.at,m=(b&&b.sort)==
null?!0:b.sort;a=h.isArray(a)?a.slice():[a];for(c=a.length-1;c>=0;c--){if(!(i=this
._prepareModel(a[c],b))){this.trigger("error",this,a[c],b),a.splice(c,1);continue}
a[c]=i,j=i.id!=null&&this._byId[i.id];if(j||this._byCid[i.cid]){b&&b.merge&&j&&(j
.set(i.attributes,b),k=m),a.splice(c,1);continue}i.on("all",this._onModelEvent,this
),this._byCid[i.cid]=i,i.id!=null&&(this._byId[i.id]=i)}a.length&&(k=m),this.length+=
a.length,e=[l!=null?l:this.models.length,0],d.apply(e,a),f.apply(this.models,e),k&&
this.comparator&&l==null&&this.sort({silent:!0});if(b&&b.silent)return this;while(
i=a.shift())i.trigger("add",i,this,b);return this},remove:function(a,b){var c,d,e
,f;b||(b={}),a=h.isArray(a)?a.slice():[a];for(c=0,d=a.length;c<d;c++){f=this.get(
a[c]);if(!f)continue;delete this._byId[f.id],delete this._byCid[f.cid],e=this.indexOf
(f),this.models.splice(e,1),this.length--,b.silent||(b.index=e,f.trigger("remove"
,f,this,b)),this._removeReference(f)}return this},push:function(a,b){return a=this
._prepareModel(a,b),this.add(a,h.extend({at:this.length},b)),a},pop:function(a){var b=
this.at(this.length-1);return this.remove(b,a),b},unshift:function(a,b){return a=
this._prepareModel(a,b),this.add(a,h.extend({at:0},b)),a},shift:function(a){var b=
this.at(0);return this.remove(b,a),b},slice:function(a,b){return this.models.slice
(a,b)},get:function(a){return a==null?void 0:this._byId[a.id!=null?a.id:a]||this.
_byCid[a.cid||a]},at:function(a){return this.models[a]},where:function(a){return h
.isEmpty(a)?[]:this.filter(function(b){for(var c in a)if(a[c]!==b.get(c))return!1
;return!0})},sort:function(a){if(!this.comparator)throw new Error("Cannot sort a set without a comparator"
);return h.isString(this.comparator)||this.comparator.length===1?this.models=this
.sortBy(this.comparator,this):this.models.sort(h.bind(this.comparator,this)),(!a||!
a.silent)&&this.trigger("sort",this,a),this},pluck:function(a){return h.invoke(this
.models,"get",a)},update:function(a,b){var c,d,e,f,g=[],i=[],j={},k=this.model.prototype
.idAttribute;b=h.extend({add:!0,merge:!0,remove:!0},b),b.parse&&(a=this.parse(a))
,h.isArray(a)||(a=a?[a]:[]);if(b.add&&!b.remove)return this.add(a,b);for(d=0,e=a.
length;d<e;d++)c=a[d],f=this.get(c.id||c.cid||c[k]),b.remove&&f&&(j[f.cid]=!0),(b
.add&&!f||b.merge&&f)&&g.push(c);if(b.remove)for(d=0,e=this.models.length;d<e;d++
)c=this.models[d],j[c.cid]||i.push(c);return i.length&&this.remove(i,b),g.length&&
this.add(g,b),this},reset:function(a,b){b||(b={}),b.parse&&(a=this.parse(a));for(
var c=0,d=this.models.length;c<d;c++)this._removeReference(this.models[c]);return b
.previousModels=this.models,this._reset(),a&&this.add(a,h.extend({silent:!0},b)),
b.silent||this.trigger("reset",this,b),this},fetch:function(a){a=a?h.clone(a):{},
a.parse===void 0&&(a.parse=!0);var b=this,c=a.success;return a.success=function(d
,e,f){var g=a.update?"update":"reset";b[g](d,a),c&&c(b,d,a)},this.sync("read",this
,a)},create:function(a,b){var c=this;b=b?h.clone(b):{},a=this._prepareModel(a,b);
if(!a)return!1;b.wait||c.add(a,b);var d=b.success;return b.success=function(a,b,e
){e.wait&&c.add(a,e),d&&d(a,b,e)},a.save(null,b),a},parse:function(a){return a},clone
:function(){return new this.constructor(this.models)},chain:function(){return h(this
.models).chain()},_reset:function(){this.length=0,this.models=[],this._byId={},this
._byCid={}},_prepareModel:function(a,b){if(a instanceof m)return a.collection||(a
.collection=this),a;b||(b={}),b.collection=this;var c=new this.model(a,b);return c
._validate(a,b)?c:!1},_removeReference:function(a){this===a.collection&&delete a.
collection,a.off("all",this._onModelEvent,this)},_onModelEvent:function(a,b,c,d){
if((a==="add"||a==="remove")&&c!==this)return;a==="destroy"&&this.remove(b,d),b&&
a==="change:"+b.idAttribute&&(delete this._byId[b.previous(b.idAttribute)],b.id!=
null&&(this._byId[b.id]=b)),this.trigger.apply(this,arguments)}});var o=["forEach"
,"each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect"
,"filter","select","reject","every","all","some","any","include","contains","invoke"
,"max","min","sortedIndex","toArray","size","first","head","take","initial","rest"
,"tail","last","without","indexOf","shuffle","lastIndexOf","isEmpty"];h.each(o,function(
a){n.prototype[a]=function(){var b=e.call(arguments);return b.unshift(this.models
),h[a].apply(h,b)}});var p=["groupBy","countBy","sortBy"];h.each(p,function(a){n.
prototype[a]=function(b,c){var d=h.isFunction(b)?b:function(a){return a.get(b)};return h
[a](this.models,d,c)}});var q=g.Router=function(a){a||(a={}),a.routes&&(this.routes=
a.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},r=/\((.*?)\)/g
,s=/:\w+/g,t=/\*\w+/g,u=/[\-{}\[\]+?.,\\\^$|#\s]/g;h.extend(q.prototype,l,{initialize
:function(){},route:function(a,b,c){return h.isRegExp(a)||(a=this._routeToRegExp(
a)),c||(c=this[b]),g.history.route(a,h.bind(function(d){var e=this._extractParameters
(a,d);c&&c.apply(this,e),this.trigger.apply(this,["route:"+b].concat(e)),g.history
.trigger("route",this,b,e)},this)),this},navigate:function(a,b){return g.history.
navigate(a,b),this},_bindRoutes:function(){if(!this.routes)return;var a,b=h.keys(
this.routes);while((a=b.pop())!=null)this.route(a,this.routes[a])},_routeToRegExp
:function(a){return a=a.replace(u,"\\$&").replace(r,"(?:$1)?").replace(s,"([^/]+)"
).replace(t,"(.*?)"),new RegExp("^"+a+"$")},_extractParameters:function(a,b){return a
.exec(b).slice(1)}});var v=g.History=function(){this.handlers=[],h.bindAll(this,"checkUrl"
),typeof window!="undefined"&&(this.location=window.location,this.history=window.
history)},w=/^[#\/]|\s+$/g,x=/^\/+|\/+$/g,y=/msie [\w.]+/,z=/\/$/;v.started=!1,h.
extend(v.prototype,l,{interval:50,getHash:function(a){var b=(a||this).location.href
.match(/#(.*)$/);return b?b[1]:""},getFragment:function(a,b){if(a==null)if(this._hasPushState||!
this._wantsHashChange||b){a=this.location.pathname;var c=this.root.replace(z,"");
a.indexOf(c)||(a=a.substr(c.length))}else a=this.getHash();return a.replace(w,"")
},start:function(a){if(v.started)throw new Error("Backbone.history has already been started"
);v.started=!0,this.options=h.extend({},{root:"/"},this.options,a),this.root=this
.options.root,this._wantsHashChange=this.options.hashChange!==!1,this._wantsPushState=!!
this.options.pushState,this._hasPushState=!!(this.options.pushState&&this.history&&
this.history.pushState);var b=this.getFragment(),c=document.documentMode,d=y.exec
(navigator.userAgent.toLowerCase())&&(!c||c<=7);this.root=("/"+this.root+"/").replace
(x,"/"),d&&this._wantsHashChange&&(this.iframe=g.$('<iframe src="javascript:0" tabindex="-1" />'
).hide().appendTo("body")[0].contentWindow,this.navigate(b)),this._hasPushState?g
.$(window).bind("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in 
window&&!d?g.$(window).bind("hashchange",this.checkUrl):this._wantsHashChange&&(this
._checkUrlInterval=setInterval(this.checkUrl,this.interval)),this.fragment=b;var e=
this.location,f=e.pathname.replace(/[^\/]$/,"$&/")===this.root;if(this._wantsHashChange&&
this._wantsPushState&&!this._hasPushState&&!f)return this.fragment=this.getFragment
(null,!0),this.location.replace(this.root+this.location.search+"#"+this.fragment)
,!0;this._wantsPushState&&this._hasPushState&&f&&e.hash&&(this.fragment=this.getHash
().replace(w,""),this.history.replaceState({},document.title,this.root+this.fragment+
e.search));if(!this.options.silent)return this.loadUrl()},stop:function(){g.$(window
).unbind("popstate",this.checkUrl).unbind("hashchange",this.checkUrl),clearInterval
(this._checkUrlInterval),v.started=!1},route:function(a,b){this.handlers.unshift(
{route:a,callback:b})},checkUrl:function(a){var b=this.getFragment();b===this.fragment&&
this.iframe&&(b=this.getFragment(this.getHash(this.iframe)));if(b===this.fragment
)return!1;this.iframe&&this.navigate(b),this.loadUrl()||this.loadUrl(this.getHash
())},loadUrl:function(a){var b=this.fragment=this.getFragment(a),c=h.any(this.handlers
,function(a){if(a.route.test(b))return a.callback(b),!0});return c},navigate:function(
a,b){if(!v.started)return!1;if(!b||b===!0)b={trigger:b};a=this.getFragment(a||"")
;if(this.fragment===a)return;this.fragment=a;var c=this.root+a;if(this._hasPushState
)this.history[b.replace?"replaceState":"pushState"]({},document.title,c);else{if(!
this._wantsHashChange)return this.location.assign(c);this._updateHash(this.location
,a,b.replace),this.iframe&&a!==this.getFragment(this.getHash(this.iframe))&&(b.replace||
this.iframe.document.open().close(),this._updateHash(this.iframe.location,a,b.replace
))}b.trigger&&this.loadUrl(a)},_updateHash:function(a,b,c){if(c){var d=a.href.replace
(/(javascript:|#).*$/,"");a.replace(d+"#"+b)}else a.hash="#"+b}}),g.history=new v
;var A=g.View=function(a){this.cid=h.uniqueId("view"),this._configure(a||{}),this
._ensureElement(),this.initialize.apply(this,arguments),this.delegateEvents()},B=/^(\S+)\s*(.*)$/
,C=["model","collection","el","id","attributes","className","tagName","events"];h
.extend(A.prototype,l,{tagName:"div",$:function(a){return this.$el.find(a)},initialize
:function(){},render:function(){return this},remove:function(){return this.$el.remove
(),this.stopListening(),this},make:function(a,b,c){var d=document.createElement(a
);return b&&g.$(d).attr(b),c!=null&&g.$(d).html(c),d},setElement:function(a,b){return this
.$el&&this.undelegateEvents(),this.$el=a instanceof g.$?a:g.$(a),this.el=this.$el
[0],b!==!1&&this.delegateEvents(),this},delegateEvents:function(a){if(!a&&!(a=h.result
(this,"events")))return;this.undelegateEvents();for(var b in a){var c=a[b];h.isFunction
(c)||(c=this[a[b]]);if(!c)throw new Error('Method "'+a[b]+'" does not exist');var d=
b.match(B),e=d[1],f=d[2];c=h.bind(c,this),e+=".delegateEvents"+this.cid,f===""?this
.$el.bind(e,c):this.$el.delegate(f,e,c)}},undelegateEvents:function(){this.$el.unbind
(".delegateEvents"+this.cid)},_configure:function(a){this.options&&(a=h.extend({}
,h.result(this,"options"),a)),h.extend(this,h.pick(a,C)),this.options=a},_ensureElement
:function(){if(!this.el){var a=h.extend({},h.result(this,"attributes"));this.id&&
(a.id=h.result(this,"id")),this.className&&(a["class"]=h.result(this,"className")
),this.setElement(this.make(h.result(this,"tagName"),a),!1)}else this.setElement(
h.result(this,"el"),!1)}});var D={create:"POST",update:"PUT",patch:"PATCH","delete"
:"DELETE",read:"GET"};g.sync=function(a,b,c){var d=D[a];h.defaults(c||(c={}),{emulateHTTP
:g.emulateHTTP,emulateJSON:g.emulateJSON});var e={type:d,dataType:"json"};c.url||
(e.url=h.result(b,"url")||F()),c.data==null&&b&&(a==="create"||a==="update"||a==="patch"
)&&(e.contentType="application/json",e.data=JSON.stringify(c.attrs||b.toJSON(c)))
,c.emulateJSON&&(e.contentType="application/x-www-form-urlencoded",e.data=e.data?
{model:e.data}:{});if(c.emulateHTTP&&(d==="PUT"||d==="DELETE"||d==="PATCH")){e.type="POST"
,c.emulateJSON&&(e.data._method=d);var f=c.beforeSend;c.beforeSend=function(a){a.
setRequestHeader("X-HTTP-Method-Override",d);if(f)return f.apply(this,arguments)}
}e.type!=="GET"&&!c.emulateJSON&&(e.processData=!1);var i=c.success;c.success=function(
a,d,e){i&&i(a,d,e),b.trigger("sync",b,a,c)};var j=c.error;c.error=function(a,d,e)
{j&&j(b,a,c),b.trigger("error",b,a,c)};var k=g.ajax(h.extend(e,c));return b.trigger
("request",b,k,c),k},g.ajax=function(){return g.$.ajax.apply(g.$,arguments)};var E=
function(a,b){var c=this,d;a&&h.has(a,"constructor")?d=a.constructor:d=function()
{c.apply(this,arguments)},h.extend(d,c,b);var e=function(){this.constructor=d};return e
.prototype=c.prototype,d.prototype=new e,a&&h.extend(d.prototype,a),d.__super__=c
.prototype,d};m.extend=n.extend=q.extend=A.extend=v.extend=E;var F=function(){throw new 
Error('A "url" property or function must be specified')}}.call(this);var Handlebars=
{};Handlebars.VERSION="1.0.beta.6",Handlebars.helpers={},Handlebars.partials={},Handlebars
.registerHelper=function(a,b,c){c&&(b.not=c),this.helpers[a]=b},Handlebars.registerPartial=
function(a,b){this.partials[a]=b},Handlebars.registerHelper("helperMissing",function(
a){if(arguments.length===2)return undefined;throw new Error("Could not find property '"+
a+"'")});var toString=Object.prototype.toString,functionType="[object Function]";
Handlebars.registerHelper("blockHelperMissing",function(a,b){var c=b.inverse||function(
){},d=b.fn,e="",f=toString.call(a);f===functionType&&(a=a.call(this));if(a===!0)return d
(this);if(a===!1||a==null)return c(this);if(f==="[object Array]"){if(a.length>0)for(
var g=0,h=a.length;g<h;g++)e+=d(a[g]);else e=c(this);return e}return d(a)}),Handlebars
.registerHelper("each",function(a,b){var c=b.fn,d=b.inverse,e="";if(a&&a.length>0
)for(var f=0,g=a.length;f<g;f++)e+=c(a[f]);else e=d(this);return e}),Handlebars.registerHelper
("if",function(a,b){var c=toString.call(a);return c===functionType&&(a=a.call(this
)),!a||Handlebars.Utils.isEmpty(a)?b.inverse(this):b.fn(this)}),Handlebars.registerHelper
("unless",function(a,b){var c=b.fn,d=b.inverse;return b.fn=d,b.inverse=c,Handlebars
.helpers["if"].call(this,a,b)}),Handlebars.registerHelper("with",function(a,b){return b
.fn(a)}),Handlebars.registerHelper("log",function(a){Handlebars.log(a)}),Handlebars
.Exception=function(a){var b=Error.prototype.constructor.apply(this,arguments);for(
var c in b)b.hasOwnProperty(c)&&(this[c]=b[c]);this.message=b.message},Handlebars
.Exception.prototype=new Error,Handlebars.SafeString=function(a){this.string=a},Handlebars
.SafeString.prototype.toString=function(){return this.string.toString()},function(
){var a={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},b=/&(?!\w+;)|[<>"'`]/g
,c=/[&<>"'`]/,d=function(b){return a[b]||"&amp;"};Handlebars.Utils={escapeExpression
:function(a){return a instanceof Handlebars.SafeString?a.toString():a==null||a===!1?""
:c.test(a)?a.replace(b,d):a},isEmpty:function(a){return typeof a=="undefined"?!0:
a===null?!0:a===!1?!0:Object.prototype.toString.call(a)==="[object Array]"&&a.length===0?!0
:!1}}}(),Handlebars.VM={template:function(a){var b={escapeExpression:Handlebars.Utils
.escapeExpression,invokePartial:Handlebars.VM.invokePartial,programs:[],program:function(
a,b,c){var d=this.programs[a];return c?Handlebars.VM.program(b,c):d?d:(d=this.programs
[a]=Handlebars.VM.program(b),d)},programWithDepth:Handlebars.VM.programWithDepth,
noop:Handlebars.VM.noop};return function(c,d){return d=d||{},a.call(b,Handlebars,
c,d.helpers,d.partials,d.data)}},programWithDepth:function(a,b,c){var d=Array.prototype
.slice.call(arguments,2);return function(c,e){return e=e||{},a.apply(this,[c,e.data||
b].concat(d))}},program:function(a,b){return function(c,d){return d=d||{},a(c,d.data||
b)}},noop:function(){return""},invokePartial:function(a,b,c,d,e,f){options={helpers
:d,partials:e,data:f};if(a===undefined)throw new Handlebars.Exception("The partial "+
b+" could not be found");if(a instanceof Function)return a(c,options);if(!Handlebars
.compile)throw new Handlebars.Exception("The partial "+b+" could not be compiled when running in runtime-only mode"
);return e[b]=Handlebars.compile(a),e[b](c,options)}},Handlebars.template=Handlebars
.VM.template,function(){var a;a=function(){function a(){this.options_index=0,this
.parsed=[]}return a.prototype.add_node=function(a){return a.nodeName.toUpperCase(
)==="OPTGROUP"?this.add_group(a):this.add_option(a)},a.prototype.add_group=function(
a){var b,c,d,e,f,g;b=this.parsed.length,this.parsed.push({array_index:b,group:!0,
label:$("<span />").text(a.label).html(),children:0,disabled:a.disabled}),f=a.childNodes
,g=[];for(d=0,e=f.length;d<e;d++)c=f[d],g.push(this.add_option(c,b,a.disabled));return g
},a.prototype.add_option=function(a,b,c){if(a.nodeName.toUpperCase()==="OPTION")return a
.text!==""?(b!=null&&(this.parsed[b].children+=1),this.parsed.push({array_index:this
.parsed.length,options_index:this.options_index,value:a.value,text:a.text,html:a.
innerHTML,selected:a.selected,disabled:c===!0?c:a.disabled,group_array_index:b,classes
:a.className,style:a.style.cssText})):this.parsed.push({array_index:this.parsed.length
,options_index:this.options_index,empty:!0}),this.options_index+=1},a}(),a.select_to_array=
function(b){var c,d,e,f,g;d=new a,g=b.childNodes;for(e=0,f=g.length;e<f;e++)c=g[e
],d.add_node(c);return d.parsed},this.SelectParser=a}.call(this),function(){var a
,b;b=this,a=function(){function a(a,b){this.form_field=a,this.options=b!=null?b:{
},this.set_default_values(),this.is_multiple=this.form_field.multiple,this.set_default_text
(),this.setup(),this.set_up_html(),this.register_observers(),this.finish_setup()}
return a.prototype.set_default_values=function(){var a=this;return this.click_test_action=
function(b){return a.test_active_click(b)},this.activate_action=function(b){return a
.activate_field(b)},this.active_field=!1,this.mouse_on_container=!1,this.results_showing=!1
,this.result_highlighted=null,this.result_single_selected=null,this.enable_group_select=
this.options.enable_group_select||!1,this.allow_single_deselect=this.options.allow_single_deselect!=
null&&this.form_field.options[0]!=null&&this.form_field.options[0].text===""?this
.options.allow_single_deselect:!1,this.disable_search_threshold=this.options.disable_search_threshold||0
,this.disable_search=this.options.disable_search||!1,this.search_contains=this.options
.search_contains||!1,this.choices=0,this.single_backstroke_delete=this.options.single_backstroke_delete||!1
,this.max_selected_options=this.options.max_selected_options||Infinity},a.prototype
.set_default_text=function(){return this.form_field.getAttribute("data-placeholder"
)?this.default_text=this.form_field.getAttribute("data-placeholder"):this.is_multiple?
this.default_text=this.options.placeholder_text_multiple||this.options.placeholder_text||"Select Some Options"
:this.default_text=this.options.placeholder_text_single||this.options.placeholder_text||"Select an Option"
,this.results_none_found=this.form_field.getAttribute("data-no_results_text")||this
.options.no_results_text||"No results match"},a.prototype.mouse_enter=function(){
return this.mouse_on_container=!0},a.prototype.mouse_leave=function(){return this
.mouse_on_container=!1},a.prototype.input_focus=function(a){var b=this;if(this.is_multiple
){if(!this.active_field)return setTimeout(function(){return b.container_mousedown
()},50)}else if(!this.active_field)return this.activate_field()},a.prototype.input_blur=
function(a){var b=this;if(!this.mouse_on_container)return this.active_field=!1,setTimeout
(function(){return b.blur_test()},100)},a.prototype.result_add_option=function(a)
{var b,c;return a.disabled?"":(a.dom_id=this.container_id+"_o_"+a.array_index,b=a
.selected&&this.is_multiple?[]:["active-result"],a.selected&&b.push("result-selected"
),a.group_array_index!=null&&b.push("group-option"),a.classes!==""&&b.push(a.classes
),c=a.style.cssText!==""?' style="'+a.style+'"':"",'<li id="'+a.dom_id+'" class="'+
b.join(" ")+'"'+c+">"+a.html+"</li>")},a.prototype.results_update_field=function(
){return this.is_multiple||this.results_reset_cleanup(),this.result_clear_highlight
(),this.result_single_selected=null,this.results_build()},a.prototype.results_toggle=
function(){return this.results_showing?this.results_hide():this.results_show()},a
.prototype.results_search=function(a){return this.results_showing?this.winnow_results
():this.results_show()},a.prototype.winnow_search_match=function(a,b){var c,d,e,f
,g;c=!1;if(a.test(b))c=!0;else if(b.indexOf(" ")>=0||b.indexOf("[")===0){e=b.replace
(/\[|\]/g,"").split(" ");if(e.length)for(f=0,g=e.length;f<g;f++)d=e[f],a.test(d)&&
(c=!0)}return c},a.prototype.winnow_search_highlight_match=function(a,b,c){var d,
e;return d=b.search(a),e=b.substr(0,d+c)+"</em>"+b.substr(d+c),e=e.substr(0,d)+"<em>"+
e.substr(d)},a.prototype.keyup_checker=function(a){var b,c;b=(c=a.which)!=null?c:
a.keyCode,this.search_field_scale();switch(b){case 8:if(this.is_multiple&&this.backstroke_length<1&&
this.choices>0)return this.keydown_backstroke();if(!this.pending_backstroke)return this
.result_clear_highlight(),this.results_search();break;case 13:a.preventDefault();
if(this.results_showing)return this.result_select(a);break;case 27:return this.results_showing&&
this.results_hide(),!0;case 9:case 38:case 40:case 16:case 91:case 17:break;default:
return this.results_search()}},a.prototype.generate_field_id=function(){var a;return a=
this.generate_random_id(),this.form_field.id=a,a},a.prototype.generate_random_char=
function(){var a,b,c;return a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",c=Math.floor
(Math.random()*a.length),b=a.substring(c,c+1)},a}(),b.AbstractChosen=a}.call(this
),function(){var a,b,c,d,e=Object.prototype.hasOwnProperty,f=function(a,b){function d
(){this.constructor=a}for(var c in b)e.call(b,c)&&(a[c]=b[c]);return d.prototype=
b.prototype,a.prototype=new d,a.__super__=b.prototype,a};d=this,a=jQuery,a.fn.extend
({chosen:function(c){return a.browser.msie&&(a.browser.version==="6.0"||a.browser
.version==="7.0"&&document.documentMode===7)?this:this.each(function(d){var e;e=a
(this);if(!e.hasClass("chzn-done"))return e.data("chosen",new b(this,c))})}}),b=function(
b){function e(){e.__super__.constructor.apply(this,arguments)}return f(e,b),e.prototype
.setup=function(){return this.form_field_jq=a(this.form_field),this.current_value=
this.form_field_jq.val(),this.is_rtl=this.form_field_jq.hasClass("chzn-rtl")},e.prototype
.finish_setup=function(){return this.form_field_jq.addClass("chzn-done")},e.prototype
.set_up_html=function(){var b,d,e,f;return this.container_id=this.form_field.id.length?
this.form_field.id.replace(/[^\w]/g,"_"):this.generate_field_id(),this.container_id+="_chzn"
,this.f_width=this.form_field_jq.outerWidth(),b=a("<div />",{id:this.container_id
,"class":"chzn-container"+(this.is_rtl?" chzn-rtl":""),style:"width: "+this.f_width+"px;"
}),this.is_multiple?b.html('<ul class="chzn-choices"><li class="search-field"><input type="text" value="'+
this.default_text+'" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chzn-drop" style="left:-9000px;"><ul class="chzn-results"></ul></div>'
):b.html('<a href="javascript:void(0)" class="chzn-single chzn-default" tabindex="-1"><span>'+
this.default_text+'</span><div><b></b></div></a><div class="chzn-drop" style="left:-9000px;"><div class="chzn-search"><input type="text" autocomplete="off" /></div><ul class="chzn-results"></ul></div>'
),this.form_field_jq.hide().after(b),this.container=a("#"+this.container_id),this
.container.addClass("chzn-container-"+(this.is_multiple?"multi":"single")),this.dropdown=
this.container.find("div.chzn-drop").first(),d=this.container.height(),e=this.f_width-
c(this.dropdown),this.dropdown.css({width:e+"px",top:d+"px"}),this.search_field=this
.container.find("input").first(),this.search_results=this.container.find("ul.chzn-results"
).first(),this.search_field_scale(),this.search_no_results=this.container.find("li.no-results"
).first(),this.is_multiple?(this.search_choices=this.container.find("ul.chzn-choices"
).first(),this.search_container=this.container.find("li.search-field").first()):(
this.search_container=this.container.find("div.chzn-search").first(),this.selected_item=
this.container.find(".chzn-single").first(),f=e-c(this.search_container)-c(this.search_field
),this.search_field.css({width:f+"px"})),this.results_build(),this.set_tab_index(
),this.form_field_jq.trigger("liszt:ready",{chosen:this})},e.prototype.register_observers=
function(){var a=this;return this.container.mousedown(function(b){return a.container_mousedown
(b)}),this.container.mouseup(function(b){return a.container_mouseup(b)}),this.container
.mouseenter(function(b){return a.mouse_enter(b)}),this.container.mouseleave(function(
b){return a.mouse_leave(b)}),this.search_results.mouseup(function(b){return a.search_results_mouseup
(b)}),this.search_results.mouseover(function(b){return a.search_results_mouseover
(b)}),this.search_results.mouseout(function(b){return a.search_results_mouseout(b
)}),this.form_field_jq.bind("liszt:updated",function(b){return a.results_update_field
(b)}),this.form_field_jq.bind("liszt:activate",function(b){return a.activate_field
(b)}),this.form_field_jq.bind("liszt:open",function(b){return a.container_mousedown
(b)}),this.search_field.blur(function(b){return a.input_blur(b)}),this.search_field
.keyup(function(b){return a.keyup_checker(b)}),this.search_field.keydown(function(
b){return a.keydown_checker(b)}),this.search_field.focus(function(b){return a.input_focus
(b)}),this.is_multiple?this.search_choices.click(function(b){return a.choices_click
(b)}):this.container.click(function(a){return a.preventDefault()})},e.prototype.search_field_disabled=
function(){this.is_disabled=this.form_field_jq[0].disabled;if(this.is_disabled)return this
.container.addClass("chzn-disabled"),this.search_field[0].disabled=!0,this.is_multiple||
this.selected_item.unbind("focus",this.activate_action),this.close_field();this.container
.removeClass("chzn-disabled"),this.search_field[0].disabled=!1;if(!this.is_multiple
)return this.selected_item.bind("focus",this.activate_action)},e.prototype.container_mousedown=
function(b){var c;if(!this.is_disabled)return c=b!=null?a(b.target).hasClass("search-choice-close"
):!1,b&&b.type==="mousedown"&&!this.results_showing&&b.stopPropagation(),!this.pending_destroy_click&&!
c?(this.active_field?!this.is_multiple&&b&&(a(b.target)[0]===this.selected_item[0
]||a(b.target).parents("a.chzn-single").length)&&(b.preventDefault(),this.results_toggle
()):(this.is_multiple&&this.search_field.val(""),a(document).click(this.click_test_action
),this.results_show()),this.activate_field()):this.pending_destroy_click=!1},e.prototype
.container_mouseup=function(a){if(a.target.nodeName==="ABBR"&&!this.is_disabled)return this
.results_reset(a)},e.prototype.blur_test=function(a){if(!this.active_field&&this.
container.hasClass("chzn-container-active"))return this.close_field()},e.prototype
.close_field=function(){return a(document).unbind("click",this.click_test_action)
,this.active_field=!1,this.results_hide(),this.container.removeClass("chzn-container-active"
),this.winnow_results_clear(),this.clear_backstroke(),this.show_search_field_default
(),this.search_field_scale()},e.prototype.activate_field=function(){return this.container
.addClass("chzn-container-active"),this.active_field=!0,this.search_field.val(this
.search_field.val()),this.search_field.focus()},e.prototype.test_active_click=function(
b){return a(b.target).parents("#"+this.container_id).length?this.active_field=!0:
this.close_field()},e.prototype.results_build=function(){var a,b,c,e,f;this.parsing=!0
,this.results_data=d.SelectParser.select_to_array(this.form_field),this.is_multiple&&
this.choices>0?(this.search_choices.find("li.search-choice").remove(),this.choices=0
):this.is_multiple||(this.selected_item.addClass("chzn-default").find("span").text
(this.default_text),this.disable_search||this.form_field.options.length<=this.disable_search_threshold?
this.container.addClass("chzn-container-single-nosearch"):this.container.removeClass
("chzn-container-single-nosearch")),a="",f=this.results_data;for(c=0,e=f.length;c<
e;c++)b=f[c],b.group?a+=this.result_add_group(b):b.empty||(a+=this.result_add_option
(b),b.selected&&this.is_multiple?this.choice_build(b):b.selected&&!this.is_multiple&&
(this.selected_item.removeClass("chzn-default").find("span").text(b.text),this.allow_single_deselect&&
this.single_deselect_control_build()));return this.search_field_disabled(),this.show_search_field_default
(),this.search_field_scale(),this.search_results.html(a),this.parsing=!1},e.prototype
.result_add_group=function(b){return b.disabled?"":(b.dom_id=this.container_id+"_g_"+
b.array_index,'<li id="'+b.dom_id+'" class="group-result">'+a("<div />").text(b.label
).html()+"</li>")},e.prototype.result_do_highlight=function(a){var b,c,d,e,f;if(a
.length){this.result_clear_highlight(),this.result_highlight=a,this.result_highlight
.addClass("highlighted"),d=parseInt(this.search_results.css("maxHeight"),10),f=this
.search_results.scrollTop(),e=d+f,c=this.result_highlight.position().top+this.search_results
.scrollTop(),b=c+this.result_highlight.outerHeight();if(b>=e)return this.search_results
.scrollTop(b-d>0?b-d:0);if(c<f)return this.search_results.scrollTop(c)}},e.prototype
.result_clear_highlight=function(){return this.result_highlight&&this.result_highlight
.removeClass("highlighted"),this.result_highlight=null},e.prototype.results_show=
function(){var a;if(!this.is_multiple)this.selected_item.addClass("chzn-single-with-drop"
),this.result_single_selected&&this.result_do_highlight(this.result_single_selected
);else if(this.max_selected_options<=this.choices)return this.form_field_jq.trigger
("liszt:maxselected",{chosen:this}),!1;return a=this.is_multiple?this.container.height
():this.container.height()-1,this.form_field_jq.trigger("liszt:showing_dropdown",
{chosen:this}),this.dropdown.css({top:a+"px",left:0}),this.results_showing=!0,this
.search_field.focus(),this.search_field.val(this.search_field.val()),this.winnow_results
()},e.prototype.results_hide=function(){return this.is_multiple||this.selected_item
.removeClass("chzn-single-with-drop"),this.result_clear_highlight(),this.form_field_jq
.trigger("liszt:hiding_dropdown",{chosen:this}),this.dropdown.css({left:"-9000px"
}),this.results_showing=!1},e.prototype.set_tab_index=function(a){var b;if(this.form_field_jq
.attr("tabindex"))return b=this.form_field_jq.attr("tabindex"),this.form_field_jq
.attr("tabindex",-1),this.search_field.attr("tabindex",b)},e.prototype.show_search_field_default=
function(){return this.is_multiple&&this.choices<1&&!this.active_field?(this.search_field
.val(this.default_text),this.search_field.addClass("default")):(this.search_field
.val(""),this.search_field.removeClass("default"))},e.prototype.search_results_mouseup=
function(b){var c,d,e,f,g,h;if(this.enable_group_select){e=a(b.target).hasClass("group-result"
)?a(b.target):a(b.target).parents(".group-result").first();if(e.length){d=e.nextUntil
(".group-result",".active-result");for(g=0,h=d.length;g<h;g++)c=d[g],this.result_highlight=
a(c),this.result_select({metaKey:null})}}f=a(b.target).hasClass("active-result")?
a(b.target):a(b.target).parents(".active-result").first();if(f.length)return this
.result_highlight=f,this.result_select(b),this.search_field.focus()},e.prototype.
search_results_mouseover=function(b){var c;c=a(b.target).hasClass("active-result"
)?a(b.target):a(b.target).parents(".active-result").first();if(c)return this.result_do_highlight
(c)},e.prototype.search_results_mouseout=function(b){if(a(b.target).hasClass("active-result"
))return this.result_clear_highlight()},e.prototype.choices_click=function(b){b.preventDefault
();if(this.active_field&&!a(b.target).hasClass("search-choice")&&!this.results_showing
)return this.results_show()},e.prototype.choice_build=function(b){var c,d,e,f=this
;return this.is_multiple&&this.max_selected_options<=this.choices?(this.form_field_jq
.trigger("liszt:maxselected",{chosen:this}),!1):(c=this.container_id+"_c_"+b.array_index
,this.choices+=1,b.disabled?d='<li class="search-choice search-choice-disabled" id="'+
c+'"><span>'+b.html+"</span></li>":d='<li class="search-choice" id="'+c+'"><span>'+
b.html+'</span><a href="javascript:void(0)" class="search-choice-close" rel="'+b.
array_index+'"></a></li>',this.search_container.before(d),e=a("#"+c).find("a").first
(),e.click(function(a){return f.choice_destroy_link_click(a)}))},e.prototype.choice_destroy_link_click=
function(b){return b.preventDefault(),this.is_disabled?b.stopPropagation:(this.pending_destroy_click=!0
,this.choice_destroy(a(b.target)))},e.prototype.choice_destroy=function(a){if(this
.result_deselect(a.attr("rel")))return this.choices-=1,this.show_search_field_default
(),this.is_multiple&&this.choices>0&&this.search_field.val().length<1&&this.results_hide
(),a.parents("li").first().remove()},e.prototype.results_reset=function(){this.form_field
.options[0].selected=!0,this.selected_item.find("span").text(this.default_text),this
.is_multiple||this.selected_item.addClass("chzn-default"),this.show_search_field_default
(),this.results_reset_cleanup(),this.form_field_jq.trigger("change");if(this.active_field
)return this.results_hide()},e.prototype.results_reset_cleanup=function(){return this
.current_value=this.form_field_jq.val(),this.selected_item.find("abbr").remove()}
,e.prototype.result_select=function(a){var b,c,d,e;if(this.result_highlight)return b=
this.result_highlight,c=b.attr("id"),this.result_clear_highlight(),this.is_multiple?
this.result_deactivate(b):(this.search_results.find(".result-selected").removeClass
("result-selected"),this.result_single_selected=b,this.selected_item.removeClass("chzn-default"
)),b.addClass("result-selected"),e=c.substr(c.lastIndexOf("_")+1),d=this.results_data
[e],d.selected=!0,this.form_field.options[d.options_index].selected=!0,this.is_multiple?
this.choice_build(d):(this.selected_item.find("span").first().text(d.text),this.allow_single_deselect&&
this.single_deselect_control_build()),(!a.metaKey||!this.is_multiple)&&this.results_hide
(),this.search_field.val(""),(this.is_multiple||this.form_field_jq.val()!==this.current_value
)&&this.form_field_jq.trigger("change",{selected:this.form_field.options[d.options_index
].value}),this.current_value=this.form_field_jq.val(),this.search_field_scale()},
e.prototype.result_activate=function(a){return a.addClass("active-result")},e.prototype
.result_deactivate=function(a){return a.removeClass("active-result")},e.prototype
.result_deselect=function(b){var c,d;return d=this.results_data[b],this.form_field
.options[d.options_index].disabled?!1:(d.selected=!1,this.form_field.options[d.options_index
].selected=!1,c=a("#"+this.container_id+"_o_"+b),c.removeClass("result-selected")
.addClass("active-result").show(),this.result_clear_highlight(),this.winnow_results
(),this.form_field_jq.trigger("change",{deselected:this.form_field.options[d.options_index
].value}),this.search_field_scale(),!0)},e.prototype.single_deselect_control_build=
function(){if(this.allow_single_deselect&&this.selected_item.find("abbr").length<1
)return this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'
)},e.prototype.winnow_results=function(){var b,c,d,e,f,g,h,i,j,k;this.no_results_clear
(),g=0,this.searchText=this.search_field.val()===this.default_text?"":a("<div/>")
.text(a.trim(this.search_field.val())).html(),d=this.search_contains?"":"^",this.
regex=new RegExp(d+this.searchText.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),"i"
),this.zregex=new RegExp(this.searchText.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"
),"i"),k=this.results_data;for(i=0,j=k.length;i<j;i++){c=k[i];if(!c.disabled&&!c.
empty)if(c.group)this.winnow_option_group(c);else if(!this.is_multiple||!c.selected
)b=this.winnow_search_match(this.regex,c.html),f=c.dom_id,e=a("#"+f),b||c.group_array_index!=
null&&this.results_data[c.group_array_index].search_match?(g+=1,this.searchText.length&&
b?h=this.winnow_search_highlight_match(this.zregex,c.html,this.searchText.length)
:h=c.html,e.html(h),this.result_activate(e),c.group_array_index!=null&&a("#"+this
.results_data[c.group_array_index].dom_id).css("display","list-item")):(this.result_highlight&&
f===this.result_highlight.attr("id")&&this.result_clear_highlight(),this.result_deactivate
(e))}return g<1&&this.searchText.length?this.no_results(this.searchText):this.winnow_results_set_highlight
()},e.prototype.winnow_option_group=function(b){var c;return a("#"+b.dom_id).css("display"
,"none"),b.search_match=this.winnow_search_match(this.regex,b.label),c=this.searchText
.length&&b.search_match?this.winnow_search_highlight_match(this.zregex,b.label,this
.searchText.length):b.label,a("#"+b.dom_id).html(c),b.search_match},e.prototype.winnow_results_clear=
function(){var b,c,d,e,f;this.search_field.val(""),c=this.search_results.find("li"
),f=[];for(d=0,e=c.length;d<e;d++)b=c[d],b=a(b),b.hasClass("group-result")?f.push
(b.css("display","auto")):!this.is_multiple||!b.hasClass("result-selected")?f.push
(this.result_activate(b)):f.push(void 0);return f},e.prototype.winnow_results_set_highlight=
function(){var a,b;if(!this.result_highlight){b=this.is_multiple?[]:this.search_results
.find(".result-selected.active-result"),a=b.length?b.first():this.search_results.
find(".active-result").first();if(a!=null)return this.result_do_highlight(a)}},e.
prototype.no_results=function(b){var c;return c=a('<li class="no-results">'+this.
results_none_found+' "<span></span>"</li>'),c.find("span").first().html(b),this.search_results
.append(c)},e.prototype.no_results_clear=function(){return this.search_results.find
(".no-results").remove()},e.prototype.keydown_arrow=function(){var b,c;this.result_highlight?
this.results_showing&&(c=this.result_highlight.nextAll("li.active-result").first(
),c&&this.result_do_highlight(c)):(b=this.search_results.find("li.active-result")
.first(),b&&this.result_do_highlight(a(b)));if(!this.results_showing)return this.
results_show()},e.prototype.keyup_arrow=function(){var a;if(!this.results_showing&&!
this.is_multiple)return this.results_show();if(this.result_highlight)return a=this
.result_highlight.prevAll("li.active-result"),a.length?this.result_do_highlight(a
.first()):(this.choices>0&&this.results_hide(),this.result_clear_highlight())},e.
prototype.keydown_backstroke=function(){var a;if(this.pending_backstroke)return this
.choice_destroy(this.pending_backstroke.find("a").first()),this.clear_backstroke(
);a=this.search_container.siblings("li.search-choice").last();if(a.length&&!a.hasClass
("search-choice-disabled"))return this.pending_backstroke=a,this.single_backstroke_delete?
this.keydown_backstroke():this.pending_backstroke.addClass("search-choice-focus")
},e.prototype.clear_backstroke=function(){return this.pending_backstroke&&this.pending_backstroke
.removeClass("search-choice-focus"),this.pending_backstroke=null},e.prototype.keydown_checker=
function(a){var b,c;b=(c=a.which)!=null?c:a.keyCode,this.search_field_scale(),b!==8&&
this.pending_backstroke&&this.clear_backstroke();switch(b){case 8:this.backstroke_length=
this.search_field.val().length;break;case 9:this.results_showing&&!this.is_multiple&&
this.result_select(a),this.mouse_on_container=!1;break;case 13:a.preventDefault()
;break;case 38:a.preventDefault(),this.keyup_arrow();break;case 40:this.keydown_arrow
()}},e.prototype.search_field_scale=function(){var b,c,d,e,f,g,h,i,j;if(this.is_multiple
){d=0,h=0,f="position:absolute; left: -1000px; top: -1000px; display:none;",g=["font-size"
,"font-style","font-weight","font-family","line-height","text-transform","letter-spacing"
];for(i=0,j=g.length;i<j;i++)e=g[i],f+=e+":"+this.search_field.css(e)+";";return c=
a("<div />",{style:f}),c.text(this.search_field.val()),a("body").append(c),h=c.width
()+25,c.remove(),h>this.f_width-10&&(h=this.f_width-10),this.search_field.css({width
:h+"px"}),b=this.container.height(),this.dropdown.css({top:b+"px"})}},e.prototype
.generate_random_id=function(){var b;b="sel"+this.generate_random_char()+this.generate_random_char
()+this.generate_random_char();while(a("#"+b).length>0)b+=this.generate_random_char
();return b},e}(AbstractChosen),c=function(a){var b;return b=a.outerWidth()-a.width
()},d.get_side_border_padding=c}.call(this),Date.ext={},Date.ext.util={},Date.ext
.util.xPad=function(a,b,c){a+="",typeof c=="undefined"&&(c=10);for(;parseInt(a,10
)<c&&c>1;c/=10)a=b+a;return a},Date.prototype.locale="en-GB",document.getElementsByTagName
("html")&&document.getElementsByTagName("html")[0].lang&&(Date.prototype.locale=document
.getElementsByTagName("html")[0].lang),Date.ext.locales={},Date.ext.locales.en={a
:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],A:["Sunday","Monday","Tuesday","Wednesday"
,"Thursday","Friday","Saturday"],b:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"
,"Sep","Oct","Nov","Dec"],B:["January","February","March","April","May","June","July"
,"August","September","October","November","December"],c:"%a %d %b %Y %T %Z",p:["AM"
,"PM"],P:["am","pm"],x:"%d/%m/%y",X:"%T"},Date.ext.locales["en-US"]=Date.ext.locales
.en,Date.ext.locales["en-US"].c="%a %d %b %Y %r %Z",Date.ext.locales["en-US"].x="%D"
,Date.ext.locales["en-US"].X="%r",Date.ext.locales["en-GB"]=Date.ext.locales.en,Date
.ext.locales["en-AU"]=Date.ext.locales["en-GB"],Date.ext.formats={a:function(a){return Date
.ext.locales[a.locale].a[a.getDay()]},A:function(a){return Date.ext.locales[a.locale
].A[a.getDay()]},b:function(a){return Date.ext.locales[a.locale].b[a.getMonth()]}
,B:function(a){return Date.ext.locales[a.locale].B[a.getMonth()]},c:"toLocaleString"
,C:function(a){return Date.ext.util.xPad(parseInt(a.getFullYear()/100,10),0)},d:["getDate"
,"0"],e:["getDate"," "],g:function(a){return Date.ext.util.xPad(parseInt(Date.ext
.util.G(a)/100,10),0)},G:function(a){var b=a.getFullYear(),c=parseInt(Date.ext.formats
.V(a),10),d=parseInt(Date.ext.formats.W(a),10);return d>c?b++:d===0&&c>=52&&b--,b
},H:["getHours","0"],I:function(a){var b=a.getHours()%12;return Date.ext.util.xPad
(b===0?12:b,0)},j:function(a){var b=new Date(""+a.getFullYear()+"/1/1 GMT"),c=new 
Date(""+a.getFullYear()+"/"+(a.getMonth()+1)+"/"+a.getDate()+" GMT"),d=c-b,e=parseInt
(d/6e4/60/24,10)+1;return Date.ext.util.xPad(e,0,100)},m:function(a){return Date.
ext.util.xPad(a.getMonth()+1,0)},M:["getMinutes","0"],p:function(a){return Date.ext
.locales[a.locale].p[a.getHours()>=12?1:0]},P:function(a){return Date.ext.locales
[a.locale].P[a.getHours()>=12?1:0]},S:["getSeconds","0"],u:function(a){var b=a.getDay
();return b===0?7:b},U:function(a){var b=parseInt(Date.ext.formats.j(a),10),c=6-a
.getDay(),d=parseInt((b+c)/7,10);return Date.ext.util.xPad(d,0)},V:function(a){var b=
parseInt(Date.ext.formats.W(a),10),c=(new Date(""+a.getFullYear()+"/1/1")).getDay
(),d=b+(c>4||c<=1?0:1);return d==53&&(new Date(""+a.getFullYear()+"/12/31")).getDay
()<4?d=1:d===0&&(d=Date.ext.formats.V(new Date(""+(a.getFullYear()-1)+"/12/31")))
,Date.ext.util.xPad(d,0)},w:"getDay",W:function(a){var b=parseInt(Date.ext.formats
.j(a),10),c=7-Date.ext.formats.u(a),d=parseInt((b+c)/7,10);return Date.ext.util.xPad
(d,0,10)},y:function(a){return Date.ext.util.xPad(a.getFullYear()%100,0)},Y:"getFullYear"
,z:function(a){var b=a.getTimezoneOffset(),c=Date.ext.util.xPad(parseInt(Math.abs
(b/60),10),0),d=Date.ext.util.xPad(b%60,0);return(b>0?"-":"+")+c+d},Z:function(a)
{return a.toString().replace(/^.*\(([^)]+)\)$/,"$1")},"%":function(a){return"%"}}
,Date.ext.aggregates={c:"locale",D:"%m/%d/%y",h:"%b",n:"\n",r:"%I:%M:%S %p",R:"%H:%M"
,t:"	",T:"%H:%M:%S",x:"locale",X:"locale"},Date.ext.aggregates.z=Date.ext.formats
.z(new Date),Date.ext.aggregates.Z=Date.ext.formats.Z(new Date),Date.ext.unsupported=
{},Date.prototype.strftime=function(a){this.locale in Date.ext.locales||(this.locale
.replace(/-[a-zA-Z]+$/,"")in Date.ext.locales?this.locale=this.locale.replace(/-[a-zA-Z]+$/
,""):this.locale="en-GB");var b=this;while(a.match(/%[cDhnrRtTxXzZ]/))a=a.replace
(/%([cDhnrRtTxXzZ])/g,function(a,c){var e=Date.ext.aggregates[c];return e=="locale"?
Date.ext.locales[b.locale][c]:e});var c=a.replace(/%([aAbBCdegGHIjmMpPSuUVwWyY%])/g
,function(a,c){var e=Date.ext.formats[c];return typeof e=="string"?b[e]():typeof 
e=="function"?e.call(b,b):typeof e=="object"&&typeof e[0]=="string"?Date.ext.util
.xPad(b[e[0]](),e[1]):c});return b=null,c},function(a){var b,c=function(a,b){if(typeof 
document.addEventListener!="function"&&!e.isIE8())return;var c=!1;try{c=a instanceof 
Element}catch(h){c=!!a&&c.nodeType===1}!c&&typeof a!="string"&&(b=a);var i=this,j=
i.classes,k=i.settings=e.merge(i.defaults,{attachTo:a},b||{}),l=i.container=e.make
("div",{"class":j.container}),m=i.calendars=[],n=g().day(k.weekStart),o,p=[],q,r,
s,t,u,v=[],w,x=0,y=k.months;e.isIE8()&&e.addClassName(l,"ie8"),x=7;while(x--)p.push
(n.format("ddd").substr(0,k.columnHeaderLength)),n.add("days",1);f(i);if(typeof k
.subscribe=="object")for(x in k.subscribe)k.subscribe.hasOwnProperty(x)&&i.subscribe
(x,k.subscribe[x]);i._sel=[],!k.selected||i.setSelected(k.selected,!1),k.viewStartDate?
o=g(k.viewStartDate,k.format):i._sel.length>0?o=g(i._sel[0]):o=g(),i.viewStartDate=
o.date(1);var z={past:k.months-1,"today-past":k.months-1,any:k.months>2?Math.floor
(k.months/2):0,"today-future":0,future:0}[this.settings.direction];z&&g().month()==
g(i.viewStartDate).month()&&(i.viewStartDate=g(i.viewStartDate).subtract({M:z}).date
(1));if(typeof k.blackout=="function")i.blackout=k.blackout;else if(!k.blackout)i
.blackout=function(){return!1};else{var A=d(k.blackout,k.parseSplitDelimiter);i.blackout=
function(a){a=g(a).yearDay();if(a<1||!i._sel||i._sel.length<1)return!1;var b=A.length
;while(b--)if(A[b].yearDay()===a)return!0;return!1}}i.direction=i.directions[k.direction
]?i.directions[k.direction]:i.directions.any,y=Math.max(k.months,1);while(y--){q=
e.make("div",{"class":j.calendar},l),q.setAttribute("data-cal-index",y),k.months>1&&
(y==Math.max(k.months-1,1)?e.addClassName(q,j.monthFirst):y===0?e.addClassName(q,
j.monthLast):e.addClassName(q,j.monthMiddle)),r=e.make("div",{"class":j.title},q)
,k.useYearNav||e.addClassName(r,j.disableYearNav),e.make("a",{"class":j.previousYear
},r),e.make("a",{"class":j.previousMonth},r),e.make("a",{"class":j.nextYear},r),e
.make("a",{"class":j.nextMonth},r),s=e.make("span",{"class":j.caption},r),t=e.make
("div",{"class":j.header},q),x=0;do w=e.make("span",{},t),w.innerHTML=p[x];while(++
x<7);u=e.make("div",{"class":j.days},q),x=0,v=[];while(x++<42)v.push(e.make("span"
,{},u));m.push({caption:s,days:v}),y&&e.make("div",{"class":j.monthSeparator},l)}
i.draw(),e.addEvent(l,"mousedown",function(a,b){var c;if(e.hasClassName(b,j.nextMonth
))return!i.disableNext&&i.publish("view-changed",i,["next-month"])!==!1&&(i.viewStartDate
.add("months",1),i.draw()),!1;if(e.hasClassName(b,j.previousMonth))return!i.disablePreviousMonth&&
i.publish("view-changed",i,["previous-month"])!==!1&&(i.viewStartDate.subtract("months"
,1),i.draw()),!1;if(e.hasClassName(b,j.nextYear))return!i.disableNext&&i.publish("view-changed"
,i,["next-year"])!==!1&&(i.viewStartDate.add("years",1),i.draw()),!1;if(e.hasClassName
(b,j.previousYear))return!i.disablePreviousMonth&&i.publish("view-changed",i,["previous-year"
])!==!1&&(i.viewStartDate.subtract("years",1),i.draw()),!1;if(e.hasClassName(b.parentNode
,j.days)&&e.hasClassName(b,j.dayActive)&&(c=b.getAttribute("data-date"))){c=g(c),
c._d.setHours(12);if(i.publish("date-clicked",i,[c])!==!1)switch(k.mode){case"multiple"
:i.addSelected(c)||i.removeSelected(c);break;case"range":i.addSelected(c);break;case"single"
:default:i.addSelected(c)}return!1}return!1}),!(k.attachTo=e.$(k.attachTo))||k.attachTo
.appendChild(l)};c.prototype={defaults:{attachTo:null,months:1,weekStart:0,direction
:"any",directionScrolling:!0,viewStartDate:null,blackout:null,selected:null,mode:"single"
,dayOutOfMonthClickable:!1,format:null,subscribe:null,columnHeaderLength:2,titleFormat
:"MMMM, YYYY",dayNumberFormat:"D",dayAttributeFormat:"YYYY-MM-DD",parseSplitDelimiter
:/,\s*|\s+-\s+/,rangeDelimiter:" - ",multipleDelimiter:", ",useYearNav:!0,dateClassMap
:{}},classes:{container:"kalendae",calendar:"k-calendar",monthFirst:"k-first-month"
,monthMiddle:"k-middle-month",monthLast:"k-last-month",title:"k-title",previousMonth
:"k-btn-previous-month",nextMonth:"k-btn-next-month",previousYear:"k-btn-previous-year"
,nextYear:"k-btn-next-year",caption:"k-caption",header:"k-header",days:"k-days",dayOutOfMonth
:"k-out-of-month",dayInMonth:"k-in-month",dayActive:"k-active",daySelected:"k-selected"
,dayInRange:"k-range",dayToday:"k-today",monthSeparator:"k-separator",disablePreviousMonth
:"k-disable-previous-month-btn",disableNextMonth:"k-disable-next-month-btn",disablePreviousYear
:"k-disable-previous-year-btn",disableNextYear:"k-disable-next-year-btn",disableYearNav
:"k-disable-year-nav"},disablePreviousMonth:!1,disableNextMonth:!1,disablePreviousYear
:!1,disableNextYear:!1,directions:{past:function(a){return g(a).yearDay()>=b.yearDay
()},"today-past":function(a){return g(a).yearDay()>b.yearDay()},any:function(a){return!1
},"today-future":function(a){return g(a).yearDay()<b.yearDay()},future:function(a
){return g(a).yearDay()<=b.yearDay()}},getSelectedAsDates:function(){var a=[],b=0
,c=this._sel.length;for(;b<c;b++)a.push(this._sel[b].toDate());return a},getSelectedAsText
:function(a){var b=[],c=0,d=this._sel.length;for(;c<d;c++)b.push(this._sel[c].format
(a||this.settings.format||"YYYY-MM-DD"));return b},getSelectedRaw:function(){var a=
[],b=0,c=this._sel.length;for(;b<c;b++)a.push(g(this._sel[b]));return a},getSelected
:function(a){var b=this.getSelectedAsText(a);switch(this.settings.mode){case"range"
:return b.splice(2),b.join(this.settings.rangeDelimiter);case"multiple":return b.
join(this.settings.multipleDelimiter);case"single":default:return b[0]}},isSelected
:function(a){a=g(a).yearDay();if(a<1||!this._sel||this._sel.length<1)return!1;switch(
this.settings.mode){case"range":var b=this._sel[0]?this._sel[0].yearDay():0,c=this
._sel[1]?this._sel[1].yearDay():0;if(b===a||c===a)return 1;if(!b||!c)return 0;if(
a>b&&a<c||b<c&&a<b&&a>c)return-1;return!1;case"multiple":var d=this._sel.length;while(
d--)if(this._sel[d].yearDay()===a)return!0;return!1;case"single":default:return this
._sel[0]&&this._sel[0].yearDay()===a}return!1},setViewStartDate:function(a,b){vsd=
g(a,null),this.viewStartDate=vsd.date(1),b!==!1&&this.draw()},setSelected:function(
a,b){this._sel=d(a,this.settings.parseSplitDelimiter,this.settings.format),this._sel
.sort(function(a,b){return a.yearDay()-b.yearDay()}),b!==!1&&this.draw()},addSelected
:function(a,b){a=g(a).hours(12),this.settings.dayOutOfMonthClickable&&this.settings
.mode!=="range"&&this.makeSelectedDateVisible(a);switch(this.settings.mode){case"multiple"
:if(!!this.isSelected(a))return!1;this._sel.push(a);break;case"range":this._sel.length!==1?
this._sel=[a]:a.yearDay()>this._sel[0].yearDay()?this._sel[1]=a:this._sel=[a,this
._sel[0]];break;case"single":default:this._sel=[a]}return this._sel.sort(function(
a,b){return a.yearDay()-b.yearDay()}),this.publish("change",this),b!==!1&&this.draw
(),!0},makeSelectedDateVisible:function(a){outOfViewMonth=g(a).date("1").diff(this
.viewStartDate,"months"),outOfViewMonth<0?this.viewStartDate.subtract("months",1)
:outOfViewMonth>0&&outOfViewMonth>=this.settings.months&&this.viewStartDate.add("months"
,1)},removeSelected:function(a,b){a=g(a).yearDay();var c=this._sel.length;while(c--
)if(this._sel[c].yearDay()===a)return this._sel.splice(c,1),this.publish("change"
,this),b!==!1&&this.draw(),!0;return!1},draw:function(){var c=g(this.viewStartDate
).hours(12),d,f=this.classes,h,i,j,k=0,l,m=0,n,o,p,q=this.settings;l=this.calendars
.length;do{d=g(c).date(1),d.day(d.day()<this.settings.weekStart?this.settings.weekStart-7
:this.settings.weekStart),h=this.calendars[k],h.caption.innerHTML=c.format(this.settings
.titleFormat),m=0;do i=h.days[m],j=[],o=this.isSelected(d),o&&j.push({"-1":f.dayInRange
,1:f.daySelected,"true":f.daySelected}[o]),d.month()!=c.month()?j.push(f.dayOutOfMonth
):j.push(f.dayInMonth),(!(this.blackout(d)||this.direction(d)||d.month()!=c.month
()&&q.dayOutOfMonthClickable===!1)||o>0)&&j.push(f.dayActive),d.yearDay()===b.yearDay
()&&j.push(f.dayToday),p=d.format(this.settings.dayAttributeFormat),q.dateClassMap
[p]&&j.push(q.dateClassMap[p]),i.innerHTML=d.format(q.dayNumberFormat),i.className=
j.join(" "),i.setAttribute("data-date",p),d.add("days",1);while(++m<42);c.add("months"
,1)}while(++k<l);if(q.directionScrolling){var r=-g().diff(c,"months");if(q.direction==="today-past"||
q.direction==="past")r<0?(this.disableNextMonth=!1,e.removeClassName(this.container
,f.disableNextMonth)):(this.disableNextMonth=!0,e.addClassName(this.container,f.disableNextMonth
));else if(q.direction==="today-future"||q.direction==="future")r>=q.months?(this
.disablePreviousMonth=!1,e.removeClassName(this.container,f.disablePreviousMonth)
):(this.disablePreviousMonth=!0,e.addClassName(this.container,f.disablePreviousMonth
));if(q.direction==="today-past"||q.direction==="past")c.add({y:1}).diff(g(),"months"
)<=0?(this.disableNextYear=!1,e.removeClassName(this.container,f.disableNextYear)
):(this.disableNextYear=!0,e.addClassName(this.container,f.disableNextYear));else if(
q.direction==="today-future"||q.direction==="future")c.subtract({y:1}).diff(g(),"months"
)-(q.months-1)>=0?(this.disablePreviousYear=!1,e.removeClassName(this.container,f
.disablePreviousYear)):(this.disablePreviousYear=!0,e.addClassName(this.container
,f.disablePreviousYear))}}};var d=function(a,b,c){var d=[];typeof a=="string"?a=a
.split(b):e.isArray(a)||(a=[a]);var f=a.length;i=0;do a[i]&&d.push(g(a[i],c).hours
(12));while(++i<f);return d};window.Kalendae=c;var e=c.util={isIE8:function(){return!!
(/msie 8./i.test(navigator.appVersion)&&!/opera/i.test(navigator.userAgent)&&window
.ActiveXObject&&XDomainRequest&&!window.msPerformance)},$:function(a){return typeof 
a=="string"?document.getElementById(a):a},$$:function(a){return document.querySelectorAll
(a)},make:function(a,b,c){var d,e=document.createElement(a);if(!!b)for(d in b)b.hasOwnProperty
(d)&&e.setAttribute(d,b[d]);return!c||c.appendChild(e),e},isVisible:function(a){return a
.offsetWidth>0||a.offsetHeight>0},getStyle:function(a,b){var c;return a.currentStyle?
c=a.currentStyle[b]:window.getComputedStyle&&(c=window.getComputedStyle(a,null)[b
]),c},domReady:function(a){/in/.test(document.readyState)?setTimeout(function(){e
.domReady(a)},9):a()},addEvent:function(a,b,c){var d=function(b){b=b||window.event
;var d=b.target||b.srcElement,e=c.apply(a,[b,d]);return e===!1&&(b.preventDefault?
b.preventDefault():(b.returnValue=!1,b.cancelBubble=!0)),e};return a.attachEvent?
a.attachEvent("on"+b,d):a.addEventListener(b,d,!1),d},removeEvent:function(a,b,c)
{a.detachEvent?a.detachEvent("on"+b,c):a.removeEventListener(b,c,!1)},hasClassName
:function(a,b){if(!(a=e.$(a)))return!1;var c=a.className;return c.length>0&&(c==b||
(new RegExp("(^|\\s)"+b+"(\\s|$)")).test(c))},addClassName:function(a,b){if(!(a=e
.$(a)))return;e.hasClassName(a,b)||(a.className+=(a.className?" ":"")+b)},removeClassName
:function(a,b){if(!(a=e.$(a)))return;a.className=e.trimString(a.className.replace
(new RegExp("(^|\\s+)"+b+"(\\s+|$)")," "))},isFixed:function(a){do if(e.getStyle(
a,"position")==="fixed")return!0;while(a=a.offsetParent);return!1},scrollContainer
:function(a){do{var b=e.getStyle(a,"overflow");if(b==="auto"||b==="scroll")return a
}while((a=a.parentNode)&&a!=window.document.body);return null},getPosition:function(
a,b){var c=a.offsetLeft,d=a.offsetTop,e={};if(!b)while(a=a.offsetParent)c+=a.offsetLeft
,d+=a.offsetTop;return e[0]=e.left=c,e[1]=e.top=d,e},getHeight:function(a){return a
.offsetHeight||a.scrollHeight},getWidth:function(a){return a.offsetWidth||a.scrollWidth
},trimString:function(a){return a.replace(/^\s+/,"").replace(/\s+$/,"")},merge:function(
){var a=arguments[0]===!0,b={},c=a?1:0,d=function(b,c){if(typeof c!="object")return;
for(var d in c)c.hasOwnProperty(d)&&(a&&typeof b[d]=="object"&&typeof c[d]=="object"?
_update(b[d],c[d]):b[d]=c[d]);return b};for(;c<arguments.length;c++)d(b,arguments
[c]);return b},isArray:function(a){return!(!a||!a.length||a.length===0||typeof a!="object"||!
a.constructor||a.nodeType||a.item)}};typeof document.addEventListener=="function"&&
c.util.domReady(function(){var a=e.$$(".auto-kal"),b=a.length,d,f,g;while(b--)d=a
[b],g=d.getAttribute("data-kal"),f=g==null||g==""?{}:(new Function("return {"+g+"};"
))(),d.tagName==="INPUT"?new c.Input(d,f):new c(e.merge(f,{attachTo:d}))}),c.Input=
function(a,b){if(typeof document.addEventListener!="function"&&!e.isIE8())return;
var d=this.input=e.$(a),f;if(!d||d.tagName!=="INPUT")throw"First argument for Kalendae.Input must be an <input> element or a valid element id."
;var g=this,h=g.classes;opts=g.settings=e.merge(g.defaults,b),opts.attachTo=window
.document.body,opts.selected?f=!0:opts.selected=d.value,c.call(g,opts);if(opts.closeButton
){var i=e.make("a",{"class":h.closeButton},g.container);e.addEvent(i,"click",function(
){d.blur()})}f&&(d.value=g.getSelected());var j=g.container,k=!1;j.style.display="none"
,e.addClassName(j,h.positioned),e.addEvent(j,"mousedown",function(a,b){k=!0}),e.addEvent
(window.document,"mousedown",function(a,b){k=!1}),e.addEvent(d,"focus",function()
{g.setSelected(this.value),g.show()}),e.addEvent(d,"blur",function(){k?(k=!1,d.focus
()):g.hide()}),e.addEvent(d,"keyup",function(a){g.setSelected(this.value)});var l=
e.scrollContainer(d);l&&e.addEvent(l,"scroll",function(a){d.blur()}),g.subscribe("change"
,function(){d.value=g.getSelected()})},c.Input.prototype=e.merge(c.prototype,{defaults
:e.merge(c.prototype.defaults,{format:"MM/DD/YYYY",side:"bottom",closeButton:!0,offsetLeft
:0,offsetTop:0}),classes:e.merge(c.prototype.classes,{positioned:"k-floating",closeButton
:"k-btn-close"}),show:function(){var a=this.container,b=a.style,c=this.input,d=e.
getPosition(c),f=e.scrollContainer(c),g=f?f.scrollTop:0;b.display="";switch(opts.
side){case"left":b.left=d.left-e.getWidth(a)+this.settings.offsetLeft+"px",b.top=
d.top+this.settings.offsetTop-g+"px";break;case"right":b.left=d.left+e.getWidth(c
)+"px",b.top=d.top+this.settings.offsetTop-g+"px";break;case"top":b.left=d.left+this
.settings.offsetLeft+"px",b.top=d.top-e.getHeight(a)+this.settings.offsetTop-g+"px"
;break;case"bottom":default:b.left=d.left+this.settings.offsetLeft+"px",b.top=d.top+
e.getHeight(c)+this.settings.offsetTop-g+"px"}b.position=e.isFixed(c)?"fixed":"absolute"
,this.publish("show",this)},hide:function(){this.container.style.display="none",this
.publish("hide",this)}});var f=function(a){a||(a=this);var b=a.c_||{};a.publish=function(
a,c,d){var e=b[a],f=e?e.length:0,g;while(f--){g=e[f].apply(c,d||[]);if(typeof g=="boolean"
)return g}},a.subscribe=function(a,c,d){return b[a]||(b[a]=[]),d?b[a].push(c):b[a
].unshift(c),[a,c]},a.unsubscribe=function(a){var c=b[a[0]],d=a[1],e=c?c.length:0
;while(e--)c[e]===d&&c.splice(e,1)}},g=c.moment=function(a,b){function u(a,b){this
._d=a,this._isUTC=!!b}function v(a,b){var c=a+"";while(c.length<b)c="0"+c;return c
}function w(b,c,d,e){var f=typeof c=="string",g=f?{}:c,h,i,j,k;return f&&e&&(g[c]=+
e),h=(g.ms||g.milliseconds||0)+(g.s||g.seconds||0)*1e3+(g.m||g.minutes||0)*6e4+(g
.h||g.hours||0)*36e5,i=(g.d||g.days||0)+(g.w||g.weeks||0)*7,j=(g.M||g.months||0)+
(g.y||g.years||0)*12,h&&b.setTime(+b+h*d),i&&b.setDate(b.getDate()+i*d),j&&(k=b.getDate
(),b.setDate(1),b.setMonth(b.getMonth()+j*d),b.setDate(Math.min((new a(b.getFullYear
(),b.getMonth()+1,0)).getDate(),k))),b}function x(a){return Object.prototype.toString
.call(a)==="[object Array]"}function y(b){return new a(b[0],b[1]||0,b[2]||1,b[3]||0
,b[4]||0,b[5]||0,b[6]||0)}function z(b,d){function r(d){var j,s;switch(d){case"M"
:return e+1;case"Mo":return e+1+p(e+1);case"MM":return v(e+1,2);case"MMM":return c
.monthsShort[e];case"MMMM":return c.months[e];case"D":return f;case"Do":return f+
p(f);case"DD":return v(f,2);case"DDD":return j=new a(g,e,f),s=new a(g,0,1),~~((j-
s)/864e5+1.5);case"DDDo":return j=r("DDD"),j+p(j);case"DDDD":return v(r("DDD"),3)
;case"d":return h;case"do":return h+p(h);case"ddd":return c.weekdaysShort[h];case"dddd"
:return c.weekdays[h];case"w":return j=new a(g,e,f-h+5),s=new a(j.getFullYear(),0
,4),~~((j-s)/864e5/7+1.5);case"wo":return j=r("w"),j+p(j);case"ww":return v(r("w"
),2);case"YY":return v(g%100,2);case"YYYY":return g;case"a":return i>11?q.pm:q.am
;case"A":return i>11?q.PM:q.AM;case"H":return i;case"HH":return v(i,2);case"h":return i%12||12
;case"hh":return v(i%12||12,2);case"m":return m;case"mm":return v(m,2);case"s":return n
;case"ss":return v(n,2);case"zz":case"z":return(b._d.toString().match(l)||[""])[0
].replace(k,"");case"Z":return(o<0?"-":"+")+v(~~(Math.abs(o)/60),2)+":"+v(~~(Math
.abs(o)%60),2);case"ZZ":return(o<0?"-":"+")+v(~~(10*Math.abs(o)/6),4);case"L":case"LL"
:case"LLL":case"LLLL":case"LT":return z(b,c.longDateFormat[d]);default:return d.replace
(/(^\[)|(\\)|\]$/g,"")}}var e=b.month(),f=b.date(),g=b.year(),h=b.day(),i=b.hours
(),m=b.minutes(),n=b.seconds(),o=-b.zone(),p=c.ordinal,q=c.meridiem;return d.replace
(j,r)}function A(b,d){function p(a,b){var d;switch(a){case"M":case"MM":e[1]=~~b-1
;break;case"MMM":case"MMMM":for(d=0;d<12;d++)if(c.monthsParse[d].test(b)){e[1]=d;
break}break;case"D":case"DD":case"DDD":case"DDDD":e[2]=~~b;break;case"YY":b=~~b,e
[0]=b+(b>70?1900:2e3);break;case"YYYY":e[0]=~~Math.abs(b);break;case"a":case"A":o=
b.toLowerCase()==="pm";break;case"H":case"HH":case"h":case"hh":e[3]=~~b;break;case"m"
:case"mm":e[4]=~~b;break;case"s":case"ss":e[5]=~~b;break;case"Z":case"ZZ":h=!0,d=
(b||"").match(r),d&&d[1]&&(f=~~d[1]),d&&d[2]&&(g=~~d[2]),d&&d[0]==="+"&&(f=-f,g=-
g)}}var e=[0,0,1,0,0,0,0],f=0,g=0,h=!1,i=b.match(n),j=d.match(m),k=Math.min(i.length
,j.length),l,o;for(l=0;l<k;l++)p(j[l],i[l]);return o&&e[3]<12&&(e[3]+=12),o===!1&&
e[3]===12&&(e[3]=0),e[3]+=f,e[4]+=g,h?new a(a.UTC.apply({},e)):y(e)}function B(a,
b){var c=Math.min(a.length,b.length),d=Math.abs(a.length-b.length),e=0,f;for(f=0;
f<c;f++)~~a[f]!==~~b[f]&&e++;return e+d}function C(a,b){var c,d=a.match(n),e=[],f=99
,g,h,i;for(g=0;g<b.length;g++)h=A(a,b[g]),i=B(d,z(new u(h),b[g]).match(n)),i<f&&(
f=i,c=h);return c}function D(b){var c="YYYY-MM-DDT",d;if(o.exec(b)){for(d=0;d<3;d++
)if(q[d][1].exec(b)){c+=q[d][0];break}return A(b,c+"Z")}return new a(b)}function E
(a,b,d){var e=c.relativeTime[a];return typeof e=="function"?e(b||1,!!d,a):e.replace
(/%d/i,b||1)}function F(a,b){var c=d(Math.abs(a)/1e3),e=d(c/60),f=d(e/60),g=d(f/24
),h=d(g/365),i=c<45&&["s",c]||e===1&&["m"]||e<45&&["mm",e]||f===1&&["h"]||f<22&&["hh"
,f]||g===1&&["d"]||g<=25&&["dd",g]||g<=45&&["M"]||g<345&&["MM",d(g/30)]||h===1&&["y"
]||["yy",h];return i[2]=b,E.apply({},i)}function G(a,b){c.fn[a]=function(a){var c=
this._isUTC?"UTC":"";return typeof a!="undefined"?(this._d["set"+c+b](a),this):this
._d["get"+c+b]()}}var c,d=Math.round,e={},f=typeof module!="undefined",g="months|monthsShort|monthsParse|weekdays|weekdaysShort|longDateFormat|calendar|relativeTime|ordinal|meridiem"
.split("|"),h,i=/^\/?Date\((\-?\d+)/i,j=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|dddd?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|zz?|ZZ?|LT|LL?L?L?)/g
,k=/[^A-Z]/g,l=/\([A-Za-z ]+\)|:[0-9]{2} [A-Z]{3} /g,m=/(\\)?(MM?M?M?|dd?d?d|DD?D?D?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|ZZ?|T)/g
,n=/(\\)?([0-9]+|([a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+|([\+\-]\d\d:?\d\d))/gi
,o=/\d{4}.\d\d.\d\d(T(\d\d(.\d\d(.\d\d)?)?)?([\+\-]\d\d:?\d\d)?)?/,p="YYYY-MM-DDTHH:mm:ssZ"
,q=[["HH:mm:ss",/T\d\d:\d\d:\d\d/],["HH:mm",/T\d\d:\d\d/],["HH",/T\d\d/]],r=/([\+\-]|\d\d)/gi
,s="1.5.0",t="Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|");c=function(
c,d){if(c===null||c==="")return null;var e,f;return c&&c._d instanceof a?e=new a(+
c._d):d?x(d)?e=C(c,d):e=A(c,d):(f=i.exec(c),e=c===b?new a:f?new a(+f[1]):c instanceof 
a?c:x(c)?y(c):typeof c=="string"?D(c):new a(c)),new u(e)},c.utc=function(b,d){return x
(b)?new u(new a(a.UTC.apply({},b)),!0):d&&b?c(b+" 0",d+" Z").utc():c(b).utc()},c.
humanizeDuration=function(a,b,d){var e=+a,f=c.relativeTime,g;switch(b){case"seconds"
:e*=1e3;break;case"minutes":e*=6e4;break;case"hours":e*=36e5;break;case"days":e*=864e5
;break;case"weeks":e*=6048e5;break;case"months":e*=2592e6;break;case"years":e*=31536e6
;break;default:d=!!b}return g=F(e,!d),d?(e<=0?f.past:f.future).replace(/%s/i,g):g
},c.version=s,c.defaultFormat=p,c.lang=function(a,b){var d,h,i,j=[];if(b){for(d=0
;d<12;d++)j[d]=new RegExp("^"+b.months[d]+"|^"+b.monthsShort[d].replace(".",""),"i"
);b.monthsParse=b.monthsParse||j,e[a]=b}if(e[a])for(d=0;d<g.length;d++)h=g[d],c[h
]=e[a][h]||c[h];else f&&(i=require("./lang/"+a),c.lang(a,i))},c.lang("en",{months
:"January_February_March_April_May_June_July_August_September_October_November_December"
.split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"
),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),longDateFormat:{LT:"h:mm A"
,L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"
},meridiem:{AM:"AM",am:"am",PM:"PM",pm:"pm"},calendar:{sameDay:"[Today at] LT",nextDay
:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[last] dddd [at] LT"
,sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute"
,mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months"
,y:"a year",yy:"%d years"},ordinal:function(a){var b=a%10;return~~(a%100/10)===1?"th"
:b===1?"st":b===2?"nd":b===3?"rd":"th"}}),c.isMoment=function(a){return a instanceof 
u},c.fn=u.prototype={clone:function(){return c(this)},valueOf:function(){return+this
._d},"native":function(){return this._d},toString:function(){return this._d.toString
()},toDate:function(){return this._d},utc:function(){return this._isUTC=!0,this},
local:function(){return this._isUTC=!1,this},format:function(a){return z(this,a?a
:c.defaultFormat)},add:function(a,b){return this._d=w(this._d,a,1,b),this},subtract
:function(a,b){return this._d=w(this._d,a,-1,b),this},diff:function(a,b,e){var f=
c(a),g=(this.zone()-f.zone())*6e4,h=this._d-f._d-g,i=this.year()-f.year(),j=this.
month()-f.month(),k=this.date()-f.date(),l;return b==="months"?l=i*12+j+k/30:b==="years"?
l=i+j/12:l=b==="seconds"?h/1e3:b==="minutes"?h/6e4:b==="hours"?h/36e5:b==="days"?
h/864e5:b==="weeks"?h/6048e5:h,e?l:d(l)},from:function(a,b){return c.humanizeDuration
(this.diff(a),!b)},fromNow:function(a){return this.from(c(),a)},calendar:function(
){var a=this.diff(c().sod(),"days",!0),b=c.calendar,d=b.sameElse,e=a<-6?d:a<-1?b.
lastWeek:a<0?b.lastDay:a<1?b.sameDay:a<2?b.nextDay:a<7?b.nextWeek:d;return this.format
(typeof e=="function"?e.apply(this):e)},isLeapYear:function(){var a=this.year();return a%4===0&&
a%100!==0||a%400===0},isDST:function(){return this.zone()<c([this.year()]).zone()||
this.zone()<c([this.year(),5]).zone()},day:function(a){var b=this._d.getDay();return typeof 
a=="undefined"?b:this.add({d:a-b})},sod:function(){return this.clone().hours(0).minutes
(0).seconds(0).milliseconds(0)},eod:function(){return this.sod().add({d:1,ms:-1})
},zone:function(){return this._isUTC?0:this._d.getTimezoneOffset()},daysInMonth:function(
){return this.clone().month(this.month()+1).date(0).date()}};for(h=0;h<t.length;h++
)G(t[h].toLowerCase(),t[h]);return G("year","FullYear"),c}(Date);g.fn.stripTime=function(
){return this._d=new Date(Math.floor(this._d.valueOf()/864e5)*864e5),this},g.fn.yearDay=
function(a){var b=Math.floor(this._d/864e5);return typeof a=="undefined"?b:this.add
({d:a-b})},b=g().stripTime(),typeof jQuery!="undefined"&&typeof document.addEventListener=="function"&&
(jQuery.fn.kalendae=function(a){return this.each(function(b,d){d.tagName==="INPUT"?
$(d).data("kalendae",new c.Input(d,a)):$(d).data("kalendae",new c($.extend({},{attachTo
:d},a)))}),this})}(),function(a){var b="hidden",c="border-box",d="lineHeight",e='<textarea tabindex="-1" style="position:absolute; top:-9999px; left:-9999px; right:auto; bottom:auto; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden">'
,f=["fontFamily","fontSize","fontWeight","fontStyle","letterSpacing","textTransform"
,"wordSpacing","textIndent"],g="oninput",h="onpropertychange",i=a(e)[0];i.setAttribute
(g,"return"),a.isFunction(i[g])||h in i?(a(i).css(d,"99px"),a(i).css(d)==="99px"&&
f.push(d),a.fn.autosize=function(d){return this.each(function(){function r(){var a
,c;n||(n=!0,k.value=i.value,k.style.overflowY=i.style.overflowY,k.style.width=j.css
("width"),k.scrollTop=0,k.scrollTop=9e4,a=k.scrollTop,c=b,a>m?(a=m,c="scroll"):a<
l&&(a=l),i.style.overflowY=c,i.style.height=a+q+"px",setTimeout(function(){n=!1},1
))}var i=this,j=a(i),k,l=j.height(),m=parseInt(j.css("maxHeight"),10),n,o=f.length
,p,q=0;if(j.css("box-sizing")===c||j.css("-moz-box-sizing")===c||j.css("-webkit-box-sizing"
)===c)q=j.outerHeight()-j.height();if(j.data("mirror")||j.data("ismirror"))return;
k=a(e).data("ismirror",!0).addClass(d||"autosizejs")[0],p=j.css("resize")==="none"?"none"
:"horizontal",j.data("mirror",a(k)).css({overflow:b,overflowY:b,wordWrap:"break-word"
,resize:p}),m=m&&m>0?m:9e4;while(o--)k.style[f[o]]=j.css(f[o]);a("body").append(k
),h in i?g in i?i[g]=i.onkeyup=r:i[h]=r:i[g]=r,a(window).resize(r),j.bind("autosize"
,r),r()})}):a.fn.autosize=function(){return this}}(jQuery),function(a){function b
(b){if(typeof b.data!="string")return;var c=b.handler,d=b.data.toLowerCase().split
(" ");b.handler=function(b){if(!(this===b.target||!/textarea|select/i.test(b.target
.nodeName)&&b.target.type!=="text"))return;var e=b.type!=="keypress"&&a.hotkeys.specialKeys
[b.which],f=String.fromCharCode(b.which).toLowerCase(),g,h="",i={};b.altKey&&e!=="alt"&&
(h+="alt+"),b.ctrlKey&&e!=="ctrl"&&(h+="ctrl+"),b.metaKey&&!b.ctrlKey&&e!=="meta"&&
(h+="meta+"),b.shiftKey&&e!=="shift"&&(h+="shift+"),e?i[h+e]=!0:(i[h+f]=!0,i[h+a.
hotkeys.shiftNums[f]]=!0,h==="shift+"&&(i[a.hotkeys.shiftNums[f]]=!0));for(var j=0
,k=d.length;j<k;j++)if(i[d[j]])return c.apply(this,arguments)}}a.hotkeys={version
:"0.8",specialKeys:{8:"backspace",9:"tab",13:"return",16:"shift",17:"ctrl",18:"alt"
,19:"pause",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36
:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"del",96:"0",97:"1"
,98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109
:"-",110:".",111:"/",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7"
,119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scroll",191:"/"
,224:"meta"},shiftNums:{"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9
:"(",0:")","-":"_","=":"+",";":": ","'":'"',",":"<",".":">","/":"?","\\":"|"}},a.
each(["keydown","keyup","keypress"],function(){a.event.special[this]={add:b}})}(jQuery
);var Harvest,_this=this;Harvest={Collections:{},Models:{},Helpers:{},Views:{Timesheet
:{}},collections:{},models:{},views:{},helpers:{},projects:{},settings:{},parse_date
:function(a){var b,c,d,e,f,g;return b=a.split("-"),f=function(a){return parseInt(
a,10)},g=f(b[0]),e=f(b[1])-1,d=f(b[2]),c=new Date(g,e,d),c.getDate()!==d&&(c.setDate
(d),c.setMonth(e),c.setYear(g)),c},to_iso_date_string:function(a){return $.type(a
)==="string"&&(a=new Date(a)),a.toString("iso")},common_initializers:function(){var a
,b,c;if(Harvest.initialized)return;return Harvest.initialized=!0,c=Harvest.customer_subdomain
()==="experiancheetahmail"||featureFlags.development_mode,$.ajaxPrefilter(function(
a,b,c){var d,e,f;return f=$('meta[name="csrf-token"]').attr("content"),f&&(c.setRequestHeader
("X-CSRF-Token",f),a.data&&(a.contentType.match(/json/)&&(d=JSON.parse(a.data),d.
authenticity_token=f,d.x_requested_with="XMLHttpRequest",a.data=JSON.stringify(d)
),a.contentType.match(/form-urlencoded/)&&(d=a.data.split("&"),e=function(a,b){return encodeURIComponent
(a)+"="+encodeURIComponent(b)},d.push(e("x_requested_with","XMLHttpRequest")),d.push
(e("authenticity_token",f)),a.data=d.join("&")))),c.setRequestHeader("X-Local-Timezone-Offset"
,Harvest._get_timezone_offset_without_dst())}),b=function(){return Harvest.trigger
("global-timer-tick")},setInterval(b,36e3),Harvest.projects=this.json_island("client-project-task-names"
).projects,Harvest.settings=this.json_island("preferences"),Harvest.projects_by_user_id=
{},Harvest.projects_by_user_id[Harvest.settings.timesheet_owner.toString()]=Harvest
.projects,Harvest.recent=new Harvest.Collections.RecentProjectsTasks(this.json_island
("recent-projects-tasks")),Harvest.settings.current_user.is_admin&&(Harvest.users=
this.json_island("all-users")),Harvest.hours.configure(),a=this.json_island("days-in-week"
),Harvest.collections.bootstrapped_week=new Harvest.Collections.Week({days_in_week
:a,raw_records:this.json_island("week")}),Harvest.collections.bootstrapped_week.user_id=
Harvest.settings.timesheet_owner,Harvest.collections.weeks={},Harvest.collections
.weeks[""+a[0]+"/user/"+Harvest.settings.timesheet_owner]=Harvest.collections.bootstrapped_week
,Harvest.router=new Harvest.Router,Harvest.routes=Harvest.create_named_routes(Harvest
.router),Harvest.fixup_router_navigate(Harvest.router)},at_least_one_assigned_active_project_and_task
:function(a){return a==null&&(a=Harvest.projects),_.any(_.values(a),function(a){return a
.project_active&&a.user_assigned&&_.any(_.values(a.tasks),function(a){return a.task_assigned&&
a.task_active})})},client_project_task_names_for:function(a){},customer_subdomain
:function(){var a;return Harvest.settings.subdomain!=null?Harvest.settings.subdomain
:(a=window.location.host.split(".")[0],Harvest.settings.subdomain=a,a)},json_island
:function(a){var b,c;return b=$("#"+a+"-data-island"),b.length?(c=JSON.parse(b.html
()),b.remove(),c):alert("We encountered a problem loading your data (bootstrap "+
a+"). This can occur when accessing Harvest through a proxy or when using certain browser extensions that removes certain tags from the page. Please contact your IT staff or Harvest for more details"
)},available_project_tasks:function(a){var b,c,d=this;return a==null&&(a=[]),c=[]
,a.length&&(b=_.map(a,function(a){return""+a.project_id+"-"+a.task_id})),_.each(Harvest
.projects,function(a){var d;if(!a.project_active||!a.user_assigned)return!1;d=_.filter
(a.tasks,function(c){return!c.task_assigned||!c.task_active?!1:b!=null&&_.contains
(b,""+a.id+"-"+c.id)?!1:!0});if(d.length)return c.push({id:a.id,client_name:a.client_name
,code:a.code,name:a.name,tasks:d})}),c},create_named_routes:function(a){var b,c,d
,e,f,g,h,i,j;b=function(b,c){var d,e,f,g;return g=c.match(/:\w+/g)||[],f=a.root.replace
(/\/$/,""),d=window.history.pushState?"/":"#",e=function(a){var e,h,i,j,k;h=c;for(
j=0,k=g.length;j<k;j++){e=g[j],i=e.replace(/:/,"");if(!a[i]){alert("ERROR: route "+
b+" expected :"+i+" but got none");break}h=h.replace(e,a[i]),null}return""+f+d+h}
},h={},i=a.routes;for(c in i)f=i[c],g=""+f+"_path",h[g]=b(g,c);_.extend(Backbone.
View.prototype,h),j=Harvest.Helpers;for(e in j)d=j[e],Handlebars.registerHelper(e
,d);for(e in h)d=h[e],Handlebars.registerHelper(e,d);return h},fixup_router_navigate
:function(a){var b,c;return b=a.navigate,c=a.root.replace(/\/$/,""),a.navigate=function(
a,d){return a=a.indexOf(c)?a:a.substr(c.length),b(a,d)}},url_for_day:function(a){
var b;return b={year:a.toString("year"),month:a.toString("month"),day:a.toString("day"
)},Harvest.settings.current_user.id===Harvest.settings.timesheet_owner?Harvest.routes
.timesheet_at_path(b):(b.other_user=Harvest.settings.timesheet_owner,Harvest.routes
.other_users_timesheet_at_path(b))},_get_timezone_offset_without_dst:function(){var a
,b,c;return c=new Date,a=new Date(c.getFullYear(),0,1),b=new Date(c.getFullYear()
,6,1),Math.max(a.getTimezoneOffset(),b.getTimezoneOffset())}},_.extend(Harvest,{initialize
:function(){var a;return Harvest.common_initializers(),Harvest.last_user_activity=new 
Harvest.LastUserActivity,Harvest.refresh=new Harvest.Refresh,a=Harvest.settings.push_enabled&&
Harvest.settings.initial_load_user_active,Backbone.history.start({pushState:Harvest
.settings.push_enabled,hashChange:a,root:Harvest.router.root})},cache_view:function(
a,b){var c,d,e,f,g,h;(c=Harvest.refresh)!=null&&c.safe_to_reload(),a in Harvest.views||
(Harvest.views[a]=b()),Harvest.views[a].show();if(((d=Harvest.current_view)!=null?
d.$el:void 0)===Harvest.views[a].$el)return;return((e=Harvest.current_view)!=null?!
e.is_in_navigation_state():!void 0)&&(f=Harvest.current_view)!=null&&f.hide_from_screen
(),(g=Harvest.current_view)!=null&&g.hide_all_decorations(),Harvest.views[a].is_fully_loaded
()&&((h=Harvest.current_view)!=null?h.is_in_navigation_state():void 0)&&(Harvest.
current_view.clear_navigation_state(),Harvest.current_view.hide_from_screen()),Harvest
.current_view=Harvest.views[a]}}),$(function(){var a=this;return _.extend(Harvest
,Backbone.Events),featureFlags.enable_clienterror&&!featureFlags.development_mode?
ClientError.watch(Harvest.initialize)():Harvest.initialize(),$(".js-dismiss-announcement"
).on("click",function(a){var b;return a.preventDefault(),b=$(a.target),$.ajax({url
:b.prop("href"),type:"post"}),b.parent("div").slideUp()}),$("body").bind("keyup","n"
,function(){return Harvest.current_view.trigger("keyup_n")})}),this.NavigationMainJQuery=
function(){function a(){var a=this;$(function(){if(!$(a.el).length)return;return new 
Harvest.Popover({button:$(".nav-dropdown-btn"),buttonClass:"current",container:$("#pop-over-user"
)})})}return a.prototype.el="#nav",a}(),this.NavigationMainPrototype=function(){function a
(){var a=this;document.observe("dom:loaded",function(){if(!$$(a.el).length)return;
return new Harvest.Popover({button:$$(".nav-dropdown-btn"),buttonClass:"current",
container:$("pop-over-user")})})}return a.prototype.el="#nav",a}(),typeof jQuery!="undefined"&&
jQuery!==null?Harvest.NavigationMain=new NavigationMainJQuery:Harvest.NavigationMain=new 
NavigationMainPrototype,Harvest.Helpers={tooltip_locked_explanation:function(a){return Harvest
.settings.current_user.is_admin===!1?"Only an administrator can unlock this entry"
:a.is_closed===!0&&a.is_billed===!0?"Entry Invoiced and Approved":a.is_billed===!0?"Entry Invoiced"
:a.is_closed===!0?"Entry Approved":a.locked_reason!=null?a.locked_reason.replace("Item"
,"Entry"):"Entry Archived"},locked_warning:function(a){var b;if(!a.locked)return;
return b="",a.is_billed===!0&&a.invoice_id!==1&&(b='<a href="/invoices/'+a.invoice_id+'">the invoice</a>'
),Harvest.settings.current_user.is_admin===!1?new Handlebars.SafeString("Only an administrator can unlock this entry"
):a.is_closed===!0&&a.is_billed===!0?new Handlebars.SafeString("This entry was <strong>invoiced and approved</strong>.      Editing <strong>will not update</strong>      "+
b+" or <strong>notify the timesheet owner      or project manager</strong>."):a.is_billed===!0?new 
Handlebars.SafeString("This entry was <strong>invoiced</strong>.      Editing <strong>will not update</strong> "+
b+"."):a.is_closed===!0?new Handlebars.SafeString("This entry was <strong>approved</strong>. Editing will <strong>not notify the timesheet owner or project manager</strong>."
):Harvest.Helpers.archived_note(a)},archived_note:function(a){var b,c,d,e;return e=
[],b=Handlebars.Utils.escapeExpression,a.project_active===!1&&e.push("Project "+b
(Harvest.projects[a.project_id].name)),a.task_active===!1&&e.push("Task "+b(Harvest
.projects[a.project_id].tasks[a.task_id].name)),a.user_assigned===!1&&e.push("User "+
b(Harvest.users[a.user_id].name)),a.task_assigned===!1&&e.push("Task "+b(Harvest.
projects[a.project_id].tasks[a.task_id].name)+" on project "+b(Harvest.projects[a
.project_id].name)),c="has",e.length>1&&(c="have"),d=""+Harvest.Helpers.to_sentence
(e)+" "+c+" been <strong>archived</strong>.",new Handlebars.SafeString(d)},to_sentence
:function(a){return a.length===0?"":a.length===1?a[0]:a.length===2?a.join(" and "
):[a.slice(0,-1).join(", "),"and ",a[-1]].join("")}};var ClientError,__indexOf=[]
.indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(b in this&&this[b]===a
)return b;return-1};ClientError={watch:function(a){switch(typeof a){case"function"
:return ClientError["try"](a);case"object":return ClientError.watch_all(a);default:
return a}},watch_all:function(a){return typeof a!="object"?a:ClientError[a.length!=
null?"watch_array":"watch_object"](a)},watch_array:function(a){var b,c,d,e;for(c=
d=0,e=a.length;d<e;c=++d)b=a[c],a[b]=ClientError.watch(c);return a},watch_object:
function(a){var b,c;for(b in a)c=a[b],a[b]=ClientError.watch(c);return a},watch_callback
:function(a){return a.call==null?a:function(b,c){return a.call(this,ClientError.watch
(b),c)}},"try":function(a){var b;if(typeof a!="function")return a;try{throw new Error
("ClientError::watch trace")}catch(c){b=c.stack||c.backtrace}return function(){try{
return a.apply(this,arguments)}catch(c){throw ClientError["catch"](a,c,b,arguments
),c}}},"catch":function(a,b,c,d){return window.setTimeoutUnwatched(function(){var e
;return ClientError.notify_user(),e={name:b.name,time:(new Date).getTime(),message
:b.message,backtrace:b.stack||b.backtrace,outer_backtrace:c,arguments:d,type:b.type
,url:window.location.toString(),navigator:{userAgent:navigator.userAgent,cookieEnabled
:navigator.cookieEnabled,language:navigator.language,platform:navigator.platform}
,watched:a.toString().substr(0,2048),source:b.source,file_name:b.fileName||b.sourceURL
,line_number:b.lineNumber||b.line},ClientError.log(e)})},notify_user:function(){return alert
("Sorry, but something just went wrong. If this continues, please contact us at support@harvestapp.com and we'll follow-up with you about the problem. Sorry for the trouble!"
)},log:function(a){return console.log("Caught error:",a),a=window.JSON.stringify(
a,this._sanitize(a)),typeof _gaq!="undefined"&&_gaq!==null?_gaq.push(["_trackEvent"
,"ClientError","Timesheet",a]):void 0},_sanitize:function(a){var b,c;return c=[],
b=["Window","Node","NodeList","NamedNodeMap"],function(a,d){var e,f,g;if(typeof d=="object"
){for(f=0,g=b.length;f<g;f++){e=b[f];if(window[e]!=null&&d instanceof window[e])return d
.toString()}if(__indexOf.call(c,d)>=0)return"[Circular "+d.toString()+"]";c.push(
d)}return d}}},featureFlags.enable_clienterror&&!featureFlags.development_mode&&(
window.setTimeoutUnwatched=window.setTimeout,window.setTimeout=ClientError.watch_callback
(window.setTimeout),window.setInterval=ClientError.watch_callback(window.setInterval
),jQuery.fn.ready=ClientError.watch_callback(jQuery.fn.ready),jQuery.ajax=function(
a){return function(b,c){var d;return d=[ClientError.watch_all(b),ClientError.watch_all
(c)],a.apply(this,d)}}(jQuery.ajax),jQuery.event.add=function(a){return function(
b,c,d,e,f){var g,h;return d&&!d.handler?(g=ClientError.watch(d),g.guid=d.guid,h=a
(b,c,g,e,f),d.guid=g.guid,h):d&&d.handler?(d.handler=ClientError.watch(d.handler)
,a.apply(this,arguments)):a.apply(this,arguments)}}(jQuery.event.add)),Harvest.date=
{parse_localized:function(a){var b,c,d,e,f,g,h,i;c=Harvest.settings.date_format.match
(/%\w/g),g=a.match(/\d+/g);if(g.length!==c.length)return new Date;for(d=i=0;i<=2;
d=++i){f=parseInt(g[d],10);switch(c[d]){case"%Y":h=f;break;case"%m":e=f;break;case"%d"
:b=f}}return new Date(h,e-1,b)},day_of_week_short:function(a){var b;return b=a.toString
("day_of_week"),b.match(/Thursday/)?b.substr(0,2):b.substr(0,1)},sanitize_ie8:function(
a){return typeof a=="string"&&(a=a.replace(/\-/g,"/").replace("T"," ")),a},is_this_year
:function(a){return a.getFullYear()===(new Date).getFullYear()}},Date.prototype.nativeToString=
Date.prototype.toString,Date.prototype.toString=function(a){switch(a){case"iso":return this
.strftime("%Y-%m-%d");case"human_format":return this.strftime("%d %b %Y");case"day_month"
:return this.strftime("%d %b");case"day_of_week":return this.strftime("%A");case"day_of_week_abbr"
:return this.strftime("%a");case"year":return this.strftime("%Y");case"month":return this
.strftime("%m");case"day":return this.strftime("%d");case"day_of_year":return this
.strftime("%j");case"day_of_week_short":return Harvest.date.day_of_week_short(this
);default:return this.nativeToString()}},Harvest.dupeValidator={dupeReported:!1,beforeAddRow
:null,check_for_dupes:function(a,b){var c,d,e,f,g,h;if(!featureFlags.enable_duplicate_row_detection
)return;if(this.dupeReported)return;h=$(a.el).find("tr.week-view-entry");if(h.length<1
)return;e=_.groupBy(h,function(a){var b,c;return b=$(a).data("project-id"),c=$(a)
.data("task-id"),""+b+"-"+c}),f=!1,c=null,d=null,_.each(e,function(a,b){var e;a.length>1&&
(f=!0,e=b.split("-"),c=e[0],d=e[1])});if(f)return g={sent_from:b,user_id:Harvest.
settings.current_user.id,other_user:Harvest.settings.timesheet_owner,user_email:Harvest
.settings.current_user.email,project_id:c,task_id:d,row_views:h.eq(0).parent().html
(),row_models:_.map(a.week.rows(),function(a){return a.toJSON()}),before_add_row:
this.beforeAddRow},jQuery.ajax({type:"POST",url:"/time/week/notify_duplicate",contentType
:"application/x-www-form-urlencoded",data:g,complete:this.dupeReported=!0})},compare_form_with_rows
:function(a){var b,c,d;if(!featureFlags.enable_duplicate_row_detection)return;if(
this.dupeReported)return;return this.before_add_row=null,d=$(a.parent_view.el).find
("tr.week-view-entry"),c=d.length,c>0?b=d.eq(0).parent().html():null,this.beforeAddRow=
{available_projects:a.available_projects,current_rows:b,row_count:c}}};var Harvest
;if(typeof Harvest=="undefined"||Harvest===null)Harvest={};Harvest.event_tracking=
{track:function(a){var b;if(Harvest.needs_timesheet_event_tracking)return b=["_trackEvent"
,a.category,a.action],a.label&&b.push(a.label),a.label&&a.value&&a.value===parseInt
(a.value,10)&&b.push(a.value),typeof _gaq!="undefined"&&_gaq!==null?_gaq.push(b):void 0
}},Harvest.flash={show:function(a,b){return b==null&&(b=Harvest.current_view),this
._flash_wrap(b).html(a)},remove:function(a){return this._flash_wrap(a).html("")},
_flash_wrap:function(a){return a.$el.find(".flash-wrap")}},_.extend(Backbone.View
.prototype,{follow_link:function(a){var b;return b=$(a.target).attr("href"),b||(b=
$(a.target).parents("a").attr("href")),a.preventDefault(),this.initiate_navigation_state
(),Harvest.router.navigate(b,{trigger:!0})}}),Harvest.hours={configure:function()
{return Harvest.hours.localize=function(a,b){return b==null&&(b={}),b.clean_zero&&
Harvest.hours.is_zero(a)?"0":Harvest.settings.time_format==="hours_minutes"?Harvest
.hours.to_hhmm(a):Harvest.hours.to_decimal(a).replace(".",Harvest.settings.decimal_symbol
)}},to_decimal:function(a){var b,c,d,e;if(a==="")return"";if(typeof a=="number")return(
a+0).toFixed(2);a!=null&&(a=Harvest.hours.evaluate_any_math(a));if(a!=null&&a.indexOf
){if(a.indexOf(":")===-1)return isNaN(parseFloat(a.replace(/\,/,".")))?"":parseFloat
(a.replace(/\,/,".")).toFixed(2);e=Harvest.hours.to_hhmm(a).split(":"),d=!1,e[0].
match(/^-/)&&(d=!0,e[0]=e[0].sub("-","")),b=e[0]===""?0:parseFloat(e[0]),c=parseFloat
(e[1]/60),a=(c+0+b).toFixed(2);if(isNaN(a))return"";d&&(a=0-a)}return a},to_hhmm:
function(a){var b,c,d,e;return a===void 0?void 0:(a=Harvest.hours.evaluate_any_math
(a),Harvest.hours.is_hhmm(a)?Harvest.hours.normalize_hhmm(a):isNaN(parseFloat(a))?""
:(typeof a=="string"&&(a=parseFloat(a.replace(/\,/,"."))),d=a.toFixed(2).split("."
),c=d[0]||"0",b=d[1],e=Math.round(parseFloat(b)*60/100),e=e>=10?e:"0"+e,c+":"+e))
},normalize_hhmm:function(a){var b,c,d;return Harvest.hours.is_hhmm(a)?$.trim(a)===""?""
:(d=a.split(":"),b=d[0],c=d[1],b=$.trim(b)||"0",c=parseInt($.trim(c),10)||"00",b=
b===""?0:parseInt(b),b+=Math.floor(c/60),c%=60,""+b+":"+Harvest.hours.two_digit_minutes
(c)):a},is_zero:function(a){return a===0||a==="0"||a==="0:00"||a==="0.00"||a==="0.0"
},is_hhmm:function(a){return $.trim(a.toString())===""||$.trim(a).toString().match
(/^\d*:\d*$/)},duration_validation_errors:function(a){var b;return a.match(/[^0-9\-\:\+\ \.\,]/i
)?"not numeric":(b=parseFloat(Harvest.hours.to_decimal(a)),b<0||a.match(/^\s*-/)?"negative"
:null)},elapsed_between:function(a,b){var c;return!a||!b?null:($("html").hasClass
("lt-ie9")&&(a=Harvest.date.sanitize_ie8(a),b=Harvest.date.sanitize_ie8(b)),a instanceof 
Date||(a=new Date(a)),b instanceof Date||(b=new Date(b)),c=b.getTime()-a.getTime(
),c<0&&(c+=864e5),c/36e5)},ended_at_time:function(a,b){var c,d,e,f;return f=Harvest
.timestamp.to_date(a),f?(d=parseFloat(Harvest.hours.to_decimal(b)),e=d*60*60*1e3,
c=new Date(f),c.setTime(f.getTime()+e),c.getSeconds()>30&&c.setTime(c.getTime()+3e4
),Harvest.timestamp.to_string(c)):null},evaluate_any_math:function(a){var b,c,d,e
,f,g,h,i,j,k,l;g=/\+|-/g,a=a.toString(),e=a.split(g),h=a.match(g);if(!h)return a;
if(h.length===1&&a.match(/^\s*[\+|-]/))return a;Harvest.settings.time_format==="hours_minutes"?
(c=Harvest.hours.to_hhmm(e.shift()).split(":"),j=parseInt(c[0])*60+parseInt(c[1])
):j=parseFloat(Harvest.hours.to_decimal(e.shift()));for(k=0,l=e.length;k<l;k++)i=
e[k],Harvest.settings.time_format==="hours_minutes"?(c=Harvest.hours.to_hhmm(i).split
(":"),i=parseInt(c[0])*60+parseInt(c[1])):i=parseFloat(Harvest.hours.to_decimal(i
)),f=h.shift(),f==="-"&&(j-=i),f==="+"&&(j+=i);return Harvest.settings.time_format==="hours_minutes"?
(d=j%60,b=(j-d)/60,d=Harvest.hours.two_digit_minutes(d),""+b+":"+d):Harvest.hours
.to_decimal(j)},two_digit_minutes:function(a){return a>=10?a:"0"+a},sum_values:function(
a){var b,c,d,e,f,g;return Harvest.settings.time_format==="hours_minutes"?(b=function(
a,b){var c,d,e,f;return f=1,b.match(/^\s*-/)&&(f=-1),c=Harvest.hours.localize(b.replace
(/^\s*\D/,"")).split(":"),d=parseInt(c[0],10),e=parseInt(c[1],10),a+f*(d*60+e)},f=
_.reduce(a,b,0),e=1,f<0&&(e=-1),c=Math.floor(e*f/60),d=f-c*60,e>=0?c+":"+Harvest.
hours.two_digit_minutes(d):"-"+e*c+":"+Harvest.hours.two_digit_minutes(e*d)):(b=function(
a,b){return a+parseFloat(Harvest.hours.to_decimal(b))},g=_.reduce(a,b,0),Harvest.
hours.localize(g))}},Harvest.html_textilize=function(a){var b;return b=(a||"").replace
(/<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi,"").replace(/[<>]/g,""),b=b.replace
(/(^|[^0-9A-Za-z])\*(.+?)\*($|[^0-9A-Za-z])/g,function(a,b,c,d,e,f){return b+"<b>"+
c+"</b>"+d}),b=b.replace(/(^|[^0-9A-Za-z])\_(.+?)\_($|[^0-9A-Za-z])/g,function(a,
b,c,d,e,f){return b+"<i>"+c+"</i>"+d}),b="<p>"+b.split(/\n{2,}/).join("</p><p>").
split(/\n/).join("<br />")+"</p>",new Handlebars.SafeString(b)},_.extend(Backbone
.Model.prototype,{parse:function(a,b){return a[this.model_name]}});var __slice=[]
.slice;Harvest.keyCodes={getCode:function(a){return Harvest.keyCodes.map[a]},isCodeFor
:function(){var a,b,c,d,e;a=arguments[0],c=2<=arguments.length?__slice.call(arguments
,1):[];for(d=0,e=c.length;d<e;d++){b=c[d];if(Harvest.keyCodes.map[b]===a)return!0
}return!1},map:{backspace:8,tab:9,"return":13,shift:16,ctrl:17,alt:18,pausebreak:19
,capslock:20,escape:27," ":32,pageup:33,pagedown:34,end:35,home:36,left:37,up:38,
right:39,down:40,"+":43,printscreen:44,insert:45,"delete":46,0:48,1:49,2:50,3:51,4
:52,5:53,6:54,7:55,8:56,9:57,";":59,"=":61,a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72
,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,s:83,t:84,u:85,v:86,w:87,x:88,
y:89,z:90,command:91,cmd:224,"*":106,"/":111,f1:112,f2:113,f3:114,f4:115,f5:116,f6
:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,",":188,"`":192,"[":219,"\\":220
,"]":221,"'":222}};var PopoverJQuery,PopoverPrototype,__bind=function(a,b){return function(
){return a.apply(b,arguments)}};PopoverJQuery=function(){function a(a){this.hide=
__bind(this.hide,this),this.respond_to_click=__bind(this.respond_to_click,this),Harvest
.Popover.current=null,this.button=a.button,this.container=a.container,this.show_callback=
a.show_callback,this.ctx=a.ctx,this.buttonClass=a.buttonClass||"button-selected",
$(this.button).on("click",this.respond_to_click),$(this.container).on("click",this
.handle_container_click)}return a.prototype.respond_to_click=function(a){return $
(this.container).hasClass("show")?this.hide(a):this.show(a)},a.prototype.show=function(
a){var b;$("body").on("click",this.hide),$("body").on("keyup",Harvest.keyCodes.getCode
("escape"),this.hide),this.set_styles(a),a.stopPropagation(),(b=Harvest.Popover.current
)!=null&&b.hide(),$(this.container).addClass("show"),$(this.button).addClass(this
.buttonClass),Harvest.Popover.current=this;if(this.show_callback)return this.show_callback
.apply(this.ctx)},a.prototype.hide=function(){return $("body").off("click",this.hide
),$("body").off("keyup",Harvest.keyCodes.getCode("escape"),this.hide),$(this.container
).removeClass("show"),$(this.button).removeClass(this.buttonClass),Harvest.Popover
.current=null},a.prototype.handle_container_click=function(a){if(!$(a.target).hasClass
("js-bubble"))return a.stopPropagation()},a.prototype.set_styles=function(a){var b
,c,d;if(!$(this.container).length)return;return b=a?$(a.currentTarget):this.button
,this.container.hasClass("pop-over-right")?(d=b.position().top-(this.container.outerHeight
()/2-b.outerHeight()/2),c=b.position().left+b.outerWidth()):(d=b.outerHeight()+b.
position().top,c=b.position().left-(this.container.outerWidth()/2-b.outerWidth()/2
)),$(this.container).css({position:"absolute",top:Math.ceil(d)+"px",left:Math.ceil
(c)+"px"})},a}(),PopoverPrototype=function(){function a(a){this.hide=__bind(this.
hide,this),this.respond_to_click=__bind(this.respond_to_click,this);var b,c,d,e,f
,g=this;Harvest.Popover.current=null,this.button=a.button,this.container=a.container
,this.showCallback=a.showCallback,this.buttonClass=a.buttonClass||"button-selected"
,this.container.observe("click",this.handle_container_click),c=function(){return b
.observe("click",g.respond_to_click)},f=this.button;for(d=0,e=f.length;d<e;d++)b=
f[d],c()}return a.prototype.respond_to_click=function(a){return $(this.container)
.hasClassName("show")?this.hide(a):this.show(a)},a.prototype.show=function(a){var b
,c=this;$$("body")[0].observe("click",this.hide),$$("body")[0].observe("keyup",function(
a){if(a.keyCode===27)return c.hide()}),a.stopPropagation(),this.set_styles(a),(b=
Harvest.Popover.current)!=null&&b.hide(),this.container.addClassName("show"),this
.button[0].addClassName(this.buttonClass),Harvest.Popover.current=this;if(this.showCallback
)return this.showCallback()},a.prototype.hide=function(){var a=this;return $$("body"
)[0].stopObserving("click",this.hide),$$("body")[0].stopObserving("keyup",function(
b){if(b.keyCode===27)return a.hide()}),this.container.removeClassName("show"),this
.button[0].removeClassName(this.buttonClass),Harvest.Popover.current=null},a.prototype
.handle_container_click=function(a){if(!a.target.hasClassName("js-bubble"))return a
.stopPropagation()},a.prototype.set_styles=function(a){var b,c,d;if(!this.container
)return;return a?b=a.currentTarget?a.currentTarget:a.srcElement:b=this.button[0],
this.container.hasClassName("pop-over-right")?(c=b.measure("left")+b.measure("width"
)+b.measure("margin-left")+b.measure("margin-right")+b.measure("padding-left")+b.
measure("padding-right"),d=b.measure("top")-(this.container.measure("height")/2-b
.measure("height")/2)-(this.container.measure("margin-top")/2-b.measure("margin-top"
)/2)-(this.container.measure("padding-top")/2-b.measure("padding-top")/2)-(this.container
.measure("padding-bottom")/2-b.measure("padding-bottom")/2)):(d=b.measure("top")+
b.measure("height")-(b.measure("margin-top")+b.measure("margin-bottom"))-(b.measure
("padding-top")+b.measure("padding-bottom")),c=b.measure("left")-(this.container.
measure("width")/2-b.measure("width")/2)-(this.container.measure("margin-left")+this
.container.measure("margin-right"))/2-(this.container.measure("padding-left")+this
.container.measure("padding-right"))/2-(b.measure("margin-left")+b.measure("margin-right"
))/2-(b.measure("padding-left")+b.measure("padding-right"))/2),this.container.setStyle
({position:"absolute",top:Math.ceil(d)+"px",left:Math.ceil(c)+"px"})},a}(),typeof 
jQuery!="undefined"&&jQuery!==null?Harvest.Popover=PopoverJQuery:Harvest.Popover=
PopoverPrototype,Harvest.helpers.project_selector_options=function(a,b){var c,d,e
,f,g,h,i,j,k,l,m,n,o,p,q,r,s;b==null&&(b={}),c=b.projects||Harvest.available_project_tasks
(),f=function(a){return _.compact([a.code,a.name]).join("@").toLowerCase()},d=function(
a){return a.toLowerCase()},e=_.groupBy(c,function(a){return a.client_name}),i="",
m=a.get("project_id"),h=Handlebars.Utils.escapeExpression,r=_.sortBy(_.keys(e),d)
;for(n=0,p=r.length;n<p;n++){g=r[n],l="",s=_.sortBy(e[g],f);for(o=0,q=s.length;o<
q;o++)k=s[o],m||(m=k.id),j=k.name,k.code&&k.code!==""&&(j="["+k.code+"] "+k.name)
,l+="<option value='"+h(k.id)+"'"+(m===k.id?" selected":"")+">"+h(j)+"</option>";
l!==""&&(i+="<optgroup label='"+h(g)+"'>",i+=l,i+="</optgroup>"),null}return new 
Handlebars.SafeString(i)},Harvest.helpers.task_option_tags=function(a,b){var c,d,
e,f,g,h,i,j,k,l,m,n,o,p;b==null&&(b={}),d=function(a){return a.name.toLowerCase()
},j=a.get("project_id"),k=a.get("task_id"),e=Handlebars.Utils.escapeExpression,c=
b.projects||Harvest.available_project_tasks(),i=[];for(h in c){g=c[h],f={},p=_.sortBy
(_.values(g.tasks),d);for(m=0,n=p.length;m<n;m++)l=p[m],f[o=l.billable]||(f[o]="<optgroup label='"+
(l.billable?"Billable":"Non-billable")+"'>"),f[l.billable]+="<option value='"+e(l
.id)+"'"+(k===l.id?" selected":"")+">"+e(l.name)+"</option>";i[g.id]=new Handlebars
.SafeString(f[!0]+"</optgroup>"+f[!1]+"</optgroup>")}return i},Harvest.get_random_quote=
function(){var a,b;return b=[{text:"You may delay, but time will not.",source:"Benjamin Franklin"
},{text:"Lost time is never found again.",source:"Benjamin Franklin"},{text:"The only reason for time is so that everything doesn’t happen at once."
,source:"Albert Einstein"},{text:"The wisest are the most annoyed at the loss of time."
,source:"Dante Alighieri"},{text:"Better three hours too soon than a minute too late."
,source:"William Shakespeare"},{text:"It is not enough to be busy… The question is: ‘what are we busy about?’"
,source:"Henry David Thoreau"},{text:"Time keeps on slippin’, slippin’, slippin’… into the future."
,source:"Steve Miller"},{text:"We must use time creatively, in the knowledge that the time is always ripe to do right."
,source:"Martin Luther King, Jr."},{text:"Time, why you punish me?",source:"Darius ‘Hootie’ Rucker"
},{text:"All we have to decide is what to do with the time that is given us.",source
:"J.R.R. Tolkien"}],a=b[Math.floor(Math.random()*b.length)]};var __bind=function(
a,b){return function(){return a.apply(b,arguments)}};Harvest.Refresh=function(){function a
(){this.on_ajax_success=__bind(this.on_ajax_success,this),this.tick=__bind(this.tick
,this),Harvest.settings.environment==="production"?this.inteval=6e4:this.inteval=6e4
,this.counter=0,this.last_tick_at=new Date,$("body").ajaxSuccess(this.on_ajax_success
),setInterval(this.tick,this.inteval)}return a.prototype.tick=function(){var a;a=new 
Date,this.last_tick_at.getDate()!==a.getDate()&&(Harvest.trigger("open-through-midnight"
),this.today_is_first_day_of_week()&&Harvest.trigger("open-through-new-week"));if(
a-this.last_tick_at>this.inteval*1.5){this.last_tick_at=a,this.check();return}this
.counter+=1,this.last_tick_at=a;if(this.counter===4)return this.check()},a.prototype
.today_is_first_day_of_week=function(){var a;return a=["Sunday","Monday","Tuesday"
,"Wednesday","Thursday","Friday","Saturday"],a[(new Date).getDay()]===Harvest.settings
.week_start_day},a.prototype.check=function(){var a=this;return this.counter=0,jQuery
.ajax({type:"GET",url:""+Harvest.router.root+"weekly/check_for_updates",success:function(
b){Harvest.settings.deploy_version!==b.deploy_version&&a.handle_deploy_version_changed
(),Harvest.settings.company_timesheet_version!==b.company_timesheet_version&&(Harvest
.settings.company_timesheet_version=b.company_timesheet_version,Harvest.trigger("company-timesheet-updated"
));if(Harvest.settings.timesheet_version!==b.timesheet_version)return a.on_user_timesheet_version_changed
(b.timesheet_version)}})},a.prototype.handle_deploy_version_changed=function(){var a
,b,c;this.full_reload_necessary=!0;if(Harvest.last_user_activity){b=new Date,c=Math
.random()*5,a=(20+c)*60*1e3;if(b-Harvest.last_user_activity.at>a){if(Harvest.current_view
.is_dirty&&Harvest.current_view.is_dirty())return;return window.location.reload()
}}},a.prototype.safe_to_reload=function(){if(this.full_reload_necessary){if(Harvest
.current_view.is_dirty&&Harvest.current_view.is_dirty())return;return window.location
.reload()}},a.prototype.on_user_timesheet_version_changed=function(a){if(Harvest.
settings.disable_timesheet_reloads===!0)return;return Harvest.settings.timesheet_version=
a,Harvest.collections.bootstrapped_week.reload()},a.prototype.on_ajax_success=function(
a,b,c){var d,e;$("#AjaxSuccess").append('<span id="'+c.type+c.url.replace(/\W/g,"-"
)+'">Completed</span>');if(Harvest.settings.disable_timesheet_reloads===!0)return;
d=b.getResponseHeader("X-Harvest-Timesheet-Version");if(!d)return;e=b.getResponseHeader
("X-Harvest-Old-Timesheet-Version");if(!e)return;if(Harvest.settings.timesheet_version!==
e){this.on_user_timesheet_version_changed(d);return}return Harvest.settings.timesheet_version=
d},a}();var StatusMessageJQuery,StatusMessagePrototype,__bind=function(a,b){return function(
){return a.apply(b,arguments)}};StatusMessageJQuery=function(){function a(){this.
hide=__bind(this.hide,this);var a=this;$(document).ready(function(){a.el=$("#"+Harvest
.StatusMessage.el_id),a.message=a.el.find("."+Harvest.StatusMessage.class_base).first
();if(!a.el.length||!a.message.length)return;a.bind_scroll_events(),a.set_position_style
(),a.el.hasClass("keepalive")||(a.hide_timeout=setTimeout(a.hide,Harvest.StatusMessage
.default_duration))})}return a.prototype.show=function(a){var b,c;if(!this.el)return;
b=a.duration||Harvest.StatusMessage.default_duration,c=a.type||Harvest.StatusMessage
.DEFAULT,this.el.addClass(Harvest.StatusMessage.display_class),this.message.html(
a.text).removeClass().addClass(""+Harvest.StatusMessage.class_base+" "+Harvest.StatusMessage
.class_root+c),clearTimeout(this.hide_timeout),a.keepalive||(this.hide_timeout=setTimeout
(this.hide,b))},a.prototype.hide=function(){if(!this.el)return;this.el.removeClass
(""+Harvest.StatusMessage.display_class+" keepalive"),clearTimeout(this.hide_timeout
)},a.prototype.bind_scroll_events=function(){var a=this;$(window).on("scroll",function(
){return a.set_position_style()})},a.prototype.set_position_style=function(){this
.el.parent().offset().top-$(window).scrollTop()<=0?this.el.addClass(Harvest.StatusMessage
.position_class):this.el.removeClass(Harvest.StatusMessage.position_class)},a}(),
StatusMessagePrototype=function(){function a(){this.hide=__bind(this.hide,this);var a=
this;document.observe("dom:loaded",function(){a.el=$(Harvest.StatusMessage.el_id)
,a.message=Element.select(a.el,"."+Harvest.StatusMessage.class_base)[0];if(!a.el||!
a.message)return;a.bind_scroll_events(),a.set_position_style();if(!a.el.hasClassName
("keepalive"))return a.hide_timeout=setTimeout(a.hide,Harvest.StatusMessage.default_duration
)});return}return a.prototype.show=function(a){var b,c;if(!this.el)return;b=a.duration||
Harvest.StatusMessage.default_duration,c=a.type||Harvest.StatusMessage.DEFAULT,this
.el.addClassName(Harvest.StatusMessage.display_class),this.message.innerHTML=a.text
,this.message.writeAttribute("class",""+Harvest.StatusMessage.class_base+" "+Harvest
.StatusMessage.class_root+c),clearTimeout(this.hide_timeout),a.keepalive||(this.hide_timeout=
setTimeout(this.hide,b))},a.prototype.hide=function(){if(!this.el)return;this.el.
removeClassName(Harvest.StatusMessage.display_class),this.el.removeClassName("keepalive"
),clearTimeout(this.hide_timeout)},a.prototype.bind_scroll_events=function(){var a=
this;Event.observe(window,"scroll",function(){return a.set_position_style()})},a.
prototype.set_position_style=function(){Element.positionedOffset(this.el.up()).top-
Element.cumulativeScrollOffset(this.el.up()).top<=0?this.el.addClassName(Harvest.
StatusMessage.position_class):this.el.removeClassName(Harvest.StatusMessage.position_class
)},a}(),typeof jQuery!="undefined"&&jQuery!==null?Harvest.StatusMessage=new StatusMessageJQuery
:Harvest.StatusMessage=new StatusMessagePrototype,Harvest.StatusMessage.el_id="status_message"
,Harvest.StatusMessage.display_class="active",Harvest.StatusMessage.position_class="fixed_message"
,Harvest.StatusMessage.class_root="flash-",Harvest.StatusMessage.class_base=""+Harvest
.StatusMessage.class_root+"message",Harvest.StatusMessage.default_duration=1e4,Harvest
.StatusMessage.DEFAULT="status",Harvest.StatusMessage.SUCCESS="success",Harvest.StatusMessage
.WARNING="boner",Harvest.timestamp={format_12h:/^(1[012]|0?[1-9]):?([0-5]?\d)?\s?(am|pm|a|p)?$/i
,format_24h:/^(2[0-4]|1\d|0?\d):?([0-5]?\d)?$/,to_date:function(a,b){var c,d,e,f,
g;b==null&&(b=null);if(a==null)return null;a=$.trim(a),a=Harvest.timestamp.insert_colon
(a),d=a.match(Harvest.timestamp.format_24h)||a.match(Harvest.timestamp.format_12h
);if(!d)return null;c=d[1],c==="24"&&(c="00"),f=d[2]||"00",e=Harvest.settings.wants_24h_time||
parseInt(c,10)>12?d[3]||"":d[3]||Harvest.timestamp.meridian_from(c,b),e=e.toUpperCase
();if(e==="A"||e==="P")e+="M";return g=new Date,new Date(g.strftime("%B %d, %Y "+
c+":"+f+":00 "+e))},meridian_from:function(a,b){var c,d,e;return c=parseInt($.trim
(a),10),b!=null?(c===0&&(c=12),e=b.strftime("%p"),d=parseInt(b.strftime("%I"),10)
,c=c===12&&d!==12?0:c,c>=d?e:Harvest.timestamp.inverse_meridian(e)):c===0||7<=c&&
c<=11?"AM":"PM"},inverse_meridian:function(a){return a.match(/a/i)?"PM":"AM"},to_string
:function(a){var b,c;return a==null&&(a=new Date),c=Harvest.settings.wants_24h_time?
a.strftime("%H:%M"):a.strftime("%I:%M%P").replace(/^0/,""),b=a.strftime(c),b.replace
(/^0([1-9])/,"$1")},normalize:function(a,b){var c;return c=Harvest.timestamp.to_date
(a,Harvest.timestamp.to_date(b)),Harvest.timestamp.to_string(c)},insert_colon:function(
a){var b,c,d,e;return a=a.replace(/\.|,/,":"),a.indexOf(":")!==-1?a:(c=a.match(/(\d+)(am|pm|a|p)?/i
),c?(e=c[1]||"",e.length<3&&(e+="00"),d=c[2]||"",b=e.length-2,e.slice(0,b)+":"+e.
slice(b,e.length)+d):"")}};var __bind=function(a,b){return function(){return a.apply
(b,arguments)}};Harvest.Tooltip=function(){function a(a){var b=this;this.element=
a,this.hide=__bind(this.hide,this),this.show=__bind(this.show,this),this._retrieve_tooltip
(),this.hide(),this.activate(),this._gc=setInterval(function(){if(!b._in_dom(b.element
))return b.destroy()},1e3)}return a.prototype.tooltip_class="harvest-tooltip",a.prototype
.visible_class="harvest-tooltip-visible",a.prototype.activate=function(){return this
._addEventListener(this.element,"mouseover",this.show),this._addEventListener(this
.element,"mouseout",this.hide),this._addEventListener(this.element,"click",this.hide
)},a.prototype.deactivate=function(){return this._removeEventListener(this.element
,"mouseover",this.show),this._removeEventListener(this.element,"mouseout",this.hide
),this._removeEventListener(this.element,"click",this.hide)},a.prototype.show=function(
){return this._add_class(this.tooltip,this.visible_class),this._position_tooltip(
),this.is_hidden=!1},a.prototype.hide=function(){if(this.is_hidden)return;return this
._remove_class(this.tooltip," "+this.visible_class),this.is_hidden=!0},a.prototype
.destroy=function(){return clearInterval(this._gc),this.deactivate(),this._add_class
(this.element,""+this.tooltip_class+"-"+this._alignment),this.is_simple_tooltip&&
(this.element.title=this.tooltip.childNodes[0].innerHTML),this.tooltip.parentNode
.removeChild(this.tooltip)},a.prototype._alignment="left",a.prototype._retrieve_tooltip=
function(){var a;return a=this.element.rel,this.tooltip=a?document.getElementById
(a):this._build_simple_tooltip(),this._set_alignment()},a.prototype._set_alignment=
function(){return this._has_class(this.element,""+this.tooltip_class+"-center")?this
._alignment="center":this._has_class(this.element,""+this.tooltip_class+"-right")&&
(this._alignment="right"),this._add_class(this.tooltip,""+this.tooltip_class+"-"+
this._alignment),this._remove_class(this.element,""+this.tooltip_class+"-"+this._alignment
)},a.prototype._position_tooltip=function(){var a;return a=this._get_offset(this.
element),this.tooltip.style.top=a.top-this.tooltip.offsetHeight+"px",this.tooltip
.style.left=this["_get_position_"+this._alignment](a)+"px"},a.prototype._get_position_right=
function(a){return a.left+Math.ceil(this.element.offsetWidth/2)-this.tooltip.offsetWidth+20
},a.prototype._get_position_center=function(a){return a.left+this.element.offsetWidth/2-
Math.ceil(.5*this.tooltip.offsetWidth)},a.prototype._get_position_left=function(a
){return a.left+Math.floor(this.element.offsetWidth/2)-20},a.prototype._build_simple_tooltip=
function(){var a,b;return this.is_simple_tooltip=!0,b=document.createElement("div"
),b.className=this.tooltip_class,a=document.createElement("span"),a.innerHTML=this
.element.title,this.element.title="",b.appendChild(a),document.body.appendChild(b
),b.style.width=a.offsetWidth+1+"px",b},a.prototype._in_dom=function(a){return a.
parentNode?this._in_dom(a.parentNode):a===document},a.prototype._add_class=function(
a,b){return a.className+=" "+b},a.prototype._remove_class=function(a,b){return a.
className=a.className.replace(b,"")},a.prototype._has_class=function(a,b){return a
.className.match(b)},a.prototype._get_offset=function(a){var b;b={top:a.offsetTop
,left:a.offsetLeft};while(a=a.offsetParent)b.top+=a.offsetTop,b.left+=a.offsetLeft
;return b},a.prototype._addEventListener=function(a,b,c){if(a.addEventListener)return a
.addEventListener(b,c,!1);if(a.attachEvent)return a.attachEvent("on"+b,c)},a.prototype
._removeEventListener=function(a,b,c){if(a.removeEventListener)return a.removeEventListener
(b,c,!1);if(a.detachEvent)return a.detachEvent("on"+b,c)},a}();var __bind=function(
a,b){return function(){return a.apply(b,arguments)}};Harvest.TrafficLight=function(
){function a(){this.window_unload_while_dirty=__bind(this.window_unload_while_dirty
,this),this.show_warning=__bind(this.show_warning,this);var a=this;$(window).on("beforeunload"
,this.window_unload_while_dirty),this.working_div=$("<div />",{"class":"trafficlight"
,style:"display:none;"}).html("Harvest is syncing"),$(function(){return $("body")
.prepend(a.working_div)})}return a.prototype.global_clean=!0,a.prototype.pending_actions=
[],a.prototype.show_warning_timeout=null,a.prototype.wait_for_something=function(
){this.pending_actions.push(new Date),this.toggle_global_state()},a.prototype.something_is_done=
function(){var a;a=this.pending_actions.pop(),this.toggle_global_state()},a.prototype
.toggle_global_state=function(){return this.pending_actions.length>0?(this.global_clean=!1
,this.show_warning_timeout=setTimeout(this.show_warning,500)):(this.global_clean=!0
,clearTimeout(this.show_warning_timeout),this.show_warning_timeout=null,this.hide_warning
())},a.prototype.show_warning=function(){if(this.working_div.not(":visible"))return this
.working_div.slideDown()},a.prototype.hide_warning=function(){if(this.working_div
.is(":visible"))return this.working_div.slideUp()},a.prototype.window_unload_while_dirty=
function(){if(!this.global_clean)return"Your timesheet is still saving. If you leave this page, entries may be lost."
},a}(),Harvest.traffic_light=new Harvest.TrafficLight,Harvest.transition_end=function(
a,b){var c,d,e=this;d={MozTransition:"transitionend",OTransition:"oTransitionEnd"
,msTransition:"MSTransitionEnd",transition:"transitionend",WebkitTransition:"webkitTransitionEnd"
},c=null,_.each(_.keys(d),function(a){$("div")[0].style[a]!==void 0&&(c=a)});if(c
)return a.on(d[c],function(){a.off(d[c]);if(typeof b=="function")return b()});if(typeof 
b=="function")return setTimeout(b,100)};var __hasProp={}.hasOwnProperty,__extends=
function(a,b){function d(){this.constructor=a}for(var c in b)__hasProp.call(b,c)&&
(a[c]=b[c]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype
,a};Harvest.Router=function(a){function b(){return b.__super__.constructor.apply(
this,arguments)}return __extends(b,a),b.prototype.root="/time/",b.prototype.routes=
{"":"timesheet_index","day/:year/:month/:day":"timesheet_at","day/:year/:month/:day/:other_user"
:"other_users_timesheet_at",week:"timesheet_week_index","week/:year/:month/:day":"timesheet_week_at"
,"week/:year/:month/:day/:other_user":"other_users_timesheet_week_at"},b.prototype
.initialize=function(){var a=this;if(window.history.pushState)return;return this.
routes.day="timesheet_index",this.routes[""]="timesheet_unused_root",this.timesheet_unused_root=
function(){return a.timesheet_index()}},b.prototype.timesheet_index=function(){var a
,b;return(b=Harvest.views).today||(b.today=new Harvest.Views.Timesheet.Day),a=Harvest
.views.today.spent_at,Harvest.settings.timesheet_owner=Harvest.settings.current_user
.id,Harvest.cache_view("day/"+a.toDateString()+"/user/"+Harvest.settings.current_user
.id,function(){return Harvest.views.today})},b.prototype.timesheet_at=function(a,
b,c){return c=this._get_date(a,b,c),Harvest.settings.timesheet_owner=Harvest.settings
.current_user.id,Harvest.cache_view("day/"+c.toDateString()+"/user/"+Harvest.settings
.current_user.id,function(){var a,b;a=new Harvest.Views.Timesheet.Day({spent_at:c
});if((b=a.model)!=null?b.is_today():void 0)Harvest.views.today=a;return a})},b.prototype
.other_users_timesheet_at=function(a,b,c,d){return c=this._get_date(a,b,c),Harvest
.settings.timesheet_owner=d,Harvest.cache_view("day/"+c.toDateString()+"/user/"+d
,function(){var a;return a=new Harvest.Views.Timesheet.Day({spent_at:c,other_user
:d}),a})},b.prototype.timesheet_week_index=function(){var a,b;return(b=Harvest.views
).this_week||(b.this_week=new Harvest.Views.Timesheet.Week),a=Harvest.Collections
.first_day_in_week_for(new Date(Harvest.views.this_week.spent_at)),Harvest.settings
.timesheet_owner=Harvest.settings.current_user.id,Harvest.cache_view("week/"+a.toDateString
()+"/user/"+Harvest.settings.current_user.id,function(){return Harvest.views.this_week
})},b.prototype.timesheet_week_at=function(a,b,c){var d;return d=this._get_date(a
,b,c),d=Harvest.Collections.first_day_in_week_for(d),Harvest.settings.timesheet_owner=
Harvest.settings.current_user.id,Harvest.cache_view("week/"+d.toDateString()+"/user/"+
Harvest.settings.current_user.id,function(){var a,b;a=new Harvest.Views.Timesheet
.Week({spent_at:d});if((b=a.model)!=null?b.contains_today():void 0)Harvest.views.
this_week=a;return a})},b.prototype.other_users_timesheet_week_at=function(a,b,c,
d){var e;return e=this._get_date(a,b,c),e=Harvest.Collections.first_day_in_week_for
(e),Harvest.settings.timesheet_owner=d,Harvest.cache_view("week/"+e.toDateString(
)+"/user/"+d,function(){return new Harvest.Views.Timesheet.Week({spent_at:e,other_user
:d})})},b.prototype._get_date=function(a,b,c){var d;return a=parseInt(a,10),b=parseInt
(b,10)-1,c=parseInt(c,10),d=new Date(a,b,c),d.getDate()!==c&&(d.setYear(a),d.setMonth
(b),d.setDate(c)),d},b}(Backbone.Router);var __bind=function(a,b){return function(
){return a.apply(b,arguments)}};Harvest.Models.CompoundEntry=function(){function a
(a){a==null&&(a={}),this.timer_tick=__bind(this.timer_tick,this),this.silent_remove=
__bind(this.silent_remove,this),this.each_entry=__bind(this.each_entry,this),this
.build_entry=__bind(this.build_entry,this),this.adjust_entries=__bind(this.adjust_entries
,this),this.spent_at=a.spent_at,this.project_id=a.project_id,this.task_id=a.task_id
,this.locked_reason=a.locked_reason,this.day=a.day,this.week=a.week,this.day.on("timer-tick"
,_.throttle(this.timer_tick,100)),this.on("changed",this.adjust_entries)}return a
.prototype.entries=function(){var a=this;return this.day.filter(function(b){return a
.project_id===b.get("project_id")&&a.task_id===b.get("task_id")})},a.prototype.adjust_entries=
function(a){var b;return b=this.entries(),b.length===0&&a>0?this.day.add(this.build_entry
(a),{silent:!0}):b.length===1?b[0].set("hours",a):b.length>1&&this.day.add(this.build_entry
(a-this.sum_hours()),{silent:!0}),this.week.trigger("local-week-sync")},a.prototype
.build_entry=function(a){return new Harvest.Models.DayEntry({spent_at:this.spent_at
,hours:a,project_id:this.project_id,task_id:this.task_id})},a.prototype.each_entry=
function(a){var b=this;return _.each(this.entries(),function(b){return a(b)})},a.
prototype.silent_remove=function(){var a=this;return this.each_entry(function(b){
return a.day.remove(b,{silent:!0}),b.trigger("destroy")})},a.prototype.sum_hours=
function(){var a;return a=function(a,b){return a+parseFloat(b.hours_or_hours_from
())},_.reduce(this.entries(),a,0)},a.prototype.is_billed=function(){var a;return a=
function(a,b){return a||b.get("invoice_id")>0},_.reduce(this.entries(),a,!1)},a.prototype
.is_approved=function(){var a,b,c,d,e,f,g=this;a=function(a,b){return a||b.get("is_closed"
)===!0},f=this.week.days;for(d=0,e=f.length;d<e;d++){b=f[d],c=b.filter(function(a
){return g.project_id===a.get("project_id")&&g.task_id===a.get("task_id")});if(_.
reduce(c,a,this.week.approval.span_approved))return!0}return!1},a.prototype.toJSON=
function(){var a,b,c,d,e;return c={},a=this.entries(),c.is_billed=this.is_billed(
),c.is_closed=this.is_approved(),c.is_locked=c.is_billed||c.is_closed||this.locked_reason!=
null,d=Harvest.projects[this.project_id],d&&(e=d.tasks[this.task_id]),d&&e&&(!d.project_active||!
e.task_assigned||!d.user_assigned||!e.task_active)&&(c.project_active=d.project_active
,c.task_assigned=d.task_assigned,c.user_assigned=d.user_assigned,c.task_active=e.
task_active,c.is_locked=!0),Harvest.settings.wants_timestamp_timers&&(c.is_locked=!0
),c.project_id=this.project_id,c.task_id=this.task_id,c.is_running=this.is_running
(),b=this.sum_hours(),c.is_zero=b===0||!b,c.hours=c.is_zero?c.is_locked?"0":c.is_running?
Harvest.hours.localize(0):"":Harvest.hours.localize(b),c},a.prototype.is_running=
function(){return _.any(this.entries(),function(a){return a.get("timer_started_at"
)})},a.prototype.timer_tick=function(){if(this.is_running())return this.trigger("timer-tick"
),this.week.trigger("update-totals")},a}(),_.extend(Harvest.Models.CompoundEntry.
prototype,Backbone.Events);var __hasProp={}.hasOwnProperty,__extends=function(a,b
){function d(){this.constructor=a}for(var c in b)__hasProp.call(b,c)&&(a[c]=b[c])
;return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a};Harvest
.Models.DayEntry=function(a){function b(){return b.__super__.constructor.apply(this
,arguments)}return __extends(b,a),b.prototype.model_name="day_entry",b.prototype.
url=function(){return this.isNew()?"/time/api.json":"/time/api/"+this.get("id")+".json"
},b.prototype.validate=function(){},b.prototype.parse=function(a,c){return this.timer_stopped_without_save===!0&&
(a.day_entry.timer_started_at=null),this.timer_stopped_without_save=!1,b.__super__
.parse.call(this,a,c)},b.prototype.set_collection=function(a){return this.collection=
a,this.set("spent_at",a.spent_at.toString("iso"))},b.prototype.spent_at=function(
){var a;return a=this.get("spent_at"),a.strftime?a:a.match(/\d\d\d\d \w+ \d+/)?new 
Date(a):a.match(/^\d+-\d+-\d+$/)?Harvest.parse_date(a):Harvest.date.parse_localized
(a)},b.prototype.has_backend_timer_value=function(){var a;return this.get("timer_started_at"
)?(a=this.get("hours_with_timer"),a!==null&&a!==void 0):!1},b.prototype.initialize=
function(){return Harvest.on("global-timer-tick",this.timer_tick,this)},b.prototype
.timer_tick=function(){var a;if(this.get("timer_started_at")){a=this.get("hours_with_timer"
),this.set({hours_with_timer:a+.01},{silent:!0}),this.trigger("timer-tick");if(this
.collection)return this.collection.trigger("timer-tick")}},b.prototype.hours_or_hours_from=
function(a){var b,c;a==null&&(a=new Date),c=this.get("timer_started_at"),b=this.get
("hours");if(c){if(this.has_backend_timer_value())return this.get("hours_with_timer"
);c==="now"&&(c=new Date),b=parseFloat(b)+Harvest.hours.elapsed_between(c,a)}return b||"0.0"
},b.prototype.localized_hours_or_hours_from=function(){return Harvest.hours.localize
(this.hours_or_hours_from())},b.prototype.stop_timer=function(a){var b,c;a==null&&
(a={}),b={hours:this.hours_or_hours_from().toString(),timer_started_at:null};if(Harvest
.settings.wants_timestamp_timers){c=this.get("started_at");if(c===void 0||c==="")
c=this.get("started-at");b.ended_at=Harvest.hours.ended_at_time(c,b.hours),b["ended-at"
]=b.ended_at}return a.without_save===!0?(b.timer_stopped_without_save=!0,this.set
(b),this.trigger("timer-tick")):this.set(b,{silent:!0})},b.prototype.start_timer=
function(){return this.set("hours_with_timer",null),this.set("timer_started_at","now"
,{silent:!0})},b.prototype.new_entry_on_start_timer=function(){var a,b,c,d;if(!Harvest
.settings.wants_timestamp_timers)return;return c=this.get("notes"),d=this.get("external_shorthand"
),b=this.get("external_id"),a={spent_at:this.get("spent_at"),hours:"0",notes:c,project_id
:this.get("project_id"),task_id:this.get("task_id"),user_id:this.get("user_id"),started_at
:"",ended_at:"",timer_started_at:"now"},d&&b&&(c=c.toString().replace(/\s$/,""),a
.notes=[c," ",d,"#",b].join(""),a.external_id=b,a.external_shorthand=d,a.external_namespace=
this.get("external_namespace"),a.external_service=this.get("external_service"),a.
external_service_icon=this.get("external_service_icon")),new Harvest.Models.DayEntry
(a)},b.prototype.is_from_today=function(){var a,b;return b=(new Date).toString("iso"
),a=this.get("spent_at"),a.strftime?a.toString("iso")===b:a===b},b.prototype.has_external_ref=
function(){var a,b;return a=this.get("external_namespace"),b=this.get("external_service"
),a!==null&&a!==void 0&&b!==null&&b!==void 0},b.prototype.format_external_ref=function(
a){var b,c,d,e,f,g,h,i,j;return i=this.get("external_service"),h=this.get("external_namespace"
),g=this.get("external_service_icon"),f="/uploads/platform_icons/"+g,e='<span class="remote-entry-data">'
,i.match(/zendesk/)?(b=this.get("external_id"),c=[h,b].join("/tickets/"),j=this.get
("external_shorthand"),e+='<a href="'+c+'" class="external-link external-link-zendesk" target="blank">'+
j+"#"+b+"</a>",e+=a):(d=g!=null,h?(e+='<span class="permalink">',d&&(e+='<a href="'+
h+'" class="external-link external-link-'+i+'" target="blank"><img src="'+f+'" height="15" width="15"/></a>'
),e+='<a href="'+h+'" class="external-link external-link-'+i+'" target="blank">'+
a+"</a>",e+="</span>"):(d&&(e+='<img src="'+f+'" height="15" width="15"/>'),e+="<span>"+
a+"</span>")),e+="</span>",new Handlebars.SafeString(e)},b.prototype.toJSON=function(
){var a,b,c,d,e,f=this;a=_.clone(this.attributes),c=Harvest.projects_by_user_id[a
.user_id||Harvest.settings.timesheet_owner]||Harvest.projects,b=c[a.project_id],b&&
(d=b.tasks[a.task_id]),!this.isNew()&&(!b||!d)&&Harvest.reload_client_project_task_names_for
(a.user_id,function(){return f.trigger("sync")}),a.project_name="",b&&(a.client_name=
b.client_name,a.project_name=b.code&&b.code!==""?"["+b.code+"] "+b.name:b.name),a
.task_name="",d&&(a.task_name=d.name),a.notes=this.get("notes"),a.textilized_notes=
Harvest.html_textilize(a.notes),this.has_external_ref()&&(a.textilized_notes=this
.format_external_ref(a.textilized_notes)),this.isNew()?(e=this.hours_or_hours_from
(),e==="0.0"||e==="0"?a.hours="":a.hours=Harvest.hours.localize(e)):a.hours=Harvest
.hours.localize(this.hours_or_hours_from()),a.has_notes=a.notes!==null&&a.notes.replace
(/\s+/,"")!=="";if(Harvest.settings.wants_timestamp_timers){if(a.started_at===void 0||
a.started_at==="")a.started_at=a["started-at"];if(a.ended_at===void 0||a.ended_at===""
)a.ended_at=a["ended-at"]}return a.existing_record=!this.isNew(),a.is_from_today=
this.is_from_today(),a.timer_can_be_restarted=a.is_from_today&&!this.get("timer_started_at"
),a.localized_spent_at=this.spent_at().strftime(Harvest.settings.date_format),a.css_class=
[],this.get("timer_started_at")&&(a.css_class.push("running"),a.running=!0),Harvest
.settings.current_user.is_admin===!0?a.css_class.push("viewed-by-admin"):a.css_class
.push("not-viewed-by-admin"),this.is_locked()&&(a.project_active=b.project_active
,a.task_assigned=d.task_assigned,a.user_assigned=b.user_assigned,a.task_active=d.
task_active,a.css_class.push("locked"),a.locked=!0),a.css_class=a.css_class.join(" "
),a},b.prototype.is_locked=function(){var a,b,c;b=Harvest.projects_by_user_id[this
.get("user_id")||Harvest.settings.timesheet_owner]||Harvest.projects,a=b[this.get
("project_id")],a&&(c=a.tasks[this.get("task_id")]);if(a&&c)if(!a.project_active||!
c.task_assigned||!a.user_assigned||this.get("is_closed")===!0||this.get("is_billed"
)===!0||!c.task_active)return!0;return!1},b}(Backbone.Model),Harvest.Models.RecentProjectTask=
function(){function a(a){var b,c;this.attributes=a,b=Harvest.projects[a.project_id
],c=b.tasks[a.task_id],this.attributes.project_name=b.code&&b.code!==""?"["+b.code+"] "+
b.name:b.name,this.attributes.client_name=b.client_name,this.attributes.task_name=
c!=null?c.name:void 0,this.attributes.project_active=b.project_active,this.attributes
.user_assigned=b.user_assigned,this.attributes.task_assigned=c?c.task_assigned:!1
}return a.prototype.toJSON=function(){return _.clone(this.attributes)},a.prototype
.is_active=function(){return this.attributes.project_active&&this.attributes.user_assigned&&
this.attributes.task_assigned},a.prototype.set_defaults_on_day_entry=function(a){
return a.set("project_id",this.attributes.project_id),a.set("task_id",this.attributes
.task_id)},a}();var __hasProp={}.hasOwnProperty,__extends=function(a,b){function d
(){this.constructor=a}for(var c in b)__hasProp.call(b,c)&&(a[c]=b[c]);return d.prototype=
b.prototype,a.prototype=new d,a.__super__=b.prototype,a};Harvest.Models.StatusEntry=
function(a){function b(){return b.__super__.constructor.apply(this,arguments)}return __extends
(b,a),b.prototype.model_name="day_entry",b.prototype.toJSON=function(){var a,c;return a=
b.__super__.toJSON.apply(this,arguments),a.user_name=Harvest.users[a.user_id].name
,a.user_avatar=Harvest.users[a.user_id].avatar,c=["team-entry"],a.running&&c.push
("running"),a.project_id===0&&c.push("empty"),a.css_class=c.join(" "),a},b}(Harvest
.Models.DayEntry),Harvest.Models.WeekDayTotal=function(){function a(a){a==null&&(
a={}),this.spent_at=a.spent_at,this.hours=0}return a.prototype.add_entry=function(
a){return this.entries.push(a)},a.prototype.refresh_total=function(){var a=this;return this
.hours=0,_.each(this.entries,function(b){return a.hours+=parseFloat(b.get("hours"
))}),this.hours},a.prototype.toJSON=function(){var a;return a={},a.spent_at=this.
spent_at,a.hours=Harvest.hours.localize(this.hours),a},a}(),Harvest.Models.WeekRow=
function(){function a(a){a==null&&(a={}),this.user_id=Harvest.settings.timesheet_owner
,this.project_id=a.project_id,this.task_id=a.task_id,this.locked_reason=a.locked_reason
,this.row_approved=a.row_approved,this.week=a.week}return a.prototype.sum_hours=function(
){var a;return a=function(a,b){return a+b.sum_hours()},Harvest.hours.localize(_.reduce
(this.week.compound_entries(this),a,0))},a.prototype.get=function(a){return this[
a]},a.prototype.remove=function(){var a,b=this;return a=_.pick(this.toJSON(),["of_user"
,"project","task","year_begin","yday_begin"]),a.timesheet_2012_beta="true",jQuery
.ajax({type:"POST",url:"/entry/remove_row",contentType:"application/x-www-form-urlencoded"
,data:a,success:function(a){return _.invoke(b.week.compound_entries(b),"silent_remove"
),b.trigger("destroy"),b.week.trigger("week-row-destroy",b)},error:function(a){return b
.week.trigger("week-ajax-failure",jQuery.parseJSON(a.responseText))}})},a.prototype
.sort_string=function(){var a,b;return a=Harvest.projects[this.project_id],a&&(b=
a.tasks[this.task_id]),a&&b?[a.client_name,a.name,b.name].join("---").toLowerCase
():""},a.prototype.is_approved=function(){var a;return this.row_approved?!0:(a=function(
a,b){return a||b.is_approved()},_.reduce(this.week.compound_entries(this),a,this.
approved))},a.prototype.toJSON=function(){var a,b,c,d;return b={},b.of_user=this.
user_id,b.project=this.project_id,b.task=this.task_id,b.total_hours=Harvest.hours
.localize(this.sum_hours(),{clean_zero:!0}),b.year_begin=this.week.period_begin()
.toString("year"),b.yday_begin=this.week.period_begin().toString("day_of_year"),c=
Harvest.projects[b.project],c&&(d=c.tasks[b.task]),c&&(b.client_name=c.client_name
,b.project_name_sans_code=c.name,b.project_name=c.code&&c.code!==""?"["+c.code+"] "+
c.name:c.name),d&&(b.task_name=d.name),b.is_locked=!1,c&&d&&(!c.project_active||!
d.task_assigned||!c.user_assigned)&&(b.project_active=c.project_active,b.task_assigned=
c.task_assigned,b.user_assigned=c.user_assigned,b.task_active=d.task_active,b.is_locked=!0
),a=function(a,b){return a||b.is_billed()},b.is_billed=_.reduce(this.week.compound_entries
(this),a,b.is_billed||!1),b.is_closed=this.is_approved(),b.is_locked||(b.is_locked=
b.is_billed||b.is_closed||this.locked_reason!=null),b.locked_reason=this.locked_reason
,b},a}(),_.extend(Harvest.Models.WeekRow.prototype,Backbone.Events);var __hasProp=
{}.hasOwnProperty,__extends=function(a,b){function d(){this.constructor=a}for(var c in 
b)__hasProp.call(b,c)&&(a[c]=b[c]);return d.prototype=b.prototype,a.prototype=new 
d,a.__super__=b.prototype,a};Harvest.View=function(a){function b(){return b.__super__
.constructor.apply(this,arguments)}return __extends(b,a),b.prototype.show=function(
){return this.$el.removeClass("js-hidden").addClass("js-harvest-current-view")},b
.prototype.hide_all_decorations=function(){return typeof this.remove_calendar=="function"&&
this.remove_calendar(),typeof this.remove_other_user_selector=="function"&&this.remove_other_user_selector
(),this.$el.removeClass("js-harvest-current-view")},b.prototype.initiate_navigation_state=
function(){return this.$el.addClass("js-navigation-triggered")},b.prototype.clear_navigation_state=
function(){return this.$el.removeClass("js-navigation-triggered")},b.prototype.is_in_navigation_state=
function(){return this.$el.hasClass("js-navigation-triggered")},b.prototype.hide_all_views_with_active_navigation_state=
function(){return $(".js-with-models.js-navigation-triggered").addClass("js-hidden"
).removeClass("js-navigation-triggered")},b.prototype.hide_from_screen=function()
{return this.$el.addClass("js-hidden")},b.prototype.is_fully_loaded=function(){return this
.$el.hasClass("js-with-models")},b.prototype.mark_as_root_view=function(){return this
.$el.addClass("js-root-view")},b}(Backbone.View),Harvest.Views.Timesheet.OptimisticModelSave=
{optimistic_model_save:function(a,b,c){var d,e,f,g,h,i,j,k,l=this;a==null&&(a={})
,b==null&&(b=null),c==null&&(c={}),Harvest.traffic_light.wait_for_something(),b===
null&&(b=this.model),b.save(a,{wait:!1,success:function(){Harvest.traffic_light.something_is_done
(),l.optimistic=!1,typeof c.success=="function"&&c.success(),l.collection.trigger
("save-success");if(l.model.has_backend_timer_value())return l.model.trigger("timer-tick"
)},error:function(a,b){var c;return c=jQuery.parseJSON(b.responseText),a.trigger("ajax-failure"
,c),Harvest.traffic_light.something_is_done()}}),f=b.spent_at();if(this.collection
.spent_at.strftime("%Y %B %d")===f.strftime("%Y %B %d"))this.collection.get(b.cid
)||this.collection.add(b);else{b.trigger("destroy:date_change"),this.collection.remove
(b),j=Harvest.collections.weeks;for(d in j){i=j[d];if(i.contains_day(f)&&i.user_id
.toString()===b.get("user_id").toString()){e=i.get_day(f),b.set_collection(e),e.get
(b.cid)||e.add(b),e.trigger("timer-tick");break}}k=Harvest.views;for(g in k){h=k[
g];if(h.spent_at.getTime()===this.model.spent_at().getTime()){h.render();break}}}
return this.collection.trigger("timer-tick"),b.trigger("sync")}},Harvest.Views.Timesheet
.PreferredEntryMethod={update_preferred_entry_method:function(){var a=this;if(this
.is_browsing_other_user())return;if(Harvest.settings.current_user.preferred_entry_method===
this.name)return;return jQuery.ajax({type:"POST",url:"/time/update_preferred_entry_method/"+
this.name,contentType:"application/x-www-form-urlencoded",dataType:"text",success
:function(){return Harvest.settings.current_user.preferred_entry_method=a.name}})
}},Harvest.Views.Timesheet.Review={toggle_approval_confirmation:function(a){var b
,c;return a.preventDefault(),c=$(a.target).parents(".js-wrap"),b=c.find(".approval-confirmation"
),Harvest.event_tracking.track({category:"Timesheets "+this.parent_view(),action:"Approval"
,label:b.is(":visible")?"Cancel approval confirmation":"Show confirmation"}),b.toggle
(),c.find(".submit-link").toggle()},review_week:function(a){var b,c;return b=a.days
[0].spent_at,c={from_timesheet_beta:!0,from_screen:this.name},this._submit_weekly_form
(a,"/daily/review",c)},unlock_week:function(a){var b,c;return b=a.days[0].spent_at
,c={approval_period_start:b.toString("day_of_year"),approval_period_start_year:b.
toString("year")},this._submit_weekly_form(a,"/entry/unlock",c)},approval_flags:function(
a){return Harvest.settings.approval_required!=null?{is_approved:a.is_approved(),pending_approval
:a.is_pending_approval(),not_yet_submitted:!a.is_pending_approval()&&!a.is_approved
(),can_unlock_approved_timesheet:a.any_approved()&&Harvest.settings.current_user.
is_admin===!0}:{}},_submit_weekly_form:function(a,b,c){var d,e,f,g,h;d=a.days[0].
spent_at,_.defaults(c,{return_to:[window.location.pathname,window.location.hash].
join(""),of_user:a.user_id,submitted_date:(new Date).toString("day_of_year"),submitted_date_year
:(new Date).toString("year"),authenticity_token:$("meta[name=csrf-token]").attr("content"
),period_begin:d.toString("day_of_year"),period_begin_year:d.toString("year")}),e=
$("<form>").hide().attr({method:"POST",action:b}),$("body").append(e);for(f in c)
h=c[f],g=$("<input>").attr({type:"hidden",name:f,value:h}),e.append(g);return e.submit
()},submit_for_approval:function(){return Harvest.event_tracking.track({category:"Timesheets "+
this.parent_view(),action:"Approval",label:"Submit For Approval"}),this.review_week
(this.week)},withdraw_approval:function(){return Harvest.event_tracking.track({category
:"Timesheets "+this.parent_view(),action:"Approval",label:"Withdraw Approval"}),this
.unlock_week(this.week)},parent_view:function(){return Harvest.current_view.collection?"Day"
:"Week"}},Harvest.Views.Timesheet.UserSwitcher={setup_user_switcher_popover:function(
){return new Harvest.Popover({button:this.$(".js-other-user-btn").first(),container
:this.$(".js-other-user-selector-wrap")})},jump_to_other_users_timesheet:function(
a){var b,c,d,e,f,g,h;return(h=Harvest.Popover.current)!=null&&h.hide(),Harvest.event_tracking
.track({category:"Timesheets "+this.parent_view(),action:"Switch User",label:"Change User Selector"
}),e=this.name==="weekly"?"time/week":"time/day",g=this.spent_at.toString("year")
,c=this.spent_at.toString("month"),b=this.spent_at.toString("day"),d=$(a.target).
val(),f="/"+e+"/"+g+"/"+c+"/"+b+"/"+d,$(".js-other-user-selector").val(d),window.
location=f},get_grouped_users:function(){var a,b,c,d,e,f,g;b=[],a=[],g=Harvest.users
;for(e in g)d=g[e],c=d,c.id=e,d.is_archived||(c.is_contractor?a:b).push(c);return f=
{employees:_(b).sortBy("name"),contractors:_(a).sortBy("name")}},is_browsing_other_user
:function(){return this.options.other_user&&Harvest.settings.current_user.id.toString
()!==this.options.other_user.toString()},show_user_switcher_click:function(a){return Harvest
.event_tracking.track({category:"Timesheets "+this.parent_view(),action:"Switch User"
,label:"Show User Selector"})},parent_view:function(){return Harvest.current_view
.collection?"Day":"Week"}};var __hasProp={}.hasOwnProperty,__extends=function(a,b
){function d(){this.constructor=a}for(var c in b)__hasProp.call(b,c)&&(a[c]=b[c])
;return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a};Harvest
.Views.Timesheet.CompoundEntry=function(a){function b(){return b.__super__.constructor
.apply(this,arguments)}return __extends(b,a),b.prototype.tagName="td",b.prototype
.className="day",b.prototype.events={"change .js-compound-entry":"change"},b.prototype
.initialize=function(){return this.model.on("timer-tick",this.render,this)},b.prototype
.render=function(){var a,b,c=this;return b=this.model.toJSON(),b.unique_name="day"+
this.model.spent_at.toString("day_of_year")+"_project"+this.model.project_id+"_task"+
this.model.task_id,a=Handlebars.templates["timesheet/week/_compound_entry"](b),this
.model.spent_at.toString("iso")===(new Date).toString("iso")?this.$el.addClass("today"
):this.$el.addClass("test-not-today"),b.is_running?this.$el.addClass("timer-running"
):this.$el.removeClass("timer-running"),b.is_locked&&b.is_zero?this.$el.addClass("zero-total"
):this.$el.removeClass("zero-total"),this.$el.html(a),$(this.el).find("input").bind
("keydown","n",function(a){return a.preventDefault()}),$(this.el).find("input").bind
("keyup","n",function(a){return Harvest.current_view.trigger("keyup_n")}),this},b
.prototype.change=function(a){var b;return b=Harvest.hours.localize(this.$(".js-compound-entry"
).val()),this.$(".js-compound-entry").val(b),this.$(".js-compound-entry").addClass
("changed").removeClass("saving"),this.model.trigger("changed",Harvest.hours.to_decimal
(b))},b}(Backbone.View);var __bind=function(a,b){return function(){return a.apply
(b,arguments)}},__hasProp={}.hasOwnProperty,__extends=function(a,b){function d(){
this.constructor=a}for(var c in b)__hasProp.call(b,c)&&(a[c]=b[c]);return d.prototype=
b.prototype,a.prototype=new d,a.__super__=b.prototype,a};Harvest.Views.Timesheet.
Day=function(a){function b(){return this.recompute_totals=__bind(this.recompute_totals
,this),this.add_a_day_entry=__bind(this.add_a_day_entry,this),this.fixed_time_entry_button=
__bind(this.fixed_time_entry_button,this),b.__super__.constructor.apply(this,arguments
)}return __extends(b,a),b.prototype.tagName="div",b.prototype.events={"click .jump-to-today"
:"jump_to_today","click .js-jump-one-day-back":"jump_one_day_back","click .js-jump-one-day-forward"
:"jump_one_day_forward","click .js-new-time-entry":"add_new_form","click .js-calendar"
:"show_calendar_click","click .js-other-user-btn":"show_user_switcher_click","change .js-other-user-selector"
:"jump_to_other_users_timesheet","click .js-backbone":"follow_link","click .js-submit-for-approval"
:"submit_for_approval","click .js-unlock-timesheet":"withdraw_approval","click .js-toggle-approve"
:"toggle_approval_confirmation","click .js-nav-week":"nav_week_click"},b.prototype
.name="daily",b.prototype.initialize=function(){var a=this;return this.spent_at=this
.options.spent_at,this.random_quote=Harvest.get_random_quote(),this.spent_at||(this
.spent_at=new Date,this.spent_at.setHours(0,0,0,0)),this.user_id=this.options.other_user||
Harvest.settings.current_user.id,$("#main_content > .wrapper").first().append(this
.render().el),Harvest.on("open-through-midnight",function(){return a.render(),a.open_through_midnight_warning
()}),Harvest.client_project_task_names_for(this.user_id,function(b){return Harvest
.projects=b,Harvest.Collections.get_day(a.spent_at,a.user_id,function(b,c){return a
.collection=a.week=c,a.model=b,a.model.on("reset",a.render,a),a.model.on("sync",a
.recompute_totals,a),a.model.on("add",a.added_entry,a),a.model.on("destroy",a.recompute_totals
,a),a.model.on("timer-tick",a.recompute_totals,a),a.model.on("update-after-duration"
,a.recompute_totals,a),a.model.on("jump-to-day",function(b){return a.jump_to_day(
b.day)}),a.model.on("ajax-failure",function(b){return a.model.trigger("sync"),new 
Harvest.Views.Timesheet.Error({model:b})}),a.render(),a.hide_all_views_with_active_navigation_state
(),Harvest.Collections.get_running_timers(a.user_id,function(b){return a.running_timer_warning
(b),b.on("reset",function(){return a.running_timer_warning(b)})}),a.bind("keyup_n"
,a.add_new_form)}),a.$(".js-other-user-selector").val(a.user_id)})},b.prototype.render=
function(){var a,b;return b=this.render_params(),b?(a=Handlebars.templates["timesheet/day"
](b),this.$el.html(a),this.mark_as_root_view(),this.$el.addClass("day-view-wrapper"
).attr("data-view-id",this.cid),this.add_all_other_days(),this.add_week_total(),this
.model&&(this.add_all_day_entries(),this.add_day_duplication(),this.recompute_totals
(),this.clear_navigation_state()),this.new_entry_button=this.$(".js-new-time-entry"
),$(window).scroll(this.fixed_time_entry_button),typeof ss_legacy=="function"&&ss_legacy
(this.$el.find(".ss-icon")),this.update_preferred_entry_method(),this.setup_calendar_popover
(),this.setup_user_switcher_popover(),this.model?this.$el.removeClass("js-without-models"
).addClass("js-with-models"):this.$el.addClass("js-without-models"),this):this},b
.prototype.setup_calendar_popover=function(){var a=this;return this.k=new Kalendae
({weekStart:Harvest.collections.bootstrapped_week.days[0].spent_at.getDay(),selected
:this.spent_at,attachTo:this.$(".js-day-view-calendar-wrap")[0],columnHeaderLength
:1,useYearNav:!1,titleFormat:"MMMM YYYY",dayOutOfMonthClickable:!0}),this.k.subscribe
("change",function(){var b;return b=a.k.getSelectedAsDates()[0],Harvest.event_tracking
.track({category:"Timesheets Day",action:"Change Day",label:"Calendar Date"}),a.jump_to_day
(b)}),$(this.k.container).find(".k-btn-previous-month").html("Previous"),$(this.k
.container).find(".k-btn-next-month").html("Next"),typeof ss_legacy=="function"&&
ss_legacy($(this.k.container).find(".k-btn-previous-month, .k-btn-next-month")),new 
Harvest.Popover({button:this.$(".js-calendar"),container:this.$(".js-day-view-calendar-wrap"
),show_callback:function(){return a.k.setViewStartDate(Kalendae.moment(a.spent_at
))},ctx:this})},b.prototype.fixed_time_entry_button=function(a){if(this.$el.css("display"
)==="none")return;if(this.new_entry_button.length===0)return;return this.fixed_button_waypoint||
(this.fixed_button_waypoint=this.new_entry_button.offset().top),this.fixed_button_waypoint-
$(a.target).scrollTop()<=20?this.new_entry_button.addClass("sticky"):this.new_entry_button
.removeClass("sticky")},b.prototype.add_a_day_entry=function(a){var b;return b=new 
Harvest.Views.Timesheet.DayEntry({model:a,collection:this.model}),this.$(".day-view-entry-list"
).first().append(b.render().el)},b.prototype.add_all_day_entries=function(){return this
.model.each(this.add_a_day_entry)},b.prototype.added_entry=function(a){return this
.add_a_day_entry(a),this.recompute_totals()},b.prototype.recompute_totals=function(
){var a,b;return b=this.model.toJSON(),b.empty_quote=this.random_quote,b.list_empty=
b.no_time_entries_yet()&&this.$(".day-view-entry-list li").length===0,b.is_approved=
this.week.is_approved(),!Harvest.at_least_one_assigned_active_project_and_task()&&
b.list_empty&&(b.no_projects_or_entries=!0),a=Handlebars.templates["timesheet/_sum_for_day"
](b),this.$(".day-view-summary").html(a),this.$(".day-view-week-nav-total").html(
Harvest.hours.localize(this.week.sum_hours()))},b.prototype.add_new_form=function(
a){var b;a&&a.preventDefault();if($(".new-entry-form").length>0||!Harvest.at_least_one_assigned_active_project_and_task
())return;return Harvest.event_tracking.track({category:"Timesheets Day",action:"New Entry"
,label:"New Entry Click"}),b=new Harvest.Models.DayEntry(this.week.suggest_day_entry_defaults
()),b.set("spent_at",this.model.spent_at),new Harvest.Views.Timesheet.EditDayEntry
({collection:this.model,model:b,view:this})},b.prototype.add_all_other_days=function(
){var a,b,c,d,e,f,g,h,i=this;if(this.week){g=this.week.days;for(c=0,e=g.length;c<
e;c++)a=g[c],b=new Harvest.Views.Timesheet.DayNavigationItem({model:a,spent_at:a.
spent_at,current:a.spent_at.toString("iso")===this.spent_at.toString("iso"),today
:a.is_today()}),this.$(".day-view-week-nav").first().append(b.render().el),a.on("timer-tick"
,function(){return i.recompute_totals()})}else{h=Harvest.Collections.week_arround_day
(this.spent_at);for(d=0,f=h.length;d<f;d++)a=h[d],b=new Harvest.Views.Timesheet.DayNavigationItem
({model:null,spent_at:a,current:a.toString("iso")===this.spent_at.toString("iso")
,today:a.toString("iso")===(new Date).toString("iso")}),this.$(".day-view-week-nav"
).first().append(b.render().el)}return null},b.prototype.add_week_total=function(
){var a,b;return b={zero_hours:Harvest.hours.localize(0)},a=Handlebars.templates["timesheet/_day_view_week_nav_total"
](b),this.$(".day-view-week-nav").first().append($(a))},b.prototype.add_day_duplication=
function(){var a;if(this.is_browsing_other_user())return;return a=new Harvest.Views
.Timesheet.DayDuplication({day:this.model,week:this.week}),this.$(".day-view-duplication"
).html(a.render().el)},b.prototype.jump_to_today=function(a){return a.preventDefault
(),Harvest.event_tracking.track({category:"Timesheets Day",action:"Change Day",label
:"Today Button"}),this.jump_to_day(new Date)},b.prototype.jump_to_day=function(a)
{var b,c;return(c=Harvest.Popover.current)!=null&&c.hide(),this.initiate_navigation_state
(),this.$(".message.warning.open-through-midnight").remove(),this.$(".day-view-entry-moved"
).remove().length&&!this.model.length&&this.render(),b=this.user_id!==Harvest.settings
.current_user?this.other_users_timesheet_at_path({other_user:this.user_id,year:a.
toString("year"),month:a.toString("month"),day:a.toString("day")}):this.timesheet_at_path
({year:a.toString("year"),month:a.toString("month"),day:a.toString("day")}),Harvest
.router.navigate(b,{trigger:!0})},b.prototype.jump_one_day_forward=function(a){var b
;return a.preventDefault(),b=new Date(this.spent_at.toDateString()),b.setHours(12
),b.setDate(this.spent_at.getDate()+1),Harvest.event_tracking.track({category:"Timesheets Day"
,action:"Change Day",label:"Forward Arrow"}),this.jump_to_day(b)},b.prototype.jump_one_day_back=
function(a){var b;return a.preventDefault(),b=new Date(this.spent_at.toDateString
()),b.setHours(12),b.setDate(this.spent_at.getDate()-1),Harvest.event_tracking.track
({category:"Timesheets Day",action:"Change Day",label:"Backward Arrow"}),this.jump_to_day
(b)},b.prototype.render_params=function(){var a,b;b={},b.has_model=!1,b.settings=
Harvest.settings,b.list_empty=!0,b.empty_quote=this.random_quote,b.project_length=
_.keys(Harvest.projects).length,this.model&&(_.extend(b,this.model.toJSON()),b.has_model=!0
,_.extend(b,this.approval_flags(this.week)),b.list_empty=b.no_time_entries_yet(),
b.is_approved=this.week.is_approved(),a=Harvest.Collections.first_day_in_week_for
(this.spent_at),b.week_label=this.week.human_label(),b.week_timeframe_human_format=
this.week.human_timeframe(),b.week_view_path=this.week_path_handbuilt_for_stupid_ie
(a)),Harvest.date.is_this_year(this.spent_at)?(b.day_of_week=this.spent_at.toString
("day_of_week"),b.date_human_format=this.spent_at.toString("day_month")):(b.day_of_week=
this.spent_at.toString("day_of_week_abbr"),b.date_human_format=this.spent_at.toString
("human_format"));if(this.is_browsing_other_user()){if(!Harvest.users)return window
.location.pathname="/time",null;b.timesheet_user=Harvest.users[this.options.other_user
],b.other_user=!0}else b.timesheet_user=Harvest.settings.current_user,b.timesheet_user
.name=b.timesheet_user.first_name+" "+b.timesheet_user.last_name;return b.user_status_class=
b.timesheet_user.is_archived?"test-archiveduser":"",b.users=this.get_grouped_users
(),b.needs_user_switcher=b.settings.current_user.is_admin&&_.keys(Harvest.users).
length>1,b.add_button_css_class="button-disabled",this.week&&!this.week.approval.
span_approved&&Harvest.at_least_one_assigned_active_project_and_task()&&(b.add_button_css_class="js-new-time-entry"
),b.test_classes=["test-day-"+this.spent_at.toString("year")+this.spent_at.toString
("month")+this.spent_at.toString("day"),"test-user-"+b.timesheet_user.id].join(" "
),b},b.prototype.week_path_handbuilt_for_stupid_ie=function(a){var b,c;return c=a
.toString("year"),b=a.toString("month"),a=a.toString("day"),"/time/week/"+c+"/"+b+"/"+
a+"/"+this.user_id},b.prototype.running_timer_warning=function(a){var b;if(a.length===0
){Harvest.flash.remove(this);return}return b=Handlebars.templates["timesheet/_running_timer_warning"
](a.toJSON()),Harvest.flash.show(b,this)},b.prototype.open_through_midnight_warning=
function(){var a,b=this;if(Harvest.current_view!==this||this.model.is_today())return;
return a=Handlebars.templates["timesheet/_open_through_midnight_warning"],Harvest
.flash.show(a).find("a").click(function(a){return b.jump_to_today(a)}),$("body").
animate({scrollTop:0},500,"linear")},b.prototype.show_calendar_click=function(){return Harvest
.event_tracking.track({category:"Timesheets Day",action:"Show Calendar"})},b.prototype
.nav_week_click=function(a){return Harvest.event_tracking.track({category:"Timesheets Day"
,action:"Week View Toggle"})},b}(Harvest.View),_.extend(Harvest.Views.Timesheet.Day
.prototype,Harvest.Views.Timesheet.UserSwitcher,Harvest.Views.Timesheet.Review,Harvest
.Views.Timesheet.PreferredEntryMethod);var __hasProp={}.hasOwnProperty,__extends=
function(a,b){function d(){this.constructor=a}for(var c in b)__hasProp.call(b,c)&&
(a[c]=b[c]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype
,a};Harvest.Views.Timesheet.DayDuplication=function(a){function b(){return b.__super__
.constructor.apply(this,arguments)}return __extends(b,a),b.prototype.tagName="span"
,b.prototype.className="test-day-view-duplication",b.prototype.events={"click .js-day-view-duplication"
:"duplicate_previous_day"},b.prototype.initialize=function(){var a=this;return this
.day=this.options.day,this.week=this.options.week,this.day.on("save-success",function(
){return a.render()})},b.prototype.render=function(){return this.$el.html(Handlebars
.templates["timesheet/_day_view_duplication"]({allow_duplicate_previous:this.day.
no_time_entries_yet()&&!this.week.is_approved()})),this},b.prototype.duplicate_previous_day=
function(a){var b=this;return Harvest.event_tracking.track({category:"Timesheets Day"
,action:"Copy Over Previous Day"}),jQuery.ajax({type:"POST",url:"/time/api/duplicate.json?spent_at="+
this.day.spent_at.toString("iso"),contentType:"application/json",dataType:"json",
complete:function(a){if(a.readyState===4&&a.status===201)return b.week.reload(),b
.day.trigger("reset")}})},b}(Backbone.View);var __bind=function(a,b){return function(
){return a.apply(b,arguments)}},__hasProp={}.hasOwnProperty,__extends=function(a,
b){function d(){this.constructor=a}for(var c in b)__hasProp.call(b,c)&&(a[c]=b[c]
);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a};Harvest
.Views.Timesheet.DayEntry=function(a){function b(){return this.check_for_duration_update=
__bind(this.check_for_duration_update,this),b.__super__.constructor.apply(this,arguments
)}return __extends(b,a),b.prototype.tagName="li",b.prototype.events={"click .js-edit-entry"
:"edit_entry","click .js-stop-timer":"stop_timer","click .js-start-timer":"start_timer"
,"click .js-confirm-start-timer":"start_timer","click .js-cancel-start-timer":"hide_confirm_start"
,"click .js-go-to-day":"go_to_day"},b.prototype.optimistic=!0,b.prototype.initialize=
function(){var a=this;return this.model.on("sync",function(){return a.optimistic&&
a.render(),a.optimistic=!0}),this.model.on("destroy",this.remove,this),this.model
.on("destroy:date_change",this.move,this),this.model.on("timer-tick",this.timer_tick
,this),this.model.on("change",this.check_for_duration_update)},b.prototype.render=
function(){var a,b,c,d,e,f,g,h;return e=this.model.toJSON(),e.settings=Harvest.settings
,f=e.timer_started_at!=null,d=Handlebars.templates["timesheet/_day_entry"](e),this
.$el.html(d).removeClass().addClass("day-view-entry test-entry-"+e.id+" "+e.css_class
),f&&!Harvest.settings.wants_timestamp_timers&&(a=this.$el.find(".js-stop-timer")
,a.addClass("harvest-tooltip-center"),b=Harvest.settings.wants_24h_time?"HH:mm":"h:mma"
,g=e.timer_started_at==="now"?new Date:e.timer_started_at,h="Timer started at "+Kalendae
.moment(g).format(b),e.created_at!==e.updated_at&&(c=Harvest.hours.localize(this.
model.get("hours")),h+=" with "+c+" hours"),a.prop("title",h),new Harvest.Tooltip
(a[0])),this.model.get("new_entry")&&(Harvest.trigger("week-duration-changed",{day
:this.model.spent_at()}),this.model.set("new_entry",!1),this.$el.fadeIn("medium")
,this.scroll_to_new_entry()),e.locked===!0&&(new Harvest.Tooltip(this.$(".js-locked-tip"
)[0]),Harvest.settings.current_user.is_admin!==!0&&(this.$(".js-edit-entry").addClass
("button-no-border button-not-active"),this.$(".js-edit-entry").removeClass("js-edit-entry"
))),typeof ss_legacy=="function"&&ss_legacy(this.$el.find(".ss-icon")),!e.is_from_today&&!
f&&this.setup_confirm_start_popover(),this},b.prototype.scroll_to_new_entry=function(
){var a,b;return a=(b=$(".day-view-entry").last().offset())!=null?b.top:void 0,$("body, html"
).animate({scrollTop:a},500,"linear")},b.prototype.timer_tick=function(){return this
.render()},b.prototype.edit_entry=function(){return Harvest.event_tracking.track(
{category:"Timesheets Day",action:"Edit Entry",label:"Edit Entry Click"}),new Harvest
.Views.Timesheet.EditDayEntry({collection:this.collection,model:this.model,view:this
})},b.prototype.stop_timer=function(a){var b=this;if(this.timer_throttle)return;return this
.throttle_click(),a.preventDefault(),Harvest.event_tracking.track({category:"Timesheets Day"
,action:"Entry Button",label:"Stop Timer Click"}),this.model.stop_timer(),this.optimistic_model_save
({},this.model,{success:function(){b.model.trigger("timer-tick");if(!b.model.is_from_today
())return Harvest.Collections.reset_running_timers(b.model.get("user_id"))}})},b.
prototype.setup_confirm_start_popover=function(){return new Harvest.Popover({button
:this.$(".js-confirm-timer"),container:this.$(".pop-over-start-timer")})},b.prototype
.hide_confirm_start=function(a){var b;if(!a)return;return a.preventDefault(),(b=Harvest
.Popover.current)!=null?b.hide():void 0},b.prototype.start_timer=function(a){var b
,c=this;if(this.timer_throttle)return;return this.throttle_click(),a.preventDefault
(),Harvest.event_tracking.track({category:"Timesheets Day",action:"Entry Button",
label:"Start Timer Click"}),Harvest.settings.wants_timestamp_timers?(b=this.model
.new_entry_on_start_timer(),this.hide_confirm_start(a)):this.model.start_timer(),
this.optimistic_model_save({},b||null,{success:function(){if(!c.model.is_from_today
())return Harvest.Collections.reset_running_timers(c.model.get("user_id"))}})},b.
prototype.throttle_click=function(){var a,b=this;return a=function(){return b.timer_throttle=
null},this.timer_throttle=setTimeout(a,500)},b.prototype.remove=function(){var a=
this;return this.collection.length>1?this.$el.slideUp("normal",function(){return a
.$el.remove()}):this.$el.remove(),this.model.off()},b.prototype.move=function(){var a
;return a="Time entry moved to <a class='js-go-to-day' href='javascript:void(0)'>"+
this.model.spent_at().strftime(Harvest.settings.date_format)+"</a>",this.$el.html
(a).addClass("day-view-entry-moved"),this.model.off()},b.prototype.go_to_day=function(
){return this.collection.trigger("jump-to-day",{day:this.model.spent_at()})},b.prototype
.check_for_duration_update=function(){if((this.model.hasChanged("timer_started_at"
)||this.model.hasChanged("hours"))&&!this.model.hasChanged("updated_at"))return Harvest
.trigger("week-duration-changed",{day:this.model.spent_at()})},b}(Backbone.View),
_.extend(Harvest.Views.Timesheet.DayEntry.prototype,Harvest.Views.Timesheet.OptimisticModelSave
);var __hasProp={}.hasOwnProperty,__extends=function(a,b){function d(){this.constructor=
a}for(var c in b)__hasProp.call(b,c)&&(a[c]=b[c]);return d.prototype=b.prototype,
a.prototype=new d,a.__super__=b.prototype,a};Harvest.Views.Timesheet.DayNavigationItem=
function(a){function b(){return b.__super__.constructor.apply(this,arguments)}return __extends
(b,a),b.prototype.events={"click .js-day":"jump_to_day"},b.prototype.tagName="li"
,b.prototype.initialize=function(){this.model=this.options.model,this.spent_at=this
.options.spent_at;if(this.model)return this.model.on("reset",this.render,this),this
.model.on("add",this.render,this),this.model.on("remove",this.render,this),this.model
.on("destroy",this.render,this),this.model.on("timer-tick",this.render,this)},b.prototype
.render=function(){return this.$el.html(Handlebars.templates["timesheet/_day_view_week_nav"
](this.params())),this},b.prototype.params=function(){var a,b;return a=["js-day"]
,this.options.current&&a.push("selected"),this.options.today?a.push("today"):a.push
("test-not-today"),this.model&&this.model.running_timer()!==null&&a.push("running"
),b={href:this.model?this.model.url_for_day():"javascript:void(0)",long_label:this
.spent_at.toString("day_of_week"),"class":a.join(" "),sum:Harvest.hours.localize(
this.model?this.model.sum_hours():Harvest.hours.localize(0))},b.label=this.spent_at
.toString("day_of_week_short"),b},b.prototype.jump_to_day=function(a){return a.preventDefault
(),Harvest.event_tracking.track({category:"Timesheets Day",action:"Change Day",label
:"Week Days"}),Harvest.current_view.jump_to_day(this.spent_at)},b}(Backbone.View)
;var __bind=function(a,b){return function(){return a.apply(b,arguments)}},__hasProp=
{}.hasOwnProperty,__extends=function(a,b){function d(){this.constructor=a}for(var c in 
b)__hasProp.call(b,c)&&(a[c]=b[c]);return d.prototype=b.prototype,a.prototype=new 
d,a.__super__=b.prototype,a};Harvest.Views.Timesheet.EditDayEntry=function(a){function b
(){return this.notes_keydown=__bind(this.notes_keydown,this),this.model_synced=__bind
(this.model_synced,this),b.__super__.constructor.apply(this,arguments)}return __extends
(b,a),b.prototype.events={"click .js-cancel":"cancel_modal","click .js-save":"confirm_start_or_save"
,"click .js-confirm-start-timer":"save","click .js-cancel-start-timer":"hide_confirm_start"
,"change .js-project":"project_selector_changed","keyup .js-duration":"on_duration_changed"
,"click .js-delete-entry":"toggle_confirm_delete","click .js-cancel-delete-entry"
:"toggle_confirm_delete","click .js-confirm-delete-entry":"delete_entry","change .js-spent-at"
:"set_spent_at","keypress .js-start-time":"disable_enter_key","keyup .js-start-time"
:"show_duration_hint","change .js-start-time":"normalize_timestamp","keyup .js-end-time"
:"show_duration_hint","change .js-end-time":"normalize_timestamp","keydown .js-notes"
:"notes_keydown","click .js-dismiss-ftux-message":"dismiss_ftux_message","focus .js-duration"
:"show_ftux_message","blur .js-duration":"normalize_duration"},b.prototype.initialize=
function(){return this.collection=this.options.collection,this.model=this.options
.model,this.parent_view=this.options.view,this.model.on("sync",this.model_synced,
this),this.model.on("timer-tick",this.timer_tick,this),this.render()},b.prototype
.render=function(){var a,b,c=this;return this.selected_project_id=this.model.get("project_id"
),this.tasks=Harvest.helpers.task_option_tags(this.model),b={settings:Harvest.settings
,spent_at:this.collection.spent_at.strftime("%A, %b %d"),entry:this.model.toJSON(
),parent_view_id:this.parent_view.cid,save_label:this.model.isNew()?"Start Timer"
:"Update",duration_placeholder:Harvest.hours.localize(0),elapsed_time:Harvest.settings
.wants_timestamp_timers==="hours_minutes"?this.model.get("hours"):"&nbsp;",needs_ftux_message
:this.model.isNew()&&!_.include(Harvest.settings.current_user.disabled_help_boxes
,this.ftux_message_name)},b.entry.locked||(b.project_option_tags=Harvest.helpers.
project_selector_options(this.model),b.task_option_tags=this.tasks[this.selected_project_id
]),a=Handlebars.templates["timesheet/_day_entry_form"](b),Harvest.SimpleModal.show_modal
(a,function(){if(!c.model.isNew())return Harvest.settings.wants_timestamp_timers?
c.$(".js-end-time").focus():c.model.get("timer_started_at")?(c.$(".js-notes").focus
(),c.running_timer_tooltip||(c.running_timer_tooltip=new Harvest.Tooltip(c.$(".js-duration"
)[0]))):c.$(".js-duration").focus();c.$(".js-project").trigger("liszt:activate");
if(!c.selected_project_id)return c.$(".js-project").trigger("change")}),this.setElement
($(".modal-container")),this.$(".js-project, .js-tasks").chosen({search_contains:!0
}),this.$(".js-notes").autosize().keyup(function(){return $(this).val().length?$(
this).addClass("entry-notes-entered"):$(this).removeClass("entry-notes-entered")}
),Harvest.settings.wants_timestamp_timers&&this.show_duration_hint(),this.setup_calendar_popover
(),this},b.prototype.setup_calendar_popover=function(){var a=this;return this.k=new 
Kalendae({weekStart:Harvest.collections.bootstrapped_week.days[0].spent_at.getDay
(),selected:this.model.get("spent_at"),attachTo:this.$(".js-edit-entry-calendar-wrap"
)[0],columnHeaderLength:1,useYearNav:!1,titleFormat:"MMMM YYYY",dayOutOfMonthClickable
:!0}),this.k.subscribe("change",function(){var b,c;return Harvest.event_tracking.
track({category:"Timesheets Day",action:"Edit Entry",label:"Date Switcher Switched"
}),b=a.k.getSelectedAsDates()[0],a.model.set("spent_at",b),a.$(".js-spent-at").val
(b.strftime(Harvest.settings.date_format)),(c=Harvest.Popover.current)!=null?c.hide
():void 0}),$(this.k.container).find(".k-btn-previous-month").html("Previous"),$(
this.k.container).find(".k-btn-next-month").html("Next"),typeof ss_legacy=="function"&&
ss_legacy($(this.k.container).find(".k-btn-previous-month, .k-btn-next-month")),new 
Harvest.Popover({button:this.$(".js-change-date, .js-spent-at"),container:this.$(".js-edit-entry-calendar-wrap"
),show_callback:this.show_spent_at_field,ctx:this})},b.prototype.cancel_modal=function(
a){return a!=null&&a.preventDefault(),Harvest.SimpleModal.hide_modal()},b.prototype
.timer_tick=function(){var a;if(Harvest.settings.wants_timestamp_timers)return;return a=
this.model.localized_hours_or_hours_from(),this.$(".js-duration.readonly-running"
).val(a)},b.prototype.project_selector_changed=function(){return this.selected_project_id=
this.$(".js-project").val(),this.$(".js-tasks").html(this.tasks[this.selected_project_id
].string).trigger("liszt:updated")},b.prototype.form_attrs=function(){var a,b,c;return b=
this.$(".js-spent-at").val(),b!=null?c=Harvest.date.parse_localized(b):c=this.model
.get("spent_at"),c.strftime?c=c.toString("iso"):c=this.collection.spent_at.toString
("iso"),a={spent_at:c,project_id:this.selected_project_id,task_id:this.$(".js-tasks"
).val(),notes:this.$(".js-notes").val()},this.model.is_locked()&&(a.locked=!0,a.project_id=
this.model.get("project_id"),a.task_id=this.model.get("task_id")),Harvest.settings
.wants_timestamp_timers?(a.started_at=this.$(".js-start-time").val(),a.ended_at=this
.$(".js-end-time").val()):(a.raw_hours=this.$(".js-duration").val(),a.hours=Harvest
.hours.to_decimal(a.raw_hours)),this.model.get("timer_started_at")&&(a.hours_with_timer=
parseFloat(Harvest.hours.to_decimal(a.hours)),a.timer_started_at="now"),a},b.prototype
.show_confirm_start=function(a){return a!=null&&a.preventDefault(),this.$(".new-entry-form .nf-field + .nf-submit"
).hide(),this.$(".new-entry-form .js-timer-start-confirmation").show()},b.prototype
.hide_confirm_start=function(a){return a!=null&&a.preventDefault(),this.$(".new-entry-form .nf-field + .nf-submit"
).show(),this.$(".new-entry-form .js-timer-start-confirmation").hide()},b.prototype
.confirm_start_or_save=function(a){return this.should_start_a_timer()&&!this.model
.is_from_today()&&!this.model.get("timer_started_at")?this.show_confirm_start(a):
this.save(a)},b.prototype.save=function(a){var b,c,d,e,f,g=this;a.preventDefault(
),b=this.form_attrs();if(Harvest.settings.wants_timestamp_timers){if(b.ended_at===""&&!
this.should_start_a_timer()&&!this.model.get("timer_started_at")){alert("Please enter an end time."
);return}if(b.ended_at!==""&&!Harvest.timestamp.to_date(b.ended_at)){alert("Please enter a valid end time."
);return}if(b.ended_at!==""&&b.started_at===""){alert("Please enter a valid start time."
);return}b.ended_at!==""&&this.model.get("timer_started_at")&&(this.model.stop_timer
(),b.hours=this.model.hours_or_hours_from(b.ended_at)),b.started_at!==""&&b.ended_at!==""&&
(f=Harvest.timestamp.to_date(b.started_at),c=Harvest.timestamp.to_date(b.ended_at
),b.hours=Harvest.hours.elapsed_between(f,c))}else{e=Harvest.hours.duration_validation_errors
(b.raw_hours);if(e){alert("Please enter a valid duration value, field is "+e+".")
;return}}return this.model.get("timer_started_at")||this.should_start_a_timer()||
(b.timer_started_at=null),d="Edit Entry",this.model.get("user_id")||(d="New Entry"
,b.new_entry=!0),Harvest.event_tracking.track({category:"Timesheets Day",action:d
,label:""+d+" Save"}),b.user_id=Harvest.settings.timesheet_owner,this.optimistic_model_save
(b,null,{success:function(){if(!g.model.is_from_today()&&g.model.get("timer_started_at"
))return Harvest.Collections.reset_running_timers(g.model.get("user_id"))}}),this
.cancel_modal()},b.prototype.on_duration_changed=function(){var a,b,c;return Harvest
.settings.wants_timestamp_timers||(this.$(".js-duration").removeClass("error"),c=
this.$(".js-duration").val(),c.length?(this.$(".js-duration").addClass("entry-duration-entered"
),a=Harvest.hours.duration_validation_errors(c),a&&this.$(".js-duration").addClass
("error")):this.$(".js-duration").removeClass("entry-duration-entered")),this.should_start_a_timer
()?b="Start Timer":(b=this.model.isNew()?"Save Entry":"Update",this.hide_confirm_start
()),this.$(".js-save").val(b)},b.prototype.model_synced=function(){if(!this.collection
.get(this.model.cid))return this.collection.add(this.model)},b.prototype.should_start_a_timer=
function(){var a;return this.model.isNew()?Harvest.settings.wants_timestamp_timers?
this.$(".js-end-time").val()==="":(a=this.$(".js-duration").val()?Harvest.hours.to_decimal
(this.$(".js-duration").val()):0,a===0):!1},b.prototype.toggle_confirm_delete=function(
a){return a&&a.preventDefault(),Harvest.event_tracking.track({category:"Timesheets Day"
,action:"Edit Entry",label:"Delete Icon Click"}),this.$(".new-entry-form .nf-field + .nf-submit, .new-entry-form .js-entry-delete-confirmation"
).toggle()},b.prototype.delete_entry=function(a){var b=this;return a&&a.preventDefault
(),Harvest.event_tracking.track({category:"Timesheets Day",action:"Edit Entry",label
:"Delete Entry Confirmed"}),this.model.destroy({url:""+this.model.url()+"?user_id="+
Harvest.settings.timesheet_owner,success:function(){b.collection.trigger("save-success"
);if(!b.model.is_from_today()&&b.model.get("timer_started_at"))return Harvest.Collections
.reset_running_timers(b.model.get("user_id"))}}),this.cancel_modal()},b.prototype
.show_spent_at_field=function(a){return this.$(".js-change-date").hide(),this.$(".js-spent-at"
).show().focus().removeClass("button-selected"),Harvest.event_tracking.track({category
:"Timesheets Day",action:"Edit Entry",label:"Date Switcher Click"})},b.prototype.
set_spent_at=function(){var a;return a=Harvest.date.parse_localized(this.$(".js-spent-at"
).val()),this.model.set("spent_at",a)},b.prototype.parse_timestamps=function(){var a
,b;return a=Harvest.timestamp.to_date(this.$(".js-start-time").val()),b={start:a,
end:Harvest.timestamp.to_date(this.$(".js-end-time").val(),a)}},b.prototype.normalize_timestamp=
function(a){var b;b=$(a.target).hasClass("js-end-time")?Harvest.timestamp.normalize
(a.target.value,this.$(".js-start-time").val()):Harvest.timestamp.normalize(a.target
.value);if(b)return a.target.value=b},b.prototype.normalize_duration=function(a){
var b;return b=Harvest.hours.localize(a.target.value),b&&(a.target.value=b),this.
hide_ftux_message()},b.prototype.show_duration_hint=function(a){var b,c,d;return this
.on_duration_changed(),d=this.parse_timestamps(),b=Harvest.hours.elapsed_between(
d.start,d.end),c=b?Harvest.hours.localize(b):"",this.$(".js-timestamp-total-hint"
).html(c)},b.prototype.notes_keydown=function(a){if(a.which===13&&!a.shiftKey)return this
.confirm_start_or_save(a)},b.prototype.disable_enter_key=function(a){if(a.which===13
)return a.preventDefault(),this.$(".js-end-time").focus()},b.prototype.show_ftux_message=
function(){return this.$(".pop-over-helper.duration-helper").addClass("show")},b.
prototype.hide_ftux_message=function(){return this.$(".pop-over-helper.duration-helper"
).removeClass("show")},b.prototype.dismiss_ftux_message=function(a){return a.preventDefault
(),jQuery.ajax({type:"POST",url:"/help/disable/"+this.ftux_message_name,dataType:"text"
}),Harvest.settings.current_user.disabled_help_boxes.push(this.ftux_message_name)
,this.hide_ftux_message()},b.prototype.ftux_message_name="timesheet/edit_day_entry.2012ftux"
,b}(Backbone.View),_.extend(Harvest.Views.Timesheet.EditDayEntry.prototype,Harvest
.Views.Timesheet.OptimisticModelSave);var __hasProp={}.hasOwnProperty,__extends=function(
a,b){function d(){this.constructor=a}for(var c in b)__hasProp.call(b,c)&&(a[c]=b[
c]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a};Harvest
.Views.Timesheet.Error=function(a){function b(){return b.__super__.constructor.apply
(this,arguments)}return __extends(b,a),b.prototype.events={"click .js-error-reload"
:"reload"},b.prototype.initialize=function(){return this.render()},b.prototype.render=
function(){var a,b,c;return a="Sorry, but we're having trouble connecting to Harvest. This problem is usually the result of a broken Internet connection. You can try refreshing this page."
,b=Handlebars.templates["timesheet/_error"]({message:((c=this.model)!=null?c.message
:void 0)?this.model.message:a}),Harvest.SimpleModal.show_modal(b),this.setElement
($(".modal-container"))},b.prototype.reload=function(a){return a.preventDefault()
,window.location.reload()},b}(Backbone.View);var __bind=function(a,b){return function(
){return a.apply(b,arguments)}};Harvest.LastUserActivity=function(){function a(){
this.mark_as_active=__bind(this.mark_as_active,this),this.at=new Date,$(window).on
("click",this.mark_as_active),$(window).on("mousenter",this.mark_as_active),$(window
).on("mousemove",this.mark_as_active),$(window).on("keydown",this.mark_as_active)
,$(window).on("scroll",this.mark_as_active)}return a.prototype.mark_as_active=function(
){return this.at=new Date},a}();var __hasProp={}.hasOwnProperty,__extends=function(
a,b){function d(){this.constructor=a}for(var c in b)__hasProp.call(b,c)&&(a[c]=b[
c]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a};Harvest
.Views.Timesheet.NewWeekRow=function(a){function b(){return b.__super__.constructor
.apply(this,arguments)}return __extends(b,a),b.prototype.events={"click .js-cancel"
:"cancel_modal","click .js-save":"save","change .js-project":"project_selector_changed"
},b.prototype.initialize=function(){return this.week=this.options.week,this.available_projects=
Harvest.available_project_tasks(this.week.rows()),this.parent_view=this.options.view
,this.model||(this.model=new Harvest.Models.WeekRow(Harvest.collections.bootstrapped_week
.suggest_week_row_defaults(this.week,this.available_projects))),this.render()},b.
prototype.render=function(){var a,b,c=this;return this.selected_project_id=this.model
.project_id,this.tasks=Harvest.helpers.task_option_tags(this.model,{projects:this
.available_projects}),b={settings:Harvest.settings,project_option_tags:Harvest.helpers
.project_selector_options(this.model,{projects:this.available_projects}),task_option_tags
:this.tasks[this.selected_project_id],parent_view_id:this.parent_view.cid},a=Handlebars
.templates["timesheet/week/_row_form"](b),Harvest.SimpleModal.show_modal(a,function(
){c.$(".js-project").trigger("liszt:activate");if(!c.selected_project_id)return c
.$(".js-project").trigger("change")}),this.setElement($(".modal-container")),this
.$(".js-project, .js-tasks").chosen({search_contains:!0}),Harvest.dupeValidator.compare_form_with_rows
(this)},b.prototype.cancel_modal=function(a){return a!=null&&a.preventDefault(),Harvest
.SimpleModal.hide_modal()},b.prototype.project_selector_changed=function(){return this
.selected_project_id=parseInt(this.$(".js-project").val()),this.$(".js-tasks").html
(this.tasks[this.selected_project_id].string).trigger("liszt:updated")},b.prototype
.save=function(a){return a.preventDefault(),this.week.trigger("new-row-added",new 
Harvest.Models.WeekRow({project_id:this.selected_project_id,task_id:parseInt(this
.$(".js-tasks").val(),10),week:this.week})),this.cancel_modal()},b}(Backbone.View
);var __bind=function(a,b){return function(){return a.apply(b,arguments)}},__hasProp=
{}.hasOwnProperty,__extends=function(a,b){function d(){this.constructor=a}for(var c in 
b)__hasProp.call(b,c)&&(a[c]=b[c]);return d.prototype=b.prototype,a.prototype=new 
d,a.__super__=b.prototype,a};Harvest.Views.Timesheet.Week=function(a){function b(
){return this.window_unload=__bind(this.window_unload,this),this.save=__bind(this
.save,this),this.add_blank_row=__bind(this.add_blank_row,this),this.update_weekly_total=
__bind(this.update_weekly_total,this),b.__super__.constructor.apply(this,arguments
)}return __extends(b,a),b.prototype.tagName="div",b.prototype.events={"click .js-calendar"
:"show_calendar_click","click .jump-to-this-week":"jump_to_this_week","click .js-jump-one-week-back"
:"jump_one_week_back","click .js-jump-one-week-forward":"jump_one_week_forward","click .js-new-week-row"
:"add_new_week_row_form","click .js-save":"save","click .js-other-user-btn":"show_user_switcher_click"
,"change .js-other-user-selector":"jump_to_other_users_timesheet","keyup .js-compound-entry"
:"save_on_enter","click .js-submit-for-approval":"initiate_approval","click .js-unlock-timesheet"
:"initiate_withdraw","click .js-toggle-approve":"toggle_approval_confirmation","click .js-nav-day"
:"nav_day_click","click .js-day":"daily_nav_click"},b.prototype.name="weekly",b.prototype
.initialize=function(){var a=this;return this.spent_at=this.options.spent_at,this
.spent_at||(this.spent_at=new Date,this.spent_at.setHours(0,0,0,0)),this.user_id=
this.options.other_user||Harvest.settings.current_user.id,$("#main_content > .wrapper"
).first().append(this.render().el),Harvest.on("open-through-new-week",function(){
return a.render(),a.open_through_new_week_warning()}),Harvest.client_project_task_names_for
(this.user_id,function(b){return Harvest.projects=b,Harvest.Collections.get_day(a
.spent_at,a.user_id,function(b,c){return a.week=c,a.day=b,a.week.on("new-row-added"
,a.add_blank_row,a),a.week.on("new-row-added",a.toggle_add_row_if_tasks_exhuasted
,a),a.week.on("reloaded",function(){return a.save_countdown_in_progress&&clearTimeout
(a.save_countdown_in_progress),a.save_countdown_in_progress=!1,a.render()}),a.week
.on("week-row-destroy",function(){return Harvest.dupeValidator.check_for_dupes(a,"remove_row"
),a.save_countdown_in_progress&&a.save(),a.update_weekly_total(),a.week.rows().length===0&&
a.week.trigger("reloaded"),a.toggle_add_row_if_tasks_exhuasted()}),a.week.on("local-week-sync"
,function(){a.change_observed(),a.update_weekly_total(),a.toggle_add_row_if_tasks_exhuasted
();if(a.week.rows().length===0)return a.week.trigger("reloaded")}),a.week.on("week-ajax-failure"
,function(a){return Harvest.event_tracking.track({category:"Timesheets Week",action
:"Ajax error"}),alert("Sorry, but we're having trouble saving your timesheet. Please try again."
)}),a.render(),a.hide_all_views_with_active_navigation_state(),a.week.on("update-totals"
,_.throttle(a.update_weekly_total,100)),window.onbeforeunload=a.window_unload,a.bind
("keyup_n",a.add_new_week_row_form)})})},b.prototype.render=function(a){var b;return a==
null&&(a={}),this.render_options=a,b=this.render_params(),b?(this.$el.html(Handlebars
.templates["timesheet/week"](b)),this.mark_as_root_view(),this.render_action_buttons
(b),this.week&&(this.$(".js-week-not-loaded").removeClass("js-week-not-loaded"),this
.add_all_rows(),this.add_clear_all_rows(),this.toggle_add_row_if_tasks_exhuasted(
),this.$el.addClass("js-with-models"),this.clear_navigation_state()),this.add_day_navigation
(),this.add_all_week_day_totals(),this.$(".js-other-user-selector").val(this.user_id
),typeof ss_legacy=="function"&&ss_legacy(this.$el.find(".ss-icon")),this.update_preferred_entry_method
(),Harvest.dupeValidator.check_for_dupes(this,"view_render"),this.setup_calendar_popover
(),this.setup_user_switcher_popover(),Harvest.settings.initial_load_user_active||
this.$el.addClass("test-archiveduser"),Harvest.settings.push_enabled||this.$el.addClass
("test-pushState-disabled"),this):this},b.prototype.setup_calendar_popover=function(
){var a=this;return this.k=new Kalendae("calendarSpot",{weekStart:Harvest.collections
.bootstrapped_week.days[0].spent_at.getDay(),selected:this.spent_at,attachTo:this
.$(".js-week-view-calendar-wrap")[0],columnHeaderLength:1,useYearNav:!1,titleFormat
:"MMMM YYYY",dayOutOfMonthClickable:!0}),this.k.subscribe("change",function(){var b
;return b=a.k.getSelectedAsDates()[0],Harvest.event_tracking.track({category:"Timesheets Week"
,action:"Change Week",label:"Calendar Date"}),a.jump_to_week(b)}),$(this.k.container
).find(".k-btn-previous-month").html("Previous"),$(this.k.container).find(".k-btn-next-month"
).html("Next"),typeof ss_legacy=="function"&&ss_legacy($(this.k.container).find(".k-btn-previous-month, .k-btn-next-month"
)),new Harvest.Popover({button:this.$(".js-calendar"),container:this.$(".js-week-view-calendar-wrap"
),show_callback:function(){return a.k.setViewStartDate(Kalendae.moment(a.spent_at
))},ctx:this})},b.prototype.render_action_buttons=function(a){return a==null&&(a=
this.render_params()),this.$("tfoot td.name").html(Handlebars.templates["timesheet/week/_action_buttons"
](a))},b.prototype.localized_sum_hours=function(){return Harvest.hours.localize(this
.week.sum_hours(),{clean_zero:!0})},b.prototype.update_weekly_total=function(){return this
.$("tfoot .total").html(this.localized_sum_hours())},b.prototype.render_params=function(
){var a,b,c,d,e;c={},c.settings=Harvest.settings,c.total_hours=Harvest.hours.localize
(0),e=Harvest.Collections.week_arround_day(this.spent_at),d=new Date,a=e[0]<=d&&e
[6]>=d,c.contains_today=a,c.human_timeframe=Harvest.Collections.Week.human_timeframe
(e[0],e[6]),this.week&&(_.extend(c,this.approval_flags(this.week)),c.list_empty=!
this.render_options.build_full_timesheet&&this.week.rows().length<=0,c.total_hours=
this.localized_sum_hours()),this.random_quote||(this.random_quote=Harvest.get_random_quote
()),c.empty_quote=this.random_quote,c.view_id=this.cid;if(this.is_browsing_other_user
()){if(!Harvest.users)return window.location.pathname="/time",null;c.timesheet_user=
Harvest.users[this.options.other_user],c.other_user=!0}else c.timesheet_user=Harvest
.settings.current_user,c.timesheet_user.name=c.timesheet_user.first_name+" "+c.timesheet_user
.last_name;return c.users=this.get_grouped_users(),c.needs_user_switcher=c.settings
.current_user.is_admin&&_.keys(Harvest.users).length>1,this.week&&this.week.last_saved&&
(c.last_saved_message="Last saved at "+this.week.last_saved),c.add_button_css_class="js-new-week-row"
,this.week&&this.week.is_approved()&&(c.add_button_css_class="button-disabled"),c
.save_button_css_class="button-disabled",this.available_project_and_task_count()||
(c.add_button_css_class="button-disabled",c.list_empty&&(c.no_projects_or_entries=!0
)),this.save_failed?(c.last_saved_message="Save failed. Please try again.",c.save_button_css_class="js-save"
):this.save_in_progress?(c.save_button_css_class="button-disabled",c.last_saved_message="Saving..."
):this.save_countdown_in_progress&&(c.save_button_css_class="js-save"),b=a?this.today
():this.spent_at,c.day_view_path=this.day_path_handbuilt_for_stupid_ie(b),c.test_classes=
["test-week-"+this.spent_at.toString("year")+this.spent_at.toString("month")+this
.spent_at.toString("day"),"test-user-"+c.timesheet_user.id].join(" "),c},b.prototype
.day_path_handbuilt_for_stupid_ie=function(a){var b,c;return c=a.toString("year")
,b=a.toString("month"),a=a.toString("day"),"/time/day/"+c+"/"+b+"/"+a+"/"+this.user_id
},b.prototype.add_all_rows=function(){var a,b=this;return a=$("<tbody />"),_.each
(this.week.rows(),function(c){var d;return d=new Harvest.Views.Timesheet.WeekRow(
{model:c,week:b.week}),a.append(d.render().el)}),this.$(".week-view-table tbody")
.replaceWith(a)},b.prototype.add_blank_row=function(a){var b,c;return this.week.rows
().length<1&&this.render({build_full_timesheet:!0}),a.all_blank=!0,c=$((new Harvest
.Views.Timesheet.WeekRow({model:a,week:this.week})).render().el).hide(),b=this.week
.sort_index(a),b>=this.$(".week-view-entry").length?this.$(".week-view-table tbody"
).append(c.fadeIn()):this.$(".week-view-entry").eq(b).before(c.fadeIn()),this.week
.add_blank_row(a),this.save(),Harvest.dupeValidator.check_for_dupes(this,"add_row"
)},b.prototype.add_all_week_day_totals=function(){var a,b,c,d,e,f,g=this;if(this.
week)return this.week.each_day(function(a){var b;return b=new Harvest.Views.Timesheet
.WeekDayTotal({model:a,spent_at:a.spent_at,week:g.week}),g.$(".week-view-table tfoot .total"
).before(b.render().el)});e=Harvest.Collections.week_arround_day(this.spent_at),f=
[];for(c=0,d=e.length;c<d;c++)a=e[c],b=new Harvest.Views.Timesheet.WeekDayTotal({
model:null,spent_at:a,week:null}),f.push(this.$(".week-view-table tfoot .total").
before(b.render().el));return f},b.prototype.add_day_navigation=function(){var a,
b,c,d,e,f,g=this;if(this.week)return this.week.each_day(function(a){var b;return b=new 
Harvest.Views.Timesheet.WeekDayNavigationItem({model:a,spent_at:a.spent_at,today:
a.is_today(),user_id:g.user_id}),g.$(".week-view-table thead tr .total").before(b
.render().el)});e=Harvest.Collections.week_arround_day(this.spent_at),f=[];for(c=0
,d=e.length;c<d;c++)a=e[c],b=new Harvest.Views.Timesheet.WeekDayNavigationItem({model
:null,spent_at:a,today:a.toString()===(new Date).toString(),user_id:this.user_id}
),f.push(this.$(".week-view-table thead tr .total").before(b.render().el));return f
},b.prototype.add_clear_all_rows=function(){var a;return a=new Harvest.Views.Timesheet
.WeekClearAllRows({week:this.week}),this.$(".week-view-table thead .name").append
(a.render().el)},b.prototype.add_new_week_row_form=function(a){a&&a.preventDefault
();if($(".add-row-form").length>0||!this.available_project_and_task_count())return;
return Harvest.event_tracking.track({category:"Timesheets Week",action:"Add New Row"
}),new Harvest.Views.Timesheet.NewWeekRow({week:this.week,view:this})},b.prototype
.change_observed=function(){if(!this.save_countdown_in_progress)return this.save_countdown_in_progress=
setTimeout(this.save,5e3),this.render_action_buttons()},b.prototype.is_dirty=function(
){return $(Harvest.current_view.el).find(".js-compound-entry.changed").length>0},
b.prototype.save=function(a){var b,c,d,e,f,g,h,i=this;a!=null&&typeof a.preventDefault=="function"&&
a.preventDefault();if(this.save_in_progress)return;Harvest.event_tracking.track({
category:"Timesheets Week",action:"Save",label:function(){switch(a!=null?a.type:void 0
){case"click":return"Save Button Click";case"keyup":return"Enter Press";default:return"Auto Save"
}}()}),this.save_countdown_in_progress&&(clearTimeout(this.save_countdown_in_progress
),this.save_countdown_in_progress=null),this.week.last_saved=Harvest.timestamp.to_string
(),this.save_failed=!1,this.save_in_progress=!0,this.render_action_buttons(),b={}
,c=[],h=this.$(".js-compound-entry");for(f=0,g=h.length;f<g;f++)d=h[f],e=$(d).data
("unique-name"),$(d).hasClass("changed")&&(c.push(e),$(d).addClass("saving").removeClass
("changed")),b[e]=$(d).val();return b.changed_fields=c.join(","),b.of_user=Harvest
.settings.timesheet_owner,b.approval_period_start=this.week.period_begin().toString
("day_of_year"),b.approval_period_start_year=this.week.period_begin().toString("year"
),b.timesheet_2012_beta="true",jQuery.ajax({type:"POST",url:"/entry/save",data:b,
timeout:3e3,contentType:"application/x-www-form-urlencoded",success:function(a){i
.$(".js-compound-entry.saving").removeClass("saving"),i.save_in_progress=!1,i.week
.trigger("week-save-success");if(i.is_dirty())return i.change_observed()},error:function(
a){var b;return i.$(".js-compound-entry.saving").addClass("changed").removeClass("saving"
),i.save_failed=!0,a.status>=200&&a.status<300&&(b=jQuery.parseJSON(a.responseText
)),b=b||{},i.save_in_progress=!1,i.week.trigger("week-ajax-failure",b)},complete:
function(){return i.render_action_buttons()}})},b.prototype.jump_to_this_week=function(
a){return a.preventDefault(),Harvest.event_tracking.track({category:"Timesheets Week"
,action:"Change Week",label:"This Week Button"}),this.jump_to_week(new Date)},b.prototype
.jump_to_week=function(a){var b,c,d,e=this;return(d=Harvest.Popover.current)!=null&&
d.hide(),this.initiate_navigation_state(),c=this.user_id!==Harvest.settings.current_user
.id?this.other_users_timesheet_week_at_path({other_user:this.user_id,year:a.toString
("year"),month:a.toString("month"),day:a.toString("day")}):this.timesheet_week_at_path
({year:a.toString("year"),month:a.toString("month"),day:a.toString("day")}),this.
save_countdown_in_progress||this.save_failed||this.save_in_progress?(b=function()
{return e.week.off("week-save-success",b),Harvest.router.navigate(c,{trigger:!0})
},this.week.on("week-save-success",b),this.save()):Harvest.router.navigate(c,{trigger
:!0})},b.prototype.jump_one_week_forward=function(a){var b;return a.preventDefault
(),Harvest.event_tracking.track({category:"Timesheets Week",action:"Change Week",
label:"Forward Arrow"}),b=new Date(this.spent_at.toDateString()),b.setDate(this.spent_at
.getDate()+7),this.jump_to_week(b)},b.prototype.jump_one_week_back=function(a){var b
;return a.preventDefault(),Harvest.event_tracking.track({category:"Timesheets Week"
,action:"Change Week",label:"Backward Arrow"}),b=new Date(this.spent_at.toDateString
()),b.setDate(this.spent_at.getDate()-7),this.jump_to_week(b)},b.prototype.available_project_and_task_count=
function(){return this.week==null?0:Harvest.available_project_tasks(this.week.rows
()).length},b.prototype.window_unload=function(a){var b;if(this.save_in_progress)
return a||(a=window.event),b="Your timesheet changes are still saving.",a.returnValue=
b,b;if(this.save_countdown_in_progress)return a||(a=window.event),b="You have unsaved time on your timesheet."
,a.returnValue=b,b},b.prototype.toggle_add_row_if_tasks_exhuasted=function(){return!
this.week.is_approved()&&this.available_project_and_task_count()?this.$(".button-new-row"
).removeClass("button-disabled").addClass("js-new-week-row"):this.$(".button-new-row"
).addClass("button-disabled").removeClass("js-new-week-row")},b.prototype.today=function(
){var a;return a=new Date,a.setHours(0,0,0,0),a},b.prototype.open_through_new_week_warning=
function(){var a,b=this;if(Harvest.current_view!==this||this.week.contains_today(
))return;return a=Handlebars.templates["timesheet/week/_open_through_new_week_warning"
],Harvest.flash.show(a).find("a").click(function(a){return b.jump_to_this_week(a)
}),$("body").animate({scrollTop:0},500,"linear")},b.prototype.save_on_enter=function(
a){if(a.keyCode===13&&this.save_countdown_in_progress)return this.save(a)},b.prototype
.initiate_approval=function(a){var b=this;a.preventDefault();if($(a.currentTarget
).hasClass("btn-disabled"))return;return $(a.currentTarget).addClass("btn-disabled"
),this.save_countdown_in_progress?(this.save(),this.week.on("week-save-success",function(
){return b.submit_for_approval()})):this.submit_for_approval()},b.prototype.initiate_withdraw=
function(a){var b=this;a.preventDefault();if($(a.currentTarget).hasClass("btn-disabled"
))return;return $(a.currentTarget).addClass("btn-disabled"),this.save_countdown_in_progress?
(this.save(),this.week.on("week-save-success",function(){return b.withdraw_approval
()})):this.withdraw_approval()},b.prototype.show_calendar_click=function(){return Harvest
.event_tracking.track({category:"Timesheets Week",action:"Show Calendar"})},b.prototype
.nav_day_click=function(a){return Harvest.event_tracking.track({category:"Timesheets Week"
,action:"Day View Toggle"})},b.prototype.daily_nav_click=function(a){return Harvest
.event_tracking.track({category:"Timesheets Week",action:"Day of Week Click"})},b
.prototype.show=function(){return b.__super__.show.call(this),this.$("input.js-compound-entry[type=text]:first"
).focus()},b.prototype.hide=function(){return b.__super__.hide.call(this),this.save
()},b}(Harvest.View),_.extend(Harvest.Views.Timesheet.Week.prototype,Harvest.Views
.Timesheet.UserSwitcher,Harvest.Views.Timesheet.Review,Harvest.Views.Timesheet.PreferredEntryMethod
);var __hasProp={}.hasOwnProperty,__extends=function(a,b){function d(){this.constructor=
a}for(var c in b)__hasProp.call(b,c)&&(a[c]=b[c]);return d.prototype=b.prototype,
a.prototype=new d,a.__super__=b.prototype,a};Harvest.Views.Timesheet.WeekClearAllRows=
function(a){function b(){return b.__super__.constructor.apply(this,arguments)}return __extends
(b,a),b.prototype.tagName="span",b.prototype.className="test-clear-all-rows",b.prototype
.events={"click .js-clear-all-rows":"clear_blank_rows"},b.prototype.initialize=function(
){var a=this;return this.week=this.options.week,this.week.on("week-save-success",
function(){return a.render()})},b.prototype.render=function(){var a;return a={allow_clear_all_rows
:!1},this.$el.html(Handlebars.templates["timesheet/week/_clear_all_rows"](a)),this
},b.prototype.clear_blank_rows=function(a){if(window.confirm("Clear your timesheet and start fresh?"
)?confirm:void 0)return this.week.clear_blank_rows()},b}(Backbone.View);var __hasProp=
{}.hasOwnProperty,__extends=function(a,b){function d(){this.constructor=a}for(var c in 
b)__hasProp.call(b,c)&&(a[c]=b[c]);return d.prototype=b.prototype,a.prototype=new 
d,a.__super__=b.prototype,a};Harvest.Views.Timesheet.WeekDayNavigationItem=function(
a){function b(){return b.__super__.constructor.apply(this,arguments)}return __extends
(b,a),b.prototype.tagName="td",b.prototype.className="day",b.prototype.initialize=
function(){return this.spent_at=this.options.spent_at},b.prototype.render=function(
){return this.$el.html(Handlebars.templates["timesheet/week/_day_nav"](this.params
())),this},b.prototype.params=function(){var a,b,c,d,e;return b=["js-day"],this.options
.today?b.push("today"):b.push("test-not-today"),e=this.spent_at.toString("year"),
c=this.spent_at.toString("month"),a=this.spent_at.toString("day"),d={href:"/time/day/"+
e+"/"+c+"/"+a+"/"+this.options.user_id,long_label:this.spent_at.toString("day_of_week"
),day:this.spent_at.toString("day_of_week_short"),date:this.spent_at.toString("day_month"
),"class":b.join(" ")},d},b}(Backbone.View);var __bind=function(a,b){return function(
){return a.apply(b,arguments)}},__hasProp={}.hasOwnProperty,__extends=function(a,
b){function d(){this.constructor=a}for(var c in b)__hasProp.call(b,c)&&(a[c]=b[c]
);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a};Harvest
.Views.Timesheet.WeekDayTotal=function(a){function b(){return this.render=__bind(
this.render,this),b.__super__.constructor.apply(this,arguments)}return __extends(
b,a),b.prototype.tagName="td",b.prototype.className="day",b.prototype.initialize=
function(a){return a==null&&(a={}),this.week=a.week,this.spent_at=a.spent_at,this
.week?(this.week.on("local-week-sync",this.render),this.week.on("week-row-destroy"
,this.render),this.week.on("update-totals",_.throttle(this.render,100))):this.render
()},b.prototype.render=function(){var a,b;if(!this.$el)return;return a=this.model?
this.model.sum_hours():0,b=Handlebars.templates["timesheet/week/_day_total"]({hours
:Harvest.hours.localize(a,{clean_zero:!0})}),a===0?this.$el.addClass("zero-total"
):this.$el.removeClass("zero-total"),this.spent_at.toString("iso")===(new Date).toString
("iso")?this.$el.addClass("today"):this.$el.addClass("test-not-today"),this.$el.addClass
("test-day-total-"+this.spent_at.getDay()),this.$el.html(b),this},b}(Backbone.View
);var __bind=function(a,b){return function(){return a.apply(b,arguments)}},__hasProp=
{}.hasOwnProperty,__extends=function(a,b){function d(){this.constructor=a}for(var c in 
b)__hasProp.call(b,c)&&(a[c]=b[c]);return d.prototype=b.prototype,a.prototype=new 
d,a.__super__=b.prototype,a};Harvest.Views.Timesheet.WeekRow=function(a){function b
(){return this.add_total=__bind(this.add_total,this),this.add_compound_entry=__bind
(this.add_compound_entry,this),b.__super__.constructor.apply(this,arguments)}return __extends
(b,a),b.prototype.tagName="tr",b.prototype.className="week-view-entry",b.prototype
.events={"click .js-remove-row":"delete_row_click","click .js-cancel-delete-entry"
:"cancel_delete_row_click","click .js-confirm-delete-entry":"destroy"},b.prototype
.initialize=function(a){return a==null&&(a={}),this.week=a.week,this.compound_entries=
this.week.compound_entries(this.model)||[],this.model.on("destroy",this.remove,this
)},b.prototype.render=function(){var a,b;return b=this.model.toJSON(),b.can_delete=!
Harvest.settings.wants_timestamp_timers&&!b.is_locked,a=Handlebars.templates["timesheet/week/_row"
](b),this.$el.html(a).attr({"data-project-id":this.model.project_id,"data-task-id"
:this.model.task_id}),this.add_all_compound_entries(),this.add_total(),Harvest.settings
.wants_timestamp_timers&&this.$el.addClass("read-only"),b.is_locked&&(this.$el.addClass
("locked"),this.$el.addClass("test-locked")),this.model.all_blank===!0&&(this.$(".js-compound-entry"
).addClass("changed"),this.model.all_blank=!1),b.is_locked===!0&&new Harvest.Tooltip
(this.$(".js-locked-tip")[0]),typeof ss_legacy=="function"&&ss_legacy(this.$el.find
(".ss-icon")),this.setup_delete_row_popover(),this},b.prototype.setup_delete_row_popover=
function(){if(this.$(".js-remove-row").length)return this.delete_popover=new Harvest
.Popover({button:this.$(".js-remove-row"),container:this.$(".pop-over-week-delete"
)})},b.prototype.add_all_compound_entries=function(){return _.each(this.compound_entries
,this.add_compound_entry)},b.prototype.add_compound_entry=function(a){var b;return b=new 
Harvest.Views.Timesheet.CompoundEntry({model:a}),this.$(".js-end-of-week-row").before
(b.render().el)},b.prototype.add_total=function(){var a;return a=new Harvest.Views
.Timesheet.WeekRowTotal({model:this.model,week:this.week}),this.$(".js-end-of-week-row"
).before(a.render().el)},b.prototype.delete_row_click=function(){return Harvest.event_tracking
.track({category:"Timesheets Week",action:"Delete Row",label:"Show Confirmation"}
)},b.prototype.cancel_delete_row_click=function(a){return a&&a.preventDefault(),this
.delete_popover.hide(),Harvest.event_tracking.track({category:"Timesheets Week",action
:"Delete Row",label:"Cancel Delete"})},b.prototype.destroy=function(a){return a&&
a.preventDefault(),this.delete_popover.hide(),Harvest.event_tracking.track({category
:"Timesheets Week",action:"Delete Row",label:"Delete Confirmed"}),this.model.remove
()},b.prototype.remove=function(){return this.$el.remove()},b}(Backbone.View);var __bind=
function(a,b){return function(){return a.apply(b,arguments)}},__hasProp={}.hasOwnProperty
,__extends=function(a,b){function d(){this.constructor=a}for(var c in b)__hasProp
.call(b,c)&&(a[c]=b[c]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=
b.prototype,a};Harvest.Views.Timesheet.WeekRowTotal=function(a){function b(){return this
.render=__bind(this.render,this),b.__super__.constructor.apply(this,arguments)}return __extends
(b,a),b.prototype.tagName="td",b.prototype.className="total",b.prototype.initialize=
function(a){return a==null&&(a={}),this.week=a.week,this.week.on("local-week-sync"
,this.render),this.week.on("update-totals",_.throttle(this.render,100))},b.prototype
.render=function(){var a,b;return b=this.model.toJSON(),a=Handlebars.templates["timesheet/week/_row_total"
](b),b.total_hours==="0"?this.$el.addClass("zero-total"):this.$el.removeClass("zero-total"
),this.$el.html(a),this},b}(Backbone.View),Harvest.client_project_task_names_for=
function(a,b){var c;return c=a.toString(),Harvest.projects_by_user_id[c]?b(Harvest
.projects_by_user_id[c]):jQuery.ajax({type:"GET",url:"/time/api/client_project_task_names.json?user_id="+
a,dataType:"json",success:function(a){return Harvest.projects_by_user_id[c]=a.projects
,b(Harvest.projects_by_user_id[c])}})},Harvest.reload_client_project_task_names_for=
function(a,b){var c;if(Harvest.client_project_task_names_reload_in_progress===!0)
return;return c=function(){var c;if(Harvest.client_project_task_names_reload_in_progress===!0
)return;return Harvest.client_project_task_names_reload_in_progress=!0,c=a.toString
(),Harvest.projects_by_user_id[c]=void 0,Harvest.client_project_task_names_for(a,
function(){var a;return a=function(){return Harvest.client_project_task_names_reload_in_progress=!1
},_.delay(a,2e3),b()})},_.delay(c,1e3)};var __bind=function(a,b){return function(
){return a.apply(b,arguments)}},__hasProp={}.hasOwnProperty,__extends=function(a,
b){function d(){this.constructor=a}for(var c in b)__hasProp.call(b,c)&&(a[c]=b[c]
);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a};Harvest
.Collections.Day=function(a){function b(){return this.no_time_entries_yet=__bind(
this.no_time_entries_yet,this),b.__super__.constructor.apply(this,arguments)}return __extends
(b,a),b.prototype.model=Harvest.Models.DayEntry,b.prototype.initialize=function()
{return this.on("add change:timer_started_at",this.enforce_one_running_timer_rule
,this)},b.prototype.url=function(){return this.spent_at.strftime("/time/api/%Y/%m/%d.json"
)},b.prototype.sum_hours=function(){return Harvest.hours.sum_values(this.invoke("localized_hours_or_hours_from"
))},b.prototype.checksum=function(){var a,b;return b=function(){var b,c,d,e;d=this
.models,e=[];for(b=0,c=d.length;b<c;b++)a=d[b],e.push([a.get("id"),a.get("updated_at"
)]);return e}.call(this),b=_.sortBy(b,function(a){return a[0]}),_.flatten(b).join
(",")},b.prototype.spent_at_human_format=function(){var a;return a="",this.is_today
()&&(a="<strong>Today:</strong>&nbsp;"),new Handlebars.SafeString(this.spent_at.strftime
(""+a+"%A, %d %b"))},b.prototype.enforce_one_running_timer_rule=function(a){var b
,c,d,e;if(!a.get("timer_started_at"))return;e=this.models;for(c=0,d=e.length;c<d;
c++)b=e[c],b.get("timer_started_at")&&b.get("id")!==a.get("id")&&b.stop_timer({without_save
:!0})},b.prototype.is_today=function(){var a;return a=new Date,this.spent_at.getDate
()!==a.getDate()?!1:this.spent_at.getMonth()!==a.getMonth()?!1:this.spent_at.getFullYear
()!==a.getFullYear()?!1:!0},b.prototype.running_timer=function(){var a,b,c,d;d=this
.models;for(b=0,c=d.length;b<c;b++){a=d[b];if(a.get("timer_started_at"))return a}
return null},b.prototype.url_for_day=function(a){return Harvest.url_for_day(a||(a=
this.spent_at))},b.prototype.toJSON=function(){var a=this;return{settings:Harvest
.settings,spent_at:this.spent_at_human_format(),sum_hours:this.sum_hours(),contains_today
:function(){var b;return b=new Date,b.toDateString()===a.spent_at.toDateString()}
,no_time_entries_yet:this.no_time_entries_yet,url_for_prev_day:function(){var b;return b=new 
Date(a.spent_at.toDateString()),b.setDate(b.getDate()-1),a.url_for_day(b)},url_for_next_day
:function(){var b;return b=new Date(a.spent_at.toDateString()),b.setDate(b.getDate
()+1),a.url_for_day(b)},url_for_today:function(){return a.url_for_day(new Date)}}
},b.prototype.no_time_entries_yet=function(){return this.length===0},b}(Backbone.
Collection),Harvest.Collections.RecentProjectsTasks=function(){function a(a){var b
,c,d,e;this.all=[];for(c=0,d=a.length;c<d;c++)b=a[c],((e=Harvest.projects[b.project_id
])!=null?e.tasks[b.task_id]:void 0)&&this.all.push(new Harvest.Models.RecentProjectTask
(b))}return a.prototype.active=function(){var a,b,c,d,e;if(this.all.length===0)return[
];c=_.filter(this.all,function(a){return a.is_active()}),a=4,c.length<a&&(a=c.length-1
),e=[];for(b=d=0;0<=a?d<=a:d>=a;b=0<=a?++d:--d)e.push(c[b]);return e},a.prototype
.add=function(a){var b,c,d,e;e=this.all;for(c=0,d=e.length;c<d;c++){b=e[c];if(a.attributes
.project_id===b.attributes.project_id&&a.attributes.task_id===b.attributes.task_id
)return}return this.all.unshift(a)},a}();var __hasProp={}.hasOwnProperty,__extends=
function(a,b){function d(){this.constructor=a}for(var c in b)__hasProp.call(b,c)&&
(a[c]=b[c]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype
,a};Harvest.Collections.RunningTimers=function(a){function b(){return b.__super__
.constructor.apply(this,arguments)}return __extends(b,a),b.prototype.model=Harvest
.Models.DayEntry,b.prototype.initialize=function(a,b){return this.user_id=b.user_id
},b.prototype.url=function(){return"/time/api/running_timers.json?user_id="+this.
user_id},b.prototype.comparator=function(a){return a.spent_at()},b.prototype.toJSON=
function(){var a,b,c,d;return b={},b.timesheet_links=function(){var b,e,f,g;f=this
.models,g=[];for(b=0,e=f.length;b<e;b++)a=f[b],c=a.spent_at(),d=Harvest.routes.other_users_timesheet_at_path
({year:c.toString("year"),month:c.toString("month"),day:c.toString("day"),other_user
:this.user_id}),g.push({spent_at:c.strftime(Harvest.settings.date_format),url:d,last
:this.last()===a});return g}.call(this),b},b}(Backbone.Collection),Harvest.Collections
.reset_running_timers=function(a){var b;(b=Harvest.collections).running_timers||(
b.running_timers={});if(Harvest.collections.running_timers[a.toString()])return Harvest
.collections.running_timers[a.toString()].fetch()},Harvest.Collections.get_running_timers=
function(a,b){var c,d,e=this;return(d=Harvest.collections).running_timers||(d.running_timers=
{}),Harvest.collections.running_timers[a.toString()]?b(Harvest.collections.running_timers
[a.toString()]):(c=new Harvest.Collections.RunningTimers([],{user_id:a}),c.fetch(
{success:function(c){return Harvest.collections.running_timers[a.toString()]=c,b(
c)}}))};var __hasProp={}.hasOwnProperty,__extends=function(a,b){function d(){this
.constructor=a}for(var c in b)__hasProp.call(b,c)&&(a[c]=b[c]);return d.prototype=
b.prototype,a.prototype=new d,a.__super__=b.prototype,a};Harvest.Collections.TeamStatus=
function(a){function b(){return b.__super__.constructor.apply(this,arguments)}return __extends
(b,a),b.prototype.model=Harvest.Models.StatusEntry,b.prototype.url="/time/api/team_status.json"
,b.prototype.comparator=function(a){return Harvest.users[a.get("user_id")].name},
b.prototype.initialize=function(){return Harvest.on("company-timesheet-updated",this
.team_status_changed,this)},b.prototype.team_status_changed=function(){return Harvest
.current_view===Harvest.views.status?this.fetch():Harvest.views.status=void 0},b}
(Backbone.Collection);var __bind=function(a,b){return function(){return a.apply(b
,arguments)}};Harvest.Collections.Week=function(){function a(a){var b=this;a==null&&
(a={}),this.each_entry=__bind(this.each_entry,this),this.each_day=__bind(this.each_day
,this),this.should_update_durations=__bind(this.should_update_durations,this),this
.contains_today=__bind(this.contains_today,this),this.user_id=a.user_id||Harvest.
settings.timesheet_owner,Harvest.on("week-duration-changed",this.should_update_durations
),this.on("week-row-destroy",function(a){return b.remove_blank_row(a)}),a.raw_records?
(this.parse_days(a.raw_records.day_entries,a.days_in_week),this.blank_rows=a.raw_records
.blank_rows,this.approval=a.raw_records.approval):this.fetch(a)}return a.prototype
.parse_days=function(a,b){var c,d,e,f;return d=function(){var d,g,h;h=[];for(d=0,
g=b.length;d<g;d++)c=b[d],e=new Harvest.Collections.Day,f=_.select(a,function(a){
return a.day_entry.spent_at===c}),e.reset(f,{parse:!0}),e.spent_at=Harvest.parse_date
(c),h.push(e);return h}(),this.days?this.check_for_updates(d):this.days=d},a.prototype
.sum_hours=function(){return Harvest.hours.sum_values(_.invoke(this.days,"sum_hours"
))},a.prototype.fetch=function(a){var b=this;return jQuery.ajax({type:"GET",url:this
.url_for_week(a.first_day),dataType:"json",success:function(c){var d,e,f;return f=
function(){var b,c;c=[];for(d=b=0;b<=6;d=++b)e=new Date(a.first_day.toDateString(
)),e.setDate(e.getDate()+d),c.push(e.toString("iso"));return c}(),b.parse_days(c.
day_entries,f),b.approval=c.approval,b.blank_rows=c.blank_rows,a.on_load(),b.trigger
("fetch-complete")}})},a.prototype.url_for_week=function(a){return a.strftime(""+
Harvest.router.root+"weekly/%Y/%m/%d/user/"+this.user_id)},a.prototype.check_for_updates=
function(a){var b,c,d,e,f;b=!1,f=[];for(c=e=0;e<=6;c=++e)this.days[c].checksum()!==
a[c].checksum()?(this.days[c].reset(a[c].map(function(a){return a.attributes})),d=
this.days[c].spent_at,f.push(null)):f.push(void 0);return f},a.prototype.human_label=
function(){return this.contains_today()?"This Week:":"Week:"},a.human_timeframe=function(
a,b){var c;return c=a.getFullYear()===b.getFullYear()?a.getMonth()===b.getMonth()?
a.toString("day"):a.toString("day_month"):a.toString("human_format"),b.strftime(""+
c+" – %d %b %Y")},a.prototype.human_timeframe=function(){return Harvest.Collections
.Week.human_timeframe(this.days[0].spent_at,this.days[6].spent_at)},a.prototype.period_begin=
function(){return this.days[0].spent_at},a.prototype.reload=function(){var a=this
;return this.fetch({first_day:this.days[0].spent_at,on_load:function(){return a.trigger
("reloaded")}})},a.prototype.rows=function(){var a,b,c=this;return this._rows!=null?
this._rows:(b={},this.each_entry(function(a){var d;d=a.get("project_id").toString
()+a.get("task_id").toString();if(b[d]===void 0)return b[d]=new Harvest.Models.WeekRow
({project_id:a.get("project_id"),task_id:a.get("task_id"),week:c})}),a=_.values(b
),_.each(this.blank_rows,function(d){var e;e=d.project_id.toString()+d.task_id.toString
();if(b[e]===void 0)return a.push(new Harvest.Models.WeekRow({project_id:d.project_id
,task_id:d.task_id,locked_reason:d.locked_reason,row_approved:d.row_approved,week
:c}))}),this._rows=_.sortBy(a,function(a){var b;return b=a.toJSON(),a.sort_string
()}),this._rows)},a.prototype.sort_index=function(a){var b,c=this;return b=_.map(
this.rows(),function(a){return a.sort_string()}),_.sortedIndex(b,a.sort_string())
},a.prototype.add_blank_row=function(a){return this._rows=null,this.last_blank_row_project_id=
a.project_id,this.blank_rows.push({project_id:a.project_id,task_id:a.task_id})},a
.prototype.remove_blank_row=function(a){return this._rows=null,this.blank_rows=_.
reject(this.blank_rows,function(b){return b.project_id===a.project_id&&b.task_id===
a.task_id})},a.prototype.clear_blank_rows=function(){var a=this;return this._rows=
null,jQuery.ajax({type:"POST",url:this.url_for_clear_week(this.days[0].spent_at),
contentType:"application/x-www-form-urlencoded",success:function(b){return a.reload
()},error:function(a){return new Harvest.Views.Timesheet.Error({model:jQuery.parseJSON
(a.responseText)})}})},a.prototype.url_for_clear_week=function(a){return a.strftime
(""+Harvest.router.root+"week/%Y/%m/%d/clear_blank_rows")},a.prototype.compound_entries=
function(a){var b,c=this;return b=[],this.each_day(function(d){return b.push(new 
Harvest.Models.CompoundEntry({spent_at:d.spent_at,project_id:a.project_id,task_id
:a.task_id,locked_reason:a.locked_reason,day:d,week:c}))}),b},a.prototype.suggest_day_entry_defaults=
function(){var a,b;return b={spent_at:new Date,hours:"0",notes:""},a=this.last_unlocked_entry_from_the_current_week
(Harvest.projects),a&&(b.project_id=a.get("project_id"),b.task_id=a.get("task_id"
)),b},a.prototype.suggest_week_row_defaults=function(a,b){var c;return c={week:a}
,this.last_blank_row_project_id&&_.where(b,{id:this.last_blank_row_project_id}).length&&
(c.project_id=this.last_blank_row_project_id),c},a.prototype.all_unlocked_entries_in_updated_at_order=
function(){var a,b;return a=function(a){return _.filter(a.models,function(a){return!
a.is_locked()})},b=function(a){return a.get("updated_at")},_.sortBy(_.flatten(_.map
(this.days,a)),b)},a.prototype.last_unlocked_entry_from_the_current_week=function(
a){var b,c,d;b=_.last(this.all_unlocked_entries_in_updated_at_order());if(b){c=a[
b.get("project_id")],c&&(d=c.tasks[b.get("task_id")]);if(d&&c&&c.project_active&&
c.user_assigned&&d.task_assigned&&d.task_active)return b}return null},a.prototype
.contains_day=function(a){var b;return b=new Date(a.toDateString()),b.getDate()!==
a.getDate()&&(b=a),this.days&&this.days[0].spent_at<=b&&this.days[6].spent_at>=b}
,a.prototype.contains_today=function(){var a;return a=new Date,a.setHours(0,0,0,0
),this.contains_day(a)},a.prototype.get_day=function(a){var b,c,d,e,f;c=a.toDateString
(),f=this.days;for(d=0,e=f.length;d<e;d++){b=f[d];if(b.spent_at.toDateString()===
c)return b}return null},a.prototype.should_update_durations=function(a){var b,c,d
,e,f;if(this.contains_day(a.day)){e=this.days,f=[];for(c=0,d=e.length;c<d;c++)b=e
[c],b.spent_at.getDay()!==a.day.getDay()?f.push(b.trigger("update-after-duration"
)):f.push(void 0);return f}},a.prototype.is_approved=function(){return this.approval!=
null&&this.approval.span_approved},a.prototype.is_pending_approval=function(){return this
.approval!=null&&this.approval.pending_approval},a.prototype.any_approved=function(
){var a,b,c,d,e,f,g,h,i;h=this.rows();for(d=0,f=h.length;d<f;d++){c=h[d];if(c.is_approved
())return!0}a=function(a,b){return a||b.get("is_closed")===!0},i=this.days;for(e=0
,g=i.length;e<g;e++){b=i[e];if(_.reduce(b.models,a,this.is_approved()))return!0}return!1
},a.prototype.each_day=function(a){var b=this;return _.each(this.days,function(b)
{return a(b)})},a.prototype.each_entry=function(a){var b=this;return this.each_day
(function(b){return b.each(function(b){return a(b)})})},a}(),Harvest.Collections.
get_day=function(a,b,c){var d,e,f,g,h;c===void 0&&_.isFunction(b)&&(c=b,b=Harvest
.settings.current_user.id),h=Harvest.collections.weeks;for(f in h){g=h[f];if(g.days&&
g.contains_day(a)&&g.user_id.toString()===b.toString()){c(g.get_day(a),g);return}
}return d=Harvest.Collections.first_day_in_week_for(a),e=""+d.toString("iso")+"/user/"+
b,Harvest.collections.weeks[e]&&!Harvest.collections.weeks[e].days?Harvest.collections
.weeks[e].on("fetch-complete",function(){return Harvest.Collections.get_day(a,b,c
)}):Harvest.collections.weeks[e]=new Harvest.Collections.Week({first_day:d,user_id
:b,on_load:function(){return Harvest.Collections.get_day(a,b,c)}})},Harvest.Collections
.first_day_in_week_for=function(a){var b,c,d,e;return e=Harvest.collections.bootstrapped_week
.days[0].spent_at.getDay(),c=new Date(a.toDateString()),e!==a.getDay()&&(b=a.getDay
(),b<e&&(b+=7),d=b-e,c.setDate(c.getDate()-d)),c},Harvest.Collections.week_arround_day=
function(a){var b,c,d,e,f;c=Harvest.Collections.first_day_in_week_for(a),f=[];for(
d=e=0;e<=6;d=++e)b=new Date(c.toDateString()),b.setDate(b.getDate()+d),f.push(b);
return f},_.extend(Harvest.Collections.Week.prototype,Backbone.Events),function()
{var a=Handlebars.template,b=Handlebars.templates=Handlebars.templates||{};b["timesheet/_approval"
]=a(function(a,b,c,d,e){function k(a,b){var d="",e,f;return d+="\n<span class='rebecca-black'>It's Friday!</span>\n<a class='button button-medium button-blue' href='#'>\n"
,f=c.submit_text,f?e=f.call(a,{hash:{}}):(e=a.submit_text,e=typeof e===h?e():e),d+=
i(e)+"\n</a>\n",d}function l(a,b){var d="",e,f;return d+="\n<a class='button button-medium' href='#'>\n"
,f=c.submit_text,f?e=f.call(a,{hash:{}}):(e=a.submit_text,e=typeof e===h?e():e),d+=
i(e)+"\n</a>\n",d}c=c||a.helpers;var f="",g,h="function",i=this.escapeExpression,
j=this;g=b.should_submit_approval,g=c["if"].call(b,g,{hash:{},inverse:j.program(3
,l,e),fn:j.program(1,k,e)});if(g||g===0)f+=g;return f+="\n",f})}(),Handlebars.registerPartial
("timesheet.approval",Handlebars.templates["timesheet/_approval"]),function(){var a=
Handlebars.template,b=Handlebars.templates=Handlebars.templates||{};b["timesheet/_approval_buttons"
]=a(function(a,b,c,d,e){function i(a,b){return"\n<span class='js-wrap'>\n<a class='button submit-link js-toggle-approve test-withdraw-button' href='javascript:void(0)' tabindex='3'>Withdraw Approval</a>\n<div class='approval-confirmation' style='display:none;'>\nThis will unlock the entire timesheet.\n<a class='button button-small button-red js-unlock-timesheet' href='javascript:void(0)'>Yes, Unlock Timesheet</a>\n<a class='button button-small button-cancel js-toggle-approve' href='javascript:void(0)'>Cancel</a>\n</div>\n</span>\n"
}function j(a,b){return"\n<span class='js-wrap'>\n<a class='button submit-link js-toggle-approve test-resubmit-button' href='javascript:void(0)' tabindex='3'>Re-submit Timesheet</a>\n<div class='approval-confirmation' style='display:none;'>\nRe-submit this timesheet for approval?\n<a class='button button-small button-submit js-submit-for-approval' href='javascript:void(0)'>Yes, Re-submit Timesheet</a>\n<a class='button button-small button-cancel js-toggle-approve' href='javascript:void(0)'>Cancel</a>\n</div>\n</span>\n"
}function k(a,b){return"\n<span class='js-wrap'>\n<a class='button submit-link js-toggle-approve test-submit-button' href='javascript:void(0)' tabindex='3'>Submit for Approval</a>\n<div class='approval-confirmation' style='display:none;'>\nReady to submit this timesheet for approval?\n<a class='button button-small button-submit js-submit-for-approval' href='javascript:void(0)'>Yes, Submit Timesheet</a>\n<a class='button button-small button-cancel js-toggle-approve' href='javascript:void(0)'>Cancel</a>\n</div>\n</span>\n"
}c=c||a.helpers;var f="",g,h=this;f+="<div class='approval-button'>\n",g=b.can_unlock_approved_timesheet
,g=c["if"].call(b,g,{hash:{},inverse:h.noop,fn:h.program(1,i,e)});if(g||g===0)f+=
g;f+="\n",g=b.pending_approval,g=c["if"].call(b,g,{hash:{},inverse:h.noop,fn:h.program
(3,j,e)});if(g||g===0)f+=g;f+="\n",g=b.not_yet_submitted,g=c["if"].call(b,g,{hash
:{},inverse:h.noop,fn:h.program(5,k,e)});if(g||g===0)f+=g;return f+="\n</div>\n",
f})}(),Handlebars.registerPartial("timesheet.approval_buttons",Handlebars.templates
["timesheet/_approval_buttons"]),function(){var a=Handlebars.template,b=Handlebars
.templates=Handlebars.templates||{};b["timesheet/_approval_status"]=a(function(a,
b,c,d,e){function i(a,b){var d="",e;d+="\n",e=a.pending_approval,e=c["if"].call(a
,e,{hash:{},inverse:h.noop,fn:h.program(2,j,b)});if(e||e===0)d+=e;d+="\n",e=a.is_approved
,e=c["if"].call(a,e,{hash:{},inverse:h.noop,fn:h.program(4,k,b)});if(e||e===0)d+=
e;return d+="\n",d}function j(a,b){return"\n<div class='approval-status pending-approval'>\nPending Approval\n</div>\n"
}function k(a,b){return"\n<div class='approval-status approved'>\nApproved\n</div>\n"
}c=c||a.helpers;var f="",g,h=this;g=b.settings,g=g==null||g===!1?g:g.approval_required
,g=c["if"].call(b,g,{hash:{},inverse:h.noop,fn:h.program(1,i,e)});if(g||g===0)f+=
g;return f+="\n",f})}(),Handlebars.registerPartial("timesheet.approval_status",Handlebars
.templates["timesheet/_approval_status"]),function(){var a=Handlebars.template,b=
Handlebars.templates=Handlebars.templates||{};b["timesheet/_day_entry"]=a(function(
a,b,c,d,e){function m(a,b){var d="",e,f;d+="\n<td class='entry-timestamps'>\n<div class='start-time'>"
,f=c.started_at,f?e=f.call(a,{hash:{}}):(e=a.started_at,e=typeof e===i?e():e),d+=
j(e)+"</div>\n<div class='end-time'>",f=c.ended_at,f?e=f.call(a,{hash:{}}):(e=a.ended_at
,e=typeof e===i?e():e),d+=j(e)+"</div>\n</td>\n<td>\n<div class='entry-info-with-timestamps'>\n<div class='project-client'>\n<span class='project'>"
,f=c.project_name,f?e=f.call(a,{hash:{}}):(e=a.project_name,e=typeof e===i?e():e)
,d+=j(e)+"</span>\n<span class='client'>\n(",f=c.client_name,f?e=f.call(a,{hash:{
}}):(e=a.client_name,e=typeof e===i?e():e),d+=j(e)+")\n</span>\n</div>\n<div class='task-notes'>\n<span class='task'>"
,f=c.task_name,f?e=f.call(a,{hash:{}}):(e=a.task_name,e=typeof e===i?e():e),d+=j(
e)+"</span>\n",e=a.has_notes,e=c["if"].call(a,e,{hash:{},inverse:k.noop,fn:k.program
(2,n,b)});if(e||e===0)d+=e;return d+="\n</div>\n</div>\n</td>\n",d}function n(a,b
){var d="",e,f;return d+="\n<span class='ndash'>–</span>\n<span class='notes'>\n"
,f=c.textilized_notes,f?e=f.call(a,{hash:{}}):(e=a.textilized_notes,e=typeof e===
i?e():e),d+=j(e)+"\n</span>\n",d}function o(a,b){var d="",e,f;d+="\n<td>\n<div class='entry-info'>\n<div class='project-client'>\n<span class='project'>"
,f=c.project_name,f?e=f.call(a,{hash:{}}):(e=a.project_name,e=typeof e===i?e():e)
,d+=j(e)+"</span>\n<span class='client'>\n(",f=c.client_name,f?e=f.call(a,{hash:{
}}):(e=a.client_name,e=typeof e===i?e():e),d+=j(e)+")\n</span>\n</div>\n<div class='task-notes'>\n<span class='task'>"
,f=c.task_name,f?e=f.call(a,{hash:{}}):(e=a.task_name,e=typeof e===i?e():e),d+=j(
e)+"</span>\n",e=a.has_notes,e=c["if"].call(a,e,{hash:{},inverse:k.noop,fn:k.program
(5,p,b)});if(e||e===0)d+=e;return d+="\n</div>\n</div>\n</td>\n",d}function p(a,b
){var d="",e,f;return d+="\n<span class='ndash'>–</span>\n<span class='notes'>\n"
,f=c.textilized_notes,f?e=f.call(a,{hash:{}}):(e=a.textilized_notes,e=typeof e===
i?e():e),d+=j(e)+"\n</span>\n",d}function q(a,b){return"\n<a class='button button-large button-running js-stop-timer' href='javascript:void(0)' tabindex='1'>\n<b class='running-icon'>\n<i></i>\n</b>\nStop\n</a>\n"
}function r(a,b){var d="",e;d+="\n",e=a.is_from_today,e=c["if"].call(a,e,{hash:{}
,inverse:k.program(12,t,b),fn:k.program(10,s,b)});if(e||e===0)d+=e;return d+="\n"
,d}function s(a,b){return"\n<a class='button button-large js-start-timer' href='javascript:void(0)' tabindex='1'>\n<b class='running-icon'>\n<i></i>\n</b>\nStart\n</a>\n"
}function t(a,b){return"\n<a class='button button-large js-confirm-timer' href='javascript:void(0)' tabindex='1'>\n<b class='running-icon'>\n<i></i>\n</b>\nStart\n</a>\n<div class='pop-over pop-over-submit pop-over-start-timer'>\nThis is not today's timesheet. Start the timer anyway?\n<div>\n<a class='button button-small button-green js-confirm-start-timer js-bubble' href='#'>Start Timer</a>\n<a class='button button-small button-cancel js-cancel-start-timer js-bubble' href='#'>Cancel</a>\n</div>\n</div>\n"
}function u(a,b){var d="",e,f;return d+="\n<a class='js-edit-entry js-locked-tip button button-small button-deemphasize harvest-tooltip-center' title='"
,f=c.tooltip_locked_explanation,e=f?f.call(a,a,{hash:{}}):l.call(a,"tooltip_locked_explanation"
,a,{hash:{}}),d+=j(e)+"'>\n<span class='ss-icon'>Lock</span>\n</a>\n",d}function v
(a,b){return"\n<a class='js-edit-entry button button-small button-deemphasize' href='javascript:void(0)' tabindex='1' title='Edit Entry'>\n<span class='ss-icon' title='Edit Entry'>Write</span>\n</a>\n"
}c=c||a.helpers;var f="",g,h,i="function",j=this.escapeExpression,k=this,l=c.helperMissing
;f+="<table border='0' cellpadding='0' cellspacing='0'>\n<tr>\n",g=b.settings,g=g==
null||g===!1?g:g.wants_timestamp_timers,g=c["if"].call(b,g,{hash:{},inverse:k.program
(4,o,e),fn:k.program(1,m,e)});if(g||g===0)f+=g;f+="\n<td class='entry-time'>\n",h=
c.hours,h?g=h.call(b,{hash:{}}):(g=b.hours,g=typeof g===i?g():g),f+=j(g)+"\n</td>\n<td class='entry-button'>\n"
,g=b.running,g=c["if"].call(b,g,{hash:{},inverse:k.program(9,r,e),fn:k.program(7,
q,e)});if(g||g===0)f+=g;f+="\n</td>\n<td class='edit-button'>\n",g=b.locked,g=c["if"
].call(b,g,{hash:{},inverse:k.program(16,v,e),fn:k.program(14,u,e)});if(g||g===0)
f+=g;return f+="\n</td>\n</tr>\n</table>\n",f})}(),Handlebars.registerPartial("timesheet.day_entry"
,Handlebars.templates["timesheet/_day_entry"]),function(){var a=Handlebars.template
,b=Handlebars.templates=Handlebars.templates||{};b["timesheet/_day_entry_form"]=a
(function(a,b,c,d,e){function m(a,b){return"\n<h1>Edit Entry</h1>\n"}function n(a
,b){return"\n<h1>New Time Entry</h1>\n"}function o(a,b){var d="",e,f;return d+="\n<div class='locked-explanation'>\n"
,e=a.entry,f=c.locked_warning,e=f?f.call(a,e,{hash:{}}):i.call(a,"locked_warning"
,e,{hash:{}}),d+=j(e)+"\n</div>\n",d}function p(a,b){var c="",d;return c+="\n<div class='nf-field'>\n<div class='entry-project-task'>\n<strong>\n"
,d=a.entry,d=d==null||d===!1?d:d.project_name,d=typeof d===k?d():d,c+=j(d)+"\n<span>("
,d=a.entry,d=d==null||d===!1?d:d.client_name,d=typeof d===k?d():d,c+=j(d)+")</span>\n</strong>\n"
,d=a.entry,d=d==null||d===!1?d:d.task_name,d=typeof d===k?d():d,c+=j(d)+"\n</div>\n<input name='projects' type='hidden' value='"
,d=a.entry,d=d==null||d===!1?d:d.project_id,d=typeof d===k?d():d,c+=j(d)+"'>\n<input name='tasks' type='hidden' value='"
,d=a.entry,d=d==null||d===!1?d:d.task_id,d=typeof d===k?d():d,c+=j(d)+"'>\n</div>\n"
,c}function q(a,b){var d="",e,f;return d+="\n<div class='nf-field'>\n<label for='projects'>Project / Task</label>\n<select class='js-project' name='projects'>\n"
,f=c.project_option_tags,f?e=f.call(a,{hash:{}}):(e=a.project_option_tags,e=typeof 
e===k?e():e),d+=j(e)+"\n</select>\n</div>\n<div class='nf-field'>\n<label for='tasks' style='display:none'>Tasks</label>\n<select class='js-tasks' name='tasks'>\n"
,f=c.task_option_tags,f?e=f.call(a,{hash:{}}):(e=a.task_option_tags,e=typeof e===
k?e():e),d+=j(e)+"\n</select>\n</div>\n",d}function r(a,b){var d="",e,f;d+="\n<div class='nf-field'>\n<label for='entry-notes'>Notes (optional)</label>\n<textarea class='entry-notes js-notes' id='entry-notes' name='notes' placeholder='Notes (optional)'>"
,e=a.entry,e=e==null||e===!1?e:e.notes,e=typeof e===k?e():e,d+=j(e)+"</textarea>\n"
,e=a.entry,e=e==null||e===!1?e:e.has_notes,e=c.unless.call(a,e,{hash:{},inverse:l
.noop,fn:l.program(12,s,b)});if(e||e===0)d+=e;return d+="\n</div>\n<div class='nf-field nef-timestamps'>\n<div>\n<label for='entry-start-time'>Start Time</label>\n<label for='entry-end-time'>End Time</label>\n</div>\n<input class='start-time js-start-time' id='entry-start-time' name='started_at' placeholder='Start Time' type='text' value='"
,e=a.entry,e=e==null||e===!1?e:e.started_at,e=typeof e===k?e():e,d+=j(e)+"'>\n<span>to</span>\n<input class='end-time js-end-time' id='entry-end-time' name='ended_at' placeholder='End Time' type='text' value='"
,e=a.entry,e=e==null||e===!1?e:e.ended_at,e=typeof e===k?e():e,d+=j(e)+"'>\n<span class='nef-timestamps-total js-timestamp-total-hint'>\n"
,f=c.elapsed_time,f?e=f.call(a,{hash:{}}):(e=a.elapsed_time,e=typeof e===k?e():e)
,d+=j(e)+"\n</span>\n</div>\n",d}function s(a,b){return"\n<span class='add-notes-helper-text'>Shift+Return for line break</span>\n"
}function t(a,b){var d="",e;d+="\n<div class='nf-field'>\n<div class='nef-duration-notes'>\n<label for='entry-notes'>Notes (optional)</label>\n<textarea class='entry-notes js-notes' id='entry-notes' name='notes' placeholder='Notes (optional)'>"
,e=a.entry,e=e==null||e===!1?e:e.notes,e=typeof e===k?e():e,d+=j(e)+"</textarea>\n"
,e=a.entry,e=e==null||e===!1?e:e.has_notes,e=c.unless.call(a,e,{hash:{},inverse:l
.noop,fn:l.program(15,u,b)});if(e||e===0)d+=e;d+="\n</div>\n<div class='nef-duration'>\n<label for='entry-duration'>Hours</label>\n"
,e=a.entry,e=e==null||e===!1?e:e.running,e=c.unless.call(a,e,{hash:{},inverse:l.noop
,fn:l.program(17,v,b)});if(e||e===0)d+=e;d+="\n",e=a.entry,e=e==null||e===!1?e:e.
running,e=c["if"].call(a,e,{hash:{},inverse:l.noop,fn:l.program(19,w,b)});if(e||e===0
)d+=e;d+="\n",e=a.needs_ftux_message,e=c["if"].call(a,e,{hash:{},inverse:l.noop,fn
:l.program(21,x,b)});if(e||e===0)d+=e;return d+="\n</div>\n</div>\n",d}function u
(a,b){return"\n<span class='add-notes-helper-text'>Shift+Return for line break</span>\n"
}function v(a,b){var d="",e,f;return d+="\n<input class='entry-duration js-duration' id='entry-duration' name='duration' placeholder='"
,f=c.duration_placeholder,f?e=f.call(a,{hash:{}}):(e=a.duration_placeholder,e=typeof 
e===k?e():e),d+=j(e)+"' type='text' value='",e=a.entry,e=e==null||e===!1?e:e.hours
,e=typeof e===k?e():e,d+=j(e)+"'>\n",d}function w(a,b){var d="",e,f;return d+="\n<input class='harvest-tooltip-right entry-duration js-duration readonly-running harvest-tooltip-center disabled' id='entry-duration' name='duration' placeholder='"
,f=c.duration_placeholder,f?e=f.call(a,{hash:{}}):(e=a.duration_placeholder,e=typeof 
e===k?e():e),d+=j(e)+"' readonly='' title='Stop timer to edit.' type='text' value='"
,e=a.entry,e=e==null||e===!1?e:e.hours,e=typeof e===k?e():e,d+=j(e)+"'>\n",d}function x
(a,b){var d="",e;d+="\n",e=a.entry,e=e==null||e===!1?e:e.is_from_today,e=c["if"].
call(a,e,{hash:{},inverse:l.program(24,z,b),fn:l.program(22,y,b)});if(e||e===0)d+=
e;return d+="\n",d}function y(a,b){return"\n<div class='pop-over-helper duration-helper'>\nLeave this blank to start a timer. You can also enter time as 1.5 or 1:30 (they both mean 1 hour and 30 minutes).\n<a class='js-dismiss-ftux-message' href='javascript:void(0)'>Don't show this again</a>\n</div>\n"
}function z(a,b){return"\n<div class='pop-over-helper duration-helper'>\nYou can enter time as 1.5 or 1:30. We know they both mean 1 hour and 30 minutes.\n<a class='js-dismiss-ftux-message' href='javascript:void(0)' tabindex='-1'>Don't show this again</a>\n</div>\n"
}function A(a,b){var d="",e;d+="\n<div class='nf-submit-right'>\n",e=a.entry,e=e==
null||e===!1?e:e.locked,e=c.unless.call(a,e,{hash:{},inverse:l.noop,fn:l.program(27
,B,b)});if(e||e===0)d+=e;return d+="\n<a class='button button-small button-no-border edit-entry-delete js-delete-entry' href='javascript:void(0)'>\n<span class='ss-delete'>Delete</span>\n</a>\n</div>\n"
,d}function B(a,b){var d="",e;d+="\n",e=a.entry,e=e==null||e===!1?e:e.running,e=c
.unless.call(a,e,{hash:{},inverse:l.noop,fn:l.program(28,C,b)});if(e||e===0)d+=e;
return d+="\n",d}function C(a,b){var c="",d;return c+="\n<a class='button button-small button-no-border js-change-date' href='javascript:void(0)'>\n<span class='ss-calendar'>Change Date</span>\n</a>\n<input class='input input-small spent-at js-spent-at' name='spent_at' style='display:none;text-align:right;' value='"
,d=a.entry,d=d==null||d===!1?d:d.localized_spent_at,d=typeof d===k?d():d,c+=j(d)+"'>\n<div class='pop-over js-edit-entry-calendar-wrap'></div>\n"
,c}c=c||a.helpers;var f="",g,h,i=c.helperMissing,j=this.escapeExpression,k="function"
,l=this;g=b.entry,g=g==null||g===!1?g:g.existing_record,g=c["if"].call(b,g,{hash:
{},inverse:l.program(3,n,e),fn:l.program(1,m,e)});if(g||g===0)f+=g;f+="\n",g=b.entry
,g=g==null||g===!1?g:g.locked,g=c["if"].call(b,g,{hash:{},inverse:l.noop,fn:l.program
(5,o,e)});if(g||g===0)f+=g;f+="\n<form class='new-form new-entry-form' data-parent-view-id='"
,h=c.parent_view_id,h?g=h.call(b,{hash:{}}):(g=b.parent_view_id,g=typeof g===k?g(
):g),f+=j(g)+"'>\n",g=b.entry,g=g==null||g===!1?g:g.locked,g=c["if"].call(b,g,{hash
:{},inverse:l.program(9,q,e),fn:l.program(7,p,e)});if(g||g===0)f+=g;f+="\n",g=b.settings
,g=g==null||g===!1?g:g.wants_timestamp_timers,g=c["if"].call(b,g,{hash:{},inverse
:l.program(14,t,e),fn:l.program(11,r,e)});if(g||g===0)f+=g;f+="\n<div class='nf-submit'>\n<input class='button button-large button-primary js-save' type='submit' value='"
,h=c.save_label,h?g=h.call(b,{hash:{}}):(g=b.save_label,g=typeof g===k?g():g),f+=
j(g)+"'>\n<a class='button button-large button-cancel js-cancel' href='#'>Cancel</a>\n"
,g=b.entry,g=g==null||g===!1?g:g.existing_record,g=c["if"].call(b,g,{hash:{},inverse
:l.noop,fn:l.program(26,A,e)});if(g||g===0)f+=g;return f+="\n</div>\n<div class='nf-submit timer-start-confirmation js-timer-start-confirmation' style='display: none;'>\n<span>This is not today's timesheet. Start the timer anyway?</span>\n<a class='button button-small button-green js-confirm-start-timer' href='#'>Start Timer</a>\n<a class='button button-small button-cancel js-cancel-start-timer' href='#'>Cancel</a>\n</div>\n<div class='nf-submit entry-delete-confirmation js-entry-delete-confirmation' style='display: none;'>\nRemove entry from this timesheet?\n&nbsp;\n<a class='button button-small button-red js-confirm-delete-entry' href='#'>Delete</a>\n<a class='button button-small button-cancel js-cancel-delete-entry' href='#'>Cancel</a>\n</div>\n</form>\n"
,f})}(),Handlebars.registerPartial("timesheet.day_entry_form",Handlebars.templates
["timesheet/_day_entry_form"]),function(){var a=Handlebars.template,b=Handlebars.
templates=Handlebars.templates||{};b["timesheet/_day_view_duplication"]=a(function(
a,b,c,d,e){function i(a,b){return"\n<a class='link-with-underline js-day-view-duplication' href='javascript:void(0)'>\nCopy over all rows from previous timesheet\n</a>\n"
}c=c||a.helpers;var f="",g,h=this;g=b.allow_duplicate_previous,g=c["if"].call(b,g
,{hash:{},inverse:h.noop,fn:h.program(1,i,e)});if(g||g===0)f+=g;return f+="\n",f}
)}(),Handlebars.registerPartial("timesheet.day_view_duplication",Handlebars.templates
["timesheet/_day_view_duplication"]),function(){var a=Handlebars.template,b=Handlebars
.templates=Handlebars.templates||{};b["timesheet/_day_view_week_nav"]=a(function(
a,b,c,d,e){c=c||a.helpers;var f="",g,h,i="function",j=this.escapeExpression;return f+="<a class='"
,h=c["class"],h?g=h.call(b,{hash:{}}):(g=b["class"],g=typeof g===i?g():g),f+=j(g)+" test-"
,h=c.long_label,h?g=h.call(b,{hash:{}}):(g=b.long_label,g=typeof g===i?g():g),f+=
j(g)+"' href='",h=c.href,h?g=h.call(b,{hash:{}}):(g=b.href,g=typeof g===i?g():g),
f+=j(g)+"' tabindex='1' title='",h=c.long_label,h?g=h.call(b,{hash:{}}):(g=b.long_label
,g=typeof g===i?g():g),f+=j(g)+" ",h=c.sum,h?g=h.call(b,{hash:{}}):(g=b.sum,g=typeof 
g===i?g():g),f+=j(g)+"'>\n",h=c.label,h?g=h.call(b,{hash:{}}):(g=b.label,g=typeof 
g===i?g():g),f+=j(g)+"\n<span class='js-sum-for-day'>",h=c.sum,h?g=h.call(b,{hash
:{}}):(g=b.sum,g=typeof g===i?g():g),f+=j(g)+"</span>\n</a>\n",f})}(),Handlebars.
registerPartial("timesheet.day_view_week_nav",Handlebars.templates["timesheet/_day_view_week_nav"
]),function(){var a=Handlebars.template,b=Handlebars.templates=Handlebars.templates||
{};b["timesheet/_day_view_week_nav_total"]=a(function(a,b,c,d,e){c=c||a.helpers;var f=""
,g,h,i="function",j=this.escapeExpression;return f+="<li>\n<a class='js-day' href='javascript:void(0)' id='day-view-week-nav-total' tabindex='-1'>\nTotal:\n<b class='day-view-week-nav-total'>\n"
,h=c.zero_hours,h?g=h.call(b,{hash:{}}):(g=b.zero_hours,g=typeof g===i?g():g),f+=
j(g)+"\n</b>\n</a>\n</li>\n",f})}(),Handlebars.registerPartial("timesheet.day_view_week_nav_total"
,Handlebars.templates["timesheet/_day_view_week_nav_total"]),function(){var a=Handlebars
.template,b=Handlebars.templates=Handlebars.templates||{};b["timesheet/_error"]=a
(function(a,b,c,d,e){c=c||a.helpers;var f="",g,h,i="function";f+="<h1>Houston, we've had a problem</h1>\n<p>"
,h=c.message,h?g=h.call(b,{hash:{}}):(g=b.message,g=typeof g===i?g():g);if(g||g===0
)f+=g;return f+="</p>\n<a class='button button-large button-primary js-error-reload' href='#'>Reload Page</a>\n"
,f})}(),Handlebars.registerPartial("timesheet.error",Handlebars.templates["timesheet/_error"
]),function(){var a=Handlebars.template,b=Handlebars.templates=Handlebars.templates||
{};b["timesheet/_open_through_midnight_warning"]=a(function(a,b,c,d,e){return c=c||
a.helpers,"<div class='message warning open-through-midnight'>\n<p>\nHey, it’s a new day!\n<a href='javascript:void(0)'>Go to today’s timesheet.</a>\n</p>\n</div>\n"
})}(),Handlebars.registerPartial("timesheet.open_through_midnight_warning",Handlebars
.templates["timesheet/_open_through_midnight_warning"]),function(){var a=Handlebars
.template,b=Handlebars.templates=Handlebars.templates||{};b["timesheet/_running_timer_warning"
]=a(function(a,b,c,d,e){function k(a,b){var d="",e,f;d+="\n<a class='js-backbone' href='"
,e=a.url,e=typeof e===h?e():e,d+=i(e)+"'>",f=c.spent_at,f?e=f.call(a,{hash:{}}):(
e=a.spent_at,e=typeof e===h?e():e),d+=i(e)+"</a>\n",e=a.last,e=c.unless.call(a,e,
{hash:{},inverse:j.noop,fn:j.program(2,l,b)});if(e||e===0)d+=e;return d+="\n",d}function l
(a,b){return",&nbsp;"}c=c||a.helpers;var f="",g,h="function",i=this.escapeExpression
,j=this;f+="<div class='message warning timers-left-running'>\n<p>\nTimers are still running on the following days:\n"
,g=b.timesheet_links,g=c.each.call(b,g,{hash:{},inverse:j.noop,fn:j.program(1,k,e
)});if(g||g===0)f+=g;return f+="\n</p>\n</div>\n",f})}(),Handlebars.registerPartial
("timesheet.running_timer_warning",Handlebars.templates["timesheet/_running_timer_warning"
]),function(){var a=Handlebars.template,b=Handlebars.templates=Handlebars.templates||
{};b["timesheet/_sum_for_day"]=a(function(a,b,c,d,e){function k(a,b){return"\n<div class='no-entries no-projects'>\n<div>\nD’oh! You’re not assigned to any projects so you can’t track time.\n<br>\nA project manager can add you in seconds.\n</div>\n</div>\n"
}function l(a,b){var d="",e;d+="\n",e=a.list_empty,e=c["if"].call(a,e,{hash:{},inverse
:j.program(9,p,b),fn:j.program(4,m,b)});if(e||e===0)d+=e;return d+="\n",d}function m
(a,b){var d="",e;d+="\n",e=a.is_approved,e=c["if"].call(a,e,{hash:{},inverse:j.program
(7,o,b),fn:j.program(5,n,b)});if(e||e===0)d+=e;return d+="\n",d}function n(a,b){return"\n<div class='no-entries approved-message'>\n<div>\nThis timesheet has been approved.\n</div>\n</div>\n"
}function o(a,b){var c="",d;return c+="\n<div class='no-entries js-week-not-loaded'>\n<div>\n“"
,d=a.empty_quote,d=d==null||d===!1?d:d.text,d=typeof d===h?d():d,c+=i(d)+"”\n<span>– "
,d=a.empty_quote,d=d==null||d===!1?d:d.source,d=typeof d===h?d():d,c+=i(d)+"</span>\n</div>\n</div>\n"
,c}function p(a,b){var d="",e,f;return d+="\n<div class='day-view-total js-total-for-day'>\nTotal:\n<span>"
,f=c.sum_hours,f?e=f.call(a,{hash:{}}):(e=a.sum_hours,e=typeof e===h?e():e),d+=i(
e)+"</span>\n</div>\n",d}c=c||a.helpers;var f="",g,h="function",i=this.escapeExpression
,j=this;g=b.no_projects_or_entries,g=c["if"].call(b,g,{hash:{},inverse:j.program(3
,l,e),fn:j.program(1,k,e)});if(g||g===0)f+=g;return f+="\n",f})}(),Handlebars.registerPartial
("timesheet.sum_for_day",Handlebars.templates["timesheet/_sum_for_day"]),function(
){var a=Handlebars.template,b=Handlebars.templates=Handlebars.templates||{};b["timesheet/_user_switcher"
]=a(function(a,b,c,d,e){function k(a,b){var d="",e;d+="\n \n<a class='button js-other-user-btn' href='javascript:void(0)' tabindex='1' title=\"See another user's timesheet\">\n<span class='ss-icon' title=\"See another user's timesheet\">Users</span>\n</a>\n<div class='people-dropdown pop-over pop-over-down-right js-other-user-selector-wrap'>\nSee another user's timesheet:\n<select class='js-other-user-selector' name='other-user' style='display:block;margin-top:10px;width:100%'>\n<optgroup label='Employees'>\n"
,e=a.users,e=e==null||e===!1?e:e.employees,e=c.each.call(a,e,{hash:{},inverse:j.noop
,fn:j.program(2,l,b)});if(e||e===0)d+=e;d+="\n</optgroup>\n",e=a.users,e=e==null||
e===!1?e:e.contractors,e=c["if"].call(a,e,{hash:{},inverse:j.noop,fn:j.program(4,
m,b)});if(e||e===0)d+=e;return d+="\n</select>\n</div>\n",d}function l(a,b){var c=""
,d;return c+="\n<option value='",d=a.id,d=typeof d===h?d():d,c+=i(d)+"'>\n",d=a.name
,d=typeof d===h?d():d,c+=i(d)+"\n</option>\n",c}function m(a,b){var d="",e;d+="\n<optgroup label='Contractors'>\n"
,e=a.users,e=e==null||e===!1?e:e.contractors,e=c.each.call(a,e,{hash:{},inverse:j
.noop,fn:j.program(5,n,b)});if(e||e===0)d+=e;return d+="\n</optgroup>\n",d}function n
(a,b){var c="",d;return c+="\n<option value='",d=a.id,d=typeof d===h?d():d,c+=i(d
)+"'>\n",d=a.name,d=typeof d===h?d():d,c+=i(d)+"\n</option>\n",c}c=c||a.helpers;var f=""
,g,h="function",i=this.escapeExpression,j=this;g=b.needs_user_switcher,g=c["if"].
call(b,g,{hash:{},inverse:j.noop,fn:j.program(1,k,e)});if(g||g===0)f+=g;return f+="\n"
,f})}(),Handlebars.registerPartial("timesheet.user_switcher",Handlebars.templates
["timesheet/_user_switcher"]),function(){var a=Handlebars.template,b=Handlebars.templates=
Handlebars.templates||{};b["timesheet/day"]=a(function(a,b,c,d,e){function l(a,b)
{var d="",e,f;return d+="\n<div class='users-timesheet-message ",f=c.user_status_class
,f?e=f.call(a,{hash:{}}):(e=a.user_status_class,e=typeof e===i?e():e),d+=j(e)+"'>\n<img src='"
,e=a.timesheet_user,e=e==null||e===!1?e:e.avatar,e=typeof e===i?e():e,d+=j(e)+"' width='46'>\n<h3>"
,e=a.timesheet_user,e=e==null||e===!1?e:e.name,e=typeof e===i?e():e,d+=j(e)+"'s Timesheet</h3>\nAll changes will save to this user's timesheet.\n<a href='/time'>Resume editing your own timesheet</a>\n</div>\n"
,d}function m(a,b){return"\n<a class='button jump-to-today' href='javascript:void(0)' tabindex='1' title='Jump to Today'>Today</a>\n"
}function n(a,b){return"\n<a class='button button-selected' href='javascript:void(0)' tabindex='-1' title='Jump to Today'>Today</a>\n"
}function o(a,b){var e="",f;e+="\n",f=a,f=k.invokePartial(d["timesheet.approval_buttons"
],"timesheet.approval_buttons",f,c,d);if(f||f===0)e+=f;return e+="\n",e}c=c||a.helpers
,d=d||a.partials;var f="",g,h,i="function",j=this.escapeExpression,k=this;g=b.other_user
,g=c["if"].call(b,g,{hash:{},inverse:k.noop,fn:k.program(1,l,e)});if(g||g===0)f+=
g;f+="\n<div class='flash-wrap'></div>\n<div class='timesheet-header'>\n<div class='f-left'>\n<h1 class='"
,h=c.test_classes,h?g=h.call(b,{hash:{}}):(g=b.test_classes,g=typeof g===i?g():g)
,f+=j(g)+"'>\n",h=c.day_of_week,h?g=h.call(b,{hash:{}}):(g=b.day_of_week,g=typeof 
g===i?g():g),f+=j(g)+"\n<span>",h=c.date_human_format,h?g=h.call(b,{hash:{}}):(g=
b.date_human_format,g=typeof g===i?g():g),f+=j(g)+"</span>\n",g=b,g=k.invokePartial
(d["timesheet.approval_status"],"timesheet.approval_status",g,c,d);if(g||g===0)f+=
g;f+="\n</h1>\n<h2>Timesheet for ",g=b.timesheet_user,g=g==null||g===!1?g:g.name,
g=typeof g===i?g():g,f+=j(g)+"</h2>\n</div>\n<div class='f-right'>\n<span class='loading loading-week'>\n&nbsp;\n</span>\n<div class='button-toggle'>\n<a class='button button-toggle-arrow js-jump-one-day-back' href='javascript:void(0)' tabindex='1' title='Previous Day'>\n<span class='ss-icon' title='Previous Day'>Previous</span>\n</a>\n"
,g=b.contains_today,g=c.unless.call(b,g,{hash:{},inverse:k.program(5,n,e),fn:k.program
(3,m,e)});if(g||g===0)f+=g;f+="\n<a class='button button-toggle-arrow js-jump-one-day-forward' href='javascript:void(0)' tabindex='1' title='Next Day'>\n<span class='ss-icon' title='Next Day'>Next</span>\n</a>\n</div>\n \n<a class='button js-calendar' href='javascript:void(0)' tabindex='1' title='Change Date'>\n<span class='ss-icon' title='Change Date'>Calendar</span>\n</a>\n<div class='pop-over js-day-view-calendar-wrap'></div>\n \n<div class='button-toggle'>\n<a class='button button-selected' href='javascript:void(0)' tabindex='-1' title='Day View'>Day</a>\n<a class='button js-nav-week test-nav-week' href='"
,h=c.week_view_path,h?g=h.call(b,{hash:{}}):(g=b.week_view_path,g=typeof g===i?g(
):g),f+=j(g)+"' tabindex='1' title='Week View'>Week</a>\n</div>\n",g=b,g=k.invokePartial
(d["timesheet.user_switcher"],"timesheet.user_switcher",g,c,d);if(g||g===0)f+=g;f+="\n</div>\n</div>\n<div class='day-view-table test-entries-of-user-"
,g=b.settings,g=g==null||g===!1?g:g.timesheet_owner,g=typeof g===i?g():g,f+=j(g)+"'>\n<a class='button button-primary button-new-time-entry "
,h=c.add_button_css_class,h?g=h.call(b,{hash:{}}):(g=b.add_button_css_class,g=typeof 
g===i?g():g),f+=j(g)+"' href='javascript:void(0)' tabindex='1' title='New Time Entry'>\n<span class='plus'>+</span>\n<span class='text'>New Entry</span>\n</a>\n<ul class='day-view-week-nav'></ul>\n<ul class='day-view-entry-list'></ul>\n<div class='day-view-summary'>\n"
,g=b,g=k.invokePartial(d["timesheet.sum_for_day"],"timesheet.sum_for_day",g,c,d);
if(g||g===0)f+=g;f+="\n</div>\n</div>\n<div class='timesheet-bottom'>\n<div class='day-view-duplication'></div>\n"
,g=b.settings,g=g==null||g===!1?g:g.approval_required,g=c["if"].call(b,g,{hash:{}
,inverse:k.noop,fn:k.program(7,o,e)});if(g||g===0)f+=g;return f+="\n</div>\n",f})
}(),function(){var a=Handlebars.template,b=Handlebars.templates=Handlebars.templates||
{};b["timesheet/week"]=a(function(a,b,c,d,e){function l(a,b){var c="",d;return c+="\n<div class='users-timesheet-message'>\n<img src='"
,d=a.timesheet_user,d=d==null||d===!1?d:d.avatar,d=typeof d===i?d():d,c+=j(d)+"' width='46'>\n<h3>"
,d=a.timesheet_user,d=d==null||d===!1?d:d.name,d=typeof d===i?d():d,c+=j(d)+"'s Timesheet</h3>\nAll changes will save to this user's timesheet.\n<a href='/time/week'>Resume editing your own timesheet</a>\n</div>\n"
,c}function m(a,b){return"\n<a class='button jump-to-this-week' href='javascript:void(0)' tabindex='1' title='Jump to This Week'>This Week</a>\n"
}function n(a,b){return"\n<a class='button button-selected' href='javascript:void(0)' tabindex='-1' title='Jump to This Week'>This Week</a>\n"
}function o(a,b){var d="",e;d+="\n<div class='no-entries no-projects'>\n<div>\nD’oh! You’re not assigned to any projects so you can’t track time.\n<br>\nA project manager can add you in seconds.\n</div>\n</div>\n<div class='timesheet-bottom'>\n"
,e=a.settings,e=e==null||e===!1?e:e.wants_timestamp_timers,e=c.unless.call(a,e,{hash
:{},inverse:k.noop,fn:k.program(8,p,b)});if(e||e===0)d+=e;return d+="\n</div>\n",
d}function p(a,b){return"\n<a class='button button-new-row test-button-new-row button-disabled' href='javascript:void(0)'>\n<span class='ss-plus'>Add Row</span>\n</a>\n"
}function q(a,b){var d="",e;d+="\n",e=a.list_empty,e=c["if"].call(a,e,{hash:{},inverse
:k.program(20,w,b),fn:k.program(11,r,b)});if(e||e===0)d+=e;return d+="\n",d}function r
(a,b){var d="",e;d+="\n",e=a.is_approved,e=c["if"].call(a,e,{hash:{},inverse:k.program
(14,t,b),fn:k.program(12,s,b)});if(e||e===0)d+=e;d+="\n<div class='timesheet-bottom js-week-not-loaded'>\n"
,e=a.settings,e=e==null||e===!1?e:e.wants_timestamp_timers,e=c.unless.call(a,e,{hash
:{},inverse:k.noop,fn:k.program(16,u,b)});if(e||e===0)d+=e;d+="\n",e=a.settings,e=
e==null||e===!1?e:e.approval_required,e=c["if"].call(a,e,{hash:{},inverse:k.noop,
fn:k.program(18,v,b)});if(e||e===0)d+=e;return d+="\n</div>\n",d}function s(a,b){
return"\n<div class='no-entries approved-message'>\n<div>\nThis timesheet has been approved.\n</div>\n</div>\n"
}function t(a,b){var c="",d;return c+="\n<div class='no-entries'>\n<div class='test-quote'>\n“"
,d=a.empty_quote,d=d==null||d===!1?d:d.text,d=typeof d===i?d():d,c+=j(d)+"”\n<span>– "
,d=a.empty_quote,d=d==null||d===!1?d:d.source,d=typeof d===i?d():d,c+=j(d)+"</span>\n</div>\n</div>\n"
,c}function u(a,b){var d="",e,f;return d+="\n<a class='button button-new-row test-button-new-row button-primary "
,f=c.add_button_css_class,f?e=f.call(a,{hash:{}}):(e=a.add_button_css_class,e=typeof 
e===i?e():e),d+=j(e)+"' href='javascript:void(0)'>\n<span class='ss-plus'>Add Row</span>\n</a>\n"
,d}function v(a,b){var e="",f;e+="\n",f=a,f=k.invokePartial(d["timesheet.approval_buttons"
],"timesheet.approval_buttons",f,c,d);if(f||f===0)e+=f;return e+="\n",e}function w
(a,b){var d="",e,f;d+="\n<table border='0' cellpadding='0' cellspacing='0' class='week-view-table js-week-not-loaded'>\n<thead>\n<tr>\n<td class='name'>\n</td>\n<td class='total'> </td>\n<td class='delete'> </td>\n</tr>\n</thead>\n<tfoot>\n<tr>\n<td class='name'>\n</td>\n<td class='total'>"
,f=c.total_hours,f?e=f.call(a,{hash:{}}):(e=a.total_hours,e=typeof e===i?e():e),d+=
j(e)+"</td>\n<td class='delete'> </td>\n</tr>\n</tfoot>\n<tbody></tbody>\n</table>\n<div class='timesheet-bottom js-week-not-loaded'>\n"
,e=a.settings,e=e==null||e===!1?e:e.approval_required,e=c["if"].call(a,e,{hash:{}
,inverse:k.noop,fn:k.program(21,x,b)});if(e||e===0)d+=e;return d+="\n</div>\n",d}
function x(a,b){var e="",f;e+="\n",f=a,f=k.invokePartial(d["timesheet.approval_buttons"
],"timesheet.approval_buttons",f,c,d);if(f||f===0)e+=f;return e+="\n",e}c=c||a.helpers
,d=d||a.partials;var f="",g,h,i="function",j=this.escapeExpression,k=this;f+="<div class='test-weekly-of-user-"
,g=b.settings,g=g==null||g===!1?g:g.timesheet_owner,g=typeof g===i?g():g,f+=j(g)+" week-view-wrapper' data-view-id='"
,h=c.view_id,h?g=h.call(b,{hash:{}}):(g=b.view_id,g=typeof g===i?g():g),f+=j(g)+"'>\n"
,g=b.other_user,g=c["if"].call(b,g,{hash:{},inverse:k.noop,fn:k.program(1,l,e)});
if(g||g===0)f+=g;f+="\n<div class='flash-wrap'></div>\n<div class='timesheet-header'>\n<div class='f-left'>\n<h1 class='"
,h=c.test_classes,h?g=h.call(b,{hash:{}}):(g=b.test_classes,g=typeof g===i?g():g)
,f+=j(g)+"'>\n",h=c.human_timeframe,h?g=h.call(b,{hash:{}}):(g=b.human_timeframe,
g=typeof g===i?g():g),f+=j(g)+"\n",g=b,g=k.invokePartial(d["timesheet.approval_status"
],"timesheet.approval_status",g,c,d);if(g||g===0)f+=g;f+="\n</h1>\n<h2>Timesheet for "
,g=b.timesheet_user,g=g==null||g===!1?g:g.name,g=typeof g===i?g():g,f+=j(g)+"</h2>\n</div>\n<div class='f-right'>\n<span class='loading loading-week'>\n&nbsp;\n</span>\n<div class='button-toggle'>\n<a class='button button-toggle-arrow js-jump-one-week-back' href='javascript:void(0)' tabindex='1' title='Previous Week'>\n<span class='ss-icon' title='Previous Week'>Previous</span>\n</a>\n"
,g=b.contains_today,g=c.unless.call(b,g,{hash:{},inverse:k.program(5,n,e),fn:k.program
(3,m,e)});if(g||g===0)f+=g;f+="\n<a class='button button-toggle-arrow js-jump-one-week-forward' href='javascript:void(0)' tabindex='1' title='Next Week'>\n<span class='ss-icon' title='Next Week'>Next</span>\n</a>\n</div>\n \n<a class='button js-calendar' href='javascript:void(0)' tabindex='1' title='Change Date'>\n<span class='ss-icon' title='Change Date'>Calendar</span>\n</a>\n<div class='pop-over js-week-view-calendar-wrap'></div>\n \n<div class='button-toggle'>\n<a class='button js-nav-day test-nav-day' href='"
,h=c.day_view_path,h?g=h.call(b,{hash:{}}):(g=b.day_view_path,g=typeof g===i?g():
g),f+=j(g)+"' tabindex='1' title='Day View'>Day</a>\n<a class='button button-selected' href='javascript:void(0)' tabindex='-1' title='Week View'>Week</a>\n</div>\n"
,g=b,g=k.invokePartial(d["timesheet.user_switcher"],"timesheet.user_switcher",g,c
,d);if(g||g===0)f+=g;f+="\n</div>\n</div>\n",g=b.no_projects_or_entries,g=c["if"]
.call(b,g,{hash:{},inverse:k.program(10,q,e),fn:k.program(7,o,e)});if(g||g===0)f+=
g;return f+="\n</div>\n",f})}(),function(){var a=Handlebars.template,b=Handlebars
.templates=Handlebars.templates||{};b["timesheet/week/_action_buttons"]=a(function(
a,b,c,d,e){function k(a,b){var d="",e,f;d+="\n<a class='button button-new-row test-button-new-row "
,f=c.add_button_css_class,f?e=f.call(a,{hash:{}}):(e=a.add_button_css_class,e=typeof 
e===h?e():e),d+=i(e)+"' href='javascript:void(0)' tabindex='2'>\n<span class='ss-plus'>Add Row</span>\n</a>\n \n<a class='button button-primary test-week-view-save week-view-save "
,f=c.save_button_css_class,f?e=f.call(a,{hash:{}}):(e=a.save_button_css_class,e=typeof 
e===h?e():e),d+=i(e)+"' href='javascript:void(0)' tabindex='1'>Save</a>\n",e=a.last_saved_message
,e=c["if"].call(a,e,{hash:{},inverse:j.noop,fn:j.program(2,l,b)});if(e||e===0)d+=
e;return d+="\n",d}function l(a,b){var d="",e,f;return d+="\n<span class='last-saved'>"
,f=c.last_saved_message,f?e=f.call(a,{hash:{}}):(e=a.last_saved_message,e=typeof 
e===h?e():e),d+=i(e)+"</span>\n",d}c=c||a.helpers;var f="",g,h="function",i=this.
escapeExpression,j=this;g=b.settings,g=g==null||g===!1?g:g.wants_timestamp_timers
,g=c.unless.call(b,g,{hash:{},inverse:j.noop,fn:j.program(1,k,e)});if(g||g===0)f+=
g;return f+="\n",f})}(),Handlebars.registerPartial("timesheet.week.action_buttons"
,Handlebars.templates["timesheet/week/_action_buttons"]),function(){var a=Handlebars
.template,b=Handlebars.templates=Handlebars.templates||{};b["timesheet/week/_clear_all_rows"
]=a(function(a,b,c,d,e){function i(a,b){return"\n<a class='js-clear-all-rows button button-tiny' href='javascript:void(0)'>Clear Timesheet</a>\n"
}c=c||a.helpers;var f="",g,h=this;g=b.allow_clear_all_rows,g=c["if"].call(b,g,{hash
:{},inverse:h.noop,fn:h.program(1,i,e)});if(g||g===0)f+=g;return f+="\n",f})}(),Handlebars
.registerPartial("timesheet.week.clear_all_rows",Handlebars.templates["timesheet/week/_clear_all_rows"
]),function(){var a=Handlebars.template,b=Handlebars.templates=Handlebars.templates||
{};b["timesheet/week/_compound_entry"]=a(function(a,b,c,d,e){function k(a,b){var d=""
,e,f;return d+="\n<span class='test-locked-hours'>\n",f=c.hours,f?e=f.call(a,{hash
:{}}):(e=a.hours,e=typeof e===h?e():e),d+=i(e)+"\n</span>\n<input class='input js-compound-entry' data-unique-name='"
,f=c.unique_name,f?e=f.call(a,{hash:{}}):(e=a.unique_name,e=typeof e===h?e():e),d+=
i(e)+"' type='hidden' value='",f=c.hours,f?e=f.call(a,{hash:{}}):(e=a.hours,e=typeof 
e===h?e():e),d+=i(e)+"'>\n",d}function l(a,b){var d="",e;d+="\n",e=a.is_running,e=
c["if"].call(a,e,{hash:{},inverse:j.program(6,n,b),fn:j.program(4,m,b)});if(e||e===0
)d+=e;return d+="\n",d}function m(a,b){var d="",e,f;return d+="\n<span>\n",f=c.hours
,f?e=f.call(a,{hash:{}}):(e=a.hours,e=typeof e===h?e():e),d+=i(e)+"\n</span>\n<input class='input js-compound-entry' data-unique-name='"
,f=c.unique_name,f?e=f.call(a,{hash:{}}):(e=a.unique_name,e=typeof e===h?e():e),d+=
i(e)+"' type='hidden' value='",f=c.hours,f?e=f.call(a,{hash:{}}):(e=a.hours,e=typeof 
e===h?e():e),d+=i(e)+"'>\n",d}function n(a,b){var d="",e,f;return d+="\n<input class='input js-compound-entry' data-unique-name='"
,f=c.unique_name,f?e=f.call(a,{hash:{}}):(e=a.unique_name,e=typeof e===h?e():e),d+=
i(e)+"' tabindex='1' type='text' value='",f=c.hours,f?e=f.call(a,{hash:{}}):(e=a.
hours,e=typeof e===h?e():e),d+=i(e)+"'>\n",d}c=c||a.helpers;var f="",g,h="function"
,i=this.escapeExpression,j=this;g=b.is_locked,g=c["if"].call(b,g,{hash:{},inverse
:j.program(3,l,e),fn:j.program(1,k,e)});if(g||g===0)f+=g;return f+="\n",f})}(),Handlebars
.registerPartial("timesheet.week.compound_entry",Handlebars.templates["timesheet/week/_compound_entry"
]),function(){var a=Handlebars.template,b=Handlebars.templates=Handlebars.templates||
{};b["timesheet/week/_day_nav"]=a(function(a,b,c,d,e){c=c||a.helpers;var f="",g,h
,i="function",j=this.escapeExpression;return f+="<a class='js-backbone test-",h=c
.long_label,h?g=h.call(b,{hash:{}}):(g=b.long_label,g=typeof g===i?g():g),f+=j(g)+" "
,h=c["class"],h?g=h.call(b,{hash:{}}):(g=b["class"],g=typeof g===i?g():g),f+=j(g)+"' href='"
,h=c.href,h?g=h.call(b,{hash:{}}):(g=b.href,g=typeof g===i?g():g),f+=j(g)+"' tabindex='1' title='"
,h=c.long_label,h?g=h.call(b,{hash:{}}):(g=b.long_label,g=typeof g===i?g():g),f+=
j(g)+"'>\n",h=c.day,h?g=h.call(b,{hash:{}}):(g=b.day,g=typeof g===i?g():g),f+=j(g
)+"\n<span>",h=c.date,h?g=h.call(b,{hash:{}}):(g=b.date,g=typeof g===i?g():g),f+=
j(g)+"</span>\n</a>\n",f})}(),Handlebars.registerPartial("timesheet.week.day_nav"
,Handlebars.templates["timesheet/week/_day_nav"]),function(){var a=Handlebars.template
,b=Handlebars.templates=Handlebars.templates||{};b["timesheet/week/_day_total"]=a
(function(a,b,c,d,e){c=c||a.helpers;var f="",g,h,i="function",j=this.escapeExpression
;return h=c.hours,h?g=h.call(b,{hash:{}}):(g=b.hours,g=typeof g===i?g():g),f+=j(g
)+"\n",f})}(),Handlebars.registerPartial("timesheet.week.day_total",Handlebars.templates
["timesheet/week/_day_total"]),function(){var a=Handlebars.template,b=Handlebars.
templates=Handlebars.templates||{};b["timesheet/week/_open_through_new_week_warning"
]=a(function(a,b,c,d,e){return c=c||a.helpers,"<div class='message warning open-through-new-week'>\n<p>\nHey, it’s a new week!\n<a href='javascript:void(0)'>Go to this week’s timesheet.</a>\n</p>\n</div>\n"
})}(),Handlebars.registerPartial("timesheet.week.open_through_new_week_warning",Handlebars
.templates["timesheet/week/_open_through_new_week_warning"]),function(){var a=Handlebars
.template,b=Handlebars.templates=Handlebars.templates||{};b["timesheet/week/_row"
]=a(function(a,b,c,d,e){function m(a,b){return"\n<div class='pop-over-wrap'>\n<a class='js-remove-row week-row-delete button button-tiny button-no-border' href='javascript:void(0)' rel='#pop-over-week-delete' tabindex='1' title='Delete Row'>\n<span class='ss-icon' title='Delete Row'>Delete</span>\n</a>\n<div class='pop-over pop-over-down-right pop-over-submit pop-over-week-delete'>\nRemove row from timesheet?\n<div>\n<a class='button button-small button-red js-confirm-delete-entry js-bubble' href='#'>Delete</a>\n<a class='button button-small button-cancel js-cancel-delete-entry js-bubble' href='#'>Cancel</a>\n</div>\n</div>\n</div>\n"
}function n(a,b){var d="",e,f;return d+="\n<a class='js-locked-tip button button-tiny button-no-border button-not-active harvest-tooltip-center' title='"
,f=c.tooltip_locked_explanation,e=f?f.call(a,a,{hash:{}}):i.call(a,"tooltip_locked_explanation"
,a,{hash:{}}),d+=j(e)+"'>\n<span class='ss-icon'>Lock</span>\n</a>\n",d}c=c||a.helpers
;var f="",g,h,i=c.helperMissing,j=this.escapeExpression,k="function",l=this;f+="<td class='name'>\n<div class='project-client'>\n<span class='project'>"
,h=c.project_name,h?g=h.call(b,{hash:{}}):(g=b.project_name,g=typeof g===k?g():g)
,f+=j(g)+"</span>\n<span class='client'>(",h=c.client_name,h?g=h.call(b,{hash:{}}
):(g=b.client_name,g=typeof g===k?g():g),f+=j(g)+")</span>\n</div>\n<div class='task'>"
,h=c.task_name,h?g=h.call(b,{hash:{}}):(g=b.task_name,g=typeof g===k?g():g),f+=j(
g)+"</div>\n</td>\n<td class='delete js-end-of-week-row'>\n",g=b.can_delete,g=c["if"
].call(b,g,{hash:{},inverse:l.noop,fn:l.program(1,m,e)});if(g||g===0)f+=g;f+="\n"
,g=b.is_locked,g=c["if"].call(b,g,{hash:{},inverse:l.noop,fn:l.program(3,n,e)});if(
g||g===0)f+=g;return f+="\n</td>\n",f})}(),Handlebars.registerPartial("timesheet.week.row"
,Handlebars.templates["timesheet/week/_row"]),function(){var a=Handlebars.template
,b=Handlebars.templates=Handlebars.templates||{};b["timesheet/week/_row_form"]=a(
function(a,b,c,d,e){c=c||a.helpers;var f="",g,h,i="function",j=this.escapeExpression
;return f+="<h1>Add Row</h1>\n<form class='new-form add-row-form' data-parent-view-id='"
,h=c.parent_view_id,h?g=h.call(b,{hash:{}}):(g=b.parent_view_id,g=typeof g===i?g(
):g),f+=j(g)+"'>\n<div class='nf-field'>\n<label for='projects'>Project / Task</label>\n<select class='js-project' name='projects'>\n"
,h=c.project_option_tags,h?g=h.call(b,{hash:{}}):(g=b.project_option_tags,g=typeof 
g===i?g():g),f+=j(g)+"\n</select>\n</div>\n<div class='nf-field'>\n<label for='tasks' style='display:none'>Tasks</label>\n<select class='js-tasks' name='tasks'>\n"
,h=c.task_option_tags,h?g=h.call(b,{hash:{}}):(g=b.task_option_tags,g=typeof g===
i?g():g),f+=j(g)+"\n</select>\n</div>\n<div class='nf-submit'>\n<input class='button button-large button-primary js-save' type='submit' value='Add Row'>\n<a class='button button-large button-cancel js-cancel' href='#'>Cancel</a>\n</div>\n</form>\n"
,f})}(),Handlebars.registerPartial("timesheet.week.row_form",Handlebars.templates
["timesheet/week/_row_form"]),function(){var a=Handlebars.template,b=Handlebars.templates=
Handlebars.templates||{};b["timesheet/week/_row_total"]=a(function(a,b,c,d,e){c=c||
a.helpers;var f="",g,h,i="function",j=this.escapeExpression;return h=c.total_hours
,h?g=h.call(b,{hash:{}}):(g=b.total_hours,g=typeof g===i?g():g),f+=j(g)+"\n",f})}
(),Handlebars.registerPartial("timesheet.week.row_total",Handlebars.templates["timesheet/week/_row_total"
]);var __bind=function(a,b){return function(){return a.apply(b,arguments)}};this.
SimpleModal=function(){function a(){this.clean_up_container=__bind(this.clean_up_container
,this)}return a.prototype.allow_modal_to_close=!0,a.prototype.show_modal=function(
a,b){var c=this;return a==null&&(a=""),this.modal||this.set_up_overlay(),this.container&&
this.clean_up_container(),this.modal.on("liszt:hiding_dropdown",function(){return c
.allow_modal_to_close=!1,setTimeout(function(){return c.allow_modal_to_close=!0},1
)}),this.modal.on("keyup",function(a){if(a.keyCode===27&&c.allow_modal_to_close)return c
.hide_modal()}),Harvest.transition_end(this.modal,b),this.modal.height(),this.modal
.removeClass("hidden").addClass("active"),this.switch_modal_content(a)},a.prototype
.switch_modal_content=function(a){return this.container=$("<div />",{"class":"modal-container"
}),this.container.html(a),this.modal.append(this.container)},a.prototype.set_up_overlay=
function(){return this.modal=$("<div />",{"class":"modal-overlay"}),$("body").append
(this.modal)},a.prototype.clean_up_container=function(){return this.container.remove
()},a.prototype.hide_modal=function(){return this.modal.removeClass("active").addClass
("hidden"),this.clean_up_container(),this.modal.off("keyup"),this.modal.off("liszt:hiding_dropdown"
)},a}(),Harvest.SimpleModal=new SimpleModal;