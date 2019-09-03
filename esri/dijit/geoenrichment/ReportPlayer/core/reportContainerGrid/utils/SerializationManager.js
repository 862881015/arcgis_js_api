// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/reportContainerGrid/utils/SerializationManager","dojo/_base/declare dojo/_base/lang dojo/dom-style dojo/when ../../supportClasses/DocumentOptions ../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder ../../supportClasses/templateJsonUtils/PageJsonUtil ../../supportClasses/templateJsonUtils/TemplateJsonModificationUtil ../../themes/ReportThemes esri/dijit/geoenrichment/utils/DomUtil esri/dijit/geoenrichment/utils/async/AsyncQueue".split(" "),
function(c,e,d,f,n,p,q,r,g,t,u){return c(null,{_wizard:null,_pendingJsonObj:null,constructor:function(a){this._wizard=a},notifyShown:function(){if(this._canApplyJson()&&this._pendingJsonObj){var a=this._pendingJsonObj;this._pendingJsonObj=null;d.set(this._wizard.domNode,"visibility","visible");return f(this.fromJson(a),function(){!this._pendingJsonObj&&this._wizard.onPendingDataApplied()}.bind(this))}},_canApplyJson:function(){return t.isNodeInLayout(this._wizard.domNode)},fromJson:function(a,b){b=
b||{};b.progressCallback=b.progressCallback||function(){};a=a&&a.sectionsTables&&a.sectionsTables.length?a:this.getEmptyPageJson();if(this._canApplyJson()){this._pendingJsonObj=null;d.set(this._wizard.domNode,"visibility","visible");this._wizard.clear();a.documentOptions&&r.adjustDocumentOptions(a);this._wizard.theme=a.theme&&a.theme.id!==g.GRAPHIC?a.theme:null;this._wizard.documentOptions=e.mixin(n.getDefaultDocumentOptions(),a.documentOptions);this._wizard.updateLayout();var h=this;if(b.renderSync)a.sectionsTables.forEach(function(a){h._wizard.createGridFromSectionTableJson(a)});
else{var c=(new Date).getTime(),k=[],l=new u,m=0;a.sectionsTables.forEach(function(c){l.add(function(){var d=(new Date).getTime(),e=h._wizard.createGridFromSectionTableJson(c);return f(e.getRenderPromise(),function(){m+=1/a.sectionsTables.length;b.progressCallback(m);k.push((new Date).getTime()-d)})},{delayBefore:0,delayAfter:0})});return l.getPromise().then(function(){console.log("ReportContainer.js BUILD PAGES \x3d\x3e "+((new Date).getTime()-c)+" \x3d\x3e "+k.join("; "))})}}else this._pendingJsonObj=
a,d.set(this._wizard.domNode,"visibility","hidden")},getEmptyPageJson:function(a){return q.getGraphicReportEmptyPageJson({numRows:3,numColumns:2,documentOptions:this._wizard.documentOptions,jsonToCopy:a?this._wizard.toJson():null})},addSectionFromJson:function(a,b){if(b.parentGrid)return b.parentGrid.insertFieldInfoToCell(b,p.createFieldInfoFromSection(a)),b.content},toJson:function(a){var b={};b.documentOptions=e.clone(this._wizard.documentOptions||{});b.sectionsTables=a&&void 0!==a.pageIndex?[this._wizard.getGrids()[a.pageIndex].toJson()]:
this._wizard.getGrids().map(function(a){return a.toJson()});(this._wizard.theme&&this._wizard.theme.id)!==g.GRAPHIC&&(b.theme=this._wizard.theme||this._wizard.viewModel.getCurrentTheme());return b}})});