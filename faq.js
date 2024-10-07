// Select all the MCQ buttons
const mcqOptions = document.querySelectorAll(".mcq-option");

// Add click event to each button
mcqOptions.forEach(option => {
  option.addEventListener("click", () => {
    // Remove 'selected', 'correct', and 'incorrect' classes from all options
    mcqOptions.forEach(opt => {
      opt.classList.remove("selected", "correct", "incorrect");
    });

    // Add 'selected' class to the clicked option
    option.classList.add("selected");

    // Check if the clicked option is correct
    if (option.dataset.answer === "true") {
      option.classList.add("correct");
    } else {
      option.classList.add("incorrect");
    }
  });
});
