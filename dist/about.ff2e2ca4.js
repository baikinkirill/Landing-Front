parcelRequire=function(e,n,r,t){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function c(r,t){if(!n[r]){if(!e[r]){var i="function"==typeof parcelRequire&&parcelRequire;if(!t&&i)return i(r,!0);if(o)return o(r,!0);if(u&&"string"==typeof r)return u(r);var f=new Error("Cannot find module '"+r+"'");throw f.code="MODULE_NOT_FOUND",f}a.resolve=function(n){return e[r][1][n]||n},a.cache={};var d=n[r]=new c.Module(r);e[r][0].call(d.exports,a,d,d.exports,this)}return n[r].exports;function a(e){return c(a.resolve(e))}}c.isParcelRequire=!0,c.Module=function(e){this.id=e,this.bundle=c,this.exports={}},c.modules=e,c.cache=n,c.parent=o,c.register=function(n,r){e[n]=[function(e,n){n.exports=r},{}]};for(var f=0;f<r.length;f++)try{c(r[f])}catch(e){i||(i=e)}if(r.length){var d=c(r[r.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=d:"function"==typeof define&&define.amd&&define((function(){return d}))}if(parcelRequire=c,i)throw i;return c}({lDcJ:[function(e,n,r){var t,i=window.innerWidth<1e3;function o(){window.innerWidth<1e3&&i?(t&&t.destroy(),i=!1):i||(t=new Parallax(document.getElementById("scene")),i=!0)}window.addEventListener("resize",o.bind(this)),window.addEventListener("load",(function(){o()}),{passive:!0})},{}]},{},["lDcJ"]);