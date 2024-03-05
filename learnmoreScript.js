
const notifyContainer = document.querySelector('.yes')
const Open = document.querySelector('#Btn')
const Close = document.querySelector('.closetn5')


Open.addEventListener('click',()=>{
    notifyContainer.classList.toggle('hide')
})

Close.addEventListener('click',()=>{
    notifyContainer.classList.toggle('hide')

})

