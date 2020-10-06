let display = document.getElementById("display")

function pushButton(obj){
    
    let pushed = obj.innerHTML

    if(pushed == "="){
        //beräkna
        display.innerHTML = eval(display.innerHTML)
    } else if(pushed == "AC"){
        //rensa
        display.innerHTML = "0"
    } else{
        if(display.innerHTML == "0"){
            display.innerHTML = pushed
        }
        else{
            display.innerHTML += pushed
        }
    }
}