let number = document.getElementById("number");
let number2 = document.getElementById("number2");
let counter = 0;
let counter2 = 0;


setInterval(()=>{
    if(counter == 65){
        clearInterval();
    }else{
        counter += 1;
        number.innerHTML = counter + "%";
    }
}, 30);

setInterval(()=>{
    if(counter2 == 88){
        clearInterval();
    }else{
        counter2 += 1;
        number2.innerHTML = counter2 + "%";
    }
}, 20);