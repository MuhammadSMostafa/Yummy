export default class Contact {
  constructor() {
    $(".form input").val("");
    $("#btn").attr("disabled", true);
    this.nameInput = document.getElementById("nameInput");
    this.emailInput = document.getElementById("emailInput");
    this.numberInput = document.getElementById("numberInput");
    this.ageInput = document.getElementById("ageInput");
    this.passwordInput = document.getElementById("passwordInput");
    this.repeatPasswordInput = document.getElementById("repeatPasswordInput");
    $(".form input").on("input", (e) => {
      if (
        this.validateInputs(this.nameInput) &&
        this.validateInputs(this.emailInput) &&
        this.validateInputs(this.numberInput) &&
        this.validateInputs(this.ageInput) &&
        this.validateInputs(this.passwordInput) &&
        this.validateInputs(this.repeatPasswordInput)
      ) {
        $("#btn").removeAttr("disabled");
      } else {
        $("#btn").attr("disabled", true);
      }
    });
  }

  validateInputs(element) {
    let text = element.value;
    var regex = {
      nameInput: /^[a-zA-Z]{3,}$/,
      emailInput: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      ageInput: /^([1-8][0-9]|90)$/,
      numberInput: /^\d{11}$/,
      passwordInput: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      repeatPasswordInput: new RegExp("^" + $("#passwordInput").val() + "$"),
    };
    if (text.length > 0) {
      if (regex[element.id].test(text)) {
        element.nextElementSibling.classList.add("hidden");
        return true;
      } else {
        element.nextElementSibling.classList.remove("hidden");
        return false;
      }
    }
  }
}
