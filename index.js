var game = true;
var flag = 0;
// Enter User Name
function done() {
    const Name = document.getElementById('getName').value;
    if (Name.length != 0) {
        document.getElementById('name').innerHTML = Name;
    }
    else {
        document.getElementById('name').innerHTML = "User";
    }
}
// Paper Selection
function Paper() {
    if (game) {
        // game = true;
        flag = 1;
        stone.style.display = "none";
        scissor.style.display = "none";
        console.log("game paper " + game);
    }
    else {
        game = false;
    }
}
// Scissor Selection
function Scissor() {
    if (game) {
        flag = 3;
        // game = true;
        paper.style.display = "none";
        stone.style.display = "none";
        console.log("game scissor " + game);
    }
    else {
        game = false;
    }
}
// Stone selection
function Stone() {
    if (game) {
        flag = 2;
        // game = true;
        paper.style.display = "none";
        scissor.style.display = "none";
        console.log("game stone " + game);
    }
    else {
        game = false;
    }
    // Game Start
}
function rps() {
    if (game) {
        game = false;
        max = 4
        min = 1
        var pc = Math.floor(Math.random() * (max - min)) + min;
        if (pc === 1) {
            // 1=paper
            paper1.style.display = "block";
        }
        else if (pc === 2) {
            // 2=Stone
            stone1.style.display = "block";
        }
        else {
            // 3=Scissor
            scissor1.style.display = "block";
        }
        done();
        if (pc === flag) {
            var result = "WINNER";
            var idk = document.getElementById("win").innerHTML = result;
        }
        else {
            var result = "LOSER";
            var idk = document.getElementById("win").innerHTML = result;
        }
        document.getElementById('getName');

    }
    else {
        game = false;
    }
}
// Game Over
function over() {
    game = true;
    stone.style.display = "block";
    scissor.style.display = "block";
    paper.style.display = "block";
    stone1.style.display = "none";
    scissor1.style.display = "none";
    paper1.style.display = "none";
    document.getElementById('win').innerHTML = ""
    document.getElementById('name').innerHTML = "Player Name";
    document.getElementById('getName').value = "";
}