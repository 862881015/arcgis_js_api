// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/arcgis/resource/templates/BrowseGraphic.html":"\x3cdiv data-dojo-attach-point\x3d\"containerNode\"\x3e\r\n\r\n  \x3c!-- browse graphic --\x3e\r\n  \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/Element\"\r\n    data-dojo-props\x3d\"target:'graphOver',minOccurs:0,maxOccurs:'unbounded',label:'${i18nArcGIS.graphOver.caption}'\"\x3e\r\n    \r\n    \x3c!-- file --\x3e\r\n    \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/OpenElement\"\r\n      data-dojo-props\x3d\"target:'bgFileName',minOccurs:1,label:'${i18nArcGIS.graphOver.bgFileName}'\"\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- description --\x3e\r\n    \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/OpenElement\"\r\n      data-dojo-props\x3d\"target:'bgFileDesc',minOccurs:0,label:'${i18nArcGIS.graphOver.bgFileDesc}'\"\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- type --\x3e\r\n    \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/OpenElement\"\r\n      data-dojo-props\x3d\"target:'bgFileType',minOccurs:0,label:'${i18nArcGIS.graphOver.bgFileType}'\"\x3e\r\n    \x3c/div\x3e\r\n    \r\n  \x3c/div\x3e\r\n\x3c/div\x3e"}});
define("esri/dijit/metadata/types/arcgis/resource/BrowseGraphic","dojo/_base/declare dojo/_base/lang dojo/has ../../../../../kernel ../../../base/Descriptor dojo/text!./templates/BrowseGraphic.html".split(" "),function(a,b,c,d,e,f){a=a(e,{templateString:f});c("extend-esri")&&b.setObject("dijit.metadata.types.arcgis.resource.BrowseGraphic",a,d);return a});