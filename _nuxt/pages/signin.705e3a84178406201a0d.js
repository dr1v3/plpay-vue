webpackJsonp([1],{"1TB4":function(e,s,t){"use strict";var n=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"SignInForm"},[t("h4",[e._v("Sign In")]),t("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(s){e.valid=s},expression:"valid"}},[t("v-text-field",{attrs:{label:"E-mail",rules:e.emailRules,required:""},model:{value:e.email,callback:function(s){e.email=s},expression:"email"}}),t("v-text-field",{attrs:{label:"Password",rules:e.passwordRules,type:"password",required:""},model:{value:e.password,callback:function(s){e.password=s},expression:"password"}}),t("v-btn",{attrs:{disabled:!e.valid},on:{click:e.submit}},[e._v("\n      Sign in\n    ")])],1),t("v-snackbar",{attrs:{timeout:3e3,top:!0,color:e.messageColor},model:{value:e.message,callback:function(s){e.message=s},expression:"message"}},[e._v("\n    "+e._s(e.messageText)+"\n    "),t("v-btn",{attrs:{flat:"",color:"white"},nativeOn:{click:function(s){e.message=!1}}},[e._v("Close")])],1)],1)},a=[],i={render:n,staticRenderFns:a};s.a=i},"7BHH":function(e,s,t){var n=t("Kqh7");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);t("rjj0")("64bde20a",n,!0)},C2da:function(e,s,t){"use strict";var n=t("HAOQ");s.a={components:{SignInForm:n.a}}},HAOQ:function(e,s,t){"use strict";function n(e){t("7BHH")}var a=t("jxNx"),i=t("1TB4"),r=t("VU/8"),o=n,l=r(a.a,i.a,!1,o,null,null);s.a=l.exports},Kqh7:function(e,s,t){s=e.exports=t("FZ+f")(!1),s.push([e.i,"",""])},X2b1:function(e,s,t){var n=t("sAOe");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);t("rjj0")("29666253",n,!0)},a5ps:function(e,s,t){"use strict";function n(e){t("X2b1")}Object.defineProperty(s,"__esModule",{value:!0});var a=t("C2da"),i=t("xHlf"),r=t("VU/8"),o=n,l=r(a.a,i.a,!1,o,null,null);s.default=l.exports},jxNx:function(e,s,t){"use strict";s.a={data:function(){return{message:!1,messageText:"",valid:!1,password:"",messageColor:"info",passwordRules:[function(e){return!!e||"Password is required"},function(e){return e.length<=254||"Password must be less than 254 characters"}],email:"",emailRules:[function(e){return!!e||""},function(e){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e)||"E-mail must be valid"}]}},methods:{submit:function(){var e=this;this.$axios.post("/login",{email:this.email,password:this.password}).then(function(e){console.log("success",e)}).catch(function(s){e.$data.message=!0,e.messageText=403===s.statusCode?"Wrong login or password":"Login error",e.$data.messageColor="error",console.log(s)})}}}},sAOe:function(e,s,t){s=e.exports=t("FZ+f")(!1),s.push([e.i,".container{min-height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center}",""])},xHlf:function(e,s,t){"use strict";var n=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",{staticClass:"container"},[t("div",[t("signInForm")],1)])},a=[],i={render:n,staticRenderFns:a};s.a=i}});
//# sourceMappingURL=signin.705e3a84178406201a0d.js.map