// *  예시 1

function 함수(){
    return 1 + 3
}

console.log(함수());


// *  예시 2
// ! 소수점 있는 숫자는 연산할 때 약간의 오차가 발생
// ! 그 오차는 무시해버려도 될 정도로 작으므로 반올림과 같은 형태로 자르는 게 일반적
// ! .toFixed() 를 사용하면 반올림할 수 있지만 문자열로 반환되니 주의할 것!!
// ! parseFloat() 이나 parseInt() 사용하면 숫자로 반환 가능

console.log(60000 * 0.1);

function vat(a){
    var num = (a * 1.1).toFixed(1);
    return parseFloat(num);
}

console.log(vat(60000));
console.log(vat(55555));