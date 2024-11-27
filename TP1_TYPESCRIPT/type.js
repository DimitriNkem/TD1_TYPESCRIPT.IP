
// Define display element type (Assuming it's an HTMLInputElement)
var jesus = document.querySelector(".jesus");
// Define buttons element type (NodeList of buttons)
var buttons = document.querySelectorAll("button");
// Define special characters array
var specialChars = ["%", "*", "/", "-", "+", "="];
// Define output variable with initial value
var output = "";
// Define function to calculate based on button clicked
var calcul = function (btnValue) {
    var t = "";
    if (btnValue === "=" && btnValue !== t) {
        // If output has '%', replace with '/100' before evaluating
        output = eval(output.replace("%", "/100"));
    }
    else if (btnValue === "AC") {
        output = "";
    }
    else if (btnValue === "DEL") {
        // If DEL button is clicked, remove the last character from the output
        output = output.slice(0, -1);
    }
    else {
        // If output is empty and button is special character, return
        if (output === "" && specialChars.includes(btnValue)) {
            return;
        }
        output += btnValue;
    }
    if (jesus) {
        jesus.value = output;
    }
};
// Add event listener to buttons, call calcul() on click
buttons.forEach(function (button) {
    // Button click listener calls calcul() with dataset value as argument
    button.addEventListener("click", function (e) {
        var target = e.target;
        if (target instanceof HTMLButtonElement && target.dataset.value) {
            calcul(target.dataset.value);
        }
    });
});
