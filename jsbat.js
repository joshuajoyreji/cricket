var uscore = 0;
var cscore = 0;
var bat=1;
function input(ur){
    var cr = Math.floor(Math.random()*6)+1;
    document.getElementById("u").innerHTML = ur;
    document.getElementById("c").innerHTML = cr;
    if(bat==1){
    if(cr!=ur){
        uscore = uscore+ur;
        document.getElementById("userscore").innerHTML = uscore;
    }
    else{
        alert("You are out!!!");
        bat=0;
        document.getElementById("batstatus").innerHTML = "Computer";
    }
    }
    else{        
        if(cr!=ur){
            cscore = cscore +cr;
            document.getElementById("compscore").innerHTML= cscore;
            if(cscore>uscore){
                alert("You lost, Computer won");
                uscore=0;
                cscore=0;
                document.getElementById("userscore").innerHTML = uscore;
                document.getElementById("compscore").innerHTML= cscore;
                bat=1;
                document.getElementById("batstatus").innerHTML = "User";
                location.replace("index.html");
            }
        }
        else{
            alert("Computer is out!!");
            if(uscore>cscore){
                alert("You won, Computer lost");
                uscore=0;
                cscore=0;
                document.getElementById("userscore").innerHTML = uscore;
                document.getElementById("compscore").innerHTML= cscore;
                bat =1;
                document.getElementById("batstatus").innerHTML = "User";
                location.replace("index.html");
            }
        }
        
    }
}