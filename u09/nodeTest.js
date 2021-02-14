/*
onsole.log("start");

var fs = require('fs');
fs.readFile("number.txt", "utf-8", function(err, data){
  if (err) throw err;
  console.log("ファイルの読み取り準備ができました。");
  console.log(data);
});

console.log("end");
*/

/*
console.log("start");
console.log('現在時刻:' + new Date());

function sleep(callback) {
  setTimeout(function() {
    callback(null, '現在時刻:' + new Date());
  }, 1000);
}

sleep(function(err, res) {
  console.log(res);
  sleep(function(err, res) {
    console.log(res);
    sleep(function(err, res) {
      console.log(res);
    });
  });
});
*/

/*
console.log('start');

function puts(str) {
  // ① Promiseコンストラクタを new して、promiseオブジェクトを返す
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(str);
    }, 1000);
  });
}

// ② ①のpromiseオブジェクトに対して .then で値が返ってきた時のコールバックを設定する
puts('async').then(function(result) {
  console.log(result)
});

console.log('end');
*/

/*
function getURL(url) {
  // ①Promiseコンストラクタを new して、promiseオブジェクトを返す
  return new Promise(function (resolve, reject) {
    const https = require('https');

    https.get(url, function(res) {
      if (res.statusCode === 200) {
        res.on('data', function(chunk) {
          // ②うまくいった場合の処理を記載する
          resolve(chunk);
        });
      } else {
        // ②うまくいかなかった場合の処理を記載する
        reject(new Error(res.statusCode));
      }
    }).on('error', function(e) {
      reject(new Error(e.message));
    });
  })
}

const URL = "https://www.google.co.jp";
// ③promiseオブジェクトに対して .then で値が返ってきた時のコールバックを設定する
getURL(URL).then(function onFulfilled(value){
  console.log("OK!");
  console.log(value);
}).catch(function onRejected(error){
  console.error(error);
});
*/

/*
// 非同期処理: 3倍にする
const treble = function(number) {
  return new Promise(function(resolve) {
    resolve(number * 3);
  });
};

// 同期処理: ログに表示する
const dump = function(number) {
  console.log(number);
  return number;
};

treble(10) // 10 * 3 -> 30
  .then(treble) // 30 * 3 -> 90
  .then(dump)
  .then(treble) // 90 * 3 -> 270
  .then(dump);
  */

  /*
 console.log('start');

 function puts(str) {
   return new Promise(function(resolve) {
     setTimeout(function() {
       resolve(str);
     }, 1000);
   });
 }
 
 
 var promises = [
   puts(1),
   puts(2),
   puts(3)
 ];
 
 // 並列処理に対してPromise.allを使う
 Promise.all(promises).then(function(results) {
   console.log(results);
 });
 
 console.log('end');
 */

console.log('start');

function puts(str) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(str);
    }, 1000);
  });
}

const co = require('co')
co(function* () {
  const res1 = yield puts('1');
  console.log(res1);

  const res2 = yield puts('2');
  console.log(res2);

  const res3 = yield puts('3');
  console.log(res3);
});

console.log('end');