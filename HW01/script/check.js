const [...inputs] = document.querySelectorAll('input');
inputs.forEach(function (elem){
    elem.addEventListener('change', function(e){
        validate(this);
    })
})

function validate(elem) {
    let flag = false;
    if(elem.type === 'email') {
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(elem.value)){
            flag = true;
        }
    } else if (elem.type === 'tel') {
        if(!/^\+38\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}$/.test(elem.value)){
            flag = true;
        }
    }else if (elem.dataset.userName) {
        if(!/^[А-я]+$/.test(elem.value)){
            flag = true;
        }
    } else {
        if(elem.value == "") {
            flag = true;
        }
    }
    if(flag) {
        elem.style.border = '1px solid red';
    }
};