var ipfsAPI = require('ipfs-api')
const fs = require('hexo-fs');

module.exports = async (args)=>{
  if(args.type != 'ipfs'){
    return;
  }
  if (!args.host || !args.port || !args.protocol || !args.path || !args.key) {
    console.log("args ="+args);
    console.log("[WARN] one of arguments [host,port,protocol,path,key] is null or undefined, not overriding with defaults");
    args.host="localhost";
    args.port=5001;
    args.protocol="http";
    args.path="public";
    args.key="self"
  }
  if(fs.statSync(args.path).isDirectory()){
    var ipfs = ipfsAPI({host: args.host, port: args.port, protocol: args.protocol});
    var files=listDir(args.path, null);
    await addFile(ipfs,files, args);
  }else{
    return;
  }
}

function addFile(ipfs,files, args){
  ipfs.files.add(files, (err, res)=>{
    if(!err){
      console.log(args);
      addr=res[res.length-1]['hash'];
      ipfs.name.publish(addr, { key: args.key}, function (err, res) {
        if(!err){
          console.log(`https://dweb.link/ipns/${res.name}`)
          console.log(`https://localhost:8080/ipns/${res.name}`)
        }else{
          console.error(err)
        }
      });
      return res;
    }else{
      console.error(err);
    }
  })
}

function listDir(dir,filelist) {
  var path = path || require('path');
  var fs = fs || require('fs'),
      files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
      if (fs.statSync(path.join(dir, file)).isDirectory()) {
          filelist = listDir(path.join(dir, file), filelist);
      }else {
        var content={
          path: path.join(dir, file), // The file path
          content: fs.readFileSync(path.join(dir, file)) // A Buffer, Readable Stream or Pull Stream with the contents of the file
        }
          filelist.push(content);
      }
  });
  return filelist;
};
