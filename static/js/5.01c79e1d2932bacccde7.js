webpackJsonp([5],{"5pJi":function(t,e){},BRgg:function(t,e,n){"use strict";e.b=function(t){var e=o()({},r.b,{platform:"h5",uin:0,needNewCode:1,format:"json",notice:0,g_tk:999222372});return c.a.get("/api/getTopList",{params:e}).then(function(t){return i.a.resolve(t.data)})},e.a=function(t){var e=o()({},r.b,{platform:"yqq",page:"detail",loginUin:0,hostUin:0,song_begin:0,song_num:30,needNewCode:1,type:"top",format:"json",notice:0,g_tk:999222372,topid:t});return c.a.get("/api/getDetailToplist",{params:e}).then(function(t){return i.a.resolve(t.data)})};var s=n("//Fk"),i=n.n(s),a=n("woOf"),o=n.n(a),r=n("T452"),l=n("mtWM"),c=n.n(l)},Kjo5:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("Dd8w"),i=n.n(s),a=n("BRgg"),o=n("T452"),r=n("F4+m"),l=n("qwAB"),c=n("y/jF"),p=n("NYxO"),u={mixins:[r.b],data:function(){return{topList:[]}},created:function(){this._getTopList()},methods:i()({selectItem:function(t){this.$router.push({path:"/rank/"+t.id}),this.setTopList(t)},handlePlaylist:function(t){var e=t.length>0?"60px":"";this.$refs.rank.style.bottom=e,this.$refs.toplist.refresh()},_getTopList:function(){var t=this;Object(a.b)().then(function(e){e.code===o.a&&(t.topList=e.data.topList)})}},Object(p.d)({setTopList:"SET_TOP_LIST"})),components:{Scroll:l.a,Loading:c.a}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"rank",staticClass:"rank"},[n("scroll",{ref:"toplist",staticClass:"toplist",attrs:{data:t.topList}},[n("ul",t._l(t.topList,function(e){return n("li",{staticClass:"item",on:{click:function(n){t.selectItem(e)}}},[n("div",{staticClass:"icon"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.picUrl,expression:"item.picUrl"}],attrs:{width:"100",height:"100"}})]),t._v(" "),n("ul",{staticClass:"songlist"},t._l(e.songList,function(e,s){return n("li",{staticClass:"song"},[n("span",[t._v(t._s(s+1))]),t._v(" "),n("span",[t._v(t._s(e.songname)+" - "+t._s(e.singername))])])}))])})),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.topList.length,expression:"!topList.length"}],staticClass:"loading-container"},[n("loading")],1)]),t._v(" "),n("router-view")],1)},staticRenderFns:[]};var f=n("VU/8")(u,d,!1,function(t){n("5pJi")},"data-v-f83b05c4",null);e.default=f.exports}});
//# sourceMappingURL=5.01c79e1d2932bacccde7.js.map