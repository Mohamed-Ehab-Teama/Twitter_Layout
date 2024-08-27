function bankai() {
    document.getElementById('body-edit').style.backgroundImage = "url('imgs/Unohana .jpg')";
    document.getElementById('body-edit').style.backgroundRepeat = "repeat-y";
    document.getElementById('body-edit').style.backgroundSize = "cover";
}

// function aboutUs() {
//     alert("Hello, This is out Twitter Simulation, We will be happy to know that our project is great according to you all . ");
// }

function normalbg() {
    document.getElementById('body-edit').style.backgroundImage = 'none';
    document.getElementById('body-edit').style.backgroundColor = 'black';
}

function redbg() {
    document.getElementById('body-edit').style.backgroundColor = 'red';
}

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();