// ! Q2. 왜 이 변수는 동작하지 않죠? 

// 다음 코드를 실행했을 때 콘솔창에 무엇이 출력될까요? 

var name = 'park';
var id = 0;

function showName(){
  var name = 'kim';
  var id = 1;
  console.log(name);
}

showName();  // 'kim'
console.log(id); // 0