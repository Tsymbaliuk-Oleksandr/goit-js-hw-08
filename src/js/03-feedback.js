// Підключаємо бібіліотеку "lodash.throttle" 
import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

const refs = {
    form: document.querySelector(".feedback-form"),
    textarea: document.querySelector(".feedback-form textarea"),
};

refs.form.addEventListener("submit", onFormSubmit);

refs.form.addEventListener("input", throttle(onTextereaInput, 500));

populateTexterea();


function onFormSubmit(evt) {
    evt.preventDefault();
    // console.log("Відправляємо форму");
    evt.currentTarget.reset();// скидаємо всі дані у формі, тобто очищаємо всі поля
    localStorage.removeItem(STORAGE_KEY);// очищаємо форму повідомлення користувача "localStorage", бо текст користувача не зникає в повідомленні, якщо цього не зробити
}

function onTextereaInput(evt) {
    const message = evt.target.value;
    console.log(message);
    localStorage.setItem(STORAGE_KEY, message);
}

function populateTexterea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        console.log(savedMessage);
        refs.textarea.value = savedMessage;
    }
}
