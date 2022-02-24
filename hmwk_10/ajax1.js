// ! Ajax 개념 정리
// * Ajax : 서버에다가 GET/POST 요청을 할 수 있게 도와주는데 새로고침 없이 요청할 수 있음
// * 서버 : 접속자가 요청을 하면 데이터를 가져다 줌
// * 요청 : GET, POST, PUT, DEL
// - GET : URL 을 입력해서 요청함 (읽기)
// - POST : 숨겨서 뭔가 정보를 전달하거나 요청함 (쓰기)


// * GET 요청해보기
$.ajax({
    url : 'https://codingapple1.github.io/hello.txt',
    type : 'GET',
});


// * GET 요청 결과 콘솔창에서 확인해보기
$.ajax({
    url : 'https://codingapple1.github.io/hello.txt',
    type : 'GET',
}).done(function(data){
    // ajax 성공 시 실행할 코드
    console.log(data);
}).fail(function(){
    // ajax 실패 시 실행할 코드
}).always(function(){
    // ajax 요청 시 항상 실행할 코드
});


// * 버튼을 눌렀을 때, GET 요청으로 받아온 데이터로 #hello 의 내용 교체해보기
$('.btn-danger').click(function(){
    $.ajax({
        url : 'https://codingapple1.github.io/hello.txt',
        type : 'GET',
    }).done(function(data){
        $('#hello').html(data);
    });
})  