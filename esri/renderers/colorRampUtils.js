// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/renderers/colorRampUtils","dojo/_base/lang dojo/_base/array dojo/store/Memory ../tasks/AlgorithmicColorRamp ../tasks/MultipartColorRamp ../Color ./colorUtils".split(" "),function(y,h,z,A,B,r,f){function t(a,b,c){if(a){b=b||u;c=c||l;var d=null,f=a.declaredClass,m,k;if((m="string"===typeof a?a:a.name)&&h.some(c,function(a){if(a.name===m)return d=a.id,!0})&&d)return d;"esri.tasks.AlgorithmicColorRamp"===f?h.some(b,function(b){if(g(a.fromColor.toRgb(),b.fromColor)&&g(a.toColor.toRgb(),b.toColor))return d=
b.id,!0},this):"esri.tasks.MultipartColorRamp"===f&&h.some(b,function(b){if(a.colorRamps&&b.colorRamps&&a.colorRamps.length===b.colorRamps.length&&(k=a.colorRamps,!h.some(b.colorRamps,function(a,b){if(!g(k[b].fromColor.toRgb(),a.fromColor)||!g(k[b].toColor.toRgb(),a.toColor))return!0},this))){if(d)return!0;d=b.id}},this);return d}}function v(a){var b=new A,c=a.algorithm;b.fromColor=r.toDojoColor(a.fromColor);b.toColor=r.toDojoColor(a.toColor);"esriCIELabAlgorithm"===c?b.algorithm="cie-lab":"esriHSVAlgorithm"===
c?b.algorithm="hsv":"esriLabLChAlgorithm"===c&&(b.algorithm="lab-lch");return b}function g(a,b){return a&&b&&a.length&&b.length&&a.length===b.length?!h.some(a,function(a,d){if(a>b[d]+2||a<b[d]-2)return!0}):!1}function w(a,b,c){a=f.toLAB(a);b=f.toLAB(b);return f.toRGB({l:a.l*(1-c)+c*b.l,a:a.a*(1-c)+c*b.a,b:a.b*(1-c)+c*b.b})}var x={},u=[{id:"none",selected:!0},{id:"aspect_predefined",type:"multipart",colorRamps:[{fromColor:[190,190,190],toColor:[255,45,8]},{fromColor:[255,45,8],toColor:[255,181,61]},
{fromColor:[255,181,61],toColor:[255,254,52]},{fromColor:[255,254,52],toColor:[0,251,50]},{fromColor:[0,251,50],toColor:[255,254,52]},{fromColor:[0,253,255],toColor:[0,181,255]},{fromColor:[0,181,255],toColor:[26,35,253]},{fromColor:[26,35,253],toColor:[255,57,251]},{fromColor:[255,57,251],toColor:[255,45,8]}]},{id:"blackToWhite_predefined",fromColor:[0,0,0],toColor:[255,255,255]},{id:"blueBright_predefined",fromColor:[204,204,255],toColor:[0,0,224]},{id:"blueLightToDark_predefined",fromColor:[211,
229,232],toColor:[46,100,140]},{id:"blueGreenBright_predefined",fromColor:[203,245,234],toColor:[48,207,146]},{id:"blueGreenLightToDark_predefined",fromColor:[216,242,237],toColor:[21,79,74]},{id:"brownLightToDark_predefined",fromColor:[240,236,170],toColor:[102,72,48]},{id:"brownToBlueGreenDivergingBright_predefined",type:"multipart",colorRamps:[{fromColor:[156,85,31],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[33,130,145]}]},{id:"brownToBlueGreenDivergingDark_predefined",type:"multipart",
colorRamps:[{fromColor:[110,70,45],toColor:[204,204,102]},{fromColor:[204,204,102],toColor:[48,100,102]}]},{id:"coefficientBias_predefined",fromColor:[214,214,255],toColor:[0,57,148]},{id:"coldToHotDiverging_predefined",type:"multipart",colorRamps:[{fromColor:[69,117,181],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[214,47,39]}]},{id:"conditionNumber_predefined",type:"multipart",colorRamps:[{fromColor:[0,97,0],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[255,34,0]}]},{id:"cyanToPurple_predefined",
type:"multipart",colorRamps:[{fromColor:[0,245,245],toColor:[0,0,245]},{fromColor:[0,0,245],toColor:[245,0,245]}]},{id:"cyanLightToBlueDark_predefined",type:"multipart",colorRamps:[{fromColor:[182,237,240],toColor:[31,131,224]},{fromColor:[31,131,224],toColor:[9,9,145]}]},{id:"distance_predefined",fromColor:[255,200,0],toColor:[0,0,255]},{id:"elevation1_predefined",type:"multipart",colorRamps:[{fromColor:[175,240,233],toColor:[255,255,179]},{fromColor:[255,255,179],toColor:[0,128,64]},{fromColor:[0,
128,64],toColor:[252,186,3]},{fromColor:[252,186,3],toColor:[128,0,0]},{fromColor:[120,0,0],toColor:[105,48,13]},{fromColor:[105,48,13],toColor:[171,171,171]},{fromColor:[171,171,171],toColor:[255,252,255]}]},{id:"elevation2_predefined",type:"multipart",colorRamps:[{fromColor:[118,219,211],toColor:[255,255,199]},{fromColor:[255,255,199],toColor:[255,255,128]},{fromColor:[255,255,128],toColor:[217,194,121]},{fromColor:[217,194,121],toColor:[135,96,38]},{fromColor:[135,96,38],toColor:[150,150,181]},
{fromColor:[150,150,181],toColor:[181,150,181]},{fromColor:[181,150,181],toColor:[255,252,255]}]},{id:"errors_predefined",fromColor:[255,235,214],toColor:[196,10,10]},{id:"grayLightToDark_predefined",fromColor:[219,219,219],toColor:[69,69,69]},{id:"greenBright_predefined",fromColor:[204,255,204],toColor:[14,204,14]},{id:"greenLightToDark_predefined",fromColor:[220,245,233],toColor:[34,102,51]},{id:"greenToBlue_predefined",type:"multipart",colorRamps:[{fromColor:[32,204,16],toColor:[0,242,242]},{fromColor:[0,
242,242],toColor:[2,33,227]}]},{id:"orangeBright_predefined",fromColor:[255,235,204],toColor:[240,118,5]},{id:"orangeLightToDark_predefined",fromColor:[250,233,212],toColor:[171,65,36]},{id:"partialSpectrum_predefined",type:"multipart",colorRamps:[{fromColor:[242,241,162],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[255,0,0]},{fromColor:[252,3,69],toColor:[176,7,237]},{fromColor:[176,7,237],toColor:[2,29,173]}]},{id:"partialSpectrum1Diverging_predefined",type:"multipart",colorRamps:[{fromColor:[135,
38,38],toColor:[240,149,12]},{fromColor:[240,149,12],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[74,80,181]},{fromColor:[74,80,181],toColor:[39,32,122]}]},{id:"partialSpectrum2Diverging_predefined",type:"multipart",colorRamps:[{fromColor:[115,77,42],toColor:[201,137,52]},{fromColor:[201,137,52],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[91,63,176]},{fromColor:[91,63,176],toColor:[81,13,97]}]},{id:"pinkToYellowGreenDivergingBright_predefined",type:"multipart",colorRamps:[{fromColor:[158,
30,113],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[99,110,45]}]},{id:"pinkToYellowGreenDivergingDark_predefined",type:"multipart",colorRamps:[{fromColor:[97,47,73],toColor:[204,204,102]},{fromColor:[204,204,102],toColor:[22,59,15]}]},{id:"precipitation_predefined",type:"multipart",colorRamps:[{fromColor:[194,82,60],toColor:[237,161,19]},{fromColor:[237,161,19],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[0,219,0]},{fromColor:[0,219,0],toColor:[32,153,143]},{fromColor:[32,153,
143],toColor:[11,44,122]}]},{id:"prediction_predefined",type:"multipart",colorRamps:[{fromColor:[40,146,199],toColor:[250,250,100]},{fromColor:[250,250,100],toColor:[232,16,20]}]},{id:"purpleBright_predefined",fromColor:[255,204,255],toColor:[199,0,199]},{id:"purpleToGreenDivergingBright_predefined",type:"multipart",colorRamps:[{fromColor:[77,32,150],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[20,122,11]}]},{id:"purpleToGreenDivergingDark_predefined",type:"multipart",colorRamps:[{fromColor:[67,
14,89],toColor:[204,204,102]},{fromColor:[204,204,102],toColor:[24,79,15]}]},{id:"purpleBlueBright_predefined",fromColor:[223,184,230],toColor:[112,12,242]},{id:"purpleBlueLightToDark_predefined",fromColor:[229,213,242],toColor:[93,44,112]},{id:"purpleRedBright_predefined",fromColor:[255,204,225],toColor:[199,0,99]},{id:"purpleRedLightToDark_predefined",fromColor:[250,215,246],toColor:[143,17,57]},{id:"redBright_predefined",fromColor:[255,204,204],toColor:[219,0,0]},{id:"redLightToDark_predefined",
fromColor:[255,224,224],toColor:[143,10,10]},{id:"redToBlueDivergingBright_predefined",type:"multipart",colorRamps:[{fromColor:[196,69,57],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[48,95,207]}]},{id:"redToBlueDivergingDark_predefined",type:"multipart",colorRamps:[{fromColor:[107,13,13],toColor:[204,204,102]},{fromColor:[204,204,102],toColor:[13,53,97]}]},{id:"redToGreen_predefined",type:"multipart",colorRamps:[{fromColor:[245,0,0],toColor:[245,245,0]},{fromColor:[245,245,0],toColor:[0,
245,0]}]},{id:"redToGreenDivergingBright_predefined",type:"multipart",colorRamps:[{fromColor:[186,20,20],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[54,145,33]}]},{id:"redToGreenDivergingDark_predefined",type:"multipart",colorRamps:[{fromColor:[97,21,13],toColor:[204,204,102]},{fromColor:[204,204,102],toColor:[16,69,16]}]},{id:"slope_predefined",type:"multipart",colorRamps:[{fromColor:[56,168,0],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[255,0,0]}]},{id:"spectrumFullBright_predefined",
type:"multipart",colorRamps:[{fromColor:[255,0,0],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[0,255,255]},{fromColor:[0,255,255],toColor:[0,0,255]}]},{id:"spectrumFullDark_predefined",type:"multipart",colorRamps:[{fromColor:[153,0,0],toColor:[153,153,0]},{fromColor:[153,153,0],toColor:[0,153,153]},{fromColor:[0,153,153],toColor:[0,0,153]}]},{id:"spectrumFullLight_predefined",type:"multipart",colorRamps:[{fromColor:[255,153,153],toColor:[255,255,153]},{fromColor:[255,255,153],toColor:[153,
255,255]},{fromColor:[153,255,255],toColor:[153,153,255]}]},{id:"surface_predefined",type:"multipart",colorRamps:[{fromColor:[112,153,89],toColor:[242,238,162]},{fromColor:[242,238,162],toColor:[242,206,133]},{fromColor:[242,206,133],toColor:[194,140,124]},{fromColor:[194,140,124],toColor:[255,242,255]}]},{id:"temperature_predefined",type:"multipart",colorRamps:[{fromColor:[255,252,255],toColor:[255,0,255]},{fromColor:[255,0,255],toColor:[0,0,255]},{fromColor:[0,0,255],toColor:[0,255,255]},{fromColor:[0,
255,255],toColor:[0,255,0]},{fromColor:[0,255,0],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[255,128,0]},{fromColor:[255,128,0],toColor:[128,0,0]}]},{id:"whiteToBlack_predefined",fromColor:[255,255,255],toColor:[0,0,0]},{id:"yellowToDarkRed_predefined",type:"multipart",colorRamps:[{fromColor:[255,255,128],toColor:[242,167,46]},{fromColor:[242,167,46],toColor:[107,0,0]}]},{id:"yellowToGreenToDarkBlue_predefined",type:"multipart",colorRamps:[{fromColor:[255,255,128],toColor:[56,224,9]},{fromColor:[56,
224,9],toColor:[26,147,171]},{fromColor:[26,147,171],toColor:[12,16,120]}]},{id:"yellowToRed_predefined",fromColor:[245,245,0],toColor:[255,0,0]},{id:"yellowGreenBright_predefined",fromColor:[236,252,204],toColor:[157,204,16]},{id:"yellowGreenLightToDark_predefined",fromColor:[215,240,175],toColor:[96,107,45]}],l=[{name:"Aspect",id:"aspect_predefined"},{name:"Black to White",id:"blackToWhite_predefined"},{name:"Blue Bright",id:"blueBright_predefined"},{name:"Blue Light to Dark",id:"blueLightToDark_predefined"},
{name:"Blue-Green Bright",id:"blueGreenBright_predefined"},{name:"Blue-Green Light to Dark",id:"blueGreenLightToDark_predefined"},{name:"Brown Light to Dark",id:"brownLightToDark_predefined"},{name:"Brown to Blue Green Diverging, Bright",id:"brownToBlueGreenDivergingBright_predefined"},{name:"Brown to Blue Green Diverging, Dark",id:"brownToBlueGreenDivergingDark_predefined"},{name:"Coefficient Bias",id:"coefficientBias_predefined"},{name:"Cold to Hot Diverging",id:"coldToHotDiverging_predefined"},
{name:"Condition Number",id:"conditionNumber_predefined"},{name:"Cyan to Purple",id:"cyanToPurple_predefined"},{name:"Cyan-Light to Blue-Dark",id:"cyanLightToBlueDark_predefined"},{name:"Distance",id:"distance_predefined"},{id:"elevation1_predefined",name:"Elevation #1"},{id:"elevation2_predefined",name:"Elevation #2"},{id:"errors_predefined",name:"Errors"},{id:"grayLightToDark_predefined",name:"Gray Light to Dark"},{id:"greenBright_predefined",name:"Green Bright"},{id:"greenLightToDark_predefined",
name:"Green Light to Dark"},{name:"Green to Blue",id:"greenToBlue_predefined"},{name:"Orange Bright",id:"orangeBright_predefined"},{name:"Orange Light to Dark",id:"orangeLightToDark_predefined"},{id:"partialSpectrum_predefined",name:"Partial Spectrum"},{id:"partialSpectrum1Diverging_predefined",name:"Partial Spectrum 1 Diverging",type:"multipart"},{id:"partialSpectrum2Diverging_predefined",name:"Partial Spectrum 2 Diverging"},{name:"Pink to YellowGreen Diverging, Bright",id:"pinkToYellowGreenDivergingBright_predefined"},
{name:"Pink to YellowGreen Diverging, Dark",id:"pinkToYellowGreenDivergingDark_predefined"},{id:"precipitation_predefined",name:"Precipitation"},{id:"prediction_predefined",name:"Prediction"},{name:"Purple Bright",id:"purpleBright_predefined"},{id:"purpleToGreenDivergingBright_predefined",name:"Purple to Green Diverging, Bright"},{id:"purpleToGreenDivergingDark_predefined",name:"Purple to Green Diverging, Dark"},{name:"Purple-Blue Bright",id:"purpleBlueBright_predefined"},{name:"Purple-Blue Light to Dark",
id:"purpleBlueLightToDark_predefined"},{name:"Purple-Red Bright",id:"purpleRedBright_predefined"},{name:"Purple-Red Light to Dark",id:"purpleRedLightToDark_predefined"},{name:"Red Bright",id:"redBright_predefined"},{name:"Red Light to Dark",id:"redLightToDark_predefined"},{id:"redToBlueDivergingBright_predefined",name:"Red to Blue Diverging, Bright"},{id:"redToBlueDivergingDark_predefined",name:"Red to Blue Diverging, Dark"},{id:"redToGreen_predefined",name:"Red to Green"},{id:"redToGreenDivergingBright_predefined",
name:"Red to Green Diverging, Bright"},{id:"redToGreenDivergingDark_predefined",name:"Red to Green Diverging, Dark"},{name:"Slope",id:"slope_predefined"},{id:"spectrumFullBright_predefined",name:"Spectrum-Full Bright"},{id:"spectrumFullDark_predefined",name:"Spectrum-Full Dark"},{id:"spectrumFullLight_predefined",name:"Spectrum-Full Light"},{id:"surface_predefined",name:"Surface"},{id:"temperature_predefined",name:"Temperature"},{name:"White to Black",id:"whiteToBlack_predefined"},{id:"yellowToDarkRed_predefined",
name:"Yellow to Dark Red"},{id:"yellowToGreenToDarkBlue_predefined",name:"Yellow to Green to Dark Blue"},{name:"Yellow to Red",id:"yellowToRed_predefined"},{name:"Yellow-Green Bright",id:"yellowGreenBright_predefined"},{name:"Yellow-Green Light to Dark",id:"yellowGreenLightToDark_predefined"}],C=new z({data:l});y.mixin(x,{predefinedColorRamps:u,predefinedColorRampNameMap:l,getColorRampName:function(a){return(a=t(a))?(a=C.query({id:a}),a[0]?a[0].name:null):null},fromJson:function(a){var b=null;if(!a)return b;
"multipart"===a.type?(b=new B,b.colorRamps=h.map(a.colorRamps,function(a){return v(a)},this)):"algorithmic"===a.type&&(b=v(a));return b},colorsEqual:g,getColorRampId:t,convertColorRampToColormap:function(a,b){if(a&&b){for(var c=a.colorRamps?a.colorRamps.length:1,d=[],g=[],m,k,n,p,l,e=0,q=0,e=0;e<c;e++)d[e]={},d[e].start=q,d[e].end=q+1/c,q=d[e].end;for(e=0;e<b;e++)p=(e+.5)/b,h.forEach(d,function(b,c){p>=b.start&&p<b.end&&(l=(p-b.start)/(b.end-b.start),1<d.length?(m=f.getDojoColor(a.colorRamps[c].fromColor),
k=f.getDojoColor(a.colorRamps[c].toColor)):(m=f.getDojoColor(a.fromColor),k=f.getDojoColor(a.toColor)),n=w(m,k,l),g.push([e,n.r,n.g,n.b]))},this);return g}},interpolateLabColor:w});return x});