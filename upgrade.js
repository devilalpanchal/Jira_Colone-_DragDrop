
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