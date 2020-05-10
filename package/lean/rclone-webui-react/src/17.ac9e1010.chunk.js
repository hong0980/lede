(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{427:function(e,t,a){"use strict";var n=a(1);n.oneOfType([n.shape({Features:n.object.isRequired,Hashes:n.array.isRequired,Name:n.string.isRequired,Precision:n.number.isRequired,String:n.string.isRequired}),n.object]),n.shape({remoteName:n.string.isRequired,remotePath:n.string.isRequired}),n.string,n.bool,n.bool,n.shape({Path:n.string.isRequired,Name:n.string.isRequired,Size:n.number,MimeType:n.string,ModTime:n.string.isRequired,IsDir:n.bool.isRequired}),n.shape({rate:n.string.isRequired})},454:function(e,t,a){"use strict";var n=a(38),r=a(39),l=a(90),c=a(89),o=a(91),s=a(423),i=a(0),u=a.n(i),d=a(449),m=a(516),p=a(450),h=a(655),b=a(138),g=a(88),f=a(420),E=a(430),v=a(517),w=a(105),y=a(140),j=a(471),C=a(481),O=a(104),k=a(67),S={tooltips:{enabled:!1,custom:C.CustomTooltips},maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0}}],xAxes:[{ticks:{display:!1}}]}};function N(e){var t=e.job,a=t.name,n=t.eta,r=t.percentage,l=t.speed,c=t.speedAvg,o=t.size,s=t.bytes;return a&&!isNaN(l)?u.a.createElement(d.a,null,u.a.createElement(m.a,null,"Running Jobs"),u.a.createElement(p.a,null,u.a.createElement("p",null,a)," ",u.a.createElement(h.a,{value:r,className:"mb-2"},r," %")," ",u.a.createElement("p",null,u.a.createElement("strong",null,"Speed: "),Object(w.g)(l),"PS")," ",u.a.createElement("p",null,u.a.createElement("strong",null,"Average Speed: "),Object(w.g)(c),"PS")," ",u.a.createElement("p",null,u.a.createElement("strong",null,"Total transferred: "),Object(w.g)(s))," ",u.a.createElement("p",null,u.a.createElement("strong",null,"Size: "),Object(w.g)(o)),u.a.createElement("p",null,u.a.createElement("strong",null,"ETA: "),Object(w.k)(n)))):null}function B(e){var t=e.job,a=t.name,n=t.percentage,r=t.speed,l=t.size;return u.a.createElement(u.a.Fragment,null,u.a.createElement(b.a,{className:"runningJobs"},l&&r?u.a.createElement(g.a,{lg:12,className:"itemName"}," ",function(e){return e.length>30?e.substr(0,30)+" ... "+e.substr(-5):e}(a)," "," ","(",Object(w.g)(l),") - ",Object(w.g)(r),"PS "):u.a.createElement(g.a,{lg:12},"Calculating")),u.a.createElement(b.a,null,u.a.createElement(g.a,{lg:12},u.a.createElement(h.a,{value:n,className:"mb-2"},n," %"))))}function T(e){var t=e.stats,a=t.speed,n=t.bytes,r=t.checks,l=t.elapsedTime,c=t.deletes,o=t.errors,s=t.transfers,i=t.lastError;return u.a.createElement(d.a,null,u.a.createElement(m.a,null,u.a.createElement("strong",null,"全局统计")),u.a.createElement(p.a,null,u.a.createElement("table",{className:"table"},u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",null,"大容量文件"),u.a.createElement("td",null,Object(w.g)(n))),u.a.createElement("tr",null,u.a.createElement("td",null,"平均速度"),u.a.createElement("td",null,Object(w.g)(a),"PS")),u.a.createElement("tr",null,u.a.createElement("td",null,"检查:"),u.a.createElement("td",null,r)),u.a.createElement("tr",null,u.a.createElement("td",null,"删除:"),u.a.createElement("td",null,c)),u.a.createElement("tr",null,u.a.createElement("td",null,"运行以来:"),u.a.createElement("td",null,Object(w.k)(l))),u.a.createElement("tr",{className:o>0?"table-danger":""},u.a.createElement("td",null,"错误:"),u.a.createElement("td",null,o)),u.a.createElement("tr",null,u.a.createElement("td",null,"传输:"),u.a.createElement("td",null,s)),u.a.createElement("tr",null,u.a.createElement("td",null,"最后一次错误:"),u.a.createElement("td",null,i))))))}function x(e){var t=e.transferring;return void 0!==t?t.map(function(e,t){return u.a.createElement(N,{key:e.name,job:e})}):null}function R(e){var t=e.transferring;if(void 0!==t){var a=Object(w.h)(t,function(e){return e.group});console.log(a);var n=[];return a.forEach(function(e,t){console.log(e,t),n.push(u.a.createElement(A,{job:e,groupId:t,key:t}))}),n}return null}function A(e){var t=e.job,a=e.groupId,n=Object(i.useState)(!1),r=Object(s.a)(n,2),l=r[0],c=r[1],o=Object(i.useState)(!0),h=Object(s.a)(o,2),w=h[0],y=h[1];console.log(t);return t?u.a.createElement(u.a.Fragment,null,a&&u.a.createElement(d.a,null,u.a.createElement(m.a,{onClick:function(){return c(!l)}},u.a.createElement(f.a,null,u.a.createElement(b.a,null,u.a.createElement(g.a,{sm:10},"传递",t.length," file(s)"),u.a.createElement(g.a,{sm:2},u.a.createElement(E.a,{color:"light",disabled:!w,onClick:function(e){return function(e,t){if(e.stopPropagation(),t&&-1!==t.indexOf("/")){y(!1);var a=t.split("/")[1];O.a.post(k.a.stopJob,{jobid:a,_async:!0}).then(function(e){console.log(e)}).catch(function(e){console.error(e)})}}(e,a)},className:"btn-outline-danger btn-pill"},u.a.createElement("i",{className:"fa fa-close fa-sm"})))))),u.a.createElement(v.a,{isOpen:l},u.a.createElement(p.a,null,t.map(function(e,t){return u.a.createElement(B,{key:e.name,job:e})}))))):null}var D=function(e){function t(e,a){var r;return Object(n.a)(this,t),(r=Object(l.a)(this,Object(c.a)(t).call(this,e,a))).toggleShowing=function(){r.setState(function(e){return{isShowing:!e.isShowing}})},r.state={isShowing:!0},r}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.jobs,n=t.isConnected,r=t.lineChartData,l=a.transferring,c=this.props.mode;return"full-status"===c?n?u.a.createElement(b.a,null,u.a.createElement(g.a,{sm:12,lg:4},u.a.createElement(T,{stats:a})),u.a.createElement(g.a,{sm:12,lg:4},u.a.createElement(d.a,null,u.a.createElement(m.a,null,"Speed"),u.a.createElement(p.a,null,u.a.createElement("div",{className:"chart-wrapper"},u.a.createElement(j.b,{data:r,options:S}))))),u.a.createElement(g.a,{sm:12,lg:4},u.a.createElement(x,{transferring:l}))):u.a.createElement("div",null,"Not connected to rclone."):"card"===c?n?u.a.createElement(R,{transferring:l}):u.a.createElement("div",null,"Not connected to rclone."):"modal"===c?l&&l.length>0?u.a.createElement(d.a,{className:"progress-modal d-none d-sm-block"},u.a.createElement(m.a,{onClick:function(){return e.toggleShowing()}},"Progress",u.a.createElement("div",{className:"card-header-actions"},u.a.createElement(E.a,{color:"link"},u.a.createElement("i",{className:"fa fa-close fa-lg"})))),u.a.createElement(p.a,{className:this.state.isShowing?"progress-modal-body":"d-none",style:{overflowY:"scroll"}},u.a.createElement(R,{transferring:l}))):null:void 0}}]),t}(u.a.Component);t.a=Object(y.b)(function(e,t){var a=e.status.speed,n={};if(a){var r=[],l=[],c=[],o=a.length;a.slice(o-50,o-1).forEach(function(e,t){r.push(Math.ceil(e.elapsedTime)),l.push(Object(w.c)(e.speed).toFixed(2)),c.push(Object(w.c)(e.speedAvg).toFixed(2))}),n={labels:r,datasets:[{label:"Speed (kbps)",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:l},{label:"Average Speed (kbps)",fill:!0,lineTension:.1,backgroundColor:"rgba(187,69,14,0.4)",borderColor:"rgb(192,76,58)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgb(187,69,14)",pointBackgroundColor:"#ff7459",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:c}]}}return{jobs:e.status.jobs,isConnected:e.status.isConnected,error:e.status.error,lineChartData:n}},{})(D)},461:function(e,t,a){"use strict";a.d(t,"c",function(){return i}),a.d(t,"a",function(){return u}),a.d(t,"b",function(){return d}),a.d(t,"d",function(){return m});var n=a(106),r=a.n(n),l=a(146),c=a(104),o=a(2),s=a(67),i=function(){return function(){var e=Object(l.a)(r.a.mark(function e(t,a){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=a(),n.status.checkStatus&&c.a.post(s.a.stats).then(function(e){return t({type:o.o,status:o.C,payload:e.data})},function(e){return t({type:o.o,status:o.A,payload:e})});case 2:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()},u=function(e){return function(){var t=Object(l.a)(r.a.mark(function t(a){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a({type:o.n,payload:e});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},d=function(){return function(){var e=Object(l.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:c.a.post(s.a.bwlimit).then(function(e){return t({type:o.p,status:o.C,payload:e.data})},function(e){return t({type:o.p,status:o.A,payload:e})});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(l.a)(r.a.mark(function t(a){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:c.a.post(s.a.bwlimit,{rate:e}).then(function(e){return a({type:o.D,status:o.C,payload:e.data})},function(e){return a({type:o.D,status:o.A,payload:e})});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}},470:function(e,t,a){"use strict";var n=a(38),r=a(39),l=a(90),c=a(89),o=a(91),s=a(0),i=a.n(s),u=a(449),d=a(516),m=a(450),p=a(430),h=a(52),b=a.n(h),g=a(454),f=a(140),E=a(461),v=a(53);function w(){return b.a.createPortal(i.a.createElement(g.a,{mode:"modal"}),document.getElementById(v.d))}var y=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).toggleCheckStatus=function(){var e=a.props,t=e.checkStatus,n=e.enableCheckStatus;console.log(t,n),n(!t)},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.props.getStatus(),this.refreshInterval=setInterval(function(){return e.props.getStatus()},v.f)}},{key:"componentWillUnmount",value:function(){clearInterval(this.refreshInterval)}},{key:"render",value:function(){var e=this.props,t=e.isConnected,a=e.mode,n=e.checkStatus,r=localStorage.getItem(v.c),l=localStorage.getItem(v.g);return"card"===a?i.a.createElement(u.a,{className:"text-center "+(t?"card-accent-info":"card-accent-warning")},i.a.createElement(d.a,null,"rclone状态"),i.a.createElement(m.a,null,i.a.createElement(j,{checkStatus:n,connectivityStatus:t,ipAddress:r,userName:l}))):i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{type:"primary",onClick:this.toggleCheckStatus,className:t?"bg-info  d-none d-lg-block":"bg-warning d-none d-lg-block"}," ",n?t?"连接":"断开":"关闭"),i.a.createElement(w,null))}}]),t}(i.a.Component);function j(e){var t=e.connectivityStatus,a=e.checkStatus,n=e.ipAddress,r=e.userName;return a?t?i.a.createElement("p",null,"rclone后端已连接并按预期工作。",i.a.createElement("br",null),"当前IP地址为 ",n,i.a.createElement("br",null),i.a.createElement("strong",null," 用户名: "),r):i.a.createElement("p",null,"无法连接到rclone后端。有一个连接的问题",n,"."):i.a.createElement("p",null,"没有监视连接状态。点击导航栏中的图标开始。")}y.defaultProps={mode:"card"};t.a=Object(f.b)(function(e){return{isConnected:e.status.isConnected,isDisabled:e.status.isDisabled,checkStatus:e.status.checkStatus}},{getStatus:E.c,enableCheckStatus:E.a})(y)},806:function(e,t,a){"use strict";a.r(t);var n=a(38),r=a(39),l=a(90),c=a(89),o=a(91),s=a(0),i=a.n(s),u=a(138),d=a(88),m=a(470),p=a(454),h=a(434),b=a(449),g=a(450),f=a(655),E=a(28),v=a.n(E),w=a(668),y=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.cssModule,n=e.header,r=e.icon,l=e.color,c=e.value,o=e.children,s=e.invert,u=Object(h.a)(e,["className","cssModule","header","icon","color","value","children","invert"]),d={style:"",color:l,value:c},m={style:"",bgColor:"",icon:r};s&&(d.style="progress-white",d.color="",m.style="text-white",m.bgColor="bg-"+l);var p=Object(w.mapToCssModules)(v()(t,m.style,m.bgColor),a);return d.style=v()("progress-xs mt-3 mb-0",d.style),i.a.createElement(b.a,Object.assign({className:p},u),i.a.createElement(g.a,null,i.a.createElement("div",{className:"h1 text-muted text-right mb-2"},i.a.createElement("i",{className:m.icon})),i.a.createElement("div",{className:"h4 mb-0"},n),i.a.createElement("small",{className:"text-muted text-uppercase font-weight-bold"},o),i.a.createElement(f.a,{className:d.style,color:d.color,value:d.value})))}}]),t}(s.Component);y.defaultProps={header:"87.500",icon:"icon-people",color:"info",value:"25",children:"Visitors",invert:!1};var j=y,C=a(105),O=a(143),k=a(430),S=a(516),N=a(451),B=a(519),T=a(520),x=a(436),R=a(667),A=a(140),D=a(461),I=(a(427),function(e){function t(e,a){var r;return Object(n.a)(this,t),(r=Object(l.a)(this,Object(c.a)(t).call(this,e,a))).getBandwidth=function(){(0,r.props.getBandwidth)()},r.setBandwidth=function(){var e=r.state,t=e.bandwidthText;if(e.hasError)O.b.error("错误的形式");else{var a=r.props.setBandwidth;a(t||"0M")}},r.changeBandwidthInput=function(e){var t=e.target.value,a=Object(C.n)(t);r.setState({bandwidthText:t,hasError:""!==t&&!a})},r.toggleShowChangeBandwidth=function(){r.setState(function(e){return{showChangeBandwidth:!e.showChangeBandwidth}})},r.state={bandwidthText:"",hasError:!1,showChangeBandwidth:!1},r}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.getBandwidth()}},{key:"render",value:function(){var e=this.state,t=e.bandwidthText,a=e.hasError,n=e.showChangeBandwidth,r=this.props.bandwidth;return i.a.createElement(u.a,null,i.a.createElement(d.a,{lg:n?6:12,sm:12},i.a.createElement(j,{icon:"icon-speedometer",color:"danger",header:"off"!==r.rate?r.rate:"无限",lg:6,sm:12},"当前带宽 ",i.a.createElement(k.a,{color:"link",onClick:this.toggleShowChangeBandwidth},n?"关闭":"交换",i.a.createElement("i",{className:"fa fa-lg fa-angle-"+(n?"left":"right")})))),i.a.createElement(d.a,{lg:6,sm:12,className:n?"":"d-none"},i.a.createElement(b.a,null,i.a.createElement(S.a,null,"改变带宽"),i.a.createElement(g.a,null,i.a.createElement(N.a,{onSubmit:this.setBandwidth},i.a.createElement(B.a,{row:!0},i.a.createElement(T.a,{for:"bandwidthValue",sm:5},"新的带宽"),i.a.createElement(d.a,{sm:7},i.a.createElement(x.a,{type:"text",value:t,valid:!a,invalid:a,id:"bandwidthValue",onChange:this.changeBandwidthInput}),i.a.createElement(R.a,{valid:!0},"保持为空以重置。"),i.a.createElement(R.a,null,"带宽应该是这种形式的 1M|2M|1G|1K|1.1K etc"))),i.a.createElement(k.a,{className:"float-right",color:"success",type:"submit"},"设置"))))))}}]),t}(i.a.Component)),P=Object(A.b)(function(e){return{isConnected:e.status.isConnected,bandwidth:e.status.bandwidth}},{getBandwidth:D.b,setBandwidth:D.d})(I),q=a(53),M=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.checkStatus,t=localStorage.getItem(q.c);return i.a.createElement("div",{"data-test":"homeComponent"},i.a.createElement("h2",null,"欢迎使用Rclone仪表板。 "),i.a.createElement("p",null,"首先从左边栏创建一个新的远程配置。"),i.a.createElement(u.a,null,i.a.createElement(d.a,{lg:4,sm:12},i.a.createElement(m.a,{ipAddress:t,mode:"card"})),i.a.createElement(d.a,{lg:4,sm:12},i.a.createElement(P,null))),i.a.createElement("h2",null,"远程"),e?i.a.createElement(p.a,{mode:"full-status"}):i.a.createElement("p",null,"不监视"))}}]),t}(i.a.Component);t.default=Object(A.b)(function(e){return{checkStatus:e.status.checkStatus}},{})(M)}}]);
//# sourceMappingURL=17.ac9e1010.chunk.js.map