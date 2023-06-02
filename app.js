let Username = prompt("Please Enter your Name");
let gender = prompt("Please Enter your Gender(Male,Female)");
let Age = prompt ("Please Enter your Age");
if(Age<=0)
{

    alert("Please Enter Real Age");
    let Age = prompt ("Please Enter your Age");

}

let Confirm = confirm ("Do you Want to skip the Welcome massage");

console.log(Confirm);

if(Confirm==false)
{
    if(gender == "male"||gender=="Male")
    {
        alert("Welcome Mr."+Username);
    }
else if(gender=="female"||gender =="Female")
{
    alert("Welcome Ms."+Username);

}
else 
{
    alert("Welcome"+Username);

}
}
