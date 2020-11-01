var values = [];
/*values.push({ weight: 90, date: new Date() });
values.push({ weight: 80, date: new Date() });
values.push({ weight: 70, date: new Date() });
console.log(values[2].weight);
console.log(values[1].weight);
console.log(values[0].weight);*/
var addBtn = document.querySelector(".add");
addBtn.addEventListener('click', addNewValues);
var newDate = (document.getElementById('date-area'));
var newWeight = (document.querySelector('.get-weight'));
var listOfMeasures = (document.querySelector('weights'));
function addNewValues() {
    console.log(newDate.valueAsDate);
    var weightAsNumber = (Math.round(parseFloat(newWeight.value) * 10) / 10).toFixed(1);
    values.push({ weight: weightAsNumber, date: newDate.valueAsDate });
    console.log(values[0].weight);
    printValues();
}
function printValues() {
    var temp = "";
    for (var i = 0; i < values.length; i++) {
        temp += "<div class =\"weights\">" + values[i].weight + "</div>";
        temp += "<div class =\"dates\">" + (values[i].date + " kg") + "</div>";
    }
    console.log(temp);
    var newRow = document.createElement("div"); // Create a <li> node
    var textnode = document.createTextNode(temp); // Create a text node
    newRow.appendChild(textnode);
    document.getElementById('list').appendChild(newRow); // Append the text to <li>
}
