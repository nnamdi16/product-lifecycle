const fs = require('fs');
const transfer = require('../helper/moveProduct/moveProduct');
class Recycler {
    constructor() {}

    move(state, prop) {
        transfer.moveProduct.moveOutput(state, prop);
    }


}


module.exports = Recycler;