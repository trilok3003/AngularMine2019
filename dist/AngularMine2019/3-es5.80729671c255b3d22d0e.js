(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+qE3":function(n,t,e){"use strict";var l,i="object"==typeof Reflect?Reflect:null,r=i&&"function"==typeof i.apply?i.apply:function(n,t,e){return Function.prototype.apply.call(n,t,e)};l=i&&"function"==typeof i.ownKeys?i.ownKeys:Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:function(n){return Object.getOwnPropertyNames(n)};var u=Number.isNaN||function(n){return n!=n};function o(){o.init.call(this)}n.exports=o,o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var s=10;function a(n){return void 0===n._maxListeners?o.defaultMaxListeners:n._maxListeners}function c(n,t,e,l){var i,r,u;if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e);if(void 0===(r=n._events)?(r=n._events=Object.create(null),n._eventsCount=0):(void 0!==r.newListener&&(n.emit("newListener",t,e.listener?e.listener:e),r=n._events),u=r[t]),void 0===u)u=r[t]=e,++n._eventsCount;else if("function"==typeof u?u=r[t]=l?[e,u]:[u,e]:l?u.unshift(e):u.push(e),(i=a(n))>0&&u.length>i&&!u.warned){u.warned=!0;var o=new Error("Possible EventEmitter memory leak detected. "+u.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");o.name="MaxListenersExceededWarning",o.emitter=n,o.type=t,o.count=u.length,console&&console.warn&&console.warn(o)}return n}function f(n,t,e){var l={fired:!1,wrapFn:void 0,target:n,type:t,listener:e},i=(function(){for(var n=[],t=0;t<arguments.length;t++)n.push(arguments[t]);this.fired||(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,r(this.listener,this.target,n))}).bind(l);return i.listener=e,l.wrapFn=i,i}function p(n,t,e){var l=n._events;if(void 0===l)return[];var i=l[t];return void 0===i?[]:"function"==typeof i?e?[i.listener||i]:[i]:e?function(n){for(var t=new Array(n.length),e=0;e<t.length;++e)t[e]=n[e].listener||n[e];return t}(i):h(i,i.length)}function v(n){var t=this._events;if(void 0!==t){var e=t[n];if("function"==typeof e)return 1;if(void 0!==e)return e.length}return 0}function h(n,t){for(var e=new Array(t),l=0;l<t;++l)e[l]=n[l];return e}Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(n){if("number"!=typeof n||n<0||u(n))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+n+".");s=n}}),o.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(n){if("number"!=typeof n||n<0||u(n))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+n+".");return this._maxListeners=n,this},o.prototype.getMaxListeners=function(){return a(this)},o.prototype.emit=function(n){for(var t=[],e=1;e<arguments.length;e++)t.push(arguments[e]);var l="error"===n,i=this._events;if(void 0!==i)l=l&&void 0===i.error;else if(!l)return!1;if(l){var u;if(t.length>0&&(u=t[0]),u instanceof Error)throw u;var o=new Error("Unhandled error."+(u?" ("+u.message+")":""));throw o.context=u,o}var s=i[n];if(void 0===s)return!1;if("function"==typeof s)r(s,this,t);else{var a=s.length,c=h(s,a);for(e=0;e<a;++e)r(c[e],this,t)}return!0},o.prototype.on=o.prototype.addListener=function(n,t){return c(this,n,t,!1)},o.prototype.prependListener=function(n,t){return c(this,n,t,!0)},o.prototype.once=function(n,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.on(n,f(this,n,t)),this},o.prototype.prependOnceListener=function(n,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.prependListener(n,f(this,n,t)),this},o.prototype.off=o.prototype.removeListener=function(n,t){var e,l,i,r,u;if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);if(void 0===(l=this._events))return this;if(void 0===(e=l[n]))return this;if(e===t||e.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete l[n],l.removeListener&&this.emit("removeListener",n,e.listener||t));else if("function"!=typeof e){for(i=-1,r=e.length-1;r>=0;r--)if(e[r]===t||e[r].listener===t){u=e[r].listener,i=r;break}if(i<0)return this;0===i?e.shift():function(n,t){for(;t+1<n.length;t++)n[t]=n[t+1];n.pop()}(e,i),1===e.length&&(l[n]=e[0]),void 0!==l.removeListener&&this.emit("removeListener",n,u||t)}return this},o.prototype.removeAllListeners=function(n){var t,e,l;if(void 0===(e=this._events))return this;if(void 0===e.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==e[n]&&(0==--this._eventsCount?this._events=Object.create(null):delete e[n]),this;if(0===arguments.length){var i,r=Object.keys(e);for(l=0;l<r.length;++l)"removeListener"!==(i=r[l])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=e[n]))this.removeListener(n,t);else if(void 0!==t)for(l=t.length-1;l>=0;l--)this.removeListener(n,t[l]);return this},o.prototype.listeners=function(n){return p(this,n,!0)},o.prototype.rawListeners=function(n){return p(this,n,!1)},o.listenerCount=function(n,t){return"function"==typeof n.listenerCount?n.listenerCount(t):v.call(n,t)},o.prototype.listenerCount=v,o.prototype.eventNames=function(){return this._eventsCount>0?l(this._events):[]}},aPkW:function(n,t,e){"use strict";e.r(t);var l=e("CcnG"),i=function(){return function(){}}(),r=e("pMnS"),u=e("Ip0R"),o=e("ZYCi"),s=e("+qE3"),a=e("VnD/"),c=function(){function n(n){this.router=n,this.navToggled=new s.EventEmitter}return n.prototype.ngOnInit=function(){var n=this;this.router.events.pipe(Object(a.a)(function(t){return t instanceof o.d&&n.navOpen})).subscribe(function(t){return n.toggleNav()})},n.prototype.toggleNav=function(){this.navOpen=!this.navOpen,this.navToggled.emit(this.navOpen)},n}(),f=l.ub({encapsulation:0,styles:[[""]],data:{}});function p(n){return l.Sb(0,[(n()(),l.wb(0,0,null,null,16,"div",[["class","card"]],null,null,null,null,null)),(n()(),l.wb(1,0,null,null,15,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),l.wb(2,0,null,null,14,"nav",[["class","navbar navbar-expand-lg navbar-light bg-light"]],null,null,null,null,null)),(n()(),l.wb(3,0,null,null,6,"a",[["class","navbar-brand"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,t,e){var i=!0;return"click"===t&&(i=!1!==l.Ib(n,4).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&i),i},null,null)),l.vb(4,671744,[[2,4]],0,o.o,[o.l,o.a,u.j],{routerLink:[0,"routerLink"]},null),l.vb(5,1720320,null,2,o.n,[o.l,l.k,l.G,[2,o.m],[2,o.o]],{routerLinkActiveOptions:[0,"routerLinkActiveOptions"],routerLinkActive:[1,"routerLinkActive"]},null),l.Ob(603979776,1,{links:1}),l.Ob(603979776,2,{linksWithHrefs:1}),l.Lb(8,{exact:0}),(n()(),l.Qb(-1,null,["List"])),(n()(),l.wb(10,0,null,null,6,"a",[["class","navbar-brand"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,t,e){var i=!0;return"click"===t&&(i=!1!==l.Ib(n,11).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&i),i},null,null)),l.vb(11,671744,[[4,4]],0,o.o,[o.l,o.a,u.j],{routerLink:[0,"routerLink"]},null),l.vb(12,1720320,null,2,o.n,[o.l,l.k,l.G,[2,o.m],[2,o.o]],{routerLinkActiveOptions:[0,"routerLinkActiveOptions"],routerLinkActive:[1,"routerLinkActive"]},null),l.Ob(603979776,3,{links:1}),l.Ob(603979776,4,{linksWithHrefs:1}),l.Lb(15,{exact:0}),(n()(),l.Qb(-1,null,["View"]))],function(n,t){n(t,4,0,"list");var e=n(t,8,0,!0);n(t,5,0,e,"active"),n(t,11,0,"view");var l=n(t,15,0,!0);n(t,12,0,l,"active")},function(n,t){n(t,3,0,l.Ib(t,4).target,l.Ib(t,4).href),n(t,10,0,l.Ib(t,11).target,l.Ib(t,11).href)})}var v=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),h=l.ub({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;padding-bottom:10px}p[_ngcontent-%COMP%]{font-size:12px;margin-bottom:0}"]],data:{}});function b(n){return l.Sb(0,[(n()(),l.wb(0,0,null,null,1,"p",[["class","text-center"]],null,null,null,null,null)),(n()(),l.Qb(-1,null,[" Trilok 2019 "]))],null,null)}var y=e("bne5"),d=e("Gi3i"),g=function(){function n(n){this.title=n,this.pageTitle="Home",this._initWinHeight=0}return n.prototype.ngOnInit=function(){var n=this;this.title.setTitle(this.pageTitle),Object(y.a)(window,"resize").pipe(Object(d.a)(200)).subscribe(function(t){return n._resizeFn(t)}),this._initWinHeight=window.innerHeight,this._resizeFn(null)},n.prototype.navToggledHandler=function(n){this.navOpen=n},n.prototype._resizeFn=function(n){this.minHeight=(n?n.target.innerHeight:this._initWinHeight)+"px"},n}(),m=e("ZYjt"),w=l.ub({encapsulation:0,styles:[[""]],data:{}});function L(n){return l.Sb(0,[(n()(),l.wb(0,0,null,null,11,"div",[["class","layout-overflow"]],null,null,null,null,null)),(n()(),l.wb(1,0,null,null,10,"div",[["class","layout-canvas"]],[[4,"min-height",null]],null,null,null,null)),l.Nb(512,null,u.B,u.C,[l.t,l.u,l.k,l.G]),l.vb(3,278528,null,0,u.k,[u.B],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),l.Lb(4,{"nav-open":0,"nav-closed":1}),(n()(),l.wb(5,0,null,null,1,"app-header",[],null,null,null,p,f)),l.vb(6,114688,null,0,c,[o.l],null,null),(n()(),l.wb(7,0,null,null,2,"div",[["class","layout-view"],["id","layout-view"]],null,null,null,null,null)),(n()(),l.wb(8,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),l.vb(9,212992,null,0,o.q,[o.b,l.R,l.j,[8,null],l.h],null,null),(n()(),l.wb(10,0,null,null,1,"app-footer",[],null,null,null,b,h)),l.vb(11,114688,null,0,v,[],null,null)],function(n,t){var e=t.component,l=n(t,4,0,e.navOpen,!e.navOpen);n(t,3,0,"layout-canvas",l),n(t,6,0),n(t,9,0),n(t,11,0)},function(n,t){n(t,1,0,t.component.minHeight)})}function O(n){return l.Sb(0,[(n()(),l.wb(0,0,null,null,1,"app-home",[],null,null,null,L,w)),l.vb(1,114688,null,0,g,[m.h],null,null)],function(n,t){n(t,1,0)},null)}var _=l.sb("app-home",g,O,{},{},[]),k=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),j=l.ub({encapsulation:0,styles:[[""]],data:{}});function x(n){return l.Sb(0,[(n()(),l.wb(0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),l.Qb(-1,null,["list works!"]))],null,null)}function C(n){return l.Sb(0,[(n()(),l.wb(0,0,null,null,1,"app-list",[],null,null,null,x,j)),l.vb(1,114688,null,0,k,[],null,null)],function(n,t){n(t,1,0)},null)}var E=l.sb("app-list",k,C,{},{},[]),T=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),A=l.ub({encapsulation:0,styles:[[""]],data:{}});function I(n){return l.Sb(0,[(n()(),l.wb(0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),l.Qb(-1,null,["view works!"]))],null,null)}function F(n){return l.Sb(0,[(n()(),l.wb(0,0,null,null,1,"app-view",[],null,null,null,I,A)),l.vb(1,114688,null,0,T,[],null,null)],function(n,t){n(t,1,0)},null)}var G=l.sb("app-view",T,F,{},{},[]),M=function(){return function(){}}();e.d(t,"CustomDashboardModuleNgFactory",function(){return R});var R=l.tb(i,[],function(n){return l.Fb([l.Gb(512,l.j,l.eb,[[8,[r.a,_,E,G]],[3,l.j],l.y]),l.Gb(4608,u.o,u.n,[l.v,[2,u.G]]),l.Gb(1073742336,u.c,u.c,[]),l.Gb(1073742336,o.p,o.p,[[2,o.u],[2,o.l]]),l.Gb(1073742336,M,M,[]),l.Gb(1073742336,i,i,[]),l.Gb(1024,o.j,function(){return[[{path:"",component:g,children:[{path:"list",component:k},{path:"",redirectTo:"list",pathMatch:"full"},{path:"view",component:T}]}]]},[])])})}}]);