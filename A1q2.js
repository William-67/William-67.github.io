
function convertToCelsius(){

    var inputField = document.getElementById("inputText");

    var value = parseFloat(inputField.value);

    if(isNaN(value)){
        
        alert("The value is not a float");

        return;
    }

    document.getElementById("result").innerHTML =
        value + " converted to Celsius is " + celsius(value);

}

function celsius(temp){
    return 5.0/9.0 * (temp - 32);
}

function convertToFahrenheit(){
    var inputField = document.getElementById("inputText");

    var value = parseFloat(inputField.value);

    if(isNaN(value)){
        
        alert("The value is not a float");

        return;
    }

    document.getElementById("result").innerHTML =
        value + " converted to Fahrenheit is " + fahrenheit(value);
}

function fahrenheit(temp){
    return 9.0/5.0 * temp + 32;
}