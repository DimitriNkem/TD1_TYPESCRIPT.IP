// Define display element type (Assuming it's an HTMLInputElement)
let jes = document.querySelector(".jesus") ;

// Define buttons element type (NodeList of buttons)
const but = document.querySelectorAll("button") as NodeListOf<HTMLButtonElement>;

// Define special characters array
const specialChar: string[] = ["%", "*", "/", "-", "+", "="];

// Define output variable with initial value
let out: string = "";

// Define function to calculate based on button clicked
const calc = (btnValue: string): void => {
    let t: string = "";
    
    if (btnValue === "=" && btnValue !== t) {
        // If output has '%', replace with '/100' before evaluating
        out = eval(out.replace("%", "/100"));
    }
    else if (btnValue === "AC") {
        out = "";
    }
    else if (btnValue === "DEL") {
        // If DEL button is clicked, remove the last character from the output
        out = out.slice(0, -1);
    }
    else {
        // If output is empty and button is special character, return
        if (out === "" && specialChar.includes(btnValue)) {
            return;
        }
        out += btnValue;
    }

    if (jes) {
        jes.value = out;
    }
};

// Add event listener to buttons, call calcul() on click
but.forEach((button: HTMLButtonElement) => {
    // Button click listener calls calcul() with dataset value as argument
    button.addEventListener("click", (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target instanceof HTMLButtonElement && target.dataset.value) {
            calcul(target.dataset.value);
        }
    });
});
