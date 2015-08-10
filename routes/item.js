var express = require('express');
var Item = require('../services/item');
var router = express.Router();

//Analytics Handle
//Individual store related
router.post('/items_analytics', function(req, res) {
//    console.log("Analytics Handle in routes.js: "+ req.body.storeID);
    Item.list(req.body.name, req.body.producer, req.body.vintage, req.body.storeID, function(items) {        
        res.json(items);       
    }, function(err) {
        res.status(400).json(err);
    });
});
//Entire datastore less than 200,0000 entries
router.get('/items_analytics', function(req, res) {
    Item.fetch(function(items) {
        res.json(items);
        console.log('fetch function in routes');
    }, function(err) {
        res.status(400).json(err);
    });
});
//Entire datastore - Paginated
router.post('/items_analytics_page', function(req, res) {
    console.log("/items_analytics_page in routes.js: "+ req.body.storeID_l+" "+req.body.storeID_h);
    Item.pagefetch(req.body.storeID_l, req.body.storeID_h, function(items) {        
        res.json(items);       
    }, function(err) {
        res.status(400).json(err);
    });
});




//Database loading handle
router.post('/items', function(req, res) {

/*    Item.listone(req.body.name, function(item) {
        console.log("item exist: "+item.name)
        res.status(204).json(item);},
        function(err) {
        res.status(400).json(err);
    });*/

    Item.bulk(req.body.name, req.body.producer, req.body.vintage, function(items) {
        res.status(201).json(items);
    }, function(err) {        
        res.status(400).json(err);    
    });
});



/*
//Placeholders for more request
router.delete('/items/:id', function(req, res) {
//    console.log("router delete endpoint "+req.params.name);
    Item.listone(req.params.id, function(item) {
        res.status(204).json(item);
    }, function(err) {
        res.status(400).json(err);
    });
});

router.put('/items/:id', function(req, res) {
    console.log("Put request called");
    Item.change(req.params.id,req.body.name, function(item) {
        res.status(204).json(item);
    }, function(err) {
        res.status(400).json(err);
    });
});

*/
module.exports = router;