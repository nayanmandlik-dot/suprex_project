(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();function ly(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Rx={exports:{}},gu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cy=Symbol.for("react.transitional.element"),uy=Symbol.for("react.fragment");function Cx(t,e,n){var i=null;if(n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),"key"in e){n={};for(var a in e)a!=="key"&&(n[a]=e[a])}else n=e;return e=n.ref,{$$typeof:cy,type:t,key:i,ref:e!==void 0?e:null,props:n}}gu.Fragment=uy;gu.jsx=Cx;gu.jsxs=Cx;Rx.exports=gu;var E=Rx.exports,Dx={exports:{}},Pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var np=Symbol.for("react.transitional.element"),fy=Symbol.for("react.portal"),dy=Symbol.for("react.fragment"),hy=Symbol.for("react.strict_mode"),py=Symbol.for("react.profiler"),my=Symbol.for("react.consumer"),gy=Symbol.for("react.context"),xy=Symbol.for("react.forward_ref"),vy=Symbol.for("react.suspense"),_y=Symbol.for("react.memo"),Nx=Symbol.for("react.lazy"),Sy=Symbol.for("react.activity"),Pm=Symbol.iterator;function yy(t){return t===null||typeof t!="object"?null:(t=Pm&&t[Pm]||t["@@iterator"],typeof t=="function"?t:null)}var Ux={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lx=Object.assign,Ox={};function Is(t,e,n){this.props=t,this.context=e,this.refs=Ox,this.updater=n||Ux}Is.prototype.isReactComponent={};Is.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Is.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Px(){}Px.prototype=Is.prototype;function ip(t,e,n){this.props=t,this.context=e,this.refs=Ox,this.updater=n||Ux}var ap=ip.prototype=new Px;ap.constructor=ip;Lx(ap,Is.prototype);ap.isPureReactComponent=!0;var Fm=Array.isArray;function fd(){}var bt={H:null,A:null,T:null,S:null},Fx=Object.prototype.hasOwnProperty;function rp(t,e,n){var i=n.ref;return{$$typeof:np,type:t,key:e,ref:i!==void 0?i:null,props:n}}function My(t,e){return rp(t.type,e,t.props)}function sp(t){return typeof t=="object"&&t!==null&&t.$$typeof===np}function by(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Bm=/\/+/g;function Xu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?by(""+t.key):e.toString(36)}function Ey(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(fd,fd):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function $r(t,e,n,i,a){var r=typeof t;(r==="undefined"||r==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(r){case"bigint":case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case np:case fy:s=!0;break;case Nx:return s=t._init,$r(s(t._payload),e,n,i,a)}}if(s)return a=a(t),s=i===""?"."+Xu(t,0):i,Fm(a)?(n="",s!=null&&(n=s.replace(Bm,"$&/")+"/"),$r(a,e,n,"",function(c){return c})):a!=null&&(sp(a)&&(a=My(a,n+(a.key==null||t&&t.key===a.key?"":(""+a.key).replace(Bm,"$&/")+"/")+s)),e.push(a)),1;s=0;var o=i===""?".":i+":";if(Fm(t))for(var l=0;l<t.length;l++)i=t[l],r=o+Xu(i,l),s+=$r(i,e,n,r,a);else if(l=yy(t),typeof l=="function")for(t=l.call(t),l=0;!(i=t.next()).done;)i=i.value,r=o+Xu(i,l++),s+=$r(i,e,n,r,a);else if(r==="object"){if(typeof t.then=="function")return $r(Ey(t),e,n,i,a);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return s}function _l(t,e,n){if(t==null)return t;var i=[],a=0;return $r(t,i,"","",function(r){return e.call(n,r,a++)}),i}function Ty(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Im=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ay={map:_l,forEach:function(t,e,n){_l(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return _l(t,function(){e++}),e},toArray:function(t){return _l(t,function(e){return e})||[]},only:function(t){if(!sp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Pe.Activity=Sy;Pe.Children=Ay;Pe.Component=Is;Pe.Fragment=dy;Pe.Profiler=py;Pe.PureComponent=ip;Pe.StrictMode=hy;Pe.Suspense=vy;Pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=bt;Pe.__COMPILER_RUNTIME={__proto__:null,c:function(t){return bt.H.useMemoCache(t)}};Pe.cache=function(t){return function(){return t.apply(null,arguments)}};Pe.cacheSignal=function(){return null};Pe.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var i=Lx({},t.props),a=t.key;if(e!=null)for(r in e.key!==void 0&&(a=""+e.key),e)!Fx.call(e,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&e.ref===void 0||(i[r]=e[r]);var r=arguments.length-2;if(r===1)i.children=n;else if(1<r){for(var s=Array(r),o=0;o<r;o++)s[o]=arguments[o+2];i.children=s}return rp(t.type,a,i)};Pe.createContext=function(t){return t={$$typeof:gy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:my,_context:t},t};Pe.createElement=function(t,e,n){var i,a={},r=null;if(e!=null)for(i in e.key!==void 0&&(r=""+e.key),e)Fx.call(e,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=e[i]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];a.children=o}if(t&&t.defaultProps)for(i in s=t.defaultProps,s)a[i]===void 0&&(a[i]=s[i]);return rp(t,r,a)};Pe.createRef=function(){return{current:null}};Pe.forwardRef=function(t){return{$$typeof:xy,render:t}};Pe.isValidElement=sp;Pe.lazy=function(t){return{$$typeof:Nx,_payload:{_status:-1,_result:t},_init:Ty}};Pe.memo=function(t,e){return{$$typeof:_y,type:t,compare:e===void 0?null:e}};Pe.startTransition=function(t){var e=bt.T,n={};bt.T=n;try{var i=t(),a=bt.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(fd,Im)}catch(r){Im(r)}finally{e!==null&&n.types!==null&&(e.types=n.types),bt.T=e}};Pe.unstable_useCacheRefresh=function(){return bt.H.useCacheRefresh()};Pe.use=function(t){return bt.H.use(t)};Pe.useActionState=function(t,e,n){return bt.H.useActionState(t,e,n)};Pe.useCallback=function(t,e){return bt.H.useCallback(t,e)};Pe.useContext=function(t){return bt.H.useContext(t)};Pe.useDebugValue=function(){};Pe.useDeferredValue=function(t,e){return bt.H.useDeferredValue(t,e)};Pe.useEffect=function(t,e){return bt.H.useEffect(t,e)};Pe.useEffectEvent=function(t){return bt.H.useEffectEvent(t)};Pe.useId=function(){return bt.H.useId()};Pe.useImperativeHandle=function(t,e,n){return bt.H.useImperativeHandle(t,e,n)};Pe.useInsertionEffect=function(t,e){return bt.H.useInsertionEffect(t,e)};Pe.useLayoutEffect=function(t,e){return bt.H.useLayoutEffect(t,e)};Pe.useMemo=function(t,e){return bt.H.useMemo(t,e)};Pe.useOptimistic=function(t,e){return bt.H.useOptimistic(t,e)};Pe.useReducer=function(t,e,n){return bt.H.useReducer(t,e,n)};Pe.useRef=function(t){return bt.H.useRef(t)};Pe.useState=function(t){return bt.H.useState(t)};Pe.useSyncExternalStore=function(t,e,n){return bt.H.useSyncExternalStore(t,e,n)};Pe.useTransition=function(){return bt.H.useTransition()};Pe.version="19.2.5";Dx.exports=Pe;var k=Dx.exports;const mr=ly(k);var Bx={exports:{}},xu={},Ix={exports:{}},zx={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,O){var j=U.length;U.push(O);e:for(;0<j;){var $=j-1>>>1,ie=U[$];if(0<a(ie,O))U[$]=O,U[j]=ie,j=$;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var O=U[0],j=U.pop();if(j!==O){U[0]=j;e:for(var $=0,ie=U.length,_e=ie>>>1;$<_e;){var Me=2*($+1)-1,Ve=U[Me],We=Me+1,Ne=U[We];if(0>a(Ve,j))We<ie&&0>a(Ne,Ve)?(U[$]=Ne,U[We]=j,$=We):(U[$]=Ve,U[Me]=j,$=Me);else if(We<ie&&0>a(Ne,j))U[$]=Ne,U[We]=j,$=We;else break e}}return O}function a(U,O){var j=U.sortIndex-O.sortIndex;return j!==0?j:U.id-O.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var r=performance;t.unstable_now=function(){return r.now()}}else{var s=Date,o=s.now();t.unstable_now=function(){return s.now()-o}}var l=[],c=[],d=1,h=null,u=3,p=!1,x=!1,M=!1,m=!1,f=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;function y(U){for(var O=n(c);O!==null;){if(O.callback===null)i(c);else if(O.startTime<=U)i(c),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(c)}}function C(U){if(M=!1,y(U),!x)if(n(l)!==null)x=!0,A||(A=!0,I());else{var O=n(c);O!==null&&P(C,O.startTime-U)}}var A=!1,R=-1,S=5,w=-1;function N(){return m?!0:!(t.unstable_now()-w<S)}function D(){if(m=!1,A){var U=t.unstable_now();w=U;var O=!0;try{e:{x=!1,M&&(M=!1,g(R),R=-1),p=!0;var j=u;try{t:{for(y(U),h=n(l);h!==null&&!(h.expirationTime>U&&N());){var $=h.callback;if(typeof $=="function"){h.callback=null,u=h.priorityLevel;var ie=$(h.expirationTime<=U);if(U=t.unstable_now(),typeof ie=="function"){h.callback=ie,y(U),O=!0;break t}h===n(l)&&i(l),y(U)}else i(l);h=n(l)}if(h!==null)O=!0;else{var _e=n(c);_e!==null&&P(C,_e.startTime-U),O=!1}}break e}finally{h=null,u=j,p=!1}O=void 0}}finally{O?I():A=!1}}}var I;if(typeof v=="function")I=function(){v(D)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,q=W.port2;W.port1.onmessage=D,I=function(){q.postMessage(null)}}else I=function(){f(D,0)};function P(U,O){R=f(function(){U(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_next=function(U){switch(u){case 1:case 2:case 3:var O=3;break;default:O=u}var j=u;u=O;try{return U()}finally{u=j}},t.unstable_requestPaint=function(){m=!0},t.unstable_runWithPriority=function(U,O){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var j=u;u=U;try{return O()}finally{u=j}},t.unstable_scheduleCallback=function(U,O,j){var $=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?$+j:$):j=$,U){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=j+ie,U={id:d++,callback:O,priorityLevel:U,startTime:j,expirationTime:ie,sortIndex:-1},j>$?(U.sortIndex=j,e(c,U),n(l)===null&&U===n(c)&&(M?(g(R),R=-1):M=!0,P(C,j-$))):(U.sortIndex=ie,e(l,U),x||p||(x=!0,A||(A=!0,I()))),U},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(U){var O=u;return function(){var j=u;u=O;try{return U.apply(this,arguments)}finally{u=j}}}})(zx);Ix.exports=zx;var wy=Ix.exports,Hx={exports:{}},gn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ry=k;function Gx(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function va(){}var mn={d:{f:va,r:function(){throw Error(Gx(522))},D:va,C:va,L:va,m:va,X:va,S:va,M:va},p:0,findDOMNode:null},Cy=Symbol.for("react.portal");function Dy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cy,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}var So=Ry.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function vu(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}gn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=mn;gn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(Gx(299));return Dy(t,e,null,n)};gn.flushSync=function(t){var e=So.T,n=mn.p;try{if(So.T=null,mn.p=2,t)return t()}finally{So.T=e,mn.p=n,mn.d.f()}};gn.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,mn.d.C(t,e))};gn.prefetchDNS=function(t){typeof t=="string"&&mn.d.D(t)};gn.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var n=e.as,i=vu(n,e.crossOrigin),a=typeof e.integrity=="string"?e.integrity:void 0,r=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;n==="style"?mn.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:r}):n==="script"&&mn.d.X(t,{crossOrigin:i,integrity:a,fetchPriority:r,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};gn.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var n=vu(e.as,e.crossOrigin);mn.d.M(t,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&mn.d.M(t)};gn.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var n=e.as,i=vu(n,e.crossOrigin);mn.d.L(t,n,{crossOrigin:i,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};gn.preloadModule=function(t,e){if(typeof t=="string")if(e){var n=vu(e.as,e.crossOrigin);mn.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else mn.d.m(t)};gn.requestFormReset=function(t){mn.d.r(t)};gn.unstable_batchedUpdates=function(t,e){return t(e)};gn.useFormState=function(t,e,n){return So.H.useFormState(t,e,n)};gn.useFormStatus=function(){return So.H.useHostTransitionStatus()};gn.version="19.2.5";function Vx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vx)}catch(t){console.error(t)}}Vx(),Hx.exports=gn;var Ny=Hx.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yt=wy,kx=k,Uy=Ny;function Q(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Xx(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Qo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function jx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wx(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zm(t){if(Qo(t)!==t)throw Error(Q(188))}function Ly(t){var e=t.alternate;if(!e){if(e=Qo(t),e===null)throw Error(Q(188));return e!==t?null:t}for(var n=t,i=e;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return zm(a),t;if(r===i)return zm(a),e;r=r.sibling}throw Error(Q(188))}if(n.return!==i.return)n=a,i=r;else{for(var s=!1,o=a.child;o;){if(o===n){s=!0,n=a,i=r;break}if(o===i){s=!0,i=a,n=r;break}o=o.sibling}if(!s){for(o=r.child;o;){if(o===n){s=!0,n=r,i=a;break}if(o===i){s=!0,i=r,n=a;break}o=o.sibling}if(!s)throw Error(Q(189))}}if(n.alternate!==i)throw Error(Q(190))}if(n.tag!==3)throw Error(Q(188));return n.stateNode.current===n?t:e}function qx(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=qx(t),e!==null)return e;t=t.sibling}return null}var Et=Object.assign,Oy=Symbol.for("react.element"),Sl=Symbol.for("react.transitional.element"),fo=Symbol.for("react.portal"),ns=Symbol.for("react.fragment"),Yx=Symbol.for("react.strict_mode"),dd=Symbol.for("react.profiler"),Zx=Symbol.for("react.consumer"),Yi=Symbol.for("react.context"),op=Symbol.for("react.forward_ref"),hd=Symbol.for("react.suspense"),pd=Symbol.for("react.suspense_list"),lp=Symbol.for("react.memo"),Ta=Symbol.for("react.lazy"),md=Symbol.for("react.activity"),Py=Symbol.for("react.memo_cache_sentinel"),Hm=Symbol.iterator;function Ks(t){return t===null||typeof t!="object"?null:(t=Hm&&t[Hm]||t["@@iterator"],typeof t=="function"?t:null)}var Fy=Symbol.for("react.client.reference");function gd(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Fy?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ns:return"Fragment";case dd:return"Profiler";case Yx:return"StrictMode";case hd:return"Suspense";case pd:return"SuspenseList";case md:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case fo:return"Portal";case Yi:return t.displayName||"Context";case Zx:return(t._context.displayName||"Context")+".Consumer";case op:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case lp:return e=t.displayName||null,e!==null?e:gd(t.type)||"Memo";case Ta:e=t._payload,t=t._init;try{return gd(t(e))}catch{}}return null}var ho=Array.isArray,De=kx.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,it=Uy.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,gr={pending:!1,data:null,method:null,action:null},xd=[],is=-1;function Ui(t){return{current:t}}function en(t){0>is||(t.current=xd[is],xd[is]=null,is--)}function _t(t,e){is++,xd[is]=t.current,t.current=e}var Ai=Ui(null),Oo=Ui(null),Ia=Ui(null),Dc=Ui(null);function Nc(t,e){switch(_t(Ia,e),_t(Oo,t),_t(Ai,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?W0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=W0(e),t=m1(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}en(Ai),_t(Ai,t)}function bs(){en(Ai),en(Oo),en(Ia)}function vd(t){t.memoizedState!==null&&_t(Dc,t);var e=Ai.current,n=m1(e,t.type);e!==n&&(_t(Oo,t),_t(Ai,n))}function Uc(t){Oo.current===t&&(en(Ai),en(Oo)),Dc.current===t&&(en(Dc),jo._currentValue=gr)}var ju,Gm;function sr(t){if(ju===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ju=e&&e[1]||"",Gm=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ju+t+Gm}var Wu=!1;function qu(t,e){if(!t||Wu)return"";Wu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(p){var u=p}Reflect.construct(t,[],h)}else{try{h.call()}catch(p){u=p}t.call(h.prototype)}}else{try{throw Error()}catch(p){u=p}(h=t())&&typeof h.catch=="function"&&h.catch(function(){})}}catch(p){if(p&&u&&typeof p.stack=="string")return[p.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),s=r[0],o=r[1];if(s&&o){var l=s.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var d=`
`+l[i].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=i&&0<=a);break}}}finally{Wu=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?sr(n):""}function By(t,e){switch(t.tag){case 26:case 27:case 5:return sr(t.type);case 16:return sr("Lazy");case 13:return t.child!==e&&e!==null?sr("Suspense Fallback"):sr("Suspense");case 19:return sr("SuspenseList");case 0:case 15:return qu(t.type,!1);case 11:return qu(t.type.render,!1);case 1:return qu(t.type,!0);case 31:return sr("Activity");default:return""}}function Vm(t){try{var e="",n=null;do e+=By(t,n),n=t,t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var _d=Object.prototype.hasOwnProperty,cp=Yt.unstable_scheduleCallback,Yu=Yt.unstable_cancelCallback,Iy=Yt.unstable_shouldYield,zy=Yt.unstable_requestPaint,Fn=Yt.unstable_now,Hy=Yt.unstable_getCurrentPriorityLevel,Kx=Yt.unstable_ImmediatePriority,Qx=Yt.unstable_UserBlockingPriority,Lc=Yt.unstable_NormalPriority,Gy=Yt.unstable_LowPriority,Jx=Yt.unstable_IdlePriority,Vy=Yt.log,ky=Yt.unstable_setDisableYieldValue,Jo=null,Bn=null;function Ua(t){if(typeof Vy=="function"&&ky(t),Bn&&typeof Bn.setStrictMode=="function")try{Bn.setStrictMode(Jo,t)}catch{}}var In=Math.clz32?Math.clz32:Wy,Xy=Math.log,jy=Math.LN2;function Wy(t){return t>>>=0,t===0?32:31-(Xy(t)/jy|0)|0}var yl=256,Ml=262144,bl=4194304;function or(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _u(t,e,n){var i=t.pendingLanes;if(i===0)return 0;var a=0,r=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var o=i&134217727;return o!==0?(i=o&~r,i!==0?a=or(i):(s&=o,s!==0?a=or(s):n||(n=o&~t,n!==0&&(a=or(n))))):(o=i&~r,o!==0?a=or(o):s!==0?a=or(s):n||(n=i&~t,n!==0&&(a=or(n)))),a===0?0:e!==0&&e!==a&&!(e&r)&&(r=a&-a,n=e&-e,r>=n||r===32&&(n&4194048)!==0)?e:a}function $o(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function qy(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $x(){var t=bl;return bl<<=1,!(bl&62914560)&&(bl=4194304),t}function Zu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function el(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Yy(t,e,n,i,a,r){var s=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var o=t.entanglements,l=t.expirationTimes,c=t.hiddenUpdates;for(n=s&~n;0<n;){var d=31-In(n),h=1<<d;o[d]=0,l[d]=-1;var u=c[d];if(u!==null)for(c[d]=null,d=0;d<u.length;d++){var p=u[d];p!==null&&(p.lane&=-536870913)}n&=~h}i!==0&&ev(t,i,0),r!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=r&~(s&~e))}function ev(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-In(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|n&261930}function tv(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-In(n),a=1<<i;a&e|t[i]&e&&(t[i]|=e),n&=~a}}function nv(t,e){var n=e&-e;return n=n&42?1:up(n),n&(t.suspendedLanes|e)?0:n}function up(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function fp(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function iv(){var t=it.p;return t!==0?t:(t=window.event,t===void 0?32:A1(t.type))}function km(t,e){var n=it.p;try{return it.p=t,e()}finally{it.p=n}}var Ja=Math.random().toString(36).slice(2),nn="__reactFiber$"+Ja,Tn="__reactProps$"+Ja,zs="__reactContainer$"+Ja,Sd="__reactEvents$"+Ja,Zy="__reactListeners$"+Ja,Ky="__reactHandles$"+Ja,Xm="__reactResources$"+Ja,tl="__reactMarker$"+Ja;function dp(t){delete t[nn],delete t[Tn],delete t[Sd],delete t[Zy],delete t[Ky]}function as(t){var e=t[nn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[zs]||n[nn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Q0(t);t!==null;){if(n=t[nn])return n;t=Q0(t)}return e}t=n,n=t.parentNode}return null}function Hs(t){if(t=t[nn]||t[zs]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function po(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(Q(33))}function ps(t){var e=t[Xm];return e||(e=t[Xm]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function $t(t){t[tl]=!0}var av=new Set,rv={};function Cr(t,e){Es(t,e),Es(t+"Capture",e)}function Es(t,e){for(rv[t]=e,t=0;t<e.length;t++)av.add(e[t])}var Qy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),jm={},Wm={};function Jy(t){return _d.call(Wm,t)?!0:_d.call(jm,t)?!1:Qy.test(t)?Wm[t]=!0:(jm[t]=!0,!1)}function oc(t,e,n){if(Jy(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function El(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Pi(t,e,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+i)}}function Wn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function sv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $y(t,e,n){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,r=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(s){n=""+s,r.call(this,s)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function yd(t){if(!t._valueTracker){var e=sv(t)?"checked":"value";t._valueTracker=$y(t,e,""+t[e])}}function ov(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=sv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Oc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var e2=/[\n"\\]/g;function Kn(t){return t.replace(e2,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Md(t,e,n,i,a,r,s,o){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Wn(e)):t.value!==""+Wn(e)&&(t.value=""+Wn(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?bd(t,s,Wn(e)):n!=null?bd(t,s,Wn(n)):i!=null&&t.removeAttribute("value"),a==null&&r!=null&&(t.defaultChecked=!!r),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+Wn(o):t.removeAttribute("name")}function lv(t,e,n,i,a,r,s,o){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.type=r),e!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||e!=null)){yd(t);return}n=n!=null?""+Wn(n):"",e=e!=null?""+Wn(e):n,o||e===t.value||(t.value=e),t.defaultValue=e}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=o?t.checked:!!i,t.defaultChecked=!!i,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s),yd(t)}function bd(t,e,n){e==="number"&&Oc(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function ms(t,e,n,i){if(t=t.options,e){e={};for(var a=0;a<n.length;a++)e["$"+n[a]]=!0;for(n=0;n<t.length;n++)a=e.hasOwnProperty("$"+t[n].value),t[n].selected!==a&&(t[n].selected=a),a&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Wn(n),e=null,a=0;a<t.length;a++){if(t[a].value===n){t[a].selected=!0,i&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function cv(t,e,n){if(e!=null&&(e=""+Wn(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Wn(n):""}function uv(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(Q(92));if(ho(i)){if(1<i.length)throw Error(Q(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=Wn(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i),yd(t)}function Ts(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var t2=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qm(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||t2.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function fv(t,e,n){if(e!=null&&typeof e!="object")throw Error(Q(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var a in e)i=e[a],e.hasOwnProperty(a)&&n[a]!==i&&qm(t,a,i)}else for(var r in e)e.hasOwnProperty(r)&&qm(t,r,e[r])}function hp(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var n2=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),i2=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function lc(t){return i2.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Zi(){}var Ed=null;function pp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rs=null,gs=null;function Ym(t){var e=Hs(t);if(e&&(t=e.stateNode)){var n=t[Tn]||null;e:switch(t=e.stateNode,e.type){case"input":if(Md(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Kn(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var a=i[Tn]||null;if(!a)throw Error(Q(90));Md(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&ov(i)}break e;case"textarea":cv(t,n.value,n.defaultValue);break e;case"select":e=n.value,e!=null&&ms(t,!!n.multiple,e,!1)}}}var Ku=!1;function dv(t,e,n){if(Ku)return t(e,n);Ku=!0;try{var i=t(e);return i}finally{if(Ku=!1,(rs!==null||gs!==null)&&(Nu(),rs&&(e=rs,t=gs,gs=rs=null,Ym(e),t)))for(e=0;e<t.length;e++)Ym(t[e])}}function Po(t,e){var n=t.stateNode;if(n===null)return null;var i=n[Tn]||null;if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Q(231,e,typeof n));return n}var aa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Td=!1;if(aa)try{var Qs={};Object.defineProperty(Qs,"passive",{get:function(){Td=!0}}),window.addEventListener("test",Qs,Qs),window.removeEventListener("test",Qs,Qs)}catch{Td=!1}var La=null,mp=null,cc=null;function hv(){if(cc)return cc;var t,e=mp,n=e.length,i,a="value"in La?La.value:La.textContent,r=a.length;for(t=0;t<n&&e[t]===a[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===a[r-i];i++);return cc=a.slice(t,1<i?1-i:void 0)}function uc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Tl(){return!0}function Zm(){return!1}function An(t){function e(n,i,a,r,s){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Tl:Zm,this.isPropagationStopped=Zm,this}return Et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Tl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Tl)},persist:function(){},isPersistent:Tl}),e}var Dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Su=An(Dr),nl=Et({},Dr,{view:0,detail:0}),a2=An(nl),Qu,Ju,Js,yu=Et({},nl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Js&&(Js&&t.type==="mousemove"?(Qu=t.screenX-Js.screenX,Ju=t.screenY-Js.screenY):Ju=Qu=0,Js=t),Qu)},movementY:function(t){return"movementY"in t?t.movementY:Ju}}),Km=An(yu),r2=Et({},yu,{dataTransfer:0}),s2=An(r2),o2=Et({},nl,{relatedTarget:0}),$u=An(o2),l2=Et({},Dr,{animationName:0,elapsedTime:0,pseudoElement:0}),c2=An(l2),u2=Et({},Dr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),f2=An(u2),d2=Et({},Dr,{data:0}),Qm=An(d2),h2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},p2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},m2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function g2(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=m2[t])?!!e[t]:!1}function gp(){return g2}var x2=Et({},nl,{key:function(t){if(t.key){var e=h2[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=uc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?p2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gp,charCode:function(t){return t.type==="keypress"?uc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?uc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),v2=An(x2),_2=Et({},yu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jm=An(_2),S2=Et({},nl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gp}),y2=An(S2),M2=Et({},Dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),b2=An(M2),E2=Et({},yu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),T2=An(E2),A2=Et({},Dr,{newState:0,oldState:0}),w2=An(A2),R2=[9,13,27,32],xp=aa&&"CompositionEvent"in window,yo=null;aa&&"documentMode"in document&&(yo=document.documentMode);var C2=aa&&"TextEvent"in window&&!yo,pv=aa&&(!xp||yo&&8<yo&&11>=yo),$m=" ",e0=!1;function mv(t,e){switch(t){case"keyup":return R2.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ss=!1;function D2(t,e){switch(t){case"compositionend":return gv(e);case"keypress":return e.which!==32?null:(e0=!0,$m);case"textInput":return t=e.data,t===$m&&e0?null:t;default:return null}}function N2(t,e){if(ss)return t==="compositionend"||!xp&&mv(t,e)?(t=hv(),cc=mp=La=null,ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return pv&&e.locale!=="ko"?null:e.data;default:return null}}var U2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function t0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!U2[t.type]:e==="textarea"}function xv(t,e,n,i){rs?gs?gs.push(i):gs=[i]:rs=i,e=Jc(e,"onChange"),0<e.length&&(n=new Su("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Mo=null,Fo=null;function L2(t){d1(t,0)}function Mu(t){var e=po(t);if(ov(e))return t}function n0(t,e){if(t==="change")return e}var vv=!1;if(aa){var ef;if(aa){var tf="oninput"in document;if(!tf){var i0=document.createElement("div");i0.setAttribute("oninput","return;"),tf=typeof i0.oninput=="function"}ef=tf}else ef=!1;vv=ef&&(!document.documentMode||9<document.documentMode)}function a0(){Mo&&(Mo.detachEvent("onpropertychange",_v),Fo=Mo=null)}function _v(t){if(t.propertyName==="value"&&Mu(Fo)){var e=[];xv(e,Fo,t,pp(t)),dv(L2,e)}}function O2(t,e,n){t==="focusin"?(a0(),Mo=e,Fo=n,Mo.attachEvent("onpropertychange",_v)):t==="focusout"&&a0()}function P2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Mu(Fo)}function F2(t,e){if(t==="click")return Mu(e)}function B2(t,e){if(t==="input"||t==="change")return Mu(e)}function I2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Hn=typeof Object.is=="function"?Object.is:I2;function Bo(t,e){if(Hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!_d.call(e,a)||!Hn(t[a],e[a]))return!1}return!0}function r0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function s0(t,e){var n=r0(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=r0(n)}}function Sv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Sv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function yv(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Oc(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Oc(t.document)}return e}function vp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var z2=aa&&"documentMode"in document&&11>=document.documentMode,os=null,Ad=null,bo=null,wd=!1;function o0(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wd||os==null||os!==Oc(i)||(i=os,"selectionStart"in i&&vp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),bo&&Bo(bo,i)||(bo=i,i=Jc(Ad,"onSelect"),0<i.length&&(e=new Su("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=os)))}function tr(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ls={animationend:tr("Animation","AnimationEnd"),animationiteration:tr("Animation","AnimationIteration"),animationstart:tr("Animation","AnimationStart"),transitionrun:tr("Transition","TransitionRun"),transitionstart:tr("Transition","TransitionStart"),transitioncancel:tr("Transition","TransitionCancel"),transitionend:tr("Transition","TransitionEnd")},nf={},Mv={};aa&&(Mv=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function Nr(t){if(nf[t])return nf[t];if(!ls[t])return t;var e=ls[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Mv)return nf[t]=e[n];return t}var bv=Nr("animationend"),Ev=Nr("animationiteration"),Tv=Nr("animationstart"),H2=Nr("transitionrun"),G2=Nr("transitionstart"),V2=Nr("transitioncancel"),Av=Nr("transitionend"),wv=new Map,Rd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Rd.push("scrollEnd");function pi(t,e){wv.set(t,e),Cr(e,[t])}var Pc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Xn=[],cs=0,_p=0;function bu(){for(var t=cs,e=_p=cs=0;e<t;){var n=Xn[e];Xn[e++]=null;var i=Xn[e];Xn[e++]=null;var a=Xn[e];Xn[e++]=null;var r=Xn[e];if(Xn[e++]=null,i!==null&&a!==null){var s=i.pending;s===null?a.next=a:(a.next=s.next,s.next=a),i.pending=a}r!==0&&Rv(n,a,r)}}function Eu(t,e,n,i){Xn[cs++]=t,Xn[cs++]=e,Xn[cs++]=n,Xn[cs++]=i,_p|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function Sp(t,e,n,i){return Eu(t,e,n,i),Fc(t)}function Ur(t,e){return Eu(t,null,null,e),Fc(t)}function Rv(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var a=!1,r=t.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(t=r.stateNode,t===null||t._visibility&1||(a=!0)),t=r,r=r.return;return t.tag===3?(r=t.stateNode,a&&e!==null&&(a=31-In(n),t=r.hiddenUpdates,i=t[a],i===null?t[a]=[e]:i.push(e),e.lane=n|536870912),r):null}function Fc(t){if(50<Uo)throw Uo=0,Zd=null,Error(Q(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var us={};function k2(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(t,e,n,i){return new k2(t,e,n,i)}function yp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ji(t,e){var n=t.alternate;return n===null?(n=On(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function Cv(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function fc(t,e,n,i,a,r){var s=0;if(i=t,typeof t=="function")yp(t)&&(s=1);else if(typeof t=="string")s=YM(t,n,Ai.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case md:return t=On(31,n,e,a),t.elementType=md,t.lanes=r,t;case ns:return xr(n.children,a,r,e);case Yx:s=8,a|=24;break;case dd:return t=On(12,n,e,a|2),t.elementType=dd,t.lanes=r,t;case hd:return t=On(13,n,e,a),t.elementType=hd,t.lanes=r,t;case pd:return t=On(19,n,e,a),t.elementType=pd,t.lanes=r,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Yi:s=10;break e;case Zx:s=9;break e;case op:s=11;break e;case lp:s=14;break e;case Ta:s=16,i=null;break e}s=29,n=Error(Q(130,t===null?"null":typeof t,"")),i=null}return e=On(s,n,e,a),e.elementType=t,e.type=i,e.lanes=r,e}function xr(t,e,n,i){return t=On(7,t,i,e),t.lanes=n,t}function af(t,e,n){return t=On(6,t,null,e),t.lanes=n,t}function Dv(t){var e=On(18,null,null,0);return e.stateNode=t,e}function rf(t,e,n){return e=On(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var l0=new WeakMap;function Qn(t,e){if(typeof t=="object"&&t!==null){var n=l0.get(t);return n!==void 0?n:(e={value:t,source:e,stack:Vm(e)},l0.set(t,e),e)}return{value:t,source:e,stack:Vm(e)}}var fs=[],ds=0,Bc=null,Io=0,qn=[],Yn=0,qa=null,yi=1,Mi="";function ji(t,e){fs[ds++]=Io,fs[ds++]=Bc,Bc=t,Io=e}function Nv(t,e,n){qn[Yn++]=yi,qn[Yn++]=Mi,qn[Yn++]=qa,qa=t;var i=yi;t=Mi;var a=32-In(i)-1;i&=~(1<<a),n+=1;var r=32-In(e)+a;if(30<r){var s=a-a%5;r=(i&(1<<s)-1).toString(32),i>>=s,a-=s,yi=1<<32-In(e)+a|n<<a|i,Mi=r+t}else yi=1<<r|n<<a|i,Mi=t}function Mp(t){t.return!==null&&(ji(t,1),Nv(t,1,0))}function bp(t){for(;t===Bc;)Bc=fs[--ds],fs[ds]=null,Io=fs[--ds],fs[ds]=null;for(;t===qa;)qa=qn[--Yn],qn[Yn]=null,Mi=qn[--Yn],qn[Yn]=null,yi=qn[--Yn],qn[Yn]=null}function Uv(t,e){qn[Yn++]=yi,qn[Yn++]=Mi,qn[Yn++]=qa,yi=e.id,Mi=e.overflow,qa=t}var an=null,Mt=null,Je=!1,za=null,Jn=!1,Cd=Error(Q(519));function Ya(t){var e=Error(Q(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw zo(Qn(e,t)),Cd}function c0(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[nn]=t,e[Tn]=i,n){case"dialog":Xe("cancel",e),Xe("close",e);break;case"iframe":case"object":case"embed":Xe("load",e);break;case"video":case"audio":for(n=0;n<ko.length;n++)Xe(ko[n],e);break;case"source":Xe("error",e);break;case"img":case"image":case"link":Xe("error",e),Xe("load",e);break;case"details":Xe("toggle",e);break;case"input":Xe("invalid",e),lv(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Xe("invalid",e);break;case"textarea":Xe("invalid",e),uv(e,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||p1(e.textContent,n)?(i.popover!=null&&(Xe("beforetoggle",e),Xe("toggle",e)),i.onScroll!=null&&Xe("scroll",e),i.onScrollEnd!=null&&Xe("scrollend",e),i.onClick!=null&&(e.onclick=Zi),e=!0):e=!1,e||Ya(t,!0)}function u0(t){for(an=t.return;an;)switch(an.tag){case 5:case 31:case 13:Jn=!1;return;case 27:case 3:Jn=!0;return;default:an=an.return}}function Br(t){if(t!==an)return!1;if(!Je)return u0(t),Je=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||eh(t.type,t.memoizedProps)),n=!n),n&&Mt&&Ya(t),u0(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Q(317));Mt=K0(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Q(317));Mt=K0(t)}else e===27?(e=Mt,$a(t.type)?(t=ah,ah=null,Mt=t):Mt=e):Mt=an?ti(t.stateNode.nextSibling):null;return!0}function yr(){Mt=an=null,Je=!1}function sf(){var t=za;return t!==null&&(yn===null?yn=t:yn.push.apply(yn,t),za=null),t}function zo(t){za===null?za=[t]:za.push(t)}var Dd=Ui(null),Lr=null,Ki=null;function wa(t,e,n){_t(Dd,e._currentValue),e._currentValue=n}function $i(t){t._currentValue=Dd.current,en(Dd)}function Nd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ud(t,e,n,i){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var r=a.dependencies;if(r!==null){var s=a.child;r=r.firstContext;e:for(;r!==null;){var o=r;r=a;for(var l=0;l<e.length;l++)if(o.context===e[l]){r.lanes|=n,o=r.alternate,o!==null&&(o.lanes|=n),Nd(r.return,n,t),i||(s=null);break e}r=o.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(Q(341));s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),Nd(s,n,t),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Gs(t,e,n,i){t=null;for(var a=e,r=!1;a!==null;){if(!r){if(a.flags&524288)r=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(Q(387));if(s=s.memoizedProps,s!==null){var o=a.type;Hn(a.pendingProps.value,s.value)||(t!==null?t.push(o):t=[o])}}else if(a===Dc.current){if(s=a.alternate,s===null)throw Error(Q(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(jo):t=[jo])}a=a.return}t!==null&&Ud(e,t,n,i),e.flags|=262144}function Ic(t){for(t=t.firstContext;t!==null;){if(!Hn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Mr(t){Lr=t,Ki=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function rn(t){return Lv(Lr,t)}function Al(t,e){return Lr===null&&Mr(t),Lv(t,e)}function Lv(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Ki===null){if(t===null)throw Error(Q(308));Ki=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Ki=Ki.next=e;return n}var X2=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},j2=Yt.unstable_scheduleCallback,W2=Yt.unstable_NormalPriority,Vt={$$typeof:Yi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ep(){return{controller:new X2,data:new Map,refCount:0}}function il(t){t.refCount--,t.refCount===0&&j2(W2,function(){t.controller.abort()})}var Eo=null,Ld=0,As=0,xs=null;function q2(t,e){if(Eo===null){var n=Eo=[];Ld=0,As=Zp(),xs={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Ld++,e.then(f0,f0),e}function f0(){if(--Ld===0&&Eo!==null){xs!==null&&(xs.status="fulfilled");var t=Eo;Eo=null,As=0,xs=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Y2(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var a=0;a<n.length;a++)(0,n[a])(e)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var d0=De.S;De.S=function(t,e){q_=Fn(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&q2(t,e),d0!==null&&d0(t,e)};var vr=Ui(null);function Tp(){var t=vr.current;return t!==null?t:gt.pooledCache}function dc(t,e){e===null?_t(vr,vr.current):_t(vr,e.pool)}function Ov(){var t=Tp();return t===null?null:{parent:Vt._currentValue,pool:t}}var Vs=Error(Q(460)),Ap=Error(Q(474)),Tu=Error(Q(542)),zc={then:function(){}};function h0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Pv(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(Zi,Zi),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,m0(t),t;default:if(typeof e.status=="string")e.then(Zi,Zi);else{if(t=gt,t!==null&&100<t.shellSuspendCounter)throw Error(Q(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=i}},function(i){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,m0(t),t}throw _r=e,Vs}}function lr(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(_r=n,Vs):n}}var _r=null;function p0(){if(_r===null)throw Error(Q(459));var t=_r;return _r=null,t}function m0(t){if(t===Vs||t===Tu)throw Error(Q(483))}var vs=null,Ho=0;function wl(t){var e=Ho;return Ho+=1,vs===null&&(vs=[]),Pv(vs,t,e)}function $s(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Rl(t,e){throw e.$$typeof===Oy?Error(Q(525)):(t=Object.prototype.toString.call(e),Error(Q(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Fv(t){function e(f,g){if(t){var v=f.deletions;v===null?(f.deletions=[g],f.flags|=16):v.push(g)}}function n(f,g){if(!t)return null;for(;g!==null;)e(f,g),g=g.sibling;return null}function i(f){for(var g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function a(f,g){return f=Ji(f,g),f.index=0,f.sibling=null,f}function r(f,g,v){return f.index=v,t?(v=f.alternate,v!==null?(v=v.index,v<g?(f.flags|=67108866,g):v):(f.flags|=67108866,g)):(f.flags|=1048576,g)}function s(f){return t&&f.alternate===null&&(f.flags|=67108866),f}function o(f,g,v,y){return g===null||g.tag!==6?(g=af(v,f.mode,y),g.return=f,g):(g=a(g,v),g.return=f,g)}function l(f,g,v,y){var C=v.type;return C===ns?d(f,g,v.props.children,y,v.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ta&&lr(C)===g.type)?(g=a(g,v.props),$s(g,v),g.return=f,g):(g=fc(v.type,v.key,v.props,null,f.mode,y),$s(g,v),g.return=f,g)}function c(f,g,v,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=rf(v,f.mode,y),g.return=f,g):(g=a(g,v.children||[]),g.return=f,g)}function d(f,g,v,y,C){return g===null||g.tag!==7?(g=xr(v,f.mode,y,C),g.return=f,g):(g=a(g,v),g.return=f,g)}function h(f,g,v){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=af(""+g,f.mode,v),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Sl:return v=fc(g.type,g.key,g.props,null,f.mode,v),$s(v,g),v.return=f,v;case fo:return g=rf(g,f.mode,v),g.return=f,g;case Ta:return g=lr(g),h(f,g,v)}if(ho(g)||Ks(g))return g=xr(g,f.mode,v,null),g.return=f,g;if(typeof g.then=="function")return h(f,wl(g),v);if(g.$$typeof===Yi)return h(f,Al(f,g),v);Rl(f,g)}return null}function u(f,g,v,y){var C=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return C!==null?null:o(f,g,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Sl:return v.key===C?l(f,g,v,y):null;case fo:return v.key===C?c(f,g,v,y):null;case Ta:return v=lr(v),u(f,g,v,y)}if(ho(v)||Ks(v))return C!==null?null:d(f,g,v,y,null);if(typeof v.then=="function")return u(f,g,wl(v),y);if(v.$$typeof===Yi)return u(f,g,Al(f,v),y);Rl(f,v)}return null}function p(f,g,v,y,C){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return f=f.get(v)||null,o(g,f,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Sl:return f=f.get(y.key===null?v:y.key)||null,l(g,f,y,C);case fo:return f=f.get(y.key===null?v:y.key)||null,c(g,f,y,C);case Ta:return y=lr(y),p(f,g,v,y,C)}if(ho(y)||Ks(y))return f=f.get(v)||null,d(g,f,y,C,null);if(typeof y.then=="function")return p(f,g,v,wl(y),C);if(y.$$typeof===Yi)return p(f,g,v,Al(g,y),C);Rl(g,y)}return null}function x(f,g,v,y){for(var C=null,A=null,R=g,S=g=0,w=null;R!==null&&S<v.length;S++){R.index>S?(w=R,R=null):w=R.sibling;var N=u(f,R,v[S],y);if(N===null){R===null&&(R=w);break}t&&R&&N.alternate===null&&e(f,R),g=r(N,g,S),A===null?C=N:A.sibling=N,A=N,R=w}if(S===v.length)return n(f,R),Je&&ji(f,S),C;if(R===null){for(;S<v.length;S++)R=h(f,v[S],y),R!==null&&(g=r(R,g,S),A===null?C=R:A.sibling=R,A=R);return Je&&ji(f,S),C}for(R=i(R);S<v.length;S++)w=p(R,f,S,v[S],y),w!==null&&(t&&w.alternate!==null&&R.delete(w.key===null?S:w.key),g=r(w,g,S),A===null?C=w:A.sibling=w,A=w);return t&&R.forEach(function(D){return e(f,D)}),Je&&ji(f,S),C}function M(f,g,v,y){if(v==null)throw Error(Q(151));for(var C=null,A=null,R=g,S=g=0,w=null,N=v.next();R!==null&&!N.done;S++,N=v.next()){R.index>S?(w=R,R=null):w=R.sibling;var D=u(f,R,N.value,y);if(D===null){R===null&&(R=w);break}t&&R&&D.alternate===null&&e(f,R),g=r(D,g,S),A===null?C=D:A.sibling=D,A=D,R=w}if(N.done)return n(f,R),Je&&ji(f,S),C;if(R===null){for(;!N.done;S++,N=v.next())N=h(f,N.value,y),N!==null&&(g=r(N,g,S),A===null?C=N:A.sibling=N,A=N);return Je&&ji(f,S),C}for(R=i(R);!N.done;S++,N=v.next())N=p(R,f,S,N.value,y),N!==null&&(t&&N.alternate!==null&&R.delete(N.key===null?S:N.key),g=r(N,g,S),A===null?C=N:A.sibling=N,A=N);return t&&R.forEach(function(I){return e(f,I)}),Je&&ji(f,S),C}function m(f,g,v,y){if(typeof v=="object"&&v!==null&&v.type===ns&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Sl:e:{for(var C=v.key;g!==null;){if(g.key===C){if(C=v.type,C===ns){if(g.tag===7){n(f,g.sibling),y=a(g,v.props.children),y.return=f,f=y;break e}}else if(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ta&&lr(C)===g.type){n(f,g.sibling),y=a(g,v.props),$s(y,v),y.return=f,f=y;break e}n(f,g);break}else e(f,g);g=g.sibling}v.type===ns?(y=xr(v.props.children,f.mode,y,v.key),y.return=f,f=y):(y=fc(v.type,v.key,v.props,null,f.mode,y),$s(y,v),y.return=f,f=y)}return s(f);case fo:e:{for(C=v.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(f,g.sibling),y=a(g,v.children||[]),y.return=f,f=y;break e}else{n(f,g);break}else e(f,g);g=g.sibling}y=rf(v,f.mode,y),y.return=f,f=y}return s(f);case Ta:return v=lr(v),m(f,g,v,y)}if(ho(v))return x(f,g,v,y);if(Ks(v)){if(C=Ks(v),typeof C!="function")throw Error(Q(150));return v=C.call(v),M(f,g,v,y)}if(typeof v.then=="function")return m(f,g,wl(v),y);if(v.$$typeof===Yi)return m(f,g,Al(f,v),y);Rl(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,g!==null&&g.tag===6?(n(f,g.sibling),y=a(g,v),y.return=f,f=y):(n(f,g),y=af(v,f.mode,y),y.return=f,f=y),s(f)):n(f,g)}return function(f,g,v,y){try{Ho=0;var C=m(f,g,v,y);return vs=null,C}catch(R){if(R===Vs||R===Tu)throw R;var A=On(29,R,null,f.mode);return A.lanes=y,A.return=f,A}finally{}}}var br=Fv(!0),Bv=Fv(!1),Aa=!1;function wp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Od(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ha(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ga(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,nt&2){var a=i.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),i.pending=e,e=Fc(t),Rv(t,null,n),e}return Eu(t,i,e,n),Fc(t)}function To(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,tv(t,n)}}function of(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?a=r=s:r=r.next=s,n=n.next}while(n!==null);r===null?a=r=e:r=r.next=e}else a=r=e;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var Pd=!1;function Ao(){if(Pd){var t=xs;if(t!==null)throw t}}function wo(t,e,n,i){Pd=!1;var a=t.updateQueue;Aa=!1;var r=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,s===null?r=c:s.next=c,s=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==s&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(r!==null){var h=a.baseState;s=0,d=c=l=null,o=r;do{var u=o.lane&-536870913,p=u!==o.lane;if(p?(Ze&u)===u:(i&u)===u){u!==0&&u===As&&(Pd=!0),d!==null&&(d=d.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var x=t,M=o;u=e;var m=n;switch(M.tag){case 1:if(x=M.payload,typeof x=="function"){h=x.call(m,h,u);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=M.payload,u=typeof x=="function"?x.call(m,h,u):x,u==null)break e;h=Et({},h,u);break e;case 2:Aa=!0}}u=o.callback,u!==null&&(t.flags|=64,p&&(t.flags|=8192),p=a.callbacks,p===null?a.callbacks=[u]:p.push(u))}else p={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=p,l=h):d=d.next=p,s|=u;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);d===null&&(l=h),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=d,r===null&&(a.shared.lanes=0),Ka|=s,t.lanes=s,t.memoizedState=h}}function Iv(t,e){if(typeof t!="function")throw Error(Q(191,t));t.call(e)}function zv(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)Iv(n[t],e)}var ws=Ui(null),Hc=Ui(0);function g0(t,e){t=la,_t(Hc,t),_t(ws,e),la=t|e.baseLanes}function Fd(){_t(Hc,la),_t(ws,ws.current)}function Rp(){la=Hc.current,en(ws),en(Hc)}var Gn=Ui(null),ei=null;function Ra(t){var e=t.alternate;_t(Ft,Ft.current&1),_t(Gn,t),ei===null&&(e===null||ws.current!==null||e.memoizedState!==null)&&(ei=t)}function Bd(t){_t(Ft,Ft.current),_t(Gn,t),ei===null&&(ei=t)}function Hv(t){t.tag===22?(_t(Ft,Ft.current),_t(Gn,t),ei===null&&(ei=t)):Ca()}function Ca(){_t(Ft,Ft.current),_t(Gn,Gn.current)}function Ln(t){en(Gn),ei===t&&(ei=null),en(Ft)}var Ft=Ui(0);function Gc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||nh(n)||ih(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ra=0,Ie=null,ht=null,Ht=null,Vc=!1,_s=!1,Er=!1,kc=0,Go=0,Ss=null,Z2=0;function Nt(){throw Error(Q(321))}function Cp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Hn(t[n],e[n]))return!1;return!0}function Dp(t,e,n,i,a,r){return ra=r,Ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,De.H=t===null||t.memoizedState===null?x_:Gp,Er=!1,r=n(i,a),Er=!1,_s&&(r=Vv(e,n,i,a)),Gv(t),r}function Gv(t){De.H=Vo;var e=ht!==null&&ht.next!==null;if(ra=0,Ht=ht=Ie=null,Vc=!1,Go=0,Ss=null,e)throw Error(Q(300));t===null||kt||(t=t.dependencies,t!==null&&Ic(t)&&(kt=!0))}function Vv(t,e,n,i){Ie=t;var a=0;do{if(_s&&(Ss=null),Go=0,_s=!1,25<=a)throw Error(Q(301));if(a+=1,Ht=ht=null,t.updateQueue!=null){var r=t.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}De.H=v_,r=e(n,i)}while(_s);return r}function K2(){var t=De.H,e=t.useState()[0];return e=typeof e.then=="function"?al(e):e,t=t.useState()[0],(ht!==null?ht.memoizedState:null)!==t&&(Ie.flags|=1024),e}function Np(){var t=kc!==0;return kc=0,t}function Up(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Lp(t){if(Vc){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Vc=!1}ra=0,Ht=ht=Ie=null,_s=!1,Go=kc=0,Ss=null}function pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?Ie.memoizedState=Ht=t:Ht=Ht.next=t,Ht}function It(){if(ht===null){var t=Ie.alternate;t=t!==null?t.memoizedState:null}else t=ht.next;var e=Ht===null?Ie.memoizedState:Ht.next;if(e!==null)Ht=e,ht=t;else{if(t===null)throw Ie.alternate===null?Error(Q(467)):Error(Q(310));ht=t,t={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},Ht===null?Ie.memoizedState=Ht=t:Ht=Ht.next=t}return Ht}function Au(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function al(t){var e=Go;return Go+=1,Ss===null&&(Ss=[]),t=Pv(Ss,t,e),e=Ie,(Ht===null?e.memoizedState:Ht.next)===null&&(e=e.alternate,De.H=e===null||e.memoizedState===null?x_:Gp),t}function wu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return al(t);if(t.$$typeof===Yi)return rn(t)}throw Error(Q(438,String(t)))}function Op(t){var e=null,n=Ie.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=Ie.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=Au(),Ie.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=Py;return e.index++,n}function sa(t,e){return typeof e=="function"?e(t):e}function hc(t){var e=It();return Pp(e,ht,t)}function Pp(t,e,n){var i=t.queue;if(i===null)throw Error(Q(311));i.lastRenderedReducer=n;var a=t.baseQueue,r=i.pending;if(r!==null){if(a!==null){var s=a.next;a.next=r.next,r.next=s}e.baseQueue=a=r,i.pending=null}if(r=t.baseState,a===null)t.memoizedState=r;else{e=a.next;var o=s=null,l=null,c=e,d=!1;do{var h=c.lane&-536870913;if(h!==c.lane?(Ze&h)===h:(ra&h)===h){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),h===As&&(d=!0);else if((ra&u)===u){c=c.next,u===As&&(d=!0);continue}else h={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,s=r):l=l.next=h,Ie.lanes|=u,Ka|=u;h=c.action,Er&&n(r,h),r=c.hasEagerState?c.eagerState:n(r,h)}else u={lane:h,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,s=r):l=l.next=u,Ie.lanes|=h,Ka|=h;c=c.next}while(c!==null&&c!==e);if(l===null?s=r:l.next=o,!Hn(r,t.memoizedState)&&(kt=!0,d&&(n=xs,n!==null)))throw n;t.memoizedState=r,t.baseState=s,t.baseQueue=l,i.lastRenderedState=r}return a===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function lf(t){var e=It(),n=e.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=t;var i=n.dispatch,a=n.pending,r=e.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do r=t(r,s.action),s=s.next;while(s!==a);Hn(r,e.memoizedState)||(kt=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),n.lastRenderedState=r}return[r,i]}function kv(t,e,n){var i=Ie,a=It(),r=Je;if(r){if(n===void 0)throw Error(Q(407));n=n()}else n=e();var s=!Hn((ht||a).memoizedState,n);if(s&&(a.memoizedState=n,kt=!0),a=a.queue,Fp(Wv.bind(null,i,a,t),[t]),a.getSnapshot!==e||s||Ht!==null&&Ht.memoizedState.tag&1){if(i.flags|=2048,Rs(9,{destroy:void 0},jv.bind(null,i,a,n,e),null),gt===null)throw Error(Q(349));r||ra&127||Xv(i,e,n)}return n}function Xv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ie.updateQueue,e===null?(e=Au(),Ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function jv(t,e,n,i){e.value=n,e.getSnapshot=i,qv(e)&&Yv(t)}function Wv(t,e,n){return n(function(){qv(e)&&Yv(t)})}function qv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Hn(t,n)}catch{return!0}}function Yv(t){var e=Ur(t,2);e!==null&&Mn(e,t,2)}function Id(t){var e=pn();if(typeof t=="function"){var n=t;if(t=n(),Er){Ua(!0);try{n()}finally{Ua(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:t},e}function Zv(t,e,n,i){return t.baseState=n,Pp(t,ht,typeof i=="function"?i:sa)}function Q2(t,e,n,i,a){if(Cu(t))throw Error(Q(485));if(t=e.action,t!==null){var r={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};De.T!==null?n(!0):r.isTransition=!1,i(r),n=e.pending,n===null?(r.next=e.pending=r,Kv(e,r)):(r.next=n.next,e.pending=n.next=r)}}function Kv(t,e){var n=e.action,i=e.payload,a=t.state;if(e.isTransition){var r=De.T,s={};De.T=s;try{var o=n(a,i),l=De.S;l!==null&&l(s,o),x0(t,e,o)}catch(c){zd(t,e,c)}finally{r!==null&&s.types!==null&&(r.types=s.types),De.T=r}}else try{r=n(a,i),x0(t,e,r)}catch(c){zd(t,e,c)}}function x0(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){v0(t,e,i)},function(i){return zd(t,e,i)}):v0(t,e,n)}function v0(t,e,n){e.status="fulfilled",e.value=n,Qv(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,Kv(t,n)))}function zd(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,Qv(e),e=e.next;while(e!==i)}t.action=null}function Qv(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Jv(t,e){return e}function _0(t,e){if(Je){var n=gt.formState;if(n!==null){e:{var i=Ie;if(Je){if(Mt){t:{for(var a=Mt,r=Jn;a.nodeType!==8;){if(!r){a=null;break t}if(a=ti(a.nextSibling),a===null){a=null;break t}}r=a.data,a=r==="F!"||r==="F"?a:null}if(a){Mt=ti(a.nextSibling),i=a.data==="F!";break e}}Ya(i)}i=!1}i&&(e=n[0])}}return n=pn(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jv,lastRenderedState:e},n.queue=i,n=p_.bind(null,Ie,i),i.dispatch=n,i=Id(!1),r=Hp.bind(null,Ie,!1,i.queue),i=pn(),a={state:e,dispatch:null,action:t,pending:null},i.queue=a,n=Q2.bind(null,Ie,a,r,n),a.dispatch=n,i.memoizedState=t,[e,n,!1]}function S0(t){var e=It();return $v(e,ht,t)}function $v(t,e,n){if(e=Pp(t,e,Jv)[0],t=hc(sa)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=al(e)}catch(s){throw s===Vs?Tu:s}else i=e;e=It();var a=e.queue,r=a.dispatch;return n!==e.memoizedState&&(Ie.flags|=2048,Rs(9,{destroy:void 0},J2.bind(null,a,n),null)),[i,r,t]}function J2(t,e){t.action=e}function y0(t){var e=It(),n=ht;if(n!==null)return $v(e,n,t);It(),e=e.memoizedState,n=It();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function Rs(t,e,n,i){return t={tag:t,create:n,deps:i,inst:e,next:null},e=Ie.updateQueue,e===null&&(e=Au(),Ie.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function e_(){return It().memoizedState}function pc(t,e,n,i){var a=pn();Ie.flags|=t,a.memoizedState=Rs(1|e,{destroy:void 0},n,i===void 0?null:i)}function Ru(t,e,n,i){var a=It();i=i===void 0?null:i;var r=a.memoizedState.inst;ht!==null&&i!==null&&Cp(i,ht.memoizedState.deps)?a.memoizedState=Rs(e,r,n,i):(Ie.flags|=t,a.memoizedState=Rs(1|e,r,n,i))}function M0(t,e){pc(8390656,8,t,e)}function Fp(t,e){Ru(2048,8,t,e)}function $2(t){Ie.flags|=4;var e=Ie.updateQueue;if(e===null)e=Au(),Ie.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function t_(t){var e=It().memoizedState;return $2({ref:e,nextImpl:t}),function(){if(nt&2)throw Error(Q(440));return e.impl.apply(void 0,arguments)}}function n_(t,e){return Ru(4,2,t,e)}function i_(t,e){return Ru(4,4,t,e)}function a_(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function r_(t,e,n){n=n!=null?n.concat([t]):null,Ru(4,4,a_.bind(null,e,t),n)}function Bp(){}function s_(t,e){var n=It();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&Cp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function o_(t,e){var n=It();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&Cp(e,i[1]))return i[0];if(i=t(),Er){Ua(!0);try{t()}finally{Ua(!1)}}return n.memoizedState=[i,e],i}function Ip(t,e,n){return n===void 0||ra&1073741824&&!(Ze&261930)?t.memoizedState=e:(t.memoizedState=n,t=Z_(),Ie.lanes|=t,Ka|=t,n)}function l_(t,e,n,i){return Hn(n,e)?n:ws.current!==null?(t=Ip(t,n,i),Hn(t,e)||(kt=!0),t):!(ra&42)||ra&1073741824&&!(Ze&261930)?(kt=!0,t.memoizedState=n):(t=Z_(),Ie.lanes|=t,Ka|=t,e)}function c_(t,e,n,i,a){var r=it.p;it.p=r!==0&&8>r?r:8;var s=De.T,o={};De.T=o,Hp(t,!1,e,n);try{var l=a(),c=De.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=Y2(l,i);Ro(t,e,d,zn(t))}else Ro(t,e,i,zn(t))}catch(h){Ro(t,e,{then:function(){},status:"rejected",reason:h},zn())}finally{it.p=r,s!==null&&o.types!==null&&(s.types=o.types),De.T=s}}function eM(){}function Hd(t,e,n,i){if(t.tag!==5)throw Error(Q(476));var a=u_(t).queue;c_(t,a,e,gr,n===null?eM:function(){return f_(t),n(i)})}function u_(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:gr,baseState:gr,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:gr},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function f_(t){var e=u_(t);e.next===null&&(e=t.alternate.memoizedState),Ro(t,e.next.queue,{},zn())}function zp(){return rn(jo)}function d_(){return It().memoizedState}function h_(){return It().memoizedState}function tM(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=zn();t=Ha(n);var i=Ga(e,t,n);i!==null&&(Mn(i,e,n),To(i,e,n)),e={cache:Ep()},t.payload=e;return}e=e.return}}function nM(t,e,n){var i=zn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Cu(t)?m_(e,n):(n=Sp(t,e,n,i),n!==null&&(Mn(n,t,i),g_(n,e,i)))}function p_(t,e,n){var i=zn();Ro(t,e,n,i)}function Ro(t,e,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cu(t))m_(e,a);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var s=e.lastRenderedState,o=r(s,n);if(a.hasEagerState=!0,a.eagerState=o,Hn(o,s))return Eu(t,e,a,0),gt===null&&bu(),!1}catch{}finally{}if(n=Sp(t,e,a,i),n!==null)return Mn(n,t,i),g_(n,e,i),!0}return!1}function Hp(t,e,n,i){if(i={lane:2,revertLane:Zp(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Cu(t)){if(e)throw Error(Q(479))}else e=Sp(t,n,i,2),e!==null&&Mn(e,t,2)}function Cu(t){var e=t.alternate;return t===Ie||e!==null&&e===Ie}function m_(t,e){_s=Vc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function g_(t,e,n){if(n&4194048){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,tv(t,n)}}var Vo={readContext:rn,use:wu,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useLayoutEffect:Nt,useInsertionEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useSyncExternalStore:Nt,useId:Nt,useHostTransitionStatus:Nt,useFormState:Nt,useActionState:Nt,useOptimistic:Nt,useMemoCache:Nt,useCacheRefresh:Nt};Vo.useEffectEvent=Nt;var x_={readContext:rn,use:wu,useCallback:function(t,e){return pn().memoizedState=[t,e===void 0?null:e],t},useContext:rn,useEffect:M0,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,pc(4194308,4,a_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return pc(4194308,4,t,e)},useInsertionEffect:function(t,e){pc(4,2,t,e)},useMemo:function(t,e){var n=pn();e=e===void 0?null:e;var i=t();if(Er){Ua(!0);try{t()}finally{Ua(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=pn();if(n!==void 0){var a=n(e);if(Er){Ua(!0);try{n(e)}finally{Ua(!1)}}}else a=e;return i.memoizedState=i.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},i.queue=t,t=t.dispatch=nM.bind(null,Ie,t),[i.memoizedState,t]},useRef:function(t){var e=pn();return t={current:t},e.memoizedState=t},useState:function(t){t=Id(t);var e=t.queue,n=p_.bind(null,Ie,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:Bp,useDeferredValue:function(t,e){var n=pn();return Ip(n,t,e)},useTransition:function(){var t=Id(!1);return t=c_.bind(null,Ie,t.queue,!0,!1),pn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=Ie,a=pn();if(Je){if(n===void 0)throw Error(Q(407));n=n()}else{if(n=e(),gt===null)throw Error(Q(349));Ze&127||Xv(i,e,n)}a.memoizedState=n;var r={value:n,getSnapshot:e};return a.queue=r,M0(Wv.bind(null,i,r,t),[t]),i.flags|=2048,Rs(9,{destroy:void 0},jv.bind(null,i,r,n,e),null),n},useId:function(){var t=pn(),e=gt.identifierPrefix;if(Je){var n=Mi,i=yi;n=(i&~(1<<32-In(i)-1)).toString(32)+n,e="_"+e+"R_"+n,n=kc++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=Z2++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:zp,useFormState:_0,useActionState:_0,useOptimistic:function(t){var e=pn();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=Hp.bind(null,Ie,!0,n),n.dispatch=e,[t,e]},useMemoCache:Op,useCacheRefresh:function(){return pn().memoizedState=tM.bind(null,Ie)},useEffectEvent:function(t){var e=pn(),n={impl:t};return e.memoizedState=n,function(){if(nt&2)throw Error(Q(440));return n.impl.apply(void 0,arguments)}}},Gp={readContext:rn,use:wu,useCallback:s_,useContext:rn,useEffect:Fp,useImperativeHandle:r_,useInsertionEffect:n_,useLayoutEffect:i_,useMemo:o_,useReducer:hc,useRef:e_,useState:function(){return hc(sa)},useDebugValue:Bp,useDeferredValue:function(t,e){var n=It();return l_(n,ht.memoizedState,t,e)},useTransition:function(){var t=hc(sa)[0],e=It().memoizedState;return[typeof t=="boolean"?t:al(t),e]},useSyncExternalStore:kv,useId:d_,useHostTransitionStatus:zp,useFormState:S0,useActionState:S0,useOptimistic:function(t,e){var n=It();return Zv(n,ht,t,e)},useMemoCache:Op,useCacheRefresh:h_};Gp.useEffectEvent=t_;var v_={readContext:rn,use:wu,useCallback:s_,useContext:rn,useEffect:Fp,useImperativeHandle:r_,useInsertionEffect:n_,useLayoutEffect:i_,useMemo:o_,useReducer:lf,useRef:e_,useState:function(){return lf(sa)},useDebugValue:Bp,useDeferredValue:function(t,e){var n=It();return ht===null?Ip(n,t,e):l_(n,ht.memoizedState,t,e)},useTransition:function(){var t=lf(sa)[0],e=It().memoizedState;return[typeof t=="boolean"?t:al(t),e]},useSyncExternalStore:kv,useId:d_,useHostTransitionStatus:zp,useFormState:y0,useActionState:y0,useOptimistic:function(t,e){var n=It();return ht!==null?Zv(n,ht,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:Op,useCacheRefresh:h_};v_.useEffectEvent=t_;function cf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Gd={enqueueSetState:function(t,e,n){t=t._reactInternals;var i=zn(),a=Ha(i);a.payload=e,n!=null&&(a.callback=n),e=Ga(t,a,i),e!==null&&(Mn(e,t,i),To(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=zn(),a=Ha(i);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=Ga(t,a,i),e!==null&&(Mn(e,t,i),To(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=zn(),i=Ha(n);i.tag=2,e!=null&&(i.callback=e),e=Ga(t,i,n),e!==null&&(Mn(e,t,n),To(e,t,n))}};function b0(t,e,n,i,a,r,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,r,s):e.prototype&&e.prototype.isPureReactComponent?!Bo(n,i)||!Bo(a,r):!0}function E0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Gd.enqueueReplaceState(e,e.state,null)}function Tr(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=Et({},n));for(var a in t)n[a]===void 0&&(n[a]=t[a])}return n}function __(t){Pc(t)}function S_(t){console.error(t)}function y_(t){Pc(t)}function Xc(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function T0(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Vd(t,e,n){return n=Ha(n),n.tag=3,n.payload={element:null},n.callback=function(){Xc(t,e)},n}function M_(t){return t=Ha(t),t.tag=3,t}function b_(t,e,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var r=i.value;t.payload=function(){return a(r)},t.callback=function(){T0(e,n,i)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){T0(e,n,i),typeof a!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function iM(t,e,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&Gs(e,n,a,!0),n=Gn.current,n!==null){switch(n.tag){case 31:case 13:return ei===null?Zc():n.alternate===null&&Ut===0&&(Ut=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===zc?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),Sf(t,i,a)),!1;case 22:return n.flags|=65536,i===zc?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),Sf(t,i,a)),!1}throw Error(Q(435,n.tag))}return Sf(t,i,a),Zc(),!1}if(Je)return e=Gn.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=a,i!==Cd&&(t=Error(Q(422),{cause:i}),zo(Qn(t,n)))):(i!==Cd&&(e=Error(Q(423),{cause:i}),zo(Qn(e,n))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,i=Qn(i,n),a=Vd(t.stateNode,i,a),of(t,a),Ut!==4&&(Ut=2)),!1;var r=Error(Q(520),{cause:i});if(r=Qn(r,n),No===null?No=[r]:No.push(r),Ut!==4&&(Ut=2),e===null)return!0;i=Qn(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=a&-a,n.lanes|=t,t=Vd(n.stateNode,i,t),of(n,t),!1;case 1:if(e=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Va===null||!Va.has(r))))return n.flags|=65536,a&=-a,n.lanes|=a,a=M_(a),b_(a,t,n,i),of(n,a),!1}n=n.return}while(n!==null);return!1}var Vp=Error(Q(461)),kt=!1;function tn(t,e,n,i){e.child=t===null?Bv(e,null,n,i):br(e,t.child,n,i)}function A0(t,e,n,i,a){n=n.render;var r=e.ref;if("ref"in i){var s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}else s=i;return Mr(e),i=Dp(t,e,n,s,r,a),o=Np(),t!==null&&!kt?(Up(t,e,a),oa(t,e,a)):(Je&&o&&Mp(e),e.flags|=1,tn(t,e,i,a),e.child)}function w0(t,e,n,i,a){if(t===null){var r=n.type;return typeof r=="function"&&!yp(r)&&r.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=r,E_(t,e,r,i,a)):(t=fc(n.type,null,i,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,!kp(t,a)){var s=r.memoizedProps;if(n=n.compare,n=n!==null?n:Bo,n(s,i)&&t.ref===e.ref)return oa(t,e,a)}return e.flags|=1,t=Ji(r,i),t.ref=e.ref,t.return=e,e.child=t}function E_(t,e,n,i,a){if(t!==null){var r=t.memoizedProps;if(Bo(r,i)&&t.ref===e.ref)if(kt=!1,e.pendingProps=i=r,kp(t,a))t.flags&131072&&(kt=!0);else return e.lanes=t.lanes,oa(t,e,a)}return kd(t,e,n,i,a)}function T_(t,e,n,i){var a=i.children,r=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(e.flags&128){if(r=r!==null?r.baseLanes|n:n,t!==null){for(i=e.child=t.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~r}else i=0,e.child=null;return R0(t,e,r,n,i)}if(n&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&dc(e,r!==null?r.cachePool:null),r!==null?g0(e,r):Fd(),Hv(e);else return i=e.lanes=536870912,R0(t,e,r!==null?r.baseLanes|n:n,n,i)}else r!==null?(dc(e,r.cachePool),g0(e,r),Ca(),e.memoizedState=null):(t!==null&&dc(e,null),Fd(),Ca());return tn(t,e,a,n),e.child}function mo(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function R0(t,e,n,i,a){var r=Tp();return r=r===null?null:{parent:Vt._currentValue,pool:r},e.memoizedState={baseLanes:n,cachePool:r},t!==null&&dc(e,null),Fd(),Hv(e),t!==null&&Gs(t,e,i,!0),e.childLanes=a,null}function mc(t,e){return e=jc({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function C0(t,e,n){return br(e,t.child,null,n),t=mc(e,e.pendingProps),t.flags|=2,Ln(e),e.memoizedState=null,t}function aM(t,e,n){var i=e.pendingProps,a=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(Je){if(i.mode==="hidden")return t=mc(e,i),e.lanes=536870912,mo(null,t);if(Bd(e),(t=Mt)?(t=x1(t,Jn),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:qa!==null?{id:yi,overflow:Mi}:null,retryLane:536870912,hydrationErrors:null},n=Dv(t),n.return=e,e.child=n,an=e,Mt=null)):t=null,t===null)throw Ya(e);return e.lanes=536870912,null}return mc(e,i)}var r=t.memoizedState;if(r!==null){var s=r.dehydrated;if(Bd(e),a)if(e.flags&256)e.flags&=-257,e=C0(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(Q(558));else if(kt||Gs(t,e,n,!1),a=(n&t.childLanes)!==0,kt||a){if(i=gt,i!==null&&(s=nv(i,n),s!==0&&s!==r.retryLane))throw r.retryLane=s,Ur(t,s),Mn(i,t,s),Vp;Zc(),e=C0(t,e,n)}else t=r.treeContext,Mt=ti(s.nextSibling),an=e,Je=!0,za=null,Jn=!1,t!==null&&Uv(e,t),e=mc(e,i),e.flags|=4096;return e}return t=Ji(t.child,{mode:i.mode,children:i.children}),t.ref=e.ref,e.child=t,t.return=e,t}function gc(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(Q(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function kd(t,e,n,i,a){return Mr(e),n=Dp(t,e,n,i,void 0,a),i=Np(),t!==null&&!kt?(Up(t,e,a),oa(t,e,a)):(Je&&i&&Mp(e),e.flags|=1,tn(t,e,n,a),e.child)}function D0(t,e,n,i,a,r){return Mr(e),e.updateQueue=null,n=Vv(e,i,n,a),Gv(t),i=Np(),t!==null&&!kt?(Up(t,e,r),oa(t,e,r)):(Je&&i&&Mp(e),e.flags|=1,tn(t,e,n,r),e.child)}function N0(t,e,n,i,a){if(Mr(e),e.stateNode===null){var r=us,s=n.contextType;typeof s=="object"&&s!==null&&(r=rn(s)),r=new n(i,r),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Gd,e.stateNode=r,r._reactInternals=e,r=e.stateNode,r.props=i,r.state=e.memoizedState,r.refs={},wp(e),s=n.contextType,r.context=typeof s=="object"&&s!==null?rn(s):us,r.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(cf(e,n,s,i),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&Gd.enqueueReplaceState(r,r.state,null),wo(e,i,r,a),Ao(),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){r=e.stateNode;var o=e.memoizedProps,l=Tr(n,o);r.props=l;var c=r.context,d=n.contextType;s=us,typeof d=="object"&&d!==null&&(s=rn(d));var h=n.getDerivedStateFromProps;d=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,d||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o||c!==s)&&E0(e,r,i,s),Aa=!1;var u=e.memoizedState;r.state=u,wo(e,i,r,a),Ao(),c=e.memoizedState,o||u!==c||Aa?(typeof h=="function"&&(cf(e,n,h,i),c=e.memoizedState),(l=Aa||b0(e,n,l,i,u,c,s))?(d||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(e.flags|=4194308)):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),r.props=i,r.state=c,r.context=s,i=l):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{r=e.stateNode,Od(t,e),s=e.memoizedProps,d=Tr(n,s),r.props=d,h=e.pendingProps,u=r.context,c=n.contextType,l=us,typeof c=="object"&&c!==null&&(l=rn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==h||u!==l)&&E0(e,r,i,l),Aa=!1,u=e.memoizedState,r.state=u,wo(e,i,r,a),Ao();var p=e.memoizedState;s!==h||u!==p||Aa||t!==null&&t.dependencies!==null&&Ic(t.dependencies)?(typeof o=="function"&&(cf(e,n,o,i),p=e.memoizedState),(d=Aa||b0(e,n,d,i,u,p,l)||t!==null&&t.dependencies!==null&&Ic(t.dependencies))?(c||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,p,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,p,l)),typeof r.componentDidUpdate=="function"&&(e.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=p),r.props=i,r.state=p,r.context=l,i=d):(typeof r.componentDidUpdate!="function"||s===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return r=i,gc(t,e),i=(e.flags&128)!==0,r||i?(r=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),e.flags|=1,t!==null&&i?(e.child=br(e,t.child,null,a),e.child=br(e,null,n,a)):tn(t,e,n,a),e.memoizedState=r.state,t=e.child):t=oa(t,e,a),t}function U0(t,e,n,i){return yr(),e.flags|=256,tn(t,e,n,i),e.child}var uf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ff(t){return{baseLanes:t,cachePool:Ov()}}function df(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Pn),t}function A_(t,e,n){var i=e.pendingProps,a=!1,r=(e.flags&128)!==0,s;if((s=r)||(s=t!==null&&t.memoizedState===null?!1:(Ft.current&2)!==0),s&&(a=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(Je){if(a?Ra(e):Ca(),(t=Mt)?(t=x1(t,Jn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:qa!==null?{id:yi,overflow:Mi}:null,retryLane:536870912,hydrationErrors:null},n=Dv(t),n.return=e,e.child=n,an=e,Mt=null)):t=null,t===null)throw Ya(e);return ih(t)?e.lanes=32:e.lanes=536870912,null}var o=i.children;return i=i.fallback,a?(Ca(),a=e.mode,o=jc({mode:"hidden",children:o},a),i=xr(i,a,n,null),o.return=e,i.return=e,o.sibling=i,e.child=o,i=e.child,i.memoizedState=ff(n),i.childLanes=df(t,s,n),e.memoizedState=uf,mo(null,i)):(Ra(e),Xd(e,o))}var l=t.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(r)e.flags&256?(Ra(e),e.flags&=-257,e=hf(t,e,n)):e.memoizedState!==null?(Ca(),e.child=t.child,e.flags|=128,e=null):(Ca(),o=i.fallback,a=e.mode,i=jc({mode:"visible",children:i.children},a),o=xr(o,a,n,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,br(e,t.child,null,n),i=e.child,i.memoizedState=ff(n),i.childLanes=df(t,s,n),e.memoizedState=uf,e=mo(null,i));else if(Ra(e),ih(o)){if(s=o.nextSibling&&o.nextSibling.dataset,s)var c=s.dgst;s=c,i=Error(Q(419)),i.stack="",i.digest=s,zo({value:i,source:null,stack:null}),e=hf(t,e,n)}else if(kt||Gs(t,e,n,!1),s=(n&t.childLanes)!==0,kt||s){if(s=gt,s!==null&&(i=nv(s,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,Ur(t,i),Mn(s,t,i),Vp;nh(o)||Zc(),e=hf(t,e,n)}else nh(o)?(e.flags|=192,e.child=t.child,e=null):(t=l.treeContext,Mt=ti(o.nextSibling),an=e,Je=!0,za=null,Jn=!1,t!==null&&Uv(e,t),e=Xd(e,i.children),e.flags|=4096);return e}return a?(Ca(),o=i.fallback,a=e.mode,l=t.child,c=l.sibling,i=Ji(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=Ji(c,o):(o=xr(o,a,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,mo(null,i),i=e.child,o=t.child.memoizedState,o===null?o=ff(n):(a=o.cachePool,a!==null?(l=Vt._currentValue,a=a.parent!==l?{parent:l,pool:l}:a):a=Ov(),o={baseLanes:o.baseLanes|n,cachePool:a}),i.memoizedState=o,i.childLanes=df(t,s,n),e.memoizedState=uf,mo(t.child,i)):(Ra(e),n=t.child,t=n.sibling,n=Ji(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=n,e.memoizedState=null,n)}function Xd(t,e){return e=jc({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function jc(t,e){return t=On(22,t,null,e),t.lanes=0,t}function hf(t,e,n){return br(e,t.child,null,n),t=Xd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function L0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Nd(t.return,e,n)}function pf(t,e,n,i,a,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=a,s.treeForkCount=r)}function w_(t,e,n){var i=e.pendingProps,a=i.revealOrder,r=i.tail;i=i.children;var s=Ft.current,o=(s&2)!==0;if(o?(s=s&1|2,e.flags|=128):s&=1,_t(Ft,s),tn(t,e,i,n),i=Je?Io:0,!o&&t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&L0(t,n,e);else if(t.tag===19)L0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(a){case"forwards":for(n=e.child,a=null;n!==null;)t=n.alternate,t!==null&&Gc(t)===null&&(a=n),n=n.sibling;n=a,n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null),pf(e,!1,a,n,r,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&Gc(t)===null){e.child=a;break}t=a.sibling,a.sibling=n,n=a,a=t}pf(e,!0,n,null,r,i);break;case"together":pf(e,!1,null,null,void 0,i);break;default:e.memoizedState=null}return e.child}function oa(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ka|=e.lanes,!(n&e.childLanes))if(t!==null){if(Gs(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(Q(153));if(e.child!==null){for(t=e.child,n=Ji(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ji(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function kp(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&Ic(t)))}function rM(t,e,n){switch(e.tag){case 3:Nc(e,e.stateNode.containerInfo),wa(e,Vt,t.memoizedState.cache),yr();break;case 27:case 5:vd(e);break;case 4:Nc(e,e.stateNode.containerInfo);break;case 10:wa(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Bd(e),null;break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(Ra(e),e.flags|=128,null):n&e.child.childLanes?A_(t,e,n):(Ra(e),t=oa(t,e,n),t!==null?t.sibling:null);Ra(e);break;case 19:var a=(t.flags&128)!==0;if(i=(n&e.childLanes)!==0,i||(Gs(t,e,n,!1),i=(n&e.childLanes)!==0),a){if(i)return w_(t,e,n);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),_t(Ft,Ft.current),i)break;return null;case 22:return e.lanes=0,T_(t,e,n,e.pendingProps);case 24:wa(e,Vt,t.memoizedState.cache)}return oa(t,e,n)}function R_(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)kt=!0;else{if(!kp(t,n)&&!(e.flags&128))return kt=!1,rM(t,e,n);kt=!!(t.flags&131072)}else kt=!1,Je&&e.flags&1048576&&Nv(e,Io,e.index);switch(e.lanes=0,e.tag){case 16:e:{var i=e.pendingProps;if(t=lr(e.elementType),e.type=t,typeof t=="function")yp(t)?(i=Tr(t,i),e.tag=1,e=N0(null,e,t,i,n)):(e.tag=0,e=kd(null,e,t,i,n));else{if(t!=null){var a=t.$$typeof;if(a===op){e.tag=11,e=A0(null,e,t,i,n);break e}else if(a===lp){e.tag=14,e=w0(null,e,t,i,n);break e}}throw e=gd(t)||t,Error(Q(306,e,""))}}return e;case 0:return kd(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,a=Tr(i,e.pendingProps),N0(t,e,i,a,n);case 3:e:{if(Nc(e,e.stateNode.containerInfo),t===null)throw Error(Q(387));i=e.pendingProps;var r=e.memoizedState;a=r.element,Od(t,e),wo(e,i,null,n);var s=e.memoizedState;if(i=s.cache,wa(e,Vt,i),i!==r.cache&&Ud(e,[Vt],n,!0),Ao(),i=s.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){e=U0(t,e,i,n);break e}else if(i!==a){a=Qn(Error(Q(424)),e),zo(a),e=U0(t,e,i,n);break e}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Mt=ti(t.firstChild),an=e,Je=!0,za=null,Jn=!0,n=Bv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(yr(),i===a){e=oa(t,e,n);break e}tn(t,e,i,n)}e=e.child}return e;case 26:return gc(t,e),t===null?(n=$0(e.type,null,e.pendingProps,null))?e.memoizedState=n:Je||(n=e.type,t=e.pendingProps,i=$c(Ia.current).createElement(n),i[nn]=e,i[Tn]=t,on(i,n,t),$t(i),e.stateNode=i):e.memoizedState=$0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return vd(e),t===null&&Je&&(i=e.stateNode=v1(e.type,e.pendingProps,Ia.current),an=e,Jn=!0,a=Mt,$a(e.type)?(ah=a,Mt=ti(i.firstChild)):Mt=a),tn(t,e,e.pendingProps.children,n),gc(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Je&&((a=i=Mt)&&(i=PM(i,e.type,e.pendingProps,Jn),i!==null?(e.stateNode=i,an=e,Mt=ti(i.firstChild),Jn=!1,a=!0):a=!1),a||Ya(e)),vd(e),a=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,i=r.children,eh(a,r)?i=null:s!==null&&eh(a,s)&&(e.flags|=32),e.memoizedState!==null&&(a=Dp(t,e,K2,null,null,n),jo._currentValue=a),gc(t,e),tn(t,e,i,n),e.child;case 6:return t===null&&Je&&((t=n=Mt)&&(n=FM(n,e.pendingProps,Jn),n!==null?(e.stateNode=n,an=e,Mt=null,t=!0):t=!1),t||Ya(e)),null;case 13:return A_(t,e,n);case 4:return Nc(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=br(e,null,i,n):tn(t,e,i,n),e.child;case 11:return A0(t,e,e.type,e.pendingProps,n);case 7:return tn(t,e,e.pendingProps,n),e.child;case 8:return tn(t,e,e.pendingProps.children,n),e.child;case 12:return tn(t,e,e.pendingProps.children,n),e.child;case 10:return i=e.pendingProps,wa(e,e.type,i.value),tn(t,e,i.children,n),e.child;case 9:return a=e.type._context,i=e.pendingProps.children,Mr(e),a=rn(a),i=i(a),e.flags|=1,tn(t,e,i,n),e.child;case 14:return w0(t,e,e.type,e.pendingProps,n);case 15:return E_(t,e,e.type,e.pendingProps,n);case 19:return w_(t,e,n);case 31:return aM(t,e,n);case 22:return T_(t,e,n,e.pendingProps);case 24:return Mr(e),i=rn(Vt),t===null?(a=Tp(),a===null&&(a=gt,r=Ep(),a.pooledCache=r,r.refCount++,r!==null&&(a.pooledCacheLanes|=n),a=r),e.memoizedState={parent:i,cache:a},wp(e),wa(e,Vt,a)):(t.lanes&n&&(Od(t,e),wo(e,null,null,n),Ao()),a=t.memoizedState,r=e.memoizedState,a.parent!==i?(a={parent:i,cache:i},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),wa(e,Vt,i)):(i=r.cache,wa(e,Vt,i),i!==a.cache&&Ud(e,[Vt],n,!0))),tn(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(Q(156,e.tag))}function Fi(t){t.flags|=4}function mf(t,e,n,i,a){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(a&335544128)===a)if(t.stateNode.complete)t.flags|=8192;else if(J_())t.flags|=8192;else throw _r=zc,Ap}else t.flags&=-16777217}function O0(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!y1(e))if(J_())t.flags|=8192;else throw _r=zc,Ap}function Cl(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?$x():536870912,t.lanes|=e,Cs|=e)}function eo(t,e){if(!Je)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function sM(t,e,n){var i=e.pendingProps;switch(bp(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(e),null;case 1:return yt(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),$i(Vt),bs(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Br(e)?Fi(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,sf())),yt(e),null;case 26:var a=e.type,r=e.memoizedState;return t===null?(Fi(e),r!==null?(yt(e),O0(e,r)):(yt(e),mf(e,a,null,i,n))):r?r!==t.memoizedState?(Fi(e),yt(e),O0(e,r)):(yt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==i&&Fi(e),yt(e),mf(e,a,t,i,n)),null;case 27:if(Uc(e),n=Ia.current,a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Fi(e);else{if(!i){if(e.stateNode===null)throw Error(Q(166));return yt(e),null}t=Ai.current,Br(e)?c0(e):(t=v1(a,i,n),e.stateNode=t,Fi(e))}return yt(e),null;case 5:if(Uc(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Fi(e);else{if(!i){if(e.stateNode===null)throw Error(Q(166));return yt(e),null}if(r=Ai.current,Br(e))c0(e);else{var s=$c(Ia.current);switch(r){case 1:r=s.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:r=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":r=s.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":r=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":r=s.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof i.is=="string"?s.createElement("select",{is:i.is}):s.createElement("select"),i.multiple?r.multiple=!0:i.size&&(r.size=i.size);break;default:r=typeof i.is=="string"?s.createElement(a,{is:i.is}):s.createElement(a)}}r[nn]=e,r[Tn]=i;e:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)r.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=r;e:switch(on(r,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Fi(e)}}return yt(e),mf(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&Fi(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Q(166));if(t=Ia.current,Br(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,a=an,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}t[nn]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||p1(t.nodeValue,n)),t||Ya(e,!0)}else t=$c(t).createTextNode(i),t[nn]=e,e.stateNode=t}return yt(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(i=Br(e),n!==null){if(t===null){if(!i)throw Error(Q(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Q(557));t[nn]=e}else yr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;yt(e),t=!1}else n=sf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(Ln(e),e):(Ln(e),null);if(e.flags&128)throw Error(Q(558))}return yt(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=Br(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(Q(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(Q(317));a[nn]=e}else yr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;yt(e),a=!1}else a=sf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(Ln(e),e):(Ln(e),null)}return Ln(e),e.flags&128?(e.lanes=n,e):(n=i!==null,t=t!==null&&t.memoizedState!==null,n&&(i=e.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==a&&(i.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),Cl(e,e.updateQueue),yt(e),null);case 4:return bs(),t===null&&Kp(e.stateNode.containerInfo),yt(e),null;case 10:return $i(e.type),yt(e),null;case 19:if(en(Ft),i=e.memoizedState,i===null)return yt(e),null;if(a=(e.flags&128)!==0,r=i.rendering,r===null)if(a)eo(i,!1);else{if(Ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(r=Gc(t),r!==null){for(e.flags|=128,eo(i,!1),t=r.updateQueue,e.updateQueue=t,Cl(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)Cv(n,t),n=n.sibling;return _t(Ft,Ft.current&1|2),Je&&ji(e,i.treeForkCount),e.child}t=t.sibling}i.tail!==null&&Fn()>qc&&(e.flags|=128,a=!0,eo(i,!1),e.lanes=4194304)}else{if(!a)if(t=Gc(r),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,Cl(e,t),eo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!Je)return yt(e),null}else 2*Fn()-i.renderingStartTime>qc&&n!==536870912&&(e.flags|=128,a=!0,eo(i,!1),e.lanes=4194304);i.isBackwards?(r.sibling=e.child,e.child=r):(t=i.last,t!==null?t.sibling=r:e.child=r,i.last=r)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Fn(),t.sibling=null,n=Ft.current,_t(Ft,a?n&1|2:n&1),Je&&ji(e,i.treeForkCount),t):(yt(e),null);case 22:case 23:return Ln(e),Rp(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?n&536870912&&!(e.flags&128)&&(yt(e),e.subtreeFlags&6&&(e.flags|=8192)):yt(e),n=e.updateQueue,n!==null&&Cl(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&en(vr),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),$i(Vt),yt(e),null;case 25:return null;case 30:return null}throw Error(Q(156,e.tag))}function oM(t,e){switch(bp(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $i(Vt),bs(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Uc(e),null;case 31:if(e.memoizedState!==null){if(Ln(e),e.alternate===null)throw Error(Q(340));yr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Ln(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Q(340));yr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return en(Ft),null;case 4:return bs(),null;case 10:return $i(e.type),null;case 22:case 23:return Ln(e),Rp(),t!==null&&en(vr),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return $i(Vt),null;case 25:return null;default:return null}}function C_(t,e){switch(bp(e),e.tag){case 3:$i(Vt),bs();break;case 26:case 27:case 5:Uc(e);break;case 4:bs();break;case 31:e.memoizedState!==null&&Ln(e);break;case 13:Ln(e);break;case 19:en(Ft);break;case 10:$i(e.type);break;case 22:case 23:Ln(e),Rp(),t!==null&&en(vr);break;case 24:$i(Vt)}}function rl(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&t)===t){i=void 0;var r=n.create,s=n.inst;i=r(),s.destroy=i}n=n.next}while(n!==a)}}catch(o){ot(e,e.return,o)}}function Za(t,e,n){try{var i=e.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var r=a.next;i=r;do{if((i.tag&t)===t){var s=i.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,a=e;var l=n,c=o;try{c()}catch(d){ot(a,l,d)}}}i=i.next}while(i!==r)}}catch(d){ot(e,e.return,d)}}function D_(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{zv(e,n)}catch(i){ot(t,t.return,i)}}}function N_(t,e,n){n.props=Tr(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){ot(t,e,i)}}function Co(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof n=="function"?t.refCleanup=n(i):n.current=i}}catch(a){ot(t,e,a)}}function bi(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){ot(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){ot(t,e,a)}else n.current=null}function U_(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){ot(t,t.return,a)}}function gf(t,e,n){try{var i=t.stateNode;CM(i,t.type,n,e),i[Tn]=e}catch(a){ot(t,t.return,a)}}function L_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&$a(t.type)||t.tag===4}function xf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||L_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&$a(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Zi));else if(i!==4&&(i===27&&$a(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(jd(t,e,n),t=t.sibling;t!==null;)jd(t,e,n),t=t.sibling}function Wc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(i===27&&$a(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(Wc(t,e,n),t=t.sibling;t!==null;)Wc(t,e,n),t=t.sibling}function O_(t){var e=t.stateNode,n=t.memoizedProps;try{for(var i=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);on(e,i,n),e[nn]=t,e[Tn]=n}catch(r){ot(t,t.return,r)}}var Wi=!1,Gt=!1,vf=!1,P0=typeof WeakSet=="function"?WeakSet:Set,Jt=null;function lM(t,e){if(t=t.containerInfo,Jd=iu,t=yv(t),vp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var s=0,o=-1,l=-1,c=0,d=0,h=t,u=null;t:for(;;){for(var p;h!==n||a!==0&&h.nodeType!==3||(o=s+a),h!==r||i!==0&&h.nodeType!==3||(l=s+i),h.nodeType===3&&(s+=h.nodeValue.length),(p=h.firstChild)!==null;)u=h,h=p;for(;;){if(h===t)break t;if(u===n&&++c===a&&(o=s),u===r&&++d===i&&(l=s),(p=h.nextSibling)!==null)break;h=u,u=h.parentNode}h=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for($d={focusedElem:t,selectionRange:n},iu=!1,Jt=e;Jt!==null;)if(e=Jt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Jt=t;else for(;Jt!==null;){switch(e=Jt,r=e.alternate,t=e.flags,e.tag){case 0:if(t&4&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)a=t[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(t&1024&&r!==null){t=void 0,n=e,a=r.memoizedProps,r=r.memoizedState,i=n.stateNode;try{var x=Tr(n.type,a);t=i.getSnapshotBeforeUpdate(x,r),i.__reactInternalSnapshotBeforeUpdate=t}catch(M){ot(n,n.return,M)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)th(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":th(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(Q(163))}if(t=e.sibling,t!==null){t.return=e.return,Jt=t;break}Jt=e.return}}function P_(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Ii(t,n),i&4&&rl(5,n);break;case 1:if(Ii(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(s){ot(n,n.return,s)}else{var a=Tr(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(s){ot(n,n.return,s)}}i&64&&D_(n),i&512&&Co(n,n.return);break;case 3:if(Ii(t,n),i&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{zv(t,e)}catch(s){ot(n,n.return,s)}}break;case 27:e===null&&i&4&&O_(n);case 26:case 5:Ii(t,n),e===null&&i&4&&U_(n),i&512&&Co(n,n.return);break;case 12:Ii(t,n);break;case 31:Ii(t,n),i&4&&I_(t,n);break;case 13:Ii(t,n),i&4&&z_(t,n),i&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=xM.bind(null,n),BM(t,n))));break;case 22:if(i=n.memoizedState!==null||Wi,!i){e=e!==null&&e.memoizedState!==null||Gt,a=Wi;var r=Gt;Wi=i,(Gt=e)&&!r?Xi(t,n,(n.subtreeFlags&8772)!==0):Ii(t,n),Wi=a,Gt=r}break;case 30:break;default:Ii(t,n)}}function F_(t){var e=t.alternate;e!==null&&(t.alternate=null,F_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&dp(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Tt=null,Sn=!1;function Bi(t,e,n){for(n=n.child;n!==null;)B_(t,e,n),n=n.sibling}function B_(t,e,n){if(Bn&&typeof Bn.onCommitFiberUnmount=="function")try{Bn.onCommitFiberUnmount(Jo,n)}catch{}switch(n.tag){case 26:Gt||bi(n,e),Bi(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Gt||bi(n,e);var i=Tt,a=Sn;$a(n.type)&&(Tt=n.stateNode,Sn=!1),Bi(t,e,n),Lo(n.stateNode),Tt=i,Sn=a;break;case 5:Gt||bi(n,e);case 6:if(i=Tt,a=Sn,Tt=null,Bi(t,e,n),Tt=i,Sn=a,Tt!==null)if(Sn)try{(Tt.nodeType===9?Tt.body:Tt.nodeName==="HTML"?Tt.ownerDocument.body:Tt).removeChild(n.stateNode)}catch(r){ot(n,e,r)}else try{Tt.removeChild(n.stateNode)}catch(r){ot(n,e,r)}break;case 18:Tt!==null&&(Sn?(t=Tt,Y0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Ls(t)):Y0(Tt,n.stateNode));break;case 4:i=Tt,a=Sn,Tt=n.stateNode.containerInfo,Sn=!0,Bi(t,e,n),Tt=i,Sn=a;break;case 0:case 11:case 14:case 15:Za(2,n,e),Gt||Za(4,n,e),Bi(t,e,n);break;case 1:Gt||(bi(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&N_(n,e,i)),Bi(t,e,n);break;case 21:Bi(t,e,n);break;case 22:Gt=(i=Gt)||n.memoizedState!==null,Bi(t,e,n),Gt=i;break;default:Bi(t,e,n)}}function I_(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ls(t)}catch(n){ot(e,e.return,n)}}}function z_(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ls(t)}catch(n){ot(e,e.return,n)}}function cM(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new P0),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new P0),e;default:throw Error(Q(435,t.tag))}}function Dl(t,e){var n=cM(t);e.forEach(function(i){if(!n.has(i)){n.add(i);var a=vM.bind(null,t,i);i.then(a,a)}})}function xn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],r=t,s=e,o=s;e:for(;o!==null;){switch(o.tag){case 27:if($a(o.type)){Tt=o.stateNode,Sn=!1;break e}break;case 5:Tt=o.stateNode,Sn=!1;break e;case 3:case 4:Tt=o.stateNode.containerInfo,Sn=!0;break e}o=o.return}if(Tt===null)throw Error(Q(160));B_(r,s,a),Tt=null,Sn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)H_(e,t),e=e.sibling}var ci=null;function H_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:xn(e,t),vn(t),i&4&&(Za(3,t,t.return),rl(3,t),Za(5,t,t.return));break;case 1:xn(e,t),vn(t),i&512&&(Gt||n===null||bi(n,n.return)),i&64&&Wi&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=ci;if(xn(e,t),vn(t),i&512&&(Gt||n===null||bi(n,n.return)),i&4){var r=n!==null?n.memoizedState:null;if(i=t.memoizedState,n===null)if(i===null)if(t.stateNode===null){e:{i=t.type,n=t.memoizedProps,a=a.ownerDocument||a;t:switch(i){case"title":r=a.getElementsByTagName("title")[0],(!r||r[tl]||r[nn]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=a.createElement(i),a.head.insertBefore(r,a.querySelector("head > title"))),on(r,i,n),r[nn]=t,$t(r),i=r;break e;case"link":var s=tg("link","href",a).get(i+(n.href||""));if(s){for(var o=0;o<s.length;o++)if(r=s[o],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(o,1);break t}}r=a.createElement(i),on(r,i,n),a.head.appendChild(r);break;case"meta":if(s=tg("meta","content",a).get(i+(n.content||""))){for(o=0;o<s.length;o++)if(r=s[o],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(o,1);break t}}r=a.createElement(i),on(r,i,n),a.head.appendChild(r);break;default:throw Error(Q(468,i))}r[nn]=t,$t(r),i=r}t.stateNode=i}else ng(a,t.type,t.stateNode);else t.stateNode=eg(a,i,t.memoizedProps);else r!==i?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,i===null?ng(a,t.type,t.stateNode):eg(a,i,t.memoizedProps)):i===null&&t.stateNode!==null&&gf(t,t.memoizedProps,n.memoizedProps)}break;case 27:xn(e,t),vn(t),i&512&&(Gt||n===null||bi(n,n.return)),n!==null&&i&4&&gf(t,t.memoizedProps,n.memoizedProps);break;case 5:if(xn(e,t),vn(t),i&512&&(Gt||n===null||bi(n,n.return)),t.flags&32){a=t.stateNode;try{Ts(a,"")}catch(x){ot(t,t.return,x)}}i&4&&t.stateNode!=null&&(a=t.memoizedProps,gf(t,a,n!==null?n.memoizedProps:a)),i&1024&&(vf=!0);break;case 6:if(xn(e,t),vn(t),i&4){if(t.stateNode===null)throw Error(Q(162));i=t.memoizedProps,n=t.stateNode;try{n.nodeValue=i}catch(x){ot(t,t.return,x)}}break;case 3:if(_c=null,a=ci,ci=eu(e.containerInfo),xn(e,t),ci=a,vn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ls(e.containerInfo)}catch(x){ot(t,t.return,x)}vf&&(vf=!1,G_(t));break;case 4:i=ci,ci=eu(t.stateNode.containerInfo),xn(e,t),vn(t),ci=i;break;case 12:xn(e,t),vn(t);break;case 31:xn(e,t),vn(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Dl(t,i)));break;case 13:xn(e,t),vn(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Du=Fn()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Dl(t,i)));break;case 22:a=t.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=Wi,d=Gt;if(Wi=c||a,Gt=d||l,xn(e,t),Gt=d,Wi=c,vn(t),i&8192)e:for(e=t.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,a&&(n===null||l||Wi||Gt||cr(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){l=n=e;try{if(r=l.stateNode,a)s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{o=l.stateNode;var h=l.memoizedProps.style,u=h!=null&&h.hasOwnProperty("display")?h.display:null;o.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(x){ot(l,l.return,x)}}}else if(e.tag===6){if(n===null){l=e;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(x){ot(l,l.return,x)}}}else if(e.tag===18){if(n===null){l=e;try{var p=l.stateNode;a?Z0(p,!0):Z0(l.stateNode,!1)}catch(x){ot(l,l.return,x)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Dl(t,n))));break;case 19:xn(e,t),vn(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Dl(t,i)));break;case 30:break;case 21:break;default:xn(e,t),vn(t)}}function vn(t){var e=t.flags;if(e&2){try{for(var n,i=t.return;i!==null;){if(L_(i)){n=i;break}i=i.return}if(n==null)throw Error(Q(160));switch(n.tag){case 27:var a=n.stateNode,r=xf(t);Wc(t,r,a);break;case 5:var s=n.stateNode;n.flags&32&&(Ts(s,""),n.flags&=-33);var o=xf(t);Wc(t,o,s);break;case 3:case 4:var l=n.stateNode.containerInfo,c=xf(t);jd(t,c,l);break;default:throw Error(Q(161))}}catch(d){ot(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function G_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;G_(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Ii(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)P_(t,e.alternate,e),e=e.sibling}function cr(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Za(4,e,e.return),cr(e);break;case 1:bi(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&N_(e,e.return,n),cr(e);break;case 27:Lo(e.stateNode);case 26:case 5:bi(e,e.return),cr(e);break;case 22:e.memoizedState===null&&cr(e);break;case 30:cr(e);break;default:cr(e)}t=t.sibling}}function Xi(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,a=t,r=e,s=r.flags;switch(r.tag){case 0:case 11:case 15:Xi(a,r,n),rl(4,r);break;case 1:if(Xi(a,r,n),i=r,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){ot(i,i.return,c)}if(i=r,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)Iv(l[a],o)}catch(c){ot(i,i.return,c)}}n&&s&64&&D_(r),Co(r,r.return);break;case 27:O_(r);case 26:case 5:Xi(a,r,n),n&&i===null&&s&4&&U_(r),Co(r,r.return);break;case 12:Xi(a,r,n);break;case 31:Xi(a,r,n),n&&s&4&&I_(a,r);break;case 13:Xi(a,r,n),n&&s&4&&z_(a,r);break;case 22:r.memoizedState===null&&Xi(a,r,n),Co(r,r.return);break;case 30:break;default:Xi(a,r,n)}e=e.sibling}}function Xp(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&il(n))}function jp(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&il(t))}function ri(t,e,n,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)V_(t,e,n,i),e=e.sibling}function V_(t,e,n,i){var a=e.flags;switch(e.tag){case 0:case 11:case 15:ri(t,e,n,i),a&2048&&rl(9,e);break;case 1:ri(t,e,n,i);break;case 3:ri(t,e,n,i),a&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&il(t)));break;case 12:if(a&2048){ri(t,e,n,i),t=e.stateNode;try{var r=e.memoizedProps,s=r.id,o=r.onPostCommit;typeof o=="function"&&o(s,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(l){ot(e,e.return,l)}}else ri(t,e,n,i);break;case 31:ri(t,e,n,i);break;case 13:ri(t,e,n,i);break;case 23:break;case 22:r=e.stateNode,s=e.alternate,e.memoizedState!==null?r._visibility&2?ri(t,e,n,i):Do(t,e):r._visibility&2?ri(t,e,n,i):(r._visibility|=2,es(t,e,n,i,(e.subtreeFlags&10256)!==0||!1)),a&2048&&Xp(s,e);break;case 24:ri(t,e,n,i),a&2048&&jp(e.alternate,e);break;default:ri(t,e,n,i)}}function es(t,e,n,i,a){for(a=a&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var r=t,s=e,o=n,l=i,c=s.flags;switch(s.tag){case 0:case 11:case 15:es(r,s,o,l,a),rl(8,s);break;case 23:break;case 22:var d=s.stateNode;s.memoizedState!==null?d._visibility&2?es(r,s,o,l,a):Do(r,s):(d._visibility|=2,es(r,s,o,l,a)),a&&c&2048&&Xp(s.alternate,s);break;case 24:es(r,s,o,l,a),a&&c&2048&&jp(s.alternate,s);break;default:es(r,s,o,l,a)}e=e.sibling}}function Do(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,a=i.flags;switch(i.tag){case 22:Do(n,i),a&2048&&Xp(i.alternate,i);break;case 24:Do(n,i),a&2048&&jp(i.alternate,i);break;default:Do(n,i)}e=e.sibling}}var go=8192;function Ir(t,e,n){if(t.subtreeFlags&go)for(t=t.child;t!==null;)k_(t,e,n),t=t.sibling}function k_(t,e,n){switch(t.tag){case 26:Ir(t,e,n),t.flags&go&&t.memoizedState!==null&&ZM(n,ci,t.memoizedState,t.memoizedProps);break;case 5:Ir(t,e,n);break;case 3:case 4:var i=ci;ci=eu(t.stateNode.containerInfo),Ir(t,e,n),ci=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=go,go=16777216,Ir(t,e,n),go=i):Ir(t,e,n));break;default:Ir(t,e,n)}}function X_(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function to(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];Jt=i,W_(i,t)}X_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)j_(t),t=t.sibling}function j_(t){switch(t.tag){case 0:case 11:case 15:to(t),t.flags&2048&&Za(9,t,t.return);break;case 3:to(t);break;case 12:to(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,xc(t)):to(t);break;default:to(t)}}function xc(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];Jt=i,W_(i,t)}X_(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Za(8,e,e.return),xc(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,xc(e));break;default:xc(e)}t=t.sibling}}function W_(t,e){for(;Jt!==null;){var n=Jt;switch(n.tag){case 0:case 11:case 15:Za(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:il(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Jt=i;else e:for(n=t;Jt!==null;){i=Jt;var a=i.sibling,r=i.return;if(F_(i),i===n){Jt=null;break e}if(a!==null){a.return=r,Jt=a;break e}Jt=r}}}var uM={getCacheForType:function(t){var e=rn(Vt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return rn(Vt).controller.signal}},fM=typeof WeakMap=="function"?WeakMap:Map,nt=0,gt=null,je=null,Ze=0,st=0,Un=null,Oa=!1,ks=!1,Wp=!1,la=0,Ut=0,Ka=0,Sr=0,qp=0,Pn=0,Cs=0,No=null,yn=null,Wd=!1,Du=0,q_=0,qc=1/0,Yc=null,Va=null,qt=0,ka=null,Ds=null,ea=0,qd=0,Yd=null,Y_=null,Uo=0,Zd=null;function zn(){return nt&2&&Ze!==0?Ze&-Ze:De.T!==null?Zp():iv()}function Z_(){if(Pn===0)if(!(Ze&536870912)||Je){var t=Ml;Ml<<=1,!(Ml&3932160)&&(Ml=262144),Pn=t}else Pn=536870912;return t=Gn.current,t!==null&&(t.flags|=32),Pn}function Mn(t,e,n){(t===gt&&(st===2||st===9)||t.cancelPendingCommit!==null)&&(Ns(t,0),Pa(t,Ze,Pn,!1)),el(t,n),(!(nt&2)||t!==gt)&&(t===gt&&(!(nt&2)&&(Sr|=n),Ut===4&&Pa(t,Ze,Pn,!1)),Li(t))}function K_(t,e,n){if(nt&6)throw Error(Q(327));var i=!n&&(e&127)===0&&(e&t.expiredLanes)===0||$o(t,e),a=i?pM(t,e):_f(t,e,!0),r=i;do{if(a===0){ks&&!i&&Pa(t,e,0,!1);break}else{if(n=t.current.alternate,r&&!dM(n)){a=_f(t,e,!1),r=!1;continue}if(a===2){if(r=e,t.errorRecoveryDisabledLanes&r)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;e:{var o=t;a=No;var l=o.current.memoizedState.isDehydrated;if(l&&(Ns(o,s).flags|=256),s=_f(o,s,!1),s!==2){if(Wp&&!l){o.errorRecoveryDisabledLanes|=r,Sr|=r,a=4;break e}r=yn,yn=a,r!==null&&(yn===null?yn=r:yn.push.apply(yn,r))}a=s}if(r=!1,a!==2)continue}}if(a===1){Ns(t,0),Pa(t,e,0,!0);break}e:{switch(i=t,r=a,r){case 0:case 1:throw Error(Q(345));case 4:if((e&4194048)!==e)break;case 6:Pa(i,e,Pn,!Oa);break e;case 2:yn=null;break;case 3:case 5:break;default:throw Error(Q(329))}if((e&62914560)===e&&(a=Du+300-Fn(),10<a)){if(Pa(i,e,Pn,!Oa),_u(i,0,!0)!==0)break e;ea=e,i.timeoutHandle=g1(F0.bind(null,i,n,yn,Yc,Wd,e,Pn,Sr,Cs,Oa,r,"Throttled",-0,0),a);break e}F0(i,n,yn,Yc,Wd,e,Pn,Sr,Cs,Oa,r,null,-0,0)}}break}while(!0);Li(t)}function F0(t,e,n,i,a,r,s,o,l,c,d,h,u,p){if(t.timeoutHandle=-1,h=e.subtreeFlags,h&8192||(h&16785408)===16785408){h={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zi},k_(e,r,h);var x=(r&62914560)===r?Du-Fn():(r&4194048)===r?q_-Fn():0;if(x=KM(h,x),x!==null){ea=r,t.cancelPendingCommit=x(I0.bind(null,t,e,r,n,i,a,s,o,l,d,h,null,u,p)),Pa(t,r,s,!c);return}}I0(t,e,r,n,i,a,s,o,l)}function dM(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],r=a.getSnapshot;a=a.value;try{if(!Hn(r(),a))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Pa(t,e,n,i){e&=~qp,e&=~Sr,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var a=e;0<a;){var r=31-In(a),s=1<<r;i[r]=-1,a&=~s}n!==0&&ev(t,n,e)}function Nu(){return nt&6?!0:(sl(0),!1)}function Yp(){if(je!==null){if(st===0)var t=je.return;else t=je,Ki=Lr=null,Lp(t),vs=null,Ho=0,t=je;for(;t!==null;)C_(t.alternate,t),t=t.return;je=null}}function Ns(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,UM(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),ea=0,Yp(),gt=t,je=n=Ji(t.current,null),Ze=e,st=0,Un=null,Oa=!1,ks=$o(t,e),Wp=!1,Cs=Pn=qp=Sr=Ka=Ut=0,yn=No=null,Wd=!1,e&8&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var a=31-In(i),r=1<<a;e|=t[a],i&=~r}return la=e,bu(),n}function Q_(t,e){Ie=null,De.H=Vo,e===Vs||e===Tu?(e=p0(),st=3):e===Ap?(e=p0(),st=4):st=e===Vp?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Un=e,je===null&&(Ut=1,Xc(t,Qn(e,t.current)))}function J_(){var t=Gn.current;return t===null?!0:(Ze&4194048)===Ze?ei===null:(Ze&62914560)===Ze||Ze&536870912?t===ei:!1}function $_(){var t=De.H;return De.H=Vo,t===null?Vo:t}function e1(){var t=De.A;return De.A=uM,t}function Zc(){Ut=4,Oa||(Ze&4194048)!==Ze&&Gn.current!==null||(ks=!0),!(Ka&134217727)&&!(Sr&134217727)||gt===null||Pa(gt,Ze,Pn,!1)}function _f(t,e,n){var i=nt;nt|=2;var a=$_(),r=e1();(gt!==t||Ze!==e)&&(Yc=null,Ns(t,e)),e=!1;var s=Ut;e:do try{if(st!==0&&je!==null){var o=je,l=Un;switch(st){case 8:Yp(),s=6;break e;case 3:case 2:case 9:case 6:Gn.current===null&&(e=!0);var c=st;if(st=0,Un=null,hs(t,o,l,c),n&&ks){s=0;break e}break;default:c=st,st=0,Un=null,hs(t,o,l,c)}}hM(),s=Ut;break}catch(d){Q_(t,d)}while(!0);return e&&t.shellSuspendCounter++,Ki=Lr=null,nt=i,De.H=a,De.A=r,je===null&&(gt=null,Ze=0,bu()),s}function hM(){for(;je!==null;)t1(je)}function pM(t,e){var n=nt;nt|=2;var i=$_(),a=e1();gt!==t||Ze!==e?(Yc=null,qc=Fn()+500,Ns(t,e)):ks=$o(t,e);e:do try{if(st!==0&&je!==null){e=je;var r=Un;t:switch(st){case 1:st=0,Un=null,hs(t,e,r,1);break;case 2:case 9:if(h0(r)){st=0,Un=null,B0(e);break}e=function(){st!==2&&st!==9||gt!==t||(st=7),Li(t)},r.then(e,e);break e;case 3:st=7;break e;case 4:st=5;break e;case 7:h0(r)?(st=0,Un=null,B0(e)):(st=0,Un=null,hs(t,e,r,7));break;case 5:var s=null;switch(je.tag){case 26:s=je.memoizedState;case 5:case 27:var o=je;if(s?y1(s):o.stateNode.complete){st=0,Un=null;var l=o.sibling;if(l!==null)je=l;else{var c=o.return;c!==null?(je=c,Uu(c)):je=null}break t}}st=0,Un=null,hs(t,e,r,5);break;case 6:st=0,Un=null,hs(t,e,r,6);break;case 8:Yp(),Ut=6;break e;default:throw Error(Q(462))}}mM();break}catch(d){Q_(t,d)}while(!0);return Ki=Lr=null,De.H=i,De.A=a,nt=n,je!==null?0:(gt=null,Ze=0,bu(),Ut)}function mM(){for(;je!==null&&!Iy();)t1(je)}function t1(t){var e=R_(t.alternate,t,la);t.memoizedProps=t.pendingProps,e===null?Uu(t):je=e}function B0(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=D0(n,e,e.pendingProps,e.type,void 0,Ze);break;case 11:e=D0(n,e,e.pendingProps,e.type.render,e.ref,Ze);break;case 5:Lp(e);default:C_(n,e),e=je=Cv(e,la),e=R_(n,e,la)}t.memoizedProps=t.pendingProps,e===null?Uu(t):je=e}function hs(t,e,n,i){Ki=Lr=null,Lp(e),vs=null,Ho=0;var a=e.return;try{if(iM(t,a,e,n,Ze)){Ut=1,Xc(t,Qn(n,t.current)),je=null;return}}catch(r){if(a!==null)throw je=a,r;Ut=1,Xc(t,Qn(n,t.current)),je=null;return}e.flags&32768?(Je||i===1?t=!0:ks||Ze&536870912?t=!1:(Oa=t=!0,(i===2||i===9||i===3||i===6)&&(i=Gn.current,i!==null&&i.tag===13&&(i.flags|=16384))),n1(e,t)):Uu(e)}function Uu(t){var e=t;do{if(e.flags&32768){n1(e,Oa);return}t=e.return;var n=sM(e.alternate,e,la);if(n!==null){je=n;return}if(e=e.sibling,e!==null){je=e;return}je=e=t}while(e!==null);Ut===0&&(Ut=5)}function n1(t,e){do{var n=oM(t.alternate,t);if(n!==null){n.flags&=32767,je=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){je=t;return}je=t=n}while(t!==null);Ut=6,je=null}function I0(t,e,n,i,a,r,s,o,l){t.cancelPendingCommit=null;do Lu();while(qt!==0);if(nt&6)throw Error(Q(327));if(e!==null){if(e===t.current)throw Error(Q(177));if(r=e.lanes|e.childLanes,r|=_p,Yy(t,n,r,s,o,l),t===gt&&(je=gt=null,Ze=0),Ds=e,ka=t,ea=n,qd=r,Yd=a,Y_=i,e.subtreeFlags&10256||e.flags&10256?(t.callbackNode=null,t.callbackPriority=0,_M(Lc,function(){return o1(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,e.subtreeFlags&13878||i){i=De.T,De.T=null,a=it.p,it.p=2,s=nt,nt|=4;try{lM(t,e,n)}finally{nt=s,it.p=a,De.T=i}}qt=1,i1(),a1(),r1()}}function i1(){if(qt===1){qt=0;var t=ka,e=Ds,n=(e.flags&13878)!==0;if(e.subtreeFlags&13878||n){n=De.T,De.T=null;var i=it.p;it.p=2;var a=nt;nt|=4;try{H_(e,t);var r=$d,s=yv(t.containerInfo),o=r.focusedElem,l=r.selectionRange;if(s!==o&&o&&o.ownerDocument&&Sv(o.ownerDocument.documentElement,o)){if(l!==null&&vp(o)){var c=l.start,d=l.end;if(d===void 0&&(d=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(d,o.value.length);else{var h=o.ownerDocument||document,u=h&&h.defaultView||window;if(u.getSelection){var p=u.getSelection(),x=o.textContent.length,M=Math.min(l.start,x),m=l.end===void 0?M:Math.min(l.end,x);!p.extend&&M>m&&(s=m,m=M,M=s);var f=s0(o,M),g=s0(o,m);if(f&&g&&(p.rangeCount!==1||p.anchorNode!==f.node||p.anchorOffset!==f.offset||p.focusNode!==g.node||p.focusOffset!==g.offset)){var v=h.createRange();v.setStart(f.node,f.offset),p.removeAllRanges(),M>m?(p.addRange(v),p.extend(g.node,g.offset)):(v.setEnd(g.node,g.offset),p.addRange(v))}}}}for(h=[],p=o;p=p.parentNode;)p.nodeType===1&&h.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<h.length;o++){var y=h[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}iu=!!Jd,$d=Jd=null}finally{nt=a,it.p=i,De.T=n}}t.current=e,qt=2}}function a1(){if(qt===2){qt=0;var t=ka,e=Ds,n=(e.flags&8772)!==0;if(e.subtreeFlags&8772||n){n=De.T,De.T=null;var i=it.p;it.p=2;var a=nt;nt|=4;try{P_(t,e.alternate,e)}finally{nt=a,it.p=i,De.T=n}}qt=3}}function r1(){if(qt===4||qt===3){qt=0,zy();var t=ka,e=Ds,n=ea,i=Y_;e.subtreeFlags&10256||e.flags&10256?qt=5:(qt=0,Ds=ka=null,s1(t,t.pendingLanes));var a=t.pendingLanes;if(a===0&&(Va=null),fp(n),e=e.stateNode,Bn&&typeof Bn.onCommitFiberRoot=="function")try{Bn.onCommitFiberRoot(Jo,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=De.T,a=it.p,it.p=2,De.T=null;try{for(var r=t.onRecoverableError,s=0;s<i.length;s++){var o=i[s];r(o.value,{componentStack:o.stack})}}finally{De.T=e,it.p=a}}ea&3&&Lu(),Li(t),a=t.pendingLanes,n&261930&&a&42?t===Zd?Uo++:(Uo=0,Zd=t):Uo=0,sl(0)}}function s1(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,il(e)))}function Lu(){return i1(),a1(),r1(),o1()}function o1(){if(qt!==5)return!1;var t=ka,e=qd;qd=0;var n=fp(ea),i=De.T,a=it.p;try{it.p=32>n?32:n,De.T=null,n=Yd,Yd=null;var r=ka,s=ea;if(qt=0,Ds=ka=null,ea=0,nt&6)throw Error(Q(331));var o=nt;if(nt|=4,j_(r.current),V_(r,r.current,s,n),nt=o,sl(0,!1),Bn&&typeof Bn.onPostCommitFiberRoot=="function")try{Bn.onPostCommitFiberRoot(Jo,r)}catch{}return!0}finally{it.p=a,De.T=i,s1(t,e)}}function z0(t,e,n){e=Qn(n,e),e=Vd(t.stateNode,e,2),t=Ga(t,e,2),t!==null&&(el(t,2),Li(t))}function ot(t,e,n){if(t.tag===3)z0(t,t,n);else for(;e!==null;){if(e.tag===3){z0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Va===null||!Va.has(i))){t=Qn(n,t),n=M_(2),i=Ga(e,n,2),i!==null&&(b_(n,i,e,t),el(i,2),Li(i));break}}e=e.return}}function Sf(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new fM;var a=new Set;i.set(e,a)}else a=i.get(e),a===void 0&&(a=new Set,i.set(e,a));a.has(n)||(Wp=!0,a.add(n),t=gM.bind(null,t,e,n),e.then(t,t))}function gM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,gt===t&&(Ze&n)===n&&(Ut===4||Ut===3&&(Ze&62914560)===Ze&&300>Fn()-Du?!(nt&2)&&Ns(t,0):qp|=n,Cs===Ze&&(Cs=0)),Li(t)}function l1(t,e){e===0&&(e=$x()),t=Ur(t,e),t!==null&&(el(t,e),Li(t))}function xM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),l1(t,n)}function vM(t,e){var n=0;switch(t.tag){case 31:case 13:var i=t.stateNode,a=t.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(Q(314))}i!==null&&i.delete(e),l1(t,n)}function _M(t,e){return cp(t,e)}var Kc=null,ts=null,Kd=!1,Qc=!1,yf=!1,Fa=0;function Li(t){t!==ts&&t.next===null&&(ts===null?Kc=ts=t:ts=ts.next=t),Qc=!0,Kd||(Kd=!0,yM())}function sl(t,e){if(!yf&&Qc){yf=!0;do for(var n=!1,i=Kc;i!==null;){if(t!==0){var a=i.pendingLanes;if(a===0)var r=0;else{var s=i.suspendedLanes,o=i.pingedLanes;r=(1<<31-In(42|t)+1)-1,r&=a&~(s&~o),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,H0(i,r))}else r=Ze,r=_u(i,i===gt?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(r&3)||$o(i,r)||(n=!0,H0(i,r));i=i.next}while(n);yf=!1}}function SM(){c1()}function c1(){Qc=Kd=!1;var t=0;Fa!==0&&NM()&&(t=Fa);for(var e=Fn(),n=null,i=Kc;i!==null;){var a=i.next,r=u1(i,e);r===0?(i.next=null,n===null?Kc=a:n.next=a,a===null&&(ts=n)):(n=i,(t!==0||r&3)&&(Qc=!0)),i=a}qt!==0&&qt!==5||sl(t),Fa!==0&&(Fa=0)}function u1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,a=t.expirationTimes,r=t.pendingLanes&-62914561;0<r;){var s=31-In(r),o=1<<s,l=a[s];l===-1?(!(o&n)||o&i)&&(a[s]=qy(o,e)):l<=e&&(t.expiredLanes|=o),r&=~o}if(e=gt,n=Ze,n=_u(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,n===0||t===e&&(st===2||st===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&Yu(i),t.callbackNode=null,t.callbackPriority=0;if(!(n&3)||$o(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&Yu(i),fp(n)){case 2:case 8:n=Qx;break;case 32:n=Lc;break;case 268435456:n=Jx;break;default:n=Lc}return i=f1.bind(null,t),n=cp(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&Yu(i),t.callbackPriority=2,t.callbackNode=null,2}function f1(t,e){if(qt!==0&&qt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(Lu()&&t.callbackNode!==n)return null;var i=Ze;return i=_u(t,t===gt?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(K_(t,i,e),u1(t,Fn()),t.callbackNode!=null&&t.callbackNode===n?f1.bind(null,t):null)}function H0(t,e){if(Lu())return null;K_(t,e,!0)}function yM(){LM(function(){nt&6?cp(Kx,SM):c1()})}function Zp(){if(Fa===0){var t=As;t===0&&(t=yl,yl<<=1,!(yl&261888)&&(yl=256)),Fa=t}return Fa}function G0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:lc(""+t)}function V0(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function MM(t,e,n,i,a){if(e==="submit"&&n&&n.stateNode===a){var r=G0((a[Tn]||null).action),s=i.submitter;s&&(e=(e=s[Tn]||null)?G0(e.formAction):s.getAttribute("formAction"),e!==null&&(r=e,s=null));var o=new Su("action","action",null,i,a);t.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Fa!==0){var l=s?V0(a,s):new FormData(a);Hd(n,{pending:!0,data:l,method:a.method,action:r},null,l)}}else typeof r=="function"&&(o.preventDefault(),l=s?V0(a,s):new FormData(a),Hd(n,{pending:!0,data:l,method:a.method,action:r},r,l))},currentTarget:a}]})}}for(var Mf=0;Mf<Rd.length;Mf++){var bf=Rd[Mf],bM=bf.toLowerCase(),EM=bf[0].toUpperCase()+bf.slice(1);pi(bM,"on"+EM)}pi(bv,"onAnimationEnd");pi(Ev,"onAnimationIteration");pi(Tv,"onAnimationStart");pi("dblclick","onDoubleClick");pi("focusin","onFocus");pi("focusout","onBlur");pi(H2,"onTransitionRun");pi(G2,"onTransitionStart");pi(V2,"onTransitionCancel");pi(Av,"onTransitionEnd");Es("onMouseEnter",["mouseout","mouseover"]);Es("onMouseLeave",["mouseout","mouseover"]);Es("onPointerEnter",["pointerout","pointerover"]);Es("onPointerLeave",["pointerout","pointerover"]);Cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),TM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ko));function d1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],a=i.event;i=i.listeners;e:{var r=void 0;if(e)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==r&&a.isPropagationStopped())break e;r=o,a.currentTarget=c;try{r(a)}catch(d){Pc(d)}a.currentTarget=null,r=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,c=o.currentTarget,o=o.listener,l!==r&&a.isPropagationStopped())break e;r=o,a.currentTarget=c;try{r(a)}catch(d){Pc(d)}a.currentTarget=null,r=l}}}}function Xe(t,e){var n=e[Sd];n===void 0&&(n=e[Sd]=new Set);var i=t+"__bubble";n.has(i)||(h1(e,t,2,!1),n.add(i))}function Ef(t,e,n){var i=0;e&&(i|=4),h1(n,t,i,e)}var Nl="_reactListening"+Math.random().toString(36).slice(2);function Kp(t){if(!t[Nl]){t[Nl]=!0,av.forEach(function(n){n!=="selectionchange"&&(TM.has(n)||Ef(n,!1,t),Ef(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Nl]||(e[Nl]=!0,Ef("selectionchange",!1,e))}}function h1(t,e,n,i){switch(A1(e)){case 2:var a=$M;break;case 8:a=eb;break;default:a=em}n=a.bind(null,e,n,t),a=void 0,!Td||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),i?a!==void 0?t.addEventListener(e,n,{capture:!0,passive:a}):t.addEventListener(e,n,!0):a!==void 0?t.addEventListener(e,n,{passive:a}):t.addEventListener(e,n,!1)}function Tf(t,e,n,i,a){var r=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===a)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===a)return;s=s.return}for(;o!==null;){if(s=as(o),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){i=r=s;continue e}o=o.parentNode}}i=i.return}dv(function(){var c=r,d=pp(n),h=[];e:{var u=wv.get(t);if(u!==void 0){var p=Su,x=t;switch(t){case"keypress":if(uc(n)===0)break e;case"keydown":case"keyup":p=v2;break;case"focusin":x="focus",p=$u;break;case"focusout":x="blur",p=$u;break;case"beforeblur":case"afterblur":p=$u;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Km;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=s2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=y2;break;case bv:case Ev:case Tv:p=c2;break;case Av:p=b2;break;case"scroll":case"scrollend":p=a2;break;case"wheel":p=T2;break;case"copy":case"cut":case"paste":p=f2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Jm;break;case"toggle":case"beforetoggle":p=w2}var M=(e&4)!==0,m=!M&&(t==="scroll"||t==="scrollend"),f=M?u!==null?u+"Capture":null:u;M=[];for(var g=c,v;g!==null;){var y=g;if(v=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||v===null||f===null||(y=Po(g,f),y!=null&&M.push(Xo(g,y,v))),m)break;g=g.return}0<M.length&&(u=new p(u,x,null,n,d),h.push({event:u,listeners:M}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",u&&n!==Ed&&(x=n.relatedTarget||n.fromElement)&&(as(x)||x[zs]))break e;if((p||u)&&(u=d.window===d?d:(u=d.ownerDocument)?u.defaultView||u.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=c,x=x?as(x):null,x!==null&&(m=Qo(x),M=x.tag,x!==m||M!==5&&M!==27&&M!==6)&&(x=null)):(p=null,x=c),p!==x)){if(M=Km,y="onMouseLeave",f="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(M=Jm,y="onPointerLeave",f="onPointerEnter",g="pointer"),m=p==null?u:po(p),v=x==null?u:po(x),u=new M(y,g+"leave",p,n,d),u.target=m,u.relatedTarget=v,y=null,as(d)===c&&(M=new M(f,g+"enter",x,n,d),M.target=v,M.relatedTarget=m,y=M),m=y,p&&x)t:{for(M=AM,f=p,g=x,v=0,y=f;y;y=M(y))v++;y=0;for(var C=g;C;C=M(C))y++;for(;0<v-y;)f=M(f),v--;for(;0<y-v;)g=M(g),y--;for(;v--;){if(f===g||g!==null&&f===g.alternate){M=f;break t}f=M(f),g=M(g)}M=null}else M=null;p!==null&&k0(h,u,p,M,!1),x!==null&&m!==null&&k0(h,m,x,M,!0)}}e:{if(u=c?po(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var A=n0;else if(t0(u))if(vv)A=B2;else{A=P2;var R=O2}else p=u.nodeName,!p||p.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&hp(c.elementType)&&(A=n0):A=F2;if(A&&(A=A(t,c))){xv(h,A,n,d);break e}R&&R(t,u,c),t==="focusout"&&c&&u.type==="number"&&c.memoizedProps.value!=null&&bd(u,"number",u.value)}switch(R=c?po(c):window,t){case"focusin":(t0(R)||R.contentEditable==="true")&&(os=R,Ad=c,bo=null);break;case"focusout":bo=Ad=os=null;break;case"mousedown":wd=!0;break;case"contextmenu":case"mouseup":case"dragend":wd=!1,o0(h,n,d);break;case"selectionchange":if(z2)break;case"keydown":case"keyup":o0(h,n,d)}var S;if(xp)e:{switch(t){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else ss?mv(t,n)&&(w="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(pv&&n.locale!=="ko"&&(ss||w!=="onCompositionStart"?w==="onCompositionEnd"&&ss&&(S=hv()):(La=d,mp="value"in La?La.value:La.textContent,ss=!0)),R=Jc(c,w),0<R.length&&(w=new Qm(w,t,null,n,d),h.push({event:w,listeners:R}),S?w.data=S:(S=gv(n),S!==null&&(w.data=S)))),(S=C2?D2(t,n):N2(t,n))&&(w=Jc(c,"onBeforeInput"),0<w.length&&(R=new Qm("onBeforeInput","beforeinput",null,n,d),h.push({event:R,listeners:w}),R.data=S)),MM(h,t,c,n,d)}d1(h,e)})}function Xo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Jc(t,e){for(var n=e+"Capture",i=[];t!==null;){var a=t,r=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||r===null||(a=Po(t,n),a!=null&&i.unshift(Xo(t,a,r)),a=Po(t,e),a!=null&&i.push(Xo(t,a,r))),t.tag===3)return i;t=t.return}return[]}function AM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function k0(t,e,n,i,a){for(var r=e._reactName,s=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=Po(n,r),c!=null&&s.unshift(Xo(n,c,l))):a||(c=Po(n,r),c!=null&&s.push(Xo(n,c,l)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var wM=/\r\n?/g,RM=/\u0000|\uFFFD/g;function X0(t){return(typeof t=="string"?t:""+t).replace(wM,`
`).replace(RM,"")}function p1(t,e){return e=X0(e),X0(t)===e}function dt(t,e,n,i,a,r){switch(n){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||Ts(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&Ts(t,""+i);break;case"className":El(t,"class",i);break;case"tabIndex":El(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":El(t,n,i);break;case"style":fv(t,i,r);break;case"data":if(e!=="object"){El(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=lc(""+i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(e!=="input"&&dt(t,e,"name",a.name,a,null),dt(t,e,"formEncType",a.formEncType,a,null),dt(t,e,"formMethod",a.formMethod,a,null),dt(t,e,"formTarget",a.formTarget,a,null)):(dt(t,e,"encType",a.encType,a,null),dt(t,e,"method",a.method,a,null),dt(t,e,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=lc(""+i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=Zi);break;case"onScroll":i!=null&&Xe("scroll",t);break;case"onScrollEnd":i!=null&&Xe("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Q(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(Q(60));t.innerHTML=n}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=lc(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""+i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":Xe("beforetoggle",t),Xe("toggle",t),oc(t,"popover",i);break;case"xlinkActuate":Pi(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Pi(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Pi(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Pi(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Pi(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Pi(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Pi(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Pi(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Pi(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":oc(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=n2.get(n)||n,oc(t,n,i))}}function Qd(t,e,n,i,a,r){switch(n){case"style":fv(t,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Q(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(Q(60));t.innerHTML=n}}break;case"children":typeof i=="string"?Ts(t,i):(typeof i=="number"||typeof i=="bigint")&&Ts(t,""+i);break;case"onScroll":i!=null&&Xe("scroll",t);break;case"onScrollEnd":i!=null&&Xe("scrollend",t);break;case"onClick":i!=null&&(t.onclick=Zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rv.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),e=n.slice(2,a?n.length-7:void 0),r=t[Tn]||null,r=r!=null?r[n]:null,typeof r=="function"&&t.removeEventListener(e,r,a),typeof i=="function")){typeof r!="function"&&r!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,i,a);break e}n in t?t[n]=i:i===!0?t.setAttribute(n,""):oc(t,n,i)}}}function on(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Xe("error",t),Xe("load",t);var i=!1,a=!1,r;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(s!=null)switch(r){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(Q(137,e));default:dt(t,e,r,s,n,null)}}a&&dt(t,e,"srcSet",n.srcSet,n,null),i&&dt(t,e,"src",n.src,n,null);return;case"input":Xe("invalid",t);var o=r=s=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(d!=null)switch(i){case"name":a=d;break;case"type":s=d;break;case"checked":l=d;break;case"defaultChecked":c=d;break;case"value":r=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(Q(137,e));break;default:dt(t,e,i,d,n,null)}}lv(t,r,o,l,c,s,a,!1);return;case"select":Xe("invalid",t),i=s=r=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":r=o;break;case"defaultValue":s=o;break;case"multiple":i=o;default:dt(t,e,a,o,n,null)}e=r,n=s,t.multiple=!!i,e!=null?ms(t,!!i,e,!1):n!=null&&ms(t,!!i,n,!0);return;case"textarea":Xe("invalid",t),r=a=i=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":i=o;break;case"defaultValue":a=o;break;case"children":r=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(Q(91));break;default:dt(t,e,s,o,n,null)}uv(t,i,a,r);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:dt(t,e,l,i,n,null)}return;case"dialog":Xe("beforetoggle",t),Xe("toggle",t),Xe("cancel",t),Xe("close",t);break;case"iframe":case"object":Xe("load",t);break;case"video":case"audio":for(i=0;i<ko.length;i++)Xe(ko[i],t);break;case"image":Xe("error",t),Xe("load",t);break;case"details":Xe("toggle",t);break;case"embed":case"source":case"link":Xe("error",t),Xe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(Q(137,e));default:dt(t,e,c,i,n,null)}return;default:if(hp(e)){for(d in n)n.hasOwnProperty(d)&&(i=n[d],i!==void 0&&Qd(t,e,d,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&dt(t,e,o,i,n,null))}function CM(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,r=null,s=null,o=null,l=null,c=null,d=null;for(p in n){var h=n[p];if(n.hasOwnProperty(p)&&h!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=h;default:i.hasOwnProperty(p)||dt(t,e,p,null,i,h)}}for(var u in i){var p=i[u];if(h=n[u],i.hasOwnProperty(u)&&(p!=null||h!=null))switch(u){case"type":r=p;break;case"name":a=p;break;case"checked":c=p;break;case"defaultChecked":d=p;break;case"value":s=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(Q(137,e));break;default:p!==h&&dt(t,e,u,p,i,h)}}Md(t,s,o,l,c,d,r,a);return;case"select":p=s=o=u=null;for(r in n)if(l=n[r],n.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(r)||dt(t,e,r,null,i,l)}for(a in i)if(r=i[a],l=n[a],i.hasOwnProperty(a)&&(r!=null||l!=null))switch(a){case"value":u=r;break;case"defaultValue":o=r;break;case"multiple":s=r;default:r!==l&&dt(t,e,a,r,i,l)}e=o,n=s,i=p,u!=null?ms(t,!!n,u,!1):!!i!=!!n&&(e!=null?ms(t,!!n,e,!0):ms(t,!!n,n?[]:"",!1));return;case"textarea":p=u=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:dt(t,e,o,null,i,a)}for(s in i)if(a=i[s],r=n[s],i.hasOwnProperty(s)&&(a!=null||r!=null))switch(s){case"value":u=a;break;case"defaultValue":p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(Q(91));break;default:a!==r&&dt(t,e,s,a,i,r)}cv(t,u,p);return;case"option":for(var x in n)if(u=n[x],n.hasOwnProperty(x)&&u!=null&&!i.hasOwnProperty(x))switch(x){case"selected":t.selected=!1;break;default:dt(t,e,x,null,i,u)}for(l in i)if(u=i[l],p=n[l],i.hasOwnProperty(l)&&u!==p&&(u!=null||p!=null))switch(l){case"selected":t.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:dt(t,e,l,u,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var M in n)u=n[M],n.hasOwnProperty(M)&&u!=null&&!i.hasOwnProperty(M)&&dt(t,e,M,null,i,u);for(c in i)if(u=i[c],p=n[c],i.hasOwnProperty(c)&&u!==p&&(u!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(Q(137,e));break;default:dt(t,e,c,u,i,p)}return;default:if(hp(e)){for(var m in n)u=n[m],n.hasOwnProperty(m)&&u!==void 0&&!i.hasOwnProperty(m)&&Qd(t,e,m,void 0,i,u);for(d in i)u=i[d],p=n[d],!i.hasOwnProperty(d)||u===p||u===void 0&&p===void 0||Qd(t,e,d,u,i,p);return}}for(var f in n)u=n[f],n.hasOwnProperty(f)&&u!=null&&!i.hasOwnProperty(f)&&dt(t,e,f,null,i,u);for(h in i)u=i[h],p=n[h],!i.hasOwnProperty(h)||u===p||u==null&&p==null||dt(t,e,h,u,i,p)}function j0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function DM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],r=a.transferSize,s=a.initiatorType,o=a.duration;if(r&&o&&j0(s)){for(s=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var d=l.transferSize,h=l.initiatorType;d&&j0(h)&&(l=l.responseEnd,s+=d*(l<o?1:(o-c)/(l-c)))}if(--i,e+=8*(r+s)/(a.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Jd=null,$d=null;function $c(t){return t.nodeType===9?t:t.ownerDocument}function W0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function m1(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function eh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Af=null;function NM(){var t=window.event;return t&&t.type==="popstate"?t===Af?!1:(Af=t,!0):(Af=null,!1)}var g1=typeof setTimeout=="function"?setTimeout:void 0,UM=typeof clearTimeout=="function"?clearTimeout:void 0,q0=typeof Promise=="function"?Promise:void 0,LM=typeof queueMicrotask=="function"?queueMicrotask:typeof q0<"u"?function(t){return q0.resolve(null).then(t).catch(OM)}:g1;function OM(t){setTimeout(function(){throw t})}function $a(t){return t==="head"}function Y0(t,e){var n=e,i=0;do{var a=n.nextSibling;if(t.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){t.removeChild(a),Ls(e);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Lo(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,Lo(n);for(var r=n.firstChild;r;){var s=r.nextSibling,o=r.nodeName;r[tl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=s}}else n==="body"&&Lo(t.ownerDocument.body);n=a}while(n);Ls(e)}function Z0(t,e){var n=t;t=0;do{var i=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=i}while(n)}function th(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":th(n),dp(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function PM(t,e,n,i){for(;t.nodeType===1;){var a=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[tl])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(r=t.getAttribute("rel"),r==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(r!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(r=t.getAttribute("src"),(r!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&r&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var r=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===r)return t}else return t;if(t=ti(t.nextSibling),t===null)break}return null}function FM(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ti(t.nextSibling),t===null))return null;return t}function x1(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=ti(t.nextSibling),t===null))return null;return t}function nh(t){return t.data==="$?"||t.data==="$~"}function ih(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function BM(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var i=function(){e(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function ti(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var ah=null;function K0(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return ti(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function Q0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function v1(t,e,n){switch(e=$c(n),t){case"html":if(t=e.documentElement,!t)throw Error(Q(452));return t;case"head":if(t=e.head,!t)throw Error(Q(453));return t;case"body":if(t=e.body,!t)throw Error(Q(454));return t;default:throw Error(Q(451))}}function Lo(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);dp(t)}var ii=new Map,J0=new Set;function eu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var da=it.d;it.d={f:IM,r:zM,D:HM,C:GM,L:VM,m:kM,X:jM,S:XM,M:WM};function IM(){var t=da.f(),e=Nu();return t||e}function zM(t){var e=Hs(t);e!==null&&e.tag===5&&e.type==="form"?f_(e):da.r(t)}var Xs=typeof document>"u"?null:document;function _1(t,e,n){var i=Xs;if(i&&typeof e=="string"&&e){var a=Kn(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),J0.has(a)||(J0.add(a),t={rel:t,crossOrigin:n,href:e},i.querySelector(a)===null&&(e=i.createElement("link"),on(e,"link",t),$t(e),i.head.appendChild(e)))}}function HM(t){da.D(t),_1("dns-prefetch",t,null)}function GM(t,e){da.C(t,e),_1("preconnect",t,e)}function VM(t,e,n){da.L(t,e,n);var i=Xs;if(i&&t&&e){var a='link[rel="preload"][as="'+Kn(e)+'"]';e==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Kn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Kn(n.imageSizes)+'"]')):a+='[href="'+Kn(t)+'"]';var r=a;switch(e){case"style":r=Us(t);break;case"script":r=js(t)}ii.has(r)||(t=Et({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),ii.set(r,t),i.querySelector(a)!==null||e==="style"&&i.querySelector(ol(r))||e==="script"&&i.querySelector(ll(r))||(e=i.createElement("link"),on(e,"link",t),$t(e),i.head.appendChild(e)))}}function kM(t,e){da.m(t,e);var n=Xs;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+Kn(i)+'"][href="'+Kn(t)+'"]',r=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=js(t)}if(!ii.has(r)&&(t=Et({rel:"modulepreload",href:t},e),ii.set(r,t),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ll(r)))return}i=n.createElement("link"),on(i,"link",t),$t(i),n.head.appendChild(i)}}}function XM(t,e,n){da.S(t,e,n);var i=Xs;if(i&&t){var a=ps(i).hoistableStyles,r=Us(t);e=e||"default";var s=a.get(r);if(!s){var o={loading:0,preload:null};if(s=i.querySelector(ol(r)))o.loading=5;else{t=Et({rel:"stylesheet",href:t,"data-precedence":e},n),(n=ii.get(r))&&Qp(t,n);var l=s=i.createElement("link");$t(l),on(l,"link",t),l._p=new Promise(function(c,d){l.onload=c,l.onerror=d}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,vc(s,e,i)}s={type:"stylesheet",instance:s,count:1,state:o},a.set(r,s)}}}function jM(t,e){da.X(t,e);var n=Xs;if(n&&t){var i=ps(n).hoistableScripts,a=js(t),r=i.get(a);r||(r=n.querySelector(ll(a)),r||(t=Et({src:t,async:!0},e),(e=ii.get(a))&&Jp(t,e),r=n.createElement("script"),$t(r),on(r,"link",t),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function WM(t,e){da.M(t,e);var n=Xs;if(n&&t){var i=ps(n).hoistableScripts,a=js(t),r=i.get(a);r||(r=n.querySelector(ll(a)),r||(t=Et({src:t,async:!0,type:"module"},e),(e=ii.get(a))&&Jp(t,e),r=n.createElement("script"),$t(r),on(r,"link",t),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function $0(t,e,n,i){var a=(a=Ia.current)?eu(a):null;if(!a)throw Error(Q(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Us(n.href),n=ps(a).hoistableStyles,i=n.get(e),i||(i={type:"style",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Us(n.href);var r=ps(a).hoistableStyles,s=r.get(t);if(s||(a=a.ownerDocument||a,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(t,s),(r=a.querySelector(ol(t)))&&!r._p&&(s.instance=r,s.state.loading=5),ii.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ii.set(t,n),r||qM(a,t,n,s.state))),e&&i===null)throw Error(Q(528,""));return s}if(e&&i!==null)throw Error(Q(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=js(n),n=ps(a).hoistableScripts,i=n.get(e),i||(i={type:"script",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(Q(444,t))}}function Us(t){return'href="'+Kn(t)+'"'}function ol(t){return'link[rel="stylesheet"]['+t+"]"}function S1(t){return Et({},t,{"data-precedence":t.precedence,precedence:null})}function qM(t,e,n,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),on(e,"link",n),$t(e),t.head.appendChild(e))}function js(t){return'[src="'+Kn(t)+'"]'}function ll(t){return"script[async]"+t}function eg(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+Kn(n.href)+'"]');if(i)return e.instance=i,$t(i),i;var a=Et({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),$t(i),on(i,"style",a),vc(i,n.precedence,t),e.instance=i;case"stylesheet":a=Us(n.href);var r=t.querySelector(ol(a));if(r)return e.state.loading|=4,e.instance=r,$t(r),r;i=S1(n),(a=ii.get(a))&&Qp(i,a),r=(t.ownerDocument||t).createElement("link"),$t(r);var s=r;return s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),on(r,"link",i),e.state.loading|=4,vc(r,n.precedence,t),e.instance=r;case"script":return r=js(n.src),(a=t.querySelector(ll(r)))?(e.instance=a,$t(a),a):(i=n,(a=ii.get(r))&&(i=Et({},n),Jp(i,a)),t=t.ownerDocument||t,a=t.createElement("script"),$t(a),on(a,"link",i),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(Q(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(i=e.instance,e.state.loading|=4,vc(i,n.precedence,t));return e.instance}function vc(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,r=a,s=0;s<i.length;s++){var o=i[s];if(o.dataset.precedence===e)r=o;else if(r!==a)break}r?r.parentNode.insertBefore(t,r.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function Qp(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Jp(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var _c=null;function tg(t,e,n){if(_c===null){var i=new Map,a=_c=new Map;a.set(n,i)}else a=_c,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),a=0;a<n.length;a++){var r=n[a];if(!(r[tl]||r[nn]||t==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(e)||"";s=t+s;var o=i.get(s);o?o.push(r):i.set(s,[r])}}return i}function ng(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function YM(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function y1(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}function ZM(t,e,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var a=Us(i.href),r=e.querySelector(ol(a));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=tu.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=r,$t(r);return}r=e.ownerDocument||e,i=S1(i),(a=ii.get(a))&&Qp(i,a),r=r.createElement("link"),$t(r);var s=r;s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),on(r,"link",i),n.instance=r}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&!(n.state.loading&3)&&(t.count++,n=tu.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var wf=0;function KM(t,e){return t.stylesheets&&t.count===0&&Sc(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var i=setTimeout(function(){if(t.stylesheets&&Sc(t,t.stylesheets),t.unsuspend){var r=t.unsuspend;t.unsuspend=null,r()}},6e4+e);0<t.imgBytes&&wf===0&&(wf=62500*DM());var a=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Sc(t,t.stylesheets),t.unsuspend)){var r=t.unsuspend;t.unsuspend=null,r()}},(t.imgBytes>wf?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function tu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Sc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var nu=null;function Sc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,nu=new Map,e.forEach(QM,t),nu=null,tu.call(t))}function QM(t,e){if(!(e.state.loading&4)){var n=nu.get(t);if(n)var i=n.get(null);else{n=new Map,nu.set(t,n);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<a.length;r++){var s=a[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),i=s)}i&&n.set(null,i)}a=e.instance,s=a.getAttribute("data-precedence"),r=n.get(s)||i,r===i&&n.set(null,a),n.set(s,a),this.count++,i=tu.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),r?r.parentNode.insertBefore(a,r.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var jo={$$typeof:Yi,Provider:null,Consumer:null,_currentValue:gr,_currentValue2:gr,_threadCount:0};function JM(t,e,n,i,a,r,s,o,l){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Zu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zu(0),this.hiddenUpdates=Zu(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function M1(t,e,n,i,a,r,s,o,l,c,d,h){return t=new JM(t,e,n,s,l,c,d,h,o),e=1,r===!0&&(e|=24),r=On(3,null,null,e),t.current=r,r.stateNode=t,e=Ep(),e.refCount++,t.pooledCache=e,e.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:e},wp(r),t}function b1(t){return t?(t=us,t):us}function E1(t,e,n,i,a,r){a=b1(a),i.context===null?i.context=a:i.pendingContext=a,i=Ha(e),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=Ga(t,i,e),n!==null&&(Mn(n,t,e),To(n,t,e))}function ig(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function $p(t,e){ig(t,e),(t=t.alternate)&&ig(t,e)}function T1(t){if(t.tag===13||t.tag===31){var e=Ur(t,67108864);e!==null&&Mn(e,t,67108864),$p(t,67108864)}}function ag(t){if(t.tag===13||t.tag===31){var e=zn();e=up(e);var n=Ur(t,e);n!==null&&Mn(n,t,e),$p(t,e)}}var iu=!0;function $M(t,e,n,i){var a=De.T;De.T=null;var r=it.p;try{it.p=2,em(t,e,n,i)}finally{it.p=r,De.T=a}}function eb(t,e,n,i){var a=De.T;De.T=null;var r=it.p;try{it.p=8,em(t,e,n,i)}finally{it.p=r,De.T=a}}function em(t,e,n,i){if(iu){var a=rh(i);if(a===null)Tf(t,e,i,au,n),rg(t,i);else if(nb(a,t,e,n,i))i.stopPropagation();else if(rg(t,i),e&4&&-1<tb.indexOf(t)){for(;a!==null;){var r=Hs(a);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=or(r.pendingLanes);if(s!==0){var o=r;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var l=1<<31-In(s);o.entanglements[1]|=l,s&=~l}Li(r),!(nt&6)&&(qc=Fn()+500,sl(0))}}break;case 31:case 13:o=Ur(r,2),o!==null&&Mn(o,r,2),Nu(),$p(r,2)}if(r=rh(i),r===null&&Tf(t,e,i,au,n),r===a)break;a=r}a!==null&&i.stopPropagation()}else Tf(t,e,i,null,n)}}function rh(t){return t=pp(t),tm(t)}var au=null;function tm(t){if(au=null,t=as(t),t!==null){var e=Qo(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=jx(e),t!==null)return t;t=null}else if(n===31){if(t=Wx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return au=t,null}function A1(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Hy()){case Kx:return 2;case Qx:return 8;case Lc:case Gy:return 32;case Jx:return 268435456;default:return 32}default:return 32}}var sh=!1,Xa=null,ja=null,Wa=null,Wo=new Map,qo=new Map,Da=[],tb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function rg(t,e){switch(t){case"focusin":case"focusout":Xa=null;break;case"dragenter":case"dragleave":ja=null;break;case"mouseover":case"mouseout":Wa=null;break;case"pointerover":case"pointerout":Wo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qo.delete(e.pointerId)}}function no(t,e,n,i,a,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[a]},e!==null&&(e=Hs(e),e!==null&&T1(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function nb(t,e,n,i,a){switch(e){case"focusin":return Xa=no(Xa,t,e,n,i,a),!0;case"dragenter":return ja=no(ja,t,e,n,i,a),!0;case"mouseover":return Wa=no(Wa,t,e,n,i,a),!0;case"pointerover":var r=a.pointerId;return Wo.set(r,no(Wo.get(r)||null,t,e,n,i,a)),!0;case"gotpointercapture":return r=a.pointerId,qo.set(r,no(qo.get(r)||null,t,e,n,i,a)),!0}return!1}function w1(t){var e=as(t.target);if(e!==null){var n=Qo(e);if(n!==null){if(e=n.tag,e===13){if(e=jx(n),e!==null){t.blockedOn=e,km(t.priority,function(){ag(n)});return}}else if(e===31){if(e=Wx(n),e!==null){t.blockedOn=e,km(t.priority,function(){ag(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function yc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=rh(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ed=i,n.target.dispatchEvent(i),Ed=null}else return e=Hs(n),e!==null&&T1(e),t.blockedOn=n,!1;e.shift()}return!0}function sg(t,e,n){yc(t)&&n.delete(e)}function ib(){sh=!1,Xa!==null&&yc(Xa)&&(Xa=null),ja!==null&&yc(ja)&&(ja=null),Wa!==null&&yc(Wa)&&(Wa=null),Wo.forEach(sg),qo.forEach(sg)}function Ul(t,e){t.blockedOn===e&&(t.blockedOn=null,sh||(sh=!0,Yt.unstable_scheduleCallback(Yt.unstable_NormalPriority,ib)))}var Ll=null;function og(t){Ll!==t&&(Ll=t,Yt.unstable_scheduleCallback(Yt.unstable_NormalPriority,function(){Ll===t&&(Ll=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],a=t[e+2];if(typeof i!="function"){if(tm(i||n)===null)continue;break}var r=Hs(n);r!==null&&(t.splice(e,3),e-=3,Hd(r,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Ls(t){function e(l){return Ul(l,t)}Xa!==null&&Ul(Xa,t),ja!==null&&Ul(ja,t),Wa!==null&&Ul(Wa,t),Wo.forEach(e),qo.forEach(e);for(var n=0;n<Da.length;n++){var i=Da[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<Da.length&&(n=Da[0],n.blockedOn===null);)w1(n),n.blockedOn===null&&Da.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],r=n[i+1],s=a[Tn]||null;if(typeof r=="function")s||og(n);else if(s){var o=null;if(r&&r.hasAttribute("formAction")){if(a=r,s=r[Tn]||null)o=s.formAction;else if(tm(a)!==null)continue}else o=s.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),og(n)}}}function R1(){function t(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(s){return a=s})},focusReset:"manual",scroll:"manual"})}function e(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),a!==null&&(a(),a=null)}}}function nm(t){this._internalRoot=t}Ou.prototype.render=nm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Q(409));var n=e.current,i=zn();E1(n,i,t,e,null,null)};Ou.prototype.unmount=nm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;E1(t.current,2,null,t,null,null),Nu(),e[zs]=null}};function Ou(t){this._internalRoot=t}Ou.prototype.unstable_scheduleHydration=function(t){if(t){var e=iv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Da.length&&e!==0&&e<Da[n].priority;n++);Da.splice(n,0,t),n===0&&w1(t)}};var lg=kx.version;if(lg!=="19.2.5")throw Error(Q(527,lg,"19.2.5"));it.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Q(188)):(t=Object.keys(t).join(","),Error(Q(268,t)));return t=Ly(e),t=t!==null?qx(t):null,t=t===null?null:t.stateNode,t};var ab={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:De,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ol.isDisabled&&Ol.supportsFiber)try{Jo=Ol.inject(ab),Bn=Ol}catch{}}xu.createRoot=function(t,e){if(!Xx(t))throw Error(Q(299));var n=!1,i="",a=__,r=S_,s=y_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=M1(t,1,!1,null,null,n,i,null,a,r,s,R1),t[zs]=e.current,Kp(t),new nm(e)};xu.hydrateRoot=function(t,e,n){if(!Xx(t))throw Error(Q(299));var i=!1,a="",r=__,s=S_,o=y_,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),e=M1(t,1,!0,e,n??null,i,a,l,r,s,o,R1),e.context=b1(null),n=e.current,i=zn(),i=up(i),a=Ha(i),a.callback=null,Ga(n,a,i),n=i,e.current.lanes=n,el(e,n),Li(e),t[zs]=e.current,Kp(t),new Ou(e)};xu.version="19.2.5";function C1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(C1)}catch(t){console.error(t)}}C1(),Bx.exports=xu;var rb=Bx.exports;/**
 * react-router v7.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var cg="popstate";function ug(t){return typeof t=="object"&&t!=null&&"pathname"in t&&"search"in t&&"hash"in t&&"state"in t&&"key"in t}function sb(t={}){function e(i,a){var c;let r=(c=a.state)==null?void 0:c.masked,{pathname:s,search:o,hash:l}=r||i.location;return oh("",{pathname:s,search:o,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default",r?{pathname:i.location.pathname,search:i.location.search,hash:i.location.hash}:void 0)}function n(i,a){return typeof a=="string"?a:Yo(a)}return lb(e,n,null,t)}function Rt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ci(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ob(){return Math.random().toString(36).substring(2,10)}function fg(t,e){return{usr:t.state,key:t.key,idx:e,masked:t.unstable_mask?{pathname:t.pathname,search:t.search,hash:t.hash}:void 0}}function oh(t,e,n=null,i,a){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Ws(e):e,state:n,key:e&&e.key||i||ob(),unstable_mask:a}}function Yo({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Ws(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substring(i),t=t.substring(0,i)),t&&(e.pathname=t)}return e}function lb(t,e,n,i={}){let{window:a=document.defaultView,v5Compat:r=!1}=i,s=a.history,o="POP",l=null,c=d();c==null&&(c=0,s.replaceState({...s.state,idx:c},""));function d(){return(s.state||{idx:null}).idx}function h(){o="POP";let m=d(),f=m==null?null:m-c;c=m,l&&l({action:o,location:M.location,delta:f})}function u(m,f){o="PUSH";let g=ug(m)?m:oh(M.location,m,f);c=d()+1;let v=fg(g,c),y=M.createHref(g.unstable_mask||g);try{s.pushState(v,"",y)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;a.location.assign(y)}r&&l&&l({action:o,location:M.location,delta:1})}function p(m,f){o="REPLACE";let g=ug(m)?m:oh(M.location,m,f);c=d();let v=fg(g,c),y=M.createHref(g.unstable_mask||g);s.replaceState(v,"",y),r&&l&&l({action:o,location:M.location,delta:0})}function x(m){return cb(m)}let M={get action(){return o},get location(){return t(a,s)},listen(m){if(l)throw new Error("A history only accepts one active listener");return a.addEventListener(cg,h),l=m,()=>{a.removeEventListener(cg,h),l=null}},createHref(m){return e(a,m)},createURL:x,encodeLocation(m){let f=x(m);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:u,replace:p,go(m){return s.go(m)}};return M}function cb(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Rt(n,"No window.location.(origin|href) available to create URL");let i=typeof t=="string"?t:Yo(t);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=n+i),new URL(i,n)}function D1(t,e,n="/"){return ub(t,e,n,!1)}function ub(t,e,n,i){let a=typeof e=="string"?Ws(e):e,r=ca(a.pathname||"/",n);if(r==null)return null;let s=N1(t);fb(s);let o=null;for(let l=0;o==null&&l<s.length;++l){let c=Mb(r);o=Sb(s[l],c,i)}return o}function N1(t,e=[],n=[],i="",a=!1){let r=(s,o,l=a,c)=>{let d={relativePath:c===void 0?s.path||"":c,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};if(d.relativePath.startsWith("/")){if(!d.relativePath.startsWith(i)&&l)return;Rt(d.relativePath.startsWith(i),`Absolute route path "${d.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(i.length)}let h=di([i,d.relativePath]),u=n.concat(d);s.children&&s.children.length>0&&(Rt(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),N1(s.children,e,u,h,l)),!(s.path==null&&!s.index)&&e.push({path:h,score:vb(h,s.index),routesMeta:u})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))r(s,o);else for(let c of U1(s.path))r(s,o,!0,c)}),e}function U1(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,a=n.endsWith("?"),r=n.replace(/\?$/,"");if(i.length===0)return a?[r,""]:[r];let s=U1(i.join("/")),o=[];return o.push(...s.map(l=>l===""?r:[r,l].join("/"))),a&&o.push(...s),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function fb(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:_b(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var db=/^:[\w-]+$/,hb=3,pb=2,mb=1,gb=10,xb=-2,dg=t=>t==="*";function vb(t,e){let n=t.split("/"),i=n.length;return n.some(dg)&&(i+=xb),e&&(i+=pb),n.filter(a=>!dg(a)).reduce((a,r)=>a+(db.test(r)?hb:r===""?mb:gb),i)}function _b(t,e){return t.length===e.length&&t.slice(0,-1).every((i,a)=>i===e[a])?t[t.length-1]-e[e.length-1]:0}function Sb(t,e,n=!1){let{routesMeta:i}=t,a={},r="/",s=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,d=r==="/"?e:e.slice(r.length)||"/",h=ru({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),u=l.route;if(!h&&c&&n&&!i[i.length-1].route.index&&(h=ru({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!h)return null;Object.assign(a,h.params),s.push({params:a,pathname:di([r,h.pathname]),pathnameBase:Ab(di([r,h.pathnameBase])),route:u}),h.pathnameBase!=="/"&&(r=di([r,h.pathnameBase]))}return s}function ru(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=yb(t.path,t.caseSensitive,t.end),a=e.match(n);if(!a)return null;let r=a[0],s=r.replace(/(.)\/+$/,"$1"),o=a.slice(1);return{params:i.reduce((c,{paramName:d,isOptional:h},u)=>{if(d==="*"){let x=o[u]||"";s=r.slice(0,r.length-x.length).replace(/(.)\/+$/,"$1")}const p=o[u];return h&&!p?c[d]=void 0:c[d]=(p||"").replace(/%2F/g,"/"),c},{}),pathname:r,pathnameBase:s,pattern:t}}function yb(t,e=!1,n=!0){Ci(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let i=[],a="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,o,l,c,d)=>{if(i.push({paramName:o,isOptional:l!=null}),l){let h=d.charAt(c+s.length);return h&&h!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(i.push({paramName:"*"}),a+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":t!==""&&t!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),i]}function Mb(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ci(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function ca(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}var bb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Eb(t,e="/"){let{pathname:n,search:i="",hash:a=""}=typeof t=="string"?Ws(t):t,r;return n?(n=O1(n),n.startsWith("/")?r=hg(n.substring(1),"/"):r=hg(n,e)):r=e,{pathname:r,search:wb(i),hash:Rb(a)}}function hg(t,e){let n=su(e).split("/");return t.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function Rf(t,e,n,i){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Tb(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function L1(t){let e=Tb(t);return e.map((n,i)=>i===e.length-1?n.pathname:n.pathnameBase)}function im(t,e,n,i=!1){let a;typeof t=="string"?a=Ws(t):(a={...t},Rt(!a.pathname||!a.pathname.includes("?"),Rf("?","pathname","search",a)),Rt(!a.pathname||!a.pathname.includes("#"),Rf("#","pathname","hash",a)),Rt(!a.search||!a.search.includes("#"),Rf("#","search","hash",a)));let r=t===""||a.pathname==="",s=r?"/":a.pathname,o;if(s==null)o=n;else{let h=e.length-1;if(!i&&s.startsWith("..")){let u=s.split("/");for(;u[0]==="..";)u.shift(),h-=1;a.pathname=u.join("/")}o=h>=0?e[h]:"/"}let l=Eb(a,o),c=s&&s!=="/"&&s.endsWith("/"),d=(r||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}var O1=t=>t.replace(/\/\/+/g,"/"),di=t=>O1(t.join("/")),su=t=>t.replace(/\/+$/,""),Ab=t=>su(t).replace(/^\/*/,"/"),wb=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Rb=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,Cb=class{constructor(t,e,n,i=!1){this.status=t,this.statusText=e||"",this.internal=i,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Db(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function Nb(t){let e=t.map(n=>n.route.path).filter(Boolean);return di(e)||"/"}var P1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function F1(t,e){let n=t;if(typeof n!="string"||!bb.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let i=n,a=!1;if(P1)try{let r=new URL(window.location.href),s=n.startsWith("//")?new URL(r.protocol+n):new URL(n),o=ca(s.pathname,e);s.origin===r.origin&&o!=null?n=o+s.search+s.hash:a=!0}catch{Ci(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:i,isExternal:a,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var B1=["POST","PUT","PATCH","DELETE"];new Set(B1);var Ub=["GET",...B1];new Set(Ub);var qs=k.createContext(null);qs.displayName="DataRouter";var Pu=k.createContext(null);Pu.displayName="DataRouterState";var I1=k.createContext(!1);function Lb(){return k.useContext(I1)}var z1=k.createContext({isTransitioning:!1});z1.displayName="ViewTransition";var Ob=k.createContext(new Map);Ob.displayName="Fetchers";var Pb=k.createContext(null);Pb.displayName="Await";var ai=k.createContext(null);ai.displayName="Navigation";var cl=k.createContext(null);cl.displayName="Location";var ha=k.createContext({outlet:null,matches:[],isDataRoute:!1});ha.displayName="Route";var am=k.createContext(null);am.displayName="RouteError";var H1="REACT_ROUTER_ERROR",Fb="REDIRECT",Bb="ROUTE_ERROR_RESPONSE";function Ib(t){if(t.startsWith(`${H1}:${Fb}:{`))try{let e=JSON.parse(t.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function zb(t){if(t.startsWith(`${H1}:${Bb}:{`))try{let e=JSON.parse(t.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new Cb(e.status,e.statusText,e.data)}catch{}}function Hb(t,{relative:e}={}){Rt(ul(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=k.useContext(ai),{hash:a,pathname:r,search:s}=fl(t,{relative:e}),o=r;return n!=="/"&&(o=r==="/"?n:di([n,r])),i.createHref({pathname:o,search:s,hash:a})}function ul(){return k.useContext(cl)!=null}function pa(){return Rt(ul(),"useLocation() may be used only in the context of a <Router> component."),k.useContext(cl).location}var G1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function V1(t){k.useContext(ai).static||k.useLayoutEffect(t)}function Gb(){let{isDataRoute:t}=k.useContext(ha);return t?eE():Vb()}function Vb(){Rt(ul(),"useNavigate() may be used only in the context of a <Router> component.");let t=k.useContext(qs),{basename:e,navigator:n}=k.useContext(ai),{matches:i}=k.useContext(ha),{pathname:a}=pa(),r=JSON.stringify(L1(i)),s=k.useRef(!1);return V1(()=>{s.current=!0}),k.useCallback((l,c={})=>{if(Ci(s.current,G1),!s.current)return;if(typeof l=="number"){n.go(l);return}let d=im(l,JSON.parse(r),a,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:di([e,d.pathname])),(c.replace?n.replace:n.push)(d,c.state,c)},[e,n,r,a,t])}k.createContext(null);function fl(t,{relative:e}={}){let{matches:n}=k.useContext(ha),{pathname:i}=pa(),a=JSON.stringify(L1(n));return k.useMemo(()=>im(t,JSON.parse(a),i,e==="path"),[t,a,i,e])}function kb(t,e){return k1(t,e)}function k1(t,e,n){var m;Rt(ul(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=k.useContext(ai),{matches:a}=k.useContext(ha),r=a[a.length-1],s=r?r.params:{},o=r?r.pathname:"/",l=r?r.pathnameBase:"/",c=r&&r.route;{let f=c&&c.path||"";j1(o,!c||f.endsWith("*")||f.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${o}" (under <Route path="${f}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${f}"> to <Route path="${f==="/"?"*":`${f}/*`}">.`)}let d=pa(),h;if(e){let f=typeof e=="string"?Ws(e):e;Rt(l==="/"||((m=f.pathname)==null?void 0:m.startsWith(l)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${l}" but pathname "${f.pathname}" was given in the \`location\` prop.`),h=f}else h=d;let u=h.pathname||"/",p=u;if(l!=="/"){let f=l.replace(/^\//,"").split("/");p="/"+u.replace(/^\//,"").split("/").slice(f.length).join("/")}let x=D1(t,{pathname:p});Ci(c||x!=null,`No routes matched location "${h.pathname}${h.search}${h.hash}" `),Ci(x==null||x[x.length-1].route.element!==void 0||x[x.length-1].route.Component!==void 0||x[x.length-1].route.lazy!==void 0,`Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let M=Yb(x&&x.map(f=>Object.assign({},f,{params:Object.assign({},s,f.params),pathname:di([l,i.encodeLocation?i.encodeLocation(f.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?l:di([l,i.encodeLocation?i.encodeLocation(f.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:f.pathnameBase])})),a,n);return e&&M?k.createElement(cl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...h},navigationType:"POP"}},M):M}function Xb(){let t=$b(),e=Db(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i},r={padding:"2px 4px",backgroundColor:i},s=null;return console.error("Error handled by React Router default ErrorBoundary:",t),s=k.createElement(k.Fragment,null,k.createElement("p",null,"💿 Hey developer 👋"),k.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",k.createElement("code",{style:r},"ErrorBoundary")," or"," ",k.createElement("code",{style:r},"errorElement")," prop on your route.")),k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),n?k.createElement("pre",{style:a},n):null,s)}var jb=k.createElement(Xb,null),X1=class extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.onError?this.props.onError(t,e):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const n=zb(t.digest);n&&(t=n)}let e=t!==void 0?k.createElement(ha.Provider,{value:this.props.routeContext},k.createElement(am.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?k.createElement(Wb,{error:t},e):e}};X1.contextType=I1;var Cf=new WeakMap;function Wb({children:t,error:e}){let{basename:n}=k.useContext(ai);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let i=Ib(e.digest);if(i){let a=Cf.get(e);if(a)throw a;let r=F1(i.location,n);if(P1&&!Cf.get(e))if(r.isExternal||i.reloadDocument)window.location.href=r.absoluteURL||r.to;else{const s=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(r.to,{replace:i.replace}));throw Cf.set(e,s),s}return k.createElement("meta",{httpEquiv:"refresh",content:`0;url=${r.absoluteURL||r.to}`})}}return t}function qb({routeContext:t,match:e,children:n}){let i=k.useContext(qs);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),k.createElement(ha.Provider,{value:t},n)}function Yb(t,e=[],n){let i=n==null?void 0:n.state;if(t==null){if(!i)return null;if(i.errors)t=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)t=i.matches;else return null}let a=t,r=i==null?void 0:i.errors;if(r!=null){let d=a.findIndex(h=>h.route.id&&(r==null?void 0:r[h.route.id])!==void 0);Rt(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(r).join(",")}`),a=a.slice(0,Math.min(a.length,d+1))}let s=!1,o=-1;if(n&&i){s=i.renderFallback;for(let d=0;d<a.length;d++){let h=a[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(o=d),h.route.id){let{loaderData:u,errors:p}=i,x=h.route.loader&&!u.hasOwnProperty(h.route.id)&&(!p||p[h.route.id]===void 0);if(h.route.lazy||x){n.isStatic&&(s=!0),o>=0?a=a.slice(0,o+1):a=[a[0]];break}}}}let l=n==null?void 0:n.onError,c=i&&l?(d,h)=>{var u,p;l(d,{location:i.location,params:((p=(u=i.matches)==null?void 0:u[0])==null?void 0:p.params)??{},unstable_pattern:Nb(i.matches),errorInfo:h})}:void 0;return a.reduceRight((d,h,u)=>{let p,x=!1,M=null,m=null;i&&(p=r&&h.route.id?r[h.route.id]:void 0,M=h.route.errorElement||jb,s&&(o<0&&u===0?(j1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,m=null):o===u&&(x=!0,m=h.route.hydrateFallbackElement||null)));let f=e.concat(a.slice(0,u+1)),g=()=>{let v;return p?v=M:x?v=m:h.route.Component?v=k.createElement(h.route.Component,null):h.route.element?v=h.route.element:v=d,k.createElement(qb,{match:h,routeContext:{outlet:d,matches:f,isDataRoute:i!=null},children:v})};return i&&(h.route.ErrorBoundary||h.route.errorElement||u===0)?k.createElement(X1,{location:i.location,revalidation:i.revalidation,component:M,error:p,children:g(),routeContext:{outlet:null,matches:f,isDataRoute:!0},onError:c}):g()},null)}function rm(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Zb(t){let e=k.useContext(qs);return Rt(e,rm(t)),e}function Kb(t){let e=k.useContext(Pu);return Rt(e,rm(t)),e}function Qb(t){let e=k.useContext(ha);return Rt(e,rm(t)),e}function sm(t){let e=Qb(t),n=e.matches[e.matches.length-1];return Rt(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function Jb(){return sm("useRouteId")}function $b(){var i;let t=k.useContext(am),e=Kb("useRouteError"),n=sm("useRouteError");return t!==void 0?t:(i=e.errors)==null?void 0:i[n]}function eE(){let{router:t}=Zb("useNavigate"),e=sm("useNavigate"),n=k.useRef(!1);return V1(()=>{n.current=!0}),k.useCallback(async(a,r={})=>{Ci(n.current,G1),n.current&&(typeof a=="number"?await t.navigate(a):await t.navigate(a,{fromRouteId:e,...r}))},[t,e])}var pg={};function j1(t,e,n){!e&&!pg[t]&&(pg[t]=!0,Ci(!1,n))}k.memo(tE);function tE({routes:t,future:e,state:n,isStatic:i,onError:a}){return k1(t,void 0,{state:n,isStatic:i,onError:a})}function xo(t){Rt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function nE({basename:t="/",children:e=null,location:n,navigationType:i="POP",navigator:a,static:r=!1,unstable_useTransitions:s}){Rt(!ul(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=t.replace(/^\/*/,"/"),l=k.useMemo(()=>({basename:o,navigator:a,static:r,unstable_useTransitions:s,future:{}}),[o,a,r,s]);typeof n=="string"&&(n=Ws(n));let{pathname:c="/",search:d="",hash:h="",state:u=null,key:p="default",unstable_mask:x}=n,M=k.useMemo(()=>{let m=ca(c,o);return m==null?null:{location:{pathname:m,search:d,hash:h,state:u,key:p,unstable_mask:x},navigationType:i}},[o,c,d,h,u,p,i,x]);return Ci(M!=null,`<Router basename="${o}"> is not able to match the URL "${c}${d}${h}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:k.createElement(ai.Provider,{value:l},k.createElement(cl.Provider,{children:e,value:M}))}function iE({children:t,location:e}){return kb(lh(t),e)}function lh(t,e=[]){let n=[];return k.Children.forEach(t,(i,a)=>{if(!k.isValidElement(i))return;let r=[...e,a];if(i.type===k.Fragment){n.push.apply(n,lh(i.props.children,r));return}Rt(i.type===xo,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Rt(!i.props.index||!i.props.children,"An index route cannot have child routes.");let s={id:i.props.id||r.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,middleware:i.props.middleware,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(s.children=lh(i.props.children,r)),n.push(s)}),n}var Mc="get",bc="application/x-www-form-urlencoded";function Fu(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function aE(t){return Fu(t)&&t.tagName.toLowerCase()==="button"}function rE(t){return Fu(t)&&t.tagName.toLowerCase()==="form"}function sE(t){return Fu(t)&&t.tagName.toLowerCase()==="input"}function oE(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function lE(t,e){return t.button===0&&(!e||e==="_self")&&!oE(t)}var Pl=null;function cE(){if(Pl===null)try{new FormData(document.createElement("form"),0),Pl=!1}catch{Pl=!0}return Pl}var uE=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Df(t){return t!=null&&!uE.has(t)?(Ci(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${bc}"`),null):t}function fE(t,e){let n,i,a,r,s;if(rE(t)){let o=t.getAttribute("action");i=o?ca(o,e):null,n=t.getAttribute("method")||Mc,a=Df(t.getAttribute("enctype"))||bc,r=new FormData(t)}else if(aE(t)||sE(t)&&(t.type==="submit"||t.type==="image")){let o=t.form;if(o==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=t.getAttribute("formaction")||o.getAttribute("action");if(i=l?ca(l,e):null,n=t.getAttribute("formmethod")||o.getAttribute("method")||Mc,a=Df(t.getAttribute("formenctype"))||Df(o.getAttribute("enctype"))||bc,r=new FormData(o,t),!cE()){let{name:c,type:d,value:h}=t;if(d==="image"){let u=c?`${c}.`:"";r.append(`${u}x`,"0"),r.append(`${u}y`,"0")}else c&&r.append(c,h)}}else{if(Fu(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Mc,i=null,a=bc,s=t}return r&&a==="text/plain"&&(s=r,r=void 0),{action:i,method:n.toLowerCase(),encType:a,formData:r,body:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function om(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function W1(t,e,n,i){let a=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return n?a.pathname.endsWith("/")?a.pathname=`${a.pathname}_.${i}`:a.pathname=`${a.pathname}.${i}`:a.pathname==="/"?a.pathname=`_root.${i}`:e&&ca(a.pathname,e)==="/"?a.pathname=`${su(e)}/_root.${i}`:a.pathname=`${su(a.pathname)}.${i}`,a}async function dE(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function hE(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function pE(t,e,n){let i=await Promise.all(t.map(async a=>{let r=e.routes[a.route.id];if(r){let s=await dE(r,n);return s.links?s.links():[]}return[]}));return vE(i.flat(1).filter(hE).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function mg(t,e,n,i,a,r){let s=(l,c)=>n[c]?l.route.id!==n[c].route.id:!0,o=(l,c)=>{var d;return n[c].pathname!==l.pathname||((d=n[c].route.path)==null?void 0:d.endsWith("*"))&&n[c].params["*"]!==l.params["*"]};return r==="assets"?e.filter((l,c)=>s(l,c)||o(l,c)):r==="data"?e.filter((l,c)=>{var h;let d=i.routes[l.route.id];if(!d||!d.hasLoader)return!1;if(s(l,c)||o(l,c))return!0;if(l.route.shouldRevalidate){let u=l.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((h=n[0])==null?void 0:h.params)||{},nextUrl:new URL(t,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof u=="boolean")return u}return!0}):[]}function mE(t,e,{includeHydrateFallback:n}={}){return gE(t.map(i=>{let a=e.routes[i.route.id];if(!a)return[];let r=[a.module];return a.clientActionModule&&(r=r.concat(a.clientActionModule)),a.clientLoaderModule&&(r=r.concat(a.clientLoaderModule)),n&&a.hydrateFallbackModule&&(r=r.concat(a.hydrateFallbackModule)),a.imports&&(r=r.concat(a.imports)),r}).flat(1))}function gE(t){return[...new Set(t)]}function xE(t){let e={},n=Object.keys(t).sort();for(let i of n)e[i]=t[i];return e}function vE(t,e){let n=new Set;return new Set(e),t.reduce((i,a)=>{let r=JSON.stringify(xE(a));return n.has(r)||(n.add(r),i.push({key:r,link:a})),i},[])}function lm(){let t=k.useContext(qs);return om(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function _E(){let t=k.useContext(Pu);return om(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var cm=k.createContext(void 0);cm.displayName="FrameworkContext";function um(){let t=k.useContext(cm);return om(t,"You must render this element inside a <HydratedRouter> element"),t}function SE(t,e){let n=k.useContext(cm),[i,a]=k.useState(!1),[r,s]=k.useState(!1),{onFocus:o,onBlur:l,onMouseEnter:c,onMouseLeave:d,onTouchStart:h}=e,u=k.useRef(null);k.useEffect(()=>{if(t==="render"&&s(!0),t==="viewport"){let M=f=>{f.forEach(g=>{s(g.isIntersecting)})},m=new IntersectionObserver(M,{threshold:.5});return u.current&&m.observe(u.current),()=>{m.disconnect()}}},[t]),k.useEffect(()=>{if(i){let M=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(M)}}},[i]);let p=()=>{a(!0)},x=()=>{a(!1),s(!1)};return n?t!=="intent"?[r,u,{}]:[r,u,{onFocus:io(o,p),onBlur:io(l,x),onMouseEnter:io(c,p),onMouseLeave:io(d,x),onTouchStart:io(h,p)}]:[!1,u,{}]}function io(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function yE({page:t,...e}){let n=Lb(),{router:i}=lm(),a=k.useMemo(()=>D1(i.routes,t,i.basename),[i.routes,t,i.basename]);return a?n?k.createElement(bE,{page:t,matches:a,...e}):k.createElement(EE,{page:t,matches:a,...e}):null}function ME(t){let{manifest:e,routeModules:n}=um(),[i,a]=k.useState([]);return k.useEffect(()=>{let r=!1;return pE(t,e,n).then(s=>{r||a(s)}),()=>{r=!0}},[t,e,n]),i}function bE({page:t,matches:e,...n}){let i=pa(),{future:a}=um(),{basename:r}=lm(),s=k.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let o=W1(t,r,a.unstable_trailingSlashAwareDataRequests,"rsc"),l=!1,c=[];for(let d of e)typeof d.route.shouldRevalidate=="function"?l=!0:c.push(d.route.id);return l&&c.length>0&&o.searchParams.set("_routes",c.join(",")),[o.pathname+o.search]},[r,a.unstable_trailingSlashAwareDataRequests,t,i,e]);return k.createElement(k.Fragment,null,s.map(o=>k.createElement("link",{key:o,rel:"prefetch",as:"fetch",href:o,...n})))}function EE({page:t,matches:e,...n}){let i=pa(),{future:a,manifest:r,routeModules:s}=um(),{basename:o}=lm(),{loaderData:l,matches:c}=_E(),d=k.useMemo(()=>mg(t,e,c,r,i,"data"),[t,e,c,r,i]),h=k.useMemo(()=>mg(t,e,c,r,i,"assets"),[t,e,c,r,i]),u=k.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let M=new Set,m=!1;if(e.forEach(g=>{var y;let v=r.routes[g.route.id];!v||!v.hasLoader||(!d.some(C=>C.route.id===g.route.id)&&g.route.id in l&&((y=s[g.route.id])!=null&&y.shouldRevalidate)||v.hasClientLoader?m=!0:M.add(g.route.id))}),M.size===0)return[];let f=W1(t,o,a.unstable_trailingSlashAwareDataRequests,"data");return m&&M.size>0&&f.searchParams.set("_routes",e.filter(g=>M.has(g.route.id)).map(g=>g.route.id).join(",")),[f.pathname+f.search]},[o,a.unstable_trailingSlashAwareDataRequests,l,i,r,d,e,t,s]),p=k.useMemo(()=>mE(h,r),[h,r]),x=ME(h);return k.createElement(k.Fragment,null,u.map(M=>k.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...n})),p.map(M=>k.createElement("link",{key:M,rel:"modulepreload",href:M,...n})),x.map(({key:M,link:m})=>k.createElement("link",{key:M,nonce:n.nonce,...m,crossOrigin:m.crossOrigin??n.crossOrigin})))}function TE(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var AE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{AE&&(window.__reactRouterVersion="7.14.1")}catch{}function wE({basename:t,children:e,unstable_useTransitions:n,window:i}){let a=k.useRef();a.current==null&&(a.current=sb({window:i,v5Compat:!0}));let r=a.current,[s,o]=k.useState({action:r.action,location:r.location}),l=k.useCallback(c=>{n===!1?o(c):k.startTransition(()=>o(c))},[n]);return k.useLayoutEffect(()=>r.listen(l),[r,l]),k.createElement(nE,{basename:t,children:e,location:s.location,navigationType:s.action,navigator:r,unstable_useTransitions:n})}var q1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Bu=k.forwardRef(function({onClick:e,discover:n="render",prefetch:i="none",relative:a,reloadDocument:r,replace:s,unstable_mask:o,state:l,target:c,to:d,preventScrollReset:h,viewTransition:u,unstable_defaultShouldRevalidate:p,...x},M){let{basename:m,navigator:f,unstable_useTransitions:g}=k.useContext(ai),v=typeof d=="string"&&q1.test(d),y=F1(d,m);d=y.to;let C=Hb(d,{relative:a}),A=pa(),R=null;if(o){let P=im(o,[],A.unstable_mask?A.unstable_mask.pathname:"/",!0);m!=="/"&&(P.pathname=P.pathname==="/"?m:di([m,P.pathname])),R=f.createHref(P)}let[S,w,N]=SE(i,x),D=NE(d,{replace:s,unstable_mask:o,state:l,target:c,preventScrollReset:h,relative:a,viewTransition:u,unstable_defaultShouldRevalidate:p,unstable_useTransitions:g});function I(P){e&&e(P),P.defaultPrevented||D(P)}let W=!(y.isExternal||r),q=k.createElement("a",{...x,...N,href:(W?R:void 0)||y.absoluteURL||C,onClick:W?I:e,ref:TE(M,w),target:c,"data-discover":!v&&n==="render"?"true":void 0});return S&&!v?k.createElement(k.Fragment,null,q,k.createElement(yE,{page:C})):q});Bu.displayName="Link";var RE=k.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:i="",end:a=!1,style:r,to:s,viewTransition:o,children:l,...c},d){let h=fl(s,{relative:c.relative}),u=pa(),p=k.useContext(Pu),{navigator:x,basename:M}=k.useContext(ai),m=p!=null&&FE(h)&&o===!0,f=x.encodeLocation?x.encodeLocation(h).pathname:h.pathname,g=u.pathname,v=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;n||(g=g.toLowerCase(),v=v?v.toLowerCase():null,f=f.toLowerCase()),v&&M&&(v=ca(v,M)||v);const y=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let C=g===f||!a&&g.startsWith(f)&&g.charAt(y)==="/",A=v!=null&&(v===f||!a&&v.startsWith(f)&&v.charAt(f.length)==="/"),R={isActive:C,isPending:A,isTransitioning:m},S=C?e:void 0,w;typeof i=="function"?w=i(R):w=[i,C?"active":null,A?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let N=typeof r=="function"?r(R):r;return k.createElement(Bu,{...c,"aria-current":S,className:w,ref:d,style:N,to:s,viewTransition:o},typeof l=="function"?l(R):l)});RE.displayName="NavLink";var CE=k.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:i,replace:a,state:r,method:s=Mc,action:o,onSubmit:l,relative:c,preventScrollReset:d,viewTransition:h,unstable_defaultShouldRevalidate:u,...p},x)=>{let{unstable_useTransitions:M}=k.useContext(ai),m=OE(),f=PE(o,{relative:c}),g=s.toLowerCase()==="get"?"get":"post",v=typeof o=="string"&&q1.test(o),y=C=>{if(l&&l(C),C.defaultPrevented)return;C.preventDefault();let A=C.nativeEvent.submitter,R=(A==null?void 0:A.getAttribute("formmethod"))||s,S=()=>m(A||C.currentTarget,{fetcherKey:e,method:R,navigate:n,replace:a,state:r,relative:c,preventScrollReset:d,viewTransition:h,unstable_defaultShouldRevalidate:u});M&&n!==!1?k.startTransition(()=>S()):S()};return k.createElement("form",{ref:x,method:g,action:f,onSubmit:i?l:y,...p,"data-discover":!v&&t==="render"?"true":void 0})});CE.displayName="Form";function DE(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Y1(t){let e=k.useContext(qs);return Rt(e,DE(t)),e}function NE(t,{target:e,replace:n,unstable_mask:i,state:a,preventScrollReset:r,relative:s,viewTransition:o,unstable_defaultShouldRevalidate:l,unstable_useTransitions:c}={}){let d=Gb(),h=pa(),u=fl(t,{relative:s});return k.useCallback(p=>{if(lE(p,e)){p.preventDefault();let x=n!==void 0?n:Yo(h)===Yo(u),M=()=>d(t,{replace:x,unstable_mask:i,state:a,preventScrollReset:r,relative:s,viewTransition:o,unstable_defaultShouldRevalidate:l});c?k.startTransition(()=>M()):M()}},[h,d,u,n,i,a,e,t,r,s,o,l,c])}var UE=0,LE=()=>`__${String(++UE)}__`;function OE(){let{router:t}=Y1("useSubmit"),{basename:e}=k.useContext(ai),n=Jb(),i=t.fetch,a=t.navigate;return k.useCallback(async(r,s={})=>{let{action:o,method:l,encType:c,formData:d,body:h}=fE(r,e);if(s.navigate===!1){let u=s.fetcherKey||LE();await i(u,n,s.action||o,{unstable_defaultShouldRevalidate:s.unstable_defaultShouldRevalidate,preventScrollReset:s.preventScrollReset,formData:d,body:h,formMethod:s.method||l,formEncType:s.encType||c,flushSync:s.flushSync})}else await a(s.action||o,{unstable_defaultShouldRevalidate:s.unstable_defaultShouldRevalidate,preventScrollReset:s.preventScrollReset,formData:d,body:h,formMethod:s.method||l,formEncType:s.encType||c,replace:s.replace,state:s.state,fromRouteId:n,flushSync:s.flushSync,viewTransition:s.viewTransition})},[i,a,e,n])}function PE(t,{relative:e}={}){let{basename:n}=k.useContext(ai),i=k.useContext(ha);Rt(i,"useFormAction must be used inside a RouteContext");let[a]=i.matches.slice(-1),r={...fl(t||".",{relative:e})},s=pa();if(t==null){r.search=s.search;let o=new URLSearchParams(r.search),l=o.getAll("index");if(l.some(d=>d==="")){o.delete("index"),l.filter(h=>h).forEach(h=>o.append("index",h));let d=o.toString();r.search=d?`?${d}`:""}}return(!t||t===".")&&a.route.index&&(r.search=r.search?r.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(r.pathname=r.pathname==="/"?n:di([n,r.pathname])),Yo(r)}function FE(t,{relative:e}={}){let n=k.useContext(z1);Rt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=Y1("useViewTransitionState"),a=fl(t,{relative:e});if(!n.isTransitioning)return!1;let r=ca(n.currentLocation.pathname,i)||n.currentLocation.pathname,s=ca(n.nextLocation.pathname,i)||n.nextLocation.pathname;return ru(a.pathname,s)!=null||ru(a.pathname,r)!=null}var Z1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},gg=mr.createContext&&mr.createContext(Z1),BE=["attr","size","title"];function IE(t,e){if(t==null)return{};var n,i,a=zE(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)===-1&&{}.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function zE(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)!==-1)continue;n[i]=t[i]}return n}function ou(){return ou=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ou.apply(null,arguments)}function xg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,i)}return n}function lu(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?xg(Object(n),!0).forEach(function(i){HE(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):xg(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function HE(t,e,n){return(e=GE(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function GE(t){var e=VE(t,"string");return typeof e=="symbol"?e:e+""}function VE(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function K1(t){return t&&t.map((e,n)=>mr.createElement(e.tag,lu({key:n},e.attr),K1(e.child)))}function wn(t){return e=>mr.createElement(kE,ou({attr:lu({},t.attr)},e),K1(t.child))}function kE(t){var e=n=>{var{attr:i,size:a,title:r}=t,s=IE(t,BE),o=a||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),mr.createElement("svg",ou({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,s,{className:l,style:lu(lu({color:t.color||n.color},n.style),t.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),r&&mr.createElement("title",null,r),t.children)};return gg!==void 0?mr.createElement(gg.Consumer,null,n=>e(n)):e(Z1)}function XE(t){return wn({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"},child:[]}]})(t)}function jE(t){return wn({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"},child:[]}]})(t)}function WE(t){return wn({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",clipRule:"evenodd"},child:[]}]})(t)}function qE(t){return wn({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"},child:[]}]})(t)}const vg=[{label:"About",href:"#about"},{label:"Games",href:"#games"},{label:"Support",href:"#support"}];function YE(){const[t,e]=k.useState("About"),[n,i]=k.useState(!1),a=r=>{e(r),i(!1)};return E.jsxs("header",{className:"sticky top-0 z-50 mx-auto w-full max-w-[1440px] border-b border-[#232325] bg-[#0E0D10]",children:[E.jsxs("div",{className:"flex h-[clamp(64px,6.8vw,98px)] items-center justify-between px-[clamp(16px,4.17vw,60px)] py-[clamp(16px,1.67vw,24px)]",children:[E.jsxs("a",{href:"/",className:"font-sans text-[clamp(20px,2.24vw,32.21px)] font-bold uppercase leading-[1.18] tracking-normal","aria-label":"Suprex home",children:[E.jsx("span",{className:"text-[#FFFFFF]",children:"Supr"}),E.jsx("span",{className:"text-[#EF0C27]",children:"ex"})]}),E.jsx("nav",{"aria-label":"Primary",className:"hidden md:block",children:E.jsx("ul",{className:"flex items-center gap-[clamp(20px,4.17vw,60px)]",children:vg.map(({label:r,href:s})=>{const o=t===r;return E.jsx("li",{children:E.jsx("a",{href:s,onClick:()=>a(r),"aria-current":o?"page":void 0,className:`inline-flex items-center justify-center rounded-[6px] px-[10px] py-[10px] font-sans font-semibold leading-[1.21] transition-colors duration-200 ${o?"border-b-2 border-[#7717FF] text-[clamp(11px,0.97vw,14px)] text-[#FFFFFF]":"text-[clamp(12px,1.11vw,16px)] text-[#B5B5B5] hover:text-white"}`,children:r})},r)})})}),E.jsxs("div",{className:"hidden items-center gap-[clamp(8px,0.83vw,12px)] md:flex",children:[E.jsx("button",{type:"button",className:"inline-flex h-[clamp(36px,3.125vw,45px)] w-[clamp(80px,6.94vw,100px)] items-center justify-center rounded-[10px] bg-[#2F2D32] font-sans text-[clamp(11px,0.97vw,14px)] font-semibold leading-[1.21] text-[#FFFFFF] transition-colors duration-200 hover:bg-[#3a363b] focus:outline-none focus:ring-2 focus:ring-white/20",children:"Log in"}),E.jsx("button",{type:"button",className:"inline-flex h-[clamp(36px,3.125vw,45px)] w-[clamp(80px,6.94vw,100px)] items-center justify-center rounded-[10px] bg-[#7717FF] font-sans text-[clamp(11px,0.97vw,14px)] font-semibold leading-[1.21] text-[#FFFFFF] transition-colors duration-200 hover:bg-[#6611E0] focus:outline-none focus:ring-2 focus:ring-[#7717FF]/50",children:"Register"})]}),E.jsx("button",{type:"button",onClick:()=>i(r=>!r),"aria-expanded":n,"aria-controls":"mobile-menu","aria-label":n?"Close menu":"Open menu",className:"inline-flex h-10 w-10 items-center justify-center text-white focus:outline-none focus:ring-2 focus:ring-white/20 md:hidden",children:n?E.jsx(XE,{size:28}):E.jsx(jE,{size:28})})]}),n&&E.jsx("div",{id:"mobile-menu",className:"absolute inset-x-0 top-full border-t border-[#232325] bg-[#0E0D10] md:hidden",children:E.jsxs("nav",{"aria-label":"Mobile",className:"px-4 py-4",children:[E.jsx("ul",{className:"flex flex-col gap-1",children:vg.map(({label:r,href:s})=>{const o=t===r;return E.jsx("li",{children:E.jsx("a",{href:s,onClick:()=>a(r),"aria-current":o?"page":void 0,className:`block rounded-lg px-3 py-3 font-sans text-base font-semibold transition-colors duration-200 ${o?"bg-white/5 text-[#FFFFFF]":"text-[#B5B5B5] hover:bg-white/5 hover:text-white"}`,children:r})},r)})}),E.jsxs("div",{className:"mt-4 flex flex-col gap-2",children:[E.jsx("button",{type:"button",className:"h-[45px] w-full rounded-[10px] bg-[#2F2D32] font-sans text-sm font-semibold text-[#FFFFFF]",children:"Log in"}),E.jsx("button",{type:"button",className:"h-[45px] w-full rounded-[10px] bg-[#7717FF] font-sans text-sm font-semibold text-[#FFFFFF]",children:"Register"})]})]})})]})}function Q1(t){return wn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"},child:[]}]})(t)}function J1(t){return wn({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(t)}function $1(t){return wn({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"},child:[]}]})(t)}function eS(t){return wn({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"},child:[]}]})(t)}function ZE(t){return wn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L80 128c-8.8 0-16-7.2-16-16s7.2-16 16-16l368 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"},child:[]}]})(t)}function KE(t){return wn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8l0 378.1C394 378 431.1 230.1 432 141.4L256 66.8s0 0 0 0z"},child:[]}]})(t)}function QE(t){return wn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"},child:[]}]})(t)}function JE(t){return wn({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64L80 64l0 320 224 0 0-320z"},child:[]}]})(t)}function $E(t){return wn({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"},child:[]}]})(t)}function e3(t){return wn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"},child:[]}]})(t)}const t3=[{title:"About",links:[{label:"About Us",href:"#"},{label:"Partners",href:"#"},{label:"Community",href:"#"},{label:"Creators",href:"#"}]},{title:"Legal",links:[{label:"Terms Of Use",href:"#"},{label:`Customer Acceptance
Policy`,href:"#"},{label:"Privacy Policy",href:"#"},{label:"Sweepstakes Rules",href:"#"},{label:"Responsible Gaming",href:"#"}]},{title:"Support",links:[{label:"Contact Us",href:"#"},{label:"FAQ",href:"#"}]}],n3=[{label:"X (Twitter)",href:"#",Icon:Q1},{label:"Instagram",href:"#",Icon:J1},{label:"Facebook",href:"#",Icon:$1},{label:"Discord",href:"#",Icon:eS}],i3="'Gilroy-SemiBold', 'Gilroy', 'Poppins', 'Inter', system-ui, sans-serif",a3={About:"order-2 lg:order-1",Legal:"order-1 lg:order-2",Support:"order-3 col-span-2 md:col-span-1 lg:order-3"};function tS(){const t=E.jsxs("a",{href:"/","aria-label":"Suprex home",className:"inline-block text-[clamp(32px,3.33vw,48px)] font-black uppercase leading-none tracking-tight",children:[E.jsx("span",{className:"text-white",children:"SUPR"}),E.jsx("span",{className:"text-[#EF0C27]",children:"EX"})]}),e=E.jsxs("div",{className:"flex flex-col gap-4",children:[E.jsx("p",{className:"m-0 text-[14px] font-normal leading-[1.5] text-white",children:"Experience gaming excellence. Where luck meets excitement."}),E.jsxs("p",{className:"m-0 text-[14px] font-normal leading-[1.5] text-white",children:["Suprex is committed to responsible gaming. Play",E.jsx("br",{className:"hidden lg:block"})," ","smart, stay safe, and enjoy responsibly."]})]}),n=E.jsx("p",{className:"m-0 text-[13px] font-normal leading-[1.5] text-white",children:"18+. NO PURCHASE NECESSARY. VOID WHERE PROHIBITED by law"}),i=E.jsxs("div",{className:"text-[13px] font-normal leading-[1.5] text-white",children:[E.jsxs("p",{className:"m-0",children:["Copyright @ ",new Date().getFullYear()," Suprex Academy LLC All Rights Reserved"]}),E.jsx("p",{className:"m-0",children:"Suprex operates under regulated jurisdictions, as described in Terms & Conditions"})]}),a=E.jsx("p",{className:"m-0 text-[#6E6E72]",style:{fontFamily:"'Inter', system-ui, sans-serif",fontWeight:400,fontSize:"14px",lineHeight:"120%",letterSpacing:0},children:"ClubGG is a free poker client that only offers poker gameplay with play money that doesn't have any monetary value and is not affiliated with, sponsoring, or endorsing this promotional activity."}),r=E.jsx("ul",{className:"flex flex-wrap items-center gap-3",children:n3.map(({label:l,href:c,Icon:d})=>E.jsx("li",{children:E.jsx("a",{href:c,"aria-label":l,className:"flex h-[36px] w-[36px] items-center justify-center rounded-lg border border-white/10 bg-[#1A1A1E] text-white transition-colors duration-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20",children:E.jsx(d,{size:14,"aria-hidden":"true"})})},l))}),s=E.jsx("div",{className:"grid w-full grid-cols-2 gap-x-[clamp(24px,3vw,40px)] gap-y-[clamp(28px,3vw,40px)] md:grid-cols-3 lg:w-auto lg:grid-cols-3 lg:gap-x-[clamp(48px,5.5vw,80px)]",children:t3.map(({title:l,links:c})=>E.jsxs("nav",{"aria-label":l,className:`flex flex-col gap-4 ${a3[l]||""}`,children:[E.jsx("h3",{className:"text-[16px] font-bold uppercase leading-[1.2] tracking-[0.02em] text-white",children:l}),E.jsx("ul",{className:"flex flex-col gap-3",children:c.map(({label:d,href:h})=>E.jsx("li",{children:E.jsx("a",{href:h,className:"block whitespace-pre-line text-[14px] font-normal leading-[1.35] text-white transition-colors duration-200 hover:text-white/70 focus:outline-none",children:d})},d))})]},l))}),o=E.jsx("div",{"aria-hidden":"true",className:"h-px w-full bg-white/10"});return E.jsxs("footer",{className:"relative mx-auto w-full max-w-[1440px] overflow-hidden bg-[#0B0A10] lg:h-[482px]",style:{fontFamily:i3},children:[E.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute bottom-[-140px] left-1/2 h-[280px] w-[clamp(480px,71.53vw,1030px)] -translate-x-1/2 rounded-[50%] bg-[#7717FF] opacity-35 blur-[200px]"}),E.jsx("h2",{"aria-hidden":"true",className:"pointer-events-none absolute bottom-[-30px] left-1/2 -translate-x-1/2 whitespace-nowrap text-center text-[clamp(70px,22vw,270px)] font-black uppercase leading-[1] tracking-tight text-[#3A2770] lg:bottom-[-40px] lg:text-[#1E1533]",children:"SUPREX"}),E.jsxs("div",{className:"relative z-10 flex flex-col gap-6 px-[clamp(20px,4vw,32px)] pb-[clamp(28px,4vw,40px)] pt-[clamp(32px,4vw,44px)] lg:hidden",children:[t,e,n,s,o,i,a,r]}),E.jsxs("div",{className:"relative z-10 hidden h-full flex-col gap-6 px-[clamp(40px,4.17vw,60px)] pb-[clamp(24px,2.5vw,36px)] pt-[clamp(40px,4vw,60px)] lg:flex",children:[E.jsxs("div",{className:"flex flex-1 justify-between gap-[clamp(40px,5vw,72px)]",children:[E.jsxs("div",{className:"flex max-w-[560px] flex-col gap-6",children:[t,e,n,i,E.jsx("div",{className:"mt-auto",children:r})]}),E.jsx("div",{className:"pt-[72px]",children:s})]}),a]})]})}const nS="/assets/hero-map-D6exSGiG.svg",iS="data:image/svg+xml,%3csvg%20width='1440'%20height='946'%20viewBox='0%200%201440%20946'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='1440'%20height='946'%20fill='%23171717'%20fill-opacity='0.7'/%3e%3c/svg%3e",_g="/assets/hero-foreground-Dz_nymYK.png";function r3(){return E.jsxs("section",{"aria-labelledby":"hero-heading",className:"relative mx-auto w-full max-w-[1440px] overflow-hidden bg-[#080809] md:aspect-[1440/926]",children:[E.jsx("img",{src:nS,alt:"","aria-hidden":"true",draggable:"false",className:"pointer-events-none absolute inset-0 h-full w-full select-none object-cover opacity-90"}),E.jsx("img",{src:iS,alt:"","aria-hidden":"true",draggable:"false",className:"pointer-events-none absolute inset-0 h-full w-full select-none object-cover"}),E.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute inset-x-0 top-0 z-[5] hidden h-[40%] md:block",style:{backgroundImage:["radial-gradient(ellipse 6% 70% at 18% 0%, rgba(255,255,255,0.22), transparent 65%)","radial-gradient(ellipse 5% 75% at 31% 0%, rgba(255,255,255,0.20), transparent 65%)","radial-gradient(ellipse 4% 70% at 43% 0%, rgba(255,255,255,0.18), transparent 65%)","radial-gradient(ellipse 2% 65% at 51% 0%, rgba(255,255,255,0.22), transparent 65%)","radial-gradient(ellipse 5% 75% at 59% 0%, rgba(255,255,255,0.20), transparent 65%)","radial-gradient(ellipse 5% 72% at 71% 0%, rgba(255,255,255,0.20), transparent 65%)","radial-gradient(ellipse 5% 70% at 83% 0%, rgba(255,255,255,0.18), transparent 65%)"].join(", "),filter:"blur(18px)"}}),E.jsxs("div",{className:"relative z-10 flex flex-col items-center px-5 pt-10 md:hidden",children:[E.jsxs("div",{className:"flex w-full max-w-[720px] flex-col items-center text-center",children:[E.jsxs("h1",{id:"hero-heading-mobile",className:"m-0 w-full font-sans font-bold uppercase leading-[1.05] tracking-normal text-white",children:[E.jsx("span",{className:"block text-[28px] sm:text-[40px]",children:"America’s #1"}),E.jsx("span",{className:"block text-[36px] text-[#EF0C27] sm:text-[54px]",children:"Online Poker"}),E.jsx("span",{className:"block text-[36px] sm:text-[54px]",children:"Community"})]}),E.jsx("p",{className:"mt-4 max-w-[460px] font-sans text-[13px] font-normal leading-[1.45] text-[#B5B5B5] sm:text-[15px]",children:"Play Legal Online Poker In The US. Real Players, Real Wins. Claim Your Seat At The Table."}),E.jsx("button",{type:"button",className:"mt-5 inline-flex items-center justify-center rounded-[10.15px] bg-[#7717FF] px-[32px] py-[16px] font-sans text-[15px] font-bold leading-[1.21] text-[#FAFAFA] transition-colors duration-200 hover:bg-[#6611E0] focus:outline-none focus:ring-2 focus:ring-[#7717FF]/60",children:"Play Now"})]}),E.jsx("img",{src:_g,alt:"Poker hand with trophy, treasure chest, chips and red Suprex table",draggable:"false",className:"mt-8 block w-full max-w-[1200px] select-none object-contain"})]}),E.jsxs("div",{className:"relative z-10 hidden h-full w-full md:block",children:[E.jsx("img",{src:_g,alt:"Poker hand with trophy, treasure chest, chips and red Suprex table",draggable:"false",className:"pointer-events-none absolute bottom-0 left-1/2 block w-full max-w-[900px] -translate-x-1/2 select-none object-contain object-bottom",style:{maxHeight:"55%"}}),E.jsxs("div",{className:"absolute left-1/2 top-[6.5%] z-20 flex w-[92%] max-w-[720px] -translate-x-1/2 flex-col items-center text-center",children:[E.jsxs("h1",{id:"hero-heading",className:"m-0 w-full font-sans font-bold uppercase leading-[1.05] tracking-normal text-white",children:[E.jsx("span",{className:"block text-[clamp(28px,3.75vw,54px)]",children:"America’s #1"}),E.jsx("span",{className:"block text-[clamp(40px,5.21vw,75px)] text-[#EF0C27]",children:"Online Poker"}),E.jsx("span",{className:"block text-[clamp(40px,5.21vw,75px)]",children:"Community"})]}),E.jsx("p",{className:"mt-[clamp(12px,1.39vw,20px)] max-w-[520px] font-sans text-[clamp(13px,1.11vw,16px)] font-normal leading-[1.45] text-[#B5B5B5]",children:"Play Legal Online Poker In The US. Real Players, Real Wins. Claim Your Seat At The Table."}),E.jsx("button",{type:"button",className:"mt-[clamp(16px,1.94vw,28px)] inline-flex items-center justify-center rounded-[10.15px] bg-[#7717FF] px-[clamp(28px,2.78vw,40px)] py-[clamp(14px,1.39vw,20px)] font-sans text-[clamp(14px,1.25vw,18px)] font-bold leading-[1.21] text-[#FAFAFA] transition-colors duration-200 hover:bg-[#6611E0] focus:outline-none focus:ring-2 focus:ring-[#7717FF]/60",children:"Play Now"})]})]})]})}function s3({children:t,as:e="button",className:n="",...i}){return E.jsx(e,{...e==="button"?{type:"button"}:{},className:`inline-flex items-center justify-center rounded-[10.15px] bg-[#7717FF] px-[clamp(24px,2.5vw,36px)] py-[clamp(14px,1.39vw,20px)] font-sans text-[clamp(14px,1.39vw,20px)] font-bold leading-[1.21] text-[#FAFAFA] transition-colors duration-200 hover:bg-[#6611E0] focus:outline-none focus:ring-2 focus:ring-[#7717FF]/60 ${n}`,...i,children:t})}const o3="/assets/features-background-BXRYEZLN.svg",l3="/assets/features-player-BPE1BLZ4.svg";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fm="184",c3=0,Sg=1,u3=2,Ec=1,f3=2,vo=3,Qa=0,bn=1,qi=2,ta=0,ys=1,ch=2,yg=3,Mg=4,d3=5,fr=100,h3=101,p3=102,m3=103,g3=104,x3=200,v3=201,_3=202,S3=203,uh=204,fh=205,y3=206,M3=207,b3=208,E3=209,T3=210,A3=211,w3=212,R3=213,C3=214,dh=0,hh=1,ph=2,Os=3,mh=4,gh=5,xh=6,vh=7,aS=0,D3=1,N3=2,wi=0,rS=1,sS=2,oS=3,lS=4,cS=5,uS=6,fS=7,dS=300,Ar=301,Ps=302,Nf=303,Uf=304,Iu=306,_h=1e3,Qi=1001,Sh=1002,sn=1003,U3=1004,Fl=1005,fn=1006,Lf=1007,hr=1008,$n=1009,hS=1010,pS=1011,Zo=1012,dm=1013,Di=1014,Ei=1015,ua=1016,hm=1017,pm=1018,Ko=1020,mS=35902,gS=35899,xS=1021,vS=1022,fi=1023,fa=1026,pr=1027,_S=1028,mm=1029,wr=1030,gm=1031,xm=1033,Tc=33776,Ac=33777,wc=33778,Rc=33779,yh=35840,Mh=35841,bh=35842,Eh=35843,Th=36196,Ah=37492,wh=37496,Rh=37488,Ch=37489,cu=37490,Dh=37491,Nh=37808,Uh=37809,Lh=37810,Oh=37811,Ph=37812,Fh=37813,Bh=37814,Ih=37815,zh=37816,Hh=37817,Gh=37818,Vh=37819,kh=37820,Xh=37821,jh=36492,Wh=36494,qh=36495,Yh=36283,Zh=36284,uu=36285,Kh=36286,L3=3200,bg=0,O3=1,Na="",jn="srgb",fu="srgb-linear",du="linear",rt="srgb",zr=7680,Eg=519,P3=512,F3=513,B3=514,vm=515,I3=516,z3=517,_m=518,H3=519,Tg=35044,Ag="300 es",Ti=2e3,hu=2001;function G3(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function pu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function V3(){const t=pu("canvas");return t.style.display="block",t}const wg={};function Rg(...t){const e="THREE."+t.shift();console.log(e,...t)}function SS(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ce(...t){t=SS(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function et(...t){t=SS(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Qh(...t){const e=t.join(" ");e in wg||(wg[e]=!0,Ce(...t))}function k3(t,e,n){return new Promise(function(i,a){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:a();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const X3={[dh]:hh,[ph]:xh,[mh]:vh,[Os]:gh,[hh]:dh,[xh]:ph,[vh]:mh,[gh]:Os};class Or{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const r=a.indexOf(n);r!==-1&&a.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Of=Math.PI/180,Jh=180/Math.PI;function dl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[t&255]+cn[t>>8&255]+cn[t>>16&255]+cn[t>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[n&63|128]+cn[n>>8&255]+"-"+cn[n>>16&255]+cn[n>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function Qe(t,e,n){return Math.max(e,Math.min(n,t))}function j3(t,e){return(t%e+e)%e}function Pf(t,e,n){return(1-n)*t+n*e}function ao(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function _n(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Mm=class Mm{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),a=Math.sin(n),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*a+e.x,this.y=r*a+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Mm.prototype.isVector2=!0;let lt=Mm;class Ys{constructor(e=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=a}static slerpFlat(e,n,i,a,r,s,o){let l=i[a+0],c=i[a+1],d=i[a+2],h=i[a+3],u=r[s+0],p=r[s+1],x=r[s+2],M=r[s+3];if(h!==M||l!==u||c!==p||d!==x){let m=l*u+c*p+d*x+h*M;m<0&&(u=-u,p=-p,x=-x,M=-M,m=-m);let f=1-o;if(m<.9995){const g=Math.acos(m),v=Math.sin(g);f=Math.sin(f*g)/v,o=Math.sin(o*g)/v,l=l*f+u*o,c=c*f+p*o,d=d*f+x*o,h=h*f+M*o}else{l=l*f+u*o,c=c*f+p*o,d=d*f+x*o,h=h*f+M*o;const g=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=g,c*=g,d*=g,h*=g}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,a,r,s){const o=i[a],l=i[a+1],c=i[a+2],d=i[a+3],h=r[s],u=r[s+1],p=r[s+2],x=r[s+3];return e[n]=o*x+d*h+l*p-c*u,e[n+1]=l*x+d*u+c*h-o*p,e[n+2]=c*x+d*p+o*u-l*h,e[n+3]=d*x-o*h-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,a){return this._x=e,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,a=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(a/2),h=o(r/2),u=l(i/2),p=l(a/2),x=l(r/2);switch(s){case"XYZ":this._x=u*d*h+c*p*x,this._y=c*p*h-u*d*x,this._z=c*d*x+u*p*h,this._w=c*d*h-u*p*x;break;case"YXZ":this._x=u*d*h+c*p*x,this._y=c*p*h-u*d*x,this._z=c*d*x-u*p*h,this._w=c*d*h+u*p*x;break;case"ZXY":this._x=u*d*h-c*p*x,this._y=c*p*h+u*d*x,this._z=c*d*x+u*p*h,this._w=c*d*h-u*p*x;break;case"ZYX":this._x=u*d*h-c*p*x,this._y=c*p*h+u*d*x,this._z=c*d*x-u*p*h,this._w=c*d*h+u*p*x;break;case"YZX":this._x=u*d*h+c*p*x,this._y=c*p*h+u*d*x,this._z=c*d*x-u*p*h,this._w=c*d*h-u*p*x;break;case"XZY":this._x=u*d*h-c*p*x,this._y=c*p*h-u*d*x,this._z=c*d*x+u*p*h,this._w=c*d*h+u*p*x;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],a=n[4],r=n[8],s=n[1],o=n[5],l=n[9],c=n[2],d=n[6],h=n[10],u=i+o+h;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-c)*p,this._z=(s-a)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(d-l)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(r-c)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(s-a)/p,this._x=(r+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,a=e._y,r=e._z,s=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+s*o+a*c-r*l,this._y=a*d+s*l+r*o-i*c,this._z=r*d+s*c+i*l-a*o,this._w=s*d-i*o-a*l-r*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,a=e._y,r=e._z,s=e._w,o=this.dot(e);o<0&&(i=-i,a=-a,r=-r,s=-s,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,n=Math.sin(n*c)/d,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+r*n,this._w=this._w*l+s*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+r*n,this._w=this._w*l+s*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const bm=class bm{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Cg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Cg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*a,this.y=r[1]*n+r[4]*i+r[7]*a,this.z=r[2]*n+r[5]*i+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,r=e.elements,s=1/(r[3]*n+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*n+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*n+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,a=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*a-o*i),d=2*(o*n-r*a),h=2*(r*i-s*n);return this.x=n+l*c+s*h-o*d,this.y=i+l*d+o*c-r*h,this.z=a+l*h+r*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*a,this.y=r[1]*n+r[5]*i+r[9]*a,this.z=r[2]*n+r[6]*i+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,a=e.y,r=e.z,s=n.x,o=n.y,l=n.z;return this.x=a*l-r*o,this.y=r*s-i*l,this.z=i*o-a*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ff.copy(this).projectOnVector(e),this.sub(Ff)}reflect(e){return this.sub(Ff.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return n*n+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const a=Math.sin(n)*e;return this.x=a*Math.sin(i),this.y=Math.cos(n)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};bm.prototype.isVector3=!0;let V=bm;const Ff=new V,Cg=new Ys,Em=class Em{constructor(e,n,i,a,r,s,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,a,r,s,o,l,c)}set(e,n,i,a,r,s,o,l,c){const d=this.elements;return d[0]=e,d[1]=a,d[2]=o,d[3]=n,d[4]=r,d[5]=l,d[6]=i,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,r=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],d=i[4],h=i[7],u=i[2],p=i[5],x=i[8],M=a[0],m=a[3],f=a[6],g=a[1],v=a[4],y=a[7],C=a[2],A=a[5],R=a[8];return r[0]=s*M+o*g+l*C,r[3]=s*m+o*v+l*A,r[6]=s*f+o*y+l*R,r[1]=c*M+d*g+h*C,r[4]=c*m+d*v+h*A,r[7]=c*f+d*y+h*R,r[2]=u*M+p*g+x*C,r[5]=u*m+p*v+x*A,r[8]=u*f+p*y+x*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*s*d-n*o*c-i*r*d+i*o*l+a*r*c-a*s*l}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*s-o*c,u=o*l-d*r,p=c*r-s*l,x=n*h+i*u+a*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/x;return e[0]=h*M,e[1]=(a*c-d*i)*M,e[2]=(o*i-a*s)*M,e[3]=u*M,e[4]=(d*n-a*l)*M,e[5]=(a*r-o*n)*M,e[6]=p*M,e[7]=(i*l-c*n)*M,e[8]=(s*n-i*r)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,a,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-a*c,a*l,-a*(-c*s+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Bf.makeScale(e,n)),this}rotate(e){return this.premultiply(Bf.makeRotation(-e)),this}translate(e,n){return this.premultiply(Bf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Em.prototype.isMatrix3=!0;let Oe=Em;const Bf=new Oe,Dg=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ng=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function W3(){const t={enabled:!0,workingColorSpace:fu,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===rt&&(a.r=na(a.r),a.g=na(a.g),a.b=na(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===rt&&(a.r=Ms(a.r),a.g=Ms(a.g),a.b=Ms(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Na?du:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return Qh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return Qh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(a,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[fu]:{primaries:e,whitePoint:i,transfer:du,toXYZ:Dg,fromXYZ:Ng,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:jn},outputColorSpaceConfig:{drawingBufferColorSpace:jn}},[jn]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:Dg,fromXYZ:Ng,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:jn}}}),t}const Ke=W3();function na(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ms(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Hr;class q3{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Hr===void 0&&(Hr=pu("canvas")),Hr.width=e.width,Hr.height=e.height;const a=Hr.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=Hr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=pu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=na(r[s]/255)*255;return i.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(na(n[i]/255)*255):n[i]=na(n[i]);return{data:n,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Y3=0;class Sm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Y3++}),this.uuid=dl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(If(a[s].image)):r.push(If(a[s]))}else r=If(a);i.url=r}return n||(e.images[this.uuid]=i),i}}function If(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?q3.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}let Z3=0;const zf=new V;class dn extends Or{constructor(e=dn.DEFAULT_IMAGE,n=dn.DEFAULT_MAPPING,i=Qi,a=Qi,r=fn,s=hr,o=fi,l=$n,c=dn.DEFAULT_ANISOTROPY,d=Na){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Z3++}),this.uuid=dl(),this.name="",this.source=new Sm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(zf).x}get height(){return this.source.getSize(zf).y}get depth(){return this.source.getSize(zf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ce(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Ce(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _h:e.x=e.x-Math.floor(e.x);break;case Qi:e.x=e.x<0?0:1;break;case Sh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _h:e.y=e.y-Math.floor(e.y);break;case Qi:e.y=e.y<0?0:1;break;case Sh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=dS;dn.DEFAULT_ANISOTROPY=1;const Tm=class Tm{constructor(e=0,n=0,i=0,a=1){this.x=e,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,a){return this.x=e,this.y=n,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,r=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*n+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*n+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*n+s[7]*i+s[11]*a+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,a,r;const l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],p=l[5],x=l[9],M=l[2],m=l[6],f=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-M)<.01&&Math.abs(x-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+M)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,y=(p+1)/2,C=(f+1)/2,A=(d+u)/4,R=(h+M)/4,S=(x+m)/4;return v>y&&v>C?v<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(v),a=A/i,r=R/i):y>C?y<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(y),i=A/a,r=S/a):C<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(C),i=R/r,a=S/r),this.set(i,a,r,n),this}let g=Math.sqrt((m-x)*(m-x)+(h-M)*(h-M)+(u-d)*(u-d));return Math.abs(g)<.001&&(g=1),this.x=(m-x)/g,this.y=(h-M)/g,this.z=(u-d)/g,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this.w=Qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this.w=Qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Tm.prototype.isVector4=!0;let Bt=Tm;class K3 extends Or{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Bt(0,0,e,n),this.scissorTest=!1,this.viewport=new Bt(0,0,e,n),this.textures=[];const a={width:e,height:n,depth:i.depth},r=new dn(a),s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new Sm(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends K3{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class yS extends dn{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=sn,this.minFilter=sn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Q3 extends dn{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=sn,this.minFilter=sn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const mu=class mu{constructor(e,n,i,a,r,s,o,l,c,d,h,u,p,x,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,a,r,s,o,l,c,d,h,u,p,x,M,m)}set(e,n,i,a,r,s,o,l,c,d,h,u,p,x,M,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=a,f[1]=r,f[5]=s,f[9]=o,f[13]=l,f[2]=c,f[6]=d,f[10]=h,f[14]=u,f[3]=p,f[7]=x,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mu().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,a=1/Gr.setFromMatrixColumn(e,0).length(),r=1/Gr.setFromMatrixColumn(e,1).length(),s=1/Gr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,a=e.y,r=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),d=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const u=s*d,p=s*h,x=o*d,M=o*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=p+x*c,n[5]=u-M*c,n[9]=-o*l,n[2]=M-u*c,n[6]=x+p*c,n[10]=s*l}else if(e.order==="YXZ"){const u=l*d,p=l*h,x=c*d,M=c*h;n[0]=u+M*o,n[4]=x*o-p,n[8]=s*c,n[1]=s*h,n[5]=s*d,n[9]=-o,n[2]=p*o-x,n[6]=M+u*o,n[10]=s*l}else if(e.order==="ZXY"){const u=l*d,p=l*h,x=c*d,M=c*h;n[0]=u-M*o,n[4]=-s*h,n[8]=x+p*o,n[1]=p+x*o,n[5]=s*d,n[9]=M-u*o,n[2]=-s*c,n[6]=o,n[10]=s*l}else if(e.order==="ZYX"){const u=s*d,p=s*h,x=o*d,M=o*h;n[0]=l*d,n[4]=x*c-p,n[8]=u*c+M,n[1]=l*h,n[5]=M*c+u,n[9]=p*c-x,n[2]=-c,n[6]=o*l,n[10]=s*l}else if(e.order==="YZX"){const u=s*l,p=s*c,x=o*l,M=o*c;n[0]=l*d,n[4]=M-u*h,n[8]=x*h+p,n[1]=h,n[5]=s*d,n[9]=-o*d,n[2]=-c*d,n[6]=p*h+x,n[10]=u-M*h}else if(e.order==="XZY"){const u=s*l,p=s*c,x=o*l,M=o*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=u*h+M,n[5]=s*d,n[9]=p*h-x,n[2]=x*h-p,n[6]=o*d,n[10]=M*h+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(J3,e,$3)}lookAt(e,n,i){const a=this.elements;return Dn.subVectors(e,n),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),_a.crossVectors(i,Dn),_a.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),_a.crossVectors(i,Dn)),_a.normalize(),Bl.crossVectors(Dn,_a),a[0]=_a.x,a[4]=Bl.x,a[8]=Dn.x,a[1]=_a.y,a[5]=Bl.y,a[9]=Dn.y,a[2]=_a.z,a[6]=Bl.z,a[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,r=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],d=i[1],h=i[5],u=i[9],p=i[13],x=i[2],M=i[6],m=i[10],f=i[14],g=i[3],v=i[7],y=i[11],C=i[15],A=a[0],R=a[4],S=a[8],w=a[12],N=a[1],D=a[5],I=a[9],W=a[13],q=a[2],P=a[6],U=a[10],O=a[14],j=a[3],$=a[7],ie=a[11],_e=a[15];return r[0]=s*A+o*N+l*q+c*j,r[4]=s*R+o*D+l*P+c*$,r[8]=s*S+o*I+l*U+c*ie,r[12]=s*w+o*W+l*O+c*_e,r[1]=d*A+h*N+u*q+p*j,r[5]=d*R+h*D+u*P+p*$,r[9]=d*S+h*I+u*U+p*ie,r[13]=d*w+h*W+u*O+p*_e,r[2]=x*A+M*N+m*q+f*j,r[6]=x*R+M*D+m*P+f*$,r[10]=x*S+M*I+m*U+f*ie,r[14]=x*w+M*W+m*O+f*_e,r[3]=g*A+v*N+y*q+C*j,r[7]=g*R+v*D+y*P+C*$,r[11]=g*S+v*I+y*U+C*ie,r[15]=g*w+v*W+y*O+C*_e,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],a=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],p=e[14],x=e[3],M=e[7],m=e[11],f=e[15],g=l*p-c*u,v=o*p-c*h,y=o*u-l*h,C=s*p-c*d,A=s*u-l*d,R=s*h-o*d;return n*(M*g-m*v+f*y)-i*(x*g-m*C+f*A)+a*(x*v-M*C+f*R)-r*(x*y-M*A+m*R)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],p=e[11],x=e[12],M=e[13],m=e[14],f=e[15],g=n*o-i*s,v=n*l-a*s,y=n*c-r*s,C=i*l-a*o,A=i*c-r*o,R=a*c-r*l,S=d*M-h*x,w=d*m-u*x,N=d*f-p*x,D=h*m-u*M,I=h*f-p*M,W=u*f-p*m,q=g*W-v*I+y*D+C*N-A*w+R*S;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/q;return e[0]=(o*W-l*I+c*D)*P,e[1]=(a*I-i*W-r*D)*P,e[2]=(M*R-m*A+f*C)*P,e[3]=(u*A-h*R-p*C)*P,e[4]=(l*N-s*W-c*w)*P,e[5]=(n*W-a*N+r*w)*P,e[6]=(m*y-x*R-f*v)*P,e[7]=(d*R-u*y+p*v)*P,e[8]=(s*I-o*N+c*S)*P,e[9]=(i*N-n*I-r*S)*P,e[10]=(x*A-M*y+f*g)*P,e[11]=(h*y-d*A-p*g)*P,e[12]=(o*w-s*D-l*S)*P,e[13]=(n*D-i*w+a*S)*P,e[14]=(M*v-x*C-m*g)*P,e[15]=(d*C-h*v+u*g)*P,this}scale(e){const n=this.elements,i=e.x,a=e.y,r=e.z;return n[0]*=i,n[4]*=a,n[8]*=r,n[1]*=i,n[5]*=a,n[9]*=r,n[2]*=i,n[6]*=a,n[10]*=r,n[3]*=i,n[7]*=a,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),a=Math.sin(n),r=1-i,s=e.x,o=e.y,l=e.z,c=r*s,d=r*o;return this.set(c*s+i,c*o-a*l,c*l+a*o,0,c*o+a*l,d*o+i,d*l-a*s,0,c*l-a*o,d*l+a*s,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,a,r,s){return this.set(1,i,r,0,e,1,s,0,n,a,1,0,0,0,0,1),this}compose(e,n,i){const a=this.elements,r=n._x,s=n._y,o=n._z,l=n._w,c=r+r,d=s+s,h=o+o,u=r*c,p=r*d,x=r*h,M=s*d,m=s*h,f=o*h,g=l*c,v=l*d,y=l*h,C=i.x,A=i.y,R=i.z;return a[0]=(1-(M+f))*C,a[1]=(p+y)*C,a[2]=(x-v)*C,a[3]=0,a[4]=(p-y)*A,a[5]=(1-(u+f))*A,a[6]=(m+g)*A,a[7]=0,a[8]=(x+v)*R,a[9]=(m-g)*R,a[10]=(1-(u+M))*R,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,i){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const r=this.determinant();if(r===0)return i.set(1,1,1),n.identity(),this;let s=Gr.set(a[0],a[1],a[2]).length();const o=Gr.set(a[4],a[5],a[6]).length(),l=Gr.set(a[8],a[9],a[10]).length();r<0&&(s=-s),si.copy(this);const c=1/s,d=1/o,h=1/l;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=d,si.elements[5]*=d,si.elements[6]*=d,si.elements[8]*=h,si.elements[9]*=h,si.elements[10]*=h,n.setFromRotationMatrix(si),i.x=s,i.y=o,i.z=l,this}makePerspective(e,n,i,a,r,s,o=Ti,l=!1){const c=this.elements,d=2*r/(n-e),h=2*r/(i-a),u=(n+e)/(n-e),p=(i+a)/(i-a);let x,M;if(l)x=r/(s-r),M=s*r/(s-r);else if(o===Ti)x=-(s+r)/(s-r),M=-2*s*r/(s-r);else if(o===hu)x=-s/(s-r),M=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,a,r,s,o=Ti,l=!1){const c=this.elements,d=2/(n-e),h=2/(i-a),u=-(n+e)/(n-e),p=-(i+a)/(i-a);let x,M;if(l)x=1/(s-r),M=s/(s-r);else if(o===Ti)x=-2/(s-r),M=-(s+r)/(s-r);else if(o===hu)x=-1/(s-r),M=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};mu.prototype.isMatrix4=!0;let Xt=mu;const Gr=new V,si=new Xt,J3=new V(0,0,0),$3=new V(1,1,1),_a=new V,Bl=new V,Dn=new V,Ug=new Xt,Lg=new Ys;class Rr{constructor(e=0,n=0,i=0,a=Rr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,a=this._order){return this._x=e,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const a=e.elements,r=a[0],s=a[4],o=a[8],l=a[1],c=a[5],d=a[9],h=a[2],u=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Qe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Ug.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ug,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Lg.setFromEuler(this),this.setFromQuaternion(Lg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rr.DEFAULT_ORDER="XYZ";class MS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let eT=0;const Og=new V,Vr=new Ys,zi=new Xt,Il=new V,ro=new V,tT=new V,nT=new Ys,Pg=new V(1,0,0),Fg=new V(0,1,0),Bg=new V(0,0,1),Ig={type:"added"},iT={type:"removed"},kr={type:"childadded",child:null},Hf={type:"childremoved",child:null};class En extends Or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eT++}),this.uuid=dl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const e=new V,n=new Rr,i=new Ys,a=new V(1,1,1);function r(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Xt},normalMatrix:{value:new Oe}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new MS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Vr.setFromAxisAngle(e,n),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(e,n){return Vr.setFromAxisAngle(e,n),this.quaternion.premultiply(Vr),this}rotateX(e){return this.rotateOnAxis(Pg,e)}rotateY(e){return this.rotateOnAxis(Fg,e)}rotateZ(e){return this.rotateOnAxis(Bg,e)}translateOnAxis(e,n){return Og.copy(e).applyQuaternion(this.quaternion),this.position.add(Og.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Pg,e)}translateY(e){return this.translateOnAxis(Fg,e)}translateZ(e){return this.translateOnAxis(Bg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Il.copy(e):Il.set(e,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(ro,Il,this.up):zi.lookAt(Il,ro,this.up),this.quaternion.setFromRotationMatrix(zi),a&&(zi.extractRotation(a.matrixWorld),Vr.setFromRotationMatrix(zi),this.quaternion.premultiply(Vr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ig),kr.child=e,this.dispatchEvent(kr),kr.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(iT),Hf.child=e,this.dispatchEvent(Hf),Hf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ig),kr.child=e,this.dispatchEvent(kr),kr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,e,tT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,nT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,a=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*a,r[13]+=i-r[1]*n-r[5]*i-r[9]*a,r[14]+=a-r[2]*n-r[6]*i-r[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));a.material=o}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(r(e.animations,l))}}if(n){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),h=s(e.shapes),u=s(e.skeletons),p=s(e.animations),x=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=a,i;function s(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}En.DEFAULT_UP=new V(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class zl extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const aT={type:"move"};class Gf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let a=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const M of e.hand.values()){const m=n.getJointPose(M,i),f=this._getHandJoint(c,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),p=.02,x=.005;c.inputState.pinching&&u>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(a=n.getPose(e.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(aT)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new zl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const bS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sa={h:0,s:0,l:0},Hl={h:0,s:0,l:0};function Vf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class at{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,n),this}setRGB(e,n,i,a=Ke.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ke.colorSpaceToWorking(this,a),this}setHSL(e,n,i,a=Ke.workingColorSpace){if(e=j3(e,1),n=Qe(n,0,1),i=Qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=Vf(s,r,e+1/3),this.g=Vf(s,r,e),this.b=Vf(s,r,e-1/3)}return Ke.colorSpaceToWorking(this,a),this}setStyle(e,n=jn){function i(r){r!==void 0&&parseFloat(r)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Ce("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(r,16),n);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=jn){const i=bS[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=na(e.r),this.g=na(e.g),this.b=na(e.b),this}copyLinearToSRGB(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return Ke.workingToColorSpace(un.copy(this),e),Math.round(Qe(un.r*255,0,255))*65536+Math.round(Qe(un.g*255,0,255))*256+Math.round(Qe(un.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ke.workingColorSpace){Ke.workingToColorSpace(un.copy(this),n);const i=un.r,a=un.g,r=un.b,s=Math.max(i,a,r),o=Math.min(i,a,r);let l,c;const d=(o+s)/2;if(o===s)l=0,c=0;else{const h=s-o;switch(c=d<=.5?h/(s+o):h/(2-s-o),s){case i:l=(a-r)/h+(a<r?6:0);break;case a:l=(r-i)/h+2;break;case r:l=(i-a)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Ke.workingColorSpace){return Ke.workingToColorSpace(un.copy(this),n),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=jn){Ke.workingToColorSpace(un.copy(this),e);const n=un.r,i=un.g,a=un.b;return e!==jn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,n,i){return this.getHSL(Sa),this.setHSL(Sa.h+e,Sa.s+n,Sa.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Sa),e.getHSL(Hl);const i=Pf(Sa.h,Hl.h,n),a=Pf(Sa.s,Hl.s,n),r=Pf(Sa.l,Hl.l,n);return this.setHSL(i,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,a=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*a,this.g=r[1]*n+r[4]*i+r[7]*a,this.b=r[2]*n+r[5]*i+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new at;at.NAMES=bS;class ES extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rr,this.environmentIntensity=1,this.environmentRotation=new Rr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const oi=new V,Hi=new V,kf=new V,Gi=new V,Xr=new V,jr=new V,zg=new V,Xf=new V,jf=new V,Wf=new V,qf=new Bt,Yf=new Bt,Zf=new Bt;class ui{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,a){a.subVectors(i,n),oi.subVectors(e,n),a.cross(oi);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,n,i,a,r){oi.subVectors(a,n),Hi.subVectors(i,n),kf.subVectors(e,n);const s=oi.dot(oi),o=oi.dot(Hi),l=oi.dot(kf),c=Hi.dot(Hi),d=Hi.dot(kf),h=s*c-o*o;if(h===0)return r.set(0,0,0),null;const u=1/h,p=(c*l-o*d)*u,x=(s*d-o*l)*u;return r.set(1-p-x,x,p)}static containsPoint(e,n,i,a){return this.getBarycoord(e,n,i,a,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,n,i,a,r,s,o,l){return this.getBarycoord(e,n,i,a,Gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gi.x),l.addScaledVector(s,Gi.y),l.addScaledVector(o,Gi.z),l)}static getInterpolatedAttribute(e,n,i,a,r,s){return qf.setScalar(0),Yf.setScalar(0),Zf.setScalar(0),qf.fromBufferAttribute(e,n),Yf.fromBufferAttribute(e,i),Zf.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(qf,r.x),s.addScaledVector(Yf,r.y),s.addScaledVector(Zf,r.z),s}static isFrontFacing(e,n,i,a){return oi.subVectors(i,n),Hi.subVectors(e,n),oi.cross(Hi).dot(a)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,a){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,i,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),oi.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ui.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,a,r){return ui.getInterpolation(e,this.a,this.b,this.c,n,i,a,r)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,a=this.b,r=this.c;let s,o;Xr.subVectors(a,i),jr.subVectors(r,i),Xf.subVectors(e,i);const l=Xr.dot(Xf),c=jr.dot(Xf);if(l<=0&&c<=0)return n.copy(i);jf.subVectors(e,a);const d=Xr.dot(jf),h=jr.dot(jf);if(d>=0&&h<=d)return n.copy(a);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return s=l/(l-d),n.copy(i).addScaledVector(Xr,s);Wf.subVectors(e,r);const p=Xr.dot(Wf),x=jr.dot(Wf);if(x>=0&&p<=x)return n.copy(r);const M=p*c-l*x;if(M<=0&&c>=0&&x<=0)return o=c/(c-x),n.copy(i).addScaledVector(jr,o);const m=d*x-p*h;if(m<=0&&h-d>=0&&p-x>=0)return zg.subVectors(r,a),o=(h-d)/(h-d+(p-x)),n.copy(a).addScaledVector(zg,o);const f=1/(m+M+u);return s=M*f,o=u*f,n.copy(i).addScaledVector(Xr,s).addScaledVector(jr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class hl{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(li.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(li.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=li.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,li):li.fromBufferAttribute(r,s),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Gl.copy(i.boundingBox)),Gl.applyMatrix4(e.matrixWorld),this.union(Gl)}const a=e.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(so),Vl.subVectors(this.max,so),Wr.subVectors(e.a,so),qr.subVectors(e.b,so),Yr.subVectors(e.c,so),ya.subVectors(qr,Wr),Ma.subVectors(Yr,qr),nr.subVectors(Wr,Yr);let n=[0,-ya.z,ya.y,0,-Ma.z,Ma.y,0,-nr.z,nr.y,ya.z,0,-ya.x,Ma.z,0,-Ma.x,nr.z,0,-nr.x,-ya.y,ya.x,0,-Ma.y,Ma.x,0,-nr.y,nr.x,0];return!Kf(n,Wr,qr,Yr,Vl)||(n=[1,0,0,0,1,0,0,0,1],!Kf(n,Wr,qr,Yr,Vl))?!1:(kl.crossVectors(ya,Ma),n=[kl.x,kl.y,kl.z],Kf(n,Wr,qr,Yr,Vl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Vi=[new V,new V,new V,new V,new V,new V,new V,new V],li=new V,Gl=new hl,Wr=new V,qr=new V,Yr=new V,ya=new V,Ma=new V,nr=new V,so=new V,Vl=new V,kl=new V,ir=new V;function Kf(t,e,n,i,a){for(let r=0,s=t.length-3;r<=s;r+=3){ir.fromArray(t,r);const o=a.x*Math.abs(ir.x)+a.y*Math.abs(ir.y)+a.z*Math.abs(ir.z),l=e.dot(ir),c=n.dot(ir),d=i.dot(ir);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const zt=new V,Xl=new lt;let rT=0;class ni extends Or{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rT++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Tg,this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=n.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Xl.fromBufferAttribute(this,n),Xl.applyMatrix3(e),this.setXY(n,Xl.x,Xl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix3(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix4(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyNormalMatrix(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.transformDirection(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ao(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=_n(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ao(n,this.array)),n}setX(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ao(n,this.array)),n}setY(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ao(n,this.array)),n}setZ(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ao(n,this.array)),n}setW(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,a){return e*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array),a=_n(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,n,i,a,r){return e*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array),a=_n(a,this.array),r=_n(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tg&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class TS extends ni{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class AS extends ni{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ia extends ni{constructor(e,n,i){super(new Float32Array(e),n,i)}}const sT=new hl,oo=new V,Qf=new V;class zu{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):sT.setFromPoints(e).getCenter(i);let a=0;for(let r=0,s=e.length;r<s;r++)a=Math.max(a,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oo.subVectors(e,this.center);const n=oo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(oo,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oo.copy(e.center).add(Qf)),this.expandByPoint(oo.copy(e.center).sub(Qf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let oT=0;const kn=new Xt,Jf=new En,Zr=new V,Nn=new hl,lo=new hl,Qt=new V;class mi extends Or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oT++}),this.uuid=dl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(G3(e)?AS:TS)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Oe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,n,i){return kn.makeTranslation(e,n,i),this.applyMatrix4(kn),this}scale(e,n,i){return kn.makeScale(e,n,i),this.applyMatrix4(kn),this}lookAt(e){return Jf.lookAt(e),Jf.updateMatrix(),this.applyMatrix4(Jf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,r=e.length;a<r;a++){const s=e[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new ia(i,3))}else{const i=Math.min(e.length,n.count);for(let a=0;a<i;a++){const r=e[a];n.setXYZ(a,r.x,r.y,r.z||0)}e.length>n.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,a=n.length;i<a;i++){const r=n[i];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),n)for(let r=0,s=n.length;r<s;r++){const o=n[r];lo.setFromBufferAttribute(o),this.morphTargetsRelative?(Qt.addVectors(Nn.min,lo.min),Nn.expandByPoint(Qt),Qt.addVectors(Nn.max,lo.max),Nn.expandByPoint(Qt)):(Nn.expandByPoint(lo.min),Nn.expandByPoint(lo.max))}Nn.getCenter(i);let a=0;for(let r=0,s=e.count;r<s;r++)Qt.fromBufferAttribute(e,r),a=Math.max(a,i.distanceToSquared(Qt));if(n)for(let r=0,s=n.length;r<s;r++){const o=n[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Qt.fromBufferAttribute(o,c),l&&(Zr.fromBufferAttribute(e,c),Qt.add(Zr)),a=Math.max(a,i.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ni(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let S=0;S<i.count;S++)o[S]=new V,l[S]=new V;const c=new V,d=new V,h=new V,u=new lt,p=new lt,x=new lt,M=new V,m=new V;function f(S,w,N){c.fromBufferAttribute(i,S),d.fromBufferAttribute(i,w),h.fromBufferAttribute(i,N),u.fromBufferAttribute(r,S),p.fromBufferAttribute(r,w),x.fromBufferAttribute(r,N),d.sub(c),h.sub(c),p.sub(u),x.sub(u);const D=1/(p.x*x.y-x.x*p.y);isFinite(D)&&(M.copy(d).multiplyScalar(x.y).addScaledVector(h,-p.y).multiplyScalar(D),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(D),o[S].add(M),o[w].add(M),o[N].add(M),l[S].add(m),l[w].add(m),l[N].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let S=0,w=g.length;S<w;++S){const N=g[S],D=N.start,I=N.count;for(let W=D,q=D+I;W<q;W+=3)f(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const v=new V,y=new V,C=new V,A=new V;function R(S){C.fromBufferAttribute(a,S),A.copy(C);const w=o[S];v.copy(w),v.sub(C.multiplyScalar(C.dot(w))).normalize(),y.crossVectors(A,w);const D=y.dot(l[S])<0?-1:1;s.setXYZW(S,v.x,v.y,v.z,D)}for(let S=0,w=g.length;S<w;++S){const N=g[S],D=N.start,I=N.count;for(let W=D,q=D+I;W<q;W+=3)R(e.getX(W+0)),R(e.getX(W+1)),R(e.getX(W+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ni(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const a=new V,r=new V,s=new V,o=new V,l=new V,c=new V,d=new V,h=new V;if(e)for(let u=0,p=e.count;u<p;u+=3){const x=e.getX(u+0),M=e.getX(u+1),m=e.getX(u+2);a.fromBufferAttribute(n,x),r.fromBufferAttribute(n,M),s.fromBufferAttribute(n,m),d.subVectors(s,r),h.subVectors(a,r),d.cross(h),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),o.add(d),l.add(d),c.add(d),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)a.fromBufferAttribute(n,u+0),r.fromBufferAttribute(n,u+1),s.fromBufferAttribute(n,u+2),d.subVectors(s,r),h.subVectors(a,r),d.cross(h),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Qt.fromBufferAttribute(e,n),Qt.normalize(),e.setXYZ(n,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,u=new c.constructor(l.length*d);let p=0,x=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*d;for(let f=0;f<d;f++)u[x++]=c[p++]}return new ni(u,d,h)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new mi,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=e(l,i);n.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,h=c.length;d<h;d++){const u=c[d],p=e(u,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const p=c[h];d.push(p.toJSON(e.data))}d.length>0&&(a[l]=d,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const c in a){const d=a[c];this.setAttribute(c,d.clone(n))}const r=e.morphAttributes;for(const c in r){const d=[],h=r[c];for(let u=0,p=h.length;u<p;u++)d.push(h[u].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let lT=0;class pl extends Or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lT++}),this.uuid=dl(),this.name="",this.type="Material",this.blending=ys,this.side=Qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uh,this.blendDst=fh,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zr,this.stencilZFail=zr,this.stencilZPass=zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ce(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Ce(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(i.blending=this.blending),this.side!==Qa&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==uh&&(i.blendSrc=this.blendSrc),this.blendDst!==fh&&(i.blendDst=this.blendDst),this.blendEquation!==fr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(n){const r=a(e.textures),s=a(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ki=new V,$f=new V,jl=new V,ba=new V,ed=new V,Wl=new V,td=new V;class wS{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ki.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,n),ki.distanceToSquared(e))}distanceSqToSegment(e,n,i,a){$f.copy(e).add(n).multiplyScalar(.5),jl.copy(n).sub(e).normalize(),ba.copy(this.origin).sub($f);const r=e.distanceTo(n)*.5,s=-this.direction.dot(jl),o=ba.dot(this.direction),l=-ba.dot(jl),c=ba.lengthSq(),d=Math.abs(1-s*s);let h,u,p,x;if(d>0)if(h=s*l-o,u=s*o-l,x=r*d,h>=0)if(u>=-x)if(u<=x){const M=1/d;h*=M,u*=M,p=h*(h+s*u+2*o)+u*(s*h+u+2*l)+c}else u=r,h=Math.max(0,-(s*u+o)),p=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(s*u+o)),p=-h*h+u*(u+2*l)+c;else u<=-x?(h=Math.max(0,-(-s*r+o)),u=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+u*(u+2*l)+c):u<=x?(h=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(h=Math.max(0,-(s*r+o)),u=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+u*(u+2*l)+c);else u=s>0?-r:r,h=Math.max(0,-(s*u+o)),p=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),a&&a.copy($f).addScaledVector(jl,u),p}intersectSphere(e,n){ki.subVectors(e.center,this.origin);const i=ki.dot(this.direction),a=ki.dot(ki)-i*i,r=e.radius*e.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,a,r,s,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,a=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,a=(e.min.x-u.x)*c),d>=0?(r=(e.min.y-u.y)*d,s=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,s=(e.min.y-u.y)*d),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),h>=0?(o=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,n,i,a,r){ed.subVectors(n,e),Wl.subVectors(i,e),td.crossVectors(ed,Wl);let s=this.direction.dot(td),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;ba.subVectors(this.origin,e);const l=o*this.direction.dot(Wl.crossVectors(ba,Wl));if(l<0)return null;const c=o*this.direction.dot(ed.cross(ba));if(c<0||l+c>s)return null;const d=-o*ba.dot(td);return d<0?null:this.at(d/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class RS extends pl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rr,this.combine=aS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Hg=new Xt,ar=new wS,ql=new zu,Gg=new V,Yl=new V,Zl=new V,Kl=new V,nd=new V,Ql=new V,Vg=new V,Jl=new V;class Ni extends En{constructor(e=new mi,n=new RS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,n){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(r&&o){Ql.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],h=r[l];d!==0&&(nd.fromBufferAttribute(h,e),s?Ql.addScaledVector(nd,d):Ql.addScaledVector(nd.sub(n),d))}n.add(Ql)}return n}raycast(e,n){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ql.copy(i.boundingSphere),ql.applyMatrix4(r),ar.copy(e.ray).recast(e.near),!(ql.containsPoint(ar.origin)===!1&&(ar.intersectSphere(ql,Gg)===null||ar.origin.distanceToSquared(Gg)>(e.far-e.near)**2))&&(Hg.copy(r).invert(),ar.copy(e.ray).applyMatrix4(Hg),!(i.boundingBox!==null&&ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ar)))}_computeIntersections(e,n,i){let a;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let x=0,M=u.length;x<M;x++){const m=u[x],f=s[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,C=v;y<C;y+=3){const A=o.getX(y),R=o.getX(y+1),S=o.getX(y+2);a=$l(this,f,e,i,c,d,h,A,R,S),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const x=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let m=x,f=M;m<f;m+=3){const g=o.getX(m),v=o.getX(m+1),y=o.getX(m+2);a=$l(this,s,e,i,c,d,h,g,v,y),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let x=0,M=u.length;x<M;x++){const m=u[x],f=s[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,C=v;y<C;y+=3){const A=y,R=y+1,S=y+2;a=$l(this,f,e,i,c,d,h,A,R,S),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const x=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=x,f=M;m<f;m+=3){const g=m,v=m+1,y=m+2;a=$l(this,s,e,i,c,d,h,g,v,y),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}}}function cT(t,e,n,i,a,r,s,o){let l;if(e.side===bn?l=i.intersectTriangle(s,r,a,!0,o):l=i.intersectTriangle(a,r,s,e.side===Qa,o),l===null)return null;Jl.copy(o),Jl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Jl);return c<n.near||c>n.far?null:{distance:c,point:Jl.clone(),object:t}}function $l(t,e,n,i,a,r,s,o,l,c){t.getVertexPosition(o,Yl),t.getVertexPosition(l,Zl),t.getVertexPosition(c,Kl);const d=cT(t,e,n,i,Yl,Zl,Kl,Vg);if(d){const h=new V;ui.getBarycoord(Vg,Yl,Zl,Kl,h),a&&(d.uv=ui.getInterpolatedAttribute(a,o,l,c,h,new lt)),r&&(d.uv1=ui.getInterpolatedAttribute(r,o,l,c,h,new lt)),s&&(d.normal=ui.getInterpolatedAttribute(s,o,l,c,h,new V),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new V,materialIndex:0};ui.getNormal(Yl,Zl,Kl,u.normal),d.face=u,d.barycoord=h}return d}class uT extends dn{constructor(e=null,n=1,i=1,a,r,s,o,l,c=sn,d=sn,h,u){super(null,s,o,l,c,d,a,r,h,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const id=new V,fT=new V,dT=new Oe;class ur{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,a){return this.normal.set(e,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const a=id.subVectors(i,n).cross(fT.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const a=e.delta(id),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(s<0||s>1)?null:n.copy(e.start).addScaledVector(a,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||dT.getNormalMatrix(e),a=this.coplanarPoint(id).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new zu,hT=new lt(.5,.5),ec=new V;class CS{constructor(e=new ur,n=new ur,i=new ur,a=new ur,r=new ur,s=new ur){this.planes=[e,n,i,a,r,s]}set(e,n,i,a,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ti,i=!1){const a=this.planes,r=e.elements,s=r[0],o=r[1],l=r[2],c=r[3],d=r[4],h=r[5],u=r[6],p=r[7],x=r[8],M=r[9],m=r[10],f=r[11],g=r[12],v=r[13],y=r[14],C=r[15];if(a[0].setComponents(c-s,p-d,f-x,C-g).normalize(),a[1].setComponents(c+s,p+d,f+x,C+g).normalize(),a[2].setComponents(c+o,p+h,f+M,C+v).normalize(),a[3].setComponents(c-o,p-h,f-M,C-v).normalize(),i)a[4].setComponents(l,u,m,y).normalize(),a[5].setComponents(c-l,p-u,f-m,C-y).normalize();else if(a[4].setComponents(c-l,p-u,f-m,C-y).normalize(),n===Ti)a[5].setComponents(c+l,p+u,f+m,C+y).normalize();else if(n===hu)a[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){rr.center.set(0,0,0);const n=hT.distanceTo(e.center);return rr.radius=.7071067811865476+n,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){const n=this.planes,i=e.center,a=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(ec.x=a.normal.x>0?e.max.x:e.min.x,ec.y=a.normal.y>0?e.max.y:e.min.y,ec.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(ec)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class DS extends pl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const kg=new Xt,$h=new wS,tc=new zu,nc=new V;class pT extends En{constructor(e=new mi,n=new DS){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,a=this.matrixWorld,r=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),tc.copy(i.boundingSphere),tc.applyMatrix4(a),tc.radius+=r,e.ray.intersectsSphere(tc)===!1)return;kg.copy(a).invert(),$h.copy(e.ray).applyMatrix4(kg);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const u=Math.max(0,s.start),p=Math.min(c.count,s.start+s.count);for(let x=u,M=p;x<M;x++){const m=c.getX(x);nc.fromBufferAttribute(h,m),Xg(nc,m,l,a,e,n,this)}}else{const u=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let x=u,M=p;x<M;x++)nc.fromBufferAttribute(h,x),Xg(nc,x,l,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Xg(t,e,n,i,a,r,s){const o=$h.distanceSqToPoint(t);if(o<n){const l=new V;$h.closestPointToPoint(t,l),l.applyMatrix4(i);const c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class NS extends dn{constructor(e=[],n=Ar,i,a,r,s,o,l,c,d){super(e,n,i,a,r,s,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mT extends dn{constructor(e,n,i,a,r,s,o,l,c){super(e,n,i,a,r,s,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fs extends dn{constructor(e,n,i=Di,a,r,s,o=sn,l=sn,c,d=fa,h=1){if(d!==fa&&d!==pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:h};super(u,a,r,s,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Sm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class gT extends Fs{constructor(e,n=Di,i=Ar,a,r,s=sn,o=sn,l,c=fa){const d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,n,i,a,r,s,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class US extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ml extends mi{constructor(e=1,n=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],d=[],h=[];let u=0,p=0;x("z","y","x",-1,-1,i,n,e,s,r,0),x("z","y","x",1,-1,i,n,-e,s,r,1),x("x","z","y",1,1,e,i,n,a,s,2),x("x","z","y",1,-1,e,i,-n,a,s,3),x("x","y","z",1,-1,e,n,i,a,r,4),x("x","y","z",-1,-1,e,n,-i,a,r,5),this.setIndex(l),this.setAttribute("position",new ia(c,3)),this.setAttribute("normal",new ia(d,3)),this.setAttribute("uv",new ia(h,2));function x(M,m,f,g,v,y,C,A,R,S,w){const N=y/R,D=C/S,I=y/2,W=C/2,q=A/2,P=R+1,U=S+1;let O=0,j=0;const $=new V;for(let ie=0;ie<U;ie++){const _e=ie*D-W;for(let Me=0;Me<P;Me++){const Ve=Me*N-I;$[M]=Ve*g,$[m]=_e*v,$[f]=q,c.push($.x,$.y,$.z),$[M]=0,$[m]=0,$[f]=A>0?1:-1,d.push($.x,$.y,$.z),h.push(Me/R),h.push(1-ie/S),O+=1}}for(let ie=0;ie<S;ie++)for(let _e=0;_e<R;_e++){const Me=u+_e+P*ie,Ve=u+_e+P*(ie+1),We=u+(_e+1)+P*(ie+1),Ne=u+(_e+1)+P*ie;l.push(Me,Ve,Ne),l.push(Ve,We,Ne),j+=6}o.addGroup(p,j,w),p+=j,u+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ml(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class gl extends mi{constructor(e=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:a};const r=e/2,s=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,d=l+1,h=e/o,u=n/l,p=[],x=[],M=[],m=[];for(let f=0;f<d;f++){const g=f*u-s;for(let v=0;v<c;v++){const y=v*h-r;x.push(y,-g,0),M.push(0,0,1),m.push(v/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let g=0;g<o;g++){const v=g+c*f,y=g+c*(f+1),C=g+1+c*(f+1),A=g+1+c*f;p.push(v,y,A),p.push(y,C,A)}this.setIndex(p),this.setAttribute("position",new ia(x,3)),this.setAttribute("normal",new ia(M,3)),this.setAttribute("uv",new ia(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gl(e.width,e.height,e.widthSegments,e.heightSegments)}}function Bs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const a=t[n][i];if(jg(a))a.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=a.clone();else if(Array.isArray(a))if(jg(a[0])){const r=[];for(let s=0,o=a.length;s<o;s++)r[s]=a[s].clone();e[n][i]=r}else e[n][i]=a.slice();else e[n][i]=a}}return e}function hn(t){const e={};for(let n=0;n<t.length;n++){const i=Bs(t[n]);for(const a in i)e[a]=i[a]}return e}function jg(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function xT(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function LS(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const vT={clone:Bs,merge:hn};var _T=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ST=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends pl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_T,this.fragmentShader=ST,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=xT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?n.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[a]={type:"m4",value:s.toArray()}:n.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class yT extends hi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class MT extends pl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=L3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bT extends pl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ic=new V,ac=new Ys,vi=new V;class OS extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=Ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ic,ac,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ic,ac,vi.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(ic,ac,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ic,ac,vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ea=new V,Wg=new lt,qg=new lt;class Zn extends OS{constructor(e=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Jh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Of*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jh*2*Math.atan(Math.tan(Of*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ea.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ea.x,Ea.y).multiplyScalar(-e/Ea.z),Ea.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ea.x,Ea.y).multiplyScalar(-e/Ea.z)}getViewSize(e,n){return this.getViewBounds(e,Wg,qg),n.subVectors(qg,Wg)}setViewOffset(e,n,i,a,r,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Of*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*a/l,n-=s.offsetY*i/c,a*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class ym extends OS{constructor(e=-1,n=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-e,s=i+e,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Kr=-90,Qr=1;class ET extends En{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Zn(Kr,Qr,e,n);a.layers=this.layers,this.add(a);const r=new Zn(Kr,Qr,e,n);r.layers=this.layers,this.add(r);const s=new Zn(Kr,Qr,e,n);s.layers=this.layers,this.add(s);const o=new Zn(Kr,Qr,e,n);o.layers=this.layers,this.add(o);const l=new Zn(Kr,Qr,e,n);l.layers=this.layers,this.add(l);const c=new Zn(Kr,Qr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,a,r,s,o,l]=n;for(const c of n)this.remove(c);if(e===Ti)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hu)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,2,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(h,u,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class TT extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class PS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ce("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const Am=class Am{constructor(e,n,i,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,a){const r=this.elements;return r[0]=e,r[2]=n,r[1]=i,r[3]=a,this}};Am.prototype.isMatrix2=!0;let Yg=Am;function Zg(t,e,n,i){const a=AT(i);switch(n){case xS:return t*e;case _S:return t*e/a.components*a.byteLength;case mm:return t*e/a.components*a.byteLength;case wr:return t*e*2/a.components*a.byteLength;case gm:return t*e*2/a.components*a.byteLength;case vS:return t*e*3/a.components*a.byteLength;case fi:return t*e*4/a.components*a.byteLength;case xm:return t*e*4/a.components*a.byteLength;case Tc:case Ac:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case wc:case Rc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Mh:case Eh:return Math.max(t,16)*Math.max(e,8)/4;case yh:case bh:return Math.max(t,8)*Math.max(e,8)/2;case Th:case Ah:case Rh:case Ch:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case wh:case cu:case Dh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Nh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Uh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Lh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ih:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case zh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Gh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Vh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case kh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Xh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case jh:case Wh:case qh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Yh:case Zh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case uu:case Kh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function AT(t){switch(t){case $n:case hS:return{byteLength:1,components:1};case Zo:case pS:case ua:return{byteLength:2,components:1};case hm:case pm:return{byteLength:2,components:4};case Di:case dm:case Ei:return{byteLength:4,components:1};case mS:case gS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fm}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function FS(){let t=null,e=!1,n=null,i=null;function a(r,s){n(r,s),i=t.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(a),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function wT(t){const e=new WeakMap;function n(o,l){const c=o.array,d=o.usage,h=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const d=l.array,h=l.updateRanges;if(t.bindBuffer(c,o),h.length===0)t.bufferSubData(c,0,d);else{h.sort((p,x)=>p.start-x.start);let u=0;for(let p=1;p<h.length;p++){const x=h[u],M=h[p];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++u,h[u]=M)}h.length=u+1;for(let p=0,x=h.length;p<x;p++){const M=h[p];t.bufferSubData(c,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:r,update:s}}var RT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,CT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,DT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,NT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,LT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,PT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,FT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,BT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,IT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,HT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,GT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,VT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,XT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,WT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,YT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ZT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,KT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,QT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,JT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$T=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,eA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aA="gl_FragColor = linearToOutputTexel( gl_FragColor );",rA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,oA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,lA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_A=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,SA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,MA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,EA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,AA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,RA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,CA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,DA=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,NA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,UA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,PA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,FA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,BA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,IA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,HA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,GA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,VA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,YA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,QA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,JA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$A=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ew=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,aw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ow=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,fw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_w=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ew=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Aw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ww=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ow=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Pw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Fw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Iw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ww=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Kw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$w=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,iR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:RT,alphahash_pars_fragment:CT,alphamap_fragment:DT,alphamap_pars_fragment:NT,alphatest_fragment:UT,alphatest_pars_fragment:LT,aomap_fragment:OT,aomap_pars_fragment:PT,batching_pars_vertex:FT,batching_vertex:BT,begin_vertex:IT,beginnormal_vertex:zT,bsdfs:HT,iridescence_fragment:GT,bumpmap_pars_fragment:VT,clipping_planes_fragment:kT,clipping_planes_pars_fragment:XT,clipping_planes_pars_vertex:jT,clipping_planes_vertex:WT,color_fragment:qT,color_pars_fragment:YT,color_pars_vertex:ZT,color_vertex:KT,common:QT,cube_uv_reflection_fragment:JT,defaultnormal_vertex:$T,displacementmap_pars_vertex:eA,displacementmap_vertex:tA,emissivemap_fragment:nA,emissivemap_pars_fragment:iA,colorspace_fragment:aA,colorspace_pars_fragment:rA,envmap_fragment:sA,envmap_common_pars_fragment:oA,envmap_pars_fragment:lA,envmap_pars_vertex:cA,envmap_physical_pars_fragment:SA,envmap_vertex:uA,fog_vertex:fA,fog_pars_vertex:dA,fog_fragment:hA,fog_pars_fragment:pA,gradientmap_pars_fragment:mA,lightmap_pars_fragment:gA,lights_lambert_fragment:xA,lights_lambert_pars_fragment:vA,lights_pars_begin:_A,lights_toon_fragment:yA,lights_toon_pars_fragment:MA,lights_phong_fragment:bA,lights_phong_pars_fragment:EA,lights_physical_fragment:TA,lights_physical_pars_fragment:AA,lights_fragment_begin:wA,lights_fragment_maps:RA,lights_fragment_end:CA,lightprobes_pars_fragment:DA,logdepthbuf_fragment:NA,logdepthbuf_pars_fragment:UA,logdepthbuf_pars_vertex:LA,logdepthbuf_vertex:OA,map_fragment:PA,map_pars_fragment:FA,map_particle_fragment:BA,map_particle_pars_fragment:IA,metalnessmap_fragment:zA,metalnessmap_pars_fragment:HA,morphinstance_vertex:GA,morphcolor_vertex:VA,morphnormal_vertex:kA,morphtarget_pars_vertex:XA,morphtarget_vertex:jA,normal_fragment_begin:WA,normal_fragment_maps:qA,normal_pars_fragment:YA,normal_pars_vertex:ZA,normal_vertex:KA,normalmap_pars_fragment:QA,clearcoat_normal_fragment_begin:JA,clearcoat_normal_fragment_maps:$A,clearcoat_pars_fragment:ew,iridescence_pars_fragment:tw,opaque_fragment:nw,packing:iw,premultiplied_alpha_fragment:aw,project_vertex:rw,dithering_fragment:sw,dithering_pars_fragment:ow,roughnessmap_fragment:lw,roughnessmap_pars_fragment:cw,shadowmap_pars_fragment:uw,shadowmap_pars_vertex:fw,shadowmap_vertex:dw,shadowmask_pars_fragment:hw,skinbase_vertex:pw,skinning_pars_vertex:mw,skinning_vertex:gw,skinnormal_vertex:xw,specularmap_fragment:vw,specularmap_pars_fragment:_w,tonemapping_fragment:Sw,tonemapping_pars_fragment:yw,transmission_fragment:Mw,transmission_pars_fragment:bw,uv_pars_fragment:Ew,uv_pars_vertex:Tw,uv_vertex:Aw,worldpos_vertex:ww,background_vert:Rw,background_frag:Cw,backgroundCube_vert:Dw,backgroundCube_frag:Nw,cube_vert:Uw,cube_frag:Lw,depth_vert:Ow,depth_frag:Pw,distance_vert:Fw,distance_frag:Bw,equirect_vert:Iw,equirect_frag:zw,linedashed_vert:Hw,linedashed_frag:Gw,meshbasic_vert:Vw,meshbasic_frag:kw,meshlambert_vert:Xw,meshlambert_frag:jw,meshmatcap_vert:Ww,meshmatcap_frag:qw,meshnormal_vert:Yw,meshnormal_frag:Zw,meshphong_vert:Kw,meshphong_frag:Qw,meshphysical_vert:Jw,meshphysical_frag:$w,meshtoon_vert:eR,meshtoon_frag:tR,points_vert:nR,points_frag:iR,shadow_vert:aR,shadow_frag:rR,sprite_vert:sR,sprite_frag:oR},de={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Si={basic:{uniforms:hn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:hn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new at(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:hn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:hn([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:hn([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new at(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:hn([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:hn([de.points,de.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:hn([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:hn([de.common,de.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:hn([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:hn([de.sprite,de.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:hn([de.common,de.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:hn([de.lights,de.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Si.physical={uniforms:hn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const rc={r:0,b:0,g:0},lR=new Xt,BS=new Oe;BS.set(-1,0,0,0,1,0,0,0,1);function cR(t,e,n,i,a,r){const s=new at(0);let o=a===!0?0:1,l,c,d=null,h=0,u=null;function p(g){let v=g.isScene===!0?g.background:null;if(v&&v.isTexture){const y=g.backgroundBlurriness>0;v=e.get(v,y)}return v}function x(g){let v=!1;const y=p(g);y===null?m(s,o):y&&y.isColor&&(m(y,1),v=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function M(g,v){const y=p(v);y&&(y.isCubeTexture||y.mapping===Iu)?(c===void 0&&(c=new Ni(new ml(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:Bs(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(lR.makeRotationFromEuler(v.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(BS),c.material.toneMapped=Ke.getTransfer(y.colorSpace)!==rt,(d!==y||h!==y.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,d=y,h=y.version,u=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ni(new gl(2,2),new hi({name:"BackgroundMaterial",uniforms:Bs(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:Qa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(y.colorSpace)!==rt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||h!==y.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,d=y,h=y.version,u=t.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function m(g,v){g.getRGB(rc,LS(t)),n.buffers.color.setClear(rc.r,rc.g,rc.b,v,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(g,v=1){s.set(g),o=v,m(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,m(s,o)},render:x,addToRenderList:M,dispose:f}}function uR(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},a=u(null);let r=a,s=!1;function o(D,I,W,q,P){let U=!1;const O=h(D,q,W,I);r!==O&&(r=O,c(r.object)),U=p(D,q,W,P),U&&x(D,q,W,P),P!==null&&e.update(P,t.ELEMENT_ARRAY_BUFFER),(U||s)&&(s=!1,y(D,I,W,q),P!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function l(){return t.createVertexArray()}function c(D){return t.bindVertexArray(D)}function d(D){return t.deleteVertexArray(D)}function h(D,I,W,q){const P=q.wireframe===!0;let U=i[I.id];U===void 0&&(U={},i[I.id]=U);const O=D.isInstancedMesh===!0?D.id:0;let j=U[O];j===void 0&&(j={},U[O]=j);let $=j[W.id];$===void 0&&($={},j[W.id]=$);let ie=$[P];return ie===void 0&&(ie=u(l()),$[P]=ie),ie}function u(D){const I=[],W=[],q=[];for(let P=0;P<n;P++)I[P]=0,W[P]=0,q[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:W,attributeDivisors:q,object:D,attributes:{},index:null}}function p(D,I,W,q){const P=r.attributes,U=I.attributes;let O=0;const j=W.getAttributes();for(const $ in j)if(j[$].location>=0){const _e=P[$];let Me=U[$];if(Me===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(Me=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(Me=D.instanceColor)),_e===void 0||_e.attribute!==Me||Me&&_e.data!==Me.data)return!0;O++}return r.attributesNum!==O||r.index!==q}function x(D,I,W,q){const P={},U=I.attributes;let O=0;const j=W.getAttributes();for(const $ in j)if(j[$].location>=0){let _e=U[$];_e===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(_e=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(_e=D.instanceColor));const Me={};Me.attribute=_e,_e&&_e.data&&(Me.data=_e.data),P[$]=Me,O++}r.attributes=P,r.attributesNum=O,r.index=q}function M(){const D=r.newAttributes;for(let I=0,W=D.length;I<W;I++)D[I]=0}function m(D){f(D,0)}function f(D,I){const W=r.newAttributes,q=r.enabledAttributes,P=r.attributeDivisors;W[D]=1,q[D]===0&&(t.enableVertexAttribArray(D),q[D]=1),P[D]!==I&&(t.vertexAttribDivisor(D,I),P[D]=I)}function g(){const D=r.newAttributes,I=r.enabledAttributes;for(let W=0,q=I.length;W<q;W++)I[W]!==D[W]&&(t.disableVertexAttribArray(W),I[W]=0)}function v(D,I,W,q,P,U,O){O===!0?t.vertexAttribIPointer(D,I,W,P,U):t.vertexAttribPointer(D,I,W,q,P,U)}function y(D,I,W,q){M();const P=q.attributes,U=W.getAttributes(),O=I.defaultAttributeValues;for(const j in U){const $=U[j];if($.location>=0){let ie=P[j];if(ie===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(ie=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(ie=D.instanceColor)),ie!==void 0){const _e=ie.normalized,Me=ie.itemSize,Ve=e.get(ie);if(Ve===void 0)continue;const We=Ve.buffer,Ne=Ve.type,ee=Ve.bytesPerElement,me=Ne===t.INT||Ne===t.UNSIGNED_INT||ie.gpuType===dm;if(ie.isInterleavedBufferAttribute){const oe=ie.data,we=oe.stride,Le=ie.offset;if(oe.isInstancedInterleavedBuffer){for(let Re=0;Re<$.locationSize;Re++)f($.location+Re,oe.meshPerAttribute);D.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Re=0;Re<$.locationSize;Re++)m($.location+Re);t.bindBuffer(t.ARRAY_BUFFER,We);for(let Re=0;Re<$.locationSize;Re++)v($.location+Re,Me/$.locationSize,Ne,_e,we*ee,(Le+Me/$.locationSize*Re)*ee,me)}else{if(ie.isInstancedBufferAttribute){for(let oe=0;oe<$.locationSize;oe++)f($.location+oe,ie.meshPerAttribute);D.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let oe=0;oe<$.locationSize;oe++)m($.location+oe);t.bindBuffer(t.ARRAY_BUFFER,We);for(let oe=0;oe<$.locationSize;oe++)v($.location+oe,Me/$.locationSize,Ne,_e,Me*ee,Me/$.locationSize*oe*ee,me)}}else if(O!==void 0){const _e=O[j];if(_e!==void 0)switch(_e.length){case 2:t.vertexAttrib2fv($.location,_e);break;case 3:t.vertexAttrib3fv($.location,_e);break;case 4:t.vertexAttrib4fv($.location,_e);break;default:t.vertexAttrib1fv($.location,_e)}}}}g()}function C(){w();for(const D in i){const I=i[D];for(const W in I){const q=I[W];for(const P in q){const U=q[P];for(const O in U)d(U[O].object),delete U[O];delete q[P]}}delete i[D]}}function A(D){if(i[D.id]===void 0)return;const I=i[D.id];for(const W in I){const q=I[W];for(const P in q){const U=q[P];for(const O in U)d(U[O].object),delete U[O];delete q[P]}}delete i[D.id]}function R(D){for(const I in i){const W=i[I];for(const q in W){const P=W[q];if(P[D.id]===void 0)continue;const U=P[D.id];for(const O in U)d(U[O].object),delete U[O];delete P[D.id]}}}function S(D){for(const I in i){const W=i[I],q=D.isInstancedMesh===!0?D.id:0,P=W[q];if(P!==void 0){for(const U in P){const O=P[U];for(const j in O)d(O[j].object),delete O[j];delete P[U]}delete W[q],Object.keys(W).length===0&&delete i[I]}}}function w(){N(),s=!0,r!==a&&(r=a,c(r.object))}function N(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:w,resetDefaultState:N,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfObject:S,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:m,disableUnusedAttributes:g}}function fR(t,e,n){let i;function a(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function s(l,c,d){d!==0&&(t.drawArraysInstanced(i,l,c,d),n.update(c,i,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let u=0;for(let p=0;p<d;p++)u+=c[p];n.update(u,i,1)}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o}function dR(t,e,n,i){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");a=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(R){return!(R!==fi&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const S=R===ua&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==$n&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Ei&&!S)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(Ce("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:y,maxSamples:C,samples:A}}function hR(t){const e=this;let n=null,i=0,a=!1,r=!1;const s=new ur,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const p=h.length!==0||u||i!==0||a;return a=u,i=h.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){n=d(h,u,0)},this.setState=function(h,u,p){const x=h.clippingPlanes,M=h.clipIntersection,m=h.clipShadows,f=t.get(h);if(!a||x===null||x.length===0||r&&!m)r?d(null):c();else{const g=r?0:i,v=g*4;let y=f.clippingState||null;l.value=y,y=d(x,u,v,p);for(let C=0;C!==v;++C)y[C]=n[C];f.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,u,p,x){const M=h!==null?h.length:0;let m=null;if(M!==0){if(m=l.value,x!==!0||m===null){const f=p+M*4,g=u.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,y=p;v!==M;++v,y+=4)s.copy(h[v]).applyMatrix4(g,o),s.normal.toArray(m,y),m[y+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}const Ba=4,Kg=[.125,.215,.35,.446,.526,.582],dr=20,pR=256,co=new ym,Qg=new at;let ad=null,rd=0,sd=0,od=!1;const mR=new V;class Jg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,a=100,r={}){const{size:s=256,position:o=mR}=r;ad=this._renderer.getRenderTarget(),rd=this._renderer.getActiveCubeFace(),sd=this._renderer.getActiveMipmapLevel(),od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ex(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ad,rd,sd),this._renderer.xr.enabled=od,e.scissorTest=!1,Jr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ar||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ad=this._renderer.getRenderTarget(),rd=this._renderer.getActiveCubeFace(),sd=this._renderer.getActiveMipmapLevel(),od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:ua,format:fi,colorSpace:fu,depthBuffer:!1},a=$g(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$g(e,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=gR(r)),this._blurMaterial=vR(r,e,n),this._ggxMaterial=xR(r,e,n)}return a}_compileMaterial(e){const n=new Ni(new mi,e);this._renderer.compile(n,co)}_sceneToCubeUV(e,n,i,a,r){const l=new Zn(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(Qg),h.toneMapping=wi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(a),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ni(new ml,new RS({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,m=M.material;let f=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,f=!0):(m.color.copy(Qg),f=!0);for(let v=0;v<6;v++){const y=v%3;y===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[v],r.y,r.z)):y===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[v]));const C=this._cubeSize;Jr(a,y*C,v>2?C:0,C,C),h.setRenderTarget(a),f&&h.render(M,l),h.render(e,l)}h.toneMapping=p,h.autoClear=u,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,a=e.mapping===Ar||e.mapping===Ps;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=tx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ex());const r=a?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Jr(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,co)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let r=1;r<a;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){const a=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[i];o.material=s;const l=s.uniforms,c=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),u=0+c*1.25,p=h*u,{_lodMax:x}=this,M=this._sizeLods[i],m=3*M*(i>x-Ba?i-x+Ba:0),f=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=x-n,Jr(r,m,f,3*M,2*M),a.setRenderTarget(r),a.render(o,co),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-i,Jr(e,m,f,3*M,2*M),a.setRenderTarget(e),a.render(o,co)}_blur(e,n,i,a,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,a,"latitudinal",r),this._halfBlur(s,e,i,i,a,"longitudinal",r)}_halfBlur(e,n,i,a,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&et("blur direction must be either latitudinal or longitudinal!");const d=3,h=this._lodMeshes[a];h.material=c;const u=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*dr-1),M=r/x,m=isFinite(r)?1+Math.floor(d*M):dr;m>dr&&Ce(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${dr}`);const f=[];let g=0;for(let R=0;R<dr;++R){const S=R/M,w=Math.exp(-S*S/2);f.push(w),R===0?g+=w:R<m&&(g+=2*w)}for(let R=0;R<f.length;R++)f[R]=f[R]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=s==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:v}=this;u.dTheta.value=x,u.mipInt.value=v-i;const y=this._sizeLods[a],C=3*y*(a>v-Ba?a-v+Ba:0),A=4*(this._cubeSize-y);Jr(n,C,A,3*y,2*y),l.setRenderTarget(n),l.render(h,co)}}function gR(t){const e=[],n=[],i=[];let a=t;const r=t-Ba+1+Kg.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);e.push(o);let l=1/o;s>t-Ba?l=Kg[s-t+Ba-1]:s===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,x=6,M=3,m=2,f=1,g=new Float32Array(M*x*p),v=new Float32Array(m*x*p),y=new Float32Array(f*x*p);for(let A=0;A<p;A++){const R=A%3*2/3-1,S=A>2?0:-1,w=[R,S,0,R+2/3,S,0,R+2/3,S+1,0,R,S,0,R+2/3,S+1,0,R,S+1,0];g.set(w,M*x*A),v.set(u,m*x*A);const N=[A,A,A,A,A,A];y.set(N,f*x*A)}const C=new mi;C.setAttribute("position",new ni(g,M)),C.setAttribute("uv",new ni(v,m)),C.setAttribute("faceIndex",new ni(y,f)),i.push(new Ni(C,null)),a>Ba&&a--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function $g(t,e,n){const i=new Ri(t,e,n);return i.texture.mapping=Iu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Jr(t,e,n,i,a){t.viewport.set(e,n,i,a),t.scissor.set(e,n,i,a)}function xR(t,e,n){return new hi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:pR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Hu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ta,depthTest:!1,depthWrite:!1})}function vR(t,e,n){const i=new Float32Array(dr),a=new V(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ta,depthTest:!1,depthWrite:!1})}function ex(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ta,depthTest:!1,depthWrite:!1})}function tx(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ta,depthTest:!1,depthWrite:!1})}function Hu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class IS extends Ri{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new NS(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new ml(5,5,5),r=new hi({name:"CubemapFromEquirect",uniforms:Bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:ta});r.uniforms.tEquirect.value=n;const s=new Ni(a,r),o=n.minFilter;return n.minFilter===hr&&(n.minFilter=fn),new ET(1,10,this).update(e,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,n=!0,i=!0,a=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,a);e.setRenderTarget(r)}}function _R(t){let e=new WeakMap,n=new WeakMap,i=null;function a(u,p=!1){return u==null?null:p?s(u):r(u)}function r(u){if(u&&u.isTexture){const p=u.mapping;if(p===Nf||p===Uf)if(e.has(u)){const x=e.get(u).texture;return o(x,u.mapping)}else{const x=u.image;if(x&&x.height>0){const M=new IS(x.height);return M.fromEquirectangularTexture(t,u),e.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture){const p=u.mapping,x=p===Nf||p===Uf,M=p===Ar||p===Ps;if(x||M){let m=n.get(u);const f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new Jg(t)),m=x?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture;if(m!==void 0)return m.texture;{const g=u.image;return x&&g&&g.height>0||M&&g&&l(g)?(i===null&&(i=new Jg(t)),m=x?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",d),m.texture):null}}}return u}function o(u,p){return p===Nf?u.mapping=Ar:p===Uf&&(u.mapping=Ps),u}function l(u){let p=0;const x=6;for(let M=0;M<x;M++)u[M]!==void 0&&p++;return p===x}function c(u){const p=u.target;p.removeEventListener("dispose",c);const x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function d(u){const p=u.target;p.removeEventListener("dispose",d);const x=n.get(p);x!==void 0&&(n.delete(p),x.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:h}}function SR(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const a=t.getExtension(i);return e[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&Qh("WebGLRenderer: "+i+" extension not supported."),a}}}function yR(t,e,n,i){const a={},r=new WeakMap;function s(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const x in u.attributes)e.remove(u.attributes[x]);u.removeEventListener("dispose",s),delete a[u.id];const p=r.get(u);p&&(e.remove(p),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(h,u){return a[u.id]===!0||(u.addEventListener("dispose",s),a[u.id]=!0,n.memory.geometries++),u}function l(h){const u=h.attributes;for(const p in u)e.update(u[p],t.ARRAY_BUFFER)}function c(h){const u=[],p=h.index,x=h.attributes.position;let M=0;if(x===void 0)return;if(p!==null){const g=p.array;M=p.version;for(let v=0,y=g.length;v<y;v+=3){const C=g[v+0],A=g[v+1],R=g[v+2];u.push(C,A,A,R,R,C)}}else{const g=x.array;M=x.version;for(let v=0,y=g.length/3-1;v<y;v+=3){const C=v+0,A=v+1,R=v+2;u.push(C,A,A,R,R,C)}}const m=new(x.count>=65535?AS:TS)(u,1);m.version=M;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function d(h){const u=r.get(h);if(u){const p=h.index;p!==null&&u.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function MR(t,e,n){let i;function a(h){i=h}let r,s;function o(h){r=h.type,s=h.bytesPerElement}function l(h,u){t.drawElements(i,u,r,h*s),n.update(u,i,1)}function c(h,u,p){p!==0&&(t.drawElementsInstanced(i,u,r,h*s,p),n.update(u,i,p))}function d(h,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,h,0,p);let M=0;for(let m=0;m<p;m++)M+=u[m];n.update(M,i,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function bR(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:et("WebGLInfo: Unknown draw mode:",s);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:i}}function ER(t,e,n){const i=new WeakMap,a=new Bt;function r(s,o,l){const c=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let u=i.get(o);if(u===void 0||u.count!==h){let N=function(){S.dispose(),i.delete(o),o.removeEventListener("dispose",N)};var p=N;u!==void 0&&u.texture.dispose();const x=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let y=0;x===!0&&(y=1),M===!0&&(y=2),m===!0&&(y=3);let C=o.attributes.position.count*y,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const R=new Float32Array(C*A*4*h),S=new yS(R,C,A,h);S.type=Ei,S.needsUpdate=!0;const w=y*4;for(let D=0;D<h;D++){const I=f[D],W=g[D],q=v[D],P=C*A*4*D;for(let U=0;U<I.count;U++){const O=U*w;x===!0&&(a.fromBufferAttribute(I,U),R[P+O+0]=a.x,R[P+O+1]=a.y,R[P+O+2]=a.z,R[P+O+3]=0),M===!0&&(a.fromBufferAttribute(W,U),R[P+O+4]=a.x,R[P+O+5]=a.y,R[P+O+6]=a.z,R[P+O+7]=0),m===!0&&(a.fromBufferAttribute(q,U),R[P+O+8]=a.x,R[P+O+9]=a.y,R[P+O+10]=a.z,R[P+O+11]=q.itemSize===4?a.w:1)}}u={count:h,texture:S,size:new lt(C,A)},i.set(o,u),o.addEventListener("dispose",N)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const M=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",M),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:r}}function TR(t,e,n,i,a){let r=new WeakMap;function s(c){const d=a.render.frame,h=c.geometry,u=e.get(c,h);if(r.get(u)!==d&&(e.update(u),r.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==d&&(p.update(),r.set(p,d))}return u}function o(){r=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:s,dispose:o}}const AR={[rS]:"LINEAR_TONE_MAPPING",[sS]:"REINHARD_TONE_MAPPING",[oS]:"CINEON_TONE_MAPPING",[lS]:"ACES_FILMIC_TONE_MAPPING",[uS]:"AGX_TONE_MAPPING",[fS]:"NEUTRAL_TONE_MAPPING",[cS]:"CUSTOM_TONE_MAPPING"};function wR(t,e,n,i,a){const r=new Ri(e,n,{type:t,depthBuffer:i,stencilBuffer:a,depthTexture:i?new Fs(e,n):void 0}),s=new Ri(e,n,{type:ua,depthBuffer:!1,stencilBuffer:!1}),o=new mi;o.setAttribute("position",new ia([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new ia([0,2,0,0,2,0],2));const l=new yT({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Ni(o,l),d=new ym(-1,1,1,-1,0,1);let h=null,u=null,p=!1,x,M=null,m=[],f=!1;this.setSize=function(g,v){r.setSize(g,v),s.setSize(g,v);for(let y=0;y<m.length;y++){const C=m[y];C.setSize&&C.setSize(g,v)}},this.setEffects=function(g){m=g,f=m.length>0&&m[0].isRenderPass===!0;const v=r.width,y=r.height;for(let C=0;C<m.length;C++){const A=m[C];A.setSize&&A.setSize(v,y)}},this.begin=function(g,v){if(p||g.toneMapping===wi&&m.length===0)return!1;if(M=v,v!==null){const y=v.width,C=v.height;(r.width!==y||r.height!==C)&&this.setSize(y,C)}return f===!1&&g.setRenderTarget(r),x=g.toneMapping,g.toneMapping=wi,!0},this.hasRenderPass=function(){return f},this.end=function(g,v){g.toneMapping=x,p=!0;let y=r,C=s;for(let A=0;A<m.length;A++){const R=m[A];if(R.enabled!==!1&&(R.render(g,C,y,v),R.needsSwap!==!1)){const S=y;y=C,C=S}}if(h!==g.outputColorSpace||u!==g.toneMapping){h=g.outputColorSpace,u=g.toneMapping,l.defines={},Ke.getTransfer(h)===rt&&(l.defines.SRGB_TRANSFER="");const A=AR[u];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,g.setRenderTarget(M),g.render(c,d),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),s.dispose(),o.dispose(),l.dispose()}}const zS=new dn,ep=new Fs(1,1),HS=new yS,GS=new Q3,VS=new NS,nx=[],ix=[],ax=new Float32Array(16),rx=new Float32Array(9),sx=new Float32Array(4);function Zs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const a=e*n;let r=nx[a];if(r===void 0&&(r=new Float32Array(a),nx[a]=r),e!==0){i.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=n,t[s].toArray(r,o)}return r}function Zt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Gu(t,e){let n=ix[e];n===void 0&&(n=new Int32Array(e),ix[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function RR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function CR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;t.uniform2fv(this.addr,e),Kt(n,e)}}function DR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Zt(n,e))return;t.uniform3fv(this.addr,e),Kt(n,e)}}function NR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;t.uniform4fv(this.addr,e),Kt(n,e)}}function UR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Zt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Kt(n,e)}else{if(Zt(n,i))return;sx.set(i),t.uniformMatrix2fv(this.addr,!1,sx),Kt(n,i)}}function LR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Zt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Kt(n,e)}else{if(Zt(n,i))return;rx.set(i),t.uniformMatrix3fv(this.addr,!1,rx),Kt(n,i)}}function OR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Zt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Kt(n,e)}else{if(Zt(n,i))return;ax.set(i),t.uniformMatrix4fv(this.addr,!1,ax),Kt(n,i)}}function PR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function FR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;t.uniform2iv(this.addr,e),Kt(n,e)}}function BR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;t.uniform3iv(this.addr,e),Kt(n,e)}}function IR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;t.uniform4iv(this.addr,e),Kt(n,e)}}function zR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function HR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;t.uniform2uiv(this.addr,e),Kt(n,e)}}function GR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;t.uniform3uiv(this.addr,e),Kt(n,e)}}function VR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;t.uniform4uiv(this.addr,e),Kt(n,e)}}function kR(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a);let r;this.type===t.SAMPLER_2D_SHADOW?(ep.compareFunction=n.isReversedDepthBuffer()?_m:vm,r=ep):r=zS,n.setTexture2D(e||r,a)}function XR(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(e||GS,a)}function jR(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(e||VS,a)}function WR(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(e||HS,a)}function qR(t){switch(t){case 5126:return RR;case 35664:return CR;case 35665:return DR;case 35666:return NR;case 35674:return UR;case 35675:return LR;case 35676:return OR;case 5124:case 35670:return PR;case 35667:case 35671:return FR;case 35668:case 35672:return BR;case 35669:case 35673:return IR;case 5125:return zR;case 36294:return HR;case 36295:return GR;case 36296:return VR;case 35678:case 36198:case 36298:case 36306:case 35682:return kR;case 35679:case 36299:case 36307:return XR;case 35680:case 36300:case 36308:case 36293:return jR;case 36289:case 36303:case 36311:case 36292:return WR}}function YR(t,e){t.uniform1fv(this.addr,e)}function ZR(t,e){const n=Zs(e,this.size,2);t.uniform2fv(this.addr,n)}function KR(t,e){const n=Zs(e,this.size,3);t.uniform3fv(this.addr,n)}function QR(t,e){const n=Zs(e,this.size,4);t.uniform4fv(this.addr,n)}function JR(t,e){const n=Zs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function $R(t,e){const n=Zs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function eC(t,e){const n=Zs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function tC(t,e){t.uniform1iv(this.addr,e)}function nC(t,e){t.uniform2iv(this.addr,e)}function iC(t,e){t.uniform3iv(this.addr,e)}function aC(t,e){t.uniform4iv(this.addr,e)}function rC(t,e){t.uniform1uiv(this.addr,e)}function sC(t,e){t.uniform2uiv(this.addr,e)}function oC(t,e){t.uniform3uiv(this.addr,e)}function lC(t,e){t.uniform4uiv(this.addr,e)}function cC(t,e,n){const i=this.cache,a=e.length,r=Gu(n,a);Zt(i,r)||(t.uniform1iv(this.addr,r),Kt(i,r));let s;this.type===t.SAMPLER_2D_SHADOW?s=ep:s=zS;for(let o=0;o!==a;++o)n.setTexture2D(e[o]||s,r[o])}function uC(t,e,n){const i=this.cache,a=e.length,r=Gu(n,a);Zt(i,r)||(t.uniform1iv(this.addr,r),Kt(i,r));for(let s=0;s!==a;++s)n.setTexture3D(e[s]||GS,r[s])}function fC(t,e,n){const i=this.cache,a=e.length,r=Gu(n,a);Zt(i,r)||(t.uniform1iv(this.addr,r),Kt(i,r));for(let s=0;s!==a;++s)n.setTextureCube(e[s]||VS,r[s])}function dC(t,e,n){const i=this.cache,a=e.length,r=Gu(n,a);Zt(i,r)||(t.uniform1iv(this.addr,r),Kt(i,r));for(let s=0;s!==a;++s)n.setTexture2DArray(e[s]||HS,r[s])}function hC(t){switch(t){case 5126:return YR;case 35664:return ZR;case 35665:return KR;case 35666:return QR;case 35674:return JR;case 35675:return $R;case 35676:return eC;case 5124:case 35670:return tC;case 35667:case 35671:return nC;case 35668:case 35672:return iC;case 35669:case 35673:return aC;case 5125:return rC;case 36294:return sC;case 36295:return oC;case 36296:return lC;case 35678:case 36198:case 36298:case 36306:case 35682:return cC;case 35679:case 36299:case 36307:return uC;case 35680:case 36300:case 36308:case 36293:return fC;case 36289:case 36303:case 36311:case 36292:return dC}}class pC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=qR(n.type)}}class mC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=hC(n.type)}}class gC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(e,n[o.id],i)}}}const ld=/(\w+)(\])?(\[|\.)?/g;function ox(t,e){t.seq.push(e),t.map[e.id]=e}function xC(t,e,n){const i=t.name,a=i.length;for(ld.lastIndex=0;;){const r=ld.exec(i),s=ld.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){ox(n,c===void 0?new pC(o,t,e):new mC(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new gC(o),ox(n,h)),n=h}}}class Cc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(n,s),l=e.getUniformLocation(n,o.name);xC(o,l,this)}const a=[],r=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(s):r.push(s);a.length>0&&(this.seq=a.concat(r))}setValue(e,n,i,a){const r=this.map[n];r!==void 0&&r.setValue(e,i,a)}setOptional(e,n,i){const a=n[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,n,i,a){for(let r=0,s=n.length;r!==s;++r){const o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,n){const i=[];for(let a=0,r=e.length;a!==r;++a){const s=e[a];s.id in n&&i.push(s)}return i}}function lx(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const vC=37297;let _C=0;function SC(t,e){const n=t.split(`
`),i=[],a=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let s=a;s<r;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}const cx=new Oe;function yC(t){Ke._getMatrix(cx,Ke.workingColorSpace,t);const e=`mat3( ${cx.elements.map(n=>n.toFixed(4))} )`;switch(Ke.getTransfer(t)){case du:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function ux(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+SC(t.getShaderSource(e),o)}else return r}function MC(t,e){const n=yC(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const bC={[rS]:"Linear",[sS]:"Reinhard",[oS]:"Cineon",[lS]:"ACESFilmic",[uS]:"AgX",[fS]:"Neutral",[cS]:"Custom"};function EC(t,e){const n=bC[e];return n===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const sc=new V;function TC(){Ke.getLuminanceCoefficients(sc);const t=sc.x.toFixed(4),e=sc.y.toFixed(4),n=sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function AC(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_o).join(`
`)}function wC(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function RC(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=t.getActiveAttrib(e,a),s=r.name;let o=1;r.type===t.FLOAT_MAT2&&(o=2),r.type===t.FLOAT_MAT3&&(o=3),r.type===t.FLOAT_MAT4&&(o=4),n[s]={type:r.type,location:t.getAttribLocation(e,s),locationSize:o}}return n}function _o(t){return t!==""}function fx(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dx(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const CC=/^[ \t]*#include +<([\w\d./]+)>/gm;function tp(t){return t.replace(CC,NC)}const DC=new Map;function NC(t,e){let n=He[e];if(n===void 0){const i=DC.get(e);if(i!==void 0)n=He[i],Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return tp(n)}const UC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hx(t){return t.replace(UC,LC)}function LC(t,e,n,i){let a="";for(let r=parseInt(e);r<parseInt(n);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function px(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const OC={[Ec]:"SHADOWMAP_TYPE_PCF",[vo]:"SHADOWMAP_TYPE_VSM"};function PC(t){return OC[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const FC={[Ar]:"ENVMAP_TYPE_CUBE",[Ps]:"ENVMAP_TYPE_CUBE",[Iu]:"ENVMAP_TYPE_CUBE_UV"};function BC(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":FC[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const IC={[Ps]:"ENVMAP_MODE_REFRACTION"};function zC(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":IC[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const HC={[aS]:"ENVMAP_BLENDING_MULTIPLY",[D3]:"ENVMAP_BLENDING_MIX",[N3]:"ENVMAP_BLENDING_ADD"};function GC(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":HC[t.combine]||"ENVMAP_BLENDING_NONE"}function VC(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function kC(t,e,n,i){const a=t.getContext(),r=n.defines;let s=n.vertexShader,o=n.fragmentShader;const l=PC(n),c=BC(n),d=zC(n),h=GC(n),u=VC(n),p=AC(n),x=wC(r),M=a.createProgram();let m,f,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(_o).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(_o).join(`
`),f.length>0&&(f+=`
`)):(m=[px(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_o).join(`
`),f=[px(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==wi?"#define TONE_MAPPING":"",n.toneMapping!==wi?He.tonemapping_pars_fragment:"",n.toneMapping!==wi?EC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,MC("linearToOutputTexel",n.outputColorSpace),TC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(_o).join(`
`)),s=tp(s),s=fx(s,n),s=dx(s,n),o=tp(o),o=fx(o,n),o=dx(o,n),s=hx(s),o=hx(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===Ag?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ag?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=g+m+s,y=g+f+o,C=lx(a,a.VERTEX_SHADER,v),A=lx(a,a.FRAGMENT_SHADER,y);a.attachShader(M,C),a.attachShader(M,A),n.index0AttributeName!==void 0?a.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(M,0,"position"),a.linkProgram(M);function R(D){if(t.debug.checkShaderErrors){const I=a.getProgramInfoLog(M)||"",W=a.getShaderInfoLog(C)||"",q=a.getShaderInfoLog(A)||"",P=I.trim(),U=W.trim(),O=q.trim();let j=!0,$=!0;if(a.getProgramParameter(M,a.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(a,M,C,A);else{const ie=ux(a,C,"vertex"),_e=ux(a,A,"fragment");et("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(M,a.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+P+`
`+ie+`
`+_e)}else P!==""?Ce("WebGLProgram: Program Info Log:",P):(U===""||O==="")&&($=!1);$&&(D.diagnostics={runnable:j,programLog:P,vertexShader:{log:U,prefix:m},fragmentShader:{log:O,prefix:f}})}a.deleteShader(C),a.deleteShader(A),S=new Cc(a,M),w=RC(a,M)}let S;this.getUniforms=function(){return S===void 0&&R(this),S};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=a.getProgramParameter(M,vC)),N},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=_C++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=C,this.fragmentShader=A,this}let XC=0;class jC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(n),r=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new WC(e),n.set(e,i)),i}}class WC{constructor(e){this.id=XC++,this.code=e,this.usedTimes=0}}function qC(t){return t===wr||t===cu||t===uu}function YC(t,e,n,i,a,r){const s=new MS,o=new jC,l=new Set,c=[],d=new Map,h=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function M(S,w,N,D,I,W){const q=D.fog,P=I.geometry,U=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,O=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,j=e.get(S.envMap||U,O),$=j&&j.mapping===Iu?j.image.height:null,ie=p[S.type];S.precision!==null&&(u=i.getMaxPrecision(S.precision),u!==S.precision&&Ce("WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));const _e=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Me=_e!==void 0?_e.length:0;let Ve=0;P.morphAttributes.position!==void 0&&(Ve=1),P.morphAttributes.normal!==void 0&&(Ve=2),P.morphAttributes.color!==void 0&&(Ve=3);let We,Ne,ee,me;if(ie){const Fe=Si[ie];We=Fe.vertexShader,Ne=Fe.fragmentShader}else We=S.vertexShader,Ne=S.fragmentShader,o.update(S),ee=o.getVertexShaderID(S),me=o.getFragmentShaderID(S);const oe=t.getRenderTarget(),we=t.state.buffers.depth.getReversed(),Le=I.isInstancedMesh===!0,Re=I.isBatchedMesh===!0,At=!!S.map,qe=!!S.matcap,ct=!!j,St=!!S.aoMap,ke=!!S.lightMap,jt=!!S.bumpMap,wt=!!S.normalMap,Rn=!!S.displacementMap,F=!!S.emissiveMap,Wt=!!S.metalnessMap,Ye=!!S.roughnessMap,xt=S.anisotropy>0,fe=S.clearcoat>0,Ct=S.dispersion>0,T=S.iridescence>0,_=S.sheen>0,z=S.transmission>0,K=xt&&!!S.anisotropyMap,ne=fe&&!!S.clearcoatMap,ae=fe&&!!S.clearcoatNormalMap,ue=fe&&!!S.clearcoatRoughnessMap,Y=T&&!!S.iridescenceMap,J=T&&!!S.iridescenceThicknessMap,ge=_&&!!S.sheenColorMap,Se=_&&!!S.sheenRoughnessMap,le=!!S.specularMap,re=!!S.specularColorMap,Ue=!!S.specularIntensityMap,ze=z&&!!S.transmissionMap,tt=z&&!!S.thicknessMap,L=!!S.gradientMap,se=!!S.alphaMap,Z=S.alphaTest>0,xe=!!S.alphaHash,ce=!!S.extensions;let te=wi;S.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(te=t.toneMapping);const Ee={shaderID:ie,shaderType:S.type,shaderName:S.name,vertexShader:We,fragmentShader:Ne,defines:S.defines,customVertexShaderID:ee,customFragmentShaderID:me,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:Re,batchingColor:Re&&I._colorsTexture!==null,instancing:Le,instancingColor:Le&&I.instanceColor!==null,instancingMorph:Le&&I.morphTexture!==null,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Ke.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:At,matcap:qe,envMap:ct,envMapMode:ct&&j.mapping,envMapCubeUVHeight:$,aoMap:St,lightMap:ke,bumpMap:jt,normalMap:wt,displacementMap:Rn,emissiveMap:F,normalMapObjectSpace:wt&&S.normalMapType===O3,normalMapTangentSpace:wt&&S.normalMapType===bg,packedNormalMap:wt&&S.normalMapType===bg&&qC(S.normalMap.format),metalnessMap:Wt,roughnessMap:Ye,anisotropy:xt,anisotropyMap:K,clearcoat:fe,clearcoatMap:ne,clearcoatNormalMap:ae,clearcoatRoughnessMap:ue,dispersion:Ct,iridescence:T,iridescenceMap:Y,iridescenceThicknessMap:J,sheen:_,sheenColorMap:ge,sheenRoughnessMap:Se,specularMap:le,specularColorMap:re,specularIntensityMap:Ue,transmission:z,transmissionMap:ze,thicknessMap:tt,gradientMap:L,opaque:S.transparent===!1&&S.blending===ys&&S.alphaToCoverage===!1,alphaMap:se,alphaTest:Z,alphaHash:xe,combine:S.combine,mapUv:At&&x(S.map.channel),aoMapUv:St&&x(S.aoMap.channel),lightMapUv:ke&&x(S.lightMap.channel),bumpMapUv:jt&&x(S.bumpMap.channel),normalMapUv:wt&&x(S.normalMap.channel),displacementMapUv:Rn&&x(S.displacementMap.channel),emissiveMapUv:F&&x(S.emissiveMap.channel),metalnessMapUv:Wt&&x(S.metalnessMap.channel),roughnessMapUv:Ye&&x(S.roughnessMap.channel),anisotropyMapUv:K&&x(S.anisotropyMap.channel),clearcoatMapUv:ne&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:ae&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:J&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Se&&x(S.sheenRoughnessMap.channel),specularMapUv:le&&x(S.specularMap.channel),specularColorMapUv:re&&x(S.specularColorMap.channel),specularIntensityMapUv:Ue&&x(S.specularIntensityMap.channel),transmissionMapUv:ze&&x(S.transmissionMap.channel),thicknessMapUv:tt&&x(S.thicknessMap.channel),alphaMapUv:se&&x(S.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(wt||xt),vertexNormals:!!P.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!P.attributes.uv&&(At||se),fog:!!q,useFog:S.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||P.attributes.normal===void 0&&wt===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:we,skinning:I.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Ve,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:te,decodeVideoTexture:At&&S.map.isVideoTexture===!0&&Ke.getTransfer(S.map.colorSpace)===rt,decodeVideoTextureEmissive:F&&S.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(S.emissiveMap.colorSpace)===rt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===qi,flipSided:S.side===bn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ce&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&S.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ee.vertexUv1s=l.has(1),Ee.vertexUv2s=l.has(2),Ee.vertexUv3s=l.has(3),l.clear(),Ee}function m(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const N in S.defines)w.push(N),w.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(f(w,S),g(w,S),w.push(t.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function f(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function g(S,w){s.disableAll(),w.instancing&&s.enable(0),w.instancingColor&&s.enable(1),w.instancingMorph&&s.enable(2),w.matcap&&s.enable(3),w.envMap&&s.enable(4),w.normalMapObjectSpace&&s.enable(5),w.normalMapTangentSpace&&s.enable(6),w.clearcoat&&s.enable(7),w.iridescence&&s.enable(8),w.alphaTest&&s.enable(9),w.vertexColors&&s.enable(10),w.vertexAlphas&&s.enable(11),w.vertexUv1s&&s.enable(12),w.vertexUv2s&&s.enable(13),w.vertexUv3s&&s.enable(14),w.vertexTangents&&s.enable(15),w.anisotropy&&s.enable(16),w.alphaHash&&s.enable(17),w.batching&&s.enable(18),w.dispersion&&s.enable(19),w.batchingColor&&s.enable(20),w.gradientMap&&s.enable(21),w.packedNormalMap&&s.enable(22),w.vertexNormals&&s.enable(23),S.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.reversedDepthBuffer&&s.enable(4),w.skinning&&s.enable(5),w.morphTargets&&s.enable(6),w.morphNormals&&s.enable(7),w.morphColors&&s.enable(8),w.premultipliedAlpha&&s.enable(9),w.shadowMapEnabled&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.transmission&&s.enable(15),w.sheen&&s.enable(16),w.opaque&&s.enable(17),w.pointsUvs&&s.enable(18),w.decodeVideoTexture&&s.enable(19),w.decodeVideoTextureEmissive&&s.enable(20),w.alphaToCoverage&&s.enable(21),w.numLightProbeGrids>0&&s.enable(22),S.push(s.mask)}function v(S){const w=p[S.type];let N;if(w){const D=Si[w];N=vT.clone(D.uniforms)}else N=S.uniforms;return N}function y(S,w){let N=d.get(w);return N!==void 0?++N.usedTimes:(N=new kC(t,w,S,a),c.push(N),d.set(w,N)),N}function C(S){if(--S.usedTimes===0){const w=c.indexOf(S);c[w]=c[c.length-1],c.pop(),d.delete(S.cacheKey),S.destroy()}}function A(S){o.remove(S)}function R(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:v,acquireProgram:y,releaseProgram:C,releaseShaderCache:A,programs:c,dispose:R}}function ZC(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function i(s){t.delete(s)}function a(s,o,l){t.get(s)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:a,dispose:r}}function KC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function mx(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function gx(){const t=[];let e=0;const n=[],i=[],a=[];function r(){e=0,n.length=0,i.length=0,a.length=0}function s(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,x,M,m,f){let g=t[e];return g===void 0?(g={id:u.id,object:u,geometry:p,material:x,materialVariant:s(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:f},t[e]=g):(g.id=u.id,g.object=u,g.geometry=p,g.material=x,g.materialVariant=s(u),g.groupOrder=M,g.renderOrder=u.renderOrder,g.z=m,g.group=f),e++,g}function l(u,p,x,M,m,f){const g=o(u,p,x,M,m,f);x.transmission>0?i.push(g):x.transparent===!0?a.push(g):n.push(g)}function c(u,p,x,M,m,f){const g=o(u,p,x,M,m,f);x.transmission>0?i.unshift(g):x.transparent===!0?a.unshift(g):n.unshift(g)}function d(u,p){n.length>1&&n.sort(u||KC),i.length>1&&i.sort(p||mx),a.length>1&&a.sort(p||mx)}function h(){for(let u=e,p=t.length;u<p;u++){const x=t[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:i,transparent:a,init:r,push:l,unshift:c,finish:h,sort:d}}function QC(){let t=new WeakMap;function e(i,a){const r=t.get(i);let s;return r===void 0?(s=new gx,t.set(i,[s])):a>=r.length?(s=new gx,r.push(s)):s=r[a],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function JC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new at};break;case"SpotLight":n={position:new V,direction:new V,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new at,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new at,groundColor:new at};break;case"RectAreaLight":n={color:new at,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function $C(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let eD=0;function tD(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function nD(t){const e=new JC,n=$C(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const a=new V,r=new Xt,s=new Xt;function o(c){let d=0,h=0,u=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,x=0,M=0,m=0,f=0,g=0,v=0,y=0,C=0,A=0,R=0;c.sort(tD);for(let w=0,N=c.length;w<N;w++){const D=c[w],I=D.color,W=D.intensity,q=D.distance;let P=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===wr?P=D.shadow.map.texture:P=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)d+=I.r*W,h+=I.g*W,u+=I.b*W;else if(D.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(D.sh.coefficients[U],W);R++}else if(D.isDirectionalLight){const U=e.get(D);if(U.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const O=D.shadow,j=n.get(D);j.shadowIntensity=O.intensity,j.shadowBias=O.bias,j.shadowNormalBias=O.normalBias,j.shadowRadius=O.radius,j.shadowMapSize=O.mapSize,i.directionalShadow[p]=j,i.directionalShadowMap[p]=P,i.directionalShadowMatrix[p]=D.shadow.matrix,g++}i.directional[p]=U,p++}else if(D.isSpotLight){const U=e.get(D);U.position.setFromMatrixPosition(D.matrixWorld),U.color.copy(I).multiplyScalar(W),U.distance=q,U.coneCos=Math.cos(D.angle),U.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),U.decay=D.decay,i.spot[M]=U;const O=D.shadow;if(D.map&&(i.spotLightMap[C]=D.map,C++,O.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[M]=O.matrix,D.castShadow){const j=n.get(D);j.shadowIntensity=O.intensity,j.shadowBias=O.bias,j.shadowNormalBias=O.normalBias,j.shadowRadius=O.radius,j.shadowMapSize=O.mapSize,i.spotShadow[M]=j,i.spotShadowMap[M]=P,y++}M++}else if(D.isRectAreaLight){const U=e.get(D);U.color.copy(I).multiplyScalar(W),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=U,m++}else if(D.isPointLight){const U=e.get(D);if(U.color.copy(D.color).multiplyScalar(D.intensity),U.distance=D.distance,U.decay=D.decay,D.castShadow){const O=D.shadow,j=n.get(D);j.shadowIntensity=O.intensity,j.shadowBias=O.bias,j.shadowNormalBias=O.normalBias,j.shadowRadius=O.radius,j.shadowMapSize=O.mapSize,j.shadowCameraNear=O.camera.near,j.shadowCameraFar=O.camera.far,i.pointShadow[x]=j,i.pointShadowMap[x]=P,i.pointShadowMatrix[x]=D.shadow.matrix,v++}i.point[x]=U,x++}else if(D.isHemisphereLight){const U=e.get(D);U.skyColor.copy(D.color).multiplyScalar(W),U.groundColor.copy(D.groundColor).multiplyScalar(W),i.hemi[f]=U,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=u;const S=i.hash;(S.directionalLength!==p||S.pointLength!==x||S.spotLength!==M||S.rectAreaLength!==m||S.hemiLength!==f||S.numDirectionalShadows!==g||S.numPointShadows!==v||S.numSpotShadows!==y||S.numSpotMaps!==C||S.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=m,i.point.length=x,i.hemi.length=f,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,S.directionalLength=p,S.pointLength=x,S.spotLength=M,S.rectAreaLength=m,S.hemiLength=f,S.numDirectionalShadows=g,S.numPointShadows=v,S.numSpotShadows=y,S.numSpotMaps=C,S.numLightProbes=R,i.version=eD++)}function l(c,d){let h=0,u=0,p=0,x=0,M=0;const m=d.matrixWorldInverse;for(let f=0,g=c.length;f<g;f++){const v=c[f];if(v.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(m),h++}else if(v.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const y=i.rectArea[x];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),s.identity(),r.copy(v.matrixWorld),r.premultiply(m),s.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),x++}else if(v.isPointLight){const y=i.point[u];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),u++}else if(v.isHemisphereLight){const y=i.hemi[M];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),M++}}}return{setup:o,setupView:l,state:i}}function xx(t){const e=new nD(t),n=[],i=[],a=[];function r(u){h.camera=u,n.length=0,i.length=0,a.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function l(u){a.push(u)}function c(){e.setup(n)}function d(u){e.setupView(n,u)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:d,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function iD(t){let e=new WeakMap;function n(a,r=0){const s=e.get(a);let o;return s===void 0?(o=new xx(t),e.set(a,[o])):r>=s.length?(o=new xx(t),s.push(o)):o=s[r],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const aD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,sD=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],oD=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],vx=new Xt,uo=new V,cd=new V;function lD(t,e,n){let i=new CS;const a=new lt,r=new lt,s=new Bt,o=new MT,l=new bT,c={},d=n.maxTextureSize,h={[Qa]:bn,[bn]:Qa,[qi]:qi},u=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:aD,fragmentShader:rD}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const x=new mi;x.setAttribute("position",new ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Ni(x,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ec;let f=this.type;this.render=function(A,R,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===f3&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ec);const w=t.getRenderTarget(),N=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),I=t.state;I.setBlending(ta),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const W=f!==this.type;W&&R.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(P=>P.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,P=A.length;q<P;q++){const U=A[q],O=U.shadow;if(O===void 0){Ce("WebGLShadowMap:",U,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;a.copy(O.mapSize);const j=O.getFrameExtents();a.multiply(j),r.copy(O.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(r.x=Math.floor(d/j.x),a.x=r.x*j.x,O.mapSize.x=r.x),a.y>d&&(r.y=Math.floor(d/j.y),a.y=r.y*j.y,O.mapSize.y=r.y));const $=t.state.buffers.depth.getReversed();if(O.camera._reversedDepth=$,O.map===null||W===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===vo){if(U.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Ri(a.x,a.y,{format:wr,type:ua,minFilter:fn,magFilter:fn,generateMipmaps:!1}),O.map.texture.name=U.name+".shadowMap",O.map.depthTexture=new Fs(a.x,a.y,Ei),O.map.depthTexture.name=U.name+".shadowMapDepth",O.map.depthTexture.format=fa,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=sn,O.map.depthTexture.magFilter=sn}else U.isPointLight?(O.map=new IS(a.x),O.map.depthTexture=new gT(a.x,Di)):(O.map=new Ri(a.x,a.y),O.map.depthTexture=new Fs(a.x,a.y,Di)),O.map.depthTexture.name=U.name+".shadowMap",O.map.depthTexture.format=fa,this.type===Ec?(O.map.depthTexture.compareFunction=$?_m:vm,O.map.depthTexture.minFilter=fn,O.map.depthTexture.magFilter=fn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=sn,O.map.depthTexture.magFilter=sn);O.camera.updateProjectionMatrix()}const ie=O.map.isWebGLCubeRenderTarget?6:1;for(let _e=0;_e<ie;_e++){if(O.map.isWebGLCubeRenderTarget)t.setRenderTarget(O.map,_e),t.clear();else{_e===0&&(t.setRenderTarget(O.map),t.clear());const Me=O.getViewport(_e);s.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),I.viewport(s)}if(U.isPointLight){const Me=O.camera,Ve=O.matrix,We=U.distance||Me.far;We!==Me.far&&(Me.far=We,Me.updateProjectionMatrix()),uo.setFromMatrixPosition(U.matrixWorld),Me.position.copy(uo),cd.copy(Me.position),cd.add(sD[_e]),Me.up.copy(oD[_e]),Me.lookAt(cd),Me.updateMatrixWorld(),Ve.makeTranslation(-uo.x,-uo.y,-uo.z),vx.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),O._frustum.setFromProjectionMatrix(vx,Me.coordinateSystem,Me.reversedDepth)}else O.updateMatrices(U);i=O.getFrustum(),y(R,S,O.camera,U,this.type)}O.isPointLightShadow!==!0&&this.type===vo&&g(O,S),O.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(w,N,D)};function g(A,R){const S=e.update(M);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ri(a.x,a.y,{format:wr,type:ua})),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(R,null,S,u,M,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(R,null,S,p,M,null)}function v(A,R,S,w){let N=null;const D=S.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)N=D;else if(N=S.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const I=N.uuid,W=R.uuid;let q=c[I];q===void 0&&(q={},c[I]=q);let P=q[W];P===void 0&&(P=N.clone(),q[W]=P,R.addEventListener("dispose",C)),N=P}if(N.visible=R.visible,N.wireframe=R.wireframe,w===vo?N.side=R.shadowSide!==null?R.shadowSide:R.side:N.side=R.shadowSide!==null?R.shadowSide:h[R.side],N.alphaMap=R.alphaMap,N.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,N.map=R.map,N.clipShadows=R.clipShadows,N.clippingPlanes=R.clippingPlanes,N.clipIntersection=R.clipIntersection,N.displacementMap=R.displacementMap,N.displacementScale=R.displacementScale,N.displacementBias=R.displacementBias,N.wireframeLinewidth=R.wireframeLinewidth,N.linewidth=R.linewidth,S.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const I=t.properties.get(N);I.light=S}return N}function y(A,R,S,w,N){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&N===vo)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,A.matrixWorld);const W=e.update(A),q=A.material;if(Array.isArray(q)){const P=W.groups;for(let U=0,O=P.length;U<O;U++){const j=P[U],$=q[j.materialIndex];if($&&$.visible){const ie=v(A,$,w,N);A.onBeforeShadow(t,A,R,S,W,ie,j),t.renderBufferDirect(S,null,W,ie,A,j),A.onAfterShadow(t,A,R,S,W,ie,j)}}}else if(q.visible){const P=v(A,q,w,N);A.onBeforeShadow(t,A,R,S,W,P,null),t.renderBufferDirect(S,null,W,P,A,null),A.onAfterShadow(t,A,R,S,W,P,null)}}const I=A.children;for(let W=0,q=I.length;W<q;W++)y(I[W],R,S,w,N)}function C(A){A.target.removeEventListener("dispose",C);for(const S in c){const w=c[S],N=A.target.uuid;N in w&&(w[N].dispose(),delete w[N])}}}function cD(t,e){function n(){let L=!1;const se=new Bt;let Z=null;const xe=new Bt(0,0,0,0);return{setMask:function(ce){Z!==ce&&!L&&(t.colorMask(ce,ce,ce,ce),Z=ce)},setLocked:function(ce){L=ce},setClear:function(ce,te,Ee,Fe,Lt){Lt===!0&&(ce*=Fe,te*=Fe,Ee*=Fe),se.set(ce,te,Ee,Fe),xe.equals(se)===!1&&(t.clearColor(ce,te,Ee,Fe),xe.copy(se))},reset:function(){L=!1,Z=null,xe.set(-1,0,0,0)}}}function i(){let L=!1,se=!1,Z=null,xe=null,ce=null;return{setReversed:function(te){if(se!==te){const Ee=e.get("EXT_clip_control");te?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),se=te;const Fe=ce;ce=null,this.setClear(Fe)}},getReversed:function(){return se},setTest:function(te){te?oe(t.DEPTH_TEST):we(t.DEPTH_TEST)},setMask:function(te){Z!==te&&!L&&(t.depthMask(te),Z=te)},setFunc:function(te){if(se&&(te=X3[te]),xe!==te){switch(te){case dh:t.depthFunc(t.NEVER);break;case hh:t.depthFunc(t.ALWAYS);break;case ph:t.depthFunc(t.LESS);break;case Os:t.depthFunc(t.LEQUAL);break;case mh:t.depthFunc(t.EQUAL);break;case gh:t.depthFunc(t.GEQUAL);break;case xh:t.depthFunc(t.GREATER);break;case vh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}xe=te}},setLocked:function(te){L=te},setClear:function(te){ce!==te&&(ce=te,se&&(te=1-te),t.clearDepth(te))},reset:function(){L=!1,Z=null,xe=null,ce=null,se=!1}}}function a(){let L=!1,se=null,Z=null,xe=null,ce=null,te=null,Ee=null,Fe=null,Lt=null;return{setTest:function(ut){L||(ut?oe(t.STENCIL_TEST):we(t.STENCIL_TEST))},setMask:function(ut){se!==ut&&!L&&(t.stencilMask(ut),se=ut)},setFunc:function(ut,Oi,gi){(Z!==ut||xe!==Oi||ce!==gi)&&(t.stencilFunc(ut,Oi,gi),Z=ut,xe=Oi,ce=gi)},setOp:function(ut,Oi,gi){(te!==ut||Ee!==Oi||Fe!==gi)&&(t.stencilOp(ut,Oi,gi),te=ut,Ee=Oi,Fe=gi)},setLocked:function(ut){L=ut},setClear:function(ut){Lt!==ut&&(t.clearStencil(ut),Lt=ut)},reset:function(){L=!1,se=null,Z=null,xe=null,ce=null,te=null,Ee=null,Fe=null,Lt=null}}}const r=new n,s=new i,o=new a,l=new WeakMap,c=new WeakMap;let d={},h={},u={},p=new WeakMap,x=[],M=null,m=!1,f=null,g=null,v=null,y=null,C=null,A=null,R=null,S=new at(0,0,0),w=0,N=!1,D=null,I=null,W=null,q=null,P=null;const U=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,j=0;const $=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec($)[1]),O=j>=1):$.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),O=j>=2);let ie=null,_e={};const Me=t.getParameter(t.SCISSOR_BOX),Ve=t.getParameter(t.VIEWPORT),We=new Bt().fromArray(Me),Ne=new Bt().fromArray(Ve);function ee(L,se,Z,xe){const ce=new Uint8Array(4),te=t.createTexture();t.bindTexture(L,te),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ee=0;Ee<Z;Ee++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(se,0,t.RGBA,1,1,xe,0,t.RGBA,t.UNSIGNED_BYTE,ce):t.texImage2D(se+Ee,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ce);return te}const me={};me[t.TEXTURE_2D]=ee(t.TEXTURE_2D,t.TEXTURE_2D,1),me[t.TEXTURE_CUBE_MAP]=ee(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[t.TEXTURE_2D_ARRAY]=ee(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),me[t.TEXTURE_3D]=ee(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),oe(t.DEPTH_TEST),s.setFunc(Os),jt(!1),wt(Sg),oe(t.CULL_FACE),St(ta);function oe(L){d[L]!==!0&&(t.enable(L),d[L]=!0)}function we(L){d[L]!==!1&&(t.disable(L),d[L]=!1)}function Le(L,se){return u[L]!==se?(t.bindFramebuffer(L,se),u[L]=se,L===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=se),L===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=se),!0):!1}function Re(L,se){let Z=x,xe=!1;if(L){Z=p.get(se),Z===void 0&&(Z=[],p.set(se,Z));const ce=L.textures;if(Z.length!==ce.length||Z[0]!==t.COLOR_ATTACHMENT0){for(let te=0,Ee=ce.length;te<Ee;te++)Z[te]=t.COLOR_ATTACHMENT0+te;Z.length=ce.length,xe=!0}}else Z[0]!==t.BACK&&(Z[0]=t.BACK,xe=!0);xe&&t.drawBuffers(Z)}function At(L){return M!==L?(t.useProgram(L),M=L,!0):!1}const qe={[fr]:t.FUNC_ADD,[h3]:t.FUNC_SUBTRACT,[p3]:t.FUNC_REVERSE_SUBTRACT};qe[m3]=t.MIN,qe[g3]=t.MAX;const ct={[x3]:t.ZERO,[v3]:t.ONE,[_3]:t.SRC_COLOR,[uh]:t.SRC_ALPHA,[T3]:t.SRC_ALPHA_SATURATE,[b3]:t.DST_COLOR,[y3]:t.DST_ALPHA,[S3]:t.ONE_MINUS_SRC_COLOR,[fh]:t.ONE_MINUS_SRC_ALPHA,[E3]:t.ONE_MINUS_DST_COLOR,[M3]:t.ONE_MINUS_DST_ALPHA,[A3]:t.CONSTANT_COLOR,[w3]:t.ONE_MINUS_CONSTANT_COLOR,[R3]:t.CONSTANT_ALPHA,[C3]:t.ONE_MINUS_CONSTANT_ALPHA};function St(L,se,Z,xe,ce,te,Ee,Fe,Lt,ut){if(L===ta){m===!0&&(we(t.BLEND),m=!1);return}if(m===!1&&(oe(t.BLEND),m=!0),L!==d3){if(L!==f||ut!==N){if((g!==fr||C!==fr)&&(t.blendEquation(t.FUNC_ADD),g=fr,C=fr),ut)switch(L){case ys:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ch:t.blendFunc(t.ONE,t.ONE);break;case yg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Mg:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:et("WebGLState: Invalid blending: ",L);break}else switch(L){case ys:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ch:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case yg:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mg:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",L);break}v=null,y=null,A=null,R=null,S.set(0,0,0),w=0,f=L,N=ut}return}ce=ce||se,te=te||Z,Ee=Ee||xe,(se!==g||ce!==C)&&(t.blendEquationSeparate(qe[se],qe[ce]),g=se,C=ce),(Z!==v||xe!==y||te!==A||Ee!==R)&&(t.blendFuncSeparate(ct[Z],ct[xe],ct[te],ct[Ee]),v=Z,y=xe,A=te,R=Ee),(Fe.equals(S)===!1||Lt!==w)&&(t.blendColor(Fe.r,Fe.g,Fe.b,Lt),S.copy(Fe),w=Lt),f=L,N=!1}function ke(L,se){L.side===qi?we(t.CULL_FACE):oe(t.CULL_FACE);let Z=L.side===bn;se&&(Z=!Z),jt(Z),L.blending===ys&&L.transparent===!1?St(ta):St(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),r.setMask(L.colorWrite);const xe=L.stencilWrite;o.setTest(xe),xe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),F(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?oe(t.SAMPLE_ALPHA_TO_COVERAGE):we(t.SAMPLE_ALPHA_TO_COVERAGE)}function jt(L){D!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),D=L)}function wt(L){L!==c3?(oe(t.CULL_FACE),L!==I&&(L===Sg?t.cullFace(t.BACK):L===u3?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):we(t.CULL_FACE),I=L}function Rn(L){L!==W&&(O&&t.lineWidth(L),W=L)}function F(L,se,Z){L?(oe(t.POLYGON_OFFSET_FILL),(q!==se||P!==Z)&&(q=se,P=Z,s.getReversed()&&(se=-se),t.polygonOffset(se,Z))):we(t.POLYGON_OFFSET_FILL)}function Wt(L){L?oe(t.SCISSOR_TEST):we(t.SCISSOR_TEST)}function Ye(L){L===void 0&&(L=t.TEXTURE0+U-1),ie!==L&&(t.activeTexture(L),ie=L)}function xt(L,se,Z){Z===void 0&&(ie===null?Z=t.TEXTURE0+U-1:Z=ie);let xe=_e[Z];xe===void 0&&(xe={type:void 0,texture:void 0},_e[Z]=xe),(xe.type!==L||xe.texture!==se)&&(ie!==Z&&(t.activeTexture(Z),ie=Z),t.bindTexture(L,se||me[L]),xe.type=L,xe.texture=se)}function fe(){const L=_e[ie];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Ct(){try{t.compressedTexImage2D(...arguments)}catch(L){et("WebGLState:",L)}}function T(){try{t.compressedTexImage3D(...arguments)}catch(L){et("WebGLState:",L)}}function _(){try{t.texSubImage2D(...arguments)}catch(L){et("WebGLState:",L)}}function z(){try{t.texSubImage3D(...arguments)}catch(L){et("WebGLState:",L)}}function K(){try{t.compressedTexSubImage2D(...arguments)}catch(L){et("WebGLState:",L)}}function ne(){try{t.compressedTexSubImage3D(...arguments)}catch(L){et("WebGLState:",L)}}function ae(){try{t.texStorage2D(...arguments)}catch(L){et("WebGLState:",L)}}function ue(){try{t.texStorage3D(...arguments)}catch(L){et("WebGLState:",L)}}function Y(){try{t.texImage2D(...arguments)}catch(L){et("WebGLState:",L)}}function J(){try{t.texImage3D(...arguments)}catch(L){et("WebGLState:",L)}}function ge(L){return h[L]!==void 0?h[L]:t.getParameter(L)}function Se(L,se){h[L]!==se&&(t.pixelStorei(L,se),h[L]=se)}function le(L){We.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),We.copy(L))}function re(L){Ne.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),Ne.copy(L))}function Ue(L,se){let Z=c.get(se);Z===void 0&&(Z=new WeakMap,c.set(se,Z));let xe=Z.get(L);xe===void 0&&(xe=t.getUniformBlockIndex(se,L.name),Z.set(L,xe))}function ze(L,se){const xe=c.get(se).get(L);l.get(se)!==xe&&(t.uniformBlockBinding(se,xe,L.__bindingPointIndex),l.set(se,xe))}function tt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},h={},ie=null,_e={},u={},p=new WeakMap,x=[],M=null,m=!1,f=null,g=null,v=null,y=null,C=null,A=null,R=null,S=new at(0,0,0),w=0,N=!1,D=null,I=null,W=null,q=null,P=null,We.set(0,0,t.canvas.width,t.canvas.height),Ne.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:oe,disable:we,bindFramebuffer:Le,drawBuffers:Re,useProgram:At,setBlending:St,setMaterial:ke,setFlipSided:jt,setCullFace:wt,setLineWidth:Rn,setPolygonOffset:F,setScissorTest:Wt,activeTexture:Ye,bindTexture:xt,unbindTexture:fe,compressedTexImage2D:Ct,compressedTexImage3D:T,texImage2D:Y,texImage3D:J,pixelStorei:Se,getParameter:ge,updateUBOMapping:Ue,uniformBlockBinding:ze,texStorage2D:ae,texStorage3D:ue,texSubImage2D:_,texSubImage3D:z,compressedTexSubImage2D:K,compressedTexSubImage3D:ne,scissor:le,viewport:re,reset:tt}}function uD(t,e,n,i,a,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,d=new WeakMap,h=new Set;let u;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(T,_){return x?new OffscreenCanvas(T,_):pu("canvas")}function m(T,_,z){let K=1;const ne=Ct(T);if((ne.width>z||ne.height>z)&&(K=z/Math.max(ne.width,ne.height)),K<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const ae=Math.floor(K*ne.width),ue=Math.floor(K*ne.height);u===void 0&&(u=M(ae,ue));const Y=_?M(ae,ue):u;return Y.width=ae,Y.height=ue,Y.getContext("2d").drawImage(T,0,0,ae,ue),Ce("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+ae+"x"+ue+")."),Y}else return"data"in T&&Ce("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),T;return T}function f(T){return T.generateMipmaps}function g(T){t.generateMipmap(T)}function v(T){return T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?t.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(T,_,z,K,ne,ae=!1){if(T!==null){if(t[T]!==void 0)return t[T];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ue;K&&(ue=e.get("EXT_texture_norm16"),ue||Ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=_;if(_===t.RED&&(z===t.FLOAT&&(Y=t.R32F),z===t.HALF_FLOAT&&(Y=t.R16F),z===t.UNSIGNED_BYTE&&(Y=t.R8),z===t.UNSIGNED_SHORT&&ue&&(Y=ue.R16_EXT),z===t.SHORT&&ue&&(Y=ue.R16_SNORM_EXT)),_===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(Y=t.R8UI),z===t.UNSIGNED_SHORT&&(Y=t.R16UI),z===t.UNSIGNED_INT&&(Y=t.R32UI),z===t.BYTE&&(Y=t.R8I),z===t.SHORT&&(Y=t.R16I),z===t.INT&&(Y=t.R32I)),_===t.RG&&(z===t.FLOAT&&(Y=t.RG32F),z===t.HALF_FLOAT&&(Y=t.RG16F),z===t.UNSIGNED_BYTE&&(Y=t.RG8),z===t.UNSIGNED_SHORT&&ue&&(Y=ue.RG16_EXT),z===t.SHORT&&ue&&(Y=ue.RG16_SNORM_EXT)),_===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(Y=t.RG8UI),z===t.UNSIGNED_SHORT&&(Y=t.RG16UI),z===t.UNSIGNED_INT&&(Y=t.RG32UI),z===t.BYTE&&(Y=t.RG8I),z===t.SHORT&&(Y=t.RG16I),z===t.INT&&(Y=t.RG32I)),_===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),z===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),z===t.UNSIGNED_INT&&(Y=t.RGB32UI),z===t.BYTE&&(Y=t.RGB8I),z===t.SHORT&&(Y=t.RGB16I),z===t.INT&&(Y=t.RGB32I)),_===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),z===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),z===t.UNSIGNED_INT&&(Y=t.RGBA32UI),z===t.BYTE&&(Y=t.RGBA8I),z===t.SHORT&&(Y=t.RGBA16I),z===t.INT&&(Y=t.RGBA32I)),_===t.RGB&&(z===t.UNSIGNED_SHORT&&ue&&(Y=ue.RGB16_EXT),z===t.SHORT&&ue&&(Y=ue.RGB16_SNORM_EXT),z===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),z===t.UNSIGNED_INT_10F_11F_11F_REV&&(Y=t.R11F_G11F_B10F)),_===t.RGBA){const J=ae?du:Ke.getTransfer(ne);z===t.FLOAT&&(Y=t.RGBA32F),z===t.HALF_FLOAT&&(Y=t.RGBA16F),z===t.UNSIGNED_BYTE&&(Y=J===rt?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT&&ue&&(Y=ue.RGBA16_EXT),z===t.SHORT&&ue&&(Y=ue.RGBA16_SNORM_EXT),z===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function C(T,_){let z;return T?_===null||_===Di||_===Ko?z=t.DEPTH24_STENCIL8:_===Ei?z=t.DEPTH32F_STENCIL8:_===Zo&&(z=t.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Di||_===Ko?z=t.DEPTH_COMPONENT24:_===Ei?z=t.DEPTH_COMPONENT32F:_===Zo&&(z=t.DEPTH_COMPONENT16),z}function A(T,_){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==sn&&T.minFilter!==fn?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function R(T){const _=T.target;_.removeEventListener("dispose",R),w(_),_.isVideoTexture&&d.delete(_),_.isHTMLTexture&&h.delete(_)}function S(T){const _=T.target;_.removeEventListener("dispose",S),D(_)}function w(T){const _=i.get(T);if(_.__webglInit===void 0)return;const z=T.source,K=p.get(z);if(K){const ne=K[_.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&N(T),Object.keys(K).length===0&&p.delete(z)}i.remove(T)}function N(T){const _=i.get(T);t.deleteTexture(_.__webglTexture);const z=T.source,K=p.get(z);delete K[_.__cacheKey],s.memory.textures--}function D(T){const _=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(_.__webglFramebuffer[K]))for(let ne=0;ne<_.__webglFramebuffer[K].length;ne++)t.deleteFramebuffer(_.__webglFramebuffer[K][ne]);else t.deleteFramebuffer(_.__webglFramebuffer[K]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[K])}else{if(Array.isArray(_.__webglFramebuffer))for(let K=0;K<_.__webglFramebuffer.length;K++)t.deleteFramebuffer(_.__webglFramebuffer[K]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let K=0;K<_.__webglColorRenderbuffer.length;K++)_.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[K]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const z=T.textures;for(let K=0,ne=z.length;K<ne;K++){const ae=i.get(z[K]);ae.__webglTexture&&(t.deleteTexture(ae.__webglTexture),s.memory.textures--),i.remove(z[K])}i.remove(T)}let I=0;function W(){I=0}function q(){return I}function P(T){I=T}function U(){const T=I;return T>=a.maxTextures&&Ce("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+a.maxTextures),I+=1,T}function O(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function j(T,_){const z=i.get(T);if(T.isVideoTexture&&xt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&z.__version!==T.version){const K=T.image;if(K===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{we(z,T,_);return}}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+_)}function $(T,_){const z=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){we(z,T,_);return}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+_)}function ie(T,_){const z=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){we(z,T,_);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+_)}function _e(T,_){const z=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&z.__version!==T.version){Le(z,T,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+_)}const Me={[_h]:t.REPEAT,[Qi]:t.CLAMP_TO_EDGE,[Sh]:t.MIRRORED_REPEAT},Ve={[sn]:t.NEAREST,[U3]:t.NEAREST_MIPMAP_NEAREST,[Fl]:t.NEAREST_MIPMAP_LINEAR,[fn]:t.LINEAR,[Lf]:t.LINEAR_MIPMAP_NEAREST,[hr]:t.LINEAR_MIPMAP_LINEAR},We={[P3]:t.NEVER,[H3]:t.ALWAYS,[F3]:t.LESS,[vm]:t.LEQUAL,[B3]:t.EQUAL,[_m]:t.GEQUAL,[I3]:t.GREATER,[z3]:t.NOTEQUAL};function Ne(T,_){if(_.type===Ei&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===fn||_.magFilter===Lf||_.magFilter===Fl||_.magFilter===hr||_.minFilter===fn||_.minFilter===Lf||_.minFilter===Fl||_.minFilter===hr)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,Me[_.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,Me[_.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,Me[_.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,Ve[_.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,Ve[_.minFilter]),_.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,We[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===sn||_.minFilter!==Fl&&_.minFilter!==hr||_.type===Ei&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,a.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function ee(T,_){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",R));const K=_.source;let ne=p.get(K);ne===void 0&&(ne={},p.set(K,ne));const ae=O(_);if(ae!==T.__cacheKey){ne[ae]===void 0&&(ne[ae]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,z=!0),ne[ae].usedTimes++;const ue=ne[T.__cacheKey];ue!==void 0&&(ne[T.__cacheKey].usedTimes--,ue.usedTimes===0&&N(_)),T.__cacheKey=ae,T.__webglTexture=ne[ae].texture}return z}function me(T,_,z){return Math.floor(Math.floor(T/z)/_)}function oe(T,_,z,K){const ae=T.updateRanges;if(ae.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,z,K,_.data);else{ae.sort((Se,le)=>Se.start-le.start);let ue=0;for(let Se=1;Se<ae.length;Se++){const le=ae[ue],re=ae[Se],Ue=le.start+le.count,ze=me(re.start,_.width,4),tt=me(le.start,_.width,4);re.start<=Ue+1&&ze===tt&&me(re.start+re.count-1,_.width,4)===ze?le.count=Math.max(le.count,re.start+re.count-le.start):(++ue,ae[ue]=re)}ae.length=ue+1;const Y=n.getParameter(t.UNPACK_ROW_LENGTH),J=n.getParameter(t.UNPACK_SKIP_PIXELS),ge=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let Se=0,le=ae.length;Se<le;Se++){const re=ae[Se],Ue=Math.floor(re.start/4),ze=Math.ceil(re.count/4),tt=Ue%_.width,L=Math.floor(Ue/_.width),se=ze,Z=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,tt),n.pixelStorei(t.UNPACK_SKIP_ROWS,L),n.texSubImage2D(t.TEXTURE_2D,0,tt,L,se,Z,z,K,_.data)}T.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Y),n.pixelStorei(t.UNPACK_SKIP_PIXELS,J),n.pixelStorei(t.UNPACK_SKIP_ROWS,ge)}}function we(T,_,z){let K=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(K=t.TEXTURE_3D);const ne=ee(T,_),ae=_.source;n.bindTexture(K,T.__webglTexture,t.TEXTURE0+z);const ue=i.get(ae);if(ae.version!==ue.__version||ne===!0){if(n.activeTexture(t.TEXTURE0+z),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const Z=Ke.getPrimaries(Ke.workingColorSpace),xe=_.colorSpace===Na?null:Ke.getPrimaries(_.colorSpace),ce=_.colorSpace===Na||Z===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce)}n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let J=m(_.image,!1,a.maxTextureSize);J=fe(_,J);const ge=r.convert(_.format,_.colorSpace),Se=r.convert(_.type);let le=y(_.internalFormat,ge,Se,_.normalized,_.colorSpace,_.isVideoTexture);Ne(K,_);let re;const Ue=_.mipmaps,ze=_.isVideoTexture!==!0,tt=ue.__version===void 0||ne===!0,L=ae.dataReady,se=A(_,J);if(_.isDepthTexture)le=C(_.format===pr,_.type),tt&&(ze?n.texStorage2D(t.TEXTURE_2D,1,le,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,le,J.width,J.height,0,ge,Se,null));else if(_.isDataTexture)if(Ue.length>0){ze&&tt&&n.texStorage2D(t.TEXTURE_2D,se,le,Ue[0].width,Ue[0].height);for(let Z=0,xe=Ue.length;Z<xe;Z++)re=Ue[Z],ze?L&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,re.width,re.height,ge,Se,re.data):n.texImage2D(t.TEXTURE_2D,Z,le,re.width,re.height,0,ge,Se,re.data);_.generateMipmaps=!1}else ze?(tt&&n.texStorage2D(t.TEXTURE_2D,se,le,J.width,J.height),L&&oe(_,J,ge,Se)):n.texImage2D(t.TEXTURE_2D,0,le,J.width,J.height,0,ge,Se,J.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ze&&tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,le,Ue[0].width,Ue[0].height,J.depth);for(let Z=0,xe=Ue.length;Z<xe;Z++)if(re=Ue[Z],_.format!==fi)if(ge!==null)if(ze){if(L)if(_.layerUpdates.size>0){const ce=Zg(re.width,re.height,_.format,_.type);for(const te of _.layerUpdates){const Ee=re.data.subarray(te*ce/re.data.BYTES_PER_ELEMENT,(te+1)*ce/re.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,te,re.width,re.height,1,ge,Ee)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,re.width,re.height,J.depth,ge,re.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Z,le,re.width,re.height,J.depth,0,re.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?L&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,re.width,re.height,J.depth,ge,Se,re.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Z,le,re.width,re.height,J.depth,0,ge,Se,re.data)}else{ze&&tt&&n.texStorage2D(t.TEXTURE_2D,se,le,Ue[0].width,Ue[0].height);for(let Z=0,xe=Ue.length;Z<xe;Z++)re=Ue[Z],_.format!==fi?ge!==null?ze?L&&n.compressedTexSubImage2D(t.TEXTURE_2D,Z,0,0,re.width,re.height,ge,re.data):n.compressedTexImage2D(t.TEXTURE_2D,Z,le,re.width,re.height,0,re.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?L&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,re.width,re.height,ge,Se,re.data):n.texImage2D(t.TEXTURE_2D,Z,le,re.width,re.height,0,ge,Se,re.data)}else if(_.isDataArrayTexture)if(ze){if(tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,le,J.width,J.height,J.depth),L)if(_.layerUpdates.size>0){const Z=Zg(J.width,J.height,_.format,_.type);for(const xe of _.layerUpdates){const ce=J.data.subarray(xe*Z/J.data.BYTES_PER_ELEMENT,(xe+1)*Z/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,xe,J.width,J.height,1,ge,Se,ce)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ge,Se,J.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,le,J.width,J.height,J.depth,0,ge,Se,J.data);else if(_.isData3DTexture)ze?(tt&&n.texStorage3D(t.TEXTURE_3D,se,le,J.width,J.height,J.depth),L&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ge,Se,J.data)):n.texImage3D(t.TEXTURE_3D,0,le,J.width,J.height,J.depth,0,ge,Se,J.data);else if(_.isFramebufferTexture){if(tt)if(ze)n.texStorage2D(t.TEXTURE_2D,se,le,J.width,J.height);else{let Z=J.width,xe=J.height;for(let ce=0;ce<se;ce++)n.texImage2D(t.TEXTURE_2D,ce,le,Z,xe,0,ge,Se,null),Z>>=1,xe>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){const Z=t.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),J.parentNode!==Z){Z.appendChild(J),h.add(_),Z.onpaint=Fe=>{const Lt=Fe.changedElements;for(const ut of h)Lt.includes(ut.image)&&(ut.needsUpdate=!0)},Z.requestPaint();return}const xe=0,ce=t.RGBA,te=t.RGBA,Ee=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,xe,ce,te,Ee,J),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(ze&&tt){const Z=Ct(Ue[0]);n.texStorage2D(t.TEXTURE_2D,se,le,Z.width,Z.height)}for(let Z=0,xe=Ue.length;Z<xe;Z++)re=Ue[Z],ze?L&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,ge,Se,re):n.texImage2D(t.TEXTURE_2D,Z,le,ge,Se,re);_.generateMipmaps=!1}else if(ze){if(tt){const Z=Ct(J);n.texStorage2D(t.TEXTURE_2D,se,le,Z.width,Z.height)}L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Se,J)}else n.texImage2D(t.TEXTURE_2D,0,le,ge,Se,J);f(_)&&g(K),ue.__version=ae.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Le(T,_,z){if(_.image.length!==6)return;const K=ee(T,_),ne=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+z);const ae=i.get(ne);if(ne.version!==ae.__version||K===!0){n.activeTexture(t.TEXTURE0+z);const ue=Ke.getPrimaries(Ke.workingColorSpace),Y=_.colorSpace===Na?null:Ke.getPrimaries(_.colorSpace),J=_.colorSpace===Na||ue===Y?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const ge=_.isCompressedTexture||_.image[0].isCompressedTexture,Se=_.image[0]&&_.image[0].isDataTexture,le=[];for(let te=0;te<6;te++)!ge&&!Se?le[te]=m(_.image[te],!0,a.maxCubemapSize):le[te]=Se?_.image[te].image:_.image[te],le[te]=fe(_,le[te]);const re=le[0],Ue=r.convert(_.format,_.colorSpace),ze=r.convert(_.type),tt=y(_.internalFormat,Ue,ze,_.normalized,_.colorSpace),L=_.isVideoTexture!==!0,se=ae.__version===void 0||K===!0,Z=ne.dataReady;let xe=A(_,re);Ne(t.TEXTURE_CUBE_MAP,_);let ce;if(ge){L&&se&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,tt,re.width,re.height);for(let te=0;te<6;te++){ce=le[te].mipmaps;for(let Ee=0;Ee<ce.length;Ee++){const Fe=ce[Ee];_.format!==fi?Ue!==null?L?Z&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,0,0,Fe.width,Fe.height,Ue,Fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,tt,Fe.width,Fe.height,0,Fe.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?Z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,0,0,Fe.width,Fe.height,Ue,ze,Fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,tt,Fe.width,Fe.height,0,Ue,ze,Fe.data)}}}else{if(ce=_.mipmaps,L&&se){ce.length>0&&xe++;const te=Ct(le[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,tt,te.width,te.height)}for(let te=0;te<6;te++)if(Se){L?Z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,le[te].width,le[te].height,Ue,ze,le[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,tt,le[te].width,le[te].height,0,Ue,ze,le[te].data);for(let Ee=0;Ee<ce.length;Ee++){const Lt=ce[Ee].image[te].image;L?Z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,0,0,Lt.width,Lt.height,Ue,ze,Lt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,tt,Lt.width,Lt.height,0,Ue,ze,Lt.data)}}else{L?Z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ue,ze,le[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,tt,Ue,ze,le[te]);for(let Ee=0;Ee<ce.length;Ee++){const Fe=ce[Ee];L?Z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,0,0,Ue,ze,Fe.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,tt,Ue,ze,Fe.image[te])}}}f(_)&&g(t.TEXTURE_CUBE_MAP),ae.__version=ne.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Re(T,_,z,K,ne,ae){const ue=r.convert(z.format,z.colorSpace),Y=r.convert(z.type),J=y(z.internalFormat,ue,Y,z.normalized,z.colorSpace),ge=i.get(_),Se=i.get(z);if(Se.__renderTarget=_,!ge.__hasExternalTextures){const le=Math.max(1,_.width>>ae),re=Math.max(1,_.height>>ae);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,ae,J,le,re,_.depth,0,ue,Y,null):n.texImage2D(ne,ae,J,le,re,0,ue,Y,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),Ye(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,ne,Se.__webglTexture,0,Wt(_)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,ne,Se.__webglTexture,ae),n.bindFramebuffer(t.FRAMEBUFFER,null)}function At(T,_,z){if(t.bindRenderbuffer(t.RENDERBUFFER,T),_.depthBuffer){const K=_.depthTexture,ne=K&&K.isDepthTexture?K.type:null,ae=C(_.stencilBuffer,ne),ue=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Ye(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Wt(_),ae,_.width,_.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,Wt(_),ae,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,ae,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,T)}else{const K=_.textures;for(let ne=0;ne<K.length;ne++){const ae=K[ne],ue=r.convert(ae.format,ae.colorSpace),Y=r.convert(ae.type),J=y(ae.internalFormat,ue,Y,ae.normalized,ae.colorSpace);Ye(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Wt(_),J,_.width,_.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,Wt(_),J,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,J,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function qe(T,_,z){const K=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=i.get(_.depthTexture);if(ne.__renderTarget=_,(!ne.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),K){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),ne.__webglTexture===void 0){ne.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),Ne(t.TEXTURE_CUBE_MAP,_.depthTexture);const ge=r.convert(_.depthTexture.format),Se=r.convert(_.depthTexture.type);let le;_.depthTexture.format===fa?le=t.DEPTH_COMPONENT24:_.depthTexture.format===pr&&(le=t.DEPTH24_STENCIL8);for(let re=0;re<6;re++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,le,_.width,_.height,0,ge,Se,null)}}else j(_.depthTexture,0);const ae=ne.__webglTexture,ue=Wt(_),Y=K?t.TEXTURE_CUBE_MAP_POSITIVE_X+z:t.TEXTURE_2D,J=_.depthTexture.format===pr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===fa)Ye(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,Y,ae,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,J,Y,ae,0);else if(_.depthTexture.format===pr)Ye(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,Y,ae,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,J,Y,ae,0);else throw new Error("Unknown depthTexture format")}function ct(T){const _=i.get(T),z=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const K=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),K){const ne=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,K.removeEventListener("dispose",ne)};K.addEventListener("dispose",ne),_.__depthDisposeCallback=ne}_.__boundDepthTexture=K}if(T.depthTexture&&!_.__autoAllocateDepthBuffer)if(z)for(let K=0;K<6;K++)qe(_.__webglFramebuffer[K],T,K);else{const K=T.texture.mipmaps;K&&K.length>0?qe(_.__webglFramebuffer[0],T,0):qe(_.__webglFramebuffer,T,0)}else if(z){_.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[K]),_.__webglDepthbuffer[K]===void 0)_.__webglDepthbuffer[K]=t.createRenderbuffer(),At(_.__webglDepthbuffer[K],T,!1);else{const ne=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=_.__webglDepthbuffer[K];t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,ae)}}else{const K=T.texture.mipmaps;if(K&&K.length>0?n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),At(_.__webglDepthbuffer,T,!1);else{const ne=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,ae)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function St(T,_,z){const K=i.get(T);_!==void 0&&Re(K.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&ct(T)}function ke(T){const _=T.texture,z=i.get(T),K=i.get(_);T.addEventListener("dispose",S);const ne=T.textures,ae=T.isWebGLCubeRenderTarget===!0,ue=ne.length>1;if(ue||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=_.version,s.memory.textures++),ae){z.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[Y]=[];for(let J=0;J<_.mipmaps.length;J++)z.__webglFramebuffer[Y][J]=t.createFramebuffer()}else z.__webglFramebuffer[Y]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let Y=0;Y<_.mipmaps.length;Y++)z.__webglFramebuffer[Y]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(ue)for(let Y=0,J=ne.length;Y<J;Y++){const ge=i.get(ne[Y]);ge.__webglTexture===void 0&&(ge.__webglTexture=t.createTexture(),s.memory.textures++)}if(T.samples>0&&Ye(T)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Y=0;Y<ne.length;Y++){const J=ne[Y];z.__webglColorRenderbuffer[Y]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[Y]);const ge=r.convert(J.format,J.colorSpace),Se=r.convert(J.type),le=y(J.internalFormat,ge,Se,J.normalized,J.colorSpace,T.isXRRenderTarget===!0),re=Wt(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,re,le,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Y,t.RENDERBUFFER,z.__webglColorRenderbuffer[Y])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),At(z.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ae){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),Ne(t.TEXTURE_CUBE_MAP,_);for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0)for(let J=0;J<_.mipmaps.length;J++)Re(z.__webglFramebuffer[Y][J],T,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,J);else Re(z.__webglFramebuffer[Y],T,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);f(_)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ue){for(let Y=0,J=ne.length;Y<J;Y++){const ge=ne[Y],Se=i.get(ge);let le=t.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(le=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,Se.__webglTexture),Ne(le,ge),Re(z.__webglFramebuffer,T,ge,t.COLOR_ATTACHMENT0+Y,le,0),f(ge)&&g(le)}n.unbindTexture()}else{let Y=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Y=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Y,K.__webglTexture),Ne(Y,_),_.mipmaps&&_.mipmaps.length>0)for(let J=0;J<_.mipmaps.length;J++)Re(z.__webglFramebuffer[J],T,_,t.COLOR_ATTACHMENT0,Y,J);else Re(z.__webglFramebuffer,T,_,t.COLOR_ATTACHMENT0,Y,0);f(_)&&g(Y),n.unbindTexture()}T.depthBuffer&&ct(T)}function jt(T){const _=T.textures;for(let z=0,K=_.length;z<K;z++){const ne=_[z];if(f(ne)){const ae=v(T),ue=i.get(ne).__webglTexture;n.bindTexture(ae,ue),g(ae),n.unbindTexture()}}}const wt=[],Rn=[];function F(T){if(T.samples>0){if(Ye(T)===!1){const _=T.textures,z=T.width,K=T.height;let ne=t.COLOR_BUFFER_BIT;const ae=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(T),Y=_.length>1;if(Y)for(let ge=0;ge<_.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const J=T.texture.mipmaps;J&&J.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let ge=0;ge<_.length;ge++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),Y){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[ge]);const Se=i.get(_[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Se,0)}t.blitFramebuffer(0,0,z,K,0,0,z,K,ne,t.NEAREST),l===!0&&(wt.length=0,Rn.length=0,wt.push(t.COLOR_ATTACHMENT0+ge),T.depthBuffer&&T.resolveDepthBuffer===!1&&(wt.push(ae),Rn.push(ae),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Rn)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,wt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Y)for(let ge=0;ge<_.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,ue.__webglColorRenderbuffer[ge]);const Se=i.get(_[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,Se,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const _=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function Wt(T){return Math.min(a.maxSamples,T.samples)}function Ye(T){const _=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function xt(T){const _=s.render.frame;d.get(T)!==_&&(d.set(T,_),T.update())}function fe(T,_){const z=T.colorSpace,K=T.format,ne=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==fu&&z!==Na&&(Ke.getTransfer(z)===rt?(K!==fi||ne!==$n)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",z)),_}function Ct(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=W,this.getTextureUnits=q,this.setTextureUnits=P,this.setTexture2D=j,this.setTexture2DArray=$,this.setTexture3D=ie,this.setTextureCube=_e,this.rebindTextures=St,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=F,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function fD(t,e){function n(i,a=Na){let r;const s=Ke.getTransfer(a);if(i===$n)return t.UNSIGNED_BYTE;if(i===hm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===pm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===mS)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===gS)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===hS)return t.BYTE;if(i===pS)return t.SHORT;if(i===Zo)return t.UNSIGNED_SHORT;if(i===dm)return t.INT;if(i===Di)return t.UNSIGNED_INT;if(i===Ei)return t.FLOAT;if(i===ua)return t.HALF_FLOAT;if(i===xS)return t.ALPHA;if(i===vS)return t.RGB;if(i===fi)return t.RGBA;if(i===fa)return t.DEPTH_COMPONENT;if(i===pr)return t.DEPTH_STENCIL;if(i===_S)return t.RED;if(i===mm)return t.RED_INTEGER;if(i===wr)return t.RG;if(i===gm)return t.RG_INTEGER;if(i===xm)return t.RGBA_INTEGER;if(i===Tc||i===Ac||i===wc||i===Rc)if(s===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Tc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ac)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Rc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Tc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ac)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Rc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yh||i===Mh||i===bh||i===Eh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===yh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Mh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Eh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Th||i===Ah||i===wh||i===Rh||i===Ch||i===cu||i===Dh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Th||i===Ah)return s===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===wh)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Rh)return r.COMPRESSED_R11_EAC;if(i===Ch)return r.COMPRESSED_SIGNED_R11_EAC;if(i===cu)return r.COMPRESSED_RG11_EAC;if(i===Dh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Nh||i===Uh||i===Lh||i===Oh||i===Ph||i===Fh||i===Bh||i===Ih||i===zh||i===Hh||i===Gh||i===Vh||i===kh||i===Xh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Nh)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Uh)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Lh)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Oh)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ph)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fh)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bh)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ih)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zh)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hh)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gh)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vh)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kh)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xh)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jh||i===Wh||i===qh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===jh)return s===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Wh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===qh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Yh||i===Zh||i===uu||i===Kh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Yh)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Zh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===uu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Kh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ko?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const dD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class pD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new US(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new hi({vertexShader:dD,fragmentShader:hD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ni(new gl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mD extends Or{constructor(e,n){super();const i=this;let a=null,r=1,s=null,o="local-floor",l=1,c=null,d=null,h=null,u=null,p=null,x=null;const M=typeof XRWebGLBinding<"u",m=new pD,f={},g=n.getContextAttributes();let v=null,y=null;const C=[],A=[],R=new lt;let S=null;const w=new Zn;w.viewport=new Bt;const N=new Zn;N.viewport=new Bt;const D=[w,N],I=new TT;let W=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let me=C[ee];return me===void 0&&(me=new Gf,C[ee]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ee){let me=C[ee];return me===void 0&&(me=new Gf,C[ee]=me),me.getGripSpace()},this.getHand=function(ee){let me=C[ee];return me===void 0&&(me=new Gf,C[ee]=me),me.getHandSpace()};function P(ee){const me=A.indexOf(ee.inputSource);if(me===-1)return;const oe=C[me];oe!==void 0&&(oe.update(ee.inputSource,ee.frame,c||s),oe.dispatchEvent({type:ee.type,data:ee.inputSource}))}function U(){a.removeEventListener("select",P),a.removeEventListener("selectstart",P),a.removeEventListener("selectend",P),a.removeEventListener("squeeze",P),a.removeEventListener("squeezestart",P),a.removeEventListener("squeezeend",P),a.removeEventListener("end",U),a.removeEventListener("inputsourceschange",O);for(let ee=0;ee<C.length;ee++){const me=A[ee];me!==null&&(A[ee]=null,C[ee].disconnect(me))}W=null,q=null,m.reset();for(const ee in f)delete f[ee];e.setRenderTarget(v),p=null,u=null,h=null,a=null,y=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,i.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,i.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h===null&&M&&(h=new XRWebGLBinding(a,n)),h},this.getFrame=function(){return x},this.getSession=function(){return a},this.setSession=async function(ee){if(a=ee,a!==null){if(v=e.getRenderTarget(),a.addEventListener("select",P),a.addEventListener("selectstart",P),a.addEventListener("selectend",P),a.addEventListener("squeeze",P),a.addEventListener("squeezestart",P),a.addEventListener("squeezeend",P),a.addEventListener("end",U),a.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await n.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,we=null,Le=null;g.depth&&(Le=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,oe=g.stencil?pr:fa,we=g.stencil?Ko:Di);const Re={colorFormat:n.RGBA8,depthFormat:Le,scaleFactor:r};h=this.getBinding(),u=h.createProjectionLayer(Re),a.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Ri(u.textureWidth,u.textureHeight,{format:fi,type:$n,depthTexture:new Fs(u.textureWidth,u.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const oe={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(a,n,oe),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Ri(p.framebufferWidth,p.framebufferHeight,{format:fi,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(o),Ne.setContext(a),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(ee){for(let me=0;me<ee.removed.length;me++){const oe=ee.removed[me],we=A.indexOf(oe);we>=0&&(A[we]=null,C[we].disconnect(oe))}for(let me=0;me<ee.added.length;me++){const oe=ee.added[me];let we=A.indexOf(oe);if(we===-1){for(let Re=0;Re<C.length;Re++)if(Re>=A.length){A.push(oe),we=Re;break}else if(A[Re]===null){A[Re]=oe,we=Re;break}if(we===-1)break}const Le=C[we];Le&&Le.connect(oe)}}const j=new V,$=new V;function ie(ee,me,oe){j.setFromMatrixPosition(me.matrixWorld),$.setFromMatrixPosition(oe.matrixWorld);const we=j.distanceTo($),Le=me.projectionMatrix.elements,Re=oe.projectionMatrix.elements,At=Le[14]/(Le[10]-1),qe=Le[14]/(Le[10]+1),ct=(Le[9]+1)/Le[5],St=(Le[9]-1)/Le[5],ke=(Le[8]-1)/Le[0],jt=(Re[8]+1)/Re[0],wt=At*ke,Rn=At*jt,F=we/(-ke+jt),Wt=F*-ke;if(me.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Wt),ee.translateZ(F),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Le[10]===-1)ee.projectionMatrix.copy(me.projectionMatrix),ee.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const Ye=At+F,xt=qe+F,fe=wt-Wt,Ct=Rn+(we-Wt),T=ct*qe/xt*Ye,_=St*qe/xt*Ye;ee.projectionMatrix.makePerspective(fe,Ct,T,_,Ye,xt),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function _e(ee,me){me===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(me.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(a===null)return;let me=ee.near,oe=ee.far;m.texture!==null&&(m.depthNear>0&&(me=m.depthNear),m.depthFar>0&&(oe=m.depthFar)),I.near=N.near=w.near=me,I.far=N.far=w.far=oe,(W!==I.near||q!==I.far)&&(a.updateRenderState({depthNear:I.near,depthFar:I.far}),W=I.near,q=I.far),I.layers.mask=ee.layers.mask|6,w.layers.mask=I.layers.mask&-5,N.layers.mask=I.layers.mask&-3;const we=ee.parent,Le=I.cameras;_e(I,we);for(let Re=0;Re<Le.length;Re++)_e(Le[Re],we);Le.length===2?ie(I,w,N):I.projectionMatrix.copy(w.projectionMatrix),Me(ee,I,we)};function Me(ee,me,oe){oe===null?ee.matrix.copy(me.matrixWorld):(ee.matrix.copy(oe.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(me.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(me.projectionMatrix),ee.projectionMatrixInverse.copy(me.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Jh*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(ee){l=ee,u!==null&&(u.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(ee){return f[ee]};let Ve=null;function We(ee,me){if(d=me.getViewerPose(c||s),x=me,d!==null){const oe=d.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let we=!1;oe.length!==I.cameras.length&&(I.cameras.length=0,we=!0);for(let qe=0;qe<oe.length;qe++){const ct=oe[qe];let St=null;if(p!==null)St=p.getViewport(ct);else{const jt=h.getViewSubImage(u,ct);St=jt.viewport,qe===0&&(e.setRenderTargetTextures(y,jt.colorTexture,jt.depthStencilTexture),e.setRenderTarget(y))}let ke=D[qe];ke===void 0&&(ke=new Zn,ke.layers.enable(qe),ke.viewport=new Bt,D[qe]=ke),ke.matrix.fromArray(ct.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(ct.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(St.x,St.y,St.width,St.height),qe===0&&(I.matrix.copy(ke.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),we===!0&&I.cameras.push(ke)}const Le=a.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&M){h=i.getBinding();const qe=h.getDepthInformation(oe[0]);qe&&qe.isValid&&qe.texture&&m.init(qe,a.renderState)}if(Le&&Le.includes("camera-access")&&M){e.state.unbindTexture(),h=i.getBinding();for(let qe=0;qe<oe.length;qe++){const ct=oe[qe].camera;if(ct){let St=f[ct];St||(St=new US,f[ct]=St);const ke=h.getCameraImage(ct);St.sourceTexture=ke}}}}for(let oe=0;oe<C.length;oe++){const we=A[oe],Le=C[oe];we!==null&&Le!==void 0&&Le.update(we,me,c||s)}Ve&&Ve(ee,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),x=null}const Ne=new FS;Ne.setAnimationLoop(We),this.setAnimationLoop=function(ee){Ve=ee},this.dispose=function(){}}}const gD=new Xt,kS=new Oe;kS.set(-1,0,0,0,1,0,0,0,1);function xD(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,LS(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function a(m,f,g,v,y){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),d(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),x(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),M(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,g,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===bn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===bn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const g=e.get(f),v=g.envMap,y=g.envMapRotation;v&&(m.envMap.value=v,m.envMapRotation.value.setFromMatrix4(gD.makeRotationFromEuler(y)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(kS),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,g,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*g,m.scale.value=v*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,g){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===bn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){const g=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function vD(t,e,n,i){let a={},r={},s=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,v){const y=v.program;i.uniformBlockBinding(g,y)}function c(g,v){let y=a[g.id];y===void 0&&(x(g),y=d(g),a[g.id]=y,g.addEventListener("dispose",m));const C=v.program;i.updateUBOMapping(g,C);const A=e.render.frame;r[g.id]!==A&&(u(g),r[g.id]=A)}function d(g){const v=h();g.__bindingPointIndex=v;const y=t.createBuffer(),C=g.__size,A=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,C,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,y),y}function h(){for(let g=0;g<o;g++)if(s.indexOf(g)===-1)return s.push(g),g;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(g){const v=a[g.id],y=g.uniforms,C=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let A=0,R=y.length;A<R;A++){const S=Array.isArray(y[A])?y[A]:[y[A]];for(let w=0,N=S.length;w<N;w++){const D=S[w];if(p(D,A,w,C)===!0){const I=D.__offset,W=Array.isArray(D.value)?D.value:[D.value];let q=0;for(let P=0;P<W.length;P++){const U=W[P],O=M(U);typeof U=="number"||typeof U=="boolean"?(D.__data[0]=U,t.bufferSubData(t.UNIFORM_BUFFER,I+q,D.__data)):U.isMatrix3?(D.__data[0]=U.elements[0],D.__data[1]=U.elements[1],D.__data[2]=U.elements[2],D.__data[3]=0,D.__data[4]=U.elements[3],D.__data[5]=U.elements[4],D.__data[6]=U.elements[5],D.__data[7]=0,D.__data[8]=U.elements[6],D.__data[9]=U.elements[7],D.__data[10]=U.elements[8],D.__data[11]=0):ArrayBuffer.isView(U)?D.__data.set(new U.constructor(U.buffer,U.byteOffset,D.__data.length)):(U.toArray(D.__data,q),q+=O.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,I,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,v,y,C){const A=g.value,R=v+"_"+y;if(C[R]===void 0)return typeof A=="number"||typeof A=="boolean"?C[R]=A:ArrayBuffer.isView(A)?C[R]=A.slice():C[R]=A.clone(),!0;{const S=C[R];if(typeof A=="number"||typeof A=="boolean"){if(S!==A)return C[R]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(S.equals(A)===!1)return S.copy(A),!0}}return!1}function x(g){const v=g.uniforms;let y=0;const C=16;for(let R=0,S=v.length;R<S;R++){const w=Array.isArray(v[R])?v[R]:[v[R]];for(let N=0,D=w.length;N<D;N++){const I=w[N],W=Array.isArray(I.value)?I.value:[I.value];for(let q=0,P=W.length;q<P;q++){const U=W[q],O=M(U),j=y%C,$=j%O.boundary,ie=j+$;y+=$,ie!==0&&C-ie<O.storage&&(y+=C-ie),I.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=O.storage}}}const A=y%C;return A>0&&(y+=C-A),g.__size=y,g.__cache={},this}function M(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(v.boundary=16,v.storage=g.byteLength):Ce("WebGLRenderer: Unsupported uniform value type.",g),v}function m(g){const v=g.target;v.removeEventListener("dispose",m);const y=s.indexOf(v.__bindingPointIndex);s.splice(y,1),t.deleteBuffer(a[v.id]),delete a[v.id],delete r[v.id]}function f(){for(const g in a)t.deleteBuffer(a[g]);s=[],a={},r={}}return{bind:l,update:c,dispose:f}}const _D=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let _i=null;function SD(){return _i===null&&(_i=new uT(_D,16,16,wr,ua),_i.name="DFG_LUT",_i.minFilter=fn,_i.magFilter=fn,_i.wrapS=Qi,_i.wrapT=Qi,_i.generateMipmaps=!1,_i.needsUpdate=!0),_i}class XS{constructor(e={}){const{canvas:n=V3(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:p=$n}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=s;const M=p,m=new Set([xm,gm,mm]),f=new Set([$n,Di,Zo,Ko,hm,pm]),g=new Uint32Array(4),v=new Int32Array(4),y=new V;let C=null,A=null;const R=[],S=[];let w=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let D=!1,I=null;this._outputColorSpace=jn;let W=0,q=0,P=null,U=-1,O=null;const j=new Bt,$=new Bt;let ie=null;const _e=new at(0);let Me=0,Ve=n.width,We=n.height,Ne=1,ee=null,me=null;const oe=new Bt(0,0,Ve,We),we=new Bt(0,0,Ve,We);let Le=!1;const Re=new CS;let At=!1,qe=!1;const ct=new Xt,St=new V,ke=new Bt,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let wt=!1;function Rn(){return P===null?Ne:1}let F=i;function Wt(b,B){return n.getContext(b,B)}try{const b={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${fm}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",Ee,!1),n.addEventListener("webglcontextcreationerror",Fe,!1),F===null){const B="webgl2";if(F=Wt(B,b),F===null)throw Wt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw et("WebGLRenderer: "+b.message),b}let Ye,xt,fe,Ct,T,_,z,K,ne,ae,ue,Y,J,ge,Se,le,re,Ue,ze,tt,L,se,Z;function xe(){Ye=new SR(F),Ye.init(),L=new fD(F,Ye),xt=new dR(F,Ye,e,L),fe=new cD(F,Ye),xt.reversedDepthBuffer&&u&&fe.buffers.depth.setReversed(!0),Ct=new bR(F),T=new ZC,_=new uD(F,Ye,fe,T,xt,L,Ct),z=new _R(N),K=new wT(F),se=new uR(F,K),ne=new yR(F,K,Ct,se),ae=new TR(F,ne,K,se,Ct),Ue=new ER(F,xt,_),Se=new hR(T),ue=new YC(N,z,Ye,xt,se,Se),Y=new xD(N,T),J=new QC,ge=new iD(Ye),re=new cR(N,z,fe,ae,x,l),le=new lD(N,ae,xt),Z=new vD(F,Ct,xt,fe),ze=new fR(F,Ye,Ct),tt=new MR(F,Ye,Ct),Ct.programs=ue.programs,N.capabilities=xt,N.extensions=Ye,N.properties=T,N.renderLists=J,N.shadowMap=le,N.state=fe,N.info=Ct}xe(),M!==$n&&(w=new wR(M,n.width,n.height,a,r));const ce=new mD(N,F);this.xr=ce,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const b=Ye.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ye.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(b){b!==void 0&&(Ne=b,this.setSize(Ve,We,!1))},this.getSize=function(b){return b.set(Ve,We)},this.setSize=function(b,B,X=!0){if(ce.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}Ve=b,We=B,n.width=Math.floor(b*Ne),n.height=Math.floor(B*Ne),X===!0&&(n.style.width=b+"px",n.style.height=B+"px"),w!==null&&w.setSize(n.width,n.height),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(Ve*Ne,We*Ne).floor()},this.setDrawingBufferSize=function(b,B,X){Ve=b,We=B,Ne=X,n.width=Math.floor(b*X),n.height=Math.floor(B*X),this.setViewport(0,0,b,B)},this.setEffects=function(b){if(M===$n){et("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let B=0;B<b.length;B++)if(b[B].isOutputPass===!0){Ce("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(j)},this.getViewport=function(b){return b.copy(oe)},this.setViewport=function(b,B,X,H){b.isVector4?oe.set(b.x,b.y,b.z,b.w):oe.set(b,B,X,H),fe.viewport(j.copy(oe).multiplyScalar(Ne).round())},this.getScissor=function(b){return b.copy(we)},this.setScissor=function(b,B,X,H){b.isVector4?we.set(b.x,b.y,b.z,b.w):we.set(b,B,X,H),fe.scissor($.copy(we).multiplyScalar(Ne).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(b){fe.setScissorTest(Le=b)},this.setOpaqueSort=function(b){ee=b},this.setTransparentSort=function(b){me=b},this.getClearColor=function(b){return b.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(b=!0,B=!0,X=!0){let H=0;if(b){let G=!1;if(P!==null){const pe=P.texture.format;G=m.has(pe)}if(G){const pe=P.texture.type,ye=f.has(pe),he=re.getClearColor(),be=re.getClearAlpha(),Te=he.r,Be=he.g,Ge=he.b;ye?(g[0]=Te,g[1]=Be,g[2]=Ge,g[3]=be,F.clearBufferuiv(F.COLOR,0,g)):(v[0]=Te,v[1]=Be,v[2]=Ge,v[3]=be,F.clearBufferiv(F.COLOR,0,v))}else H|=F.COLOR_BUFFER_BIT}B&&(H|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),I=b},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",Ee,!1),n.removeEventListener("webglcontextcreationerror",Fe,!1),re.dispose(),J.dispose(),ge.dispose(),T.dispose(),z.dispose(),ae.dispose(),se.dispose(),Z.dispose(),ue.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",wm),ce.removeEventListener("sessionend",Rm),er.stop()};function te(b){b.preventDefault(),Rg("WebGLRenderer: Context Lost."),D=!0}function Ee(){Rg("WebGLRenderer: Context Restored."),D=!1;const b=Ct.autoReset,B=le.enabled,X=le.autoUpdate,H=le.needsUpdate,G=le.type;xe(),Ct.autoReset=b,le.enabled=B,le.autoUpdate=X,le.needsUpdate=H,le.type=G}function Fe(b){et("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Lt(b){const B=b.target;B.removeEventListener("dispose",Lt),ut(B)}function ut(b){Oi(b),T.remove(b)}function Oi(b){const B=T.get(b).programs;B!==void 0&&(B.forEach(function(X){ue.releaseProgram(X)}),b.isShaderMaterial&&ue.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,X,H,G,pe){B===null&&(B=jt);const ye=G.isMesh&&G.matrixWorld.determinant()<0,he=ny(b,B,X,H,G);fe.setMaterial(H,ye);let be=X.index,Te=1;if(H.wireframe===!0){if(be=ne.getWireframeAttribute(X),be===void 0)return;Te=2}const Be=X.drawRange,Ge=X.attributes.position;let Ae=Be.start*Te,ft=(Be.start+Be.count)*Te;pe!==null&&(Ae=Math.max(Ae,pe.start*Te),ft=Math.min(ft,(pe.start+pe.count)*Te)),be!==null?(Ae=Math.max(Ae,0),ft=Math.min(ft,be.count)):Ge!=null&&(Ae=Math.max(Ae,0),ft=Math.min(ft,Ge.count));const Ot=ft-Ae;if(Ot<0||Ot===1/0)return;se.setup(G,H,he,X,be);let Dt,pt=ze;if(be!==null&&(Dt=K.get(be),pt=tt,pt.setIndex(Dt)),G.isMesh)H.wireframe===!0?(fe.setLineWidth(H.wireframeLinewidth*Rn()),pt.setMode(F.LINES)):pt.setMode(F.TRIANGLES);else if(G.isLine){let ln=H.linewidth;ln===void 0&&(ln=1),fe.setLineWidth(ln*Rn()),G.isLineSegments?pt.setMode(F.LINES):G.isLineLoop?pt.setMode(F.LINE_LOOP):pt.setMode(F.LINE_STRIP)}else G.isPoints?pt.setMode(F.POINTS):G.isSprite&&pt.setMode(F.TRIANGLES);if(G.isBatchedMesh)if(Ye.get("WEBGL_multi_draw"))pt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const ln=G._multiDrawStarts,ve=G._multiDrawCounts,Cn=G._multiDrawCount,$e=be?K.get(be).bytesPerElement:1,Vn=T.get(H).currentProgram.getUniforms();for(let xi=0;xi<Cn;xi++)Vn.setValue(F,"_gl_DrawID",xi),pt.render(ln[xi]/$e,ve[xi])}else if(G.isInstancedMesh)pt.renderInstances(Ae,Ot,G.count);else if(X.isInstancedBufferGeometry){const ln=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ve=Math.min(X.instanceCount,ln);pt.renderInstances(Ae,Ot,ve)}else pt.render(Ae,Ot)};function gi(b,B,X){b.transparent===!0&&b.side===qi&&b.forceSinglePass===!1?(b.side=bn,b.needsUpdate=!0,vl(b,B,X),b.side=Qa,b.needsUpdate=!0,vl(b,B,X),b.side=qi):vl(b,B,X)}this.compile=function(b,B,X=null){X===null&&(X=b),A=ge.get(X),A.init(B),S.push(A),X.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),b!==X&&b.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),A.setupLights();const H=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const pe=G.material;if(pe)if(Array.isArray(pe))for(let ye=0;ye<pe.length;ye++){const he=pe[ye];gi(he,X,G),H.add(he)}else gi(pe,X,G),H.add(pe)}),A=S.pop(),H},this.compileAsync=function(b,B,X=null){const H=this.compile(b,B,X);return new Promise(G=>{function pe(){if(H.forEach(function(ye){T.get(ye).currentProgram.isReady()&&H.delete(ye)}),H.size===0){G(b);return}setTimeout(pe,10)}Ye.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Vu=null;function ey(b){Vu&&Vu(b)}function wm(){er.stop()}function Rm(){er.start()}const er=new FS;er.setAnimationLoop(ey),typeof self<"u"&&er.setContext(self),this.setAnimationLoop=function(b){Vu=b,ce.setAnimationLoop(b),b===null?er.stop():er.start()},ce.addEventListener("sessionstart",wm),ce.addEventListener("sessionend",Rm),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;I!==null&&I.renderStart(b,B);const X=ce.enabled===!0&&ce.isPresenting===!0,H=w!==null&&(P===null||X)&&w.begin(N,P);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(B),B=ce.getCamera()),b.isScene===!0&&b.onBeforeRender(N,b,B,P),A=ge.get(b,S.length),A.init(B),A.state.textureUnits=_.getTextureUnits(),S.push(A),ct.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Re.setFromProjectionMatrix(ct,Ti,B.reversedDepth),qe=this.localClippingEnabled,At=Se.init(this.clippingPlanes,qe),C=J.get(b,R.length),C.init(),R.push(C),ce.enabled===!0&&ce.isPresenting===!0){const ye=N.xr.getDepthSensingMesh();ye!==null&&ku(ye,B,-1/0,N.sortObjects)}ku(b,B,0,N.sortObjects),C.finish(),N.sortObjects===!0&&C.sort(ee,me),wt=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,wt&&re.addToRenderList(C,b),this.info.render.frame++,At===!0&&Se.beginShadows();const G=A.state.shadowsArray;if(le.render(G,b,B),At===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&w.hasRenderPass())===!1){const ye=C.opaque,he=C.transmissive;if(A.setupLights(),B.isArrayCamera){const be=B.cameras;if(he.length>0)for(let Te=0,Be=be.length;Te<Be;Te++){const Ge=be[Te];Dm(ye,he,b,Ge)}wt&&re.render(b);for(let Te=0,Be=be.length;Te<Be;Te++){const Ge=be[Te];Cm(C,b,Ge,Ge.viewport)}}else he.length>0&&Dm(ye,he,b,B),wt&&re.render(b),Cm(C,b,B)}P!==null&&q===0&&(_.updateMultisampleRenderTarget(P),_.updateRenderTargetMipmap(P)),H&&w.end(N),b.isScene===!0&&b.onAfterRender(N,b,B),se.resetDefaultState(),U=-1,O=null,S.pop(),S.length>0?(A=S[S.length-1],_.setTextureUnits(A.state.textureUnits),At===!0&&Se.setGlobalState(N.clippingPlanes,A.state.camera)):A=null,R.pop(),R.length>0?C=R[R.length-1]:C=null,I!==null&&I.renderEnd()};function ku(b,B,X,H){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLightProbeGrid)A.pushLightProbeGrid(b);else if(b.isLight)A.pushLight(b),b.castShadow&&A.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Re.intersectsSprite(b)){H&&ke.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ct);const ye=ae.update(b),he=b.material;he.visible&&C.push(b,ye,he,X,ke.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Re.intersectsObject(b))){const ye=ae.update(b),he=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ke.copy(b.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),ke.copy(ye.boundingSphere.center)),ke.applyMatrix4(b.matrixWorld).applyMatrix4(ct)),Array.isArray(he)){const be=ye.groups;for(let Te=0,Be=be.length;Te<Be;Te++){const Ge=be[Te],Ae=he[Ge.materialIndex];Ae&&Ae.visible&&C.push(b,ye,Ae,X,ke.z,Ge)}}else he.visible&&C.push(b,ye,he,X,ke.z,null)}}const pe=b.children;for(let ye=0,he=pe.length;ye<he;ye++)ku(pe[ye],B,X,H)}function Cm(b,B,X,H){const{opaque:G,transmissive:pe,transparent:ye}=b;A.setupLightsView(X),At===!0&&Se.setGlobalState(N.clippingPlanes,X),H&&fe.viewport(j.copy(H)),G.length>0&&xl(G,B,X),pe.length>0&&xl(pe,B,X),ye.length>0&&xl(ye,B,X),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Dm(b,B,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[H.id]===void 0){const Ae=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[H.id]=new Ri(1,1,{generateMipmaps:!0,type:Ae?ua:$n,minFilter:hr,samples:Math.max(4,xt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}const pe=A.state.transmissionRenderTarget[H.id],ye=H.viewport||j;pe.setSize(ye.z*N.transmissionResolutionScale,ye.w*N.transmissionResolutionScale);const he=N.getRenderTarget(),be=N.getActiveCubeFace(),Te=N.getActiveMipmapLevel();N.setRenderTarget(pe),N.getClearColor(_e),Me=N.getClearAlpha(),Me<1&&N.setClearColor(16777215,.5),N.clear(),wt&&re.render(X);const Be=N.toneMapping;N.toneMapping=wi;const Ge=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),A.setupLightsView(H),At===!0&&Se.setGlobalState(N.clippingPlanes,H),xl(b,X,H),_.updateMultisampleRenderTarget(pe),_.updateRenderTargetMipmap(pe),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let ft=0,Ot=B.length;ft<Ot;ft++){const Dt=B[ft],{object:pt,geometry:ln,material:ve,group:Cn}=Dt;if(ve.side===qi&&pt.layers.test(H.layers)){const $e=ve.side;ve.side=bn,ve.needsUpdate=!0,Nm(pt,X,H,ln,ve,Cn),ve.side=$e,ve.needsUpdate=!0,Ae=!0}}Ae===!0&&(_.updateMultisampleRenderTarget(pe),_.updateRenderTargetMipmap(pe))}N.setRenderTarget(he,be,Te),N.setClearColor(_e,Me),Ge!==void 0&&(H.viewport=Ge),N.toneMapping=Be}function xl(b,B,X){const H=B.isScene===!0?B.overrideMaterial:null;for(let G=0,pe=b.length;G<pe;G++){const ye=b[G],{object:he,geometry:be,group:Te}=ye;let Be=ye.material;Be.allowOverride===!0&&H!==null&&(Be=H),he.layers.test(X.layers)&&Nm(he,B,X,be,Be,Te)}}function Nm(b,B,X,H,G,pe){b.onBeforeRender(N,B,X,H,G,pe),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(N,B,X,H,b,pe),G.transparent===!0&&G.side===qi&&G.forceSinglePass===!1?(G.side=bn,G.needsUpdate=!0,N.renderBufferDirect(X,B,H,G,b,pe),G.side=Qa,G.needsUpdate=!0,N.renderBufferDirect(X,B,H,G,b,pe),G.side=qi):N.renderBufferDirect(X,B,H,G,b,pe),b.onAfterRender(N,B,X,H,G,pe)}function vl(b,B,X){B.isScene!==!0&&(B=jt);const H=T.get(b),G=A.state.lights,pe=A.state.shadowsArray,ye=G.state.version,he=ue.getParameters(b,G.state,pe,B,X,A.state.lightProbeGridArray),be=ue.getProgramCacheKey(he);let Te=H.programs;H.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?B.environment:null,H.fog=B.fog;const Be=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;H.envMap=z.get(b.envMap||H.environment,Be),H.envMapRotation=H.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,Te===void 0&&(b.addEventListener("dispose",Lt),Te=new Map,H.programs=Te);let Ge=Te.get(be);if(Ge!==void 0){if(H.currentProgram===Ge&&H.lightsStateVersion===ye)return Lm(b,he),Ge}else he.uniforms=ue.getUniforms(b),I!==null&&b.isNodeMaterial&&I.build(b,X,he),b.onBeforeCompile(he,N),Ge=ue.acquireProgram(he,be),Te.set(be,Ge),H.uniforms=he.uniforms;const Ae=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ae.clippingPlanes=Se.uniform),Lm(b,he),H.needsLights=ay(b),H.lightsStateVersion=ye,H.needsLights&&(Ae.ambientLightColor.value=G.state.ambient,Ae.lightProbe.value=G.state.probe,Ae.directionalLights.value=G.state.directional,Ae.directionalLightShadows.value=G.state.directionalShadow,Ae.spotLights.value=G.state.spot,Ae.spotLightShadows.value=G.state.spotShadow,Ae.rectAreaLights.value=G.state.rectArea,Ae.ltc_1.value=G.state.rectAreaLTC1,Ae.ltc_2.value=G.state.rectAreaLTC2,Ae.pointLights.value=G.state.point,Ae.pointLightShadows.value=G.state.pointShadow,Ae.hemisphereLights.value=G.state.hemi,Ae.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ae.spotLightMatrix.value=G.state.spotLightMatrix,Ae.spotLightMap.value=G.state.spotLightMap,Ae.pointShadowMatrix.value=G.state.pointShadowMatrix),H.lightProbeGrid=A.state.lightProbeGridArray.length>0,H.currentProgram=Ge,H.uniformsList=null,Ge}function Um(b){if(b.uniformsList===null){const B=b.currentProgram.getUniforms();b.uniformsList=Cc.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function Lm(b,B){const X=T.get(b);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function ty(b,B){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;y.setFromMatrixPosition(B.matrixWorld);for(let X=0,H=b.length;X<H;X++){const G=b[X];if(G.texture!==null&&G.boundingBox.containsPoint(y))return G}return null}function ny(b,B,X,H,G){B.isScene!==!0&&(B=jt),_.resetTextureUnits();const pe=B.fog,ye=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?B.environment:null,he=P===null?N.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ke.workingColorSpace,be=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Te=z.get(H.envMap||ye,be),Be=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ge=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ae=!!X.morphAttributes.position,ft=!!X.morphAttributes.normal,Ot=!!X.morphAttributes.color;let Dt=wi;H.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Dt=N.toneMapping);const pt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ln=pt!==void 0?pt.length:0,ve=T.get(H),Cn=A.state.lights;if(At===!0&&(qe===!0||b!==O)){const vt=b===O&&H.id===U;Se.setState(H,b,vt)}let $e=!1;H.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==Cn.state.version||ve.outputColorSpace!==he||G.isBatchedMesh&&ve.batching===!1||!G.isBatchedMesh&&ve.batching===!0||G.isBatchedMesh&&ve.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&ve.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&ve.instancing===!1||!G.isInstancedMesh&&ve.instancing===!0||G.isSkinnedMesh&&ve.skinning===!1||!G.isSkinnedMesh&&ve.skinning===!0||G.isInstancedMesh&&ve.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ve.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&ve.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&ve.instancingMorph===!1&&G.morphTexture!==null||ve.envMap!==Te||H.fog===!0&&ve.fog!==pe||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==Se.numPlanes||ve.numIntersection!==Se.numIntersection)||ve.vertexAlphas!==Be||ve.vertexTangents!==Ge||ve.morphTargets!==Ae||ve.morphNormals!==ft||ve.morphColors!==Ot||ve.toneMapping!==Dt||ve.morphTargetsCount!==ln||!!ve.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&($e=!0):($e=!0,ve.__version=H.version);let Vn=ve.currentProgram;$e===!0&&(Vn=vl(H,B,G),I&&H.isNodeMaterial&&I.onUpdateProgram(H,Vn,ve));let xi=!1,ma=!1,Pr=!1;const mt=Vn.getUniforms(),Pt=ve.uniforms;if(fe.useProgram(Vn.program)&&(xi=!0,ma=!0,Pr=!0),H.id!==U&&(U=H.id,ma=!0),ve.needsLights){const vt=ty(A.state.lightProbeGridArray,G);ve.lightProbeGrid!==vt&&(ve.lightProbeGrid=vt,ma=!0)}if(xi||O!==b){fe.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),mt.setValue(F,"projectionMatrix",b.projectionMatrix),mt.setValue(F,"viewMatrix",b.matrixWorldInverse);const xa=mt.map.cameraPosition;xa!==void 0&&xa.setValue(F,St.setFromMatrixPosition(b.matrixWorld)),xt.logarithmicDepthBuffer&&mt.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&mt.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),O!==b&&(O=b,ma=!0,Pr=!0)}if(ve.needsLights&&(Cn.state.directionalShadowMap.length>0&&mt.setValue(F,"directionalShadowMap",Cn.state.directionalShadowMap,_),Cn.state.spotShadowMap.length>0&&mt.setValue(F,"spotShadowMap",Cn.state.spotShadowMap,_),Cn.state.pointShadowMap.length>0&&mt.setValue(F,"pointShadowMap",Cn.state.pointShadowMap,_)),G.isSkinnedMesh){mt.setOptional(F,G,"bindMatrix"),mt.setOptional(F,G,"bindMatrixInverse");const vt=G.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),mt.setValue(F,"boneTexture",vt.boneTexture,_))}G.isBatchedMesh&&(mt.setOptional(F,G,"batchingTexture"),mt.setValue(F,"batchingTexture",G._matricesTexture,_),mt.setOptional(F,G,"batchingIdTexture"),mt.setValue(F,"batchingIdTexture",G._indirectTexture,_),mt.setOptional(F,G,"batchingColorTexture"),G._colorsTexture!==null&&mt.setValue(F,"batchingColorTexture",G._colorsTexture,_));const ga=X.morphAttributes;if((ga.position!==void 0||ga.normal!==void 0||ga.color!==void 0)&&Ue.update(G,X,Vn),(ma||ve.receiveShadow!==G.receiveShadow)&&(ve.receiveShadow=G.receiveShadow,mt.setValue(F,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&B.environment!==null&&(Pt.envMapIntensity.value=B.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=SD()),ma){if(mt.setValue(F,"toneMappingExposure",N.toneMappingExposure),ve.needsLights&&iy(Pt,Pr),pe&&H.fog===!0&&Y.refreshFogUniforms(Pt,pe),Y.refreshMaterialUniforms(Pt,H,Ne,We,A.state.transmissionRenderTarget[b.id]),ve.needsLights&&ve.lightProbeGrid){const vt=ve.lightProbeGrid;Pt.probesSH.value=vt.texture,Pt.probesMin.value.copy(vt.boundingBox.min),Pt.probesMax.value.copy(vt.boundingBox.max),Pt.probesResolution.value.copy(vt.resolution)}Cc.upload(F,Um(ve),Pt,_)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Cc.upload(F,Um(ve),Pt,_),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&mt.setValue(F,"center",G.center),mt.setValue(F,"modelViewMatrix",G.modelViewMatrix),mt.setValue(F,"normalMatrix",G.normalMatrix),mt.setValue(F,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){const vt=H.uniformsGroups;for(let xa=0,Fr=vt.length;xa<Fr;xa++){const Om=vt[xa];Z.update(Om,Vn),Z.bind(Om,Vn)}}return Vn}function iy(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function ay(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(b,B,X){const H=T.get(b);H.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),T.get(b.texture).__webglTexture=B,T.get(b.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:X,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,B){const X=T.get(b);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0};const ry=F.createFramebuffer();this.setRenderTarget=function(b,B=0,X=0){P=b,W=B,q=X;let H=null,G=!1,pe=!1;if(b){const he=T.get(b);if(he.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(F.FRAMEBUFFER,he.__webglFramebuffer),j.copy(b.viewport),$.copy(b.scissor),ie=b.scissorTest,fe.viewport(j),fe.scissor($),fe.setScissorTest(ie),U=-1;return}else if(he.__webglFramebuffer===void 0)_.setupRenderTarget(b);else if(he.__hasExternalTextures)_.rebindTextures(b,T.get(b.texture).__webglTexture,T.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Be=b.depthTexture;if(he.__boundDepthTexture!==Be){if(Be!==null&&T.has(Be)&&(b.width!==Be.image.width||b.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(b)}}const be=b.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(pe=!0);const Te=T.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Te[B])?H=Te[B][X]:H=Te[B],G=!0):b.samples>0&&_.useMultisampledRTT(b)===!1?H=T.get(b).__webglMultisampledFramebuffer:Array.isArray(Te)?H=Te[X]:H=Te,j.copy(b.viewport),$.copy(b.scissor),ie=b.scissorTest}else j.copy(oe).multiplyScalar(Ne).floor(),$.copy(we).multiplyScalar(Ne).floor(),ie=Le;if(X!==0&&(H=ry),fe.bindFramebuffer(F.FRAMEBUFFER,H)&&fe.drawBuffers(b,H),fe.viewport(j),fe.scissor($),fe.setScissorTest(ie),G){const he=T.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,he.__webglTexture,X)}else if(pe){const he=B;for(let be=0;be<b.textures.length;be++){const Te=T.get(b.textures[be]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+be,Te.__webglTexture,X,he)}}else if(b!==null&&X!==0){const he=T.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,he.__webglTexture,X)}U=-1},this.readRenderTargetPixels=function(b,B,X,H,G,pe,ye,he=0){if(!(b&&b.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=T.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ye!==void 0&&(be=be[ye]),be){fe.bindFramebuffer(F.FRAMEBUFFER,be);try{const Te=b.textures[he],Be=Te.format,Ge=Te.type;if(b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+he),!xt.textureFormatReadable(Be)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xt.textureTypeReadable(Ge)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-H&&X>=0&&X<=b.height-G&&F.readPixels(B,X,H,G,L.convert(Be),L.convert(Ge),pe)}finally{const Te=P!==null?T.get(P).__webglFramebuffer:null;fe.bindFramebuffer(F.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(b,B,X,H,G,pe,ye,he=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=T.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ye!==void 0&&(be=be[ye]),be)if(B>=0&&B<=b.width-H&&X>=0&&X<=b.height-G){fe.bindFramebuffer(F.FRAMEBUFFER,be);const Te=b.textures[he],Be=Te.format,Ge=Te.type;if(b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+he),!xt.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xt.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ae=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ae),F.bufferData(F.PIXEL_PACK_BUFFER,pe.byteLength,F.STREAM_READ),F.readPixels(B,X,H,G,L.convert(Be),L.convert(Ge),0);const ft=P!==null?T.get(P).__webglFramebuffer:null;fe.bindFramebuffer(F.FRAMEBUFFER,ft);const Ot=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await k3(F,Ot,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ae),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,pe),F.deleteBuffer(Ae),F.deleteSync(Ot),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,B=null,X=0){const H=Math.pow(2,-X),G=Math.floor(b.image.width*H),pe=Math.floor(b.image.height*H),ye=B!==null?B.x:0,he=B!==null?B.y:0;_.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,ye,he,G,pe),fe.unbindTexture()};const sy=F.createFramebuffer(),oy=F.createFramebuffer();this.copyTextureToTexture=function(b,B,X=null,H=null,G=0,pe=0){let ye,he,be,Te,Be,Ge,Ae,ft,Ot;const Dt=b.isCompressedTexture?b.mipmaps[pe]:b.image;if(X!==null)ye=X.max.x-X.min.x,he=X.max.y-X.min.y,be=X.isBox3?X.max.z-X.min.z:1,Te=X.min.x,Be=X.min.y,Ge=X.isBox3?X.min.z:0;else{const Pt=Math.pow(2,-G);ye=Math.floor(Dt.width*Pt),he=Math.floor(Dt.height*Pt),b.isDataArrayTexture?be=Dt.depth:b.isData3DTexture?be=Math.floor(Dt.depth*Pt):be=1,Te=0,Be=0,Ge=0}H!==null?(Ae=H.x,ft=H.y,Ot=H.z):(Ae=0,ft=0,Ot=0);const pt=L.convert(B.format),ln=L.convert(B.type);let ve;B.isData3DTexture?(_.setTexture3D(B,0),ve=F.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(_.setTexture2DArray(B,0),ve=F.TEXTURE_2D_ARRAY):(_.setTexture2D(B,0),ve=F.TEXTURE_2D),fe.activeTexture(F.TEXTURE0),fe.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,B.flipY),fe.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),fe.pixelStorei(F.UNPACK_ALIGNMENT,B.unpackAlignment);const Cn=fe.getParameter(F.UNPACK_ROW_LENGTH),$e=fe.getParameter(F.UNPACK_IMAGE_HEIGHT),Vn=fe.getParameter(F.UNPACK_SKIP_PIXELS),xi=fe.getParameter(F.UNPACK_SKIP_ROWS),ma=fe.getParameter(F.UNPACK_SKIP_IMAGES);fe.pixelStorei(F.UNPACK_ROW_LENGTH,Dt.width),fe.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Dt.height),fe.pixelStorei(F.UNPACK_SKIP_PIXELS,Te),fe.pixelStorei(F.UNPACK_SKIP_ROWS,Be),fe.pixelStorei(F.UNPACK_SKIP_IMAGES,Ge);const Pr=b.isDataArrayTexture||b.isData3DTexture,mt=B.isDataArrayTexture||B.isData3DTexture;if(b.isDepthTexture){const Pt=T.get(b),ga=T.get(B),vt=T.get(Pt.__renderTarget),xa=T.get(ga.__renderTarget);fe.bindFramebuffer(F.READ_FRAMEBUFFER,vt.__webglFramebuffer),fe.bindFramebuffer(F.DRAW_FRAMEBUFFER,xa.__webglFramebuffer);for(let Fr=0;Fr<be;Fr++)Pr&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,T.get(b).__webglTexture,G,Ge+Fr),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,T.get(B).__webglTexture,pe,Ot+Fr)),F.blitFramebuffer(Te,Be,ye,he,Ae,ft,ye,he,F.DEPTH_BUFFER_BIT,F.NEAREST);fe.bindFramebuffer(F.READ_FRAMEBUFFER,null),fe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||T.has(b)){const Pt=T.get(b),ga=T.get(B);fe.bindFramebuffer(F.READ_FRAMEBUFFER,sy),fe.bindFramebuffer(F.DRAW_FRAMEBUFFER,oy);for(let vt=0;vt<be;vt++)Pr?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pt.__webglTexture,G,Ge+vt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Pt.__webglTexture,G),mt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ga.__webglTexture,pe,Ot+vt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ga.__webglTexture,pe),G!==0?F.blitFramebuffer(Te,Be,ye,he,Ae,ft,ye,he,F.COLOR_BUFFER_BIT,F.NEAREST):mt?F.copyTexSubImage3D(ve,pe,Ae,ft,Ot+vt,Te,Be,ye,he):F.copyTexSubImage2D(ve,pe,Ae,ft,Te,Be,ye,he);fe.bindFramebuffer(F.READ_FRAMEBUFFER,null),fe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else mt?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(ve,pe,Ae,ft,Ot,ye,he,be,pt,ln,Dt.data):B.isCompressedArrayTexture?F.compressedTexSubImage3D(ve,pe,Ae,ft,Ot,ye,he,be,pt,Dt.data):F.texSubImage3D(ve,pe,Ae,ft,Ot,ye,he,be,pt,ln,Dt):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,pe,Ae,ft,ye,he,pt,ln,Dt.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,pe,Ae,ft,Dt.width,Dt.height,pt,Dt.data):F.texSubImage2D(F.TEXTURE_2D,pe,Ae,ft,ye,he,pt,ln,Dt);fe.pixelStorei(F.UNPACK_ROW_LENGTH,Cn),fe.pixelStorei(F.UNPACK_IMAGE_HEIGHT,$e),fe.pixelStorei(F.UNPACK_SKIP_PIXELS,Vn),fe.pixelStorei(F.UNPACK_SKIP_ROWS,xi),fe.pixelStorei(F.UNPACK_SKIP_IMAGES,ma),pe===0&&B.generateMipmaps&&F.generateMipmap(ve),fe.unbindTexture()},this.initRenderTarget=function(b){T.get(b).__webglFramebuffer===void 0&&_.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?_.setTextureCube(b,0):b.isData3DTexture?_.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?_.setTexture2DArray(b,0):_.setTexture2D(b,0),fe.unbindTexture()},this.resetState=function(){W=0,q=0,P=null,fe.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ke._getUnpackColorSpace()}}function yD(){const t=k.useRef(null);return k.useEffect(()=>{const e=t.current;if(!e)return;const n=new XS({alpha:!0,antialias:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.setSize(e.clientWidth,e.clientHeight),n.setClearColor(0,0),e.appendChild(n.domElement);const i=new ES,a=new ym(-1,1,1,-1,0,1);a.position.z=1;const r=new hi({transparent:!0,uniforms:{uTime:{value:0},uAspect:{value:e.clientWidth/e.clientHeight},uMouse:{value:new lt(.5,.5)}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float uTime;
        uniform float uAspect;
        uniform vec2 uMouse;
        varying vec2 vUv;

        vec2 hash(vec2 p) {
          p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
          return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
        }

        float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(mix(dot(hash(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
                         dot(hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
                     mix(dot(hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
                         dot(hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x), u.y);
        }

        float fbm(vec2 p) {
          float v = 0.0;
          float a = 0.5;
          for (int i = 0; i < 5; i++) {
            v += a * noise(p);
            p *= 2.0;
            a *= 0.5;
          }
          return v;
        }

        void main() {
          vec2 uv = vUv;
          float t = uTime * 0.18;

          // Vector from current pixel to the (smoothed) cursor position.
          // Flow falls off with distance so only nearby smoke bends toward the cursor.
          vec2 toMouse = uMouse - uv;
          float mouseDist = length(toMouse);
          vec2 flow = toMouse * 0.55 * exp(-mouseDist * 2.2);

          // Domain-warped noise — normal upward drift + mouse-based pull
          vec2 p = uv * 3.5;
          vec2 q = vec2(
            fbm(p + vec2(0.0, t) + flow * 2.0),
            fbm(p + vec2(5.2, 1.3 - t) + flow * 2.0)
          );
          float n = fbm(p + 1.6 * q + vec2(0.0, t * 1.2) + flow * 1.8);
          n = n * 0.5 + 0.5;

          // Extra noise density near the cursor — feels like smoke gathering
          float mouseGlow = exp(-mouseDist * 5.5);
          n += mouseGlow * 0.22;

          vec3 black     = vec3(0.03, 0.0,  0.0);
          vec3 darkRed   = vec3(0.22, 0.01, 0.01);
          vec3 red       = vec3(0.62, 0.05, 0.03);
          vec3 brightRed = vec3(0.92, 0.12, 0.06);

          vec3 color = mix(black,   darkRed,   smoothstep(0.15, 0.45, n));
          color      = mix(color,   red,       smoothstep(0.45, 0.75, n));
          color      = mix(color,   brightRed, smoothstep(0.82, 0.97, n));

          // Bright bloom right at the cursor
          color = mix(color, brightRed, mouseGlow * 0.35);

          // Elliptical alpha mask so it fades softly into the surrounding section
          vec2 c = uv - 0.5;
          c.x *= uAspect;
          float d = length(c) * 2.0;
          float mask = 1.0 - smoothstep(0.28, 0.95, d);

          gl_FragColor = vec4(color, mask);
        }
      `}),s=new gl(2,2),o=new Ni(s,r);i.add(o);const l=()=>{const M=e.clientWidth,m=e.clientHeight;n.setSize(M,m),r.uniforms.uAspect.value=M/m};window.addEventListener("resize",l);const c={x:.5,y:.5},d={x:.5,y:.5},h=M=>{const m=e.getBoundingClientRect();c.x=(M.clientX-m.left)/m.width,c.y=1-(M.clientY-m.top)/m.height};window.addEventListener("mousemove",h);const u=new PS;let p=0;const x=()=>{d.x+=(c.x-d.x)*.06,d.y+=(c.y-d.y)*.06,r.uniforms.uMouse.value.set(d.x,d.y),r.uniforms.uTime.value=u.getElapsedTime(),n.render(i,a),p=requestAnimationFrame(x)};return x(),()=>{cancelAnimationFrame(p),window.removeEventListener("resize",l),window.removeEventListener("mousemove",h),s.dispose(),r.dispose(),n.dispose(),n.domElement.parentNode===e&&e.removeChild(n.domElement)}},[]),E.jsx("div",{ref:t,className:"pointer-events-none absolute inset-0","aria-hidden":"true"})}const MD=[{Icon:QE,title:"Lightning-Fast Payouts",desc:"Cash out winnings in seconds, never wait days."},{Icon:$E,title:"Clean Poker Client",desc:"Every button where you expect it, zero fluff."},{Icon:ZE,title:"Instant Purchases",desc:"Top up instantly with crypto, card, apple pay, google pay, or pay by bank."},{Icon:e3,title:"24/7 Games",desc:"Morning grind or midnight session, there’s always a seat open."},{Icon:KE,title:"Fully Legal and Secure",desc:"18+ and legal? You’re set. Secure, fair, and transparent."},{Icon:JE,title:"Mobile Friendly",desc:"Play anywhere. Same games, rewards, and features."}];function jS(){return E.jsxs("section",{"aria-labelledby":"features-heading",className:"relative mx-auto w-full max-w-[1440px] overflow-hidden bg-black",children:[E.jsx("img",{src:o3,alt:"","aria-hidden":"true",draggable:"false",className:"pointer-events-none absolute left-0 top-0 w-full select-none"}),E.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute left-1/2 top-[clamp(40px,5.5vw,110px)] z-[2] h-[clamp(360px,50vw,720px)] w-[clamp(320px,42vw,600px)] -translate-x-1/2",children:E.jsx(yD,{})}),E.jsxs("div",{className:"relative z-10 flex flex-col items-center gap-[clamp(32px,4.17vw,60px)] px-[clamp(16px,4.17vw,60px)] pb-[clamp(48px,6.94vw,100px)] pt-[clamp(48px,6.94vw,100px)]",children:[E.jsxs("div",{className:"flex flex-col items-center gap-[clamp(16px,2.5vw,36px)]",children:[E.jsx("img",{src:l3,alt:"Poker dealer at the table",draggable:"false",className:"w-[clamp(220px,31.53vw,454px)]"}),E.jsxs("div",{className:"flex flex-col items-center gap-[clamp(16px,1.67vw,24px)] text-center",children:[E.jsxs("h2",{id:"features-heading",className:"font-sans text-[clamp(32px,4.44vw,64px)] font-bold leading-[1.15] text-[#FFFFFF]",children:[E.jsx("span",{className:"block uppercase",children:"Welcome to"}),E.jsx("span",{className:"block uppercase text-[#EF0C27]",children:"Suprex"})]}),E.jsx(s3,{children:"Play Now"})]})]}),E.jsx("ul",{className:"grid w-full grid-cols-1 gap-[12px] xs:grid-cols-2 sm:gap-[16px] md:grid-cols-3 lg:grid-cols-6",children:MD.map(({Icon:t,title:e,desc:n})=>E.jsx("li",{className:"group relative min-h-[180px] rounded-[8.7px] p-[1px] transition-all duration-300 hover:bg-gradient-to-b hover:from-[#EF0C27] hover:via-[#EF0C27]/50 hover:to-[#EF0C27]/10 hover:shadow-[0_0_35px_rgba(239,12,39,0.35),0_0_15px_rgba(239,12,39,0.2)]",children:E.jsxs("div",{className:"flex h-full flex-col rounded-[7.7px] bg-[#19191A] px-[12px] pb-[16px] pt-[16px]",children:[E.jsx("div",{className:"mb-[12.7px] flex h-[26px] w-[26px] items-center justify-center",children:E.jsx(t,{className:"text-[#EF0C27]",style:{width:26,height:26},"aria-hidden":"true"})}),E.jsx("h3",{className:"mb-[13px] font-sans text-[16px] font-bold leading-[1.21] text-[#FFFFFF]",children:e}),E.jsx("p",{className:"font-sans text-[13.9px] font-normal leading-[1.51] text-[#969696]",children:n})]})},e))})]})]})}const bD="/assets/findyourgame-background-DmtJS3NJ.svg",ED="/assets/findyourgame-phone-BHVb9Jvm.svg",TD="/assets/findyourgame-classic-BYJgyocQ.svg",AD="/assets/findyourgame-tournaments-Cqhmu-XT.svg",wD="/assets/findyourgame-freerolls-DDN5j7Wo.svg",RD="/assets/suprex-badge-CJEm_8V3.svg",CD=[{num:"01",title:"Classic Poker",desc:"Join competitive tables where every hand counts. Drop in anytime and test your skill in soft games online.",img:TD},{num:"02",title:"Tournaments",desc:"Play for bigger prizes in structured multi-table events, with free-to-play options and regular promotions.",img:AD},{num:"03",title:"Freerolls",desc:"Join our freerolls with massive prize pools. Jump in, play for free, and win real rewards.",img:wD}];function WS(){return E.jsxs("section",{"aria-labelledby":"find-game-heading",className:"relative mx-auto w-full max-w-[1440px] overflow-hidden",children:[E.jsx("img",{src:bD,alt:"","aria-hidden":"true",draggable:"false",className:"pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-center"}),E.jsxs("div",{className:"relative z-10 px-[clamp(16px,4.51vw,65px)] py-[clamp(56px,6.94vw,100px)]",children:[E.jsxs("div",{className:"mx-auto flex max-w-[904px] flex-col items-center text-center",children:[E.jsx("img",{src:RD,alt:"Suprex",draggable:"false",className:"h-auto w-[clamp(180px,24vw,340px)] select-none"}),E.jsx("h2",{id:"find-game-heading",className:"mt-[clamp(14px,1.25vw,18px)] font-sans text-[clamp(26px,3.33vw,48px)] font-bold leading-[1.15] text-white",children:"Find Your Game"}),E.jsx("p",{className:"mt-[clamp(12px,1.25vw,18px)] max-w-[904px] font-sans text-[clamp(14px,1.39vw,20px)] font-normal leading-[1.55] text-[#B5B5B5]",children:"Step into the ultimate online social poker experience where real players compete for real prizes. Explore a variety of game modes and stakes."})]}),E.jsxs("div",{className:"mx-auto mt-[clamp(36px,2.78vw,40px)] flex max-w-[1320px] flex-col items-center gap-[clamp(32px,4vw,56px)] lg:flex-row lg:items-start lg:gap-[12px]",children:[E.jsxs("div",{className:"relative flex w-[clamp(240px,33.47vw,482px)] flex-shrink-0 items-center justify-center",children:[E.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[110%] w-[130%] -translate-x-1/2 -translate-y-1/2",style:{background:"radial-gradient(ellipse 55% 55% at 50% 55%, rgba(239,12,39,0.6) 0%, rgba(239,12,39,0.3) 35%, transparent 70%)",filter:"blur(20px)"}}),E.jsx("img",{src:ED,alt:"Suprex poker app on mobile",draggable:"false",className:"relative z-10 w-full"})]}),E.jsx("div",{className:"flex w-full flex-col gap-[clamp(28px,5.56vw,80px)] lg:flex-1 lg:pt-[15px]",children:CD.map(({num:t,title:e,desc:n,img:i})=>E.jsxs("div",{className:"flex flex-row items-start gap-[16px] sm:gap-[clamp(20px,2.36vw,34px)]",children:[E.jsx("img",{src:i,alt:e,draggable:"false",className:"h-auto w-[clamp(120px,26vw,252px)] flex-shrink-0 rounded-[10px] sm:w-[clamp(160px,17.5vw,252px)]"}),E.jsxs("div",{className:"flex min-w-0 flex-1 flex-col",children:[E.jsx("span",{className:"inline-flex h-[30px] w-[52px] items-center justify-center rounded-[8px] bg-[#EF0C27] font-sans text-[15px] font-semibold leading-none text-white sm:h-[35px] sm:w-[62px] sm:rounded-[10px] sm:text-[18px]",children:t}),E.jsx("h3",{className:"mt-[10px] font-sans text-[clamp(17px,2.22vw,32px)] font-semibold uppercase leading-[1.22] text-white sm:mt-[clamp(12px,1.39vw,20px)]",children:e}),E.jsx("p",{className:"mt-[8px] max-w-[526px] font-sans text-[clamp(13px,1.39vw,20px)] font-light leading-[1.55] text-[#B5B5B5] sm:mt-[12px]",children:n})]})]},t))})]})]})]})}const DD="/assets/community-background-BIbp6dBJ.svg",ND="data:image/svg+xml,%3csvg%20width='943'%20height='438'%20viewBox='0%200%20943%20438'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='943'%20height='438'%20rx='42'%20fill='white'%20fill-opacity='0.1'/%3e%3c/svg%3e",UD=[{label:"X (Twitter)",href:"#",Icon:Q1},{label:"Discord",href:"#",Icon:eS},{label:"Instagram",href:"#",Icon:J1},{label:"Facebook",href:"#",Icon:$1}];function qS(){return E.jsxs("section",{"aria-labelledby":"join-community-heading",className:"relative mx-auto w-full max-w-[1440px] overflow-hidden",children:[E.jsx("img",{src:DD,alt:"","aria-hidden":"true",draggable:"false",className:"pointer-events-none absolute inset-0 h-full w-full select-none object-cover"}),E.jsx("div",{className:"relative z-10 flex items-center justify-center px-[clamp(16px,4.17vw,60px)] py-[clamp(48px,8.47vw,122px)]",children:E.jsxs("div",{className:"relative w-full max-w-[943px] overflow-hidden rounded-[clamp(20px,2.92vw,42px)] border border-white/15 backdrop-blur-xl",children:[E.jsx("img",{src:ND,alt:"","aria-hidden":"true",draggable:"false",className:"pointer-events-none absolute inset-0 h-full w-full select-none object-cover"}),E.jsxs("div",{className:"relative z-10 flex flex-col items-center gap-[clamp(24px,2.78vw,40px)] px-[clamp(20px,3.47vw,50px)] py-[clamp(32px,4.17vw,60px)] text-center",children:[E.jsxs("div",{className:"flex flex-col gap-4",children:[E.jsx("h2",{id:"join-community-heading",className:"font-sans text-[clamp(28px,3.33vw,48px)] font-semibold leading-[1.22] text-white",children:"Join Our Community"}),E.jsx("p",{className:"mx-auto max-w-[745px] font-sans text-[clamp(14px,1.39vw,20px)] font-normal leading-[1.4] text-[#E8E8E8]",children:"Be apart of the fastest growing online poker community. Join our Telegram Channel and follow us on socials to stay up to date with the latest news, rewards, and giveaways!"})]}),E.jsxs("div",{className:"flex flex-col items-center gap-5",children:[E.jsx("ul",{className:"flex flex-wrap items-center justify-center gap-5",children:UD.map(({label:t,href:e,Icon:n})=>E.jsx("li",{children:E.jsx("a",{href:e,"aria-label":t,className:"flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#141316] text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30",children:E.jsx(n,{size:20,"aria-hidden":"true"})})},t))}),E.jsx("button",{type:"button",className:"inline-flex items-center justify-center rounded-[12px] bg-[#7717FF] px-[clamp(24px,2.5vw,36px)] py-[clamp(14px,1.39vw,20px)] font-sans text-[clamp(14px,1.39vw,20px)] font-semibold leading-[1.21] text-white transition-colors duration-200 hover:bg-[#6611E0] focus:outline-none focus:ring-2 focus:ring-[#7717FF]/60",children:"Join Telegram Channel"})]})]})]})})]})}const LD="/assets/faq-player-CWNQakOH.png",OD=[{q:"What is DOMINION Poker?",a:"Lorem ipsum dolor sit amet consectetur. Fermentum pulvinar scelerisque nam velit aliquam vel felis ipsum ipsum. Sapien laoreet quisque arcu egestas."},{q:"Is DOMINION available in my state?",a:"Lorem ipsum dolor sit amet consectetur. Fermentum pulvinar scelerisque nam velit aliquam vel felis ipsum ipsum. Sapien laoreet quisque arcu egestas."},{q:"Is DOMINION Legal?",a:"Lorem ipsum dolor sit amet consectetur. Fermentum pulvinar scelerisque nam velit aliquam vel felis ipsum ipsum. Sapien laoreet quisque arcu egestas."},{q:"What are Sweepstakes?",a:"Lorem ipsum dolor sit amet consectetur. Fermentum pulvinar scelerisque nam velit aliquam vel felis ipsum ipsum. Sapien laoreet quisque arcu egestas."},{q:"How can I participate in DOMINION?",a:"Lorem ipsum dolor sit amet consectetur. Fermentum pulvinar scelerisque nam velit aliquam vel felis ipsum ipsum. Sapien laoreet quisque arcu egestas."}];function YS(){const[t,e]=k.useState(1);return E.jsx("section",{"aria-labelledby":"faq-heading",className:"relative mx-auto w-full max-w-[1440px] overflow-hidden bg-[#080809]",children:E.jsx("div",{className:"relative z-10 px-[clamp(16px,4.17vw,60px)] py-[clamp(56px,7vw,110px)]",children:E.jsxs("div",{className:"mx-auto flex max-w-[1320px] flex-col items-center gap-[clamp(32px,4vw,60px)] lg:flex-row lg:items-center lg:gap-[clamp(40px,5vw,80px)]",children:[E.jsxs("div",{className:"flex w-full flex-col items-center gap-[clamp(20px,2vw,32px)] text-center lg:w-[46%] lg:flex-shrink-0 lg:items-start lg:text-left",children:[E.jsxs("h2",{id:"faq-heading",className:"text-white",style:{fontFamily:"'Gilroy-SemiBold', 'Gilroy', 'Poppins', system-ui, sans-serif",fontWeight:400,fontSize:"clamp(28px, 3.33vw, 48px)",lineHeight:1,letterSpacing:0},children:["Frequently Asked",E.jsx("br",{className:"hidden sm:block"})," ","Questions"]}),E.jsxs("div",{className:"relative w-full max-w-[480px] lg:max-w-[640px]",children:[E.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute left-1/2 top-[35%] -z-0 h-[70%] w-[90%] -translate-x-1/2 -translate-y-1/2",style:{background:"radial-gradient(ellipse 55% 55% at 50% 50%, rgba(119,23,255,0.55) 0%, rgba(119,23,255,0.25) 40%, transparent 72%)",filter:"blur(28px)"}}),E.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute -bottom-[8%] left-1/2 -z-0 h-[40%] w-[130%] -translate-x-1/2",style:{background:"radial-gradient(ellipse 50% 50% at 50% 30%, rgba(26,175,95,0.5) 0%, rgba(26,175,95,0.22) 45%, transparent 75%)",filter:"blur(32px)"}}),E.jsx("img",{src:LD,alt:"Poker player holding cards at the table",draggable:"false",className:"relative z-10 mx-auto block w-full select-none lg:mx-0"})]})]}),E.jsxs("div",{className:"flex w-full flex-1 flex-col gap-[clamp(10px,1vw,14px)]",children:[OD.map(({q:n,a:i},a)=>{const r=t===a,s=`faq-answer-${a}`,o=r?WE:qE;return E.jsxs("div",{className:"overflow-hidden rounded-[20px] border border-white/[0.06] bg-[#0D0C11] transition-colors duration-200 hover:border-white/15",children:[E.jsx("h3",{children:E.jsxs("button",{type:"button","aria-expanded":r,"aria-controls":s,onClick:()=>{r||e(a)},className:"flex w-full items-center justify-between gap-4 px-[clamp(18px,2vw,28px)] py-[clamp(16px,1.8vw,24px)] text-left font-sans text-[clamp(15px,1.25vw,18px)] font-medium leading-[1.3] text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30",children:[E.jsx("span",{children:n}),E.jsx(o,{size:22,"aria-hidden":"true",className:"flex-shrink-0 text-white transition-transform duration-200"})]})}),r&&E.jsx("div",{id:s,className:"px-[clamp(18px,2vw,28px)] pb-[clamp(16px,1.8vw,24px)] pt-0",children:E.jsx("p",{className:"font-sans text-[clamp(13px,1vw,15px)] font-normal leading-[1.6] text-[#B5B5B5]",children:i})})]},n)}),E.jsxs("div",{className:"mt-[clamp(12px,1.5vw,20px)] flex items-center justify-center gap-[6px]",children:[E.jsx("span",{className:"h-[10px] w-[10px] rounded-full bg-[#EF0C27]"}),E.jsx("span",{className:"h-[10px] w-[10px] rounded-full bg-[#434245]"})]})]})]})})})}function PD(){return E.jsxs("div",{className:"flex min-h-screen flex-col bg-brand-bg",children:[E.jsx(YE,{}),E.jsxs("main",{className:"flex-1",children:[E.jsx(r3,{}),E.jsx(jS,{}),E.jsx(WS,{}),E.jsx(YS,{}),E.jsx(qS,{})]}),E.jsx(tS,{})]})}/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FD=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BD=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=t=>{const e=BD(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ud={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ID=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},zD=k.createContext({}),HD=()=>k.useContext(zD),GD=k.forwardRef(({color:t,size:e,strokeWidth:n,absoluteStrokeWidth:i,className:a="",children:r,iconNode:s,...o},l)=>{const{size:c=24,strokeWidth:d=2,absoluteStrokeWidth:h=!1,color:u="currentColor",className:p=""}=HD()??{},x=i??h?Number(n??d)*24/Number(e??c):n??d;return k.createElement("svg",{ref:l,...ud,width:e??c??ud.width,height:e??c??ud.height,stroke:t??u,strokeWidth:x,className:ZS("lucide",p,a),...!r&&!ID(o)&&{"aria-hidden":"true"},...o},[...s.map(([M,m])=>k.createElement(M,m)),...Array.isArray(r)?r:[r]])});/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=(t,e)=>{const n=k.forwardRef(({className:i,...a},r)=>k.createElement(GD,{ref:r,iconNode:e,className:ZS(`lucide-${FD(_x(t))}`,`lucide-${t}`,i),...a}));return n.displayName=_x(t),n};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VD=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],QS=KS("eye-off",VD);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kD=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],JS=KS("eye",kD),Sx=["#b57bff","#ff6fd8","#8a2be2","#c875ff"];function XD(){const t=k.useRef(null);return k.useEffect(()=>{const e=t.current;if(!e)return;const n=new XS({alpha:!0,antialias:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.setSize(e.clientWidth,e.clientHeight),n.setClearColor(0,0),e.appendChild(n.domElement);const i=new ES,a=new Zn(55,e.clientWidth/e.clientHeight,.1,100);a.position.set(0,0,6);const r=800,s=new Float32Array(r*3),o=new Float32Array(r*3),l=new Float32Array(r),c=new Float32Array(r*2),d=new Float32Array(r),h=new at;for(let D=0;D<r;D+=1){const I=(Math.random()-.5)*14,W=(Math.random()-.5)*10,q=(Math.random()-.5)*3;s[D*3]=I,s[D*3+1]=W,s[D*3+2]=q,d[D]=I,h.set(Sx[Math.floor(Math.random()*Sx.length)]),o[D*3]=h.r,o[D*3+1]=h.g,o[D*3+2]=h.b,l[D]=.05+Math.random()*.15,c[D*2]=Math.random()*Math.PI*2,c[D*2+1]=.15+Math.random()*.35}const u=new mi;u.setAttribute("position",new ni(s,3)),u.setAttribute("color",new ni(o,3));const p=document.createElement("canvas");p.width=64,p.height=64;const x=p.getContext("2d"),M=x.createRadialGradient(32,32,0,32,32,32);M.addColorStop(0,"rgba(255,255,255,1)"),M.addColorStop(.35,"rgba(220,170,255,0.75)"),M.addColorStop(1,"rgba(130,50,220,0)"),x.fillStyle=M,x.fillRect(0,0,64,64);const m=new mT(p),f=new DS({size:.08,sizeAttenuation:!0,map:m,vertexColors:!0,transparent:!0,depthWrite:!1,blending:ch,opacity:.9}),g=new pT(u,f);i.add(g);const v=window.matchMedia("(min-width: 1024px)").matches,y={x:0,y:0},C={x:0,y:0},A=D=>{if(!v)return;const I=e.getBoundingClientRect();C.x=((D.clientX-I.left)/I.width-.5)*.6,C.y=((D.clientY-I.top)/I.height-.5)*.4};v&&window.addEventListener("mousemove",A);const R=()=>{const D=e.clientWidth,I=e.clientHeight;n.setSize(D,I),a.aspect=D/I,a.updateProjectionMatrix()};window.addEventListener("resize",R);const S=new PS;let w=0;const N=()=>{const D=S.getElapsedTime(),I=S.getDelta(),W=u.attributes.position.array;for(let q=0;q<r;q+=1)W[q*3+1]+=l[q]*I,W[q*3+1]>5.5&&(W[q*3+1]=-5.5,d[q]=(Math.random()-.5)*14),W[q*3]=d[q]+Math.sin(D+c[q*2])*c[q*2+1];u.attributes.position.needsUpdate=!0,y.x+=(C.x-y.x)*.04,y.y+=(C.y-y.y)*.04,a.position.x=y.x,a.position.y=-y.y,a.lookAt(0,0,0),n.render(i,a),w=requestAnimationFrame(N)};return N(),()=>{cancelAnimationFrame(w),window.removeEventListener("resize",R),window.removeEventListener("mousemove",A),u.dispose(),f.dispose(),m.dispose(),n.dispose(),n.domElement.parentNode===e&&e.removeChild(n.domElement)}},[]),E.jsx("div",{ref:t,className:"pointer-events-none absolute inset-0","aria-hidden":"true"})}const jD="/assets/mxjfiles-cards-20318-C5XWvx90.gif";function $S(){return E.jsxs("section",{"aria-label":"Brand visual",className:"relative flex w-full flex-shrink-0 flex-col items-center overflow-hidden py-10 sm:py-12 md:py-14 lg:h-screen lg:w-1/2 lg:self-start lg:py-0",style:{background:"#080809"},children:[E.jsx(XD,{}),E.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0",style:{background:"radial-gradient(ellipse 42% 30% at 50% 0%, rgba(75, 30, 110, 0.5), transparent 65%)"}}),E.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute inset-y-0 right-0 z-[5] hidden w-1/2 lg:block",style:{background:"linear-gradient(270deg, #080809 0%, rgba(8, 8, 9, 0) 100%)"}}),E.jsxs("h1",{className:"relative z-10 whitespace-nowrap text-center text-5xl font-black uppercase leading-none tracking-tight sm:text-6xl md:text-7xl lg:absolute lg:left-1/2 lg:top-[22%] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:text-[100px] xl:text-[124px]",children:[E.jsx("span",{className:"text-white",children:"SUPR"}),E.jsx("span",{className:"text-[#ED1C24]",children:"EX"})]}),E.jsx("div",{className:"pointer-events-none relative z-10 mt-6 w-[70%] max-w-[360px] sm:mt-8 sm:w-[62%] sm:max-w-[420px] md:mt-10 md:w-[56%] md:max-w-[480px] lg:absolute lg:bottom-[-5%] lg:left-1/2 lg:mt-0 lg:w-[76%] lg:max-w-[680px] lg:-translate-x-1/2",children:E.jsx("img",{src:jD,alt:"","aria-hidden":"true",draggable:"false",className:"block h-auto w-full select-none"})})]})}function WD(){const[t,e]=k.useState(!1),[n,i]=k.useState(""),[a,r]=k.useState(""),s=o=>{o.preventDefault()};return E.jsx("div",{className:"min-h-screen w-full bg-[#080809]",children:E.jsxs("div",{className:"mx-auto flex min-h-screen w-full max-w-[1440px] flex-col lg:flex-row",children:[E.jsx($S,{}),E.jsx("section",{"aria-label":"Login form",className:"relative flex w-full flex-1 items-center justify-center bg-[#080809] px-6 py-10 sm:px-10 sm:py-14 lg:w-1/2 lg:px-16 lg:py-16",children:E.jsxs("form",{onSubmit:s,className:"flex w-full max-w-[480px] flex-col",noValidate:!0,children:[E.jsx("h2",{className:"mb-10 text-center text-4xl font-bold text-white sm:mb-12 sm:text-5xl lg:mb-14 lg:text-[56px]",children:"Welcome Back"}),E.jsxs("div",{className:"mb-5 flex flex-col",children:[E.jsxs("label",{htmlFor:"login-identifier",className:"mb-2 text-[15px] font-medium text-white",children:["Email or Username",E.jsx("span",{"aria-hidden":"true",children:"*"})]}),E.jsx("input",{id:"login-identifier",name:"identifier",type:"text",autoComplete:"username",placeholder:"Enter email or username",value:n,onChange:o=>i(o.target.value),className:"h-14 w-full rounded-xl border border-transparent bg-[#1f1f22] px-4 text-[15px] text-white placeholder:text-gray-500 focus:border-[#6C3BFF] focus:outline-none focus:ring-2 focus:ring-[#6C3BFF]/50 lg:h-16"})]}),E.jsxs("div",{className:"mb-3 flex flex-col",children:[E.jsxs("label",{htmlFor:"login-password",className:"mb-2 text-[15px] font-medium text-white",children:["Password",E.jsx("span",{"aria-hidden":"true",children:"*"})]}),E.jsxs("div",{className:"relative",children:[E.jsx("input",{id:"login-password",name:"password",type:t?"text":"password",autoComplete:"current-password",placeholder:"Enter password",value:a,onChange:o=>r(o.target.value),className:"h-14 w-full rounded-xl border border-transparent bg-[#1f1f22] px-4 pr-14 text-[15px] text-white placeholder:text-gray-500 focus:border-[#6C3BFF] focus:outline-none focus:ring-2 focus:ring-[#6C3BFF]/50 lg:h-16"}),E.jsx("button",{type:"button",onClick:()=>e(o=>!o),"aria-label":t?"Hide password":"Show password",className:"absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-md text-gray-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-[#6C3BFF]/60",children:t?E.jsx(QS,{size:20}):E.jsx(JS,{size:20})})]})]}),E.jsx("div",{className:"flex justify-end",children:E.jsx("a",{href:"#forgot",className:"text-[13px] text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-[#6C3BFF]/50",children:"Forget Password?"})}),E.jsxs("div",{className:"mt-8",children:[E.jsx("button",{type:"submit",className:"inline-flex h-14 w-full items-center justify-center rounded-xl bg-[#6C3BFF] text-base font-semibold text-white transition-colors duration-200 hover:bg-[#5A2FE0] focus:outline-none focus:ring-2 focus:ring-[#6C3BFF]/60 lg:h-16",children:"Log In"}),E.jsxs("p",{className:"mt-5 text-center text-sm text-white/70",children:["Don't have an account?"," ",E.jsx(Bu,{to:"/register",className:"font-bold text-[#6C3BFF] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6C3BFF]/50",children:"Register Now"})]})]})]})})]})})}const qD=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;function YD(t){const e={};return t.fullName.trim()||(e.fullName="Full name is required."),t.email.trim()?qD.test(t.email.trim())||(e.email="Enter a valid email address."):e.email="Email is required.",t.password?t.password.length<8&&(e.password="Password must be at least 8 characters."):e.password="Password is required.",t.confirmPassword?t.confirmPassword!==t.password&&(e.confirmPassword="Passwords do not match."):e.confirmPassword="Please confirm your password.",e}function ZD(){const[t,e]=k.useState(!1),[n,i]=k.useState(!1),[a,r]=k.useState({fullName:"",email:"",password:"",confirmPassword:""}),[s,o]=k.useState({}),l=d=>h=>{r(u=>({...u,[d]:h.target.value})),s[d]&&o(u=>({...u,[d]:""}))},c=d=>{d.preventDefault(),o(YD(a))};return E.jsx("div",{className:"min-h-screen w-full bg-[#080809]",children:E.jsxs("div",{className:"mx-auto flex min-h-screen w-full max-w-[1440px] flex-col lg:flex-row",children:[E.jsx($S,{}),E.jsx("section",{"aria-label":"Registration form",className:"relative flex w-full flex-1 items-center justify-center bg-[#080809] px-6 py-10 sm:px-10 sm:py-14 lg:w-1/2 lg:px-16 lg:py-16",children:E.jsxs("form",{onSubmit:c,className:"flex w-full max-w-[480px] flex-col",noValidate:!0,children:[E.jsx("h2",{className:"mb-8 text-center text-4xl font-bold text-white sm:mb-10 sm:text-5xl lg:mb-12 lg:text-[56px]",children:"Create Account"}),E.jsx(yx,{id:"reg-fullname",label:"Full Name",name:"fullName",placeholder:"Enter your full name",autoComplete:"name",value:a.fullName,onChange:l("fullName"),error:s.fullName}),E.jsx(yx,{id:"reg-email",label:"Email",name:"email",type:"email",placeholder:"Enter email",autoComplete:"email",value:a.email,onChange:l("email"),error:s.email}),E.jsx(Mx,{id:"reg-password",label:"Password",name:"password",placeholder:"Min. 8 characters",autoComplete:"new-password",value:a.password,onChange:l("password"),show:t,onToggle:()=>e(d=>!d),error:s.password}),E.jsx(Mx,{id:"reg-confirm",label:"Confirm Password",name:"confirmPassword",placeholder:"Re-enter password",autoComplete:"new-password",value:a.confirmPassword,onChange:l("confirmPassword"),show:n,onToggle:()=>i(d=>!d),error:s.confirmPassword}),E.jsxs("div",{className:"mt-8",children:[E.jsx("button",{type:"submit",className:"inline-flex h-14 w-full items-center justify-center rounded-xl bg-[#6C3BFF] text-base font-semibold text-white transition-colors duration-200 hover:bg-[#5A2FE0] focus:outline-none focus:ring-2 focus:ring-[#6C3BFF]/60 lg:h-16",children:"Register"}),E.jsxs("p",{className:"mt-5 text-center text-sm text-white/70",children:["Already have an account?"," ",E.jsx(Bu,{to:"/login",className:"font-bold text-[#6C3BFF] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6C3BFF]/50",children:"Log In"})]})]})]})})]})})}function yx({id:t,label:e,name:n,type:i="text",placeholder:a,autoComplete:r,value:s,onChange:o,error:l}){return E.jsxs("div",{className:"mb-5 flex flex-col",children:[E.jsxs("label",{htmlFor:t,className:"mb-2 text-[15px] font-medium text-white",children:[e,E.jsx("span",{"aria-hidden":"true",children:"*"})]}),E.jsx("input",{id:t,name:n,type:i,placeholder:a,autoComplete:r,value:s,onChange:o,"aria-invalid":!!l,className:`h-14 w-full rounded-xl border bg-[#1f1f22] px-4 text-[15px] text-white placeholder:text-gray-500 focus:border-[#6C3BFF] focus:outline-none focus:ring-2 focus:ring-[#6C3BFF]/50 lg:h-16 ${l?"border-red-500/70":"border-transparent"}`}),l&&E.jsx("p",{className:"mt-1.5 text-[13px] text-red-400",children:l})]})}function Mx({id:t,label:e,name:n,placeholder:i,autoComplete:a,value:r,onChange:s,show:o,onToggle:l,error:c}){return E.jsxs("div",{className:"mb-5 flex flex-col",children:[E.jsxs("label",{htmlFor:t,className:"mb-2 text-[15px] font-medium text-white",children:[e,E.jsx("span",{"aria-hidden":"true",children:"*"})]}),E.jsxs("div",{className:"relative",children:[E.jsx("input",{id:t,name:n,type:o?"text":"password",placeholder:i,autoComplete:a,value:r,onChange:s,"aria-invalid":!!c,className:`h-14 w-full rounded-xl border bg-[#1f1f22] px-4 pr-14 text-[15px] text-white placeholder:text-gray-500 focus:border-[#6C3BFF] focus:outline-none focus:ring-2 focus:ring-[#6C3BFF]/50 lg:h-16 ${c?"border-red-500/70":"border-transparent"}`}),E.jsx("button",{type:"button",onClick:l,"aria-label":o?"Hide password":"Show password",className:"absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-md text-gray-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-[#6C3BFF]/60",children:o?E.jsx(QS,{size:20}):E.jsx(JS,{size:20})})]}),c&&E.jsx("p",{className:"mt-1.5 text-[13px] text-red-400",children:c})]})}const bx="/assets/coin-1-DEnTHfoX.svg",Ex="/assets/coin-2-D_mVYPLG.svg",KD="data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M24.4336%2019.3506V13.0078C24.4336%209.0334%2021.9633%205.625%2018.477%204.23809C18.5215%204.01367%2018.5449%203.78223%2018.5449%203.54492C18.5449%201.59023%2016.9547%200%2015%200C13.0453%200%2011.4551%201.59023%2011.4551%203.54492C11.4551%203.78223%2011.4785%204.01367%2011.523%204.23809C8.03672%205.625%205.56641%209.0334%205.56641%2013.0078V19.3506L2.10938%2020.5225V25.6055H10.1596C10.3957%2028.0682%2012.4764%2030%2015%2030C17.5236%2030%2019.6043%2028.0682%2019.8404%2025.6055H27.8906V20.5225L24.4336%2019.3506ZM26.1328%2023.8477H3.86719V21.7822L7.32422%2020.6104V13.0078C7.32422%209.72949%209.39023%206.92461%2012.2889%205.82656C13.132%205.50723%2014.0461%205.33203%2015%205.33203C15.9539%205.33203%2016.868%205.50723%2017.7111%205.82656C20.6098%206.92461%2022.6758%209.72949%2022.6758%2013.0078V20.6104L26.1328%2021.7822V23.8477ZM13.2129%203.54492C13.2129%202.55938%2014.0145%201.75781%2015%201.75781C15.9855%201.75781%2016.7871%202.55938%2016.7871%203.54492C16.7871%203.61172%2016.7836%203.67793%2016.776%203.74238C16.2006%203.63164%2015.607%203.57422%2015%203.57422C14.393%203.57422%2013.7994%203.63164%2013.224%203.74238C13.2164%203.67793%2013.2129%203.61172%2013.2129%203.54492ZM15%2028.2422C13.4473%2028.2422%2012.1564%2027.0961%2011.9297%2025.6055H18.0703C17.8436%2027.0961%2016.5527%2028.2422%2015%2028.2422Z'%20fill='white'/%3e%3ccircle%20cx='22.5'%20cy='6.25'%20r='3.75'%20fill='%237717FF'/%3e%3c/svg%3e",QD="data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M24.0003%2047.2072C36.8163%2047.2072%2047.2057%2036.8178%2047.2057%2024.0018C47.2057%2011.1858%2036.8163%200.796387%2024.0003%200.796387C11.1843%200.796387%200.794922%2011.1858%200.794922%2024.0018C0.794922%2036.8178%2011.1843%2047.2072%2024.0003%2047.2072Z'%20fill='%23DFE5E8'/%3e%3cpath%20d='M38.5762%2040.7713V42.0553C34.5921%2045.2768%2029.5205%2047.2061%2023.9978%2047.2061C18.4756%2047.2061%2013.4034%2045.2768%209.41992%2042.0564V40.7713C9.41992%2033.8341%2015.0436%2028.21%2021.9807%2028.21H26.0154C32.9525%2028.2101%2038.5762%2033.8343%2038.5762%2040.7713Z'%20fill='%23AEB6BA'/%3e%3cpath%20d='M24%2024.8151C28.257%2024.8151%2031.7079%2021.3641%2031.7079%2017.1071C31.7079%2012.8501%2028.257%209.39917%2024%209.39917C19.743%209.39917%2016.292%2012.8501%2016.292%2017.1071C16.292%2021.3641%2019.743%2024.8151%2024%2024.8151Z'%20fill='%23AEB6BA'/%3e%3cpath%20d='M24%2048C20.7604%2048%2017.6172%2047.3654%2014.6579%2046.1137C11.7999%2044.9048%209.23327%2043.1745%207.02939%2040.9706C4.82557%2038.7667%203.0952%2036.2002%201.88633%2033.3422C0.634636%2030.3829%200%2027.2397%200%2024C0%2020.7604%200.634636%2017.6173%201.88633%2014.6579C3.0952%2011.7999%204.82557%209.23327%207.02939%207.02939C9.23327%204.82551%2011.7999%203.09515%2014.6579%201.88634C17.6172%200.634638%2020.7604%200%2024%200C27.2397%200%2030.3828%200.634638%2033.3421%201.88634C36.2002%203.09515%2038.7667%204.82551%2040.9706%207.02939C43.1744%209.23327%2044.9048%2011.7998%2046.1137%2014.6579C47.3654%2017.6172%2048%2020.7604%2048%2024C48%2027.2397%2047.3654%2030.3828%2046.1137%2033.3422C44.9048%2036.2002%2043.1744%2038.7668%2040.9706%2040.9706C38.7667%2043.1745%2036.2002%2044.9048%2033.3421%2046.1137C30.3828%2047.3653%2027.2397%2048%2024%2048ZM24%201.58917C20.9742%201.58917%2018.0393%202.1816%2015.2769%203.34999C12.6083%204.47869%2010.2115%206.09473%208.15317%208.15311C6.09468%2010.2115%204.47869%2012.6083%203.34999%2015.2769C2.1816%2018.0393%201.58917%2020.9741%201.58917%2024C1.58917%2027.0258%202.1816%2029.9606%203.34999%2032.723C4.47869%2035.3916%206.09468%2037.7883%208.15317%2039.8468C10.2116%2041.9052%2012.6083%2043.5212%2015.2769%2044.6499C18.0393%2045.8183%2020.9742%2046.4107%2024%2046.4107C27.0258%2046.4107%2029.9607%2045.8183%2032.7231%2044.6499C35.3917%2043.5212%2037.7885%2041.9052%2039.8468%2039.8468C41.9053%2037.7883%2043.5213%2035.3915%2044.65%2032.723C45.8184%2029.9606%2046.4108%2027.0258%2046.4108%2024C46.4108%2020.9742%2045.8184%2018.0393%2044.65%2015.2769C43.5213%2012.6083%2041.9053%2010.2115%2039.8468%208.15311C37.7884%206.09468%2035.3917%204.47869%2032.7231%203.34999C29.9607%202.1816%2027.0258%201.58917%2024%201.58917Z'%20fill='%23AEB6BA'/%3e%3c/svg%3e",Tx="data:image/svg+xml,%3csvg%20width='60'%20height='60'%20viewBox='0%200%2060%2060'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='60'%20height='60'%20rx='12.5'%20fill='%237717FF'/%3e%3cpath%20d='M39.8006%2025.674L34.2626%2018.0029L33.1482%2018.8075L27.9883%2015L20.1285%2025.6641H17.0859V45H39.5556C41.4103%2045%2042.9192%2043.4912%2042.9192%2041.6364V29.0276C42.9192%2027.2554%2041.5412%2025.8%2039.8006%2025.674ZM37.6254%2025.6641H26.6537L33.8663%2020.4571L37.6254%2025.6641ZM28.36%2017.4579L31.6515%2019.8879L23.6506%2025.6641H22.3124L28.36%2017.4579ZM41.1614%2037.9688H34.8333C33.3794%2037.9688%2032.1966%2036.7859%2032.1966%2035.332C32.1966%2033.8781%2033.3794%2032.6953%2034.8333%2032.6953H41.1614V37.9688ZM34.8333%2030.9375C32.4101%2030.9375%2030.4388%2032.9089%2030.4388%2035.332C30.4388%2037.7552%2032.4101%2039.7266%2034.8333%2039.7266H41.1614V41.6364C41.1614%2042.5218%2040.4411%2043.2422%2039.5556%2043.2422H18.8438V27.4219H39.5556C40.441%2027.4219%2041.1613%2028.1422%2041.1613%2029.0276V30.9375H34.8333Z'%20fill='white'/%3e%3cpath%20d='M34.7188%2034.4531H36.4766V36.2109H34.7188V34.4531Z'%20fill='white'/%3e%3c/svg%3e";function JD({username:t="Nayan",coinBalance:e=0,chipBalance:n="0.00",notificationsCount:i=1}){const[a,r]=k.useState(!1);return E.jsxs("header",{className:"sticky top-0 z-50 w-full border-b border-[#1A1A1E] bg-[#08070A]",children:[E.jsxs("div",{className:"mx-auto flex h-[clamp(64px,6.67vw,96px)] w-full max-w-[1440px] items-center justify-between gap-3 px-[clamp(16px,4vw,60px)]",children:[E.jsxs("a",{href:"/","aria-label":"Suprex home",className:"text-[clamp(22px,2vw,32px)] font-black uppercase leading-none tracking-tight",children:[E.jsx("span",{className:"text-white",children:"SUPR"}),E.jsx("span",{className:"text-[#EF0C27]",children:"EX"})]}),E.jsxs("div",{className:"hidden items-center gap-3 md:flex",children:[E.jsxs("div",{className:"flex items-center gap-2 rounded-xl border-[1.25px] border-[#232325] bg-[#19181D] px-3 py-2",children:[E.jsx("img",{src:bx,alt:"","aria-hidden":"true",className:"h-5 w-auto select-none"}),E.jsx("span",{className:"text-[14px] font-medium text-white","aria-label":`${e} coins`,children:e})]}),E.jsx("span",{"aria-hidden":"true",className:"h-5 w-px bg-white/15"}),E.jsxs("div",{className:"flex items-center gap-2 rounded-xl border-[1.25px] border-[#232325] bg-[#19181D] px-3 py-2",children:[E.jsx("img",{src:Ex,alt:"","aria-hidden":"true",className:"h-5 w-auto select-none"}),E.jsx("span",{className:"text-[14px] font-medium text-white","aria-label":`${n} chips`,children:n})]}),E.jsx("button",{type:"button","aria-label":"Open wallet",className:"ml-1 inline-flex items-center justify-center rounded-[12.5px] transition-transform duration-200 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-[#7717FF]/60",children:E.jsx("img",{src:Tx,alt:"","aria-hidden":"true",className:"h-[42px] w-[42px] select-none"})})]}),E.jsxs("div",{className:"flex items-center gap-[clamp(8px,1vw,16px)]",children:[E.jsx("button",{type:"button","aria-label":"Notifications",className:"inline-flex h-[46px] w-[46px] items-center justify-center rounded-full transition-colors duration-200 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/20",children:E.jsx("img",{src:KD,alt:"","aria-hidden":"true",className:"h-[22px] w-[22px] select-none"})}),E.jsx("span",{"aria-hidden":"true",className:"hidden h-8 w-px bg-white/15 sm:block"}),E.jsxs("div",{className:"flex items-center gap-2 sm:gap-3",children:[E.jsx("img",{src:QD,alt:"","aria-hidden":"true",className:"h-9 w-9 select-none sm:h-10 sm:w-10"}),E.jsx("span",{className:"hidden text-[14px] font-semibold text-white sm:inline",children:t})]}),E.jsx("button",{type:"button",onClick:()=>r(s=>!s),"aria-expanded":a,"aria-controls":"auth-balances-mobile","aria-label":"Toggle balances",className:"inline-flex items-center justify-center rounded-[12.5px] transition-transform duration-200 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-[#7717FF]/60 md:hidden",children:E.jsx("img",{src:Tx,alt:"","aria-hidden":"true",className:"h-10 w-10 select-none"})})]})]}),a&&E.jsx("div",{id:"auth-balances-mobile",className:"border-t border-[#1A1A1E] bg-[#08070A] px-4 py-3 md:hidden",children:E.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[E.jsxs("div",{className:"flex items-center gap-2 rounded-xl bg-[#19181D] px-3 py-2",children:[E.jsx("img",{src:bx,alt:"","aria-hidden":"true",className:"h-5 w-auto"}),E.jsx("span",{className:"text-[14px] font-medium text-white",children:e})]}),E.jsxs("div",{className:"flex items-center gap-2 rounded-xl bg-[#19181D] px-3 py-2",children:[E.jsx("img",{src:Ex,alt:"","aria-hidden":"true",className:"h-5 w-auto"}),E.jsx("span",{className:"text-[14px] font-medium text-white",children:n})]}),E.jsx("span",{className:"ml-auto text-[12px] text-white/60",children:t})]})})]})}const Ax="/assets/Frame%202087327220-DmTRA9bW.svg",wx="/assets/Frame%202087327221-4xVkEBhD.svg";function $D(){return E.jsxs("section",{"aria-labelledby":"dashboard-hero-heading",className:"relative mx-auto w-full max-w-[1440px] overflow-hidden bg-[#080809] md:aspect-[1440/926]",children:[E.jsx("img",{src:nS,alt:"","aria-hidden":"true",draggable:"false",className:"pointer-events-none absolute inset-0 h-full w-full select-none object-cover opacity-90"}),E.jsx("img",{src:iS,alt:"","aria-hidden":"true",draggable:"false",className:"pointer-events-none absolute inset-0 h-full w-full select-none object-cover"}),E.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute inset-x-0 top-0 z-[5] hidden h-[40%] md:block",style:{backgroundImage:["radial-gradient(ellipse 6% 70% at 18% 0%, rgba(255,255,255,0.22), transparent 65%)","radial-gradient(ellipse 5% 75% at 31% 0%, rgba(255,255,255,0.20), transparent 65%)","radial-gradient(ellipse 4% 70% at 43% 0%, rgba(255,255,255,0.18), transparent 65%)","radial-gradient(ellipse 2% 65% at 51% 0%, rgba(255,255,255,0.22), transparent 65%)","radial-gradient(ellipse 5% 75% at 59% 0%, rgba(255,255,255,0.20), transparent 65%)","radial-gradient(ellipse 5% 72% at 71% 0%, rgba(255,255,255,0.20), transparent 65%)","radial-gradient(ellipse 5% 70% at 83% 0%, rgba(255,255,255,0.18), transparent 65%)"].join(", "),filter:"blur(18px)"}}),E.jsxs("div",{className:"relative z-10 flex flex-col items-center px-5 pb-10 pt-10 md:hidden",children:[E.jsxs("div",{className:"flex w-full max-w-[720px] flex-col items-center text-center",children:[E.jsxs("h1",{id:"dashboard-hero-heading-mobile",className:"m-0 w-full font-sans font-bold uppercase leading-[1.05] tracking-normal text-white",children:[E.jsx("span",{className:"block text-[28px] sm:text-[40px]",children:"America’s #1"}),E.jsx("span",{className:"block text-[36px] text-[#EF0C27] sm:text-[54px]",children:"Online Poker"}),E.jsx("span",{className:"block text-[36px] sm:text-[54px]",children:"Community"})]}),E.jsx("p",{className:"mt-4 max-w-[460px] font-sans text-[13px] font-normal leading-[1.45] text-[#B5B5B5] sm:text-[15px]",children:"Play Legal Online Poker In The US. Real Players, Real Wins. Claim Your Seat At The Table."}),E.jsx("button",{type:"button",className:"mt-5 inline-flex items-center justify-center rounded-[10.15px] bg-[#7717FF] px-[32px] py-[16px] font-sans text-[15px] font-bold leading-[1.21] text-[#FAFAFA] transition-colors duration-200 hover:bg-[#6611E0] focus:outline-none focus:ring-2 focus:ring-[#7717FF]/60",children:"Play Now"})]}),E.jsxs("div",{className:"mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2",children:[E.jsx("img",{src:Ax,alt:"","aria-hidden":"true",draggable:"false",className:"block h-auto w-full select-none"}),E.jsx("img",{src:wx,alt:"","aria-hidden":"true",draggable:"false",className:"block h-auto w-full select-none"})]})]}),E.jsxs("div",{className:"relative z-10 hidden h-full w-full md:block",children:[E.jsxs("div",{className:"pointer-events-none absolute bottom-[4%] left-1/2 flex w-[92%] max-w-[1280px] -translate-x-1/2 items-end justify-center gap-[clamp(16px,2vw,32px)]",style:{maxHeight:"55%"},children:[E.jsx("img",{src:Ax,alt:"","aria-hidden":"true",draggable:"false",className:"block h-auto w-1/2 max-w-[620px] select-none"}),E.jsx("img",{src:wx,alt:"","aria-hidden":"true",draggable:"false",className:"block h-auto w-1/2 max-w-[620px] select-none"})]}),E.jsxs("div",{className:"absolute left-1/2 top-[6.5%] z-20 flex w-[92%] max-w-[720px] -translate-x-1/2 flex-col items-center text-center",children:[E.jsxs("h1",{id:"dashboard-hero-heading",className:"m-0 w-full font-sans font-bold uppercase leading-[1.05] tracking-normal text-white",children:[E.jsx("span",{className:"block text-[clamp(28px,3.75vw,54px)]",children:"America’s #1"}),E.jsx("span",{className:"block text-[clamp(40px,5.21vw,75px)] text-[#EF0C27]",children:"Online Poker"}),E.jsx("span",{className:"block text-[clamp(40px,5.21vw,75px)]",children:"Community"})]}),E.jsx("p",{className:"mt-[clamp(12px,1.39vw,20px)] max-w-[520px] font-sans text-[clamp(13px,1.11vw,16px)] font-normal leading-[1.45] text-[#B5B5B5]",children:"Play Legal Online Poker In The US. Real Players, Real Wins. Claim Your Seat At The Table."}),E.jsx("button",{type:"button",className:"mt-[clamp(16px,1.94vw,28px)] inline-flex items-center justify-center rounded-[10.15px] bg-[#7717FF] px-[clamp(28px,2.78vw,40px)] py-[clamp(14px,1.39vw,20px)] font-sans text-[clamp(14px,1.25vw,18px)] font-bold leading-[1.21] text-[#FAFAFA] transition-colors duration-200 hover:bg-[#6611E0] focus:outline-none focus:ring-2 focus:ring-[#7717FF]/60",children:"Play Now"})]})]})]})}function e4(){return E.jsxs("div",{className:"flex min-h-screen flex-col bg-[#08070A]",children:[E.jsx(JD,{username:"Nayan"}),E.jsxs("main",{className:"flex-1",children:[E.jsx($D,{}),E.jsx(jS,{}),E.jsx(WS,{}),E.jsx(YS,{}),E.jsx(qS,{})]}),E.jsx(tS,{})]})}function t4(){return E.jsx(wE,{children:E.jsxs(iE,{children:[E.jsx(xo,{path:"/",element:E.jsx(PD,{})}),E.jsx(xo,{path:"/login",element:E.jsx(WD,{})}),E.jsx(xo,{path:"/register",element:E.jsx(ZD,{})}),E.jsx(xo,{path:"/dashboard",element:E.jsx(e4,{})})]})})}rb.createRoot(document.getElementById("root")).render(E.jsx(k.StrictMode,{children:E.jsx(t4,{})}));
