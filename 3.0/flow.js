var TWEEN=TWEEN||function(){var e,t,i,n,o=60,r=false,s=[],a;return{setFPS:function(e){o=e||60},start:function(e){if(arguments.length!==0){this.setFPS(e)}i=setInterval(this.update,1e3/o)},stop:function(){clearInterval(i)},setAutostart:function(e){r=e;if(r&&!i){this.start()}},add:function(e){s.push(e);if(r&&!i){this.start()}},getAll:function(){return s},removeAll:function(){s=[]},remove:function(t){e=s.indexOf(t);if(e!==-1){s.splice(e,1)}},update:function(t){e=0;a=s.length;var i=t||(new Date).getTime();while(e<a){if(s[e].update(i)){e++}else{s.splice(e,1);a--}}if(a===0&&r===true){this.stop()}}}}();TWEEN.Tween=function(e){var t=e,i={},n={},o={},r=1e3,s=0,a=null,l=TWEEN.Easing.Linear.EaseNone,f=null,d=null,c=null;this.to=function(e,i){if(i!==null){r=i}for(var n in e){if(t[n]===null){continue}o[n]=e[n]}return this};this.start=function(e){TWEEN.add(this);a=e?e+s:(new Date).getTime()+s;for(var r in o){if(t[r]===null){continue}i[r]=t[r];n[r]=o[r]-t[r]}return this};this.stop=function(){TWEEN.remove(this);return this};this.delay=function(e){s=e;return this};this.easing=function(e){l=e;return this};this.chain=function(e){f=e;return this};this.onUpdate=function(e){d=e;return this};this.onComplete=function(e){c=e;return this};this.update=function(e){var o,s,h;if(e<a){return true}s=(e-a)/r;s=s>1?1:s;h=l(s);for(o in n){t[o]=i[o]+n[o]*h}if(d!==null){d.call(t,h)}if(s==1){if(c!==null){c.call(t)}if(f!==null){f.start()}return false}return true}};TWEEN.Easing={Linear:{},Quadratic:{},Cubic:{},Quartic:{},Quintic:{},Sinusoidal:{},Exponential:{},Circular:{},Elastic:{},Back:{},Bounce:{}};TWEEN.Easing.Linear.EaseNone=function(e){return e};TWEEN.Easing.Cubic.EaseOut=function(e){return--e*e*e+1};window.Modernizr=function(e,t,i){function n(e){g.cssText=e}function o(e,t){return n(w.join(e+";")+(t||""))}function r(e,t){return typeof e===t}function s(e,t){return!!~(""+e).indexOf(t)}function a(e,t){for(var n in e){var o=e[n];if(!s(o,"-")&&g[o]!==i)return t=="pfx"?o:!0}return!1}function l(e,t,n){for(var o in e){var s=t[e[o]];if(s!==i)return n===!1?e[o]:r(s,"function")?s.bind(n||t):s}return!1}function f(e,t,i){var n=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+E.join(n+" ")+n).split(" ");return r(t,"string")||r(t,"undefined")?a(o,t):(o=(e+" "+C.join(n+" ")+n).split(" "),l(o,t,i))}var d="2.6.2",c={},h=t.documentElement,u="modernizr",p=t.createElement(u),g=p.style,m,v={}.toString,w=" -webkit- -moz- -o- -ms- ".split(" "),y="Webkit Moz O ms",E=y.split(" "),C=y.toLowerCase().split(" "),x={},A={},T={},b=[],k=b.slice,M,N=function(e,i,n,o){var r,s,a,l,f=t.createElement("div"),d=t.body,c=d||t.createElement("body");if(parseInt(n,10))while(n--)a=t.createElement("div"),a.id=o?o[n]:u+(n+1),f.appendChild(a);return r=["&#173;",'<style id="s',u,'">',e,"</style>"].join(""),f.id=u,(d?f:c).innerHTML+=r,c.appendChild(f),d||(c.style.background="",c.style.overflow="hidden",l=h.style.overflow,h.style.overflow="hidden",h.appendChild(c)),s=i(f,e),d?f.parentNode.removeChild(f):(c.parentNode.removeChild(c),h.style.overflow=l),!!s},R={}.hasOwnProperty,F;!r(R,"undefined")&&!r(R.call,"undefined")?F=function(e,t){return R.call(e,t)}:F=function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if(typeof t!="function")throw new TypeError;var i=k.call(arguments,1),n=function(){if(this instanceof n){var o=function(){};o.prototype=t.prototype;var r=new o,s=t.apply(r,i.concat(k.call(arguments)));return Object(s)===s?s:r}return t.apply(e,i.concat(k.call(arguments)))};return n}),x.canvas=function(){var e=t.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")},x.canvastext=function(){return!!c.canvas&&!!r(t.createElement("canvas").getContext("2d").fillText,"function")},x.csstransforms3d=function(){var e=!!f("perspective");return e&&"webkitPerspective"in h.style&&N("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,i){e=t.offsetLeft===9&&t.offsetHeight===3}),e},x.csstransitions=function(){return f("transition")};for(var L in x)F(x,L)&&(M=L.toLowerCase(),c[M]=x[L](),b.push((c[M]?"":"no-")+M));return c.addTest=function(e,t){if(typeof e=="object")for(var n in e)F(e,n)&&c.addTest(n,e[n]);else{e=e.toLowerCase();if(c[e]!==i)return c;t=typeof t=="function"?t():t,typeof enableClasses!="undefined"&&enableClasses&&(h.className+=" "+(t?"":"no-")+e),c[e]=t}return c},n(""),p=m=null,c._version=d,c._prefixes=w,c._domPrefixes=C,c._cssomPrefixes=E,c.testProp=function(e){return a([e])},c.testAllProps=f,c.testStyles=N,c.prefixed=function(e,t,i){return t?f(e,t,i):f(e,"pfx")},c}(this,this.document);(function(e,t){t.flow={};t=t.flow;if(!window.requestAnimationFrame){window.requestAnimationFrame=function(){return window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e,t){window.setTimeout(e,1e3/60)}}()}var i=document.getElementsByTagName("head")[0].getElementsByTagName("script");for(var n=0;n<i.length;n++){var o=i[n].src.match(/(.*?)flow-?\d?\.js/);if(o){var r=o[1];break}}t.Flow=function(i,n,o){var s=this;var a;var l,f;var d,c;var h=false;var u;var p=Modernizr.prefixed("transform");this.width=0;this.height=0;var g=0;var m=true;var v=false;var w=[];var y=[];var E=[];var C=[];var x={size:150,backgroundcolor:"000000",gradientcolor:undefined,coverwidth:150,coverheight:"auto",covergap:40,coverangle:70,coverdepth:170,coveroffset:130,removeblackborder:false,fixedsize:false,focallength:250,opacitydecrease:.1,reflectionopacity:.3,reflectionratio:155,reflectionoffset:0,showduration:true,showtext:true,textstyle:"div.flow_textfield{color:#f1f1f1; text-align:center; font-family:Arial Rounded MT Bold;} .flow_textfield h1{font-size:14px; font-weight:normal; line-height:21px;} .flow_textfield h2{font-size:11px; font-weight:normal;}",textoffset:75,tweentime:.8,rotatedelay:0,dockicon:true,onidle:"show",onpaused:"hide",onplaying:"hide",oncompleted:"show",file:undefined,xposition:0,yposition:0};t.Utils.addClass(o,"jwplayer_flow");t.Utils.inject(r+"flow.css");function A(e){if(i.getRenderingMode()!="html5")return;for(var r in x){if(n[r]===undefined)n[r]=x[r]}t.Utils.inject(n.textstyle);g=n.size;n.backgroundcolor=n.backgroundcolor.indexOf("#")==-1?"#"+n.backgroundcolor:n.backgroundcolor;o.style.backgroundColor=n.backgroundcolor;if(n.gradientcolor!==undefined){n.gradientcolor=n.gradientcolor.indexOf("#")==-1?"#"+n.gradientcolor:n.gradientcolor;o.style.background="-webkit-gradient(linear, left top, left bottom, from("+n.gradientcolor+"), to("+n.backgroundcolor+"))"}if(n.dockicon===true&&typeof i.addButton==="function"){var s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAPCAYAAADgbT9oAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABV0RVh0Q3JlYXRpb24gVGltZQA2LzE4LzEx7HcX+AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAABCSURBVDiN7ZMxDgAgCAMP4/+/XAcjIQ4OBDduYeq1CyZJgFGLRrHQmbGFvVxJ18kawLfFLW5xix/El7brZvDst8ULHQsIIS+DTYcAAAAASUVORK5CYII=";i.addButton(s,"Show Playlist",b,"flow")}i.onPlaylist(G);i.onPlaylistItem(H);i.onPlay(_);i.onBuffer(_);i.onPause(_);i.onComplete(W);o.addEventListener(t.Utils.getTransEndEventName(),P);o.addEventListener("mousewheel",T);o.addEventListener("DOMMouseScroll",T)}function T(e){e.preventDefault();var t=e.detail?e.detail*-120:e.wheelDelta;var i=Math.ceil(Math.abs(t)/120);if(i>0){var n=Math.abs(t)/t;var o=null;if(n>0)o=s.left;else if(n<0)o=s.right;if(typeof o==="function"){for(var r=0;r<i;r++)o()}}}function b(){if(!a[i.getCurrentItem()]["ova.hidden"]){i.pause(true);s.show()}}function k(){return i.getContainer().getElementsByTagName("video")[0]}function M(){if(k()){var e=k().style[p];if(e){k().style[p]=e.replace(/translate\(.+?\)/,"translate(-"+s.width+"px,-"+s.height+"px)")}else{k().style[p]="translate(-"+s.width+"px,-"+s.height+"px)"}}}function N(){if(k()){var e=k().style[p];k().style[p]=e.replace(/translate\(.+?\)/,"translate(0px,0px)")}}function R(){return n.position=="left"||n.position=="right"||n.position=="top"||n.position=="bottom"}function F(e){if(n.showtext===true){var t=d[e];if(t){f.innerHTML="<h1>"+(t.title===undefined?"":t.title)+"</h1><h2>"+(t.description===undefined?"":t.description)+"</h2>"}}for(var i=0;i<w.length;i++){w[i](e)}}function L(e){if(n.rotatedelay>0&&u){s.stopRotation()}if(n.file===undefined){if(c[e]!=i.getCurrentItem())i.playlistItem(c[e]);else if(i.getState()=="PLAYING")i.pause(true);else i.play(true)}else{if(d[e].link)window.open(d[e].link,i.config.linktarget);if(d[e].file){i.load({file:d[e].file,image:d[e].image});i.play()}}for(var t=0;t<y.length;t++){y[t](e)}}function P(e){if(e.target==o){if(parseInt(o.style.opacity,10)===0){D()}else{U()}}}function I(){v=false;s.resize()}function z(){if(h||Q()===false)return;h=true;if(R()){new TWEEN.Tween(n).to({size:0},400).easing(TWEEN.Easing.Cubic.EaseOut).onUpdate(I).onComplete(D).start()}else{setTimeout(function(){if(n.showtext===true){f.style.opacity=0}l.hide(S)},100);N()}for(var e=0;e<C.length;e++){C[e]()}}function S(){o.style.opacity=0}function D(){V(false);h=false}function O(){if(h||Q()===true)return;h=true;V(true);if(R()){n.size=1;I();new TWEEN.Tween(n).to({size:g},400).easing(TWEEN.Easing.Cubic.EaseOut).onUpdate(I).onComplete(X).start()}else{setTimeout(function(){o.style.opacity=1},100)}for(var e=0;e<E.length;e++){E[e]()}}function U(){if(n.showtext===true){f.style.opacity=1}l.show(X)}function X(){h=false;if(!R()){M()}}function G(r){a=r.playlist;n.coverheight=n.coverheight=="auto"?i.config.height:n.coverheight;if(n.file===undefined){d=[];c=[];var s=0;for(var f=0;f<a.length;f++){var h=a[f];if(!h["ova.hidden"]&&h.image){d[s]={title:h.title,description:h.description};d[s].image=h.image;if(n.showduration){d[s].duration=h.duration}c[s]=f;s++}}if(l)l.destroy();l=new t.CoverFlow(o,d,n.coverwidth,n.coverheight,n.covergap,n.coverangle,n.coverdepth,n.coveroffset,n.opacitydecrease,n.backgroundcolor,n.reflectionopacity,n.reflectionratio,n.reflectionoffset,n.removeblackborder,n.fixedsize,n.tweentime,n.focallength);o.appendChild(l.domElement);j()}else{e.utils.ajax(n.file,B)}}function B(t){try{var i=e.html5.parsers.rssparser.parse(t.responseXML.firstChild);if(i.length>0){Y(i)}}catch(n){}}function Y(e){d=[];for(var i=0;i<e.length;i++){var r=e[i];d[i]={title:r.title,description:r.description,link:r.link,file:r.file};d[i].image=r.image;if(n.showduration){d[i].duration=r.duration}}if(l)l.destroy();l=new t.CoverFlow(o,d,n.coverwidth,n.coverheight,n.covergap,n.coverangle,n.coverdepth,n.coveroffset,n.opacitydecrease,n.backgroundcolor,n.reflectionopacity,n.reflectionratio,n.reflectionoffset,n.removeblackborder,n.fixedsize,n.tweentime,n.focallength);o.appendChild(l.domElement);j();l.to(0)}function j(){l.onFocus(F);l.onClick(L);if(f)o.removeChild(f);if(n.showtext===true){f=document.createElement("div");f.className="flow_textfield";o.appendChild(f)}s.resize();H();o.style.display="block";if(n.onidle=="hide"){o.style.display="none";V(false);o.style.opacity=0;l.hide(null);f.style.opacity=0}if(n.rotatedelay>0){if(u)s.stopRotation();u=setInterval(q,n.rotatedelay);o.addEventListener("touchstart",s.stopRotation,false);o.addEventListener("mousedown",s.stopRotation,false)}h=false;if(n.file!==undefined){if(i.getState()=="PLAYING"||i.getState()=="BUFFERING"){if(n.onplaying=="show")s.show();else if(n.onplaying=="hide")s.hide()}}}function H(e){if(a[i.getCurrentItem()]["ova.hidden"]){s.hide()}else if(n.file===undefined){l.to(c.indexOf(i.getCurrentItem()))}}function W(e){if(n.oncompleted=="show")s.show();else if(n.oncompleted=="hide")s.hide()}function _(e){switch(i.getState()){case"PAUSED":if(n.onpaused=="show")s.show();else if(n.onpaused=="hide")s.hide();break;case"BUFFERING":case"PLAYING":if(n.onplaying=="show")s.show();else if(n.onplaying=="hide")s.hide();break}}function Q(){return o.style.display!="none"}function V(e){if(e){o.style.display="block"}else{o.style.display="none"}}i.onReady(A);this.stopRotation=function(){o.removeEventListener("touchstart",s.stopRotation,false);o.removeEventListener("mousedown",s.stopRotation,false);clearInterval(u)};function q(){l.next()}this.left=function(){if(i.getRenderingMode()=="html5"){l.left()}else if(i.getRenderingMode()=="flash"){i.getContainer().flowLeft()}};this.right=function(){if(i.getRenderingMode()=="html5"){l.right()}else if(i.getRenderingMode()=="flash"){i.getContainer().flowRight()}};this.prev=function(){if(i.getRenderingMode()=="html5"){l.prev()}else if(i.getRenderingMode()=="flash"){i.getContainer().flowPrev()}};this.next=function(){if(i.getRenderingMode()=="html5"){l.next()}else if(i.getRenderingMode()=="flash"){i.getContainer().flowNext()}};this.to=function(e){if(i.getRenderingMode()=="html5"){l.to(e)}else if(i.getRenderingMode()=="flash"){i.getContainer().flowTo(e)}};this.onFocus=function(e){if(i.getRenderingMode()=="html5"){w.push(e)}else if(i.getRenderingMode()=="flash"){i.getContainer().flowOnFocus(e.toString())}};this.onClick=function(e){if(i.getRenderingMode()=="html5"){y.push(e)}else if(i.getRenderingMode()=="flash"){i.getContainer().flowOnClick(e.toString())}};this.hide=function(){if(i.getRenderingMode()=="html5"){z()}else if(i.getRenderingMode()=="flash"){i.getContainer().flowHide()}};this.show=function(){if(i.getRenderingMode()=="html5"){O()}else if(i.getRenderingMode()=="flash"){i.getContainer().flowShow()}};this.onHide=function(e){if(i.getRenderingMode()=="html5"){C.push(e)}else if(i.getRenderingMode()=="flash"){i.getContainer().flowOnHide(e.toString())}};this.onShow=function(e){if(i.getRenderingMode()=="html5"){E.push(e)}else if(i.getRenderingMode()=="flash"){i.getContainer().flowOnShow(e.toString())}};this.getDisplayElement=function(){return o};function Z(e,t){if(!v){v=true;if(m){m=false;setTimeout(function(){i.resize(e,t)},0)}else{i.resize(e,t)}}}this.resize=function(e,t){if(i.getRenderingMode()=="html5"){if(e)s.width=e;if(t)s.height=t;var r=s.width;var a=s.height;if(R()&&n.size>0){if(n.position=="left"||n.position=="right"){r=n.size;a=i.config.height;Z(i.config.width-r,i.config.height);o.style[n.position]=-n.size+"px"}else if(n.position=="top"||n.position=="bottom"){r=i.config.width;a=n.size;Z(i.config.width,i.config.height-a);if(n.position=="top"){o.style.top=-a+"px"}else if(n.position=="bottom"){o.style.top=i.config.height-a+"px"}}i.getContainer().style["margin"+J(n.position)]=n.size+"px"}o.style.width=r+"px";o.style.height=a+"px";if(l){l.domElement.style.left=r*.5+n.xposition+"px";l.domElement.style.top=a*.5+n.yposition+"px"}if(f){f.style.top=a-n.textoffset+"px"}}else{if(o.parentNode){o.parentNode.removeChild(o)}}};function J(e){return e.substr(0,1).toUpperCase()+e.substr(1)}function K(){window.requestAnimationFrame(K);TWEEN.update()}K()};e().registerPlugin("flow","6.0",t.Flow,"./flow.swf")})(jwplayer,window);(function(e){e.CoverFlow=function(t,i,n,o,r,s,a,l,f,d,c,h,u,p,g,m,v){var w=this;this.GAP=r;this.ANGLE=s;this.DEPTH=-a;this.OFFSET=l+r;this.T_NEG_ANGLE="rotateY("+-this.ANGLE+"deg)";this.T_ANGLE="rotateY("+this.ANGLE+"deg)";this.OPACITY=f;this.DURATION=m;this.hideComplete=null;this.showComplete=null;var y=[];var E=i.length;var C=0;var x=0;var A=0;var T=[];var b=[];this.domElement=document.createElement("div");this.domElement.className="flow_wrap";var k=document.createElement("div");k.className="flow_tray";this.domElement.appendChild(k);this.domElement.style[Modernizr.prefixed("perspective")]=v+"px";var M=new e.Delegate(this,k);var N=new e.TouchController(this,M,k);var R=null;for(var F=0;F<i.length;F++){R=new e.Cover(this,F,i[F].image,i[F].duration,n,o,c,h,u,d,p,g);M.cells.push(R);k.appendChild(R.domElement);R.domElement.onmousedown=P;R.domElement.style[Modernizr.prefixed("transitionDuration")]=m+"s";y[F]=R}R.domElement.firstChild.addEventListener(e.Utils.getTransEndEventName(),L,true);function L(e){e.stopPropagation();if(parseInt(R.domElement.firstChild.style.opacity,10)===0){w.domElement.style.opacity=0;if(typeof w.hideComplete=="function")w.hideComplete()}else if(parseInt(R.domElement.firstChild.style.opacity,10)===1){if(typeof w.showComplete=="function")w.showComplete()}}this.hide=function(e){w.hideComplete=e;for(var t=0;t<y.length;t++){y[t].domElement.firstChild.style.opacity=0}};this.show=function(e){w.showComplete=e;w.domElement.style.opacity=1;for(var t=0;t<y.length;t++){y[t].domElement.firstChild.style.opacity=1}};this.itemComplete=function(e){x=x<e?e:x;++C;if(C==E){w.to(0);for(var t=0;t<E;t++){y[t].setY(x)}}};this.left=function(){if(A>0)w.to(A-1)};this.right=function(){if(A<E-1)w.to(A+1)};this.prev=function(){if(A>0)w.to(A-1);else w.to(E-1)};this.next=function(){if(A<E-1)w.to(A+1);else w.to(0)};this.to=function(e){if(e>E-1)e=E-1;else if(e<0)e=0;A=e;N.to(e)};this.focused=function(e){for(var t=0;t<T.length;t++){T[t](e)}};this.clicked=function(e){for(var t=0;t<b.length;t++){b[t](e)}};this.onFocus=function(e){T.push(e)};this.onClick=function(e){b.push(e)};this.destroy=function(){t.removeChild(w.domElement);t.removeEventListener("touchstart",N,true);window.removeEventListener("keydown",I,false)};function P(e){var t=this;var i=0;while((t=t.previousSibling)!==null)++i;var n=y[i];var o=e.offsetY||e.layerY;if(o<n.halfHeight){e.preventDefault();if(n.index!=A)w.to(n.index);else w.clicked(n.index)}}t.addEventListener("touchstart",N,true);window.addEventListener("keydown",I,false);function I(e){switch(e.keyCode){case 37:w.left();break;case 39:w.right();break;case 38:w.to(0);break;case 40:w.to(E-1);break;case 32:w.clicked(A);break}}}})(window.flow);(function(e){e.Cover=function(e,t,i,n,o,r,s,a,l,f,d,c){var h=this;var u;var p;this.index=t;this.halfHeight=0;this.domElement=document.createElement("div");this.domElement.className="flow_cell";var g=this.domElement.style;g.backgroundColor=f;var m=document.createElement("canvas");this.domElement.appendChild(m);var v=document.createElement("img");v.addEventListener("load",w);v.src=i;function w(){var t=v.width;var i=v.height;var n=0;var f=0;var w=0;if(d){var y=document.createElement("canvas");y.width=t;y.height=i;var E=y.getContext("2d");E.drawImage(v,0,0);var C=E.getImageData(0,0,t,i).data;var x=0;var A=0;var T=0;for(var b=0;b<i;b++){x=0;for(A=0;A<t;A++){T=(b*t+A)*4;x+=C[T]<<16|C[T+1]<<8|C[T+2]}if(x/t<460551)n++;else break}for(b=i-1;b>=0;b--){x=0;for(A=0;A<t;A++){T=(b*t+A)*4;x+=C[T]<<16|C[T+1]<<8|C[T+2]}if(x/t<460551)f++;else break}i-=n+f}var k;if(c){u=Math.round(o);p=Math.round(r);if(u/t<p/i){k=p/i;w+=(t-u/k)*.5}else{k=u/t;n+=(i-p/k)*.5}}else{if(o>=r){u=Math.round(t/i*r);p=Math.round(r);k=r/i}else{u=Math.round(o);p=Math.round(i/t*o);k=o/t}}h.halfHeight=p;g.top=-(p*.5)+"px";g.left=-(u*.5)+"px";g.width=u+"px";g.height=p+"px";m.width=u;m.height=p*2;var M=m.getContext("2d");M.drawImage(v,w,n,t-2*w,i-2*n,0,0,u,p);if(s>0){g.height=p*2+"px";h.reflect(m,u,p,s,a,l)}e.itemComplete(p)}this.setY=function(e){var t=e*.5-(e-p);this.domElement.style.top=-t+"px"}};e.Cover.prototype.reflect=function(e,t,i,n,o,r){var s=e.getContext("2d");s.save();s.scale(1,-1);s.drawImage(e,0,-i*2-r);s.restore();s.globalCompositeOperation="destination-out";var a=s.createLinearGradient(0,0,0,i);a.addColorStop(o/255,"rgba(255, 255, 255, 1.0)");a.addColorStop(0,"rgba(255, 255, 255, "+(1-n)+")");s.translate(0,i+r);s.fillStyle=a;s.fillRect(0,0,t,i)}})(window.flow);(function(e){e.TouchController=function(e,t,i){this.flow=e;this.delegate=t;this.elem=i;this.currentX=0};e.TouchController.prototype.touchstart=function(e){e.stopImmediatePropagation();this.startX=e.touches[0].pageX-this.currentX;this.pageY=e.touches[0].pageY;this.touchMoved=false;window.addEventListener("touchmove",this,true);window.addEventListener("touchend",this,true);this.elem.style.webkitTransitionDuration="0s"};e.TouchController.prototype.touchmove=function(e){e.stopImmediatePropagation();this.touchMoved=true;this.lastX=this.currentX;this.lastMoveTime=(new Date).getTime();this.currentX=e.touches[0].pageX-this.startX;this.delegate.update(this.currentX)};e.TouchController.prototype.touchend=function(e){e.stopImmediatePropagation();window.removeEventListener("touchmove",this,true);window.removeEventListener("touchend",this,true);this.elem.style.webkitTransitionDuration=this.flow.DURATION+"s";if(this.touchMoved){var t=this.currentX-this.lastX;var i=(new Date).getTime()-this.lastMoveTime+1;this.currentX=this.currentX+t*50/i;this.delegate.updateTouchEnd(this)}else{this.delegate.click(e,this.pageY,this.currentX)}};e.TouchController.prototype.to=function(e){this.currentX=-e*this.delegate.flow.GAP;this.delegate.update(this.currentX)};e.TouchController.prototype.handleEvent=function(e){this[e.type](e);e.preventDefault()}})(window.flow);(function(e){e.Delegate=function(e,t){this.flow=e;this.elem=t;this.cells=[];this.transforms=[];this.prevF=-1;this.transformProp=Modernizr.prefixed("transform")};e.Delegate.prototype.updateTouchEnd=function(e){var t=this.getFocusedCell(e.currentX);e.currentX=-t*this.flow.GAP;this.update(e.currentX)};e.Delegate.prototype.getFocusedCell=function(e){var t=-Math.round(e/this.flow.GAP);return Math.min(Math.max(t,0),this.cells.length-1)};e.Delegate.prototype.getFocusedCellOne=function(e){var t=-Math.round(e/this.flow.GAP);return Math.min(Math.max(t,-1),this.cells.length)};e.Delegate.prototype.click=function(e,t,i){var n=-Math.round(i/this.flow.GAP);var o=this.cells[n];if(o.domElement==e.target.parentNode){var r=this.findPos(o.domElement);var s=t-r.y;if(s<o.halfHeight){this.flow.clicked(o.index)}}};e.Delegate.prototype.findPos=function(e){var t=0;var i=0;if(e.offsetParent){do{t+=e.offsetLeft;i+=e.offsetTop}while((e=e.offsetParent)!==null);return{x:t,y:i}}};e.Delegate.prototype.setStyleForCell=function(e,t,i){if(this.transforms[t]!=i){e.domElement.style[this.transformProp]=i;this.transforms[t]=i}};e.Delegate.prototype.transformForCell=function(e,t,i){var n=t*this.flow.GAP;if(e==t){return"translate3d("+n+"px, 0, 0)"}else if(t>e){return"translate3d("+(n+this.flow.OFFSET)+"px, 0, "+this.flow.DEPTH+"px) "+this.flow.T_NEG_ANGLE}else{return"translate3d("+(n-this.flow.OFFSET)+"px, 0, "+this.flow.DEPTH+"px) "+this.flow.T_ANGLE}};e.Delegate.prototype.update=function(e){this.elem.style[this.transformProp]="translate3d("+e+"px, 0, 0)";var t=this.getFocusedCellOne(e);if(t!=this.prevF){this.flow.focused(t);this.prevF=t}for(var i=0;i<this.cells.length;i++){this.setStyleForCell(this.cells[i],i,this.transformForCell(t,i,e))}}})(window.flow);(function(e){e.Utils=function(){};e.Utils.hasFlash=typeof navigator.plugins!="undefined"&&typeof navigator.plugins["Shockwave Flash"]=="object"||window.ActiveXObject&&new ActiveXObject("ShockwaveFlash.ShockwaveFlash")!==false;e.Utils.isIE=navigator.userAgent.match(/msie/i)!==null;e.Utils.css=function(e,t){if(e){for(var i in t){if(typeof t[i]==="undefined"){continue}else if(typeof t[i]=="number"&&!(i=="zIndex"||i=="opacity")){if(isNaN(t[i])){continue}t[i]=Math.ceil(t[i])+"px"}try{e.style[i]=t[i]}catch(n){}}}};e.Utils.addClass=function(e,t){if(e.className.indexOf(t)===-1){e.className+=" "+t}};e.Utils.inject=function(e){var t=document.getElementsByTagName("head")[0];var i;switch(e.slice(-3)){case"css":i=document.createElement("link");i.rel="stylesheet";i.href=e;break;case".js":i=document.createElement("script");i.src=e;break;default:i=document.createElement("style");i.appendChild(document.createTextNode(e))}t.appendChild(i)};e.Utils.getTransEndEventName=function(){return{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"msTransitionEnd",transition:"transitionend"}[Modernizr.prefixed("transition")]}})(window.flow);if(!Array.indexOf){Array.prototype.indexOf=function(e){for(var t=0;t<this.length;t++){if(this[t]==e){return t}}return-1}}