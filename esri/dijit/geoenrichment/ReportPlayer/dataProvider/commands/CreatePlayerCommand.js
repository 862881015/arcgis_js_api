// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/commands/CreatePlayerCommand","dojo/_base/declare dojo/promise/all dojo/when dijit/Dialog ./createHTML/HTMLStringBuilder esri/dijit/geoenrichment/utils/FileUtil ./mapToImage/MapToImageUtil ../../PlayerCommands ../supportClasses/GEUtil dojo/i18n!esri/nls/jsapi ../../_devConfig".split(" "),function(l,u,e,m,n,h,p,q,r,f,a){f=f.geoenrichment.dijit.ReportPlayer.ReportPlayer;var t={buildHTMLPageString:function(d,c,e){d=c.config.createPlayerCommand.prettifyDataJson||
a.createPlayerCommand.saveDataJsonAsTextFile?JSON.stringify(d,void 0,4):JSON.stringify(d);a.createPlayerCommand.saveDataJsonAsTextFile&&h.saveTextFile(d,"reportDataJson");var f=[];f.push('html, body, #layoutNode { padding: 0px; margin: 0px; height: 100%; overflow: hidden; font-size: 13px; font-family: "Avenir Next"; }');var b=[];a.createPlayerCommand.useTestBuild?(b.push({src:a.createPlayerCommand.configUrl}),b.push({"data-dojo-config":"baseUrl: '"+a.createPlayerCommand.baseUrl+"', isDebug: 1, waitSeconds: 60",
src:a.createPlayerCommand.mainUrl})):b.push({src:c.config.playerSourceRootUrl});return n.composeHtmlStringFromParts({reportTitle:c.getReportTitle(),links:[a.createPlayerCommand.useTestBuild?a.createPlayerCommand.esriDijitCssUrl:c.config.esriDijitCssUrl,a.createPlayerCommand.useTestBuild?a.createPlayerCommand.esriCssUrl:c.config.esriCssUrl],cssFiles:f,scripts:b.concat(['require(["require", "esri/dijit/geoenrichment/nlsFix"],\nfunction (relativeRequire, nlsFix) {\n   nlsFix.load(null, relativeRequire);\n   require([\n       "dojo/when",\n       "dojo/sniff",\n       "esri/dijit/geoenrichment/ReportPlayer/ReportPlayer",\n       "esri/dijit/geoenrichment/ReportPlayer/DataProviderGE",\n       "esri/dijit/geoenrichment/ReportPlayer/PlayerViewModes",\n       "esri/dijit/geoenrichment/ReportPlayer/PlayerCommands",\n       "esri/dijit/geoenrichment/utils/UrlUtil",\n       "dojo/domReady!"\n   ],\n   function (\n       when,\n       has,\n       ReportPlayer,\n       DataProviderGE,\n       PlayerViewModes,\n       PlayerCommands,\n       UrlUtil\n   ) {\n       esriConfig.defaults.io.proxyUrl \x3d UrlUtil.getVariableValue(window.location.href, "proxy") || null;\n       var reportDataJson \x3d '+
d+';\n       var dataProvider \x3d new DataProviderGE();\n       dataProvider.registerCommand(PlayerCommands.PRINT);\n       if (!has("ie") \x26\x26 !has("trident"))\n           dataProvider.registerCommand(PlayerCommands.IMAGE);\n       var player \x3d new ReportPlayer({\n           dataProvider: dataProvider,\n           viewMode: UrlUtil.getVariableValue(window.location.href, "viewMode") || PlayerViewModes.FULL_PAGES,\n           enableDataDrilling: '+e+",\n           onError: function(e) {\n               console.log(e);\n           }\n       }).placeAt(layoutNode);\n       player.reportDataFromJson(reportDataJson);\n   });\n});"]),
contentString:'\x3cdiv id\x3d"layoutNode"\x3e\x3c/div\x3e'})}};return l(null,{id:q.DYNAMIC_HTML,label:f.createDynamicHTMLCommandLabel,errorMessage:f.exportInfographicError,execute:function(d,c){function a(a){var b=t.buildHTMLPageString(a,d,k);g=b;var e=d.getReportTitle()+".html";return b&&!c.returnAsHtmlText&&f._confirmSaveFile(e,function(){h.saveTextFile(b,e,"text/html")})}c=c||{};var f=this,b=c.printableContainer,k=b.allowDataDrilling(),g;return e(p.collectMapsAsImages(d,{saveImagesAsDataUrl:!0}),
function(b){return e(d.reportDataToJson({allowDataDrilling:k,mapImageInfos:b}),function(b){if(c.returnReportDataJson)g=b;else return e(a(b),function(){c.creditsTaskID&&r.consumeCredits(d.getReportData().config.geoenrichmentUrl,c.creditsTaskID)})})}).otherwise(this._handleError.bind(this)).always(function(){return e(b.stop(),function(){return g})})},_handleError:function(a){console.log(a);(new m({title:"Error",content:this.errorMessage})).show()},_confirmSaveFile:function(a,c){return c()}})});