// Clock
function clock() {
    const fulDate = new Date();
    let hours = fulDate.getHours();
    let mins = fulDate.getMinutes();
    let secs = fulDate.getSeconds();

    if (hours < 10) {
        hours = '0' + hours;
    }
    if (mins < 10) {
        mins = '0' + mins;
    }
    if (secs < 10) {
        secs = '0' + secs;
    }

    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = ': ' + mins;
    document.getElementById('second').innerHTML = ': ' + secs;
}

setInterval(clock, 1000);


// Tips Calculator
document.getElementById('container').onchange = function () {
    var bill = Number(document.getElementById('billTotal').value);
    // alert(bill);
    var tipPercent = document.getElementById('tipInput').value;
    var split = document.getElementById('splitInput').value;
    var tipValue = bill * (tipPercent / 100);
    var newBillEach = (bill + tipValue) / split;
    var tipEach = tipValue / split;


    document.getElementById('tipOutput').innerHTML = tipPercent + "%";
    document.getElementById('splitOutput').innerHTML = split;
    document.getElementById('newBill').innerHTML = "$" + newBillEach.toFixed(2);
    document.getElementById('tipEach').innerHTML = "$" + tipEach.toFixed(2);
}