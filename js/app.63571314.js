(function(){"use strict";var o={7753:function(o,t,n){var e=n(5130),r=n(6768),u=n(4232);const a=["onUpdate:modelValue"],i=["onClick"];function d(o,t,n,d,l,c){return(0,r.uX)(),(0,r.CE)("div",null,[(0,r.Lk)("div",null,[(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>l.newTodo=o),onKeyup:t[1]||(t[1]=(0,e.jR)(((...o)=>c.addTodo&&c.addTodo(...o)),["enter"])),placeholder:"新しいタスク"},null,544),[[e.Jo,l.newTodo]]),(0,r.Lk)("button",{onClick:t[2]||(t[2]=(...o)=>c.addTodo&&c.addTodo(...o))}," 追加 ")]),(0,r.Lk)("ul",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(l.todos,((o,n)=>((0,r.uX)(),(0,r.CE)("li",{key:n},[(0,r.bo)((0,r.Lk)("input",{type:"checkbox","onUpdate:modelValue":t=>o.completed=t,onChange:t[3]||(t[3]=(...o)=>c.updateLocalStorage&&c.updateLocalStorage(...o))},null,40,a),[[e.lH,o.completed]]),(0,r.Lk)("span",null,(0,u.v_)(o.name),1),(0,r.Lk)("button",{onClick:o=>c.removeTodo(n)}," 削除 ",8,i)])))),128))])])}n(4114);var l={data(){return{newTodo:"",todos:[]}},methods:{addTodo(){0!==this.newTodo.trim().length&&(this.todos.push({name:this.newTodo,completed:!1}),this.updateLocalStorage(),this.newTodo="")},removeTodo(o){this.todos.splice(o,1),this.updateLocalStorage()},updateLocalStorage(){localStorage.setItem("todos",JSON.stringify(this.todos))}},created(){const o=localStorage.getItem("todos");o&&(this.todos=JSON.parse(o))}},c=n(1241);const s=(0,c.A)(l,[["render",d]]);var f=s;(0,e.Ef)(f).mount("#app")}},t={};function n(e){var r=t[e];if(void 0!==r)return r.exports;var u=t[e]={exports:{}};return o[e].call(u.exports,u,u.exports,n),u.exports}n.m=o,function(){var o=[];n.O=function(t,e,r,u){if(!e){var a=1/0;for(c=0;c<o.length;c++){e=o[c][0],r=o[c][1],u=o[c][2];for(var i=!0,d=0;d<e.length;d++)(!1&u||a>=u)&&Object.keys(n.O).every((function(o){return n.O[o](e[d])}))?e.splice(d--,1):(i=!1,u<a&&(a=u));if(i){o.splice(c--,1);var l=r();void 0!==l&&(t=l)}}return t}u=u||0;for(var c=o.length;c>0&&o[c-1][2]>u;c--)o[c]=o[c-1];o[c]=[e,r,u]}}(),function(){n.n=function(o){var t=o&&o.__esModule?function(){return o["default"]}:function(){return o};return n.d(t,{a:t}),t}}(),function(){n.d=function(o,t){for(var e in t)n.o(t,e)&&!n.o(o,e)&&Object.defineProperty(o,e,{enumerable:!0,get:t[e]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){n.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)}}(),function(){var o={524:0};n.O.j=function(t){return 0===o[t]};var t=function(t,e){var r,u,a=e[0],i=e[1],d=e[2],l=0;if(a.some((function(t){return 0!==o[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(d)var c=d(n)}for(t&&t(e);l<a.length;l++)u=a[l],n.o(o,u)&&o[u]&&o[u][0](),o[u]=0;return n.O(c)},e=self["webpackChunktodo2"]=self["webpackChunktodo2"]||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}();var e=n.O(void 0,[504],(function(){return n(7753)}));e=n.O(e)})();
//# sourceMappingURL=app.63571314.js.map