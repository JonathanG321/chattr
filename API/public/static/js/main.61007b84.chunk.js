(this.webpackJsonpchattr=this.webpackJsonpchattr||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),s=a.n(c),o=a(20),i=a(9),u=a(15),l=a(10),m=a(11),p=a(14),f=a(4);var d=function(){return r.a.createElement("main",null,r.a.createElement("h1",null,"404 Not Found"))},h=a(1),v=a.n(h),E=a(5),g="".concat("").concat("/api/v1"),b=new Headers({Accept:"application/json, text/plain, */*","Content-type":"application/json"}),y=a(62),O=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e,n){var r;return Object(i.a)(this,a),(r=t.call(this,n)).serverErrors=e,r}return a}(Object(y.a)(Error)),N=function(e){return fetch("".concat(g,"/session"),{method:"POST",headers:b,credentials:"include",body:JSON.stringify(e)}).then(function(){var e=Object(E.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(200===t.status){e.next=6;break}return e.t0=O,e.next=4,t.json();case 4:throw e.t1=e.sent,new e.t0(e.t1);case 6:return e.abrupt("return",t.json());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},j=function(){return fetch("".concat(g,"/session"),{method:"DELETE",credentials:"include"}).then((function(e){return e.json()}))},w=function(){return fetch("".concat(g,"/users/current"),{credentials:"include"}).then(function(){var e=Object(E.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(200===t.status){e.next=6;break}return e.t0=O,e.next=4,t.json();case 4:throw e.t1=e.sent,new e.t0(e.t1);case 6:return e.abrupt("return",t.json());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},k=function(e){return fetch("".concat(g,"/users"),{method:"POST",headers:b,credentials:"include",body:JSON.stringify(e)}).then(function(){var e=Object(E.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(200===t.status){e.next=6;break}return e.t0=O,e.next=4,t.json();case 4:throw e.t1=e.sent,new e.t0(e.t1);case 6:return e.abrupt("return",t.json());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},x=a(59),S=a.n(x),I=function(e){return function(){var t=Object(E.a)(v.a.mark((function t(a){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"CHANGE_ROOM",payload:e}),a(_(e));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},R=function(e){return function(){var t=Object(E.a)(v.a.mark((function t(a){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"ADD_NOTIFICATION",payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(E.a)(v.a.mark((function t(a){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"REMOVE_NOTIFICATION",payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},C=function(e){return function(t){var a=S()("http://localhost:3000",{query:{username:e}});t(U(a)),t({type:"CREATE_SOCKET",payload:a})}},U=function(e){return function(t){e.on("connect",(function(){})),e.on("join room",(function(a){var n,r=a.replace(e.query.username,"");t((n={roomName:a,displayRoomName:r,messages:[]},function(){var e=Object(E.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"ADD_ROOM",payload:n});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))})),e.on("leave room",(function(e){var a;t((a=e,function(){var e=Object(E.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"REMOVE_ROOM",payload:a});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))})),e.on("set room",(function(e){t(I(e))})),e.on("message",(function(e){var a;t((a=e,function(){var e=Object(E.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"ADD_MESSAGE",payload:a}),t(R(a.roomName));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}))}},D=function(e){return function(){var t=Object(E.a)(v.a.mark((function t(a){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N(e);case 3:n=t.sent,a(F(n)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a(M(t.t0));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},T=function(){return function(e){return j().then((function(){return e({type:"SIGN_OUT"})}))}},A=function(e){return function(){var t=Object(E.a)(v.a.mark((function t(a){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k(e);case 3:n=t.sent,a(F(n)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a(M(t.t0));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},L=function(){return function(){var e=Object(E.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w();case 3:a=e.sent,t(F(a)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t(M(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},F=function(e){return function(){var t=Object(E.a)(v.a.mark((function t(a){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"SIGN_IN",payload:e}),a(C(e.username));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},M=function(e){return function(){var t=Object(E.a)(v.a.mark((function t(a){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"SIGN_IN_FAILURE",payload:e.serverErrors.errors});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};var G=function(e){var t={createSession:D,destroySession:T,createUser:A,getCurrentUser:L};return Object(o.b)((function(e){return{user:e.session.user,errors:e.session.errors,isLoading:e.session.isLoading,socket:e.socket.socket}}),t)((function(t){return r.a.createElement(e,Object.assign({},t,{getCurrentUser:function(){return t.getCurrentUser()},onSignIn:function(e){return t.createSession(e)},onSignUp:function(e){return t.createUser(e)},onSignOut:function(){return t.destroySession()}}))}))},P=a(3),V=(a(13),a(57),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e){null===e.user&&this.props.user&&this.props.user.id&&this.props.history.push("/chat")}},{key:"render",value:function(){var e=this.props,t=e.onSignIn,a=e.errors;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Sign In"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=new FormData(e.currentTarget),n={email:a.get("email"),password:a.get("password")};t(n)}},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{className:"form-item",type:"email",name:"email"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{className:"form-item",type:"password",name:"password"})),!!a&&a.map((function(e){return"RecordNotFoundError"===e.type?r.a.createElement("p",{className:"error",key:e.message},e.message):null})),r.a.createElement("input",{className:"button",type:"submit",value:"Login"})))}}]),a}(n.Component)),J=Object(f.g)(G(V));var X=function(e){var t=e.errors,a=e.type;return t?t.map((function(e){return e.path===a?r.a.createElement("p",{className:"error",key:e.message},e.message):null})):null},H=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e){null===e.user&&this.props.user&&this.props.user.id&&this.props.history.push("/chat")}},{key:"render",value:function(){var e=this.props,t=e.onSignUp,a=e.errors;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Sign Up"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=new FormData(e.currentTarget),n={username:a.get("username"),email:a.get("email"),avatar:a.get("avatar"),password:a.get("password"),passwordConfirmation:a.get("password-confirmation")};t(n)}},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"username"},r.a.createElement("strong",null,"Username")),r.a.createElement("input",{className:"form-item",type:"text",name:"username"}),r.a.createElement(X,{errors:a,type:"username"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"email"},r.a.createElement("strong",null,"Email")),r.a.createElement("input",{className:"form-item",type:"email",name:"email"}),r.a.createElement(X,{errors:a,type:"email"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"avatar"},r.a.createElement("strong",null,"User Avatar")),r.a.createElement("input",{className:"form-item",type:"url",name:"avatar",placeholder:"https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg"}),r.a.createElement(X,{errors:a,type:"avatar"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"password"},r.a.createElement("strong",null,"Password")),r.a.createElement("input",{className:"form-item",type:"password",name:"password"}),r.a.createElement(X,{errors:a,type:"password"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"password-confirmation"},r.a.createElement("strong",null,"Password Confirmation")),r.a.createElement("input",{className:"form-item",type:"password",name:"password-confirmation"}),r.a.createElement(X,{errors:a,type:"passwordConfirmation"})),r.a.createElement("input",{className:"button",type:"submit",value:"Sign Up"})))}}]),a}(n.Component),q=Object(f.g)(G(H)),z=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.props.user&&this.props.history.push("/chat")}},{key:"render",value:function(){return r.a.createElement("div",{className:"home-page"},r.a.createElement("div",{className:"auth-card justify-center-vertical align-items-center-vertical"},r.a.createElement("h1",{className:"title"},"Chattr"),r.a.createElement(p.b,{className:"max-width",to:"sign-in"},r.a.createElement("button",{className:"button max-width"},"Sign in with Existing Account")),r.a.createElement(p.b,{className:"max-width",to:"/sign-up"},r.a.createElement("button",{className:"button mt-1 max-width"},"Sign Up with New Account"))))}}]),a}(n.Component),B=Object(f.g)(G(z)),K=a(21);var W=function(e){var t=e.user;return r.a.createElement("img",{className:"user-avatar",src:"".concat(t.avatar),alt:t.username})};var $=function(e){var t=e.onSubmit,a=e.roomName;return r.a.createElement("div",{className:"max-height"},r.a.createElement("form",{className:"flex max-height",onSubmit:function(e){e.preventDefault();var n={message:new FormData(e.currentTarget).get("message"),roomName:a,date:new Date};e.currentTarget.reset(),t(n)}},r.a.createElement("div",{className:"message-text flex justify-center align-items-center"},r.a.createElement("textarea",{className:"form-item text",name:"message"})),r.a.createElement("div",{className:"message-submit flex justify-center align-items-center"},r.a.createElement("input",{type:"submit",className:"button",value:"Send Message"}))))},Q=a(25),Y=a.n(Q);a(103);var Z=function(e){var t=e.isCurrentUser,a=e.message;return r.a.createElement("div",{className:Y()("max-height","flex","user-message",{"current-user-message":t})},r.a.createElement("div",null,r.a.createElement("div",{className:"limit-username"},r.a.createElement("strong",null,a.user.username)),r.a.createElement("div",{className:Y()("message-content",{"current-user-message-content":t})},a.message)),r.a.createElement("div",{className:"margin-15"},r.a.createElement(W,{user:a.user})))};a(104);var ee=function(e){var t=e.user,a=e.messages;return r.a.createElement("div",{className:"messages-display max-height flex"},a.map((function(e){return r.a.createElement("div",{key:"".concat(e.message," ").concat(e.user.username," ").concat(e.date),className:"message-container"},r.a.createElement(Z,{message:e,isCurrentUser:t.username===e.user.username}))})))};var te=function(e){var t={changeRoom:I};return Object(o.b)((function(e){return{rooms:e.rooms.rooms,currentRoom:e.rooms.currentRoom,socket:e.socket.socket,notifications:e.rooms.notifications}}),t)((function(t){return r.a.createElement(e,Object.assign({},t,{changeRoom:function(e){return t.changeRoom(e)},sendMessage:function(e){t.socket.emit("message",e)}}))}))},ae=a(60),ne=a.n(ae);var re=function(e){var t=e.room,a=e.changeRoom,n=e.displayNotification,c=void 0!==n&&n;return r.a.createElement("button",{className:"button max-width flex align-items-center justify-center",onClick:function(){return a(t.roomName)}},r.a.createElement("span",{className:"width-80"},t.displayRoomName?t.displayRoomName:t.roomName),c&&r.a.createElement("span",{className:"red-text flex align-items-center no-width"},r.a.createElement("img",{className:"notification-icon",src:ne.a,alt:"Notification Icon"})))},ce=(a(105),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={displayLogout:!1},n.clickUserIcon=n.clickUserIcon.bind(Object(K.a)(n)),n.clickNotUserIcon=n.clickNotUserIcon.bind(Object(K.a)(n)),n.logout=n.logout.bind(Object(K.a)(n)),n}return Object(u.a)(a,[{key:"clickUserIcon",value:function(){!1===this.state.displayLogout?this.setState({displayLogout:!0}):this.setState({displayLogout:!1})}},{key:"clickNotUserIcon",value:function(e){"user-avatar"!==e.target.className&&this.setState({displayLogout:!1})}},{key:"logout",value:function(){var e=this.props,t=e.onSignOut,a=e.socket;t(),a.disconnect(),this.props.history.push("/")}},{key:"render",value:function(){var e=this.props,t=e.user,a=e.sendMessage,n=e.currentRoom,c=e.changeRoom,s=e.rooms,o=e.notifications,i=this.state.displayLogout,u=s.find((function(e){return e.roomName===n}));return r.a.createElement("main",{onClick:this.clickNotUserIcon,className:"max-height"},r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"user-display justify-center align-items-center"},r.a.createElement("h2",{className:"no-padding"},r.a.createElement("strong",null,t.username)),r.a.createElement("div",{onClick:this.clickUserIcon,className:"ml"},r.a.createElement("div",{className:"user-avatar-container"},r.a.createElement(W,{user:t})),i&&r.a.createElement("div",{className:"no-height relative logout-button"},r.a.createElement("div",{onClick:this.logout,className:"button"},"Sign Out")))),r.a.createElement("div",{className:"room-display flex justify-center align-items-center"},u?u.displayRoomName:n)),r.a.createElement("div",{className:"flex max-height-no-nav"},r.a.createElement("div",{className:"rooms-nav flex align-items-center"},r.a.createElement("h2",{className:"chat-title"},"Chat Rooms"),r.a.createElement("hr",{className:"line-break"}),r.a.createElement("div",{className:"width-80 height-80 rooms"},s.map((function(e){return r.a.createElement(re,{key:e.roomName,displayNotification:o.some((function(t){return t===e.roomName})),changeRoom:c,room:e})})))),r.a.createElement("div",{className:"chat"},r.a.createElement("div",{className:"message-box"},!!u&&r.a.createElement(ee,{user:t,messages:u.messages})),r.a.createElement("div",{className:"chat-form"},r.a.createElement($,{onSubmit:a,roomName:n})))))}}]),a}(n.Component)),se=Object(f.g)(G(te(ce))),oe=a(63);function ie(e){var t=e.isSignedIn,a=e.children,n=Object(oe.a)(e,["isSignedIn","children"]);return r.a.createElement(f.b,n,t?a:r.a.createElement(f.a,{to:"/"}))}ie.defaultProps={isSignedIn:!1};var ue=ie,le=a(24);var me=function(e){var t,a=e.kind,n=e.spin,c=void 0!==n&&n,s=e.pulse,o=void 0!==s&&s,i=e.size,u=void 0!==i&&i,l=e.color,m=void 0===l?"black":l;return r.a.createElement("i",{style:{color:m},className:Y()("fa fa-".concat(a),(t={"fa-spin":c},Object(le.a)(t,"fa-".concat(u),u),Object(le.a)(t,"fa-pulse",o),t))})};var pe=function(){return r.a.createElement("div",{className:"loading"},r.a.createElement(me,{kind:"spinner",size:"5x",pulse:!0}))},fe=(a(106),G(function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.getCurrentUser)()}},{key:"render",value:function(){var e=this.props,t=e.user;return e.isLoading?r.a.createElement(pe,null):r.a.createElement(p.a,null,r.a.createElement(f.d,null,r.a.createElement(f.b,{exact:!0,path:"/"},r.a.createElement(B,null)),r.a.createElement(f.b,{exact:!0,path:"/sign-in"},r.a.createElement(J,null)),r.a.createElement(f.b,{exact:!0,path:"/sign-up"},r.a.createElement(q,null)),r.a.createElement(ue,{isSignedIn:!!t&&!!t.id,path:"/chat"},r.a.createElement(se,{user:t})),r.a.createElement(f.b,{path:"*"},r.a.createElement(d,null))))}}]),a}(n.Component))),de=a(16),he=a(61),ve={socket:{}},Ee={user:null,errors:null,isLoading:!0},ge={rooms:[],currentRoom:null,notifications:[]},be=Object(de.c)({socket:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_SOCKET":return Object(P.a)(Object(P.a)({},e),{},{socket:t.payload});default:return e}},session:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(P.a)(Object(P.a)({},e),{},{user:t.payload,errors:null,isLoading:!1});case"SIGN_OUT":return Object(P.a)(Object(P.a)({},e),{},{user:null,errors:null,isLoading:!1});case"SIGN_IN_FAILURE":return Object(P.a)(Object(P.a)({},e),{},{user:null,errors:t.payload,isLoading:!1});case"LOAD":return Object(P.a)(Object(P.a)({},e),{},{isLoading:!0});default:return e}},rooms:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ROOM":var a=!!e.rooms.find((function(e){return t.payload.roomName===e.roomName}));return a?e:Object(P.a)(Object(P.a)({},e),{},{rooms:e.rooms.concat([t.payload])});case"REMOVE_ROOM":var n=e.rooms.map((function(e){if(e.roomName!==t.payload.roomName)return e}));return Object(P.a)(Object(P.a)({},e),{},{rooms:n});case"CHANGE_ROOM":return Object(P.a)(Object(P.a)({},e),{},{currentRoom:t.payload});case"ADD_MESSAGE":var r=e.rooms.map((function(e){return e.roomName===t.payload.roomName&&(e.messages=[t.payload].concat(e.messages)),e}));return Object(P.a)(Object(P.a)({},e),{},{rooms:r});case"ADD_NOTIFICATION":return e.notifications.includes(t.payload)||e.currentRoom===t.payload?e:Object(P.a)(Object(P.a)({},e),{},{notifications:e.notifications.concat([t.payload])});case"REMOVE_NOTIFICATION":var c=e.notifications.map((function(e){if(e!==t.payload)return e}));return Object(P.a)(Object(P.a)({},e),{},{notifications:c});default:return e}}}),ye=[he.a],Oe=Object(de.e)(be,{},Object(de.d)(de.a.apply(void 0,ye),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(){}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(107);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:Oe},r.a.createElement(fe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},57:function(e,t,a){},60:function(e,t,a){e.exports=a.p+"static/media/notification.6035f527.gif"},64:function(e,t,a){e.exports=a(108)},99:function(e,t){}},[[64,1,2]]]);
//# sourceMappingURL=main.61007b84.chunk.js.map