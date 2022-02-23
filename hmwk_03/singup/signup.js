// div 의 스크롤바 내린 양(scrollTop) + 눈에 보이는 div 높이(clientHeight) = div 의 실제높이(scrollHeight)
$('#sign-up-content').on('scroll', function(){
    let top = document.querySelector('#sign-up-content').scrollTop; // 917
    let sHeight = document.querySelector('#sign-up-content').scrollHeight; // 1509
    let cHeight = document.querySelector('#sign-up-content').clientHeight; // 592
    
    if (top + cHeight > sHeight - 20){
        alert('내용을 모두 확인했습니다.');
        $('#sign-up-content').unbind('scroll'); // scroll 이벤트 한번만 실행 후 삭제
    }
})