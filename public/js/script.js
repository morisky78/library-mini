// add front end scripting here!
console.log("I AM LINKED");

const allbooksUl = document.querySelector("#allBooks");
const bookId = document.querySelector("#bookId");
const bookTitle = document.querySelector("#bookTitle");
const bookAuthor = document.querySelector("#bookAuthor");


fetch("/api/books").then(res => {
    return res.json()
}).then(data=>{
    console.log(data);
    data.forEach(book =>{
        const newLi = document.createElement('li');
        newLi.textContent = book.title +' by '+ book.author;
        allbooksUl.appendChild(newLi)
    })
})

newBook.addEventListener("submit", event=> {
    event.preventDefault();
    const bookObj = {
        id: parseInt(bookId.value),
        title: bookTitle.value,
        author: bookAuthor.value
    } 
    console.log('here')
    console.log(bookObj)
    fetch("/api/books", {
        method:"POST",
        body:JSON.stringify(bookObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if (res.ok){
            location.reload()
        } else {
            alert("trumpet sound")
        }
    })
})