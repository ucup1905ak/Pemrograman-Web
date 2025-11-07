var iAge;
var sMF;

iAge = prompt("Please enter your age in years.", 0);
sMF  = prompt("Are you a Male of a Female (M/L)?", "M");

if(iAge > 20){
    if(sMF == "M"){
        alert("You are a male over 20 years of age.");
    }else{
        alert("You are a female over 20 years of age.");
    }
}else{
    if(sMF){
        alert("You are a male under the age of 20.");
    }else {
        alert("You are a female under the age of 20.");
        
    }
}