let search = document.querySelector('.search')
let buttonBest = document.querySelector('.best')
let buttonPopular = document.querySelector('.popular')
let buttonActual = document.querySelector('.actual')
let buttonTonight = document.querySelector('.tonight')
let container = document.querySelector('.container')
let img = document.querySelectorAll('.img')
let element = document.querySelector('.element')
const options = {method: 'GET', headers: {accept: 'application/json'}};
let span
let modal

// let imgToClick = document.querySelector('')
function searchSerie(category) {
  fetch(`https://api.themoviedb.org/3/tv/${category}?api_key=212d3c48270322d3806885b419cf1b4a&page=1&language=en-US`, options)
    .then(data => data.json())
    .then(data => {
  
      console.log(data)
      
      for (let i = 0; i < data.results.length; i++) {
          if(data.results[i].poster_path == null) {
              container.innerHTML += `<div class="grid-box"><div class="img-box"><img class="img" src="https://image.tmdb.org/t/p/w300/AhtNrNZ3Gkfvb6WfedQdB9kLy4u.jpg" alt=""><p class="element">${data.results[i].vote_average} / 10 </p></div><h1>${data.results[i].name}</h1></div>`
              // <p>${data.results[i].release_date}</p>
          } else {  
          container.innerHTML += `<div class="grid-box"><div class="img-box"><img class="img" src="https://image.tmdb.org/t/p/w300${data.results[i].poster_path}" alt=""><p class="element">${data.results[i].vote_average} / 10 </p></div><h1>${data.results[i].name}</h1> 
            <div id="myModal" class="modal">
              <div class="modal-content">
                <span class="close">&times;</span>
                <div class="flex-box"><img class="img" src="https://image.tmdb.org/t/p/w300${data.results[i].poster_path}" alt=""></div>
                <div class="flex-box">
                  <h1>${data.results[i].name}</h1>
                  <p>${data.results[i].overview}</p>
                  <p>Popularité : ${data.results[i].vote_average} / 10</p>
                  
                </div>
              </div>
            </div>  
          </div>`
          // <p>${data.results[i].release_date}</p>
          }
        }
        modal = document.querySelector('.modal')
        span = document.querySelector('.close');
        span.onclick = function() {
          modal.style.display = "none";
        }
  })
    .catch(err => console.error(err));
  }

  




let gridBox = document.querySelectorAll('.grid-box')



  container.addEventListener('click', function(event){
    if (event.target.closest('.grid-box').classList.contains('grid-box')) {
      if (container.querySelector('.modal').classList.contains('modal-active')) {
        container.querySelector('.modal').classList.remove('modal-active') 
    }
   
    container.querySelector('.modal').classList.add('modal-active')
    }
  })


search.addEventListener('click', (event)=> {

  if (event.target.classList.contains('button')) {
     
      if (event.target.classList.contains('active')) {
          event.target.classList.remove('active') 
          
      } else {
          
          if (search.querySelector('.active')) {
              search.querySelector('.active').classList.remove('active') 
          }
         
          event.target.classList.add('active')
      }
  }
  })


search.addEventListener('click', function(event){
  
    if(event.target.hasAttribute('data-attribute')){
      
      container.innerHTML = ''
      searchSerie(event.target.getAttribute('data-attribute'))


      // if(event.target.getAttribute == "all") {
      //   displayRobots()

      // } else {
      //   displayRobots(event.target.getAttribute('data-gender'))
      // }
    }
})







window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// element.forEach((el) => {
//   img.addEventListener("mouseover", (img) => {
//     el.target.classList.add("appear");
//   });
// })









// const options = {method: 'GET', headers: {accept: 'application/json'}};

// function searchSerie(type) {
//   fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=212d3c48270322d3806885b419cf1b4a&page=1&language=en-US`, options)
//     .then(data => data.json())
//     .then(data => {
  
//       console.log(data)
      
//       for (let i = 0; i < data.results.length; i++) {
//           if(data.results[i].poster_path == null) {
//               container.innerHTML += `<div class="grid-box"><img src="https://image.tmdb.org/t/p/w200/AhtNrNZ3Gkfvb6WfedQdB9kLy4u.jpg" alt=""><h1>${data.results[i].title}</h1></div>`
//               // <p>${data.results[i].release_date}</p>
//           } else {  
//           container.innerHTML += `<div class="grid-box"><img src="https://image.tmdb.org/t/p/w200${data.results[i].poster_path}" alt=""><h1>${data.results[i].title}</h1></div>`
//           // <p>${data.results[i].release_date}</p>
//           }
//         }
//   })
//     .catch(err => console.error(err));
//   }

// button.addEventListener('click', function () {
//     container.innerHTML =""
//     searchMovie(n)
// })


// input.addEventListener("keyup", function(event) {
   
//     if (event.key === "Enter") {
//         button.click();
//     }
// });

// buttonMore.addEventListener('click', function () {
//     searchMovie(n++)
// });

