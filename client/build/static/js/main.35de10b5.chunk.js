(this.webpackJsonpcnwtt=this.webpackJsonpcnwtt||[]).push([[0],{227:function(e,t,a){"use strict";var n=a(17),r=a(0),c=a.n(r),l=a(41),o=a(76),s=a(211),i=a(738),u=a(379),m=a(741),p=a(291),d=a(22),h=a(745),g=a(70),f=a.n(g),E=a(107),b=a(1),v=a(2),y=a(6),k=a(4),O=a(5),j=a(126),w=a(748),C=a(744),S=a(739),T=a(329),N=a(405),P=a(198),x=a(102);function I(e){for(var t=e+"=",a=document.cookie.split(";"),n=0;n<a.length;n++){for(var r=a[n];" "==r.charAt(0);)r=r.substring(1);if(0==r.indexOf(t))return r.substring(t.length,r.length)}return""}function A(){var e=I("accessToken");return""!=e?{Authorization:"Bearer "+e,Accept:"application/json","Content-Type":"application/json"}:{}}var q={login:function(e,t){return f()({method:"POST",headers:{"Content-Type":"application/json"},url:"https://toeic-practice.herokuapp.com/api/users/login",data:JSON.stringify({email:e,password:t})}).then((function(e){return e})).catch((function(e){throw e}))},signUp:function(e){return f()({method:"POST",headers:{"Content-Type":"application/json"},url:"https://toeic-practice.herokuapp.com/api/users/signup",data:e}).then((function(e){return e})).catch((function(e){throw e}))},getUser:function(e){return f()({method:"GET",url:"https://toeic-practice.herokuapp.com/api/users/",headers:A()}).then((function(e){return e})).catch((function(e){throw e}))},updateUser:function(e){return f()({method:"PATCH",headers:A(),url:"https://toeic-practice.herokuapp.com/api/users",data:e}).then((function(e){return e})).catch((function(e){throw e}))},uploadAvatar:function(e){return f()({method:"PATCH",headers:{Authorization:"Bearer "+I("accessToken"),"Content-Type":"multipart/form-data"},url:"https://toeic-practice.herokuapp.com/api/users/upload-avatar",data:e}).then((function(e){return e})).catch((function(e){throw e}))}};var D=a(79),R=(a(509),j.a.Option),F=w.a.Option,U=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(y.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).state={confirmDirty:!1,autoCompleteResult:[],loading:!1},a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFieldsAndScroll((function(e,t){e||(a.setState({loading:!0}),q.signUp(t).then((function(e){(0,a.props.dispatch)({type:D.b,data:e}),a.props.signup(e),a.setState({loading:!1})})).catch((function(e){throw a.setState({loading:!1}),i.a.error("\u0110\u0103ng k\xed th\u1ea5t b\u1ea1i"),e})))}))},a.handleConfirmBlur=function(e){var t=e.target.value;a.setState({confirmDirty:a.state.confirmDirty||!!t})},a.compareToFirstPassword=function(e,t,n){var r=a.props.form;t&&t!==r.getFieldValue("password")?n("Two passwords that you enter is inconsistent!"):n()},a.validateToNextPassword=function(e,t,n){var r=a.props.form;t&&a.state.confirmDirty&&r.validateFields(["confirm"],{force:!0}),n()},a.handleWebsiteChange=function(e){var t;t=e?[".com",".org",".net"].map((function(t){return"".concat(e).concat(t)})):[],a.setState({autoCompleteResult:t})},a}return Object(O.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}};this.state.autoCompleteResult.map((function(e){return c.a.createElement(F,{key:e},e)}));return c.a.createElement(u.a,{spinning:this.state.loading,tip:"Loading..."},c.a.createElement(C.a,Object.assign({},{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},{onSubmit:this.handleSubmit,style:{margin:"0 auto"}}),c.a.createElement(C.a.Item,{label:"E-mail"},e("email",{rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]})(c.a.createElement(S.a,{xs:24,sm:24,md:24,lg:20,xl:20},c.a.createElement(T.a,null)))),c.a.createElement(C.a.Item,{label:"Password",hasFeedback:!0},e("password",{rules:[{required:!0,message:"Please input your password!"},{validator:this.validateToNextPassword}]})(c.a.createElement(S.a,{xs:24,sm:24,md:24,lg:20,xl:20},c.a.createElement(T.a.Password,{className:"abcdef"})))),c.a.createElement(C.a.Item,{label:"Confirm",hasFeedback:!0},e("confirm",{rules:[{required:!0,message:"Please confirm your password!"},{validator:this.compareToFirstPassword}]})(c.a.createElement(S.a,{xs:24,sm:24,md:24,xl:20,lg:20},c.a.createElement(T.a.Password,{onBlur:this.handleConfirmBlur})))),c.a.createElement(C.a.Item,{label:c.a.createElement("span",null,"Name\xa0",c.a.createElement(N.a,{title:"What do you want others to call you?"},c.a.createElement(d.a,{type:"question-circle-o"})))},e("name",{rules:[{required:!0,message:"Please input your name!",whitespace:!0}]})(c.a.createElement(S.a,{xs:24,sm:24,md:24,xl:20,lg:20},c.a.createElement(T.a,null)))),c.a.createElement(C.a.Item,{label:"Gender",hasFeedback:!0},e("gender",{rules:[{required:!0,message:"Please select your country!"}]})(c.a.createElement(j.a,{className:"ant-col",style:{width:"83.33%"},placeholder:"Please select gender..."},c.a.createElement(R,{value:"male"},"Nam"),c.a.createElement(R,{value:"female"},"N\u1eef")))),c.a.createElement(C.a.Item,t,e("agreement",{valuePropName:"checked"})(c.a.createElement(P.a,null,"T\xf4i \u0111\u1ed3ng \xfd v\u1edbi ",c.a.createElement("a",{href:""},"ch\xednh s\xe1ch")," c\u1ee7a MHHD"))),c.a.createElement(C.a.Item,t,c.a.createElement(x.a,{type:"primary",htmlType:"submit"},"\u0110\u0103ng k\xfd"))))}}]),t}(c.a.Component),B=Object(E.b)((function(e){return{user:e.user,accessTokenStore:e.auth.accessToken}}),(function(e){return{dispatch:e}}))(C.a.create({name:"register"})(U)),L=(a(589),function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(y.a)(this,Object(k.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields((function(e,t){e||(a.setState({loading:!0}),q.login(t.email,t.password).then((function(e){(0,a.props.dispatch)({type:D.b,data:e}),a.props.login(e),a.setState({loading:!1})})).catch((function(e){throw console.log(1),a.setState({loading:!1}),i.a.error("\u0110\u0103ng nh\u1eadp th\u1ea5t b\u1ea1i"),e})))}))},a.state={loading:!1},a}return Object(O.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){console.log(this.props);var e=this.props.form.getFieldDecorator;return c.a.createElement(u.a,{spinning:this.state.loading,tip:"Loading..."},c.a.createElement(C.a,{onSubmit:this.handleSubmit,className:"login-form",style:{margin:"0 auto auto auto"}},c.a.createElement(C.a.Item,null,e("email",{rules:[{required:!0,message:"Please input your email!"}]})(c.a.createElement(T.a,{prefix:c.a.createElement(d.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Email"}))),c.a.createElement(C.a.Item,null,e("password",{rules:[{required:!0,message:"Please input your Password!"}]})(c.a.createElement(T.a,{prefix:c.a.createElement(d.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),c.a.createElement(C.a.Item,null,e("remember",{valuePropName:"checked",initialValue:!0})(c.a.createElement(P.a,null,"L\u01b0u m\u1eadt kh\u1ea9u")),c.a.createElement(l.b,{className:"login-form-forgot",to:""},"Qu\xean m\u1eadt kh\u1ea9u"),c.a.createElement(x.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"\u0110\u0103ng nh\u1eadp"),"ho\u1eb7c ",c.a.createElement(l.b,{to:"/register"},"\u0110\u0103ng k\xfd!"))))}}]),t}(c.a.Component)),_=Object(E.b)((function(e){return{user:e.user,accessTokenStore:e.auth.accessToken}}),(function(e){return{dispatch:e}}))(C.a.create({name:"normal_login"})(L)),M=a(740),z=(a(590),j.a.Option),G=w.a.Option,H=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(y.a)(this,Object(k.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();var t={};t.oldPassword=a.state.oldPassword,t.newPassword=a.state.newPassword,t.name=a.state.name,t.gender=a.state.gender,t.avatar=a.state.avatar,a.setState({loading:!0}),q.updateUser(t).then((function(e){(0,a.props.dispatch)({type:D.b,data:e}),a.setState({loading:!1}),i.a.success("Thay \u0111\u1ed5i th\xf4ng tin th\xe0nh c\xf4ng")})).catch((function(e){throw a.setState({loading:!1}),i.a.error("Thay \u0111\u1ed5i th\u1ea5t b\u1ea1i"),e}))},a.handleConfirmBlur=function(e){var t=e.target.value;a.setState({confirmDirty:a.state.confirmDirty||!!t})},a.compareToFirstPassword=function(e,t,n){var r=a.props.form;t&&t!==r.getFieldValue("password")?n("Hai m\u1eadt kh\u1ea9u kh\xf4ng nh\u1ea5t qu\xe1n!"):n()},a.validateToNextPassword=function(e,t,n){var r=a.props.form;t&&a.state.confirmDirty&&r.validateFields(["confirm"],{force:!0}),n()},a.handleWebsiteChange=function(e){var t;t=e?[".com",".org",".net"].map((function(t){return"".concat(e).concat(t)})):[],a.setState({autoCompleteResult:t})},a.onChange=function(e){a.setState({loading:!0}),e.preventDefault();var t=new FormData;t.append("avatar",e.target.files[0]),q.uploadAvatar(t).then((function(e){console.log(e),(0,a.props.dispatch)({type:D.b,data:e}),a.setState({loading:!1,avatar:e.data.results.user.avatar}),i.a.success("C\u1eadp nh\u1eadt \u1ea3nh th\xe0nh c\xf4ng")})).catch((function(e){throw a.setState({loading:!1}),i.a.error("C\u1eadp nh\u1eadt \u1ea3nh th\u1ea5t b\u1ea1i"),e}))},a.state={confirmDirty:!1,autoCompleteResult:[],loading:!1,newPassword:null,oldPassword:null,avatar:a.props.user.data.results.user.avatar||null,loadAvatar:!1},a}return Object(O.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),q.getUser(this.props.accessToken).then((function(t){console.log(t);var a=t.data.results.user;e.setState({email:a.email,avatar:a.avatar,name:a.name,gender:a.gender,loading:!1})})).catch((function(t){throw e.setState({loading:!1}),t}))}},{key:"render",value:function(){var e=this;console.log(this.state.loadAvatar);var t=this.props.form.getFieldDecorator;this.state.autoCompleteResult.map((function(e){return c.a.createElement(G,{key:e},e)}));return c.a.createElement(u.a,{spinning:this.state.loading,tip:"Loading..."},c.a.createElement(M.a,null,c.a.createElement(S.a,{span:8,style:{borderRight:"1px solid rgb(238, 238, 238)",paddingRight:"20px"}},c.a.createElement("div",{style:{width:"100%",paddingTop:"100%",borderRadius:"50%",position:"relative"}},c.a.createElement(m.a,{src:this.state.avatar&&"http://123.30.235.196:5221/"+this.state.avatar||"https://cdn.eva.vn/upload/4-2019/images/2019-11-06/sinh-ra-trong-gia-dinh-viet-nhung-co-be-nay-lai-mang-ve-dep-tay-la-ky-untitled-19-1573053449-116-width600height750.jpg",style:{position:"absolute",top:0,left:0,bottom:0,right:0,width:"100%",height:"100%"}})),c.a.createElement("div",{style:{marginTop:"3em",textAlign:"center"}},c.a.createElement("label",{className:"upload-btn-wrapper"},c.a.createElement("input",{type:"file",required:!0,onChange:this.onChange,name:"productAttachImages"}),c.a.createElement("span",null,"Ch\u1ecdn \u1ea3nh")))),c.a.createElement(S.a,{span:16},c.a.createElement(C.a,Object.assign({},{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},{onSubmit:this.handleSubmit,style:{margin:"0 auto",marginLeft:"-20px"}}),c.a.createElement(C.a.Item,{label:"E-mail"},c.a.createElement(S.a,{xs:24,sm:24,md:24,lg:20,xl:20},c.a.createElement(T.a,{value:this.state.email,disabled:!0}))),c.a.createElement(C.a.Item,{label:"M\u1eadt kh\u1ea9u c\u0169"},c.a.createElement(S.a,{xs:24,sm:24,md:24,lg:20,xl:20},c.a.createElement(T.a.Password,{value:this.state.oldPassword,onChange:function(t){return e.setState({oldPassword:t.target.value})}}))),c.a.createElement(C.a.Item,{label:"M\u1eadt kh\u1ea9u m\u1edbi"},c.a.createElement(S.a,{xs:24,sm:24,md:24,xl:20,lg:20},c.a.createElement(T.a.Password,{value:this.state.newPassword,onChange:function(t){return e.setState({newPassword:t.target.value})}}))),c.a.createElement(C.a.Item,{label:"T\xean"},c.a.createElement(S.a,{xs:24,sm:24,md:24,xl:20,lg:20},c.a.createElement(T.a,{value:this.state.name,onChange:function(t){return e.setState({name:t.target.value})}}))),c.a.createElement(C.a.Item,{label:"Gi\u1edbi t\xednh"},t("gender",{initialValue:this.state.gender,rules:[{required:!0,message:"Vui l\xf2ng ch\u1ecdn gi\u1edbi t\xednh!"}]})(c.a.createElement(j.a,{className:"ant-col",style:{width:"83.33%"},placeholder:"Please select gender...",onChange:function(t){console.log(t),e.setState({gender:t})}},c.a.createElement(z,{value:"male"},"Nam"),c.a.createElement(z,{value:"female"},"N\u1eef")))),c.a.createElement(C.a.Item,{wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}},c.a.createElement(x.a,{type:"primary",htmlType:"submit"},"C\u1eadp nh\u1eadt"))))))}}]),t}(c.a.Component),Q=Object(E.b)((function(e){return{user:e.user,accessTokenStore:e.auth.accessToken}}),(function(e){return{dispatch:e}}))(C.a.create({name:"update"})(H));a(591),a(99),a(592),t.a=Object(E.b)((function(e){return{user:e.user,accessTokenStore:e.auth.accessToken}}),(function(e){return{dispatch:e}}))(Object(o.c)((function(e){var t=e.mode,a=e.user,g=e.accessTokenStore,f=e.dispatch,E=Object(o.b)("cookies"),b=Object(n.a)(E,3),v=b[0],y=b[1],k=b[2],O=g||v.accessToken,j=Object(r.useState)(!1),w=Object(n.a)(j,2),C=w[0],S=w[1],T=Object(r.useState)(!1),N=Object(n.a)(T,2),P=N[0],x=N[1],I=Object(r.useState)(!1),A=Object(n.a)(I,2),R=A[0],F=A[1],U=Object(r.useState)(!1),L=Object(n.a)(U,2),M=L[0],z=L[1],G=function(){F(!0)},H=function(){k("accessToken"),k("isAuth"),f({type:D.a}),x(!1),i.a.success("\u0110\u0103ng xu\u1ea5t th\xe0nh c\xf4ng")},W=function(e){y("accessToken",e.data.results.token),y("isAuth",!0),i.a.success("\u0110\u0103ng k\xed th\xe0nh c\xf4ng !")};return Object(r.useEffect)((function(){O&&0===Object.keys(a).length&&(z(!0),q.getUser(O).then((function(e){e.data.results.user&&(f({type:D.b,data:e}),z(!1))})).catch((function(){z(!1)})))}),[O]),c.a.createElement(u.a,{spinning:M,size:"small"},c.a.createElement(s.a,{mode:t,selectedKeys:[]},Object.keys(a).length>0&&c.a.createElement(s.a.Item,{key:"sign-out",className:"avatar"},c.a.createElement(m.a,{src:a.data.results.user.avatar&&"http://123.30.235.196:5221/"+a.data.results.user.avatar||"https://cdn.eva.vn/upload/4-2019/images/2019-11-06/sinh-ra-trong-gia-dinh-viet-nhung-co-be-nay-lai-mang-ve-dep-tay-la-ky-untitled-19-1573053449-116-width600height750.jpg",style:{marginRight:"10px"}}),a.data.results.user.name,c.a.createElement(p.a,{overlay:function(){return function(e){return c.a.createElement(s.a,null,c.a.createElement(s.a.Item,{key:"1"},c.a.createElement("div",{onClick:G},"C\u1eadp nh\u1eadt th\xf4ng tin")),c.a.createElement(s.a.Item,{key:"4"},c.a.createElement("div",{onClick:e},"\u0110\u0103ng xu\u1ea5t")))}(H)}},c.a.createElement(l.b,{className:"ant-dropdown-link",to:""},a.full_name," ",c.a.createElement(d.a,{type:"down"})))),!(Object.keys(a).length>0)&&c.a.createElement(s.a.Item,{key:"log-in"},c.a.createElement(l.b,{to:"",className:"auth-button",onClick:function(){x(!0)}},"\u0110\u0103ng nh\u1eadp"),c.a.createElement(h.a,{title:"\u0110\u0103ng nh\u1eadp",visible:P,footer:null,onCancel:function(e){x(!1)}},c.a.createElement(_,{login:function(e){y("accessToken",e.data.results.token),y("isAuth",!0),i.a.success("\u0110\u0103ng nh\u1eadp th\xe0nh c\xf4ng !")}}))),!(Object.keys(a).length>0)&&c.a.createElement(s.a.Item,{key:"sign-up"},c.a.createElement(l.b,{to:"",className:"auth-button",onClick:function(){S(!0)}},"\u0110\u0103ng k\xfd"),c.a.createElement(h.a,{title:"\u0110\u0103ng k\xfd",visible:C,footer:null,onCancel:function(e){S(!1)},width:"50vw"},c.a.createElement(B,{signup:W}))),c.a.createElement(h.a,{title:"C\u1eadp nh\u1eadt th\xf4ng tin",visible:R,footer:null,onCancel:function(e){F(!1)},width:"50vw"},c.a.createElement(Q,{accessToken:O,signup:W}))))})))},290:function(e,t,a){"use strict";var n=a(1),r=a(6),c=a(4),l=a(5),o=a(395),s=a(397),i=a(294),u=a(419),m=a(410),p=a(406),d=a(408),h=a(282),g=a(420),f=a(399),E=a(387),b=a(281),v=a(402),y=a(401),k=a(201),O=a(407),j=a(404),w=a(398),C=a(388),S=a(400),T=a(422),N=a(412),P=a(411),x=a(418),I=a(417),A=a(416),q=a(415),D=a(414),R=a(403),F=a(413),U=[a(396).a,R.a,F.a,x.a,I.a,A.a,q.a,D.a,T.a,O.a,s.a,i.a,u.a,N.a,P.a,m.a,p.a,d.a,h.a,g.a,f.a,E.a,b.a,v.a,y.a,k.a,j.a,w.a,C.a,S.a],B=(a(689),function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),t}(o.a));B.defaultConfig={toolbar:{items:["heading","|","fontSize","fontFamily","fontColor","fontBackgroundColor","|","bold","italic","underline","strikethrough","code","subscript","superscript","|","bulletedList","numberedList","|","outdent","indent","alignment","|","link","imageUpload","|","blockQuote","insertTable","|","undo","redo"]},cloudServices:{tokenUrl:"https://43964.cke-cs.com/token/dev/3rhf4ArSrYOZISUcFtpdFZ7n6Yq1eZdSakoZH0Wjd98I70kS78p82KoLfNjv",uploadUrl:"https://43964.cke-cs.com/easyimage/upload/"},image:{toolbar:["imageTextAlternative","|","imageStyle:alignLeft","imageStyle:full","imageStyle:alignRight"],styles:["full","alignLeft","alignRight"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]},language:"en"},B.builtinPlugins=U;t.a=B},374:function(e,t,a){var n=a(439),r="mobile",c="tablet",l="smarttv",o="wearable",s=void 0;e.exports=function(e){return function(e){var t=new n;t.setUA(e);var a=t.getResult(),i=a.os,u=a.browser,m=a.device;return{platform:{device:m.type||"desktop",os:i.name,model:m.model,browser:u.name,version:{os:i.version,browser:u.major},isDesktop:m.type===s,isMobile:m.type===r,isTablet:m.type===c,isSmarttv:m.type===l,isWearable:m.type===o,isIOS:"iOS"===i.name}}}(e)}},383:function(e,t,a){"use strict";a.r(t);var n=a(93),r=a(82),c=a(17),l=a(0),o=a.n(l),s=a(70),i=a.n(s),u=a(76),m=a(126),p=a(738),d=a(329),h=a(102),g=(a(597),a(99)),f=a(255),E=a.n(f),b=a(290),v=m.a.Option;t.default=Object(u.c)((function(e){var t=e.cookies.cookies.accessToken,a=Object(l.useState)([]),s=Object(c.a)(a,2),u=s[0],f=s[1],y=Object(l.useState)({title:"",content:"",idGrammarTopic:""}),k=Object(c.a)(y,2),O=k[0],j=k[1];return Object(l.useEffect)((function(){i()({method:"GET",url:"".concat(g.a.API_URL,"/api/grammar-topics"),headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){f(e.data.results.topics)})).catch((function(e){return console.log(e)}))}),[]),o.a.createElement("div",{className:"post-grammar"},o.a.createElement("div",{className:"post-grammar-title"},o.a.createElement("div",{className:"post-grammar-row"},o.a.createElement("div",null,"Nh\u1eadp ti\xeau \u0111\u1ec1 ng\u1eef ph\xe1p:"),o.a.createElement(d.a,{className:"post-grammar-input",placeholder:"Nh\u1eadp ti\xeau \u0111\u1ec1 ng\u1eef ph\xe1p",name:"title",onChange:function(e){var t=e.target,a=t.name,c=t.value;j(Object(r.a)({},O,Object(n.a)({},a,c)))}})),o.a.createElement("div",{className:"post-grammar-row"},o.a.createElement("div",null,"Ch\u1ecdn topic: "),o.a.createElement(m.a,{className:"post-grammar-input",onChange:function(e){j(Object(r.a)({},O,{idGrammarTopic:e}))},placeholder:"Ch\u1ecdn topic cho ng\u1eef ph\xe1p b\u1ea1n mu\u1ed1n \u0111\u0103ng"},u.map((function(e,t){var a=e._id,n=e.title;return o.a.createElement(v,{key:t,value:a},n)}))))),o.a.createElement(E.a,{editor:b.a,data:O.content,onChange:function(e,t){var a=t.getData();j(Object(r.a)({},O,{content:a}))}}),o.a.createElement("div",{className:"post-grammar-btn"},o.a.createElement(h.a,{type:"primary",onClick:function(){i()({method:"POST",url:"".concat(g.a.API_URL,"/api/grammar"),headers:{Authorization:"Bearer ".concat(t)},data:O}).then((function(e){p.a.success("\u0110\u0103ng b\xe0i th\xe0nh c\xf4ng."),f({title:"",content:"",idGrammarTopic:""})})).catch((function(e){return console.log(e)}))}},"\u0110\u0103ng")),o.a.createElement("hr",null),o.a.createElement("h1",null,"Xem n\u1ed9i dung b\xe0i \u0111\u0103ng tr\u01b0\u1edbc khi \u0111\u0103ng b\xe0i:"),o.a.createElement("hr",null),o.a.createElement("div",{style:{marginTop:"2rem"},className:"ck-post-display",dangerouslySetInnerHTML:{__html:O.content}}))}))},409:function(e,t,a){"use strict";a.r(t);var n=a(17),r=a(245),c=a(0),l=a.n(c),o=a(742),s=a(211),i=a(22),u=a(747),m=a(41),p=a(227),d=a(155),h=(a(596),a(383)),g=a(70),f=a.n(g),E=a(76),b=a(102),v=a(743),y=a(99),k=[{title:"Ti\xeau \u0111\u1ec1 b\xe0i \u0111\u0103ng ng\u1eef ph\xe1p",dataIndex:"title",key:"title"},{title:"Topic c\u1ee7a b\xe0i \u0111\u0103ng ng\u1eef ph\xe1p",dataIndex:"idGrammarTopic",key:"idGrammarTopic"},{title:"Thao t\xe1c",key:"action",render:function(){return l.a.createElement(b.a,{type:"danger"},"X\xf3a")}}],O=Object(E.c)((function(e){var t=e.cookies.cookies.accessToken,a=Object(c.useState)([]),r=Object(n.a)(a,2),o=r[0],s=r[1];return Object(c.useEffect)((function(){f()({method:"GET",url:"".concat(y.a.API_URL,"/api/grammar"),headers:{Authorization:"Bearer ".concat(t)},params:{idTopic:"5de0c6ef7f6d4b002423cef2",page:1,records:2}}).then((function(e){console.log(e.data.results.grammars.grammars),s(e.data.results.grammars.grammars)})).catch((function(e){return console.log(e)}))}),[]),l.a.createElement("div",null,l.a.createElement(v.a,{dataSource:o,columns:k}))})),j=a(93),w=a(82),C=a(329),S=(a(730),Object(E.c)((function(e){var t=e.cookies.cookies.accessToken,a=Object(c.useState)({}),r=Object(n.a)(a,2),o=r[0],s=r[1];return l.a.createElement("div",{className:"post-topic-grammar"},l.a.createElement("div",{className:"post-topic-grammar-row"},l.a.createElement("div",null,"Ti\xeau \u0111\u1ec1 topic:"),l.a.createElement(C.a,{name:"title",value:o.title,onChange:function(e){var t=e.target,a=t.name,n=t.value;s(Object(w.a)({},o,Object(j.a)({},a,n)))}})),l.a.createElement("div",{className:"post-topic-grammar-btn"},l.a.createElement(b.a,{type:"primary",onClick:function(){f()({method:"POST",url:"".concat(y.a.API_URL,"/api/grammar-topics"),headers:{Authorization:"Bearer ".concat(t)},data:o}).then((function(e){console.log(e.data),s("")})).catch((function(e){return console.log(e)}))}},"\u0110\u0103ng")))}))),T=a(18),N=(a(731),a(126)),P=a(738),x=a(255),I=a.n(x),A=a(290),q=N.a.Option,D=Object(E.c)((function(e){var t=e.cookies.cookies.accessToken,a=Object(c.useState)({part:7,level:0,paragraph:""}),r=Object(n.a)(a,2),o=r[0],s=r[1],i=Object(c.useState)({}),u=Object(n.a)(i,2),m=u[0],p=u[1],d=Object(c.useState)({}),h=Object(n.a)(d,2),g=h[0],E=h[1],v=function(e){var t=e.target,a=t.name,n=t.value;E(Object(w.a)({},g,Object(j.a)({},a,n)))};return l.a.createElement("div",{className:"upload-part7"},l.a.createElement("div",{className:"upload-part7-content"},l.a.createElement("div",{className:"upload-part7-raw"},l.a.createElement("div",null,"Ch\u1ecdn \u0111\u1ed9 kh\xf3 c\u1ee7a c\xe2u h\u1ecfi:"),l.a.createElement(N.a,{className:"upload-part7-level",placeholder:"Ch\u1ecdn \u0111\u1ed9 kh\xf3 c\u1ee7a c\xe2u h\u1ecfi",onChange:function(e){return s(Object(w.a)({},o,{level:e}))}},l.a.createElement(q,{value:0},"0"),l.a.createElement(q,{value:1},"1"),l.a.createElement(q,{value:2},"2"),l.a.createElement(q,{value:3},"3"),l.a.createElement(q,{value:4},"4"),l.a.createElement(q,{value:5},"5"),l.a.createElement(q,{value:6},"6"),l.a.createElement(q,{value:7},"7"))),l.a.createElement(I.a,{editor:A.a,data:o.paragraph,onChange:function(e,t){var a=t.getData();s(Object(w.a)({},o,{paragraph:a}))}}),l.a.createElement("div",{className:"upload-part7-btn"},l.a.createElement(b.a,{type:"primary",onClick:function(){var e=new FormData;e.set("part",o.part),e.set("level",o.level),e.set("paragraph",o.paragraph),console.log("form data before upload des:",t);var a=!0,r=!1,c=void 0;try{for(var l,s=e.entries()[Symbol.iterator]();!(a=(l=s.next()).done);a=!0){var i=l.value,u=Object(n.a)(i,2),d=u[0],h=u[1];console.log(d,h)}}catch(g){r=!0,c=g}finally{try{a||null==s.return||s.return()}finally{if(r)throw c}}f()({method:"POST",url:"".concat(y.a.API_URL,"/api/questions/basic-info"),headers:{Authorization:"Bearer ".concat(t),"Content-Type":"multipart/form-data"},data:e}).then((function(e){P.a.success("\u0110\u0103ng b\xe0i th\xe0nh c\xf4ng."),console.log("question after uploaded: ",e.data),p(Object(w.a)({},m,{idQuestion:e.data.results._id}))})).catch((function(e){return console.log(e)}))}},"\u0110\u0103ng m\xf4 t\u1ea3 c\xe2u h\u1ecfi"))),l.a.createElement("br",null)," ",l.a.createElement("hr",null)," ",l.a.createElement("br",null),l.a.createElement("div",{className:"upload-part7-question"},l.a.createElement("div",{className:"upload-part7-raw"},l.a.createElement("div",{className:"question-title"},"C\xe2u h\u1ecfi:"),l.a.createElement(C.a,{name:"question",onChange:v,value:g.question})),l.a.createElement("div",{className:"upload-part7-raw"},l.a.createElement("div",{className:"question-title"},"A:"),l.a.createElement(C.a,{name:"A",onChange:v,value:g.A})),l.a.createElement("div",{className:"upload-part7-raw"},l.a.createElement("div",{className:"question-title"},"B:"),l.a.createElement(C.a,{name:"B",onChange:v,value:g.B})),l.a.createElement("div",{className:"upload-part7-raw"},l.a.createElement("div",{className:"question-title"},"C:"),l.a.createElement(C.a,{name:"C",onChange:v,value:g.C})),l.a.createElement("div",{className:"upload-part7-raw"},l.a.createElement("div",{className:"question-title"},"D:"),l.a.createElement(C.a,{name:"D",onChange:v,value:g.D})),l.a.createElement("div",{className:"upload-part7-raw"},l.a.createElement("div",{className:"question-title"},"Answer:"),l.a.createElement(C.a,{name:"answer",onChange:v,value:g.answer})),l.a.createElement("div",{className:"upload-part7-raw"},l.a.createElement("div",{className:"question-title"},"Tips:"),l.a.createElement(C.a,{name:"tips",onChange:v,value:g.tips})),l.a.createElement("div",{className:"upload-part7-btn"},l.a.createElement(b.a,{type:"primary",onClick:function(){p(Object(w.a)({},m,{subQuestions:[].concat(Object(T.a)(m.subQuestions?m.subQuestions:[]),[g])})),E({}),P.a.success("Th\xeam c\xe2u h\u1ecfi nh\u1ecf th\xe0nh c\xf4ng.")},disabled:!m.idQuestion},"Th\xeam c\xe2u h\u1ecfi nh\u1ecf"),l.a.createElement(b.a,{type:"primary",onClick:function(){console.log("Data before upload content:",m),f()({method:"POST",url:"".concat(y.a.API_URL,"/api/questions/sub-questions"),headers:{Authorization:"Bearer ".concat(t)},data:m}).then((function(e){P.a.success("\u0110\u0103ng b\xe0i th\xe0nh c\xf4ng."),console.log("Subquestion after uploaded: ",e),s({part:7,level:0,paragraph:""})})).catch((function(e){return console.log(e)}))},disabled:!m.idQuestion},"\u0110\u0103ng ph\u1ea7n n\u1ed9i dung c\xe2u h\u1ecfi"))))})),R=(a(732),o.a.Header),F=o.a.Content,U=o.a.Footer,B=o.a.Sider,L=s.a.SubMenu;t.default=function(e){Object(r.a)(e);var t=Object(c.useState)(!1),a=Object(n.a)(t,2),g=a[0],f=a[1];return l.a.createElement("div",{className:"".concat("admin")},l.a.createElement(o.a,{style:{minHeight:"100vh"}},l.a.createElement(B,{collapsible:!0,collapsed:g,onCollapse:function(e){return f(e)}},l.a.createElement("div",{className:"logoAdmin"}),l.a.createElement(s.a,{theme:"dark",defaultSelectedKeys:["1"],mode:"inline"},l.a.createElement(s.a.Item,{key:"0"},l.a.createElement(i.a,{type:"user"}),l.a.createElement("span",null,l.a.createElement(m.b,{to:"/",style:{color:"#fff"}},"User"))),l.a.createElement(L,{key:"sub1",title:l.a.createElement("span",null,l.a.createElement(i.a,{type:"question"}),l.a.createElement("span",null,l.a.createElement(m.b,{to:"/part/1",style:{color:"#fff"}},"Question")))},l.a.createElement(s.a.Item,{key:"1"},l.a.createElement(m.b,{to:"/part/1"},"Part 1")),l.a.createElement(s.a.Item,{key:"2"},l.a.createElement(m.b,{to:"/part/2"},"Part 2")),l.a.createElement(s.a.Item,{key:"3"},l.a.createElement(m.b,{to:"/part/3"},"Part 3")),l.a.createElement(s.a.Item,{key:"4"},l.a.createElement(m.b,{to:"/part/4"},"Part 4")),l.a.createElement(s.a.Item,{key:"5"},l.a.createElement(m.b,{to:"/part/5"},"Part 5")),l.a.createElement(s.a.Item,{key:"6"},l.a.createElement(m.b,{to:"/part/6"},"Part 6")),l.a.createElement(s.a.Item,{key:"7"},l.a.createElement(m.b,{to:"/part/7"},"Part 7"))),l.a.createElement(L,{key:"sub2",title:l.a.createElement("span",null,l.a.createElement(i.a,{type:"grammar"}),l.a.createElement("span",null,l.a.createElement(m.b,{to:"/topic",style:{color:"#fff"}},"Grammar")))},l.a.createElement(s.a.Item,{key:"topic"},l.a.createElement(m.b,{to:"/upload-topic-grammar"},"Topic")),l.a.createElement(s.a.Item,{key:"post-grammar"},l.a.createElement(m.b,{to:"/post-grammar"},"Grammar"))),l.a.createElement(s.a.Item,{key:"my-posts-grammar"},l.a.createElement(i.a,{type:"table"}),l.a.createElement("span",null,l.a.createElement(m.b,{to:"/my-posts-grammar",style:{color:"#fff"}},"My grammar post"))))),l.a.createElement(o.a,null,l.a.createElement(R,{className:"menucon",style:{background:"#fff",padding:0}},l.a.createElement("div",{className:"rightMenu",style:{float:"right"}},l.a.createElement(p.a,{mode:"horizontal"}))),l.a.createElement(F,{style:{margin:"0 16px"}},l.a.createElement(u.a,{style:{margin:"16px 0"}}),l.a.createElement("div",{style:{padding:24,background:"#fff",minHeight:"100%"}},l.a.createElement(d.d,null,l.a.createElement(d.b,{path:"/post-grammar",component:h.default,exact:!0}),l.a.createElement(d.b,{path:"/my-posts-grammar",component:O,exact:!0}),l.a.createElement(d.b,{path:"/upload-topic-grammar",component:S,exact:!0}),l.a.createElement(d.b,{path:"/part/7",component:D,exact:!0})))),l.a.createElement(U,{style:{textAlign:"center"}},"NW \xa92018 Created by Ant UED"))))}},430:function(e,t,a){e.exports=a(735)},435:function(e,t,a){},456:function(e,t,a){},457:function(e,t,a){},509:function(e,t,a){},589:function(e,t,a){},590:function(e,t,a){},591:function(e,t,a){},592:function(e,t){},593:function(e,t,a){},594:function(e,t,a){},595:function(e,t,a){},596:function(e,t,a){},597:function(e,t,a){},689:function(e,t,a){},730:function(e,t,a){},731:function(e,t,a){},732:function(e,t,a){},733:function(e,t,a){},735:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),l=a(19),o=a.n(l),s=(a(435),a(165)),i=a(107),u=a(41),m=a(76),p=a(374),d=a.n(p),h=Object(r.createContext)(),g=function(e){var t=e.userAgent,a=e.children,n=d()(t).platform;return c.a.createElement(h.Provider,{value:{platform:n}},a)},f=a(17),E=a(70),b=a.n(E),v=(a(456),a(102)),y=a(746),k=a(211),O=(a(457),function(e){var t=e.mode,a=void 0===t?"horizontal":t;return c.a.createElement(k.a,{mode:a,defaultSelectedKeys:["trang-chu"]},c.a.createElement(k.a.Item,{key:"1"},c.a.createElement(u.b,{to:"/"},"Trang ch\u1ee7")),c.a.createElement(k.a.Item,{key:"2"},c.a.createElement(u.b,{to:"/new-word"},"H\u1ecdc t\u1eeb m\u1edbi")),c.a.createElement(k.a.Item,{key:"3"},c.a.createElement(u.b,{to:"/grammar"},"H\u1ecdc ng\u1eef ph\xe1p")),c.a.createElement(k.a.Item,{key:"4"},c.a.createElement(u.b,{to:"/exam"},"Thi th\u1eed")))}),j=a(227),w=a(329),C=(a(593),w.a.Search),S=function(){var e=function(e){console.log(e)};return c.a.createElement(C,{placeholder:"Nh\u1eadp t\xean t\u1eeb m\u1edbi",onSearch:e,enterButton:!0,onPressEnter:e})},T=(a(594),n=function(e){var t=e.platform,a=Object(r.useState)(!1),n=Object(f.a)(a,2),l=n[0],o=n[1],s=t.isMobile?"vertical":"horizontal";return c.a.createElement("nav",{className:"menuBar",style:{position:"sticky",top:"0",zIndex:"10",backgroundColor:"#fff"}},c.a.createElement("div",{className:"logo"},c.a.createElement(u.b,{to:"/"},"Logo")),c.a.createElement("div",{className:"menuCon"},c.a.createElement("div",{className:"leftMenu"},c.a.createElement(O,null)),c.a.createElement("div",{className:"search-input"},c.a.createElement(S,null)),c.a.createElement("div",{className:"rightMenu"},c.a.createElement(j.a,{mode:s})),c.a.createElement(v.a,{className:"barsMenu",type:"primary",onClick:function(){return o(!0)}},c.a.createElement("span",{className:"barsBtn"})),c.a.createElement(y.a,{title:"Menu",placement:"right",closable:!1,onClose:function(){return o(!1)},visible:l},c.a.createElement(O,null),c.a.createElement(j.a,{mode:s}))))},function(e){var t=Object(r.useContext)(h);return c.a.createElement(n,Object.assign({},e,t))}),N=(a(595),function(){return c.a.createElement("div",{className:"".concat("footer")},"\xa9 B\u1ea3n quy\u1ec1n website thu\u1ed9c v\u1ec1 nh\xf3m 7 - PTPMCN - 20191. B\u1ea3o l\u01b0u m\u1ecdi quy\u1ec1n."," ")}),P=a(409),x=a(245),I=a(391),A=(a(733),function(e){return Object(x.a)(e),c.a.createElement("div",{className:"".concat("loading")},c.a.createElement(I.AtomSpinner,{color:"#1890FF"}))}),q=a(99);var D=Object(i.b)((function(e){var t=e.user;return console.log("id from connect: "),{user:t}}))(Object(m.c)((function(e){var t=e.children,a=e.cookies.cookies.accessToken,n=Object(r.useState)({}),l=Object(f.a)(n,2),o=l[0],s=l[1];return Object(r.useEffect)((function(){b()({method:"GET",url:"".concat(q.a.API_URL,"/api/users/"),headers:{Authorization:"Bearer ".concat(a)}}).then((function(e){console.log(e.data),s(e.data.results.user)})).catch((function(e){return console.log(e)}))}),[]),""!==a?Object.keys(o).length>0?0===o.role.id?c.a.createElement(r.Fragment,null,c.a.createElement(T,null),t,c.a.createElement(N,null)):c.a.createElement(P.default,null,t):c.a.createElement(A,null):c.a.createElement(r.Fragment,null,c.a.createElement(T,null),t,c.a.createElement(N,null))}))),R=a(82),F=a(79),U={accessToken:""},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.accessToken;switch(a){case F.b:return Object(R.a)({},e,{accessToken:n});default:return e}},L={},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.user;switch(a){case F.b:return t.data;case F.c:return e=Object(R.a)({},e,{},n);case F.a:return e={};default:return e}},M=Object(s.c)({auth:B,user:_}),z=a(155),G=a(423),H=Object(m.c)((function(e){var t=e.cookies,a=e.component,n=Object(G.a)(e,["cookies","component"]),r=t.cookies.accessToken;return c.a.createElement(z.b,Object.assign({},n,{render:function(e){return r&&""!==r?c.a.createElement(a,e):c.a.createElement(z.a,{to:"/login"})}}))})),Q=a(143),W=a.n(Q),V=W()({loader:function(){return a.e(9).then(a.bind(null,771))},loading:A}),K=(W()({loader:function(){return Promise.resolve().then(a.bind(null,409))},loading:A}),W()({loader:function(){return Promise.all([a.e(10),a.e(5)]).then(a.bind(null,779))},loading:A})),Z=W()({loader:function(){return a.e(8).then(a.bind(null,772))},loading:A}),J=W()({loader:function(){return a.e(7).then(a.bind(null,773))},loading:A}),X=W()({loader:function(){return a.e(6).then(a.bind(null,777))},loading:A}),Y=W()({loader:function(){return Promise.all([a.e(3),a.e(4)]).then(a.bind(null,778))},loading:A}),$=[{path:"/",component:V},{path:"/part/:idPart",component:W()({loader:function(){return Promise.resolve().then(a.bind(null,383))},loading:A})},{path:"/grammar",component:K},{path:"/exam",component:Z},{path:"/exam/intro",component:J},{path:"/new-word",component:X},{path:"/new-word/:topic",component:Y},{path:"*",component:function(){return c.a.createElement("div",null,"404!")}}],ee=a(394),te=Object(s.d)(M,Object(s.a)(ee.a));!function(){var e=navigator.userAgent,t=c.a.createElement(u.a,null,c.a.createElement(i.a,{store:te},c.a.createElement(m.a,null,c.a.createElement(g,{userAgent:e},c.a.createElement(D,null,c.a.createElement(z.d,null,$.map((function(e,t){var a=e.path,n=e.component,r=e.exact,l=void 0===r||r;return e.isPrivate?c.a.createElement(H,{key:t,path:a,component:n,exact:l}):c.a.createElement(z.b,{key:t,path:a,component:n,exact:l})}))))))));o.a.render(t,document.getElementById("root"))}()},79:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return c}));var n="SIGN_IN",r="STORE_USER",c="DELETE_USER"},99:function(e,t,a){"use strict";t.a={API_URL:"https://toeic-practice.herokuapp.com",IMG_URL:"http://123.30.235.196:5221"}}},[[430,1,2]]]);
//# sourceMappingURL=main.35de10b5.chunk.js.map