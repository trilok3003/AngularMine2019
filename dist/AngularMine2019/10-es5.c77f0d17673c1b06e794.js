(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{XTli:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),o=function(){return function(){}}(),r=u("pMnS"),e=u("gIcY"),a=u("Ip0R"),i=function(){function l(l){this.carOrderService=l,this.car=this.carOrderService.car}return l.prototype.ngOnInit=function(){},l}(),c=u("mrSG"),s=u("26FU"),b={color:"#000000",motors:1,battery:220,total:35e3},d=function(){function l(){this._carChanges=new s.a(b),this.car=this._carChanges.asObservable(),this.value=Math.random()}return l.prototype.updateColor=function(l){var n=c.__assign({},this._carChanges.value,{color:l});this.calculateTotal(n),this._carChanges.next(n)},l.prototype.updateMotors=function(l){var n=c.__assign({},this._carChanges.value,{motors:l});this.calculateTotal(n),this._carChanges.next(n)},l.prototype.updateBattery=function(l){var n=c.__assign({},this._carChanges.value,{battery:l});this.calculateTotal(n),this._carChanges.next(n)},l.prototype.calculateTotal=function(l){return l.total=35e3,2===l.motors&&(l.total=l.total+7e3),"#000000"!==l.color&&(l.total=l.total+1500),265==+l.battery&&(l.total=l.total+4e3),310==+l.battery&&(l.total=l.total+6e3),l.total},l.ngInjectableDef=t.Wb({factory:function(){return new l},token:l,providedIn:"root"}),l}(),g=t.vb({encapsulation:0,styles:[[".total[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{border-top:1px solid #ccc;padding:12px 12px 0;margin:12px -12px 4px}"]],data:{}});function p(l){return t.Tb(0,[t.Lb(0,a.d,[t.v]),(l()(),t.xb(1,0,null,null,4,"div",[["class","total"]],null,null,null,null,null)),(l()(),t.xb(2,0,null,null,3,"h3",[],null,null,null,null,null)),(l()(),t.Rb(3,null,["Total: ",""])),t.Lb(131072,a.b,[t.h]),t.Nb(5,1)],null,function(l,n){var u,o=n.component,r=t.Sb(n,3,0,l(n,5,0,t.Jb(n,0),null==(u=t.Sb(n,3,0,t.Jb(n,4).transform(o.car)))?null:u.total));l(n,3,0,r)})}var h=function(){function l(l,n){var u=this;this.carOrderService=l,this.formBuilder=n,this.total=10,this.car=this.carOrderService.car,this.form=this.formBuilder.group({color:["#000000"],motors:[1],battery:[220]}),this.form.valueChanges.subscribe(function(l){u.carOrderService.updateBattery(l.battery),u.carOrderService.updateMotors(l.motors),u.carOrderService.updateColor(l.color)})}return l.prototype.log=function(){console.log(this.form.value)},l.prototype.ngOnInit=function(){},l}(),m=t.vb({encapsulation:0,styles:[["form[_ngcontent-%COMP%]{border:2px solid #ccc;padding:12px;margin-bottom:24px;max-width:200px;border-radius:6px}form[_ngcontent-%COMP%]:hover{background:#fcfcfc}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin:0 0 24px}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{padding:4px 8px;border:1px solid #ccc;border-radius:2px;margin-bottom:24px;display:block}select[_ngcontent-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none}"]],data:{}});function v(l){return t.Tb(0,[(l()(),t.xb(0,0,null,null,46,"form",[["novalidate",""]],[[4,"border-color",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var o=!0,r=l.component;return"submit"===n&&(o=!1!==t.Jb(l,2).onSubmit(u)&&o),"reset"===n&&(o=!1!==t.Jb(l,2).onReset()&&o),"ngSubmit"===n&&(o=!1!==r.log()&&o),o},null,null)),t.wb(1,16384,null,0,e.J,[],null,null),t.wb(2,540672,null,0,e.k,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.Ob(2048,null,e.c,null,[e.k]),t.wb(4,16384,null,0,e.t,[[4,e.c]],null,null),t.Lb(131072,a.b,[t.h]),(l()(),t.xb(6,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Rb(-1,null,["EV Car Order \ud83d\ude97"])),(l()(),t.xb(8,0,null,null,1,"label",[["for","color"]],null,null,null,null,null)),(l()(),t.Rb(-1,null,["Color \ud83c\udfa8"])),(l()(),t.xb(10,0,null,null,5,"input",[["formControlName","color"],["id","color"],["type","color"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.Jb(l,11)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Jb(l,11).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Jb(l,11)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Jb(l,11)._compositionEnd(u.target.value)&&o),o},null,null)),t.wb(11,16384,null,0,e.d,[t.G,t.k,[2,e.a]],null,null),t.Ob(1024,null,e.q,function(l){return[l]},[e.d]),t.wb(13,671744,null,0,e.i,[[3,e.c],[8,null],[8,null],[6,e.q],[2,e.H]],{name:[0,"name"]},null),t.Ob(2048,null,e.r,null,[e.i]),t.wb(15,16384,null,0,e.s,[[4,e.r]],null,null),(l()(),t.xb(16,0,null,null,1,"label",[["for","motors"]],null,null,null,null,null)),(l()(),t.Rb(-1,null,["Motors \u2699"])),(l()(),t.xb(18,0,null,null,6,"input",[["formControlName","motors"],["id","motors"],["max","2"],["min","1"],["type","number"],["value","1"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.Jb(l,19)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Jb(l,19).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Jb(l,19)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Jb(l,19)._compositionEnd(u.target.value)&&o),"change"===n&&(o=!1!==t.Jb(l,20).onChange(u.target.value)&&o),"input"===n&&(o=!1!==t.Jb(l,20).onChange(u.target.value)&&o),"blur"===n&&(o=!1!==t.Jb(l,20).onTouched()&&o),o},null,null)),t.wb(19,16384,null,0,e.d,[t.G,t.k,[2,e.a]],null,null),t.wb(20,16384,null,0,e.x,[t.G,t.k],null,null),t.Ob(1024,null,e.q,function(l,n){return[l,n]},[e.d,e.x]),t.wb(22,671744,null,0,e.i,[[3,e.c],[8,null],[8,null],[6,e.q],[2,e.H]],{name:[0,"name"]},null),t.Ob(2048,null,e.r,null,[e.i]),t.wb(24,16384,null,0,e.s,[[4,e.r]],null,null),(l()(),t.xb(25,0,null,null,1,"label",[["for","battery"]],null,null,null,null,null)),(l()(),t.Rb(-1,null,["Battery \u26a1"])),(l()(),t.xb(27,0,null,null,17,"select",[["formControlName","battery"],["id","battery"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],function(l,n,u){var o=!0;return"change"===n&&(o=!1!==t.Jb(l,28).onChange(u.target.value)&&o),"blur"===n&&(o=!1!==t.Jb(l,28).onTouched()&&o),o},null,null)),t.wb(28,16384,null,0,e.D,[t.G,t.k],null,null),t.Ob(1024,null,e.q,function(l){return[l]},[e.D]),t.wb(30,671744,null,0,e.i,[[3,e.c],[8,null],[8,null],[6,e.q],[2,e.H]],{name:[0,"name"]},null),t.Ob(2048,null,e.r,null,[e.i]),t.wb(32,16384,null,0,e.s,[[4,e.r]],null,null),(l()(),t.xb(33,0,null,null,3,"option",[["value","220"]],null,null,null,null,null)),t.wb(34,147456,null,0,e.w,[t.k,t.G,[2,e.D]],{value:[0,"value"]},null),t.wb(35,147456,null,0,e.I,[t.k,t.G,[8,null]],{value:[0,"value"]},null),(l()(),t.Rb(-1,null,["Standard (200mi)"])),(l()(),t.xb(37,0,null,null,3,"option",[["value","265"]],null,null,null,null,null)),t.wb(38,147456,null,0,e.w,[t.k,t.G,[2,e.D]],{value:[0,"value"]},null),t.wb(39,147456,null,0,e.I,[t.k,t.G,[8,null]],{value:[0,"value"]},null),(l()(),t.Rb(-1,null,["Mid Range (265mi) +$4000"])),(l()(),t.xb(41,0,null,null,3,"option",[["value","310"]],null,null,null,null,null)),t.wb(42,147456,null,0,e.w,[t.k,t.G,[2,e.D]],{value:[0,"value"]},null),t.wb(43,147456,null,0,e.I,[t.k,t.G,[8,null]],{value:[0,"value"]},null),(l()(),t.Rb(-1,null,["Long Range (310mi) +$6000"])),(l()(),t.xb(45,0,null,null,1,"app-car-total",[],null,null,null,p,g)),t.wb(46,114688,null,0,i,[d],null,null)],function(l,n){l(n,2,0,n.component.form),l(n,13,0,"color"),l(n,22,0,"motors"),l(n,30,0,"battery"),l(n,34,0,"220"),l(n,35,0,"220"),l(n,38,0,"265"),l(n,39,0,"265"),l(n,42,0,"310"),l(n,43,0,"310"),l(n,46,0)},function(l,n){var u,o=n.component;l(n,0,0,null==(u=t.Sb(n,0,0,t.Jb(n,5).transform(o.car)))?null:u.color,t.Jb(n,4).ngClassUntouched,t.Jb(n,4).ngClassTouched,t.Jb(n,4).ngClassPristine,t.Jb(n,4).ngClassDirty,t.Jb(n,4).ngClassValid,t.Jb(n,4).ngClassInvalid,t.Jb(n,4).ngClassPending),l(n,10,0,t.Jb(n,15).ngClassUntouched,t.Jb(n,15).ngClassTouched,t.Jb(n,15).ngClassPristine,t.Jb(n,15).ngClassDirty,t.Jb(n,15).ngClassValid,t.Jb(n,15).ngClassInvalid,t.Jb(n,15).ngClassPending),l(n,18,0,t.Jb(n,24).ngClassUntouched,t.Jb(n,24).ngClassTouched,t.Jb(n,24).ngClassPristine,t.Jb(n,24).ngClassDirty,t.Jb(n,24).ngClassValid,t.Jb(n,24).ngClassInvalid,t.Jb(n,24).ngClassPending),l(n,27,0,t.Jb(n,32).ngClassUntouched,t.Jb(n,32).ngClassTouched,t.Jb(n,32).ngClassPristine,t.Jb(n,32).ngClassDirty,t.Jb(n,32).ngClassValid,t.Jb(n,32).ngClassInvalid,t.Jb(n,32).ngClassPending)})}var f=function(){function l(l){this.carService=l,this.orders=[{}],this.value=this.carService.value}return l.prototype.addOrder=function(){this.orders.push({})},l.prototype.ngOnInit=function(){},l}(),C=t.vb({encapsulation:0,styles:[[".orders[_ngcontent-%COMP%]{display:grid;grid-gap:16px;grid-template-columns:repeat(3,1fr);max-width:660px}"]],data:{}});function J(l){return t.Tb(0,[(l()(),t.xb(0,0,null,null,1,"app-car-order",[],null,null,null,v,m)),t.wb(1,114688,null,0,h,[d,e.f],null,null)],function(l,n){l(n,1,0)},null)}function x(l){return t.Tb(0,[(l()(),t.xb(0,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),t.xb(1,0,null,null,1,"button",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.addOrder()&&t),t},null,null)),(l()(),t.Rb(-1,null,["Add Car"])),(l()(),t.xb(3,0,null,null,2,"section",[["class","orders"]],null,null,null,null,null)),(l()(),t.mb(16777216,null,null,1,null,J)),t.wb(5,278528,null,0,a.m,[t.S,t.O,t.t],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,5,0,n.component.orders)},null)}function y(l){return t.Tb(0,[(l()(),t.xb(0,0,null,null,1,"app-car",[],null,null,null,x,C)),t.wb(1,114688,null,0,f,[d],null,null)],function(l,n){l(n,1,0)},null)}var w=t.tb("app-car",f,y,{},{},[]),O=u("ZYCi"),_=function(){return function(){}}();u.d(n,"CarsModuleNgFactory",function(){return S});var S=t.ub(o,[],function(l){return t.Gb([t.Hb(512,t.j,t.fb,[[8,[r.a,w]],[3,t.j],t.y]),t.Hb(4608,a.p,a.o,[t.v,[2,a.H]]),t.Hb(4608,e.f,e.f,[]),t.Hb(4608,e.G,e.G,[]),t.Hb(1073742336,a.c,a.c,[]),t.Hb(1073742336,e.F,e.F,[]),t.Hb(1073742336,e.B,e.B,[]),t.Hb(1073742336,O.p,O.p,[[2,O.u],[2,O.l]]),t.Hb(1073742336,_,_,[]),t.Hb(1073742336,o,o,[]),t.Hb(1024,O.j,function(){return[[{path:"",component:f}]]},[])])})}}]);