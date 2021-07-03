let pen =document.querySelector("#pen");
let eraser =document.querySelector("#eraser");

let penOptions = pen.querySelector(".tool-options");
let eraserOptions = eraser.querySelector(".tool-options");

let penSize =penOptions.querySelector("#pensize");
let penColors =penOptions.querySelectorAll(".pen-colors div");

penSize.addEventListener("change", function(){
    //handle pen size

    let penSizevalue = penSize.value;

    //pensize set hoga
    ctx.lineWidth =penSizevalue;
});



for(let i=0; i<penColors.length;i++){
    penColors[i].addEventListener("click",function(e){
        console.log(penColors);
       let penColor =e.target.className;
       ctx.strokeStyle =penColor;
    });
}

pen.addEventListener("click",function(){

    if(pen.classList.contains("active-tool")){
        //pen already active hai
        //pen tool option honge
       
        if(penOptions.classList.contains("hide")){
         penOptions.classList.remove("hide"); //remove hide class from penoptions
        }
        else{
            penOptions.classList.add("hide");
        }
    }
    else{
        //pen is not active 
        //make pen active 

        eraser.classList.remove("active-tool");
        eraser.classList.add("fade");
        eraserOptions.classList.add("hide");

        pen.classList.remove("fade");
        pen.classList.add("active-tool");
        
    }
});



eraser.addEventListener("click",function(){
    if(eraser.classList.contains("active-tool")){
        //eraser already active


        if(eraserOptions.classList.contains("hide")){
            eraserOptions.classList.remove("hide"); //remove hide class from penoptions
           }
           else{
            eraserOptions.classList.add("hide");
           }
    }

    else{
          //eraser not active 
          pen.classList.remove("active-tool");
          pen.classList.add("fade");
          penOptions.classList.add("hide");


          eraser.classList.add("active-tool");
          eraser.classList.remove("fade");
    }
})