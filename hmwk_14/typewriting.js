// * setTimeout 맛보기

// setTimeout(function(){
//     console.log('1초 후 실행되었습니다.')
// }, 1000)


// * 알파벳 쌩자바스크립트 구현

var h1Tag = document.querySelector('h1'); // h1 태그 자체 의미
var h1Letter = document.querySelector('h1').innerHTML; // h1 태그 내용 의미

// 1. 하드코딩
// // 버튼을 누르면
// $('button').click(function(){

//     // h1 을 빈칸으로 만든 후에
//     h1Tag.innerHTML = '';

//     // 0.5초 후에 h1 안에 a 를 입력
//     setTimeout(function(){
//         h1Tag.innerHTML += 's'
//     }, 500)

//     // 0.5초 후에 h1 안에 b 를 더해서 입력
//     setTimeout(function(){
//         h1Tag.innerHTML += 'e'
//     }, 1000)

//     // 0.5초 후에 h1 안에 c 를 더해서 입력
//     setTimeout(function(){
//         h1Tag.innerHTML += 'o'
//     }, 1500)

//     // 0.5초 후에 h1 안에 d 를 더해서 입력
//     setTimeout(function(){
//         h1Tag.innerHTML += 'y'
//     }, 2000)

//     // 0.5초 후에 h1 안에 e 를 더해서 입력
//     setTimeout(function(){
//         h1Tag.innerHTML += 'u'
//     }, 2500)

//     // 0.5초 후에 h1 안에 e 를 더해서 입력
//     setTimeout(function(){
//         h1Tag.innerHTML += 'n'
//     }, 3000)

// })

// 2. 하드코딩 업그레이드
// // 버튼을 누르면
// $('button').click(function(){

//     // h1 을 빈칸으로 만든 후에
//     h1Tag.innerHTML = '';

//     // 0.5초 후에 h1 안에 a 를 입력
//     setTimeout(function(){
//         h1Tag.innerHTML += h1Letter[0]
//     }, 500)

//     // 0.5초 후에 h1 안에 b 를 더해서 입력
//     setTimeout(function(){
//         h1Tag.innerHTML += h1Letter[1]
//     }, 1000)

//     // 0.5초 후에 h1 안에 c 를 더해서 입력
//     setTimeout(function(){
//         h1Tag.innerHTML += h1Letter[2]
//     }, 1500)

//     // 0.5초 후에 h1 안에 d 를 더해서 입력
//     setTimeout(function(){
//         h1Tag.innerHTML += h1Letter[3]
//     }, 2000)

//     // 0.5초 후에 h1 안에 e 를 더해서 입력
//     setTimeout(function(){
//         h1Tag.innerHTML += h1Letter[4]
//     }, 2500)

//     // 0.5초 후에 h1 안에 e 를 더해서 입력
//     setTimeout(function(){
//         h1Tag.innerHTML += h1Letter[5]
//     }, 3000)

// })

// 3. for 문 사용
$('button').click(function(){
    $('h1').show();
    animation(h1Tag, h1Letter);
})

function animation(tag, letter){
    tag.innerHTML = '';
    for(let i=0; i < letter.length; i++){
        setTimeout(function(){
            tag.innerHTML += letter[i]
        }, (i+1)*100)

    }
}
