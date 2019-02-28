var cartItem = [
  { name:"Meliodas' Sword",
    use:"Modeled after a broken blade of legend. Nigh unusable.",
    price:"2000",
    quantity:'0',
    limit:'1'
  },//limited 1 per customer
  { name:"Boar Head Shield",
    use:"Boars are said to bring fortune and wealth. This boar will at least keep your health.",
    price:"1500",
    quantity:'0',
    limit:'99'
  },
  { name:"Tusk Spear",
    use:"Ancient giant boar tusks remain durable and sharp for millenia.",
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
var shoppingCart = {};

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
    "<button type= 'button' onClick= 'subtQuantity("+index+"); showQuantity("+index+");'>-</button>" +
    cartItem[index].quantity +
    "<button type= 'button' onClick= 'addQuantity("+index+"); showQuantity("+index+");'>+</button>");
};
function createCart() {
  for (var x in cartItem) {
    shoppingCart[x] = cartItem[x];
    console.log(shoppingCart[x].name);
  }
};
function cashRegister (cart) {
  var totalPrice = 0;
  for (var x in cart) {
    totalPrice += cart[x].quantity * cart[x].price;
  }

  return totalPrice;
};
//function populate() {
  //item1
  document.getElementById('name1').innerHTML= cartItem[0].name;
  document.getElementById('use1').innerHTML= cartItem[0].use;
  document.getElementById('price1').innerHTML= cartItem[0].price;
  showQuantity(0);
  //item2
  document.getElementById('name2').innerHTML= cartItem[1].name;
  document.getElementById('use2').innerHTML= cartItem[1].use;
  document.getElementById('price2').innerHTML= cartItem[1].price;
  showQuantity(1);

  //item3
  document.getElementById('name3').innerHTML= cartItem[2].name;
  document.getElementById('use3').innerHTML= cartItem[2].use;
  document.getElementById('price3').innerHTML= cartItem[2].price;
  showQuantity(2);

  //item4
  document.getElementById('name4').innerHTML= cartItem[3].name;
  document.getElementById('use4').innerHTML= cartItem[3].use;
  document.getElementById('price4').innerHTML= cartItem[3].price;
  showQuantity(3);

  //item5
  document.getElementById('name5').innerHTML= cartItem[4].name;
  document.getElementById('use5').innerHTML= cartItem[4].use;
  document.getElementById('price5').innerHTML= cartItem[4].price;
  showQuantity(4);

  createCart();

  document.getElementById('p1').innerHTML= "<button type= 'button' onClick= 'window.alert(cashRegister(shoppingCart));'>buy</button>";
//}
