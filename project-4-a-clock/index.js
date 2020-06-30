var seconds = document.getElementById('h4')
var HoursMinutes = document.getElementById('h1')
var day = document.getElementById('day')
var dateT = document.getElementById('h6')
setInterval(() => {
    var now = new Date()
    var dayName = new Array(7);
    dayName[0] = "Sunday";
    dayName[1] = "Monday";
    dayName[2] = "Tuesday";
    dayName[3] = "Wednesday";
    dayName[4] = "Thursday";
    dayName[5] = "Friday";
    dayName[6] = "Saturday";
    day.innerHTML = dayName[now.getDay()]
    function addZero(number){
        if(number < 10){
            number = '0' + number
        }
        return number
    }
    var mounth = now.getMonth() + 1
    seconds.innerHTML = addZero(now.getSeconds())
    HoursMinutes.innerHTML = addZero(now.getHours()) + ':' + addZero(now.getMinutes())
    dateT.innerHTML = addZero(now.getDate()) + '/' + addZero(mounth) + '/' + now.getFullYear()
}, 1000)