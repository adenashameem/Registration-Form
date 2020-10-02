
  //Onblur to make sure user enters first name
function validfname()
{
  var fn=document.getElementById("fname").value;
  if(fn.length==0)
  {
    document.getElementById("mess1").innerHTML="Please enter a valid name";
  }
  else {
    document.getElementById("mess1").innerHTML="  ";
  }
}


//Akert and Onblur To make sure user provides password and the password given matches confirm password input too
function validconfpass()
{
var p1=document.getElementById("pword").value;
var p2=document.getElementById("confpword").value;


if(p1.length==0 )
{
alert("Password is required");
}

if(p1!=p2)
{
alert("Password does not match");
}
else if()
{
document.getElementById("mess3").innerHTML="Password confirmed";
}
}
//To make sure that the contact number is an exzct 10 digit number
function validcontact()
{
var con=document.getElementById("contact").value;
if(isNaN(con) || con.length<10 || con.length>10)
{
  alert("Please enter a valid Contact Nunmber");
}
}
//To display an alert thanking the user for filling the form when he clcik submit button
function validbutton()
{
alert("Thankyou for registering for blood donation. Have a healthy life!");
}
