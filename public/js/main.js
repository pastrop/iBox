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

//Analytics AJAX calls

$("#analyticsForm").on('submit', function(event) {
    event.preventDefault(); 
    var ID_ = $('#ID').val();
    console.log('var ID_: ',ID_);
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
      var pr_2=0;
      for(i=0; i<totalcount; i++){
        if(items[i].name == 'tinto roriz'){pr_2++}
      };  
      console.log(JSON.stringify(items));
      console.log('total count: '+totalcount+' pr_2: '+pr_2);
//Analytics Graphics

var chartData={
  "type": "bar",
   "scale-x":{
            "values": ["Rioja", "Tinto Roriz", "Chablis", "Rose", "Chardonnay", "Pinot Gris"]
    },
  "series": [
     {"values": [35, 0, 67, 89, 10, 5]} 
//    { "values": [28, 57, 43, 56] }
  ]
};
chartData.series[0].values[1]=pr_2;
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


