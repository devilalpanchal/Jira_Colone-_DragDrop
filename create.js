

const closeMark = document.querySelector('#closeMark')
const OpenMark = document.querySelector('#OpenMatk')
const Create = document.querySelector('.Create')

function ToggleThisContainer() {
    Create.classList.toggle('hide')
}

OpenMark.addEventListener('click',ToggleThisContainer)
closeMark.addEventListener('click',ToggleThisContainer)

document.querySelector('#heroContainer').addEventListener('clcik',()=>{
    Create.classList.add('hide')

}
)