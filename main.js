let ATeam = document.getElementById("a-team-score");
let BTeam = document.getElementById("b-team-score");
let ATeamName = document.getElementById("ATeamName");
let BTeamName = document.getElementById("BTeamName");

let ATeamScore = 0;
let BTeamScore = 0;

function ANewTeamScore(){
    const ATeamNewScore = +prompt("Yeni Takım Skorunu Girin..");
    if(ATeamNewScore < 100){
        ATeam.innerHTML = ATeamNewScore;
    }else{
        alert("Lütfen Geçerli bir sayı girin.")
    }
}

function BNewTeamScore(){
    const BTeamNewScore = +prompt("Yeni Takım Skorunu Girin..")
    if(BNewTeamScore < 100){
        BTeam.innerHTML = BTeamNewScore;
    }else{
        alert("Lütfen Geçerli bir sayı girin.")
    }
}

function ChangeATeamName(){
    const ATeamNewName = prompt("Yeni Takım İsmi Girin..");
    ATeamName.innerHTML = ATeamNewName;
}

function ChangeBTeamName(){
    const BTeamNewName = prompt("Yeni Takım İsmi Girin..")
    BTeamName.innerHTML = BTeamNewName;
}

function ATeamGoal() {
    ATeamScore += 1;
    ATeam.innerHTML = "" + ATeamScore;
}

function BTeamGoal(){
    BTeamScore += 1;
    BTeam.innerHTML = "" + BTeamScore;
}

function ATeamGoalCancel(){
    ATeamScore -= 1;
    ATeam.innerHTML = "" + ATeamScore;
}

function BTeamGoalCancel(){
    BTeamScore -= 1;
    BTeam.innerHTML = "" + BTeamScore;
}

