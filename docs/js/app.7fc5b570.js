(function(e){function t(t){for(var o,i,a=t[0],u=t[1],c=t[2],f=0,p=[];f<a.length;f++)i=a[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(o=!1)}o&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},s=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var l=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"21cb":function(e,t,n){"use strict";n("2fc7")},"2fc7":function(e,t,n){},"37ed":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",style:e.show_cursor?"":e.no_cursor_style,attrs:{id:"app"}},[e._m(0),n("textarea",{attrs:{id:"input",placeholder:"Enter the above text here using the virtual keyboard below."},domProps:{value:e.input},on:{input:e.onInputChange}}),e._v(" "),n("div",{staticClass:"dropdown-div"},[n("div",[n("button",{staticClass:"start-button"},[e._v("Start")]),n("span",[e._v(" Time: "+e._s(e.time)+" seconds ")])]),n("div",[n("span",[e._v("Keyboard layout: ")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.layout,expression:"layout"}],staticClass:"dropdown",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.layout=t.target.multiple?n:n[0]}}},e._l(e.allLayouts,(function(t){return n("option",{key:t},[e._v(e._s(t))])})),0)])]),n("SimpleKeyboard",{attrs:{input:e.input,layout:e.layout},on:{onChange:e.onChange,onKeyPress:e.onKeyPress}})],1)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text"},[n("h1",[e._v("Typing speed test")]),n("h3",[e._v("Test your typing speed and comfort with various layouts. When ready, press the start button and enter the text below.")]),n("p",[e._v(" Brainforce rethinks how we interact with the digital world. Control your smartphone or computer using just your gaze and thoughts! Brainforce uses eye tracking for cursor control and Electroencephalography to monitor brain waves of the user. These brain waves are then used to detect when the user intends to 'click' on an item. ")]),n("p",[e._v(" Brainforce... just look, and think! ")])])}],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card"})},a=[],u={name:"Block",props:{msg:String}},c=u,l=(n("21cb"),n("2877")),f=Object(l["a"])(c,i,a,!1,null,"707898c5",null),p=f.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.keyboardClass})},h=[],y=n("dd7f"),v=n.n(y),b=n("8235"),g={default:["` 1 2 3 4 5 6 7 8 9 0 - = {bksp}","{tab} z q p x j y g b v k [ ] \\","{lock} f s d c r w u l m ; ' {enter}","{shift} n a t h e o i , . / {shift}",".com {space} @"],shift:["~ ! @ # $ % ^ & * ( ) _ + {bksp}","{tab} Z Q P X J Y G B V K { } |",'{lock} F S D C R W U L M : " {enter}',"{shift} N A T H E O I < > ? {shift}",".com {space} @"]},m={name:"SimpleKeyboard",props:{keyboardClass:{default:"simple-keyboard",type:String},input:{type:String},layout:{type:String}},data:function(){return{keyboard:null,layoutFiles:{qwerty:null,japanese:b["a"],custom:g}}},mounted:function(){this.keyboard=new v.a({onChange:this.onChange,onKeyPress:this.onKeyPress,layout:this.layoutFiles[this.layout]})},methods:{onChange:function(e){this.$emit("onChange",e)},onKeyPress:function(e){this.$emit("onKeyPress",e),"{shift}"!==e&&"{lock}"!==e||this.handleShift()},handleShift:function(){var e=this.keyboard.options.layoutName,t="default"===e?"shift":"default";this.keyboard.setOptions({layoutName:t})}},watch:{input:function(e){this.keyboard.setInput(e)}}},w=m,_=(n("c122"),Object(l["a"])(w,d,h,!1,null,null,null)),k=_.exports,C={name:"App",components:{Block:p,SimpleKeyboard:k},data:function(){return{no_cursor_style:"cursor: none;",show_cursor:!0,input:"",layout:"custom",allLayouts:["qwerty","custom"]}},methods:{onChange:function(e){this.input=e,this.focus()},onKeyPress:function(e){console.log("button",e),this.focus()},onInputChange:function(e){this.input=e.target.value,this.focus()},focus:function(){document.getElementById("input").focus()}},computed:{time:function(){}}},j=C,O=(n("5c0b"),Object(l["a"])(j,r,s,!1,null,null,null)),S=O.exports,P=n("9483");Object(P["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(S)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){},c122:function(e,t,n){"use strict";n("37ed")}});
//# sourceMappingURL=app.7fc5b570.js.map