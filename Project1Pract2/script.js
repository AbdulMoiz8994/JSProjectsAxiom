// get all ids via only on function 
let id=(id) => document.getElementById(id);

console.log(id);
let classes=(classes) => document.getElementsByClassName(classes)
console.log(classes);

let 
username=id('name'),
email=id('email'),
password=id('password'),
secondForms=id('secondata'),
errorMsg=classes('error'),
success=classes('icon-success'),
failure=classes('icon-failure');
// console.log(username,email, password,form, errorMsg, success, failure);


console.log(username.value);
console.log(errorMsg);

secondForms.addEventListener("submit", (e) => {
    e.preventDefault();
    engine(username,0,'Please write username');
    engine(email,1,'Please write email');
    engine(password,2,"please write Password");
});

let engine=(id, serialNumber, message)=>{
    if(id.value.trim() == ''){
        console.log(id.value);
       errorMsg[serialNumber].innerHTML=message;     
       id.style.border="2px solid red";

       failure[serialNumber].style.opacity="1";
       success[serialNumber].style.opacity="0";
    }else{
        errorMsg[serialNumber].innerHTML='';
        id.style.border="2px solid green";

        failure[serialNumber].style.opacity="0";
        success[serialNumber].style.opacity="1";
    }
}
