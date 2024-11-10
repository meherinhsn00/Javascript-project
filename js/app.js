


 let onbtn =document.querySelector('.onbtn')
 let bulb =document.querySelector('.bulb')
 function turnOnBulb(){
   
    bulb.src = "./image/bulbOn.jpg";
 }
 onbtn.addEventListener("click", turnOnBulb)

 let offbtn = document.querySelector('.offbtn')
  function turnOffBulb(){
    bulb.src = "./image/bulbOff.jpg";
  }

 offbtn.addEventListener('click', turnOffBulb)
 