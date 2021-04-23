// *selecting the elements
const toggleSwitch = document.querySelector('#switch')
const icon = document.querySelector('#status-icon')
const title = document.querySelector('#title')
const imgMain = document.querySelector('#img-main')
const mainText = document.querySelector('#main-text')
const imgStudy = document.querySelector('#img-study')
const imgGame = document.querySelector('#img-game')
const imgYoga = document.querySelector('#img-yoga')
const nav = document.querySelector('#nav')

// *functions
function imageColor(color) {
  imgMain.src = `./media/svg/theme-${color}.svg`
  imgStudy.src = `./media/svg/study-${color}.svg`
  imgGame.src = `./media/svg/gaming-${color}.svg`
  imgYoga.src = `./media/svg/yoga-${color}.svg`
}

// *dark mode
function darkMode() {
  icon.classList.replace('fa-sun', 'fa-moon')
  title.innerHTML = 'Dark Mode'
  mainText.innerHTML = 'Dark Mode'
  imageColor('dark')
}
// *light mode
function lightMode() {
  icon.classList.replace('fa-moon', 'fa-sun')
  title.innerHTML = 'Light Mode'
  mainText.innerHTML = 'Light Mode'
  imageColor('light')
}
// *switching theme
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
    darkMode()
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
    localStorage.setItem('theme', 'light')
    lightMode()
  }
}

// *EventListeners
toggleSwitch.addEventListener('change', switchTheme)

// *nav animations
window.onscroll = () => {
  if (window.pageYOffset > 0) {
    nav.classList.add('scrolled')
  } else {
    nav.classList.remove('scrolled')
  }
}
// *Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme')
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme)

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true
    darkMode()
  }
}
