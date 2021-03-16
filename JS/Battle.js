var IconArray = ["Icon1", "Icon2", "Icon3", "Icon4", "Icon5", "Icon6", "Icon7", "Icon8"];
var EnemyCharacterArray = ["Enemy1", "Enemy2", "Enemy3", "Enemy4"];

var Bandit = {TName: "Bandit", TLevel: 2};
var Golem = {TName: "Golem", TLevel: 3};
var Pirate = {TName: "Pirate", TLevel: 6};
var Witch = {TName: "Witch", TLevel: 8};
var EnemytestArray = [Bandit, Golem, Pirate, Witch];

function FileArrayTest(TextFile){
    var f = new XMLHttpRequest();
    f.onreadystatechange = function(){
        if(f.readyState == 4 || f.status == 200)
        {
            var FileArrayString = f.responseText;
            s = FileArrayString.replace(/\\n/g, "\\n")  
                                .replace(/\\'/g, "\\'")
                                .replace(/\\"/g, '\\"')
                                .replace(/\\&/g, "\\&")
                                .replace(/\\r/g, "\\r")
                                .replace(/\\t/g, "\\t")
                                .replace(/\\b/g, "\\b")
                                .replace(/\\f/g, "\\f");
            s = FileArrayString.replace(/[\u0000-\u0019]+/g,"");

            var res = JSON.parse(s);
            console.log(res);
        }
    }
    f.open("GET", TextFile, false);
    f.send(null);
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
}

