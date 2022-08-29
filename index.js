const sqr = document.querySelectorAll(".square")
const reset = document.getElementById("reset")
const message=document.getElementById("message")
const mode=document.querySelector(".mode")
var a=0
var boxNumber = 6

function colorGen (object){
  const a = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const c = Math.floor(Math.random() * 255);
  object.style.backgroundColor='rgb(' + a + ',' + b + ',' + c + ')';
}

document.addEventListener("click",(e)=>{
  if(e.target.className=="mode"){

    if(e.target.id=="three"){
      boxNumber=3
      for (let index = 3; index < 6; index++) {
        sqr[index].style.visibility = "hidden";
      }
    }else if(e.target.id=="six"){
      boxNumber=6
      for (let index = 0; index < 6; index++) {
        sqr[index].style.visibility = "";
      }
    }
    document.querySelector(".mode.selected").className="mode"
    e.target.className="mode selected"
    reset.textContent="New Colours"
    message.textContent=""
    sqr[a].id=""
    sqr.forEach(element => {
      element.className="square"
    });
    colorer()


  }
})

function colorer(){
  sqr.forEach(element => {
  colorGen(element)
});
numberPicker()
}

function numberPicker(){
  a = Math.floor(Math.random() * boxNumber);
  console.log(a)
  sqr[a].id="chosen"
}

colorer()

reset.addEventListener("click",(e)=>{
  reset.textContent="New Colours"
  sqr[a].id=""
  colorer()


  sqr.forEach(element => {
    
    element.className="square"

  });

  for (let index = 0; index < boxNumber; index++) {
    sqr[index].style.visibility = "";
  }
})


document.addEventListener("click",(e)=>{

  if(e.target.className=="square"){

    if(e.target.id=="chosen"){
        console.log(e.target.style.backgroundColor)
        for (let index = 0; index < boxNumber; index++) {
          sqr[index].style.visibility = "";
        }    
        sqr.forEach(element => {
          element.style.backgroundColor=e.target.style.backgroundColor
          element.className="done"
    

        });
        sqr[a].id=""
        message.textContent="Correct"
        reset.textContent="Play Again"

      }else if(e.target.className=="done"){
        console.log("ye")
      }
      
      else{
        console.log("tryy again")
        message.textContent="Try Again"
        e.target.style.visibility = "hidden";
      }

  }


  
  
})