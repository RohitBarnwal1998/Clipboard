

// console.log('jquery');
// //$('selector').action()

// $('h1').click();
// $('h1').click(function(){
//      console.log("clicked on h1");
// });

$(document).ready(function name(){
   function  add(){
    $('.copied').addClass("bounce-effect")
   }
   function  remove(){
    $('.copied').removeClass("bounce-effect")
   }
     
    $(".copy-btn").click(function (){
        $("#textField").select();
        document.execCommand("copy");
        add();
        setTimeout(remove, 800)
    })

})

