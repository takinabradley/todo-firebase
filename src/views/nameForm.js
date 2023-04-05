import EventEmitter from "../modules/EventEmitter"
const nameFormElement = document.querySelector(".name-form")
const nameForm = EventEmitter()
Object.assign(nameForm, {
  form: nameFormElement,
  nameInput: nameFormElement.elements.nameInput,
  editBtn: nameFormElement.elements.editBtn,
  currentName: "",
  toggleReadOnly() {
    if (this.nameInput.readOnly) {
      this.unsetReadOnly()
    } else {
      this.setReadOnly()
    }
  },
  unsetReadOnly() {
    this.nameInput.readOnly = false
    this.nameInput.classList.remove("name-form__name-input--readonly")
    this.emit("unsetReadOnly")
  },
  setReadOnly() {
    this.nameInput.readOnly = true
    this.nameInput.classList.add("name-form__name-input--readonly")
    this.emit("setReadOnly", {
      currentName: this.currentName,
      newName: this.nameInput.value
    })
  },
  resizeInput() {
    const length = this.nameInput.value.length
    const newLength = length / 2 + 1 + "em"
    this.nameInput.style.width = newLength
  },
  scrollToStart() {
    this.nameInput.scrollLeft = 0
  }
})

export default nameForm
