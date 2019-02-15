class ProductChain {
    constructor(product) {
        this.product = product;
    }
    createProductChannel(){
            const productChannel = this.makeChannel();
            productChannel.createChannel();
    }


}

// module.exports = ProductManager;
module.exports = ProductChain;