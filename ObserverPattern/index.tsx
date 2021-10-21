interface IObserver {
    update: (humidity: number, temperature: number) => void;
}

interface IObservable {
    register: (subscriber: IObserver) => void;
    remove: (subscriber: IObserver) => void;
    notify: () => void;
}

class MobileDisplay implements IObserver {
    public update(humidity: number, temperature: number) {
        console.log(`humidity: ${humidity}, temperature: ${temperature} in mobile screen`);
    }
}

class MonitorDisplay implements IObserver {
    public update(humidity: number, temperature: number) {
        console.log(`humidity: ${humidity}, temperature: ${temperature} in monitor screen`);
    }
}

class WheatenStation implements IObservable {
    private subscribers:IObserver[] = [];
    private humidity: number = 0;
    private temperature: number = 0;
    
    public register(subscriber) {
        this.subscribers.push(subscriber)
    }

    public remove(subscriber) {
        const index = this.subscribers.indexOf(subscriber);
        if (index) {
            this.subscribers.splice(index, 1);
        }
    }

    public receiveNewDate(h: number, t: number) {
        this.humidity = h;
        this.temperature = t;
        
        this.notify();
    }

    public notify() {
        for(let subscriber of this.subscribers) {
            subscriber.update(this.humidity, this.temperature)
        }
    }
}

const wheatenStation = new WheatenStation();

const mobile1 = new MobileDisplay();
wheatenStation.register(mobile1);

const mobile2 = new MobileDisplay();
wheatenStation.register(mobile2)

const monitor1 = new MonitorDisplay();
wheatenStation.register(monitor1)

const monitor2 = new MonitorDisplay();
wheatenStation.register(monitor2)

wheatenStation.receiveNewDate(10, 20);

wheatenStation.remove(mobile2);
wheatenStation.receiveNewDate(1, 23);
