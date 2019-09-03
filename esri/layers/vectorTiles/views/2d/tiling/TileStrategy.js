// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/tiling/TileStrategy",["require","exports","../../../core/tsSupport/extendsHelper","./enums","./TileKey"],function(z,A,B,m,n){var h=new n(0,0,0,0),f=new Map,g=[],k=[];return function(){function d(a){this._previousResolution=Number.POSITIVE_INFINITY;this.cachePolicy="keep";this.tileIndex=new Map;this.tiles=[];this.acquireTile=a.acquireTile;this.releaseTile=a.releaseTile;this.tileInfoView=a.tileInfoView;a.cachePolicy&&(this.cachePolicy=a.cachePolicy)}d.prototype.destroy=
function(){this.tileIndex.clear()};d.prototype.update=function(a){var p=this,b=this.tileIndex,d=this.tileInfoView.getTileCoverage(a.state);if(d){var e=d.spans,q=d.lodInfo,r=q.level,c=a.state.resolution,t=!a.stationary&&c>this._previousResolution;this._previousResolution=c;b.forEach(function(a){return a.visible=!0});this.tiles.length=0;f.clear();var v=0,w=0;if(0<e.length)for(var u=0;u<e.length;u++){a=e[u];for(var n=a.row,x=a.colTo,l=a.colFrom;l<=x;l++)v++,a=h.set(r,n,q.normalizeCol(l),q.getWorldForColumn(l)).id,
b.has(a)?(c=b.get(a),c.status!==m.TileStatus.INITIALIZED&&w++,c.attached?f.set(a,c):c.attached||t||this._addParentTile(a,f)):(c=this.acquireTile(h),this.tileIndex.set(a,c),t||this._addParentTile(a,f))}var y=w===v;k.length=0;g.length=0;b.forEach(function(a,b){h.set(b);if(!f.has(b)){var c=p.tileInfoView.intersects(d,h);!c||!t&&y?"purge"===p.cachePolicy&&a.status!==m.TileStatus.MODIFIED&&a.status!==m.TileStatus.READY?g.push(b):(h.level>r||!c)&&g.push(b):a.attached?k.push(b):h.level>r&&g.push(b)}});for(e=
0;e<k.length;e++)a=k[e],(c=b.get(a))&&c.attached&&f.set(a,c);for(e=0;e<g.length;e++)a=g[e],c=b.get(a),this.releaseTile(c),b["delete"](a);f.forEach(function(a){return p.tiles.push(a)});b.forEach(function(a){f.has(a.key.id)||(a.visible=!1)});k.length=0;g.length=0;f.clear()}};d.prototype.clear=function(){var a=this,d=this.tileIndex;d.forEach(function(b){a.releaseTile(b)});d.clear()};d.prototype._addParentTile=function(a,d){for(var b=null;;){a=this.tileInfoView.getTileParentId(a);if(!a)break;if(this.tileIndex.has(a)&&
(b=this.tileIndex.get(a))&&b.attached){d.has(b.key.id)||d.set(b.key.id,b);break}}};return d}()});