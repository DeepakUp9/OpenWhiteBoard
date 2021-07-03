
 let canvas = document.querySelector("canvas");


 canvas.width =window.innerWidth;
 canvas.height = window.innerHeight-100;


window.addEventListener("resize",function(){

      canvas.width =window.innerWidth;
      canvas.height = window.innerHeight-100;
      
      drawLinesFromDB();

});

//canvas drawing get erased on window resize??/


//a context object which provides fun for 2d drawings
let ctx= canvas.getContext("2d");


let linesDB =[];
let redoLinesDB=[];
let line =[];
let  isPendDown=false;
canvas.addEventListener("mousedown",function(e){

      if(redoLinesDB.length){
            redoLinesDB=[];
      }

      isPendDown=true;

      let x=e.clientX;
      let y= e.clientY-100;

      ctx.beginPath();
      ctx.moveTo(x,y);


      let pointObject ={
            x:x,
            y:y,
            type:"md",
            lineWidth : ctx.lineWidth,
            strockeStyle : ctx.strokeStyle
      }
      line.push(pointObject);
     
});

canvas.addEventListener("mousemove",function(e){
      
        if( isPendDown){
            let x=e.clientX;
            let y= e.clientY-100;
            ctx.lineTo(x,y);
            ctx.stroke();

            let pointObject ={
                  x:x,
                  y:y,
                  type:"mm"
            }
            line.push(pointObject);
        }

       

});

canvas.addEventListener("mouseup",function(e){
      isPendDown=false;

      linesDB.push(line);
      line =[];
});
