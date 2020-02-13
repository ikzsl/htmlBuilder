
class ValidationError extends Error {
  constructor(message, ...errorList) {
    super(message);
    this.name = "ValidationError";
    this.errors = errorList;
  }

  getErrors() {
    return this.errors;
  }
}

const myError = new ValidationError('error1', 'error2', 'error3', 'error4');
console.log("TCL: myError", myError.getErrors());

myError.getErrors();
console.log("TCL: myError.getErrors()", myError.getErrors())
