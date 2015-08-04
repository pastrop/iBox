var Item = require('../models/item');
//Production Functionality Placeholder
exports.save = function(name, producer, vintage, callback, errback) {
    var search=name;
    var result;

    Item.findOne({name: search}, function (err,item){
            if (err) {
            errback(err);
            return;
            }
            else{
                console.log("printout in services.items save function:"+item);
                if(!item){

                Item.create({ name: name, producer: producer, vintage: vintage }, function(err, item) {
                    if (err) {
                    errback(err);
                    return;
                    }
//                console.log("item module in services: saved "+"name: "+item.name+" _id: "+item._id + "producer: "+item.producer+"vintage: "+item.vintage);
//                callback(item);
                });
                }
                callback(item);
        }      
    });

};

// Simulator functionality, loading the DB
exports.bulk = function(name, producer, vintage, callback, errback) {
    var arrayofItems=[];
    var activeStores=[];
    var count = 0;
    for (j=0;j<300;j++){ //Looping through a total number of stores
      var id= Math.floor((Math.random() * 300) + 1); //Active stores ID 
      activeStores.push(id);  
    };
    console.log('Item.js-services printout: activeStores: '+activeStores);

    
    for(j=0; j<activeStores.length; j++){      
        var pickups = Math.floor((Math.random() * 5) + 1); //number of Item pickups in a given store    
        for (i=count;i<pickups+count;i++){          
          arrayofItems.push({name: name, producer: producer, vintage: vintage, storeID: activeStores[j]});  
//          console.log('i: '+i+'item: '+arrayofItems[i].name+' '+arrayofItems[i].producer+' '+arrayofItems[i].storeID);  
        };   
        count=count+pickups;
    };
    console.log("# of Docs to insert: "+count)

    function onBulkInsert(err, items) {
     if (err) {
        return console.log('ERROR!');
     }
     else {
        console.log('Documents were inserted!')
     }
    };

    Item.create(arrayofItems, onBulkInsert);
   callback('stuff happened'); 
};

//Analytics Handle
exports.list = function(name, producer, vintage, storeID, callback, errback) {
//    console.log("Analytics section entry "+storeID);
    Item.find({storeID: storeID},function(err, items) {
        if (err) {
            errback(err);
            return;
        }
//        console.log(items);
        callback(items);
    });
};