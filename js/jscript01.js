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
