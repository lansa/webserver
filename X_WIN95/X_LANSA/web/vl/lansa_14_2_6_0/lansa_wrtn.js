window.LANSA.addSrc("wrtn",function(d,c,a,b,r){function t(a){return null===a?d.Uc:"object"==typeof a?a.mimetype&&a.data&&a.filename?new c.kI(a):"":a}function s(a){if(a===d.Uc)return null;switch(typeof a){case "object":if(a instanceof c.Rj)return a.toString();if(c.rq&&a instanceof c.rq)return a.Xfc();if(a instanceof c.kI)return a.fva}return a}function q(b,c,d){var e=document.createElement("form");e.setAttribute("method","post");e.setAttribute("action",b);d==a.dY.Bec&&e.setAttribute("target","_blank");
for(var g in c)c.hasOwnProperty(g)&&(b=document.createElement("input"),b.setAttribute("type","hidden"),b.setAttribute("name",g),b.setAttribute("value",c[g]),e.appendChild(b));document.body.appendChild(e);e.submit()}function n(a){return(a=a.sm)&&"M"==a}function k(a,b){p&&b.append("_SESSIONKEY",p);var e=a.FLD;if(e!==r)for(var g in e){var f=e[g];if(f===d.Uc)return!1;f instanceof c.kI?b.append(g,f.vma(),f.Tg()):b.append(g,s(f))}e=a.LIST;if(e!==r)for(var h in e){for(var k=e[h],q=k.Qp={},n=k.entryCount(),
u=1;u<=n;u++)for(g in k.getEntry(u),1==u&&b.append(h+"..",1),q){f=u.toString();4>f.length&&(f="000"+f,f=f.substr(f.length-4));var t=h+"."+f+"."+g,f=q[g];if(f===d.Uc)return delete k.Qp,!1;f instanceof c.kI?b.append(t,f.vma(),f.Tg()):b.append(t,s(f))}delete k.Qp}return!0}function h(a,b){var c=b.webroutine={},d=c.context={};p&&(d["session-key"]=p);g&&(d["session-key-name"]=g);z&&(d["session-key-method"]=z);d=a.FLD;if(d!==r){var e=c.fields={},f;for(f in d)(e[f]={}).value=s(d[f])}d=a.LIST;if(d!==r){var c=
c.lists={},h;for(h in d){for(var k=c[h]={},e=k.header=[],k=k.entries=[],q=d[h],n=q.Qp={},u=q.entryCount(),t=1;t<=u;t++){q.getEntry(t);if(1==t)for(f in n){var I={};e.push(I);I.name=f}I=[];k.push(I);for(f in n)I.push(s(n[f]))}delete q.Qp}}}function f(a){if(a=a.context){var b=a["session-key"];b!=r&&""!=b&&b!=p&&b!=u&&(u=p,p=b,g=a["session-key-name"],z=a["session-key-method"])}}function e(a,b,c){function e(a){if(a!=r){var b=a.FLD;g(a.LIST);g(b)}}function g(b){if(b!=r)for(var c in b)if(null===b[c])throw d.p_c(c,
a.Zva,a.Wva);}e(b);e(c)}var p=r,g=r,z=r,u=r;a.dY={atb:0,Bec:1};a.dY.u={CURRENT:a.dY.atb,NEW:a.dY.Bec};d.Ad(function(){},"PRIM_WRTN",{});c.VCa=function(a,b){I.H.call(this);this.Zva=a;this.Wva=b;this.HAb=this.Nzb=""};var I=c.q(c.VCa,c.Hd);I.Qyd=function(){return this.Nzb};I.gRd=function(a){this.Nzb=a};I.VAd=function(){return this.HAb};I.CRd=function(a){this.HAb=a};I.KIc=function(){return this.Zva};I.yIc=function(){return this.Wva};I.UB=function(){return b.Ssc(this.Nzb,b.CNa(),this.Zva,this.Wva,this.kIc())};
I.kIc=function(){var a=this.HAb;""==a&&(a=b.BNa());return a};d.mb(c.VCa,"PRIM_WEB","ServerRequest",{Oa:{ServerModule:{a:I.KIc},Routine:{a:I.yIc}}});c.Yoa=function(a,b){B.H.call(this,a,b)};var B=c.q(c.Yoa,c.VCa);B.UV=function(a,b){this.OMb(a,b,!1,null)};B.tba=function(a,c){this.OMb(a,c,!0,b.qT())};B.OMb=function(c,q,u,s){function I(c){var e=null;try{e=JSON.parse(c)}catch(h){e=null}if(e){if(c=e.webroutine)if(c=c.messages)for(var k=d.kHc(),n=0;n<c.length;n++)k.Ph(c[n],null);if(c=e["vlweb-error"]){var u=
a.GT.XMa;switch(c["message-id"]){case "HM42":case "HM43":u=a.GT.PNb;z=g=p=r;break;case "HM05":u=a.GT.ONb}u=da.Gya(u);if(!u&&c.message!==r)throw d.eob(da.Zva,da.Wva,c.message);}else{k=q;if(e=e.webroutine){n=k.FLD;if(n!==r){var U=e.fields;if(U)for(var B in n)c=U[B],c!==r&&(c=t(c.value),n[B].set(c))}B=k.LIST;if(B!==r&&(k=e.lists))for(u in B)if(n=B[u],n.Nk(),c=k[u])for(var U=c.header,x=c.entries,ba=0;ba<x.length;ba++){for(var X=n.Qp={},G=x[ba],A=0;A<G.length;A++)c=t(G[A]),X[U[A].name]=c;n.eh();delete n.Qp}f(e)}da.PZ()}}else if(u=
da.Gya(a.GT.XMa),!u)throw d.eob(da.Zva,da.Wva,"Invalid JSON");b.wz(s)}function B(c){if(!da.Gya(a.GT.XMa))throw d.eob(da.Zva,da.Wva,"response code "+c);b.wz(s)}function G(a){a.lengthComputable&&da.qBc(a.loaded,a.total,d.v(a.loaded/a.total*100))}function W(a){if(a.lengthComputable){var b=a.loaded/a.total*100;da.rNb(a.loaded,a.total,d.v(b))}else da.rNb(a.loaded,-1,-1)}var da=this;e(da,c,q);if(n(c)){var ia=new FormData;if(k(c,ia)){b.eXc(this.UB(),ia,I,B,G,W,u);return}}ia={};h(c,ia);b.D8b(this.UB(),ia,
I,B,G,W,u)};B.Gya=function(c){var e=!1,e=d.Zb();e.TQ("REASON",c,a.GT.u);e.Of("HANDLED",!1);this.Ca(a.w.OZ,e);(e=e.Cg("HANDLED"))||(e=b.uq().jBc(this,c));return e};B.PZ=function(){this.Ca(a.w.E4)};B.qBc=function(b,c,e){var g=d.Zb();g.fD("LOADED",b);g.fD("TOTAL",c);g.fD("PROGRESS",e);this.Ca(a.w.Hid,g)};B.rNb=function(b,c,e){var g=d.Zb();g.fD("LOADED",b);g.fD("TOTAL",c);g.fD("PROGRESS",e);this.Ca(a.w.Pyc,g)};d.mb(c.Yoa,"PRIM_WEB","DataRequest",{qc:{Execute:B.UV,ExecuteAsync:B.tba}});c.tpa=function(b,
c){G.H.call(this,b,c);this.lm=a.dY.atb};var G=c.q(c.tpa,c.VCa);G.wJc=function(){return this.lm};G.Sqb=function(a){this.lm=a};G.UV=function(a,b){e(this,a,b);var c={};p&&(c._SESSIONKEY=p);var d=a.FLD;if(d!==r)for(var g in d)c[g]=s(d[g]);d=a.LIST;if(d!==r)for(var f in d){for(var h=d[f],k=h.Qp={},n=h.entryCount(),u=1;u<=n;u++)for(g in h.getEntry(u),1==u&&(c[f+".."]=1),k){var t=u.toString();4>t.length&&(t="000"+t,t=t.substr(t.length-4));c[f+"."+t+"."+g]=s(k[g])}delete h.Qp}q(this.UB(),c,this.lm)};d.mb(c.tpa,
"PRIM_WEB","WebPageRequest",{Oa:{Target:{a:function(){return d.ta(this.lm,a.dY.u)},f:function(b){this.Sqb(d.qa(b,a.dY.u))}}},qc:{Execute:G.UV}});c.mpa=function(b,c){W.H.call(this,b,c);this.lm=a.dY.atb};var W=c.q(c.mpa,c.VCa);W.wJc=function(){return this.lm};W.Sqb=function(a){this.lm=a};W.UV=function(a,b){e(this,a,b);var c={};p&&(c._SESSIONKEY=p);var d=a.FLD;if(d!==r)for(var g in d)c[g]=s(d[g]);d=a.LIST;if(d!==r)for(var f in d){for(var h=d[f],k=h.Qp={},n=h.entryCount(),u=1;u<=n;u++)for(g in h.getEntry(u),
1==u&&(c[f+".."]=1),k){var t=u.toString();4>t.length&&(t="000"+t,t=t.substr(t.length-4));c[f+"."+t+"."+g]=s(k[g])}delete h.Qp}q(this.UB(),c,this.lm)};d.mb(c.mpa,"PRIM_WEB","ResourceRequest",{Oa:{Target:{a:function(){return d.ta(this.lm,a.dY.u)},f:function(b){this.Sqb(d.qa(b,a.dY.u))}}},qc:{Execute:W.UV}});b.fAc=function(b,c){var d=c.webroutine;if(d){var e=b.lB.Dza(),g=d.fields;if(g){var f=b.pEa(e),h;for(h in g){var k=null,p=b.cl[h];p&&(k=p.lV());if(!k&&f)for(var q in f)if(p=f[q],p.Ch()==h){k=p;break}k&&
(p=t(g[h].value),k.set(p))}}if(d=d.lists){var e=b.z0c(e),n;for(n in d){g=null;if(p=b.cl[n])switch(p.ama()){case a.Ow.Tic:case a.Ow.TYa:case a.Ow.K5a:g=p}!g&&e&&(g=e[n]);if(g)for(p=d[n],f=p.header,h=p.entries,k=0;k<h.length;k++){q=g.Qp={};for(var u=h[k],s=0;s<u.length;s++)p=t(u[s]),q[f[s].name]=p;g.eh();delete g.Qp}}}}};b.eAc=function(a){(a=a.webroutine)&&f(a)}});