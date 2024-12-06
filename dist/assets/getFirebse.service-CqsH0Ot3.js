import{a as oi}from"./tslib.es6-DUex0IDm.js";var Ar={};/**
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
 */const cs=function(n){const e=[];let i=0;for(let r=0;r<n.length;r++){let o=n.charCodeAt(r);o<128?e[i++]=o:o<2048?(e[i++]=o>>6|192,e[i++]=o&63|128):(o&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++r)&1023),e[i++]=o>>18|240,e[i++]=o>>12&63|128,e[i++]=o>>6&63|128,e[i++]=o&63|128):(e[i++]=o>>12|224,e[i++]=o>>6&63|128,e[i++]=o&63|128)}return e},Qo=function(n){const e=[];let i=0,r=0;for(;i<n.length;){const o=n[i++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const c=n[i++];e[r++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=n[i++],l=n[i++],p=n[i++],v=((o&7)<<18|(c&63)<<12|(l&63)<<6|p&63)-65536;e[r++]=String.fromCharCode(55296+(v>>10)),e[r++]=String.fromCharCode(56320+(v&1023))}else{const c=n[i++],l=n[i++];e[r++]=String.fromCharCode((o&15)<<12|(c&63)<<6|l&63)}}return e.join("")},hs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<n.length;o+=3){const c=n[o],l=o+1<n.length,p=l?n[o+1]:0,v=o+2<n.length,E=v?n[o+2]:0,A=c>>2,k=(c&3)<<4|p>>4;let R=(p&15)<<2|E>>6,L=E&63;v||(L=64,l||(R=64)),r.push(i[A],i[k],i[R],i[L])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(cs(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Qo(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<n.length;){const c=i[n.charAt(o++)],p=o<n.length?i[n.charAt(o)]:0;++o;const E=o<n.length?i[n.charAt(o)]:64;++o;const k=o<n.length?i[n.charAt(o)]:64;if(++o,c==null||p==null||E==null||k==null)throw new Zo;const R=c<<2|p>>4;if(r.push(R),E!==64){const L=p<<4&240|E>>2;if(r.push(L),k!==64){const S=E<<6&192|k;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Zo extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ea=function(n){const e=cs(n);return hs.encodeByteArray(e,!0)},tn=function(n){return ea(n).replace(/\./g,"")},ls=function(n){try{return hs.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ta(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const na=()=>ta().__FIREBASE_DEFAULTS__,ia=()=>{if(typeof process>"u"||typeof Ar>"u")return;const n=Ar.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ra=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ls(n[1]);return e&&JSON.parse(e)},ai=()=>{try{return na()||ia()||ra()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},us=n=>{var e,i;return(i=(e=ai())===null||e===void 0?void 0:e.emulatorHosts)===null||i===void 0?void 0:i[n]},ds=n=>{const e=us(n);if(!e)return;const i=e.lastIndexOf(":");if(i<=0||i+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(i+1),10);return e[0]==="["?[e.substring(1,i-1),r]:[e.substring(0,i),r]},fs=()=>{var n;return(n=ai())===null||n===void 0?void 0:n.config},ps=n=>{var e;return(e=ai())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class sa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}wrapCallback(e){return(i,r)=>{i?this.reject(i):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(i):e(i,r))}}}/**
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
 */function gs(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},r=e||"demo-project",o=n.iat||0,c=n.sub||n.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},n);return[tn(JSON.stringify(i)),tn(JSON.stringify(l)),""].join(".")}/**
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
 */function Y(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Y())}function aa(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ca(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ha(){const n=Y();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function la(){try{return typeof indexedDB=="object"}catch{return!1}}function ua(){return new Promise((n,e)=>{try{let i=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),i||self.indexedDB.deleteDatabase(r),n(!0)},o.onupgradeneeded=()=>{i=!1},o.onerror=()=>{var c;e(((c=o.error)===null||c===void 0?void 0:c.message)||"")}}catch(i){e(i)}})}/**
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
 */const da="FirebaseError";class ue extends Error{constructor(e,i,r){super(i),this.code=e,this.customData=r,this.name=da,Object.setPrototypeOf(this,ue.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bt.prototype.create)}}class bt{constructor(e,i,r){this.service=e,this.serviceName=i,this.errors=r}create(e,...i){const r=i[0]||{},o=`${this.service}/${e}`,c=this.errors[e],l=c?fa(c,r):"Error",p=`${this.serviceName}: ${l} (${o}).`;return new ue(o,p,r)}}function fa(n,e){return n.replace(pa,(i,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const pa=/\{\$([^}]+)}/g;function ga(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function nn(n,e){if(n===e)return!0;const i=Object.keys(n),r=Object.keys(e);for(const o of i){if(!r.includes(o))return!1;const c=n[o],l=e[o];if(br(c)&&br(l)){if(!nn(c,l))return!1}else if(c!==l)return!1}for(const o of r)if(!i.includes(o))return!1;return!0}function br(n){return n!==null&&typeof n=="object"}/**
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
 */function Rt(n){const e=[];for(const[i,r]of Object.entries(n))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(i)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ma(n,e){const i=new _a(n,e);return i.subscribe.bind(i)}class _a{constructor(e,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(i=>{i.next(e)})}error(e){this.forEachObserver(i=>{i.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,i,r){let o;if(e===void 0&&i===void 0&&r===void 0)throw new Error("Missing Observer.");va(e,["next","error","complete"])?o=e:o={next:e,error:i,complete:r},o.next===void 0&&(o.next=Vn),o.error===void 0&&(o.error=Vn),o.complete===void 0&&(o.complete=Vn);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,e)}sendOne(e,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{i(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function va(n,e){if(typeof n!="object"||n===null)return!1;for(const i of e)if(i in n&&typeof n[i]=="function")return!0;return!1}function Vn(){}/**
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
 */function Ie(n){return n&&n._delegate?n._delegate:n}class Ne{constructor(e,i,r){this.name=e,this.instanceFactory=i,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const xe="[DEFAULT]";/**
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
 */class ya{constructor(e,i){this.name=e,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const i=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(i)){const r=new sa;if(this.instancesDeferred.set(i,r),this.isInitialized(i)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:i});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(e){var i;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(i=e==null?void 0:e.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(c){if(o)return null;throw c}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wa(e))try{this.getOrInitializeService({instanceIdentifier:xe})}catch{}for(const[i,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);try{const c=this.getOrInitializeService({instanceIdentifier:o});r.resolve(c)}catch{}}}}clearInstance(e=xe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...e.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xe){return this.instances.has(e)}getOptions(e=xe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:i={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:i});for(const[c,l]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(c);r===p&&l.resolve(o)}return o}onInit(e,i){var r;const o=this.normalizeInstanceIdentifier(i),c=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;c.add(e),this.onInitCallbacks.set(o,c);const l=this.instances.get(o);return l&&e(l,o),()=>{c.delete(e)}}invokeOnInitCallbacks(e,i){const r=this.onInitCallbacks.get(i);if(r)for(const o of r)try{o(e,i)}catch{}}getOrInitializeService({instanceIdentifier:e,options:i={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ia(e),options:i}),this.instances.set(e,r),this.instancesOptions.set(e,i),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xe){return this.component?this.component.multipleInstances?e:xe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ia(n){return n===xe?void 0:n}function wa(n){return n.instantiationMode==="EAGER"}/**
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
 */class Ea{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const i=this.getProvider(e.name);if(i.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);i.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const i=new ya(e,this);return this.providers.set(e,i),i}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var D;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(D||(D={}));const Ta={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},Aa=D.INFO,ba={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},Ra=(n,e,...i)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),o=ba[e];if(o)console[o](`[${r}]  ${n.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ci{constructor(e){this.name=e,this._logLevel=Aa,this._logHandler=Ra,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in D))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ta[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...e),this._logHandler(this,D.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...e),this._logHandler(this,D.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,D.INFO,...e),this._logHandler(this,D.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,D.WARN,...e),this._logHandler(this,D.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...e),this._logHandler(this,D.ERROR,...e)}}const Sa=(n,e)=>e.some(i=>n instanceof i);let Rr,Sr;function ka(){return Rr||(Rr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ca(){return Sr||(Sr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ms=new WeakMap,Jn=new WeakMap,_s=new WeakMap,Hn=new WeakMap,hi=new WeakMap;function Pa(n){const e=new Promise((i,r)=>{const o=()=>{n.removeEventListener("success",c),n.removeEventListener("error",l)},c=()=>{i(Oe(n.result)),o()},l=()=>{r(n.error),o()};n.addEventListener("success",c),n.addEventListener("error",l)});return e.then(i=>{i instanceof IDBCursor&&ms.set(i,n)}).catch(()=>{}),hi.set(e,n),e}function Oa(n){if(Jn.has(n))return;const e=new Promise((i,r)=>{const o=()=>{n.removeEventListener("complete",c),n.removeEventListener("error",l),n.removeEventListener("abort",l)},c=()=>{i(),o()},l=()=>{r(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",c),n.addEventListener("error",l),n.addEventListener("abort",l)});Jn.set(n,e)}let Yn={get(n,e,i){if(n instanceof IDBTransaction){if(e==="done")return Jn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||_s.get(n);if(e==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Oe(n[e])},set(n,e,i){return n[e]=i,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Da(n){Yn=n(Yn)}function Na(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...i){const r=n.call($n(this),e,...i);return _s.set(r,e.sort?e.sort():[e]),Oe(r)}:Ca().includes(n)?function(...e){return n.apply($n(this),e),Oe(ms.get(this))}:function(...e){return Oe(n.apply($n(this),e))}}function La(n){return typeof n=="function"?Na(n):(n instanceof IDBTransaction&&Oa(n),Sa(n,ka())?new Proxy(n,Yn):n)}function Oe(n){if(n instanceof IDBRequest)return Pa(n);if(Hn.has(n))return Hn.get(n);const e=La(n);return e!==n&&(Hn.set(n,e),hi.set(e,n)),e}const $n=n=>hi.get(n);function Ua(n,e,{blocked:i,upgrade:r,blocking:o,terminated:c}={}){const l=indexedDB.open(n,e),p=Oe(l);return r&&l.addEventListener("upgradeneeded",v=>{r(Oe(l.result),v.oldVersion,v.newVersion,Oe(l.transaction),v)}),i&&l.addEventListener("blocked",v=>i(v.oldVersion,v.newVersion,v)),p.then(v=>{c&&v.addEventListener("close",()=>c()),o&&v.addEventListener("versionchange",E=>o(E.oldVersion,E.newVersion,E))}).catch(()=>{}),p}const Ma=["get","getKey","getAll","getAllKeys","count"],xa=["put","add","delete","clear"],zn=new Map;function kr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(zn.get(e))return zn.get(e);const i=e.replace(/FromIndex$/,""),r=e!==i,o=xa.includes(i);if(!(i in(r?IDBIndex:IDBObjectStore).prototype)||!(o||Ma.includes(i)))return;const c=async function(l,...p){const v=this.transaction(l,o?"readwrite":"readonly");let E=v.store;return r&&(E=E.index(p.shift())),(await Promise.all([E[i](...p),o&&v.done]))[0]};return zn.set(e,c),c}Da(n=>({...n,get:(e,i,r)=>kr(e,i)||n.get(e,i,r),has:(e,i)=>!!kr(e,i)||n.has(e,i)}));/**
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
 */class Fa{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(ja(i)){const r=i.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(i=>i).join(" ")}}function ja(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qn="@firebase/app",Cr="0.10.7";/**
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
 */const Be=new ci("@firebase/app"),Ba="@firebase/app-compat",Va="@firebase/analytics-compat",Ha="@firebase/analytics",$a="@firebase/app-check-compat",za="@firebase/app-check",Wa="@firebase/auth",Ga="@firebase/auth-compat",qa="@firebase/database",Ka="@firebase/database-compat",Xa="@firebase/functions",Ja="@firebase/functions-compat",Ya="@firebase/installations",Qa="@firebase/installations-compat",Za="@firebase/messaging",ec="@firebase/messaging-compat",tc="@firebase/performance",nc="@firebase/performance-compat",ic="@firebase/remote-config",rc="@firebase/remote-config-compat",sc="@firebase/storage",oc="@firebase/storage-compat",ac="@firebase/firestore",cc="@firebase/vertexai-preview",hc="@firebase/firestore-compat",lc="firebase",uc="10.12.4";/**
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
 */const Zn="[DEFAULT]",dc={[Qn]:"fire-core",[Ba]:"fire-core-compat",[Ha]:"fire-analytics",[Va]:"fire-analytics-compat",[za]:"fire-app-check",[$a]:"fire-app-check-compat",[Wa]:"fire-auth",[Ga]:"fire-auth-compat",[qa]:"fire-rtdb",[Ka]:"fire-rtdb-compat",[Xa]:"fire-fn",[Ja]:"fire-fn-compat",[Ya]:"fire-iid",[Qa]:"fire-iid-compat",[Za]:"fire-fcm",[ec]:"fire-fcm-compat",[tc]:"fire-perf",[nc]:"fire-perf-compat",[ic]:"fire-rc",[rc]:"fire-rc-compat",[sc]:"fire-gcs",[oc]:"fire-gcs-compat",[ac]:"fire-fst",[hc]:"fire-fst-compat",[cc]:"fire-vertex","fire-js":"fire-js",[lc]:"fire-js-all"};/**
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
 */const rn=new Map,fc=new Map,ei=new Map;function Pr(n,e){try{n.container.addComponent(e)}catch(i){Be.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,i)}}function Ve(n){const e=n.name;if(ei.has(e))return Be.debug(`There were multiple attempts to register component ${e}.`),!1;ei.set(e,n);for(const i of rn.values())Pr(i,n);for(const i of fc.values())Pr(i,n);return!0}function un(n,e){const i=n.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),n.container.getProvider(e)}function Pe(n){return n.settings!==void 0}/**
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
 */const pc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},De=new bt("app","Firebase",pc);/**
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
 */class gc{constructor(e,i,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ne("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw De.create("app-deleted",{appName:this._name})}}/**
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
 */const ze=uc;function vs(n,e={}){let i=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Zn,automaticDataCollectionEnabled:!1},e),o=r.name;if(typeof o!="string"||!o)throw De.create("bad-app-name",{appName:String(o)});if(i||(i=fs()),!i)throw De.create("no-options");const c=rn.get(o);if(c){if(nn(i,c.options)&&nn(r,c.config))return c;throw De.create("duplicate-app",{appName:o})}const l=new Ea(o);for(const v of ei.values())l.addComponent(v);const p=new gc(i,r,l);return rn.set(o,p),p}function li(n=Zn){const e=rn.get(n);if(!e&&n===Zn&&fs())return vs();if(!e)throw De.create("no-app",{appName:n});return e}function ce(n,e,i){var r;let o=(r=dc[n])!==null&&r!==void 0?r:n;i&&(o+=`-${i}`);const c=o.match(/\s|\//),l=e.match(/\s|\//);if(c||l){const p=[`Unable to register library "${o}" with version "${e}":`];c&&p.push(`library name "${o}" contains illegal characters (whitespace or "/")`),c&&l&&p.push("and"),l&&p.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Be.warn(p.join(" "));return}Ve(new Ne(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const mc="firebase-heartbeat-database",_c=1,Tt="firebase-heartbeat-store";let Wn=null;function ys(){return Wn||(Wn=Ua(mc,_c,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Tt)}catch(i){console.warn(i)}}}}).catch(n=>{throw De.create("idb-open",{originalErrorMessage:n.message})})),Wn}async function vc(n){try{const i=(await ys()).transaction(Tt),r=await i.objectStore(Tt).get(Is(n));return await i.done,r}catch(e){if(e instanceof ue)Be.warn(e.message);else{const i=De.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Be.warn(i.message)}}}async function Or(n,e){try{const r=(await ys()).transaction(Tt,"readwrite");await r.objectStore(Tt).put(e,Is(n)),await r.done}catch(i){if(i instanceof ue)Be.warn(i.message);else{const r=De.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});Be.warn(r.message)}}}function Is(n){return`${n.name}!${n.options.appId}`}/**
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
 */const yc=1024,Ic=30*24*60*60*1e3;class wc{constructor(e){this.container=e,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new Tc(i),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,i;const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=Dr();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(l=>l.date===c)))return this._heartbeatsCache.heartbeats.push({date:c,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const p=new Date(l.date).valueOf();return Date.now()-p<=Ic}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=Dr(),{heartbeatsToSend:r,unsentEntries:o}=Ec(this._heartbeatsCache.heartbeats),c=tn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=i,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}}function Dr(){return new Date().toISOString().substring(0,10)}function Ec(n,e=yc){const i=[];let r=n.slice();for(const o of n){const c=i.find(l=>l.agent===o.agent);if(c){if(c.dates.push(o.date),Nr(i)>e){c.dates.pop();break}}else if(i.push({agent:o.agent,dates:[o.date]}),Nr(i)>e){i.pop();break}r=r.slice(1)}return{heartbeatsToSend:i,unsentEntries:r}}class Tc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return la()?ua().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await vc(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return Or(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return Or(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Nr(n){return tn(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Ac(n){Ve(new Ne("platform-logger",e=>new Fa(e),"PRIVATE")),Ve(new Ne("heartbeat",e=>new wc(e),"PRIVATE")),ce(Qn,Cr,n),ce(Qn,Cr,"esm2017"),ce("fire-js","")}Ac("");/**
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
 */const ws="firebasestorage.googleapis.com",Es="storageBucket",bc=2*60*1e3,Rc=10*60*1e3;/**
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
 */class H extends ue{constructor(e,i,r=0){super(Gn(e),`Firebase Storage: ${i} (${Gn(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,H.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Gn(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var V;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(V||(V={}));function Gn(n){return"storage/"+n}function Ts(){const n="An unknown error occurred, please check the error payload for server response.";return new H(V.UNKNOWN,n)}function Sc(n){return new H(V.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function kc(n){return new H(V.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Cc(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new H(V.UNAUTHENTICATED,n)}function Pc(){return new H(V.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Oc(n){return new H(V.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Dc(){return new H(V.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Nc(){return new H(V.CANCELED,"User canceled the upload/download.")}function Lc(n){return new H(V.INVALID_URL,"Invalid URL '"+n+"'.")}function Uc(n){return new H(V.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Mc(){return new H(V.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Es+"' property when initializing the app?")}function xc(){return new H(V.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function ti(n){return new H(V.INVALID_ARGUMENT,n)}function As(){return new H(V.APP_DELETED,"The Firebase app was deleted.")}function Fc(n){return new H(V.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function wt(n){throw new H(V.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class ie{constructor(e,i){this.bucket=e,this.path_=i}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,i){let r;try{r=ie.makeFromUrl(e,i)}catch{return new ie(e,"")}if(r.path==="")return r;throw Uc(e)}static makeFromUrl(e,i){let r=null;const o="([A-Za-z0-9.\\-_]+)";function c(F){F.path.charAt(F.path.length-1)==="/"&&(F.path_=F.path_.slice(0,-1))}const l="(/(.*))?$",p=new RegExp("^gs://"+o+l,"i"),v={bucket:1,path:3};function E(F){F.path_=decodeURIComponent(F.path)}const A="v[A-Za-z0-9_]+",k=i.replace(/[.]/g,"\\."),R="(/([^?#]*).*)?$",L=new RegExp(`^https?://${k}/${A}/b/${o}/o${R}`,"i"),S={bucket:1,path:3},M=i===ws?"(?:storage.googleapis.com|storage.cloud.google.com)":i,C="([^?#]*)",ne=new RegExp(`^https?://${M}/${o}/${C}`,"i"),x=[{regex:p,indices:v,postModify:c},{regex:L,indices:S,postModify:E},{regex:ne,indices:{bucket:1,path:2},postModify:E}];for(let F=0;F<x.length;F++){const se=x[F],B=se.regex.exec(e);if(B){const _=B[se.indices.bucket];let u=B[se.indices.path];u||(u=""),r=new ie(_,u),se.postModify(r);break}}if(r==null)throw Lc(e);return r}}class jc{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Bc(n,e,i){let r=1,o=null,c=null,l=!1,p=0;function v(){return p===2}let E=!1;function A(...C){E||(E=!0,e.apply(null,C))}function k(C){o=setTimeout(()=>{o=null,n(L,v())},C)}function R(){c&&clearTimeout(c)}function L(C,...ne){if(E){R();return}if(C){R(),A.call(null,C,...ne);return}if(v()||l){R(),A.call(null,C,...ne);return}r<64&&(r*=2);let x;p===1?(p=2,x=0):x=(r+Math.random())*1e3,k(x)}let S=!1;function M(C){S||(S=!0,R(),!E&&(o!==null?(C||(p=2),clearTimeout(o),k(0)):C||(p=1)))}return k(0),c=setTimeout(()=>{l=!0,M(!0)},i),M}function Vc(n){n(!1)}/**
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
 */function Hc(n){return n!==void 0}function $c(n){return typeof n=="object"&&!Array.isArray(n)}function bs(n){return typeof n=="string"||n instanceof String}function Lr(n,e,i,r){if(r<e)throw ti(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>i)throw ti(`Invalid value for '${n}'. Expected ${i} or less.`)}/**
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
 */function Rs(n,e,i){let r=e;return i==null&&(r=`https://${e}`),`${i}://${r}/v0${n}`}function Ss(n){const e=encodeURIComponent;let i="?";for(const r in n)if(n.hasOwnProperty(r)){const o=e(r)+"="+e(n[r]);i=i+o+"&"}return i=i.slice(0,-1),i}/**
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
 */var Fe;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Fe||(Fe={}));/**
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
 */function zc(n,e){const i=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,c=e.indexOf(n)!==-1;return i||o||c}/**
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
 */class Wc{constructor(e,i,r,o,c,l,p,v,E,A,k,R=!0){this.url_=e,this.method_=i,this.headers_=r,this.body_=o,this.successCodes_=c,this.additionalRetryCodes_=l,this.callback_=p,this.errorCallback_=v,this.timeout_=E,this.progressCallback_=A,this.connectionFactory_=k,this.retry=R,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((L,S)=>{this.resolve_=L,this.reject_=S,this.start_()})}start_(){const e=(r,o)=>{if(o){r(!1,new qt(!1,null,!0));return}const c=this.connectionFactory_();this.pendingConnection_=c;const l=p=>{const v=p.loaded,E=p.lengthComputable?p.total:-1;this.progressCallback_!==null&&this.progressCallback_(v,E)};this.progressCallback_!==null&&c.addUploadProgressListener(l),c.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&c.removeUploadProgressListener(l),this.pendingConnection_=null;const p=c.getErrorCode()===Fe.NO_ERROR,v=c.getStatus();if(!p||zc(v,this.additionalRetryCodes_)&&this.retry){const A=c.getErrorCode()===Fe.ABORT;r(!1,new qt(!1,null,A));return}const E=this.successCodes_.indexOf(v)!==-1;r(!0,new qt(E,c))})},i=(r,o)=>{const c=this.resolve_,l=this.reject_,p=o.connection;if(o.wasSuccessCode)try{const v=this.callback_(p,p.getResponse());Hc(v)?c(v):c()}catch(v){l(v)}else if(p!==null){const v=Ts();v.serverResponse=p.getErrorText(),this.errorCallback_?l(this.errorCallback_(p,v)):l(v)}else if(o.canceled){const v=this.appDelete_?As():Nc();l(v)}else{const v=Dc();l(v)}};this.canceled_?i(!1,new qt(!1,null,!0)):this.backoffId_=Bc(e,i,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Vc(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class qt{constructor(e,i,r){this.wasSuccessCode=e,this.connection=i,this.canceled=!!r}}function Gc(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function qc(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Kc(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Xc(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function Jc(n,e,i,r,o,c,l=!0){const p=Ss(n.urlParams),v=n.url+p,E=Object.assign({},n.headers);return Kc(E,e),Gc(E,i),qc(E,c),Xc(E,r),new Wc(v,n.method,E,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,l)}/**
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
 */function ks(n){let e;try{e=JSON.parse(n)}catch{return null}return $c(e)?e:null}/**
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
 */function Yc(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function Qc(n,e){const i=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?i:n+"/"+i}function Cs(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function Zc(n,e){return e}class te{constructor(e,i,r,o){this.server=e,this.local=i||e,this.writable=!!r,this.xform=o||Zc}}let Kt=null;function eh(n){return!bs(n)||n.length<2?n:Cs(n)}function th(){if(Kt)return Kt;const n=[];n.push(new te("bucket")),n.push(new te("generation")),n.push(new te("metageneration")),n.push(new te("name","fullPath",!0));function e(c,l){return eh(l)}const i=new te("name");i.xform=e,n.push(i);function r(c,l){return l!==void 0?Number(l):l}const o=new te("size");return o.xform=r,n.push(o),n.push(new te("timeCreated")),n.push(new te("updated")),n.push(new te("md5Hash",null,!0)),n.push(new te("cacheControl",null,!0)),n.push(new te("contentDisposition",null,!0)),n.push(new te("contentEncoding",null,!0)),n.push(new te("contentLanguage",null,!0)),n.push(new te("contentType",null,!0)),n.push(new te("metadata","customMetadata",!0)),Kt=n,Kt}function nh(n,e){function i(){const r=n.bucket,o=n.fullPath,c=new ie(r,o);return e._makeStorageReference(c)}Object.defineProperty(n,"ref",{get:i})}function ih(n,e,i){const r={};r.type="file";const o=i.length;for(let c=0;c<o;c++){const l=i[c];r[l.local]=l.xform(r,e[l.server])}return nh(r,n),r}function rh(n,e,i){const r=ks(e);return r===null?null:ih(n,r,i)}function sh(n,e,i,r){const o=ks(e);if(o===null||!bs(o.downloadTokens))return null;const c=o.downloadTokens;if(c.length===0)return null;const l=encodeURIComponent;return c.split(",").map(E=>{const A=n.bucket,k=n.fullPath,R="/b/"+l(A)+"/o/"+l(k),L=Rs(R,i,r),S=Ss({alt:"media",token:E});return L+S})[0]}class oh{constructor(e,i,r,o){this.url=e,this.method=i,this.handler=r,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function ah(n){if(!n)throw Ts()}function ch(n,e){function i(r,o){const c=rh(n,o,e);return ah(c!==null),sh(c,o,n.host,n._protocol)}return i}function hh(n){function e(i,r){let o;return i.getStatus()===401?i.getErrorText().includes("Firebase App Check token is invalid")?o=Pc():o=Cc():i.getStatus()===402?o=kc(n.bucket):i.getStatus()===403?o=Oc(n.path):o=r,o.status=i.getStatus(),o.serverResponse=r.serverResponse,o}return e}function lh(n){const e=hh(n);function i(r,o){let c=e(r,o);return r.getStatus()===404&&(c=Sc(n.path)),c.serverResponse=o.serverResponse,c}return i}function uh(n,e,i){const r=e.fullServerUrl(),o=Rs(r,n.host,n._protocol),c="GET",l=n.maxOperationRetryTime,p=new oh(o,c,ch(n,i),l);return p.errorHandler=lh(e),p}class dh{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Fe.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Fe.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Fe.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,i,r,o){if(this.sent_)throw wt("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(i,e,!0),o!==void 0)for(const c in o)o.hasOwnProperty(c)&&this.xhr_.setRequestHeader(c,o[c].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw wt("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw wt("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw wt("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw wt("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class fh extends dh{initXhr(){this.xhr_.responseType="text"}}function ph(){return new fh}/**
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
 */class He{constructor(e,i){this._service=e,i instanceof ie?this._location=i:this._location=ie.makeFromUrl(i,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,i){return new He(e,i)}get root(){const e=new ie(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Cs(this._location.path)}get storage(){return this._service}get parent(){const e=Yc(this._location.path);if(e===null)return null;const i=new ie(this._location.bucket,e);return new He(this._service,i)}_throwIfRoot(e){if(this._location.path==="")throw Fc(e)}}function gh(n){n._throwIfRoot("getDownloadURL");const e=uh(n.storage,n._location,th());return n.storage.makeRequestWithTokens(e,ph).then(i=>{if(i===null)throw xc();return i})}function mh(n,e){const i=Qc(n._location.path,e),r=new ie(n._location.bucket,i);return new He(n.storage,r)}/**
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
 */function _h(n){return/^[A-Za-z]+:\/\//.test(n)}function vh(n,e){return new He(n,e)}function Ps(n,e){if(n instanceof ui){const i=n;if(i._bucket==null)throw Mc();const r=new He(i,i._bucket);return e!=null?Ps(r,e):r}else return e!==void 0?mh(n,e):n}function yh(n,e){if(e&&_h(e)){if(n instanceof ui)return vh(n,e);throw ti("To use ref(service, url), the first argument must be a Storage instance.")}else return Ps(n,e)}function Ur(n,e){const i=e==null?void 0:e[Es];return i==null?null:ie.makeFromBucketSpec(i,n)}function Ih(n,e,i,r={}){n.host=`${e}:${i}`,n._protocol="http";const{mockUserToken:o}=r;o&&(n._overrideAuthToken=typeof o=="string"?o:gs(o,n.app.options.projectId))}class ui{constructor(e,i,r,o,c){this.app=e,this._authProvider=i,this._appCheckProvider=r,this._url=o,this._firebaseVersion=c,this._bucket=null,this._host=ws,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=bc,this._maxUploadRetryTime=Rc,this._requests=new Set,o!=null?this._bucket=ie.makeFromBucketSpec(o,this._host):this._bucket=Ur(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ie.makeFromBucketSpec(this._url,e):this._bucket=Ur(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Lr("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Lr("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const i=await e.getToken();if(i!==null)return i.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new He(this,e)}_makeRequest(e,i,r,o,c=!0){if(this._deleted)return new jc(As());{const l=Jc(e,this._appId,r,o,i,this._firebaseVersion,c);return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}}async makeRequestWithTokens(e,i){const[r,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,i,r,o).getPromise()}}const Mr="@firebase/storage",xr="0.12.6";/**
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
 */const Os="storage";function wh(n){return n=Ie(n),gh(n)}function Eh(n,e){return n=Ie(n),yh(n,e)}function Th(n=li(),e){n=Ie(n);const r=un(n,Os).getImmediate({identifier:e}),o=ds("storage");return o&&Ah(r,...o),r}function Ah(n,e,i,r={}){Ih(n,e,i,r)}function bh(n,{instanceIdentifier:e}){const i=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new ui(i,r,o,e,ze)}function Rh(){Ve(new Ne(Os,bh,"PUBLIC").setMultipleInstances(!0)),ce(Mr,xr,""),ce(Mr,xr,"esm2017")}Rh();var Sh="firebase",kh="10.12.4";/**
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
 */ce(Sh,kh,"app");function Ds(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ch=Ds,Ns=new bt("auth","Firebase",Ds());/**
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
 */const sn=new ci("@firebase/auth");function Ph(n,...e){sn.logLevel<=D.WARN&&sn.warn(`Auth (${ze}): ${n}`,...e)}function Yt(n,...e){sn.logLevel<=D.ERROR&&sn.error(`Auth (${ze}): ${n}`,...e)}/**
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
 */function ve(n,...e){throw di(n,...e)}function he(n,...e){return di(n,...e)}function Ls(n,e,i){const r=Object.assign(Object.assign({},Ch()),{[e]:i});return new bt("auth","Firebase",r).create(e,{appName:n.name})}function je(n){return Ls(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function di(n,...e){if(typeof n!="string"){const i=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(i,...r)}return Ns.create(n,...e)}function b(n,e,...i){if(!n)throw di(e,...i)}function ge(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Yt(e),new Error(e)}function ye(n,e){n||ge(e)}/**
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
 */function ni(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Oh(){return Fr()==="http:"||Fr()==="https:"}function Fr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Dh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Oh()||aa()||"connection"in navigator)?navigator.onLine:!0}function Nh(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class St{constructor(e,i){this.shortDelay=e,this.longDelay=i,ye(i>e,"Short delay should be less than long delay!"),this.isMobile=oa()||ca()}get(){return Dh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function fi(n,e){ye(n.emulator,"Emulator should always be set here");const{url:i}=n.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}/**
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
 */class Us{static initialize(e,i,r){this.fetchImpl=e,i&&(this.headersImpl=i),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ge("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ge("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ge("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Lh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Uh=new St(3e4,6e4);function pi(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function it(n,e,i,r,o={}){return Ms(n,o,async()=>{let c={},l={};r&&(e==="GET"?l=r:c={body:JSON.stringify(r)});const p=Rt(Object.assign({key:n.config.apiKey},l)).slice(1),v=await n._getAdditionalHeaders();return v["Content-Type"]="application/json",n.languageCode&&(v["X-Firebase-Locale"]=n.languageCode),Us.fetch()(xs(n,n.config.apiHost,i,p),Object.assign({method:e,headers:v,referrerPolicy:"no-referrer"},c))})}async function Ms(n,e,i){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Lh),e);try{const o=new xh(n),c=await Promise.race([i(),o.promise]);o.clearNetworkTimeout();const l=await c.json();if("needConfirmation"in l)throw Xt(n,"account-exists-with-different-credential",l);if(c.ok&&!("errorMessage"in l))return l;{const p=c.ok?l.errorMessage:l.error.message,[v,E]=p.split(" : ");if(v==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xt(n,"credential-already-in-use",l);if(v==="EMAIL_EXISTS")throw Xt(n,"email-already-in-use",l);if(v==="USER_DISABLED")throw Xt(n,"user-disabled",l);const A=r[v]||v.toLowerCase().replace(/[_\s]+/g,"-");if(E)throw Ls(n,A,E);ve(n,A)}}catch(o){if(o instanceof ue)throw o;ve(n,"network-request-failed",{message:String(o)})}}async function Mh(n,e,i,r,o={}){const c=await it(n,e,i,r,o);return"mfaPendingCredential"in c&&ve(n,"multi-factor-auth-required",{_serverResponse:c}),c}function xs(n,e,i,r){const o=`${e}${i}?${r}`;return n.config.emulator?fi(n.config,o):`${n.config.apiScheme}://${o}`}class xh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((i,r)=>{this.timer=setTimeout(()=>r(he(this.auth,"network-request-failed")),Uh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Xt(n,e,i){const r={appName:n.name};i.email&&(r.email=i.email),i.phoneNumber&&(r.phoneNumber=i.phoneNumber);const o=he(n,e,r);return o.customData._tokenResponse=i,o}/**
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
 */async function Fh(n,e){return it(n,"POST","/v1/accounts:delete",e)}async function Fs(n,e){return it(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Et(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jh(n,e=!1){const i=Ie(n),r=await i.getIdToken(e),o=gi(r);b(o&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,l=c==null?void 0:c.sign_in_provider;return{claims:o,token:r,authTime:Et(qn(o.auth_time)),issuedAtTime:Et(qn(o.iat)),expirationTime:Et(qn(o.exp)),signInProvider:l||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function qn(n){return Number(n)*1e3}function gi(n){const[e,i,r]=n.split(".");if(e===void 0||i===void 0||r===void 0)return Yt("JWT malformed, contained fewer than 3 sections"),null;try{const o=ls(i);return o?JSON.parse(o):(Yt("Failed to decode base64 JWT payload"),null)}catch(o){return Yt("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function jr(n){const e=gi(n);return b(e,"internal-error"),b(typeof e.exp<"u","internal-error"),b(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function At(n,e,i=!1){if(i)return e;try{return await e}catch(r){throw r instanceof ue&&Bh(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Bh({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Vh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var i;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((i=this.user.stsTokenManager.expirationTime)!==null&&i!==void 0?i:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const i=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ii{constructor(e,i){this.createdAt=e,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=Et(this.lastLoginAt),this.creationTime=Et(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function on(n){var e;const i=n.auth,r=await n.getIdToken(),o=await At(n,Fs(i,{idToken:r}));b(o==null?void 0:o.users.length,i,"internal-error");const c=o.users[0];n._notifyReloadListener(c);const l=!((e=c.providerUserInfo)===null||e===void 0)&&e.length?js(c.providerUserInfo):[],p=$h(n.providerData,l),v=n.isAnonymous,E=!(n.email&&c.passwordHash)&&!(p!=null&&p.length),A=v?E:!1,k={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:p,metadata:new ii(c.createdAt,c.lastLoginAt),isAnonymous:A};Object.assign(n,k)}async function Hh(n){const e=Ie(n);await on(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $h(n,e){return[...n.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function js(n){return n.map(e=>{var{providerId:i}=e,r=oi(e,["providerId"]);return{providerId:i,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function zh(n,e){const i=await Ms(n,{},async()=>{const r=Rt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:c}=n.config,l=xs(n,o,"/v1/token",`key=${c}`),p=await n._getAdditionalHeaders();return p["Content-Type"]="application/x-www-form-urlencoded",Us.fetch()(l,{method:"POST",headers:p,body:r})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function Wh(n,e){return it(n,"POST","/v2/accounts:revokeToken",pi(n,e))}/**
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
 */class Ye{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b(typeof e.idToken<"u","internal-error"),b(typeof e.refreshToken<"u","internal-error");const i="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,i)}updateFromIdToken(e){b(e.length!==0,"internal-error");const i=jr(e);this.updateTokensAndExpiration(e,null,i)}async getToken(e,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(b(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,i){const{accessToken:r,refreshToken:o,expiresIn:c}=await zh(e,i);this.updateTokensAndExpiration(r,o,Number(c))}updateTokensAndExpiration(e,i,r){this.refreshToken=i||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,i){const{refreshToken:r,accessToken:o,expirationTime:c}=i,l=new Ye;return r&&(b(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),o&&(b(typeof o=="string","internal-error",{appName:e}),l.accessToken=o),c&&(b(typeof c=="number","internal-error",{appName:e}),l.expirationTime=c),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ye,this.toJSON())}_performRefresh(){return ge("not implemented")}}/**
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
 */function be(n,e){b(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class me{constructor(e){var{uid:i,auth:r,stsTokenManager:o}=e,c=oi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Vh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new ii(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(e){const i=await At(this,this.stsTokenManager.getToken(this.auth,e));return b(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(e){return jh(this,e)}reload(){return Hh(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(i=>Object.assign({},i)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const i=new me(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return i.metadata._copy(this.metadata),i}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,i=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),i&&await on(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pe(this.auth.app))return Promise.reject(je(this.auth));const e=await this.getIdToken();return await At(this,Fh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,i){var r,o,c,l,p,v,E,A;const k=(r=i.displayName)!==null&&r!==void 0?r:void 0,R=(o=i.email)!==null&&o!==void 0?o:void 0,L=(c=i.phoneNumber)!==null&&c!==void 0?c:void 0,S=(l=i.photoURL)!==null&&l!==void 0?l:void 0,M=(p=i.tenantId)!==null&&p!==void 0?p:void 0,C=(v=i._redirectEventId)!==null&&v!==void 0?v:void 0,ne=(E=i.createdAt)!==null&&E!==void 0?E:void 0,Q=(A=i.lastLoginAt)!==null&&A!==void 0?A:void 0,{uid:x,emailVerified:F,isAnonymous:se,providerData:B,stsTokenManager:_}=i;b(x&&_,e,"internal-error");const u=Ye.fromJSON(this.name,_);b(typeof x=="string",e,"internal-error"),be(k,e.name),be(R,e.name),b(typeof F=="boolean",e,"internal-error"),b(typeof se=="boolean",e,"internal-error"),be(L,e.name),be(S,e.name),be(M,e.name),be(C,e.name),be(ne,e.name),be(Q,e.name);const f=new me({uid:x,auth:e,email:R,emailVerified:F,displayName:k,isAnonymous:se,photoURL:S,phoneNumber:L,tenantId:M,stsTokenManager:u,createdAt:ne,lastLoginAt:Q});return B&&Array.isArray(B)&&(f.providerData=B.map(g=>Object.assign({},g))),C&&(f._redirectEventId=C),f}static async _fromIdTokenResponse(e,i,r=!1){const o=new Ye;o.updateFromServerResponse(i);const c=new me({uid:i.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await on(c),c}static async _fromGetAccountInfoResponse(e,i,r){const o=i.users[0];b(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?js(o.providerUserInfo):[],l=!(o.email&&o.passwordHash)&&!(c!=null&&c.length),p=new Ye;p.updateFromIdToken(r);const v=new me({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:l}),E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new ii(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(c!=null&&c.length)};return Object.assign(v,E),v}}/**
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
 */const Br=new Map;function _e(n){ye(n instanceof Function,"Expected a class definition");let e=Br.get(n);return e?(ye(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Br.set(n,e),e)}/**
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
 */class Bs{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,i){this.storage[e]=i}async _get(e){const i=this.storage[e];return i===void 0?null:i}async _remove(e){delete this.storage[e]}_addListener(e,i){}_removeListener(e,i){}}Bs.type="NONE";const Vr=Bs;/**
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
 */function Qt(n,e,i){return`firebase:${n}:${e}:${i}`}class Qe{constructor(e,i,r){this.persistence=e,this.auth=i,this.userKey=r;const{config:o,name:c}=this.auth;this.fullUserKey=Qt(this.userKey,o.apiKey,c),this.fullPersistenceKey=Qt("persistence",o.apiKey,c),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?me._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,i,r="authUser"){if(!i.length)return new Qe(_e(Vr),e,r);const o=(await Promise.all(i.map(async E=>{if(await E._isAvailable())return E}))).filter(E=>E);let c=o[0]||_e(Vr);const l=Qt(r,e.config.apiKey,e.name);let p=null;for(const E of i)try{const A=await E._get(l);if(A){const k=me._fromJSON(e,A);E!==c&&(p=k),c=E;break}}catch{}const v=o.filter(E=>E._shouldAllowMigration);return!c._shouldAllowMigration||!v.length?new Qe(c,e,r):(c=v[0],p&&await c._set(l,p.toJSON()),await Promise.all(i.map(async E=>{if(E!==c)try{await E._remove(l)}catch{}})),new Qe(c,e,r))}}/**
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
 */function Hr(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($s(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vs(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ws(e))return"Blackberry";if(Gs(e))return"Webos";if(mi(e))return"Safari";if((e.includes("chrome/")||Hs(e))&&!e.includes("edge/"))return"Chrome";if(zs(e))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(i);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Vs(n=Y()){return/firefox\//i.test(n)}function mi(n=Y()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Hs(n=Y()){return/crios\//i.test(n)}function $s(n=Y()){return/iemobile/i.test(n)}function zs(n=Y()){return/android/i.test(n)}function Ws(n=Y()){return/blackberry/i.test(n)}function Gs(n=Y()){return/webos/i.test(n)}function dn(n=Y()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Gh(n=Y()){var e;return dn(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qh(){return ha()&&document.documentMode===10}function qs(n=Y()){return dn(n)||zs(n)||Gs(n)||Ws(n)||/windows phone/i.test(n)||$s(n)}function Kh(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ks(n,e=[]){let i;switch(n){case"Browser":i=Hr(Y());break;case"Worker":i=`${Hr(Y())}-${n}`;break;default:i=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${i}/JsCore/${ze}/${r}`}/**
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
 */class Xh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,i){const r=c=>new Promise((l,p)=>{try{const v=e(c);l(v)}catch(v){p(v)}});r.onAbort=i,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const i=[];try{for(const r of this.queue)await r(e),r.onAbort&&i.push(r.onAbort)}catch(r){i.reverse();for(const o of i)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Jh(n,e={}){return it(n,"GET","/v2/passwordPolicy",pi(n,e))}/**
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
 */const Yh=6;class Qh{constructor(e){var i,r,o,c;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(i=l.minPasswordLength)!==null&&i!==void 0?i:Yh,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(c=e.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var i,r,o,c,l,p;const v={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,v),this.validatePasswordCharacterOptions(e,v),v.isValid&&(v.isValid=(i=v.meetsMinPasswordLength)!==null&&i!==void 0?i:!0),v.isValid&&(v.isValid=(r=v.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),v.isValid&&(v.isValid=(o=v.containsLowercaseLetter)!==null&&o!==void 0?o:!0),v.isValid&&(v.isValid=(c=v.containsUppercaseLetter)!==null&&c!==void 0?c:!0),v.isValid&&(v.isValid=(l=v.containsNumericCharacter)!==null&&l!==void 0?l:!0),v.isValid&&(v.isValid=(p=v.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),v}validatePasswordLengthOptions(e,i){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(i.meetsMinPasswordLength=e.length>=r),o&&(i.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(i,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,i,r,o,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
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
 */class Zh{constructor(e,i,r,o){this.app=e,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $r(this),this.idTokenSubscription=new $r(this),this.beforeStateQueue=new Xh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ns,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,i){return i&&(this._popupRedirectResolver=_e(i)),this._initializationPromise=this.queue(async()=>{var r,o;if(!this._deleted&&(this.persistenceManager=await Qe.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const i=await Fs(this,{idToken:e}),r=await me._fromGetAccountInfoResponse(this,i,e);await this.directlySetCurrentUser(r)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Pe(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(p,p))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,c=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId,p=o==null?void 0:o._redirectEventId,v=await this.tryRedirectSignIn(e);(!l||l===p)&&(v!=null&&v.user)&&(o=v.user,c=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(o)}catch(l){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(e){try{await on(e)}catch(i){if((i==null?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Nh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pe(this.app))return Promise.reject(je(this));const i=e?Ie(e):null;return i&&b(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(e,i=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pe(this.app)?Promise.reject(je(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pe(this.app)?Promise.reject(je(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_e(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Jh(this),i=new Qh(e);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new bt("auth","Firebase",e())}onAuthStateChanged(e,i,r){return this.registerStateListener(this.authStateSubscription,e,i,r)}beforeAuthStateChanged(e,i){return this.beforeStateQueue.pushCallback(e,i)}onIdTokenChanged(e,i,r){return this.registerStateListener(this.idTokenSubscription,e,i,r)}authStateReady(){return new Promise((e,i)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},i)}})}async revokeAccessToken(e){if(this.currentUser){const i=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:i};this.tenantId!=null&&(r.tenantId=this.tenantId),await Wh(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,i){const r=await this.getOrInitRedirectPersistenceManager(i);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const i=e&&_e(e)||this._popupRedirectResolver;b(i,this,"argument-error"),this.redirectPersistenceManager=await Qe.create(this,[_e(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var i,r;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)===null||i===void 0?void 0:i._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(i=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&i!==void 0?i:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,i,r,o){if(this._deleted)return()=>{};const c=typeof i=="function"?i:i.next.bind(i);let l=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(b(p,this,"internal-error"),p.then(()=>{l||c(this.currentUser)}),typeof i=="function"){const v=e.addObserver(i,r,o);return()=>{l=!0,v()}}else{const v=e.addObserver(i);return()=>{l=!0,v()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ks(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(i["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(i["X-Firebase-AppCheck"]=o),i}async _getAppCheckToken(){var e;const i=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return i!=null&&i.error&&Ph(`Error while retrieving App Check token: ${i.error}`),i==null?void 0:i.token}}function _i(n){return Ie(n)}class $r{constructor(e){this.auth=e,this.observer=null,this.addObserver=ma(i=>this.observer=i)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let vi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function el(n){vi=n}function tl(n){return vi.loadJS(n)}function nl(){return vi.gapiScript}function il(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function rl(n,e){const i=un(n,"auth");if(i.isInitialized()){const o=i.getImmediate(),c=i.getOptions();if(nn(c,e??{}))return o;ve(o,"already-initialized")}return i.initialize({options:e})}function sl(n,e){const i=(e==null?void 0:e.persistence)||[],r=(Array.isArray(i)?i:[i]).map(_e);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ol(n,e,i){const r=_i(n);b(r._canInitEmulator,r,"emulator-config-failed"),b(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!1,c=Xs(e),{host:l,port:p}=al(e),v=p===null?"":`:${p}`;r.config.emulator={url:`${c}//${l}${v}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:l,port:p,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})}),cl()}function Xs(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function al(n){const e=Xs(n),i=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!i)return{host:"",port:null};const r=i[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const c=o[1];return{host:c,port:zr(r.substr(c.length+1))}}else{const[c,l]=r.split(":");return{host:c,port:zr(l)}}}function zr(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function cl(){function n(){const e=document.createElement("p"),i=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Js{constructor(e,i){this.providerId=e,this.signInMethod=i}toJSON(){return ge("not implemented")}_getIdTokenResponse(e){return ge("not implemented")}_linkToIdToken(e,i){return ge("not implemented")}_getReauthenticationResolver(e){return ge("not implemented")}}/**
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
 */async function Ze(n,e){return Mh(n,"POST","/v1/accounts:signInWithIdp",pi(n,e))}/**
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
 */const hl="http://localhost";class $e extends Js{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const i=new $e(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(i.idToken=e.idToken),e.accessToken&&(i.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(i.nonce=e.nonce),e.pendingToken&&(i.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(i.accessToken=e.oauthToken,i.secret=e.oauthTokenSecret):ve("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o}=i,c=oi(i,["providerId","signInMethod"]);if(!r||!o)return null;const l=new $e(r,o);return l.idToken=c.idToken||void 0,l.accessToken=c.accessToken||void 0,l.secret=c.secret,l.nonce=c.nonce,l.pendingToken=c.pendingToken||null,l}_getIdTokenResponse(e){const i=this.buildRequest();return Ze(e,i)}_linkToIdToken(e,i){const r=this.buildRequest();return r.idToken=i,Ze(e,r)}_getReauthenticationResolver(e){const i=this.buildRequest();return i.autoCreate=!1,Ze(e,i)}buildRequest(){const e={requestUri:hl,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),e.postBody=Rt(i)}return e}}/**
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
 */class Ys{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class kt extends Ys{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Re extends kt{constructor(){super("facebook.com")}static credential(e){return $e._fromParams({providerId:Re.PROVIDER_ID,signInMethod:Re.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Re.credentialFromTaggedObject(e)}static credentialFromError(e){return Re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Re.credential(e.oauthAccessToken)}catch{return null}}}Re.FACEBOOK_SIGN_IN_METHOD="facebook.com";Re.PROVIDER_ID="facebook.com";/**
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
 */class Se extends kt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,i){return $e._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:i})}static credentialFromResult(e){return Se.credentialFromTaggedObject(e)}static credentialFromError(e){return Se.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:i,oauthAccessToken:r}=e;if(!i&&!r)return null;try{return Se.credential(i,r)}catch{return null}}}Se.GOOGLE_SIGN_IN_METHOD="google.com";Se.PROVIDER_ID="google.com";/**
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
 */class ke extends kt{constructor(){super("github.com")}static credential(e){return $e._fromParams({providerId:ke.PROVIDER_ID,signInMethod:ke.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ke.credentialFromTaggedObject(e)}static credentialFromError(e){return ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ke.credential(e.oauthAccessToken)}catch{return null}}}ke.GITHUB_SIGN_IN_METHOD="github.com";ke.PROVIDER_ID="github.com";/**
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
 */class Ce extends kt{constructor(){super("twitter.com")}static credential(e,i){return $e._fromParams({providerId:Ce.PROVIDER_ID,signInMethod:Ce.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:i})}static credentialFromResult(e){return Ce.credentialFromTaggedObject(e)}static credentialFromError(e){return Ce.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:i,oauthTokenSecret:r}=e;if(!i||!r)return null;try{return Ce.credential(i,r)}catch{return null}}}Ce.TWITTER_SIGN_IN_METHOD="twitter.com";Ce.PROVIDER_ID="twitter.com";/**
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
 */class tt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,i,r,o=!1){const c=await me._fromIdTokenResponse(e,r,o),l=Wr(r);return new tt({user:c,providerId:l,_tokenResponse:r,operationType:i})}static async _forOperation(e,i,r){await e._updateTokensIfNecessary(r,!0);const o=Wr(r);return new tt({user:e,providerId:o,_tokenResponse:r,operationType:i})}}function Wr(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class an extends ue{constructor(e,i,r,o){var c;super(i.code,i.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,an.prototype),this.customData={appName:e.name,tenantId:(c=e.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:i.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,i,r,o){return new an(e,i,r,o)}}function Qs(n,e,i,r){return(e==="reauthenticate"?i._getReauthenticationResolver(n):i._getIdTokenResponse(n)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?an._fromErrorAndOperation(n,c,e,r):c})}async function ll(n,e,i=!1){const r=await At(n,e._linkToIdToken(n.auth,await n.getIdToken()),i);return tt._forOperation(n,"link",r)}/**
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
 */async function ul(n,e,i=!1){const{auth:r}=n;if(Pe(r.app))return Promise.reject(je(r));const o="reauthenticate";try{const c=await At(n,Qs(r,o,e,n),i);b(c.idToken,r,"internal-error");const l=gi(c.idToken);b(l,r,"internal-error");const{sub:p}=l;return b(n.uid===p,r,"user-mismatch"),tt._forOperation(n,o,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&ve(r,"user-mismatch"),c}}/**
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
 */async function dl(n,e,i=!1){if(Pe(n.app))return Promise.reject(je(n));const r="signIn",o=await Qs(n,r,e),c=await tt._fromIdTokenResponse(n,r,o);return i||await n._updateCurrentUser(c.user),c}function fl(n,e,i,r){return Ie(n).onIdTokenChanged(e,i,r)}function pl(n,e,i){return Ie(n).beforeAuthStateChanged(e,i)}const cn="__sak";/**
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
 */class Zs{constructor(e,i){this.storageRetriever=e,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(cn,"1"),this.storage.removeItem(cn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,i){return this.storage.setItem(e,JSON.stringify(i)),Promise.resolve()}_get(e){const i=this.storage.getItem(e);return Promise.resolve(i?JSON.parse(i):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function gl(){const n=Y();return mi(n)||dn(n)}const ml=1e3,_l=10;class eo extends Zs{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,i)=>this.onStorageEvent(e,i),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=gl()&&Kh(),this.fallbackToPolling=qs(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const i of Object.keys(this.listeners)){const r=this.storage.getItem(i),o=this.localCache[i];r!==o&&e(i,o,r)}}onStorageEvent(e,i=!1){if(!e.key){this.forAllChangedKeys((l,p,v)=>{this.notifyListeners(l,v)});return}const r=e.key;if(i?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const l=this.storage.getItem(r);if(e.newValue!==l)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!i)return}const o=()=>{const l=this.storage.getItem(r);!i&&this.localCache[r]===l||this.notifyListeners(r,l)},c=this.storage.getItem(r);qh()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,_l):o()}notifyListeners(e,i){this.localCache[e]=i;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,i,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:i,newValue:r}),!0)})},ml)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,i){await super._set(e,i),this.localCache[e]=JSON.stringify(i)}async _get(e){const i=await super._get(e);return this.localCache[e]=JSON.stringify(i),i}async _remove(e){await super._remove(e),delete this.localCache[e]}}eo.type="LOCAL";const vl=eo;/**
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
 */class to extends Zs{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,i){}_removeListener(e,i){}}to.type="SESSION";const no=to;/**
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
 */function yl(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
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
 */class fn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const i=this.receivers.find(o=>o.isListeningto(e));if(i)return i;const r=new fn(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const i=e,{eventId:r,eventType:o,data:c}=i.data,l=this.handlersMap[o];if(!(l!=null&&l.size))return;i.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const p=Array.from(l).map(async E=>E(i.origin,c)),v=await yl(p);i.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:v})}_subscribe(e,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(i)}_unsubscribe(e,i){this.handlersMap[e]&&i&&this.handlersMap[e].delete(i),(!i||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fn.receivers=[];/**
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
 */function yi(n="",e=10){let i="";for(let r=0;r<e;r++)i+=Math.floor(Math.random()*10);return n+i}/**
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
 */class Il{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,i,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,l;return new Promise((p,v)=>{const E=yi("",20);o.port1.start();const A=setTimeout(()=>{v(new Error("unsupported_event"))},r);l={messageChannel:o,onMessage(k){const R=k;if(R.data.eventId===E)switch(R.data.status){case"ack":clearTimeout(A),c=setTimeout(()=>{v(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),p(R.data.response);break;default:clearTimeout(A),clearTimeout(c),v(new Error("invalid_response"));break}}},this.handlers.add(l),o.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:E,data:i},[o.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
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
 */function le(){return window}function wl(n){le().location.href=n}/**
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
 */function io(){return typeof le().WorkerGlobalScope<"u"&&typeof le().importScripts=="function"}async function El(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Tl(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Al(){return io()?self:null}/**
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
 */const ro="firebaseLocalStorageDb",bl=1,hn="firebaseLocalStorage",so="fbase_key";class Ct{constructor(e){this.request=e}toPromise(){return new Promise((e,i)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function pn(n,e){return n.transaction([hn],e?"readwrite":"readonly").objectStore(hn)}function Rl(){const n=indexedDB.deleteDatabase(ro);return new Ct(n).toPromise()}function ri(){const n=indexedDB.open(ro,bl);return new Promise((e,i)=>{n.addEventListener("error",()=>{i(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(hn,{keyPath:so})}catch(o){i(o)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(hn)?e(r):(r.close(),await Rl(),e(await ri()))})})}async function Gr(n,e,i){const r=pn(n,!0).put({[so]:e,value:i});return new Ct(r).toPromise()}async function Sl(n,e){const i=pn(n,!1).get(e),r=await new Ct(i).toPromise();return r===void 0?null:r.value}function qr(n,e){const i=pn(n,!0).delete(e);return new Ct(i).toPromise()}const kl=800,Cl=3;class oo{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ri(),this.db)}async _withRetries(e){let i=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(i++>Cl)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return io()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fn._getInstance(Al()),this.receiver._subscribe("keyChanged",async(e,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(e,i)=>["keyChanged"])}async initializeSender(){var e,i;if(this.activeServiceWorker=await El(),!this.activeServiceWorker)return;this.sender=new Il(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((i=r[0])===null||i===void 0)&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Tl()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ri();return await Gr(e,cn,"1"),await qr(e,cn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,i){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gr(r,e,i)),this.localCache[e]=i,this.notifyServiceWorker(e)))}async _get(e){const i=await this._withRetries(r=>Sl(r,e));return this.localCache[e]=i,i}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(i=>qr(i,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const c=pn(o,!1).getAll();return new Ct(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const i=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:c}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),i.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),i.push(o));return i}notifyListeners(e,i){this.localCache[e]=i;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}oo.type="LOCAL";const Pl=oo;new St(3e4,6e4);/**
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
 */function Ol(n,e){return e?_e(e):(b(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ii extends Js{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ze(e,this._buildIdpRequest())}_linkToIdToken(e,i){return Ze(e,this._buildIdpRequest(i))}_getReauthenticationResolver(e){return Ze(e,this._buildIdpRequest())}_buildIdpRequest(e){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(i.idToken=e),i}}function Dl(n){return dl(n.auth,new Ii(n),n.bypassAuthState)}function Nl(n){const{auth:e,user:i}=n;return b(i,e,"internal-error"),ul(i,new Ii(n),n.bypassAuthState)}async function Ll(n){const{auth:e,user:i}=n;return b(i,e,"internal-error"),ll(i,new Ii(n),n.bypassAuthState)}/**
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
 */class ao{constructor(e,i,r,o,c=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(e,i)=>{this.pendingPromise={resolve:e,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:i,sessionId:r,postBody:o,tenantId:c,error:l,type:p}=e;if(l){this.reject(l);return}const v={auth:this.auth,requestUri:i,sessionId:r,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(v))}catch(E){this.reject(E)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Dl;case"linkViaPopup":case"linkViaRedirect":return Ll;case"reauthViaPopup":case"reauthViaRedirect":return Nl;default:ve(this.auth,"internal-error")}}resolve(e){ye(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ye(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ul=new St(2e3,1e4);class Je extends ao{constructor(e,i,r,o,c){super(e,i,o,c),this.provider=r,this.authWindow=null,this.pollId=null,Je.currentPopupAction&&Je.currentPopupAction.cancel(),Je.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){ye(this.filter.length===1,"Popup operations only handle one event");const e=yi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(he(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(he(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Je.currentPopupAction=null}pollUserCancellation(){const e=()=>{var i,r;if(!((r=(i=this.authWindow)===null||i===void 0?void 0:i.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(he(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ul.get())};e()}}Je.currentPopupAction=null;/**
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
 */const Ml="pendingRedirect",Zt=new Map;class xl extends ao{constructor(e,i,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,r),this.eventId=null}async execute(){let e=Zt.get(this.auth._key());if(!e){try{const r=await Fl(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(i){e=()=>Promise.reject(i)}Zt.set(this.auth._key(),e)}return this.bypassAuthState||Zt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const i=await this.auth._redirectUserForId(e.eventId);if(i)return this.user=i,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Fl(n,e){const i=Vl(e),r=Bl(n);if(!await r._isAvailable())return!1;const o=await r._get(i)==="true";return await r._remove(i),o}function jl(n,e){Zt.set(n._key(),e)}function Bl(n){return _e(n._redirectPersistence)}function Vl(n){return Qt(Ml,n.config.apiKey,n.name)}async function Hl(n,e,i=!1){if(Pe(n.app))return Promise.reject(je(n));const r=_i(n),o=Ol(r,e),l=await new xl(r,o,i).execute();return l&&!i&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,e)),l}/**
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
 */const $l=10*60*1e3;class zl{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let i=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(i=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Wl(e)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=e,i=!0)),i}sendToConsumer(e,i){var r;if(e.error&&!co(e)){const o=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";i.onError(he(this.auth,o))}else i.onAuthEvent(e)}isEventForConsumer(e,i){const r=i.eventId===null||!!e.eventId&&e.eventId===i.eventId;return i.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$l&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kr(e))}saveEventToCache(e){this.cachedEventUids.add(Kr(e)),this.lastProcessedEventTime=Date.now()}}function Kr(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function co({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Wl(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return co(n);default:return!1}}/**
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
 */async function Gl(n,e={}){return it(n,"GET","/v1/projects",e)}/**
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
 */const ql=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Kl=/^https?/;async function Xl(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Gl(n);for(const i of e)try{if(Jl(i))return}catch{}ve(n,"unauthorized-domain")}function Jl(n){const e=ni(),{protocol:i,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const l=new URL(n);return l.hostname===""&&r===""?i==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):i==="chrome-extension:"&&l.hostname===r}if(!Kl.test(i))return!1;if(ql.test(n))return r===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
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
 */const Yl=new St(3e4,6e4);function Xr(){const n=le().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let i=0;i<n.CP.length;i++)n.CP[i]=null}}function Ql(n){return new Promise((e,i)=>{var r,o,c;function l(){Xr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xr(),i(he(n,"network-request-failed"))},timeout:Yl.get()})}if(!((o=(r=le().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((c=le().gapi)===null||c===void 0)&&c.load)l();else{const p=il("iframefcb");return le()[p]=()=>{gapi.load?l():i(he(n,"network-request-failed"))},tl(`${nl()}?onload=${p}`).catch(v=>i(v))}}).catch(e=>{throw en=null,e})}let en=null;function Zl(n){return en=en||Ql(n),en}/**
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
 */const eu=new St(5e3,15e3),tu="__/auth/iframe",nu="emulator/auth/iframe",iu={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ru=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function su(n){const e=n.config;b(e.authDomain,n,"auth-domain-config-required");const i=e.emulator?fi(e,nu):`https://${n.config.authDomain}/${tu}`,r={apiKey:e.apiKey,appName:n.name,v:ze},o=ru.get(n.config.apiHost);o&&(r.eid=o);const c=n._getFrameworks();return c.length&&(r.fw=c.join(",")),`${i}?${Rt(r).slice(1)}`}async function ou(n){const e=await Zl(n),i=le().gapi;return b(i,n,"internal-error"),e.open({where:document.body,url:su(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iu,dontclear:!0},r=>new Promise(async(o,c)=>{await r.restyle({setHideOnLeave:!1});const l=he(n,"network-request-failed"),p=le().setTimeout(()=>{c(l)},eu.get());function v(){le().clearTimeout(p),o(r)}r.ping(v).then(v,()=>{c(l)})}))}/**
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
 */const au={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cu=500,hu=600,lu="_blank",uu="http://localhost";class Jr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function du(n,e,i,r=cu,o=hu){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let p="";const v=Object.assign(Object.assign({},au),{width:r.toString(),height:o.toString(),top:c,left:l}),E=Y().toLowerCase();i&&(p=Hs(E)?lu:i),Vs(E)&&(e=e||uu,v.scrollbars="yes");const A=Object.entries(v).reduce((R,[L,S])=>`${R}${L}=${S},`,"");if(Gh(E)&&p!=="_self")return fu(e||"",p),new Jr(null);const k=window.open(e||"",p,A);b(k,n,"popup-blocked");try{k.focus()}catch{}return new Jr(k)}function fu(n,e){const i=document.createElement("a");i.href=n,i.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(r)}/**
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
 */const pu="__/auth/handler",gu="emulator/auth/handler",mu=encodeURIComponent("fac");async function Yr(n,e,i,r,o,c){b(n.config.authDomain,n,"auth-domain-config-required"),b(n.config.apiKey,n,"invalid-api-key");const l={apiKey:n.config.apiKey,appName:n.name,authType:i,redirectUrl:r,v:ze,eventId:o};if(e instanceof Ys){e.setDefaultLanguage(n.languageCode),l.providerId=e.providerId||"",ga(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[A,k]of Object.entries({}))l[A]=k}if(e instanceof kt){const A=e.getScopes().filter(k=>k!=="");A.length>0&&(l.scopes=A.join(","))}n.tenantId&&(l.tid=n.tenantId);const p=l;for(const A of Object.keys(p))p[A]===void 0&&delete p[A];const v=await n._getAppCheckToken(),E=v?`#${mu}=${encodeURIComponent(v)}`:"";return`${_u(n)}?${Rt(p).slice(1)}${E}`}function _u({config:n}){return n.emulator?fi(n,gu):`https://${n.authDomain}/${pu}`}/**
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
 */const Kn="webStorageSupport";class vu{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=no,this._completeRedirectFn=Hl,this._overrideRedirectResult=jl}async _openPopup(e,i,r,o){var c;ye((c=this.eventManagers[e._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const l=await Yr(e,i,r,ni(),o);return du(e,l,yi())}async _openRedirect(e,i,r,o){await this._originValidation(e);const c=await Yr(e,i,r,ni(),o);return wl(c),new Promise(()=>{})}_initialize(e){const i=e._key();if(this.eventManagers[i]){const{manager:o,promise:c}=this.eventManagers[i];return o?Promise.resolve(o):(ye(c,"If manager is not set, promise should be"),c)}const r=this.initAndGetManager(e);return this.eventManagers[i]={promise:r},r.catch(()=>{delete this.eventManagers[i]}),r}async initAndGetManager(e){const i=await ou(e),r=new zl(e);return i.register("authEvent",o=>(b(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=i,r}_isIframeWebStorageSupported(e,i){this.iframes[e._key()].send(Kn,{type:Kn},o=>{var c;const l=(c=o==null?void 0:o[0])===null||c===void 0?void 0:c[Kn];l!==void 0&&i(!!l),ve(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const i=e._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=Xl(e)),this.originValidationPromises[i]}get _shouldInitProactively(){return qs()||mi()||dn()}}const yu=vu;var Qr="@firebase/auth",Zr="1.7.5";/**
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
 */class Iu{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const i=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,i),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const i=this.internalListeners.get(e);i&&(this.internalListeners.delete(e),i(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function wu(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Eu(n){Ve(new Ne("auth",(e,{options:i})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:l,authDomain:p}=r.options;b(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const v={apiKey:l,authDomain:p,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ks(n)},E=new Zh(r,o,c,v);return sl(E,i),E},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,i,r)=>{e.getProvider("auth-internal").initialize()})),Ve(new Ne("auth-internal",e=>{const i=_i(e.getProvider("auth").getImmediate());return(r=>new Iu(r))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),ce(Qr,Zr,wu(n)),ce(Qr,Zr,"esm2017")}/**
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
 */const Tu=5*60,Au=ps("authIdTokenMaxAge")||Tu;let es=null;const bu=n=>async e=>{const i=e&&await e.getIdTokenResult(),r=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(r&&r>Au)return;const o=i==null?void 0:i.token;es!==o&&(es=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Ru(n=li()){const e=un(n,"auth");if(e.isInitialized())return e.getImmediate();const i=rl(n,{popupRedirectResolver:yu,persistence:[Pl,vl,no]}),r=ps("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(r,location.origin);if(location.origin===c.origin){const l=bu(c.toString());pl(i,l,()=>l(i.currentUser)),fl(i,p=>l(p))}}const o=us("auth");return o&&ol(i,`http://${o}`),i}function Su(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}el({loadJS(n){return new Promise((e,i)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=o=>{const c=he("internal-error");c.customData=o,i(c)},r.type="text/javascript",r.charset="UTF-8",Su().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Eu("Browser");var ts=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ho;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,u){function f(){}f.prototype=u.prototype,_.D=u.prototype,_.prototype=new f,_.prototype.constructor=_,_.C=function(g,m,I){for(var d=Array(arguments.length-2),de=2;de<arguments.length;de++)d[de-2]=arguments[de];return u.prototype[m].apply(g,d)}}function i(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,i),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(_,u,f){f||(f=0);var g=Array(16);if(typeof u=="string")for(var m=0;16>m;++m)g[m]=u.charCodeAt(f++)|u.charCodeAt(f++)<<8|u.charCodeAt(f++)<<16|u.charCodeAt(f++)<<24;else for(m=0;16>m;++m)g[m]=u[f++]|u[f++]<<8|u[f++]<<16|u[f++]<<24;u=_.g[0],f=_.g[1],m=_.g[2];var I=_.g[3],d=u+(I^f&(m^I))+g[0]+3614090360&4294967295;u=f+(d<<7&4294967295|d>>>25),d=I+(m^u&(f^m))+g[1]+3905402710&4294967295,I=u+(d<<12&4294967295|d>>>20),d=m+(f^I&(u^f))+g[2]+606105819&4294967295,m=I+(d<<17&4294967295|d>>>15),d=f+(u^m&(I^u))+g[3]+3250441966&4294967295,f=m+(d<<22&4294967295|d>>>10),d=u+(I^f&(m^I))+g[4]+4118548399&4294967295,u=f+(d<<7&4294967295|d>>>25),d=I+(m^u&(f^m))+g[5]+1200080426&4294967295,I=u+(d<<12&4294967295|d>>>20),d=m+(f^I&(u^f))+g[6]+2821735955&4294967295,m=I+(d<<17&4294967295|d>>>15),d=f+(u^m&(I^u))+g[7]+4249261313&4294967295,f=m+(d<<22&4294967295|d>>>10),d=u+(I^f&(m^I))+g[8]+1770035416&4294967295,u=f+(d<<7&4294967295|d>>>25),d=I+(m^u&(f^m))+g[9]+2336552879&4294967295,I=u+(d<<12&4294967295|d>>>20),d=m+(f^I&(u^f))+g[10]+4294925233&4294967295,m=I+(d<<17&4294967295|d>>>15),d=f+(u^m&(I^u))+g[11]+2304563134&4294967295,f=m+(d<<22&4294967295|d>>>10),d=u+(I^f&(m^I))+g[12]+1804603682&4294967295,u=f+(d<<7&4294967295|d>>>25),d=I+(m^u&(f^m))+g[13]+4254626195&4294967295,I=u+(d<<12&4294967295|d>>>20),d=m+(f^I&(u^f))+g[14]+2792965006&4294967295,m=I+(d<<17&4294967295|d>>>15),d=f+(u^m&(I^u))+g[15]+1236535329&4294967295,f=m+(d<<22&4294967295|d>>>10),d=u+(m^I&(f^m))+g[1]+4129170786&4294967295,u=f+(d<<5&4294967295|d>>>27),d=I+(f^m&(u^f))+g[6]+3225465664&4294967295,I=u+(d<<9&4294967295|d>>>23),d=m+(u^f&(I^u))+g[11]+643717713&4294967295,m=I+(d<<14&4294967295|d>>>18),d=f+(I^u&(m^I))+g[0]+3921069994&4294967295,f=m+(d<<20&4294967295|d>>>12),d=u+(m^I&(f^m))+g[5]+3593408605&4294967295,u=f+(d<<5&4294967295|d>>>27),d=I+(f^m&(u^f))+g[10]+38016083&4294967295,I=u+(d<<9&4294967295|d>>>23),d=m+(u^f&(I^u))+g[15]+3634488961&4294967295,m=I+(d<<14&4294967295|d>>>18),d=f+(I^u&(m^I))+g[4]+3889429448&4294967295,f=m+(d<<20&4294967295|d>>>12),d=u+(m^I&(f^m))+g[9]+568446438&4294967295,u=f+(d<<5&4294967295|d>>>27),d=I+(f^m&(u^f))+g[14]+3275163606&4294967295,I=u+(d<<9&4294967295|d>>>23),d=m+(u^f&(I^u))+g[3]+4107603335&4294967295,m=I+(d<<14&4294967295|d>>>18),d=f+(I^u&(m^I))+g[8]+1163531501&4294967295,f=m+(d<<20&4294967295|d>>>12),d=u+(m^I&(f^m))+g[13]+2850285829&4294967295,u=f+(d<<5&4294967295|d>>>27),d=I+(f^m&(u^f))+g[2]+4243563512&4294967295,I=u+(d<<9&4294967295|d>>>23),d=m+(u^f&(I^u))+g[7]+1735328473&4294967295,m=I+(d<<14&4294967295|d>>>18),d=f+(I^u&(m^I))+g[12]+2368359562&4294967295,f=m+(d<<20&4294967295|d>>>12),d=u+(f^m^I)+g[5]+4294588738&4294967295,u=f+(d<<4&4294967295|d>>>28),d=I+(u^f^m)+g[8]+2272392833&4294967295,I=u+(d<<11&4294967295|d>>>21),d=m+(I^u^f)+g[11]+1839030562&4294967295,m=I+(d<<16&4294967295|d>>>16),d=f+(m^I^u)+g[14]+4259657740&4294967295,f=m+(d<<23&4294967295|d>>>9),d=u+(f^m^I)+g[1]+2763975236&4294967295,u=f+(d<<4&4294967295|d>>>28),d=I+(u^f^m)+g[4]+1272893353&4294967295,I=u+(d<<11&4294967295|d>>>21),d=m+(I^u^f)+g[7]+4139469664&4294967295,m=I+(d<<16&4294967295|d>>>16),d=f+(m^I^u)+g[10]+3200236656&4294967295,f=m+(d<<23&4294967295|d>>>9),d=u+(f^m^I)+g[13]+681279174&4294967295,u=f+(d<<4&4294967295|d>>>28),d=I+(u^f^m)+g[0]+3936430074&4294967295,I=u+(d<<11&4294967295|d>>>21),d=m+(I^u^f)+g[3]+3572445317&4294967295,m=I+(d<<16&4294967295|d>>>16),d=f+(m^I^u)+g[6]+76029189&4294967295,f=m+(d<<23&4294967295|d>>>9),d=u+(f^m^I)+g[9]+3654602809&4294967295,u=f+(d<<4&4294967295|d>>>28),d=I+(u^f^m)+g[12]+3873151461&4294967295,I=u+(d<<11&4294967295|d>>>21),d=m+(I^u^f)+g[15]+530742520&4294967295,m=I+(d<<16&4294967295|d>>>16),d=f+(m^I^u)+g[2]+3299628645&4294967295,f=m+(d<<23&4294967295|d>>>9),d=u+(m^(f|~I))+g[0]+4096336452&4294967295,u=f+(d<<6&4294967295|d>>>26),d=I+(f^(u|~m))+g[7]+1126891415&4294967295,I=u+(d<<10&4294967295|d>>>22),d=m+(u^(I|~f))+g[14]+2878612391&4294967295,m=I+(d<<15&4294967295|d>>>17),d=f+(I^(m|~u))+g[5]+4237533241&4294967295,f=m+(d<<21&4294967295|d>>>11),d=u+(m^(f|~I))+g[12]+1700485571&4294967295,u=f+(d<<6&4294967295|d>>>26),d=I+(f^(u|~m))+g[3]+2399980690&4294967295,I=u+(d<<10&4294967295|d>>>22),d=m+(u^(I|~f))+g[10]+4293915773&4294967295,m=I+(d<<15&4294967295|d>>>17),d=f+(I^(m|~u))+g[1]+2240044497&4294967295,f=m+(d<<21&4294967295|d>>>11),d=u+(m^(f|~I))+g[8]+1873313359&4294967295,u=f+(d<<6&4294967295|d>>>26),d=I+(f^(u|~m))+g[15]+4264355552&4294967295,I=u+(d<<10&4294967295|d>>>22),d=m+(u^(I|~f))+g[6]+2734768916&4294967295,m=I+(d<<15&4294967295|d>>>17),d=f+(I^(m|~u))+g[13]+1309151649&4294967295,f=m+(d<<21&4294967295|d>>>11),d=u+(m^(f|~I))+g[4]+4149444226&4294967295,u=f+(d<<6&4294967295|d>>>26),d=I+(f^(u|~m))+g[11]+3174756917&4294967295,I=u+(d<<10&4294967295|d>>>22),d=m+(u^(I|~f))+g[2]+718787259&4294967295,m=I+(d<<15&4294967295|d>>>17),d=f+(I^(m|~u))+g[9]+3951481745&4294967295,_.g[0]=_.g[0]+u&4294967295,_.g[1]=_.g[1]+(m+(d<<21&4294967295|d>>>11))&4294967295,_.g[2]=_.g[2]+m&4294967295,_.g[3]=_.g[3]+I&4294967295}r.prototype.u=function(_,u){u===void 0&&(u=_.length);for(var f=u-this.blockSize,g=this.B,m=this.h,I=0;I<u;){if(m==0)for(;I<=f;)o(this,_,I),I+=this.blockSize;if(typeof _=="string"){for(;I<u;)if(g[m++]=_.charCodeAt(I++),m==this.blockSize){o(this,g),m=0;break}}else for(;I<u;)if(g[m++]=_[I++],m==this.blockSize){o(this,g),m=0;break}}this.h=m,this.o+=u},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var u=1;u<_.length-8;++u)_[u]=0;var f=8*this.o;for(u=_.length-8;u<_.length;++u)_[u]=f&255,f/=256;for(this.u(_),_=Array(16),u=f=0;4>u;++u)for(var g=0;32>g;g+=8)_[f++]=this.g[u]>>>g&255;return _};function c(_,u){var f=p;return Object.prototype.hasOwnProperty.call(f,_)?f[_]:f[_]=u(_)}function l(_,u){this.h=u;for(var f=[],g=!0,m=_.length-1;0<=m;m--){var I=_[m]|0;g&&I==u||(f[m]=I,g=!1)}this.g=f}var p={};function v(_){return-128<=_&&128>_?c(_,function(u){return new l([u|0],0>u?-1:0)}):new l([_|0],0>_?-1:0)}function E(_){if(isNaN(_)||!isFinite(_))return k;if(0>_)return C(E(-_));for(var u=[],f=1,g=0;_>=f;g++)u[g]=_/f|0,f*=4294967296;return new l(u,0)}function A(_,u){if(_.length==0)throw Error("number format error: empty string");if(u=u||10,2>u||36<u)throw Error("radix out of range: "+u);if(_.charAt(0)=="-")return C(A(_.substring(1),u));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var f=E(Math.pow(u,8)),g=k,m=0;m<_.length;m+=8){var I=Math.min(8,_.length-m),d=parseInt(_.substring(m,m+I),u);8>I?(I=E(Math.pow(u,I)),g=g.j(I).add(E(d))):(g=g.j(f),g=g.add(E(d)))}return g}var k=v(0),R=v(1),L=v(16777216);n=l.prototype,n.m=function(){if(M(this))return-C(this).m();for(var _=0,u=1,f=0;f<this.g.length;f++){var g=this.i(f);_+=(0<=g?g:4294967296+g)*u,u*=4294967296}return _},n.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(S(this))return"0";if(M(this))return"-"+C(this).toString(_);for(var u=E(Math.pow(_,6)),f=this,g="";;){var m=F(f,u).g;f=ne(f,m.j(u));var I=((0<f.g.length?f.g[0]:f.h)>>>0).toString(_);if(f=m,S(f))return I+g;for(;6>I.length;)I="0"+I;g=I+g}},n.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function S(_){if(_.h!=0)return!1;for(var u=0;u<_.g.length;u++)if(_.g[u]!=0)return!1;return!0}function M(_){return _.h==-1}n.l=function(_){return _=ne(this,_),M(_)?-1:S(_)?0:1};function C(_){for(var u=_.g.length,f=[],g=0;g<u;g++)f[g]=~_.g[g];return new l(f,~_.h).add(R)}n.abs=function(){return M(this)?C(this):this},n.add=function(_){for(var u=Math.max(this.g.length,_.g.length),f=[],g=0,m=0;m<=u;m++){var I=g+(this.i(m)&65535)+(_.i(m)&65535),d=(I>>>16)+(this.i(m)>>>16)+(_.i(m)>>>16);g=d>>>16,I&=65535,d&=65535,f[m]=d<<16|I}return new l(f,f[f.length-1]&-2147483648?-1:0)};function ne(_,u){return _.add(C(u))}n.j=function(_){if(S(this)||S(_))return k;if(M(this))return M(_)?C(this).j(C(_)):C(C(this).j(_));if(M(_))return C(this.j(C(_)));if(0>this.l(L)&&0>_.l(L))return E(this.m()*_.m());for(var u=this.g.length+_.g.length,f=[],g=0;g<2*u;g++)f[g]=0;for(g=0;g<this.g.length;g++)for(var m=0;m<_.g.length;m++){var I=this.i(g)>>>16,d=this.i(g)&65535,de=_.i(m)>>>16,rt=_.i(m)&65535;f[2*g+2*m]+=d*rt,Q(f,2*g+2*m),f[2*g+2*m+1]+=I*rt,Q(f,2*g+2*m+1),f[2*g+2*m+1]+=d*de,Q(f,2*g+2*m+1),f[2*g+2*m+2]+=I*de,Q(f,2*g+2*m+2)}for(g=0;g<u;g++)f[g]=f[2*g+1]<<16|f[2*g];for(g=u;g<2*u;g++)f[g]=0;return new l(f,0)};function Q(_,u){for(;(_[u]&65535)!=_[u];)_[u+1]+=_[u]>>>16,_[u]&=65535,u++}function x(_,u){this.g=_,this.h=u}function F(_,u){if(S(u))throw Error("division by zero");if(S(_))return new x(k,k);if(M(_))return u=F(C(_),u),new x(C(u.g),C(u.h));if(M(u))return u=F(_,C(u)),new x(C(u.g),u.h);if(30<_.g.length){if(M(_)||M(u))throw Error("slowDivide_ only works with positive integers.");for(var f=R,g=u;0>=g.l(_);)f=se(f),g=se(g);var m=B(f,1),I=B(g,1);for(g=B(g,2),f=B(f,2);!S(g);){var d=I.add(g);0>=d.l(_)&&(m=m.add(f),I=d),g=B(g,1),f=B(f,1)}return u=ne(_,m.j(u)),new x(m,u)}for(m=k;0<=_.l(u);){for(f=Math.max(1,Math.floor(_.m()/u.m())),g=Math.ceil(Math.log(f)/Math.LN2),g=48>=g?1:Math.pow(2,g-48),I=E(f),d=I.j(u);M(d)||0<d.l(_);)f-=g,I=E(f),d=I.j(u);S(I)&&(I=R),m=m.add(I),_=ne(_,d)}return new x(m,_)}n.A=function(_){return F(this,_).h},n.and=function(_){for(var u=Math.max(this.g.length,_.g.length),f=[],g=0;g<u;g++)f[g]=this.i(g)&_.i(g);return new l(f,this.h&_.h)},n.or=function(_){for(var u=Math.max(this.g.length,_.g.length),f=[],g=0;g<u;g++)f[g]=this.i(g)|_.i(g);return new l(f,this.h|_.h)},n.xor=function(_){for(var u=Math.max(this.g.length,_.g.length),f=[],g=0;g<u;g++)f[g]=this.i(g)^_.i(g);return new l(f,this.h^_.h)};function se(_){for(var u=_.g.length+1,f=[],g=0;g<u;g++)f[g]=_.i(g)<<1|_.i(g-1)>>>31;return new l(f,_.h)}function B(_,u){var f=u>>5;u%=32;for(var g=_.g.length-f,m=[],I=0;I<g;I++)m[I]=0<u?_.i(I+f)>>>u|_.i(I+f+1)<<32-u:_.i(I+f);return new l(m,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=E,l.fromString=A,ho=l}).apply(typeof ts<"u"?ts:typeof self<"u"?self:typeof window<"u"?window:{});var Jt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,s,a){return t==Array.prototype||t==Object.prototype||(t[s]=a.value),t};function i(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof Jt=="object"&&Jt];for(var s=0;s<t.length;++s){var a=t[s];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var r=i(this);function o(t,s){if(s)e:{var a=r;t=t.split(".");for(var h=0;h<t.length-1;h++){var y=t[h];if(!(y in a))break e;a=a[y]}t=t[t.length-1],h=a[t],s=s(h),s!=h&&s!=null&&e(a,t,{configurable:!0,writable:!0,value:s})}}function c(t,s){t instanceof String&&(t+="");var a=0,h=!1,y={next:function(){if(!h&&a<t.length){var w=a++;return{value:s(w,t[w]),done:!1}}return h=!0,{done:!0,value:void 0}}};return y[Symbol.iterator]=function(){return y},y}o("Array.prototype.values",function(t){return t||function(){return c(this,function(s,a){return a})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},p=this||self;function v(t){var s=typeof t;return s=s!="object"?s:t?Array.isArray(t)?"array":s:"null",s=="array"||s=="object"&&typeof t.length=="number"}function E(t){var s=typeof t;return s=="object"&&t!=null||s=="function"}function A(t,s,a){return t.call.apply(t.bind,arguments)}function k(t,s,a){if(!t)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var y=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(y,h),t.apply(s,y)}}return function(){return t.apply(s,arguments)}}function R(t,s,a){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?A:k,R.apply(null,arguments)}function L(t,s){var a=Array.prototype.slice.call(arguments,1);return function(){var h=a.slice();return h.push.apply(h,arguments),t.apply(this,h)}}function S(t,s){function a(){}a.prototype=s.prototype,t.aa=s.prototype,t.prototype=new a,t.prototype.constructor=t,t.Qb=function(h,y,w){for(var T=Array(arguments.length-2),N=2;N<arguments.length;N++)T[N-2]=arguments[N];return s.prototype[y].apply(h,T)}}function M(t){const s=t.length;if(0<s){const a=Array(s);for(let h=0;h<s;h++)a[h]=t[h];return a}return[]}function C(t,s){for(let a=1;a<arguments.length;a++){const h=arguments[a];if(v(h)){const y=t.length||0,w=h.length||0;t.length=y+w;for(let T=0;T<w;T++)t[y+T]=h[T]}else t.push(h)}}class ne{constructor(s,a){this.i=s,this.j=a,this.h=0,this.g=null}get(){let s;return 0<this.h?(this.h--,s=this.g,this.g=s.next,s.next=null):s=this.i(),s}}function Q(t){return/^[\s\xa0]*$/.test(t)}function x(){var t=p.navigator;return t&&(t=t.userAgent)?t:""}function F(t){return F[" "](t),t}F[" "]=function(){};var se=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function B(t,s,a){for(const h in t)s.call(a,t[h],h,t)}function _(t,s){for(const a in t)s.call(void 0,t[a],a,t)}function u(t){const s={};for(const a in t)s[a]=t[a];return s}const f="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function g(t,s){let a,h;for(let y=1;y<arguments.length;y++){h=arguments[y];for(a in h)t[a]=h[a];for(let w=0;w<f.length;w++)a=f[w],Object.prototype.hasOwnProperty.call(h,a)&&(t[a]=h[a])}}function m(t){var s=1;t=t.split(":");const a=[];for(;0<s&&t.length;)a.push(t.shift()),s--;return t.length&&a.push(t.join(":")),a}function I(t){p.setTimeout(()=>{throw t},0)}function d(){var t=gn;let s=null;return t.g&&(s=t.g,t.g=t.g.next,t.g||(t.h=null),s.next=null),s}class de{constructor(){this.h=this.g=null}add(s,a){const h=rt.get();h.set(s,a),this.h?this.h.next=h:this.g=h,this.h=h}}var rt=new ne(()=>new go,t=>t.reset());class go{constructor(){this.next=this.g=this.h=null}set(s,a){this.h=s,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let st,ot=!1,gn=new de,Ri=()=>{const t=p.Promise.resolve(void 0);st=()=>{t.then(mo)}};var mo=()=>{for(var t;t=d();){try{t.h.call(t.g)}catch(a){I(a)}var s=rt;s.j(t),100>s.h&&(s.h++,t.next=s.g,s.g=t)}ot=!1};function we(){this.s=this.s,this.C=this.C}we.prototype.s=!1,we.prototype.ma=function(){this.s||(this.s=!0,this.N())},we.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function z(t,s){this.type=t,this.g=this.target=s,this.defaultPrevented=!1}z.prototype.h=function(){this.defaultPrevented=!0};var _o=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var t=!1,s=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const a=()=>{};p.addEventListener("test",a,s),p.removeEventListener("test",a,s)}catch{}return t}();function at(t,s){if(z.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var a=this.type=t.type,h=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=s,s=t.relatedTarget){if(se){e:{try{F(s.nodeName);var y=!0;break e}catch{}y=!1}y||(s=null)}}else a=="mouseover"?s=t.fromElement:a=="mouseout"&&(s=t.toElement);this.relatedTarget=s,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:vo[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&at.aa.h.call(this)}}S(at,z);var vo={2:"touch",3:"pen",4:"mouse"};at.prototype.h=function(){at.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ot="closure_listenable_"+(1e6*Math.random()|0),yo=0;function Io(t,s,a,h,y){this.listener=t,this.proxy=null,this.src=s,this.type=a,this.capture=!!h,this.ha=y,this.key=++yo,this.da=this.fa=!1}function Dt(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Nt(t){this.src=t,this.g={},this.h=0}Nt.prototype.add=function(t,s,a,h,y){var w=t.toString();t=this.g[w],t||(t=this.g[w]=[],this.h++);var T=_n(t,s,h,y);return-1<T?(s=t[T],a||(s.fa=!1)):(s=new Io(s,this.src,w,!!h,y),s.fa=a,t.push(s)),s};function mn(t,s){var a=s.type;if(a in t.g){var h=t.g[a],y=Array.prototype.indexOf.call(h,s,void 0),w;(w=0<=y)&&Array.prototype.splice.call(h,y,1),w&&(Dt(s),t.g[a].length==0&&(delete t.g[a],t.h--))}}function _n(t,s,a,h){for(var y=0;y<t.length;++y){var w=t[y];if(!w.da&&w.listener==s&&w.capture==!!a&&w.ha==h)return y}return-1}var vn="closure_lm_"+(1e6*Math.random()|0),yn={};function Si(t,s,a,h,y){if(Array.isArray(s)){for(var w=0;w<s.length;w++)Si(t,s[w],a,h,y);return null}return a=Pi(a),t&&t[Ot]?t.K(s,a,E(h)?!!h.capture:!!h,y):wo(t,s,a,!1,h,y)}function wo(t,s,a,h,y,w){if(!s)throw Error("Invalid event type");var T=E(y)?!!y.capture:!!y,N=wn(t);if(N||(t[vn]=N=new Nt(t)),a=N.add(s,a,h,T,w),a.proxy)return a;if(h=Eo(),a.proxy=h,h.src=t,h.listener=a,t.addEventListener)_o||(y=T),y===void 0&&(y=!1),t.addEventListener(s.toString(),h,y);else if(t.attachEvent)t.attachEvent(Ci(s.toString()),h);else if(t.addListener&&t.removeListener)t.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return a}function Eo(){function t(a){return s.call(t.src,t.listener,a)}const s=To;return t}function ki(t,s,a,h,y){if(Array.isArray(s))for(var w=0;w<s.length;w++)ki(t,s[w],a,h,y);else h=E(h)?!!h.capture:!!h,a=Pi(a),t&&t[Ot]?(t=t.i,s=String(s).toString(),s in t.g&&(w=t.g[s],a=_n(w,a,h,y),-1<a&&(Dt(w[a]),Array.prototype.splice.call(w,a,1),w.length==0&&(delete t.g[s],t.h--)))):t&&(t=wn(t))&&(s=t.g[s.toString()],t=-1,s&&(t=_n(s,a,h,y)),(a=-1<t?s[t]:null)&&In(a))}function In(t){if(typeof t!="number"&&t&&!t.da){var s=t.src;if(s&&s[Ot])mn(s.i,t);else{var a=t.type,h=t.proxy;s.removeEventListener?s.removeEventListener(a,h,t.capture):s.detachEvent?s.detachEvent(Ci(a),h):s.addListener&&s.removeListener&&s.removeListener(h),(a=wn(s))?(mn(a,t),a.h==0&&(a.src=null,s[vn]=null)):Dt(t)}}}function Ci(t){return t in yn?yn[t]:yn[t]="on"+t}function To(t,s){if(t.da)t=!0;else{s=new at(s,this);var a=t.listener,h=t.ha||t.src;t.fa&&In(t),t=a.call(h,s)}return t}function wn(t){return t=t[vn],t instanceof Nt?t:null}var En="__closure_events_fn_"+(1e9*Math.random()>>>0);function Pi(t){return typeof t=="function"?t:(t[En]||(t[En]=function(s){return t.handleEvent(s)}),t[En])}function W(){we.call(this),this.i=new Nt(this),this.M=this,this.F=null}S(W,we),W.prototype[Ot]=!0,W.prototype.removeEventListener=function(t,s,a,h){ki(this,t,s,a,h)};function Z(t,s){var a,h=t.F;if(h)for(a=[];h;h=h.F)a.push(h);if(t=t.M,h=s.type||s,typeof s=="string")s=new z(s,t);else if(s instanceof z)s.target=s.target||t;else{var y=s;s=new z(h,t),g(s,y)}if(y=!0,a)for(var w=a.length-1;0<=w;w--){var T=s.g=a[w];y=Lt(T,h,!0,s)&&y}if(T=s.g=t,y=Lt(T,h,!0,s)&&y,y=Lt(T,h,!1,s)&&y,a)for(w=0;w<a.length;w++)T=s.g=a[w],y=Lt(T,h,!1,s)&&y}W.prototype.N=function(){if(W.aa.N.call(this),this.i){var t=this.i,s;for(s in t.g){for(var a=t.g[s],h=0;h<a.length;h++)Dt(a[h]);delete t.g[s],t.h--}}this.F=null},W.prototype.K=function(t,s,a,h){return this.i.add(String(t),s,!1,a,h)},W.prototype.L=function(t,s,a,h){return this.i.add(String(t),s,!0,a,h)};function Lt(t,s,a,h){if(s=t.i.g[String(s)],!s)return!0;s=s.concat();for(var y=!0,w=0;w<s.length;++w){var T=s[w];if(T&&!T.da&&T.capture==a){var N=T.listener,$=T.ha||T.src;T.fa&&mn(t.i,T),y=N.call($,h)!==!1&&y}}return y&&!h.defaultPrevented}function Oi(t,s,a){if(typeof t=="function")a&&(t=R(t,a));else if(t&&typeof t.handleEvent=="function")t=R(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(s)?-1:p.setTimeout(t,s||0)}function Di(t){t.g=Oi(()=>{t.g=null,t.i&&(t.i=!1,Di(t))},t.l);const s=t.h;t.h=null,t.m.apply(null,s)}class Ao extends we{constructor(s,a){super(),this.m=s,this.l=a,this.h=null,this.i=!1,this.g=null}j(s){this.h=arguments,this.g?this.i=!0:Di(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ct(t){we.call(this),this.h=t,this.g={}}S(ct,we);var Ni=[];function Li(t){B(t.g,function(s,a){this.g.hasOwnProperty(a)&&In(s)},t),t.g={}}ct.prototype.N=function(){ct.aa.N.call(this),Li(this)},ct.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Tn=p.JSON.stringify,bo=p.JSON.parse,Ro=class{stringify(t){return p.JSON.stringify(t,void 0)}parse(t){return p.JSON.parse(t,void 0)}};function An(){}An.prototype.h=null;function Ui(t){return t.h||(t.h=t.i())}function So(){}var ht={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function bn(){z.call(this,"d")}S(bn,z);function Rn(){z.call(this,"c")}S(Rn,z);var We={},Mi=null;function Sn(){return Mi=Mi||new W}We.La="serverreachability";function xi(t){z.call(this,We.La,t)}S(xi,z);function lt(t){const s=Sn();Z(s,new xi(s))}We.STAT_EVENT="statevent";function Fi(t,s){z.call(this,We.STAT_EVENT,t),this.stat=s}S(Fi,z);function ee(t){const s=Sn();Z(s,new Fi(s,t))}We.Ma="timingevent";function ji(t,s){z.call(this,We.Ma,t),this.size=s}S(ji,z);function ut(t,s){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){t()},s)}function dt(){this.g=!0}dt.prototype.xa=function(){this.g=!1};function ko(t,s,a,h,y,w){t.info(function(){if(t.g)if(w)for(var T="",N=w.split("&"),$=0;$<N.length;$++){var O=N[$].split("=");if(1<O.length){var G=O[0];O=O[1];var q=G.split("_");T=2<=q.length&&q[1]=="type"?T+(G+"="+O+"&"):T+(G+"=redacted&")}}else T=null;else T=w;return"XMLHTTP REQ ("+h+") [attempt "+y+"]: "+s+`
`+a+`
`+T})}function Co(t,s,a,h,y,w,T){t.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+y+"]: "+s+`
`+a+`
`+w+" "+T})}function Ge(t,s,a,h){t.info(function(){return"XMLHTTP TEXT ("+s+"): "+Oo(t,a)+(h?" "+h:"")})}function Po(t,s){t.info(function(){return"TIMEOUT: "+s})}dt.prototype.info=function(){};function Oo(t,s){if(!t.g)return s;if(!s)return null;try{var a=JSON.parse(s);if(a){for(t=0;t<a.length;t++)if(Array.isArray(a[t])){var h=a[t];if(!(2>h.length)){var y=h[1];if(Array.isArray(y)&&!(1>y.length)){var w=y[0];if(w!="noop"&&w!="stop"&&w!="close")for(var T=1;T<y.length;T++)y[T]=""}}}}return Tn(a)}catch{return s}}var kn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Do={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Cn;function Ut(){}S(Ut,An),Ut.prototype.g=function(){return new XMLHttpRequest},Ut.prototype.i=function(){return{}},Cn=new Ut;function Ee(t,s,a,h){this.j=t,this.i=s,this.l=a,this.R=h||1,this.U=new ct(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Bi}function Bi(){this.i=null,this.g="",this.h=!1}var Vi={},Pn={};function On(t,s,a){t.L=1,t.v=jt(fe(s)),t.m=a,t.P=!0,Hi(t,null)}function Hi(t,s){t.F=Date.now(),Mt(t),t.A=fe(t.v);var a=t.A,h=t.R;Array.isArray(h)||(h=[String(h)]),nr(a.i,"t",h),t.C=0,a=t.j.J,t.h=new Bi,t.g=Ir(t.j,a?s:null,!t.m),0<t.O&&(t.M=new Ao(R(t.Y,t,t.g),t.O)),s=t.U,a=t.g,h=t.ca;var y="readystatechange";Array.isArray(y)||(y&&(Ni[0]=y.toString()),y=Ni);for(var w=0;w<y.length;w++){var T=Si(a,y[w],h||s.handleEvent,!1,s.h||s);if(!T)break;s.g[T.key]=T}s=t.H?u(t.H):{},t.m?(t.u||(t.u="POST"),s["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,s)):(t.u="GET",t.g.ea(t.A,t.u,null,s)),lt(),ko(t.i,t.u,t.A,t.l,t.R,t.m)}Ee.prototype.ca=function(t){t=t.target;const s=this.M;s&&pe(t)==3?s.j():this.Y(t)},Ee.prototype.Y=function(t){try{if(t==this.g)e:{const q=pe(this.g);var s=this.g.Ba();const Xe=this.g.Z();if(!(3>q)&&(q!=3||this.g&&(this.h.h||this.g.oa()||hr(this.g)))){this.J||q!=4||s==7||(s==8||0>=Xe?lt(3):lt(2)),Dn(this);var a=this.g.Z();this.X=a;t:if($i(this)){var h=hr(this.g);t="";var y=h.length,w=pe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Le(this),ft(this);var T="";break t}this.h.i=new p.TextDecoder}for(s=0;s<y;s++)this.h.h=!0,t+=this.h.i.decode(h[s],{stream:!(w&&s==y-1)});h.length=0,this.h.g+=t,this.C=0,T=this.h.g}else T=this.g.oa();if(this.o=a==200,Co(this.i,this.u,this.A,this.l,this.R,q,a),this.o){if(this.T&&!this.K){t:{if(this.g){var N,$=this.g;if((N=$.g?$.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Q(N)){var O=N;break t}}O=null}if(a=O)Ge(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Nn(this,a);else{this.o=!1,this.s=3,ee(12),Le(this),ft(this);break e}}if(this.P){a=!0;let ae;for(;!this.J&&this.C<T.length;)if(ae=No(this,T),ae==Pn){q==4&&(this.s=4,ee(14),a=!1),Ge(this.i,this.l,null,"[Incomplete Response]");break}else if(ae==Vi){this.s=4,ee(15),Ge(this.i,this.l,T,"[Invalid Chunk]"),a=!1;break}else Ge(this.i,this.l,ae,null),Nn(this,ae);if($i(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),q!=4||T.length!=0||this.h.h||(this.s=1,ee(16),a=!1),this.o=this.o&&a,!a)Ge(this.i,this.l,T,"[Invalid Chunked Response]"),Le(this),ft(this);else if(0<T.length&&!this.W){this.W=!0;var G=this.j;G.g==this&&G.ba&&!G.M&&(G.j.info("Great, no buffering proxy detected. Bytes received: "+T.length),jn(G),G.M=!0,ee(11))}}else Ge(this.i,this.l,T,null),Nn(this,T);q==4&&Le(this),this.o&&!this.J&&(q==4?mr(this.j,this):(this.o=!1,Mt(this)))}else Jo(this.g),a==400&&0<T.indexOf("Unknown SID")?(this.s=3,ee(12)):(this.s=0,ee(13)),Le(this),ft(this)}}}catch{}finally{}};function $i(t){return t.g?t.u=="GET"&&t.L!=2&&t.j.Ca:!1}function No(t,s){var a=t.C,h=s.indexOf(`
`,a);return h==-1?Pn:(a=Number(s.substring(a,h)),isNaN(a)?Vi:(h+=1,h+a>s.length?Pn:(s=s.slice(h,h+a),t.C=h+a,s)))}Ee.prototype.cancel=function(){this.J=!0,Le(this)};function Mt(t){t.S=Date.now()+t.I,zi(t,t.I)}function zi(t,s){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ut(R(t.ba,t),s)}function Dn(t){t.B&&(p.clearTimeout(t.B),t.B=null)}Ee.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(Po(this.i,this.A),this.L!=2&&(lt(),ee(17)),Le(this),this.s=2,ft(this)):zi(this,this.S-t)};function ft(t){t.j.G==0||t.J||mr(t.j,t)}function Le(t){Dn(t);var s=t.M;s&&typeof s.ma=="function"&&s.ma(),t.M=null,Li(t.U),t.g&&(s=t.g,t.g=null,s.abort(),s.ma())}function Nn(t,s){try{var a=t.j;if(a.G!=0&&(a.g==t||Ln(a.h,t))){if(!t.K&&Ln(a.h,t)&&a.G==3){try{var h=a.Da.g.parse(s)}catch{h=null}if(Array.isArray(h)&&h.length==3){var y=h;if(y[0]==0){e:if(!a.u){if(a.g)if(a.g.F+3e3<t.F)Wt(a),$t(a);else break e;Fn(a),ee(18)}}else a.za=y[1],0<a.za-a.T&&37500>y[2]&&a.F&&a.v==0&&!a.C&&(a.C=ut(R(a.Za,a),6e3));if(1>=qi(a.h)&&a.ca){try{a.ca()}catch{}a.ca=void 0}}else Me(a,11)}else if((t.K||a.g==t)&&Wt(a),!Q(s))for(y=a.Da.g.parse(s),s=0;s<y.length;s++){let O=y[s];if(a.T=O[0],O=O[1],a.G==2)if(O[0]=="c"){a.K=O[1],a.ia=O[2];const G=O[3];G!=null&&(a.la=G,a.j.info("VER="+a.la));const q=O[4];q!=null&&(a.Aa=q,a.j.info("SVER="+a.Aa));const Xe=O[5];Xe!=null&&typeof Xe=="number"&&0<Xe&&(h=1.5*Xe,a.L=h,a.j.info("backChannelRequestTimeoutMs_="+h)),h=a;const ae=t.g;if(ae){const Gt=ae.g?ae.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gt){var w=h.h;w.g||Gt.indexOf("spdy")==-1&&Gt.indexOf("quic")==-1&&Gt.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Un(w,w.h),w.h=null))}if(h.D){const Bn=ae.g?ae.g.getResponseHeader("X-HTTP-Session-Id"):null;Bn&&(h.ya=Bn,U(h.I,h.D,Bn))}}a.G=3,a.l&&a.l.ua(),a.ba&&(a.R=Date.now()-t.F,a.j.info("Handshake RTT: "+a.R+"ms")),h=a;var T=t;if(h.qa=yr(h,h.J?h.ia:null,h.W),T.K){Ki(h.h,T);var N=T,$=h.L;$&&(N.I=$),N.B&&(Dn(N),Mt(N)),h.g=T}else pr(h);0<a.i.length&&zt(a)}else O[0]!="stop"&&O[0]!="close"||Me(a,7);else a.G==3&&(O[0]=="stop"||O[0]=="close"?O[0]=="stop"?Me(a,7):xn(a):O[0]!="noop"&&a.l&&a.l.ta(O),a.v=0)}}lt(4)}catch{}}var Lo=class{constructor(t,s){this.g=t,this.map=s}};function Wi(t){this.l=t||10,p.PerformanceNavigationTiming?(t=p.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Gi(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function qi(t){return t.h?1:t.g?t.g.size:0}function Ln(t,s){return t.h?t.h==s:t.g?t.g.has(s):!1}function Un(t,s){t.g?t.g.add(s):t.h=s}function Ki(t,s){t.h&&t.h==s?t.h=null:t.g&&t.g.has(s)&&t.g.delete(s)}Wi.prototype.cancel=function(){if(this.i=Xi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Xi(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let s=t.i;for(const a of t.g.values())s=s.concat(a.D);return s}return M(t.i)}function Uo(t){if(t.V&&typeof t.V=="function")return t.V();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(v(t)){for(var s=[],a=t.length,h=0;h<a;h++)s.push(t[h]);return s}s=[],a=0;for(h in t)s[a++]=t[h];return s}function Mo(t){if(t.na&&typeof t.na=="function")return t.na();if(!t.V||typeof t.V!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(v(t)||typeof t=="string"){var s=[];t=t.length;for(var a=0;a<t;a++)s.push(a);return s}s=[],a=0;for(const h in t)s[a++]=h;return s}}}function Ji(t,s){if(t.forEach&&typeof t.forEach=="function")t.forEach(s,void 0);else if(v(t)||typeof t=="string")Array.prototype.forEach.call(t,s,void 0);else for(var a=Mo(t),h=Uo(t),y=h.length,w=0;w<y;w++)s.call(void 0,h[w],a&&a[w],t)}var Yi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xo(t,s){if(t){t=t.split("&");for(var a=0;a<t.length;a++){var h=t[a].indexOf("="),y=null;if(0<=h){var w=t[a].substring(0,h);y=t[a].substring(h+1)}else w=t[a];s(w,y?decodeURIComponent(y.replace(/\+/g," ")):"")}}}function Ue(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof Ue){this.h=t.h,xt(this,t.j),this.o=t.o,this.g=t.g,Ft(this,t.s),this.l=t.l;var s=t.i,a=new mt;a.i=s.i,s.g&&(a.g=new Map(s.g),a.h=s.h),Qi(this,a),this.m=t.m}else t&&(s=String(t).match(Yi))?(this.h=!1,xt(this,s[1]||"",!0),this.o=pt(s[2]||""),this.g=pt(s[3]||"",!0),Ft(this,s[4]),this.l=pt(s[5]||"",!0),Qi(this,s[6]||"",!0),this.m=pt(s[7]||"")):(this.h=!1,this.i=new mt(null,this.h))}Ue.prototype.toString=function(){var t=[],s=this.j;s&&t.push(gt(s,Zi,!0),":");var a=this.g;return(a||s=="file")&&(t.push("//"),(s=this.o)&&t.push(gt(s,Zi,!0),"@"),t.push(encodeURIComponent(String(a)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.s,a!=null&&t.push(":",String(a))),(a=this.l)&&(this.g&&a.charAt(0)!="/"&&t.push("/"),t.push(gt(a,a.charAt(0)=="/"?Bo:jo,!0))),(a=this.i.toString())&&t.push("?",a),(a=this.m)&&t.push("#",gt(a,Ho)),t.join("")};function fe(t){return new Ue(t)}function xt(t,s,a){t.j=a?pt(s,!0):s,t.j&&(t.j=t.j.replace(/:$/,""))}function Ft(t,s){if(s){if(s=Number(s),isNaN(s)||0>s)throw Error("Bad port number "+s);t.s=s}else t.s=null}function Qi(t,s,a){s instanceof mt?(t.i=s,$o(t.i,t.h)):(a||(s=gt(s,Vo)),t.i=new mt(s,t.h))}function U(t,s,a){t.i.set(s,a)}function jt(t){return U(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function pt(t,s){return t?s?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function gt(t,s,a){return typeof t=="string"?(t=encodeURI(t).replace(s,Fo),a&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Fo(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Zi=/[#\/\?@]/g,jo=/[#\?:]/g,Bo=/[#\?]/g,Vo=/[#\?@]/g,Ho=/#/g;function mt(t,s){this.h=this.g=null,this.i=t||null,this.j=!!s}function Te(t){t.g||(t.g=new Map,t.h=0,t.i&&xo(t.i,function(s,a){t.add(decodeURIComponent(s.replace(/\+/g," ")),a)}))}n=mt.prototype,n.add=function(t,s){Te(this),this.i=null,t=qe(this,t);var a=this.g.get(t);return a||this.g.set(t,a=[]),a.push(s),this.h+=1,this};function er(t,s){Te(t),s=qe(t,s),t.g.has(s)&&(t.i=null,t.h-=t.g.get(s).length,t.g.delete(s))}function tr(t,s){return Te(t),s=qe(t,s),t.g.has(s)}n.forEach=function(t,s){Te(this),this.g.forEach(function(a,h){a.forEach(function(y){t.call(s,y,h,this)},this)},this)},n.na=function(){Te(this);const t=Array.from(this.g.values()),s=Array.from(this.g.keys()),a=[];for(let h=0;h<s.length;h++){const y=t[h];for(let w=0;w<y.length;w++)a.push(s[h])}return a},n.V=function(t){Te(this);let s=[];if(typeof t=="string")tr(this,t)&&(s=s.concat(this.g.get(qe(this,t))));else{t=Array.from(this.g.values());for(let a=0;a<t.length;a++)s=s.concat(t[a])}return s},n.set=function(t,s){return Te(this),this.i=null,t=qe(this,t),tr(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[s]),this.h+=1,this},n.get=function(t,s){return t?(t=this.V(t),0<t.length?String(t[0]):s):s};function nr(t,s,a){er(t,s),0<a.length&&(t.i=null,t.g.set(qe(t,s),M(a)),t.h+=a.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],s=Array.from(this.g.keys());for(var a=0;a<s.length;a++){var h=s[a];const w=encodeURIComponent(String(h)),T=this.V(h);for(h=0;h<T.length;h++){var y=w;T[h]!==""&&(y+="="+encodeURIComponent(String(T[h]))),t.push(y)}}return this.i=t.join("&")};function qe(t,s){return s=String(s),t.j&&(s=s.toLowerCase()),s}function $o(t,s){s&&!t.j&&(Te(t),t.i=null,t.g.forEach(function(a,h){var y=h.toLowerCase();h!=y&&(er(this,h),nr(this,y,a))},t)),t.j=s}function zo(t,s){const a=new dt;if(p.Image){const h=new Image;h.onload=L(Ae,a,"TestLoadImage: loaded",!0,s,h),h.onerror=L(Ae,a,"TestLoadImage: error",!1,s,h),h.onabort=L(Ae,a,"TestLoadImage: abort",!1,s,h),h.ontimeout=L(Ae,a,"TestLoadImage: timeout",!1,s,h),p.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=t}else s(!1)}function Wo(t,s){const a=new dt,h=new AbortController,y=setTimeout(()=>{h.abort(),Ae(a,"TestPingServer: timeout",!1,s)},1e4);fetch(t,{signal:h.signal}).then(w=>{clearTimeout(y),w.ok?Ae(a,"TestPingServer: ok",!0,s):Ae(a,"TestPingServer: server error",!1,s)}).catch(()=>{clearTimeout(y),Ae(a,"TestPingServer: error",!1,s)})}function Ae(t,s,a,h,y){try{y&&(y.onload=null,y.onerror=null,y.onabort=null,y.ontimeout=null),h(a)}catch{}}function Go(){this.g=new Ro}function qo(t,s,a){const h=a||"";try{Ji(t,function(y,w){let T=y;E(y)&&(T=Tn(y)),s.push(h+w+"="+encodeURIComponent(T))})}catch(y){throw s.push(h+"type="+encodeURIComponent("_badmap")),y}}function Bt(t){this.l=t.Ub||null,this.j=t.eb||!1}S(Bt,An),Bt.prototype.g=function(){return new Vt(this.l,this.j)},Bt.prototype.i=function(t){return function(){return t}}({});function Vt(t,s){W.call(this),this.D=t,this.o=s,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Vt,W),n=Vt.prototype,n.open=function(t,s){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=s,this.readyState=1,vt(this)},n.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const s={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(s.body=t),(this.D||p).fetch(new Request(this.A,s)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_t(this)),this.readyState=0},n.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,vt(this)),this.g&&(this.readyState=3,vt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ir(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))};function ir(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}n.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var s=t.value?t.value:new Uint8Array(0);(s=this.v.decode(s,{stream:!t.done}))&&(this.response=this.responseText+=s)}t.done?_t(this):vt(this),this.readyState==3&&ir(this)}},n.Ra=function(t){this.g&&(this.response=this.responseText=t,_t(this))},n.Qa=function(t){this.g&&(this.response=t,_t(this))},n.ga=function(){this.g&&_t(this)};function _t(t){t.readyState=4,t.l=null,t.j=null,t.v=null,vt(t)}n.setRequestHeader=function(t,s){this.u.append(t,s)},n.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],s=this.h.entries();for(var a=s.next();!a.done;)a=a.value,t.push(a[0]+": "+a[1]),a=s.next();return t.join(`\r
`)};function vt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Vt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function rr(t){let s="";return B(t,function(a,h){s+=h,s+=":",s+=a,s+=`\r
`}),s}function Mn(t,s,a){e:{for(h in a){var h=!1;break e}h=!0}h||(a=rr(a),typeof t=="string"?a!=null&&encodeURIComponent(String(a)):U(t,s,a))}function j(t){W.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(j,W);var Ko=/^https?$/i,Xo=["POST","PUT"];n=j.prototype,n.Ha=function(t){this.J=t},n.ea=function(t,s,a,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);s=s?s.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Cn.g(),this.v=this.o?Ui(this.o):Ui(Cn),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(s,String(t),!0),this.B=!1}catch(w){sr(this,w);return}if(t=a||"",a=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var y in h)a.set(y,h[y]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const w of h.keys())a.set(w,h.get(w));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(a.keys()).find(w=>w.toLowerCase()=="content-type"),y=p.FormData&&t instanceof p.FormData,!(0<=Array.prototype.indexOf.call(Xo,s,void 0))||h||y||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,T]of a)this.g.setRequestHeader(w,T);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{cr(this),this.u=!0,this.g.send(t),this.u=!1}catch(w){sr(this,w)}};function sr(t,s){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=s,t.m=5,or(t),Ht(t)}function or(t){t.A||(t.A=!0,Z(t,"complete"),Z(t,"error"))}n.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,Z(this,"complete"),Z(this,"abort"),Ht(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ht(this,!0)),j.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ar(this):this.bb())},n.bb=function(){ar(this)};function ar(t){if(t.h&&typeof l<"u"&&(!t.v[1]||pe(t)!=4||t.Z()!=2)){if(t.u&&pe(t)==4)Oi(t.Ea,0,t);else if(Z(t,"readystatechange"),pe(t)==4){t.h=!1;try{const T=t.Z();e:switch(T){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var s=!0;break e;default:s=!1}var a;if(!(a=s)){var h;if(h=T===0){var y=String(t.D).match(Yi)[1]||null;!y&&p.self&&p.self.location&&(y=p.self.location.protocol.slice(0,-1)),h=!Ko.test(y?y.toLowerCase():"")}a=h}if(a)Z(t,"complete"),Z(t,"success");else{t.m=6;try{var w=2<pe(t)?t.g.statusText:""}catch{w=""}t.l=w+" ["+t.Z()+"]",or(t)}}finally{Ht(t)}}}}function Ht(t,s){if(t.g){cr(t);const a=t.g,h=t.v[0]?()=>{}:null;t.g=null,t.v=null,s||Z(t,"ready");try{a.onreadystatechange=h}catch{}}}function cr(t){t.I&&(p.clearTimeout(t.I),t.I=null)}n.isActive=function(){return!!this.g};function pe(t){return t.g?t.g.readyState:0}n.Z=function(){try{return 2<pe(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(t){if(this.g){var s=this.g.responseText;return t&&s.indexOf(t)==0&&(s=s.substring(t.length)),bo(s)}};function hr(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Jo(t){const s={};t=(t.g&&2<=pe(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<t.length;h++){if(Q(t[h]))continue;var a=m(t[h]);const y=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const w=s[y]||[];s[y]=w,w.push(a)}_(s,function(h){return h.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function yt(t,s,a){return a&&a.internalChannelParams&&a.internalChannelParams[t]||s}function lr(t){this.Aa=0,this.i=[],this.j=new dt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=yt("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=yt("baseRetryDelayMs",5e3,t),this.cb=yt("retryDelaySeedMs",1e4,t),this.Wa=yt("forwardChannelMaxRetries",2,t),this.wa=yt("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new Wi(t&&t.concurrentRequestLimit),this.Da=new Go,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=lr.prototype,n.la=8,n.G=1,n.connect=function(t,s,a,h){ee(0),this.W=t,this.H=s||{},a&&h!==void 0&&(this.H.OSID=a,this.H.OAID=h),this.F=this.X,this.I=yr(this,null,this.W),zt(this)};function xn(t){if(ur(t),t.G==3){var s=t.U++,a=fe(t.I);if(U(a,"SID",t.K),U(a,"RID",s),U(a,"TYPE","terminate"),It(t,a),s=new Ee(t,t.j,s),s.L=2,s.v=jt(fe(a)),a=!1,p.navigator&&p.navigator.sendBeacon)try{a=p.navigator.sendBeacon(s.v.toString(),"")}catch{}!a&&p.Image&&(new Image().src=s.v,a=!0),a||(s.g=Ir(s.j,null),s.g.ea(s.v)),s.F=Date.now(),Mt(s)}vr(t)}function $t(t){t.g&&(jn(t),t.g.cancel(),t.g=null)}function ur(t){$t(t),t.u&&(p.clearTimeout(t.u),t.u=null),Wt(t),t.h.cancel(),t.s&&(typeof t.s=="number"&&p.clearTimeout(t.s),t.s=null)}function zt(t){if(!Gi(t.h)&&!t.s){t.s=!0;var s=t.Ga;st||Ri(),ot||(st(),ot=!0),gn.add(s,t),t.B=0}}function Yo(t,s){return qi(t.h)>=t.h.j-(t.s?1:0)?!1:t.s?(t.i=s.D.concat(t.i),!0):t.G==1||t.G==2||t.B>=(t.Va?0:t.Wa)?!1:(t.s=ut(R(t.Ga,t,s),_r(t,t.B)),t.B++,!0)}n.Ga=function(t){if(this.s)if(this.s=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const y=new Ee(this,this.j,t);let w=this.o;if(this.S&&(w?(w=u(w),g(w,this.S)):w=this.S),this.m!==null||this.O||(y.H=w,w=null),this.P)e:{for(var s=0,a=0;a<this.i.length;a++){t:{var h=this.i[a];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break t}h=void 0}if(h===void 0)break;if(s+=h,4096<s){s=a;break e}if(s===4096||a===this.i.length-1){s=a+1;break e}}s=1e3}else s=1e3;s=fr(this,y,s),a=fe(this.I),U(a,"RID",t),U(a,"CVER",22),this.D&&U(a,"X-HTTP-Session-Id",this.D),It(this,a),w&&(this.O?s="headers="+encodeURIComponent(String(rr(w)))+"&"+s:this.m&&Mn(a,this.m,w)),Un(this.h,y),this.Ua&&U(a,"TYPE","init"),this.P?(U(a,"$req",s),U(a,"SID","null"),y.T=!0,On(y,a,null)):On(y,a,s),this.G=2}}else this.G==3&&(t?dr(this,t):this.i.length==0||Gi(this.h)||dr(this))};function dr(t,s){var a;s?a=s.l:a=t.U++;const h=fe(t.I);U(h,"SID",t.K),U(h,"RID",a),U(h,"AID",t.T),It(t,h),t.m&&t.o&&Mn(h,t.m,t.o),a=new Ee(t,t.j,a,t.B+1),t.m===null&&(a.H=t.o),s&&(t.i=s.D.concat(t.i)),s=fr(t,a,1e3),a.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Un(t.h,a),On(a,h,s)}function It(t,s){t.H&&B(t.H,function(a,h){U(s,h,a)}),t.l&&Ji({},function(a,h){U(s,h,a)})}function fr(t,s,a){a=Math.min(t.i.length,a);var h=t.l?R(t.l.Na,t.l,t):null;e:{var y=t.i;let w=-1;for(;;){const T=["count="+a];w==-1?0<a?(w=y[0].g,T.push("ofs="+w)):w=0:T.push("ofs="+w);let N=!0;for(let $=0;$<a;$++){let O=y[$].g;const G=y[$].map;if(O-=w,0>O)w=Math.max(0,y[$].g-100),N=!1;else try{qo(G,T,"req"+O+"_")}catch{h&&h(G)}}if(N){h=T.join("&");break e}}}return t=t.i.splice(0,a),s.D=t,h}function pr(t){if(!t.g&&!t.u){t.Y=1;var s=t.Fa;st||Ri(),ot||(st(),ot=!0),gn.add(s,t),t.v=0}}function Fn(t){return t.g||t.u||3<=t.v?!1:(t.Y++,t.u=ut(R(t.Fa,t),_r(t,t.v)),t.v++,!0)}n.Fa=function(){if(this.u=null,gr(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=ut(R(this.ab,this),t)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ee(10),$t(this),gr(this))};function jn(t){t.A!=null&&(p.clearTimeout(t.A),t.A=null)}function gr(t){t.g=new Ee(t,t.j,"rpc",t.Y),t.m===null&&(t.g.H=t.o),t.g.O=0;var s=fe(t.qa);U(s,"RID","rpc"),U(s,"SID",t.K),U(s,"AID",t.T),U(s,"CI",t.F?"0":"1"),!t.F&&t.ja&&U(s,"TO",t.ja),U(s,"TYPE","xmlhttp"),It(t,s),t.m&&t.o&&Mn(s,t.m,t.o),t.L&&(t.g.I=t.L);var a=t.g;t=t.ia,a.L=1,a.v=jt(fe(s)),a.m=null,a.P=!0,Hi(a,t)}n.Za=function(){this.C!=null&&(this.C=null,$t(this),Fn(this),ee(19))};function Wt(t){t.C!=null&&(p.clearTimeout(t.C),t.C=null)}function mr(t,s){var a=null;if(t.g==s){Wt(t),jn(t),t.g=null;var h=2}else if(Ln(t.h,s))a=s.D,Ki(t.h,s),h=1;else return;if(t.G!=0){if(s.o)if(h==1){a=s.m?s.m.length:0,s=Date.now()-s.F;var y=t.B;h=Sn(),Z(h,new ji(h,a)),zt(t)}else pr(t);else if(y=s.s,y==3||y==0&&0<s.X||!(h==1&&Yo(t,s)||h==2&&Fn(t)))switch(a&&0<a.length&&(s=t.h,s.i=s.i.concat(a)),y){case 1:Me(t,5);break;case 4:Me(t,10);break;case 3:Me(t,6);break;default:Me(t,2)}}}function _r(t,s){let a=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(a*=2),a*s}function Me(t,s){if(t.j.info("Error code "+s),s==2){var a=R(t.fb,t),h=t.Xa;const y=!h;h=new Ue(h||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||xt(h,"https"),jt(h),y?zo(h.toString(),a):Wo(h.toString(),a)}else ee(2);t.G=0,t.l&&t.l.sa(s),vr(t),ur(t)}n.fb=function(t){t?(this.j.info("Successfully pinged google.com"),ee(2)):(this.j.info("Failed to ping google.com"),ee(1))};function vr(t){if(t.G=0,t.ka=[],t.l){const s=Xi(t.h);(s.length!=0||t.i.length!=0)&&(C(t.ka,s),C(t.ka,t.i),t.h.i.length=0,M(t.i),t.i.length=0),t.l.ra()}}function yr(t,s,a){var h=a instanceof Ue?fe(a):new Ue(a);if(h.g!="")s&&(h.g=s+"."+h.g),Ft(h,h.s);else{var y=p.location;h=y.protocol,s=s?s+"."+y.hostname:y.hostname,y=+y.port;var w=new Ue(null);h&&xt(w,h),s&&(w.g=s),y&&Ft(w,y),a&&(w.l=a),h=w}return a=t.D,s=t.ya,a&&s&&U(h,a,s),U(h,"VER",t.la),It(t,h),h}function Ir(t,s,a){if(s&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return s=t.Ca&&!t.pa?new j(new Bt({eb:a})):new j(t.pa),s.Ha(t.J),s}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function wr(){}n=wr.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function oe(t,s){W.call(this),this.g=new lr(s),this.l=t,this.h=s&&s.messageUrlParams||null,t=s&&s.messageHeaders||null,s&&s.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=s&&s.initMessageHeaders||null,s&&s.messageContentType&&(t?t["X-WebChannel-Content-Type"]=s.messageContentType:t={"X-WebChannel-Content-Type":s.messageContentType}),s&&s.va&&(t?t["X-WebChannel-Client-Profile"]=s.va:t={"X-WebChannel-Client-Profile":s.va}),this.g.S=t,(t=s&&s.Sb)&&!Q(t)&&(this.g.m=t),this.v=s&&s.supportsCrossDomainXhr||!1,this.u=s&&s.sendRawJson||!1,(s=s&&s.httpSessionIdParam)&&!Q(s)&&(this.g.D=s,t=this.h,t!==null&&s in t&&(t=this.h,s in t&&delete t[s])),this.j=new Ke(this)}S(oe,W),oe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},oe.prototype.close=function(){xn(this.g)},oe.prototype.o=function(t){var s=this.g;if(typeof t=="string"){var a={};a.__data__=t,t=a}else this.u&&(a={},a.__data__=Tn(t),t=a);s.i.push(new Lo(s.Ya++,t)),s.G==3&&zt(s)},oe.prototype.N=function(){this.g.l=null,delete this.j,xn(this.g),delete this.g,oe.aa.N.call(this)};function Er(t){bn.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var s=t.__sm__;if(s){e:{for(const a in s){t=a;break e}t=void 0}(this.i=t)&&(t=this.i,s=s!==null&&t in s?s[t]:void 0),this.data=s}else this.data=t}S(Er,bn);function Tr(){Rn.call(this),this.status=1}S(Tr,Rn);function Ke(t){this.g=t}S(Ke,wr),Ke.prototype.ua=function(){Z(this.g,"a")},Ke.prototype.ta=function(t){Z(this.g,new Er(t))},Ke.prototype.sa=function(t){Z(this.g,new Tr)},Ke.prototype.ra=function(){Z(this.g,"b")},oe.prototype.send=oe.prototype.o,oe.prototype.open=oe.prototype.m,oe.prototype.close=oe.prototype.close,kn.NO_ERROR=0,kn.TIMEOUT=8,kn.HTTP_ERROR=6,Do.COMPLETE="complete",So.EventType=ht,ht.OPEN="a",ht.CLOSE="b",ht.ERROR="c",ht.MESSAGE="d",W.prototype.listen=W.prototype.K,j.prototype.listenOnce=j.prototype.L,j.prototype.getLastError=j.prototype.Ka,j.prototype.getLastErrorCode=j.prototype.Ba,j.prototype.getStatus=j.prototype.Z,j.prototype.getResponseJson=j.prototype.Oa,j.prototype.getResponseText=j.prototype.oa,j.prototype.send=j.prototype.ea,j.prototype.setWithCredentials=j.prototype.Ha}).apply(typeof Jt<"u"?Jt:typeof self<"u"?self:typeof window<"u"?window:{});const ns="@firebase/firestore";/**
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
 */class K{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}K.UNAUTHENTICATED=new K(null),K.GOOGLE_CREDENTIALS=new K("google-credentials-uid"),K.FIRST_PARTY=new K("first-party-uid"),K.MOCK_USER=new K("mock-user");/**
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
 */let Pt="10.12.3";/**
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
 */const nt=new ci("@firebase/firestore");function re(n,...e){if(nt.logLevel<=D.DEBUG){const i=e.map(Ei);nt.debug(`Firestore (${Pt}): ${n}`,...i)}}function wi(n,...e){if(nt.logLevel<=D.ERROR){const i=e.map(Ei);nt.error(`Firestore (${Pt}): ${n}`,...i)}}function ku(n,...e){if(nt.logLevel<=D.WARN){const i=e.map(Ei);nt.warn(`Firestore (${Pt}): ${n}`,...i)}}function Ei(n){if(typeof n=="string")return n;try{/**
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
*/return function(i){return JSON.stringify(i)}(n)}catch{return n}}/**
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
 */function Ti(n="Unexpected state"){const e=`FIRESTORE (${Pt}) INTERNAL ASSERTION FAILED: `+n;throw wi(e),new Error(e)}function si(n,e){n||Ti()}/**
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
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends ue{constructor(e,i){super(e,i),this.code=e,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class et{constructor(){this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}}/**
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
 */class lo{constructor(e,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Cu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,i){e.enqueueRetryable(()=>i(K.UNAUTHENTICATED))}shutdown(){}}class Pu{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,i){this.changeListener=i,e.enqueueRetryable(()=>i(this.token.user))}shutdown(){this.changeListener=null}}class Ou{constructor(e){this.t=e,this.currentUser=K.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,i){let r=this.i;const o=v=>this.i!==r?(r=this.i,i(v)):Promise.resolve();let c=new et;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new et,e.enqueueRetryable(()=>o(this.currentUser))};const l=()=>{const v=c;e.enqueueRetryable(async()=>{await v.promise,await o(this.currentUser)})},p=v=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=v,this.auth.addAuthTokenListener(this.o),l()};this.t.onInit(v=>p(v)),setTimeout(()=>{if(!this.auth){const v=this.t.getImmediate({optional:!0});v?p(v):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new et)}},0),l()}getToken(){const e=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then(r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(si(typeof r.accessToken=="string"),new lo(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return si(e===null||typeof e=="string"),new K(e)}}class Du{constructor(e,i,r){this.l=e,this.h=i,this.P=r,this.type="FirstParty",this.user=K.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Nu{constructor(e,i,r){this.l=e,this.h=i,this.P=r}getToken(){return Promise.resolve(new Du(this.l,this.h,this.P))}start(e,i){e.enqueueRetryable(()=>i(K.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Lu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Uu{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,i){const r=c=>{c.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const l=c.token!==this.R;return this.R=c.token,re("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?i(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable(()=>r(c))};const o=c=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.appCheck.addTokenListener(this.o)};this.A.onInit(c=>o(c)),setTimeout(()=>{if(!this.appCheck){const c=this.A.getImmediate({optional:!0});c?o(c):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(i=>i?(si(typeof i.token=="string"),this.R=i.token,new Lu(i.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Mu(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),i=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(i);else for(let r=0;r<n;r++)i[r]=Math.floor(256*Math.random());return i}/**
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
 */class xu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const o=Mu(40);for(let c=0;c<o.length;++c)r.length<20&&o[c]<i&&(r+=e.charAt(o[c]%e.length))}return r}}function uo(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Fu{constructor(e,i,r,o,c,l,p,v,E){this.databaseId=e,this.appId=i,this.persistenceKey=r,this.host=o,this.ssl=c,this.forceLongPolling=l,this.autoDetectLongPolling=p,this.longPollingOptions=v,this.useFetchStreams=E}}class ln{constructor(e,i){this.projectId=e,this.database=i||"(default)"}static empty(){return new ln("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ln&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var is,P;(P=is||(is={}))[P.OK=0]="OK",P[P.CANCELLED=1]="CANCELLED",P[P.UNKNOWN=2]="UNKNOWN",P[P.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",P[P.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",P[P.NOT_FOUND=5]="NOT_FOUND",P[P.ALREADY_EXISTS=6]="ALREADY_EXISTS",P[P.PERMISSION_DENIED=7]="PERMISSION_DENIED",P[P.UNAUTHENTICATED=16]="UNAUTHENTICATED",P[P.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",P[P.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",P[P.ABORTED=10]="ABORTED",P[P.OUT_OF_RANGE=11]="OUT_OF_RANGE",P[P.UNIMPLEMENTED=12]="UNIMPLEMENTED",P[P.INTERNAL=13]="INTERNAL",P[P.UNAVAILABLE=14]="UNAVAILABLE",P[P.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new ho([4294967295,4294967295],0);function Xn(){return typeof document<"u"?document:null}/**
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
 */class ju{constructor(e,i,r=1e3,o=1.5,c=6e4){this.oi=e,this.timerId=i,this.No=r,this.Lo=o,this.Bo=c,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const i=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),o=Math.max(0,i-r);o>0&&re("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.ko} ms, delay with jitter: ${i} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,o,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class Ai{constructor(e,i,r,o,c){this.asyncQueue=e,this.timerId=i,this.targetTimeMs=r,this.op=o,this.removalCallback=c,this.deferred=new et,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,i,r,o,c){const l=Date.now()+r,p=new Ai(e,i,l,o,c);return p.start(r),p}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(X.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bu(n,e){if(wi("AsyncQueue",`${e}: ${n}`),uo(n))return new J(X.UNAVAILABLE,`${e}: ${n}`);throw n}var rs,ss;(ss=rs||(rs={})).J_="default",ss.Cache="cache";/**
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
 */class Vu{constructor(e,i,r,o){this.authCredentials=e,this.appCheckCredentials=i,this.asyncQueue=r,this.databaseInfo=o,this.user=K.UNAUTHENTICATED,this.clientId=xu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async c=>{re("FirestoreClient","Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(r,c=>(re("FirestoreClient","Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new J(X.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new et;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(i){const r=Bu(i,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}/**
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
 */function fo(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const os=new Map;function Hu(n,e,i,r){if(e===!0&&r===!0)throw new J(X.INVALID_ARGUMENT,`${n} and ${i} cannot be used together.`)}function $u(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ti()}function zu(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new J(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=$u(n);throw new J(X.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${i}`)}}return n}/**
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
 */class as{constructor(e){var i,r;if(e.host===void 0){if(e.ssl!==void 0)throw new J(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(i=e.ssl)===null||i===void 0||i;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new J(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Hu("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fo((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new J(X.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new J(X.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new J(X.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,o){return r.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class po{constructor(e,i,r,o){this._authCredentials=e,this._appCheckCredentials=i,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new as({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new J(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new J(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new as(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Cu;switch(r.type){case"firstParty":return new Nu(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(i){const r=os.get(i);r&&(re("ComponentProvider","Removing Datastore"),os.delete(i),r.terminate())}(this),Promise.resolve()}}function Wu(n,e,i,r={}){var o;const c=(n=zu(n,po))._getSettings(),l=`${e}:${i}`;if(c.host!=="firestore.googleapis.com"&&c.host!==l&&ku("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},c),{host:l,ssl:!1})),r.mockUserToken){let p,v;if(typeof r.mockUserToken=="string")p=r.mockUserToken,v=K.MOCK_USER;else{p=gs(r.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new J(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new K(E)}n._authCredentials=new Pu(new lo(p,v))}}/**
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
 */class Gu{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new ju(this,"async_queue_retry"),this.hu=()=>{const i=Xn();i&&re("AsyncQueue","Visibility state changed to "+i.visibilityState),this.Yo.Wo()};const e=Xn();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const i=Xn();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const i=new et;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(i.resolve,i.reject),i.promise)).then(()=>i.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!uo(e))throw e;re("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const i=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const o=function(l){let p=l.message||"";return l.stack&&(p=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),p}(r);throw wi("INTERNAL UNHANDLED ERROR: ",o),r}).then(r=>(this.uu=!1,r))));return this.iu=i,i}enqueueAfterDelay(e,i,r){this.Pu(),this.lu.indexOf(e)>-1&&(i=0);const o=Ai.createAndSchedule(this,e,i,r,c=>this.Eu(c));return this._u.push(o),o}Pu(){this.au&&Ti()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const i of this._u)if(i.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((i,r)=>i.targetTimeMs-r.targetTimeMs);for(const i of this._u)if(i.skipDelay(),e!=="all"&&i.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const i=this._u.indexOf(e);this._u.splice(i,1)}}class qu extends po{constructor(e,i,r,o){super(e,i,r,o),this.type="firestore",this._queue=function(){return new Gu}(),this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Xu(this),this._firestoreClient.terminate()}}function Ku(n,e){const i=typeof n=="object"?n:li(),r=typeof n=="string"?n:"(default)",o=un(i,"firestore").getImmediate({identifier:r});if(!o._initialized){const c=ds("firestore");c&&Wu(o,...c)}return o}function Xu(n){var e,i,r;const o=n._freezeSettings(),c=function(p,v,E,A){return new Fu(p,v,E,A.host,A.ssl,A.experimentalForceLongPolling,A.experimentalAutoDetectLongPolling,fo(A.experimentalLongPollingOptions),A.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._firestoreClient=new Vu(n._authCredentials,n._appCheckCredentials,n._queue,c),!((i=o.localCache)===null||i===void 0)&&i._offlineComponentProvider&&(!((r=o.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:o.localCache.kind,_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider})}(function(e,i=!0){(function(o){Pt=o})(ze),Ve(new Ne("firestore",(r,{instanceIdentifier:o,options:c})=>{const l=r.getProvider("app").getImmediate(),p=new qu(new Ou(r.getProvider("auth-internal")),new Uu(r.getProvider("app-check-internal")),function(E,A){if(!Object.prototype.hasOwnProperty.apply(E.options,["projectId"]))throw new J(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ln(E.options.projectId,A)}(l,o),l);return c=Object.assign({useFetchStreams:i},c),p._setSettings(c),p},"PUBLIC").setMultipleInstances(!0)),ce(ns,"4.6.4",e),ce(ns,"4.6.4","esm2017")})();const Ju={apiKey:"AIzaSyBp3FCZooC20Kg-ctztPaL6cH_udz1oJQo",authDomain:"xprojreact.firebaseapp.com",projectId:"xprojVITE",storageBucket:"xprojVITE.appspot.com",messagingSenderId:"188618487582",appId:"1:188618487582:web:56f2b99e3356dd08e63b0f",measurementId:"G-LYJXQYRYBV"},bi=vs(Ju);Ru(bi);Ku(bi);const Yu=Th(bi),Zu=async n=>{try{const e=Eh(Yu,n);return await wh(e)}catch{throw new Error("Error getting file from Firebase Storage")}};export{Zu as g};
