const fs = require('fs');
const ProductChain = require('../productChain');
const Recycler = require('../recycler/recycler');
const ExecuteOperation = require('../../app');
const Producer = require('../producer/producer');


class Consumer {
    constructor(executeOperation){
        this.executeOperation = executeOperation;
    }
    
    move(prop) {
        let output = `${prop} Product moved from Consumer to Recycler`;
        fs.appendFile('../../../data/output-file.txt','\n' + output,(err) => {
            if(err) throw err;
            console.log(`${prop} Product processed from Consumer!`);
            return;
        });
        // this.executeOperation.nextState(new Recycler(readFile));
        
    }
    
}


module.exports = Consumer;
