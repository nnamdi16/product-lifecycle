class productChainFactory {
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

module.exports = productChainFactory;