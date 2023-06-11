var input;
var areaCode;
var numebr;

function start(){

    document.getElementById("splitButton")
    .addEventListener("click", parseNumber, false);


}

function parseNumber(){

    input = document.getElementById("input");
    areaCode = document.getElementById("areaCode");
    numebr = document.getElementById("number");


    areaCode.innerHTML = "";
    numebr.innerHTML = "";

    var completeNumber = input.value;
    var token = completeNumber.split(" ");
    var token2 = token[1].split("-");

    areaCode.innerHTML = token[0];
    numebr.innerHTML = token2[0] + token2[1];
}

window.addEventListener("load", start, false)