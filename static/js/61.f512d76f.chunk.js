(this["webpackJsonpvuexy-reactt-admin-dashboard"]=this["webpackJsonpvuexy-reactt-admin-dashboard"]||[]).push([[61],{1105:function(e,t,a){"use strict";var n=a(12),l=a(13),r=a(15),c=a(14),u=a(0),s=a.n(u),o=a(136),m=a(66),i=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement(o.a,{className:"mb-2"},s.a.createElement(m.a,{sm:"12",className:"ml-50"},s.a.createElement("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title"},this.props.title),this.props.link?s.a.createElement("a",{href:this.props.link,target:"_blank",rel:"noopener noreferrer"},this.props.subTitle):s.a.createElement("p",{className:"text-primary"},this.props.subTitle)))}}]),a}(s.a.Component);t.a=i},1137:function(e,t,a){"use strict";var n=a(12),l=a(13),r=a(15),c=a(14),u=(a(141),a(0)),s=a.n(u),o=a(260),m=a(262),i=a(263),p=a(261),E=a(86),h=(a(1234),a(1113)),d=a(329),v=a(136),f=a(66),g=(0,h.a.createSliderWithTooltip)(h.a.Range),b=(h.a.Handle,function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={value:20},e.onSliderChange=function(t){e.setState({value:t})},e.resetSlider=function(){e.setState({value:null})},e}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement(o.a,null,s.a.createElement(m.a,null,s.a.createElement("center",null,s.a.createElement(i.a,null,"\u05d1\u05d7\u05e8 \u05e1\u05db\u05d5\u05dd"))),s.a.createElement(p.a,null,s.a.createElement(v.a,null,s.a.createElement(f.a,{sm:"9"},s.a.createElement(g,{min:1,max:500,defaultValue:[100,300],tipFormatter:function(e){return"".concat(e,"%")},reverse:"rtl"===this.props.rtl})),s.a.createElement(f.a,null,s.a.createElement(E.a.Ripple,{className:"mr-1 mb-1",outline:!0,color:"primary"},s.a.createElement(d.a,{size:20}))))))}}]),a}(s.a.Component));t.a=b},1164:function(e,t,a){},1200:function(e,t,a){"use strict";a.r(t);var n=a(12),l=a(13),r=a(15),c=a(14),u=a(0),s=a.n(u),o=a(1105),m=a(136),i=a(66),p=a(283),E=a(1137),h=a(260),d=a(262),v=a(263),f=a(261),g=a(1113),b={"-10":"-10\xb0C",0:s.a.createElement("strong",null,"0\xb0C"),26:"26\xb0C",37:"37\xb0C",50:"50\xb0C",100:{style:{color:"red"},label:s.a.createElement("strong",null,"100\xb0C")}},C=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement(h.a,null,s.a.createElement(d.a,null,s.a.createElement(v.a,null,"Marks")),s.a.createElement(f.a,null,s.a.createElement(g.a,{min:-10,marks:b,step:null,defaultValue:20,className:"pb-2",reverse:"rtl"===this.props.rtl})))}}]),a}(s.a.Component),y=g.a.Range,k=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={value:[20,40,60,80]},e.handleControlledRange=function(t){e.setState({value:t})},e}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement(h.a,null,s.a.createElement(d.a,null,s.a.createElement(v.a,null,"Range")),s.a.createElement(f.a,null,s.a.createElement("h5",{className:"my-2"},"Basic Range"),s.a.createElement(y,{defaultValue:[0,20],reverse:"rtl"===this.props.rtl}),s.a.createElement("h5",{className:"my-2"},"Range With Steps"),s.a.createElement(y,{defaultValue:[0,20],step:20,reverse:"rtl"===this.props.rtl}),s.a.createElement("h5",{className:"my-2"},"Range With Steps And Dots"),s.a.createElement(y,{defaultValue:[0,40],step:20,dots:!0,reverse:"rtl"===this.props.rtl}),s.a.createElement("h5",{className:"my-2"},"Disabled Range"),s.a.createElement(y,{defaultValue:[0,40],disabled:!0,reverse:"rtl"===this.props.rtl}),s.a.createElement("h5",{className:"my-2"},"Multi Range"),s.a.createElement(y,{count:3,defaultValue:[20,40,60,80],reverse:"rtl"===this.props.rtl}),s.a.createElement("h5",{className:"my-2"},"Multi Range With Track Colors"),s.a.createElement(y,{count:3,defaultValue:[20,40,60,80],pushable:!0,trackStyle:[{backgroundColor:"#7367F0"},{backgroundColor:"#28C76F"},{backgroundColor:"#EA5455"}],handleStyle:[{backgroundColor:"#7367F0"},{backgroundColor:"#28C76F"},{backgroundColor:"#EA5455"}],railStyle:{backgroundColor:"#f0f0f0"},reverse:"rtl"===this.props.rtl}),s.a.createElement("h5",{className:"my-2"},"Controlled Range"),s.a.createElement(y,{value:this.state.value,onChange:this.handleControlledRange})))}}]),a}(s.a.Component),j=a(638),O=a(45),S=a(640),R=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={lowerBound:20,upperBound:40,min:0,max:100,value:[20,100]},e.handleApply=function(){var t=e.state,a=t.lowerBound,n=t.upperBound;e.setState({value:[a,n]})},e.onLowerBoundChange=function(t){e.setState({lowerBound:+t.target.value,value:[+t.target.value,e.state.upperBound]})},e.onUpperBoundChange=function(t){e.setState({upperBound:+t.target.value,value:[e.state.lowerBound,+t.target.value]})},e.onSliderChange=function(t){e.setState({value:t})},e.onMinChange=function(t){e.setState({min:+t.target.value||0})},e.onMaxChange=function(t){e.setState({max:+t.target.value||100})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement(h.a,null,s.a.createElement(d.a,null,s.a.createElement(v.a,null,"Dynamic")),s.a.createElement(f.a,null,s.a.createElement(j.a,null,s.a.createElement(O.a,null,"LowerBound:"),s.a.createElement(S.a,{type:"number",value:this.state.lowerBound,onChange:function(t){return e.onLowerBoundChange(t)}})),s.a.createElement(j.a,null,s.a.createElement(O.a,null,"UpperBound:"),s.a.createElement(S.a,{type:"number",value:this.state.upperBound,onChange:function(t){return e.onUpperBoundChange(t)}})),s.a.createElement(j.a,null,s.a.createElement(O.a,null,"Min:"),s.a.createElement(S.a,{type:"number",value:this.state.min,onChange:function(t){return e.onMinChange(t)}})),s.a.createElement(j.a,null,s.a.createElement(O.a,null,"Max:"),s.a.createElement(S.a,{type:"number",value:this.state.max,onChange:function(t){return e.onMaxChange(t)}})),s.a.createElement(g.a.Range,{value:this.state.value,min:this.state.min,max:this.state.max,onChange:function(t){return e.onSliderChange(e.state.value)},reverse:"rtl"===this.props.rtl})))}}]),a}(s.a.Component),B={"-10":"-10\xb0C",0:s.a.createElement("strong",null,"0\xb0C"),26:"26\xb0C",37:"37\xb0C",50:"50\xb0C",100:{style:{color:"red"},label:s.a.createElement("strong",null,"100\xb0C")}},N={float:"left",width:200,height:400,marginLeft:10,marginTop:10,display:"flex",flexDirection:"column",alignItems:"center"},x=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement(h.a,null,s.a.createElement(d.a,null,s.a.createElement(v.a,null,"Vertical")),s.a.createElement(f.a,null,s.a.createElement(m.a,null,s.a.createElement(i.a,{lg:"3",md:"6",sm:"12"},s.a.createElement("div",{style:N},s.a.createElement("h5",{className:"my-1"},"Basic Vertical"),s.a.createElement(g.a,{vertical:!0,min:-10,marks:B,step:null,defaultValue:20,reverse:"rtl"===this.props.rtl}))),s.a.createElement(i.a,{lg:"3",md:"6",sm:"12"},s.a.createElement("div",{style:N},s.a.createElement("h5",{className:"my-1"}," Steps And Marks"),s.a.createElement(g.a,{vertical:!0,dots:!0,min:-10,marks:B,step:10,defaultValue:20,reverse:"rtl"===this.props.rtl}))),s.a.createElement(i.a,{lg:"3",md:"6",sm:"12"},s.a.createElement("div",{style:N},s.a.createElement("h5",{className:"my-1"},"Vertical Range"),s.a.createElement(g.a.Range,{vertical:!0,min:-10,marks:B,defaultValue:[20,40],reverse:"rtl"===this.props.rtl}))),s.a.createElement(i.a,{lg:"3",md:"6",sm:"12"},s.a.createElement("div",{style:N},s.a.createElement("h5",{className:"my-1"}," Range Steps And Marks"),s.a.createElement(g.a.Range,{vertical:!0,min:-10,marks:B,step:10,defaultValue:[20,40],reverse:"rtl"===this.props.rtl}))))))}}]),a}(s.a.Component),V=(a(1262),a(1164),function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(o.a,{title:"Rc Slider",subTitle:"Slider UI component for React",link:"https://github.com/react-component/slider/"}),s.a.createElement(p.a.Consumer,null,(function(e){return s.a.createElement(m.a,null,s.a.createElement(i.a,{sm:"12"},s.a.createElement(E.a,{rtl:e.state.direction})),s.a.createElement(i.a,{sm:"12"},s.a.createElement(C,{rtl:e.state.direction})),s.a.createElement(i.a,{sm:"12"},s.a.createElement(k,{rtl:e.state.direction})),s.a.createElement(i.a,{sm:"12"},s.a.createElement(x,{rtl:e.state.direction})),s.a.createElement(i.a,{sm:"12"},s.a.createElement(R,{rtl:e.state.direction})))})))}}]),a}(s.a.Component));t.default=V}}]);
//# sourceMappingURL=61.f512d76f.chunk.js.map