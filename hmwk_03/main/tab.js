// * 기본 탭 기능

function openTab(idx){
    $('.tab-button').removeClass('active');
    $('.tab-content').removeClass('show');
    $('.tab-button').eq(idx).addClass('active');
    $('.tab-content').eq(idx).addClass('show');
}

// for (let i = 0; i < $('.tab-button').length; i++){
//         $('.tab-button').eq(i).on('click', function(){
//             openTab(i);
//     })
// }


// * 탭 기능 업그레이드
// 이벤트리스너를 많이 사용하면 메모리를 많이 차지함
// dataset 사용하면 코드를 많이 축약할 수 있음!

$('.list').click(function(e){
    openTab(e.target.dataset.id);
})