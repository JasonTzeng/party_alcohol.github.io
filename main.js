// 取得按鈕元素
var button = document.getElementById("myButton");

// 為按鈕加上點擊事件監聽器
button.addEventListener("click", function() {
    // 取得文字元素
    var heading = document.getElementById("myHeading");
    
    // 改變文字的顏色
    heading.style.color = "red";
});