window.LANSA.addSrc("dvce",function(e,c,a,b,m){e.Gb("PRIM_WEB");var p=null;a.jN={qqa:0,cdc:1,bdc:2};a.jN.v={HIGH:a.jN.qqa,MEDIUM:a.jN.cdc,LOW:a.jN.bdc};c.C_b=function(){l.w.call(this);this.TXa=this.Yed=this.jFa="";this.IN=null};var l=c.u(c.C_b,c.wd);l.U=function(){null!=this.IN&&(this.IN.xb(),this.IN=null);l.j.U.call(this)};l.dKb=function(){return this.IN};l.O_c=function(a){this.IN!=a&&(null!=this.IN&&this.IN.xb(),this.IN=a,null!=this.IN&&this.IN.Ba())};l.yxa=function(){p=window.LONGRANGE;return p!==
m};l.r5a=function(b){var c=e.Tb();c.Yb("FILE",b);this.Ha(a.J.mIb,c);c.sc()};l.olc=function(b,c,e){b===m&&(b=0);c===m&&(c=0);e===m&&(e=!1);this.yxa()&&this.BGa("camera",!0,!1,!1,e,a.jN.qqa,0,b,c)};l.qlc=function(a,b,c){c===m&&(c=!1);this.yxa()&&this.BGa("camera",!1,!0,!1,c,a,b,0,0)};l.HYc=function(){this.yxa()&&this.BGa("library",!0,!0,!1,!1,a.jN.qqa,0,0,0)};l.uic=function(b){b===m&&(b=!1);this.yxa()&&this.BGa("camera",!0,!1,!0,b,!1,a.jN.qqa,0,0)};l.BGa=function(b,e,f,k,d,h,l,s,r){var p=this,B={};
B.source=b;B.enableImage=e;B.enableVideo=f;B.enableAnnotation=k;switch(h){case a.jN.bdc:B.videoQuality=3;break;case a.jN.cdc:B.videoQuality=1;break;case a.jN.qqa:B.videoQuality=0}B.videoMaxDuration=l;B.size={width:s,height:r};B.saveToPhotoGallery=d;B.returnContent=e;B.returnContent&&(B.returnContent={size:{width:s,height:r}});B.returnFile=!0;B.onCompleted=function(a){p.jFa=a.filePath;p.Yed=a.fileURL;p.TXa=a.data;p.kfc=setTimeout(function(){var a=null;""!=p.TXa&&p.TXa!==m&&(a=new c.Kfb(p.jFa,p.TXa));
p.O_c(a);a&&p.r5a(a);clearTimeout(p.kfc);p.kfc=null},25)};window.LONGRANGE.Camera.show(B)};e.jb(c.C_b,"PRIM_DVCE","Camera",{Oa:{File:{a:l.dKb},IsAvailable:{a:l.yxa}},jc:{CaptureImage:function(a,b,c){this.olc(a?e.K(a):0,b?e.K(b):0,c?e.ya(c):c)},CaptureVideo:function(b,c,f){this.qlc(b!==m?e.ra(b,a.jN.v):a.jN.qqa,e.K(c),f?e.ya(f):f)},SelectFromGallery:function(){this.HYc()},AnnotateImage:function(a){this.uic(a?e.ya(a):a)}}});c.Kfb=function(a,b){s.w.call(this);this.jFa=a;this.ked=b;this.fF=null};var s=
c.u(c.Kfb,c.wd);s.U=function(){null!=this.fF&&(this.fF=null);s.j.U.call(this)};s.qh=function(){return this.jFa};s.mva=function(){null==this.fF&&(this.fF=new c.EG({data:this.ked,mimetype:"image/png",filename:this.jFa}));return this.fF};e.jb(c.Kfb,"PRIM_DVCE","CameraFile",{Oa:{Name:{a:s.qh},Blob:{a:s.mva}}})},{rp:["PRIM_WEB"]});
