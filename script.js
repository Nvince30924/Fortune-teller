$(document).ready(function(){


var array = [ "D.a." , "True" , "QUE??" ,  "tibet is under chinese control" ]


       


$("button").click(function() {
var x = Math.floor(Math.random()*array.length);
   console.log(array[x]) 
    
    
});

});
