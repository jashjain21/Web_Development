//arrays same as lists of python
//arr is mutable
//in arr.forEach(just fun name no())
var roster=[];
var option=prompt("would you like to start the roster web app?y/n")
if (option==='y')
{
    while (option!=='quit') {
        option=prompt("please select an option :add,remove,dislay,quit.")
        if (option==='add')
        {
          roster.push(prompt("What name would you like to add?"))
        }
        else if (option==='remove')
        {
          var removename=prompt("What name would you like to remove?")
          var index=roster.indexOf('removename')
          roster.splice(index,1)
        }
        else if (option==='display')
        {
          console.log(roster);
        }
        else {
          alert('Thanks for using the web app!please refresh the page to start over')
          break;
        }
    }
}
else {
    alert('Thanks for using the web app!please refresh the page to start over')
}
