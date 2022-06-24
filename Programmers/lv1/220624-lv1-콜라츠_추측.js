// https://programmers.co.kr/learn/courses/30/lessons/12943

function solution(num) {
  let count = 0;

  while (num !== 1) {
    count += 1;

    if (num%2 === 0) {
      num = num/2;
    } else {
      num = num*3 + 1;
    }

    if (count >= 500) {
      return -1;
    }
  }
  return count;
}
