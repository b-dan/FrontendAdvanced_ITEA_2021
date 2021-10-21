let os_test = navigator.platform;
let os_bacground = document.getElementById("os_bacground");
if(os_test==="Win32"){
    os_bacground.style.backgroundColor = "#b9d2f6";
}else if(os_test==="MacIntel"){
    os_bacground.style.backgroundColor = "#ff00006e";
}else if(os_test==="Linux armv7l"||os_test==="Linux i686") {
    os_bacground.style.backgroundColor = "#b9f6bb";
}else {
    os_bacground.style.backgroundColor = "#F0F2F5";
}

if(navigator.getBattery){
    navigator.getBattery().then(function(b){
        if(b.level*100<=100){
            document.getElementById("battery_charge").innerHTML = 'Заряд батареи: '+(b.level*100)+'% !!!';
            $(window).on('load', function() {
                $('#myModal').modal('show');
            });
        }
    });
}else alert("Ваш браузер не поддерживает navigator.getBattery()");

