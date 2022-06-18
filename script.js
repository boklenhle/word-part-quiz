const nerveinput = document.getElementsByClassName("nerveinput");
const nervebutton = document.getElementsByClassName("nervebutton");
const nervediv = document.getElementById("nervediv");


// this is broke and I dunno why
nervelength = nerveinput.value.length;



CheckNerve = () => {
    if (nervelength > 0 && nerveinput === `neuro` || nerveinput === `neuro-`) {
        showCorrect();
    } else 
    if (nervelength > 0) {
        showIncorrect();
    } else {
        // this is working correctly
        alert("Please enter an answer.")
    }
}



// this is working properly
showCorrect = () => {
    h4 = document.createElement("h4")
    nervediv.appendChild(h4.appendChild(document.createTextNode("Correct! :D")))
}

// this is working properly
showIncorrect = () => {
    h4 = document.createElement("h4")
    nervediv.appendChild(h4.appendChild(document.createTextNode("Incorrect! :(")))
}



// this is NOT WORKING. 
// It's not waiting for the click it's executing right on load in (if the function has () otherwise, it doesn't do anythin)
nervebutton.addEventListener("click", );