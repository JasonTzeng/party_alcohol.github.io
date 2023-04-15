// main.js

// 取得標題元素
var myHeading = document.getElementById('myHeading');

// 更改顏色的函式
function changeHeadingColor() {
    // 隨機生成顏色
    var color = getRandomColor();

    // 設定標題顏色
    myHeading.style.color = color;
}

// 隨機生成顏色的函式
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
