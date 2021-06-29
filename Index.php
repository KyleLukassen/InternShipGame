<?php include 'DataFiles/DataSave.php';?>
<html>
    <head>
        <script src="JS/FileOpening.js"></script>
        <script src="JS/FileSaving.js"></script>
        <script src="JS/Battle.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <link rel="stylesheet" href="./Style/stylesheet.css">
        <link rel="stylesheet" href="./Style/BattleScreen.css">
    </head>
    <body>
        <div class="grid-container">
            <div class="SideBar">
                <div class="SideBarBtns">
                    <button>To do:</button><br>
                    <img class="SideBarButton" src="./Images/Inventory Button 2.png">
                    <img class="SideBarButton" src="./Images/Party Button.png">
                    <img class="SideBarButton" src="./Images/Character Button.png">
                    <button>Codex button</button><br>
                    <button type="button" onclick="SaveData()">Save Data test button</button><br>
                    <button>Buttons Images</button><br>
                    <button>General styling</button><br>
                    <button>File saving</button><br>
                    <button>Enemy pixelart</button><br>
                </div>
            </div>
            <div class="TitleArea">
                <h1>Saga of the Fallen Spirit Walkers</h1>
            </div>
            <div ID="Gamescreen"> 
                <button type="button" onclick="loadDoc('./DataFiles/ScreenTesting.txt')">Change Content</button><br>
            </div>
        </div>
  </body>
</html>