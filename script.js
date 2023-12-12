function check() {
    var num = document.getElementById('num'); 
    var display = document.getElementById('display'); 

    if (num.value == '') {
        display.innerHTML = "All fields cannot be empty";
    } else if (Number(num.value) % 2 == 0) {
        display.innerHTML = "EVEN";
    } else {
        display.innerHTML = "ODD";
    }

    
    num.value = '';
}


function che() {
    var num = document.getElementById('buzz'); 
    var dis = document.getElementById('dis'); 

    if (buzz.value == '') {
        dis.innerHTML = "All fields cannot be empty";
    } 
    else if (buzz.value % 3 == 0 && buzz.value % 5 == 0){
        dis.innerHTML = "FIZZBUZZ";
    }
    else if (Number(buzz.value) % 3 == 0) {
        dis.innerHTML = "FIZZ";
    } else if (Number(buzz.value) % 5 == 0) {
        dis.innerHTML = "BUZZ";
    }
    

    
    buzz.value = '';
}