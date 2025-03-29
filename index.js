const trans = document.getElementById('transport')
const price = document.getElementById('price')
const date = document.getElementById('date')
const ts = document.getElementById('ts')
const time = document.getElementById('time')

const trans_input = document.getElementById('trans_input')
const price_input = document.getElementById('price_input')
const date_input = document.getElementById('date_input')
const ts_input = document.getElementById('ts_input')

const body = document.getElementById('body')
const btt = document.getElementById('btt')
const add = document.getElementById('add');
const ipt = document.getElementById('ipt')

const generate = () => {
    trans.innerHTML = trans_input.value;
    price.innerHTML = `
    ${price_input.value} 
    <span _ngcontent-ng-c2808523327="" class="payment-info-details__rouble">₽</span>
    `;
    date.innerHTML = date_input.value;
    ts.innerHTML = `
    <span _ngcontent-ng-c2808523327="">Т/С: </span>
    ${ts_input.value}
    `;
    ipt.innerHTML = ``;
}

document.addEventListener("DOMContentLoaded", function () {
    let seconds = 0;

    function updateTimer() {
        seconds++;
        let minutes = Math.floor(seconds / 60);
        let sec = seconds % 60;
        document.getElementById("timer").textContent =
            String(minutes).padStart(2, '0') + ":" + String(sec).padStart(2, '0');
    }

    setInterval(updateTimer, 1000);
});

btt.addEventListener('click', generate)