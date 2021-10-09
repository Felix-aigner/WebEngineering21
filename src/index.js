import '@/styles/index.scss'
import { addPictureLeft, addPictureRight } from 'js/content'
import { getRandomImg } from 'js/httpService'

function validEmail(email) {
  // eslint-disable-next-line
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

window.addEventListener('load', () => {
  if (document.getElementById('navbar') != null) {
    const navbar = document.getElementById('navbar')

    const home = document.createElement('a')
    home.href = 'index.html'
    home.innerHTML = 'Home'

    const content = document.createElement('a')
    content.href = 'content.html'
    content.innerHTML = 'Goodest Boys'

    const about = document.createElement('a')
    about.href = 'about.html'
    about.innerHTML = 'About'

    navbar.append(home, content, about)
  }

  if (document.getElementById('content') != null) {
    const contentIntro = document.getElementById('contentIntro')
    contentIntro.innerHTML = `It is on you to decide if this Boy is a good Boy 
    or in fact a very good Boy`

    getRandomImg()

    // "good boy button"
    const leftButton = document.createElement('button')
    leftButton.innerHTML = 'good Boy'
    leftButton.addEventListener('click', addPictureLeft)

    const leftButtonDiv = document.getElementById('leftButton')
    leftButtonDiv.append(leftButton)

    // "very good boy"
    const rightbutton = document.createElement('button')
    rightbutton.innerHTML = 'goodest Boy'
    rightbutton.addEventListener('click', addPictureRight)

    const rightButtonDiv = document.getElementById('rightButton')
    rightButtonDiv.append(rightbutton)

    const leftTitle = document.createElement('h3')
    leftTitle.innerHTML = 'Good Boys'
    document.getElementById('leftDecisionTitle').append(leftTitle)

    const rightTitle = document.createElement('h3')
    rightTitle.innerHTML = 'Very Good Boys'
    document.getElementById('rightDecisionTitle').append(rightTitle)
  }

  if (document.getElementById('about') != null) {
    const username = document.getElementById('username')
    username.onkeyup = () => {
      if (username.value.length > 16 || username.value.length === 0) {
        username.removeAttribute('class')
        username.setAttribute('class', 'error')
      } else {
        username.removeAttribute('class')
        username.setAttribute('class', 'ready')
      }
    }
    const age = document.getElementById('age')
    age.onkeyup = () => {
      // eslint-disable-next-line no-restricted-globals
      if (isNaN(age.value)) {
        age.removeAttribute('class')
        age.setAttribute('class', 'error')
      } else {
        age.removeAttribute('class')
        age.setAttribute('class', 'ready')
      }
    }
    const email = document.getElementById('email')
    email.onkeyup = () => {
      if (validEmail(email.value)) {
        email.removeAttribute('class')
        email.setAttribute('class', 'ready')
      } else {
        email.removeAttribute('class')
        email.setAttribute('class', 'error')
      }
    }
  }
})
