console.log("hello!");


/*
const fs = require('fs');

var hoge = fs.readFile("hoge.txt");
var fuga = fs.readFile("fuga.txt");
console.log(hoge + fuga);
*/

/*
const fs = require('fs');

fs.readFile("hoge.txt", function (err, hoge) {
    fs.readFile("fuga.txt", function (err, fuga) {
        console.log(hoge + fuga);
    });
});
*/

/*
const fs = require('fs');

var promise = (str) => {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, 1000, str);
    })
};

promise("foo").then(
    (val) => {
        console.log("aaa");
        console.log(val);
        return promise("bar")
    }
).then(
    (val) => { 
        console.log("bbb");
        console.log(val) 
    }
).catch(
    (err) => { console.log(err) }
)
*/

/*
const fs = require('fs')
const util = require('util')

const readFileAsync = util.promisify(fs.readFile)

var hoge, fuga, foo

readFileAsync("hoge.txt")
    .then(
        (result) => { 
            hoge = result
            return readFileAsync("fuga.txt") }
    )
    .then(
        (result) => {
            fuga = result 
            return readFileAsync("foo.txt") }
    )
    .then(
        (result) => { 
            foo = result
            console.log(hoge + fuga + foo) }
    )
    */


    /*
    const fs = require('fs');
    const util = require('util');

    const readFileAsync = util.promisify(fs.readFile);

    async function readFiles(){
        var hoge = await readFileAsync("hoge.txt");
        var fuga = await readFileAsync("fuga.txt");
        var foo = await readFileAsync("foo.txt");
        console.log(hoge + fuga + foo);
    }

    readFiles().then(
        () => { console.log("readFiles()は終わった！！") }
    )

    console.log("readFiles()はまだ終わらない・・・");
    */

    /*
   const fs = require('fs');
   const util = require('util');
   
   const readFileAsync = util.promisify(fs.readFile);
   
   var hoge = readFileAsync("hoge.txt")
   var fuga = readFileAsync("fuga.txt")
   var foo = readFileAsync("foo.txt")
   
   Promise.all([hoge, fuga, foo])
       .then(
           (values) => { console.log(values[0] + values[1] + values[2]) }
       )
    */

   const fs = require('fs');
   const util = require('util');
   
   const readFileAsync = util.promisify(fs.readFile);
   
   async function readFiles() {
       var hoge = readFileAsync("hoge.txt")
       var fuga = readFileAsync("fuga.txt")
       var foo = readFileAsync("foo.txt")
   
       var values = await Promise.all([hoge, fuga, foo])
       console.log(values[0] + values[1] + values[2])
   }
   
   readFiles()
   