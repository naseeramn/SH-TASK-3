
var counterPlaceHolder = document.getElementById("counter-placeholder");
var btnIncrement = document.getElementById("addcount");
var btnDecrement = document.getElementById("lowercount");

var counter = 0;

function changeColor(counter){
    var color = "";
    if(counter > 0 ){
        color = "green";
    }
    else{
        color="white";
    }
    return color;
}
  btnIncrement.addEventListener("click", function(){
    if (counter < 50) {
      counter++;
    counterPlaceHolder.innerHTML =  counter;
    counterPlaceHolder.style.color = changeColor(counter);
    }


  });

  btnDecrement.addEventListener("click", function(){

    if (counter > 0){counter--;
    counterPlaceHolder.innerHTML = counter;
    counterPlaceHolder.style.color = changeColor(counter);}

  });
