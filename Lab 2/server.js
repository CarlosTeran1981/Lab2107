
var http = require('http');

var express = require("express"); // require express

var app = express(); //create an express app

app.get('/', (req, res) => {
  res.send(" This is root page");
});

app.get('/contact', (req, res) => {
    res.send("Message here for Contact");  
});

app.get('/about', (req, res) => {
  res.send("Carlos Teran");  
});

app.get("/homework", (req, res) => {
    /* 1. Find the most common used number in a given array */

    var numbers = [12, 23, 98 ,23, 12, 89, 0, 12, 77, 89, 34, 0, 1,23, 32, 0, 89];

    var mf = 1;
    var m = 0;
    var item;
    for (var i=0; i<numbers.length; i++)
    {
        for (var j=i; j<numbers.length; j++)
        {
                if (numbers[i] == numbers[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = numbers[i];
                }
        }
        m=0;
}
console.log(item+" ( " +mf +" times ) ") ;

    /* 2. find the vowels in an given text  */

    var text = "This is just another exercise for you to practice coding solutions to problems"
})

app.listen(8080, () => {
  console.log("Server running at http://localhost:8080");
});