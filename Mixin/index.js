class Dog {
    name;

    constructor(name) {
        this.name = name;
    }
}

const dogFunctionality = {
    bark: () => console.log('Woof!'),
    wagTail: () => console.log('Waging my tail!'),
    play: () => console.log('Playing!')
}

Object.assign(Dog.prototype, dogFunctionality);

const pet1 = new Dog('Daisy');
console.log('Name: ', pet1.name)
pet1.bark();
pet1.play();
pet1.wagTail();