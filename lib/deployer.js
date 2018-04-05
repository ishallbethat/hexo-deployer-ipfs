var ipfsAPI = require('ipfs-api')
const fs = require('hexo-fs');

exports.addDir= async (args)=>{
  var ipfs = ipfsAPI({host: args.host, port: args.port, protocol: args.protocol});
  if(fs.statSync(args.path).isDirectory()){
    var files=listDir(args.path, null);
    await addFile(ipfs,files);
  }else{
    console.error("ERROR path must be directory."); 
  }
}

function addFile(ipfs,files){
  ipfs.files.add(files, (err, res)=>{
    if(!err){
      console.log(res);
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
