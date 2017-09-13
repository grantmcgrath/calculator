let result = document.querySelector("#result");
let onScreen = "";
let period = false;

function clearButton(){
  result.value = "";
  period = false;
  onScreen = "";
}

function displayVal(inputNum){
  if((!isNaN(inputNum) || (inputNum == "." && period == false)) || (onScreen.length > 0 && !isNaN(onScreen.substr(onScreen.length-1)))){

    if (inputNum != "." || ((inputNum == ".") && !period)){
      onScreen = onScreen + inputNum;
      result.value = onScreen;
    }
  }
}

function totalVal(){
  if (onScreen != ""){
    var total = eval(onScreen);
    onScreen = total.toString();
    result.value = total;
  }
}
