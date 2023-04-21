(()=>{"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const e=function(e){return"string"==typeof e&&!(0!==e.length&&!function(e){return(r=e,function(e){if(Array.isArray(e))return t(e)}(r)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).every((function(t){return" "===t}));var r}(e))};function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function n(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==i(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===i(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}var a=function(t){return"string"==typeof t},c=function(t){return Date.prototype.isPrototypeOf(t)},s=function(t){switch(t){case"high":case"medium":case"low":return!0;default:return!1}};function u(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now(),o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof t&&!e(t)&&"object"===i(o))return Object.freeze({get name(){return t},set name(r){"string"!=typeof r||e(r)||(t=r)},get id(){return r},get todos(){return function(){var t=n({},o);for(var e in t)t[e]=n({},t[e]);return t}()},addTodo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Date,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"medium";return!(!a(t)||o[t]||e(t)||!a(r)||!c(n)||!s(i)||(o[t]=function(t,r,n,o){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Date.now();if("string"==typeof t&&!e(t))return{title:t,description:r,duedate:n,priority:o,get id(){return i}}}(t,r,n,i),0))},removeTodo:function(t){return!!o[t]&&(delete o[t],!0)},editTodo:function(t,r,n){if(!o[t])return!1;switch(r){case"title":if(!a(n)||e(n)||o[n])return!1;var i=n,u=t,l=o[u];return l.title=i,delete o[u],o[i]=l,!0;case"description":return!!a(n)&&(o[t].description=n,!0);case"duedate":return!!c(n)&&(o[t].duedate=n,!0);case"priority":return!!s(n)&&(o[t].priority=n,!0);default:return!1}},findTodo:function(t){if(o[t])return n({},o[t])}})}function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==l(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===l(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const m={saveProjects:function(t){var e=JSON.stringify(t);localStorage.setItem("projects",e)},getProjects:function(){return JSON.parse(localStorage.getItem("projects"))}};var p=document.querySelector(".add-form");const y={form:p,nameInput:p.elements.nameInput,addBtn:p.elements.addBtn,clear:function(){this.nameInput.value=""}},v={container:document.querySelector(".name-display"),setName:function(t){this.container.textContent=t}};function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const g={container:document.querySelector(".project-list"),get selected(){for(var t=0;t<this.container.children.length;t++){var e=this.container.children[t].projectName;if(e.classList.contains("project-list__project-name--selected"))return e.value}return null},clear:function(){this.container.innerHTML=""},createNameForm:function(t){var e=document.createElement("form");e.className="project-list__project";var r=document.createElement("input");r.type="text",r.readOnly=!0,r.dataset.projectName=t,r.value=t,r.className="project-list__project-name",r.name="projectName";var n=document.createElement("button");n.type="button",n.textContent="Edit",n.className="project-list__project-edit",n.name="projectEdit";var o=document.createElement("button");return o.type="button",o.textContent="delete",o.className="project-list__project-delete",o.name="projectDelete",e.append(r,n,o),e},render:function(t){var e;this.clear();var r,n=t.map(this.createNameForm);(e=this.container).append.apply(e,function(t){if(Array.isArray(t))return b(t)}(r=n)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(t,e){if(t){if("string"==typeof t)return b(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(t,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())},toggleReadOnly:function(t){t.readOnly=!t.readOnly},select:function(t){for(var e=0;e<this.container.children.length;e++){var r=this.container.children[e].projectName;r.classList.contains("project-list__project-name--selected")&&r.classList.remove("project-list__project-name--selected"),r.dataset.projectName===t&&r.classList.add("project-list__project-name--selected")}}};function j(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var h=document.querySelector(".todo-list"),O=h.querySelector(".todo-list__form"),S=h.querySelector(".todo-list__add-btn"),_=h.querySelector(".todo-list__todos");const L={nameDisplay:v,addForm:y,projectList:g,todoList:{container:h,form:O,addBtn:S,todos:_,createTodoElement:function(t){var e=document.createElement("div");e.className="todo-list__todo";var r=t.title,n=t.description,o=t.priority,i=t.duedate,a=i.getMonth()+"/"+i.getDate()+"/"+i.getFullYear();return e.textContent="".concat(r," | ").concat(n," | ").concat(a," | ").concat(o),e},clearTodos:function(){this.todos.innerHTML=""},hideForm:function(){this.form.classList.add("todo-list__form--hidden")},showForm:function(){this.form.classList.remove("todo-list__form--hidden")},toggleForm:function(){this.form.classList.toggle("todo-list__form--hidden")},renderTodos:function(t){var e;this.clearTodos();var r,n=Object.values(t).map(this.createTodoElement);(e=this.todos).append.apply(e,function(t){if(Array.isArray(t))return j(t)}(r=n)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(t,e){if(t){if("string"==typeof t)return j(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?j(t,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())}},sidebar:{sidebar:document.querySelector(".todo__sidebar"),toggleButton:document.querySelector(".todo__sidebar-toggle"),hide:function(){this.sidebar.classList.add("todo__sidebar--hidden"),this.toggleButton.checked=!1},show:function(){this.sidebar.classList.remove("todo__sidebar--hidden")},toggle:function(){this.sidebar.classList.contains("todo__sidebar--hidden")?this.show():this.hide()}}};var w,P,E=(P={},Object.freeze({get list(){return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},P)},add:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now(),r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(P[t])return!1;var n=u(t,e,r);return!!n&&(P[t]=n,!0)},remove:function(t){return!!P[t]&&(delete P[t],!0)},editName:function(t,e){if(P[e]||!P[t])return!1;if(P[t].name=e,P[t].name===e){var r=P[t];return delete P[t],P[e]=r,!0}return!1}}));function N(t){for(var e in t)t[e].duedate=new Date(t[e].duedate);return t}function D(){L.projectList.clear(),L.projectList.render(Object.keys(E.list))}function A(t){t&&(L.projectList.select(t),L.nameDisplay.setName(t),L.todoList.renderTodos(E.list[t].todos))}L.addForm.form.addEventListener("submit",(function(t){t.preventDefault();var e=L.addForm.nameInput.value;E.add(e)&&(D(),L.addForm.clear(),A(e),m.saveProjects(E.list))})),L.projectList.container.addEventListener("click",(function(t){return A(t.target.dataset.projectName)})),L.projectList.container.addEventListener("click",(function(t){if("project-list__project-edit"===t.target.className){var e=t.target.parentElement,r=t.target,n=e.projectName;n.readOnly?(L.projectList.toggleReadOnly(n),r.textContent="submit"):function(t,e,r){var n=t.projectName,o=t.projectEdit;if(e===r)return L.projectList.toggleReadOnly(n),void(o.textContent="Edit");E.editName(e,r)&&(n.value=r,n.dataset.projectName=r,L.projectList.toggleReadOnly(n),D(),A(r),m.saveProjects(E.list))}(e,n.dataset.projectName,n.value)}})),L.projectList.container.addEventListener("submit",(function(t){return t.preventDefault()})),L.projectList.container.addEventListener("click",(function(t){if(t.target.classList.contains("project-list__project-delete")){var e=t.target.parentElement.projectName.value;E.remove(e),D(),m.saveProjects(E.list)}})),L.sidebar.toggleButton.addEventListener("click",(function(){return L.sidebar.toggle()})),document.addEventListener("click",(function(t){L.sidebar.sidebar.contains(t.target)||t.target===L.sidebar.toggleButton||L.sidebar.hide()})),L.todoList.addBtn.addEventListener("click",(function(){return L.todoList.toggleForm()})),L.todoList.form.addEventListener("submit",(function(t){t.preventDefault();var e=L.projectList.selected;if(e){var r=L.todoList.form,n=r.title.value,o=r.description.value,i=new Date(r.duedate.value+"T00:00"),a=r.priority.value;E.list[e].addTodo(n,o,i,a)&&(L.todoList.renderTodos(E.list[e].todos),m.saveProjects(E.list))}})),(w=m.getProjects())&&0!==Object.keys(w).length?(function(t){var e=m.getProjects();for(var r in e)t.add(e[r].name,e[r].id,N(e[r].todos))}(E),D(),A(Object.keys(w)[0])):(E.add("Default Project"),D(),A("Default Project"),m.saveProjects(E.list))})();
//# sourceMappingURL=main.js.map