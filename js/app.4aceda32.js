(function(e){function t(t){for(var i,s,l=t[0],u=t[1],c=t[2],d=0,p=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);o&&o(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,l=1;l<n.length;l++){var u=n[l];0!==r[u]&&(i=!1)}i&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},r={app:0},a=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var o=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("85ec"),r=n.n(i);r.a},"07e7":function(e,t,n){"use strict";var i=n("13cc"),r=n.n(i);r.a},"13cc":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("typeahead",{attrs:{data:e.data},model:{value:e.selectedId,callback:function(t){e.selectedId=t},expression:"selectedId"}})],1)},a=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[null===e.selectedValue?n("div",{staticClass:"typeahead"},[n("div",{staticClass:"input-wrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"}],staticClass:"input",domProps:{value:e.input},on:{input:[function(t){t.target.composing||(e.input=t.target.value)},e.onInput]}}),n("span",{staticClass:"reset",on:{click:e.reset}},[e._v("x")])]),e.items.length>0?n("div",{ref:"items",staticClass:"items"},e._l(e.items,(function(t){return n("div",{key:t.id,staticClass:"item",on:{click:function(n){return e.select(t.id)}}},[e._v(" "+e._s(t.label)+" ")])})),0):e._e()]):n("div",{staticClass:"result-wrapper"},[n("div",{staticClass:"result"},[n("span",[e._v(e._s(e.selectedLabel))]),n("span",{staticClass:"deselect",on:{click:e.deselect}},[e._v("x")])])])])},l=[],u=(n("99af"),n("4de4"),n("7db0"),n("a9e3"),n("4d63"),n("ac1f"),n("25f0"),n("2909")),c={props:{value:{type:[String,Number],default:null},data:{type:Array,required:!0}},computed:{selectedLabel:function(){var e=this;return this.selectedValue?this.data.find((function(t){return t.id===e.selectedValue})).label:""}},data:function(){return{selectedValue:this.value,input:"",items:[]}},mounted:function(){},methods:{select:function(e){this.selectedValue=e,this.$emit("input",this.selectedValue),this.reset()},reset:function(){this.input="",this.items=[]},deselect:function(){this.selectedValue=null,this.$emit("input",this.selectedValue)},onInput:function(){this.data.length>0&&this.doFilter()},doFilter:function(){if(0!==this.input.length){for(var e=new RegExp("^"+this.input,"i"),t=this.data.filter((function(t){return e.test(t.label)})),n=new RegExp(this.input,"i"),i=this.data.filter((function(e){return n.test(e.label)&&!t.find((function(t){return t.id===e.id}))})),r="^",a=0;a<this.input.length;a++)r+="(?=.*"+this.input[a]+")";var s=new RegExp(r,"i"),l=this.data.filter((function(e){return s.test(e.label)&&!t.find((function(t){return t.id===e.id}))&&!i.find((function(t){return t.id===e.id}))}));this.items=[].concat(Object(u["a"])(t),Object(u["a"])(i),Object(u["a"])(l))}else this.items=[]}}},o=c,d=(n("07e7"),n("2877")),p=Object(d["a"])(o,s,l,!1,null,"485da546",null),f=p.exports,h={name:"app",components:{Typeahead:f},data:function(){return{selectedId:null,data:[{id:1,label:"thing1"},{id:2,label:"something2"},{id:3,label:"thingsome3"},{id:4,label:"some4"}]}}},v=h,b=(n("034f"),Object(d["a"])(v,r,a,!1,null,null,null)),m=b.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(m)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.4aceda32.js.map