(this.webpackJsonppuc=this.webpackJsonppuc||[]).push([[0],{31:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var s,o=n(0),c=n.n(o),a=n(21),r=n.n(a),d=(n(31),n(3)),u=n(4),i=n(5),l=n(8),m=n(7),h=n(22),b=n(23),N=(n(32),n(1)),p=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){return Object(d.a)(this,n),t.call(this,e)}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t="NodeNumber: "+this.props.nodeNumber+"\n Status: "+this.props.status+"\n Street Name: "+this.props.streetName;return Object(N.jsx)("div",{title:t,children:Object(N.jsxs)("button",{className:"connected"==this.props.status?"connected":"disconnected",onClick:function(){return e.props.changeState(e.props.value)},children:["Node ",this.props.nodeNumber]})})}}]),n}(c.a.Component),S=(n(34),n(35),n.p+"static/media/bg.79f6a9a1.jpg"),k=b.a.div(s||(s=Object(h.a)(["\nwidth: 100%;\nheight: 100%;\nalign-items: center;\njustify-content: center;\nbackground-image: url(",");\nbackground-position: center;\nbackground-repeat: no-repeat;\nbackground-size: auto;\nmargin:0px;\npadding-top:50vh;\n"])),S),j=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){var s;return Object(d.a)(this,n),(s=t.call(this,e)).state={node1:"connected",node2:"connected",node3:"connected"},s.changeState=s.changeState.bind(Object(i.a)(s)),s}return Object(u.a)(n,[{key:"changeState",value:function(e){console.log(e),9===e?(this.setState({node2:"connected"}),this.setState({node3:"connected"})):10==e?(this.setState({node2:"disconnected"}),this.setState({node3:"connected"})):11==e&&(this.setState({node3:"disconnected"}),this.setState({node2:"connected"}))}},{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"fetchData",value:function(){"connected"==this.state.node1&&("connected"==this.state.node2?(this.setState({node3:"connected"}),this.setState({node2:"disconnected"})):(this.setState({node2:"connected"}),this.setState({node3:"disconnected"})))}},{key:"render",value:function(){var e=this,t=[{key:1,nodeNumber:"01",status:this.state.node1,streetName:"Street-1(Pole-1)"},{key:2,nodeNumber:"02",status:this.state.node2,streetName:"Street-1(Pole-2)"},{key:3,nodeNumber:"03",status:this.state.node3,streetName:"Street-1(Pole-3)"},{key:4,nodeNumber:"04",status:"connected",streetName:"Street-1(Pole-4)"},{key:5,nodeNumber:"05",status:"connected",streetName:"Street-2(Pole-1)"},{key:6,nodeNumber:"06",status:"connected",streetName:"Street-2(Pole-2)"},{key:7,nodeNumber:"07",status:"connected",streetName:"Street-2(Pole-3)"},{key:8,nodeNumber:"08",status:"connected",streetName:"Street-2(Pole-4)"},{key:9,nodeNumber:"09",status:"connected",streetName:"Street-3(Pole-1)"},{key:10,nodeNumber:"10",status:"connected",streetName:"Street-3(Pole-2)"},{key:11,nodeNumber:"11",status:"connected",streetName:"Street-3(Pole-3)"},{key:12,nodeNumber:"12",status:"connected",streetName:"Street-3(Pole-4)"},{key:13,nodeNumber:"13",status:"connected",streetName:"Street-4(Pole-1)"},{key:14,nodeNumber:"14",status:"connected",streetName:"Street-4(Pole-2)"},{key:15,nodeNumber:"15",status:"connected",streetName:"Street-4(Pole-3)"},{key:16,nodeNumber:"16",status:"connected",streetName:"Street-4(Pole-4)"}].map((function(t){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(p,{nodeNumber:t.nodeNumber,status:t.status,value:t.key,streetName:t.streetName,changeState:e.changeState}),Object(N.jsx)("p",{className:t.key%4!==0&&"connected"==t.status?"dashed":"notdashed",style:{color:"green",fontWeight:"1000"},children:"--------"}),Object(N.jsx)("p",{className:"disconnected"==t.status?"dashed":"notdashed",style:{color:"red"},children:"-X-X-X-X-"}),Object(N.jsx)("br",{style:{display:t.key%4===0?"block":"none"}})]})}));return Object(N.jsx)(k,{id:"dashboard",children:t})}}]),n}(c.a.Component),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,s=t.getFID,o=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),s(e),o(e),c(e),a(e)}))};r.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(j,{})}),document.getElementById("root")),y()}},[[54,1,2]]]);
//# sourceMappingURL=main.0c4242ff.chunk.js.map