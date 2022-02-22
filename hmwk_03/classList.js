// 상단 : 모달창
$('.btn-login').eq(0).on('click', function(){
    $('.black-bg').eq(0).toggleClass('show');
})

$('#close').on('click', function(){
    $('.black-bg').eq(0).toggleClass('show');
})

function isEmail(asValue) {
    var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    return regExp.test(asValue);
}

function isPassword(asValue) {
    var regExp = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;

    return regExp.test(asValue);
}

$('#submit').on('click', function(e){
    if($('#email').val() == '') {
        e.preventDefault();
        alert('아이디를 입력하세요.');
    }

    if(!isEmail($('#email').val())) {
        e.preventDefault();
        alert('이메일 형식의 아이디가 아닙니다.');
    }

    if ($('#password').val() == '') {
        e.preventDefault();
        alert('비밀번호를 입력하세요.');
    } else if ($('#password').val().length < 8) {
        e.preventDefault();
        alert('비밀번호가 8자리 미만입니다.');
    }

    if(!isPassword($('#password').val())) {
        e.preventDefault();
        alert('영문, 숫자, 특수문자를 최소 한 가지씩 조합하여 8~16자리 비밀번호를 입력하세요.');
    }
})

// document.getElementById('email').addEventListener('input', function(){
//     console.log('input 이벤트는 input 에 입력한 값이 바뀔 때 발생한다.');
// })

// document.getElementById('email').addEventListener('change', function(){
//     console.log('change 이벤트는 input 에 입력한 값이 바뀌고 포커스를 잃을 때 발생한다.');
// })

$('#pw-text').hide();
$('#password').on('input', function(){
    if($('#password').val() != '' && $('#password').val().length < 8){
        $('#pw-text').show();
    } else {
        $('#pw-text').hide();
    }
})

// 상단 : Navbar
var cnt = 0;
$('#badge').on('click', function(){
    cnt++;
    if(cnt % 2){
        $('#badge').html('🌞 Light Mode 🔄');
        $('body').addClass('dark');
        $('.navbar').addClass('navbar-dark');
        $('.navbar').removeClass('navbar-light');
        $('.navbar').addClass('bg-dark');
        $('.navbar').removeClass('bg-light');
        $('#logo').addClass('dark');
        $('.btn-login').addClass('dark');
        $('.list-group-item').addClass('dark');
        $('.white-bg').addClass('dark');
        $('.btn').addClass('dark');
    } else {
        $('#badge').html('🌝 Dark Mode 🔄');
        $('body').removeClass('dark');
        $('.navbar').addClass('navbar-light');
        $('.navbar').removeClass('navbar-dark');
        $('.navbar').addClass('bg-light');
        $('.navbar').removeClass('bg-dark');
        $('#logo').removeClass('dark');
        $('.btn-login').removeClass('dark');
        $('.list-group-item').removeClass('dark');
        $('.white-bg').removeClass('dark');
        $('.btn').removeClass('dark');
    }
})

$('.navbar-toggler').eq(0).on('click', function(){
    $('.list-group').eq(0).slideToggle('show');
})

// 상단 : Timeout
var count = 5;
setInterval(function(){
    count -= 1;
    if (count > 0) {
        $('#time').html(count);
    } else {
        $('#time-alert').hide();
    }
}, 1000);

// 중앙 : 이미지 슬라이드
$('.slide-1').on('click', function(){
    $('.slide-container').css('transform', 'translateX(0vw)');
    $('.slide-container').css('transition', 'all 1s');
})

$('.slide-2').on('click', function(){
    $('.slide-container').css('transform', 'translateX(-100vw)');
    $('.slide-container').css('transition', 'all 1s');
})

$('.slide-3').on('click', function(){
    $('.slide-container').css('transform', 'translateX(-200vw)');
    $('.slide-container').css('transition', 'all 1s');
})
