/*! This file is auto-generated */
!function(){var e={1919:function(e){"use strict";var t=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===r}(e)}(e)};var r="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n(e,t){return!1!==t.clone&&t.isMergeableObject(e)?c((r=e,Array.isArray(r)?[]:{}),e,t):e;var r}function o(e,t,r){return e.concat(t).map((function(e){return n(e,r)}))}function s(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return Object.propertyIsEnumerable.call(e,t)})):[]}(e))}function i(e,t){try{return t in e}catch(e){return!1}}function u(e,t,r){var o={};return r.isMergeableObject(e)&&s(e).forEach((function(t){o[t]=n(e[t],r)})),s(t).forEach((function(s){(function(e,t){return i(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,s)||(i(e,s)&&r.isMergeableObject(t[s])?o[s]=function(e,t){if(!t.customMerge)return c;var r=t.customMerge(e);return"function"==typeof r?r:c}(s,r)(e[s],t[s],r):o[s]=n(t[s],r))})),o}function c(e,r,s){(s=s||{}).arrayMerge=s.arrayMerge||o,s.isMergeableObject=s.isMergeableObject||t,s.cloneUnlessOtherwiseSpecified=n;var i=Array.isArray(r);return i===Array.isArray(e)?i?s.arrayMerge(e,r,s):u(e,r,s):n(r,s)}c.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,r){return c(e,r,t)}),{})};var a=c;e.exports=a},2167:function(e){"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,t){var r=e._map,n=e._arrayTreeMap,o=e._objectTreeMap;if(r.has(t))return r.get(t);for(var s=Object.keys(t).sort(),i=Array.isArray(t)?n:o,u=0;u<s.length;u++){var c=s[u];if(void 0===(i=i.get(c)))return;var a=t[c];if(void 0===(i=i.get(a)))return}var l=i.get("_ekm_value");return l?(r.delete(l[0]),l[0]=t,i.set("_ekm_value",l),r.set(t,l),l):void 0}var o=function(){function e(t){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.clear(),t instanceof e){var r=[];t.forEach((function(e,t){r.push([t,e])})),t=r}if(null!=t)for(var n=0;n<t.length;n++)this.set(t[n][0],t[n][1])}var o,s,i;return o=e,s=[{key:"set",value:function(r,n){if(null===r||"object"!==t(r))return this._map.set(r,n),this;for(var o=Object.keys(r).sort(),s=[r,n],i=Array.isArray(r)?this._arrayTreeMap:this._objectTreeMap,u=0;u<o.length;u++){var c=o[u];i.has(c)||i.set(c,new e),i=i.get(c);var a=r[c];i.has(a)||i.set(a,new e),i=i.get(a)}var l=i.get("_ekm_value");return l&&this._map.delete(l[0]),i.set("_ekm_value",s),this._map.set(r,s),this}},{key:"get",value:function(e){if(null===e||"object"!==t(e))return this._map.get(e);var r=n(this,e);return r?r[1]:void 0}},{key:"has",value:function(e){return null===e||"object"!==t(e)?this._map.has(e):void 0!==n(this,e)}},{key:"delete",value:function(e){return!!this.has(e)&&(this.set(e,void 0),!0)}},{key:"forEach",value:function(e){var r=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this;this._map.forEach((function(o,s){null!==s&&"object"===t(s)&&(o=o[1]),e.call(n,o,s,r)}))}},{key:"clear",value:function(){this._map=new Map,this._arrayTreeMap=new Map,this._objectTreeMap=new Map}},{key:"size",get:function(){return this._map.size}}],s&&r(o.prototype,s),i&&r(o,i),e}();e.exports=o},9125:function(e){e.exports=function(e){var t,r=Object.keys(e);return t=function(){var e,t,n;for(e="return {",t=0;t<r.length;t++)e+=(n=JSON.stringify(r[t]))+":r["+n+"](s["+n+"],a),";return e+="}",new Function("r,s,a",e)}(),function(n,o){var s,i,u;if(void 0===n)return t(e,{},o);for(s=t(e,n,o),i=r.length;i--;)if(n[u=r[i]]!==s[u])return s;return n}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,r),s.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};!function(){"use strict";r.r(n),r.d(n,{AsyncModeProvider:function(){return We},RegistryConsumer:function(){return ke},RegistryProvider:function(){return De},combineReducers:function(){return nt},controls:function(){return M},createReduxStore:function(){return ye},createRegistry:function(){return ve},createRegistryControl:function(){return j},createRegistrySelector:function(){return T},dispatch:function(){return tt},plugins:function(){return o},register:function(){return lt},registerGenericStore:function(){return ut},registerStore:function(){return ct},resolveSelect:function(){return ot},select:function(){return rt},subscribe:function(){return it},suspendSelect:function(){return st},use:function(){return at},useDispatch:function(){return et},useRegistry:function(){return Ve},useSelect:function(){return Je},useSuspenseSelect:function(){return Be},withDispatch:function(){return Ye},withRegistry:function(){return Ze},withSelect:function(){return Qe}});var e={};r.r(e),r.d(e,{getCachedResolvers:function(){return Z},getIsResolving:function(){return z},getResolutionError:function(){return q},getResolutionState:function(){return X},hasFinishedResolution:function(){return B},hasResolutionFailed:function(){return Q},hasResolvingSelectors:function(){return ee},hasStartedResolution:function(){return J},isResolving:function(){return Y}});var t={};r.r(t),r.d(t,{failResolution:function(){return ne},failResolutions:function(){return ie},finishResolution:function(){return re},finishResolutions:function(){return se},invalidateResolution:function(){return ue},invalidateResolutionForStore:function(){return ce},invalidateResolutionForStoreSelector:function(){return ae},startResolution:function(){return te},startResolutions:function(){return oe}});var o={};r.r(o),r.d(o,{persistence:function(){return Ae}});var s=r(9125),i=r.n(s),u=window.wp.deprecated,c=r.n(u);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function l(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}function f(e,t,r){return(t=l(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var d="function"==typeof Symbol&&Symbol.observable||"@@observable",b=function(){return Math.random().toString(36).substring(7).split("").join(".")},v={INIT:"@@redux/INIT"+b(),REPLACE:"@@redux/REPLACE"+b(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+b()}};function S(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function h(e,t,r){var n;if("function"==typeof t&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error(y(0));if("function"==typeof t&&void 0===r&&(r=t,t=void 0),void 0!==r){if("function"!=typeof r)throw new Error(y(1));return r(h)(e,t)}if("function"!=typeof e)throw new Error(y(2));var o=e,s=t,i=[],u=i,c=!1;function a(){u===i&&(u=i.slice())}function l(){if(c)throw new Error(y(3));return s}function f(e){if("function"!=typeof e)throw new Error(y(4));if(c)throw new Error(y(5));var t=!0;return a(),u.push(e),function(){if(t){if(c)throw new Error(y(6));t=!1,a();var r=u.indexOf(e);u.splice(r,1),i=null}}}function p(e){if(!S(e))throw new Error(y(7));if(void 0===e.type)throw new Error(y(8));if(c)throw new Error(y(9));try{c=!0,s=o(s,e)}finally{c=!1}for(var t=i=u,r=0;r<t.length;r++){(0,t[r])()}return e}return p({type:v.INIT}),(n={dispatch:p,subscribe:f,getState:l,replaceReducer:function(e){if("function"!=typeof e)throw new Error(y(10));o=e,p({type:v.REPLACE})}})[d]=function(){var e,t=f;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new Error(y(11));function r(){e.next&&e.next(l())}return r(),{unsubscribe:t(r)}}})[d]=function(){return this},e},n}function O(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function m(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return function(){var r=e.apply(void 0,arguments),n=function(){throw new Error(y(15))},o={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},s=t.map((function(e){return e(o)}));return n=O.apply(void 0,s)(r.dispatch),g(g({},r),{},{dispatch:n})}}}var w=r(2167),R=r.n(w),E=window.wp.reduxRoutine,_=r.n(E),I=window.wp.compose;function T(e){const t=(...r)=>e(t.registry.select)(...r);return t.isRegistrySelector=!0,t}function j(e){return e.isRegistryControl=!0,e}const N="@@data/SELECT",A="@@data/RESOLVE_SELECT",P="@@data/DISPATCH";function L(e){return null!==e&&"object"==typeof e}const M={select:function(e,t,...r){return{type:N,storeKey:L(e)?e.name:e,selectorName:t,args:r}},resolveSelect:function(e,t,...r){return{type:A,storeKey:L(e)?e.name:e,selectorName:t,args:r}},dispatch:function(e,t,...r){return{type:P,storeKey:L(e)?e.name:e,actionName:t,args:r}}},F={[N]:j((e=>({storeKey:t,selectorName:r,args:n})=>e.select(t)[r](...n))),[A]:j((e=>({storeKey:t,selectorName:r,args:n})=>{const o=e.select(t)[r].hasResolver?"resolveSelect":"select";return e[o](t)[r](...n)})),[P]:j((e=>({storeKey:t,actionName:r,args:n})=>e.dispatch(t)[r](...n)))};var x=window.wp.privateApis;const{lock:C,unlock:U}=(0,x.__dangerousOptInToUnstableAPIsOnlyForCoreModules)("I know using unstable features means my plugin or theme will inevitably break on the next WordPress release.","@wordpress/data");var k=()=>e=>t=>{return!(r=t)||"object"!=typeof r&&"function"!=typeof r||"function"!=typeof r.then?e(t):t.then((t=>{if(t)return e(t)}));var r};var D={name:"core/data",instantiate(e){const t=t=>(r,...n)=>e.select(r)[t](...n),r=t=>(r,...n)=>e.dispatch(r)[t](...n);return{getSelectors(){return Object.fromEntries(["getIsResolving","hasStartedResolution","hasFinishedResolution","isResolving","getCachedResolvers"].map((e=>[e,t(e)])))},getActions(){return Object.fromEntries(["startResolution","finishResolution","invalidateResolution","invalidateResolutionForStore","invalidateResolutionForStoreSelector"].map((e=>[e,r(e)])))},subscribe(){return()=>()=>{}}}}};var V=(e,t)=>()=>r=>n=>{const o=e.select(D).getCachedResolvers(t);return Object.entries(o).forEach((([r,o])=>{const s=e.stores?.[t]?.resolvers?.[r];s&&s.shouldInvalidate&&o.forEach(((o,i)=>{"finished"!==o?.status&&"error"!==o?.status||!s.shouldInvalidate(n,...i)||e.dispatch(D).invalidateResolution(t,r,i)}))})),r(n)};function G(e){return()=>t=>r=>"function"==typeof r?r(e):t(r)}function H(e){if(null==e)return[];const t=e.length;let r=t;for(;r>0&&void 0===e[r-1];)r--;return r===t?e:e.slice(0,r)}const K=(W="selectorName",e=>(t={},r)=>{const n=r[W];if(void 0===n)return t;const o=e(t[n],r);return o===t[n]?t:{...t,[n]:o}})(((e=new(R()),t)=>{switch(t.type){case"START_RESOLUTION":{const r=new(R())(e);return r.set(H(t.args),{status:"resolving"}),r}case"FINISH_RESOLUTION":{const r=new(R())(e);return r.set(H(t.args),{status:"finished"}),r}case"FAIL_RESOLUTION":{const r=new(R())(e);return r.set(H(t.args),{status:"error",error:t.error}),r}case"START_RESOLUTIONS":{const r=new(R())(e);for(const e of t.args)r.set(H(e),{status:"resolving"});return r}case"FINISH_RESOLUTIONS":{const r=new(R())(e);for(const e of t.args)r.set(H(e),{status:"finished"});return r}case"FAIL_RESOLUTIONS":{const r=new(R())(e);return t.args.forEach(((e,n)=>{const o={status:"error",error:void 0},s=t.errors[n];s&&(o.error=s),r.set(H(e),o)})),r}case"INVALIDATE_RESOLUTION":{const r=new(R())(e);return r.delete(H(t.args)),r}}return e}));var W;var $=(e={},t)=>{switch(t.type){case"INVALIDATE_RESOLUTION_FOR_STORE":return{};case"INVALIDATE_RESOLUTION_FOR_STORE_SELECTOR":if(t.selectorName in e){const{[t.selectorName]:r,...n}=e;return n}return e;case"START_RESOLUTION":case"FINISH_RESOLUTION":case"FAIL_RESOLUTION":case"START_RESOLUTIONS":case"FINISH_RESOLUTIONS":case"FAIL_RESOLUTIONS":case"INVALIDATE_RESOLUTION":return K(e,t)}return e};function X(e,t,r){const n=e[t];if(n)return n.get(H(r))}function z(e,t,r){const n=X(e,t,r);return n&&"resolving"===n.status}function J(e,t,r){return void 0!==X(e,t,r)}function B(e,t,r){const n=X(e,t,r)?.status;return"finished"===n||"error"===n}function Q(e,t,r){return"error"===X(e,t,r)?.status}function q(e,t,r){const n=X(e,t,r);return"error"===n?.status?n.error:null}function Y(e,t,r){return"resolving"===X(e,t,r)?.status}function Z(e){return e}function ee(e){return Object.values(e).some((e=>Array.from(e._map.values()).some((e=>"resolving"===e[1]?.status))))}function te(e,t){return{type:"START_RESOLUTION",selectorName:e,args:t}}function re(e,t){return{type:"FINISH_RESOLUTION",selectorName:e,args:t}}function ne(e,t,r){return{type:"FAIL_RESOLUTION",selectorName:e,args:t,error:r}}function oe(e,t){return{type:"START_RESOLUTIONS",selectorName:e,args:t}}function se(e,t){return{type:"FINISH_RESOLUTIONS",selectorName:e,args:t}}function ie(e,t,r){return{type:"FAIL_RESOLUTIONS",selectorName:e,args:t,errors:r}}function ue(e,t){return{type:"INVALIDATE_RESOLUTION",selectorName:e,args:t}}function ce(){return{type:"INVALIDATE_RESOLUTION_FOR_STORE"}}function ae(e){return{type:"INVALIDATE_RESOLUTION_FOR_STORE_SELECTOR",selectorName:e}}const le=e=>{const t=[...e];for(let e=t.length-1;e>=0;e--)void 0===t[e]&&t.splice(e,1);return t},fe=(e,t)=>Object.fromEntries(Object.entries(null!=e?e:{}).map((([e,r])=>[e,t(r,e)]))),pe=(e,t)=>t instanceof Map?Object.fromEntries(t):t;function ge(e){const t=new WeakMap;return{get(r,n){let o=t.get(r);return o||(o=e(r,n),t.set(r,o)),o}}}function ye(r,n){const o={},s={},u={privateActions:o,registerPrivateActions:e=>{Object.assign(o,e)},privateSelectors:s,registerPrivateSelectors:e=>{Object.assign(s,e)}},c={name:r,instantiate:c=>{const a=n.reducer,l=function(e,t,r,n){const o={...t.controls,...F},s=fe(o,(e=>e.isRegistryControl?e(r):e)),u=[V(r,e),k,_()(s),G(n)],c=[m(...u)];"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&c.push(window.__REDUX_DEVTOOLS_EXTENSION__({name:e,instanceId:e,serialize:{replacer:pe}}));const{reducer:a,initialState:l}=t,f=i()({metadata:$,root:a});return h(f,{root:l},(0,I.compose)(c))}(r,n,c,{registry:c,get dispatch(){return b},get select(){return T},get resolveSelect(){return A()}});C(l,u);const f=function(){const e={};return{isRunning(t,r){return e[t]&&e[t].get(le(r))},clear(t,r){e[t]&&e[t].delete(le(r))},markAsRunning(t,r){e[t]||(e[t]=new(R())),e[t].set(le(r),!0)}}}();function p(e){return(...t)=>Promise.resolve(l.dispatch(e(...t)))}const g={...fe(t,p),...fe(n.actions,p)},y=ge(p),d=new Proxy((()=>{}),{get:(e,t)=>{const r=o[t];return r?y.get(r,t):g[t]}}),b=new Proxy(d,{apply:(e,t,[r])=>l.dispatch(r)});C(g,d);const v=n.resolvers?function(e){return fe(e,(e=>e.fulfill?e:{...e,fulfill:e}))}(n.resolvers):{};function S(e,t){e.isRegistrySelector&&(e.registry=c);const r=(...t)=>{const r=l.__unstableOriginalGetState();return e(r.root,...t)},n=v[t];return n?function(e,t,r,n,o){function s(e){const s=n.getState();if(o.isRunning(t,e)||"function"==typeof r.isFulfilled&&r.isFulfilled(s,...e))return;const{metadata:i}=n.__unstableOriginalGetState();J(i,t,e)||(o.markAsRunning(t,e),setTimeout((async()=>{o.clear(t,e),n.dispatch(te(t,e));try{const o=r.fulfill(...e);o&&await n.dispatch(o),n.dispatch(re(t,e))}catch(r){n.dispatch(ne(t,e,r))}}),0))}const i=(...t)=>(s(t),e(...t));return i.hasResolver=!0,i}(r,t,n,l,f):(r.hasResolver=!1,r)}const O={...fe(e,(function(e){const t=(...t)=>{const r=l.__unstableOriginalGetState();return e(r.metadata,...t)};return t.hasResolver=!1,t})),...fe(n.selectors,S)},w=ge(S);for(const[e,t]of Object.entries(s))w.get(t,e);const E=new Proxy((()=>{}),{get:(e,t)=>{const r=s[t];return r?w.get(r,t):O[t]}}),T=new Proxy(E,{apply:(e,t,[r])=>r(l.__unstableOriginalGetState())});C(O,E);const j=function(e,t){const{getIsResolving:r,hasStartedResolution:n,hasFinishedResolution:o,hasResolutionFailed:s,isResolving:i,getCachedResolvers:u,getResolutionState:c,getResolutionError:a,...l}=e;return fe(l,((r,n)=>r.hasResolver?(...o)=>new Promise(((s,i)=>{const u=()=>e.hasFinishedResolution(n,o),c=t=>{if(e.hasResolutionFailed(n,o)){const t=e.getResolutionError(n,o);i(t)}else s(t)},a=()=>r.apply(null,o),l=a();if(u())return c(l);const f=t.subscribe((()=>{u()&&(f(),c(a()))}))})):async(...e)=>r.apply(null,e)))}(O,l),N=function(e,t){return fe(e,((r,n)=>r.hasResolver?(...o)=>{const s=r.apply(null,o);if(e.hasFinishedResolution(n,o)){if(e.hasResolutionFailed(n,o))throw e.getResolutionError(n,o);return s}throw new Promise((r=>{const s=t.subscribe((()=>{e.hasFinishedResolution(n,o)&&(r(),s())}))}))}:r))}(O,l),A=()=>j;l.__unstableOriginalGetState=l.getState,l.getState=()=>l.__unstableOriginalGetState().root;const P=l&&(e=>{let t=l.__unstableOriginalGetState();return l.subscribe((()=>{const r=l.__unstableOriginalGetState(),n=r!==t;t=r,n&&e()}))});return{reducer:a,store:l,actions:g,selectors:O,resolvers:v,getSelectors:()=>O,getResolveSelectors:A,getSuspendSelectors:()=>N,getActions:()=>g,subscribe:P}}};return C(c,u),c}function de(){let e=!1,t=!1;const r=new Set,n=()=>Array.from(r).forEach((e=>e()));return{get isPaused(){return e},subscribe(e){return r.add(e),()=>r.delete(e)},pause(){e=!0},resume(){e=!1,t&&(t=!1,n())},emit(){e?t=!0:n()}}}function be(e){return"string"==typeof e?e:e.name}function ve(e={},t=null){const r={},n=de();let o=null;function s(){n.emit()}function i(e,n){if(r[e])return console.error('Store "'+e+'" is already registered.'),r[e];const o=n();if("function"!=typeof o.getSelectors)throw new TypeError("store.getSelectors must be a function");if("function"!=typeof o.getActions)throw new TypeError("store.getActions must be a function");if("function"!=typeof o.subscribe)throw new TypeError("store.subscribe must be a function");o.emitter=de();const i=o.subscribe;if(o.subscribe=e=>{const t=o.emitter.subscribe(e),r=i((()=>{o.emitter.isPaused?o.emitter.emit():e()}));return()=>{r?.(),t?.()}},r[e]=o,o.subscribe(s),t)try{U(o.store).registerPrivateActions(U(t).privateActionsOf(e)),U(o.store).registerPrivateSelectors(U(t).privateSelectorsOf(e))}catch(e){}return o}let u={batch:function(e){n.isPaused?e():(n.pause(),Object.values(r).forEach((e=>e.emitter.pause())),e(),n.resume(),Object.values(r).forEach((e=>e.emitter.resume())))},stores:r,namespaces:r,subscribe:(e,o)=>{if(!o)return n.subscribe(e);const s=be(o),i=r[s];return i?i.subscribe(e):t?t.subscribe(e,o):n.subscribe(e)},select:function(e){const n=be(e);o?.add(n);const s=r[n];return s?s.getSelectors():t?.select(n)},resolveSelect:function(e){const n=be(e);o?.add(n);const s=r[n];return s?s.getResolveSelectors():t&&t.resolveSelect(n)},suspendSelect:function(e){const n=be(e);o?.add(n);const s=r[n];return s?s.getSuspendSelectors():t&&t.suspendSelect(n)},dispatch:function(e){const n=be(e),o=r[n];return o?o.getActions():t&&t.dispatch(n)},use:function(e,t){if(!e)return;return u={...u,...e(u,t)},u},register:function(e){i(e.name,(()=>e.instantiate(u)))},registerGenericStore:function(e,t){c()("wp.data.registerGenericStore",{since:"5.9",alternative:"wp.data.register( storeDescriptor )"}),i(e,(()=>t))},registerStore:function(e,t){if(!t.reducer)throw new TypeError("Must specify store reducer");return i(e,(()=>ye(e,t).instantiate(u))).store},__unstableMarkListeningStores:function(e,t){o=new Set;try{return e.call(this)}finally{t.current=Array.from(o),o=null}}};u.register(D);for(const[t,r]of Object.entries(e))u.register(ye(t,r));t&&t.subscribe(s);const a=(l=u,Object.fromEntries(Object.entries(l).map((([e,t])=>"function"!=typeof t?[e,t]:[e,function(){return u[e].apply(null,arguments)}]))));var l;return C(a,{privateActionsOf:e=>{try{return U(r[e].store).privateActions}catch(e){return{}}},privateSelectorsOf:e=>{try{return U(r[e].store).privateSelectors}catch(e){return{}}}}),a}var Se=ve();
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function he(e){return"[object Object]"===Object.prototype.toString.call(e)}function Oe(e){var t,r;return!1!==he(e)&&(void 0===(t=e.constructor)||!1!==he(r=t.prototype)&&!1!==r.hasOwnProperty("isPrototypeOf"))}var me=r(1919),we=r.n(me);let Re;const Ee={getItem(e){return Re&&Re[e]?Re[e]:null},setItem(e,t){Re||Ee.clear(),Re[e]=String(t)},clear(){Re=Object.create(null)}};var _e=Ee;let Ie;try{Ie=window.localStorage,Ie.setItem("__wpDataTestLocalStorage",""),Ie.removeItem("__wpDataTestLocalStorage")}catch(e){Ie=_e}const Te=Ie,je="WP_DATA";function Ne(e,t){const r=function(e){const{storage:t=Te,storageKey:r=je}=e;let n;return{get:function(){if(void 0===n){const e=t.getItem(r);if(null===e)n={};else try{n=JSON.parse(e)}catch(e){n={}}}return n},set:function(e,o){n={...n,[e]:o},t.setItem(r,JSON.stringify(n))}}}(t);return{registerStore(t,n){if(!n.persist)return e.registerStore(t,n);const o=r.get()[t];if(void 0!==o){let e=n.reducer(n.initialState,{type:"@@WP/PERSISTENCE_RESTORE"});e=Oe(e)&&Oe(o)?we()(e,o,{isMergeableObject:Oe}):o,n={...n,initialState:e}}const s=e.registerStore(t,n);return s.subscribe(function(e,t,n){let o;if(Array.isArray(n)){const e=n.reduce(((e,t)=>Object.assign(e,{[t]:(e,r)=>r.nextState[t]})),{});s=nt(e),o=(e,t)=>t.nextState===e?e:s(e,t)}else o=(e,t)=>t.nextState;var s;let i=o(void 0,{nextState:e()});return()=>{const n=o(i,{nextState:e()});n!==i&&(r.set(t,n),i=n)}}(s.getState,t,n.persist)),s}}}Ne.__unstableMigrate=()=>{};var Ae=Ne,Pe=window.wp.element,Le=window.wp.priorityQueue,Me=window.wp.isShallowEqual,Fe=r.n(Me);const xe=(0,Pe.createContext)(Se),{Consumer:Ce,Provider:Ue}=xe,ke=Ce;var De=Ue;function Ve(){return(0,Pe.useContext)(xe)}const Ge=(0,Pe.createContext)(!1),{Consumer:He,Provider:Ke}=Ge;var We=Ke;const $e=(0,Le.createQueue)();function Xe(e,t){const r=t?e.suspendSelect:e.select,n={};let o,s,i,u,c=!1;return(t,a)=>{function l(){if(c&&t===o)return s;const a={current:null},l=e.__unstableMarkListeningStores((()=>t(r,e)),a);u?u.updateStores(a.current):u=(t=>{const r=[...t],o=new Set;return{subscribe:function(t){c=!1;const s=()=>{c=!1,t()},u=()=>{i?$e.add(n,s):s()},a=[];function l(t){a.push(e.subscribe(u,t))}for(const e of r)l(e);return o.add(l),()=>{o.delete(l);for(const e of a.values())e?.();$e.cancel(n)}},updateStores:function(e){for(const t of e)if(!r.includes(t)){r.push(t);for(const e of o)e(t)}}}})(a.current),Fe()(s,l)||(s=l),o=t,c=!0}return i&&!a&&(c=!1,$e.cancel(n)),l(),i=a,{subscribe:u.subscribe,getValue:function(){return l(),s}}}}function ze(e,t,r){const n=Ve(),o=(0,Pe.useContext)(Ge),s=(0,Pe.useMemo)((()=>Xe(n,e)),[n]),i=(0,Pe.useCallback)(t,r),{subscribe:u,getValue:c}=s(i,o),a=(0,Pe.useSyncExternalStore)(u,c,c);return(0,Pe.useDebugValue)(a),a}function Je(e,t){const r="function"!=typeof e,n=(0,Pe.useRef)(r);if(r!==n.current){const e=n.current?"static":"mapping";throw new Error(`Switching useSelect from ${e} to ${r?"static":"mapping"} is not allowed`)}return r?(o=e,Ve().select(o)):ze(!1,e,t);var o}function Be(e,t){return ze(!0,e,t)}var Qe=e=>(0,I.createHigherOrderComponent)((t=>(0,I.pure)((r=>{const n=Je(((t,n)=>e(t,r,n)));return(0,Pe.createElement)(t,{...r,...n})}))),"withSelect");var qe=(e,t)=>{const r=Ve(),n=(0,Pe.useRef)(e);return(0,I.useIsomorphicLayoutEffect)((()=>{n.current=e})),(0,Pe.useMemo)((()=>{const e=n.current(r.dispatch,r);return Object.fromEntries(Object.entries(e).map((([e,t])=>("function"!=typeof t&&console.warn(`Property ${e} returned from dispatchMap in useDispatchWithMap must be a function.`),[e,(...t)=>n.current(r.dispatch,r)[e](...t)]))))}),[r,...t])};var Ye=e=>(0,I.createHigherOrderComponent)((t=>r=>{const n=qe(((t,n)=>e(t,r,n)),[]);return(0,Pe.createElement)(t,{...r,...n})}),"withDispatch");var Ze=(0,I.createHigherOrderComponent)((e=>t=>(0,Pe.createElement)(ke,null,(r=>(0,Pe.createElement)(e,{...t,registry:r})))),"withRegistry");var et=e=>{const{dispatch:t}=Ve();return void 0===e?t:t(e)};function tt(e){return Se.dispatch(e)}function rt(e){return Se.select(e)}const nt=i(),ot=Se.resolveSelect,st=Se.suspendSelect,it=Se.subscribe,ut=Se.registerGenericStore,ct=Se.registerStore,at=Se.use,lt=Se.register}(),(window.wp=window.wp||{}).data=n}();