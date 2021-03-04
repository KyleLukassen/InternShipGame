<?php



function SaveProgress($Progress){
    $SaveFile = fopen("./DataFiles/Savefile.txt", "w");
    fwrite($Savefile, $Progress);
    fclose($SaveFile);
}

?>