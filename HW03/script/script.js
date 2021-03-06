$.getJSON("menu.json", function(menu) {
    localStorage.menu = JSON.stringify(menu);
});

let menuArr = JSON.parse(localStorage.menu);
let price = 0;
let finalPrice = 0;
$(document).ready(function() {
    
    
    for(let i = 0; i<menuArr.length; i++){
        console.log(i);
        let id = 1;
        
        $.get('card.txt', function(data) {
            
            

            $("#fetch-card").append(data);
            

            document.getElementById('card-image').setAttribute("id", "card-image"+i);
            document.getElementById('card-image'+i).setAttribute("src", menuArr[i].productImageUrl);

            document.getElementById('card-title').setAttribute("id", "card-title"+i);
            document.getElementById('card-title'+i).innerText = menuArr[i].productName;
        

            document.getElementById('card-text').setAttribute("id", "card-text"+i);
            document.getElementById('card-text'+i).innerText = menuArr[i].ingredients;

            document.getElementById('card-price').setAttribute("id", "card-price"+i);
            document.getElementById('card-price'+i).innerText = menuArr[i].price + ' грн.';

            document.getElementById('buy-button').setAttribute("id", "buy-button"+i);

            
            document.getElementById('buy-button'+i).onclick = function(){
                document.getElementById('cart-title-middle-count').innerText = 1;
                document.getElementById('cart-text').innerText = menuArr[i].ingredients;
                document.getElementById('cart-name').innerText = menuArr[i].productName;
                document.getElementById('cart-title-middle-price').innerText = menuArr[i].price+" ₴";
                document.getElementById('cart-right').innerText = menuArr[i].price+50+" ₴";
                price =  menuArr[i].price;
                finalPrice =  menuArr[i].price;
                console.log("===================//////////////"+price);
            }
            
            document.getElementById('plus').onclick = function(){
                if(parseInt(document.getElementById('cart-title-middle-count').innerText)!=1){
                    id = parseInt(document.getElementById('cart-title-middle-count').innerText)+1;
                }else{
                    id = id + 1;
                }
                //finalPrice = parseInt(document.getElementById('cart-title-middle-price').innerText);
                //price = parseInt(document.getElementById('cart-title-middle-price').innerText/id);
                //id = id + 1;
                document.getElementById('cart-title-middle-count').innerText = id;
                finalPrice = price*id;
                document.getElementById('cart-title-middle-price').innerText = finalPrice+" ₴";
                document.getElementById('cart-right').innerText = finalPrice + 50+" ₴";
            }
            document.getElementById('minus').onclick = function(){
                if(id==1&&parseInt(document.getElementById('cart-title-middle-count').innerText)===1){
                    
                }
                else{
                    if(parseInt(document.getElementById('cart-title-middle-count').innerText)!=1){
                        id = parseInt(document.getElementById('cart-title-middle-count').innerText)-1;
                    }else{
                        id = id - 1;
                    }
                    document.getElementById('cart-title-middle-count').innerText = id;
                    finalPrice = finalPrice-price;
                    document.getElementById('cart-title-middle-price').innerText = finalPrice+" ₴";
                    document.getElementById('cart-right').innerText = finalPrice + 50+" ₴";
                }                
            }

            

            document.getElementById('like-button').setAttribute("id", "like-button"+i);
            document.getElementById('like-button'+i).onclick = function(){
                if(document.getElementById('like-button'+i).getAttribute('src') === 'img/heart1.svg'){
                            document.getElementById('like-button'+i).setAttribute("src", 'img/heart.svg');
                            menuArr[i].like = parseInt(menuArr[i].like)-1;
                            localStorage.menu = JSON.stringify(menuArr);
                    } else {
                            document.getElementById('like-button'+i).setAttribute("src", 'img/heart1.svg');
                            menuArr[i].like = parseInt(menuArr[i].like)+1;
                            localStorage.menu = JSON.stringify(menuArr);
                            }
              }
              document.getElementById('mac-card').setAttribute("id", "mac-card"+i);
        });
    }
});

$(window).load(function() {
    
    let idModal = 1;
    for(let j = 0; j<menuArr.length; j++){
        let priceModal = 0;
        let finalPriceModal = 0;
        
        document.getElementById('mac-card'+j).onclick = function(e){
                if(e.target.nodeName !== 'A' && e.target.id !== 'like-button'+j){
                    priceModal =  menuArr[j].price;
                    finalPriceModal =  menuArr[j].price;
                    if(priceModal===finalPriceModal){
                        idModal=1;
                        document.getElementById('modal-count').innerText = 1;
                    }
                    $('#myModal').modal('show');
                    document.getElementById('modal-img').setAttribute('src', menuArr[j].productImageUrl);
                    document.getElementById('modal-title').innerText = menuArr[j].productName;
                    document.getElementById('modal-content').innerText = menuArr[j].ingredients;
                    document.getElementById('modal-cart-right').innerText = menuArr[j].price+" ₴";
                    price = menuArr[j].price;
                    document.getElementById('modal-plus').onclick = function(){
                        idModal = idModal + 1;
                        document.getElementById('modal-count').innerText = idModal;
                        finalPriceModal = priceModal*idModal;
                        document.getElementById('modal-cart-right').innerText = finalPriceModal+" ₴";
                    }
                    document.getElementById('modal-minus').onclick = function(){
                        if(idModal==1){
                            
                        }
                        else{
                            idModal = idModal - 1;
                            document.getElementById('modal-count').innerText = idModal;
                            finalPriceModal = finalPriceModal-priceModal;
                            document.getElementById('modal-cart-right').innerText = finalPriceModal+" ₴";
                        }                
                    }
                    document.getElementById('modal-add-button').onclick = function(){
                        document.getElementById('cart-text').innerText = menuArr[j].ingredients;
                        document.getElementById('cart-name').innerText = menuArr[j].productName;
                        document.getElementById('cart-title-middle-count').innerText = idModal;
                        finalPrice = finalPriceModal;
                        document.getElementById('cart-title-middle-price').innerText = finalPriceModal +" ₴";
                        document.getElementById('cart-right').innerText = finalPriceModal+50+" ₴";
                    }

                    if(menuArr[j].like===1){
                        document.getElementById('modal-like-button').setAttribute("src", 'img/heart1.svg');
                        document.getElementById('modal-like-sub').innerText = parseInt(menuArr[j].like) + ' користувача додали в улюблене';
                    }else {
                        document.getElementById('modal-like-sub').innerText = parseInt(menuArr[j].like) + ' користувача додали в улюблене';
                    }

                    document.getElementById('modal-like-button').onclick = function(e){
                        if(menuArr[j].like===1){
                                    document.getElementById('modal-like-button').setAttribute("src", 'img/heart.svg');
                                    menuArr[j].like = parseInt(menuArr[j].like)-1;
                                    document.getElementById('modal-like-sub').innerText = parseInt(menuArr[j].like) + ' користувача додали в улюблене';
                                    document.getElementById('like-button'+j).setAttribute("src", 'img/heart.svg');
                                    localStorage.menu = JSON.stringify(menuArr);
                            } else {
                                    document.getElementById('modal-like-button').setAttribute("src", 'img/heart1.svg');
                                    menuArr[j].like = parseInt(menuArr[j].like)+1;
                                    document.getElementById('modal-like-sub').innerText = parseInt(menuArr[j].like) + ' користувача додали в улюблене';
                                    document.getElementById('like-button'+j).setAttribute("src", 'img/heart1.svg');
                                    localStorage.menu = JSON.stringify(menuArr);
                            }
                    }
                    
                    
                }

            }
            
    }
});
