//conditions
//string is 16 digits
//contains at least 2 unique digits
//last digit even
//sum of all digits > 16

function readCard (inputCard) {
  validity.number = inputCard.toString();
  inputCard = validity.number.replace(/-/g, '');

  console.log(validity.number + " : " + inputCard);
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
function validateCreditCard(inputCard) {
  //inputCard is a string
  var validity = {
    valid:'',
    number:'',
    error:''
  }

  validity.number = inputCard.toString();
  inputCard = validity.number.replace(/-/g, '');

  validity.error += verifyNum(inputCard);
  validity.error += verifyLength(inputCard);
  validity.error += verifyUnique(inputCard);
  validity.error += verifyLast(inputCard);
  validity.error += verifySum(inputCard);

  if (validity.error == '') {
    validity.valid = 'true';
  }
  else {
    validity.valid = 'false';
  }

  return validity;
}
