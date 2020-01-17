let direction = 0;
let eaten = false;
let snackx = -1;
let snacky = -1;
let interval = null;

function addCoord(x, y){
    if(snake[0] != null && !eaten){
        $("#" + snake[0]).css("background-color", "white");
        snake.shift();
    }
    eaten = false;
    let pushable = x + "-" + y;
    let success = checkSnake(pushable);
    if(success){
        snake.push(pushable);
        updateSnake();
    } else {
        $('.row').css("background-color", "red");
        clearInterval(interval);
    }
}

function updateSnake(){
    // snake.forEach(function(element){
    //     $("#"+element).css("background-color", "green");   
    // });
    $("#" + snake[snake.length - 1]).css("background-color", "green");
}

function setIntervalandExecute(fn, t){
    interval = setInterval(fn, t);
    // return(setInterval(fn, t));
}

function move(){
    let x = parse("x", snake[snake.length - 1]);
    let y = parse("y", snake[snake.length - 1]);
    switch(direction){
        case 1:
            y++;
            break;
        case 2:
            x++;
            break;
        case 3:
            y--;
            break;
        case 4:
            x--;
            break;
        case 0:
            console.log("No inital direction selected.");
            break;
        default:
            alert("The fuck did you do?");
            break;
    }
    if(x == snackx && y == snacky){
        eaten = true;
        generateSnack();
    }
 if(x == columnsNum || x < 0 || y < 0 || y == rowsNum){
        $('.row').css("background-color", "red");
        clearInterval(interval);
    } else {
        addCoord(x,y);
    }
}

function parse(type, str){
    var twoStrings = str.split("-");
    if(type == "x"){
        return twoStrings[0];
    } else if (type == "y"){
        return twoStrings[1];
    }
    return;
}

document.addEventListener('keypress', setMove);
function setMove(e){
    if(startable){
        setIntervalandExecute(move, 100);
        alert('started!');
        startable = false;
    }
    switch(e.keyCode){
        case 97:
            if(direction == 2){
                console.log("Moved Wrongly!");
                break;
            } else {
                direction = 4;
                break;
            }
        case 100:
            if(direction == 4){
                console.log("Moved Wrongly!");
                break;
            } else {
                direction = 2;
                break;
            }
        case 115:
            if(direction == 3){
                console.log("Moved Wrongly!");
                break;
            } else {
                direction = 1;
                break;
            }
        case 119:
            if(direction == 1){
                console.log("Moved Wrongly!");
                break;
            } else {
                direction = 3;
                break;
            }
    }
}