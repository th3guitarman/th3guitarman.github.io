/*  checkout.js
    Aaeron Jhonson-Whyte
    contains the functionality for cashRegister project

    establishes item selction, etc,

*/
var cartItem = [
  { name:"Meliodas' Sword",
    use:"A legendary hero's broken blade. Nigh unusable.",
    price:"2000",
    quantity:'0',
    limit:'1'
  },//limited 1 per customer
  { name:"Boar Head Shield",
    use:"Boars are said to bring fortune and wealth. This boar will at least help keep your health.",
    price:"1500",
    quantity:'0',
    limit:'99'
  },
  { name:"Tusk Spear",
    use:"Ancient giant boar tusks remain durable and sharp for millenia. No touching.",
    price:"2600",
    quantity:'0',
    limit:'99'
  },//limit 99
  { name:"First Aid Kit",
    use:"A bandages, cleaning solution, painkillers, and other first aid amenities.",
    price:"400",
    quantity:'0',
    limit:'999'
  },
  { name:"Ivory Cider",
    use:"The secret ingredient of this crisp, robust drink is well guarded.",
    price:"500",
    quantity:'0',
    limit:'10'
  }//limit 10 per customer
];

function addQuantity(index) { //increments cartItem quantity
  if (cartItem[index].quantity < cartItem[index].limit) {
    cartItem[index].quantity = parseInt(cartItem[index].quantity) + 1;
  }
  else {}
  console.log(cartItem[index].quantity);
};

function subtQuantity(index) { //decrements cartItem quntity
  if (cartItem[index].quantity > 0) {
    cartItem[index].quantity = parseInt(cartItem[index].quantity) - 1;
  }
  else {}
  console.log(cartItem[index].quantity);
};

function showQuantity(index) {
  document.getElementById('quantity'+(index+1)).innerHTML= (
    "<button type= 'button' onClick= 'subtQuantity("+index+"); showQuantity("+index+");' " +
    "ondblclick= 'subtQuantity("+index+"); subtQuantity("+index+"); subtQuantity("+index+"); subtQuantity("+index+"); " +
    "subtQuantity("+index+"); subtQuantity("+index+"); subtQuantity("+index+"); subtQuantity("+index+"); showQuantity("+index+");'>-</button> " +
    cartItem[index].quantity +
    " <button type= 'button' onClick= 'addQuantity("+index+"); showQuantity("+index+");' " +
    "ondblclick= 'addQuantity("+index+"); addQuantity("+index+"); addQuantity("+index+"); addQuantity("+index+"); " +
    "addQuantity("+index+"); addQuantity("+index+"); addQuantity("+index+"); addQuantity("+index+"); showQuantity("+index+");'>+</button>");
  };
function createCart(cartItem) {
  var shoppingCart = {};
  for (var x in cartItem) {
    shoppingCart[x] = cartItem[x];
    console.log(shoppingCart[x].name);
  }
  document.getElementById('useT').innerHTML=  cashRegister(cartItem);
};
function cashRegister(cart) { // cart is a shoppingCart object holding cartItem objects
  var totalPrice = 0, priceMessage = '';
  for (var x in cart) {
    totalPrice += cart[x].quantity * cart[x].price;
    if (cart[x].quantity > 0) {
      priceMessage += (cart[x].name + ' x' + cart[x].quantity + ' and ');
    }
  }
  priceMessage = priceMessage.substring(0, (priceMessage.length - 5));

  return ('Your purchase of ' + priceMessage + ' comes to a total of ' + totalPrice + '.');
};
function reset(){
  for (var x in cartItem) {
    cartItem[x].quantity = 0;
    populate();
  }
};
function populate() {
  //item1
  document.getElementById('name1').innerHTML= cartItem[0].name + ': ' + cartItem[0].price;
  document.getElementById('use1').innerHTML= cartItem[0].use;
  showQuantity(0);
  //item2
  document.getElementById('name2').innerHTML= cartItem[1].name + ': ' + cartItem[1].price;
  document.getElementById('use2').innerHTML= cartItem[1].use;
  showQuantity(1);

  //item3
  document.getElementById('name3').innerHTML= cartItem[2].name + ': ' + cartItem[2].price;
  document.getElementById('use3').innerHTML= cartItem[2].use;
  showQuantity(2);

  //item4
  document.getElementById('name4').innerHTML= cartItem[3].name + ': ' + cartItem[3].price;
  document.getElementById('use4').innerHTML= cartItem[3].use;
  showQuantity(3);

  //item5
  document.getElementById('name5').innerHTML= cartItem[4].name  + ': ' + cartItem[4].price;
  document.getElementById('use5').innerHTML= cartItem[4].use;
  showQuantity(4);

  createCart();

  document.getElementById('nameT').innerHTML= 'Purchase Total';
  document.getElementById('useT').innerHTML=  'Click the <strong>+</strong>' +
  ' and <strong>-</strong> to add items to the cart. Double click to add ten items. When ready, press <strong>buy</strong> to view your total.';
  document.getElementById('quantityT').innerHTML= "<button type= 'button' onClick= 'createCart(cartItem);'>buy</button>" +
    "<button type= 'button' onClick= 'reset();'>reset</button>";

  //document.getElementById('p1').innerHTML= "<button type= 'button' onClick= 'window.alert(cashRegister(shoppingCart));'>buy</button>";
};

populate();
