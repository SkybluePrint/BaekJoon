// const { syncBuiltinESMExports } = require("module");

const { validateHeaderValue } = require("http");

`use strict`;

// 삼성 싸피 대피 백준 알고리즘 연습
// CT보니깐 GRID 이산수학 등등 있길래 그거 알고리즘 위주로 공부 하려고 한다. 아직 책이 안나와서...
// 실버4티어니깐 할만할것 같다.

// 준규가 가지고 있는 동전은 총 N종류이고, 각각의 동전을 매무 많이 가지고 있다.
// 동전을 적절히 사용해서 그 가치 합을 K로 만들려고 한다. 이때 피룡한 동전 개수의 최솟값을 구하는 프로그램을 작성하시오.

//  INPUT = 첫째줄에 N K , 둘째줄에 N개의 줄에 동전의 가치가 A(I)가 오름차순으로 주어진다.
// 10개 종류의 동전  => 4200원을 만들어야한다. 최솟값을 출력


// const input = require("fs").readFileSync("example.txt").toString().split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// const coinType = Number(input[0].split(" ")[0]);
// let totalMoney = Number(input[0].split(" ")[1]);
// let result = 0;

// for (let i = coinType; i >= 1; i--) {
//     const inputCoin = Number(input[i]);
//     const leftValue = Math.floor(totalMoney / inputCoin);

//     if (leftValue <= 0) {
//         continue;
//     } else if (leftValue > 0) {
//         totalMoney = (totalMoney % inputCoin);
//         result = result + leftValue;
//     }
// }
// console.log(result);

// 1931번 회의실 배정

// n = 회의 수  , i = 시작과 끝나는 시간
// 첫재줄 n 둘째줄 n+1줄까지 회의 정보 시작시작 끝나는 시간

// const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

// let compareTime = 0;
// let maxBoookCount = 0;
// const meetingCount = Number(input[0]);
// for (let i = 1; i <= meetingCount; i++) {
//     const timeArr = input[i].split(' ');
//     const startTime = Number(timeArr[0]);
//     const endTime = Number(timeArr[1].replace(/\n|\r|\s*/g, ""));

//     if (compareTime > endTime || compareTime > startTime) {
//         continue;
//     }
//     compareTime = endTime;
//     maxBoookCount++;
// }
// console.log(maxBoookCount);


// 11399 ATM
// ATM = 1 N = 대기 사람 I = 사람INDEX P = 사람이 인출하는데 걸리는 시간
// INPUT = N /N 각 사람이 돈을 인출하는데 걸리는 시간

// const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

// let minTime = 0;
// let resultMin = 0;
// const sumTime = input[1].split(' ')
//     .map(Num => +Num)
//     .sort((a, b) => a - b)
//     .forEach(element => {
//         minTime = (minTime + element);
//         resultMin = resultMin + minTime;
//     });
// console.log(resultMin);


// 1541 일어버린 괄호
// 세준이
// 최소로 만들려면 -값이 가장 많아야겠지? => -로 일단 구분

// const input = require("fs").readFileSync("example.txt").toString().trim().split("-");
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("-");
// let inputSum = 0;
// let sumArr = [];
// input.forEach(value => {
//     value.split('+')
//         .map(Num => +Num)
//         .forEach(vlaue => {
//             inputSum = inputSum + vlaue;
//         });
//     sumArr.push(inputSum);
//     inputSum = 0;
// })

// // sumArr에서 빼줘야징
// let answer = 0;
// for (let i = 0; i < sumArr.length; i++) {
//     if (i === 0) {
//         answer = sumArr[i];
//     } else {
//         answer = answer - sumArr[i];
//     }
// }
// console.log(answer);

// 13305 주유소
//  기름 무제한 1km - 1l 도시당 하나의 주유소, 주유리터 가격 다름 단위 원
// 첫재줄 도시개수n / 둘째줄 도로길이 셋재줄 리터당 가격

// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
// // const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
// const city = Number(input[0]);
// let distance = input[1].split(" ").map((i) => BigInt(i));
// const oilPrice = input[2].split(" ").map((i) => BigInt(i));

// let result = 0n;
// let price = oilPrice[0];
// for (let i = 0; i < city - 1; i++) {
//     result += distance[i] * price;
//     if (price > oilPrice[i + 1]) {
//         price = oilPrice[i + 1];
//     }
// }
// console.log(result.toString());

// 일단 최솟값을 구해야함.
// oilPrice.forEach((value, index) => {
//     if (index === 0) {
//         minvalue = value;
//     } else if (minvalue > value && index !== oilPrice.length - 1) {
//         minvalue = value;
//     }
// })
// 순회 필요 없이


// let findit = false;
// for (let i = 0; i < city; i++) {
//     const nextCityDistance = distance[i] ?? 0;
//     const currentCityPrice = oilPrice[i];
//     if (minvalue < currentCityPrice && findit === false) {
//         result = result + (currentCityPrice * nextCityDistance);
//     } else if (minvalue === currentCityPrice || findit === true) {
//         result = result + (minvalue * nextCityDistance);
//         findit = true;
//     }
// }
// console.log(result);

// let distance = arr[0].split(' ').map(i => BigInt(i));
// let oilPrice = arr[1].split(' ').map(i => BigInt(i));



// 24416 피보나치수1
// const input = require("fs").readFileSync("example.txt").toString().trim();
// const input = require("fs").readFileSync("/dev/stdin").toString().trim();

// const num = Number(input);
// // 재귀함수
// let recursion = 0;
// let fibo = (n) => {
//     recursion++;
//     if (n === 1 || n === 2) {
//         return 1;
//     } else {
//         recursion--;
//         return (fibo(n - 1) + fibo(n - 2));
//     }
//     return (n === 1 || n === 2) ? 1 : (fibo(n - 1) + fibo(n - 2));
// }

// // 동적 프로그래밍
// let dynamic = 0;
// const fiboD = (n) => {
//     let f = [0, 1, 1];
//     for (let i = 3; i <= n; i++) {
//         const value = f[i - 1] + f[i - 2];
//         f.push(value);
//         dynamic++;
//     }
//     return f[n];
// }
// fibo(num);
// fiboD(num);
// console.log(recursion, dynamic);

// 9251번 LCS
// gold문제 한번 풀어보고 싶어서 도전!!
// lcs문제는 두 수열이 주어졌을때 모두의 부분 수열이 되는 수열 중 가장 긴것을 찾는 문제이다.
// 예를 들어 ACAYKP와 CAPCAK의 LCS 는 ACAK가 된다.


// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");

// const firstString = input[0].trim().split('');
// const secondString = input[1].split('');

// 규칙 알파벳이 서로 같은 칸은 대각선에서 +1을 한 값과 같다.
// 알파벳이 서로 다른 칸은 그 칸을 기준으로 윗칸이랑 왼쪽 칸중에서 큰 값과 같다.

// let lcsarr = [];
// console.log(iscarr);

// for (let i = 0; i < secondString.length; i++) {
//     for (let j = 0; i < firstString.length; j++) {
//         if (secondString[j] === firstString[i]) {
//             iscarr[i][j] = iscarr[i - 1][j - 1];

//         }
//     }
//     console.log(firstString, secondString);

// 신나는 함수 실행 실버 2
// 기존의 재귀함수 aber 시간이 너무 많이 걸림...

// if a <= 0 or b <= 0 or c <= 0, then w(a, b, c) 
// returns:  1

// if a > 20 or b > 20 or c > 20, then w(a, b, c) returns:
//     w(20, 20, 20)

// if a < b and b < c, then w(a, b, c) returns:
//     w(a, b, c-1) + w(a, b-1, c-1) - w(a, b-1, c)

// otherwise it returns:
//     w(a-1, b, c) + w(a-1, b-1, c) + w(a-1, b, c-1) - w(a-1, b-1, c-1)

// input = 정수 a b c  한줄에 하나씩 입력의 마지막은 -1-1-1 tp wjdtnrk ahem -1인 경우는 입력의 마지막을 제외하면 없다.
// output = w(a,b,c)를 출력한다.

// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
// console.log(input);

// 다시 생각해보자 dp => 배열이나 이런데 저장해서 다시 계산할 필요를 없게 만드는 것이다.

// 그렇다면 여기서는 a, b, c를 저장해야 한다. 하지만 여기서 조건이 20보다 크다면  20으로 만들기 때문에 배열의 크기는 21개가 

// const inputs = require('fs')
//     .readFileSync('/dev/stdin')
//     .toString()
//     .trim()
//     .split('\n')
//     .map((el) => el.split(' ').map(Number));

// const memo = Array(21)
//     .fill()
//     .map(() =>
//         Array(21)
//             .fill()
//             .map(() => Array(21).fill(0))
//     );

// const w = ([a, b, c]) => {
//     if (a <= 0 || b <= 0 || c <= 0) return 1;
//     if (a > 20 || b > 20 || c > 20) return w([20, 20, 20]);
//     if (memo[a][b][c] !== 0) return memo[a][b][c];
//     else if (a < b && b < c)
//         memo[a][b][c] = w([a, b, c - 1]) + w([a, b - 1, c - 1]) - w([a, b - 1, c]);
//     else
//         memo[a][b][c] =
//             w([a - 1, b, c]) +
//             w([a - 1, b - 1, c]) +
//             w([a - 1, b, c - 1]) -
//             w([a - 1, b - 1, c - 1]);
//     return memo[a][b][c];
// };

// const ans = [];
// for (let input of inputs) {
//     if (input[0] === -1 && input[1] === -1 && input[2] === -1) continue;
//     ans.push(w(input));
// }
// ans.forEach((el, idx) => {
//     console.log(
//         `w(${inputs[idx][0]}, ${inputs[idx][1]}, ${inputs[idx][2]}) = ${el}`);
// })

// 1904 01타일

// N := binarySize 
// conditions => only user '00' OR '1';
// input => N
// output => binary 경우의 수 % 15746



// 1 => 1
// 2 => (00 11)
// 3 => (001 100) 111
// 4 => (0000 1111) (0011 1100) 1001
// 5 => (00111 11100) (00001 10000) (10011 11001) 11111

// const input = require("fs").readFileSync("example.txt").toString().trim();
// const input = require("fs").readFileSync("/dev/stdin").toString().trim();

// const n = parseInt(input);
// function solution(N) {
//     const memo = new Array();
//     memo[1] = 1;
//     memo[2] = 2;
//     for (let i = 3; i <= N; i++) {
//         memo[i] = (memo[i - 2] + memo[i - 1]) % 15746;
//     }
//     console.log(memo[N]);
// }
// solution(n);

// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });
// let input;
// rl.on("line", function (line) {
//     input = line;
//     solution(Number(input));
//     rl.close();
// }).on("close", function () {
//     process.exit();
// });

// 9461 파도반 수열
// 나선모양 삼각형
// k = 가장 긴 변의 길이
// p(n) = 나선 정삼각형 수열
// n이 주어졌을대 p(n)을 구하여라

// input = 1.TestCase 2....N

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const testCase = Number(input[0]);
let triangleArr = [1, 1, 1];
let result = '';
// n = n-2 + n-3 
for (let j = 1; j <= testCase; j++) {
    const N = (Number(input[j]) - 1);
    if (N >= 3) {
        for (let i = 3; i <= N; i++) {
            const nvalue = (triangleArr[i - 2] + triangleArr[i - 3]);
            triangleArr.push(nvalue);
        }
    }
    result = triangleArr[N] + "\n";
}
console.log(result.trim());









