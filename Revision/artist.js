
window.onload = () => {

    let param = new URLSearchParams(window.location.search)

    let ID = param.get("songID")

    console.log(ID)

    fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + ID)
    .then(resp => resp.json())
    .then(data => console.log(data)
    
    
    ).catch(err => console.error(err))

}
