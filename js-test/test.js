//콜백함수 => 콜백함수는 함수로써 다른 함수의 인자로 넘겨지는 함수다.
function add(x, y, callback) {
    const sum = x + y;
    callback(sum);
}
add(5, 5, function(result) {
    console.log(result);
})