/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/helpers/isEmptyString.js":
/*!**************************************!*\
  !*** ./src/helpers/isEmptyString.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var isAllSpaces = function isAllSpaces(string) {
  return _toConsumableArray(string).every(function (_char) {
    return _char === " ";
  });
};
var isEmptyString = function isEmptyString(string) {
  if (typeof string !== "string") return false;
  if (string.length === 0 || isAllSpaces(string)) return true;
  return false;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isEmptyString);

/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo */ "./src/modules/Todo.js");
/* harmony import */ var _helpers_isEmptyString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/isEmptyString */ "./src/helpers/isEmptyString.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


var isString = function isString(value) {
  return typeof value === "string";
};
var isDate = function isDate(value) {
  return Date.prototype.isPrototypeOf(value);
};
var isHighMediumOrLow = function isHighMediumOrLow(value) {
  switch (value) {
    case "high":
      return true;
    case "medium":
      return true;
    case "low":
      return true;
    default:
      return false;
  }
};
function Project(name) {
  var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Date.now();
  var todos = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (typeof name !== "string" || (0,_helpers_isEmptyString__WEBPACK_IMPORTED_MODULE_1__["default"])(name)) return;
  if (_typeof(todos) !== "object") return;
  function addTodo() {
    var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var description = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var duedate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Date();
    var priority = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "medium";
    if (!isString(title) || todos[title] || (0,_helpers_isEmptyString__WEBPACK_IMPORTED_MODULE_1__["default"])(title)) return false;
    if (!isString(description)) return false;
    if (!isDate(duedate)) return false;
    if (!isHighMediumOrLow(priority)) return false;
    todos[title] = (0,_Todo__WEBPACK_IMPORTED_MODULE_0__["default"])(title, description, duedate, priority);
    return true;
  }
  function removeTodo(title) {
    if (!todos[title]) return false;
    delete todos[title];
    return true;
  }
  function editTodo(title, field, change) {
    if (!todos[title]) return false;
    switch (field) {
      case "title":
        if (isString(change) && !(0,_helpers_isEmptyString__WEBPACK_IMPORTED_MODULE_1__["default"])(change) && !todos[change]) {
          var newTitle = change;
          var oldTitle = title;
          var temp = todos[oldTitle];
          temp.title = newTitle;
          delete todos[oldTitle];
          todos[newTitle] = temp;
          return true;
        } else {
          return false;
        }
      case "description":
        if (isString(change)) {
          todos[title].description = change;
          return true;
        } else {
          return false;
        }
      case "duedate":
        if (isDate(change)) {
          todos[title].duedate = change;
          return true;
        } else {
          return false;
        }
      case "priority":
        if (isHighMediumOrLow(change)) {
          todos[title].priority = change;
          return true;
        } else {
          return false;
        }
      default:
        return false;
    }
  }
  function findTodo(title) {
    if (!todos[title]) return;
    return _objectSpread({}, todos[title]);
  }
  function _copyTodos() {
    var todoCopy = _objectSpread({}, todos);
    for (var key in todoCopy) {
      todoCopy[key] = _objectSpread({}, todoCopy[key]);
    }
    return todoCopy;
  }
  return Object.freeze({
    get name() {
      return name;
    },
    set name(newName) {
      if (typeof newName !== "string" || (0,_helpers_isEmptyString__WEBPACK_IMPORTED_MODULE_1__["default"])(newName)) return;
      name = newName;
    },
    get id() {
      return id;
    },
    get todos() {
      return _copyTodos();
    },
    addTodo: addTodo,
    removeTodo: removeTodo,
    editTodo: editTodo,
    findTodo: findTodo
  });
}

/***/ }),

/***/ "./src/modules/ProjectList.js":
/*!************************************!*\
  !*** ./src/modules/ProjectList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectList)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/modules/Project.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function ProjectList() {
  var list = {};
  function add(name) {
    var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Date.now();
    var todos = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (list[name]) return false;
    var newProject = (0,_Project__WEBPACK_IMPORTED_MODULE_0__["default"])(name, id, todos);
    if (!newProject) return false;
    list[name] = newProject;
    return true;
  }
  function remove(name) {
    if (!list[name]) return false;
    delete list[name];
    return true;
  }

  /* Note: Project names should only be changed via this function */
  function editName(name, newName) {
    // if the newName already exists, or the current name doesn't exist, don't allow
    if (list[newName] || !list[name]) return false;
    // attempt to change name
    list[name].name = newName;

    // Check if the name changed to know it's a valid name
    if (list[name].name === newName) {
      var temp = list[name];
      delete list[name];
      list[newName] = temp;
      return true;
    } else {
      return false;
    }
  }
  function _copyList() {
    return _objectSpread({}, list);
  }
  return Object.freeze({
    get list() {
      return _copyList();
    },
    add: add,
    remove: remove,
    editName: editName
  });
}

/***/ }),

/***/ "./src/modules/Todo.js":
/*!*****************************!*\
  !*** ./src/modules/Todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_isEmptyString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/isEmptyString */ "./src/helpers/isEmptyString.js");

function Todo(title, description, duedate, priority) {
  var id = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : Date.now();
  if (typeof title !== "string" || (0,_helpers_isEmptyString__WEBPACK_IMPORTED_MODULE_0__["default"])(title)) return;
  return {
    title: title,
    description: description,
    duedate: duedate,
    priority: priority,
    get id() {
      return id;
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);

/***/ }),

/***/ "./src/modules/TodoController.js":
/*!***************************************!*\
  !*** ./src/modules/TodoController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectList */ "./src/modules/ProjectList.js");
/* harmony import */ var _storageManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storageManager */ "./src/modules/storageManager.js");
/* harmony import */ var _views_views__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/views */ "./src/views/views.js");



var projects = (0,_ProjectList__WEBPACK_IMPORTED_MODULE_0__["default"])();
function reviveTodoData(todos) {
  /* changes the duedate in all the todos to be an actual date object. 
     modified the incoming object 
  */
  for (var todo in todos) {
    todos[todo].duedate = new Date(todos[todo].duedate);
  }
  return todos;
}
function addStoredProjectsToProjectList(projectList) {
  var storedProjects = _storageManager__WEBPACK_IMPORTED_MODULE_1__["default"].getProjects();
  for (var project in storedProjects) {
    var success = projectList.add(storedProjects[project].name, storedProjects[project].id, reviveTodoData(storedProjects[project].todos));
  }
}
function getProjectNames() {
  return Object.keys(projects.list);
}
function renderProjectList() {
  /* clear the current list of projects and render the new one  */
  _views_views__WEBPACK_IMPORTED_MODULE_2__["default"].projectList.clear();
  _views_views__WEBPACK_IMPORTED_MODULE_2__["default"].projectList.render(getProjectNames());
}
function addNewProjectAndRenderProjectList(e) {
  /* 
    Add new project and clears form if the project name is valid.
    Otherwise, do nothing.
  */
  e.preventDefault();
  var newProjectName = _views_views__WEBPACK_IMPORTED_MODULE_2__["default"].addForm.nameInput.value;
  var wasAdded = projects.add(newProjectName);
  if (wasAdded) {
    renderProjectList();
    _views_views__WEBPACK_IMPORTED_MODULE_2__["default"].addForm.clear();
    selectProject(newProjectName);
    _storageManager__WEBPACK_IMPORTED_MODULE_1__["default"].saveProjects(projects.list);
  }
}
function selectProject(projectName) {
  /* 
    Highlight project name in list and set the current value in nameDisplay 
    to be the project name
  */
  if (projectName) {
    _views_views__WEBPACK_IMPORTED_MODULE_2__["default"].projectList.select(projectName);
    _views_views__WEBPACK_IMPORTED_MODULE_2__["default"].nameDisplay.setName(projectName);
    _views_views__WEBPACK_IMPORTED_MODULE_2__["default"].todoList.renderTodos(projects.list[projectName].todos);
  }
}
function changeProjectName(form, currentName, newName) {
  /* Change a project name if it should be changed, and re-render the list of 
    projects if it is changed */
  var nameInput = form.projectName;
  var editBtn = form.projectEdit;
  if (currentName === newName) {
    _views_views__WEBPACK_IMPORTED_MODULE_2__["default"].projectList.toggleReadOnly(nameInput);
    editBtn.textContent = "Edit";
    return;
  }
  var wasChanged = projects.editName(currentName, newName);
  if (wasChanged) {
    nameInput.value = newName;
    nameInput.dataset.projectName = newName;
    _views_views__WEBPACK_IMPORTED_MODULE_2__["default"].projectList.toggleReadOnly(nameInput);
    renderProjectList();
    selectProject(newName);
    _storageManager__WEBPACK_IMPORTED_MODULE_1__["default"].saveProjects(projects.list);
  }
}
function handleEditProjectName(e) {
  /* 
    If an input in the list of projects is read-only, allow input and show a 
    submit button
     If it is not readonly, try to change the project name and return the input
    to a read-only state
  */
  if (e.target.className !== "project-list__project-edit") return;
  var form = e.target.parentElement;
  var editBtn = e.target;
  var nameInput = form.projectName;
  if (nameInput.readOnly) {
    _views_views__WEBPACK_IMPORTED_MODULE_2__["default"].projectList.toggleReadOnly(nameInput);
    editBtn.textContent = "submit";
  } else {
    var currentName = nameInput.dataset.projectName;
    changeProjectName(form, currentName, nameInput.value);
  }
}
function addTodoFromFormInfo(e) {
  /* attempt to add a todo to a project when the 'Add Todo' form is submitted */
  e.preventDefault();
  var selectedProject = _views_views__WEBPACK_IMPORTED_MODULE_2__["default"].projectList.selected;
  if (!selectedProject) return;
  var form = _views_views__WEBPACK_IMPORTED_MODULE_2__["default"].todoList.form;
  var title = form.title.value;
  var description = form.description.value;
  var duedate = new Date(form.duedate.value + "T00:00");
  var priority = form.priority.value;
  var success = projects.list[selectedProject].addTodo(title, description, duedate, priority);
  if (success) {
    _views_views__WEBPACK_IMPORTED_MODULE_2__["default"].todoList.renderTodos(projects.list[selectedProject].todos);
    _storageManager__WEBPACK_IMPORTED_MODULE_1__["default"].saveProjects(projects.list);
  }
}
function loadProjects() {
  var storedProjects = _storageManager__WEBPACK_IMPORTED_MODULE_1__["default"].getProjects();
  if (storedProjects && Object.keys(storedProjects).length !== 0) {
    addStoredProjectsToProjectList(projects);
    renderProjectList();
    selectProject(Object.keys(storedProjects)[0]); // select first project in list
    /* do some firebase shenanegans */
  } else {
    projects.add("Default Project");
    renderProjectList();
    selectProject("Default Project");
    _storageManager__WEBPACK_IMPORTED_MODULE_1__["default"].saveProjects(projects.list);
  }
}
function deleteProject(e) {
  if (!e.target.classList.contains("project-list__project-delete")) return;
  var form = e.target.parentElement;
  var projectName = form.projectName.value;
  projects.remove(projectName);
  renderProjectList();
  _storageManager__WEBPACK_IMPORTED_MODULE_1__["default"].saveProjects(projects.list);
}

/* 

  ~~~~~ Event Listeners ~~~~~

*/
function applyAddFormListeners() {
  /* attempt to add a new project when the add form submits */
  _views_views__WEBPACK_IMPORTED_MODULE_2__["default"].addForm.form.addEventListener("submit", addNewProjectAndRenderProjectList);
}
function applyProjectListListeners() {
  /* 
    Select the project in the sidebar and render the todos when a project name
    is clicked
  */
  _views_views__WEBPACK_IMPORTED_MODULE_2__["default"].projectList.container.addEventListener("click", function (e) {
    return selectProject(e.target.dataset.projectName);
  });

  /* 
    handle editing of project names when the edit buttons are clicked in the
    sidebar
  */
  _views_views__WEBPACK_IMPORTED_MODULE_2__["default"].projectList.container.addEventListener("click", handleEditProjectName);
  _views_views__WEBPACK_IMPORTED_MODULE_2__["default"].projectList.container.addEventListener("submit", function (e) {
    return e.preventDefault();
  });

  /* Delete a project when a delete button is pressed */
  _views_views__WEBPACK_IMPORTED_MODULE_2__["default"].projectList.container.addEventListener("click", deleteProject);
}
function applySidebarListeners() {
  _views_views__WEBPACK_IMPORTED_MODULE_2__["default"].sidebar.toggleButton.addEventListener("click", function () {
    return (/* show/hide sidebar when the toggle button is clicked */
      _views_views__WEBPACK_IMPORTED_MODULE_2__["default"].sidebar.toggle()
    );
  });
  document.addEventListener("click", function (e) {
    /* Hide sidebar when it's clicked away from */
    if (_views_views__WEBPACK_IMPORTED_MODULE_2__["default"].sidebar.sidebar.contains(e.target) || e.target === _views_views__WEBPACK_IMPORTED_MODULE_2__["default"].sidebar.toggleButton) {
      return;
    }
    _views_views__WEBPACK_IMPORTED_MODULE_2__["default"].sidebar.hide();
  });
}
function applyTodoListListeners() {
  _views_views__WEBPACK_IMPORTED_MODULE_2__["default"].todoList.addBtn.addEventListener("click", function () {
    return (/* Hide and show todo list form when the 'Add Todo' button is clicked */
      _views_views__WEBPACK_IMPORTED_MODULE_2__["default"].todoList.toggleForm()
    );
  });
  _views_views__WEBPACK_IMPORTED_MODULE_2__["default"].todoList.form.addEventListener("submit", addTodoFromFormInfo);
}
function applyAppListeners() {
  applyAddFormListeners();
  applyProjectListListeners();
  applySidebarListeners();
  applyTodoListListeners();
}
applyAppListeners();
loadProjects();

/***/ }),

/***/ "./src/modules/storageManager.js":
/*!***************************************!*\
  !*** ./src/modules/storageManager.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function saveProjects(projectList) {
  var stringifiedProjects = JSON.stringify(projectList);
  localStorage.setItem("projects", stringifiedProjects);
}
function getProjects() {
  return JSON.parse(localStorage.getItem("projects"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  saveProjects: saveProjects,
  getProjects: getProjects
});

/***/ }),

/***/ "./src/views/addForm.js":
/*!******************************!*\
  !*** ./src/views/addForm.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var addFormElement = document.querySelector(".add-form");
var addForm = {
  form: addFormElement,
  nameInput: addFormElement.elements.nameInput,
  addBtn: addFormElement.elements.addBtn,
  clear: function clear() {
    this.nameInput.value = "";
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addForm);

/***/ }),

/***/ "./src/views/nameDisplay.js":
/*!**********************************!*\
  !*** ./src/views/nameDisplay.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var nameDisplayElement = document.querySelector(".name-display");
var nameDisplay = {
  container: nameDisplayElement,
  setName: function setName(name) {
    this.container.textContent = name;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nameDisplay);

/***/ }),

/***/ "./src/views/projectList.js":
/*!**********************************!*\
  !*** ./src/views/projectList.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var projectListContainer = document.querySelector(".project-list");
var projectList = {
  container: projectListContainer,
  get selected() {
    /* find the project the user selected, and return it's name */
    for (var i = 0; i < this.container.children.length; i++) {
      var nameInput = this.container.children[i].projectName;
      if (nameInput.classList.contains("project-list__project-name--selected")) {
        return nameInput.value;
      }
    }

    /* If nothing is found, return null */
    return null;
  },
  clear: function clear() {
    this.container.innerHTML = "";
  },
  createNameForm: function createNameForm(projectName) {
    var nameForm = document.createElement("form");
    nameForm.className = "project-list__project";
    nameForm;
    var nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.readOnly = true;
    nameInput.dataset.projectName = projectName;
    nameInput.value = projectName;
    nameInput.className = "project-list__project-name";
    nameInput.name = "projectName";
    var editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.textContent = "Edit";
    editBtn.className = "project-list__project-edit";
    editBtn.name = "projectEdit";
    var deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.textContent = "delete";
    deleteBtn.className = "project-list__project-delete";
    deleteBtn.name = "projectDelete";
    nameForm.append(nameInput, editBtn, deleteBtn);
    return nameForm;
  },
  render: function render(nameArray) {
    var _this$container;
    this.clear();
    var elements = nameArray.map(this.createNameForm);
    (_this$container = this.container).append.apply(_this$container, _toConsumableArray(elements));
  },
  toggleReadOnly: function toggleReadOnly(nameInput) {
    nameInput.readOnly = !nameInput.readOnly;
  },
  select: function select(selectedName) {
    // loop through all forms, remove selected class from each, and add selected
    // class to selected element
    for (var i = 0; i < this.container.children.length; i++) {
      var nameInput = this.container.children[i].projectName;
      if (nameInput.classList.contains("project-list__project-name--selected")) {
        nameInput.classList.remove("project-list__project-name--selected");
      }
      if (nameInput.dataset.projectName === selectedName) {
        nameInput.classList.add("project-list__project-name--selected");
      }
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectList);

/***/ }),

/***/ "./src/views/sidebar.js":
/*!******************************!*\
  !*** ./src/views/sidebar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var container = document.querySelector(".todo__sidebar");
var toggleButton = document.querySelector(".todo__sidebar-toggle");
var sidebar = {
  sidebar: container,
  toggleButton: toggleButton,
  hide: function hide() {
    this.sidebar.classList.add("todo__sidebar--hidden");
    this.toggleButton.checked = false;
  },
  show: function show() {
    this.sidebar.classList.remove("todo__sidebar--hidden");
  },
  toggle: function toggle() {
    if (this.sidebar.classList.contains("todo__sidebar--hidden")) {
      this.show();
    } else {
      this.hide();
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sidebar);

/***/ }),

/***/ "./src/views/todoList.js":
/*!*******************************!*\
  !*** ./src/views/todoList.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var container = document.querySelector(".todo-list");
var form = container.querySelector(".todo-list__form");
var addBtn = container.querySelector(".todo-list__add-btn");
var todos = container.querySelector(".todo-list__todos");
var todoList = {
  container: container,
  form: form,
  addBtn: addBtn,
  todos: todos,
  createTodoElement: function createTodoElement(todo) {
    var todoElement = document.createElement("div");
    todoElement.className = "todo-list__todo";
    var title = todo.title,
      description = todo.description,
      priority = todo.priority,
      duedate = todo.duedate;
    var dateString = duedate.getMonth() + "/" + duedate.getDate() + "/" + duedate.getFullYear();
    todoElement.textContent = "".concat(title, " | ").concat(description, " | ").concat(dateString, " | ").concat(priority);
    return todoElement;
  },
  clearTodos: function clearTodos() {
    this.todos.innerHTML = "";
  },
  hideForm: function hideForm() {
    this.form.classList.add("todo-list__form--hidden");
  },
  showForm: function showForm() {
    this.form.classList.remove("todo-list__form--hidden");
  },
  toggleForm: function toggleForm() {
    this.form.classList.toggle("todo-list__form--hidden");
  },
  renderTodos: function renderTodos(list) {
    var _this$todos;
    this.clearTodos();
    var todoElements = Object.values(list).map(this.createTodoElement);
    (_this$todos = this.todos).append.apply(_this$todos, _toConsumableArray(todoElements));
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoList);

/***/ }),

/***/ "./src/views/views.js":
/*!****************************!*\
  !*** ./src/views/views.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addForm */ "./src/views/addForm.js");
/* harmony import */ var _nameDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nameDisplay */ "./src/views/nameDisplay.js");
/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectList */ "./src/views/projectList.js");
/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoList */ "./src/views/todoList.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar */ "./src/views/sidebar.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  nameDisplay: _nameDisplay__WEBPACK_IMPORTED_MODULE_1__["default"],
  addForm: _addForm__WEBPACK_IMPORTED_MODULE_0__["default"],
  projectList: _projectList__WEBPACK_IMPORTED_MODULE_2__["default"],
  todoList: _todoList__WEBPACK_IMPORTED_MODULE_3__["default"],
  sidebar: _sidebar__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/stylesheets/index.scss":
/*!************************************!*\
  !*** ./src/stylesheets/index.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/stylesheets/todo.scss":
/*!***********************************!*\
  !*** ./src/stylesheets/todo.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stylesheets_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylesheets/index.scss */ "./src/stylesheets/index.scss");
/* harmony import */ var _stylesheets_todo_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stylesheets/todo.scss */ "./src/stylesheets/todo.scss");
/* harmony import */ var _modules_TodoController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/TodoController */ "./src/modules/TodoController.js");




// Import the functions you need from the SDKs you need

/* import app from "./modules/firebaseApp"
import db from "./modules/firestore"
import {
  doc,
  setDoc,
  addDoc,
  getDoc,
  onSnapshot,
  collection
} from "firebase/firestore"
import { getAuth } from "firebase/auth"

const userProjectDoc = doc(db, "projects/Default")

async function readProjects(projectDoc) {
  const snapshot = await getDoc(projectDoc)
  if (snapshot.exists()) {
    return snapshot.data()
  }
}

async function writeProjects(projectDoc, data) {
  setDoc(projectDoc, data)
}

function addToData(projectDoc, data) {
  if (typeof data.num === "number") {
    writeProjects(projectDoc, { num: data.num + 1 })
  } else {
    writeProjects(projectDoc, { num: 0 })
  }
}

async function readThenWrite() {
  const data = await readProjects(userProjectDoc)
  console.log(data)
  addToData(userProjectDoc, data)
}
readThenWrite() */

/* const specialOfTheDay = doc(db, "special/today")
async function writeDailySpecial() {
  const data = {
    description: "Very special"
  }
  await setDoc(specialOfTheDay, data)
}

async function readDailySpecial() {
  const snapshot = await getDoc(specialOfTheDay)

  if (snapshot.exists()) {
    console.log(snapshot.data())
  }
}

const unsub = onSnapshot(specialOfTheDay, readDailySpecial)
writeDailySpecial().then(unsub) */
})();

/******/ })()
;
//# sourceMappingURL=main.js.map