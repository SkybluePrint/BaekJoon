// let input = require('fs').readFileSync('example.txt').toString().split('\n');
// var a = parseInt(input[0]);
// var b = parseInt(input[1]);
// console.log(a-b);

// const fs =require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
// const input = fs.readFileSync(filePath).toString().split("");

// const a = parseInt(input[0]);
// const b = parseInt(input[1]);
// console.log(a-b);

//백준에 업로드 할 코드
// var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// var a = parseInt(input[0]);
// var b = parseInt(input[1]);
// console.log(a+b);

// const readline = require('readline');
// const rl = readline.createInterface({ input: process.stdin, output: process.stdout});

// rl.on('line', line => {
//  let arr = line.split(" ");
//  let a = parseInt(arr[0]);
//  let b = parseInt(arr[1]);
//  console.log(a-b);
// })

//10869
// const readline = require('readline');
// const rl = readline.createInterface({ input: process.stdin, output: process.stdout});

// rl.on('line', line => {
//  let arr = line.split(" ");
//  let a = parseInt(arr[0]);
//  let b = parseInt(arr[1]);

//  console.log(a+b);
//  console.log(a-b);
//  console.log(a*b);
//  console.log(Math.floor(a/b));
//  console.log(a%b);
// })


//10926
// const readline = require('readline');
// const rl = readline.createInterface({ input: process.stdin, output: process.stdout});

// rl.on('line', line => {
//  let arr = line.split(" ");
//  let input = arr[0];
//     console.log(`${input}??!`);
// })

//18108
// const readline = require('readline');
// const rl = readline.createInterface({ input: process.stdin, output: process.stdout});

// rl.on('line', line => {
//  let arr = line.split(" ");
//  let input = parseInt(arr[0]);
//  const currentYear = (input - 543);
//     console.log(`${currentYear}`);
// })

//10430
// const readline = require('readline');
// const rl = readline.createInterface({ input: process.stdin, output: process.stdout});

// rl.on('line', line => {
//  let arr = line.split(" ");
//  let a = parseInt(arr[0]);
//  let b = parseInt(arr[1]);
//  let c = parseInt(arr[2]);
// const firstline = ((a+b)%c);
// const secondline = (((a%c)+(b%c))%c);
// const thirdline = ((a*b)%c);
// const fourthline = (((a%c)*(b%c))%c);
// console.log(firstline);
// console.log(secondline);
// console.log(thirdline);
// console.log(fourthline);
// })

//2588
// const readline = require('readline');
// const rl = readline.createInterface({ input: process.stdin, output: process.stdout});

// rl.on('line', line => {
//  let arr = line.split(" ");
//  let firstvalue =arr[0];
//  let secondvalue = arr[1];
//  const [secondvalue0, secondvalue1 ,secondvalue2] = secondvalue.split('');
//  const linethree =  parseInt(firstvalue) * parseInt(secondvalue2);
//  const linefour =  parseInt(firstvalue) *  parseInt(secondvalue1);
//  const linefive =  parseInt(firstvalue) *  parseInt(secondvalue0);

//  const sum = linethree + Number(`${linefour}0`) + Number(`${linefive}00`);

//  console.log(linethree);
//  console.log(linefour);
//  console.log(linefive);
//  console.log(sum);

// })
// const arr =  ["472", "385"]
// let firstvalue =arr[0];
// let secondvalue = arr[1];
// const [secondvalue0, secondvalue1 ,secondvalue2] = secondvalue.split('');
// const linethree =  parseInt(firstvalue) * parseInt(secondvalue2);
// const linefour =  parseInt(firstvalue) *  parseInt(secondvalue1);
// const linefive =  parseInt(firstvalue) *  parseInt(secondvalue0);

// const sum = linethree + Number(`${linefour}0`) + Number(`${linefive}00`);

// console.log(linethree);
// console.log(linefour);
// console.log(linefive);
// console.log(sum);

// const fs = require('fs');

// const [A, B] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

// const [B0, B1, B2] = B.split('');

// const temp1 = A * B2;
// const temp2 = A * B1;
// const temp3 = A * B0;
// const sum = temp1 + Number(`${temp2}0`) +  Number(`${temp3}00`);

// console.log(`${temp1}\n${temp2}\n${temp3}\n${sum}`)

//11382
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
// const sum = (Number(input[0]) + Number(input[1]) + Number(input[2]));
// console.log(sum);

//고양이 출력
// console.log("\\    /\\ ");
// console.log(" )  ( ')");
// console.log("(  /  )");
// console.log(" \\(__)|");

//개 출력
// console.log("|\\_/|");
// console.log("|q p|   /}");
// console.log(`( 0 )"""\\ `);
// console.log(`|"^"` + "`   |");
// console.log("||_/=\\\\__|");
// |\_/|
// |q p|   /}
// ( 0 )"""\
// |"^"`    |
// ||_/=\\__|

//1330
//두 정수 A B가 주어졌을때 비교

// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
// //string 배열에서 정수값 입력 받고 
// const A = Number(input[0]);
// const B = Number(input[1]);

// //a가 b 보다 큰 경우에  >  출력
// if(A > B){
//    console.log(">");
// }//a가 b 보다 작은 경우에는 < 출력
// else if(A < B) {
//     console.log("<");
// }//a와 b 가 같은 경우에는 == 출력
// else{
//     console.log("==");
// }

//9498
// const input = require("fs").readFileSync("/dev/stdin").toString().trim();

// // 시험 점수를 입력받아 90 ~ 100점은 A
// if(input >= 90){
//        console.log("A");
//     }//  80 ~ 89점은 B
// else if(input >= 80){
// console.log("B");
// }//  , 70 ~ 79점은 C, 
// else if(input >= 70) {
// console.log("C");
// }//  60 ~ 69점은 D, 
// else if(input >= 60) {
//     console.log("D");
// }else {
//     console.log("F");
// }
//  나머지 점수는 F를 출력하는 프로그램을 작성하시오.

//2753
//윤년 = 4의 배수 && 100의 배수 아님 || 400의 배수
// const input = require("fs").readFileSync("/dev/stdin").toString().trim();

// //4의 배수
// const year = Number(input);

// if (((year % 4) === 0) && ((year % 100) !== 0)||((year % 400) === 0)){
//     console.log("1");
// } else {
//     console.log("0");
// }

// 14681
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

// const xLocation = Number(input[0]);
// const yLocation = Number(input[1]);

// let n=0;
// if(xLocation > 0 ){
//     if(yLocation > 0 ){
//         n=1;
//     }else if(yLocation < 0 ){
//         n=4;
//     }
// }else if(xLocation < 0 ){
//     if(yLocation > 0 ){
//     n=2;
//     }else if(yLocation < 0 ){
//     n=3;
//     }
// }
// console.log(`Quadrant${n}`);



// const input = require('fs').readFileSync(0).toString().trim().split("\n");
// const A = Number(input[0]);
// const B = Number(input[1]);

// if (A > 0 && B > 0) {
//     console.log(1);
// }
// else if (B > 0 && A < 0) {
//     console.log(2);
// }
// else if (B < 0 && A < 0) {
//     console.log(3);
// }
// else {
//     console.log(4);
// }

//2884
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
// let H = Number(input[0]);
// let M = Number(input[1]);

// const minus = (M - 45);
// if((H !== 0) && (minus < 0)){
//     M = (60 + minus);
//     H--;
// }else if(H === 0 && minus < 0){
//     M = (60 + minus);
//     H = 23;
// }else{
//     M = minus;
// }
// console.log(H + " " + M);
//2525
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(filePath).toString().split("\n");

// let curHour = input[0].split(" ")[0];
// let curMin = input[0].split(" ")[1];
// let cookTime = input[1];

// const plushour = parseInt((curMin + cookTime) / 60);
// let totalMin = parseInt((curMin + cookTime) % 60);
// let hourLimit = (curHour + plushour);
// if (plushour > 0 && hourLimit < 24) {
//     curHour = curHour + plushour;
// }else if(plushour > 0 && hourLimit > 23){
//     curHour = (hourLimit - 24);
// }

// curMin = totalMin;
// console.log(`${curHour} ${curMin}`);
// if (curHour >= 23) {
//     curHour = 0;
// } else if (curHour < 23) {
//     curHour++;
// }


// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(filePath).toString().split("\n");
 
// let curHour = input[0].split(" ")[0];
// let curMin = input[0].split(" ")[1];
// let cookTime = input[1];
 
// solution(+curHour, +curMin, +cookTime);
 
// function solution(doneHour, doneMin, cookTime) {
//     doneMin += cookTime;
 
//     while (doneMin >= 60){
//         doneMin -= 60;
//         doneHour += 1;
//     }
 
//     doneHour %= 24;
//     console.log(doneHour, doneMin);
// }

// //2480
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(filePath).toString().split(" ");
// const gambleNum = input[0];

// let matchSaver = 0;
// let failSaver = null;
// let n = 1;
// let prize = 0;
// const max = gambleNum.reduce(function (a, b) {
//     return Math.max(a, b);
// }, -Infinity);
// for (let i = 0; i < (gambleNum.length - 1); i++) {

//     //같을때는 n++ valuesaver를 기억해주지
//     if ((gambleNum[i] === gambleNum[(i + 1)]) || (failSaver === gambleNum[(i + 1)])) {
//         matchSaver = gambleNum[i + 1];
//         n++;
//     } else {
//         failSaver = gambleNum[i];
//     }
// }
// if (n === 1) {
//     prize = (max * 100);
// } else if (n === 2) {
//     prize = (1000 + (matchSaver * 100));
// } else if (n === 3) {
//     prize = (10000 + (matchSaver * 1000));
// }
// console.log(prize);


const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let GamBleNum1 = input[0].split(" ")[0];
let GamBleNum2 = input[0].split(" ")[1];
let GamBleNum3 = input[1];

if(GamBleNum1 == GamBleNum2 && GamBleNum2 == GamBleNum3){
    console.log(10000 + GamBleNum2 * 1000);
}else if(GamBleNum1 == GamBleNum2 || GamBleNum2 == GamBleNum3){
    console.log(1000+GamBleNum2*100);
}else if(GamBleNum1 == GamBleNum3){
    console.log(1000+GamBleNum3*100);
}else{
    let maxnum = Math.max(GamBleNum1, GamBleNum2, GamBleNum3);
    console.log(maxnum * 100);
}

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

//10807
총 n개의 정수가 주어졌을대 정수 v가 몇개인지 구하는 프로그램을 작성하시오
첫째 정수 n
n개의 정수가 나열되어 있음
v정수를 찾아야함.

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const intN = Number(input[0]);
//정수를 배열에 넣어주자
const arrayNum = input[1].split(" ");
const searchV = input[2];     
let overlap = 0;
for (let i = 0; i < intN; i++){
    if(arrayNum[i] === searchV){
        overlap++;
    }
}
console.log(overlap);

//10871 x보다 작은 수
첫째 줄에 n개로 이루어진 수열 a와 정수 x 
둘째 줄에 수열 a를 이루는 정수 n개

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// const intN = Number(input[0].split(" ")[0]); //야는 for문에 쓸꺼라서 number로 바꿔주자
const compareX = Number(input[0].split(" ")[1]); //야도 string
const compareArray = input[1].split(" "); //string값으로 들어감

function sexyfilter(arr) {
    return Number(arr) < compareX;
}
const result = compareArray.filter(sexyfilter);

console.log(result.join(' '));

//10818 최소 / 최대
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const index = Number(input[0]); //sting => number

const compareArray = input[1].split(" "); //input => string
let max = Number(compareArray[0]);
let min = Number(compareArray[0]);

for (let i = 0; i < index; i++){
    const num = Number(compareArray[i]);
    if(num > max ){
        max = num;
    }
    if (num < min){
        min = num;
    }    
}
//output은 최소 + " " + 최대
console.log(`${min} ${max}`);

//2562 최댓값
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let max = Number(input[0]);
let when = 1;
for (let i = 0; i < input.length; i++){
    const num = Number(input[i]);  
    if(num > max){
        max = num;
        when = (i + 1);
    }
} 
console.log(`${max}\n${when}`);
//output 첫째줄 최댓값 \n 후 몇번째 수




