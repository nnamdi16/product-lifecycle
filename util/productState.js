
class ProductState {
    constructor(product) {
        this.states = [new ProducerState(), new RetailerState(), new ConsumerState(), new RecyclerState()];
        this.product = product;
        this.current = this.states[0];
    }

    change() {
        const totalStates = this.states.length;
        let currentIndex = this.states.findIndex(position => position === this.current);
        if (currentIndex + 1 < totalStates) this.current = this.states[currentIndex + 1];
        else this.current = this.states[0];
    }

    productMove() {
        return this.current.productMove();
    }
}

class Position {
    constructor(position) {
        this.position = position;
    }
}

class ProducerState extends Position {
    constructor() {
        super('producer');
    }

    productMove() {
        console.log('Moved good to the producer');
    }
}

class RetailerState extends Position {
    constructor() {
        super('retailer');
    }

    productMove() {
        return 'Moved good to the Retailer';
    }
}

class ConsumerState extends Position {
    constructor() {
        super('consumer');
    }

    productMove() {
        return 'Moved good to the Consumer';
    }
}

class RecyclerState extends Position {
    constructor() {
        super('recycler');
    }

    productMove() {
        return 'Moved good to the Recycler';
    }
}

// const productState = new ProductState();
// console.log('productState: ', productState);

// console.log(productState.productMove());
// productState.change();
// // productState.change();
// console.log(productState.productMove());

module.exports = ProductState;

// productState:  ProductState {
//     states:
//      [ PendingState { position: 'pending' },
//        ResolvedState { position: 'resolved' } ],
//     current: PendingState { position: 'pending' } }
