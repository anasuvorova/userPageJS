//добавляю ручную генерацию элементов
const createTemplate = (template) => {
  const element = document.createElement("div");
  element.insertAdjacentHTML("beforeend", template);
  return element.firstElementChild;
};

class userCard {
  _stateShow = {
    //контактная информация скрыта
    info: false,
  };

  _stateHide = {
    displayNone: true,
  };

  constructor({ photo, name, surname, nik, birthday, town, button, email, phone }) {
    this._photo = photo;
    this._name = name;
    this._surname = surname;
    this._nik = nik;
    this._birthday = birthday;
    this._town = town;
    this._button = button;
    this._email = email;
    this._phone = phone;
    this._init();
  }

  _init() {
    //console.log(`start`);
    this._element = createTemplate(this._getTemplate());
    this._addListeners();
    this._render();
  }
  get element() {
    return this._element;
  }
  _getTemplate() {
    return `<div class="user-card">
    <img class="user-card__photo" src="${this._photo}" alt="photo"/ >

    <div class = "user-card__info">
     <span class="user-card__name">${this._name}</span>
      <span class="user-card__surname">${this._surname}</span>
      <span class="user-card__nik">${this._nik}</span>
      <span class="user-card__birthday">${this._birthday}</span>
      <span class="user-card__town">${this._town}</span>
    
     
      <button class="user-card__button">${this._button}</button>
  </div>

<div class= "user-card__contacts">
  <ul class="user-card__connection" style="display: none;">
        <li>${this._email}</li>
         <li>${this._phone}</li>
      </ul>
      </div>
    
    </div>`;
  }

  _setStateShowInfo(newStateShow) {
    this._stateShow.info = newStateShow;
  }

  _setStateHideInfo(newStateHide) {
    this._stateHide = newStateHide;
  }

  _addListeners() {
    const button = this._element.querySelector(".user-card__button");

    button.addEventListener("click", () => {
      this._setStateShowInfo(!this._stateShow.info);
      this._render();
    });
  }
  _render() {
    const showContactInfo = this._element.querySelector(".user-card__connection");
    const button = this._element.querySelector(".user-card__button");

    if (this._stateShow.info === true) {
      showContactInfo.style.display = "block";
      showContactInfo.classList.add("active");
      button.textContent = "Скрыть";
    } else {
      showContactInfo.style.display = "none";
      showContactInfo.classList.remove("active");
      button.textContent = "показать";
    }
  }
}
const userPage = document.querySelector(".root");

userPage.insertAdjacentElement(
  "beforeend",
  new userCard({
    photo: "./img/programmer.jpg",
    name: "Имя: Иван",
    surname: "Фамилия: Иванов",
    nik: "Ник: Ivan",
    birthday: "Дата рождения: 11.11.1990",
    town: "Город: Москва",
    button: "показать контактную информацию",
    email: "Email: ivanov@yandex.ru",
    phone: "Телефон: +7-888-888-88-88",
  }).element
);
