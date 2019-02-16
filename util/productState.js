class ProductState {
    constructor() {
        this.states = [new ProducerState(), new RetailerState(), new ConsumerState(), new RecyclerState()];
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
        super('pending');
    }

    productMove() {
        return 'PENDING';
    }
}

class RetailerState extends Position {
    constructor() {
        super('resolved');
    }

    productMove() {
        return 'RESOLVED';
    }
}

class ConsumerState extends Position {
    constructor() {
        super('resolved');
    }

    productMove() {
        return 'RESOLVED';
    }
}

class RecyclerState extends Position {
    constructor() {
        super('resolved');
    }

    productMove() {
        return 'RESOLVED';
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
