
// window.onload = () => {
//     fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem', {
//         method: "GET"
//     })
//         .then(response => response.json())
//         .then(songs=> {
    
//             let songsList = songs.data
//             console.log(songsList)
    
//             let row = document.querySelector(".row")
            
    
//             songsList.forEach(song => {
//                 let col = document.createElement("div")
//                 col.classList.add("col-3")
//                 col.innerHTML = `<div class="card">
            
//                     <img src=${song.album.cover_small} class="card-img-top" alt="..." />
//                     <div class="card-body">
//                         <h5 class="card-title">${song.title}</h5>
//                         <a href="#" class="btn btn-primary">Go somewhere</a>
//                     </div>
//                     </div>`
    
//                     row.appendChild(col)
                
//             });
        
        
//         }).catch(err => console.error(err));


// }


const arrOfPeople = [
    {name: "Ahmed", age: 50, salary: 360},
    {name: "Adam", age: 20, salary: 30},
    {name: "Shola", age: 30, salary: 500},
    {name: "bOLU", age: 160, salary: 300}
]

let arr = arrOfPeople.map(obj => obj.age)
console.log(arr)