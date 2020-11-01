var values = [];
/*values.push({ weight: 90, date: new Date() });
values.push({ weight: 80, date: new Date() });
values.push({ weight: 70, date: new Date() });
console.log(values[2].weight);
console.log(values[1].weight);
console.log(values[0].weight);*/
var addBtn = document.querySelector(".add");
addBtn.addEventListener('click', addNewValues);
var newDateInput = (document.getElementById('date-area'));
var newWeightInput = (document.querySelector('.get-weight'));
var historyContainer = (document.querySelector('.container'));
var storageForValues = window.localStorage;
function addNewValues() {
    var weightParsed = (Math.round(parseFloat(newWeightInput.value) * 10) / 10).toFixed(1);
    var dateParsed = new Date(newDateInput.value);
    if (dateParsed <= new Date()) {
        values.push({ weight: weightParsed, date: dateParsed });
        console.log(values[0].weight);
        printValues();
        historyContainer.style.height = "200px";
    }
}
function printValues() {
    var temp = "";
    function sortFunction(a, b) {
        var dateA = new Date(a.date).getTime();
        var dateB = new Date(b.date).getTime();
        return dateA < dateB ? 1 : -1;
    }
    ;
    var sortedValues = values.sort(sortFunction);
    storageForValues.setItem("weightDate", sortedValues.toString());
    console.log(storageForValues.getItem("weightDate").toString());
    for (var i = 0; i < sortedValues.length; i++) {
        if (i < 10) {
            temp += "<li class=\"items weights\">" + (sortedValues[i].weight + " kg") + "</li>";
            temp += "<li class=\"items dates\">" + dateFormat(sortedValues[i].date) + "</li>";
        }
        document.querySelector(".list").innerHTML = temp;
    }
}
function dateFormat(date) {
    return date.toDateString();
}
function getValuesFromStorage() {
}
