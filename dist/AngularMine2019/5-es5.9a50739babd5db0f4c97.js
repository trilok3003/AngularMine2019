(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Mg90:function(n,l,u){"use strict";u.r(l);var t=u("CcnG"),e=function(){return function(){}}(),o=u("pMnS"),r=u("Ip0R"),i=u("gIcY"),c=function(){function n(n){this.userService=n}return n.prototype.ngOnInit=function(){},n.prototype.getUser=function(){var n=this;this.userService.getUser().subscribe(function(l){return n.user=l})},n.prototype.getAllUsers=function(){var n=this;this.userService.getUsers().subscribe(function(l){return n.users=l})},n}(),s=[{firstName:"Jesse",lastName:"Pinkman",position:"Manufacturer",cars:[{brand:"BMW",model:"M3",kW:338}]},{firstName:"Walter",lastName:"White",position:"CEO",cars:[{brand:"BMW",model:"335i",kW:225},{brand:"Lamborghini",model:"Aventador",kW:566}]}],a=u("F/XL"),b=function(){function n(){}return n.prototype.deserialize=function(n){return Object.assign(this,n)},n.prototype.getHp=function(){return 1.36*this.kW},n}(),p=function(){function n(){}return n.prototype.deserialize=function(n){return Object.assign(this,n),this.cars=n.cars.map(function(n){return(new b).deserialize(n)}),this},n.prototype.getFullName=function(){return this.firstName+" "+this.lastName},n}(),f=function(){function n(){}return n.prototype.getUser=function(){return Object(a.a)((new p).deserialize(s[0]))},n.prototype.getUsers=function(){var n=[];return s.forEach(function(l){n.push((new p).deserialize(l))}),Object(a.a)(n)},n.ngInjectableDef=t.Vb({factory:function(){return new n},token:n,providedIn:"root"}),n}(),g=t.ub({encapsulation:0,styles:[[""]],data:{}});function d(n){return t.Sb(0,[(n()(),t.wb(0,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),t.Qb(1,null,[" "," "," with "," hp. "]))],null,function(n,l){var u=l.context.$implicit.brand,t=l.context.$implicit.model,e=l.context.$implicit.getHp();n(l,1,0,u,t,e)})}function h(n){return t.Sb(0,[(n()(),t.wb(0,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),t.Qb(1,null,[" User is called ",". He has the following cars: "])),(n()(),t.wb(2,0,null,null,2,"ul",[],null,null,null,null,null)),(n()(),t.lb(16777216,null,null,1,null,d)),t.vb(4,278528,null,0,r.m,[t.R,t.O,t.t],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,4,0,l.component.user.cars)},function(n,l){n(l,1,0,l.component.user.getFullName())})}function m(n){return t.Sb(0,[(n()(),t.wb(0,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),t.Qb(1,null,[" "," is "," and has "," cars "]))],null,function(n,l){var u=l.context.$implicit.getFullName();n(l,1,0,u,l.context.$implicit.position,l.context.$implicit.cars.length)})}function v(n){return t.Sb(0,[(n()(),t.wb(0,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),t.wb(1,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),t.wb(2,0,null,null,2,"ul",[],null,null,null,null,null)),(n()(),t.lb(16777216,null,null,1,null,m)),t.vb(4,278528,null,0,r.m,[t.R,t.O,t.t],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,4,0,l.component.users)},null)}function w(n){return t.Sb(0,[(n()(),t.wb(0,0,null,null,17,"div",[["style","width: 400px; margin: auto;"]],null,null,null,null,null)),(n()(),t.wb(1,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),t.Qb(-1,null,["Angular 7 model showcase"])),(n()(),t.wb(3,0,null,null,6,"input",[["placeholder","User ID"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(n,l,u){var e=!0,o=n.component;return"input"===l&&(e=!1!==t.Ib(n,4)._handleInput(u.target.value)&&e),"blur"===l&&(e=!1!==t.Ib(n,4).onTouched()&&e),"compositionstart"===l&&(e=!1!==t.Ib(n,4)._compositionStart()&&e),"compositionend"===l&&(e=!1!==t.Ib(n,4)._compositionEnd(u.target.value)&&e),"change"===l&&(e=!1!==t.Ib(n,5).onChange(u.target.value)&&e),"input"===l&&(e=!1!==t.Ib(n,5).onChange(u.target.value)&&e),"blur"===l&&(e=!1!==t.Ib(n,5).onTouched()&&e),"ngModelChange"===l&&(e=!1!==(o.userId=u)&&e),e},null,null)),t.vb(4,16384,null,0,i.d,[t.G,t.k,[2,i.a]],null,null),t.vb(5,16384,null,0,i.w,[t.G,t.k],null,null),t.Nb(1024,null,i.p,function(n,l){return[n,l]},[i.d,i.w]),t.vb(7,671744,null,0,i.u,[[8,null],[8,null],[8,null],[6,i.p]],{model:[0,"model"]},{update:"ngModelChange"}),t.Nb(2048,null,i.q,null,[i.u]),t.vb(9,16384,null,0,i.r,[[4,i.q]],null,null),(n()(),t.wb(10,0,null,null,1,"button",[["type","button"]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.getUser()&&t),t},null,null)),(n()(),t.Qb(-1,null,["Get user"])),(n()(),t.wb(12,0,null,null,1,"button",[["type","button"]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.getAllUsers()&&t),t},null,null)),(n()(),t.Qb(-1,null,["Get all users"])),(n()(),t.lb(16777216,null,null,1,null,h)),t.vb(15,16384,null,0,r.n,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(n()(),t.lb(16777216,null,null,1,null,v)),t.vb(17,16384,null,0,r.n,[t.R,t.O],{ngIf:[0,"ngIf"]},null)],function(n,l){var u=l.component;n(l,7,0,u.userId),n(l,15,0,u.user),n(l,17,0,u.users)},function(n,l){n(l,3,0,t.Ib(l,9).ngClassUntouched,t.Ib(l,9).ngClassTouched,t.Ib(l,9).ngClassPristine,t.Ib(l,9).ngClassDirty,t.Ib(l,9).ngClassValid,t.Ib(l,9).ngClassInvalid,t.Ib(l,9).ngClassPending)})}function I(n){return t.Sb(0,[(n()(),t.wb(0,0,null,null,1,"app-home",[],null,null,null,w,g)),t.vb(1,114688,null,0,c,[f],null,null)],function(n,l){n(l,1,0)},null)}var y=t.sb("app-home",c,I,{},{},[]),C=u("ZYCi"),G=function(){return function(){}}();u.d(l,"AngularModelModuleNgFactory",function(){return k});var k=t.tb(e,[],function(n){return t.Fb([t.Gb(512,t.j,t.eb,[[8,[o.a,y]],[3,t.j],t.y]),t.Gb(4608,r.p,r.o,[t.v,[2,r.H]]),t.Gb(4608,i.E,i.E,[]),t.Gb(1073742336,r.c,r.c,[]),t.Gb(1073742336,C.p,C.p,[[2,C.u],[2,C.l]]),t.Gb(1073742336,G,G,[]),t.Gb(1073742336,i.D,i.D,[]),t.Gb(1073742336,i.m,i.m,[]),t.Gb(1073742336,e,e,[]),t.Gb(1024,C.j,function(){return[[{path:"",component:c,children:[{path:"",pathMatch:"full",redirectTo:"home"},{path:"home",component:c}]}]]},[])])})}}]);