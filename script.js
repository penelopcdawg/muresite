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

//carousel

let currentIndex = 0; // Keep track of the current position of the carousel

const articlesContainer = document.querySelector('.articles-container');
const scrollLeftButton = document.querySelector('.scroll-left');
const scrollRightButton = document.querySelector('.scroll-right');

// Number of articles shown at once
const itemsVisible = 3;
const totalItems = document.querySelectorAll('.article').length; // Total number of articles

// Handle left scroll
scrollLeftButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - itemsVisible;
    }
    updateCarouselPosition();
});

// Handle right scroll
scrollRightButton.addEventListener('click', () => {
    if (currentIndex < totalItems - itemsVisible) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to the start
    }
    updateCarouselPosition();
});

// Update the position of the carousel
function updateCarouselPosition() {
    const offset = -currentIndex * (document.querySelector('.article').offsetWidth + 20); // 20px is the gap between articles
    articlesContainer.style.transform = `translateX(${offset}px)`;
}

