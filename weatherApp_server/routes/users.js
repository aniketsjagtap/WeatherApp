var express = require('express');
var router = express.Router();
var http = require('http');
var Client = require('node-rest-client').Client;
var cors = require('cors');

var url = require('url');

router.use(cors({origin:true,credentials: true}));
 
var client = new Client();

/* GET users listing. */
router.get('/', function(req, res, next) {
   var q = url.parse(req.url, true);
   // console.log(q);
    var cityCode = q.query.city;
    console.log(cityCode);
//client.get("http://dataservice.accuweather.com/currentconditions/v1/204842?apikey=WhQUAggxFC6TmDTweBYDlAlGvioNdOVx&details=false ", function (data, response) {
client.get("http://dataservice.accuweather.com/currentconditions/v1/"+cityCode+"?apikey=a9cQnrwtAwi18zRN0NVCmJ016ebz5j7O&details=false ", function (data, response) {
  
// parsed response body as js object 
   
    //console.log(data);
    // raw response 
  //  console.log(response);
    console.log('STATUS: ' + response.statusCode);
   // console.log('HEADERS: ' + JSON.stringify(response.headers));
   console.log(JSON.stringify(data));
   res.status(response.statusCode);
    res.send( data);
});
//res.send( "hii");

});












module.exports = router;
