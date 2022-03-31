let diceObj = [
    {value: 0, save:false, element:null},
    {value: 0, save:false, element:null},
    {value: 0, save:false, element:null},
    {value: 0, save:false, element:null},
    {value: 0, save:false, element:null}
];
for (let i = 1; i <= 6; i++){
    document.getElementById('score'+ i).addEventListener('click', function (){
        calculate(this.dataset.value);
        console.log(this.dataset.value);
    });
}
document.getElementById('btn').addEventListener('click',roll)
for(let i = 0; i < diceObj.length;i++){
    diceObj[i].element = document.getElementById('dice' + i);
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
function roll(){

for(let i = 0;i < diceObj.length;i++){
    diceObj[i].element = "dice" + i;
    diceObj[i].value = getRandomIntInclusive(1,6);
    document.getElementById(diceObj[i].element).innerHTML = diceObj[i].value;



}

}
//
// var count = 0;

// function clicks(){
//     count++;
//     var button = document.getElementById("btn");
//     var display = document.getElementById("displayCount");
//     display.innerHTML = count;
// }

function calculate(nummer){
    let total = 0;
    for (let i = 0; i < 5; i++){
if (diceObj[i].value == nummer){
    total += parseInt(nummer);
}
    }
    document.getElementById("score"+ nummer).innerHTML = total;
}