
const qestionsMark1 = document.querySelector('.qestionsMark')
const close1 = document.querySelector('.close1')
const startbnt = document.getElementById('querryMark')

function qestionsMarkContainer() {
    qestionsMark1.classList.toggle('hide')
}

startbnt.addEventListener('click', qestionsMarkContainer)

close1.addEventListener('click', qestionsMarkContainer)

document.querySelector('#heroContainer').addEventListener('click', () => {
    qestionsMark1.classList.add('hide')

})