(()=>{"use strict";var e={797:(e,s,r)=>{var a=r(751),t=r(641);const n=e=>((0,t.Qi)("data-v-1c1e5633"),e=e(),(0,t.jt)(),e),o={id:"app"},l={key:0,class:"header"},i=n((()=>(0,t.Lk)("h1",null,"FerroAR",-1))),u={class:"nav-buttons"},c=n((()=>(0,t.Lk)("footer",{class:"footer"},[(0,t.Lk)("p",null,"© 2024 FerroAR")],-1)));function d(e,s,r,a,n,d){const p=(0,t.g2)("router-link"),m=(0,t.g2)("router-view");return(0,t.uX)(),(0,t.CE)("div",o,["/ar"!==e.$route.path?((0,t.uX)(),(0,t.CE)("header",l,[(0,t.bF)(p,{to:"/",class:"home-link"},{default:(0,t.k6)((()=>[i])),_:1}),(0,t.Lk)("nav",null,[(0,t.Lk)("div",u,[(0,t.bF)(p,{to:"/login",class:"btn-small"},{default:(0,t.k6)((()=>[(0,t.eW)("Iniciar Sesión")])),_:1}),(0,t.bF)(p,{to:"/register",class:"btn-small"},{default:(0,t.k6)((()=>[(0,t.eW)("Registrarse")])),_:1})])])])):(0,t.Q3)("",!0),(0,t.Lk)("main",null,[(0,t.bF)(m)]),c])}const p={name:"App"};var m=r(262);const k=(0,m.A)(p,[["render",d],["__scopeId","data-v-1c1e5633"]]),b=k;var h=r(220);const g=e=>((0,t.Qi)("data-v-644eb0a7"),e=e(),(0,t.jt)(),e),v={class:"index-page"},f={class:"background-container"},L={class:"center-content"},w=g((()=>(0,t.Lk)("h1",{class:"title"},"FerroAR",-1))),y=g((()=>(0,t.Lk)("p",{class:"description"}," La Realidad Aumentada es un tipo de tecnología que nos permite añadir capas de información visual sobre el mundo real que nos rodea. Dicha información se puede ver a través de diferentes dispositivos como pueden ser nuestros propios teléfonos móviles. Un turista puede alzar su cámara y encontrar puntos de interés apuntando hacia los lugares que quiere visitar; un operario puede realizar labores de mantenimiento en una sala de máquinas, obteniendo información de dónde se encuentra cada componente, simplemente apuntando con su tablet y sin necesidad de consultar un complicado mapa, un ecommerce puede mostrar sus artículos en 3D incrustando una experiencia de AR en su web para mejorar la experiencia de compra y acortar el periodo de decisión ofreciendo al usuario un proceso más real. ",-1))),M=g((()=>(0,t.Lk)("p",{class:"description"},[(0,t.eW)(" Características de la Realidad Aumentada: "),(0,t.Lk)("ul",null,[(0,t.Lk)("li",null,"Permite la combinación del mundo real y el mundo virtual."),(0,t.Lk)("li",null,"Depende del contexto."),(0,t.Lk)("li",null,"Es interactiva en tiempo real."),(0,t.Lk)("li",null,"Utiliza las tres dimensiones.")])],-1)));function _(e,s,r,a,n,o){const l=(0,t.g2)("router-link");return(0,t.uX)(),(0,t.CE)("div",v,[(0,t.Lk)("div",f,[(0,t.Lk)("div",L,[w,y,M,(0,t.bF)(l,{to:"/ar",class:"ar-button",onClick:s[0]||(s[0]=e=>n.cameraActive=!1)},{default:(0,t.k6)((()=>[(0,t.eW)("Ir a AR")])),_:1})])])])}const C={data(){return{cameraActive:!1}}},E=(0,m.A)(C,[["render",_],["__scopeId","data-v-644eb0a7"]]),x=E;var F=r(33);const O=e=>((0,t.Qi)("data-v-597fb3b1"),e=e(),(0,t.jt)(),e),j={class:"background-container"},A={class:"card"},P=O((()=>(0,t.Lk)("h1",null,"Iniciar sesión",-1))),U=O((()=>(0,t.Lk)("label",{for:"username"},"Nombre de usuario:",-1))),R=O((()=>(0,t.Lk)("br",null,null,-1))),I=O((()=>(0,t.Lk)("br",null,null,-1))),Q=O((()=>(0,t.Lk)("label",{for:"password"},"Contraseña:",-1))),W=O((()=>(0,t.Lk)("br",null,null,-1))),X=O((()=>(0,t.Lk)("br",null,null,-1))),q=O((()=>(0,t.Lk)("input",{type:"submit",value:"Iniciar sesión"},null,-1))),J={key:0,class:"result-message success-message"},S={key:1,class:"result-message error-message"};function T(e,s,r,n,o,l){const i=(0,t.g2)("router-link");return(0,t.uX)(),(0,t.CE)("div",j,[(0,t.Lk)("div",A,[P,(0,t.Lk)("form",{onSubmit:s[2]||(s[2]=(0,a.D$)(((...e)=>l.loginUser&&l.loginUser(...e)),["prevent"]))},[U,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"username","onUpdate:modelValue":s[0]||(s[0]=e=>o.username=e),required:""},null,512),[[a.Jo,o.username]]),R,I,Q,(0,t.bo)((0,t.Lk)("input",{type:"password",id:"password","onUpdate:modelValue":s[1]||(s[1]=e=>o.password=e),required:""},null,512),[[a.Jo,o.password]]),W,X,q],32),(0,t.Lk)("p",null,[(0,t.eW)("¿No tienes una cuenta? "),(0,t.bF)(i,{to:"/register"},{default:(0,t.k6)((()=>[(0,t.eW)("Registrarse")])),_:1})]),(0,t.Lk)("p",null,[(0,t.eW)("¿Olvidaste tu contraseña? "),(0,t.bF)(i,{to:"/reset-password"},{default:(0,t.k6)((()=>[(0,t.eW)("Recuperar contraseña")])),_:1})]),o.successMessage?((0,t.uX)(),(0,t.CE)("div",J,(0,F.v_)(o.successMessage),1)):(0,t.Q3)("",!0),o.errorMessage?((0,t.uX)(),(0,t.CE)("div",S,(0,F.v_)(o.errorMessage),1)):(0,t.Q3)("",!0)])])}const N={data(){return{username:"",password:"",errorMessage:"",successMessage:""}},methods:{loginUser(){const e={username:this.username,password:this.password};fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.ok?e.text():e.text().then((e=>{throw new Error(e)})))).then((e=>{this.successMessage=e,this.errorMessage="",this.username="",this.password=""})).catch((e=>{this.errorMessage=e.message,this.successMessage=""}))}}},V=(0,m.A)(N,[["render",T],["__scopeId","data-v-597fb3b1"]]),D=V,$=e=>((0,t.Qi)("data-v-afdb2a96"),e=e(),(0,t.jt)(),e),z={class:"background-container"},H={class:"card"},Y=$((()=>(0,t.Lk)("h1",null,"Registro",-1))),B=$((()=>(0,t.Lk)("label",{for:"username"},"Nombre de usuario:",-1))),G=$((()=>(0,t.Lk)("br",null,null,-1))),K=$((()=>(0,t.Lk)("br",null,null,-1))),Z=$((()=>(0,t.Lk)("label",{for:"email"},"Correo electrónico:",-1))),ee=$((()=>(0,t.Lk)("br",null,null,-1))),se=$((()=>(0,t.Lk)("br",null,null,-1))),re=$((()=>(0,t.Lk)("label",{for:"password"},"Contraseña:",-1))),ae=$((()=>(0,t.Lk)("br",null,null,-1))),te=$((()=>(0,t.Lk)("br",null,null,-1))),ne=$((()=>(0,t.Lk)("input",{type:"submit",value:"Registrarse"},null,-1))),oe={key:0,class:"success-message"},le={key:1,class:"error-message"};function ie(e,s,r,n,o,l){const i=(0,t.g2)("router-link");return(0,t.uX)(),(0,t.CE)("div",z,[(0,t.Lk)("div",H,[Y,(0,t.Lk)("form",{onSubmit:s[3]||(s[3]=(0,a.D$)(((...e)=>l.registerUser&&l.registerUser(...e)),["prevent"]))},[B,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"username","onUpdate:modelValue":s[0]||(s[0]=e=>o.username=e),required:""},null,512),[[a.Jo,o.username]]),G,K,Z,(0,t.bo)((0,t.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":s[1]||(s[1]=e=>o.email=e),required:""},null,512),[[a.Jo,o.email]]),ee,se,re,(0,t.bo)((0,t.Lk)("input",{type:"password",id:"password","onUpdate:modelValue":s[2]||(s[2]=e=>o.password=e),required:""},null,512),[[a.Jo,o.password]]),ae,te,ne],32),(0,t.Lk)("p",null,[(0,t.eW)("¿Ya tienes una cuenta? "),(0,t.bF)(i,{to:"/login"},{default:(0,t.k6)((()=>[(0,t.eW)("Iniciar sesión")])),_:1})]),o.successMessage?((0,t.uX)(),(0,t.CE)("div",oe,(0,F.v_)(o.successMessage),1)):(0,t.Q3)("",!0),o.errorMessage?((0,t.uX)(),(0,t.CE)("div",le,(0,F.v_)(o.errorMessage),1)):(0,t.Q3)("",!0)])])}const ue={data(){return{username:"",email:"",password:"",errorMessage:"",successMessage:""}},methods:{registerUser(){const e={username:this.username,email:this.email,password:this.password};fetch("/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.ok?e.text():e.text().then((e=>{throw new Error(e)})))).then((e=>{this.successMessage=e,this.errorMessage="",this.username="",this.email="",this.password=""})).catch((e=>{this.errorMessage=e.message,this.successMessage=""}))}}},ce=(0,m.A)(ue,[["render",ie],["__scopeId","data-v-afdb2a96"]]),de=ce,pe=e=>((0,t.Qi)("data-v-4d814746"),e=e(),(0,t.jt)(),e),me={class:"background-container"},ke={class:"card"},be=pe((()=>(0,t.Lk)("h1",null,"Restablecer contraseña",-1))),he=pe((()=>(0,t.Lk)("p",null,"Ingresa tu correo electrónico y tu nueva contraseña:",-1))),ge=pe((()=>(0,t.Lk)("label",{for:"email"},"Correo electrónico:",-1))),ve=pe((()=>(0,t.Lk)("br",null,null,-1))),fe=pe((()=>(0,t.Lk)("br",null,null,-1))),Le=pe((()=>(0,t.Lk)("label",{for:"newPassword"},"Nueva contraseña:",-1))),we=pe((()=>(0,t.Lk)("br",null,null,-1))),ye=pe((()=>(0,t.Lk)("br",null,null,-1))),Me=pe((()=>(0,t.Lk)("input",{type:"submit",value:"Restablecer contraseña"},null,-1))),_e={key:0,class:"success-message"},Ce={key:1,class:"error-message"};function Ee(e,s,r,n,o,l){const i=(0,t.g2)("router-link");return(0,t.uX)(),(0,t.CE)("div",me,[(0,t.Lk)("div",ke,[be,he,(0,t.Lk)("form",{onSubmit:s[2]||(s[2]=(0,a.D$)(((...e)=>l.resetPassword&&l.resetPassword(...e)),["prevent"]))},[ge,(0,t.bo)((0,t.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":s[0]||(s[0]=e=>o.email=e),required:""},null,512),[[a.Jo,o.email]]),ve,fe,Le,(0,t.bo)((0,t.Lk)("input",{type:"password",id:"newPassword","onUpdate:modelValue":s[1]||(s[1]=e=>o.newPassword=e),required:""},null,512),[[a.Jo,o.newPassword]]),we,ye,Me],32),(0,t.Lk)("p",null,[(0,t.eW)("¿Recuerdas tu contraseña? "),(0,t.bF)(i,{to:"/login"},{default:(0,t.k6)((()=>[(0,t.eW)("Iniciar sesión")])),_:1})]),o.successMessage?((0,t.uX)(),(0,t.CE)("div",_e,(0,F.v_)(o.successMessage),1)):(0,t.Q3)("",!0),o.errorMessage?((0,t.uX)(),(0,t.CE)("div",Ce,(0,F.v_)(o.errorMessage),1)):(0,t.Q3)("",!0)])])}const xe={data(){return{email:"",newPassword:"",errorMessage:"",successMessage:""}},methods:{resetPassword(){const e={email:this.email,newPassword:this.newPassword};fetch("/reset-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.ok?e.text():e.text().then((e=>{throw new Error(e)})))).then((e=>{this.successMessage=e,this.errorMessage="",this.email="",this.newPassword=""})).catch((e=>{this.errorMessage=e.message,this.successMessage=""}))}}},Fe=(0,m.A)(xe,[["render",Ee],["__scopeId","data-v-4d814746"]]),Oe=Fe,je=e=>((0,t.Qi)("data-v-768343f6"),e=e(),(0,t.jt)(),e),Ae={lang:"es"},Pe=je((()=>(0,t.Lk)("head",null,[(0,t.Lk)("meta",{charset:"UTF-8"}),(0,t.Lk)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"})],-1)));function Ue(e,s){const r=(0,t.g2)("a-box"),a=(0,t.g2)("a-marker"),n=(0,t.g2)("a-entity"),o=(0,t.g2)("a-scene");return(0,t.uX)(),(0,t.CE)("html",Ae,[Pe,(0,t.Lk)("body",null,[(0,t.bF)(o,{embedded:"",arjs:"sourceType: webcam; sourceWidth: 640; sourceHeight: 480;"},{default:(0,t.k6)((()=>[(0,t.bF)(a,{preset:"hiro"},{default:(0,t.k6)((()=>[(0,t.bF)(r)])),_:1}),(0,t.bF)(n,{camera:""})])),_:1})])])}const Re={},Ie=(0,m.A)(Re,[["render",Ue],["__scopeId","data-v-768343f6"]]),Qe=Ie,We=[{path:"/",component:x},{path:"/login",component:D},{path:"/register",component:de},{path:"/reset-password",component:Oe},{path:"/ar",component:Qe}],Xe=(0,h.aE)({history:(0,h.LA)(),routes:We}),qe=Xe;(0,a.Ef)(b).use(qe).mount("#app")}},s={};function r(a){var t=s[a];if(void 0!==t)return t.exports;var n=s[a]={exports:{}};return e[a](n,n.exports,r),n.exports}r.m=e,(()=>{var e=[];r.O=(s,a,t,n)=>{if(!a){var o=1/0;for(c=0;c<e.length;c++){for(var[a,t,n]=e[c],l=!0,i=0;i<a.length;i++)(!1&n||o>=n)&&Object.keys(r.O).every((e=>r.O[e](a[i])))?a.splice(i--,1):(l=!1,n<o&&(o=n));if(l){e.splice(c--,1);var u=t();void 0!==u&&(s=u)}}return s}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[a,t,n]}})(),(()=>{r.d=(e,s)=>{for(var a in s)r.o(s,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:s[a]})}})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,s)=>Object.prototype.hasOwnProperty.call(e,s)})(),(()=>{var e={792:0};r.O.j=s=>0===e[s];var s=(s,a)=>{var t,n,[o,l,i]=a,u=0;if(o.some((s=>0!==e[s]))){for(t in l)r.o(l,t)&&(r.m[t]=l[t]);if(i)var c=i(r)}for(s&&s(a);u<o.length;u++)n=o[u],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(c)},a=self["webpackChunkproyecto"]=self["webpackChunkproyecto"]||[];a.forEach(s.bind(null,0)),a.push=s.bind(null,a.push.bind(a))})();var a=r.O(void 0,[504],(()=>r(797)));a=r.O(a)})();
//# sourceMappingURL=main.208e8a3b.js.map