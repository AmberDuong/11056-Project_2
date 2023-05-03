// carousel slider
const slider_1 = document.querySelector(".slider_1");
const leftArrow_1 = document.querySelector(".left_1");
const rightArrow_1 = document.querySelector(".right_1");
const indicatorParents_1 = document.querySelector('.control_1 ul');
var sectionIndex_1 = 0;

function setIndex_1() {
    document.querySelector(".control_1 .selected").classList.remove("selected");
    slider_1.style.transform = "translate(" + (sectionIndex_1) * -30.5 + "%)";
}

document.querySelectorAll(".control_1 li").forEach(function(indicator, ind) {
    indicator.addEventListener("click", function() {
        sectionIndex_1 = ind;
        setIndex_1();
        indicator.classList.add("selected");
    });
});

leftArrow_1.addEventListener("click", function() {
    sectionIndex_1 = (sectionIndex_1 > 0) ? sectionIndex_1 - 1 : 0;
    indicatorParents_1.children[sectionIndex_1].classList.add("selected");
    setIndex_1();
});

rightArrow_1.addEventListener("click", function() {
    sectionIndex_1 = (sectionIndex_1 < 2) ? sectionIndex_1 + 1 : 2;
    indicatorParents_1.children[sectionIndex_1].classList.add("selected");
    setIndex_1();
});


const slider_2 = document.querySelector(".slider_2");
const leftArrow_2 = document.querySelector(".left_2");
const rightArrow_2 = document.querySelector(".right_2");
const indicatorParents_2 = document.querySelector('.control_2 ul');
var sectionIndex_2 = 0;

function setIndex_2() {
    document.querySelector(".control_2 .selected").classList.remove("selected");
    slider_2.style.transform = "translate(" + (sectionIndex_2) * -30.5 + "%)";
}

document.querySelectorAll(".control_2 li").forEach(function(indicator, ind) {
    indicator.addEventListener("click", function() {
        sectionIndex_2 = ind;
        setIndex_2();
        indicator.classList.add("selected");
    });
});

leftArrow_2.addEventListener("click", function() {
    sectionIndex_2 = (sectionIndex_2 > 0) ? sectionIndex_2 - 1 : 0;
    indicatorParents_2.children[sectionIndex_2].classList.add("selected");
    setIndex_2();
});

rightArrow_2.addEventListener("click", function() {
    sectionIndex_2 = (sectionIndex_2 < 2) ? sectionIndex_2 + 1 : 2;
    indicatorParents_2.children[sectionIndex_2].classList.add("selected");
    setIndex_2();
});

const slider_3 = document.querySelector(".slider_3");
const leftArrow_3 = document.querySelector(".left_3");
const rightArrow_3 = document.querySelector(".right_3");
const indicatorParents_3 = document.querySelector('.control_3 ul');
var sectionIndex_3 = 0;

function setIndex_3() {
    document.querySelector(".control_3 .selected").classList.remove("selected");
    slider_3.style.transform = "translate(" + (sectionIndex_3) * -30.5 + "%)";
}

document.querySelectorAll(".control_3 li").forEach(function(indicator, ind) {
    indicator.addEventListener("click", function() {
        sectionIndex_3 = ind;
        setIndex_3();
        indicator.classList.add("selected");
    });
});

leftArrow_3.addEventListener("click", function() {
    sectionIndex_3 = (sectionIndex_3 > 0) ? sectionIndex_3 - 1 : 0;
    indicatorParents_3.children[sectionIndex_3].classList.add("selected");
    setIndex_3();
});

rightArrow_3.addEventListener("click", function() {
    sectionIndex_3 = (sectionIndex_3 < 2) ? sectionIndex_3 + 1 : 2;
    indicatorParents_3.children[sectionIndex_3].classList.add("selected");
    setIndex_3();
});