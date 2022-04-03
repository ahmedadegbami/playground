
let inputNode = document.getElementById("member-Input");
let ulwaitingNode = document.getElementById("waiting-List");

let teamNumber = document.getElementById("teams-number");
let rowNode = document.getElementById("teams-row");


function addNewmember(event) {
    event.preventDefault();
    
    
    let listNode = document.createElement("li");
    listNode.classList.add("list-group-item");
    listNode.innerHTML = inputNode.value;
    ulwaitingNode.appendChild(listNode);
}

window.onload = function () {
    createTeams();
}




function createTeams(){
    
    for (let i=0; i< teamNumber.innerHTML; i++){
        rowNode.innerHTML += `<div class="col-3 ">
          <div class="card bg-primary">
            <div class="card-header">Team ${i + 1}</div>
            <ul  class="list-group list-group-flush newlist"></ul>
          </div>
        </div>`
        
    }

}

let team = document.getElementById("teams-number");
function addteam() {
    
    team.innerHTML = parseInt(team.innerHTML) + 1;
    rowNode.innerHTML += `<div class="col-3 ">
          <div class="card bg-primary">
            <div class="card-header">Team ${team.innerHTML}</div>
            <ul  class="list-group list-group-flush newlist"></ul>
          </div>
        </div>`
        }


function removeteam() { 
  let teamsList = document.querySelectorAll(".newlist");
  let lastTeam = teamsList[teamsList.length - 1];
  let teamMembers = lastTeam.querySelectorAll("li");
  for (let i = 0; i < teamMembers.length; i++) {
    let listNode = document.createElement("li");
    listNode.classList.add("list-group-item");
    listNode.innerHTML = teamMembers[i].innerHTML;
    ulwaitingNode.appendChild(listNode);
  }



  team.innerHTML = parseInt(team.innerHTML) - 1;
  rowNode.removeChild(rowNode.lastChild);
}


function assign() {
  for (let i = 0; i < 1; i++) {
  let person = ulwaitingNode.children[0];
  if(!person) return

  let teams = document.querySelectorAll(".newlist");


  let randomTeam = Math.floor(Math.random() * teams.length);

  teams[randomTeam].appendChild(person);
  
}
}