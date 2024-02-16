var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

let input = document.querySelector('input')
let button = document.querySelector('.search')
let buttonMore = document.querySelector('.more')
let preContainer = document.querySelector('.container')
let container = document.querySelector('.swiper-wrapper')
let n=1

const options = {method: 'GET', headers: {accept: 'application/json'}};

function searchMovie(n) {
fetch(`https://api.themoviedb.org/3/search/movie?api_key=6631e5f1dc96088e0d26b86da29b5b6a&include_adult=false&page=${n}&language=en-US&query=${input.value}`, options)
  .then(data => data.json())
  .then(data => {

    console.log(data)
    
    for (let i = 0; i < data.results.length; i++) {
        if(data.results[i].poster_path == null) {
            container.innerHTML += `<div class="swiper-slide"><img src="https://image.tmdb.org/t/p/w200/AhtNrNZ3Gkfvb6WfedQdB9kLy4u.jpg" alt=""><h1>${data.results[i].title}</h1></div>`
            // <p>${data.results[i].release_date}</p>
        } else {  
        container.innerHTML += `<div class="swiper-slide"><img src="https://image.tmdb.org/t/p/w200${data.results[i].poster_path}" alt=""><h1>${data.results[i].title}</h1></div>`
        // <p>${data.results[i].release_date}</p>
        }
      }
})
  .catch(err => console.error(err));
}

button.addEventListener('click', function () {
    container.innerHTML =""
    searchMovie(n)
})
input.addEventListener("keyup", function(event) {
   
    if (event.key === "Enter") {
        button.click();
    }
});

buttonMore.addEventListener('click', function () {
    searchMovie(n++)
});

// function integratorTheWorldCreator(test) {
//     preContainer.innerHTML += `
//     <div class="swiper mySwiper">

//         <div class="swiper-wrapper">
//         ${test}
//         </div>  
//         <div class="swiper-pagination"></div> 
//     </div>       
//     `
// }

// buttonMore.addEventListener('click', function () {
//     integratorTheWorldCreator(searchMovie(n++))
// });

// button.
//   fetch('https://api.themoviedb.org/3/movie/157336?api_key=6631e5f1dc96088e0d26b86da29b5b6a?language=fr-BE'