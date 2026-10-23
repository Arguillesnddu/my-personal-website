"use strict";

const form = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");

if (form && formMessage) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        formMessage.textContent =
            "Thank you! This demo form does not send or save your message.";

        form.reset();
    });
}
