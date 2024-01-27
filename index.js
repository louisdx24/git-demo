//object > json
const dateE1 = document.querySelector(".date");
dateE1.innerText = Date();
console.log(dateE1);
//document.write(Date());

//函式宣告
function getRandomInt(start, end) {
    let x = Math.floor(Math.random() * end) + start;
    return x
}

function getnumbers(num) {
    //使用陣列(串列)
    //外迴圈(控制組數)產生五組號碼
    let rows = [];
    for (let i = 0; i < num; i++) {
        //內迴圈產生每組六個號碼
        let numbers = [];
        while (true) {
            let xstart = 1;
            let xend = 49;
            let x = getRandomInt(xstart, xend);
            if (!numbers.includes(x)) {
                numbers.push(x)
            }
            if (numbers.length == 6) {
                break;
            }
        }
        //排序
        function compare(a, b) {
            return a - b; //b-a 為降序
        }
        numbers.sort(compare);
        rows.push(numbers);
    }
    return rows;
}

function getlottory() {
    const lottory1 = document.querySelector("#lottory");
    let num = prompt("樂透組數");
    let rows = getnumbers(num);
    lottory1.innerHTML = "";
    for (let i = 0; i < rows.length; i++) {
        let result = rows[i].join(",")
        console.log(result);
        lottory1.innerHTML += `<h3>第${i + 1}組號碼:${result}</h3><hr>`;
        //document.write(`<h3>第${i + 1}組號碼:${result}</h3><hr>`);
    }
}

const h1 = document.querySelector("h1");
console.log(lottory);
h1.innerHTML = "<u>大樂透</u>";
h1.style.color = "red";
