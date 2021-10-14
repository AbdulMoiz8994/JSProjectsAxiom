let form=document.querySelector('.form')
let username=document.querySelector('#username')
let email=document.querySelector('#email')
let password=document.querySelector('#password')
let confirmPassword=document.querySelector('#confirmpassword')

console.log(form);
console.log(username);
console.log(email);
console.log(password)
console.log(confirmPassword)


function showError( input, message){
     
  // from ParentElement we get the parent tag just like in this case we have the 
  let formControl=input.parentElement;
  console.log(formControl);
  // make the class name
   const getsmall=formControl.querySelector('small')
    getsmall.innerText=message
}
function showSuccess(input){


}



form.addEventListener('submit', function(e){

// stop page re-rendering the on submit every time changes
  e.preventDefault()

  // checking fi the username is empty
   if(username.value === ''){
     console.log(username.value);
      showError(username, 'Username is Required')    
       }else{
         showSuccess(username)
       }

         // checking fi the email is empty
    if(email.value === ''){
      showError(email,'Email is Required')
    } else{
      showSuccess(email)
    }    
      if(password.value === ''){
         showError(password, 'Passowrd is Required')      
      }else{
        showSuccess(password)
      }
   if(confirmPassword.value === ''){
     showError(confirmPassword, 'Confirm Passowrd Required')
   }else{
     showSuccess(confirmPassword)
   }
   console.log(password.value,confirmPassword.value);
   if(password.value  !== confirmPassword.value){
    alert('Please write correct Passowrd')

    password.value=""
    confirmPassword.value=""
 }else{
   alert('Form has Submitted')  
}

})