/*
Q1:
Check if jQuery is loaded
*/    

$(document).ready(function(){


    $("#q1").html("yasmin");
/*
Q2:
If You would have very long website - How to help user with fast getting
 back on top :)
*/



    $("#toTop").click(function () {
   
        $("html, body").animate({scrollTop:0});
     });

/*
Q3:
If You would like to change sizes of Your div/button with on click :)
*/
$("#btn1").click(function(){
    $("#box").animate({
      height: '100px',
      width: '100px'
    });
  });

  $("#btn2").click(function(){
    $("#box").animate({
      height: '150px',
      width: '150px'
    });
  });
/*
Q4:
Learn how to fadein your boxes
*/

      $("#btn3").click(function(){
    $("#div1").delay( 600 ).fadeIn(1000);
    $("#div2").delay( 1500 ).fadeIn(1000);
    $("#div3").delay( 100 ).fadeIn(1000);

       });

         
/*
Q5:
User must first accept then he or she can signup
*/

$("#accept").change(function() {

       if($('#accept').prop('checked')) {
        $("#submitbtn").prop("disabled", false);
    } else {
        $("#submitbtn").prop("disabled", true);
    }
});
       
/*
Q6:
Let them print
*/

$('.printPage').click(function(){
    window.print();
   // return false;
}); 



/*
Q7:
Can username be too long? Yest it can - lets limit that
*/
$("#textarea").attr('maxlength','20');


/*
Q8:
Wanna make some words bolder, do it with jQuery
*/
$(".p1").css("font-weight", "bold");


/*
Q9:
Add new div to your website
*/

$("#t").click(function(){

  $("#t").after("<div>new div</div>")
 
 
 })


/*
Q11:
Add element within ul list
*/

$("#btnclick").click(function(){
    $("#header li:last").after('<li><a href="#">new li</a></li>');


});


/*
Q13:
Change input value
*/
$('#button').attr('value', 'Hello jouza')


/*
Q12:
Know what user puts into textbox
*/


/*
Q12:
Know what user puts into textbox
*/

 /* var t=$('#usertext').html($('input:textbox').val());

console.log(t)
 */



}); 

/*
Q10:
Select values from a JSON object using jQuery
*/









// if you finish try a new thing by your self
// or go and repeat the DOM exercises using jQuery 