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
    demo1=document.getElementById("demo1")
  
    first3=parseInt(c1+c2+c3);
    if(first3>=621 && first3<=799){
    demo1.textContent="reliance";
    console.log("reliance")
    return true;
    }
    if(first3>=801 && first3<=920){
      console.log("ide")      
      demo1.textContent="idea";
      return true;
    }
    if(first3>=921 && first3<=999){
      console.log("ide")
      demo1.textContent="vodafone";
      return true;
    }
    
   return false;
}

function checkphones3(c4,c5,c6){
  demo2=document.getElementById("demo2")
  statesno=[567,456,234,987]
  states=["maharashtra","kerala","delhi","UP"]
   
    console.log("v2")
    
    sec3=parseInt(c4+c5+c6);
    if(statesno.includes(sec3)){
      index=statesno.indexOf(sec3)

    demo2.textContent=states[index];
    
    console.log("reliance")
    return true;
    }
    else{
    demo2.textContent=""
    return false;
    
  }
  
}

function myFunction1() {
      var RE=/^[0-9]$/; 
      var demo2 = document.getElementById("demo2");
    
      phoneNo = document.getElementById("phno").value;
      
  
      c1=phoneNo.charAt(0);
  
      c2=phoneNo.charAt(1);
      console.log("c2",c2)
      c3=phoneNo.charAt(2);
      if(c1.match(RE) && c2.match(RE) && c3.match(RE))
      {
        document.getElementById("phno").value = "("+ phoneNo +") - ";
        phoneNo = document.getElementById("phno").value;
        ch1=phoneNo.charAt(1);
  
      ch2=phoneNo.charAt(2);
    
      ch3=phoneNo.charAt(3);
        answer1=checkphonef3(ch1,ch2,ch3)
      }
      
      
      phoneNo = document.getElementById("phno").value;
      console.log("phoneNo",phoneNo)
      c4=phoneNo.charAt(8);
      c5=phoneNo.charAt(9);
      c6=phoneNo.charAt(10);
      if(c4.match(RE) && c5.match(RE) && c6.match(RE))
      {
        console.log("in 2 ifphoneNo",phoneNo)
        
        phoneNo = document.getElementById("phno").value;
        console.log("in 2 ifphoneNo",phoneNo)
      
      answer2=checkphones3(c4,c5,c6)
      }
      console.log("v3")
      phoneNo = document.getElementById("phno").value;
      c7=phoneNo.charAt(11);
      c8=phoneNo.charAt(12);
      c9=phoneNo.charAt(13);
      c10=phoneNo.charAt(14);
      
      if(c7.match(RE) && c8.match(RE) && c9.match(RE) && c10.match(RE))
    {  
      phoneNo = document.getElementById("phno").value;

      phoneNo1 =" - "+ phoneNo.slice(10, 14);
      document.getElementById("phno").value=phoneNo.slice(0,11)+phoneNo1
      phoneNo=document.getElementById("phno").value;
      answer3= true;
    }
  else{
    answer3 = false;
   
    }
      
      console.log("v5")
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
    
    mailvalidation = emailValidation();
    nameValidation = fnameValidation();
    if((mailvalidation) && (nameValidation) && (answer1) && (answer2) && (answer3)){
     console.log("in other if");
      console.log("splitString1",splitString1)
      var otp = Math.floor(1000 + Math.random() * 9000);
      console.log("random no",otp);
	
      window.location.href = "trial.html?fname=" + splitString[0] + "&otp=" + otp + "&phno=" + phoneNo; 
    }

	
  }//end of 

