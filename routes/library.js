const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
    // console.log("hello");
    fs.readFile("./db/books.json", "utf-8", (err, data) => {
      if (err) {
        throw err;
      } else {
        res.json(JSON.parse(data));
      }
    });
  });

router.get("/:bookId", (req,res)=> {
    // console.log("hello");
    fs.readFile("./db/books.json", "utf-8", (err, data) => {
      if (err) {
        throw err;
      } else {
        // res.json(JSON.parse(data));
        const books = JSON.parse(data);
        for (let i = 0; i < books.length; i++) {
           if ( books[i].id == req.params.bookId ) {
              return res.json(books[i])
           }
        }
      }
    });
})

router.post("/", (req, res) => {
  console.log(req.body);
  fs.readFile("./db/books.json", "utf-8", (err, data) =>{
    if(err){
      throw err;
    } else {
      const booksArr = JSON.parse(data);
      booksArr.push(req.body);
      console.log('got old book list');
      console.log(booksArr);
      fs.writeFile("./db/books.json", JSON.stringify(booksArr, null, 4), (err, data) => {
        if(err){
          throw err;
        }
        res.send("book added!")
      }
      )
    }
  })

});


module.exports = router;