
const startBtn1 = document.getElementById('notificationsss')

const NotificationContainer = document.querySelector('.NotificationContainer')

const closenotifications = document.querySelector('.closenotifications')


function addNotifications(){
    NotificationContainer.classList.toggle('hide')
}

startBtn1.addEventListener('click',addNotifications)
closenotifications.addEventListener('click',addNotifications)
console.log(addNotifications);

document.querySelector('#heroContainer').addEventListener('click',()=>{
    NotificationContainer.classList.add('hide')
})