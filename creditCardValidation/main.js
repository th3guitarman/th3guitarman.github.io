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
function readCard (inputCard) {
  validity.number = inputCard.toString();
  inputCard = validity.number.replace(/-/g, '');

  console.log(validity.number + " : " + inputCard);
} 

function validateCreditCard(inputCard) {
  //inputCard is a string
  var same, sum = 0;

  validity.number = inputCard.toString();
  inputCard = validity.number.replace(/-/g, '');
 
  
  //verifyLength()

  if (inputCard.length != 16) {
    if (inputCard.length > 16) {
      validity.error += "too long- "; }
    else if (inputCard.length < 16) {
      validity.error += "too short- "; }
  }
  else {
    validity.valid = true; }

  for (x in inputCard) {
    var same = inputCard[0];
    if (inputCard[0] != inputCard[x]) {
      break; }
    else {
      validity.error += "too homogenous- "; }
  }

  if ((inputCard[inputCard.length - 1] % 2) != 0) {
    validity.error += "odd last digit- "; }

  for (x in inputCard) {
    sum += inputCard[x]; }
  if (sum <= 16) {
    validity.error += "sum of digits- "; }

}