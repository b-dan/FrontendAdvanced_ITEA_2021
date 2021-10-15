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

let city_placeholder = document.getElementById('city-list');
const api_url = 'https://api.hh.ru/areas/5';
async function getCity() {
    const response = await fetch(api_url);
    const data = await response.json();
    for(let i = 0;i<data.areas.length;i++){
        for(let j = 0; j <data.areas[i].areas.length;j++){
            var liLast = document.createElement('option');
            liLast.value = data.areas[i].areas[j].name;
            city_placeholder.append(liLast);
        }
    }
}
getCity();