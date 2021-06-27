let sticky =document.querySelector("#sticky");

sticky.addEventListener("click",addSticky);



function addSticky() {
    let stickyDiv =document.createElement("div");
    stickyDiv.classList.add("sticky");
    stickyDiv.innerHTML = ` <div class="sticky-header">
    <div class="minimize">
        <i class="far fa-window-minimize"></i>
      </div>
      <div class="close">
        <i class="fas fa-times"></i>  
      </div>
   </div>
   <div class="sticky-content" contenteditable="true"></div>
`


 let minimize =stickyDiv.querySelector(".minimize");
 let close =stickyDiv.querySelector(".close");
 let stickyContent = stickyDiv.querySelector(".sticky-content");

 let StickyHeader = stickyDiv.querySelector(".sticky-header");


 minimize.addEventListener("click",function(){

     stickyContent.style.display == "none"? stickyContent.style.display="block":stickyContent.style.display ="none";
 })


close.addEventListener("click",function(){
     stickyDiv.remove();
})



let stickyHold =false;
 let initialX;
 let initialY;

 StickyHeader.addEventListener("mousedown",function(e){
  
      stickyHold = true;
      initialX = e.clientX;
      initialY = e.clientY;

 });


 StickyHeader.addEventListener("mousemove",function(e){
   
  if(stickyHold){
    console.log("fff");
      let finalX = e.clientX;
      let finalY = e.clientY;


      let dx = finalX - initialX;
      let dy = finalY - initialY;

      let {top , left} = stickyDiv.getBoundingClientRect();
      //sticky-> top+dy
      //sticky-> left+dx

      stickyDiv.style.top =top + dy + "px";
      stickyDiv.style.left=left + dx  + "px";

      initialX = finalX;
      initialY= finalY;
  }

 });


 StickyHeader.addEventListener("mouseup",function(e){
      stickyHold=false;
 });



 document.body.append(stickyDiv);


}