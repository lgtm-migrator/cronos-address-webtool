(function(s){function e(e){for(var c,a,d=e[0],o=e[1],i=e[2],u=0,j=[];u<d.length;u++)a=d[u],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&j.push(n[a][0]),n[a]=0;for(c in o)Object.prototype.hasOwnProperty.call(o,c)&&(s[c]=o[c]);f&&f(e);while(j.length)j.shift()();return r.push.apply(r,i||[]),t()}function t(){for(var s,e=0;e<r.length;e++){for(var t=r[e],c=!0,d=1;d<t.length;d++){var o=t[d];0!==n[o]&&(c=!1)}c&&(r.splice(e--,1),s=a(a.s=t[0]))}return s}var c={},n={app:0},r=[];function a(e){if(c[e])return c[e].exports;var t=c[e]={i:e,l:!1,exports:{}};return s[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=s,a.c=c,a.d=function(s,e,t){a.o(s,e)||Object.defineProperty(s,e,{enumerable:!0,get:t})},a.r=function(s){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},a.t=function(s,e){if(1&e&&(s=a(s)),8&e)return s;if(4&e&&"object"===typeof s&&s&&s.__esModule)return s;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:s}),2&e&&"string"!=typeof s)for(var c in s)a.d(t,c,function(e){return s[e]}.bind(null,c));return t},a.n=function(s){var e=s&&s.__esModule?function(){return s["default"]}:function(){return s};return a.d(e,"a",e),e},a.o=function(s,e){return Object.prototype.hasOwnProperty.call(s,e)},a.p="/cronos-address-webtool/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],o=d.push.bind(d);d.push=e,d=d.slice();for(var i=0;i<d.length;i++)e(d[i]);var f=o;r.push([1,"chunk-vendors"]),t()})({0:function(s,e){},1:function(s,e,t){s.exports=t("56d7")},10:function(s,e){},11:function(s,e){},12:function(s,e){},13:function(s,e){},14:function(s,e){},15:function(s,e){},16:function(s,e){},17:function(s,e){},18:function(s,e){},19:function(s,e){},2:function(s,e){},20:function(s,e){},21:function(s,e){},22:function(s,e){},23:function(s,e){},24:function(s,e){},25:function(s,e){},3:function(s,e){},4:function(s,e){},4678:function(s,e,t){var c={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f129","./it-ch.js":"6f129","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(s){var e=r(s);return t(e)}function r(s){if(!t.o(c,s)){var e=new Error("Cannot find module '"+s+"'");throw e.code="MODULE_NOT_FOUND",e}return c[s]}n.keys=function(){return Object.keys(c)},n.resolve=r,s.exports=n,n.id="4678"},5:function(s,e){},"56d7":function(s,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("2b0e"),n=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{attrs:{id:"app"}},[t("Home",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},r=[],a=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{class:{"tools-container":s.isPc,"tools-container-mb":!s.isPc}},[t("div",{staticClass:"body"},[t("div",{staticClass:"tools-convert-addr tool"},[t("p",{staticClass:"tips"},[s._v("Convert address")]),t("a-textarea",{staticClass:"address-input input",attrs:{placeholder:"Please enter your address here.",spellcheck:"false","auto-size":{minRows:1,maxRows:6}},model:{value:s.address,callback:function(e){s.address=e},expression:"address"}}),t("div",{staticClass:"btn-container"},[t("div",{staticClass:"btn",on:{click:s.convertAddress}},[s.loading?s._e():t("span",[s._v("Convert")]),s.loading?t("a-icon",{attrs:{type:"loading"}}):s._e()],1)]),t("div",{staticClass:"result-detail"},[t("div",{staticClass:"address"},[s._v("eth: "+s._s(s.ethAddress))])]),t("div",{staticClass:"result-detail"},[t("div",{staticClass:"address"},[s._v("crc: "+s._s(s.crcAddress))])]),t("div",{staticClass:"result-detail"},[t("div",{staticClass:"address"},[s._v("tcrc: "+s._s(s.tcrcAddress))])])],1)])])},d=[],o=(t("2ca0"),t("4d90"),t("d3b7"),t("25f0"),t("5cc6"),t("9a8c"),t("a975"),t("735e"),t("c1ac"),t("d139"),t("3a7b"),t("d5d6"),t("82f8"),t("e91f"),t("60bd"),t("5f96"),t("3280"),t("3fcc"),t("ca91"),t("25a1"),t("cd26"),t("3c5d"),t("2954"),t("649e"),t("219c"),t("170b"),t("b39a"),t("72f7"),t("ac1f"),t("5319"),t("70fc")),i=o.bech32,f=t("f7fc"),u={name:"HelloWorld",data:function(){return{isPc:this.$isPc(),address:"",ethAddress:"",crcAddress:"",croAddress:"",tcrcAddress:"",loading:!1}},props:{msg:String},mounted:function(){},methods:{convertAddress:function(){if(!(this.address.length<=0))try{if(this.address.startsWith("tcrc")||this.address.startsWith("tcro")||this.address.startsWith("cro")||this.address.startsWith("crc")||this.address.startsWith("ethm")){var s=i.decode(this.address),e=i.fromWords(s.words),t=function(s){return s.reduce((function(s,e){return s+e.toString(16).padStart(2,"0")}),"")};this.ethAddress=this.toChecksumAddress(t(new Uint8Array(e))),this.crcAddress=i.encode("crc",s.words),this.croAddress=i.encode("cro",s.words),this.tcrcAddress=i.encode("tcrc",s.words)}else this.ethAddress=this.address.startsWith("0x")?this.address:"0x".concat(this.address),this.crcAddress=f.utils.convertEVMAddressToBech32Address(this.address,"crc"),this.croAddress=f.utils.convertEVMAddressToBech32Address(this.address,"cro"),this.tcrcAddress=f.utils.convertEVMAddressToBech32Address(this.address,"tcrc")}catch(c){this.$message.info("".concat(c))}},toChecksumAddress:function(s){var e=t("6983");s=s.toLowerCase().replace("0x","");for(var c=e("keccak256").update(s).digest("hex"),n="0x",r=0;r<s.length;r++)parseInt(c[r],16)>=8?n+=s[r].toUpperCase():n+=s[r];return n}}},j=u,l=(t("dbc2"),t("2877")),b=Object(l["a"])(j,a,d,!1,null,null,null),h=b.exports,p={name:"App",components:{Home:h}},m=p,v=(t("5c0b"),Object(l["a"])(m,n,r,!1,null,null,null)),g=v.exports,y=t("f23d");t("202f");c["a"].config.productionTip=!1,c["a"].use(y["a"]),c["a"].prototype.$isPc=function(){var s=document.documentElement.clientWidth||document.body.clientWidth;return s>500},new c["a"]({render:function(s){return s(g)}}).$mount("#app")},"5c0b":function(s,e,t){"use strict";t("c58b")},6:function(s,e){},7:function(s,e){},8:function(s,e){},9:function(s,e){},c071:function(s,e,t){},c58b:function(s,e,t){},dbc2:function(s,e,t){"use strict";t("c071")}});
//# sourceMappingURL=app.de38175d.js.map