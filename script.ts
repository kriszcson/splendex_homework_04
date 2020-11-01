type weightDay = {
    weight: string;
    date: Date;
}
let values: weightDay[] = [
];

/*values.push({ weight: 90, date: new Date() });
values.push({ weight: 80, date: new Date() });
values.push({ weight: 70, date: new Date() });
console.log(values[2].weight);
console.log(values[1].weight);
console.log(values[0].weight);*/

const addBtn = document.querySelector(".add")!;
addBtn.addEventListener('click', addNewValues);
const newDateInput = (document.getElementById('date-area')!) as HTMLInputElement;
const newWeightInput = (document.querySelector('.get-weight')!) as HTMLInputElement;
const historyContainer = (document.querySelector('.container')!) as HTMLElement;



function addNewValues() {
    let weightParsed = (Math.round(parseFloat(newWeightInput.value) * 10) / 10).toFixed(1);
    let dateParsed = new Date(newDateInput.value);
    if (dateParsed <= new Date()) {
        values.push({ weight: weightParsed, date: dateParsed });
        console.log(values[0].weight);
        getValuesFromStorage();
        printValues();
        historyContainer.style.height = "200px";
    }
}

function printValues() {
    let temp = "";
    function sortFunction(a, b) {
        var dateA = new Date(a.date).getTime();
        var dateB = new Date(b.date).getTime();
        return dateA < dateB ? 1 : -1;
    };
    let sortedValues = values.sort(sortFunction);

    for (let i = 0; i < sortedValues.length; i++) {
        if (i < 10) {
            temp += `<li class="items weights">${sortedValues[i].weight + " kg"}</li>`;
            temp += `<li class="items dates">${dateFormat(sortedValues[i].date)}</li>`;
        }
        document.querySelector(".list").innerHTML = temp;
    }
}
function dateFormat(date: Date) {
    return date.toDateString();
}
function getValuesFromStorage() {
    for (let i = 0; i < values.length; i++) {
        localStorage.setItem(i.toString(), values[i].date.toTimeString());
        console.log(localStorage);
    }
}