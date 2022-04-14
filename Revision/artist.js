
window.onload = () => {

    let param = new URLSearchParams(window.location.search)

    let ID = param.get("songID")

    console.log(ID)

    fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + ID)
    .then(resp => resp.json())
    .then(data => {console.log(data)

    console.log(data.cover)

    let hold = document.querySelector(".holder")
    let img = document.createElement("img")
    img.className = "image-fluid"
    img.src = data.cover_big
    
    let h4 = document.createElement("h4")
    h4.innerText = "FireBoy DML"
    hold.appendChild(img)
    hold.appendChild(h4)


    

    
    
    }).catch(err => console.error(err))

}
