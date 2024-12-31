
//Writing a function for Validation message

function Print_Err(elemId, msg){
    document.getElementById(elemId).innerHTML=msg;
}


let toggle_Pass = document.form.password;
let toggle_Cpass= document.form.confirmpassword;




//Show Password or Hide Password
function toggle_Password(){
    if((toggle_Pass.type && toggle_Cpass.type=='password')){
        toggle_Pass.type  ='text';
        toggle_Cpass.type ='text';

    }

    else{
        toggle_Pass.type='password';
        toggle_Cpass.type='password';
    }
}



function Validate(){

// Getting All the input values

let student_name = document.form.name.value;
let age = document.form.age.value;
let gender= document.form.gender.value;
let email =document.form.email.value;
let password = document.form.password.value;
let confirmpassword = document.form.confirmpassword.value;
let phone = document.form.phone.value;
let country =document.form.country.value; 


//Regular Expressions for validation 

let regname= /^[a-zA-Z\s]+$/; 
let regemail = /^\S+@\S+\.\S+$/;
let regpass= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
let regphone=/^[1-9]\d{9}$/;


//Declaring boolen value for an error

let nameErr =ageErr=genderErr = emailErr= passwordErr =confirmpasswordErr=phoneErr=countryErr =true;

// Name validation 

if(student_name ==''){
    Print_Err('nameErr','Please Enter your name')
}

else{if(regname.test(student_name)==false){
    Print_Err('nameErr','Please Enter a Valid Name')
}
else{
    nameErr=false;
    Print_Err('nameErr','Please Enter Your Name')}
}



//age Err

if(age=='' ||  age >=105){

    Print_Err('ageErr','Pleser Enter Your age')
}

else{
    ageErr=false
    Print_Err('ageErr','')
}

//Gender Err 

if(gender==''){
    Print_Err('genderErr','Please Select Your Gender')
}


else{genderErr=false;
    Print_Err('genderErr','')
}


//Email Err

if(email==''){
    Print_Err('emailErr','Please Enter Your Email')

}

else{
    if(regemail.test(email)==false){
        Print_Err('emailErr','Please Enter A Valid Email')
    }

    else{emailErr=false;
        Print_Err('emailErr','')
    }
}



//Password Err

if (password =="") {
                Print_Err("passwordErr", "Please enter your password");
            } 
			
			else{if(regpass.test(password)===false)
                { Print_Err("passwordErr","Password must include uppercase[A-Z]")}
			
			    else {  passwordErr =false;
                        Print_Err("passwordErr","")
				       }
						
				}

//Confirm Password validation

if(confirmpassword != password){
    Print_Err('confirmpasswordErr','The Password does not match')
}

else{
    confirmpasswordErr=false;
    Print_Err('confirmpasswordErr','')
}


// Phone validation 

if(phone ==''){
    Print_Err('phoneErr','Please Enter your Phone Number')
}

else{
    if(regphone.test(phone)==false){
        Print_Err('phoneErr','Please Enter A Valid Phone Number')
    }

    else{phoneErr=false
        Print_Err('phoneErr','')
    }
}


//Country Validation 
if(country== ''){
    Print_Err('countryErr','Please Select A country')
}

else{ countryErr=false;
      Print_Err('countryErr','')
    
}




if(nameErr || ageErr || genderErr || emailErr || passwordErr || confirmpasswordErr || phoneErr || countryErr){
    return false;
}



else{
    alert(`Your Name : ${student_name} \n Your age: ${age} \n Your Gender: ${gender}\nYour Email : ${password} \n Phone : ${phone} \n Country : ${country}`)
}

}
