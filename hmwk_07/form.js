// * input 이벤트
// 값을 수정할 때마다 이벤트 발생

// * change 이벤트
// 요소 변경이 끝나면 이벤트 발생
// 텍스트 입력 요소의 경우 focus 를 잃으면 이벤트 발생
// select, input type=checkbox, input type=radio 인 경우 선택 값이 변경된 직후에 이벤트 발생

let shirtSize = [80, 85, 90, 95, 100, 105];
let pantsSize = [24, 26, 28, 30, 32, 34, 36];

shirtSize.forEach(size => {
    let template = `<option>${size}</option>`
    $('#option2').append(template);
})

$('#option1').on('change', function(e){

    $('#option2').html('');

    if($('#option1').val() === "셔츠"){
        shirtSize.forEach(size => {
            let template = `<option>${size}</option>`
            $('#option2').append(template);
        })
    } else if($('#option1').val() === "바지"){
        pantsSize.forEach(size => {
            let template = `<option>${size}</option>`
            $('#option2').append(template);
        })
    }

})