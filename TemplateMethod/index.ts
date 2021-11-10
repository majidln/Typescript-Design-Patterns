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

class ConcreteClass extends AbstractClass {
    public primitiveOperation1() {
        console.log('ConcreteClass Operation 1 done')
    }
    public primitiveOperation2() {
        console.log('ConcreteClass Operation 2 done')
    }
}

const concrete = new ConcreteClass();
concrete.template()