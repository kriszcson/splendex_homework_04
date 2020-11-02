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
function getValuesFromStorage() {
    for (var i = 0; i < localStorage.length / 2; i++) {
        values.push({ weight: localStorage.getItem("w" + i), date: new Date(localStorage.getItem("d" + i)) });
        printValues();
    }
}
function addNewValues() {
    try {
        if (parseFloat(newWeightInput.value) > 0) {
            var weightParsed = (Math.round(parseFloat(newWeightInput.value) * 10) / 10).toFixed(1);
            var dateParsed = new Date(newDateInput.value);
            if (dateParsed <= new Date()) {
                values.push({ weight: weightParsed, date: dateParsed });
                console.log(values[0].weight);
                addValuesToStorage();
                printValues();
                historyContainer.style.height = "200px";
            }
        }
        else {
            throw "The date, and the value fields can't be empty!";
        }
    }
    catch (err) {
        console.log(err);
    }
}
function printValues() {
    var sortedValues = values.sort(sortFunction);
    var HTMLtext = "";
    for (var i = 0; i < sortedValues.length; i++) {
        if (i < 10) {
            HTMLtext += "<li class=\"items weights\">" + (sortedValues[i].weight + " kg") + "</li>";
            HTMLtext += "<li class=\"items dates\">" + dateFormat(sortedValues[i].date) + "</li>";
        }
        document.querySelector(".list").innerHTML = HTMLtext;
    }
}
function dateFormat(date) {
    return date.toDateString();
}
function addValuesToStorage() {
    for (var i = 0; i < values.length; i++) {
        localStorage.setItem("w" + i, values[i].weight.toString());
        localStorage.setItem("d" + i, values[i].date.toString());
        console.log(localStorage);
    }
}
function sortFunction(a, b) {
    var dateA = new Date(a.date).getTime();
    var dateB = new Date(b.date).getTime();
    return dateA < dateB ? 1 : -1;
}
;
var weekBtn = document.querySelector(".--week");
var monthBtn = document.querySelector(".--month");
var yearBtn = document.querySelector(".--year");
var lifeTimeBtn = document.querySelector(".--lifeTime");
weekBtn.addEventListener('click', function () {
    var now = new Date();
    var startOfThisWeek = new Date(now.setDate(now.getDate() - 7));
    valuesForPeriods(startOfThisWeek);
});
monthBtn.addEventListener('click', function () {
    var now = new Date();
    var startOfThisMonth = new Date(now.setDate(now.getMonth() - 1));
    valuesForPeriods(startOfThisMonth);
});
yearBtn.addEventListener('click', function () {
    var now = new Date();
    var startOfThisYear = new Date(now.setDate(now.getFullYear() - 1));
    valuesForPeriods(startOfThisYear);
});
lifeTimeBtn.addEventListener('click', function () {
    console.log("cl");
});
function valuesForPeriods(date) {
    var actualValues = [];
    var sortedValues = values.sort(sortFunction);
    for (var i = 0; i < sortedValues.length; i++) {
        if (date.getTime() >= sortedValues[i].date.getTime()) {
            actualValues.push({ weight: sortedValues[i].weight, date: sortedValues[i].date });
        }
        console.log(actualValues.length);
    }
    var actualValue = actualValues[actualValues.length - 1].weight;
    var startedValue = actualValues[0].weight;
    document.querySelector('.actual-value').innerHTML = actualValue;
    document.querySelector('.started-value').innerHTML = startedValue;
    console.log("clickHEHEHE");
}
getValuesFromStorage();
