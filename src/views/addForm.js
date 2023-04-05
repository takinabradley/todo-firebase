const addFormElement = document.querySelector(".add-form")
const addForm = {
  form: addFormElement,
  nameInput: addFormElement.elements.nameInput,
  addBtn: addFormElement.elements.addBtn,
  clear() {
    this.nameInput.value = ""
  }
}

export default addForm
