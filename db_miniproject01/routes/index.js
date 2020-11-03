const awsSdk = require('aws-sdk');
const util = require('util');
awsSdk.config.update({region : 'us-east-1'});

const dynamoDB = new awsSdk.DynamoDB();


//Haciendo la promesa
const scanDB = util.promisify(dynamoDB.scan).bind(dynamoDB);

/**
 * Scans the query data from the database
 *
 * @return {object} object with json data
 */
//Funcion con Async y Await
async function getScan(params){
    try{
        let scanned = await scanDB(params);
        return scanned.Items;
            
    }catch(err){
        console.log("Error! Kill yourself...", err);
    }
}

var express = require('express');
var router = express.Router();


router.get('/productos', function(req, res, next) {
    const params = {"TableName": 'Products'};
    const db = getScan(params).then(
        function(data){
            res.json({data});
            console.log({data});
        }
    );
    
});

router.get('/transacciones', function(req, res, next) {
    const params = {"TableName": 'Transacciones'};
    const db = getScan(params).then(
        function(data){
            res.json({data});
        }
    );
});

module.exports = router;
