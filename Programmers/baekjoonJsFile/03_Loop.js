'use strict';
//단계별 풀이 - 3. 반복문.

//2739번
// N을 입력 받은 뒤 구구단 출력 프로그램 작성

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("");

const inputNum = Number(input[0]);

for (let i = 1; i < 10; i++){
    let guGuResult = (inputNum * i)
    console.log(`${inputNum} * ${i} = ${guGuResult}`);
}


//10950
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const calculation = Number(input[0]);

for (let i = 1; i <= calculation; i++) {
    let numA = Number(input[i].split(" ")[0]);
    let numB = Number(input[i].split(" ")[1]);
    let sum = numA + numB;
    console.log(sum);
}

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

T = Number(input[0]);

for(let i=1;i<=T;i++) {
    let numArr = input[i].split(' ');
    let num1 = Number(numArr[0]);
    let num2 = Number(numArr[1]);
    console.log(num1 + num2);
}

//8393
//n이 주어졌을때 1~n까지의 합

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

const intN = Number(input);
let sum = 0;
for (let i = 1; i <= intN; i++){
    sum = (sum + i);
}
console.log(sum);

// //25304 영수증
// 첫째 줄에는 영수증에 적힌 총 금액 
// $X$가 주어진다.

// 둘째 줄에는 영수증에 적힌 구매한 물건의 종류의 수 
// $N$이 주어진다.

// 이후 
// $N$개의 줄에는 각 물건의 가격 
// $a$와 개수 
// $b$가 공백을 사이에 두고 주어진다.

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const totalMoney = Number(input[0]);
const a = Number(input[1]);
let sum = 0;

for (let i = 2 ; i < (a + 2); i++){
    const money= Number(input[i].split(" ")[0]);
    const howMany= Number(input[i].split(" ")[1]);
    sum += (money * howMany);
}

if(totalMoney === sum){
    console.log("Yes");
    
}else {console.log("No");}

//25314
// const inputValue = 54;
let input = require('fs').readFileSync('/dev/stdin').toString();
const inputValue = Number(input);


const howManyMakeLong = (inputValue / 4);
let longString = "";


for(let i = 0; i < howManyMakeLong; i++ ){
    // longString = longString.concat("long"," ");
    longString = longString + "long ";
}
const resultString = `${longString}int`
console.log(resultString);

//15552
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const calculation = Number(input[0]);
let sum = '';

for (let i = 1; i <= calculation; i++) {
    let numA = Number(input[i].split(" ")[0]);
    let numB = Number(input[i].split(" ")[1]);
    //문자열로 강제로 변환해서 console.log를 한번만 함....
    sum += (numA + numB) + "\n";
}
console.log(sum);

//11021
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const calculation = Number(input[0]);
let sum = '';

for (let i = 1; i <= calculation; i++) {
    let numA = Number(input[i].split(" ")[0]);
    let numB = Number(input[i].split(" ")[1]);
    //문자열로 강제로 변환해서 console.log를 한번만 함....
    sum += "Case #" + i + ": " + (numA + numB) + "\n";
}
console.log(sum);

//110022
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const calculation = Number(input[0]);
let sum = '';

for (let i = 1; i <= calculation; i++) {
    let numA = Number(input[i].split(" ")[0]);
    let numB = Number(input[i].split(" ")[1]);
    //문자열로 강제로 변환해서 console.log를 한번만 함....
    sum += `Case #${i}: ${numA} + ${numB} = ${(numA + numB)}\n`
}
console.log(sum);

//2438
let input = require('fs').readFileSync('/dev/stdin').toString();
const starLine = Number(input);
let starString = "";

for (let i = 1; i <= starLine; i++){
    for (let j = starLine; j > 0 ; j--){
        if(i>=j){
            starString += `*`
        }
    }
    starString += `\n`;
}

console.log(starString);
//2439
let input = require('fs').readFileSync('/dev/stdin').toString();
const starLine = Number(input);
let starString = "";

for (let i = 1; i <= starLine; i++){
    
    for (let j = starLine; j > 0 ; j--){
        if(i>=j){
            starString += `*`
        }else{
            starString += " ";
        }
    }
    
    starString += `\n`;
}

console.log(starString);
let input = require('fs').readFileSync('/dev/stdin').toString();
const starLine = Number(input);
let starString = "";

for (let i = 1; i <= starLine; i++){
    
    for (let j = starLine; j > 0 ; j--){
        if(i>=j){
            starString += `*`
        }else{
            starString += " ";
        }
    }

    starString += `\n`;
}

console.log(starString);

//10952
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let i = 0;
let sum = "";

while(true){
    let numA = Number(input[i].split(" ")[0]);
    let numB = Number(input[i].split(" ")[1]);
    if(numA === 0 && numB === 0){
        break;
    }
    sum += `${(numA + numB)}\n`
    i++;
}
console.log(sum);

//10951
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let sum = '';

for (let i = 0; i < input.length; i++) {
    let numA = Number(input[i].split(" ")[0]);
    let numB = Number(input[i].split(" ")[1]);
    sum += `${(numA + numB)}\n`;
}
console.log(sum);