(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46340c47"],{"04d1":function(t,e,i){var s=i("342f"),a=s.match(/firefox\/(\d+)/i);t.exports=!!a&&+a[1]},"166a":function(t,e,i){},3408:function(t,e,i){},"3ad0":function(t,e,i){},"4dae":function(t,e,i){var s=i("da84"),a=i("23cb"),n=i("07fa"),r=i("8418"),l=s.Array,o=Math.max;t.exports=function(t,e,i){for(var s=n(t),h=a(e,s),u=a(void 0===i?s:i,s),c=l(o(u-h,0)),d=0;h<u;h++,d++)r(c,d,t[h]);return c.length=d,c}},"4e827":function(t,e,i){"use strict";var s=i("23e7"),a=i("e330"),n=i("59ed"),r=i("7b0b"),l=i("07fa"),o=i("577e"),h=i("d039"),u=i("addb"),c=i("a640"),d=i("04d1"),p=i("d998"),v=i("2d00"),m=i("512c"),g=[],f=a(g.sort),b=a(g.push),I=h((function(){g.sort(void 0)})),y=h((function(){g.sort(null)})),C=c("sort"),x=!h((function(){if(v)return v<70;if(!(d&&d>3)){if(p)return!0;if(m)return m<603;var t,e,i,s,a="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:i=3;break;case 68:case 71:i=4;break;default:i=2}for(s=0;s<47;s++)g.push({k:e+s,v:i})}for(g.sort((function(t,e){return e.v-t.v})),s=0;s<g.length;s++)e=g[s].k.charAt(0),a.charAt(a.length-1)!==e&&(a+=e);return"DGBEFHACIJK"!==a}})),_=I||!y||!C||!x,A=function(t){return function(e,i){return void 0===i?-1:void 0===e?1:void 0!==t?+t(e,i)||0:o(e)>o(i)?1:-1}};s({target:"Array",proto:!0,forced:_},{sort:function(t){void 0!==t&&n(t);var e=r(this);if(x)return void 0===t?f(e):f(e,t);var i,s,a=[],o=l(e);for(s=0;s<o;s++)s in e&&b(a,e[s]);u(a,A(t)),i=a.length,s=0;while(s<i)e[s]=a[s++];while(s<o)delete e[s++];return e}})},"512c":function(t,e,i){var s=i("342f"),a=s.match(/AppleWebKit\/(\d+)\./);t.exports=!!a&&+a[1]},"61d2":function(t,e,i){},"7d97":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-list",[t.notes.length?i("div",t._l(t.notes,(function(e,s){return i("v-list-item",{key:s,attrs:{to:"/viewer/"+e.uuid,"two-line":""}},[i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(e.title))]),i("v-list-item-subtitle",[t._v(" "+t._s(t.summary(e))+" ")])],1)],1)})),1):i("div",[i("v-list-item",{attrs:{"two-line":""}},[i("v-list-item-content",[i("v-list-item-title",[t._v("KaraKaraFa 🐤🐤🐤")]),i("v-list-item-subtitle",[t._v("Your simple notebook.")])],1)],1)],1)])],1)},a=[],n=(i("4e827"),{name:"HomeView",data:function(){return{notes:[]}},methods:{summary:function(t){return"".concat(new Date(t.updated_at).toLocaleString())}},mounted:function(){var t=this,e=[],i=function(t,e){return t.updated_at<e.updated_at};this.$db.table("notes").each((function(t){return e.push(t)})).then((function(){var s;e.sort(i),(s=t.notes).push.apply(s,e)}))}}),r=n,l=i("2877"),o=i("6544"),h=i.n(o),u=i("a523"),c=(i("3ad0"),i("8dd9")),d=c["a"].extend().extend({name:"v-list",provide(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:()=>({groups:[]}),computed:{classes(){return{...c["a"].options.computed.classes.call(this),"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine}}},methods:{register(t){this.groups.push(t)},unregister(t){const e=this.groups.findIndex(e=>e._uid===t._uid);e>-1&&this.groups.splice(e,1)},listClick(t){if(!this.expand)for(const e of this.groups)e.toggle(t)}},render(t){const e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:{role:this.isInNav||this.isInMenu?void 0:"list",...this.attrs$}};return t(this.tag,this.setBackgroundColor(this.color,e),[this.$slots.default])}}),p=(i("61d2"),i("a9ad")),v=i("1c87"),m=i("4e82"),g=i("7560"),f=i("f2e7"),b=i("5607"),I=i("80d2"),y=i("d9bd"),C=i("58df");const x=Object(C["a"])(p["a"],v["a"],g["a"],Object(m["a"])("listItemGroup"),Object(f["b"])("inputValue"));var _=x.extend().extend({name:"v-list-item",directives:{Ripple:b["a"]},inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},inheritAttrs:!1,props:{activeClass:{type:String,default(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:()=>({proxyClass:"v-list-item--active"}),computed:{classes(){return{"v-list-item":!0,...v["a"].options.computed.classes.call(this),"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine,...this.themeClasses}},isClickable(){return Boolean(v["a"].options.computed.isClickable.call(this)||this.listItemGroup)}},created(){this.$attrs.hasOwnProperty("avatar")&&Object(y["d"])("avatar",this)},methods:{click(t){t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()},genAttrs(){const t={"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1,...this.$attrs};return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(t.role="option",t["aria-selected"]=String(this.isActive)):this.isInMenu?(t.role=this.isClickable?"menuitem":void 0,t.id=t.id||"list-item-"+this._uid):this.isInList&&(t.role="listitem")),t},toggle(){this.to&&void 0===this.inputValue&&(this.isActive=!this.isActive),this.$emit("change")}},render(t){let{tag:e,data:i}=this.generateRouteLink();i.attrs={...i.attrs,...this.genAttrs()},i[this.to?"nativeOn":"on"]={...i[this.to?"nativeOn":"on"],keydown:t=>{t.keyCode===I["l"].enter&&this.click(t),this.$emit("keydown",t)}},this.inactive&&(e="div"),this.inactive&&this.to&&(i.on=i.nativeOn,delete i.nativeOn);const s=this.$scopedSlots.default?this.$scopedSlots.default({active:this.isActive,toggle:this.toggle}):this.$slots.default;return t(e,this.isActive?this.setTextColor(this.color,i):i,s)}}),A=(i("db42"),i("9d26")),V=i("2b0e"),$=V["a"].extend({name:"v-list-item-icon",functional:!0,render(t,{data:e,children:i}){return e.staticClass=("v-list-item__icon "+(e.staticClass||"")).trim(),t("div",e,i)}}),k=i("7e2b"),w=V["a"].extend().extend({name:"bootable",props:{eager:Boolean},data:()=>({isBooted:!1}),computed:{hasContent(){return this.isBooted||this.eager||this.isActive}},watch:{isActive(){this.isBooted=!0}},created(){"lazy"in this.$attrs&&Object(y["d"])("lazy",this)},methods:{showLazyContent(t){return this.hasContent&&t?t():[this.$createElement()]}}}),B=i("3206"),O=i("0789");const S=Object(C["a"])(k["a"],w,p["a"],Object(B["a"])("list"),f["a"]);S.extend().extend({name:"v-list-group",directives:{ripple:b["a"]},props:{activeClass:{type:String,default:""},appendIcon:{type:String,default:"$expand"},color:{type:String,default:"primary"},disabled:Boolean,group:[String,RegExp],noAction:Boolean,prependIcon:String,ripple:{type:[Boolean,Object],default:!0},subGroup:Boolean},computed:{classes(){return{"v-list-group--active":this.isActive,"v-list-group--disabled":this.disabled,"v-list-group--no-action":this.noAction,"v-list-group--sub-group":this.subGroup}}},watch:{isActive(t){!this.subGroup&&t&&this.list&&this.list.listClick(this._uid)},$route:"onRouteChange"},created(){this.list&&this.list.register(this),this.group&&this.$route&&null==this.value&&(this.isActive=this.matchRoute(this.$route.path))},beforeDestroy(){this.list&&this.list.unregister(this)},methods:{click(t){this.disabled||(this.isBooted=!0,this.$emit("click",t),this.$nextTick(()=>this.isActive=!this.isActive))},genIcon(t){return this.$createElement(A["a"],t)},genAppendIcon(){const t=!this.subGroup&&this.appendIcon;return t||this.$slots.appendIcon?this.$createElement($,{staticClass:"v-list-group__header__append-icon"},[this.$slots.appendIcon||this.genIcon(t)]):null},genHeader(){return this.$createElement(_,{staticClass:"v-list-group__header",attrs:{"aria-expanded":String(this.isActive),role:"button"},class:{[this.activeClass]:this.isActive},props:{inputValue:this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.listeners$,click:this.click}},[this.genPrependIcon(),this.$slots.activator,this.genAppendIcon()])},genItems(){return this.showLazyContent(()=>[this.$createElement("div",{staticClass:"v-list-group__items",directives:[{name:"show",value:this.isActive}]},Object(I["j"])(this))])},genPrependIcon(){const t=this.subGroup&&null==this.prependIcon?"$subgroup":this.prependIcon;return t||this.$slots.prependIcon?this.$createElement($,{staticClass:"v-list-group__header__prepend-icon"},[this.$slots.prependIcon||this.genIcon(t)]):null},onRouteChange(t){if(!this.group)return;const e=this.matchRoute(t.path);e&&this.isActive!==e&&this.list&&this.list.listClick(this._uid),this.isActive=e},toggle(t){const e=this._uid===t;e&&(this.isBooted=!0),this.$nextTick(()=>this.isActive=e)},matchRoute(t){return null!==t.match(this.group)}},render(t){return t("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-list-group",class:this.classes}),[this.genHeader(),t(O["a"],this.genItems())])}}),i("899c"),i("166a");var j=V["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:I["f"]}}}),L=i("a452");const M=Object(C["a"])(j,L["a"],g["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes(){return{"v-item-group":!0,...this.themeClasses}},selectedIndex(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem(){if(!this.multiple)return this.selectedItems[0]},selectedItems(){return this.items.filter((t,e)=>this.toggleMethod(this.getValue(t,e)))},selectedValues(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod(){if(!this.multiple)return t=>this.valueComparator(this.internalValue,t);const t=this.internalValue;return Array.isArray(t)?e=>t.some(t=>this.valueComparator(t,e)):()=>!1}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created(){this.multiple&&!Array.isArray(this.internalValue)&&Object(y["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData(){return{class:this.classes}},getValue(t,e){return void 0===t.value?e:t.value},onClick(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register(t){const e=this.items.push(t)-1;t.$on("change",()=>this.onClick(t)),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,e)},unregister(t){if(this._isDestroyed)return;const e=this.items.indexOf(t),i=this.getValue(t,e);this.items.splice(e,1);const s=this.selectedValues.indexOf(i);if(!(s<0)){if(!this.mandatory)return this.updateInternalValue(i);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter(t=>t!==i):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}},updateItem(t,e){const i=this.getValue(t,e);t.isActive=this.toggleMethod(i)},updateItemsState(){this.$nextTick(()=>{if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)})},updateInternalValue(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory(t){if(!this.items.length)return;const e=this.items.slice();t&&e.reverse();const i=e.find(t=>!t.disabled);if(!i)return;const s=this.items.indexOf(i);this.updateInternalValue(this.getValue(i,s))},updateMultiple(t){const e=Array.isArray(this.internalValue)?this.internalValue:[],i=e.slice(),s=i.findIndex(e=>e===t);this.mandatory&&s>-1&&i.length-1<1||null!=this.max&&s<0&&i.length+1>this.max||(s>-1?i.splice(s,1):i.push(t),this.internalValue=i)},updateSingle(t){const e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render(t){return t(this.tag,this.genData(),this.$slots.default)}});M.extend({name:"v-item-group",provide(){return{itemGroup:this}}}),Object(C["a"])(M,p["a"]).extend({name:"v-list-item-group",provide(){return{isInGroup:!0,listItemGroup:this}},computed:{classes(){return{...M.options.computed.classes.call(this),"v-list-item-group":!0}}},methods:{genData(){return this.setTextColor(this.color,{...M.options.methods.genData.call(this),attrs:{role:"listbox"}})}}}),V["a"].extend({name:"v-list-item-action",functional:!0,render(t,{data:e,children:i=[]}){e.staticClass=e.staticClass?"v-list-item__action "+e.staticClass:"v-list-item__action";const s=i.filter(t=>!1===t.isComment&&" "!==t.text);return s.length>1&&(e.staticClass+=" v-list-item__action--stack"),t("div",e,i)}}),i("3408");var G=i("24b2"),z=i("a236"),E=Object(C["a"])(p["a"],G["a"],z["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes(){return{"v-avatar--left":this.left,"v-avatar--right":this.right,...this.roundedClasses}},styles(){return{height:Object(I["d"])(this.size),minWidth:Object(I["d"])(this.size),width:Object(I["d"])(this.size),...this.measurableStyles}}},render(t){const e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}}),D=E;D.extend({name:"v-list-item-avatar",props:{horizontal:Boolean,size:{type:[Number,String],default:40}},computed:{classes(){return{"v-list-item__avatar--horizontal":this.horizontal,...D.options.computed.classes.call(this),"v-avatar--tile":this.tile||this.horizontal}}},render(t){const e=D.options.render.call(this,t);return e.data=e.data||{},e.data.staticClass+=" v-list-item__avatar",e}});Object(I["e"])("v-list-item__action-text","span");const R=Object(I["e"])("v-list-item__content","div"),T=Object(I["e"])("v-list-item__title","div"),N=Object(I["e"])("v-list-item__subtitle","div");var H=Object(l["a"])(r,s,a,!1,null,null,null);e["default"]=H.exports;h()(H,{VContainer:u["a"],VList:d,VListItem:_,VListItemContent:R,VListItemSubtitle:N,VListItemTitle:T})},8418:function(t,e,i){"use strict";var s=i("a04b"),a=i("9bf2"),n=i("5c6c");t.exports=function(t,e,i){var r=s(e);r in t?a.f(t,r,n(0,i)):t[r]=i}},"899c":function(t,e,i){},a640:function(t,e,i){"use strict";var s=i("d039");t.exports=function(t,e){var i=[][t];return!!i&&s((function(){i.call(null,e||function(){throw 1},1)}))}},addb:function(t,e,i){var s=i("4dae"),a=Math.floor,n=function(t,e){var i=t.length,o=a(i/2);return i<8?r(t,e):l(t,n(s(t,0,o),e),n(s(t,o),e),e)},r=function(t,e){var i,s,a=t.length,n=1;while(n<a){s=n,i=t[n];while(s&&e(t[s-1],i)>0)t[s]=t[--s];s!==n++&&(t[s]=i)}return t},l=function(t,e,i,s){var a=e.length,n=i.length,r=0,l=0;while(r<a||l<n)t[r+l]=r<a&&l<n?s(e[r],i[l])<=0?e[r++]:i[l++]:r<a?e[r++]:i[l++];return t};t.exports=n},d998:function(t,e,i){var s=i("342f");t.exports=/MSIE|Trident/.test(s)},db42:function(t,e,i){}}]);
//# sourceMappingURL=chunk-46340c47.3c226d20.js.map