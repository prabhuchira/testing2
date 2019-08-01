
window.addEventListener('blur', stopTimer);


if(localStorage.getItem('id') !== null){
    window.location.href ="block.html";
}

function stopTimer() {
    console.log('d');
    localStorage.setItem('id','blocked');
    window.location.href ="block.html";

    
   }