<?php
        if($_SERVER['REQUEST_METHOD'] == "POST" and isset($_POST['someAction']))
    {
        testFile();
    }
    
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