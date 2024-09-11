const movieInput=document.getElementById("movie")
const saveBtn=document.getElementById("save")
const deleteBtn=document.getElementById("delete")
const displayUl=document.getElementById("display-ul")
const erroP=document.getElementById("error-p")

let moviesFromLocStorage=JSON.parse(localStorage.getItem("myMovies"))
let movies=[]

//console.log("Movies from local storage at code start "+localStorage.getItem("myMovies"))

if (moviesFromLocStorage) {
    movies=moviesFromLocStorage
    renderMovies(movies)
}else{
    document.getElementById("no-movie-error").classList.remove("hidden")
}

saveBtn.addEventListener("click",function(){
    const movieTitle=movieInput.value
    if (movieTitle) {
        document.getElementById("no-movie-error").classList.add("hidden")
        //erroP.classList.add("hidden")
        movies.push(movieTitle)
        movieInput.value=""
        localStorage.setItem("myMovies",JSON.stringify(movies))
        renderMovies(movies)
    }else{
        erroP.classList.remove("hidden")
        setTimeout(function() {
            //alert("3 seconds are over!")
            erroP.classList.add("hidden")
          }, 2000)
        
    }
})

deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    renderMovies(movies)
    window.location.reload();
})
renderMovies(movies) 

function renderMovies(arr) {
    let MovieListItems = ""
    for (let i = 0; i < arr.length; i++) {
        MovieListItems += `
            <li>
                <a target='_blank' href='${arr[i]}'>
                    ${arr[i]}
                </a>
            </li>
        `
    }
    displayUl.innerHTML = MovieListItems 
}

