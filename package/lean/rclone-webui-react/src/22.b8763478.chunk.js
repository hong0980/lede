(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{804:function(e,n,a){"use strict";a.r(n);var t=a(38),l=a(39),r=a(90),o=a(89),c=a(91),i=a(0),u=a.n(i),m=a(51),s=a(420),p=a(552),d={items:[{name:"控制面板",url:"/dashboard",icon:"icon-speedometer"},{name:"配置",url:"/showconfig",icon:"icon-note"},{name:"Explorer",url:"/remoteExplorer",icon:"icon-screen-desktop"},{name:"后端",url:"/rcloneBackend",icon:"icon-star"},{name:"注销",url:"/login",icon:"icon-logout"}]},h=u.a.lazy(function(){return Promise.all([a.e(1),a.e(8),a.e(20)]).then(a.bind(null,805))}),f=u.a.lazy(function(){return Promise.all([a.e(0),a.e(10),a.e(17)]).then(a.bind(null,806))}),E=u.a.lazy(function(){return a.e(16).then(a.bind(null,810))}),b=u.a.lazy(function(){return Promise.all([a.e(0),a.e(1),a.e(7),a.e(19)]).then(a.bind(null,802))}),g=[{path:"/",exact:!0,name:"首页"},{path:"/newdrive/edit/:drivePrefix",name:"新建",component:h},{path:"/newdrive",exact:!0,name:"New Drive",component:h},{path:"/login",exact:!0,name:"New Drive",component:u.a.lazy(function(){return Promise.all([a.e(2),a.e(3)]).then(a.bind(null,807))})},{path:"/dashboard",name:"控制面板",component:f},{path:"/showconfig",name:"配置",component:E},{path:"/remoteExplorer/:remoteName/:remotePath",exact:!0,name:"Explorer",component:b},{path:"/remoteExplorer",name:"Explorer",component:b},{path:"/rcloneBackend",name:"Rclone后端",component:u.a.lazy(function(){return a.e(12).then(a.bind(null,801))})}],y=a(140),x=a(53),v=a(141),k=u.a.lazy(function(){return a.e(18).then(a.bind(null,808))}),w=u.a.lazy(function(){return a.e(21).then(a.bind(null,790))}),z=u.a.lazy(function(){return Promise.all([a.e(0),a.e(9)]).then(a.bind(null,791))}),O=function(e){function n(){var e,a;Object(t.a)(this,n);for(var l=arguments.length,c=new Array(l),i=0;i<l;i++)c[i]=arguments[i];return(a=Object(r.a)(this,(e=Object(o.a)(n)).call.apply(e,[this].concat(c)))).loading=function(){return u.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"载入中...")},a}return Object(c.a)(n,e),Object(l.a)(n,[{key:"componentWillMount",value:function(){localStorage.getItem(x.a)||this.props.history.push("/login")}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"app","data-test":"defaultLayout"},u.a.createElement(v.a,null,u.a.createElement(p.e,{fixed:!0},u.a.createElement(i.Suspense,{fallback:this.loading()},u.a.createElement(z,{onLogout:function(n){return e.signOut(n)}}))),u.a.createElement("div",{className:"app-body"},u.a.createElement(p.g,{fixed:!0,display:"lg"},u.a.createElement(p.j,null),u.a.createElement(p.i,null),u.a.createElement(i.Suspense,null,u.a.createElement(p.l,Object.assign({navConfig:d},this.props))),u.a.createElement(p.h,null),u.a.createElement(p.k,null)),u.a.createElement("main",{className:"main"},u.a.createElement(p.c,{appRoutes:g}),u.a.createElement(s.a,{fluid:!0},u.a.createElement(i.Suspense,{fallback:this.loading()},u.a.createElement(m.d,null,g.map(function(e,n){return e.component?u.a.createElement(m.b,{key:n,path:e.path,exact:e.exact,name:e.name,render:function(n){return u.a.createElement(e.component,n)}}):null}),u.a.createElement(m.a,{from:"/",to:"/login"}))))),u.a.createElement(p.a,{fixed:!0},u.a.createElement(i.Suspense,{fallback:this.loading()},u.a.createElement(k,null)))),u.a.createElement(p.d,null,u.a.createElement(i.Suspense,{fallback:this.loading()},u.a.createElement(w,null)))))}}]),n}(i.Component);n.default=Object(y.b)(function(e){return{isConnected:e.status.isConnected}},{})(O)}}]);
//# sourceMappingURL=22.b8763478.chunk.js.map