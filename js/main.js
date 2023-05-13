const hertaStop = './img/hertastop.png'
const hertaSpin = './img/hertaSpin.gif'

const kurukuru = './audio/kurukuru.mp3'
const kururin = './audio/kururin.mp3'

document.addEventListener("click", spinImage)

function spinImage() {
  document.removeEventListener("click", spinImage)
  document.getElementById('hertaImage').src = hertaSpin
  document.getElementById('hint').style.transform = "translateY(-72px)";
  document.getElementById('catchprase').style.transform = "translateY(-72px)";

  randomAudio()
  sideEntries()

  setTimeout(() => {
    document.getElementById('hertaImage').src = hertaStop
  }, 900)

  setTimeout(() => {
    document.addEventListener("click", spinImage)
    document.getElementById('hint').style.transform = "translateY(0)";
    document.getElementById('catchprase').style.transform = "translateY(0)";
  }, 1200)
}

function sideEntries() {
  document.getElementById('hertaImageLeft').classList.add('hertaEntryLeft')
  document.getElementById('hertaImageRight').classList.add('hertaEntryRight')

  setTimeout(() => {
    document.getElementById('hertaImageLeft').classList.remove('hertaEntryLeft')
    document.getElementById('hertaImageRight').classList.remove('hertaEntryRight')
  }, 1200)

}

function randomAudio() {
  let hertaAudio = document.getElementById('hertaAudio')
  let x = Math.random() * 10;

  if (Math.floor(x) % 2 == 0) {
    hertaAudio.src = kurukuru
    document.getElementById('catchprase').innerHTML = "Kuru-kuru~"
    hertaAudio.play()
  } else {
    hertaAudio.src = kururin
    document.getElementById('catchprase').innerHTML = "Kururin~"
    hertaAudio.play()
  }
}