(this["webpackJsonpmeet-app"]=this["webpackJsonpmeet-app"]||[]).push([[0],{27:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(37),s=n.n(o),c=n(38),i=(n(46),n(13)),l=n.n(i),u=n(16),h=n(7),d=n(11),f=n(9),p=n(8),m=(n(48),n(0));var v=function(e){return e.showWelcomeScreen?Object(m.jsx)("div",{className:"WelcomeScreen",children:Object(m.jsxs)("div",{className:"login",children:[Object(m.jsx)("h2",{children:"Welcome to Event Finder"}),Object(m.jsxs)("h5",{children:["Log in to see upcoming events around the",Object(m.jsx)("br",{})," world for full-stack developers."]}),Object(m.jsx)("div",{className:"button_cont",align:"center",children:Object(m.jsxs)("div",{class:"google-btn",children:[Object(m.jsx)("div",{class:"google-icon-wrapper",children:Object(m.jsx)("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(m.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",class:"login-btn-text",children:Object(m.jsx)("b",{children:"Sign in with google"})})]})}),Object(m.jsx)("a",{href:"https://emilydowney.github.io/meetapp/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})]})}):null},b=n(39),g=n.n(b),j=n(17),w=(n(27),function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={show:!1},e.handleClick=function(){e.setState({show:!0})},e.showLess=function(){e.setState({show:!1})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event,n=g()(t.start.dateTime).format("MMMM Do YYYY, h:mm a");return Object(m.jsxs)(j.a,{bg:"light",children:[Object(m.jsx)(j.a.Title,{className:"summary",children:t.summary}),Object(m.jsx)(j.a.Subtitle,{className:"date-time",children:n}),Object(m.jsx)(j.a.Text,{className:"location",children:t.location}),!1===this.state.show&&Object(m.jsx)(j.a.Text,{children:Object(m.jsx)("button",{className:"show details-btn",onClick:function(){return e.handleClick()},children:"Show details"})}),!0===this.state.show&&Object(m.jsxs)(j.a.Text,{className:"details",children:[t.description,Object(m.jsx)("br",{}),Object(m.jsx)("button",{className:"less btn-text",onClick:function(){return e.showLess()},children:"Hide details"})]})]})}}]),n}(a.Component)),O=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(m.jsx)("div",{className:"EventList",children:e.map((function(e){return Object(m.jsx)("div",{className:"event",children:Object(m.jsx)(w,{className:".event",event:e})},e.id)}))})}}]),n}(a.Component),x=n(15),y=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(d.a)(n,[{key:"render",value:function(){return Object(m.jsx)(x.a.Control.Feedback,{className:"alert",style:this.getStyle(),children:this.props.text})}}]),n}(a.Component),k=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).color="white",a}return n}(y),S=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).color="#ec426b",a}return n}(y),T=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).color="#f46A5f",a}return n}(y),C=n(22),N=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city."})},e.handleItemClicked=function(t){e.setState({query:t,suggestions:[],showSuggestions:!1,infoText:""}),e.props.updateEvents(t,e.props.numberOfEvents)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"CitySearch",children:[Object(m.jsxs)(C.a,{children:[Object(m.jsx)(k,{text:this.state.infoText}),Object(m.jsx)(x.a.Control,{type:"text",className:"city",value:this.state.query,placeholder:"Search Cities",onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}})]}),Object(m.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(m.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(m.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(m.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(a.Component),E=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=e.target.value;a.setState({numberOfEvents:t}),t>32||t<1?a.setState({errorText:"Please enter a number from 1 to 32."}):(a.setState({errorText:""}),a.props.changeCount(t))},a.state={numberOfEvents:32},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsxs)(C.a,{id:"numberInput",children:[Object(m.jsx)(S,{text:this.state.errorText}),Object(m.jsx)(x.a.Label,{className:"number-label",children:"Number of Events:"}),Object(m.jsx)("br",{}),Object(m.jsx)(x.a.Control,{className:"number",type:"number",value:this.state.numberOfEvents,onChange:function(t){return e.handleChange(t)}})]})}}]),n}(a.Component),W=n(40),Z=n(25),L=n.n(Z),I=JSON.parse(JSON.stringify([{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}])),M=n(23),q=n.n(M),A=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,a,r,o,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,J(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,L.a.get("https://qihy4543d3.execute-api.us-east-2.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&B(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,a,r,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(q.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return q.a.done(),e.abrupt("return",I);case 4:if(navigator.onLine){e.next=7;break}return t=localStorage.getItem("lastEvents"),e.abrupt("return",t?JSON.parse(t).events:[]);case 7:return e.next=9,A();case 9:if(!(n=e.sent)){e.next=19;break}return R(),a="https://qihy4543d3.execute-api.us-east-2.amazonaws.com/dev/api/get-events/"+n,e.next=15,L.a.get(a);case 15:return(r=e.sent).data&&(o=D(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),q.a.done(),e.abrupt("return",r.data.events);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://qihy4543d3.execute-api.us-east-2.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},D=function(e){var t=e.map((function(e){return e.location}));return Object(W.a)(new Set(t))},F=n.p+"static/media/eventlogo.b1797d68.png",_=(n(70),n(71),function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).updateEvents=function(e,t){U().then((function(n){var r="all"===e?n:n.filter((function(t){return t.location===e}));a.setState({events:r.slice(0,t),numberOfEvents:t})}))},a.changeCount=function(e){var t=a.state.selectedLocation;a.updateEvents(t,e)},a.state={events:[],locations:[],numberOfEvents:32,selectedLocation:"all",showWelcomeScreen:void 0},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,a,r,o=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,J(t);case 4:if(!e.sent.error){e.next=8;break}e.t0=!1,e.next=9;break;case 8:e.t0=!0;case 9:n=e.t0,a=new URLSearchParams(window.location.search),r=a.get("code"),this.setState({showWelcomeScreen:!(r||n)}),(r||n)&&this.mounted&&U().then((function(e){o.mounted&&o.setState({events:e.slice(0,o.state.numberOfEvents),locations:D(e)}),navigator.onLine?o.setState({warningText:""}):o.setState({warningText:"There is a error with your network connection. Events may not be up to date."})}));case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return void 0===this.state.showWelcomeScreen?Object(m.jsx)("div",{className:"App"}):Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("div",{md:"6",className:"header",children:Object(m.jsx)("img",{src:F,className:"logo",alt:"Logo"})}),Object(m.jsx)(T,{className:"warning",text:this.state.warningText}),Object(m.jsx)(N,{locations:this.state.locations,updateEvents:this.updateEvents,numberOfEvents:this.state.numberOfEvents}),Object(m.jsx)(E,{numberOfEvents:this.state.numberOfEvents,changeCount:this.changeCount}),Object(m.jsx)(O,{events:this.state.events}),Object(m.jsx)(v,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){A()}})]})}}]),n}(a.Component)),Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))};c.config("9e544da2b7fb4c38a2dc13aae3a2e062").install(),s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(_,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/events-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/events-app","/service-worker.js");Y?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):P(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):P(t,e)}))}}(),z()}},[[72,1,2]]]);
//# sourceMappingURL=main.684db48a.chunk.js.map