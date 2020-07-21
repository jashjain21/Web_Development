 var player_one=prompt('Player One:Enter Your Name,you will be blue');
 var player_one_color='rgb(86, 151, 255)';
 var player_two=prompt('Player Two:Enter Your Name,you will be red');
 var player_two_color='rgb(237, 45, 73)';
// $('h3').text("Player one its your turn now");
//check bottommost white row
//chnge color
//to identify the color of the button
//check wins:hori,vert,diagonal,and full finish
var game_on=true;
var table=$('table tr');
//below function was made for our testing purpose only
function reportwin(rowNum,colNum){
  console.log("you won at this row,coloumn");
  console.log(rowNum);
  console.log(colNum);
}

//below function was to return the color
function changeColor(rowIndex,colIndex,color){
  return table.eq(rowIndex).find('td').eq('colIndex').find('button').css('background-color',color);
}
//below function is used to change color
function returnColor(rowIndex,colIndex){
  return table.eq(rowIndex).find('td').eq('colIndex').find('button').css('background-color');
}
//check bottommost row for selected coloumn
function checkBottom(){
  var colorReport = returnColor(5,colIndex);
  for (var row = 5; row>-1;row--){
    colorReport=returnColor(row,colIndex);
    if (colorReport==='rgb(255, 255, 255)'){
      return row;
    }
  }
}
function colorMatchCheck(one,two,three,four){
  return(one===two && one===three && one===four && one!=='rgb(255, 255, 255)'&& one!==undefined);
}
// Check for Horizontal Wins
function horizontalWinCheck() {
  for (var row = 0; row < 6; row++) {
    for (var col = 0; col < 4; col++) {
      if (colorMatchCheck(returnColor(row,col), returnColor(row,col+1) ,returnColor(row,col+2), returnColor(row,col+3))) {
        console.log('horiz');
        reportWin(row,col);
        return true;
      }else {
        continue;
      }
    }
  }
}

// Check for Vertical Wins
function verticalWinCheck() {
  for (var col = 0; col < 7; col++) {
    for (var row = 0; row < 3; row++) {
      if (colorMatchCheck(returnColor(row,col), returnColor(row+1,col) ,returnColor(row+2,col), returnColor(row+3,col))) {
        console.log('vertical');
        reportWin(row,col);
        return true;
      }else {
        continue;
      }
    }
  }
}

// Check for Diagonal Wins
function diagonalWinCheck() {
  for (var col = 0; col < 5; col++) {
    for (var row = 0; row < 7; row++) {
      if (colorMatchCheck(returnColor(row,col), returnColor(row+1,col+1) ,returnColor(row+2,col+2), returnColor(row+3,col+3))) {
        console.log('diag');
        reportWin(row,col);
        return true;
      }else if (colorMatchCheck(returnColor(row,col), returnColor(row-1,col+1) ,returnColor(row-2,col+2), returnColor(row-3,col+3))) {
        console.log('diag');
        reportWin(row,col);
        return true;
      }else {
        continue;
      }
    }
  }
}

var currentPlayer=1;
var currentName=player_one;
var currentColor=player_one_color;
$('h3').text(player_one+"its your turn now,pick a column to drop in");


$('.btn btn-secondary btn-circle btn-xl').on('click',function(){
console.log("working");
//this indicates the column which user clicked on
  var col=$(this).closest('td').index();
  var bottomAvail=checkBottom(col);
  changeColor(bottomAvail,col,currentColor);

  if(horizontalWinCheck()||verticalWinCheck()||diagonalWinCheck()){
    $('h1').text(currentName +"you have won");
    $('h3').fadeOut('fast');
    $('h2').fadeOut('fast');
  }

  currentPlayer=currentPlayer*-1;
  if (currentPlayer===1){
    currentName=player_one;
    $('h3').text(player_one+"its your turn now,pick a column to drop in");
    currentColor=player_one_color;
  }
  else {
    currentName=player_twoo;
    $('h3').text(player_twp+"its your turn now,pick a column to drop in");
    currentColor=player_two_color;
  }
})
