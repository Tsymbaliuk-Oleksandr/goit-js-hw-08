import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

const refs = {
    form: document.querySelector(".feedback-form"),
    input: document.querySelector("input"),
    textarea: document.querySelector("textarea"),
};

refs.form.addEventListener("submit", onFormSubmit);
refs.form.addEventListener("input", throttle(onFormInput, 500));

const emailMessageLocalStor = {
    email: '',
    message: '',
  };

populateTexterea();

function onFormInput(event) {

emailMessageLocalStor[event.target.name] = event.target.value;
    saveCurrentValueLokalStor(emailMessageLocalStor);
}

function saveCurrentValueLokalStor(obj) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
}

function onFormSubmit(evt) {
    evt.preventDefault(); 
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY))); 

    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function populateTexterea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        // console.log(savedMessage);
        refs.input.value = JSON.parse.savedMessage;
        refs.textarea.value = JSON.parse.savedMessage;
    }
}
