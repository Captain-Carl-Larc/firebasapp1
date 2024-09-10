const saveBtn=document.getElementById("save-btn")
const movieInputEl=document.getElementById("movie-input")
const movieDisplayEl=document.getElementById("movie-ul")
const errorP=document.getElementById("error-p")
let moviesHolder=""
let myMovies=["don","patty"]
function saveMovie(){
    if (movieInputEl.value !=="") {
        const movie=movieInputEl.value
        myMovies.push(movie)
        movieInputEl.value=""   
        console.log(myMovies) 
        render(myMovies)
    }

    
}

function render(arr){
    if(myMovies.length>0){
        
        for (let i = 0; i < arr.length; i++) {
            moviesHolder +=`<li>${arr[i]}</li>`
            
        }
        movieDisplayEl.innerHTML=moviesHolder
    }else{
        errorP.classList.remove("hidden")
    }

}

saveBtn.addEventListener("click",saveMovie)






