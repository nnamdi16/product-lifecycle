const transfer = require('../../helper/moveProduct/moveProduct');
class Consumer  {
    constructor() {}

    move(state,prop) {
         transfer.moveProduct.moveOutput(state,prop);   
    }
}

module.exports = Consumer;

