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
document.addEventListener("DOMContentLoaded", function () {

    // **Thumbs Up Button Functionality**:
    const thumbsUpBtn = document.getElementById("thumbs-up-btn");
    const thumbsUpCount = document.getElementById("thumbs-up-count");
    
    // Load thumbs-up count from local storage or initialize it to 0
    let count = localStorage.getItem("thumbsUpCount") || 0;
        thumbsUpCount.textContent = count;
    
    // Event listener for thumbs-up button
    thumbsUpBtn.addEventListener("click", () => {
        count++; // Increment the thumbs-up count
        thumbsUpCount.textContent = count; // Update the displayed count
        localStorage.setItem("thumbsUpCount", count); // Save the updated count in local storage
    
    // Add animation class for thumbs-up button
    thumbsUpBtn.classList.add("animate-pop");
    
    // Remove the animation class after animation ends
    setTimeout(() => {
        thumbsUpBtn.classList.remove("animate-pop");
    }, 300);
    const articlesContainer = document.querySelector('.articles-container');
    const scrollLeftButton = document.querySelector('.scroll-left');
    const scrollRightButton = document.querySelector('.scroll-right');
    
    let currentIndex = 0; // Keep track of the current position of the carousel
    
    // Number of articles shown at once
    const itemsVisible = 3;
    const totalItems = document.querySelectorAll('.article').length; // Total number of articles
    
    // Update the carousel's position based on the current index
    function updateCarouselPosition() {
        const articleWidth = document.querySelector('.article').offsetWidth; // Get the width of each article
        const gap = 20; // The gap between articles
        const offset = -(currentIndex * (articleWidth + gap)); // Account for the gap between articles
        articlesContainer.style.transform = `translateX(${offset}px)`;
    }

    // Handle left scroll (move to the previous article)
    scrollLeftButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalItems - itemsVisible; // Loop back to the last article
        }
        updateCarouselPosition();
    });

    // Handle right scroll (move to the next article)
    scrollRightButton.addEventListener('click', () => {
        if (currentIndex < totalItems - itemsVisible) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to the first article
        }
        updateCarouselPosition();
    });

    // Initialize the carousel to ensure it shows from the first item
    updateCarouselPosition();


    });
});
