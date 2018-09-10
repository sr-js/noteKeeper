/* Script for noteKeeper */

function myFunc()
{
  'use strict';
  document.addEventListener('keyup',(event) => {writeConsole()})
}

function writeConsole()
{
  var text = document.getElementById("mybox").innerText;
  console.log(text);
}

/* IndexDB */

// make sure indexedBD is supported, set IDB to any on the RHS
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

if (!window.indexedDB){
  alert("IndexedDB not supported")
}

//Open the DB. indexedDB is associated with window, version 1
let request = window.indexedDB.open("noteKeeperDB", 1), db, tx, stoore, index;

//Event handling. When a new db is created or a new version is created
//store defines structure for the data
//fired every time a new db is created --> onsuccess will be fired next
request.onupgradeneeded = function(e){
  let db = request.result;  //grab the database
  //store = db.createObjectStore("QStore", {keyPath: "qId"}); //keyPath could be time stamp
  store = db.createObjectStore("QStore", {autoIncrement: true})
}

//This is even handling
request.onerror = function(e){
  console.log("There was an error: " + e.target.errorCode)
}

//This is event handling. Assign database to db variable.
//Can also be done using event object e
request.onsuccess = function (e){
  db = request.result;
  tx = db.transaction("QStore", "readwrite"); //Can read/write
}


