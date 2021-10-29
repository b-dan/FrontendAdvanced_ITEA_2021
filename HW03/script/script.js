$.getJSON("menu.json", function(menu) {
    localStorage.menu = JSON.stringify(menu);
});

let menuArr = JSON.parse(localStorage.menu);

$(document).ready(function() {
    let price = 0;
    let finalPrice = 0;
    for(let i = 0; i<menuArr.length; i++){
        console.log(i);
        
        $.get('card.txt', function(data) {
            
            let id = 1;

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
                document.getElementById('cart-text').innerText = menuArr[i].ingredients;
                document.getElementById('cart-name').innerText = menuArr[i].productName;
                document.getElementById('cart-title-middle-price').innerText = menuArr[i].price+" ₴";
                document.getElementById('cart-right').innerText = menuArr[i].price+50+" ₴";
                price =  menuArr[i].price;
                finalPrice =  menuArr[i].price;
                console.log("===================//////////////"+price);
            }

            
            document.getElementById('plus').onclick = function(){
                id = id + 1;
                document.getElementById('cart-title-middle-count').innerText = id;
                finalPrice = finalPrice+price;
                document.getElementById('cart-title-middle-price').innerText = finalPrice+" ₴";
                document.getElementById('cart-right').innerText = finalPrice + 50+" ₴";
                console.log("lllllllllllllll"+price)
            }
            document.getElementById('minus').onclick = function(){
                if(id==1){
                    
                }
                else{
                    id = id - 1;
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


        });
        
        console.log("============")
    }
    console.log(menuArr[0].productImageUrl);
});


