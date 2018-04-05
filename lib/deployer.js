'use strict';

var ipfsAPI = require('ipfs-api'),
    fs = require('hexo-fs');

module.exports = function (args) {
  return new Promise(function(resolve,reject){
      try {
        if(!args.host || !args.port || !args.protocol || !args.path ){
          console.error(args.host);
          reject("host,port,protocol and path should be set");
        }else{
          var ipfs = ipfsAPI({host: args.host, port: args.port, protocol: args.protocol});
          var content=fs.readFileSync();
          ipfs.add(content, function (err, files) {
               if (err || typeof files == "undefined") {
                  reject(err);
               } else {
                  resolve(files[0].hash);
               }
           });
        }
      }catch(ex) {
          reject(ex);
      }
  })
}
 //
 // ipfs.get(hash,function (err,files) {
 //     if (err || typeof files == "undefined") {
 //         console.log(err);
 //     } else {
 //         console.log(files);
 //     }
 // })
