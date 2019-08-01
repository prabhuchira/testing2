// const INTERVAL = 5000;
// setTimeout(function(){
//     chrome.tabs.create({url: 'http://www.stackoverflow.com', active: false }, tab =>{
//         setTimeout(function(){
//             chrome.tabs.remove(tab.id);
//         },INTERVAL);
//     }); 
// },INTERVAL);
// // let winStacko; setTimeout(() => { winStacko=open('https:www.stackoverflow.com');},30*1000); setTimeout(() => winStacko.close(), 30*1000);
var e1=document.getElementById('iframe');
if(e1){


window.addEventListener('focus', startTimer);
}
function startTimer() {
    console.log('focus');
   
   }
window.addEventListener('blur', stopTimer);
function stopTimer() {
    console.log('d');
    window.close();
   }
// var el = document.getElementById('overlayBtn');
// if(el){
//   el.addEventListener('click', swapper, false);
// }
//    var e1  = document.getElementById('iframe');
//    if(e1){
// e1.addEventListener('blur',stop);
//    }
// function stop(){
//     console.log('hi');
//     e1.close();
// }