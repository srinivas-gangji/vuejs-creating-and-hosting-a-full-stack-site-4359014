(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.1
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ti(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const re={},pn=[],et=()=>{},Uu=()=>!1,Zr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ri=t=>t.startsWith("onUpdate:"),me=Object.assign,Ai=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Fu=Object.prototype.hasOwnProperty,Z=(t,e)=>Fu.call(t,e),V=Array.isArray,mn=t=>es(t)==="[object Map]",Qa=t=>es(t)==="[object Set]",z=t=>typeof t=="function",fe=t=>typeof t=="string",$t=t=>typeof t=="symbol",ae=t=>t!==null&&typeof t=="object",Za=t=>(ae(t)||z(t))&&z(t.then)&&z(t.catch),ec=Object.prototype.toString,es=t=>ec.call(t),Bu=t=>es(t).slice(8,-1),tc=t=>es(t)==="[object Object]",Ci=t=>fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Hn=Ti(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ts=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},$u=/-(\w)/g,ze=ts(t=>t.replace($u,(e,n)=>n?n.toUpperCase():"")),Hu=/\B([A-Z])/g,on=ts(t=>t.replace(Hu,"-$1").toLowerCase()),ns=ts(t=>t.charAt(0).toUpperCase()+t.slice(1)),Is=ts(t=>t?`on${ns(t)}`:""),Ft=(t,e)=>!Object.is(t,e),Ss=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},nc=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},ju=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let po;const rc=()=>po||(po=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Oi(t){if(V(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=fe(r)?Ku(r):Oi(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(fe(t)||ae(t))return t}const Vu=/;(?![^(]*\))/g,Wu=/:([^]+)/,zu=/\/\*[^]*?\*\//g;function Ku(t){const e={};return t.replace(zu,"").split(Vu).forEach(n=>{if(n){const r=n.split(Wu);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Pi(t){let e="";if(fe(t))e=t;else if(V(t))for(let n=0;n<t.length;n++){const r=Pi(t[n]);r&&(e+=r+" ")}else if(ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const qu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gu=Ti(qu);function sc(t){return!!t||t===""}const ic=t=>!!(t&&t.__v_isRef===!0),xt=t=>fe(t)?t:t==null?"":V(t)||ae(t)&&(t.toString===ec||!z(t.toString))?ic(t)?xt(t.value):JSON.stringify(t,oc,2):String(t),oc=(t,e)=>ic(e)?oc(t,e.value):mn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ts(r,i)+" =>"]=s,n),{})}:Qa(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ts(n))}:$t(e)?Ts(e):ae(e)&&!V(e)&&!tc(e)?String(e):e,Ts=(t,e="")=>{var n;return $t(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.1
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let De;class ac{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=De,!e&&De&&(this.index=(De.scopes||(De.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=De;try{return De=this,e()}finally{De=n}}}on(){De=this}off(){De=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Ju(t){return new ac(t)}function Yu(){return De}let ie;const Rs=new WeakSet;class cc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.nextEffect=void 0,this.cleanup=void 0,this.scheduler=void 0,De&&De.active&&De.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Rs.has(this)&&(Rs.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||(this.flags|=8,this.nextEffect=jn,jn=this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,mo(this),uc(this);const e=ie,n=Ve;ie=this,Ve=!0;try{return this.fn()}finally{fc(this),ie=e,Ve=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)xi(e);this.deps=this.depsTail=void 0,mo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Rs.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Js(this)&&this.run()}get dirty(){return Js(this)}}let lc=0,jn;function ki(){lc++}function Ni(){if(--lc>0)return;let t;for(;jn;){let e=jn;for(jn=void 0;e;){const n=e.nextEffect;if(e.nextEffect=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function uc(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function fc(t){let e,n=t.depsTail;for(let r=n;r;r=r.prevDep)r.version===-1?(r===n&&(n=r.prevDep),xi(r),Xu(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0;t.deps=e,t.depsTail=n}function Js(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&dc(e.dep.computed)===!1||e.dep.version!==e.version)return!0;return!!t._dirty}function dc(t){if(t.flags&2)return!1;if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Qn))return;t.globalVersion=Qn;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&!Js(t)){t.flags&=-3;return}const n=ie,r=Ve;ie=t,Ve=!0;try{uc(t);const s=t.fn();(e.version===0||Ft(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{ie=n,Ve=r,fc(t),t.flags&=-3}}function xi(t){const{dep:e,prevSub:n,nextSub:r}=t;if(n&&(n.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=n,t.nextSub=void 0),e.subs===t&&(e.subs=n),!e.subs&&e.computed){e.computed.flags&=-5;for(let s=e.computed.deps;s;s=s.nextDep)xi(s)}}function Xu(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ve=!0;const hc=[];function Ht(){hc.push(Ve),Ve=!1}function jt(){const t=hc.pop();Ve=t===void 0?!0:t}function mo(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ie;ie=void 0;try{e()}finally{ie=n}}}let Qn=0;class Di{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0}track(e){if(!ie||!Ve)return;let n=this.activeLink;if(n===void 0||n.sub!==ie)n=this.activeLink={dep:this,sub:ie,version:this.version,nextDep:void 0,prevDep:void 0,nextSub:void 0,prevSub:void 0,prevActiveLink:void 0},ie.deps?(n.prevDep=ie.depsTail,ie.depsTail.nextDep=n,ie.depsTail=n):ie.deps=ie.depsTail=n,ie.flags&4&&pc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ie.depsTail,n.nextDep=void 0,ie.depsTail.nextDep=n,ie.depsTail=n,ie.deps===n&&(ie.deps=r)}return n}trigger(e){this.version++,Qn++,this.notify(e)}notify(e){ki();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()}finally{Ni()}}}function pc(t){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)pc(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}const Ys=new WeakMap,Zt=Symbol(""),Xs=Symbol(""),Zn=Symbol("");function ve(t,e,n){if(Ve&&ie){let r=Ys.get(t);r||Ys.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=new Di),s.track()}}function dt(t,e,n,r,s,i){const o=Ys.get(t);if(!o){Qn++;return}let a=[];if(e==="clear")a=[...o.values()];else{const c=V(t),u=c&&Ci(n);if(c&&n==="length"){const l=Number(r);o.forEach((f,p)=>{(p==="length"||p===Zn||!$t(p)&&p>=l)&&a.push(f)})}else{const l=f=>f&&a.push(f);switch(n!==void 0&&l(o.get(n)),u&&l(o.get(Zn)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Zt)),mn(t)&&l(o.get(Xs)));break;case"delete":c||(l(o.get(Zt)),mn(t)&&l(o.get(Xs)));break;case"set":mn(t)&&l(o.get(Zt));break}}}ki();for(const c of a)c.trigger();Ni()}function un(t){const e=ee(t);return e===t?e:(ve(e,"iterate",Zn),We(t)?e:e.map(ge))}function rs(t){return ve(t=ee(t),"iterate",Zn),t}const Qu={__proto__:null,[Symbol.iterator](){return As(this,Symbol.iterator,ge)},concat(...t){return un(this).concat(...t.map(e=>V(e)?un(e):e))},entries(){return As(this,"entries",t=>(t[1]=ge(t[1]),t))},every(t,e){return it(this,"every",t,e,void 0,arguments)},filter(t,e){return it(this,"filter",t,e,n=>n.map(ge),arguments)},find(t,e){return it(this,"find",t,e,ge,arguments)},findIndex(t,e){return it(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return it(this,"findLast",t,e,ge,arguments)},findLastIndex(t,e){return it(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return it(this,"forEach",t,e,void 0,arguments)},includes(...t){return Cs(this,"includes",t)},indexOf(...t){return Cs(this,"indexOf",t)},join(t){return un(this).join(t)},lastIndexOf(...t){return Cs(this,"lastIndexOf",t)},map(t,e){return it(this,"map",t,e,void 0,arguments)},pop(){return Dn(this,"pop")},push(...t){return Dn(this,"push",t)},reduce(t,...e){return go(this,"reduce",t,e)},reduceRight(t,...e){return go(this,"reduceRight",t,e)},shift(){return Dn(this,"shift")},some(t,e){return it(this,"some",t,e,void 0,arguments)},splice(...t){return Dn(this,"splice",t)},toReversed(){return un(this).toReversed()},toSorted(t){return un(this).toSorted(t)},toSpliced(...t){return un(this).toSpliced(...t)},unshift(...t){return Dn(this,"unshift",t)},values(){return As(this,"values",ge)}};function As(t,e,n){const r=rs(t),s=r[e]();return r!==t&&!We(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Zu=Array.prototype;function it(t,e,n,r,s,i){const o=rs(t),a=o!==t&&!We(t),c=o[e];if(c!==Zu[e]){const f=c.apply(t,i);return a?ge(f):f}let u=n;o!==t&&(a?u=function(f,p){return n.call(this,ge(f),p,t)}:n.length>2&&(u=function(f,p){return n.call(this,f,p,t)}));const l=c.call(o,u,r);return a&&s?s(l):l}function go(t,e,n,r){const s=rs(t);let i=n;return s!==t&&(We(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,ge(a),c,t)}),s[e](i,...r)}function Cs(t,e,n){const r=ee(t);ve(r,"iterate",Zn);const s=r[e](...n);return(s===-1||s===!1)&&Fi(n[0])?(n[0]=ee(n[0]),r[e](...n)):s}function Dn(t,e,n=[]){Ht(),ki();const r=ee(t)[e].apply(t,n);return Ni(),jt(),r}const ef=Ti("__proto__,__v_isRef,__isVue"),mc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter($t));function tf(t){$t(t)||(t=String(t));const e=ee(this);return ve(e,"has",t),e.hasOwnProperty(t)}class gc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?mf:vc:i?bc:yc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=V(e);if(!s){let c;if(o&&(c=Qu[n]))return c;if(n==="hasOwnProperty")return tf}const a=Reflect.get(e,n,be(e)?e:r);return($t(n)?mc.has(n):ef(n))||(s||ve(e,"get",n),i)?a:be(a)?o&&Ci(n)?a:a.value:ae(a)?s?Ec(a):is(a):a}}class _c extends gc{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=tn(i);if(!We(r)&&!tn(r)&&(i=ee(i),r=ee(r)),!V(e)&&be(i)&&!be(r))return c?!1:(i.value=r,!0)}const o=V(e)&&Ci(n)?Number(n)<e.length:Z(e,n),a=Reflect.set(e,n,r,be(e)?e:s);return e===ee(s)&&(o?Ft(r,i)&&dt(e,"set",n,r):dt(e,"add",n,r)),a}deleteProperty(e,n){const r=Z(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&dt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!$t(n)||!mc.has(n))&&ve(e,"has",n),r}ownKeys(e){return ve(e,"iterate",V(e)?"length":Zt),Reflect.ownKeys(e)}}class nf extends gc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const rf=new _c,sf=new nf,of=new _c(!0);const Li=t=>t,ss=t=>Reflect.getPrototypeOf(t);function Ir(t,e,n=!1,r=!1){t=t.__v_raw;const s=ee(t),i=ee(e);n||(Ft(e,i)&&ve(s,"get",e),ve(s,"get",i));const{has:o}=ss(s),a=r?Li:n?Bi:ge;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Sr(t,e=!1){const n=this.__v_raw,r=ee(n),s=ee(t);return e||(Ft(t,s)&&ve(r,"has",t),ve(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Tr(t,e=!1){return t=t.__v_raw,!e&&ve(ee(t),"iterate",Zt),Reflect.get(t,"size",t)}function _o(t,e=!1){!e&&!We(t)&&!tn(t)&&(t=ee(t));const n=ee(this);return ss(n).has.call(n,t)||(n.add(t),dt(n,"add",t,t)),this}function yo(t,e,n=!1){!n&&!We(e)&&!tn(e)&&(e=ee(e));const r=ee(this),{has:s,get:i}=ss(r);let o=s.call(r,t);o||(t=ee(t),o=s.call(r,t));const a=i.call(r,t);return r.set(t,e),o?Ft(e,a)&&dt(r,"set",t,e):dt(r,"add",t,e),this}function bo(t){const e=ee(this),{has:n,get:r}=ss(e);let s=n.call(e,t);s||(t=ee(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&dt(e,"delete",t,void 0),i}function vo(){const t=ee(this),e=t.size!==0,n=t.clear();return e&&dt(t,"clear",void 0,void 0),n}function Rr(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ee(o),c=e?Li:t?Bi:ge;return!t&&ve(a,"iterate",Zt),o.forEach((u,l)=>r.call(s,c(u),c(l),i))}}function Ar(t,e,n){return function(...r){const s=this.__v_raw,i=ee(s),o=mn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),l=n?Li:e?Bi:ge;return!e&&ve(i,"iterate",c?Xs:Zt),{next(){const{value:f,done:p}=u.next();return p?{value:f,done:p}:{value:a?[l(f[0]),l(f[1])]:l(f),done:p}},[Symbol.iterator](){return this}}}}function vt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function af(){const t={get(i){return Ir(this,i)},get size(){return Tr(this)},has:Sr,add:_o,set:yo,delete:bo,clear:vo,forEach:Rr(!1,!1)},e={get(i){return Ir(this,i,!1,!0)},get size(){return Tr(this)},has:Sr,add(i){return _o.call(this,i,!0)},set(i,o){return yo.call(this,i,o,!0)},delete:bo,clear:vo,forEach:Rr(!1,!0)},n={get(i){return Ir(this,i,!0)},get size(){return Tr(this,!0)},has(i){return Sr.call(this,i,!0)},add:vt("add"),set:vt("set"),delete:vt("delete"),clear:vt("clear"),forEach:Rr(!0,!1)},r={get(i){return Ir(this,i,!0,!0)},get size(){return Tr(this,!0)},has(i){return Sr.call(this,i,!0)},add:vt("add"),set:vt("set"),delete:vt("delete"),clear:vt("clear"),forEach:Rr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ar(i,!1,!1),n[i]=Ar(i,!0,!1),e[i]=Ar(i,!1,!0),r[i]=Ar(i,!0,!0)}),[t,n,e,r]}const[cf,lf,uf,ff]=af();function Mi(t,e){const n=e?t?ff:uf:t?lf:cf;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Z(n,s)&&s in r?n:r,s,i)}const df={get:Mi(!1,!1)},hf={get:Mi(!1,!0)},pf={get:Mi(!0,!1)};const yc=new WeakMap,bc=new WeakMap,vc=new WeakMap,mf=new WeakMap;function gf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _f(t){return t.__v_skip||!Object.isExtensible(t)?0:gf(Bu(t))}function is(t){return tn(t)?t:Ui(t,!1,rf,df,yc)}function wc(t){return Ui(t,!1,of,hf,bc)}function Ec(t){return Ui(t,!0,sf,pf,vc)}function Ui(t,e,n,r,s){if(!ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=_f(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function gn(t){return tn(t)?gn(t.__v_raw):!!(t&&t.__v_isReactive)}function tn(t){return!!(t&&t.__v_isReadonly)}function We(t){return!!(t&&t.__v_isShallow)}function Fi(t){return t?!!t.__v_raw:!1}function ee(t){const e=t&&t.__v_raw;return e?ee(e):t}function Ic(t){return Object.isExtensible(t)&&nc(t,"__v_skip",!0),t}const ge=t=>ae(t)?is(t):t,Bi=t=>ae(t)?Ec(t):t;function be(t){return t?t.__v_isRef===!0:!1}function Bt(t){return Sc(t,!1)}function yf(t){return Sc(t,!0)}function Sc(t,e){return be(t)?t:new bf(t,e)}class bf{constructor(e,n){this.dep=new Di,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ee(e),this._value=n?e:ge(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||We(e)||tn(e);e=r?e:ee(e),Ft(e,n)&&(this._rawValue=e,this._value=r?e:ge(e),this.dep.trigger())}}function _e(t){return be(t)?t.value:t}const vf={get:(t,e,n)=>_e(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return be(s)&&!be(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Tc(t){return gn(t)?t:new Proxy(t,vf)}class wf{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Di(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Qn-1,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){ie!==this&&(this.flags|=16,this.dep.notify())}get value(){const e=this.dep.track();return dc(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ef(t,e,n=!1){let r,s;return z(t)?r=t:(r=t.get,s=t.set),new wf(r,s,n)}const Cr={},Fr=new WeakMap;let Gt;function If(t,e=!1,n=Gt){if(n){let r=Fr.get(n);r||Fr.set(n,r=[]),r.push(t)}}function Sf(t,e,n=re){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,u=k=>s?k:We(k)||s===!1||s===0?At(k,1):At(k);let l,f,p,m,y=!1,w=!1;if(be(t)?(f=()=>t.value,y=We(t)):gn(t)?(f=()=>u(t),y=!0):V(t)?(w=!0,y=t.some(k=>gn(k)||We(k)),f=()=>t.map(k=>{if(be(k))return k.value;if(gn(k))return u(k);if(z(k))return c?c(k,2):k()})):z(t)?e?f=c?()=>c(t,2):t:f=()=>{if(p){Ht();try{p()}finally{jt()}}const k=Gt;Gt=l;try{return c?c(t,3,[m]):t(m)}finally{Gt=k}}:f=et,e&&s){const k=f,H=s===!0?1/0:s;f=()=>At(k(),H)}const E=Yu(),x=()=>{l.stop(),E&&Ai(E.effects,l)};if(i)if(e){const k=e;e=(...H)=>{k(...H),x()}}else{const k=f;f=()=>{k(),x()}}let C=w?new Array(t.length).fill(Cr):Cr;const O=k=>{if(!(!(l.flags&1)||!l.dirty&&!k))if(e){const H=l.run();if(s||y||(w?H.some((G,K)=>Ft(G,C[K])):Ft(H,C))){p&&p();const G=Gt;Gt=l;try{const K=[H,C===Cr?void 0:w&&C[0]===Cr?[]:C,m];c?c(e,3,K):e(...K),C=H}finally{Gt=G}}}else l.run()};return a&&a(O),l=new cc(f),l.scheduler=o?()=>o(O,!1):O,m=k=>If(k,!1,l),p=l.onStop=()=>{const k=Fr.get(l);if(k){if(c)c(k,4);else for(const H of k)H();Fr.delete(l)}},e?r?O(!0):C=l.run():o?o(O.bind(null,!0),!0):l.run(),x.pause=l.pause.bind(l),x.resume=l.resume.bind(l),x.stop=x,x}function At(t,e=1/0,n){if(e<=0||!ae(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,be(t))At(t.value,e,n);else if(V(t))for(let r=0;r<t.length;r++)At(t[r],e,n);else if(Qa(t)||mn(t))t.forEach(r=>{At(r,e,n)});else if(tc(t)){for(const r in t)At(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&At(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.1
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function fr(t,e,n,r){try{return r?t(...r):t()}catch(s){os(s,e,n)}}function rt(t,e,n,r){if(z(t)){const s=fr(t,e,n,r);return s&&Za(s)&&s.catch(i=>{os(i,e,n)}),s}if(V(t)){const s=[];for(let i=0;i<t.length;i++)s.push(rt(t[i],e,n,r));return s}}function os(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||re;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const l=a.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,c,u)===!1)return}a=a.parent}if(i){Ht(),fr(i,null,10,[t,c,u]),jt();return}}Tf(t,n,s,r,o)}function Tf(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}let er=!1,Qs=!1;const Le=[];let Yt=0;const _n=[];let St=null,fn=0;const Rc=Promise.resolve();let $i=null;function Ac(t){const e=$i||Rc;return t?e.then(this?t.bind(this):t):e}function Rf(t){let e=er?Yt+1:0,n=Le.length;for(;e<n;){const r=e+n>>>1,s=Le[r],i=tr(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Hi(t){if(!(t.flags&1)){const e=tr(t),n=Le[Le.length-1];!n||!(t.flags&2)&&e>=tr(n)?Le.push(t):Le.splice(Rf(e),0,t),t.flags&4||(t.flags|=1),Cc()}}function Cc(){!er&&!Qs&&(Qs=!0,$i=Rc.then(Pc))}function Af(t){V(t)?_n.push(...t):St&&t.id===-1?St.splice(fn+1,0,t):t.flags&1||(_n.push(t),t.flags&4||(t.flags|=1)),Cc()}function wo(t,e,n=er?Yt+1:0){for(;n<Le.length;n++){const r=Le[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Le.splice(n,1),n--,r(),r.flags&=-2}}}function Oc(t){if(_n.length){const e=[...new Set(_n)].sort((n,r)=>tr(n)-tr(r));if(_n.length=0,St){St.push(...e);return}for(St=e,fn=0;fn<St.length;fn++){const n=St[fn];n.flags&8||n(),n.flags&=-2}St=null,fn=0}}const tr=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Pc(t){Qs=!1,er=!0;try{for(Yt=0;Yt<Le.length;Yt++){const e=Le[Yt];e&&!(e.flags&8)&&(fr(e,e.i,e.i?15:14),e.flags&=-2)}}finally{Yt=0,Le.length=0,Oc(),er=!1,$i=null,(Le.length||_n.length)&&Pc()}}let je=null,kc=null;function Br(t){const e=je;return je=t,kc=t&&t.type.__scopeId||null,e}function Nt(t,e=je,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Po(-1);const i=Br(e);let o;try{o=t(...s)}finally{Br(i),r._d&&Po(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Kt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Ht(),rt(c,n,8,[t.el,a,t,e]),jt())}}const Cf=Symbol("_vte"),Of=t=>t.__isTeleport;function Nc(t,e){t.shapeFlag&6&&t.component?Nc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function xc(t,e){return z(t)?me({name:t.name},e,{setup:t}):t}function Dc(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Zs(t,e,n,r,s=!1){if(V(t)){t.forEach((m,y)=>Zs(m,e&&(V(e)?e[y]:e),n,r,s));return}if(Vn(r)&&!s)return;const i=r.shapeFlag&4?zi(r.component):r.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===re?a.refs={}:a.refs,f=a.setupState,p=f===re?()=>!1:m=>Z(f,m)&&!(Object.getOwnPropertyDescriptor(l,m)||re).get;if(u!=null&&u!==c&&(fe(u)?(l[u]=null,p(u)&&(f[u]=null)):be(u)&&(u.value=null)),z(c))fr(c,a,12,[o,l]);else{const m=fe(c),y=be(c);if(m||y){const w=()=>{if(t.f){const E=m?p(c)?f[c]:l[c]:c.value;s?V(E)&&Ai(E,i):V(E)?E.includes(i)||E.push(i):m?(l[c]=[i],p(c)&&(f[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else m?(l[c]=o,p(c)&&(f[c]=o)):y&&(c.value=o,t.k&&(l[t.k]=o))};o?(w.id=-1,xe(w,n)):w()}}}const Vn=t=>!!t.type.__asyncLoader,Lc=t=>t.type.__isKeepAlive;function Pf(t,e){Mc(t,"a",e)}function kf(t,e){Mc(t,"da",e)}function Mc(t,e,n=ye){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(as(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Lc(s.parent.vnode)&&Nf(r,e,n,s),s=s.parent}}function Nf(t,e,n,r){const s=as(e,t,r,!0);Uc(()=>{Ai(r[e],s)},n)}function as(t,e,n=ye,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Ht();const a=hr(n),c=rt(e,n,t,o);return a(),jt(),c});return r?s.unshift(i):s.push(i),i}}const mt=t=>(e,n=ye)=>{(!us||t==="sp")&&as(t,(...r)=>e(...r),n)},xf=mt("bm"),dr=mt("m"),Df=mt("bu"),Lf=mt("u"),Mf=mt("bum"),Uc=mt("um"),Uf=mt("sp"),Ff=mt("rtg"),Bf=mt("rtc");function $f(t,e=ye){as("ec",t,e)}const Hf="components";function jf(t,e){return Wf(Hf,t,!0,e)||t}const Vf=Symbol.for("v-ndc");function Wf(t,e,n=!0,r=!1){const s=je||ye;if(s){const i=s.type;{const a=kd(i,!1);if(a&&(a===e||a===ze(e)||a===ns(ze(e))))return i}const o=Eo(s[t]||i[t],e)||Eo(s.appContext[t],e);return!o&&r?i:o}}function Eo(t,e){return t&&(t[e]||t[ze(e)]||t[ns(ze(e))])}function Fc(t,e,n,r){let s;const i=n,o=V(t);if(o||fe(t)){const a=o&&gn(t);a&&(t=rs(t)),s=new Array(t.length);for(let c=0,u=t.length;c<u;c++)s[c]=e(a?ge(t[c]):t[c],c,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(ae(t))if(t[Symbol.iterator])s=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const l=a[c];s[c]=e(t[l],l,c,i)}}else s=[];return s}const ei=t=>t?sl(t)?zi(t):ei(t.parent):null,Wn=me(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ei(t.parent),$root:t=>ei(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>ji(t),$forceUpdate:t=>t.f||(t.f=()=>{Hi(t.update)}),$nextTick:t=>t.n||(t.n=Ac.bind(t.proxy)),$watch:t=>fd.bind(t)}),Os=(t,e)=>t!==re&&!t.__isScriptSetup&&Z(t,e),zf={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Os(r,e))return o[e]=1,r[e];if(s!==re&&Z(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Z(u,e))return o[e]=3,i[e];if(n!==re&&Z(n,e))return o[e]=4,n[e];ti&&(o[e]=0)}}const l=Wn[e];let f,p;if(l)return e==="$attrs"&&ve(t.attrs,"get",""),l(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==re&&Z(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Z(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Os(s,e)?(s[e]=n,!0):r!==re&&Z(r,e)?(r[e]=n,!0):Z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==re&&Z(t,o)||Os(e,o)||(a=i[0])&&Z(a,o)||Z(r,o)||Z(Wn,o)||Z(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Io(t){return V(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ti=!0;function Kf(t){const e=ji(t),n=t.proxy,r=t.ctx;ti=!1,e.beforeCreate&&So(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:f,mounted:p,beforeUpdate:m,updated:y,activated:w,deactivated:E,beforeDestroy:x,beforeUnmount:C,destroyed:O,unmounted:k,render:H,renderTracked:G,renderTriggered:K,errorCaptured:pe,serverPrefetch:we,expose:Fe,inheritAttrs:yt,components:zt,directives:Je,filters:Nn}=e;if(u&&qf(u,r,null),o)for(const te in o){const J=o[te];z(J)&&(r[te]=J.bind(n))}if(s){const te=s.call(n,n);ae(te)&&(t.data=is(te))}if(ti=!0,i)for(const te in i){const J=i[te],st=z(J)?J.bind(n,n):z(J.get)?J.get.bind(n,n):et,bt=!z(J)&&z(J.set)?J.set.bind(n):et,Ye=$e({get:st,set:bt});Object.defineProperty(r,te,{enumerable:!0,configurable:!0,get:()=>Ye.value,set:Te=>Ye.value=Te})}if(a)for(const te in a)Bc(a[te],r,n,te);if(c){const te=z(c)?c.call(n):c;Reflect.ownKeys(te).forEach(J=>{zn(J,te[J])})}l&&So(l,t,"c");function de(te,J){V(J)?J.forEach(st=>te(st.bind(n))):J&&te(J.bind(n))}if(de(xf,f),de(dr,p),de(Df,m),de(Lf,y),de(Pf,w),de(kf,E),de($f,pe),de(Bf,G),de(Ff,K),de(Mf,C),de(Uc,k),de(Uf,we),V(Fe))if(Fe.length){const te=t.exposed||(t.exposed={});Fe.forEach(J=>{Object.defineProperty(te,J,{get:()=>n[J],set:st=>n[J]=st})})}else t.exposed||(t.exposed={});H&&t.render===et&&(t.render=H),yt!=null&&(t.inheritAttrs=yt),zt&&(t.components=zt),Je&&(t.directives=Je),we&&Dc(t)}function qf(t,e,n=et){V(t)&&(t=ni(t));for(const r in t){const s=t[r];let i;ae(s)?"default"in s?i=Ae(s.from||r,s.default,!0):i=Ae(s.from||r):i=Ae(s),be(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function So(t,e,n){rt(V(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Bc(t,e,n,r){let s=r.includes(".")?Zc(n,r):()=>n[r];if(fe(t)){const i=e[t];z(i)&&Kn(s,i)}else if(z(t))Kn(s,t.bind(n));else if(ae(t))if(V(t))t.forEach(i=>Bc(i,e,n,r));else{const i=z(t.handler)?t.handler.bind(n):e[t.handler];z(i)&&Kn(s,i,t)}}function ji(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>$r(c,u,o,!0)),$r(c,e,o)),ae(e)&&i.set(e,c),c}function $r(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&$r(t,i,n,!0),s&&s.forEach(o=>$r(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Gf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Gf={data:To,props:Ro,emits:Ro,methods:Fn,computed:Fn,beforeCreate:Ie,created:Ie,beforeMount:Ie,mounted:Ie,beforeUpdate:Ie,updated:Ie,beforeDestroy:Ie,beforeUnmount:Ie,destroyed:Ie,unmounted:Ie,activated:Ie,deactivated:Ie,errorCaptured:Ie,serverPrefetch:Ie,components:Fn,directives:Fn,watch:Yf,provide:To,inject:Jf};function To(t,e){return e?t?function(){return me(z(t)?t.call(this,this):t,z(e)?e.call(this,this):e)}:e:t}function Jf(t,e){return Fn(ni(t),ni(e))}function ni(t){if(V(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ie(t,e){return t?[...new Set([].concat(t,e))]:e}function Fn(t,e){return t?me(Object.create(null),t,e):e}function Ro(t,e){return t?V(t)&&V(e)?[...new Set([...t,...e])]:me(Object.create(null),Io(t),Io(e??{})):e}function Yf(t,e){if(!t)return e;if(!e)return t;const n=me(Object.create(null),t);for(const r in e)n[r]=Ie(t[r],e[r]);return n}function $c(){return{app:null,config:{isNativeTag:Uu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Xf=0;function Qf(t,e){return function(r,s=null){z(r)||(r=me({},r)),s!=null&&!ae(s)&&(s=null);const i=$c(),o=new WeakSet,a=[];let c=!1;const u=i.app={_uid:Xf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:xd,get config(){return i.config},set config(l){},use(l,...f){return o.has(l)||(l&&z(l.install)?(o.add(l),l.install(u,...f)):z(l)&&(o.add(l),l(u,...f))),u},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),u},component(l,f){return f?(i.components[l]=f,u):i.components[l]},directive(l,f){return f?(i.directives[l]=f,u):i.directives[l]},mount(l,f,p){if(!c){const m=u._ceVNode||ue(r,s);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),f&&e?e(m,l):t(m,l,p),c=!0,u._container=l,l.__vue_app__=u,zi(m.component)}},onUnmount(l){a.push(l)},unmount(){c&&(rt(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(l,f){return i.provides[l]=f,u},runWithContext(l){const f=yn;yn=u;try{return l()}finally{yn=f}}};return u}}let yn=null;function zn(t,e){if(ye){let n=ye.provides;const r=ye.parent&&ye.parent.provides;r===n&&(n=ye.provides=Object.create(r)),n[t]=e}}function Ae(t,e,n=!1){const r=ye||je;if(r||yn){const s=yn?yn._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&z(e)?e.call(r&&r.proxy):e}}const Hc={},jc=()=>Object.create(Hc),Vc=t=>Object.getPrototypeOf(t)===Hc;function Zf(t,e,n,r=!1){const s={},i=jc();t.propsDefaults=Object.create(null),Wc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:wc(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function ed(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ee(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let f=0;f<l.length;f++){let p=l[f];if(cs(t.emitsOptions,p))continue;const m=e[p];if(c)if(Z(i,p))m!==i[p]&&(i[p]=m,u=!0);else{const y=ze(p);s[y]=ri(c,a,y,m,t,!1)}else m!==i[p]&&(i[p]=m,u=!0)}}}else{Wc(t,e,s,i)&&(u=!0);let l;for(const f in a)(!e||!Z(e,f)&&((l=on(f))===f||!Z(e,l)))&&(c?n&&(n[f]!==void 0||n[l]!==void 0)&&(s[f]=ri(c,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!Z(e,f))&&(delete i[f],u=!0)}u&&dt(t.attrs,"set","")}function Wc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Hn(c))continue;const u=e[c];let l;s&&Z(s,l=ze(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:cs(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=ee(n),u=a||re;for(let l=0;l<i.length;l++){const f=i[l];n[f]=ri(s,c,f,u[f],t,!Z(u,f))}}return o}function ri(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Z(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&z(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const l=hr(s);r=u[n]=c.call(null,e),l()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===on(n))&&(r=!0))}return r}const td=new WeakMap;function zc(t,e,n=!1){const r=n?td:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!z(t)){const l=f=>{c=!0;const[p,m]=zc(f,e,!0);me(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return ae(t)&&r.set(t,pn),pn;if(V(i))for(let l=0;l<i.length;l++){const f=ze(i[l]);Ao(f)&&(o[f]=re)}else if(i)for(const l in i){const f=ze(l);if(Ao(f)){const p=i[l],m=o[f]=V(p)||z(p)?{type:p}:me({},p),y=m.type;let w=!1,E=!0;if(V(y))for(let x=0;x<y.length;++x){const C=y[x],O=z(C)&&C.name;if(O==="Boolean"){w=!0;break}else O==="String"&&(E=!1)}else w=z(y)&&y.name==="Boolean";m[0]=w,m[1]=E,(w||Z(m,"default"))&&a.push(f)}}const u=[o,a];return ae(t)&&r.set(t,u),u}function Ao(t){return t[0]!=="$"&&!Hn(t)}const Kc=t=>t[0]==="_"||t==="$stable",Vi=t=>V(t)?t.map(Ze):[Ze(t)],nd=(t,e,n)=>{if(e._n)return e;const r=Nt((...s)=>Vi(e(...s)),n);return r._c=!1,r},qc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Kc(s))continue;const i=t[s];if(z(i))e[s]=nd(s,i,r);else if(i!=null){const o=Vi(i);e[s]=()=>o}}},Gc=(t,e)=>{const n=Vi(e);t.slots.default=()=>n},Jc=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},rd=(t,e,n)=>{const r=t.slots=jc();if(t.vnode.shapeFlag&32){const s=e._;s?(Jc(r,e,n),n&&nc(r,"_",s,!0)):qc(e,r)}else e&&Gc(t,e)},sd=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=re;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:Jc(s,e,n):(i=!e.$stable,qc(e,s)),o=e}else e&&(Gc(t,e),o={default:1});if(i)for(const a in s)!Kc(a)&&o[a]==null&&delete s[a]},xe=yd;function id(t){return od(t)}function od(t,e){const n=rc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:f,nextSibling:p,setScopeId:m=et,insertStaticContent:y}=t,w=(d,h,g,I=null,b=null,S=null,P=void 0,A=null,R=!!h.dynamicChildren)=>{if(d===h)return;d&&!Ln(d,h)&&(I=v(d),Te(d,b,S,!0),d=null),h.patchFlag===-2&&(R=!1,h.dynamicChildren=null);const{type:T,ref:$,shapeFlag:L}=h;switch(T){case ls:E(d,h,g,I);break;case nn:x(d,h,g,I);break;case Ns:d==null&&C(h,g,I,P);break;case Re:zt(d,h,g,I,b,S,P,A,R);break;default:L&1?H(d,h,g,I,b,S,P,A,R):L&6?Je(d,h,g,I,b,S,P,A,R):(L&64||L&128)&&T.process(d,h,g,I,b,S,P,A,R,U)}$!=null&&b&&Zs($,d&&d.ref,S,h||d,!h)},E=(d,h,g,I)=>{if(d==null)r(h.el=a(h.children),g,I);else{const b=h.el=d.el;h.children!==d.children&&u(b,h.children)}},x=(d,h,g,I)=>{d==null?r(h.el=c(h.children||""),g,I):h.el=d.el},C=(d,h,g,I)=>{[d.el,d.anchor]=y(d.children,h,g,I,d.el,d.anchor)},O=({el:d,anchor:h},g,I)=>{let b;for(;d&&d!==h;)b=p(d),r(d,g,I),d=b;r(h,g,I)},k=({el:d,anchor:h})=>{let g;for(;d&&d!==h;)g=p(d),s(d),d=g;s(h)},H=(d,h,g,I,b,S,P,A,R)=>{h.type==="svg"?P="svg":h.type==="math"&&(P="mathml"),d==null?G(h,g,I,b,S,P,A,R):we(d,h,b,S,P,A,R)},G=(d,h,g,I,b,S,P,A)=>{let R,T;const{props:$,shapeFlag:L,transition:F,dirs:j}=d;if(R=d.el=o(d.type,S,$&&$.is,$),L&8?l(R,d.children):L&16&&pe(d.children,R,null,I,b,Ps(d,S),P,A),j&&Kt(d,null,I,"created"),K(R,d,d.scopeId,P,I),$){for(const se in $)se!=="value"&&!Hn(se)&&i(R,se,null,$[se],S,I);"value"in $&&i(R,"value",null,$.value,S),(T=$.onVnodeBeforeMount)&&Qe(T,I,d)}j&&Kt(d,null,I,"beforeMount");const q=ad(b,F);q&&F.beforeEnter(R),r(R,h,g),((T=$&&$.onVnodeMounted)||q||j)&&xe(()=>{T&&Qe(T,I,d),q&&F.enter(R),j&&Kt(d,null,I,"mounted")},b)},K=(d,h,g,I,b)=>{if(g&&m(d,g),I)for(let S=0;S<I.length;S++)m(d,I[S]);if(b){let S=b.subTree;if(h===S||tl(S.type)&&(S.ssContent===h||S.ssFallback===h)){const P=b.vnode;K(d,P,P.scopeId,P.slotScopeIds,b.parent)}}},pe=(d,h,g,I,b,S,P,A,R=0)=>{for(let T=R;T<d.length;T++){const $=d[T]=A?Tt(d[T]):Ze(d[T]);w(null,$,h,g,I,b,S,P,A)}},we=(d,h,g,I,b,S,P)=>{const A=h.el=d.el;let{patchFlag:R,dynamicChildren:T,dirs:$}=h;R|=d.patchFlag&16;const L=d.props||re,F=h.props||re;let j;if(g&&qt(g,!1),(j=F.onVnodeBeforeUpdate)&&Qe(j,g,h,d),$&&Kt(h,d,g,"beforeUpdate"),g&&qt(g,!0),(L.innerHTML&&F.innerHTML==null||L.textContent&&F.textContent==null)&&l(A,""),T?Fe(d.dynamicChildren,T,A,g,I,Ps(h,b),S):P||J(d,h,A,null,g,I,Ps(h,b),S,!1),R>0){if(R&16)yt(A,L,F,g,b);else if(R&2&&L.class!==F.class&&i(A,"class",null,F.class,b),R&4&&i(A,"style",L.style,F.style,b),R&8){const q=h.dynamicProps;for(let se=0;se<q.length;se++){const X=q[se],Pe=L[X],Ee=F[X];(Ee!==Pe||X==="value")&&i(A,X,Pe,Ee,b,g)}}R&1&&d.children!==h.children&&l(A,h.children)}else!P&&T==null&&yt(A,L,F,g,b);((j=F.onVnodeUpdated)||$)&&xe(()=>{j&&Qe(j,g,h,d),$&&Kt(h,d,g,"updated")},I)},Fe=(d,h,g,I,b,S,P)=>{for(let A=0;A<h.length;A++){const R=d[A],T=h[A],$=R.el&&(R.type===Re||!Ln(R,T)||R.shapeFlag&70)?f(R.el):g;w(R,T,$,null,I,b,S,P,!0)}},yt=(d,h,g,I,b)=>{if(h!==g){if(h!==re)for(const S in h)!Hn(S)&&!(S in g)&&i(d,S,h[S],null,b,I);for(const S in g){if(Hn(S))continue;const P=g[S],A=h[S];P!==A&&S!=="value"&&i(d,S,A,P,b,I)}"value"in g&&i(d,"value",h.value,g.value,b)}},zt=(d,h,g,I,b,S,P,A,R)=>{const T=h.el=d?d.el:a(""),$=h.anchor=d?d.anchor:a("");let{patchFlag:L,dynamicChildren:F,slotScopeIds:j}=h;j&&(A=A?A.concat(j):j),d==null?(r(T,g,I),r($,g,I),pe(h.children||[],g,$,b,S,P,A,R)):L>0&&L&64&&F&&d.dynamicChildren?(Fe(d.dynamicChildren,F,g,b,S,P,A),(h.key!=null||b&&h===b.subTree)&&Yc(d,h,!0)):J(d,h,g,$,b,S,P,A,R)},Je=(d,h,g,I,b,S,P,A,R)=>{h.slotScopeIds=A,d==null?h.shapeFlag&512?b.ctx.activate(h,g,I,P,R):Nn(h,g,I,b,S,P,R):an(d,h,R)},Nn=(d,h,g,I,b,S,P)=>{const A=d.component=Rd(d,I,b);if(Lc(d)&&(A.ctx.renderer=U),Ad(A,!1,P),A.asyncDep){if(b&&b.registerDep(A,de,P),!d.el){const R=A.subTree=ue(nn);x(null,R,h,g)}}else de(A,d,h,g,b,S,P)},an=(d,h,g)=>{const I=h.component=d.component;if(gd(d,h,g))if(I.asyncDep&&!I.asyncResolved){te(I,h,g);return}else I.next=h,I.update();else h.el=d.el,I.vnode=h},de=(d,h,g,I,b,S,P)=>{const A=()=>{if(d.isMounted){let{next:L,bu:F,u:j,parent:q,vnode:se}=d;{const ke=Xc(d);if(ke){L&&(L.el=se.el,te(d,L,P)),ke.asyncDep.then(()=>{d.isUnmounted||A()});return}}let X=L,Pe;qt(d,!1),L?(L.el=se.el,te(d,L,P)):L=se,F&&Ss(F),(Pe=L.props&&L.props.onVnodeBeforeUpdate)&&Qe(Pe,q,L,se),qt(d,!0);const Ee=ks(d),He=d.subTree;d.subTree=Ee,w(He,Ee,f(He.el),v(He),d,b,S),L.el=Ee.el,X===null&&_d(d,Ee.el),j&&xe(j,b),(Pe=L.props&&L.props.onVnodeUpdated)&&xe(()=>Qe(Pe,q,L,se),b)}else{let L;const{el:F,props:j}=h,{bm:q,m:se,parent:X,root:Pe,type:Ee}=d,He=Vn(h);if(qt(d,!1),q&&Ss(q),!He&&(L=j&&j.onVnodeBeforeMount)&&Qe(L,X,h),qt(d,!0),F&&ce){const ke=()=>{d.subTree=ks(d),ce(F,d.subTree,d,b,null)};He?Ee.__asyncHydrate(F,d,ke):ke()}else{Pe.ce&&Pe.ce._injectChildStyle(Ee);const ke=d.subTree=ks(d);w(null,ke,g,I,d,b,S),h.el=ke.el}if(se&&xe(se,b),!He&&(L=j&&j.onVnodeMounted)){const ke=h;xe(()=>Qe(L,X,ke),b)}(h.shapeFlag&256||X&&Vn(X.vnode)&&X.vnode.shapeFlag&256)&&d.a&&xe(d.a,b),d.isMounted=!0,h=g=I=null}};d.scope.on();const R=d.effect=new cc(A);d.scope.off();const T=d.update=R.run.bind(R),$=d.job=R.runIfDirty.bind(R);$.i=d,$.id=d.uid,R.scheduler=()=>Hi($),qt(d,!0),T()},te=(d,h,g)=>{h.component=d;const I=d.vnode.props;d.vnode=h,d.next=null,ed(d,h.props,I,g),sd(d,h.children,g),Ht(),wo(d),jt()},J=(d,h,g,I,b,S,P,A,R=!1)=>{const T=d&&d.children,$=d?d.shapeFlag:0,L=h.children,{patchFlag:F,shapeFlag:j}=h;if(F>0){if(F&128){bt(T,L,g,I,b,S,P,A,R);return}else if(F&256){st(T,L,g,I,b,S,P,A,R);return}}j&8?($&16&&Be(T,b,S),L!==T&&l(g,L)):$&16?j&16?bt(T,L,g,I,b,S,P,A,R):Be(T,b,S,!0):($&8&&l(g,""),j&16&&pe(L,g,I,b,S,P,A,R))},st=(d,h,g,I,b,S,P,A,R)=>{d=d||pn,h=h||pn;const T=d.length,$=h.length,L=Math.min(T,$);let F;for(F=0;F<L;F++){const j=h[F]=R?Tt(h[F]):Ze(h[F]);w(d[F],j,g,null,b,S,P,A,R)}T>$?Be(d,b,S,!0,!1,L):pe(h,g,I,b,S,P,A,R,L)},bt=(d,h,g,I,b,S,P,A,R)=>{let T=0;const $=h.length;let L=d.length-1,F=$-1;for(;T<=L&&T<=F;){const j=d[T],q=h[T]=R?Tt(h[T]):Ze(h[T]);if(Ln(j,q))w(j,q,g,null,b,S,P,A,R);else break;T++}for(;T<=L&&T<=F;){const j=d[L],q=h[F]=R?Tt(h[F]):Ze(h[F]);if(Ln(j,q))w(j,q,g,null,b,S,P,A,R);else break;L--,F--}if(T>L){if(T<=F){const j=F+1,q=j<$?h[j].el:I;for(;T<=F;)w(null,h[T]=R?Tt(h[T]):Ze(h[T]),g,q,b,S,P,A,R),T++}}else if(T>F)for(;T<=L;)Te(d[T],b,S,!0),T++;else{const j=T,q=T,se=new Map;for(T=q;T<=F;T++){const Ne=h[T]=R?Tt(h[T]):Ze(h[T]);Ne.key!=null&&se.set(Ne.key,T)}let X,Pe=0;const Ee=F-q+1;let He=!1,ke=0;const xn=new Array(Ee);for(T=0;T<Ee;T++)xn[T]=0;for(T=j;T<=L;T++){const Ne=d[T];if(Pe>=Ee){Te(Ne,b,S,!0);continue}let Xe;if(Ne.key!=null)Xe=se.get(Ne.key);else for(X=q;X<=F;X++)if(xn[X-q]===0&&Ln(Ne,h[X])){Xe=X;break}Xe===void 0?Te(Ne,b,S,!0):(xn[Xe-q]=T+1,Xe>=ke?ke=Xe:He=!0,w(Ne,h[Xe],g,null,b,S,P,A,R),Pe++)}const fo=He?cd(xn):pn;for(X=fo.length-1,T=Ee-1;T>=0;T--){const Ne=q+T,Xe=h[Ne],ho=Ne+1<$?h[Ne+1].el:I;xn[T]===0?w(null,Xe,g,ho,b,S,P,A,R):He&&(X<0||T!==fo[X]?Ye(Xe,g,ho,2):X--)}}},Ye=(d,h,g,I,b=null)=>{const{el:S,type:P,transition:A,children:R,shapeFlag:T}=d;if(T&6){Ye(d.component.subTree,h,g,I);return}if(T&128){d.suspense.move(h,g,I);return}if(T&64){P.move(d,h,g,U);return}if(P===Re){r(S,h,g);for(let L=0;L<R.length;L++)Ye(R[L],h,g,I);r(d.anchor,h,g);return}if(P===Ns){O(d,h,g);return}if(I!==2&&T&1&&A)if(I===0)A.beforeEnter(S),r(S,h,g),xe(()=>A.enter(S),b);else{const{leave:L,delayLeave:F,afterLeave:j}=A,q=()=>r(S,h,g),se=()=>{L(S,()=>{q(),j&&j()})};F?F(S,q,se):se()}else r(S,h,g)},Te=(d,h,g,I=!1,b=!1)=>{const{type:S,props:P,ref:A,children:R,dynamicChildren:T,shapeFlag:$,patchFlag:L,dirs:F,cacheIndex:j}=d;if(L===-2&&(b=!1),A!=null&&Zs(A,null,g,d,!0),j!=null&&(h.renderCache[j]=void 0),$&256){h.ctx.deactivate(d);return}const q=$&1&&F,se=!Vn(d);let X;if(se&&(X=P&&P.onVnodeBeforeUnmount)&&Qe(X,h,d),$&6)Er(d.component,g,I);else{if($&128){d.suspense.unmount(g,I);return}q&&Kt(d,null,h,"beforeUnmount"),$&64?d.type.remove(d,h,g,U,I):T&&!T.hasOnce&&(S!==Re||L>0&&L&64)?Be(T,h,g,!1,!0):(S===Re&&L&384||!b&&$&16)&&Be(R,h,g),I&&cn(d)}(se&&(X=P&&P.onVnodeUnmounted)||q)&&xe(()=>{X&&Qe(X,h,d),q&&Kt(d,null,h,"unmounted")},g)},cn=d=>{const{type:h,el:g,anchor:I,transition:b}=d;if(h===Re){ln(g,I);return}if(h===Ns){k(d);return}const S=()=>{s(g),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(d.shapeFlag&1&&b&&!b.persisted){const{leave:P,delayLeave:A}=b,R=()=>P(g,S);A?A(d.el,S,R):R()}else S()},ln=(d,h)=>{let g;for(;d!==h;)g=p(d),s(d),d=g;s(h)},Er=(d,h,g)=>{const{bum:I,scope:b,job:S,subTree:P,um:A,m:R,a:T}=d;Co(R),Co(T),I&&Ss(I),b.stop(),S&&(S.flags|=8,Te(P,d,h,g)),A&&xe(A,h),xe(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},Be=(d,h,g,I=!1,b=!1,S=0)=>{for(let P=S;P<d.length;P++)Te(d[P],h,g,I,b)},v=d=>{if(d.shapeFlag&6)return v(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const h=p(d.anchor||d.el),g=h&&h[Cf];return g?p(g):h};let M=!1;const N=(d,h,g)=>{d==null?h._vnode&&Te(h._vnode,null,null,!0):w(h._vnode||null,d,h,null,null,null,g),h._vnode=d,M||(M=!0,wo(),Oc(),M=!1)},U={p:w,um:Te,m:Ye,r:cn,mt:Nn,mc:pe,pc:J,pbc:Fe,n:v,o:t};let Y,ce;return{render:N,hydrate:Y,createApp:Qf(N,Y)}}function Ps({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function qt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function ad(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Yc(t,e,n=!1){const r=t.children,s=e.children;if(V(r)&&V(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Tt(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Yc(o,a)),a.type===ls&&(a.el=o.el)}}function cd(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Xc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Xc(e)}function Co(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const ld=Symbol.for("v-scx"),ud=()=>Ae(ld);function Kn(t,e,n){return Qc(t,e,n)}function Qc(t,e,n=re){const{immediate:r,deep:s,flush:i,once:o}=n,a=me({},n);let c;if(us)if(i==="sync"){const p=ud();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!e||r)a.once=!0;else return{stop:et,resume:et,pause:et};const u=ye;a.call=(p,m,y)=>rt(p,u,m,y);let l=!1;i==="post"?a.scheduler=p=>{xe(p,u&&u.suspense)}:i!=="sync"&&(l=!0,a.scheduler=(p,m)=>{m?p():Hi(p)}),a.augmentJob=p=>{e&&(p.flags|=4),l&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const f=Sf(t,e,a);return c&&c.push(f),f}function fd(t,e,n){const r=this.proxy,s=fe(t)?t.includes(".")?Zc(r,t):()=>r[t]:t.bind(r,r);let i;z(e)?i=e:(i=e.handler,n=e);const o=hr(this),a=Qc(s,i.bind(r),n);return o(),a}function Zc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const dd=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${ze(e)}Modifiers`]||t[`${on(e)}Modifiers`];function hd(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||re;let s=n;const i=e.startsWith("update:"),o=i&&dd(r,e.slice(7));o&&(o.trim&&(s=n.map(l=>fe(l)?l.trim():l)),o.number&&(s=n.map(ju)));let a,c=r[a=Is(e)]||r[a=Is(ze(e))];!c&&i&&(c=r[a=Is(on(e))]),c&&rt(c,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,rt(u,t,6,s)}}function el(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!z(t)){const c=u=>{const l=el(u,e,!0);l&&(a=!0,me(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ae(t)&&r.set(t,null),null):(V(i)?i.forEach(c=>o[c]=null):me(o,i),ae(t)&&r.set(t,o),o)}function cs(t,e){return!t||!Zr(e)?!1:(e=e.slice(2).replace(/Once$/,""),Z(t,e[0].toLowerCase()+e.slice(1))||Z(t,on(e))||Z(t,e))}function ks(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:u,renderCache:l,props:f,data:p,setupState:m,ctx:y,inheritAttrs:w}=t,E=Br(t);let x,C;try{if(n.shapeFlag&4){const k=s||r,H=k;x=Ze(u.call(H,k,l,f,m,p,y)),C=a}else{const k=e;x=Ze(k.length>1?k(f,{attrs:a,slots:o,emit:c}):k(f,null)),C=e.props?a:pd(a)}}catch(k){qn.length=0,os(k,t,1),x=ue(nn)}let O=x;if(C&&w!==!1){const k=Object.keys(C),{shapeFlag:H}=O;k.length&&H&7&&(i&&k.some(Ri)&&(C=md(C,i)),O=In(O,C,!1,!0))}return n.dirs&&(O=In(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),x=O,Br(E),x}const pd=t=>{let e;for(const n in t)(n==="class"||n==="style"||Zr(n))&&((e||(e={}))[n]=t[n]);return e},md=(t,e)=>{const n={};for(const r in t)(!Ri(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function gd(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Oo(r,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let f=0;f<l.length;f++){const p=l[f];if(o[p]!==r[p]&&!cs(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Oo(r,o,u):!0:!!o;return!1}function Oo(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!cs(n,i))return!0}return!1}function _d({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const tl=t=>t.__isSuspense;function yd(t,e){e&&e.pendingBranch?V(t)?e.effects.push(...t):e.effects.push(t):Af(t)}const Re=Symbol.for("v-fgt"),ls=Symbol.for("v-txt"),nn=Symbol.for("v-cmt"),Ns=Symbol.for("v-stc"),qn=[];let Me=null;function le(t=!1){qn.push(Me=t?null:[])}function bd(){qn.pop(),Me=qn[qn.length-1]||null}let nr=1;function Po(t){nr+=t,t<0&&Me&&(Me.hasOnce=!0)}function nl(t){return t.dynamicChildren=nr>0?Me||pn:null,bd(),nr>0&&Me&&Me.push(t),t}function he(t,e,n,r,s,i){return nl(D(t,e,n,r,s,i,!0))}function rr(t,e,n,r,s){return nl(ue(t,e,n,r,s,!0))}function si(t){return t?t.__v_isVNode===!0:!1}function Ln(t,e){return t.type===e.type&&t.key===e.key}const rl=({key:t})=>t??null,Pr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?fe(t)||be(t)||z(t)?{i:je,r:t,k:e,f:!!n}:t:null);function D(t,e=null,n=null,r=0,s=null,i=t===Re?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&rl(e),ref:e&&Pr(e),scopeId:kc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:je};return a?(Wi(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=fe(n)?8:16),nr>0&&!o&&Me&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Me.push(c),c}const ue=vd;function vd(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Vf)&&(t=nn),si(t)){const a=In(t,e,!0);return n&&Wi(a,n),nr>0&&!i&&Me&&(a.shapeFlag&6?Me[Me.indexOf(t)]=a:Me.push(a)),a.patchFlag=-2,a}if(Nd(t)&&(t=t.__vccOpts),e){e=wd(e);let{class:a,style:c}=e;a&&!fe(a)&&(e.class=Pi(a)),ae(c)&&(Fi(c)&&!V(c)&&(c=me({},c)),e.style=Oi(c))}const o=fe(t)?1:tl(t)?128:Of(t)?64:ae(t)?4:z(t)?2:0;return D(t,e,n,r,s,o,i,!0)}function wd(t){return t?Fi(t)||Vc(t)?me({},t):t:null}function In(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,u=e?Id(s||{},e):s,l={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&rl(u),ref:e&&e.ref?n&&i?V(i)?i.concat(Pr(e)):[i,Pr(e)]:Pr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Re?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&In(t.ssContent),ssFallback:t.ssFallback&&In(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Nc(l,c.clone(l)),l}function Dt(t=" ",e=0){return ue(ls,null,t,e)}function Ed(t="",e=!1){return e?(le(),rr(nn,null,t)):ue(nn,null,t)}function Ze(t){return t==null||typeof t=="boolean"?ue(nn):V(t)?ue(Re,null,t.slice()):typeof t=="object"?Tt(t):ue(ls,null,String(t))}function Tt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:In(t)}function Wi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(V(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Wi(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Vc(e)?e._ctx=je:s===3&&je&&(je.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else z(e)?(e={default:e,_ctx:je},n=32):(e=String(e),r&64?(n=16,e=[Dt(e)]):n=8);t.children=e,t.shapeFlag|=n}function Id(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Pi([e.class,r.class]));else if(s==="style")e.style=Oi([e.style,r.style]);else if(Zr(s)){const i=e[s],o=r[s];o&&i!==o&&!(V(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Qe(t,e,n,r=null){rt(t,e,7,[n,r])}const Sd=$c();let Td=0;function Rd(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Sd,i={uid:Td++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ac(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zc(r,s),emitsOptions:el(r,s),emit:null,emitted:null,propsDefaults:re,inheritAttrs:r.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=hd.bind(null,i),t.ce&&t.ce(i),i}let ye=null,Hr,ii;{const t=rc(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Hr=e("__VUE_INSTANCE_SETTERS__",n=>ye=n),ii=e("__VUE_SSR_SETTERS__",n=>us=n)}const hr=t=>{const e=ye;return Hr(t),t.scope.on(),()=>{t.scope.off(),Hr(e)}},ko=()=>{ye&&ye.scope.off(),Hr(null)};function sl(t){return t.vnode.shapeFlag&4}let us=!1;function Ad(t,e=!1,n=!1){e&&ii(e);const{props:r,children:s}=t.vnode,i=sl(t);Zf(t,r,i,e),rd(t,s,n);const o=i?Cd(t,e):void 0;return e&&ii(!1),o}function Cd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,zf);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Pd(t):null,i=hr(t);Ht();const o=fr(r,t,0,[t.props,s]);if(jt(),i(),Za(o)){if(Vn(t)||Dc(t),o.then(ko,ko),e)return o.then(a=>{No(t,a,e)}).catch(a=>{os(a,t,0)});t.asyncDep=o}else No(t,o,e)}else il(t,e)}function No(t,e,n){z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ae(e)&&(t.setupState=Tc(e)),il(t,n)}let xo;function il(t,e,n){const r=t.type;if(!t.render){if(!e&&xo&&!r.render){const s=r.template||ji(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=me(me({isCustomElement:i,delimiters:a},o),c);r.render=xo(s,u)}}t.render=r.render||et}{const s=hr(t);Ht();try{Kf(t)}finally{jt(),s()}}}const Od={get(t,e){return ve(t,"get",""),t[e]}};function Pd(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Od),slots:t.slots,emit:t.emit,expose:e}}function zi(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Tc(Ic(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Wn)return Wn[n](t)},has(e,n){return n in e||n in Wn}})):t.proxy}function kd(t,e=!0){return z(t)?t.displayName||t.name:t.name||e&&t.__name}function Nd(t){return z(t)&&"__vccOpts"in t}const $e=(t,e)=>Ef(t,e,us);function ol(t,e,n){const r=arguments.length;return r===2?ae(e)&&!V(e)?si(e)?ue(t,null,[e]):ue(t,e):ue(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&si(n)&&(n=[n]),ue(t,e,n))}const xd="3.5.1";/**
* @vue/runtime-dom v3.5.1
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let oi;const Do=typeof window<"u"&&window.trustedTypes;if(Do)try{oi=Do.createPolicy("vue",{createHTML:t=>t})}catch{}const al=oi?t=>oi.createHTML(t):t=>t,Dd="http://www.w3.org/2000/svg",Ld="http://www.w3.org/1998/Math/MathML",at=typeof document<"u"?document:null,Lo=at&&at.createElement("template"),Md={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?at.createElementNS(Dd,t):e==="mathml"?at.createElementNS(Ld,t):n?at.createElement(t,{is:n}):at.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>at.createTextNode(t),createComment:t=>at.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>at.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Lo.innerHTML=al(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Lo.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ud=Symbol("_vtc");function Fd(t,e,n){const r=t[Ud];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Mo=Symbol("_vod"),Bd=Symbol("_vsh"),$d=Symbol(""),Hd=/(^|;)\s*display\s*:/;function jd(t,e,n){const r=t.style,s=fe(n);let i=!1;if(n&&!s){if(e)if(fe(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&kr(r,a,"")}else for(const o in e)n[o]==null&&kr(r,o,"");for(const o in n)o==="display"&&(i=!0),kr(r,o,n[o])}else if(s){if(e!==n){const o=r[$d];o&&(n+=";"+o),r.cssText=n,i=Hd.test(n)}}else e&&t.removeAttribute("style");Mo in t&&(t[Mo]=i?r.display:"",t[Bd]&&(r.display="none"))}const Uo=/\s*!important$/;function kr(t,e,n){if(V(n))n.forEach(r=>kr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Vd(t,e);Uo.test(n)?t.setProperty(on(r),n.replace(Uo,""),"important"):t[r]=n}}const Fo=["Webkit","Moz","ms"],xs={};function Vd(t,e){const n=xs[e];if(n)return n;let r=ze(e);if(r!=="filter"&&r in t)return xs[e]=r;r=ns(r);for(let s=0;s<Fo.length;s++){const i=Fo[s]+r;if(i in t)return xs[e]=i}return e}const Bo="http://www.w3.org/1999/xlink";function $o(t,e,n,r,s,i=Gu(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Bo,e.slice(6,e.length)):t.setAttributeNS(Bo,e,n):n==null||i&&!sc(n)?t.removeAttribute(e):t.setAttribute(e,i?"":$t(n)?String(n):n)}function Wd(t,e,n,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?al(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(o!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let i=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=sc(n):n==null&&o==="string"?(n="",i=!0):o==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}function zd(t,e,n,r){t.addEventListener(e,n,r)}function Kd(t,e,n,r){t.removeEventListener(e,n,r)}const Ho=Symbol("_vei");function qd(t,e,n,r,s=null){const i=t[Ho]||(t[Ho]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Gd(e);if(r){const u=i[e]=Xd(r,s);zd(t,a,u,c)}else o&&(Kd(t,a,o,c),i[e]=void 0)}}const jo=/(?:Once|Passive|Capture)$/;function Gd(t){let e;if(jo.test(t)){e={};let r;for(;r=t.match(jo);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):on(t.slice(2)),e]}let Ds=0;const Jd=Promise.resolve(),Yd=()=>Ds||(Jd.then(()=>Ds=0),Ds=Date.now());function Xd(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;rt(Qd(r,n.value),e,5,[r])};return n.value=t,n.attached=Yd(),n}function Qd(t,e){if(V(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Vo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Zd=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Fd(t,r,o):e==="style"?jd(t,n,r):Zr(e)?Ri(e)||qd(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):eh(t,e,r,o))?(Wd(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&$o(t,e,r,o,i,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),$o(t,e,r,o))};function eh(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Vo(e)&&z(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Vo(e)&&fe(n)?!1:!!(e in t||t._isVueCE&&(/[A-Z]/.test(e)||!fe(n)))}const th=["ctrl","shift","alt","meta"],nh={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>th.some(n=>t[`${n}Key`]&&!e.includes(n))},jr=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=nh[e[o]];if(a&&a(s,e))return}return t(s,...i)})},rh=me({patchProp:Zd},Md);let Wo;function sh(){return Wo||(Wo=id(rh))}const ih=(...t)=>{const e=sh().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=ah(r);if(!s)return;const i=e._component;!z(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,oh(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function oh(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ah(t){return fe(t)?document.querySelector(t):t}var ch=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const lh=Symbol();var zo;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(zo||(zo={}));function uh(){const t=Ju(!0),e=t.run(()=>Bt({}));let n=[],r=[];const s=Ic({install(i){s._a=i,i.provide(lh,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!ch?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const dn=typeof document<"u";function fh(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Q=Object.assign;function Ls(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ke(s)?s.map(t):t(s)}return n}const Gn=()=>{},Ke=Array.isArray,cl=/#/g,dh=/&/g,hh=/\//g,ph=/=/g,mh=/\?/g,ll=/\+/g,gh=/%5B/g,_h=/%5D/g,ul=/%5E/g,yh=/%60/g,fl=/%7B/g,bh=/%7C/g,dl=/%7D/g,vh=/%20/g;function Ki(t){return encodeURI(""+t).replace(bh,"|").replace(gh,"[").replace(_h,"]")}function wh(t){return Ki(t).replace(fl,"{").replace(dl,"}").replace(ul,"^")}function ai(t){return Ki(t).replace(ll,"%2B").replace(vh,"+").replace(cl,"%23").replace(dh,"%26").replace(yh,"`").replace(fl,"{").replace(dl,"}").replace(ul,"^")}function Eh(t){return ai(t).replace(ph,"%3D")}function Ih(t){return Ki(t).replace(cl,"%23").replace(mh,"%3F")}function Sh(t){return t==null?"":Ih(t).replace(hh,"%2F")}function sr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Th=/\/$/,Rh=t=>t.replace(Th,"");function Ms(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Ph(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:sr(o)}}function Ah(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ko(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Ch(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Sn(e.matched[r],n.matched[s])&&hl(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Sn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function hl(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Oh(t[n],e[n]))return!1;return!0}function Oh(t,e){return Ke(t)?qo(t,e):Ke(e)?qo(e,t):t===e}function qo(t,e){return Ke(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Ph(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const wt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ir;(function(t){t.pop="pop",t.push="push"})(ir||(ir={}));var Jn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Jn||(Jn={}));function kh(t){if(!t)if(dn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Rh(t)}const Nh=/^[^#]+#/;function xh(t,e){return t.replace(Nh,"#")+e}function Dh(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const fs=()=>({left:window.scrollX,top:window.scrollY});function Lh(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Dh(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Go(t,e){return(history.state?history.state.position-e:-1)+t}const ci=new Map;function Mh(t,e){ci.set(t,e)}function Uh(t){const e=ci.get(t);return ci.delete(t),e}let Fh=()=>location.protocol+"//"+location.host;function pl(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Ko(c,"")}return Ko(n,t)+r+s}function Bh(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const m=pl(t,location),y=n.value,w=e.value;let E=0;if(p){if(n.value=m,e.value=p,o&&o===y){o=null;return}E=w?p.position-w.position:0}else r(m);s.forEach(x=>{x(n.value,y,{delta:E,type:ir.pop,direction:E?E>0?Jn.forward:Jn.back:Jn.unknown})})};function c(){o=n.value}function u(p){s.push(p);const m=()=>{const y=s.indexOf(p);y>-1&&s.splice(y,1)};return i.push(m),m}function l(){const{history:p}=window;p.state&&p.replaceState(Q({},p.state,{scroll:fs()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:c,listen:u,destroy:f}}function Jo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?fs():null}}function $h(t){const{history:e,location:n}=window,r={value:pl(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:Fh()+t+c;try{e[l?"replaceState":"pushState"](u,"",p),s.value=u}catch(m){console.error(m),n[l?"replace":"assign"](p)}}function o(c,u){const l=Q({},e.state,Jo(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,l,!0),r.value=c}function a(c,u){const l=Q({},s.value,e.state,{forward:c,scroll:fs()});i(l.current,l,!0);const f=Q({},Jo(r.value,c,null),{position:l.position+1},u);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Hh(t){t=kh(t);const e=$h(t),n=Bh(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Q({location:"",base:t,go:r,createHref:xh.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function jh(t){return typeof t=="string"||t&&typeof t=="object"}function ml(t){return typeof t=="string"||typeof t=="symbol"}const gl=Symbol("");var Yo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Yo||(Yo={}));function Tn(t,e){return Q(new Error,{type:t,[gl]:!0},e)}function ot(t,e){return t instanceof Error&&gl in t&&(e==null||!!(t.type&e))}const Xo="[^/]+?",Vh={sensitive:!1,strict:!1,start:!0,end:!0},Wh=/[.+*?^${}()[\]/\\]/g;function zh(t,e){const n=Q({},Vh,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const p=u[f];let m=40+(n.sensitive?.25:0);if(p.type===0)f||(s+="/"),s+=p.value.replace(Wh,"\\$&"),m+=40;else if(p.type===1){const{value:y,repeatable:w,optional:E,regexp:x}=p;i.push({name:y,repeatable:w,optional:E});const C=x||Xo;if(C!==Xo){m+=10;try{new RegExp(`(${C})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${y}" (${C}): `+k.message)}}let O=w?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;f||(O=E&&u.length<2?`(?:/${O})`:"/"+O),E&&(O+="?"),s+=O,m+=20,E&&(m+=-8),w&&(m+=-20),C===".*"&&(m+=-50)}l.push(m)}r.push(l)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const l=u.match(o),f={};if(!l)return null;for(let p=1;p<l.length;p++){const m=l[p]||"",y=i[p-1];f[y.name]=m&&y.repeatable?m.split("/"):m}return f}function c(u){let l="",f=!1;for(const p of t){(!f||!l.endsWith("/"))&&(l+="/"),f=!1;for(const m of p)if(m.type===0)l+=m.value;else if(m.type===1){const{value:y,repeatable:w,optional:E}=m,x=y in u?u[y]:"";if(Ke(x)&&!w)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const C=Ke(x)?x.join("/"):x;if(!C)if(E)p.length<2&&(l.endsWith("/")?l=l.slice(0,-1):f=!0);else throw new Error(`Missing required param "${y}"`);l+=C}}return l||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Kh(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function _l(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Kh(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Qo(r))return 1;if(Qo(s))return-1}return s.length-r.length}function Qo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const qh={type:0,value:""},Gh=/[a-zA-Z0-9_]/;function Jh(t){if(!t)return[[]];if(t==="/")return[[qh]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",l="";function f(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:Gh.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),s}function Yh(t,e,n){const r=zh(Jh(t.path),n),s=Q(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Xh(t,e){const n=[],r=new Map;e=ta({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,p,m){const y=!m,w=Qh(f);w.aliasOf=m&&m.record;const E=ta(e,f),x=[w];if("alias"in f){const k=typeof f.alias=="string"?[f.alias]:f.alias;for(const H of k)x.push(Q({},w,{components:m?m.record.components:w.components,path:H,aliasOf:m?m.record:w}))}let C,O;for(const k of x){const{path:H}=k;if(p&&H[0]!=="/"){const G=p.record.path,K=G[G.length-1]==="/"?"":"/";k.path=p.record.path+(H&&K+H)}if(C=Yh(k,p,E),m?m.alias.push(C):(O=O||C,O!==C&&O.alias.push(C),y&&f.name&&!ea(C)&&o(f.name)),yl(C)&&c(C),w.children){const G=w.children;for(let K=0;K<G.length;K++)i(G[K],C,m&&m.children[K])}m=m||C}return O?()=>{o(O)}:Gn}function o(f){if(ml(f)){const p=r.get(f);p&&(r.delete(f),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(f);p>-1&&(n.splice(p,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const p=tp(f,n);n.splice(p,0,f),f.record.name&&!ea(f)&&r.set(f.record.name,f)}function u(f,p){let m,y={},w,E;if("name"in f&&f.name){if(m=r.get(f.name),!m)throw Tn(1,{location:f});E=m.record.name,y=Q(Zo(p.params,m.keys.filter(O=>!O.optional).concat(m.parent?m.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),f.params&&Zo(f.params,m.keys.map(O=>O.name))),w=m.stringify(y)}else if(f.path!=null)w=f.path,m=n.find(O=>O.re.test(w)),m&&(y=m.parse(w),E=m.record.name);else{if(m=p.name?r.get(p.name):n.find(O=>O.re.test(p.path)),!m)throw Tn(1,{location:f,currentLocation:p});E=m.record.name,y=Q({},p.params,f.params),w=m.stringify(y)}const x=[];let C=m;for(;C;)x.unshift(C.record),C=C.parent;return{name:E,path:w,params:y,matched:x,meta:ep(x)}}t.forEach(f=>i(f));function l(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:l,getRoutes:a,getRecordMatcher:s}}function Zo(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Qh(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Zh(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Zh(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function ea(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ep(t){return t.reduce((e,n)=>Q(e,n.meta),{})}function ta(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function tp(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;_l(t,e[i])<0?r=i:n=i+1}const s=np(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function np(t){let e=t;for(;e=e.parent;)if(yl(e)&&_l(t,e)===0)return e}function yl({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function rp(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(ll," "),o=i.indexOf("="),a=sr(o<0?i:i.slice(0,o)),c=o<0?null:sr(i.slice(o+1));if(a in e){let u=e[a];Ke(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function na(t){let e="";for(let n in t){const r=t[n];if(n=Eh(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ke(r)?r.map(i=>i&&ai(i)):[r&&ai(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function sp(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ke(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const ip=Symbol(""),ra=Symbol(""),ds=Symbol(""),qi=Symbol(""),li=Symbol("");function Mn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Rt(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const u=p=>{p===!1?c(Tn(4,{from:n,to:e})):p instanceof Error?c(p):jh(p)?c(Tn(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},l=i(()=>t.call(r&&r.instances[s],e,n,u));let f=Promise.resolve(l);t.length<3&&(f=f.then(u)),f.catch(p=>c(p))})}function Us(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(op(c)){const l=(c.__vccOpts||c)[e];l&&i.push(Rt(l,n,r,o,a,s))}else{let u=c();i.push(()=>u.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const f=fh(l)?l.default:l;o.components[a]=f;const m=(f.__vccOpts||f)[e];return m&&Rt(m,n,r,o,a,s)()}))}}return i}function op(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function sa(t){const e=Ae(ds),n=Ae(qi),r=$e(()=>{const c=_e(t.to);return e.resolve(c)}),s=$e(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],f=n.matched;if(!l||!f.length)return-1;const p=f.findIndex(Sn.bind(null,l));if(p>-1)return p;const m=ia(c[u-2]);return u>1&&ia(l)===m&&f[f.length-1].path!==m?f.findIndex(Sn.bind(null,c[u-2])):p}),i=$e(()=>s.value>-1&&lp(n.params,r.value.params)),o=$e(()=>s.value>-1&&s.value===n.matched.length-1&&hl(n.params,r.value.params));function a(c={}){return cp(c)?e[_e(t.replace)?"replace":"push"](_e(t.to)).catch(Gn):Promise.resolve()}return{route:r,href:$e(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const ap=xc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:sa,setup(t,{slots:e}){const n=is(sa(t)),{options:r}=Ae(ds),s=$e(()=>({[oa(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[oa(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:ol("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Xt=ap;function cp(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function lp(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ke(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function ia(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const oa=(t,e,n)=>t??e??n,up=xc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ae(li),s=$e(()=>t.route||r.value),i=Ae(ra,0),o=$e(()=>{let u=_e(i);const{matched:l}=s.value;let f;for(;(f=l[u])&&!f.components;)u++;return u}),a=$e(()=>s.value.matched[o.value]);zn(ra,$e(()=>o.value+1)),zn(ip,a),zn(li,s);const c=Bt();return Kn(()=>[c.value,a.value,t.name],([u,l,f],[p,m,y])=>{l&&(l.instances[f]=u,m&&m!==l&&u&&u===p&&(l.leaveGuards.size||(l.leaveGuards=m.leaveGuards),l.updateGuards.size||(l.updateGuards=m.updateGuards))),u&&l&&(!m||!Sn(l,m)||!p)&&(l.enterCallbacks[f]||[]).forEach(w=>w(u))},{flush:"post"}),()=>{const u=s.value,l=t.name,f=a.value,p=f&&f.components[l];if(!p)return aa(n.default,{Component:p,route:u});const m=f.props[l],y=m?m===!0?u.params:typeof m=="function"?m(u):m:null,E=ol(p,Q({},y,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(f.instances[l]=null)},ref:c}));return aa(n.default,{Component:E,route:u})||E}}});function aa(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const bl=up;function fp(t){const e=Xh(t.routes,t),n=t.parseQuery||rp,r=t.stringifyQuery||na,s=t.history,i=Mn(),o=Mn(),a=Mn(),c=yf(wt);let u=wt;dn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Ls.bind(null,v=>""+v),f=Ls.bind(null,Sh),p=Ls.bind(null,sr);function m(v,M){let N,U;return ml(v)?(N=e.getRecordMatcher(v),U=M):U=v,e.addRoute(U,N)}function y(v){const M=e.getRecordMatcher(v);M&&e.removeRoute(M)}function w(){return e.getRoutes().map(v=>v.record)}function E(v){return!!e.getRecordMatcher(v)}function x(v,M){if(M=Q({},M||c.value),typeof v=="string"){const h=Ms(n,v,M.path),g=e.resolve({path:h.path},M),I=s.createHref(h.fullPath);return Q(h,g,{params:p(g.params),hash:sr(h.hash),redirectedFrom:void 0,href:I})}let N;if(v.path!=null)N=Q({},v,{path:Ms(n,v.path,M.path).path});else{const h=Q({},v.params);for(const g in h)h[g]==null&&delete h[g];N=Q({},v,{params:f(h)}),M.params=f(M.params)}const U=e.resolve(N,M),Y=v.hash||"";U.params=l(p(U.params));const ce=Ah(r,Q({},v,{hash:wh(Y),path:U.path})),d=s.createHref(ce);return Q({fullPath:ce,hash:Y,query:r===na?sp(v.query):v.query||{}},U,{redirectedFrom:void 0,href:d})}function C(v){return typeof v=="string"?Ms(n,v,c.value.path):Q({},v)}function O(v,M){if(u!==v)return Tn(8,{from:M,to:v})}function k(v){return K(v)}function H(v){return k(Q(C(v),{replace:!0}))}function G(v){const M=v.matched[v.matched.length-1];if(M&&M.redirect){const{redirect:N}=M;let U=typeof N=="function"?N(v):N;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=C(U):{path:U},U.params={}),Q({query:v.query,hash:v.hash,params:U.path!=null?{}:v.params},U)}}function K(v,M){const N=u=x(v),U=c.value,Y=v.state,ce=v.force,d=v.replace===!0,h=G(N);if(h)return K(Q(C(h),{state:typeof h=="object"?Q({},Y,h.state):Y,force:ce,replace:d}),M||N);const g=N;g.redirectedFrom=M;let I;return!ce&&Ch(r,U,N)&&(I=Tn(16,{to:g,from:U}),Ye(U,U,!0,!1)),(I?Promise.resolve(I):Fe(g,U)).catch(b=>ot(b)?ot(b,2)?b:bt(b):J(b,g,U)).then(b=>{if(b){if(ot(b,2))return K(Q({replace:d},C(b.to),{state:typeof b.to=="object"?Q({},Y,b.to.state):Y,force:ce}),M||g)}else b=zt(g,U,!0,d,Y);return yt(g,U,b),b})}function pe(v,M){const N=O(v,M);return N?Promise.reject(N):Promise.resolve()}function we(v){const M=ln.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(v):v()}function Fe(v,M){let N;const[U,Y,ce]=dp(v,M);N=Us(U.reverse(),"beforeRouteLeave",v,M);for(const h of U)h.leaveGuards.forEach(g=>{N.push(Rt(g,v,M))});const d=pe.bind(null,v,M);return N.push(d),Be(N).then(()=>{N=[];for(const h of i.list())N.push(Rt(h,v,M));return N.push(d),Be(N)}).then(()=>{N=Us(Y,"beforeRouteUpdate",v,M);for(const h of Y)h.updateGuards.forEach(g=>{N.push(Rt(g,v,M))});return N.push(d),Be(N)}).then(()=>{N=[];for(const h of ce)if(h.beforeEnter)if(Ke(h.beforeEnter))for(const g of h.beforeEnter)N.push(Rt(g,v,M));else N.push(Rt(h.beforeEnter,v,M));return N.push(d),Be(N)}).then(()=>(v.matched.forEach(h=>h.enterCallbacks={}),N=Us(ce,"beforeRouteEnter",v,M,we),N.push(d),Be(N))).then(()=>{N=[];for(const h of o.list())N.push(Rt(h,v,M));return N.push(d),Be(N)}).catch(h=>ot(h,8)?h:Promise.reject(h))}function yt(v,M,N){a.list().forEach(U=>we(()=>U(v,M,N)))}function zt(v,M,N,U,Y){const ce=O(v,M);if(ce)return ce;const d=M===wt,h=dn?history.state:{};N&&(U||d?s.replace(v.fullPath,Q({scroll:d&&h&&h.scroll},Y)):s.push(v.fullPath,Y)),c.value=v,Ye(v,M,N,d),bt()}let Je;function Nn(){Je||(Je=s.listen((v,M,N)=>{if(!Er.listening)return;const U=x(v),Y=G(U);if(Y){K(Q(Y,{replace:!0}),U).catch(Gn);return}u=U;const ce=c.value;dn&&Mh(Go(ce.fullPath,N.delta),fs()),Fe(U,ce).catch(d=>ot(d,12)?d:ot(d,2)?(K(d.to,U).then(h=>{ot(h,20)&&!N.delta&&N.type===ir.pop&&s.go(-1,!1)}).catch(Gn),Promise.reject()):(N.delta&&s.go(-N.delta,!1),J(d,U,ce))).then(d=>{d=d||zt(U,ce,!1),d&&(N.delta&&!ot(d,8)?s.go(-N.delta,!1):N.type===ir.pop&&ot(d,20)&&s.go(-1,!1)),yt(U,ce,d)}).catch(Gn)}))}let an=Mn(),de=Mn(),te;function J(v,M,N){bt(v);const U=de.list();return U.length?U.forEach(Y=>Y(v,M,N)):console.error(v),Promise.reject(v)}function st(){return te&&c.value!==wt?Promise.resolve():new Promise((v,M)=>{an.add([v,M])})}function bt(v){return te||(te=!v,Nn(),an.list().forEach(([M,N])=>v?N(v):M()),an.reset()),v}function Ye(v,M,N,U){const{scrollBehavior:Y}=t;if(!dn||!Y)return Promise.resolve();const ce=!N&&Uh(Go(v.fullPath,0))||(U||!N)&&history.state&&history.state.scroll||null;return Ac().then(()=>Y(v,M,ce)).then(d=>d&&Lh(d)).catch(d=>J(d,v,M))}const Te=v=>s.go(v);let cn;const ln=new Set,Er={currentRoute:c,listening:!0,addRoute:m,removeRoute:y,clearRoutes:e.clearRoutes,hasRoute:E,getRoutes:w,resolve:x,options:t,push:k,replace:H,go:Te,back:()=>Te(-1),forward:()=>Te(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:de.add,isReady:st,install(v){const M=this;v.component("RouterLink",Xt),v.component("RouterView",bl),v.config.globalProperties.$router=M,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>_e(c)}),dn&&!cn&&c.value===wt&&(cn=!0,k(s.location).catch(Y=>{}));const N={};for(const Y in wt)Object.defineProperty(N,Y,{get:()=>c.value[Y],enumerable:!0});v.provide(ds,M),v.provide(qi,wc(N)),v.provide(li,c);const U=v.unmount;ln.add(v),v.unmount=function(){ln.delete(v),ln.size<1&&(u=wt,Je&&Je(),Je=null,c.value=wt,cn=!1,te=!1),U()}}};function Be(v){return v.reduce((M,N)=>M.then(()=>we(N)),Promise.resolve())}return Er}function dp(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Sn(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Sn(u,c))||s.push(c))}return[n,r,s]}function vl(){return Ae(ds)}function hp(t){return Ae(qi)}var ca={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},pp=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},El={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,l=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,m=u&63;c||(m=64,o||(p=64)),r.push(n[l],n[f],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(wl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):pp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||f==null)throw new mp;const p=i<<2|a>>4;if(r.push(p),u!==64){const m=a<<4&240|u>>2;if(r.push(m),f!==64){const y=u<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class mp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gp=function(t){const e=wl(t);return El.encodeByteArray(e,!0)},Il=function(t){return gp(t).replace(/\./g,"")},Sl=function(t){try{return El.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp=()=>_p().__FIREBASE_DEFAULTS__,bp=()=>{if(typeof process>"u"||typeof ca>"u")return;const t=ca.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},vp=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Sl(t[1]);return e&&JSON.parse(e)},Gi=()=>{try{return yp()||bp()||vp()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},wp=t=>{var e,n;return(n=(e=Gi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Tl=()=>{var t;return(t=Gi())===null||t===void 0?void 0:t.config},Rl=t=>{var e;return(e=Gi())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ip(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function Sp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Tp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Rp(){const t=Se();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ap(){try{return typeof indexedDB=="object"}catch{return!1}}function Cp(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op="FirebaseError";class Vt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Op,Object.setPrototypeOf(this,Vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pr.prototype.create)}}class pr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Pp(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Vt(s,a,r)}}function Pp(t,e){return t.replace(kp,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const kp=/\{\$([^}]+)}/g;function Np(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Vr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(la(i)&&la(o)){if(!Vr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function la(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Bn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function $n(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function xp(t,e){const n=new Dp(t,e);return n.subscribe.bind(n)}class Dp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Lp(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Fs),s.error===void 0&&(s.error=Fs),s.complete===void 0&&(s.complete=Fs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Lp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fs(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t){return t&&t._delegate?t._delegate:t}class Rn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ep;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Fp(e))try{this.getOrInitializeService({instanceIdentifier:Jt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Jt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jt){return this.instances.has(e)}getOptions(e=Jt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Up(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Jt){return this.component?this.component.multipleInstances?e:Jt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Up(t){return t===Jt?void 0:t}function Fp(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Mp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const $p={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},Hp=ne.INFO,jp={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},Vp=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=jp[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Al{constructor(e){this.name=e,this._logLevel=Hp,this._logHandler=Vp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$p[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const Wp=(t,e)=>e.some(n=>t instanceof n);let ua,fa;function zp(){return ua||(ua=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kp(){return fa||(fa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cl=new WeakMap,ui=new WeakMap,Ol=new WeakMap,Bs=new WeakMap,Ji=new WeakMap;function qp(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Lt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Cl.set(n,t)}).catch(()=>{}),Ji.set(e,t),e}function Gp(t){if(ui.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ui.set(t,e)}let fi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ui.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ol.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Lt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Jp(t){fi=t(fi)}function Yp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call($s(this),e,...n);return Ol.set(r,e.sort?e.sort():[e]),Lt(r)}:Kp().includes(t)?function(...e){return t.apply($s(this),e),Lt(Cl.get(this))}:function(...e){return Lt(t.apply($s(this),e))}}function Xp(t){return typeof t=="function"?Yp(t):(t instanceof IDBTransaction&&Gp(t),Wp(t,zp())?new Proxy(t,fi):t)}function Lt(t){if(t instanceof IDBRequest)return qp(t);if(Bs.has(t))return Bs.get(t);const e=Xp(t);return e!==t&&(Bs.set(t,e),Ji.set(e,t)),e}const $s=t=>Ji.get(t);function Qp(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Lt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Lt(o.result),c.oldVersion,c.newVersion,Lt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Zp=["get","getKey","getAll","getAllKeys","count"],em=["put","add","delete","clear"],Hs=new Map;function da(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Hs.get(e))return Hs.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=em.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Zp.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return Hs.set(e,i),i}Jp(t=>({...t,get:(e,n,r)=>da(e,n)||t.get(e,n,r),has:(e,n)=>!!da(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nm(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function nm(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const di="@firebase/app",ha="0.10.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht=new Al("@firebase/app"),rm="@firebase/app-compat",sm="@firebase/analytics-compat",im="@firebase/analytics",om="@firebase/app-check-compat",am="@firebase/app-check",cm="@firebase/auth",lm="@firebase/auth-compat",um="@firebase/database",fm="@firebase/database-compat",dm="@firebase/functions",hm="@firebase/functions-compat",pm="@firebase/installations",mm="@firebase/installations-compat",gm="@firebase/messaging",_m="@firebase/messaging-compat",ym="@firebase/performance",bm="@firebase/performance-compat",vm="@firebase/remote-config",wm="@firebase/remote-config-compat",Em="@firebase/storage",Im="@firebase/storage-compat",Sm="@firebase/firestore",Tm="@firebase/vertexai-preview",Rm="@firebase/firestore-compat",Am="firebase",Cm="10.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi="[DEFAULT]",Om={[di]:"fire-core",[rm]:"fire-core-compat",[im]:"fire-analytics",[sm]:"fire-analytics-compat",[am]:"fire-app-check",[om]:"fire-app-check-compat",[cm]:"fire-auth",[lm]:"fire-auth-compat",[um]:"fire-rtdb",[fm]:"fire-rtdb-compat",[dm]:"fire-fn",[hm]:"fire-fn-compat",[pm]:"fire-iid",[mm]:"fire-iid-compat",[gm]:"fire-fcm",[_m]:"fire-fcm-compat",[ym]:"fire-perf",[bm]:"fire-perf-compat",[vm]:"fire-rc",[wm]:"fire-rc-compat",[Em]:"fire-gcs",[Im]:"fire-gcs-compat",[Sm]:"fire-fst",[Rm]:"fire-fst-compat",[Tm]:"fire-vertex","fire-js":"fire-js",[Am]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=new Map,Pm=new Map,pi=new Map;function pa(t,e){try{t.container.addComponent(e)}catch(n){ht.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function or(t){const e=t.name;if(pi.has(e))return ht.debug(`There were multiple attempts to register component ${e}.`),!1;pi.set(e,t);for(const n of Wr.values())pa(n,t);for(const n of Pm.values())pa(n,t);return!0}function Pl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ct(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mt=new pr("app","Firebase",km);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=Cm;function kl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:hi,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Mt.create("bad-app-name",{appName:String(s)});if(n||(n=Tl()),!n)throw Mt.create("no-options");const i=Wr.get(s);if(i){if(Vr(n,i.options)&&Vr(r,i.config))return i;throw Mt.create("duplicate-app",{appName:s})}const o=new Bp(s);for(const c of pi.values())o.addComponent(c);const a=new Nm(n,r,o);return Wr.set(s,a),a}function xm(t=hi){const e=Wr.get(t);if(!e&&t===hi&&Tl())return kl();if(!e)throw Mt.create("no-app",{appName:t});return e}function bn(t,e,n){var r;let s=(r=Om[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ht.warn(a.join(" "));return}or(new Rn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm="firebase-heartbeat-database",Lm=1,ar="firebase-heartbeat-store";let js=null;function Nl(){return js||(js=Qp(Dm,Lm,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ar)}catch(n){console.warn(n)}}}}).catch(t=>{throw Mt.create("idb-open",{originalErrorMessage:t.message})})),js}async function Mm(t){try{const n=(await Nl()).transaction(ar),r=await n.objectStore(ar).get(xl(t));return await n.done,r}catch(e){if(e instanceof Vt)ht.warn(e.message);else{const n=Mt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ht.warn(n.message)}}}async function ma(t,e){try{const r=(await Nl()).transaction(ar,"readwrite");await r.objectStore(ar).put(e,xl(t)),await r.done}catch(n){if(n instanceof Vt)ht.warn(n.message);else{const r=Mt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ht.warn(r.message)}}}function xl(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um=1024,Fm=30*24*60*60*1e3;class Bm{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Hm(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ga();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Fm}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ht.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ga(),{heartbeatsToSend:r,unsentEntries:s}=$m(this._heartbeatsCache.heartbeats),i=Il(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return ht.warn(n),""}}}function ga(){return new Date().toISOString().substring(0,10)}function $m(t,e=Um){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),_a(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),_a(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Hm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ap()?Cp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Mm(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ma(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ma(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function _a(t){return Il(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(t){or(new Rn("platform-logger",e=>new tm(e),"PRIVATE")),or(new Rn("heartbeat",e=>new Bm(e),"PRIVATE")),bn(di,ha,t),bn(di,ha,"esm2017"),bn("fire-js","")}jm("");function Yi(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Dl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Vm=Dl,Ll=new pr("auth","Firebase",Dl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=new Al("@firebase/auth");function Wm(t,...e){zr.logLevel<=ne.WARN&&zr.warn(`Auth (${gr}): ${t}`,...e)}function Nr(t,...e){zr.logLevel<=ne.ERROR&&zr.error(`Auth (${gr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(t,...e){throw Xi(t,...e)}function tt(t,...e){return Xi(t,...e)}function Ml(t,e,n){const r=Object.assign(Object.assign({},Vm()),{[e]:n});return new pr("auth","Firebase",r).create(e,{appName:t.name})}function Ut(t){return Ml(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ll.create(t,...e)}function B(t,e,...n){if(!t)throw Xi(e,...n)}function lt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Nr(e),new Error(e)}function pt(t,e){t||lt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function zm(){return ya()==="http:"||ya()==="https:"}function ya(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zm()||Sp()||"connection"in navigator)?navigator.onLine:!0}function qm(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,n){this.shortDelay=e,this.longDelay=n,pt(n>e,"Short delay should be less than long delay!"),this.isMobile=Ip()||Tp()}get(){return Km()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(t,e){pt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm=new _r(3e4,6e4);function Wt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function _t(t,e,n,r,s={}){return Fl(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=mr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Ul.fetch()(Bl(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Fl(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Gm),e);try{const s=new Xm(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Or(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Or(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Or(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Or(t,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ml(t,l,u);qe(t,l)}}catch(s){if(s instanceof Vt)throw s;qe(t,"network-request-failed",{message:String(s)})}}async function hs(t,e,n,r,s={}){const i=await _t(t,e,n,r,s);return"mfaPendingCredential"in i&&qe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Bl(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Qi(t.config,s):`${t.config.apiScheme}://${s}`}function Ym(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Xm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tt(this.auth,"network-request-failed")),Jm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Or(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=tt(t,e,r);return s.customData._tokenResponse=n,s}function ba(t){return t!==void 0&&t.enterprise!==void 0}class Qm{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Ym(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Zm(t,e){return _t(t,"GET","/v2/recaptchaConfig",Wt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eg(t,e){return _t(t,"POST","/v1/accounts:delete",e)}async function $l(t,e){return _t(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tg(t,e=!1){const n=gt(t),r=await n.getIdToken(e),s=Zi(r);B(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Yn(Vs(s.auth_time)),issuedAtTime:Yn(Vs(s.iat)),expirationTime:Yn(Vs(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Vs(t){return Number(t)*1e3}function Zi(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Nr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Sl(n);return s?JSON.parse(s):(Nr("Failed to decode base64 JWT payload"),null)}catch(s){return Nr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function va(t){const e=Zi(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Vt&&ng(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ng({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yn(this.lastLoginAt),this.creationTime=Yn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await cr(t,$l(n,{idToken:r}));B(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Hl(i.providerUserInfo):[],a=ig(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new mi(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,f)}async function sg(t){const e=gt(t);await qr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ig(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Hl(t){return t.map(e=>{var{providerId:n}=e,r=Yi(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function og(t,e){const n=await Fl(t,{},async()=>{const r=mr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Bl(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ul.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ag(t,e){return _t(t,"POST","/v2/accounts:revokeToken",Wt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):va(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){B(e.length!==0,"internal-error");const n=va(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await og(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new vn;return r&&(B(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(B(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(B(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vn,this.toJSON())}_performRefresh(){return lt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ut{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Yi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new mi(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await cr(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tg(this,e)}reload(){return sg(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ut(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await qr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ct(this.auth.app))return Promise.reject(Ut(this.auth));const e=await this.getIdToken();return await cr(this,eg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,l;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,x=(u=n.createdAt)!==null&&u!==void 0?u:void 0,C=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:O,emailVerified:k,isAnonymous:H,providerData:G,stsTokenManager:K}=n;B(O&&K,e,"internal-error");const pe=vn.fromJSON(this.name,K);B(typeof O=="string",e,"internal-error"),Et(f,e.name),Et(p,e.name),B(typeof k=="boolean",e,"internal-error"),B(typeof H=="boolean",e,"internal-error"),Et(m,e.name),Et(y,e.name),Et(w,e.name),Et(E,e.name),Et(x,e.name),Et(C,e.name);const we=new ut({uid:O,auth:e,email:p,emailVerified:k,displayName:f,isAnonymous:H,photoURL:y,phoneNumber:m,tenantId:w,stsTokenManager:pe,createdAt:x,lastLoginAt:C});return G&&Array.isArray(G)&&(we.providerData=G.map(Fe=>Object.assign({},Fe))),E&&(we._redirectEventId=E),we}static async _fromIdTokenResponse(e,n,r=!1){const s=new vn;s.updateFromServerResponse(n);const i=new ut({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await qr(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];B(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Hl(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new vn;a.updateFromIdToken(r);const c=new ut({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new mi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa=new Map;function ft(t){pt(t instanceof Function,"Expected a class definition");let e=wa.get(t);return e?(pt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,wa.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}jl.type="NONE";const Ea=jl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(t,e,n){return`firebase:${t}:${e}:${n}`}class wn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=xr(this.userKey,s.apiKey,i),this.fullPersistenceKey=xr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ut._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new wn(ft(Ea),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||ft(Ea);const o=xr(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const f=ut._fromJSON(e,l);u!==i&&(a=f),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new wn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new wn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Kl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gl(e))return"Blackberry";if(Jl(e))return"Webos";if(Wl(e))return"Safari";if((e.includes("chrome/")||zl(e))&&!e.includes("edge/"))return"Chrome";if(ql(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Vl(t=Se()){return/firefox\//i.test(t)}function Wl(t=Se()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zl(t=Se()){return/crios\//i.test(t)}function Kl(t=Se()){return/iemobile/i.test(t)}function ql(t=Se()){return/android/i.test(t)}function Gl(t=Se()){return/blackberry/i.test(t)}function Jl(t=Se()){return/webos/i.test(t)}function eo(t=Se()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function cg(t=Se()){var e;return eo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lg(){return Rp()&&document.documentMode===10}function Yl(t=Se()){return eo(t)||ql(t)||Jl(t)||Gl(t)||/windows phone/i.test(t)||Kl(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(t,e=[]){let n;switch(t){case"Browser":n=Ia(Se());break;case"Worker":n=`${Ia(Se())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${gr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fg(t,e={}){return _t(t,"GET","/v2/passwordPolicy",Wt(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg=6;class hg{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:dg,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sa(this),this.idTokenSubscription=new Sa(this),this.beforeStateQueue=new ug(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ll,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ft(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await wn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await $l(this,{idToken:e}),r=await ut._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ct(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await qr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ct(this.app))return Promise.reject(Ut(this));const n=e?gt(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ct(this.app)?Promise.reject(Ut(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ct(this.app)?Promise.reject(Ut(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ft(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await fg(this),n=new hg(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new pr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ag(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ft(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await wn.create(this,[ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Wm(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Cn(t){return gt(t)}class Sa{constructor(e){this.auth=e,this.observer=null,this.addObserver=xp(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ps={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mg(t){ps=t}function Ql(t){return ps.loadJS(t)}function gg(){return ps.recaptchaEnterpriseScript}function _g(){return ps.gapiScript}function yg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const bg="recaptcha-enterprise",vg="NO_RECAPTCHA";class wg{constructor(e){this.type=bg,this.auth=Cn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Zm(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Qm(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;ba(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(vg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&ba(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=gg();c.length!==0&&(c+=a),Ql(c).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Ta(t,e,n,r=!1){const s=new wg(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function gi(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Ta(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ta(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(t,e){const n=Pl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Vr(i,e??{}))return s;qe(s,"already-initialized")}return n.initialize({options:e})}function Ig(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ft);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Sg(t,e,n){const r=Cn(t);B(r._canInitEmulator,r,"emulator-config-failed"),B(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Zl(e),{host:o,port:a}=Tg(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Rg()}function Zl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Tg(t){const e=Zl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ra(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ra(o)}}}function Ra(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Rg(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return lt("not implemented")}_getIdTokenResponse(e){return lt("not implemented")}_linkToIdToken(e,n){return lt("not implemented")}_getReauthenticationResolver(e){return lt("not implemented")}}async function Ag(t,e){return _t(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cg(t,e){return hs(t,"POST","/v1/accounts:signInWithPassword",Wt(t,e))}async function Og(t,e){return _t(t,"POST","/v1/accounts:sendOobCode",Wt(t,e))}async function Pg(t,e){return Og(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kg(t,e){return hs(t,"POST","/v1/accounts:signInWithEmailLink",Wt(t,e))}async function Ng(t,e){return hs(t,"POST","/v1/accounts:signInWithEmailLink",Wt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends to{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new lr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new lr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gi(e,n,"signInWithPassword",Cg);case"emailLink":return kg(e,{email:this._email,oobCode:this._password});default:qe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gi(e,r,"signUpPassword",Ag);case"emailLink":return Ng(e,{idToken:n,email:this._email,oobCode:this._password});default:qe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function En(t,e){return hs(t,"POST","/v1/accounts:signInWithIdp",Wt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg="http://localhost";class rn extends to{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new rn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Yi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new rn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return En(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,En(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,En(e,n)}buildRequest(){const e={requestUri:xg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=mr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Lg(t){const e=Bn($n(t)).link,n=e?Bn($n(e)).deep_link_id:null,r=Bn($n(t)).deep_link_id;return(r?Bn($n(r)).link:null)||r||n||e||t}class ms{constructor(e){var n,r,s,i,o,a;const c=Bn($n(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,f=Dg((s=c.mode)!==null&&s!==void 0?s:null);B(u&&l&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Lg(e);try{return new ms(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(){this.providerId=On.PROVIDER_ID}static credential(e,n){return lr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ms.parseLink(n);return B(r,"argument-error"),lr._fromEmailAndCode(e,r.code,r.tenantId)}}On.PROVIDER_ID="password";On.EMAIL_PASSWORD_SIGN_IN_METHOD="password";On.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends eu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends yr{constructor(){super("facebook.com")}static credential(e){return rn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ct.credential(e.oauthAccessToken)}catch{return null}}}Ct.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ct.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends yr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return rn._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ot.credential(n,r)}catch{return null}}}Ot.GOOGLE_SIGN_IN_METHOD="google.com";Ot.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends yr{constructor(){super("github.com")}static credential(e){return rn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pt.credential(e.oauthAccessToken)}catch{return null}}}Pt.GITHUB_SIGN_IN_METHOD="github.com";Pt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends yr{constructor(){super("twitter.com")}static credential(e,n){return rn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return kt.credential(n,r)}catch{return null}}}kt.TWITTER_SIGN_IN_METHOD="twitter.com";kt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await ut._fromIdTokenResponse(e,r,s),o=Aa(r);return new An({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Aa(r);return new An({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Aa(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr extends Vt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Gr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Gr(e,n,r,s)}}function tu(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Gr._fromErrorAndOperation(t,i,e,r):i})}async function Mg(t,e,n=!1){const r=await cr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return An._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ug(t,e,n=!1){const{auth:r}=t;if(ct(r.app))return Promise.reject(Ut(r));const s="reauthenticate";try{const i=await cr(t,tu(r,s,e,t),n);B(i.idToken,r,"internal-error");const o=Zi(i.idToken);B(o,r,"internal-error");const{sub:a}=o;return B(t.uid===a,r,"user-mismatch"),An._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&qe(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nu(t,e,n=!1){if(ct(t.app))return Promise.reject(Ut(t));const r="signIn",s=await tu(t,r,e),i=await An._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Fg(t,e){return nu(Cn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(t,e,n){var r;B(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),B(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(B(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(B(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $g(t,e,n){const r=Cn(t),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function i(o,a){B(a.handleCodeInApp,r,"argument-error"),a&&Bg(r,o,a)}i(s,n),await gi(r,s,"getOobCode",Pg)}function Hg(t,e){const n=ms.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function jg(t,e,n){if(ct(t.app))return Promise.reject(Ut(t));const r=gt(t),s=On.credentialWithLink(e,n||Kr());return B(s._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Fg(r,s)}function Vg(t,e,n,r){return gt(t).onIdTokenChanged(e,n,r)}function Wg(t,e,n){return gt(t).beforeAuthStateChanged(e,n)}function zg(t,e,n,r){return gt(t).onAuthStateChanged(e,n,r)}function Kg(t){return gt(t).signOut()}const Jr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Jr,"1"),this.storage.removeItem(Jr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=1e3,Gg=10;class su extends ru{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Yl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);lg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Gg):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},qg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}su.type="LOCAL";const Jg=su;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu extends ru{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}iu.type="SESSION";const ou=iu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yg(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new gs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await Yg(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=no("",20);s.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return window}function Qg(t){nt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(){return typeof nt().WorkerGlobalScope<"u"&&typeof nt().importScripts=="function"}async function Zg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function e_(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function t_(){return au()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu="firebaseLocalStorageDb",n_=1,Yr="firebaseLocalStorage",lu="fbase_key";class br{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _s(t,e){return t.transaction([Yr],e?"readwrite":"readonly").objectStore(Yr)}function r_(){const t=indexedDB.deleteDatabase(cu);return new br(t).toPromise()}function _i(){const t=indexedDB.open(cu,n_);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Yr,{keyPath:lu})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Yr)?e(r):(r.close(),await r_(),e(await _i()))})})}async function Ca(t,e,n){const r=_s(t,!0).put({[lu]:e,value:n});return new br(r).toPromise()}async function s_(t,e){const n=_s(t,!1).get(e),r=await new br(n).toPromise();return r===void 0?null:r.value}function Oa(t,e){const n=_s(t,!0).delete(e);return new br(n).toPromise()}const i_=800,o_=3;class uu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _i(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>o_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return au()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gs._getInstance(t_()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Zg(),!this.activeServiceWorker)return;this.sender=new Xg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||e_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _i();return await Ca(e,Jr,"1"),await Oa(e,Jr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ca(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>s_(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Oa(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=_s(s,!1).getAll();return new br(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),i_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uu.type="LOCAL";const a_=uu;new _r(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(t,e){return e?ft(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro extends to{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return En(e,this._buildIdpRequest())}_linkToIdToken(e,n){return En(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return En(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function l_(t){return nu(t.auth,new ro(t),t.bypassAuthState)}function u_(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),Ug(n,new ro(t),t.bypassAuthState)}async function f_(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),Mg(n,new ro(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return l_;case"linkViaPopup":case"linkViaRedirect":return f_;case"reauthViaPopup":case"reauthViaRedirect":return u_;default:qe(this.auth,"internal-error")}}resolve(e){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_=new _r(2e3,1e4);class hn extends fu{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,hn.currentPopupAction&&hn.currentPopupAction.cancel(),hn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){pt(this.filter.length===1,"Popup operations only handle one event");const e=no();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,d_.get())};e()}}hn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_="pendingRedirect",Dr=new Map;class p_ extends fu{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Dr.get(this.auth._key());if(!e){try{const r=await m_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Dr.set(this.auth._key(),e)}return this.bypassAuthState||Dr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function m_(t,e){const n=y_(e),r=__(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function g_(t,e){Dr.set(t._key(),e)}function __(t){return ft(t._redirectPersistence)}function y_(t){return xr(h_,t.config.apiKey,t.name)}async function b_(t,e,n=!1){if(ct(t.app))return Promise.reject(Ut(t));const r=Cn(t),s=c_(r,e),o=await new p_(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_=10*60*1e3;class w_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!E_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!du(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(tt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=v_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pa(e))}saveEventToCache(e){this.cachedEventUids.add(Pa(e)),this.lastProcessedEventTime=Date.now()}}function Pa(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function du({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function E_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return du(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I_(t,e={}){return _t(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,T_=/^https?/;async function R_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await I_(t);for(const n of e)try{if(A_(n))return}catch{}qe(t,"unauthorized-domain")}function A_(t){const e=Kr(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!T_.test(n))return!1;if(S_.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=new _r(3e4,6e4);function ka(){const t=nt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function O_(t){return new Promise((e,n)=>{var r,s,i;function o(){ka(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ka(),n(tt(t,"network-request-failed"))},timeout:C_.get()})}if(!((s=(r=nt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=nt().gapi)===null||i===void 0)&&i.load)o();else{const a=yg("iframefcb");return nt()[a]=()=>{gapi.load?o():n(tt(t,"network-request-failed"))},Ql(`${_g()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Lr=null,e})}let Lr=null;function P_(t){return Lr=Lr||O_(t),Lr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_=new _r(5e3,15e3),N_="__/auth/iframe",x_="emulator/auth/iframe",D_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},L_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function M_(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Qi(e,x_):`https://${t.config.authDomain}/${N_}`,r={apiKey:e.apiKey,appName:t.name,v:gr},s=L_.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${mr(r).slice(1)}`}async function U_(t){const e=await P_(t),n=nt().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:M_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:D_,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=tt(t,"network-request-failed"),a=nt().setTimeout(()=>{i(o)},k_.get());function c(){nt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},B_=500,$_=600,H_="_blank",j_="http://localhost";class Na{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function V_(t,e,n,r=B_,s=$_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},F_),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Se().toLowerCase();n&&(a=zl(u)?H_:n),Vl(u)&&(e=e||j_,c.scrollbars="yes");const l=Object.entries(c).reduce((p,[m,y])=>`${p}${m}=${y},`,"");if(cg(u)&&a!=="_self")return W_(e||"",a),new Na(null);const f=window.open(e||"",a,l);B(f,t,"popup-blocked");try{f.focus()}catch{}return new Na(f)}function W_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_="__/auth/handler",K_="emulator/auth/handler",q_=encodeURIComponent("fac");async function xa(t,e,n,r,s,i){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:gr,eventId:s};if(e instanceof eu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Np(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,f]of Object.entries({}))o[l]=f}if(e instanceof yr){const l=e.getScopes().filter(f=>f!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await t._getAppCheckToken(),u=c?`#${q_}=${encodeURIComponent(c)}`:"";return`${G_(t)}?${mr(a).slice(1)}${u}`}function G_({config:t}){return t.emulator?Qi(t,K_):`https://${t.authDomain}/${z_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws="webStorageSupport";class J_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ou,this._completeRedirectFn=b_,this._overrideRedirectResult=g_}async _openPopup(e,n,r,s){var i;pt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await xa(e,n,r,Kr(),s);return V_(e,o,no())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await xa(e,n,r,Kr(),s);return Qg(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(pt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await U_(e),r=new w_(e);return n.register("authEvent",s=>(B(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ws,{type:Ws},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ws];o!==void 0&&n(!!o),qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=R_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Yl()||Wl()||eo()}}const Y_=J_;var Da="@firebase/auth",La="1.7.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Z_(t){or(new Rn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;B(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xl(t)},u=new pg(r,s,i,c);return Ig(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),or(new Rn("auth-internal",e=>{const n=Cn(e.getProvider("auth").getImmediate());return(r=>new X_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),bn(Da,La,Q_(t)),bn(Da,La,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey=5*60,ty=Rl("authIdTokenMaxAge")||ey;let Ma=null;const ny=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ty)return;const s=n==null?void 0:n.token;Ma!==s&&(Ma=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Xn(t=xm()){const e=Pl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Eg(t,{popupRedirectResolver:Y_,persistence:[a_,Jg,ou]}),r=Rl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=ny(i.toString());Wg(n,o,()=>o(n.currentUser)),Vg(n,a=>o(a))}}const s=wp("auth");return s&&Sg(n,`http://${s}`),n}function ry(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}mg({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=tt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",ry().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Z_("Browser");const sy={class:"container"},iy={__name:"App",setup(t){const e=Bt(null);return zn("user",e),dr(async()=>{const n=Xn();zg(n,r=>{e?e.value=r:e.value=null})}),(n,r)=>(le(),he("section",sy,[ue(_e(bl))]))}},oy="modulepreload",ay=function(t){return"/"+t},Ua={},cy=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.all(n.map(a=>{if(a=ay(a),a in Ua)return;Ua[a]=!0;const c=a.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${u}`))return;const l=document.createElement("link");if(l.rel=c?"stylesheet":oy,c||(l.as="script"),l.crossOrigin="",l.href=a,o&&l.setAttribute("nonce",o),document.head.appendChild(l),c)return new Promise((f,p)=>{l.addEventListener("load",f),l.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${a}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};function hu(t,e){return function(){return t.apply(e,arguments)}}const{toString:ly}=Object.prototype,{getPrototypeOf:so}=Object,ys=(t=>e=>{const n=ly.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Ge=t=>(t=t.toLowerCase(),e=>ys(e)===t),bs=t=>e=>typeof e===t,{isArray:Pn}=Array,ur=bs("undefined");function uy(t){return t!==null&&!ur(t)&&t.constructor!==null&&!ur(t.constructor)&&Ue(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const pu=Ge("ArrayBuffer");function fy(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&pu(t.buffer),e}const dy=bs("string"),Ue=bs("function"),mu=bs("number"),vs=t=>t!==null&&typeof t=="object",hy=t=>t===!0||t===!1,Mr=t=>{if(ys(t)!=="object")return!1;const e=so(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},py=Ge("Date"),my=Ge("File"),gy=Ge("Blob"),_y=Ge("FileList"),yy=t=>vs(t)&&Ue(t.pipe),by=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Ue(t.append)&&((e=ys(t))==="formdata"||e==="object"&&Ue(t.toString)&&t.toString()==="[object FormData]"))},vy=Ge("URLSearchParams"),[wy,Ey,Iy,Sy]=["ReadableStream","Request","Response","Headers"].map(Ge),Ty=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function vr(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),Pn(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function gu(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const Qt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,_u=t=>!ur(t)&&t!==Qt;function yi(){const{caseless:t}=_u(this)&&this||{},e={},n=(r,s)=>{const i=t&&gu(e,s)||s;Mr(e[i])&&Mr(r)?e[i]=yi(e[i],r):Mr(r)?e[i]=yi({},r):Pn(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&vr(arguments[r],n);return e}const Ry=(t,e,n,{allOwnKeys:r}={})=>(vr(e,(s,i)=>{n&&Ue(s)?t[i]=hu(s,n):t[i]=s},{allOwnKeys:r}),t),Ay=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),Cy=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},Oy=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&so(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Py=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},ky=t=>{if(!t)return null;if(Pn(t))return t;let e=t.length;if(!mu(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Ny=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&so(Uint8Array)),xy=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},Dy=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},Ly=Ge("HTMLFormElement"),My=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Fa=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Uy=Ge("RegExp"),yu=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};vr(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},Fy=t=>{yu(t,(e,n)=>{if(Ue(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(Ue(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},By=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return Pn(t)?r(t):r(String(t).split(e)),n},$y=()=>{},Hy=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,zs="abcdefghijklmnopqrstuvwxyz",Ba="0123456789",bu={DIGIT:Ba,ALPHA:zs,ALPHA_DIGIT:zs+zs.toUpperCase()+Ba},jy=(t=16,e=bu.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function Vy(t){return!!(t&&Ue(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const Wy=t=>{const e=new Array(10),n=(r,s)=>{if(vs(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=Pn(r)?[]:{};return vr(r,(o,a)=>{const c=n(o,s+1);!ur(c)&&(i[a]=c)}),e[s]=void 0,i}}return r};return n(t,0)},zy=Ge("AsyncFunction"),Ky=t=>t&&(vs(t)||Ue(t))&&Ue(t.then)&&Ue(t.catch),vu=((t,e)=>t?setImmediate:e?((n,r)=>(Qt.addEventListener("message",({source:s,data:i})=>{s===Qt&&i===n&&r.length&&r.shift()()},!1),s=>{r.push(s),Qt.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Ue(Qt.postMessage)),qy=typeof queueMicrotask<"u"?queueMicrotask.bind(Qt):typeof process<"u"&&process.nextTick||vu,_={isArray:Pn,isArrayBuffer:pu,isBuffer:uy,isFormData:by,isArrayBufferView:fy,isString:dy,isNumber:mu,isBoolean:hy,isObject:vs,isPlainObject:Mr,isReadableStream:wy,isRequest:Ey,isResponse:Iy,isHeaders:Sy,isUndefined:ur,isDate:py,isFile:my,isBlob:gy,isRegExp:Uy,isFunction:Ue,isStream:yy,isURLSearchParams:vy,isTypedArray:Ny,isFileList:_y,forEach:vr,merge:yi,extend:Ry,trim:Ty,stripBOM:Ay,inherits:Cy,toFlatObject:Oy,kindOf:ys,kindOfTest:Ge,endsWith:Py,toArray:ky,forEachEntry:xy,matchAll:Dy,isHTMLForm:Ly,hasOwnProperty:Fa,hasOwnProp:Fa,reduceDescriptors:yu,freezeMethods:Fy,toObjectSet:By,toCamelCase:My,noop:$y,toFiniteNumber:Hy,findKey:gu,global:Qt,isContextDefined:_u,ALPHABET:bu,generateString:jy,isSpecCompliantForm:Vy,toJSONObject:Wy,isAsyncFn:zy,isThenable:Ky,setImmediate:vu,asap:qy};function W(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}_.inherits(W,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:_.toJSONObject(this.config),code:this.code,status:this.status}}});const wu=W.prototype,Eu={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Eu[t]={value:t}});Object.defineProperties(W,Eu);Object.defineProperty(wu,"isAxiosError",{value:!0});W.from=(t,e,n,r,s,i)=>{const o=Object.create(wu);return _.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),W.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const Gy=null;function bi(t){return _.isPlainObject(t)||_.isArray(t)}function Iu(t){return _.endsWith(t,"[]")?t.slice(0,-2):t}function $a(t,e,n){return t?t.concat(e).map(function(s,i){return s=Iu(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function Jy(t){return _.isArray(t)&&!t.some(bi)}const Yy=_.toFlatObject(_,{},null,function(e){return/^is[A-Z]/.test(e)});function ws(t,e,n){if(!_.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=_.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,E){return!_.isUndefined(E[w])});const r=n.metaTokens,s=n.visitor||l,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&_.isSpecCompliantForm(e);if(!_.isFunction(s))throw new TypeError("visitor must be a function");function u(y){if(y===null)return"";if(_.isDate(y))return y.toISOString();if(!c&&_.isBlob(y))throw new W("Blob is not supported. Use a Buffer instead.");return _.isArrayBuffer(y)||_.isTypedArray(y)?c&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function l(y,w,E){let x=y;if(y&&!E&&typeof y=="object"){if(_.endsWith(w,"{}"))w=r?w:w.slice(0,-2),y=JSON.stringify(y);else if(_.isArray(y)&&Jy(y)||(_.isFileList(y)||_.endsWith(w,"[]"))&&(x=_.toArray(y)))return w=Iu(w),x.forEach(function(O,k){!(_.isUndefined(O)||O===null)&&e.append(o===!0?$a([w],k,i):o===null?w:w+"[]",u(O))}),!1}return bi(y)?!0:(e.append($a(E,w,i),u(y)),!1)}const f=[],p=Object.assign(Yy,{defaultVisitor:l,convertValue:u,isVisitable:bi});function m(y,w){if(!_.isUndefined(y)){if(f.indexOf(y)!==-1)throw Error("Circular reference detected in "+w.join("."));f.push(y),_.forEach(y,function(x,C){(!(_.isUndefined(x)||x===null)&&s.call(e,x,_.isString(C)?C.trim():C,w,p))===!0&&m(x,w?w.concat(C):[C])}),f.pop()}}if(!_.isObject(t))throw new TypeError("data must be an object");return m(t),e}function Ha(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function io(t,e){this._pairs=[],t&&ws(t,this,e)}const Su=io.prototype;Su.append=function(e,n){this._pairs.push([e,n])};Su.toString=function(e){const n=e?function(r){return e.call(this,r,Ha)}:Ha;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Xy(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Tu(t,e,n){if(!e)return t;const r=n&&n.encode||Xy,s=n&&n.serialize;let i;if(s?i=s(e,n):i=_.isURLSearchParams(e)?e.toString():new io(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class ja{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){_.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Ru={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Qy=typeof URLSearchParams<"u"?URLSearchParams:io,Zy=typeof FormData<"u"?FormData:null,eb=typeof Blob<"u"?Blob:null,tb={isBrowser:!0,classes:{URLSearchParams:Qy,FormData:Zy,Blob:eb},protocols:["http","https","file","blob","url","data"]},oo=typeof window<"u"&&typeof document<"u",vi=typeof navigator=="object"&&navigator||void 0,nb=oo&&(!vi||["ReactNative","NativeScript","NS"].indexOf(vi.product)<0),rb=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",sb=oo&&window.location.href||"http://localhost",ib=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:oo,hasStandardBrowserEnv:nb,hasStandardBrowserWebWorkerEnv:rb,navigator:vi,origin:sb},Symbol.toStringTag,{value:"Module"})),Ce={...ib,...tb};function ob(t,e){return ws(t,new Ce.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return Ce.isNode&&_.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function ab(t){return _.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function cb(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function Au(t){function e(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&_.isArray(s)?s.length:o,c?(_.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!_.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&_.isArray(s[o])&&(s[o]=cb(s[o])),!a)}if(_.isFormData(t)&&_.isFunction(t.entries)){const n={};return _.forEachEntry(t,(r,s)=>{e(ab(r),s,n,0)}),n}return null}function lb(t,e,n){if(_.isString(t))try{return(e||JSON.parse)(t),_.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const wr={transitional:Ru,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=_.isObject(e);if(i&&_.isHTMLForm(e)&&(e=new FormData(e)),_.isFormData(e))return s?JSON.stringify(Au(e)):e;if(_.isArrayBuffer(e)||_.isBuffer(e)||_.isStream(e)||_.isFile(e)||_.isBlob(e)||_.isReadableStream(e))return e;if(_.isArrayBufferView(e))return e.buffer;if(_.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return ob(e,this.formSerializer).toString();if((a=_.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return ws(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),lb(e)):e}],transformResponse:[function(e){const n=this.transitional||wr.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(_.isResponse(e)||_.isReadableStream(e))return e;if(e&&_.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?W.from(a,W.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ce.classes.FormData,Blob:Ce.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};_.forEach(["delete","get","head","post","put","patch"],t=>{wr.headers[t]={}});const ub=_.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),fb=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&ub[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Va=Symbol("internals");function Un(t){return t&&String(t).trim().toLowerCase()}function Ur(t){return t===!1||t==null?t:_.isArray(t)?t.map(Ur):String(t)}function db(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const hb=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Ks(t,e,n,r,s){if(_.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!_.isString(e)){if(_.isString(r))return e.indexOf(r)!==-1;if(_.isRegExp(r))return r.test(e)}}function pb(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function mb(t,e){const n=_.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}class Oe{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,c,u){const l=Un(c);if(!l)throw new Error("header name must be a non-empty string");const f=_.findKey(s,l);(!f||s[f]===void 0||u===!0||u===void 0&&s[f]!==!1)&&(s[f||c]=Ur(a))}const o=(a,c)=>_.forEach(a,(u,l)=>i(u,l,c));if(_.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(_.isString(e)&&(e=e.trim())&&!hb(e))o(fb(e),n);else if(_.isHeaders(e))for(const[a,c]of e.entries())i(c,a,r);else e!=null&&i(n,e,r);return this}get(e,n){if(e=Un(e),e){const r=_.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return db(s);if(_.isFunction(n))return n.call(this,s,r);if(_.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Un(e),e){const r=_.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Ks(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=Un(o),o){const a=_.findKey(r,o);a&&(!n||Ks(r,r[a],a,n))&&(delete r[a],s=!0)}}return _.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||Ks(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return _.forEach(this,(s,i)=>{const o=_.findKey(r,i);if(o){n[o]=Ur(s),delete n[i];return}const a=e?pb(i):String(i).trim();a!==i&&delete n[i],n[a]=Ur(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return _.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&_.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[Va]=this[Va]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=Un(o);r[a]||(mb(s,o),r[a]=!0)}return _.isArray(e)?e.forEach(i):i(e),this}}Oe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);_.reduceDescriptors(Oe.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});_.freezeMethods(Oe);function qs(t,e){const n=this||wr,r=e||n,s=Oe.from(r.headers);let i=r.data;return _.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function Cu(t){return!!(t&&t.__CANCEL__)}function kn(t,e,n){W.call(this,t??"canceled",W.ERR_CANCELED,e,n),this.name="CanceledError"}_.inherits(kn,W,{__CANCEL__:!0});function Ou(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new W("Request failed with status code "+n.status,[W.ERR_BAD_REQUEST,W.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function gb(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function _b(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const u=Date.now(),l=r[i];o||(o=u),n[s]=c,r[s]=u;let f=i,p=0;for(;f!==s;)p+=n[f++],f=f%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),u-o<e)return;const m=l&&u-l;return m?Math.round(p*1e3/m):void 0}}function yb(t,e){let n=0,r=1e3/e,s,i;const o=(u,l=Date.now())=>{n=l,s=null,i&&(clearTimeout(i),i=null),t.apply(null,u)};return[(...u)=>{const l=Date.now(),f=l-n;f>=r?o(u,l):(s=u,i||(i=setTimeout(()=>{i=null,o(s)},r-f)))},()=>s&&o(s)]}const Xr=(t,e,n=3)=>{let r=0;const s=_b(50,250);return yb(i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,c=o-r,u=s(c),l=o<=a;r=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:c,rate:u||void 0,estimated:u&&a&&l?(a-o)/u:void 0,event:i,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},Wa=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},za=t=>(...e)=>_.asap(()=>t(...e)),bb=Ce.hasStandardBrowserEnv?function(){const e=Ce.navigator&&/(msie|trident)/i.test(Ce.navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=_.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}(),vb=Ce.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const o=[t+"="+encodeURIComponent(e)];_.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),_.isString(r)&&o.push("path="+r),_.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function wb(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Eb(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Pu(t,e){return t&&!wb(e)?Eb(t,e):e}const Ka=t=>t instanceof Oe?{...t}:t;function sn(t,e){e=e||{};const n={};function r(u,l,f){return _.isPlainObject(u)&&_.isPlainObject(l)?_.merge.call({caseless:f},u,l):_.isPlainObject(l)?_.merge({},l):_.isArray(l)?l.slice():l}function s(u,l,f){if(_.isUndefined(l)){if(!_.isUndefined(u))return r(void 0,u,f)}else return r(u,l,f)}function i(u,l){if(!_.isUndefined(l))return r(void 0,l)}function o(u,l){if(_.isUndefined(l)){if(!_.isUndefined(u))return r(void 0,u)}else return r(void 0,l)}function a(u,l,f){if(f in e)return r(u,l);if(f in t)return r(void 0,u)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(u,l)=>s(Ka(u),Ka(l),!0)};return _.forEach(Object.keys(Object.assign({},t,e)),function(l){const f=c[l]||s,p=f(t[l],e[l],l);_.isUndefined(p)&&f!==a||(n[l]=p)}),n}const ku=t=>{const e=sn({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:i,headers:o,auth:a}=e;e.headers=o=Oe.from(o),e.url=Tu(Pu(e.baseURL,e.url),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let c;if(_.isFormData(n)){if(Ce.hasStandardBrowserEnv||Ce.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((c=o.getContentType())!==!1){const[u,...l]=c?c.split(";").map(f=>f.trim()).filter(Boolean):[];o.setContentType([u||"multipart/form-data",...l].join("; "))}}if(Ce.hasStandardBrowserEnv&&(r&&_.isFunction(r)&&(r=r(e)),r||r!==!1&&bb(e.url))){const u=s&&i&&vb.read(i);u&&o.set(s,u)}return e},Ib=typeof XMLHttpRequest<"u",Sb=Ib&&function(t){return new Promise(function(n,r){const s=ku(t);let i=s.data;const o=Oe.from(s.headers).normalize();let{responseType:a,onUploadProgress:c,onDownloadProgress:u}=s,l,f,p,m,y;function w(){m&&m(),y&&y(),s.cancelToken&&s.cancelToken.unsubscribe(l),s.signal&&s.signal.removeEventListener("abort",l)}let E=new XMLHttpRequest;E.open(s.method.toUpperCase(),s.url,!0),E.timeout=s.timeout;function x(){if(!E)return;const O=Oe.from("getAllResponseHeaders"in E&&E.getAllResponseHeaders()),H={data:!a||a==="text"||a==="json"?E.responseText:E.response,status:E.status,statusText:E.statusText,headers:O,config:t,request:E};Ou(function(K){n(K),w()},function(K){r(K),w()},H),E=null}"onloadend"in E?E.onloadend=x:E.onreadystatechange=function(){!E||E.readyState!==4||E.status===0&&!(E.responseURL&&E.responseURL.indexOf("file:")===0)||setTimeout(x)},E.onabort=function(){E&&(r(new W("Request aborted",W.ECONNABORTED,t,E)),E=null)},E.onerror=function(){r(new W("Network Error",W.ERR_NETWORK,t,E)),E=null},E.ontimeout=function(){let k=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const H=s.transitional||Ru;s.timeoutErrorMessage&&(k=s.timeoutErrorMessage),r(new W(k,H.clarifyTimeoutError?W.ETIMEDOUT:W.ECONNABORTED,t,E)),E=null},i===void 0&&o.setContentType(null),"setRequestHeader"in E&&_.forEach(o.toJSON(),function(k,H){E.setRequestHeader(H,k)}),_.isUndefined(s.withCredentials)||(E.withCredentials=!!s.withCredentials),a&&a!=="json"&&(E.responseType=s.responseType),u&&([p,y]=Xr(u,!0),E.addEventListener("progress",p)),c&&E.upload&&([f,m]=Xr(c),E.upload.addEventListener("progress",f),E.upload.addEventListener("loadend",m)),(s.cancelToken||s.signal)&&(l=O=>{E&&(r(!O||O.type?new kn(null,t,E):O),E.abort(),E=null)},s.cancelToken&&s.cancelToken.subscribe(l),s.signal&&(s.signal.aborted?l():s.signal.addEventListener("abort",l)));const C=gb(s.url);if(C&&Ce.protocols.indexOf(C)===-1){r(new W("Unsupported protocol "+C+":",W.ERR_BAD_REQUEST,t));return}E.send(i||null)})},Tb=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let r=new AbortController,s;const i=function(u){if(!s){s=!0,a();const l=u instanceof Error?u:this.reason;r.abort(l instanceof W?l:new kn(l instanceof Error?l.message:l))}};let o=e&&setTimeout(()=>{o=null,i(new W(`timeout ${e} of ms exceeded`,W.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(u=>{u.unsubscribe?u.unsubscribe(i):u.removeEventListener("abort",i)}),t=null)};t.forEach(u=>u.addEventListener("abort",i));const{signal:c}=r;return c.unsubscribe=()=>_.asap(a),c}},Rb=function*(t,e){let n=t.byteLength;if(!e||n<e){yield t;return}let r=0,s;for(;r<n;)s=r+e,yield t.slice(r,s),r=s},Ab=async function*(t,e){for await(const n of Cb(t))yield*Rb(n,e)},Cb=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},qa=(t,e,n,r)=>{const s=Ab(t,e);let i=0,o,a=c=>{o||(o=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:u,value:l}=await s.next();if(u){a(),c.close();return}let f=l.byteLength;if(n){let p=i+=f;n(p)}c.enqueue(new Uint8Array(l))}catch(u){throw a(u),u}},cancel(c){return a(c),s.return()}},{highWaterMark:2})},Es=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Nu=Es&&typeof ReadableStream=="function",Ob=Es&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),xu=(t,...e)=>{try{return!!t(...e)}catch{return!1}},Pb=Nu&&xu(()=>{let t=!1;const e=new Request(Ce.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),Ga=64*1024,wi=Nu&&xu(()=>_.isReadableStream(new Response("").body)),Qr={stream:wi&&(t=>t.body)};Es&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!Qr[e]&&(Qr[e]=_.isFunction(t[e])?n=>n[e]():(n,r)=>{throw new W(`Response type '${e}' is not supported`,W.ERR_NOT_SUPPORT,r)})})})(new Response);const kb=async t=>{if(t==null)return 0;if(_.isBlob(t))return t.size;if(_.isSpecCompliantForm(t))return(await new Request(Ce.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(_.isArrayBufferView(t)||_.isArrayBuffer(t))return t.byteLength;if(_.isURLSearchParams(t)&&(t=t+""),_.isString(t))return(await Ob(t)).byteLength},Nb=async(t,e)=>{const n=_.toFiniteNumber(t.getContentLength());return n??kb(e)},xb=Es&&(async t=>{let{url:e,method:n,data:r,signal:s,cancelToken:i,timeout:o,onDownloadProgress:a,onUploadProgress:c,responseType:u,headers:l,withCredentials:f="same-origin",fetchOptions:p}=ku(t);u=u?(u+"").toLowerCase():"text";let m=Tb([s,i&&i.toAbortSignal()],o),y;const w=m&&m.unsubscribe&&(()=>{m.unsubscribe()});let E;try{if(c&&Pb&&n!=="get"&&n!=="head"&&(E=await Nb(l,r))!==0){let H=new Request(e,{method:"POST",body:r,duplex:"half"}),G;if(_.isFormData(r)&&(G=H.headers.get("content-type"))&&l.setContentType(G),H.body){const[K,pe]=Wa(E,Xr(za(c)));r=qa(H.body,Ga,K,pe)}}_.isString(f)||(f=f?"include":"omit");const x="credentials"in Request.prototype;y=new Request(e,{...p,signal:m,method:n.toUpperCase(),headers:l.normalize().toJSON(),body:r,duplex:"half",credentials:x?f:void 0});let C=await fetch(y);const O=wi&&(u==="stream"||u==="response");if(wi&&(a||O&&w)){const H={};["status","statusText","headers"].forEach(we=>{H[we]=C[we]});const G=_.toFiniteNumber(C.headers.get("content-length")),[K,pe]=a&&Wa(G,Xr(za(a),!0))||[];C=new Response(qa(C.body,Ga,K,()=>{pe&&pe(),w&&w()}),H)}u=u||"text";let k=await Qr[_.findKey(Qr,u)||"text"](C,t);return!O&&w&&w(),await new Promise((H,G)=>{Ou(H,G,{data:k,headers:Oe.from(C.headers),status:C.status,statusText:C.statusText,config:t,request:y})})}catch(x){throw w&&w(),x&&x.name==="TypeError"&&/fetch/i.test(x.message)?Object.assign(new W("Network Error",W.ERR_NETWORK,t,y),{cause:x.cause||x}):W.from(x,x&&x.code,t,y)}}),Ei={http:Gy,xhr:Sb,fetch:xb};_.forEach(Ei,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Ja=t=>`- ${t}`,Db=t=>_.isFunction(t)||t===null||t===!1,Du={getAdapter:t=>{t=_.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let i=0;i<e;i++){n=t[i];let o;if(r=n,!Db(n)&&(r=Ei[(o=String(n)).toLowerCase()],r===void 0))throw new W(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(Ja).join(`
`):" "+Ja(i[0]):"as no adapter specified";throw new W("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Ei};function Gs(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new kn(null,t)}function Ya(t){return Gs(t),t.headers=Oe.from(t.headers),t.data=qs.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Du.getAdapter(t.adapter||wr.adapter)(t).then(function(r){return Gs(t),r.data=qs.call(t,t.transformResponse,r),r.headers=Oe.from(r.headers),r},function(r){return Cu(r)||(Gs(t),r&&r.response&&(r.response.data=qs.call(t,t.transformResponse,r.response),r.response.headers=Oe.from(r.response.headers))),Promise.reject(r)})}const Lu="1.7.7",ao={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{ao[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Xa={};ao.transitional=function(e,n,r){function s(i,o){return"[Axios v"+Lu+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new W(s(o," has been removed"+(n?" in "+n:"")),W.ERR_DEPRECATED);return n&&!Xa[o]&&(Xa[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function Lb(t,e,n){if(typeof t!="object")throw new W("options must be an object",W.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new W("option "+i+" must be "+c,W.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new W("Unknown option "+i,W.ERR_BAD_OPTION)}}const Ii={assertOptions:Lb,validators:ao},It=Ii.validators;class en{constructor(e){this.defaults=e,this.interceptors={request:new ja,response:new ja}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=sn(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Ii.assertOptions(r,{silentJSONParsing:It.transitional(It.boolean),forcedJSONParsing:It.transitional(It.boolean),clarifyTimeoutError:It.transitional(It.boolean)},!1),s!=null&&(_.isFunction(s)?n.paramsSerializer={serialize:s}:Ii.assertOptions(s,{encode:It.function,serialize:It.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&_.merge(i.common,i[n.method]);i&&_.forEach(["delete","get","head","post","put","patch","common"],y=>{delete i[y]}),n.headers=Oe.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(c=c&&w.synchronous,a.unshift(w.fulfilled,w.rejected))});const u=[];this.interceptors.response.forEach(function(w){u.push(w.fulfilled,w.rejected)});let l,f=0,p;if(!c){const y=[Ya.bind(this),void 0];for(y.unshift.apply(y,a),y.push.apply(y,u),p=y.length,l=Promise.resolve(n);f<p;)l=l.then(y[f++],y[f++]);return l}p=a.length;let m=n;for(f=0;f<p;){const y=a[f++],w=a[f++];try{m=y(m)}catch(E){w.call(this,E);break}}try{l=Ya.call(this,m)}catch(y){return Promise.reject(y)}for(f=0,p=u.length;f<p;)l=l.then(u[f++],u[f++]);return l}getUri(e){e=sn(this.defaults,e);const n=Pu(e.baseURL,e.url);return Tu(n,e.params,e.paramsSerializer)}}_.forEach(["delete","get","head","options"],function(e){en.prototype[e]=function(n,r){return this.request(sn(r||{},{method:e,url:n,data:(r||{}).data}))}});_.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(sn(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}en.prototype[e]=n(),en.prototype[e+"Form"]=n(!0)});class co{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new kn(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new co(function(s){e=s}),cancel:e}}}function Mb(t){return function(n){return t.apply(null,n)}}function Ub(t){return _.isObject(t)&&t.isAxiosError===!0}const Si={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Si).forEach(([t,e])=>{Si[e]=t});function Mu(t){const e=new en(t),n=hu(en.prototype.request,e);return _.extend(n,en.prototype,e,{allOwnKeys:!0}),_.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return Mu(sn(t,s))},n}const oe=Mu(wr);oe.Axios=en;oe.CanceledError=kn;oe.CancelToken=co;oe.isCancel=Cu;oe.VERSION=Lu;oe.toFormData=ws;oe.AxiosError=W;oe.Cancel=oe.CanceledError;oe.all=function(e){return Promise.all(e)};oe.spread=Mb;oe.isAxiosError=Ub;oe.mergeConfig=sn;oe.AxiosHeaders=Oe;oe.formToJSON=t=>Au(_.isHTMLForm(t)?new FormData(t):t);oe.getAdapter=Du.getAdapter;oe.HttpStatusCode=Si;oe.default=oe;const Fb="/assets/logo-hexagon-CPXM5FB7.svg",Bb={class:"navbar",role:"navigation","aria-label":"main navigation"},$b={class:"navbar-brand"},Hb=["src"],jb={id:"navbarBasicExample",class:"navbar-menu"},Vb={class:"navbar-start"},Wb={class:"navbar-end"},zb={class:"navbar-item"},Kb={class:"buttons"},lo={__name:"NavBar",props:["inCheckout"],setup(t){const e=Bt(Fb),n=t,r=Ae("user"),s=vl(),i=async function(){const o=Xn();await Kg(o),s.push("/")};return(o,a)=>(le(),he("nav",Bb,[D("div",$b,[ue(_e(Xt),{to:"/",class:"navbar-item"},{default:Nt(()=>[D("img",{src:e.value,width:"112",height:"28"},null,8,Hb)]),_:1}),a[0]||(a[0]=D("a",{role:"button",class:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},[D("span",{"aria-hidden":"true"}),D("span",{"aria-hidden":"true"}),D("span",{"aria-hidden":"true"}),D("span",{"aria-hidden":"true"})],-1))]),D("div",jb,[D("div",Vb,[ue(_e(Xt),{to:"/",class:"navbar-item"},{default:Nt(()=>a[1]||(a[1]=[Dt(" Home ")])),_:1})]),D("div",Wb,[D("div",zb,[D("div",Kb,[_e(r)?(le(),he("button",{key:0,class:"button is-danger",onClick:jr(i,["prevent"])}," Sign Out ")):Ed("",!0),n.inCheckout?(le(),rr(_e(Xt),{key:2,to:"/",class:"button"},{default:Nt(()=>a[3]||(a[3]=[Dt(" Continue Shopping ")])),_:1})):(le(),rr(_e(Xt),{key:1,to:"/cart",class:"button"},{default:Nt(()=>a[2]||(a[2]=[Dt(" Cart ")])),_:1}))])])])])]))}},qb={class:"card"},Gb={class:"card-image pt-4"},Jb={class:"image is-4by3"},Yb=["src"],Xb={class:"card-content"},Qb={class:"media"},Zb={class:"media-content"},ev={class:"title is-4"},tv={class:"subtitle is-6"},nv={class:"card-footer"},rv={__name:"Product",props:{product:Object},setup(t){return(e,n)=>(le(),he("div",qb,[D("div",Gb,[D("figure",Jb,[D("img",{src:t.product.imageUrl,alt:"Placeholder image"},null,8,Yb)])]),D("div",Xb,[D("div",Qb,[D("div",Zb,[D("p",ev,xt(t.product.name),1),D("p",tv,xt(t.product.price),1)])])]),D("footer",nv,[ue(_e(Xt),{to:`/details/${t.product.id}`,class:"card-footer-item"},{default:Nt(()=>n[0]||(n[0]=[Dt("View Details")])),_:1},8,["to"])])]))}},sv={class:"container mt-5"},iv={class:"section"},ov={class:"container"},av={class:"grid is-col-min-10"},cv={__name:"ProductsPage",setup(t){let e=Bt([]);const n=async()=>{try{const r=await oe.get("/api/products");e.value=r.data}catch(r){console.log(r)}};return dr(async()=>{await n()}),(r,s)=>(le(),he(Re,null,[D("div",sv,[ue(lo)]),s[0]||(s[0]=D("section",{class:"hero"},[D("div",{class:"hero-body"},[D("p",{class:"title"},"Two Trees Olive Oil"),D("p",{class:"subtitle"},"Best Olive Oil in the world")])],-1)),D("section",iv,[D("div",ov,[D("div",av,[(le(!0),he(Re,null,Fc(_e(e),i=>(le(),rr(rv,{key:i.id,product:i},null,8,["product"]))),128))])])])],64))}},lv={class:"box"},uv={class:"media"},fv={class:"media-left"},dv={class:"image is-64x64"},hv=["src"],pv={class:"media-content"},mv={class:"content"},gv={class:"mr-2"},_v={class:"media-right"},yv={__name:"CartProduct",props:{product:Object},setup(t){return(e,n)=>{const r=jf("RouterLink");return le(),he("div",lv,[D("article",uv,[D("figure",fv,[D("p",dv,[D("img",{src:t.product.imageUrl},null,8,hv)])]),D("div",pv,[D("div",mv,[D("p",null,[D("strong",gv,[ue(r,{to:`/details/${t.product.id}`},{default:Nt(()=>[Dt(xt(t.product.name),1)]),_:1},8,["to"])]),D("small",null,xt(t.product.price),1),n[1]||(n[1]=D("small",null,"31m",-1)),n[2]||(n[2]=D("br",null,null,-1)),n[3]||(n[3]=Dt(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis. "))])])]),D("div",_v,[D("button",{class:"delete",onClick:n[0]||(n[0]=jr(s=>e.$emit("remove",t.product),["prevent"]))})])])])}}},bv={class:"container mt-5"},vv={key:0,class:"section"},wv={key:1,class:"section"},Ev={__name:"ShoppingCartPage",setup(t){const e=Bt([]),n=Ae("user"),r=async()=>{try{const i=await oe.get(`/api/users/${n.value.uid}/cart`);e.value=i.data}catch(i){console.log(i)}},s=async function(i){try{await oe.delete(`/api/users/${n.value.uid}/cart/${i.id}`),r()}catch(o){console.log(o)}};return dr(async()=>{await r()}),(i,o)=>(le(),he(Re,null,[D("div",bv,[ue(lo,{"in-checkout":"true"})]),o[1]||(o[1]=D("section",{class:"hero"},[D("div",{class:"hero-body"},[D("p",{class:"title"},"Your Cart")])],-1)),e.value.length===0?(le(),he("section",vv,o[0]||(o[0]=[D("h5",null,"Is Empty",-1)]))):(le(),he("section",wv,[(le(!0),he(Re,null,Fc(e.value,a=>(le(),rr(yv,{key:a.id,product:a,onRemove:c=>s(a)},null,8,["product","onRemove"]))),128))])),o[2]||(o[2]=D("section",{class:"section"},[D("button",{class:"button is-primary mr-4"},"Checkout")],-1))],64))}},Iv={class:"container mt-5"},Sv={class:"section"},Tv={class:"breadcrumb","aria-label":"breadcrumbs"},Rv={href:"#"},Av={class:"section"},Cv={key:0},Ov={class:"grid is-col-min-10"},Pv={class:"card"},kv={class:"card-image pt-4"},Nv={class:"image is-2by1"},xv=["src"],Dv={class:"card-content"},Lv={class:"media"},Mv={class:"media-content"},Uv={class:"title is-4"},Fv={class:"subtitle is-6"},Bv={key:0,class:"card-footer"},$v={key:1,class:"button card-footer-item",disabled:""},Hv={key:1,class:"card-footer"},jv={key:1},Vv={__name:"ProductDetailPage",setup(t){const e=hp(),n=vl(),r=Bt({}),s=Ae("user"),i=async function(){const f=prompt("Please enter your email address to sign in");if(f){const p=Xn(),m={url:"https://full-stack-vue-sgangji.onrender.com/details/"+r.value.id,handleCodeInApp:!0};try{await $g(p,f,m),alert("Sign in link sent to "+f),window.localStorage.setItem("emailForSignIn",f)}catch{alert("Error sending email")}}},o=async function(){try{await oe.post(`/api/users/${s.value.uid}/cart`,{productId:r.value.id}),alert("Item added to cart"),n.push("/cart")}catch(f){console.log(f)}},a=async function(f){try{const p=await oe.get("/api/products/"+f);r.value=p.data}catch(p){console.log(p)}},c=Bt([]),u=async function(){try{const f=await oe.get(`/api/users/${s.value.uid}/cart`);c.value=f.data}catch(f){console.log(f)}},l=$e(()=>c.value.findIndex(p=>p.id===r.value.id)!==-1);return Kn(s,async()=>{s.value&&await u()}),dr(async()=>{await a(e.params.productId);const f=window.localStorage.getItem("emailForSignIn");if(f&&Hg(Xn(),window.location.href))try{await jg(Xn(),f,window.location.href),alert("Sign in successful"),window.localStorage.removeItem("emailForSignIn")}catch(p){console.log(p)}s.value&&await u()}),(f,p)=>(le(),he(Re,null,[D("div",Iv,[ue(lo)]),D("div",Sv,[D("nav",Tv,[D("ul",null,[D("li",null,[ue(_e(Xt),{to:"/"},{default:Nt(()=>p[0]||(p[0]=[Dt("Products")])),_:1})]),D("li",null,[D("a",Rv,xt(r.value.name),1)])])])]),D("div",Av,[r.value?(le(),he("div",Cv,[D("div",Ov,[D("div",Pv,[D("div",kv,[D("figure",Nv,[D("img",{src:r.value.imageUrl,alt:"Placeholder image"},null,8,xv)])]),D("div",Dv,[D("div",Lv,[D("div",Mv,[D("p",Uv,xt(r.value.name),1),D("p",Fv,xt(r.value.price),1)])])]),_e(s)?(le(),he("footer",Bv,[l.value?(le(),he("button",$v," Item Already In Cart ")):(le(),he("button",{key:0,class:"button is-focused card-footer-item",onClick:jr(o,["prevent"])}," Add To Cart "))])):(le(),he("footer",Hv,[D("button",{class:"button card-footer-item",onClick:jr(i,["prevent"])}," Singn in to add to cart ")]))])])])):(le(),he("div",jv,"No product found"))])],64))}},Wv=fp({history:Hh("/"),routes:[{path:"/",name:"products",component:cv},{path:"/details/:productId",name:"productDetails",component:Vv},{path:"/cart",name:"cart",component:Ev},{path:"/:pathMatch(.*)*",name:"notFound",component:()=>cy(()=>import("./NotFoundPage-Df-iU2V6.js"),[])}]});var zv="firebase",Kv="10.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bn(zv,Kv,"app");const qv={apiKey:"AIzaSyAWNFnQP_UHKJbKwtY_rY7B9RGCRRzYL8w",authDomain:"vue-site-642fb.firebaseapp.com",projectId:"vue-site-642fb",storageBucket:"vue-site-642fb.appspot.com",messagingSenderId:"486829608178",appId:"1:486829608178:web:036231d9bd37568e0f546b"};kl(qv);const uo=ih(iy);uo.use(uh());uo.use(Wv);uo.mount("#app");export{Re as F,lo as _,D as a,ue as b,he as c,le as o};
