(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Mg90:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var r=u("pMnS"),s=u("SVse"),i=u("s7LF");class o{constructor(l){this.userService=l}ngOnInit(){}getUser(){this.userService.getUser().subscribe(l=>this.user=l)}getAllUsers(){this.userService.getUsers().subscribe(l=>this.users=l)}}const a=[{firstName:"Jesse",lastName:"Pinkman",position:"Manufacturer",cars:[{brand:"BMW",model:"M3",kW:338}]},{firstName:"Walter",lastName:"White",position:"CEO",cars:[{brand:"BMW",model:"335i",kW:225},{brand:"Lamborghini",model:"Aventador",kW:566}]}];var c=u("LRne");class b{deserialize(l){return Object.assign(this,l)}getHp(){return 1.36*this.kW}}class g{deserialize(l){return Object.assign(this,l),this.cars=l.cars.map(l=>(new b).deserialize(l)),this}getFullName(){return this.firstName+" "+this.lastName}}let p=(()=>{class l{constructor(){}getUser(){return Object(c.a)((new g).deserialize(a[0]))}getUsers(){let l=[];return a.forEach(n=>{l.push((new g).deserialize(n))}),Object(c.a)(l)}}return l.ngInjectableDef=t.Sb({factory:function(){return new l},token:l,providedIn:"root"}),l})();var d=t.rb({encapsulation:0,styles:[[""]],data:{}});function h(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Nb(1,null,[" "," "," with "," hp. "]))],null,function(l,n){var u=n.context.$implicit.brand,t=n.context.$implicit.model,e=n.context.$implicit.getHp();l(n,1,0,u,t,e)})}function m(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),t.Nb(1,null,[" User is called ",". He has the following cars: "])),(l()(),t.tb(2,0,null,null,2,"ul",[],null,null,null,null,null)),(l()(),t.ib(16777216,null,null,1,null,h)),t.sb(4,278528,null,0,s.k,[t.O,t.L,t.r],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,4,0,n.component.user.cars)},function(l,n){l(n,1,0,n.component.user.getFullName())})}function f(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Nb(1,null,[" "," is "," and has "," cars "]))],null,function(l,n){var u=n.context.$implicit.getFullName();l(n,1,0,u,n.context.$implicit.position,n.context.$implicit.cars.length)})}function v(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),t.tb(2,0,null,null,2,"ul",[],null,null,null,null,null)),(l()(),t.ib(16777216,null,null,1,null,f)),t.sb(4,278528,null,0,s.k,[t.O,t.L,t.r],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,4,0,n.component.users)},null)}function F(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,17,"div",[["style","width: 400px; margin: auto;"]],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["Angular 7 model showcase"])),(l()(),t.tb(3,0,null,null,6,"input",[["placeholder","User ID"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var e=!0,r=l.component;return"input"===n&&(e=!1!==t.Fb(l,4)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Fb(l,4).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Fb(l,4)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Fb(l,4)._compositionEnd(u.target.value)&&e),"change"===n&&(e=!1!==t.Fb(l,5).onChange(u.target.value)&&e),"input"===n&&(e=!1!==t.Fb(l,5).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t.Fb(l,5).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(r.userId=u)&&e),e},null,null)),t.sb(4,16384,null,0,i.d,[t.D,t.k,[2,i.a]],null,null),t.sb(5,16384,null,0,i.v,[t.D,t.k],null,null),t.Kb(1024,null,i.o,function(l,n){return[l,n]},[i.d,i.v]),t.sb(7,671744,null,0,i.t,[[8,null],[8,null],[8,null],[6,i.o]],{model:[0,"model"]},{update:"ngModelChange"}),t.Kb(2048,null,i.p,null,[i.t]),t.sb(9,16384,null,0,i.q,[[4,i.p]],null,null),(l()(),t.tb(10,0,null,null,1,"button",[["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.getUser()&&t),t},null,null)),(l()(),t.Nb(-1,null,["Get user"])),(l()(),t.tb(12,0,null,null,1,"button",[["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.getAllUsers()&&t),t},null,null)),(l()(),t.Nb(-1,null,["Get all users"])),(l()(),t.ib(16777216,null,null,1,null,m)),t.sb(15,16384,null,0,s.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,v)),t.sb(17,16384,null,0,s.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,7,0,u.userId),l(n,15,0,u.user),l(n,17,0,u.users)},function(l,n){l(n,3,0,t.Fb(n,9).ngClassUntouched,t.Fb(n,9).ngClassTouched,t.Fb(n,9).ngClassPristine,t.Fb(n,9).ngClassDirty,t.Fb(n,9).ngClassValid,t.Fb(n,9).ngClassInvalid,t.Fb(n,9).ngClassPending)})}function k(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,1,"app-home",[],null,null,null,F,d)),t.sb(1,114688,null,0,o,[p],null,null)],function(l,n){l(n,1,0)},null)}var C=t.pb("app-home",o,k,{},{},[]),N=u("iInd");class w{}u.d(n,"AngularModelModuleNgFactory",function(){return D});var D=t.qb(e,[],function(l){return t.Cb([t.Db(512,t.j,t.bb,[[8,[r.a,C]],[3,t.j],t.w]),t.Db(4608,s.n,s.m,[t.t,[2,s.E]]),t.Db(4608,i.C,i.C,[]),t.Db(1073742336,s.c,s.c,[]),t.Db(1073742336,N.p,N.p,[[2,N.u],[2,N.l]]),t.Db(1073742336,w,w,[]),t.Db(1073742336,i.B,i.B,[]),t.Db(1073742336,i.l,i.l,[]),t.Db(1073742336,e,e,[]),t.Db(1024,N.j,function(){return[[{path:"",component:o,children:[{path:"",pathMatch:"full",redirectTo:"home"},{path:"home",component:o}]}]]},[])])})}}]);