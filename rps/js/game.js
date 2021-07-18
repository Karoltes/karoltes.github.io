const items = ['p', 'r', 's'];
function Roll(played) {
    var enemy = document.getElementById("enemy");
    var player = document.getElementById("player");
    var result = document.getElementById("result");
    result.textContent = "One... two... three!";
    enemy.src = "src/randg.gif";
    player.src = "src/randgp.gif";
    setTimeout(SetScore, 1500, played);
    
}
function SetScore(played){
    
    var item = items[Math.floor(Math.random() * items.length)];
    var result = document.getElementById("result");
    
    var enemy = document.getElementById("enemy");
    var player = document.getElementById("player");

    var e_score = document.getElementById("e_score");
    var p_score = document.getElementById("p_score");

    if(item == 's') enemy.src = "https://static.thenounproject.com/png/477919-200.png";
    else if (item == 'r') enemy.src = "https://static.thenounproject.com/png/477918-200.png";
    else enemy.src = "https://static.thenounproject.com/png/477922-200.png";
    if(played == 's') player.src = "https://static.thenounproject.com/png/477919-200.png";
    else if (played == 'r') player.src = "https://static.thenounproject.com/png/477918-200.png";
    else player.src = "https://static.thenounproject.com/png/477922-200.png";
    if (played == item) result.textContent = "Draw!";

    else if ((played == 'p' & item == 's') | (played == 's' & item == 'r') | (played == 'r' & item == 'p')) {
        result.textContent = "You lost...";
        let temp = parseInt(e_score.textContent);
        temp += 1;
        e_score.textContent = temp.toString(); 
    }
    else{
        result.textContent = 'You won!';
        let temp = parseInt(p_score.textContent);
        temp += 1;
        p_score.textContent = temp.toString(); 
    } 
}
