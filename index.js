const loadingPage = document.querySelector('.loadingPage')
const speaker = document.querySelector('.speaker')
const speakerImgMute = document.getElementById('speakerImgMute')
const speakerImgUp = document.getElementById('speakerImgUp')
const audio = document.querySelector('.audio')

window.addEventListener('load', function(){
    loadingPage.classList.add('scale-down-center')
})
speakerImgMute.addEventListener('click', function(){
    audio.play()
    speakerImgMute.style.display = "none"
    speakerImgUp.style.display = "block"
})
speakerImgUp.addEventListener('click', function(){
    audio.pause()
    speakerImgMute.style.display = "block"
    speakerImgUp.style.display = "none"
})