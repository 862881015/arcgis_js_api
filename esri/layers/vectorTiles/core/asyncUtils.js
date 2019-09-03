// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/asyncUtils",["require","exports","./tsSupport/generatorHelper","./tsSupport/awaiterHelper","./promiseUtils"],function(k,b,d,h,f){Object.defineProperty(b,"__esModule",{value:!0});b.forEach=function(a,g,b){return h(this,void 0,void 0,function(){return d(this,function(c){switch(c.label){case 0:return[4,f.eachAlways(a.map(function(a,c){return g.apply(b,[a,c])}))];case 1:return c.sent(),[2]}})})};b.map=function(a,g,b){return h(this,void 0,void 0,function(){var c;return d(this,
function(e){switch(e.label){case 0:return[4,f.eachAlways(a.map(function(a,c){return g.apply(b,[a,c])}))];case 1:return c=e.sent(),[2,c.map(function(a){return a.value})]}})})};b.maybe=function(a){return a.then(function(a){return{ok:!0,value:a}}).catch(function(a){return{ok:!1,error:a}})};b.assertMaybe=function(a){if(!0===a.ok)return a.value;throw a.error;};b.cancellable=function(a){var b,d=function(a){return b=a};return f.create(function(b,e){a(d).then(b,e)},function(a){return b&&b.cancel(a)})}});