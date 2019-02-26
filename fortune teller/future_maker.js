/*
  future_maker.js
  handles the logic for Sky3's future maker page
  Aaeron Jhonson-Whyte
      et712 | 2/14/19
*/
function dice_roll () {
  return Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
}

//window.alert("Clear Sky3's " + clouds + " cloud(s) to see your new future.");

function write_future(clouds) {
  switch (clouds) {
    case 1: //lp1 cr1 pr1 nc1
    window.alert("Clear Sky3's " + clouds + " cloud(s) to see your new future.");
    document.getElementById('f_m').innerHTML= "You, " + document.getElementById("f_m").elements.namedItem("yourname").value +
      ", will become a " + document.getElementById("f_m").elements.namedItem("pr1").value +
      " in " + document.getElementById("f_m").elements.namedItem("cr1").value +
      ".  You'll have " + document.getElementById("f_m").elements.namedItem("nc1").value +
      " kids with " + document.getElementById("f_m").elements.namedItem("lp1").value +
      " and live with great content.<br/>" +
      "<button type= 'button' onclick= 'document.location.reload()'>return...</button>";
    break;

    case 6: //lp2 cr2 pr3 nc2
    window.alert("Clear Sky3's " + clouds + " cloud(s) to see your new future.");
    document.getElementById('f_m').innerHTML= "You, " + document.getElementById("f_m").elements.namedItem("yourname").value +
      ", will become a " + document.getElementById("f_m").elements.namedItem("pr3").value +
      " in " + document.getElementById("f_m").elements.namedItem("cr2").value +
      ".  You'll have " + document.getElementById("f_m").elements.namedItem("nc2").value +
      " kids with " + document.getElementById("f_m").elements.namedItem("lp2").value +
      " and live with great content.<br/>" +
      "<button type= 'button' onclick= 'document.location.reload()'>return...</button>";
    break;

    case 2: //lp2 cr2 pr2 nc1
    window.alert("Clear Sky3's " + clouds + " cloud(s) to see your new future.");
    document.getElementById('f_m').innerHTML= "You, " + document.getElementById("f_m").elements.namedItem("yourname").value +
      ", will become a " + document.getElementById("f_m").elements.namedItem("pr2").value +
      " in " + document.getElementById("f_m").elements.namedItem("cr2").value +
      ".  You'll have " + document.getElementById("f_m").elements.namedItem("nc1").value +
      " kids with " + document.getElementById("f_m").elements.namedItem("lp2").value +
      " and live with great content.<br/>" +
      "<button type= 'button' onclick= 'document.location.reload()'>return...</button>";
    break;
    case 5: //lp1 cr2 pr1 nc1
    window.alert("Clear Sky3's " + clouds + " cloud(s) to see your new future.");
    document.getElementById('f_m').innerHTML= "You, " + document.getElementById("f_m").elements.namedItem("yourname").value +
      ", will become a " + document.getElementById("f_m").elements.namedItem("pr1").value +
      " in " + document.getElementById("f_m").elements.namedItem("cr2").value +
      ".  You'll have " + document.getElementById("f_m").elements.namedItem("nc1").value +
      " kids with " + document.getElementById("f_m").elements.namedItem("lp1").value +
      " and live with great content.<br/>" +
      "<button type= 'button' onclick= 'document.location.reload()'>return...</button>";
    break;

    case 3: //lp1 cr3 pr3 nc2
    window.alert("Clear Sky3's " + clouds + " cloud(s) to see your new future.");
    document.getElementById('f_m').innerHTML= "You, " + document.getElementById("f_m").elements.namedItem("yourname").value +
      ", will become a " + document.getElementById("f_m").elements.namedItem("pr3").value +
      " in " + document.getElementById("f_m").elements.namedItem("cr3").value +
      ".  You'll have " + document.getElementById("f_m").elements.namedItem("nc2").value +
      " kids with " + document.getElementById("f_m").elements.namedItem("lp1").value +
      " and live with great content.<br/>" +
      "<button type= 'button' onclick= 'document.location.reload()'>return...</button>";
    break;

    case 4: //lp2 cr3 pr2 nc2
    window.alert("Clear Sky3's " + clouds + " cloud(s) to see your new future.");
    document.getElementById('f_m').innerHTML= "You, " + document.getElementById("f_m").elements.namedItem("yourname").value +
      ", will become a " + document.getElementById("f_m").elements.namedItem("pr2").value +
      " in " + document.getElementById("f_m").elements.namedItem("cr3").value +
      ".  You'll have " + document.getElementById("f_m").elements.namedItem("nc2").value +
      " kids with " + document.getElementById("f_m").elements.namedItem("lp2").value +
      " and live with great content.<br/>" +
      "<button type= 'button' onclick= 'document.location.reload()'>return...</button>";
    break;
  }
}
