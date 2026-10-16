
// =================================================
// TUP EATS - JAVASCRIPT
// Activities 8.1 and 8.3
// =================================================


// -------------------------------------------------
// 1. GUIDE INFORMATION
// -------------------------------------------------

const guideName = "TUP Eats";
const currentYear = new Date().getFullYear();


// -------------------------------------------------
// 2. RUNNING COUNT
// -------------------------------------------------

let reviewedPlaces = 0;


// -------------------------------------------------
// 3. DISPLAY GUIDE NAME
// -------------------------------------------------

const guideNameElement = document.getElementById("guideName");

if (guideNameElement) {
    guideNameElement.textContent = guideName;
}


// -------------------------------------------------
// 4. COUNT REVIEWED PLACES
// -------------------------------------------------

const placeCards = document.querySelectorAll(".place-card");

placeCards.forEach(function () {
    reviewedPlaces += 1;
});

const placeCountElement = document.getElementById("placeCount");

if (placeCountElement) {
    placeCountElement.textContent = reviewedPlaces;
}


// -------------------------------------------------
// 5. DYNAMIC COPYRIGHT
// -------------------------------------------------

const copyrightElement = document.getElementById("copyright");

if (copyrightElement) {
    copyrightElement.textContent =
        "© " + currentYear + " " + guideName + ". Student Food Guide.";
}


// =================================================
// ACTIVITY 8.3 - DECISION 1: RATING LABEL
// =================================================

const placeRating = 4.5;
let ratingLabel;

if (placeRating >= 4) {
    ratingLabel = "Highly recommended";
} else if (placeRating >= 2.5) {
    ratingLabel = "Worth a visit";
} else {
    ratingLabel = "Only if you're nearby";
}

const ratingElement = document.getElementById("ratingLabel");

if (ratingElement) {
    ratingElement.textContent =
        ratingLabel + " (Rating: " + placeRating + "/5)";
}


// =================================================
// ACTIVITY 8.3 - DECISION 2: BUDGET CHECK
// Uses && and a ternary operator
// =================================================

const priceLevel = 1;
const isCurrentlyOpen = true;

const isBudgetFriendly = priceLevel <= 2;

const budgetMessage =
    isBudgetFriendly && isCurrentlyOpen
        ? "Good option right now"
        : "Maybe another time";

const budgetElement = document.getElementById("budgetMessage");

if (budgetElement) {
    budgetElement.textContent = budgetMessage;
}


// =================================================
// ACTIVITY 8.3 - DECISION 3: DISTANCE NOTE
// Uses a boolean and a ternary operator
// =================================================

const isWithinWalkingDistance = true;

const distanceMessage = isWithinWalkingDistance
    ? "Walking distance"
    : "Better to commute";

const distanceElement = document.getElementById("distanceMessage");

if (distanceElement) {
    distanceElement.textContent = distanceMessage;
}


// -------------------------------------------------
// 6. CONSOLE LOGS
// -------------------------------------------------

console.log("Guide name:", guideName);
console.log("Current year:", currentYear);
console.log("Reviewed places:", reviewedPlaces);
console.log("Place rating:", placeRating);
console.log("Budget decision:", budgetMessage);
console.log("Distance decision:", distanceMessage);


// =================================================
// 7. CONTACT FORM
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
// 8. SUGGEST A PLACE FORM
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
