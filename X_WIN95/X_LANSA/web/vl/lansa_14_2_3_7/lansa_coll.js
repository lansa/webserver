window.LANSA.addSrc("coll",function(d,c,a,b,p){a.qPa={Bqc:0,e9a:1};var u=0;c.loa=function(){t.H.call(this)};var t=c.q(c.loa,c.Gd);t.ICb=function(){return!1};t.iUb=function(){return!1};t.yc=function(){return 0};t.qg=function(){return 0==this.yc()};t.fZ=function(a){a&&(a.Ha(),a.qmc(this))};t.uZ=function(a){a&&(a.Cb(),a.KYc(this))};t.x0=function(a,b){this.wSa(b);null!=this.oU&&this.oU.x0(a,b)};t.Q6=function(a,b){this.xSa(b);null!=this.oU&&this.oU.Q6(a,b)};d.wd(c.loa,"PRIM_COLL",{Pa:{AllowsDuplicates:{a:function(){return this.ICb()}},
IsEmpty:{a:function(){return this.qg()}},IsOrdered:{a:function(){return this.iUb()}},ItemCount:{a:function(){return this.yc()}}}});c.qQa=function(){r.H.call(this);this.cb=[];this.oU=null};var r=c.q(c.qQa,c.loa);r.R=function(){this.Ok();r.j.R.call(this)};r.ICb=function(){return!0};r.iUb=function(){return!0};r.yc=function(){return this.cb.length};r.ae=function(a){if(0>a||a>=this.cb.length)throw d.SF(a,this.cb.length);return this.cb[a]};r.hl=function(a,b){if(0>a||a>this.cb.length)throw d.SF(a,this.cb.length);
a==this.cb.length?this.Ts(b):this.enb(b,a)};r.cab=function(a,b){return b===p?this.cb.indexOf(a):this.cb.indexOf(a,b)};r.QOb=function(a){return this.cb.lastIndexOf(a)+1};r.V$a=function(){return 0<this.cb.length?this.cb[0]:null};r.oab=function(){return 0<this.cb.length?this.cb[this.cb.length-1]:null};r.bud=function(){return this.nha};r.O0=function(a){this.nha=a};r.yJa=function(a){this.O0(a.U8b())};r.xe=function(a){return-1!=this.cb.indexOf(a)};r.Ts=r.eTb=function(a){this.fZ(a);this.cb.push(a);this.x0(a,
this.yc()-1)};r.dTb=function(a){this.fZ(a);this.cb.unshift(a);this.x0(a,0)};r.cTb=function(a,b){if(0>b||b>=this.cb.length)throw d.SF(b,this.cb.length);this.fZ(a);this.cb.splice(b+1,0,a);this.x0(a,b+1)};r.Kdb=function(a,b){if(0>b||b>=this.cb.length)throw d.SF(b,this.cb.length);this.fZ(a);this.cb.splice(b,0,a);this.x0(a,b)};r.Yt=function(a){a=this.cb.indexOf(a);if(-1==a)throw d.jZc();return this.es(a)};r.es=function(a){if(0>a||a>=this.cb.length)throw d.SF(a,this.cb.length);var b=this.cb[a];this.cb.splice(a,
1);d.hka(b);this.uZ(b);this.Q6(b,a);return b};r.Zmb=function(){return this.es(0)};r.anb=function(){return this.es(this.cb.length-1)};r.Ok=function(){for(var a=0;a<this.cb.length;a++)this.uZ(this.cb[a]);this.cb=[];this.vea()};r.olb=function(a){for(var b=0,c=0;c<this.cb.length;c++)this.cb[c]===a&&b++;return b};r.enb=function(a,b){if(0>b||b>=this.cb.length)throw d.SF(b,this.cb.length);var c=this.cb[b];d.hka(c);this.uZ(c);this.cb[b]=a;this.fZ(a);return c};r.Wg=function(){var a=d.B6a(this.nha);if(a=d.pd(a.bSa,
a.Eub))this.apa(a),this.Ts(a)};r.Bk=function(){this.Ok()};r.Ph=function(a){if(0<=a&&a<this.yc()){var b=this.ae(a);b&&this.Qda(b);this.Xl=a;return"OK"}this.Xl=-1;return"NR"};r.jp=function(){return this.yc()};r.Cn=function(a){a===p&&(a=this.Xl);0<=a&&a<this.yc()&&this.es(a)};r.Vl=function(){var a=this.Xl;0<=a&&a<this.yc()&&(a=this.ae(a))&&this.apa(a)};r.po=function(a,b,c){for(var d=0;d<this.yc();d++){var e=this.ae(d);if(e&&(e=e.u_())){var g={},f;for(f in e)g[f]=e[f].get();if(a(g))return null!=b&&b.set(d+
1),c&&this.Ph(d),this.Xl=d,"OK"}}return"NR"};r.hr=function(a){this.Ok();for(var b=0;b<a;b++)this.Wg()};r.Xs=function(){return new c.jib(this)};r.BDa=function(){null==this.oU&&(this.oU=new c.$_b);return this.oU};c.$_b=function(){m.H.call(this)};var m=c.q(c.$_b,c.kib);c.V_b=function(){k.H.call(this);this.Xl=-1};var k=c.q(c.V_b,c.qQa);k.MV=function(){return"PRIM_LCOL<"+this.nha+">"};k.Xmc=function(a){for(var b=0;b<a.yc();b++)this.Ts(a.ae(b))};k.Pqc=function(a){for(var b=d.pd("PRIM_LCOL"),c=0;c<this.yc();c++)b.Ts(this.ae(c));
for(c=0;c<a.yc();c++)b.Ts(a.ae(c));d.hka(b);return b};d.wd(c.V_b,"PRIM_LCOL",{nO:a.ux.P4a,Pa:{First:{a:function(){return this.V$a()}},Last:{a:function(){return this.oab()}},Item:{a:function(a){return this.ae(d.v(a)-1)},f:function(a,b){this.hl(d.v(a)-1,b)}},IndexOf:{a:function(a,b){return this.cab(a,b===p?p:d.v(b)-1)+1}},LastIndexOf:{a:k.QOb},Collects:{f:k.O0}},pc:{Append:k.Xmc,Concatenate:k.Pqc,Contains:k.xe,Insert:k.Ts,InsertFirst:k.dTb,InsertLast:k.eTb,InsertAfter:function(a,b){return this.cTb(a,
d.v(b)-1)},InsertBefore:function(a,b){return this.Kdb(a,d.v(b)-1)},Remove:k.Yt,RemoveAt:function(a){return this.es(d.v(a)-1)},RemoveFirst:k.Zmb,RemoveLast:k.anb,RemoveAll:k.Ok,OccurrencesOf:k.olb,ReplaceAt:function(a,b){return this.enb(a,d.v(b)-1)}},Bg:{wg:"Item"},Nq:{mda:function(a){var b=d.pd("PRIM_NMBR");b.set(a);return b},jq:function(a){return this.ae(d.v(a)-1)},Ow:function(){return this.yc()}},cz:{Wg:k.Wg,Ph:function(a){return this.Ph(d.v(a)-1)},hr:k.hr,Bk:k.Bk,jp:k.jp,Cn:function(a){return this.Cn(a?
d.v(a)-1:p)},Vl:k.Vl,po:k.po,Xs:k.Xs}});c.lXb=function(){h.H.call(this)};var h=c.q(c.lXb,c.qQa);h.MV=function(){return"PRIM_ACOL<"+this.nha+">"};d.wd(c.lXb,"PRIM_ACOL",{nO:a.ux.P4a,Pa:{First:{a:function(){return this.V$a()}},Last:{a:function(){return this.oab()}},Item:{a:function(a){return this.ae(d.v(a)-1)},f:function(a,b){this.hl(d.v(a)-1,b)}},IndexOf:{a:function(a,b){return this.cab(a,b===p?p:d.v(b)-1)+1}},LastIndexOf:{a:h.QOb},Collects:{f:h.O0}},pc:{Contains:h.xe,Insert:h.Ts,InsertFirst:h.dTb,
InsertLast:h.eTb,InsertAfter:function(a,b){return this.cTb(a,d.v(b)-1)},InsertBefore:function(a,b){return this.Kdb(a,d.v(b)-1)},Remove:h.Yt,RemoveAt:function(a){return this.es(d.v(a)-1)},RemoveFirst:h.Zmb,RemoveLast:h.anb,RemoveAll:h.Ok,OccurrencesOf:h.olb,ReplaceAt:function(a,b){return this.enb(a,d.v(b)-1)}},Bg:{wg:"Item"},Nq:{mda:function(a){var b=d.pd("PRIM_NMBR");b.set(a);return b},jq:function(a){return this.ae(d.v(a)-1)},Ow:function(){return this.yc()}},cz:{Wg:h.Wg,Ph:function(a){return this.Ph(d.v(a)-
1)},hr:h.hr,Bk:h.Bk,jp:h.jp,Cn:function(a){return this.Cn(a?d.v(a)-1:p)},Vl:h.Vl,po:h.po,Xs:h.Xs}});c.f0b=function(){f.H.call(this)};var f=c.q(c.f0b,c.qQa);f.Ts=function(b){this.fZ(b);for(var c=0,d=this.cb.length-1;c<=d;){var e=Math.floor((c+d)/2);this.Vzc(b,this.cb[e])==a.Sc.Hl?d=e-1:c=e+1}this.cb.splice(c,0,b)};f.Vzc=function(b,c){var e=a.Sc.bl,g=d.Yb();g.bc("SUBJECT",b);g.bc("OBJECT",c);g.HQ("RESULT",e,a.Sc.u);this.Ca(a.w.$Ja,g);e=g.R$a("RESULT",a.Sc.u);g.Ac();return e};d.wd(c.f0b,"PRIM_SACO",
{Pa:{First:{a:function(){return this.V$a()}},Last:{a:function(){return this.oab()}},Item:{a:function(a){return this.ae(d.v(a)-1)},f:function(a,b){this.hl(d.v(a)-1,b)}},IndexOf:{a:function(a,b){return this.cab(a,b===p?p:d.v(b)-1)+1}},Collects:{f:f.O0}},pc:{Remove:f.Yt,RemoveAt:function(a){return this.es(d.v(a)-1)},RemoveAll:f.Ok,RemoveLast:f.anb,RemoveFirst:f.Zmb,Contains:f.xe,OccurrencesOf:f.olb,Insert:f.Ts},Bg:{wg:"Item"},Nq:{mda:function(a){var b=d.pd("PRIM_NMBR");b.set(a);return b},jq:function(a){return this.ae(d.v(a)-
1)},Ow:function(){return this.yc()}}});c.b0=function(a){e.H.call(this);this.skc=a};var e=c.q(c.b0,c.loa);e.ae=function(a){if(0>a||a>=this.yc())throw d.SF(a,this.yc());return this.Ex(a)};e.yc=function(){return this.skc.yc()};e.Ex=function(a){return this.skc.Ex(a)};d.wd(c.b0,"PRIM_PCOL",{Pa:{Item:{a:function(a){return this.ae(d.v(a)-1)},f:function(a,b){this.hl(d.v(a)-1,b)}}},Bg:{wg:"Item"},Nq:{jq:function(a){return this.Ex(d.v(a)-1)},Ow:function(){return this.yc()}}});c.U_b=function(){q.H.call(this);
this.cb={};this.hU=null;this.nf=a.qPa.e9a};var q=c.q(c.U_b,c.loa);q.R=function(){this.Ok();q.j.R.call(this)};q.MV=function(){return"PRIM_KCOL<"+this.jZa+" "+this.bFc()+">"};q.Gg=function(){return this.nf};q.vb=function(a){this.nf=a};q.yc=function(){return this.bea().length};q.ae=function(b){b=this.g5a(b);if(this.cb[b]===p&&this.nf==a.qPa.e9a){var c=null;this.rxb?c=new this.rxb:this.jZa&&(c=d.B6a(this.jZa),c=d.pd(c.bSa,c.Eub));c&&(this.cb[b]=c,this.fZ(c),this.pI())}return this.cb[b]};q.hl=function(a,
b){a=this.g5a(a);var c=a.toString();this.cb[c]===p?this.pI():this.uZ(this.cb[c]);this.fZ(b);this.cb[c]=b};q.Ex=function(a){a=this.bea()[a];return this.cb[a]};q.kab=function(a){a=this.bea()[a];this.hU.set(a);return this.hU};q.lab=function(a){for(var b in this.cb)if(this.cb[b]===a)return this.j5a(b);return this.hU.GGc()};q.O0=function(a,b){"string"!==typeof a?this.rxb=a:(this.jZa=a,this.rxb=b)};q.tUa=function(a){this.hU=new a;this.hU.Ha()};q.cud=function(){return this.jZa};q.bFc=function(){var a="";
this.hU&&(a=this.hU.xya());return a};q.yJa=function(a){this.O0(a.U8b(),a.sEb(0));this.tUa(a.sEb(1))};q.g5a=function(a){this.hU.set(a);a=this.hU.get();return a.toString()};q.j5a=function(a){this.hU.set(a);return this.hU.get()};q.Yt=function(a){a=this.g5a(a);var b=null;this.cb[a]!==p&&(b=this.cb[a],d.hka(b),this.uZ(b),delete this.cb[a],this.pI(),this.Q6(b,0));return b};q.Ok=function(){for(var a in this.cb)this.uZ(this.cb[a]);this.cb={};this.pI();this.vea()};q.pI=function(){delete this.JG};q.bea=function(){var a=
this;if(this.JG===p){this.JG=[];for(var b in this.cb)this.JG.push(b);this.JG.sort(function(b,c){b=a.j5a(b);c=a.j5a(c);return d.cmp(b,c)})}return this.JG};var g={COLLECTION:a.qPa.Bqc,FACTORY:a.qPa.e9a};d.wd(c.U_b,"PRIM_KCOL",{Pa:{Style:{a:function(){return d.sa(this.Gg(),g)},f:function(a){this.vb(d.qa(a,g))}},Item:{a:function(a){return this.ae(a)},f:function(a,b){this.hl(a,b)},wx:"na"},Collects:{f:q.O0},KeyedBy:{f:q.tUa},KeyOf:{a:function(a){return this.lab(a)},wx:"na"}},pc:{Remove:q.Yt,RemoveAll:q.Ok},
Bg:{wg:"Item"},Nq:{mda:function(a){return this.kab(d.v(a)-1)},jq:function(a){return this.Ex(d.v(a)-1)},Ow:function(){return this.yc()}}});c.l_b=function(){B.H.call(this);this.YT=(u++).toString();this.fJ=[];this.nha=this.$jc=""};var B=c.q(c.l_b,c.loa);B.MV=function(){return"PRIM_DCOL<"+this.nha+" "+this.$jc+">"};B.yc=function(){return this.fJ.length};B.Ex=function(a){return this.fJ[a].SI[this.YT]};B.ae=function(a){return a.SI===p||a.SI[this.YT]===p?null:a.SI[this.YT]};B.hl=function(a,b){a.SI===p&&
(a.SI={});var c=a.SI[this.YT];c===p?(this.fJ.push(a),a.Ha()):this.uZ(c);a.SI[this.YT]=b;this.fZ(b)};B.kab=function(a){return this.fJ[a]};B.O0=function(a){this.nha=a};B.tUa=function(a){this.$jc=a};B.lab=function(a,b){for(var c=b;c<this.fJ.length;c++){var d=this.fJ[c];if(d.SI[this.YT]===a)return d}return null};B.Azc=function(a){return this.ae(a)};B.xe=function(a){return-1!=this.fJ.indexOf(a)};B.Uqc=function(a){for(var b=0;b<this.fJ.length;b++)if(this.fJ[b].SI[this.YT]===a)return!0;return!1};B.Ts=function(a,
b){var c=this.ae(b);this.hl(b,a);return c};B.Yt=function(a){if(a.SI!==p){var b=a.SI[this.YT];if(b!==p)return delete a.SI[this.YT],this.fJ.splice(this.fJ.indexOf(a),1),d.hka(b),this.uZ(b),a.Cb(),this.Q6(b,0),b}return null};B.Ok=function(){for(var a=0;a<this.fJ.length;a++){var b=this.fJ[a],c=b.SI[this.YT];c!==p&&(delete b.SI[this.YT],this.uZ(c))}this.fJ=[];this.vea()};d.wd(c.l_b,"PRIM_DCOL",{Pa:{Item:{a:function(a){return this.ae(a)},f:function(a,b){this.hl(a,b)},wx:"na"},Collects:{f:B.O0,wx:"na"},
KeyedBy:{f:B.tUa,wx:"na"},KeyOf:{a:function(a,b){return this.lab(a,b!==p?d.v(b)-1:0)},wx:"na"}},pc:{Contains:B.xe,ContainsItem:B.Uqc,Insert:B.Ts,Remove:B.Yt,RemoveAll:B.Ok,Find:B.Azc},Bg:{wg:"Item"},Nq:{mda:function(a){return this.kab(d.v(a)-1)},jq:function(a){return this.Ex(d.v(a)-1)},Ow:function(){return this.yc()}}})});