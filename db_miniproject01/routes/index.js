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
        console.log("Error! Something went wrong", err);
    }
}

var docClient = new awsSdk.DynamoDB.DocumentClient();
var tableProducts = "Products";

function purchase(productID, n){
    try{
        var params = {
          TableName: tableProducts,
          Key:{"ProductID": Number(productID)},
          UpdateExpression: "set Stock = Stock - :val",
          ExpressionAttributeValues:{
              ":val":  Number(n)
          },
          ReturnValues:"UPDATED_NEW"
        };
      
        docClient.update(params, function(err, data) {
          if (err) {
              console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
          } else {
              console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
          }
        });
    }catch(err){
        console.log("Error! Something went wrong", err);
    }
}

function addStock(productID, n){
  try{
      var params = {
        TableName: tableProducts,
        Key:{"ProductID": Number(productID)},
        UpdateExpression: "set Stock = Stock + :val",
        ExpressionAttributeValues:{
            ":val":  Number(n)
        },
        ReturnValues:"UPDATED_NEW"
      };
    
      docClient.update(params, function(err, data) {
        if (err) {
            console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
        }
      });
  }catch(err){
      console.log("Error! Something went wrong", err);
  }
}

var express = require('express');
var router = express.Router();


router.get('/productos', function(req, res, next) {
    const TableName = 'Products'
    const params = {TableName};
    const db = getScan(params).then(
        function(data){
            res.json({data});
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



router.get('/write/:p1?/:p2?/:p3?/:p4?/:p5?', (req, res) => {
  const p1 = Number(req.params.p1);
  const p2 = Number(req.params.p2);
  const p3 = Number(req.params.p3);
  const p4 = Number(req.params.p4);
  const p5 = Number(req.params.p5);
  
  if(p1>0){
      purchase(1, p1);
  }
  if(p2>0){
      purchase(2, p2);
  }
  if(p3>0){
      purchase(3, p3);
  }
  if(p4>0){
      purchase(4, p4);
  }
  if(p5>0){
      purchase(5, p5);
  }
  
});

router.get('/add/:p1?/:p2?/:p3?/:p4?/:p5?', (req, res) => {
  const p1 = Number(req.params.p1);
  const p2 = Number(req.params.p2);
  const p3 = Number(req.params.p3);
  const p4 = Number(req.params.p4);
  const p5 = Number(req.params.p5);
  
  if(p1>0){
      actualizarStock(1, p1);
  }
  if(p2>0){
    actualizarStock(2, p2);
  }
  if(p3>0){
    actualizarStock(3, p3);
  }
  if(p4>0){
    actualizarStock(4, p4);
  }
  if(p5>0){
    actualizarStock(5, p5);
  }
  
});

module.exports = router;
