(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Mg90:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var r=u("pMnS"),i=u("SVse"),s=u("s7LF");class o{constructor(l){this.userService=l}ngOnInit(){}getUser(){this.userService.getUser().subscribe(l=>this.user=l)}getAllUsers(){this.userService.getUsers().subscribe(l=>this.users=l)}}const a=[{firstName:"Jesse",lastName:"Pinkman",position:"Manufacturer",cars:[{brand:"BMW",model:"M3",kW:338}]},{firstName:"Walter",lastName:"White",position:"CEO",cars:[{brand:"BMW",model:"335i",kW:225},{brand:"Lamborghini",model:"Aventador",kW:566}]}];var c=u("LRne");class b{deserialize(l){return Object.assign(this,l)}getHp(){return 1.36*this.kW}}class g{deserialize(l){return Object.assign(this,l),this.cars=l.cars.map(l=>(new b).deserialize(l)),this}getFullName(){return this.firstName+" "+this.lastName}}let d=(()=>{class l{constructor(){}getUser(){return Object(c.a)((new g).deserialize(a[0]))}getUsers(){let l=[];return a.forEach(n=>{l.push((new g).deserialize(n))}),Object(c.a)(l)}}return l.ngInjectableDef=e.Ub({factory:function(){return new l},token:l,providedIn:"root"}),l})();var p=e.tb({encapsulation:0,styles:[[""]],data:{}});function h(l){return e.Rb(0,[(l()(),e.vb(0,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Pb(1,null,[" "," "," with "," hp. "]))],null,function(l,n){var u=n.context.$implicit.brand,e=n.context.$implicit.model,t=n.context.$implicit.getHp();l(n,1,0,u,e,t)})}function m(l){return e.Rb(0,[(l()(),e.vb(0,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),e.Pb(1,null,[" User is called ",". He has the following cars: "])),(l()(),e.vb(2,0,null,null,2,"ul",[],null,null,null,null,null)),(l()(),e.kb(16777216,null,null,1,null,h)),e.ub(4,278528,null,0,i.m,[e.Q,e.M,e.r],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,4,0,n.component.user.cars)},function(l,n){l(n,1,0,n.component.user.getFullName())})}function v(l){return e.Rb(0,[(l()(),e.vb(0,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Pb(1,null,[" "," is "," and has "," cars "]))],null,function(l,n){var u=n.context.$implicit.getFullName();l(n,1,0,u,n.context.$implicit.position,n.context.$implicit.cars.length)})}function f(l){return e.Rb(0,[(l()(),e.vb(0,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),e.vb(1,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e.vb(2,0,null,null,2,"ul",[],null,null,null,null,null)),(l()(),e.kb(16777216,null,null,1,null,v)),e.ub(4,278528,null,0,i.m,[e.Q,e.M,e.r],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,4,0,n.component.users)},null)}function F(l){return e.Rb(0,[(l()(),e.vb(0,0,null,null,17,"div",[["style","width: 400px; margin: auto;"]],null,null,null,null,null)),(l()(),e.vb(1,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.Pb(-1,null,["Angular 7 model showcase"])),(l()(),e.vb(3,0,null,null,6,"input",[["placeholder","User ID"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var t=!0,r=l.component;return"input"===n&&(t=!1!==e.Hb(l,4)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.Hb(l,4).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.Hb(l,4)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.Hb(l,4)._compositionEnd(u.target.value)&&t),"change"===n&&(t=!1!==e.Hb(l,5).onChange(u.target.value)&&t),"input"===n&&(t=!1!==e.Hb(l,5).onChange(u.target.value)&&t),"blur"===n&&(t=!1!==e.Hb(l,5).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(r.userId=u)&&t),t},null,null)),e.ub(4,16384,null,0,s.d,[e.E,e.k,[2,s.a]],null,null),e.ub(5,16384,null,0,s.x,[e.E,e.k],null,null),e.Mb(1024,null,s.q,function(l,n){return[l,n]},[s.d,s.x]),e.ub(7,671744,null,0,s.v,[[8,null],[8,null],[8,null],[6,s.q]],{model:[0,"model"]},{update:"ngModelChange"}),e.Mb(2048,null,s.r,null,[s.v]),e.ub(9,16384,null,0,s.s,[[4,s.r]],null,null),(l()(),e.vb(10,0,null,null,1,"button",[["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.getUser()&&e),e},null,null)),(l()(),e.Pb(-1,null,["Get user"])),(l()(),e.vb(12,0,null,null,1,"button",[["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.getAllUsers()&&e),e},null,null)),(l()(),e.Pb(-1,null,["Get all users"])),(l()(),e.kb(16777216,null,null,1,null,m)),e.ub(15,16384,null,0,i.n,[e.Q,e.M],{ngIf:[0,"ngIf"]},null),(l()(),e.kb(16777216,null,null,1,null,f)),e.ub(17,16384,null,0,i.n,[e.Q,e.M],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,7,0,u.userId),l(n,15,0,u.user),l(n,17,0,u.users)},function(l,n){l(n,3,0,e.Hb(n,9).ngClassUntouched,e.Hb(n,9).ngClassTouched,e.Hb(n,9).ngClassPristine,e.Hb(n,9).ngClassDirty,e.Hb(n,9).ngClassValid,e.Hb(n,9).ngClassInvalid,e.Hb(n,9).ngClassPending)})}function k(l){return e.Rb(0,[(l()(),e.vb(0,0,null,null,1,"app-home",[],null,null,null,F,p)),e.ub(1,114688,null,0,o,[d],null,null)],function(l,n){l(n,1,0)},null)}var H=e.rb("app-home",o,k,{},{},[]),M=u("iInd");class w{}u.d(n,"AngularModelModuleNgFactory",function(){return C});var C=e.sb(t,[],function(l){return e.Eb([e.Fb(512,e.j,e.db,[[8,[r.a,H]],[3,e.j],e.w]),e.Fb(4608,i.p,i.o,[e.t,[2,i.H]]),e.Fb(4608,s.G,s.G,[]),e.Fb(1073742336,i.c,i.c,[]),e.Fb(1073742336,M.p,M.p,[[2,M.u],[2,M.l]]),e.Fb(1073742336,w,w,[]),e.Fb(1073742336,s.F,s.F,[]),e.Fb(1073742336,s.m,s.m,[]),e.Fb(1073742336,t,t,[]),e.Fb(1024,M.j,function(){return[[{path:"",component:o,children:[{path:"",pathMatch:"full",redirectTo:"home"},{path:"home",component:o}]}]]},[])])})}}]);