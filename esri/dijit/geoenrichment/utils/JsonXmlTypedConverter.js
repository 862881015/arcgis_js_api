// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/JsonXmlTypedConverter",["dojo/_base/declare","./RegExpUtil"],function(n,l){return n(null,{parseJson:function(d,e){function g(a,b){c+="\x3c"+b+' type\x3d"object"\x3e';for(var m in a)h(a[m],m);c+="\x3c/"+b+"\x3e"}function h(a,b){"string"===typeof a?c+="\x3c"+b+' type\x3d"string"\x3e'+l.encodeXML(a,!1)+"\x3c/"+b+"\x3e":"number"===typeof a?c+="\x3c"+b+' type\x3d"number"\x3e'+a+"\x3c/"+b+"\x3e":"boolean"===typeof a?c+="\x3c"+b+' type\x3d"boolean"\x3e'+a+"\x3c/"+b+
"\x3e":Array.isArray(a)?k(a,b):a&&"object"===typeof a&&g(a,b)}function k(a,b){c+="\x3c"+b+' type\x3d"array"\x3e';a.forEach(function(a){h(a,"item")});c+="\x3c/"+b+"\x3e"}var f=e&&e.rootName||"root",c="";e&&e.addDocumentOptions&&(c+='\x3c?xml version\x3d"1.0" encoding\x3d"utf-8"?\x3e');g(d,f);return c=decodeURIComponent(encodeURIComponent(c).replace("%19",""))},parseXml:function(d){function e(c,a){if(a.children)for(var b=0,d=a.children.length;b<d;b++){var e=a.children[b],f=g(e);void 0!==f&&(c[e.nodeName]=
f)}return c}function g(c){var a;a:{if(c.attributes)for(a=0;a<c.attributes.length;a++){var b=c.attributes[a];if("type"===b.name){a=b.value;break a}}a=null}if(c.nodeName&&a)switch(a){case "string":return l.decodeXML(c.childNodes[0].nodeValue);case "number":return Number(c.childNodes[0].nodeValue);case "boolean":return"true"===c.childNodes[0].nodeValue;case "object":return e({},c);case "array":a=[];if(c.children)for(var b=0,d=c.children.length;b<d;b++)a[b]=g(c.children[b]);return a}}var h={},k;d=(new DOMParser).parseFromString(d,
"text/xml").childNodes;for(var f=0;f<d.length;f++)if(1===d[f].nodeType){k=d[f];break}k&&e(h,k);return h}})()});