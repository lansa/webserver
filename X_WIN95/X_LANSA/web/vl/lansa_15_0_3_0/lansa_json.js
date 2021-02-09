window.LANSA.addSrc("json",function(d,c,a,b,p){function u(a,b,e){var f=null;if(null===e)f=d.Hw(new c.jMa(a,b));else switch(typeof e){case "object":f=Array.isArray(e)?d.Hw(new c.gya(a,b)):d.Hw(new c.hya(a,b));f.eVb(e);break;case "number":f=d.Hw(new c.kMa(a,b,e));break;case "string":f=d.Hw(new c.lMa(a,b,e));break;case "boolean":f=d.Hw(new c.iMa(a,b,e))}return f}d.Ob("PRIM_PCOL");a.QI={Glb:0,d1b:1,a1b:2,f1b:3,c1b:4,b1b:5};a.QI.v={NULL:a.QI.Glb,OBJECT:a.QI.d1b,ARRAY:a.QI.a1b,STRING:a.QI.f1b,NUMBER:a.QI.c1b,
BOOLEAN:a.QI.b1b};c.skc=function(){m.K.call(this);this.Ah="";this.STa=null;this.iSb=!1};var m=c.u(c.skc,c.qd);m.R=function(){this.A6a(null);m.k.R.call(this)};m.I2c=function(){return this.STa};m.A6a=function(a){this.STa=a};m.B4c=function(){return this.iSb};m.S6a=function(a){this.iSb=a};m.Ae=function(){return this.iSb?JSON.stringify(this.STa.SR()):this.Ah};m.re=function(a){this.Ah=a;var b=null,c=null;try{b=JSON.parse(a)}catch(d){}b?(c=u(this,null,b),this.S6a(!0)):this.S6a(!1);this.A6a(c)};m.LMc=function(){this.A6a(d.Hw(new c.gya(this,
null)));this.S6a(!0);return this.STa};m.MMc=function(){this.A6a(d.Hw(new c.hya(this,null)));this.S6a(!0);return this.STa};d.Sa(c.skc,"PRIM_WEB","Json",{Aa:{Text:{a:m.Ae,f:function(a){this.re(d.ka(a))}},IsValid:{a:m.B4c},RootItem:{a:m.I2c}},jc:{CreateRootArray:m.LMc,CreateRootObject:m.MMc},Ue:{Re:"Text"}});c.jda=function(a,b){q.K.call(this);this.UJ=a;this.wu=b};var q=c.u(c.jda,c.qd);q.Uja=function(){return a.QI.Glb};q.SR=function(){return null};q.Cc=function(){return 0};q.he=function(){return null};
q.Uz=function(){return null};q.KXd=function(){return this.UJ};q.Dob=function(){return this.wu};q.K5=function(){return this.wu?this.wu.l4b(this):""};q.l4b=function(){return""};q.Fk=function(){return this.wu?this.wu.eob(this):-1};q.eob=function(){return-1};q.Qha=function(){throw d.rld(JSON.stringify(this.SR()));};q.tgb=function(){throw d.DNa(JSON.stringify(this.SR()));};q.igb=function(){throw d.eCb(JSON.stringify(this.SR()));};q.bt=function(){return null};q.Ml=function(){};d.Sa(c.jda,"PRIM_WEB","JsonElement",
{Aa:{Key:{a:q.K5},Index:{a:function(){return this.Fk()+1}},Type:{a:function(){return d.va(this.Uja(),a.QI.v)}},Item:{a:function(a){return this.he(d.ka(a))}},ItemAt:{a:function(a){return this.Uz(d.O(a)-1)}},ItemCount:{a:function(){return this.Cc()}},ParentItem:{a:q.Dob}},jc:{AsString:function(){return this.Qha()},AsNumber:function(){return d.zi(this.tgb())},AsBoolean:function(){return this.igb()},Remove:function(a){return this.bt(d.ka(a))},RemoveAt:function(a){return this.ys(d.O(a)-1)},RemoveAll:function(){this.Ml()}},
Ue:{Re:"Item"},Yq:{rq:function(a){return this.Uz(d.O(a)-1)},Lw:function(){return this.Cc()}}});c.gya=function(a,b){s.K.call(this,a,b);this.jb=[]};var s=c.u(c.gya,c.jda);s.Uja=function(){return a.QI.a1b};s.SR=function(){for(var a=[],b=0;b<this.jb.length;b++)a.push(this.jb[b].SR());return a};s.Uz=function(a){return 0<=a&&a<this.jb.length?this.jb[a]:null};s.Cc=function(){return this.jb.length};s.eob=function(a){for(var b=0;b<this.jb.length;b++)if(this.jb[b]===a)return b;return-1};s.eVb=function(a){for(var b=
0;b<a.length;b++){var c=u(this.UJ,this,a[b]);c&&this.jb.push(c)}};s.Orb=function(){var a=d.Hw(new c.gya(this.UJ,this));this.jb.push(a);return a};s.Urb=function(){var a=d.Hw(new c.hya(this.UJ,this));this.jb.push(a);return a};s.Xrb=function(a){a=d.Hw(new c.lMa(this.UJ,this,a));this.jb.push(a);return a};s.Trb=function(a){a=d.Hw(new c.kMa(this.UJ,this,a));this.jb.push(a);return a};s.Qrb=function(a){a=d.Hw(new c.iMa(this.UJ,this,a));this.jb.push(a);return a};s.Srb=function(){var a=d.Hw(new c.jMa(this.UJ,
this));this.jb.push(a);return a};s.ys=function(a){var b=null;0<=a&&a<this.jb.length&&(b=this.jb[a],this.jb.splice(a,1));return b};s.Ml=function(){this.jb=[]};d.Sa(c.gya,"PRIM_WEB","JsonArray",{jc:{InsertArray:s.Orb,InsertObject:s.Urb,InsertNumber:function(a){return this.Trb(d.lg(a))},InsertString:function(a){return this.Xrb(d.ka(a))},InsertBoolean:function(a){return this.Qrb(d.Ca(a))},InsertNull:s.Srb}});c.hya=function(a,b){k.K.call(this,a,b);this.jb={}};var k=c.u(c.hya,c.jda);k.Uja=function(){return a.QI.d1b};
k.SR=function(){var a={},b;for(b in this.jb)a[b]=this.jb[b].SR();return a};k.he=function(a){a=this.jb[a];return a===p?null:a};k.Uz=function(a){var b=this.cma();return 0<=a&&a<b.length?this.jb[b[a]]:null};k.Cc=function(){return this.cma().length};k.l4b=function(a){for(var b in this.jb)if(this.jb[b]===a)return b};k.eob=function(a){var b=-1,c;for(c in this.jb)if(b++,this.jb[c]===a)break;return b};k.eVb=function(a){for(var b in a){var c=u(this.UJ,this,a[b]);c&&(this.jb[b]=c)}this.OL()};k.OL=function(){delete this.ZJ};
k.cma=function(){if(this.ZJ===p){this.ZJ=[];for(var a in this.jb)this.ZJ.push(a)}return this.ZJ};k.Orb=function(a){var b=d.Hw(new c.gya(this.UJ,this));this.jb[a]=b;this.OL();return b};k.Urb=function(a){var b=d.Hw(new c.hya(this.UJ,this));this.jb[a]=b;this.OL();return b};k.Xrb=function(a,b){var e=d.Hw(new c.lMa(this.UJ,this,b));this.jb[a]=e;this.OL();return e};k.Qrb=function(a,b){var e=d.Hw(new c.iMa(this.UJ,this,b));this.jb[a]=e;this.OL();return e};k.Srb=function(a){var b=d.Hw(new c.jMa(this.UJ,this));
this.jb[a]=b;this.OL();return b};k.Trb=function(a,b){var e=d.Hw(new c.kMa(this.UJ,this,b));this.jb[a]=e;this.OL();return e};k.bt=function(a){var b=null;this.jb[a]!==p&&(b=this.jb[a],delete this.jb[a],this.OL());return b};k.ys=function(a){var b=this.cma();return 0<=a&&a<b.length?this.bt(b[a]):null};k.Ml=function(){this.jb={};this.OL()};d.Sa(c.hya,"PRIM_WEB","JsonObject",{jc:{InsertArray:function(a){return this.Orb(d.ka(a))},InsertObject:function(a){return this.Urb(d.ka(a))},InsertNumber:function(a,
b){return this.Trb(d.ka(a),d.lg(b))},InsertString:function(a,b){return this.Xrb(d.ka(a),d.ka(b))},InsertBoolean:function(a,b){return this.Qrb(d.ka(a),d.Ca(b))},InsertNull:function(a){return this.Srb(d.ka(a))}}});c.kMa=function(a,b,c){e.K.call(this,a,b);this.cb=c};var e=c.u(c.kMa,c.jda);e.Uja=function(){return a.QI.c1b};e.SR=function(){return this.cb};e.tgb=function(){return this.cb};e.Qha=function(){return this.cb.toString()};d.Sa(c.kMa,"PRIM_WEB","JsonNumber",{});c.lMa=function(a,b,c){h.K.call(this,
a,b);this.cb=c};var h=c.u(c.lMa,c.jda);h.Uja=function(){return a.QI.f1b};h.SR=function(){return this.cb};h.Qha=function(){return this.cb};h.tgb=function(){if(isNaN(Number(this.cb)))throw d.DNa(this.cb);return new c.qk(this.cb)};h.igb=function(){if("TRUE"==this.cb.toUpperCase())return!0;if("FALSE"==this.cb.toUpperCase())return!1;throw d.eCb(this.cb);};d.Sa(c.lMa,"PRIM_WEB","JsonString",{});c.iMa=function(a,b,c){f.K.call(this,a,b);this.cb=c};var f=c.u(c.iMa,c.jda);f.Uja=function(){return a.QI.b1b};
f.SR=function(){return this.cb};f.igb=function(){return this.cb};f.Qha=function(){return this.cb?"true":"false"};d.Sa(c.iMa,"PRIM_WEB","JsonBoolean",{});c.jMa=function(a,b){t.K.call(this,a,b)};var t=c.u(c.jMa,c.jda);t.Uja=function(){return a.QI.Glb};t.SR=function(){return null};d.Sa(c.jMa,"PRIM_WEB","JsonNull",{})},{rp:["PRIM_PCOL"]});
