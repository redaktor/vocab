(self.webpackChunkskohub_vocabs=self.webpackChunkskohub_vocabs||[]).push([[250],{5540:function(n,t,e){"use strict";e.d(t,{Z:function(){return jn}});var r=e(181);function o(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,o,i=[],l=!0,a=!1;try{for(e=e.call(n);!(l=(r=e.next()).done)&&(i.push(r.value),!t||i.length!==t);l=!0);}catch(u){a=!0,o=u}finally{try{l||null==e.return||e.return()}finally{if(a)throw o}}return i}}(n,t)||(0,r.Z)(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e(8702);var i=e(7294);function l(){return(l=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}var a=["children","options"],u=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce((function(n,t){return n[t.toLowerCase()]=t,n}),{for:"htmlFor"}),c={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:"“"},f=["style","script"],s=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,p=/mailto:/i,d=/\n{2,}$/,g=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,A=/^ *> ?/gm,h=/^ {2,}\n/,m=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,v=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,y=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,k=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,x=/^(?:\n *)*\n/,Z=/\r\n?/g,b=/^\[\^([^\]]+)](:.*)\n/,M=/^\[\^([^\]]+)]/,S=/\f/g,E=/^\s*?\[(x|\s)\]/,w=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,I=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,H=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,_=/&([a-z]+);/g,O=/^<!--[\s\S]*?(?:-->)/,C=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,L=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,G=/^\{.*\}$/,N=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,R=/^<([^ >]+@[^ >]+)>/,T=/^<([^ >]+:\/[^ >]+)>/,B=/ *\n+$/,U=/(?:^|\n)( *)$/,j=/-([a-z])?/gi,z=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,Q=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,X=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,D=/^\[([^\]]*)\] ?\[([^\]]*)\]/,$=/(\[|\])/g,P=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,W=/\t/g,F=/^ *\| */,J=/(^ *\||\| *$)/g,K=/ *$/,q=/^ *:-+: *$/,V=/^ *:-+ *$/,Y=/^ *-+: *$/,nn=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,tn=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,en=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,rn=/^\\([^0-9A-Za-z\s])/,on=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,ln=/^\n+/,an=/^([ \t]*)/,un=/\\([^0-9A-Z\s])/gi,cn=new RegExp("^( *)((?:[*+-]|\\d+\\.)) +"),fn=new RegExp("^( *)((?:[*+-]|\\d+\\.)) +[^\\n]*(?:\\n(?!\\1(?:[*+-]|\\d+\\.) )[^\\n]*)*(\\n|$)","gm"),sn=new RegExp("^( *)((?:[*+-]|\\d+\\.)) [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1(?:[*+-]|\\d+\\.) (?!(?:[*+-]|\\d+\\.) ))\\n*|\\s*\\n*$)"),pn="(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",dn=new RegExp("^\\[("+pn+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),gn=new RegExp("^!\\[("+pn+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),An=[g,y,v,w,I,O,fn,sn,z],hn=[].concat(An,[/^[^\n]+(?:  \n|\n{2,})/,H,L]);function mn(n){return n.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function vn(n){return Y.test(n)?"right":q.test(n)?"center":V.test(n)?"left":null}function yn(n,t,e){var r=e.t;e.t=!0;var o=t(n.trim(),e);e.t=r;var i=[[]];return o.forEach((function(n,t){"tableSeparator"===n.type?0!==t&&t!==o.length-1&&i.push([]):("text"!==n.type||null!=o[t+1]&&"tableSeparator"!==o[t+1].type||(n.content=n.content.replace(K,"")),i[i.length-1].push(n))})),i}function kn(n,t,e){e.o=!0;var r=yn(n[1],t,e),o=n[2].replace(J,"").split("|").map(vn),i=function(n,t,e){return n.trim().split("\n").map((function(n){return yn(n,t,e)}))}(n[3],t,e);return e.o=!1,{align:o,cells:i,header:r,type:"table"}}function xn(n,t){return null==n.align[t]?{}:{textAlign:n.align[t]}}function Zn(n){return function(t,e){return e.o?n.exec(t):null}}function bn(n){return function(t,e){return e.o||e.u?n.exec(t):null}}function Mn(n){return function(t,e){return e.o||e.u?null:n.exec(t)}}function Sn(n){return function(t){return n.exec(t)}}function En(n,t,e){if(t.o||t.u)return null;if(e&&!e.endsWith("\n"))return null;var r="";n.split("\n").every((function(n){return!An.some((function(t){return t.test(n)}))&&(r+=n+"\n",n.trim())}));var o=r.trimEnd();return""==o?null:[r,o]}function wn(n){try{if(decodeURIComponent(n).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data):/i))return null}catch(n){return null}return n}function In(n){return n.replace(un,"$1")}function Hn(n,t,e){var r=e.o||!1,o=e.u||!1;e.o=!0,e.u=!0;var i=n(t,e);return e.o=r,e.u=o,i}function _n(n,t,e){var r=e.o||!1,o=e.u||!1;e.o=!1,e.u=!0;var i=n(t,e);return e.o=r,e.u=o,i}function On(n,t,e){return e.o=!1,n(t+"\n\n",e)}var Cn,Ln,Gn=function(n,t,e){return{content:Hn(t,n[1],e)}};function Nn(){return{}}function Rn(){return null}function Tn(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return t.filter(Boolean).join(" ")}function Bn(n,t,e){for(var r=n,o=t.split(".");o.length&&void 0!==(r=r[o[0]]);)o.shift();return r||e}function Un(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.overrides=t.overrides||{},t.slugify=t.slugify||mn,t.namedCodesToUnicode=t.namedCodesToUnicode?l({},c,t.namedCodesToUnicode):c;var e=t.createElement||i.createElement;function r(n,r){for(var o=Bn(t.overrides,"".concat(n,".props"),{}),i=arguments.length,a=new Array(i>2?i-2:0),u=2;u<i;u++)a[u-2]=arguments[u];return e.apply(void 0,[function(n,t){var e=Bn(t,n);return e?"function"==typeof e||"object"==typeof e&&"render"in e?e:Bn(t,"".concat(n,".component"),n):n}(n,t.overrides),l({},r,o,{className:Tn(null==r?void 0:r.className,o.className)||void 0})].concat(a))}function a(n){var e=!1;t.forceInline?e=!0:t.forceBlock||(e=!1===P.test(n));for(var o=An(pn(e?n:"".concat(n.trimEnd().replace(ln,""),"\n\n"),{o:e}));"string"==typeof o[o.length-1]&&!o[o.length-1].trim();)o.pop();if(null===t.wrapper)return o;var l,a=t.wrapper||(e?"span":"div");if(o.length>1||t.forceWrapper)l=o;else{if(1===o.length)return"string"==typeof(l=o[0])?r("span",{key:"outer"},l):l;l=null}return i.createElement(a,{key:"outer"},l)}function J(n){var t=n.match(s);return t?t.reduce((function(n,t,e){var r,o=t.indexOf("=");if(-1!==o){var l=(r=t.slice(0,o),-1!==r.indexOf("-")&&null===r.match(C)&&(r=r.replace(j,(function(n,t){return t.toUpperCase()}))),r).trim(),c=function(n){var t=n[0];return('"'===t||"'"===t)&&n.length>=2&&n[n.length-1]===t?n.slice(1,-1):n}(t.slice(o+1).trim()),f=u[l]||l,s=n[f]=function(n,t){return"style"===n?t.split(/;\s?/).reduce((function(n,t){var e=t.slice(0,t.indexOf(":"));return n[e.replace(/(-[a-z])/g,(function(n){return n[1].toUpperCase()}))]=t.slice(e.length+1).trim(),n}),{}):"href"===n?wn(t):(t.match(G)&&(t=t.slice(1,t.length-1)),"true"===t||"false"!==t&&t)}(l,c);"string"==typeof s&&(H.test(s)||L.test(s))&&(n[f]=i.cloneElement(a(s.trim()),{key:e}))}else"style"!==t&&(n[u[t]||t]=!0);return n}),{}):void 0}var K=[],q={},V={blockQuote:{i:Mn(g),l:Cn.HIGH,_:function(n,t,e){return{content:t(n[0].replace(A,""),e)}},p:function(n,t,e){return r("blockquote",{key:e.g},t(n.content,e))}},breakLine:{i:Sn(h),l:Cn.HIGH,_:Nn,p:function(n,t,e){return r("br",{key:e.g})}},breakThematic:{i:Mn(m),l:Cn.HIGH,_:Nn,p:function(n,t,e){return r("hr",{key:e.g})}},codeBlock:{i:Mn(y),l:Cn.MAX,_:function(n){return{content:n[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}},p:function(n,t,e){return r("pre",{key:e.g},r("code",{className:n.lang?"lang-".concat(n.lang):""},n.content))}},codeFenced:{i:Mn(v),l:Cn.MAX,_:function(n){return{content:n[3],lang:n[2]||void 0,type:"codeBlock"}}},codeInline:{i:bn(k),l:Cn.LOW,_:function(n){return{content:n[2]}},p:function(n,t,e){return r("code",{key:e.g},n.content)}},footnote:{i:Mn(b),l:Cn.MAX,_:function(n){return K.push({footnote:n[2],identifier:n[1]}),{}},p:Rn},footnoteReference:{i:Zn(M),l:Cn.HIGH,_:function(n){return{content:n[1],target:"#".concat(t.slugify(n[1]))}},p:function(n,t,e){return r("a",{key:e.g,href:wn(n.target)},r("sup",{key:e.g},n.content))}},gfmTask:{i:Zn(E),l:Cn.HIGH,_:function(n){return{completed:"x"===n[1].toLowerCase()}},p:function(n,t,e){return r("input",{checked:n.completed,key:e.g,readOnly:!0,type:"checkbox"})}},heading:{i:Mn(w),l:Cn.HIGH,_:function(n,e,r){return{content:Hn(e,n[2],r),id:t.slugify(n[2]),level:n[1].length}},p:function(n,t,e){return n.tag="h".concat(n.level),r(n.tag,{id:n.id,key:e.g},t(n.content,e))}},headingSetext:{i:Mn(I),l:Cn.MAX,_:function(n,t,e){return{content:Hn(t,n[1],e),level:"="===n[2]?1:2,type:"heading"}}},htmlComment:{i:Sn(O),l:Cn.HIGH,_:function(){return{}},p:Rn},image:{i:bn(gn),l:Cn.HIGH,_:function(n){return{alt:n[1],target:In(n[2]),title:n[3]}},p:function(n,t,e){return r("img",{key:e.g,alt:n.alt||void 0,title:n.title||void 0,src:wn(n.target)})}},link:{i:Zn(dn),l:Cn.LOW,_:function(n,t,e){return{content:_n(t,n[1],e),target:In(n[2]),title:n[3]}},p:function(n,t,e){return r("a",{key:e.g,href:wn(n.target),title:n.title},t(n.content,e))}},linkAngleBraceStyleDetector:{i:Zn(T),l:Cn.MAX,_:function(n){return{content:[{content:n[1],type:"text"}],target:n[1],type:"link"}}},linkBareUrlDetector:{i:function(n,t){return t.m?null:Zn(N)(n,t)},l:Cn.MAX,_:function(n){return{content:[{content:n[1],type:"text"}],target:n[1],title:void 0,type:"link"}}},linkMailtoDetector:{i:Zn(R),l:Cn.MAX,_:function(n){var t=n[1],e=n[1];return p.test(e)||(e="mailto:"+e),{content:[{content:t.replace("mailto:",""),type:"text"}],target:e,type:"link"}}},list:{i:function(n,t,e){var r=U.exec(e);return!r||!t.h&&t.o?null:sn.exec(n=r[1]+n)},l:Cn.HIGH,_:function(n,t,e){var r=n[2],o=r.length>1,i=o?+r:void 0,l=n[0].replace(d,"\n").match(fn),a=!1;return{items:l.map((function(n,r){var o=cn.exec(n)[0].length,i=new RegExp("^ {1,"+o+"}","gm"),u=n.replace(i,"").replace(cn,""),c=r===l.length-1,f=-1!==u.indexOf("\n\n")||c&&a;a=f;var s,p=e.o,d=e.h;e.h=!0,f?(e.o=!1,s=u.replace(B,"\n\n")):(e.o=!0,s=u.replace(B,""));var g=t(s,e);return e.o=p,e.h=d,g})),ordered:o,start:i}},p:function(n,t,e){return r(n.ordered?"ol":"ul",{key:e.g,start:n.start},n.items.map((function(n,o){return r("li",{key:o},t(n,e))})))}},newlineCoalescer:{i:Mn(x),l:Cn.LOW,_:Nn,p:function(){return"\n"}},paragraph:{i:En,l:Cn.LOW,_:Gn,p:function(n,t,e){return r("p",{key:e.g},t(n.content,e))}},ref:{i:Zn(Q),l:Cn.MAX,_:function(n){return q[n[1]]={target:n[2],title:n[4]},{}},p:Rn},refImage:{i:bn(X),l:Cn.MAX,_:function(n){return{alt:n[1]||void 0,ref:n[2]}},p:function(n,t,e){return r("img",{key:e.g,alt:n.alt,src:wn(q[n.ref].target),title:q[n.ref].title})}},refLink:{i:Zn(D),l:Cn.MAX,_:function(n,t,e){return{content:t(n[1],e),fallbackContent:t(n[0].replace($,"\\$1"),e),ref:n[2]}},p:function(n,t,e){return q[n.ref]?r("a",{key:e.g,href:wn(q[n.ref].target),title:q[n.ref].title},t(n.content,e)):r("span",{key:e.g},t(n.fallbackContent,e))}},table:{i:Mn(z),l:Cn.HIGH,_:kn,p:function(n,t,e){return r("table",{key:e.g},r("thead",null,r("tr",null,n.header.map((function(o,i){return r("th",{key:i,style:xn(n,i)},t(o,e))})))),r("tbody",null,n.cells.map((function(o,i){return r("tr",{key:i},o.map((function(o,i){return r("td",{key:i,style:xn(n,i)},t(o,e))})))}))))}},tableSeparator:{i:function(n,t){return t.t?F.exec(n):null},l:Cn.HIGH,_:function(){return{type:"tableSeparator"}},p:function(){return" | "}},text:{i:Sn(on),l:Cn.MIN,_:function(n){return{content:n[0].replace(_,(function(n,e){return t.namedCodesToUnicode[e]?t.namedCodesToUnicode[e]:n}))}},p:function(n){return n.content}},textBolded:{i:bn(nn),l:Cn.MED,_:function(n,t,e){return{content:t(n[2],e)}},p:function(n,t,e){return r("strong",{key:e.g},t(n.content,e))}},textEmphasized:{i:bn(tn),l:Cn.LOW,_:function(n,t,e){return{content:t(n[2],e)}},p:function(n,t,e){return r("em",{key:e.g},t(n.content,e))}},textEscaped:{i:bn(rn),l:Cn.HIGH,_:function(n){return{content:n[1],type:"text"}}},textStrikethroughed:{i:bn(en),l:Cn.LOW,_:Gn,p:function(n,t,e){return r("del",{key:e.g},t(n.content,e))}}};!0!==t.disableParsingRawHTML&&(V.htmlBlock={i:Sn(H),l:Cn.HIGH,_:function(n,t,e){var r,i=o(n[3].match(an),2)[1],l=new RegExp("^".concat(i),"gm"),a=n[3].replace(l,""),u=(r=a,hn.some((function(n){return n.test(r)}))?On:Hn),c=n[1].toLowerCase(),s=-1!==f.indexOf(c);e.m=e.m||"a"===c;var p=s?n[3]:u(t,a,e);return e.m=!1,{attrs:J(n[2]),content:p,noInnerParse:s,tag:s?c:n[1]}},p:function(n,t,e){return r(n.tag,l({key:e.g},n.attrs),n.noInnerParse?n.content:t(n.content,e))}},V.htmlSelfClosing={i:Sn(L),l:Cn.HIGH,_:function(n){return{attrs:J(n[2]||""),tag:n[1]}},p:function(n,t,e){return r(n.tag,l({},n.attrs,{key:e.g}))}});var Y,un,pn=function(n){var t=Object.keys(n);function e(r,o){for(var i=[],l="";r;)for(var a=0;a<t.length;){var u=t[a],c=n[u],f=c.i(r,o,l);if(f){var s=f[0];r=r.substring(s.length);var p=c._(f,e,o);null==p.type&&(p.type=u),i.push(p),l=s;break}a++}return i}return t.sort((function(t,e){var r=n[t].l,o=n[e].l;return r!==o?r-o:t<e?-1:1})),function(n,t){return e(function(n){return n.replace(Z,"\n").replace(S,"").replace(W,"    ")}(n),t)}}(V),An=(Y=V,un=function(n,t,e){return Y[n.type].p(n,t,e)},function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Array.isArray(t)){for(var r=e.g,o=[],i=!1,l=0;l<t.length;l++){e.g=l;var a=n(t[l],e),u="string"==typeof a;u&&i?o[o.length-1]+=a:null!==a&&o.push(a),i=u}return e.g=r,o}return un(t,n,e)}),vn=a(n);return K.length?r("div",null,vn,r("footer",{key:"footer"},K.map((function(n){return r("div",{id:t.slugify(n.identifier),key:n.identifier},n.identifier,An(pn(n.footnote,{o:!0})))})))):vn}(Ln=Cn||(Cn={}))[Ln.MAX=0]="MAX",Ln[Ln.HIGH=1]="HIGH",Ln[Ln.MED=2]="MED",Ln[Ln.LOW=3]="LOW",Ln[Ln.MIN=4]="MIN";var jn=function(n){var t=n.children,e=n.options,r=function(n,t){if(null==n)return{};var e,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t.indexOf(e=i[r])>=0||(o[e]=n[e]);return o}(n,a);return i.cloneElement(Un(t,e),r)}},648:function(n,t,e){var r=e(7854),o=e(1694),i=e(614),l=e(4326),a=e(5112)("toStringTag"),u=r.Object,c="Arguments"==l(function(){return arguments}());n.exports=o?l:function(n){var t,e,r;return void 0===n?"Undefined":null===n?"Null":"string"==typeof(e=function(n,t){try{return n[t]}catch(e){}}(t=u(n),a))?e:c?l(t):"Object"==(r=l(t))&&i(t.callee)?"Arguments":r}},6091:function(n,t,e){var r=e(6530).PROPER,o=e(7293),i=e(1361);n.exports=function(n){return o((function(){return!!i[n]()||"​᠎"!=="​᠎"[n]()||r&&i[n].name!==n}))}},3111:function(n,t,e){var r=e(1702),o=e(4488),i=e(1340),l=e(1361),a=r("".replace),u="["+l+"]",c=RegExp("^"+u+u+"*"),f=RegExp(u+u+"*$"),s=function(n){return function(t){var e=i(o(t));return 1&n&&(e=a(e,c,"")),2&n&&(e=a(e,f,"")),e}};n.exports={start:s(1),end:s(2),trim:s(3)}},1694:function(n,t,e){var r={};r[e(5112)("toStringTag")]="z",n.exports="[object z]"===String(r)},1340:function(n,t,e){var r=e(7854),o=e(648),i=r.String;n.exports=function(n){if("Symbol"===o(n))throw TypeError("Cannot convert a Symbol value to a string");return i(n)}},1361:function(n){n.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},8702:function(n,t,e){"use strict";var r=e(2109),o=e(3111).end,i=e(6091)("trimEnd"),l=i?function(){return o(this)}:"".trimEnd;r({target:"String",proto:!0,name:"trimEnd",forced:i},{trimEnd:l,trimRight:l})},3347:function(n,t,e){"use strict";e.r(t);var r=e(7946),o=e(5540),i=e(1597),l=e(9441),a=e(2076);t.default=function(n){var t=n.pageContext,e=t.node,u=t.language,c=t.baseURL;return(0,r.tZ)("div",{className:"content block",id:(0,a.getDomId)(e.id)},(0,r.tZ)("h1",null,e.notation&&(0,r.tZ)("span",null,e.notation.join(",")," "),(0,a.i18n)(u)(e.prefLabel)),(0,r.tZ)("h2",null,e.id),(0,r.tZ)(l.Z,{to:c+(0,a.getFilePath)(e.id,"json")}),(0,r.tZ)("p",null,(0,r.tZ)("a",{href:e.inbox},"Inbox")),e.definition&&(0,r.tZ)("div",{className:"markdown"},(0,r.tZ)("h3",null,"Definition"),(0,r.tZ)(o.Z,null,(0,a.i18n)(u)(e.definition))),e.scopeNote&&(0,r.tZ)("div",{className:"markdown"},(0,r.tZ)("h3",null,"Scope Note"),(0,r.tZ)(o.Z,null,(0,a.i18n)(u)(e.scopeNote))),e.note&&(0,r.tZ)("div",{className:"markdown"},(0,r.tZ)("h3",null,"Note"),(0,r.tZ)(o.Z,null,(0,a.i18n)(u)(e.note))),e.altLabel&&""!==(0,a.i18n)(u)(e.altLabel)&&(0,r.tZ)("div",null,(0,r.tZ)("h3",null,"Alt Label"),(0,r.tZ)("ul",null,Array.isArray((0,a.i18n)(u)(e.altLabel))&&(0,a.i18n)(u)(e.altLabel).map((function(n,t){return(0,r.tZ)("li",{key:t},n)})))),e.example&&(0,r.tZ)("div",{className:"markdown"},(0,r.tZ)("h3",null,"Example"),(0,r.tZ)(o.Z,null,(0,a.i18n)(u)(e.example))),e.related&&e.related.length>0&&(0,r.tZ)("div",null,(0,r.tZ)("h3",null,"Related"),(0,r.tZ)("ul",null,e.related.map((function(n){return(0,r.tZ)("li",{key:n.id},(0,r.tZ)(i.rU,{to:(0,a.getFilePath)(n.id,u+".html")},(0,a.i18n)(u)(n.prefLabel)))})))),e.narrowMatch&&e.narrowMatch.length>0&&(0,r.tZ)("div",null,(0,r.tZ)("h3",null,"Narrow Match"),(0,r.tZ)("ul",null,e.narrowMatch.map((function(n){return(0,r.tZ)("li",{key:n.id},(0,r.tZ)("a",{href:n.id},n.id))})))),e.broadMatch&&e.broadMatch.length>0&&(0,r.tZ)("div",null,(0,r.tZ)("h3",null,"Broad Match"),(0,r.tZ)("ul",null,e.broadMatch.map((function(n){return(0,r.tZ)("li",{key:n.id},(0,r.tZ)("a",{href:n.id},n.id))})))),e.exactMatch&&e.exactMatch.length>0&&(0,r.tZ)("div",null,(0,r.tZ)("h3",null,"Exact Match"),(0,r.tZ)("ul",null,e.exactMatch.map((function(n){return(0,r.tZ)("li",{key:n.id},(0,r.tZ)("a",{href:n.id},n.id))})))),e.closeMatch&&e.closeMatch.length>0&&(0,r.tZ)("div",null,(0,r.tZ)("h3",null,"Close Match"),(0,r.tZ)("ul",null,e.closeMatch.map((function(n){return(0,r.tZ)("li",{key:n.id},(0,r.tZ)("a",{href:n.id},n.id))})))),e.relatedMatch&&e.relatedMatch.length>0&&(0,r.tZ)("div",null,(0,r.tZ)("h3",null,"Related Match"),(0,r.tZ)("ul",null,e.relatedMatch.map((function(n){return(0,r.tZ)("li",{key:n.id},(0,r.tZ)("a",{href:n.id},n.id))})))))}},9441:function(n,t,e){"use strict";e.d(t,{Z:function(){return o}});e(7294);var r=e(7946),o=function(n){var t=n.to;return(0,r.tZ)("a",{className:"json-png",href:t},(0,r.tZ)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACBUExURQAAAAAAAAAAAAAAAAAAAAYgSgA7fgAAAAAAAAAAAAxHnAAAAA5InRBJngAAAA9JnQAAAAxHnBZOoAxHnA1HnQxInAAAAAAAAA9KnQxHmwtHnAAAAAAAAAAAAAxInQAAAAAAAI+q0T5vsUBvsT9usQAAAAxHnGuQwzxrsCJXpbvM48Grj+gAAAAldFJOUwD8KKcgCwWOzTu+hOaqE2y51nqQIDRxS/spXZj1XkjhffWTuKNxkQQJAAAA8ElEQVQoz61SyXbDIAyUAxiM8b7Fjp2lrSDt/39gRTB5Xa7hwJNmkDQDALx2ZaM8xPggxyzGJ0zUM8lUgjKEaXIRO9q/VQLEZQ0ZR7bj883ZAoBhGbrGUmidtbYHifw3keojEemTmPBKIA3QprG2ArhikCJxEu/ONMcqBa0fJ3MPK2Si/fq09uyndLQJhkqCStYNPgi3A2FL4Xtsa6IASobZ4KcaYrrGe0T20LvhCOeunRdtCnenkhGnP3ILR0aW/z5guFuvNxIcT/EGyYeZ6VIDIVBFQlRdDyQ0DWlNsnnkOBmr97jM65/vUefla//BN72+Edu2WjTOAAAAAElFTkSuQmCC",alt:"JSON"}))}}}]);
//# sourceMappingURL=6086ea9426617ce28b6d21aa68a5c3830ac002b1-4c48f3abba4233b42b08.js.map