//global scope
var v="GL0BAL V"
var stuff="GLOBAL STUFF"
function fun(stuff)
{
  //ye wala stuff alag hai
  console.log(v)
  stuff="reassign stuff inside func"
  console.log(stuff);
}
fun()
console.log(stuff);
//this one was the global STUFF
