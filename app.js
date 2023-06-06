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

threeQuestion();


function threeQuestion(){

    let Answer = new Array();
let realAge=prompt ("Did You enter  your  Real Age");
if(realAge != 'yes' && realAge !='no')
{
    realAge="invalid";

}

Answer.push(realAge);

let javaScript =prompt ("Do you know what is JavaScript");
if(javaScript != 'yes' && javaScript !='no')
{
    javaScript="invalid";

}
Answer.push(javaScript);

let myWebsite=prompt ("Do You like my website");

if(myWebsite != 'yes' && myWebsite !='no')
{
    myWebsite="invalid";

}
Answer.push(myWebsite);

for(let i=0;i<Answer.length;i++)
{
    console.log("your answer for question"+" "+(i+1)+" "+Answer[i]);
}

}