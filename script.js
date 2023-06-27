var a = 0;
var arr = document.querySelectorAll("button");
function wincheck() {
    if ((arr[0].innerHTML === arr[1].innerHTML) && (arr[1].innerHTML === arr[2].innerHTML) && arr[0].innerHTML !== "") {
        document.querySelector("#lineh2").style.display = "block"
        document.querySelector("#lineh2").style.transform = "translate(100px,60px) rotate(0deg)"
        document.querySelector("#lineh2").style.width = "360px";
        return 1;
    }
    else if ((arr[3].innerHTML === arr[4].innerHTML) && (arr[4].innerHTML === arr[5].innerHTML) && arr[3].innerHTML !== "") {
        document.querySelector("#lineh2").style.display = "block"
        // alert("Player won 2");
        document.querySelector("#lineh2").style.transform = "translate(100px,180px) rotate(0deg)"
        document.querySelector("#lineh2").style.width = "360px";
        return 1;
    }
    else if ((arr[6].innerHTML === arr[7].innerHTML) && (arr[7].innerHTML === arr[8].innerHTML) && arr[6].innerHTML !== "") {
        document.querySelector("#lineh2").style.display = "block"
        // alert("Player won 3");
        document.querySelector("#lineh2").style.transform = "translate(100px,300px) rotate(0deg)"
        document.querySelector("#lineh2").style.width = "360px";
        return 1;
    }
    else if ((arr[0].innerHTML === arr[3].innerHTML) && (arr[3].innerHTML === arr[6].innerHTML) && arr[0].innerHTML !== "") {
        document.querySelector("#lineh2").style.display = "block"
        // alert("Player won 4");
        document.querySelector("#lineh2").style.transform = "translate(160px,0px) rotate(90deg)"
        document.querySelector("#lineh2").style.width = "360px";
        return 1;
    }
    else if ((arr[1].innerHTML === arr[4].innerHTML) && (arr[4].innerHTML === arr[7].innerHTML) && arr[1].innerHTML !== "") {
        document.querySelector("#lineh2").style.display = "block"
        // alert("Player won 5");
        document.querySelector("#lineh2").style.transform = "translate(280px,0px) rotate(90deg)"
        document.querySelector("#lineh2").style.width = "360px";
        return 1;
    }
    else if ((arr[2].innerHTML === arr[5].innerHTML) && (arr[5].innerHTML === arr[8].innerHTML) && arr[2].innerHTML !== "") {
        document.querySelector("#lineh2").style.display = "block"
        // alert("Player won 6");
        ddocument.querySelector("#lineh2").style.transform = "translate(390px,0px) rotate(90deg)"
        document.querySelector("#lineh2").style.width = "360px";
        return 1;
    }
    else if ((arr[0].innerHTML === arr[4].innerHTML) && (arr[4].innerHTML === arr[8].innerHTML) && arr[0].innerHTML !== "") {
        document.querySelector("#lineh2").style.display = "block"
        document.querySelector("#lineh2").style.transform = "translate(105px,0px) rotate(45deg)"
        document.querySelector("#lineh2").style.width = "500px";
        return 1;
    }
    else if ((arr[2].innerHTML === arr[4].innerHTML) && (arr[4].innerHTML === arr[6].innerHTML) && arr[2].innerHTML !== "") {
        document.querySelector("#lineh2").style.display = "block"
        // alert("Player won 8");
        document.querySelector("#lineh2").style.transform = "translate(455px,0px) rotate(135deg)"
        document.querySelector("#lineh2").style.width = "500px";
        return 1;
    }

}
if (a === 0) {
    document.querySelector(".side > p").innerHTML = "X's turn"
}
else {
    document.querySelector(".side > p").innerHTML = "O's turn"
}
for (var i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", function () {
        if (this.innerHTML === "") {
            if (a === 0) {

                this.innerHTML = "X";
                a = 1;
                document.querySelector(".side > p").innerHTML = "O's turn"
            }
            else {
                this.innerHTML = "O";
                a = 0;
                document.querySelector(".side > p").innerHTML = "X's turn"
            }
            if (wincheck()) {
                if (a === 1) {
                    document.querySelector(".side > p").innerHTML = "X won the game";
                }
                else {
                    document.querySelector(".side > p").innerHTML = "O won the game";
                }
                var j = document.querySelector(".side").innerHTML;
                document.querySelector(".side").innerHTML = j;
                document.querySelector("img").setAttribute("src", "./resources/excited.gif");
                document.querySelector("img").style.display = "block";


                // + '<img src="./resources/excited.gif" alt="cat dancing gif">'
            }
        }
    })
}

function resetfun() {
    for (var i = 0; i < 9; i++) {
        arr[i].innerHTML = "";
    }
    document.querySelector("img").style.display = "none";
    document.querySelector("#lineh2").style.display = "none";
}

var audio = new Audio('./resources/music.mp3');
audio.play();


