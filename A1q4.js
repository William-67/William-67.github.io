function reverse(){

    var input = document.getElementById("input");

    var tokens = input.value.split(" ");
    var i;
    var markup = "";

    for(i = tokens.length - 1; i >= 0; --i){
        markup += "<div>" + tokens[i] + "</div>";
    }

    output.innerHTML = markup;
    // console.log("777");
}

window.addEventListener("load", reverse, false);