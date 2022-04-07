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

document.getElementById('score7').addEventListener('click',function () {
    calculateToK();
});

document.getElementById('score8').addEventListener('click',function () {
    calculateFoK();
});

document.getElementById('score9').addEventListener('click',function () {
    calculateFh();
});

document.getElementById('score13').addEventListener('click',function () {
    calculateYh();
});

document.getElementById('score10').addEventListener('click',function () {
    smallStraight();
});

document.getElementById('score11').addEventListener('click',function () {
    bigStraight();
});

document.getElementById('chance').addEventListener('click',function () {
    chance();
});

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function roll(){

for(let i = 0;i < diceObj.length;i++){
    diceObj[i].element = "dice" + i;
    diceObj[i].value = getRandomIntInclusive(1,6);
    document.getElementById(diceObj[i].element).innerHTML = diceObj[i].value;
}
}

function calculate(nummer){
    let total = 0;
    for (let i = 0; i < 5; i++){
if (diceObj[i].value == nummer){
    total += parseInt(nummer);
}
    }
    document.getElementById("score"+ nummer).innerHTML = total;
}

function calculateToK(){
    let found = false;
    let amountthesame;
    for (let j = 0; j < 6; j++) {
        amountthesame = 0;
        for (let i = 0; i < 5; i++) {
            if (diceObj[i].value == j) {
                amountthesame++;
            }
        }
        if (amountthesame >= 3) {
            found = true;
        }
    }
    if (found){
        let totaal = 0;
        for (let k = 0; k < 5; k++){
                totaal += parseInt(diceObj[k].value );
        }
        document.getElementById('score7').innerHTML = totaal;
    }
}

function calculateFoK(){
    let found = false;
    let amountthesame;
    for (let j = 0; j < 6; j++) {
        amountthesame = 0;
        for (let i = 0; i < 5; i++) {
            if (diceObj[i].value == j) {
                amountthesame++;
            }
        }
        if (amountthesame >= 4) {
            found = true;
        }
    }
    if (found){
        let totaal = 0;
        for (let k = 0; k < 5; k++){
            totaal += parseInt(diceObj[k].value);
        }
        document.getElementById('score8').innerHTML = totaal;
    }
}

function calculateFh(){
        let found = false;
        let amountthesame;
        for (let j = 0; j < 6; j++) {
            amountthesame = 0;
            for (let i = 0; i < 5; i++) {
                if (diceObj[i].value == j) {
                    amountthesame++;
                }
            }
            if (amountthesame == 3) {
                found = true;
            }
            let found2 = false;
            let amountthesame2;
            for (let k = 0; k < 6; k++) {
                amountthesame2 = 0;
                for (let l = 0; l < 5; l++) {
                    if (diceObj[l].value == j) {
                        amountthesame2++;
                    }
                }
                if (amountthesame2 == 2) {
                    found2 = true;
                }
    }
    if (found && found2){
        document.getElementById('score9').innerHTML = 25;
    }
 }
}

function calculateYh(){
    let found = false;
    let amountthesame;
    for (let j = 0; j < 6; j++) {
        amountthesame = 0;
        for (let i = 0; i < 5; i++) {
            if (diceObj[i].value == j) {
                amountthesame++;
            }
        }
        if (amountthesame == 5) {
            found = true;
        }
    }
    if (found){
        document.getElementById('score13').innerHTML = 50;
    }
}

function smallStraight(){
    let straight = [0,0,0,0,0,0]
    for (let i = 1; i <= 6; i++){
        for ( let j = 0; j <5; j++){
            if (diceObj[j].value == i) {
                straight[i - 1] = 1;
            }
        }
    }
    let amountsame = 0;
    let found = false;
    for (let i = 1; i <= 6; i++){
        if(straight[i] == 1){
            amountsame++;
        }else{
            amountsame = 0;
        }
        if (amountsame >= 4 ){
            found = true;
        }
    }
    if(found){
        document.getElementById('score10').innerHTML = 30;
    }
}

function bigStraight(){
    let straight = [0,0,0,0,0,0]
    for (let i = 1; i <= 6; i++){
        for ( let j = 0; j <5; j++){
            if (diceObj[j].value == i) {
                straight[i - 1] = 1;
            }
        }
    }
    let amountsame = 0;
    let found = false;
    for (let i = 1; i <= 6; i++){
        if(straight[i] == 1){
            amountsame++;
        }else{
            amountsame = 0;
        }
        if (amountsame == 5 ){
            found = true;
        }
    }
    if(found){
        document.getElementById('score11').innerHTML = 40;
    }
}

function chance(){
    let total = 0;
    for (let i = 0; i < 5; i++){
        total += parseInt(diceObj[i].value);
    }
    document.getElementById('chance').innerHTML = total;
}