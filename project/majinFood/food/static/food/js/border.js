var bcart = document.querySelector('#bcart');
var btotal = document.querySelector('#btotal');

function addBurger(bid){
    BurgerId = '#bur' + bid;
    var name = document.querySelector(BurgerId).innerHTML;
    
    var radio = 'burger' + bid;
    var bri = document.getElementsByName(radio);
    var size,price;
    if(bri[0].checked)
    {
        price = bri[0].value;
        size = '小';
    }
    else
    {
        price = bri[1].value;
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

    butto = '<button class="del" onclick = "removeBurger(' + cartSize + ')"> x </button>';
    btotal.innerHTML = 'Total: ' + total ;
    bcart.innerHTML += '<li>'+ name + ' ' + size + ':' + '$' + price + butto + '</li>';
}

function bshoppingcart(){
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    var cartSize = orders.length;
    bcart.innerHTML = '';
    for(let i=0;i<cartSize;i++)
    {
        butto = '<button class="del" onclick = "removeBurger(' + i+ ')"> x </button>';
        bcart.innerHTML += '<li>'+ orders[i][0] + ' ' + orders[i][1] + ':' + '$' + orders[i][2] + butto + '</li>';
    }
    btotal.innerHTML = 'Total: ' + total ;
}

bshoppingcart()

function removeBurger(n){
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    total = Number(total) - Number(orders[n][2]);
    orders.splice(n,1);
    localStorage.setItem('orders',JSON.stringify(orders));
    localStorage.setItem('total',total);
    bshoppingcart()

}