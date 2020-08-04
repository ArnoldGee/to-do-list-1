(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),l=a.n(o),i=function(){return r.a.createElement("div",{className:"container-fluid text-center my-5"},r.a.createElement("h1",{className:"display-4"},"Planning, simplified"),r.a.createElement("p",{className:"lead text-muted"},"A to-do list app by Arnau G\xf3mez"))},s=function(){return r.a.createElement("footer",{className:"text-center text-muted my-5 pt-5"},r.a.createElement("p",null,"Made by ",r.a.createElement("a",{href:"https://twitter.com/4rnoldGee",target:"_blank",rel:"noopener noreferrer"},"Arnau G\xf3mez")),r.a.createElement("p",null,"Planning should be simple and fun. Follow me on ",r.a.createElement("a",{href:"https://dev.to/arnoldgee",target:"_blank",rel:"noopener noreferrer"},"Dev")," to learn more about coding & productivity."),r.a.createElement("i",{className:"far fa-heart","aria-hidden":"true"}))},c=a(2),d=a(5),m=a(6),u=a(1),h=a(8),p=a(7),b=function(e){return r.a.createElement("ul",{className:"w-100 list-group list-group-flush"},e.doArray.map((function(e,t){return Object.assign(e,{index:t})})).sort((function(t,a){if(e.alphabeticalOrder){var n=t.name.toUpperCase(),r=a.name.toUpperCase();if(n>r)return 1;if(n<r)return-1}return 0})).sort((function(t,a){if(e.importantOrder){if(!t.important&&a.important)return 1;if(t.important&&!a.important)return-1}return 0})).map((function(t){return r.a.createElement("li",{className:" list-group-item d-flex justify-content-between align-items-center",key:t.index},r.a.createElement("span",{className:"to-do-element w-100 d-flex justify-content-start align-items-center",title:t.index,onClick:e.handleCompleteToDo},r.a.createElement("p",{className:"mr-3 animated-emoji mb-0",dangerouslySetInnerHTML:{__html:t.emoji}}),r.a.createElement("p",{className:"mb-0"},t.name)),r.a.createElement("i",{title:t.index,className:t.important?"fas fa-star important-task":"far fa-star unimportant-task",onClick:e.handleMarkAsImportant}))})))},f=function(e){return r.a.createElement("ul",{className:"w-100 list-group list-group-flush"},e.doneArray.map((function(e,t){return Object.assign(e,{index:t})})).sort((function(t,a){if(e.alphabeticalOrder){var n=t.name.toUpperCase(),r=a.name.toUpperCase();if(n>r)return 1;if(n<r)return-1}return 0})).map((function(t){return r.a.createElement("li",{className:"to-do-element w-100 list-group-item d-flex",title:t.index,onClick:e.handleReviveToDo,key:t.index},r.a.createElement("span",{className:"mr-3 animated-emoji",dangerouslySetInnerHTML:{__html:t.emoji}}),t.name)})))},y=function(e){return r.a.createElement("form",{className:"form-group d-flex mb-0 mt-3",onSubmit:e.handleAddToDo},r.a.createElement("input",{type:"text",value:e.userInput,className:"container-fluid form-control-lg border-0",onChange:e.handleWriteTask,placeholder:"Create to-do"}),r.a.createElement("button",{className:"btn btn-outline-success btn-lg border-0",type:"submit"},r.a.createElement("i",{className:"fas fa-magic"})))},g=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={section:"To do",alphabeticalOrder:!1,importantOrder:!1,doArray:[{name:"Welcome to this minimal to-do list!",emoji:"\ud83e\udd17",important:!1},{name:"Click on me to complete the to-do",emoji:"\u2705",important:!0},{name:"Click on the To-do button in the upper left corner to see your completed tasks",emoji:"\ud83d\udc49",important:!1}],doneArray:[{name:"If you enjoy this project, don't forget to tweet the creator, @4rnoldGee!",emoji:"\ud83d\udc99",important:!0}],userInput:"",randomEmoji:"\ud83d\udcd3"},n.handleChangeSection=n.handleChangeSection.bind(Object(u.a)(n)),n.handleSortByAlphabeticalOrder=n.handleSortByAlphabeticalOrder.bind(Object(u.a)(n)),n.handleSortByImportant=n.handleSortByImportant.bind(Object(u.a)(n)),n.handleWriteTask=n.handleWriteTask.bind(Object(u.a)(n)),n.handleAddToDo=n.handleAddToDo.bind(Object(u.a)(n)),n.handleCompleteToDo=n.handleCompleteToDo.bind(Object(u.a)(n)),n.handleReviveToDo=n.handleReviveToDo.bind(Object(u.a)(n)),n.handleMarkAsImportant=n.handleMarkAsImportant.bind(Object(u.a)(n)),n.getRandomEmoji=n.getRandomEmoji.bind(Object(u.a)(n)),n.autoSave=n.autoSave.bind(Object(u.a)(n)),n.handleClearDone=n.handleClearDone.bind(Object(u.a)(n)),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){window.localStorage.getItem("doArray")&&this.setState({doArray:JSON.parse(window.localStorage.getItem("doArray"))}),window.localStorage.getItem("doneArray")&&this.setState({doneArray:JSON.parse(window.localStorage.getItem("doneArray"))})}},{key:"autoSave",value:function(){window.localStorage.setItem("doArray",JSON.stringify(this.state.doArray)),window.localStorage.setItem("doneArray",JSON.stringify(this.state.doneArray))}},{key:"handleClearDone",value:function(){window.confirm("Do you want to delete all the completed tasks?")&&(this.setState({doneArray:[]}),this.autoSave())}},{key:"handleChangeSection",value:function(){this.setState((function(e){return{section:"To do"===e.section?"Done":"To do"}}))}},{key:"handleSortByAlphabeticalOrder",value:function(){this.setState((function(e){return{alphabeticalOrder:!e.alphabeticalOrder}}))}},{key:"handleSortByImportant",value:function(){this.setState((function(e){return{importantOrder:!e.importantOrder}}))}},{key:"handleWriteTask",value:function(e){this.setState({userInput:e.target.value})}},{key:"handleAddToDo",value:function(e){e.preventDefault(),""!==this.state.userInput&&(this.setState((function(e){return{doArray:[{name:e.userInput,emoji:e.randomEmoji,important:!1}].concat(Object(c.a)(e.doArray)),userInput:""}})),this.getRandomEmoji(),this.autoSave())}},{key:"getRandomEmoji",value:function(){var e=this;fetch("https://ranmoji.herokuapp.com/emojis/api/v.1.0/").then((function(t){t.json().then((function(t){e.setState({randomEmoji:t.emoji})}))}))}},{key:"handleCompleteToDo",value:function(e){var t=this.state,a=t.doArray,n=t.doneArray,r=+e.target.title,o=[a[r]].concat(Object(c.a)(n)),l=a.slice(0,r).concat(a.slice(r+1));this.setState({doArray:l,doneArray:o}),this.autoSave()}},{key:"handleReviveToDo",value:function(e){var t=this.state,a=t.doArray,n=t.doneArray,r=+e.target.title,o=[n[r]].concat(Object(c.a)(a)),l=n.slice(0,r).concat(n.slice(r+1));this.setState({doArray:o,doneArray:l}),this.autoSave()}},{key:"handleMarkAsImportant",value:function(e){var t=+e.target.title,a={name:this.state.doArray[t].name,emoji:this.state.doArray[t].emoji,important:!this.state.doArray[t].important};this.setState((function(e){return{doArray:[].concat(Object(c.a)(e.doArray.slice(0,t)),[a],Object(c.a)(e.doArray.slice(t+1)))}})),this.autoSave()}},{key:"render",value:function(){var e=this.state,t=e.section,a=e.doArray,n=e.doneArray,o=e.userInput,l=e.alphabeticalOrder,i=e.importantOrder;return r.a.createElement("main",{className:"container-fluid vw-100 d-flex justify-content-center mb-5"},r.a.createElement("div",{id:"notePad",className:"w-100 p-4 shadow-lg"},r.a.createElement("div",{className:"d-flex mb-4 justify-content-between"},r.a.createElement("button",{id:"section-title",className:"To do"===t?"btn border-0 btn-outline-dark btn-lg":"btn border-0 btn-dark btn-lg",onClick:this.handleChangeSection},t),r.a.createElement("div",null,r.a.createElement("span",{className:"text-muted",style:{marginBottom:"0px"}},"Sort by:"),r.a.createElement("div",{className:"btn-group ml-4",role:"group"},r.a.createElement("button",{className:l?"btn btn-info btn-lg":"btn btn-outline-info btn-lg",onClick:this.handleSortByAlphabeticalOrder},"Aa"),"To do"===t?r.a.createElement("button",{className:i?"btn btn-info btn-lg":"btn btn-outline-info btn-lg",onClick:this.handleSortByImportant},r.a.createElement("i",{className:"far fa-star"})):r.a.createElement("button",{className:i?"btn btn-danger btn-lg":"btn btn-outline-danger btn-lg",onClick:this.handleClearDone},r.a.createElement("i",{class:"fa fa-trash-o","aria-hidden":"true"}))))),"To do"===t?r.a.createElement(b,{doArray:a,handleCompleteToDo:this.handleCompleteToDo,handleMarkAsImportant:this.handleMarkAsImportant,alphabeticalOrder:l,importantOrder:i}):r.a.createElement(f,{doneArray:n,handleReviveToDo:this.handleReviveToDo,alphabeticalOrder:l}),r.a.createElement(y,{userInput:o,handleWriteTask:this.handleWriteTask,handleAddToDo:this.handleAddToDo})))}}]),a}(r.a.Component);var v=function(){return r.a.createElement("div",null,r.a.createElement(i,null),r.a.createElement(g,null),r.a.createElement(s,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.667e4da6.chunk.js.map