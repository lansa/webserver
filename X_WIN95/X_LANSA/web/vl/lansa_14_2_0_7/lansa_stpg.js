window.LANSA.addSrc("stpg",function(e,c,a,b){a.PLa={oGc:1,Z9a:1};c.YXb=function(){n.w.call(this);this.Xub=a.PLa.oGc;this.zXa=!0;this.Cra=a.Z.xAa;this.Rb=null};var n=c.u(c.YXb,c.wd);n.U=function(){this.Na(null);n.j.U.call(this)};n.je=function(){return this.zXa};n.Tf=function(b){this.zXa!=b&&(this.zXa=b,this.l(a.f.h))};n.Dja=function(){return 0!=(this.Xub&a.PLa.Z9a)?!0:!1};n.J6b=function(b){b!=this.Dja()&&(this.Xub=this.Xub&~a.PLa.Z9a|(b?a.PLa.Z9a:0),this.l(a.f.h))};n.psd=function(){return this.Cra};
n.S_c=function(b){this.Cra!=b&&(this.Cra=b,this.l(a.f.h))};n.M=function(){return this.Rb};n.Na=function(c){if(this.Rb!=c){var e=b.W().jfc;this.Rb&&(e.splice(e.indexOf(this),1),this.Rb.Ca(this,this.U9));if(this.Rb=c)e.push(this),this.Rb.Da(this,this.U9);this.l(a.f.h)}};n.cvc=function(){this.Ha(a.K.hRc)};b.ZXb=function(c,e){for(var n=!1,g,k=b.W().jfc,f=0;f<k.length&&null!=(g=k[f]);f++)if(g.Rb==c&&!0==g.zXa&&g.Cra!=a.Z.xAa&&e==g.Cra){g.cvc();n=!0;break}return n};n.U9=function(b,c){switch(c.Ya){case a.f.sb:case a.f.Ob:this.Na(null)}};
e.kd(c.YXb,"PRIM_STPG",{Oa:{ShortCut:{a:function(){return e.ta(this.Cra,a.Z.v)},g:function(b){this.S_c(e.qa(b,a.Z.v))}},Enabled:{a:n.je,g:function(a){this.Tf(e.xa(a))}},Parent:{a:n.M,g:n.Na}}})});
