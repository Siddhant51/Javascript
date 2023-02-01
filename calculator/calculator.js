let key = true;
const buttons = document.querySelectorAll(".button");
const display = document.getElementById("screen");
let formula = "";

buttons.forEach(button => button.addEventListener("click", update));

function update() {
    const val = this.getAttribute("id");

    if (val == "solve") {
        key = true;
        formula = eval(formula);
        display.textContent = formula;
        console.log(typeof (formula));
    }
    else if (val == "clear") {
        key = true;
        formula = "";
        display.textContent = formula;
    }
    else if (val == "delete") {
        key = true;
        if (typeof (formula) == "number") {
            formula = Math.floor(formula / 10)
            display.textContent = formula;
            console.log(typeof (formula));
        } else {
            formula = formula.substring(0, formula.length - 1);
            display.textContent = formula;
            console.log(typeof (formula));
        }

    }
    else if (val == "+" || val == "-" || val == "*" || val == "/") {
        if (formula != "") {
            if (typeof (formula) == "string") {
                let last = formula.slice(-1);
                if (last != "+" && last != "-" && last != "*" && last != "/") {
                    formula += val;
                    display.textContent = formula;
                    console.log(typeof (formula));
                }
            }
            else {
                formula += val;
                display.textContent = formula;
                console.log(typeof (formula));
            }
        }
    }
    else {
        key = true;
        formula += val;
        display.textContent = formula;
        console.log(typeof (formula));
    }
}