window.LANSA.addSrc("video",function(d,c,a,b,p){var u,m;u={ALL:0,METADATA:1,NONE:2};m={auto:0,metadata:1,none:2};c.H1a=function(a){q.K.call(this);this.v$=this.xr="";this.Dpa=a};var q=c.u(c.H1a,c.qd);q.R=function(){q.k.R.call(this)};q.Ng=function(){return this.xr};q.Uu=function(a){this.xr=a};q.y5=function(){return this.v$==p?"":this.v$};q.R7=function(a){this.v$=a};q.Rs=function(){for(var a=0;a<this.Dpa.Cc();a++)this.Dpa.Tt(a)===this&&this.Dpa.ys(a)};d.Sa(c.H1a,"PRIM_VDEO","File",{Aa:{FileName:{a:q.Ng,
f:function(a){this.Uu(d.ka(a))}},FileExtension:{a:q.y5,f:function(a){this.R7(d.ka(a))}}},jc:{Delete:q.Rs},Ue:{Re:"FileExtension"}});c.Hwb=function(a){s.K.call(this);this.LEc=a;this.jb=[]};var s=c.u(c.Hwb,c.qd);s.Cc=function(){return this.jb.length};s.he=function(a){return this.Tt(a)};s.Tt=function(a){if(0>a||a>=this.jb.length)throw d.Tu(a,this.jb.length);return this.jb[a]};s.Zh=function(a,b){var d=new c.H1a(this);d.Uu(a);d.R7(b);this.jb.push(d);(d=this.LEc.Ta())&&d.ou()};s.JIa=function(){0==this.Cc()&&
this.jb.push(new c.H1a(this));return this.Tt(0)};s.Ml=function(){this.jb=[];var a=this.LEc.Ta();a&&a.ou()};s.ys=function(a){if(null==this.Tt(a))throw d.Tu(a,this.jb.length);this.jb.splice(a,1)};s.Lkd=function(a){for(var b=!1,c=0;c<this.Cc()&&!(b=this.Tt(c).Ng()==a);c++);b&&this.ys(c)};d.Sa(c.Hwb,"PRIM_VDEO","Files",{Aa:{Item:{a:function(a){return this.Tt(d.O(a)-1)}}},jc:{Add:s.Zh,RemoveAll:s.Ml,Remove:function(a){return this.ys(d.O(a)-1)}},Yq:{rq:function(a){return this.Tt(d.O(a)-1)},Lw:function(){return this.Cc()}},
Ue:{Re:"Item"}});c.Wjc=function(){k.K.call(this);this.Y9=0;this.K9=this.daa=!0;this.NZ=1;this.vz=new c.Hwb(this);this.$i=-1;this.lZ=this.Xqa=this.Zqa=!1;this.JF=50};var k=c.u(c.Wjc,c.Sx);k.Be=function(){return c.dmc};k.R=function(){k.k.R.call(this)};k.Ng=function(){return 0<this.vz.Cc()?this.vz.Tt(0).Ng():""};k.Uu=function(b){this.vz.Ml();var c=this.vz.JIa();c.Ng()!=b&&(c.Uu(b),(b=this.Ta())&&b.ou(),this.m(a.g.j))};k.y5=function(){return 0<this.vz.Cc()?this.vz.Tt(0).y5():""};k.R7=function(b){var c=
this.vz.JIa();c.y5()!=b&&(c.R7(b),(b=this.Ta())&&b.ou(),this.m(a.g.j))};k.c_c=function(){return this.vz};k.unb=function(){return this.Y9};k.FDb=function(b){this.Y9!=b&&(this.Y9=b,(b=this.Ta())&&b.ou(),this.m(a.g.j))};k.hob=function(){return this.lZ};k.kpb=function(){return this.daa};k.ZEb=function(b){this.daa!=b&&(this.daa=b,(b=this.Ta())&&b.ou(),this.m(a.g.j))};k.Kmb=function(){return this.K9};k.eDb=function(b){this.K9!=b&&(this.K9=b,(b=this.Ta())&&b.ou(),this.m(a.g.j))};k.zba=function(){return this.$i};
k.iob=function(){return this.Zqa};k.gob=function(){return this.Xqa};k.Opb=function(){return this.JF};k.TOa=function(c){c=b.Mf(c,0,100);this.JF!=c&&(this.JF=c,this.lZ=0==this.JF,(c=this.Ta())&&c.ou(),this.m(a.g.j))};k.T1c=function(){return this.NZ};k.PEb=function(b){this.NZ!=b&&(this.NZ=b,(b=this.Ta())&&b.ou(),this.m(a.g.j))};k.Play=function(){this.Ta()&&this.Ta().Play()};k.qi=function(){this.Ta()&&this.Ta().qi()};k.Nzb=function(){this.TOa(0)};k.eWc=function(){if(this.Ta()){var a=this.Ta().G;a.currentTime=
Math.min(a.duration,a.currentTime+5)}};k.dWc=function(){if(this.Ta()){var a=this.Ta().G;0<a.currentTime&&(a.currentTime-=5)}};d.Md(c.Wjc,"PRIM_VDEO",{Aa:{FileName:{a:k.Ng,f:function(a){this.Uu(d.ka(a))}},CycleToStart:{a:k.unb,f:function(a){this.FDb(d.Ca(a))}},ShowControls:{a:k.kpb,f:function(a){this.ZEb(d.Ca(a))}},Autoplay:{a:k.Kmb,f:function(a){this.eDb(d.Ca(a))}},Preload:{a:function(){return d.va(this.NZ,u)},f:function(a){this.PEb(d.wa(a,u))}},Duration:{a:k.zba},IsMuted:{a:k.hob},IsPlaying:{a:k.iob},
IsEnded:{a:k.gob},Volume:{a:k.Opb,f:function(a){this.TOa(d.O(a))}}},jc:{Play:k.Play,Stop:k.qi,Mute:k.Nzb,FrameForward:k.eWc,FrameBackward:k.dWc}});c.dmc=function(a){e.K.call(this,a)};var e=c.u(c.dmc,c.mo);e.Hd=function(b,c){this.G=document.createElement("video");this.G.setAttribute("LANSAHandle",this.hc);this.G.style.position="absolute";this.G.style.overflow="hidden";this.G.style.whiteSpace="nowrap";this.ou();var d=this.G,k=this;d.addEventListener("loadedmetadata",function(){k.L&&(k.L.$i=d.duration,
k.L.Ga(a.Q.acc))},!1);d.addEventListener("loadeddata",function(){k.L&&k.L.Ga(a.Q.$bc)},!1);d.addEventListener("play",function(){k.L&&(k.L.Zqa=!0,k.L.Xqa=!1,k.L.Ga(a.Q.woc))},!1);d.addEventListener("pause",function(){k.L&&(k.L.Zqa=!1,k.L.Ga(a.Q.tvc))},!1);d.addEventListener("ended",function(){k.L&&(k.G.pause(),k.G.paused=!0,k.L.Xqa=!0,k.L.Ga(a.Q.Ry))},!1);d.addEventListener("volumechange",function(){k.L&&(d.muted||0==d.volume?(k.G.muted=!0,k.L.lZ=!0,k.L.JF=0,k.L.Ga(a.Q.inc)):(k.L.lZ=!1,k.L.JF=Math.round(100*
d.volume)))},!1);return e.k.Hd.call(this,b,c)};e.ou=function(){this.Xza("controls",this.L.daa);this.Xza("autoplay",this.L.K9);this.Xza("loop",this.L.Y9);this.G.setAttribute("preload",d.va(this.L.NZ,m));this.G.volume=0<this.L.JF?this.L.JF/100:0;this.G.muted=this.L.lZ;this.mKb()};e.mKb=function(){this.$Bb();var a=this.L.vz.Cc();if(0!=a)for(var b=0;b<a;b++){var c=this.L.vz.Tt(b);this.eGc(this.G,c.xr,c.v$)}};e.eGc=function(a,b,c){var d=document.createElement("source");d.src=b;c&&(d.type="video/"+c);a.appendChild(d)};
e.$Bb=function(){var a=this.G;if(a&&(a=a.childNodes)){var b,c,d=[];for(c=0;c<a.length;c++)b=a[c],"SOURCE"==b.nodeName&&d.push(b);for(c=0;c<d.length;c++)b=d[c],b.parentNode.removeChild(b)}};e.PS=function(){return!1};e.U2a=function(){};e.Play=function(){this.G.play!==p&&this.G.play()};e.qi=function(){this.G.pause!==p&&this.G.pause()}});
