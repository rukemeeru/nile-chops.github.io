function validate()
{
var username=document.getElementById("username").Value
var username=document.getElementById("password").Value
if(username=="USER" && password=="ADMIN")
{
     alert("account created");
     return false;

}
  else
{
    alert("account not created");
    return false;
}

}