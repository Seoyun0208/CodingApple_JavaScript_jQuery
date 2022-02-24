// * Q. Array에서 철수라는 자료를 찾고 싶습니다. (검색 알고리즘)

// 출석부에 4명의 학생 이름이 들어가있습니다.
// 마음같아선 100개의 이름을 여기에 넣고 싶었지만 4개만 넣었습니다. 
// 이 출석부라는 Array에서 내가 원하는 이름이 있는지 없는지 알려주는 함수를 하나 만들고 싶어졌습니다. 
// 함수 안에 구멍(파라미터)로 이름을 집어넣으면 그 이름이 출석부에 있는지 없는지 콘솔창에 알려주어야합니다. 

// 어떻게 만들면 될까요? 
// (제한조건) 어디서 찾아온 find, indexOf 이런 함수들 사용 금지

// 실행결과 예시 : 
// 이름찾기('철수'); 라고 쓰면 콘솔창에 '있어요'라는 글자가 떠야합니다.
// 이름찾기('명수'); 라고 쓰면 콘솔창에 아무 글자도 뜨지 않아야합니다.
// 빨리 이름찾기라는 함수를 만들어봅시다. 

var 출석부 = ['흥민', '영희', '철수', '재석'];

function 이름찾기(name){
  // 여기에 어떤 코드가 들어가야할까요?
  for (let i = 0; i < 출석부.length; i++){
      if (name == 출석부[i]) {
          return console.log("있어요");
      }
  }
}

이름찾기('철수');
이름찾기('명수');