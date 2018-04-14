var attempt = 3; //Variable to count number of attempts

//Below function Executes on click of login button
function validate(){
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;

	if ( email == "siosonkylebrandon@gmail.com" && password == "Sioson19"){
		alert ("Login successfully");
		window.location = "3zh-rR7-rZ8-dBL.html"; //redirecting to other page
		return false;
	}
	else{
		attempt --;//Decrementing by one
		alert("You have "+attempt+" attempt(s) left");
		
		//Disabling fields after 3 attempts
		if( attempt == 0){
			document.getElementById("email").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("submit").disabled = true;
			return false;
		}
	}
}