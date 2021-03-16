var IconArray = ["Icon1", "Icon2", "Icon3", "Icon4", "Icon5", "Icon6", "Icon7", "Icon8"];
var EnemyCharacterArray = ["Enemy1", "Enemy2", "Enemy3", "Enemy4"];

var Bandit = {TName: "Bandit", TLevel: 2};
var Golem = {TName: "Golem", TLevel: 3};
var Pirate = {TName: "Pirate", TLevel: 6};
var Witch = {TName: "Witch", TLevel: 8};
var EnemytestArray = [Bandit, Golem, Pirate, Witch];

function FileArrayTest(TextFile){
      //create new XMLHttpRequest
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var FileArray = this.responseText;
        }
      };
      xhttp.open("GET", TextFile, true);
      xhttp.send();
      return FileArray;
}

function BattleScreenFill(){
    var EnemiesToFight = [];
    while (EnemiesToFight.length < 4){
        var SelectedEnemy = Math.floor(Math.random() * (EnemytestArray.length - 1)); 
        console.log(SelectedEnemy);
        console.log(EnemytestArray[Golem.TName]);
        EnemiesToFight.push(EnemytestArray[SelectedEnemy]);
    }
    console.log(EnemiesToFight.length);
    console.log(EnemiesToFight);
    document.getElementById("Icon1").innerHTML = "<img src='./Images/Placeholder.png'>";
    FileArrayTest("./DataFiles/EnemyData.txt");
    console.log(FileArray);
}

