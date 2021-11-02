interface ICommand {
    execute: () => void;
    unExecute: () => void;
}

class LightOnCommand implements ICommand {
    public light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute() {
        this.light.on();
    }

    unExecute() {
        this.light.off();
    }
}

class LightOffCommand implements ICommand {
    public light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute() {
        this.light.off();
    }

    unExecute() {
        this.light.on();
    }
}

class Light {
    name: string

    constructor(name: string) {
        this.name = name;
    }

    on() {
        console.log(this.name + ' Turn light on')
    }

    off() {
        console.log(this.name + ' Turn light off')
    }
}

const livingRoomLight = new Light('Living Room Light');
const livingRoomOnCommand = new LightOnCommand(livingRoomLight);
const livingRoomOffCommand = new LightOffCommand(livingRoomLight);

const bedRoomLight = new Light('Bed Room Light');
const bedRoomOnCommand = new LightOnCommand(bedRoomLight);
const bedRoomOffCommand = new LightOffCommand(bedRoomLight);

livingRoomOnCommand.execute();
bedRoomOnCommand.execute();
bedRoomOffCommand.execute();
livingRoomOffCommand.execute();
bedRoomOnCommand.execute();