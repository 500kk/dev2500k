(this["webpackJsonpvuexy-reactt-admin-dashboard"]=this["webpackJsonpvuexy-reactt-admin-dashboard"]||[]).push([[29],{1153:function(e,t,a){"use strict";var i=a(1154),n=a.n(i),l=a(69),s=a.n(l),r=a(24),c=a.n(r),o=a(0),m=a.n(o),d=(a(1),{position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"hidden"}),h={zIndex:2,position:"absolute",top:0,bottom:0,transition:"transform .3s ease-out",WebkitTransition:"-webkit-transform .3s ease-out",willChange:"transform",overflowY:"auto"},u={position:"absolute",top:0,left:0,right:0,bottom:0,overflowY:"auto",WebkitOverflowScrolling:"touch",transition:"left .3s ease-out, right .3s ease-out"},p={zIndex:1,position:"fixed",top:0,left:0,right:0,bottom:0,opacity:0,visibility:"hidden",transition:"opacity .3s ease-out, visibility .3s ease-out",backgroundColor:"rgba(0,0,0,.3)"},E={zIndex:1,position:"fixed",top:0,bottom:0},f=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={sidebarWidth:t.defaultSidebarWidth,touchIdentifier:null,touchStartX:null,touchCurrentX:null,dragSupported:!1},a.overlayClicked=a.overlayClicked.bind(c()(c()(a))),a.onTouchStart=a.onTouchStart.bind(c()(c()(a))),a.onTouchMove=a.onTouchMove.bind(c()(c()(a))),a.onTouchEnd=a.onTouchEnd.bind(c()(c()(a))),a.onScroll=a.onScroll.bind(c()(c()(a))),a.saveSidebarRef=a.saveSidebarRef.bind(c()(c()(a))),a}s()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=/iPad|iPhone|iPod/.test(navigator?navigator.userAgent:"");this.setState({dragSupported:"object"===typeof window&&"ontouchstart"in window&&!e}),this.saveSidebarWidth()},a.componentDidUpdate=function(){this.isTouching()||this.saveSidebarWidth()},a.onTouchStart=function(e){if(!this.isTouching()){var t=e.targetTouches[0];this.setState({touchIdentifier:t.identifier,touchStartX:t.clientX,touchCurrentX:t.clientX})}},a.onTouchMove=function(e){if(this.isTouching())for(var t=0;t<e.targetTouches.length;t++)if(e.targetTouches[t].identifier===this.state.touchIdentifier){this.setState({touchCurrentX:e.targetTouches[t].clientX});break}},a.onTouchEnd=function(){if(this.isTouching()){var e=this.touchSidebarWidth();(this.props.open&&e<this.state.sidebarWidth-this.props.dragToggleDistance||!this.props.open&&e>this.props.dragToggleDistance)&&this.props.onSetOpen(!this.props.open),this.setState({touchIdentifier:null,touchStartX:null,touchCurrentX:null})}},a.onScroll=function(){this.isTouching()&&this.inCancelDistanceOnScroll()&&this.setState({touchIdentifier:null,touchStartX:null,touchCurrentX:null})},a.inCancelDistanceOnScroll=function(){return this.props.pullRight?Math.abs(this.state.touchCurrentX-this.state.touchStartX)<20:Math.abs(this.state.touchStartX-this.state.touchCurrentX)<20},a.isTouching=function(){return null!==this.state.touchIdentifier},a.overlayClicked=function(){this.props.open&&this.props.onSetOpen(!1)},a.saveSidebarWidth=function(){var e=this.sidebar.offsetWidth;e!==this.state.sidebarWidth&&this.setState({sidebarWidth:e})},a.saveSidebarRef=function(e){this.sidebar=e},a.touchSidebarWidth=function(){return this.props.pullRight?this.props.open&&window.innerWidth-this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth+this.state.touchStartX-this.state.touchCurrentX:this.state.sidebarWidth:Math.min(window.innerWidth-this.state.touchCurrentX,this.state.sidebarWidth):this.props.open&&this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth:this.state.sidebarWidth-this.state.touchStartX+this.state.touchCurrentX:Math.min(this.state.touchCurrentX,this.state.sidebarWidth)},a.render=function(){var e,t=n()({},h,this.props.styles.sidebar),a=n()({},u,this.props.styles.content),i=n()({},p,this.props.styles.overlay),l=this.state.dragSupported&&this.props.touch,s=this.isTouching(),r={className:this.props.rootClassName,style:n()({},d,this.props.styles.root),role:"navigation",id:this.props.rootId},c=this.props.shadow&&(s||this.props.open||this.props.docked);if(this.props.pullRight?(t.right=0,t.transform="translateX(100%)",t.WebkitTransform="translateX(100%)",c&&(t.boxShadow="-2px 2px 4px rgba(0, 0, 0, 0.15)")):(t.left=0,t.transform="translateX(-100%)",t.WebkitTransform="translateX(-100%)",c&&(t.boxShadow="2px 2px 4px rgba(0, 0, 0, 0.15)")),s){var o=this.touchSidebarWidth()/this.state.sidebarWidth;this.props.pullRight?(t.transform="translateX("+100*(1-o)+"%)",t.WebkitTransform="translateX("+100*(1-o)+"%)"):(t.transform="translateX(-"+100*(1-o)+"%)",t.WebkitTransform="translateX(-"+100*(1-o)+"%)"),i.opacity=o,i.visibility="visible"}else this.props.docked?(0!==this.state.sidebarWidth&&(t.transform="translateX(0%)",t.WebkitTransform="translateX(0%)"),this.props.pullRight?a.right=this.state.sidebarWidth+"px":a.left=this.state.sidebarWidth+"px"):this.props.open&&(t.transform="translateX(0%)",t.WebkitTransform="translateX(0%)",i.opacity=1,i.visibility="visible");if(!s&&this.props.transitions||(t.transition="none",t.WebkitTransition="none",a.transition="none",i.transition="none"),l)if(this.props.open)r.onTouchStart=this.onTouchStart,r.onTouchMove=this.onTouchMove,r.onTouchEnd=this.onTouchEnd,r.onTouchCancel=this.onTouchEnd,r.onScroll=this.onScroll;else{var f=n()({},E,this.props.styles.dragHandle);f.width=this.props.touchHandleWidth,this.props.pullRight?f.right=0:f.left=0,e=m.a.createElement("div",{style:f,onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchEnd})}return m.a.createElement("div",r,m.a.createElement("div",{className:this.props.sidebarClassName,style:t,ref:this.saveSidebarRef,id:this.props.sidebarId},this.props.sidebar),m.a.createElement("div",{className:this.props.overlayClassName,style:i,onClick:this.overlayClicked,id:this.props.overlayId}),m.a.createElement("div",{className:this.props.contentClassName,style:a,id:this.props.contentId},e,this.props.children))},t}(o.Component);f.defaultProps={docked:!1,open:!1,transitions:!0,touch:!0,touchHandleWidth:20,pullRight:!1,shadow:!0,dragToggleDistance:30,onSetOpen:function(){},styles:{},defaultSidebarWidth:0},t.a=f},1154:function(e,t,a){var i=a(25);e.exports=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){i(e,t,a[t])}))}return e}},1164:function(e,t,a){},1165:function(e,t,a){},1219:function(e,t,a){e.exports=a.p+"static/media/2.ef99742d.png"},1220:function(e,t,a){e.exports=a.p+"static/media/3.ca194d41.png"},1221:function(e,t,a){e.exports=a.p+"static/media/6.847b1870.png"},1222:function(e,t,a){e.exports=a.p+"static/media/9.3ea85561.png"},1325:function(e,t,a){e.exports=a.p+"static/media/1.3d505263.png"},1326:function(e,t,a){e.exports=a.p+"static/media/5.e9ee235e.png"},1327:function(e,t,a){e.exports=a.p+"static/media/8.8dfe9edc.png"},1328:function(e,t,a){},2081:function(e,t,a){"use strict";a.r(t);var i=a(12),n=a(13),l=a(15),s=a(14),r=a(0),c=a.n(r),o=a(1153),m=a(260),d=a(261),h=a(86),u=a(1113),p=a(194),E=a(544),f=a(42),g=a(197),b=(a(1262),a(1164),(0,u.a.createSliderWithTooltip)(u.a.Range)),v=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h6",{className:"filter-heading d-none d-lg-block"},"Filters"),c.a.createElement(m.a,null,c.a.createElement(d.a,{className:"p-2"},c.a.createElement("div",{className:"multi-range-price"},c.a.createElement("div",{className:"multi-range-title pb-75"},c.a.createElement("h6",{className:"filter-title mb-0"},"Multi Range")),c.a.createElement("ul",{className:"list-unstyled price-range"},c.a.createElement("li",null,c.a.createElement(f.a,{label:"All",defaultChecked:!0,name:"shopRadio",className:"py-25"})),c.a.createElement("li",null,c.a.createElement(f.a,{label:"<= $10",defaultChecked:!1,name:"shopRadio",className:"py-25"})),c.a.createElement("li",null,c.a.createElement(f.a,{label:"$10 - $100",defaultChecked:!1,name:"shopRadio",className:"py-25"})),c.a.createElement("li",null,c.a.createElement(f.a,{label:"$100 - $500",defaultChecked:!1,name:"shopRadio",className:"py-25"})),c.a.createElement("li",null,c.a.createElement(f.a,{label:">= $500",defaultChecked:!1,name:"shopRadio",className:"py-25"})))),c.a.createElement("hr",null),c.a.createElement("div",{className:"price-slider"},c.a.createElement("div",{className:"price-slider-title mt-1"},c.a.createElement("h6",{className:"filter-title mb-0"},"Slider")),c.a.createElement("div",{className:"price-slider mt-1"},c.a.createElement(b,{min:0,max:500,defaultValue:[100,250],tipFormatter:function(e){return"".concat(e,"%")}}))),c.a.createElement("hr",null),c.a.createElement("div",{className:"product-categories"},c.a.createElement("div",{className:"product-category-title"},c.a.createElement("h6",{className:"filter-title mb-1"},"Categories")),c.a.createElement("ul",{className:"list-unstyled categories-list"},c.a.createElement("li",null,c.a.createElement(f.a,{label:"Appliances",defaultChecked:!0,name:"categories-filter",className:"py-25"})),c.a.createElement("li",null,c.a.createElement(f.a,{label:"Cameras & Camcorders",defaultChecked:!1,name:"categories-filter",className:"py-25"})),c.a.createElement("li",null,c.a.createElement(f.a,{label:"Car Electronics & GPS",defaultChecked:!1,name:"categories-filter",className:"py-25"})),c.a.createElement("li",null,c.a.createElement(f.a,{label:"Cell Phones",defaultChecked:!1,name:"categories-filter",className:"py-25"})),c.a.createElement("li",null,c.a.createElement(f.a,{label:"Computers & Tablets",defaultChecked:!1,name:"categories-filter",className:"py-25"})),c.a.createElement("li",null,c.a.createElement(f.a,{label:"Health, Fitness & Beauty",defaultChecked:!1,name:"categories-filter",className:"py-25"})),c.a.createElement("li",null,c.a.createElement(f.a,{label:"Office & School Supplies",defaultChecked:!1,name:"categories-filter",className:"py-25"})),c.a.createElement("li",null,c.a.createElement(f.a,{label:"TV & Home Theater",defaultChecked:!1,name:"categories-filter",className:"py-25"})),c.a.createElement("li",null,c.a.createElement(f.a,{label:"Video Games",defaultChecked:!1,name:"categories-filter",className:"py-25"})))),c.a.createElement("hr",null),c.a.createElement("div",{className:"brands"},c.a.createElement("div",{className:"brand-title mt-1 pb-1"},c.a.createElement("h6",{className:"filter-title mb-0"},"Brands")),c.a.createElement("div",{className:"brand-list"},c.a.createElement("ul",{className:"list-unstyled brand-list"},c.a.createElement("li",{className:"d-flex justify-content-between align-items-center py-25"},c.a.createElement(g.a,{color:"primary",icon:c.a.createElement(p.a,{className:"vx-icon",size:16}),label:"Insignia\u2122",defaultChecked:!1}),c.a.createElement("span",null,"746")),c.a.createElement("li",{className:"d-flex justify-content-between align-items-center py-25"},c.a.createElement(g.a,{color:"primary",icon:c.a.createElement(p.a,{className:"vx-icon",size:16}),label:"Samsung",defaultChecked:!1}),c.a.createElement("span",null,"633")),c.a.createElement("li",{className:"d-flex justify-content-between align-items-center py-25"},c.a.createElement(g.a,{color:"primary",icon:c.a.createElement(p.a,{className:"vx-icon",size:16}),label:"Metra",defaultChecked:!1}),c.a.createElement("span",null,"591")),c.a.createElement("li",{className:"d-flex justify-content-between align-items-center py-25"},c.a.createElement(g.a,{color:"primary",icon:c.a.createElement(p.a,{className:"vx-icon",size:16}),label:"HP",defaultChecked:!1}),c.a.createElement("span",null,"530")),c.a.createElement("li",{className:"d-flex justify-content-between align-items-center py-25"},c.a.createElement(g.a,{color:"primary",icon:c.a.createElement(p.a,{className:"vx-icon",size:16}),label:"Apple",defaultChecked:!1}),c.a.createElement("span",null,"442")),c.a.createElement("li",{className:"d-flex justify-content-between align-items-center py-25"},c.a.createElement(g.a,{color:"primary",icon:c.a.createElement(p.a,{className:"vx-icon",size:16}),label:"GE",defaultChecked:!1}),c.a.createElement("span",null,"394")),c.a.createElement("li",{className:"d-flex justify-content-between align-items-center py-25"},c.a.createElement(g.a,{color:"primary",icon:c.a.createElement(p.a,{className:"vx-icon",size:16}),label:"Sony",defaultChecked:!1}),c.a.createElement("span",null,"350")),c.a.createElement("li",{className:"d-flex justify-content-between align-items-center py-25"},c.a.createElement(g.a,{color:"primary",icon:c.a.createElement(p.a,{className:"vx-icon",size:16}),label:"Incipio",defaultChecked:!1}),c.a.createElement("span",null,"320")),c.a.createElement("li",{className:"d-flex justify-content-between align-items-center py-25"},c.a.createElement(g.a,{color:"primary",icon:c.a.createElement(p.a,{className:"vx-icon",size:16}),label:"KitchenAid",defaultChecked:!1}),c.a.createElement("span",null,"318")),c.a.createElement("li",{className:"d-flex justify-content-between align-items-center py-25"},c.a.createElement(g.a,{color:"primary",icon:c.a.createElement(p.a,{className:"vx-icon",size:16}),label:"Whirpool",defaultChecked:!1}),c.a.createElement("span",null,"298"))))),c.a.createElement("hr",null),c.a.createElement("div",{className:"ratings"},c.a.createElement("div",{className:"ratings-title mt-1 pb-75"},c.a.createElement("h6",{className:"filter-title mb-0"},"Ratings")),c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("ul",{className:"unstyled-list list-inline ratings-list mb-0"},c.a.createElement("li",{className:"ratings-list-item"},c.a.createElement(E.a,{size:23,className:"text-warning"})),c.a.createElement("li",{className:"ratings-list-item"},c.a.createElement(E.a,{size:23,className:"text-warning"})),c.a.createElement("li",{className:"ratings-list-item"},c.a.createElement(E.a,{size:23,className:"text-warning"})),c.a.createElement("li",{className:"ratings-list-item"},c.a.createElement(E.a,{size:23,className:"text-warning"})),c.a.createElement("li",{className:"ratings-list-item"},c.a.createElement(E.a,{size:23,className:"text-light"})),c.a.createElement("li",null,"& up")),c.a.createElement("div",{className:"stars-received"},"(160)")),c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("ul",{className:"unstyled-list list-inline ratings-list mb-0"},c.a.createElement("li",{className:"ratings-list-item"},c.a.createElement(E.a,{size:23,className:"text-warning"})),c.a.createElement("li",{className:"ratings-list-item"},c.a.createElement(E.a,{size:23,className:"text-warning"})),c.a.createElement("li",{className:"ratings-list-item"},c.a.createElement(E.a,{size:23,className:"text-warning"})),c.a.createElement("li",{className:"ratings-list-item"},c.a.createElement(E.a,{size:23,className:"text-light"})),c.a.createElement("li",{className:"ratings-list-item"},c.a.createElement(E.a,{size:23,className:"text-light"})),c.a.createElement("li",null,"& up")),c.a.createElement("div",{className:"stars-received"},"(176)")),c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("ul",{className:"unstyled-list list-inline ratings-list mb-0"},c.a.createElement("li",{className:"ratings-list-item"},c.a.createElement(E.a,{size:23,className:"text-warning"})),c.a.createElement("li",{className:"ratings-list-item"},c.a.createElement(E.a,{size:23,className:"text-warning"})),c.a.createElement("li",{className:"ratings-list-item"},c.a.createElement(E.a,{size:23,className:"text-light"})),c.a.createElement("li",{className:"ratings-list-item"},c.a.createElement(E.a,{size:23,className:"text-light"})),c.a.createElement("li",{className:"ratings-list-item"},c.a.createElement(E.a,{size:23,className:"text-light"})),c.a.createElement("li",null,"& up")),c.a.createElement("div",{className:"stars-received"},"(291)")),c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("ul",{className:"unstyled-list list-inline ratings-list mb-0"},c.a.createElement("li",{className:"ratings-list-item"},c.a.createElement(E.a,{size:23,className:"text-warning"})),c.a.createElement("li",{className:"ratings-list-item"},c.a.createElement(E.a,{size:23,className:"text-light"})),c.a.createElement("li",{className:"ratings-list-item"},c.a.createElement(E.a,{size:23,className:"text-light"})),c.a.createElement("li",{className:"ratings-list-item"},c.a.createElement(E.a,{size:23,className:"text-light"})),c.a.createElement("li",{className:"ratings-list-item"},c.a.createElement(E.a,{size:23,className:"text-light"})),c.a.createElement("li",null,"& up")),c.a.createElement("div",{className:"stars-received"},"(190)"))),c.a.createElement("hr",null),c.a.createElement("div",{className:"clear-filters"},c.a.createElement(h.a.Ripple,{block:!0,className:"btn-block",color:"primary"},"CLEAR ALL FILTERS")))))}}]),a}(c.a.Component),y=a(1223),N=a(349),w=a(136),C=a(66),S=a(638),k=a(640),x=a(645),T=a(646),W=a(647),z=a(469),A=a(314),O=a(340),X=a(465),j=a(316),D=a(329),R=a(411),I=a(350),G=[{id:1,name:"Amazon - Fire TV Stick with Alexa Voice Remote - Black",by:"Google",desc:"Enjoy smart access to videos, games and apps with this Amazon Fire TV stick. Its Alexa voice remote lets you\n    deliver hands-free commands when you want to watch television or engage with other applications. With a\n    quad-core processor, 1GB internal memory and 8GB of storage, this portable Amazon Fire TV stick works fast\n    for buffer-free streaming.",price:"$39.99",img:a(1325)},{id:2,price:"$35",img:a(1219),name:"Google - Chromecast - Black",by:"Google",desc:"Google Chromecast: Enjoy a world of entertainment with Google Chromecast. Just connect to your HDTV's HDMI\n    interface and your home Wi-Fi network to get started. You can stream your favorite apps from your compatible\n    phone, tablet or laptop, plus use your phone as a remote to search, play and pause content."},{id:3,desc:"Dell Inspiron Laptop: Get speed and performance from this 15.6-inch Dell Inspiron laptop. Supported by an\n    Intel Core i5-5200U processor and 6GB of DDR3L RAM, this slim touch screen laptop lets you run multiple\n    applications without lag. The 1TB hard drive in this Dell Inspiron laptop lets you store multiple music,\n    video and document files.",price:"$499.99",img:a(1220),name:'Dell - Inspiron 15.6" Touch-Screen Laptop - Black',by:"Dell"},{id:4,img:a(741),name:"Amazon - Echo Dot",by:"Amazon",desc:"Echo Dot is the latest addition to Amazon's voice-controlled devices.\n    Deliver your favorite playlist anywhere in your home with the Amazon Echo Dot voice-controlled device.\n    Control most electric devices through voice activation, or schedule a ride with Uber and order a pizza. The\n    Amazon Echo Dot voice-controlled device turns any home into a smart home with the Alexa app on a smartphone\n    or tablet.",price:"$49.99"},{id:5,by:"Apple",desc:"MacBook Air is a thin, lightweight laptop from Apple.\n    MacBook Air features up to 8GB of memory, a fifth-generation Intel Core processor, Thunderbolt 2, great\n    built-in apps, and all-day battery life.1 Its thin, light, and durable enough to take everywhere you go-and\n    powerful enough to do everything once you get there, better.",price:"$999.99",img:a(1326),name:'Apple - MacBook Air\xae (Latest Model) - 13.3" Display - Silver'},{id:6,by:"Sharp",desc:"Only at Best Buy Sharp LC-50LB481U LED Roku TV: Get a TV that enjoys full Internet connectivity with this\n    Sharp 49.5-inch smart TV. Full HD resolutions give you plenty of detail whether you're streaming content\n    from the Internet using the integrated Roku player or watching via cable",price:"$429.99",img:a(1221),name:'Sharp - 50" Class (49.5" Diag.) - LED - 1080p - Black'},{id:7,img:a(752),name:"Google - Google Home - White/Slate fabric",by:"Google",desc:"Simplify your everyday life with the Google Home, a voice-activated speaker powered by the Google Assistant.\n    Use voice commands to enjoy music, get answers from Google and manage everyday tasks. Google Home is\n    compatible with Android and iOS operating systems, and can control compatible smart devices such as\n    Chromecast or Nest.",price:"$129"},{id:8,img:a(1327),name:"Apple - EarPods\u2122 with Remote and Mic - White",by:"Apple",desc:"Apple EarPods are white in-ear headphones included with music players and smartphones designed and marketed\n    by Apple Inc. They are designed to fit the ear while retaining a new design pushed by Apple alongside the\n    iPod and iPod Touch products, with which they were sold together.",price:"$29.99"},{id:9,name:"Philips - hue A19 Smart LED Light Bulb - White Only",by:"Philips",desc:"Philips hue A19 Smart LED Light Bulb: Get lighting that's as smart as you are. You can easily dim this light\n    bulb and set timers and alarms using your smartphone or tablet. Plus, LED technology offers lasting\n    illumination while using minimal energy.Get lighting that's as smart as you are.",price:"$14.99",img:a(1222)}],M=a(46),B=(a(1328),[{value:"featured",label:"Featured"},{value:"lowest",label:"Lowest"},{value:"highest",label:"Highest"}]),L=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={inCart:[],inWishlist:[],view:"grid-view"},e.handleAddToCart=function(t){var a=e.state.inCart;a.push(t),e.setState({inCart:a})},e.handleView=function(t){e.setState({view:t})},e.handleWishlist=function(t){var a=e.state.inWishlist;a.includes(t)?a.splice(a.indexOf(t),1):a.push(t),e.setState({inWishlist:a})},e}return Object(n.a)(a,[{key:"render",value:function(){var e=this,t=G.map((function(t,a){return c.a.createElement(m.a,{className:"ecommerce-card",key:a},c.a.createElement("div",{className:"card-content"},c.a.createElement("div",{className:"item-img text-center"},c.a.createElement(M.a,{to:"/ecommerce/product-detail"},c.a.createElement("img",{className:"img-fluid",src:t.img,alt:t.name}))),c.a.createElement(d.a,null,c.a.createElement("div",{className:"item-wrapper"},c.a.createElement("div",{className:"item-rating"},c.a.createElement(N.a,{color:"primary",className:"badge-md"},c.a.createElement("span",{className:"mr-50 align-middle"},"4"),c.a.createElement(E.a,{size:14}))),c.a.createElement("div",{className:"product-price"},c.a.createElement("h6",{className:"item-price"},t.price))),c.a.createElement("div",{className:"item-name"},c.a.createElement(M.a,{to:"/ecommerce/product-detail"}," ",c.a.createElement("span",null,t.name)),c.a.createElement("p",{className:"item-company"},"By ",c.a.createElement("span",{className:"company-name"},t.by))),c.a.createElement("div",{className:"item-desc"},c.a.createElement("p",{className:"item-description"},t.desc))),c.a.createElement("div",{className:"item-options text-center"},c.a.createElement("div",{className:"item-wrapper"},c.a.createElement("div",{className:"item-rating"},c.a.createElement(N.a,{color:"primary",className:"badge-md"},c.a.createElement("span",{className:"mr-50 align-middle"},"4"),c.a.createElement(E.a,{size:14}))),c.a.createElement("div",{className:"product-price"},c.a.createElement("h6",{className:"item-price"},t.price))),c.a.createElement("div",{className:"wishlist",onClick:function(){return e.handleWishlist(a)}},c.a.createElement(z.a,{size:15,fill:e.state.inWishlist.includes(a)?"#EA5455":"transparent",stroke:e.state.inWishlist.includes(a)?"#EA5455":"#626262"}),c.a.createElement("span",{className:"align-middle ml-50"},"Wishlist")),c.a.createElement("div",{className:"cart",onClick:function(){return e.handleAddToCart(a)}},c.a.createElement(A.a,{size:15}),c.a.createElement("span",{className:"align-middle ml-50"},e.state.inCart.includes(a)?c.a.createElement(M.a,{to:"/ecommerce/checkout",className:"text-white"}," ","View In Cart"," "):"Add to cart")))))}));return c.a.createElement("div",{className:"shop-content"},c.a.createElement(w.a,null,c.a.createElement(C.a,{sm:"12"},c.a.createElement("div",{className:"ecommerce-header-items"},c.a.createElement("div",{className:"result-toggler w-25 d-flex align-items-center"},c.a.createElement("div",{className:"shop-sidebar-toggler d-block d-lg-none"},c.a.createElement(O.a,{size:26,onClick:function(){return e.props.mainSidebar(!0)}})),c.a.createElement("div",{className:"search-results"},"16285 Results Found")),c.a.createElement("div",{className:"view-options d-flex justify-content-end w-75"},c.a.createElement(y.a,{className:"React-Select",classNamePrefix:"select",defaultValue:B[0],name:"sort",options:B}),c.a.createElement("div",{className:"view-btn-option"},c.a.createElement(h.a,{color:"white",className:"view-btn ml-1 ".concat("grid-view"===this.state.view?"active":""),onClick:function(){return e.handleView("grid-view")}},c.a.createElement(X.a,{size:24})),c.a.createElement(h.a,{color:"white",className:"view-btn ".concat("list-view"===this.state.view?"active":""),onClick:function(){return e.handleView("list-view")}},c.a.createElement(j.a,{size:24})))))),c.a.createElement(C.a,{sm:"12"},c.a.createElement("div",{className:"ecommerce-searchbar mt-1"},c.a.createElement(S.a,{className:"position-relative"},c.a.createElement(k.a,{className:"search-product",placeholder:"Search Here..."}),c.a.createElement("div",{className:"form-control-position"},c.a.createElement(D.a,{size:22}))))),c.a.createElement(C.a,{sm:"12"},c.a.createElement("div",{id:"ecommerce-products",className:this.state.view},t)),c.a.createElement(C.a,{sm:"12"},c.a.createElement("div",{className:"ecommerce-pagination"},c.a.createElement(x.a,{className:"d-flex justify-content-center mt-2"},c.a.createElement(T.a,{className:"prev-item"},c.a.createElement(W.a,{href:"#",first:!0},c.a.createElement(R.a,null))),c.a.createElement(T.a,{active:!0},c.a.createElement(W.a,{href:"#"},"1")),c.a.createElement(T.a,null,c.a.createElement(W.a,{href:"#"},"2")),c.a.createElement(T.a,null,c.a.createElement(W.a,{href:"#"},"3")),c.a.createElement(T.a,null,c.a.createElement(W.a,{href:"#"},"4")),c.a.createElement(T.a,null,c.a.createElement(W.a,{href:"#"},"5")),c.a.createElement(T.a,null,c.a.createElement(W.a,{href:"#"},"6")),c.a.createElement(T.a,null,c.a.createElement(W.a,{href:"#"},"7")),c.a.createElement(T.a,{href:"#",className:"next-item"},c.a.createElement(W.a,{href:"#",last:!0},c.a.createElement(I.a,null))))))))}}]),a}(c.a.Component),P=a(1102),V=(a(1165),window.matchMedia("(min-width: 992px)")),$=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={sidebarDocked:V.matches,sidebarOpen:!1},e.onSetSidebarOpen=function(t){e.setState({sidebarOpen:t})},e.mediaQueryChanged=function(){e.setState({sidebarDocked:V.matches,sidebarOpen:!1})},e}return Object(n.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){V.addListener(this.mediaQueryChanged)}},{key:"componentWillUnmount",value:function(){V.removeListener(this.mediaQueryChanged)}},{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement(P.a,{breadCrumbTitle:"Shop",breadCrumbParent:"eCommerce",breadCrumbActive:"Shop"}),c.a.createElement("div",{className:"ecommerce-application"},c.a.createElement("div",{className:"shop-content-overlay ".concat(this.state.sidebarOpen?"show":""),onClick:function(){return e.onSetSidebarOpen(!1)}}),c.a.createElement("div",{className:"sidebar-section"},c.a.createElement(o.a,{sidebar:c.a.createElement(v,null),docked:this.state.sidebarDocked,open:this.state.sidebarOpen,sidebarClassName:"sidebar-shop",touch:!0,contentClassName:"sidebar-children d-none"},'""')),c.a.createElement(L,{mainSidebar:this.onSetSidebarOpen,sidebar:this.state.sidebarOpen})))}}]),a}(c.a.Component);t.default=$}}]);
//# sourceMappingURL=29.9277b3c0.chunk.js.map