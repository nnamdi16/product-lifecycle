let db = {};

let appendFile =  (filePath,data,callback) => {
    if(!callback) throw new Error('Callback Unavailable');
    if(!db[filePath]) {
        db[filePath] = data;
    } else{
        db[filePath] = db[filePath] + data;
    }
    let err;
    callback(err);
};


let unlinkSync = (filePath) => {
    if (!db[filePath]) {
          throw new Error('File to Unlink Unavailable');
      } else {
          delete db[filePath];
    }
  
  };
  
  let readFileSync = (filePath, option) => {
    if (!db[filePath]) {
          throw new Error('File to read Unavailable');
      } else {
          return db[filePath];
    }
  };
  
  exports.appendFile = appendFile;
  exports.unlinkSync = unlinkSync;
  exports.readFileSync = readFileSync;
