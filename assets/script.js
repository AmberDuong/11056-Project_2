const slider = document.querySelector(".slider");
const movies = document.querySelectorAll(".movie");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

// Set the starting position of the active movie
let activeMovieIndex = Math.floor(movies.length / 2);

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

        // Hide the previous button when the slider reaches the first movie
        if (activeMovieIndex === 1) {
            prevButton.style.display = "none";
        } else {
            prevButton.style.display = "block";
        }
        
        // Hide the next button when the slider reaches the last movie
        if (activeMovieIndex === movies.length - 2) {
            nextButton.style.display = "none";
        } else {
            nextButton.style.display = "block";
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


// Onclick functions for overlay texts
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

function on3() {
    document.getElementById("overlay3").style.display = "block";
}
  
function off3() {
    document.getElementById("overlay3").style.display = "none";
}

function on4() {
    document.getElementById("overlay4").style.display = "block";
}
  
function off4() {
    document.getElementById("overlay4").style.display = "none";
}

function on5() {
    document.getElementById("overlay5").style.display = "block";
}
  
function off5() {
    document.getElementById("overlay5").style.display = "none";
}

function on6() {
    document.getElementById("overlay6").style.display = "block";
}
  
function off6() {
    document.getElementById("overlay6").style.display = "none";
}

function on7() {
    document.getElementById("overlay7").style.display = "block";
}
  
function off7() {
    document.getElementById("overlay7").style.display = "none";
}

function on8() {
    document.getElementById("overlay8").style.display = "block";
}
  
function off8() {
    document.getElementById("overlay8").style.display = "none";
}

function on9() {
    document.getElementById("overlay9").style.display = "block";
}
  
function off9() {
    document.getElementById("overlay9").style.display = "none";
}

function on10() {
    document.getElementById("overlay10").style.display = "block";
}
  
function off10() {
    document.getElementById("overlay10").style.display = "none";
}

function on11() {
    document.getElementById("overlay11").style.display = "block";
}
  
function off11() {
    document.getElementById("overlay11").style.display = "none";
}

function on12() {
    document.getElementById("overlay12").style.display = "block";
}
  
function off12() {
    document.getElementById("overlay12").style.display = "none";
}

function on13() {
    document.getElementById("overlay13").style.display = "block";
}
  
function off13() {
    document.getElementById("overlay13").style.display = "none";
}

function on14() {
    document.getElementById("overlay14").style.display = "block";
}
  
function off14() {
    document.getElementById("overlay14").style.display = "none";
}

function on15() {
    document.getElementById("overlay15").style.display = "block";
}
  
function off15() {
    document.getElementById("overlay15").style.display = "none";
}