const h1el=document.getElementById("h1");
const h2el=document.getElementById("h2");
const vid=document.getElementById("video");
const btn3 = document.getElementById("openModal3");
const UserName=document.getElementById("UserName");
const E_mail=document.getElementById("E_mail");
const PhoneNumber=document.getElementById("PhoneNumber");
const UserCountryName=document.getElementById("UserCountryName");
const CurrentDate=document.getElementById("CurrentDate");
const UserCommentary=document.getElementById("UserCommentary");
const modal = document.getElementsByClassName("modal")[0];
const span = document.getElementsByClassName("close")[0];
let formData={
    name:"",
    email:"",
    number:"",
    date:"",
    com:""

};
formData.printData = function(){
    console.log(this.name);
    console.log(this.email);
    console.log(this.number);
    console.log(this.date);
    console.log(this.com);
};
h1el.textContent="Добро пожаловать на наш сайт!";
h2el.style.color="red";
vid.style.display="none";
btn3.onclick = function() {
    modal.style.display = "block";
}
modal.addEventListener("submit",function(event){
    event.preventDefault();
    submitForm();
    formData.printData();
});
function submitForm(){
    if(!PhoneNumber.value.match(/^\d+$/)){
        alert("номер телефона цифры");
        return;
    }
    if(E_mail.value == '' || E_mail.value.indexOf('@') == -1 || E_mail.value.indexOf('.') == -1) {

        alert("Неправильная почта");
        return;
    }
    formData.name=UserName.value;
    formData.email=E_mail.value;
    formData.number=PhoneNumber.value;
    formData.date=CurrentDate.value;
    formData.com=UserCommentary.value;
    modal.style.display = "none";
}
span.onclick = function() {
    modal.style.display = "none";
}