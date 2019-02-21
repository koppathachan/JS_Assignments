(function(){

var result =console.log(eval(document.getElementById('display').value));
/* eval is slow,we cannot find errors easily,easy interruption of errors 
     var result =console.log(window(document.getElementById('display').value));
*/ 

})();