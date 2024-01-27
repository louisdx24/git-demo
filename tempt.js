/** //使用let優於var
prompt() 提示輸入
let radius = prompt("請輸入半徑:");

//常數宣告
const PI = 3.14;

//計算圓面積
let area = radius * radius * PI;
let result = "面積為:" + area;

//輸出到console
console.log(radius, typeof (radius), area, result);

//輸出到網頁
document.write("<h2>" + result + "</h2>");

alert
alert(result);


//計算 BMI
let height = prompt("請輸入身高(cm):");
let weight = prompt("請輸入體重(kg):");
let BMI = weight / (height * 0.01) ** 2;
let result = "<ul>";
result += "<li>身高: " + height + "</li>";
result += "<li>體重: " + weight + "</li>";
result += "<li>BMI: " + BMI.toFixed(2) + "</li>";
result += "</ul>";
console.log(height, weight, BMI);
document.write(result);


let email = "qwer@abc.com"
for (let i = 0; i < email.length; i++) {
    console.log(i, email[i]);
}
console.log(email[email.length - 1]);


型態轉換
三個等於可以比對型態
console.log(10 == "10"); //true
console.log(10 === "10"); //false
console.log(String(10) === "10"); //true
console.log(10 === Number("10")); //true


        邏輯 or: ||, and: &&, !: not
let ch = 60;
let eng = 60;
let math = 59;
if ((ch >= 60 || eng >= 60) && math >= 60) {
    console.log("pass");
} else {
    console.log("fail");
}
console.log(Math.PI);

//取得1~10之間亂數(不包含10)
0~1浮點數
0~10 randint(1, 10)
1~49 >> let r = Math.floor(Math.random() * 49) + 1
let r = Math.floor(Math.random() * 10);
console.log(r);

for (let i = 0; i < 10; i++) {
    let r = Math.floor(Math.random() * 10) + 1;
    console.log(r);
}

while (true) {
    let r = Math.floor(Math.random() * 49) + 1;
    console.log(r);
    if (r == 49) {
        break;
    }
}
for (let i = 0; i < 6; i++) {

    console.log(x);
    //document.write("<h3>第" + (i + 1) + "個號碼:" + y + "</h3>");
    // ` >> 位於 esc 鍵下面
    //document.write(`<h3>第${(i + 1)}個號碼:${x}</h3>`);
    numbers.push(x);
}
**/

let user = {
    name: "Jerry",
    height: 178.6,
    weight: 77.8
}

//計算 BMI 函式
function getBMI(height, weight) {
    let bmi = weight / (height / 100) ** 2;
    if (isNaN(BMI)) {
        return "數值錯誤!";
    }
    return bmi.toFixed(2);
}