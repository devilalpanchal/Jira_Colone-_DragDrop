

let secondbtn = document.querySelector('.secondbtn')
let thirdbtn = document.querySelector('.thirdbtn')
let secondContainer = document.querySelector('.secondContainer')
let thirdContainer = document.querySelector('.thirdContainer')

secondContainer.addEventListener('mouseover', () => {
  secondbtn.classList.remove('hide')
  secondbtn.style.background = "rgb(222, 241, 243)"
  secondbtn.style.width = "100%"
  secondbtn.style.height = "20%"
  secondbtn.style.padding = "10px"
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
  thirdbtn.style.padding = "10px"
  thirdbtn.style.height = "20%";
  thirdbtn.style.textAlign = "start";
  thirdbtn.style.paddingLeft = "20px";
})
thirdContainer.addEventListener('mouseout', () => {
  thirdbtn.classList.add('hide')
})
/////////////////////////////// My Code End ////////////////////////////////////

let btn = document.querySelectorAll('.btn')
let input = document.querySelectorAll('.issue')

btn.forEach((item) => {
  item.addEventListener('click', (e) => {
    let input = e.target.nextElementSibling
    input.classList.remove('hide')
    e.target.classList.add('hide')
    input.focus()
  })
})

let draggingInfo = {
  draggingElement: null,
  draggingId: null,
}

input.forEach((item) => {
  item.addEventListener('keyup', (e) => {
    let input = e.target
    if (e.keyCode == 13) {
      let value = input.value
      let card = document.createElement('div')
      card.innerText = value
      card.className = 'child-card'
      card.style.padding = '10px'
      card.style.borderRadius = '5px'
      card.style.marginTop = '50px'
      card.setAttribute('data-container', 'card')
      card.style.background = 'orange'
      card.draggable = 'true'

      card.addEventListener('dragstart', (e) => {
        draggingInfo.draggingElement = e.target
        draggingInfo.draggingId = e.target.getAttribute('data-container')
      })

      let parentContainer = e.target.parentElement
      parentContainer.appendChild(card)
      e.target.classList.add('hide')
      e.target.previousElementSibling.classList.remove('hide')
      e.target.value = ''
    }
  })
})

////////////////////// to add function for quickstart button////////////////////////////////
let Quickbutton = document.querySelector('.Quickbutton')
let QuickStart1 = document.querySelector('.quickstart1')
let openQuick = document.querySelector('.yourCard')

openQuick.addEventListener('click', () => {
  Quickbutton.classList.remove('.hide')
})

let allContainer = document.querySelectorAll('.container')
allContainer.forEach((item) => {
  item.addEventListener('dragover', (event) => {
    event.preventDefault()
  })

  item.addEventListener('drop', (e) => {
    let card = draggingInfo.draggingElement
    card.id = draggingInfo.draggingId
    card.style.background = 'gray'
    let box = e.currentTarget
    box.appendChild(card)
    if (card == drop) {
      card.style.background = 'green'
    }
  })
})


// ////////////////To add new Contaiener to write own done project/////////////////////////

let PlusContainer = document.querySelector('#PlusContainer')
let FullMoveThisSection = document.querySelector('.MoveThisSection')
let NewFourContainer = document.querySelector('.NewFourContainer')
let AboveSmallContainer = document.querySelector('.tododoneContainer')
let MovefourSection = document.querySelector('.fourSection')
// for Small Conatainer
PlusContainer.addEventListener('click',(e)=>{
  MovefourSection.classList.add('fourSection1')
  PlusContainer.classList.add('move')
  FullMoveThisSection.classList.add('MoveThisSection1')
let SmallContainer = document.createElement('div')
SmallContainer.style.padding = "20px"
AboveSmallContainer.appendChild(SmallContainer)
console.log(AboveSmallContainer)
})



// for Large container
PlusContainer.addEventListener('click', (e) => {
let newContainer = document.createElement('div')
newContainer.classList.add('Ncontainer')
newContainer.style.background = "#f7f8f9"
  newContainer.style.width = "255px"
  NewFourContainer.style.display = "flex"
  NewFourContainer.style.gap  = "15px"
  newContainer.style.height = "200px"
  newContainer.style.padding = "10px"
  newContainer.style.borderRadius = "5px"
  newContainer.style.border = "1px solid red"
  let newbtn = document.createElement('button')
  newbtn.classList.add('btn thirdbtn hide')
  NewFourContainer.append(newContainer)

//  console.log(newContainer)
})


////////////////// TO HIDE BUTTON ASIDE //////////////////////////

let hidebutton = document.querySelector('.aside')

function func() {
  hidebutton.classList.toggle(".BColor");
}
console.log(hidebutton)




