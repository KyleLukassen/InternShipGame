var IconArray = ["Icon1", "Icon2", "Icon3", "Icon4", "Icon5", "Icon6", "Icon7", "Icon8"];
var EnemyCharacterArray = ["Enemy1", "Enemy2", "Enemy3", "Enemy4"];

//initiated on battlescren load
function FileArrayRead(TextFile){
    //make new XMLHttpRequest
    var f = new XMLHttpRequest();
    f.onreadystatechange = function(){
        if(f.readyState == 4 || f.status == 200)
        {
            //place response text in variable 
            var FileArrayString = f.responseText;
            //clean up response text
            s = FileArrayString.replace(/\\n/g, "\\n")  
                                .replace(/\\'/g, "\\'")
                                .replace(/\\"/g, '\\"')
                                .replace(/\\&/g, "\\&")
                                .replace(/\\r/g, "\\r")
                                .replace(/\\t/g, "\\t")
                                .replace(/\\b/g, "\\b")
                                .replace(/\\f/g, "\\f");
            s = FileArrayString.replace(/[\u0000-\u0019]+/g,"");
            //parse response text to JSON
            var EnemyArray = JSON.parse(s); 
            //Initiates enemie selection
            ActOnCompletion(EnemyArray);
        }
    }
    f.open("GET", TextFile, false);
    f.send(null);
}

function ActOnCompletion(EnemyArray){
    //create array to fill with selected enemies
    var EnemiesToFight = [];
    //continue running the function until there 4 enemies to fight
    while (EnemiesToFight.length < 4){
        //generate random number
        var SelectedEnemy = Math.floor(Math.random() * (EnemyArray.length - 1)); 
        //add enemy that corresponds with random number to array
        EnemiesToFight.push(EnemyArray[SelectedEnemy]);
    }
    //initiate function to fill the battle screen with data
    BattleScreenFill(EnemiesToFight);
}

function BattleScreenFill(EnemiesToFight){
    //define a Variable to use in the foreach loops
    var EnemyCount = 0;
    //function to add the icons
    IconArray.forEach(icon => {
        document.getElementById(icon).innerHTML = "<img src='./Images/Placeholder.png'>";
    });
    //function to add the enemies into the battle screen
    EnemyCharacterArray.forEach(i => {
        console.log(EnemiesToFight[EnemyCount]);
        //grab the name of the enemy and convert it into a string
        EnemyNameString = JSON.stringify(EnemiesToFight[EnemyCount].Name);
        //Remove all " from the string
        EnemyName = EnemyNameString.replace(/"/g,'');
        //place the name into the battle screen
        document.getElementById(i).innerHTML = EnemyName;
        //increase EnemyCount to iterate the next enemy
        EnemyCount++;
    });
}

