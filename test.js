var deployer = require('./lib/deployer.js');
var data={
    path: './README.md',
    port: 5001,
    host: 'localhost',
    protocol: 'http'
};
deployer(data).then(function(err,result){
  if(!err){
    console.log(result);
  }else{
    console.error(err);
  }
});
