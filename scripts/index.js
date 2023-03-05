const popup = document.querySelector('.popup');
const profile = document.querySelector('.profile');

const editButton = profile.querySelector('.profile__edit-button');
const profileName = profile.querySelector('.profile__name');
const profileStatus = profile.querySelector('.profile__status');

const popupButton = popup.querySelector('.popup__button');
const inputName = popup.querySelector('.popup__input:first-of-type');
const inputStatus = popup.querySelector('.popup__input:last-of-type');
const closeIcon = popup.querySelector('.popup__close');

const togglePopupView = () => {
  popup.classList.toggle('popup_opened');
}

editButton.addEventListener('click', togglePopupView);
closeIcon.addEventListener('click', togglePopupView);
inputName.value = profileName.innerText;
inputStatus.value = profileStatus.innerText;
popupButton.addEventListener('click', function () {
  profileName.innerText = inputName.value;
  profileStatus.innerText = inputStatus.value;
  togglePopupView();
});
