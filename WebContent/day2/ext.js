function formValidation()
{
 uid = document.registration.userid;
 pass = document.registration.passid;
var uname = document.registration.username;
var uadd = document.registration.address;
var ucountry = document.registration.country;
var uzip = document.registration.zip;
var uemail = document.registration.email;
var umsex = document.registration.msex;
var ufsex = document.registration.fsex; 
if(userid_validation(uid,5,12))
{
	
	if(pass_validation(pass,7,12))
	{
		
		if(allLetter(uname))
		{
			
			if(alphanumeric(uadd))
			{ 
				
					
						if(ValidateEmail(uemail))
						{
												
						} 
					} 
			}
		}
	}
return false;
}



function userid_validation(uid,mx,my)
	{
	var uid_len = uid.value.length;
	if (uid_len == 0 || uid_len >my || uid_len < mx)
	{
		alert("User Id should not be empty / length be between "+mx+" to "+my);
		return false;
	}
	return true;
}

function pass_validation(pass,mx,my)
{
	var pass_len = pass.value.length;
	if (pass_len == 0 || pass_len >my || pass_len < mx)
	{
		alert("Password should not be empty / length be between "+mx+" to "+my);
		return false;
	}
return true;
}

function allLetter(uname)
{ 
	var letters = /^[A-Za-z]+$/;
	if(uname.value.match(letters))
	{
		return true;
	}
	else
	{
		alert('Username must have alphabet characters only');
		return false;
	}
}

function alphanumeric(uadd)
{ 
	var letters = /^[0-9a-zA-Z]+$/;
	if(uadd.value.match(letters))
	{
		return true;
	}
	else
	{
		alert('User address must have alphanumeric characters only');
		uadd.focus();
		return false;
	}
}
function ValidateEmail(uemail)
{
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(uemail.value.match(mailformat))
	{
		return true;
	}
	else
	{
		alert("You have entered an invalid email address!");
		uemail.focus();
		return false;
	}
}
