const main = require('../../main');
class ProductChainFactory {
    constructor() {
        this.objConstructors = {};
    }
    register(state, constructor) {
        this.objConstructors[state] = constructor;
    }

    getProductLink(state) {
        let objConstructor = this.objConstructors[state];
        let member;
        if (objConstructor){
            member = new objConstructor();
            return member;
        } 
        
    }
    

    getNextProductLink(obj, state) {
        obj = this.objConstructors;
        let objLength = Object.keys(obj).length;
        let keys = Object.keys(obj),
        index = keys.indexOf(state), nextState,nextStateClass;
        if (index !== -1 && index < objLength - 1 ) {
            nextState = (keys[index + 1]);
            nextStateClass = (obj[keys[index + 1]]);
            return [nextState,nextStateClass];
        } else {
            nextState= keys[0];
            nextStateClass = obj[keys[0]];
            return [nextState,nextStateClass];
        }


    }
}
//Instantiated the productChain Factory that generates objects depending on the state change category.
const productChainFactory = new ProductChainFactory();


//Register the various state class category.
productChainFactory.register('Producer', main.Producer);
productChainFactory.register('Retailer', main.Retailer);
productChainFactory.register('Consumer', main.Consumer);
productChainFactory.register('Recycler', main.Recycler);

// let output =productChainFactory.getProductLink('Producer');
// console.log(output);

module.exports.productChainFactory = productChainFactory;
module.exports.ProductChainFactory = ProductChainFactory;
