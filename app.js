const resultText = document.getElementById("result-text");
const inputText = document.getElementById("input-text");
let titleChange = document.getElementById("title-change");
const unitSelect = document.getElementById("unit");

unitSelect.addEventListener("change", function() {
    if (unitSelect.value == "Grammmes") {
        console.log("1");
        titleChange.innerHTML = "G";
        inputText.addEventListener("input", function() {
            gConverter();
        })
    } 
    else if (unitSelect.value == "Decagramme")  {
        console.log("2")
        titleChange.innerHTML = "DG";
        inputText.addEventListener("input", function() {
            dgConverter();
        })
    }
    else {
        console.log("3");
        titleChange.innerHTML = "HG";
        inputText.addEventListener("input", function() {
            hConverter();
        })
    }
})

function hConverter() {
    resultText.textContent = inputText.value*100;
}

function dgConverter() {
    resultText.textContent = inputText.value*10;
}

function gConverter() {
    resultText.textContent = inputText.value*1000;
}

