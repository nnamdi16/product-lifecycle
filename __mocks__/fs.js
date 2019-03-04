// const path = require('../product_cycle/app');

// // jest.mock('../product_cycle/data/productFlow.txt','utf8',() => () =>({
   
// // }));

// const fs = jest.mock('fs');
// const output = `Calista Na Product processed from Producer`;
let appendFile = ('/Users/nnamdinwabuokei/Documents/Decagon/Institute/checkpoint/product-lifecycle/product_cycle/data/output-file.txt','\n' + output,(err) => {
    if(err) throw err;
    return output;
});


let readFileSync =('/Users/nnamdinwabuokei/Documents/Decagon/Institute/checkpoint/product-lifecycle/product_cycle/data/productFlow.txt','utf8');


fs.readFileSync = readFileSync;
fs.appendFile = appendFile;

module.exports = fs;



// let mockFiles = Object.create(null);
// function __setMockFiles(newMockFiles) {
//     mockFiles = Object.create(null);
//     for (const file in newMockFiles) {
//         const dir = path.dirname(file);

//         if(!mockFiles[dir]) {
//             mockFiles[dir] = [];
//         }
//         mockFiles[dir].push(path.basename(file));
//     }
// }

// function readdirSync(directoryPath) {
//     return mockFiles[directoryPath] || [];
// }

// fs.__setMockFiles = __setMockFiles;
// fs.readdirSync = readdirSync;

// module.exports = fs;