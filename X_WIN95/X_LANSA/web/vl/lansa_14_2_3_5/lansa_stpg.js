window.LANSA.addSrc("stpg",function(d,c,a,b){a.JOa={qLc:1,Qcb:1};c.p1b=function(){p.H.call(this);this.Vyb=a.JOa.qLc;this.g0a=!0;this.oua=a.W.HDa;this.Xb=null};var p=c.q(c.p1b,c.Hd);p.R=function(){this.Oa(null);p.j.R.call(this)};p.ue=function(){return this.g0a};p.kg=function(b){this.g0a!=b&&(this.g0a=b,this.k(a.g.h))};p.xla=function(){return 0!=(this.Vyb&a.JOa.Qcb)?!0:!1};p.oac=function(b){b!=this.xla()&&(this.Vyb=this.Vyb&~a.JOa.Qcb|(b?a.JOa.Qcb:0),this.k(a.g.h))};p.Oxd=function(){return this.oua};
p.o5c=function(b){this.oua!=b&&(this.oua=b,this.k(a.g.h))};p.L=function(){return this.Xb};p.Oa=function(c){if(this.Xb!=c){var d=b.U().Rjc;this.Xb&&(d.splice(d.indexOf(this),1),this.Xb.Ba(this,this.o7a));if(this.Xb=c)d.push(this),this.Xb.Fa(this,this.o7a);this.k(a.g.h)}};p.jAc=function(){this.Ca(a.w.sWc)};b.q1b=function(c,d){for(var r=!1,n,k=b.U().Rjc,h=0;h<k.length&&null!=(n=k[h]);h++)if(n.Xb==c&&!0==n.g0a&&n.oua!=a.W.HDa&&d==n.oua){n.jAc();r=!0;break}return r};p.o7a=function(b,c){switch(c.$a){case a.g.wb:case a.g.Tb:this.Oa(null)}};
d.wd(c.p1b,"PRIM_STPG",{Pa:{ShortCut:{a:function(){return d.sa(this.oua,a.W.u)},f:function(b){this.o5c(d.qa(b,a.W.u))}},Enabled:{a:p.ue,f:function(a){this.kg(d.wa(a))}},Parent:{a:p.L,f:p.Oa}}})});
