var p = document.getElementsByTagName('p')[0];
var tet = new Date('Feb 12, 2021 24:00:00').getTime();
var countDown = setInterval(run, 1000);

function run(){
    var now = new Date().getTime();
    var timeLeft = tet - now;
    var day = Math.floor(timeLeft / (60*60*24*1000));
    if(day < 10) day = '0' + day;
    
    var hours = Math.floor(timeLeft % (60*60*24*1000) / (1000*60*60));
    if(hours < 10) hours = '0' + hours;
    
    var mins = Math.floor(timeLeft % (1000*60*60) / (1000*60));
    if(mins < 10) mins = '0' + mins;

    var secs = Math.floor(timeLeft % (1000*60) / 1000);
    if(secs < 10) secs = '0' + secs;

    p.innerHTML = day + ' DAYS ' + hours + ' : ' + mins + ' : ' + secs;
    if(timeLeft === 0){
        clearInterval(countDown);
        p.innerHTML = 'HAPPY NEW YEAR 2021';
    }
}