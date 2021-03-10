export class FormValidator {
  constructor(ArrayClassForm) {
    this._classForm = ArrayClassForm.classForm;
    this._classInput = ArrayClassForm.classInput;
    this._inputInActive = ArrayClassForm.inputInActive;
    this._classButtonSubmit = ArrayClassForm.classButtonSubmit;
    this._buttonSubmitDisabled = ArrayClassForm.buttonSubmitDisabled;
    // this._errorSpanActive = ArrayClassForm.errorSpanActive;
    // this._errorSpanInActive = ArrayClassForm.errorSpanInActive;
  }

  _showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputInActive);
    errorElement.textContent = errorMessage;
    // errorElement.classList.add(this._errorSpanInActive);
  }

  _hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputInActive);
    // errorElement.classList.remove(this._errorSpanInActive);
    errorElement.textContent = '';
  }

  _checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(formElement, inputElement);
    }
  }

  _setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll(this._classInput));
    const buttonElement = formElement.querySelector(this._classButtonSubmit);
    this._toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(formElement, inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }

  enableValidation() {
    const formList = Array.from(document.querySelectorAll(this._classForm));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });

      this._setEventListeners(formElement);

      const fieldsetList = Array.from(formElement.querySelectorAll('.form__set'));

      fieldsetList.forEach((fieldSet) => {
        this._setEventListeners(fieldSet);
      });
    });
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._buttonSubmitDisabled);
      buttonElement.setAttribute('disabled', true);
    } else {
      buttonElement.classList.remove(this._buttonSubmitDisabled);
      buttonElement.removeAttribute('disabled');
    }
  }
}
