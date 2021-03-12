var IconArray = {Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, Icon8};
var EnemyCharacterArray = {Enemy1, Enemy2, Enemy3, Enemy4};

var EnemytestArray = {Bandit, Golem, Pirate, Witch};
var Bandit = ["Bandit", "lvl2"];
var Golem = ["Golem", "lvl3"];
var Pirate = ["Pirate", "lvl6"];
var Witch = ["Witch", "lvl8"];

function BattleScreenFill(){
    var EnemiesToFight = {};
    while (EnemiesToFight.length < 4){
        var SelectedEnemy = Math.random(1, EnemytestArray.length + 1);
    }
    console.log("Somehow,.....it worked");
    document.getElementById("Icon1").innerHTML = "<img src='./Images/Placeholder.png'>"
}