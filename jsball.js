var uscore = 0;
var cscore = 0;
var bat=1;
function input(ur){
    var cr = Math.floor(Math.random()*6)+1;
    document.getElementById("u").innerHTML = ur;
    document.getElementById("c").innerHTML = cr;
    if(bat==1){
    if(cr!=ur){
        cscore = cscore +cr;
        document.getElementById("compscore").innerHTML= cscore;
    }
    else{
        alert("Computer is out!!!");
        bat=0;
        document.getElementById("batstatus").innerHTML = "User";
    }
    }
    else{        
        if(cr!=ur){
            uscore = uscore+ur;
            document.getElementById("userscore").innerHTML = uscore;
            if(uscore>cscore){
                alert("You won, Computer lost");
                location.replace("index.html");
            }
        }
        else{
            alert("Computer is out!!");
            if(cscore>uscore){
                alert("You lost, Computer won");
                location.replace("index.html");
            }
        }
        
    }
}