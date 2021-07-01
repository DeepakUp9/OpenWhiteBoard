let photoDiv =document.querySelector("#photo");
let photoUploadInput=document.querySelector("#photo-upload");
let downloadDiv =document.querySelector("#download");


photoDiv.addEventListener("click",function(){
    photoUploadInput.click();
})

photoUploadInput.addEventListener("change",function(event){

    let fileObje =event.target.files[0];

    let filePath =URL.createObjectURL(fileObje);

    let img =document.createElement("img");
    img.setAttribute("src",filePath);
    img.classList.add("sticky-image")
    addSticky(img);

});


downloadDiv.addEventListener("click",function(){

     let imagePath =canvas.toDataURL("image/jpg");

     // <a href="" download ="canvas.jpg"></a>

     let aTag =document.createElement("a");
     aTag.download ="canvas.jpg";
     aTag.href =imagePath;
     aTag.click();
})

