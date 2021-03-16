//function to load file
function loadDoc(TextFile) {
  //create new XMLHttpRequest
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        //displays text of the document
        document.getElementById("Gamescreen").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", TextFile, true);
    xhttp.send();
}

