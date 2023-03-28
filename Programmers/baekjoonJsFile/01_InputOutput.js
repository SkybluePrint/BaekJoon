'use strict';
//단계별 풀이 - 1. 입출력과 사칙연산.


let input = require('fs').readFileSync('example.txt').toString().split('\n');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a-b);

const fs =require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().split("");

const a = parseInt(input[0]);
const b = parseInt(input[1]);
console.log(a-b);

//백준에 업로드 할 코드
var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a+b);

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout});

rl.on('line', line => {
 let arr = line.split(" ");
 let a = parseInt(arr[0]);
 let b = parseInt(arr[1]);
 console.log(a-b);
})

//10869
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout});

rl.on('line', line => {
 let arr = line.split(" ");
 let a = parseInt(arr[0]);
 let b = parseInt(arr[1]);

 console.log(a+b);
 console.log(a-b);
 console.log(a*b);
 console.log(Math.floor(a/b));
 console.log(a%b);
})


//10926
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout});

rl.on('line', line => {
 let arr = line.split(" ");
 let input = arr[0];
    console.log(`${input}??!`);
})

//18108
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout});

rl.on('line', line => {
 let arr = line.split(" ");
 let input = parseInt(arr[0]);
 const currentYear = (input - 543);
    console.log(`${currentYear}`);
})

//10430
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout});

rl.on('line', line => {
 let arr = line.split(" ");
 let a = parseInt(arr[0]);
 let b = parseInt(arr[1]);
 let c = parseInt(arr[2]);
const firstline = ((a+b)%c);
const secondline = (((a%c)+(b%c))%c);
const thirdline = ((a*b)%c);
const fourthline = (((a%c)*(b%c))%c);
console.log(firstline);
console.log(secondline);
console.log(thirdline);
console.log(fourthline);
})

//2588
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout});

rl.on('line', line => {
 let arr = line.split(" ");
 let firstvalue =arr[0];
 let secondvalue = arr[1];
 const [secondvalue0, secondvalue1 ,secondvalue2] = secondvalue.split('');
 const linethree =  parseInt(firstvalue) * parseInt(secondvalue2);
 const linefour =  parseInt(firstvalue) *  parseInt(secondvalue1);
 const linefive =  parseInt(firstvalue) *  parseInt(secondvalue0);

 const sum = linethree + Number(`${linefour}0`) + Number(`${linefive}00`);

 console.log(linethree);
 console.log(linefour);
 console.log(linefive);
 console.log(sum);

})
const arr =  ["472", "385"]
let firstvalue =arr[0];
let secondvalue = arr[1];
const [secondvalue0, secondvalue1 ,secondvalue2] = secondvalue.split('');
const linethree =  parseInt(firstvalue) * parseInt(secondvalue2);
const linefour =  parseInt(firstvalue) *  parseInt(secondvalue1);
const linefive =  parseInt(firstvalue) *  parseInt(secondvalue0);

const sum = linethree + Number(`${linefour}0`) + Number(`${linefive}00`);

console.log(linethree);
console.log(linefour);
console.log(linefive);
console.log(sum);

const fs = require('fs');

const [A, B] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [B0, B1, B2] = B.split('');

const temp1 = A * B2;
const temp2 = A * B1;
const temp3 = A * B0;
const sum = temp1 + Number(`${temp2}0`) +  Number(`${temp3}00`);

console.log(`${temp1}\n${temp2}\n${temp3}\n${sum}`)

//11382
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const sum = (Number(input[0]) + Number(input[1]) + Number(input[2]));
console.log(sum);

//고양이 출력
console.log("\\    /\\ ");
console.log(" )  ( ')");
console.log("(  /  )");
console.log(" \\(__)|");

//개 출력
console.log("|\\_/|");
console.log("|q p|   /}");
console.log(`( 0 )"""\\ `);
console.log(`|"^"` + "`   |");
console.log("||_/=\\\\__|");
// |\_/|
// |q p|   /}
// ( 0 )"""\
// |"^"`    |
// ||_/=\\__|