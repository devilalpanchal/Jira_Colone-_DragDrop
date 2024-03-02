
let secondbtn = document.querySelector('.secondbtn')
let thirdbtn = document.querySelector('.thirdbtn')
let secondContainer = document.querySelector('.secondContainer')
let thirdContainer = document.querySelector('.thirdContainer')

secondContainer.addEventListener('mouseover', () => {
  secondbtn.classList.remove('hide')
  secondbtn.style.background = "rgb(222, 241, 243)"
  secondbtn.style.width = "100%"
  secondbtn.style.height = "27%"
  secondbtn.style.padding = "10px"
  secondbtn.style.textAlign = "start";
  secondbtn.style.paddingLeft = "20px";
  secondbtn.insertAfter(".child-card"); // sir se puchhna hai 
})
secondContainer.addEventListener('mouseout', () => {
  secondbtn.classList.add('hide')
})

thirdContainer.addEventListener('mouseover', () => {
  thirdbtn.classList.remove('hide')
  thirdbtn.style.background = "rgb(222, 241, 243)"
  thirdbtn.style.width = "100%"
  thirdbtn.style.padding = "10px"
  thirdbtn.style.height = "27%";
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
      card.style.marginTop = '10px'
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
PlusContainer.addEventListener('click', (e) => {
  MovefourSection.classList.add('fourSection1')
  PlusContainer.classList.add('move')
  let SmallContainer = document.createElement('div')
  SmallContainer.style.padding = "14px"
  let newinput = document.createElement('input')
  newinput.placeholder = 'create issue'
  newinput.style.outline = 'none'
  newinput.style.border = '1px solid #f7f8f9'
  newinput.style.backgroundColor = '#f7f8f9'
  newinput.style.width = '225px'
  newinput.style.fontSize = '12px'
  AboveSmallContainer.appendChild(SmallContainer)
  SmallContainer.append(newinput)
})


// for Large container
PlusContainer.addEventListener('click', (e) => {
  let newContainer = document.createElement('div')
  newContainer.classList.add('.Ncontainer')
  newContainer.style.background = "#f7f8f9"
  newContainer.style.width = "255px"
  NewFourContainer.style.display = "flex"
  NewFourContainer.style.gap = "15px"
  newContainer.style.height = "200px"
  newContainer.style.padding = "10px"
  newContainer.style.borderRadius = "5px"
  NewFourContainer.append(newContainer)
})

//************** */ For when we hover to new container*********************//

let newContainerbtn = document.querySelectorAll('.Ncontainer')

newContainerbtn.addEventListener('click', () => {
  let newbtn = document.createElement('button')
  newbtn.classList.add('btn')
  newbtn.textContent = '+ create issue';
  newContainerbtn.appendChild(newbtn)
  console.log(newbtn)
})


////////////////// TO HIDE BUTTON ASIDE //////////////////////////

function myFunction() {
  //************** */ for margin remove from 300px to 0px *******************
  let firstbar = document.querySelector('.firstbar')
let Others12 = document.querySelector('.Others12')
let thirdbar = document.querySelector('.thirdbar')
let tododoneContainer = document.querySelector('.tododoneContainer')
let root = document.querySelector('.root')

let ClickHide = document.getElementById('hide-btn')
let CenterContainer = document.querySelector('.CenterContainer')
CenterContainer.style.marginLeft ="250px"

  var x = document.getElementById("Aside1Container");
ClickHide.style.position ="absolute"
CenterContainer.style.position ="absolute"

  if (x.style.display === "none") {
    x.style.display = "block";
ClickHide.style.left ="225px"
CenterContainer.style.left ="10px"
firstbar.style.marginLeft = "30px"
Others12.style.marginLeft = "30px"
thirdbar.style.marginLeft = "30px"
tododoneContainer.style.marginLeft = "30px"
root.style.marginLeft = "30px"


  } else {
    x.style.display = "none";
ClickHide.style.left ="20px"
CenterContainer.style.marginLeft="40px"
firstbar.style.marginLeft = "30px"
Others12.style.marginLeft = "30px"
thirdbar.style.marginLeft = "30px"
tododoneContainer.style.marginLeft = "30px"
root.style.marginLeft = "30px"

  }
}


// All Belove Code is Not working

// For SETTING BUTTON
// let startBtn = document.getElementById('DpImage')

// let EmailSetup = document.querySelector('.EmailSetup')

// var span = document.getElementsByClassName("close")[0];

// startBtn.addEventListener('click',()=>{
//   setTimeout(() => {
//     EmailSetup.style.display = "block"
//   }, 100);

// })
// // console.log(EmailSetup);

// span.onclick = function() {
//   EmailSetup.style.display = "none";
// }

// window.onclick = function(event) {
  
//   if (event.target == EmailSetup) {
//     EmailSetup.style.display = "none"
    
//   }
// }


document.addEventListener('DOMContentLoaded', function () {
  let startBtn = document.getElementById('DpImage');
  let EmailSetup = document.querySelector('.EmailSetup');
  let span = document.querySelector(".close");

  startBtn.addEventListener('click', () => {
    e.preventDefault()
    setTimeout(() => {
      EmailSetup.style.display = "block";
    }, 100);
  });

  span.addEventListener('click', () => {
    EmailSetup.style.display = "none";
  });

  window.addEventListener('click', (event) => {
    if (event.target == EmailSetup) {
      EmailSetup.style.display = "none";
    }
  });
});