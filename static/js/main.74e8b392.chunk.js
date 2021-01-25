(this["webpackJsonpredux-todolist"]=this["webpackJsonpredux-todolist"]||[]).push([[0],{33:function(n,e,t){"use strict";t.r(e);var o=t(1),r=t(0),i=t(10),a=t.n(i),d=t(19),c=t(2),u=t(3),s=Object(r.createContext)(null),l="All",b="Completed",p="Incomplete";function f(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n  background: white;\n\n  "," {\n    flex-wrap: wrap;\n    justify-content: center;\n\n    button {\n      margin: 10px 0;\n    }\n\n    div {\n      margin: 0 10px;\n    }\n  }\n"]);return f=function(){return n},n}function j(){var n=Object(c.a)(["\n  margin: 0 auto;\n  width: 90%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  button {\n    margin: 0 10px;\n  }\n\n  input {\n    box-sizing: border-box;\n    border: none;\n    border-radius: 3px;\n    padding: 5px;\n    width: 70%;\n    background: #a3d2ca;\n\n    &:focus {\n      outline: none;\n    }\n  }\n"]);return j=function(){return n},n}function h(){var n=Object(c.a)(["\n  box-sizing: border-box;\n  border-radius: 1.5px;\n  padding: 10px 0 20px 0;\n  width: 100%;\n  background: #5eaaa8;\n  text-align: center;\n\n  h1 {\n    margin: 10px;\n    font-size: 2rem;\n    color: white;\n  }\n"]);return h=function(){return n},n}var x=u.a.form(h()),g=u.a.div(j()),O=u.a.section(f(),"@media (max-width: 576px)");function v(n){var e=n.typeName,t=n.filter,r=n.handleFilter;return Object(o.jsxs)("label",{className:"btn btn-secondary ".concat(t===e?"active":""),children:[Object(o.jsx)("input",{type:"radio",name:"options",id:e,onClick:function(){r(e)}}),e]})}function m(n){var e=n.value,t=n.handleInputChnage,r=n.handleAddTodo;return Object(o.jsxs)(x,{onSubmit:r,children:[Object(o.jsx)("h1",{children:"TODOs"}),Object(o.jsxs)(g,{children:[Object(o.jsx)("input",{type:"text",placeholder:"Let's do something!",onChange:t,value:e}),Object(o.jsx)("button",{className:"btn btn-light",children:"Add"})]})]})}function y(n){var e=n.handleClearTodos,t=n.handleFilter,i=Object(r.useContext)(s).filter,a=[l,b,p];return Object(o.jsxs)(O,{children:[Object(o.jsx)("button",{className:"btn btn-danger",onClick:e,children:"Clear"}),Object(o.jsx)("div",{className:"btn-group btn-group-toggle","data-toggle":"buttons",children:a.map((function(n,e){return Object(o.jsx)(v,{typeName:n,filter:i,handleFilter:t},e)}))})]})}function w(){var n=Object(c.a)(["\n  background: white;\n  box-shadow: 4px 4px 25px #f0f0f0;\n"]);return w=function(){return n},n}function D(){var n=Object(c.a)(["\n  margin: 10vh auto;\n  width: 90vw;\n  "," {\n    width: 60vw;\n  }\n"]);return D=function(){return n},n}var _=u.a.div(D(),"@media (min-width: 768px)"),T=u.a.section(w()),C=t.p+"static/media/check.30036e3a.svg",k=t.p+"static/media/uncheck.50bf432c.svg",E=t.p+"static/media/delete.7f39c7af.svg";function N(){var n=Object(c.a)(["\n  box-sizing: border-box;\n  padding: 8px;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n\n  img {\n    width: 90%;\n    height: 90%;\n    object-fit: cover;\n  }\n"]);return N=function(){return n},n}function R(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  border: 1px solid transparent;\n\n  &:hover {\n    box-shadow: 0px 2px 10px #eeeeee;\n  }\n\n  input {\n    width: 80%;\n    border: none;\n    border-bottom: 1px solid transparent;\n    ","\n\n    &:focus {\n      outline: none;\n      border-color: #eeeeee;\n    }\n  }\n"]);return R=function(){return n},n}var F=u.a.div(R(),(function(n){return n.isDone&&"\n    color: gray;\n    text-decoration: line-through;  \n  "})),I=u.a.div(N());function S(n){var e=n.todo,t=n.handleToggleTodo,r=n.handlgeEditTodo,i=n.handleDeleteTodo;return Object(o.jsxs)(F,{isDone:e.isDone,children:[Object(o.jsx)(I,{children:Object(o.jsx)("img",{alt:"",src:e.isDone?C:k,onClick:function(){t(e.id)}})}),Object(o.jsx)("input",{type:"text",id:e.id,value:e.content,readOnly:e.isDone,onChange:r}),Object(o.jsx)(I,{children:Object(o.jsx)("img",{alt:"",src:E,onClick:function(){i(e.id)}})})]})}var z=t(7),A=function(n){return n.filterReducer},X=function(n){switch(n.filterReducer){case b:return n.todoReducer.todos.filter((function(n){return!0===n.isDone}));case p:return n.todoReducer.todos.filter((function(n){return!1===n.isDone}));default:return n.todoReducer.todos}},L="add_todo",J="delete_todo",U="toggle_todo",V="edit_todo",B="clear_todos",P="set_filter";var q=function(){var n=Object(z.c)(X),e=Object(z.c)(A),t=Object(z.b)(),i=Object(r.useState)(""),a=Object(d.a)(i,2),c=a[0],u=a[1];function l(n){t({type:J,payload:{id:n}})}function b(n){t({type:U,payload:{id:n}})}function p(n){var e,o;t((e=n.target.id,o=n.target.value,{type:V,payload:{id:e,newContent:o}}))}return Object(o.jsx)(s.Provider,{value:{filter:e},children:Object(o.jsx)(r.Fragment,{children:Object(o.jsxs)(_,{children:[Object(o.jsx)(m,{value:c,handleInputChnage:function(n){u(n.target.value)},handleAddTodo:function(n){n.preventDefault(),""!==c&&(t({type:L,payload:{content:c,isDone:!1}}),u(""))}}),Object(o.jsx)(y,{handleFilter:function(n){t(function(n){return{type:P,payload:{newFilter:n}}}(n))},handleClearTodos:function(){t({type:B})}}),Object(o.jsx)(T,{children:n.map((function(n){return Object(o.jsx)(S,{todo:n,handlgeEditTodo:p,handleToggleTodo:b,handleDeleteTodo:l},n.id)}))})]})})})},G=t(5),H=t(9),K=t(20),M=1,Q={todos:[]};var W=l;var Y=Object(G.b)({filterReducer:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case P:return e.payload.newFilter;default:return n}},todoReducer:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case L:return{todos:[].concat(Object(K.a)(n.todos),[{id:M++,content:e.payload.content,isDone:e.payload.isDone}])};case J:return{todos:n.todos.filter((function(n){return n.id!==e.payload.id}))};case U:return{todos:n.todos.map((function(n){return n.id!==e.payload.id?n:Object(H.a)(Object(H.a)({},n),{},{isDone:!n.isDone})}))};case V:return{todos:n.todos.map((function(n){return n.id!==Number(e.payload.id)?n:Object(H.a)(Object(H.a)({},n),{},{content:e.payload.newContent})}))};case B:return{todos:n.todos.filter((function(n){return!n.isDone}))};default:return n}}}),Z=Object(G.c)(Y,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());a.a.render(Object(o.jsx)(z.a,{store:Z,children:Object(o.jsx)(q,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.74e8b392.chunk.js.map