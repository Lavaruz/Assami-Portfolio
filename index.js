const loadingPage = document.querySelector('.loadingPage')
const speaker = document.querySelector('.speaker')
const speakerImgMute = document.getElementById('speakerImgMute')
const speakerImgUp = document.getElementById('speakerImgUp')
const audio = document.querySelector('.audio')

window.addEventListener('load', function () {
  loadingPage.classList.add('scale-down-center')
})
speakerImgMute.addEventListener('click', function () {
  audio.play()
  speakerImgMute.style.display = "none"
  speakerImgUp.style.display = "block"
})
speakerImgUp.addEventListener('click', function () {
  audio.pause()
  speakerImgMute.style.display = "block"
  speakerImgUp.style.display = "none"
})

// Clicker

var coll = document.querySelectorAll('.card');
var i;
var x = window.matchMedia('(max-width:970px)')
const werehouse = document.querySelector('.portfolio-heading h1')

if (x.matches) {
  werehouse.textContent = "- Werehouse -"
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      var content = this.lastElementChild.lastElementChild
      this.classList.toggle("active");
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
} else {
  werehouse.textContent = "Werehouse"
}

window.addEventListener('resize', function(){
  if (x.matches) {
    werehouse.textContent = "- Werehouse -"
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        var content = this.lastElementChild.lastElementChild
        this.classList.toggle("active");
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
  } else {
    werehouse.textContent = "Werehouse"
  }
})