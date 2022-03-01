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

/*
Add new functionality to the Dog as an animal
*/
const animalFunctionality = {
    walk: () => console.log('Walking!'),
    sleep: () => console.log('Sleeping')
}

const newDogFunctionality = {
    __proto__: animalFunctionality,
    bark: () => console.log('Woof!'),
    wagTail: () => console.log('Waging my tail!'),
    play: () => console.log('Playing!'),
    walk() {
        super.walk();
    },
    sleep() {
        super.sleep()
    }
}

Object.assign(newDogFunctionality, animalFunctionality);
Object.assign(Dog.prototype, newDogFunctionality)

const pet2 = new Dog('Bowel');
pet2.walk()