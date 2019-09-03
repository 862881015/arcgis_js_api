// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/conversion/portalToEditorUtils/metadata/VariableScriptCollector",["esri/dijit/geoenrichment/utils/JsonXmlConverter","../variables/VariableUtil"],function(d,f){var c={getObjects:function(b,a){a=c._getVariableInfo(b,a);b=c._getScriptObjects(b);return{variables:a.variables,variableObjects:a.variableObjects,scriptObjects:b}},_getVariableInfo:function(b,a){var e=[];d.queryJson(b,a?/^(RawFields|Fields)$/:"Fields").forEach(function(b){e=e.concat(d.queryJson(b,
/^(Field|PortalField)$/))});var c=[],g=[];e.forEach(function(a){c.push(a.attributes.MapTo);(a=f.fieldTagToVariable(a,b.attributes.Name))&&g.push(a)});return{variables:c,variableObjects:g}},_getScriptObjects:function(b){var a=d.queryJson(b,"CalculatedFields")[0];return(a&&d.queryJson(a,"Script")||[]).map(function(a){return f.scriptTagToVariable(a,b.attributes.Name)})}};return c});