const main = require('../../../main');
class ProductChainFactory {
    constructor() {
        this.objConstructors = {};
    }
    register(state,constructor) {
        this.objConstructors[state] = constructor;
    }

    getProductLink(state) {
        let objConstructor = this.objConstructors[state];
        let member;
        if(objConstructor) member = new objConstructor();
        return member;
    }
}
//Instantiated the productChain Factory that generates objects depending on the state change category.
const productChainFactory = new ProductChainFactory();


//Register the various state class category.
productChainFactory.register('Producer',main.Producer);
productChainFactory.register('Retailer',main.Retailer);
productChainFactory.register('Consumer',main.Consumer);
productChainFactory.register('Recycler',main.Recycler);
// console.log(productChainFactory);

module.exports.productChainFactory = productChainFactory;
module.exports.ProductChainFactory = ProductChainFactory;
