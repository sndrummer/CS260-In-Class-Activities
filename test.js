
$(document).ready(function(){
   $("p").on('click', function(){
    $(this).css("color", "red");
   });

   $("#btn1").on('click', function(){
       console.log("button clicked");
       $("#myUl").append("<li>Appended item</li>");
   });
});

function forLoop(){
    console.log("You made it this far");
    var array = makeArray();
   for(var i = 0; i < array.length; i++){
        console.log(i);
   }
}

function makeArray(){
    var myArray = [1,2,3,4,5,6];
    return myArray;
    
}

function whileLoop(){
    var array = makeArray();
    var i = 0;
    while (i < array.length) {
        console.log(i);
        i++;
    }
}

