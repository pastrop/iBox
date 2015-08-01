$(document).ready(function(){
$(".btn.btn-success, .btn.btn-default").on('click', function(){
	if($('.form-control-email').val() && $('.form-control-pwd').val() ){
		alert('yo homie, come on over get some booze!');
	    window.open('page_1.html')}
	else{alert('No way Jose, no password, no booze...')};
});
$("#modal").on('click', function(){
  $("#dialog").dialog({
				autoOpen: false,
			    width: 400,
			    height:200,
			    modal: true,
			});
  $("#dialog").dialog("open");
  $("#dialog").text("Tired of reading crap about hints of cedar acentuated by subtle fruit being supported by soft tanins while picking a wine?  We too, this is a service for people who just want to drink what they actually like drinking.  We help people to find wine they like... ");
});

$("#knopka_1").on('click', function(){
  $("#dialog").dialog({
				autoOpen: false,
			    width: 400,
			    modal: true
			});

  $("#dialog").dialog("open");
  $("#dialog").text("Well, this is just a mockup... Upon clicking on Get It! You'll get the same page as the one you are looking at.");
});

$("#youtube").on('click', function(){
$('#video').show();
});
})
