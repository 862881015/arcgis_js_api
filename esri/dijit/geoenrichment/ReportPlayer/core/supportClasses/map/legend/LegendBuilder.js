// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/map/legend/LegendBuilder",["dojo/_base/declare","dojo/aspect","dojo/dom-construct","dojo/dnd/Moveable","esri/dijit/Legend"],function(h,k,l,m,n){var c={},p=h(n,{_isSupportedLayerType:function(a){return a&&"esri.layers.GraphicsLayer"===a.declaredClass&&a.renderer&&a.name&&a.graphics.length?!0:this.inherited(arguments)},_isLayerDrawingEnabled:function(a){return a&&"esri.layers.FeatureLayer"===a.declaredClass&&a.renderer&&"heatmap"===a.renderer.type?
!0:this.inherited(arguments)},_getServiceTitle:function(a){a._titleForLegend=a._titleForLegend||a.name;return this.inherited(arguments)}});c.createLegend=function(a,f,d,e){function g(){b&&b.destroy();b=null;e&&e.onDestroyed()}function c(){function c(){b.domNode&&(b.domNode.style.left="10px",b.domNode.style.top=f.clientHeight-b.domNode.clientHeight-10+"px",b.domNode.style.maxHeight=f.clientHeight-20+"px")}g();b=new p({map:a,layerInfos:null},l.create("div",{"class":"esriGEReportPlayer_mapLegend"},f));
b.startup();b.own(a.on("before-unload",g));var d=new m(b.domNode);b.own(d);c();b.own(k.after(b,"_createLegendForLayer",function(a){setTimeout(c);return a}));e&&e.onCreated(b)}var b;d&&(d.showLegend&&c(),d.onVisibilityChanged=function(){d.showLegend?c():g()})};return c});