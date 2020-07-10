var deployer = require('./lib/deployer.js');
var data={
    path: 'lib',
    port: 5001,
    host: 'localhost',
    protocol: 'http',
    type: 'ipfs',
    key: "self"
};
deployer(data);
// deployer.addDir({type: "ipfs"},function(err,result){
//   if(!err){
//     console.log(result);
//   }else{
//     console.error(err);
//   }
// });
// deployer.addDir(null,function(err,result){
//   if(!err){
//     console.log(result);
//   }else{
//     console.error(err);
//   }
// });
// deployer.addDir({},function(err,result){
//   if(!err){
//     console.log(result);
//   }else{
//     console.error(err);
//   }
// });
