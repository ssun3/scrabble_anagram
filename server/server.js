const path = require('path');
const express = require('express');
const fs = require('fs');


const publicPath = path.join(__dirname,'../public');

const textPath = path.join(__dirname,'../dictionary.txt');

const port = process.env.PORT || 4000;
var app = express();

app.use(express.static(publicPath));


app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

var dict = {};


function sortString(word){
  var mapKey = word.toLowerCase().split('').sort().join('');
  if (!dict[mapKey]){
    dict[mapKey] = [word];
  } else {
    dict[mapKey].push(word);
  }
}

function formatWord(word){
  var mapKey = word.toLowerCase().split('').sort().join('');
  return mapKey
}

function containsLetters(subword, word){

  var wordlen = word.length;
  var subwordlen = subword.length;

  if (subwordlen > wordlen){
    return false
  }

  formattedWord = formatWord(word);
  
  for (var i = 0; i < subword.length; i++) {
        var c = subword.charAt(i);
        if (formattedWord.indexOf(c) < 0) {
          return false;
        }
  }
  return true; 

  // if (formattedWord.indexOf(subword) > -1)
  //   {
  //     return true;
  //   }

}



var array = fs.readFileSync(textPath, 'utf8').toString().split("\n");

for(i in array) {
    sortString(array[i]);
}


app.get('/search', function(req, res){
  console.log("hello");
  let searchResult = []
  let searchWord = req.query.word;
  for (var key in dict) {
    if (dict.hasOwnProperty(key)) { 
      if (containsLetters(key, searchWord)){
        searchResult = searchResult.concat(dict[key]);
      }
    }
  }
  console.log(searchResult);
  res.send(searchResult);

})
