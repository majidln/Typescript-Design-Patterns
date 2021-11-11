abstract class AbstractClass {
    template() {
        this.operation1();
        
        this.primitiveOperation1();
        
        this.operation2();

        this.primitiveOperation2()
    }

    protected abstract primitiveOperation1 ();

    protected abstract primitiveOperation2 ();

    private operation1 () {
        console.log('Operation 1 done')
    }

    private operation2 () {
        console.log('Operation 2 done')
    }
}

class ConcreteClass1 extends AbstractClass {
    public primitiveOperation1() {
        console.log('ConcreteClass Operation 1 done')
    }
    public primitiveOperation2() {
        console.log('ConcreteClass Operation 2 done')
    }
}

class ConcreteClass2 extends AbstractClass {
    public primitiveOperation1() {
        console.log('ConcreteClass 2 Operation 1 done')
    }
    public primitiveOperation2() {
        console.log('ConcreteClass 2 Operation 2 done')
    }
}

const concrete = new ConcreteClass1();
concrete.template()

const concrete2 = new ConcreteClass2();
concrete2.template()