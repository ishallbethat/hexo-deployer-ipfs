var deployer = require('./lib/deployer.js');
var data={
    path: './README.md',
    port: 5001,
    host: 'localhost',
    protocol: 'http'
};
deployer.addDir(data,function(err,result){
  if(!err){
    console.log(result);
  }else{
    console.error(err);
  }
});
