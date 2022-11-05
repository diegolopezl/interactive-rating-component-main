//declaring and assigning each variable with the classes

const btns = document.querySelectorAll(".ratings");
const submit = document.querySelector(".submit");
const result = document.querySelector(".result");
const ratingCard = document.querySelector(".rating-main");
const thankyouCard = document.querySelector(".thankyou-main");

//For each button add event after clicked removes "selected" class for each button, then add selected to the clicked button and finally assign it's text content 1-5 to rating variable

let rating = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btns.forEach((btn) => btn.classList.remove("selected"));
    e.target.classList.add("selected");
    rating = e.target.textContent;
  });
});

//After submit is clicked, assign rating to result message, hide rating card then unhide thankyou card.
submit.addEventListener("click", () => {
  result.textContent = rating;
  ratingCard.classList.add("hide");
  thankyouCard.classList.remove("hide");
});
