'use strict';
//단계별 풀이 - 4. 1차원 배열.

//10807
// 총 n개의 정수가 주어졌을대 정수 v가 몇개인지 구하는 프로그램을 작성하시오
// 첫째 정수 n
// n개의 정수가 나열되어 있음
// v정수를 찾아야함.

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const intN = Number(input[0]);
//정수를 배열에 넣어주자
const arrayNum = input[1].split(" ");
const searchV = input[2];
let overlap = 0;
for (let i = 0; i < intN; i++) {
    if (arrayNum[i] === searchV) {
        overlap++;
    }
}
console.log(overlap);

//10871 x보다 작은 수
// 첫째 줄에 n개로 이루어진 수열 a와 정수 x 
// 둘째 줄에 수열 a를 이루는 정수 n개

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

for (let i = 0; i < index; i++) {
    const num = Number(compareArray[i]);
    if (num > max) {
        max = num;
    }
    if (num < min) {
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
for (let i = 0; i < input.length; i++) {
    const num = Number(input[i]);
    if (num > max) {
        max = num;
        when = (i + 1);
    }
}
console.log(`${max}\n${when}`);
//output 첫째줄 최댓값 \n 후 몇번째 수

// 10810 공넣기
// 도현이는 바구니를 총 N개 가짐 1->n개 
// 처음 바구니 0 / 바구니에는 공 하나
// m번 넣고 싶음 => 바구니에 넣을 범위를 정하고 정한 바구니에 모두 같은 번호가 적혀있는 공을 넣음
// 공이 있음 RETURN 바구니에서 공-- 새공++
// 공을 넣을 바구니에는 연속되어 있어야함.
// M번 공을 넣은 이후에 각 바구니에 어떤 공이 들어 있는지 구하는 PROGRTAMM 작성하기

// INPUT VALUE
// 첫째줄 : N(바구니 개수) M(넣는 개수)
// 둘째줄 : M개의 줄에 걸쳐 공넣는 방법 주어짐 I(바구니 범위), J(바구니 범위), K(공 번호)로 주어지는데 

// const filePath = "5 4\n1 2 3\n3 4 4\n1 4 1\n2 2 2";
// const input = filePath.split("\n");

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0].split(" ")[0]);
const m = Number(input[0].split(" ")[1]);

// 처음에 그냥 0을 다 넣어서 초기화하자.
let basket = [];
for (let i = 0; i < n; i++) {
    basket.push(0);
}

// 바스켓을 초기화 시켰으니깐 
// input에서 string배열으로 return 됌
for (let i = 1; i <= m; i++) {
    const methodArr = input[i].split(" ").map(i => Number(i));
    let bRangeStart = (methodArr[0] - 1);
    let bRangeEnd = (methodArr[1] - 1);
    const ballValue = methodArr[2];

    for (let j = bRangeStart; j <= bRangeEnd; j++) {
        basket[j] = ballValue;
    }
}
const arrMakeToString = basket.join(" ");
console.log(arrMakeToString);

// 10813 공 바꾸기
// 조건
// 바구니 N개 =  1~n까지 번호
// 바구니당 공 1개
// 처음에는 바구니의 번호와 공의 번호가 같음
// M번 공을 바꿈
// 공을 바꿀 바구니 2개 select 서로 교환

// input
// 첫째줄 := "n m" n = 바구니 개수 , m = 공을 바꿀 개수
// 둘째줄 := "i j" >> switch(i j);

// output
// 바구니 all

// const filePath = "5 4\n1 2\n3 4\n1 4\n2 2";
// const input = filePath.split("\n");

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const basketCount = Number(input[0].split(" ")[0]); //조건 사용
const howManyChange = Number(input[0].split(" ")[1]); //조건 미사용 => 반복문을 사용하란 소리

//초기화 처음 바구니를 만들자.
let basketArr = [];
for (let i = 1; i <= basketCount; i++) {
    basketArr.push(i);
}

//바구니를 선택? 배열을 찾아서 switch처럼 tempt 값을 찾아서 만들면 되잖아 easy
for (let i = 1; i <= howManyChange; i++) {
    const giveBasketindex = (input[i].split(" ").map(i => Number(i))[0] - 1);
    const metogiveBasketindex = (input[i].split(" ").map(i => Number(i))[1] - 1);
    const temptBasketValue = basketArr[giveBasketindex];
    basketArr[giveBasketindex] = basketArr[metogiveBasketindex];
    basketArr[metogiveBasketindex] = temptBasketValue;
}
const result = basketArr.join(" ");
console.log(result);


// 5597 과제 안내신 분?

// conditions
// class in 30students 
// studentsNum = 1~30
// submit specialHomeWork = 28 
// Find nonsubmit studentsNum

// input
// 28줄

// output
// 없는거 2줄


// const filePath = "1\n3\n4\n5\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21\n22\n23\n24\n25\n26\n27\n28\n29\n30";
// const input = filePath.split("\n").map(i => Number(i));

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(i => Number(i));

let stupidStudents = ``;
//input value
const searchArr = [];
for (let i = 1; i <= 30; i++) {
    searchArr[(i - 1)] = i;
}

for (let i = 0; i < searchArr.length; i++) {
    const searchArrValue = searchArr[i];
    stupidStudents = (input.includes(searchArrValue) ? stupidStudents : `${stupidStudents}${searchArrValue}\n`);
}

console.log(stupidStudents.trim());

//3052 나머지

// conditions
// 자연수 A B
// A % B

// INPUT
// 수 10개
// 42로 나눈 나머지

// OUTPUT
// 서로 다른 값이 몇개인지 출력

// const filePath = "1\n2\n3\n4\n5\n6\n7\n8\n9\n10";
// const input = filePath.split("\n").map(i => Number(i));

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(i => Number(i));


// INPUT에서 10개의 수가 출력되는데 여기서 일단 나머지 부터 구해야함.

let valueStoarage = [];

input.forEach((item) => {
    const rest = (item % 42);
    if (valueStoarage.includes(rest) === false) {
        valueStoarage.push(rest);
    }
})

console.log(valueStoarage.length);

//10811번 바구니 뒤집기

// 바구니를 1~n개
// m번 바구니의 순서를 역순으로
// 역순 범위를 지정

// INPUT
// 첫째줄에 "N M" N = 바구니 개수 M = 몇번 역순 할것인지
// 두번째 줄부턴 I J 배율 범위

const filePath = "5 4\n1 2\n3 4\n1 4\n2 2";
const input = filePath.split("\n");


const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const basketCount = Number(input[0].split(" ")[0]);
const howManyReverse = Number(input[0].split(" ")[1]);

//초기화 처음 바구니를 만들자.
let basketArr = [];
for (let i = 1; i <= basketCount; i++) {
    basketArr.push(i);
}
// SLICE를 써서 거기에 REVERSE를 -> slice? 
for (let i = 1; i <= howManyReverse; i++) {

    const reverseRangH = (input[i].split(" ").map(i => Number(i))[0]);
    const reverseRangT = (input[i].split(" ").map(i => Number(i))[1]);
    let reverseArr = [];

    for (let j = reverseRangH - 1; j < reverseRangT; j++) {
        reverseArr.push(basketArr[j]);
    }
    reverseArr.reverse();
    basketArr.splice(reverseRangH - 1, reverseRangT - reverseRangH + 1, ...reverseArr);
}

// basketArr.join(" ");
console.log(basketArr.join(" "));

// 1546 평균

// MaxScore = M
// Another Score = RealScore/M * 100

// INPUT
// 첫째줄 > N = 과목개수
// 둘째줄 > currentScore = 세준이의 현재 성적

//max값찾고
// Score => new Score 변환
// average 계산

// OUTPUT
// new average
const filePath = "3\n40 80 60";
const input = filePath.split("\n");

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");


let fakeScore = 0;
const subjectCount = Number(input[0]);

let maxScore = 0;
input[1].split(" ").forEach((item) => {
    if (Number(item) >= maxScore) {
        maxScore = Number(item);
    }
})

for (let i = 0; i < subjectCount; i++) {
    const currentScore = input[1].split(" ").map(i => Number(i))[i];
    const score = ((currentScore / maxScore) * 100);
    fakeScore = fakeScore + score;
}
const fakeScoreAverage = (fakeScore / subjectCount);
console.log(fakeScoreAverage);
