
const UpgradeContainer = document.querySelector('.UpgradeContainer')
const CloseContainer = document.querySelector('.closeUpgarde')
const StartContainer = document.querySelector('#StartUpgradeContainer')

function toggleContainer(){
    UpgradeContainer.classList.toggle('hide')
}

StartContainer.addEventListener('click',toggleContainer)

CloseContainer.addEventListener('click',toggleContainer)

document.querySelector('#heroContainer').addEventListener('click',()=>{
    UpgradeContainer.classList.add('hide')

})

let createNewdiv = document.querySelector('.createNewdiv')
document.querySelector('.MaybeButyon2').addEventListener('click',()=>{
    setTimeout(() => {
        document.location.reload();
      }, 10);
      let creatediv = document.createElement('div')
      let imgtag = document.createElement('img')
      img.src = 'https://tenor.com/search/burency-system-updates-gifs'
      createNewdiv.append(creatediv)
      creatediv.appendChild(img)
})

