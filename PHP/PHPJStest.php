<?php
    if(isset($_POST('submit')))
    {
       testFile();
    }
    
function testFile(){
    $TestFile = fopen("TestData.txt", "w") or die ("Unable to create file");
    $txt = "Oh man \n";
    fwrite($TestFile, $txt);
    fclose($TestFile);
    }
?>
