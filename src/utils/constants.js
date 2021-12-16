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

export const translations = {
  "true": {
    main: {
      promo: "Web development student's learning project.",
      aboutProject: [
        "About the project",
        "The diploma project consisted of 5 stages",
        "It took 5 weeks to complete the diploma",
        "The design, backend work, layout, adding functionality, and finishing up",
        "Each stage had a soft and hard deadline that had to be met in order to successfully defend.",
        "week",
        "weeks",
      ],
      techs: [
        "Technology",
        "technologies",
        "In the web development course we mastered the technologies that we applied in the graduation project.",
      ],
      aboutMe: [
        "Student",
        "Ivan",
        "Web developer, 18 years old",
        "I was born in Krasnoyarsk, but now I live in Moscow and study at the Faculty of Information Technology at Moscow Polytechnic University. I like listening to music, and I also like rock climbing. Recently I started coding. After I took a course in web development, I started freelance assignments and left my regular job.",
        "Portfolio",
        "Static website",
        "Adaptive website",
        "Single-page react application",
      ],
      footer: [
        "Yandex.Praktikum x BeatFilm learning project.",
        "Yandex.Practicum",
      ],
    },
    movies: [
      "Please make a request",
      "Movies not found",
      "More",
    ],
    searchForm: [
      "Short films",
      "Film",
    ],
    navTab: [
      "Home",
      "Movies",
      "Saved movies",
      "Account",
      "Welcome!",
      "Good to see you!",
      "Registration",
      "Sign in",
    ],
    profile: [
      "Hello",
      "Name",
      "Email",
      "Edit",
      "Save",
      "Sign out of account",
    ],
    sign: [
      "Name",
      "Password",
      "Register",
      "Already registered?",
      "Login",
      "Not registered yet?",
      "Register",
    ],
    moviesCard: [
      "h",
      "m",
      "Save",
    ],
  },
  "false": {
    main: {
      promo: "Учебный проект студента факультета Веб-разработки.",
      aboutProject: [
        "О проекте",
        "Дипломный проект включал 5 этапов",
        "На выполнение диплома ушло 5 недель",
        "Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.",
        "У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.",
        "неделя",
        "недели",
      ],
      techs: [
        "Технологии",
        "технологий",
        "На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.",
      ],
      aboutMe: [
        "Студент",
        "Иван",
        "Веб-разработчик, 18 лет",
        "Я родился в Красноярске, но сейчас живу в Москве, учусь на факультете информационных технологий в Московском политехническом университете. Я люблю слушать музыку, а ещё увлекаюсь скалолазанием. Недавно начал кодить. После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.",
        "Портфолио",
        "Статичный сайт",
        "Адаптивный сайт",
        "Одностраничное react приложение",
      ],
      footer: [
        "Учебный проект Яндекс.Практикум х BeatFilm.",
        "Яндекс.Практикум",
      ],
    },
    movies: [
      "Пожалуйста, сделайте запрос",
      "Фильмы не найдены",
      "Ещё",
    ],
    searchForm: [
      "Короткометражки",
      "Фильм",
    ],
    navTab: [
      "Главная",
      "Фильмы",
      "Сохранённые фильмы",
      "Аккаунт",
      "Добро пожаловать!",
      "Рады видеть!",
      "Регистрация",
      "Войти",
    ],
    profile: [
      "Привет",
      "Имя",
      "Почта",
      "Редактировать",
      "Сохранить",
      "Выйти из аккаунта",
    ],
    sign: [
      "Имя",
      "Пароль",
      "Зарегистрироваться",
      "Уже зарегистрированы?",
      "Войти",
      "Ещё не зарегистрированы?",
      "Регистрация",
    ],
    moviesCard: [
      "ч",
      "м",
      "Сохранить",
    ],
  },
};
