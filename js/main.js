/**
 * Created by Nikolay on 6/28/2015.
 */
$(document).ready(function(){
   var toggle=$('.toggle');

    toggle.on('click',function(){
       $('nav ul').slideToggle(500);
    });
});