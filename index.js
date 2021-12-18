var express = require('express');
var path = require('path')
var app = express();
app.use(express.json())
app.get('/', function(req, res){
   res.sendFile(path.join(__dirname, '/index.html'));
});
app.get('/css', function(req, res){
   res.sendFile(path.join(__dirname, '/index.css'));
});
app.get('/js', function(req,res) {
  res.sendFile(path.join(__dirname, '/front.js'))
})



app.post('/spam', function (req,res) {
const { Worker, isMainThread, parentPort } = require('worker_threads')
  // Receive messages from the worker thread
  
    let body = req.body
    const worker = new Worker(path.join(__dirname,"/worker.js"),{workerData:{bdy:body}});
      worker.once('message', (message) => {
    console.log(message + ' received from the worker thread!'); }) 
    
    
      
      
      res.status(200).send({"message:":"request received"})
      console.log("b")
      console.log(typeof body)
      

    
  });// Send a ping message to the spawned worker thread 



app.listen(3001)
