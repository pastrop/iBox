$(document).ready(function(){

//AJAX Code Block for the store front
//Sends all the info about every product effectively seeding the DB, good for simulation NOT production 

//Code Block for the 1st Product - Store-Front Page
$("#knopka_1").on('click', function(event) {
  event.preventDefault();

    var name_ = 'Rioja';
    var producer_ = 'Luis Alegre';
    var vintage_ = '2012';
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
  })
    .error(function(){console.log('doesnt fucking work!')});
}); 
//End of the AJAX call code block

//Code Block for the 2nd Product - Store-Front Page
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

//Code Block for the 3rd Product - Store-Front Page
$("#knopka_3").on('click', function(event) {
  event.preventDefault();

    var name_ = 'Chablis';
    var producer_ = 'Gilbert Pico';
    var vintage_ = '2011';
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
  })
    .error(function(){console.log('doesnt fucking work!')});
}); 
//End of the AJAX call code block

//Code Block for the 4th Product - Store-Front Page
$("#knopka_4").on('click', function(event) {
  event.preventDefault();

    var name_ = 'Rose';
    var producer_ = 'Cibonne';
    var vintage_ = '2009';
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
  })
    .error(function(){console.log('doesnt fucking work!')});
}); 
//End of the AJAX call code block

//Code Block for the 5th Product - Store-Front Page
$("#knopka_5").on('click', function(event) {
  event.preventDefault();

    var name_ = 'Chardonnay';
    var producer_ = 'Goisot';
    var vintage_ = '2013';
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
  })
    .error(function(){console.log('doesnt fucking work!')});
}); 
//End of the AJAX call code block

//Code Block for the 6th Product - Store-Front Page
$("#knopka_6").on('click', function(event) {
  event.preventDefault();

    var name_ = 'Pinot Gris';
    var producer_ = 'Reuilly';
    var vintage_ = '2012';
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
  })
    .error(function(){console.log('doesnt fucking work!')});
}); 
//End of the AJAX call code block

//Analytics AJAX calls

$("#analyticsForm").on('submit', function(event) {
    event.preventDefault(); 
    var ID_ = $('#ID').val();
    console.log('var ID_: ',ID_);
    // Only StoreID is currently used for the Analytics, the rest is placeholders
    var name_ = 'tinto roriz';
    var producer_ = 'santa fe';
    var vintage_ = '2010';
    var storeID_=ID_;


    var item = {'name': name_,
                'producer': producer_,
                'vintage' : vintage_,
                'storeID' : storeID_};

    $.ajax('/items_analytics', { //AJAX call code block
        type: 'POST',
        data: JSON.stringify(item),
        dataType: 'json',
        contentType: 'application/json',
    })
    .done(function(items){
      var totalcount=items.length;
      var pr_1=0;
      var pr_2=0;
      var pr_3=0;
      var pr_4=0;
      var pr_5=0;
      var pr_6=0;
      for(i=0; i<totalcount; i++){
        //Jerry-rigged code to be refactored
        if(items[i].name == 'Rioja'){pr_1++};
        if(items[i].name == 'tinto roriz'){pr_2++};
        if(items[i].name == 'Chablis'){pr_3++};
        if(items[i].name == 'Rose'){pr_4++};
        if(items[i].name == 'Chardonnay'){pr_5++};
        if(items[i].name == 'Pinot Gris'){pr_6++};
      };  
      console.log(JSON.stringify(items));
      console.log('total count: '+totalcount+' pr_1: '+pr_1);
//Analytics Graphics

var chartData={
  "type": "bar",
   "scale-x":{
            "values": ["Rioja", "Tinto Roriz", "Chablis", "Rose", "Chardonnay", "Pinot Gris"]
    },
  "series": [
     {"values": [0, 0, 0, 0, 0, 0]} 
//    { "values": [28, 57, 43, 56] }
  ]
};
//Jerry-rigged code to be refactored
chartData.series[0].values[0]=pr_1;
chartData.series[0].values[1]=pr_2;
chartData.series[0].values[2]=pr_3;
chartData.series[0].values[3]=pr_4;
chartData.series[0].values[4]=pr_5;
chartData.series[0].values[5]=pr_6;
console.log('checking chartData: '+chartData.series[0].values[0]);
//window.onload=function(){
  zingchart.render({
    id:'chartDiv',
    height:400,
    width:1200,
    data:chartData
  });
//};
//End of the Analytics Graphics
  })
    .error(function(){console.log('doesnt fucking work!')});
}); //End of the AJAX code block




/*//Analytics Graphics

var chartData={
  "type": "bar",
   "scale-x":{
            "values": ["Rioja", "Tinto Roriz", "Chablis", "Rose", "Chardonnay", "Pinot Gris"]
    },
  "series": [
     {"values": [35, 42, 67, 89, 10, 5]} 
//    { "values": [28, 57, 43, 56] }
  ]
};
console.log('checking chartData: '+chartData.series[0].values[0]);
window.onload=function(){
  zingchart.render({
    id:'chartDiv',
    height:400,
    width:1200,
    data:chartData
  });
};
//End of the Analytics Graphics*/

}); 


