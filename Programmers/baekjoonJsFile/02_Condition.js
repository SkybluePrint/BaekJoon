`use strict`;
//단계별 풀이 - 2. 조건문.


//1330
//두 정수 A B가 주어졌을때 비교

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
//string 배열에서 정수값 입력 받고 
const A = Number(input[0]);
const B = Number(input[1]);

//a가 b 보다 큰 경우에  >  출력
if(A > B){
   console.log(">");
}//a가 b 보다 작은 경우에는 < 출력
else if(A < B) {
    console.log("<");
}//a와 b 가 같은 경우에는 == 출력
else{
    console.log("==");
}

//9498
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

// 시험 점수를 입력받아 90 ~ 100점은 A
if(input >= 90){
       console.log("A");
    }//  80 ~ 89점은 B
else if(input >= 80){
console.log("B");
}//  , 70 ~ 79점은 C, 
else if(input >= 70) {
console.log("C");
}//  60 ~ 69점은 D, 
else if(input >= 60) {
    console.log("D");
}else {
    console.log("F");
}
//  나머지 점수는 F를 출력하는 프로그램을 작성하시오.

//2753
윤년 = 4의 배수 && 100의 배수 아님 || 400의 배수
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

//4의 배수
const year = Number(input);

if (((year % 4) === 0) && ((year % 100) !== 0)||((year % 400) === 0)){
    console.log("1");
} else {
    console.log("0");
}

// 14681
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const xLocation = Number(input[0]);
const yLocation = Number(input[1]);

let n=0;
if(xLocation > 0 ){
    if(yLocation > 0 ){
        n=1;
    }else if(yLocation < 0 ){
        n=4;
    }
}else if(xLocation < 0 ){
    if(yLocation > 0 ){
    n=2;
    }else if(yLocation < 0 ){
    n=3;
    }
}
console.log(`Quadrant${n}`);

const input = require('fs').readFileSync(0).toString().trim().split("\n");
const A = Number(input[0]);
const B = Number(input[1]);

if (A > 0 && B > 0) {
    console.log(1);
}
else if (B > 0 && A < 0) {
    console.log(2);
}
else if (B < 0 && A < 0) {
    console.log(3);
}
else {
    console.log(4);
}

//2884
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
let H = Number(input[0]);
let M = Number(input[1]);

const minus = (M - 45);
if((H !== 0) && (minus < 0)){
    M = (60 + minus);
    H--;
}else if(H === 0 && minus < 0){
    M = (60 + minus);
    H = 23;
}else{
    M = minus;
}
console.log(H + " " + M);

//2525
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let curHour = input[0].split(" ")[0];
let curMin = input[0].split(" ")[1];
let cookTime = input[1];

const plushour = parseInt((curMin + cookTime) / 60);
let totalMin = parseInt((curMin + cookTime) % 60);
let hourLimit = (curHour + plushour);
if (plushour > 0 && hourLimit < 24) {
    curHour = curHour + plushour;
}else if(plushour > 0 && hourLimit > 23){
    curHour = (hourLimit - 24);
}

curMin = totalMin;
console.log(`${curHour} ${curMin}`);
if (curHour >= 23) {
    curHour = 0;
} else if (curHour < 23) {
    curHour++;
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
 
let curHour = input[0].split(" ")[0];
let curMin = input[0].split(" ")[1];
let cookTime = input[1];
 
solution(+curHour, +curMin, +cookTime);
 
function solution(doneHour, doneMin, cookTime) {
    doneMin += cookTime;
 
    while (doneMin >= 60){
        doneMin -= 60;
        doneHour += 1;
    }
 
    doneHour %= 24;
    console.log(doneHour, doneMin);
}

//2480
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");
const gambleNum = input[0];

let matchSaver = 0;
let failSaver = null;
let n = 1;
let prize = 0;
const max = gambleNum.reduce(function (a, b) {
    return Math.max(a, b);
}, -Infinity);
for (let i = 0; i < (gambleNum.length - 1); i++) {

    //같을때는 n++ valuesaver를 기억해주지
    if ((gambleNum[i] === gambleNum[(i + 1)]) || (failSaver === gambleNum[(i + 1)])) {
        matchSaver = gambleNum[i + 1];
        n++;
    } else {
        failSaver = gambleNum[i];
    }
}
if (n === 1) {
    prize = (max * 100);
} else if (n === 2) {
    prize = (1000 + (matchSaver * 100));
} else if (n === 3) {
    prize = (10000 + (matchSaver * 1000));
}
console.log(prize);
//
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