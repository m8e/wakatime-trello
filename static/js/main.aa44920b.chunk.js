(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},19:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),i=(n(14),n(1)),s=n(2),l=n(4),d=n(3),u=n(5),f=n(8),m=n.n(f),h=(n(16),n(19),"983d58bda5b2717b3acff835fdb1b400"),g="4dd2a9459992e00f91b7d34f3ff3a1ca7f606921e12c02ce8b19b74cf65e043e",p="5b3d742499c8cda9a8ff07db",b=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={message:""},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"createCard",value:function(e){var t=this,n=e.range.date;e.grand_total.hours>=1?fetch("https://api.trello.com/1/lists/"+p+"/cards/?key="+h+"&token="+g).then(function(e){return e.json()}).then(function(a){if(0===a.filter(function(e){return e.name===n}).length){var o="https://api.trello.com/1/cards?key="+h+"&token="+g,r=JSON.stringify({name:n,idList:p,dueComplete:!0,desc:e.grand_total.total_seconds.toString()});fetch(o,{method:"post",headers:{"Content-Type":"application/json",Accept:"application/json"},body:r}).then(function(e){return e.json()}).then(function(e){t.setState({message:"Created Card at "+e.shortUrl})}).catch(function(e){t.setState({message:e})})}else t.setState({message:"The card for "+n+" already exists"})}):this.setState({message:"Cards are created only for one or more hours of coding"})}},{key:"render",value:function(){var e,t=this;return""!==this.state.message&&(e=o.a.createElement("div",{className:"msg"},this.state.message)),o.a.createElement("div",{className:"trello"},o.a.createElement("blockquote",{className:"trello-board-compact"},o.a.createElement("a",{href:"https://trello.com/b/U4hPL2dX/wakatime-activity-code"},"Trello Board")),o.a.createElement("button",{className:"btn",onClick:function(e){return t.createCard(t.props.data,e)}},this.props.name),e)}}]),t}(a.Component),v=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={error:null,isLoaded:!1,items:[]},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;m()("https://wakatime.com/share/@dulcehc/637eb576-6b9f-49a6-9c4f-0869586de823.json").then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,items:t.data})},function(t){e.setState({isLoaded:!1,error:t})})}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.isLoaded,a=e.items,r=a.filter(function(e){return"Today"===e.range.text})[0];return t?o.a.createElement("div",{className:"error-msg"},"Error: ",t.message):n?o.a.createElement("div",{className:"wakatime"},o.a.createElement("table",{className:"ctm-table"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Date"),o.a.createElement("th",null,"Time (hr)"))),o.a.createElement("tbody",null,a.map(function(e,t){return o.a.createElement("tr",{key:t},o.a.createElement("td",{key:"date-"+t},e.range.date),o.a.createElement("td",{key:"time-"+t},e.grand_total.digital))}))),o.a.createElement(b,{name:"Trello",data:r})):o.a.createElement("div",null,"Loading...")}}]),t}(a.Component),w=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Coding activity Last 7 days"),o.a.createElement(v,null))}}]),t}(a.Component),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(o.a.createElement(w,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/wakatime-trello",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/wakatime-trello","/service-worker.js");k?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):y(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):y(e)})}}()},9:function(e,t,n){e.exports=n(22)}},[[9,2,1]]]);
//# sourceMappingURL=main.aa44920b.chunk.js.map