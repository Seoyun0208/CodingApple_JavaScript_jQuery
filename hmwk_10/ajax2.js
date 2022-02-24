// * 데이터 바인딩
// ! 이미지 src 바인딩은 $('태그명').attr('속성', '속성값') 사용하기

$('.btn-danger').click(function(){
    $.ajax({
        url : 'https://codingapple1.github.io/data.json',
        type : 'GET',
    }).done(function(data){
        console.log(data);
        $('.card-img-top').attr('src', data.img);
        $('.card-title').html(data.model);
        $('.card-text').html(data.price);
    })
})
