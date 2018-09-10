//Script for noteKeeper using local cookies
//is 'document' the DOM handle/object for parent html document?

"use strict"; //Use stricter rules
var cname = "noteList";

window.onload=codeAddress;

function codeAddress()
{
  alert("Startup alert");
  alert("At startup the cookie is: " + getCookie(cname));
  if(!document.cookie)
  {
    alert("No existing notes");
  }
  else
  {
    var x = document.cookie;
    alert("Notes detected: "+x);
    alert("Is this message cleaned up? "+x.split('=')[1]);
    document.getElementById("mybox").innerHTML = x.split('=')[1];
  }
}

function writeCookie()
{
  alert("Entering writeCookie()");
  var text = document.getElementById("mybox").innerText;
  alert("The notes so far read: \n" + text);
  //var text = y.split('=')[1];
  /*if(text=="undefined")
  {
    alert("text is undefined")
    text="";
  }
  */
  console.log(text);

  var d = new Date();
  var expiry_past = "expires="+d.toUTCString(d.setTime(d.getTime() - (1000*60*60*24)));
  var expiry_future = "expires="+d.toUTCString(d.setTime(d.getTime() + (1000*60*60*24*365)));

  //delete cookie file
  if(document.cookie)
  {
    alert("deleting cookie");
    document.cookie=cname+"=;"+expiry_past;
    alert("Checking if cookie was deleted");
    if(document.cookie)
    {
      alert("cookie still exists");
    }
    else
    {
      alert("cookie deleted");
    }
    //write a new cookie file
    alert("now writing cookie");
    document.cookie = cname + "=" + text +";"+expiry_future;
  }
  else
  {
    alert("Writing first cookie");
    document.cookie = cname + "=" + text +";"+expiry_future;
  }
}
/*
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}
*/
