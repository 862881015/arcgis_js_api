// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/arcgis/portal/PortalItemTransformer","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has dojo/query dijit/registry dijit/_WidgetBase ../../../../kernel".split(" "),function(k,m,h,p,q,n,r,t){k=k([r],{gxeDocument:null,isPull:!0,portal:null,portalItem:null,portalUser:null,portalUrl:null,itemPropertiesToPush:null,postCreate:function(){this.inherited(arguments)},afterPullValue:function(a,b){},checkCoordinate:function(a){var b=typeof a;if("undefined"===b&&null===a)return null;
if("string"===b){a=parseFloat(a);if(isNaN(a))return null;b=typeof a}return"number"===b?isFinite(a)?a:null:null},checkVisibility:function(a,b){},findInputValue:function(a,b,c){b=this.findInputWidget(a,b,c);if(null!==b)for(a=b.getParent();a;){if(a._isOptionallyOff){b=null;break}a=a.getParent()}if(null!==b)return b.getInputValue()},findInputWidget:function(a,b,c){if((a=q("[data-gxe-path\x3d'"+b+"']",this.gxeDocument.rootDescriptor.domNode))&&1===a.length){if(c=n.byNode(a[0]))return c.inputWidget}else if(a&&
0<a.length&&c&&(c=n.byNode(a[0])))return c.inputWidget;return null},generatePush:function(a,b){this.isPull=!1;this.gxeDocument=a;this.portalItem=b;this.itemPropertiesToPush=null;var c={},d=this.newTransformationInfo(a);this.populateTransformationInfo(a,b,d);a=null;b=!1;for(a in d)d.hasOwnProperty(a)&&this.pushValue(c,d,a);for(a in c)c.hasOwnProperty(a)&&(b=!0);b&&(this.itemPropertiesToPush=c);return this.itemPropertiesToPush},pull:function(a,b){this.isPull=!0;this.gxeDocument=a;this.portalItem=b;
var c=this.newTransformationInfo(a);this.populateTransformationInfo(a,b,c);a=null;for(a in c)c.hasOwnProperty(a)&&this.pullValue(b,c,a,!1)},newTransformationInfo:function(a){a=function(a){return{path:null,canPull:!0,canPush:a,isSelected:!0,valueToPush:null}};return{id:a(!1),title:a(!1),snippet:a(!0),description:a(!0),accessInformation:a(!1),licenseInfo:a(!1),thumbnail:a(!1),culture:a(!1),url:a(!1),created:a(!1),modified:a(!1),type:a(!1),tags:a(!0),typeKeywords:a(!1),extent:{xmin:a(!0),ymin:a(!0),
xmax:a(!0),ymax:a(!0)},spatialReference:a(!1),name:a(!1),owner:a(!1)}},populateTransformationInfo:function(a,b,c){},pullValue:function(a,b,c,d){var e=null,g=e=null,f=null,l=null,h=null;if(c in a&&c in b){f=a[c];e=b[c];if("undefined"===typeof f||"string"===typeof f&&null!==f&&0===f.length||"undefined"===typeof e)return;if("extent"===c){if(f&&f.push&&2===f.length&&2===f[0].length&&2===f[1].length)for(h in l={xmin:f[0][0],ymin:f[0][1],xmax:f[1][0],ymax:f[1][1]},l)l.hasOwnProperty(h)&&this.pullValue(l,
e,h,!0);return}null!==e&&e.canPull&&e.isSelected&&(g=e.path,"undefined"===typeof g&&(g=null));"tags"===c&&null!==f&&0===f.length&&(f=null)}null!==f&&null!==g&&(e=this.findInputWidget(c,g,!d),null!==e&&(e.setInputValue(f),e.parentXNode&&e.parentXNode.toggleContent&&e.parentXNode.toggleContent(!0),this.checkVisibility(e,g),this.afterPullValue(e,g)))},pushExtent:function(a,b,c,d,e){b=this.checkCoordinate(b);c=this.checkCoordinate(c);d=this.checkCoordinate(d);e=this.checkCoordinate(e);if(null!==b&&null!==
d&&null!==c&&null!==e&&!(-180>b||180<b||-180>d||180<d||-90>c||90<c||-90>e||90<e||d<b||e<c)){var g=!0,f=this.portalItem.extent;f&&f.push&&2===f.length&&2===f[0].length&&2===f[1].length&&b===f[0][0]&&c===f[0][1]&&d===f[1][0]&&e===f[1][1]&&(g=!1);g&&(a.extent=b+","+c+","+d+","+e)}},pushString:function(a,b,c){if("undefined"!==typeof c&&null!==c&&"string"===typeof c&&(c=m.trim(c),0!==c.length)){var d=this.portalItem[b];if("undefined"===typeof d||c!==d)a[b]=c}},pushTags:function(a,b){if("undefined"!==typeof b&&
null!==b&&b.push&&0<b.length){var c=this.portalItem.tags,d=[],e=!0,g=0;"undefined"!==typeof c&&null!==c&&c.push?(h.forEach(c,function(a){d.push(a)}),h.forEach(b,function(a){h.some(c,function(b){return a===b})||d.push(a)}),d.length===c.length&&(h.forEach(d,function(a){h.some(c,function(b){return a===b})&&g++}),g===d.length&&(e=!1)),e&&(a.tags=d.join(","))):a.tags=b.join(",")}},pushValue:function(a,b,c){var d=null,e=null,g={};b=b[c];if("undefined"!==typeof b)if("extent"===c){for(e in b)b.hasOwnProperty(e)&&
this.pushValue(g,b,e);this.pushExtent(a,g.xmin,g.ymin,g.xmax,g.ymax)}else b.canPush&&b.isSelected&&(d=b.path,"undefined"===typeof d&&(d=null)),null!==d&&(d=this.findInputValue(c,d,"tags"===c),"undefined"!==typeof d&&null!==d&&("string"===typeof d?this.pushString(a,c,d):d.push&&0<d.length&&"tags"===c&&this.pushTags(a,d)))}});p("extend-esri")&&m.setObject("dijit.metadata.arcgis.portal.PortalItemTransformer",k,t);return k});