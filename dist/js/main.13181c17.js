(()=>{"use strict";var e={973:(e,s,r)=>{var a=r(751),n=r(641);const t={id:"app"},o={key:0},i=(0,n.Lk)("h1",null,"FerroAR",-1),l={class:"nav-buttons"},u=(0,n.Lk)("footer",null,[(0,n.Lk)("p",null,"© 2024 FerroAR")],-1);function d(e,s,r,a,d,c){const p=(0,n.g2)("router-link"),m=(0,n.g2)("router-view");return(0,n.uX)(),(0,n.CE)("div",t,["/ar"!==e.$route.path?((0,n.uX)(),(0,n.CE)("header",o,[(0,n.bF)(p,{to:"/",class:"home-link"},{default:(0,n.k6)((()=>[i])),_:1}),(0,n.Lk)("nav",null,[(0,n.Lk)("div",l,[(0,n.bF)(p,{to:"/login",class:"btn"},{default:(0,n.k6)((()=>[(0,n.eW)("Iniciar Sesión")])),_:1}),(0,n.bF)(p,{to:"/register",class:"btn"},{default:(0,n.k6)((()=>[(0,n.eW)("Registrarse")])),_:1})])])])):(0,n.Q3)("",!0),(0,n.Lk)("main",null,[(0,n.bF)(m)]),u])}const c={name:"App"};var p=r(262);const m=(0,p.A)(c,[["render",d]]),k=m;var h=r(220);const g=e=>((0,n.Qi)("data-v-41c1d846"),e=e(),(0,n.jt)(),e),b={class:"index-page"},v={class:"background-container"},L={class:"center-content"},f=g((()=>(0,n.Lk)("h1",{class:"title"},"FerroAR",-1))),w=g((()=>(0,n.Lk)("p",{class:"description"}," La Realidad Aumentada es un tipo de tecnología que nos permite añadir capas de información visual sobre el mundo real que nos rodea. Dicha información se puede ver a través de diferentes dispositivos como pueden ser nuestros propios teléfonos móviles. Un turista puede alzar su cámara y encontrar puntos de interés apuntando hacia los lugares que quiere visitar; un operario puede realizar labores de mantenimiento en una sala de máquinas, obteniendo información de dónde se encuentra cada componente, simplemente apuntando con su tablet y sin necesidad de consultar un complicado mapa, un ecommerce puede mostrar sus artículos en 3D incrustando una experiencia de AR en su web para mejorar la experiencia de compra y acortar el periodo de decisión ofreciendo al usuario un proceso más real. ",-1))),y=g((()=>(0,n.Lk)("p",{class:"description"},[(0,n.eW)(" Características de la Realidad Aumentada: "),(0,n.Lk)("ul",null,[(0,n.Lk)("li",null,"Permite la combinación del mundo real y el mundo virtual."),(0,n.Lk)("li",null,"Depende del contexto."),(0,n.Lk)("li",null,"Es interactiva en tiempo real."),(0,n.Lk)("li",null,"Utiliza las tres dimensiones.")])],-1)));function M(e,s,r,a,t,o){return(0,n.uX)(),(0,n.CE)("div",b,[(0,n.Lk)("div",v,[(0,n.Lk)("div",L,[f,w,y,(0,n.Lk)("button",{class:"ar-button",onClick:s[0]||(s[0]=(...e)=>o.navigateToARPage&&o.navigateToARPage(...e))},"Ir a AR")])])])}const _={methods:{navigateToARPage(){this.$router.push("/ar")}}},C=(0,p.A)(_,[["render",M],["__scopeId","data-v-41c1d846"]]),x=C;var E=r(33);const P=e=>((0,n.Qi)("data-v-597fb3b1"),e=e(),(0,n.jt)(),e),A={class:"background-container"},O={class:"card"},R=P((()=>(0,n.Lk)("h1",null,"Iniciar sesión",-1))),F=P((()=>(0,n.Lk)("label",{for:"username"},"Nombre de usuario:",-1))),j=P((()=>(0,n.Lk)("br",null,null,-1))),U=P((()=>(0,n.Lk)("br",null,null,-1))),T=P((()=>(0,n.Lk)("label",{for:"password"},"Contraseña:",-1))),X=P((()=>(0,n.Lk)("br",null,null,-1))),q=P((()=>(0,n.Lk)("br",null,null,-1))),I=P((()=>(0,n.Lk)("input",{type:"submit",value:"Iniciar sesión"},null,-1))),Q={key:0,class:"result-message success-message"},W={key:1,class:"result-message error-message"};function J(e,s,r,t,o,i){const l=(0,n.g2)("router-link");return(0,n.uX)(),(0,n.CE)("div",A,[(0,n.Lk)("div",O,[R,(0,n.Lk)("form",{onSubmit:s[2]||(s[2]=(0,a.D$)(((...e)=>i.loginUser&&i.loginUser(...e)),["prevent"]))},[F,(0,n.bo)((0,n.Lk)("input",{type:"text",id:"username","onUpdate:modelValue":s[0]||(s[0]=e=>o.username=e),required:""},null,512),[[a.Jo,o.username]]),j,U,T,(0,n.bo)((0,n.Lk)("input",{type:"password",id:"password","onUpdate:modelValue":s[1]||(s[1]=e=>o.password=e),required:""},null,512),[[a.Jo,o.password]]),X,q,I],32),(0,n.Lk)("p",null,[(0,n.eW)("¿No tienes una cuenta? "),(0,n.bF)(l,{to:"/register"},{default:(0,n.k6)((()=>[(0,n.eW)("Registrarse")])),_:1})]),(0,n.Lk)("p",null,[(0,n.eW)("¿Olvidaste tu contraseña? "),(0,n.bF)(l,{to:"/reset-password"},{default:(0,n.k6)((()=>[(0,n.eW)("Recuperar contraseña")])),_:1})]),o.successMessage?((0,n.uX)(),(0,n.CE)("div",Q,(0,E.v_)(o.successMessage),1)):(0,n.Q3)("",!0),o.errorMessage?((0,n.uX)(),(0,n.CE)("div",W,(0,E.v_)(o.errorMessage),1)):(0,n.Q3)("",!0)])])}const S={data(){return{username:"",password:"",errorMessage:"",successMessage:""}},methods:{loginUser(){const e={username:this.username,password:this.password};fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.ok?e.text():e.text().then((e=>{throw new Error(e)})))).then((e=>{this.successMessage=e,this.errorMessage="",this.username="",this.password=""})).catch((e=>{this.errorMessage=e.message,this.successMessage=""}))}}},N=(0,p.A)(S,[["render",J],["__scopeId","data-v-597fb3b1"]]),V=N,D=e=>((0,n.Qi)("data-v-afdb2a96"),e=e(),(0,n.jt)(),e),$={class:"background-container"},z={class:"card"},H=D((()=>(0,n.Lk)("h1",null,"Registro",-1))),Y=D((()=>(0,n.Lk)("label",{for:"username"},"Nombre de usuario:",-1))),B=D((()=>(0,n.Lk)("br",null,null,-1))),G=D((()=>(0,n.Lk)("br",null,null,-1))),K=D((()=>(0,n.Lk)("label",{for:"email"},"Correo electrónico:",-1))),Z=D((()=>(0,n.Lk)("br",null,null,-1))),ee=D((()=>(0,n.Lk)("br",null,null,-1))),se=D((()=>(0,n.Lk)("label",{for:"password"},"Contraseña:",-1))),re=D((()=>(0,n.Lk)("br",null,null,-1))),ae=D((()=>(0,n.Lk)("br",null,null,-1))),ne=D((()=>(0,n.Lk)("input",{type:"submit",value:"Registrarse"},null,-1))),te={key:0,class:"success-message"},oe={key:1,class:"error-message"};function ie(e,s,r,t,o,i){const l=(0,n.g2)("router-link");return(0,n.uX)(),(0,n.CE)("div",$,[(0,n.Lk)("div",z,[H,(0,n.Lk)("form",{onSubmit:s[3]||(s[3]=(0,a.D$)(((...e)=>i.registerUser&&i.registerUser(...e)),["prevent"]))},[Y,(0,n.bo)((0,n.Lk)("input",{type:"text",id:"username","onUpdate:modelValue":s[0]||(s[0]=e=>o.username=e),required:""},null,512),[[a.Jo,o.username]]),B,G,K,(0,n.bo)((0,n.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":s[1]||(s[1]=e=>o.email=e),required:""},null,512),[[a.Jo,o.email]]),Z,ee,se,(0,n.bo)((0,n.Lk)("input",{type:"password",id:"password","onUpdate:modelValue":s[2]||(s[2]=e=>o.password=e),required:""},null,512),[[a.Jo,o.password]]),re,ae,ne],32),(0,n.Lk)("p",null,[(0,n.eW)("¿Ya tienes una cuenta? "),(0,n.bF)(l,{to:"/login"},{default:(0,n.k6)((()=>[(0,n.eW)("Iniciar sesión")])),_:1})]),o.successMessage?((0,n.uX)(),(0,n.CE)("div",te,(0,E.v_)(o.successMessage),1)):(0,n.Q3)("",!0),o.errorMessage?((0,n.uX)(),(0,n.CE)("div",oe,(0,E.v_)(o.errorMessage),1)):(0,n.Q3)("",!0)])])}const le={data(){return{username:"",email:"",password:"",errorMessage:"",successMessage:""}},methods:{registerUser(){const e={username:this.username,email:this.email,password:this.password};fetch("/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.ok?e.text():e.text().then((e=>{throw new Error(e)})))).then((e=>{this.successMessage=e,this.errorMessage="",this.username="",this.email="",this.password=""})).catch((e=>{this.errorMessage=e.message,this.successMessage=""}))}}},ue=(0,p.A)(le,[["render",ie],["__scopeId","data-v-afdb2a96"]]),de=ue,ce=e=>((0,n.Qi)("data-v-4d814746"),e=e(),(0,n.jt)(),e),pe={class:"background-container"},me={class:"card"},ke=ce((()=>(0,n.Lk)("h1",null,"Restablecer contraseña",-1))),he=ce((()=>(0,n.Lk)("p",null,"Ingresa tu correo electrónico y tu nueva contraseña:",-1))),ge=ce((()=>(0,n.Lk)("label",{for:"email"},"Correo electrónico:",-1))),be=ce((()=>(0,n.Lk)("br",null,null,-1))),ve=ce((()=>(0,n.Lk)("br",null,null,-1))),Le=ce((()=>(0,n.Lk)("label",{for:"newPassword"},"Nueva contraseña:",-1))),fe=ce((()=>(0,n.Lk)("br",null,null,-1))),we=ce((()=>(0,n.Lk)("br",null,null,-1))),ye=ce((()=>(0,n.Lk)("input",{type:"submit",value:"Restablecer contraseña"},null,-1))),Me={key:0,class:"success-message"},_e={key:1,class:"error-message"};function Ce(e,s,r,t,o,i){const l=(0,n.g2)("router-link");return(0,n.uX)(),(0,n.CE)("div",pe,[(0,n.Lk)("div",me,[ke,he,(0,n.Lk)("form",{onSubmit:s[2]||(s[2]=(0,a.D$)(((...e)=>i.resetPassword&&i.resetPassword(...e)),["prevent"]))},[ge,(0,n.bo)((0,n.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":s[0]||(s[0]=e=>o.email=e),required:""},null,512),[[a.Jo,o.email]]),be,ve,Le,(0,n.bo)((0,n.Lk)("input",{type:"password",id:"newPassword","onUpdate:modelValue":s[1]||(s[1]=e=>o.newPassword=e),required:""},null,512),[[a.Jo,o.newPassword]]),fe,we,ye],32),(0,n.Lk)("p",null,[(0,n.eW)("¿Recuerdas tu contraseña? "),(0,n.bF)(l,{to:"/login"},{default:(0,n.k6)((()=>[(0,n.eW)("Iniciar sesión")])),_:1})]),o.successMessage?((0,n.uX)(),(0,n.CE)("div",Me,(0,E.v_)(o.successMessage),1)):(0,n.Q3)("",!0),o.errorMessage?((0,n.uX)(),(0,n.CE)("div",_e,(0,E.v_)(o.errorMessage),1)):(0,n.Q3)("",!0)])])}const xe={data(){return{email:"",newPassword:"",errorMessage:"",successMessage:""}},methods:{resetPassword(){const e={email:this.email,newPassword:this.newPassword};fetch("/reset-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.ok?e.text():e.text().then((e=>{throw new Error(e)})))).then((e=>{this.successMessage=e,this.errorMessage="",this.email="",this.newPassword=""})).catch((e=>{this.errorMessage=e.message,this.successMessage=""}))}}},Ee=(0,p.A)(xe,[["render",Ce],["__scopeId","data-v-4d814746"]]),Pe=Ee,Ae=e=>((0,n.Qi)("data-v-0d5c494b"),e=e(),(0,n.jt)(),e),Oe={lang:"es"},Re=Ae((()=>(0,n.Lk)("head",null,[(0,n.Lk)("meta",{charset:"UTF-8"}),(0,n.Lk)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"})],-1)));function Fe(e,s){const r=(0,n.g2)("a-box"),a=(0,n.g2)("a-marker"),t=(0,n.g2)("a-entity"),o=(0,n.g2)("a-scene");return(0,n.uX)(),(0,n.CE)("html",Oe,[Re,(0,n.Lk)("body",null,[(0,n.bF)(o,{embedded:"",arjs:"sourceType: webcam; sourceWidth: 640; sourceHeight: 480;",style:{position:"fixed","z-index":"2000",width:"100%",height:"100%"}},{default:(0,n.k6)((()=>[(0,n.bF)(a,{preset:"hiro",position:"0 0 0"},{default:(0,n.k6)((()=>[(0,n.bF)(r)])),_:1}),(0,n.bF)(t,{camera:""})])),_:1})])])}const je={},Ue=(0,p.A)(je,[["render",Fe],["__scopeId","data-v-0d5c494b"]]),Te=Ue,Xe=[{path:"/",component:x},{path:"/login",component:V},{path:"/register",component:de},{path:"/reset-password",component:Pe},{path:"/ar",component:Te}],qe=(0,h.aE)({history:(0,h.LA)(),routes:Xe}),Ie=qe;(0,a.Ef)(k).use(Ie).mount("#app")}},s={};function r(a){var n=s[a];if(void 0!==n)return n.exports;var t=s[a]={exports:{}};return e[a](t,t.exports,r),t.exports}r.m=e,(()=>{var e=[];r.O=(s,a,n,t)=>{if(!a){var o=1/0;for(d=0;d<e.length;d++){for(var[a,n,t]=e[d],i=!0,l=0;l<a.length;l++)(!1&t||o>=t)&&Object.keys(r.O).every((e=>r.O[e](a[l])))?a.splice(l--,1):(i=!1,t<o&&(o=t));if(i){e.splice(d--,1);var u=n();void 0!==u&&(s=u)}}return s}t=t||0;for(var d=e.length;d>0&&e[d-1][2]>t;d--)e[d]=e[d-1];e[d]=[a,n,t]}})(),(()=>{r.d=(e,s)=>{for(var a in s)r.o(s,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:s[a]})}})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,s)=>Object.prototype.hasOwnProperty.call(e,s)})(),(()=>{var e={792:0};r.O.j=s=>0===e[s];var s=(s,a)=>{var n,t,[o,i,l]=a,u=0;if(o.some((s=>0!==e[s]))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(l)var d=l(r)}for(s&&s(a);u<o.length;u++)t=o[u],r.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return r.O(d)},a=self["webpackChunkproyecto"]=self["webpackChunkproyecto"]||[];a.forEach(s.bind(null,0)),a.push=s.bind(null,a.push.bind(a))})();var a=r.O(void 0,[504],(()=>r(973)));a=r.O(a)})();
//# sourceMappingURL=main.13181c17.js.map