let nerveinput = document.getElementsByClassName("nerveinput");
const nervebutton = document.getElementById("nervebutton");
const nervediv = document.getElementById("nervediv");


// IT FUCKING WOOOOOOOOORKS HEY-YO!!!!!!!!!!
const nervelength = `${nerveinput}`.length;


// this is working properly sans the clearing
showCorrect = () => {
    h4 = document.createElement("h4");
    nervediv.appendChild(h4.appendChild(document.createTextNode("Correct! :D")));
    nerveinput.value = ``;
}

// this is working properly sans the clearing
showIncorrect = () => {
    h4 = document.createElement("h4");
    nervediv.appendChild(h4.appendChild(document.createTextNode("Incorrect! :(")));
    nerveinput.value =``;
}

CheckNerve = () => {

    //this is not working - should be showcorrect
    if (nervelength > 0 && `${nerveinput}` === `neuro` || nervelength > 0 && `${nerveinput}` === `neuro-`) {
        console.log(yes);
    } 
    //this is working (too well - it skips past the first part)
    else {
        showIncorrect();
    }
if (nervelength === 0) {
    // this not working now? - print showincorrect no matter what
    alert("Please enter an answer.")
}
}
// this is working finally.
nervebutton.addEventListener("click", CheckNerve);