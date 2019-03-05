//conditions
//string is 16 digits
//contains at least 2 unique digits
//last digit even
//sum of all digits > 16

var validity = {
  valid:'',
  number:'',
  error:''
}

function validateCreditCard(input) {
  //input is a string
  var same, sum = 0;

  validity.number = input.toString();
  input = validity.number.replace('-', '');

  console.log(validity.number + " " + input);
  //verifyLength()
  if (input.length != 16) {
    if (input.length > 16)
      validity.error += "too long- ";
    else if (input.length < 16)
      validity.error += "too short- ";
  }
  else
    validity.valid = true;

  for (x in input) {
    var same = input[0];
    if (input[0] != input[x]) {
      break;
    }
    else
      validity.error += "too homogenous- ";
  }

  if ((input[input.length - 1] % 2) != 0)
    validity.error += "odd last digit- ";

  for (x in input) {
    sum += input[x];
  }
  if (sum <= 16)
    validity.error += "sum of digits- ";

}
