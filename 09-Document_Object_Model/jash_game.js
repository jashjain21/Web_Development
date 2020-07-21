console.log()
var restart=document.querySelector('#b');
var squares=document.querySelectorAll('td');
function clearBoard(){
    for (var i = 0; i < squares.length; i++) {
      squares[i].textContent='';
    }
}
restart.addEventListener('click',clearBoard)
//faltu method
/*var cellOne=document.querySelector('#one');

cellOne.addEventListener('click',function(){
  if(cellOne.textContent===""){
    cellOne.textContent="X";
    }
  else if(cellOne.textContent==="X")
  {
    cellOne.textContent="0";
  }
  else {
    cellOne.textContent="";
  }
})
*/


//new method
function changeMarker() {
  if(this.textContent==='')
  {
    this.textContent='X';
    this.style.color='black';
  }
  else if(this.textContent==="X")
  {
    this.textContent="0";
    this.style.color='black';
  }
  else {
    this.textContent="";
  }
}
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click',changeMarker)
}
