// ! Q4. 커피 리필을 이상하게 해주는 곳이 있습니다. 최대한 마실 수 있는 커피양을 계산해봅시다. 

 
// 방금 마신 커피의 3분의 2만큼 총 2번 리필해주는 카페가 있습니다.
// 예를 들면 처음 커피를 90ml 주문하면 첫 리필은 60ml를 해주며, 그 다음 리필은 40ml를 해주는 카페입니다.
// 그럼 처음 주문한 커피 양에 따라서 최대한 마실 수 있는 커피를 콘솔창에 계산해주는 코드를 작성해봅시다. 

// (동작예시)
// var first에 360을 집어넣으면 위 코드를 실행했을 때 콘솔창에 760이 출력되어야합니다. (360 + 240 + 160)

var first = 360;
var total = 0;

//여기 어떤 코드가 들어가면 될까요? 
total = first + first * 2/3 + (first * 2/3) * 2/3

console.log(total);