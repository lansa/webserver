window.LANSA.addSrc("web",function(e,c,a,b,m){e.Gb("PRIM_LABL");var p=null,h=null;a.uJ={gkb:0,V5b:1,W5b:2,U5b:3};a.uJ.v={INLINE:a.uJ.gkb,LEFT:a.uJ.V5b,RIGHT:a.uJ.W5b,CENTER:a.uJ.U5b};a.AE={cJa:0,mHb:1,qHb:2,rHb:3,tHb:4,M4a:5};a.AE.v={NONE:a.AE.cJa,NOTLOADED:a.AE.mHb,PERMISSIONDENIED:a.AE.qHb,POSITIONUNAVAILABLE:a.AE.rHb,TIMEOUT:a.AE.tHb,UNKNOWNERROR:a.AE.M4a};a.xT={eAb:0,cAb:1,fAb:2,dAb:4};a.xT.v={NONE:a.xT.eAb,ERROR:a.xT.cAb,WARNING:a.xT.fAb,INFORMATION:a.xT.dAb};c.ggb=function(){r.w.call(this);
this.ab=[]};var r=c.u(c.ggb,c.wd);r.U=function(){r.j.U.call(this)};r.mc=function(){return this.ab.length};r.Sd=function(a){return this.ab[a-1]};r.rG=function(a){for(var c=null,d=0;d<this.ab.length;d++){var e=this.ab[d];if(b.Fz(e.Nm,a)){c=e;break}}return c};e.jb(c.ggb,"PRIM_WEB","URLParameters",{Oa:{Item:{a:function(a){return this.rG(e.ma(a))},Gw:"na"},ItemCount:{a:r.mc}},lg:{gg:"Item"},gq:{Bp:function(a){return this.Sd(e.K(a))},Qv:r.mc}});c.fgb=function(){k.w.call(this);this.bb=this.Nm=""};var k=
c.u(c.fgb,c.wd);k.dh=function(){return this.Nm.toUpperCase()};k.Ka=function(){return this.bb};e.jb(c.fgb,"PRIM_WEB","URLParameter",{Oa:{Name:{a:k.dh},Value:{a:k.Ka}}});c.dgb=function(){s.w.call(this);try{var a,b=(new Date).toString();localStorage.setItem(b,b);a=localStorage.getItem(b)==b;localStorage.removeItem(b);a&&(p=localStorage)}catch(c){}this.Xq=null};var s=c.u(c.dgb,c.wd);s.U=function(){s.j.U.call(this)};s.e6a=function(){return null!=p};s.mc=function(){return this.XP().length};s.Sd=function(a){return this.XP()[a-
1]};s.rG=function(a){for(var b=null,c=this.XP(),d=0;d<c.length;d++){var e=c[d];if(e.Nm==a){b=e;break}}return b};s.XP=function(){if(null==this.Xq&&(this.Xq=[],p))for(var a=0;a<p.length;a++){var b=p.key(a);""!=b&&p[b]!=m&&this.Xq.push(new c.uOa(b))}return this.Xq};s.qAa=function(){this.Xq=null};s.ph=function(a,b){var d=this.XP(),e=this.rG(a);null==e&&(e=new c.uOa(a),d.push(e));e.Xa(b)||d.splice(d.indexOf(e),1)};s.Zs=function(c){var d=this.XP(),e=this.rG(c);null!=e&&(p.removeItem(c),d.splice(d.indexOf(e),
1),b.Dp().G$(a.ZE.Aoa))};s.pp=function(){p&&(p.clear(),this.qAa(),b.Dp().G$(a.ZE.Aoa))};e.jb(c.dgb,"PRIM_WEB","LocalStorage",{Oa:{Available:{a:s.e6a},Item:{a:function(a){return this.rG(e.ma(a))},Gw:"na"},ItemCount:{a:s.mc}},jc:{Add:s.ph,Remove:s.Zs,Clear:s.pp},lg:{gg:"Item"},gq:{Bp:function(a){return this.Sd(e.K(a))},Qv:s.mc}});c.uOa=function(a){f.w.call(this);this.Nm=a};var f=c.u(c.uOa,c.wd);f.dh=function(){return this.Nm};f.Ka=function(){var a="";p&&(a=p[this.Nm],a===m&&(a=""));return a};f.Xa=function(c){var d=
!0;try{p[this.Nm]=c,b.Dp().G$(a.ZE.Aoa)}catch(e){b.Dp().WIb(a.ZE.Aoa),d=!1}return d};e.jb(c.uOa,"PRIM_WEB","LocalStorageItem",{Oa:{Name:{a:f.dh},Value:{a:f.Ka,g:function(a){this.Xa(e.ma(a))}}},lg:{gg:"Value"}});c.egb=function(){g.w.call(this);try{var a,b=(new Date).toString();sessionStorage.setItem(b,b);a=sessionStorage.getItem(b)==b;sessionStorage.removeItem(b);a&&(h=sessionStorage)}catch(c){}this.Xq=null};var g=c.u(c.egb,c.wd);g.U=function(){g.j.U.call(this)};g.e6a=function(){return null!=h};g.mc=
function(){return this.XP().length};g.Sd=function(a){return this.XP()[a-1]};g.rG=function(a){for(var b=null,c=this.XP(),d=0;d<c.length;d++){var e=c[d];if(e.Nm==a){b=e;break}}return b};g.XP=function(){if(null==this.Xq&&(this.Xq=[],h))for(var a=0;a<h.length;a++){var b=h.key(a);""!=b&&h[b]!=m&&this.Xq.push(new c.vOa(b))}return this.Xq};g.qAa=function(){this.Xq=null};g.ph=function(a,b){var d=this.XP(),e=this.rG(a);null==e&&(e=new c.vOa(a),d.push(e));e.Xa(b)||d.splice(d.indexOf(e),1)};g.Zs=function(c){var d=
this.XP(),e=this.rG(c);null!=e&&(h.removeItem(c),d.splice(d.indexOf(e),1),b.Dp().G$(a.ZE.Boa))};g.pp=function(){h&&(h.clear(),this.qAa(),b.Dp().G$(a.ZE.Boa))};e.jb(c.egb,"PRIM_WEB","SessionStorage",{Oa:{Available:{a:g.e6a},Item:{a:function(a){return this.rG(e.ma(a))},Gw:"na"},ItemCount:{a:g.mc}},jc:{Add:g.ph,Remove:g.Zs,Clear:g.pp},lg:{gg:"Item"},gq:{Bp:function(a){return this.Sd(e.K(a))},Qv:g.mc}});c.vOa=function(a){d.w.call(this);this.Nm=a};var d=c.u(c.vOa,c.wd);d.dh=function(){return this.Nm};
d.Ka=function(){var a="";h&&(a=h[this.Nm],a===m&&(a=""));return a};d.Xa=function(c){var d=!0;try{h[this.Nm]=c,b.Dp().G$(a.ZE.Boa)}catch(e){b.Dp().WIb(a.ZE.Boa),d=!1}return d};e.jb(c.vOa,"PRIM_WEB","SessionStorageItem",{Oa:{Name:{a:d.dh},Value:{a:d.Ka,g:function(a){this.Xa(e.ma(a))}}},lg:{gg:"Value"}});c.cgb=function(){l.w.call(this)};var l=c.u(c.cgb,c.wd);l.U=function(){l.j.U.call(this)};l.aFc=function(a){0<a&&window.history.go(0-a)};l.bFc=function(a){0<a&&window.history.go(a)};l.ph=function(a,c){var d=
window.location.protocol+"//"+window.location.host+window.location.pathname;0<a.length&&(d+="?"+a);window.history.pushState(null,"",d);b.Dp().Rjb();c&&b.Dp().wJa()};l.pUc=function(a,c){var d=window.location.protocol+"//"+window.location.host+window.location.pathname;0<a.length&&(d+="?"+a);window.history.replaceState(null,"",d);b.Dp().Rjb();c&&b.Dp().wJa()};e.jb(c.cgb,"PRIM_WEB","History",{jc:{Add:function(a,b){this.ph(e.ma(a),b===m?!0:e.za(b))},Replace:function(a,b){this.pUc(e.ma(a),b===m?!0:e.za(b))},
GoBack:function(a){this.aFc(a===m?1:e.K(a))},GoForward:function(a){this.bFc(a===m?1:e.K(a))}}});c.M_b=function(){u.w.call(this);this.nd=b.Ad(0,0,400,400);this.cEa=this.$e="";this.ug&=~a.Xg.zQ;this.ug&=~a.Xg.lZ};var u=c.u(c.M_b,c.jn);u.fh=function(){return c.d0b};u.vG=function(){return this.$e};u.Pl=function(b){this.$e!=b&&(this.$e=b,this.ca(a.f.h))};u.eU=function(){return this.cEa};u.Wkb=function(a){this.cEa=a};u.Ld=function(a,c,d){u.j.Ld.call(this,a,c,d);a=this.Qa().ib();b.Od[a].Pl(this.$e)};u.xvc=
function(){this.Ga(a.G.hTb)};e.jb(c.M_b,"PRIM_WEB","Page",{Oa:{Source:{a:u.vG,g:function(a){this.Pl(e.ma(a))}},Description:{a:u.eU,g:function(a){this.Wkb(e.ma(a))}}}});c.Ema=function(){z.w.call(this)};var z=c.u(c.Ema,c.jn);z.c8a=function(){for(var a=null,b=this;b;){if(b instanceof c.hgb){a=b;break}b=b.Rb}return a};z.Uca=function(){z.j.Uca.call(this);var a=this.c8a();a&&a.fY(this)};z.WZ=function(){z.j.WZ.call(this);var a=this.c8a();a&&a.gY(this)};z.Af=function(a){z.j.Af.call(this,a);var b=this.c8a();
b==this&&b.EA(a,!1)};e.jb(c.Ema,"PRIM_WEB","RichTextItem",{});c.lgb=function(){t.w.call(this)};var t=c.u(c.lgb,c.Ema);t.fh=function(){return c.T0b};e.jb(c.lgb,"PRIM_WEB","RichTextLine",{});c.igb=function(){K.w.call(this)};var K=c.u(c.igb,c.Ema);K.fh=function(){return c.R0b};e.jb(c.igb,"PRIM_WEB","RichTextBreak",{});c.jgb=function(){B.w.call(this);this.kX=null;this.JFa=a.uJ.gkb;this.iZa=this.jZa=0};var B=c.u(c.jgb,c.Ema);B.U=function(){B.j.U.call(this);this.YRa(null)};B.fh=function(){return c.S0b};
B.WCc=function(){return this.kX};B.YRa=function(b){this.kX!=b&&(null!=this.kX&&(this.kX.Da(this,this.GEb),this.kX.xb()),this.kX=b,null!=this.kX&&(this.kX.Ca(),this.kX.Ea(this,this.GEb)),this.ca(a.f.h))};B.Nvd=function(){return this.JFa};B.h8b=function(b){this.JFa!=b&&(this.JFa=b,this.ca(a.f.h))};B.XCc=function(){return this.jZa};B.j8b=function(b){this.jZa!=b&&(this.jZa=b,this.ca(a.f.h))};B.VCc=function(){return this.iZa};B.i8b=function(b){this.iZa!=b&&(this.iZa=b,this.ca(a.f.h))};B.Ld=function(a,
c,d){B.j.Ld.call(this,a,c,d);a=this.Qa().ib();b.Od[a].Ug(this.JFa,this.jZa,this.iZa)};B.Cjb=function(){var a=this.kX,c=this.Qa().ib(),a=a?a.zh():"";b.Od[c].$c(a)};B.GEb=function(b,c){switch(c.Ya){case a.f.sb:case a.f.Ob:this.YRa(null);break;case a.f.h:this.ca(a.f.h)}};e.jb(c.jgb,"PRIM_WEB","RichTextImage",{Oa:{Image:{a:B.WCc,g:function(a){this.YRa(a)}},Width:{a:B.XCc,g:function(a){this.j8b(e.K(a))}},Height:{a:B.VCc,g:function(a){this.i8b(e.K(a))}},Alignment:{a:function(){return e.ta(this.JFa,a.uJ.v)},
g:function(b){this.h8b(e.ra(b,a.uJ.v))}}}});c.wOa=function(){P.w.call(this);this.Sy=null};var P=c.u(c.wOa,c.Ema);P.fh=function(){return c.U0b};P.vz=function(){null==this.Sy&&(this.Sy=new c.kgb(this));return this.Sy};e.jb(c.wOa,"PRIM_WEB","RichTextParagraph",{Oa:{Items:{a:P.vz}}});c.hgb=function(){D.w.call(this);this.nd=b.Ad(0,0,100,100)};var D=c.u(c.hgb,c.wOa);D.fh=function(){return c.Q0b};D.fY=function(b){if(!this.ed()){var c=e.Tb();c.Zb("ITEM",b);this.Ga(a.G.$I,c);c.sc()}};D.gY=function(b){if(!this.ed()){var c=
e.Tb();c.Zb("ITEM",b);this.Ga(a.G.bJ,c);c.sc()}};D.x3=function(b){if(!this.ed()){var c=e.Tb();c.Zb("ITEM",b);this.Ga(a.G.aJ,c);c.sc()}};D.EA=function(b,c){if(!c&&!this.ed()){var d=e.Tb();d.Zb("ITEM",b);d.rf("CONTINUE",!0);this.Ga(a.G.ZI,d);c=!d.og("CONTINUE");d.sc()}return c};e.jb(c.hgb,"PRIM_WEB","RichText",{});c.kgb=function(a){x.w.call(this);this.ab=[];this.pA=a};var x=c.u(c.kgb,c.wd);x.U=function(){x.j.U.call(this)};x.mc=function(){return this.ab.length};x.Sd=function(a){return this.ab[a-1]};
x.ph=function(b,d,e,f){var g=new c.lgb;g.Ca();g.Ab(b);d!=m&&g.tb(d);e!=m&&g.on(e);f!=m&&g.Wo(f);g.Na(this.pA);this.ab[this.ab.length]=g;this.pA.ca(a.f.h);this.pA.Qb()&&this.pA.hh();return g};x.bic=function(){var b=new c.igb;b.Ca();b.Na(this.pA);this.ab[this.ab.length]=b;this.pA.ca(a.f.h);this.pA.Qb()&&this.pA.hh();return b};x.jic=function(b,d,e,f,g,l,h){var k=new c.jgb;k.Ca();k.YRa(b);d!=m&&k.h8b(d);e!=m&&k.j8b(e);f!=m&&k.i8b(f);g!=m&&k.tb(g);l!=m&&k.on(l);h!=m&&k.Wo(h);k.Na(this.pA);this.ab[this.ab.length]=
k;this.pA.ca(a.f.h);this.pA.Qb()&&this.pA.hh();return k};x.oic=function(b,d,e,f){var g=new c.wOa;g.Ca();b!=m&&g.Ab(b);d!=m&&g.tb(d);e!=m&&g.on(e);f!=m&&g.Wo(f);g.Na(this.pA);this.ab[this.ab.length]=g;this.pA.ca(a.f.h);this.pA.Qb()&&this.pA.hh();return g};x.Zs=function(b){this.ab.splice(this.ab.indexOf(b),1);b.Na(null);b.xb();this.pA.ca(a.f.h)};x.bk=function(){for(;0<this.ab.length;)this.Zs(this.ab[0]);this.pA.ca(a.f.h)};e.jb(c.kgb,"PRIM_WEB","RichTextItems",{Oa:{Item:{a:function(a){return this.Sd(e.K(a))},
Gw:"na"},ItemCount:{a:x.mc}},jc:{Add:x.ph,AddBreak:x.bic,AddImage:function(b,c,d,f,g,l,h){return this.jic(b,e.ra(c,a.uJ.v),d,f,g,l,h)},AddParagraph:x.oic,Remove:x.Zs,RemoveAll:x.bk},lg:{gg:"Item"},gq:{Bp:function(a){return this.Sd(e.K(a))},Qv:x.mc}});c.O_b=function(){y.w.call(this);this.nd=b.Ad(0,0,100,100)};var y=c.u(c.O_b,c.jn);y.fh=function(){return c.v0b};y.Ld=function(a,b,c){y.j.Ld.call(this,a,b,c)};y.zg=function(a){this.qJ();a&&this.Sza();b.cb().PB(this)};y.IC=function(){this.ea.BX()};e.jb(c.O_b,
"PRIM_WEB","Camera",{});c.Z_b=function(){L.w.call(this);this.nd=b.Ad(0,0,100,100);this.kF=null;this.zHa("")};var L=c.u(c.Z_b,c.jn);L.U=function(){this.kF=null;L.j.U.call(this)};L.fh=function(){return c.V0b};L.sva=function(){this.Qa()&&this.zHa(this.Qa().Lwc());return this.kF};L.zHa=function(a){this.kF=new c.JG({data:a,mimetype:"image/png",filename:"signature.png"})};L.pp=function(){if(this.Qa()){var a=this.Qa().ib();b.Od[a].pp();this.kc()}};L.Ld=function(a,b,c){L.j.Ld.call(this,a,b,c)};L.zg=function(a){this.qJ();
a&&this.Sza();b.cb().PB(this)};L.IC=function(){this.ea.BX()};L.kc=function(){this.Ga(a.G.ah)};e.jb(c.Z_b,"PRIM_WEB","Signature",{Oa:{Blob:{a:L.sva}},jc:{Clear:L.pp}});c.U_b=function(){J.w.call(this);this.Vwb=this.hvb=this.Csb=this.Bsb=this.xsb=this.pYa=this.Uvb=0;this.c8=a.AE.mHb};var J=c.u(c.U_b,c.wd);J.uBc=function(){return this.Uvb};J.GAc=function(){return this.pYa};J.hwc=function(){return this.xsb};J.rwc=function(){return this.Bsb};J.swc=function(){return this.Csb};J.Zzc=function(){return this.hvb};
J.zDc=function(){return this.Vwb};J.nsd=function(){return this.c8};J.yTc=function(){var b=this;navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(d){b.Uvb=d.coords.longitude;b.pYa=d.coords.latitude;b.xsb=d.coords.accuracy;b.Bsb=d.coords.altitude?d.coords.altitude:0;b.Csb=d.coords.altitudeAccuracy?d.coords.altitudeAccuracy:0;b.hvb=d.coords.heading?d.coords.heading:0;b.Vwb=d.coords.speed?d.coords.speed:0;b.c8=a.AE.cJa;d=new c.dma;b.Ga(a.G.P4b,d)},function(d){b.Uvb=0;b.pYa=0;b.xsb=
0;b.Bsb=0;b.Csb=0;b.hvb=0;b.Vwb=0;b.c8=a.AE.M4a;switch(d.code){case d.PERMISSION_DENIED:b.c8=a.AE.qHb;break;case d.POSITION_UNAVAILABLE:b.c8=a.AE.rHb;break;case d.TIMEOUT:b.c8=a.AE.tHb;break;case d.UNKNOWN_ERROR:b.c8=a.AE.M4a}d=new c.dma;b.Ga(a.G.P4b,d)});return this.pYa};e.jb(c.U_b,"PRIM_WEB","Geolocation",{Oa:{Longitude:{a:J.uBc},Latitude:{a:J.GAc},Accuracy:{a:J.hwc},Altitude:{a:J.rwc},AltitudeAccuracy:{a:J.swc},Heading:{a:J.Zzc},Speed:{a:J.zDc},ErrorCode:{a:function(){return e.ta(this.c8,a.AE.v)}}},
jc:{Refresh:J.yTc}});c.Q_b=function(){C.w.call(this)};var C=c.u(c.Q_b,c.wd);C.INc=function(b,c){if("undefined"!==typeof console)switch(c){case a.xT.cAb:console.error(b);break;case a.xT.fAb:console.warn(b);break;case a.xT.dAb:console.info(b);break;default:console.log(b)}};e.jb(c.Q_b,"PRIM_WEB","Console",{Oa:{},jc:{Log:function(b,c){return this.INc(e.ma(b),c?e.ra(c,a.xT.v):a.xT.eAb)}}});c.T_b=function(){G.w.call(this);this.Xb=this.gb=null;this.LN=this.Es="";this.awb=!1};var G=c.u(c.T_b,c.Ws);G.U=function(){G.j.U.call(this);
this.mo(null)};G.fh=function(){return c.D0b};G.zh=function(){return this.Es};G.tKb=function(){return this.LN};G.Bg=function(b){this.gb!=b&&(this.mo(b),this.l(a.f.h))};G.hb=function(){var a=null;return a=this.gb};G.cc=function(){return this.Xb};G.H7a=function(){return this.awb};G.U7b=function(b){this.awb!=b&&(this.awb=b,this.ca(a.f.h))};G.kc=function(){this.Ga(a.G.ah)};G.B5a=function(b,c){var d=e.Tb();d.Zb("FILE",b);d.Zb("FILES",c);this.Ga(a.G.BIb,d);d.sc()};G.WK=function(){this.ZR=b.xma(this.Xb.hj());
this.gb.OT(this.cc())};G.mo=function(a){var c=null;a&&(c=a.Rx(),this.gb==a?c.yn(this.Xb):a.lz(c));this.gb&&(this.gb.Da(this),this.Xb.Da(this),b.la(this.Xb),this.Xb=null);if(this.gb=a)this.gb.Ea(this,this.Xn),this.Xb=c,this.Xb.Ea(this,this.Hv);this.ih()};G.iPd=function(){};G.Xn=function(b,c){c.Ya==a.f.h?c.Wr==a.we.Zw?this.gb.lz(this.cc()):this.mo(this.gb):c.Ya==a.f.sb&&this.Bg(null)};G.Hv=function(b,c){c.Ya==a.f.h&&c.Wr==a.we.Zw&&this.WK()};e.jb(c.T_b,"PRIM_WEB","FilePicker",{Oa:{MultiSelect:{a:G.H7a,
g:function(a){this.U7b(e.za(a))}}}});c.agb=function(a){F.w.call(this);this.kYa=a;this.aX=this.kF=null};var F=c.u(c.agb,c.wd);F.U=function(){null!=this.kF&&(this.kF=null);null!=this.aX&&(b.OBb(this.aX),this.aX=null);F.j.U.call(this)};F.dh=function(){return this.kYa.name};F.sva=function(){null==this.kF&&(this.kF=new c.OWb(this.kYa));return this.kF};F.n8a=function(){return this.kYa.size};F.RBc=function(){return this.kYa.type};e.jb(c.agb,"PRIM_WEB","File",{Oa:{Name:{a:F.dh},Blob:{a:F.sva},FileSize:{a:F.n8a},
MimeType:{a:F.RBc}}});c.bgb=function(){Y.w.call(this);this.ab=[]};var Y=c.u(c.bgb,c.wd);Y.U=function(){for(var a=0;a<this.ab.length;a++)this.ab[a].xb();this.ab=[];Y.j.U.call(this)};Y.mc=function(){return this.ab.length};Y.Sd=function(a){return this.ab[a-1]};Y.ls=function(a){this.ab.push(a);a.Ca()};e.jb(c.bgb,"PRIM_WEB","Files",{Oa:{Item:{a:function(a){return this.Sd(e.K(a))},Gw:"na"},ItemCount:{a:Y.mc}},lg:{gg:"Item"},gq:{Bp:function(a){return this.Sd(e.K(a))},Qv:Y.mc}});c.P_b=function(){ka.w.call(this)};
var ka=c.u(c.P_b,c.wd);ka.qjb=function(a){var d=this;if(window.FileReader&&a instanceof c.JG){if(a=a.gka()){var e=b.vR(),f=new FileReader;f.onload=function(a){d.bY(a.target.result);b.zy(e)};f.readAsText(a)}}else d.bY("")};ka.bY=function(b){var c=e.Tb();c.$H("DATA",b);this.Ga(a.G.U2,c)};e.jb(c.P_b,"PRIM_WEB","ClobReader",{jc:{Read:ka.qjb}});c.N_b=function(){aa.w.call(this)};var aa=c.u(c.N_b,c.wd);aa.qjb=function(a){var d=this;if(window.FileReader&&a instanceof c.JG){if(a=a.gka()){var e=b.vR(),f=new FileReader;
f.onload=function(a){d.bY(b.kIb(a.target.result));b.zy(e)};f.readAsDataURL(a)}}else d.bY("","")};aa.bY=function(b){var c=e.Tb();c.$H("DATA",b);this.Ga(a.G.U2,c)};e.jb(c.N_b,"PRIM_WEB","BlobReader",{jc:{Read:aa.qjb}});c.Q0b=function(a){W.w.call(this,a)};var W=c.u(c.Q0b,c.kn);W.Ab=function(a){this.H.textContent=a};W.iz=function(){W.j.iz.call(this);this.H.style.whiteSpace="normal";this.H.style.overflowX="auto";this.H.style.overflowY="auto"};W.lf=function(a,b){this.H=document.createElement("div");this.H.setAttribute("id",
a+this.gc);this.H.setAttribute("LANSAHandle",this.gc);return W.j.lf.call(this,a,b)};c.U0b=function(a){Q.w.call(this,a)};var Q=c.u(c.U0b,c.kn);Q.Ab=function(a){this.H.textContent=a};Q.bxa=function(){return!1};Q.hfa=function(){};Q.iz=function(){};Q.lf=function(a,b){this.H=document.createElement("p");this.H.setAttribute("id",a+this.gc);this.H.setAttribute("LANSAHandle",this.gc);return Q.j.lf.call(this,a,b)};c.R0b=function(a){H.w.call(this,a)};var H=c.u(c.R0b,c.kn);H.bxa=function(){return!1};H.hfa=function(){};
H.iz=function(){};H.lf=function(a,b){this.H=document.createElement("br");this.H.setAttribute("id",a+this.gc);this.H.setAttribute("LANSAHandle",this.gc);return H.j.lf.call(this,a,b)};c.S0b=function(a){v.w.call(this,a)};var v=c.u(c.S0b,c.kn);v.$c=function(a){this.H.src=a};v.bxa=function(){return!1};v.Ug=function(b,c,d){this.H.style.width=0==c?"auto":c+"px";this.H.style.height=0==d?"auto":d+"px";switch(b){case a.uJ.gkb:this.H.style.marginLeft="initial";this.H.style.marginRight="initial";this.H.style.display=
"inline";this.H.style.cssFloat="none";break;case a.uJ.V5b:this.H.style.marginLeft="initial";this.H.style.marginRight="initial";this.H.style.display="inline";this.H.style.cssFloat="left";break;case a.uJ.W5b:this.H.style.marginLeft="initial";this.H.style.marginRight="initial";this.H.style.display="inline";this.H.style.cssFloat="right";break;case a.uJ.U5b:this.H.style.marginLeft="auto",this.H.style.marginRight="auto",this.H.style.display="block",this.H.style.cssFloat="none"}};v.hfa=function(){};v.iz=
function(){this.H.style.borderStyle="solid"};v.lf=function(a,b){this.H=document.createElement("img");this.H.setAttribute("id",a+this.gc);this.H.setAttribute("LANSAHandle",this.gc);return v.j.lf.call(this,a,b)};c.T0b=function(a){da.w.call(this,a)};var da=c.u(c.T0b,c.kn);da.Ab=function(a){this.H.textContent=a};da.bxa=function(){return!1};da.hfa=function(){};da.iz=function(){};da.lf=function(a,b){this.H=document.createElement("span");this.H.setAttribute("id",a+this.gc);this.H.setAttribute("LANSAHandle",
this.gc);return da.j.lf.call(this,a,b)};c.v0b=function(a){$.w.call(this,a)};var $=c.u(c.v0b,c.kn);$.lf=function(a,b){this.H=document.createElement("div");this.H.setAttribute("id",a+this.gc);this.H.setAttribute("LANSAHandle",this.gc);return $.j.lf.call(this,a,b)};c.V0b=function(a){ga.w.call(this,a);this.hD=this.sn=null;this.jfc=this.eyb=!1;this.pvb=null};var ga=c.u(c.V0b,c.kn);ga.lf=function(a,b){this.H=document.createElement("div");this.H.setAttribute("id",a+this.gc);this.H.setAttribute("LANSAHandle",
this.gc);this.H.style.msTouchAction="none";this.hD=document.createElement("canvas");this.hD.style.touchAction="none";this.H.appendChild(this.hD);this.sn=this.hD.getContext("2d");this.LBb();return ga.j.lf.call(this,a,b)};ga.io=function(a,b,c,d){ga.j.io.call(this,a,b,c,d);if(c>this.hD.width||d>this.hD.height)a=this.sn.getImageData(0,0,this.hD.width-1,this.hD.height-1),this.hD.width=this.Wc,this.hD.height=this.ad,this.sn.putImageData(a,0,0)};ga.DM=function(a){this.j9b(a);return!0};ga.ohb=function(a){this.i9b(a);
return!0};ga.LOa=function(a){this.h9b(a);return!0};ga.Ypa=function(a){this.j9b(a);return!0};ga.mw=function(a){this.i9b(a);return!0};ga.bfa=function(a){this.h9b(a);return!0};ga.iPb=function(a){this.H.onpointerdown===m&&a.touches!==m?(a.psb=a.touches[0].pageX-this.pa.gs(),a.qsb=a.touches[0].pageY-this.pa.hs()):(a.psb=a.clientX-this.pa.gs(),a.qsb=a.clientY-this.pa.hs());this.pa.kc()};ga.LBb=function(){this.Y0a(!0);this.pvb=new Image;this.pvb.onload=function(){throw 0;};this.pvb.src=null};ga.Y0a=function(a){(this.jfc||
a)&&this.sn.clearRect(0,0,this.sn.canvas.width,this.sn.canvas.height);this.jfc=!1};ga.Lwc=function(){var a=this.hD.toDataURL("image/png");return b.kIb(a)};ga.pp=function(){this.LBb()};ga.j9b=function(a){a.preventDefault();this.Y0a(!1);this.sn.beginPath();this.iPb(a);this.sn.moveTo(a.psb,a.qsb);this.eyb=!0};ga.h9b=function(a){a.preventDefault();this.eyb=!1};ga.dNd=function(a){this.mw(a)};ga.i9b=function(a){this.eyb&&(a.preventDefault(),this.Y0a(!1),this.sn.strokeStyle="rgb(0,0,0)",this.sn.lineWidth=
1,this.iPb(a),this.sn.lineTo(a.psb,a.qsb),this.sn.stroke())};c.d0b=function(a){oa.w.call(this,a);this.lta=this.eb=null};var oa=c.u(c.d0b,c.kn);oa.Pl=function(a){this.lta.src=a};oa.lf=function(a,b){this.H=document.createElement("div");this.H.setAttribute("id",a+this.gc);this.H.setAttribute("LANSAHandle",this.gc);this.lta=document.createElement("iframe");this.E2(this.lta);this.lta.style.width="100%";this.lta.style.height="100%";this.H.appendChild(this.lta);return oa.j.lf.call(this,a,b)};oa.IX=function(){var a=
this;oa.j.IX.call(this);a.H.addEventListener("load",function(){a.pa.xvc()},!1)};oa.E2=function(a){oa.j.E2.call(this,a);this.H.style.overflowX="auto";this.H.style.overflowY="auto"};c.D0b=function(a){X.w.call(this,a);this.gS=null};var X=c.u(c.D0b,c.vgb);X.lf=function(a,b){var c=X.j.lf.call(this,a,b);this.gS=document.createElement("input");this.gS.type="File";var d=this.gS.style;this.nb.style.zIndex=1;d.opacity=0;d.position="absolute";d.zIndex=99998;d.background="rgb( 255, 0, 0 )";c.appendChild(this.gS);
return c};X.Ld=function(){X.j.Ld.call(this);this.fcd()};X.io=function(a,b,c,d){X.j.io.call(this,a,b,c,d);this.gS.style.left="0px";this.gS.style.top="0px";this.gS.style.width=c+"px";this.gS.style.height=d+"px"};X.IX=function(){var a=this;this.L2();a.gS.addEventListener("change",function(b){a.Olc(b);a.gS.value=""},!1)};X.fcd=function(){this.gS.multiple=this.pa.H7a()};X.Olc=function(a){a=a.target.files||a.dataTransfer.files;for(var b=null,d=new c.bgb,e=0,f;f=a[e];e++)f=new c.agb(f),null==b&&(b=f),d.ls(f);
b&&this.pa.B5a(b,d)}},{rp:["PRIM_LABL"]});