const slider = document.querySelector(".slider");
const movies = document.querySelectorAll(".movie");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

// Set the starting position of the active movie
let activeMovieIndex = Math.floor(movies.length / 2 );

// // Update the position of each movie within the slider
const updateSlider = () => {
    movies.forEach((movie, index) => {
        // Calculate the offset of the movie based on its position relative to the active movie
        let offset = index - activeMovieIndex;
        
        // Handle the case where the active movie is at the beginning or end of the slider
        if (offset < -1) {
        offset += movies.length;
        } else if (offset > 1) {
        offset -= movies.length;
        }
        
        // Move the active movie to the center of the slider
        if (offset === 0) {
        movie.classList.add("movie--active");
        movie.style.transform = `translateX(0)`;
        } else {
        movie.classList.remove("movie--active");
        // Hide movies that are more than 2 positions away from the active movie
        if (Math.abs(offset) > 1) {
            movie.style.display = "none";
        } else {
            movie.style.display = "block";
            const position = offset * 100/3;
            movie.style.transform = `translateX(${position}%)`;
        }
        }
    });
    };
    
    // Move the active movie to the left
    const moveLeft = () => {
    activeMovieIndex--;
    if (activeMovieIndex < 0) {
    activeMovieIndex = movies.length - 1;
    }
    updateSlider();
    };
    
    // Move the active movie to the right
    const moveRight = () => {
    activeMovieIndex++;
    if (activeMovieIndex >= movies.length) {
    activeMovieIndex = 0;
    }
    updateSlider();
    };
    
    // Add event listeners to the prev and next buttons
    prevButton.addEventListener("click", moveLeft);
    nextButton.addEventListener("click", moveRight);
    
    // Set the initial position of each movie within the slider
updateSlider();



function on1() {
    document.getElementById("overlay1").style.display = "block";
}
  
function off1() {
    document.getElementById("overlay1").style.display = "none";
}

function on2() {
    document.getElementById("overlay2").style.display = "block";
}
  
function off2() {
    document.getElementById("overlay2").style.display = "none";
}

