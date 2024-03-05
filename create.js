

const closeMark = document.querySelector('#closeMark')
const OpenMark = document.querySelector('#OpenMatk')
const Create = document.querySelector('.Create')
const CreatePopUp = document.querySelector('.creat223')
const PopUpContainer = document.querySelector('.OPPopUp')

function ToggleThisContainer() {
    Create.classList.toggle('hide')
}

OpenMark.addEventListener('click',ToggleThisContainer)
closeMark.addEventListener('click',ToggleThisContainer)

document.querySelector('#heroContainer').addEventListener('click',()=>{
    Create.classList.add('hide')

}
)


CreatePopUp.addEventListener('click',()=>{

  let NewPopUp = document.createElement('div')
  NewPopUp.classList.add('.newpop')
  NewPopUp.style.width = "500px"
  NewPopUp.style.height = "600px"
  NewPopUp.style.padding = "20px"
  NewPopUp.style.border = "groove 1em rgba(0, 255, 0, 0.5)"
  NewPopUp.style.borderRadius = "0% 50% 0% 50%"
  NewPopUp.style.position = "absolute"
  NewPopUp.style.top = "0px"
  NewPopUp.style.backgroundColor = "white"

  let underContainer = document.createElement('div')
  underContainer.style.display = "flex"
  underContainer.style.flexDirection = "column"
  underContainer.style.alignItems = "center"
  underContainer.style.justifyContent = "center"
  underContainer.style.gap = "20px"
  underContainer.style.marginTop = "150px"
  underContainer.style.fontSize = "20px"

  let input = document.createElement('input')
  input.style.width = "300px"
  input.style.padding = "10px"
  input.style.outline = "none"
  input.style.border = "2px solid blue"
  input.style.borderRadius = "0% 50% 0% 50%"

  let input2 = document.createElement('input')
  input2.style.width = "300px"
  input2.style.padding = "10px"
  input2.style.outline = "none"
  input2.style.border = "2px solid blue"
  input2.style.borderRadius = "0% 50% 0% 50%"

  let button = document.createElement('button')
  button.innerText = "Submit" 
  button.style.border = "none" 
  button.style.backgroundColor = "blue" 
  button.style.color = "white" 
  button.style.width = "180px" 
  button.style.height = "30px" 
  button.style.padding = "10px" 
  button.style.borderRadius = "50%" 
  button.addEventListener('click',()=>{
    NewPopUp.classList.toggle('hide')
  })
  button.addEventListener('mouseover', () => {
    button.style.backgroundColor = 'red';
    button.style.borderRadius = "0% 50% 0% 50%"
  });

  let newDiv = document.createElement('div')
  newDiv.innerText = "Write Your Name"

  let newDiv2 = document.createElement('div')
  newDiv2.innerText = "Write Your Project Name"

  PopUpContainer.append(NewPopUp)
  NewPopUp.append(underContainer)
  underContainer.appendChild(newDiv)
  underContainer.appendChild(input)
  underContainer.appendChild(newDiv2)
  underContainer.appendChild(input2)
  underContainer.appendChild(button)
//   Create.classList.add('hide')
})
