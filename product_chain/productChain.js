class ProductChain {
    constructor(product) {
        this.product = product;
    }
    createProductChannel(type) {
        let productChannel;
        if (type === "Producer") {
            productChannel = new Producer();
        } else if (type === "Retailer") {
            productChannel = new Retailer();
        } else if (type === "Consumer") {
            productChannel = new Consumer();
        } else if (type === "Recycler") {
            productChannel = new Recycler();
        }

        // productChannel.type = type;

        return productChannel;


    }
}

let producer = new ProductChain();
let firstProducer = producer.createProductChannel({
    type: "Producer"
});

console.log(firstProducer instanceof ProductChain);

module.exports = ProductChain;