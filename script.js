// =================================================
// TUP EATS - JAVASCRIPT
// Module 8.1
// =================================================


// -------------------------------------------------
// GUIDE INFORMATION
// -------------------------------------------------

const guideName = "TUP Eats";
const currentYear = new Date().getFullYear();


// -------------------------------------------------
// RUNNING COUNT
// Starts at 0 as required
// -------------------------------------------------

let reviewedPlaces = 0;


// -------------------------------------------------
// WRITE GUIDE NAME INTO THE PAGE
// -------------------------------------------------

const guideNameElement = document.getElementById("guideName");

if (guideNameElement) {
    guideNameElement.textContent = guideName;
}


// -------------------------------------------------
// COUNT REVIEWED PLACES
// The count is computed from the actual place cards
// on the page instead of being manually typed.
// -------------------------------------------------

const placeCards = document.querySelectorAll(".place-card");

placeCards.forEach(function () {
    reviewedPlaces += 1;
});


// -------------------------------------------------
// DISPLAY COMPUTED PLACE COUNT
// -------------------------------------------------

const placeCountElement = document.getElementById("placeCount");

if (placeCountElement) {
    placeCountElement.textContent = reviewedPlaces;
}


// -------------------------------------------------
// DYNAMIC COPYRIGHT
// -------------------------------------------------

const copyrightElement = document.getElementById("copyright");

if (copyrightElement) {
    copyrightElement.textContent =
        "© " + currentYear + " " + guideName + ". Student Food Guide.";
}


// -------------------------------------------------
// CONSOLE LOGS
// At least three labelled values are required.
// -------------------------------------------------

console.log("Guide name:", guideName);
console.log("Current year:", currentYear);
console.log("Reviewed places:", reviewedPlaces);


// =================================================
// CONTACT FORM
// =================================================

const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");

if (contactForm && formSuccess) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        if (!contactForm.checkValidity()) {

            contactForm.reportValidity();

            return;
        }

        formSuccess.hidden = false;

        contactForm.reset();

        formSuccess.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });

    });

}


// =================================================
// SUGGEST A PLACE FORM
// =================================================

const suggestForm = document.getElementById("suggestForm");
const suggestSuccess = document.getElementById("suggestSuccess");

if (suggestForm && suggestSuccess) {

    suggestForm.addEventListener("submit", function (event) {

        event.preventDefault();

        if (!suggestForm.checkValidity()) {

            suggestForm.reportValidity();

            return;
        }

        suggestSuccess.hidden = false;

        suggestForm.reset();

        suggestSuccess.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });

    });

}