// ! 상품 데이터

var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ]


// ! 상품 수만큼 카드 레이아웃 생성

function layout(items){
  items.forEach(item => {
    let template = `
    <div class="card">
      <img src="https://via.placeholder.com/600">
      <div class="card-body">
        <h5 class="title">${item.title}</h5>
        <p class="price">가격 : ${item.price}</p>
        <button class="btn btn-danger">주문하기</button>
      </div>
    </div>
    `
    $('#items').append(template);
  });
}


// ! 초기화면

layout(products);


// ! 가나다순 정렬 기능

$('#sortAbc').click(function(){
  let productsAbc = products.slice();
  productsAbc.sort(function(item1, item2){
    if (item1.title < item2.title) return -1;
    else if (item1.title == item2.title) return 0;
    else return 1;
  });

  $('#items').html('');
  layout(productsAbc);
  $('.title').css('background','#FFFF9A');

})

// ! 가격순 정렬 기능

// sort 함수는 기본적으로 문자 정렬
// sort 함수는 원 배열이 정렬되므로 주의!

$('#sortPrice').click(function(){
  let productsPrice = products.slice();
  productsPrice.sort(function(item1, item2){
    return item1.price - item2.price;
  });

  $('#items').html('');

  layout(productsPrice);
  $('.price').css('background','#FFFF9A');
})


// ! 필터 기능

// filter 함수는 특정 조건에 맞는 데이터를 찾음
// filter 함수와 같은 신함수는 기존의 데이터를 수정하므로 새로 변수에 담아 사용해야 함

// * map 함수
// 모든 데이터에 특정한 행위를 동일하게 하고 싶을 때 사용
// 기존의 데이터를 수정하므로 새로 변수에 담아 사용해야 함

$('#filterPrice').click(function(){
  let productsFilter = products.filter(function(item){
    return item.price <= 60000;
  });

  $('#items').html('');

  layout(productsFilter);
  $('.price').css('background','#FFFF9A');
})


// ! 원래대로 기능

$('#revert').click(function(){

  $('#items').html('');
  
  layout(products);
})