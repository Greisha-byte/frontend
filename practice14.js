function handleH1Click() {
    alert("Вы кликнули на заголовок - так держать!");
}

function handlePClick(p) {
    console.log("d");
    p.style.transition = 'color 0.5s ease';
    p.style.color = 'lightblue';
}

function handleH1MouseOver() {
    const h1 = document.querySelector('h1');
    if (h1) {
        h1.style.transition = 'transform 0.3s ease';
        h1.style.transform = 'scale(1.1)';
    }
}

function handleH1MouseOut() {
    const h1 = document.querySelector('h1');
    if (h1) {
        h1.style.transition = 'transform 0.3s ease';
        h1.style.transform = 'scale(1)';
    }
}

function handleMouseOver() {
    const studentPhoto = document.querySelector('#student-photo');
    if (studentPhoto) {
        studentPhoto.style.transform = 'scale(1.1) rotate(15deg)';
        studentPhoto.style.transition = 'transform 0.3s ease';
    }
}

function handleMouseOut() {
    const studentPhoto = document.querySelector('#student-photo');
    if (studentPhoto) {
        studentPhoto.style.transform = 'scale(1) rotate(0deg)';
        studentPhoto.style.transition = 'transform 0.3s ease';
    }
}

function handlePhotoClick() {
    const studentPhoto = document.querySelector('#student-photo');
    if (studentPhoto) {
        studentPhoto.src = 'img/icon.jpg';
        studentPhoto.alt = 'Изображение любимого преподавателя';
    }
}

function handlePhotoDoubleClick() {
    alert("Не налегай, у меня не так много любимых преподавателей");
}
document.addEventListener("DOMContentLoaded", () => {
    const pElements = document.querySelectorAll('p');
    pElements.forEach((p) => {
        p.addEventListener('click', () => handlePClick(p));
    });

    const h1 = document.querySelector('h1');
    if (h1) {
        h1.addEventListener('click', handleH1Click);
        h1.addEventListener('mouseover', handleH1MouseOver);
        h1.addEventListener('mouseout', handleH1MouseOut);
    }

    const studentPhoto = document.querySelector('#student-photo');
    if (studentPhoto) {
        studentPhoto.addEventListener('mouseover', handleMouseOver);
        studentPhoto.addEventListener('mouseout', handleMouseOut);
        studentPhoto.addEventListener('click', handlePhotoClick);
        studentPhoto.addEventListener('dblclick', handlePhotoDoubleClick);
    }
});
const secondSemesterTopics = [
    "Базовое бэкенд-приложение",
    "HTTP-запросы",
    "JSON и работа с ним",
    "HTTP-ответы",
    "Проектирование API",
    "Роутинг и его настройка",
    "NoSQL базы данных",
    "Обеспечение авторизации и доступа пользователей",
    "Работа сторонних сервисов уведомления и авторизации",
    "Основы ReactJS",
    "Работа с компонентами динамической DOM",
    "Использование хуков в React",
    "Основы микросервисной архитектуры",
    "Разработка классических модулей веб-приложений",
    "Разработка классических модулей веб-приложений"
];

function changeToSecondSemester() {
    const tableBody = document.querySelector("#semester-table");
  
    tableBody.innerHTML = '';
    const mainrow = document.createElement('tr');
    mainrow.innerHTML=`
    <tr>
        <th scope="col">Номер</th>
        <th scope="col">Тема</th>
        <th scope="col" ><div class="sdvig">Посещение</div></th>
        <th scope="col" ><div class="sdvig">Выпонение</div></th>
    </tr>
        `;
    tableBody.appendChild(mainrow);
    secondSemesterTopics.forEach((topic, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
    <tr>
        <td >${index + 1}</td>
        <td >${topic}</td>
        <td><input type="checkbox" name="attendance"/></td>
        <td><input type="checkbox" name="complete"/></td>
    </tr>
        `;
        tableBody.appendChild(row);
    });
}

function changeTableDisplay() {
    const table = document.querySelector('#lecture-table');
    const tableBtn = document.querySelector('#show-lecture-table-btn');
    if (table && tableBtn) {
        // table.style.transition = 'opacity 1s ease-in-out';
        // table.style.display = '';
        // tableBtn.style.display = 'none';
        // setTimeout(() => {
        //     table.style.opacity = '1';
        // }, 1);
        table.style.display = "block";
        table.style.opacity = 0;
        let fadeIn = setInterval(function() {
        if (table.style.opacity < 1) {
            table.style.opacity = parseFloat(table.style.opacity) + 0.1;
        } 
        else{
            clearInterval(fadeIn);
        }
        }, 100);
        }
}

document.getElementById('second-semester-btn').addEventListener('click', changeToSecondSemester);
document.getElementById('show-lecture-table-btn').addEventListener('click', changeTableDisplay);
