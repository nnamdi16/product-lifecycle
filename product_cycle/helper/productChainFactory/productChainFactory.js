//Import producer, retailer, consumer and recycler classes.
const main = require('../../main');

//ProductChainFactory class used for creating productLink classes
class ProductChainFactory {
    constructor() {
        this.objConstructors = {}; //Object that stores the registered classes
    }
    register(state, constructor) {
        this.objConstructors[state] = constructor; //Registering the ProductLink classes depending using the name of the class as the key.
    }

//getProductLink method is used to create an instance of the class on request.    
    getProductLink(state) {
        let objConstructor = this.objConstructors[state];
        if (objConstructor) return new objConstructor();
    }

//getNextProductLink method is used to get the next state and create the instance of the next state.
    getNextProductLink(obj, state) {
        obj = this.objConstructors;
        let objLength = Object.keys(obj).length; //determining the length of the object that stores the various productLinks
        let keys = Object.keys(obj), // determine the name of the productLink class.
            index = keys.indexOf(state), // determines if the productLink class exist.
            nextState, nextStateClass;

        //Set the states to the next state if the previous state exist
        if (index !== -1 && index < objLength - 1) {
            nextState = (keys[index + 1]);
            nextStateClass = (obj[keys[index + 1]]);
            return [nextState, nextStateClass];
        } else {
            //Reverts the next state for previous state whose length is greater than objLength-1 to the first state.
            nextState = keys[0];
            nextStateClass = obj[keys[0]];
            return [nextState, nextStateClass];
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