export function getRandomImg() {
  const imgspace = document.getElementById('randomImage')
  imgspace.innerHTML = ''

  const xmlReq = new XMLHttpRequest()
  // eslint-disable-next-line func-names
  xmlReq.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText)
      if (response.status === 'success') {
        const img = document.createElement('img')
        img.id = 'loadedImage'
        img.src = response.message
        imgspace.append(img)
      }
    }
  }
  xmlReq.open('GET', 'https://dog.ceo/api/breeds/image/random')
  xmlReq.send()
}
