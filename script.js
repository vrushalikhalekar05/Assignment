var formfields = document.getElementById("fields");
var error = document.getElementById("error1")
var error1 = document.getElementById("error2")
var error2 = document.getElementById("error3")
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var letters=/[a-zA-Z]+\s+[a-zA-Z]+/g;
var mailvalidation;
var nameValidation;
var splitString1,splitString;

document.getElementById("phno").addEventListener("keyup", myFunction1);

var ans1,ans2,ans3,answer1,answer2,answer3,phoneNo;

function checkphonef3(c1,c2,c3){
  var RE=/^[0-9]$/; 
  if(c1.match(RE) && c2.match(RE) && c3.match(RE))
  {
    first3=parseInt(c1+c2+c3);
    if(first3>=621 && first3<=799){
    demo1.textContent="reliance";
    console.log("reliance")
    ans1=true;
    }
    if(first3>=801 && first3<=920){
      console.log("ide")      
      demo1.textContent="idea";
      ans1=true;
    }
    if(first3>=921 && first3<=999){
      console.log("ide")
      demo1.textContent="vodafone";
      ans1=true;
    }
    
  }
  else
  {
    demo1.textContent=""
    ans1=false
    
  }
  return ans1;
}

function checkphones3(c4,c5,c6){
  demo2=document.getElementById("demo2")

  statesno=[567,456,234,987]
  states=["maharashtra","kerala","delhi","UP"]
  var RE=/^[0-9]$/; 
  if(c4.match(RE) && c5.match(RE) && c6.match(RE))
  {
    sec3=parseInt(c4+c5+c6);
    if(statesno.includes(sec3)){
      index=statesno.indexOf(sec3)

    demo2.textContent=states[index];
    
    console.log("reliance")
    ans2=true;
    }
    else{
    demo2.textContent=""
    ans2=false
    
  }
  }
  else{
    demo2.textContent=""
    ans2=false
    
  }
  return ans2;
}
function checkphonel4(c7,c8,c9,c10){
  var RE=/^[0-9]$/; 

  if(c7.match(RE) && c8.match(RE) && c9.match(RE) && c10.match(RE))
  {
   
    ans3=true;
  }
  else{
    ans3=false;
    error2.textContent = "Please enter valid phone no"
  }
  return ans3;
}
function myFunction1() {
var demo2 = document.getElementById("demo2");
    
      phoneNo = document.getElementById("phno").value;
  
      c1=phoneNo.charAt(0);
  
      c2=phoneNo.charAt(1);
      console.log("c2",c2)
      c3=phoneNo.charAt(2);
      c4=phoneNo.charAt(3);
      c5=phoneNo.charAt(4);
      c6=phoneNo.charAt(5);
      c7=phoneNo.charAt(6);
      c8=phoneNo.charAt(7);
      c9=phoneNo.charAt(8);
      c10=phoneNo.charAt(9);

      answer1=checkphonef3(c1,c2,c3)
      answer2=checkphones3(c4,c5,c6)
      answer3=checkphonel4(c7,c8,c9,c10)
      if(answer1 && answer2 && answer3){
         error2.textContent ="correct"
        }
      else{
         error2.textContent ="You entered invalid phone no"
      }

      console.log("answer1 answer2",answer1,answer2);

      // Phone no will be validated in the format e.g 7775678976
      
}


function emailValidation(){
  var email=  document.getElementById("email").value;
  if(email.match(mailformat)){
    error1.textContent = ""
    return true;
   }
   else{
    error1.textContent = "invalid mail id"
    error1.style.color = "red"
    return false;
   }
}
function fnameValidation(){
  var fname=  document.getElementById("fname").value;
  splitString1=fname.trim();
  // splitString1=fname.replace(/\s/g," ")
  splitString1=splitString1.replace(/\s+/g,' ');

  splitString=splitString1.split(" ");
  console.log("splitString1",splitString1);
  console.log("splitString",splitString);
  flag=true;
  for (i = 0; i < splitString.length; i++) {
    if(splitString[i].length<4){
      console.log("in if")
      flag=false
      break;
    }
    console.log("in loop")
  }
  if(fname.match(letters) && (flag))
     {
      error.textContent = ""
      return true;
     }
   else
     {
      error.textContent = "Please enter only alphabets with atleast firstname and lastname, having min length 4"
      error.style.color = "red"
      return false;
     }
}
function allLetter()
  {
    // var output = document.getElementById("ip");
    // var output1 = document.getElementById("myinput");
   
    mailvalidation = emailValidation();
    nameValidation = fnameValidation();
    if((mailvalidation) && (nameValidation) && (answer1) && (answer2) && (answer3)){
     console.log("in other if");
      // formfields.style.display="none";
      // output.style.display="block";
      
      console.log("splitString1",splitString1)
      // document.myform.myinput.value = '1';
      // document.getElementById("demo").innerHTML = "Dear" + splitString[0] + "Thank you for your inquiry.";
      // output1.value='success';
      var otp = Math.floor(1000 + Math.random() * 9000);
      console.log("random no",otp);
	
      window.location.href = "trial.html?fname=" + splitString[0] + "&otp=" + otp + "&phno=" + phoneNo; 
    }

	
  }//end of 


