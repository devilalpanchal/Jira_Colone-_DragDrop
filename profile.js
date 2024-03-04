

const ProfileContainer = document.querySelector('.profileofdevi')
const startbtn = document.getElementById('ProfileImage')
const closebtn = document.querySelector('.CloseProfile')

function profileSetting(){
    ProfileContainer.classList.toggle('hide')
}

startbtn.addEventListener('click',profileSetting)
closebtn.addEventListener('click',profileSetting)

document.querySelector('#heroContainer').addEventListener('click',()=>{
    ProfileContainer.classList.add('hide')
})

