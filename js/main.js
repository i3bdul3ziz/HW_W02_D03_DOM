var books = [
    {
      title: "The Design of Everyday Things",
      author: "Don Norman",
      image: "https://m.media-amazon.com/images/I/51Dl6lXXesL._SL500_.jpg",
      alreadyRead: false
    },
    {
      title: "The Most Human Human",
      author: "Brian Christian",
      image: "https://m.media-amazon.com/images/I/51qZx6I191L._SL500_.jpg",
      alreadyRead: true
    },
    {
      title: "In Search of Lost Time",
      author: "Marcel Proust",
      image: "https://m.media-amazon.com/images/I/515gMhcHhmL._SL500_.jpg",
      alreadyRead: false
    },
    {
      title: "Ulysses",
      author: "James Joyce",
      image: "https://m.media-amazon.com/images/I/51WbIWV9PSL._SL500_.jpg",
      alreadyRead: true
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      image: "https://m.media-amazon.com/images/I/515hnpK0fvL._SL500_.jpg",
      alreadyRead: true
    }
];


let body = document.body
body.style.fontFamily = "Arial, sans-serif"
body.style.textAlign = "center"


let nickname = document.querySelector("#nickname");
nickname.textContent = "Abdulaziz"

let favorite = document.querySelector("#favorite");
favorite.textContent = "Cats, Parrots";

let hometown = document.querySelector("#hometown");
hometown.textContent = "Taif";

var listItems = document.querySelectorAll("ul li");


listItems.forEach(function (listItem) {
    listItem.classList.add("listitem");
    listItem.addEventListener("click", function () {
      if (this.style.color == "dodgerblue"){
        this.style.color = "red";
      } else {
        this.style.color = "dodgerblue"
      }
     });
});


let favBooks = document.querySelector(".favoriteBooks")
let h1 = document.createElement("h1")

favBooks.appendChild(h1)

h1.textContent = "My Book List"

books.forEach(function(book){
    let img = document.createElement("img")
    body.appendChild(img)
    img.setAttribute("src", book.image)
    let p = document.createElement("p")
    body.appendChild(p)
    p.textContent = book.title + ", by " + book.author

    if(book.alreadyRead){
        p.style.color = "red";
    }
})

document.querySelector("ul").style.listStyle = "none"

