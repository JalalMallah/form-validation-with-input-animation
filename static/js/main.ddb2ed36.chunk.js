(this.webpackJsonpform_validation_with_input_animation=this.webpackJsonpform_validation_with_input_animation||[]).push([[0],[,,,,,,,,,,function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){"use strict";t.r(s);var a=t(1),n=t.n(a),r=t(4),i=t.n(r),c=t(2),l=t(0),o=Object(a.createContext)(),u=function(e){var s=e.children,t=Object(a.useState)(""),n=Object(c.a)(t,2),r=n[0],i=n[1],u=Object(a.useState)(!0),j=Object(c.a)(u,2),d=j[0],m=j[1],b=Object(a.useState)(""),O=Object(c.a)(b,2),f=O[0],x=O[1],h=Object(a.useState)(!0),g=Object(c.a)(h,2),w=g[0],p=g[1],v=Object(a.useState)(""),P=Object(c.a)(v,2),C=P[0],V=P[1],N=Object(a.useState)(!0),S=Object(c.a)(N,2),E=S[0],I=S[1],U=Object(a.useState)(""),_=Object(c.a)(U,2),y=_[0],A=_[1],B=Object(a.useState)(!0),q=Object(c.a)(B,2),k=q[0],z=q[1],J=Object(a.useState)(!1),T=Object(c.a)(J,2),Z={username:r,setUsername:i,isUsernameValid:d,toggleIsUsernameValid:m,email:f,setEmail:x,isEmailValid:w,toggleIsEmailValid:p,password:C,setPassword:V,isPasswordValid:E,toggleIsPasswordValid:I,confirmPassword:y,setConfirmPassword:A,isConfirmPasswordValid:k,toggleIsConfirmPasswordValid:z,isBannerActive:T[0],toggleIsBannerActive:T[1]};return Object(l.jsx)(o.Provider,{value:Z,children:s})},j=function(){var e=Object(a.useContext)(o),s=e.username,t=e.setUsername,n=e.isUsernameValid;return Object(l.jsxs)("div",{className:"form-element",children:[Object(l.jsx)("input",{type:"text",value:s,onChange:function(e){return t(e.target.value.trim())},required:!0}),Object(l.jsx)("label",{className:"label",children:n?Object(l.jsx)("span",{className:"label-text",children:"Username"}):Object(l.jsx)("span",{className:"error-message",children:"Username must be at least 3 characters"})})]})},d=function(){var e=Object(a.useContext)(o),s=e.email,t=e.setEmail,n=e.isEmailValid;return Object(l.jsxs)("div",{className:"form-element",children:[Object(l.jsx)("input",{type:"text",value:s,onChange:function(e){return t(e.target.value.trim())},required:!0}),Object(l.jsx)("label",{className:"label",children:n?Object(l.jsx)("span",{className:"label-text",children:"Email"}):Object(l.jsx)("span",{className:"error-message",children:"Email is not valid"})})]})},m=function(){var e=Object(a.useContext)(o),s=e.password,t=e.setPassword,n=e.isPasswordValid;return Object(l.jsxs)("div",{className:"form-element",children:[Object(l.jsx)("input",{type:"password",value:s,onChange:function(e){return t(e.target.value.trim())},required:!0}),Object(l.jsx)("label",{className:"label",children:n?Object(l.jsx)("span",{className:"label-text",children:"Password"}):Object(l.jsx)("span",{className:"error-message",children:"Password must be at least 8 characters"})})]})},b=function(){var e=Object(a.useContext)(o),s=e.confirmPassword,t=e.setConfirmPassword,n=e.isConfirmPasswordValid;return Object(l.jsxs)("div",{className:"form-element",children:[Object(l.jsx)("input",{type:"password",value:s,onChange:function(e){return t(e.target.value.trim())},required:!0}),Object(l.jsx)("label",{className:"label",children:n?Object(l.jsx)("span",{className:"label-text",children:"Confirm password"}):Object(l.jsx)("span",{className:"error-message",children:"Passwords must match"})})]})},O=(t(10),function(){var e=Object(a.useContext)(o),s=e.username,t=e.setUsername,n=e.isUsernameValid,r=e.email,i=e.setEmail,c=e.isEmailValid,u=e.password,O=e.setPassword,f=e.isPasswordValid,x=e.confirmPassword,h=e.setConfirmPassword,g=e.isConfirmPasswordValid,w=e.toggleIsUsernameValid,p=e.toggleIsEmailValid,v=e.toggleIsPasswordValid,P=e.toggleIsConfirmPasswordValid,C=e.toggleIsBannerActive,V=function(){s.length<3?w(!1):w(!0)},N=function(){I(r)?p(!0):p(!1)},S=function(){u.length<8?v(!1):v(!0)},E=function(){P(!(x!==u||!x))},I=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},U=function(){n&&c&&f&&g&&_()},_=function(){C(!0),setTimeout((function(){C(!1)}),3e3)},y=function(){setTimeout((function(){t(""),i(""),O(""),h(""),w(!0),p(!0),v(!0),P(!0)}),3e3)};return Object(l.jsxs)("form",{className:"form",noValidate:!0,onSubmit:function(e){e.preventDefault(),V(),N(),S(),E(),s&&r&&u&&x&&U(),y()},children:[Object(l.jsx)("h2",{children:"Sign Up Now!"}),Object(l.jsx)(j,{}),Object(l.jsx)(d,{}),Object(l.jsx)(m,{}),Object(l.jsx)(b,{}),Object(l.jsx)("button",{className:"submit-button",children:"Sign up"})]})}),f=(t(11),function(){var e=Object(a.useContext)(o).isBannerActive?"success-banner active":"success-banner";return Object(l.jsx)("div",{className:e,children:Object(l.jsx)("p",{children:"Form has been submitted successfully!"})})});t(12);var x=function(){return Object(l.jsxs)(u,{children:[Object(l.jsx)(O,{}),Object(l.jsx)(f,{})]})};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.ddb2ed36.chunk.js.map