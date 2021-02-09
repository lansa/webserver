(function(d){d.jsPDF=d.jsPDF||{instance:null};var c=c||{},a="Page ",b="",p=d.jsPDF;c.Jc={TO:4112,SS:4096,D3a:4097,dD:16,jA:0,SO:1,B3a:272,RO:256,C3a:257,rAb:65536};c.ni={US:0,y7:1,x7:2,NL:3};p.imageDataUrl={};p.jsPDF_fontList=[];p.ovrFont=null;p.vfsFontQueue=[];p.vfsNode=document.createElement("div");p.vfsNode.setAttribute("id","jsPDF-VFSFiles");document.body.appendChild(p.vfsNode);p.fontAlias={FontAwesome:"FontAwesome","font-awesome":"FontAwesome","Noto Sans":"Noto Sans","noto sans":"Noto Sans",
NotoSans:"Noto Sans",notosans:"Noto Sans","Noto Sans CJK jp":"Noto Sans CJK jp","noto sans cjk jp":"Noto Sans CJK jp","NotoSans CJK jp":"Noto Sans CJK jp","notosans cjk jp":"Noto Sans CJK jp",Roboto:"Roboto",roboto:"Roboto",Verdana:"Verdana",verdana:"Verdana"};p.fontFiles={FontAwesome:{fontFamily:"FontAwesome",vfs:"fontawesome-webfont-vfs.js",fonts:[{ttf:"fontawesome-webfont.ttf",style:"normal"}]},"Material Icons":{fontFamily:"Material Icons",vfs:"MaterialIcons-Regular-vfs.js",fonts:[{ttf:"MaterialIcons-Regular.ttf",
style:"normal"}]},"Noto Sans":{fontFamily:"Noto Sans",vfs:"NotoSans-vfs.js",fonts:[{ttf:"NotoSans-Regular.ttf",style:"normal"},{ttf:"NotoSans-Italic.ttf",style:"italic"},{ttf:"NotoSans-Bold.ttf",style:"bold"},{ttf:"NotoSans-BoldItalic.ttf",style:"bolditalic"}]},"Noto Sans CJK jp":{fontFamily:"Noto Sans CJK jp",vfs:"NotoSansCJKjp-vfs.js",fonts:[{ttf:"NotoSansCJKjp-Regular.min.ttf",style:"normal"},{ttf:"NotoSansCJKjp-Bold.min.ttf",style:"bold"}]},Verdana:{fontFamily:"Verdana",vfs:"verdana-vfs.js",fonts:[{ttf:"verdana.ttf",
style:"normal"},{ttf:"verdanai.ttf",style:"italic"},{ttf:"verdanab.ttf",style:"bold"},{ttf:"verdanabi.ttf",style:"bolditalic"}]},Roboto:{fontFamily:"Roboto",uniqueId:"Roboto",vfs:"Roboto-vfs.js",fonts:[{ttf:"Roboto-Bold-webfont.ttf",style:"bold"},{ttf:"Roboto-BoldItalic-webfont.ttf",style:"bolditalic"},{ttf:"Roboto-Italic-webfont.ttf",style:"italic"},{ttf:"Roboto-Regular-webfont.ttf",style:"normal"}]}};p.createDocument=function(a,b,c){this.instance=a=new jsPDF({orientation:a,unit:b,format:c});this.jsPDF_fontList=
Object.keys(a.getFontList());return a};p.reset=function(){for(var a=this.vfsNode;a.firstChild;)a.removeChild(a.firstChild);delete this.imageDataUrl;this.imageDataUrl={};delete this.jsPDF_fontList;this.jsPDF_fontList=[];delete p.instance;this.instance=null};p.AJd=function(a){var b=p.fontFiles,c=b[a];c||(a=p.fontAlias[a])&&(c=b[a]);return c?c.fontFamily:null};p.addFont=function(a){if(a){var b=p.instance,c=a.fontFamily;a=a.fonts;for(var d=0;d<a.length;d++){var k=a[d];b.addFont(k.ttf,c,k.style)}}};p.textEx=
function(a,b,c,d,k){var e=/\r\n|\r|\n/g,h=this.internal.getFontSize()/this.internal.scaleFactor,f=null,p=1;if("middle"===k||"bottom"===k||"center"===d||"right"===d)f="string"===typeof a?a.split(e):a,p=f.length||1;c+=h*(2-1.15);"middle"===k?c-=p/2*h:"bottom"===k&&(c-=p*h);if("center"===d||"right"===d){k=h;"center"===d&&(k*=0.5);if(1<p){for(a=0;a<f.length;a++)this.text(f[a],b-this.getStringUnitWidth(f[a])*k,c),c+=h;return this}b-=this.getStringUnitWidth(a)*k}this.text(a,b,c);return this};p.tJd=function(a){if("head"===
a.section){var b=a.cell.styles,c=b[a.column.dataKey];Object.keys(c||{}).forEach(function(a){b[a]=c[a]})}};p.rJd=function(a){function b(a,c,d,e,f){var l=0;switch(f){case "left":l=a+e;break;case "right":l=a+c-d-e;break;default:l=a+0.5*(c-d)}return l}function d(a,b,c,e,f){var l=0;switch(f){case "top":l=a+e;break;case "bottom":l=a+b-c-e;break;default:l=a+0.5*(b-c)}return l}var p=a.doc,k=a.section,e=a.cell,h=e.styles,f=e.raw,t=f?f._widget:null;if(t&&"body"===k){var A=a.settings.userData.images;a=e.width;
var l=e.height,k=e.x,r=e.y;switch(t.type){case "image":var D=t.url,C=A[D];if(A=C?C.base64:null){var C=t.format||C.ext,f=t.height||e.contentHeight-0.2,x=t.width||f,e=t.height?h.cellPadding:0.1;p.addImage(A,C,b(k,a,x,e,h.halign||"center"),d(r,l,f,e,h.valign||"middle"),x,f,D,t.compression||"NONE",t.rotation||0)}break;case "button":var f=t.caption,h=f.content,f=f.align,x=t.image,L=t.borders,C=L?L.width:null,J=L?L.color:null,D=t.radius,H=t.fillColor||(L?[247,247,247]:[238,238,238]),M=e.styles,S=M?M.cellPadding?
M.cellPadding:0:0,t=k+0.05*a,r=r+0.1*l,F=0.9*a,e=0.5*F,z=0.8*l,l=0.5*z,T=t+F,y=r+z,da=L?"FD":"F",$=L=0,K=p.getTextDimensions(h),W=K.w,G=0.5*W,K=K.h,I=0.5*K,X=null;50<F&&(F=50,e=0.5*F,t=k+(a-F)/2,T=t+F);p.setFillColor(H[0],H[1],H[2]);C&&(a=J?J:M.textColor)&&p.setDrawColor(a[0],a[1],a[2]);D?p.roundedRect(t,r,F,z,l,l,da):p.rect(t,r,F,z,da);if(x){if(D=x.url,A=(C=A[D])?C.base64:null){C=C.ext;a=0.35*z;k=0.5*a;J=z=0;switch(x.align){case c.ni.US:switch(f){case c.Jc.dD:L=t+1;z=L+G-k;J=r+1;$=J+a+1+I;X=["left",
"middle"];break;case c.Jc.SO:L=T-1;$=r+l;X=["right","middle"];z=L-G-k;J=$-I-a-1;J<r&&(J=r+1,$=J+a+I+1);break;case c.Jc.RO:L=t+e;$=y-1;X=["center","bottom"];z=L-k;J=$-K-a-1;break;default:L=t+e,z=L-k,J=r+1,$=J+a+I+2,X=["center","middle"]}break;case c.ni.y7:switch(f){case c.Jc.SS:L=t+e;$=r+1;X=["center","top"];z=L-k;J=$+K+1;break;case c.Jc.dD:J=y-a-1;$=J-I-1;L=t+1;z=L+G-k;X=["left","middle"];break;case c.Jc.SO:L=T-1;$=r+l;X=["right","middle"];z=L-G-k;J=$+I+1;J+a>y&&(J=y-a-1,$=J-I-1);break;case c.Jc.RO:L=
t+e;z=L-k;J=y-a-1;$=J-I-1;X=["center","middle"];break;default:L=t+e,$=r+l,X=["center","middle"],z=L-k,J=$+I+1,J+a>y&&(J=y-a-1,$=J-I-1)}break;case c.ni.x7:switch(f){case c.Jc.SS:L=t+e;$=r+1;X=["center","top"];z=L+G+1;J=$;break;case c.Jc.dD:L=t+1;$=r+l;X=["left","middle"];z=L+W+1;J=$-k;break;case c.Jc.SO:z=T-a-1;L=z-1;$=r+l;J=$-k;X=["right","middle"];break;case c.Jc.RO:L=t+e;$=y-1;X=["center","bottom"];z=L+G+1;J=y-a-1;break;default:L=t+e,$=r+l,X=["center","middle"],z=L+G+1,J=$-k}break;default:switch(f){case c.Jc.SS:L=
t+e;$=r+1;J=r+1;z=L-G-a-1;X=["center","top"];break;case c.Jc.dD:z=t+1;L=z+a+1;$=r+l;X=["left","middle"];J=$-k;break;case c.Jc.SO:L=T-1;$=r+l;z=L-W-a-1;J=$-k;X=["right","middle"];break;case c.Jc.RO:L=t+e;$=y-1;X=["center","bottom"];z=L-G-a-1;J=y-a-1;break;default:L=t+e,$=r+l,X=["center","middle"],z=L-G-a-1,J=$-k}}p.addImage(A,C,z,J,a,a,D)}}else switch(f){case c.Jc.SS:L=t+e;$=r+1;X=["center","top"];break;case c.Jc.dD:L=t+S;$=r+l;X=["left","middle"];break;case c.Jc.SO:L=t+(F-1);$=r+l;X=["right","middle"];
break;case c.Jc.RO:L=t+e;$=y-1;X=["center","bottom"];break;default:L=t+e,$=r+l,X=["center","middle"]}p.textEx(h,L,$,X[0],X[1])}}};p.sJd=function(c){var d=c.doc,p=d.internal,s=c.settings;c=a+p.getNumberOfPages().toString();p=p.pageSize;p=p.height?p.height:p.getHeight();s=s.margin.left;b&&d.setFont(b,"normal");d.setFontSize(9);d.setTextColor(76,76,76);d.text(c,s,p-9)};p.kJd=function(a,b){for(var c=0;c<b.length;c++){var d=b[c],k=this[d];k&&(a[d]=k)}};p.kLd=function(c){a=c.pageFooter;this.ovrFont=b=c.ovrFont};
window.jsPDF.API.textEx=p.textEx;window.LANSA.jsPDF.createDocument=p.createDocument;window.LANSA.jsPDF.reset=p.reset;window.LANSA.jsPDF.getFontFamily=p.AJd;window.LANSA.jsPDF.addFont=p.addFont;window.LANSA.jsPDF.didParseCell=p.tJd;window.LANSA.jsPDF.didDrawCell=p.rJd;window.LANSA.jsPDF.didDrawPage=p.sJd;window.LANSA.jsPDF.addHooks=p.kJd;window.LANSA.jsPDF.setLanguageInfo=p.kLd})(window.LANSA);
