var IconArray = ["Icon1", "Icon2", "Icon3", "Icon4", "Icon5", "Icon6", "Icon7", "Icon8"];
var PartyNameArray = ["NameContainer1", "NameContainer2", "NameContainer3", "NameContainer4"];
var PartyLvlArray = ["LevelContainer1","LevelContainer2","LevelContainer3","LevelContainer4"];
var PartyHealthArray = ["HealthContainer1", "HealthContainer2", "HealthContainer3", "HealthContainer4"];
var PartyHPBarArray = ["HealthBar1", "HealthBar2", "HealthBar3", "HealthBar4"];

var EnemyNameArray = ["NameContainer5", "NameContainer6", "NameContainer7", "NameContainer8"];
var EnemyLvlArray = ["LevelContainer5","LevelContainer6","LevelContainer7","LevelContainer8"];
var EnemyHealthArray = ["HealthContainer5", "HealthContainer6", "HealthContainer7", "HealthContainer8"];
var EnemyHPBarArray = ["HealthBar5", "HealthBar6", "HealthBar7", "HealthBar8"];


function FileArrayRead(EnemyTextfile, PartyTextFile){
    //Start function to read Text file with Enemy data
    OpenFileEnemy(EnemyTextfile);
    //start fumction to read text file with Party data
    OpenFileParty(PartyTextFile);
}
//this function opens the text file with Party data and initiates a function to use that data
function OpenFileParty(TextFile){
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
            var PartyArray = JSON.parse(s); 
            //Initiates Party Selection
            ActOnCompletionParty(PartyArray);
        }
    }
    f.open("GET", TextFile, false);
    f.send(null);
}
function ActOnCompletionParty(PartyArray){
    PartyArray.forEach( i => {
        if((i.BattlePosition) != null){
            //Place the name of the party member
            document.getElementById(PartyNameArray[i.BattlePosition-1]).innerHTML = "Name: " + i.Name;
            //Place the level of the party member
            document.getElementById(PartyLvlArray[i.BattlePosition-1]).innerHTML = "Level: " + i.Level;
            //PLace the health and Mana of the party member
            document.getElementById(PartyHealthArray[i.BattlePosition-1]).innerHTML = "Health: " + i.Health+"<br>Mana: "+i.Mana;
            //PLace the health bar and mana bar of the party member
            document.getElementById(PartyHPBarArray[i.BattlePosition-1]).innerHTML = 'Health: <progress value="'+i.Health+'" max="'+i.Health+'" class="HealthBar"></progress><br>Mana: <progress value="'+i.Mana+'" max="'+i.Mana+'" class="ManaBar"></progress>';
        }
    });
}
//this function opens the text file with Enemy data and initiates a function to use that data
function OpenFileEnemy(TextFile){
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
            ActOnCompletionEnemy(EnemyArray);
        }
    }
    f.open("GET", TextFile, false);
    f.send(null);
}

function ActOnCompletionEnemy(EnemyArray){
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
    EnemyNameArray.forEach(i => {
        //grab the name of the enemy and convert it into a string
        EnemyNameString = JSON.stringify(EnemiesToFight[EnemyCount].Name);
        //Remove all " from the string
        EnemyName = EnemyNameString.replace(/"/g,'');
        //place the Name into the battle screen
        document.getElementById(i).innerHTML = "Name: " + EnemyName;
        //increase EnemyCount to iterate the next enemy
        EnemyCount++;
    });
    // reset EnemyCount Variable back to 0 for the next loop
    EnemyCount = 0;
    //loop to place Level
    EnemyLvlArray.forEach(i =>{
        //place the level in de battle screen
        document.getElementById(i).innerHTML = "Level: " + JSON.parse(EnemiesToFight[EnemyCount].Level);
        //increase EnemyCount to iterate the next enemy
        EnemyCount++;
    });
    // reset EnemyCount Variable back to 0 for the next loop
    EnemyCount = 0
    //Loop to place Health and Mana
    EnemyHealthArray.forEach(i =>{
        //place the Health and Mana in de battle screen
        document.getElementById(i).innerHTML = "Health: " + JSON.parse(EnemiesToFight[EnemyCount].Health)+"<br>Mana: "+JSON.parse(EnemiesToFight[EnemyCount].Mana);
        //increase EnemyCount to iterate the next enemy
        EnemyCount++;
    });
    // reset EnemyCount Variable back to 0 for the next loop
    EnemyCount = 0
    //loop to place HealthBar And ManaBar
    EnemyHPBarArray.forEach(i =>{
        //Variable to hold the health value
        var HealthValue = JSON.parse(EnemiesToFight[EnemyCount].Health);
        //Variable to hold the Mana Value
        var ManaValue = JSON.parse(EnemiesToFight[EnemyCount].Mana);
        //place the Health in de battle screen
        document.getElementById(i).innerHTML = 'Health: <progress value="'+HealthValue+'" max="'+HealthValue+'" class="HealthBar"></progress><br>Mana: <progress value="'+ManaValue+'" max="'+ManaValue+'" class="ManaBar"></progress>';
        //increase EnemyCount to iterate the next enemy
        EnemyCount++;
    });
}

