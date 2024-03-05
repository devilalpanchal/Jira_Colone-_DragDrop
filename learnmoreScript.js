
const notifyContainer = document.querySelector('.yes')
const Open = document.querySelector('#Btn')
const Close = document.querySelector('.closetn5')
const Closebtn = document.querySelector('.Closebtn')


Open.addEventListener('click',()=>{
    notifyContainer.classList.toggle('hide')
})

Close.addEventListener('click',()=>{
    notifyContainer.classList.toggle('hide')

})

Closebtn.addEventListener('click',()=>{
    alert(location.href); 
if (confirm("Go to Front Page of Devid website")) {
  location.href = "http://127.0.0.1:5502/index.html"; 
}
})

