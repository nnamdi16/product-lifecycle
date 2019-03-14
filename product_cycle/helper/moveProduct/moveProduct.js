// Import fs and instance of productChainFactory
const fs = require('fs');
const factory = require('../productChainFactory/productChainFactory');

// Create a MoveProduct class that moves the product from one state to the other
class MoveProduct {
  // moveOutput method that appends the product to the output file
  async moveOutput (state, prop, url) {
    let result = factory.productChainFactory.getNextProductLink(
      super.productChainFactory,
      state
    );
    let output = `${prop} Product moved from ${state} to ${result[0]}`;

    await fs.appendFile(url, '\n' + output, err => {
      // Appends the product to the output file
      if (err) throw err;
      console.log(output);
      let nextState = factory.productChainFactory.getProductLink(result[0]); // Moves product to the next state
      nextState.move(result[0], prop);
    });
  }
}
// Create an instance of the class
const moveProduct = new MoveProduct();

// Export the moveProduct instance and MoveProduct Class
module.exports.moveProduct = moveProduct;
module.exports.MoveProduct = MoveProduct;
