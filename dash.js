//script for show clock on top side bar
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
        m = checkTime(m);

    document.getElementById('hello').innerHTML =
       "Hello : "+ h + ":" + m;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
//script

function findBiggest(a,b) {
    console.log("the function is running !");
    a>b ? console.log("a :", a)  : console.log("b", b);
    }

    var first = 3/4;
    var second = 5/7;

findBiggest(4,5);