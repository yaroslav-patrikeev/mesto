const popup = document.querySelector('.popup');
const profile = document.querySelector('.profile');

const editButton = profile.querySelector('.profile__edit-button');
const profileName = profile.querySelector('.profile__name');
const profileStatus = profile.querySelector('.profile__status');

const popupButton = popup.querySelector('.popup__button');
const inputName = popup.querySelector('.popup__input_field_name');
const inputStatus = popup.querySelector('.popup__input_field_status');
const closeIcon = popup.querySelector('.popup__close');

editButton.addEventListener('click', function () {
  inputName.value = profileName.innerText;
  inputStatus.value = profileStatus.innerText;
  popup.classList.add('popup_opened');
});

closeIcon.addEventListener('click', function () {popup.classList.remove('popup_opened');});

const popupForm = popup.querySelector('.popup__content')
popupForm.addEventListener('submit', function (event) {
  profileName.innerText = inputName.value;
  profileStatus.innerText = inputStatus.value;
  popup.classList.remove('popup_opened');
  event.preventDefault();
});
