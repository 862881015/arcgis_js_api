// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/commands/mapToImage/LegendToLayerUtil","dojo/_base/lang dojo/when dojo/dom-construct dojo/dom-style esri/graphic esri/geometry/ScreenPoint esri/layers/GraphicsLayer esri/symbols/PictureMarkerSymbol esri/dijit/geoenrichment/utils/htmlToSvg/HTMLtoSVGConverter esri/dijit/geoenrichment/utils/DomUtil ../imageUtils/ImagePrintUtil ../imageUtils/NodeToCanvasUtil".split(" "),function(n,k,g,d,p,q,r,t,u,h,v,w){return{legendToGraphicsLayer:function(a,
l,x){var y=a.domNode.scrollHeight>a.domNode.clientHeight,m=h.position(a.domNode),z=d.get(a.domNode,"left"),A=d.get(a.domNode,"top"),B=d.get(a.domNode,"maxHeight");d.set(a.domNode,{left:0,top:0,maxHeight:"10000px"});var e=g.toDom(a.domNode.outerHTML);g.place(e,document.body);e.style.zIndex="-1000";e.style.position="absolute";var c=n.mixin({},h.position(e));c.x=m.x;c.y=m.y;d.set(a.domNode,{left:z+"px",top:A+"px",maxHeight:B+"px"});return k(u.htmlToSvg(e,{iterationsPerScript:100}),function(a){return k(v.printImages({svgStrings:[a],
nodeToCanvasFunc:function(a,c,b){return w.svgNodeToCanvasFunc(a.children[0],c,b)},scale:5}),function(a){g.destroy(e);var d=new p,b=h.position(x),f=1;y&&(c.x=b.x+10,c.y=b.y+10,f=(b.h-20)/c.h);b=l.toMap(new q(c.x-b.x,c.y-b.y));b.setSpatialReference(l.spatialReference);d.setGeometry(b);b=new t;b.setUrl(a[0]);b.setWidth(c.w*f);b.setHeight(c.h*f);b.setOffset(c.w/2*f,-c.h/2*f);d.setSymbol(b);a=new r;a.add(d);return a})}).otherwise(function(a){console.log(a);return null})}}});