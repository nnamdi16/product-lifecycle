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

const productChainFactory = new ProductChainFactory();
class Producer{
    
}
productChainFactory.register('Producer',Producer);
productChainFactory.getProductLink('Producer');

console.log(productChainFactory);
module.exports = ProductChainFactory;