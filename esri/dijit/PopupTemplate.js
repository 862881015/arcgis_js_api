// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/PopupTemplate","dojo/_base/declare dojo/_base/lang dojo/has dojo/dom-construct ../kernel ../InfoTemplate ../PopupInfo ./PopupRenderer".split(" "),function(c,d,e,f,g,h,k,l){c=c([h,k],{declaredClass:"esri.dijit.PopupTemplate","-chains-":{constructor:"manual"},chartTheme:null,constructor:function(a,b){d.mixin(this,b);this.initialize(a,b)},getTitle:function(a){var b;this.info&&(b=this.titleHasRelatedFields?"":this._getPopupValues(a,null,!0).title);return b||""},getContent:function(a){return this.info?
(new l({template:this,graphic:a,chartTheme:this.chartTheme},f.create("div"))).domNode:""}});e("extend-esri")&&d.setObject("dijit.PopupTemplate",c,g);return c});