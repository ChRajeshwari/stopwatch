let [seconds,minutes,hours]=[0,0,0];

let head=document.querySelector(".head");
let timer=null;

function stopwatch(){
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
        }
    }
    let h= hours<10 ? "0"+ hours : hours;
    let m= minutes<10 ? "0"+ minutes : minutes;
    let s= seconds<10 ? "0"+ seconds :seconds;
    head.innerHTML= h+":"+m+":"+s;
}

function start(){
     if(timer!==null){
        clearInterval(timer);
     }
     timer=setInterval(stopwatch,1000);
     console.log(this)
    }

    function stop(){
        clearInterval(timer);
    }
    function reset(){
        clearInterval(timer);
        [seconds,minutes,hours]=[0,0,0];
        head.innerHTML="00:00:00";
    }







