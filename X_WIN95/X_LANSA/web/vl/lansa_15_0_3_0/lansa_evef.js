window.LANSA.addSrc("evef",function(d,c,a,b){d.Ob("PRIM_EVP");d.Ob("PRIM_EDIT");c.ydc=function(b){p.K.call(this,b);this.uo|=a.Hlb.KKb;this.gg|=268435456;this.Qa=new c.xdc(this);this.Qa.Oa(this);this.Qa.za(this,a.Q.Dh,this.oE)};var p=c.u(c.ydc,c.Nca);p.nb=function(){b.ga(this.Qa);this.Qa=null;p.k.nb.call(this)};p.oka=function(){return this.Qa};p.YE=function(b){this.Qa.Wy()!=b&&(this.Qa.YE(b),this.pa(a.g.j))};p.Wy=function(){return this.Qa.Wy()};p.Hx=function(){return this.qp()!=this.Tr()};p.Tr=function(){return this.Qa.Tr()};
p.jt=function(a){this.Qa.jt(a)};p.qp=function(){return this.Qa.qp()};p.it=function(a){this.Qa.it(a)};p.nc=function(){return this.Qa.nc()};p.Gx=function(){return this.Qa.ha};p.eT=function(a){1==a?this.jr(268435456):this.jr(0)};p.BN=function(){var a=0;268435456==this.ml()&&(a=1);return a};p.jr=function(b){this.ml()!=b&&(this.gg=this.gg&~a.tj.Xta|b,this.ci(),this.m(a.g.j))};p.ml=function(){return this.gg&a.tj.Xta};p.p0a=function(){return this.dO()?!0:!1};p.dO=function(){return 0<this.ml()};p.yQa=function(){this.jf()&&
this.jf().Qb(this.mEa);this.Qa&&this.Qa.Qb(this.VDa)};p.wKa=function(){this.Qa.Jh(this.rb());this.Qa.qA(!0);this.Qa.cy(!0);this.Qa.aea(this.d0());this.Qa.di(this.Af());this.Qa.mP(this.Ek());this.Qa.nea(this.AQ);this.Qa.po(this.qm());this.Qa.Ym(this.Xj());this.Qa.Yu(this.Mx());this.Qa.bl(this.ej());this.Qa.Pj(this.Vg());this.Qa.qo(this.um());this.rb().IKa()&&this.Qa.Wu("*")};p.s6=function(a){this.wKa();p.k.s6.call(this,a)};p.Vk=function(){this.wKa();p.k.Vk.call(this)};p.lf=function(a){if(this.Qa){var c=
this.xf(),d,k,e;this.Zd()?(k=this.nh,e=this.oh,d=c.ja()-(this.nh+this.oj),c=c.la()-(this.oh+this.nj)):(k=this.Sf(),e=this.Jf(),d=c.ja()-(this.Sf()+this.Wg()),c=c.la()-(this.Jf()+this.$g()));this.Qa.sb(b.Vi(k,e,d,c))}p.k.lf.call(this,a)};p.Bua=function(){var a;this.Qa&&(a=this.Qa.Xl());return a};p.BJ=function(a,b){a&&a.Ha(this,this.Qp);b&&b.Ia(this,this.Qp);this.Qa.Jh(b)};p.$s=function(){this.Qa.Tf()};p.hg=function(a){null!=this.Qa&&this.Qa.mP(this.Ek());p.k.hg.call(this,a);this.Qa&&(this.Qa.ku(null),
this.Qa.qA(!0),this.Qa.cy(!0),this.xC&&this.Qa.ku(this.xC))};p.uKb=function(){this.Qa&&this.Qa.Qzc()};p.M7=function(a,b){this.Qa&&this.Qa.M7(a,b)};p.D4=function(){this.Qa&&this.Qa.D4()};p.ZQ=function(a){this.Qa&&this.Qa.ZQ(a)};p.WS=function(a){this.Qa&&this.Qa.WS(a)};p.oE=function(){this.Ee()};p.Qp=function(){};p.eXa=p[a.ea.jla]=function(){this.Qa&&this.wea(this.X5())};p.yR=p[a.ea.az]=function(){this.Qa.Tf()};p.zR=p[a.ea.vO]=function(){this.Qa.Tf()};d.Md(c.ydc,"PRIM_EVEF",{$S:a.Ny.Xaa,Aa:{ComponentVersion:{a:p.BN,
f:function(a){this.eT(d.O(a))}},AutoTab:{a:p.d0,f:function(a){this.aea(d.Ca(a))}},AutoSelect:{a:p.qm,f:function(a){this.po(d.Ca(a))}},WordWrap:{a:p.ud,f:function(a){this.Ff(d.Ca(a))}},ShowSelection:{a:p.Xj,f:function(a){this.Ym(d.Ca(a))}},ShowSelectionHilight:{a:p.Mx,f:function(a){this.Yu(d.Ca(a))}},ShowPrompter:{a:p.eca,f:function(a){this.uAa(d.Ca(a))}},PrompterImage:{a:p.IZa,f:p.sea},PrompterTabStop:{a:p.mJa,f:function(a){this.REb(d.Ca(a))}},UsePicklist:{a:p.q_a,f:function(a){this.l8(d.Ca(a))}},
EditAlignment:{a:function(){return d.va(this.ej(),a.Qn.v)},f:function(b){this.bl(d.wa(b,a.Qn.v))}},DisplayAlignment:{a:function(){return d.va(this.Vg(),a.cg.v)},f:function(b){this.Pj(d.wa(b,a.cg.v))}},Text:{a:p.Aua},SelectionEnd:{a:p.qp,f:function(a){this.it(d.O(a))}},SelectionStart:{a:p.Tr,f:function(a){this.jt(d.O(a))}},VisualStyleEdit:{a:p.Npb,f:p.SOa},NumericEditStyle:{a:function(){return d.va(this.um(),a.yp.v)},f:function(b){this.qo(d.wa(b,a.yp.v))}},HasSelection:{a:p.Hx},EditStyle:{a:p.Aba,
f:p.sna},EditStyles:{a:p.Iua},EditMouseOverStyle:{a:p.SYa,f:p.J5a},EditMouseOverStyles:{a:p.TYa},EditFocusedStyle:{a:p.QYa,f:p.I5a},EditFocusedStyles:{a:p.RYa},LabelStyle:{a:p.Mba,f:p.wna},LabelStyles:{a:p.gZa},LabelMouseOverStyle:{a:p.eZa,f:p.a6a},LabelMouseOverStyles:{a:p.fZa},SpellCheck:{a:p.Wy,f:function(a){this.YE(d.Ca(a))}},Value:{a:function(){return this.kb()},f:function(a){this.ob(a)}}},jc:{SelectText:function(a,b){this.M7(d.O(a)-1,d.O(b))}},Ue:{Re:"Value"}});c.xdc=function(a){u.K.call(this);
this.ACc=a};var u=c.u(c.xdc,c.$I);u.XN=function(){return this.ACc.Bw()||this.ACc.MZ?!1:u.k.XN.call(this)}},{rp:["PRIM_EVP","PRIM_EDIT"]});
