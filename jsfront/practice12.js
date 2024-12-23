const body=document.querySelector("body");
const firstcolor=body.style.background;
function ShowMessage(message){
    console.log(message);
}
function logCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    console.log(`Текущее время: ${hours}:${minutes}:${seconds}`);
}
ShowMessage("Скрипт загружен");
logCurrentTime();
function resetBackgroundColor() {
    document.body.style.backgroundColor = firstcolor;
}
function changeBackgroundColor(message){
    body.style.background=message;
}
changeBackgroundColor("lightblue");
function toggleVisibility(message){
    const element=document.querySelector(message);
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } 
    else {
        element.style.display = 'none';
    }
}
toggleVisibility('h2');
function updateH1WithUTMTerm() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get('utm_term');
    const h1 = document.querySelector('h1');
    console.log(urlParams);
    if (h1) {
        if (utmTerm) {
            h1.textContent = utmTerm;
            console.log(1);
        }
    }
}
// function getUtmTermFromUrl(message) {
//     const utmTerm = message.get("utm_term");
//     if (utmTerm) {
//         document.querySelector("h1").innerText = utmTerm;
//     }
// }
updateH1WithUTMTerm();