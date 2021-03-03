<?php
function testFile(){
    $TestFile = fopen("TestData.txt", "w") or die ("Unable to create file");
    $txt = "Cowabunga \n";
    fwrite($TestFile, $txt);
    fclose($TestFile);
    }
?>
<script type="text/javascript">
var x = "Something"
</script>