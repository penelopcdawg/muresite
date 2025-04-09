// Get all FAQ questions
const faqQuestions = document.querySelectorAll('.faq-question');

// Loop through all questions
faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
        // Get the corresponding answer for this question
        const answer = this.nextElementSibling;
        
        // Toggle the display of the answer by adjusting max-height
        if (answer.style.maxHeight) {
            // If the answer is already open, close it
            answer.style.maxHeight = null;
        } else {
            // If the answer is closed, open it
            answer.style.maxHeight = answer.scrollHeight + "px"; // Set max-height to the actual height of the answer
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const countryInput = document.getElementById("country");
    const stateContainer = document.getElementById("state-container");

    countryInput.addEventListener("input", function() {
        if (countryInput.value.toLowerCase() === "usa") {
            stateContainer.style.display = "block"; // Show state input
        } else {
            stateContainer.style.display = "none"; // Hide state input
        }
    });
});
