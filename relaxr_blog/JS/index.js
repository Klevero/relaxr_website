$(document).ready(function(){
	
	$(".blue_button").click(function(){
		alert("We are not ready for signups yet");	
	});


	$(".blue_button").click(function(){
    $(".blue_button").html("No Sign Ups");
	});

//POST ONE

	$(".distension_1").hide();

	$(".extra_p1").hide();
    $(".extension_1").click(function(){
        $(".extra_p1").slideDown();
      	$(".extension_1").hide();
      	$(".distension_1").show();
    });

    $(".distension_1").click(function(){
    	$(".extra_p1").slideUp();
    	$(".extension_1").show();
    	$(".distension_1").hide();

      });

//POST TWO

    $(".distension_2").hide();

	$(".extra_p2").hide();
    $(".extension_2").click(function(){
        $(".extra_p2").slideDown();
      	$(".extension_2").hide();
      	$(".distension_2").show();
    });

    $(".distension_2").click(function(){
    	$(".extra_p2").slideUp();
    	$(".extension_2").show();
    	$(".distension_2").hide();

    });

//ABOUT

	$(".aside_p2").hide();	
	$(".learn_more").click(function(){
		$(".aside_p2").slideDown();
		$(".learn_more").hide();

    });
    
});