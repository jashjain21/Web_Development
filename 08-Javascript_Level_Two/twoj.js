function sleepIn(weekday,vacation) {
  return(!weekday||vacation)

}
function monkeyTrouble(asmile, bsmile) {
    return(asmile&&bsmile||!asmile&&!bsmile)
    //Code Goes Here
}
function stringTimes(str, n) {
      var newstr="\0";
      for (var i = 0; i < n; i++)
          {
              newstr+=str;
          }
  return newstr;
}
function luckySum(a, b, c){
  if(a===13)
  {
    return 0;
  }
  else if(b===13){
    return a;
  }
  else if(c===13){
      return a+b;
  }
  else {
    return a+b+c;
  }
  //Code Goes Here
}
function caught_speeding(speed, is_birthday){
  if(is_birthday===true)
    speed-=5;
  if(speed<=60)
      return 0;
  else if (speed<=80&&speed>=61) {
        return 1;
      }
  else  {
      return 2;
  }

  //Code Goes Here
}
function makeBricks(small, big, goal){
  //Code Goes Here
 /*if(goal/small==true||goal/(big*5)==true||goal/(small+(big*5))==true)
    return true;
  else {
    return false;
  }*/
  return goal%5>=0 && goal%5-small<=0 && small+5*big>=goal;
}
