(()=>{"use strict";var e={881:(e,a,s)=>{var r=s(751),t=s(641);const n={id:"app",class:"app-container"},o={key:0},i=(0,t.Lk)("h1",{class:"title"},"FerroAR",-1),l={class:"nav-buttons"},u=(0,t.Lk)("footer",null,[(0,t.Lk)("p",null,"© 2024 FerroAR")],-1);function c(e,a,s,r,c,d){const p=(0,t.g2)("router-link"),m=(0,t.g2)("router-view");return(0,t.uX)(),(0,t.CE)("div",n,["/ar"!==e.$route.path?((0,t.uX)(),(0,t.CE)("header",o,[(0,t.bF)(p,{to:"/",class:"home-link"},{default:(0,t.k6)((()=>[i])),_:1}),(0,t.Lk)("nav",null,[(0,t.Lk)("div",l,[(0,t.bF)(p,{to:"/login",class:"btn"},{default:(0,t.k6)((()=>[(0,t.eW)("Iniciar Sesión")])),_:1}),(0,t.bF)(p,{to:"/register",class:"btn"},{default:(0,t.k6)((()=>[(0,t.eW)("Registrarse")])),_:1})])])])):(0,t.Q3)("",!0),(0,t.Lk)("main",null,[(0,t.bF)(m)]),u])}const d={name:"App"};var p=s(262);const m=(0,p.A)(d,[["render",c]]),v=m;var g=s(220);const h=s.p+"img/ar2.149153b4.jpg",k=s.p+"img/arphoto.4fe525e2.jpg",b={class:"index-page"},f={class:"background-container"},w={class:"center-content"},L=(0,t.Fv)('<h1 class="title" data-v-6f7373a8>Explora el Parque con FerroAR</h1><p class="description" data-v-6f7373a8> Bienvenido a FerroAR, una experiencia única que combina la rica historia de nuestro parque con la innovadora tecnología de Realidad Aumentada (AR). Descubre lugares emblemáticos y sumérgete en su fascinante pasado a través de animaciones interactivas y narrativas, diseñadas para enriquecer tu visita. </p><img src="'+h+'" alt="AR" class="additional-image2" data-v-6f7373a8><p class="description" data-v-6f7373a8> La Realidad Aumentada (AR) nos permite superponer información visual sobre el mundo real, brindando una nueva dimensión a la experiencia del visitante. Con FerroAR, puedes apuntar tu dispositivo hacia puntos de interés específicos y desbloquear una variedad de contenido multimedia, desde recreaciones históricas hasta emocionantes relatos de antaño. </p><img src="'+k+'" alt="AR" class="additional-image" data-v-6f7373a8><p class="description" data-v-6f7373a8> Características de FerroAR: <ul data-v-6f7373a8><li data-v-6f7373a8>Explora la fusión entre el mundo real y el virtual.</li><li data-v-6f7373a8>Descubre la historia enriquecida de nuestro parque a través de animaciones interactivas.</li><li data-v-6f7373a8>Vive una experiencia de visita guiada única e inmersiva.</li><li data-v-6f7373a8>Disfruta de narrativas envolventes que cobran vida ante tus ojos.</li></ul></p>',6);function y(e,a,s,r,n,o){return(0,t.uX)(),(0,t.CE)("div",b,[(0,t.Lk)("div",f,[(0,t.Lk)("div",w,[L,(0,t.Lk)("button",{class:"ar-button",onClick:a[0]||(a[0]=(...e)=>o.navigateToARPage&&o.navigateToARPage(...e))},"¡Explora con FerroAR!")])])])}const C={methods:{navigateToARPage(){this.$router.push("/ar")}}},M=(0,p.A)(C,[["render",y],["__scopeId","data-v-6f7373a8"]]),R=M;var A=s(33);const E=e=>((0,t.Qi)("data-v-e8c32d5c"),e=e(),(0,t.jt)(),e),_={class:"background-container"},x={class:"card"},P=E((()=>(0,t.Lk)("h1",null,"Iniciar sesión",-1))),O=E((()=>(0,t.Lk)("label",{for:"username"},"Nombre de usuario:",-1))),F=E((()=>(0,t.Lk)("br",null,null,-1))),j=E((()=>(0,t.Lk)("br",null,null,-1))),q=E((()=>(0,t.Lk)("label",{for:"password"},"Contraseña:",-1))),S=E((()=>(0,t.Lk)("br",null,null,-1))),U=E((()=>(0,t.Lk)("br",null,null,-1))),X=E((()=>(0,t.Lk)("input",{type:"submit",value:"Iniciar sesión"},null,-1))),I={key:0,class:"result-message success-message"},T={key:1,class:"result-message error-message"};function W(e,a,s,n,o,i){const l=(0,t.g2)("router-link");return(0,t.uX)(),(0,t.CE)("div",_,[(0,t.Lk)("div",x,[P,(0,t.Lk)("form",{onSubmit:a[2]||(a[2]=(0,r.D$)(((...e)=>i.loginUser&&i.loginUser(...e)),["prevent"]))},[O,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"username","onUpdate:modelValue":a[0]||(a[0]=e=>o.username=e),required:""},null,512),[[r.Jo,o.username]]),F,j,q,(0,t.bo)((0,t.Lk)("input",{type:"password",id:"password","onUpdate:modelValue":a[1]||(a[1]=e=>o.password=e),required:""},null,512),[[r.Jo,o.password]]),S,U,X],32),(0,t.Lk)("p",null,[(0,t.eW)("¿No tienes una cuenta? "),(0,t.bF)(l,{to:"/register"},{default:(0,t.k6)((()=>[(0,t.eW)("Registrarse")])),_:1})]),(0,t.Lk)("p",null,[(0,t.eW)("¿Olvidaste tu contraseña? "),(0,t.bF)(l,{to:"/reset-password"},{default:(0,t.k6)((()=>[(0,t.eW)("Recuperar contraseña")])),_:1})]),o.successMessage?((0,t.uX)(),(0,t.CE)("div",I,(0,A.v_)(o.successMessage),1)):(0,t.Q3)("",!0),o.errorMessage?((0,t.uX)(),(0,t.CE)("div",T,(0,A.v_)(o.errorMessage),1)):(0,t.Q3)("",!0)])])}const J={data(){return{username:"",password:"",errorMessage:"",successMessage:""}},methods:{loginUser(){const e={username:this.username,password:this.password};fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.ok?e.text():e.text().then((e=>{throw new Error(e)})))).then((e=>{this.successMessage=e,this.errorMessage="",this.username="",this.password=""})).catch((e=>{this.errorMessage=e.message,this.successMessage=""}))}}},Q=(0,p.A)(J,[["render",W],["__scopeId","data-v-e8c32d5c"]]),V=Q,$=e=>((0,t.Qi)("data-v-6ded7e96"),e=e(),(0,t.jt)(),e),D={class:"background-container"},N={class:"card"},B=$((()=>(0,t.Lk)("h1",null,"Registro",-1))),z=$((()=>(0,t.Lk)("label",{for:"username"},"Nombre de usuario:",-1))),H=$((()=>(0,t.Lk)("br",null,null,-1))),Y=$((()=>(0,t.Lk)("br",null,null,-1))),G=$((()=>(0,t.Lk)("label",{for:"email"},"Correo electrónico:",-1))),K=$((()=>(0,t.Lk)("br",null,null,-1))),Z=$((()=>(0,t.Lk)("br",null,null,-1))),ee=$((()=>(0,t.Lk)("label",{for:"password"},"Contraseña:",-1))),ae=$((()=>(0,t.Lk)("br",null,null,-1))),se=$((()=>(0,t.Lk)("br",null,null,-1))),re=$((()=>(0,t.Lk)("input",{type:"submit",value:"Registrarse"},null,-1))),te={key:0,class:"success-message"},ne={key:1,class:"error-message"};function oe(e,a,s,n,o,i){const l=(0,t.g2)("router-link");return(0,t.uX)(),(0,t.CE)("div",D,[(0,t.Lk)("div",N,[B,(0,t.Lk)("form",{onSubmit:a[3]||(a[3]=(0,r.D$)(((...e)=>i.registerUser&&i.registerUser(...e)),["prevent"]))},[z,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"username","onUpdate:modelValue":a[0]||(a[0]=e=>o.username=e),required:""},null,512),[[r.Jo,o.username]]),H,Y,G,(0,t.bo)((0,t.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":a[1]||(a[1]=e=>o.email=e),required:""},null,512),[[r.Jo,o.email]]),K,Z,ee,(0,t.bo)((0,t.Lk)("input",{type:"password",id:"password","onUpdate:modelValue":a[2]||(a[2]=e=>o.password=e),required:""},null,512),[[r.Jo,o.password]]),ae,se,re],32),(0,t.Lk)("p",null,[(0,t.eW)("¿Ya tienes una cuenta? "),(0,t.bF)(l,{to:"/login"},{default:(0,t.k6)((()=>[(0,t.eW)("Iniciar sesión")])),_:1})]),o.successMessage?((0,t.uX)(),(0,t.CE)("div",te,(0,A.v_)(o.successMessage),1)):(0,t.Q3)("",!0),o.errorMessage?((0,t.uX)(),(0,t.CE)("div",ne,(0,A.v_)(o.errorMessage),1)):(0,t.Q3)("",!0)])])}const ie={data(){return{username:"",email:"",password:"",errorMessage:"",successMessage:""}},methods:{registerUser(){const e={username:this.username,email:this.email,password:this.password};fetch("/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.ok?e.text():e.text().then((e=>{throw new Error(e)})))).then((e=>{this.successMessage=e,this.errorMessage="",this.username="",this.email="",this.password=""})).catch((e=>{this.errorMessage=e.message,this.successMessage=""}))}}},le=(0,p.A)(ie,[["render",oe],["__scopeId","data-v-6ded7e96"]]),ue=le,ce=e=>((0,t.Qi)("data-v-4d814746"),e=e(),(0,t.jt)(),e),de={class:"background-container"},pe={class:"card"},me=ce((()=>(0,t.Lk)("h1",null,"Restablecer contraseña",-1))),ve=ce((()=>(0,t.Lk)("p",null,"Ingresa tu correo electrónico y tu nueva contraseña:",-1))),ge=ce((()=>(0,t.Lk)("label",{for:"email"},"Correo electrónico:",-1))),he=ce((()=>(0,t.Lk)("br",null,null,-1))),ke=ce((()=>(0,t.Lk)("br",null,null,-1))),be=ce((()=>(0,t.Lk)("label",{for:"newPassword"},"Nueva contraseña:",-1))),fe=ce((()=>(0,t.Lk)("br",null,null,-1))),we=ce((()=>(0,t.Lk)("br",null,null,-1))),Le=ce((()=>(0,t.Lk)("input",{type:"submit",value:"Restablecer contraseña"},null,-1))),ye={key:0,class:"success-message"},Ce={key:1,class:"error-message"};function Me(e,a,s,n,o,i){const l=(0,t.g2)("router-link");return(0,t.uX)(),(0,t.CE)("div",de,[(0,t.Lk)("div",pe,[me,ve,(0,t.Lk)("form",{onSubmit:a[2]||(a[2]=(0,r.D$)(((...e)=>i.resetPassword&&i.resetPassword(...e)),["prevent"]))},[ge,(0,t.bo)((0,t.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":a[0]||(a[0]=e=>o.email=e),required:""},null,512),[[r.Jo,o.email]]),he,ke,be,(0,t.bo)((0,t.Lk)("input",{type:"password",id:"newPassword","onUpdate:modelValue":a[1]||(a[1]=e=>o.newPassword=e),required:""},null,512),[[r.Jo,o.newPassword]]),fe,we,Le],32),(0,t.Lk)("p",null,[(0,t.eW)("¿Recuerdas tu contraseña? "),(0,t.bF)(l,{to:"/login"},{default:(0,t.k6)((()=>[(0,t.eW)("Iniciar sesión")])),_:1})]),o.successMessage?((0,t.uX)(),(0,t.CE)("div",ye,(0,A.v_)(o.successMessage),1)):(0,t.Q3)("",!0),o.errorMessage?((0,t.uX)(),(0,t.CE)("div",Ce,(0,A.v_)(o.errorMessage),1)):(0,t.Q3)("",!0)])])}const Re={data(){return{email:"",newPassword:"",errorMessage:"",successMessage:""}},methods:{resetPassword(){const e={email:this.email,newPassword:this.newPassword};fetch("/reset-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.ok?e.text():e.text().then((e=>{throw new Error(e)})))).then((e=>{this.successMessage=e,this.errorMessage="",this.email="",this.newPassword=""})).catch((e=>{this.errorMessage=e.message,this.successMessage=""}))}}},Ae=(0,p.A)(Re,[["render",Me],["__scopeId","data-v-4d814746"]]),Ee=Ae;s.p;const _e={class:"app-container"},xe={class:"menu-container"},Pe={class:"menu-bar",ref:"menuBar"},Oe={class:"menu-buttons"},Fe={ref:"cameraView",autoplay:"",playsinline:"",style:{width:"100%",height:"100%",margin:"0",padding:"0"}};function je(e,a,s,r,n,o){const i=(0,t.g2)("router-link");return(0,t.uX)(),(0,t.CE)("div",_e,[(0,t.Lk)("div",xe,[(0,t.Lk)("div",Pe,[(0,t.Lk)("div",Oe,[(0,t.bF)(i,{to:"/",class:"menu-button regresar"},{default:(0,t.k6)((()=>[(0,t.eW)("Regresar")])),_:1}),(0,t.Lk)("button",{class:"menu-button mapa",onClick:a[0]||(a[0]=e=>o.handleButtonClick(2))},"Mapa")])],512)]),(0,t.Lk)("div",{class:"camera-container",ref:"cameraContainer",onMouseenter:a[1]||(a[1]=(...a)=>e.lockScroll&&e.lockScroll(...a)),onMouseleave:a[2]||(a[2]=(...a)=>e.unlockScroll&&e.unlockScroll(...a))},[(0,t.Lk)("video",Fe,null,512)],544)])}const qe={mounted(){this.activateCamera(),this.resizeCameraContainer(),window.addEventListener("resize",this.resizeCameraContainer)},methods:{async activateCamera(){try{const e=this.$refs.cameraView,a=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:4096},height:{ideal:2160}}});e.srcObject=a}catch(e){console.error("Error accediendo a la cámara: ",e)}},handleButtonClick(e){console.log("Clic en el botón:",e)},resizeCameraContainer(){const e=window.innerHeight,a=this.$refs.menuBar.offsetHeight;this.$refs.cameraContainer.style.height=e-a+"px"}}},Se=(0,p.A)(qe,[["render",je],["__scopeId","data-v-c6614d1a"]]),Ue=Se,Xe=[{path:"/",component:R},{path:"/login",component:V},{path:"/register",component:ue},{path:"/reset-password",component:Ee},{path:"/ar",component:Ue}],Ie=(0,g.aE)({history:(0,g.LA)(),routes:Xe}),Te=Ie;(0,r.Ef)(v).use(Te).mount("#app")}},a={};function s(r){var t=a[r];if(void 0!==t)return t.exports;var n=a[r]={exports:{}};return e[r](n,n.exports,s),n.exports}s.m=e,(()=>{var e=[];s.O=(a,r,t,n)=>{if(!r){var o=1/0;for(c=0;c<e.length;c++){for(var[r,t,n]=e[c],i=!0,l=0;l<r.length;l++)(!1&n||o>=n)&&Object.keys(s.O).every((e=>s.O[e](r[l])))?r.splice(l--,1):(i=!1,n<o&&(o=n));if(i){e.splice(c--,1);var u=t();void 0!==u&&(a=u)}}return a}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[r,t,n]}})(),(()=>{s.d=(e,a)=>{for(var r in a)s.o(a,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})}})(),(()=>{s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{s.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a)})(),(()=>{s.p="/"})(),(()=>{var e={792:0};s.O.j=a=>0===e[a];var a=(a,r)=>{var t,n,[o,i,l]=r,u=0;if(o.some((a=>0!==e[a]))){for(t in i)s.o(i,t)&&(s.m[t]=i[t]);if(l)var c=l(s)}for(a&&a(r);u<o.length;u++)n=o[u],s.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return s.O(c)},r=self["webpackChunkproyecto"]=self["webpackChunkproyecto"]||[];r.forEach(a.bind(null,0)),r.push=a.bind(null,r.push.bind(r))})();var r=s.O(void 0,[504],(()=>s(881)));r=s.O(r)})();
//# sourceMappingURL=main.f225b933.js.map