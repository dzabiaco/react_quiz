(this.webpackJsonpreact_quiz=this.webpackJsonpreact_quiz||[]).push([[0],{18:function(e,n,t){e.exports=t.p+"static/media/cute_daffy-removed.7dad7e83.png"},19:function(e,n,t){e.exports=t(27)},27:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(14),l=t.n(c),i=t(2),o=t(3),s=t.n(o),u=t(6),m=t(1),f=function(e){var n=e.question,t=e.answers,a=e.callback,c=e.userAnswer,l=e.questionNr,i=e.totalQuestions;return r.a.createElement("div",null,r.a.createElement("p",{className:"number"},"Question: ",l," / ",i),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:n}}),r.a.createElement("div",{className:"answers"},t.map((function(e){return r.a.createElement("div",{key:e},r.a.createElement("button",{disabled:!!c,onClick:a,className:"btn",value:e},r.a.createElement("span",{dangerouslySetInnerHTML:{__html:e}})))}))))},p=t(8),d=t(9);function b(){var e=Object(p.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    .score {\n        font-size: 2rem;\n        margin: 0;\n    }\n\n    h1{\n        font-family: Fascinate Inline, sans-serif;\n        background-image:linear-gradient(180deg, #fff, #87f1ff);\n        background-size: 100%;\n        background-clip: text;\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent;\n        -moz-background-clip: text;\n        -mox-text-fill-color: transparent;\n        filter: drop-shadow(2px 2px #008583);\n        font-size: 70px;\n        font-weight: 400;\n        text-align: center;\n        margin: 20px;\n    }\n\n    .flex {\n        display: flex;\n        flex-wrap: wrap;\n    }\n    \n    .btn{\n        width: auto;\n        height: auto;\n        min-height: 50px;\n        margin: 10px;\n        line-height: 1.2;\n        box-shadow: 0 5px 10px rgba(0,0,0,0,0.25);\n    }\n    .btn:hover{\n        opacity: 0.8;\n    }\n\n    .FormGroup{\n        display: flex;\n        width: 100%;\n        justify-content: space-around;\n    }\n"]);return b=function(){return e},e}function g(){var e=Object(p.a)(["\n    html {\n        height: 100vh;\n    }\n\n    body {\n        margin: 0;\n        padding: 0 20px;\n        display: flex;\n        justify-content: center;\n    }\n\n    *{\n        box-sizing: border-box;\n        font-family: 'Catamaran', sans-serif;\n    }\n\n    .App {\n        display: flex;\n        height: 100vh;\n        text-align: center;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .answers{\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n    }\n\n    .Footer{\n        width: 100%;\n        dispaly: flex;\n        flex-direction: row;\n        align-items: flex-end;\n        margin-top: 40px;\n    }\n\n    .Footer .logo img{\n        width: 150px;\n        height: 150px;\n    }\n"]);return g=function(){return e},e}var h=Object(d.a)(g()),x=d.b.div(b()),v=t(18),E=t.n(v),w=function(){return r.a.createElement("div",{className:"Footer"},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:E.a,alt:""})),r.a.createElement("div",{className:"copy"},"Created by Dmitri Z."))},y=t(11),j=function(e){return Object(i.a)(e).sort((function(){return Math.random()-.5}))},O=function(){var e=Object(u.a)(s.a.mark((function e(){var n,t,a,r,c=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:10,t=c.length>1?c[1]:void 0,a="https://opentdb.com/api.php?amount=".concat(n,"&type=multiple&difficulty=").concat(t),e.next=5,fetch(a);case 5:return e.next=7,e.sent.json();case 7:return r=e.sent,e.abrupt("return",r.results.map((function(e){return Object(y.a)(Object(y.a)({},e),{},{answers:j([].concat(Object(i.a)(e.incorrect_answers),[e.correct_answer]))})})));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(e){return Object(a.useEffect)((function(){$(document).ready((function(){M.updateTextFields()}))}),[]),r.a.createElement("div",{className:"input-field col s6"},r.a.createElement("input",{placeholder:"10",id:"number",type:"text",onChange:function(n){return e.numberQue(n)}}),r.a.createElement("label",{htmlFor:"first_name",className:"active"},"Choose quantity"))},k=function(e){return Object(a.useEffect)((function(){$(document).ready((function(){$("select").formSelect()}))}),[]),r.a.createElement("div",null,r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("select",{onChange:function(n){return e.getOption(n)}},r.a.createElement("option",{value:"easy"},"Easy"),r.a.createElement("option",{value:"medium"},"Medium"),r.a.createElement("option",{value:"hard"},"Hard")),r.a.createElement("label",null,"Choose your difficulty")))},S=function(){var e=Object(a.useState)(!1),n=Object(m.a)(e,2),t=n[0],c=n[1],l=Object(a.useState)([]),o=Object(m.a)(l,2),p=o[0],d=o[1],b=Object(a.useState)(0),g=Object(m.a)(b,2),v=g[0],E=g[1],y=Object(a.useState)([]),j=Object(m.a)(y,2),S=j[0],_=j[1],q=Object(a.useState)(0),C=Object(m.a)(q,2),F=C[0],z=C[1],Q=Object(a.useState)(!0),A=Object(m.a)(Q,2),M=A[0],I=A[1],T=Object(a.useState)(0),H=Object(m.a)(T,2),$=H[0],G=H[1],J=Object(a.useState)(""),L=Object(m.a)(J,2),Z=L[0],B=L[1],D=$||10,R=function(){var e=Object(u.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),I(!1),e.next=4,O(D=10,Z);case 4:n=e.sent,d(n),z(0),_([]),E(0),c(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(x,null,r.a.createElement("h1",{className:"header"},"REACT QUIZ"),M||S.length===D?r.a.createElement("div",{className:"FormGroup"},r.a.createElement(N,{numberQue:function(e){null!==e.target.value&&(G(Number(e.target.value)),console.log($))}}),r.a.createElement(k,{getOption:function(e){B(e.target.value)}})):null,isNaN($)?r.a.createElement("span",null,"Number of questions is invalid"):null,M||S.length===D?r.a.createElement("button",{className:"btn",onClick:R},"Start"):null,M?null:r.a.createElement("p",{className:"score"},"Score: ",F),t&&r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"indeterminate"})),!M&&!t&&r.a.createElement(f,{questionNr:v+1,totalQuestions:D,question:p[v].question,answers:p[v].answers,userAnswer:S?S[v]:void 0,correct:p[v].correct,callback:function(e){if(!M){var n=e.currentTarget.value,t=p[v].correct_answer===n;t&&z((function(e){return e+1}));var a={question:p[v],answer:n,correct:t,correctAnswer:p[v].correct_answer};_((function(e){return[].concat(Object(i.a)(e),[a])}))}}}),M||t||S.length!==v+1||v===D-1?null:r.a.createElement("button",{className:"btn",onClick:function(){var e=v+1;e===D?I(!0):E(e)}},"Next Question")),r.a.createElement(w,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.76e41c3f.chunk.js.map