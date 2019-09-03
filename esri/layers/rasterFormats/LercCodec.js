// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/layers/rasterFormats/LercCodec",[],function(){var L={defaultNoDataValue:-3.4027999387901484E38,decode:function(e,l){var z;l=l||{};var c=l.inputOffset||0,g=l.encodedMaskData||null===l.encodedMaskData,a={},b=new Uint8Array(e,c,10);a.fileIdentifierString=String.fromCharCode.apply(null,b);if("CntZImage"!=a.fileIdentifierString.trim())throw"Unexpected file identifier string: "+a.fileIdentifierString;c+=10;b=new DataView(e,c,24);a.fileVersion=b.getInt32(0,!0);a.imageType=b.getInt32(4,!0);a.height=
b.getUint32(8,!0);a.width=b.getUint32(12,!0);a.maxZError=b.getFloat64(16,!0);c+=24;if(!g)if(b=new DataView(e,c,16),a.mask={},a.mask.numBlocksY=b.getUint32(0,!0),a.mask.numBlocksX=b.getUint32(4,!0),a.mask.numBytes=b.getUint32(8,!0),a.mask.maxValue=b.getFloat32(12,!0),c+=16,0<a.mask.numBytes){var g=new Uint8Array(Math.ceil(a.width*a.height/8)),b=new DataView(e,c,a.mask.numBytes),p=b.getInt16(0,!0),r=2,w=0;do{if(0<p)for(;p--;)g[w++]=b.getUint8(r++);else for(var B=b.getUint8(r++),p=-p;p--;)g[w++]=B;p=
b.getInt16(r,!0);r+=2}while(r<a.mask.numBytes);if(-32768!==p||w<g.length)throw"Unexpected end of mask RLE encoding";a.mask.bitset=g;c+=a.mask.numBytes}else 0===(a.mask.numBytes|a.mask.numBlocksY|a.mask.maxValue)&&(g=new Uint8Array(Math.ceil(a.width*a.height/8)),a.mask.bitset=g);b=new DataView(e,c,16);a.pixels={};a.pixels.numBlocksY=b.getUint32(0,!0);a.pixels.numBlocksX=b.getUint32(4,!0);a.pixels.numBytes=b.getUint32(8,!0);a.pixels.maxValue=b.getFloat32(12,!0);c+=16;g=a.pixels.numBlocksX;b=a.pixels.numBlocksY;
g+=0<a.width%g?1:0;p=b+(0<a.height%b?1:0);a.pixels.blocks=Array(g*p);for(w=r=0;w<p;w++)for(B=0;B<g;B++){var h=0,b=new DataView(e,c,Math.min(10,e.byteLength-c)),f={};a.pixels.blocks[r++]=f;var d=b.getUint8(0);h++;f.encoding=d&63;if(3<f.encoding)throw"Invalid block encoding ("+f.encoding+")";if(2===f.encoding)c++;else{if(0!==d&&2!==d){d>>=6;f.offsetType=d;if(2===d)f.offset=b.getInt8(1),h++;else if(1===d)f.offset=b.getInt16(1,!0),h+=2;else if(0===d)f.offset=b.getFloat32(1,!0),h+=4;else throw"Invalid block offset type";
if(1===f.encoding)if(d=b.getUint8(h),h++,f.bitsPerPixel=d&63,d>>=6,f.numValidPixelsType=d,2===d)f.numValidPixels=b.getUint8(h),h++;else if(1===d)f.numValidPixels=b.getUint16(h,!0),h+=2;else if(0===d)f.numValidPixels=b.getUint32(h,!0),h+=4;else throw"Invalid valid pixel count type";}c+=h;if(3!=f.encoding)if(0===f.encoding){d=(a.pixels.numBytes-1)/4;if(d!==Math.floor(d))throw"uncompressed block has invalid length";b=new ArrayBuffer(4*d);h=new Uint8Array(b);h.set(new Uint8Array(e,c,4*d));b=new Float32Array(b);
f.rawData=b;c+=4*d}else 1===f.encoding&&(d=Math.ceil(f.numValidPixels*f.bitsPerPixel/8),b=new ArrayBuffer(4*Math.ceil(d/4)),h=new Uint8Array(b),h.set(new Uint8Array(e,c,d)),f.stuffedData=new Uint32Array(b),c+=d)}}a.eofOffset=c;e=null!=l.noDataValue?l.noDataValue:L.defaultNoDataValue;var g=l.encodedMaskData,d=l.returnMask,p=0,r=a.pixels.numBlocksX,w=a.pixels.numBlocksY,B=Math.floor(a.width/r),f=Math.floor(a.height/w),h=2*a.maxZError,c=Number.MAX_VALUE,x,g=g||(a.mask?a.mask.bitset:null),t,b=new (l.pixelType||
Float32Array)(a.width*a.height);d&&g&&(t=new Uint8Array(a.width*a.height));for(var d=new Float32Array(B*f),u,v,F=0;F<=w;F++){var G=F!==w?f:a.height%w;if(0!==G)for(var H=0;H<=r;H++){var C=H!==r?B:a.width%r;if(0!==C){var n=F*a.width*f+H*B,J=a.width-C,q=a.pixels.blocks[p],k,m;if(2>q.encoding){if(0===q.encoding)k=q.rawData;else{k=q.stuffedData;m=q.bitsPerPixel;x=q.numValidPixels;u=q.offset;v=h;var O=d,M=a.pixels.maxValue,K=(1<<m)-1,N=0,I=void 0,y=0,D=void 0,E=void 0,P=Math.ceil((M-u)/v);k[k.length-1]<<=
8*(4*k.length-Math.ceil(m*x/8));for(I=0;I<x;I++)0===y&&(E=k[N++],y=32),y>=m?(D=E>>>y-m&K,y-=m):(y=m-y,D=(E&K)<<y&K,E=k[N++],y=32-y,D+=E>>>y),O[I]=D<P?u+D*v:M;k=d}m=0}else z=2===q.encoding?0:q.offset;var A;if(g)for(v=0;v<G;v++){n&7&&(A=g[n>>3],A<<=n&7);for(u=0;u<C;u++)n&7||(A=g[n>>3]),A&128?(t&&(t[n]=1),x=2>q.encoding?k[m++]:z,c=c>x?x:c,b[n++]=x):(t&&(t[n]=0),b[n++]=e),A<<=1;n+=J}else if(2>q.encoding)for(v=0;v<G;v++){for(u=0;u<C;u++)x=k[m++],c=c>x?x:c,b[n++]=x;n+=J}else for(c=c>z?z:c,v=0;v<G;v++){for(u=
0;u<C;u++)b[n++]=z;n+=J}if(1===q.encoding&&m!==q.numValidPixels)throw"Block and Mask do not match";p++}}}z=t;t={width:a.width,height:a.height,pixelData:b,minValue:c,maxValue:a.pixels.maxValue,noDataValue:e};z&&(t.maskData=z);l.returnEncodedMask&&a.mask&&(t.encodedMaskData=a.mask.bitset?a.mask.bitset:null);if(l.returnFileInfo&&(t.fileInfo=Q(a),l.computeUsedBitDepths)){l=t.fileInfo;z=a.pixels.numBlocksX*a.pixels.numBlocksY;A={};for(k=0;k<z;k++)m=a.pixels.blocks[k],0===m.encoding?A.float32=!0:1===m.encoding?
A[m.bitsPerPixel]=!0:A[0]=!0;a=Object.keys(A);l.bitDepths=a}return t}},Q=function(e){return{fileIdentifierString:e.fileIdentifierString,fileVersion:e.fileVersion,imageType:e.imageType,height:e.height,width:e.width,maxZError:e.maxZError,eofOffset:e.eofOffset,mask:e.mask?{numBlocksX:e.mask.numBlocksX,numBlocksY:e.mask.numBlocksY,numBytes:e.mask.numBytes,maxValue:e.mask.maxValue}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,numBytes:e.pixels.numBytes,maxValue:e.pixels.maxValue,
noDataValue:this.noDataValue}}};return L});