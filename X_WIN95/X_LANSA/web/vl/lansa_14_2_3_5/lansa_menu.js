window.LANSA.addSrc("menu",function(d,c,a,b,p){d.Db("PRIM_TBLO");d.Db("PRIM_PPNL");d.Db("PRIM_IMAG");d.Db("PRIM_SPBN");a.xRa={k0:16,Wkb:16};a.OW={oCa:0,blb:1,clb:2,Xkb:4};a.EK={L5b:0,vkb:1,ukb:2};a.EK.u={NONE:a.EK.L5b,BREAK:a.EK.vkb,BARBREAK:a.EK.ukb};a.FK={j0:25,Mkb:1,Kkb:2,FId:4,Nkb:8,Lkb:16};a.EK={NTc:0};a.jId=3;a.iId=2;a.kId=255;a.yTc=768;a.x5b=256;a.w5b=512;a.rRa=65536;a.sRa=131072;a.jkb=262144;a.lkb=524288;a.kkb=1048576;a.rSd=2;a.qSd=2;c.UBa=function(){u.H.call(this);this.MG=null;this.cM=a.xRa.k0;
this.CP=a.OW.oCa;this.Vn=null;this.Pb=[];this.gJ=new c.Rx;this.Tia=new c.pb;this.Uh=new c.Sx;this.hkd=new c.Jda;this.gkd=new c.s6;this.hkd.tr(this.Uh);this.gkd.tr(this.Uh);this.gJ.xo(this.Uh);this.Tia.Ti(b.J(255,255,255));this.Tia.ui(b.bb().Lo(a.l.Bj));this.Tia.Wo(1);this.Tia.Dp(1);this.Tia.pn(1);this.Tia.qn(1);this.gJ.ta(this,a.w.Ww,this.Rvc);this.gJ.vb(this.Tia)};var u=c.q(c.UBa,c.Qx);u.nb=function(){this.Pb=null;u.j.nb.call(this)};u.R=function(){null!=this.MG&&this.EX();for(var a=null;null!=(a=
this.Pb[0]);)a.Oa(null);b.eTc(this);u.j.R.call(this)};u.Pyd=function(){return this.MG};u.Syd=function(){return this.Pb};u.fGc=function(){return this.Pb.length};u.nca=function(){return this};u.pOc=function(){return 0!=(this.CP&a.OW.clb)};u.gNc=function(){return 0!=(this.CP&a.OW.Xkb)};u.Uyd=function(){return 0!=(this.CP&a.OW.blb)};u.Y5c=function(){var b=this.CP&~a.OW.blb|a.OW.blb;this.CP!=b&&(this.CP=b,this.ea(a.g.h))};u.xab=function(){return 0!=(this.cM&a.xRa.Wkb)};u.vQd=function(b){b=this.cM&~a.xRa.Wkb|
(b?a.xRa.Wkb:0);this.cM!=b&&(this.cM=b,this.ea(a.g.h))};u.Wea=function(a){this.Vn!=a&&(this.Vn=a,this.kTa())};u.yCc=function(){return this.Vn};u.pA=function(){return this.Pb};u.dda=function(){return null!=this.MG||null!=this.gg};u.PDd=function(){for(var a,b=this.Pb,c=0;c<b.length&&null!=(a=b[c]);c++)if(!0==a.sb())return!0;return!1};u.mo=function(){null==this.gg&&this.Uu(b.gb().pB(this));return this.gg};u.lba=function(b){var c=d.Yb();c.bc("CONTEXT",b);this.Ca(a.w.Ww,c);c.Ac()};u.Lx=function(b){this.dda()&&
this.EX();b.Xb=this;this.GXa(b);b.Fa(this,this.nxa);this.ea(a.g.h)};u.zMc=function(b){this.dda()&&this.EX();b.Xb=this;this.GXa(b);b.Fa(this,this.nxa);this.ea(a.g.h)};u.x0=function(b){this.dda()&&this.EX();b.Xb=null;b.Ba(this,this.nxa);this.GXa(b);this.ea(a.g.h)};u.cAa=function(){b.U();this.EX()};u.X8b=function(a){if(null==this.MG){if(null!=this.gg)this.MG=this.gg;else{var c=b.U().Qua;this.MG=this.d5a();null!=this.MG&&(c[this.MG]=this)}this.jSa(null,a)}};u.EX=function(){if(null!=this.MG){for(var a,
c=this.Pb,d=0;d<c.length&&null!=(a=c[d]);d++){var k=a.pu;a.Uu(null);a.EYc();k&&k.EX()}null!=this.MG&&(null!=this.gg?(this.Uu(null),this.MG=null):(a=b.U().Qua,null!=this.MG&&delete a[this.MG]));this.MG=null;this.Uu(null);b.U().Ft(this.gJ,!1)}};u.rWc=function(){};u.Tlb=function(){};u.jSa=function(a,b){this.gJ.kb(new c.fa(0,0,0,5));for(var d,k=0,g=this.Pb,n=0;n<g.length&&null!=(d=g[n]);n++)k=this.Xja(a,b,d,k)};u.Xja=function(a,b,c,d,g){return c.Xja(a,b,this,d,g)};u.sEb=function(a){for(var b=!1,c,d=this.Pb,
g=0;g<d.length&&null!=(c=d[g]);g++)if(c==a||null!=c.pu&&c.pu.sEb(a)){b=!0;break}return b};u.$Jc=function(b){for(var c=!1,d=null,k=this.Pb,g=0;g<k.length&&null!=(d=k[g]);g++)if(d.Ub()&&d.ue()){var n=d.pu;if(null!=n&&n.$Jc(b)){c=!0;break}if(d.rva!=a.W.HDa&&d.rva==b){d.Nf();c=!0;break}}return c};u.urd=function(){for(var a=this.Pb,b=null,c=null,d=0;d<a.length&&null!=(c=a[d]);d++)if(c.X4()){b=c;break}return b};u.GXa=function(a){var c=this.Pb.indexOf(a);-1!=c&&this.Pb.splice(c,1);c+=1;if(a.Xb==this){0==
a.pg()&&(a.eh=this.Pb.length+1);var d=a.pg(),k=0;0<c&&d>c&&d++;for(var g,c=this.Pb,n=0;n<c.length&&null!=(g=c[n])&&!(g.pg()>=d);n++)k++;this.Pb.splice(k,0,a)}b.cTc(this)};u.SCa=function(b){b==a.BV&&(this.dda()&&this.EX(),this.z6(),this.ea(a.g.h))};u.z6=function(){for(var b,c=this.Pb,d=0;d<c.length&&null!=(b=c[d]);d++)b.eh=1,b.ea(a.g.h)};u.AId=function(a){var c=b.U();return null!=c.Qua?c.Qua[a]:null};u.kTa=function(){};u.ESa=function(){b.U().Ft(this.gJ,!1)};u.Tlb=function(){};u.Xw=function(a){this.CP|=
a};u.hz=function(a){this.CP&=~a};u.Xx=function(a,b){this.CP=this.CP&~a|(b?a:0)};u.ZGb=function(b,c){switch(c.$a){case a.g.wb:this.Wea(null)}};u.nxa=function(){this.pOc()?this.Xw(a.OW.Xkb):this.dda()&&(this.EX(),this.ea(a.g.h))};u.Rvc=function(){this.Tlb(null,this.gJ)};d.wd(c.UBa,"PRIM_MENU",{Pa:{}});c.bjb=function(){t.H.call(this);this.Pz=null};var t=c.q(c.bjb,c.UBa);t.nb=function(){t.j.nb.call(this)};t.R=function(){this.hfa(null);t.j.R.call(this)};t.YOb=function(){return this.Pz};t.hfa=function(b){this.Pz!=
b&&(this.Pz&&this.Pz.LLd(this),b&&b.xEd(this),this.ea(a.g.h))};t.rWc=function(){this.lba(null)};t.jSa=function(a,b){this.gJ.kb(new c.fa(0,0,0,5));for(var d,k=0,g=this.Pb,n=0;n<g.length&&null!=(d=g[n]);n++)k=this.Xja(a,b,d,k,!0)};t.d5a=function(){throw 0;};d.wd(c.bjb,"PRIM_MBAR",{Pa:{}});c.djb=function(){r.H.call(this);this.Tsa=null;this.jwb=0};var r=c.q(c.djb,c.UBa);r.nb=function(){r.j.nb.call(this)};r.R=function(){this.kTa();r.j.R.call(this)};r.wPd=function(b){b!=this.jwb&&(this.jwb=b,this.kTa(),
this.ea(a.g.h))};r.Isd=function(){return this.jwb};r.NAc=function(){null==this.Tsa&&(this.Tsa=[]);return this.Tsa};r.jSa=function(a,b){this.gJ.kb(new c.fa(0,0,0,5));for(var d,k=0,g=this.NAc(),n=0;n<g.length&&null!=(d=g[n]);n++)k=this.Xja(a,b,d,k);g=this.Pb;for(n=0;n<g.length&&null!=(d=g[n]);n++)k=this.Xja(a,b,d,k)};r.d5a=function(){return b.Zya()};r.Mqa=function(a,b){a===p&&(a=0);b===p&&(b=0);this.C7b(new c.qd(a,b),null,!0,null)};r.C7b=function(c,d){var e=b.U(),k=!1,k=e.xj,g=b.U().nw;this.lba(d,c);
b.YQa(a.BV);this.Wea(d);k&&this.Tt(k,a.Ma.gic);null!=g&&g.G_()&&g.MQ();this.X8b(this.gJ);0<this.gJ.Ia()&&(k=e.JCb(!0),this.gJ.Q7(c.Hb(),c.Lb(),a.Xh.Vx,p,null),e.JCb(k))};r.kTa=function(){this.EX();if(this.Tsa){for(var a;null!=(a=this.Tsa[0]);)b.$(a);this.Tsa=null}};r.vod=function(a,b){var c=b.cma();c&&c.XJd(b.$i.rM)};d.wd(c.djb,"PRIM_PMNU",{Pa:{},pc:{Show:r.Mqa}});c.R2b=function(){n.H.call(this);this.Pz=null};var n=c.q(c.R2b,c.UBa);n.nb=function(){n.j.nb.call(this)};n.R=function(){this.Pz&&this.Pz.Upb(null);
n.j.R.call(this)};n.YOb=function(){return this.Pz};n.hfa=function(b){if(this.Pz!=b&&!this.sEb(b)){var c=this.Pz;this.Pz=b;c&&c.hDb(null);this.Pz&&this.Pz.hDb(this);this.ea(a.g.h,a.Je.FPa)}};n.xab=function(){var a=n.j.xab.call(this);a&&(a=this.Pz.COc());return a};n.nca=function(){var a=null;this.Pz&&(a=this.Pz.nca());return a};n.ESa=function(){n.j.ESa.call(this);this.Pz.L().ESa()};n.d5a=function(){return b.Zya()};n.Cgd=function(){if(null!=this.MG)for(var a,b=this.Pb,c=0;c<b.length&&null!=(a=b[c]);c++){var d=
a.pu;d&&d.EX()}};n.Tlb=function(b,c){this.Xw(a.OW.clb);this.lba(null);this.Xw(a.OW.clb);this.dda()&&this.gNc()&&(this.Cgd(),this.jSa(b,c));this.Xw(a.OW.Xkb)};d.wd(c.R2b,"PRIM_SMNU",{Pa:{Parent:{a:n.YOb,f:n.hfa}}});c.l2b=function(){k.H.call(this);this.Xb=null;this.nf=a.FK.j0;this.jb=a.EK.NTc;this.tf=a.rRa|a.sRa;this.rva=a.W.HDa;this.Njc=this.eh=this.xt=this.zlc=this.rM=0;this.c3=this.Ka=this.pu=this.Xb=null;this.qb=this.C2a="";this.JT=new c.so;this.ZGa=new c.Rt;this.D2=new c.pb;this.QL=new c.BK;this.u9=
b.oc(null,this.JT,null,null,1,1);this.$Ga=b.oc(null,this.QL,null,null,1,1);this.$ta=b.oc(null,this.ZGa,null,null,1,1);this.ZGa.vb(this.D2);this.ZGa.Oa(this.JT);this.QL.Oa(this.JT);this.JT.ta(this,a.w.Vb,this.Auc);this.Emc()};var k=c.q(c.l2b,c.Qx);k.nb=function(){this.Ksc();k.j.nb.call(this)};k.R=function(){this.Upb(null);this.Oa(null);k.j.R.call(this);this.od(null);this.r5c()};k.Rvd=function(){var a="";this.cOc()||null!=this.nca()&&this.nca()instanceof c.djb?a=this.eb():this.HBc();return a};k.eb=
function(){return this.qb};k.ko=function(){return this.eb().gr()};k.HBc=function(){this.eb()};k.nud=function(){return this.sxb};k.fCd=function(){return!0};k.BAd=function(){return!0};k.Fzd=function(){return!0};k.zpb=function(){var a=this.nca();a&&a.Y5c()};k.Fg=function(){return 0!=(this.tf&a.jkb)?!0:!1};k.X4=function(){return 0!=(this.tf&a.kkb)?!0:!1};k.vPd=function(b){b!=this.ceb()&&(this.nf=this.nf&~a.FK.Kkb|(b?a.FK.Kkb:0),this.ea(a.g.h))};k.eF=function(){return this.xt};k.zEc=function(){return this.Njc};
k.eGc=function(){var b=a.EK.L5b;0!=(this.tf&a.x5b)?b=a.EK.vkb:0!=(this.tf&a.w5b)&&(b=a.EK.ukb);return b};k.L=function(){return this.Xb};k.nca=function(){var a=null;this.Xb&&(a=this.Xb.nca());return a};k.Aca=function(){return 0!=(this.tf&a.lkb)?!0:!1};k.oBd=function(){return this.rva};k.pBd=function(){return""};k.sIc=function(){return this.pu};k.obb=function(){return this.rM};k.LCd=function(){return this.zlc};k.sb=function(){return 0!=(this.tf&a.sRa)?!0:!1};k.ub=function(a){this.qb!=a&&(this.qb=a,
this.r0())};k.nk=function(a){this.eb().FO(a)};k.$h=function(b){var c=this.eF();if(b&&0!=c&&null!=this.L())for(var d,k=this.L().Pb,g=0;g<k.length&&null!=(d=k[g]);g++)d!=this&&d.eF()==c&&d.$h(!1);b=b?this.tf|a.jkb:this.tf&~a.jkb;b!=this.tf&&(this.tf=b,this.ea(a.g.h))};k.YTa=function(b){b=b?this.tf|a.kkb:this.tf&~a.kkb;b!=this.tf&&(this.tf=b,this.ea(a.g.h))};k.pg=function(){return this.eh};k.Ud=function(b){this.ceb()||(null!=this.Xb?(this.eh=b,this.Xb.GXa(this)):this.eh!=b&&(this.eh=b,this.ea(a.g.h)))};
k.ue=function(){return 0!=(this.tf&a.rRa)?!0:!1};k.kg=function(b){b=b?this.tf|a.rRa:this.tf&~a.rRa;b!=this.tf&&(this.tf=b,this.ea(a.g.h))};k.P0=function(b){this.xt!=b&&(this.xt=b,this.ea(a.g.h))};k.h5c=function(b){this.Njc=b;this.ea(a.g.h)};k.X5c=function(b){var c=this.tf&~a.yTc;switch(b){case a.EK.vkb:c|=a.x5b;break;case a.EK.ukb:c|=a.w5b}c!=this.tf&&(this.tf=c,this.ea(a.g.h))};k.Oa=function(b){this.Xb!=b&&(this.Xb&&this.Xb.x0(this),b&&(this.ceb()?b.zMc(this):b.Lx(this)),null!=this.Ka&&this.zpb(),
this.ea(a.g.h,a.Je.FPa))};k.jEa=function(b){b=b?this.tf|a.lkb:this.tf&~a.lkb;b!=this.tf&&(this.tf=b,this.ea(a.g.h))};k.W6c=function(b){this.rva!=b&&(this.rva=b,this.ea(a.g.h))};k.Upb=function(a){this.pu!=a&&(this.pu&&this.pu.hfa(null),a&&a.hfa(this))};k.dVa=function(b){this.rM!=b&&(this.rM=b,this.ea(a.g.h))};k.NRd=function(a){this.zlc=a};k.Oc=function(){return this.Ka};k.od=function(b){this.Ka!=b&&(null!=this.Ka&&(this.Ka.Ba(this,this.En),this.Ka.Cb()),this.Ka=b,null!=this.Ka&&(this.Ka.Ha(),this.Ka.Fa(this,
this.En)),this.zpb(),this.ea(a.g.h))};k.r5c=function(){null!=this.c3&&(null!=this.c3&&(this.c3.Ba(this,this.NHb),this.c3.Cb()),this.c3=null,null!=this.c3&&(this.c3.Ha(),this.c3.Fa(this,this.NHb)),this.zpb(),this.ea(a.g.h))};k.Uxd=function(){return this.c3};k.UIc=function(){return this.C2a};k.Z7c=function(b){this.C2a!=b&&(this.C2a=b,this.ea(a.g.h,a.Je.sPc))};k.jOa=function(){return 0!=(this.nf&a.FK.Mkb)?!0:!1};k.$7c=function(b){b!=this.jOa()&&(this.nf=this.nf&~a.FK.Mkb|(b?a.FK.Mkb:0),this.ea(a.g.h))};
k.xbb=function(){return 0!=(this.nf&a.FK.Nkb)?!0:!1};k.a8c=function(b){b!=this.xbb()&&(this.nf=this.nf&~a.FK.Nkb|(b?a.FK.Nkb:0),this.ea(a.g.h))};k.iBd=function(){return!0};k.xla=function(){return 0!=(this.nf&a.FK.Lkb)?!0:!1};k.oac=function(b){b!=this.xla()&&(this.nf=this.nf&~a.FK.Lkb|(b?a.FK.Lkb:0),this.ea(a.g.h))};k.Gb=function(b){b=b?this.tf|a.sRa:this.tf&~a.sRa;b!=this.tf&&(this.tf=b,this.ea(a.g.h))};k.vPb=function(){return this.Mb};k.mo=function(){null==this.gg&&this.Uu(b.gb().pB(this));return this.gg};
k.Ub=function(){return null!=this.Xb&&this.Xb.dda()?!0:!1};k.qFd=function(){return"-"==this.eb()?!0:!1};k.ceb=function(){return 0!=(this.nf&a.FK.Kkb)?!0:!1};k.COc=function(){var a=this.jOa();if(a&&this.xbb()){var b=this.L();b&&(a=b.xab())}return a};k.cOc=function(){return null!=this.L()&&this.L()instanceof c.bjb};k.Nf=function(b){b===p&&(b=null);var c=d.Yb();c.bc("CONTEXT",b);this.Ca(a.w.Vb,c);c.Ac()};k.VTd=function(){if(this.pu)for(var a,b=this.pu.Pb,c=0;c<b.length&&null!=(a=b[c]);c++)a.$h(!1)};
k.hDb=function(b){this.pu!=b&&(this.pu&&(this.pu.Pz==this?this.pu.hfa(null):(this.ea(a.g.lUc),this.pu.Ba(this,this.NIb),this.pu=null)),b&&(b.Pz!=this?b.hfa(this):(this.pu=b,this.pu.Fa(this,this.NIb))),this.ea(a.g.h))};k.CId=function(a){return b.U().VHa[a]};k.Emc=function(){this.sxb=b.U().FCb();b.U().VHa[this.sxb]=this};k.Xja=function(a,b,c,d){return this.Xmc(b,d)};k.EYc=function(){this.JT.Oa(null)};k.Xmc=function(b,d){if(this.sb()){var e=b.ej(),k=null;this.D2.Cp(a.l.ae);this.D2.Ti(a.l.ae);this.D2.Wo(1);
this.D2.Dp(1);this.D2.pn(1);this.D2.qn(1);this.Fg()&&(k=this.Aca()?a.$b.X5b:a.$b.W5b,this.D2.Cp(a.l.KO),this.D2.Ti(a.l.Y7));this.Oc()&&(k=this.Oc());this.u9.Oa(e);this.u9.wm(e.hc(0));this.u9.Sl(e.nc(0));this.u9.Cf(a.ya.dj);this.u9.rb(a.ma.Js);this.u9.Bb(a.ja.vg);this.u9.$d(4);this.u9.Ed(2);this.$ta.Oa(e);this.$ta.wm(e.hc(0));this.$ta.Sl(e.nc(0));this.$ta.Bb(a.ja.Xd);this.$ta.rb(a.ma.cl);this.$ta.$d(2);this.$Ga.Oa(e);this.$Ga.wm(e.hc(0));this.$Ga.Sl(e.nc(0));this.$Ga.Bb(a.ja.eg);this.$Ga.$d(22);this.JT.Oa(b);
this.JT.xo(e);this.JT.Ud(d+1);this.JT.eL(this.jOa()?this.C2a:"");this.QL.nO(!1);this.QL.is(a.ce.p0);this.QL.yUa(a.KF.jCa);this.QL.rI(a.Yu.EM);this.QL.ub(this.eb());this.QL.rn(a.dh.Wq);this.QL.T0(this.pu?this.pu.gJ:null);this.ZGa.Si(k);this.QL.$j(!1,!0);e=60+this.QL.ER();k=10+this.QL.ula();this.JT.lc(k);this.ZGa.kb(new c.fa(2,2,18,18));this.QL.kb(new c.fa(22,2,e,18));b.Wb(Math.max(b.Qa(),e));b.lc(b.Ia()+this.JT.Ia());null!=this.pu&&this.pu.X8b(this.pu.gJ);d++}return d};k.Ksc=function(){delete b.U().VHa[this.sxb];
b.U()};k.bUd=function(a){this.Ud(a);null!=this.Xb&&this.Xb.z6()};k.r0=function(){this.ea(a.g.h,a.Je.YVb)};k.Auc=function(a,b){this.eF()&&this.$h(!0);this.Nf();this.L()&&this.L().ESa();b.HANDLED.set(!0)};k.NIb=function(){this.Ub()&&this.ea(a.g.h)};k.En=function(b,c){switch(c.$a){case a.g.wb:case a.g.Tb:this.od(null)}};k.NHb=function(b,c){switch(c.$a){case a.g.wb:case a.g.Tb:this.od(null)}};d.wd(c.l2b,"PRIM_MITM",{Pa:{Parent:{a:k.L,f:k.Oa},Caption:{a:k.eb,f:function(a){this.ub(d.ka(a))}},Checked:{a:k.Fg,
f:function(a){this.$h(d.wa(a))}},Default:{a:k.X4,f:function(a){this.YTa(d.wa(a))}},GroupIndex:{a:k.eF,f:function(a){this.P0(d.v(a))}},HelpContext:{a:k.zEc,f:function(a){this.h5c(d.v(a))}},MenuBreak:{a:function(){return d.sa(this.eGc(),a.EK.u)},f:function(b){this.X5c(d.qa(b,a.EK.u))}},RadioItem:{a:k.Aca,f:function(a){this.jEa(d.wa(a))}},SubMenu:{a:k.sIc,f:k.Upb},ShortCut:{a:function(){return d.sa(this.rva,a.W.u)},f:function(b){this.W6c(d.qa(b,a.W.u))}},Tag:{a:k.obb,f:function(a){this.dVa(d.v(a))}},
Tip:{a:k.UIc,f:function(a){this.Z7c(d.ka(a))}},TipShow:{a:k.jOa,f:function(a){this.$7c(d.wa(a))}},TipShowOfParent:{a:k.xbb,f:function(a){this.a8c(d.wa(a))}},Enabled:{a:k.ue,f:function(a){this.kg(d.wa(a))}},Visible:{a:k.sb,f:function(a){this.Gb(d.wa(a))}},DisplayPosition:{a:k.pg,f:function(a){this.Ud(d.v(a))}},Image:{a:k.Oc,f:k.od}}})},{rp:["PRIM_TBLO","PRIM_PPNL","PRIM_IMAG","PRIM_SPBN"]});