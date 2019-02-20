<!DOCTYPE html>
<html>
<head>
<title>CALCULATOR PAGE</title>
<head>
<style>
h1{color:blue};
th{
	
}
</style>
<body>


<h1>CALCULATOR</h1>
<table >
  <tr>
    <th style=width:40px;height:50px;id='display' colspan="4" ><input type=text >  </th>
  </tr>
  <tr>
	<td><button id ='1' onclick="1">1</button></td>
	<td><button id ='2'onclick="2">2</button></td>
	<td><button id ='3'onclick="3">3</button></td>
	<td><button id ='+'onclick="+">+</button></td>
   </tr>
   <tr>
	<td><button id ='4' onclick="4">4</button></td>
	<td><button id ='5' onclick="5">5</button></td>
	<td><button id ='6' onclick="6">6</button></td>
	<td><button id ='-' onclick="-">-</button></td>
   </tr>
   <tr>
	<td><button id ='7' onclick="7">7</button></td>
	<td><button id ='8' onclick="8">8</button></td>
	<td><button id ='9' onclick="9">9</button></td>
	<td><button id ='*' onclick="*">*</button></td>
   </tr>
   <tr>
    <td><button id ='0' onclick="0">0</button></td>
	<td colspan='2' ><button id ='=' onclick="=">=</button></td>
	<td><button id ='/' onclick="/">/</button></td>
	
  </tr>

  </table>


<p>CALCULATOR<pre>
basic Operations</p>




<script>
function display(){
console.log(n1);
}

if (id)
{
 
	n1=getElementById(id.value);
	if('+'||'-'||'*'||'/')
	n2=getElementById(id.value);
	if('+'){
		n1=n1+n2;
		display(n1);
	}
	else if('-'){
		n1=n1-n2;
		display(n1);
	}
	else if('*'){
		n1=n1*n2;
		display(n1);
	}
	else if('/'){
		n1=n1/n2;
		display(n1);
	}
		

}





</script>


</body>
</html>