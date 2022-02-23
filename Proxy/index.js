const person = {
    name: 'Jhon Doe',
    age: 42,
    nationality: 'American'
}

const personProxy = new Proxy(person, {
    get: (obj, prop) => {
        if (!obj[prop]) {
            console.log('This property doesn\'n exist in the object')
        } else {
            console.log(`${prop} is: ${obj[prop]}`)
        }
    },
    set: (obj, prop, value) => {
        if (prop === 'age' && typeof value !== "number") {
            console.log('age property should be a number')
        } else if (prop === 'name' && value.length < 2) {
            console.log('name should be at least 2 characters');
        } else {
            console.log(`Set ${prop} from ${obj[prop]} to ${value}`)
            obj[prop] = value
        }
    }
})

personProxy.name;
personProxy.age;
personProxy.name = "Haji Majid"

personProxy.address;
personProxy.name = "A"
personProxy.age = '3';
