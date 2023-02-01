var getbtd = document.getElementById('btd');


var btns = getbtd.getElementsByClassName("btn");









for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        var current = document.getElementsByClassName('active');
        event.preventDefault();

        if(current.length > 0) {
            current[0].className = current[0].className.replace('active', '');
        }

        this.className += ' active';
    });
}

 var tippercentage = 0;


var getinput = document.getElementById('price');
var showout = document.getElementById('tipnumber');
var showouttwo = document.getElementById('tipnumbertwo');
var showerror = document.getElementById('showerror');
var showerrortwo = document.getElementById('showerrortwo');
var res = document.getElementById('res');

var people = document.getElementById('people');


var btn1 = document.getElementById('but1');

var btn2 = document.getElementById('but2');

var btn3 = document.getElementById('but3');

var btn4 = document.getElementById('but4');

var btn5 = document.getElementById('but5');



btn1.addEventListener('click', function() {
    if (getinput.value == 0) {
        showout.innerHTML = "0.00$";
        showouttwo.innerHTML = '0.00$';
    } else {
    var percentage = parseFloat(this.innerHTML);

    showout.innerHTML = ( percentage / getinput.value )  * 100 + ".00$";
    showouttwo.innerHTML = (percentage / getinput.value) * 100 + 100 + ".00$";


}
});


btn2.addEventListener('click', function() {
    if (getinput.value == 0) {
        showout.innerHTML = "0.00$";
        showouttwo.innerHTML = '0.00$';

    } else {
    var percentage = parseFloat(this.innerHTML);

    showout.innerHTML = (percentage / getinput.value) * 100 + ".00$";
    showouttwo.innerHTML = (percentage / getinput.value) * 100 + 100 + ".00$";

}
});


btn3.addEventListener('click', function() {
    if (getinput.value == 0) {
        showout.innerHTML = "0.00$";
        showouttwo.innerHTML = '0.00$';

    } else {
    var percentage = parseFloat(this.innerHTML);

    showout.innerHTML = (percentage / getinput.value) * 100 + ".00$";
    showouttwo.innerHTML = (percentage / getinput.value) * 100 + 100 + ".00$";
    }
});


btn4.addEventListener('click', function() {
    if (getinput.value == 0) {
        showout.innerHTML = "0.00$";
        showouttwo.innerHTML = '0.00$';

    } else {
    var percentage = parseFloat(this.innerHTML);

    showout.innerHTML = (percentage / getinput.value) * 100 + ".00$";
    showouttwo.innerHTML = (percentage / getinput.value) * 100 + 100 + ".00$";

    }
});


btn5.addEventListener('click', function() {
    if (getinput.value == 0) {
        showout.innerHTML = "0.00$";
        showouttwo.innerHTML = '0.00$';

    } else {
    var percentage = parseFloat(this.innerHTML);

    showout.innerHTML = (percentage / getinput.value / people.value) * 100 + ".00$";
    showouttwo.innerHTML = (percentage / getinput.value) * 100 + 100 + ".00$";

    }
});


getinput.addEventListener('mouseout', function() {
    if(getinput.value > 0) {
       
        showerror.style.display = 'none';
    } else {
    showerror.style.display = 'block';
}
});




res.addEventListener('click', function() {
    showout.innerHTML = '0.00$';
    showouttwo.innerHTML = '0.00$';
    getinput.value = "0";
    people.value = '0';
    
});

people.addEventListener('mouseout', function() {
    if(people.value > 0) {
        showerrortwo.style.display = 'none';
    } else {
        showerrortwo.style.display = "block";
    }
});
