// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/_ChartJsonCleaner",["dojo/_base/lang","./ChartTypes","./ChartDataLabelsTypes","../legends/ChartLegendTypes","../legends/ChartLegendPlacements"],function(h,b,e,f,d){var g={cleanUpJson:function(a,c){c=c||{};b.isRoundChart(a.type)&&1<a.seriesItems.length&&(a.seriesItems.length=1,delete a.visualProperties.backgroundImageData);b.isConditionalStylingEnabled(a.type)||delete a.visualProperties.conditionalStyling;b.isSortingEnabled(a.type,a.seriesItems.length)||
delete a.visualProperties.sorting;b.isComparisonEnabled(a.type)<a.seriesItems.length&&delete a.comparisonInfo;b.isStackEnabled(a.type,a.seriesItems.length)||delete a.visualProperties.isStacked;b.isRenderInOppositeDirectionsEnabled(a.type,a.seriesItems.length)||delete a.visualProperties.renderColumnBarsInOppositeDirections;b.isShowDataAsWeightEnabled(a.type)||delete a.visualProperties.yAxis.showValuesAsWeightsInSeries;a.visualProperties.legend.type!==f.SERIES||b.isSeriesLegendEnabled(a.type,a.seriesItems.length)||
(a.visualProperties.legend.series.placement=d.NONE);2===a.seriesItems.length&&a.comparisonInfo&&(a.visualProperties.showColumnBarBackground=!1,a.visualProperties.isStacked=!1);a.visualProperties.renderColumnBarsInOppositeDirections&&a.visualProperties.isStacked&&(a.visualProperties.renderColumnBarsInOppositeDirections=!0,a.visualProperties.isStacked=!1);if(a.visualProperties.isStacked||a.visualProperties.renderColumnBarsInOppositeDirections)a.visualProperties.yAxis.baseLineValue=0;c.applyChartTypeSpecificSettings&&
g._applyChartTypeSpecificSettings(a,c.isGraphicStyle);a.type===b.GAUGE&&(c=a.seriesItems[0]&&a.seriesItems[0].points&&a.seriesItems[0].points[0],"p"===(c&&c.fieldInfo&&c.fieldInfo.statefulName&&c.fieldInfo.statefulName.charAt(0))&&(delete a.visualProperties.gaugeRangeMin,delete a.visualProperties.gaugeRangeMax))},_applyChartTypeSpecificSettings:function(a,c){a.visualProperties.legend.series.hasBorder=!c;a.visualProperties.legend.type===f.SERIES&&b.isSeriesLegendEnabled(a.type,a.seriesItems.length)&&
(a.visualProperties.legend.series.placement=!c||1<a.seriesItems.length||a.type===b.PIE||a.type===b.DONUT?d.RIGHT:d.NONE);a.visualProperties.dataLabels=a.type===b.RING?e.LABEL_VALUE:e.NONE}};return g});