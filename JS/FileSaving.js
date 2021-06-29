//JQuery AJAX function
TestDataString = "Let's see if this works"
//Save: "[{'Test': 'Success'},{'Test1': 'Success'}]"

function SaveData() {
    $.ajax({
        url:"./DataFiles/DataSave.php",    //the page containing php script
        type: "POST",    //request type,
        dataType: 'text', //datatype
        data: {Save:TestDataString, TestData: "xyz", TestData2: "abc@gmail.com"},
        success:function(){
            console.log("File save function end.")
        }
    });
}
function SaveDataInventory(InventoryData) {
    $.ajax({
        url:"./DataFiles/DataSave.php",    //the page containing php script
        type: "POST",    //request type,
        dataType: 'text', //datatype
        data: {Inventory:InventoryData},
        success:function(){
            console.log("File save function end.")
        }
    });
}