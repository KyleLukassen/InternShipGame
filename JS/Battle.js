var IconArray = ["Icon1", "Icon2", "Icon3", "Icon4", "Icon5", "Icon6", "Icon7", "Icon8"];
var PartyNameArray = ["NameContainer1", "NameContainer2", "NameContainer3", "NameContainer4"];
var PartyLvlArray = ["LevelContainer1","LevelContainer2","LevelContainer3","LevelContainer4"];
var PartyHealthArray = ["HealthContainer1", "HealthContainer2", "HealthContainer3", "HealthContainer4"];
var PartyHPBarArray = ["HealthBarContainer1", "HealthBarContainer2", "HealthBarContainer3", "HealthBarContainer4"];
var PartyManaArray = ["ManaContainer1", "ManaContainer2", "ManaContainer3", "ManaContainer4"];
var PartyManaBarArray = ["ManaBarContainer1", "ManaBarContainer2", "ManaBarContainer3", "ManaBarContainer4"];


var EnemyNameArray = ["NameContainer5", "NameContainer6", "NameContainer7", "NameContainer8"];
var EnemyLvlArray = ["LevelContainer5","LevelContainer6","LevelContainer7","LevelContainer8"];
var EnemyHealthArray = ["HealthContainer5", "HealthContainer6", "HealthContainer7", "HealthContainer8"];
var EnemyHPBarArray = ["HealthBarContainer5", "HealthBarContainer6", "HealthBarContainer7", "HealthBarContainer8"];
var EnemyManaArray = ["ManaContainer5", "ManaContainer6", "ManaContainer7", "ManaContainer8"];
var EnemyManaBarArray = ["ManaBarContainer5", "ManaBarContainer6", "ManaBarContainer7", "ManaBarContainer8"];

var CombatLog = "";

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
            PartyArray = JSON.parse(s); 
            //Initiates Party Selection
            BattleScreenFillParty(PartyArray);
        }
    }
    f.open("GET", TextFile, false);
    f.send(null);
}
function BattleScreenFillParty(PartyArray){
    PartyArray.forEach( i => {
        if(i.BattlePosition != null){
            //place the icon of the party member
            document.getElementById(IconArray[i.BattlePosition-1]).innerHTML = "<img src='"+i.Icon+"'></img>";
            //Place the name of the party member
            document.getElementById(PartyNameArray[i.BattlePosition-1]).innerHTML = "Name: " + i.Name;
            //Place the level of the party member
            document.getElementById(PartyLvlArray[i.BattlePosition-1]).innerHTML = "Level: " + i.Level;
            //PLace the health of the party member
            document.getElementById(PartyHealthArray[i.BattlePosition-1]).innerHTML = "Health: " + i.Health;
            //PLace the health bar of the party member
            document.getElementById(PartyHPBarArray[i.BattlePosition-1]).innerHTML = 'Health: <progress value="'+i.Health+'" max="'+i.Health+'" class="HealthBar" id="HealthBar'+i.BattlePosition+'"></progress>';
            //PLace the Mana of the party member
            document.getElementById(PartyManaArray[i.BattlePosition-1]).innerHTML = "Mana: "+i.Mana;
            //PLace the mana bar of the party member
            document.getElementById(PartyManaBarArray[i.BattlePosition-1]).innerHTML = 'Mana: <progress value="'+i.Mana+'" max="'+i.Mana+'" class="ManaBar" id="ManaBar'+i.BattlePosition+'"></progress>';
            
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
            EnemySelection(EnemyArray);
        }
    }
    f.open("GET", TextFile, false);
    f.send(null);
}

function EnemySelection(EnemyArray){
    //create array to fill with selected enemies
    EnemiesToFight = [];
    //continue running the function until there 4 enemies to fight
    while (EnemiesToFight.length < 4){
        //generate random number
        var SelectedEnemy = Math.floor(Math.random() * (EnemyArray.length - 1)); 
        //add enemy that corresponds with random number to array
        EnemiesToFight.push(EnemyArray[SelectedEnemy]);
    }
    //initiate function to fill the battle screen with data
    BattleScreenFillEnemy(EnemiesToFight);
}

function BattleScreenFillEnemy(EnemiesToFight){
    var EnemyCount = 0;
    EnemiesToFight.forEach(i => {
        //place the icon of the enemy
        document.getElementById(IconArray[EnemyCount + 4]).innerHTML = "<img src='"+i.Icon+"'></img>";
        //Place the name of the enemy
        document.getElementById(EnemyNameArray[EnemyCount]).innerHTML = "Name: " + i.Name;
        //place the level of the enemy
        document.getElementById(EnemyLvlArray[EnemyCount]).innerHTML = "Level: " + i.Level;
        //PLace the health of the Enemy
        document.getElementById(EnemyHealthArray[EnemyCount]).innerHTML = "Health: " + i.Health;
        //PLace the health bar of the Enemy
        document.getElementById(EnemyHPBarArray[EnemyCount]).innerHTML = 'Health: <progress value="'+i.Health+'" max="'+i.Health+'" class="HealthBar" id="HealthBar'+(EnemyCount+5)+'"></progress>';
        //PLace the Mana of the Enemy
        document.getElementById(EnemyManaArray[EnemyCount]).innerHTML = "Mana: "+i.Mana;
        //PLace the mana bar of the Enemy
        document.getElementById(EnemyManaBarArray[EnemyCount]).innerHTML = 'Mana: <progress value="'+i.Mana+'" max="'+i.Mana+'" class="ManaBar" id="HealthBar'+(EnemyCount+5)+'"></progress>';
        EnemyCount++;
    })
}

function EndOfTurn(){
    
    //go through each party member and deterine their actions for the turn.
    PartyArray.forEach( i => {
        // if the party member has a defined battle position they are in the fight and can perform an action
        if(i.BattlePosition != null){
            //combine all enemy health values 
            var CombinedEnemyHealth = document.getElementById("HealthBar5").value + document.getElementById("HealthBar6").value + document.getElementById("HealthBar7").value + document.getElementById("HealthBar8").value;
            //if there are still enemies on the field with health remaining, proceed with the combat
            if(CombinedEnemyHealth != 0){
                //a variable to check if the party member found a target
                var TargetFound = false;
                //convert Member data to string to add to the combat log
                MemberName = JSON.stringify(i.Name);
                //clean up the variable for proper viewing
                MemberName = MemberName.replace(/"/g,'');
                //turn the attack integer of the party member into a string to insert into the combat log
                MemberDamage = JSON.stringify(i.Attack);
                //a loop to make sure a party member does not target an enemy with no health remaining
                while(TargetFound == false){
                    //Select a random enemie
                    var SelectedTarget = Math.floor(Math.random() * (EnemiesToFight.length));
                    //declare enemie health to smaller variable for easier access
                    var TargetHealth = document.getElementById("HealthBar"+(SelectedTarget+5)).value
                    //declare enemie Name to smaller variable for easier access
                    var TargetName = document.getElementById("NameContainer"+(SelectedTarget+5)).innerHTML;
                    //clean up the variable for proper viewing
                    TargetName = TargetName.replace("Name: ","")
                    //check if the selected enemy stil has health remianing
                    if(TargetHealth != 0){
                        //deal damage to the selected enemy
                        document.getElementById("HealthBar"+(SelectedTarget+5)).value -= i.Attack;
                        //Display health numbers of the target
                        document.getElementById("HealthContainer"+(SelectedTarget+5)).innerHTML = "Health: "+ document.getElementById("HealthBar"+(SelectedTarget+5)).value;
                        //note down the action
                        CombatAction = (MemberName+" Attacked "+TargetName+" for "+MemberDamage+" damage.<br>");
                        //add the action to the Combat log
                        CombatLog = CombatLog.concat(CombatAction);
                        //set Target found to true to end the loop
                        TargetFound = true;
                    }
                }
            }
            //if no enemie has health remaining, combat has ended.
            else{
                console.log("All Enemies are defeated");
                BattleEnd("PartyVictory");
            }
        }
    });
CombatLog= CombatLog.concat("-----------------------------------------<br>");

    EnemiesToFight.forEach(i => {
        //combine all party member values 
        var CombinedPartyHealth = document.getElementById("HealthBar1").value + document.getElementById("HealthBar2").value + document.getElementById("HealthBar3").value + document.getElementById("HealthBar4").value;
            if (CombinedPartyHealth > 0){
                var TargetFound = false;
                //get the name of the attacking enemy
                var EnemyName = i.Name;
                //remove unneeded markup from name
                EnemyName = EnemyName.replace(/"/g,'');
                //get Damage value of attacking enemy
                var EnemyDamage = i.Attack;

                while(TargetFound == false){
                    //Select a random party member
                    var SelectedTarget = Math.floor(Math.random() * (4));
                    console.log(SelectedTarget)
                    //declare party member health to smaller variable for easier access
                    var TargetHealth = document.getElementById("HealthBar"+(SelectedTarget+1)).value
                    //declare party member Name to smaller variable for easier access
                    var TargetName = document.getElementById("NameContainer"+(SelectedTarget+1)).innerHTML;
                    //clean up the variable for proper viewing
                    TargetName = TargetName.replace("Name: ","");
                    console.log( TargetHealth, TargetName);
                    if(TargetHealth != 0){
                        //deal damage to the selected party member
                        document.getElementById("HealthBar"+(SelectedTarget+1)).value -= i.Attack;
                        //Display health numbers of the target
                        document.getElementById("HealthContainer"+(SelectedTarget+1)).innerHTML = "Health: "+ document.getElementById("HealthBar"+(SelectedTarget+1)).value;
                        //note down the action
                        CombatAction = (EnemyName+" Attacked "+TargetName+" for "+EnemyDamage+" damage.<br>");
                        //add the action to the Combat log
                        CombatLog = CombatLog.concat(CombatAction);
                        //set Target found to true to end the loop
                        TargetFound = true;
                    }
                }

            }
            else{
                console.log("All party members have been defeated");
                BattleEnd("EnemyVictory");
            }
    });

    //easy divider in the console log
    console.log("End of turn-combat");
    //display Combat Log
    document.getElementById("EnemyCharacterDetails").innerHTML = CombatLog;
    //Empty combat log for next turn
    CombatLog = "";
}
function BattleEnd(BattleState){
    if(BattleState === "PartyVictory"){
        alert("You have Won");
    };
    if(BattleState === "EnemyVictory"){
        alert("You have lost");
    };
}