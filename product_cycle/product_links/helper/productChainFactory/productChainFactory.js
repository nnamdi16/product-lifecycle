const main = require('../../../main');
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
        if (objConstructor) member = new objConstructor();
        return member;
    }

    getNextProductLink(obj, state) {
        obj = this.objConstructors;
        let objLength = Object.keys(obj).length;
        let keys = Object.keys(obj),
        index = keys.indexOf(state), nextState,nextStateClass;
        // console.log('Index',index);
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
// console.log('ProductChain Factory',productChainFactory);
// let check = productChainFactory.getProductLink('Recycler');
// console.log('Check',check);
// let result = productChainFactory.getNextProductLink(productChainFactory, 'Recycler');
// console.log('Result',result);
// // console.log('Result[0]',result[0]);
// console.log(result[0]);
// console.log(result[1]);
module.exports.productChainFactory = productChainFactory;
// console.log(module.exports.productChainFactory);
module.exports.ProductChainFactory = ProductChainFactory;
// console.log(module.exports.ProductChainFactory);