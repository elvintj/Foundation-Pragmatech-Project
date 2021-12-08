function ask(question, yes, no)
{
  if(confirm(question)) yes();

  else no();
}

function showOk()
{
  alert("You agreed");
}

function showCancel()
{
  alert("You cancelled");
}

ask("Do you agree with this statement?", showOk, showCancel);