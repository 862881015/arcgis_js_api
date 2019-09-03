// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/tableViewRendering/TableViewRenderer","dojo/_base/declare dojo/_base/lang dijit/Destroyable esri/dijit/geoenrichment/ReportPlayer/config ../../supportClasses/TableUtil esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ViewModes ../../sections/sectionUtils/SectionJsonUtil ../utils/builder/utils/ChartDataUtil ../../grid/coreUtils/GridDataUtil dojo/i18n!esri/nls/jsapi".split(" "),function(r,t,u,v,w,x,y,z,n,k){k=k.geoenrichment.dijit.ReportPlayer.ChartContainer;
var A=/_P$/i,C={buildSectionJsonFromSeriesItems:function(a,h,b,f,g,B){function l(d,e,p,c){d=a[d-1].data[e-1];e=A.test(d.point.fieldInfo.name);if(d.isUnavailableData)return p?v.tables.showUnavailableData?k.unavailableDataShort:"":0;c=void 0===c?d[d.valueProp]:c;return p?z.formatNumber(c,h,e,b):c}a=a.map(function(a){a=t.mixin({},a);a.data=a.data.slice();a.data.sort(function(a,d){return a.unsortedIndex-d.unsortedIndex});return a});var q=a[0].data.length+1,m=w.createTable({numColumns:a.length+1,numRows:q,
width:g,height:B,processTableCell:function(a,e,b,c,f){a.style.fields[e].verticalAlign="middle";a.style.fields[e].horizontalPadding=5;a.style.fields[e].fontSize=Math.round(15-4*q/50)}});m.data.data.forEach(function(d,e){m.data.columns.forEach(function(b,c){if(0===e)d[b.field]=0===c?h.xAxis.title||"":1===c?f?k.thisArea:1<a.length?a[c-1].name||"":h.yAxis.title||"":a[c-1].name||"";else if(0===c){b=b.field;var g;g=0===e?void 0:a[0].data[e-1].name||"";d[b]=g}else g=l(c,e,!1),c=l(c,e,!0),n.setNumericDataValue(g,
d,b.field),d[b.field]=c})});return{sectionJson:y.wrapInDetailsSectionJson(m),numberFormatFunction:function(a,b){return l(b.column.index,b.gridData.index,!0,a)}}}};return r(u,{_tableSection:null,_sorting:null,renderTableForChart:function(a){var h=this;this._destroyTable();if(a.chartSeries&&a.chartSeries.length){var b={"class":"chartContainer_tableSection"};b.initialWidth=a.width;var f=C.buildSectionJsonFromSeriesItems(a.chartSeries,a.visualProperties,a.chartType,a.hasComparison,a.width,a.height);b.json=
f.sectionJson;a.showAnimation||(f.numberFormatFunction=null);b.viewModel=a.viewModel;b.theme=a.theme;b.tableClass="chartContainerChartTable";b.hasFixedLayout=!1;b.parentWidget=a.parentWidget;b.tableParams={enableNumberAnimation:a.showAnimation,_postCreateFieldCell:function(a){if(f.numberFormatFunction){var b=f.numberFormatFunction;a.setNumberValue(n.getNumericCellValue(a),function(f){return b(f,a)});setTimeout(function(){f.numberFormatFunction=null})}},onSortingChanged:function(a){h._sorting=a}};
this._tableSection=a.viewModel.layoutBuilder.createElement("section",b,a.tableNode);this._tableSection.setResizedHeight(a.height);this._tableSection.setViewMode(this._viewMode||x.PREVIEW_VALUES);this._tableSection.getTables()[0].setSorting(this._sorting)}},_viewMode:null,setViewMode:function(a){this._viewMode!==a&&(this._viewMode=a,this._tableSection&&this._tableSection.setViewMode(a))},destroyTable:function(){this._destroyTable()},_destroyTable:function(){this._tableSection&&this._tableSection.destroy();
this._tableSection=null},destroy:function(){this._destroyTable();this.inherited(arguments)}})});