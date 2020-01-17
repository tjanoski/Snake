function generateSnack(){
    snackx = Math.floor(Math.random() * columnsNum);
    snacky = Math.floor(Math.random() * rowsNum);
    let combined = snackx + "-" + snacky;
    let success = checkSnake(combined);
    if(success){
        $("#"+combined).css("background-color", "blue");   
    } else {
        generateSnack();
    }
}

function checkSnake(coord){
    let success = true;
    snake.forEach(function(element){
        if(element == coord){
            success = false;
        }
    }); 
    return success;
}