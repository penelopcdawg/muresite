//Get all FAQ questions
const faqQuestions = document.querySelectorAll('.faq-question');

//Loop through all questions
faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
        // Get the corresponding answer for this question
        const answer = this.nextElementSibling;
        
        // Toggle the display of the answer by adjusting max-height
        if (answer.style.maxHeight) {
            //If the answer is already open, close it
            answer.style.maxHeight = null;
        } else {
            //If the answer is closed, open it
            answer.style.maxHeight = answer.scrollHeight + "px"; //Set max-height to the actual height of the answer
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {

    //**Thumbs Up Button Functionality**:
    const thumbsUpBtn = document.getElementById("thumbs-up-btn");
    const thumbsUpCount = document.getElementById("thumbs-up-count");
    
    //Load thumbs-up count from local storage or initialize it to 0
    let count = localStorage.getItem("thumbsUpCount") || 0;
    thumbsUpCount.textContent = count;
    
    //Event listener for thumbs-up button
    thumbsUpBtn.addEventListener("click", () => {
        count++; //Increment the thumbs-up count
        thumbsUpCount.textContent = count; //Update the displayed count
        localStorage.setItem("thumbsUpCount", count); //Save the updated count in local storage
    
        //Add animation class for thumbs-up button
        thumbsUpBtn.classList.add("animate-pop");
    
        //Remove the animation class after animation ends
        setTimeout(() => {
            thumbsUpBtn.classList.remove("animate-pop");
        }, 300);
    });

    // Carousel code
    const articlesContainer = document.querySelector('.articles-container');
    const scrollLeftButton = document.querySelector('.scroll-left');
    const scrollRightButton = document.querySelector('.scroll-right');
    
    let currentIndex = 0; //Keep track of the current position of the carousel
    
    //Number of articles shown at once
    const itemsVisible = 3;
    const totalItems = document.querySelectorAll('.article').length; // Total number of articles
    
    function updateCarouselPosition() {
        const article = document.querySelector('.article');
        const style = window.getComputedStyle(article);
        const articleWidth = article.offsetWidth;
        const marginRight = parseInt(style.marginRight) || 0;
        const gap = marginRight; // Use actual margin-right from CSS
        
        const offset = -(currentIndex * (articleWidth + gap));
        articlesContainer.style.transform = `translateX(${offset}px)`;
        articlesContainer.style.transition = 'transform 0.5s ease'; // smooth transition
    }

    scrollLeftButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = Math.max(totalItems - itemsVisible, 0); // Loop back to last
        }
        updateCarouselPosition();
    });

    scrollRightButton.addEventListener('click', () => {
        if (currentIndex < totalItems - itemsVisible) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to first
        }
        updateCarouselPosition();
    });

    //Initialize the carousel to show from the first item
    updateCarouselPosition();

});
