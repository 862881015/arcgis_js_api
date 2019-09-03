// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/requests/UniversalClient","dojo/_base/declare dojo/_base/lang dojo/_base/url dojo/Deferred dojo/request/xhr dojo/io-query dojo/sniff dojo/when esri/kernel esri/config esri/lang esri/urlUtils ../UrlUtil ./BinaryData ./FileContent ./MultipartDataBuilder ./ErrorUtil".split(" "),function(w,r,I,t,x,y,z,A,l,u,B,m,p,C,D,E,q){function F(a,b){if(b)this.reject(b);else{b=a.xhr;var c=b.getResponseHeader&&b.getResponseHeader("Content-Type");a.status=b.status;a.data=new C(b.response||
b.responseBody||b.responseText,c);this.resolve(a)}}var G=0,H=z("safari"),n=w(null,{constructor:function(a){"string"===typeof a?this.url=a:"object"===typeof a&&r.mixin(this,a)},url:null,preventCache:null,usePost:!1,timeout:0,multipartThreshold:0,useCommonAuth:!1,useProxy:!1,allowSSL:null,send:function(a,b){return this.sendUrlRequest(this.prepareUrlRequest(a,b),"UniversalClient.send")},prepareUrlRequest:function(a,b){"string"===typeof a?a={urlSuffix:a}:a||(a={});b||(b={});var c=a.url||this.url;a=a.urlSuffix;
c||(c=a,a=null);if(!c)throw Error("URL is missing.");var d=m.urlToObject(c),c=p.combine(d.path,a);a=d.query||{};"object"===typeof b.content&&(a=r.mixin(a,b.content));d=b.requireSSL;!0!==d&&!1===this.allowSSL&&(d=!1);!1!==d&&!0===this.allowSSL&&/^https/i.test(window.location.protocol)&&(d=!0);if(l.id){var e=l.id.findCredential(c);!e&&this.useCommonAuth&&(e="string"==typeof this.useCommonAuth?l.id.findCredential(this.useCommonAuth):l.id.credentials[0]);e&&(a.token||!1===a.token||(a.token=e.token),e.ssl&&
!1!==d&&(d=!0))}!0===d&&(c=p.toHttpsUrl(c));!1===a.token&&delete a.token;var g=b.handleAs||"json";"json"===g&&(a.f="json");var e=(b.sendAs||(b.usePost||this.usePost||a.token?"post":"get")).toLowerCase(),d="multipart"==e?!0:b.sendAs||b.sizeLimit?!1:null,v=0,f;for(f in a){var k=a[f];k instanceof D?d=!0:("object"==typeof k&&(k=a[f]=JSON.stringify(k)),!d&&0<this.multipartThreshold&&(v+=f.length+(k?k.length:0)+2))}!1!==d&&0<this.multipartThreshold&&v>this.multipartThreshold&&(d=!0);if(b.useProxy||!m.hasSameOrigin(c,
window.location.href)&&this.useProxy&&!b.hasOwnProperty("useProxy")){var h=p.getProxyUrl();h&&(c=h+"?"+c)}else m.getProxyRule(c)&&(c=m.getProxyRule(c).proxyUrl+"?"+c);f=(f=b.hasOwnProperty("preventCache")?b.preventCache:this.preventCache)||null===f&&h||H?"_ts\x3d"+(new Date).getTime()+G++:"";h={handleAs:g};if(g=Number(B.isDefined(b.timeout)?b.timeout:this.timeout))h.timeout=g;g="get"!=e||d;e=d?null:y.objectToQuery(a);g||(g=e.length+c.length+f.length+1>=u.defaults.io.postLength);h.method=g?"POST":
"GET";h.headers={"X-Requested-With":null};h.headers["Content-Type"]="undefined"!=typeof b.contentType?b.contentType:"application/x-www-form-urlencoded; charset\x3dutf-8";d?(d=new E,d.addVariables(a),d.build(h)):g?h.data=e:e&&(c+="?"+e,f&&(c+="\x26"+f),f=null);!e&&f&&(c+="?"+f);return{url:c,options:h,sizeLimit:b.sizeLimit}},sendUrlRequest:function(a,b){var c="string"===typeof a.options.data?a.options.data.length:null;if(a.sizeLimit&&c&&("function"===typeof a.sizeLimit?a.sizeLimit(c):c>a.sizeLimit))return(new t).reject(Error("SIZE_LIMIT_EXCEEDED"));
b=b||"UniversalClient.sendUrlRequest";var d=a.deferred||new t;if(c="bin"==a.options.handleAs)a.options.handleAs="blob";var e=x(a.url,a.options,!0);c&&(e.handleResponse=F);var g=this;e.then(function(c){c="json"==a.options.handleAs&&c&&q.parseError(c)||c;if(c instanceof Error){if(!0===g.useCommonAuth&&498===c.code)var e=n.handleInvalidTokenError(c);A(e).always(function(){d.reject(c)})}else d.resolve(g._makeResponse(b,c))},function(a){d.reject(q.makeError(a))});return d.promise},requestToUrl:function(a){if(a.options.headers&&
a.options.headers["Content-Type"]&&0==a.options.headers["Content-Type"].indexOf("multipart/form-data"))return null;var b=a.url;if(a=a.options.data){if(b.length+a.length>=u.defaults.io.postLength)return null;b+="?"+a}return b},_makeResponse:function(a,b){return b}});n.makeError=q.makeError;n.handleInvalidTokenError=function(a){};return n});