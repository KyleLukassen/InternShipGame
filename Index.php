<!DOCTYPE html>
<html>
    <head>
        <script src="JS/FileOpening.js"></script>
        <script src="JS/FileSaving.js"></script>
        <script src="PHP/FileSaving.php"></script>
    </head>
    <body>
        <div ID="Gamescreen"> 
            <button type="button" onclick="loadDoc('./DataFiles/ajax_info.txt')">Change Content</button><br>
            <button type="button" onclick="SaveProgress('dit is een test om te kijken of saving text werkt')">Save text</button>

        </div>
        <div ID="demo">
            Research AJAX
        </div>
    </body>


</html>