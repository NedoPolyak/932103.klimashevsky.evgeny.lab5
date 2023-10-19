"use strict"

function openModal (ModelID) {
    $("#" + ModelID).fadeIn(400);
    $(".overlay").fadeIn(400);
}

function closeModal (ModelID) {
    $("#" + ModelID).fadeOut(400);
    $(".overlay").fadeOut(400);
}

const buttons = document.querySelectorAll(".news-block-open-button");
buttons.forEach(element => {
    const ModelID = element.getAttribute("target-model-id");
    element.addEventListener("click", () => openModal(ModelID));
    document.querySelector(".overlay").addEventListener("click", () => closeModal(ModelID));
});