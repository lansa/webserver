window.LANSA.addSrc("evef",function(d,c,a,b){d.Db("PRIM_EVP");d.Db("PRIM_EDIT");c.UYb=function(b){p.H.call(this,b);this.Rm|=a.m9a.Gvb;this.vf|=268435456;this.Aa=new c.TYb(this);this.Aa.Oa(this);this.Aa.ta(this,a.w.qh,this.yB)};var p=c.q(c.UYb,c.v6);p.nb=function(){b.$(this.Aa);this.Aa=null;p.j.nb.call(this)};p.Hca=function(){return this.Aa};p.Sq=function(b){this.Aa.lo()!=b&&(this.Aa.Sq(b),this.ea(a.g.h))};p.lo=function(){return this.Aa.lo()};p.Vu=function(b){this.Aa.Ur()!=b&&(this.Aa.Vu(b),this.ea(a.g.h))};
p.Ur=function(){return this.Aa.Ur()};p.hC=function(b){this.Aa.Ow()!=b&&(this.Aa.hC(b),this.ea(a.g.h))};p.Ow=function(){return this.Aa.Ow()};p.Mw=function(){return this.Jn()!=this.iq()};p.iq=function(){return this.Aa.iq()};p.ur=function(a){this.Aa.ur(a)};p.Jn=function(){return this.Aa.Jn()};p.tr=function(a){this.Aa.tr(a)};p.fc=function(){return this.Aa.fc()};p.Hv=function(){return this.Aa.ca};p.wO=function(a){1==a?this.Dp(268435456):this.Dp(0)};p.QJ=function(){var a=0;268435456==this.Uj()&&(a=1);return a};
p.Dp=function(b){this.Uj()!=b&&(this.vf=this.vf&~a.qi.ola|b,this.Dh(),this.k(a.g.h))};p.Uj=function(){return this.vf&a.qi.ola};p.zPa=function(){return this.jK()?!0:!1};p.jK=function(){return 0<this.Uj()};p.mGa=function(){this.Qe()&&this.Qe().Rb(this.Pua);this.Aa&&this.Aa.Rb(this.tua)};p.HAa=function(){this.Aa.Qg(this.hb());this.Aa.ey(!0);this.Aa.Wv(!0);this.Aa.u7(this.KV());this.Aa.lh(this.We());this.Aa.gL(this.mk());this.Aa.K7(this.nM);this.Aa.to(this.Gm());this.Aa.zm(this.Ij());this.Aa.Yu(this.Mx());
this.Aa.rk(this.Fi());this.Aa.qk(this.Wh());this.Aa.Qn(this.Ol());this.hb().xPa()&&this.Aa.gu("*")};p.H_=function(a){this.HAa();p.j.H_.call(this,a)};p.dj=function(){this.HAa();p.j.dj.call(this)};p.hf=function(a){if(this.Aa){var c=this.Ve(),d,k,h;this.Md()?(k=this.Tg,h=this.Ug,d=c.aa()-(this.Tg+this.Zi),c=c.ba()-(this.Ug+this.Yi)):(k=this.Re(),h=this.Ie(),d=c.aa()-(this.Re()+this.Sf()),c=c.ba()-(this.Ie()+this.$f()));this.Aa.kb(b.Ch(k,h,d,c))}p.j.hf.call(this,a)};p.Nla=function(){var a;this.Aa&&(a=
this.Aa.Kk());return a};p.pG=function(a,b){a&&a.Ba(this,this.io);b&&b.Fa(this,this.io);this.Aa.Qg(b)};p.mr=function(){this.Aa.ef()};p.bg=function(a){null!=this.Aa&&this.Aa.gL(this.mk());p.j.bg.call(this,a);this.Aa&&(this.Aa.os(null),this.Aa.ey(!0),this.Aa.Wv(!0),this.Xz&&this.Aa.os(this.Xz))};p.svb=function(){this.Aa&&this.Aa.rhc()};p.Q0=function(a,b){this.Aa&&this.Aa.Q0(a,b)};p.lZ=function(){this.Aa&&this.Aa.lZ()};p.FM=function(a){this.Aa&&this.Aa.FM(a)};p.qO=function(a){this.Aa&&this.Aa.qO(a)};
p.yB=function(){this.sc()};p.io=function(){};p.sLa=p[a.Z.tda]=function(){this.Aa&&this.U7(this.r_())};p.WM=p[a.Z.Sw]=function(){this.Aa.ef()};p.XM=p[a.Z.yK]=function(){this.Aa.ef()};d.xd(c.UYb,"PRIM_EVEF",{sO:a.Fw.H4,Pa:{ComponentVersion:{a:p.QJ,f:function(a){this.wO(d.v(a))}},AutoTab:{a:p.KV,f:function(a){this.u7(d.wa(a))}},AutoSelect:{a:p.Gm,f:function(a){this.to(d.wa(a))}},WordWrap:{a:p.Td,f:function(a){this.Te(d.wa(a))}},ShowSelection:{a:p.Ij,f:function(a){this.zm(d.wa(a))}},ShowSelectionHilight:{a:p.Mx,
f:function(a){this.Yu(d.wa(a))}},ShowPrompter:{a:p.P5,f:function(a){this.Wqa(d.wa(a))}},PrompterImage:{a:p.TNa,f:p.R7},PrompterTabStop:{a:p.wza,f:function(a){this.Vpb(d.wa(a))}},UsePicklist:{a:p.COa,f:function(a){this.n1(d.wa(a))}},EditAlignment:{a:function(){return d.sa(this.Fi(),a.hm.u)},f:function(b){this.rk(d.qa(b,a.hm.u))}},DisplayAlignment:{a:function(){return d.sa(this.Wh(),a.pi.u)},f:function(b){this.qk(d.qa(b,a.pi.u))}},Text:{a:p.Mla},SelectionEnd:{a:p.Jn,f:function(a){this.tr(d.v(a))}},
SelectionStart:{a:p.iq,f:function(a){this.ur(d.v(a))}},VisualStyleEdit:{a:p.Zbb,f:p.QEa},NumericEditStyle:{a:function(){return d.sa(this.Ol(),a.On.u)},f:function(b){this.Qn(d.qa(b,a.On.u))}},HasSelection:{a:p.Mw},EditStyle:{a:p.m5,f:p.jfa},EditStyles:{a:p.Vla},EditMouseOverStyle:{a:p.eNa,f:p.sUa},EditMouseOverStyles:{a:p.fNa},EditFocusedStyle:{a:p.cNa,f:p.rUa},EditFocusedStyles:{a:p.dNa},LabelStyle:{a:p.v5,f:p.ofa},LabelStyles:{a:p.tNa},LabelMouseOverStyle:{a:p.rNa,f:p.JUa},LabelMouseOverStyles:{a:p.sNa},
InputType:{a:function(){return d.sa(this.lo(),a.Se.u)},f:function(b){this.Sq(d.qa(b,a.Se.u))}},InputTypePattern:{a:p.Ur,f:function(a){this.Vu(d.ja(a))}},SpellCheck:{a:p.Ow,f:function(a){this.hC(d.wa(a))}},Value:{a:function(){return this.Da()},f:function(a){this.Wa(a)}}},qc:{SelectText:function(a,b){this.Q0(d.v(a)-1,d.v(b))}},Bg:{wg:"Value"}});c.TYb=function(a){u.H.call(this);this.Zjc=a};var u=c.q(c.TYb,c.fO);u.nW=function(){return this.Zjc.Qs()||this.Zjc.oM?!1:u.j.nW.call(this)}},{rp:["PRIM_EVP",
"PRIM_EDIT"]});