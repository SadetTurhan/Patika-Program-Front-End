// getting users name and adding it to the page
let getName = prompt();
const userName = document.getElementById("myName");
userName.innerText = getName;

//getting time 
function showTime(){
    var currentTime = new Date(),
    hours = currentTime.getHours(),
    minutes = currentTime.getMinutes(),
    seconds = currentTime.getSeconds(),
    text =  (hours + ':' + minutes + ':' + seconds);
    document.getElementById("timeOfTheDay").innerHTML = text;

    //getting day of the week
    var date = new Date();
    const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let day = days[date.getDay()];
    const dayOfTheWeek = document.getElementById("dayOfTheWeek");
    dayOfTheWeek.innerHTML = day;
}
//set interval so it works again every second
setInterval(showTime,100);
