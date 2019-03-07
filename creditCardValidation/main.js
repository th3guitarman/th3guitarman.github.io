//conditions
//string is 16 digits
//contains at least 2 unique digits
//last digit even
//sum of all digits > 16

function submitCard () {
  var inCard = document.getElementById('ccin').value;
  var inYYYY = document.getElementById('yyin').value, inMM = document.getElementById('mmin').value;
  var validOut = validateCreditCard(inCard, inMM, inYYYY);
  var output = '';

  for (var x in validOut) {
    output += x + ': ' + validOut[x] +'<br />';
  }

  document.getElementById('r1').innerHTML= output;
  if (validOut.valid) {
    document.getElementById('r2').innerHTML= "This is a real card! <br />" +
    "<div><button type='button' onclick= 'document.location.reload()'>let's try again</button></div>";
  }
  else {
    document.getElementById('r2').innerHTML= "This is just fanta-CC! <br />" +
    "<div><button type='button' onclick= 'document.location.reload()'>let's try again</button></div>";
  }

}

function verifyNum(inputCard) {
  var isNum = true;
  //if (Number(inputCard) == NaN) {
  //  isNum = false;
  //}

  if (Number(inputCard) != inputCard) {
    return Number(inputCard) + "- "; //"contains NaN chars- ";
  }
  else {
    return '';
  }
}

function verifyLength (inputCard) {
  if (inputCard.length != 16) {
    if (inputCard.length > 16) {
      return "too long- ";
    }
    else if (inputCard.length < 16) {
      return "too short- ";
     }
  }
  else {
    return '';
  }
}

function verifyUnique(inputCard) {
  var same = true;
  for (x in inputCard) {
    if (inputCard[0] != inputCard[x]) {
      same = false;
    }
  }
  if (same == true) {
    return "too homogenous- ";
  }
  else {
    return '';
  }
}

function verifyLast(inputCard) {
  if ((inputCard[inputCard.length - 1] % 2) != 0) {
    return "odd last digit- ";
  }
  else {
    return '';
  }
}

function verifySum(inputCard) {
  var sum = 0;
  for (x in inputCard) {
    sum += inputCard[x];
  }
  if (sum <= 16) {
    return "sum of digits- ";
  }
  else {
    return '';
  }
}

function verifyDate(inputMM, inputYYYY) {
  // var pos_ = inputDate.search('-');
  // var yy = inputDate.slice(0, pos_);
  // var mm = inputDate.slice(pos_+1, inputDate.length);
  // console.log(yy + '-' + mm);
  var inputDate = inputYYYY + '-' + inputMM;
  var today = new Date();

  if (today.getTime() > Date.parse(inputDate)) {
    return "expired- " + inputDate;
  }
  else {
    return '' + inputDate;
  }
}

function validateCreditCard(inputCard, inputMM, inputYYYY) {
  //inputCard is a string
  var validity = {
    valid:'',
    number:'',
    expiry: '',
    error:''
  }

  validity.number = inputCard.toString();
  inputCard = validity.number.replace(/-/g, '');

  validity.error += verifyNum(inputCard);
  validity.error += verifyLength(inputCard);
  validity.error += verifyUnique(inputCard);
  validity.error += verifyLast(inputCard);
  validity.error += verifySum(inputCard);
  validity.expiry += verifyDate(inputMM, inputYYYY);

  if (validity.error == '') {
    validity.valid = true;
  }
  else {
    validity.valid = false;
  }

  return validity;
}
