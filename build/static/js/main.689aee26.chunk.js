(this["webpackJsonpfb-clone"]=this["webpackJsonpfb-clone"]||[]).push([[0],{67:function(e,a,t){e.exports=t(99)},72:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){},80:function(e,a,t){},81:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){},94:function(e,a,t){},95:function(e,a,t){},96:function(e,a,t){},97:function(e,a,t){},98:function(e,a,t){},99:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(18),o=t.n(r),l=(t(72),t(11)),i=(t(73),t(74),t(35)),s=t.n(i),m=t(40),d=t.n(m),u=t(41),_=t.n(u),p=t(42),f=t.n(p),E=t(43),h=t.n(E),g=t(44),b=t.n(g),v=t(114),N=t(112),w=t(45),S=t.n(w),j=t(46),k=t.n(j),F=t(47),y=t.n(F),A=t(48),C=t.n(A),I=Object(n.createContext)(),O=function(e){var a=e.reducer,t=e.initialState,r=e.children;return c.a.createElement(I.Provider,{value:Object(n.useReducer)(a,t)},r)},L=function(){return Object(n.useContext)(I)};var x=function(){var e=L(),a=Object(l.a)(e,2),t=a[0].user;return a[1],c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header_left"},c.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png",alt:""}),c.a.createElement("div",{className:"header_input"},c.a.createElement(s.a,null),c.a.createElement("input",{placeholder:"Seaerch Facebook",type:"text"}))),c.a.createElement("div",{className:"header_center"},c.a.createElement("div",{className:"header_option header_option--active"},c.a.createElement(d.a,{fontSize:"large"})),c.a.createElement("div",{className:"header_option"},c.a.createElement(_.a,{fontSize:"large"})),c.a.createElement("div",{className:"header_option"},c.a.createElement(f.a,{fontSize:"large"})),c.a.createElement("div",{className:"header_option"},c.a.createElement(h.a,{fontSize:"large"})),c.a.createElement("div",{className:"header_option"},c.a.createElement(b.a,{fontSize:"large"}))),c.a.createElement("div",{className:"header_right"},c.a.createElement("div",{className:"header_info"},c.a.createElement(v.a,{src:t.photoURL}),c.a.createElement("h4",null,t.displayName)),c.a.createElement(N.a,null,c.a.createElement(S.a,null)),c.a.createElement(N.a,null,c.a.createElement(k.a,null)),c.a.createElement(N.a,null,c.a.createElement(y.a,null)),c.a.createElement(N.a,null,c.a.createElement(C.a,null))))};t(80),t(81);var R=function(e){var a=e.src,t=e.Icon,n=e.title;return c.a.createElement("div",{className:"sidebarRow"},a&&c.a.createElement(v.a,{src:a}),t&&c.a.createElement(t,null),c.a.createElement("h4",null,n))},U=t(49),X=t.n(U),P=t(50),B=t.n(P),z=t(51),D=t.n(z),V=t(52),M=t.n(V),T=t(53),W=t.n(T),K=t(54),q=t.n(K),G=t(55),J=t.n(G);var Y=function(){var e=L(),a=Object(l.a)(e,2),t=a[0].user;return a[1],c.a.createElement("div",{className:"sidebar"},c.a.createElement(R,{src:t.photoURL,title:t.displayName}),c.a.createElement(R,{Icon:X.a,title:"COVID-19 Information Center"}),c.a.createElement(R,{Icon:B.a,title:"Pages"}),c.a.createElement(R,{Icon:D.a,title:"Friends"}),c.a.createElement(R,{Icon:M.a,title:"Messenger"}),c.a.createElement(R,{Icon:W.a,title:"Marketplace"}),c.a.createElement(R,{Icon:q.a,title:"Videos"}),c.a.createElement(R,{Icon:J.a,title:"Marketplace"}))},H=(t(82),t(83),t(56)),Q=t.n(H),Z=t(57),$=t.n(Z),ee=t(58),ae=t.n(ee),te=t(21),ne=t.n(te),ce=ne.a.initializeApp({apiKey:"AIzaSyBOCAURUu-2xEqvBL3aOtKjdTEJ2J1_z6I",authDomain:"facebook-clone-d8459.firebaseapp.com",databaseURL:"https://facebook-clone-d8459.firebaseio.com",projectId:"facebook-clone-d8459",storageBucket:"facebook-clone-d8459.appspot.com",messagingSenderId:"1059624079",appId:"1:1059624079:web:109ba9f050609d12384cfa"}).firestore(),re=ne.a.auth(),oe=new ne.a.auth.GoogleAuthProvider,le=ce;var ie=function(){var e=L(),a=Object(l.a)(e,2),t=a[0].user,r=(a[1],Object(n.useState)("")),o=Object(l.a)(r,2),i=o[0],s=o[1],m=Object(n.useState)(""),d=Object(l.a)(m,2),u=d[0],_=d[1];return c.a.createElement("div",{className:"messageSender"},c.a.createElement("div",{className:"messageSender__top"},c.a.createElement(v.a,{src:t.photoURL}),c.a.createElement("form",null,c.a.createElement("input",{value:i,onChange:function(e){return s(e.target.value)},placeholder:"What's on your mind, ".concat(t.displayName,"?"),className:"messageSender__input"}),c.a.createElement("input",{value:u,onChange:function(e){return _(e.target.value)},placeholder:"image URL (optional)"}),c.a.createElement("button",{onClick:function(e){e.preventDefault(),le.collection("posts").add({message:i,timestamp:ne.a.firestore.FieldValue.serverTimestamp(),profilePic:t.photoURL,username:t.displayName,image:u})},type:"submit"},"Hidden submit"))),c.a.createElement("div",{className:"messageSender__bottom"},c.a.createElement("div",{className:"messageSender__option"},c.a.createElement(Q.a,{style:{color:"red"}}),c.a.createElement("h3",null,"Live Video")),c.a.createElement("div",{className:"messageSender__option"},c.a.createElement($.a,{style:{color:"green"}}),c.a.createElement("h3",null,"Photo/Video")),c.a.createElement("div",{className:"messageSender__option"},c.a.createElement(ae.a,{style:{color:"orange"}}),c.a.createElement("h3",null,"Feeling/Activity"))))},se=(t(94),t(59)),me=t.n(se),de=t(60),ue=t.n(de),_e=t(62),pe=t.n(_e),fe=t(61),Ee=t.n(fe),he=t(115);var ge=function(e){var a=e.profilePic,t=e.image,n=e.username,r=e.timestamp,o=e.message;return c.a.createElement("div",{className:"post"},c.a.createElement("div",{className:"post__top"},c.a.createElement(v.a,{src:a,className:"post__avatar"}),c.a.createElement("div",{className:"post__topInfo"},c.a.createElement("h3",null,n),c.a.createElement("p",null,new Date(null===r||void 0===r?void 0:r.toDate()).toUTCString()))),c.a.createElement("div",{className:"post__bottom"},c.a.createElement("p",null,o)),c.a.createElement("div",{className:"post__image"},c.a.createElement("img",{src:t,alt:""})),c.a.createElement("div",{className:"post__options"},c.a.createElement("div",{className:"post__option"},c.a.createElement(me.a,null),c.a.createElement("p",null,"Like")),c.a.createElement("div",{className:"post__option"},c.a.createElement(ue.a,null),c.a.createElement("p",null,"Comment")),c.a.createElement("div",{className:"post__option"},c.a.createElement(Ee.a,null),c.a.createElement("p",null,"Share")),c.a.createElement("div",{className:"post__option"},c.a.createElement(pe.a,null),c.a.createElement(he.a,null))))};t(95);var be=function(e){var a=e.image,t=e.profileSrc,n=e.title;return c.a.createElement("div",{style:{backgroundImage:"url(".concat(a,")")},className:"story"},c.a.createElement(v.a,{className:"story__avatar",src:t}),c.a.createElement("h4",null,n))};t(96);var ve=function(){return c.a.createElement("div",{className:"storyReel"},c.a.createElement(be,{image:"https://instagram.fboi1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/99424007_341359250175442_2914785430945660928_n.jpg?_nc_ht=instagram.fboi1-1.fna.fbcdn.net&_nc_ohc=4LBvj8sRcYYAX9Xrf89&oh=26d364dd1f9ce71d8b3b3a2587756679&oe=5F9C1462",profileSrc:"https://scontent.fboi1-1.fna.fbcdn.net/v/t1.0-9/120269077_3459417084119103_9200521592552486590_o.jpg?_nc_cat=103&_nc_sid=5b7eaf&_nc_ohc=t906Np0soe8AX9NVEvF&_nc_ht=scontent.fboi1-1.fna&oh=f014027a95cfc32c72cd9b01b1624a89&oe=5F98758E",title:"Kai Boet"}),c.a.createElement(be,{image:"https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/120344342_769699200273371_6306069107009044591_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=ekdAALsqEuYAX-rsjSR&_nc_tp=18&oh=ad37fea39714effdbe15a0c1c4dd3ec4&oe=5FA28439",profileSrc:"https://instagram.fboi1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/57194667_392875547972686_8709921362476531712_n.jpg?_nc_ht=instagram.fboi1-1.fna.fbcdn.net&_nc_ohc=EseAkYMN5PcAX_j6Ciq&oh=e8e018345eda915ecfab63d44577a6e8&oe=5F9C630F",title:"uofwa"}),c.a.createElement(be,{image:"https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/119780113_774097923382009_5130709382026684347_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=E1ChEVUGRU8AX_XLSRO&_nc_tp=15&oh=0b91f7f5bf774debd9cf96a06066b8b9&oe=5FA2E83C",profileSrc:"https://instagram.fboi1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/69071755_385149292196650_3155102260044759040_n.jpg?_nc_ht=instagram.fboi1-1.fna.fbcdn.net&_nc_ohc=uH0SGMhQD1cAX8sQNBX&oh=4084f38e8994c3bd904acb6b04704d39&oe=5F990F10",title:"ripndip"}),c.a.createElement(be,{image:"https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/118651929_1667708983388098_264808857388316179_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=ssl7IakZ2mUAX8qCW_D&_nc_tp=15&oh=db61491fb19a285166008f3932fe26e9&oe=5FA07A58",profileSrc:"https://instagram.fboi1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/73268667_577299513038455_1311927047945191424_n.jpg?_nc_ht=instagram.fboi1-1.fna.fbcdn.net&_nc_ohc=6xBKtl7yTrwAX-b5a5F&oh=d119f900b115fc49fbac9b53f2e2b82d&oe=5F9C645D",title:"jaychou"}),c.a.createElement(be,{image:"https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/120601495_327095228576853_6308203398699162199_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=ElAwrCPlFGEAX8dtdCa&_nc_tp=18&oh=6e1a04dc9d533af1a76005462a9a8176&oe=5FA221C7",profileSrc:"https://instagram.fboi1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/49956649_2355198761377068_8689160791942758400_n.jpg?_nc_ht=instagram.fboi1-1.fna.fbcdn.net&_nc_ohc=I6i2EAOgZWAAX_cc12K&oh=a8505fe5f4b01f59f9b7707530c2eb47&oe=5F9C7ECB",title:"long_ifbbpro"}))};var Ne=function(){var e=Object(n.useState)([]),a=Object(l.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){le.collection("posts").onSnapshot((function(e){r(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),c.a.createElement("div",{className:"feed"},c.a.createElement(ve,null),c.a.createElement(ie,null),t.map((function(e){return c.a.createElement(ge,{key:e.id,profilePic:e.data.profilePic,message:e.data.message,timestamp:e.data.timestamp,username:e.data.username,image:e.data.image})})))};t(97);var we=function(){return c.a.createElement("div",{className:"widgets"},c.a.createElement("iframe",{src:"https://www.facebook.com/ plugins/page.php? href=https%3A%2F%2Fwww.facebook. com%2FCleverProgrammerr%2F& tabs=timeline&width=340&height=1500& small_header=false& adapt_container_width=true& hide_cover=false&show_facepile=true& appId",title:"widget",width:"340",height:"100%",style:{border:"none",overflow:"hidden"},scrolling:"no",frameBorder:"0",allowTransparency:"true",allow:"encrpted-media"}))},Se=t(113),je=(t(98),t(31)),ke="SET_USER",Fe=function(e,a){switch(console.log("action:",a),a.type){case ke:return Object(je.a)(Object(je.a)({},e),{},{user:a.user});default:return e}};var ye=function(){var e=L(),a=Object(l.a)(e,2),t=(a[0],a[1]);return c.a.createElement("div",{className:"login"},c.a.createElement("div",{className:"login__logo"},c.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png",alt:""}),c.a.createElement("img",{src:"https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg",alt:""})),c.a.createElement(Se.a,{type:"submit",onClick:function(){re.signInWithPopup(oe).then((function(e){t({type:ke,user:e.user}),console.log("result:",e)})).catch((function(e){alert(e.message)}))}},"Sign In"))};var Ae=function(){var e=L(),a=Object(l.a)(e,2),t=a[0].user;return a[1],c.a.createElement("div",{className:"app"},t?c.a.createElement(c.a.Fragment,null,c.a.createElement(x,null),c.a.createElement("div",{className:"app_body"},c.a.createElement(Y,null),c.a.createElement(Ne,null),c.a.createElement(we,null))):c.a.createElement(ye,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(O,{initialState:{user:null},reducer:Fe},c.a.createElement(Ae,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[67,1,2]]]);
//# sourceMappingURL=main.689aee26.chunk.js.map