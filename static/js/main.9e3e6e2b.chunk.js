(this["webpackJsonplearn-auth"]=this["webpackJsonplearn-auth"]||[]).push([[0],{176:function(e,t,a){e.exports=a(319)},181:function(e,t,a){},205:function(e,t){},207:function(e,t){},221:function(e,t){},223:function(e,t){},251:function(e,t){},252:function(e,t){},257:function(e,t){},259:function(e,t){},283:function(e,t){},319:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(24),c=a.n(o),l=(a(181),a(15)),s=a.n(l),i=a(26),m=a(12),u=a(71),d=a.n(u),p=function(e){if("undefined"!==window)return d.a.get(e)},b=function(e,t){var a,n;console.log("AUTHENTICATE HELPER ON SIGNIN RESPONSE",e),a="token",n=e.data.token,"undefined"!==window&&d.a.set(a,n,{expires:1}),function(e,t){"undefined"!==window&&localStorage.setItem(e,JSON.stringify(t))}("user",e.data.user),t()},f=function(){if("undefined"!==window)return!!p("token")&&(!!localStorage.getItem("user")&&JSON.parse(localStorage.getItem("user")))},E=function(e){var t;t="token","undefined"!==window&&d.a.remove(t,{expires:1}),function(e){"undefined"!==window&&localStorage.removeItem(e)}("user"),e()},h=Object(m.g)((function(e){var t=e.children,a=e.match,o=e.history,c=function(e){return a.path===e?{color:"#000"}:{color:"#fff"}};return r.a.createElement(n.Fragment,null,r.a.createElement("ul",{className:"nav nav-tabs bg-primary"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/",className:"nav-link",style:c("/")},"Home")),!f()&&r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/signin",className:"nav-link",style:c("/signin")},"Signin")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/signup",className:"nav-link",style:c("/signup")},"Signup"))),f()&&r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/dashboard",className:"nav-link",style:c("/dashboard")},"Dashboard")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("span",{className:"nav-link",style:{cursor:"pointer",color:"#fff"},onClick:function(){E((function(){o.push("/")}))}},"Signout")))),r.a.createElement("div",{className:"container"},t))}));var g=function(){return r.a.createElement(h,{className:"Home"},r.a.createElement("h1",null,"Hello React"))},v=a(28),O=a(5),w=a(19),N=a(11),j=function(){var e=Object(n.useState)({name:"",email:"",password:"",buttonText:"Submit"}),t=Object(w.a)(e,2),a=t[0],o=t[1],c=a.buttonText,l=a.name,i=a.email,m=a.password,u=function(e){o(Object(O.a)(Object(O.a)({},a),{},Object(v.a)({},e.target.name,e.target.value)))},d=function(e){e.preventDefault(),o(Object(O.a)(Object(O.a)({},a),{},{buttonText:"Submitting..."})),s.a.post("/signup",{name:l,email:i,password:m}).then((function(e){console.log("SIGNED UP SUCCESS!!",e),o({name:"",password:"",email:"",buttonText:"Submit"}),N.b.success(e.data.message)})).catch((function(e){e&&e.response&&e.response.data&&N.b.error(e.response.data.error),o(Object(O.a)(Object(O.a)({},a),{},{buttonText:"Submit"}))}))};return r.a.createElement(h,null,r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement(N.a,null),r.a.createElement("h1",{className:"p-5 text-center"},"Sign up"),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Name"),r.a.createElement("input",{onChange:u,name:"name",value:l,type:"text",className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Email"),r.a.createElement("input",{onChange:u,name:"email",type:"email",value:i,className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Password"),r.a.createElement("input",{onChange:u,name:"password",type:"password",value:m,className:"form-control"})),r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:d},c)))))},S=function(e){var t=e.history,a=Object(n.useState)({email:"",password:"",buttonText:"Submit"}),o=Object(w.a)(a,2),c=o[0],l=o[1],m=c.buttonText,u=c.email,d=c.password,p=function(e){l(Object(O.a)(Object(O.a)({},c),{},Object(v.a)({},e.target.name,e.target.value)))},E=function(e){e.preventDefault(),l(Object(O.a)(Object(O.a)({},c),{},{buttonText:"Submitting..."})),s.a.post("/signin",{email:u,password:d}).then((function(e){console.log("SIGNED UP SUCCESS!!",e),b(e,(function(){l(Object(O.a)(Object(O.a)({},c),{},{name:"",email:"",password:"",buttonText:"Submitted"})),f()?t.push("/dashboard"):t.push("/signin")}))})).catch((function(e){e&&e.response&&e.response.data&&N.b.error(e.response.data.error),l(Object(O.a)(Object(O.a)({},c),{},{buttonText:"Submit"}))}))};return r.a.createElement(h,null,r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement(N.a,null),r.a.createElement("h1",{className:"p-5 text-center"},"Signin"),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Email"),r.a.createElement("input",{onChange:p,name:"email",type:"email",value:u,className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Password"),r.a.createElement("input",{onChange:p,name:"password",type:"password",value:d,className:"form-control"})),r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:E},m))),r.a.createElement("br",null),r.a.createElement(i.b,{to:"/auth/password/forgot",className:"btn btn-sm btn-outline-danger"},"Forgot Password")))},k=a(66),x=a.n(k),y=function(e){var t=e.match,a=Object(n.useState)({name:"",token:"",show:!0}),o=Object(w.a)(a,2),c=o[0],l=o[1];Object(n.useEffect)((function(){var e=t.params.token;if(e){var a=x.a.decode(e).name;l((function(t){return Object(O.a)(Object(O.a)({},t),{},{name:a,token:e})}))}}),[t.params.token]);var i=c.name,m=c.token,u=function(e){e.preventDefault(),s.a.post("/account-activation",{token:m}).then((function(e){console.log("ACCOUNT ACTIVATION",e),l(Object(O.a)(Object(O.a)({},c),{},{show:!1})),N.b.success(e.data.message)})).catch((function(e){console.log("ACCOUNT ACTIVATION ERROR",e.response.data.error),N.b.error(e.response.data.error)}))};return r.a.createElement(h,null,r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement(N.a,null),r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",{className:"p-5"},"Hey ",i,", Ready to activate your account?"),r.a.createElement("button",{className:"btn btn-outline-primary",onClick:u},"Activate Account"))))},T="Request password reset link",C=function(e){e.history;var t=Object(n.useState)({email:"",buttonText:T}),a=Object(w.a)(t,2),o=a[0],c=a[1],l=o.email,i=o.buttonText,m=function(e){e.preventDefault(),c(Object(O.a)(Object(O.a)({},o),{},{buttonText:"Submitting"})),s.a.post("forgot-password",{email:l}).then((function(e){console.log("FORGOT PASSWORD SUCCESS",e),N.b.success(e.data.message),c(Object(O.a)(Object(O.a)({},o),{},{buttonText:T}))})).catch((function(e){console.log("FORGOT PASSWORD ERROR",e.response.data),N.b.error(e.response.data.error),c(Object(O.a)(Object(O.a)({},o),{},{buttonText:T}))}))};return r.a.createElement(h,null,r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement(N.a,null),r.a.createElement("h1",{className:"p-5 text-center"},"Forgot password"),function(){return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Email"),r.a.createElement("input",{onChange:(e="email",function(t){c(Object(O.a)(Object(O.a)({},o),{},Object(v.a)({},e,t.target.value)))}),value:l,type:"email",className:"form-control"})),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-primary",onClick:m},i)));var e}()))},R=function(e){var t=e.match,a=Object(n.useState)({name:"",token:"",newPassword:"",buttonText:"Reset password"}),o=Object(w.a)(a,2),c=o[0],l=o[1];Object(n.useEffect)((function(){var e=t.params.token,a=x.a.decode(e).name;e&&l((function(t){return Object(O.a)(Object(O.a)({},t),{},{name:a,token:e})}))}),[t.params.token]);var i=c.name,m=c.token,u=c.newPassword,d=c.buttonText,p=function(e){l(Object(O.a)(Object(O.a)({},c),{},{newPassword:e.target.value}))},b=function(e){e.preventDefault(),l(Object(O.a)(Object(O.a)({},c),{},{buttonText:"Submitting"})),s.a.post("/reset-password",{newPassword:u,resetPasswordLink:m}).then((function(e){console.log("RESET PASSWORD SUCCESS",e),N.b.success(e.data.message),l(Object(O.a)(Object(O.a)({},c),{},{buttonText:"Done"}))})).catch((function(e){console.log("RESET PASSWORD ERROR",e.response.data),N.b.error(e.response.data.error),l(Object(O.a)(Object(O.a)({},c),{},{buttonText:"Reset password"}))}))};return r.a.createElement(h,null,r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement(N.a,null),r.a.createElement("h1",{className:"p-5 text-center"},"Hey ",i,", Type your new password"),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"New Password"),r.a.createElement("input",{onChange:p,value:u,type:"password",className:"form-control",placeholder:"Type new password",required:!0})),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-primary",onClick:b},d)))))},A=a(345),P=a(6),I=a(354),D=a(347),U=a(348),H=a(349),F=a(350),W=a(353),G=a(352),q=a(351),z=a(74),J=a(72),L=a(170),M=a.n(L),B=a(171),V=a.n(B),$=a(172),_=a.n($),K=a(169),Q=a.n(K),X=Object(A.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:J.a[500]}}}));function Y(e){var t=X(),a=r.a.useState(!1),n=Object(w.a)(a,2),o=n[0],c=n[1];return r.a.createElement(I.a,{className:t.root},r.a.createElement(D.a,{avatar:r.a.createElement(G.a,{"aria-label":"recipe",className:t.avatar}),action:r.a.createElement(q.a,{"aria-label":"settings"},r.a.createElement(Q.a,null)),title:e.user.name,subheader:e.user.createdAt}),r.a.createElement(U.a,{className:t.media,image:"../img/2.jpg",title:"Paella dish"}),r.a.createElement(H.a,null,r.a.createElement(z.a,{variant:"body2",color:"textSecondary",component:"p"},"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.")),r.a.createElement(F.a,{disableSpacing:!0},r.a.createElement(q.a,{"aria-label":"add to favorites"},r.a.createElement(M.a,null)),r.a.createElement(q.a,{"aria-label":"share"},r.a.createElement(V.a,null)),r.a.createElement(q.a,{className:Object(P.a)(t.expand,Object(v.a)({},t.expandOpen,o)),onClick:function(){c(!o)},"aria-expanded":o,"aria-label":"show more"},r.a.createElement(_.a,null))),r.a.createElement(W.a,{in:o,timeout:"auto",unmountOnExit:!0},r.a.createElement(H.a,null,r.a.createElement(z.a,{paragraph:!0},"Method:"),r.a.createElement(z.a,{paragraph:!0},"Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes."),r.a.createElement(z.a,{paragraph:!0},"Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add piment\xf3n, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil."),r.a.createElement(z.a,{paragraph:!0},"Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don\u2019t open.)"),r.a.createElement(z.a,null,"Set aside off of the heat to let rest for 10 minutes, and then serve."))))}var Z=function(){var e=Object(n.useState)([]),t=Object(w.a)(e,2),a=t[0],o=t[1],c=Object(n.useCallback)((function(){s.a.get("users/list-users").then((function(e){console.log("FETCH USERS SUCCESS!!",e),o(e.data.result)})).catch((function(e){e&&e.response&&e.response.data&&N.b.error(e.response.data.error)}))}),[]);return Object(n.useEffect)((function(){c()}),[c]),r.a.createElement(h,null,r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement(N.a,null),r.a.createElement("ul",null,a.length?a.map((function(e){return r.a.createElement("li",{key:e._id},r.a.createElement(Y,{user:e}))})):r.a.createElement("li",null,"No users have signedup.")),r.a.createElement("button",{className:"btn btn-primary",onClick:c},"Make API Call")))},ee=a(70),te=function(e){var t=e.component,a=Object(ee.a)(e,["component"]);return r.a.createElement(m.b,Object.assign({},a,{render:function(e){return f()?r.a.createElement(t,e):r.a.createElement(m.a,{to:"/signin"})}}))},ae=function(e){var t=e.component,a=e.restricted,n=Object(ee.a)(e,["component","restricted"]);return r.a.createElement(m.b,Object.assign({},n,{render:function(e){return f()&&a?r.a.createElement(m.a,{to:"/dashboard"}):r.a.createElement(t,e)}}))},ne=function(){return r.a.createElement(i.a,null,r.a.createElement(m.d,null,r.a.createElement(ae,{path:"/",exact:!0,component:g}),r.a.createElement(ae,{restricted:!0,path:"/signup",exact:!0,component:j}),r.a.createElement(ae,{restricted:!0,path:"/signin",exact:!0,component:S}),r.a.createElement(ae,{restricted:!0,path:"/auth/activate/:token",exact:!0,component:y}),r.a.createElement(ae,{restricted:!0,path:"/auth/password/forgot",exact:!0,component:C}),r.a.createElement(ae,{restricted:!0,path:"/auth/password/reset/:token",exact:!0,component:R}),r.a.createElement(te,{path:"/dashboard",exact:!0,component:Z})))};s.a.defaults.baseURL="http://localhost:8000/api",s.a.interceptors.request.use((function(e){var t=p("token");return e.headers.Authorization=t,e})),s.a.interceptors.response.use(null,(function(e){return 401===e.response.status&&E((function(){window.location.href="/"})),Promise.reject(e)}));var re=function(){return r.a.createElement(ne,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(318);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[176,1,2]]]);
//# sourceMappingURL=main.9e3e6e2b.chunk.js.map