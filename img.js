let photoDiv =document.querySelector("#photo");
let photoUploadInput=document.querySelector("#photo-upload");

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