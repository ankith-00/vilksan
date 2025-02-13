
// MENU CSS
const menuButton = document.querySelector('.menu-button');
const closeButton = document.querySelector('.close-button');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

function openSidebar() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

menuButton.addEventListener('click', openSidebar);
closeButton.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);



// WEB BROSWER MESSAGES
const originalTitle = document.title;

// Messages to show when user switches tabs
const messages = [
    "🔥 Come back !",
    "🔥 We miss you !",
    "🎁 Don't miss out on deals!"
];

// Generating randome number
function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

// Check page status
let isPageActive = true;

// Function to update title
function updateTitle() {
    if (isPageActive) {
        document.title = originalTitle;
    } else {
        document.title = getRandomMessage();
    }
}

// Listen for visibility change
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        isPageActive = false;
        updateTitle();
    } else {
        isPageActive = true;
        updateTitle();
    }
});


let messageInterval;
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        messageInterval = setInterval(() => {
            document.title = getRandomMessage();
        },1000); 
    } else {
        clearInterval(messageInterval);
        document.title = originalTitle;
    }
});



// POPUP BOX
let modal = document.getElementById('model')

// NOTIFICATION MODAL 
window.onload = ()=>{
    setTimeout(()=>{
        modal.style.display = 'flex'
    }, 6000)
}

// CLOSE MODAL
let closebtn = document.getElementById('close')
closebtn.onclick = ()=>{
    modal.style.display = 'none'
}



// GOOGLE EMAIL SENDING
const scriptURL = ''
const form = document.querySelector('#form')
const btn = document.querySelector('#submit')


form.addEventListener('submit', e => {
  e.preventDefault()
  btn.disabled = true
  btn.innerHTML = "Please Wait."

  console.log(form)
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => { 
          btn.disabled = false
          btn.innerHTML = "Submit"
          form.reset();
          alert('Thanks YOU !', response) })
    .catch(error => {
                 btn.disabled = false
  btn.innerHTML = "Submit"
        alert('Error!', error.message)})
})


