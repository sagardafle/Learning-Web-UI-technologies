 function authenticateUser()
    {
   
        if(form.username.value == "sagar" && form.password.value =="dafle")
            {
                
				window.location.href="question1.html";
                return false;
            }
        else
            {
                alert("Incorrect Username or Password" );
				return true;
                
            }

    }
//page 2
	function validatequestion1 ()
{
 if(document.getElementById('radio1').checked) 
 {
	window.location="question2.html";
	return false;
 }
else if (document.getElementById('radio2').checked) 
 {
	window.location="question2.html";
	return false;
 }
 else if (document.getElementById('radio3').checked) 
 {
	window.location="question2.html";
	return false;
 }
 else if (document.getElementById('answer').checked) 
 {
	sessionStorage.setItem("q1","right");
	window.location="question2.html";
	return false;
 }
 else
 {alert("Please select atleast one option");}
}
//page 3
function validatequestion2 ()
{
 if(document.getElementById('answer').checked) 
 {
	 sessionStorage.setItem("q2","right");
	window.location="verbalquestion.html";
	return false;
 }
else if (document.getElementById('radio2').checked) 
 {
	window.location="verbalquestion.html";
	return false;
 }
 else if (document.getElementById('radio3').checked) 
 {
	window.location="verbalquestion.html";
	return false;
 }
 else if (document.getElementById('radio4').checked) 
 {
	window.location="verbalquestion.html";
	return false;
 }
 else
 {alert("Please select atleast one option");}
}
function testResults (form)
{
    var TestVar = form.inputbox.value;
    //alert ("You selected: " + TestVar);
	form.textbox.value=TestVar;
}
function testResults1 (form1)
{
    var TestVar1 = form1.inputbox1.value;
   // alert ("You selected: " + TestVar1);
	form1.textbox1.value=TestVar1;
}
//page 4
function verbalvalidation ()
{
	var opt = 0;
	var ans = 0;
 if(document.getElementById('answer').checked) 
 {
	 opt++;
	ans = ans + 1;
 }
else if (document.getElementById('radio2').checked) 
 {
	 opt++;
 }
 else if (document.getElementById('radio3').checked) 
 {
	 opt++;
 }

if (document.getElementById('radio4').checked) 
 {
	 opt++;	 
 }
  else if (document.getElementById('answer1').checked) 
 {
	 	 opt++;
	ans = ans + 1;
 }
 else if (document.getElementById('radio6').checked) 
 {
		 opt++;
 }
 
 if(opt == 2)
 {
	 if(ans == 2)
	 {
 	  sessionStorage.setItem("q3","right");
	 }
	 window.location="audiosco.html";
	 return false;
 }
 else
 {
 	alert("Please select atleast one option");
	return true;
}

}
// page 5
function audioscovalidation ()
{
 if(document.getElementById('answer').checked) 
 {
	 sessionStorage.setItem("q4","right");
	window.location="final.html";
	return false;
 }
else if (document.getElementById('radio2').checked) 
 {
	window.location="final.html";
	return false;
 }
 else if (document.getElementById('radio3').checked) 
 {
	window.location="final.html";
	return false;
 }
 else if (document.getElementById('radio4').checked) 
 {
	window.location="final.html";
	return false;
 }
 else
 alert("Please select atleast one option");
}

function myfun()
{
var a1,a2,a3,a4,correctattempts=0,count1=0,count2=0;
 a2=sessionStorage.getItem("q2");
 a3=sessionStorage.getItem("q3");
a4=sessionStorage.getItem("q4");
if (sessionStorage.getItem("q1")=="right")
{
	correctattempts=correctattempts+1;
}
if (sessionStorage.getItem("q2")=="right")
{
	correctattempts=correctattempts+1;
	document.getElementById("quantsanswered").innerHTML = "Number of Questions answered: " + 2;
	document.getElementById("quants").innerHTML = "Number of Correct answers: " + correctattempts;
	
	
}
else
{
	document.getElementById("quantsanswered").innerHTML = "Number of Questions answered: " + 2;
	document.getElementById("quants").innerHTML = "Number of Correct answers: " + correctattempts;
}
if (a3=="right")
{
	count1=count1+1;
	document.getElementById("verbalanswered").innerHTML = "Number of Questions answered: " + 2;
	document.getElementById("verbal").innerHTML = "Number of Correct answers: " + count1;
	

}
else
{ 
	document.getElementById("verbalanswered").innerHTML = "Number of Questions answered: " + 2;
	document.getElementById("verbal").innerHTML = "Number of Correct answers: " + count1;
}
if (a4=="right")
{
	count2=count2+1;
	
	document.getElementById("audio").innerHTML = "Number of Correct answers: " + count2;
	
}
else
{
	document.getElementById("audioanswered").innerHTML = "Number of Questions answered: " + 1;
	document.getElementById("audio").innerHTML = "Number of Correct answers: " + count2;
}


}