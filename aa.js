
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest

function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    console.log("a")
    rawFile.onreadystatechange = function ()
    {
        console.log("b")
        if(rawFile.readyState === 4)
        {
            console.log("c")
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                console.log("d")
                var allText = rawFile.responseText;
                //alert(allText);
                console.log("The status is "+typeof(allText))
                return allText
            }
        }
    }
    //rawFile.send(null);
}

var status = readTextFile("serverStatus.txt");