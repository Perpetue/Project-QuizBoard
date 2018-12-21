function mytest()
{
var question1=document.forms["myform"]["answer1"].value;
var question2=document.forms["myform"]["answer2"].value;
var question3=document.forms["myform"]["answer3"].value;
var question4=document.forms["myform"]["answer4"].value;
var question5=document.forms["myform"]["answer5"].value;
var question6=document.forms["myform"]["answer6"].value;
var question7=document.forms["myform"]["answer7"].value;
var question8=document.forms["myform"]["answer8"].value;
var question9=document.forms["myform"]["answer9"].value;
var question10=document.forms["myform"]["answer10"].value;
var marks=0;
if(question1==" C - All of the above")
{
  marks=marks+2;
  }
if(question2==" A - window.print();")
{
  marks=marks+2;
  }
if(question3=="C - forEach()")
{
  marks=marks+2;
}
if(question4==" A - toUpperCase()")
{
  marks=marks+2;
}
if(question5=="C - concat()")
{
  marks=marks+2;
}
if(question6=="B - split()")
{
  marks=marks+2;
  }
if(questiion7==" B - toUpperCase()")
{
  marks=marks+2;
  }
if(question8=="A - fixed()")
{
  marks=marks+2;
}
if(question9==" A - map()")
{
  marks=marks+2;
}
if(question10=="A - toSource()")
{
  marks=marks+2;
}
alert("your score is:"+marks);
}



