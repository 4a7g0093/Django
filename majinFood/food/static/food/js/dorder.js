var dcart = document.querySelector('#dcart');
var dtotal = document.querySelector('#dtotal');

function addDrink(pid){
    drinkId = '#dri' + pid;
    var name = document.querySelector(drinkId).innerHTML;
    
    var radio = 'drink' + pid;
    var pri = document.getElementsByName(radio);
    var size,price;
    if(pri[0].checked)
    {
        price = pri[0].value;
        size = '大';
    }

    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    var cartSize = orders.length;
    orders[cartSize] = [name,size,price];
    localStorage.setItem('orders',JSON.stringify(orders));
      
    
    total = Number(total) + Number(price);
    localStorage.setItem('total',total);

    var cart = document.querySelector("#cart");
    cart.innerHTML = orders.length;

    butto = '<button class="del" onclick = "removeDrink(' + cartSize + ')"> x </button>';
    dtotal.innerHTML = 'Total: ' + total ;
    dcart.innerHTML += '<li>'+ name + ' ' + size + ':' + '$' + price + butto + '</li>';
}

function dshoppingcart(){
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    var cartSize = orders.length;
    dcart.innerHTML = '';
    for(let i=0;i<cartSize;i++)
    {
        butto = '<button class="del" onclick = "removeDrink(' + i+ ')"> x </button>';
        dcart.innerHTML += '<li>'+ orders[i][0] + ' ' + orders[i][1] + ':' + '$' + orders[i][2] + butto + '</li>';
    }
    dtotal.innerHTML = 'Total: ' + total ;
}

dshoppingcart()

function removeDrink(n){
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    total = Number(total) - Number(orders[n][2]);
    orders.splice(n,1);
    localStorage.setItem('orders',JSON.stringify(orders));
    localStorage.setItem('total',total);
    dshoppingcart()

}