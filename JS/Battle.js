var IconArray = ["Icon1", "Icon2", "Icon3", "Icon4", "Icon5", "Icon6", "Icon7", "Icon8"];
var EnemyCharacterArray = ["Enemy1", "Enemy2", "Enemy3", "Enemy4"];

var Bandit = {TName: "Bandit", TLevel: 2};
var Golem = {TName: "Golem", TLevel: 3};
var Pirate = {TName: "Pirate", TLevel: 6};
var Witch = {TName: "Witch", TLevel: 8};
var EnemytestArray = [Bandit, Golem, Pirate, Witch];


//function FindEnemy(Enemy){
//    return Enemy.Level == 2;
//}

function BattleScreenFill(){
    var EnemiesToFight = [];
    while (EnemiesToFight.length < 4){
        var SelectedEnemy = Math.floor(Math.random() * (EnemytestArray.length - 1)); 
        //var SelectedEnemy = Math.random(EnemytestArray.length + 1);
        console.log(SelectedEnemy);
        //console.log(EnemytestArray.find(FindEnemy));
        console.log(EnemytestArray[0]);
        console.log(EnemytestArray[1]);
        console.log(EnemytestArray[Golem.TName]);
        EnemiesToFight.push(EnemytestArray[SelectedEnemy]);
    }
    console.log(EnemiesToFight.length);
    console.log(EnemiesToFight);
    document.getElementById("Icon1").innerHTML = "<img src='./Images/Placeholder.png'>"
}