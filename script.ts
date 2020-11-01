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
const newDate = (document.getElementById('date-area')!) as HTMLInputElement;
const newWeight = (document.querySelector('.get-weight')!) as HTMLInputElement;
const listOfMeasures = (document.querySelector('weights')!);

function addNewValues() {
    console.log(newDate.valueAsDate);
    let weightAsNumber = (Math.round(parseFloat(newWeight.value) * 10) / 10).toFixed(1);
    values.push({ weight: weightAsNumber, date: newDate.valueAsDate });
    console.log(values[0].weight);
    printValues();
}

function printValues() {
    let temp = "";
    for (let i = 0; i < values.length; i++) {
        temp += `<div class ="weights">${values[i].weight}</div>`;
        temp += `<div class ="dates">${values[i].date + " kg"}</div>`;
    }
    console.log(temp)
    let newRow = document.createElement("div");                 // Create a <li> node
    let textnode = document.createTextNode(temp);         // Create a text node
    newRow.appendChild(textnode)
    document.getElementById('list').appendChild(newRow);                              // Append the text to <li>
}