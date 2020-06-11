(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{347:function(t,e,s){"use strict";var r=s(5),o=s(38),n=s(23),i=s(2),a=s(64),c=[],l=c.sort,d=i((function(){c.sort(void 0)})),u=i((function(){c.sort(null)})),f=a("sort");r({target:"Array",proto:!0,forced:d||!u||!f},{sort:function(t){return void 0===t?l.call(n(this)):l.call(n(this),o(t))}})},350:function(t,e,s){},351:function(t,e){},356:function(t,e,s){"use strict";var r=s(5),o=s(101).filter,n=s(65),i=s(39),a=n("filter"),c=i("filter");r({target:"Array",proto:!0,forced:!a||!c},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},357:function(t,e,s){"use strict";var r=s(5),o=s(100).includes,n=s(177);r({target:"Array",proto:!0,forced:!s(39)("indexOf",{ACCESSORS:!0,1:0})},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n("includes")},358:function(t,e,s){"use strict";var r=s(5),o=s(40),n=[].reverse,i=[1,2];r({target:"Array",proto:!0,forced:String(i)===String(i.reverse())},{reverse:function(){return o(this)&&(this.length=this.length),n.call(this)}})},359:function(t,e,s){var r=s(5),o=s(360).entries;r({target:"Object",stat:!0},{entries:function(t){return o(t)}})},360:function(t,e,s){var r=s(11),o=s(102),n=s(25),i=s(99).f,a=function(t){return function(e){for(var s,a=n(e),c=o(a),l=c.length,d=0,u=[];l>d;)s=c[d++],r&&!i.call(a,s)||u.push(t?[s,a[s]]:a[s]);return u}};t.exports={entries:a(!0),values:a(!1)}},361:function(t,e,s){"use strict";var r=s(5),o=s(103),n=s(13);r({target:"String",proto:!0,forced:!s(104)("includes")},{includes:function(t){return!!~String(n(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},362:function(t,e,s){"use strict";var r=s(350);s.n(r).a},363:function(t,e,s){"use strict";var r=s(351),o=s.n(r);e.default=o.a},367:function(t,e,s){"use strict";s.r(e);s(356),s(357),s(98),s(358),s(347),s(359),s(33),s(361),s(176),s(66);var r=s(97),o={mixins:[s(135).mixin],metaInfo:{title:"Music"},methods:{fetchData:function(){var t=this;this.$page.songs.edges.map((function(e){var s=e.node;s.videos.length>0?s.hasVideo=!0:s.hasVideo=!1,s.recordings.length>0?(s.recordingtype="Demos",s.recordings.map((function(t){t.multitrack&&(s.recordingtype="Recordings")}))):0==s.recordings.length&&0==s.hasVideo&&(s.recordingtype="Drafts"),t.songData.push(s),t.songData.sort((function(t,e){return t.title.localeCompare(e.title)}))}))},reverse:function(){this.isReversed=!this.isReversed},clearSearch:function(){this.search=""},resetData:function(){Object.assign(this.$data,this.$options.data.apply(this)),this.fetchData(),this.mounted=!0},dropdown_closed:function(){this.dropdown_open=!1}},data:function(){return{isReversed:!1,songData:[],filterData:[],filters:{recordingtype:"All Songs"},search:"",dropdown_open:!1,mobile_open:!1,mounted:!1}},created:function(){this.fetchData()},mounted:function(){if(this.mounted=!0,""==this.$route.hash)sessionStorage.isReversed&&("true"==sessionStorage.isReversed?this.isReversed=!0:"false"==sessionStorage.isReversed&&(this.isReversed=!1)),sessionStorage.search&&(this.search=sessionStorage.search),sessionStorage.filters&&(this.filters=JSON.parse(sessionStorage.filters));else{var t={search:this.search,reversed:this.isReversed,type:this.filters.recordingtype};this.getFiltersFromUrl(t,!0),this.search!==t.search&&(this.search=t.search),this.isReversed!==t.reversed&&(this.isReversed=t.reversed),this.filters.recordingtype!==t.type&&(this.filters.recordingtype=t.type)}},watch:{isReversed:function(t){sessionStorage.isReversed=t},search:function(t){sessionStorage.search=t},filters:{handler:function(t){sessionStorage.filters=JSON.stringify(t)},deep:!0},"$route.hash":function(){var t={search:this.search,reversed:this.isReversed,type:this.filters.recordingtype};this.getFiltersFromUrl(t,!0),this.search!==t.search&&(this.search=t.search),this.isReversed!==t.reversed&&(this.isReversed=t.reversed),this.filters.recordingtype!==t.type&&(this.filters.recordingtype=t.type)}},computed:{createFilter:function(){var t=this;if(this.mounted){for(var e=this.songData,s=function(){var t=Object(r.a)(n[o],2),s=t[0],i=t[1];if(i.startsWith("All"))return"break";e="Videos"==i?e.filter((function(t){return 1==t.hasVideo})):e.filter((function(t){return t[s]==i}))},o=0,n=Object.entries(this.filters);o<n.length;o++){if("break"===s())break}e=e.filter((function(e){return e.title.toLowerCase().includes(t.search.toLowerCase())}));var i=1;e.map((function(t){t.count=i,i+=1})),this.isReversed&&e.reverse();var a={search:this.search,reversed:this.isReversed,type:this.filters.recordingtype};return this.updateUrlHash(a),this.filterData=e,this.filterData}}}},n=(s(362),s(24)),i=s(363),a=Object(n.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Layout",{attrs:{bind:t.createFilter}},[s("h1",{staticClass:"mb-1 tracking-wider font-semibold text-3xl"},[t._v("Reenchantment")]),s("p",{staticClass:"font-bold mb-2 text-purple-600 text-lg tracking-wide"},[t._v("Music as a Spiritual Practice")]),s("p",{staticClass:"font-semibold"},[t._v("By Victor Fisher")]),s("div",[s("div",{staticClass:"block md:inline"},[s("button",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:t.dropdown_closed,expression:"dropdown_closed"}],staticClass:"text-left px-4 py-2 text-sm font-semibold w-full md:w-auto px-2 py-1 rounded-sm hover:bg-gray-300 focus:bg-gray-200 bg-gray-200 block md:inline mb-2 md:mb-0 md:mr-4",attrs:{type:"button"},on:{click:function(e){t.dropdown_open=!t.dropdown_open}}},[s("span",[t._v(t._s(t.filters.recordingtype))]),s("svg",{staticClass:"inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform -mt-1",class:{"rotate-180":t.dropdown_open,"rotate-0":!t.dropdown_open},attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"}})])]),s("transition",{attrs:{"enter-active-class":"transition duration-100 ease-out","leave-active-class":"transition duration-75 ease-in","enter-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"}},[t.dropdown_open?s("div",{staticClass:"w-full md:w-auto relative md:absolute md:mt-2 mb-5 origin-top-right rounded-md shadow-lg w-48 z-40"},[s("div",{staticClass:"px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800"},[s("button",{staticClass:"w-full text-left block px-4 py-2 text-sm font-semibold bg-transparent rounded-sm md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline cursor-pointer",attrs:{type:"button"},on:{click:function(e){t.filters.recordingtype="All Songs",t.dropdown_open=!1}}},[t._v("All Songs")]),s("button",{staticClass:"w-full text-left block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-sm md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline cursor-pointer",attrs:{type:"button"},on:{click:function(e){t.filters.recordingtype="Recordings",t.dropdown_open=!1}}},[t._v("Recordings")]),s("button",{staticClass:"w-full text-left block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-sm md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline cursor-pointer",attrs:{type:"button"},on:{click:function(e){t.filters.recordingtype="Demos",t.dropdown_open=!1}}},[t._v("Demos")]),s("button",{staticClass:"w-full text-left block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-sm md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline cursor-pointer",attrs:{type:"button"},on:{click:function(e){t.filters.recordingtype="Drafts",t.dropdown_open=!1}}},[t._v("Drafts")]),s("button",{staticClass:"w-full text-left block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-sm md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline cursor-pointer",attrs:{type:"button"},on:{click:function(e){t.filters.recordingtype="Videos",t.dropdown_open=!1}}},[t._v("Videos")])])]):t._e()])],1),s("button",{staticClass:"text-left px-4 py-2 text-sm font-semibold w-full md:w-auto px-2 py-1 rounded-sm hover:bg-gray-300 focus:bg-gray-200 bg-gray-200 block md:inline mt-4 md:mt-0 mb-2 md:mb-0 md:mr-4",attrs:{type:"button"},on:{click:t.reverse}},[t._v("Reverse")]),s("button",{staticClass:"text-left px-4 py-2 text-sm font-semibold w-full md:w-auto px-2 py-1 rounded-sm hover:bg-gray-300 focus:bg-gray-200 bg-gray-200 block md:inline mt-4 md:mt-0",attrs:{type:"button"},on:{click:t.resetData}},[t._v("Refresh")])]),s("div",{staticClass:"mb-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"field ~neutral !normal my-4",attrs:{id:"search",placeholder:"Search",type:"search"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t.filterData.length>0?s("h3",[t._v("Results: "+t._s(t.filterData.length))]):s("h3",[t._v("No results.")]),t._l(t.filterData,(function(e,r){return s("div",{key:r},[s("h2",[s("span",[t._v(t._s(e.count)+". ")]),s("g-link",{staticClass:"no-underline hover:underline",attrs:{to:"/music/"+e.slug}},[t._v("\n      "+t._s(e.title)+"\n      ")])],1)])}))],2)}),[],!1,null,null,null);"function"==typeof i.default&&Object(i.default)(a);e.default=a.exports}}]);