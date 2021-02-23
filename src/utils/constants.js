export const dataInputsRegister = [
  {
    text: 'Имя',
    addClass: '',
    inputKeys: {
      type: 'text',
      id: 'name-input-registration',
      minlength: '2',
      required: 'required',
    },
  },
  {
    text: 'E-mail',
    addClass: '',
    inputKeys: {
      type: 'email',
      id: 'email-input-registration',
      minlength: '2',
      required: 'required',
    },
  },
  {
    text: 'Пароль',
    addClass: '',
    inputKeys: {
      type: 'password',
      id: 'password-input-registration',
      minlength: '2',
      required: 'required',
    },
  },
];

export const dataInputsLogin = [
  {
    text: 'E-mail',
    addClass: '',
    inputKeys: {
      type: 'email',
      id: 'email-input-login',
      minlength: '2',
      required: 'required',
    },
  },
  {
    text: 'Пароль',
    addClass: '',
    inputKeys: {
      type: 'password',
      id: 'password-input-login',
      minlength: '2',
      required: 'required',
    },
  },
];
