//создаём переменные для записи данных с полей формы
const UserName=document.getElementById("UserName");
const E_mail=document.getElementById("E_mail");
const PhoneNumber=document.getElementById("PhoneNumber");
const UserCountryName=document.getElementById("UserCountryName");
const CurrentDate=document.getElementById("CurrentDate");
const UserCommentary=document.getElementById("UserCommentary");
//логическая переменная для проверки все ли поля формы заполнены
let IsFormValid=true;
// Получаем элементы модального окна и кнопок
const modal = document.getElementsByClassName("modal")[0];
const btn1 = document.getElementById("openModal1");
const btn2 = document.getElementById("openModal2");
const btn3 = document.getElementById("openModal3");
const span = document.getElementsByClassName("close")[0];
const form = modal;
const successMessage = document.getElementById("successMessage");
const sub=document.getElementById("sub");

// Открываем модальное окно при нажатии на кнопку
btn1.onclick = function() {
    modal.style.display = "block";
}
btn2.onclick = function() {
    modal.style.display = "block";
}
btn3.onclick = function() {
    modal.style.display = "block";
}
// Закрываем модальное окно при нажатии на "X"
span.onclick = function() {
    modal.style.display = "none";
}
//получаем данные с формы
/*sub.onclick = function GetData(){
    modal.style.display = "none";
    if (UserName.value==="" || E_mail.value==="" || PhoneNumber.value==="" || CurrentDate.value==="" || UserCommentary.value===""){
       alert("Что-то пошло не так! Попробуйте снова.") 
    }
    else {
        successMessage.style.display = 'block';
        window.setTimeout(Time,3000);
    }
}*/
function Time(){
    successMessage.style.display = 'none';
}
// Закрываем модальное окно при клике вне его области
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
    
}
//практика 10
function onlyO(mas){
    new_mas=[];
    mas.forEach((el)=>{
        if (el[0]=="O"){
            new_mas.push(el);
        }
    })
    console.log(new_mas);
}
const lec=["Odin","Dva","odin","Obricos","TREE","CHET","Omama"];
console.log(lec);
onlyO(lec);