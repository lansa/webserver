window.LANSA.addSrc("text",function(d,c,a,b){a.vX={mT:2,gub:1,Jga:2,kub:4};c.y3b=function(){p.H.call(this);this.fk=a.vX.mT;this.Lg="";this.Mb=b.Hg(10,10,120,50);this.Vc=this.Vc|a.cc.Q_|a.cc.Rfb|a.cc.oda|a.cc.CF};var p=c.q(c.y3b,c.Tt);p.R=function(){p.j.R.call(this)};p.hh=function(){return c.h5b};p.gr=function(){return this.Lg};p.IO=function(b){this.Lg!=b&&(this.Lg=b,this.ea(a.g.h))};p.lh=function(b){b=this.fk&~a.vX.gub|(b?a.vX.gub:0);this.fk!=b&&(this.fk=b,this.ea(a.g.h))};p.Ve=function(){return 0!=
(this.fk&a.vX.gub)?!0:!1};p.Se=function(b){b=this.fk&~a.vX.Jga|(b?a.vX.Jga:0);this.fk!=b&&(this.fk=b,this.ea(a.g.h))};p.Rd=function(){return 0!=(this.fk&a.vX.Jga)?!0:!1};p.gC=function(b){b=this.fk&~a.vX.kub|(b?a.vX.kub:0);this.fk!=b&&(this.fk=b,this.ea(a.g.h))};p.Lw=function(){return 0!=(this.fk&a.vX.kub)?!0:!1};p.ue=function(b){""==b[0]&&(b[0]=a.eoa);p.j.ue.call(this,b)};p.ag=function(){this.SK();this.rJ(a.cc.Q_,!this.kk());b.gb().YC(this)};p.lW=function(){return this.Ps()||this.nM?!1:!0};p.jr=function(c){var d=
!1;switch(b.bs(c)){case a.W.Mnb:case a.W.Nnb:case a.W.FTa:case a.W.E0:case a.W.kz:d=!0}this.XW(c,d);return c.oh?!0:d?!1:p.j.jr.call(this,c)};p.Yka=p[a.Z.e6]=function(a){a.ed[0]=this.kk()};p.qc=function(b){b&&(this.uj(!0),this.nd()||(this.Vq(),this.Ca(a.w.ph)))};p.L4=p[a.Ma.XO]=function(b){b.jf=a.Ma.Fka|a.Ma.xKa};d.wd(c.y3b,"PRIM_TEXT",{Pa:{Text:{a:p.gr,f:function(a){this.IO(d.ja(a))}},ReadOnly:{a:p.Ve,f:function(a){this.lh(d.wa(a))}},WordWrap:{a:p.Rd,f:function(a){this.Se(d.wa(a))}},SpellCheck:{a:p.Lw,
f:function(a){this.gC(d.wa(a))}}},Bg:{wg:"Text"}});c.h5b=function(a){u.H.call(this,a);this.Aa=null;this.$a="";this.g3=!1};var u=c.q(c.h5b,c.kn);u.l5=function(){return this.Aa};u.lN=function(){return this.Aa};u.Da=function(){return this.Aa.value};u.Wa=function(a){this.$a==a||this.g3||(this.$a=a,this.Aa.value=a)};u.DOa=function(){return!1};u.FOa=function(){return!this.pa.lW()||this.Aa.readOnly&&this.Aa.selectionStart==this.Aa.selectionEnd?!1:!0};u.Pd=function(){u.j.Pd.call(this);this.Aa.readOnly=this.pa.Ve();
this.Aa.style.whiteSpace=this.pa.Rd()?"pre-wrap":"pre";this.Aa.spellcheck=this.pa.Lw();this.g3||(this.Aa.value=this.pa.gr())};u.cf=function(a,b){this.G=document.createElement("div");this.G.setAttribute("LANSAHandle",this.jc);this.Aa=document.createElement("textarea");this.G.appendChild(this.Aa);var c=this.Aa.style;c.resize="none";c.whiteSpace="pre-wrap";c.background="rgba(0,0,0,0)";c.position="absolute";c.overflowX="hidden";c.overflowY="hidden";c.boxSizing="border-box";c.webkitBoxSizing="border-box";
c.MozBoxSizing="border-box";c.borderStyle="none";c.outline="none";c.borderLeftWidth="0px";c.borderTopWidth="0px";c.borderRightWidth="0px";c.borderBottomWidth="0px";c.left="0px";c.top="0px";c.width="100%";c.height="100%";return u.j.cf.call(this,a,b)};u.eka=function(){var a=this.Aa.style;this.dA();a.whiteSpace="pre";a.overflowX="auto";a.overflowY="auto";a.boxSizing="border-box";a.webkitBoxSizing="border-box";a.MozBoxSizing="border-box";a.borderColor=this.lm();a.borderTopWidth="1px";a.borderBottomWidth=
"1px";a.borderLeftWidth="1px";a.borderRightWidth="1px";a.fontSize="inherit";a.fontFamily="inherit"};u.gZ=function(){var a=this;this.e4();a.Aa.addEventListener("input",function(b){a.yvb(b)},!1);a.Aa.addEventListener("compositionstart",function(b){a.raa(b)},!1);a.Aa.addEventListener("compositionend",function(b){a.qaa(b)},!1)};u.gO=function(a){u.j.gO.call(this,a);return this.pa.kk()};u.Esa=function(){u.j.Esa.call(this);var a=this.G.style,b=this.Aa.style;b.fontFamily=a.fontFamily;b.fontSize=a.fontSize;
b.fontWeight=a.fontWeight;b.fontStyle=a.fontStyle;b.textDecoration=a.textDecoration};u.iGa=function(a){if(null==this.iia||this.iia!=a)u.j.iGa.call(this,a),this.Aa.style.color=a};u.Jgc=function(){this.Zic||(this.pa.Lg=this.Aa.value,this.pa.qc(!0))};u.yvb=function(){this.Jgc()};u.raa=function(){this.Zic=!0};u.qaa=function(){this.Zic=!1;this.Jgc()}});