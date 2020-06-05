(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),l=n.n(c),u=(n(13),function(){return r.a.createElement("div",null,"Expenser Tracker")}),o=n(2),i=n(7),s=n(3),m=function(e,t){switch(t.type){case"DELETE_TRANSACTION":return Object(s.a)(Object(s.a)({},e),{},{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case"ADD_TRANSACTION":return Object(s.a)(Object(s.a)({},e),{},{transactions:[t.payload].concat(Object(i.a)(e.transactions))});default:return e}},E={transactions:[]},d=Object(a.createContext)(E),f=function(e){var t=e.children,n=Object(a.useReducer)(m,E),c=Object(o.a)(n,2),l=c[0],u=c[1];return r.a.createElement(d.Provider,{value:{transactions:l.transactions,deleteTransaction:function(e){u({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){u({type:"ADD_TRANSACTION",payload:e})}}},t)},p=function(){var e=Object(a.useContext)(d).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return r.a.createElement("div",null,r.a.createElement("h4",null,"Your Balance"),r.a.createElement("h1",null,"\u20ac",e))},b=function(){var e=Object(a.useContext)(d).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=(-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)).toFixed(2);return r.a.createElement("div",{className:"inc-exp-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Income"),r.a.createElement("p",{className:"money plus"},"+\u20ac",t)),r.a.createElement("div",null,r.a.createElement("h4",null,"Expense"),r.a.createElement("p",{className:"money minus"},"-\u20ac",n)))},v=function(e){var t=e.transaction,n=Object(a.useContext)(d).deleteTransaction,c=t.amount<0?"-":"+";return r.a.createElement("li",{className:t.amount<0?"minus":"plus"},t.text," ",r.a.createElement("span",null,c,"\u20ac",Math.abs(t.amount)),r.a.createElement("button",{className:"delete-btn",onClick:function(){return n(t.id)}},"x"))},x=function(){var e=Object(a.useContext)(d).transactions;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"History"),r.a.createElement("ul",{className:"list"},e.map((function(e){return r.a.createElement(v,{key:e.id,transaction:e})}))))},O=function(){var e=Object(a.useContext)(d).addTransaction,t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],l=n[1],u=Object(a.useState)(0),i=Object(o.a)(u,2),s=i[0],m=i[1];return r.a.createElement("div",null,r.a.createElement("h3",null,"Add new transaction"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var n={id:Math.floor(1e8*Math.random()),text:c,amount:+s};e(n)}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"text"},"Text"),r.a.createElement("input",{type:"text",value:c,onChange:function(e){return l(e.target.value)},placeholder:"Enter text..."})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"amount"},"Amount ",r.a.createElement("br",null),"(negative - expense, positive - income)"),r.a.createElement("input",{type:"number",value:s,onChange:function(e){return m(e.target.value)},placeholder:"Enter amount..."})),r.a.createElement("button",{className:"btn"},"Add transaction")))};var h=function(){return r.a.createElement(f,null,r.a.createElement(u,null),r.a.createElement("div",{className:"container"},r.a.createElement(p,null),r.a.createElement(b,null),r.a.createElement(x,null),r.a.createElement(O,null)))};l.a.render(r.a.createElement(h,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.773b1978.chunk.js.map