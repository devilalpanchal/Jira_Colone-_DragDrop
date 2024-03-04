// for setting pop up
let startBtn = document.getElementById('DpImage');
let emailSetup = document.querySelector('.Mail');
let close = document.querySelector(".times");


function toggleSetting(){
  emailSetup.classList.toggle('hide')
}
startBtn.addEventListener('click',toggleSetting)
close.addEventListener('click',toggleSetting)

// console.log(CenterContainer);
document.querySelector('#heroContainer').addEventListener('click',()=>{
  emailSetup.classList.add('hide')
})