window.LANSA.addSrc("http",function(d,c,a,b,p){c.Ujb=function(){u.H.call(this);this.$a=this.kzb=""};var u=c.q(c.Ujb,c.Gd);u.R=function(){u.j.R.call(this)};u.$la=function(){return this.kzb};u.Qac=function(a){this.kzb=a};u.Da=function(){return this.$a};u.Wa=function(a){this.$a=a};d.mb(c.Ujb,"PRIM_WEB","HttpHeader",{Pa:{Key:{a:u.$la,f:function(a){this.Qac(d.ja(a))}},Value:{a:u.Da,f:function(a){this.Wa(d.ja(a))}}}});c.gRa=function(){t.H.call(this);this.cb=[]};var t=c.q(c.gRa,c.Gd);t.yc=function(){return this.cb.length};
t.ae=function(a){for(var c=0;c<this.yc();c++){var d=this.Ur(c);if(b.AA(d.$la(),a))return d}return null};t.Ur=function(a){if(0>a||a>=this.cb.length)throw d.SF(a,this.cb.length);return this.cb[a]};t.Jh=function(a,b){var d=new c.Ujb;d.Qac(a);d.Wa(b);this.cb.push(d)};t.Ok=function(){this.cb=[]};t.Yt=function(a){for(var b=!1,c=0;c<this.yc()&&!(b=this.Ur(c).$la()==a);c++);b&&this.cb.splice(c,1)};d.mb(c.gRa,"PRIM_WEB","HttpHeaders",{Pa:{Item:{a:function(a){return this.ae(a)}},ItemCount:{a:t.yc}},pc:{Add:t.Jh,
Remove:t.Yt,RemoveAll:t.Ok},Bg:{wg:"Item"},Nq:{jq:function(a){return this.Ur(d.v(a-1))},Ow:t.yc}});a.VH={a:1,nLc:2,eWc:3,QXc:4,Mr:5,jgd:6,cVc:7,Rqc:8,pVc:9};a.VH.u={GET:a.VH.a,HEAD:a.VH.nLc,POST:a.VH.eWc,PUT:a.VH.QXc,DELETE:a.VH.Mr,TRACE:a.VH.jgd,OPTIONS:a.VH.cVc,CONNECT:a.VH.Rqc,PATCH:a.VH.pVc};a.UK={p6b:1,L8b:2,n4:3,AZ:4,NDb:5};a.UK.u={NOTEXECUTED:a.UK.p6b,PROCESSING:a.UK.L8b,COMPLETED:a.UK.n4,FAILED:a.UK.AZ,CANCELLED:a.UK.NDb};c.L4b=function(){r.H.call(this);this.b3a="";this.c3=null;this.Z0a=a.VH.a;
this.nva=null;this.$L=new c.gRa;this.qja=a.UK.p6b;this.EBb=0;this.Vjc=!1;this.ai=null};var r=c.q(c.L4b,c.Gd);r.R=function(){this.c3=null;this.Kpb(null);this.ai&&(this.ai.Cb(),this.ai=null);r.j.R.call(this)};r.xb=function(){null==this.ai&&(this.ai=d.Hu(new c.nRa("")),this.ai.Ha());return this.ai};r.KB=function(){return this.b3a};r.o8c=function(a){this.b3a=a};r.$yd=function(){return this.Z0a};r.c6c=function(a){this.Z0a=a};r.$$a=function(){return this.$L};r.vHc=function(){return this.nva};r.Kpb=function(a){null!=
this.nva&&this.nva.Cb();this.nva=a;null!=this.nva&&this.nva.Ha()};r.DBd=function(){return this.qja};r.TIc=function(){return this.EBb};r.$7c=function(a){this.EBb=a};r.$xd=function(){return this.Vjc};r.kQd=function(a){this.Vjc=a};r.Ncc=function(h,f){var e=this;e.Kpb(null);var k=e.c3=new XMLHttpRequest,g=d.sa(e.Z0a,a.VH.u),m=e.KB();k.onreadystatechange=function(){4==k.readyState?(e.Kpb(d.Hu(new c.Vjb(k))),0!==k.status&&(e.qja=a.UK.n4,e.Ca(a.w.n4),b.nz(f))):e.qja=a.UK.L8b};k.onerror=function(){e.qja=
a.UK.AZ;e.Ca(a.w.AZ);b.nz(f)};k.ontimeout=function(){e.qja=a.UK.AZ;e.Ca(a.w.AZ);b.nz(f)};k.open(g,m,h);h&&(k.timeout=this.EBb);this.tmc(k);g="";null!=this.ai&&(g=this.ai.gr());k.send(g)};r.lka=function(){this.c3!==p&&(this.c3.abort(),this.qja=a.UK.NDb)};r.GV=function(){this.Ncc(!1,null)};r.fba=function(){this.Ncc(!0,b.eT())};r.tmc=function(a){var b=this.$L.yc();if(0!=b)for(var c=0;c<b;c++){var d=this.$L.Ur(c);a.setRequestHeader(d.$la(),d.Da())}};d.mb(c.L4b,"PRIM_WEB","HttpRequest",{Pa:{Url:{a:r.KB,
f:function(a){this.o8c(d.ja(a))}},Method:{a:function(){return d.sa(this.Z0a,a.VH.u)},f:function(b){this.c6c(d.qa(b,a.VH.u))}},Content:{a:r.xb},Response:{a:r.vHc},Headers:{a:r.$$a},Status:{a:function(){return d.sa(this.qja,a.UK.u)}},Timeout:{a:r.TIc,f:function(a){this.$7c(d.v(a))}}},pc:{Cancel:r.lka,Execute:r.GV,ExecuteAsync:r.fba}});c.Vjb=function(a){m.H.call(this);this.c3=a;this.$L=new c.gRa;this.ai=null;this.nSc(a.getAllResponseHeaders())};var m=c.q(c.Vjb,c.Gd);m.R=function(){this.c3=null;this.ai&&
(this.ai.Cb(),this.ai=null);m.j.R.call(this)};m.xb=function(){null==this.ai&&(this.ai=d.Hu(new c.nRa(this.c3.responseText)),this.ai.Ha());return this.ai};m.mIc=function(){return this.c3.status};m.nIc=function(){return this.c3.statusText};m.$$a=function(){return this.$L};m.nSc=function(a){for(var b=0,c="",d="";""!=a;){b=a.indexOf(":");if(-1==b)break;c=a.substring(0,b);a=a.slice(b+2);b=a.indexOf("\r\n");d=a.substring(0,b);a=a.slice(b+2);this.$L.Jh(c,d)}};d.mb(c.Vjb,"PRIM_WEB","HttpResponse",{Pa:{Content:{a:m.xb},
StatusCode:{a:m.mIc},StatusText:{a:m.nIc},Headers:{a:m.$$a}}});c.nRa=function(a){k.H.call(this);this.Lg=a};var k=c.q(c.nRa,c.Gd);k.gr=function(){return this.Lg};k.IO=function(a){this.Lg=a};d.mb(c.nRa,"PRIM_WEB","HttpContent",{Pa:{Text:{a:k.gr,f:function(a){this.IO(d.ja(a))}}},Bg:{wg:"Text"}})});
