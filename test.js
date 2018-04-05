var deployer = require('./lib/deployer.js');
// var data={
//     path: 'folder',
//     port: 5001,
//     host: 'localhost',
//     protocol: 'http'
// };
// deployer.addDir(data,function(err,result){
//   if(!err){
//     console.log(result);
//   }else{
//     console.error(err);
//   }
// });
deployer.addDir(null,function(err,result){
  if(!err){
    console.log(result);
  }else{
    console.error(err);
  }
});
