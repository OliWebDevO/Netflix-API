// Déclaration de variables
const baseUrl = "https://api.themoviedb.org/3/tv/"
const apiKey = "api_key=6631e5f1dc96088e0d26b86da29b5b6a"
const boutons = document.querySelector('.buttons')
const wrapper = document.querySelector('.wrapper')
const popup = document.querySelector('.popup')


// Fonction principale avec le Fetch
function displayTvShowz(tvArg = "top_rated") {
    fetch(`${baseUrl}${tvArg}?${apiKey}`)
    .then(response => response.json())
    .then(data => {
      // console.log(data)
      data.results.forEach(function(singleResult, index){
        wrapper.innerHTML += `
        <div class="tv-show" data-id="${index}">
          <h2>${singleResult.name}</h2>
          <div class="tv-show__img">
            <img src="https://image.tmdb.org/t/p/w500${singleResult.poster_path}">
            <div class="note">
            ${(singleResult.vote_average).toFixed(2)}/10
            </div>
          </div>
        </div>
        `
      })
      // Délégation d'event sur wrapper pour catcher un click sur une série
      wrapper.addEventListener('click', function(event){
        if(event.target.closest('.tv-show').classList.contains('tv-show')) {
          popup.innerHTML = ""
          let myTvShowId = event.target.closest('.tv-show').dataset.id
          popup.innerHTML = `
          <div class="popup__img">
            <img src="https://image.tmdb.org/t/p/w500${data.results[myTvShowId].poster_path}">
          </div>
          <div class="popup__txt">
            <h3>${data.results[myTvShowId].name}</h3>
            <p>${data.results[myTvShowId].overview}</p>
          </div>
          <div class="close" title="fermer">❌</div>
          `
          popup.classList.add('active')
        }
      })
      // Délégation d'event sur popup pour aller chercher la ❌
      popup.addEventListener("click", function(event) {
        if (event.target.classList.contains('close')) {
          event.target.closest('.popup').classList.remove("active")
        }
      })
    })
    .catch(error => {console.log("Erreur lors de la récup des données :", error)
  })
}

// Délégation d'event sur le parent des boutons pour catch leur data-tv
boutons.addEventListener('click', function(event) {
  if (event.target.hasAttribute('data-tv')){
    wrapper.innerHTML = ""
    event.target.parentElement.querySelector('.active').classList.remove("active")
    event.target.classList.add('active')
    displayTvShowz(event.target.dataset.tv) // getAttribute('data-tv')
  }
})

// On lance la fonction une fois dès le chargement de la page
displayTvShowz()