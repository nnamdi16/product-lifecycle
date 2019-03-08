const transfer = require('../../helper/moveProduct/moveProduct');
class Retailer  {
    constructor() {}

    move(state,prop) {
        
        transfer.moveProduct.moveOutput(state,prop);
       
    }

}


module.exports = Retailer;

