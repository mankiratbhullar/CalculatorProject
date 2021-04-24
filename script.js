var  buttons=document.getElementsByClassName("btn");
var display=document.getElementById("display");
var op1=0;
var op2=null;
var operator=null;
for(var i=0;i<buttons.length;i++)
{
	buttons[i].addEventListener('click',function()
	{
		var value=this.getAttribute('data-value');
	      var text=display.textContent.trim();
       if(value == '+' || value == '-' || value == '*' || value == '/' || value == '%' || value =='+/-')
	   {
		   operator=value;
            op1=parseFloat(text);
			display.textContent="";
			//display.textContent+=operator;
		   
	   }
	   else if(value == "=")
	   {

		   op2=parseFloat(text);
		   console.log(op1,op2);
		   var ans=eval(op1+ " " + operator + " " + op2);
		   display.textContent=ans;

		   

	   }
	   else if(value == "AC")
	   {
		   op1=0;
		   op2=null;
		   operator=null;
		   display.textContent="";
	   }
	   else{
		   display.textContent += value;
	   }
	   

	   
	});
}