// * Q. 갑자기 구구단을 콘솔창에 출력하고 싶습니다.

// 초등학생인 철수는 구구단을 외우기 넘나 힘든 관계로
// 자바스크립트를 이용해 콘솔창에 2단부터 9단까지 출력해주는 코드를 짜기로 합니다. 
// 2 x 2 = 4 뭐 이런식으로 출력되게하면 예쁘겠지만 귀찮은 관계로
// 4라는 곱셈 결과만 출력해주기로 합니다. 

// 콘솔창 출력결과 :

// 2
// 4
// 6
// 8
// 10
// ...

// 3
// 6
// 9
// 12
// 15
// ...

// 이렇게 차례로 2단, 3단... 그리고 9단의 마지막 81 까지... 결과만 출력되게 만들고 싶습니다.  
// 어떻게 자바스크립트 코드를 짜면 될까요? 

for (let i = 2; i < 10; i++) {
    for(let j = 1; j < 10; j++) {
        console.log(i * j)
    }
}