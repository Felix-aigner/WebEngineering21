import { getRandomImg } from './httpService'

const removeImage = (event) => {
  const clickedElem = event.target
  clickedElem.remove()
}

export function addPictureLeft() {
  const randImg = document.getElementById('loadedImage')
  if (randImg.src != null) {
    const list = document.getElementById('leftDecisionImages')
    const element = document.createElement('img')
    element.id = randImg.src
    element.src = randImg.src
    element.onclick = removeImage
    list.append(element)
    getRandomImg()
  }
}
export function addPictureRight() {
  const randImg = document.getElementById('loadedImage')
  if (randImg.src != null) {
    const list = document.getElementById('rightDecisionImages')
    const element = document.createElement('img')
    element.id = randImg.src
    element.src = randImg.src
    element.onclick = removeImage
    list.append(element)
    getRandomImg()
  }
}
