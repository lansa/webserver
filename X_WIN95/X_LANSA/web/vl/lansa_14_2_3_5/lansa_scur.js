window.LANSA.addSrc("scur",function(d){var c=d.xTa={};c.Lyc=function(a,b){if(""==b)return a;for(var d="",u=Array(2),t=Array(4),r=c.CEb(b),n=c.ohc(a);0!=n.length%8;)n.push(0);t[0]=c.GX(r,0);t[1]=c.GX(r,4);t[2]=c.GX(r,8);t[3]=c.GX(r,12);for(r=0;r<n.length;r+=8)u[0]=c.GX(n,r),u[1]=c.GX(n,r+4),c.Khd(u,t),d+=c.D5b(u[0])+c.D5b(u[1]);return d};c.Gsc=function(a,b){if(""==b)return a;var d=Array(2),u=Array(4),t=c.CEb(b);u[0]=c.GX(t,0);u[1]=c.GX(t,4);u[2]=c.GX(t,8);u[3]=c.GX(t,12);for(var t=[],r=0;r<a.length;r+=
16)d[0]=c.E5b(a.substr(r,8)),d[1]=c.E5b(a.substr(r+8,8)),c.Lhd(d,u),c.phc(d[0],t),c.phc(d[1],t);return c.Jhd(t)};c.Khd=function(a,b){for(var c=a[0],d=a[1],t=0,r=32;0<r--;)c+=(d<<4^d>>>5)+d^t+b[t&3],t+=2654435769,d+=(c<<4^c>>>5)+c^t+b[t>>>11&3];a[0]=c;a[1]=d};c.Lhd=function(a,b){for(var c=a[0],d=a[1],t=3337565984,r=32;0<r--;)d-=(c<<4^c>>>5)+c^t+b[t>>>11&3],t-=2654435769,c-=(d<<4^d>>>5)+d^t+b[t&3];a[0]=c;a[1]=d};c.GX=function(a,b){var c=new Number(0),c=c+a[b],c=c+(a[b+1]<<8),c=c+(a[b+2]<<16);return c+=
a[b+3]<<24};c.E5b=function(a){for(var b=0,c=0,d=0;4>d;d++){var t=parseInt(a.charAt(c++)+a.charAt(c++),16);switch(d){case 0:break;case 1:t<<=8;break;case 2:t<<=16;break;default:t<<=24}b+=t}return b};c.mUd=function(a){return String.fromCharCode(a&255,a>>>8&255,a>>>16&255,a>>24&255)};c.phc=function(a,b){b.push(a&255);b.push(a>>>8&255);b.push(a>>>16&255);b.push(a>>>24&255)};c.D5b=function(a){for(var b="",c=0,d=0;4>d;d++){switch(d){case 0:c=a&255;break;case 1:c=a>>>8&255;break;case 2:c=a>>>16&255;break;
default:c=a>>>24&255}var t=c&15,b=b+"0123456789ABCDEF".charAt((c&240)>>>4),b=b+"0123456789ABCDEF".charAt(t)}return b};c.CEb=function(a){a=c.ohc(a);for(var b=0,d=[];16>d.length;)d.push(a[b++]),b>=a.length&&(b=0);return d};c.ohc=function(a){var b=[];try{a=unescape(encodeURIComponent(a))}catch(c){}for(var d=0;d<a.length;d++)b.push(a.charCodeAt(d)&255);return b};c.Jhd=function(a){for(var b=[],c=0;c<a.length&&0!=a[c];c++)b.push(String.fromCharCode(a[c]));b=b.join("");try{b=decodeURIComponent(escape(b))}catch(d){}return b}});