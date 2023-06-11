function calculateAndOutput(){

    var inputField = document.getElementById("listOfItems");
    var itemSold = inputField.value.split(" ");

    var i;
    var total = 200;
    var markup = "";
    for(i = 0; i<itemSold.length; ++i){

        if(isNaN(parseFloat(itemSold[i]))){
            alert(itemSold[i] + "is not a number");
            return;
        }

        total+= parseFloat(itemSold[i]) * 0.09;

    }

    var itemList = document.getElementById("itemTable");
    
    // Add the CSS styles directly in the JavaScript code
    var tableStyle = "border-collapse: collapse; width: 50%;";
    var thStyle = "padding: 8px; text-align: left;font-weight: bold;";
    var tdStyle = "padding: 8px; border-bottom: 1px solid #ddd;";

    markup += "<table class='myTableClass' style='" + tableStyle + "'>";
    markup += "<tr><th style='" + thStyle + "'>ProductID</th><th style='" + thStyle + "'>Amount</th></tr>";
    for (i = 0; i < itemSold.length; ++i) {
        markup += "<tr><td style='" + tdStyle + "'>" + (i + 1) + "</td><td style='" + tdStyle + "'>" + itemSold[i] + "</td></tr>";
    }
    markup += "</table>";
    markup += "<p>The amount you earn is: " + total + "</p>";
    itemList.innerHTML = markup;

    
}

// window.addEventListener("load", start ,false);