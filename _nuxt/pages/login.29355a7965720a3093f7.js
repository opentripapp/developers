webpackJsonp([0],{CgCB:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.loading,expression:"loading",modifiers:{fullscreen:!0,lock:!0}}],staticStyle:{"min-height":"100vh",display:"flex","justify-content":"center","align-items":"center","text-align":"center"}},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("h3",{staticStyle:{"line-height":"36px"}},[e._v(e._s(e.title))])]),n("div",{staticStyle:{width:"350px","margin-bottom":"14px"}},[n("el-input",{attrs:{placeholder:"Email Address"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e.doLogin(t)}},model:{value:e.input.email,callback:function(t){e.input.email=t},expression:"input.email"}})],1),n("div",{staticClass:"bottom clearfix"},[n("el-button",{staticStyle:{width:"100%"},attrs:{type:"warning"},on:{click:e.doLogin}},[e._v("Login")]),n("el-button",{attrs:{type:"text"},on:{click:e.loginPhoneNumber}},[e._v(" "+e._s(e.text))])],1)])],1)},s=[],a={render:i,staticRenderFns:s};t.a=a},WWPA:function(e,t,n){"use strict";var i=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;t.validate=function(e){if(!e)return!1;if(e.length>254)return!1;if(!i.test(e))return!1;var t=e.split("@");return!(t[0].length>64)&&!t[1].split(".").some(function(e){return e.length>63})}},bIR0:function(e,t,n){"use strict";function i(e){n("tpkr")}Object.defineProperty(t,"__esModule",{value:!0});var s=n("fpiz"),a=n("CgCB"),o=n("VU/8"),r=i,l=o(s.a,a.a,!1,r,null,null);t.default=l.exports},bXJn:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".el-select .el-input{width:80px}",""])},fpiz:function(e,t,n){"use strict";var i=n("Xxa5"),s=n.n(i),a=n("exGp"),o=n.n(a),r=n("WWPA"),l=n.n(r);t.a={middleware:"auth",data:function(){return{loading:!1,status:!1,state:"randomstreingaeaeadfd",title:"OpenTrip Developers",text:"Use Phone Number",input:{country:"",select:"+62",phone:"",email:""}}},methods:{myswitch:function(){this.status=!this.status,this.text=this.status?"Use Email Address":"User Phone Number"},phoneValidate:function(e){return isNaN(e)},handleLogin:function(){function e(e){return t.apply(this,arguments)}var t=o()(s.a.mark(function e(t){var n,i;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("PARTIALLY_AUTHENTICATED"!==t.status){e.next=18;break}return this.loading=!0,e.next=4,this.$store.dispatch("checkUser",{code:t.code});case 4:return n=e.sent,e.prev=5,i={token:n.id,email:n.email?n.email.address:void 0,phone_number:n.phone?n.phone.number:void 0},e.next=9,this.$store.dispatch("login",i);case 9:this.loading=!1,window.location.reload(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(5),this.$message({message:e.t0.message,showClose:!0,type:"warning"});case 16:e.next=19;break;case 18:"NOT_AUTHENTICATED"===t.status?this.$message({message:"Login Failed!",showClose:!0,type:"warning"}):"BAD_PARAMS"===t.status&&this.$message({message:"Login Failed!",showClose:!0,type:"warning"});case 19:case"end":return e.stop()}},e,this,[[5,13]])}));return e}(),loginEmail:function(){AccountKit.login("EMAIL",{},this.handleLogin)},loginPhoneNumber:function(){AccountKit.login("PHONE",{},this.handleLogin)},doLogin:function(){try{this.status?!this.phoneValidate(this.input.phone)&&this.input.phone?AccountKit.login("PHONE",{countryCode:this.input.select,phoneNumber:this.input.phone},this.handleLogin):this.$message({message:"Input Your Phone Number",showClose:!0,type:"warning"}):l.a.validate(this.input.email)&&this.input.email?AccountKit.login("EMAIL",{emailAddress:this.input.email},this.handleLogin):this.$message({message:"Input Your Email Address",showClose:!0,type:"warning"})}catch(e){return this.$message({message:e.message,showClose:!0,type:"error"})}}},mounted:function(){try{AccountKit.init({appId:0x719fc1add1d9e,state:this.state,version:"v1.1"})}catch(e){return this.$message({message:e.message,showClose:!0,type:"error"})}},head:function(){return{title:"Masuk | Developer OpenTrip",meta:[{hid:"description",name:"description",content:"OpenTrip Developer"}]}}}},tpkr:function(e,t,n){var i=n("bXJn");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("rjj0")("16d4f0ce",i,!0)}});
//# sourceMappingURL=login.29355a7965720a3093f7.js.map