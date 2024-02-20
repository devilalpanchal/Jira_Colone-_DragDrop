let btn = document.querySelector('.btn')
let input = document.querySelector('.issue')

///// My Code Start
let secondbtn = document.querySelector('.secondbtn')
let thirdbtn = document.querySelector('.thirdbtn')
let secondContainer = document.querySelector('.secondContainer')
let thirdContainer = document.querySelector('.thirdContainer')

secondContainer.addEventListener('mouseover', () => {
    secondbtn.classList.remove('hide')
    secondbtn.style.background = "rgb(222, 241, 243)"
    secondbtn.style.width = "100%"
    secondbtn.style.height = "10%"
    secondbtn.style.textAlign = "start";
    secondbtn.style.paddingLeft = "20px";
    secondbtn.insertAfter(".child-card");
})
secondContainer.addEventListener('mouseout', () => {
    secondbtn.classList.add('hide')
})

thirdContainer.addEventListener('mouseover', () => {
    thirdbtn.classList.remove('hide')
    thirdbtn.style.background = "rgb(222, 241, 243)"
    thirdbtn.style.width = "100%"
    thirdbtn.style.height = "10%";
    thirdbtn.style.textAlign = "start";
    thirdbtn.style.paddingLeft = "20px";
})
thirdContainer.addEventListener('mouseout', () => {
    thirdbtn.classList.add('hide')
})
///// My Code Start

btn.addEventListener('click', () => {

  input.classList.remove('hide')
  btn.classList.add('hide')
  input.focus()
})

let draggingInfo = {
  draggingElement: null,
  draggingId: null,
}

input.addEventListener('keyup', (e) => {
  let todoContainer = document.querySelector('#to-do')
  let progressContainer = document.querySelector('#progress')
  let doneContainer = document.querySelector('#done')
  if (e.keyCode == 13) {
    let value = input.value
    console.log(value)
    let card = document.createElement('div')
    card.innerText = value
    card.className = 'child-card'
    card.style.padding = '10px'
    card.style.borderRadius = '10px'
    card.style.marginTop = '5px'
    card.setAttribute('data-container', 'card')
    card.style.background = 'skyblue'
    card.draggable = 'true'
    todoContainer.append(card)
    // card.insertBefore(".btn");

    card.addEventListener('dragstart', (e) => {
      console.log('hello')
      draggingInfo.draggingElement = e.target
      draggingInfo.draggingId = e.target.getAttribute('data-container')
      console.log(draggingInfo.draggingElement, draggingInfo.draggingId)
    })

    input.classList.add('hide')
    btn.classList.remove('hide')
    input.value = ''
  }
})

let allContainer = document.querySelectorAll('.container')
console.log(allContainer)

allContainer.forEach((item) => {
  item.addEventListener('dragover', (event) => {
    event.preventDefault()
  })

item.addEventListener('drop',(e)=>{
  console.log('dropping card')
  let card=draggingInfo.draggingElement
  card.id=draggingInfo.draggingId
let box=e.currentTarget
console.log(box)
box.appendChild(card)

})

})

