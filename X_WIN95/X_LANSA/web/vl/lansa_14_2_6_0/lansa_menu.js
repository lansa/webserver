window.LANSA.addSrc("menu",function(d,c,a,b,r){d.Db("PRIM_TBLO");d.Db("PRIM_PPNL");d.Db("PRIM_IMAG");d.Db("PRIM_SPBN");a.wSa={E0:16,Tlb:16};a.dX={dDa:0,Zlb:1,$lb:2,Ulb:4};a.XK={E6b:0,slb:1,rlb:2};a.XK.u={NONE:a.XK.E6b,BREAK:a.XK.slb,BARBREAK:a.XK.rlb};a.YK={D0:25,Jlb:1,Hlb:2,IJd:4,Klb:8,Ilb:16};a.XK={LUc:0};a.mJd=3;a.lJd=2;a.nJd=255;a.wUc=768;a.q6b=256;a.p6b=512;a.qSa=65536;a.rSa=131072;a.glb=262144;a.ilb=524288;a.hlb=1048576;a.sTd=2;a.rTd=2;c.JCa=function(){t.H.call(this);this.ZG=null;this.wM=a.wSa.E0;
this.VP=a.dX.dDa;this.ao=null;this.Qb=[];this.tJ=new c.by;this.rja=new c.pb;this.Zh=new c.cy;this.hld=new c.Vda;this.gld=new c.P6;this.hld.Br(this.Zh);this.gld.Br(this.Zh);this.tJ.Co(this.Zh);this.rja.Yi(b.J(255,255,255));this.rja.gi(b.cb().Po(a.l.Lj));this.rja.ap(1);this.rja.Jp(1);this.rja.tn(1);this.rja.un(1);this.tJ.ua(this,a.w.jx,this.Rwc);this.tJ.vb(this.rja)};var t=c.q(c.JCa,c.ay);t.nb=function(){this.Qb=null;t.j.nb.call(this)};t.Q=function(){null!=this.ZG&&this.WX();for(var a=null;null!=(a=
this.Qb[0]);)a.Pa(null);b.cUc(this);t.j.Q.call(this)};t.Szd=function(){return this.ZG};t.Vzd=function(){return this.Qb};t.bHc=function(){return this.Qb.length};t.Cca=function(){return this};t.nPc=function(){return 0!=(this.VP&a.dX.$lb)};t.eOc=function(){return 0!=(this.VP&a.dX.Ulb)};t.Xzd=function(){return 0!=(this.VP&a.dX.Zlb)};t.V6c=function(){var b=this.VP&~a.dX.Zlb|a.dX.Zlb;this.VP!=b&&(this.VP=b,this.ea(a.g.h))};t.ybb=function(){return 0!=(this.wM&a.wSa.Tlb)};t.xRd=function(b){b=this.wM&~a.wSa.Tlb|
(b?a.wSa.Tlb:0);this.wM!=b&&(this.wM=b,this.ea(a.g.h))};t.lfa=function(a){this.ao!=a&&(this.ao=a,this.hUa())};t.wDc=function(){return this.ao};t.Ww=function(){return this.Qb};t.rda=function(){return null!=this.ZG||null!=this.og};t.SEd=function(){for(var a,b=this.Qb,c=0;c<b.length&&null!=(a=b[c]);c++)if(!0==a.rb())return!0;return!1};t.so=function(){null==this.og&&this.lv(b.gb().DB(this));return this.og};t.Cba=function(b){var c=d.Zb();c.ac("CONTEXT",b);this.Ca(a.w.jx,c);c.Bc()};t.$w=function(b){this.rda()&&
this.WX();b.Yb=this;this.IYa(b);b.Ga(this,this.Yxa);this.ea(a.g.h)};t.yNc=function(b){this.rda()&&this.WX();b.Yb=this;this.IYa(b);b.Ga(this,this.Yxa);this.ea(a.g.h)};t.R0=function(b){this.rda()&&this.WX();b.Yb=null;b.Ea(this,this.Yxa);this.IYa(b);this.ea(a.g.h)};t.PAa=function(){b.U();this.WX()};t.Q9b=function(a){if(null==this.ZG){if(null!=this.og)this.ZG=this.og;else{var c=b.U().Bva;this.ZG=this.a6a();null!=this.ZG&&(c[this.ZG]=this)}this.gTa(null,a)}};t.WX=function(){if(null!=this.ZG){for(var a,
c=this.Qb,d=0;d<c.length&&null!=(a=c[d]);d++){var k=a.Ju;a.lv(null);a.HZc();k&&k.WX()}null!=this.ZG&&(null!=this.og?(this.lv(null),this.ZG=null):(a=b.U().Bva,null!=this.ZG&&delete a[this.ZG]));this.ZG=null;this.lv(null);b.U().Ut(this.tJ,!1)}};t.rXc=function(){};t.Rmb=function(){};t.gTa=function(a,b){this.tJ.kb(new c.ga(0,0,0,5));for(var d,k=0,g=this.Qb,q=0;q<g.length&&null!=(d=g[q]);q++)k=this.wka(a,b,d,k)};t.wka=function(a,b,c,d,g){return c.wka(a,b,this,d,g)};t.kFb=function(a){for(var b=!1,c,d=this.Qb,
g=0;g<d.length&&null!=(c=d[g]);g++)if(c==a||null!=c.Ju&&c.Ju.kFb(a)){b=!0;break}return b};t.YKc=function(b){for(var c=!1,d=null,k=this.Qb,g=0;g<k.length&&null!=(d=k[g]);g++)if(d.Ub()&&d.Zd()){var q=d.Ju;if(null!=q&&q.YKc(b)){c=!0;break}if(d.cwa!=a.W.wEa&&d.cwa==b){d.Wf();c=!0;break}}return c};t.vsd=function(){for(var a=this.Qb,b=null,c=null,d=0;d<a.length&&null!=(c=a[d]);d++)if(c.s5()){b=c;break}return b};t.IYa=function(a){var c=this.Qb.indexOf(a);-1!=c&&this.Qb.splice(c,1);c+=1;if(a.Yb==this){0==
a.Eg()&&(a.lh=this.Qb.length+1);var d=a.Eg(),k=0;0<c&&d>c&&d++;for(var g,c=this.Qb,q=0;q<c.length&&null!=(g=c[q])&&!(g.Eg()>=d);q++)k++;this.Qb.splice(k,0,a)}b.aUc(this)};t.HDa=function(b){b==a.RV&&(this.rda()&&this.WX(),this.W6(),this.ea(a.g.h))};t.W6=function(){for(var b,c=this.Qb,d=0;d<c.length&&null!=(b=c[d]);d++)b.lh=1,b.ea(a.g.h)};t.DJd=function(a){var c=b.U();return null!=c.Bva?c.Bva[a]:null};t.hUa=function(){};t.BTa=function(){b.U().Ut(this.tJ,!1)};t.Rmb=function(){};t.kx=function(a){this.VP|=
a};t.tz=function(a){this.VP&=~a};t.hy=function(a,b){this.VP=this.VP&~a|(b?a:0)};t.UHb=function(b,c){switch(c.Za){case a.g.xb:this.lfa(null)}};t.Yxa=function(){this.nPc()?this.kx(a.dX.Ulb):this.rda()&&(this.WX(),this.ea(a.g.h))};t.Rwc=function(){this.Rmb(null,this.tJ)};d.Ad(c.JCa,"PRIM_MENU",{Oa:{}});c.bkb=function(){s.H.call(this);this.Yz=null};var s=c.q(c.bkb,c.JCa);s.nb=function(){s.j.nb.call(this)};s.Q=function(){this.yfa(null);s.j.Q.call(this)};s.RPb=function(){return this.Yz};s.yfa=function(b){this.Yz!=
b&&(this.Yz&&this.Yz.MMd(this),b&&b.AFd(this),this.ea(a.g.h))};s.rXc=function(){this.Cba(null)};s.gTa=function(a,b){this.tJ.kb(new c.ga(0,0,0,5));for(var d,k=0,g=this.Qb,q=0;q<g.length&&null!=(d=g[q]);q++)k=this.wka(a,b,d,k,!0)};s.a6a=function(){throw 0;};d.Ad(c.bkb,"PRIM_MBAR",{Oa:{}});c.dkb=function(){q.H.call(this);this.Dta=null;this.cxb=0};var q=c.q(c.dkb,c.JCa);q.nb=function(){q.j.nb.call(this)};q.Q=function(){this.hUa();q.j.Q.call(this)};q.yQd=function(b){b!=this.cxb&&(this.cxb=b,this.hUa(),
this.ea(a.g.h))};q.Ktd=function(){return this.cxb};q.MBc=function(){null==this.Dta&&(this.Dta=[]);return this.Dta};q.gTa=function(a,b){this.tJ.kb(new c.ga(0,0,0,5));for(var d,k=0,g=this.MBc(),q=0;q<g.length&&null!=(d=g[q]);q++)k=this.wka(a,b,d,k);g=this.Qb;for(q=0;q<g.length&&null!=(d=g[q]);q++)k=this.wka(a,b,d,k)};q.a6a=function(){return b.Mza()};q.wra=function(a,b){a===r&&(a=0);b===r&&(b=0);this.v8b(new c.ud(a,b),null,!0,null)};q.v8b=function(c,d){var e=b.U(),k=!1,k=e.Gj,g=b.U().ww;this.Cba(d,c);
b.URa(a.RV);this.lfa(d);k&&this.mu(k,a.Na.ajc);null!=g&&g.Y_()&&g.ZQ();this.Q9b(this.tJ);0<this.tJ.Ja()&&(k=e.CDb(!0),this.tJ.j8(c.Hb(),c.Ib(),a.ci.ey,r,null),e.CDb(k))};q.hUa=function(){this.WX();if(this.Dta){for(var a;null!=(a=this.Dta[0]);)b.$(a);this.Dta=null}};q.xpd=function(a,b){var c=b.Ima();c&&c.YKd(b.ej.KM)};d.Ad(c.dkb,"PRIM_PMNU",{Oa:{},qc:{Show:q.wra}});c.J3b=function(){n.H.call(this);this.Yz=null};var n=c.q(c.J3b,c.JCa);n.nb=function(){n.j.nb.call(this)};n.Q=function(){this.Yz&&this.Yz.Pqb(null);
n.j.Q.call(this)};n.RPb=function(){return this.Yz};n.yfa=function(b){if(this.Yz!=b&&!this.kFb(b)){var c=this.Yz;this.Yz=b;c&&c.$Db(null);this.Yz&&this.Yz.$Db(this);this.ea(a.g.h,a.Ce.BQa)}};n.ybb=function(){var a=n.j.ybb.call(this);a&&(a=this.Yz.APc());return a};n.Cca=function(){var a=null;this.Yz&&(a=this.Yz.Cca());return a};n.BTa=function(){n.j.BTa.call(this);this.Yz.K().BTa()};n.a6a=function(){return b.Mza()};n.Bhd=function(){if(null!=this.ZG)for(var a,b=this.Qb,c=0;c<b.length&&null!=(a=b[c]);c++){var d=
a.Ju;d&&d.WX()}};n.Rmb=function(b,c){this.kx(a.dX.$lb);this.Cba(null);this.kx(a.dX.$lb);this.rda()&&this.eOc()&&(this.Bhd(),this.gTa(b,c));this.kx(a.dX.Ulb)};d.Ad(c.J3b,"PRIM_SMNU",{Oa:{Parent:{a:n.RPb,f:n.yfa}}});c.d3b=function(){k.H.call(this);this.Yb=null;this.sf=a.YK.D0;this.jb=a.XK.LUc;this.yf=a.qSa|a.rSa;this.cwa=a.W.wEa;this.Hkc=this.lh=this.Mt=this.tmc=this.KM=0;this.y3=this.La=this.Ju=this.Yb=null;this.qb=this.y3a="";this.YT=new c.yo;this.RHa=new c.ku;this.Z2=new c.pb;this.lM=new c.UK;this.N9=
b.tc(null,this.YT,null,null,1,1);this.SHa=b.tc(null,this.lM,null,null,1,1);this.Kua=b.tc(null,this.RHa,null,null,1,1);this.RHa.vb(this.Z2);this.RHa.Pa(this.YT);this.lM.Pa(this.YT);this.YT.ua(this,a.w.Vb,this.xvc);this.ync()};var k=c.q(c.d3b,c.ay);k.nb=function(){this.Htc();k.j.nb.call(this)};k.Q=function(){this.Pqb(null);this.Pa(null);k.j.Q.call(this);this.wd(null);this.o6c()};k.Swd=function(){var a="";this.aPc()||null!=this.Cca()&&this.Cca()instanceof c.dkb?a=this.bb():this.GCc();return a};k.bb=
function(){return this.qb};k.Mn=function(){return this.bb().is()};k.GCc=function(){this.bb()};k.ovd=function(){return this.lyb};k.iDd=function(){return!0};k.EBd=function(){return!0};k.IAd=function(){return!0};k.uqb=function(){var a=this.Cca();a&&a.V6c()};k.Dg=function(){return 0!=(this.yf&a.glb)?!0:!1};k.s5=function(){return 0!=(this.yf&a.hlb)?!0:!1};k.xQd=function(b){b!=this.bfb()&&(this.sf=this.sf&~a.YK.Hlb|(b?a.YK.Hlb:0),this.ea(a.g.h))};k.pF=function(){return this.Mt};k.wFc=function(){return this.Hkc};
k.aHc=function(){var b=a.XK.E6b;0!=(this.yf&a.q6b)?b=a.XK.slb:0!=(this.yf&a.p6b)&&(b=a.XK.rlb);return b};k.K=function(){return this.Yb};k.Cca=function(){var a=null;this.Yb&&(a=this.Yb.Cca());return a};k.Pca=function(){return 0!=(this.yf&a.ilb)?!0:!1};k.rCd=function(){return this.cwa};k.sCd=function(){return""};k.oJc=function(){return this.Ju};k.ocb=function(){return this.KM};k.ODd=function(){return this.tmc};k.rb=function(){return 0!=(this.yf&a.rSa)?!0:!1};k.tb=function(a){this.qb!=a&&(this.qb=a,
this.K0())};k.mk=function(a){this.bb().YO(a)};k.fi=function(b){var c=this.pF();if(b&&0!=c&&null!=this.K())for(var d,k=this.K().Qb,g=0;g<k.length&&null!=(d=k[g]);g++)d!=this&&d.pF()==c&&d.fi(!1);b=b?this.yf|a.glb:this.yf&~a.glb;b!=this.yf&&(this.yf=b,this.ea(a.g.h))};k.XUa=function(b){b=b?this.yf|a.hlb:this.yf&~a.hlb;b!=this.yf&&(this.yf=b,this.ea(a.g.h))};k.Eg=function(){return this.lh};k.Xd=function(b){this.bfb()||(null!=this.Yb?(this.lh=b,this.Yb.IYa(this)):this.lh!=b&&(this.lh=b,this.ea(a.g.h)))};
k.Zd=function(){return 0!=(this.yf&a.qSa)?!0:!1};k.hg=function(b){b=b?this.yf|a.qSa:this.yf&~a.qSa;b!=this.yf&&(this.yf=b,this.ea(a.g.h))};k.g1=function(b){this.Mt!=b&&(this.Mt=b,this.ea(a.g.h))};k.g6c=function(b){this.Hkc=b;this.ea(a.g.h)};k.U6c=function(b){var c=this.yf&~a.wUc;switch(b){case a.XK.slb:c|=a.q6b;break;case a.XK.rlb:c|=a.p6b}c!=this.yf&&(this.yf=c,this.ea(a.g.h))};k.Pa=function(b){this.Yb!=b&&(this.Yb&&this.Yb.R0(this),b&&(this.bfb()?b.yNc(this):b.$w(this)),null!=this.La&&this.uqb(),
this.ea(a.g.h,a.Ce.BQa))};k.aFa=function(b){b=b?this.yf|a.ilb:this.yf&~a.ilb;b!=this.yf&&(this.yf=b,this.ea(a.g.h))};k.T7c=function(b){this.cwa!=b&&(this.cwa=b,this.ea(a.g.h))};k.Pqb=function(a){this.Ju!=a&&(this.Ju&&this.Ju.yfa(null),a&&a.yfa(this))};k.fWa=function(b){this.KM!=b&&(this.KM=b,this.ea(a.g.h))};k.PSd=function(a){this.tmc=a};k.Pc=function(){return this.La};k.wd=function(b){this.La!=b&&(null!=this.La&&(this.La.Ea(this,this.Kn),this.La.Ab()),this.La=b,null!=this.La&&(this.La.Fa(),this.La.Ga(this,
this.Kn)),this.uqb(),this.ea(a.g.h))};k.o6c=function(){null!=this.y3&&(null!=this.y3&&(this.y3.Ea(this,this.HIb),this.y3.Ab()),this.y3=null,null!=this.y3&&(this.y3.Fa(),this.y3.Ga(this,this.HIb)),this.uqb(),this.ea(a.g.h))};k.Xyd=function(){return this.y3};k.QJc=function(){return this.y3a};k.W8c=function(b){this.y3a!=b&&(this.y3a=b,this.ea(a.g.h,a.Ce.rQc))};k.ePa=function(){return 0!=(this.sf&a.YK.Jlb)?!0:!1};k.X8c=function(b){b!=this.ePa()&&(this.sf=this.sf&~a.YK.Jlb|(b?a.YK.Jlb:0),this.ea(a.g.h))};
k.xcb=function(){return 0!=(this.sf&a.YK.Klb)?!0:!1};k.Y8c=function(b){b!=this.xcb()&&(this.sf=this.sf&~a.YK.Klb|(b?a.YK.Klb:0),this.ea(a.g.h))};k.lCd=function(){return!0};k.Zla=function(){return 0!=(this.sf&a.YK.Ilb)?!0:!1};k.gbc=function(b){b!=this.Zla()&&(this.sf=this.sf&~a.YK.Ilb|(b?a.YK.Ilb:0),this.ea(a.g.h))};k.Eb=function(b){b=b?this.yf|a.rSa:this.yf&~a.rSa;b!=this.yf&&(this.yf=b,this.ea(a.g.h))};k.nQb=function(){return this.Jb};k.so=function(){null==this.og&&this.lv(b.gb().DB(this));return this.og};
k.Ub=function(){return null!=this.Yb&&this.Yb.rda()?!0:!1};k.uGd=function(){return"-"==this.bb()?!0:!1};k.bfb=function(){return 0!=(this.sf&a.YK.Hlb)?!0:!1};k.APc=function(){var a=this.ePa();if(a&&this.xcb()){var b=this.K();b&&(a=b.ybb())}return a};k.aPc=function(){return null!=this.K()&&this.K()instanceof c.bkb};k.Wf=function(b){b===r&&(b=null);var c=d.Zb();c.ac("CONTEXT",b);this.Ca(a.w.Vb,c);c.Bc()};k.VUd=function(){if(this.Ju)for(var a,b=this.Ju.Qb,c=0;c<b.length&&null!=(a=b[c]);c++)a.fi(!1)};
k.$Db=function(b){this.Ju!=b&&(this.Ju&&(this.Ju.Yz==this?this.Ju.yfa(null):(this.ea(a.g.jVc),this.Ju.Ea(this,this.HJb),this.Ju=null)),b&&(b.Yz!=this?b.yfa(this):(this.Ju=b,this.Ju.Ga(this,this.HJb))),this.ea(a.g.h))};k.FJd=function(a){return b.U().PIa[a]};k.ync=function(){this.lyb=b.U().yDb();b.U().PIa[this.lyb]=this};k.wka=function(a,b,c,d){return this.Snc(b,d)};k.HZc=function(){this.YT.Pa(null)};k.Snc=function(b,d){if(this.rb()){var e=b.kj(),k=null;this.Z2.Ip(a.l.he);this.Z2.Yi(a.l.he);this.Z2.ap(1);
this.Z2.Jp(1);this.Z2.tn(1);this.Z2.un(1);this.Dg()&&(k=this.Pca()?a.bc.Q6b:a.bc.P6b,this.Z2.Ip(a.l.dP),this.Z2.Yi(a.l.r8));this.Pc()&&(k=this.Pc());this.N9.Pa(e);this.N9.Hm(e.jc(0));this.N9.bm(e.pc(0));this.N9.If(a.Aa.jj);this.N9.sb(a.ma.kr);this.N9.Cb(a.ka.xg);this.N9.ee(4);this.N9.Gd(2);this.Kua.Pa(e);this.Kua.Hm(e.jc(0));this.Kua.bm(e.pc(0));this.Kua.Cb(a.ka.ae);this.Kua.sb(a.ma.wk);this.Kua.ee(2);this.SHa.Pa(e);this.SHa.Hm(e.jc(0));this.SHa.bm(e.pc(0));this.SHa.Cb(a.ka.lg);this.SHa.ee(22);this.YT.Pa(b);
this.YT.Co(e);this.YT.Xd(d+1);this.YT.xL(this.ePa()?this.y3a:"");this.lM.HO(!1);this.lM.zs(a.Id.US);this.lM.zVa(a.XF.ZCa);this.lM.EI(a.ov.YM);this.lM.tb(this.bb());this.lM.vn(a.Og.Dq);this.lM.l1(this.Ju?this.Ju.tJ:null);this.RHa.Xi(k);this.lM.sj(!1,!0);e=60+this.lM.SR();k=10+this.lM.Wla();this.YT.mc(k);this.RHa.kb(new c.ga(2,2,18,18));this.lM.kb(new c.ga(22,2,e,18));b.Wb(Math.max(b.Qa(),e));b.mc(b.Ja()+this.YT.Ja());null!=this.Ju&&this.Ju.Q9b(this.Ju.tJ);d++}return d};k.Htc=function(){delete b.U().PIa[this.lyb];
b.U()};k.bVd=function(a){this.Xd(a);null!=this.Yb&&this.Yb.W6()};k.K0=function(){this.ea(a.g.h,a.Ce.NWb)};k.xvc=function(a,b){this.pF()&&this.fi(!0);this.Wf();this.K()&&this.K().BTa();b.HANDLED.set(!0)};k.HJb=function(){this.Ub()&&this.ea(a.g.h)};k.Kn=function(b,c){switch(c.Za){case a.g.xb:case a.g.Tb:this.wd(null)}};k.HIb=function(b,c){switch(c.Za){case a.g.xb:case a.g.Tb:this.wd(null)}};d.Ad(c.d3b,"PRIM_MITM",{Oa:{Parent:{a:k.K,f:k.Pa},Caption:{a:k.bb,f:function(a){this.tb(d.ha(a))}},Checked:{a:k.Dg,
f:function(a){this.fi(d.xa(a))}},Default:{a:k.s5,f:function(a){this.XUa(d.xa(a))}},GroupIndex:{a:k.pF,f:function(a){this.g1(d.v(a))}},HelpContext:{a:k.wFc,f:function(a){this.g6c(d.v(a))}},MenuBreak:{a:function(){return d.ta(this.aHc(),a.XK.u)},f:function(b){this.U6c(d.qa(b,a.XK.u))}},RadioItem:{a:k.Pca,f:function(a){this.aFa(d.xa(a))}},SubMenu:{a:k.oJc,f:k.Pqb},ShortCut:{a:function(){return d.ta(this.cwa,a.W.u)},f:function(b){this.T7c(d.qa(b,a.W.u))}},Tag:{a:k.ocb,f:function(a){this.fWa(d.v(a))}},
Tip:{a:k.QJc,f:function(a){this.W8c(d.ha(a))}},TipShow:{a:k.ePa,f:function(a){this.X8c(d.xa(a))}},TipShowOfParent:{a:k.xcb,f:function(a){this.Y8c(d.xa(a))}},Enabled:{a:k.Zd,f:function(a){this.hg(d.xa(a))}},Visible:{a:k.rb,f:function(a){this.Eb(d.xa(a))}},DisplayPosition:{a:k.Eg,f:function(a){this.Xd(d.v(a))}},Image:{a:k.Pc,f:k.wd}}})},{rp:["PRIM_TBLO","PRIM_PPNL","PRIM_IMAG","PRIM_SPBN"]});
