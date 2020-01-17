let snake = [];
let startable = false;
let columnsNum = 0;
let rowsNum = 0;

$("#startbtn").click(function (){
    console.log("Started");
    $("#playmat").empty();
    rowsNum = $("#rows").val();
    columnsNum = $("#columns").val();
    var curRow = 0;
    var curCol = 0;
    console.log(columnsNum);
    while(curCol < columnsNum){
        addColumn(curCol);
        while(curRow < rowsNum){
            addRow(curCol, curRow);
            curRow++;
        }
        curCol++;
        curRow = 0;
    }
    snake = [];
    setSnake();
    startable = true;
    direction = 0;
    clearInterval(interval);
});

function addRow(curCol, curRow){
    var temp = document.createElement("div");
    temp.setAttribute("class", "row");
    temp.setAttribute("id", curCol + "-" + curRow);
    $("#"+curCol).append(temp);
}

function addColumn(curCol){
    var temp = document.createElement("div");
    temp.setAttribute("class", "column");
    temp.setAttribute("id", curCol);
    $("#playmat").append(temp);
}

function setSnake(columns, rows){
    x= Math.floor(Math.random() * columnsNum);
    y= Math.floor(Math.random() * rowsNum);
    generateSnack();
    addCoord(x, y);
}