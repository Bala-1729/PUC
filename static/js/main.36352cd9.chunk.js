(this.webpackJsonppuc=this.webpackJsonppuc||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var s,o=n(0),c=n.n(o),r=n(20),a=n.n(r),d=(n(30),n(3)),u=n(4),i=n(7),m=n(6),l=n(21),b=n(22),N=(n(31),n(1)),h=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(e){return Object(d.a)(this,n),t.call(this,e)}return Object(u.a)(n,[{key:"render",value:function(){var e="NodeNumber: "+this.props.nodeNumber+"\n Status: "+this.props.status+"\n Street Name: "+this.props.streetName;return Object(N.jsx)("div",{title:e,children:Object(N.jsxs)("button",{className:"connected"==this.props.status?"connected":"disconnected",children:["Node ",this.props.nodeNumber]})})}}]),n}(c.a.Component),p=(n(33),n(34),n.p+"static/media/bg.79f6a9a1.jpg"),j=b.a.div(s||(s=Object(l.a)(["\nwidth: 100%;\nheight: 100%;\nalign-items: center;\njustify-content: center;\nbackground-image: url(",");\nbackground-position: center;\nbackground-repeat: no-repeat;\nbackground-size: auto;\nmargin:0px;\npadding-top:50vh;\n"])),p),k=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(e){var s;return Object(d.a)(this,n),(s=t.call(this,e)).state={node1:"connected",node2:"connected",node3:"connected"},s}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=setInterval((function(){return e.fetchData()}),1e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"fetchData",value:function(){"connected"==this.state.node1&&("connected"==this.state.node2?(this.setState({node3:"connected"}),this.setState({node2:"disconnected"})):(this.setState({node2:"connected"}),this.setState({node3:"disconnected"})))}},{key:"render",value:function(){var e=[{key:1,nodeNumber:"01",status:this.state.node1,streetName:"Street-1(Pole-1)"},{key:2,nodeNumber:"02",status:this.state.node2,streetName:"Street-1(Pole-2)"},{key:3,nodeNumber:"03",status:this.state.node3,streetName:"Street-1(Pole-3)"},{key:4,nodeNumber:"04",status:"connected",streetName:"Street-1(Pole-4)"},{key:5,nodeNumber:"05",status:"connected",streetName:"Street-2(Pole-1)"},{key:6,nodeNumber:"06",status:"connected",streetName:"Street-2(Pole-2)"},{key:7,nodeNumber:"07",status:"connected",streetName:"Street-2(Pole-3)"},{key:8,nodeNumber:"08",status:"connected",streetName:"Street-2(Pole-4)"},{key:9,nodeNumber:"09",status:"connected",streetName:"Street-3(Pole-1)"},{key:10,nodeNumber:"10",status:"connected",streetName:"Street-3(Pole-2)"},{key:11,nodeNumber:"11",status:"connected",streetName:"Street-3(Pole-3)"},{key:12,nodeNumber:"12",status:"connected",streetName:"Street-3(Pole-4)"},{key:13,nodeNumber:"13",status:"connected",streetName:"Street-4(Pole-1)"},{key:14,nodeNumber:"14",status:"connected",streetName:"Street-4(Pole-2)"},{key:15,nodeNumber:"15",status:"connected",streetName:"Street-4(Pole-3)"},{key:16,nodeNumber:"16",status:"connected",streetName:"Street-4(Pole-4)"}].map((function(e){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(h,{nodeNumber:e.nodeNumber,status:e.status,streetName:e.streetName},e.key),Object(N.jsx)("p",{className:e.key%4!==0&&"connected"==e.status?"dashed":"notdashed",style:{color:"green",fontWeight:"1000"},children:"--------"}),Object(N.jsx)("p",{className:"disconnected"==e.status?"dashed":"notdashed",style:{color:"red"},children:"-X-X-X-X-"}),Object(N.jsx)("br",{style:{display:e.key%4===0?"block":"none"}})]})}));return Object(N.jsx)(j,{id:"dashboard",children:e})}}]),n}(c.a.Component),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,s=t.getFID,o=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),s(e),o(e),c(e),r(e)}))};a.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(k,{})}),document.getElementById("root")),y()}},[[53,1,2]]]);
//# sourceMappingURL=main.36352cd9.chunk.js.map