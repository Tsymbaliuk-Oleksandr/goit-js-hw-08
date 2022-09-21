import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

const refs = {
    form: document.querySelector(".feedback-form"),
    input: document.querySelector("input"),
    textarea: document.querySelector("textarea"),
};

refs.form.addEventListener("submit", onFormSubmit);
refs.form.addEventListener("input", throttle(onFormInput, 500));

let emailMessageLocalStor = {
    email: '',
    message: '',
  };

populateTexterea();

function onFormInput(evt) {
emailMessageLocalStor[evt.target.name] = evt.target.value;
    saveCurrentValueLokalStor(emailMessageLocalStor);
}

function saveCurrentValueLokalStor(obj) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
}

function onFormSubmit(evt) {
    evt.preventDefault(); 
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY))); 

    emailMessageLocalStor ={};

    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function populateTexterea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        const parsedValue = JSON.parse(savedMessage);
        // console.log(parsedValue);
        refs.input.value = parsedValue.email;
        refs.textarea.value = parsedValue.message;
        emailMessageLocalStor.email = parsedValue.email;
        emailMessageLocalStor.message = parsedValue.message;
    }
}
