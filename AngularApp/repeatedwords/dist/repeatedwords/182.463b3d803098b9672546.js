(self.webpackChunkrepeatedwords=self.webpackChunkrepeatedwords||[]).push([[182],{8182:(t,a,e)=>{"use strict";e.r(a),e.d(a,{ChildRoutesModule:()=>A});var r=e(9681),i=e(665),o=e(8259),n=e.n(o);class s{constructor(t){this.textoplano=t}}var l=e(639),c=e(1841),d=e(677),h=e(7354);let p=(()=>{class t{constructor(t,a,e){this.httpClient=t,this.basePath=d.v,this.defaultHeaders=new c.WM,this.configuration=new h.V,a&&(this.basePath=a),e&&(this.configuration=e,this.basePath=a||e.basePath||this.basePath)}procesar(t,a="body",e=!0){const r=`${this.basePath}/api/repeatedwords`;let i=this.defaultHeaders;const o=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"]);null!=o&&(i=i.set("Accept",o));const n=this.configuration.selectHeaderContentType(["application/json","text/json","application/_*+json"]);return null!=n&&(i=i.set("Content-Type",n)),this.httpClient.request("post",r,{body:t,withCredentials:this.configuration.withCredentials,headers:i,observe:a,reportProgress:e})}}return t.\u0275fac=function(a){return new(a||t)(l.LFG(c.eN),l.LFG(d.GW,8),l.LFG(h.V,8))},t.\u0275prov=l.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var f=e(1159),Z=e(8583);function u(t,a){1&t&&(l.TgZ(0,"div"),l._uU(1," El texto es obligatorio. "),l.qZA())}function g(t,a){if(1&t&&(l.TgZ(0,"div",21),l.YNc(1,u,2,0,"div",22),l.qZA()),2&t){const t=l.oxw();l.xp6(1),l.Q6J("ngIf",null==t.form?null:t.form.controls.texto.errors.required)}}function m(t,a){1&t&&(l.O4$(),l.kcU(),l.TgZ(0,"div",23),l.TgZ(1,"div",24),l._UZ(2,"div",25),l._UZ(3,"div",25),l._UZ(4,"div",25),l.qZA(),l.TgZ(5,"div",26),l._UZ(6,"div",25),l._UZ(7,"div",25),l._UZ(8,"div",25),l.qZA(),l.qZA())}function b(t,a){1&t&&(l.O4$(),l.kcU(),l.TgZ(0,"div",8),l.TgZ(1,"div",27),l.TgZ(2,"label",28),l._uU(3,"Buscar Palabra"),l.qZA(),l.qZA(),l.qZA())}function v(t,a){1&t&&(l.TgZ(0,"div"),l._uU(1," La Palabra es obligatoria. "),l.qZA())}function T(t,a){if(1&t&&(l.TgZ(0,"div",21),l.YNc(1,v,2,0,"div",22),l.qZA()),2&t){const t=l.oxw(2);l.xp6(1),l.Q6J("ngIf",null==t.formSearch?null:t.formSearch.controls.palabra.errors.required)}}function q(t,a){if(1&t){const t=l.EpF();l.O4$(),l.kcU(),l.TgZ(0,"div",4),l.TgZ(1,"form",7),l.NdJ("submit",function(){return l.CHM(t),l.oxw().buscar()}),l.TgZ(2,"div",29),l.TgZ(3,"div",30),l._UZ(4,"input",31),l.YNc(5,T,2,1,"div",11),l.qZA(),l.TgZ(6,"div",12),l.TgZ(7,"div",8),l.TgZ(8,"div",32),l.TgZ(9,"button",33),l.O4$(),l.TgZ(10,"svg",34),l._UZ(11,"path",15),l._UZ(12,"circle",35),l._UZ(13,"line",36),l.qZA(),l.qZA(),l.qZA(),l.kcU(),l.TgZ(14,"div",32),l.TgZ(15,"a",37),l.NdJ("click",function(){return l.CHM(t),l.oxw().reload()}),l.O4$(),l.TgZ(16,"svg",38),l._UZ(17,"path",15),l._UZ(18,"path",39),l._UZ(19,"path",40),l.qZA(),l.qZA(),l.qZA(),l.kcU(),l.TgZ(20,"div",32),l.TgZ(21,"button",37),l.NdJ("click",function(){return l.CHM(t),l.oxw().limpiar()}),l.O4$(),l.TgZ(22,"svg",41),l._UZ(23,"path",15),l._UZ(24,"path",42),l._UZ(25,"line",43),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA()}if(2&t){const t=l.oxw();l.xp6(1),l.Q6J("formGroup",t.formSearch),l.xp6(4),l.Q6J("ngIf",t.isValidInputSearch("palabra")),l.xp6(4),l.Q6J("disabled",null==t.formSearch?null:t.formSearch.invalid)}}function _(t,a){if(1&t&&(l.TgZ(0,"tr"),l.TgZ(1,"td"),l._uU(2),l.qZA(),l.TgZ(3,"td"),l._uU(4),l.qZA(),l.qZA()),2&t){const t=a.$implicit;l.xp6(2),l.Oqu(t.palabra),l.xp6(2),l.Oqu(t.cantidad)}}function x(t,a){if(1&t&&(l.O4$(),l.kcU(),l.TgZ(0,"div",4),l.TgZ(1,"div",44),l.TgZ(2,"div",45),l.TgZ(3,"div",46),l.TgZ(4,"table",47),l.TgZ(5,"thead"),l.TgZ(6,"tr"),l.TgZ(7,"th"),l._uU(8,"Palabra"),l.qZA(),l.TgZ(9,"th"),l._uU(10,"N\xfamero de veces"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(11,"tbody"),l.YNc(12,_,5,2,"tr",48),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&t){const t=l.oxw();l.xp6(12),l.Q6J("ngForOf",t.palabras)}}const w=[{path:"palabrasrepetidas",component:(()=>{class t{constructor(t,a,e,r){this.router=t,this.fb=a,this.serviceProcesar=e,this.errorHandler=r,this.load=!1,this.hasData=!1,this.palabras=[],this.palabrasTemp=[]}ngOnInit(){this.form=this.fb.group({texto:["",i.kI.required]}),this.formSearch=this.fb.group({palabra:["",i.kI.required]})}procesarTexto(){let t=new s(this.form.value.texto);this.load=!0,this.hasData=!1,this.serviceProcesar.procesar(t).subscribe(t=>{null!=t&&t.palabras?(n().fire("Procesado","Procesado Correctamente","success"),this.palabras=t.palabras,this.load=!1,this.hasData=!0):(this.load=!1,this.hasData=!1)},t=>{this.load=!1,this.hasData=!1,this.errorHandler.handleError(t),n().fire({icon:"error",title:this.errorHandler.errorTitle.toString(),text:this.errorHandler.errorMessage.toString(),footer:this.errorHandler.footerError})})}isValidInput(t){return this.form.controls[t].invalid&&(this.form.controls[t].dirty||this.form.controls[t].touched)}isValidInputSearch(t){return this.formSearch.controls[t].invalid&&(this.formSearch.controls[t].dirty||this.formSearch.controls[t].touched)}buscar(){this.palabrasTemp=this.palabras;let t=this.formSearch.value.palabra,a=this.palabras.find(a=>a.palabra==t);if(a){let t=[];t.push(a),this.palabras=t}else n().fire({icon:"error",title:"Resultado",text:"No encontramos ninguna coincidencia"}),this.palabrasTemp.length>0&&(this.palabras=this.palabrasTemp)}reload(){this.palabrasTemp.length>0&&(this.palabras=this.palabrasTemp)}limpiar(){this.hasData=!1,this.palabras=[],this.palabrasTemp=[]}}return t.\u0275fac=function(a){return new(a||t)(l.Y36(r.F0),l.Y36(i.qu),l.Y36(p),l.Y36(f.q))},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-repeatedwords"]],decls:23,vars:7,consts:[[1,"row","row-cards","mt-3","ms-3"],[1,"col-12"],[1,"card"],[1,"card-body"],[1,"row","animate__animated","animate__fadeIn","animate__faster"],[1,"text-center"],[1,"justify-content-center"],[3,"formGroup","submit"],[1,"row"],[1,"col-11","mb-3"],["formControlName","texto","placeholder","Ingrese el texto a validar...",1,"form-control"],["class","alert alert-danger mt-3",4,"ngIf"],[1,"col-1"],["type","submit",1,"btn","btn-icon","btn-info","ms-auto",3,"disabled"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","stroke-width","2","stroke","currentColor","fill","none","stroke-linecap","round","stroke-linejoin","round",1,"icon","icon-tabler","icon-tabler-file-import"],["stroke","none","d","M0 0h24v24H0z","fill","none"],["d","M14 3v4a1 1 0 0 0 1 1h4"],["d","M5 13v-8a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5.5m-9.5 -2h7m-3 -3l3 3l-3 3"],["class","mt-4 animate__animated animate__fadeIn animate__faster",4,"ngIf"],["class","row",4,"ngIf"],["class","row animate__animated animate__fadeIn animate__faster",4,"ngIf"],[1,"alert","alert-danger","mt-3"],[4,"ngIf"],[1,"mt-4","animate__animated","animate__fadeIn","animate__faster"],[1,"text-end"],[1,"skeleton-line"],[1,"text-center","mt-3"],[1,"col-6"],[1,"form-label"],[2,"display","flex !important"],[1,"col-9"],["type","text","formControlName","palabra",1,"form-control"],[1,"col-4"],["type","submit",1,"btn","btn-icon","btn-lime","ms-2",3,"disabled"],["xmlns","http://www.w3.org/2000/svg","width","44","height","44","viewBox","0 0 24 24","stroke-width","1.5","stroke","#ffffff","fill","none","stroke-linecap","round","stroke-linejoin","round",1,"icon","icon-tabler","icon-tabler-search"],["cx","10","cy","10","r","7"],["x1","21","y1","21","x2","15","y2","15"],[1,"btn","btn-icon","btn-lime","ms-2",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","stroke-width","2","stroke","currentColor","fill","none","stroke-linecap","round","stroke-linejoin","round",1,"icon","icon-tabler","icon-tabler-refresh"],["d","M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"],["d","M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"],["xmlns","http://www.w3.org/2000/svg","width","44","height","44","viewBox","0 0 24 24","stroke-width","1.5","stroke","#ffffff","fill","none","stroke-linecap","round","stroke-linejoin","round",1,"icon","icon-tabler","icon-tabler-eraser"],["d","M19 19h-11l-4 -4a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9 9"],["x1","18","y1","12.3","x2","11.7","y2","6"],[1,"mt-4","col-11","animate__animated","animate__fadeIn","animate__faster"],[1,"card",2,"height","calc(24rem + 10px)"],[1,"table-responsive","card-body","card-body-scrollable","card-body-scrollable-shadow"],[1,"table","card-table","table-vcenter","text-nowrap","datatable"],[4,"ngFor","ngForOf"]],template:function(t,a){1&t&&(l.TgZ(0,"div",0),l.TgZ(1,"div",1),l.TgZ(2,"div",2),l.TgZ(3,"div",3),l.TgZ(4,"div",4),l.TgZ(5,"h3",5),l._uU(6,"Palabras Repetidas"),l.qZA(),l.TgZ(7,"div",6),l.TgZ(8,"form",7),l.NdJ("submit",function(){return a.procesarTexto()}),l.TgZ(9,"div",8),l.TgZ(10,"div",9),l._UZ(11,"textarea",10),l.YNc(12,g,2,1,"div",11),l.qZA(),l.TgZ(13,"div",12),l.TgZ(14,"button",13),l.O4$(),l.TgZ(15,"svg",14),l._UZ(16,"path",15),l._UZ(17,"path",16),l._UZ(18,"path",17),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.YNc(19,m,9,0,"div",18),l.YNc(20,b,4,0,"div",19),l.YNc(21,q,26,3,"div",20),l.YNc(22,x,13,1,"div",20),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&t&&(l.xp6(8),l.Q6J("formGroup",a.form),l.xp6(4),l.Q6J("ngIf",a.isValidInput("texto")),l.xp6(2),l.Q6J("disabled",null==a.form?null:a.form.invalid),l.xp6(5),l.Q6J("ngIf",a.load),l.xp6(1),l.Q6J("ngIf",a.hasData),l.xp6(1),l.Q6J("ngIf",a.hasData),l.xp6(1),l.Q6J("ngIf",a.hasData))},directives:[i._Y,i.JL,i.sg,i.Fj,i.JJ,i.u,Z.O5,Z.sg],encapsulation:2}),t})(),data:{titulo:"palabras"}}];let A=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[r.Bz.forChild(w)],r.Bz]}),t})()}}]);