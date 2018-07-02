window.LANSA.addSrc("json",function(e,c,a,b,m){function p(a,b,d){var f=null;if(null===d)f=e.Rt(new c.bza(a,b));else switch(typeof d){case "object":f=Array.isArray(d)?e.Rt(new c.Bma(a,b)):e.Rt(new c.Cma(a,b));f.NAb(d);break;case "number":f=e.Rt(new c.cza(a,b,d));break;case "string":f=e.Rt(new c.dza(a,b,d));break;case "boolean":f=e.Rt(new c.aza(a,b,d))}return f}e.Gb("PRIM_PCOL");a.tE={Z4a:0,WHb:1,THb:2,XHb:3,VHb:4,UHb:5};a.tE.v={NULL:a.tE.Z4a,OBJECT:a.tE.WHb,ARRAY:a.tE.THb,STRING:a.tE.XHb,NUMBER:a.tE.VHb,
BOOLEAN:a.tE.UHb};c.P_b=function(){l.w.call(this);this.Mg="";this.IFa=null;this.hyb=!1};var l=c.u(c.P_b,c.wd);l.U=function(){this.URa(null);l.j.U.call(this)};l.TCc=function(){return this.IFa};l.URa=function(a){this.IFa=a};l.JEc=function(){return this.hyb};l.iSa=function(a){this.hyb=a};l.Cq=function(){return this.hyb?JSON.stringify(this.IFa.EL()):this.Mg};l.$M=function(a){this.Mg=a;var b=null,c=null;try{b=JSON.parse(a)}catch(d){}b?(c=p(this,null,b),this.iSa(!0)):this.iSa(!1);this.URa(c)};l.snc=function(){this.URa(e.Rt(new c.Bma(this,
null)));this.iSa(!0);return this.IFa};l.tnc=function(){this.URa(e.Rt(new c.Cma(this,null)));this.iSa(!0);return this.IFa};e.jb(c.P_b,"PRIM_WEB","Json",{Oa:{Text:{a:l.Cq,g:function(a){this.$M(e.ma(a))}},IsValid:{a:l.JEc},RootItem:{a:l.TCc}},jc:{CreateRootArray:l.snc,CreateRootObject:l.tnc},lg:{hg:"Text"}});c.W4=function(a,b){s.w.call(this);this.sF=a;this.jA=b};var s=c.u(c.W4,c.wd);s.yaa=function(){return a.tE.Z4a};s.EL=function(){return null};s.mc=function(){return 0};s.Td=function(){return null};
s.Kw=function(){return null};s.vrd=function(){return this.sF};s.G7a=function(){return this.jA};s.hka=function(){return this.jA?this.jA.JKb(this):""};s.JKb=function(){return""};s.fj=function(){return this.jA?this.jA.i7a(this):-1};s.i7a=function(){return-1};s.q9=function(){throw e.oUc(JSON.stringify(this.EL()));};s.W_a=function(){throw e.mAa(JSON.stringify(this.EL()));};s.M_a=function(){throw e.xjb(JSON.stringify(this.EL()));};s.Zs=function(){return null};s.bk=function(){};e.jb(c.W4,"PRIM_WEB","JsonElement",
{Oa:{Key:{a:s.hka},Index:{a:function(){return this.fj()+1}},Type:{a:function(){return e.ta(this.yaa(),a.tE.v)}},Item:{a:function(a){return this.Td(e.ma(a))}},ItemAt:{a:function(a){return this.Kw(e.K(a)-1)}},ItemCount:{a:function(){return this.mc()}},ParentItem:{a:s.G7a}},jc:{AsString:function(){return this.q9()},AsNumber:function(){return e.lq(this.W_a())},AsBoolean:function(){return this.M_a()},Remove:function(a){return this.Zs(e.ma(a))},RemoveAt:function(a){return this.zr(e.K(a)-1)},RemoveAll:function(){this.bk()}},
lg:{hg:"Item"},fq:{Bp:function(a){return this.Kw(e.K(a)-1)},Qv:function(){return this.mc()}}});c.Bma=function(a,b){g.w.call(this,a,b);this.ab=[]};var g=c.u(c.Bma,c.W4);g.yaa=function(){return a.tE.THb};g.EL=function(){for(var a=[],b=0;b<this.ab.length;b++)a.push(this.ab[b].EL());return a};g.Kw=function(a){return 0<=a&&a<this.ab.length?this.ab[a]:null};g.mc=function(){return this.ab.length};g.i7a=function(a){for(var b=0;b<this.ab.length;b++)if(this.ab[b]===a)return b;return-1};g.NAb=function(a){for(var b=
0;b<a.length;b++){var c=p(this.sF,this,a[b]);c&&this.ab.push(c)}};g.Z$a=function(){var a=e.Rt(new c.Bma(this.sF,this));this.ab.push(a);return a};g.gab=function(){var a=e.Rt(new c.Cma(this.sF,this));this.ab.push(a);return a};g.kab=function(a){a=e.Rt(new c.dza(this.sF,this,a));this.ab.push(a);return a};g.fab=function(a){a=e.Rt(new c.cza(this.sF,this,a));this.ab.push(a);return a};g.bab=function(a){a=e.Rt(new c.aza(this.sF,this,a));this.ab.push(a);return a};g.eab=function(){var a=e.Rt(new c.bza(this.sF,
this));this.ab.push(a);return a};g.zr=function(a){var b=null;0<=a&&a<this.ab.length&&(b=this.ab[a],this.ab.splice(a,1));return b};g.bk=function(){this.ab=[]};e.jb(c.Bma,"PRIM_WEB","JsonArray",{jc:{InsertArray:g.Z$a,InsertObject:g.gab,InsertNumber:function(a){return this.fab(e.hv(a))},InsertString:function(a){return this.kab(e.ma(a))},InsertBoolean:function(a){return this.bab(e.za(a))},InsertNull:g.eab}});c.Cma=function(a,b){q.w.call(this,a,b);this.ab={}};var q=c.u(c.Cma,c.W4);q.yaa=function(){return a.tE.WHb};
q.EL=function(){var a={},b;for(b in this.ab)a[b]=this.ab[b].EL();return a};q.Td=function(a){a=this.ab[a];return a===m?null:a};q.Kw=function(a){var b=this.sca();return 0<=a&&a<b.length?this.ab[b[a]]:null};q.mc=function(){return this.sca().length};q.JKb=function(a){for(var b in this.ab)if(this.ab[b]===a)return b};q.i7a=function(a){var b=-1,c;for(c in this.ab)if(b++,this.ab[c]===a)break;return b};q.NAb=function(a){for(var b in a){var c=p(this.sF,this,a[b]);c&&(this.ab[b]=c)}this.UG()};q.UG=function(){delete this.xF};
q.sca=function(){if(this.xF===m){this.xF=[];for(var a in this.ab)this.xF.push(a)}return this.xF};q.Z$a=function(a){var b=e.Rt(new c.Bma(this.sF,this));this.ab[a]=b;this.UG();return b};q.gab=function(a){var b=e.Rt(new c.Cma(this.sF,this));this.ab[a]=b;this.UG();return b};q.kab=function(a,b){var d=e.Rt(new c.dza(this.sF,this,b));this.ab[a]=d;this.UG();return d};q.bab=function(a,b){var d=e.Rt(new c.aza(this.sF,this,b));this.ab[a]=d;this.UG();return d};q.eab=function(a){var b=e.Rt(new c.bza(this.sF,this));
this.ab[a]=b;this.UG();return b};q.fab=function(a,b){var d=e.Rt(new c.cza(this.sF,this,b));this.ab[a]=d;this.UG();return d};q.Zs=function(a){var b=null;this.ab[a]!==m&&(b=this.ab[a],delete this.ab[a],this.UG());return b};q.zr=function(a){var b=this.sca();return 0<=a&&a<b.length?this.Zs(b[a]):null};q.bk=function(){this.ab={};this.UG()};e.jb(c.Cma,"PRIM_WEB","JsonObject",{jc:{InsertArray:function(a){return this.Z$a(e.ma(a))},InsertObject:function(a){return this.gab(e.ma(a))},InsertNumber:function(a,
b){return this.fab(e.ma(a),e.hv(b))},InsertString:function(a,b){return this.kab(e.ma(a),e.ma(b))},InsertBoolean:function(a,b){return this.bab(e.ma(a),e.za(b))},InsertNull:function(a){return this.eab(e.ma(a))}}});c.cza=function(a,b,c){f.w.call(this,a,b);this.bb=c};var f=c.u(c.cza,c.W4);f.yaa=function(){return a.tE.VHb};f.EL=function(){return this.bb};f.W_a=function(){return this.bb};f.q9=function(){return this.bb.toString()};e.jb(c.cza,"PRIM_WEB","JsonNumber",{});c.dza=function(a,b,c){k.w.call(this,
a,b);this.bb=c};var k=c.u(c.dza,c.W4);k.yaa=function(){return a.tE.XHb};k.EL=function(){return this.bb};k.q9=function(){return this.bb};k.W_a=function(){if(isNaN(Number(this.bb)))throw e.mAa(this.bb);return new c.uj(this.bb)};k.M_a=function(){if("TRUE"==this.bb.toUpperCase())return!0;if("FALSE"==this.bb.toUpperCase())return!1;throw e.xjb(this.bb);};e.jb(c.dza,"PRIM_WEB","JsonString",{});c.aza=function(a,b,c){d.w.call(this,a,b);this.bb=c};var d=c.u(c.aza,c.W4);d.yaa=function(){return a.tE.UHb};d.EL=
function(){return this.bb};d.M_a=function(){return this.bb};d.q9=function(){return this.bb?"true":"false"};e.jb(c.aza,"PRIM_WEB","JsonBoolean",{});c.bza=function(a,b){h.w.call(this,a,b)};var h=c.u(c.bza,c.W4);h.yaa=function(){return a.tE.Z4a};h.EL=function(){return null};e.jb(c.bza,"PRIM_WEB","JsonNull",{})},{rp:["PRIM_PCOL"]});
