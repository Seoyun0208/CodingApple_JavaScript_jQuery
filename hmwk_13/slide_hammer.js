var slide = 1;

// * 슬라이드

$('.slide-1').click(function() {
  $('.slide-container').css('transform','translateX(0vw)');
  slide = 1;
});

$('.slide-2').click(function() {
  $('.slide-container').css('transform','translateX(-100vw)');
  slide = 2;
});

$('.slide-3').click(function() {
  $('.slide-container').css('transform','translateX(-200vw)');
  slide = 3;
});


$('.slide-prev').click(function() {
  
  if (slide > 1) {
    $('.slide-container').css('transform','translateX(-' + (slide-2) + '00vw)');
    slide -= 1;
  }
  
    // if (slide == 2) {
    //   $('.slide-container').css('transform','translateX(0vw)');
    //   slide = 1;
    // } else if (slide == 3) {
    //   $('.slide-container').css('transform','translateX(-100vw)');
    //   slide = 2;
    // }
}) 
      
$('.slide-next').click(function() {

  if (slide < 3) {
    $('.slide-container').css('transform','translateX(-' + slide + '00vw)');
    slide += 1;
  }
})


// * Hammer.js 활용

// 1. 터치 기능 구현할 이미지를 선택하여 변수 만들기
var image1 = document.querySelectorAll('.slide-box img')[0];
var image2 = document.querySelectorAll('.slide-box img')[1];
var image3 = document.querySelectorAll('.slide-box img')[2];

// 2. 해당 변수의 터치 이벤트를 관리할 매니저 변수 만들기
// - Pan, rotate, pinch 등을 체크할 수 있음
var manager1 = new Hammer.Manager(image1); 
var manager2 = new Hammer.Manager(image2); 
var manager3 = new Hammer.Manager(image3); 

// 3. 매니저 변수에 Pan 이벤트 체크해달라고 등록하기
// - threshold 및 숫자 부분은.. 최소한 얼마만큼의 숫자만큼 움직였을 때 체크할지 정하는 것!
manager1.add(new Hammer.Pan({ threshold : 0})); 
manager2.add(new Hammer.Pan({ threshold : 0})); 
manager3.add(new Hammer.Pan({ threshold : 0})); 

//  4. pan 될 때마다 특정 코드를 실행하라고 코드짜기
// 쌩자바스크립트로 짜는 경우에는 touchstart(터치 시작), touchmove(터치 중), touched(터치 끝) 을 사용 
// ! e.deltaX 로 이동한 거리 확인 가능
manager1.on('pan', function(e){
  // console.log(e.deltaX);
  // 왼쪽으로 그림을 슬라이드하면
  if (e.deltaX < -1) {
    // 슬라이드한 만큼 박스를 왼쪽으로 이동시켜야 함
    $('.slide-container').css('transform','translateX(' + e.deltaX +'px)');
    // 1번 그림에서 마우스를 놓으면
    if(e.isFinal) {
      // 다음 그림인 2번 그림이 서서히 나와야 함 
      // 1. transform 클래스 추가
      $('.slide-container').addClass('transform');
      // 2. 이미지 이동
      $('.slide-container').css('transform','translateX(-100vw)');
      // 3. 0.5 초 후 transform 클래스 제거
      setTimeout(function(){
        $('.slide-container').removeClass('transform');
      }, 500)
      slide = 2;
    }
  } 
})

manager2.on('pan', function(e){
  console.log(e.deltaX);
  // 왼쪽으로 그림을 슬라이드하면
  if (e.deltaX < -1) {
    // 슬라이드한 만큼 박스를 왼쪽으로 이동시켜야 함
    $('.slide-container').css('transform',`translateX(${e.deltaX - 1300}px`);
    // 2번 그림에서 마우스를 놓으면
    if(e.isFinal) {
      // 다음 그림인 3번 그림이 서서히 나와야 함 
      // 1. transform 클래스 추가
      $('.slide-container').addClass('transform');
      // 2. 이미지 이동
      $('.slide-container').css('transform','translateX(-200vw)');
      // 3. 0.5 초 후 transform 클래스 제거
      setTimeout(function(){
        $('.slide-container').removeClass('transform');
      }, 500)
      slide = 3;
    }
    // 오른쪽으로 그림을 슬라이드하면
  } else if (e.deltaX > 1) {
    // 슬라이드한 만큼 박스를 오른쪽으로 이동시켜야 함
    $('.slide-container').css('transform',`translateX(${e.deltaX - 1300}px`);
    // 2번 그림에서 마우스를 놓으면
    if(e.isFinal) {
      // 이전 그림인 1번 그림이 서서히 나와야 함 
      // 1. transform 클래스 추가
      $('.slide-container').addClass('transform');
      // 2. 이미지 이동
      $('.slide-container').css('transform','translateX(0vw)');
      // 3. 0.5 초 후 transform 클래스 제거
      setTimeout(function(){
        $('.slide-container').removeClass('transform');
      }, 500)
      slide = 1;
    }
  }
})

manager3.on('pan', function(e){
  console.log(e.deltaX);
  // 오른쪽으로 그림을 슬라이드하면
  if (e.deltaX > 1) {
    // 슬라이드한 만큼 박스를 오른쪽으로 이동시켜야 함
    $('.slide-container').css('transform',`translateX(${e.deltaX - 2600}px`);
    // 3번 그림에서 마우스를 놓으면
    if(e.isFinal) {
      // 이전 그림인 2번 그림이 서서히 나와야 함 
      // 1. transform 클래스 추가
      $('.slide-container').addClass('transform');
      // 2. 이미지 이동
      $('.slide-container').css('transform','translateX(-100vw)');
      // 3. 0.5 초 후 transform 클래스 제거
      setTimeout(function(){
        $('.slide-container').removeClass('transform');
      }, 500)
      slide = 2;
    }
  }
})