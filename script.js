function foo()
{
    var fname=document.getElementById("firstname").value;
    var mname=document.getElementById("middlename").value;
    var lname=document.getElementById("lastname").value;
    var email=document.getElementById("email").value;
    var phnum=document.getElementById("phonenumber").value;
    console.log(`FirstName=${fname}\n MiddleName=${mname}\n LastName=${lname}\n Email=${email}\n PhoneNumber=${phnum}`)
}