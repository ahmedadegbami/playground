function addNewmember(event) {
    event.preventDefault();
    let inputNode = document.getElementById("member-Input").value;
    let ulwaitingNode = document.getElementById("waiting-List");
    let listNode = document.createElement("li");
    listNode.classList.add("list-group-item");
    listNode.innerHTML = inputNode;
    ulwaitingNode.appendChild(listNode);
}

window.onload = function () {
    createTeams();
}


let teamNumber = document.getElementById("teams-number");
let rowNode = document.getElementById("teams-row");

function createTeams(){
    
    for (let i=0; i< teamNumber.innerHTML; i++){
        rowNode.innerHTML += `<div class="col-3">
          <div class="card bg-primary">
            <div class="card-header">Team ${i + 1}</div>
            <ul class="list-group list-group-flush"></ul>
          </div>
        </div>`
        
    }

}