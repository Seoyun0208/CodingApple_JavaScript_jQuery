// * Q1. 함수에 분과 초를 차례로 파라미터로 입력하면 ms단위로 바꿔서 뱉어주는 함수를 만들어봅시다.
// (1초 == 1000ms 입니다)

// (동작예시)
// console.log(함수(1,30))
// 이렇게 사용하면 콘솔창에 90000이 출력되어야합니다 (90초 x 1000)
// console.log(함수(2,10))
// 이렇게 사용하면 콘솔창에 130000이 출력되어야합니다 (130초 x 1000)

function changeMs(m, s){
    let result = (m * 60 + s) * 1000;
    return result;
}

console.log(changeMs(1,30));
console.log(changeMs(2,10));


// * Q2. 가격을 파라미터로 입력하면 10% 할인가를 뱉는 함수를 만들어봅시다.
// 근데 첫 구매여부도 true/false로 둘째파라미터에 입력해서 첫 구매가 맞을 경우 추가로 1.5 달러도 할인해줘야합니다. 
// 주의사항은 가격으로 10.3 이런거 넣으면 뒤에 소수점 길게 나올 수도 있으니 알아서 처리해보든가 합시다. 

// (동작예시)
// console.log(함수(70, false))
// 이렇게 사용하면 콘솔창에 63이 출력되어야합니다 (10% 할인가격이고 추가할인 없음)
// console.log(함수(10, true))
// 이렇게 사용하면 콘솔창에 7.5가 출력되어야합니다 (10% 할인가격 9에 추가할인 1.5 해줌)

function discount(price, trueFalse){
    let total = price * 0.9;

    if(trueFalse){
        total -= 1.5;
    } else {
        total;
    }
    return parseFloat(total.toFixed(1));
}

console.log(discount(70, false));
console.log(discount(10, true));
console.log(discount(10.3, true));