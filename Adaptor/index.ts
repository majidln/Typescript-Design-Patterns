interface Duck {
    quack: () => void;
    fly: () => void;
}

interface Turkey {
    gobble: () => void;
    fly: () => void;
} 

// We want to create an adaptor to make a Turkey as a Duck!!!

class MallardDuck implements Duck {
    public quack() {
        console.log('quack quack');
    }
    
    public fly() {
        console.log('fling');
    }
}

class WildTurkey implements Turkey {
    public gobble() {
        console.log('gobble')
    }
    
    public fly() {
        console.log('fling');
    }
}

class TurkeyAdaptor implements Duck {
    private turkey: Turkey;

    constructor(turkey: Turkey) {
        this.turkey = turkey
    }

    public quack() {
        this.turkey.gobble();
    }
    
    public fly() {
        this.turkey.fly();
    }
}

const mallardDuck = new MallardDuck();
mallardDuck.fly();
mallardDuck.quack();

const wildTurkey = new WildTurkey();
wildTurkey.fly();
wildTurkey.gobble();

const turkeyAdaptor = new TurkeyAdaptor(wildTurkey);
turkeyAdaptor.fly();
turkeyAdaptor.quack()