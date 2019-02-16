class ProductChain {
    constructor(product) {
        this.product = product;
    }
    createProductChannel(){
            const productChannel = this.makeChannel();
            productChannel.createChannel();
    }

    moveProduct () {
        return this.product;
    }


}
const productChain = new ProductChain('Calista Na');
console.log(productChain)
// module.exports = ProductManager;
module.exports = ProductChain;