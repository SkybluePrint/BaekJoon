`use strict`;

// String 단계

// 27866 문자와 문자열

// 단어 S와 정수 i가 주어졌을때 S의 I번째 글자를 출력하는 프로그램을 작성하기오.
// 첫재 줄에 영어 소문자와 대문자로만 이루어진 단어 s가 주어진다.
// 둘째 줄에 정수 i가 주어진다.

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(input[0].charAt(((input[1]) - 1)));

// 2743번 단어 길이 재기

// 알파벳으로만 이루어진 단어를 입력받아, 그 길이를 출력하는 프로그램을 작성하시오
// INPUT = 단어
// OUTPUT = 단어길이

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().length;

console.log(input);

// 9089 문자열

// input = string
// output = 첫글자와 마지막 글자

// const filePath = "3\nACDKJFOWIEGHE\nO\nAB";
// const input = filePath.trim().split("\n");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let consoleString = '';

for (let i = 0; i < input.length; i++) {
    const isItString = input[i];
    if (isNaN(isItString) === true) {
        consoleString = `${consoleString}${isItString[0]}${isItString[isItString.length - 1]}\n`;
    }
}
console.log(consoleString.trim());

// 11654 아스키코드

// 알파벳 소문자, 대문자, 숫자 0-9중하나가 주어졌을대 주어진 글자의 아스키 코드값을 출력하는 프로그램을 작성하시오.
// input > 알파벳 소문자 대문자 숫자(0-9)중 하나가 주어짐
// output > 입력으로 주어진 글자의 아스키 코드 값을 출력한다.

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

console.log(input.charCodeAt(0));

//아스키코드 변환 => charCodeAT(0);

// 11720 숫자의 합

// N개의 숫자가 공백 없이 쓰여짐
// input > 첫째줄 n = 숫자의 개수 / 둘째줄 숫자 n개가 공백없이 주어진다.
// output > 입력으로 주어진 숫자 n개의 합을 출력한다.


// const filePath = "5\n54321";
// const input = filePath.trim().split("\n");

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = input[0];
let sum = 0;
for (let i = 1; i <= n; i++) {
    const inputnum = Number(input[1][i - 1]);
    sum = (sum + inputnum);
}
console.log(sum);

// 10809 알파벳 찾기
// 
// input > s = 단어 (100 down , down) 
// output >
// conditons 
// a가 처음 등장하는 위치 b ~ z까지 처음등장하는 위치를 공백으로 구분해서 출력한다.
// 단어가 포함 x = -1;
// 단어의 첫번째 글자는  0번재 위치, 두번째 글자는 1번째 위치이다.

// 알파벳 26개 소문자 asc코드 97 - 122
// 입력받은 문자를 아스키코드로 변환

const input = "baekjoon";
let inputasc = [];

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

for (let i = 0; i < input.length; i++) {
    inputasc.push(input[i].codePointAt());
}

// a-z ascAlphaArray
let alphaArr = [];
for (let i = 97; i <= 122; i++) {
    const isInclude = inputasc.some((element) => element === i);
    if (isInclude) {
        alphaArr[i] = inputasc.indexOf(i);
    } else {
        alphaArr[i] = -1;
    }
}
console.log(alphaArr.join(" "));

//풀긴 풀었는데 runtimeError 뜸..... 그 이유는 ?? indexof()가 일치하는 값이없으면 -1을 반환하는것과 Stirng.fromCharCode()를 몰랐기 때문...

const input = require("fs").readFileSync("/dev/stdin").toString();

const resultArr = [];

for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
    resultArr.push(input.indexOf(String.fromCharCode(i)));
}

console.log(resultArr.join(" "));


// 문자열 반복

// 문자열 S를 입력
// R번 반복 => 새 문자열 P OUTPUT
// INPUT > T = 테스트케이스의 개수 / R = 반복횟수 S = 문자열 공백으로 구분되어짐 (S.LENGHT 1 ~ 20)
// OUTPUT > 그냥 출력

// const filePath = "2\n3 ABC\n5 /HTP";
// const input = filePath.trim().split("\n");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const testCount = Number(input[0]);
let resultvalue1 = '';
for (let i = 1; i <= testCount; i++) {
    // 안에서는 문자열 출력을 다뤄야지 아마 2~3중 반복문 써야할듯
    const loopCount = Number(input[i].split(" ")[0]);
    const inputStr = input[i].split(" ")[1];

    for (let j = 0; j < inputStr.length; j++) {
        for (let k = 0; k < loopCount; k++) {
            resultvalue1 = `${resultvalue1}${inputStr[j]}`;
        }
    }
    resultvalue1 = resultvalue1 + "\n";
}
console.log(resultvalue1);

// 1152 단어의 개수

// input > 1/ 영어대소문자, 공백 문자열(<1000000, 단어는 공백 한개로 구분되고 공백이 연속해서 나오지 않음, 문자열은 공백으론 시작하거나 끝날수 있음)

// 이거 비스무리한거 api본거 같은데? 아니 근데 그냥 트림에 스플릿 쓰면 되는거 아님?
// 빈값만 들어오는 testcase가 있음.

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");


console.log(input[0] === "" ? 0 : input.length);









