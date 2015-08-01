var Item = require('../models/item');

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
    var product={};
    var pickups = Math.floor((Math.random() * 10) + 1); 
    console.log('number of pickups: '+pickups)
    product.name = name;
    product.producer = producer;
    product.vintage = vintage;
           
    for (i=0;i<pickups;i++){
      arrayofItems.push(product)  
    };

    console.log(arrayofItems);

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
