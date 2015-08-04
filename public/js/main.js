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
//    console.log('var ID_: ',ID_);
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
      var pr_1=[];
      var pr_2=[];
      var pr_3=[];
      var pr_4=[];
      var pr_5=[];
      var pr_6=[];
      for (j=0; j<30; j++){
        pr_1[j]=pr_2[j]=pr_3[j]=pr_4[j]=pr_5[j]=pr_6[j]=0;
//        var day = Math.floor((Math.random() * 29) + 1);
//        console.log('random day: '+day);
      };
       for(i=0; i<totalcount; i++){
        //Jerry-rigged code to be refactored
        var day = Math.floor((Math.random() * 30));
        if(items[i].name == 'Rioja'){pr_1[day]++};
        if(items[i].name == 'tinto roriz'){pr_2[day]++};
        if(items[i].name == 'Chablis'){pr_3[day]++};
        if(items[i].name == 'Rose'){pr_4[day]++};
        if(items[i].name == 'Chardonnay'){pr_5[day]++};
        if(items[i].name == 'Pinot Gris'){pr_6[day]++};
       };  

      console.log(JSON.stringify(items));
     console.log('total count: '+totalcount+' pr_1: '+pr_1);
     console.log('total count: '+totalcount+' pr_2: '+pr_2);
     console.log('total count: '+totalcount+' pr_3: '+pr_3);
     console.log('total count: '+totalcount+' pr_4: '+pr_4);
     console.log('total count: '+totalcount+' pr_5: '+pr_5);
     console.log('total count: '+totalcount+' pr_6: '+pr_6);
//Analytics Graphics

var chartData={
  "type": "bar",
    "legend":{  
  },
//   "scale-x":{
//            "values": ["Rioja", "Tinto Roriz", "Chablis", "Rose", "Chardonnay", "Pinot Gris"]
//    },
  "series": [
     {"values":  [0, 0, 0, 0, 0, 0],
       "text": "Rioja" }, 
     { "values": [2, 5, 4, 5, 1, 2],
        "text": "Tinto Roriz" },
     { "values": [8, 7, 3, 6, 2, 1],
        "text": "Chablis" },
     { "values": [2, 3, 1, 2, 4, 3],
        "text": "Rose" },
     { "values": [1, 3, 5, 6, 5, 1],
       "text": "Chardonnay" },
     { "values": [0, 3, 2, 5, 4, 4],
        "text": "Pinot Gris" }
  ]
};
//Jerry-rigged code to be refactored
for(i=0; i<30; i++){
chartData.series[0].values[i]=pr_1[i];
chartData.series[1].values[i]=pr_2[i];
chartData.series[2].values[i]=pr_3[i];
chartData.series[3].values[i]=pr_4[i];
chartData.series[4].values[i]=pr_5[i];
chartData.series[5].values[i]=pr_6[i];
};
//console.log('checking chartData: '+chartData.series[0].values[0]);
//window.onload=function(){
  zingchart.render({
    id:'chartDiv',
    height:500,
    width:1100,
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


