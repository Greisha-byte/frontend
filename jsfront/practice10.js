let name=prompt("Введите имя");
let age=prompt("Введите возраст");
if(age>=18)
    {
        alert("Вы совершеннолетний");
    }
else alert("Вы не совершеннолетний");
for(let i=1;i<11;i++) console.log(i);
let i=10;
while(i>0){
     console.log(i);
     i--;
}
function inline(mas){
    let line="";
    for(let i=0;i<mas.length-1;i++){
        line+=mas[i];
        line+=", ";
    }
    line+=mas[mas.length-1];
    alert(line);
}
let lectures = ['Тема 1', 'Тема 2', 'Тема 3']; 
let practices = ['Практика 1', 'Практика 2', 'Практика 3']; 
lectures.push("Тема 4");
lectures.unshift("Тема 0")
practices.push("Практика 4");
practices.unshift("Практика 0");
lectures.forEach((num)=>{
    console.log(num)
})
practices.forEach((num)=>{
    console.log(num)
})
inline(lectures);
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