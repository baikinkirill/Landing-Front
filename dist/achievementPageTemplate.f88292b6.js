parcelRequire=function(e,r,n,t){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function c(n,t){if(!r[n]){if(!e[n]){var i="function"==typeof parcelRequire&&parcelRequire;if(!t&&i)return i(n,!0);if(o)return o(n,!0);if(u&&"string"==typeof n)return u(n);var f=new Error("Cannot find module '"+n+"'");throw f.code="MODULE_NOT_FOUND",f}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var a=r[n]=new c.Module(n);e[n][0].call(a.exports,p,a,a.exports,this)}return r[n].exports;function p(e){return c(p.resolve(e))}}c.isParcelRequire=!0,c.Module=function(e){this.id=e,this.bundle=c,this.exports={}},c.modules=e,c.cache=r,c.parent=o,c.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)try{c(n[f])}catch(e){i||(i=e)}if(n.length){var a=c(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=a:"function"==typeof define&&define.amd&&define((function(){return a}))}if(parcelRequire=c,i)throw i;return c}({TqLU:[function(e,r,n){new Swiper(".achievementsSwiperParent",{slidesPerView:"auto",spaceBetween:15,pagination:{el:".achievementsSwiperPagination",clickable:!0}})},{}]},{},["TqLU"]);