const transfer = require('../../helper/moveProduct/moveProduct');
const observer = require('../../helper/observable/observable').observer;
class Retailer {

  move (state, prop) {
    transfer.moveProduct.moveOutput(state, prop, observer.write)
  }
}

module.exports = Retailer;
