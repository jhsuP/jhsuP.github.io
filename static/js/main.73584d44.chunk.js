(this.webpackJsonpprofile=this.webpackJsonpprofile||[]).push([[0],{143:function(e,t,a){e.exports=a.p+"static/media/github.0d7a432a.jpg"},163:function(e,t,a){e.exports=a(497)},168:function(e,t,a){},169:function(e,t,a){},177:function(e,t,a){var n={"./2018-11-10 surf-up.md":178,"./2020-01-05 discord-to-do.md":179,"./2020-05-15 ono-otw.md":180,"./2020-07-28 internbit.md":181};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=177},178:function(e,t,a){e.exports=a.p+"static/media/2018-11-10 surf-up.55fe60e3.md"},179:function(e,t,a){e.exports=a.p+"static/media/2020-01-05 discord-to-do.263866e7.md"},180:function(e,t,a){e.exports=a.p+"static/media/2020-05-15 ono-otw.96c2e312.md"},181:function(e,t,a){e.exports=a.p+"static/media/2020-07-28 internbit.6e8cba9e.md"},488:function(e,t,a){var n={"./2020-01-21 best-of-both-worlds.md":489,"./2020-01-30 smart-questions.md":490,"./2020-02-13 coding-standards.md":491,"./2020-05-15 to-a-new-start.md":492,"./2020-05-18 internbit-resources.md":493,"./2020-05-22 radgrad.md":494,"./2020-06-04 x-ray evaluation.md":495,"./2020-06-05 pair-programming.md":496};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=488},489:function(e,t,a){e.exports=a.p+"static/media/2020-01-21 best-of-both-worlds.f0b86212.md"},490:function(e,t,a){e.exports=a.p+"static/media/2020-01-30 smart-questions.99f27588.md"},491:function(e,t,a){e.exports=a.p+"static/media/2020-02-13 coding-standards.5cf2a97f.md"},492:function(e,t,a){e.exports=a.p+"static/media/2020-05-15 to-a-new-start.cff98116.md"},493:function(e,t,a){e.exports=a.p+"static/media/2020-05-18 internbit-resources.da8d1616.md"},494:function(e,t,a){e.exports=a.p+"static/media/2020-05-22 radgrad.e8ade42f.md"},495:function(e,t,a){e.exports=a.p+"static/media/2020-06-04 x-ray evaluation.e2508ff9.md"},496:function(e,t,a){e.exports=a.p+"static/media/2020-06-05 pair-programming.d64e3e30.md"},497:function(e,t,a){"use strict";a.r(t);var n,r=a(0),i=a.n(r),o=a(43),c=a.n(o),l=(a(168),a(169),a(9)),s=a(10),m=a(12),u=a(11),d=(a(91),a(511)),p=a(152),h=a(60),f=a(143),g=a.n(f),b=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e={marginLeft:"0.2rem"};return i.a.createElement("div",{id:"menuBG"},i.a.createElement(d.a,null,i.a.createElement("div",{className:"bg-text"},i.a.createElement("h1",{className:"bg-h1"},"JENNIFER HSU"),i.a.createElement("div",null,i.a.createElement(p.a,{centered:!0,style:{width:"45%",marginBottom:"1rem"},circular:!0,src:g.a}),i.a.createElement("a",{href:"mailto: jhsu2@hawaii.edu"},i.a.createElement(h.a,{style:e,name:"mail",size:"big"})),i.a.createElement("a",{href:"https://www.linkedin.com/in/jennifer-hsu-6788b9153/"},i.a.createElement(h.a,{style:e,name:"linkedin",size:"big"})),i.a.createElement("a",{href:"https://github.com/jhsuP"},i.a.createElement(h.a,{style:e,name:"github",size:"big"}))),i.a.createElement("p",{style:{paddingTop:"0.5rem",marginBottom:"0"}},"CS Student. Video Editor. Cat Enthusiast."))))}}]),a}(i.a.Component),v=(i.a.Component,a(83)),E=a.n(v),y=a(84),j=a(514),k=a(516),w=a(17),O=a(13),C=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={markdown:"",description:"",summary:"",date:"",slug:"",title:"",img:"",labels:[],loading:!0},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch(this.props.project).then((function(e){return e.text()})).then((function(t){return e.setState({markdown:t},(function(){var t=e.state.markdown.split("@@@"),a=t[1].split("\n")[6].split(":")[1].split(","),n=t[1].split("\n")[5].split(":")[1],r=t[1].split("\n")[4].split(":")[1],i=t[1].split("\n")[3].split(":")[1],o=t[1].split("\n")[2].split(":")[1],c=t[1].split("\n")[1].split(":")[1];e.setState({summary:n}),e.setState({date:r}),e.setState({slug:i.trim()}),e.setState({title:o}),e.setState({img:c.trim()}),e.setState({labels:a}),e.setState({description:t[2]}),e.setState({loading:!0})}))}))}},{key:"render",value:function(){return!1===this.state.loading?i.a.createElement("p",null):i.a.createElement(j.a.Group,{divided:!0,style:{backgroundColor:"rgba(255, 255, 255, 0.05)",padding:"3rem 3rem",marginBottom:"1rem"},className:"project"},i.a.createElement(j.a,null,i.a.createElement(j.a.Image,{src:this.state.img}),i.a.createElement(j.a.Content,null,i.a.createElement(j.a.Header,{as:"a"},this.state.title),i.a.createElement(j.a.Meta,null,i.a.createElement("span",{style:{color:"white"}},this.state.date)),i.a.createElement(j.a.Description,{style:{color:"white"}},this.state.summary),i.a.createElement(j.a.Extra,null,this.state.labels.map((function(e){return t=e,i.a.createElement(y.a,{style:{backgroundColor:"#00000059",color:"white"}},t);var t})),i.a.createElement(w.b,{to:{pathname:this.state.slug,description:this.state.description,title:this.state.title}},i.a.createElement(k.a,{floated:"right",style:{backgroundColor:"#3c4044",color:"white"}},"Read More",i.a.createElement(h.a,{name:"right chevron"})))))))}}]),a}(i.a.Component),S=Object(O.f)(C),x=a(518),I=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{style:{marginTop:"4rem",marginBottom:"4rem",backgroundColor:"transparent",fontWeight:"bold",color:"white",bottom:0}},i.a.createElement(x.a,{container:!0,centered:!0},"\xa9 Jennifer Hsu 2020"))}}]),a}(i.a.Component),N=(n=a(177)).keys().map(n);N=N.reverse();var D=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(d.a,{style:{margin:"0rem 2rem",paddingTop:"8em"}},E.a.map(N,(function(e,t){return i.a.createElement(S,{project:e,key:t})}))))}}]),a}(i.a.Component),M=a(519),T=a(146),B=a.n(T),L=a(147),H=a.n(L),z=a(515),U=a(512),_=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.language,a=e.value;return i.a.createElement(z.a,{language:t,style:U.a,wrapLines:!0,wrapLongLines:!0},a)}}]),a}(r.PureComponent);_.defaultProps={language:null};var R=_,A=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(l.a)(this,a),n=t.call(this,e);var r=window.location.href;if(r=(r=r.split("/"))[r.length-1],localStorage.getItem(r+"_description")){var i=localStorage.getItem(r+"_description"),o=localStorage.getItem(r+"_title");n.state={description:i,title:o}}else n.state={description:n.props.location.description,title:n.props.location.title};return n}return Object(s.a)(a,[{key:"render",value:function(){var e=window.location.href;return e=(e=e.split("/"))[e.length-1],i.a.createElement("div",null,i.a.createElement(H.a,{parent:this,prefix:e}),i.a.createElement(d.a,{style:{margin:"0rem 2rem",paddingTop:"8rem",color:"white"}},i.a.createElement("div",{style:{backgroundColor:"#ffffff0d",padding:"4rem",fontSize:"17px"}},i.a.createElement(M.a,{as:"h1",inverted:!0,textAlign:"center"},this.state.title),i.a.createElement(B.a,{escapeHtml:!1,source:this.state.description,renderers:{code:R}}))))}}]),a}(i.a.Component),G=Object(O.f)(A),J=a(513),P=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={activeItem:localStorage.getItem("tab")},e.handleItemClick=function(t,a){var n=a.name;e.setState({activeItem:n}),localStorage.setItem("tab",n)},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("tab");this.setState((function(){return{defaultTab:e}}))}},{key:"render",value:function(){var e=this.state.activeItem;return i.a.createElement(J.a,{inverted:!0,stackable:!0,pointing:!0,secondary:!0,fixed:"top",style:{backgroundColor:"black",padding:"0.5rem 0.5rem",borderColor:"transparent"}},i.a.createElement(J.a.Item,{style:{marginLeft:"calc(34%)"},name:"home",active:"home"===e,onClick:this.handleItemClick,icon:"user",as:w.b,exact:!0,to:"/"}),i.a.createElement(J.a.Item,{name:"about",active:"about"===e,onClick:this.handleItemClick,icon:"user",as:w.b,exact:!0,to:"/about"}),i.a.createElement(J.a.Item,{name:"projects",active:"projects"===e,onClick:this.handleItemClick,icon:"code",as:w.b,exact:!0,to:"/projects"}),i.a.createElement(J.a.Item,{name:"blog",active:"blog"===e,onClick:this.handleItemClick,icon:"book",as:w.b,exact:!0,to:"/blog"}),i.a.createElement(J.a.Item,{name:"resume",active:"resume"===e,onClick:this.handleItemClick,icon:"file code",as:w.b,exact:!0,to:"/resume"}))}}]),a}(i.a.Component),W=Object(O.f)(P),F=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=function(e){return i.a.createElement(y.a,{size:"large",style:{backgroundColor:"#00000059",color:"white",margin:"0.4rem"}},e)};return i.a.createElement("div",null,i.a.createElement(d.a,{style:{margin:"0rem 2rem",paddingTop:"7rem",color:"white"}},i.a.createElement("div",{style:{backgroundColor:"#ffffff0d",padding:"4rem",fontSize:"17px"}},i.a.createElement(M.a,{as:"h1",inverted:!0,textAlign:"center"},"Hello! \u2615"),i.a.createElement("p",null,"I am a student studying Computer Science & Social Work at the University of Hawaii at Manoa. I was always interested in CS and after taking courses in Social Work, I realized how much difference a good and user-friendly software can be when it comes to case management and working with marginalized populations. It was then I decided that I should tie in both of my passions -- CS and helping others. I am currently looking for internships and/or full time positions upon graduation."),i.a.createElement("p",null,"I use this site as both a professional portfolio, as well as a place to document my journey as a CS student. I hope you enjoy your visit here and if you ever want to reach out, feel free to contact me at my ",i.a.createElement("a",{href:"mailto: jhsu2@hawaii.edu"},"email")," or ",i.a.createElement("a",{href:"https://www.linkedin.com/in/jennifer-hsu-6788b9153/"},"LinkedIn"),"."),i.a.createElement(M.a,{as:"h1",inverted:!0,textAlign:"center"},"Skills"),i.a.createElement("div",{align:"center"},["React","React Native","Node.js","Javascript","HTML","CSS","SemanticUI","MongoDB","Git","Python"].map((function(t){return e(t)}))),i.a.createElement(M.a,{as:"h1",inverted:!0,textAlign:"center"},"Interests"),i.a.createElement("div",{align:"center"},["Full-Stack Development","Software Engineering","Social Computing","Human-Computer Interaction","Psychology","Cognitive Science","Social Computing"].map((function(t){return e(t)}))))))}}]),a}(i.a.Component),q=Object(O.f)(F),V=a(520),$=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={markdown:"",description:"",date:"",slug:"",title:"",summary:"",labels:[],loading:!0},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch(this.props.blog).then((function(e){return e.text()})).then((function(t){return e.setState({markdown:t},(function(){var t=e.state.markdown.split("@@@"),a=t[1].split("\n")[5].split(":")[1].split(","),n=t[1].split("\n")[4].split(":")[1],r=t[1].split("\n")[3].split(":")[1],i=t[1].split("\n")[2].split(":")[1],o=t[1].split("\n")[1].split(":")[1];e.setState({date:r}),e.setState({slug:i.trim()}),e.setState({title:o}),e.setState({labels:a}),e.setState({summary:n}),e.setState({description:t[2]}),e.setState({loading:!1})}))}))}},{key:"render",value:function(){return!0===this.state.loading?i.a.createElement(V.a,{placeholder:!0,style:{backgroundColor:"rgba(255, 255, 255, 0.05)"}},i.a.createElement(M.a,{icon:!0,inverted:!0},"Loading information...")):i.a.createElement(j.a.Group,{divided:!0,style:{backgroundColor:"rgba(255, 255, 255, 0.05)",padding:"3rem 3rem",marginBottom:"1rem"},className:"project"},i.a.createElement(j.a,null,i.a.createElement(j.a.Content,null,i.a.createElement(j.a.Header,{as:"a"},this.state.title),i.a.createElement(j.a.Meta,null,i.a.createElement("span",{style:{color:"white"}},function(e){var t=e.split("-"),a=new Date(t[0],t[1]-1,t[2]);if(!isNaN(a))return i.a.createElement("p",null,a.toDateString())}(this.state.date))),i.a.createElement(j.a.Description,{style:{color:"white"}},this.state.summary.substring(0,400),"..."),i.a.createElement(j.a.Extra,null,this.state.labels.map((function(e){return t=e,i.a.createElement(y.a,{style:{backgroundColor:"#00000059",color:"white"}},t);var t})),i.a.createElement(w.b,{to:{pathname:this.state.slug,description:this.state.description,title:this.state.title}},i.a.createElement(k.a,{floated:"right",style:{backgroundColor:"#3c4044",color:"white"}},"Read More",i.a.createElement(h.a,{name:"right chevron"})))))))}}]),a}(i.a.Component),K=Object(O.f)($),Q=function(e){return e.keys().map(e)}(a(488));Q=Q.reverse();var X=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(d.a,{style:{margin:"0rem 2rem",paddingTop:"8rem"}},E.a.map(Q,(function(e,t){return i.a.createElement(K,{blog:e,key:e})}))))}}]),a}(i.a.Component),Y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{align:"center"},i.a.createElement(d.a,{style:{margin:"0rem 2rem",paddingTop:"8rem",color:"white"}},i.a.createElement("embed",{src:"./Resume.pdf",width:"800px",height:"2100px"})))}}]),a}(i.a.Component),Z=Object(O.f)(Y);var ee=function(){return i.a.createElement(w.a,null,i.a.createElement(W,null),i.a.createElement("div",{id:"menuBG"},i.a.createElement(O.c,null,i.a.createElement(O.a,{exact:!0,path:"/",component:b}),i.a.createElement(O.a,{exact:!0,path:"/about",component:q}),i.a.createElement(O.a,{exact:!0,path:"/projects",component:D}),i.a.createElement(O.a,{exact:!0,path:"/projects/:name",component:G}),i.a.createElement(O.a,{exact:!0,path:"/blog",component:X}),i.a.createElement(O.a,{exact:!0,path:"/blog/:title",component:G}),i.a.createElement(O.a,{exact:!0,path:"/resume",component:Z})),i.a.createElement(I,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[163,1,2]]]);
//# sourceMappingURL=main.73584d44.chunk.js.map