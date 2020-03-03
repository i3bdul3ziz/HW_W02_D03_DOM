document.querySelector("div button").addEventListener("click", function(){

    //remove the previous image if the user random a new one
    if(document.querySelector(".image").childElementCount >= 1){ 
        document.querySelector(".image img").remove()
    }

    let width = document.querySelector("div .width").value; //get value of width from user input
    let height = document.querySelector("div .height").value; //get value of height from user input
    let imgContainer = document.querySelector(".image") 
    let img = document.createElement("img")
    imgContainer.appendChild(img) //put img inside the div of .image class
    img.setAttribute("src", "https://source.unsplash.com/" + width + "x" + height)
})