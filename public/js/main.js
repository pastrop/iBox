$(document).ready(function(){

//AJAX Call sends all the info about every product effectively seeding the DB, good for simulation NOT production 

$("#knopka_2").on('click', function(event) {
	event.preventDefault();

// Commented out line to be used if the search function is required
/*    var name_ = $('#name').val();
    var producer_ = $('#producer').val();
    var vintage_ = $('#vintage').val();
    var vintage_ = $('#vintage').val();*/

    var name_ = 'tinto roriz';
    var producer_ = 'santa fe';
    var vintage_ = '2010';


    var item = {'name': name_,
                'producer': producer_,
                'vintage' : vintage_};

    $.ajax('/items', { //AJAX call code block
        type: 'POST',
        data: JSON.stringify(item),
        dataType: 'json',
        contentType: 'application/json',
    })
    .done(function(items){
      console.log(JSON.stringify(items));
      if(!item){alert('we have no fucking clue what you are drinking...')}
//      else {window.open('http://localhost:8080/page_2.html');}
  })
    .error(function(){console.log('doesnt fucking work!')});
}); 
//End of the AJAX call code block

})
