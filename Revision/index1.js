// let findSong = (event) => {
//    let searchSong = event.target.value
    
//     fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem', {
//         method: "GET"
//     })
//         .then(response => response.json())
//         .then(songs=> {
    
//             let songsList = songs.data
//             console.log(songsList)
    
//             let row = document.querySelector(".row")
//             row.innerHTML = ""

//              songsList.filter(song => song.title.toLowerCase().includes(searchSong.toLowerCase()))
//              .forEach(song => {
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

            // row.innerHTML = songsList.filter(song => song.title.toLowerCase().includes(searchSong.toLowerCase()))
            // .map(song => 
              
            //    `<div class="col-3">
            //    <div class="card">
            
            //         <img src=${song.album.cover_small} class="card-img-top" alt="..." />
            //         <div class="card-body">
            //             <h5 class="card-title">${song.title}</h5>
            //             <a href="#" class="btn btn-primary">Go somewhere</a>
            //         </div>
            //         </div>
            //         </div>`).join("");

        
//         }).catch(err => console.error(err));

// }
let loadedImages = []


let searchHistory = window.localStorage.getItem("query")
let defaultartist = searchHistory? searchHistory: "pasuma"

const loadSongs = (query = defaultartist) => {
    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + query, {
        method: "GET"
    })
        .then(response => response.json())
        .then(songs=> {
    
            let songsList = songs.data
            // console.log(songsList)

            loadedImages = [...songsList]
    
            let row = document.querySelector(".row")
            row.innerHTML = ""
             songsList.forEach(song => {
                let col = document.createElement("div")
                col.classList.add("col-3")
                col.innerHTML = `<div class="card">
            
                    <img src=${song.album.cover_small} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">${song.title}</h5>
                        <a href="./artist.html?songID=${song.album.id}" class="btn btn-primary">${song.artist.name}</a>
                    </div>
                    </div>`
    
                    row.appendChild(col)

                    let h1 = document.querySelector("h1")
                    h1.innerHTML = song.artist.name
                
            });
        //    row.innerHTML = songsList.
        //     map(song => 
              
        //        `<div class="col-3">
        //        <div class="card">
            
        //             <img src=${song.album.cover_small} class="card-img-top" alt="..." />
        //             <div class="card-body">
        //                 <h5 class="card-title">${song.title}</h5>
        //                 <a href="#" class="btn btn-primary">Go somewhere</a>
        //             </div>
        //             </div>
        //             </div>`).join("");


             }).catch(err => console.error(err));

}

let inputLoad = event => {

    defaultartist = event.target.value

    window.localStorage.setItem("query", defaultartist)

    loadSongs()


// -------This is if i want to filter in the already artist selected because I pushed to a row----------
    //  let row = document.querySelector(".row")

    //         row.innerHTML = ""
    //          loadedImages.filter(song => song.title.toLowerCase().includes(searchvalue)) 
    //          .forEach(song => {
    //             let col = document.createElement("div")
    //             col.classList.add("col-3")
    //             col.innerHTML = `<div class="card">
            
    //                 <img src=${song.album.cover_small} class="card-img-top" alt="..." />
    //                 <div class="card-body">
    //                     <h5 class="card-title">${song.title}</h5>
    //                     <a href="./artist.html?songID=${song.album.id}" class="btn btn-primary">${song.artist.name}</a>
    //                 </div>
    //                 </div>`
    
    //                 row.appendChild(col)
                
    //         }).catch(err => console.error(err));

            
}

    
           


window.onload = () => {
    loadSongs()
   
    
}

// const arrOfPeople = [
//     {name: "Ahmed", age: 50, salary: 360},
//     {name: "Adam", age: 20, salary: 30},
//     {name: "Shola", age: 30, salary: 500},
//     {name: "bOLU", age: 160, salary: 300}
// ]

// let arr = arrOfPeople.map(obj => obj.age)
// console.log(arr)


// let agba = arrOfPeople.filter(obj => obj.age > 60)
// console.log(agba)



// let arrangeByAge = arrOfPeople.sort((a,b) => {
//     if(a.age < b.age){
//         return -1
//     } else {
//         return 1
//     }
// })
// console.log(arrangeByAge)


// console.log(arrOfPeople.reduce((acc, curr) => acc.concat(curr.age), []))